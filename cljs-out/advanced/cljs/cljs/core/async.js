// Compiled by ClojureScript 0.0-2268
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t39690 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39690 = (function (f,fn_handler,meta39691){
this.f = f;
this.fn_handler = fn_handler;
this.meta39691 = meta39691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39690.cljs$lang$type = true;
cljs.core.async.t39690.cljs$lang$ctorStr = "cljs.core.async/t39690";
cljs.core.async.t39690.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39690");
});
cljs.core.async.t39690.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t39690.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t39690.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t39690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39692){var self__ = this;
var _39692__$1 = this;return self__.meta39691;
});
cljs.core.async.t39690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39692,meta39691__$1){var self__ = this;
var _39692__$1 = this;return (new cljs.core.async.t39690(self__.f,self__.fn_handler,meta39691__$1));
});
cljs.core.async.__GT_t39690 = (function __GT_t39690(f__$1,fn_handler__$1,meta39691){return (new cljs.core.async.t39690(f__$1,fn_handler__$1,meta39691));
});
}
return (new cljs.core.async.t39690(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__39694 = buff;if(G__39694)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__39694.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__39694.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__39694);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__39694);
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
{var val_39695 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39695) : fn1.call(null,val_39695));
} else
{cljs.core.async.impl.dispatch.run(((function (val_39695,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39695) : fn1.call(null,val_39695));
});})(val_39695,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___39696 = n;var x_39697 = (0);while(true){
if((x_39697 < n__4399__auto___39696))
{(a[x_39697] = (0));
{
var G__39698 = (x_39697 + (1));
x_39697 = G__39698;
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
var G__39699 = (i + (1));
i = G__39699;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t39703 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39703 = (function (flag,alt_flag,meta39704){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta39704 = meta39704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39703.cljs$lang$type = true;
cljs.core.async.t39703.cljs$lang$ctorStr = "cljs.core.async/t39703";
cljs.core.async.t39703.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39703");
});})(flag))
;
cljs.core.async.t39703.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t39703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t39703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t39703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39705){var self__ = this;
var _39705__$1 = this;return self__.meta39704;
});})(flag))
;
cljs.core.async.t39703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39705,meta39704__$1){var self__ = this;
var _39705__$1 = this;return (new cljs.core.async.t39703(self__.flag,self__.alt_flag,meta39704__$1));
});})(flag))
;
cljs.core.async.__GT_t39703 = ((function (flag){
return (function __GT_t39703(flag__$1,alt_flag__$1,meta39704){return (new cljs.core.async.t39703(flag__$1,alt_flag__$1,meta39704));
});})(flag))
;
}
return (new cljs.core.async.t39703(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t39709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39709 = (function (cb,flag,alt_handler,meta39710){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta39710 = meta39710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39709.cljs$lang$type = true;
cljs.core.async.t39709.cljs$lang$ctorStr = "cljs.core.async/t39709";
cljs.core.async.t39709.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39709");
});
cljs.core.async.t39709.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t39709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t39709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t39709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39711){var self__ = this;
var _39711__$1 = this;return self__.meta39710;
});
cljs.core.async.t39709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39711,meta39710__$1){var self__ = this;
var _39711__$1 = this;return (new cljs.core.async.t39709(self__.cb,self__.flag,self__.alt_handler,meta39710__$1));
});
cljs.core.async.__GT_t39709 = (function __GT_t39709(cb__$1,flag__$1,alt_handler__$1,meta39710){return (new cljs.core.async.t39709(cb__$1,flag__$1,alt_handler__$1,meta39710));
});
}
return (new cljs.core.async.t39709(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$787.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39712_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39712_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39712_SHARP_,port], null)));
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
var G__39713 = (i + (1));
i = G__39713;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$773))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3531__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$773.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$773], null));
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
var alts_BANG___delegate = function (ports,p__39714){var map__39716 = p__39714;var map__39716__$1 = ((cljs.core.seq_QMARK_(map__39716))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39716):map__39716);var opts = map__39716__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__39714 = null;if (arguments.length > 1) {
  p__39714 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__39714);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__39717){
var ports = cljs.core.first(arglist__39717);
var p__39714 = cljs.core.rest(arglist__39717);
return alts_BANG___delegate(ports,p__39714);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t39725 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39725 = (function (ch,f,map_LT_,meta39726){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta39726 = meta39726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39725.cljs$lang$type = true;
cljs.core.async.t39725.cljs$lang$ctorStr = "cljs.core.async/t39725";
cljs.core.async.t39725.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39725");
});
cljs.core.async.t39725.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t39725.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t39725.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t39725.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t39728 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39728 = (function (fn1,_,meta39726,ch,f,map_LT_,meta39729){
this.fn1 = fn1;
this._ = _;
this.meta39726 = meta39726;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta39729 = meta39729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39728.cljs$lang$type = true;
cljs.core.async.t39728.cljs$lang$ctorStr = "cljs.core.async/t39728";
cljs.core.async.t39728.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39728");
});})(___$1))
;
cljs.core.async.t39728.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t39728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t39728.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t39728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__39718_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__39718_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39718_SHARP_) : self__.f.call(null,p1__39718_SHARP_)))) : f1.call(null,(((p1__39718_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39718_SHARP_) : self__.f.call(null,p1__39718_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t39728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39730){var self__ = this;
var _39730__$1 = this;return self__.meta39729;
});})(___$1))
;
cljs.core.async.t39728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39730,meta39729__$1){var self__ = this;
var _39730__$1 = this;return (new cljs.core.async.t39728(self__.fn1,self__._,self__.meta39726,self__.ch,self__.f,self__.map_LT_,meta39729__$1));
});})(___$1))
;
cljs.core.async.__GT_t39728 = ((function (___$1){
return (function __GT_t39728(fn1__$1,___$2,meta39726__$1,ch__$2,f__$2,map_LT___$2,meta39729){return (new cljs.core.async.t39728(fn1__$1,___$2,meta39726__$1,ch__$2,f__$2,map_LT___$2,meta39729));
});})(___$1))
;
}
return (new cljs.core.async.t39728(fn1,___$1,self__.meta39726,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t39725.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t39725.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t39725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39727){var self__ = this;
var _39727__$1 = this;return self__.meta39726;
});
cljs.core.async.t39725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39727,meta39726__$1){var self__ = this;
var _39727__$1 = this;return (new cljs.core.async.t39725(self__.ch,self__.f,self__.map_LT_,meta39726__$1));
});
cljs.core.async.__GT_t39725 = (function __GT_t39725(ch__$1,f__$1,map_LT___$1,meta39726){return (new cljs.core.async.t39725(ch__$1,f__$1,map_LT___$1,meta39726));
});
}
return (new cljs.core.async.t39725(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t39734 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39734 = (function (ch,f,map_GT_,meta39735){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta39735 = meta39735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39734.cljs$lang$type = true;
cljs.core.async.t39734.cljs$lang$ctorStr = "cljs.core.async/t39734";
cljs.core.async.t39734.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39734");
});
cljs.core.async.t39734.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t39734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t39734.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t39734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t39734.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t39734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t39734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39736){var self__ = this;
var _39736__$1 = this;return self__.meta39735;
});
cljs.core.async.t39734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39736,meta39735__$1){var self__ = this;
var _39736__$1 = this;return (new cljs.core.async.t39734(self__.ch,self__.f,self__.map_GT_,meta39735__$1));
});
cljs.core.async.__GT_t39734 = (function __GT_t39734(ch__$1,f__$1,map_GT___$1,meta39735){return (new cljs.core.async.t39734(ch__$1,f__$1,map_GT___$1,meta39735));
});
}
return (new cljs.core.async.t39734(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t39740 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39740 = (function (ch,p,filter_GT_,meta39741){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta39741 = meta39741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39740.cljs$lang$type = true;
cljs.core.async.t39740.cljs$lang$ctorStr = "cljs.core.async/t39740";
cljs.core.async.t39740.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39740");
});
cljs.core.async.t39740.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t39740.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t39740.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t39740.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t39740.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t39740.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t39740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39742){var self__ = this;
var _39742__$1 = this;return self__.meta39741;
});
cljs.core.async.t39740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39742,meta39741__$1){var self__ = this;
var _39742__$1 = this;return (new cljs.core.async.t39740(self__.ch,self__.p,self__.filter_GT_,meta39741__$1));
});
cljs.core.async.__GT_t39740 = (function __GT_t39740(ch__$1,p__$1,filter_GT___$1,meta39741){return (new cljs.core.async.t39740(ch__$1,p__$1,filter_GT___$1,meta39741));
});
}
return (new cljs.core.async.t39740(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39825,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39825,out){
return (function (state_39804){var state_val_39805 = (state_39804[(1)]);if((state_val_39805 === (7)))
{var inst_39800 = (state_39804[(2)]);var state_39804__$1 = state_39804;var statearr_39806_39826 = state_39804__$1;(statearr_39806_39826[(2)] = inst_39800);
(statearr_39806_39826[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39805 === (1)))
{var state_39804__$1 = state_39804;var statearr_39807_39827 = state_39804__$1;(statearr_39807_39827[(2)] = null);
(statearr_39807_39827[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39805 === (4)))
{var inst_39786 = (state_39804[(7)]);var inst_39786__$1 = (state_39804[(2)]);var inst_39787 = (inst_39786__$1 == null);var state_39804__$1 = (function (){var statearr_39808 = state_39804;(statearr_39808[(7)] = inst_39786__$1);
return statearr_39808;
})();if(cljs.core.truth_(inst_39787))
{var statearr_39809_39828 = state_39804__$1;(statearr_39809_39828[(1)] = (5));
} else
{var statearr_39810_39829 = state_39804__$1;(statearr_39810_39829[(1)] = (6));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_39805 === (6)))
{var inst_39786 = (state_39804[(7)]);var inst_39791 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39786) : p.call(null,inst_39786));var state_39804__$1 = state_39804;if(cljs.core.truth_(inst_39791))
{var statearr_39811_39830 = state_39804__$1;(statearr_39811_39830[(1)] = (8));
} else
{var statearr_39812_39831 = state_39804__$1;(statearr_39812_39831[(1)] = (9));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_39805 === (3)))
{var inst_39802 = (state_39804[(2)]);var state_39804__$1 = state_39804;return cljs.core.async.impl.ioc_helpers.return_chan(state_39804__$1,inst_39802);
} else
{if((state_val_39805 === (2)))
{var state_39804__$1 = state_39804;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39804__$1,(4),ch);
} else
{if((state_val_39805 === (11)))
{var inst_39794 = (state_39804[(2)]);var state_39804__$1 = state_39804;var statearr_39813_39832 = state_39804__$1;(statearr_39813_39832[(2)] = inst_39794);
(statearr_39813_39832[(1)] = (10));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39805 === (9)))
{var state_39804__$1 = state_39804;var statearr_39814_39833 = state_39804__$1;(statearr_39814_39833[(2)] = null);
(statearr_39814_39833[(1)] = (10));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39805 === (5)))
{var inst_39789 = cljs.core.async.close_BANG_(out);var state_39804__$1 = state_39804;var statearr_39815_39834 = state_39804__$1;(statearr_39815_39834[(2)] = inst_39789);
(statearr_39815_39834[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39805 === (10)))
{var inst_39797 = (state_39804[(2)]);var state_39804__$1 = (function (){var statearr_39816 = state_39804;(statearr_39816[(8)] = inst_39797);
return statearr_39816;
})();var statearr_39817_39835 = state_39804__$1;(statearr_39817_39835[(2)] = null);
(statearr_39817_39835[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39805 === (8)))
{var inst_39786 = (state_39804[(7)]);var state_39804__$1 = state_39804;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39804__$1,(11),out,inst_39786);
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
});})(c__5693__auto___39825,out))
;return ((function (switch__5678__auto__,c__5693__auto___39825,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39821 = [null,null,null,null,null,null,null,null,null];(statearr_39821[(0)] = state_machine__5679__auto__);
(statearr_39821[(1)] = (1));
return statearr_39821;
});
var state_machine__5679__auto____1 = (function (state_39804){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39804);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39822){if((e39822 instanceof Object))
{var ex__5682__auto__ = e39822;var statearr_39823_39836 = state_39804;(statearr_39823_39836[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39804);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e39822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__39837 = state_39804;
state_39804 = G__39837;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39804){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39825,out))
})();var state__5695__auto__ = (function (){var statearr_39824 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39825);
return statearr_39824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39825,out))
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
return (function (state_39989){var state_val_39990 = (state_39989[(1)]);if((state_val_39990 === (7)))
{var inst_39985 = (state_39989[(2)]);var state_39989__$1 = state_39989;var statearr_39991_40028 = state_39989__$1;(statearr_39991_40028[(2)] = inst_39985);
(statearr_39991_40028[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (20)))
{var inst_39960 = (state_39989[(7)]);var inst_39971 = (state_39989[(2)]);var inst_39972 = cljs.core.next(inst_39960);var inst_39946 = inst_39972;var inst_39947 = null;var inst_39948 = (0);var inst_39949 = (0);var state_39989__$1 = (function (){var statearr_39992 = state_39989;(statearr_39992[(8)] = inst_39946);
(statearr_39992[(9)] = inst_39971);
(statearr_39992[(10)] = inst_39948);
(statearr_39992[(11)] = inst_39949);
(statearr_39992[(12)] = inst_39947);
return statearr_39992;
})();var statearr_39993_40029 = state_39989__$1;(statearr_39993_40029[(2)] = null);
(statearr_39993_40029[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (1)))
{var state_39989__$1 = state_39989;var statearr_39994_40030 = state_39989__$1;(statearr_39994_40030[(2)] = null);
(statearr_39994_40030[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (4)))
{var inst_39935 = (state_39989[(13)]);var inst_39935__$1 = (state_39989[(2)]);var inst_39936 = (inst_39935__$1 == null);var state_39989__$1 = (function (){var statearr_39998 = state_39989;(statearr_39998[(13)] = inst_39935__$1);
return statearr_39998;
})();if(cljs.core.truth_(inst_39936))
{var statearr_39999_40031 = state_39989__$1;(statearr_39999_40031[(1)] = (5));
} else
{var statearr_40000_40032 = state_39989__$1;(statearr_40000_40032[(1)] = (6));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (15)))
{var state_39989__$1 = state_39989;var statearr_40001_40033 = state_39989__$1;(statearr_40001_40033[(2)] = null);
(statearr_40001_40033[(1)] = (16));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (13)))
{var inst_39946 = (state_39989[(8)]);var inst_39948 = (state_39989[(10)]);var inst_39949 = (state_39989[(11)]);var inst_39947 = (state_39989[(12)]);var inst_39956 = (state_39989[(2)]);var inst_39957 = (inst_39949 + (1));var tmp39995 = inst_39946;var tmp39996 = inst_39948;var tmp39997 = inst_39947;var inst_39946__$1 = tmp39995;var inst_39947__$1 = tmp39997;var inst_39948__$1 = tmp39996;var inst_39949__$1 = inst_39957;var state_39989__$1 = (function (){var statearr_40002 = state_39989;(statearr_40002[(8)] = inst_39946__$1);
(statearr_40002[(10)] = inst_39948__$1);
(statearr_40002[(14)] = inst_39956);
(statearr_40002[(11)] = inst_39949__$1);
(statearr_40002[(12)] = inst_39947__$1);
return statearr_40002;
})();var statearr_40003_40034 = state_39989__$1;(statearr_40003_40034[(2)] = null);
(statearr_40003_40034[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (6)))
{var inst_39935 = (state_39989[(13)]);var inst_39940 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39935) : f.call(null,inst_39935));var inst_39945 = cljs.core.seq(inst_39940);var inst_39946 = inst_39945;var inst_39947 = null;var inst_39948 = (0);var inst_39949 = (0);var state_39989__$1 = (function (){var statearr_40004 = state_39989;(statearr_40004[(8)] = inst_39946);
(statearr_40004[(10)] = inst_39948);
(statearr_40004[(11)] = inst_39949);
(statearr_40004[(12)] = inst_39947);
return statearr_40004;
})();var statearr_40005_40035 = state_39989__$1;(statearr_40005_40035[(2)] = null);
(statearr_40005_40035[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (17)))
{var inst_39960 = (state_39989[(7)]);var inst_39964 = cljs.core.chunk_first(inst_39960);var inst_39965 = cljs.core.chunk_rest(inst_39960);var inst_39966 = cljs.core.count(inst_39964);var inst_39946 = inst_39965;var inst_39947 = inst_39964;var inst_39948 = inst_39966;var inst_39949 = (0);var state_39989__$1 = (function (){var statearr_40006 = state_39989;(statearr_40006[(8)] = inst_39946);
(statearr_40006[(10)] = inst_39948);
(statearr_40006[(11)] = inst_39949);
(statearr_40006[(12)] = inst_39947);
return statearr_40006;
})();var statearr_40007_40036 = state_39989__$1;(statearr_40007_40036[(2)] = null);
(statearr_40007_40036[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (3)))
{var inst_39987 = (state_39989[(2)]);var state_39989__$1 = state_39989;return cljs.core.async.impl.ioc_helpers.return_chan(state_39989__$1,inst_39987);
} else
{if((state_val_39990 === (12)))
{var inst_39980 = (state_39989[(2)]);var state_39989__$1 = state_39989;var statearr_40008_40037 = state_39989__$1;(statearr_40008_40037[(2)] = inst_39980);
(statearr_40008_40037[(1)] = (9));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (2)))
{var state_39989__$1 = state_39989;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39989__$1,(4),in$);
} else
{if((state_val_39990 === (19)))
{var inst_39975 = (state_39989[(2)]);var state_39989__$1 = state_39989;var statearr_40009_40038 = state_39989__$1;(statearr_40009_40038[(2)] = inst_39975);
(statearr_40009_40038[(1)] = (16));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (11)))
{var inst_39946 = (state_39989[(8)]);var inst_39960 = (state_39989[(7)]);var inst_39960__$1 = cljs.core.seq(inst_39946);var state_39989__$1 = (function (){var statearr_40010 = state_39989;(statearr_40010[(7)] = inst_39960__$1);
return statearr_40010;
})();if(inst_39960__$1)
{var statearr_40011_40039 = state_39989__$1;(statearr_40011_40039[(1)] = (14));
} else
{var statearr_40012_40040 = state_39989__$1;(statearr_40012_40040[(1)] = (15));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (9)))
{var inst_39982 = (state_39989[(2)]);var state_39989__$1 = (function (){var statearr_40013 = state_39989;(statearr_40013[(15)] = inst_39982);
return statearr_40013;
})();var statearr_40014_40041 = state_39989__$1;(statearr_40014_40041[(2)] = null);
(statearr_40014_40041[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (5)))
{var inst_39938 = cljs.core.async.close_BANG_(out);var state_39989__$1 = state_39989;var statearr_40015_40042 = state_39989__$1;(statearr_40015_40042[(2)] = inst_39938);
(statearr_40015_40042[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (14)))
{var inst_39960 = (state_39989[(7)]);var inst_39962 = cljs.core.chunked_seq_QMARK_(inst_39960);var state_39989__$1 = state_39989;if(inst_39962)
{var statearr_40016_40043 = state_39989__$1;(statearr_40016_40043[(1)] = (17));
} else
{var statearr_40017_40044 = state_39989__$1;(statearr_40017_40044[(1)] = (18));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (16)))
{var inst_39978 = (state_39989[(2)]);var state_39989__$1 = state_39989;var statearr_40018_40045 = state_39989__$1;(statearr_40018_40045[(2)] = inst_39978);
(statearr_40018_40045[(1)] = (12));
return cljs.core.constant$keyword$781;
} else
{if((state_val_39990 === (10)))
{var inst_39949 = (state_39989[(11)]);var inst_39947 = (state_39989[(12)]);var inst_39954 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39947,inst_39949);var state_39989__$1 = state_39989;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39989__$1,(13),out,inst_39954);
} else
{if((state_val_39990 === (18)))
{var inst_39960 = (state_39989[(7)]);var inst_39969 = cljs.core.first(inst_39960);var state_39989__$1 = state_39989;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39989__$1,(20),out,inst_39969);
} else
{if((state_val_39990 === (8)))
{var inst_39948 = (state_39989[(10)]);var inst_39949 = (state_39989[(11)]);var inst_39951 = (inst_39949 < inst_39948);var inst_39952 = inst_39951;var state_39989__$1 = state_39989;if(cljs.core.truth_(inst_39952))
{var statearr_40019_40046 = state_39989__$1;(statearr_40019_40046[(1)] = (10));
} else
{var statearr_40020_40047 = state_39989__$1;(statearr_40020_40047[(1)] = (11));
}
return cljs.core.constant$keyword$781;
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
var state_machine__5679__auto____0 = (function (){var statearr_40024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40024[(0)] = state_machine__5679__auto__);
(statearr_40024[(1)] = (1));
return statearr_40024;
});
var state_machine__5679__auto____1 = (function (state_39989){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39989);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40025){if((e40025 instanceof Object))
{var ex__5682__auto__ = e40025;var statearr_40026_40048 = state_39989;(statearr_40026_40048[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39989);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e40025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__40049 = state_39989;
state_39989 = G__40049;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39989){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_40027 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_40027;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___40130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40130){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40130){
return (function (state_40109){var state_val_40110 = (state_40109[(1)]);if((state_val_40110 === (7)))
{var inst_40105 = (state_40109[(2)]);var state_40109__$1 = state_40109;var statearr_40111_40131 = state_40109__$1;(statearr_40111_40131[(2)] = inst_40105);
(statearr_40111_40131[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40110 === (1)))
{var state_40109__$1 = state_40109;var statearr_40112_40132 = state_40109__$1;(statearr_40112_40132[(2)] = null);
(statearr_40112_40132[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40110 === (4)))
{var inst_40092 = (state_40109[(7)]);var inst_40092__$1 = (state_40109[(2)]);var inst_40093 = (inst_40092__$1 == null);var state_40109__$1 = (function (){var statearr_40113 = state_40109;(statearr_40113[(7)] = inst_40092__$1);
return statearr_40113;
})();if(cljs.core.truth_(inst_40093))
{var statearr_40114_40133 = state_40109__$1;(statearr_40114_40133[(1)] = (5));
} else
{var statearr_40115_40134 = state_40109__$1;(statearr_40115_40134[(1)] = (6));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40110 === (6)))
{var inst_40092 = (state_40109[(7)]);var state_40109__$1 = state_40109;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40109__$1,(11),to,inst_40092);
} else
{if((state_val_40110 === (3)))
{var inst_40107 = (state_40109[(2)]);var state_40109__$1 = state_40109;return cljs.core.async.impl.ioc_helpers.return_chan(state_40109__$1,inst_40107);
} else
{if((state_val_40110 === (2)))
{var state_40109__$1 = state_40109;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40109__$1,(4),from);
} else
{if((state_val_40110 === (11)))
{var inst_40102 = (state_40109[(2)]);var state_40109__$1 = (function (){var statearr_40116 = state_40109;(statearr_40116[(8)] = inst_40102);
return statearr_40116;
})();var statearr_40117_40135 = state_40109__$1;(statearr_40117_40135[(2)] = null);
(statearr_40117_40135[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40110 === (9)))
{var state_40109__$1 = state_40109;var statearr_40118_40136 = state_40109__$1;(statearr_40118_40136[(2)] = null);
(statearr_40118_40136[(1)] = (10));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40110 === (5)))
{var state_40109__$1 = state_40109;if(cljs.core.truth_(close_QMARK_))
{var statearr_40119_40137 = state_40109__$1;(statearr_40119_40137[(1)] = (8));
} else
{var statearr_40120_40138 = state_40109__$1;(statearr_40120_40138[(1)] = (9));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40110 === (10)))
{var inst_40099 = (state_40109[(2)]);var state_40109__$1 = state_40109;var statearr_40121_40139 = state_40109__$1;(statearr_40121_40139[(2)] = inst_40099);
(statearr_40121_40139[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40110 === (8)))
{var inst_40096 = cljs.core.async.close_BANG_(to);var state_40109__$1 = state_40109;var statearr_40122_40140 = state_40109__$1;(statearr_40122_40140[(2)] = inst_40096);
(statearr_40122_40140[(1)] = (10));
return cljs.core.constant$keyword$781;
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
});})(c__5693__auto___40130))
;return ((function (switch__5678__auto__,c__5693__auto___40130){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40126 = [null,null,null,null,null,null,null,null,null];(statearr_40126[(0)] = state_machine__5679__auto__);
(statearr_40126[(1)] = (1));
return statearr_40126;
});
var state_machine__5679__auto____1 = (function (state_40109){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40109);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40127){if((e40127 instanceof Object))
{var ex__5682__auto__ = e40127;var statearr_40128_40141 = state_40109;(statearr_40128_40141[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40109);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e40127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__40142 = state_40109;
state_40109 = G__40142;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40109){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40130))
})();var state__5695__auto__ = (function (){var statearr_40129 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40130);
return statearr_40129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40130))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5693__auto___40229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40229,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40229,tc,fc){
return (function (state_40207){var state_val_40208 = (state_40207[(1)]);if((state_val_40208 === (7)))
{var inst_40203 = (state_40207[(2)]);var state_40207__$1 = state_40207;var statearr_40209_40230 = state_40207__$1;(statearr_40209_40230[(2)] = inst_40203);
(statearr_40209_40230[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40208 === (1)))
{var state_40207__$1 = state_40207;var statearr_40210_40231 = state_40207__$1;(statearr_40210_40231[(2)] = null);
(statearr_40210_40231[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40208 === (4)))
{var inst_40188 = (state_40207[(7)]);var inst_40188__$1 = (state_40207[(2)]);var inst_40189 = (inst_40188__$1 == null);var state_40207__$1 = (function (){var statearr_40211 = state_40207;(statearr_40211[(7)] = inst_40188__$1);
return statearr_40211;
})();if(cljs.core.truth_(inst_40189))
{var statearr_40212_40232 = state_40207__$1;(statearr_40212_40232[(1)] = (5));
} else
{var statearr_40213_40233 = state_40207__$1;(statearr_40213_40233[(1)] = (6));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40208 === (6)))
{var inst_40188 = (state_40207[(7)]);var inst_40194 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40188) : p.call(null,inst_40188));var state_40207__$1 = state_40207;if(cljs.core.truth_(inst_40194))
{var statearr_40214_40234 = state_40207__$1;(statearr_40214_40234[(1)] = (9));
} else
{var statearr_40215_40235 = state_40207__$1;(statearr_40215_40235[(1)] = (10));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40208 === (3)))
{var inst_40205 = (state_40207[(2)]);var state_40207__$1 = state_40207;return cljs.core.async.impl.ioc_helpers.return_chan(state_40207__$1,inst_40205);
} else
{if((state_val_40208 === (2)))
{var state_40207__$1 = state_40207;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40207__$1,(4),ch);
} else
{if((state_val_40208 === (11)))
{var inst_40188 = (state_40207[(7)]);var inst_40198 = (state_40207[(2)]);var state_40207__$1 = state_40207;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40207__$1,(8),inst_40198,inst_40188);
} else
{if((state_val_40208 === (9)))
{var state_40207__$1 = state_40207;var statearr_40216_40236 = state_40207__$1;(statearr_40216_40236[(2)] = tc);
(statearr_40216_40236[(1)] = (11));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40208 === (5)))
{var inst_40191 = cljs.core.async.close_BANG_(tc);var inst_40192 = cljs.core.async.close_BANG_(fc);var state_40207__$1 = (function (){var statearr_40217 = state_40207;(statearr_40217[(8)] = inst_40191);
return statearr_40217;
})();var statearr_40218_40237 = state_40207__$1;(statearr_40218_40237[(2)] = inst_40192);
(statearr_40218_40237[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40208 === (10)))
{var state_40207__$1 = state_40207;var statearr_40219_40238 = state_40207__$1;(statearr_40219_40238[(2)] = fc);
(statearr_40219_40238[(1)] = (11));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40208 === (8)))
{var inst_40200 = (state_40207[(2)]);var state_40207__$1 = (function (){var statearr_40220 = state_40207;(statearr_40220[(9)] = inst_40200);
return statearr_40220;
})();var statearr_40221_40239 = state_40207__$1;(statearr_40221_40239[(2)] = null);
(statearr_40221_40239[(1)] = (2));
return cljs.core.constant$keyword$781;
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
});})(c__5693__auto___40229,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___40229,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40225 = [null,null,null,null,null,null,null,null,null,null];(statearr_40225[(0)] = state_machine__5679__auto__);
(statearr_40225[(1)] = (1));
return statearr_40225;
});
var state_machine__5679__auto____1 = (function (state_40207){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40207);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40226){if((e40226 instanceof Object))
{var ex__5682__auto__ = e40226;var statearr_40227_40240 = state_40207;(statearr_40227_40240[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40207);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e40226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__40241 = state_40207;
state_40207 = G__40241;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40207){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40229,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_40228 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40229);
return statearr_40228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40229,tc,fc))
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
return (function (state_40288){var state_val_40289 = (state_40288[(1)]);if((state_val_40289 === (7)))
{var inst_40284 = (state_40288[(2)]);var state_40288__$1 = state_40288;var statearr_40290_40306 = state_40288__$1;(statearr_40290_40306[(2)] = inst_40284);
(statearr_40290_40306[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40289 === (6)))
{var inst_40274 = (state_40288[(7)]);var inst_40277 = (state_40288[(8)]);var inst_40281 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40274,inst_40277) : f.call(null,inst_40274,inst_40277));var inst_40274__$1 = inst_40281;var state_40288__$1 = (function (){var statearr_40291 = state_40288;(statearr_40291[(7)] = inst_40274__$1);
return statearr_40291;
})();var statearr_40292_40307 = state_40288__$1;(statearr_40292_40307[(2)] = null);
(statearr_40292_40307[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40289 === (5)))
{var inst_40274 = (state_40288[(7)]);var state_40288__$1 = state_40288;var statearr_40293_40308 = state_40288__$1;(statearr_40293_40308[(2)] = inst_40274);
(statearr_40293_40308[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40289 === (4)))
{var inst_40277 = (state_40288[(8)]);var inst_40277__$1 = (state_40288[(2)]);var inst_40278 = (inst_40277__$1 == null);var state_40288__$1 = (function (){var statearr_40294 = state_40288;(statearr_40294[(8)] = inst_40277__$1);
return statearr_40294;
})();if(cljs.core.truth_(inst_40278))
{var statearr_40295_40309 = state_40288__$1;(statearr_40295_40309[(1)] = (5));
} else
{var statearr_40296_40310 = state_40288__$1;(statearr_40296_40310[(1)] = (6));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40289 === (3)))
{var inst_40286 = (state_40288[(2)]);var state_40288__$1 = state_40288;return cljs.core.async.impl.ioc_helpers.return_chan(state_40288__$1,inst_40286);
} else
{if((state_val_40289 === (2)))
{var state_40288__$1 = state_40288;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40288__$1,(4),ch);
} else
{if((state_val_40289 === (1)))
{var inst_40274 = init;var state_40288__$1 = (function (){var statearr_40297 = state_40288;(statearr_40297[(7)] = inst_40274);
return statearr_40297;
})();var statearr_40298_40311 = state_40288__$1;(statearr_40298_40311[(2)] = null);
(statearr_40298_40311[(1)] = (2));
return cljs.core.constant$keyword$781;
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
var state_machine__5679__auto____0 = (function (){var statearr_40302 = [null,null,null,null,null,null,null,null,null];(statearr_40302[(0)] = state_machine__5679__auto__);
(statearr_40302[(1)] = (1));
return statearr_40302;
});
var state_machine__5679__auto____1 = (function (state_40288){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40288);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40303){if((e40303 instanceof Object))
{var ex__5682__auto__ = e40303;var statearr_40304_40312 = state_40288;(statearr_40304_40312[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40288);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e40303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__40313 = state_40288;
state_40288 = G__40313;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40288){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_40305 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_40305;
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
return (function (state_40375){var state_val_40376 = (state_40375[(1)]);if((state_val_40376 === (7)))
{var inst_40356 = (state_40375[(7)]);var inst_40361 = (state_40375[(2)]);var inst_40362 = cljs.core.next(inst_40356);var inst_40356__$1 = inst_40362;var state_40375__$1 = (function (){var statearr_40377 = state_40375;(statearr_40377[(8)] = inst_40361);
(statearr_40377[(7)] = inst_40356__$1);
return statearr_40377;
})();var statearr_40378_40396 = state_40375__$1;(statearr_40378_40396[(2)] = null);
(statearr_40378_40396[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40376 === (1)))
{var inst_40355 = cljs.core.seq(coll);var inst_40356 = inst_40355;var state_40375__$1 = (function (){var statearr_40379 = state_40375;(statearr_40379[(7)] = inst_40356);
return statearr_40379;
})();var statearr_40380_40397 = state_40375__$1;(statearr_40380_40397[(2)] = null);
(statearr_40380_40397[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40376 === (4)))
{var inst_40356 = (state_40375[(7)]);var inst_40359 = cljs.core.first(inst_40356);var state_40375__$1 = state_40375;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40375__$1,(7),ch,inst_40359);
} else
{if((state_val_40376 === (6)))
{var inst_40371 = (state_40375[(2)]);var state_40375__$1 = state_40375;var statearr_40381_40398 = state_40375__$1;(statearr_40381_40398[(2)] = inst_40371);
(statearr_40381_40398[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40376 === (3)))
{var inst_40373 = (state_40375[(2)]);var state_40375__$1 = state_40375;return cljs.core.async.impl.ioc_helpers.return_chan(state_40375__$1,inst_40373);
} else
{if((state_val_40376 === (2)))
{var inst_40356 = (state_40375[(7)]);var state_40375__$1 = state_40375;if(cljs.core.truth_(inst_40356))
{var statearr_40382_40399 = state_40375__$1;(statearr_40382_40399[(1)] = (4));
} else
{var statearr_40383_40400 = state_40375__$1;(statearr_40383_40400[(1)] = (5));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40376 === (9)))
{var state_40375__$1 = state_40375;var statearr_40384_40401 = state_40375__$1;(statearr_40384_40401[(2)] = null);
(statearr_40384_40401[(1)] = (10));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40376 === (5)))
{var state_40375__$1 = state_40375;if(cljs.core.truth_(close_QMARK_))
{var statearr_40385_40402 = state_40375__$1;(statearr_40385_40402[(1)] = (8));
} else
{var statearr_40386_40403 = state_40375__$1;(statearr_40386_40403[(1)] = (9));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40376 === (10)))
{var inst_40369 = (state_40375[(2)]);var state_40375__$1 = state_40375;var statearr_40387_40404 = state_40375__$1;(statearr_40387_40404[(2)] = inst_40369);
(statearr_40387_40404[(1)] = (6));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40376 === (8)))
{var inst_40366 = cljs.core.async.close_BANG_(ch);var state_40375__$1 = state_40375;var statearr_40388_40405 = state_40375__$1;(statearr_40388_40405[(2)] = inst_40366);
(statearr_40388_40405[(1)] = (10));
return cljs.core.constant$keyword$781;
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
var state_machine__5679__auto____0 = (function (){var statearr_40392 = [null,null,null,null,null,null,null,null,null];(statearr_40392[(0)] = state_machine__5679__auto__);
(statearr_40392[(1)] = (1));
return statearr_40392;
});
var state_machine__5679__auto____1 = (function (state_40375){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40375);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40393){if((e40393 instanceof Object))
{var ex__5682__auto__ = e40393;var statearr_40394_40406 = state_40375;(statearr_40394_40406[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40375);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e40393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__40407 = state_40375;
state_40375 = G__40407;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40375){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_40395 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_40395;
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
cljs.core.async.Mux = (function (){var obj40409 = {};return obj40409;
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
cljs.core.async.Mult = (function (){var obj40411 = {};return obj40411;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t40635 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40635 = (function (cs,ch,mult,meta40636){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta40636 = meta40636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40635.cljs$lang$type = true;
cljs.core.async.t40635.cljs$lang$ctorStr = "cljs.core.async/t40635";
cljs.core.async.t40635.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40635");
});})(cs))
;
cljs.core.async.t40635.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t40635.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t40635.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t40635.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t40635.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t40635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t40635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40637){var self__ = this;
var _40637__$1 = this;return self__.meta40636;
});})(cs))
;
cljs.core.async.t40635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40637,meta40636__$1){var self__ = this;
var _40637__$1 = this;return (new cljs.core.async.t40635(self__.cs,self__.ch,self__.mult,meta40636__$1));
});})(cs))
;
cljs.core.async.__GT_t40635 = ((function (cs){
return (function __GT_t40635(cs__$1,ch__$1,mult__$1,meta40636){return (new cljs.core.async.t40635(cs__$1,ch__$1,mult__$1,meta40636));
});})(cs))
;
}
return (new cljs.core.async.t40635(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___40858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40858,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40858,cs,m,dchan,dctr,done){
return (function (state_40772){var state_val_40773 = (state_40772[(1)]);if((state_val_40773 === (7)))
{var inst_40768 = (state_40772[(2)]);var state_40772__$1 = state_40772;var statearr_40774_40859 = state_40772__$1;(statearr_40774_40859[(2)] = inst_40768);
(statearr_40774_40859[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (20)))
{var inst_40669 = (state_40772[(7)]);var inst_40679 = cljs.core.first(inst_40669);var inst_40680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40679,(0),null);var inst_40681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40679,(1),null);var state_40772__$1 = (function (){var statearr_40775 = state_40772;(statearr_40775[(8)] = inst_40680);
return statearr_40775;
})();if(cljs.core.truth_(inst_40681))
{var statearr_40776_40860 = state_40772__$1;(statearr_40776_40860[(1)] = (22));
} else
{var statearr_40777_40861 = state_40772__$1;(statearr_40777_40861[(1)] = (23));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (27)))
{var inst_40711 = (state_40772[(9)]);var inst_40709 = (state_40772[(10)]);var inst_40716 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40709,inst_40711);var state_40772__$1 = (function (){var statearr_40778 = state_40772;(statearr_40778[(11)] = inst_40716);
return statearr_40778;
})();var statearr_40779_40862 = state_40772__$1;(statearr_40779_40862[(2)] = null);
(statearr_40779_40862[(1)] = (32));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (1)))
{var state_40772__$1 = state_40772;var statearr_40780_40863 = state_40772__$1;(statearr_40780_40863[(2)] = null);
(statearr_40780_40863[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (24)))
{var inst_40669 = (state_40772[(7)]);var inst_40686 = (state_40772[(2)]);var inst_40687 = cljs.core.next(inst_40669);var inst_40649 = inst_40687;var inst_40650 = null;var inst_40651 = (0);var inst_40652 = (0);var state_40772__$1 = (function (){var statearr_40781 = state_40772;(statearr_40781[(12)] = inst_40651);
(statearr_40781[(13)] = inst_40649);
(statearr_40781[(14)] = inst_40650);
(statearr_40781[(15)] = inst_40652);
(statearr_40781[(16)] = inst_40686);
return statearr_40781;
})();var statearr_40782_40864 = state_40772__$1;(statearr_40782_40864[(2)] = null);
(statearr_40782_40864[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (39)))
{var inst_40729 = (state_40772[(17)]);var inst_40747 = (state_40772[(2)]);var inst_40748 = cljs.core.next(inst_40729);var inst_40708 = inst_40748;var inst_40709 = null;var inst_40710 = (0);var inst_40711 = (0);var state_40772__$1 = (function (){var statearr_40786 = state_40772;(statearr_40786[(9)] = inst_40711);
(statearr_40786[(18)] = inst_40747);
(statearr_40786[(19)] = inst_40708);
(statearr_40786[(20)] = inst_40710);
(statearr_40786[(10)] = inst_40709);
return statearr_40786;
})();var statearr_40787_40865 = state_40772__$1;(statearr_40787_40865[(2)] = null);
(statearr_40787_40865[(1)] = (25));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (4)))
{var inst_40640 = (state_40772[(21)]);var inst_40640__$1 = (state_40772[(2)]);var inst_40641 = (inst_40640__$1 == null);var state_40772__$1 = (function (){var statearr_40788 = state_40772;(statearr_40788[(21)] = inst_40640__$1);
return statearr_40788;
})();if(cljs.core.truth_(inst_40641))
{var statearr_40789_40866 = state_40772__$1;(statearr_40789_40866[(1)] = (5));
} else
{var statearr_40790_40867 = state_40772__$1;(statearr_40790_40867[(1)] = (6));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (15)))
{var inst_40651 = (state_40772[(12)]);var inst_40649 = (state_40772[(13)]);var inst_40650 = (state_40772[(14)]);var inst_40652 = (state_40772[(15)]);var inst_40665 = (state_40772[(2)]);var inst_40666 = (inst_40652 + (1));var tmp40783 = inst_40651;var tmp40784 = inst_40649;var tmp40785 = inst_40650;var inst_40649__$1 = tmp40784;var inst_40650__$1 = tmp40785;var inst_40651__$1 = tmp40783;var inst_40652__$1 = inst_40666;var state_40772__$1 = (function (){var statearr_40791 = state_40772;(statearr_40791[(12)] = inst_40651__$1);
(statearr_40791[(13)] = inst_40649__$1);
(statearr_40791[(14)] = inst_40650__$1);
(statearr_40791[(22)] = inst_40665);
(statearr_40791[(15)] = inst_40652__$1);
return statearr_40791;
})();var statearr_40792_40868 = state_40772__$1;(statearr_40792_40868[(2)] = null);
(statearr_40792_40868[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (21)))
{var inst_40690 = (state_40772[(2)]);var state_40772__$1 = state_40772;var statearr_40793_40869 = state_40772__$1;(statearr_40793_40869[(2)] = inst_40690);
(statearr_40793_40869[(1)] = (18));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (31)))
{var inst_40716 = (state_40772[(11)]);var inst_40717 = (state_40772[(2)]);var inst_40718 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_40719 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40716);var state_40772__$1 = (function (){var statearr_40794 = state_40772;(statearr_40794[(23)] = inst_40717);
(statearr_40794[(24)] = inst_40718);
return statearr_40794;
})();var statearr_40795_40870 = state_40772__$1;(statearr_40795_40870[(2)] = inst_40719);
cljs.core.async.impl.ioc_helpers.process_exception(state_40772__$1);
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (32)))
{var inst_40716 = (state_40772[(11)]);var inst_40640 = (state_40772[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40772,(31),Object,null,(30));var inst_40723 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40716,inst_40640,done);var state_40772__$1 = state_40772;var statearr_40796_40871 = state_40772__$1;(statearr_40796_40871[(2)] = inst_40723);
cljs.core.async.impl.ioc_helpers.process_exception(state_40772__$1);
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (40)))
{var inst_40738 = (state_40772[(25)]);var inst_40739 = (state_40772[(2)]);var inst_40740 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_40741 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40738);var state_40772__$1 = (function (){var statearr_40797 = state_40772;(statearr_40797[(26)] = inst_40740);
(statearr_40797[(27)] = inst_40739);
return statearr_40797;
})();var statearr_40798_40872 = state_40772__$1;(statearr_40798_40872[(2)] = inst_40741);
cljs.core.async.impl.ioc_helpers.process_exception(state_40772__$1);
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (33)))
{var inst_40729 = (state_40772[(17)]);var inst_40731 = cljs.core.chunked_seq_QMARK_(inst_40729);var state_40772__$1 = state_40772;if(inst_40731)
{var statearr_40799_40873 = state_40772__$1;(statearr_40799_40873[(1)] = (36));
} else
{var statearr_40800_40874 = state_40772__$1;(statearr_40800_40874[(1)] = (37));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (13)))
{var inst_40659 = (state_40772[(28)]);var inst_40662 = cljs.core.async.close_BANG_(inst_40659);var state_40772__$1 = state_40772;var statearr_40801_40875 = state_40772__$1;(statearr_40801_40875[(2)] = inst_40662);
(statearr_40801_40875[(1)] = (15));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (22)))
{var inst_40680 = (state_40772[(8)]);var inst_40683 = cljs.core.async.close_BANG_(inst_40680);var state_40772__$1 = state_40772;var statearr_40802_40876 = state_40772__$1;(statearr_40802_40876[(2)] = inst_40683);
(statearr_40802_40876[(1)] = (24));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (36)))
{var inst_40729 = (state_40772[(17)]);var inst_40733 = cljs.core.chunk_first(inst_40729);var inst_40734 = cljs.core.chunk_rest(inst_40729);var inst_40735 = cljs.core.count(inst_40733);var inst_40708 = inst_40734;var inst_40709 = inst_40733;var inst_40710 = inst_40735;var inst_40711 = (0);var state_40772__$1 = (function (){var statearr_40803 = state_40772;(statearr_40803[(9)] = inst_40711);
(statearr_40803[(19)] = inst_40708);
(statearr_40803[(20)] = inst_40710);
(statearr_40803[(10)] = inst_40709);
return statearr_40803;
})();var statearr_40804_40877 = state_40772__$1;(statearr_40804_40877[(2)] = null);
(statearr_40804_40877[(1)] = (25));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (41)))
{var inst_40640 = (state_40772[(21)]);var inst_40738 = (state_40772[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40772,(40),Object,null,(39));var inst_40745 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40738,inst_40640,done);var state_40772__$1 = state_40772;var statearr_40805_40878 = state_40772__$1;(statearr_40805_40878[(2)] = inst_40745);
cljs.core.async.impl.ioc_helpers.process_exception(state_40772__$1);
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (43)))
{var state_40772__$1 = state_40772;var statearr_40806_40879 = state_40772__$1;(statearr_40806_40879[(2)] = null);
(statearr_40806_40879[(1)] = (44));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (29)))
{var inst_40756 = (state_40772[(2)]);var state_40772__$1 = state_40772;var statearr_40807_40880 = state_40772__$1;(statearr_40807_40880[(2)] = inst_40756);
(statearr_40807_40880[(1)] = (26));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (44)))
{var inst_40765 = (state_40772[(2)]);var state_40772__$1 = (function (){var statearr_40808 = state_40772;(statearr_40808[(29)] = inst_40765);
return statearr_40808;
})();var statearr_40809_40881 = state_40772__$1;(statearr_40809_40881[(2)] = null);
(statearr_40809_40881[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (6)))
{var inst_40700 = (state_40772[(30)]);var inst_40699 = cljs.core.deref(cs);var inst_40700__$1 = cljs.core.keys(inst_40699);var inst_40701 = cljs.core.count(inst_40700__$1);var inst_40702 = cljs.core.reset_BANG_(dctr,inst_40701);var inst_40707 = cljs.core.seq(inst_40700__$1);var inst_40708 = inst_40707;var inst_40709 = null;var inst_40710 = (0);var inst_40711 = (0);var state_40772__$1 = (function (){var statearr_40810 = state_40772;(statearr_40810[(9)] = inst_40711);
(statearr_40810[(19)] = inst_40708);
(statearr_40810[(20)] = inst_40710);
(statearr_40810[(10)] = inst_40709);
(statearr_40810[(31)] = inst_40702);
(statearr_40810[(30)] = inst_40700__$1);
return statearr_40810;
})();var statearr_40811_40882 = state_40772__$1;(statearr_40811_40882[(2)] = null);
(statearr_40811_40882[(1)] = (25));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (28)))
{var inst_40708 = (state_40772[(19)]);var inst_40729 = (state_40772[(17)]);var inst_40729__$1 = cljs.core.seq(inst_40708);var state_40772__$1 = (function (){var statearr_40812 = state_40772;(statearr_40812[(17)] = inst_40729__$1);
return statearr_40812;
})();if(inst_40729__$1)
{var statearr_40813_40883 = state_40772__$1;(statearr_40813_40883[(1)] = (33));
} else
{var statearr_40814_40884 = state_40772__$1;(statearr_40814_40884[(1)] = (34));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (25)))
{var inst_40711 = (state_40772[(9)]);var inst_40710 = (state_40772[(20)]);var inst_40713 = (inst_40711 < inst_40710);var inst_40714 = inst_40713;var state_40772__$1 = state_40772;if(cljs.core.truth_(inst_40714))
{var statearr_40815_40885 = state_40772__$1;(statearr_40815_40885[(1)] = (27));
} else
{var statearr_40816_40886 = state_40772__$1;(statearr_40816_40886[(1)] = (28));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (34)))
{var state_40772__$1 = state_40772;var statearr_40817_40887 = state_40772__$1;(statearr_40817_40887[(2)] = null);
(statearr_40817_40887[(1)] = (35));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (17)))
{var state_40772__$1 = state_40772;var statearr_40818_40888 = state_40772__$1;(statearr_40818_40888[(2)] = null);
(statearr_40818_40888[(1)] = (18));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (3)))
{var inst_40770 = (state_40772[(2)]);var state_40772__$1 = state_40772;return cljs.core.async.impl.ioc_helpers.return_chan(state_40772__$1,inst_40770);
} else
{if((state_val_40773 === (12)))
{var inst_40695 = (state_40772[(2)]);var state_40772__$1 = state_40772;var statearr_40819_40889 = state_40772__$1;(statearr_40819_40889[(2)] = inst_40695);
(statearr_40819_40889[(1)] = (9));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (2)))
{var state_40772__$1 = state_40772;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40772__$1,(4),ch);
} else
{if((state_val_40773 === (23)))
{var state_40772__$1 = state_40772;var statearr_40820_40890 = state_40772__$1;(statearr_40820_40890[(2)] = null);
(statearr_40820_40890[(1)] = (24));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (35)))
{var inst_40754 = (state_40772[(2)]);var state_40772__$1 = state_40772;var statearr_40821_40891 = state_40772__$1;(statearr_40821_40891[(2)] = inst_40754);
(statearr_40821_40891[(1)] = (29));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (19)))
{var inst_40669 = (state_40772[(7)]);var inst_40673 = cljs.core.chunk_first(inst_40669);var inst_40674 = cljs.core.chunk_rest(inst_40669);var inst_40675 = cljs.core.count(inst_40673);var inst_40649 = inst_40674;var inst_40650 = inst_40673;var inst_40651 = inst_40675;var inst_40652 = (0);var state_40772__$1 = (function (){var statearr_40822 = state_40772;(statearr_40822[(12)] = inst_40651);
(statearr_40822[(13)] = inst_40649);
(statearr_40822[(14)] = inst_40650);
(statearr_40822[(15)] = inst_40652);
return statearr_40822;
})();var statearr_40823_40892 = state_40772__$1;(statearr_40823_40892[(2)] = null);
(statearr_40823_40892[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (11)))
{var inst_40649 = (state_40772[(13)]);var inst_40669 = (state_40772[(7)]);var inst_40669__$1 = cljs.core.seq(inst_40649);var state_40772__$1 = (function (){var statearr_40824 = state_40772;(statearr_40824[(7)] = inst_40669__$1);
return statearr_40824;
})();if(inst_40669__$1)
{var statearr_40825_40893 = state_40772__$1;(statearr_40825_40893[(1)] = (16));
} else
{var statearr_40826_40894 = state_40772__$1;(statearr_40826_40894[(1)] = (17));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (9)))
{var inst_40697 = (state_40772[(2)]);var state_40772__$1 = state_40772;var statearr_40827_40895 = state_40772__$1;(statearr_40827_40895[(2)] = inst_40697);
(statearr_40827_40895[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (5)))
{var inst_40647 = cljs.core.deref(cs);var inst_40648 = cljs.core.seq(inst_40647);var inst_40649 = inst_40648;var inst_40650 = null;var inst_40651 = (0);var inst_40652 = (0);var state_40772__$1 = (function (){var statearr_40828 = state_40772;(statearr_40828[(12)] = inst_40651);
(statearr_40828[(13)] = inst_40649);
(statearr_40828[(14)] = inst_40650);
(statearr_40828[(15)] = inst_40652);
return statearr_40828;
})();var statearr_40829_40896 = state_40772__$1;(statearr_40829_40896[(2)] = null);
(statearr_40829_40896[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (14)))
{var state_40772__$1 = state_40772;var statearr_40830_40897 = state_40772__$1;(statearr_40830_40897[(2)] = null);
(statearr_40830_40897[(1)] = (15));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (45)))
{var inst_40762 = (state_40772[(2)]);var state_40772__$1 = state_40772;var statearr_40831_40898 = state_40772__$1;(statearr_40831_40898[(2)] = inst_40762);
(statearr_40831_40898[(1)] = (44));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (26)))
{var inst_40700 = (state_40772[(30)]);var inst_40758 = (state_40772[(2)]);var inst_40759 = cljs.core.seq(inst_40700);var state_40772__$1 = (function (){var statearr_40832 = state_40772;(statearr_40832[(32)] = inst_40758);
return statearr_40832;
})();if(inst_40759)
{var statearr_40833_40899 = state_40772__$1;(statearr_40833_40899[(1)] = (42));
} else
{var statearr_40834_40900 = state_40772__$1;(statearr_40834_40900[(1)] = (43));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (16)))
{var inst_40669 = (state_40772[(7)]);var inst_40671 = cljs.core.chunked_seq_QMARK_(inst_40669);var state_40772__$1 = state_40772;if(inst_40671)
{var statearr_40838_40901 = state_40772__$1;(statearr_40838_40901[(1)] = (19));
} else
{var statearr_40839_40902 = state_40772__$1;(statearr_40839_40902[(1)] = (20));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (38)))
{var inst_40751 = (state_40772[(2)]);var state_40772__$1 = state_40772;var statearr_40840_40903 = state_40772__$1;(statearr_40840_40903[(2)] = inst_40751);
(statearr_40840_40903[(1)] = (35));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (30)))
{var inst_40711 = (state_40772[(9)]);var inst_40708 = (state_40772[(19)]);var inst_40710 = (state_40772[(20)]);var inst_40709 = (state_40772[(10)]);var inst_40725 = (state_40772[(2)]);var inst_40726 = (inst_40711 + (1));var tmp40835 = inst_40708;var tmp40836 = inst_40710;var tmp40837 = inst_40709;var inst_40708__$1 = tmp40835;var inst_40709__$1 = tmp40837;var inst_40710__$1 = tmp40836;var inst_40711__$1 = inst_40726;var state_40772__$1 = (function (){var statearr_40841 = state_40772;(statearr_40841[(9)] = inst_40711__$1);
(statearr_40841[(19)] = inst_40708__$1);
(statearr_40841[(20)] = inst_40710__$1);
(statearr_40841[(10)] = inst_40709__$1);
(statearr_40841[(33)] = inst_40725);
return statearr_40841;
})();var statearr_40842_40904 = state_40772__$1;(statearr_40842_40904[(2)] = null);
(statearr_40842_40904[(1)] = (25));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (10)))
{var inst_40650 = (state_40772[(14)]);var inst_40652 = (state_40772[(15)]);var inst_40658 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40650,inst_40652);var inst_40659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40658,(0),null);var inst_40660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40658,(1),null);var state_40772__$1 = (function (){var statearr_40843 = state_40772;(statearr_40843[(28)] = inst_40659);
return statearr_40843;
})();if(cljs.core.truth_(inst_40660))
{var statearr_40844_40905 = state_40772__$1;(statearr_40844_40905[(1)] = (13));
} else
{var statearr_40845_40906 = state_40772__$1;(statearr_40845_40906[(1)] = (14));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (18)))
{var inst_40693 = (state_40772[(2)]);var state_40772__$1 = state_40772;var statearr_40846_40907 = state_40772__$1;(statearr_40846_40907[(2)] = inst_40693);
(statearr_40846_40907[(1)] = (12));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (42)))
{var state_40772__$1 = state_40772;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40772__$1,(45),dchan);
} else
{if((state_val_40773 === (37)))
{var inst_40729 = (state_40772[(17)]);var inst_40738 = cljs.core.first(inst_40729);var state_40772__$1 = (function (){var statearr_40847 = state_40772;(statearr_40847[(25)] = inst_40738);
return statearr_40847;
})();var statearr_40848_40908 = state_40772__$1;(statearr_40848_40908[(2)] = null);
(statearr_40848_40908[(1)] = (41));
return cljs.core.constant$keyword$781;
} else
{if((state_val_40773 === (8)))
{var inst_40651 = (state_40772[(12)]);var inst_40652 = (state_40772[(15)]);var inst_40654 = (inst_40652 < inst_40651);var inst_40655 = inst_40654;var state_40772__$1 = state_40772;if(cljs.core.truth_(inst_40655))
{var statearr_40849_40909 = state_40772__$1;(statearr_40849_40909[(1)] = (10));
} else
{var statearr_40850_40910 = state_40772__$1;(statearr_40850_40910[(1)] = (11));
}
return cljs.core.constant$keyword$781;
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
});})(c__5693__auto___40858,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___40858,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40854[(0)] = state_machine__5679__auto__);
(statearr_40854[(1)] = (1));
return statearr_40854;
});
var state_machine__5679__auto____1 = (function (state_40772){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40772);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40855){if((e40855 instanceof Object))
{var ex__5682__auto__ = e40855;var statearr_40856_40911 = state_40772;(statearr_40856_40911[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40772);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e40855;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__40912 = state_40772;
state_40772 = G__40912;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40772){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40858,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_40857 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40858);
return statearr_40857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40858,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj40914 = {};return obj40914;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$788,null,cljs.core.constant$keyword$789,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$790);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$789);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$790,chs);var pauses = pick(cljs.core.constant$keyword$788,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$791,solos,cljs.core.constant$keyword$792,pick(cljs.core.constant$keyword$789,chs),cljs.core.constant$keyword$793,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$788)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t41024 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41024 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41025){
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
this.meta41025 = meta41025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41024.cljs$lang$type = true;
cljs.core.async.t41024.cljs$lang$ctorStr = "cljs.core.async/t41024";
cljs.core.async.t41024.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41024");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41024.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t41024.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41024.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41024.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41024.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41024.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41024.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41026){var self__ = this;
var _41026__$1 = this;return self__.meta41025;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41026,meta41025__$1){var self__ = this;
var _41026__$1 = this;return (new cljs.core.async.t41024(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41025__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t41024 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t41024(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41025){return (new cljs.core.async.t41024(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41025));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t41024(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___41133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41091){var state_val_41092 = (state_41091[(1)]);if((state_val_41092 === (7)))
{var inst_41040 = (state_41091[(7)]);var inst_41045 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41040);var state_41091__$1 = state_41091;var statearr_41093_41134 = state_41091__$1;(statearr_41093_41134[(2)] = inst_41045);
(statearr_41093_41134[(1)] = (9));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (20)))
{var inst_41055 = (state_41091[(8)]);var state_41091__$1 = state_41091;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41091__$1,(23),out,inst_41055);
} else
{if((state_val_41092 === (1)))
{var inst_41030 = (state_41091[(9)]);var inst_41030__$1 = calc_state();var inst_41031 = cljs.core.seq_QMARK_(inst_41030__$1);var state_41091__$1 = (function (){var statearr_41094 = state_41091;(statearr_41094[(9)] = inst_41030__$1);
return statearr_41094;
})();if(inst_41031)
{var statearr_41095_41135 = state_41091__$1;(statearr_41095_41135[(1)] = (2));
} else
{var statearr_41096_41136 = state_41091__$1;(statearr_41096_41136[(1)] = (3));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (4)))
{var inst_41030 = (state_41091[(9)]);var inst_41036 = (state_41091[(2)]);var inst_41037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41036,cljs.core.constant$keyword$793);var inst_41038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41036,cljs.core.constant$keyword$792);var inst_41039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41036,cljs.core.constant$keyword$791);var inst_41040 = inst_41030;var state_41091__$1 = (function (){var statearr_41097 = state_41091;(statearr_41097[(7)] = inst_41040);
(statearr_41097[(10)] = inst_41038);
(statearr_41097[(11)] = inst_41037);
(statearr_41097[(12)] = inst_41039);
return statearr_41097;
})();var statearr_41098_41137 = state_41091__$1;(statearr_41098_41137[(2)] = null);
(statearr_41098_41137[(1)] = (5));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (15)))
{var state_41091__$1 = state_41091;var statearr_41099_41138 = state_41091__$1;(statearr_41099_41138[(2)] = null);
(statearr_41099_41138[(1)] = (16));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (21)))
{var state_41091__$1 = state_41091;var statearr_41100_41139 = state_41091__$1;(statearr_41100_41139[(2)] = null);
(statearr_41100_41139[(1)] = (22));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (13)))
{var inst_41087 = (state_41091[(2)]);var state_41091__$1 = state_41091;var statearr_41101_41140 = state_41091__$1;(statearr_41101_41140[(2)] = inst_41087);
(statearr_41101_41140[(1)] = (6));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (22)))
{var inst_41048 = (state_41091[(13)]);var inst_41084 = (state_41091[(2)]);var inst_41040 = inst_41048;var state_41091__$1 = (function (){var statearr_41102 = state_41091;(statearr_41102[(7)] = inst_41040);
(statearr_41102[(14)] = inst_41084);
return statearr_41102;
})();var statearr_41103_41141 = state_41091__$1;(statearr_41103_41141[(2)] = null);
(statearr_41103_41141[(1)] = (5));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (6)))
{var inst_41089 = (state_41091[(2)]);var state_41091__$1 = state_41091;return cljs.core.async.impl.ioc_helpers.return_chan(state_41091__$1,inst_41089);
} else
{if((state_val_41092 === (17)))
{var inst_41070 = (state_41091[(15)]);var state_41091__$1 = state_41091;var statearr_41104_41142 = state_41091__$1;(statearr_41104_41142[(2)] = inst_41070);
(statearr_41104_41142[(1)] = (19));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (3)))
{var inst_41030 = (state_41091[(9)]);var state_41091__$1 = state_41091;var statearr_41105_41143 = state_41091__$1;(statearr_41105_41143[(2)] = inst_41030);
(statearr_41105_41143[(1)] = (4));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (12)))
{var inst_41056 = (state_41091[(16)]);var inst_41070 = (state_41091[(15)]);var inst_41051 = (state_41091[(17)]);var inst_41070__$1 = (inst_41051.cljs$core$IFn$_invoke$arity$1 ? inst_41051.cljs$core$IFn$_invoke$arity$1(inst_41056) : inst_41051.call(null,inst_41056));var state_41091__$1 = (function (){var statearr_41106 = state_41091;(statearr_41106[(15)] = inst_41070__$1);
return statearr_41106;
})();if(cljs.core.truth_(inst_41070__$1))
{var statearr_41107_41144 = state_41091__$1;(statearr_41107_41144[(1)] = (17));
} else
{var statearr_41108_41145 = state_41091__$1;(statearr_41108_41145[(1)] = (18));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (2)))
{var inst_41030 = (state_41091[(9)]);var inst_41033 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41030);var state_41091__$1 = state_41091;var statearr_41109_41146 = state_41091__$1;(statearr_41109_41146[(2)] = inst_41033);
(statearr_41109_41146[(1)] = (4));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (23)))
{var inst_41081 = (state_41091[(2)]);var state_41091__$1 = state_41091;var statearr_41110_41147 = state_41091__$1;(statearr_41110_41147[(2)] = inst_41081);
(statearr_41110_41147[(1)] = (22));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (19)))
{var inst_41078 = (state_41091[(2)]);var state_41091__$1 = state_41091;if(cljs.core.truth_(inst_41078))
{var statearr_41111_41148 = state_41091__$1;(statearr_41111_41148[(1)] = (20));
} else
{var statearr_41112_41149 = state_41091__$1;(statearr_41112_41149[(1)] = (21));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (11)))
{var inst_41055 = (state_41091[(8)]);var inst_41061 = (inst_41055 == null);var state_41091__$1 = state_41091;if(cljs.core.truth_(inst_41061))
{var statearr_41113_41150 = state_41091__$1;(statearr_41113_41150[(1)] = (14));
} else
{var statearr_41114_41151 = state_41091__$1;(statearr_41114_41151[(1)] = (15));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (9)))
{var inst_41048 = (state_41091[(13)]);var inst_41048__$1 = (state_41091[(2)]);var inst_41049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41048__$1,cljs.core.constant$keyword$793);var inst_41050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41048__$1,cljs.core.constant$keyword$792);var inst_41051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41048__$1,cljs.core.constant$keyword$791);var state_41091__$1 = (function (){var statearr_41115 = state_41091;(statearr_41115[(13)] = inst_41048__$1);
(statearr_41115[(18)] = inst_41050);
(statearr_41115[(17)] = inst_41051);
return statearr_41115;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_41091__$1,(10),inst_41049);
} else
{if((state_val_41092 === (5)))
{var inst_41040 = (state_41091[(7)]);var inst_41043 = cljs.core.seq_QMARK_(inst_41040);var state_41091__$1 = state_41091;if(inst_41043)
{var statearr_41116_41152 = state_41091__$1;(statearr_41116_41152[(1)] = (7));
} else
{var statearr_41117_41153 = state_41091__$1;(statearr_41117_41153[(1)] = (8));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (14)))
{var inst_41056 = (state_41091[(16)]);var inst_41063 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41056);var state_41091__$1 = state_41091;var statearr_41118_41154 = state_41091__$1;(statearr_41118_41154[(2)] = inst_41063);
(statearr_41118_41154[(1)] = (16));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (16)))
{var inst_41066 = (state_41091[(2)]);var inst_41067 = calc_state();var inst_41040 = inst_41067;var state_41091__$1 = (function (){var statearr_41119 = state_41091;(statearr_41119[(7)] = inst_41040);
(statearr_41119[(19)] = inst_41066);
return statearr_41119;
})();var statearr_41120_41155 = state_41091__$1;(statearr_41120_41155[(2)] = null);
(statearr_41120_41155[(1)] = (5));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (10)))
{var inst_41056 = (state_41091[(16)]);var inst_41055 = (state_41091[(8)]);var inst_41054 = (state_41091[(2)]);var inst_41055__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41054,(0),null);var inst_41056__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41054,(1),null);var inst_41057 = (inst_41055__$1 == null);var inst_41058 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41056__$1,change);var inst_41059 = (inst_41057) || (inst_41058);var state_41091__$1 = (function (){var statearr_41121 = state_41091;(statearr_41121[(16)] = inst_41056__$1);
(statearr_41121[(8)] = inst_41055__$1);
return statearr_41121;
})();if(cljs.core.truth_(inst_41059))
{var statearr_41122_41156 = state_41091__$1;(statearr_41122_41156[(1)] = (11));
} else
{var statearr_41123_41157 = state_41091__$1;(statearr_41123_41157[(1)] = (12));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (18)))
{var inst_41056 = (state_41091[(16)]);var inst_41050 = (state_41091[(18)]);var inst_41051 = (state_41091[(17)]);var inst_41073 = cljs.core.empty_QMARK_(inst_41051);var inst_41074 = (inst_41050.cljs$core$IFn$_invoke$arity$1 ? inst_41050.cljs$core$IFn$_invoke$arity$1(inst_41056) : inst_41050.call(null,inst_41056));var inst_41075 = cljs.core.not(inst_41074);var inst_41076 = (inst_41073) && (inst_41075);var state_41091__$1 = state_41091;var statearr_41124_41158 = state_41091__$1;(statearr_41124_41158[(2)] = inst_41076);
(statearr_41124_41158[(1)] = (19));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41092 === (8)))
{var inst_41040 = (state_41091[(7)]);var state_41091__$1 = state_41091;var statearr_41125_41159 = state_41091__$1;(statearr_41125_41159[(2)] = inst_41040);
(statearr_41125_41159[(1)] = (9));
return cljs.core.constant$keyword$781;
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
});})(c__5693__auto___41133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___41133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41129[(0)] = state_machine__5679__auto__);
(statearr_41129[(1)] = (1));
return statearr_41129;
});
var state_machine__5679__auto____1 = (function (state_41091){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41091);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41130){if((e41130 instanceof Object))
{var ex__5682__auto__ = e41130;var statearr_41131_41160 = state_41091;(statearr_41131_41160[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41091);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e41130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__41161 = state_41091;
state_41091 = G__41161;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41091){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_41132 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41133);
return statearr_41132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj41163 = {};return obj41163;
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
return (function (p1__41164_SHARP_){if(cljs.core.truth_((p1__41164_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41164_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41164_SHARP_.call(null,topic))))
{return p1__41164_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41164_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t41289 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41289 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta41290){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta41290 = meta41290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41289.cljs$lang$type = true;
cljs.core.async.t41289.cljs$lang$ctorStr = "cljs.core.async/t41289";
cljs.core.async.t41289.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41289");
});})(mults,ensure_mult))
;
cljs.core.async.t41289.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t41289.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t41289.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t41289.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t41289.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t41289.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t41289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41291){var self__ = this;
var _41291__$1 = this;return self__.meta41290;
});})(mults,ensure_mult))
;
cljs.core.async.t41289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41291,meta41290__$1){var self__ = this;
var _41291__$1 = this;return (new cljs.core.async.t41289(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta41290__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t41289 = ((function (mults,ensure_mult){
return (function __GT_t41289(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta41290){return (new cljs.core.async.t41289(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta41290));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t41289(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___41413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41413,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41413,mults,ensure_mult,p){
return (function (state_41365){var state_val_41366 = (state_41365[(1)]);if((state_val_41366 === (7)))
{var inst_41361 = (state_41365[(2)]);var state_41365__$1 = state_41365;var statearr_41367_41414 = state_41365__$1;(statearr_41367_41414[(2)] = inst_41361);
(statearr_41367_41414[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (20)))
{var state_41365__$1 = state_41365;var statearr_41368_41415 = state_41365__$1;(statearr_41368_41415[(2)] = null);
(statearr_41368_41415[(1)] = (21));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (1)))
{var state_41365__$1 = state_41365;var statearr_41369_41416 = state_41365__$1;(statearr_41369_41416[(2)] = null);
(statearr_41369_41416[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (24)))
{var inst_41344 = (state_41365[(7)]);var inst_41294 = (state_41365[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41365,(23),Object,null,(22));var inst_41351 = cljs.core.async.muxch_STAR_(inst_41344);var state_41365__$1 = state_41365;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41365__$1,(25),inst_41351,inst_41294);
} else
{if((state_val_41366 === (4)))
{var inst_41294 = (state_41365[(8)]);var inst_41294__$1 = (state_41365[(2)]);var inst_41295 = (inst_41294__$1 == null);var state_41365__$1 = (function (){var statearr_41370 = state_41365;(statearr_41370[(8)] = inst_41294__$1);
return statearr_41370;
})();if(cljs.core.truth_(inst_41295))
{var statearr_41371_41417 = state_41365__$1;(statearr_41371_41417[(1)] = (5));
} else
{var statearr_41372_41418 = state_41365__$1;(statearr_41372_41418[(1)] = (6));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (15)))
{var inst_41336 = (state_41365[(2)]);var state_41365__$1 = state_41365;var statearr_41373_41419 = state_41365__$1;(statearr_41373_41419[(2)] = inst_41336);
(statearr_41373_41419[(1)] = (12));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (21)))
{var inst_41358 = (state_41365[(2)]);var state_41365__$1 = (function (){var statearr_41374 = state_41365;(statearr_41374[(9)] = inst_41358);
return statearr_41374;
})();var statearr_41375_41420 = state_41365__$1;(statearr_41375_41420[(2)] = null);
(statearr_41375_41420[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (13)))
{var inst_41318 = (state_41365[(10)]);var inst_41320 = cljs.core.chunked_seq_QMARK_(inst_41318);var state_41365__$1 = state_41365;if(inst_41320)
{var statearr_41376_41421 = state_41365__$1;(statearr_41376_41421[(1)] = (16));
} else
{var statearr_41377_41422 = state_41365__$1;(statearr_41377_41422[(1)] = (17));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (22)))
{var inst_41355 = (state_41365[(2)]);var state_41365__$1 = state_41365;var statearr_41378_41423 = state_41365__$1;(statearr_41378_41423[(2)] = inst_41355);
(statearr_41378_41423[(1)] = (21));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (6)))
{var inst_41344 = (state_41365[(7)]);var inst_41294 = (state_41365[(8)]);var inst_41342 = (state_41365[(11)]);var inst_41342__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41294) : topic_fn.call(null,inst_41294));var inst_41343 = cljs.core.deref(mults);var inst_41344__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41343,inst_41342__$1);var state_41365__$1 = (function (){var statearr_41379 = state_41365;(statearr_41379[(7)] = inst_41344__$1);
(statearr_41379[(11)] = inst_41342__$1);
return statearr_41379;
})();if(cljs.core.truth_(inst_41344__$1))
{var statearr_41380_41424 = state_41365__$1;(statearr_41380_41424[(1)] = (19));
} else
{var statearr_41381_41425 = state_41365__$1;(statearr_41381_41425[(1)] = (20));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (25)))
{var inst_41353 = (state_41365[(2)]);var state_41365__$1 = state_41365;var statearr_41382_41426 = state_41365__$1;(statearr_41382_41426[(2)] = inst_41353);
cljs.core.async.impl.ioc_helpers.process_exception(state_41365__$1);
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (17)))
{var inst_41318 = (state_41365[(10)]);var inst_41327 = cljs.core.first(inst_41318);var inst_41328 = cljs.core.async.muxch_STAR_(inst_41327);var inst_41329 = cljs.core.async.close_BANG_(inst_41328);var inst_41330 = cljs.core.next(inst_41318);var inst_41304 = inst_41330;var inst_41305 = null;var inst_41306 = (0);var inst_41307 = (0);var state_41365__$1 = (function (){var statearr_41383 = state_41365;(statearr_41383[(12)] = inst_41305);
(statearr_41383[(13)] = inst_41304);
(statearr_41383[(14)] = inst_41307);
(statearr_41383[(15)] = inst_41306);
(statearr_41383[(16)] = inst_41329);
return statearr_41383;
})();var statearr_41384_41427 = state_41365__$1;(statearr_41384_41427[(2)] = null);
(statearr_41384_41427[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (3)))
{var inst_41363 = (state_41365[(2)]);var state_41365__$1 = state_41365;return cljs.core.async.impl.ioc_helpers.return_chan(state_41365__$1,inst_41363);
} else
{if((state_val_41366 === (12)))
{var inst_41338 = (state_41365[(2)]);var state_41365__$1 = state_41365;var statearr_41385_41428 = state_41365__$1;(statearr_41385_41428[(2)] = inst_41338);
(statearr_41385_41428[(1)] = (9));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (2)))
{var state_41365__$1 = state_41365;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41365__$1,(4),ch);
} else
{if((state_val_41366 === (23)))
{var inst_41342 = (state_41365[(11)]);var inst_41346 = (state_41365[(2)]);var inst_41347 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_41342);var state_41365__$1 = (function (){var statearr_41386 = state_41365;(statearr_41386[(17)] = inst_41346);
return statearr_41386;
})();var statearr_41387_41429 = state_41365__$1;(statearr_41387_41429[(2)] = inst_41347);
cljs.core.async.impl.ioc_helpers.process_exception(state_41365__$1);
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (19)))
{var state_41365__$1 = state_41365;var statearr_41388_41430 = state_41365__$1;(statearr_41388_41430[(2)] = null);
(statearr_41388_41430[(1)] = (24));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (11)))
{var inst_41304 = (state_41365[(13)]);var inst_41318 = (state_41365[(10)]);var inst_41318__$1 = cljs.core.seq(inst_41304);var state_41365__$1 = (function (){var statearr_41389 = state_41365;(statearr_41389[(10)] = inst_41318__$1);
return statearr_41389;
})();if(inst_41318__$1)
{var statearr_41390_41431 = state_41365__$1;(statearr_41390_41431[(1)] = (13));
} else
{var statearr_41391_41432 = state_41365__$1;(statearr_41391_41432[(1)] = (14));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (9)))
{var inst_41340 = (state_41365[(2)]);var state_41365__$1 = state_41365;var statearr_41392_41433 = state_41365__$1;(statearr_41392_41433[(2)] = inst_41340);
(statearr_41392_41433[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (5)))
{var inst_41301 = cljs.core.deref(mults);var inst_41302 = cljs.core.vals(inst_41301);var inst_41303 = cljs.core.seq(inst_41302);var inst_41304 = inst_41303;var inst_41305 = null;var inst_41306 = (0);var inst_41307 = (0);var state_41365__$1 = (function (){var statearr_41393 = state_41365;(statearr_41393[(12)] = inst_41305);
(statearr_41393[(13)] = inst_41304);
(statearr_41393[(14)] = inst_41307);
(statearr_41393[(15)] = inst_41306);
return statearr_41393;
})();var statearr_41394_41434 = state_41365__$1;(statearr_41394_41434[(2)] = null);
(statearr_41394_41434[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (14)))
{var state_41365__$1 = state_41365;var statearr_41398_41435 = state_41365__$1;(statearr_41398_41435[(2)] = null);
(statearr_41398_41435[(1)] = (15));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (16)))
{var inst_41318 = (state_41365[(10)]);var inst_41322 = cljs.core.chunk_first(inst_41318);var inst_41323 = cljs.core.chunk_rest(inst_41318);var inst_41324 = cljs.core.count(inst_41322);var inst_41304 = inst_41323;var inst_41305 = inst_41322;var inst_41306 = inst_41324;var inst_41307 = (0);var state_41365__$1 = (function (){var statearr_41399 = state_41365;(statearr_41399[(12)] = inst_41305);
(statearr_41399[(13)] = inst_41304);
(statearr_41399[(14)] = inst_41307);
(statearr_41399[(15)] = inst_41306);
return statearr_41399;
})();var statearr_41400_41436 = state_41365__$1;(statearr_41400_41436[(2)] = null);
(statearr_41400_41436[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (10)))
{var inst_41305 = (state_41365[(12)]);var inst_41304 = (state_41365[(13)]);var inst_41307 = (state_41365[(14)]);var inst_41306 = (state_41365[(15)]);var inst_41312 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41305,inst_41307);var inst_41313 = cljs.core.async.muxch_STAR_(inst_41312);var inst_41314 = cljs.core.async.close_BANG_(inst_41313);var inst_41315 = (inst_41307 + (1));var tmp41395 = inst_41305;var tmp41396 = inst_41304;var tmp41397 = inst_41306;var inst_41304__$1 = tmp41396;var inst_41305__$1 = tmp41395;var inst_41306__$1 = tmp41397;var inst_41307__$1 = inst_41315;var state_41365__$1 = (function (){var statearr_41401 = state_41365;(statearr_41401[(12)] = inst_41305__$1);
(statearr_41401[(18)] = inst_41314);
(statearr_41401[(13)] = inst_41304__$1);
(statearr_41401[(14)] = inst_41307__$1);
(statearr_41401[(15)] = inst_41306__$1);
return statearr_41401;
})();var statearr_41402_41437 = state_41365__$1;(statearr_41402_41437[(2)] = null);
(statearr_41402_41437[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (18)))
{var inst_41333 = (state_41365[(2)]);var state_41365__$1 = state_41365;var statearr_41403_41438 = state_41365__$1;(statearr_41403_41438[(2)] = inst_41333);
(statearr_41403_41438[(1)] = (15));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41366 === (8)))
{var inst_41307 = (state_41365[(14)]);var inst_41306 = (state_41365[(15)]);var inst_41309 = (inst_41307 < inst_41306);var inst_41310 = inst_41309;var state_41365__$1 = state_41365;if(cljs.core.truth_(inst_41310))
{var statearr_41404_41439 = state_41365__$1;(statearr_41404_41439[(1)] = (10));
} else
{var statearr_41405_41440 = state_41365__$1;(statearr_41405_41440[(1)] = (11));
}
return cljs.core.constant$keyword$781;
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
});})(c__5693__auto___41413,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___41413,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41409[(0)] = state_machine__5679__auto__);
(statearr_41409[(1)] = (1));
return statearr_41409;
});
var state_machine__5679__auto____1 = (function (state_41365){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41365);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41410){if((e41410 instanceof Object))
{var ex__5682__auto__ = e41410;var statearr_41411_41441 = state_41365;(statearr_41411_41441[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41365);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e41410;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__41442 = state_41365;
state_41365 = G__41442;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41365){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41413,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_41412 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41413);
return statearr_41412;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41413,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5693__auto___41579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41549){var state_val_41550 = (state_41549[(1)]);if((state_val_41550 === (7)))
{var state_41549__$1 = state_41549;var statearr_41551_41580 = state_41549__$1;(statearr_41551_41580[(2)] = null);
(statearr_41551_41580[(1)] = (8));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (1)))
{var state_41549__$1 = state_41549;var statearr_41552_41581 = state_41549__$1;(statearr_41552_41581[(2)] = null);
(statearr_41552_41581[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (4)))
{var inst_41513 = (state_41549[(7)]);var inst_41515 = (inst_41513 < cnt);var state_41549__$1 = state_41549;if(cljs.core.truth_(inst_41515))
{var statearr_41553_41582 = state_41549__$1;(statearr_41553_41582[(1)] = (6));
} else
{var statearr_41554_41583 = state_41549__$1;(statearr_41554_41583[(1)] = (7));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (15)))
{var inst_41545 = (state_41549[(2)]);var state_41549__$1 = state_41549;var statearr_41555_41584 = state_41549__$1;(statearr_41555_41584[(2)] = inst_41545);
(statearr_41555_41584[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (13)))
{var inst_41538 = cljs.core.async.close_BANG_(out);var state_41549__$1 = state_41549;var statearr_41556_41585 = state_41549__$1;(statearr_41556_41585[(2)] = inst_41538);
(statearr_41556_41585[(1)] = (15));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (6)))
{var state_41549__$1 = state_41549;var statearr_41557_41586 = state_41549__$1;(statearr_41557_41586[(2)] = null);
(statearr_41557_41586[(1)] = (11));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (3)))
{var inst_41547 = (state_41549[(2)]);var state_41549__$1 = state_41549;return cljs.core.async.impl.ioc_helpers.return_chan(state_41549__$1,inst_41547);
} else
{if((state_val_41550 === (12)))
{var inst_41535 = (state_41549[(8)]);var inst_41535__$1 = (state_41549[(2)]);var inst_41536 = cljs.core.some(cljs.core.nil_QMARK_,inst_41535__$1);var state_41549__$1 = (function (){var statearr_41558 = state_41549;(statearr_41558[(8)] = inst_41535__$1);
return statearr_41558;
})();if(cljs.core.truth_(inst_41536))
{var statearr_41559_41587 = state_41549__$1;(statearr_41559_41587[(1)] = (13));
} else
{var statearr_41560_41588 = state_41549__$1;(statearr_41560_41588[(1)] = (14));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (2)))
{var inst_41512 = cljs.core.reset_BANG_(dctr,cnt);var inst_41513 = (0);var state_41549__$1 = (function (){var statearr_41561 = state_41549;(statearr_41561[(9)] = inst_41512);
(statearr_41561[(7)] = inst_41513);
return statearr_41561;
})();var statearr_41562_41589 = state_41549__$1;(statearr_41562_41589[(2)] = null);
(statearr_41562_41589[(1)] = (4));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (11)))
{var inst_41513 = (state_41549[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41549,(10),Object,null,(9));var inst_41522 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_41513) : chs__$1.call(null,inst_41513));var inst_41523 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_41513) : done.call(null,inst_41513));var inst_41524 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_41522,inst_41523);var state_41549__$1 = state_41549;var statearr_41563_41590 = state_41549__$1;(statearr_41563_41590[(2)] = inst_41524);
cljs.core.async.impl.ioc_helpers.process_exception(state_41549__$1);
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (9)))
{var inst_41513 = (state_41549[(7)]);var inst_41526 = (state_41549[(2)]);var inst_41527 = (inst_41513 + (1));var inst_41513__$1 = inst_41527;var state_41549__$1 = (function (){var statearr_41564 = state_41549;(statearr_41564[(10)] = inst_41526);
(statearr_41564[(7)] = inst_41513__$1);
return statearr_41564;
})();var statearr_41565_41591 = state_41549__$1;(statearr_41565_41591[(2)] = null);
(statearr_41565_41591[(1)] = (4));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (5)))
{var inst_41533 = (state_41549[(2)]);var state_41549__$1 = (function (){var statearr_41566 = state_41549;(statearr_41566[(11)] = inst_41533);
return statearr_41566;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41549__$1,(12),dchan);
} else
{if((state_val_41550 === (14)))
{var inst_41535 = (state_41549[(8)]);var inst_41540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_41535);var state_41549__$1 = state_41549;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41549__$1,(16),out,inst_41540);
} else
{if((state_val_41550 === (16)))
{var inst_41542 = (state_41549[(2)]);var state_41549__$1 = (function (){var statearr_41567 = state_41549;(statearr_41567[(12)] = inst_41542);
return statearr_41567;
})();var statearr_41568_41592 = state_41549__$1;(statearr_41568_41592[(2)] = null);
(statearr_41568_41592[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (10)))
{var inst_41517 = (state_41549[(2)]);var inst_41518 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_41549__$1 = (function (){var statearr_41569 = state_41549;(statearr_41569[(13)] = inst_41517);
return statearr_41569;
})();var statearr_41570_41593 = state_41549__$1;(statearr_41570_41593[(2)] = inst_41518);
cljs.core.async.impl.ioc_helpers.process_exception(state_41549__$1);
return cljs.core.constant$keyword$781;
} else
{if((state_val_41550 === (8)))
{var inst_41531 = (state_41549[(2)]);var state_41549__$1 = state_41549;var statearr_41571_41594 = state_41549__$1;(statearr_41571_41594[(2)] = inst_41531);
(statearr_41571_41594[(1)] = (5));
return cljs.core.constant$keyword$781;
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
});})(c__5693__auto___41579,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___41579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41575[(0)] = state_machine__5679__auto__);
(statearr_41575[(1)] = (1));
return statearr_41575;
});
var state_machine__5679__auto____1 = (function (state_41549){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41549);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41576){if((e41576 instanceof Object))
{var ex__5682__auto__ = e41576;var statearr_41577_41595 = state_41549;(statearr_41577_41595[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41549);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e41576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__41596 = state_41549;
state_41549 = G__41596;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41549){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41579,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_41578 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41579);
return statearr_41578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41579,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41704,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41704,out){
return (function (state_41680){var state_val_41681 = (state_41680[(1)]);if((state_val_41681 === (7)))
{var inst_41660 = (state_41680[(7)]);var inst_41659 = (state_41680[(8)]);var inst_41659__$1 = (state_41680[(2)]);var inst_41660__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41659__$1,(0),null);var inst_41661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41659__$1,(1),null);var inst_41662 = (inst_41660__$1 == null);var state_41680__$1 = (function (){var statearr_41682 = state_41680;(statearr_41682[(7)] = inst_41660__$1);
(statearr_41682[(9)] = inst_41661);
(statearr_41682[(8)] = inst_41659__$1);
return statearr_41682;
})();if(cljs.core.truth_(inst_41662))
{var statearr_41683_41705 = state_41680__$1;(statearr_41683_41705[(1)] = (8));
} else
{var statearr_41684_41706 = state_41680__$1;(statearr_41684_41706[(1)] = (9));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41681 === (1)))
{var inst_41651 = cljs.core.vec(chs);var inst_41652 = inst_41651;var state_41680__$1 = (function (){var statearr_41685 = state_41680;(statearr_41685[(10)] = inst_41652);
return statearr_41685;
})();var statearr_41686_41707 = state_41680__$1;(statearr_41686_41707[(2)] = null);
(statearr_41686_41707[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41681 === (4)))
{var inst_41652 = (state_41680[(10)]);var state_41680__$1 = state_41680;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_41680__$1,(7),inst_41652);
} else
{if((state_val_41681 === (6)))
{var inst_41676 = (state_41680[(2)]);var state_41680__$1 = state_41680;var statearr_41687_41708 = state_41680__$1;(statearr_41687_41708[(2)] = inst_41676);
(statearr_41687_41708[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41681 === (3)))
{var inst_41678 = (state_41680[(2)]);var state_41680__$1 = state_41680;return cljs.core.async.impl.ioc_helpers.return_chan(state_41680__$1,inst_41678);
} else
{if((state_val_41681 === (2)))
{var inst_41652 = (state_41680[(10)]);var inst_41654 = cljs.core.count(inst_41652);var inst_41655 = (inst_41654 > (0));var state_41680__$1 = state_41680;if(cljs.core.truth_(inst_41655))
{var statearr_41689_41709 = state_41680__$1;(statearr_41689_41709[(1)] = (4));
} else
{var statearr_41690_41710 = state_41680__$1;(statearr_41690_41710[(1)] = (5));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41681 === (11)))
{var inst_41652 = (state_41680[(10)]);var inst_41669 = (state_41680[(2)]);var tmp41688 = inst_41652;var inst_41652__$1 = tmp41688;var state_41680__$1 = (function (){var statearr_41691 = state_41680;(statearr_41691[(10)] = inst_41652__$1);
(statearr_41691[(11)] = inst_41669);
return statearr_41691;
})();var statearr_41692_41711 = state_41680__$1;(statearr_41692_41711[(2)] = null);
(statearr_41692_41711[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41681 === (9)))
{var inst_41660 = (state_41680[(7)]);var state_41680__$1 = state_41680;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41680__$1,(11),out,inst_41660);
} else
{if((state_val_41681 === (5)))
{var inst_41674 = cljs.core.async.close_BANG_(out);var state_41680__$1 = state_41680;var statearr_41693_41712 = state_41680__$1;(statearr_41693_41712[(2)] = inst_41674);
(statearr_41693_41712[(1)] = (6));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41681 === (10)))
{var inst_41672 = (state_41680[(2)]);var state_41680__$1 = state_41680;var statearr_41694_41713 = state_41680__$1;(statearr_41694_41713[(2)] = inst_41672);
(statearr_41694_41713[(1)] = (6));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41681 === (8)))
{var inst_41652 = (state_41680[(10)]);var inst_41660 = (state_41680[(7)]);var inst_41661 = (state_41680[(9)]);var inst_41659 = (state_41680[(8)]);var inst_41664 = (function (){var c = inst_41661;var v = inst_41660;var vec__41657 = inst_41659;var cs = inst_41652;return ((function (c,v,vec__41657,cs,inst_41652,inst_41660,inst_41661,inst_41659,state_val_41681,c__5693__auto___41704,out){
return (function (p1__41597_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__41597_SHARP_);
});
;})(c,v,vec__41657,cs,inst_41652,inst_41660,inst_41661,inst_41659,state_val_41681,c__5693__auto___41704,out))
})();var inst_41665 = cljs.core.filterv(inst_41664,inst_41652);var inst_41652__$1 = inst_41665;var state_41680__$1 = (function (){var statearr_41695 = state_41680;(statearr_41695[(10)] = inst_41652__$1);
return statearr_41695;
})();var statearr_41696_41714 = state_41680__$1;(statearr_41696_41714[(2)] = null);
(statearr_41696_41714[(1)] = (2));
return cljs.core.constant$keyword$781;
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
});})(c__5693__auto___41704,out))
;return ((function (switch__5678__auto__,c__5693__auto___41704,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41700 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41700[(0)] = state_machine__5679__auto__);
(statearr_41700[(1)] = (1));
return statearr_41700;
});
var state_machine__5679__auto____1 = (function (state_41680){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41680);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41701){if((e41701 instanceof Object))
{var ex__5682__auto__ = e41701;var statearr_41702_41715 = state_41680;(statearr_41702_41715[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41680);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e41701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__41716 = state_41680;
state_41680 = G__41716;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41680){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41704,out))
})();var state__5695__auto__ = (function (){var statearr_41703 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41704);
return statearr_41703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41704,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41809,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41809,out){
return (function (state_41786){var state_val_41787 = (state_41786[(1)]);if((state_val_41787 === (7)))
{var inst_41768 = (state_41786[(7)]);var inst_41768__$1 = (state_41786[(2)]);var inst_41769 = (inst_41768__$1 == null);var inst_41770 = cljs.core.not(inst_41769);var state_41786__$1 = (function (){var statearr_41788 = state_41786;(statearr_41788[(7)] = inst_41768__$1);
return statearr_41788;
})();if(inst_41770)
{var statearr_41789_41810 = state_41786__$1;(statearr_41789_41810[(1)] = (8));
} else
{var statearr_41790_41811 = state_41786__$1;(statearr_41790_41811[(1)] = (9));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41787 === (1)))
{var inst_41763 = (0);var state_41786__$1 = (function (){var statearr_41791 = state_41786;(statearr_41791[(8)] = inst_41763);
return statearr_41791;
})();var statearr_41792_41812 = state_41786__$1;(statearr_41792_41812[(2)] = null);
(statearr_41792_41812[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41787 === (4)))
{var state_41786__$1 = state_41786;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41786__$1,(7),ch);
} else
{if((state_val_41787 === (6)))
{var inst_41781 = (state_41786[(2)]);var state_41786__$1 = state_41786;var statearr_41793_41813 = state_41786__$1;(statearr_41793_41813[(2)] = inst_41781);
(statearr_41793_41813[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41787 === (3)))
{var inst_41783 = (state_41786[(2)]);var inst_41784 = cljs.core.async.close_BANG_(out);var state_41786__$1 = (function (){var statearr_41794 = state_41786;(statearr_41794[(9)] = inst_41783);
return statearr_41794;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_41786__$1,inst_41784);
} else
{if((state_val_41787 === (2)))
{var inst_41763 = (state_41786[(8)]);var inst_41765 = (inst_41763 < n);var state_41786__$1 = state_41786;if(cljs.core.truth_(inst_41765))
{var statearr_41795_41814 = state_41786__$1;(statearr_41795_41814[(1)] = (4));
} else
{var statearr_41796_41815 = state_41786__$1;(statearr_41796_41815[(1)] = (5));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41787 === (11)))
{var inst_41763 = (state_41786[(8)]);var inst_41773 = (state_41786[(2)]);var inst_41774 = (inst_41763 + (1));var inst_41763__$1 = inst_41774;var state_41786__$1 = (function (){var statearr_41797 = state_41786;(statearr_41797[(10)] = inst_41773);
(statearr_41797[(8)] = inst_41763__$1);
return statearr_41797;
})();var statearr_41798_41816 = state_41786__$1;(statearr_41798_41816[(2)] = null);
(statearr_41798_41816[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41787 === (9)))
{var state_41786__$1 = state_41786;var statearr_41799_41817 = state_41786__$1;(statearr_41799_41817[(2)] = null);
(statearr_41799_41817[(1)] = (10));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41787 === (5)))
{var state_41786__$1 = state_41786;var statearr_41800_41818 = state_41786__$1;(statearr_41800_41818[(2)] = null);
(statearr_41800_41818[(1)] = (6));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41787 === (10)))
{var inst_41778 = (state_41786[(2)]);var state_41786__$1 = state_41786;var statearr_41801_41819 = state_41786__$1;(statearr_41801_41819[(2)] = inst_41778);
(statearr_41801_41819[(1)] = (6));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41787 === (8)))
{var inst_41768 = (state_41786[(7)]);var state_41786__$1 = state_41786;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41786__$1,(11),out,inst_41768);
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
});})(c__5693__auto___41809,out))
;return ((function (switch__5678__auto__,c__5693__auto___41809,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41805 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_41805[(0)] = state_machine__5679__auto__);
(statearr_41805[(1)] = (1));
return statearr_41805;
});
var state_machine__5679__auto____1 = (function (state_41786){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41786);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41806){if((e41806 instanceof Object))
{var ex__5682__auto__ = e41806;var statearr_41807_41820 = state_41786;(statearr_41807_41820[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41786);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e41806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__41821 = state_41786;
state_41786 = G__41821;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41786){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41809,out))
})();var state__5695__auto__ = (function (){var statearr_41808 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41809);
return statearr_41808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41809,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41918,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41918,out){
return (function (state_41893){var state_val_41894 = (state_41893[(1)]);if((state_val_41894 === (7)))
{var inst_41888 = (state_41893[(2)]);var state_41893__$1 = state_41893;var statearr_41895_41919 = state_41893__$1;(statearr_41895_41919[(2)] = inst_41888);
(statearr_41895_41919[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41894 === (1)))
{var inst_41870 = null;var state_41893__$1 = (function (){var statearr_41896 = state_41893;(statearr_41896[(7)] = inst_41870);
return statearr_41896;
})();var statearr_41897_41920 = state_41893__$1;(statearr_41897_41920[(2)] = null);
(statearr_41897_41920[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41894 === (4)))
{var inst_41873 = (state_41893[(8)]);var inst_41873__$1 = (state_41893[(2)]);var inst_41874 = (inst_41873__$1 == null);var inst_41875 = cljs.core.not(inst_41874);var state_41893__$1 = (function (){var statearr_41898 = state_41893;(statearr_41898[(8)] = inst_41873__$1);
return statearr_41898;
})();if(inst_41875)
{var statearr_41899_41921 = state_41893__$1;(statearr_41899_41921[(1)] = (5));
} else
{var statearr_41900_41922 = state_41893__$1;(statearr_41900_41922[(1)] = (6));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41894 === (6)))
{var state_41893__$1 = state_41893;var statearr_41901_41923 = state_41893__$1;(statearr_41901_41923[(2)] = null);
(statearr_41901_41923[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41894 === (3)))
{var inst_41890 = (state_41893[(2)]);var inst_41891 = cljs.core.async.close_BANG_(out);var state_41893__$1 = (function (){var statearr_41902 = state_41893;(statearr_41902[(9)] = inst_41890);
return statearr_41902;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_41893__$1,inst_41891);
} else
{if((state_val_41894 === (2)))
{var state_41893__$1 = state_41893;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41893__$1,(4),ch);
} else
{if((state_val_41894 === (11)))
{var inst_41873 = (state_41893[(8)]);var inst_41882 = (state_41893[(2)]);var inst_41870 = inst_41873;var state_41893__$1 = (function (){var statearr_41903 = state_41893;(statearr_41903[(7)] = inst_41870);
(statearr_41903[(10)] = inst_41882);
return statearr_41903;
})();var statearr_41904_41924 = state_41893__$1;(statearr_41904_41924[(2)] = null);
(statearr_41904_41924[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41894 === (9)))
{var inst_41873 = (state_41893[(8)]);var state_41893__$1 = state_41893;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41893__$1,(11),out,inst_41873);
} else
{if((state_val_41894 === (5)))
{var inst_41873 = (state_41893[(8)]);var inst_41870 = (state_41893[(7)]);var inst_41877 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41873,inst_41870);var state_41893__$1 = state_41893;if(inst_41877)
{var statearr_41906_41925 = state_41893__$1;(statearr_41906_41925[(1)] = (8));
} else
{var statearr_41907_41926 = state_41893__$1;(statearr_41907_41926[(1)] = (9));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_41894 === (10)))
{var inst_41885 = (state_41893[(2)]);var state_41893__$1 = state_41893;var statearr_41908_41927 = state_41893__$1;(statearr_41908_41927[(2)] = inst_41885);
(statearr_41908_41927[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_41894 === (8)))
{var inst_41870 = (state_41893[(7)]);var tmp41905 = inst_41870;var inst_41870__$1 = tmp41905;var state_41893__$1 = (function (){var statearr_41909 = state_41893;(statearr_41909[(7)] = inst_41870__$1);
return statearr_41909;
})();var statearr_41910_41928 = state_41893__$1;(statearr_41910_41928[(2)] = null);
(statearr_41910_41928[(1)] = (2));
return cljs.core.constant$keyword$781;
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
});})(c__5693__auto___41918,out))
;return ((function (switch__5678__auto__,c__5693__auto___41918,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41914 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_41914[(0)] = state_machine__5679__auto__);
(statearr_41914[(1)] = (1));
return statearr_41914;
});
var state_machine__5679__auto____1 = (function (state_41893){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41893);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41915){if((e41915 instanceof Object))
{var ex__5682__auto__ = e41915;var statearr_41916_41929 = state_41893;(statearr_41916_41929[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41893);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e41915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__41930 = state_41893;
state_41893 = G__41930;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41893){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41918,out))
})();var state__5695__auto__ = (function (){var statearr_41917 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41918);
return statearr_41917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41918,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___42065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42065,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42065,out){
return (function (state_42035){var state_val_42036 = (state_42035[(1)]);if((state_val_42036 === (7)))
{var inst_42031 = (state_42035[(2)]);var state_42035__$1 = state_42035;var statearr_42037_42066 = state_42035__$1;(statearr_42037_42066[(2)] = inst_42031);
(statearr_42037_42066[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42036 === (1)))
{var inst_41998 = (new Array(n));var inst_41999 = inst_41998;var inst_42000 = (0);var state_42035__$1 = (function (){var statearr_42038 = state_42035;(statearr_42038[(7)] = inst_42000);
(statearr_42038[(8)] = inst_41999);
return statearr_42038;
})();var statearr_42039_42067 = state_42035__$1;(statearr_42039_42067[(2)] = null);
(statearr_42039_42067[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42036 === (4)))
{var inst_42003 = (state_42035[(9)]);var inst_42003__$1 = (state_42035[(2)]);var inst_42004 = (inst_42003__$1 == null);var inst_42005 = cljs.core.not(inst_42004);var state_42035__$1 = (function (){var statearr_42040 = state_42035;(statearr_42040[(9)] = inst_42003__$1);
return statearr_42040;
})();if(inst_42005)
{var statearr_42041_42068 = state_42035__$1;(statearr_42041_42068[(1)] = (5));
} else
{var statearr_42042_42069 = state_42035__$1;(statearr_42042_42069[(1)] = (6));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_42036 === (15)))
{var inst_42025 = (state_42035[(2)]);var state_42035__$1 = state_42035;var statearr_42043_42070 = state_42035__$1;(statearr_42043_42070[(2)] = inst_42025);
(statearr_42043_42070[(1)] = (14));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42036 === (13)))
{var state_42035__$1 = state_42035;var statearr_42044_42071 = state_42035__$1;(statearr_42044_42071[(2)] = null);
(statearr_42044_42071[(1)] = (14));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42036 === (6)))
{var inst_42000 = (state_42035[(7)]);var inst_42021 = (inst_42000 > (0));var state_42035__$1 = state_42035;if(cljs.core.truth_(inst_42021))
{var statearr_42045_42072 = state_42035__$1;(statearr_42045_42072[(1)] = (12));
} else
{var statearr_42046_42073 = state_42035__$1;(statearr_42046_42073[(1)] = (13));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_42036 === (3)))
{var inst_42033 = (state_42035[(2)]);var state_42035__$1 = state_42035;return cljs.core.async.impl.ioc_helpers.return_chan(state_42035__$1,inst_42033);
} else
{if((state_val_42036 === (12)))
{var inst_41999 = (state_42035[(8)]);var inst_42023 = cljs.core.vec(inst_41999);var state_42035__$1 = state_42035;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42035__$1,(15),out,inst_42023);
} else
{if((state_val_42036 === (2)))
{var state_42035__$1 = state_42035;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42035__$1,(4),ch);
} else
{if((state_val_42036 === (11)))
{var inst_42015 = (state_42035[(2)]);var inst_42016 = (new Array(n));var inst_41999 = inst_42016;var inst_42000 = (0);var state_42035__$1 = (function (){var statearr_42047 = state_42035;(statearr_42047[(7)] = inst_42000);
(statearr_42047[(8)] = inst_41999);
(statearr_42047[(10)] = inst_42015);
return statearr_42047;
})();var statearr_42048_42074 = state_42035__$1;(statearr_42048_42074[(2)] = null);
(statearr_42048_42074[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42036 === (9)))
{var inst_41999 = (state_42035[(8)]);var inst_42013 = cljs.core.vec(inst_41999);var state_42035__$1 = state_42035;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42035__$1,(11),out,inst_42013);
} else
{if((state_val_42036 === (5)))
{var inst_42000 = (state_42035[(7)]);var inst_42003 = (state_42035[(9)]);var inst_42008 = (state_42035[(11)]);var inst_41999 = (state_42035[(8)]);var inst_42007 = (inst_41999[inst_42000] = inst_42003);var inst_42008__$1 = (inst_42000 + (1));var inst_42009 = (inst_42008__$1 < n);var state_42035__$1 = (function (){var statearr_42049 = state_42035;(statearr_42049[(12)] = inst_42007);
(statearr_42049[(11)] = inst_42008__$1);
return statearr_42049;
})();if(cljs.core.truth_(inst_42009))
{var statearr_42050_42075 = state_42035__$1;(statearr_42050_42075[(1)] = (8));
} else
{var statearr_42051_42076 = state_42035__$1;(statearr_42051_42076[(1)] = (9));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_42036 === (14)))
{var inst_42028 = (state_42035[(2)]);var inst_42029 = cljs.core.async.close_BANG_(out);var state_42035__$1 = (function (){var statearr_42053 = state_42035;(statearr_42053[(13)] = inst_42028);
return statearr_42053;
})();var statearr_42054_42077 = state_42035__$1;(statearr_42054_42077[(2)] = inst_42029);
(statearr_42054_42077[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42036 === (10)))
{var inst_42019 = (state_42035[(2)]);var state_42035__$1 = state_42035;var statearr_42055_42078 = state_42035__$1;(statearr_42055_42078[(2)] = inst_42019);
(statearr_42055_42078[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42036 === (8)))
{var inst_42008 = (state_42035[(11)]);var inst_41999 = (state_42035[(8)]);var tmp42052 = inst_41999;var inst_41999__$1 = tmp42052;var inst_42000 = inst_42008;var state_42035__$1 = (function (){var statearr_42056 = state_42035;(statearr_42056[(7)] = inst_42000);
(statearr_42056[(8)] = inst_41999__$1);
return statearr_42056;
})();var statearr_42057_42079 = state_42035__$1;(statearr_42057_42079[(2)] = null);
(statearr_42057_42079[(1)] = (2));
return cljs.core.constant$keyword$781;
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
});})(c__5693__auto___42065,out))
;return ((function (switch__5678__auto__,c__5693__auto___42065,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42061[(0)] = state_machine__5679__auto__);
(statearr_42061[(1)] = (1));
return statearr_42061;
});
var state_machine__5679__auto____1 = (function (state_42035){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42035);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42062){if((e42062 instanceof Object))
{var ex__5682__auto__ = e42062;var statearr_42063_42080 = state_42035;(statearr_42063_42080[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42035);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e42062;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__42081 = state_42035;
state_42035 = G__42081;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42035){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42065,out))
})();var state__5695__auto__ = (function (){var statearr_42064 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42065);
return statearr_42064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42065,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___42224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42224,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42224,out){
return (function (state_42194){var state_val_42195 = (state_42194[(1)]);if((state_val_42195 === (7)))
{var inst_42190 = (state_42194[(2)]);var state_42194__$1 = state_42194;var statearr_42196_42225 = state_42194__$1;(statearr_42196_42225[(2)] = inst_42190);
(statearr_42196_42225[(1)] = (3));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42195 === (1)))
{var inst_42153 = [];var inst_42154 = inst_42153;var inst_42155 = cljs.core.constant$keyword$794;var state_42194__$1 = (function (){var statearr_42197 = state_42194;(statearr_42197[(7)] = inst_42155);
(statearr_42197[(8)] = inst_42154);
return statearr_42197;
})();var statearr_42198_42226 = state_42194__$1;(statearr_42198_42226[(2)] = null);
(statearr_42198_42226[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42195 === (4)))
{var inst_42158 = (state_42194[(9)]);var inst_42158__$1 = (state_42194[(2)]);var inst_42159 = (inst_42158__$1 == null);var inst_42160 = cljs.core.not(inst_42159);var state_42194__$1 = (function (){var statearr_42199 = state_42194;(statearr_42199[(9)] = inst_42158__$1);
return statearr_42199;
})();if(inst_42160)
{var statearr_42200_42227 = state_42194__$1;(statearr_42200_42227[(1)] = (5));
} else
{var statearr_42201_42228 = state_42194__$1;(statearr_42201_42228[(1)] = (6));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_42195 === (15)))
{var inst_42184 = (state_42194[(2)]);var state_42194__$1 = state_42194;var statearr_42202_42229 = state_42194__$1;(statearr_42202_42229[(2)] = inst_42184);
(statearr_42202_42229[(1)] = (14));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42195 === (13)))
{var state_42194__$1 = state_42194;var statearr_42203_42230 = state_42194__$1;(statearr_42203_42230[(2)] = null);
(statearr_42203_42230[(1)] = (14));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42195 === (6)))
{var inst_42154 = (state_42194[(8)]);var inst_42179 = inst_42154.length;var inst_42180 = (inst_42179 > (0));var state_42194__$1 = state_42194;if(cljs.core.truth_(inst_42180))
{var statearr_42204_42231 = state_42194__$1;(statearr_42204_42231[(1)] = (12));
} else
{var statearr_42205_42232 = state_42194__$1;(statearr_42205_42232[(1)] = (13));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_42195 === (3)))
{var inst_42192 = (state_42194[(2)]);var state_42194__$1 = state_42194;return cljs.core.async.impl.ioc_helpers.return_chan(state_42194__$1,inst_42192);
} else
{if((state_val_42195 === (12)))
{var inst_42154 = (state_42194[(8)]);var inst_42182 = cljs.core.vec(inst_42154);var state_42194__$1 = state_42194;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42194__$1,(15),out,inst_42182);
} else
{if((state_val_42195 === (2)))
{var state_42194__$1 = state_42194;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42194__$1,(4),ch);
} else
{if((state_val_42195 === (11)))
{var inst_42158 = (state_42194[(9)]);var inst_42162 = (state_42194[(10)]);var inst_42172 = (state_42194[(2)]);var inst_42173 = [];var inst_42174 = inst_42173.push(inst_42158);var inst_42154 = inst_42173;var inst_42155 = inst_42162;var state_42194__$1 = (function (){var statearr_42206 = state_42194;(statearr_42206[(11)] = inst_42172);
(statearr_42206[(7)] = inst_42155);
(statearr_42206[(12)] = inst_42174);
(statearr_42206[(8)] = inst_42154);
return statearr_42206;
})();var statearr_42207_42233 = state_42194__$1;(statearr_42207_42233[(2)] = null);
(statearr_42207_42233[(1)] = (2));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42195 === (9)))
{var inst_42154 = (state_42194[(8)]);var inst_42170 = cljs.core.vec(inst_42154);var state_42194__$1 = state_42194;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42194__$1,(11),out,inst_42170);
} else
{if((state_val_42195 === (5)))
{var inst_42155 = (state_42194[(7)]);var inst_42158 = (state_42194[(9)]);var inst_42162 = (state_42194[(10)]);var inst_42162__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42158) : f.call(null,inst_42158));var inst_42163 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42162__$1,inst_42155);var inst_42164 = cljs.core.keyword_identical_QMARK_(inst_42155,cljs.core.constant$keyword$794);var inst_42165 = (inst_42163) || (inst_42164);var state_42194__$1 = (function (){var statearr_42208 = state_42194;(statearr_42208[(10)] = inst_42162__$1);
return statearr_42208;
})();if(cljs.core.truth_(inst_42165))
{var statearr_42209_42234 = state_42194__$1;(statearr_42209_42234[(1)] = (8));
} else
{var statearr_42210_42235 = state_42194__$1;(statearr_42210_42235[(1)] = (9));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_42195 === (14)))
{var inst_42187 = (state_42194[(2)]);var inst_42188 = cljs.core.async.close_BANG_(out);var state_42194__$1 = (function (){var statearr_42212 = state_42194;(statearr_42212[(13)] = inst_42187);
return statearr_42212;
})();var statearr_42213_42236 = state_42194__$1;(statearr_42213_42236[(2)] = inst_42188);
(statearr_42213_42236[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42195 === (10)))
{var inst_42177 = (state_42194[(2)]);var state_42194__$1 = state_42194;var statearr_42214_42237 = state_42194__$1;(statearr_42214_42237[(2)] = inst_42177);
(statearr_42214_42237[(1)] = (7));
return cljs.core.constant$keyword$781;
} else
{if((state_val_42195 === (8)))
{var inst_42158 = (state_42194[(9)]);var inst_42162 = (state_42194[(10)]);var inst_42154 = (state_42194[(8)]);var inst_42167 = inst_42154.push(inst_42158);var tmp42211 = inst_42154;var inst_42154__$1 = tmp42211;var inst_42155 = inst_42162;var state_42194__$1 = (function (){var statearr_42215 = state_42194;(statearr_42215[(14)] = inst_42167);
(statearr_42215[(7)] = inst_42155);
(statearr_42215[(8)] = inst_42154__$1);
return statearr_42215;
})();var statearr_42216_42238 = state_42194__$1;(statearr_42216_42238[(2)] = null);
(statearr_42216_42238[(1)] = (2));
return cljs.core.constant$keyword$781;
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
});})(c__5693__auto___42224,out))
;return ((function (switch__5678__auto__,c__5693__auto___42224,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42220[(0)] = state_machine__5679__auto__);
(statearr_42220[(1)] = (1));
return statearr_42220;
});
var state_machine__5679__auto____1 = (function (state_42194){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42194);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42221){if((e42221 instanceof Object))
{var ex__5682__auto__ = e42221;var statearr_42222_42239 = state_42194;(statearr_42222_42239[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42194);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e42221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__42240 = state_42194;
state_42194 = G__42240;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42194){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42224,out))
})();var state__5695__auto__ = (function (){var statearr_42223 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42224);
return statearr_42223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42224,out))
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
