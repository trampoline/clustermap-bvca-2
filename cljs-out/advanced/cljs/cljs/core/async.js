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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t38799 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38799 = (function (f,fn_handler,meta38800){
this.f = f;
this.fn_handler = fn_handler;
this.meta38800 = meta38800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38799.cljs$lang$type = true;
cljs.core.async.t38799.cljs$lang$ctorStr = "cljs.core.async/t38799";
cljs.core.async.t38799.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38799");
});
cljs.core.async.t38799.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t38799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t38799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38801){var self__ = this;
var _38801__$1 = this;return self__.meta38800;
});
cljs.core.async.t38799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38801,meta38800__$1){var self__ = this;
var _38801__$1 = this;return (new cljs.core.async.t38799(self__.f,self__.fn_handler,meta38800__$1));
});
cljs.core.async.__GT_t38799 = (function __GT_t38799(f__$1,fn_handler__$1,meta38800){return (new cljs.core.async.t38799(f__$1,fn_handler__$1,meta38800));
});
}
return (new cljs.core.async.t38799(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__38803 = buff;if(G__38803)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__38803.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__38803.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__38803);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__38803);
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
{var val_38804 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38804) : fn1.call(null,val_38804));
} else
{cljs.core.async.impl.dispatch.run(((function (val_38804,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38804) : fn1.call(null,val_38804));
});})(val_38804,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___38805 = n;var x_38806 = (0);while(true){
if((x_38806 < n__4399__auto___38805))
{(a[x_38806] = (0));
{
var G__38807 = (x_38806 + (1));
x_38806 = G__38807;
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
var G__38808 = (i + (1));
i = G__38808;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t38812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38812 = (function (flag,alt_flag,meta38813){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta38813 = meta38813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38812.cljs$lang$type = true;
cljs.core.async.t38812.cljs$lang$ctorStr = "cljs.core.async/t38812";
cljs.core.async.t38812.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38812");
});})(flag))
;
cljs.core.async.t38812.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t38812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t38812.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38814){var self__ = this;
var _38814__$1 = this;return self__.meta38813;
});})(flag))
;
cljs.core.async.t38812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38814,meta38813__$1){var self__ = this;
var _38814__$1 = this;return (new cljs.core.async.t38812(self__.flag,self__.alt_flag,meta38813__$1));
});})(flag))
;
cljs.core.async.__GT_t38812 = ((function (flag){
return (function __GT_t38812(flag__$1,alt_flag__$1,meta38813){return (new cljs.core.async.t38812(flag__$1,alt_flag__$1,meta38813));
});})(flag))
;
}
return (new cljs.core.async.t38812(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t38818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38818 = (function (cb,flag,alt_handler,meta38819){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta38819 = meta38819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38818.cljs$lang$type = true;
cljs.core.async.t38818.cljs$lang$ctorStr = "cljs.core.async/t38818";
cljs.core.async.t38818.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38818");
});
cljs.core.async.t38818.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t38818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t38818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38820){var self__ = this;
var _38820__$1 = this;return self__.meta38819;
});
cljs.core.async.t38818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38820,meta38819__$1){var self__ = this;
var _38820__$1 = this;return (new cljs.core.async.t38818(self__.cb,self__.flag,self__.alt_handler,meta38819__$1));
});
cljs.core.async.__GT_t38818 = (function __GT_t38818(cb__$1,flag__$1,alt_handler__$1,meta38819){return (new cljs.core.async.t38818(cb__$1,flag__$1,alt_handler__$1,meta38819));
});
}
return (new cljs.core.async.t38818(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$773.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38821_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38821_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38821_SHARP_,port], null)));
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
var G__38822 = (i + (1));
i = G__38822;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$759))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3531__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$759.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$759], null));
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
var alts_BANG___delegate = function (ports,p__38823){var map__38825 = p__38823;var map__38825__$1 = ((cljs.core.seq_QMARK_(map__38825))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38825):map__38825);var opts = map__38825__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__38823 = null;if (arguments.length > 1) {
  p__38823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__38823);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__38826){
var ports = cljs.core.first(arglist__38826);
var p__38823 = cljs.core.rest(arglist__38826);
return alts_BANG___delegate(ports,p__38823);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t38834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38834 = (function (ch,f,map_LT_,meta38835){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38835 = meta38835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38834.cljs$lang$type = true;
cljs.core.async.t38834.cljs$lang$ctorStr = "cljs.core.async/t38834";
cljs.core.async.t38834.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38834");
});
cljs.core.async.t38834.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t38834.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t38837 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38837 = (function (fn1,_,meta38835,ch,f,map_LT_,meta38838){
this.fn1 = fn1;
this._ = _;
this.meta38835 = meta38835;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38838 = meta38838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38837.cljs$lang$type = true;
cljs.core.async.t38837.cljs$lang$ctorStr = "cljs.core.async/t38837";
cljs.core.async.t38837.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38837");
});})(___$1))
;
cljs.core.async.t38837.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t38837.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t38837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__38827_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__38827_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38827_SHARP_) : self__.f.call(null,p1__38827_SHARP_)))) : f1.call(null,(((p1__38827_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38827_SHARP_) : self__.f.call(null,p1__38827_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t38837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38839){var self__ = this;
var _38839__$1 = this;return self__.meta38838;
});})(___$1))
;
cljs.core.async.t38837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38839,meta38838__$1){var self__ = this;
var _38839__$1 = this;return (new cljs.core.async.t38837(self__.fn1,self__._,self__.meta38835,self__.ch,self__.f,self__.map_LT_,meta38838__$1));
});})(___$1))
;
cljs.core.async.__GT_t38837 = ((function (___$1){
return (function __GT_t38837(fn1__$1,___$2,meta38835__$1,ch__$2,f__$2,map_LT___$2,meta38838){return (new cljs.core.async.t38837(fn1__$1,___$2,meta38835__$1,ch__$2,f__$2,map_LT___$2,meta38838));
});})(___$1))
;
}
return (new cljs.core.async.t38837(fn1,___$1,self__.meta38835,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t38834.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t38834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38836){var self__ = this;
var _38836__$1 = this;return self__.meta38835;
});
cljs.core.async.t38834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38836,meta38835__$1){var self__ = this;
var _38836__$1 = this;return (new cljs.core.async.t38834(self__.ch,self__.f,self__.map_LT_,meta38835__$1));
});
cljs.core.async.__GT_t38834 = (function __GT_t38834(ch__$1,f__$1,map_LT___$1,meta38835){return (new cljs.core.async.t38834(ch__$1,f__$1,map_LT___$1,meta38835));
});
}
return (new cljs.core.async.t38834(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t38843 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38843 = (function (ch,f,map_GT_,meta38844){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta38844 = meta38844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38843.cljs$lang$type = true;
cljs.core.async.t38843.cljs$lang$ctorStr = "cljs.core.async/t38843";
cljs.core.async.t38843.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38843");
});
cljs.core.async.t38843.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t38843.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t38843.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t38843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38845){var self__ = this;
var _38845__$1 = this;return self__.meta38844;
});
cljs.core.async.t38843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38845,meta38844__$1){var self__ = this;
var _38845__$1 = this;return (new cljs.core.async.t38843(self__.ch,self__.f,self__.map_GT_,meta38844__$1));
});
cljs.core.async.__GT_t38843 = (function __GT_t38843(ch__$1,f__$1,map_GT___$1,meta38844){return (new cljs.core.async.t38843(ch__$1,f__$1,map_GT___$1,meta38844));
});
}
return (new cljs.core.async.t38843(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t38849 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38849 = (function (ch,p,filter_GT_,meta38850){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta38850 = meta38850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38849.cljs$lang$type = true;
cljs.core.async.t38849.cljs$lang$ctorStr = "cljs.core.async/t38849";
cljs.core.async.t38849.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38849");
});
cljs.core.async.t38849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t38849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t38849.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t38849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38851){var self__ = this;
var _38851__$1 = this;return self__.meta38850;
});
cljs.core.async.t38849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38851,meta38850__$1){var self__ = this;
var _38851__$1 = this;return (new cljs.core.async.t38849(self__.ch,self__.p,self__.filter_GT_,meta38850__$1));
});
cljs.core.async.__GT_t38849 = (function __GT_t38849(ch__$1,p__$1,filter_GT___$1,meta38850){return (new cljs.core.async.t38849(ch__$1,p__$1,filter_GT___$1,meta38850));
});
}
return (new cljs.core.async.t38849(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___38934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38934,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38934,out){
return (function (state_38913){var state_val_38914 = (state_38913[(1)]);if((state_val_38914 === (7)))
{var inst_38909 = (state_38913[(2)]);var state_38913__$1 = state_38913;var statearr_38915_38935 = state_38913__$1;(statearr_38915_38935[(2)] = inst_38909);
(statearr_38915_38935[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_38914 === (1)))
{var state_38913__$1 = state_38913;var statearr_38916_38936 = state_38913__$1;(statearr_38916_38936[(2)] = null);
(statearr_38916_38936[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_38914 === (4)))
{var inst_38895 = (state_38913[(7)]);var inst_38895__$1 = (state_38913[(2)]);var inst_38896 = (inst_38895__$1 == null);var state_38913__$1 = (function (){var statearr_38917 = state_38913;(statearr_38917[(7)] = inst_38895__$1);
return statearr_38917;
})();if(cljs.core.truth_(inst_38896))
{var statearr_38918_38937 = state_38913__$1;(statearr_38918_38937[(1)] = (5));
} else
{var statearr_38919_38938 = state_38913__$1;(statearr_38919_38938[(1)] = (6));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_38914 === (6)))
{var inst_38895 = (state_38913[(7)]);var inst_38900 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38895) : p.call(null,inst_38895));var state_38913__$1 = state_38913;if(cljs.core.truth_(inst_38900))
{var statearr_38920_38939 = state_38913__$1;(statearr_38920_38939[(1)] = (8));
} else
{var statearr_38921_38940 = state_38913__$1;(statearr_38921_38940[(1)] = (9));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_38914 === (3)))
{var inst_38911 = (state_38913[(2)]);var state_38913__$1 = state_38913;return cljs.core.async.impl.ioc_helpers.return_chan(state_38913__$1,inst_38911);
} else
{if((state_val_38914 === (2)))
{var state_38913__$1 = state_38913;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38913__$1,(4),ch);
} else
{if((state_val_38914 === (11)))
{var inst_38903 = (state_38913[(2)]);var state_38913__$1 = state_38913;var statearr_38922_38941 = state_38913__$1;(statearr_38922_38941[(2)] = inst_38903);
(statearr_38922_38941[(1)] = (10));
return cljs.core.constant$keyword$767;
} else
{if((state_val_38914 === (9)))
{var state_38913__$1 = state_38913;var statearr_38923_38942 = state_38913__$1;(statearr_38923_38942[(2)] = null);
(statearr_38923_38942[(1)] = (10));
return cljs.core.constant$keyword$767;
} else
{if((state_val_38914 === (5)))
{var inst_38898 = cljs.core.async.close_BANG_(out);var state_38913__$1 = state_38913;var statearr_38924_38943 = state_38913__$1;(statearr_38924_38943[(2)] = inst_38898);
(statearr_38924_38943[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_38914 === (10)))
{var inst_38906 = (state_38913[(2)]);var state_38913__$1 = (function (){var statearr_38925 = state_38913;(statearr_38925[(8)] = inst_38906);
return statearr_38925;
})();var statearr_38926_38944 = state_38913__$1;(statearr_38926_38944[(2)] = null);
(statearr_38926_38944[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_38914 === (8)))
{var inst_38895 = (state_38913[(7)]);var state_38913__$1 = state_38913;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38913__$1,(11),out,inst_38895);
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
});})(c__5693__auto___38934,out))
;return ((function (switch__5678__auto__,c__5693__auto___38934,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38930 = [null,null,null,null,null,null,null,null,null];(statearr_38930[(0)] = state_machine__5679__auto__);
(statearr_38930[(1)] = (1));
return statearr_38930;
});
var state_machine__5679__auto____1 = (function (state_38913){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38913);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38931){if((e38931 instanceof Object))
{var ex__5682__auto__ = e38931;var statearr_38932_38945 = state_38913;(statearr_38932_38945[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38913);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e38931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__38946 = state_38913;
state_38913 = G__38946;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38913){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38934,out))
})();var state__5695__auto__ = (function (){var statearr_38933 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38934);
return statearr_38933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38934,out))
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
return (function (state_39098){var state_val_39099 = (state_39098[(1)]);if((state_val_39099 === (7)))
{var inst_39094 = (state_39098[(2)]);var state_39098__$1 = state_39098;var statearr_39100_39137 = state_39098__$1;(statearr_39100_39137[(2)] = inst_39094);
(statearr_39100_39137[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (20)))
{var inst_39069 = (state_39098[(7)]);var inst_39080 = (state_39098[(2)]);var inst_39081 = cljs.core.next(inst_39069);var inst_39055 = inst_39081;var inst_39056 = null;var inst_39057 = (0);var inst_39058 = (0);var state_39098__$1 = (function (){var statearr_39101 = state_39098;(statearr_39101[(8)] = inst_39056);
(statearr_39101[(9)] = inst_39058);
(statearr_39101[(10)] = inst_39080);
(statearr_39101[(11)] = inst_39057);
(statearr_39101[(12)] = inst_39055);
return statearr_39101;
})();var statearr_39102_39138 = state_39098__$1;(statearr_39102_39138[(2)] = null);
(statearr_39102_39138[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (1)))
{var state_39098__$1 = state_39098;var statearr_39103_39139 = state_39098__$1;(statearr_39103_39139[(2)] = null);
(statearr_39103_39139[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (4)))
{var inst_39044 = (state_39098[(13)]);var inst_39044__$1 = (state_39098[(2)]);var inst_39045 = (inst_39044__$1 == null);var state_39098__$1 = (function (){var statearr_39107 = state_39098;(statearr_39107[(13)] = inst_39044__$1);
return statearr_39107;
})();if(cljs.core.truth_(inst_39045))
{var statearr_39108_39140 = state_39098__$1;(statearr_39108_39140[(1)] = (5));
} else
{var statearr_39109_39141 = state_39098__$1;(statearr_39109_39141[(1)] = (6));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (15)))
{var state_39098__$1 = state_39098;var statearr_39110_39142 = state_39098__$1;(statearr_39110_39142[(2)] = null);
(statearr_39110_39142[(1)] = (16));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (13)))
{var inst_39056 = (state_39098[(8)]);var inst_39058 = (state_39098[(9)]);var inst_39057 = (state_39098[(11)]);var inst_39055 = (state_39098[(12)]);var inst_39065 = (state_39098[(2)]);var inst_39066 = (inst_39058 + (1));var tmp39104 = inst_39056;var tmp39105 = inst_39057;var tmp39106 = inst_39055;var inst_39055__$1 = tmp39106;var inst_39056__$1 = tmp39104;var inst_39057__$1 = tmp39105;var inst_39058__$1 = inst_39066;var state_39098__$1 = (function (){var statearr_39111 = state_39098;(statearr_39111[(8)] = inst_39056__$1);
(statearr_39111[(9)] = inst_39058__$1);
(statearr_39111[(11)] = inst_39057__$1);
(statearr_39111[(12)] = inst_39055__$1);
(statearr_39111[(14)] = inst_39065);
return statearr_39111;
})();var statearr_39112_39143 = state_39098__$1;(statearr_39112_39143[(2)] = null);
(statearr_39112_39143[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (6)))
{var inst_39044 = (state_39098[(13)]);var inst_39049 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39044) : f.call(null,inst_39044));var inst_39054 = cljs.core.seq(inst_39049);var inst_39055 = inst_39054;var inst_39056 = null;var inst_39057 = (0);var inst_39058 = (0);var state_39098__$1 = (function (){var statearr_39113 = state_39098;(statearr_39113[(8)] = inst_39056);
(statearr_39113[(9)] = inst_39058);
(statearr_39113[(11)] = inst_39057);
(statearr_39113[(12)] = inst_39055);
return statearr_39113;
})();var statearr_39114_39144 = state_39098__$1;(statearr_39114_39144[(2)] = null);
(statearr_39114_39144[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (17)))
{var inst_39069 = (state_39098[(7)]);var inst_39073 = cljs.core.chunk_first(inst_39069);var inst_39074 = cljs.core.chunk_rest(inst_39069);var inst_39075 = cljs.core.count(inst_39073);var inst_39055 = inst_39074;var inst_39056 = inst_39073;var inst_39057 = inst_39075;var inst_39058 = (0);var state_39098__$1 = (function (){var statearr_39115 = state_39098;(statearr_39115[(8)] = inst_39056);
(statearr_39115[(9)] = inst_39058);
(statearr_39115[(11)] = inst_39057);
(statearr_39115[(12)] = inst_39055);
return statearr_39115;
})();var statearr_39116_39145 = state_39098__$1;(statearr_39116_39145[(2)] = null);
(statearr_39116_39145[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (3)))
{var inst_39096 = (state_39098[(2)]);var state_39098__$1 = state_39098;return cljs.core.async.impl.ioc_helpers.return_chan(state_39098__$1,inst_39096);
} else
{if((state_val_39099 === (12)))
{var inst_39089 = (state_39098[(2)]);var state_39098__$1 = state_39098;var statearr_39117_39146 = state_39098__$1;(statearr_39117_39146[(2)] = inst_39089);
(statearr_39117_39146[(1)] = (9));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (2)))
{var state_39098__$1 = state_39098;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39098__$1,(4),in$);
} else
{if((state_val_39099 === (19)))
{var inst_39084 = (state_39098[(2)]);var state_39098__$1 = state_39098;var statearr_39118_39147 = state_39098__$1;(statearr_39118_39147[(2)] = inst_39084);
(statearr_39118_39147[(1)] = (16));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (11)))
{var inst_39069 = (state_39098[(7)]);var inst_39055 = (state_39098[(12)]);var inst_39069__$1 = cljs.core.seq(inst_39055);var state_39098__$1 = (function (){var statearr_39119 = state_39098;(statearr_39119[(7)] = inst_39069__$1);
return statearr_39119;
})();if(inst_39069__$1)
{var statearr_39120_39148 = state_39098__$1;(statearr_39120_39148[(1)] = (14));
} else
{var statearr_39121_39149 = state_39098__$1;(statearr_39121_39149[(1)] = (15));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (9)))
{var inst_39091 = (state_39098[(2)]);var state_39098__$1 = (function (){var statearr_39122 = state_39098;(statearr_39122[(15)] = inst_39091);
return statearr_39122;
})();var statearr_39123_39150 = state_39098__$1;(statearr_39123_39150[(2)] = null);
(statearr_39123_39150[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (5)))
{var inst_39047 = cljs.core.async.close_BANG_(out);var state_39098__$1 = state_39098;var statearr_39124_39151 = state_39098__$1;(statearr_39124_39151[(2)] = inst_39047);
(statearr_39124_39151[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (14)))
{var inst_39069 = (state_39098[(7)]);var inst_39071 = cljs.core.chunked_seq_QMARK_(inst_39069);var state_39098__$1 = state_39098;if(inst_39071)
{var statearr_39125_39152 = state_39098__$1;(statearr_39125_39152[(1)] = (17));
} else
{var statearr_39126_39153 = state_39098__$1;(statearr_39126_39153[(1)] = (18));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (16)))
{var inst_39087 = (state_39098[(2)]);var state_39098__$1 = state_39098;var statearr_39127_39154 = state_39098__$1;(statearr_39127_39154[(2)] = inst_39087);
(statearr_39127_39154[(1)] = (12));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39099 === (10)))
{var inst_39056 = (state_39098[(8)]);var inst_39058 = (state_39098[(9)]);var inst_39063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39056,inst_39058);var state_39098__$1 = state_39098;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39098__$1,(13),out,inst_39063);
} else
{if((state_val_39099 === (18)))
{var inst_39069 = (state_39098[(7)]);var inst_39078 = cljs.core.first(inst_39069);var state_39098__$1 = state_39098;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39098__$1,(20),out,inst_39078);
} else
{if((state_val_39099 === (8)))
{var inst_39058 = (state_39098[(9)]);var inst_39057 = (state_39098[(11)]);var inst_39060 = (inst_39058 < inst_39057);var inst_39061 = inst_39060;var state_39098__$1 = state_39098;if(cljs.core.truth_(inst_39061))
{var statearr_39128_39155 = state_39098__$1;(statearr_39128_39155[(1)] = (10));
} else
{var statearr_39129_39156 = state_39098__$1;(statearr_39129_39156[(1)] = (11));
}
return cljs.core.constant$keyword$767;
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
var state_machine__5679__auto____0 = (function (){var statearr_39133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39133[(0)] = state_machine__5679__auto__);
(statearr_39133[(1)] = (1));
return statearr_39133;
});
var state_machine__5679__auto____1 = (function (state_39098){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39098);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39134){if((e39134 instanceof Object))
{var ex__5682__auto__ = e39134;var statearr_39135_39157 = state_39098;(statearr_39135_39157[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39098);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e39134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__39158 = state_39098;
state_39098 = G__39158;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39098){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_39136 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_39136;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___39239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39239){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39239){
return (function (state_39218){var state_val_39219 = (state_39218[(1)]);if((state_val_39219 === (7)))
{var inst_39214 = (state_39218[(2)]);var state_39218__$1 = state_39218;var statearr_39220_39240 = state_39218__$1;(statearr_39220_39240[(2)] = inst_39214);
(statearr_39220_39240[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39219 === (1)))
{var state_39218__$1 = state_39218;var statearr_39221_39241 = state_39218__$1;(statearr_39221_39241[(2)] = null);
(statearr_39221_39241[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39219 === (4)))
{var inst_39201 = (state_39218[(7)]);var inst_39201__$1 = (state_39218[(2)]);var inst_39202 = (inst_39201__$1 == null);var state_39218__$1 = (function (){var statearr_39222 = state_39218;(statearr_39222[(7)] = inst_39201__$1);
return statearr_39222;
})();if(cljs.core.truth_(inst_39202))
{var statearr_39223_39242 = state_39218__$1;(statearr_39223_39242[(1)] = (5));
} else
{var statearr_39224_39243 = state_39218__$1;(statearr_39224_39243[(1)] = (6));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39219 === (6)))
{var inst_39201 = (state_39218[(7)]);var state_39218__$1 = state_39218;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39218__$1,(11),to,inst_39201);
} else
{if((state_val_39219 === (3)))
{var inst_39216 = (state_39218[(2)]);var state_39218__$1 = state_39218;return cljs.core.async.impl.ioc_helpers.return_chan(state_39218__$1,inst_39216);
} else
{if((state_val_39219 === (2)))
{var state_39218__$1 = state_39218;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39218__$1,(4),from);
} else
{if((state_val_39219 === (11)))
{var inst_39211 = (state_39218[(2)]);var state_39218__$1 = (function (){var statearr_39225 = state_39218;(statearr_39225[(8)] = inst_39211);
return statearr_39225;
})();var statearr_39226_39244 = state_39218__$1;(statearr_39226_39244[(2)] = null);
(statearr_39226_39244[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39219 === (9)))
{var state_39218__$1 = state_39218;var statearr_39227_39245 = state_39218__$1;(statearr_39227_39245[(2)] = null);
(statearr_39227_39245[(1)] = (10));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39219 === (5)))
{var state_39218__$1 = state_39218;if(cljs.core.truth_(close_QMARK_))
{var statearr_39228_39246 = state_39218__$1;(statearr_39228_39246[(1)] = (8));
} else
{var statearr_39229_39247 = state_39218__$1;(statearr_39229_39247[(1)] = (9));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39219 === (10)))
{var inst_39208 = (state_39218[(2)]);var state_39218__$1 = state_39218;var statearr_39230_39248 = state_39218__$1;(statearr_39230_39248[(2)] = inst_39208);
(statearr_39230_39248[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39219 === (8)))
{var inst_39205 = cljs.core.async.close_BANG_(to);var state_39218__$1 = state_39218;var statearr_39231_39249 = state_39218__$1;(statearr_39231_39249[(2)] = inst_39205);
(statearr_39231_39249[(1)] = (10));
return cljs.core.constant$keyword$767;
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
});})(c__5693__auto___39239))
;return ((function (switch__5678__auto__,c__5693__auto___39239){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39235 = [null,null,null,null,null,null,null,null,null];(statearr_39235[(0)] = state_machine__5679__auto__);
(statearr_39235[(1)] = (1));
return statearr_39235;
});
var state_machine__5679__auto____1 = (function (state_39218){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39218);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39236){if((e39236 instanceof Object))
{var ex__5682__auto__ = e39236;var statearr_39237_39250 = state_39218;(statearr_39237_39250[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39218);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e39236;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__39251 = state_39218;
state_39218 = G__39251;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39218){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39239))
})();var state__5695__auto__ = (function (){var statearr_39238 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39239);
return statearr_39238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39239))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5693__auto___39338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39338,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39338,tc,fc){
return (function (state_39316){var state_val_39317 = (state_39316[(1)]);if((state_val_39317 === (7)))
{var inst_39312 = (state_39316[(2)]);var state_39316__$1 = state_39316;var statearr_39318_39339 = state_39316__$1;(statearr_39318_39339[(2)] = inst_39312);
(statearr_39318_39339[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39317 === (1)))
{var state_39316__$1 = state_39316;var statearr_39319_39340 = state_39316__$1;(statearr_39319_39340[(2)] = null);
(statearr_39319_39340[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39317 === (4)))
{var inst_39297 = (state_39316[(7)]);var inst_39297__$1 = (state_39316[(2)]);var inst_39298 = (inst_39297__$1 == null);var state_39316__$1 = (function (){var statearr_39320 = state_39316;(statearr_39320[(7)] = inst_39297__$1);
return statearr_39320;
})();if(cljs.core.truth_(inst_39298))
{var statearr_39321_39341 = state_39316__$1;(statearr_39321_39341[(1)] = (5));
} else
{var statearr_39322_39342 = state_39316__$1;(statearr_39322_39342[(1)] = (6));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39317 === (6)))
{var inst_39297 = (state_39316[(7)]);var inst_39303 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39297) : p.call(null,inst_39297));var state_39316__$1 = state_39316;if(cljs.core.truth_(inst_39303))
{var statearr_39323_39343 = state_39316__$1;(statearr_39323_39343[(1)] = (9));
} else
{var statearr_39324_39344 = state_39316__$1;(statearr_39324_39344[(1)] = (10));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39317 === (3)))
{var inst_39314 = (state_39316[(2)]);var state_39316__$1 = state_39316;return cljs.core.async.impl.ioc_helpers.return_chan(state_39316__$1,inst_39314);
} else
{if((state_val_39317 === (2)))
{var state_39316__$1 = state_39316;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39316__$1,(4),ch);
} else
{if((state_val_39317 === (11)))
{var inst_39297 = (state_39316[(7)]);var inst_39307 = (state_39316[(2)]);var state_39316__$1 = state_39316;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39316__$1,(8),inst_39307,inst_39297);
} else
{if((state_val_39317 === (9)))
{var state_39316__$1 = state_39316;var statearr_39325_39345 = state_39316__$1;(statearr_39325_39345[(2)] = tc);
(statearr_39325_39345[(1)] = (11));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39317 === (5)))
{var inst_39300 = cljs.core.async.close_BANG_(tc);var inst_39301 = cljs.core.async.close_BANG_(fc);var state_39316__$1 = (function (){var statearr_39326 = state_39316;(statearr_39326[(8)] = inst_39300);
return statearr_39326;
})();var statearr_39327_39346 = state_39316__$1;(statearr_39327_39346[(2)] = inst_39301);
(statearr_39327_39346[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39317 === (10)))
{var state_39316__$1 = state_39316;var statearr_39328_39347 = state_39316__$1;(statearr_39328_39347[(2)] = fc);
(statearr_39328_39347[(1)] = (11));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39317 === (8)))
{var inst_39309 = (state_39316[(2)]);var state_39316__$1 = (function (){var statearr_39329 = state_39316;(statearr_39329[(9)] = inst_39309);
return statearr_39329;
})();var statearr_39330_39348 = state_39316__$1;(statearr_39330_39348[(2)] = null);
(statearr_39330_39348[(1)] = (2));
return cljs.core.constant$keyword$767;
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
});})(c__5693__auto___39338,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___39338,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39334 = [null,null,null,null,null,null,null,null,null,null];(statearr_39334[(0)] = state_machine__5679__auto__);
(statearr_39334[(1)] = (1));
return statearr_39334;
});
var state_machine__5679__auto____1 = (function (state_39316){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39316);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39335){if((e39335 instanceof Object))
{var ex__5682__auto__ = e39335;var statearr_39336_39349 = state_39316;(statearr_39336_39349[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39316);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e39335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__39350 = state_39316;
state_39316 = G__39350;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39316){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39338,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_39337 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39338);
return statearr_39337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39338,tc,fc))
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
return (function (state_39397){var state_val_39398 = (state_39397[(1)]);if((state_val_39398 === (7)))
{var inst_39393 = (state_39397[(2)]);var state_39397__$1 = state_39397;var statearr_39399_39415 = state_39397__$1;(statearr_39399_39415[(2)] = inst_39393);
(statearr_39399_39415[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39398 === (6)))
{var inst_39383 = (state_39397[(7)]);var inst_39386 = (state_39397[(8)]);var inst_39390 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39383,inst_39386) : f.call(null,inst_39383,inst_39386));var inst_39383__$1 = inst_39390;var state_39397__$1 = (function (){var statearr_39400 = state_39397;(statearr_39400[(7)] = inst_39383__$1);
return statearr_39400;
})();var statearr_39401_39416 = state_39397__$1;(statearr_39401_39416[(2)] = null);
(statearr_39401_39416[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39398 === (5)))
{var inst_39383 = (state_39397[(7)]);var state_39397__$1 = state_39397;var statearr_39402_39417 = state_39397__$1;(statearr_39402_39417[(2)] = inst_39383);
(statearr_39402_39417[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39398 === (4)))
{var inst_39386 = (state_39397[(8)]);var inst_39386__$1 = (state_39397[(2)]);var inst_39387 = (inst_39386__$1 == null);var state_39397__$1 = (function (){var statearr_39403 = state_39397;(statearr_39403[(8)] = inst_39386__$1);
return statearr_39403;
})();if(cljs.core.truth_(inst_39387))
{var statearr_39404_39418 = state_39397__$1;(statearr_39404_39418[(1)] = (5));
} else
{var statearr_39405_39419 = state_39397__$1;(statearr_39405_39419[(1)] = (6));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39398 === (3)))
{var inst_39395 = (state_39397[(2)]);var state_39397__$1 = state_39397;return cljs.core.async.impl.ioc_helpers.return_chan(state_39397__$1,inst_39395);
} else
{if((state_val_39398 === (2)))
{var state_39397__$1 = state_39397;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39397__$1,(4),ch);
} else
{if((state_val_39398 === (1)))
{var inst_39383 = init;var state_39397__$1 = (function (){var statearr_39406 = state_39397;(statearr_39406[(7)] = inst_39383);
return statearr_39406;
})();var statearr_39407_39420 = state_39397__$1;(statearr_39407_39420[(2)] = null);
(statearr_39407_39420[(1)] = (2));
return cljs.core.constant$keyword$767;
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
var state_machine__5679__auto____0 = (function (){var statearr_39411 = [null,null,null,null,null,null,null,null,null];(statearr_39411[(0)] = state_machine__5679__auto__);
(statearr_39411[(1)] = (1));
return statearr_39411;
});
var state_machine__5679__auto____1 = (function (state_39397){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39397);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39412){if((e39412 instanceof Object))
{var ex__5682__auto__ = e39412;var statearr_39413_39421 = state_39397;(statearr_39413_39421[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39397);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e39412;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__39422 = state_39397;
state_39397 = G__39422;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39397){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_39414 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_39414;
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
return (function (state_39484){var state_val_39485 = (state_39484[(1)]);if((state_val_39485 === (7)))
{var inst_39465 = (state_39484[(7)]);var inst_39470 = (state_39484[(2)]);var inst_39471 = cljs.core.next(inst_39465);var inst_39465__$1 = inst_39471;var state_39484__$1 = (function (){var statearr_39486 = state_39484;(statearr_39486[(7)] = inst_39465__$1);
(statearr_39486[(8)] = inst_39470);
return statearr_39486;
})();var statearr_39487_39505 = state_39484__$1;(statearr_39487_39505[(2)] = null);
(statearr_39487_39505[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39485 === (1)))
{var inst_39464 = cljs.core.seq(coll);var inst_39465 = inst_39464;var state_39484__$1 = (function (){var statearr_39488 = state_39484;(statearr_39488[(7)] = inst_39465);
return statearr_39488;
})();var statearr_39489_39506 = state_39484__$1;(statearr_39489_39506[(2)] = null);
(statearr_39489_39506[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39485 === (4)))
{var inst_39465 = (state_39484[(7)]);var inst_39468 = cljs.core.first(inst_39465);var state_39484__$1 = state_39484;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39484__$1,(7),ch,inst_39468);
} else
{if((state_val_39485 === (6)))
{var inst_39480 = (state_39484[(2)]);var state_39484__$1 = state_39484;var statearr_39490_39507 = state_39484__$1;(statearr_39490_39507[(2)] = inst_39480);
(statearr_39490_39507[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39485 === (3)))
{var inst_39482 = (state_39484[(2)]);var state_39484__$1 = state_39484;return cljs.core.async.impl.ioc_helpers.return_chan(state_39484__$1,inst_39482);
} else
{if((state_val_39485 === (2)))
{var inst_39465 = (state_39484[(7)]);var state_39484__$1 = state_39484;if(cljs.core.truth_(inst_39465))
{var statearr_39491_39508 = state_39484__$1;(statearr_39491_39508[(1)] = (4));
} else
{var statearr_39492_39509 = state_39484__$1;(statearr_39492_39509[(1)] = (5));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39485 === (9)))
{var state_39484__$1 = state_39484;var statearr_39493_39510 = state_39484__$1;(statearr_39493_39510[(2)] = null);
(statearr_39493_39510[(1)] = (10));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39485 === (5)))
{var state_39484__$1 = state_39484;if(cljs.core.truth_(close_QMARK_))
{var statearr_39494_39511 = state_39484__$1;(statearr_39494_39511[(1)] = (8));
} else
{var statearr_39495_39512 = state_39484__$1;(statearr_39495_39512[(1)] = (9));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39485 === (10)))
{var inst_39478 = (state_39484[(2)]);var state_39484__$1 = state_39484;var statearr_39496_39513 = state_39484__$1;(statearr_39496_39513[(2)] = inst_39478);
(statearr_39496_39513[(1)] = (6));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39485 === (8)))
{var inst_39475 = cljs.core.async.close_BANG_(ch);var state_39484__$1 = state_39484;var statearr_39497_39514 = state_39484__$1;(statearr_39497_39514[(2)] = inst_39475);
(statearr_39497_39514[(1)] = (10));
return cljs.core.constant$keyword$767;
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
var state_machine__5679__auto____0 = (function (){var statearr_39501 = [null,null,null,null,null,null,null,null,null];(statearr_39501[(0)] = state_machine__5679__auto__);
(statearr_39501[(1)] = (1));
return statearr_39501;
});
var state_machine__5679__auto____1 = (function (state_39484){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39484);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39502){if((e39502 instanceof Object))
{var ex__5682__auto__ = e39502;var statearr_39503_39515 = state_39484;(statearr_39503_39515[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39484);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e39502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__39516 = state_39484;
state_39484 = G__39516;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39484){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_39504 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_39504;
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
cljs.core.async.Mux = (function (){var obj39518 = {};return obj39518;
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
cljs.core.async.Mult = (function (){var obj39520 = {};return obj39520;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t39744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39744 = (function (cs,ch,mult,meta39745){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta39745 = meta39745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39744.cljs$lang$type = true;
cljs.core.async.t39744.cljs$lang$ctorStr = "cljs.core.async/t39744";
cljs.core.async.t39744.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39744");
});})(cs))
;
cljs.core.async.t39744.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t39744.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t39744.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t39744.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t39744.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t39744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39746){var self__ = this;
var _39746__$1 = this;return self__.meta39745;
});})(cs))
;
cljs.core.async.t39744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39746,meta39745__$1){var self__ = this;
var _39746__$1 = this;return (new cljs.core.async.t39744(self__.cs,self__.ch,self__.mult,meta39745__$1));
});})(cs))
;
cljs.core.async.__GT_t39744 = ((function (cs){
return (function __GT_t39744(cs__$1,ch__$1,mult__$1,meta39745){return (new cljs.core.async.t39744(cs__$1,ch__$1,mult__$1,meta39745));
});})(cs))
;
}
return (new cljs.core.async.t39744(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___39967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39967,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39967,cs,m,dchan,dctr,done){
return (function (state_39881){var state_val_39882 = (state_39881[(1)]);if((state_val_39882 === (7)))
{var inst_39877 = (state_39881[(2)]);var state_39881__$1 = state_39881;var statearr_39883_39968 = state_39881__$1;(statearr_39883_39968[(2)] = inst_39877);
(statearr_39883_39968[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (20)))
{var inst_39778 = (state_39881[(7)]);var inst_39788 = cljs.core.first(inst_39778);var inst_39789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39788,(0),null);var inst_39790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39788,(1),null);var state_39881__$1 = (function (){var statearr_39884 = state_39881;(statearr_39884[(8)] = inst_39789);
return statearr_39884;
})();if(cljs.core.truth_(inst_39790))
{var statearr_39885_39969 = state_39881__$1;(statearr_39885_39969[(1)] = (22));
} else
{var statearr_39886_39970 = state_39881__$1;(statearr_39886_39970[(1)] = (23));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (27)))
{var inst_39820 = (state_39881[(9)]);var inst_39818 = (state_39881[(10)]);var inst_39825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39818,inst_39820);var state_39881__$1 = (function (){var statearr_39887 = state_39881;(statearr_39887[(11)] = inst_39825);
return statearr_39887;
})();var statearr_39888_39971 = state_39881__$1;(statearr_39888_39971[(2)] = null);
(statearr_39888_39971[(1)] = (32));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (1)))
{var state_39881__$1 = state_39881;var statearr_39889_39972 = state_39881__$1;(statearr_39889_39972[(2)] = null);
(statearr_39889_39972[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (24)))
{var inst_39778 = (state_39881[(7)]);var inst_39795 = (state_39881[(2)]);var inst_39796 = cljs.core.next(inst_39778);var inst_39758 = inst_39796;var inst_39759 = null;var inst_39760 = (0);var inst_39761 = (0);var state_39881__$1 = (function (){var statearr_39890 = state_39881;(statearr_39890[(12)] = inst_39761);
(statearr_39890[(13)] = inst_39760);
(statearr_39890[(14)] = inst_39795);
(statearr_39890[(15)] = inst_39759);
(statearr_39890[(16)] = inst_39758);
return statearr_39890;
})();var statearr_39891_39973 = state_39881__$1;(statearr_39891_39973[(2)] = null);
(statearr_39891_39973[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (39)))
{var inst_39838 = (state_39881[(17)]);var inst_39856 = (state_39881[(2)]);var inst_39857 = cljs.core.next(inst_39838);var inst_39817 = inst_39857;var inst_39818 = null;var inst_39819 = (0);var inst_39820 = (0);var state_39881__$1 = (function (){var statearr_39895 = state_39881;(statearr_39895[(18)] = inst_39819);
(statearr_39895[(9)] = inst_39820);
(statearr_39895[(10)] = inst_39818);
(statearr_39895[(19)] = inst_39856);
(statearr_39895[(20)] = inst_39817);
return statearr_39895;
})();var statearr_39896_39974 = state_39881__$1;(statearr_39896_39974[(2)] = null);
(statearr_39896_39974[(1)] = (25));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (4)))
{var inst_39749 = (state_39881[(21)]);var inst_39749__$1 = (state_39881[(2)]);var inst_39750 = (inst_39749__$1 == null);var state_39881__$1 = (function (){var statearr_39897 = state_39881;(statearr_39897[(21)] = inst_39749__$1);
return statearr_39897;
})();if(cljs.core.truth_(inst_39750))
{var statearr_39898_39975 = state_39881__$1;(statearr_39898_39975[(1)] = (5));
} else
{var statearr_39899_39976 = state_39881__$1;(statearr_39899_39976[(1)] = (6));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (15)))
{var inst_39761 = (state_39881[(12)]);var inst_39760 = (state_39881[(13)]);var inst_39759 = (state_39881[(15)]);var inst_39758 = (state_39881[(16)]);var inst_39774 = (state_39881[(2)]);var inst_39775 = (inst_39761 + (1));var tmp39892 = inst_39760;var tmp39893 = inst_39759;var tmp39894 = inst_39758;var inst_39758__$1 = tmp39894;var inst_39759__$1 = tmp39893;var inst_39760__$1 = tmp39892;var inst_39761__$1 = inst_39775;var state_39881__$1 = (function (){var statearr_39900 = state_39881;(statearr_39900[(22)] = inst_39774);
(statearr_39900[(12)] = inst_39761__$1);
(statearr_39900[(13)] = inst_39760__$1);
(statearr_39900[(15)] = inst_39759__$1);
(statearr_39900[(16)] = inst_39758__$1);
return statearr_39900;
})();var statearr_39901_39977 = state_39881__$1;(statearr_39901_39977[(2)] = null);
(statearr_39901_39977[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (21)))
{var inst_39799 = (state_39881[(2)]);var state_39881__$1 = state_39881;var statearr_39902_39978 = state_39881__$1;(statearr_39902_39978[(2)] = inst_39799);
(statearr_39902_39978[(1)] = (18));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (31)))
{var inst_39825 = (state_39881[(11)]);var inst_39826 = (state_39881[(2)]);var inst_39827 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_39828 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39825);var state_39881__$1 = (function (){var statearr_39903 = state_39881;(statearr_39903[(23)] = inst_39826);
(statearr_39903[(24)] = inst_39827);
return statearr_39903;
})();var statearr_39904_39979 = state_39881__$1;(statearr_39904_39979[(2)] = inst_39828);
cljs.core.async.impl.ioc_helpers.process_exception(state_39881__$1);
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (32)))
{var inst_39749 = (state_39881[(21)]);var inst_39825 = (state_39881[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39881,(31),Object,null,(30));var inst_39832 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39825,inst_39749,done);var state_39881__$1 = state_39881;var statearr_39905_39980 = state_39881__$1;(statearr_39905_39980[(2)] = inst_39832);
cljs.core.async.impl.ioc_helpers.process_exception(state_39881__$1);
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (40)))
{var inst_39847 = (state_39881[(25)]);var inst_39848 = (state_39881[(2)]);var inst_39849 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_39850 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39847);var state_39881__$1 = (function (){var statearr_39906 = state_39881;(statearr_39906[(26)] = inst_39849);
(statearr_39906[(27)] = inst_39848);
return statearr_39906;
})();var statearr_39907_39981 = state_39881__$1;(statearr_39907_39981[(2)] = inst_39850);
cljs.core.async.impl.ioc_helpers.process_exception(state_39881__$1);
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (33)))
{var inst_39838 = (state_39881[(17)]);var inst_39840 = cljs.core.chunked_seq_QMARK_(inst_39838);var state_39881__$1 = state_39881;if(inst_39840)
{var statearr_39908_39982 = state_39881__$1;(statearr_39908_39982[(1)] = (36));
} else
{var statearr_39909_39983 = state_39881__$1;(statearr_39909_39983[(1)] = (37));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (13)))
{var inst_39768 = (state_39881[(28)]);var inst_39771 = cljs.core.async.close_BANG_(inst_39768);var state_39881__$1 = state_39881;var statearr_39910_39984 = state_39881__$1;(statearr_39910_39984[(2)] = inst_39771);
(statearr_39910_39984[(1)] = (15));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (22)))
{var inst_39789 = (state_39881[(8)]);var inst_39792 = cljs.core.async.close_BANG_(inst_39789);var state_39881__$1 = state_39881;var statearr_39911_39985 = state_39881__$1;(statearr_39911_39985[(2)] = inst_39792);
(statearr_39911_39985[(1)] = (24));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (36)))
{var inst_39838 = (state_39881[(17)]);var inst_39842 = cljs.core.chunk_first(inst_39838);var inst_39843 = cljs.core.chunk_rest(inst_39838);var inst_39844 = cljs.core.count(inst_39842);var inst_39817 = inst_39843;var inst_39818 = inst_39842;var inst_39819 = inst_39844;var inst_39820 = (0);var state_39881__$1 = (function (){var statearr_39912 = state_39881;(statearr_39912[(18)] = inst_39819);
(statearr_39912[(9)] = inst_39820);
(statearr_39912[(10)] = inst_39818);
(statearr_39912[(20)] = inst_39817);
return statearr_39912;
})();var statearr_39913_39986 = state_39881__$1;(statearr_39913_39986[(2)] = null);
(statearr_39913_39986[(1)] = (25));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (41)))
{var inst_39847 = (state_39881[(25)]);var inst_39749 = (state_39881[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39881,(40),Object,null,(39));var inst_39854 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39847,inst_39749,done);var state_39881__$1 = state_39881;var statearr_39914_39987 = state_39881__$1;(statearr_39914_39987[(2)] = inst_39854);
cljs.core.async.impl.ioc_helpers.process_exception(state_39881__$1);
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (43)))
{var state_39881__$1 = state_39881;var statearr_39915_39988 = state_39881__$1;(statearr_39915_39988[(2)] = null);
(statearr_39915_39988[(1)] = (44));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (29)))
{var inst_39865 = (state_39881[(2)]);var state_39881__$1 = state_39881;var statearr_39916_39989 = state_39881__$1;(statearr_39916_39989[(2)] = inst_39865);
(statearr_39916_39989[(1)] = (26));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (44)))
{var inst_39874 = (state_39881[(2)]);var state_39881__$1 = (function (){var statearr_39917 = state_39881;(statearr_39917[(29)] = inst_39874);
return statearr_39917;
})();var statearr_39918_39990 = state_39881__$1;(statearr_39918_39990[(2)] = null);
(statearr_39918_39990[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (6)))
{var inst_39809 = (state_39881[(30)]);var inst_39808 = cljs.core.deref(cs);var inst_39809__$1 = cljs.core.keys(inst_39808);var inst_39810 = cljs.core.count(inst_39809__$1);var inst_39811 = cljs.core.reset_BANG_(dctr,inst_39810);var inst_39816 = cljs.core.seq(inst_39809__$1);var inst_39817 = inst_39816;var inst_39818 = null;var inst_39819 = (0);var inst_39820 = (0);var state_39881__$1 = (function (){var statearr_39919 = state_39881;(statearr_39919[(18)] = inst_39819);
(statearr_39919[(30)] = inst_39809__$1);
(statearr_39919[(9)] = inst_39820);
(statearr_39919[(31)] = inst_39811);
(statearr_39919[(10)] = inst_39818);
(statearr_39919[(20)] = inst_39817);
return statearr_39919;
})();var statearr_39920_39991 = state_39881__$1;(statearr_39920_39991[(2)] = null);
(statearr_39920_39991[(1)] = (25));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (28)))
{var inst_39838 = (state_39881[(17)]);var inst_39817 = (state_39881[(20)]);var inst_39838__$1 = cljs.core.seq(inst_39817);var state_39881__$1 = (function (){var statearr_39921 = state_39881;(statearr_39921[(17)] = inst_39838__$1);
return statearr_39921;
})();if(inst_39838__$1)
{var statearr_39922_39992 = state_39881__$1;(statearr_39922_39992[(1)] = (33));
} else
{var statearr_39923_39993 = state_39881__$1;(statearr_39923_39993[(1)] = (34));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (25)))
{var inst_39819 = (state_39881[(18)]);var inst_39820 = (state_39881[(9)]);var inst_39822 = (inst_39820 < inst_39819);var inst_39823 = inst_39822;var state_39881__$1 = state_39881;if(cljs.core.truth_(inst_39823))
{var statearr_39924_39994 = state_39881__$1;(statearr_39924_39994[(1)] = (27));
} else
{var statearr_39925_39995 = state_39881__$1;(statearr_39925_39995[(1)] = (28));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (34)))
{var state_39881__$1 = state_39881;var statearr_39926_39996 = state_39881__$1;(statearr_39926_39996[(2)] = null);
(statearr_39926_39996[(1)] = (35));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (17)))
{var state_39881__$1 = state_39881;var statearr_39927_39997 = state_39881__$1;(statearr_39927_39997[(2)] = null);
(statearr_39927_39997[(1)] = (18));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (3)))
{var inst_39879 = (state_39881[(2)]);var state_39881__$1 = state_39881;return cljs.core.async.impl.ioc_helpers.return_chan(state_39881__$1,inst_39879);
} else
{if((state_val_39882 === (12)))
{var inst_39804 = (state_39881[(2)]);var state_39881__$1 = state_39881;var statearr_39928_39998 = state_39881__$1;(statearr_39928_39998[(2)] = inst_39804);
(statearr_39928_39998[(1)] = (9));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (2)))
{var state_39881__$1 = state_39881;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39881__$1,(4),ch);
} else
{if((state_val_39882 === (23)))
{var state_39881__$1 = state_39881;var statearr_39929_39999 = state_39881__$1;(statearr_39929_39999[(2)] = null);
(statearr_39929_39999[(1)] = (24));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (35)))
{var inst_39863 = (state_39881[(2)]);var state_39881__$1 = state_39881;var statearr_39930_40000 = state_39881__$1;(statearr_39930_40000[(2)] = inst_39863);
(statearr_39930_40000[(1)] = (29));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (19)))
{var inst_39778 = (state_39881[(7)]);var inst_39782 = cljs.core.chunk_first(inst_39778);var inst_39783 = cljs.core.chunk_rest(inst_39778);var inst_39784 = cljs.core.count(inst_39782);var inst_39758 = inst_39783;var inst_39759 = inst_39782;var inst_39760 = inst_39784;var inst_39761 = (0);var state_39881__$1 = (function (){var statearr_39931 = state_39881;(statearr_39931[(12)] = inst_39761);
(statearr_39931[(13)] = inst_39760);
(statearr_39931[(15)] = inst_39759);
(statearr_39931[(16)] = inst_39758);
return statearr_39931;
})();var statearr_39932_40001 = state_39881__$1;(statearr_39932_40001[(2)] = null);
(statearr_39932_40001[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (11)))
{var inst_39778 = (state_39881[(7)]);var inst_39758 = (state_39881[(16)]);var inst_39778__$1 = cljs.core.seq(inst_39758);var state_39881__$1 = (function (){var statearr_39933 = state_39881;(statearr_39933[(7)] = inst_39778__$1);
return statearr_39933;
})();if(inst_39778__$1)
{var statearr_39934_40002 = state_39881__$1;(statearr_39934_40002[(1)] = (16));
} else
{var statearr_39935_40003 = state_39881__$1;(statearr_39935_40003[(1)] = (17));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (9)))
{var inst_39806 = (state_39881[(2)]);var state_39881__$1 = state_39881;var statearr_39936_40004 = state_39881__$1;(statearr_39936_40004[(2)] = inst_39806);
(statearr_39936_40004[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (5)))
{var inst_39756 = cljs.core.deref(cs);var inst_39757 = cljs.core.seq(inst_39756);var inst_39758 = inst_39757;var inst_39759 = null;var inst_39760 = (0);var inst_39761 = (0);var state_39881__$1 = (function (){var statearr_39937 = state_39881;(statearr_39937[(12)] = inst_39761);
(statearr_39937[(13)] = inst_39760);
(statearr_39937[(15)] = inst_39759);
(statearr_39937[(16)] = inst_39758);
return statearr_39937;
})();var statearr_39938_40005 = state_39881__$1;(statearr_39938_40005[(2)] = null);
(statearr_39938_40005[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (14)))
{var state_39881__$1 = state_39881;var statearr_39939_40006 = state_39881__$1;(statearr_39939_40006[(2)] = null);
(statearr_39939_40006[(1)] = (15));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (45)))
{var inst_39871 = (state_39881[(2)]);var state_39881__$1 = state_39881;var statearr_39940_40007 = state_39881__$1;(statearr_39940_40007[(2)] = inst_39871);
(statearr_39940_40007[(1)] = (44));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (26)))
{var inst_39809 = (state_39881[(30)]);var inst_39867 = (state_39881[(2)]);var inst_39868 = cljs.core.seq(inst_39809);var state_39881__$1 = (function (){var statearr_39941 = state_39881;(statearr_39941[(32)] = inst_39867);
return statearr_39941;
})();if(inst_39868)
{var statearr_39942_40008 = state_39881__$1;(statearr_39942_40008[(1)] = (42));
} else
{var statearr_39943_40009 = state_39881__$1;(statearr_39943_40009[(1)] = (43));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (16)))
{var inst_39778 = (state_39881[(7)]);var inst_39780 = cljs.core.chunked_seq_QMARK_(inst_39778);var state_39881__$1 = state_39881;if(inst_39780)
{var statearr_39947_40010 = state_39881__$1;(statearr_39947_40010[(1)] = (19));
} else
{var statearr_39948_40011 = state_39881__$1;(statearr_39948_40011[(1)] = (20));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (38)))
{var inst_39860 = (state_39881[(2)]);var state_39881__$1 = state_39881;var statearr_39949_40012 = state_39881__$1;(statearr_39949_40012[(2)] = inst_39860);
(statearr_39949_40012[(1)] = (35));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (30)))
{var inst_39819 = (state_39881[(18)]);var inst_39820 = (state_39881[(9)]);var inst_39818 = (state_39881[(10)]);var inst_39817 = (state_39881[(20)]);var inst_39834 = (state_39881[(2)]);var inst_39835 = (inst_39820 + (1));var tmp39944 = inst_39819;var tmp39945 = inst_39818;var tmp39946 = inst_39817;var inst_39817__$1 = tmp39946;var inst_39818__$1 = tmp39945;var inst_39819__$1 = tmp39944;var inst_39820__$1 = inst_39835;var state_39881__$1 = (function (){var statearr_39950 = state_39881;(statearr_39950[(18)] = inst_39819__$1);
(statearr_39950[(9)] = inst_39820__$1);
(statearr_39950[(10)] = inst_39818__$1);
(statearr_39950[(33)] = inst_39834);
(statearr_39950[(20)] = inst_39817__$1);
return statearr_39950;
})();var statearr_39951_40013 = state_39881__$1;(statearr_39951_40013[(2)] = null);
(statearr_39951_40013[(1)] = (25));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (10)))
{var inst_39761 = (state_39881[(12)]);var inst_39759 = (state_39881[(15)]);var inst_39767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39759,inst_39761);var inst_39768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39767,(0),null);var inst_39769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39767,(1),null);var state_39881__$1 = (function (){var statearr_39952 = state_39881;(statearr_39952[(28)] = inst_39768);
return statearr_39952;
})();if(cljs.core.truth_(inst_39769))
{var statearr_39953_40014 = state_39881__$1;(statearr_39953_40014[(1)] = (13));
} else
{var statearr_39954_40015 = state_39881__$1;(statearr_39954_40015[(1)] = (14));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (18)))
{var inst_39802 = (state_39881[(2)]);var state_39881__$1 = state_39881;var statearr_39955_40016 = state_39881__$1;(statearr_39955_40016[(2)] = inst_39802);
(statearr_39955_40016[(1)] = (12));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (42)))
{var state_39881__$1 = state_39881;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39881__$1,(45),dchan);
} else
{if((state_val_39882 === (37)))
{var inst_39838 = (state_39881[(17)]);var inst_39847 = cljs.core.first(inst_39838);var state_39881__$1 = (function (){var statearr_39956 = state_39881;(statearr_39956[(25)] = inst_39847);
return statearr_39956;
})();var statearr_39957_40017 = state_39881__$1;(statearr_39957_40017[(2)] = null);
(statearr_39957_40017[(1)] = (41));
return cljs.core.constant$keyword$767;
} else
{if((state_val_39882 === (8)))
{var inst_39761 = (state_39881[(12)]);var inst_39760 = (state_39881[(13)]);var inst_39763 = (inst_39761 < inst_39760);var inst_39764 = inst_39763;var state_39881__$1 = state_39881;if(cljs.core.truth_(inst_39764))
{var statearr_39958_40018 = state_39881__$1;(statearr_39958_40018[(1)] = (10));
} else
{var statearr_39959_40019 = state_39881__$1;(statearr_39959_40019[(1)] = (11));
}
return cljs.core.constant$keyword$767;
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
});})(c__5693__auto___39967,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___39967,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39963[(0)] = state_machine__5679__auto__);
(statearr_39963[(1)] = (1));
return statearr_39963;
});
var state_machine__5679__auto____1 = (function (state_39881){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39881);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39964){if((e39964 instanceof Object))
{var ex__5682__auto__ = e39964;var statearr_39965_40020 = state_39881;(statearr_39965_40020[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39881);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e39964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__40021 = state_39881;
state_39881 = G__40021;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39881){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39967,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_39966 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39967);
return statearr_39966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39967,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj40023 = {};return obj40023;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$774,null,cljs.core.constant$keyword$775,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$776);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$775);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$776,chs);var pauses = pick(cljs.core.constant$keyword$774,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$777,solos,cljs.core.constant$keyword$778,pick(cljs.core.constant$keyword$775,chs),cljs.core.constant$keyword$779,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$774)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t40133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40133 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40134){
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
this.meta40134 = meta40134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40133.cljs$lang$type = true;
cljs.core.async.t40133.cljs$lang$ctorStr = "cljs.core.async/t40133";
cljs.core.async.t40133.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40133");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40133.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t40133.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40133.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40133.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40133.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40133.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40133.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t40133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40135){var self__ = this;
var _40135__$1 = this;return self__.meta40134;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t40133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40135,meta40134__$1){var self__ = this;
var _40135__$1 = this;return (new cljs.core.async.t40133(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40134__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t40133 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t40133(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40134){return (new cljs.core.async.t40133(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40134));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t40133(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___40242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40200){var state_val_40201 = (state_40200[(1)]);if((state_val_40201 === (7)))
{var inst_40149 = (state_40200[(7)]);var inst_40154 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40149);var state_40200__$1 = state_40200;var statearr_40202_40243 = state_40200__$1;(statearr_40202_40243[(2)] = inst_40154);
(statearr_40202_40243[(1)] = (9));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (20)))
{var inst_40164 = (state_40200[(8)]);var state_40200__$1 = state_40200;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40200__$1,(23),out,inst_40164);
} else
{if((state_val_40201 === (1)))
{var inst_40139 = (state_40200[(9)]);var inst_40139__$1 = calc_state();var inst_40140 = cljs.core.seq_QMARK_(inst_40139__$1);var state_40200__$1 = (function (){var statearr_40203 = state_40200;(statearr_40203[(9)] = inst_40139__$1);
return statearr_40203;
})();if(inst_40140)
{var statearr_40204_40244 = state_40200__$1;(statearr_40204_40244[(1)] = (2));
} else
{var statearr_40205_40245 = state_40200__$1;(statearr_40205_40245[(1)] = (3));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (4)))
{var inst_40139 = (state_40200[(9)]);var inst_40145 = (state_40200[(2)]);var inst_40146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40145,cljs.core.constant$keyword$779);var inst_40147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40145,cljs.core.constant$keyword$778);var inst_40148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40145,cljs.core.constant$keyword$777);var inst_40149 = inst_40139;var state_40200__$1 = (function (){var statearr_40206 = state_40200;(statearr_40206[(7)] = inst_40149);
(statearr_40206[(10)] = inst_40147);
(statearr_40206[(11)] = inst_40148);
(statearr_40206[(12)] = inst_40146);
return statearr_40206;
})();var statearr_40207_40246 = state_40200__$1;(statearr_40207_40246[(2)] = null);
(statearr_40207_40246[(1)] = (5));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (15)))
{var state_40200__$1 = state_40200;var statearr_40208_40247 = state_40200__$1;(statearr_40208_40247[(2)] = null);
(statearr_40208_40247[(1)] = (16));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (21)))
{var state_40200__$1 = state_40200;var statearr_40209_40248 = state_40200__$1;(statearr_40209_40248[(2)] = null);
(statearr_40209_40248[(1)] = (22));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (13)))
{var inst_40196 = (state_40200[(2)]);var state_40200__$1 = state_40200;var statearr_40210_40249 = state_40200__$1;(statearr_40210_40249[(2)] = inst_40196);
(statearr_40210_40249[(1)] = (6));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (22)))
{var inst_40157 = (state_40200[(13)]);var inst_40193 = (state_40200[(2)]);var inst_40149 = inst_40157;var state_40200__$1 = (function (){var statearr_40211 = state_40200;(statearr_40211[(7)] = inst_40149);
(statearr_40211[(14)] = inst_40193);
return statearr_40211;
})();var statearr_40212_40250 = state_40200__$1;(statearr_40212_40250[(2)] = null);
(statearr_40212_40250[(1)] = (5));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (6)))
{var inst_40198 = (state_40200[(2)]);var state_40200__$1 = state_40200;return cljs.core.async.impl.ioc_helpers.return_chan(state_40200__$1,inst_40198);
} else
{if((state_val_40201 === (17)))
{var inst_40179 = (state_40200[(15)]);var state_40200__$1 = state_40200;var statearr_40213_40251 = state_40200__$1;(statearr_40213_40251[(2)] = inst_40179);
(statearr_40213_40251[(1)] = (19));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (3)))
{var inst_40139 = (state_40200[(9)]);var state_40200__$1 = state_40200;var statearr_40214_40252 = state_40200__$1;(statearr_40214_40252[(2)] = inst_40139);
(statearr_40214_40252[(1)] = (4));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (12)))
{var inst_40179 = (state_40200[(15)]);var inst_40160 = (state_40200[(16)]);var inst_40165 = (state_40200[(17)]);var inst_40179__$1 = (inst_40160.cljs$core$IFn$_invoke$arity$1 ? inst_40160.cljs$core$IFn$_invoke$arity$1(inst_40165) : inst_40160.call(null,inst_40165));var state_40200__$1 = (function (){var statearr_40215 = state_40200;(statearr_40215[(15)] = inst_40179__$1);
return statearr_40215;
})();if(cljs.core.truth_(inst_40179__$1))
{var statearr_40216_40253 = state_40200__$1;(statearr_40216_40253[(1)] = (17));
} else
{var statearr_40217_40254 = state_40200__$1;(statearr_40217_40254[(1)] = (18));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (2)))
{var inst_40139 = (state_40200[(9)]);var inst_40142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40139);var state_40200__$1 = state_40200;var statearr_40218_40255 = state_40200__$1;(statearr_40218_40255[(2)] = inst_40142);
(statearr_40218_40255[(1)] = (4));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (23)))
{var inst_40190 = (state_40200[(2)]);var state_40200__$1 = state_40200;var statearr_40219_40256 = state_40200__$1;(statearr_40219_40256[(2)] = inst_40190);
(statearr_40219_40256[(1)] = (22));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (19)))
{var inst_40187 = (state_40200[(2)]);var state_40200__$1 = state_40200;if(cljs.core.truth_(inst_40187))
{var statearr_40220_40257 = state_40200__$1;(statearr_40220_40257[(1)] = (20));
} else
{var statearr_40221_40258 = state_40200__$1;(statearr_40221_40258[(1)] = (21));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (11)))
{var inst_40164 = (state_40200[(8)]);var inst_40170 = (inst_40164 == null);var state_40200__$1 = state_40200;if(cljs.core.truth_(inst_40170))
{var statearr_40222_40259 = state_40200__$1;(statearr_40222_40259[(1)] = (14));
} else
{var statearr_40223_40260 = state_40200__$1;(statearr_40223_40260[(1)] = (15));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (9)))
{var inst_40157 = (state_40200[(13)]);var inst_40157__$1 = (state_40200[(2)]);var inst_40158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40157__$1,cljs.core.constant$keyword$779);var inst_40159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40157__$1,cljs.core.constant$keyword$778);var inst_40160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40157__$1,cljs.core.constant$keyword$777);var state_40200__$1 = (function (){var statearr_40224 = state_40200;(statearr_40224[(18)] = inst_40159);
(statearr_40224[(16)] = inst_40160);
(statearr_40224[(13)] = inst_40157__$1);
return statearr_40224;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_40200__$1,(10),inst_40158);
} else
{if((state_val_40201 === (5)))
{var inst_40149 = (state_40200[(7)]);var inst_40152 = cljs.core.seq_QMARK_(inst_40149);var state_40200__$1 = state_40200;if(inst_40152)
{var statearr_40225_40261 = state_40200__$1;(statearr_40225_40261[(1)] = (7));
} else
{var statearr_40226_40262 = state_40200__$1;(statearr_40226_40262[(1)] = (8));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (14)))
{var inst_40165 = (state_40200[(17)]);var inst_40172 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_40165);var state_40200__$1 = state_40200;var statearr_40227_40263 = state_40200__$1;(statearr_40227_40263[(2)] = inst_40172);
(statearr_40227_40263[(1)] = (16));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (16)))
{var inst_40175 = (state_40200[(2)]);var inst_40176 = calc_state();var inst_40149 = inst_40176;var state_40200__$1 = (function (){var statearr_40228 = state_40200;(statearr_40228[(7)] = inst_40149);
(statearr_40228[(19)] = inst_40175);
return statearr_40228;
})();var statearr_40229_40264 = state_40200__$1;(statearr_40229_40264[(2)] = null);
(statearr_40229_40264[(1)] = (5));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (10)))
{var inst_40164 = (state_40200[(8)]);var inst_40165 = (state_40200[(17)]);var inst_40163 = (state_40200[(2)]);var inst_40164__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40163,(0),null);var inst_40165__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40163,(1),null);var inst_40166 = (inst_40164__$1 == null);var inst_40167 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40165__$1,change);var inst_40168 = (inst_40166) || (inst_40167);var state_40200__$1 = (function (){var statearr_40230 = state_40200;(statearr_40230[(8)] = inst_40164__$1);
(statearr_40230[(17)] = inst_40165__$1);
return statearr_40230;
})();if(cljs.core.truth_(inst_40168))
{var statearr_40231_40265 = state_40200__$1;(statearr_40231_40265[(1)] = (11));
} else
{var statearr_40232_40266 = state_40200__$1;(statearr_40232_40266[(1)] = (12));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (18)))
{var inst_40159 = (state_40200[(18)]);var inst_40160 = (state_40200[(16)]);var inst_40165 = (state_40200[(17)]);var inst_40182 = cljs.core.empty_QMARK_(inst_40160);var inst_40183 = (inst_40159.cljs$core$IFn$_invoke$arity$1 ? inst_40159.cljs$core$IFn$_invoke$arity$1(inst_40165) : inst_40159.call(null,inst_40165));var inst_40184 = cljs.core.not(inst_40183);var inst_40185 = (inst_40182) && (inst_40184);var state_40200__$1 = state_40200;var statearr_40233_40267 = state_40200__$1;(statearr_40233_40267[(2)] = inst_40185);
(statearr_40233_40267[(1)] = (19));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40201 === (8)))
{var inst_40149 = (state_40200[(7)]);var state_40200__$1 = state_40200;var statearr_40234_40268 = state_40200__$1;(statearr_40234_40268[(2)] = inst_40149);
(statearr_40234_40268[(1)] = (9));
return cljs.core.constant$keyword$767;
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
});})(c__5693__auto___40242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___40242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40238[(0)] = state_machine__5679__auto__);
(statearr_40238[(1)] = (1));
return statearr_40238;
});
var state_machine__5679__auto____1 = (function (state_40200){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40200);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40239){if((e40239 instanceof Object))
{var ex__5682__auto__ = e40239;var statearr_40240_40269 = state_40200;(statearr_40240_40269[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40200);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e40239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__40270 = state_40200;
state_40200 = G__40270;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40200){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_40241 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40242);
return statearr_40241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj40272 = {};return obj40272;
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
return (function (p1__40273_SHARP_){if(cljs.core.truth_((p1__40273_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40273_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40273_SHARP_.call(null,topic))))
{return p1__40273_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40273_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t40398 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40398 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta40399){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta40399 = meta40399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40398.cljs$lang$type = true;
cljs.core.async.t40398.cljs$lang$ctorStr = "cljs.core.async/t40398";
cljs.core.async.t40398.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40398");
});})(mults,ensure_mult))
;
cljs.core.async.t40398.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t40398.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t40398.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t40398.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t40398.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t40398.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t40398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t40398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40400){var self__ = this;
var _40400__$1 = this;return self__.meta40399;
});})(mults,ensure_mult))
;
cljs.core.async.t40398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40400,meta40399__$1){var self__ = this;
var _40400__$1 = this;return (new cljs.core.async.t40398(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta40399__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t40398 = ((function (mults,ensure_mult){
return (function __GT_t40398(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40399){return (new cljs.core.async.t40398(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40399));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t40398(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___40522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40522,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40522,mults,ensure_mult,p){
return (function (state_40474){var state_val_40475 = (state_40474[(1)]);if((state_val_40475 === (7)))
{var inst_40470 = (state_40474[(2)]);var state_40474__$1 = state_40474;var statearr_40476_40523 = state_40474__$1;(statearr_40476_40523[(2)] = inst_40470);
(statearr_40476_40523[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (20)))
{var state_40474__$1 = state_40474;var statearr_40477_40524 = state_40474__$1;(statearr_40477_40524[(2)] = null);
(statearr_40477_40524[(1)] = (21));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (1)))
{var state_40474__$1 = state_40474;var statearr_40478_40525 = state_40474__$1;(statearr_40478_40525[(2)] = null);
(statearr_40478_40525[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (24)))
{var inst_40453 = (state_40474[(7)]);var inst_40403 = (state_40474[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40474,(23),Object,null,(22));var inst_40460 = cljs.core.async.muxch_STAR_(inst_40453);var state_40474__$1 = state_40474;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40474__$1,(25),inst_40460,inst_40403);
} else
{if((state_val_40475 === (4)))
{var inst_40403 = (state_40474[(8)]);var inst_40403__$1 = (state_40474[(2)]);var inst_40404 = (inst_40403__$1 == null);var state_40474__$1 = (function (){var statearr_40479 = state_40474;(statearr_40479[(8)] = inst_40403__$1);
return statearr_40479;
})();if(cljs.core.truth_(inst_40404))
{var statearr_40480_40526 = state_40474__$1;(statearr_40480_40526[(1)] = (5));
} else
{var statearr_40481_40527 = state_40474__$1;(statearr_40481_40527[(1)] = (6));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (15)))
{var inst_40445 = (state_40474[(2)]);var state_40474__$1 = state_40474;var statearr_40482_40528 = state_40474__$1;(statearr_40482_40528[(2)] = inst_40445);
(statearr_40482_40528[(1)] = (12));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (21)))
{var inst_40467 = (state_40474[(2)]);var state_40474__$1 = (function (){var statearr_40483 = state_40474;(statearr_40483[(9)] = inst_40467);
return statearr_40483;
})();var statearr_40484_40529 = state_40474__$1;(statearr_40484_40529[(2)] = null);
(statearr_40484_40529[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (13)))
{var inst_40427 = (state_40474[(10)]);var inst_40429 = cljs.core.chunked_seq_QMARK_(inst_40427);var state_40474__$1 = state_40474;if(inst_40429)
{var statearr_40485_40530 = state_40474__$1;(statearr_40485_40530[(1)] = (16));
} else
{var statearr_40486_40531 = state_40474__$1;(statearr_40486_40531[(1)] = (17));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (22)))
{var inst_40464 = (state_40474[(2)]);var state_40474__$1 = state_40474;var statearr_40487_40532 = state_40474__$1;(statearr_40487_40532[(2)] = inst_40464);
(statearr_40487_40532[(1)] = (21));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (6)))
{var inst_40451 = (state_40474[(11)]);var inst_40453 = (state_40474[(7)]);var inst_40403 = (state_40474[(8)]);var inst_40451__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40403) : topic_fn.call(null,inst_40403));var inst_40452 = cljs.core.deref(mults);var inst_40453__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40452,inst_40451__$1);var state_40474__$1 = (function (){var statearr_40488 = state_40474;(statearr_40488[(11)] = inst_40451__$1);
(statearr_40488[(7)] = inst_40453__$1);
return statearr_40488;
})();if(cljs.core.truth_(inst_40453__$1))
{var statearr_40489_40533 = state_40474__$1;(statearr_40489_40533[(1)] = (19));
} else
{var statearr_40490_40534 = state_40474__$1;(statearr_40490_40534[(1)] = (20));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (25)))
{var inst_40462 = (state_40474[(2)]);var state_40474__$1 = state_40474;var statearr_40491_40535 = state_40474__$1;(statearr_40491_40535[(2)] = inst_40462);
cljs.core.async.impl.ioc_helpers.process_exception(state_40474__$1);
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (17)))
{var inst_40427 = (state_40474[(10)]);var inst_40436 = cljs.core.first(inst_40427);var inst_40437 = cljs.core.async.muxch_STAR_(inst_40436);var inst_40438 = cljs.core.async.close_BANG_(inst_40437);var inst_40439 = cljs.core.next(inst_40427);var inst_40413 = inst_40439;var inst_40414 = null;var inst_40415 = (0);var inst_40416 = (0);var state_40474__$1 = (function (){var statearr_40492 = state_40474;(statearr_40492[(12)] = inst_40414);
(statearr_40492[(13)] = inst_40438);
(statearr_40492[(14)] = inst_40413);
(statearr_40492[(15)] = inst_40415);
(statearr_40492[(16)] = inst_40416);
return statearr_40492;
})();var statearr_40493_40536 = state_40474__$1;(statearr_40493_40536[(2)] = null);
(statearr_40493_40536[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (3)))
{var inst_40472 = (state_40474[(2)]);var state_40474__$1 = state_40474;return cljs.core.async.impl.ioc_helpers.return_chan(state_40474__$1,inst_40472);
} else
{if((state_val_40475 === (12)))
{var inst_40447 = (state_40474[(2)]);var state_40474__$1 = state_40474;var statearr_40494_40537 = state_40474__$1;(statearr_40494_40537[(2)] = inst_40447);
(statearr_40494_40537[(1)] = (9));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (2)))
{var state_40474__$1 = state_40474;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40474__$1,(4),ch);
} else
{if((state_val_40475 === (23)))
{var inst_40451 = (state_40474[(11)]);var inst_40455 = (state_40474[(2)]);var inst_40456 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40451);var state_40474__$1 = (function (){var statearr_40495 = state_40474;(statearr_40495[(17)] = inst_40455);
return statearr_40495;
})();var statearr_40496_40538 = state_40474__$1;(statearr_40496_40538[(2)] = inst_40456);
cljs.core.async.impl.ioc_helpers.process_exception(state_40474__$1);
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (19)))
{var state_40474__$1 = state_40474;var statearr_40497_40539 = state_40474__$1;(statearr_40497_40539[(2)] = null);
(statearr_40497_40539[(1)] = (24));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (11)))
{var inst_40427 = (state_40474[(10)]);var inst_40413 = (state_40474[(14)]);var inst_40427__$1 = cljs.core.seq(inst_40413);var state_40474__$1 = (function (){var statearr_40498 = state_40474;(statearr_40498[(10)] = inst_40427__$1);
return statearr_40498;
})();if(inst_40427__$1)
{var statearr_40499_40540 = state_40474__$1;(statearr_40499_40540[(1)] = (13));
} else
{var statearr_40500_40541 = state_40474__$1;(statearr_40500_40541[(1)] = (14));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (9)))
{var inst_40449 = (state_40474[(2)]);var state_40474__$1 = state_40474;var statearr_40501_40542 = state_40474__$1;(statearr_40501_40542[(2)] = inst_40449);
(statearr_40501_40542[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (5)))
{var inst_40410 = cljs.core.deref(mults);var inst_40411 = cljs.core.vals(inst_40410);var inst_40412 = cljs.core.seq(inst_40411);var inst_40413 = inst_40412;var inst_40414 = null;var inst_40415 = (0);var inst_40416 = (0);var state_40474__$1 = (function (){var statearr_40502 = state_40474;(statearr_40502[(12)] = inst_40414);
(statearr_40502[(14)] = inst_40413);
(statearr_40502[(15)] = inst_40415);
(statearr_40502[(16)] = inst_40416);
return statearr_40502;
})();var statearr_40503_40543 = state_40474__$1;(statearr_40503_40543[(2)] = null);
(statearr_40503_40543[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (14)))
{var state_40474__$1 = state_40474;var statearr_40507_40544 = state_40474__$1;(statearr_40507_40544[(2)] = null);
(statearr_40507_40544[(1)] = (15));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (16)))
{var inst_40427 = (state_40474[(10)]);var inst_40431 = cljs.core.chunk_first(inst_40427);var inst_40432 = cljs.core.chunk_rest(inst_40427);var inst_40433 = cljs.core.count(inst_40431);var inst_40413 = inst_40432;var inst_40414 = inst_40431;var inst_40415 = inst_40433;var inst_40416 = (0);var state_40474__$1 = (function (){var statearr_40508 = state_40474;(statearr_40508[(12)] = inst_40414);
(statearr_40508[(14)] = inst_40413);
(statearr_40508[(15)] = inst_40415);
(statearr_40508[(16)] = inst_40416);
return statearr_40508;
})();var statearr_40509_40545 = state_40474__$1;(statearr_40509_40545[(2)] = null);
(statearr_40509_40545[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (10)))
{var inst_40414 = (state_40474[(12)]);var inst_40413 = (state_40474[(14)]);var inst_40415 = (state_40474[(15)]);var inst_40416 = (state_40474[(16)]);var inst_40421 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40414,inst_40416);var inst_40422 = cljs.core.async.muxch_STAR_(inst_40421);var inst_40423 = cljs.core.async.close_BANG_(inst_40422);var inst_40424 = (inst_40416 + (1));var tmp40504 = inst_40414;var tmp40505 = inst_40413;var tmp40506 = inst_40415;var inst_40413__$1 = tmp40505;var inst_40414__$1 = tmp40504;var inst_40415__$1 = tmp40506;var inst_40416__$1 = inst_40424;var state_40474__$1 = (function (){var statearr_40510 = state_40474;(statearr_40510[(12)] = inst_40414__$1);
(statearr_40510[(18)] = inst_40423);
(statearr_40510[(14)] = inst_40413__$1);
(statearr_40510[(15)] = inst_40415__$1);
(statearr_40510[(16)] = inst_40416__$1);
return statearr_40510;
})();var statearr_40511_40546 = state_40474__$1;(statearr_40511_40546[(2)] = null);
(statearr_40511_40546[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (18)))
{var inst_40442 = (state_40474[(2)]);var state_40474__$1 = state_40474;var statearr_40512_40547 = state_40474__$1;(statearr_40512_40547[(2)] = inst_40442);
(statearr_40512_40547[(1)] = (15));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40475 === (8)))
{var inst_40415 = (state_40474[(15)]);var inst_40416 = (state_40474[(16)]);var inst_40418 = (inst_40416 < inst_40415);var inst_40419 = inst_40418;var state_40474__$1 = state_40474;if(cljs.core.truth_(inst_40419))
{var statearr_40513_40548 = state_40474__$1;(statearr_40513_40548[(1)] = (10));
} else
{var statearr_40514_40549 = state_40474__$1;(statearr_40514_40549[(1)] = (11));
}
return cljs.core.constant$keyword$767;
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
});})(c__5693__auto___40522,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___40522,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40518[(0)] = state_machine__5679__auto__);
(statearr_40518[(1)] = (1));
return statearr_40518;
});
var state_machine__5679__auto____1 = (function (state_40474){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40474);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40519){if((e40519 instanceof Object))
{var ex__5682__auto__ = e40519;var statearr_40520_40550 = state_40474;(statearr_40520_40550[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40474);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e40519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__40551 = state_40474;
state_40474 = G__40551;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40474){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40522,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_40521 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40522);
return statearr_40521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40522,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5693__auto___40688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40688,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40688,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40658){var state_val_40659 = (state_40658[(1)]);if((state_val_40659 === (7)))
{var state_40658__$1 = state_40658;var statearr_40660_40689 = state_40658__$1;(statearr_40660_40689[(2)] = null);
(statearr_40660_40689[(1)] = (8));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (1)))
{var state_40658__$1 = state_40658;var statearr_40661_40690 = state_40658__$1;(statearr_40661_40690[(2)] = null);
(statearr_40661_40690[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (4)))
{var inst_40622 = (state_40658[(7)]);var inst_40624 = (inst_40622 < cnt);var state_40658__$1 = state_40658;if(cljs.core.truth_(inst_40624))
{var statearr_40662_40691 = state_40658__$1;(statearr_40662_40691[(1)] = (6));
} else
{var statearr_40663_40692 = state_40658__$1;(statearr_40663_40692[(1)] = (7));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (15)))
{var inst_40654 = (state_40658[(2)]);var state_40658__$1 = state_40658;var statearr_40664_40693 = state_40658__$1;(statearr_40664_40693[(2)] = inst_40654);
(statearr_40664_40693[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (13)))
{var inst_40647 = cljs.core.async.close_BANG_(out);var state_40658__$1 = state_40658;var statearr_40665_40694 = state_40658__$1;(statearr_40665_40694[(2)] = inst_40647);
(statearr_40665_40694[(1)] = (15));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (6)))
{var state_40658__$1 = state_40658;var statearr_40666_40695 = state_40658__$1;(statearr_40666_40695[(2)] = null);
(statearr_40666_40695[(1)] = (11));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (3)))
{var inst_40656 = (state_40658[(2)]);var state_40658__$1 = state_40658;return cljs.core.async.impl.ioc_helpers.return_chan(state_40658__$1,inst_40656);
} else
{if((state_val_40659 === (12)))
{var inst_40644 = (state_40658[(8)]);var inst_40644__$1 = (state_40658[(2)]);var inst_40645 = cljs.core.some(cljs.core.nil_QMARK_,inst_40644__$1);var state_40658__$1 = (function (){var statearr_40667 = state_40658;(statearr_40667[(8)] = inst_40644__$1);
return statearr_40667;
})();if(cljs.core.truth_(inst_40645))
{var statearr_40668_40696 = state_40658__$1;(statearr_40668_40696[(1)] = (13));
} else
{var statearr_40669_40697 = state_40658__$1;(statearr_40669_40697[(1)] = (14));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (2)))
{var inst_40621 = cljs.core.reset_BANG_(dctr,cnt);var inst_40622 = (0);var state_40658__$1 = (function (){var statearr_40670 = state_40658;(statearr_40670[(7)] = inst_40622);
(statearr_40670[(9)] = inst_40621);
return statearr_40670;
})();var statearr_40671_40698 = state_40658__$1;(statearr_40671_40698[(2)] = null);
(statearr_40671_40698[(1)] = (4));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (11)))
{var inst_40622 = (state_40658[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40658,(10),Object,null,(9));var inst_40631 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40622) : chs__$1.call(null,inst_40622));var inst_40632 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40622) : done.call(null,inst_40622));var inst_40633 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40631,inst_40632);var state_40658__$1 = state_40658;var statearr_40672_40699 = state_40658__$1;(statearr_40672_40699[(2)] = inst_40633);
cljs.core.async.impl.ioc_helpers.process_exception(state_40658__$1);
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (9)))
{var inst_40622 = (state_40658[(7)]);var inst_40635 = (state_40658[(2)]);var inst_40636 = (inst_40622 + (1));var inst_40622__$1 = inst_40636;var state_40658__$1 = (function (){var statearr_40673 = state_40658;(statearr_40673[(7)] = inst_40622__$1);
(statearr_40673[(10)] = inst_40635);
return statearr_40673;
})();var statearr_40674_40700 = state_40658__$1;(statearr_40674_40700[(2)] = null);
(statearr_40674_40700[(1)] = (4));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (5)))
{var inst_40642 = (state_40658[(2)]);var state_40658__$1 = (function (){var statearr_40675 = state_40658;(statearr_40675[(11)] = inst_40642);
return statearr_40675;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40658__$1,(12),dchan);
} else
{if((state_val_40659 === (14)))
{var inst_40644 = (state_40658[(8)]);var inst_40649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40644);var state_40658__$1 = state_40658;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40658__$1,(16),out,inst_40649);
} else
{if((state_val_40659 === (16)))
{var inst_40651 = (state_40658[(2)]);var state_40658__$1 = (function (){var statearr_40676 = state_40658;(statearr_40676[(12)] = inst_40651);
return statearr_40676;
})();var statearr_40677_40701 = state_40658__$1;(statearr_40677_40701[(2)] = null);
(statearr_40677_40701[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (10)))
{var inst_40626 = (state_40658[(2)]);var inst_40627 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_40658__$1 = (function (){var statearr_40678 = state_40658;(statearr_40678[(13)] = inst_40626);
return statearr_40678;
})();var statearr_40679_40702 = state_40658__$1;(statearr_40679_40702[(2)] = inst_40627);
cljs.core.async.impl.ioc_helpers.process_exception(state_40658__$1);
return cljs.core.constant$keyword$767;
} else
{if((state_val_40659 === (8)))
{var inst_40640 = (state_40658[(2)]);var state_40658__$1 = state_40658;var statearr_40680_40703 = state_40658__$1;(statearr_40680_40703[(2)] = inst_40640);
(statearr_40680_40703[(1)] = (5));
return cljs.core.constant$keyword$767;
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
});})(c__5693__auto___40688,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___40688,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40684[(0)] = state_machine__5679__auto__);
(statearr_40684[(1)] = (1));
return statearr_40684;
});
var state_machine__5679__auto____1 = (function (state_40658){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40658);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40685){if((e40685 instanceof Object))
{var ex__5682__auto__ = e40685;var statearr_40686_40704 = state_40658;(statearr_40686_40704[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40658);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e40685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__40705 = state_40658;
state_40658 = G__40705;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40658){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40688,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_40687 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40688);
return statearr_40687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40688,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___40813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40813,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40813,out){
return (function (state_40789){var state_val_40790 = (state_40789[(1)]);if((state_val_40790 === (7)))
{var inst_40768 = (state_40789[(7)]);var inst_40769 = (state_40789[(8)]);var inst_40768__$1 = (state_40789[(2)]);var inst_40769__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40768__$1,(0),null);var inst_40770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40768__$1,(1),null);var inst_40771 = (inst_40769__$1 == null);var state_40789__$1 = (function (){var statearr_40791 = state_40789;(statearr_40791[(7)] = inst_40768__$1);
(statearr_40791[(9)] = inst_40770);
(statearr_40791[(8)] = inst_40769__$1);
return statearr_40791;
})();if(cljs.core.truth_(inst_40771))
{var statearr_40792_40814 = state_40789__$1;(statearr_40792_40814[(1)] = (8));
} else
{var statearr_40793_40815 = state_40789__$1;(statearr_40793_40815[(1)] = (9));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40790 === (1)))
{var inst_40760 = cljs.core.vec(chs);var inst_40761 = inst_40760;var state_40789__$1 = (function (){var statearr_40794 = state_40789;(statearr_40794[(10)] = inst_40761);
return statearr_40794;
})();var statearr_40795_40816 = state_40789__$1;(statearr_40795_40816[(2)] = null);
(statearr_40795_40816[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40790 === (4)))
{var inst_40761 = (state_40789[(10)]);var state_40789__$1 = state_40789;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_40789__$1,(7),inst_40761);
} else
{if((state_val_40790 === (6)))
{var inst_40785 = (state_40789[(2)]);var state_40789__$1 = state_40789;var statearr_40796_40817 = state_40789__$1;(statearr_40796_40817[(2)] = inst_40785);
(statearr_40796_40817[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40790 === (3)))
{var inst_40787 = (state_40789[(2)]);var state_40789__$1 = state_40789;return cljs.core.async.impl.ioc_helpers.return_chan(state_40789__$1,inst_40787);
} else
{if((state_val_40790 === (2)))
{var inst_40761 = (state_40789[(10)]);var inst_40763 = cljs.core.count(inst_40761);var inst_40764 = (inst_40763 > (0));var state_40789__$1 = state_40789;if(cljs.core.truth_(inst_40764))
{var statearr_40798_40818 = state_40789__$1;(statearr_40798_40818[(1)] = (4));
} else
{var statearr_40799_40819 = state_40789__$1;(statearr_40799_40819[(1)] = (5));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40790 === (11)))
{var inst_40761 = (state_40789[(10)]);var inst_40778 = (state_40789[(2)]);var tmp40797 = inst_40761;var inst_40761__$1 = tmp40797;var state_40789__$1 = (function (){var statearr_40800 = state_40789;(statearr_40800[(11)] = inst_40778);
(statearr_40800[(10)] = inst_40761__$1);
return statearr_40800;
})();var statearr_40801_40820 = state_40789__$1;(statearr_40801_40820[(2)] = null);
(statearr_40801_40820[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40790 === (9)))
{var inst_40769 = (state_40789[(8)]);var state_40789__$1 = state_40789;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40789__$1,(11),out,inst_40769);
} else
{if((state_val_40790 === (5)))
{var inst_40783 = cljs.core.async.close_BANG_(out);var state_40789__$1 = state_40789;var statearr_40802_40821 = state_40789__$1;(statearr_40802_40821[(2)] = inst_40783);
(statearr_40802_40821[(1)] = (6));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40790 === (10)))
{var inst_40781 = (state_40789[(2)]);var state_40789__$1 = state_40789;var statearr_40803_40822 = state_40789__$1;(statearr_40803_40822[(2)] = inst_40781);
(statearr_40803_40822[(1)] = (6));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40790 === (8)))
{var inst_40768 = (state_40789[(7)]);var inst_40770 = (state_40789[(9)]);var inst_40769 = (state_40789[(8)]);var inst_40761 = (state_40789[(10)]);var inst_40773 = (function (){var c = inst_40770;var v = inst_40769;var vec__40766 = inst_40768;var cs = inst_40761;return ((function (c,v,vec__40766,cs,inst_40768,inst_40770,inst_40769,inst_40761,state_val_40790,c__5693__auto___40813,out){
return (function (p1__40706_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40706_SHARP_);
});
;})(c,v,vec__40766,cs,inst_40768,inst_40770,inst_40769,inst_40761,state_val_40790,c__5693__auto___40813,out))
})();var inst_40774 = cljs.core.filterv(inst_40773,inst_40761);var inst_40761__$1 = inst_40774;var state_40789__$1 = (function (){var statearr_40804 = state_40789;(statearr_40804[(10)] = inst_40761__$1);
return statearr_40804;
})();var statearr_40805_40823 = state_40789__$1;(statearr_40805_40823[(2)] = null);
(statearr_40805_40823[(1)] = (2));
return cljs.core.constant$keyword$767;
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
});})(c__5693__auto___40813,out))
;return ((function (switch__5678__auto__,c__5693__auto___40813,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40809 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40809[(0)] = state_machine__5679__auto__);
(statearr_40809[(1)] = (1));
return statearr_40809;
});
var state_machine__5679__auto____1 = (function (state_40789){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40789);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40810){if((e40810 instanceof Object))
{var ex__5682__auto__ = e40810;var statearr_40811_40824 = state_40789;(statearr_40811_40824[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40789);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e40810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__40825 = state_40789;
state_40789 = G__40825;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40789){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40813,out))
})();var state__5695__auto__ = (function (){var statearr_40812 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40813);
return statearr_40812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40813,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___40918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40918,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40918,out){
return (function (state_40895){var state_val_40896 = (state_40895[(1)]);if((state_val_40896 === (7)))
{var inst_40877 = (state_40895[(7)]);var inst_40877__$1 = (state_40895[(2)]);var inst_40878 = (inst_40877__$1 == null);var inst_40879 = cljs.core.not(inst_40878);var state_40895__$1 = (function (){var statearr_40897 = state_40895;(statearr_40897[(7)] = inst_40877__$1);
return statearr_40897;
})();if(inst_40879)
{var statearr_40898_40919 = state_40895__$1;(statearr_40898_40919[(1)] = (8));
} else
{var statearr_40899_40920 = state_40895__$1;(statearr_40899_40920[(1)] = (9));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40896 === (1)))
{var inst_40872 = (0);var state_40895__$1 = (function (){var statearr_40900 = state_40895;(statearr_40900[(8)] = inst_40872);
return statearr_40900;
})();var statearr_40901_40921 = state_40895__$1;(statearr_40901_40921[(2)] = null);
(statearr_40901_40921[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40896 === (4)))
{var state_40895__$1 = state_40895;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40895__$1,(7),ch);
} else
{if((state_val_40896 === (6)))
{var inst_40890 = (state_40895[(2)]);var state_40895__$1 = state_40895;var statearr_40902_40922 = state_40895__$1;(statearr_40902_40922[(2)] = inst_40890);
(statearr_40902_40922[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40896 === (3)))
{var inst_40892 = (state_40895[(2)]);var inst_40893 = cljs.core.async.close_BANG_(out);var state_40895__$1 = (function (){var statearr_40903 = state_40895;(statearr_40903[(9)] = inst_40892);
return statearr_40903;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_40895__$1,inst_40893);
} else
{if((state_val_40896 === (2)))
{var inst_40872 = (state_40895[(8)]);var inst_40874 = (inst_40872 < n);var state_40895__$1 = state_40895;if(cljs.core.truth_(inst_40874))
{var statearr_40904_40923 = state_40895__$1;(statearr_40904_40923[(1)] = (4));
} else
{var statearr_40905_40924 = state_40895__$1;(statearr_40905_40924[(1)] = (5));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_40896 === (11)))
{var inst_40872 = (state_40895[(8)]);var inst_40882 = (state_40895[(2)]);var inst_40883 = (inst_40872 + (1));var inst_40872__$1 = inst_40883;var state_40895__$1 = (function (){var statearr_40906 = state_40895;(statearr_40906[(10)] = inst_40882);
(statearr_40906[(8)] = inst_40872__$1);
return statearr_40906;
})();var statearr_40907_40925 = state_40895__$1;(statearr_40907_40925[(2)] = null);
(statearr_40907_40925[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40896 === (9)))
{var state_40895__$1 = state_40895;var statearr_40908_40926 = state_40895__$1;(statearr_40908_40926[(2)] = null);
(statearr_40908_40926[(1)] = (10));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40896 === (5)))
{var state_40895__$1 = state_40895;var statearr_40909_40927 = state_40895__$1;(statearr_40909_40927[(2)] = null);
(statearr_40909_40927[(1)] = (6));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40896 === (10)))
{var inst_40887 = (state_40895[(2)]);var state_40895__$1 = state_40895;var statearr_40910_40928 = state_40895__$1;(statearr_40910_40928[(2)] = inst_40887);
(statearr_40910_40928[(1)] = (6));
return cljs.core.constant$keyword$767;
} else
{if((state_val_40896 === (8)))
{var inst_40877 = (state_40895[(7)]);var state_40895__$1 = state_40895;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40895__$1,(11),out,inst_40877);
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
});})(c__5693__auto___40918,out))
;return ((function (switch__5678__auto__,c__5693__auto___40918,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40914 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_40914[(0)] = state_machine__5679__auto__);
(statearr_40914[(1)] = (1));
return statearr_40914;
});
var state_machine__5679__auto____1 = (function (state_40895){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40895);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40915){if((e40915 instanceof Object))
{var ex__5682__auto__ = e40915;var statearr_40916_40929 = state_40895;(statearr_40916_40929[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40895);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e40915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__40930 = state_40895;
state_40895 = G__40930;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40895){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40918,out))
})();var state__5695__auto__ = (function (){var statearr_40917 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40918);
return statearr_40917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40918,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41027,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41027,out){
return (function (state_41002){var state_val_41003 = (state_41002[(1)]);if((state_val_41003 === (7)))
{var inst_40997 = (state_41002[(2)]);var state_41002__$1 = state_41002;var statearr_41004_41028 = state_41002__$1;(statearr_41004_41028[(2)] = inst_40997);
(statearr_41004_41028[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41003 === (1)))
{var inst_40979 = null;var state_41002__$1 = (function (){var statearr_41005 = state_41002;(statearr_41005[(7)] = inst_40979);
return statearr_41005;
})();var statearr_41006_41029 = state_41002__$1;(statearr_41006_41029[(2)] = null);
(statearr_41006_41029[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41003 === (4)))
{var inst_40982 = (state_41002[(8)]);var inst_40982__$1 = (state_41002[(2)]);var inst_40983 = (inst_40982__$1 == null);var inst_40984 = cljs.core.not(inst_40983);var state_41002__$1 = (function (){var statearr_41007 = state_41002;(statearr_41007[(8)] = inst_40982__$1);
return statearr_41007;
})();if(inst_40984)
{var statearr_41008_41030 = state_41002__$1;(statearr_41008_41030[(1)] = (5));
} else
{var statearr_41009_41031 = state_41002__$1;(statearr_41009_41031[(1)] = (6));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_41003 === (6)))
{var state_41002__$1 = state_41002;var statearr_41010_41032 = state_41002__$1;(statearr_41010_41032[(2)] = null);
(statearr_41010_41032[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41003 === (3)))
{var inst_40999 = (state_41002[(2)]);var inst_41000 = cljs.core.async.close_BANG_(out);var state_41002__$1 = (function (){var statearr_41011 = state_41002;(statearr_41011[(9)] = inst_40999);
return statearr_41011;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_41002__$1,inst_41000);
} else
{if((state_val_41003 === (2)))
{var state_41002__$1 = state_41002;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41002__$1,(4),ch);
} else
{if((state_val_41003 === (11)))
{var inst_40982 = (state_41002[(8)]);var inst_40991 = (state_41002[(2)]);var inst_40979 = inst_40982;var state_41002__$1 = (function (){var statearr_41012 = state_41002;(statearr_41012[(10)] = inst_40991);
(statearr_41012[(7)] = inst_40979);
return statearr_41012;
})();var statearr_41013_41033 = state_41002__$1;(statearr_41013_41033[(2)] = null);
(statearr_41013_41033[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41003 === (9)))
{var inst_40982 = (state_41002[(8)]);var state_41002__$1 = state_41002;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41002__$1,(11),out,inst_40982);
} else
{if((state_val_41003 === (5)))
{var inst_40982 = (state_41002[(8)]);var inst_40979 = (state_41002[(7)]);var inst_40986 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40982,inst_40979);var state_41002__$1 = state_41002;if(inst_40986)
{var statearr_41015_41034 = state_41002__$1;(statearr_41015_41034[(1)] = (8));
} else
{var statearr_41016_41035 = state_41002__$1;(statearr_41016_41035[(1)] = (9));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_41003 === (10)))
{var inst_40994 = (state_41002[(2)]);var state_41002__$1 = state_41002;var statearr_41017_41036 = state_41002__$1;(statearr_41017_41036[(2)] = inst_40994);
(statearr_41017_41036[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41003 === (8)))
{var inst_40979 = (state_41002[(7)]);var tmp41014 = inst_40979;var inst_40979__$1 = tmp41014;var state_41002__$1 = (function (){var statearr_41018 = state_41002;(statearr_41018[(7)] = inst_40979__$1);
return statearr_41018;
})();var statearr_41019_41037 = state_41002__$1;(statearr_41019_41037[(2)] = null);
(statearr_41019_41037[(1)] = (2));
return cljs.core.constant$keyword$767;
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
});})(c__5693__auto___41027,out))
;return ((function (switch__5678__auto__,c__5693__auto___41027,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41023 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_41023[(0)] = state_machine__5679__auto__);
(statearr_41023[(1)] = (1));
return statearr_41023;
});
var state_machine__5679__auto____1 = (function (state_41002){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41002);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41024){if((e41024 instanceof Object))
{var ex__5682__auto__ = e41024;var statearr_41025_41038 = state_41002;(statearr_41025_41038[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41002);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e41024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__41039 = state_41002;
state_41002 = G__41039;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41002){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41027,out))
})();var state__5695__auto__ = (function (){var statearr_41026 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41027);
return statearr_41026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41027,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41174,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41174,out){
return (function (state_41144){var state_val_41145 = (state_41144[(1)]);if((state_val_41145 === (7)))
{var inst_41140 = (state_41144[(2)]);var state_41144__$1 = state_41144;var statearr_41146_41175 = state_41144__$1;(statearr_41146_41175[(2)] = inst_41140);
(statearr_41146_41175[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41145 === (1)))
{var inst_41107 = (new Array(n));var inst_41108 = inst_41107;var inst_41109 = (0);var state_41144__$1 = (function (){var statearr_41147 = state_41144;(statearr_41147[(7)] = inst_41109);
(statearr_41147[(8)] = inst_41108);
return statearr_41147;
})();var statearr_41148_41176 = state_41144__$1;(statearr_41148_41176[(2)] = null);
(statearr_41148_41176[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41145 === (4)))
{var inst_41112 = (state_41144[(9)]);var inst_41112__$1 = (state_41144[(2)]);var inst_41113 = (inst_41112__$1 == null);var inst_41114 = cljs.core.not(inst_41113);var state_41144__$1 = (function (){var statearr_41149 = state_41144;(statearr_41149[(9)] = inst_41112__$1);
return statearr_41149;
})();if(inst_41114)
{var statearr_41150_41177 = state_41144__$1;(statearr_41150_41177[(1)] = (5));
} else
{var statearr_41151_41178 = state_41144__$1;(statearr_41151_41178[(1)] = (6));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_41145 === (15)))
{var inst_41134 = (state_41144[(2)]);var state_41144__$1 = state_41144;var statearr_41152_41179 = state_41144__$1;(statearr_41152_41179[(2)] = inst_41134);
(statearr_41152_41179[(1)] = (14));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41145 === (13)))
{var state_41144__$1 = state_41144;var statearr_41153_41180 = state_41144__$1;(statearr_41153_41180[(2)] = null);
(statearr_41153_41180[(1)] = (14));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41145 === (6)))
{var inst_41109 = (state_41144[(7)]);var inst_41130 = (inst_41109 > (0));var state_41144__$1 = state_41144;if(cljs.core.truth_(inst_41130))
{var statearr_41154_41181 = state_41144__$1;(statearr_41154_41181[(1)] = (12));
} else
{var statearr_41155_41182 = state_41144__$1;(statearr_41155_41182[(1)] = (13));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_41145 === (3)))
{var inst_41142 = (state_41144[(2)]);var state_41144__$1 = state_41144;return cljs.core.async.impl.ioc_helpers.return_chan(state_41144__$1,inst_41142);
} else
{if((state_val_41145 === (12)))
{var inst_41108 = (state_41144[(8)]);var inst_41132 = cljs.core.vec(inst_41108);var state_41144__$1 = state_41144;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41144__$1,(15),out,inst_41132);
} else
{if((state_val_41145 === (2)))
{var state_41144__$1 = state_41144;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41144__$1,(4),ch);
} else
{if((state_val_41145 === (11)))
{var inst_41124 = (state_41144[(2)]);var inst_41125 = (new Array(n));var inst_41108 = inst_41125;var inst_41109 = (0);var state_41144__$1 = (function (){var statearr_41156 = state_41144;(statearr_41156[(10)] = inst_41124);
(statearr_41156[(7)] = inst_41109);
(statearr_41156[(8)] = inst_41108);
return statearr_41156;
})();var statearr_41157_41183 = state_41144__$1;(statearr_41157_41183[(2)] = null);
(statearr_41157_41183[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41145 === (9)))
{var inst_41108 = (state_41144[(8)]);var inst_41122 = cljs.core.vec(inst_41108);var state_41144__$1 = state_41144;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41144__$1,(11),out,inst_41122);
} else
{if((state_val_41145 === (5)))
{var inst_41117 = (state_41144[(11)]);var inst_41109 = (state_41144[(7)]);var inst_41112 = (state_41144[(9)]);var inst_41108 = (state_41144[(8)]);var inst_41116 = (inst_41108[inst_41109] = inst_41112);var inst_41117__$1 = (inst_41109 + (1));var inst_41118 = (inst_41117__$1 < n);var state_41144__$1 = (function (){var statearr_41158 = state_41144;(statearr_41158[(11)] = inst_41117__$1);
(statearr_41158[(12)] = inst_41116);
return statearr_41158;
})();if(cljs.core.truth_(inst_41118))
{var statearr_41159_41184 = state_41144__$1;(statearr_41159_41184[(1)] = (8));
} else
{var statearr_41160_41185 = state_41144__$1;(statearr_41160_41185[(1)] = (9));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_41145 === (14)))
{var inst_41137 = (state_41144[(2)]);var inst_41138 = cljs.core.async.close_BANG_(out);var state_41144__$1 = (function (){var statearr_41162 = state_41144;(statearr_41162[(13)] = inst_41137);
return statearr_41162;
})();var statearr_41163_41186 = state_41144__$1;(statearr_41163_41186[(2)] = inst_41138);
(statearr_41163_41186[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41145 === (10)))
{var inst_41128 = (state_41144[(2)]);var state_41144__$1 = state_41144;var statearr_41164_41187 = state_41144__$1;(statearr_41164_41187[(2)] = inst_41128);
(statearr_41164_41187[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41145 === (8)))
{var inst_41117 = (state_41144[(11)]);var inst_41108 = (state_41144[(8)]);var tmp41161 = inst_41108;var inst_41108__$1 = tmp41161;var inst_41109 = inst_41117;var state_41144__$1 = (function (){var statearr_41165 = state_41144;(statearr_41165[(7)] = inst_41109);
(statearr_41165[(8)] = inst_41108__$1);
return statearr_41165;
})();var statearr_41166_41188 = state_41144__$1;(statearr_41166_41188[(2)] = null);
(statearr_41166_41188[(1)] = (2));
return cljs.core.constant$keyword$767;
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
});})(c__5693__auto___41174,out))
;return ((function (switch__5678__auto__,c__5693__auto___41174,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41170[(0)] = state_machine__5679__auto__);
(statearr_41170[(1)] = (1));
return statearr_41170;
});
var state_machine__5679__auto____1 = (function (state_41144){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41144);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41171){if((e41171 instanceof Object))
{var ex__5682__auto__ = e41171;var statearr_41172_41189 = state_41144;(statearr_41172_41189[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41144);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e41171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__41190 = state_41144;
state_41144 = G__41190;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41144){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41174,out))
})();var state__5695__auto__ = (function (){var statearr_41173 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41174);
return statearr_41173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41174,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41333,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41333,out){
return (function (state_41303){var state_val_41304 = (state_41303[(1)]);if((state_val_41304 === (7)))
{var inst_41299 = (state_41303[(2)]);var state_41303__$1 = state_41303;var statearr_41305_41334 = state_41303__$1;(statearr_41305_41334[(2)] = inst_41299);
(statearr_41305_41334[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41304 === (1)))
{var inst_41262 = [];var inst_41263 = inst_41262;var inst_41264 = cljs.core.constant$keyword$780;var state_41303__$1 = (function (){var statearr_41306 = state_41303;(statearr_41306[(7)] = inst_41264);
(statearr_41306[(8)] = inst_41263);
return statearr_41306;
})();var statearr_41307_41335 = state_41303__$1;(statearr_41307_41335[(2)] = null);
(statearr_41307_41335[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41304 === (4)))
{var inst_41267 = (state_41303[(9)]);var inst_41267__$1 = (state_41303[(2)]);var inst_41268 = (inst_41267__$1 == null);var inst_41269 = cljs.core.not(inst_41268);var state_41303__$1 = (function (){var statearr_41308 = state_41303;(statearr_41308[(9)] = inst_41267__$1);
return statearr_41308;
})();if(inst_41269)
{var statearr_41309_41336 = state_41303__$1;(statearr_41309_41336[(1)] = (5));
} else
{var statearr_41310_41337 = state_41303__$1;(statearr_41310_41337[(1)] = (6));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_41304 === (15)))
{var inst_41293 = (state_41303[(2)]);var state_41303__$1 = state_41303;var statearr_41311_41338 = state_41303__$1;(statearr_41311_41338[(2)] = inst_41293);
(statearr_41311_41338[(1)] = (14));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41304 === (13)))
{var state_41303__$1 = state_41303;var statearr_41312_41339 = state_41303__$1;(statearr_41312_41339[(2)] = null);
(statearr_41312_41339[(1)] = (14));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41304 === (6)))
{var inst_41263 = (state_41303[(8)]);var inst_41288 = inst_41263.length;var inst_41289 = (inst_41288 > (0));var state_41303__$1 = state_41303;if(cljs.core.truth_(inst_41289))
{var statearr_41313_41340 = state_41303__$1;(statearr_41313_41340[(1)] = (12));
} else
{var statearr_41314_41341 = state_41303__$1;(statearr_41314_41341[(1)] = (13));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_41304 === (3)))
{var inst_41301 = (state_41303[(2)]);var state_41303__$1 = state_41303;return cljs.core.async.impl.ioc_helpers.return_chan(state_41303__$1,inst_41301);
} else
{if((state_val_41304 === (12)))
{var inst_41263 = (state_41303[(8)]);var inst_41291 = cljs.core.vec(inst_41263);var state_41303__$1 = state_41303;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41303__$1,(15),out,inst_41291);
} else
{if((state_val_41304 === (2)))
{var state_41303__$1 = state_41303;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41303__$1,(4),ch);
} else
{if((state_val_41304 === (11)))
{var inst_41271 = (state_41303[(10)]);var inst_41267 = (state_41303[(9)]);var inst_41281 = (state_41303[(2)]);var inst_41282 = [];var inst_41283 = inst_41282.push(inst_41267);var inst_41263 = inst_41282;var inst_41264 = inst_41271;var state_41303__$1 = (function (){var statearr_41315 = state_41303;(statearr_41315[(11)] = inst_41281);
(statearr_41315[(12)] = inst_41283);
(statearr_41315[(7)] = inst_41264);
(statearr_41315[(8)] = inst_41263);
return statearr_41315;
})();var statearr_41316_41342 = state_41303__$1;(statearr_41316_41342[(2)] = null);
(statearr_41316_41342[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41304 === (9)))
{var inst_41263 = (state_41303[(8)]);var inst_41279 = cljs.core.vec(inst_41263);var state_41303__$1 = state_41303;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41303__$1,(11),out,inst_41279);
} else
{if((state_val_41304 === (5)))
{var inst_41271 = (state_41303[(10)]);var inst_41264 = (state_41303[(7)]);var inst_41267 = (state_41303[(9)]);var inst_41271__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41267) : f.call(null,inst_41267));var inst_41272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41271__$1,inst_41264);var inst_41273 = cljs.core.keyword_identical_QMARK_(inst_41264,cljs.core.constant$keyword$780);var inst_41274 = (inst_41272) || (inst_41273);var state_41303__$1 = (function (){var statearr_41317 = state_41303;(statearr_41317[(10)] = inst_41271__$1);
return statearr_41317;
})();if(cljs.core.truth_(inst_41274))
{var statearr_41318_41343 = state_41303__$1;(statearr_41318_41343[(1)] = (8));
} else
{var statearr_41319_41344 = state_41303__$1;(statearr_41319_41344[(1)] = (9));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_41304 === (14)))
{var inst_41296 = (state_41303[(2)]);var inst_41297 = cljs.core.async.close_BANG_(out);var state_41303__$1 = (function (){var statearr_41321 = state_41303;(statearr_41321[(13)] = inst_41296);
return statearr_41321;
})();var statearr_41322_41345 = state_41303__$1;(statearr_41322_41345[(2)] = inst_41297);
(statearr_41322_41345[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41304 === (10)))
{var inst_41286 = (state_41303[(2)]);var state_41303__$1 = state_41303;var statearr_41323_41346 = state_41303__$1;(statearr_41323_41346[(2)] = inst_41286);
(statearr_41323_41346[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_41304 === (8)))
{var inst_41271 = (state_41303[(10)]);var inst_41263 = (state_41303[(8)]);var inst_41267 = (state_41303[(9)]);var inst_41276 = inst_41263.push(inst_41267);var tmp41320 = inst_41263;var inst_41263__$1 = tmp41320;var inst_41264 = inst_41271;var state_41303__$1 = (function (){var statearr_41324 = state_41303;(statearr_41324[(14)] = inst_41276);
(statearr_41324[(7)] = inst_41264);
(statearr_41324[(8)] = inst_41263__$1);
return statearr_41324;
})();var statearr_41325_41347 = state_41303__$1;(statearr_41325_41347[(2)] = null);
(statearr_41325_41347[(1)] = (2));
return cljs.core.constant$keyword$767;
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
});})(c__5693__auto___41333,out))
;return ((function (switch__5678__auto__,c__5693__auto___41333,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41329[(0)] = state_machine__5679__auto__);
(statearr_41329[(1)] = (1));
return statearr_41329;
});
var state_machine__5679__auto____1 = (function (state_41303){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41303);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41330){if((e41330 instanceof Object))
{var ex__5682__auto__ = e41330;var statearr_41331_41348 = state_41303;(statearr_41331_41348[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41303);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e41330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__41349 = state_41303;
state_41303 = G__41349;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41303){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41333,out))
})();var state__5695__auto__ = (function (){var statearr_41332 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41333);
return statearr_41332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41333,out))
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
