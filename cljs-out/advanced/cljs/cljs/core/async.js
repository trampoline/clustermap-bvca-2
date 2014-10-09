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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t49177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49177 = (function (f,fn_handler,meta49178){
this.f = f;
this.fn_handler = fn_handler;
this.meta49178 = meta49178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49177.cljs$lang$type = true;
cljs.core.async.t49177.cljs$lang$ctorStr = "cljs.core.async/t49177";
cljs.core.async.t49177.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49177");
});
cljs.core.async.t49177.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t49177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t49177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49179){var self__ = this;
var _49179__$1 = this;return self__.meta49178;
});
cljs.core.async.t49177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49179,meta49178__$1){var self__ = this;
var _49179__$1 = this;return (new cljs.core.async.t49177(self__.f,self__.fn_handler,meta49178__$1));
});
cljs.core.async.__GT_t49177 = (function __GT_t49177(f__$1,fn_handler__$1,meta49178){return (new cljs.core.async.t49177(f__$1,fn_handler__$1,meta49178));
});
}
return (new cljs.core.async.t49177(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__49181 = buff;if(G__49181)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__49181.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__49181.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__49181);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__49181);
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
{var val_49182 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49182) : fn1.call(null,val_49182));
} else
{cljs.core.async.impl.dispatch.run(((function (val_49182,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49182) : fn1.call(null,val_49182));
});})(val_49182,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___49183 = n;var x_49184 = (0);while(true){
if((x_49184 < n__4414__auto___49183))
{(a[x_49184] = (0));
{
var G__49185 = (x_49184 + (1));
x_49184 = G__49185;
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
var G__49186 = (i + (1));
i = G__49186;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));if(typeof cljs.core.async.t49190 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49190 = (function (flag,alt_flag,meta49191){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta49191 = meta49191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49190.cljs$lang$type = true;
cljs.core.async.t49190.cljs$lang$ctorStr = "cljs.core.async/t49190";
cljs.core.async.t49190.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49190");
});})(flag))
;
cljs.core.async.t49190.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;
cljs.core.async.t49190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));
return true;
});})(flag))
;
cljs.core.async.t49190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_49192){var self__ = this;
var _49192__$1 = this;return self__.meta49191;
});})(flag))
;
cljs.core.async.t49190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_49192,meta49191__$1){var self__ = this;
var _49192__$1 = this;return (new cljs.core.async.t49190(self__.flag,self__.alt_flag,meta49191__$1));
});})(flag))
;
cljs.core.async.__GT_t49190 = ((function (flag){
return (function __GT_t49190(flag__$1,alt_flag__$1,meta49191){return (new cljs.core.async.t49190(flag__$1,alt_flag__$1,meta49191));
});})(flag))
;
}
return (new cljs.core.async.t49190(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t49196 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49196 = (function (cb,flag,alt_handler,meta49197){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta49197 = meta49197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49196.cljs$lang$type = true;
cljs.core.async.t49196.cljs$lang$ctorStr = "cljs.core.async/t49196";
cljs.core.async.t49196.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49196");
});
cljs.core.async.t49196.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t49196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t49196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49198){var self__ = this;
var _49198__$1 = this;return self__.meta49197;
});
cljs.core.async.t49196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49198,meta49197__$1){var self__ = this;
var _49198__$1 = this;return (new cljs.core.async.t49196(self__.cb,self__.flag,self__.alt_handler,meta49197__$1));
});
cljs.core.async.__GT_t49196 = (function __GT_t49196(cb__$1,flag__$1,alt_handler__$1,meta49197){return (new cljs.core.async.t49196(cb__$1,flag__$1,alt_handler__$1,meta49197));
});
}
return (new cljs.core.async.t49196(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$1100.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49199_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49199_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49199_SHARP_,port], null)));
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
var G__49200 = (i + (1));
i = G__49200;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$1085))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3546__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1085.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$1085], null));
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
var alts_BANG___delegate = function (ports,p__49201){var map__49203 = p__49201;var map__49203__$1 = ((cljs.core.seq_QMARK_(map__49203))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49203):map__49203);var opts = map__49203__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__49201 = null;if (arguments.length > 1) {
  p__49201 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__49201);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__49204){
var ports = cljs.core.first(arglist__49204);
var p__49201 = cljs.core.rest(arglist__49204);
return alts_BANG___delegate(ports,p__49201);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t49212 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49212 = (function (ch,f,map_LT_,meta49213){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta49213 = meta49213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49212.cljs$lang$type = true;
cljs.core.async.t49212.cljs$lang$ctorStr = "cljs.core.async/t49212";
cljs.core.async.t49212.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49212");
});
cljs.core.async.t49212.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t49212.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t49212.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t49212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t49215 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49215 = (function (fn1,_,meta49213,ch,f,map_LT_,meta49216){
this.fn1 = fn1;
this._ = _;
this.meta49213 = meta49213;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta49216 = meta49216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49215.cljs$lang$type = true;
cljs.core.async.t49215.cljs$lang$ctorStr = "cljs.core.async/t49215";
cljs.core.async.t49215.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49215");
});})(___$1))
;
cljs.core.async.t49215.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t49215.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t49215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__49205_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__49205_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49205_SHARP_) : self__.f.call(null,p1__49205_SHARP_)))) : f1.call(null,(((p1__49205_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49205_SHARP_) : self__.f.call(null,p1__49205_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t49215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49217){var self__ = this;
var _49217__$1 = this;return self__.meta49216;
});})(___$1))
;
cljs.core.async.t49215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49217,meta49216__$1){var self__ = this;
var _49217__$1 = this;return (new cljs.core.async.t49215(self__.fn1,self__._,self__.meta49213,self__.ch,self__.f,self__.map_LT_,meta49216__$1));
});})(___$1))
;
cljs.core.async.__GT_t49215 = ((function (___$1){
return (function __GT_t49215(fn1__$1,___$2,meta49213__$1,ch__$2,f__$2,map_LT___$2,meta49216){return (new cljs.core.async.t49215(fn1__$1,___$2,meta49213__$1,ch__$2,f__$2,map_LT___$2,meta49216));
});})(___$1))
;
}
return (new cljs.core.async.t49215(fn1,___$1,self__.meta49213,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t49212.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t49212.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t49212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49214){var self__ = this;
var _49214__$1 = this;return self__.meta49213;
});
cljs.core.async.t49212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49214,meta49213__$1){var self__ = this;
var _49214__$1 = this;return (new cljs.core.async.t49212(self__.ch,self__.f,self__.map_LT_,meta49213__$1));
});
cljs.core.async.__GT_t49212 = (function __GT_t49212(ch__$1,f__$1,map_LT___$1,meta49213){return (new cljs.core.async.t49212(ch__$1,f__$1,map_LT___$1,meta49213));
});
}
return (new cljs.core.async.t49212(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t49221 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49221 = (function (ch,f,map_GT_,meta49222){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta49222 = meta49222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49221.cljs$lang$type = true;
cljs.core.async.t49221.cljs$lang$ctorStr = "cljs.core.async/t49221";
cljs.core.async.t49221.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49221");
});
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t49221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49223){var self__ = this;
var _49223__$1 = this;return self__.meta49222;
});
cljs.core.async.t49221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49223,meta49222__$1){var self__ = this;
var _49223__$1 = this;return (new cljs.core.async.t49221(self__.ch,self__.f,self__.map_GT_,meta49222__$1));
});
cljs.core.async.__GT_t49221 = (function __GT_t49221(ch__$1,f__$1,map_GT___$1,meta49222){return (new cljs.core.async.t49221(ch__$1,f__$1,map_GT___$1,meta49222));
});
}
return (new cljs.core.async.t49221(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t49227 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49227 = (function (ch,p,filter_GT_,meta49228){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta49228 = meta49228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49227.cljs$lang$type = true;
cljs.core.async.t49227.cljs$lang$ctorStr = "cljs.core.async/t49227";
cljs.core.async.t49227.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49227");
});
cljs.core.async.t49227.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t49227.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t49227.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t49227.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t49227.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t49227.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t49227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49229){var self__ = this;
var _49229__$1 = this;return self__.meta49228;
});
cljs.core.async.t49227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49229,meta49228__$1){var self__ = this;
var _49229__$1 = this;return (new cljs.core.async.t49227(self__.ch,self__.p,self__.filter_GT_,meta49228__$1));
});
cljs.core.async.__GT_t49227 = (function __GT_t49227(ch__$1,p__$1,filter_GT___$1,meta49228){return (new cljs.core.async.t49227(ch__$1,p__$1,filter_GT___$1,meta49228));
});
}
return (new cljs.core.async.t49227(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___49312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___49312,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49312,out){
return (function (state_49291){var state_val_49292 = (state_49291[(1)]);if((state_val_49292 === (7)))
{var inst_49287 = (state_49291[(2)]);var state_49291__$1 = state_49291;var statearr_49293_49313 = state_49291__$1;(statearr_49293_49313[(2)] = inst_49287);
(statearr_49293_49313[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49292 === (1)))
{var state_49291__$1 = state_49291;var statearr_49294_49314 = state_49291__$1;(statearr_49294_49314[(2)] = null);
(statearr_49294_49314[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49292 === (4)))
{var inst_49273 = (state_49291[(7)]);var inst_49273__$1 = (state_49291[(2)]);var inst_49274 = (inst_49273__$1 == null);var state_49291__$1 = (function (){var statearr_49295 = state_49291;(statearr_49295[(7)] = inst_49273__$1);
return statearr_49295;
})();if(cljs.core.truth_(inst_49274))
{var statearr_49296_49315 = state_49291__$1;(statearr_49296_49315[(1)] = (5));
} else
{var statearr_49297_49316 = state_49291__$1;(statearr_49297_49316[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49292 === (6)))
{var inst_49273 = (state_49291[(7)]);var inst_49278 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49273) : p.call(null,inst_49273));var state_49291__$1 = state_49291;if(cljs.core.truth_(inst_49278))
{var statearr_49298_49317 = state_49291__$1;(statearr_49298_49317[(1)] = (8));
} else
{var statearr_49299_49318 = state_49291__$1;(statearr_49299_49318[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49292 === (3)))
{var inst_49289 = (state_49291[(2)]);var state_49291__$1 = state_49291;return cljs.core.async.impl.ioc_helpers.return_chan(state_49291__$1,inst_49289);
} else
{if((state_val_49292 === (2)))
{var state_49291__$1 = state_49291;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49291__$1,(4),ch);
} else
{if((state_val_49292 === (11)))
{var inst_49281 = (state_49291[(2)]);var state_49291__$1 = state_49291;var statearr_49300_49319 = state_49291__$1;(statearr_49300_49319[(2)] = inst_49281);
(statearr_49300_49319[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49292 === (9)))
{var state_49291__$1 = state_49291;var statearr_49301_49320 = state_49291__$1;(statearr_49301_49320[(2)] = null);
(statearr_49301_49320[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49292 === (5)))
{var inst_49276 = cljs.core.async.close_BANG_(out);var state_49291__$1 = state_49291;var statearr_49302_49321 = state_49291__$1;(statearr_49302_49321[(2)] = inst_49276);
(statearr_49302_49321[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49292 === (10)))
{var inst_49284 = (state_49291[(2)]);var state_49291__$1 = (function (){var statearr_49303 = state_49291;(statearr_49303[(8)] = inst_49284);
return statearr_49303;
})();var statearr_49304_49322 = state_49291__$1;(statearr_49304_49322[(2)] = null);
(statearr_49304_49322[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49292 === (8)))
{var inst_49273 = (state_49291[(7)]);var state_49291__$1 = state_49291;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49291__$1,(11),out,inst_49273);
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
});})(c__5708__auto___49312,out))
;return ((function (switch__5693__auto__,c__5708__auto___49312,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49308 = [null,null,null,null,null,null,null,null,null];(statearr_49308[(0)] = state_machine__5694__auto__);
(statearr_49308[(1)] = (1));
return statearr_49308;
});
var state_machine__5694__auto____1 = (function (state_49291){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49291);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49309){if((e49309 instanceof Object))
{var ex__5697__auto__ = e49309;var statearr_49310_49323 = state_49291;(statearr_49310_49323[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49291);
return cljs.core.constant$keyword$1094;
} else
{throw e49309;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49324 = state_49291;
state_49291 = G__49324;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49291){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49312,out))
})();var state__5710__auto__ = (function (){var statearr_49311 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49312);
return statearr_49311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___49312,out))
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
return (function (state_49476){var state_val_49477 = (state_49476[(1)]);if((state_val_49477 === (7)))
{var inst_49472 = (state_49476[(2)]);var state_49476__$1 = state_49476;var statearr_49478_49515 = state_49476__$1;(statearr_49478_49515[(2)] = inst_49472);
(statearr_49478_49515[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (20)))
{var inst_49447 = (state_49476[(7)]);var inst_49458 = (state_49476[(2)]);var inst_49459 = cljs.core.next(inst_49447);var inst_49433 = inst_49459;var inst_49434 = null;var inst_49435 = (0);var inst_49436 = (0);var state_49476__$1 = (function (){var statearr_49479 = state_49476;(statearr_49479[(8)] = inst_49436);
(statearr_49479[(9)] = inst_49458);
(statearr_49479[(10)] = inst_49434);
(statearr_49479[(11)] = inst_49435);
(statearr_49479[(12)] = inst_49433);
return statearr_49479;
})();var statearr_49480_49516 = state_49476__$1;(statearr_49480_49516[(2)] = null);
(statearr_49480_49516[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (1)))
{var state_49476__$1 = state_49476;var statearr_49481_49517 = state_49476__$1;(statearr_49481_49517[(2)] = null);
(statearr_49481_49517[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (4)))
{var inst_49422 = (state_49476[(13)]);var inst_49422__$1 = (state_49476[(2)]);var inst_49423 = (inst_49422__$1 == null);var state_49476__$1 = (function (){var statearr_49485 = state_49476;(statearr_49485[(13)] = inst_49422__$1);
return statearr_49485;
})();if(cljs.core.truth_(inst_49423))
{var statearr_49486_49518 = state_49476__$1;(statearr_49486_49518[(1)] = (5));
} else
{var statearr_49487_49519 = state_49476__$1;(statearr_49487_49519[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (15)))
{var state_49476__$1 = state_49476;var statearr_49488_49520 = state_49476__$1;(statearr_49488_49520[(2)] = null);
(statearr_49488_49520[(1)] = (16));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (13)))
{var inst_49436 = (state_49476[(8)]);var inst_49434 = (state_49476[(10)]);var inst_49435 = (state_49476[(11)]);var inst_49433 = (state_49476[(12)]);var inst_49443 = (state_49476[(2)]);var inst_49444 = (inst_49436 + (1));var tmp49482 = inst_49434;var tmp49483 = inst_49435;var tmp49484 = inst_49433;var inst_49433__$1 = tmp49484;var inst_49434__$1 = tmp49482;var inst_49435__$1 = tmp49483;var inst_49436__$1 = inst_49444;var state_49476__$1 = (function (){var statearr_49489 = state_49476;(statearr_49489[(8)] = inst_49436__$1);
(statearr_49489[(10)] = inst_49434__$1);
(statearr_49489[(14)] = inst_49443);
(statearr_49489[(11)] = inst_49435__$1);
(statearr_49489[(12)] = inst_49433__$1);
return statearr_49489;
})();var statearr_49490_49521 = state_49476__$1;(statearr_49490_49521[(2)] = null);
(statearr_49490_49521[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (6)))
{var inst_49422 = (state_49476[(13)]);var inst_49427 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49422) : f.call(null,inst_49422));var inst_49432 = cljs.core.seq(inst_49427);var inst_49433 = inst_49432;var inst_49434 = null;var inst_49435 = (0);var inst_49436 = (0);var state_49476__$1 = (function (){var statearr_49491 = state_49476;(statearr_49491[(8)] = inst_49436);
(statearr_49491[(10)] = inst_49434);
(statearr_49491[(11)] = inst_49435);
(statearr_49491[(12)] = inst_49433);
return statearr_49491;
})();var statearr_49492_49522 = state_49476__$1;(statearr_49492_49522[(2)] = null);
(statearr_49492_49522[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (17)))
{var inst_49447 = (state_49476[(7)]);var inst_49451 = cljs.core.chunk_first(inst_49447);var inst_49452 = cljs.core.chunk_rest(inst_49447);var inst_49453 = cljs.core.count(inst_49451);var inst_49433 = inst_49452;var inst_49434 = inst_49451;var inst_49435 = inst_49453;var inst_49436 = (0);var state_49476__$1 = (function (){var statearr_49493 = state_49476;(statearr_49493[(8)] = inst_49436);
(statearr_49493[(10)] = inst_49434);
(statearr_49493[(11)] = inst_49435);
(statearr_49493[(12)] = inst_49433);
return statearr_49493;
})();var statearr_49494_49523 = state_49476__$1;(statearr_49494_49523[(2)] = null);
(statearr_49494_49523[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (3)))
{var inst_49474 = (state_49476[(2)]);var state_49476__$1 = state_49476;return cljs.core.async.impl.ioc_helpers.return_chan(state_49476__$1,inst_49474);
} else
{if((state_val_49477 === (12)))
{var inst_49467 = (state_49476[(2)]);var state_49476__$1 = state_49476;var statearr_49495_49524 = state_49476__$1;(statearr_49495_49524[(2)] = inst_49467);
(statearr_49495_49524[(1)] = (9));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (2)))
{var state_49476__$1 = state_49476;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49476__$1,(4),in$);
} else
{if((state_val_49477 === (19)))
{var inst_49462 = (state_49476[(2)]);var state_49476__$1 = state_49476;var statearr_49496_49525 = state_49476__$1;(statearr_49496_49525[(2)] = inst_49462);
(statearr_49496_49525[(1)] = (16));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (11)))
{var inst_49447 = (state_49476[(7)]);var inst_49433 = (state_49476[(12)]);var inst_49447__$1 = cljs.core.seq(inst_49433);var state_49476__$1 = (function (){var statearr_49497 = state_49476;(statearr_49497[(7)] = inst_49447__$1);
return statearr_49497;
})();if(inst_49447__$1)
{var statearr_49498_49526 = state_49476__$1;(statearr_49498_49526[(1)] = (14));
} else
{var statearr_49499_49527 = state_49476__$1;(statearr_49499_49527[(1)] = (15));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (9)))
{var inst_49469 = (state_49476[(2)]);var state_49476__$1 = (function (){var statearr_49500 = state_49476;(statearr_49500[(15)] = inst_49469);
return statearr_49500;
})();var statearr_49501_49528 = state_49476__$1;(statearr_49501_49528[(2)] = null);
(statearr_49501_49528[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (5)))
{var inst_49425 = cljs.core.async.close_BANG_(out);var state_49476__$1 = state_49476;var statearr_49502_49529 = state_49476__$1;(statearr_49502_49529[(2)] = inst_49425);
(statearr_49502_49529[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (14)))
{var inst_49447 = (state_49476[(7)]);var inst_49449 = cljs.core.chunked_seq_QMARK_(inst_49447);var state_49476__$1 = state_49476;if(inst_49449)
{var statearr_49503_49530 = state_49476__$1;(statearr_49503_49530[(1)] = (17));
} else
{var statearr_49504_49531 = state_49476__$1;(statearr_49504_49531[(1)] = (18));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (16)))
{var inst_49465 = (state_49476[(2)]);var state_49476__$1 = state_49476;var statearr_49505_49532 = state_49476__$1;(statearr_49505_49532[(2)] = inst_49465);
(statearr_49505_49532[(1)] = (12));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49477 === (10)))
{var inst_49436 = (state_49476[(8)]);var inst_49434 = (state_49476[(10)]);var inst_49441 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49434,inst_49436);var state_49476__$1 = state_49476;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49476__$1,(13),out,inst_49441);
} else
{if((state_val_49477 === (18)))
{var inst_49447 = (state_49476[(7)]);var inst_49456 = cljs.core.first(inst_49447);var state_49476__$1 = state_49476;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49476__$1,(20),out,inst_49456);
} else
{if((state_val_49477 === (8)))
{var inst_49436 = (state_49476[(8)]);var inst_49435 = (state_49476[(11)]);var inst_49438 = (inst_49436 < inst_49435);var inst_49439 = inst_49438;var state_49476__$1 = state_49476;if(cljs.core.truth_(inst_49439))
{var statearr_49506_49533 = state_49476__$1;(statearr_49506_49533[(1)] = (10));
} else
{var statearr_49507_49534 = state_49476__$1;(statearr_49507_49534[(1)] = (11));
}
return cljs.core.constant$keyword$1094;
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
var state_machine__5694__auto____0 = (function (){var statearr_49511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49511[(0)] = state_machine__5694__auto__);
(statearr_49511[(1)] = (1));
return statearr_49511;
});
var state_machine__5694__auto____1 = (function (state_49476){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49476);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49512){if((e49512 instanceof Object))
{var ex__5697__auto__ = e49512;var statearr_49513_49535 = state_49476;(statearr_49513_49535[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49476);
return cljs.core.constant$keyword$1094;
} else
{throw e49512;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49536 = state_49476;
state_49476 = G__49536;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49476){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_49514 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49514;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___49617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___49617){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49617){
return (function (state_49596){var state_val_49597 = (state_49596[(1)]);if((state_val_49597 === (7)))
{var inst_49592 = (state_49596[(2)]);var state_49596__$1 = state_49596;var statearr_49598_49618 = state_49596__$1;(statearr_49598_49618[(2)] = inst_49592);
(statearr_49598_49618[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49597 === (1)))
{var state_49596__$1 = state_49596;var statearr_49599_49619 = state_49596__$1;(statearr_49599_49619[(2)] = null);
(statearr_49599_49619[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49597 === (4)))
{var inst_49579 = (state_49596[(7)]);var inst_49579__$1 = (state_49596[(2)]);var inst_49580 = (inst_49579__$1 == null);var state_49596__$1 = (function (){var statearr_49600 = state_49596;(statearr_49600[(7)] = inst_49579__$1);
return statearr_49600;
})();if(cljs.core.truth_(inst_49580))
{var statearr_49601_49620 = state_49596__$1;(statearr_49601_49620[(1)] = (5));
} else
{var statearr_49602_49621 = state_49596__$1;(statearr_49602_49621[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49597 === (6)))
{var inst_49579 = (state_49596[(7)]);var state_49596__$1 = state_49596;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49596__$1,(11),to,inst_49579);
} else
{if((state_val_49597 === (3)))
{var inst_49594 = (state_49596[(2)]);var state_49596__$1 = state_49596;return cljs.core.async.impl.ioc_helpers.return_chan(state_49596__$1,inst_49594);
} else
{if((state_val_49597 === (2)))
{var state_49596__$1 = state_49596;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49596__$1,(4),from);
} else
{if((state_val_49597 === (11)))
{var inst_49589 = (state_49596[(2)]);var state_49596__$1 = (function (){var statearr_49603 = state_49596;(statearr_49603[(8)] = inst_49589);
return statearr_49603;
})();var statearr_49604_49622 = state_49596__$1;(statearr_49604_49622[(2)] = null);
(statearr_49604_49622[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49597 === (9)))
{var state_49596__$1 = state_49596;var statearr_49605_49623 = state_49596__$1;(statearr_49605_49623[(2)] = null);
(statearr_49605_49623[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49597 === (5)))
{var state_49596__$1 = state_49596;if(cljs.core.truth_(close_QMARK_))
{var statearr_49606_49624 = state_49596__$1;(statearr_49606_49624[(1)] = (8));
} else
{var statearr_49607_49625 = state_49596__$1;(statearr_49607_49625[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49597 === (10)))
{var inst_49586 = (state_49596[(2)]);var state_49596__$1 = state_49596;var statearr_49608_49626 = state_49596__$1;(statearr_49608_49626[(2)] = inst_49586);
(statearr_49608_49626[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49597 === (8)))
{var inst_49583 = cljs.core.async.close_BANG_(to);var state_49596__$1 = state_49596;var statearr_49609_49627 = state_49596__$1;(statearr_49609_49627[(2)] = inst_49583);
(statearr_49609_49627[(1)] = (10));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___49617))
;return ((function (switch__5693__auto__,c__5708__auto___49617){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49613 = [null,null,null,null,null,null,null,null,null];(statearr_49613[(0)] = state_machine__5694__auto__);
(statearr_49613[(1)] = (1));
return statearr_49613;
});
var state_machine__5694__auto____1 = (function (state_49596){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49596);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49614){if((e49614 instanceof Object))
{var ex__5697__auto__ = e49614;var statearr_49615_49628 = state_49596;(statearr_49615_49628[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49596);
return cljs.core.constant$keyword$1094;
} else
{throw e49614;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49629 = state_49596;
state_49596 = G__49629;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49596){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49617))
})();var state__5710__auto__ = (function (){var statearr_49616 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49617);
return statearr_49616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___49617))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5708__auto___49716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___49716,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49716,tc,fc){
return (function (state_49694){var state_val_49695 = (state_49694[(1)]);if((state_val_49695 === (7)))
{var inst_49690 = (state_49694[(2)]);var state_49694__$1 = state_49694;var statearr_49696_49717 = state_49694__$1;(statearr_49696_49717[(2)] = inst_49690);
(statearr_49696_49717[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49695 === (1)))
{var state_49694__$1 = state_49694;var statearr_49697_49718 = state_49694__$1;(statearr_49697_49718[(2)] = null);
(statearr_49697_49718[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49695 === (4)))
{var inst_49675 = (state_49694[(7)]);var inst_49675__$1 = (state_49694[(2)]);var inst_49676 = (inst_49675__$1 == null);var state_49694__$1 = (function (){var statearr_49698 = state_49694;(statearr_49698[(7)] = inst_49675__$1);
return statearr_49698;
})();if(cljs.core.truth_(inst_49676))
{var statearr_49699_49719 = state_49694__$1;(statearr_49699_49719[(1)] = (5));
} else
{var statearr_49700_49720 = state_49694__$1;(statearr_49700_49720[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49695 === (6)))
{var inst_49675 = (state_49694[(7)]);var inst_49681 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49675) : p.call(null,inst_49675));var state_49694__$1 = state_49694;if(cljs.core.truth_(inst_49681))
{var statearr_49701_49721 = state_49694__$1;(statearr_49701_49721[(1)] = (9));
} else
{var statearr_49702_49722 = state_49694__$1;(statearr_49702_49722[(1)] = (10));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49695 === (3)))
{var inst_49692 = (state_49694[(2)]);var state_49694__$1 = state_49694;return cljs.core.async.impl.ioc_helpers.return_chan(state_49694__$1,inst_49692);
} else
{if((state_val_49695 === (2)))
{var state_49694__$1 = state_49694;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49694__$1,(4),ch);
} else
{if((state_val_49695 === (11)))
{var inst_49675 = (state_49694[(7)]);var inst_49685 = (state_49694[(2)]);var state_49694__$1 = state_49694;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49694__$1,(8),inst_49685,inst_49675);
} else
{if((state_val_49695 === (9)))
{var state_49694__$1 = state_49694;var statearr_49703_49723 = state_49694__$1;(statearr_49703_49723[(2)] = tc);
(statearr_49703_49723[(1)] = (11));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49695 === (5)))
{var inst_49678 = cljs.core.async.close_BANG_(tc);var inst_49679 = cljs.core.async.close_BANG_(fc);var state_49694__$1 = (function (){var statearr_49704 = state_49694;(statearr_49704[(8)] = inst_49678);
return statearr_49704;
})();var statearr_49705_49724 = state_49694__$1;(statearr_49705_49724[(2)] = inst_49679);
(statearr_49705_49724[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49695 === (10)))
{var state_49694__$1 = state_49694;var statearr_49706_49725 = state_49694__$1;(statearr_49706_49725[(2)] = fc);
(statearr_49706_49725[(1)] = (11));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49695 === (8)))
{var inst_49687 = (state_49694[(2)]);var state_49694__$1 = (function (){var statearr_49707 = state_49694;(statearr_49707[(9)] = inst_49687);
return statearr_49707;
})();var statearr_49708_49726 = state_49694__$1;(statearr_49708_49726[(2)] = null);
(statearr_49708_49726[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___49716,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___49716,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49712 = [null,null,null,null,null,null,null,null,null,null];(statearr_49712[(0)] = state_machine__5694__auto__);
(statearr_49712[(1)] = (1));
return statearr_49712;
});
var state_machine__5694__auto____1 = (function (state_49694){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49694);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49713){if((e49713 instanceof Object))
{var ex__5697__auto__ = e49713;var statearr_49714_49727 = state_49694;(statearr_49714_49727[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49694);
return cljs.core.constant$keyword$1094;
} else
{throw e49713;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49728 = state_49694;
state_49694 = G__49728;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49694){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49716,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_49715 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49716);
return statearr_49715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___49716,tc,fc))
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
return (function (state_49775){var state_val_49776 = (state_49775[(1)]);if((state_val_49776 === (7)))
{var inst_49771 = (state_49775[(2)]);var state_49775__$1 = state_49775;var statearr_49777_49793 = state_49775__$1;(statearr_49777_49793[(2)] = inst_49771);
(statearr_49777_49793[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49776 === (6)))
{var inst_49764 = (state_49775[(7)]);var inst_49761 = (state_49775[(8)]);var inst_49768 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49761,inst_49764) : f.call(null,inst_49761,inst_49764));var inst_49761__$1 = inst_49768;var state_49775__$1 = (function (){var statearr_49778 = state_49775;(statearr_49778[(8)] = inst_49761__$1);
return statearr_49778;
})();var statearr_49779_49794 = state_49775__$1;(statearr_49779_49794[(2)] = null);
(statearr_49779_49794[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49776 === (5)))
{var inst_49761 = (state_49775[(8)]);var state_49775__$1 = state_49775;var statearr_49780_49795 = state_49775__$1;(statearr_49780_49795[(2)] = inst_49761);
(statearr_49780_49795[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49776 === (4)))
{var inst_49764 = (state_49775[(7)]);var inst_49764__$1 = (state_49775[(2)]);var inst_49765 = (inst_49764__$1 == null);var state_49775__$1 = (function (){var statearr_49781 = state_49775;(statearr_49781[(7)] = inst_49764__$1);
return statearr_49781;
})();if(cljs.core.truth_(inst_49765))
{var statearr_49782_49796 = state_49775__$1;(statearr_49782_49796[(1)] = (5));
} else
{var statearr_49783_49797 = state_49775__$1;(statearr_49783_49797[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49776 === (3)))
{var inst_49773 = (state_49775[(2)]);var state_49775__$1 = state_49775;return cljs.core.async.impl.ioc_helpers.return_chan(state_49775__$1,inst_49773);
} else
{if((state_val_49776 === (2)))
{var state_49775__$1 = state_49775;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49775__$1,(4),ch);
} else
{if((state_val_49776 === (1)))
{var inst_49761 = init;var state_49775__$1 = (function (){var statearr_49784 = state_49775;(statearr_49784[(8)] = inst_49761);
return statearr_49784;
})();var statearr_49785_49798 = state_49775__$1;(statearr_49785_49798[(2)] = null);
(statearr_49785_49798[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
var state_machine__5694__auto____0 = (function (){var statearr_49789 = [null,null,null,null,null,null,null,null,null];(statearr_49789[(0)] = state_machine__5694__auto__);
(statearr_49789[(1)] = (1));
return statearr_49789;
});
var state_machine__5694__auto____1 = (function (state_49775){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49775);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49790){if((e49790 instanceof Object))
{var ex__5697__auto__ = e49790;var statearr_49791_49799 = state_49775;(statearr_49791_49799[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49775);
return cljs.core.constant$keyword$1094;
} else
{throw e49790;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49800 = state_49775;
state_49775 = G__49800;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49775){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_49792 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49792;
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
return (function (state_49862){var state_val_49863 = (state_49862[(1)]);if((state_val_49863 === (7)))
{var inst_49843 = (state_49862[(7)]);var inst_49848 = (state_49862[(2)]);var inst_49849 = cljs.core.next(inst_49843);var inst_49843__$1 = inst_49849;var state_49862__$1 = (function (){var statearr_49864 = state_49862;(statearr_49864[(7)] = inst_49843__$1);
(statearr_49864[(8)] = inst_49848);
return statearr_49864;
})();var statearr_49865_49883 = state_49862__$1;(statearr_49865_49883[(2)] = null);
(statearr_49865_49883[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49863 === (1)))
{var inst_49842 = cljs.core.seq(coll);var inst_49843 = inst_49842;var state_49862__$1 = (function (){var statearr_49866 = state_49862;(statearr_49866[(7)] = inst_49843);
return statearr_49866;
})();var statearr_49867_49884 = state_49862__$1;(statearr_49867_49884[(2)] = null);
(statearr_49867_49884[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49863 === (4)))
{var inst_49843 = (state_49862[(7)]);var inst_49846 = cljs.core.first(inst_49843);var state_49862__$1 = state_49862;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49862__$1,(7),ch,inst_49846);
} else
{if((state_val_49863 === (6)))
{var inst_49858 = (state_49862[(2)]);var state_49862__$1 = state_49862;var statearr_49868_49885 = state_49862__$1;(statearr_49868_49885[(2)] = inst_49858);
(statearr_49868_49885[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49863 === (3)))
{var inst_49860 = (state_49862[(2)]);var state_49862__$1 = state_49862;return cljs.core.async.impl.ioc_helpers.return_chan(state_49862__$1,inst_49860);
} else
{if((state_val_49863 === (2)))
{var inst_49843 = (state_49862[(7)]);var state_49862__$1 = state_49862;if(cljs.core.truth_(inst_49843))
{var statearr_49869_49886 = state_49862__$1;(statearr_49869_49886[(1)] = (4));
} else
{var statearr_49870_49887 = state_49862__$1;(statearr_49870_49887[(1)] = (5));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49863 === (9)))
{var state_49862__$1 = state_49862;var statearr_49871_49888 = state_49862__$1;(statearr_49871_49888[(2)] = null);
(statearr_49871_49888[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49863 === (5)))
{var state_49862__$1 = state_49862;if(cljs.core.truth_(close_QMARK_))
{var statearr_49872_49889 = state_49862__$1;(statearr_49872_49889[(1)] = (8));
} else
{var statearr_49873_49890 = state_49862__$1;(statearr_49873_49890[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49863 === (10)))
{var inst_49856 = (state_49862[(2)]);var state_49862__$1 = state_49862;var statearr_49874_49891 = state_49862__$1;(statearr_49874_49891[(2)] = inst_49856);
(statearr_49874_49891[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49863 === (8)))
{var inst_49853 = cljs.core.async.close_BANG_(ch);var state_49862__$1 = state_49862;var statearr_49875_49892 = state_49862__$1;(statearr_49875_49892[(2)] = inst_49853);
(statearr_49875_49892[(1)] = (10));
return cljs.core.constant$keyword$1094;
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
var state_machine__5694__auto____0 = (function (){var statearr_49879 = [null,null,null,null,null,null,null,null,null];(statearr_49879[(0)] = state_machine__5694__auto__);
(statearr_49879[(1)] = (1));
return statearr_49879;
});
var state_machine__5694__auto____1 = (function (state_49862){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49862);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49880){if((e49880 instanceof Object))
{var ex__5697__auto__ = e49880;var statearr_49881_49893 = state_49862;(statearr_49881_49893[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49862);
return cljs.core.constant$keyword$1094;
} else
{throw e49880;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49894 = state_49862;
state_49862 = G__49894;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49862){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_49882 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49882;
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
cljs.core.async.Mux = (function (){var obj49896 = {};return obj49896;
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
cljs.core.async.Mult = (function (){var obj49898 = {};return obj49898;
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
cljs.core.async.mult = (function mult(ch){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var m = (function (){if(typeof cljs.core.async.t50122 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50122 = (function (cs,ch,mult,meta50123){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta50123 = meta50123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50122.cljs$lang$type = true;
cljs.core.async.t50122.cljs$lang$ctorStr = "cljs.core.async/t50122";
cljs.core.async.t50122.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t50122");
});})(cs))
;
cljs.core.async.t50122.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t50122.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t50122.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t50122.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return null;
});})(cs))
;
cljs.core.async.t50122.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t50122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_50124){var self__ = this;
var _50124__$1 = this;return self__.meta50123;
});})(cs))
;
cljs.core.async.t50122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_50124,meta50123__$1){var self__ = this;
var _50124__$1 = this;return (new cljs.core.async.t50122(self__.cs,self__.ch,self__.mult,meta50123__$1));
});})(cs))
;
cljs.core.async.__GT_t50122 = ((function (cs){
return (function __GT_t50122(cs__$1,ch__$1,mult__$1,meta50123){return (new cljs.core.async.t50122(cs__$1,ch__$1,mult__$1,meta50123));
});})(cs))
;
}
return (new cljs.core.async.t50122(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___50345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50345,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50345,cs,m,dchan,dctr,done){
return (function (state_50259){var state_val_50260 = (state_50259[(1)]);if((state_val_50260 === (7)))
{var inst_50255 = (state_50259[(2)]);var state_50259__$1 = state_50259;var statearr_50261_50346 = state_50259__$1;(statearr_50261_50346[(2)] = inst_50255);
(statearr_50261_50346[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (20)))
{var inst_50156 = (state_50259[(7)]);var inst_50166 = cljs.core.first(inst_50156);var inst_50167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50166,(0),null);var inst_50168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50166,(1),null);var state_50259__$1 = (function (){var statearr_50262 = state_50259;(statearr_50262[(8)] = inst_50167);
return statearr_50262;
})();if(cljs.core.truth_(inst_50168))
{var statearr_50263_50347 = state_50259__$1;(statearr_50263_50347[(1)] = (22));
} else
{var statearr_50264_50348 = state_50259__$1;(statearr_50264_50348[(1)] = (23));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (27)))
{var inst_50198 = (state_50259[(9)]);var inst_50196 = (state_50259[(10)]);var inst_50203 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50196,inst_50198);var state_50259__$1 = (function (){var statearr_50265 = state_50259;(statearr_50265[(11)] = inst_50203);
return statearr_50265;
})();var statearr_50266_50349 = state_50259__$1;(statearr_50266_50349[(2)] = null);
(statearr_50266_50349[(1)] = (32));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (1)))
{var state_50259__$1 = state_50259;var statearr_50267_50350 = state_50259__$1;(statearr_50267_50350[(2)] = null);
(statearr_50267_50350[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (24)))
{var inst_50156 = (state_50259[(7)]);var inst_50173 = (state_50259[(2)]);var inst_50174 = cljs.core.next(inst_50156);var inst_50136 = inst_50174;var inst_50137 = null;var inst_50138 = (0);var inst_50139 = (0);var state_50259__$1 = (function (){var statearr_50268 = state_50259;(statearr_50268[(12)] = inst_50173);
(statearr_50268[(13)] = inst_50136);
(statearr_50268[(14)] = inst_50138);
(statearr_50268[(15)] = inst_50137);
(statearr_50268[(16)] = inst_50139);
return statearr_50268;
})();var statearr_50269_50351 = state_50259__$1;(statearr_50269_50351[(2)] = null);
(statearr_50269_50351[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (39)))
{var inst_50216 = (state_50259[(17)]);var inst_50234 = (state_50259[(2)]);var inst_50235 = cljs.core.next(inst_50216);var inst_50195 = inst_50235;var inst_50196 = null;var inst_50197 = (0);var inst_50198 = (0);var state_50259__$1 = (function (){var statearr_50273 = state_50259;(statearr_50273[(9)] = inst_50198);
(statearr_50273[(18)] = inst_50234);
(statearr_50273[(19)] = inst_50197);
(statearr_50273[(10)] = inst_50196);
(statearr_50273[(20)] = inst_50195);
return statearr_50273;
})();var statearr_50274_50352 = state_50259__$1;(statearr_50274_50352[(2)] = null);
(statearr_50274_50352[(1)] = (25));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (4)))
{var inst_50127 = (state_50259[(21)]);var inst_50127__$1 = (state_50259[(2)]);var inst_50128 = (inst_50127__$1 == null);var state_50259__$1 = (function (){var statearr_50275 = state_50259;(statearr_50275[(21)] = inst_50127__$1);
return statearr_50275;
})();if(cljs.core.truth_(inst_50128))
{var statearr_50276_50353 = state_50259__$1;(statearr_50276_50353[(1)] = (5));
} else
{var statearr_50277_50354 = state_50259__$1;(statearr_50277_50354[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (15)))
{var inst_50136 = (state_50259[(13)]);var inst_50138 = (state_50259[(14)]);var inst_50137 = (state_50259[(15)]);var inst_50139 = (state_50259[(16)]);var inst_50152 = (state_50259[(2)]);var inst_50153 = (inst_50139 + (1));var tmp50270 = inst_50136;var tmp50271 = inst_50138;var tmp50272 = inst_50137;var inst_50136__$1 = tmp50270;var inst_50137__$1 = tmp50272;var inst_50138__$1 = tmp50271;var inst_50139__$1 = inst_50153;var state_50259__$1 = (function (){var statearr_50278 = state_50259;(statearr_50278[(13)] = inst_50136__$1);
(statearr_50278[(22)] = inst_50152);
(statearr_50278[(14)] = inst_50138__$1);
(statearr_50278[(15)] = inst_50137__$1);
(statearr_50278[(16)] = inst_50139__$1);
return statearr_50278;
})();var statearr_50279_50355 = state_50259__$1;(statearr_50279_50355[(2)] = null);
(statearr_50279_50355[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (21)))
{var inst_50177 = (state_50259[(2)]);var state_50259__$1 = state_50259;var statearr_50280_50356 = state_50259__$1;(statearr_50280_50356[(2)] = inst_50177);
(statearr_50280_50356[(1)] = (18));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (31)))
{var inst_50203 = (state_50259[(11)]);var inst_50204 = (state_50259[(2)]);var inst_50205 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_50206 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50203);var state_50259__$1 = (function (){var statearr_50281 = state_50259;(statearr_50281[(23)] = inst_50205);
(statearr_50281[(24)] = inst_50204);
return statearr_50281;
})();var statearr_50282_50357 = state_50259__$1;(statearr_50282_50357[(2)] = inst_50206);
cljs.core.async.impl.ioc_helpers.process_exception(state_50259__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (32)))
{var inst_50203 = (state_50259[(11)]);var inst_50127 = (state_50259[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50259,(31),Object,null,(30));var inst_50210 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50203,inst_50127,done);var state_50259__$1 = state_50259;var statearr_50283_50358 = state_50259__$1;(statearr_50283_50358[(2)] = inst_50210);
cljs.core.async.impl.ioc_helpers.process_exception(state_50259__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (40)))
{var inst_50225 = (state_50259[(25)]);var inst_50226 = (state_50259[(2)]);var inst_50227 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_50228 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50225);var state_50259__$1 = (function (){var statearr_50284 = state_50259;(statearr_50284[(26)] = inst_50227);
(statearr_50284[(27)] = inst_50226);
return statearr_50284;
})();var statearr_50285_50359 = state_50259__$1;(statearr_50285_50359[(2)] = inst_50228);
cljs.core.async.impl.ioc_helpers.process_exception(state_50259__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (33)))
{var inst_50216 = (state_50259[(17)]);var inst_50218 = cljs.core.chunked_seq_QMARK_(inst_50216);var state_50259__$1 = state_50259;if(inst_50218)
{var statearr_50286_50360 = state_50259__$1;(statearr_50286_50360[(1)] = (36));
} else
{var statearr_50287_50361 = state_50259__$1;(statearr_50287_50361[(1)] = (37));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (13)))
{var inst_50146 = (state_50259[(28)]);var inst_50149 = cljs.core.async.close_BANG_(inst_50146);var state_50259__$1 = state_50259;var statearr_50288_50362 = state_50259__$1;(statearr_50288_50362[(2)] = inst_50149);
(statearr_50288_50362[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (22)))
{var inst_50167 = (state_50259[(8)]);var inst_50170 = cljs.core.async.close_BANG_(inst_50167);var state_50259__$1 = state_50259;var statearr_50289_50363 = state_50259__$1;(statearr_50289_50363[(2)] = inst_50170);
(statearr_50289_50363[(1)] = (24));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (36)))
{var inst_50216 = (state_50259[(17)]);var inst_50220 = cljs.core.chunk_first(inst_50216);var inst_50221 = cljs.core.chunk_rest(inst_50216);var inst_50222 = cljs.core.count(inst_50220);var inst_50195 = inst_50221;var inst_50196 = inst_50220;var inst_50197 = inst_50222;var inst_50198 = (0);var state_50259__$1 = (function (){var statearr_50290 = state_50259;(statearr_50290[(9)] = inst_50198);
(statearr_50290[(19)] = inst_50197);
(statearr_50290[(10)] = inst_50196);
(statearr_50290[(20)] = inst_50195);
return statearr_50290;
})();var statearr_50291_50364 = state_50259__$1;(statearr_50291_50364[(2)] = null);
(statearr_50291_50364[(1)] = (25));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (41)))
{var inst_50127 = (state_50259[(21)]);var inst_50225 = (state_50259[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50259,(40),Object,null,(39));var inst_50232 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50225,inst_50127,done);var state_50259__$1 = state_50259;var statearr_50292_50365 = state_50259__$1;(statearr_50292_50365[(2)] = inst_50232);
cljs.core.async.impl.ioc_helpers.process_exception(state_50259__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (43)))
{var state_50259__$1 = state_50259;var statearr_50293_50366 = state_50259__$1;(statearr_50293_50366[(2)] = null);
(statearr_50293_50366[(1)] = (44));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (29)))
{var inst_50243 = (state_50259[(2)]);var state_50259__$1 = state_50259;var statearr_50294_50367 = state_50259__$1;(statearr_50294_50367[(2)] = inst_50243);
(statearr_50294_50367[(1)] = (26));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (44)))
{var inst_50252 = (state_50259[(2)]);var state_50259__$1 = (function (){var statearr_50295 = state_50259;(statearr_50295[(29)] = inst_50252);
return statearr_50295;
})();var statearr_50296_50368 = state_50259__$1;(statearr_50296_50368[(2)] = null);
(statearr_50296_50368[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (6)))
{var inst_50187 = (state_50259[(30)]);var inst_50186 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_50187__$1 = cljs.core.keys(inst_50186);var inst_50188 = cljs.core.count(inst_50187__$1);var inst_50189 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_50188) : cljs.core.reset_BANG_.call(null,dctr,inst_50188));var inst_50194 = cljs.core.seq(inst_50187__$1);var inst_50195 = inst_50194;var inst_50196 = null;var inst_50197 = (0);var inst_50198 = (0);var state_50259__$1 = (function (){var statearr_50297 = state_50259;(statearr_50297[(9)] = inst_50198);
(statearr_50297[(30)] = inst_50187__$1);
(statearr_50297[(31)] = inst_50189);
(statearr_50297[(19)] = inst_50197);
(statearr_50297[(10)] = inst_50196);
(statearr_50297[(20)] = inst_50195);
return statearr_50297;
})();var statearr_50298_50369 = state_50259__$1;(statearr_50298_50369[(2)] = null);
(statearr_50298_50369[(1)] = (25));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (28)))
{var inst_50216 = (state_50259[(17)]);var inst_50195 = (state_50259[(20)]);var inst_50216__$1 = cljs.core.seq(inst_50195);var state_50259__$1 = (function (){var statearr_50299 = state_50259;(statearr_50299[(17)] = inst_50216__$1);
return statearr_50299;
})();if(inst_50216__$1)
{var statearr_50300_50370 = state_50259__$1;(statearr_50300_50370[(1)] = (33));
} else
{var statearr_50301_50371 = state_50259__$1;(statearr_50301_50371[(1)] = (34));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (25)))
{var inst_50198 = (state_50259[(9)]);var inst_50197 = (state_50259[(19)]);var inst_50200 = (inst_50198 < inst_50197);var inst_50201 = inst_50200;var state_50259__$1 = state_50259;if(cljs.core.truth_(inst_50201))
{var statearr_50302_50372 = state_50259__$1;(statearr_50302_50372[(1)] = (27));
} else
{var statearr_50303_50373 = state_50259__$1;(statearr_50303_50373[(1)] = (28));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (34)))
{var state_50259__$1 = state_50259;var statearr_50304_50374 = state_50259__$1;(statearr_50304_50374[(2)] = null);
(statearr_50304_50374[(1)] = (35));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (17)))
{var state_50259__$1 = state_50259;var statearr_50305_50375 = state_50259__$1;(statearr_50305_50375[(2)] = null);
(statearr_50305_50375[(1)] = (18));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (3)))
{var inst_50257 = (state_50259[(2)]);var state_50259__$1 = state_50259;return cljs.core.async.impl.ioc_helpers.return_chan(state_50259__$1,inst_50257);
} else
{if((state_val_50260 === (12)))
{var inst_50182 = (state_50259[(2)]);var state_50259__$1 = state_50259;var statearr_50306_50376 = state_50259__$1;(statearr_50306_50376[(2)] = inst_50182);
(statearr_50306_50376[(1)] = (9));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (2)))
{var state_50259__$1 = state_50259;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50259__$1,(4),ch);
} else
{if((state_val_50260 === (23)))
{var state_50259__$1 = state_50259;var statearr_50307_50377 = state_50259__$1;(statearr_50307_50377[(2)] = null);
(statearr_50307_50377[(1)] = (24));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (35)))
{var inst_50241 = (state_50259[(2)]);var state_50259__$1 = state_50259;var statearr_50308_50378 = state_50259__$1;(statearr_50308_50378[(2)] = inst_50241);
(statearr_50308_50378[(1)] = (29));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (19)))
{var inst_50156 = (state_50259[(7)]);var inst_50160 = cljs.core.chunk_first(inst_50156);var inst_50161 = cljs.core.chunk_rest(inst_50156);var inst_50162 = cljs.core.count(inst_50160);var inst_50136 = inst_50161;var inst_50137 = inst_50160;var inst_50138 = inst_50162;var inst_50139 = (0);var state_50259__$1 = (function (){var statearr_50309 = state_50259;(statearr_50309[(13)] = inst_50136);
(statearr_50309[(14)] = inst_50138);
(statearr_50309[(15)] = inst_50137);
(statearr_50309[(16)] = inst_50139);
return statearr_50309;
})();var statearr_50310_50379 = state_50259__$1;(statearr_50310_50379[(2)] = null);
(statearr_50310_50379[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (11)))
{var inst_50156 = (state_50259[(7)]);var inst_50136 = (state_50259[(13)]);var inst_50156__$1 = cljs.core.seq(inst_50136);var state_50259__$1 = (function (){var statearr_50311 = state_50259;(statearr_50311[(7)] = inst_50156__$1);
return statearr_50311;
})();if(inst_50156__$1)
{var statearr_50312_50380 = state_50259__$1;(statearr_50312_50380[(1)] = (16));
} else
{var statearr_50313_50381 = state_50259__$1;(statearr_50313_50381[(1)] = (17));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (9)))
{var inst_50184 = (state_50259[(2)]);var state_50259__$1 = state_50259;var statearr_50314_50382 = state_50259__$1;(statearr_50314_50382[(2)] = inst_50184);
(statearr_50314_50382[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (5)))
{var inst_50134 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_50135 = cljs.core.seq(inst_50134);var inst_50136 = inst_50135;var inst_50137 = null;var inst_50138 = (0);var inst_50139 = (0);var state_50259__$1 = (function (){var statearr_50315 = state_50259;(statearr_50315[(13)] = inst_50136);
(statearr_50315[(14)] = inst_50138);
(statearr_50315[(15)] = inst_50137);
(statearr_50315[(16)] = inst_50139);
return statearr_50315;
})();var statearr_50316_50383 = state_50259__$1;(statearr_50316_50383[(2)] = null);
(statearr_50316_50383[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (14)))
{var state_50259__$1 = state_50259;var statearr_50317_50384 = state_50259__$1;(statearr_50317_50384[(2)] = null);
(statearr_50317_50384[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (45)))
{var inst_50249 = (state_50259[(2)]);var state_50259__$1 = state_50259;var statearr_50318_50385 = state_50259__$1;(statearr_50318_50385[(2)] = inst_50249);
(statearr_50318_50385[(1)] = (44));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (26)))
{var inst_50187 = (state_50259[(30)]);var inst_50245 = (state_50259[(2)]);var inst_50246 = cljs.core.seq(inst_50187);var state_50259__$1 = (function (){var statearr_50319 = state_50259;(statearr_50319[(32)] = inst_50245);
return statearr_50319;
})();if(inst_50246)
{var statearr_50320_50386 = state_50259__$1;(statearr_50320_50386[(1)] = (42));
} else
{var statearr_50321_50387 = state_50259__$1;(statearr_50321_50387[(1)] = (43));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (16)))
{var inst_50156 = (state_50259[(7)]);var inst_50158 = cljs.core.chunked_seq_QMARK_(inst_50156);var state_50259__$1 = state_50259;if(inst_50158)
{var statearr_50325_50388 = state_50259__$1;(statearr_50325_50388[(1)] = (19));
} else
{var statearr_50326_50389 = state_50259__$1;(statearr_50326_50389[(1)] = (20));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (38)))
{var inst_50238 = (state_50259[(2)]);var state_50259__$1 = state_50259;var statearr_50327_50390 = state_50259__$1;(statearr_50327_50390[(2)] = inst_50238);
(statearr_50327_50390[(1)] = (35));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (30)))
{var inst_50198 = (state_50259[(9)]);var inst_50197 = (state_50259[(19)]);var inst_50196 = (state_50259[(10)]);var inst_50195 = (state_50259[(20)]);var inst_50212 = (state_50259[(2)]);var inst_50213 = (inst_50198 + (1));var tmp50322 = inst_50197;var tmp50323 = inst_50196;var tmp50324 = inst_50195;var inst_50195__$1 = tmp50324;var inst_50196__$1 = tmp50323;var inst_50197__$1 = tmp50322;var inst_50198__$1 = inst_50213;var state_50259__$1 = (function (){var statearr_50328 = state_50259;(statearr_50328[(9)] = inst_50198__$1);
(statearr_50328[(33)] = inst_50212);
(statearr_50328[(19)] = inst_50197__$1);
(statearr_50328[(10)] = inst_50196__$1);
(statearr_50328[(20)] = inst_50195__$1);
return statearr_50328;
})();var statearr_50329_50391 = state_50259__$1;(statearr_50329_50391[(2)] = null);
(statearr_50329_50391[(1)] = (25));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (10)))
{var inst_50137 = (state_50259[(15)]);var inst_50139 = (state_50259[(16)]);var inst_50145 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50137,inst_50139);var inst_50146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50145,(0),null);var inst_50147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50145,(1),null);var state_50259__$1 = (function (){var statearr_50330 = state_50259;(statearr_50330[(28)] = inst_50146);
return statearr_50330;
})();if(cljs.core.truth_(inst_50147))
{var statearr_50331_50392 = state_50259__$1;(statearr_50331_50392[(1)] = (13));
} else
{var statearr_50332_50393 = state_50259__$1;(statearr_50332_50393[(1)] = (14));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (18)))
{var inst_50180 = (state_50259[(2)]);var state_50259__$1 = state_50259;var statearr_50333_50394 = state_50259__$1;(statearr_50333_50394[(2)] = inst_50180);
(statearr_50333_50394[(1)] = (12));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (42)))
{var state_50259__$1 = state_50259;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50259__$1,(45),dchan);
} else
{if((state_val_50260 === (37)))
{var inst_50216 = (state_50259[(17)]);var inst_50225 = cljs.core.first(inst_50216);var state_50259__$1 = (function (){var statearr_50334 = state_50259;(statearr_50334[(25)] = inst_50225);
return statearr_50334;
})();var statearr_50335_50395 = state_50259__$1;(statearr_50335_50395[(2)] = null);
(statearr_50335_50395[(1)] = (41));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50260 === (8)))
{var inst_50138 = (state_50259[(14)]);var inst_50139 = (state_50259[(16)]);var inst_50141 = (inst_50139 < inst_50138);var inst_50142 = inst_50141;var state_50259__$1 = state_50259;if(cljs.core.truth_(inst_50142))
{var statearr_50336_50396 = state_50259__$1;(statearr_50336_50396[(1)] = (10));
} else
{var statearr_50337_50397 = state_50259__$1;(statearr_50337_50397[(1)] = (11));
}
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___50345,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___50345,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50341[(0)] = state_machine__5694__auto__);
(statearr_50341[(1)] = (1));
return statearr_50341;
});
var state_machine__5694__auto____1 = (function (state_50259){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50259);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50342){if((e50342 instanceof Object))
{var ex__5697__auto__ = e50342;var statearr_50343_50398 = state_50259;(statearr_50343_50398[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50259);
return cljs.core.constant$keyword$1094;
} else
{throw e50342;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__50399 = state_50259;
state_50259 = G__50399;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50259){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50345,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_50344 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50345);
return statearr_50344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50345,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj50401 = {};return obj50401;
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
cljs.core.async.mix = (function mix(out){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1101,null,cljs.core.constant$keyword$1102,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$1103);var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1102) : cljs.core.atom.call(null,cljs.core.constant$keyword$1102));var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));var solos = pick(cljs.core.constant$keyword$1103,chs);var pauses = pick(cljs.core.constant$keyword$1101,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1104,solos,cljs.core.constant$keyword$1105,pick(cljs.core.constant$keyword$1102,chs),cljs.core.constant$keyword$1106,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$1101)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t50511 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50511 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50512){
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
this.meta50512 = meta50512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50511.cljs$lang$type = true;
cljs.core.async.t50511.cljs$lang$ctorStr = "cljs.core.async/t50511";
cljs.core.async.t50511.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t50511");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50511.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t50511.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50511.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50511.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50511.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50511.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50511.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50513){var self__ = this;
var _50513__$1 = this;return self__.meta50512;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50513,meta50512__$1){var self__ = this;
var _50513__$1 = this;return (new cljs.core.async.t50511(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50512__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t50511 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t50511(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50512){return (new cljs.core.async.t50511(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50512));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t50511(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___50620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50578){var state_val_50579 = (state_50578[(1)]);if((state_val_50579 === (7)))
{var inst_50527 = (state_50578[(7)]);var inst_50532 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50527);var state_50578__$1 = state_50578;var statearr_50580_50621 = state_50578__$1;(statearr_50580_50621[(2)] = inst_50532);
(statearr_50580_50621[(1)] = (9));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (20)))
{var inst_50542 = (state_50578[(8)]);var state_50578__$1 = state_50578;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50578__$1,(23),out,inst_50542);
} else
{if((state_val_50579 === (1)))
{var inst_50517 = (state_50578[(9)]);var inst_50517__$1 = calc_state();var inst_50518 = cljs.core.seq_QMARK_(inst_50517__$1);var state_50578__$1 = (function (){var statearr_50581 = state_50578;(statearr_50581[(9)] = inst_50517__$1);
return statearr_50581;
})();if(inst_50518)
{var statearr_50582_50622 = state_50578__$1;(statearr_50582_50622[(1)] = (2));
} else
{var statearr_50583_50623 = state_50578__$1;(statearr_50583_50623[(1)] = (3));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (4)))
{var inst_50517 = (state_50578[(9)]);var inst_50523 = (state_50578[(2)]);var inst_50524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50523,cljs.core.constant$keyword$1106);var inst_50525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50523,cljs.core.constant$keyword$1105);var inst_50526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50523,cljs.core.constant$keyword$1104);var inst_50527 = inst_50517;var state_50578__$1 = (function (){var statearr_50584 = state_50578;(statearr_50584[(7)] = inst_50527);
(statearr_50584[(10)] = inst_50524);
(statearr_50584[(11)] = inst_50525);
(statearr_50584[(12)] = inst_50526);
return statearr_50584;
})();var statearr_50585_50624 = state_50578__$1;(statearr_50585_50624[(2)] = null);
(statearr_50585_50624[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (15)))
{var state_50578__$1 = state_50578;var statearr_50586_50625 = state_50578__$1;(statearr_50586_50625[(2)] = null);
(statearr_50586_50625[(1)] = (16));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (21)))
{var state_50578__$1 = state_50578;var statearr_50587_50626 = state_50578__$1;(statearr_50587_50626[(2)] = null);
(statearr_50587_50626[(1)] = (22));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (13)))
{var inst_50574 = (state_50578[(2)]);var state_50578__$1 = state_50578;var statearr_50588_50627 = state_50578__$1;(statearr_50588_50627[(2)] = inst_50574);
(statearr_50588_50627[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (22)))
{var inst_50535 = (state_50578[(13)]);var inst_50571 = (state_50578[(2)]);var inst_50527 = inst_50535;var state_50578__$1 = (function (){var statearr_50589 = state_50578;(statearr_50589[(14)] = inst_50571);
(statearr_50589[(7)] = inst_50527);
return statearr_50589;
})();var statearr_50590_50628 = state_50578__$1;(statearr_50590_50628[(2)] = null);
(statearr_50590_50628[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (6)))
{var inst_50576 = (state_50578[(2)]);var state_50578__$1 = state_50578;return cljs.core.async.impl.ioc_helpers.return_chan(state_50578__$1,inst_50576);
} else
{if((state_val_50579 === (17)))
{var inst_50557 = (state_50578[(15)]);var state_50578__$1 = state_50578;var statearr_50591_50629 = state_50578__$1;(statearr_50591_50629[(2)] = inst_50557);
(statearr_50591_50629[(1)] = (19));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (3)))
{var inst_50517 = (state_50578[(9)]);var state_50578__$1 = state_50578;var statearr_50592_50630 = state_50578__$1;(statearr_50592_50630[(2)] = inst_50517);
(statearr_50592_50630[(1)] = (4));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (12)))
{var inst_50557 = (state_50578[(15)]);var inst_50538 = (state_50578[(16)]);var inst_50543 = (state_50578[(17)]);var inst_50557__$1 = (inst_50538.cljs$core$IFn$_invoke$arity$1 ? inst_50538.cljs$core$IFn$_invoke$arity$1(inst_50543) : inst_50538.call(null,inst_50543));var state_50578__$1 = (function (){var statearr_50593 = state_50578;(statearr_50593[(15)] = inst_50557__$1);
return statearr_50593;
})();if(cljs.core.truth_(inst_50557__$1))
{var statearr_50594_50631 = state_50578__$1;(statearr_50594_50631[(1)] = (17));
} else
{var statearr_50595_50632 = state_50578__$1;(statearr_50595_50632[(1)] = (18));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (2)))
{var inst_50517 = (state_50578[(9)]);var inst_50520 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50517);var state_50578__$1 = state_50578;var statearr_50596_50633 = state_50578__$1;(statearr_50596_50633[(2)] = inst_50520);
(statearr_50596_50633[(1)] = (4));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (23)))
{var inst_50568 = (state_50578[(2)]);var state_50578__$1 = state_50578;var statearr_50597_50634 = state_50578__$1;(statearr_50597_50634[(2)] = inst_50568);
(statearr_50597_50634[(1)] = (22));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (19)))
{var inst_50565 = (state_50578[(2)]);var state_50578__$1 = state_50578;if(cljs.core.truth_(inst_50565))
{var statearr_50598_50635 = state_50578__$1;(statearr_50598_50635[(1)] = (20));
} else
{var statearr_50599_50636 = state_50578__$1;(statearr_50599_50636[(1)] = (21));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (11)))
{var inst_50542 = (state_50578[(8)]);var inst_50548 = (inst_50542 == null);var state_50578__$1 = state_50578;if(cljs.core.truth_(inst_50548))
{var statearr_50600_50637 = state_50578__$1;(statearr_50600_50637[(1)] = (14));
} else
{var statearr_50601_50638 = state_50578__$1;(statearr_50601_50638[(1)] = (15));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (9)))
{var inst_50535 = (state_50578[(13)]);var inst_50535__$1 = (state_50578[(2)]);var inst_50536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50535__$1,cljs.core.constant$keyword$1106);var inst_50537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50535__$1,cljs.core.constant$keyword$1105);var inst_50538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50535__$1,cljs.core.constant$keyword$1104);var state_50578__$1 = (function (){var statearr_50602 = state_50578;(statearr_50602[(16)] = inst_50538);
(statearr_50602[(18)] = inst_50537);
(statearr_50602[(13)] = inst_50535__$1);
return statearr_50602;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_50578__$1,(10),inst_50536);
} else
{if((state_val_50579 === (5)))
{var inst_50527 = (state_50578[(7)]);var inst_50530 = cljs.core.seq_QMARK_(inst_50527);var state_50578__$1 = state_50578;if(inst_50530)
{var statearr_50603_50639 = state_50578__$1;(statearr_50603_50639[(1)] = (7));
} else
{var statearr_50604_50640 = state_50578__$1;(statearr_50604_50640[(1)] = (8));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (14)))
{var inst_50543 = (state_50578[(17)]);var inst_50550 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50543);var state_50578__$1 = state_50578;var statearr_50605_50641 = state_50578__$1;(statearr_50605_50641[(2)] = inst_50550);
(statearr_50605_50641[(1)] = (16));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (16)))
{var inst_50553 = (state_50578[(2)]);var inst_50554 = calc_state();var inst_50527 = inst_50554;var state_50578__$1 = (function (){var statearr_50606 = state_50578;(statearr_50606[(7)] = inst_50527);
(statearr_50606[(19)] = inst_50553);
return statearr_50606;
})();var statearr_50607_50642 = state_50578__$1;(statearr_50607_50642[(2)] = null);
(statearr_50607_50642[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (10)))
{var inst_50543 = (state_50578[(17)]);var inst_50542 = (state_50578[(8)]);var inst_50541 = (state_50578[(2)]);var inst_50542__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50541,(0),null);var inst_50543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50541,(1),null);var inst_50544 = (inst_50542__$1 == null);var inst_50545 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50543__$1,change);var inst_50546 = (inst_50544) || (inst_50545);var state_50578__$1 = (function (){var statearr_50608 = state_50578;(statearr_50608[(17)] = inst_50543__$1);
(statearr_50608[(8)] = inst_50542__$1);
return statearr_50608;
})();if(cljs.core.truth_(inst_50546))
{var statearr_50609_50643 = state_50578__$1;(statearr_50609_50643[(1)] = (11));
} else
{var statearr_50610_50644 = state_50578__$1;(statearr_50610_50644[(1)] = (12));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (18)))
{var inst_50538 = (state_50578[(16)]);var inst_50543 = (state_50578[(17)]);var inst_50537 = (state_50578[(18)]);var inst_50560 = cljs.core.empty_QMARK_(inst_50538);var inst_50561 = (inst_50537.cljs$core$IFn$_invoke$arity$1 ? inst_50537.cljs$core$IFn$_invoke$arity$1(inst_50543) : inst_50537.call(null,inst_50543));var inst_50562 = cljs.core.not(inst_50561);var inst_50563 = (inst_50560) && (inst_50562);var state_50578__$1 = state_50578;var statearr_50611_50645 = state_50578__$1;(statearr_50611_50645[(2)] = inst_50563);
(statearr_50611_50645[(1)] = (19));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50579 === (8)))
{var inst_50527 = (state_50578[(7)]);var state_50578__$1 = state_50578;var statearr_50612_50646 = state_50578__$1;(statearr_50612_50646[(2)] = inst_50527);
(statearr_50612_50646[(1)] = (9));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___50620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___50620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50616[(0)] = state_machine__5694__auto__);
(statearr_50616[(1)] = (1));
return statearr_50616;
});
var state_machine__5694__auto____1 = (function (state_50578){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50578);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50617){if((e50617 instanceof Object))
{var ex__5697__auto__ = e50617;var statearr_50618_50647 = state_50578;(statearr_50618_50647[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50578);
return cljs.core.constant$keyword$1094;
} else
{throw e50617;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__50648 = state_50578;
state_50578 = G__50648;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50578){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_50619 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50620);
return statearr_50619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj50650 = {};return obj50650;
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
return (function (p1__50651_SHARP_){if(cljs.core.truth_((p1__50651_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50651_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__50651_SHARP_.call(null,topic))))
{return p1__50651_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50651_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t50776 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50776 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta50777){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta50777 = meta50777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50776.cljs$lang$type = true;
cljs.core.async.t50776.cljs$lang$ctorStr = "cljs.core.async/t50776";
cljs.core.async.t50776.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t50776");
});})(mults,ensure_mult))
;
cljs.core.async.t50776.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t50776.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t50776.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t50776.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.mults,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY));
});})(mults,ensure_mult))
;
cljs.core.async.t50776.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t50776.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50776.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t50776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50778){var self__ = this;
var _50778__$1 = this;return self__.meta50777;
});})(mults,ensure_mult))
;
cljs.core.async.t50776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50778,meta50777__$1){var self__ = this;
var _50778__$1 = this;return (new cljs.core.async.t50776(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta50777__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t50776 = ((function (mults,ensure_mult){
return (function __GT_t50776(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50777){return (new cljs.core.async.t50776(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50777));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t50776(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___50900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50900,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50900,mults,ensure_mult,p){
return (function (state_50852){var state_val_50853 = (state_50852[(1)]);if((state_val_50853 === (7)))
{var inst_50848 = (state_50852[(2)]);var state_50852__$1 = state_50852;var statearr_50854_50901 = state_50852__$1;(statearr_50854_50901[(2)] = inst_50848);
(statearr_50854_50901[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (20)))
{var state_50852__$1 = state_50852;var statearr_50855_50902 = state_50852__$1;(statearr_50855_50902[(2)] = null);
(statearr_50855_50902[(1)] = (21));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (1)))
{var state_50852__$1 = state_50852;var statearr_50856_50903 = state_50852__$1;(statearr_50856_50903[(2)] = null);
(statearr_50856_50903[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (24)))
{var inst_50781 = (state_50852[(7)]);var inst_50831 = (state_50852[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50852,(23),Object,null,(22));var inst_50838 = cljs.core.async.muxch_STAR_(inst_50831);var state_50852__$1 = state_50852;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50852__$1,(25),inst_50838,inst_50781);
} else
{if((state_val_50853 === (4)))
{var inst_50781 = (state_50852[(7)]);var inst_50781__$1 = (state_50852[(2)]);var inst_50782 = (inst_50781__$1 == null);var state_50852__$1 = (function (){var statearr_50857 = state_50852;(statearr_50857[(7)] = inst_50781__$1);
return statearr_50857;
})();if(cljs.core.truth_(inst_50782))
{var statearr_50858_50904 = state_50852__$1;(statearr_50858_50904[(1)] = (5));
} else
{var statearr_50859_50905 = state_50852__$1;(statearr_50859_50905[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (15)))
{var inst_50823 = (state_50852[(2)]);var state_50852__$1 = state_50852;var statearr_50860_50906 = state_50852__$1;(statearr_50860_50906[(2)] = inst_50823);
(statearr_50860_50906[(1)] = (12));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (21)))
{var inst_50845 = (state_50852[(2)]);var state_50852__$1 = (function (){var statearr_50861 = state_50852;(statearr_50861[(9)] = inst_50845);
return statearr_50861;
})();var statearr_50862_50907 = state_50852__$1;(statearr_50862_50907[(2)] = null);
(statearr_50862_50907[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (13)))
{var inst_50805 = (state_50852[(10)]);var inst_50807 = cljs.core.chunked_seq_QMARK_(inst_50805);var state_50852__$1 = state_50852;if(inst_50807)
{var statearr_50863_50908 = state_50852__$1;(statearr_50863_50908[(1)] = (16));
} else
{var statearr_50864_50909 = state_50852__$1;(statearr_50864_50909[(1)] = (17));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (22)))
{var inst_50842 = (state_50852[(2)]);var state_50852__$1 = state_50852;var statearr_50865_50910 = state_50852__$1;(statearr_50865_50910[(2)] = inst_50842);
(statearr_50865_50910[(1)] = (21));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (6)))
{var inst_50781 = (state_50852[(7)]);var inst_50829 = (state_50852[(11)]);var inst_50831 = (state_50852[(8)]);var inst_50829__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_50781) : topic_fn.call(null,inst_50781));var inst_50830 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_50831__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50830,inst_50829__$1);var state_50852__$1 = (function (){var statearr_50866 = state_50852;(statearr_50866[(11)] = inst_50829__$1);
(statearr_50866[(8)] = inst_50831__$1);
return statearr_50866;
})();if(cljs.core.truth_(inst_50831__$1))
{var statearr_50867_50911 = state_50852__$1;(statearr_50867_50911[(1)] = (19));
} else
{var statearr_50868_50912 = state_50852__$1;(statearr_50868_50912[(1)] = (20));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (25)))
{var inst_50840 = (state_50852[(2)]);var state_50852__$1 = state_50852;var statearr_50869_50913 = state_50852__$1;(statearr_50869_50913[(2)] = inst_50840);
cljs.core.async.impl.ioc_helpers.process_exception(state_50852__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (17)))
{var inst_50805 = (state_50852[(10)]);var inst_50814 = cljs.core.first(inst_50805);var inst_50815 = cljs.core.async.muxch_STAR_(inst_50814);var inst_50816 = cljs.core.async.close_BANG_(inst_50815);var inst_50817 = cljs.core.next(inst_50805);var inst_50791 = inst_50817;var inst_50792 = null;var inst_50793 = (0);var inst_50794 = (0);var state_50852__$1 = (function (){var statearr_50870 = state_50852;(statearr_50870[(12)] = inst_50816);
(statearr_50870[(13)] = inst_50793);
(statearr_50870[(14)] = inst_50792);
(statearr_50870[(15)] = inst_50794);
(statearr_50870[(16)] = inst_50791);
return statearr_50870;
})();var statearr_50871_50914 = state_50852__$1;(statearr_50871_50914[(2)] = null);
(statearr_50871_50914[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (3)))
{var inst_50850 = (state_50852[(2)]);var state_50852__$1 = state_50852;return cljs.core.async.impl.ioc_helpers.return_chan(state_50852__$1,inst_50850);
} else
{if((state_val_50853 === (12)))
{var inst_50825 = (state_50852[(2)]);var state_50852__$1 = state_50852;var statearr_50872_50915 = state_50852__$1;(statearr_50872_50915[(2)] = inst_50825);
(statearr_50872_50915[(1)] = (9));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (2)))
{var state_50852__$1 = state_50852;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50852__$1,(4),ch);
} else
{if((state_val_50853 === (23)))
{var inst_50829 = (state_50852[(11)]);var inst_50833 = (state_50852[(2)]);var inst_50834 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50829);var state_50852__$1 = (function (){var statearr_50873 = state_50852;(statearr_50873[(17)] = inst_50833);
return statearr_50873;
})();var statearr_50874_50916 = state_50852__$1;(statearr_50874_50916[(2)] = inst_50834);
cljs.core.async.impl.ioc_helpers.process_exception(state_50852__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (19)))
{var state_50852__$1 = state_50852;var statearr_50875_50917 = state_50852__$1;(statearr_50875_50917[(2)] = null);
(statearr_50875_50917[(1)] = (24));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (11)))
{var inst_50805 = (state_50852[(10)]);var inst_50791 = (state_50852[(16)]);var inst_50805__$1 = cljs.core.seq(inst_50791);var state_50852__$1 = (function (){var statearr_50876 = state_50852;(statearr_50876[(10)] = inst_50805__$1);
return statearr_50876;
})();if(inst_50805__$1)
{var statearr_50877_50918 = state_50852__$1;(statearr_50877_50918[(1)] = (13));
} else
{var statearr_50878_50919 = state_50852__$1;(statearr_50878_50919[(1)] = (14));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (9)))
{var inst_50827 = (state_50852[(2)]);var state_50852__$1 = state_50852;var statearr_50879_50920 = state_50852__$1;(statearr_50879_50920[(2)] = inst_50827);
(statearr_50879_50920[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (5)))
{var inst_50788 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_50789 = cljs.core.vals(inst_50788);var inst_50790 = cljs.core.seq(inst_50789);var inst_50791 = inst_50790;var inst_50792 = null;var inst_50793 = (0);var inst_50794 = (0);var state_50852__$1 = (function (){var statearr_50880 = state_50852;(statearr_50880[(13)] = inst_50793);
(statearr_50880[(14)] = inst_50792);
(statearr_50880[(15)] = inst_50794);
(statearr_50880[(16)] = inst_50791);
return statearr_50880;
})();var statearr_50881_50921 = state_50852__$1;(statearr_50881_50921[(2)] = null);
(statearr_50881_50921[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (14)))
{var state_50852__$1 = state_50852;var statearr_50885_50922 = state_50852__$1;(statearr_50885_50922[(2)] = null);
(statearr_50885_50922[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (16)))
{var inst_50805 = (state_50852[(10)]);var inst_50809 = cljs.core.chunk_first(inst_50805);var inst_50810 = cljs.core.chunk_rest(inst_50805);var inst_50811 = cljs.core.count(inst_50809);var inst_50791 = inst_50810;var inst_50792 = inst_50809;var inst_50793 = inst_50811;var inst_50794 = (0);var state_50852__$1 = (function (){var statearr_50886 = state_50852;(statearr_50886[(13)] = inst_50793);
(statearr_50886[(14)] = inst_50792);
(statearr_50886[(15)] = inst_50794);
(statearr_50886[(16)] = inst_50791);
return statearr_50886;
})();var statearr_50887_50923 = state_50852__$1;(statearr_50887_50923[(2)] = null);
(statearr_50887_50923[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (10)))
{var inst_50793 = (state_50852[(13)]);var inst_50792 = (state_50852[(14)]);var inst_50794 = (state_50852[(15)]);var inst_50791 = (state_50852[(16)]);var inst_50799 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50792,inst_50794);var inst_50800 = cljs.core.async.muxch_STAR_(inst_50799);var inst_50801 = cljs.core.async.close_BANG_(inst_50800);var inst_50802 = (inst_50794 + (1));var tmp50882 = inst_50793;var tmp50883 = inst_50792;var tmp50884 = inst_50791;var inst_50791__$1 = tmp50884;var inst_50792__$1 = tmp50883;var inst_50793__$1 = tmp50882;var inst_50794__$1 = inst_50802;var state_50852__$1 = (function (){var statearr_50888 = state_50852;(statearr_50888[(18)] = inst_50801);
(statearr_50888[(13)] = inst_50793__$1);
(statearr_50888[(14)] = inst_50792__$1);
(statearr_50888[(15)] = inst_50794__$1);
(statearr_50888[(16)] = inst_50791__$1);
return statearr_50888;
})();var statearr_50889_50924 = state_50852__$1;(statearr_50889_50924[(2)] = null);
(statearr_50889_50924[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (18)))
{var inst_50820 = (state_50852[(2)]);var state_50852__$1 = state_50852;var statearr_50890_50925 = state_50852__$1;(statearr_50890_50925[(2)] = inst_50820);
(statearr_50890_50925[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50853 === (8)))
{var inst_50793 = (state_50852[(13)]);var inst_50794 = (state_50852[(15)]);var inst_50796 = (inst_50794 < inst_50793);var inst_50797 = inst_50796;var state_50852__$1 = state_50852;if(cljs.core.truth_(inst_50797))
{var statearr_50891_50926 = state_50852__$1;(statearr_50891_50926[(1)] = (10));
} else
{var statearr_50892_50927 = state_50852__$1;(statearr_50892_50927[(1)] = (11));
}
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___50900,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___50900,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50896[(0)] = state_machine__5694__auto__);
(statearr_50896[(1)] = (1));
return statearr_50896;
});
var state_machine__5694__auto____1 = (function (state_50852){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50852);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50897){if((e50897 instanceof Object))
{var ex__5697__auto__ = e50897;var statearr_50898_50928 = state_50852;(statearr_50898_50928[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50852);
return cljs.core.constant$keyword$1094;
} else
{throw e50897;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__50929 = state_50852;
state_50852 = G__50929;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50852){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50900,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_50899 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50900);
return statearr_50899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50900,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5708__auto___51066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51066,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51066,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_51036){var state_val_51037 = (state_51036[(1)]);if((state_val_51037 === (7)))
{var state_51036__$1 = state_51036;var statearr_51038_51067 = state_51036__$1;(statearr_51038_51067[(2)] = null);
(statearr_51038_51067[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (1)))
{var state_51036__$1 = state_51036;var statearr_51039_51068 = state_51036__$1;(statearr_51039_51068[(2)] = null);
(statearr_51039_51068[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (4)))
{var inst_51000 = (state_51036[(7)]);var inst_51002 = (inst_51000 < cnt);var state_51036__$1 = state_51036;if(cljs.core.truth_(inst_51002))
{var statearr_51040_51069 = state_51036__$1;(statearr_51040_51069[(1)] = (6));
} else
{var statearr_51041_51070 = state_51036__$1;(statearr_51041_51070[(1)] = (7));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (15)))
{var inst_51032 = (state_51036[(2)]);var state_51036__$1 = state_51036;var statearr_51042_51071 = state_51036__$1;(statearr_51042_51071[(2)] = inst_51032);
(statearr_51042_51071[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (13)))
{var inst_51025 = cljs.core.async.close_BANG_(out);var state_51036__$1 = state_51036;var statearr_51043_51072 = state_51036__$1;(statearr_51043_51072[(2)] = inst_51025);
(statearr_51043_51072[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (6)))
{var state_51036__$1 = state_51036;var statearr_51044_51073 = state_51036__$1;(statearr_51044_51073[(2)] = null);
(statearr_51044_51073[(1)] = (11));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (3)))
{var inst_51034 = (state_51036[(2)]);var state_51036__$1 = state_51036;return cljs.core.async.impl.ioc_helpers.return_chan(state_51036__$1,inst_51034);
} else
{if((state_val_51037 === (12)))
{var inst_51022 = (state_51036[(8)]);var inst_51022__$1 = (state_51036[(2)]);var inst_51023 = cljs.core.some(cljs.core.nil_QMARK_,inst_51022__$1);var state_51036__$1 = (function (){var statearr_51045 = state_51036;(statearr_51045[(8)] = inst_51022__$1);
return statearr_51045;
})();if(cljs.core.truth_(inst_51023))
{var statearr_51046_51074 = state_51036__$1;(statearr_51046_51074[(1)] = (13));
} else
{var statearr_51047_51075 = state_51036__$1;(statearr_51047_51075[(1)] = (14));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (2)))
{var inst_50999 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));var inst_51000 = (0);var state_51036__$1 = (function (){var statearr_51048 = state_51036;(statearr_51048[(7)] = inst_51000);
(statearr_51048[(9)] = inst_50999);
return statearr_51048;
})();var statearr_51049_51076 = state_51036__$1;(statearr_51049_51076[(2)] = null);
(statearr_51049_51076[(1)] = (4));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (11)))
{var inst_51000 = (state_51036[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51036,(10),Object,null,(9));var inst_51009 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51000) : chs__$1.call(null,inst_51000));var inst_51010 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51000) : done.call(null,inst_51000));var inst_51011 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51009,inst_51010);var state_51036__$1 = state_51036;var statearr_51050_51077 = state_51036__$1;(statearr_51050_51077[(2)] = inst_51011);
cljs.core.async.impl.ioc_helpers.process_exception(state_51036__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (9)))
{var inst_51000 = (state_51036[(7)]);var inst_51013 = (state_51036[(2)]);var inst_51014 = (inst_51000 + (1));var inst_51000__$1 = inst_51014;var state_51036__$1 = (function (){var statearr_51051 = state_51036;(statearr_51051[(7)] = inst_51000__$1);
(statearr_51051[(10)] = inst_51013);
return statearr_51051;
})();var statearr_51052_51078 = state_51036__$1;(statearr_51052_51078[(2)] = null);
(statearr_51052_51078[(1)] = (4));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (5)))
{var inst_51020 = (state_51036[(2)]);var state_51036__$1 = (function (){var statearr_51053 = state_51036;(statearr_51053[(11)] = inst_51020);
return statearr_51053;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51036__$1,(12),dchan);
} else
{if((state_val_51037 === (14)))
{var inst_51022 = (state_51036[(8)]);var inst_51027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51022);var state_51036__$1 = state_51036;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51036__$1,(16),out,inst_51027);
} else
{if((state_val_51037 === (16)))
{var inst_51029 = (state_51036[(2)]);var state_51036__$1 = (function (){var statearr_51054 = state_51036;(statearr_51054[(12)] = inst_51029);
return statearr_51054;
})();var statearr_51055_51079 = state_51036__$1;(statearr_51055_51079[(2)] = null);
(statearr_51055_51079[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (10)))
{var inst_51004 = (state_51036[(2)]);var inst_51005 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_51036__$1 = (function (){var statearr_51056 = state_51036;(statearr_51056[(13)] = inst_51004);
return statearr_51056;
})();var statearr_51057_51080 = state_51036__$1;(statearr_51057_51080[(2)] = inst_51005);
cljs.core.async.impl.ioc_helpers.process_exception(state_51036__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51037 === (8)))
{var inst_51018 = (state_51036[(2)]);var state_51036__$1 = state_51036;var statearr_51058_51081 = state_51036__$1;(statearr_51058_51081[(2)] = inst_51018);
(statearr_51058_51081[(1)] = (5));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___51066,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___51066,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51062[(0)] = state_machine__5694__auto__);
(statearr_51062[(1)] = (1));
return statearr_51062;
});
var state_machine__5694__auto____1 = (function (state_51036){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51036);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51063){if((e51063 instanceof Object))
{var ex__5697__auto__ = e51063;var statearr_51064_51082 = state_51036;(statearr_51064_51082[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51036);
return cljs.core.constant$keyword$1094;
} else
{throw e51063;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51083 = state_51036;
state_51036 = G__51083;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51036){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51066,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_51065 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51066);
return statearr_51065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51066,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51191,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51191,out){
return (function (state_51167){var state_val_51168 = (state_51167[(1)]);if((state_val_51168 === (7)))
{var inst_51147 = (state_51167[(7)]);var inst_51146 = (state_51167[(8)]);var inst_51146__$1 = (state_51167[(2)]);var inst_51147__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51146__$1,(0),null);var inst_51148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51146__$1,(1),null);var inst_51149 = (inst_51147__$1 == null);var state_51167__$1 = (function (){var statearr_51169 = state_51167;(statearr_51169[(9)] = inst_51148);
(statearr_51169[(7)] = inst_51147__$1);
(statearr_51169[(8)] = inst_51146__$1);
return statearr_51169;
})();if(cljs.core.truth_(inst_51149))
{var statearr_51170_51192 = state_51167__$1;(statearr_51170_51192[(1)] = (8));
} else
{var statearr_51171_51193 = state_51167__$1;(statearr_51171_51193[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51168 === (1)))
{var inst_51138 = cljs.core.vec(chs);var inst_51139 = inst_51138;var state_51167__$1 = (function (){var statearr_51172 = state_51167;(statearr_51172[(10)] = inst_51139);
return statearr_51172;
})();var statearr_51173_51194 = state_51167__$1;(statearr_51173_51194[(2)] = null);
(statearr_51173_51194[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51168 === (4)))
{var inst_51139 = (state_51167[(10)]);var state_51167__$1 = state_51167;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_51167__$1,(7),inst_51139);
} else
{if((state_val_51168 === (6)))
{var inst_51163 = (state_51167[(2)]);var state_51167__$1 = state_51167;var statearr_51174_51195 = state_51167__$1;(statearr_51174_51195[(2)] = inst_51163);
(statearr_51174_51195[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51168 === (3)))
{var inst_51165 = (state_51167[(2)]);var state_51167__$1 = state_51167;return cljs.core.async.impl.ioc_helpers.return_chan(state_51167__$1,inst_51165);
} else
{if((state_val_51168 === (2)))
{var inst_51139 = (state_51167[(10)]);var inst_51141 = cljs.core.count(inst_51139);var inst_51142 = (inst_51141 > (0));var state_51167__$1 = state_51167;if(cljs.core.truth_(inst_51142))
{var statearr_51176_51196 = state_51167__$1;(statearr_51176_51196[(1)] = (4));
} else
{var statearr_51177_51197 = state_51167__$1;(statearr_51177_51197[(1)] = (5));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51168 === (11)))
{var inst_51139 = (state_51167[(10)]);var inst_51156 = (state_51167[(2)]);var tmp51175 = inst_51139;var inst_51139__$1 = tmp51175;var state_51167__$1 = (function (){var statearr_51178 = state_51167;(statearr_51178[(10)] = inst_51139__$1);
(statearr_51178[(11)] = inst_51156);
return statearr_51178;
})();var statearr_51179_51198 = state_51167__$1;(statearr_51179_51198[(2)] = null);
(statearr_51179_51198[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51168 === (9)))
{var inst_51147 = (state_51167[(7)]);var state_51167__$1 = state_51167;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51167__$1,(11),out,inst_51147);
} else
{if((state_val_51168 === (5)))
{var inst_51161 = cljs.core.async.close_BANG_(out);var state_51167__$1 = state_51167;var statearr_51180_51199 = state_51167__$1;(statearr_51180_51199[(2)] = inst_51161);
(statearr_51180_51199[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51168 === (10)))
{var inst_51159 = (state_51167[(2)]);var state_51167__$1 = state_51167;var statearr_51181_51200 = state_51167__$1;(statearr_51181_51200[(2)] = inst_51159);
(statearr_51181_51200[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51168 === (8)))
{var inst_51148 = (state_51167[(9)]);var inst_51147 = (state_51167[(7)]);var inst_51139 = (state_51167[(10)]);var inst_51146 = (state_51167[(8)]);var inst_51151 = (function (){var c = inst_51148;var v = inst_51147;var vec__51144 = inst_51146;var cs = inst_51139;return ((function (c,v,vec__51144,cs,inst_51148,inst_51147,inst_51139,inst_51146,state_val_51168,c__5708__auto___51191,out){
return (function (p1__51084_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51084_SHARP_);
});
;})(c,v,vec__51144,cs,inst_51148,inst_51147,inst_51139,inst_51146,state_val_51168,c__5708__auto___51191,out))
})();var inst_51152 = cljs.core.filterv(inst_51151,inst_51139);var inst_51139__$1 = inst_51152;var state_51167__$1 = (function (){var statearr_51182 = state_51167;(statearr_51182[(10)] = inst_51139__$1);
return statearr_51182;
})();var statearr_51183_51201 = state_51167__$1;(statearr_51183_51201[(2)] = null);
(statearr_51183_51201[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___51191,out))
;return ((function (switch__5693__auto__,c__5708__auto___51191,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51187 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51187[(0)] = state_machine__5694__auto__);
(statearr_51187[(1)] = (1));
return statearr_51187;
});
var state_machine__5694__auto____1 = (function (state_51167){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51167);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51188){if((e51188 instanceof Object))
{var ex__5697__auto__ = e51188;var statearr_51189_51202 = state_51167;(statearr_51189_51202[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51167);
return cljs.core.constant$keyword$1094;
} else
{throw e51188;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51203 = state_51167;
state_51167 = G__51203;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51167){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51191,out))
})();var state__5710__auto__ = (function (){var statearr_51190 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51191);
return statearr_51190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51191,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51296,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51296,out){
return (function (state_51273){var state_val_51274 = (state_51273[(1)]);if((state_val_51274 === (7)))
{var inst_51255 = (state_51273[(7)]);var inst_51255__$1 = (state_51273[(2)]);var inst_51256 = (inst_51255__$1 == null);var inst_51257 = cljs.core.not(inst_51256);var state_51273__$1 = (function (){var statearr_51275 = state_51273;(statearr_51275[(7)] = inst_51255__$1);
return statearr_51275;
})();if(inst_51257)
{var statearr_51276_51297 = state_51273__$1;(statearr_51276_51297[(1)] = (8));
} else
{var statearr_51277_51298 = state_51273__$1;(statearr_51277_51298[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51274 === (1)))
{var inst_51250 = (0);var state_51273__$1 = (function (){var statearr_51278 = state_51273;(statearr_51278[(8)] = inst_51250);
return statearr_51278;
})();var statearr_51279_51299 = state_51273__$1;(statearr_51279_51299[(2)] = null);
(statearr_51279_51299[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51274 === (4)))
{var state_51273__$1 = state_51273;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51273__$1,(7),ch);
} else
{if((state_val_51274 === (6)))
{var inst_51268 = (state_51273[(2)]);var state_51273__$1 = state_51273;var statearr_51280_51300 = state_51273__$1;(statearr_51280_51300[(2)] = inst_51268);
(statearr_51280_51300[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51274 === (3)))
{var inst_51270 = (state_51273[(2)]);var inst_51271 = cljs.core.async.close_BANG_(out);var state_51273__$1 = (function (){var statearr_51281 = state_51273;(statearr_51281[(9)] = inst_51270);
return statearr_51281;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51273__$1,inst_51271);
} else
{if((state_val_51274 === (2)))
{var inst_51250 = (state_51273[(8)]);var inst_51252 = (inst_51250 < n);var state_51273__$1 = state_51273;if(cljs.core.truth_(inst_51252))
{var statearr_51282_51301 = state_51273__$1;(statearr_51282_51301[(1)] = (4));
} else
{var statearr_51283_51302 = state_51273__$1;(statearr_51283_51302[(1)] = (5));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51274 === (11)))
{var inst_51250 = (state_51273[(8)]);var inst_51260 = (state_51273[(2)]);var inst_51261 = (inst_51250 + (1));var inst_51250__$1 = inst_51261;var state_51273__$1 = (function (){var statearr_51284 = state_51273;(statearr_51284[(10)] = inst_51260);
(statearr_51284[(8)] = inst_51250__$1);
return statearr_51284;
})();var statearr_51285_51303 = state_51273__$1;(statearr_51285_51303[(2)] = null);
(statearr_51285_51303[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51274 === (9)))
{var state_51273__$1 = state_51273;var statearr_51286_51304 = state_51273__$1;(statearr_51286_51304[(2)] = null);
(statearr_51286_51304[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51274 === (5)))
{var state_51273__$1 = state_51273;var statearr_51287_51305 = state_51273__$1;(statearr_51287_51305[(2)] = null);
(statearr_51287_51305[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51274 === (10)))
{var inst_51265 = (state_51273[(2)]);var state_51273__$1 = state_51273;var statearr_51288_51306 = state_51273__$1;(statearr_51288_51306[(2)] = inst_51265);
(statearr_51288_51306[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51274 === (8)))
{var inst_51255 = (state_51273[(7)]);var state_51273__$1 = state_51273;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51273__$1,(11),out,inst_51255);
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
});})(c__5708__auto___51296,out))
;return ((function (switch__5693__auto__,c__5708__auto___51296,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51292 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_51292[(0)] = state_machine__5694__auto__);
(statearr_51292[(1)] = (1));
return statearr_51292;
});
var state_machine__5694__auto____1 = (function (state_51273){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51273);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51293){if((e51293 instanceof Object))
{var ex__5697__auto__ = e51293;var statearr_51294_51307 = state_51273;(statearr_51294_51307[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51273);
return cljs.core.constant$keyword$1094;
} else
{throw e51293;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51308 = state_51273;
state_51273 = G__51308;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51273){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51296,out))
})();var state__5710__auto__ = (function (){var statearr_51295 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51296);
return statearr_51295;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51296,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51405,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51405,out){
return (function (state_51380){var state_val_51381 = (state_51380[(1)]);if((state_val_51381 === (7)))
{var inst_51375 = (state_51380[(2)]);var state_51380__$1 = state_51380;var statearr_51382_51406 = state_51380__$1;(statearr_51382_51406[(2)] = inst_51375);
(statearr_51382_51406[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51381 === (1)))
{var inst_51357 = null;var state_51380__$1 = (function (){var statearr_51383 = state_51380;(statearr_51383[(7)] = inst_51357);
return statearr_51383;
})();var statearr_51384_51407 = state_51380__$1;(statearr_51384_51407[(2)] = null);
(statearr_51384_51407[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51381 === (4)))
{var inst_51360 = (state_51380[(8)]);var inst_51360__$1 = (state_51380[(2)]);var inst_51361 = (inst_51360__$1 == null);var inst_51362 = cljs.core.not(inst_51361);var state_51380__$1 = (function (){var statearr_51385 = state_51380;(statearr_51385[(8)] = inst_51360__$1);
return statearr_51385;
})();if(inst_51362)
{var statearr_51386_51408 = state_51380__$1;(statearr_51386_51408[(1)] = (5));
} else
{var statearr_51387_51409 = state_51380__$1;(statearr_51387_51409[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51381 === (6)))
{var state_51380__$1 = state_51380;var statearr_51388_51410 = state_51380__$1;(statearr_51388_51410[(2)] = null);
(statearr_51388_51410[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51381 === (3)))
{var inst_51377 = (state_51380[(2)]);var inst_51378 = cljs.core.async.close_BANG_(out);var state_51380__$1 = (function (){var statearr_51389 = state_51380;(statearr_51389[(9)] = inst_51377);
return statearr_51389;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51380__$1,inst_51378);
} else
{if((state_val_51381 === (2)))
{var state_51380__$1 = state_51380;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51380__$1,(4),ch);
} else
{if((state_val_51381 === (11)))
{var inst_51360 = (state_51380[(8)]);var inst_51369 = (state_51380[(2)]);var inst_51357 = inst_51360;var state_51380__$1 = (function (){var statearr_51390 = state_51380;(statearr_51390[(7)] = inst_51357);
(statearr_51390[(10)] = inst_51369);
return statearr_51390;
})();var statearr_51391_51411 = state_51380__$1;(statearr_51391_51411[(2)] = null);
(statearr_51391_51411[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51381 === (9)))
{var inst_51360 = (state_51380[(8)]);var state_51380__$1 = state_51380;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51380__$1,(11),out,inst_51360);
} else
{if((state_val_51381 === (5)))
{var inst_51357 = (state_51380[(7)]);var inst_51360 = (state_51380[(8)]);var inst_51364 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51360,inst_51357);var state_51380__$1 = state_51380;if(inst_51364)
{var statearr_51393_51412 = state_51380__$1;(statearr_51393_51412[(1)] = (8));
} else
{var statearr_51394_51413 = state_51380__$1;(statearr_51394_51413[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51381 === (10)))
{var inst_51372 = (state_51380[(2)]);var state_51380__$1 = state_51380;var statearr_51395_51414 = state_51380__$1;(statearr_51395_51414[(2)] = inst_51372);
(statearr_51395_51414[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51381 === (8)))
{var inst_51357 = (state_51380[(7)]);var tmp51392 = inst_51357;var inst_51357__$1 = tmp51392;var state_51380__$1 = (function (){var statearr_51396 = state_51380;(statearr_51396[(7)] = inst_51357__$1);
return statearr_51396;
})();var statearr_51397_51415 = state_51380__$1;(statearr_51397_51415[(2)] = null);
(statearr_51397_51415[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___51405,out))
;return ((function (switch__5693__auto__,c__5708__auto___51405,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51401 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_51401[(0)] = state_machine__5694__auto__);
(statearr_51401[(1)] = (1));
return statearr_51401;
});
var state_machine__5694__auto____1 = (function (state_51380){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51380);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51402){if((e51402 instanceof Object))
{var ex__5697__auto__ = e51402;var statearr_51403_51416 = state_51380;(statearr_51403_51416[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51380);
return cljs.core.constant$keyword$1094;
} else
{throw e51402;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51417 = state_51380;
state_51380 = G__51417;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51380){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51405,out))
})();var state__5710__auto__ = (function (){var statearr_51404 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51405);
return statearr_51404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51405,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51552,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51552,out){
return (function (state_51522){var state_val_51523 = (state_51522[(1)]);if((state_val_51523 === (7)))
{var inst_51518 = (state_51522[(2)]);var state_51522__$1 = state_51522;var statearr_51524_51553 = state_51522__$1;(statearr_51524_51553[(2)] = inst_51518);
(statearr_51524_51553[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51523 === (1)))
{var inst_51485 = (new Array(n));var inst_51486 = inst_51485;var inst_51487 = (0);var state_51522__$1 = (function (){var statearr_51525 = state_51522;(statearr_51525[(7)] = inst_51487);
(statearr_51525[(8)] = inst_51486);
return statearr_51525;
})();var statearr_51526_51554 = state_51522__$1;(statearr_51526_51554[(2)] = null);
(statearr_51526_51554[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51523 === (4)))
{var inst_51490 = (state_51522[(9)]);var inst_51490__$1 = (state_51522[(2)]);var inst_51491 = (inst_51490__$1 == null);var inst_51492 = cljs.core.not(inst_51491);var state_51522__$1 = (function (){var statearr_51527 = state_51522;(statearr_51527[(9)] = inst_51490__$1);
return statearr_51527;
})();if(inst_51492)
{var statearr_51528_51555 = state_51522__$1;(statearr_51528_51555[(1)] = (5));
} else
{var statearr_51529_51556 = state_51522__$1;(statearr_51529_51556[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51523 === (15)))
{var inst_51512 = (state_51522[(2)]);var state_51522__$1 = state_51522;var statearr_51530_51557 = state_51522__$1;(statearr_51530_51557[(2)] = inst_51512);
(statearr_51530_51557[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51523 === (13)))
{var state_51522__$1 = state_51522;var statearr_51531_51558 = state_51522__$1;(statearr_51531_51558[(2)] = null);
(statearr_51531_51558[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51523 === (6)))
{var inst_51487 = (state_51522[(7)]);var inst_51508 = (inst_51487 > (0));var state_51522__$1 = state_51522;if(cljs.core.truth_(inst_51508))
{var statearr_51532_51559 = state_51522__$1;(statearr_51532_51559[(1)] = (12));
} else
{var statearr_51533_51560 = state_51522__$1;(statearr_51533_51560[(1)] = (13));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51523 === (3)))
{var inst_51520 = (state_51522[(2)]);var state_51522__$1 = state_51522;return cljs.core.async.impl.ioc_helpers.return_chan(state_51522__$1,inst_51520);
} else
{if((state_val_51523 === (12)))
{var inst_51486 = (state_51522[(8)]);var inst_51510 = cljs.core.vec(inst_51486);var state_51522__$1 = state_51522;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51522__$1,(15),out,inst_51510);
} else
{if((state_val_51523 === (2)))
{var state_51522__$1 = state_51522;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51522__$1,(4),ch);
} else
{if((state_val_51523 === (11)))
{var inst_51502 = (state_51522[(2)]);var inst_51503 = (new Array(n));var inst_51486 = inst_51503;var inst_51487 = (0);var state_51522__$1 = (function (){var statearr_51534 = state_51522;(statearr_51534[(7)] = inst_51487);
(statearr_51534[(8)] = inst_51486);
(statearr_51534[(10)] = inst_51502);
return statearr_51534;
})();var statearr_51535_51561 = state_51522__$1;(statearr_51535_51561[(2)] = null);
(statearr_51535_51561[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51523 === (9)))
{var inst_51486 = (state_51522[(8)]);var inst_51500 = cljs.core.vec(inst_51486);var state_51522__$1 = state_51522;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51522__$1,(11),out,inst_51500);
} else
{if((state_val_51523 === (5)))
{var inst_51487 = (state_51522[(7)]);var inst_51490 = (state_51522[(9)]);var inst_51486 = (state_51522[(8)]);var inst_51495 = (state_51522[(11)]);var inst_51494 = (inst_51486[inst_51487] = inst_51490);var inst_51495__$1 = (inst_51487 + (1));var inst_51496 = (inst_51495__$1 < n);var state_51522__$1 = (function (){var statearr_51536 = state_51522;(statearr_51536[(12)] = inst_51494);
(statearr_51536[(11)] = inst_51495__$1);
return statearr_51536;
})();if(cljs.core.truth_(inst_51496))
{var statearr_51537_51562 = state_51522__$1;(statearr_51537_51562[(1)] = (8));
} else
{var statearr_51538_51563 = state_51522__$1;(statearr_51538_51563[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51523 === (14)))
{var inst_51515 = (state_51522[(2)]);var inst_51516 = cljs.core.async.close_BANG_(out);var state_51522__$1 = (function (){var statearr_51540 = state_51522;(statearr_51540[(13)] = inst_51515);
return statearr_51540;
})();var statearr_51541_51564 = state_51522__$1;(statearr_51541_51564[(2)] = inst_51516);
(statearr_51541_51564[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51523 === (10)))
{var inst_51506 = (state_51522[(2)]);var state_51522__$1 = state_51522;var statearr_51542_51565 = state_51522__$1;(statearr_51542_51565[(2)] = inst_51506);
(statearr_51542_51565[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51523 === (8)))
{var inst_51486 = (state_51522[(8)]);var inst_51495 = (state_51522[(11)]);var tmp51539 = inst_51486;var inst_51486__$1 = tmp51539;var inst_51487 = inst_51495;var state_51522__$1 = (function (){var statearr_51543 = state_51522;(statearr_51543[(7)] = inst_51487);
(statearr_51543[(8)] = inst_51486__$1);
return statearr_51543;
})();var statearr_51544_51566 = state_51522__$1;(statearr_51544_51566[(2)] = null);
(statearr_51544_51566[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___51552,out))
;return ((function (switch__5693__auto__,c__5708__auto___51552,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51548[(0)] = state_machine__5694__auto__);
(statearr_51548[(1)] = (1));
return statearr_51548;
});
var state_machine__5694__auto____1 = (function (state_51522){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51522);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51549){if((e51549 instanceof Object))
{var ex__5697__auto__ = e51549;var statearr_51550_51567 = state_51522;(statearr_51550_51567[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51522);
return cljs.core.constant$keyword$1094;
} else
{throw e51549;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51568 = state_51522;
state_51522 = G__51568;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51522){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51552,out))
})();var state__5710__auto__ = (function (){var statearr_51551 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51552);
return statearr_51551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51552,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51711,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51711,out){
return (function (state_51681){var state_val_51682 = (state_51681[(1)]);if((state_val_51682 === (7)))
{var inst_51677 = (state_51681[(2)]);var state_51681__$1 = state_51681;var statearr_51683_51712 = state_51681__$1;(statearr_51683_51712[(2)] = inst_51677);
(statearr_51683_51712[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51682 === (1)))
{var inst_51640 = [];var inst_51641 = inst_51640;var inst_51642 = cljs.core.constant$keyword$1107;var state_51681__$1 = (function (){var statearr_51684 = state_51681;(statearr_51684[(7)] = inst_51642);
(statearr_51684[(8)] = inst_51641);
return statearr_51684;
})();var statearr_51685_51713 = state_51681__$1;(statearr_51685_51713[(2)] = null);
(statearr_51685_51713[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51682 === (4)))
{var inst_51645 = (state_51681[(9)]);var inst_51645__$1 = (state_51681[(2)]);var inst_51646 = (inst_51645__$1 == null);var inst_51647 = cljs.core.not(inst_51646);var state_51681__$1 = (function (){var statearr_51686 = state_51681;(statearr_51686[(9)] = inst_51645__$1);
return statearr_51686;
})();if(inst_51647)
{var statearr_51687_51714 = state_51681__$1;(statearr_51687_51714[(1)] = (5));
} else
{var statearr_51688_51715 = state_51681__$1;(statearr_51688_51715[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51682 === (15)))
{var inst_51671 = (state_51681[(2)]);var state_51681__$1 = state_51681;var statearr_51689_51716 = state_51681__$1;(statearr_51689_51716[(2)] = inst_51671);
(statearr_51689_51716[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51682 === (13)))
{var state_51681__$1 = state_51681;var statearr_51690_51717 = state_51681__$1;(statearr_51690_51717[(2)] = null);
(statearr_51690_51717[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51682 === (6)))
{var inst_51641 = (state_51681[(8)]);var inst_51666 = inst_51641.length;var inst_51667 = (inst_51666 > (0));var state_51681__$1 = state_51681;if(cljs.core.truth_(inst_51667))
{var statearr_51691_51718 = state_51681__$1;(statearr_51691_51718[(1)] = (12));
} else
{var statearr_51692_51719 = state_51681__$1;(statearr_51692_51719[(1)] = (13));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51682 === (3)))
{var inst_51679 = (state_51681[(2)]);var state_51681__$1 = state_51681;return cljs.core.async.impl.ioc_helpers.return_chan(state_51681__$1,inst_51679);
} else
{if((state_val_51682 === (12)))
{var inst_51641 = (state_51681[(8)]);var inst_51669 = cljs.core.vec(inst_51641);var state_51681__$1 = state_51681;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51681__$1,(15),out,inst_51669);
} else
{if((state_val_51682 === (2)))
{var state_51681__$1 = state_51681;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51681__$1,(4),ch);
} else
{if((state_val_51682 === (11)))
{var inst_51645 = (state_51681[(9)]);var inst_51649 = (state_51681[(10)]);var inst_51659 = (state_51681[(2)]);var inst_51660 = [];var inst_51661 = inst_51660.push(inst_51645);var inst_51641 = inst_51660;var inst_51642 = inst_51649;var state_51681__$1 = (function (){var statearr_51693 = state_51681;(statearr_51693[(7)] = inst_51642);
(statearr_51693[(11)] = inst_51659);
(statearr_51693[(12)] = inst_51661);
(statearr_51693[(8)] = inst_51641);
return statearr_51693;
})();var statearr_51694_51720 = state_51681__$1;(statearr_51694_51720[(2)] = null);
(statearr_51694_51720[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51682 === (9)))
{var inst_51641 = (state_51681[(8)]);var inst_51657 = cljs.core.vec(inst_51641);var state_51681__$1 = state_51681;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51681__$1,(11),out,inst_51657);
} else
{if((state_val_51682 === (5)))
{var inst_51642 = (state_51681[(7)]);var inst_51645 = (state_51681[(9)]);var inst_51649 = (state_51681[(10)]);var inst_51649__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51645) : f.call(null,inst_51645));var inst_51650 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51649__$1,inst_51642);var inst_51651 = cljs.core.keyword_identical_QMARK_(inst_51642,cljs.core.constant$keyword$1107);var inst_51652 = (inst_51650) || (inst_51651);var state_51681__$1 = (function (){var statearr_51695 = state_51681;(statearr_51695[(10)] = inst_51649__$1);
return statearr_51695;
})();if(cljs.core.truth_(inst_51652))
{var statearr_51696_51721 = state_51681__$1;(statearr_51696_51721[(1)] = (8));
} else
{var statearr_51697_51722 = state_51681__$1;(statearr_51697_51722[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51682 === (14)))
{var inst_51674 = (state_51681[(2)]);var inst_51675 = cljs.core.async.close_BANG_(out);var state_51681__$1 = (function (){var statearr_51699 = state_51681;(statearr_51699[(13)] = inst_51674);
return statearr_51699;
})();var statearr_51700_51723 = state_51681__$1;(statearr_51700_51723[(2)] = inst_51675);
(statearr_51700_51723[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51682 === (10)))
{var inst_51664 = (state_51681[(2)]);var state_51681__$1 = state_51681;var statearr_51701_51724 = state_51681__$1;(statearr_51701_51724[(2)] = inst_51664);
(statearr_51701_51724[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51682 === (8)))
{var inst_51645 = (state_51681[(9)]);var inst_51649 = (state_51681[(10)]);var inst_51641 = (state_51681[(8)]);var inst_51654 = inst_51641.push(inst_51645);var tmp51698 = inst_51641;var inst_51641__$1 = tmp51698;var inst_51642 = inst_51649;var state_51681__$1 = (function (){var statearr_51702 = state_51681;(statearr_51702[(7)] = inst_51642);
(statearr_51702[(14)] = inst_51654);
(statearr_51702[(8)] = inst_51641__$1);
return statearr_51702;
})();var statearr_51703_51725 = state_51681__$1;(statearr_51703_51725[(2)] = null);
(statearr_51703_51725[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___51711,out))
;return ((function (switch__5693__auto__,c__5708__auto___51711,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51707[(0)] = state_machine__5694__auto__);
(statearr_51707[(1)] = (1));
return statearr_51707;
});
var state_machine__5694__auto____1 = (function (state_51681){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51681);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51708){if((e51708 instanceof Object))
{var ex__5697__auto__ = e51708;var statearr_51709_51726 = state_51681;(statearr_51709_51726[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51681);
return cljs.core.constant$keyword$1094;
} else
{throw e51708;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51727 = state_51681;
state_51681 = G__51727;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51681){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51711,out))
})();var state__5710__auto__ = (function (){var statearr_51710 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51711);
return statearr_51710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51711,out))
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
