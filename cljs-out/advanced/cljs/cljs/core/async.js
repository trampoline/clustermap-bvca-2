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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t40971 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40971 = (function (f,fn_handler,meta40972){
this.f = f;
this.fn_handler = fn_handler;
this.meta40972 = meta40972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40971.cljs$lang$type = true;
cljs.core.async.t40971.cljs$lang$ctorStr = "cljs.core.async/t40971";
cljs.core.async.t40971.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40971");
});
cljs.core.async.t40971.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t40971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t40971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40973){var self__ = this;
var _40973__$1 = this;return self__.meta40972;
});
cljs.core.async.t40971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40973,meta40972__$1){var self__ = this;
var _40973__$1 = this;return (new cljs.core.async.t40971(self__.f,self__.fn_handler,meta40972__$1));
});
cljs.core.async.__GT_t40971 = (function __GT_t40971(f__$1,fn_handler__$1,meta40972){return (new cljs.core.async.t40971(f__$1,fn_handler__$1,meta40972));
});
}
return (new cljs.core.async.t40971(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__40975 = buff;if(G__40975)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__40975.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__40975.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40975);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40975);
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
{var val_40976 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40976) : fn1.call(null,val_40976));
} else
{cljs.core.async.impl.dispatch.run(((function (val_40976,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40976) : fn1.call(null,val_40976));
});})(val_40976,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___40977 = n;var x_40978 = (0);while(true){
if((x_40978 < n__4399__auto___40977))
{(a[x_40978] = (0));
{
var G__40979 = (x_40978 + (1));
x_40978 = G__40979;
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
var G__40980 = (i + (1));
i = G__40980;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t40984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40984 = (function (flag,alt_flag,meta40985){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta40985 = meta40985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40984.cljs$lang$type = true;
cljs.core.async.t40984.cljs$lang$ctorStr = "cljs.core.async/t40984";
cljs.core.async.t40984.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40984");
});})(flag))
;
cljs.core.async.t40984.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t40984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t40984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40986){var self__ = this;
var _40986__$1 = this;return self__.meta40985;
});})(flag))
;
cljs.core.async.t40984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40986,meta40985__$1){var self__ = this;
var _40986__$1 = this;return (new cljs.core.async.t40984(self__.flag,self__.alt_flag,meta40985__$1));
});})(flag))
;
cljs.core.async.__GT_t40984 = ((function (flag){
return (function __GT_t40984(flag__$1,alt_flag__$1,meta40985){return (new cljs.core.async.t40984(flag__$1,alt_flag__$1,meta40985));
});})(flag))
;
}
return (new cljs.core.async.t40984(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t40990 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40990 = (function (cb,flag,alt_handler,meta40991){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta40991 = meta40991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40990.cljs$lang$type = true;
cljs.core.async.t40990.cljs$lang$ctorStr = "cljs.core.async/t40990";
cljs.core.async.t40990.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40990");
});
cljs.core.async.t40990.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t40990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t40990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40992){var self__ = this;
var _40992__$1 = this;return self__.meta40991;
});
cljs.core.async.t40990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40992,meta40991__$1){var self__ = this;
var _40992__$1 = this;return (new cljs.core.async.t40990(self__.cb,self__.flag,self__.alt_handler,meta40991__$1));
});
cljs.core.async.__GT_t40990 = (function __GT_t40990(cb__$1,flag__$1,alt_handler__$1,meta40991){return (new cljs.core.async.t40990(cb__$1,flag__$1,alt_handler__$1,meta40991));
});
}
return (new cljs.core.async.t40990(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$779.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40993_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40993_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40993_SHARP_,port], null)));
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
var G__40994 = (i + (1));
i = G__40994;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$765))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3531__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$765.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$765], null));
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
var alts_BANG___delegate = function (ports,p__40995){var map__40997 = p__40995;var map__40997__$1 = ((cljs.core.seq_QMARK_(map__40997))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40997):map__40997);var opts = map__40997__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__40995 = null;if (arguments.length > 1) {
  p__40995 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__40995);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__40998){
var ports = cljs.core.first(arglist__40998);
var p__40995 = cljs.core.rest(arglist__40998);
return alts_BANG___delegate(ports,p__40995);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t41006 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41006 = (function (ch,f,map_LT_,meta41007){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41007 = meta41007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41006.cljs$lang$type = true;
cljs.core.async.t41006.cljs$lang$ctorStr = "cljs.core.async/t41006";
cljs.core.async.t41006.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41006");
});
cljs.core.async.t41006.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41006.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t41006.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41006.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t41009 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41009 = (function (fn1,_,meta41007,ch,f,map_LT_,meta41010){
this.fn1 = fn1;
this._ = _;
this.meta41007 = meta41007;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41010 = meta41010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41009.cljs$lang$type = true;
cljs.core.async.t41009.cljs$lang$ctorStr = "cljs.core.async/t41009";
cljs.core.async.t41009.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41009");
});})(___$1))
;
cljs.core.async.t41009.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t41009.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t41009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__40999_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__40999_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40999_SHARP_) : self__.f.call(null,p1__40999_SHARP_)))) : f1.call(null,(((p1__40999_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40999_SHARP_) : self__.f.call(null,p1__40999_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t41009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41011){var self__ = this;
var _41011__$1 = this;return self__.meta41010;
});})(___$1))
;
cljs.core.async.t41009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41011,meta41010__$1){var self__ = this;
var _41011__$1 = this;return (new cljs.core.async.t41009(self__.fn1,self__._,self__.meta41007,self__.ch,self__.f,self__.map_LT_,meta41010__$1));
});})(___$1))
;
cljs.core.async.__GT_t41009 = ((function (___$1){
return (function __GT_t41009(fn1__$1,___$2,meta41007__$1,ch__$2,f__$2,map_LT___$2,meta41010){return (new cljs.core.async.t41009(fn1__$1,___$2,meta41007__$1,ch__$2,f__$2,map_LT___$2,meta41010));
});})(___$1))
;
}
return (new cljs.core.async.t41009(fn1,___$1,self__.meta41007,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t41006.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41006.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t41006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41008){var self__ = this;
var _41008__$1 = this;return self__.meta41007;
});
cljs.core.async.t41006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41008,meta41007__$1){var self__ = this;
var _41008__$1 = this;return (new cljs.core.async.t41006(self__.ch,self__.f,self__.map_LT_,meta41007__$1));
});
cljs.core.async.__GT_t41006 = (function __GT_t41006(ch__$1,f__$1,map_LT___$1,meta41007){return (new cljs.core.async.t41006(ch__$1,f__$1,map_LT___$1,meta41007));
});
}
return (new cljs.core.async.t41006(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t41015 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41015 = (function (ch,f,map_GT_,meta41016){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta41016 = meta41016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41015.cljs$lang$type = true;
cljs.core.async.t41015.cljs$lang$ctorStr = "cljs.core.async/t41015";
cljs.core.async.t41015.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41015");
});
cljs.core.async.t41015.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41015.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t41015.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41015.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t41015.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41015.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t41015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41017){var self__ = this;
var _41017__$1 = this;return self__.meta41016;
});
cljs.core.async.t41015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41017,meta41016__$1){var self__ = this;
var _41017__$1 = this;return (new cljs.core.async.t41015(self__.ch,self__.f,self__.map_GT_,meta41016__$1));
});
cljs.core.async.__GT_t41015 = (function __GT_t41015(ch__$1,f__$1,map_GT___$1,meta41016){return (new cljs.core.async.t41015(ch__$1,f__$1,map_GT___$1,meta41016));
});
}
return (new cljs.core.async.t41015(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t41021 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41021 = (function (ch,p,filter_GT_,meta41022){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta41022 = meta41022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41021.cljs$lang$type = true;
cljs.core.async.t41021.cljs$lang$ctorStr = "cljs.core.async/t41021";
cljs.core.async.t41021.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41021");
});
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t41021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41023){var self__ = this;
var _41023__$1 = this;return self__.meta41022;
});
cljs.core.async.t41021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41023,meta41022__$1){var self__ = this;
var _41023__$1 = this;return (new cljs.core.async.t41021(self__.ch,self__.p,self__.filter_GT_,meta41022__$1));
});
cljs.core.async.__GT_t41021 = (function __GT_t41021(ch__$1,p__$1,filter_GT___$1,meta41022){return (new cljs.core.async.t41021(ch__$1,p__$1,filter_GT___$1,meta41022));
});
}
return (new cljs.core.async.t41021(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41106,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41106,out){
return (function (state_41085){var state_val_41086 = (state_41085[(1)]);if((state_val_41086 === (7)))
{var inst_41081 = (state_41085[(2)]);var state_41085__$1 = state_41085;var statearr_41087_41107 = state_41085__$1;(statearr_41087_41107[(2)] = inst_41081);
(statearr_41087_41107[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41086 === (1)))
{var state_41085__$1 = state_41085;var statearr_41088_41108 = state_41085__$1;(statearr_41088_41108[(2)] = null);
(statearr_41088_41108[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41086 === (4)))
{var inst_41067 = (state_41085[(7)]);var inst_41067__$1 = (state_41085[(2)]);var inst_41068 = (inst_41067__$1 == null);var state_41085__$1 = (function (){var statearr_41089 = state_41085;(statearr_41089[(7)] = inst_41067__$1);
return statearr_41089;
})();if(cljs.core.truth_(inst_41068))
{var statearr_41090_41109 = state_41085__$1;(statearr_41090_41109[(1)] = (5));
} else
{var statearr_41091_41110 = state_41085__$1;(statearr_41091_41110[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41086 === (6)))
{var inst_41067 = (state_41085[(7)]);var inst_41072 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41067) : p.call(null,inst_41067));var state_41085__$1 = state_41085;if(cljs.core.truth_(inst_41072))
{var statearr_41092_41111 = state_41085__$1;(statearr_41092_41111[(1)] = (8));
} else
{var statearr_41093_41112 = state_41085__$1;(statearr_41093_41112[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41086 === (3)))
{var inst_41083 = (state_41085[(2)]);var state_41085__$1 = state_41085;return cljs.core.async.impl.ioc_helpers.return_chan(state_41085__$1,inst_41083);
} else
{if((state_val_41086 === (2)))
{var state_41085__$1 = state_41085;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41085__$1,(4),ch);
} else
{if((state_val_41086 === (11)))
{var inst_41075 = (state_41085[(2)]);var state_41085__$1 = state_41085;var statearr_41094_41113 = state_41085__$1;(statearr_41094_41113[(2)] = inst_41075);
(statearr_41094_41113[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41086 === (9)))
{var state_41085__$1 = state_41085;var statearr_41095_41114 = state_41085__$1;(statearr_41095_41114[(2)] = null);
(statearr_41095_41114[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41086 === (5)))
{var inst_41070 = cljs.core.async.close_BANG_(out);var state_41085__$1 = state_41085;var statearr_41096_41115 = state_41085__$1;(statearr_41096_41115[(2)] = inst_41070);
(statearr_41096_41115[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41086 === (10)))
{var inst_41078 = (state_41085[(2)]);var state_41085__$1 = (function (){var statearr_41097 = state_41085;(statearr_41097[(8)] = inst_41078);
return statearr_41097;
})();var statearr_41098_41116 = state_41085__$1;(statearr_41098_41116[(2)] = null);
(statearr_41098_41116[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41086 === (8)))
{var inst_41067 = (state_41085[(7)]);var state_41085__$1 = state_41085;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41085__$1,(11),out,inst_41067);
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
});})(c__5693__auto___41106,out))
;return ((function (switch__5678__auto__,c__5693__auto___41106,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41102 = [null,null,null,null,null,null,null,null,null];(statearr_41102[(0)] = state_machine__5679__auto__);
(statearr_41102[(1)] = (1));
return statearr_41102;
});
var state_machine__5679__auto____1 = (function (state_41085){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41085);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41103){if((e41103 instanceof Object))
{var ex__5682__auto__ = e41103;var statearr_41104_41117 = state_41085;(statearr_41104_41117[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41085);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41118 = state_41085;
state_41085 = G__41118;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41085){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41106,out))
})();var state__5695__auto__ = (function (){var statearr_41105 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41106);
return statearr_41105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41106,out))
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
return (function (state_41270){var state_val_41271 = (state_41270[(1)]);if((state_val_41271 === (7)))
{var inst_41266 = (state_41270[(2)]);var state_41270__$1 = state_41270;var statearr_41272_41309 = state_41270__$1;(statearr_41272_41309[(2)] = inst_41266);
(statearr_41272_41309[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (20)))
{var inst_41241 = (state_41270[(7)]);var inst_41252 = (state_41270[(2)]);var inst_41253 = cljs.core.next(inst_41241);var inst_41227 = inst_41253;var inst_41228 = null;var inst_41229 = (0);var inst_41230 = (0);var state_41270__$1 = (function (){var statearr_41273 = state_41270;(statearr_41273[(8)] = inst_41252);
(statearr_41273[(9)] = inst_41228);
(statearr_41273[(10)] = inst_41227);
(statearr_41273[(11)] = inst_41229);
(statearr_41273[(12)] = inst_41230);
return statearr_41273;
})();var statearr_41274_41310 = state_41270__$1;(statearr_41274_41310[(2)] = null);
(statearr_41274_41310[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (1)))
{var state_41270__$1 = state_41270;var statearr_41275_41311 = state_41270__$1;(statearr_41275_41311[(2)] = null);
(statearr_41275_41311[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (4)))
{var inst_41216 = (state_41270[(13)]);var inst_41216__$1 = (state_41270[(2)]);var inst_41217 = (inst_41216__$1 == null);var state_41270__$1 = (function (){var statearr_41279 = state_41270;(statearr_41279[(13)] = inst_41216__$1);
return statearr_41279;
})();if(cljs.core.truth_(inst_41217))
{var statearr_41280_41312 = state_41270__$1;(statearr_41280_41312[(1)] = (5));
} else
{var statearr_41281_41313 = state_41270__$1;(statearr_41281_41313[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (15)))
{var state_41270__$1 = state_41270;var statearr_41282_41314 = state_41270__$1;(statearr_41282_41314[(2)] = null);
(statearr_41282_41314[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (13)))
{var inst_41228 = (state_41270[(9)]);var inst_41227 = (state_41270[(10)]);var inst_41229 = (state_41270[(11)]);var inst_41230 = (state_41270[(12)]);var inst_41237 = (state_41270[(2)]);var inst_41238 = (inst_41230 + (1));var tmp41276 = inst_41228;var tmp41277 = inst_41227;var tmp41278 = inst_41229;var inst_41227__$1 = tmp41277;var inst_41228__$1 = tmp41276;var inst_41229__$1 = tmp41278;var inst_41230__$1 = inst_41238;var state_41270__$1 = (function (){var statearr_41283 = state_41270;(statearr_41283[(9)] = inst_41228__$1);
(statearr_41283[(10)] = inst_41227__$1);
(statearr_41283[(11)] = inst_41229__$1);
(statearr_41283[(14)] = inst_41237);
(statearr_41283[(12)] = inst_41230__$1);
return statearr_41283;
})();var statearr_41284_41315 = state_41270__$1;(statearr_41284_41315[(2)] = null);
(statearr_41284_41315[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (6)))
{var inst_41216 = (state_41270[(13)]);var inst_41221 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41216) : f.call(null,inst_41216));var inst_41226 = cljs.core.seq(inst_41221);var inst_41227 = inst_41226;var inst_41228 = null;var inst_41229 = (0);var inst_41230 = (0);var state_41270__$1 = (function (){var statearr_41285 = state_41270;(statearr_41285[(9)] = inst_41228);
(statearr_41285[(10)] = inst_41227);
(statearr_41285[(11)] = inst_41229);
(statearr_41285[(12)] = inst_41230);
return statearr_41285;
})();var statearr_41286_41316 = state_41270__$1;(statearr_41286_41316[(2)] = null);
(statearr_41286_41316[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (17)))
{var inst_41241 = (state_41270[(7)]);var inst_41245 = cljs.core.chunk_first(inst_41241);var inst_41246 = cljs.core.chunk_rest(inst_41241);var inst_41247 = cljs.core.count(inst_41245);var inst_41227 = inst_41246;var inst_41228 = inst_41245;var inst_41229 = inst_41247;var inst_41230 = (0);var state_41270__$1 = (function (){var statearr_41287 = state_41270;(statearr_41287[(9)] = inst_41228);
(statearr_41287[(10)] = inst_41227);
(statearr_41287[(11)] = inst_41229);
(statearr_41287[(12)] = inst_41230);
return statearr_41287;
})();var statearr_41288_41317 = state_41270__$1;(statearr_41288_41317[(2)] = null);
(statearr_41288_41317[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (3)))
{var inst_41268 = (state_41270[(2)]);var state_41270__$1 = state_41270;return cljs.core.async.impl.ioc_helpers.return_chan(state_41270__$1,inst_41268);
} else
{if((state_val_41271 === (12)))
{var inst_41261 = (state_41270[(2)]);var state_41270__$1 = state_41270;var statearr_41289_41318 = state_41270__$1;(statearr_41289_41318[(2)] = inst_41261);
(statearr_41289_41318[(1)] = (9));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (2)))
{var state_41270__$1 = state_41270;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41270__$1,(4),in$);
} else
{if((state_val_41271 === (19)))
{var inst_41256 = (state_41270[(2)]);var state_41270__$1 = state_41270;var statearr_41290_41319 = state_41270__$1;(statearr_41290_41319[(2)] = inst_41256);
(statearr_41290_41319[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (11)))
{var inst_41227 = (state_41270[(10)]);var inst_41241 = (state_41270[(7)]);var inst_41241__$1 = cljs.core.seq(inst_41227);var state_41270__$1 = (function (){var statearr_41291 = state_41270;(statearr_41291[(7)] = inst_41241__$1);
return statearr_41291;
})();if(inst_41241__$1)
{var statearr_41292_41320 = state_41270__$1;(statearr_41292_41320[(1)] = (14));
} else
{var statearr_41293_41321 = state_41270__$1;(statearr_41293_41321[(1)] = (15));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (9)))
{var inst_41263 = (state_41270[(2)]);var state_41270__$1 = (function (){var statearr_41294 = state_41270;(statearr_41294[(15)] = inst_41263);
return statearr_41294;
})();var statearr_41295_41322 = state_41270__$1;(statearr_41295_41322[(2)] = null);
(statearr_41295_41322[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (5)))
{var inst_41219 = cljs.core.async.close_BANG_(out);var state_41270__$1 = state_41270;var statearr_41296_41323 = state_41270__$1;(statearr_41296_41323[(2)] = inst_41219);
(statearr_41296_41323[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (14)))
{var inst_41241 = (state_41270[(7)]);var inst_41243 = cljs.core.chunked_seq_QMARK_(inst_41241);var state_41270__$1 = state_41270;if(inst_41243)
{var statearr_41297_41324 = state_41270__$1;(statearr_41297_41324[(1)] = (17));
} else
{var statearr_41298_41325 = state_41270__$1;(statearr_41298_41325[(1)] = (18));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (16)))
{var inst_41259 = (state_41270[(2)]);var state_41270__$1 = state_41270;var statearr_41299_41326 = state_41270__$1;(statearr_41299_41326[(2)] = inst_41259);
(statearr_41299_41326[(1)] = (12));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41271 === (10)))
{var inst_41228 = (state_41270[(9)]);var inst_41230 = (state_41270[(12)]);var inst_41235 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41228,inst_41230);var state_41270__$1 = state_41270;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41270__$1,(13),out,inst_41235);
} else
{if((state_val_41271 === (18)))
{var inst_41241 = (state_41270[(7)]);var inst_41250 = cljs.core.first(inst_41241);var state_41270__$1 = state_41270;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41270__$1,(20),out,inst_41250);
} else
{if((state_val_41271 === (8)))
{var inst_41229 = (state_41270[(11)]);var inst_41230 = (state_41270[(12)]);var inst_41232 = (inst_41230 < inst_41229);var inst_41233 = inst_41232;var state_41270__$1 = state_41270;if(cljs.core.truth_(inst_41233))
{var statearr_41300_41327 = state_41270__$1;(statearr_41300_41327[(1)] = (10));
} else
{var statearr_41301_41328 = state_41270__$1;(statearr_41301_41328[(1)] = (11));
}
return cljs.core.constant$keyword$773;
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
var state_machine__5679__auto____0 = (function (){var statearr_41305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41305[(0)] = state_machine__5679__auto__);
(statearr_41305[(1)] = (1));
return statearr_41305;
});
var state_machine__5679__auto____1 = (function (state_41270){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41270);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41306){if((e41306 instanceof Object))
{var ex__5682__auto__ = e41306;var statearr_41307_41329 = state_41270;(statearr_41307_41329[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41270);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41330 = state_41270;
state_41270 = G__41330;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41270){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_41308 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_41308;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___41411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41411){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41411){
return (function (state_41390){var state_val_41391 = (state_41390[(1)]);if((state_val_41391 === (7)))
{var inst_41386 = (state_41390[(2)]);var state_41390__$1 = state_41390;var statearr_41392_41412 = state_41390__$1;(statearr_41392_41412[(2)] = inst_41386);
(statearr_41392_41412[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41391 === (1)))
{var state_41390__$1 = state_41390;var statearr_41393_41413 = state_41390__$1;(statearr_41393_41413[(2)] = null);
(statearr_41393_41413[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41391 === (4)))
{var inst_41373 = (state_41390[(7)]);var inst_41373__$1 = (state_41390[(2)]);var inst_41374 = (inst_41373__$1 == null);var state_41390__$1 = (function (){var statearr_41394 = state_41390;(statearr_41394[(7)] = inst_41373__$1);
return statearr_41394;
})();if(cljs.core.truth_(inst_41374))
{var statearr_41395_41414 = state_41390__$1;(statearr_41395_41414[(1)] = (5));
} else
{var statearr_41396_41415 = state_41390__$1;(statearr_41396_41415[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41391 === (6)))
{var inst_41373 = (state_41390[(7)]);var state_41390__$1 = state_41390;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41390__$1,(11),to,inst_41373);
} else
{if((state_val_41391 === (3)))
{var inst_41388 = (state_41390[(2)]);var state_41390__$1 = state_41390;return cljs.core.async.impl.ioc_helpers.return_chan(state_41390__$1,inst_41388);
} else
{if((state_val_41391 === (2)))
{var state_41390__$1 = state_41390;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41390__$1,(4),from);
} else
{if((state_val_41391 === (11)))
{var inst_41383 = (state_41390[(2)]);var state_41390__$1 = (function (){var statearr_41397 = state_41390;(statearr_41397[(8)] = inst_41383);
return statearr_41397;
})();var statearr_41398_41416 = state_41390__$1;(statearr_41398_41416[(2)] = null);
(statearr_41398_41416[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41391 === (9)))
{var state_41390__$1 = state_41390;var statearr_41399_41417 = state_41390__$1;(statearr_41399_41417[(2)] = null);
(statearr_41399_41417[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41391 === (5)))
{var state_41390__$1 = state_41390;if(cljs.core.truth_(close_QMARK_))
{var statearr_41400_41418 = state_41390__$1;(statearr_41400_41418[(1)] = (8));
} else
{var statearr_41401_41419 = state_41390__$1;(statearr_41401_41419[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41391 === (10)))
{var inst_41380 = (state_41390[(2)]);var state_41390__$1 = state_41390;var statearr_41402_41420 = state_41390__$1;(statearr_41402_41420[(2)] = inst_41380);
(statearr_41402_41420[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41391 === (8)))
{var inst_41377 = cljs.core.async.close_BANG_(to);var state_41390__$1 = state_41390;var statearr_41403_41421 = state_41390__$1;(statearr_41403_41421[(2)] = inst_41377);
(statearr_41403_41421[(1)] = (10));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___41411))
;return ((function (switch__5678__auto__,c__5693__auto___41411){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41407 = [null,null,null,null,null,null,null,null,null];(statearr_41407[(0)] = state_machine__5679__auto__);
(statearr_41407[(1)] = (1));
return statearr_41407;
});
var state_machine__5679__auto____1 = (function (state_41390){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41390);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41408){if((e41408 instanceof Object))
{var ex__5682__auto__ = e41408;var statearr_41409_41422 = state_41390;(statearr_41409_41422[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41390);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41408;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41423 = state_41390;
state_41390 = G__41423;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41390){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41411))
})();var state__5695__auto__ = (function (){var statearr_41410 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41411);
return statearr_41410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41411))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5693__auto___41510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41510,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41510,tc,fc){
return (function (state_41488){var state_val_41489 = (state_41488[(1)]);if((state_val_41489 === (7)))
{var inst_41484 = (state_41488[(2)]);var state_41488__$1 = state_41488;var statearr_41490_41511 = state_41488__$1;(statearr_41490_41511[(2)] = inst_41484);
(statearr_41490_41511[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41489 === (1)))
{var state_41488__$1 = state_41488;var statearr_41491_41512 = state_41488__$1;(statearr_41491_41512[(2)] = null);
(statearr_41491_41512[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41489 === (4)))
{var inst_41469 = (state_41488[(7)]);var inst_41469__$1 = (state_41488[(2)]);var inst_41470 = (inst_41469__$1 == null);var state_41488__$1 = (function (){var statearr_41492 = state_41488;(statearr_41492[(7)] = inst_41469__$1);
return statearr_41492;
})();if(cljs.core.truth_(inst_41470))
{var statearr_41493_41513 = state_41488__$1;(statearr_41493_41513[(1)] = (5));
} else
{var statearr_41494_41514 = state_41488__$1;(statearr_41494_41514[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41489 === (6)))
{var inst_41469 = (state_41488[(7)]);var inst_41475 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41469) : p.call(null,inst_41469));var state_41488__$1 = state_41488;if(cljs.core.truth_(inst_41475))
{var statearr_41495_41515 = state_41488__$1;(statearr_41495_41515[(1)] = (9));
} else
{var statearr_41496_41516 = state_41488__$1;(statearr_41496_41516[(1)] = (10));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41489 === (3)))
{var inst_41486 = (state_41488[(2)]);var state_41488__$1 = state_41488;return cljs.core.async.impl.ioc_helpers.return_chan(state_41488__$1,inst_41486);
} else
{if((state_val_41489 === (2)))
{var state_41488__$1 = state_41488;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41488__$1,(4),ch);
} else
{if((state_val_41489 === (11)))
{var inst_41469 = (state_41488[(7)]);var inst_41479 = (state_41488[(2)]);var state_41488__$1 = state_41488;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41488__$1,(8),inst_41479,inst_41469);
} else
{if((state_val_41489 === (9)))
{var state_41488__$1 = state_41488;var statearr_41497_41517 = state_41488__$1;(statearr_41497_41517[(2)] = tc);
(statearr_41497_41517[(1)] = (11));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41489 === (5)))
{var inst_41472 = cljs.core.async.close_BANG_(tc);var inst_41473 = cljs.core.async.close_BANG_(fc);var state_41488__$1 = (function (){var statearr_41498 = state_41488;(statearr_41498[(8)] = inst_41472);
return statearr_41498;
})();var statearr_41499_41518 = state_41488__$1;(statearr_41499_41518[(2)] = inst_41473);
(statearr_41499_41518[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41489 === (10)))
{var state_41488__$1 = state_41488;var statearr_41500_41519 = state_41488__$1;(statearr_41500_41519[(2)] = fc);
(statearr_41500_41519[(1)] = (11));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41489 === (8)))
{var inst_41481 = (state_41488[(2)]);var state_41488__$1 = (function (){var statearr_41501 = state_41488;(statearr_41501[(9)] = inst_41481);
return statearr_41501;
})();var statearr_41502_41520 = state_41488__$1;(statearr_41502_41520[(2)] = null);
(statearr_41502_41520[(1)] = (2));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___41510,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___41510,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41506 = [null,null,null,null,null,null,null,null,null,null];(statearr_41506[(0)] = state_machine__5679__auto__);
(statearr_41506[(1)] = (1));
return statearr_41506;
});
var state_machine__5679__auto____1 = (function (state_41488){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41488);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41507){if((e41507 instanceof Object))
{var ex__5682__auto__ = e41507;var statearr_41508_41521 = state_41488;(statearr_41508_41521[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41488);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41507;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41522 = state_41488;
state_41488 = G__41522;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41488){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41510,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_41509 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41510);
return statearr_41509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41510,tc,fc))
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
return (function (state_41569){var state_val_41570 = (state_41569[(1)]);if((state_val_41570 === (7)))
{var inst_41565 = (state_41569[(2)]);var state_41569__$1 = state_41569;var statearr_41571_41587 = state_41569__$1;(statearr_41571_41587[(2)] = inst_41565);
(statearr_41571_41587[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41570 === (6)))
{var inst_41558 = (state_41569[(7)]);var inst_41555 = (state_41569[(8)]);var inst_41562 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41555,inst_41558) : f.call(null,inst_41555,inst_41558));var inst_41555__$1 = inst_41562;var state_41569__$1 = (function (){var statearr_41572 = state_41569;(statearr_41572[(8)] = inst_41555__$1);
return statearr_41572;
})();var statearr_41573_41588 = state_41569__$1;(statearr_41573_41588[(2)] = null);
(statearr_41573_41588[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41570 === (5)))
{var inst_41555 = (state_41569[(8)]);var state_41569__$1 = state_41569;var statearr_41574_41589 = state_41569__$1;(statearr_41574_41589[(2)] = inst_41555);
(statearr_41574_41589[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41570 === (4)))
{var inst_41558 = (state_41569[(7)]);var inst_41558__$1 = (state_41569[(2)]);var inst_41559 = (inst_41558__$1 == null);var state_41569__$1 = (function (){var statearr_41575 = state_41569;(statearr_41575[(7)] = inst_41558__$1);
return statearr_41575;
})();if(cljs.core.truth_(inst_41559))
{var statearr_41576_41590 = state_41569__$1;(statearr_41576_41590[(1)] = (5));
} else
{var statearr_41577_41591 = state_41569__$1;(statearr_41577_41591[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41570 === (3)))
{var inst_41567 = (state_41569[(2)]);var state_41569__$1 = state_41569;return cljs.core.async.impl.ioc_helpers.return_chan(state_41569__$1,inst_41567);
} else
{if((state_val_41570 === (2)))
{var state_41569__$1 = state_41569;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41569__$1,(4),ch);
} else
{if((state_val_41570 === (1)))
{var inst_41555 = init;var state_41569__$1 = (function (){var statearr_41578 = state_41569;(statearr_41578[(8)] = inst_41555);
return statearr_41578;
})();var statearr_41579_41592 = state_41569__$1;(statearr_41579_41592[(2)] = null);
(statearr_41579_41592[(1)] = (2));
return cljs.core.constant$keyword$773;
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
var state_machine__5679__auto____0 = (function (){var statearr_41583 = [null,null,null,null,null,null,null,null,null];(statearr_41583[(0)] = state_machine__5679__auto__);
(statearr_41583[(1)] = (1));
return statearr_41583;
});
var state_machine__5679__auto____1 = (function (state_41569){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41569);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41584){if((e41584 instanceof Object))
{var ex__5682__auto__ = e41584;var statearr_41585_41593 = state_41569;(statearr_41585_41593[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41569);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41584;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41594 = state_41569;
state_41569 = G__41594;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41569){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_41586 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_41586;
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
return (function (state_41656){var state_val_41657 = (state_41656[(1)]);if((state_val_41657 === (7)))
{var inst_41637 = (state_41656[(7)]);var inst_41642 = (state_41656[(2)]);var inst_41643 = cljs.core.next(inst_41637);var inst_41637__$1 = inst_41643;var state_41656__$1 = (function (){var statearr_41658 = state_41656;(statearr_41658[(8)] = inst_41642);
(statearr_41658[(7)] = inst_41637__$1);
return statearr_41658;
})();var statearr_41659_41677 = state_41656__$1;(statearr_41659_41677[(2)] = null);
(statearr_41659_41677[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41657 === (1)))
{var inst_41636 = cljs.core.seq(coll);var inst_41637 = inst_41636;var state_41656__$1 = (function (){var statearr_41660 = state_41656;(statearr_41660[(7)] = inst_41637);
return statearr_41660;
})();var statearr_41661_41678 = state_41656__$1;(statearr_41661_41678[(2)] = null);
(statearr_41661_41678[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41657 === (4)))
{var inst_41637 = (state_41656[(7)]);var inst_41640 = cljs.core.first(inst_41637);var state_41656__$1 = state_41656;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41656__$1,(7),ch,inst_41640);
} else
{if((state_val_41657 === (6)))
{var inst_41652 = (state_41656[(2)]);var state_41656__$1 = state_41656;var statearr_41662_41679 = state_41656__$1;(statearr_41662_41679[(2)] = inst_41652);
(statearr_41662_41679[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41657 === (3)))
{var inst_41654 = (state_41656[(2)]);var state_41656__$1 = state_41656;return cljs.core.async.impl.ioc_helpers.return_chan(state_41656__$1,inst_41654);
} else
{if((state_val_41657 === (2)))
{var inst_41637 = (state_41656[(7)]);var state_41656__$1 = state_41656;if(cljs.core.truth_(inst_41637))
{var statearr_41663_41680 = state_41656__$1;(statearr_41663_41680[(1)] = (4));
} else
{var statearr_41664_41681 = state_41656__$1;(statearr_41664_41681[(1)] = (5));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41657 === (9)))
{var state_41656__$1 = state_41656;var statearr_41665_41682 = state_41656__$1;(statearr_41665_41682[(2)] = null);
(statearr_41665_41682[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41657 === (5)))
{var state_41656__$1 = state_41656;if(cljs.core.truth_(close_QMARK_))
{var statearr_41666_41683 = state_41656__$1;(statearr_41666_41683[(1)] = (8));
} else
{var statearr_41667_41684 = state_41656__$1;(statearr_41667_41684[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_41657 === (10)))
{var inst_41650 = (state_41656[(2)]);var state_41656__$1 = state_41656;var statearr_41668_41685 = state_41656__$1;(statearr_41668_41685[(2)] = inst_41650);
(statearr_41668_41685[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_41657 === (8)))
{var inst_41647 = cljs.core.async.close_BANG_(ch);var state_41656__$1 = state_41656;var statearr_41669_41686 = state_41656__$1;(statearr_41669_41686[(2)] = inst_41647);
(statearr_41669_41686[(1)] = (10));
return cljs.core.constant$keyword$773;
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
var state_machine__5679__auto____0 = (function (){var statearr_41673 = [null,null,null,null,null,null,null,null,null];(statearr_41673[(0)] = state_machine__5679__auto__);
(statearr_41673[(1)] = (1));
return statearr_41673;
});
var state_machine__5679__auto____1 = (function (state_41656){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41656);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41674){if((e41674 instanceof Object))
{var ex__5682__auto__ = e41674;var statearr_41675_41687 = state_41656;(statearr_41675_41687[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41656);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e41674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__41688 = state_41656;
state_41656 = G__41688;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41656){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_41676 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_41676;
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
cljs.core.async.Mux = (function (){var obj41690 = {};return obj41690;
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
cljs.core.async.Mult = (function (){var obj41692 = {};return obj41692;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t41916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41916 = (function (cs,ch,mult,meta41917){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta41917 = meta41917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41916.cljs$lang$type = true;
cljs.core.async.t41916.cljs$lang$ctorStr = "cljs.core.async/t41916";
cljs.core.async.t41916.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41916");
});})(cs))
;
cljs.core.async.t41916.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t41916.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t41916.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t41916.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t41916.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41916.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t41916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41918){var self__ = this;
var _41918__$1 = this;return self__.meta41917;
});})(cs))
;
cljs.core.async.t41916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41918,meta41917__$1){var self__ = this;
var _41918__$1 = this;return (new cljs.core.async.t41916(self__.cs,self__.ch,self__.mult,meta41917__$1));
});})(cs))
;
cljs.core.async.__GT_t41916 = ((function (cs){
return (function __GT_t41916(cs__$1,ch__$1,mult__$1,meta41917){return (new cljs.core.async.t41916(cs__$1,ch__$1,mult__$1,meta41917));
});})(cs))
;
}
return (new cljs.core.async.t41916(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___42139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42139,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42139,cs,m,dchan,dctr,done){
return (function (state_42053){var state_val_42054 = (state_42053[(1)]);if((state_val_42054 === (7)))
{var inst_42049 = (state_42053[(2)]);var state_42053__$1 = state_42053;var statearr_42055_42140 = state_42053__$1;(statearr_42055_42140[(2)] = inst_42049);
(statearr_42055_42140[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (20)))
{var inst_41950 = (state_42053[(7)]);var inst_41960 = cljs.core.first(inst_41950);var inst_41961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41960,(0),null);var inst_41962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41960,(1),null);var state_42053__$1 = (function (){var statearr_42056 = state_42053;(statearr_42056[(8)] = inst_41961);
return statearr_42056;
})();if(cljs.core.truth_(inst_41962))
{var statearr_42057_42141 = state_42053__$1;(statearr_42057_42141[(1)] = (22));
} else
{var statearr_42058_42142 = state_42053__$1;(statearr_42058_42142[(1)] = (23));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (27)))
{var inst_41990 = (state_42053[(9)]);var inst_41992 = (state_42053[(10)]);var inst_41997 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41990,inst_41992);var state_42053__$1 = (function (){var statearr_42059 = state_42053;(statearr_42059[(11)] = inst_41997);
return statearr_42059;
})();var statearr_42060_42143 = state_42053__$1;(statearr_42060_42143[(2)] = null);
(statearr_42060_42143[(1)] = (32));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (1)))
{var state_42053__$1 = state_42053;var statearr_42061_42144 = state_42053__$1;(statearr_42061_42144[(2)] = null);
(statearr_42061_42144[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (24)))
{var inst_41950 = (state_42053[(7)]);var inst_41967 = (state_42053[(2)]);var inst_41968 = cljs.core.next(inst_41950);var inst_41930 = inst_41968;var inst_41931 = null;var inst_41932 = (0);var inst_41933 = (0);var state_42053__$1 = (function (){var statearr_42062 = state_42053;(statearr_42062[(12)] = inst_41930);
(statearr_42062[(13)] = inst_41931);
(statearr_42062[(14)] = inst_41967);
(statearr_42062[(15)] = inst_41932);
(statearr_42062[(16)] = inst_41933);
return statearr_42062;
})();var statearr_42063_42145 = state_42053__$1;(statearr_42063_42145[(2)] = null);
(statearr_42063_42145[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (39)))
{var inst_42010 = (state_42053[(17)]);var inst_42028 = (state_42053[(2)]);var inst_42029 = cljs.core.next(inst_42010);var inst_41989 = inst_42029;var inst_41990 = null;var inst_41991 = (0);var inst_41992 = (0);var state_42053__$1 = (function (){var statearr_42067 = state_42053;(statearr_42067[(18)] = inst_42028);
(statearr_42067[(9)] = inst_41990);
(statearr_42067[(19)] = inst_41989);
(statearr_42067[(20)] = inst_41991);
(statearr_42067[(10)] = inst_41992);
return statearr_42067;
})();var statearr_42068_42146 = state_42053__$1;(statearr_42068_42146[(2)] = null);
(statearr_42068_42146[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (4)))
{var inst_41921 = (state_42053[(21)]);var inst_41921__$1 = (state_42053[(2)]);var inst_41922 = (inst_41921__$1 == null);var state_42053__$1 = (function (){var statearr_42069 = state_42053;(statearr_42069[(21)] = inst_41921__$1);
return statearr_42069;
})();if(cljs.core.truth_(inst_41922))
{var statearr_42070_42147 = state_42053__$1;(statearr_42070_42147[(1)] = (5));
} else
{var statearr_42071_42148 = state_42053__$1;(statearr_42071_42148[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (15)))
{var inst_41930 = (state_42053[(12)]);var inst_41931 = (state_42053[(13)]);var inst_41932 = (state_42053[(15)]);var inst_41933 = (state_42053[(16)]);var inst_41946 = (state_42053[(2)]);var inst_41947 = (inst_41933 + (1));var tmp42064 = inst_41930;var tmp42065 = inst_41931;var tmp42066 = inst_41932;var inst_41930__$1 = tmp42064;var inst_41931__$1 = tmp42065;var inst_41932__$1 = tmp42066;var inst_41933__$1 = inst_41947;var state_42053__$1 = (function (){var statearr_42072 = state_42053;(statearr_42072[(12)] = inst_41930__$1);
(statearr_42072[(13)] = inst_41931__$1);
(statearr_42072[(15)] = inst_41932__$1);
(statearr_42072[(16)] = inst_41933__$1);
(statearr_42072[(22)] = inst_41946);
return statearr_42072;
})();var statearr_42073_42149 = state_42053__$1;(statearr_42073_42149[(2)] = null);
(statearr_42073_42149[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (21)))
{var inst_41971 = (state_42053[(2)]);var state_42053__$1 = state_42053;var statearr_42074_42150 = state_42053__$1;(statearr_42074_42150[(2)] = inst_41971);
(statearr_42074_42150[(1)] = (18));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (31)))
{var inst_41997 = (state_42053[(11)]);var inst_41998 = (state_42053[(2)]);var inst_41999 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_42000 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41997);var state_42053__$1 = (function (){var statearr_42075 = state_42053;(statearr_42075[(23)] = inst_41999);
(statearr_42075[(24)] = inst_41998);
return statearr_42075;
})();var statearr_42076_42151 = state_42053__$1;(statearr_42076_42151[(2)] = inst_42000);
cljs.core.async.impl.ioc_helpers.process_exception(state_42053__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (32)))
{var inst_41921 = (state_42053[(21)]);var inst_41997 = (state_42053[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42053,(31),Object,null,(30));var inst_42004 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41997,inst_41921,done);var state_42053__$1 = state_42053;var statearr_42077_42152 = state_42053__$1;(statearr_42077_42152[(2)] = inst_42004);
cljs.core.async.impl.ioc_helpers.process_exception(state_42053__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (40)))
{var inst_42019 = (state_42053[(25)]);var inst_42020 = (state_42053[(2)]);var inst_42021 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_42022 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42019);var state_42053__$1 = (function (){var statearr_42078 = state_42053;(statearr_42078[(26)] = inst_42021);
(statearr_42078[(27)] = inst_42020);
return statearr_42078;
})();var statearr_42079_42153 = state_42053__$1;(statearr_42079_42153[(2)] = inst_42022);
cljs.core.async.impl.ioc_helpers.process_exception(state_42053__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (33)))
{var inst_42010 = (state_42053[(17)]);var inst_42012 = cljs.core.chunked_seq_QMARK_(inst_42010);var state_42053__$1 = state_42053;if(inst_42012)
{var statearr_42080_42154 = state_42053__$1;(statearr_42080_42154[(1)] = (36));
} else
{var statearr_42081_42155 = state_42053__$1;(statearr_42081_42155[(1)] = (37));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (13)))
{var inst_41940 = (state_42053[(28)]);var inst_41943 = cljs.core.async.close_BANG_(inst_41940);var state_42053__$1 = state_42053;var statearr_42082_42156 = state_42053__$1;(statearr_42082_42156[(2)] = inst_41943);
(statearr_42082_42156[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (22)))
{var inst_41961 = (state_42053[(8)]);var inst_41964 = cljs.core.async.close_BANG_(inst_41961);var state_42053__$1 = state_42053;var statearr_42083_42157 = state_42053__$1;(statearr_42083_42157[(2)] = inst_41964);
(statearr_42083_42157[(1)] = (24));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (36)))
{var inst_42010 = (state_42053[(17)]);var inst_42014 = cljs.core.chunk_first(inst_42010);var inst_42015 = cljs.core.chunk_rest(inst_42010);var inst_42016 = cljs.core.count(inst_42014);var inst_41989 = inst_42015;var inst_41990 = inst_42014;var inst_41991 = inst_42016;var inst_41992 = (0);var state_42053__$1 = (function (){var statearr_42084 = state_42053;(statearr_42084[(9)] = inst_41990);
(statearr_42084[(19)] = inst_41989);
(statearr_42084[(20)] = inst_41991);
(statearr_42084[(10)] = inst_41992);
return statearr_42084;
})();var statearr_42085_42158 = state_42053__$1;(statearr_42085_42158[(2)] = null);
(statearr_42085_42158[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (41)))
{var inst_41921 = (state_42053[(21)]);var inst_42019 = (state_42053[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42053,(40),Object,null,(39));var inst_42026 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42019,inst_41921,done);var state_42053__$1 = state_42053;var statearr_42086_42159 = state_42053__$1;(statearr_42086_42159[(2)] = inst_42026);
cljs.core.async.impl.ioc_helpers.process_exception(state_42053__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (43)))
{var state_42053__$1 = state_42053;var statearr_42087_42160 = state_42053__$1;(statearr_42087_42160[(2)] = null);
(statearr_42087_42160[(1)] = (44));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (29)))
{var inst_42037 = (state_42053[(2)]);var state_42053__$1 = state_42053;var statearr_42088_42161 = state_42053__$1;(statearr_42088_42161[(2)] = inst_42037);
(statearr_42088_42161[(1)] = (26));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (44)))
{var inst_42046 = (state_42053[(2)]);var state_42053__$1 = (function (){var statearr_42089 = state_42053;(statearr_42089[(29)] = inst_42046);
return statearr_42089;
})();var statearr_42090_42162 = state_42053__$1;(statearr_42090_42162[(2)] = null);
(statearr_42090_42162[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (6)))
{var inst_41981 = (state_42053[(30)]);var inst_41980 = cljs.core.deref(cs);var inst_41981__$1 = cljs.core.keys(inst_41980);var inst_41982 = cljs.core.count(inst_41981__$1);var inst_41983 = cljs.core.reset_BANG_(dctr,inst_41982);var inst_41988 = cljs.core.seq(inst_41981__$1);var inst_41989 = inst_41988;var inst_41990 = null;var inst_41991 = (0);var inst_41992 = (0);var state_42053__$1 = (function (){var statearr_42091 = state_42053;(statearr_42091[(31)] = inst_41983);
(statearr_42091[(9)] = inst_41990);
(statearr_42091[(19)] = inst_41989);
(statearr_42091[(20)] = inst_41991);
(statearr_42091[(30)] = inst_41981__$1);
(statearr_42091[(10)] = inst_41992);
return statearr_42091;
})();var statearr_42092_42163 = state_42053__$1;(statearr_42092_42163[(2)] = null);
(statearr_42092_42163[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (28)))
{var inst_41989 = (state_42053[(19)]);var inst_42010 = (state_42053[(17)]);var inst_42010__$1 = cljs.core.seq(inst_41989);var state_42053__$1 = (function (){var statearr_42093 = state_42053;(statearr_42093[(17)] = inst_42010__$1);
return statearr_42093;
})();if(inst_42010__$1)
{var statearr_42094_42164 = state_42053__$1;(statearr_42094_42164[(1)] = (33));
} else
{var statearr_42095_42165 = state_42053__$1;(statearr_42095_42165[(1)] = (34));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (25)))
{var inst_41991 = (state_42053[(20)]);var inst_41992 = (state_42053[(10)]);var inst_41994 = (inst_41992 < inst_41991);var inst_41995 = inst_41994;var state_42053__$1 = state_42053;if(cljs.core.truth_(inst_41995))
{var statearr_42096_42166 = state_42053__$1;(statearr_42096_42166[(1)] = (27));
} else
{var statearr_42097_42167 = state_42053__$1;(statearr_42097_42167[(1)] = (28));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (34)))
{var state_42053__$1 = state_42053;var statearr_42098_42168 = state_42053__$1;(statearr_42098_42168[(2)] = null);
(statearr_42098_42168[(1)] = (35));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (17)))
{var state_42053__$1 = state_42053;var statearr_42099_42169 = state_42053__$1;(statearr_42099_42169[(2)] = null);
(statearr_42099_42169[(1)] = (18));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (3)))
{var inst_42051 = (state_42053[(2)]);var state_42053__$1 = state_42053;return cljs.core.async.impl.ioc_helpers.return_chan(state_42053__$1,inst_42051);
} else
{if((state_val_42054 === (12)))
{var inst_41976 = (state_42053[(2)]);var state_42053__$1 = state_42053;var statearr_42100_42170 = state_42053__$1;(statearr_42100_42170[(2)] = inst_41976);
(statearr_42100_42170[(1)] = (9));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (2)))
{var state_42053__$1 = state_42053;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42053__$1,(4),ch);
} else
{if((state_val_42054 === (23)))
{var state_42053__$1 = state_42053;var statearr_42101_42171 = state_42053__$1;(statearr_42101_42171[(2)] = null);
(statearr_42101_42171[(1)] = (24));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (35)))
{var inst_42035 = (state_42053[(2)]);var state_42053__$1 = state_42053;var statearr_42102_42172 = state_42053__$1;(statearr_42102_42172[(2)] = inst_42035);
(statearr_42102_42172[(1)] = (29));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (19)))
{var inst_41950 = (state_42053[(7)]);var inst_41954 = cljs.core.chunk_first(inst_41950);var inst_41955 = cljs.core.chunk_rest(inst_41950);var inst_41956 = cljs.core.count(inst_41954);var inst_41930 = inst_41955;var inst_41931 = inst_41954;var inst_41932 = inst_41956;var inst_41933 = (0);var state_42053__$1 = (function (){var statearr_42103 = state_42053;(statearr_42103[(12)] = inst_41930);
(statearr_42103[(13)] = inst_41931);
(statearr_42103[(15)] = inst_41932);
(statearr_42103[(16)] = inst_41933);
return statearr_42103;
})();var statearr_42104_42173 = state_42053__$1;(statearr_42104_42173[(2)] = null);
(statearr_42104_42173[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (11)))
{var inst_41930 = (state_42053[(12)]);var inst_41950 = (state_42053[(7)]);var inst_41950__$1 = cljs.core.seq(inst_41930);var state_42053__$1 = (function (){var statearr_42105 = state_42053;(statearr_42105[(7)] = inst_41950__$1);
return statearr_42105;
})();if(inst_41950__$1)
{var statearr_42106_42174 = state_42053__$1;(statearr_42106_42174[(1)] = (16));
} else
{var statearr_42107_42175 = state_42053__$1;(statearr_42107_42175[(1)] = (17));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (9)))
{var inst_41978 = (state_42053[(2)]);var state_42053__$1 = state_42053;var statearr_42108_42176 = state_42053__$1;(statearr_42108_42176[(2)] = inst_41978);
(statearr_42108_42176[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (5)))
{var inst_41928 = cljs.core.deref(cs);var inst_41929 = cljs.core.seq(inst_41928);var inst_41930 = inst_41929;var inst_41931 = null;var inst_41932 = (0);var inst_41933 = (0);var state_42053__$1 = (function (){var statearr_42109 = state_42053;(statearr_42109[(12)] = inst_41930);
(statearr_42109[(13)] = inst_41931);
(statearr_42109[(15)] = inst_41932);
(statearr_42109[(16)] = inst_41933);
return statearr_42109;
})();var statearr_42110_42177 = state_42053__$1;(statearr_42110_42177[(2)] = null);
(statearr_42110_42177[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (14)))
{var state_42053__$1 = state_42053;var statearr_42111_42178 = state_42053__$1;(statearr_42111_42178[(2)] = null);
(statearr_42111_42178[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (45)))
{var inst_42043 = (state_42053[(2)]);var state_42053__$1 = state_42053;var statearr_42112_42179 = state_42053__$1;(statearr_42112_42179[(2)] = inst_42043);
(statearr_42112_42179[(1)] = (44));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (26)))
{var inst_41981 = (state_42053[(30)]);var inst_42039 = (state_42053[(2)]);var inst_42040 = cljs.core.seq(inst_41981);var state_42053__$1 = (function (){var statearr_42113 = state_42053;(statearr_42113[(32)] = inst_42039);
return statearr_42113;
})();if(inst_42040)
{var statearr_42114_42180 = state_42053__$1;(statearr_42114_42180[(1)] = (42));
} else
{var statearr_42115_42181 = state_42053__$1;(statearr_42115_42181[(1)] = (43));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (16)))
{var inst_41950 = (state_42053[(7)]);var inst_41952 = cljs.core.chunked_seq_QMARK_(inst_41950);var state_42053__$1 = state_42053;if(inst_41952)
{var statearr_42119_42182 = state_42053__$1;(statearr_42119_42182[(1)] = (19));
} else
{var statearr_42120_42183 = state_42053__$1;(statearr_42120_42183[(1)] = (20));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (38)))
{var inst_42032 = (state_42053[(2)]);var state_42053__$1 = state_42053;var statearr_42121_42184 = state_42053__$1;(statearr_42121_42184[(2)] = inst_42032);
(statearr_42121_42184[(1)] = (35));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (30)))
{var inst_41990 = (state_42053[(9)]);var inst_41989 = (state_42053[(19)]);var inst_41991 = (state_42053[(20)]);var inst_41992 = (state_42053[(10)]);var inst_42006 = (state_42053[(2)]);var inst_42007 = (inst_41992 + (1));var tmp42116 = inst_41990;var tmp42117 = inst_41989;var tmp42118 = inst_41991;var inst_41989__$1 = tmp42117;var inst_41990__$1 = tmp42116;var inst_41991__$1 = tmp42118;var inst_41992__$1 = inst_42007;var state_42053__$1 = (function (){var statearr_42122 = state_42053;(statearr_42122[(33)] = inst_42006);
(statearr_42122[(9)] = inst_41990__$1);
(statearr_42122[(19)] = inst_41989__$1);
(statearr_42122[(20)] = inst_41991__$1);
(statearr_42122[(10)] = inst_41992__$1);
return statearr_42122;
})();var statearr_42123_42185 = state_42053__$1;(statearr_42123_42185[(2)] = null);
(statearr_42123_42185[(1)] = (25));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (10)))
{var inst_41931 = (state_42053[(13)]);var inst_41933 = (state_42053[(16)]);var inst_41939 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41931,inst_41933);var inst_41940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41939,(0),null);var inst_41941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41939,(1),null);var state_42053__$1 = (function (){var statearr_42124 = state_42053;(statearr_42124[(28)] = inst_41940);
return statearr_42124;
})();if(cljs.core.truth_(inst_41941))
{var statearr_42125_42186 = state_42053__$1;(statearr_42125_42186[(1)] = (13));
} else
{var statearr_42126_42187 = state_42053__$1;(statearr_42126_42187[(1)] = (14));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (18)))
{var inst_41974 = (state_42053[(2)]);var state_42053__$1 = state_42053;var statearr_42127_42188 = state_42053__$1;(statearr_42127_42188[(2)] = inst_41974);
(statearr_42127_42188[(1)] = (12));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (42)))
{var state_42053__$1 = state_42053;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42053__$1,(45),dchan);
} else
{if((state_val_42054 === (37)))
{var inst_42010 = (state_42053[(17)]);var inst_42019 = cljs.core.first(inst_42010);var state_42053__$1 = (function (){var statearr_42128 = state_42053;(statearr_42128[(25)] = inst_42019);
return statearr_42128;
})();var statearr_42129_42189 = state_42053__$1;(statearr_42129_42189[(2)] = null);
(statearr_42129_42189[(1)] = (41));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42054 === (8)))
{var inst_41932 = (state_42053[(15)]);var inst_41933 = (state_42053[(16)]);var inst_41935 = (inst_41933 < inst_41932);var inst_41936 = inst_41935;var state_42053__$1 = state_42053;if(cljs.core.truth_(inst_41936))
{var statearr_42130_42190 = state_42053__$1;(statearr_42130_42190[(1)] = (10));
} else
{var statearr_42131_42191 = state_42053__$1;(statearr_42131_42191[(1)] = (11));
}
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___42139,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___42139,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42135[(0)] = state_machine__5679__auto__);
(statearr_42135[(1)] = (1));
return statearr_42135;
});
var state_machine__5679__auto____1 = (function (state_42053){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42053);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42136){if((e42136 instanceof Object))
{var ex__5682__auto__ = e42136;var statearr_42137_42192 = state_42053;(statearr_42137_42192[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42053);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e42136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__42193 = state_42053;
state_42053 = G__42193;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42053){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42139,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_42138 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42139);
return statearr_42138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42139,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj42195 = {};return obj42195;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$780,null,cljs.core.constant$keyword$781,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$782);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$781);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$782,chs);var pauses = pick(cljs.core.constant$keyword$780,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$783,solos,cljs.core.constant$keyword$784,pick(cljs.core.constant$keyword$781,chs),cljs.core.constant$keyword$785,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$780)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t42305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42305 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42306){
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
this.meta42306 = meta42306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42305.cljs$lang$type = true;
cljs.core.async.t42305.cljs$lang$ctorStr = "cljs.core.async/t42305";
cljs.core.async.t42305.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t42305");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42305.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t42305.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42305.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42305.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42305.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42305.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42305.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42305.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42307){var self__ = this;
var _42307__$1 = this;return self__.meta42306;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42307,meta42306__$1){var self__ = this;
var _42307__$1 = this;return (new cljs.core.async.t42305(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42306__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t42305 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t42305(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42306){return (new cljs.core.async.t42305(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42306));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t42305(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___42414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42372){var state_val_42373 = (state_42372[(1)]);if((state_val_42373 === (7)))
{var inst_42321 = (state_42372[(7)]);var inst_42326 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42321);var state_42372__$1 = state_42372;var statearr_42374_42415 = state_42372__$1;(statearr_42374_42415[(2)] = inst_42326);
(statearr_42374_42415[(1)] = (9));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (20)))
{var inst_42336 = (state_42372[(8)]);var state_42372__$1 = state_42372;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42372__$1,(23),out,inst_42336);
} else
{if((state_val_42373 === (1)))
{var inst_42311 = (state_42372[(9)]);var inst_42311__$1 = calc_state();var inst_42312 = cljs.core.seq_QMARK_(inst_42311__$1);var state_42372__$1 = (function (){var statearr_42375 = state_42372;(statearr_42375[(9)] = inst_42311__$1);
return statearr_42375;
})();if(inst_42312)
{var statearr_42376_42416 = state_42372__$1;(statearr_42376_42416[(1)] = (2));
} else
{var statearr_42377_42417 = state_42372__$1;(statearr_42377_42417[(1)] = (3));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (4)))
{var inst_42311 = (state_42372[(9)]);var inst_42317 = (state_42372[(2)]);var inst_42318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42317,cljs.core.constant$keyword$785);var inst_42319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42317,cljs.core.constant$keyword$784);var inst_42320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42317,cljs.core.constant$keyword$783);var inst_42321 = inst_42311;var state_42372__$1 = (function (){var statearr_42378 = state_42372;(statearr_42378[(7)] = inst_42321);
(statearr_42378[(10)] = inst_42318);
(statearr_42378[(11)] = inst_42320);
(statearr_42378[(12)] = inst_42319);
return statearr_42378;
})();var statearr_42379_42418 = state_42372__$1;(statearr_42379_42418[(2)] = null);
(statearr_42379_42418[(1)] = (5));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (15)))
{var state_42372__$1 = state_42372;var statearr_42380_42419 = state_42372__$1;(statearr_42380_42419[(2)] = null);
(statearr_42380_42419[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (21)))
{var state_42372__$1 = state_42372;var statearr_42381_42420 = state_42372__$1;(statearr_42381_42420[(2)] = null);
(statearr_42381_42420[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (13)))
{var inst_42368 = (state_42372[(2)]);var state_42372__$1 = state_42372;var statearr_42382_42421 = state_42372__$1;(statearr_42382_42421[(2)] = inst_42368);
(statearr_42382_42421[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (22)))
{var inst_42329 = (state_42372[(13)]);var inst_42365 = (state_42372[(2)]);var inst_42321 = inst_42329;var state_42372__$1 = (function (){var statearr_42383 = state_42372;(statearr_42383[(7)] = inst_42321);
(statearr_42383[(14)] = inst_42365);
return statearr_42383;
})();var statearr_42384_42422 = state_42372__$1;(statearr_42384_42422[(2)] = null);
(statearr_42384_42422[(1)] = (5));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (6)))
{var inst_42370 = (state_42372[(2)]);var state_42372__$1 = state_42372;return cljs.core.async.impl.ioc_helpers.return_chan(state_42372__$1,inst_42370);
} else
{if((state_val_42373 === (17)))
{var inst_42351 = (state_42372[(15)]);var state_42372__$1 = state_42372;var statearr_42385_42423 = state_42372__$1;(statearr_42385_42423[(2)] = inst_42351);
(statearr_42385_42423[(1)] = (19));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (3)))
{var inst_42311 = (state_42372[(9)]);var state_42372__$1 = state_42372;var statearr_42386_42424 = state_42372__$1;(statearr_42386_42424[(2)] = inst_42311);
(statearr_42386_42424[(1)] = (4));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (12)))
{var inst_42351 = (state_42372[(15)]);var inst_42332 = (state_42372[(16)]);var inst_42337 = (state_42372[(17)]);var inst_42351__$1 = (inst_42332.cljs$core$IFn$_invoke$arity$1 ? inst_42332.cljs$core$IFn$_invoke$arity$1(inst_42337) : inst_42332.call(null,inst_42337));var state_42372__$1 = (function (){var statearr_42387 = state_42372;(statearr_42387[(15)] = inst_42351__$1);
return statearr_42387;
})();if(cljs.core.truth_(inst_42351__$1))
{var statearr_42388_42425 = state_42372__$1;(statearr_42388_42425[(1)] = (17));
} else
{var statearr_42389_42426 = state_42372__$1;(statearr_42389_42426[(1)] = (18));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (2)))
{var inst_42311 = (state_42372[(9)]);var inst_42314 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42311);var state_42372__$1 = state_42372;var statearr_42390_42427 = state_42372__$1;(statearr_42390_42427[(2)] = inst_42314);
(statearr_42390_42427[(1)] = (4));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (23)))
{var inst_42362 = (state_42372[(2)]);var state_42372__$1 = state_42372;var statearr_42391_42428 = state_42372__$1;(statearr_42391_42428[(2)] = inst_42362);
(statearr_42391_42428[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (19)))
{var inst_42359 = (state_42372[(2)]);var state_42372__$1 = state_42372;if(cljs.core.truth_(inst_42359))
{var statearr_42392_42429 = state_42372__$1;(statearr_42392_42429[(1)] = (20));
} else
{var statearr_42393_42430 = state_42372__$1;(statearr_42393_42430[(1)] = (21));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (11)))
{var inst_42336 = (state_42372[(8)]);var inst_42342 = (inst_42336 == null);var state_42372__$1 = state_42372;if(cljs.core.truth_(inst_42342))
{var statearr_42394_42431 = state_42372__$1;(statearr_42394_42431[(1)] = (14));
} else
{var statearr_42395_42432 = state_42372__$1;(statearr_42395_42432[(1)] = (15));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (9)))
{var inst_42329 = (state_42372[(13)]);var inst_42329__$1 = (state_42372[(2)]);var inst_42330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42329__$1,cljs.core.constant$keyword$785);var inst_42331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42329__$1,cljs.core.constant$keyword$784);var inst_42332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42329__$1,cljs.core.constant$keyword$783);var state_42372__$1 = (function (){var statearr_42396 = state_42372;(statearr_42396[(18)] = inst_42331);
(statearr_42396[(16)] = inst_42332);
(statearr_42396[(13)] = inst_42329__$1);
return statearr_42396;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_42372__$1,(10),inst_42330);
} else
{if((state_val_42373 === (5)))
{var inst_42321 = (state_42372[(7)]);var inst_42324 = cljs.core.seq_QMARK_(inst_42321);var state_42372__$1 = state_42372;if(inst_42324)
{var statearr_42397_42433 = state_42372__$1;(statearr_42397_42433[(1)] = (7));
} else
{var statearr_42398_42434 = state_42372__$1;(statearr_42398_42434[(1)] = (8));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (14)))
{var inst_42337 = (state_42372[(17)]);var inst_42344 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42337);var state_42372__$1 = state_42372;var statearr_42399_42435 = state_42372__$1;(statearr_42399_42435[(2)] = inst_42344);
(statearr_42399_42435[(1)] = (16));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (16)))
{var inst_42347 = (state_42372[(2)]);var inst_42348 = calc_state();var inst_42321 = inst_42348;var state_42372__$1 = (function (){var statearr_42400 = state_42372;(statearr_42400[(7)] = inst_42321);
(statearr_42400[(19)] = inst_42347);
return statearr_42400;
})();var statearr_42401_42436 = state_42372__$1;(statearr_42401_42436[(2)] = null);
(statearr_42401_42436[(1)] = (5));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (10)))
{var inst_42336 = (state_42372[(8)]);var inst_42337 = (state_42372[(17)]);var inst_42335 = (state_42372[(2)]);var inst_42336__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42335,(0),null);var inst_42337__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42335,(1),null);var inst_42338 = (inst_42336__$1 == null);var inst_42339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42337__$1,change);var inst_42340 = (inst_42338) || (inst_42339);var state_42372__$1 = (function (){var statearr_42402 = state_42372;(statearr_42402[(8)] = inst_42336__$1);
(statearr_42402[(17)] = inst_42337__$1);
return statearr_42402;
})();if(cljs.core.truth_(inst_42340))
{var statearr_42403_42437 = state_42372__$1;(statearr_42403_42437[(1)] = (11));
} else
{var statearr_42404_42438 = state_42372__$1;(statearr_42404_42438[(1)] = (12));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (18)))
{var inst_42331 = (state_42372[(18)]);var inst_42332 = (state_42372[(16)]);var inst_42337 = (state_42372[(17)]);var inst_42354 = cljs.core.empty_QMARK_(inst_42332);var inst_42355 = (inst_42331.cljs$core$IFn$_invoke$arity$1 ? inst_42331.cljs$core$IFn$_invoke$arity$1(inst_42337) : inst_42331.call(null,inst_42337));var inst_42356 = cljs.core.not(inst_42355);var inst_42357 = (inst_42354) && (inst_42356);var state_42372__$1 = state_42372;var statearr_42405_42439 = state_42372__$1;(statearr_42405_42439[(2)] = inst_42357);
(statearr_42405_42439[(1)] = (19));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42373 === (8)))
{var inst_42321 = (state_42372[(7)]);var state_42372__$1 = state_42372;var statearr_42406_42440 = state_42372__$1;(statearr_42406_42440[(2)] = inst_42321);
(statearr_42406_42440[(1)] = (9));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___42414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___42414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42410[(0)] = state_machine__5679__auto__);
(statearr_42410[(1)] = (1));
return statearr_42410;
});
var state_machine__5679__auto____1 = (function (state_42372){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42372);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42411){if((e42411 instanceof Object))
{var ex__5682__auto__ = e42411;var statearr_42412_42441 = state_42372;(statearr_42412_42441[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42372);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e42411;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__42442 = state_42372;
state_42372 = G__42442;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42372){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_42413 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42414);
return statearr_42413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42414,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj42444 = {};return obj42444;
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
return (function (p1__42445_SHARP_){if(cljs.core.truth_((p1__42445_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42445_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42445_SHARP_.call(null,topic))))
{return p1__42445_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42445_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t42570 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42570 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42571){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42571 = meta42571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42570.cljs$lang$type = true;
cljs.core.async.t42570.cljs$lang$ctorStr = "cljs.core.async/t42570";
cljs.core.async.t42570.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t42570");
});})(mults,ensure_mult))
;
cljs.core.async.t42570.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t42570.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t42570.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t42570.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t42570.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t42570.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42570.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t42570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42572){var self__ = this;
var _42572__$1 = this;return self__.meta42571;
});})(mults,ensure_mult))
;
cljs.core.async.t42570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42572,meta42571__$1){var self__ = this;
var _42572__$1 = this;return (new cljs.core.async.t42570(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42571__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t42570 = ((function (mults,ensure_mult){
return (function __GT_t42570(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42571){return (new cljs.core.async.t42570(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42571));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t42570(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___42694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42694,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42694,mults,ensure_mult,p){
return (function (state_42646){var state_val_42647 = (state_42646[(1)]);if((state_val_42647 === (7)))
{var inst_42642 = (state_42646[(2)]);var state_42646__$1 = state_42646;var statearr_42648_42695 = state_42646__$1;(statearr_42648_42695[(2)] = inst_42642);
(statearr_42648_42695[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (20)))
{var state_42646__$1 = state_42646;var statearr_42649_42696 = state_42646__$1;(statearr_42649_42696[(2)] = null);
(statearr_42649_42696[(1)] = (21));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (1)))
{var state_42646__$1 = state_42646;var statearr_42650_42697 = state_42646__$1;(statearr_42650_42697[(2)] = null);
(statearr_42650_42697[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (24)))
{var inst_42575 = (state_42646[(7)]);var inst_42625 = (state_42646[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42646,(23),Object,null,(22));var inst_42632 = cljs.core.async.muxch_STAR_(inst_42625);var state_42646__$1 = state_42646;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42646__$1,(25),inst_42632,inst_42575);
} else
{if((state_val_42647 === (4)))
{var inst_42575 = (state_42646[(7)]);var inst_42575__$1 = (state_42646[(2)]);var inst_42576 = (inst_42575__$1 == null);var state_42646__$1 = (function (){var statearr_42651 = state_42646;(statearr_42651[(7)] = inst_42575__$1);
return statearr_42651;
})();if(cljs.core.truth_(inst_42576))
{var statearr_42652_42698 = state_42646__$1;(statearr_42652_42698[(1)] = (5));
} else
{var statearr_42653_42699 = state_42646__$1;(statearr_42653_42699[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (15)))
{var inst_42617 = (state_42646[(2)]);var state_42646__$1 = state_42646;var statearr_42654_42700 = state_42646__$1;(statearr_42654_42700[(2)] = inst_42617);
(statearr_42654_42700[(1)] = (12));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (21)))
{var inst_42639 = (state_42646[(2)]);var state_42646__$1 = (function (){var statearr_42655 = state_42646;(statearr_42655[(9)] = inst_42639);
return statearr_42655;
})();var statearr_42656_42701 = state_42646__$1;(statearr_42656_42701[(2)] = null);
(statearr_42656_42701[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (13)))
{var inst_42599 = (state_42646[(10)]);var inst_42601 = cljs.core.chunked_seq_QMARK_(inst_42599);var state_42646__$1 = state_42646;if(inst_42601)
{var statearr_42657_42702 = state_42646__$1;(statearr_42657_42702[(1)] = (16));
} else
{var statearr_42658_42703 = state_42646__$1;(statearr_42658_42703[(1)] = (17));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (22)))
{var inst_42636 = (state_42646[(2)]);var state_42646__$1 = state_42646;var statearr_42659_42704 = state_42646__$1;(statearr_42659_42704[(2)] = inst_42636);
(statearr_42659_42704[(1)] = (21));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (6)))
{var inst_42623 = (state_42646[(11)]);var inst_42575 = (state_42646[(7)]);var inst_42625 = (state_42646[(8)]);var inst_42623__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42575) : topic_fn.call(null,inst_42575));var inst_42624 = cljs.core.deref(mults);var inst_42625__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42624,inst_42623__$1);var state_42646__$1 = (function (){var statearr_42660 = state_42646;(statearr_42660[(11)] = inst_42623__$1);
(statearr_42660[(8)] = inst_42625__$1);
return statearr_42660;
})();if(cljs.core.truth_(inst_42625__$1))
{var statearr_42661_42705 = state_42646__$1;(statearr_42661_42705[(1)] = (19));
} else
{var statearr_42662_42706 = state_42646__$1;(statearr_42662_42706[(1)] = (20));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (25)))
{var inst_42634 = (state_42646[(2)]);var state_42646__$1 = state_42646;var statearr_42663_42707 = state_42646__$1;(statearr_42663_42707[(2)] = inst_42634);
cljs.core.async.impl.ioc_helpers.process_exception(state_42646__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (17)))
{var inst_42599 = (state_42646[(10)]);var inst_42608 = cljs.core.first(inst_42599);var inst_42609 = cljs.core.async.muxch_STAR_(inst_42608);var inst_42610 = cljs.core.async.close_BANG_(inst_42609);var inst_42611 = cljs.core.next(inst_42599);var inst_42585 = inst_42611;var inst_42586 = null;var inst_42587 = (0);var inst_42588 = (0);var state_42646__$1 = (function (){var statearr_42664 = state_42646;(statearr_42664[(12)] = inst_42585);
(statearr_42664[(13)] = inst_42587);
(statearr_42664[(14)] = inst_42610);
(statearr_42664[(15)] = inst_42588);
(statearr_42664[(16)] = inst_42586);
return statearr_42664;
})();var statearr_42665_42708 = state_42646__$1;(statearr_42665_42708[(2)] = null);
(statearr_42665_42708[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (3)))
{var inst_42644 = (state_42646[(2)]);var state_42646__$1 = state_42646;return cljs.core.async.impl.ioc_helpers.return_chan(state_42646__$1,inst_42644);
} else
{if((state_val_42647 === (12)))
{var inst_42619 = (state_42646[(2)]);var state_42646__$1 = state_42646;var statearr_42666_42709 = state_42646__$1;(statearr_42666_42709[(2)] = inst_42619);
(statearr_42666_42709[(1)] = (9));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (2)))
{var state_42646__$1 = state_42646;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42646__$1,(4),ch);
} else
{if((state_val_42647 === (23)))
{var inst_42623 = (state_42646[(11)]);var inst_42627 = (state_42646[(2)]);var inst_42628 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42623);var state_42646__$1 = (function (){var statearr_42667 = state_42646;(statearr_42667[(17)] = inst_42627);
return statearr_42667;
})();var statearr_42668_42710 = state_42646__$1;(statearr_42668_42710[(2)] = inst_42628);
cljs.core.async.impl.ioc_helpers.process_exception(state_42646__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (19)))
{var state_42646__$1 = state_42646;var statearr_42669_42711 = state_42646__$1;(statearr_42669_42711[(2)] = null);
(statearr_42669_42711[(1)] = (24));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (11)))
{var inst_42585 = (state_42646[(12)]);var inst_42599 = (state_42646[(10)]);var inst_42599__$1 = cljs.core.seq(inst_42585);var state_42646__$1 = (function (){var statearr_42670 = state_42646;(statearr_42670[(10)] = inst_42599__$1);
return statearr_42670;
})();if(inst_42599__$1)
{var statearr_42671_42712 = state_42646__$1;(statearr_42671_42712[(1)] = (13));
} else
{var statearr_42672_42713 = state_42646__$1;(statearr_42672_42713[(1)] = (14));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (9)))
{var inst_42621 = (state_42646[(2)]);var state_42646__$1 = state_42646;var statearr_42673_42714 = state_42646__$1;(statearr_42673_42714[(2)] = inst_42621);
(statearr_42673_42714[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (5)))
{var inst_42582 = cljs.core.deref(mults);var inst_42583 = cljs.core.vals(inst_42582);var inst_42584 = cljs.core.seq(inst_42583);var inst_42585 = inst_42584;var inst_42586 = null;var inst_42587 = (0);var inst_42588 = (0);var state_42646__$1 = (function (){var statearr_42674 = state_42646;(statearr_42674[(12)] = inst_42585);
(statearr_42674[(13)] = inst_42587);
(statearr_42674[(15)] = inst_42588);
(statearr_42674[(16)] = inst_42586);
return statearr_42674;
})();var statearr_42675_42715 = state_42646__$1;(statearr_42675_42715[(2)] = null);
(statearr_42675_42715[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (14)))
{var state_42646__$1 = state_42646;var statearr_42679_42716 = state_42646__$1;(statearr_42679_42716[(2)] = null);
(statearr_42679_42716[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (16)))
{var inst_42599 = (state_42646[(10)]);var inst_42603 = cljs.core.chunk_first(inst_42599);var inst_42604 = cljs.core.chunk_rest(inst_42599);var inst_42605 = cljs.core.count(inst_42603);var inst_42585 = inst_42604;var inst_42586 = inst_42603;var inst_42587 = inst_42605;var inst_42588 = (0);var state_42646__$1 = (function (){var statearr_42680 = state_42646;(statearr_42680[(12)] = inst_42585);
(statearr_42680[(13)] = inst_42587);
(statearr_42680[(15)] = inst_42588);
(statearr_42680[(16)] = inst_42586);
return statearr_42680;
})();var statearr_42681_42717 = state_42646__$1;(statearr_42681_42717[(2)] = null);
(statearr_42681_42717[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (10)))
{var inst_42585 = (state_42646[(12)]);var inst_42587 = (state_42646[(13)]);var inst_42588 = (state_42646[(15)]);var inst_42586 = (state_42646[(16)]);var inst_42593 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42586,inst_42588);var inst_42594 = cljs.core.async.muxch_STAR_(inst_42593);var inst_42595 = cljs.core.async.close_BANG_(inst_42594);var inst_42596 = (inst_42588 + (1));var tmp42676 = inst_42585;var tmp42677 = inst_42587;var tmp42678 = inst_42586;var inst_42585__$1 = tmp42676;var inst_42586__$1 = tmp42678;var inst_42587__$1 = tmp42677;var inst_42588__$1 = inst_42596;var state_42646__$1 = (function (){var statearr_42682 = state_42646;(statearr_42682[(12)] = inst_42585__$1);
(statearr_42682[(13)] = inst_42587__$1);
(statearr_42682[(18)] = inst_42595);
(statearr_42682[(15)] = inst_42588__$1);
(statearr_42682[(16)] = inst_42586__$1);
return statearr_42682;
})();var statearr_42683_42718 = state_42646__$1;(statearr_42683_42718[(2)] = null);
(statearr_42683_42718[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (18)))
{var inst_42614 = (state_42646[(2)]);var state_42646__$1 = state_42646;var statearr_42684_42719 = state_42646__$1;(statearr_42684_42719[(2)] = inst_42614);
(statearr_42684_42719[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42647 === (8)))
{var inst_42587 = (state_42646[(13)]);var inst_42588 = (state_42646[(15)]);var inst_42590 = (inst_42588 < inst_42587);var inst_42591 = inst_42590;var state_42646__$1 = state_42646;if(cljs.core.truth_(inst_42591))
{var statearr_42685_42720 = state_42646__$1;(statearr_42685_42720[(1)] = (10));
} else
{var statearr_42686_42721 = state_42646__$1;(statearr_42686_42721[(1)] = (11));
}
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___42694,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___42694,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42690[(0)] = state_machine__5679__auto__);
(statearr_42690[(1)] = (1));
return statearr_42690;
});
var state_machine__5679__auto____1 = (function (state_42646){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42646);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42691){if((e42691 instanceof Object))
{var ex__5682__auto__ = e42691;var statearr_42692_42722 = state_42646;(statearr_42692_42722[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42646);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e42691;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__42723 = state_42646;
state_42646 = G__42723;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42646){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42694,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_42693 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42694);
return statearr_42693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42694,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5693__auto___42860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42830){var state_val_42831 = (state_42830[(1)]);if((state_val_42831 === (7)))
{var state_42830__$1 = state_42830;var statearr_42832_42861 = state_42830__$1;(statearr_42832_42861[(2)] = null);
(statearr_42832_42861[(1)] = (8));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (1)))
{var state_42830__$1 = state_42830;var statearr_42833_42862 = state_42830__$1;(statearr_42833_42862[(2)] = null);
(statearr_42833_42862[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (4)))
{var inst_42794 = (state_42830[(7)]);var inst_42796 = (inst_42794 < cnt);var state_42830__$1 = state_42830;if(cljs.core.truth_(inst_42796))
{var statearr_42834_42863 = state_42830__$1;(statearr_42834_42863[(1)] = (6));
} else
{var statearr_42835_42864 = state_42830__$1;(statearr_42835_42864[(1)] = (7));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (15)))
{var inst_42826 = (state_42830[(2)]);var state_42830__$1 = state_42830;var statearr_42836_42865 = state_42830__$1;(statearr_42836_42865[(2)] = inst_42826);
(statearr_42836_42865[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (13)))
{var inst_42819 = cljs.core.async.close_BANG_(out);var state_42830__$1 = state_42830;var statearr_42837_42866 = state_42830__$1;(statearr_42837_42866[(2)] = inst_42819);
(statearr_42837_42866[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (6)))
{var state_42830__$1 = state_42830;var statearr_42838_42867 = state_42830__$1;(statearr_42838_42867[(2)] = null);
(statearr_42838_42867[(1)] = (11));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (3)))
{var inst_42828 = (state_42830[(2)]);var state_42830__$1 = state_42830;return cljs.core.async.impl.ioc_helpers.return_chan(state_42830__$1,inst_42828);
} else
{if((state_val_42831 === (12)))
{var inst_42816 = (state_42830[(8)]);var inst_42816__$1 = (state_42830[(2)]);var inst_42817 = cljs.core.some(cljs.core.nil_QMARK_,inst_42816__$1);var state_42830__$1 = (function (){var statearr_42839 = state_42830;(statearr_42839[(8)] = inst_42816__$1);
return statearr_42839;
})();if(cljs.core.truth_(inst_42817))
{var statearr_42840_42868 = state_42830__$1;(statearr_42840_42868[(1)] = (13));
} else
{var statearr_42841_42869 = state_42830__$1;(statearr_42841_42869[(1)] = (14));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (2)))
{var inst_42793 = cljs.core.reset_BANG_(dctr,cnt);var inst_42794 = (0);var state_42830__$1 = (function (){var statearr_42842 = state_42830;(statearr_42842[(7)] = inst_42794);
(statearr_42842[(9)] = inst_42793);
return statearr_42842;
})();var statearr_42843_42870 = state_42830__$1;(statearr_42843_42870[(2)] = null);
(statearr_42843_42870[(1)] = (4));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (11)))
{var inst_42794 = (state_42830[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42830,(10),Object,null,(9));var inst_42803 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42794) : chs__$1.call(null,inst_42794));var inst_42804 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42794) : done.call(null,inst_42794));var inst_42805 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42803,inst_42804);var state_42830__$1 = state_42830;var statearr_42844_42871 = state_42830__$1;(statearr_42844_42871[(2)] = inst_42805);
cljs.core.async.impl.ioc_helpers.process_exception(state_42830__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (9)))
{var inst_42794 = (state_42830[(7)]);var inst_42807 = (state_42830[(2)]);var inst_42808 = (inst_42794 + (1));var inst_42794__$1 = inst_42808;var state_42830__$1 = (function (){var statearr_42845 = state_42830;(statearr_42845[(10)] = inst_42807);
(statearr_42845[(7)] = inst_42794__$1);
return statearr_42845;
})();var statearr_42846_42872 = state_42830__$1;(statearr_42846_42872[(2)] = null);
(statearr_42846_42872[(1)] = (4));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (5)))
{var inst_42814 = (state_42830[(2)]);var state_42830__$1 = (function (){var statearr_42847 = state_42830;(statearr_42847[(11)] = inst_42814);
return statearr_42847;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42830__$1,(12),dchan);
} else
{if((state_val_42831 === (14)))
{var inst_42816 = (state_42830[(8)]);var inst_42821 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42816);var state_42830__$1 = state_42830;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42830__$1,(16),out,inst_42821);
} else
{if((state_val_42831 === (16)))
{var inst_42823 = (state_42830[(2)]);var state_42830__$1 = (function (){var statearr_42848 = state_42830;(statearr_42848[(12)] = inst_42823);
return statearr_42848;
})();var statearr_42849_42873 = state_42830__$1;(statearr_42849_42873[(2)] = null);
(statearr_42849_42873[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (10)))
{var inst_42798 = (state_42830[(2)]);var inst_42799 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_42830__$1 = (function (){var statearr_42850 = state_42830;(statearr_42850[(13)] = inst_42798);
return statearr_42850;
})();var statearr_42851_42874 = state_42830__$1;(statearr_42851_42874[(2)] = inst_42799);
cljs.core.async.impl.ioc_helpers.process_exception(state_42830__$1);
return cljs.core.constant$keyword$773;
} else
{if((state_val_42831 === (8)))
{var inst_42812 = (state_42830[(2)]);var state_42830__$1 = state_42830;var statearr_42852_42875 = state_42830__$1;(statearr_42852_42875[(2)] = inst_42812);
(statearr_42852_42875[(1)] = (5));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___42860,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___42860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42856[(0)] = state_machine__5679__auto__);
(statearr_42856[(1)] = (1));
return statearr_42856;
});
var state_machine__5679__auto____1 = (function (state_42830){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42830);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42857){if((e42857 instanceof Object))
{var ex__5682__auto__ = e42857;var statearr_42858_42876 = state_42830;(statearr_42858_42876[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42830);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e42857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__42877 = state_42830;
state_42830 = G__42877;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42830){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42860,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_42859 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42860);
return statearr_42859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42860,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___42985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42985,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42985,out){
return (function (state_42961){var state_val_42962 = (state_42961[(1)]);if((state_val_42962 === (7)))
{var inst_42941 = (state_42961[(7)]);var inst_42940 = (state_42961[(8)]);var inst_42940__$1 = (state_42961[(2)]);var inst_42941__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42940__$1,(0),null);var inst_42942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42940__$1,(1),null);var inst_42943 = (inst_42941__$1 == null);var state_42961__$1 = (function (){var statearr_42963 = state_42961;(statearr_42963[(9)] = inst_42942);
(statearr_42963[(7)] = inst_42941__$1);
(statearr_42963[(8)] = inst_42940__$1);
return statearr_42963;
})();if(cljs.core.truth_(inst_42943))
{var statearr_42964_42986 = state_42961__$1;(statearr_42964_42986[(1)] = (8));
} else
{var statearr_42965_42987 = state_42961__$1;(statearr_42965_42987[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42962 === (1)))
{var inst_42932 = cljs.core.vec(chs);var inst_42933 = inst_42932;var state_42961__$1 = (function (){var statearr_42966 = state_42961;(statearr_42966[(10)] = inst_42933);
return statearr_42966;
})();var statearr_42967_42988 = state_42961__$1;(statearr_42967_42988[(2)] = null);
(statearr_42967_42988[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42962 === (4)))
{var inst_42933 = (state_42961[(10)]);var state_42961__$1 = state_42961;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_42961__$1,(7),inst_42933);
} else
{if((state_val_42962 === (6)))
{var inst_42957 = (state_42961[(2)]);var state_42961__$1 = state_42961;var statearr_42968_42989 = state_42961__$1;(statearr_42968_42989[(2)] = inst_42957);
(statearr_42968_42989[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42962 === (3)))
{var inst_42959 = (state_42961[(2)]);var state_42961__$1 = state_42961;return cljs.core.async.impl.ioc_helpers.return_chan(state_42961__$1,inst_42959);
} else
{if((state_val_42962 === (2)))
{var inst_42933 = (state_42961[(10)]);var inst_42935 = cljs.core.count(inst_42933);var inst_42936 = (inst_42935 > (0));var state_42961__$1 = state_42961;if(cljs.core.truth_(inst_42936))
{var statearr_42970_42990 = state_42961__$1;(statearr_42970_42990[(1)] = (4));
} else
{var statearr_42971_42991 = state_42961__$1;(statearr_42971_42991[(1)] = (5));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_42962 === (11)))
{var inst_42933 = (state_42961[(10)]);var inst_42950 = (state_42961[(2)]);var tmp42969 = inst_42933;var inst_42933__$1 = tmp42969;var state_42961__$1 = (function (){var statearr_42972 = state_42961;(statearr_42972[(11)] = inst_42950);
(statearr_42972[(10)] = inst_42933__$1);
return statearr_42972;
})();var statearr_42973_42992 = state_42961__$1;(statearr_42973_42992[(2)] = null);
(statearr_42973_42992[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42962 === (9)))
{var inst_42941 = (state_42961[(7)]);var state_42961__$1 = state_42961;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42961__$1,(11),out,inst_42941);
} else
{if((state_val_42962 === (5)))
{var inst_42955 = cljs.core.async.close_BANG_(out);var state_42961__$1 = state_42961;var statearr_42974_42993 = state_42961__$1;(statearr_42974_42993[(2)] = inst_42955);
(statearr_42974_42993[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42962 === (10)))
{var inst_42953 = (state_42961[(2)]);var state_42961__$1 = state_42961;var statearr_42975_42994 = state_42961__$1;(statearr_42975_42994[(2)] = inst_42953);
(statearr_42975_42994[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_42962 === (8)))
{var inst_42942 = (state_42961[(9)]);var inst_42933 = (state_42961[(10)]);var inst_42941 = (state_42961[(7)]);var inst_42940 = (state_42961[(8)]);var inst_42945 = (function (){var c = inst_42942;var v = inst_42941;var vec__42938 = inst_42940;var cs = inst_42933;return ((function (c,v,vec__42938,cs,inst_42942,inst_42933,inst_42941,inst_42940,state_val_42962,c__5693__auto___42985,out){
return (function (p1__42878_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42878_SHARP_);
});
;})(c,v,vec__42938,cs,inst_42942,inst_42933,inst_42941,inst_42940,state_val_42962,c__5693__auto___42985,out))
})();var inst_42946 = cljs.core.filterv(inst_42945,inst_42933);var inst_42933__$1 = inst_42946;var state_42961__$1 = (function (){var statearr_42976 = state_42961;(statearr_42976[(10)] = inst_42933__$1);
return statearr_42976;
})();var statearr_42977_42995 = state_42961__$1;(statearr_42977_42995[(2)] = null);
(statearr_42977_42995[(1)] = (2));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___42985,out))
;return ((function (switch__5678__auto__,c__5693__auto___42985,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42981 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42981[(0)] = state_machine__5679__auto__);
(statearr_42981[(1)] = (1));
return statearr_42981;
});
var state_machine__5679__auto____1 = (function (state_42961){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42961);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42982){if((e42982 instanceof Object))
{var ex__5682__auto__ = e42982;var statearr_42983_42996 = state_42961;(statearr_42983_42996[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42961);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e42982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__42997 = state_42961;
state_42961 = G__42997;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42961){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42985,out))
})();var state__5695__auto__ = (function (){var statearr_42984 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42985);
return statearr_42984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42985,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___43090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___43090,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___43090,out){
return (function (state_43067){var state_val_43068 = (state_43067[(1)]);if((state_val_43068 === (7)))
{var inst_43049 = (state_43067[(7)]);var inst_43049__$1 = (state_43067[(2)]);var inst_43050 = (inst_43049__$1 == null);var inst_43051 = cljs.core.not(inst_43050);var state_43067__$1 = (function (){var statearr_43069 = state_43067;(statearr_43069[(7)] = inst_43049__$1);
return statearr_43069;
})();if(inst_43051)
{var statearr_43070_43091 = state_43067__$1;(statearr_43070_43091[(1)] = (8));
} else
{var statearr_43071_43092 = state_43067__$1;(statearr_43071_43092[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43068 === (1)))
{var inst_43044 = (0);var state_43067__$1 = (function (){var statearr_43072 = state_43067;(statearr_43072[(8)] = inst_43044);
return statearr_43072;
})();var statearr_43073_43093 = state_43067__$1;(statearr_43073_43093[(2)] = null);
(statearr_43073_43093[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43068 === (4)))
{var state_43067__$1 = state_43067;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43067__$1,(7),ch);
} else
{if((state_val_43068 === (6)))
{var inst_43062 = (state_43067[(2)]);var state_43067__$1 = state_43067;var statearr_43074_43094 = state_43067__$1;(statearr_43074_43094[(2)] = inst_43062);
(statearr_43074_43094[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43068 === (3)))
{var inst_43064 = (state_43067[(2)]);var inst_43065 = cljs.core.async.close_BANG_(out);var state_43067__$1 = (function (){var statearr_43075 = state_43067;(statearr_43075[(9)] = inst_43064);
return statearr_43075;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_43067__$1,inst_43065);
} else
{if((state_val_43068 === (2)))
{var inst_43044 = (state_43067[(8)]);var inst_43046 = (inst_43044 < n);var state_43067__$1 = state_43067;if(cljs.core.truth_(inst_43046))
{var statearr_43076_43095 = state_43067__$1;(statearr_43076_43095[(1)] = (4));
} else
{var statearr_43077_43096 = state_43067__$1;(statearr_43077_43096[(1)] = (5));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43068 === (11)))
{var inst_43044 = (state_43067[(8)]);var inst_43054 = (state_43067[(2)]);var inst_43055 = (inst_43044 + (1));var inst_43044__$1 = inst_43055;var state_43067__$1 = (function (){var statearr_43078 = state_43067;(statearr_43078[(8)] = inst_43044__$1);
(statearr_43078[(10)] = inst_43054);
return statearr_43078;
})();var statearr_43079_43097 = state_43067__$1;(statearr_43079_43097[(2)] = null);
(statearr_43079_43097[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43068 === (9)))
{var state_43067__$1 = state_43067;var statearr_43080_43098 = state_43067__$1;(statearr_43080_43098[(2)] = null);
(statearr_43080_43098[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43068 === (5)))
{var state_43067__$1 = state_43067;var statearr_43081_43099 = state_43067__$1;(statearr_43081_43099[(2)] = null);
(statearr_43081_43099[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43068 === (10)))
{var inst_43059 = (state_43067[(2)]);var state_43067__$1 = state_43067;var statearr_43082_43100 = state_43067__$1;(statearr_43082_43100[(2)] = inst_43059);
(statearr_43082_43100[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43068 === (8)))
{var inst_43049 = (state_43067[(7)]);var state_43067__$1 = state_43067;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43067__$1,(11),out,inst_43049);
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
});})(c__5693__auto___43090,out))
;return ((function (switch__5678__auto__,c__5693__auto___43090,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_43086 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_43086[(0)] = state_machine__5679__auto__);
(statearr_43086[(1)] = (1));
return statearr_43086;
});
var state_machine__5679__auto____1 = (function (state_43067){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_43067);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e43087){if((e43087 instanceof Object))
{var ex__5682__auto__ = e43087;var statearr_43088_43101 = state_43067;(statearr_43088_43101[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43067);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e43087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__43102 = state_43067;
state_43067 = G__43102;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_43067){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_43067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___43090,out))
})();var state__5695__auto__ = (function (){var statearr_43089 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_43089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___43090);
return statearr_43089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___43090,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___43199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___43199,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___43199,out){
return (function (state_43174){var state_val_43175 = (state_43174[(1)]);if((state_val_43175 === (7)))
{var inst_43169 = (state_43174[(2)]);var state_43174__$1 = state_43174;var statearr_43176_43200 = state_43174__$1;(statearr_43176_43200[(2)] = inst_43169);
(statearr_43176_43200[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43175 === (1)))
{var inst_43151 = null;var state_43174__$1 = (function (){var statearr_43177 = state_43174;(statearr_43177[(7)] = inst_43151);
return statearr_43177;
})();var statearr_43178_43201 = state_43174__$1;(statearr_43178_43201[(2)] = null);
(statearr_43178_43201[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43175 === (4)))
{var inst_43154 = (state_43174[(8)]);var inst_43154__$1 = (state_43174[(2)]);var inst_43155 = (inst_43154__$1 == null);var inst_43156 = cljs.core.not(inst_43155);var state_43174__$1 = (function (){var statearr_43179 = state_43174;(statearr_43179[(8)] = inst_43154__$1);
return statearr_43179;
})();if(inst_43156)
{var statearr_43180_43202 = state_43174__$1;(statearr_43180_43202[(1)] = (5));
} else
{var statearr_43181_43203 = state_43174__$1;(statearr_43181_43203[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43175 === (6)))
{var state_43174__$1 = state_43174;var statearr_43182_43204 = state_43174__$1;(statearr_43182_43204[(2)] = null);
(statearr_43182_43204[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43175 === (3)))
{var inst_43171 = (state_43174[(2)]);var inst_43172 = cljs.core.async.close_BANG_(out);var state_43174__$1 = (function (){var statearr_43183 = state_43174;(statearr_43183[(9)] = inst_43171);
return statearr_43183;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_43174__$1,inst_43172);
} else
{if((state_val_43175 === (2)))
{var state_43174__$1 = state_43174;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43174__$1,(4),ch);
} else
{if((state_val_43175 === (11)))
{var inst_43154 = (state_43174[(8)]);var inst_43163 = (state_43174[(2)]);var inst_43151 = inst_43154;var state_43174__$1 = (function (){var statearr_43184 = state_43174;(statearr_43184[(10)] = inst_43163);
(statearr_43184[(7)] = inst_43151);
return statearr_43184;
})();var statearr_43185_43205 = state_43174__$1;(statearr_43185_43205[(2)] = null);
(statearr_43185_43205[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43175 === (9)))
{var inst_43154 = (state_43174[(8)]);var state_43174__$1 = state_43174;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43174__$1,(11),out,inst_43154);
} else
{if((state_val_43175 === (5)))
{var inst_43151 = (state_43174[(7)]);var inst_43154 = (state_43174[(8)]);var inst_43158 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43154,inst_43151);var state_43174__$1 = state_43174;if(inst_43158)
{var statearr_43187_43206 = state_43174__$1;(statearr_43187_43206[(1)] = (8));
} else
{var statearr_43188_43207 = state_43174__$1;(statearr_43188_43207[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43175 === (10)))
{var inst_43166 = (state_43174[(2)]);var state_43174__$1 = state_43174;var statearr_43189_43208 = state_43174__$1;(statearr_43189_43208[(2)] = inst_43166);
(statearr_43189_43208[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43175 === (8)))
{var inst_43151 = (state_43174[(7)]);var tmp43186 = inst_43151;var inst_43151__$1 = tmp43186;var state_43174__$1 = (function (){var statearr_43190 = state_43174;(statearr_43190[(7)] = inst_43151__$1);
return statearr_43190;
})();var statearr_43191_43209 = state_43174__$1;(statearr_43191_43209[(2)] = null);
(statearr_43191_43209[(1)] = (2));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___43199,out))
;return ((function (switch__5678__auto__,c__5693__auto___43199,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_43195 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_43195[(0)] = state_machine__5679__auto__);
(statearr_43195[(1)] = (1));
return statearr_43195;
});
var state_machine__5679__auto____1 = (function (state_43174){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_43174);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e43196){if((e43196 instanceof Object))
{var ex__5682__auto__ = e43196;var statearr_43197_43210 = state_43174;(statearr_43197_43210[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43174);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e43196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__43211 = state_43174;
state_43174 = G__43211;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_43174){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_43174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___43199,out))
})();var state__5695__auto__ = (function (){var statearr_43198 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_43198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___43199);
return statearr_43198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___43199,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___43346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___43346,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___43346,out){
return (function (state_43316){var state_val_43317 = (state_43316[(1)]);if((state_val_43317 === (7)))
{var inst_43312 = (state_43316[(2)]);var state_43316__$1 = state_43316;var statearr_43318_43347 = state_43316__$1;(statearr_43318_43347[(2)] = inst_43312);
(statearr_43318_43347[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43317 === (1)))
{var inst_43279 = (new Array(n));var inst_43280 = inst_43279;var inst_43281 = (0);var state_43316__$1 = (function (){var statearr_43319 = state_43316;(statearr_43319[(7)] = inst_43281);
(statearr_43319[(8)] = inst_43280);
return statearr_43319;
})();var statearr_43320_43348 = state_43316__$1;(statearr_43320_43348[(2)] = null);
(statearr_43320_43348[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43317 === (4)))
{var inst_43284 = (state_43316[(9)]);var inst_43284__$1 = (state_43316[(2)]);var inst_43285 = (inst_43284__$1 == null);var inst_43286 = cljs.core.not(inst_43285);var state_43316__$1 = (function (){var statearr_43321 = state_43316;(statearr_43321[(9)] = inst_43284__$1);
return statearr_43321;
})();if(inst_43286)
{var statearr_43322_43349 = state_43316__$1;(statearr_43322_43349[(1)] = (5));
} else
{var statearr_43323_43350 = state_43316__$1;(statearr_43323_43350[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43317 === (15)))
{var inst_43306 = (state_43316[(2)]);var state_43316__$1 = state_43316;var statearr_43324_43351 = state_43316__$1;(statearr_43324_43351[(2)] = inst_43306);
(statearr_43324_43351[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43317 === (13)))
{var state_43316__$1 = state_43316;var statearr_43325_43352 = state_43316__$1;(statearr_43325_43352[(2)] = null);
(statearr_43325_43352[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43317 === (6)))
{var inst_43281 = (state_43316[(7)]);var inst_43302 = (inst_43281 > (0));var state_43316__$1 = state_43316;if(cljs.core.truth_(inst_43302))
{var statearr_43326_43353 = state_43316__$1;(statearr_43326_43353[(1)] = (12));
} else
{var statearr_43327_43354 = state_43316__$1;(statearr_43327_43354[(1)] = (13));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43317 === (3)))
{var inst_43314 = (state_43316[(2)]);var state_43316__$1 = state_43316;return cljs.core.async.impl.ioc_helpers.return_chan(state_43316__$1,inst_43314);
} else
{if((state_val_43317 === (12)))
{var inst_43280 = (state_43316[(8)]);var inst_43304 = cljs.core.vec(inst_43280);var state_43316__$1 = state_43316;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43316__$1,(15),out,inst_43304);
} else
{if((state_val_43317 === (2)))
{var state_43316__$1 = state_43316;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43316__$1,(4),ch);
} else
{if((state_val_43317 === (11)))
{var inst_43296 = (state_43316[(2)]);var inst_43297 = (new Array(n));var inst_43280 = inst_43297;var inst_43281 = (0);var state_43316__$1 = (function (){var statearr_43328 = state_43316;(statearr_43328[(10)] = inst_43296);
(statearr_43328[(7)] = inst_43281);
(statearr_43328[(8)] = inst_43280);
return statearr_43328;
})();var statearr_43329_43355 = state_43316__$1;(statearr_43329_43355[(2)] = null);
(statearr_43329_43355[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43317 === (9)))
{var inst_43280 = (state_43316[(8)]);var inst_43294 = cljs.core.vec(inst_43280);var state_43316__$1 = state_43316;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43316__$1,(11),out,inst_43294);
} else
{if((state_val_43317 === (5)))
{var inst_43284 = (state_43316[(9)]);var inst_43281 = (state_43316[(7)]);var inst_43280 = (state_43316[(8)]);var inst_43289 = (state_43316[(11)]);var inst_43288 = (inst_43280[inst_43281] = inst_43284);var inst_43289__$1 = (inst_43281 + (1));var inst_43290 = (inst_43289__$1 < n);var state_43316__$1 = (function (){var statearr_43330 = state_43316;(statearr_43330[(12)] = inst_43288);
(statearr_43330[(11)] = inst_43289__$1);
return statearr_43330;
})();if(cljs.core.truth_(inst_43290))
{var statearr_43331_43356 = state_43316__$1;(statearr_43331_43356[(1)] = (8));
} else
{var statearr_43332_43357 = state_43316__$1;(statearr_43332_43357[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43317 === (14)))
{var inst_43309 = (state_43316[(2)]);var inst_43310 = cljs.core.async.close_BANG_(out);var state_43316__$1 = (function (){var statearr_43334 = state_43316;(statearr_43334[(13)] = inst_43309);
return statearr_43334;
})();var statearr_43335_43358 = state_43316__$1;(statearr_43335_43358[(2)] = inst_43310);
(statearr_43335_43358[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43317 === (10)))
{var inst_43300 = (state_43316[(2)]);var state_43316__$1 = state_43316;var statearr_43336_43359 = state_43316__$1;(statearr_43336_43359[(2)] = inst_43300);
(statearr_43336_43359[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43317 === (8)))
{var inst_43280 = (state_43316[(8)]);var inst_43289 = (state_43316[(11)]);var tmp43333 = inst_43280;var inst_43280__$1 = tmp43333;var inst_43281 = inst_43289;var state_43316__$1 = (function (){var statearr_43337 = state_43316;(statearr_43337[(7)] = inst_43281);
(statearr_43337[(8)] = inst_43280__$1);
return statearr_43337;
})();var statearr_43338_43360 = state_43316__$1;(statearr_43338_43360[(2)] = null);
(statearr_43338_43360[(1)] = (2));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___43346,out))
;return ((function (switch__5678__auto__,c__5693__auto___43346,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_43342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43342[(0)] = state_machine__5679__auto__);
(statearr_43342[(1)] = (1));
return statearr_43342;
});
var state_machine__5679__auto____1 = (function (state_43316){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_43316);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e43343){if((e43343 instanceof Object))
{var ex__5682__auto__ = e43343;var statearr_43344_43361 = state_43316;(statearr_43344_43361[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43316);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e43343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__43362 = state_43316;
state_43316 = G__43362;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_43316){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_43316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___43346,out))
})();var state__5695__auto__ = (function (){var statearr_43345 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_43345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___43346);
return statearr_43345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___43346,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___43505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___43505,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___43505,out){
return (function (state_43475){var state_val_43476 = (state_43475[(1)]);if((state_val_43476 === (7)))
{var inst_43471 = (state_43475[(2)]);var state_43475__$1 = state_43475;var statearr_43477_43506 = state_43475__$1;(statearr_43477_43506[(2)] = inst_43471);
(statearr_43477_43506[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43476 === (1)))
{var inst_43434 = [];var inst_43435 = inst_43434;var inst_43436 = cljs.core.constant$keyword$786;var state_43475__$1 = (function (){var statearr_43478 = state_43475;(statearr_43478[(7)] = inst_43436);
(statearr_43478[(8)] = inst_43435);
return statearr_43478;
})();var statearr_43479_43507 = state_43475__$1;(statearr_43479_43507[(2)] = null);
(statearr_43479_43507[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43476 === (4)))
{var inst_43439 = (state_43475[(9)]);var inst_43439__$1 = (state_43475[(2)]);var inst_43440 = (inst_43439__$1 == null);var inst_43441 = cljs.core.not(inst_43440);var state_43475__$1 = (function (){var statearr_43480 = state_43475;(statearr_43480[(9)] = inst_43439__$1);
return statearr_43480;
})();if(inst_43441)
{var statearr_43481_43508 = state_43475__$1;(statearr_43481_43508[(1)] = (5));
} else
{var statearr_43482_43509 = state_43475__$1;(statearr_43482_43509[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43476 === (15)))
{var inst_43465 = (state_43475[(2)]);var state_43475__$1 = state_43475;var statearr_43483_43510 = state_43475__$1;(statearr_43483_43510[(2)] = inst_43465);
(statearr_43483_43510[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43476 === (13)))
{var state_43475__$1 = state_43475;var statearr_43484_43511 = state_43475__$1;(statearr_43484_43511[(2)] = null);
(statearr_43484_43511[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43476 === (6)))
{var inst_43435 = (state_43475[(8)]);var inst_43460 = inst_43435.length;var inst_43461 = (inst_43460 > (0));var state_43475__$1 = state_43475;if(cljs.core.truth_(inst_43461))
{var statearr_43485_43512 = state_43475__$1;(statearr_43485_43512[(1)] = (12));
} else
{var statearr_43486_43513 = state_43475__$1;(statearr_43486_43513[(1)] = (13));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43476 === (3)))
{var inst_43473 = (state_43475[(2)]);var state_43475__$1 = state_43475;return cljs.core.async.impl.ioc_helpers.return_chan(state_43475__$1,inst_43473);
} else
{if((state_val_43476 === (12)))
{var inst_43435 = (state_43475[(8)]);var inst_43463 = cljs.core.vec(inst_43435);var state_43475__$1 = state_43475;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43475__$1,(15),out,inst_43463);
} else
{if((state_val_43476 === (2)))
{var state_43475__$1 = state_43475;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43475__$1,(4),ch);
} else
{if((state_val_43476 === (11)))
{var inst_43439 = (state_43475[(9)]);var inst_43443 = (state_43475[(10)]);var inst_43453 = (state_43475[(2)]);var inst_43454 = [];var inst_43455 = inst_43454.push(inst_43439);var inst_43435 = inst_43454;var inst_43436 = inst_43443;var state_43475__$1 = (function (){var statearr_43487 = state_43475;(statearr_43487[(7)] = inst_43436);
(statearr_43487[(11)] = inst_43455);
(statearr_43487[(8)] = inst_43435);
(statearr_43487[(12)] = inst_43453);
return statearr_43487;
})();var statearr_43488_43514 = state_43475__$1;(statearr_43488_43514[(2)] = null);
(statearr_43488_43514[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43476 === (9)))
{var inst_43435 = (state_43475[(8)]);var inst_43451 = cljs.core.vec(inst_43435);var state_43475__$1 = state_43475;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43475__$1,(11),out,inst_43451);
} else
{if((state_val_43476 === (5)))
{var inst_43439 = (state_43475[(9)]);var inst_43436 = (state_43475[(7)]);var inst_43443 = (state_43475[(10)]);var inst_43443__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43439) : f.call(null,inst_43439));var inst_43444 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43443__$1,inst_43436);var inst_43445 = cljs.core.keyword_identical_QMARK_(inst_43436,cljs.core.constant$keyword$786);var inst_43446 = (inst_43444) || (inst_43445);var state_43475__$1 = (function (){var statearr_43489 = state_43475;(statearr_43489[(10)] = inst_43443__$1);
return statearr_43489;
})();if(cljs.core.truth_(inst_43446))
{var statearr_43490_43515 = state_43475__$1;(statearr_43490_43515[(1)] = (8));
} else
{var statearr_43491_43516 = state_43475__$1;(statearr_43491_43516[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_43476 === (14)))
{var inst_43468 = (state_43475[(2)]);var inst_43469 = cljs.core.async.close_BANG_(out);var state_43475__$1 = (function (){var statearr_43493 = state_43475;(statearr_43493[(13)] = inst_43468);
return statearr_43493;
})();var statearr_43494_43517 = state_43475__$1;(statearr_43494_43517[(2)] = inst_43469);
(statearr_43494_43517[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43476 === (10)))
{var inst_43458 = (state_43475[(2)]);var state_43475__$1 = state_43475;var statearr_43495_43518 = state_43475__$1;(statearr_43495_43518[(2)] = inst_43458);
(statearr_43495_43518[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_43476 === (8)))
{var inst_43439 = (state_43475[(9)]);var inst_43435 = (state_43475[(8)]);var inst_43443 = (state_43475[(10)]);var inst_43448 = inst_43435.push(inst_43439);var tmp43492 = inst_43435;var inst_43435__$1 = tmp43492;var inst_43436 = inst_43443;var state_43475__$1 = (function (){var statearr_43496 = state_43475;(statearr_43496[(7)] = inst_43436);
(statearr_43496[(14)] = inst_43448);
(statearr_43496[(8)] = inst_43435__$1);
return statearr_43496;
})();var statearr_43497_43519 = state_43475__$1;(statearr_43497_43519[(2)] = null);
(statearr_43497_43519[(1)] = (2));
return cljs.core.constant$keyword$773;
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
});})(c__5693__auto___43505,out))
;return ((function (switch__5678__auto__,c__5693__auto___43505,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_43501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43501[(0)] = state_machine__5679__auto__);
(statearr_43501[(1)] = (1));
return statearr_43501;
});
var state_machine__5679__auto____1 = (function (state_43475){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_43475);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e43502){if((e43502 instanceof Object))
{var ex__5682__auto__ = e43502;var statearr_43503_43520 = state_43475;(statearr_43503_43520[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43475);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e43502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__43521 = state_43475;
state_43475 = G__43521;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_43475){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_43475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___43505,out))
})();var state__5695__auto__ = (function (){var statearr_43504 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_43504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___43505);
return statearr_43504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___43505,out))
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
