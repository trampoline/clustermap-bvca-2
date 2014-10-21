// Compiled by ClojureScript 0.0-2322
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t46611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46611 = (function (f,fn_handler,meta46612){
this.f = f;
this.fn_handler = fn_handler;
this.meta46612 = meta46612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46611.cljs$lang$type = true;
cljs.core.async.t46611.cljs$lang$ctorStr = "cljs.core.async/t46611";
cljs.core.async.t46611.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t46611");
});
cljs.core.async.t46611.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t46611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t46611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46613){var self__ = this;
var _46613__$1 = this;return self__.meta46612;
});
cljs.core.async.t46611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46613,meta46612__$1){var self__ = this;
var _46613__$1 = this;return (new cljs.core.async.t46611(self__.f,self__.fn_handler,meta46612__$1));
});
cljs.core.async.__GT_t46611 = (function __GT_t46611(f__$1,fn_handler__$1,meta46612){return (new cljs.core.async.t46611(f__$1,fn_handler__$1,meta46612));
});
}
return (new cljs.core.async.t46611(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__46615 = buff;if(G__46615)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__46615.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__46615.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__46615);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__46615);
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

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
{var val_46616 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46616) : fn1.call(null,val_46616));
} else
{cljs.core.async.impl.dispatch.run(((function (val_46616,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46616) : fn1.call(null,val_46616));
});})(val_46616,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3546__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___46617 = n;var x_46618 = (0);while(true){
if((x_46618 < n__4414__auto___46617))
{(a[x_46618] = (0));
{
var G__46619 = (x_46618 + (1));
x_46618 = G__46619;
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
var G__46620 = (i + (1));
i = G__46620;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));if(typeof cljs.core.async.t46624 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46624 = (function (flag,alt_flag,meta46625){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta46625 = meta46625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46624.cljs$lang$type = true;
cljs.core.async.t46624.cljs$lang$ctorStr = "cljs.core.async/t46624";
cljs.core.async.t46624.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t46624");
});})(flag))
;
cljs.core.async.t46624.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46624.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;
cljs.core.async.t46624.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));
return true;
});})(flag))
;
cljs.core.async.t46624.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46626){var self__ = this;
var _46626__$1 = this;return self__.meta46625;
});})(flag))
;
cljs.core.async.t46624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46626,meta46625__$1){var self__ = this;
var _46626__$1 = this;return (new cljs.core.async.t46624(self__.flag,self__.alt_flag,meta46625__$1));
});})(flag))
;
cljs.core.async.__GT_t46624 = ((function (flag){
return (function __GT_t46624(flag__$1,alt_flag__$1,meta46625){return (new cljs.core.async.t46624(flag__$1,alt_flag__$1,meta46625));
});})(flag))
;
}
return (new cljs.core.async.t46624(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t46630 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46630 = (function (cb,flag,alt_handler,meta46631){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta46631 = meta46631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46630.cljs$lang$type = true;
cljs.core.async.t46630.cljs$lang$ctorStr = "cljs.core.async/t46630";
cljs.core.async.t46630.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t46630");
});
cljs.core.async.t46630.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t46630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t46630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46632){var self__ = this;
var _46632__$1 = this;return self__.meta46631;
});
cljs.core.async.t46630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46632,meta46631__$1){var self__ = this;
var _46632__$1 = this;return (new cljs.core.async.t46630(self__.cb,self__.flag,self__.alt_handler,meta46631__$1));
});
cljs.core.async.__GT_t46630 = (function __GT_t46630(cb__$1,flag__$1,alt_handler__$1,meta46631){return (new cljs.core.async.t46630(cb__$1,flag__$1,alt_handler__$1,meta46631));
});
}
return (new cljs.core.async.t46630(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$1106.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46633_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46633_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46633_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__46634 = (i + (1));
i = G__46634;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3558__auto__ = ret;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$1091))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3546__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$1091], null));
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
var alts_BANG___delegate = function (ports,p__46635){var map__46637 = p__46635;var map__46637__$1 = ((cljs.core.seq_QMARK_(map__46637))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46637):map__46637);var opts = map__46637__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__46635 = null;if (arguments.length > 1) {
  p__46635 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__46635);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__46638){
var ports = cljs.core.first(arglist__46638);
var p__46635 = cljs.core.rest(arglist__46638);
return alts_BANG___delegate(ports,p__46635);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t46646 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46646 = (function (ch,f,map_LT_,meta46647){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta46647 = meta46647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46646.cljs$lang$type = true;
cljs.core.async.t46646.cljs$lang$ctorStr = "cljs.core.async/t46646";
cljs.core.async.t46646.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t46646");
});
cljs.core.async.t46646.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t46646.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t46649 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46649 = (function (fn1,_,meta46647,ch,f,map_LT_,meta46650){
this.fn1 = fn1;
this._ = _;
this.meta46647 = meta46647;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta46650 = meta46650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46649.cljs$lang$type = true;
cljs.core.async.t46649.cljs$lang$ctorStr = "cljs.core.async/t46649";
cljs.core.async.t46649.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t46649");
});})(___$1))
;
cljs.core.async.t46649.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46649.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t46649.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t46649.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__46639_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__46639_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46639_SHARP_) : self__.f.call(null,p1__46639_SHARP_)))) : f1.call(null,(((p1__46639_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46639_SHARP_) : self__.f.call(null,p1__46639_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t46649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46651){var self__ = this;
var _46651__$1 = this;return self__.meta46650;
});})(___$1))
;
cljs.core.async.t46649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46651,meta46650__$1){var self__ = this;
var _46651__$1 = this;return (new cljs.core.async.t46649(self__.fn1,self__._,self__.meta46647,self__.ch,self__.f,self__.map_LT_,meta46650__$1));
});})(___$1))
;
cljs.core.async.__GT_t46649 = ((function (___$1){
return (function __GT_t46649(fn1__$1,___$2,meta46647__$1,ch__$2,f__$2,map_LT___$2,meta46650){return (new cljs.core.async.t46649(fn1__$1,___$2,meta46647__$1,ch__$2,f__$2,map_LT___$2,meta46650));
});})(___$1))
;
}
return (new cljs.core.async.t46649(fn1,___$1,self__.meta46647,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret))) : self__.f.call(null,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)))));
} else
{return ret;
}
});
cljs.core.async.t46646.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t46646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46648){var self__ = this;
var _46648__$1 = this;return self__.meta46647;
});
cljs.core.async.t46646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46648,meta46647__$1){var self__ = this;
var _46648__$1 = this;return (new cljs.core.async.t46646(self__.ch,self__.f,self__.map_LT_,meta46647__$1));
});
cljs.core.async.__GT_t46646 = (function __GT_t46646(ch__$1,f__$1,map_LT___$1,meta46647){return (new cljs.core.async.t46646(ch__$1,f__$1,map_LT___$1,meta46647));
});
}
return (new cljs.core.async.t46646(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t46655 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46655 = (function (ch,f,map_GT_,meta46656){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta46656 = meta46656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46655.cljs$lang$type = true;
cljs.core.async.t46655.cljs$lang$ctorStr = "cljs.core.async/t46655";
cljs.core.async.t46655.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t46655");
});
cljs.core.async.t46655.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46655.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t46655.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46655.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t46655.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46655.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t46655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46657){var self__ = this;
var _46657__$1 = this;return self__.meta46656;
});
cljs.core.async.t46655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46657,meta46656__$1){var self__ = this;
var _46657__$1 = this;return (new cljs.core.async.t46655(self__.ch,self__.f,self__.map_GT_,meta46656__$1));
});
cljs.core.async.__GT_t46655 = (function __GT_t46655(ch__$1,f__$1,map_GT___$1,meta46656){return (new cljs.core.async.t46655(ch__$1,f__$1,map_GT___$1,meta46656));
});
}
return (new cljs.core.async.t46655(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t46661 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46661 = (function (ch,p,filter_GT_,meta46662){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta46662 = meta46662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46661.cljs$lang$type = true;
cljs.core.async.t46661.cljs$lang$ctorStr = "cljs.core.async/t46661";
cljs.core.async.t46661.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t46661");
});
cljs.core.async.t46661.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t46661.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t46661.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t46661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46663){var self__ = this;
var _46663__$1 = this;return self__.meta46662;
});
cljs.core.async.t46661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46663,meta46662__$1){var self__ = this;
var _46663__$1 = this;return (new cljs.core.async.t46661(self__.ch,self__.p,self__.filter_GT_,meta46662__$1));
});
cljs.core.async.__GT_t46661 = (function __GT_t46661(ch__$1,p__$1,filter_GT___$1,meta46662){return (new cljs.core.async.t46661(ch__$1,p__$1,filter_GT___$1,meta46662));
});
}
return (new cljs.core.async.t46661(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___46746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___46746,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___46746,out){
return (function (state_46725){var state_val_46726 = (state_46725[(1)]);if((state_val_46726 === (7)))
{var inst_46721 = (state_46725[(2)]);var state_46725__$1 = state_46725;var statearr_46727_46747 = state_46725__$1;(statearr_46727_46747[(2)] = inst_46721);
(statearr_46727_46747[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46726 === (1)))
{var state_46725__$1 = state_46725;var statearr_46728_46748 = state_46725__$1;(statearr_46728_46748[(2)] = null);
(statearr_46728_46748[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46726 === (4)))
{var inst_46707 = (state_46725[(7)]);var inst_46707__$1 = (state_46725[(2)]);var inst_46708 = (inst_46707__$1 == null);var state_46725__$1 = (function (){var statearr_46729 = state_46725;(statearr_46729[(7)] = inst_46707__$1);
return statearr_46729;
})();if(cljs.core.truth_(inst_46708))
{var statearr_46730_46749 = state_46725__$1;(statearr_46730_46749[(1)] = (5));
} else
{var statearr_46731_46750 = state_46725__$1;(statearr_46731_46750[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46726 === (6)))
{var inst_46707 = (state_46725[(7)]);var inst_46712 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46707) : p.call(null,inst_46707));var state_46725__$1 = state_46725;if(cljs.core.truth_(inst_46712))
{var statearr_46732_46751 = state_46725__$1;(statearr_46732_46751[(1)] = (8));
} else
{var statearr_46733_46752 = state_46725__$1;(statearr_46733_46752[(1)] = (9));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46726 === (3)))
{var inst_46723 = (state_46725[(2)]);var state_46725__$1 = state_46725;return cljs.core.async.impl.ioc_helpers.return_chan(state_46725__$1,inst_46723);
} else
{if((state_val_46726 === (2)))
{var state_46725__$1 = state_46725;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46725__$1,(4),ch);
} else
{if((state_val_46726 === (11)))
{var inst_46715 = (state_46725[(2)]);var state_46725__$1 = state_46725;var statearr_46734_46753 = state_46725__$1;(statearr_46734_46753[(2)] = inst_46715);
(statearr_46734_46753[(1)] = (10));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46726 === (9)))
{var state_46725__$1 = state_46725;var statearr_46735_46754 = state_46725__$1;(statearr_46735_46754[(2)] = null);
(statearr_46735_46754[(1)] = (10));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46726 === (5)))
{var inst_46710 = cljs.core.async.close_BANG_(out);var state_46725__$1 = state_46725;var statearr_46736_46755 = state_46725__$1;(statearr_46736_46755[(2)] = inst_46710);
(statearr_46736_46755[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46726 === (10)))
{var inst_46718 = (state_46725[(2)]);var state_46725__$1 = (function (){var statearr_46737 = state_46725;(statearr_46737[(8)] = inst_46718);
return statearr_46737;
})();var statearr_46738_46756 = state_46725__$1;(statearr_46738_46756[(2)] = null);
(statearr_46738_46756[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46726 === (8)))
{var inst_46707 = (state_46725[(7)]);var state_46725__$1 = state_46725;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46725__$1,(11),out,inst_46707);
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
});})(c__5708__auto___46746,out))
;return ((function (switch__5693__auto__,c__5708__auto___46746,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_46742 = [null,null,null,null,null,null,null,null,null];(statearr_46742[(0)] = state_machine__5694__auto__);
(statearr_46742[(1)] = (1));
return statearr_46742;
});
var state_machine__5694__auto____1 = (function (state_46725){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46725);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46743){if((e46743 instanceof Object))
{var ex__5697__auto__ = e46743;var statearr_46744_46757 = state_46725;(statearr_46744_46757[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46725);
return cljs.core.constant$keyword$1100;
} else
{throw e46743;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__46758 = state_46725;
state_46725 = G__46758;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46725){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___46746,out))
})();var state__5710__auto__ = (function (){var statearr_46745 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___46746);
return statearr_46745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___46746,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_46910){var state_val_46911 = (state_46910[(1)]);if((state_val_46911 === (7)))
{var inst_46906 = (state_46910[(2)]);var state_46910__$1 = state_46910;var statearr_46912_46949 = state_46910__$1;(statearr_46912_46949[(2)] = inst_46906);
(statearr_46912_46949[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (20)))
{var inst_46881 = (state_46910[(7)]);var inst_46892 = (state_46910[(2)]);var inst_46893 = cljs.core.next(inst_46881);var inst_46867 = inst_46893;var inst_46868 = null;var inst_46869 = (0);var inst_46870 = (0);var state_46910__$1 = (function (){var statearr_46913 = state_46910;(statearr_46913[(8)] = inst_46892);
(statearr_46913[(9)] = inst_46869);
(statearr_46913[(10)] = inst_46867);
(statearr_46913[(11)] = inst_46870);
(statearr_46913[(12)] = inst_46868);
return statearr_46913;
})();var statearr_46914_46950 = state_46910__$1;(statearr_46914_46950[(2)] = null);
(statearr_46914_46950[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (1)))
{var state_46910__$1 = state_46910;var statearr_46915_46951 = state_46910__$1;(statearr_46915_46951[(2)] = null);
(statearr_46915_46951[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (4)))
{var inst_46856 = (state_46910[(13)]);var inst_46856__$1 = (state_46910[(2)]);var inst_46857 = (inst_46856__$1 == null);var state_46910__$1 = (function (){var statearr_46919 = state_46910;(statearr_46919[(13)] = inst_46856__$1);
return statearr_46919;
})();if(cljs.core.truth_(inst_46857))
{var statearr_46920_46952 = state_46910__$1;(statearr_46920_46952[(1)] = (5));
} else
{var statearr_46921_46953 = state_46910__$1;(statearr_46921_46953[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (15)))
{var state_46910__$1 = state_46910;var statearr_46922_46954 = state_46910__$1;(statearr_46922_46954[(2)] = null);
(statearr_46922_46954[(1)] = (16));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (13)))
{var inst_46869 = (state_46910[(9)]);var inst_46867 = (state_46910[(10)]);var inst_46870 = (state_46910[(11)]);var inst_46868 = (state_46910[(12)]);var inst_46877 = (state_46910[(2)]);var inst_46878 = (inst_46870 + (1));var tmp46916 = inst_46869;var tmp46917 = inst_46867;var tmp46918 = inst_46868;var inst_46867__$1 = tmp46917;var inst_46868__$1 = tmp46918;var inst_46869__$1 = tmp46916;var inst_46870__$1 = inst_46878;var state_46910__$1 = (function (){var statearr_46923 = state_46910;(statearr_46923[(9)] = inst_46869__$1);
(statearr_46923[(14)] = inst_46877);
(statearr_46923[(10)] = inst_46867__$1);
(statearr_46923[(11)] = inst_46870__$1);
(statearr_46923[(12)] = inst_46868__$1);
return statearr_46923;
})();var statearr_46924_46955 = state_46910__$1;(statearr_46924_46955[(2)] = null);
(statearr_46924_46955[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (6)))
{var inst_46856 = (state_46910[(13)]);var inst_46861 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46856) : f.call(null,inst_46856));var inst_46866 = cljs.core.seq(inst_46861);var inst_46867 = inst_46866;var inst_46868 = null;var inst_46869 = (0);var inst_46870 = (0);var state_46910__$1 = (function (){var statearr_46925 = state_46910;(statearr_46925[(9)] = inst_46869);
(statearr_46925[(10)] = inst_46867);
(statearr_46925[(11)] = inst_46870);
(statearr_46925[(12)] = inst_46868);
return statearr_46925;
})();var statearr_46926_46956 = state_46910__$1;(statearr_46926_46956[(2)] = null);
(statearr_46926_46956[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (17)))
{var inst_46881 = (state_46910[(7)]);var inst_46885 = cljs.core.chunk_first(inst_46881);var inst_46886 = cljs.core.chunk_rest(inst_46881);var inst_46887 = cljs.core.count(inst_46885);var inst_46867 = inst_46886;var inst_46868 = inst_46885;var inst_46869 = inst_46887;var inst_46870 = (0);var state_46910__$1 = (function (){var statearr_46927 = state_46910;(statearr_46927[(9)] = inst_46869);
(statearr_46927[(10)] = inst_46867);
(statearr_46927[(11)] = inst_46870);
(statearr_46927[(12)] = inst_46868);
return statearr_46927;
})();var statearr_46928_46957 = state_46910__$1;(statearr_46928_46957[(2)] = null);
(statearr_46928_46957[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (3)))
{var inst_46908 = (state_46910[(2)]);var state_46910__$1 = state_46910;return cljs.core.async.impl.ioc_helpers.return_chan(state_46910__$1,inst_46908);
} else
{if((state_val_46911 === (12)))
{var inst_46901 = (state_46910[(2)]);var state_46910__$1 = state_46910;var statearr_46929_46958 = state_46910__$1;(statearr_46929_46958[(2)] = inst_46901);
(statearr_46929_46958[(1)] = (9));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (2)))
{var state_46910__$1 = state_46910;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46910__$1,(4),in$);
} else
{if((state_val_46911 === (19)))
{var inst_46896 = (state_46910[(2)]);var state_46910__$1 = state_46910;var statearr_46930_46959 = state_46910__$1;(statearr_46930_46959[(2)] = inst_46896);
(statearr_46930_46959[(1)] = (16));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (11)))
{var inst_46881 = (state_46910[(7)]);var inst_46867 = (state_46910[(10)]);var inst_46881__$1 = cljs.core.seq(inst_46867);var state_46910__$1 = (function (){var statearr_46931 = state_46910;(statearr_46931[(7)] = inst_46881__$1);
return statearr_46931;
})();if(inst_46881__$1)
{var statearr_46932_46960 = state_46910__$1;(statearr_46932_46960[(1)] = (14));
} else
{var statearr_46933_46961 = state_46910__$1;(statearr_46933_46961[(1)] = (15));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (9)))
{var inst_46903 = (state_46910[(2)]);var state_46910__$1 = (function (){var statearr_46934 = state_46910;(statearr_46934[(15)] = inst_46903);
return statearr_46934;
})();var statearr_46935_46962 = state_46910__$1;(statearr_46935_46962[(2)] = null);
(statearr_46935_46962[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (5)))
{var inst_46859 = cljs.core.async.close_BANG_(out);var state_46910__$1 = state_46910;var statearr_46936_46963 = state_46910__$1;(statearr_46936_46963[(2)] = inst_46859);
(statearr_46936_46963[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (14)))
{var inst_46881 = (state_46910[(7)]);var inst_46883 = cljs.core.chunked_seq_QMARK_(inst_46881);var state_46910__$1 = state_46910;if(inst_46883)
{var statearr_46937_46964 = state_46910__$1;(statearr_46937_46964[(1)] = (17));
} else
{var statearr_46938_46965 = state_46910__$1;(statearr_46938_46965[(1)] = (18));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (16)))
{var inst_46899 = (state_46910[(2)]);var state_46910__$1 = state_46910;var statearr_46939_46966 = state_46910__$1;(statearr_46939_46966[(2)] = inst_46899);
(statearr_46939_46966[(1)] = (12));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_46911 === (10)))
{var inst_46870 = (state_46910[(11)]);var inst_46868 = (state_46910[(12)]);var inst_46875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46868,inst_46870);var state_46910__$1 = state_46910;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46910__$1,(13),out,inst_46875);
} else
{if((state_val_46911 === (18)))
{var inst_46881 = (state_46910[(7)]);var inst_46890 = cljs.core.first(inst_46881);var state_46910__$1 = state_46910;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46910__$1,(20),out,inst_46890);
} else
{if((state_val_46911 === (8)))
{var inst_46869 = (state_46910[(9)]);var inst_46870 = (state_46910[(11)]);var inst_46872 = (inst_46870 < inst_46869);var inst_46873 = inst_46872;var state_46910__$1 = state_46910;if(cljs.core.truth_(inst_46873))
{var statearr_46940_46967 = state_46910__$1;(statearr_46940_46967[(1)] = (10));
} else
{var statearr_46941_46968 = state_46910__$1;(statearr_46941_46968[(1)] = (11));
}
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_46945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46945[(0)] = state_machine__5694__auto__);
(statearr_46945[(1)] = (1));
return statearr_46945;
});
var state_machine__5694__auto____1 = (function (state_46910){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46910);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46946){if((e46946 instanceof Object))
{var ex__5697__auto__ = e46946;var statearr_46947_46969 = state_46910;(statearr_46947_46969[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46910);
return cljs.core.constant$keyword$1100;
} else
{throw e46946;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__46970 = state_46910;
state_46910 = G__46970;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46910){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_46948 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_46948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___47051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___47051){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___47051){
return (function (state_47030){var state_val_47031 = (state_47030[(1)]);if((state_val_47031 === (7)))
{var inst_47026 = (state_47030[(2)]);var state_47030__$1 = state_47030;var statearr_47032_47052 = state_47030__$1;(statearr_47032_47052[(2)] = inst_47026);
(statearr_47032_47052[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47031 === (1)))
{var state_47030__$1 = state_47030;var statearr_47033_47053 = state_47030__$1;(statearr_47033_47053[(2)] = null);
(statearr_47033_47053[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47031 === (4)))
{var inst_47013 = (state_47030[(7)]);var inst_47013__$1 = (state_47030[(2)]);var inst_47014 = (inst_47013__$1 == null);var state_47030__$1 = (function (){var statearr_47034 = state_47030;(statearr_47034[(7)] = inst_47013__$1);
return statearr_47034;
})();if(cljs.core.truth_(inst_47014))
{var statearr_47035_47054 = state_47030__$1;(statearr_47035_47054[(1)] = (5));
} else
{var statearr_47036_47055 = state_47030__$1;(statearr_47036_47055[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47031 === (6)))
{var inst_47013 = (state_47030[(7)]);var state_47030__$1 = state_47030;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47030__$1,(11),to,inst_47013);
} else
{if((state_val_47031 === (3)))
{var inst_47028 = (state_47030[(2)]);var state_47030__$1 = state_47030;return cljs.core.async.impl.ioc_helpers.return_chan(state_47030__$1,inst_47028);
} else
{if((state_val_47031 === (2)))
{var state_47030__$1 = state_47030;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47030__$1,(4),from);
} else
{if((state_val_47031 === (11)))
{var inst_47023 = (state_47030[(2)]);var state_47030__$1 = (function (){var statearr_47037 = state_47030;(statearr_47037[(8)] = inst_47023);
return statearr_47037;
})();var statearr_47038_47056 = state_47030__$1;(statearr_47038_47056[(2)] = null);
(statearr_47038_47056[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47031 === (9)))
{var state_47030__$1 = state_47030;var statearr_47039_47057 = state_47030__$1;(statearr_47039_47057[(2)] = null);
(statearr_47039_47057[(1)] = (10));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47031 === (5)))
{var state_47030__$1 = state_47030;if(cljs.core.truth_(close_QMARK_))
{var statearr_47040_47058 = state_47030__$1;(statearr_47040_47058[(1)] = (8));
} else
{var statearr_47041_47059 = state_47030__$1;(statearr_47041_47059[(1)] = (9));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47031 === (10)))
{var inst_47020 = (state_47030[(2)]);var state_47030__$1 = state_47030;var statearr_47042_47060 = state_47030__$1;(statearr_47042_47060[(2)] = inst_47020);
(statearr_47042_47060[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47031 === (8)))
{var inst_47017 = cljs.core.async.close_BANG_(to);var state_47030__$1 = state_47030;var statearr_47043_47061 = state_47030__$1;(statearr_47043_47061[(2)] = inst_47017);
(statearr_47043_47061[(1)] = (10));
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto___47051))
;return ((function (switch__5693__auto__,c__5708__auto___47051){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_47047 = [null,null,null,null,null,null,null,null,null];(statearr_47047[(0)] = state_machine__5694__auto__);
(statearr_47047[(1)] = (1));
return statearr_47047;
});
var state_machine__5694__auto____1 = (function (state_47030){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_47030);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47048){if((e47048 instanceof Object))
{var ex__5697__auto__ = e47048;var statearr_47049_47062 = state_47030;(statearr_47049_47062[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47030);
return cljs.core.constant$keyword$1100;
} else
{throw e47048;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__47063 = state_47030;
state_47030 = G__47063;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47030){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___47051))
})();var state__5710__auto__ = (function (){var statearr_47050 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_47050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___47051);
return statearr_47050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___47051))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5708__auto___47150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___47150,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___47150,tc,fc){
return (function (state_47128){var state_val_47129 = (state_47128[(1)]);if((state_val_47129 === (7)))
{var inst_47124 = (state_47128[(2)]);var state_47128__$1 = state_47128;var statearr_47130_47151 = state_47128__$1;(statearr_47130_47151[(2)] = inst_47124);
(statearr_47130_47151[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47129 === (1)))
{var state_47128__$1 = state_47128;var statearr_47131_47152 = state_47128__$1;(statearr_47131_47152[(2)] = null);
(statearr_47131_47152[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47129 === (4)))
{var inst_47109 = (state_47128[(7)]);var inst_47109__$1 = (state_47128[(2)]);var inst_47110 = (inst_47109__$1 == null);var state_47128__$1 = (function (){var statearr_47132 = state_47128;(statearr_47132[(7)] = inst_47109__$1);
return statearr_47132;
})();if(cljs.core.truth_(inst_47110))
{var statearr_47133_47153 = state_47128__$1;(statearr_47133_47153[(1)] = (5));
} else
{var statearr_47134_47154 = state_47128__$1;(statearr_47134_47154[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47129 === (6)))
{var inst_47109 = (state_47128[(7)]);var inst_47115 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47109) : p.call(null,inst_47109));var state_47128__$1 = state_47128;if(cljs.core.truth_(inst_47115))
{var statearr_47135_47155 = state_47128__$1;(statearr_47135_47155[(1)] = (9));
} else
{var statearr_47136_47156 = state_47128__$1;(statearr_47136_47156[(1)] = (10));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47129 === (3)))
{var inst_47126 = (state_47128[(2)]);var state_47128__$1 = state_47128;return cljs.core.async.impl.ioc_helpers.return_chan(state_47128__$1,inst_47126);
} else
{if((state_val_47129 === (2)))
{var state_47128__$1 = state_47128;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47128__$1,(4),ch);
} else
{if((state_val_47129 === (11)))
{var inst_47109 = (state_47128[(7)]);var inst_47119 = (state_47128[(2)]);var state_47128__$1 = state_47128;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47128__$1,(8),inst_47119,inst_47109);
} else
{if((state_val_47129 === (9)))
{var state_47128__$1 = state_47128;var statearr_47137_47157 = state_47128__$1;(statearr_47137_47157[(2)] = tc);
(statearr_47137_47157[(1)] = (11));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47129 === (5)))
{var inst_47112 = cljs.core.async.close_BANG_(tc);var inst_47113 = cljs.core.async.close_BANG_(fc);var state_47128__$1 = (function (){var statearr_47138 = state_47128;(statearr_47138[(8)] = inst_47112);
return statearr_47138;
})();var statearr_47139_47158 = state_47128__$1;(statearr_47139_47158[(2)] = inst_47113);
(statearr_47139_47158[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47129 === (10)))
{var state_47128__$1 = state_47128;var statearr_47140_47159 = state_47128__$1;(statearr_47140_47159[(2)] = fc);
(statearr_47140_47159[(1)] = (11));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47129 === (8)))
{var inst_47121 = (state_47128[(2)]);var state_47128__$1 = (function (){var statearr_47141 = state_47128;(statearr_47141[(9)] = inst_47121);
return statearr_47141;
})();var statearr_47142_47160 = state_47128__$1;(statearr_47142_47160[(2)] = null);
(statearr_47142_47160[(1)] = (2));
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto___47150,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___47150,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_47146 = [null,null,null,null,null,null,null,null,null,null];(statearr_47146[(0)] = state_machine__5694__auto__);
(statearr_47146[(1)] = (1));
return statearr_47146;
});
var state_machine__5694__auto____1 = (function (state_47128){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_47128);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47147){if((e47147 instanceof Object))
{var ex__5697__auto__ = e47147;var statearr_47148_47161 = state_47128;(statearr_47148_47161[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47128);
return cljs.core.constant$keyword$1100;
} else
{throw e47147;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__47162 = state_47128;
state_47128 = G__47162;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47128){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___47150,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_47149 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_47149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___47150);
return statearr_47149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___47150,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_47209){var state_val_47210 = (state_47209[(1)]);if((state_val_47210 === (7)))
{var inst_47205 = (state_47209[(2)]);var state_47209__$1 = state_47209;var statearr_47211_47227 = state_47209__$1;(statearr_47211_47227[(2)] = inst_47205);
(statearr_47211_47227[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47210 === (6)))
{var inst_47198 = (state_47209[(7)]);var inst_47195 = (state_47209[(8)]);var inst_47202 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47195,inst_47198) : f.call(null,inst_47195,inst_47198));var inst_47195__$1 = inst_47202;var state_47209__$1 = (function (){var statearr_47212 = state_47209;(statearr_47212[(8)] = inst_47195__$1);
return statearr_47212;
})();var statearr_47213_47228 = state_47209__$1;(statearr_47213_47228[(2)] = null);
(statearr_47213_47228[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47210 === (5)))
{var inst_47195 = (state_47209[(8)]);var state_47209__$1 = state_47209;var statearr_47214_47229 = state_47209__$1;(statearr_47214_47229[(2)] = inst_47195);
(statearr_47214_47229[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47210 === (4)))
{var inst_47198 = (state_47209[(7)]);var inst_47198__$1 = (state_47209[(2)]);var inst_47199 = (inst_47198__$1 == null);var state_47209__$1 = (function (){var statearr_47215 = state_47209;(statearr_47215[(7)] = inst_47198__$1);
return statearr_47215;
})();if(cljs.core.truth_(inst_47199))
{var statearr_47216_47230 = state_47209__$1;(statearr_47216_47230[(1)] = (5));
} else
{var statearr_47217_47231 = state_47209__$1;(statearr_47217_47231[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47210 === (3)))
{var inst_47207 = (state_47209[(2)]);var state_47209__$1 = state_47209;return cljs.core.async.impl.ioc_helpers.return_chan(state_47209__$1,inst_47207);
} else
{if((state_val_47210 === (2)))
{var state_47209__$1 = state_47209;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47209__$1,(4),ch);
} else
{if((state_val_47210 === (1)))
{var inst_47195 = init;var state_47209__$1 = (function (){var statearr_47218 = state_47209;(statearr_47218[(8)] = inst_47195);
return statearr_47218;
})();var statearr_47219_47232 = state_47209__$1;(statearr_47219_47232[(2)] = null);
(statearr_47219_47232[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_47223 = [null,null,null,null,null,null,null,null,null];(statearr_47223[(0)] = state_machine__5694__auto__);
(statearr_47223[(1)] = (1));
return statearr_47223;
});
var state_machine__5694__auto____1 = (function (state_47209){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_47209);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47224){if((e47224 instanceof Object))
{var ex__5697__auto__ = e47224;var statearr_47225_47233 = state_47209;(statearr_47225_47233[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47209);
return cljs.core.constant$keyword$1100;
} else
{throw e47224;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__47234 = state_47209;
state_47209 = G__47234;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47209){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_47226 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_47226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_47226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_47296){var state_val_47297 = (state_47296[(1)]);if((state_val_47297 === (7)))
{var inst_47277 = (state_47296[(7)]);var inst_47282 = (state_47296[(2)]);var inst_47283 = cljs.core.next(inst_47277);var inst_47277__$1 = inst_47283;var state_47296__$1 = (function (){var statearr_47298 = state_47296;(statearr_47298[(7)] = inst_47277__$1);
(statearr_47298[(8)] = inst_47282);
return statearr_47298;
})();var statearr_47299_47317 = state_47296__$1;(statearr_47299_47317[(2)] = null);
(statearr_47299_47317[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47297 === (1)))
{var inst_47276 = cljs.core.seq(coll);var inst_47277 = inst_47276;var state_47296__$1 = (function (){var statearr_47300 = state_47296;(statearr_47300[(7)] = inst_47277);
return statearr_47300;
})();var statearr_47301_47318 = state_47296__$1;(statearr_47301_47318[(2)] = null);
(statearr_47301_47318[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47297 === (4)))
{var inst_47277 = (state_47296[(7)]);var inst_47280 = cljs.core.first(inst_47277);var state_47296__$1 = state_47296;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47296__$1,(7),ch,inst_47280);
} else
{if((state_val_47297 === (6)))
{var inst_47292 = (state_47296[(2)]);var state_47296__$1 = state_47296;var statearr_47302_47319 = state_47296__$1;(statearr_47302_47319[(2)] = inst_47292);
(statearr_47302_47319[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47297 === (3)))
{var inst_47294 = (state_47296[(2)]);var state_47296__$1 = state_47296;return cljs.core.async.impl.ioc_helpers.return_chan(state_47296__$1,inst_47294);
} else
{if((state_val_47297 === (2)))
{var inst_47277 = (state_47296[(7)]);var state_47296__$1 = state_47296;if(cljs.core.truth_(inst_47277))
{var statearr_47303_47320 = state_47296__$1;(statearr_47303_47320[(1)] = (4));
} else
{var statearr_47304_47321 = state_47296__$1;(statearr_47304_47321[(1)] = (5));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47297 === (9)))
{var state_47296__$1 = state_47296;var statearr_47305_47322 = state_47296__$1;(statearr_47305_47322[(2)] = null);
(statearr_47305_47322[(1)] = (10));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47297 === (5)))
{var state_47296__$1 = state_47296;if(cljs.core.truth_(close_QMARK_))
{var statearr_47306_47323 = state_47296__$1;(statearr_47306_47323[(1)] = (8));
} else
{var statearr_47307_47324 = state_47296__$1;(statearr_47307_47324[(1)] = (9));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47297 === (10)))
{var inst_47290 = (state_47296[(2)]);var state_47296__$1 = state_47296;var statearr_47308_47325 = state_47296__$1;(statearr_47308_47325[(2)] = inst_47290);
(statearr_47308_47325[(1)] = (6));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47297 === (8)))
{var inst_47287 = cljs.core.async.close_BANG_(ch);var state_47296__$1 = state_47296;var statearr_47309_47326 = state_47296__$1;(statearr_47309_47326[(2)] = inst_47287);
(statearr_47309_47326[(1)] = (10));
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_47313 = [null,null,null,null,null,null,null,null,null];(statearr_47313[(0)] = state_machine__5694__auto__);
(statearr_47313[(1)] = (1));
return statearr_47313;
});
var state_machine__5694__auto____1 = (function (state_47296){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_47296);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47314){if((e47314 instanceof Object))
{var ex__5697__auto__ = e47314;var statearr_47315_47327 = state_47296;(statearr_47315_47327[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47296);
return cljs.core.constant$keyword$1100;
} else
{throw e47314;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__47328 = state_47296;
state_47296 = G__47328;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47296){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_47316 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_47316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_47316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
cljs.core.async.Mux = (function (){var obj47330 = {};return obj47330;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3546__auto__ = _;if(and__3546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4185__auto__ = (((_ == null))?null:_);return (function (){var or__3558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj47332 = {};return obj47332;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var m = (function (){if(typeof cljs.core.async.t47556 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47556 = (function (cs,ch,mult,meta47557){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta47557 = meta47557;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47556.cljs$lang$type = true;
cljs.core.async.t47556.cljs$lang$ctorStr = "cljs.core.async/t47556";
cljs.core.async.t47556.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t47556");
});})(cs))
;
cljs.core.async.t47556.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t47556.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t47556.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t47556.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return null;
});})(cs))
;
cljs.core.async.t47556.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t47556.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t47556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47558){var self__ = this;
var _47558__$1 = this;return self__.meta47557;
});})(cs))
;
cljs.core.async.t47556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47558,meta47557__$1){var self__ = this;
var _47558__$1 = this;return (new cljs.core.async.t47556(self__.cs,self__.ch,self__.mult,meta47557__$1));
});})(cs))
;
cljs.core.async.__GT_t47556 = ((function (cs){
return (function __GT_t47556(cs__$1,ch__$1,mult__$1,meta47557){return (new cljs.core.async.t47556(cs__$1,ch__$1,mult__$1,meta47557));
});})(cs))
;
}
return (new cljs.core.async.t47556(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___47779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___47779,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___47779,cs,m,dchan,dctr,done){
return (function (state_47693){var state_val_47694 = (state_47693[(1)]);if((state_val_47694 === (7)))
{var inst_47689 = (state_47693[(2)]);var state_47693__$1 = state_47693;var statearr_47695_47780 = state_47693__$1;(statearr_47695_47780[(2)] = inst_47689);
(statearr_47695_47780[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (20)))
{var inst_47590 = (state_47693[(7)]);var inst_47600 = cljs.core.first(inst_47590);var inst_47601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47600,(0),null);var inst_47602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47600,(1),null);var state_47693__$1 = (function (){var statearr_47696 = state_47693;(statearr_47696[(8)] = inst_47601);
return statearr_47696;
})();if(cljs.core.truth_(inst_47602))
{var statearr_47697_47781 = state_47693__$1;(statearr_47697_47781[(1)] = (22));
} else
{var statearr_47698_47782 = state_47693__$1;(statearr_47698_47782[(1)] = (23));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (27)))
{var inst_47630 = (state_47693[(9)]);var inst_47632 = (state_47693[(10)]);var inst_47637 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47630,inst_47632);var state_47693__$1 = (function (){var statearr_47699 = state_47693;(statearr_47699[(11)] = inst_47637);
return statearr_47699;
})();var statearr_47700_47783 = state_47693__$1;(statearr_47700_47783[(2)] = null);
(statearr_47700_47783[(1)] = (32));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (1)))
{var state_47693__$1 = state_47693;var statearr_47701_47784 = state_47693__$1;(statearr_47701_47784[(2)] = null);
(statearr_47701_47784[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (24)))
{var inst_47590 = (state_47693[(7)]);var inst_47607 = (state_47693[(2)]);var inst_47608 = cljs.core.next(inst_47590);var inst_47570 = inst_47608;var inst_47571 = null;var inst_47572 = (0);var inst_47573 = (0);var state_47693__$1 = (function (){var statearr_47702 = state_47693;(statearr_47702[(12)] = inst_47607);
(statearr_47702[(13)] = inst_47573);
(statearr_47702[(14)] = inst_47570);
(statearr_47702[(15)] = inst_47571);
(statearr_47702[(16)] = inst_47572);
return statearr_47702;
})();var statearr_47703_47785 = state_47693__$1;(statearr_47703_47785[(2)] = null);
(statearr_47703_47785[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (39)))
{var inst_47650 = (state_47693[(17)]);var inst_47668 = (state_47693[(2)]);var inst_47669 = cljs.core.next(inst_47650);var inst_47629 = inst_47669;var inst_47630 = null;var inst_47631 = (0);var inst_47632 = (0);var state_47693__$1 = (function (){var statearr_47707 = state_47693;(statearr_47707[(18)] = inst_47629);
(statearr_47707[(19)] = inst_47631);
(statearr_47707[(9)] = inst_47630);
(statearr_47707[(20)] = inst_47668);
(statearr_47707[(10)] = inst_47632);
return statearr_47707;
})();var statearr_47708_47786 = state_47693__$1;(statearr_47708_47786[(2)] = null);
(statearr_47708_47786[(1)] = (25));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (4)))
{var inst_47561 = (state_47693[(21)]);var inst_47561__$1 = (state_47693[(2)]);var inst_47562 = (inst_47561__$1 == null);var state_47693__$1 = (function (){var statearr_47709 = state_47693;(statearr_47709[(21)] = inst_47561__$1);
return statearr_47709;
})();if(cljs.core.truth_(inst_47562))
{var statearr_47710_47787 = state_47693__$1;(statearr_47710_47787[(1)] = (5));
} else
{var statearr_47711_47788 = state_47693__$1;(statearr_47711_47788[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (15)))
{var inst_47573 = (state_47693[(13)]);var inst_47570 = (state_47693[(14)]);var inst_47571 = (state_47693[(15)]);var inst_47572 = (state_47693[(16)]);var inst_47586 = (state_47693[(2)]);var inst_47587 = (inst_47573 + (1));var tmp47704 = inst_47570;var tmp47705 = inst_47571;var tmp47706 = inst_47572;var inst_47570__$1 = tmp47704;var inst_47571__$1 = tmp47705;var inst_47572__$1 = tmp47706;var inst_47573__$1 = inst_47587;var state_47693__$1 = (function (){var statearr_47712 = state_47693;(statearr_47712[(22)] = inst_47586);
(statearr_47712[(13)] = inst_47573__$1);
(statearr_47712[(14)] = inst_47570__$1);
(statearr_47712[(15)] = inst_47571__$1);
(statearr_47712[(16)] = inst_47572__$1);
return statearr_47712;
})();var statearr_47713_47789 = state_47693__$1;(statearr_47713_47789[(2)] = null);
(statearr_47713_47789[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (21)))
{var inst_47611 = (state_47693[(2)]);var state_47693__$1 = state_47693;var statearr_47714_47790 = state_47693__$1;(statearr_47714_47790[(2)] = inst_47611);
(statearr_47714_47790[(1)] = (18));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (31)))
{var inst_47637 = (state_47693[(11)]);var inst_47638 = (state_47693[(2)]);var inst_47639 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_47640 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47637);var state_47693__$1 = (function (){var statearr_47715 = state_47693;(statearr_47715[(23)] = inst_47639);
(statearr_47715[(24)] = inst_47638);
return statearr_47715;
})();var statearr_47716_47791 = state_47693__$1;(statearr_47716_47791[(2)] = inst_47640);
cljs.core.async.impl.ioc_helpers.process_exception(state_47693__$1);
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (32)))
{var inst_47637 = (state_47693[(11)]);var inst_47561 = (state_47693[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47693,(31),Object,null,(30));var inst_47644 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47637,inst_47561,done);var state_47693__$1 = state_47693;var statearr_47717_47792 = state_47693__$1;(statearr_47717_47792[(2)] = inst_47644);
cljs.core.async.impl.ioc_helpers.process_exception(state_47693__$1);
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (40)))
{var inst_47659 = (state_47693[(25)]);var inst_47660 = (state_47693[(2)]);var inst_47661 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_47662 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47659);var state_47693__$1 = (function (){var statearr_47718 = state_47693;(statearr_47718[(26)] = inst_47660);
(statearr_47718[(27)] = inst_47661);
return statearr_47718;
})();var statearr_47719_47793 = state_47693__$1;(statearr_47719_47793[(2)] = inst_47662);
cljs.core.async.impl.ioc_helpers.process_exception(state_47693__$1);
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (33)))
{var inst_47650 = (state_47693[(17)]);var inst_47652 = cljs.core.chunked_seq_QMARK_(inst_47650);var state_47693__$1 = state_47693;if(inst_47652)
{var statearr_47720_47794 = state_47693__$1;(statearr_47720_47794[(1)] = (36));
} else
{var statearr_47721_47795 = state_47693__$1;(statearr_47721_47795[(1)] = (37));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (13)))
{var inst_47580 = (state_47693[(28)]);var inst_47583 = cljs.core.async.close_BANG_(inst_47580);var state_47693__$1 = state_47693;var statearr_47722_47796 = state_47693__$1;(statearr_47722_47796[(2)] = inst_47583);
(statearr_47722_47796[(1)] = (15));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (22)))
{var inst_47601 = (state_47693[(8)]);var inst_47604 = cljs.core.async.close_BANG_(inst_47601);var state_47693__$1 = state_47693;var statearr_47723_47797 = state_47693__$1;(statearr_47723_47797[(2)] = inst_47604);
(statearr_47723_47797[(1)] = (24));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (36)))
{var inst_47650 = (state_47693[(17)]);var inst_47654 = cljs.core.chunk_first(inst_47650);var inst_47655 = cljs.core.chunk_rest(inst_47650);var inst_47656 = cljs.core.count(inst_47654);var inst_47629 = inst_47655;var inst_47630 = inst_47654;var inst_47631 = inst_47656;var inst_47632 = (0);var state_47693__$1 = (function (){var statearr_47724 = state_47693;(statearr_47724[(18)] = inst_47629);
(statearr_47724[(19)] = inst_47631);
(statearr_47724[(9)] = inst_47630);
(statearr_47724[(10)] = inst_47632);
return statearr_47724;
})();var statearr_47725_47798 = state_47693__$1;(statearr_47725_47798[(2)] = null);
(statearr_47725_47798[(1)] = (25));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (41)))
{var inst_47659 = (state_47693[(25)]);var inst_47561 = (state_47693[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47693,(40),Object,null,(39));var inst_47666 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47659,inst_47561,done);var state_47693__$1 = state_47693;var statearr_47726_47799 = state_47693__$1;(statearr_47726_47799[(2)] = inst_47666);
cljs.core.async.impl.ioc_helpers.process_exception(state_47693__$1);
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (43)))
{var state_47693__$1 = state_47693;var statearr_47727_47800 = state_47693__$1;(statearr_47727_47800[(2)] = null);
(statearr_47727_47800[(1)] = (44));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (29)))
{var inst_47677 = (state_47693[(2)]);var state_47693__$1 = state_47693;var statearr_47728_47801 = state_47693__$1;(statearr_47728_47801[(2)] = inst_47677);
(statearr_47728_47801[(1)] = (26));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (44)))
{var inst_47686 = (state_47693[(2)]);var state_47693__$1 = (function (){var statearr_47729 = state_47693;(statearr_47729[(29)] = inst_47686);
return statearr_47729;
})();var statearr_47730_47802 = state_47693__$1;(statearr_47730_47802[(2)] = null);
(statearr_47730_47802[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (6)))
{var inst_47621 = (state_47693[(30)]);var inst_47620 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_47621__$1 = cljs.core.keys(inst_47620);var inst_47622 = cljs.core.count(inst_47621__$1);var inst_47623 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_47622) : cljs.core.reset_BANG_.call(null,dctr,inst_47622));var inst_47628 = cljs.core.seq(inst_47621__$1);var inst_47629 = inst_47628;var inst_47630 = null;var inst_47631 = (0);var inst_47632 = (0);var state_47693__$1 = (function (){var statearr_47731 = state_47693;(statearr_47731[(18)] = inst_47629);
(statearr_47731[(19)] = inst_47631);
(statearr_47731[(9)] = inst_47630);
(statearr_47731[(30)] = inst_47621__$1);
(statearr_47731[(31)] = inst_47623);
(statearr_47731[(10)] = inst_47632);
return statearr_47731;
})();var statearr_47732_47803 = state_47693__$1;(statearr_47732_47803[(2)] = null);
(statearr_47732_47803[(1)] = (25));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (28)))
{var inst_47629 = (state_47693[(18)]);var inst_47650 = (state_47693[(17)]);var inst_47650__$1 = cljs.core.seq(inst_47629);var state_47693__$1 = (function (){var statearr_47733 = state_47693;(statearr_47733[(17)] = inst_47650__$1);
return statearr_47733;
})();if(inst_47650__$1)
{var statearr_47734_47804 = state_47693__$1;(statearr_47734_47804[(1)] = (33));
} else
{var statearr_47735_47805 = state_47693__$1;(statearr_47735_47805[(1)] = (34));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (25)))
{var inst_47631 = (state_47693[(19)]);var inst_47632 = (state_47693[(10)]);var inst_47634 = (inst_47632 < inst_47631);var inst_47635 = inst_47634;var state_47693__$1 = state_47693;if(cljs.core.truth_(inst_47635))
{var statearr_47736_47806 = state_47693__$1;(statearr_47736_47806[(1)] = (27));
} else
{var statearr_47737_47807 = state_47693__$1;(statearr_47737_47807[(1)] = (28));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (34)))
{var state_47693__$1 = state_47693;var statearr_47738_47808 = state_47693__$1;(statearr_47738_47808[(2)] = null);
(statearr_47738_47808[(1)] = (35));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (17)))
{var state_47693__$1 = state_47693;var statearr_47739_47809 = state_47693__$1;(statearr_47739_47809[(2)] = null);
(statearr_47739_47809[(1)] = (18));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (3)))
{var inst_47691 = (state_47693[(2)]);var state_47693__$1 = state_47693;return cljs.core.async.impl.ioc_helpers.return_chan(state_47693__$1,inst_47691);
} else
{if((state_val_47694 === (12)))
{var inst_47616 = (state_47693[(2)]);var state_47693__$1 = state_47693;var statearr_47740_47810 = state_47693__$1;(statearr_47740_47810[(2)] = inst_47616);
(statearr_47740_47810[(1)] = (9));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (2)))
{var state_47693__$1 = state_47693;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47693__$1,(4),ch);
} else
{if((state_val_47694 === (23)))
{var state_47693__$1 = state_47693;var statearr_47741_47811 = state_47693__$1;(statearr_47741_47811[(2)] = null);
(statearr_47741_47811[(1)] = (24));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (35)))
{var inst_47675 = (state_47693[(2)]);var state_47693__$1 = state_47693;var statearr_47742_47812 = state_47693__$1;(statearr_47742_47812[(2)] = inst_47675);
(statearr_47742_47812[(1)] = (29));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (19)))
{var inst_47590 = (state_47693[(7)]);var inst_47594 = cljs.core.chunk_first(inst_47590);var inst_47595 = cljs.core.chunk_rest(inst_47590);var inst_47596 = cljs.core.count(inst_47594);var inst_47570 = inst_47595;var inst_47571 = inst_47594;var inst_47572 = inst_47596;var inst_47573 = (0);var state_47693__$1 = (function (){var statearr_47743 = state_47693;(statearr_47743[(13)] = inst_47573);
(statearr_47743[(14)] = inst_47570);
(statearr_47743[(15)] = inst_47571);
(statearr_47743[(16)] = inst_47572);
return statearr_47743;
})();var statearr_47744_47813 = state_47693__$1;(statearr_47744_47813[(2)] = null);
(statearr_47744_47813[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (11)))
{var inst_47570 = (state_47693[(14)]);var inst_47590 = (state_47693[(7)]);var inst_47590__$1 = cljs.core.seq(inst_47570);var state_47693__$1 = (function (){var statearr_47745 = state_47693;(statearr_47745[(7)] = inst_47590__$1);
return statearr_47745;
})();if(inst_47590__$1)
{var statearr_47746_47814 = state_47693__$1;(statearr_47746_47814[(1)] = (16));
} else
{var statearr_47747_47815 = state_47693__$1;(statearr_47747_47815[(1)] = (17));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (9)))
{var inst_47618 = (state_47693[(2)]);var state_47693__$1 = state_47693;var statearr_47748_47816 = state_47693__$1;(statearr_47748_47816[(2)] = inst_47618);
(statearr_47748_47816[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (5)))
{var inst_47568 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_47569 = cljs.core.seq(inst_47568);var inst_47570 = inst_47569;var inst_47571 = null;var inst_47572 = (0);var inst_47573 = (0);var state_47693__$1 = (function (){var statearr_47749 = state_47693;(statearr_47749[(13)] = inst_47573);
(statearr_47749[(14)] = inst_47570);
(statearr_47749[(15)] = inst_47571);
(statearr_47749[(16)] = inst_47572);
return statearr_47749;
})();var statearr_47750_47817 = state_47693__$1;(statearr_47750_47817[(2)] = null);
(statearr_47750_47817[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (14)))
{var state_47693__$1 = state_47693;var statearr_47751_47818 = state_47693__$1;(statearr_47751_47818[(2)] = null);
(statearr_47751_47818[(1)] = (15));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (45)))
{var inst_47683 = (state_47693[(2)]);var state_47693__$1 = state_47693;var statearr_47752_47819 = state_47693__$1;(statearr_47752_47819[(2)] = inst_47683);
(statearr_47752_47819[(1)] = (44));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (26)))
{var inst_47621 = (state_47693[(30)]);var inst_47679 = (state_47693[(2)]);var inst_47680 = cljs.core.seq(inst_47621);var state_47693__$1 = (function (){var statearr_47753 = state_47693;(statearr_47753[(32)] = inst_47679);
return statearr_47753;
})();if(inst_47680)
{var statearr_47754_47820 = state_47693__$1;(statearr_47754_47820[(1)] = (42));
} else
{var statearr_47755_47821 = state_47693__$1;(statearr_47755_47821[(1)] = (43));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (16)))
{var inst_47590 = (state_47693[(7)]);var inst_47592 = cljs.core.chunked_seq_QMARK_(inst_47590);var state_47693__$1 = state_47693;if(inst_47592)
{var statearr_47759_47822 = state_47693__$1;(statearr_47759_47822[(1)] = (19));
} else
{var statearr_47760_47823 = state_47693__$1;(statearr_47760_47823[(1)] = (20));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (38)))
{var inst_47672 = (state_47693[(2)]);var state_47693__$1 = state_47693;var statearr_47761_47824 = state_47693__$1;(statearr_47761_47824[(2)] = inst_47672);
(statearr_47761_47824[(1)] = (35));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (30)))
{var inst_47629 = (state_47693[(18)]);var inst_47631 = (state_47693[(19)]);var inst_47630 = (state_47693[(9)]);var inst_47632 = (state_47693[(10)]);var inst_47646 = (state_47693[(2)]);var inst_47647 = (inst_47632 + (1));var tmp47756 = inst_47629;var tmp47757 = inst_47631;var tmp47758 = inst_47630;var inst_47629__$1 = tmp47756;var inst_47630__$1 = tmp47758;var inst_47631__$1 = tmp47757;var inst_47632__$1 = inst_47647;var state_47693__$1 = (function (){var statearr_47762 = state_47693;(statearr_47762[(18)] = inst_47629__$1);
(statearr_47762[(19)] = inst_47631__$1);
(statearr_47762[(9)] = inst_47630__$1);
(statearr_47762[(33)] = inst_47646);
(statearr_47762[(10)] = inst_47632__$1);
return statearr_47762;
})();var statearr_47763_47825 = state_47693__$1;(statearr_47763_47825[(2)] = null);
(statearr_47763_47825[(1)] = (25));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (10)))
{var inst_47573 = (state_47693[(13)]);var inst_47571 = (state_47693[(15)]);var inst_47579 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47571,inst_47573);var inst_47580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47579,(0),null);var inst_47581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47579,(1),null);var state_47693__$1 = (function (){var statearr_47764 = state_47693;(statearr_47764[(28)] = inst_47580);
return statearr_47764;
})();if(cljs.core.truth_(inst_47581))
{var statearr_47765_47826 = state_47693__$1;(statearr_47765_47826[(1)] = (13));
} else
{var statearr_47766_47827 = state_47693__$1;(statearr_47766_47827[(1)] = (14));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (18)))
{var inst_47614 = (state_47693[(2)]);var state_47693__$1 = state_47693;var statearr_47767_47828 = state_47693__$1;(statearr_47767_47828[(2)] = inst_47614);
(statearr_47767_47828[(1)] = (12));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (42)))
{var state_47693__$1 = state_47693;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47693__$1,(45),dchan);
} else
{if((state_val_47694 === (37)))
{var inst_47650 = (state_47693[(17)]);var inst_47659 = cljs.core.first(inst_47650);var state_47693__$1 = (function (){var statearr_47768 = state_47693;(statearr_47768[(25)] = inst_47659);
return statearr_47768;
})();var statearr_47769_47829 = state_47693__$1;(statearr_47769_47829[(2)] = null);
(statearr_47769_47829[(1)] = (41));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_47694 === (8)))
{var inst_47573 = (state_47693[(13)]);var inst_47572 = (state_47693[(16)]);var inst_47575 = (inst_47573 < inst_47572);var inst_47576 = inst_47575;var state_47693__$1 = state_47693;if(cljs.core.truth_(inst_47576))
{var statearr_47770_47830 = state_47693__$1;(statearr_47770_47830[(1)] = (10));
} else
{var statearr_47771_47831 = state_47693__$1;(statearr_47771_47831[(1)] = (11));
}
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto___47779,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___47779,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_47775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47775[(0)] = state_machine__5694__auto__);
(statearr_47775[(1)] = (1));
return statearr_47775;
});
var state_machine__5694__auto____1 = (function (state_47693){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_47693);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47776){if((e47776 instanceof Object))
{var ex__5697__auto__ = e47776;var statearr_47777_47832 = state_47693;(statearr_47777_47832[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47693);
return cljs.core.constant$keyword$1100;
} else
{throw e47776;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__47833 = state_47693;
state_47693 = G__47833;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47693){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___47779,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_47778 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_47778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___47779);
return statearr_47778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___47779,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj47835 = {};return obj47835;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1107,null,cljs.core.constant$keyword$1108,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$1109);var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1108) : cljs.core.atom.call(null,cljs.core.constant$keyword$1108));var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));var solos = pick(cljs.core.constant$keyword$1109,chs);var pauses = pick(cljs.core.constant$keyword$1107,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1110,solos,cljs.core.constant$keyword$1111,pick(cljs.core.constant$keyword$1108,chs),cljs.core.constant$keyword$1112,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$1107)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t47945 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47945 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47946){
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
this.meta47946 = meta47946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47945.cljs$lang$type = true;
cljs.core.async.t47945.cljs$lang$ctorStr = "cljs.core.async/t47945";
cljs.core.async.t47945.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t47945");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t47945.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t47945.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t47945.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t47945.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t47945.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t47945.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t47945.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t47945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t47945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47947){var self__ = this;
var _47947__$1 = this;return self__.meta47946;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t47945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47947,meta47946__$1){var self__ = this;
var _47947__$1 = this;return (new cljs.core.async.t47945(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47946__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t47945 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t47945(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47946){return (new cljs.core.async.t47945(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47946));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t47945(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___48054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___48054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___48054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48012){var state_val_48013 = (state_48012[(1)]);if((state_val_48013 === (7)))
{var inst_47961 = (state_48012[(7)]);var inst_47966 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47961);var state_48012__$1 = state_48012;var statearr_48014_48055 = state_48012__$1;(statearr_48014_48055[(2)] = inst_47966);
(statearr_48014_48055[(1)] = (9));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (20)))
{var inst_47976 = (state_48012[(8)]);var state_48012__$1 = state_48012;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48012__$1,(23),out,inst_47976);
} else
{if((state_val_48013 === (1)))
{var inst_47951 = (state_48012[(9)]);var inst_47951__$1 = calc_state();var inst_47952 = cljs.core.seq_QMARK_(inst_47951__$1);var state_48012__$1 = (function (){var statearr_48015 = state_48012;(statearr_48015[(9)] = inst_47951__$1);
return statearr_48015;
})();if(inst_47952)
{var statearr_48016_48056 = state_48012__$1;(statearr_48016_48056[(1)] = (2));
} else
{var statearr_48017_48057 = state_48012__$1;(statearr_48017_48057[(1)] = (3));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (4)))
{var inst_47951 = (state_48012[(9)]);var inst_47957 = (state_48012[(2)]);var inst_47958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47957,cljs.core.constant$keyword$1112);var inst_47959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47957,cljs.core.constant$keyword$1111);var inst_47960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47957,cljs.core.constant$keyword$1110);var inst_47961 = inst_47951;var state_48012__$1 = (function (){var statearr_48018 = state_48012;(statearr_48018[(10)] = inst_47960);
(statearr_48018[(11)] = inst_47958);
(statearr_48018[(12)] = inst_47959);
(statearr_48018[(7)] = inst_47961);
return statearr_48018;
})();var statearr_48019_48058 = state_48012__$1;(statearr_48019_48058[(2)] = null);
(statearr_48019_48058[(1)] = (5));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (15)))
{var state_48012__$1 = state_48012;var statearr_48020_48059 = state_48012__$1;(statearr_48020_48059[(2)] = null);
(statearr_48020_48059[(1)] = (16));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (21)))
{var state_48012__$1 = state_48012;var statearr_48021_48060 = state_48012__$1;(statearr_48021_48060[(2)] = null);
(statearr_48021_48060[(1)] = (22));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (13)))
{var inst_48008 = (state_48012[(2)]);var state_48012__$1 = state_48012;var statearr_48022_48061 = state_48012__$1;(statearr_48022_48061[(2)] = inst_48008);
(statearr_48022_48061[(1)] = (6));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (22)))
{var inst_47969 = (state_48012[(13)]);var inst_48005 = (state_48012[(2)]);var inst_47961 = inst_47969;var state_48012__$1 = (function (){var statearr_48023 = state_48012;(statearr_48023[(14)] = inst_48005);
(statearr_48023[(7)] = inst_47961);
return statearr_48023;
})();var statearr_48024_48062 = state_48012__$1;(statearr_48024_48062[(2)] = null);
(statearr_48024_48062[(1)] = (5));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (6)))
{var inst_48010 = (state_48012[(2)]);var state_48012__$1 = state_48012;return cljs.core.async.impl.ioc_helpers.return_chan(state_48012__$1,inst_48010);
} else
{if((state_val_48013 === (17)))
{var inst_47991 = (state_48012[(15)]);var state_48012__$1 = state_48012;var statearr_48025_48063 = state_48012__$1;(statearr_48025_48063[(2)] = inst_47991);
(statearr_48025_48063[(1)] = (19));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (3)))
{var inst_47951 = (state_48012[(9)]);var state_48012__$1 = state_48012;var statearr_48026_48064 = state_48012__$1;(statearr_48026_48064[(2)] = inst_47951);
(statearr_48026_48064[(1)] = (4));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (12)))
{var inst_47972 = (state_48012[(16)]);var inst_47991 = (state_48012[(15)]);var inst_47977 = (state_48012[(17)]);var inst_47991__$1 = (inst_47972.cljs$core$IFn$_invoke$arity$1 ? inst_47972.cljs$core$IFn$_invoke$arity$1(inst_47977) : inst_47972.call(null,inst_47977));var state_48012__$1 = (function (){var statearr_48027 = state_48012;(statearr_48027[(15)] = inst_47991__$1);
return statearr_48027;
})();if(cljs.core.truth_(inst_47991__$1))
{var statearr_48028_48065 = state_48012__$1;(statearr_48028_48065[(1)] = (17));
} else
{var statearr_48029_48066 = state_48012__$1;(statearr_48029_48066[(1)] = (18));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (2)))
{var inst_47951 = (state_48012[(9)]);var inst_47954 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47951);var state_48012__$1 = state_48012;var statearr_48030_48067 = state_48012__$1;(statearr_48030_48067[(2)] = inst_47954);
(statearr_48030_48067[(1)] = (4));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (23)))
{var inst_48002 = (state_48012[(2)]);var state_48012__$1 = state_48012;var statearr_48031_48068 = state_48012__$1;(statearr_48031_48068[(2)] = inst_48002);
(statearr_48031_48068[(1)] = (22));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (19)))
{var inst_47999 = (state_48012[(2)]);var state_48012__$1 = state_48012;if(cljs.core.truth_(inst_47999))
{var statearr_48032_48069 = state_48012__$1;(statearr_48032_48069[(1)] = (20));
} else
{var statearr_48033_48070 = state_48012__$1;(statearr_48033_48070[(1)] = (21));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (11)))
{var inst_47976 = (state_48012[(8)]);var inst_47982 = (inst_47976 == null);var state_48012__$1 = state_48012;if(cljs.core.truth_(inst_47982))
{var statearr_48034_48071 = state_48012__$1;(statearr_48034_48071[(1)] = (14));
} else
{var statearr_48035_48072 = state_48012__$1;(statearr_48035_48072[(1)] = (15));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (9)))
{var inst_47969 = (state_48012[(13)]);var inst_47969__$1 = (state_48012[(2)]);var inst_47970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47969__$1,cljs.core.constant$keyword$1112);var inst_47971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47969__$1,cljs.core.constant$keyword$1111);var inst_47972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47969__$1,cljs.core.constant$keyword$1110);var state_48012__$1 = (function (){var statearr_48036 = state_48012;(statearr_48036[(16)] = inst_47972);
(statearr_48036[(13)] = inst_47969__$1);
(statearr_48036[(18)] = inst_47971);
return statearr_48036;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_48012__$1,(10),inst_47970);
} else
{if((state_val_48013 === (5)))
{var inst_47961 = (state_48012[(7)]);var inst_47964 = cljs.core.seq_QMARK_(inst_47961);var state_48012__$1 = state_48012;if(inst_47964)
{var statearr_48037_48073 = state_48012__$1;(statearr_48037_48073[(1)] = (7));
} else
{var statearr_48038_48074 = state_48012__$1;(statearr_48038_48074[(1)] = (8));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (14)))
{var inst_47977 = (state_48012[(17)]);var inst_47984 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47977);var state_48012__$1 = state_48012;var statearr_48039_48075 = state_48012__$1;(statearr_48039_48075[(2)] = inst_47984);
(statearr_48039_48075[(1)] = (16));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (16)))
{var inst_47987 = (state_48012[(2)]);var inst_47988 = calc_state();var inst_47961 = inst_47988;var state_48012__$1 = (function (){var statearr_48040 = state_48012;(statearr_48040[(19)] = inst_47987);
(statearr_48040[(7)] = inst_47961);
return statearr_48040;
})();var statearr_48041_48076 = state_48012__$1;(statearr_48041_48076[(2)] = null);
(statearr_48041_48076[(1)] = (5));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (10)))
{var inst_47976 = (state_48012[(8)]);var inst_47977 = (state_48012[(17)]);var inst_47975 = (state_48012[(2)]);var inst_47976__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47975,(0),null);var inst_47977__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47975,(1),null);var inst_47978 = (inst_47976__$1 == null);var inst_47979 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47977__$1,change);var inst_47980 = (inst_47978) || (inst_47979);var state_48012__$1 = (function (){var statearr_48042 = state_48012;(statearr_48042[(8)] = inst_47976__$1);
(statearr_48042[(17)] = inst_47977__$1);
return statearr_48042;
})();if(cljs.core.truth_(inst_47980))
{var statearr_48043_48077 = state_48012__$1;(statearr_48043_48077[(1)] = (11));
} else
{var statearr_48044_48078 = state_48012__$1;(statearr_48044_48078[(1)] = (12));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (18)))
{var inst_47972 = (state_48012[(16)]);var inst_47971 = (state_48012[(18)]);var inst_47977 = (state_48012[(17)]);var inst_47994 = cljs.core.empty_QMARK_(inst_47972);var inst_47995 = (inst_47971.cljs$core$IFn$_invoke$arity$1 ? inst_47971.cljs$core$IFn$_invoke$arity$1(inst_47977) : inst_47971.call(null,inst_47977));var inst_47996 = cljs.core.not(inst_47995);var inst_47997 = (inst_47994) && (inst_47996);var state_48012__$1 = state_48012;var statearr_48045_48079 = state_48012__$1;(statearr_48045_48079[(2)] = inst_47997);
(statearr_48045_48079[(1)] = (19));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48013 === (8)))
{var inst_47961 = (state_48012[(7)]);var state_48012__$1 = state_48012;var statearr_48046_48080 = state_48012__$1;(statearr_48046_48080[(2)] = inst_47961);
(statearr_48046_48080[(1)] = (9));
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto___48054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___48054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48050[(0)] = state_machine__5694__auto__);
(statearr_48050[(1)] = (1));
return statearr_48050;
});
var state_machine__5694__auto____1 = (function (state_48012){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_48012);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48051){if((e48051 instanceof Object))
{var ex__5697__auto__ = e48051;var statearr_48052_48081 = state_48012;(statearr_48052_48081[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_48012);
return cljs.core.constant$keyword$1100;
} else
{throw e48051;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__48082 = state_48012;
state_48012 = G__48082;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_48012){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_48012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___48054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_48053 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_48053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___48054);
return statearr_48053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___48054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj48084 = {};return obj48084;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var ensure_mult = ((function (mults){
return (function (topic){var or__3558__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3558__auto__,mults){
return (function (p1__48085_SHARP_){if(cljs.core.truth_((p1__48085_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48085_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48085_SHARP_.call(null,topic))))
{return p1__48085_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48085_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t48210 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48210 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta48211){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta48211 = meta48211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48210.cljs$lang$type = true;
cljs.core.async.t48210.cljs$lang$ctorStr = "cljs.core.async/t48210";
cljs.core.async.t48210.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t48210");
});})(mults,ensure_mult))
;
cljs.core.async.t48210.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t48210.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t48210.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t48210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.mults,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY));
});})(mults,ensure_mult))
;
cljs.core.async.t48210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t48210.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t48210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48212){var self__ = this;
var _48212__$1 = this;return self__.meta48211;
});})(mults,ensure_mult))
;
cljs.core.async.t48210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48212,meta48211__$1){var self__ = this;
var _48212__$1 = this;return (new cljs.core.async.t48210(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta48211__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t48210 = ((function (mults,ensure_mult){
return (function __GT_t48210(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48211){return (new cljs.core.async.t48210(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48211));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t48210(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___48334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___48334,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___48334,mults,ensure_mult,p){
return (function (state_48286){var state_val_48287 = (state_48286[(1)]);if((state_val_48287 === (7)))
{var inst_48282 = (state_48286[(2)]);var state_48286__$1 = state_48286;var statearr_48288_48335 = state_48286__$1;(statearr_48288_48335[(2)] = inst_48282);
(statearr_48288_48335[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (20)))
{var state_48286__$1 = state_48286;var statearr_48289_48336 = state_48286__$1;(statearr_48289_48336[(2)] = null);
(statearr_48289_48336[(1)] = (21));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (1)))
{var state_48286__$1 = state_48286;var statearr_48290_48337 = state_48286__$1;(statearr_48290_48337[(2)] = null);
(statearr_48290_48337[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (24)))
{var inst_48265 = (state_48286[(7)]);var inst_48215 = (state_48286[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48286,(23),Object,null,(22));var inst_48272 = cljs.core.async.muxch_STAR_(inst_48265);var state_48286__$1 = state_48286;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48286__$1,(25),inst_48272,inst_48215);
} else
{if((state_val_48287 === (4)))
{var inst_48215 = (state_48286[(8)]);var inst_48215__$1 = (state_48286[(2)]);var inst_48216 = (inst_48215__$1 == null);var state_48286__$1 = (function (){var statearr_48291 = state_48286;(statearr_48291[(8)] = inst_48215__$1);
return statearr_48291;
})();if(cljs.core.truth_(inst_48216))
{var statearr_48292_48338 = state_48286__$1;(statearr_48292_48338[(1)] = (5));
} else
{var statearr_48293_48339 = state_48286__$1;(statearr_48293_48339[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (15)))
{var inst_48257 = (state_48286[(2)]);var state_48286__$1 = state_48286;var statearr_48294_48340 = state_48286__$1;(statearr_48294_48340[(2)] = inst_48257);
(statearr_48294_48340[(1)] = (12));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (21)))
{var inst_48279 = (state_48286[(2)]);var state_48286__$1 = (function (){var statearr_48295 = state_48286;(statearr_48295[(9)] = inst_48279);
return statearr_48295;
})();var statearr_48296_48341 = state_48286__$1;(statearr_48296_48341[(2)] = null);
(statearr_48296_48341[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (13)))
{var inst_48239 = (state_48286[(10)]);var inst_48241 = cljs.core.chunked_seq_QMARK_(inst_48239);var state_48286__$1 = state_48286;if(inst_48241)
{var statearr_48297_48342 = state_48286__$1;(statearr_48297_48342[(1)] = (16));
} else
{var statearr_48298_48343 = state_48286__$1;(statearr_48298_48343[(1)] = (17));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (22)))
{var inst_48276 = (state_48286[(2)]);var state_48286__$1 = state_48286;var statearr_48299_48344 = state_48286__$1;(statearr_48299_48344[(2)] = inst_48276);
(statearr_48299_48344[(1)] = (21));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (6)))
{var inst_48265 = (state_48286[(7)]);var inst_48215 = (state_48286[(8)]);var inst_48263 = (state_48286[(11)]);var inst_48263__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48215) : topic_fn.call(null,inst_48215));var inst_48264 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_48265__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48264,inst_48263__$1);var state_48286__$1 = (function (){var statearr_48300 = state_48286;(statearr_48300[(7)] = inst_48265__$1);
(statearr_48300[(11)] = inst_48263__$1);
return statearr_48300;
})();if(cljs.core.truth_(inst_48265__$1))
{var statearr_48301_48345 = state_48286__$1;(statearr_48301_48345[(1)] = (19));
} else
{var statearr_48302_48346 = state_48286__$1;(statearr_48302_48346[(1)] = (20));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (25)))
{var inst_48274 = (state_48286[(2)]);var state_48286__$1 = state_48286;var statearr_48303_48347 = state_48286__$1;(statearr_48303_48347[(2)] = inst_48274);
cljs.core.async.impl.ioc_helpers.process_exception(state_48286__$1);
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (17)))
{var inst_48239 = (state_48286[(10)]);var inst_48248 = cljs.core.first(inst_48239);var inst_48249 = cljs.core.async.muxch_STAR_(inst_48248);var inst_48250 = cljs.core.async.close_BANG_(inst_48249);var inst_48251 = cljs.core.next(inst_48239);var inst_48225 = inst_48251;var inst_48226 = null;var inst_48227 = (0);var inst_48228 = (0);var state_48286__$1 = (function (){var statearr_48304 = state_48286;(statearr_48304[(12)] = inst_48227);
(statearr_48304[(13)] = inst_48250);
(statearr_48304[(14)] = inst_48228);
(statearr_48304[(15)] = inst_48225);
(statearr_48304[(16)] = inst_48226);
return statearr_48304;
})();var statearr_48305_48348 = state_48286__$1;(statearr_48305_48348[(2)] = null);
(statearr_48305_48348[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (3)))
{var inst_48284 = (state_48286[(2)]);var state_48286__$1 = state_48286;return cljs.core.async.impl.ioc_helpers.return_chan(state_48286__$1,inst_48284);
} else
{if((state_val_48287 === (12)))
{var inst_48259 = (state_48286[(2)]);var state_48286__$1 = state_48286;var statearr_48306_48349 = state_48286__$1;(statearr_48306_48349[(2)] = inst_48259);
(statearr_48306_48349[(1)] = (9));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (2)))
{var state_48286__$1 = state_48286;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48286__$1,(4),ch);
} else
{if((state_val_48287 === (23)))
{var inst_48263 = (state_48286[(11)]);var inst_48267 = (state_48286[(2)]);var inst_48268 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48263);var state_48286__$1 = (function (){var statearr_48307 = state_48286;(statearr_48307[(17)] = inst_48267);
return statearr_48307;
})();var statearr_48308_48350 = state_48286__$1;(statearr_48308_48350[(2)] = inst_48268);
cljs.core.async.impl.ioc_helpers.process_exception(state_48286__$1);
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (19)))
{var state_48286__$1 = state_48286;var statearr_48309_48351 = state_48286__$1;(statearr_48309_48351[(2)] = null);
(statearr_48309_48351[(1)] = (24));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (11)))
{var inst_48239 = (state_48286[(10)]);var inst_48225 = (state_48286[(15)]);var inst_48239__$1 = cljs.core.seq(inst_48225);var state_48286__$1 = (function (){var statearr_48310 = state_48286;(statearr_48310[(10)] = inst_48239__$1);
return statearr_48310;
})();if(inst_48239__$1)
{var statearr_48311_48352 = state_48286__$1;(statearr_48311_48352[(1)] = (13));
} else
{var statearr_48312_48353 = state_48286__$1;(statearr_48312_48353[(1)] = (14));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (9)))
{var inst_48261 = (state_48286[(2)]);var state_48286__$1 = state_48286;var statearr_48313_48354 = state_48286__$1;(statearr_48313_48354[(2)] = inst_48261);
(statearr_48313_48354[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (5)))
{var inst_48222 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_48223 = cljs.core.vals(inst_48222);var inst_48224 = cljs.core.seq(inst_48223);var inst_48225 = inst_48224;var inst_48226 = null;var inst_48227 = (0);var inst_48228 = (0);var state_48286__$1 = (function (){var statearr_48314 = state_48286;(statearr_48314[(12)] = inst_48227);
(statearr_48314[(14)] = inst_48228);
(statearr_48314[(15)] = inst_48225);
(statearr_48314[(16)] = inst_48226);
return statearr_48314;
})();var statearr_48315_48355 = state_48286__$1;(statearr_48315_48355[(2)] = null);
(statearr_48315_48355[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (14)))
{var state_48286__$1 = state_48286;var statearr_48319_48356 = state_48286__$1;(statearr_48319_48356[(2)] = null);
(statearr_48319_48356[(1)] = (15));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (16)))
{var inst_48239 = (state_48286[(10)]);var inst_48243 = cljs.core.chunk_first(inst_48239);var inst_48244 = cljs.core.chunk_rest(inst_48239);var inst_48245 = cljs.core.count(inst_48243);var inst_48225 = inst_48244;var inst_48226 = inst_48243;var inst_48227 = inst_48245;var inst_48228 = (0);var state_48286__$1 = (function (){var statearr_48320 = state_48286;(statearr_48320[(12)] = inst_48227);
(statearr_48320[(14)] = inst_48228);
(statearr_48320[(15)] = inst_48225);
(statearr_48320[(16)] = inst_48226);
return statearr_48320;
})();var statearr_48321_48357 = state_48286__$1;(statearr_48321_48357[(2)] = null);
(statearr_48321_48357[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (10)))
{var inst_48227 = (state_48286[(12)]);var inst_48228 = (state_48286[(14)]);var inst_48225 = (state_48286[(15)]);var inst_48226 = (state_48286[(16)]);var inst_48233 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_48226,inst_48228);var inst_48234 = cljs.core.async.muxch_STAR_(inst_48233);var inst_48235 = cljs.core.async.close_BANG_(inst_48234);var inst_48236 = (inst_48228 + (1));var tmp48316 = inst_48227;var tmp48317 = inst_48225;var tmp48318 = inst_48226;var inst_48225__$1 = tmp48317;var inst_48226__$1 = tmp48318;var inst_48227__$1 = tmp48316;var inst_48228__$1 = inst_48236;var state_48286__$1 = (function (){var statearr_48322 = state_48286;(statearr_48322[(12)] = inst_48227__$1);
(statearr_48322[(14)] = inst_48228__$1);
(statearr_48322[(18)] = inst_48235);
(statearr_48322[(15)] = inst_48225__$1);
(statearr_48322[(16)] = inst_48226__$1);
return statearr_48322;
})();var statearr_48323_48358 = state_48286__$1;(statearr_48323_48358[(2)] = null);
(statearr_48323_48358[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (18)))
{var inst_48254 = (state_48286[(2)]);var state_48286__$1 = state_48286;var statearr_48324_48359 = state_48286__$1;(statearr_48324_48359[(2)] = inst_48254);
(statearr_48324_48359[(1)] = (15));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48287 === (8)))
{var inst_48227 = (state_48286[(12)]);var inst_48228 = (state_48286[(14)]);var inst_48230 = (inst_48228 < inst_48227);var inst_48231 = inst_48230;var state_48286__$1 = state_48286;if(cljs.core.truth_(inst_48231))
{var statearr_48325_48360 = state_48286__$1;(statearr_48325_48360[(1)] = (10));
} else
{var statearr_48326_48361 = state_48286__$1;(statearr_48326_48361[(1)] = (11));
}
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto___48334,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___48334,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48330[(0)] = state_machine__5694__auto__);
(statearr_48330[(1)] = (1));
return statearr_48330;
});
var state_machine__5694__auto____1 = (function (state_48286){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_48286);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48331){if((e48331 instanceof Object))
{var ex__5697__auto__ = e48331;var statearr_48332_48362 = state_48286;(statearr_48332_48362[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_48286);
return cljs.core.constant$keyword$1100;
} else
{throw e48331;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__48363 = state_48286;
state_48286 = G__48363;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_48286){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_48286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___48334,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_48333 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_48333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___48334);
return statearr_48333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___48334,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5708__auto___48500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___48500,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___48500,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48470){var state_val_48471 = (state_48470[(1)]);if((state_val_48471 === (7)))
{var state_48470__$1 = state_48470;var statearr_48472_48501 = state_48470__$1;(statearr_48472_48501[(2)] = null);
(statearr_48472_48501[(1)] = (8));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (1)))
{var state_48470__$1 = state_48470;var statearr_48473_48502 = state_48470__$1;(statearr_48473_48502[(2)] = null);
(statearr_48473_48502[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (4)))
{var inst_48434 = (state_48470[(7)]);var inst_48436 = (inst_48434 < cnt);var state_48470__$1 = state_48470;if(cljs.core.truth_(inst_48436))
{var statearr_48474_48503 = state_48470__$1;(statearr_48474_48503[(1)] = (6));
} else
{var statearr_48475_48504 = state_48470__$1;(statearr_48475_48504[(1)] = (7));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (15)))
{var inst_48466 = (state_48470[(2)]);var state_48470__$1 = state_48470;var statearr_48476_48505 = state_48470__$1;(statearr_48476_48505[(2)] = inst_48466);
(statearr_48476_48505[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (13)))
{var inst_48459 = cljs.core.async.close_BANG_(out);var state_48470__$1 = state_48470;var statearr_48477_48506 = state_48470__$1;(statearr_48477_48506[(2)] = inst_48459);
(statearr_48477_48506[(1)] = (15));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (6)))
{var state_48470__$1 = state_48470;var statearr_48478_48507 = state_48470__$1;(statearr_48478_48507[(2)] = null);
(statearr_48478_48507[(1)] = (11));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (3)))
{var inst_48468 = (state_48470[(2)]);var state_48470__$1 = state_48470;return cljs.core.async.impl.ioc_helpers.return_chan(state_48470__$1,inst_48468);
} else
{if((state_val_48471 === (12)))
{var inst_48456 = (state_48470[(8)]);var inst_48456__$1 = (state_48470[(2)]);var inst_48457 = cljs.core.some(cljs.core.nil_QMARK_,inst_48456__$1);var state_48470__$1 = (function (){var statearr_48479 = state_48470;(statearr_48479[(8)] = inst_48456__$1);
return statearr_48479;
})();if(cljs.core.truth_(inst_48457))
{var statearr_48480_48508 = state_48470__$1;(statearr_48480_48508[(1)] = (13));
} else
{var statearr_48481_48509 = state_48470__$1;(statearr_48481_48509[(1)] = (14));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (2)))
{var inst_48433 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));var inst_48434 = (0);var state_48470__$1 = (function (){var statearr_48482 = state_48470;(statearr_48482[(9)] = inst_48433);
(statearr_48482[(7)] = inst_48434);
return statearr_48482;
})();var statearr_48483_48510 = state_48470__$1;(statearr_48483_48510[(2)] = null);
(statearr_48483_48510[(1)] = (4));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (11)))
{var inst_48434 = (state_48470[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48470,(10),Object,null,(9));var inst_48443 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48434) : chs__$1.call(null,inst_48434));var inst_48444 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48434) : done.call(null,inst_48434));var inst_48445 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48443,inst_48444);var state_48470__$1 = state_48470;var statearr_48484_48511 = state_48470__$1;(statearr_48484_48511[(2)] = inst_48445);
cljs.core.async.impl.ioc_helpers.process_exception(state_48470__$1);
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (9)))
{var inst_48434 = (state_48470[(7)]);var inst_48447 = (state_48470[(2)]);var inst_48448 = (inst_48434 + (1));var inst_48434__$1 = inst_48448;var state_48470__$1 = (function (){var statearr_48485 = state_48470;(statearr_48485[(7)] = inst_48434__$1);
(statearr_48485[(10)] = inst_48447);
return statearr_48485;
})();var statearr_48486_48512 = state_48470__$1;(statearr_48486_48512[(2)] = null);
(statearr_48486_48512[(1)] = (4));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (5)))
{var inst_48454 = (state_48470[(2)]);var state_48470__$1 = (function (){var statearr_48487 = state_48470;(statearr_48487[(11)] = inst_48454);
return statearr_48487;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48470__$1,(12),dchan);
} else
{if((state_val_48471 === (14)))
{var inst_48456 = (state_48470[(8)]);var inst_48461 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48456);var state_48470__$1 = state_48470;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48470__$1,(16),out,inst_48461);
} else
{if((state_val_48471 === (16)))
{var inst_48463 = (state_48470[(2)]);var state_48470__$1 = (function (){var statearr_48488 = state_48470;(statearr_48488[(12)] = inst_48463);
return statearr_48488;
})();var statearr_48489_48513 = state_48470__$1;(statearr_48489_48513[(2)] = null);
(statearr_48489_48513[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (10)))
{var inst_48438 = (state_48470[(2)]);var inst_48439 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_48470__$1 = (function (){var statearr_48490 = state_48470;(statearr_48490[(13)] = inst_48438);
return statearr_48490;
})();var statearr_48491_48514 = state_48470__$1;(statearr_48491_48514[(2)] = inst_48439);
cljs.core.async.impl.ioc_helpers.process_exception(state_48470__$1);
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48471 === (8)))
{var inst_48452 = (state_48470[(2)]);var state_48470__$1 = state_48470;var statearr_48492_48515 = state_48470__$1;(statearr_48492_48515[(2)] = inst_48452);
(statearr_48492_48515[(1)] = (5));
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto___48500,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___48500,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48496[(0)] = state_machine__5694__auto__);
(statearr_48496[(1)] = (1));
return statearr_48496;
});
var state_machine__5694__auto____1 = (function (state_48470){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_48470);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48497){if((e48497 instanceof Object))
{var ex__5697__auto__ = e48497;var statearr_48498_48516 = state_48470;(statearr_48498_48516[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_48470);
return cljs.core.constant$keyword$1100;
} else
{throw e48497;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__48517 = state_48470;
state_48470 = G__48517;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_48470){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_48470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___48500,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_48499 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_48499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___48500);
return statearr_48499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___48500,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___48625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___48625,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___48625,out){
return (function (state_48601){var state_val_48602 = (state_48601[(1)]);if((state_val_48602 === (7)))
{var inst_48581 = (state_48601[(7)]);var inst_48580 = (state_48601[(8)]);var inst_48580__$1 = (state_48601[(2)]);var inst_48581__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48580__$1,(0),null);var inst_48582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48580__$1,(1),null);var inst_48583 = (inst_48581__$1 == null);var state_48601__$1 = (function (){var statearr_48603 = state_48601;(statearr_48603[(7)] = inst_48581__$1);
(statearr_48603[(8)] = inst_48580__$1);
(statearr_48603[(9)] = inst_48582);
return statearr_48603;
})();if(cljs.core.truth_(inst_48583))
{var statearr_48604_48626 = state_48601__$1;(statearr_48604_48626[(1)] = (8));
} else
{var statearr_48605_48627 = state_48601__$1;(statearr_48605_48627[(1)] = (9));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48602 === (1)))
{var inst_48572 = cljs.core.vec(chs);var inst_48573 = inst_48572;var state_48601__$1 = (function (){var statearr_48606 = state_48601;(statearr_48606[(10)] = inst_48573);
return statearr_48606;
})();var statearr_48607_48628 = state_48601__$1;(statearr_48607_48628[(2)] = null);
(statearr_48607_48628[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48602 === (4)))
{var inst_48573 = (state_48601[(10)]);var state_48601__$1 = state_48601;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_48601__$1,(7),inst_48573);
} else
{if((state_val_48602 === (6)))
{var inst_48597 = (state_48601[(2)]);var state_48601__$1 = state_48601;var statearr_48608_48629 = state_48601__$1;(statearr_48608_48629[(2)] = inst_48597);
(statearr_48608_48629[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48602 === (3)))
{var inst_48599 = (state_48601[(2)]);var state_48601__$1 = state_48601;return cljs.core.async.impl.ioc_helpers.return_chan(state_48601__$1,inst_48599);
} else
{if((state_val_48602 === (2)))
{var inst_48573 = (state_48601[(10)]);var inst_48575 = cljs.core.count(inst_48573);var inst_48576 = (inst_48575 > (0));var state_48601__$1 = state_48601;if(cljs.core.truth_(inst_48576))
{var statearr_48610_48630 = state_48601__$1;(statearr_48610_48630[(1)] = (4));
} else
{var statearr_48611_48631 = state_48601__$1;(statearr_48611_48631[(1)] = (5));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48602 === (11)))
{var inst_48573 = (state_48601[(10)]);var inst_48590 = (state_48601[(2)]);var tmp48609 = inst_48573;var inst_48573__$1 = tmp48609;var state_48601__$1 = (function (){var statearr_48612 = state_48601;(statearr_48612[(10)] = inst_48573__$1);
(statearr_48612[(11)] = inst_48590);
return statearr_48612;
})();var statearr_48613_48632 = state_48601__$1;(statearr_48613_48632[(2)] = null);
(statearr_48613_48632[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48602 === (9)))
{var inst_48581 = (state_48601[(7)]);var state_48601__$1 = state_48601;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48601__$1,(11),out,inst_48581);
} else
{if((state_val_48602 === (5)))
{var inst_48595 = cljs.core.async.close_BANG_(out);var state_48601__$1 = state_48601;var statearr_48614_48633 = state_48601__$1;(statearr_48614_48633[(2)] = inst_48595);
(statearr_48614_48633[(1)] = (6));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48602 === (10)))
{var inst_48593 = (state_48601[(2)]);var state_48601__$1 = state_48601;var statearr_48615_48634 = state_48601__$1;(statearr_48615_48634[(2)] = inst_48593);
(statearr_48615_48634[(1)] = (6));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48602 === (8)))
{var inst_48573 = (state_48601[(10)]);var inst_48581 = (state_48601[(7)]);var inst_48580 = (state_48601[(8)]);var inst_48582 = (state_48601[(9)]);var inst_48585 = (function (){var c = inst_48582;var v = inst_48581;var vec__48578 = inst_48580;var cs = inst_48573;return ((function (c,v,vec__48578,cs,inst_48573,inst_48581,inst_48580,inst_48582,state_val_48602,c__5708__auto___48625,out){
return (function (p1__48518_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48518_SHARP_);
});
;})(c,v,vec__48578,cs,inst_48573,inst_48581,inst_48580,inst_48582,state_val_48602,c__5708__auto___48625,out))
})();var inst_48586 = cljs.core.filterv(inst_48585,inst_48573);var inst_48573__$1 = inst_48586;var state_48601__$1 = (function (){var statearr_48616 = state_48601;(statearr_48616[(10)] = inst_48573__$1);
return statearr_48616;
})();var statearr_48617_48635 = state_48601__$1;(statearr_48617_48635[(2)] = null);
(statearr_48617_48635[(1)] = (2));
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto___48625,out))
;return ((function (switch__5693__auto__,c__5708__auto___48625,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48621 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48621[(0)] = state_machine__5694__auto__);
(statearr_48621[(1)] = (1));
return statearr_48621;
});
var state_machine__5694__auto____1 = (function (state_48601){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_48601);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48622){if((e48622 instanceof Object))
{var ex__5697__auto__ = e48622;var statearr_48623_48636 = state_48601;(statearr_48623_48636[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_48601);
return cljs.core.constant$keyword$1100;
} else
{throw e48622;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__48637 = state_48601;
state_48601 = G__48637;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_48601){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_48601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___48625,out))
})();var state__5710__auto__ = (function (){var statearr_48624 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_48624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___48625);
return statearr_48624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___48625,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___48730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___48730,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___48730,out){
return (function (state_48707){var state_val_48708 = (state_48707[(1)]);if((state_val_48708 === (7)))
{var inst_48689 = (state_48707[(7)]);var inst_48689__$1 = (state_48707[(2)]);var inst_48690 = (inst_48689__$1 == null);var inst_48691 = cljs.core.not(inst_48690);var state_48707__$1 = (function (){var statearr_48709 = state_48707;(statearr_48709[(7)] = inst_48689__$1);
return statearr_48709;
})();if(inst_48691)
{var statearr_48710_48731 = state_48707__$1;(statearr_48710_48731[(1)] = (8));
} else
{var statearr_48711_48732 = state_48707__$1;(statearr_48711_48732[(1)] = (9));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48708 === (1)))
{var inst_48684 = (0);var state_48707__$1 = (function (){var statearr_48712 = state_48707;(statearr_48712[(8)] = inst_48684);
return statearr_48712;
})();var statearr_48713_48733 = state_48707__$1;(statearr_48713_48733[(2)] = null);
(statearr_48713_48733[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48708 === (4)))
{var state_48707__$1 = state_48707;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48707__$1,(7),ch);
} else
{if((state_val_48708 === (6)))
{var inst_48702 = (state_48707[(2)]);var state_48707__$1 = state_48707;var statearr_48714_48734 = state_48707__$1;(statearr_48714_48734[(2)] = inst_48702);
(statearr_48714_48734[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48708 === (3)))
{var inst_48704 = (state_48707[(2)]);var inst_48705 = cljs.core.async.close_BANG_(out);var state_48707__$1 = (function (){var statearr_48715 = state_48707;(statearr_48715[(9)] = inst_48704);
return statearr_48715;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_48707__$1,inst_48705);
} else
{if((state_val_48708 === (2)))
{var inst_48684 = (state_48707[(8)]);var inst_48686 = (inst_48684 < n);var state_48707__$1 = state_48707;if(cljs.core.truth_(inst_48686))
{var statearr_48716_48735 = state_48707__$1;(statearr_48716_48735[(1)] = (4));
} else
{var statearr_48717_48736 = state_48707__$1;(statearr_48717_48736[(1)] = (5));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48708 === (11)))
{var inst_48684 = (state_48707[(8)]);var inst_48694 = (state_48707[(2)]);var inst_48695 = (inst_48684 + (1));var inst_48684__$1 = inst_48695;var state_48707__$1 = (function (){var statearr_48718 = state_48707;(statearr_48718[(8)] = inst_48684__$1);
(statearr_48718[(10)] = inst_48694);
return statearr_48718;
})();var statearr_48719_48737 = state_48707__$1;(statearr_48719_48737[(2)] = null);
(statearr_48719_48737[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48708 === (9)))
{var state_48707__$1 = state_48707;var statearr_48720_48738 = state_48707__$1;(statearr_48720_48738[(2)] = null);
(statearr_48720_48738[(1)] = (10));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48708 === (5)))
{var state_48707__$1 = state_48707;var statearr_48721_48739 = state_48707__$1;(statearr_48721_48739[(2)] = null);
(statearr_48721_48739[(1)] = (6));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48708 === (10)))
{var inst_48699 = (state_48707[(2)]);var state_48707__$1 = state_48707;var statearr_48722_48740 = state_48707__$1;(statearr_48722_48740[(2)] = inst_48699);
(statearr_48722_48740[(1)] = (6));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48708 === (8)))
{var inst_48689 = (state_48707[(7)]);var state_48707__$1 = state_48707;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48707__$1,(11),out,inst_48689);
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
});})(c__5708__auto___48730,out))
;return ((function (switch__5693__auto__,c__5708__auto___48730,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48726 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_48726[(0)] = state_machine__5694__auto__);
(statearr_48726[(1)] = (1));
return statearr_48726;
});
var state_machine__5694__auto____1 = (function (state_48707){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_48707);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48727){if((e48727 instanceof Object))
{var ex__5697__auto__ = e48727;var statearr_48728_48741 = state_48707;(statearr_48728_48741[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_48707);
return cljs.core.constant$keyword$1100;
} else
{throw e48727;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__48742 = state_48707;
state_48707 = G__48742;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_48707){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_48707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___48730,out))
})();var state__5710__auto__ = (function (){var statearr_48729 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_48729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___48730);
return statearr_48729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___48730,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___48839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___48839,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___48839,out){
return (function (state_48814){var state_val_48815 = (state_48814[(1)]);if((state_val_48815 === (7)))
{var inst_48809 = (state_48814[(2)]);var state_48814__$1 = state_48814;var statearr_48816_48840 = state_48814__$1;(statearr_48816_48840[(2)] = inst_48809);
(statearr_48816_48840[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48815 === (1)))
{var inst_48791 = null;var state_48814__$1 = (function (){var statearr_48817 = state_48814;(statearr_48817[(7)] = inst_48791);
return statearr_48817;
})();var statearr_48818_48841 = state_48814__$1;(statearr_48818_48841[(2)] = null);
(statearr_48818_48841[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48815 === (4)))
{var inst_48794 = (state_48814[(8)]);var inst_48794__$1 = (state_48814[(2)]);var inst_48795 = (inst_48794__$1 == null);var inst_48796 = cljs.core.not(inst_48795);var state_48814__$1 = (function (){var statearr_48819 = state_48814;(statearr_48819[(8)] = inst_48794__$1);
return statearr_48819;
})();if(inst_48796)
{var statearr_48820_48842 = state_48814__$1;(statearr_48820_48842[(1)] = (5));
} else
{var statearr_48821_48843 = state_48814__$1;(statearr_48821_48843[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48815 === (6)))
{var state_48814__$1 = state_48814;var statearr_48822_48844 = state_48814__$1;(statearr_48822_48844[(2)] = null);
(statearr_48822_48844[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48815 === (3)))
{var inst_48811 = (state_48814[(2)]);var inst_48812 = cljs.core.async.close_BANG_(out);var state_48814__$1 = (function (){var statearr_48823 = state_48814;(statearr_48823[(9)] = inst_48811);
return statearr_48823;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_48814__$1,inst_48812);
} else
{if((state_val_48815 === (2)))
{var state_48814__$1 = state_48814;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48814__$1,(4),ch);
} else
{if((state_val_48815 === (11)))
{var inst_48794 = (state_48814[(8)]);var inst_48803 = (state_48814[(2)]);var inst_48791 = inst_48794;var state_48814__$1 = (function (){var statearr_48824 = state_48814;(statearr_48824[(10)] = inst_48803);
(statearr_48824[(7)] = inst_48791);
return statearr_48824;
})();var statearr_48825_48845 = state_48814__$1;(statearr_48825_48845[(2)] = null);
(statearr_48825_48845[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48815 === (9)))
{var inst_48794 = (state_48814[(8)]);var state_48814__$1 = state_48814;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48814__$1,(11),out,inst_48794);
} else
{if((state_val_48815 === (5)))
{var inst_48794 = (state_48814[(8)]);var inst_48791 = (state_48814[(7)]);var inst_48798 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48794,inst_48791);var state_48814__$1 = state_48814;if(inst_48798)
{var statearr_48827_48846 = state_48814__$1;(statearr_48827_48846[(1)] = (8));
} else
{var statearr_48828_48847 = state_48814__$1;(statearr_48828_48847[(1)] = (9));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48815 === (10)))
{var inst_48806 = (state_48814[(2)]);var state_48814__$1 = state_48814;var statearr_48829_48848 = state_48814__$1;(statearr_48829_48848[(2)] = inst_48806);
(statearr_48829_48848[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48815 === (8)))
{var inst_48791 = (state_48814[(7)]);var tmp48826 = inst_48791;var inst_48791__$1 = tmp48826;var state_48814__$1 = (function (){var statearr_48830 = state_48814;(statearr_48830[(7)] = inst_48791__$1);
return statearr_48830;
})();var statearr_48831_48849 = state_48814__$1;(statearr_48831_48849[(2)] = null);
(statearr_48831_48849[(1)] = (2));
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto___48839,out))
;return ((function (switch__5693__auto__,c__5708__auto___48839,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48835 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_48835[(0)] = state_machine__5694__auto__);
(statearr_48835[(1)] = (1));
return statearr_48835;
});
var state_machine__5694__auto____1 = (function (state_48814){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_48814);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48836){if((e48836 instanceof Object))
{var ex__5697__auto__ = e48836;var statearr_48837_48850 = state_48814;(statearr_48837_48850[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_48814);
return cljs.core.constant$keyword$1100;
} else
{throw e48836;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__48851 = state_48814;
state_48814 = G__48851;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_48814){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_48814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___48839,out))
})();var state__5710__auto__ = (function (){var statearr_48838 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_48838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___48839);
return statearr_48838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___48839,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___48986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___48986,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___48986,out){
return (function (state_48956){var state_val_48957 = (state_48956[(1)]);if((state_val_48957 === (7)))
{var inst_48952 = (state_48956[(2)]);var state_48956__$1 = state_48956;var statearr_48958_48987 = state_48956__$1;(statearr_48958_48987[(2)] = inst_48952);
(statearr_48958_48987[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48957 === (1)))
{var inst_48919 = (new Array(n));var inst_48920 = inst_48919;var inst_48921 = (0);var state_48956__$1 = (function (){var statearr_48959 = state_48956;(statearr_48959[(7)] = inst_48921);
(statearr_48959[(8)] = inst_48920);
return statearr_48959;
})();var statearr_48960_48988 = state_48956__$1;(statearr_48960_48988[(2)] = null);
(statearr_48960_48988[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48957 === (4)))
{var inst_48924 = (state_48956[(9)]);var inst_48924__$1 = (state_48956[(2)]);var inst_48925 = (inst_48924__$1 == null);var inst_48926 = cljs.core.not(inst_48925);var state_48956__$1 = (function (){var statearr_48961 = state_48956;(statearr_48961[(9)] = inst_48924__$1);
return statearr_48961;
})();if(inst_48926)
{var statearr_48962_48989 = state_48956__$1;(statearr_48962_48989[(1)] = (5));
} else
{var statearr_48963_48990 = state_48956__$1;(statearr_48963_48990[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48957 === (15)))
{var inst_48946 = (state_48956[(2)]);var state_48956__$1 = state_48956;var statearr_48964_48991 = state_48956__$1;(statearr_48964_48991[(2)] = inst_48946);
(statearr_48964_48991[(1)] = (14));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48957 === (13)))
{var state_48956__$1 = state_48956;var statearr_48965_48992 = state_48956__$1;(statearr_48965_48992[(2)] = null);
(statearr_48965_48992[(1)] = (14));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48957 === (6)))
{var inst_48921 = (state_48956[(7)]);var inst_48942 = (inst_48921 > (0));var state_48956__$1 = state_48956;if(cljs.core.truth_(inst_48942))
{var statearr_48966_48993 = state_48956__$1;(statearr_48966_48993[(1)] = (12));
} else
{var statearr_48967_48994 = state_48956__$1;(statearr_48967_48994[(1)] = (13));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48957 === (3)))
{var inst_48954 = (state_48956[(2)]);var state_48956__$1 = state_48956;return cljs.core.async.impl.ioc_helpers.return_chan(state_48956__$1,inst_48954);
} else
{if((state_val_48957 === (12)))
{var inst_48920 = (state_48956[(8)]);var inst_48944 = cljs.core.vec(inst_48920);var state_48956__$1 = state_48956;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48956__$1,(15),out,inst_48944);
} else
{if((state_val_48957 === (2)))
{var state_48956__$1 = state_48956;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48956__$1,(4),ch);
} else
{if((state_val_48957 === (11)))
{var inst_48936 = (state_48956[(2)]);var inst_48937 = (new Array(n));var inst_48920 = inst_48937;var inst_48921 = (0);var state_48956__$1 = (function (){var statearr_48968 = state_48956;(statearr_48968[(7)] = inst_48921);
(statearr_48968[(8)] = inst_48920);
(statearr_48968[(10)] = inst_48936);
return statearr_48968;
})();var statearr_48969_48995 = state_48956__$1;(statearr_48969_48995[(2)] = null);
(statearr_48969_48995[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48957 === (9)))
{var inst_48920 = (state_48956[(8)]);var inst_48934 = cljs.core.vec(inst_48920);var state_48956__$1 = state_48956;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48956__$1,(11),out,inst_48934);
} else
{if((state_val_48957 === (5)))
{var inst_48921 = (state_48956[(7)]);var inst_48929 = (state_48956[(11)]);var inst_48924 = (state_48956[(9)]);var inst_48920 = (state_48956[(8)]);var inst_48928 = (inst_48920[inst_48921] = inst_48924);var inst_48929__$1 = (inst_48921 + (1));var inst_48930 = (inst_48929__$1 < n);var state_48956__$1 = (function (){var statearr_48970 = state_48956;(statearr_48970[(11)] = inst_48929__$1);
(statearr_48970[(12)] = inst_48928);
return statearr_48970;
})();if(cljs.core.truth_(inst_48930))
{var statearr_48971_48996 = state_48956__$1;(statearr_48971_48996[(1)] = (8));
} else
{var statearr_48972_48997 = state_48956__$1;(statearr_48972_48997[(1)] = (9));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48957 === (14)))
{var inst_48949 = (state_48956[(2)]);var inst_48950 = cljs.core.async.close_BANG_(out);var state_48956__$1 = (function (){var statearr_48974 = state_48956;(statearr_48974[(13)] = inst_48949);
return statearr_48974;
})();var statearr_48975_48998 = state_48956__$1;(statearr_48975_48998[(2)] = inst_48950);
(statearr_48975_48998[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48957 === (10)))
{var inst_48940 = (state_48956[(2)]);var state_48956__$1 = state_48956;var statearr_48976_48999 = state_48956__$1;(statearr_48976_48999[(2)] = inst_48940);
(statearr_48976_48999[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_48957 === (8)))
{var inst_48929 = (state_48956[(11)]);var inst_48920 = (state_48956[(8)]);var tmp48973 = inst_48920;var inst_48920__$1 = tmp48973;var inst_48921 = inst_48929;var state_48956__$1 = (function (){var statearr_48977 = state_48956;(statearr_48977[(7)] = inst_48921);
(statearr_48977[(8)] = inst_48920__$1);
return statearr_48977;
})();var statearr_48978_49000 = state_48956__$1;(statearr_48978_49000[(2)] = null);
(statearr_48978_49000[(1)] = (2));
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto___48986,out))
;return ((function (switch__5693__auto__,c__5708__auto___48986,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48982[(0)] = state_machine__5694__auto__);
(statearr_48982[(1)] = (1));
return statearr_48982;
});
var state_machine__5694__auto____1 = (function (state_48956){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_48956);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48983){if((e48983 instanceof Object))
{var ex__5697__auto__ = e48983;var statearr_48984_49001 = state_48956;(statearr_48984_49001[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_48956);
return cljs.core.constant$keyword$1100;
} else
{throw e48983;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__49002 = state_48956;
state_48956 = G__49002;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_48956){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_48956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___48986,out))
})();var state__5710__auto__ = (function (){var statearr_48985 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_48985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___48986);
return statearr_48985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___48986,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___49145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___49145,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49145,out){
return (function (state_49115){var state_val_49116 = (state_49115[(1)]);if((state_val_49116 === (7)))
{var inst_49111 = (state_49115[(2)]);var state_49115__$1 = state_49115;var statearr_49117_49146 = state_49115__$1;(statearr_49117_49146[(2)] = inst_49111);
(statearr_49117_49146[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_49116 === (1)))
{var inst_49074 = [];var inst_49075 = inst_49074;var inst_49076 = cljs.core.constant$keyword$1113;var state_49115__$1 = (function (){var statearr_49118 = state_49115;(statearr_49118[(7)] = inst_49076);
(statearr_49118[(8)] = inst_49075);
return statearr_49118;
})();var statearr_49119_49147 = state_49115__$1;(statearr_49119_49147[(2)] = null);
(statearr_49119_49147[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_49116 === (4)))
{var inst_49079 = (state_49115[(9)]);var inst_49079__$1 = (state_49115[(2)]);var inst_49080 = (inst_49079__$1 == null);var inst_49081 = cljs.core.not(inst_49080);var state_49115__$1 = (function (){var statearr_49120 = state_49115;(statearr_49120[(9)] = inst_49079__$1);
return statearr_49120;
})();if(inst_49081)
{var statearr_49121_49148 = state_49115__$1;(statearr_49121_49148[(1)] = (5));
} else
{var statearr_49122_49149 = state_49115__$1;(statearr_49122_49149[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_49116 === (15)))
{var inst_49105 = (state_49115[(2)]);var state_49115__$1 = state_49115;var statearr_49123_49150 = state_49115__$1;(statearr_49123_49150[(2)] = inst_49105);
(statearr_49123_49150[(1)] = (14));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_49116 === (13)))
{var state_49115__$1 = state_49115;var statearr_49124_49151 = state_49115__$1;(statearr_49124_49151[(2)] = null);
(statearr_49124_49151[(1)] = (14));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_49116 === (6)))
{var inst_49075 = (state_49115[(8)]);var inst_49100 = inst_49075.length;var inst_49101 = (inst_49100 > (0));var state_49115__$1 = state_49115;if(cljs.core.truth_(inst_49101))
{var statearr_49125_49152 = state_49115__$1;(statearr_49125_49152[(1)] = (12));
} else
{var statearr_49126_49153 = state_49115__$1;(statearr_49126_49153[(1)] = (13));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_49116 === (3)))
{var inst_49113 = (state_49115[(2)]);var state_49115__$1 = state_49115;return cljs.core.async.impl.ioc_helpers.return_chan(state_49115__$1,inst_49113);
} else
{if((state_val_49116 === (12)))
{var inst_49075 = (state_49115[(8)]);var inst_49103 = cljs.core.vec(inst_49075);var state_49115__$1 = state_49115;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49115__$1,(15),out,inst_49103);
} else
{if((state_val_49116 === (2)))
{var state_49115__$1 = state_49115;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49115__$1,(4),ch);
} else
{if((state_val_49116 === (11)))
{var inst_49083 = (state_49115[(10)]);var inst_49079 = (state_49115[(9)]);var inst_49093 = (state_49115[(2)]);var inst_49094 = [];var inst_49095 = inst_49094.push(inst_49079);var inst_49075 = inst_49094;var inst_49076 = inst_49083;var state_49115__$1 = (function (){var statearr_49127 = state_49115;(statearr_49127[(11)] = inst_49095);
(statearr_49127[(12)] = inst_49093);
(statearr_49127[(7)] = inst_49076);
(statearr_49127[(8)] = inst_49075);
return statearr_49127;
})();var statearr_49128_49154 = state_49115__$1;(statearr_49128_49154[(2)] = null);
(statearr_49128_49154[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_49116 === (9)))
{var inst_49075 = (state_49115[(8)]);var inst_49091 = cljs.core.vec(inst_49075);var state_49115__$1 = state_49115;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49115__$1,(11),out,inst_49091);
} else
{if((state_val_49116 === (5)))
{var inst_49083 = (state_49115[(10)]);var inst_49079 = (state_49115[(9)]);var inst_49076 = (state_49115[(7)]);var inst_49083__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49079) : f.call(null,inst_49079));var inst_49084 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49083__$1,inst_49076);var inst_49085 = cljs.core.keyword_identical_QMARK_(inst_49076,cljs.core.constant$keyword$1113);var inst_49086 = (inst_49084) || (inst_49085);var state_49115__$1 = (function (){var statearr_49129 = state_49115;(statearr_49129[(10)] = inst_49083__$1);
return statearr_49129;
})();if(cljs.core.truth_(inst_49086))
{var statearr_49130_49155 = state_49115__$1;(statearr_49130_49155[(1)] = (8));
} else
{var statearr_49131_49156 = state_49115__$1;(statearr_49131_49156[(1)] = (9));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_49116 === (14)))
{var inst_49108 = (state_49115[(2)]);var inst_49109 = cljs.core.async.close_BANG_(out);var state_49115__$1 = (function (){var statearr_49133 = state_49115;(statearr_49133[(13)] = inst_49108);
return statearr_49133;
})();var statearr_49134_49157 = state_49115__$1;(statearr_49134_49157[(2)] = inst_49109);
(statearr_49134_49157[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_49116 === (10)))
{var inst_49098 = (state_49115[(2)]);var state_49115__$1 = state_49115;var statearr_49135_49158 = state_49115__$1;(statearr_49135_49158[(2)] = inst_49098);
(statearr_49135_49158[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_49116 === (8)))
{var inst_49083 = (state_49115[(10)]);var inst_49079 = (state_49115[(9)]);var inst_49075 = (state_49115[(8)]);var inst_49088 = inst_49075.push(inst_49079);var tmp49132 = inst_49075;var inst_49075__$1 = tmp49132;var inst_49076 = inst_49083;var state_49115__$1 = (function (){var statearr_49136 = state_49115;(statearr_49136[(7)] = inst_49076);
(statearr_49136[(8)] = inst_49075__$1);
(statearr_49136[(14)] = inst_49088);
return statearr_49136;
})();var statearr_49137_49159 = state_49115__$1;(statearr_49137_49159[(2)] = null);
(statearr_49137_49159[(1)] = (2));
return cljs.core.constant$keyword$1100;
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
});})(c__5708__auto___49145,out))
;return ((function (switch__5693__auto__,c__5708__auto___49145,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49141[(0)] = state_machine__5694__auto__);
(statearr_49141[(1)] = (1));
return statearr_49141;
});
var state_machine__5694__auto____1 = (function (state_49115){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49115);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49142){if((e49142 instanceof Object))
{var ex__5697__auto__ = e49142;var statearr_49143_49160 = state_49115;(statearr_49143_49160[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49115);
return cljs.core.constant$keyword$1100;
} else
{throw e49142;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__49161 = state_49115;
state_49115 = G__49161;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49115){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49145,out))
})();var state__5710__auto__ = (function (){var statearr_49144 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49145);
return statearr_49144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___49145,out))
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
