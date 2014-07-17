// Compiled by ClojureScript 0.0-2261
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t38934 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38934 = (function (f,fn_handler,meta38935){
this.f = f;
this.fn_handler = fn_handler;
this.meta38935 = meta38935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38934.cljs$lang$type = true;
cljs.core.async.t38934.cljs$lang$ctorStr = "cljs.core.async/t38934";
cljs.core.async.t38934.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38934");
});
cljs.core.async.t38934.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t38934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t38934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38936){var self__ = this;
var _38936__$1 = this;return self__.meta38935;
});
cljs.core.async.t38934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38936,meta38935__$1){var self__ = this;
var _38936__$1 = this;return (new cljs.core.async.t38934(self__.f,self__.fn_handler,meta38935__$1));
});
cljs.core.async.__GT_t38934 = (function __GT_t38934(f__$1,fn_handler__$1,meta38935){return (new cljs.core.async.t38934(f__$1,fn_handler__$1,meta38935));
});
}
return (new cljs.core.async.t38934(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__38938 = buff;if(G__38938)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__38938.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__38938.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__38938);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__38938);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
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
{var val_38939 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38939) : fn1.call(null,val_38939));
} else
{cljs.core.async.impl.dispatch.run(((function (val_38939,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38939) : fn1.call(null,val_38939));
});})(val_38939,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___38940 = n;var x_38941 = (0);while(true){
if((x_38941 < n__4399__auto___38940))
{(a[x_38941] = (0));
{
var G__38942 = (x_38941 + (1));
x_38941 = G__38942;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__38943 = (i + (1));
i = G__38943;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t38947 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38947 = (function (flag,alt_flag,meta38948){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta38948 = meta38948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38947.cljs$lang$type = true;
cljs.core.async.t38947.cljs$lang$ctorStr = "cljs.core.async/t38947";
cljs.core.async.t38947.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38947");
});})(flag))
;
cljs.core.async.t38947.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t38947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t38947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38949){var self__ = this;
var _38949__$1 = this;return self__.meta38948;
});})(flag))
;
cljs.core.async.t38947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38949,meta38948__$1){var self__ = this;
var _38949__$1 = this;return (new cljs.core.async.t38947(self__.flag,self__.alt_flag,meta38948__$1));
});})(flag))
;
cljs.core.async.__GT_t38947 = ((function (flag){
return (function __GT_t38947(flag__$1,alt_flag__$1,meta38948){return (new cljs.core.async.t38947(flag__$1,alt_flag__$1,meta38948));
});})(flag))
;
}
return (new cljs.core.async.t38947(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t38953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38953 = (function (cb,flag,alt_handler,meta38954){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta38954 = meta38954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38953.cljs$lang$type = true;
cljs.core.async.t38953.cljs$lang$ctorStr = "cljs.core.async/t38953";
cljs.core.async.t38953.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38953");
});
cljs.core.async.t38953.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t38953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t38953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38955){var self__ = this;
var _38955__$1 = this;return self__.meta38954;
});
cljs.core.async.t38953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38955,meta38954__$1){var self__ = this;
var _38955__$1 = this;return (new cljs.core.async.t38953(self__.cb,self__.flag,self__.alt_handler,meta38954__$1));
});
cljs.core.async.__GT_t38953 = (function __GT_t38953(cb__$1,flag__$1,alt_handler__$1,meta38954){return (new cljs.core.async.t38953(cb__$1,flag__$1,alt_handler__$1,meta38954));
});
}
return (new cljs.core.async.t38953(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38956_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38956_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38956_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__38957 = (i + (1));
i = G__38957;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$763))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3531__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$763.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$763], null));
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
var alts_BANG___delegate = function (ports,p__38958){var map__38960 = p__38958;var map__38960__$1 = ((cljs.core.seq_QMARK_(map__38960))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38960):map__38960);var opts = map__38960__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__38958 = null;if (arguments.length > 1) {
  p__38958 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__38958);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__38961){
var ports = cljs.core.first(arglist__38961);
var p__38958 = cljs.core.rest(arglist__38961);
return alts_BANG___delegate(ports,p__38958);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t38969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38969 = (function (ch,f,map_LT_,meta38970){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38970 = meta38970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38969.cljs$lang$type = true;
cljs.core.async.t38969.cljs$lang$ctorStr = "cljs.core.async/t38969";
cljs.core.async.t38969.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38969");
});
cljs.core.async.t38969.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t38969.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t38972 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38972 = (function (fn1,_,meta38970,ch,f,map_LT_,meta38973){
this.fn1 = fn1;
this._ = _;
this.meta38970 = meta38970;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38973 = meta38973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38972.cljs$lang$type = true;
cljs.core.async.t38972.cljs$lang$ctorStr = "cljs.core.async/t38972";
cljs.core.async.t38972.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38972");
});})(___$1))
;
cljs.core.async.t38972.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t38972.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t38972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__38962_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__38962_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38962_SHARP_) : self__.f.call(null,p1__38962_SHARP_)))) : f1.call(null,(((p1__38962_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38962_SHARP_) : self__.f.call(null,p1__38962_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t38972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38974){var self__ = this;
var _38974__$1 = this;return self__.meta38973;
});})(___$1))
;
cljs.core.async.t38972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38974,meta38973__$1){var self__ = this;
var _38974__$1 = this;return (new cljs.core.async.t38972(self__.fn1,self__._,self__.meta38970,self__.ch,self__.f,self__.map_LT_,meta38973__$1));
});})(___$1))
;
cljs.core.async.__GT_t38972 = ((function (___$1){
return (function __GT_t38972(fn1__$1,___$2,meta38970__$1,ch__$2,f__$2,map_LT___$2,meta38973){return (new cljs.core.async.t38972(fn1__$1,___$2,meta38970__$1,ch__$2,f__$2,map_LT___$2,meta38973));
});})(___$1))
;
}
return (new cljs.core.async.t38972(fn1,___$1,self__.meta38970,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t38969.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t38969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38971){var self__ = this;
var _38971__$1 = this;return self__.meta38970;
});
cljs.core.async.t38969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38971,meta38970__$1){var self__ = this;
var _38971__$1 = this;return (new cljs.core.async.t38969(self__.ch,self__.f,self__.map_LT_,meta38970__$1));
});
cljs.core.async.__GT_t38969 = (function __GT_t38969(ch__$1,f__$1,map_LT___$1,meta38970){return (new cljs.core.async.t38969(ch__$1,f__$1,map_LT___$1,meta38970));
});
}
return (new cljs.core.async.t38969(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t38978 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38978 = (function (ch,f,map_GT_,meta38979){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta38979 = meta38979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38978.cljs$lang$type = true;
cljs.core.async.t38978.cljs$lang$ctorStr = "cljs.core.async/t38978";
cljs.core.async.t38978.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38978");
});
cljs.core.async.t38978.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t38978.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t38978.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t38978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38980){var self__ = this;
var _38980__$1 = this;return self__.meta38979;
});
cljs.core.async.t38978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38980,meta38979__$1){var self__ = this;
var _38980__$1 = this;return (new cljs.core.async.t38978(self__.ch,self__.f,self__.map_GT_,meta38979__$1));
});
cljs.core.async.__GT_t38978 = (function __GT_t38978(ch__$1,f__$1,map_GT___$1,meta38979){return (new cljs.core.async.t38978(ch__$1,f__$1,map_GT___$1,meta38979));
});
}
return (new cljs.core.async.t38978(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t38984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38984 = (function (ch,p,filter_GT_,meta38985){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta38985 = meta38985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38984.cljs$lang$type = true;
cljs.core.async.t38984.cljs$lang$ctorStr = "cljs.core.async/t38984";
cljs.core.async.t38984.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38984");
});
cljs.core.async.t38984.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t38984.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t38984.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t38984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38986){var self__ = this;
var _38986__$1 = this;return self__.meta38985;
});
cljs.core.async.t38984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38986,meta38985__$1){var self__ = this;
var _38986__$1 = this;return (new cljs.core.async.t38984(self__.ch,self__.p,self__.filter_GT_,meta38985__$1));
});
cljs.core.async.__GT_t38984 = (function __GT_t38984(ch__$1,p__$1,filter_GT___$1,meta38985){return (new cljs.core.async.t38984(ch__$1,p__$1,filter_GT___$1,meta38985));
});
}
return (new cljs.core.async.t38984(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39069,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39069,out){
return (function (state_39048){var state_val_39049 = (state_39048[(1)]);if((state_val_39049 === (7)))
{var inst_39044 = (state_39048[(2)]);var state_39048__$1 = state_39048;var statearr_39050_39070 = state_39048__$1;(statearr_39050_39070[(2)] = inst_39044);
(statearr_39050_39070[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39049 === (1)))
{var state_39048__$1 = state_39048;var statearr_39051_39071 = state_39048__$1;(statearr_39051_39071[(2)] = null);
(statearr_39051_39071[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39049 === (4)))
{var inst_39030 = (state_39048[(7)]);var inst_39030__$1 = (state_39048[(2)]);var inst_39031 = (inst_39030__$1 == null);var state_39048__$1 = (function (){var statearr_39052 = state_39048;(statearr_39052[(7)] = inst_39030__$1);
return statearr_39052;
})();if(cljs.core.truth_(inst_39031))
{var statearr_39053_39072 = state_39048__$1;(statearr_39053_39072[(1)] = (5));
} else
{var statearr_39054_39073 = state_39048__$1;(statearr_39054_39073[(1)] = (6));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39049 === (6)))
{var inst_39030 = (state_39048[(7)]);var inst_39035 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39030) : p.call(null,inst_39030));var state_39048__$1 = state_39048;if(cljs.core.truth_(inst_39035))
{var statearr_39055_39074 = state_39048__$1;(statearr_39055_39074[(1)] = (8));
} else
{var statearr_39056_39075 = state_39048__$1;(statearr_39056_39075[(1)] = (9));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39049 === (3)))
{var inst_39046 = (state_39048[(2)]);var state_39048__$1 = state_39048;return cljs.core.async.impl.ioc_helpers.return_chan(state_39048__$1,inst_39046);
} else
{if((state_val_39049 === (2)))
{var state_39048__$1 = state_39048;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39048__$1,(4),ch);
} else
{if((state_val_39049 === (11)))
{var inst_39038 = (state_39048[(2)]);var state_39048__$1 = state_39048;var statearr_39057_39076 = state_39048__$1;(statearr_39057_39076[(2)] = inst_39038);
(statearr_39057_39076[(1)] = (10));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39049 === (9)))
{var state_39048__$1 = state_39048;var statearr_39058_39077 = state_39048__$1;(statearr_39058_39077[(2)] = null);
(statearr_39058_39077[(1)] = (10));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39049 === (5)))
{var inst_39033 = cljs.core.async.close_BANG_(out);var state_39048__$1 = state_39048;var statearr_39059_39078 = state_39048__$1;(statearr_39059_39078[(2)] = inst_39033);
(statearr_39059_39078[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39049 === (10)))
{var inst_39041 = (state_39048[(2)]);var state_39048__$1 = (function (){var statearr_39060 = state_39048;(statearr_39060[(8)] = inst_39041);
return statearr_39060;
})();var statearr_39061_39079 = state_39048__$1;(statearr_39061_39079[(2)] = null);
(statearr_39061_39079[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39049 === (8)))
{var inst_39030 = (state_39048[(7)]);var state_39048__$1 = state_39048;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39048__$1,(11),out,inst_39030);
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
});})(c__5693__auto___39069,out))
;return ((function (switch__5678__auto__,c__5693__auto___39069,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39065 = [null,null,null,null,null,null,null,null,null];(statearr_39065[(0)] = state_machine__5679__auto__);
(statearr_39065[(1)] = (1));
return statearr_39065;
});
var state_machine__5679__auto____1 = (function (state_39048){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39048);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39066){if((e39066 instanceof Object))
{var ex__5682__auto__ = e39066;var statearr_39067_39080 = state_39048;(statearr_39067_39080[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39048);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e39066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__39081 = state_39048;
state_39048 = G__39081;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39048){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39069,out))
})();var state__5695__auto__ = (function (){var statearr_39068 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39069);
return statearr_39068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39069,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_39233){var state_val_39234 = (state_39233[(1)]);if((state_val_39234 === (7)))
{var inst_39229 = (state_39233[(2)]);var state_39233__$1 = state_39233;var statearr_39235_39272 = state_39233__$1;(statearr_39235_39272[(2)] = inst_39229);
(statearr_39235_39272[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (20)))
{var inst_39204 = (state_39233[(7)]);var inst_39215 = (state_39233[(2)]);var inst_39216 = cljs.core.next(inst_39204);var inst_39190 = inst_39216;var inst_39191 = null;var inst_39192 = (0);var inst_39193 = (0);var state_39233__$1 = (function (){var statearr_39236 = state_39233;(statearr_39236[(8)] = inst_39192);
(statearr_39236[(9)] = inst_39215);
(statearr_39236[(10)] = inst_39193);
(statearr_39236[(11)] = inst_39191);
(statearr_39236[(12)] = inst_39190);
return statearr_39236;
})();var statearr_39237_39273 = state_39233__$1;(statearr_39237_39273[(2)] = null);
(statearr_39237_39273[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (1)))
{var state_39233__$1 = state_39233;var statearr_39238_39274 = state_39233__$1;(statearr_39238_39274[(2)] = null);
(statearr_39238_39274[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (4)))
{var inst_39179 = (state_39233[(13)]);var inst_39179__$1 = (state_39233[(2)]);var inst_39180 = (inst_39179__$1 == null);var state_39233__$1 = (function (){var statearr_39242 = state_39233;(statearr_39242[(13)] = inst_39179__$1);
return statearr_39242;
})();if(cljs.core.truth_(inst_39180))
{var statearr_39243_39275 = state_39233__$1;(statearr_39243_39275[(1)] = (5));
} else
{var statearr_39244_39276 = state_39233__$1;(statearr_39244_39276[(1)] = (6));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (15)))
{var state_39233__$1 = state_39233;var statearr_39245_39277 = state_39233__$1;(statearr_39245_39277[(2)] = null);
(statearr_39245_39277[(1)] = (16));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (13)))
{var inst_39192 = (state_39233[(8)]);var inst_39193 = (state_39233[(10)]);var inst_39191 = (state_39233[(11)]);var inst_39190 = (state_39233[(12)]);var inst_39200 = (state_39233[(2)]);var inst_39201 = (inst_39193 + (1));var tmp39239 = inst_39192;var tmp39240 = inst_39191;var tmp39241 = inst_39190;var inst_39190__$1 = tmp39241;var inst_39191__$1 = tmp39240;var inst_39192__$1 = tmp39239;var inst_39193__$1 = inst_39201;var state_39233__$1 = (function (){var statearr_39246 = state_39233;(statearr_39246[(8)] = inst_39192__$1);
(statearr_39246[(10)] = inst_39193__$1);
(statearr_39246[(11)] = inst_39191__$1);
(statearr_39246[(14)] = inst_39200);
(statearr_39246[(12)] = inst_39190__$1);
return statearr_39246;
})();var statearr_39247_39278 = state_39233__$1;(statearr_39247_39278[(2)] = null);
(statearr_39247_39278[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (6)))
{var inst_39179 = (state_39233[(13)]);var inst_39184 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39179) : f.call(null,inst_39179));var inst_39189 = cljs.core.seq(inst_39184);var inst_39190 = inst_39189;var inst_39191 = null;var inst_39192 = (0);var inst_39193 = (0);var state_39233__$1 = (function (){var statearr_39248 = state_39233;(statearr_39248[(8)] = inst_39192);
(statearr_39248[(10)] = inst_39193);
(statearr_39248[(11)] = inst_39191);
(statearr_39248[(12)] = inst_39190);
return statearr_39248;
})();var statearr_39249_39279 = state_39233__$1;(statearr_39249_39279[(2)] = null);
(statearr_39249_39279[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (17)))
{var inst_39204 = (state_39233[(7)]);var inst_39208 = cljs.core.chunk_first(inst_39204);var inst_39209 = cljs.core.chunk_rest(inst_39204);var inst_39210 = cljs.core.count(inst_39208);var inst_39190 = inst_39209;var inst_39191 = inst_39208;var inst_39192 = inst_39210;var inst_39193 = (0);var state_39233__$1 = (function (){var statearr_39250 = state_39233;(statearr_39250[(8)] = inst_39192);
(statearr_39250[(10)] = inst_39193);
(statearr_39250[(11)] = inst_39191);
(statearr_39250[(12)] = inst_39190);
return statearr_39250;
})();var statearr_39251_39280 = state_39233__$1;(statearr_39251_39280[(2)] = null);
(statearr_39251_39280[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (3)))
{var inst_39231 = (state_39233[(2)]);var state_39233__$1 = state_39233;return cljs.core.async.impl.ioc_helpers.return_chan(state_39233__$1,inst_39231);
} else
{if((state_val_39234 === (12)))
{var inst_39224 = (state_39233[(2)]);var state_39233__$1 = state_39233;var statearr_39252_39281 = state_39233__$1;(statearr_39252_39281[(2)] = inst_39224);
(statearr_39252_39281[(1)] = (9));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (2)))
{var state_39233__$1 = state_39233;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39233__$1,(4),in$);
} else
{if((state_val_39234 === (19)))
{var inst_39219 = (state_39233[(2)]);var state_39233__$1 = state_39233;var statearr_39253_39282 = state_39233__$1;(statearr_39253_39282[(2)] = inst_39219);
(statearr_39253_39282[(1)] = (16));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (11)))
{var inst_39204 = (state_39233[(7)]);var inst_39190 = (state_39233[(12)]);var inst_39204__$1 = cljs.core.seq(inst_39190);var state_39233__$1 = (function (){var statearr_39254 = state_39233;(statearr_39254[(7)] = inst_39204__$1);
return statearr_39254;
})();if(inst_39204__$1)
{var statearr_39255_39283 = state_39233__$1;(statearr_39255_39283[(1)] = (14));
} else
{var statearr_39256_39284 = state_39233__$1;(statearr_39256_39284[(1)] = (15));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (9)))
{var inst_39226 = (state_39233[(2)]);var state_39233__$1 = (function (){var statearr_39257 = state_39233;(statearr_39257[(15)] = inst_39226);
return statearr_39257;
})();var statearr_39258_39285 = state_39233__$1;(statearr_39258_39285[(2)] = null);
(statearr_39258_39285[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (5)))
{var inst_39182 = cljs.core.async.close_BANG_(out);var state_39233__$1 = state_39233;var statearr_39259_39286 = state_39233__$1;(statearr_39259_39286[(2)] = inst_39182);
(statearr_39259_39286[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (14)))
{var inst_39204 = (state_39233[(7)]);var inst_39206 = cljs.core.chunked_seq_QMARK_(inst_39204);var state_39233__$1 = state_39233;if(inst_39206)
{var statearr_39260_39287 = state_39233__$1;(statearr_39260_39287[(1)] = (17));
} else
{var statearr_39261_39288 = state_39233__$1;(statearr_39261_39288[(1)] = (18));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (16)))
{var inst_39222 = (state_39233[(2)]);var state_39233__$1 = state_39233;var statearr_39262_39289 = state_39233__$1;(statearr_39262_39289[(2)] = inst_39222);
(statearr_39262_39289[(1)] = (12));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39234 === (10)))
{var inst_39193 = (state_39233[(10)]);var inst_39191 = (state_39233[(11)]);var inst_39198 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39191,inst_39193);var state_39233__$1 = state_39233;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39233__$1,(13),out,inst_39198);
} else
{if((state_val_39234 === (18)))
{var inst_39204 = (state_39233[(7)]);var inst_39213 = cljs.core.first(inst_39204);var state_39233__$1 = state_39233;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39233__$1,(20),out,inst_39213);
} else
{if((state_val_39234 === (8)))
{var inst_39192 = (state_39233[(8)]);var inst_39193 = (state_39233[(10)]);var inst_39195 = (inst_39193 < inst_39192);var inst_39196 = inst_39195;var state_39233__$1 = state_39233;if(cljs.core.truth_(inst_39196))
{var statearr_39263_39290 = state_39233__$1;(statearr_39263_39290[(1)] = (10));
} else
{var statearr_39264_39291 = state_39233__$1;(statearr_39264_39291[(1)] = (11));
}
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39268[(0)] = state_machine__5679__auto__);
(statearr_39268[(1)] = (1));
return statearr_39268;
});
var state_machine__5679__auto____1 = (function (state_39233){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39233);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39269){if((e39269 instanceof Object))
{var ex__5682__auto__ = e39269;var statearr_39270_39292 = state_39233;(statearr_39270_39292[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39233);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e39269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__39293 = state_39233;
state_39233 = G__39293;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39233){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_39271 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_39271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___39374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39374){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39374){
return (function (state_39353){var state_val_39354 = (state_39353[(1)]);if((state_val_39354 === (7)))
{var inst_39349 = (state_39353[(2)]);var state_39353__$1 = state_39353;var statearr_39355_39375 = state_39353__$1;(statearr_39355_39375[(2)] = inst_39349);
(statearr_39355_39375[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39354 === (1)))
{var state_39353__$1 = state_39353;var statearr_39356_39376 = state_39353__$1;(statearr_39356_39376[(2)] = null);
(statearr_39356_39376[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39354 === (4)))
{var inst_39336 = (state_39353[(7)]);var inst_39336__$1 = (state_39353[(2)]);var inst_39337 = (inst_39336__$1 == null);var state_39353__$1 = (function (){var statearr_39357 = state_39353;(statearr_39357[(7)] = inst_39336__$1);
return statearr_39357;
})();if(cljs.core.truth_(inst_39337))
{var statearr_39358_39377 = state_39353__$1;(statearr_39358_39377[(1)] = (5));
} else
{var statearr_39359_39378 = state_39353__$1;(statearr_39359_39378[(1)] = (6));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39354 === (6)))
{var inst_39336 = (state_39353[(7)]);var state_39353__$1 = state_39353;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39353__$1,(11),to,inst_39336);
} else
{if((state_val_39354 === (3)))
{var inst_39351 = (state_39353[(2)]);var state_39353__$1 = state_39353;return cljs.core.async.impl.ioc_helpers.return_chan(state_39353__$1,inst_39351);
} else
{if((state_val_39354 === (2)))
{var state_39353__$1 = state_39353;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39353__$1,(4),from);
} else
{if((state_val_39354 === (11)))
{var inst_39346 = (state_39353[(2)]);var state_39353__$1 = (function (){var statearr_39360 = state_39353;(statearr_39360[(8)] = inst_39346);
return statearr_39360;
})();var statearr_39361_39379 = state_39353__$1;(statearr_39361_39379[(2)] = null);
(statearr_39361_39379[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39354 === (9)))
{var state_39353__$1 = state_39353;var statearr_39362_39380 = state_39353__$1;(statearr_39362_39380[(2)] = null);
(statearr_39362_39380[(1)] = (10));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39354 === (5)))
{var state_39353__$1 = state_39353;if(cljs.core.truth_(close_QMARK_))
{var statearr_39363_39381 = state_39353__$1;(statearr_39363_39381[(1)] = (8));
} else
{var statearr_39364_39382 = state_39353__$1;(statearr_39364_39382[(1)] = (9));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39354 === (10)))
{var inst_39343 = (state_39353[(2)]);var state_39353__$1 = state_39353;var statearr_39365_39383 = state_39353__$1;(statearr_39365_39383[(2)] = inst_39343);
(statearr_39365_39383[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39354 === (8)))
{var inst_39340 = cljs.core.async.close_BANG_(to);var state_39353__$1 = state_39353;var statearr_39366_39384 = state_39353__$1;(statearr_39366_39384[(2)] = inst_39340);
(statearr_39366_39384[(1)] = (10));
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto___39374))
;return ((function (switch__5678__auto__,c__5693__auto___39374){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39370 = [null,null,null,null,null,null,null,null,null];(statearr_39370[(0)] = state_machine__5679__auto__);
(statearr_39370[(1)] = (1));
return statearr_39370;
});
var state_machine__5679__auto____1 = (function (state_39353){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39353);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39371){if((e39371 instanceof Object))
{var ex__5682__auto__ = e39371;var statearr_39372_39385 = state_39353;(statearr_39372_39385[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39353);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e39371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__39386 = state_39353;
state_39353 = G__39386;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39353){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39374))
})();var state__5695__auto__ = (function (){var statearr_39373 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39374);
return statearr_39373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39374))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5693__auto___39473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39473,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39473,tc,fc){
return (function (state_39451){var state_val_39452 = (state_39451[(1)]);if((state_val_39452 === (7)))
{var inst_39447 = (state_39451[(2)]);var state_39451__$1 = state_39451;var statearr_39453_39474 = state_39451__$1;(statearr_39453_39474[(2)] = inst_39447);
(statearr_39453_39474[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39452 === (1)))
{var state_39451__$1 = state_39451;var statearr_39454_39475 = state_39451__$1;(statearr_39454_39475[(2)] = null);
(statearr_39454_39475[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39452 === (4)))
{var inst_39432 = (state_39451[(7)]);var inst_39432__$1 = (state_39451[(2)]);var inst_39433 = (inst_39432__$1 == null);var state_39451__$1 = (function (){var statearr_39455 = state_39451;(statearr_39455[(7)] = inst_39432__$1);
return statearr_39455;
})();if(cljs.core.truth_(inst_39433))
{var statearr_39456_39476 = state_39451__$1;(statearr_39456_39476[(1)] = (5));
} else
{var statearr_39457_39477 = state_39451__$1;(statearr_39457_39477[(1)] = (6));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39452 === (6)))
{var inst_39432 = (state_39451[(7)]);var inst_39438 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39432) : p.call(null,inst_39432));var state_39451__$1 = state_39451;if(cljs.core.truth_(inst_39438))
{var statearr_39458_39478 = state_39451__$1;(statearr_39458_39478[(1)] = (9));
} else
{var statearr_39459_39479 = state_39451__$1;(statearr_39459_39479[(1)] = (10));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39452 === (3)))
{var inst_39449 = (state_39451[(2)]);var state_39451__$1 = state_39451;return cljs.core.async.impl.ioc_helpers.return_chan(state_39451__$1,inst_39449);
} else
{if((state_val_39452 === (2)))
{var state_39451__$1 = state_39451;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39451__$1,(4),ch);
} else
{if((state_val_39452 === (11)))
{var inst_39432 = (state_39451[(7)]);var inst_39442 = (state_39451[(2)]);var state_39451__$1 = state_39451;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39451__$1,(8),inst_39442,inst_39432);
} else
{if((state_val_39452 === (9)))
{var state_39451__$1 = state_39451;var statearr_39460_39480 = state_39451__$1;(statearr_39460_39480[(2)] = tc);
(statearr_39460_39480[(1)] = (11));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39452 === (5)))
{var inst_39435 = cljs.core.async.close_BANG_(tc);var inst_39436 = cljs.core.async.close_BANG_(fc);var state_39451__$1 = (function (){var statearr_39461 = state_39451;(statearr_39461[(8)] = inst_39435);
return statearr_39461;
})();var statearr_39462_39481 = state_39451__$1;(statearr_39462_39481[(2)] = inst_39436);
(statearr_39462_39481[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39452 === (10)))
{var state_39451__$1 = state_39451;var statearr_39463_39482 = state_39451__$1;(statearr_39463_39482[(2)] = fc);
(statearr_39463_39482[(1)] = (11));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39452 === (8)))
{var inst_39444 = (state_39451[(2)]);var state_39451__$1 = (function (){var statearr_39464 = state_39451;(statearr_39464[(9)] = inst_39444);
return statearr_39464;
})();var statearr_39465_39483 = state_39451__$1;(statearr_39465_39483[(2)] = null);
(statearr_39465_39483[(1)] = (2));
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto___39473,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___39473,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39469 = [null,null,null,null,null,null,null,null,null,null];(statearr_39469[(0)] = state_machine__5679__auto__);
(statearr_39469[(1)] = (1));
return statearr_39469;
});
var state_machine__5679__auto____1 = (function (state_39451){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39451);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39470){if((e39470 instanceof Object))
{var ex__5682__auto__ = e39470;var statearr_39471_39484 = state_39451;(statearr_39471_39484[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39451);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e39470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__39485 = state_39451;
state_39451 = G__39485;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39451){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39473,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_39472 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39473);
return statearr_39472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39473,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_39532){var state_val_39533 = (state_39532[(1)]);if((state_val_39533 === (7)))
{var inst_39528 = (state_39532[(2)]);var state_39532__$1 = state_39532;var statearr_39534_39550 = state_39532__$1;(statearr_39534_39550[(2)] = inst_39528);
(statearr_39534_39550[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39533 === (6)))
{var inst_39521 = (state_39532[(7)]);var inst_39518 = (state_39532[(8)]);var inst_39525 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39518,inst_39521) : f.call(null,inst_39518,inst_39521));var inst_39518__$1 = inst_39525;var state_39532__$1 = (function (){var statearr_39535 = state_39532;(statearr_39535[(8)] = inst_39518__$1);
return statearr_39535;
})();var statearr_39536_39551 = state_39532__$1;(statearr_39536_39551[(2)] = null);
(statearr_39536_39551[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39533 === (5)))
{var inst_39518 = (state_39532[(8)]);var state_39532__$1 = state_39532;var statearr_39537_39552 = state_39532__$1;(statearr_39537_39552[(2)] = inst_39518);
(statearr_39537_39552[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39533 === (4)))
{var inst_39521 = (state_39532[(7)]);var inst_39521__$1 = (state_39532[(2)]);var inst_39522 = (inst_39521__$1 == null);var state_39532__$1 = (function (){var statearr_39538 = state_39532;(statearr_39538[(7)] = inst_39521__$1);
return statearr_39538;
})();if(cljs.core.truth_(inst_39522))
{var statearr_39539_39553 = state_39532__$1;(statearr_39539_39553[(1)] = (5));
} else
{var statearr_39540_39554 = state_39532__$1;(statearr_39540_39554[(1)] = (6));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39533 === (3)))
{var inst_39530 = (state_39532[(2)]);var state_39532__$1 = state_39532;return cljs.core.async.impl.ioc_helpers.return_chan(state_39532__$1,inst_39530);
} else
{if((state_val_39533 === (2)))
{var state_39532__$1 = state_39532;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39532__$1,(4),ch);
} else
{if((state_val_39533 === (1)))
{var inst_39518 = init;var state_39532__$1 = (function (){var statearr_39541 = state_39532;(statearr_39541[(8)] = inst_39518);
return statearr_39541;
})();var statearr_39542_39555 = state_39532__$1;(statearr_39542_39555[(2)] = null);
(statearr_39542_39555[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39546 = [null,null,null,null,null,null,null,null,null];(statearr_39546[(0)] = state_machine__5679__auto__);
(statearr_39546[(1)] = (1));
return statearr_39546;
});
var state_machine__5679__auto____1 = (function (state_39532){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39532);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39547){if((e39547 instanceof Object))
{var ex__5682__auto__ = e39547;var statearr_39548_39556 = state_39532;(statearr_39548_39556[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39532);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e39547;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__39557 = state_39532;
state_39532 = G__39557;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39532){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_39549 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_39549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_39619){var state_val_39620 = (state_39619[(1)]);if((state_val_39620 === (7)))
{var inst_39600 = (state_39619[(7)]);var inst_39605 = (state_39619[(2)]);var inst_39606 = cljs.core.next(inst_39600);var inst_39600__$1 = inst_39606;var state_39619__$1 = (function (){var statearr_39621 = state_39619;(statearr_39621[(8)] = inst_39605);
(statearr_39621[(7)] = inst_39600__$1);
return statearr_39621;
})();var statearr_39622_39640 = state_39619__$1;(statearr_39622_39640[(2)] = null);
(statearr_39622_39640[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39620 === (1)))
{var inst_39599 = cljs.core.seq(coll);var inst_39600 = inst_39599;var state_39619__$1 = (function (){var statearr_39623 = state_39619;(statearr_39623[(7)] = inst_39600);
return statearr_39623;
})();var statearr_39624_39641 = state_39619__$1;(statearr_39624_39641[(2)] = null);
(statearr_39624_39641[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39620 === (4)))
{var inst_39600 = (state_39619[(7)]);var inst_39603 = cljs.core.first(inst_39600);var state_39619__$1 = state_39619;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39619__$1,(7),ch,inst_39603);
} else
{if((state_val_39620 === (6)))
{var inst_39615 = (state_39619[(2)]);var state_39619__$1 = state_39619;var statearr_39625_39642 = state_39619__$1;(statearr_39625_39642[(2)] = inst_39615);
(statearr_39625_39642[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39620 === (3)))
{var inst_39617 = (state_39619[(2)]);var state_39619__$1 = state_39619;return cljs.core.async.impl.ioc_helpers.return_chan(state_39619__$1,inst_39617);
} else
{if((state_val_39620 === (2)))
{var inst_39600 = (state_39619[(7)]);var state_39619__$1 = state_39619;if(cljs.core.truth_(inst_39600))
{var statearr_39626_39643 = state_39619__$1;(statearr_39626_39643[(1)] = (4));
} else
{var statearr_39627_39644 = state_39619__$1;(statearr_39627_39644[(1)] = (5));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39620 === (9)))
{var state_39619__$1 = state_39619;var statearr_39628_39645 = state_39619__$1;(statearr_39628_39645[(2)] = null);
(statearr_39628_39645[(1)] = (10));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39620 === (5)))
{var state_39619__$1 = state_39619;if(cljs.core.truth_(close_QMARK_))
{var statearr_39629_39646 = state_39619__$1;(statearr_39629_39646[(1)] = (8));
} else
{var statearr_39630_39647 = state_39619__$1;(statearr_39630_39647[(1)] = (9));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_39620 === (10)))
{var inst_39613 = (state_39619[(2)]);var state_39619__$1 = state_39619;var statearr_39631_39648 = state_39619__$1;(statearr_39631_39648[(2)] = inst_39613);
(statearr_39631_39648[(1)] = (6));
return cljs.core.constant$keyword$771;
} else
{if((state_val_39620 === (8)))
{var inst_39610 = cljs.core.async.close_BANG_(ch);var state_39619__$1 = state_39619;var statearr_39632_39649 = state_39619__$1;(statearr_39632_39649[(2)] = inst_39610);
(statearr_39632_39649[(1)] = (10));
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39636 = [null,null,null,null,null,null,null,null,null];(statearr_39636[(0)] = state_machine__5679__auto__);
(statearr_39636[(1)] = (1));
return statearr_39636;
});
var state_machine__5679__auto____1 = (function (state_39619){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39619);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39637){if((e39637 instanceof Object))
{var ex__5682__auto__ = e39637;var statearr_39638_39650 = state_39619;(statearr_39638_39650[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39619);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e39637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__39651 = state_39619;
state_39619 = G__39651;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39619){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_39639 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_39639;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj39653 = {};return obj39653;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj39655 = {};return obj39655;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t39879 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39879 = (function (cs,ch,mult,meta39880){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta39880 = meta39880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39879.cljs$lang$type = true;
cljs.core.async.t39879.cljs$lang$ctorStr = "cljs.core.async/t39879";
cljs.core.async.t39879.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39879");
});})(cs))
;
cljs.core.async.t39879.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t39879.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t39879.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t39879.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t39879.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39879.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t39879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39881){var self__ = this;
var _39881__$1 = this;return self__.meta39880;
});})(cs))
;
cljs.core.async.t39879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39881,meta39880__$1){var self__ = this;
var _39881__$1 = this;return (new cljs.core.async.t39879(self__.cs,self__.ch,self__.mult,meta39880__$1));
});})(cs))
;
cljs.core.async.__GT_t39879 = ((function (cs){
return (function __GT_t39879(cs__$1,ch__$1,mult__$1,meta39880){return (new cljs.core.async.t39879(cs__$1,ch__$1,mult__$1,meta39880));
});})(cs))
;
}
return (new cljs.core.async.t39879(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___40102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40102,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40102,cs,m,dchan,dctr,done){
return (function (state_40016){var state_val_40017 = (state_40016[(1)]);if((state_val_40017 === (7)))
{var inst_40012 = (state_40016[(2)]);var state_40016__$1 = state_40016;var statearr_40018_40103 = state_40016__$1;(statearr_40018_40103[(2)] = inst_40012);
(statearr_40018_40103[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (20)))
{var inst_39913 = (state_40016[(7)]);var inst_39923 = cljs.core.first(inst_39913);var inst_39924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39923,(0),null);var inst_39925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39923,(1),null);var state_40016__$1 = (function (){var statearr_40019 = state_40016;(statearr_40019[(8)] = inst_39924);
return statearr_40019;
})();if(cljs.core.truth_(inst_39925))
{var statearr_40020_40104 = state_40016__$1;(statearr_40020_40104[(1)] = (22));
} else
{var statearr_40021_40105 = state_40016__$1;(statearr_40021_40105[(1)] = (23));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (27)))
{var inst_39955 = (state_40016[(9)]);var inst_39953 = (state_40016[(10)]);var inst_39960 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39953,inst_39955);var state_40016__$1 = (function (){var statearr_40022 = state_40016;(statearr_40022[(11)] = inst_39960);
return statearr_40022;
})();var statearr_40023_40106 = state_40016__$1;(statearr_40023_40106[(2)] = null);
(statearr_40023_40106[(1)] = (32));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (1)))
{var state_40016__$1 = state_40016;var statearr_40024_40107 = state_40016__$1;(statearr_40024_40107[(2)] = null);
(statearr_40024_40107[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (24)))
{var inst_39913 = (state_40016[(7)]);var inst_39930 = (state_40016[(2)]);var inst_39931 = cljs.core.next(inst_39913);var inst_39893 = inst_39931;var inst_39894 = null;var inst_39895 = (0);var inst_39896 = (0);var state_40016__$1 = (function (){var statearr_40025 = state_40016;(statearr_40025[(12)] = inst_39930);
(statearr_40025[(13)] = inst_39894);
(statearr_40025[(14)] = inst_39896);
(statearr_40025[(15)] = inst_39895);
(statearr_40025[(16)] = inst_39893);
return statearr_40025;
})();var statearr_40026_40108 = state_40016__$1;(statearr_40026_40108[(2)] = null);
(statearr_40026_40108[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (39)))
{var inst_39973 = (state_40016[(17)]);var inst_39991 = (state_40016[(2)]);var inst_39992 = cljs.core.next(inst_39973);var inst_39952 = inst_39992;var inst_39953 = null;var inst_39954 = (0);var inst_39955 = (0);var state_40016__$1 = (function (){var statearr_40030 = state_40016;(statearr_40030[(18)] = inst_39991);
(statearr_40030[(9)] = inst_39955);
(statearr_40030[(10)] = inst_39953);
(statearr_40030[(19)] = inst_39954);
(statearr_40030[(20)] = inst_39952);
return statearr_40030;
})();var statearr_40031_40109 = state_40016__$1;(statearr_40031_40109[(2)] = null);
(statearr_40031_40109[(1)] = (25));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (4)))
{var inst_39884 = (state_40016[(21)]);var inst_39884__$1 = (state_40016[(2)]);var inst_39885 = (inst_39884__$1 == null);var state_40016__$1 = (function (){var statearr_40032 = state_40016;(statearr_40032[(21)] = inst_39884__$1);
return statearr_40032;
})();if(cljs.core.truth_(inst_39885))
{var statearr_40033_40110 = state_40016__$1;(statearr_40033_40110[(1)] = (5));
} else
{var statearr_40034_40111 = state_40016__$1;(statearr_40034_40111[(1)] = (6));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (15)))
{var inst_39894 = (state_40016[(13)]);var inst_39896 = (state_40016[(14)]);var inst_39895 = (state_40016[(15)]);var inst_39893 = (state_40016[(16)]);var inst_39909 = (state_40016[(2)]);var inst_39910 = (inst_39896 + (1));var tmp40027 = inst_39894;var tmp40028 = inst_39895;var tmp40029 = inst_39893;var inst_39893__$1 = tmp40029;var inst_39894__$1 = tmp40027;var inst_39895__$1 = tmp40028;var inst_39896__$1 = inst_39910;var state_40016__$1 = (function (){var statearr_40035 = state_40016;(statearr_40035[(22)] = inst_39909);
(statearr_40035[(13)] = inst_39894__$1);
(statearr_40035[(14)] = inst_39896__$1);
(statearr_40035[(15)] = inst_39895__$1);
(statearr_40035[(16)] = inst_39893__$1);
return statearr_40035;
})();var statearr_40036_40112 = state_40016__$1;(statearr_40036_40112[(2)] = null);
(statearr_40036_40112[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (21)))
{var inst_39934 = (state_40016[(2)]);var state_40016__$1 = state_40016;var statearr_40037_40113 = state_40016__$1;(statearr_40037_40113[(2)] = inst_39934);
(statearr_40037_40113[(1)] = (18));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (31)))
{var inst_39960 = (state_40016[(11)]);var inst_39961 = (state_40016[(2)]);var inst_39962 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_39963 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39960);var state_40016__$1 = (function (){var statearr_40038 = state_40016;(statearr_40038[(23)] = inst_39962);
(statearr_40038[(24)] = inst_39961);
return statearr_40038;
})();var statearr_40039_40114 = state_40016__$1;(statearr_40039_40114[(2)] = inst_39963);
cljs.core.async.impl.ioc_helpers.process_exception(state_40016__$1);
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (32)))
{var inst_39960 = (state_40016[(11)]);var inst_39884 = (state_40016[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40016,(31),Object,null,(30));var inst_39967 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39960,inst_39884,done);var state_40016__$1 = state_40016;var statearr_40040_40115 = state_40016__$1;(statearr_40040_40115[(2)] = inst_39967);
cljs.core.async.impl.ioc_helpers.process_exception(state_40016__$1);
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (40)))
{var inst_39982 = (state_40016[(25)]);var inst_39983 = (state_40016[(2)]);var inst_39984 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_39985 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39982);var state_40016__$1 = (function (){var statearr_40041 = state_40016;(statearr_40041[(26)] = inst_39983);
(statearr_40041[(27)] = inst_39984);
return statearr_40041;
})();var statearr_40042_40116 = state_40016__$1;(statearr_40042_40116[(2)] = inst_39985);
cljs.core.async.impl.ioc_helpers.process_exception(state_40016__$1);
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (33)))
{var inst_39973 = (state_40016[(17)]);var inst_39975 = cljs.core.chunked_seq_QMARK_(inst_39973);var state_40016__$1 = state_40016;if(inst_39975)
{var statearr_40043_40117 = state_40016__$1;(statearr_40043_40117[(1)] = (36));
} else
{var statearr_40044_40118 = state_40016__$1;(statearr_40044_40118[(1)] = (37));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (13)))
{var inst_39903 = (state_40016[(28)]);var inst_39906 = cljs.core.async.close_BANG_(inst_39903);var state_40016__$1 = state_40016;var statearr_40045_40119 = state_40016__$1;(statearr_40045_40119[(2)] = inst_39906);
(statearr_40045_40119[(1)] = (15));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (22)))
{var inst_39924 = (state_40016[(8)]);var inst_39927 = cljs.core.async.close_BANG_(inst_39924);var state_40016__$1 = state_40016;var statearr_40046_40120 = state_40016__$1;(statearr_40046_40120[(2)] = inst_39927);
(statearr_40046_40120[(1)] = (24));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (36)))
{var inst_39973 = (state_40016[(17)]);var inst_39977 = cljs.core.chunk_first(inst_39973);var inst_39978 = cljs.core.chunk_rest(inst_39973);var inst_39979 = cljs.core.count(inst_39977);var inst_39952 = inst_39978;var inst_39953 = inst_39977;var inst_39954 = inst_39979;var inst_39955 = (0);var state_40016__$1 = (function (){var statearr_40047 = state_40016;(statearr_40047[(9)] = inst_39955);
(statearr_40047[(10)] = inst_39953);
(statearr_40047[(19)] = inst_39954);
(statearr_40047[(20)] = inst_39952);
return statearr_40047;
})();var statearr_40048_40121 = state_40016__$1;(statearr_40048_40121[(2)] = null);
(statearr_40048_40121[(1)] = (25));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (41)))
{var inst_39982 = (state_40016[(25)]);var inst_39884 = (state_40016[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40016,(40),Object,null,(39));var inst_39989 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39982,inst_39884,done);var state_40016__$1 = state_40016;var statearr_40049_40122 = state_40016__$1;(statearr_40049_40122[(2)] = inst_39989);
cljs.core.async.impl.ioc_helpers.process_exception(state_40016__$1);
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (43)))
{var state_40016__$1 = state_40016;var statearr_40050_40123 = state_40016__$1;(statearr_40050_40123[(2)] = null);
(statearr_40050_40123[(1)] = (44));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (29)))
{var inst_40000 = (state_40016[(2)]);var state_40016__$1 = state_40016;var statearr_40051_40124 = state_40016__$1;(statearr_40051_40124[(2)] = inst_40000);
(statearr_40051_40124[(1)] = (26));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (44)))
{var inst_40009 = (state_40016[(2)]);var state_40016__$1 = (function (){var statearr_40052 = state_40016;(statearr_40052[(29)] = inst_40009);
return statearr_40052;
})();var statearr_40053_40125 = state_40016__$1;(statearr_40053_40125[(2)] = null);
(statearr_40053_40125[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (6)))
{var inst_39944 = (state_40016[(30)]);var inst_39943 = cljs.core.deref(cs);var inst_39944__$1 = cljs.core.keys(inst_39943);var inst_39945 = cljs.core.count(inst_39944__$1);var inst_39946 = cljs.core.reset_BANG_(dctr,inst_39945);var inst_39951 = cljs.core.seq(inst_39944__$1);var inst_39952 = inst_39951;var inst_39953 = null;var inst_39954 = (0);var inst_39955 = (0);var state_40016__$1 = (function (){var statearr_40054 = state_40016;(statearr_40054[(31)] = inst_39946);
(statearr_40054[(30)] = inst_39944__$1);
(statearr_40054[(9)] = inst_39955);
(statearr_40054[(10)] = inst_39953);
(statearr_40054[(19)] = inst_39954);
(statearr_40054[(20)] = inst_39952);
return statearr_40054;
})();var statearr_40055_40126 = state_40016__$1;(statearr_40055_40126[(2)] = null);
(statearr_40055_40126[(1)] = (25));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (28)))
{var inst_39973 = (state_40016[(17)]);var inst_39952 = (state_40016[(20)]);var inst_39973__$1 = cljs.core.seq(inst_39952);var state_40016__$1 = (function (){var statearr_40056 = state_40016;(statearr_40056[(17)] = inst_39973__$1);
return statearr_40056;
})();if(inst_39973__$1)
{var statearr_40057_40127 = state_40016__$1;(statearr_40057_40127[(1)] = (33));
} else
{var statearr_40058_40128 = state_40016__$1;(statearr_40058_40128[(1)] = (34));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (25)))
{var inst_39955 = (state_40016[(9)]);var inst_39954 = (state_40016[(19)]);var inst_39957 = (inst_39955 < inst_39954);var inst_39958 = inst_39957;var state_40016__$1 = state_40016;if(cljs.core.truth_(inst_39958))
{var statearr_40059_40129 = state_40016__$1;(statearr_40059_40129[(1)] = (27));
} else
{var statearr_40060_40130 = state_40016__$1;(statearr_40060_40130[(1)] = (28));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (34)))
{var state_40016__$1 = state_40016;var statearr_40061_40131 = state_40016__$1;(statearr_40061_40131[(2)] = null);
(statearr_40061_40131[(1)] = (35));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (17)))
{var state_40016__$1 = state_40016;var statearr_40062_40132 = state_40016__$1;(statearr_40062_40132[(2)] = null);
(statearr_40062_40132[(1)] = (18));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (3)))
{var inst_40014 = (state_40016[(2)]);var state_40016__$1 = state_40016;return cljs.core.async.impl.ioc_helpers.return_chan(state_40016__$1,inst_40014);
} else
{if((state_val_40017 === (12)))
{var inst_39939 = (state_40016[(2)]);var state_40016__$1 = state_40016;var statearr_40063_40133 = state_40016__$1;(statearr_40063_40133[(2)] = inst_39939);
(statearr_40063_40133[(1)] = (9));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (2)))
{var state_40016__$1 = state_40016;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40016__$1,(4),ch);
} else
{if((state_val_40017 === (23)))
{var state_40016__$1 = state_40016;var statearr_40064_40134 = state_40016__$1;(statearr_40064_40134[(2)] = null);
(statearr_40064_40134[(1)] = (24));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (35)))
{var inst_39998 = (state_40016[(2)]);var state_40016__$1 = state_40016;var statearr_40065_40135 = state_40016__$1;(statearr_40065_40135[(2)] = inst_39998);
(statearr_40065_40135[(1)] = (29));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (19)))
{var inst_39913 = (state_40016[(7)]);var inst_39917 = cljs.core.chunk_first(inst_39913);var inst_39918 = cljs.core.chunk_rest(inst_39913);var inst_39919 = cljs.core.count(inst_39917);var inst_39893 = inst_39918;var inst_39894 = inst_39917;var inst_39895 = inst_39919;var inst_39896 = (0);var state_40016__$1 = (function (){var statearr_40066 = state_40016;(statearr_40066[(13)] = inst_39894);
(statearr_40066[(14)] = inst_39896);
(statearr_40066[(15)] = inst_39895);
(statearr_40066[(16)] = inst_39893);
return statearr_40066;
})();var statearr_40067_40136 = state_40016__$1;(statearr_40067_40136[(2)] = null);
(statearr_40067_40136[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (11)))
{var inst_39913 = (state_40016[(7)]);var inst_39893 = (state_40016[(16)]);var inst_39913__$1 = cljs.core.seq(inst_39893);var state_40016__$1 = (function (){var statearr_40068 = state_40016;(statearr_40068[(7)] = inst_39913__$1);
return statearr_40068;
})();if(inst_39913__$1)
{var statearr_40069_40137 = state_40016__$1;(statearr_40069_40137[(1)] = (16));
} else
{var statearr_40070_40138 = state_40016__$1;(statearr_40070_40138[(1)] = (17));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (9)))
{var inst_39941 = (state_40016[(2)]);var state_40016__$1 = state_40016;var statearr_40071_40139 = state_40016__$1;(statearr_40071_40139[(2)] = inst_39941);
(statearr_40071_40139[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (5)))
{var inst_39891 = cljs.core.deref(cs);var inst_39892 = cljs.core.seq(inst_39891);var inst_39893 = inst_39892;var inst_39894 = null;var inst_39895 = (0);var inst_39896 = (0);var state_40016__$1 = (function (){var statearr_40072 = state_40016;(statearr_40072[(13)] = inst_39894);
(statearr_40072[(14)] = inst_39896);
(statearr_40072[(15)] = inst_39895);
(statearr_40072[(16)] = inst_39893);
return statearr_40072;
})();var statearr_40073_40140 = state_40016__$1;(statearr_40073_40140[(2)] = null);
(statearr_40073_40140[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (14)))
{var state_40016__$1 = state_40016;var statearr_40074_40141 = state_40016__$1;(statearr_40074_40141[(2)] = null);
(statearr_40074_40141[(1)] = (15));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (45)))
{var inst_40006 = (state_40016[(2)]);var state_40016__$1 = state_40016;var statearr_40075_40142 = state_40016__$1;(statearr_40075_40142[(2)] = inst_40006);
(statearr_40075_40142[(1)] = (44));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (26)))
{var inst_39944 = (state_40016[(30)]);var inst_40002 = (state_40016[(2)]);var inst_40003 = cljs.core.seq(inst_39944);var state_40016__$1 = (function (){var statearr_40076 = state_40016;(statearr_40076[(32)] = inst_40002);
return statearr_40076;
})();if(inst_40003)
{var statearr_40077_40143 = state_40016__$1;(statearr_40077_40143[(1)] = (42));
} else
{var statearr_40078_40144 = state_40016__$1;(statearr_40078_40144[(1)] = (43));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (16)))
{var inst_39913 = (state_40016[(7)]);var inst_39915 = cljs.core.chunked_seq_QMARK_(inst_39913);var state_40016__$1 = state_40016;if(inst_39915)
{var statearr_40082_40145 = state_40016__$1;(statearr_40082_40145[(1)] = (19));
} else
{var statearr_40083_40146 = state_40016__$1;(statearr_40083_40146[(1)] = (20));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (38)))
{var inst_39995 = (state_40016[(2)]);var state_40016__$1 = state_40016;var statearr_40084_40147 = state_40016__$1;(statearr_40084_40147[(2)] = inst_39995);
(statearr_40084_40147[(1)] = (35));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (30)))
{var inst_39955 = (state_40016[(9)]);var inst_39953 = (state_40016[(10)]);var inst_39954 = (state_40016[(19)]);var inst_39952 = (state_40016[(20)]);var inst_39969 = (state_40016[(2)]);var inst_39970 = (inst_39955 + (1));var tmp40079 = inst_39953;var tmp40080 = inst_39954;var tmp40081 = inst_39952;var inst_39952__$1 = tmp40081;var inst_39953__$1 = tmp40079;var inst_39954__$1 = tmp40080;var inst_39955__$1 = inst_39970;var state_40016__$1 = (function (){var statearr_40085 = state_40016;(statearr_40085[(33)] = inst_39969);
(statearr_40085[(9)] = inst_39955__$1);
(statearr_40085[(10)] = inst_39953__$1);
(statearr_40085[(19)] = inst_39954__$1);
(statearr_40085[(20)] = inst_39952__$1);
return statearr_40085;
})();var statearr_40086_40148 = state_40016__$1;(statearr_40086_40148[(2)] = null);
(statearr_40086_40148[(1)] = (25));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (10)))
{var inst_39894 = (state_40016[(13)]);var inst_39896 = (state_40016[(14)]);var inst_39902 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39894,inst_39896);var inst_39903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39902,(0),null);var inst_39904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39902,(1),null);var state_40016__$1 = (function (){var statearr_40087 = state_40016;(statearr_40087[(28)] = inst_39903);
return statearr_40087;
})();if(cljs.core.truth_(inst_39904))
{var statearr_40088_40149 = state_40016__$1;(statearr_40088_40149[(1)] = (13));
} else
{var statearr_40089_40150 = state_40016__$1;(statearr_40089_40150[(1)] = (14));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (18)))
{var inst_39937 = (state_40016[(2)]);var state_40016__$1 = state_40016;var statearr_40090_40151 = state_40016__$1;(statearr_40090_40151[(2)] = inst_39937);
(statearr_40090_40151[(1)] = (12));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (42)))
{var state_40016__$1 = state_40016;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40016__$1,(45),dchan);
} else
{if((state_val_40017 === (37)))
{var inst_39973 = (state_40016[(17)]);var inst_39982 = cljs.core.first(inst_39973);var state_40016__$1 = (function (){var statearr_40091 = state_40016;(statearr_40091[(25)] = inst_39982);
return statearr_40091;
})();var statearr_40092_40152 = state_40016__$1;(statearr_40092_40152[(2)] = null);
(statearr_40092_40152[(1)] = (41));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40017 === (8)))
{var inst_39896 = (state_40016[(14)]);var inst_39895 = (state_40016[(15)]);var inst_39898 = (inst_39896 < inst_39895);var inst_39899 = inst_39898;var state_40016__$1 = state_40016;if(cljs.core.truth_(inst_39899))
{var statearr_40093_40153 = state_40016__$1;(statearr_40093_40153[(1)] = (10));
} else
{var statearr_40094_40154 = state_40016__$1;(statearr_40094_40154[(1)] = (11));
}
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto___40102,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___40102,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40098[(0)] = state_machine__5679__auto__);
(statearr_40098[(1)] = (1));
return statearr_40098;
});
var state_machine__5679__auto____1 = (function (state_40016){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40016);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40099){if((e40099 instanceof Object))
{var ex__5682__auto__ = e40099;var statearr_40100_40155 = state_40016;(statearr_40100_40155[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40016);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e40099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__40156 = state_40016;
state_40016 = G__40156;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40016){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40102,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_40101 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40102);
return statearr_40101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40102,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj40158 = {};return obj40158;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$778,null,cljs.core.constant$keyword$779,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$780);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$779);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$780,chs);var pauses = pick(cljs.core.constant$keyword$778,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$781,solos,cljs.core.constant$keyword$782,pick(cljs.core.constant$keyword$779,chs),cljs.core.constant$keyword$783,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$778)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t40268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40268 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40269){
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
this.meta40269 = meta40269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40268.cljs$lang$type = true;
cljs.core.async.t40268.cljs$lang$ctorStr = "cljs.core.async/t40268";
cljs.core.async.t40268.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40268");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40268.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t40268.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40268.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40268.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40268.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40268.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40268.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t40268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40270){var self__ = this;
var _40270__$1 = this;return self__.meta40269;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40270,meta40269__$1){var self__ = this;
var _40270__$1 = this;return (new cljs.core.async.t40268(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40269__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t40268 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t40268(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40269){return (new cljs.core.async.t40268(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40269));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t40268(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___40377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40335){var state_val_40336 = (state_40335[(1)]);if((state_val_40336 === (7)))
{var inst_40284 = (state_40335[(7)]);var inst_40289 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40284);var state_40335__$1 = state_40335;var statearr_40337_40378 = state_40335__$1;(statearr_40337_40378[(2)] = inst_40289);
(statearr_40337_40378[(1)] = (9));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (20)))
{var inst_40299 = (state_40335[(8)]);var state_40335__$1 = state_40335;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40335__$1,(23),out,inst_40299);
} else
{if((state_val_40336 === (1)))
{var inst_40274 = (state_40335[(9)]);var inst_40274__$1 = calc_state();var inst_40275 = cljs.core.seq_QMARK_(inst_40274__$1);var state_40335__$1 = (function (){var statearr_40338 = state_40335;(statearr_40338[(9)] = inst_40274__$1);
return statearr_40338;
})();if(inst_40275)
{var statearr_40339_40379 = state_40335__$1;(statearr_40339_40379[(1)] = (2));
} else
{var statearr_40340_40380 = state_40335__$1;(statearr_40340_40380[(1)] = (3));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (4)))
{var inst_40274 = (state_40335[(9)]);var inst_40280 = (state_40335[(2)]);var inst_40281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40280,cljs.core.constant$keyword$783);var inst_40282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40280,cljs.core.constant$keyword$782);var inst_40283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40280,cljs.core.constant$keyword$781);var inst_40284 = inst_40274;var state_40335__$1 = (function (){var statearr_40341 = state_40335;(statearr_40341[(10)] = inst_40282);
(statearr_40341[(11)] = inst_40283);
(statearr_40341[(7)] = inst_40284);
(statearr_40341[(12)] = inst_40281);
return statearr_40341;
})();var statearr_40342_40381 = state_40335__$1;(statearr_40342_40381[(2)] = null);
(statearr_40342_40381[(1)] = (5));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (15)))
{var state_40335__$1 = state_40335;var statearr_40343_40382 = state_40335__$1;(statearr_40343_40382[(2)] = null);
(statearr_40343_40382[(1)] = (16));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (21)))
{var state_40335__$1 = state_40335;var statearr_40344_40383 = state_40335__$1;(statearr_40344_40383[(2)] = null);
(statearr_40344_40383[(1)] = (22));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (13)))
{var inst_40331 = (state_40335[(2)]);var state_40335__$1 = state_40335;var statearr_40345_40384 = state_40335__$1;(statearr_40345_40384[(2)] = inst_40331);
(statearr_40345_40384[(1)] = (6));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (22)))
{var inst_40292 = (state_40335[(13)]);var inst_40328 = (state_40335[(2)]);var inst_40284 = inst_40292;var state_40335__$1 = (function (){var statearr_40346 = state_40335;(statearr_40346[(14)] = inst_40328);
(statearr_40346[(7)] = inst_40284);
return statearr_40346;
})();var statearr_40347_40385 = state_40335__$1;(statearr_40347_40385[(2)] = null);
(statearr_40347_40385[(1)] = (5));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (6)))
{var inst_40333 = (state_40335[(2)]);var state_40335__$1 = state_40335;return cljs.core.async.impl.ioc_helpers.return_chan(state_40335__$1,inst_40333);
} else
{if((state_val_40336 === (17)))
{var inst_40314 = (state_40335[(15)]);var state_40335__$1 = state_40335;var statearr_40348_40386 = state_40335__$1;(statearr_40348_40386[(2)] = inst_40314);
(statearr_40348_40386[(1)] = (19));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (3)))
{var inst_40274 = (state_40335[(9)]);var state_40335__$1 = state_40335;var statearr_40349_40387 = state_40335__$1;(statearr_40349_40387[(2)] = inst_40274);
(statearr_40349_40387[(1)] = (4));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (12)))
{var inst_40295 = (state_40335[(16)]);var inst_40300 = (state_40335[(17)]);var inst_40314 = (state_40335[(15)]);var inst_40314__$1 = (inst_40295.cljs$core$IFn$_invoke$arity$1 ? inst_40295.cljs$core$IFn$_invoke$arity$1(inst_40300) : inst_40295.call(null,inst_40300));var state_40335__$1 = (function (){var statearr_40350 = state_40335;(statearr_40350[(15)] = inst_40314__$1);
return statearr_40350;
})();if(cljs.core.truth_(inst_40314__$1))
{var statearr_40351_40388 = state_40335__$1;(statearr_40351_40388[(1)] = (17));
} else
{var statearr_40352_40389 = state_40335__$1;(statearr_40352_40389[(1)] = (18));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (2)))
{var inst_40274 = (state_40335[(9)]);var inst_40277 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40274);var state_40335__$1 = state_40335;var statearr_40353_40390 = state_40335__$1;(statearr_40353_40390[(2)] = inst_40277);
(statearr_40353_40390[(1)] = (4));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (23)))
{var inst_40325 = (state_40335[(2)]);var state_40335__$1 = state_40335;var statearr_40354_40391 = state_40335__$1;(statearr_40354_40391[(2)] = inst_40325);
(statearr_40354_40391[(1)] = (22));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (19)))
{var inst_40322 = (state_40335[(2)]);var state_40335__$1 = state_40335;if(cljs.core.truth_(inst_40322))
{var statearr_40355_40392 = state_40335__$1;(statearr_40355_40392[(1)] = (20));
} else
{var statearr_40356_40393 = state_40335__$1;(statearr_40356_40393[(1)] = (21));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (11)))
{var inst_40299 = (state_40335[(8)]);var inst_40305 = (inst_40299 == null);var state_40335__$1 = state_40335;if(cljs.core.truth_(inst_40305))
{var statearr_40357_40394 = state_40335__$1;(statearr_40357_40394[(1)] = (14));
} else
{var statearr_40358_40395 = state_40335__$1;(statearr_40358_40395[(1)] = (15));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (9)))
{var inst_40292 = (state_40335[(13)]);var inst_40292__$1 = (state_40335[(2)]);var inst_40293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40292__$1,cljs.core.constant$keyword$783);var inst_40294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40292__$1,cljs.core.constant$keyword$782);var inst_40295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40292__$1,cljs.core.constant$keyword$781);var state_40335__$1 = (function (){var statearr_40359 = state_40335;(statearr_40359[(18)] = inst_40294);
(statearr_40359[(16)] = inst_40295);
(statearr_40359[(13)] = inst_40292__$1);
return statearr_40359;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_40335__$1,(10),inst_40293);
} else
{if((state_val_40336 === (5)))
{var inst_40284 = (state_40335[(7)]);var inst_40287 = cljs.core.seq_QMARK_(inst_40284);var state_40335__$1 = state_40335;if(inst_40287)
{var statearr_40360_40396 = state_40335__$1;(statearr_40360_40396[(1)] = (7));
} else
{var statearr_40361_40397 = state_40335__$1;(statearr_40361_40397[(1)] = (8));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (14)))
{var inst_40300 = (state_40335[(17)]);var inst_40307 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_40300);var state_40335__$1 = state_40335;var statearr_40362_40398 = state_40335__$1;(statearr_40362_40398[(2)] = inst_40307);
(statearr_40362_40398[(1)] = (16));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (16)))
{var inst_40310 = (state_40335[(2)]);var inst_40311 = calc_state();var inst_40284 = inst_40311;var state_40335__$1 = (function (){var statearr_40363 = state_40335;(statearr_40363[(19)] = inst_40310);
(statearr_40363[(7)] = inst_40284);
return statearr_40363;
})();var statearr_40364_40399 = state_40335__$1;(statearr_40364_40399[(2)] = null);
(statearr_40364_40399[(1)] = (5));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (10)))
{var inst_40300 = (state_40335[(17)]);var inst_40299 = (state_40335[(8)]);var inst_40298 = (state_40335[(2)]);var inst_40299__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40298,(0),null);var inst_40300__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40298,(1),null);var inst_40301 = (inst_40299__$1 == null);var inst_40302 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40300__$1,change);var inst_40303 = (inst_40301) || (inst_40302);var state_40335__$1 = (function (){var statearr_40365 = state_40335;(statearr_40365[(17)] = inst_40300__$1);
(statearr_40365[(8)] = inst_40299__$1);
return statearr_40365;
})();if(cljs.core.truth_(inst_40303))
{var statearr_40366_40400 = state_40335__$1;(statearr_40366_40400[(1)] = (11));
} else
{var statearr_40367_40401 = state_40335__$1;(statearr_40367_40401[(1)] = (12));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (18)))
{var inst_40294 = (state_40335[(18)]);var inst_40295 = (state_40335[(16)]);var inst_40300 = (state_40335[(17)]);var inst_40317 = cljs.core.empty_QMARK_(inst_40295);var inst_40318 = (inst_40294.cljs$core$IFn$_invoke$arity$1 ? inst_40294.cljs$core$IFn$_invoke$arity$1(inst_40300) : inst_40294.call(null,inst_40300));var inst_40319 = cljs.core.not(inst_40318);var inst_40320 = (inst_40317) && (inst_40319);var state_40335__$1 = state_40335;var statearr_40368_40402 = state_40335__$1;(statearr_40368_40402[(2)] = inst_40320);
(statearr_40368_40402[(1)] = (19));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40336 === (8)))
{var inst_40284 = (state_40335[(7)]);var state_40335__$1 = state_40335;var statearr_40369_40403 = state_40335__$1;(statearr_40369_40403[(2)] = inst_40284);
(statearr_40369_40403[(1)] = (9));
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto___40377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___40377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40373[(0)] = state_machine__5679__auto__);
(statearr_40373[(1)] = (1));
return statearr_40373;
});
var state_machine__5679__auto____1 = (function (state_40335){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40335);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40374){if((e40374 instanceof Object))
{var ex__5682__auto__ = e40374;var statearr_40375_40404 = state_40335;(statearr_40375_40404[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40335);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e40374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__40405 = state_40335;
state_40335 = G__40405;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40335){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_40376 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40377);
return statearr_40376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj40407 = {};return obj40407;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
return (function (topic){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3543__auto__,mults){
return (function (p1__40408_SHARP_){if(cljs.core.truth_((p1__40408_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40408_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40408_SHARP_.call(null,topic))))
{return p1__40408_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40408_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t40533 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40533 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta40534){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta40534 = meta40534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40533.cljs$lang$type = true;
cljs.core.async.t40533.cljs$lang$ctorStr = "cljs.core.async/t40533";
cljs.core.async.t40533.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40533");
});})(mults,ensure_mult))
;
cljs.core.async.t40533.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t40533.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t40533.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t40533.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t40533.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t40533.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t40533.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t40533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40535){var self__ = this;
var _40535__$1 = this;return self__.meta40534;
});})(mults,ensure_mult))
;
cljs.core.async.t40533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40535,meta40534__$1){var self__ = this;
var _40535__$1 = this;return (new cljs.core.async.t40533(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta40534__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t40533 = ((function (mults,ensure_mult){
return (function __GT_t40533(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40534){return (new cljs.core.async.t40533(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40534));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t40533(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___40657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40657,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40657,mults,ensure_mult,p){
return (function (state_40609){var state_val_40610 = (state_40609[(1)]);if((state_val_40610 === (7)))
{var inst_40605 = (state_40609[(2)]);var state_40609__$1 = state_40609;var statearr_40611_40658 = state_40609__$1;(statearr_40611_40658[(2)] = inst_40605);
(statearr_40611_40658[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (20)))
{var state_40609__$1 = state_40609;var statearr_40612_40659 = state_40609__$1;(statearr_40612_40659[(2)] = null);
(statearr_40612_40659[(1)] = (21));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (1)))
{var state_40609__$1 = state_40609;var statearr_40613_40660 = state_40609__$1;(statearr_40613_40660[(2)] = null);
(statearr_40613_40660[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (24)))
{var inst_40588 = (state_40609[(7)]);var inst_40538 = (state_40609[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40609,(23),Object,null,(22));var inst_40595 = cljs.core.async.muxch_STAR_(inst_40588);var state_40609__$1 = state_40609;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40609__$1,(25),inst_40595,inst_40538);
} else
{if((state_val_40610 === (4)))
{var inst_40538 = (state_40609[(8)]);var inst_40538__$1 = (state_40609[(2)]);var inst_40539 = (inst_40538__$1 == null);var state_40609__$1 = (function (){var statearr_40614 = state_40609;(statearr_40614[(8)] = inst_40538__$1);
return statearr_40614;
})();if(cljs.core.truth_(inst_40539))
{var statearr_40615_40661 = state_40609__$1;(statearr_40615_40661[(1)] = (5));
} else
{var statearr_40616_40662 = state_40609__$1;(statearr_40616_40662[(1)] = (6));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (15)))
{var inst_40580 = (state_40609[(2)]);var state_40609__$1 = state_40609;var statearr_40617_40663 = state_40609__$1;(statearr_40617_40663[(2)] = inst_40580);
(statearr_40617_40663[(1)] = (12));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (21)))
{var inst_40602 = (state_40609[(2)]);var state_40609__$1 = (function (){var statearr_40618 = state_40609;(statearr_40618[(9)] = inst_40602);
return statearr_40618;
})();var statearr_40619_40664 = state_40609__$1;(statearr_40619_40664[(2)] = null);
(statearr_40619_40664[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (13)))
{var inst_40562 = (state_40609[(10)]);var inst_40564 = cljs.core.chunked_seq_QMARK_(inst_40562);var state_40609__$1 = state_40609;if(inst_40564)
{var statearr_40620_40665 = state_40609__$1;(statearr_40620_40665[(1)] = (16));
} else
{var statearr_40621_40666 = state_40609__$1;(statearr_40621_40666[(1)] = (17));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (22)))
{var inst_40599 = (state_40609[(2)]);var state_40609__$1 = state_40609;var statearr_40622_40667 = state_40609__$1;(statearr_40622_40667[(2)] = inst_40599);
(statearr_40622_40667[(1)] = (21));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (6)))
{var inst_40586 = (state_40609[(11)]);var inst_40588 = (state_40609[(7)]);var inst_40538 = (state_40609[(8)]);var inst_40586__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40538) : topic_fn.call(null,inst_40538));var inst_40587 = cljs.core.deref(mults);var inst_40588__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40587,inst_40586__$1);var state_40609__$1 = (function (){var statearr_40623 = state_40609;(statearr_40623[(11)] = inst_40586__$1);
(statearr_40623[(7)] = inst_40588__$1);
return statearr_40623;
})();if(cljs.core.truth_(inst_40588__$1))
{var statearr_40624_40668 = state_40609__$1;(statearr_40624_40668[(1)] = (19));
} else
{var statearr_40625_40669 = state_40609__$1;(statearr_40625_40669[(1)] = (20));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (25)))
{var inst_40597 = (state_40609[(2)]);var state_40609__$1 = state_40609;var statearr_40626_40670 = state_40609__$1;(statearr_40626_40670[(2)] = inst_40597);
cljs.core.async.impl.ioc_helpers.process_exception(state_40609__$1);
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (17)))
{var inst_40562 = (state_40609[(10)]);var inst_40571 = cljs.core.first(inst_40562);var inst_40572 = cljs.core.async.muxch_STAR_(inst_40571);var inst_40573 = cljs.core.async.close_BANG_(inst_40572);var inst_40574 = cljs.core.next(inst_40562);var inst_40548 = inst_40574;var inst_40549 = null;var inst_40550 = (0);var inst_40551 = (0);var state_40609__$1 = (function (){var statearr_40627 = state_40609;(statearr_40627[(12)] = inst_40548);
(statearr_40627[(13)] = inst_40573);
(statearr_40627[(14)] = inst_40551);
(statearr_40627[(15)] = inst_40550);
(statearr_40627[(16)] = inst_40549);
return statearr_40627;
})();var statearr_40628_40671 = state_40609__$1;(statearr_40628_40671[(2)] = null);
(statearr_40628_40671[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (3)))
{var inst_40607 = (state_40609[(2)]);var state_40609__$1 = state_40609;return cljs.core.async.impl.ioc_helpers.return_chan(state_40609__$1,inst_40607);
} else
{if((state_val_40610 === (12)))
{var inst_40582 = (state_40609[(2)]);var state_40609__$1 = state_40609;var statearr_40629_40672 = state_40609__$1;(statearr_40629_40672[(2)] = inst_40582);
(statearr_40629_40672[(1)] = (9));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (2)))
{var state_40609__$1 = state_40609;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40609__$1,(4),ch);
} else
{if((state_val_40610 === (23)))
{var inst_40586 = (state_40609[(11)]);var inst_40590 = (state_40609[(2)]);var inst_40591 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40586);var state_40609__$1 = (function (){var statearr_40630 = state_40609;(statearr_40630[(17)] = inst_40590);
return statearr_40630;
})();var statearr_40631_40673 = state_40609__$1;(statearr_40631_40673[(2)] = inst_40591);
cljs.core.async.impl.ioc_helpers.process_exception(state_40609__$1);
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (19)))
{var state_40609__$1 = state_40609;var statearr_40632_40674 = state_40609__$1;(statearr_40632_40674[(2)] = null);
(statearr_40632_40674[(1)] = (24));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (11)))
{var inst_40548 = (state_40609[(12)]);var inst_40562 = (state_40609[(10)]);var inst_40562__$1 = cljs.core.seq(inst_40548);var state_40609__$1 = (function (){var statearr_40633 = state_40609;(statearr_40633[(10)] = inst_40562__$1);
return statearr_40633;
})();if(inst_40562__$1)
{var statearr_40634_40675 = state_40609__$1;(statearr_40634_40675[(1)] = (13));
} else
{var statearr_40635_40676 = state_40609__$1;(statearr_40635_40676[(1)] = (14));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (9)))
{var inst_40584 = (state_40609[(2)]);var state_40609__$1 = state_40609;var statearr_40636_40677 = state_40609__$1;(statearr_40636_40677[(2)] = inst_40584);
(statearr_40636_40677[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (5)))
{var inst_40545 = cljs.core.deref(mults);var inst_40546 = cljs.core.vals(inst_40545);var inst_40547 = cljs.core.seq(inst_40546);var inst_40548 = inst_40547;var inst_40549 = null;var inst_40550 = (0);var inst_40551 = (0);var state_40609__$1 = (function (){var statearr_40637 = state_40609;(statearr_40637[(12)] = inst_40548);
(statearr_40637[(14)] = inst_40551);
(statearr_40637[(15)] = inst_40550);
(statearr_40637[(16)] = inst_40549);
return statearr_40637;
})();var statearr_40638_40678 = state_40609__$1;(statearr_40638_40678[(2)] = null);
(statearr_40638_40678[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (14)))
{var state_40609__$1 = state_40609;var statearr_40642_40679 = state_40609__$1;(statearr_40642_40679[(2)] = null);
(statearr_40642_40679[(1)] = (15));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (16)))
{var inst_40562 = (state_40609[(10)]);var inst_40566 = cljs.core.chunk_first(inst_40562);var inst_40567 = cljs.core.chunk_rest(inst_40562);var inst_40568 = cljs.core.count(inst_40566);var inst_40548 = inst_40567;var inst_40549 = inst_40566;var inst_40550 = inst_40568;var inst_40551 = (0);var state_40609__$1 = (function (){var statearr_40643 = state_40609;(statearr_40643[(12)] = inst_40548);
(statearr_40643[(14)] = inst_40551);
(statearr_40643[(15)] = inst_40550);
(statearr_40643[(16)] = inst_40549);
return statearr_40643;
})();var statearr_40644_40680 = state_40609__$1;(statearr_40644_40680[(2)] = null);
(statearr_40644_40680[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (10)))
{var inst_40548 = (state_40609[(12)]);var inst_40551 = (state_40609[(14)]);var inst_40550 = (state_40609[(15)]);var inst_40549 = (state_40609[(16)]);var inst_40556 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40549,inst_40551);var inst_40557 = cljs.core.async.muxch_STAR_(inst_40556);var inst_40558 = cljs.core.async.close_BANG_(inst_40557);var inst_40559 = (inst_40551 + (1));var tmp40639 = inst_40548;var tmp40640 = inst_40550;var tmp40641 = inst_40549;var inst_40548__$1 = tmp40639;var inst_40549__$1 = tmp40641;var inst_40550__$1 = tmp40640;var inst_40551__$1 = inst_40559;var state_40609__$1 = (function (){var statearr_40645 = state_40609;(statearr_40645[(12)] = inst_40548__$1);
(statearr_40645[(18)] = inst_40558);
(statearr_40645[(14)] = inst_40551__$1);
(statearr_40645[(15)] = inst_40550__$1);
(statearr_40645[(16)] = inst_40549__$1);
return statearr_40645;
})();var statearr_40646_40681 = state_40609__$1;(statearr_40646_40681[(2)] = null);
(statearr_40646_40681[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (18)))
{var inst_40577 = (state_40609[(2)]);var state_40609__$1 = state_40609;var statearr_40647_40682 = state_40609__$1;(statearr_40647_40682[(2)] = inst_40577);
(statearr_40647_40682[(1)] = (15));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40610 === (8)))
{var inst_40551 = (state_40609[(14)]);var inst_40550 = (state_40609[(15)]);var inst_40553 = (inst_40551 < inst_40550);var inst_40554 = inst_40553;var state_40609__$1 = state_40609;if(cljs.core.truth_(inst_40554))
{var statearr_40648_40683 = state_40609__$1;(statearr_40648_40683[(1)] = (10));
} else
{var statearr_40649_40684 = state_40609__$1;(statearr_40649_40684[(1)] = (11));
}
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto___40657,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___40657,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40653[(0)] = state_machine__5679__auto__);
(statearr_40653[(1)] = (1));
return statearr_40653;
});
var state_machine__5679__auto____1 = (function (state_40609){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40609);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40654){if((e40654 instanceof Object))
{var ex__5682__auto__ = e40654;var statearr_40655_40685 = state_40609;(statearr_40655_40685[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40609);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e40654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__40686 = state_40609;
state_40609 = G__40686;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40609){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40657,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_40656 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40657);
return statearr_40656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40657,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5693__auto___40823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40823,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40823,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40793){var state_val_40794 = (state_40793[(1)]);if((state_val_40794 === (7)))
{var state_40793__$1 = state_40793;var statearr_40795_40824 = state_40793__$1;(statearr_40795_40824[(2)] = null);
(statearr_40795_40824[(1)] = (8));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (1)))
{var state_40793__$1 = state_40793;var statearr_40796_40825 = state_40793__$1;(statearr_40796_40825[(2)] = null);
(statearr_40796_40825[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (4)))
{var inst_40757 = (state_40793[(7)]);var inst_40759 = (inst_40757 < cnt);var state_40793__$1 = state_40793;if(cljs.core.truth_(inst_40759))
{var statearr_40797_40826 = state_40793__$1;(statearr_40797_40826[(1)] = (6));
} else
{var statearr_40798_40827 = state_40793__$1;(statearr_40798_40827[(1)] = (7));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (15)))
{var inst_40789 = (state_40793[(2)]);var state_40793__$1 = state_40793;var statearr_40799_40828 = state_40793__$1;(statearr_40799_40828[(2)] = inst_40789);
(statearr_40799_40828[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (13)))
{var inst_40782 = cljs.core.async.close_BANG_(out);var state_40793__$1 = state_40793;var statearr_40800_40829 = state_40793__$1;(statearr_40800_40829[(2)] = inst_40782);
(statearr_40800_40829[(1)] = (15));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (6)))
{var state_40793__$1 = state_40793;var statearr_40801_40830 = state_40793__$1;(statearr_40801_40830[(2)] = null);
(statearr_40801_40830[(1)] = (11));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (3)))
{var inst_40791 = (state_40793[(2)]);var state_40793__$1 = state_40793;return cljs.core.async.impl.ioc_helpers.return_chan(state_40793__$1,inst_40791);
} else
{if((state_val_40794 === (12)))
{var inst_40779 = (state_40793[(8)]);var inst_40779__$1 = (state_40793[(2)]);var inst_40780 = cljs.core.some(cljs.core.nil_QMARK_,inst_40779__$1);var state_40793__$1 = (function (){var statearr_40802 = state_40793;(statearr_40802[(8)] = inst_40779__$1);
return statearr_40802;
})();if(cljs.core.truth_(inst_40780))
{var statearr_40803_40831 = state_40793__$1;(statearr_40803_40831[(1)] = (13));
} else
{var statearr_40804_40832 = state_40793__$1;(statearr_40804_40832[(1)] = (14));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (2)))
{var inst_40756 = cljs.core.reset_BANG_(dctr,cnt);var inst_40757 = (0);var state_40793__$1 = (function (){var statearr_40805 = state_40793;(statearr_40805[(9)] = inst_40756);
(statearr_40805[(7)] = inst_40757);
return statearr_40805;
})();var statearr_40806_40833 = state_40793__$1;(statearr_40806_40833[(2)] = null);
(statearr_40806_40833[(1)] = (4));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (11)))
{var inst_40757 = (state_40793[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40793,(10),Object,null,(9));var inst_40766 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40757) : chs__$1.call(null,inst_40757));var inst_40767 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40757) : done.call(null,inst_40757));var inst_40768 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40766,inst_40767);var state_40793__$1 = state_40793;var statearr_40807_40834 = state_40793__$1;(statearr_40807_40834[(2)] = inst_40768);
cljs.core.async.impl.ioc_helpers.process_exception(state_40793__$1);
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (9)))
{var inst_40757 = (state_40793[(7)]);var inst_40770 = (state_40793[(2)]);var inst_40771 = (inst_40757 + (1));var inst_40757__$1 = inst_40771;var state_40793__$1 = (function (){var statearr_40808 = state_40793;(statearr_40808[(7)] = inst_40757__$1);
(statearr_40808[(10)] = inst_40770);
return statearr_40808;
})();var statearr_40809_40835 = state_40793__$1;(statearr_40809_40835[(2)] = null);
(statearr_40809_40835[(1)] = (4));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (5)))
{var inst_40777 = (state_40793[(2)]);var state_40793__$1 = (function (){var statearr_40810 = state_40793;(statearr_40810[(11)] = inst_40777);
return statearr_40810;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40793__$1,(12),dchan);
} else
{if((state_val_40794 === (14)))
{var inst_40779 = (state_40793[(8)]);var inst_40784 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40779);var state_40793__$1 = state_40793;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40793__$1,(16),out,inst_40784);
} else
{if((state_val_40794 === (16)))
{var inst_40786 = (state_40793[(2)]);var state_40793__$1 = (function (){var statearr_40811 = state_40793;(statearr_40811[(12)] = inst_40786);
return statearr_40811;
})();var statearr_40812_40836 = state_40793__$1;(statearr_40812_40836[(2)] = null);
(statearr_40812_40836[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (10)))
{var inst_40761 = (state_40793[(2)]);var inst_40762 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_40793__$1 = (function (){var statearr_40813 = state_40793;(statearr_40813[(13)] = inst_40761);
return statearr_40813;
})();var statearr_40814_40837 = state_40793__$1;(statearr_40814_40837[(2)] = inst_40762);
cljs.core.async.impl.ioc_helpers.process_exception(state_40793__$1);
return cljs.core.constant$keyword$771;
} else
{if((state_val_40794 === (8)))
{var inst_40775 = (state_40793[(2)]);var state_40793__$1 = state_40793;var statearr_40815_40838 = state_40793__$1;(statearr_40815_40838[(2)] = inst_40775);
(statearr_40815_40838[(1)] = (5));
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto___40823,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___40823,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40819[(0)] = state_machine__5679__auto__);
(statearr_40819[(1)] = (1));
return statearr_40819;
});
var state_machine__5679__auto____1 = (function (state_40793){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40793);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40820){if((e40820 instanceof Object))
{var ex__5682__auto__ = e40820;var statearr_40821_40839 = state_40793;(statearr_40821_40839[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40793);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e40820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__40840 = state_40793;
state_40793 = G__40840;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40793){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40823,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_40822 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40823);
return statearr_40822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40823,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___40948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40948,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40948,out){
return (function (state_40924){var state_val_40925 = (state_40924[(1)]);if((state_val_40925 === (7)))
{var inst_40903 = (state_40924[(7)]);var inst_40904 = (state_40924[(8)]);var inst_40903__$1 = (state_40924[(2)]);var inst_40904__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40903__$1,(0),null);var inst_40905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40903__$1,(1),null);var inst_40906 = (inst_40904__$1 == null);var state_40924__$1 = (function (){var statearr_40926 = state_40924;(statearr_40926[(7)] = inst_40903__$1);
(statearr_40926[(9)] = inst_40905);
(statearr_40926[(8)] = inst_40904__$1);
return statearr_40926;
})();if(cljs.core.truth_(inst_40906))
{var statearr_40927_40949 = state_40924__$1;(statearr_40927_40949[(1)] = (8));
} else
{var statearr_40928_40950 = state_40924__$1;(statearr_40928_40950[(1)] = (9));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40925 === (1)))
{var inst_40895 = cljs.core.vec(chs);var inst_40896 = inst_40895;var state_40924__$1 = (function (){var statearr_40929 = state_40924;(statearr_40929[(10)] = inst_40896);
return statearr_40929;
})();var statearr_40930_40951 = state_40924__$1;(statearr_40930_40951[(2)] = null);
(statearr_40930_40951[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40925 === (4)))
{var inst_40896 = (state_40924[(10)]);var state_40924__$1 = state_40924;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_40924__$1,(7),inst_40896);
} else
{if((state_val_40925 === (6)))
{var inst_40920 = (state_40924[(2)]);var state_40924__$1 = state_40924;var statearr_40931_40952 = state_40924__$1;(statearr_40931_40952[(2)] = inst_40920);
(statearr_40931_40952[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40925 === (3)))
{var inst_40922 = (state_40924[(2)]);var state_40924__$1 = state_40924;return cljs.core.async.impl.ioc_helpers.return_chan(state_40924__$1,inst_40922);
} else
{if((state_val_40925 === (2)))
{var inst_40896 = (state_40924[(10)]);var inst_40898 = cljs.core.count(inst_40896);var inst_40899 = (inst_40898 > (0));var state_40924__$1 = state_40924;if(cljs.core.truth_(inst_40899))
{var statearr_40933_40953 = state_40924__$1;(statearr_40933_40953[(1)] = (4));
} else
{var statearr_40934_40954 = state_40924__$1;(statearr_40934_40954[(1)] = (5));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_40925 === (11)))
{var inst_40896 = (state_40924[(10)]);var inst_40913 = (state_40924[(2)]);var tmp40932 = inst_40896;var inst_40896__$1 = tmp40932;var state_40924__$1 = (function (){var statearr_40935 = state_40924;(statearr_40935[(10)] = inst_40896__$1);
(statearr_40935[(11)] = inst_40913);
return statearr_40935;
})();var statearr_40936_40955 = state_40924__$1;(statearr_40936_40955[(2)] = null);
(statearr_40936_40955[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40925 === (9)))
{var inst_40904 = (state_40924[(8)]);var state_40924__$1 = state_40924;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40924__$1,(11),out,inst_40904);
} else
{if((state_val_40925 === (5)))
{var inst_40918 = cljs.core.async.close_BANG_(out);var state_40924__$1 = state_40924;var statearr_40937_40956 = state_40924__$1;(statearr_40937_40956[(2)] = inst_40918);
(statearr_40937_40956[(1)] = (6));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40925 === (10)))
{var inst_40916 = (state_40924[(2)]);var state_40924__$1 = state_40924;var statearr_40938_40957 = state_40924__$1;(statearr_40938_40957[(2)] = inst_40916);
(statearr_40938_40957[(1)] = (6));
return cljs.core.constant$keyword$771;
} else
{if((state_val_40925 === (8)))
{var inst_40903 = (state_40924[(7)]);var inst_40896 = (state_40924[(10)]);var inst_40905 = (state_40924[(9)]);var inst_40904 = (state_40924[(8)]);var inst_40908 = (function (){var c = inst_40905;var v = inst_40904;var vec__40901 = inst_40903;var cs = inst_40896;return ((function (c,v,vec__40901,cs,inst_40903,inst_40896,inst_40905,inst_40904,state_val_40925,c__5693__auto___40948,out){
return (function (p1__40841_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40841_SHARP_);
});
;})(c,v,vec__40901,cs,inst_40903,inst_40896,inst_40905,inst_40904,state_val_40925,c__5693__auto___40948,out))
})();var inst_40909 = cljs.core.filterv(inst_40908,inst_40896);var inst_40896__$1 = inst_40909;var state_40924__$1 = (function (){var statearr_40939 = state_40924;(statearr_40939[(10)] = inst_40896__$1);
return statearr_40939;
})();var statearr_40940_40958 = state_40924__$1;(statearr_40940_40958[(2)] = null);
(statearr_40940_40958[(1)] = (2));
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto___40948,out))
;return ((function (switch__5678__auto__,c__5693__auto___40948,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40944 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40944[(0)] = state_machine__5679__auto__);
(statearr_40944[(1)] = (1));
return statearr_40944;
});
var state_machine__5679__auto____1 = (function (state_40924){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40924);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40945){if((e40945 instanceof Object))
{var ex__5682__auto__ = e40945;var statearr_40946_40959 = state_40924;(statearr_40946_40959[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40924);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e40945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__40960 = state_40924;
state_40924 = G__40960;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40924){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40948,out))
})();var state__5695__auto__ = (function (){var statearr_40947 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40948);
return statearr_40947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40948,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41053,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41053,out){
return (function (state_41030){var state_val_41031 = (state_41030[(1)]);if((state_val_41031 === (7)))
{var inst_41012 = (state_41030[(7)]);var inst_41012__$1 = (state_41030[(2)]);var inst_41013 = (inst_41012__$1 == null);var inst_41014 = cljs.core.not(inst_41013);var state_41030__$1 = (function (){var statearr_41032 = state_41030;(statearr_41032[(7)] = inst_41012__$1);
return statearr_41032;
})();if(inst_41014)
{var statearr_41033_41054 = state_41030__$1;(statearr_41033_41054[(1)] = (8));
} else
{var statearr_41034_41055 = state_41030__$1;(statearr_41034_41055[(1)] = (9));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_41031 === (1)))
{var inst_41007 = (0);var state_41030__$1 = (function (){var statearr_41035 = state_41030;(statearr_41035[(8)] = inst_41007);
return statearr_41035;
})();var statearr_41036_41056 = state_41030__$1;(statearr_41036_41056[(2)] = null);
(statearr_41036_41056[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41031 === (4)))
{var state_41030__$1 = state_41030;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41030__$1,(7),ch);
} else
{if((state_val_41031 === (6)))
{var inst_41025 = (state_41030[(2)]);var state_41030__$1 = state_41030;var statearr_41037_41057 = state_41030__$1;(statearr_41037_41057[(2)] = inst_41025);
(statearr_41037_41057[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41031 === (3)))
{var inst_41027 = (state_41030[(2)]);var inst_41028 = cljs.core.async.close_BANG_(out);var state_41030__$1 = (function (){var statearr_41038 = state_41030;(statearr_41038[(9)] = inst_41027);
return statearr_41038;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_41030__$1,inst_41028);
} else
{if((state_val_41031 === (2)))
{var inst_41007 = (state_41030[(8)]);var inst_41009 = (inst_41007 < n);var state_41030__$1 = state_41030;if(cljs.core.truth_(inst_41009))
{var statearr_41039_41058 = state_41030__$1;(statearr_41039_41058[(1)] = (4));
} else
{var statearr_41040_41059 = state_41030__$1;(statearr_41040_41059[(1)] = (5));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_41031 === (11)))
{var inst_41007 = (state_41030[(8)]);var inst_41017 = (state_41030[(2)]);var inst_41018 = (inst_41007 + (1));var inst_41007__$1 = inst_41018;var state_41030__$1 = (function (){var statearr_41041 = state_41030;(statearr_41041[(8)] = inst_41007__$1);
(statearr_41041[(10)] = inst_41017);
return statearr_41041;
})();var statearr_41042_41060 = state_41030__$1;(statearr_41042_41060[(2)] = null);
(statearr_41042_41060[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41031 === (9)))
{var state_41030__$1 = state_41030;var statearr_41043_41061 = state_41030__$1;(statearr_41043_41061[(2)] = null);
(statearr_41043_41061[(1)] = (10));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41031 === (5)))
{var state_41030__$1 = state_41030;var statearr_41044_41062 = state_41030__$1;(statearr_41044_41062[(2)] = null);
(statearr_41044_41062[(1)] = (6));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41031 === (10)))
{var inst_41022 = (state_41030[(2)]);var state_41030__$1 = state_41030;var statearr_41045_41063 = state_41030__$1;(statearr_41045_41063[(2)] = inst_41022);
(statearr_41045_41063[(1)] = (6));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41031 === (8)))
{var inst_41012 = (state_41030[(7)]);var state_41030__$1 = state_41030;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41030__$1,(11),out,inst_41012);
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
});})(c__5693__auto___41053,out))
;return ((function (switch__5678__auto__,c__5693__auto___41053,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41049 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_41049[(0)] = state_machine__5679__auto__);
(statearr_41049[(1)] = (1));
return statearr_41049;
});
var state_machine__5679__auto____1 = (function (state_41030){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41030);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41050){if((e41050 instanceof Object))
{var ex__5682__auto__ = e41050;var statearr_41051_41064 = state_41030;(statearr_41051_41064[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41030);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e41050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__41065 = state_41030;
state_41030 = G__41065;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41030){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41053,out))
})();var state__5695__auto__ = (function (){var statearr_41052 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41053);
return statearr_41052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41053,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41162,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41162,out){
return (function (state_41137){var state_val_41138 = (state_41137[(1)]);if((state_val_41138 === (7)))
{var inst_41132 = (state_41137[(2)]);var state_41137__$1 = state_41137;var statearr_41139_41163 = state_41137__$1;(statearr_41139_41163[(2)] = inst_41132);
(statearr_41139_41163[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41138 === (1)))
{var inst_41114 = null;var state_41137__$1 = (function (){var statearr_41140 = state_41137;(statearr_41140[(7)] = inst_41114);
return statearr_41140;
})();var statearr_41141_41164 = state_41137__$1;(statearr_41141_41164[(2)] = null);
(statearr_41141_41164[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41138 === (4)))
{var inst_41117 = (state_41137[(8)]);var inst_41117__$1 = (state_41137[(2)]);var inst_41118 = (inst_41117__$1 == null);var inst_41119 = cljs.core.not(inst_41118);var state_41137__$1 = (function (){var statearr_41142 = state_41137;(statearr_41142[(8)] = inst_41117__$1);
return statearr_41142;
})();if(inst_41119)
{var statearr_41143_41165 = state_41137__$1;(statearr_41143_41165[(1)] = (5));
} else
{var statearr_41144_41166 = state_41137__$1;(statearr_41144_41166[(1)] = (6));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_41138 === (6)))
{var state_41137__$1 = state_41137;var statearr_41145_41167 = state_41137__$1;(statearr_41145_41167[(2)] = null);
(statearr_41145_41167[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41138 === (3)))
{var inst_41134 = (state_41137[(2)]);var inst_41135 = cljs.core.async.close_BANG_(out);var state_41137__$1 = (function (){var statearr_41146 = state_41137;(statearr_41146[(9)] = inst_41134);
return statearr_41146;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_41137__$1,inst_41135);
} else
{if((state_val_41138 === (2)))
{var state_41137__$1 = state_41137;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41137__$1,(4),ch);
} else
{if((state_val_41138 === (11)))
{var inst_41117 = (state_41137[(8)]);var inst_41126 = (state_41137[(2)]);var inst_41114 = inst_41117;var state_41137__$1 = (function (){var statearr_41147 = state_41137;(statearr_41147[(7)] = inst_41114);
(statearr_41147[(10)] = inst_41126);
return statearr_41147;
})();var statearr_41148_41168 = state_41137__$1;(statearr_41148_41168[(2)] = null);
(statearr_41148_41168[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41138 === (9)))
{var inst_41117 = (state_41137[(8)]);var state_41137__$1 = state_41137;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41137__$1,(11),out,inst_41117);
} else
{if((state_val_41138 === (5)))
{var inst_41114 = (state_41137[(7)]);var inst_41117 = (state_41137[(8)]);var inst_41121 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41117,inst_41114);var state_41137__$1 = state_41137;if(inst_41121)
{var statearr_41150_41169 = state_41137__$1;(statearr_41150_41169[(1)] = (8));
} else
{var statearr_41151_41170 = state_41137__$1;(statearr_41151_41170[(1)] = (9));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_41138 === (10)))
{var inst_41129 = (state_41137[(2)]);var state_41137__$1 = state_41137;var statearr_41152_41171 = state_41137__$1;(statearr_41152_41171[(2)] = inst_41129);
(statearr_41152_41171[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41138 === (8)))
{var inst_41114 = (state_41137[(7)]);var tmp41149 = inst_41114;var inst_41114__$1 = tmp41149;var state_41137__$1 = (function (){var statearr_41153 = state_41137;(statearr_41153[(7)] = inst_41114__$1);
return statearr_41153;
})();var statearr_41154_41172 = state_41137__$1;(statearr_41154_41172[(2)] = null);
(statearr_41154_41172[(1)] = (2));
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto___41162,out))
;return ((function (switch__5678__auto__,c__5693__auto___41162,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41158 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_41158[(0)] = state_machine__5679__auto__);
(statearr_41158[(1)] = (1));
return statearr_41158;
});
var state_machine__5679__auto____1 = (function (state_41137){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41137);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41159){if((e41159 instanceof Object))
{var ex__5682__auto__ = e41159;var statearr_41160_41173 = state_41137;(statearr_41160_41173[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41137);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e41159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__41174 = state_41137;
state_41137 = G__41174;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41137){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41162,out))
})();var state__5695__auto__ = (function (){var statearr_41161 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41162);
return statearr_41161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41162,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41309,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41309,out){
return (function (state_41279){var state_val_41280 = (state_41279[(1)]);if((state_val_41280 === (7)))
{var inst_41275 = (state_41279[(2)]);var state_41279__$1 = state_41279;var statearr_41281_41310 = state_41279__$1;(statearr_41281_41310[(2)] = inst_41275);
(statearr_41281_41310[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41280 === (1)))
{var inst_41242 = (new Array(n));var inst_41243 = inst_41242;var inst_41244 = (0);var state_41279__$1 = (function (){var statearr_41282 = state_41279;(statearr_41282[(7)] = inst_41244);
(statearr_41282[(8)] = inst_41243);
return statearr_41282;
})();var statearr_41283_41311 = state_41279__$1;(statearr_41283_41311[(2)] = null);
(statearr_41283_41311[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41280 === (4)))
{var inst_41247 = (state_41279[(9)]);var inst_41247__$1 = (state_41279[(2)]);var inst_41248 = (inst_41247__$1 == null);var inst_41249 = cljs.core.not(inst_41248);var state_41279__$1 = (function (){var statearr_41284 = state_41279;(statearr_41284[(9)] = inst_41247__$1);
return statearr_41284;
})();if(inst_41249)
{var statearr_41285_41312 = state_41279__$1;(statearr_41285_41312[(1)] = (5));
} else
{var statearr_41286_41313 = state_41279__$1;(statearr_41286_41313[(1)] = (6));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_41280 === (15)))
{var inst_41269 = (state_41279[(2)]);var state_41279__$1 = state_41279;var statearr_41287_41314 = state_41279__$1;(statearr_41287_41314[(2)] = inst_41269);
(statearr_41287_41314[(1)] = (14));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41280 === (13)))
{var state_41279__$1 = state_41279;var statearr_41288_41315 = state_41279__$1;(statearr_41288_41315[(2)] = null);
(statearr_41288_41315[(1)] = (14));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41280 === (6)))
{var inst_41244 = (state_41279[(7)]);var inst_41265 = (inst_41244 > (0));var state_41279__$1 = state_41279;if(cljs.core.truth_(inst_41265))
{var statearr_41289_41316 = state_41279__$1;(statearr_41289_41316[(1)] = (12));
} else
{var statearr_41290_41317 = state_41279__$1;(statearr_41290_41317[(1)] = (13));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_41280 === (3)))
{var inst_41277 = (state_41279[(2)]);var state_41279__$1 = state_41279;return cljs.core.async.impl.ioc_helpers.return_chan(state_41279__$1,inst_41277);
} else
{if((state_val_41280 === (12)))
{var inst_41243 = (state_41279[(8)]);var inst_41267 = cljs.core.vec(inst_41243);var state_41279__$1 = state_41279;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41279__$1,(15),out,inst_41267);
} else
{if((state_val_41280 === (2)))
{var state_41279__$1 = state_41279;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41279__$1,(4),ch);
} else
{if((state_val_41280 === (11)))
{var inst_41259 = (state_41279[(2)]);var inst_41260 = (new Array(n));var inst_41243 = inst_41260;var inst_41244 = (0);var state_41279__$1 = (function (){var statearr_41291 = state_41279;(statearr_41291[(10)] = inst_41259);
(statearr_41291[(7)] = inst_41244);
(statearr_41291[(8)] = inst_41243);
return statearr_41291;
})();var statearr_41292_41318 = state_41279__$1;(statearr_41292_41318[(2)] = null);
(statearr_41292_41318[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41280 === (9)))
{var inst_41243 = (state_41279[(8)]);var inst_41257 = cljs.core.vec(inst_41243);var state_41279__$1 = state_41279;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41279__$1,(11),out,inst_41257);
} else
{if((state_val_41280 === (5)))
{var inst_41252 = (state_41279[(11)]);var inst_41244 = (state_41279[(7)]);var inst_41243 = (state_41279[(8)]);var inst_41247 = (state_41279[(9)]);var inst_41251 = (inst_41243[inst_41244] = inst_41247);var inst_41252__$1 = (inst_41244 + (1));var inst_41253 = (inst_41252__$1 < n);var state_41279__$1 = (function (){var statearr_41293 = state_41279;(statearr_41293[(11)] = inst_41252__$1);
(statearr_41293[(12)] = inst_41251);
return statearr_41293;
})();if(cljs.core.truth_(inst_41253))
{var statearr_41294_41319 = state_41279__$1;(statearr_41294_41319[(1)] = (8));
} else
{var statearr_41295_41320 = state_41279__$1;(statearr_41295_41320[(1)] = (9));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_41280 === (14)))
{var inst_41272 = (state_41279[(2)]);var inst_41273 = cljs.core.async.close_BANG_(out);var state_41279__$1 = (function (){var statearr_41297 = state_41279;(statearr_41297[(13)] = inst_41272);
return statearr_41297;
})();var statearr_41298_41321 = state_41279__$1;(statearr_41298_41321[(2)] = inst_41273);
(statearr_41298_41321[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41280 === (10)))
{var inst_41263 = (state_41279[(2)]);var state_41279__$1 = state_41279;var statearr_41299_41322 = state_41279__$1;(statearr_41299_41322[(2)] = inst_41263);
(statearr_41299_41322[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41280 === (8)))
{var inst_41252 = (state_41279[(11)]);var inst_41243 = (state_41279[(8)]);var tmp41296 = inst_41243;var inst_41243__$1 = tmp41296;var inst_41244 = inst_41252;var state_41279__$1 = (function (){var statearr_41300 = state_41279;(statearr_41300[(7)] = inst_41244);
(statearr_41300[(8)] = inst_41243__$1);
return statearr_41300;
})();var statearr_41301_41323 = state_41279__$1;(statearr_41301_41323[(2)] = null);
(statearr_41301_41323[(1)] = (2));
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto___41309,out))
;return ((function (switch__5678__auto__,c__5693__auto___41309,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41305[(0)] = state_machine__5679__auto__);
(statearr_41305[(1)] = (1));
return statearr_41305;
});
var state_machine__5679__auto____1 = (function (state_41279){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41279);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41306){if((e41306 instanceof Object))
{var ex__5682__auto__ = e41306;var statearr_41307_41324 = state_41279;(statearr_41307_41324[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41279);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e41306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__41325 = state_41279;
state_41279 = G__41325;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41279){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41309,out))
})();var state__5695__auto__ = (function (){var statearr_41308 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41309);
return statearr_41308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41309,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41468,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41468,out){
return (function (state_41438){var state_val_41439 = (state_41438[(1)]);if((state_val_41439 === (7)))
{var inst_41434 = (state_41438[(2)]);var state_41438__$1 = state_41438;var statearr_41440_41469 = state_41438__$1;(statearr_41440_41469[(2)] = inst_41434);
(statearr_41440_41469[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41439 === (1)))
{var inst_41397 = [];var inst_41398 = inst_41397;var inst_41399 = cljs.core.constant$keyword$784;var state_41438__$1 = (function (){var statearr_41441 = state_41438;(statearr_41441[(7)] = inst_41399);
(statearr_41441[(8)] = inst_41398);
return statearr_41441;
})();var statearr_41442_41470 = state_41438__$1;(statearr_41442_41470[(2)] = null);
(statearr_41442_41470[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41439 === (4)))
{var inst_41402 = (state_41438[(9)]);var inst_41402__$1 = (state_41438[(2)]);var inst_41403 = (inst_41402__$1 == null);var inst_41404 = cljs.core.not(inst_41403);var state_41438__$1 = (function (){var statearr_41443 = state_41438;(statearr_41443[(9)] = inst_41402__$1);
return statearr_41443;
})();if(inst_41404)
{var statearr_41444_41471 = state_41438__$1;(statearr_41444_41471[(1)] = (5));
} else
{var statearr_41445_41472 = state_41438__$1;(statearr_41445_41472[(1)] = (6));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_41439 === (15)))
{var inst_41428 = (state_41438[(2)]);var state_41438__$1 = state_41438;var statearr_41446_41473 = state_41438__$1;(statearr_41446_41473[(2)] = inst_41428);
(statearr_41446_41473[(1)] = (14));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41439 === (13)))
{var state_41438__$1 = state_41438;var statearr_41447_41474 = state_41438__$1;(statearr_41447_41474[(2)] = null);
(statearr_41447_41474[(1)] = (14));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41439 === (6)))
{var inst_41398 = (state_41438[(8)]);var inst_41423 = inst_41398.length;var inst_41424 = (inst_41423 > (0));var state_41438__$1 = state_41438;if(cljs.core.truth_(inst_41424))
{var statearr_41448_41475 = state_41438__$1;(statearr_41448_41475[(1)] = (12));
} else
{var statearr_41449_41476 = state_41438__$1;(statearr_41449_41476[(1)] = (13));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_41439 === (3)))
{var inst_41436 = (state_41438[(2)]);var state_41438__$1 = state_41438;return cljs.core.async.impl.ioc_helpers.return_chan(state_41438__$1,inst_41436);
} else
{if((state_val_41439 === (12)))
{var inst_41398 = (state_41438[(8)]);var inst_41426 = cljs.core.vec(inst_41398);var state_41438__$1 = state_41438;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41438__$1,(15),out,inst_41426);
} else
{if((state_val_41439 === (2)))
{var state_41438__$1 = state_41438;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41438__$1,(4),ch);
} else
{if((state_val_41439 === (11)))
{var inst_41402 = (state_41438[(9)]);var inst_41406 = (state_41438[(10)]);var inst_41416 = (state_41438[(2)]);var inst_41417 = [];var inst_41418 = inst_41417.push(inst_41402);var inst_41398 = inst_41417;var inst_41399 = inst_41406;var state_41438__$1 = (function (){var statearr_41450 = state_41438;(statearr_41450[(11)] = inst_41418);
(statearr_41450[(7)] = inst_41399);
(statearr_41450[(8)] = inst_41398);
(statearr_41450[(12)] = inst_41416);
return statearr_41450;
})();var statearr_41451_41477 = state_41438__$1;(statearr_41451_41477[(2)] = null);
(statearr_41451_41477[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41439 === (9)))
{var inst_41398 = (state_41438[(8)]);var inst_41414 = cljs.core.vec(inst_41398);var state_41438__$1 = state_41438;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41438__$1,(11),out,inst_41414);
} else
{if((state_val_41439 === (5)))
{var inst_41399 = (state_41438[(7)]);var inst_41402 = (state_41438[(9)]);var inst_41406 = (state_41438[(10)]);var inst_41406__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41402) : f.call(null,inst_41402));var inst_41407 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41406__$1,inst_41399);var inst_41408 = cljs.core.keyword_identical_QMARK_(inst_41399,cljs.core.constant$keyword$784);var inst_41409 = (inst_41407) || (inst_41408);var state_41438__$1 = (function (){var statearr_41452 = state_41438;(statearr_41452[(10)] = inst_41406__$1);
return statearr_41452;
})();if(cljs.core.truth_(inst_41409))
{var statearr_41453_41478 = state_41438__$1;(statearr_41453_41478[(1)] = (8));
} else
{var statearr_41454_41479 = state_41438__$1;(statearr_41454_41479[(1)] = (9));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_41439 === (14)))
{var inst_41431 = (state_41438[(2)]);var inst_41432 = cljs.core.async.close_BANG_(out);var state_41438__$1 = (function (){var statearr_41456 = state_41438;(statearr_41456[(13)] = inst_41431);
return statearr_41456;
})();var statearr_41457_41480 = state_41438__$1;(statearr_41457_41480[(2)] = inst_41432);
(statearr_41457_41480[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41439 === (10)))
{var inst_41421 = (state_41438[(2)]);var state_41438__$1 = state_41438;var statearr_41458_41481 = state_41438__$1;(statearr_41458_41481[(2)] = inst_41421);
(statearr_41458_41481[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_41439 === (8)))
{var inst_41402 = (state_41438[(9)]);var inst_41398 = (state_41438[(8)]);var inst_41406 = (state_41438[(10)]);var inst_41411 = inst_41398.push(inst_41402);var tmp41455 = inst_41398;var inst_41398__$1 = tmp41455;var inst_41399 = inst_41406;var state_41438__$1 = (function (){var statearr_41459 = state_41438;(statearr_41459[(7)] = inst_41399);
(statearr_41459[(8)] = inst_41398__$1);
(statearr_41459[(14)] = inst_41411);
return statearr_41459;
})();var statearr_41460_41482 = state_41438__$1;(statearr_41460_41482[(2)] = null);
(statearr_41460_41482[(1)] = (2));
return cljs.core.constant$keyword$771;
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
});})(c__5693__auto___41468,out))
;return ((function (switch__5678__auto__,c__5693__auto___41468,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41464[(0)] = state_machine__5679__auto__);
(statearr_41464[(1)] = (1));
return statearr_41464;
});
var state_machine__5679__auto____1 = (function (state_41438){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41438);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41465){if((e41465 instanceof Object))
{var ex__5682__auto__ = e41465;var statearr_41466_41483 = state_41438;(statearr_41466_41483[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41438);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e41465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__41484 = state_41438;
state_41438 = G__41484;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41438){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41468,out))
})();var state__5695__auto__ = (function (){var statearr_41467 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41468);
return statearr_41467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41468,out))
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
