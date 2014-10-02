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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t41870 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41870 = (function (f,fn_handler,meta41871){
this.f = f;
this.fn_handler = fn_handler;
this.meta41871 = meta41871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41870.cljs$lang$type = true;
cljs.core.async.t41870.cljs$lang$ctorStr = "cljs.core.async/t41870";
cljs.core.async.t41870.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t41870");
});
cljs.core.async.t41870.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t41870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t41870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41872){var self__ = this;
var _41872__$1 = this;return self__.meta41871;
});
cljs.core.async.t41870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41872,meta41871__$1){var self__ = this;
var _41872__$1 = this;return (new cljs.core.async.t41870(self__.f,self__.fn_handler,meta41871__$1));
});
cljs.core.async.__GT_t41870 = (function __GT_t41870(f__$1,fn_handler__$1,meta41871){return (new cljs.core.async.t41870(f__$1,fn_handler__$1,meta41871));
});
}
return (new cljs.core.async.t41870(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__41874 = buff;if(G__41874)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__41874.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__41874.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__41874);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__41874);
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
{var val_41875 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41875) : fn1.call(null,val_41875));
} else
{cljs.core.async.impl.dispatch.run(((function (val_41875,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41875) : fn1.call(null,val_41875));
});})(val_41875,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___41876 = n;var x_41877 = (0);while(true){
if((x_41877 < n__4414__auto___41876))
{(a[x_41877] = (0));
{
var G__41878 = (x_41877 + (1));
x_41877 = G__41878;
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
var G__41879 = (i + (1));
i = G__41879;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));if(typeof cljs.core.async.t41883 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41883 = (function (flag,alt_flag,meta41884){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta41884 = meta41884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41883.cljs$lang$type = true;
cljs.core.async.t41883.cljs$lang$ctorStr = "cljs.core.async/t41883";
cljs.core.async.t41883.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t41883");
});})(flag))
;
cljs.core.async.t41883.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;
cljs.core.async.t41883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));
return true;
});})(flag))
;
cljs.core.async.t41883.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41885){var self__ = this;
var _41885__$1 = this;return self__.meta41884;
});})(flag))
;
cljs.core.async.t41883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41885,meta41884__$1){var self__ = this;
var _41885__$1 = this;return (new cljs.core.async.t41883(self__.flag,self__.alt_flag,meta41884__$1));
});})(flag))
;
cljs.core.async.__GT_t41883 = ((function (flag){
return (function __GT_t41883(flag__$1,alt_flag__$1,meta41884){return (new cljs.core.async.t41883(flag__$1,alt_flag__$1,meta41884));
});})(flag))
;
}
return (new cljs.core.async.t41883(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t41889 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41889 = (function (cb,flag,alt_handler,meta41890){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta41890 = meta41890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41889.cljs$lang$type = true;
cljs.core.async.t41889.cljs$lang$ctorStr = "cljs.core.async/t41889";
cljs.core.async.t41889.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t41889");
});
cljs.core.async.t41889.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t41889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t41889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41891){var self__ = this;
var _41891__$1 = this;return self__.meta41890;
});
cljs.core.async.t41889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41891,meta41890__$1){var self__ = this;
var _41891__$1 = this;return (new cljs.core.async.t41889(self__.cb,self__.flag,self__.alt_handler,meta41890__$1));
});
cljs.core.async.__GT_t41889 = (function __GT_t41889(cb__$1,flag__$1,alt_handler__$1,meta41890){return (new cljs.core.async.t41889(cb__$1,flag__$1,alt_handler__$1,meta41890));
});
}
return (new cljs.core.async.t41889(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$886.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41892_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41892_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41892_SHARP_,port], null)));
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
var G__41893 = (i + (1));
i = G__41893;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$871))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3546__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$871.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$871], null));
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
var alts_BANG___delegate = function (ports,p__41894){var map__41896 = p__41894;var map__41896__$1 = ((cljs.core.seq_QMARK_(map__41896))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41896):map__41896);var opts = map__41896__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__41894 = null;if (arguments.length > 1) {
  p__41894 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__41894);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__41897){
var ports = cljs.core.first(arglist__41897);
var p__41894 = cljs.core.rest(arglist__41897);
return alts_BANG___delegate(ports,p__41894);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t41905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41905 = (function (ch,f,map_LT_,meta41906){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41906 = meta41906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41905.cljs$lang$type = true;
cljs.core.async.t41905.cljs$lang$ctorStr = "cljs.core.async/t41905";
cljs.core.async.t41905.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t41905");
});
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t41908 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41908 = (function (fn1,_,meta41906,ch,f,map_LT_,meta41909){
this.fn1 = fn1;
this._ = _;
this.meta41906 = meta41906;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41909 = meta41909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41908.cljs$lang$type = true;
cljs.core.async.t41908.cljs$lang$ctorStr = "cljs.core.async/t41908";
cljs.core.async.t41908.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t41908");
});})(___$1))
;
cljs.core.async.t41908.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t41908.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t41908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__41898_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__41898_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__41898_SHARP_) : self__.f.call(null,p1__41898_SHARP_)))) : f1.call(null,(((p1__41898_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__41898_SHARP_) : self__.f.call(null,p1__41898_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t41908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41910){var self__ = this;
var _41910__$1 = this;return self__.meta41909;
});})(___$1))
;
cljs.core.async.t41908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41910,meta41909__$1){var self__ = this;
var _41910__$1 = this;return (new cljs.core.async.t41908(self__.fn1,self__._,self__.meta41906,self__.ch,self__.f,self__.map_LT_,meta41909__$1));
});})(___$1))
;
cljs.core.async.__GT_t41908 = ((function (___$1){
return (function __GT_t41908(fn1__$1,___$2,meta41906__$1,ch__$2,f__$2,map_LT___$2,meta41909){return (new cljs.core.async.t41908(fn1__$1,___$2,meta41906__$1,ch__$2,f__$2,map_LT___$2,meta41909));
});})(___$1))
;
}
return (new cljs.core.async.t41908(fn1,___$1,self__.meta41906,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t41905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41907){var self__ = this;
var _41907__$1 = this;return self__.meta41906;
});
cljs.core.async.t41905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41907,meta41906__$1){var self__ = this;
var _41907__$1 = this;return (new cljs.core.async.t41905(self__.ch,self__.f,self__.map_LT_,meta41906__$1));
});
cljs.core.async.__GT_t41905 = (function __GT_t41905(ch__$1,f__$1,map_LT___$1,meta41906){return (new cljs.core.async.t41905(ch__$1,f__$1,map_LT___$1,meta41906));
});
}
return (new cljs.core.async.t41905(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t41914 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41914 = (function (ch,f,map_GT_,meta41915){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta41915 = meta41915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41914.cljs$lang$type = true;
cljs.core.async.t41914.cljs$lang$ctorStr = "cljs.core.async/t41914";
cljs.core.async.t41914.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t41914");
});
cljs.core.async.t41914.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41914.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t41914.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41914.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t41914.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41914.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t41914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41916){var self__ = this;
var _41916__$1 = this;return self__.meta41915;
});
cljs.core.async.t41914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41916,meta41915__$1){var self__ = this;
var _41916__$1 = this;return (new cljs.core.async.t41914(self__.ch,self__.f,self__.map_GT_,meta41915__$1));
});
cljs.core.async.__GT_t41914 = (function __GT_t41914(ch__$1,f__$1,map_GT___$1,meta41915){return (new cljs.core.async.t41914(ch__$1,f__$1,map_GT___$1,meta41915));
});
}
return (new cljs.core.async.t41914(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t41920 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41920 = (function (ch,p,filter_GT_,meta41921){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta41921 = meta41921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41920.cljs$lang$type = true;
cljs.core.async.t41920.cljs$lang$ctorStr = "cljs.core.async/t41920";
cljs.core.async.t41920.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t41920");
});
cljs.core.async.t41920.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t41920.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t41920.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t41920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41922){var self__ = this;
var _41922__$1 = this;return self__.meta41921;
});
cljs.core.async.t41920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41922,meta41921__$1){var self__ = this;
var _41922__$1 = this;return (new cljs.core.async.t41920(self__.ch,self__.p,self__.filter_GT_,meta41921__$1));
});
cljs.core.async.__GT_t41920 = (function __GT_t41920(ch__$1,p__$1,filter_GT___$1,meta41921){return (new cljs.core.async.t41920(ch__$1,p__$1,filter_GT___$1,meta41921));
});
}
return (new cljs.core.async.t41920(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___42005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42005,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42005,out){
return (function (state_41984){var state_val_41985 = (state_41984[(1)]);if((state_val_41985 === (7)))
{var inst_41980 = (state_41984[(2)]);var state_41984__$1 = state_41984;var statearr_41986_42006 = state_41984__$1;(statearr_41986_42006[(2)] = inst_41980);
(statearr_41986_42006[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_41985 === (1)))
{var state_41984__$1 = state_41984;var statearr_41987_42007 = state_41984__$1;(statearr_41987_42007[(2)] = null);
(statearr_41987_42007[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_41985 === (4)))
{var inst_41966 = (state_41984[(7)]);var inst_41966__$1 = (state_41984[(2)]);var inst_41967 = (inst_41966__$1 == null);var state_41984__$1 = (function (){var statearr_41988 = state_41984;(statearr_41988[(7)] = inst_41966__$1);
return statearr_41988;
})();if(cljs.core.truth_(inst_41967))
{var statearr_41989_42008 = state_41984__$1;(statearr_41989_42008[(1)] = (5));
} else
{var statearr_41990_42009 = state_41984__$1;(statearr_41990_42009[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_41985 === (6)))
{var inst_41966 = (state_41984[(7)]);var inst_41971 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41966) : p.call(null,inst_41966));var state_41984__$1 = state_41984;if(cljs.core.truth_(inst_41971))
{var statearr_41991_42010 = state_41984__$1;(statearr_41991_42010[(1)] = (8));
} else
{var statearr_41992_42011 = state_41984__$1;(statearr_41992_42011[(1)] = (9));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_41985 === (3)))
{var inst_41982 = (state_41984[(2)]);var state_41984__$1 = state_41984;return cljs.core.async.impl.ioc_helpers.return_chan(state_41984__$1,inst_41982);
} else
{if((state_val_41985 === (2)))
{var state_41984__$1 = state_41984;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41984__$1,(4),ch);
} else
{if((state_val_41985 === (11)))
{var inst_41974 = (state_41984[(2)]);var state_41984__$1 = state_41984;var statearr_41993_42012 = state_41984__$1;(statearr_41993_42012[(2)] = inst_41974);
(statearr_41993_42012[(1)] = (10));
return cljs.core.constant$keyword$880;
} else
{if((state_val_41985 === (9)))
{var state_41984__$1 = state_41984;var statearr_41994_42013 = state_41984__$1;(statearr_41994_42013[(2)] = null);
(statearr_41994_42013[(1)] = (10));
return cljs.core.constant$keyword$880;
} else
{if((state_val_41985 === (5)))
{var inst_41969 = cljs.core.async.close_BANG_(out);var state_41984__$1 = state_41984;var statearr_41995_42014 = state_41984__$1;(statearr_41995_42014[(2)] = inst_41969);
(statearr_41995_42014[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_41985 === (10)))
{var inst_41977 = (state_41984[(2)]);var state_41984__$1 = (function (){var statearr_41996 = state_41984;(statearr_41996[(8)] = inst_41977);
return statearr_41996;
})();var statearr_41997_42015 = state_41984__$1;(statearr_41997_42015[(2)] = null);
(statearr_41997_42015[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_41985 === (8)))
{var inst_41966 = (state_41984[(7)]);var state_41984__$1 = state_41984;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41984__$1,(11),out,inst_41966);
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
});})(c__5708__auto___42005,out))
;return ((function (switch__5693__auto__,c__5708__auto___42005,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42001 = [null,null,null,null,null,null,null,null,null];(statearr_42001[(0)] = state_machine__5694__auto__);
(statearr_42001[(1)] = (1));
return statearr_42001;
});
var state_machine__5694__auto____1 = (function (state_41984){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41984);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42002){if((e42002 instanceof Object))
{var ex__5697__auto__ = e42002;var statearr_42003_42016 = state_41984;(statearr_42003_42016[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41984);
return cljs.core.constant$keyword$880;
} else
{throw e42002;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__42017 = state_41984;
state_41984 = G__42017;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41984){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42005,out))
})();var state__5710__auto__ = (function (){var statearr_42004 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42005);
return statearr_42004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42005,out))
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
return (function (state_42169){var state_val_42170 = (state_42169[(1)]);if((state_val_42170 === (7)))
{var inst_42165 = (state_42169[(2)]);var state_42169__$1 = state_42169;var statearr_42171_42208 = state_42169__$1;(statearr_42171_42208[(2)] = inst_42165);
(statearr_42171_42208[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (20)))
{var inst_42140 = (state_42169[(7)]);var inst_42151 = (state_42169[(2)]);var inst_42152 = cljs.core.next(inst_42140);var inst_42126 = inst_42152;var inst_42127 = null;var inst_42128 = (0);var inst_42129 = (0);var state_42169__$1 = (function (){var statearr_42172 = state_42169;(statearr_42172[(8)] = inst_42126);
(statearr_42172[(9)] = inst_42151);
(statearr_42172[(10)] = inst_42127);
(statearr_42172[(11)] = inst_42129);
(statearr_42172[(12)] = inst_42128);
return statearr_42172;
})();var statearr_42173_42209 = state_42169__$1;(statearr_42173_42209[(2)] = null);
(statearr_42173_42209[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (1)))
{var state_42169__$1 = state_42169;var statearr_42174_42210 = state_42169__$1;(statearr_42174_42210[(2)] = null);
(statearr_42174_42210[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (4)))
{var inst_42115 = (state_42169[(13)]);var inst_42115__$1 = (state_42169[(2)]);var inst_42116 = (inst_42115__$1 == null);var state_42169__$1 = (function (){var statearr_42178 = state_42169;(statearr_42178[(13)] = inst_42115__$1);
return statearr_42178;
})();if(cljs.core.truth_(inst_42116))
{var statearr_42179_42211 = state_42169__$1;(statearr_42179_42211[(1)] = (5));
} else
{var statearr_42180_42212 = state_42169__$1;(statearr_42180_42212[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (15)))
{var state_42169__$1 = state_42169;var statearr_42181_42213 = state_42169__$1;(statearr_42181_42213[(2)] = null);
(statearr_42181_42213[(1)] = (16));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (13)))
{var inst_42126 = (state_42169[(8)]);var inst_42127 = (state_42169[(10)]);var inst_42129 = (state_42169[(11)]);var inst_42128 = (state_42169[(12)]);var inst_42136 = (state_42169[(2)]);var inst_42137 = (inst_42129 + (1));var tmp42175 = inst_42126;var tmp42176 = inst_42127;var tmp42177 = inst_42128;var inst_42126__$1 = tmp42175;var inst_42127__$1 = tmp42176;var inst_42128__$1 = tmp42177;var inst_42129__$1 = inst_42137;var state_42169__$1 = (function (){var statearr_42182 = state_42169;(statearr_42182[(8)] = inst_42126__$1);
(statearr_42182[(14)] = inst_42136);
(statearr_42182[(10)] = inst_42127__$1);
(statearr_42182[(11)] = inst_42129__$1);
(statearr_42182[(12)] = inst_42128__$1);
return statearr_42182;
})();var statearr_42183_42214 = state_42169__$1;(statearr_42183_42214[(2)] = null);
(statearr_42183_42214[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (6)))
{var inst_42115 = (state_42169[(13)]);var inst_42120 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42115) : f.call(null,inst_42115));var inst_42125 = cljs.core.seq(inst_42120);var inst_42126 = inst_42125;var inst_42127 = null;var inst_42128 = (0);var inst_42129 = (0);var state_42169__$1 = (function (){var statearr_42184 = state_42169;(statearr_42184[(8)] = inst_42126);
(statearr_42184[(10)] = inst_42127);
(statearr_42184[(11)] = inst_42129);
(statearr_42184[(12)] = inst_42128);
return statearr_42184;
})();var statearr_42185_42215 = state_42169__$1;(statearr_42185_42215[(2)] = null);
(statearr_42185_42215[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (17)))
{var inst_42140 = (state_42169[(7)]);var inst_42144 = cljs.core.chunk_first(inst_42140);var inst_42145 = cljs.core.chunk_rest(inst_42140);var inst_42146 = cljs.core.count(inst_42144);var inst_42126 = inst_42145;var inst_42127 = inst_42144;var inst_42128 = inst_42146;var inst_42129 = (0);var state_42169__$1 = (function (){var statearr_42186 = state_42169;(statearr_42186[(8)] = inst_42126);
(statearr_42186[(10)] = inst_42127);
(statearr_42186[(11)] = inst_42129);
(statearr_42186[(12)] = inst_42128);
return statearr_42186;
})();var statearr_42187_42216 = state_42169__$1;(statearr_42187_42216[(2)] = null);
(statearr_42187_42216[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (3)))
{var inst_42167 = (state_42169[(2)]);var state_42169__$1 = state_42169;return cljs.core.async.impl.ioc_helpers.return_chan(state_42169__$1,inst_42167);
} else
{if((state_val_42170 === (12)))
{var inst_42160 = (state_42169[(2)]);var state_42169__$1 = state_42169;var statearr_42188_42217 = state_42169__$1;(statearr_42188_42217[(2)] = inst_42160);
(statearr_42188_42217[(1)] = (9));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (2)))
{var state_42169__$1 = state_42169;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42169__$1,(4),in$);
} else
{if((state_val_42170 === (19)))
{var inst_42155 = (state_42169[(2)]);var state_42169__$1 = state_42169;var statearr_42189_42218 = state_42169__$1;(statearr_42189_42218[(2)] = inst_42155);
(statearr_42189_42218[(1)] = (16));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (11)))
{var inst_42140 = (state_42169[(7)]);var inst_42126 = (state_42169[(8)]);var inst_42140__$1 = cljs.core.seq(inst_42126);var state_42169__$1 = (function (){var statearr_42190 = state_42169;(statearr_42190[(7)] = inst_42140__$1);
return statearr_42190;
})();if(inst_42140__$1)
{var statearr_42191_42219 = state_42169__$1;(statearr_42191_42219[(1)] = (14));
} else
{var statearr_42192_42220 = state_42169__$1;(statearr_42192_42220[(1)] = (15));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (9)))
{var inst_42162 = (state_42169[(2)]);var state_42169__$1 = (function (){var statearr_42193 = state_42169;(statearr_42193[(15)] = inst_42162);
return statearr_42193;
})();var statearr_42194_42221 = state_42169__$1;(statearr_42194_42221[(2)] = null);
(statearr_42194_42221[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (5)))
{var inst_42118 = cljs.core.async.close_BANG_(out);var state_42169__$1 = state_42169;var statearr_42195_42222 = state_42169__$1;(statearr_42195_42222[(2)] = inst_42118);
(statearr_42195_42222[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (14)))
{var inst_42140 = (state_42169[(7)]);var inst_42142 = cljs.core.chunked_seq_QMARK_(inst_42140);var state_42169__$1 = state_42169;if(inst_42142)
{var statearr_42196_42223 = state_42169__$1;(statearr_42196_42223[(1)] = (17));
} else
{var statearr_42197_42224 = state_42169__$1;(statearr_42197_42224[(1)] = (18));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (16)))
{var inst_42158 = (state_42169[(2)]);var state_42169__$1 = state_42169;var statearr_42198_42225 = state_42169__$1;(statearr_42198_42225[(2)] = inst_42158);
(statearr_42198_42225[(1)] = (12));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42170 === (10)))
{var inst_42127 = (state_42169[(10)]);var inst_42129 = (state_42169[(11)]);var inst_42134 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42127,inst_42129);var state_42169__$1 = state_42169;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42169__$1,(13),out,inst_42134);
} else
{if((state_val_42170 === (18)))
{var inst_42140 = (state_42169[(7)]);var inst_42149 = cljs.core.first(inst_42140);var state_42169__$1 = state_42169;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42169__$1,(20),out,inst_42149);
} else
{if((state_val_42170 === (8)))
{var inst_42129 = (state_42169[(11)]);var inst_42128 = (state_42169[(12)]);var inst_42131 = (inst_42129 < inst_42128);var inst_42132 = inst_42131;var state_42169__$1 = state_42169;if(cljs.core.truth_(inst_42132))
{var statearr_42199_42226 = state_42169__$1;(statearr_42199_42226[(1)] = (10));
} else
{var statearr_42200_42227 = state_42169__$1;(statearr_42200_42227[(1)] = (11));
}
return cljs.core.constant$keyword$880;
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
var state_machine__5694__auto____0 = (function (){var statearr_42204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42204[(0)] = state_machine__5694__auto__);
(statearr_42204[(1)] = (1));
return statearr_42204;
});
var state_machine__5694__auto____1 = (function (state_42169){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42169);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42205){if((e42205 instanceof Object))
{var ex__5697__auto__ = e42205;var statearr_42206_42228 = state_42169;(statearr_42206_42228[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42169);
return cljs.core.constant$keyword$880;
} else
{throw e42205;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__42229 = state_42169;
state_42169 = G__42229;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42169){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_42207 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42207;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___42310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42310){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42310){
return (function (state_42289){var state_val_42290 = (state_42289[(1)]);if((state_val_42290 === (7)))
{var inst_42285 = (state_42289[(2)]);var state_42289__$1 = state_42289;var statearr_42291_42311 = state_42289__$1;(statearr_42291_42311[(2)] = inst_42285);
(statearr_42291_42311[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42290 === (1)))
{var state_42289__$1 = state_42289;var statearr_42292_42312 = state_42289__$1;(statearr_42292_42312[(2)] = null);
(statearr_42292_42312[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42290 === (4)))
{var inst_42272 = (state_42289[(7)]);var inst_42272__$1 = (state_42289[(2)]);var inst_42273 = (inst_42272__$1 == null);var state_42289__$1 = (function (){var statearr_42293 = state_42289;(statearr_42293[(7)] = inst_42272__$1);
return statearr_42293;
})();if(cljs.core.truth_(inst_42273))
{var statearr_42294_42313 = state_42289__$1;(statearr_42294_42313[(1)] = (5));
} else
{var statearr_42295_42314 = state_42289__$1;(statearr_42295_42314[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42290 === (6)))
{var inst_42272 = (state_42289[(7)]);var state_42289__$1 = state_42289;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42289__$1,(11),to,inst_42272);
} else
{if((state_val_42290 === (3)))
{var inst_42287 = (state_42289[(2)]);var state_42289__$1 = state_42289;return cljs.core.async.impl.ioc_helpers.return_chan(state_42289__$1,inst_42287);
} else
{if((state_val_42290 === (2)))
{var state_42289__$1 = state_42289;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42289__$1,(4),from);
} else
{if((state_val_42290 === (11)))
{var inst_42282 = (state_42289[(2)]);var state_42289__$1 = (function (){var statearr_42296 = state_42289;(statearr_42296[(8)] = inst_42282);
return statearr_42296;
})();var statearr_42297_42315 = state_42289__$1;(statearr_42297_42315[(2)] = null);
(statearr_42297_42315[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42290 === (9)))
{var state_42289__$1 = state_42289;var statearr_42298_42316 = state_42289__$1;(statearr_42298_42316[(2)] = null);
(statearr_42298_42316[(1)] = (10));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42290 === (5)))
{var state_42289__$1 = state_42289;if(cljs.core.truth_(close_QMARK_))
{var statearr_42299_42317 = state_42289__$1;(statearr_42299_42317[(1)] = (8));
} else
{var statearr_42300_42318 = state_42289__$1;(statearr_42300_42318[(1)] = (9));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42290 === (10)))
{var inst_42279 = (state_42289[(2)]);var state_42289__$1 = state_42289;var statearr_42301_42319 = state_42289__$1;(statearr_42301_42319[(2)] = inst_42279);
(statearr_42301_42319[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42290 === (8)))
{var inst_42276 = cljs.core.async.close_BANG_(to);var state_42289__$1 = state_42289;var statearr_42302_42320 = state_42289__$1;(statearr_42302_42320[(2)] = inst_42276);
(statearr_42302_42320[(1)] = (10));
return cljs.core.constant$keyword$880;
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
});})(c__5708__auto___42310))
;return ((function (switch__5693__auto__,c__5708__auto___42310){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42306 = [null,null,null,null,null,null,null,null,null];(statearr_42306[(0)] = state_machine__5694__auto__);
(statearr_42306[(1)] = (1));
return statearr_42306;
});
var state_machine__5694__auto____1 = (function (state_42289){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42289);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42307){if((e42307 instanceof Object))
{var ex__5697__auto__ = e42307;var statearr_42308_42321 = state_42289;(statearr_42308_42321[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42289);
return cljs.core.constant$keyword$880;
} else
{throw e42307;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__42322 = state_42289;
state_42289 = G__42322;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42289){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42310))
})();var state__5710__auto__ = (function (){var statearr_42309 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42310);
return statearr_42309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42310))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5708__auto___42409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42409,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42409,tc,fc){
return (function (state_42387){var state_val_42388 = (state_42387[(1)]);if((state_val_42388 === (7)))
{var inst_42383 = (state_42387[(2)]);var state_42387__$1 = state_42387;var statearr_42389_42410 = state_42387__$1;(statearr_42389_42410[(2)] = inst_42383);
(statearr_42389_42410[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42388 === (1)))
{var state_42387__$1 = state_42387;var statearr_42390_42411 = state_42387__$1;(statearr_42390_42411[(2)] = null);
(statearr_42390_42411[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42388 === (4)))
{var inst_42368 = (state_42387[(7)]);var inst_42368__$1 = (state_42387[(2)]);var inst_42369 = (inst_42368__$1 == null);var state_42387__$1 = (function (){var statearr_42391 = state_42387;(statearr_42391[(7)] = inst_42368__$1);
return statearr_42391;
})();if(cljs.core.truth_(inst_42369))
{var statearr_42392_42412 = state_42387__$1;(statearr_42392_42412[(1)] = (5));
} else
{var statearr_42393_42413 = state_42387__$1;(statearr_42393_42413[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42388 === (6)))
{var inst_42368 = (state_42387[(7)]);var inst_42374 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42368) : p.call(null,inst_42368));var state_42387__$1 = state_42387;if(cljs.core.truth_(inst_42374))
{var statearr_42394_42414 = state_42387__$1;(statearr_42394_42414[(1)] = (9));
} else
{var statearr_42395_42415 = state_42387__$1;(statearr_42395_42415[(1)] = (10));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42388 === (3)))
{var inst_42385 = (state_42387[(2)]);var state_42387__$1 = state_42387;return cljs.core.async.impl.ioc_helpers.return_chan(state_42387__$1,inst_42385);
} else
{if((state_val_42388 === (2)))
{var state_42387__$1 = state_42387;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42387__$1,(4),ch);
} else
{if((state_val_42388 === (11)))
{var inst_42368 = (state_42387[(7)]);var inst_42378 = (state_42387[(2)]);var state_42387__$1 = state_42387;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42387__$1,(8),inst_42378,inst_42368);
} else
{if((state_val_42388 === (9)))
{var state_42387__$1 = state_42387;var statearr_42396_42416 = state_42387__$1;(statearr_42396_42416[(2)] = tc);
(statearr_42396_42416[(1)] = (11));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42388 === (5)))
{var inst_42371 = cljs.core.async.close_BANG_(tc);var inst_42372 = cljs.core.async.close_BANG_(fc);var state_42387__$1 = (function (){var statearr_42397 = state_42387;(statearr_42397[(8)] = inst_42371);
return statearr_42397;
})();var statearr_42398_42417 = state_42387__$1;(statearr_42398_42417[(2)] = inst_42372);
(statearr_42398_42417[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42388 === (10)))
{var state_42387__$1 = state_42387;var statearr_42399_42418 = state_42387__$1;(statearr_42399_42418[(2)] = fc);
(statearr_42399_42418[(1)] = (11));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42388 === (8)))
{var inst_42380 = (state_42387[(2)]);var state_42387__$1 = (function (){var statearr_42400 = state_42387;(statearr_42400[(9)] = inst_42380);
return statearr_42400;
})();var statearr_42401_42419 = state_42387__$1;(statearr_42401_42419[(2)] = null);
(statearr_42401_42419[(1)] = (2));
return cljs.core.constant$keyword$880;
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
});})(c__5708__auto___42409,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___42409,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42405 = [null,null,null,null,null,null,null,null,null,null];(statearr_42405[(0)] = state_machine__5694__auto__);
(statearr_42405[(1)] = (1));
return statearr_42405;
});
var state_machine__5694__auto____1 = (function (state_42387){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42387);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42406){if((e42406 instanceof Object))
{var ex__5697__auto__ = e42406;var statearr_42407_42420 = state_42387;(statearr_42407_42420[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42387);
return cljs.core.constant$keyword$880;
} else
{throw e42406;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__42421 = state_42387;
state_42387 = G__42421;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42387){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42409,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_42408 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42409);
return statearr_42408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42409,tc,fc))
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
return (function (state_42468){var state_val_42469 = (state_42468[(1)]);if((state_val_42469 === (7)))
{var inst_42464 = (state_42468[(2)]);var state_42468__$1 = state_42468;var statearr_42470_42486 = state_42468__$1;(statearr_42470_42486[(2)] = inst_42464);
(statearr_42470_42486[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42469 === (6)))
{var inst_42454 = (state_42468[(7)]);var inst_42457 = (state_42468[(8)]);var inst_42461 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42454,inst_42457) : f.call(null,inst_42454,inst_42457));var inst_42454__$1 = inst_42461;var state_42468__$1 = (function (){var statearr_42471 = state_42468;(statearr_42471[(7)] = inst_42454__$1);
return statearr_42471;
})();var statearr_42472_42487 = state_42468__$1;(statearr_42472_42487[(2)] = null);
(statearr_42472_42487[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42469 === (5)))
{var inst_42454 = (state_42468[(7)]);var state_42468__$1 = state_42468;var statearr_42473_42488 = state_42468__$1;(statearr_42473_42488[(2)] = inst_42454);
(statearr_42473_42488[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42469 === (4)))
{var inst_42457 = (state_42468[(8)]);var inst_42457__$1 = (state_42468[(2)]);var inst_42458 = (inst_42457__$1 == null);var state_42468__$1 = (function (){var statearr_42474 = state_42468;(statearr_42474[(8)] = inst_42457__$1);
return statearr_42474;
})();if(cljs.core.truth_(inst_42458))
{var statearr_42475_42489 = state_42468__$1;(statearr_42475_42489[(1)] = (5));
} else
{var statearr_42476_42490 = state_42468__$1;(statearr_42476_42490[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42469 === (3)))
{var inst_42466 = (state_42468[(2)]);var state_42468__$1 = state_42468;return cljs.core.async.impl.ioc_helpers.return_chan(state_42468__$1,inst_42466);
} else
{if((state_val_42469 === (2)))
{var state_42468__$1 = state_42468;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42468__$1,(4),ch);
} else
{if((state_val_42469 === (1)))
{var inst_42454 = init;var state_42468__$1 = (function (){var statearr_42477 = state_42468;(statearr_42477[(7)] = inst_42454);
return statearr_42477;
})();var statearr_42478_42491 = state_42468__$1;(statearr_42478_42491[(2)] = null);
(statearr_42478_42491[(1)] = (2));
return cljs.core.constant$keyword$880;
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
var state_machine__5694__auto____0 = (function (){var statearr_42482 = [null,null,null,null,null,null,null,null,null];(statearr_42482[(0)] = state_machine__5694__auto__);
(statearr_42482[(1)] = (1));
return statearr_42482;
});
var state_machine__5694__auto____1 = (function (state_42468){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42468);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42483){if((e42483 instanceof Object))
{var ex__5697__auto__ = e42483;var statearr_42484_42492 = state_42468;(statearr_42484_42492[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42468);
return cljs.core.constant$keyword$880;
} else
{throw e42483;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__42493 = state_42468;
state_42468 = G__42493;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42468){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_42485 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42485;
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
return (function (state_42555){var state_val_42556 = (state_42555[(1)]);if((state_val_42556 === (7)))
{var inst_42536 = (state_42555[(7)]);var inst_42541 = (state_42555[(2)]);var inst_42542 = cljs.core.next(inst_42536);var inst_42536__$1 = inst_42542;var state_42555__$1 = (function (){var statearr_42557 = state_42555;(statearr_42557[(7)] = inst_42536__$1);
(statearr_42557[(8)] = inst_42541);
return statearr_42557;
})();var statearr_42558_42576 = state_42555__$1;(statearr_42558_42576[(2)] = null);
(statearr_42558_42576[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42556 === (1)))
{var inst_42535 = cljs.core.seq(coll);var inst_42536 = inst_42535;var state_42555__$1 = (function (){var statearr_42559 = state_42555;(statearr_42559[(7)] = inst_42536);
return statearr_42559;
})();var statearr_42560_42577 = state_42555__$1;(statearr_42560_42577[(2)] = null);
(statearr_42560_42577[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42556 === (4)))
{var inst_42536 = (state_42555[(7)]);var inst_42539 = cljs.core.first(inst_42536);var state_42555__$1 = state_42555;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42555__$1,(7),ch,inst_42539);
} else
{if((state_val_42556 === (6)))
{var inst_42551 = (state_42555[(2)]);var state_42555__$1 = state_42555;var statearr_42561_42578 = state_42555__$1;(statearr_42561_42578[(2)] = inst_42551);
(statearr_42561_42578[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42556 === (3)))
{var inst_42553 = (state_42555[(2)]);var state_42555__$1 = state_42555;return cljs.core.async.impl.ioc_helpers.return_chan(state_42555__$1,inst_42553);
} else
{if((state_val_42556 === (2)))
{var inst_42536 = (state_42555[(7)]);var state_42555__$1 = state_42555;if(cljs.core.truth_(inst_42536))
{var statearr_42562_42579 = state_42555__$1;(statearr_42562_42579[(1)] = (4));
} else
{var statearr_42563_42580 = state_42555__$1;(statearr_42563_42580[(1)] = (5));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42556 === (9)))
{var state_42555__$1 = state_42555;var statearr_42564_42581 = state_42555__$1;(statearr_42564_42581[(2)] = null);
(statearr_42564_42581[(1)] = (10));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42556 === (5)))
{var state_42555__$1 = state_42555;if(cljs.core.truth_(close_QMARK_))
{var statearr_42565_42582 = state_42555__$1;(statearr_42565_42582[(1)] = (8));
} else
{var statearr_42566_42583 = state_42555__$1;(statearr_42566_42583[(1)] = (9));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42556 === (10)))
{var inst_42549 = (state_42555[(2)]);var state_42555__$1 = state_42555;var statearr_42567_42584 = state_42555__$1;(statearr_42567_42584[(2)] = inst_42549);
(statearr_42567_42584[(1)] = (6));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42556 === (8)))
{var inst_42546 = cljs.core.async.close_BANG_(ch);var state_42555__$1 = state_42555;var statearr_42568_42585 = state_42555__$1;(statearr_42568_42585[(2)] = inst_42546);
(statearr_42568_42585[(1)] = (10));
return cljs.core.constant$keyword$880;
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
var state_machine__5694__auto____0 = (function (){var statearr_42572 = [null,null,null,null,null,null,null,null,null];(statearr_42572[(0)] = state_machine__5694__auto__);
(statearr_42572[(1)] = (1));
return statearr_42572;
});
var state_machine__5694__auto____1 = (function (state_42555){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42555);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42573){if((e42573 instanceof Object))
{var ex__5697__auto__ = e42573;var statearr_42574_42586 = state_42555;(statearr_42574_42586[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42555);
return cljs.core.constant$keyword$880;
} else
{throw e42573;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__42587 = state_42555;
state_42555 = G__42587;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42555){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_42575 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42575;
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
cljs.core.async.Mux = (function (){var obj42589 = {};return obj42589;
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
cljs.core.async.Mult = (function (){var obj42591 = {};return obj42591;
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
cljs.core.async.mult = (function mult(ch){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var m = (function (){if(typeof cljs.core.async.t42815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42815 = (function (cs,ch,mult,meta42816){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta42816 = meta42816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42815.cljs$lang$type = true;
cljs.core.async.t42815.cljs$lang$ctorStr = "cljs.core.async/t42815";
cljs.core.async.t42815.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t42815");
});})(cs))
;
cljs.core.async.t42815.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t42815.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t42815.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t42815.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return null;
});})(cs))
;
cljs.core.async.t42815.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t42815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42817){var self__ = this;
var _42817__$1 = this;return self__.meta42816;
});})(cs))
;
cljs.core.async.t42815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42817,meta42816__$1){var self__ = this;
var _42817__$1 = this;return (new cljs.core.async.t42815(self__.cs,self__.ch,self__.mult,meta42816__$1));
});})(cs))
;
cljs.core.async.__GT_t42815 = ((function (cs){
return (function __GT_t42815(cs__$1,ch__$1,mult__$1,meta42816){return (new cljs.core.async.t42815(cs__$1,ch__$1,mult__$1,meta42816));
});})(cs))
;
}
return (new cljs.core.async.t42815(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___43038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43038,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43038,cs,m,dchan,dctr,done){
return (function (state_42952){var state_val_42953 = (state_42952[(1)]);if((state_val_42953 === (7)))
{var inst_42948 = (state_42952[(2)]);var state_42952__$1 = state_42952;var statearr_42954_43039 = state_42952__$1;(statearr_42954_43039[(2)] = inst_42948);
(statearr_42954_43039[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (20)))
{var inst_42849 = (state_42952[(7)]);var inst_42859 = cljs.core.first(inst_42849);var inst_42860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42859,(0),null);var inst_42861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42859,(1),null);var state_42952__$1 = (function (){var statearr_42955 = state_42952;(statearr_42955[(8)] = inst_42860);
return statearr_42955;
})();if(cljs.core.truth_(inst_42861))
{var statearr_42956_43040 = state_42952__$1;(statearr_42956_43040[(1)] = (22));
} else
{var statearr_42957_43041 = state_42952__$1;(statearr_42957_43041[(1)] = (23));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (27)))
{var inst_42889 = (state_42952[(9)]);var inst_42891 = (state_42952[(10)]);var inst_42896 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42889,inst_42891);var state_42952__$1 = (function (){var statearr_42958 = state_42952;(statearr_42958[(11)] = inst_42896);
return statearr_42958;
})();var statearr_42959_43042 = state_42952__$1;(statearr_42959_43042[(2)] = null);
(statearr_42959_43042[(1)] = (32));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (1)))
{var state_42952__$1 = state_42952;var statearr_42960_43043 = state_42952__$1;(statearr_42960_43043[(2)] = null);
(statearr_42960_43043[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (24)))
{var inst_42849 = (state_42952[(7)]);var inst_42866 = (state_42952[(2)]);var inst_42867 = cljs.core.next(inst_42849);var inst_42829 = inst_42867;var inst_42830 = null;var inst_42831 = (0);var inst_42832 = (0);var state_42952__$1 = (function (){var statearr_42961 = state_42952;(statearr_42961[(12)] = inst_42831);
(statearr_42961[(13)] = inst_42866);
(statearr_42961[(14)] = inst_42832);
(statearr_42961[(15)] = inst_42830);
(statearr_42961[(16)] = inst_42829);
return statearr_42961;
})();var statearr_42962_43044 = state_42952__$1;(statearr_42962_43044[(2)] = null);
(statearr_42962_43044[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (39)))
{var inst_42909 = (state_42952[(17)]);var inst_42927 = (state_42952[(2)]);var inst_42928 = cljs.core.next(inst_42909);var inst_42888 = inst_42928;var inst_42889 = null;var inst_42890 = (0);var inst_42891 = (0);var state_42952__$1 = (function (){var statearr_42966 = state_42952;(statearr_42966[(18)] = inst_42927);
(statearr_42966[(9)] = inst_42889);
(statearr_42966[(10)] = inst_42891);
(statearr_42966[(19)] = inst_42890);
(statearr_42966[(20)] = inst_42888);
return statearr_42966;
})();var statearr_42967_43045 = state_42952__$1;(statearr_42967_43045[(2)] = null);
(statearr_42967_43045[(1)] = (25));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (4)))
{var inst_42820 = (state_42952[(21)]);var inst_42820__$1 = (state_42952[(2)]);var inst_42821 = (inst_42820__$1 == null);var state_42952__$1 = (function (){var statearr_42968 = state_42952;(statearr_42968[(21)] = inst_42820__$1);
return statearr_42968;
})();if(cljs.core.truth_(inst_42821))
{var statearr_42969_43046 = state_42952__$1;(statearr_42969_43046[(1)] = (5));
} else
{var statearr_42970_43047 = state_42952__$1;(statearr_42970_43047[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (15)))
{var inst_42831 = (state_42952[(12)]);var inst_42832 = (state_42952[(14)]);var inst_42830 = (state_42952[(15)]);var inst_42829 = (state_42952[(16)]);var inst_42845 = (state_42952[(2)]);var inst_42846 = (inst_42832 + (1));var tmp42963 = inst_42831;var tmp42964 = inst_42830;var tmp42965 = inst_42829;var inst_42829__$1 = tmp42965;var inst_42830__$1 = tmp42964;var inst_42831__$1 = tmp42963;var inst_42832__$1 = inst_42846;var state_42952__$1 = (function (){var statearr_42971 = state_42952;(statearr_42971[(12)] = inst_42831__$1);
(statearr_42971[(22)] = inst_42845);
(statearr_42971[(14)] = inst_42832__$1);
(statearr_42971[(15)] = inst_42830__$1);
(statearr_42971[(16)] = inst_42829__$1);
return statearr_42971;
})();var statearr_42972_43048 = state_42952__$1;(statearr_42972_43048[(2)] = null);
(statearr_42972_43048[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (21)))
{var inst_42870 = (state_42952[(2)]);var state_42952__$1 = state_42952;var statearr_42973_43049 = state_42952__$1;(statearr_42973_43049[(2)] = inst_42870);
(statearr_42973_43049[(1)] = (18));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (31)))
{var inst_42896 = (state_42952[(11)]);var inst_42897 = (state_42952[(2)]);var inst_42898 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_42899 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42896);var state_42952__$1 = (function (){var statearr_42974 = state_42952;(statearr_42974[(23)] = inst_42898);
(statearr_42974[(24)] = inst_42897);
return statearr_42974;
})();var statearr_42975_43050 = state_42952__$1;(statearr_42975_43050[(2)] = inst_42899);
cljs.core.async.impl.ioc_helpers.process_exception(state_42952__$1);
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (32)))
{var inst_42896 = (state_42952[(11)]);var inst_42820 = (state_42952[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42952,(31),Object,null,(30));var inst_42903 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42896,inst_42820,done);var state_42952__$1 = state_42952;var statearr_42976_43051 = state_42952__$1;(statearr_42976_43051[(2)] = inst_42903);
cljs.core.async.impl.ioc_helpers.process_exception(state_42952__$1);
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (40)))
{var inst_42918 = (state_42952[(25)]);var inst_42919 = (state_42952[(2)]);var inst_42920 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_42921 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42918);var state_42952__$1 = (function (){var statearr_42977 = state_42952;(statearr_42977[(26)] = inst_42920);
(statearr_42977[(27)] = inst_42919);
return statearr_42977;
})();var statearr_42978_43052 = state_42952__$1;(statearr_42978_43052[(2)] = inst_42921);
cljs.core.async.impl.ioc_helpers.process_exception(state_42952__$1);
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (33)))
{var inst_42909 = (state_42952[(17)]);var inst_42911 = cljs.core.chunked_seq_QMARK_(inst_42909);var state_42952__$1 = state_42952;if(inst_42911)
{var statearr_42979_43053 = state_42952__$1;(statearr_42979_43053[(1)] = (36));
} else
{var statearr_42980_43054 = state_42952__$1;(statearr_42980_43054[(1)] = (37));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (13)))
{var inst_42839 = (state_42952[(28)]);var inst_42842 = cljs.core.async.close_BANG_(inst_42839);var state_42952__$1 = state_42952;var statearr_42981_43055 = state_42952__$1;(statearr_42981_43055[(2)] = inst_42842);
(statearr_42981_43055[(1)] = (15));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (22)))
{var inst_42860 = (state_42952[(8)]);var inst_42863 = cljs.core.async.close_BANG_(inst_42860);var state_42952__$1 = state_42952;var statearr_42982_43056 = state_42952__$1;(statearr_42982_43056[(2)] = inst_42863);
(statearr_42982_43056[(1)] = (24));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (36)))
{var inst_42909 = (state_42952[(17)]);var inst_42913 = cljs.core.chunk_first(inst_42909);var inst_42914 = cljs.core.chunk_rest(inst_42909);var inst_42915 = cljs.core.count(inst_42913);var inst_42888 = inst_42914;var inst_42889 = inst_42913;var inst_42890 = inst_42915;var inst_42891 = (0);var state_42952__$1 = (function (){var statearr_42983 = state_42952;(statearr_42983[(9)] = inst_42889);
(statearr_42983[(10)] = inst_42891);
(statearr_42983[(19)] = inst_42890);
(statearr_42983[(20)] = inst_42888);
return statearr_42983;
})();var statearr_42984_43057 = state_42952__$1;(statearr_42984_43057[(2)] = null);
(statearr_42984_43057[(1)] = (25));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (41)))
{var inst_42918 = (state_42952[(25)]);var inst_42820 = (state_42952[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42952,(40),Object,null,(39));var inst_42925 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42918,inst_42820,done);var state_42952__$1 = state_42952;var statearr_42985_43058 = state_42952__$1;(statearr_42985_43058[(2)] = inst_42925);
cljs.core.async.impl.ioc_helpers.process_exception(state_42952__$1);
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (43)))
{var state_42952__$1 = state_42952;var statearr_42986_43059 = state_42952__$1;(statearr_42986_43059[(2)] = null);
(statearr_42986_43059[(1)] = (44));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (29)))
{var inst_42936 = (state_42952[(2)]);var state_42952__$1 = state_42952;var statearr_42987_43060 = state_42952__$1;(statearr_42987_43060[(2)] = inst_42936);
(statearr_42987_43060[(1)] = (26));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (44)))
{var inst_42945 = (state_42952[(2)]);var state_42952__$1 = (function (){var statearr_42988 = state_42952;(statearr_42988[(29)] = inst_42945);
return statearr_42988;
})();var statearr_42989_43061 = state_42952__$1;(statearr_42989_43061[(2)] = null);
(statearr_42989_43061[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (6)))
{var inst_42880 = (state_42952[(30)]);var inst_42879 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_42880__$1 = cljs.core.keys(inst_42879);var inst_42881 = cljs.core.count(inst_42880__$1);var inst_42882 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_42881) : cljs.core.reset_BANG_.call(null,dctr,inst_42881));var inst_42887 = cljs.core.seq(inst_42880__$1);var inst_42888 = inst_42887;var inst_42889 = null;var inst_42890 = (0);var inst_42891 = (0);var state_42952__$1 = (function (){var statearr_42990 = state_42952;(statearr_42990[(30)] = inst_42880__$1);
(statearr_42990[(9)] = inst_42889);
(statearr_42990[(10)] = inst_42891);
(statearr_42990[(19)] = inst_42890);
(statearr_42990[(31)] = inst_42882);
(statearr_42990[(20)] = inst_42888);
return statearr_42990;
})();var statearr_42991_43062 = state_42952__$1;(statearr_42991_43062[(2)] = null);
(statearr_42991_43062[(1)] = (25));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (28)))
{var inst_42909 = (state_42952[(17)]);var inst_42888 = (state_42952[(20)]);var inst_42909__$1 = cljs.core.seq(inst_42888);var state_42952__$1 = (function (){var statearr_42992 = state_42952;(statearr_42992[(17)] = inst_42909__$1);
return statearr_42992;
})();if(inst_42909__$1)
{var statearr_42993_43063 = state_42952__$1;(statearr_42993_43063[(1)] = (33));
} else
{var statearr_42994_43064 = state_42952__$1;(statearr_42994_43064[(1)] = (34));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (25)))
{var inst_42891 = (state_42952[(10)]);var inst_42890 = (state_42952[(19)]);var inst_42893 = (inst_42891 < inst_42890);var inst_42894 = inst_42893;var state_42952__$1 = state_42952;if(cljs.core.truth_(inst_42894))
{var statearr_42995_43065 = state_42952__$1;(statearr_42995_43065[(1)] = (27));
} else
{var statearr_42996_43066 = state_42952__$1;(statearr_42996_43066[(1)] = (28));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (34)))
{var state_42952__$1 = state_42952;var statearr_42997_43067 = state_42952__$1;(statearr_42997_43067[(2)] = null);
(statearr_42997_43067[(1)] = (35));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (17)))
{var state_42952__$1 = state_42952;var statearr_42998_43068 = state_42952__$1;(statearr_42998_43068[(2)] = null);
(statearr_42998_43068[(1)] = (18));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (3)))
{var inst_42950 = (state_42952[(2)]);var state_42952__$1 = state_42952;return cljs.core.async.impl.ioc_helpers.return_chan(state_42952__$1,inst_42950);
} else
{if((state_val_42953 === (12)))
{var inst_42875 = (state_42952[(2)]);var state_42952__$1 = state_42952;var statearr_42999_43069 = state_42952__$1;(statearr_42999_43069[(2)] = inst_42875);
(statearr_42999_43069[(1)] = (9));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (2)))
{var state_42952__$1 = state_42952;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42952__$1,(4),ch);
} else
{if((state_val_42953 === (23)))
{var state_42952__$1 = state_42952;var statearr_43000_43070 = state_42952__$1;(statearr_43000_43070[(2)] = null);
(statearr_43000_43070[(1)] = (24));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (35)))
{var inst_42934 = (state_42952[(2)]);var state_42952__$1 = state_42952;var statearr_43001_43071 = state_42952__$1;(statearr_43001_43071[(2)] = inst_42934);
(statearr_43001_43071[(1)] = (29));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (19)))
{var inst_42849 = (state_42952[(7)]);var inst_42853 = cljs.core.chunk_first(inst_42849);var inst_42854 = cljs.core.chunk_rest(inst_42849);var inst_42855 = cljs.core.count(inst_42853);var inst_42829 = inst_42854;var inst_42830 = inst_42853;var inst_42831 = inst_42855;var inst_42832 = (0);var state_42952__$1 = (function (){var statearr_43002 = state_42952;(statearr_43002[(12)] = inst_42831);
(statearr_43002[(14)] = inst_42832);
(statearr_43002[(15)] = inst_42830);
(statearr_43002[(16)] = inst_42829);
return statearr_43002;
})();var statearr_43003_43072 = state_42952__$1;(statearr_43003_43072[(2)] = null);
(statearr_43003_43072[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (11)))
{var inst_42849 = (state_42952[(7)]);var inst_42829 = (state_42952[(16)]);var inst_42849__$1 = cljs.core.seq(inst_42829);var state_42952__$1 = (function (){var statearr_43004 = state_42952;(statearr_43004[(7)] = inst_42849__$1);
return statearr_43004;
})();if(inst_42849__$1)
{var statearr_43005_43073 = state_42952__$1;(statearr_43005_43073[(1)] = (16));
} else
{var statearr_43006_43074 = state_42952__$1;(statearr_43006_43074[(1)] = (17));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (9)))
{var inst_42877 = (state_42952[(2)]);var state_42952__$1 = state_42952;var statearr_43007_43075 = state_42952__$1;(statearr_43007_43075[(2)] = inst_42877);
(statearr_43007_43075[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (5)))
{var inst_42827 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_42828 = cljs.core.seq(inst_42827);var inst_42829 = inst_42828;var inst_42830 = null;var inst_42831 = (0);var inst_42832 = (0);var state_42952__$1 = (function (){var statearr_43008 = state_42952;(statearr_43008[(12)] = inst_42831);
(statearr_43008[(14)] = inst_42832);
(statearr_43008[(15)] = inst_42830);
(statearr_43008[(16)] = inst_42829);
return statearr_43008;
})();var statearr_43009_43076 = state_42952__$1;(statearr_43009_43076[(2)] = null);
(statearr_43009_43076[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (14)))
{var state_42952__$1 = state_42952;var statearr_43010_43077 = state_42952__$1;(statearr_43010_43077[(2)] = null);
(statearr_43010_43077[(1)] = (15));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (45)))
{var inst_42942 = (state_42952[(2)]);var state_42952__$1 = state_42952;var statearr_43011_43078 = state_42952__$1;(statearr_43011_43078[(2)] = inst_42942);
(statearr_43011_43078[(1)] = (44));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (26)))
{var inst_42880 = (state_42952[(30)]);var inst_42938 = (state_42952[(2)]);var inst_42939 = cljs.core.seq(inst_42880);var state_42952__$1 = (function (){var statearr_43012 = state_42952;(statearr_43012[(32)] = inst_42938);
return statearr_43012;
})();if(inst_42939)
{var statearr_43013_43079 = state_42952__$1;(statearr_43013_43079[(1)] = (42));
} else
{var statearr_43014_43080 = state_42952__$1;(statearr_43014_43080[(1)] = (43));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (16)))
{var inst_42849 = (state_42952[(7)]);var inst_42851 = cljs.core.chunked_seq_QMARK_(inst_42849);var state_42952__$1 = state_42952;if(inst_42851)
{var statearr_43018_43081 = state_42952__$1;(statearr_43018_43081[(1)] = (19));
} else
{var statearr_43019_43082 = state_42952__$1;(statearr_43019_43082[(1)] = (20));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (38)))
{var inst_42931 = (state_42952[(2)]);var state_42952__$1 = state_42952;var statearr_43020_43083 = state_42952__$1;(statearr_43020_43083[(2)] = inst_42931);
(statearr_43020_43083[(1)] = (35));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (30)))
{var inst_42889 = (state_42952[(9)]);var inst_42891 = (state_42952[(10)]);var inst_42890 = (state_42952[(19)]);var inst_42888 = (state_42952[(20)]);var inst_42905 = (state_42952[(2)]);var inst_42906 = (inst_42891 + (1));var tmp43015 = inst_42889;var tmp43016 = inst_42890;var tmp43017 = inst_42888;var inst_42888__$1 = tmp43017;var inst_42889__$1 = tmp43015;var inst_42890__$1 = tmp43016;var inst_42891__$1 = inst_42906;var state_42952__$1 = (function (){var statearr_43021 = state_42952;(statearr_43021[(33)] = inst_42905);
(statearr_43021[(9)] = inst_42889__$1);
(statearr_43021[(10)] = inst_42891__$1);
(statearr_43021[(19)] = inst_42890__$1);
(statearr_43021[(20)] = inst_42888__$1);
return statearr_43021;
})();var statearr_43022_43084 = state_42952__$1;(statearr_43022_43084[(2)] = null);
(statearr_43022_43084[(1)] = (25));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (10)))
{var inst_42832 = (state_42952[(14)]);var inst_42830 = (state_42952[(15)]);var inst_42838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42830,inst_42832);var inst_42839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42838,(0),null);var inst_42840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42838,(1),null);var state_42952__$1 = (function (){var statearr_43023 = state_42952;(statearr_43023[(28)] = inst_42839);
return statearr_43023;
})();if(cljs.core.truth_(inst_42840))
{var statearr_43024_43085 = state_42952__$1;(statearr_43024_43085[(1)] = (13));
} else
{var statearr_43025_43086 = state_42952__$1;(statearr_43025_43086[(1)] = (14));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (18)))
{var inst_42873 = (state_42952[(2)]);var state_42952__$1 = state_42952;var statearr_43026_43087 = state_42952__$1;(statearr_43026_43087[(2)] = inst_42873);
(statearr_43026_43087[(1)] = (12));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (42)))
{var state_42952__$1 = state_42952;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42952__$1,(45),dchan);
} else
{if((state_val_42953 === (37)))
{var inst_42909 = (state_42952[(17)]);var inst_42918 = cljs.core.first(inst_42909);var state_42952__$1 = (function (){var statearr_43027 = state_42952;(statearr_43027[(25)] = inst_42918);
return statearr_43027;
})();var statearr_43028_43088 = state_42952__$1;(statearr_43028_43088[(2)] = null);
(statearr_43028_43088[(1)] = (41));
return cljs.core.constant$keyword$880;
} else
{if((state_val_42953 === (8)))
{var inst_42831 = (state_42952[(12)]);var inst_42832 = (state_42952[(14)]);var inst_42834 = (inst_42832 < inst_42831);var inst_42835 = inst_42834;var state_42952__$1 = state_42952;if(cljs.core.truth_(inst_42835))
{var statearr_43029_43089 = state_42952__$1;(statearr_43029_43089[(1)] = (10));
} else
{var statearr_43030_43090 = state_42952__$1;(statearr_43030_43090[(1)] = (11));
}
return cljs.core.constant$keyword$880;
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
});})(c__5708__auto___43038,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___43038,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43034[(0)] = state_machine__5694__auto__);
(statearr_43034[(1)] = (1));
return statearr_43034;
});
var state_machine__5694__auto____1 = (function (state_42952){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42952);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43035){if((e43035 instanceof Object))
{var ex__5697__auto__ = e43035;var statearr_43036_43091 = state_42952;(statearr_43036_43091[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42952);
return cljs.core.constant$keyword$880;
} else
{throw e43035;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__43092 = state_42952;
state_42952 = G__43092;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42952){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43038,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_43037 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43038);
return statearr_43037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43038,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj43094 = {};return obj43094;
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
cljs.core.async.mix = (function mix(out){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$887,null,cljs.core.constant$keyword$888,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$889);var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$888) : cljs.core.atom.call(null,cljs.core.constant$keyword$888));var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));var solos = pick(cljs.core.constant$keyword$889,chs);var pauses = pick(cljs.core.constant$keyword$887,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$890,solos,cljs.core.constant$keyword$891,pick(cljs.core.constant$keyword$888,chs),cljs.core.constant$keyword$892,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$887)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t43204 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43204 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43205){
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
this.meta43205 = meta43205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43204.cljs$lang$type = true;
cljs.core.async.t43204.cljs$lang$ctorStr = "cljs.core.async/t43204";
cljs.core.async.t43204.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t43204");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43204.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t43204.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43204.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43204.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43204.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43204.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43204.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43204.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43206){var self__ = this;
var _43206__$1 = this;return self__.meta43205;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43206,meta43205__$1){var self__ = this;
var _43206__$1 = this;return (new cljs.core.async.t43204(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43205__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t43204 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t43204(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43205){return (new cljs.core.async.t43204(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43205));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t43204(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___43313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43271){var state_val_43272 = (state_43271[(1)]);if((state_val_43272 === (7)))
{var inst_43220 = (state_43271[(7)]);var inst_43225 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43220);var state_43271__$1 = state_43271;var statearr_43273_43314 = state_43271__$1;(statearr_43273_43314[(2)] = inst_43225);
(statearr_43273_43314[(1)] = (9));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (20)))
{var inst_43235 = (state_43271[(8)]);var state_43271__$1 = state_43271;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43271__$1,(23),out,inst_43235);
} else
{if((state_val_43272 === (1)))
{var inst_43210 = (state_43271[(9)]);var inst_43210__$1 = calc_state();var inst_43211 = cljs.core.seq_QMARK_(inst_43210__$1);var state_43271__$1 = (function (){var statearr_43274 = state_43271;(statearr_43274[(9)] = inst_43210__$1);
return statearr_43274;
})();if(inst_43211)
{var statearr_43275_43315 = state_43271__$1;(statearr_43275_43315[(1)] = (2));
} else
{var statearr_43276_43316 = state_43271__$1;(statearr_43276_43316[(1)] = (3));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (4)))
{var inst_43210 = (state_43271[(9)]);var inst_43216 = (state_43271[(2)]);var inst_43217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43216,cljs.core.constant$keyword$892);var inst_43218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43216,cljs.core.constant$keyword$891);var inst_43219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43216,cljs.core.constant$keyword$890);var inst_43220 = inst_43210;var state_43271__$1 = (function (){var statearr_43277 = state_43271;(statearr_43277[(10)] = inst_43217);
(statearr_43277[(11)] = inst_43218);
(statearr_43277[(12)] = inst_43219);
(statearr_43277[(7)] = inst_43220);
return statearr_43277;
})();var statearr_43278_43317 = state_43271__$1;(statearr_43278_43317[(2)] = null);
(statearr_43278_43317[(1)] = (5));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (15)))
{var state_43271__$1 = state_43271;var statearr_43279_43318 = state_43271__$1;(statearr_43279_43318[(2)] = null);
(statearr_43279_43318[(1)] = (16));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (21)))
{var state_43271__$1 = state_43271;var statearr_43280_43319 = state_43271__$1;(statearr_43280_43319[(2)] = null);
(statearr_43280_43319[(1)] = (22));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (13)))
{var inst_43267 = (state_43271[(2)]);var state_43271__$1 = state_43271;var statearr_43281_43320 = state_43271__$1;(statearr_43281_43320[(2)] = inst_43267);
(statearr_43281_43320[(1)] = (6));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (22)))
{var inst_43228 = (state_43271[(13)]);var inst_43264 = (state_43271[(2)]);var inst_43220 = inst_43228;var state_43271__$1 = (function (){var statearr_43282 = state_43271;(statearr_43282[(7)] = inst_43220);
(statearr_43282[(14)] = inst_43264);
return statearr_43282;
})();var statearr_43283_43321 = state_43271__$1;(statearr_43283_43321[(2)] = null);
(statearr_43283_43321[(1)] = (5));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (6)))
{var inst_43269 = (state_43271[(2)]);var state_43271__$1 = state_43271;return cljs.core.async.impl.ioc_helpers.return_chan(state_43271__$1,inst_43269);
} else
{if((state_val_43272 === (17)))
{var inst_43250 = (state_43271[(15)]);var state_43271__$1 = state_43271;var statearr_43284_43322 = state_43271__$1;(statearr_43284_43322[(2)] = inst_43250);
(statearr_43284_43322[(1)] = (19));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (3)))
{var inst_43210 = (state_43271[(9)]);var state_43271__$1 = state_43271;var statearr_43285_43323 = state_43271__$1;(statearr_43285_43323[(2)] = inst_43210);
(statearr_43285_43323[(1)] = (4));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (12)))
{var inst_43250 = (state_43271[(15)]);var inst_43236 = (state_43271[(16)]);var inst_43231 = (state_43271[(17)]);var inst_43250__$1 = (inst_43231.cljs$core$IFn$_invoke$arity$1 ? inst_43231.cljs$core$IFn$_invoke$arity$1(inst_43236) : inst_43231.call(null,inst_43236));var state_43271__$1 = (function (){var statearr_43286 = state_43271;(statearr_43286[(15)] = inst_43250__$1);
return statearr_43286;
})();if(cljs.core.truth_(inst_43250__$1))
{var statearr_43287_43324 = state_43271__$1;(statearr_43287_43324[(1)] = (17));
} else
{var statearr_43288_43325 = state_43271__$1;(statearr_43288_43325[(1)] = (18));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (2)))
{var inst_43210 = (state_43271[(9)]);var inst_43213 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43210);var state_43271__$1 = state_43271;var statearr_43289_43326 = state_43271__$1;(statearr_43289_43326[(2)] = inst_43213);
(statearr_43289_43326[(1)] = (4));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (23)))
{var inst_43261 = (state_43271[(2)]);var state_43271__$1 = state_43271;var statearr_43290_43327 = state_43271__$1;(statearr_43290_43327[(2)] = inst_43261);
(statearr_43290_43327[(1)] = (22));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (19)))
{var inst_43258 = (state_43271[(2)]);var state_43271__$1 = state_43271;if(cljs.core.truth_(inst_43258))
{var statearr_43291_43328 = state_43271__$1;(statearr_43291_43328[(1)] = (20));
} else
{var statearr_43292_43329 = state_43271__$1;(statearr_43292_43329[(1)] = (21));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (11)))
{var inst_43235 = (state_43271[(8)]);var inst_43241 = (inst_43235 == null);var state_43271__$1 = state_43271;if(cljs.core.truth_(inst_43241))
{var statearr_43293_43330 = state_43271__$1;(statearr_43293_43330[(1)] = (14));
} else
{var statearr_43294_43331 = state_43271__$1;(statearr_43294_43331[(1)] = (15));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (9)))
{var inst_43228 = (state_43271[(13)]);var inst_43228__$1 = (state_43271[(2)]);var inst_43229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43228__$1,cljs.core.constant$keyword$892);var inst_43230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43228__$1,cljs.core.constant$keyword$891);var inst_43231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43228__$1,cljs.core.constant$keyword$890);var state_43271__$1 = (function (){var statearr_43295 = state_43271;(statearr_43295[(13)] = inst_43228__$1);
(statearr_43295[(18)] = inst_43230);
(statearr_43295[(17)] = inst_43231);
return statearr_43295;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_43271__$1,(10),inst_43229);
} else
{if((state_val_43272 === (5)))
{var inst_43220 = (state_43271[(7)]);var inst_43223 = cljs.core.seq_QMARK_(inst_43220);var state_43271__$1 = state_43271;if(inst_43223)
{var statearr_43296_43332 = state_43271__$1;(statearr_43296_43332[(1)] = (7));
} else
{var statearr_43297_43333 = state_43271__$1;(statearr_43297_43333[(1)] = (8));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (14)))
{var inst_43236 = (state_43271[(16)]);var inst_43243 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43236);var state_43271__$1 = state_43271;var statearr_43298_43334 = state_43271__$1;(statearr_43298_43334[(2)] = inst_43243);
(statearr_43298_43334[(1)] = (16));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (16)))
{var inst_43246 = (state_43271[(2)]);var inst_43247 = calc_state();var inst_43220 = inst_43247;var state_43271__$1 = (function (){var statearr_43299 = state_43271;(statearr_43299[(19)] = inst_43246);
(statearr_43299[(7)] = inst_43220);
return statearr_43299;
})();var statearr_43300_43335 = state_43271__$1;(statearr_43300_43335[(2)] = null);
(statearr_43300_43335[(1)] = (5));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (10)))
{var inst_43236 = (state_43271[(16)]);var inst_43235 = (state_43271[(8)]);var inst_43234 = (state_43271[(2)]);var inst_43235__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43234,(0),null);var inst_43236__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43234,(1),null);var inst_43237 = (inst_43235__$1 == null);var inst_43238 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43236__$1,change);var inst_43239 = (inst_43237) || (inst_43238);var state_43271__$1 = (function (){var statearr_43301 = state_43271;(statearr_43301[(16)] = inst_43236__$1);
(statearr_43301[(8)] = inst_43235__$1);
return statearr_43301;
})();if(cljs.core.truth_(inst_43239))
{var statearr_43302_43336 = state_43271__$1;(statearr_43302_43336[(1)] = (11));
} else
{var statearr_43303_43337 = state_43271__$1;(statearr_43303_43337[(1)] = (12));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (18)))
{var inst_43236 = (state_43271[(16)]);var inst_43230 = (state_43271[(18)]);var inst_43231 = (state_43271[(17)]);var inst_43253 = cljs.core.empty_QMARK_(inst_43231);var inst_43254 = (inst_43230.cljs$core$IFn$_invoke$arity$1 ? inst_43230.cljs$core$IFn$_invoke$arity$1(inst_43236) : inst_43230.call(null,inst_43236));var inst_43255 = cljs.core.not(inst_43254);var inst_43256 = (inst_43253) && (inst_43255);var state_43271__$1 = state_43271;var statearr_43304_43338 = state_43271__$1;(statearr_43304_43338[(2)] = inst_43256);
(statearr_43304_43338[(1)] = (19));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43272 === (8)))
{var inst_43220 = (state_43271[(7)]);var state_43271__$1 = state_43271;var statearr_43305_43339 = state_43271__$1;(statearr_43305_43339[(2)] = inst_43220);
(statearr_43305_43339[(1)] = (9));
return cljs.core.constant$keyword$880;
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
});})(c__5708__auto___43313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___43313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43309[(0)] = state_machine__5694__auto__);
(statearr_43309[(1)] = (1));
return statearr_43309;
});
var state_machine__5694__auto____1 = (function (state_43271){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43271);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43310){if((e43310 instanceof Object))
{var ex__5697__auto__ = e43310;var statearr_43311_43340 = state_43271;(statearr_43311_43340[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43271);
return cljs.core.constant$keyword$880;
} else
{throw e43310;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__43341 = state_43271;
state_43271 = G__43341;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43271){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_43312 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43313);
return statearr_43312;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj43343 = {};return obj43343;
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
return (function (p1__43344_SHARP_){if(cljs.core.truth_((p1__43344_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43344_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43344_SHARP_.call(null,topic))))
{return p1__43344_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43344_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t43469 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43469 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta43470){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta43470 = meta43470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43469.cljs$lang$type = true;
cljs.core.async.t43469.cljs$lang$ctorStr = "cljs.core.async/t43469";
cljs.core.async.t43469.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t43469");
});})(mults,ensure_mult))
;
cljs.core.async.t43469.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t43469.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t43469.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t43469.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.mults,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY));
});})(mults,ensure_mult))
;
cljs.core.async.t43469.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t43469.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43469.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t43469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43471){var self__ = this;
var _43471__$1 = this;return self__.meta43470;
});})(mults,ensure_mult))
;
cljs.core.async.t43469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43471,meta43470__$1){var self__ = this;
var _43471__$1 = this;return (new cljs.core.async.t43469(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta43470__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t43469 = ((function (mults,ensure_mult){
return (function __GT_t43469(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta43470){return (new cljs.core.async.t43469(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta43470));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t43469(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___43593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43593,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43593,mults,ensure_mult,p){
return (function (state_43545){var state_val_43546 = (state_43545[(1)]);if((state_val_43546 === (7)))
{var inst_43541 = (state_43545[(2)]);var state_43545__$1 = state_43545;var statearr_43547_43594 = state_43545__$1;(statearr_43547_43594[(2)] = inst_43541);
(statearr_43547_43594[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (20)))
{var state_43545__$1 = state_43545;var statearr_43548_43595 = state_43545__$1;(statearr_43548_43595[(2)] = null);
(statearr_43548_43595[(1)] = (21));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (1)))
{var state_43545__$1 = state_43545;var statearr_43549_43596 = state_43545__$1;(statearr_43549_43596[(2)] = null);
(statearr_43549_43596[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (24)))
{var inst_43524 = (state_43545[(7)]);var inst_43474 = (state_43545[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_43545,(23),Object,null,(22));var inst_43531 = cljs.core.async.muxch_STAR_(inst_43524);var state_43545__$1 = state_43545;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43545__$1,(25),inst_43531,inst_43474);
} else
{if((state_val_43546 === (4)))
{var inst_43474 = (state_43545[(8)]);var inst_43474__$1 = (state_43545[(2)]);var inst_43475 = (inst_43474__$1 == null);var state_43545__$1 = (function (){var statearr_43550 = state_43545;(statearr_43550[(8)] = inst_43474__$1);
return statearr_43550;
})();if(cljs.core.truth_(inst_43475))
{var statearr_43551_43597 = state_43545__$1;(statearr_43551_43597[(1)] = (5));
} else
{var statearr_43552_43598 = state_43545__$1;(statearr_43552_43598[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (15)))
{var inst_43516 = (state_43545[(2)]);var state_43545__$1 = state_43545;var statearr_43553_43599 = state_43545__$1;(statearr_43553_43599[(2)] = inst_43516);
(statearr_43553_43599[(1)] = (12));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (21)))
{var inst_43538 = (state_43545[(2)]);var state_43545__$1 = (function (){var statearr_43554 = state_43545;(statearr_43554[(9)] = inst_43538);
return statearr_43554;
})();var statearr_43555_43600 = state_43545__$1;(statearr_43555_43600[(2)] = null);
(statearr_43555_43600[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (13)))
{var inst_43498 = (state_43545[(10)]);var inst_43500 = cljs.core.chunked_seq_QMARK_(inst_43498);var state_43545__$1 = state_43545;if(inst_43500)
{var statearr_43556_43601 = state_43545__$1;(statearr_43556_43601[(1)] = (16));
} else
{var statearr_43557_43602 = state_43545__$1;(statearr_43557_43602[(1)] = (17));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (22)))
{var inst_43535 = (state_43545[(2)]);var state_43545__$1 = state_43545;var statearr_43558_43603 = state_43545__$1;(statearr_43558_43603[(2)] = inst_43535);
(statearr_43558_43603[(1)] = (21));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (6)))
{var inst_43522 = (state_43545[(11)]);var inst_43524 = (state_43545[(7)]);var inst_43474 = (state_43545[(8)]);var inst_43522__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43474) : topic_fn.call(null,inst_43474));var inst_43523 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_43524__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43523,inst_43522__$1);var state_43545__$1 = (function (){var statearr_43559 = state_43545;(statearr_43559[(11)] = inst_43522__$1);
(statearr_43559[(7)] = inst_43524__$1);
return statearr_43559;
})();if(cljs.core.truth_(inst_43524__$1))
{var statearr_43560_43604 = state_43545__$1;(statearr_43560_43604[(1)] = (19));
} else
{var statearr_43561_43605 = state_43545__$1;(statearr_43561_43605[(1)] = (20));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (25)))
{var inst_43533 = (state_43545[(2)]);var state_43545__$1 = state_43545;var statearr_43562_43606 = state_43545__$1;(statearr_43562_43606[(2)] = inst_43533);
cljs.core.async.impl.ioc_helpers.process_exception(state_43545__$1);
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (17)))
{var inst_43498 = (state_43545[(10)]);var inst_43507 = cljs.core.first(inst_43498);var inst_43508 = cljs.core.async.muxch_STAR_(inst_43507);var inst_43509 = cljs.core.async.close_BANG_(inst_43508);var inst_43510 = cljs.core.next(inst_43498);var inst_43484 = inst_43510;var inst_43485 = null;var inst_43486 = (0);var inst_43487 = (0);var state_43545__$1 = (function (){var statearr_43563 = state_43545;(statearr_43563[(12)] = inst_43509);
(statearr_43563[(13)] = inst_43487);
(statearr_43563[(14)] = inst_43484);
(statearr_43563[(15)] = inst_43486);
(statearr_43563[(16)] = inst_43485);
return statearr_43563;
})();var statearr_43564_43607 = state_43545__$1;(statearr_43564_43607[(2)] = null);
(statearr_43564_43607[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (3)))
{var inst_43543 = (state_43545[(2)]);var state_43545__$1 = state_43545;return cljs.core.async.impl.ioc_helpers.return_chan(state_43545__$1,inst_43543);
} else
{if((state_val_43546 === (12)))
{var inst_43518 = (state_43545[(2)]);var state_43545__$1 = state_43545;var statearr_43565_43608 = state_43545__$1;(statearr_43565_43608[(2)] = inst_43518);
(statearr_43565_43608[(1)] = (9));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (2)))
{var state_43545__$1 = state_43545;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43545__$1,(4),ch);
} else
{if((state_val_43546 === (23)))
{var inst_43522 = (state_43545[(11)]);var inst_43526 = (state_43545[(2)]);var inst_43527 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43522);var state_43545__$1 = (function (){var statearr_43566 = state_43545;(statearr_43566[(17)] = inst_43526);
return statearr_43566;
})();var statearr_43567_43609 = state_43545__$1;(statearr_43567_43609[(2)] = inst_43527);
cljs.core.async.impl.ioc_helpers.process_exception(state_43545__$1);
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (19)))
{var state_43545__$1 = state_43545;var statearr_43568_43610 = state_43545__$1;(statearr_43568_43610[(2)] = null);
(statearr_43568_43610[(1)] = (24));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (11)))
{var inst_43484 = (state_43545[(14)]);var inst_43498 = (state_43545[(10)]);var inst_43498__$1 = cljs.core.seq(inst_43484);var state_43545__$1 = (function (){var statearr_43569 = state_43545;(statearr_43569[(10)] = inst_43498__$1);
return statearr_43569;
})();if(inst_43498__$1)
{var statearr_43570_43611 = state_43545__$1;(statearr_43570_43611[(1)] = (13));
} else
{var statearr_43571_43612 = state_43545__$1;(statearr_43571_43612[(1)] = (14));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (9)))
{var inst_43520 = (state_43545[(2)]);var state_43545__$1 = state_43545;var statearr_43572_43613 = state_43545__$1;(statearr_43572_43613[(2)] = inst_43520);
(statearr_43572_43613[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (5)))
{var inst_43481 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_43482 = cljs.core.vals(inst_43481);var inst_43483 = cljs.core.seq(inst_43482);var inst_43484 = inst_43483;var inst_43485 = null;var inst_43486 = (0);var inst_43487 = (0);var state_43545__$1 = (function (){var statearr_43573 = state_43545;(statearr_43573[(13)] = inst_43487);
(statearr_43573[(14)] = inst_43484);
(statearr_43573[(15)] = inst_43486);
(statearr_43573[(16)] = inst_43485);
return statearr_43573;
})();var statearr_43574_43614 = state_43545__$1;(statearr_43574_43614[(2)] = null);
(statearr_43574_43614[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (14)))
{var state_43545__$1 = state_43545;var statearr_43578_43615 = state_43545__$1;(statearr_43578_43615[(2)] = null);
(statearr_43578_43615[(1)] = (15));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (16)))
{var inst_43498 = (state_43545[(10)]);var inst_43502 = cljs.core.chunk_first(inst_43498);var inst_43503 = cljs.core.chunk_rest(inst_43498);var inst_43504 = cljs.core.count(inst_43502);var inst_43484 = inst_43503;var inst_43485 = inst_43502;var inst_43486 = inst_43504;var inst_43487 = (0);var state_43545__$1 = (function (){var statearr_43579 = state_43545;(statearr_43579[(13)] = inst_43487);
(statearr_43579[(14)] = inst_43484);
(statearr_43579[(15)] = inst_43486);
(statearr_43579[(16)] = inst_43485);
return statearr_43579;
})();var statearr_43580_43616 = state_43545__$1;(statearr_43580_43616[(2)] = null);
(statearr_43580_43616[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (10)))
{var inst_43487 = (state_43545[(13)]);var inst_43484 = (state_43545[(14)]);var inst_43486 = (state_43545[(15)]);var inst_43485 = (state_43545[(16)]);var inst_43492 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43485,inst_43487);var inst_43493 = cljs.core.async.muxch_STAR_(inst_43492);var inst_43494 = cljs.core.async.close_BANG_(inst_43493);var inst_43495 = (inst_43487 + (1));var tmp43575 = inst_43484;var tmp43576 = inst_43486;var tmp43577 = inst_43485;var inst_43484__$1 = tmp43575;var inst_43485__$1 = tmp43577;var inst_43486__$1 = tmp43576;var inst_43487__$1 = inst_43495;var state_43545__$1 = (function (){var statearr_43581 = state_43545;(statearr_43581[(13)] = inst_43487__$1);
(statearr_43581[(14)] = inst_43484__$1);
(statearr_43581[(18)] = inst_43494);
(statearr_43581[(15)] = inst_43486__$1);
(statearr_43581[(16)] = inst_43485__$1);
return statearr_43581;
})();var statearr_43582_43617 = state_43545__$1;(statearr_43582_43617[(2)] = null);
(statearr_43582_43617[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (18)))
{var inst_43513 = (state_43545[(2)]);var state_43545__$1 = state_43545;var statearr_43583_43618 = state_43545__$1;(statearr_43583_43618[(2)] = inst_43513);
(statearr_43583_43618[(1)] = (15));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43546 === (8)))
{var inst_43487 = (state_43545[(13)]);var inst_43486 = (state_43545[(15)]);var inst_43489 = (inst_43487 < inst_43486);var inst_43490 = inst_43489;var state_43545__$1 = state_43545;if(cljs.core.truth_(inst_43490))
{var statearr_43584_43619 = state_43545__$1;(statearr_43584_43619[(1)] = (10));
} else
{var statearr_43585_43620 = state_43545__$1;(statearr_43585_43620[(1)] = (11));
}
return cljs.core.constant$keyword$880;
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
});})(c__5708__auto___43593,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___43593,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43589[(0)] = state_machine__5694__auto__);
(statearr_43589[(1)] = (1));
return statearr_43589;
});
var state_machine__5694__auto____1 = (function (state_43545){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43545);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43590){if((e43590 instanceof Object))
{var ex__5697__auto__ = e43590;var statearr_43591_43621 = state_43545;(statearr_43591_43621[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43545);
return cljs.core.constant$keyword$880;
} else
{throw e43590;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__43622 = state_43545;
state_43545 = G__43622;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43545){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43593,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_43592 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43593);
return statearr_43592;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43593,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5708__auto___43759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43759,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43759,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43729){var state_val_43730 = (state_43729[(1)]);if((state_val_43730 === (7)))
{var state_43729__$1 = state_43729;var statearr_43731_43760 = state_43729__$1;(statearr_43731_43760[(2)] = null);
(statearr_43731_43760[(1)] = (8));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (1)))
{var state_43729__$1 = state_43729;var statearr_43732_43761 = state_43729__$1;(statearr_43732_43761[(2)] = null);
(statearr_43732_43761[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (4)))
{var inst_43693 = (state_43729[(7)]);var inst_43695 = (inst_43693 < cnt);var state_43729__$1 = state_43729;if(cljs.core.truth_(inst_43695))
{var statearr_43733_43762 = state_43729__$1;(statearr_43733_43762[(1)] = (6));
} else
{var statearr_43734_43763 = state_43729__$1;(statearr_43734_43763[(1)] = (7));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (15)))
{var inst_43725 = (state_43729[(2)]);var state_43729__$1 = state_43729;var statearr_43735_43764 = state_43729__$1;(statearr_43735_43764[(2)] = inst_43725);
(statearr_43735_43764[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (13)))
{var inst_43718 = cljs.core.async.close_BANG_(out);var state_43729__$1 = state_43729;var statearr_43736_43765 = state_43729__$1;(statearr_43736_43765[(2)] = inst_43718);
(statearr_43736_43765[(1)] = (15));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (6)))
{var state_43729__$1 = state_43729;var statearr_43737_43766 = state_43729__$1;(statearr_43737_43766[(2)] = null);
(statearr_43737_43766[(1)] = (11));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (3)))
{var inst_43727 = (state_43729[(2)]);var state_43729__$1 = state_43729;return cljs.core.async.impl.ioc_helpers.return_chan(state_43729__$1,inst_43727);
} else
{if((state_val_43730 === (12)))
{var inst_43715 = (state_43729[(8)]);var inst_43715__$1 = (state_43729[(2)]);var inst_43716 = cljs.core.some(cljs.core.nil_QMARK_,inst_43715__$1);var state_43729__$1 = (function (){var statearr_43738 = state_43729;(statearr_43738[(8)] = inst_43715__$1);
return statearr_43738;
})();if(cljs.core.truth_(inst_43716))
{var statearr_43739_43767 = state_43729__$1;(statearr_43739_43767[(1)] = (13));
} else
{var statearr_43740_43768 = state_43729__$1;(statearr_43740_43768[(1)] = (14));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (2)))
{var inst_43692 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));var inst_43693 = (0);var state_43729__$1 = (function (){var statearr_43741 = state_43729;(statearr_43741[(7)] = inst_43693);
(statearr_43741[(9)] = inst_43692);
return statearr_43741;
})();var statearr_43742_43769 = state_43729__$1;(statearr_43742_43769[(2)] = null);
(statearr_43742_43769[(1)] = (4));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (11)))
{var inst_43693 = (state_43729[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_43729,(10),Object,null,(9));var inst_43702 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43693) : chs__$1.call(null,inst_43693));var inst_43703 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43693) : done.call(null,inst_43693));var inst_43704 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43702,inst_43703);var state_43729__$1 = state_43729;var statearr_43743_43770 = state_43729__$1;(statearr_43743_43770[(2)] = inst_43704);
cljs.core.async.impl.ioc_helpers.process_exception(state_43729__$1);
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (9)))
{var inst_43693 = (state_43729[(7)]);var inst_43706 = (state_43729[(2)]);var inst_43707 = (inst_43693 + (1));var inst_43693__$1 = inst_43707;var state_43729__$1 = (function (){var statearr_43744 = state_43729;(statearr_43744[(7)] = inst_43693__$1);
(statearr_43744[(10)] = inst_43706);
return statearr_43744;
})();var statearr_43745_43771 = state_43729__$1;(statearr_43745_43771[(2)] = null);
(statearr_43745_43771[(1)] = (4));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (5)))
{var inst_43713 = (state_43729[(2)]);var state_43729__$1 = (function (){var statearr_43746 = state_43729;(statearr_43746[(11)] = inst_43713);
return statearr_43746;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43729__$1,(12),dchan);
} else
{if((state_val_43730 === (14)))
{var inst_43715 = (state_43729[(8)]);var inst_43720 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43715);var state_43729__$1 = state_43729;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43729__$1,(16),out,inst_43720);
} else
{if((state_val_43730 === (16)))
{var inst_43722 = (state_43729[(2)]);var state_43729__$1 = (function (){var statearr_43747 = state_43729;(statearr_43747[(12)] = inst_43722);
return statearr_43747;
})();var statearr_43748_43772 = state_43729__$1;(statearr_43748_43772[(2)] = null);
(statearr_43748_43772[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (10)))
{var inst_43697 = (state_43729[(2)]);var inst_43698 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_43729__$1 = (function (){var statearr_43749 = state_43729;(statearr_43749[(13)] = inst_43697);
return statearr_43749;
})();var statearr_43750_43773 = state_43729__$1;(statearr_43750_43773[(2)] = inst_43698);
cljs.core.async.impl.ioc_helpers.process_exception(state_43729__$1);
return cljs.core.constant$keyword$880;
} else
{if((state_val_43730 === (8)))
{var inst_43711 = (state_43729[(2)]);var state_43729__$1 = state_43729;var statearr_43751_43774 = state_43729__$1;(statearr_43751_43774[(2)] = inst_43711);
(statearr_43751_43774[(1)] = (5));
return cljs.core.constant$keyword$880;
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
});})(c__5708__auto___43759,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___43759,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43755[(0)] = state_machine__5694__auto__);
(statearr_43755[(1)] = (1));
return statearr_43755;
});
var state_machine__5694__auto____1 = (function (state_43729){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43729);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43756){if((e43756 instanceof Object))
{var ex__5697__auto__ = e43756;var statearr_43757_43775 = state_43729;(statearr_43757_43775[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43729);
return cljs.core.constant$keyword$880;
} else
{throw e43756;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__43776 = state_43729;
state_43729 = G__43776;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43729){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43759,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_43758 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43759);
return statearr_43758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43759,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___43884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43884,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43884,out){
return (function (state_43860){var state_val_43861 = (state_43860[(1)]);if((state_val_43861 === (7)))
{var inst_43839 = (state_43860[(7)]);var inst_43840 = (state_43860[(8)]);var inst_43839__$1 = (state_43860[(2)]);var inst_43840__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43839__$1,(0),null);var inst_43841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43839__$1,(1),null);var inst_43842 = (inst_43840__$1 == null);var state_43860__$1 = (function (){var statearr_43862 = state_43860;(statearr_43862[(7)] = inst_43839__$1);
(statearr_43862[(9)] = inst_43841);
(statearr_43862[(8)] = inst_43840__$1);
return statearr_43862;
})();if(cljs.core.truth_(inst_43842))
{var statearr_43863_43885 = state_43860__$1;(statearr_43863_43885[(1)] = (8));
} else
{var statearr_43864_43886 = state_43860__$1;(statearr_43864_43886[(1)] = (9));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43861 === (1)))
{var inst_43831 = cljs.core.vec(chs);var inst_43832 = inst_43831;var state_43860__$1 = (function (){var statearr_43865 = state_43860;(statearr_43865[(10)] = inst_43832);
return statearr_43865;
})();var statearr_43866_43887 = state_43860__$1;(statearr_43866_43887[(2)] = null);
(statearr_43866_43887[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43861 === (4)))
{var inst_43832 = (state_43860[(10)]);var state_43860__$1 = state_43860;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_43860__$1,(7),inst_43832);
} else
{if((state_val_43861 === (6)))
{var inst_43856 = (state_43860[(2)]);var state_43860__$1 = state_43860;var statearr_43867_43888 = state_43860__$1;(statearr_43867_43888[(2)] = inst_43856);
(statearr_43867_43888[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43861 === (3)))
{var inst_43858 = (state_43860[(2)]);var state_43860__$1 = state_43860;return cljs.core.async.impl.ioc_helpers.return_chan(state_43860__$1,inst_43858);
} else
{if((state_val_43861 === (2)))
{var inst_43832 = (state_43860[(10)]);var inst_43834 = cljs.core.count(inst_43832);var inst_43835 = (inst_43834 > (0));var state_43860__$1 = state_43860;if(cljs.core.truth_(inst_43835))
{var statearr_43869_43889 = state_43860__$1;(statearr_43869_43889[(1)] = (4));
} else
{var statearr_43870_43890 = state_43860__$1;(statearr_43870_43890[(1)] = (5));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43861 === (11)))
{var inst_43832 = (state_43860[(10)]);var inst_43849 = (state_43860[(2)]);var tmp43868 = inst_43832;var inst_43832__$1 = tmp43868;var state_43860__$1 = (function (){var statearr_43871 = state_43860;(statearr_43871[(11)] = inst_43849);
(statearr_43871[(10)] = inst_43832__$1);
return statearr_43871;
})();var statearr_43872_43891 = state_43860__$1;(statearr_43872_43891[(2)] = null);
(statearr_43872_43891[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43861 === (9)))
{var inst_43840 = (state_43860[(8)]);var state_43860__$1 = state_43860;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43860__$1,(11),out,inst_43840);
} else
{if((state_val_43861 === (5)))
{var inst_43854 = cljs.core.async.close_BANG_(out);var state_43860__$1 = state_43860;var statearr_43873_43892 = state_43860__$1;(statearr_43873_43892[(2)] = inst_43854);
(statearr_43873_43892[(1)] = (6));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43861 === (10)))
{var inst_43852 = (state_43860[(2)]);var state_43860__$1 = state_43860;var statearr_43874_43893 = state_43860__$1;(statearr_43874_43893[(2)] = inst_43852);
(statearr_43874_43893[(1)] = (6));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43861 === (8)))
{var inst_43839 = (state_43860[(7)]);var inst_43841 = (state_43860[(9)]);var inst_43832 = (state_43860[(10)]);var inst_43840 = (state_43860[(8)]);var inst_43844 = (function (){var c = inst_43841;var v = inst_43840;var vec__43837 = inst_43839;var cs = inst_43832;return ((function (c,v,vec__43837,cs,inst_43839,inst_43841,inst_43832,inst_43840,state_val_43861,c__5708__auto___43884,out){
return (function (p1__43777_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43777_SHARP_);
});
;})(c,v,vec__43837,cs,inst_43839,inst_43841,inst_43832,inst_43840,state_val_43861,c__5708__auto___43884,out))
})();var inst_43845 = cljs.core.filterv(inst_43844,inst_43832);var inst_43832__$1 = inst_43845;var state_43860__$1 = (function (){var statearr_43875 = state_43860;(statearr_43875[(10)] = inst_43832__$1);
return statearr_43875;
})();var statearr_43876_43894 = state_43860__$1;(statearr_43876_43894[(2)] = null);
(statearr_43876_43894[(1)] = (2));
return cljs.core.constant$keyword$880;
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
});})(c__5708__auto___43884,out))
;return ((function (switch__5693__auto__,c__5708__auto___43884,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43880 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43880[(0)] = state_machine__5694__auto__);
(statearr_43880[(1)] = (1));
return statearr_43880;
});
var state_machine__5694__auto____1 = (function (state_43860){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43860);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43881){if((e43881 instanceof Object))
{var ex__5697__auto__ = e43881;var statearr_43882_43895 = state_43860;(statearr_43882_43895[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43860);
return cljs.core.constant$keyword$880;
} else
{throw e43881;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__43896 = state_43860;
state_43860 = G__43896;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43860){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43884,out))
})();var state__5710__auto__ = (function (){var statearr_43883 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43884);
return statearr_43883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43884,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___43989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43989,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43989,out){
return (function (state_43966){var state_val_43967 = (state_43966[(1)]);if((state_val_43967 === (7)))
{var inst_43948 = (state_43966[(7)]);var inst_43948__$1 = (state_43966[(2)]);var inst_43949 = (inst_43948__$1 == null);var inst_43950 = cljs.core.not(inst_43949);var state_43966__$1 = (function (){var statearr_43968 = state_43966;(statearr_43968[(7)] = inst_43948__$1);
return statearr_43968;
})();if(inst_43950)
{var statearr_43969_43990 = state_43966__$1;(statearr_43969_43990[(1)] = (8));
} else
{var statearr_43970_43991 = state_43966__$1;(statearr_43970_43991[(1)] = (9));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43967 === (1)))
{var inst_43943 = (0);var state_43966__$1 = (function (){var statearr_43971 = state_43966;(statearr_43971[(8)] = inst_43943);
return statearr_43971;
})();var statearr_43972_43992 = state_43966__$1;(statearr_43972_43992[(2)] = null);
(statearr_43972_43992[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43967 === (4)))
{var state_43966__$1 = state_43966;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43966__$1,(7),ch);
} else
{if((state_val_43967 === (6)))
{var inst_43961 = (state_43966[(2)]);var state_43966__$1 = state_43966;var statearr_43973_43993 = state_43966__$1;(statearr_43973_43993[(2)] = inst_43961);
(statearr_43973_43993[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43967 === (3)))
{var inst_43963 = (state_43966[(2)]);var inst_43964 = cljs.core.async.close_BANG_(out);var state_43966__$1 = (function (){var statearr_43974 = state_43966;(statearr_43974[(9)] = inst_43963);
return statearr_43974;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_43966__$1,inst_43964);
} else
{if((state_val_43967 === (2)))
{var inst_43943 = (state_43966[(8)]);var inst_43945 = (inst_43943 < n);var state_43966__$1 = state_43966;if(cljs.core.truth_(inst_43945))
{var statearr_43975_43994 = state_43966__$1;(statearr_43975_43994[(1)] = (4));
} else
{var statearr_43976_43995 = state_43966__$1;(statearr_43976_43995[(1)] = (5));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_43967 === (11)))
{var inst_43943 = (state_43966[(8)]);var inst_43953 = (state_43966[(2)]);var inst_43954 = (inst_43943 + (1));var inst_43943__$1 = inst_43954;var state_43966__$1 = (function (){var statearr_43977 = state_43966;(statearr_43977[(8)] = inst_43943__$1);
(statearr_43977[(10)] = inst_43953);
return statearr_43977;
})();var statearr_43978_43996 = state_43966__$1;(statearr_43978_43996[(2)] = null);
(statearr_43978_43996[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43967 === (9)))
{var state_43966__$1 = state_43966;var statearr_43979_43997 = state_43966__$1;(statearr_43979_43997[(2)] = null);
(statearr_43979_43997[(1)] = (10));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43967 === (5)))
{var state_43966__$1 = state_43966;var statearr_43980_43998 = state_43966__$1;(statearr_43980_43998[(2)] = null);
(statearr_43980_43998[(1)] = (6));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43967 === (10)))
{var inst_43958 = (state_43966[(2)]);var state_43966__$1 = state_43966;var statearr_43981_43999 = state_43966__$1;(statearr_43981_43999[(2)] = inst_43958);
(statearr_43981_43999[(1)] = (6));
return cljs.core.constant$keyword$880;
} else
{if((state_val_43967 === (8)))
{var inst_43948 = (state_43966[(7)]);var state_43966__$1 = state_43966;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43966__$1,(11),out,inst_43948);
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
});})(c__5708__auto___43989,out))
;return ((function (switch__5693__auto__,c__5708__auto___43989,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43985 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_43985[(0)] = state_machine__5694__auto__);
(statearr_43985[(1)] = (1));
return statearr_43985;
});
var state_machine__5694__auto____1 = (function (state_43966){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43966);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43986){if((e43986 instanceof Object))
{var ex__5697__auto__ = e43986;var statearr_43987_44000 = state_43966;(statearr_43987_44000[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43966);
return cljs.core.constant$keyword$880;
} else
{throw e43986;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__44001 = state_43966;
state_43966 = G__44001;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43966){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43989,out))
})();var state__5710__auto__ = (function (){var statearr_43988 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43989);
return statearr_43988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43989,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___44098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___44098,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___44098,out){
return (function (state_44073){var state_val_44074 = (state_44073[(1)]);if((state_val_44074 === (7)))
{var inst_44068 = (state_44073[(2)]);var state_44073__$1 = state_44073;var statearr_44075_44099 = state_44073__$1;(statearr_44075_44099[(2)] = inst_44068);
(statearr_44075_44099[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44074 === (1)))
{var inst_44050 = null;var state_44073__$1 = (function (){var statearr_44076 = state_44073;(statearr_44076[(7)] = inst_44050);
return statearr_44076;
})();var statearr_44077_44100 = state_44073__$1;(statearr_44077_44100[(2)] = null);
(statearr_44077_44100[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44074 === (4)))
{var inst_44053 = (state_44073[(8)]);var inst_44053__$1 = (state_44073[(2)]);var inst_44054 = (inst_44053__$1 == null);var inst_44055 = cljs.core.not(inst_44054);var state_44073__$1 = (function (){var statearr_44078 = state_44073;(statearr_44078[(8)] = inst_44053__$1);
return statearr_44078;
})();if(inst_44055)
{var statearr_44079_44101 = state_44073__$1;(statearr_44079_44101[(1)] = (5));
} else
{var statearr_44080_44102 = state_44073__$1;(statearr_44080_44102[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_44074 === (6)))
{var state_44073__$1 = state_44073;var statearr_44081_44103 = state_44073__$1;(statearr_44081_44103[(2)] = null);
(statearr_44081_44103[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44074 === (3)))
{var inst_44070 = (state_44073[(2)]);var inst_44071 = cljs.core.async.close_BANG_(out);var state_44073__$1 = (function (){var statearr_44082 = state_44073;(statearr_44082[(9)] = inst_44070);
return statearr_44082;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_44073__$1,inst_44071);
} else
{if((state_val_44074 === (2)))
{var state_44073__$1 = state_44073;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44073__$1,(4),ch);
} else
{if((state_val_44074 === (11)))
{var inst_44053 = (state_44073[(8)]);var inst_44062 = (state_44073[(2)]);var inst_44050 = inst_44053;var state_44073__$1 = (function (){var statearr_44083 = state_44073;(statearr_44083[(7)] = inst_44050);
(statearr_44083[(10)] = inst_44062);
return statearr_44083;
})();var statearr_44084_44104 = state_44073__$1;(statearr_44084_44104[(2)] = null);
(statearr_44084_44104[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44074 === (9)))
{var inst_44053 = (state_44073[(8)]);var state_44073__$1 = state_44073;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44073__$1,(11),out,inst_44053);
} else
{if((state_val_44074 === (5)))
{var inst_44050 = (state_44073[(7)]);var inst_44053 = (state_44073[(8)]);var inst_44057 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44053,inst_44050);var state_44073__$1 = state_44073;if(inst_44057)
{var statearr_44086_44105 = state_44073__$1;(statearr_44086_44105[(1)] = (8));
} else
{var statearr_44087_44106 = state_44073__$1;(statearr_44087_44106[(1)] = (9));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_44074 === (10)))
{var inst_44065 = (state_44073[(2)]);var state_44073__$1 = state_44073;var statearr_44088_44107 = state_44073__$1;(statearr_44088_44107[(2)] = inst_44065);
(statearr_44088_44107[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44074 === (8)))
{var inst_44050 = (state_44073[(7)]);var tmp44085 = inst_44050;var inst_44050__$1 = tmp44085;var state_44073__$1 = (function (){var statearr_44089 = state_44073;(statearr_44089[(7)] = inst_44050__$1);
return statearr_44089;
})();var statearr_44090_44108 = state_44073__$1;(statearr_44090_44108[(2)] = null);
(statearr_44090_44108[(1)] = (2));
return cljs.core.constant$keyword$880;
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
});})(c__5708__auto___44098,out))
;return ((function (switch__5693__auto__,c__5708__auto___44098,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44094 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_44094[(0)] = state_machine__5694__auto__);
(statearr_44094[(1)] = (1));
return statearr_44094;
});
var state_machine__5694__auto____1 = (function (state_44073){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44073);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44095){if((e44095 instanceof Object))
{var ex__5697__auto__ = e44095;var statearr_44096_44109 = state_44073;(statearr_44096_44109[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44073);
return cljs.core.constant$keyword$880;
} else
{throw e44095;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__44110 = state_44073;
state_44073 = G__44110;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44073){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___44098,out))
})();var state__5710__auto__ = (function (){var statearr_44097 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___44098);
return statearr_44097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___44098,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___44245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___44245,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___44245,out){
return (function (state_44215){var state_val_44216 = (state_44215[(1)]);if((state_val_44216 === (7)))
{var inst_44211 = (state_44215[(2)]);var state_44215__$1 = state_44215;var statearr_44217_44246 = state_44215__$1;(statearr_44217_44246[(2)] = inst_44211);
(statearr_44217_44246[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44216 === (1)))
{var inst_44178 = (new Array(n));var inst_44179 = inst_44178;var inst_44180 = (0);var state_44215__$1 = (function (){var statearr_44218 = state_44215;(statearr_44218[(7)] = inst_44179);
(statearr_44218[(8)] = inst_44180);
return statearr_44218;
})();var statearr_44219_44247 = state_44215__$1;(statearr_44219_44247[(2)] = null);
(statearr_44219_44247[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44216 === (4)))
{var inst_44183 = (state_44215[(9)]);var inst_44183__$1 = (state_44215[(2)]);var inst_44184 = (inst_44183__$1 == null);var inst_44185 = cljs.core.not(inst_44184);var state_44215__$1 = (function (){var statearr_44220 = state_44215;(statearr_44220[(9)] = inst_44183__$1);
return statearr_44220;
})();if(inst_44185)
{var statearr_44221_44248 = state_44215__$1;(statearr_44221_44248[(1)] = (5));
} else
{var statearr_44222_44249 = state_44215__$1;(statearr_44222_44249[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_44216 === (15)))
{var inst_44205 = (state_44215[(2)]);var state_44215__$1 = state_44215;var statearr_44223_44250 = state_44215__$1;(statearr_44223_44250[(2)] = inst_44205);
(statearr_44223_44250[(1)] = (14));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44216 === (13)))
{var state_44215__$1 = state_44215;var statearr_44224_44251 = state_44215__$1;(statearr_44224_44251[(2)] = null);
(statearr_44224_44251[(1)] = (14));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44216 === (6)))
{var inst_44180 = (state_44215[(8)]);var inst_44201 = (inst_44180 > (0));var state_44215__$1 = state_44215;if(cljs.core.truth_(inst_44201))
{var statearr_44225_44252 = state_44215__$1;(statearr_44225_44252[(1)] = (12));
} else
{var statearr_44226_44253 = state_44215__$1;(statearr_44226_44253[(1)] = (13));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_44216 === (3)))
{var inst_44213 = (state_44215[(2)]);var state_44215__$1 = state_44215;return cljs.core.async.impl.ioc_helpers.return_chan(state_44215__$1,inst_44213);
} else
{if((state_val_44216 === (12)))
{var inst_44179 = (state_44215[(7)]);var inst_44203 = cljs.core.vec(inst_44179);var state_44215__$1 = state_44215;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44215__$1,(15),out,inst_44203);
} else
{if((state_val_44216 === (2)))
{var state_44215__$1 = state_44215;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44215__$1,(4),ch);
} else
{if((state_val_44216 === (11)))
{var inst_44195 = (state_44215[(2)]);var inst_44196 = (new Array(n));var inst_44179 = inst_44196;var inst_44180 = (0);var state_44215__$1 = (function (){var statearr_44227 = state_44215;(statearr_44227[(7)] = inst_44179);
(statearr_44227[(8)] = inst_44180);
(statearr_44227[(10)] = inst_44195);
return statearr_44227;
})();var statearr_44228_44254 = state_44215__$1;(statearr_44228_44254[(2)] = null);
(statearr_44228_44254[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44216 === (9)))
{var inst_44179 = (state_44215[(7)]);var inst_44193 = cljs.core.vec(inst_44179);var state_44215__$1 = state_44215;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44215__$1,(11),out,inst_44193);
} else
{if((state_val_44216 === (5)))
{var inst_44188 = (state_44215[(11)]);var inst_44183 = (state_44215[(9)]);var inst_44179 = (state_44215[(7)]);var inst_44180 = (state_44215[(8)]);var inst_44187 = (inst_44179[inst_44180] = inst_44183);var inst_44188__$1 = (inst_44180 + (1));var inst_44189 = (inst_44188__$1 < n);var state_44215__$1 = (function (){var statearr_44229 = state_44215;(statearr_44229[(11)] = inst_44188__$1);
(statearr_44229[(12)] = inst_44187);
return statearr_44229;
})();if(cljs.core.truth_(inst_44189))
{var statearr_44230_44255 = state_44215__$1;(statearr_44230_44255[(1)] = (8));
} else
{var statearr_44231_44256 = state_44215__$1;(statearr_44231_44256[(1)] = (9));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_44216 === (14)))
{var inst_44208 = (state_44215[(2)]);var inst_44209 = cljs.core.async.close_BANG_(out);var state_44215__$1 = (function (){var statearr_44233 = state_44215;(statearr_44233[(13)] = inst_44208);
return statearr_44233;
})();var statearr_44234_44257 = state_44215__$1;(statearr_44234_44257[(2)] = inst_44209);
(statearr_44234_44257[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44216 === (10)))
{var inst_44199 = (state_44215[(2)]);var state_44215__$1 = state_44215;var statearr_44235_44258 = state_44215__$1;(statearr_44235_44258[(2)] = inst_44199);
(statearr_44235_44258[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44216 === (8)))
{var inst_44188 = (state_44215[(11)]);var inst_44179 = (state_44215[(7)]);var tmp44232 = inst_44179;var inst_44179__$1 = tmp44232;var inst_44180 = inst_44188;var state_44215__$1 = (function (){var statearr_44236 = state_44215;(statearr_44236[(7)] = inst_44179__$1);
(statearr_44236[(8)] = inst_44180);
return statearr_44236;
})();var statearr_44237_44259 = state_44215__$1;(statearr_44237_44259[(2)] = null);
(statearr_44237_44259[(1)] = (2));
return cljs.core.constant$keyword$880;
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
});})(c__5708__auto___44245,out))
;return ((function (switch__5693__auto__,c__5708__auto___44245,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44241[(0)] = state_machine__5694__auto__);
(statearr_44241[(1)] = (1));
return statearr_44241;
});
var state_machine__5694__auto____1 = (function (state_44215){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44215);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44242){if((e44242 instanceof Object))
{var ex__5697__auto__ = e44242;var statearr_44243_44260 = state_44215;(statearr_44243_44260[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44215);
return cljs.core.constant$keyword$880;
} else
{throw e44242;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__44261 = state_44215;
state_44215 = G__44261;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44215){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___44245,out))
})();var state__5710__auto__ = (function (){var statearr_44244 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___44245);
return statearr_44244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___44245,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___44404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___44404,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___44404,out){
return (function (state_44374){var state_val_44375 = (state_44374[(1)]);if((state_val_44375 === (7)))
{var inst_44370 = (state_44374[(2)]);var state_44374__$1 = state_44374;var statearr_44376_44405 = state_44374__$1;(statearr_44376_44405[(2)] = inst_44370);
(statearr_44376_44405[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44375 === (1)))
{var inst_44333 = [];var inst_44334 = inst_44333;var inst_44335 = cljs.core.constant$keyword$893;var state_44374__$1 = (function (){var statearr_44377 = state_44374;(statearr_44377[(7)] = inst_44334);
(statearr_44377[(8)] = inst_44335);
return statearr_44377;
})();var statearr_44378_44406 = state_44374__$1;(statearr_44378_44406[(2)] = null);
(statearr_44378_44406[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44375 === (4)))
{var inst_44338 = (state_44374[(9)]);var inst_44338__$1 = (state_44374[(2)]);var inst_44339 = (inst_44338__$1 == null);var inst_44340 = cljs.core.not(inst_44339);var state_44374__$1 = (function (){var statearr_44379 = state_44374;(statearr_44379[(9)] = inst_44338__$1);
return statearr_44379;
})();if(inst_44340)
{var statearr_44380_44407 = state_44374__$1;(statearr_44380_44407[(1)] = (5));
} else
{var statearr_44381_44408 = state_44374__$1;(statearr_44381_44408[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_44375 === (15)))
{var inst_44364 = (state_44374[(2)]);var state_44374__$1 = state_44374;var statearr_44382_44409 = state_44374__$1;(statearr_44382_44409[(2)] = inst_44364);
(statearr_44382_44409[(1)] = (14));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44375 === (13)))
{var state_44374__$1 = state_44374;var statearr_44383_44410 = state_44374__$1;(statearr_44383_44410[(2)] = null);
(statearr_44383_44410[(1)] = (14));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44375 === (6)))
{var inst_44334 = (state_44374[(7)]);var inst_44359 = inst_44334.length;var inst_44360 = (inst_44359 > (0));var state_44374__$1 = state_44374;if(cljs.core.truth_(inst_44360))
{var statearr_44384_44411 = state_44374__$1;(statearr_44384_44411[(1)] = (12));
} else
{var statearr_44385_44412 = state_44374__$1;(statearr_44385_44412[(1)] = (13));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_44375 === (3)))
{var inst_44372 = (state_44374[(2)]);var state_44374__$1 = state_44374;return cljs.core.async.impl.ioc_helpers.return_chan(state_44374__$1,inst_44372);
} else
{if((state_val_44375 === (12)))
{var inst_44334 = (state_44374[(7)]);var inst_44362 = cljs.core.vec(inst_44334);var state_44374__$1 = state_44374;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44374__$1,(15),out,inst_44362);
} else
{if((state_val_44375 === (2)))
{var state_44374__$1 = state_44374;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44374__$1,(4),ch);
} else
{if((state_val_44375 === (11)))
{var inst_44342 = (state_44374[(10)]);var inst_44338 = (state_44374[(9)]);var inst_44352 = (state_44374[(2)]);var inst_44353 = [];var inst_44354 = inst_44353.push(inst_44338);var inst_44334 = inst_44353;var inst_44335 = inst_44342;var state_44374__$1 = (function (){var statearr_44386 = state_44374;(statearr_44386[(7)] = inst_44334);
(statearr_44386[(11)] = inst_44354);
(statearr_44386[(8)] = inst_44335);
(statearr_44386[(12)] = inst_44352);
return statearr_44386;
})();var statearr_44387_44413 = state_44374__$1;(statearr_44387_44413[(2)] = null);
(statearr_44387_44413[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44375 === (9)))
{var inst_44334 = (state_44374[(7)]);var inst_44350 = cljs.core.vec(inst_44334);var state_44374__$1 = state_44374;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44374__$1,(11),out,inst_44350);
} else
{if((state_val_44375 === (5)))
{var inst_44342 = (state_44374[(10)]);var inst_44335 = (state_44374[(8)]);var inst_44338 = (state_44374[(9)]);var inst_44342__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44338) : f.call(null,inst_44338));var inst_44343 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44342__$1,inst_44335);var inst_44344 = cljs.core.keyword_identical_QMARK_(inst_44335,cljs.core.constant$keyword$893);var inst_44345 = (inst_44343) || (inst_44344);var state_44374__$1 = (function (){var statearr_44388 = state_44374;(statearr_44388[(10)] = inst_44342__$1);
return statearr_44388;
})();if(cljs.core.truth_(inst_44345))
{var statearr_44389_44414 = state_44374__$1;(statearr_44389_44414[(1)] = (8));
} else
{var statearr_44390_44415 = state_44374__$1;(statearr_44390_44415[(1)] = (9));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_44375 === (14)))
{var inst_44367 = (state_44374[(2)]);var inst_44368 = cljs.core.async.close_BANG_(out);var state_44374__$1 = (function (){var statearr_44392 = state_44374;(statearr_44392[(13)] = inst_44367);
return statearr_44392;
})();var statearr_44393_44416 = state_44374__$1;(statearr_44393_44416[(2)] = inst_44368);
(statearr_44393_44416[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44375 === (10)))
{var inst_44357 = (state_44374[(2)]);var state_44374__$1 = state_44374;var statearr_44394_44417 = state_44374__$1;(statearr_44394_44417[(2)] = inst_44357);
(statearr_44394_44417[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_44375 === (8)))
{var inst_44334 = (state_44374[(7)]);var inst_44342 = (state_44374[(10)]);var inst_44338 = (state_44374[(9)]);var inst_44347 = inst_44334.push(inst_44338);var tmp44391 = inst_44334;var inst_44334__$1 = tmp44391;var inst_44335 = inst_44342;var state_44374__$1 = (function (){var statearr_44395 = state_44374;(statearr_44395[(7)] = inst_44334__$1);
(statearr_44395[(8)] = inst_44335);
(statearr_44395[(14)] = inst_44347);
return statearr_44395;
})();var statearr_44396_44418 = state_44374__$1;(statearr_44396_44418[(2)] = null);
(statearr_44396_44418[(1)] = (2));
return cljs.core.constant$keyword$880;
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
});})(c__5708__auto___44404,out))
;return ((function (switch__5693__auto__,c__5708__auto___44404,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44400[(0)] = state_machine__5694__auto__);
(statearr_44400[(1)] = (1));
return statearr_44400;
});
var state_machine__5694__auto____1 = (function (state_44374){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44374);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44401){if((e44401 instanceof Object))
{var ex__5697__auto__ = e44401;var statearr_44402_44419 = state_44374;(statearr_44402_44419[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44374);
return cljs.core.constant$keyword$880;
} else
{throw e44401;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__44420 = state_44374;
state_44374 = G__44420;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44374){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___44404,out))
})();var state__5710__auto__ = (function (){var statearr_44403 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___44404);
return statearr_44403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___44404,out))
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
