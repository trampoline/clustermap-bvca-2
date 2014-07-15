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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t37266 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37266 = (function (f,fn_handler,meta37267){
this.f = f;
this.fn_handler = fn_handler;
this.meta37267 = meta37267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37266.cljs$lang$type = true;
cljs.core.async.t37266.cljs$lang$ctorStr = "cljs.core.async/t37266";
cljs.core.async.t37266.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t37266");
});
cljs.core.async.t37266.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t37266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t37266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37268){var self__ = this;
var _37268__$1 = this;return self__.meta37267;
});
cljs.core.async.t37266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37268,meta37267__$1){var self__ = this;
var _37268__$1 = this;return (new cljs.core.async.t37266(self__.f,self__.fn_handler,meta37267__$1));
});
cljs.core.async.__GT_t37266 = (function __GT_t37266(f__$1,fn_handler__$1,meta37267){return (new cljs.core.async.t37266(f__$1,fn_handler__$1,meta37267));
});
}
return (new cljs.core.async.t37266(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__37270 = buff;if(G__37270)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__37270.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__37270.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__37270);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__37270);
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
{var val_37271 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37271) : fn1.call(null,val_37271));
} else
{cljs.core.async.impl.dispatch.run(((function (val_37271,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37271) : fn1.call(null,val_37271));
});})(val_37271,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___37272 = n;var x_37273 = (0);while(true){
if((x_37273 < n__4399__auto___37272))
{(a[x_37273] = (0));
{
var G__37274 = (x_37273 + (1));
x_37273 = G__37274;
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
var G__37275 = (i + (1));
i = G__37275;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t37279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37279 = (function (flag,alt_flag,meta37280){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta37280 = meta37280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37279.cljs$lang$type = true;
cljs.core.async.t37279.cljs$lang$ctorStr = "cljs.core.async/t37279";
cljs.core.async.t37279.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t37279");
});})(flag))
;
cljs.core.async.t37279.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t37279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t37279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37281){var self__ = this;
var _37281__$1 = this;return self__.meta37280;
});})(flag))
;
cljs.core.async.t37279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37281,meta37280__$1){var self__ = this;
var _37281__$1 = this;return (new cljs.core.async.t37279(self__.flag,self__.alt_flag,meta37280__$1));
});})(flag))
;
cljs.core.async.__GT_t37279 = ((function (flag){
return (function __GT_t37279(flag__$1,alt_flag__$1,meta37280){return (new cljs.core.async.t37279(flag__$1,alt_flag__$1,meta37280));
});})(flag))
;
}
return (new cljs.core.async.t37279(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t37285 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37285 = (function (cb,flag,alt_handler,meta37286){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta37286 = meta37286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37285.cljs$lang$type = true;
cljs.core.async.t37285.cljs$lang$ctorStr = "cljs.core.async/t37285";
cljs.core.async.t37285.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t37285");
});
cljs.core.async.t37285.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t37285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t37285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37287){var self__ = this;
var _37287__$1 = this;return self__.meta37286;
});
cljs.core.async.t37285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37287,meta37286__$1){var self__ = this;
var _37287__$1 = this;return (new cljs.core.async.t37285(self__.cb,self__.flag,self__.alt_handler,meta37286__$1));
});
cljs.core.async.__GT_t37285 = (function __GT_t37285(cb__$1,flag__$1,alt_handler__$1,meta37286){return (new cljs.core.async.t37285(cb__$1,flag__$1,alt_handler__$1,meta37286));
});
}
return (new cljs.core.async.t37285(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$751.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37288_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37288_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37288_SHARP_,port], null)));
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
var G__37289 = (i + (1));
i = G__37289;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$737))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3531__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$737.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$737], null));
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
var alts_BANG___delegate = function (ports,p__37290){var map__37292 = p__37290;var map__37292__$1 = ((cljs.core.seq_QMARK_(map__37292))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37292):map__37292);var opts = map__37292__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__37290 = null;if (arguments.length > 1) {
  p__37290 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__37290);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__37293){
var ports = cljs.core.first(arglist__37293);
var p__37290 = cljs.core.rest(arglist__37293);
return alts_BANG___delegate(ports,p__37290);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t37301 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37301 = (function (ch,f,map_LT_,meta37302){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37302 = meta37302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37301.cljs$lang$type = true;
cljs.core.async.t37301.cljs$lang$ctorStr = "cljs.core.async/t37301";
cljs.core.async.t37301.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t37301");
});
cljs.core.async.t37301.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t37301.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t37304 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37304 = (function (fn1,_,meta37302,ch,f,map_LT_,meta37305){
this.fn1 = fn1;
this._ = _;
this.meta37302 = meta37302;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37305 = meta37305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37304.cljs$lang$type = true;
cljs.core.async.t37304.cljs$lang$ctorStr = "cljs.core.async/t37304";
cljs.core.async.t37304.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t37304");
});})(___$1))
;
cljs.core.async.t37304.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t37304.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t37304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__37294_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__37294_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37294_SHARP_) : self__.f.call(null,p1__37294_SHARP_)))) : f1.call(null,(((p1__37294_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37294_SHARP_) : self__.f.call(null,p1__37294_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t37304.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37306){var self__ = this;
var _37306__$1 = this;return self__.meta37305;
});})(___$1))
;
cljs.core.async.t37304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37306,meta37305__$1){var self__ = this;
var _37306__$1 = this;return (new cljs.core.async.t37304(self__.fn1,self__._,self__.meta37302,self__.ch,self__.f,self__.map_LT_,meta37305__$1));
});})(___$1))
;
cljs.core.async.__GT_t37304 = ((function (___$1){
return (function __GT_t37304(fn1__$1,___$2,meta37302__$1,ch__$2,f__$2,map_LT___$2,meta37305){return (new cljs.core.async.t37304(fn1__$1,___$2,meta37302__$1,ch__$2,f__$2,map_LT___$2,meta37305));
});})(___$1))
;
}
return (new cljs.core.async.t37304(fn1,___$1,self__.meta37302,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t37301.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t37301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37303){var self__ = this;
var _37303__$1 = this;return self__.meta37302;
});
cljs.core.async.t37301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37303,meta37302__$1){var self__ = this;
var _37303__$1 = this;return (new cljs.core.async.t37301(self__.ch,self__.f,self__.map_LT_,meta37302__$1));
});
cljs.core.async.__GT_t37301 = (function __GT_t37301(ch__$1,f__$1,map_LT___$1,meta37302){return (new cljs.core.async.t37301(ch__$1,f__$1,map_LT___$1,meta37302));
});
}
return (new cljs.core.async.t37301(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t37310 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37310 = (function (ch,f,map_GT_,meta37311){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta37311 = meta37311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37310.cljs$lang$type = true;
cljs.core.async.t37310.cljs$lang$ctorStr = "cljs.core.async/t37310";
cljs.core.async.t37310.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t37310");
});
cljs.core.async.t37310.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t37310.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t37310.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t37310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37312){var self__ = this;
var _37312__$1 = this;return self__.meta37311;
});
cljs.core.async.t37310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37312,meta37311__$1){var self__ = this;
var _37312__$1 = this;return (new cljs.core.async.t37310(self__.ch,self__.f,self__.map_GT_,meta37311__$1));
});
cljs.core.async.__GT_t37310 = (function __GT_t37310(ch__$1,f__$1,map_GT___$1,meta37311){return (new cljs.core.async.t37310(ch__$1,f__$1,map_GT___$1,meta37311));
});
}
return (new cljs.core.async.t37310(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t37316 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37316 = (function (ch,p,filter_GT_,meta37317){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta37317 = meta37317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37316.cljs$lang$type = true;
cljs.core.async.t37316.cljs$lang$ctorStr = "cljs.core.async/t37316";
cljs.core.async.t37316.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t37316");
});
cljs.core.async.t37316.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t37316.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t37316.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t37316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37318){var self__ = this;
var _37318__$1 = this;return self__.meta37317;
});
cljs.core.async.t37316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37318,meta37317__$1){var self__ = this;
var _37318__$1 = this;return (new cljs.core.async.t37316(self__.ch,self__.p,self__.filter_GT_,meta37317__$1));
});
cljs.core.async.__GT_t37316 = (function __GT_t37316(ch__$1,p__$1,filter_GT___$1,meta37317){return (new cljs.core.async.t37316(ch__$1,p__$1,filter_GT___$1,meta37317));
});
}
return (new cljs.core.async.t37316(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___37401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___37401,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___37401,out){
return (function (state_37380){var state_val_37381 = (state_37380[(1)]);if((state_val_37381 === (7)))
{var inst_37376 = (state_37380[(2)]);var state_37380__$1 = state_37380;var statearr_37382_37402 = state_37380__$1;(statearr_37382_37402[(2)] = inst_37376);
(statearr_37382_37402[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37381 === (1)))
{var state_37380__$1 = state_37380;var statearr_37383_37403 = state_37380__$1;(statearr_37383_37403[(2)] = null);
(statearr_37383_37403[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37381 === (4)))
{var inst_37362 = (state_37380[(7)]);var inst_37362__$1 = (state_37380[(2)]);var inst_37363 = (inst_37362__$1 == null);var state_37380__$1 = (function (){var statearr_37384 = state_37380;(statearr_37384[(7)] = inst_37362__$1);
return statearr_37384;
})();if(cljs.core.truth_(inst_37363))
{var statearr_37385_37404 = state_37380__$1;(statearr_37385_37404[(1)] = (5));
} else
{var statearr_37386_37405 = state_37380__$1;(statearr_37386_37405[(1)] = (6));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37381 === (6)))
{var inst_37362 = (state_37380[(7)]);var inst_37367 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37362) : p.call(null,inst_37362));var state_37380__$1 = state_37380;if(cljs.core.truth_(inst_37367))
{var statearr_37387_37406 = state_37380__$1;(statearr_37387_37406[(1)] = (8));
} else
{var statearr_37388_37407 = state_37380__$1;(statearr_37388_37407[(1)] = (9));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37381 === (3)))
{var inst_37378 = (state_37380[(2)]);var state_37380__$1 = state_37380;return cljs.core.async.impl.ioc_helpers.return_chan(state_37380__$1,inst_37378);
} else
{if((state_val_37381 === (2)))
{var state_37380__$1 = state_37380;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37380__$1,(4),ch);
} else
{if((state_val_37381 === (11)))
{var inst_37370 = (state_37380[(2)]);var state_37380__$1 = state_37380;var statearr_37389_37408 = state_37380__$1;(statearr_37389_37408[(2)] = inst_37370);
(statearr_37389_37408[(1)] = (10));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37381 === (9)))
{var state_37380__$1 = state_37380;var statearr_37390_37409 = state_37380__$1;(statearr_37390_37409[(2)] = null);
(statearr_37390_37409[(1)] = (10));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37381 === (5)))
{var inst_37365 = cljs.core.async.close_BANG_(out);var state_37380__$1 = state_37380;var statearr_37391_37410 = state_37380__$1;(statearr_37391_37410[(2)] = inst_37365);
(statearr_37391_37410[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37381 === (10)))
{var inst_37373 = (state_37380[(2)]);var state_37380__$1 = (function (){var statearr_37392 = state_37380;(statearr_37392[(8)] = inst_37373);
return statearr_37392;
})();var statearr_37393_37411 = state_37380__$1;(statearr_37393_37411[(2)] = null);
(statearr_37393_37411[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37381 === (8)))
{var inst_37362 = (state_37380[(7)]);var state_37380__$1 = state_37380;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37380__$1,(11),out,inst_37362);
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
});})(c__5693__auto___37401,out))
;return ((function (switch__5678__auto__,c__5693__auto___37401,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37397 = [null,null,null,null,null,null,null,null,null];(statearr_37397[(0)] = state_machine__5679__auto__);
(statearr_37397[(1)] = (1));
return statearr_37397;
});
var state_machine__5679__auto____1 = (function (state_37380){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37380);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37398){if((e37398 instanceof Object))
{var ex__5682__auto__ = e37398;var statearr_37399_37412 = state_37380;(statearr_37399_37412[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37380);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e37398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__37413 = state_37380;
state_37380 = G__37413;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37380){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___37401,out))
})();var state__5695__auto__ = (function (){var statearr_37400 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___37401);
return statearr_37400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___37401,out))
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
return (function (state_37565){var state_val_37566 = (state_37565[(1)]);if((state_val_37566 === (7)))
{var inst_37561 = (state_37565[(2)]);var state_37565__$1 = state_37565;var statearr_37567_37604 = state_37565__$1;(statearr_37567_37604[(2)] = inst_37561);
(statearr_37567_37604[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (20)))
{var inst_37536 = (state_37565[(7)]);var inst_37547 = (state_37565[(2)]);var inst_37548 = cljs.core.next(inst_37536);var inst_37522 = inst_37548;var inst_37523 = null;var inst_37524 = (0);var inst_37525 = (0);var state_37565__$1 = (function (){var statearr_37568 = state_37565;(statearr_37568[(8)] = inst_37522);
(statearr_37568[(9)] = inst_37524);
(statearr_37568[(10)] = inst_37523);
(statearr_37568[(11)] = inst_37525);
(statearr_37568[(12)] = inst_37547);
return statearr_37568;
})();var statearr_37569_37605 = state_37565__$1;(statearr_37569_37605[(2)] = null);
(statearr_37569_37605[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (1)))
{var state_37565__$1 = state_37565;var statearr_37570_37606 = state_37565__$1;(statearr_37570_37606[(2)] = null);
(statearr_37570_37606[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (4)))
{var inst_37511 = (state_37565[(13)]);var inst_37511__$1 = (state_37565[(2)]);var inst_37512 = (inst_37511__$1 == null);var state_37565__$1 = (function (){var statearr_37574 = state_37565;(statearr_37574[(13)] = inst_37511__$1);
return statearr_37574;
})();if(cljs.core.truth_(inst_37512))
{var statearr_37575_37607 = state_37565__$1;(statearr_37575_37607[(1)] = (5));
} else
{var statearr_37576_37608 = state_37565__$1;(statearr_37576_37608[(1)] = (6));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (15)))
{var state_37565__$1 = state_37565;var statearr_37577_37609 = state_37565__$1;(statearr_37577_37609[(2)] = null);
(statearr_37577_37609[(1)] = (16));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (13)))
{var inst_37522 = (state_37565[(8)]);var inst_37524 = (state_37565[(9)]);var inst_37523 = (state_37565[(10)]);var inst_37525 = (state_37565[(11)]);var inst_37532 = (state_37565[(2)]);var inst_37533 = (inst_37525 + (1));var tmp37571 = inst_37522;var tmp37572 = inst_37524;var tmp37573 = inst_37523;var inst_37522__$1 = tmp37571;var inst_37523__$1 = tmp37573;var inst_37524__$1 = tmp37572;var inst_37525__$1 = inst_37533;var state_37565__$1 = (function (){var statearr_37578 = state_37565;(statearr_37578[(8)] = inst_37522__$1);
(statearr_37578[(9)] = inst_37524__$1);
(statearr_37578[(10)] = inst_37523__$1);
(statearr_37578[(11)] = inst_37525__$1);
(statearr_37578[(14)] = inst_37532);
return statearr_37578;
})();var statearr_37579_37610 = state_37565__$1;(statearr_37579_37610[(2)] = null);
(statearr_37579_37610[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (6)))
{var inst_37511 = (state_37565[(13)]);var inst_37516 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37511) : f.call(null,inst_37511));var inst_37521 = cljs.core.seq(inst_37516);var inst_37522 = inst_37521;var inst_37523 = null;var inst_37524 = (0);var inst_37525 = (0);var state_37565__$1 = (function (){var statearr_37580 = state_37565;(statearr_37580[(8)] = inst_37522);
(statearr_37580[(9)] = inst_37524);
(statearr_37580[(10)] = inst_37523);
(statearr_37580[(11)] = inst_37525);
return statearr_37580;
})();var statearr_37581_37611 = state_37565__$1;(statearr_37581_37611[(2)] = null);
(statearr_37581_37611[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (17)))
{var inst_37536 = (state_37565[(7)]);var inst_37540 = cljs.core.chunk_first(inst_37536);var inst_37541 = cljs.core.chunk_rest(inst_37536);var inst_37542 = cljs.core.count(inst_37540);var inst_37522 = inst_37541;var inst_37523 = inst_37540;var inst_37524 = inst_37542;var inst_37525 = (0);var state_37565__$1 = (function (){var statearr_37582 = state_37565;(statearr_37582[(8)] = inst_37522);
(statearr_37582[(9)] = inst_37524);
(statearr_37582[(10)] = inst_37523);
(statearr_37582[(11)] = inst_37525);
return statearr_37582;
})();var statearr_37583_37612 = state_37565__$1;(statearr_37583_37612[(2)] = null);
(statearr_37583_37612[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (3)))
{var inst_37563 = (state_37565[(2)]);var state_37565__$1 = state_37565;return cljs.core.async.impl.ioc_helpers.return_chan(state_37565__$1,inst_37563);
} else
{if((state_val_37566 === (12)))
{var inst_37556 = (state_37565[(2)]);var state_37565__$1 = state_37565;var statearr_37584_37613 = state_37565__$1;(statearr_37584_37613[(2)] = inst_37556);
(statearr_37584_37613[(1)] = (9));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (2)))
{var state_37565__$1 = state_37565;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37565__$1,(4),in$);
} else
{if((state_val_37566 === (19)))
{var inst_37551 = (state_37565[(2)]);var state_37565__$1 = state_37565;var statearr_37585_37614 = state_37565__$1;(statearr_37585_37614[(2)] = inst_37551);
(statearr_37585_37614[(1)] = (16));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (11)))
{var inst_37522 = (state_37565[(8)]);var inst_37536 = (state_37565[(7)]);var inst_37536__$1 = cljs.core.seq(inst_37522);var state_37565__$1 = (function (){var statearr_37586 = state_37565;(statearr_37586[(7)] = inst_37536__$1);
return statearr_37586;
})();if(inst_37536__$1)
{var statearr_37587_37615 = state_37565__$1;(statearr_37587_37615[(1)] = (14));
} else
{var statearr_37588_37616 = state_37565__$1;(statearr_37588_37616[(1)] = (15));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (9)))
{var inst_37558 = (state_37565[(2)]);var state_37565__$1 = (function (){var statearr_37589 = state_37565;(statearr_37589[(15)] = inst_37558);
return statearr_37589;
})();var statearr_37590_37617 = state_37565__$1;(statearr_37590_37617[(2)] = null);
(statearr_37590_37617[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (5)))
{var inst_37514 = cljs.core.async.close_BANG_(out);var state_37565__$1 = state_37565;var statearr_37591_37618 = state_37565__$1;(statearr_37591_37618[(2)] = inst_37514);
(statearr_37591_37618[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (14)))
{var inst_37536 = (state_37565[(7)]);var inst_37538 = cljs.core.chunked_seq_QMARK_(inst_37536);var state_37565__$1 = state_37565;if(inst_37538)
{var statearr_37592_37619 = state_37565__$1;(statearr_37592_37619[(1)] = (17));
} else
{var statearr_37593_37620 = state_37565__$1;(statearr_37593_37620[(1)] = (18));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (16)))
{var inst_37554 = (state_37565[(2)]);var state_37565__$1 = state_37565;var statearr_37594_37621 = state_37565__$1;(statearr_37594_37621[(2)] = inst_37554);
(statearr_37594_37621[(1)] = (12));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37566 === (10)))
{var inst_37523 = (state_37565[(10)]);var inst_37525 = (state_37565[(11)]);var inst_37530 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37523,inst_37525);var state_37565__$1 = state_37565;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37565__$1,(13),out,inst_37530);
} else
{if((state_val_37566 === (18)))
{var inst_37536 = (state_37565[(7)]);var inst_37545 = cljs.core.first(inst_37536);var state_37565__$1 = state_37565;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37565__$1,(20),out,inst_37545);
} else
{if((state_val_37566 === (8)))
{var inst_37524 = (state_37565[(9)]);var inst_37525 = (state_37565[(11)]);var inst_37527 = (inst_37525 < inst_37524);var inst_37528 = inst_37527;var state_37565__$1 = state_37565;if(cljs.core.truth_(inst_37528))
{var statearr_37595_37622 = state_37565__$1;(statearr_37595_37622[(1)] = (10));
} else
{var statearr_37596_37623 = state_37565__$1;(statearr_37596_37623[(1)] = (11));
}
return cljs.core.constant$keyword$745;
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
var state_machine__5679__auto____0 = (function (){var statearr_37600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37600[(0)] = state_machine__5679__auto__);
(statearr_37600[(1)] = (1));
return statearr_37600;
});
var state_machine__5679__auto____1 = (function (state_37565){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37565);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37601){if((e37601 instanceof Object))
{var ex__5682__auto__ = e37601;var statearr_37602_37624 = state_37565;(statearr_37602_37624[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37565);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e37601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__37625 = state_37565;
state_37565 = G__37625;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37565){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37603 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37603;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___37706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___37706){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___37706){
return (function (state_37685){var state_val_37686 = (state_37685[(1)]);if((state_val_37686 === (7)))
{var inst_37681 = (state_37685[(2)]);var state_37685__$1 = state_37685;var statearr_37687_37707 = state_37685__$1;(statearr_37687_37707[(2)] = inst_37681);
(statearr_37687_37707[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37686 === (1)))
{var state_37685__$1 = state_37685;var statearr_37688_37708 = state_37685__$1;(statearr_37688_37708[(2)] = null);
(statearr_37688_37708[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37686 === (4)))
{var inst_37668 = (state_37685[(7)]);var inst_37668__$1 = (state_37685[(2)]);var inst_37669 = (inst_37668__$1 == null);var state_37685__$1 = (function (){var statearr_37689 = state_37685;(statearr_37689[(7)] = inst_37668__$1);
return statearr_37689;
})();if(cljs.core.truth_(inst_37669))
{var statearr_37690_37709 = state_37685__$1;(statearr_37690_37709[(1)] = (5));
} else
{var statearr_37691_37710 = state_37685__$1;(statearr_37691_37710[(1)] = (6));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37686 === (6)))
{var inst_37668 = (state_37685[(7)]);var state_37685__$1 = state_37685;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37685__$1,(11),to,inst_37668);
} else
{if((state_val_37686 === (3)))
{var inst_37683 = (state_37685[(2)]);var state_37685__$1 = state_37685;return cljs.core.async.impl.ioc_helpers.return_chan(state_37685__$1,inst_37683);
} else
{if((state_val_37686 === (2)))
{var state_37685__$1 = state_37685;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37685__$1,(4),from);
} else
{if((state_val_37686 === (11)))
{var inst_37678 = (state_37685[(2)]);var state_37685__$1 = (function (){var statearr_37692 = state_37685;(statearr_37692[(8)] = inst_37678);
return statearr_37692;
})();var statearr_37693_37711 = state_37685__$1;(statearr_37693_37711[(2)] = null);
(statearr_37693_37711[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37686 === (9)))
{var state_37685__$1 = state_37685;var statearr_37694_37712 = state_37685__$1;(statearr_37694_37712[(2)] = null);
(statearr_37694_37712[(1)] = (10));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37686 === (5)))
{var state_37685__$1 = state_37685;if(cljs.core.truth_(close_QMARK_))
{var statearr_37695_37713 = state_37685__$1;(statearr_37695_37713[(1)] = (8));
} else
{var statearr_37696_37714 = state_37685__$1;(statearr_37696_37714[(1)] = (9));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37686 === (10)))
{var inst_37675 = (state_37685[(2)]);var state_37685__$1 = state_37685;var statearr_37697_37715 = state_37685__$1;(statearr_37697_37715[(2)] = inst_37675);
(statearr_37697_37715[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37686 === (8)))
{var inst_37672 = cljs.core.async.close_BANG_(to);var state_37685__$1 = state_37685;var statearr_37698_37716 = state_37685__$1;(statearr_37698_37716[(2)] = inst_37672);
(statearr_37698_37716[(1)] = (10));
return cljs.core.constant$keyword$745;
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
});})(c__5693__auto___37706))
;return ((function (switch__5678__auto__,c__5693__auto___37706){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37702 = [null,null,null,null,null,null,null,null,null];(statearr_37702[(0)] = state_machine__5679__auto__);
(statearr_37702[(1)] = (1));
return statearr_37702;
});
var state_machine__5679__auto____1 = (function (state_37685){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37685);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37703){if((e37703 instanceof Object))
{var ex__5682__auto__ = e37703;var statearr_37704_37717 = state_37685;(statearr_37704_37717[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37685);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e37703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__37718 = state_37685;
state_37685 = G__37718;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37685){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___37706))
})();var state__5695__auto__ = (function (){var statearr_37705 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___37706);
return statearr_37705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___37706))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5693__auto___37805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___37805,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___37805,tc,fc){
return (function (state_37783){var state_val_37784 = (state_37783[(1)]);if((state_val_37784 === (7)))
{var inst_37779 = (state_37783[(2)]);var state_37783__$1 = state_37783;var statearr_37785_37806 = state_37783__$1;(statearr_37785_37806[(2)] = inst_37779);
(statearr_37785_37806[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37784 === (1)))
{var state_37783__$1 = state_37783;var statearr_37786_37807 = state_37783__$1;(statearr_37786_37807[(2)] = null);
(statearr_37786_37807[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37784 === (4)))
{var inst_37764 = (state_37783[(7)]);var inst_37764__$1 = (state_37783[(2)]);var inst_37765 = (inst_37764__$1 == null);var state_37783__$1 = (function (){var statearr_37787 = state_37783;(statearr_37787[(7)] = inst_37764__$1);
return statearr_37787;
})();if(cljs.core.truth_(inst_37765))
{var statearr_37788_37808 = state_37783__$1;(statearr_37788_37808[(1)] = (5));
} else
{var statearr_37789_37809 = state_37783__$1;(statearr_37789_37809[(1)] = (6));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37784 === (6)))
{var inst_37764 = (state_37783[(7)]);var inst_37770 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37764) : p.call(null,inst_37764));var state_37783__$1 = state_37783;if(cljs.core.truth_(inst_37770))
{var statearr_37790_37810 = state_37783__$1;(statearr_37790_37810[(1)] = (9));
} else
{var statearr_37791_37811 = state_37783__$1;(statearr_37791_37811[(1)] = (10));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37784 === (3)))
{var inst_37781 = (state_37783[(2)]);var state_37783__$1 = state_37783;return cljs.core.async.impl.ioc_helpers.return_chan(state_37783__$1,inst_37781);
} else
{if((state_val_37784 === (2)))
{var state_37783__$1 = state_37783;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37783__$1,(4),ch);
} else
{if((state_val_37784 === (11)))
{var inst_37764 = (state_37783[(7)]);var inst_37774 = (state_37783[(2)]);var state_37783__$1 = state_37783;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37783__$1,(8),inst_37774,inst_37764);
} else
{if((state_val_37784 === (9)))
{var state_37783__$1 = state_37783;var statearr_37792_37812 = state_37783__$1;(statearr_37792_37812[(2)] = tc);
(statearr_37792_37812[(1)] = (11));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37784 === (5)))
{var inst_37767 = cljs.core.async.close_BANG_(tc);var inst_37768 = cljs.core.async.close_BANG_(fc);var state_37783__$1 = (function (){var statearr_37793 = state_37783;(statearr_37793[(8)] = inst_37767);
return statearr_37793;
})();var statearr_37794_37813 = state_37783__$1;(statearr_37794_37813[(2)] = inst_37768);
(statearr_37794_37813[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37784 === (10)))
{var state_37783__$1 = state_37783;var statearr_37795_37814 = state_37783__$1;(statearr_37795_37814[(2)] = fc);
(statearr_37795_37814[(1)] = (11));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37784 === (8)))
{var inst_37776 = (state_37783[(2)]);var state_37783__$1 = (function (){var statearr_37796 = state_37783;(statearr_37796[(9)] = inst_37776);
return statearr_37796;
})();var statearr_37797_37815 = state_37783__$1;(statearr_37797_37815[(2)] = null);
(statearr_37797_37815[(1)] = (2));
return cljs.core.constant$keyword$745;
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
});})(c__5693__auto___37805,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___37805,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37801 = [null,null,null,null,null,null,null,null,null,null];(statearr_37801[(0)] = state_machine__5679__auto__);
(statearr_37801[(1)] = (1));
return statearr_37801;
});
var state_machine__5679__auto____1 = (function (state_37783){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37783);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37802){if((e37802 instanceof Object))
{var ex__5682__auto__ = e37802;var statearr_37803_37816 = state_37783;(statearr_37803_37816[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37783);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e37802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__37817 = state_37783;
state_37783 = G__37817;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37783){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___37805,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_37804 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___37805);
return statearr_37804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___37805,tc,fc))
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
return (function (state_37864){var state_val_37865 = (state_37864[(1)]);if((state_val_37865 === (7)))
{var inst_37860 = (state_37864[(2)]);var state_37864__$1 = state_37864;var statearr_37866_37882 = state_37864__$1;(statearr_37866_37882[(2)] = inst_37860);
(statearr_37866_37882[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37865 === (6)))
{var inst_37850 = (state_37864[(7)]);var inst_37853 = (state_37864[(8)]);var inst_37857 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37850,inst_37853) : f.call(null,inst_37850,inst_37853));var inst_37850__$1 = inst_37857;var state_37864__$1 = (function (){var statearr_37867 = state_37864;(statearr_37867[(7)] = inst_37850__$1);
return statearr_37867;
})();var statearr_37868_37883 = state_37864__$1;(statearr_37868_37883[(2)] = null);
(statearr_37868_37883[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37865 === (5)))
{var inst_37850 = (state_37864[(7)]);var state_37864__$1 = state_37864;var statearr_37869_37884 = state_37864__$1;(statearr_37869_37884[(2)] = inst_37850);
(statearr_37869_37884[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37865 === (4)))
{var inst_37853 = (state_37864[(8)]);var inst_37853__$1 = (state_37864[(2)]);var inst_37854 = (inst_37853__$1 == null);var state_37864__$1 = (function (){var statearr_37870 = state_37864;(statearr_37870[(8)] = inst_37853__$1);
return statearr_37870;
})();if(cljs.core.truth_(inst_37854))
{var statearr_37871_37885 = state_37864__$1;(statearr_37871_37885[(1)] = (5));
} else
{var statearr_37872_37886 = state_37864__$1;(statearr_37872_37886[(1)] = (6));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37865 === (3)))
{var inst_37862 = (state_37864[(2)]);var state_37864__$1 = state_37864;return cljs.core.async.impl.ioc_helpers.return_chan(state_37864__$1,inst_37862);
} else
{if((state_val_37865 === (2)))
{var state_37864__$1 = state_37864;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37864__$1,(4),ch);
} else
{if((state_val_37865 === (1)))
{var inst_37850 = init;var state_37864__$1 = (function (){var statearr_37873 = state_37864;(statearr_37873[(7)] = inst_37850);
return statearr_37873;
})();var statearr_37874_37887 = state_37864__$1;(statearr_37874_37887[(2)] = null);
(statearr_37874_37887[(1)] = (2));
return cljs.core.constant$keyword$745;
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
var state_machine__5679__auto____0 = (function (){var statearr_37878 = [null,null,null,null,null,null,null,null,null];(statearr_37878[(0)] = state_machine__5679__auto__);
(statearr_37878[(1)] = (1));
return statearr_37878;
});
var state_machine__5679__auto____1 = (function (state_37864){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37864);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37879){if((e37879 instanceof Object))
{var ex__5682__auto__ = e37879;var statearr_37880_37888 = state_37864;(statearr_37880_37888[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37864);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e37879;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__37889 = state_37864;
state_37864 = G__37889;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37864){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37881 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37881;
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
return (function (state_37951){var state_val_37952 = (state_37951[(1)]);if((state_val_37952 === (7)))
{var inst_37932 = (state_37951[(7)]);var inst_37937 = (state_37951[(2)]);var inst_37938 = cljs.core.next(inst_37932);var inst_37932__$1 = inst_37938;var state_37951__$1 = (function (){var statearr_37953 = state_37951;(statearr_37953[(8)] = inst_37937);
(statearr_37953[(7)] = inst_37932__$1);
return statearr_37953;
})();var statearr_37954_37972 = state_37951__$1;(statearr_37954_37972[(2)] = null);
(statearr_37954_37972[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37952 === (1)))
{var inst_37931 = cljs.core.seq(coll);var inst_37932 = inst_37931;var state_37951__$1 = (function (){var statearr_37955 = state_37951;(statearr_37955[(7)] = inst_37932);
return statearr_37955;
})();var statearr_37956_37973 = state_37951__$1;(statearr_37956_37973[(2)] = null);
(statearr_37956_37973[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37952 === (4)))
{var inst_37932 = (state_37951[(7)]);var inst_37935 = cljs.core.first(inst_37932);var state_37951__$1 = state_37951;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37951__$1,(7),ch,inst_37935);
} else
{if((state_val_37952 === (6)))
{var inst_37947 = (state_37951[(2)]);var state_37951__$1 = state_37951;var statearr_37957_37974 = state_37951__$1;(statearr_37957_37974[(2)] = inst_37947);
(statearr_37957_37974[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37952 === (3)))
{var inst_37949 = (state_37951[(2)]);var state_37951__$1 = state_37951;return cljs.core.async.impl.ioc_helpers.return_chan(state_37951__$1,inst_37949);
} else
{if((state_val_37952 === (2)))
{var inst_37932 = (state_37951[(7)]);var state_37951__$1 = state_37951;if(cljs.core.truth_(inst_37932))
{var statearr_37958_37975 = state_37951__$1;(statearr_37958_37975[(1)] = (4));
} else
{var statearr_37959_37976 = state_37951__$1;(statearr_37959_37976[(1)] = (5));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37952 === (9)))
{var state_37951__$1 = state_37951;var statearr_37960_37977 = state_37951__$1;(statearr_37960_37977[(2)] = null);
(statearr_37960_37977[(1)] = (10));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37952 === (5)))
{var state_37951__$1 = state_37951;if(cljs.core.truth_(close_QMARK_))
{var statearr_37961_37978 = state_37951__$1;(statearr_37961_37978[(1)] = (8));
} else
{var statearr_37962_37979 = state_37951__$1;(statearr_37962_37979[(1)] = (9));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_37952 === (10)))
{var inst_37945 = (state_37951[(2)]);var state_37951__$1 = state_37951;var statearr_37963_37980 = state_37951__$1;(statearr_37963_37980[(2)] = inst_37945);
(statearr_37963_37980[(1)] = (6));
return cljs.core.constant$keyword$745;
} else
{if((state_val_37952 === (8)))
{var inst_37942 = cljs.core.async.close_BANG_(ch);var state_37951__$1 = state_37951;var statearr_37964_37981 = state_37951__$1;(statearr_37964_37981[(2)] = inst_37942);
(statearr_37964_37981[(1)] = (10));
return cljs.core.constant$keyword$745;
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
var state_machine__5679__auto____0 = (function (){var statearr_37968 = [null,null,null,null,null,null,null,null,null];(statearr_37968[(0)] = state_machine__5679__auto__);
(statearr_37968[(1)] = (1));
return statearr_37968;
});
var state_machine__5679__auto____1 = (function (state_37951){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37951);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37969){if((e37969 instanceof Object))
{var ex__5682__auto__ = e37969;var statearr_37970_37982 = state_37951;(statearr_37970_37982[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37951);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e37969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__37983 = state_37951;
state_37951 = G__37983;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37951){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37971 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37971;
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
cljs.core.async.Mux = (function (){var obj37985 = {};return obj37985;
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
cljs.core.async.Mult = (function (){var obj37987 = {};return obj37987;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t38211 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38211 = (function (cs,ch,mult,meta38212){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta38212 = meta38212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38211.cljs$lang$type = true;
cljs.core.async.t38211.cljs$lang$ctorStr = "cljs.core.async/t38211";
cljs.core.async.t38211.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38211");
});})(cs))
;
cljs.core.async.t38211.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t38211.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t38211.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t38211.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t38211.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t38211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38213){var self__ = this;
var _38213__$1 = this;return self__.meta38212;
});})(cs))
;
cljs.core.async.t38211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38213,meta38212__$1){var self__ = this;
var _38213__$1 = this;return (new cljs.core.async.t38211(self__.cs,self__.ch,self__.mult,meta38212__$1));
});})(cs))
;
cljs.core.async.__GT_t38211 = ((function (cs){
return (function __GT_t38211(cs__$1,ch__$1,mult__$1,meta38212){return (new cljs.core.async.t38211(cs__$1,ch__$1,mult__$1,meta38212));
});})(cs))
;
}
return (new cljs.core.async.t38211(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___38434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38434,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38434,cs,m,dchan,dctr,done){
return (function (state_38348){var state_val_38349 = (state_38348[(1)]);if((state_val_38349 === (7)))
{var inst_38344 = (state_38348[(2)]);var state_38348__$1 = state_38348;var statearr_38350_38435 = state_38348__$1;(statearr_38350_38435[(2)] = inst_38344);
(statearr_38350_38435[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (20)))
{var inst_38245 = (state_38348[(7)]);var inst_38255 = cljs.core.first(inst_38245);var inst_38256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38255,(0),null);var inst_38257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38255,(1),null);var state_38348__$1 = (function (){var statearr_38351 = state_38348;(statearr_38351[(8)] = inst_38256);
return statearr_38351;
})();if(cljs.core.truth_(inst_38257))
{var statearr_38352_38436 = state_38348__$1;(statearr_38352_38436[(1)] = (22));
} else
{var statearr_38353_38437 = state_38348__$1;(statearr_38353_38437[(1)] = (23));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (27)))
{var inst_38287 = (state_38348[(9)]);var inst_38285 = (state_38348[(10)]);var inst_38292 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38285,inst_38287);var state_38348__$1 = (function (){var statearr_38354 = state_38348;(statearr_38354[(11)] = inst_38292);
return statearr_38354;
})();var statearr_38355_38438 = state_38348__$1;(statearr_38355_38438[(2)] = null);
(statearr_38355_38438[(1)] = (32));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (1)))
{var state_38348__$1 = state_38348;var statearr_38356_38439 = state_38348__$1;(statearr_38356_38439[(2)] = null);
(statearr_38356_38439[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (24)))
{var inst_38245 = (state_38348[(7)]);var inst_38262 = (state_38348[(2)]);var inst_38263 = cljs.core.next(inst_38245);var inst_38225 = inst_38263;var inst_38226 = null;var inst_38227 = (0);var inst_38228 = (0);var state_38348__$1 = (function (){var statearr_38357 = state_38348;(statearr_38357[(12)] = inst_38228);
(statearr_38357[(13)] = inst_38227);
(statearr_38357[(14)] = inst_38225);
(statearr_38357[(15)] = inst_38262);
(statearr_38357[(16)] = inst_38226);
return statearr_38357;
})();var statearr_38358_38440 = state_38348__$1;(statearr_38358_38440[(2)] = null);
(statearr_38358_38440[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (39)))
{var inst_38305 = (state_38348[(17)]);var inst_38323 = (state_38348[(2)]);var inst_38324 = cljs.core.next(inst_38305);var inst_38284 = inst_38324;var inst_38285 = null;var inst_38286 = (0);var inst_38287 = (0);var state_38348__$1 = (function (){var statearr_38362 = state_38348;(statearr_38362[(18)] = inst_38284);
(statearr_38362[(19)] = inst_38323);
(statearr_38362[(9)] = inst_38287);
(statearr_38362[(20)] = inst_38286);
(statearr_38362[(10)] = inst_38285);
return statearr_38362;
})();var statearr_38363_38441 = state_38348__$1;(statearr_38363_38441[(2)] = null);
(statearr_38363_38441[(1)] = (25));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (4)))
{var inst_38216 = (state_38348[(21)]);var inst_38216__$1 = (state_38348[(2)]);var inst_38217 = (inst_38216__$1 == null);var state_38348__$1 = (function (){var statearr_38364 = state_38348;(statearr_38364[(21)] = inst_38216__$1);
return statearr_38364;
})();if(cljs.core.truth_(inst_38217))
{var statearr_38365_38442 = state_38348__$1;(statearr_38365_38442[(1)] = (5));
} else
{var statearr_38366_38443 = state_38348__$1;(statearr_38366_38443[(1)] = (6));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (15)))
{var inst_38228 = (state_38348[(12)]);var inst_38227 = (state_38348[(13)]);var inst_38225 = (state_38348[(14)]);var inst_38226 = (state_38348[(16)]);var inst_38241 = (state_38348[(2)]);var inst_38242 = (inst_38228 + (1));var tmp38359 = inst_38227;var tmp38360 = inst_38225;var tmp38361 = inst_38226;var inst_38225__$1 = tmp38360;var inst_38226__$1 = tmp38361;var inst_38227__$1 = tmp38359;var inst_38228__$1 = inst_38242;var state_38348__$1 = (function (){var statearr_38367 = state_38348;(statearr_38367[(12)] = inst_38228__$1);
(statearr_38367[(13)] = inst_38227__$1);
(statearr_38367[(14)] = inst_38225__$1);
(statearr_38367[(16)] = inst_38226__$1);
(statearr_38367[(22)] = inst_38241);
return statearr_38367;
})();var statearr_38368_38444 = state_38348__$1;(statearr_38368_38444[(2)] = null);
(statearr_38368_38444[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (21)))
{var inst_38266 = (state_38348[(2)]);var state_38348__$1 = state_38348;var statearr_38369_38445 = state_38348__$1;(statearr_38369_38445[(2)] = inst_38266);
(statearr_38369_38445[(1)] = (18));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (31)))
{var inst_38292 = (state_38348[(11)]);var inst_38293 = (state_38348[(2)]);var inst_38294 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_38295 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38292);var state_38348__$1 = (function (){var statearr_38370 = state_38348;(statearr_38370[(23)] = inst_38294);
(statearr_38370[(24)] = inst_38293);
return statearr_38370;
})();var statearr_38371_38446 = state_38348__$1;(statearr_38371_38446[(2)] = inst_38295);
cljs.core.async.impl.ioc_helpers.process_exception(state_38348__$1);
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (32)))
{var inst_38216 = (state_38348[(21)]);var inst_38292 = (state_38348[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38348,(31),Object,null,(30));var inst_38299 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38292,inst_38216,done);var state_38348__$1 = state_38348;var statearr_38372_38447 = state_38348__$1;(statearr_38372_38447[(2)] = inst_38299);
cljs.core.async.impl.ioc_helpers.process_exception(state_38348__$1);
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (40)))
{var inst_38314 = (state_38348[(25)]);var inst_38315 = (state_38348[(2)]);var inst_38316 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_38317 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38314);var state_38348__$1 = (function (){var statearr_38373 = state_38348;(statearr_38373[(26)] = inst_38315);
(statearr_38373[(27)] = inst_38316);
return statearr_38373;
})();var statearr_38374_38448 = state_38348__$1;(statearr_38374_38448[(2)] = inst_38317);
cljs.core.async.impl.ioc_helpers.process_exception(state_38348__$1);
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (33)))
{var inst_38305 = (state_38348[(17)]);var inst_38307 = cljs.core.chunked_seq_QMARK_(inst_38305);var state_38348__$1 = state_38348;if(inst_38307)
{var statearr_38375_38449 = state_38348__$1;(statearr_38375_38449[(1)] = (36));
} else
{var statearr_38376_38450 = state_38348__$1;(statearr_38376_38450[(1)] = (37));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (13)))
{var inst_38235 = (state_38348[(28)]);var inst_38238 = cljs.core.async.close_BANG_(inst_38235);var state_38348__$1 = state_38348;var statearr_38377_38451 = state_38348__$1;(statearr_38377_38451[(2)] = inst_38238);
(statearr_38377_38451[(1)] = (15));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (22)))
{var inst_38256 = (state_38348[(8)]);var inst_38259 = cljs.core.async.close_BANG_(inst_38256);var state_38348__$1 = state_38348;var statearr_38378_38452 = state_38348__$1;(statearr_38378_38452[(2)] = inst_38259);
(statearr_38378_38452[(1)] = (24));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (36)))
{var inst_38305 = (state_38348[(17)]);var inst_38309 = cljs.core.chunk_first(inst_38305);var inst_38310 = cljs.core.chunk_rest(inst_38305);var inst_38311 = cljs.core.count(inst_38309);var inst_38284 = inst_38310;var inst_38285 = inst_38309;var inst_38286 = inst_38311;var inst_38287 = (0);var state_38348__$1 = (function (){var statearr_38379 = state_38348;(statearr_38379[(18)] = inst_38284);
(statearr_38379[(9)] = inst_38287);
(statearr_38379[(20)] = inst_38286);
(statearr_38379[(10)] = inst_38285);
return statearr_38379;
})();var statearr_38380_38453 = state_38348__$1;(statearr_38380_38453[(2)] = null);
(statearr_38380_38453[(1)] = (25));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (41)))
{var inst_38216 = (state_38348[(21)]);var inst_38314 = (state_38348[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38348,(40),Object,null,(39));var inst_38321 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38314,inst_38216,done);var state_38348__$1 = state_38348;var statearr_38381_38454 = state_38348__$1;(statearr_38381_38454[(2)] = inst_38321);
cljs.core.async.impl.ioc_helpers.process_exception(state_38348__$1);
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (43)))
{var state_38348__$1 = state_38348;var statearr_38382_38455 = state_38348__$1;(statearr_38382_38455[(2)] = null);
(statearr_38382_38455[(1)] = (44));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (29)))
{var inst_38332 = (state_38348[(2)]);var state_38348__$1 = state_38348;var statearr_38383_38456 = state_38348__$1;(statearr_38383_38456[(2)] = inst_38332);
(statearr_38383_38456[(1)] = (26));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (44)))
{var inst_38341 = (state_38348[(2)]);var state_38348__$1 = (function (){var statearr_38384 = state_38348;(statearr_38384[(29)] = inst_38341);
return statearr_38384;
})();var statearr_38385_38457 = state_38348__$1;(statearr_38385_38457[(2)] = null);
(statearr_38385_38457[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (6)))
{var inst_38276 = (state_38348[(30)]);var inst_38275 = cljs.core.deref(cs);var inst_38276__$1 = cljs.core.keys(inst_38275);var inst_38277 = cljs.core.count(inst_38276__$1);var inst_38278 = cljs.core.reset_BANG_(dctr,inst_38277);var inst_38283 = cljs.core.seq(inst_38276__$1);var inst_38284 = inst_38283;var inst_38285 = null;var inst_38286 = (0);var inst_38287 = (0);var state_38348__$1 = (function (){var statearr_38386 = state_38348;(statearr_38386[(30)] = inst_38276__$1);
(statearr_38386[(18)] = inst_38284);
(statearr_38386[(9)] = inst_38287);
(statearr_38386[(20)] = inst_38286);
(statearr_38386[(10)] = inst_38285);
(statearr_38386[(31)] = inst_38278);
return statearr_38386;
})();var statearr_38387_38458 = state_38348__$1;(statearr_38387_38458[(2)] = null);
(statearr_38387_38458[(1)] = (25));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (28)))
{var inst_38284 = (state_38348[(18)]);var inst_38305 = (state_38348[(17)]);var inst_38305__$1 = cljs.core.seq(inst_38284);var state_38348__$1 = (function (){var statearr_38388 = state_38348;(statearr_38388[(17)] = inst_38305__$1);
return statearr_38388;
})();if(inst_38305__$1)
{var statearr_38389_38459 = state_38348__$1;(statearr_38389_38459[(1)] = (33));
} else
{var statearr_38390_38460 = state_38348__$1;(statearr_38390_38460[(1)] = (34));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (25)))
{var inst_38287 = (state_38348[(9)]);var inst_38286 = (state_38348[(20)]);var inst_38289 = (inst_38287 < inst_38286);var inst_38290 = inst_38289;var state_38348__$1 = state_38348;if(cljs.core.truth_(inst_38290))
{var statearr_38391_38461 = state_38348__$1;(statearr_38391_38461[(1)] = (27));
} else
{var statearr_38392_38462 = state_38348__$1;(statearr_38392_38462[(1)] = (28));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (34)))
{var state_38348__$1 = state_38348;var statearr_38393_38463 = state_38348__$1;(statearr_38393_38463[(2)] = null);
(statearr_38393_38463[(1)] = (35));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (17)))
{var state_38348__$1 = state_38348;var statearr_38394_38464 = state_38348__$1;(statearr_38394_38464[(2)] = null);
(statearr_38394_38464[(1)] = (18));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (3)))
{var inst_38346 = (state_38348[(2)]);var state_38348__$1 = state_38348;return cljs.core.async.impl.ioc_helpers.return_chan(state_38348__$1,inst_38346);
} else
{if((state_val_38349 === (12)))
{var inst_38271 = (state_38348[(2)]);var state_38348__$1 = state_38348;var statearr_38395_38465 = state_38348__$1;(statearr_38395_38465[(2)] = inst_38271);
(statearr_38395_38465[(1)] = (9));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (2)))
{var state_38348__$1 = state_38348;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38348__$1,(4),ch);
} else
{if((state_val_38349 === (23)))
{var state_38348__$1 = state_38348;var statearr_38396_38466 = state_38348__$1;(statearr_38396_38466[(2)] = null);
(statearr_38396_38466[(1)] = (24));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (35)))
{var inst_38330 = (state_38348[(2)]);var state_38348__$1 = state_38348;var statearr_38397_38467 = state_38348__$1;(statearr_38397_38467[(2)] = inst_38330);
(statearr_38397_38467[(1)] = (29));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (19)))
{var inst_38245 = (state_38348[(7)]);var inst_38249 = cljs.core.chunk_first(inst_38245);var inst_38250 = cljs.core.chunk_rest(inst_38245);var inst_38251 = cljs.core.count(inst_38249);var inst_38225 = inst_38250;var inst_38226 = inst_38249;var inst_38227 = inst_38251;var inst_38228 = (0);var state_38348__$1 = (function (){var statearr_38398 = state_38348;(statearr_38398[(12)] = inst_38228);
(statearr_38398[(13)] = inst_38227);
(statearr_38398[(14)] = inst_38225);
(statearr_38398[(16)] = inst_38226);
return statearr_38398;
})();var statearr_38399_38468 = state_38348__$1;(statearr_38399_38468[(2)] = null);
(statearr_38399_38468[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (11)))
{var inst_38225 = (state_38348[(14)]);var inst_38245 = (state_38348[(7)]);var inst_38245__$1 = cljs.core.seq(inst_38225);var state_38348__$1 = (function (){var statearr_38400 = state_38348;(statearr_38400[(7)] = inst_38245__$1);
return statearr_38400;
})();if(inst_38245__$1)
{var statearr_38401_38469 = state_38348__$1;(statearr_38401_38469[(1)] = (16));
} else
{var statearr_38402_38470 = state_38348__$1;(statearr_38402_38470[(1)] = (17));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (9)))
{var inst_38273 = (state_38348[(2)]);var state_38348__$1 = state_38348;var statearr_38403_38471 = state_38348__$1;(statearr_38403_38471[(2)] = inst_38273);
(statearr_38403_38471[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (5)))
{var inst_38223 = cljs.core.deref(cs);var inst_38224 = cljs.core.seq(inst_38223);var inst_38225 = inst_38224;var inst_38226 = null;var inst_38227 = (0);var inst_38228 = (0);var state_38348__$1 = (function (){var statearr_38404 = state_38348;(statearr_38404[(12)] = inst_38228);
(statearr_38404[(13)] = inst_38227);
(statearr_38404[(14)] = inst_38225);
(statearr_38404[(16)] = inst_38226);
return statearr_38404;
})();var statearr_38405_38472 = state_38348__$1;(statearr_38405_38472[(2)] = null);
(statearr_38405_38472[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (14)))
{var state_38348__$1 = state_38348;var statearr_38406_38473 = state_38348__$1;(statearr_38406_38473[(2)] = null);
(statearr_38406_38473[(1)] = (15));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (45)))
{var inst_38338 = (state_38348[(2)]);var state_38348__$1 = state_38348;var statearr_38407_38474 = state_38348__$1;(statearr_38407_38474[(2)] = inst_38338);
(statearr_38407_38474[(1)] = (44));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (26)))
{var inst_38276 = (state_38348[(30)]);var inst_38334 = (state_38348[(2)]);var inst_38335 = cljs.core.seq(inst_38276);var state_38348__$1 = (function (){var statearr_38408 = state_38348;(statearr_38408[(32)] = inst_38334);
return statearr_38408;
})();if(inst_38335)
{var statearr_38409_38475 = state_38348__$1;(statearr_38409_38475[(1)] = (42));
} else
{var statearr_38410_38476 = state_38348__$1;(statearr_38410_38476[(1)] = (43));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (16)))
{var inst_38245 = (state_38348[(7)]);var inst_38247 = cljs.core.chunked_seq_QMARK_(inst_38245);var state_38348__$1 = state_38348;if(inst_38247)
{var statearr_38414_38477 = state_38348__$1;(statearr_38414_38477[(1)] = (19));
} else
{var statearr_38415_38478 = state_38348__$1;(statearr_38415_38478[(1)] = (20));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (38)))
{var inst_38327 = (state_38348[(2)]);var state_38348__$1 = state_38348;var statearr_38416_38479 = state_38348__$1;(statearr_38416_38479[(2)] = inst_38327);
(statearr_38416_38479[(1)] = (35));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (30)))
{var inst_38284 = (state_38348[(18)]);var inst_38287 = (state_38348[(9)]);var inst_38286 = (state_38348[(20)]);var inst_38285 = (state_38348[(10)]);var inst_38301 = (state_38348[(2)]);var inst_38302 = (inst_38287 + (1));var tmp38411 = inst_38284;var tmp38412 = inst_38286;var tmp38413 = inst_38285;var inst_38284__$1 = tmp38411;var inst_38285__$1 = tmp38413;var inst_38286__$1 = tmp38412;var inst_38287__$1 = inst_38302;var state_38348__$1 = (function (){var statearr_38417 = state_38348;(statearr_38417[(18)] = inst_38284__$1);
(statearr_38417[(9)] = inst_38287__$1);
(statearr_38417[(20)] = inst_38286__$1);
(statearr_38417[(33)] = inst_38301);
(statearr_38417[(10)] = inst_38285__$1);
return statearr_38417;
})();var statearr_38418_38480 = state_38348__$1;(statearr_38418_38480[(2)] = null);
(statearr_38418_38480[(1)] = (25));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (10)))
{var inst_38228 = (state_38348[(12)]);var inst_38226 = (state_38348[(16)]);var inst_38234 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38226,inst_38228);var inst_38235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38234,(0),null);var inst_38236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38234,(1),null);var state_38348__$1 = (function (){var statearr_38419 = state_38348;(statearr_38419[(28)] = inst_38235);
return statearr_38419;
})();if(cljs.core.truth_(inst_38236))
{var statearr_38420_38481 = state_38348__$1;(statearr_38420_38481[(1)] = (13));
} else
{var statearr_38421_38482 = state_38348__$1;(statearr_38421_38482[(1)] = (14));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (18)))
{var inst_38269 = (state_38348[(2)]);var state_38348__$1 = state_38348;var statearr_38422_38483 = state_38348__$1;(statearr_38422_38483[(2)] = inst_38269);
(statearr_38422_38483[(1)] = (12));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (42)))
{var state_38348__$1 = state_38348;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38348__$1,(45),dchan);
} else
{if((state_val_38349 === (37)))
{var inst_38305 = (state_38348[(17)]);var inst_38314 = cljs.core.first(inst_38305);var state_38348__$1 = (function (){var statearr_38423 = state_38348;(statearr_38423[(25)] = inst_38314);
return statearr_38423;
})();var statearr_38424_38484 = state_38348__$1;(statearr_38424_38484[(2)] = null);
(statearr_38424_38484[(1)] = (41));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38349 === (8)))
{var inst_38228 = (state_38348[(12)]);var inst_38227 = (state_38348[(13)]);var inst_38230 = (inst_38228 < inst_38227);var inst_38231 = inst_38230;var state_38348__$1 = state_38348;if(cljs.core.truth_(inst_38231))
{var statearr_38425_38485 = state_38348__$1;(statearr_38425_38485[(1)] = (10));
} else
{var statearr_38426_38486 = state_38348__$1;(statearr_38426_38486[(1)] = (11));
}
return cljs.core.constant$keyword$745;
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
});})(c__5693__auto___38434,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___38434,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38430[(0)] = state_machine__5679__auto__);
(statearr_38430[(1)] = (1));
return statearr_38430;
});
var state_machine__5679__auto____1 = (function (state_38348){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38348);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38431){if((e38431 instanceof Object))
{var ex__5682__auto__ = e38431;var statearr_38432_38487 = state_38348;(statearr_38432_38487[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38348);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e38431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__38488 = state_38348;
state_38348 = G__38488;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38348){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38434,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_38433 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38434);
return statearr_38433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38434,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj38490 = {};return obj38490;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$752,null,cljs.core.constant$keyword$753,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$754);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$753);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$754,chs);var pauses = pick(cljs.core.constant$keyword$752,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$755,solos,cljs.core.constant$keyword$756,pick(cljs.core.constant$keyword$753,chs),cljs.core.constant$keyword$757,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$752)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t38600 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38600 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38601){
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
this.meta38601 = meta38601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38600.cljs$lang$type = true;
cljs.core.async.t38600.cljs$lang$ctorStr = "cljs.core.async/t38600";
cljs.core.async.t38600.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38600");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38600.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t38600.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38600.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38600.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38600.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38600.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38600.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38602){var self__ = this;
var _38602__$1 = this;return self__.meta38601;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38602,meta38601__$1){var self__ = this;
var _38602__$1 = this;return (new cljs.core.async.t38600(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38601__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t38600 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t38600(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38601){return (new cljs.core.async.t38600(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38601));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t38600(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___38709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38667){var state_val_38668 = (state_38667[(1)]);if((state_val_38668 === (7)))
{var inst_38616 = (state_38667[(7)]);var inst_38621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38616);var state_38667__$1 = state_38667;var statearr_38669_38710 = state_38667__$1;(statearr_38669_38710[(2)] = inst_38621);
(statearr_38669_38710[(1)] = (9));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (20)))
{var inst_38631 = (state_38667[(8)]);var state_38667__$1 = state_38667;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38667__$1,(23),out,inst_38631);
} else
{if((state_val_38668 === (1)))
{var inst_38606 = (state_38667[(9)]);var inst_38606__$1 = calc_state();var inst_38607 = cljs.core.seq_QMARK_(inst_38606__$1);var state_38667__$1 = (function (){var statearr_38670 = state_38667;(statearr_38670[(9)] = inst_38606__$1);
return statearr_38670;
})();if(inst_38607)
{var statearr_38671_38711 = state_38667__$1;(statearr_38671_38711[(1)] = (2));
} else
{var statearr_38672_38712 = state_38667__$1;(statearr_38672_38712[(1)] = (3));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (4)))
{var inst_38606 = (state_38667[(9)]);var inst_38612 = (state_38667[(2)]);var inst_38613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38612,cljs.core.constant$keyword$757);var inst_38614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38612,cljs.core.constant$keyword$756);var inst_38615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38612,cljs.core.constant$keyword$755);var inst_38616 = inst_38606;var state_38667__$1 = (function (){var statearr_38673 = state_38667;(statearr_38673[(10)] = inst_38615);
(statearr_38673[(11)] = inst_38614);
(statearr_38673[(12)] = inst_38613);
(statearr_38673[(7)] = inst_38616);
return statearr_38673;
})();var statearr_38674_38713 = state_38667__$1;(statearr_38674_38713[(2)] = null);
(statearr_38674_38713[(1)] = (5));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (15)))
{var state_38667__$1 = state_38667;var statearr_38675_38714 = state_38667__$1;(statearr_38675_38714[(2)] = null);
(statearr_38675_38714[(1)] = (16));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (21)))
{var state_38667__$1 = state_38667;var statearr_38676_38715 = state_38667__$1;(statearr_38676_38715[(2)] = null);
(statearr_38676_38715[(1)] = (22));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (13)))
{var inst_38663 = (state_38667[(2)]);var state_38667__$1 = state_38667;var statearr_38677_38716 = state_38667__$1;(statearr_38677_38716[(2)] = inst_38663);
(statearr_38677_38716[(1)] = (6));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (22)))
{var inst_38624 = (state_38667[(13)]);var inst_38660 = (state_38667[(2)]);var inst_38616 = inst_38624;var state_38667__$1 = (function (){var statearr_38678 = state_38667;(statearr_38678[(7)] = inst_38616);
(statearr_38678[(14)] = inst_38660);
return statearr_38678;
})();var statearr_38679_38717 = state_38667__$1;(statearr_38679_38717[(2)] = null);
(statearr_38679_38717[(1)] = (5));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (6)))
{var inst_38665 = (state_38667[(2)]);var state_38667__$1 = state_38667;return cljs.core.async.impl.ioc_helpers.return_chan(state_38667__$1,inst_38665);
} else
{if((state_val_38668 === (17)))
{var inst_38646 = (state_38667[(15)]);var state_38667__$1 = state_38667;var statearr_38680_38718 = state_38667__$1;(statearr_38680_38718[(2)] = inst_38646);
(statearr_38680_38718[(1)] = (19));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (3)))
{var inst_38606 = (state_38667[(9)]);var state_38667__$1 = state_38667;var statearr_38681_38719 = state_38667__$1;(statearr_38681_38719[(2)] = inst_38606);
(statearr_38681_38719[(1)] = (4));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (12)))
{var inst_38646 = (state_38667[(15)]);var inst_38632 = (state_38667[(16)]);var inst_38627 = (state_38667[(17)]);var inst_38646__$1 = (inst_38627.cljs$core$IFn$_invoke$arity$1 ? inst_38627.cljs$core$IFn$_invoke$arity$1(inst_38632) : inst_38627.call(null,inst_38632));var state_38667__$1 = (function (){var statearr_38682 = state_38667;(statearr_38682[(15)] = inst_38646__$1);
return statearr_38682;
})();if(cljs.core.truth_(inst_38646__$1))
{var statearr_38683_38720 = state_38667__$1;(statearr_38683_38720[(1)] = (17));
} else
{var statearr_38684_38721 = state_38667__$1;(statearr_38684_38721[(1)] = (18));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (2)))
{var inst_38606 = (state_38667[(9)]);var inst_38609 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38606);var state_38667__$1 = state_38667;var statearr_38685_38722 = state_38667__$1;(statearr_38685_38722[(2)] = inst_38609);
(statearr_38685_38722[(1)] = (4));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (23)))
{var inst_38657 = (state_38667[(2)]);var state_38667__$1 = state_38667;var statearr_38686_38723 = state_38667__$1;(statearr_38686_38723[(2)] = inst_38657);
(statearr_38686_38723[(1)] = (22));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (19)))
{var inst_38654 = (state_38667[(2)]);var state_38667__$1 = state_38667;if(cljs.core.truth_(inst_38654))
{var statearr_38687_38724 = state_38667__$1;(statearr_38687_38724[(1)] = (20));
} else
{var statearr_38688_38725 = state_38667__$1;(statearr_38688_38725[(1)] = (21));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (11)))
{var inst_38631 = (state_38667[(8)]);var inst_38637 = (inst_38631 == null);var state_38667__$1 = state_38667;if(cljs.core.truth_(inst_38637))
{var statearr_38689_38726 = state_38667__$1;(statearr_38689_38726[(1)] = (14));
} else
{var statearr_38690_38727 = state_38667__$1;(statearr_38690_38727[(1)] = (15));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (9)))
{var inst_38624 = (state_38667[(13)]);var inst_38624__$1 = (state_38667[(2)]);var inst_38625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38624__$1,cljs.core.constant$keyword$757);var inst_38626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38624__$1,cljs.core.constant$keyword$756);var inst_38627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38624__$1,cljs.core.constant$keyword$755);var state_38667__$1 = (function (){var statearr_38691 = state_38667;(statearr_38691[(18)] = inst_38626);
(statearr_38691[(17)] = inst_38627);
(statearr_38691[(13)] = inst_38624__$1);
return statearr_38691;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_38667__$1,(10),inst_38625);
} else
{if((state_val_38668 === (5)))
{var inst_38616 = (state_38667[(7)]);var inst_38619 = cljs.core.seq_QMARK_(inst_38616);var state_38667__$1 = state_38667;if(inst_38619)
{var statearr_38692_38728 = state_38667__$1;(statearr_38692_38728[(1)] = (7));
} else
{var statearr_38693_38729 = state_38667__$1;(statearr_38693_38729[(1)] = (8));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (14)))
{var inst_38632 = (state_38667[(16)]);var inst_38639 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38632);var state_38667__$1 = state_38667;var statearr_38694_38730 = state_38667__$1;(statearr_38694_38730[(2)] = inst_38639);
(statearr_38694_38730[(1)] = (16));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (16)))
{var inst_38642 = (state_38667[(2)]);var inst_38643 = calc_state();var inst_38616 = inst_38643;var state_38667__$1 = (function (){var statearr_38695 = state_38667;(statearr_38695[(19)] = inst_38642);
(statearr_38695[(7)] = inst_38616);
return statearr_38695;
})();var statearr_38696_38731 = state_38667__$1;(statearr_38696_38731[(2)] = null);
(statearr_38696_38731[(1)] = (5));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (10)))
{var inst_38632 = (state_38667[(16)]);var inst_38631 = (state_38667[(8)]);var inst_38630 = (state_38667[(2)]);var inst_38631__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38630,(0),null);var inst_38632__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38630,(1),null);var inst_38633 = (inst_38631__$1 == null);var inst_38634 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38632__$1,change);var inst_38635 = (inst_38633) || (inst_38634);var state_38667__$1 = (function (){var statearr_38697 = state_38667;(statearr_38697[(16)] = inst_38632__$1);
(statearr_38697[(8)] = inst_38631__$1);
return statearr_38697;
})();if(cljs.core.truth_(inst_38635))
{var statearr_38698_38732 = state_38667__$1;(statearr_38698_38732[(1)] = (11));
} else
{var statearr_38699_38733 = state_38667__$1;(statearr_38699_38733[(1)] = (12));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (18)))
{var inst_38626 = (state_38667[(18)]);var inst_38632 = (state_38667[(16)]);var inst_38627 = (state_38667[(17)]);var inst_38649 = cljs.core.empty_QMARK_(inst_38627);var inst_38650 = (inst_38626.cljs$core$IFn$_invoke$arity$1 ? inst_38626.cljs$core$IFn$_invoke$arity$1(inst_38632) : inst_38626.call(null,inst_38632));var inst_38651 = cljs.core.not(inst_38650);var inst_38652 = (inst_38649) && (inst_38651);var state_38667__$1 = state_38667;var statearr_38700_38734 = state_38667__$1;(statearr_38700_38734[(2)] = inst_38652);
(statearr_38700_38734[(1)] = (19));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38668 === (8)))
{var inst_38616 = (state_38667[(7)]);var state_38667__$1 = state_38667;var statearr_38701_38735 = state_38667__$1;(statearr_38701_38735[(2)] = inst_38616);
(statearr_38701_38735[(1)] = (9));
return cljs.core.constant$keyword$745;
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
});})(c__5693__auto___38709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___38709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38705[(0)] = state_machine__5679__auto__);
(statearr_38705[(1)] = (1));
return statearr_38705;
});
var state_machine__5679__auto____1 = (function (state_38667){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38667);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38706){if((e38706 instanceof Object))
{var ex__5682__auto__ = e38706;var statearr_38707_38736 = state_38667;(statearr_38707_38736[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38667);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e38706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__38737 = state_38667;
state_38667 = G__38737;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38667){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_38708 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38709);
return statearr_38708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj38739 = {};return obj38739;
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
return (function (p1__38740_SHARP_){if(cljs.core.truth_((p1__38740_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38740_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38740_SHARP_.call(null,topic))))
{return p1__38740_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38740_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t38865 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38865 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38866){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38866 = meta38866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38865.cljs$lang$type = true;
cljs.core.async.t38865.cljs$lang$ctorStr = "cljs.core.async/t38865";
cljs.core.async.t38865.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38865");
});})(mults,ensure_mult))
;
cljs.core.async.t38865.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t38865.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t38865.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t38865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t38865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t38865.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t38865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38867){var self__ = this;
var _38867__$1 = this;return self__.meta38866;
});})(mults,ensure_mult))
;
cljs.core.async.t38865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38867,meta38866__$1){var self__ = this;
var _38867__$1 = this;return (new cljs.core.async.t38865(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38866__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t38865 = ((function (mults,ensure_mult){
return (function __GT_t38865(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38866){return (new cljs.core.async.t38865(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38866));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t38865(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___38989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38989,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38989,mults,ensure_mult,p){
return (function (state_38941){var state_val_38942 = (state_38941[(1)]);if((state_val_38942 === (7)))
{var inst_38937 = (state_38941[(2)]);var state_38941__$1 = state_38941;var statearr_38943_38990 = state_38941__$1;(statearr_38943_38990[(2)] = inst_38937);
(statearr_38943_38990[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (20)))
{var state_38941__$1 = state_38941;var statearr_38944_38991 = state_38941__$1;(statearr_38944_38991[(2)] = null);
(statearr_38944_38991[(1)] = (21));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (1)))
{var state_38941__$1 = state_38941;var statearr_38945_38992 = state_38941__$1;(statearr_38945_38992[(2)] = null);
(statearr_38945_38992[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (24)))
{var inst_38870 = (state_38941[(7)]);var inst_38920 = (state_38941[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38941,(23),Object,null,(22));var inst_38927 = cljs.core.async.muxch_STAR_(inst_38920);var state_38941__$1 = state_38941;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38941__$1,(25),inst_38927,inst_38870);
} else
{if((state_val_38942 === (4)))
{var inst_38870 = (state_38941[(7)]);var inst_38870__$1 = (state_38941[(2)]);var inst_38871 = (inst_38870__$1 == null);var state_38941__$1 = (function (){var statearr_38946 = state_38941;(statearr_38946[(7)] = inst_38870__$1);
return statearr_38946;
})();if(cljs.core.truth_(inst_38871))
{var statearr_38947_38993 = state_38941__$1;(statearr_38947_38993[(1)] = (5));
} else
{var statearr_38948_38994 = state_38941__$1;(statearr_38948_38994[(1)] = (6));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (15)))
{var inst_38912 = (state_38941[(2)]);var state_38941__$1 = state_38941;var statearr_38949_38995 = state_38941__$1;(statearr_38949_38995[(2)] = inst_38912);
(statearr_38949_38995[(1)] = (12));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (21)))
{var inst_38934 = (state_38941[(2)]);var state_38941__$1 = (function (){var statearr_38950 = state_38941;(statearr_38950[(9)] = inst_38934);
return statearr_38950;
})();var statearr_38951_38996 = state_38941__$1;(statearr_38951_38996[(2)] = null);
(statearr_38951_38996[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (13)))
{var inst_38894 = (state_38941[(10)]);var inst_38896 = cljs.core.chunked_seq_QMARK_(inst_38894);var state_38941__$1 = state_38941;if(inst_38896)
{var statearr_38952_38997 = state_38941__$1;(statearr_38952_38997[(1)] = (16));
} else
{var statearr_38953_38998 = state_38941__$1;(statearr_38953_38998[(1)] = (17));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (22)))
{var inst_38931 = (state_38941[(2)]);var state_38941__$1 = state_38941;var statearr_38954_38999 = state_38941__$1;(statearr_38954_38999[(2)] = inst_38931);
(statearr_38954_38999[(1)] = (21));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (6)))
{var inst_38918 = (state_38941[(11)]);var inst_38870 = (state_38941[(7)]);var inst_38920 = (state_38941[(8)]);var inst_38918__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38870) : topic_fn.call(null,inst_38870));var inst_38919 = cljs.core.deref(mults);var inst_38920__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38919,inst_38918__$1);var state_38941__$1 = (function (){var statearr_38955 = state_38941;(statearr_38955[(11)] = inst_38918__$1);
(statearr_38955[(8)] = inst_38920__$1);
return statearr_38955;
})();if(cljs.core.truth_(inst_38920__$1))
{var statearr_38956_39000 = state_38941__$1;(statearr_38956_39000[(1)] = (19));
} else
{var statearr_38957_39001 = state_38941__$1;(statearr_38957_39001[(1)] = (20));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (25)))
{var inst_38929 = (state_38941[(2)]);var state_38941__$1 = state_38941;var statearr_38958_39002 = state_38941__$1;(statearr_38958_39002[(2)] = inst_38929);
cljs.core.async.impl.ioc_helpers.process_exception(state_38941__$1);
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (17)))
{var inst_38894 = (state_38941[(10)]);var inst_38903 = cljs.core.first(inst_38894);var inst_38904 = cljs.core.async.muxch_STAR_(inst_38903);var inst_38905 = cljs.core.async.close_BANG_(inst_38904);var inst_38906 = cljs.core.next(inst_38894);var inst_38880 = inst_38906;var inst_38881 = null;var inst_38882 = (0);var inst_38883 = (0);var state_38941__$1 = (function (){var statearr_38959 = state_38941;(statearr_38959[(12)] = inst_38883);
(statearr_38959[(13)] = inst_38881);
(statearr_38959[(14)] = inst_38880);
(statearr_38959[(15)] = inst_38882);
(statearr_38959[(16)] = inst_38905);
return statearr_38959;
})();var statearr_38960_39003 = state_38941__$1;(statearr_38960_39003[(2)] = null);
(statearr_38960_39003[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (3)))
{var inst_38939 = (state_38941[(2)]);var state_38941__$1 = state_38941;return cljs.core.async.impl.ioc_helpers.return_chan(state_38941__$1,inst_38939);
} else
{if((state_val_38942 === (12)))
{var inst_38914 = (state_38941[(2)]);var state_38941__$1 = state_38941;var statearr_38961_39004 = state_38941__$1;(statearr_38961_39004[(2)] = inst_38914);
(statearr_38961_39004[(1)] = (9));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (2)))
{var state_38941__$1 = state_38941;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38941__$1,(4),ch);
} else
{if((state_val_38942 === (23)))
{var inst_38918 = (state_38941[(11)]);var inst_38922 = (state_38941[(2)]);var inst_38923 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38918);var state_38941__$1 = (function (){var statearr_38962 = state_38941;(statearr_38962[(17)] = inst_38922);
return statearr_38962;
})();var statearr_38963_39005 = state_38941__$1;(statearr_38963_39005[(2)] = inst_38923);
cljs.core.async.impl.ioc_helpers.process_exception(state_38941__$1);
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (19)))
{var state_38941__$1 = state_38941;var statearr_38964_39006 = state_38941__$1;(statearr_38964_39006[(2)] = null);
(statearr_38964_39006[(1)] = (24));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (11)))
{var inst_38880 = (state_38941[(14)]);var inst_38894 = (state_38941[(10)]);var inst_38894__$1 = cljs.core.seq(inst_38880);var state_38941__$1 = (function (){var statearr_38965 = state_38941;(statearr_38965[(10)] = inst_38894__$1);
return statearr_38965;
})();if(inst_38894__$1)
{var statearr_38966_39007 = state_38941__$1;(statearr_38966_39007[(1)] = (13));
} else
{var statearr_38967_39008 = state_38941__$1;(statearr_38967_39008[(1)] = (14));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (9)))
{var inst_38916 = (state_38941[(2)]);var state_38941__$1 = state_38941;var statearr_38968_39009 = state_38941__$1;(statearr_38968_39009[(2)] = inst_38916);
(statearr_38968_39009[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (5)))
{var inst_38877 = cljs.core.deref(mults);var inst_38878 = cljs.core.vals(inst_38877);var inst_38879 = cljs.core.seq(inst_38878);var inst_38880 = inst_38879;var inst_38881 = null;var inst_38882 = (0);var inst_38883 = (0);var state_38941__$1 = (function (){var statearr_38969 = state_38941;(statearr_38969[(12)] = inst_38883);
(statearr_38969[(13)] = inst_38881);
(statearr_38969[(14)] = inst_38880);
(statearr_38969[(15)] = inst_38882);
return statearr_38969;
})();var statearr_38970_39010 = state_38941__$1;(statearr_38970_39010[(2)] = null);
(statearr_38970_39010[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (14)))
{var state_38941__$1 = state_38941;var statearr_38974_39011 = state_38941__$1;(statearr_38974_39011[(2)] = null);
(statearr_38974_39011[(1)] = (15));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (16)))
{var inst_38894 = (state_38941[(10)]);var inst_38898 = cljs.core.chunk_first(inst_38894);var inst_38899 = cljs.core.chunk_rest(inst_38894);var inst_38900 = cljs.core.count(inst_38898);var inst_38880 = inst_38899;var inst_38881 = inst_38898;var inst_38882 = inst_38900;var inst_38883 = (0);var state_38941__$1 = (function (){var statearr_38975 = state_38941;(statearr_38975[(12)] = inst_38883);
(statearr_38975[(13)] = inst_38881);
(statearr_38975[(14)] = inst_38880);
(statearr_38975[(15)] = inst_38882);
return statearr_38975;
})();var statearr_38976_39012 = state_38941__$1;(statearr_38976_39012[(2)] = null);
(statearr_38976_39012[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (10)))
{var inst_38883 = (state_38941[(12)]);var inst_38881 = (state_38941[(13)]);var inst_38880 = (state_38941[(14)]);var inst_38882 = (state_38941[(15)]);var inst_38888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38881,inst_38883);var inst_38889 = cljs.core.async.muxch_STAR_(inst_38888);var inst_38890 = cljs.core.async.close_BANG_(inst_38889);var inst_38891 = (inst_38883 + (1));var tmp38971 = inst_38881;var tmp38972 = inst_38880;var tmp38973 = inst_38882;var inst_38880__$1 = tmp38972;var inst_38881__$1 = tmp38971;var inst_38882__$1 = tmp38973;var inst_38883__$1 = inst_38891;var state_38941__$1 = (function (){var statearr_38977 = state_38941;(statearr_38977[(12)] = inst_38883__$1);
(statearr_38977[(13)] = inst_38881__$1);
(statearr_38977[(14)] = inst_38880__$1);
(statearr_38977[(15)] = inst_38882__$1);
(statearr_38977[(18)] = inst_38890);
return statearr_38977;
})();var statearr_38978_39013 = state_38941__$1;(statearr_38978_39013[(2)] = null);
(statearr_38978_39013[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (18)))
{var inst_38909 = (state_38941[(2)]);var state_38941__$1 = state_38941;var statearr_38979_39014 = state_38941__$1;(statearr_38979_39014[(2)] = inst_38909);
(statearr_38979_39014[(1)] = (15));
return cljs.core.constant$keyword$745;
} else
{if((state_val_38942 === (8)))
{var inst_38883 = (state_38941[(12)]);var inst_38882 = (state_38941[(15)]);var inst_38885 = (inst_38883 < inst_38882);var inst_38886 = inst_38885;var state_38941__$1 = state_38941;if(cljs.core.truth_(inst_38886))
{var statearr_38980_39015 = state_38941__$1;(statearr_38980_39015[(1)] = (10));
} else
{var statearr_38981_39016 = state_38941__$1;(statearr_38981_39016[(1)] = (11));
}
return cljs.core.constant$keyword$745;
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
});})(c__5693__auto___38989,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___38989,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38985[(0)] = state_machine__5679__auto__);
(statearr_38985[(1)] = (1));
return statearr_38985;
});
var state_machine__5679__auto____1 = (function (state_38941){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38941);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38986){if((e38986 instanceof Object))
{var ex__5682__auto__ = e38986;var statearr_38987_39017 = state_38941;(statearr_38987_39017[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38941);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e38986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__39018 = state_38941;
state_38941 = G__39018;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38941){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38989,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_38988 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38989);
return statearr_38988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38989,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5693__auto___39155 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39155,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39155,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39125){var state_val_39126 = (state_39125[(1)]);if((state_val_39126 === (7)))
{var state_39125__$1 = state_39125;var statearr_39127_39156 = state_39125__$1;(statearr_39127_39156[(2)] = null);
(statearr_39127_39156[(1)] = (8));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (1)))
{var state_39125__$1 = state_39125;var statearr_39128_39157 = state_39125__$1;(statearr_39128_39157[(2)] = null);
(statearr_39128_39157[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (4)))
{var inst_39089 = (state_39125[(7)]);var inst_39091 = (inst_39089 < cnt);var state_39125__$1 = state_39125;if(cljs.core.truth_(inst_39091))
{var statearr_39129_39158 = state_39125__$1;(statearr_39129_39158[(1)] = (6));
} else
{var statearr_39130_39159 = state_39125__$1;(statearr_39130_39159[(1)] = (7));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (15)))
{var inst_39121 = (state_39125[(2)]);var state_39125__$1 = state_39125;var statearr_39131_39160 = state_39125__$1;(statearr_39131_39160[(2)] = inst_39121);
(statearr_39131_39160[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (13)))
{var inst_39114 = cljs.core.async.close_BANG_(out);var state_39125__$1 = state_39125;var statearr_39132_39161 = state_39125__$1;(statearr_39132_39161[(2)] = inst_39114);
(statearr_39132_39161[(1)] = (15));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (6)))
{var state_39125__$1 = state_39125;var statearr_39133_39162 = state_39125__$1;(statearr_39133_39162[(2)] = null);
(statearr_39133_39162[(1)] = (11));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (3)))
{var inst_39123 = (state_39125[(2)]);var state_39125__$1 = state_39125;return cljs.core.async.impl.ioc_helpers.return_chan(state_39125__$1,inst_39123);
} else
{if((state_val_39126 === (12)))
{var inst_39111 = (state_39125[(8)]);var inst_39111__$1 = (state_39125[(2)]);var inst_39112 = cljs.core.some(cljs.core.nil_QMARK_,inst_39111__$1);var state_39125__$1 = (function (){var statearr_39134 = state_39125;(statearr_39134[(8)] = inst_39111__$1);
return statearr_39134;
})();if(cljs.core.truth_(inst_39112))
{var statearr_39135_39163 = state_39125__$1;(statearr_39135_39163[(1)] = (13));
} else
{var statearr_39136_39164 = state_39125__$1;(statearr_39136_39164[(1)] = (14));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (2)))
{var inst_39088 = cljs.core.reset_BANG_(dctr,cnt);var inst_39089 = (0);var state_39125__$1 = (function (){var statearr_39137 = state_39125;(statearr_39137[(7)] = inst_39089);
(statearr_39137[(9)] = inst_39088);
return statearr_39137;
})();var statearr_39138_39165 = state_39125__$1;(statearr_39138_39165[(2)] = null);
(statearr_39138_39165[(1)] = (4));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (11)))
{var inst_39089 = (state_39125[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39125,(10),Object,null,(9));var inst_39098 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39089) : chs__$1.call(null,inst_39089));var inst_39099 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39089) : done.call(null,inst_39089));var inst_39100 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39098,inst_39099);var state_39125__$1 = state_39125;var statearr_39139_39166 = state_39125__$1;(statearr_39139_39166[(2)] = inst_39100);
cljs.core.async.impl.ioc_helpers.process_exception(state_39125__$1);
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (9)))
{var inst_39089 = (state_39125[(7)]);var inst_39102 = (state_39125[(2)]);var inst_39103 = (inst_39089 + (1));var inst_39089__$1 = inst_39103;var state_39125__$1 = (function (){var statearr_39140 = state_39125;(statearr_39140[(10)] = inst_39102);
(statearr_39140[(7)] = inst_39089__$1);
return statearr_39140;
})();var statearr_39141_39167 = state_39125__$1;(statearr_39141_39167[(2)] = null);
(statearr_39141_39167[(1)] = (4));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (5)))
{var inst_39109 = (state_39125[(2)]);var state_39125__$1 = (function (){var statearr_39142 = state_39125;(statearr_39142[(11)] = inst_39109);
return statearr_39142;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39125__$1,(12),dchan);
} else
{if((state_val_39126 === (14)))
{var inst_39111 = (state_39125[(8)]);var inst_39116 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39111);var state_39125__$1 = state_39125;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39125__$1,(16),out,inst_39116);
} else
{if((state_val_39126 === (16)))
{var inst_39118 = (state_39125[(2)]);var state_39125__$1 = (function (){var statearr_39143 = state_39125;(statearr_39143[(12)] = inst_39118);
return statearr_39143;
})();var statearr_39144_39168 = state_39125__$1;(statearr_39144_39168[(2)] = null);
(statearr_39144_39168[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (10)))
{var inst_39093 = (state_39125[(2)]);var inst_39094 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_39125__$1 = (function (){var statearr_39145 = state_39125;(statearr_39145[(13)] = inst_39093);
return statearr_39145;
})();var statearr_39146_39169 = state_39125__$1;(statearr_39146_39169[(2)] = inst_39094);
cljs.core.async.impl.ioc_helpers.process_exception(state_39125__$1);
return cljs.core.constant$keyword$745;
} else
{if((state_val_39126 === (8)))
{var inst_39107 = (state_39125[(2)]);var state_39125__$1 = state_39125;var statearr_39147_39170 = state_39125__$1;(statearr_39147_39170[(2)] = inst_39107);
(statearr_39147_39170[(1)] = (5));
return cljs.core.constant$keyword$745;
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
});})(c__5693__auto___39155,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___39155,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39151[(0)] = state_machine__5679__auto__);
(statearr_39151[(1)] = (1));
return statearr_39151;
});
var state_machine__5679__auto____1 = (function (state_39125){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39125);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39152){if((e39152 instanceof Object))
{var ex__5682__auto__ = e39152;var statearr_39153_39171 = state_39125;(statearr_39153_39171[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39125);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e39152;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__39172 = state_39125;
state_39125 = G__39172;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39125){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39155,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_39154 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39155);
return statearr_39154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39155,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39280,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39280,out){
return (function (state_39256){var state_val_39257 = (state_39256[(1)]);if((state_val_39257 === (7)))
{var inst_39236 = (state_39256[(7)]);var inst_39235 = (state_39256[(8)]);var inst_39235__$1 = (state_39256[(2)]);var inst_39236__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39235__$1,(0),null);var inst_39237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39235__$1,(1),null);var inst_39238 = (inst_39236__$1 == null);var state_39256__$1 = (function (){var statearr_39258 = state_39256;(statearr_39258[(9)] = inst_39237);
(statearr_39258[(7)] = inst_39236__$1);
(statearr_39258[(8)] = inst_39235__$1);
return statearr_39258;
})();if(cljs.core.truth_(inst_39238))
{var statearr_39259_39281 = state_39256__$1;(statearr_39259_39281[(1)] = (8));
} else
{var statearr_39260_39282 = state_39256__$1;(statearr_39260_39282[(1)] = (9));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39257 === (1)))
{var inst_39227 = cljs.core.vec(chs);var inst_39228 = inst_39227;var state_39256__$1 = (function (){var statearr_39261 = state_39256;(statearr_39261[(10)] = inst_39228);
return statearr_39261;
})();var statearr_39262_39283 = state_39256__$1;(statearr_39262_39283[(2)] = null);
(statearr_39262_39283[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39257 === (4)))
{var inst_39228 = (state_39256[(10)]);var state_39256__$1 = state_39256;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_39256__$1,(7),inst_39228);
} else
{if((state_val_39257 === (6)))
{var inst_39252 = (state_39256[(2)]);var state_39256__$1 = state_39256;var statearr_39263_39284 = state_39256__$1;(statearr_39263_39284[(2)] = inst_39252);
(statearr_39263_39284[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39257 === (3)))
{var inst_39254 = (state_39256[(2)]);var state_39256__$1 = state_39256;return cljs.core.async.impl.ioc_helpers.return_chan(state_39256__$1,inst_39254);
} else
{if((state_val_39257 === (2)))
{var inst_39228 = (state_39256[(10)]);var inst_39230 = cljs.core.count(inst_39228);var inst_39231 = (inst_39230 > (0));var state_39256__$1 = state_39256;if(cljs.core.truth_(inst_39231))
{var statearr_39265_39285 = state_39256__$1;(statearr_39265_39285[(1)] = (4));
} else
{var statearr_39266_39286 = state_39256__$1;(statearr_39266_39286[(1)] = (5));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39257 === (11)))
{var inst_39228 = (state_39256[(10)]);var inst_39245 = (state_39256[(2)]);var tmp39264 = inst_39228;var inst_39228__$1 = tmp39264;var state_39256__$1 = (function (){var statearr_39267 = state_39256;(statearr_39267[(11)] = inst_39245);
(statearr_39267[(10)] = inst_39228__$1);
return statearr_39267;
})();var statearr_39268_39287 = state_39256__$1;(statearr_39268_39287[(2)] = null);
(statearr_39268_39287[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39257 === (9)))
{var inst_39236 = (state_39256[(7)]);var state_39256__$1 = state_39256;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39256__$1,(11),out,inst_39236);
} else
{if((state_val_39257 === (5)))
{var inst_39250 = cljs.core.async.close_BANG_(out);var state_39256__$1 = state_39256;var statearr_39269_39288 = state_39256__$1;(statearr_39269_39288[(2)] = inst_39250);
(statearr_39269_39288[(1)] = (6));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39257 === (10)))
{var inst_39248 = (state_39256[(2)]);var state_39256__$1 = state_39256;var statearr_39270_39289 = state_39256__$1;(statearr_39270_39289[(2)] = inst_39248);
(statearr_39270_39289[(1)] = (6));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39257 === (8)))
{var inst_39237 = (state_39256[(9)]);var inst_39236 = (state_39256[(7)]);var inst_39228 = (state_39256[(10)]);var inst_39235 = (state_39256[(8)]);var inst_39240 = (function (){var c = inst_39237;var v = inst_39236;var vec__39233 = inst_39235;var cs = inst_39228;return ((function (c,v,vec__39233,cs,inst_39237,inst_39236,inst_39228,inst_39235,state_val_39257,c__5693__auto___39280,out){
return (function (p1__39173_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39173_SHARP_);
});
;})(c,v,vec__39233,cs,inst_39237,inst_39236,inst_39228,inst_39235,state_val_39257,c__5693__auto___39280,out))
})();var inst_39241 = cljs.core.filterv(inst_39240,inst_39228);var inst_39228__$1 = inst_39241;var state_39256__$1 = (function (){var statearr_39271 = state_39256;(statearr_39271[(10)] = inst_39228__$1);
return statearr_39271;
})();var statearr_39272_39290 = state_39256__$1;(statearr_39272_39290[(2)] = null);
(statearr_39272_39290[(1)] = (2));
return cljs.core.constant$keyword$745;
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
});})(c__5693__auto___39280,out))
;return ((function (switch__5678__auto__,c__5693__auto___39280,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39276 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39276[(0)] = state_machine__5679__auto__);
(statearr_39276[(1)] = (1));
return statearr_39276;
});
var state_machine__5679__auto____1 = (function (state_39256){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39256);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39277){if((e39277 instanceof Object))
{var ex__5682__auto__ = e39277;var statearr_39278_39291 = state_39256;(statearr_39278_39291[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39256);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e39277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__39292 = state_39256;
state_39256 = G__39292;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39256){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39280,out))
})();var state__5695__auto__ = (function (){var statearr_39279 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39280);
return statearr_39279;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39280,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39385,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39385,out){
return (function (state_39362){var state_val_39363 = (state_39362[(1)]);if((state_val_39363 === (7)))
{var inst_39344 = (state_39362[(7)]);var inst_39344__$1 = (state_39362[(2)]);var inst_39345 = (inst_39344__$1 == null);var inst_39346 = cljs.core.not(inst_39345);var state_39362__$1 = (function (){var statearr_39364 = state_39362;(statearr_39364[(7)] = inst_39344__$1);
return statearr_39364;
})();if(inst_39346)
{var statearr_39365_39386 = state_39362__$1;(statearr_39365_39386[(1)] = (8));
} else
{var statearr_39366_39387 = state_39362__$1;(statearr_39366_39387[(1)] = (9));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39363 === (1)))
{var inst_39339 = (0);var state_39362__$1 = (function (){var statearr_39367 = state_39362;(statearr_39367[(8)] = inst_39339);
return statearr_39367;
})();var statearr_39368_39388 = state_39362__$1;(statearr_39368_39388[(2)] = null);
(statearr_39368_39388[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39363 === (4)))
{var state_39362__$1 = state_39362;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39362__$1,(7),ch);
} else
{if((state_val_39363 === (6)))
{var inst_39357 = (state_39362[(2)]);var state_39362__$1 = state_39362;var statearr_39369_39389 = state_39362__$1;(statearr_39369_39389[(2)] = inst_39357);
(statearr_39369_39389[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39363 === (3)))
{var inst_39359 = (state_39362[(2)]);var inst_39360 = cljs.core.async.close_BANG_(out);var state_39362__$1 = (function (){var statearr_39370 = state_39362;(statearr_39370[(9)] = inst_39359);
return statearr_39370;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_39362__$1,inst_39360);
} else
{if((state_val_39363 === (2)))
{var inst_39339 = (state_39362[(8)]);var inst_39341 = (inst_39339 < n);var state_39362__$1 = state_39362;if(cljs.core.truth_(inst_39341))
{var statearr_39371_39390 = state_39362__$1;(statearr_39371_39390[(1)] = (4));
} else
{var statearr_39372_39391 = state_39362__$1;(statearr_39372_39391[(1)] = (5));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39363 === (11)))
{var inst_39339 = (state_39362[(8)]);var inst_39349 = (state_39362[(2)]);var inst_39350 = (inst_39339 + (1));var inst_39339__$1 = inst_39350;var state_39362__$1 = (function (){var statearr_39373 = state_39362;(statearr_39373[(8)] = inst_39339__$1);
(statearr_39373[(10)] = inst_39349);
return statearr_39373;
})();var statearr_39374_39392 = state_39362__$1;(statearr_39374_39392[(2)] = null);
(statearr_39374_39392[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39363 === (9)))
{var state_39362__$1 = state_39362;var statearr_39375_39393 = state_39362__$1;(statearr_39375_39393[(2)] = null);
(statearr_39375_39393[(1)] = (10));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39363 === (5)))
{var state_39362__$1 = state_39362;var statearr_39376_39394 = state_39362__$1;(statearr_39376_39394[(2)] = null);
(statearr_39376_39394[(1)] = (6));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39363 === (10)))
{var inst_39354 = (state_39362[(2)]);var state_39362__$1 = state_39362;var statearr_39377_39395 = state_39362__$1;(statearr_39377_39395[(2)] = inst_39354);
(statearr_39377_39395[(1)] = (6));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39363 === (8)))
{var inst_39344 = (state_39362[(7)]);var state_39362__$1 = state_39362;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39362__$1,(11),out,inst_39344);
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
});})(c__5693__auto___39385,out))
;return ((function (switch__5678__auto__,c__5693__auto___39385,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39381 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_39381[(0)] = state_machine__5679__auto__);
(statearr_39381[(1)] = (1));
return statearr_39381;
});
var state_machine__5679__auto____1 = (function (state_39362){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39362);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39382){if((e39382 instanceof Object))
{var ex__5682__auto__ = e39382;var statearr_39383_39396 = state_39362;(statearr_39383_39396[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39362);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e39382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__39397 = state_39362;
state_39362 = G__39397;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39362){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39385,out))
})();var state__5695__auto__ = (function (){var statearr_39384 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39385);
return statearr_39384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39385,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39494,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39494,out){
return (function (state_39469){var state_val_39470 = (state_39469[(1)]);if((state_val_39470 === (7)))
{var inst_39464 = (state_39469[(2)]);var state_39469__$1 = state_39469;var statearr_39471_39495 = state_39469__$1;(statearr_39471_39495[(2)] = inst_39464);
(statearr_39471_39495[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39470 === (1)))
{var inst_39446 = null;var state_39469__$1 = (function (){var statearr_39472 = state_39469;(statearr_39472[(7)] = inst_39446);
return statearr_39472;
})();var statearr_39473_39496 = state_39469__$1;(statearr_39473_39496[(2)] = null);
(statearr_39473_39496[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39470 === (4)))
{var inst_39449 = (state_39469[(8)]);var inst_39449__$1 = (state_39469[(2)]);var inst_39450 = (inst_39449__$1 == null);var inst_39451 = cljs.core.not(inst_39450);var state_39469__$1 = (function (){var statearr_39474 = state_39469;(statearr_39474[(8)] = inst_39449__$1);
return statearr_39474;
})();if(inst_39451)
{var statearr_39475_39497 = state_39469__$1;(statearr_39475_39497[(1)] = (5));
} else
{var statearr_39476_39498 = state_39469__$1;(statearr_39476_39498[(1)] = (6));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39470 === (6)))
{var state_39469__$1 = state_39469;var statearr_39477_39499 = state_39469__$1;(statearr_39477_39499[(2)] = null);
(statearr_39477_39499[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39470 === (3)))
{var inst_39466 = (state_39469[(2)]);var inst_39467 = cljs.core.async.close_BANG_(out);var state_39469__$1 = (function (){var statearr_39478 = state_39469;(statearr_39478[(9)] = inst_39466);
return statearr_39478;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_39469__$1,inst_39467);
} else
{if((state_val_39470 === (2)))
{var state_39469__$1 = state_39469;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39469__$1,(4),ch);
} else
{if((state_val_39470 === (11)))
{var inst_39449 = (state_39469[(8)]);var inst_39458 = (state_39469[(2)]);var inst_39446 = inst_39449;var state_39469__$1 = (function (){var statearr_39479 = state_39469;(statearr_39479[(10)] = inst_39458);
(statearr_39479[(7)] = inst_39446);
return statearr_39479;
})();var statearr_39480_39500 = state_39469__$1;(statearr_39480_39500[(2)] = null);
(statearr_39480_39500[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39470 === (9)))
{var inst_39449 = (state_39469[(8)]);var state_39469__$1 = state_39469;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39469__$1,(11),out,inst_39449);
} else
{if((state_val_39470 === (5)))
{var inst_39449 = (state_39469[(8)]);var inst_39446 = (state_39469[(7)]);var inst_39453 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39449,inst_39446);var state_39469__$1 = state_39469;if(inst_39453)
{var statearr_39482_39501 = state_39469__$1;(statearr_39482_39501[(1)] = (8));
} else
{var statearr_39483_39502 = state_39469__$1;(statearr_39483_39502[(1)] = (9));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39470 === (10)))
{var inst_39461 = (state_39469[(2)]);var state_39469__$1 = state_39469;var statearr_39484_39503 = state_39469__$1;(statearr_39484_39503[(2)] = inst_39461);
(statearr_39484_39503[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39470 === (8)))
{var inst_39446 = (state_39469[(7)]);var tmp39481 = inst_39446;var inst_39446__$1 = tmp39481;var state_39469__$1 = (function (){var statearr_39485 = state_39469;(statearr_39485[(7)] = inst_39446__$1);
return statearr_39485;
})();var statearr_39486_39504 = state_39469__$1;(statearr_39486_39504[(2)] = null);
(statearr_39486_39504[(1)] = (2));
return cljs.core.constant$keyword$745;
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
});})(c__5693__auto___39494,out))
;return ((function (switch__5678__auto__,c__5693__auto___39494,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39490 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_39490[(0)] = state_machine__5679__auto__);
(statearr_39490[(1)] = (1));
return statearr_39490;
});
var state_machine__5679__auto____1 = (function (state_39469){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39469);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39491){if((e39491 instanceof Object))
{var ex__5682__auto__ = e39491;var statearr_39492_39505 = state_39469;(statearr_39492_39505[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39469);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e39491;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__39506 = state_39469;
state_39469 = G__39506;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39469){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39494,out))
})();var state__5695__auto__ = (function (){var statearr_39493 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39494);
return statearr_39493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39494,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39641,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39641,out){
return (function (state_39611){var state_val_39612 = (state_39611[(1)]);if((state_val_39612 === (7)))
{var inst_39607 = (state_39611[(2)]);var state_39611__$1 = state_39611;var statearr_39613_39642 = state_39611__$1;(statearr_39613_39642[(2)] = inst_39607);
(statearr_39613_39642[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39612 === (1)))
{var inst_39574 = (new Array(n));var inst_39575 = inst_39574;var inst_39576 = (0);var state_39611__$1 = (function (){var statearr_39614 = state_39611;(statearr_39614[(7)] = inst_39576);
(statearr_39614[(8)] = inst_39575);
return statearr_39614;
})();var statearr_39615_39643 = state_39611__$1;(statearr_39615_39643[(2)] = null);
(statearr_39615_39643[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39612 === (4)))
{var inst_39579 = (state_39611[(9)]);var inst_39579__$1 = (state_39611[(2)]);var inst_39580 = (inst_39579__$1 == null);var inst_39581 = cljs.core.not(inst_39580);var state_39611__$1 = (function (){var statearr_39616 = state_39611;(statearr_39616[(9)] = inst_39579__$1);
return statearr_39616;
})();if(inst_39581)
{var statearr_39617_39644 = state_39611__$1;(statearr_39617_39644[(1)] = (5));
} else
{var statearr_39618_39645 = state_39611__$1;(statearr_39618_39645[(1)] = (6));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39612 === (15)))
{var inst_39601 = (state_39611[(2)]);var state_39611__$1 = state_39611;var statearr_39619_39646 = state_39611__$1;(statearr_39619_39646[(2)] = inst_39601);
(statearr_39619_39646[(1)] = (14));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39612 === (13)))
{var state_39611__$1 = state_39611;var statearr_39620_39647 = state_39611__$1;(statearr_39620_39647[(2)] = null);
(statearr_39620_39647[(1)] = (14));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39612 === (6)))
{var inst_39576 = (state_39611[(7)]);var inst_39597 = (inst_39576 > (0));var state_39611__$1 = state_39611;if(cljs.core.truth_(inst_39597))
{var statearr_39621_39648 = state_39611__$1;(statearr_39621_39648[(1)] = (12));
} else
{var statearr_39622_39649 = state_39611__$1;(statearr_39622_39649[(1)] = (13));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39612 === (3)))
{var inst_39609 = (state_39611[(2)]);var state_39611__$1 = state_39611;return cljs.core.async.impl.ioc_helpers.return_chan(state_39611__$1,inst_39609);
} else
{if((state_val_39612 === (12)))
{var inst_39575 = (state_39611[(8)]);var inst_39599 = cljs.core.vec(inst_39575);var state_39611__$1 = state_39611;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39611__$1,(15),out,inst_39599);
} else
{if((state_val_39612 === (2)))
{var state_39611__$1 = state_39611;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39611__$1,(4),ch);
} else
{if((state_val_39612 === (11)))
{var inst_39591 = (state_39611[(2)]);var inst_39592 = (new Array(n));var inst_39575 = inst_39592;var inst_39576 = (0);var state_39611__$1 = (function (){var statearr_39623 = state_39611;(statearr_39623[(7)] = inst_39576);
(statearr_39623[(8)] = inst_39575);
(statearr_39623[(10)] = inst_39591);
return statearr_39623;
})();var statearr_39624_39650 = state_39611__$1;(statearr_39624_39650[(2)] = null);
(statearr_39624_39650[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39612 === (9)))
{var inst_39575 = (state_39611[(8)]);var inst_39589 = cljs.core.vec(inst_39575);var state_39611__$1 = state_39611;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39611__$1,(11),out,inst_39589);
} else
{if((state_val_39612 === (5)))
{var inst_39576 = (state_39611[(7)]);var inst_39584 = (state_39611[(11)]);var inst_39579 = (state_39611[(9)]);var inst_39575 = (state_39611[(8)]);var inst_39583 = (inst_39575[inst_39576] = inst_39579);var inst_39584__$1 = (inst_39576 + (1));var inst_39585 = (inst_39584__$1 < n);var state_39611__$1 = (function (){var statearr_39625 = state_39611;(statearr_39625[(11)] = inst_39584__$1);
(statearr_39625[(12)] = inst_39583);
return statearr_39625;
})();if(cljs.core.truth_(inst_39585))
{var statearr_39626_39651 = state_39611__$1;(statearr_39626_39651[(1)] = (8));
} else
{var statearr_39627_39652 = state_39611__$1;(statearr_39627_39652[(1)] = (9));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39612 === (14)))
{var inst_39604 = (state_39611[(2)]);var inst_39605 = cljs.core.async.close_BANG_(out);var state_39611__$1 = (function (){var statearr_39629 = state_39611;(statearr_39629[(13)] = inst_39604);
return statearr_39629;
})();var statearr_39630_39653 = state_39611__$1;(statearr_39630_39653[(2)] = inst_39605);
(statearr_39630_39653[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39612 === (10)))
{var inst_39595 = (state_39611[(2)]);var state_39611__$1 = state_39611;var statearr_39631_39654 = state_39611__$1;(statearr_39631_39654[(2)] = inst_39595);
(statearr_39631_39654[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39612 === (8)))
{var inst_39584 = (state_39611[(11)]);var inst_39575 = (state_39611[(8)]);var tmp39628 = inst_39575;var inst_39575__$1 = tmp39628;var inst_39576 = inst_39584;var state_39611__$1 = (function (){var statearr_39632 = state_39611;(statearr_39632[(7)] = inst_39576);
(statearr_39632[(8)] = inst_39575__$1);
return statearr_39632;
})();var statearr_39633_39655 = state_39611__$1;(statearr_39633_39655[(2)] = null);
(statearr_39633_39655[(1)] = (2));
return cljs.core.constant$keyword$745;
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
});})(c__5693__auto___39641,out))
;return ((function (switch__5678__auto__,c__5693__auto___39641,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39637[(0)] = state_machine__5679__auto__);
(statearr_39637[(1)] = (1));
return statearr_39637;
});
var state_machine__5679__auto____1 = (function (state_39611){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39611);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39638){if((e39638 instanceof Object))
{var ex__5682__auto__ = e39638;var statearr_39639_39656 = state_39611;(statearr_39639_39656[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39611);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e39638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__39657 = state_39611;
state_39611 = G__39657;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39611){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39641,out))
})();var state__5695__auto__ = (function (){var statearr_39640 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39641);
return statearr_39640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39641,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39800,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39800,out){
return (function (state_39770){var state_val_39771 = (state_39770[(1)]);if((state_val_39771 === (7)))
{var inst_39766 = (state_39770[(2)]);var state_39770__$1 = state_39770;var statearr_39772_39801 = state_39770__$1;(statearr_39772_39801[(2)] = inst_39766);
(statearr_39772_39801[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39771 === (1)))
{var inst_39729 = [];var inst_39730 = inst_39729;var inst_39731 = cljs.core.constant$keyword$758;var state_39770__$1 = (function (){var statearr_39773 = state_39770;(statearr_39773[(7)] = inst_39730);
(statearr_39773[(8)] = inst_39731);
return statearr_39773;
})();var statearr_39774_39802 = state_39770__$1;(statearr_39774_39802[(2)] = null);
(statearr_39774_39802[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39771 === (4)))
{var inst_39734 = (state_39770[(9)]);var inst_39734__$1 = (state_39770[(2)]);var inst_39735 = (inst_39734__$1 == null);var inst_39736 = cljs.core.not(inst_39735);var state_39770__$1 = (function (){var statearr_39775 = state_39770;(statearr_39775[(9)] = inst_39734__$1);
return statearr_39775;
})();if(inst_39736)
{var statearr_39776_39803 = state_39770__$1;(statearr_39776_39803[(1)] = (5));
} else
{var statearr_39777_39804 = state_39770__$1;(statearr_39777_39804[(1)] = (6));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39771 === (15)))
{var inst_39760 = (state_39770[(2)]);var state_39770__$1 = state_39770;var statearr_39778_39805 = state_39770__$1;(statearr_39778_39805[(2)] = inst_39760);
(statearr_39778_39805[(1)] = (14));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39771 === (13)))
{var state_39770__$1 = state_39770;var statearr_39779_39806 = state_39770__$1;(statearr_39779_39806[(2)] = null);
(statearr_39779_39806[(1)] = (14));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39771 === (6)))
{var inst_39730 = (state_39770[(7)]);var inst_39755 = inst_39730.length;var inst_39756 = (inst_39755 > (0));var state_39770__$1 = state_39770;if(cljs.core.truth_(inst_39756))
{var statearr_39780_39807 = state_39770__$1;(statearr_39780_39807[(1)] = (12));
} else
{var statearr_39781_39808 = state_39770__$1;(statearr_39781_39808[(1)] = (13));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39771 === (3)))
{var inst_39768 = (state_39770[(2)]);var state_39770__$1 = state_39770;return cljs.core.async.impl.ioc_helpers.return_chan(state_39770__$1,inst_39768);
} else
{if((state_val_39771 === (12)))
{var inst_39730 = (state_39770[(7)]);var inst_39758 = cljs.core.vec(inst_39730);var state_39770__$1 = state_39770;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39770__$1,(15),out,inst_39758);
} else
{if((state_val_39771 === (2)))
{var state_39770__$1 = state_39770;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39770__$1,(4),ch);
} else
{if((state_val_39771 === (11)))
{var inst_39738 = (state_39770[(10)]);var inst_39734 = (state_39770[(9)]);var inst_39748 = (state_39770[(2)]);var inst_39749 = [];var inst_39750 = inst_39749.push(inst_39734);var inst_39730 = inst_39749;var inst_39731 = inst_39738;var state_39770__$1 = (function (){var statearr_39782 = state_39770;(statearr_39782[(7)] = inst_39730);
(statearr_39782[(8)] = inst_39731);
(statearr_39782[(11)] = inst_39748);
(statearr_39782[(12)] = inst_39750);
return statearr_39782;
})();var statearr_39783_39809 = state_39770__$1;(statearr_39783_39809[(2)] = null);
(statearr_39783_39809[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39771 === (9)))
{var inst_39730 = (state_39770[(7)]);var inst_39746 = cljs.core.vec(inst_39730);var state_39770__$1 = state_39770;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39770__$1,(11),out,inst_39746);
} else
{if((state_val_39771 === (5)))
{var inst_39738 = (state_39770[(10)]);var inst_39731 = (state_39770[(8)]);var inst_39734 = (state_39770[(9)]);var inst_39738__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39734) : f.call(null,inst_39734));var inst_39739 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39738__$1,inst_39731);var inst_39740 = cljs.core.keyword_identical_QMARK_(inst_39731,cljs.core.constant$keyword$758);var inst_39741 = (inst_39739) || (inst_39740);var state_39770__$1 = (function (){var statearr_39784 = state_39770;(statearr_39784[(10)] = inst_39738__$1);
return statearr_39784;
})();if(cljs.core.truth_(inst_39741))
{var statearr_39785_39810 = state_39770__$1;(statearr_39785_39810[(1)] = (8));
} else
{var statearr_39786_39811 = state_39770__$1;(statearr_39786_39811[(1)] = (9));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_39771 === (14)))
{var inst_39763 = (state_39770[(2)]);var inst_39764 = cljs.core.async.close_BANG_(out);var state_39770__$1 = (function (){var statearr_39788 = state_39770;(statearr_39788[(13)] = inst_39763);
return statearr_39788;
})();var statearr_39789_39812 = state_39770__$1;(statearr_39789_39812[(2)] = inst_39764);
(statearr_39789_39812[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39771 === (10)))
{var inst_39753 = (state_39770[(2)]);var state_39770__$1 = state_39770;var statearr_39790_39813 = state_39770__$1;(statearr_39790_39813[(2)] = inst_39753);
(statearr_39790_39813[(1)] = (7));
return cljs.core.constant$keyword$745;
} else
{if((state_val_39771 === (8)))
{var inst_39730 = (state_39770[(7)]);var inst_39738 = (state_39770[(10)]);var inst_39734 = (state_39770[(9)]);var inst_39743 = inst_39730.push(inst_39734);var tmp39787 = inst_39730;var inst_39730__$1 = tmp39787;var inst_39731 = inst_39738;var state_39770__$1 = (function (){var statearr_39791 = state_39770;(statearr_39791[(14)] = inst_39743);
(statearr_39791[(7)] = inst_39730__$1);
(statearr_39791[(8)] = inst_39731);
return statearr_39791;
})();var statearr_39792_39814 = state_39770__$1;(statearr_39792_39814[(2)] = null);
(statearr_39792_39814[(1)] = (2));
return cljs.core.constant$keyword$745;
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
});})(c__5693__auto___39800,out))
;return ((function (switch__5678__auto__,c__5693__auto___39800,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39796[(0)] = state_machine__5679__auto__);
(statearr_39796[(1)] = (1));
return statearr_39796;
});
var state_machine__5679__auto____1 = (function (state_39770){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39770);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39797){if((e39797 instanceof Object))
{var ex__5682__auto__ = e39797;var statearr_39798_39815 = state_39770;(statearr_39798_39815[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39770);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e39797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__39816 = state_39770;
state_39770 = G__39816;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39770){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39800,out))
})();var state__5695__auto__ = (function (){var statearr_39799 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39800);
return statearr_39799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39800,out))
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
