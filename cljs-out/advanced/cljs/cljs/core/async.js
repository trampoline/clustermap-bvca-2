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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t42515 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42515 = (function (f,fn_handler,meta42516){
this.f = f;
this.fn_handler = fn_handler;
this.meta42516 = meta42516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42515.cljs$lang$type = true;
cljs.core.async.t42515.cljs$lang$ctorStr = "cljs.core.async/t42515";
cljs.core.async.t42515.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t42515");
});
cljs.core.async.t42515.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t42515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t42515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42517){var self__ = this;
var _42517__$1 = this;return self__.meta42516;
});
cljs.core.async.t42515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42517,meta42516__$1){var self__ = this;
var _42517__$1 = this;return (new cljs.core.async.t42515(self__.f,self__.fn_handler,meta42516__$1));
});
cljs.core.async.__GT_t42515 = (function __GT_t42515(f__$1,fn_handler__$1,meta42516){return (new cljs.core.async.t42515(f__$1,fn_handler__$1,meta42516));
});
}
return (new cljs.core.async.t42515(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__42519 = buff;if(G__42519)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__42519.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__42519.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__42519);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__42519);
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
{var val_42520 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42520) : fn1.call(null,val_42520));
} else
{cljs.core.async.impl.dispatch.run(((function (val_42520,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42520) : fn1.call(null,val_42520));
});})(val_42520,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___42521 = n;var x_42522 = (0);while(true){
if((x_42522 < n__4414__auto___42521))
{(a[x_42522] = (0));
{
var G__42523 = (x_42522 + (1));
x_42522 = G__42523;
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
var G__42524 = (i + (1));
i = G__42524;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));if(typeof cljs.core.async.t42528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42528 = (function (flag,alt_flag,meta42529){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta42529 = meta42529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42528.cljs$lang$type = true;
cljs.core.async.t42528.cljs$lang$ctorStr = "cljs.core.async/t42528";
cljs.core.async.t42528.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t42528");
});})(flag))
;
cljs.core.async.t42528.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;
cljs.core.async.t42528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));
return true;
});})(flag))
;
cljs.core.async.t42528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42530){var self__ = this;
var _42530__$1 = this;return self__.meta42529;
});})(flag))
;
cljs.core.async.t42528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42530,meta42529__$1){var self__ = this;
var _42530__$1 = this;return (new cljs.core.async.t42528(self__.flag,self__.alt_flag,meta42529__$1));
});})(flag))
;
cljs.core.async.__GT_t42528 = ((function (flag){
return (function __GT_t42528(flag__$1,alt_flag__$1,meta42529){return (new cljs.core.async.t42528(flag__$1,alt_flag__$1,meta42529));
});})(flag))
;
}
return (new cljs.core.async.t42528(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t42534 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42534 = (function (cb,flag,alt_handler,meta42535){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta42535 = meta42535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42534.cljs$lang$type = true;
cljs.core.async.t42534.cljs$lang$ctorStr = "cljs.core.async/t42534";
cljs.core.async.t42534.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t42534");
});
cljs.core.async.t42534.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t42534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t42534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42536){var self__ = this;
var _42536__$1 = this;return self__.meta42535;
});
cljs.core.async.t42534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42536,meta42535__$1){var self__ = this;
var _42536__$1 = this;return (new cljs.core.async.t42534(self__.cb,self__.flag,self__.alt_handler,meta42535__$1));
});
cljs.core.async.__GT_t42534 = (function __GT_t42534(cb__$1,flag__$1,alt_handler__$1,meta42535){return (new cljs.core.async.t42534(cb__$1,flag__$1,alt_handler__$1,meta42535));
});
}
return (new cljs.core.async.t42534(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$878.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42537_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42537_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42537_SHARP_,port], null)));
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
var G__42538 = (i + (1));
i = G__42538;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$863))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3546__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$863.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$863], null));
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
var alts_BANG___delegate = function (ports,p__42539){var map__42541 = p__42539;var map__42541__$1 = ((cljs.core.seq_QMARK_(map__42541))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42541):map__42541);var opts = map__42541__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__42539 = null;if (arguments.length > 1) {
  p__42539 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__42539);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__42542){
var ports = cljs.core.first(arglist__42542);
var p__42539 = cljs.core.rest(arglist__42542);
return alts_BANG___delegate(ports,p__42539);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t42550 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42550 = (function (ch,f,map_LT_,meta42551){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42551 = meta42551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42550.cljs$lang$type = true;
cljs.core.async.t42550.cljs$lang$ctorStr = "cljs.core.async/t42550";
cljs.core.async.t42550.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t42550");
});
cljs.core.async.t42550.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42550.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t42550.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42550.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t42553 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42553 = (function (fn1,_,meta42551,ch,f,map_LT_,meta42554){
this.fn1 = fn1;
this._ = _;
this.meta42551 = meta42551;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42554 = meta42554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42553.cljs$lang$type = true;
cljs.core.async.t42553.cljs$lang$ctorStr = "cljs.core.async/t42553";
cljs.core.async.t42553.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t42553");
});})(___$1))
;
cljs.core.async.t42553.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t42553.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t42553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__42543_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__42543_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42543_SHARP_) : self__.f.call(null,p1__42543_SHARP_)))) : f1.call(null,(((p1__42543_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42543_SHARP_) : self__.f.call(null,p1__42543_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t42553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42555){var self__ = this;
var _42555__$1 = this;return self__.meta42554;
});})(___$1))
;
cljs.core.async.t42553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42555,meta42554__$1){var self__ = this;
var _42555__$1 = this;return (new cljs.core.async.t42553(self__.fn1,self__._,self__.meta42551,self__.ch,self__.f,self__.map_LT_,meta42554__$1));
});})(___$1))
;
cljs.core.async.__GT_t42553 = ((function (___$1){
return (function __GT_t42553(fn1__$1,___$2,meta42551__$1,ch__$2,f__$2,map_LT___$2,meta42554){return (new cljs.core.async.t42553(fn1__$1,___$2,meta42551__$1,ch__$2,f__$2,map_LT___$2,meta42554));
});})(___$1))
;
}
return (new cljs.core.async.t42553(fn1,___$1,self__.meta42551,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t42550.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42550.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t42550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42552){var self__ = this;
var _42552__$1 = this;return self__.meta42551;
});
cljs.core.async.t42550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42552,meta42551__$1){var self__ = this;
var _42552__$1 = this;return (new cljs.core.async.t42550(self__.ch,self__.f,self__.map_LT_,meta42551__$1));
});
cljs.core.async.__GT_t42550 = (function __GT_t42550(ch__$1,f__$1,map_LT___$1,meta42551){return (new cljs.core.async.t42550(ch__$1,f__$1,map_LT___$1,meta42551));
});
}
return (new cljs.core.async.t42550(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t42559 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42559 = (function (ch,f,map_GT_,meta42560){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta42560 = meta42560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42559.cljs$lang$type = true;
cljs.core.async.t42559.cljs$lang$ctorStr = "cljs.core.async/t42559";
cljs.core.async.t42559.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t42559");
});
cljs.core.async.t42559.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42559.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t42559.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42559.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t42559.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42559.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t42559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42561){var self__ = this;
var _42561__$1 = this;return self__.meta42560;
});
cljs.core.async.t42559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42561,meta42560__$1){var self__ = this;
var _42561__$1 = this;return (new cljs.core.async.t42559(self__.ch,self__.f,self__.map_GT_,meta42560__$1));
});
cljs.core.async.__GT_t42559 = (function __GT_t42559(ch__$1,f__$1,map_GT___$1,meta42560){return (new cljs.core.async.t42559(ch__$1,f__$1,map_GT___$1,meta42560));
});
}
return (new cljs.core.async.t42559(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t42565 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42565 = (function (ch,p,filter_GT_,meta42566){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta42566 = meta42566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42565.cljs$lang$type = true;
cljs.core.async.t42565.cljs$lang$ctorStr = "cljs.core.async/t42565";
cljs.core.async.t42565.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t42565");
});
cljs.core.async.t42565.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42565.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t42565.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42565.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t42565.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42565.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t42565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42567){var self__ = this;
var _42567__$1 = this;return self__.meta42566;
});
cljs.core.async.t42565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42567,meta42566__$1){var self__ = this;
var _42567__$1 = this;return (new cljs.core.async.t42565(self__.ch,self__.p,self__.filter_GT_,meta42566__$1));
});
cljs.core.async.__GT_t42565 = (function __GT_t42565(ch__$1,p__$1,filter_GT___$1,meta42566){return (new cljs.core.async.t42565(ch__$1,p__$1,filter_GT___$1,meta42566));
});
}
return (new cljs.core.async.t42565(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___42650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42650,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42650,out){
return (function (state_42629){var state_val_42630 = (state_42629[(1)]);if((state_val_42630 === (7)))
{var inst_42625 = (state_42629[(2)]);var state_42629__$1 = state_42629;var statearr_42631_42651 = state_42629__$1;(statearr_42631_42651[(2)] = inst_42625);
(statearr_42631_42651[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42630 === (1)))
{var state_42629__$1 = state_42629;var statearr_42632_42652 = state_42629__$1;(statearr_42632_42652[(2)] = null);
(statearr_42632_42652[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42630 === (4)))
{var inst_42611 = (state_42629[(7)]);var inst_42611__$1 = (state_42629[(2)]);var inst_42612 = (inst_42611__$1 == null);var state_42629__$1 = (function (){var statearr_42633 = state_42629;(statearr_42633[(7)] = inst_42611__$1);
return statearr_42633;
})();if(cljs.core.truth_(inst_42612))
{var statearr_42634_42653 = state_42629__$1;(statearr_42634_42653[(1)] = (5));
} else
{var statearr_42635_42654 = state_42629__$1;(statearr_42635_42654[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_42630 === (6)))
{var inst_42611 = (state_42629[(7)]);var inst_42616 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42611) : p.call(null,inst_42611));var state_42629__$1 = state_42629;if(cljs.core.truth_(inst_42616))
{var statearr_42636_42655 = state_42629__$1;(statearr_42636_42655[(1)] = (8));
} else
{var statearr_42637_42656 = state_42629__$1;(statearr_42637_42656[(1)] = (9));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_42630 === (3)))
{var inst_42627 = (state_42629[(2)]);var state_42629__$1 = state_42629;return cljs.core.async.impl.ioc_helpers.return_chan(state_42629__$1,inst_42627);
} else
{if((state_val_42630 === (2)))
{var state_42629__$1 = state_42629;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42629__$1,(4),ch);
} else
{if((state_val_42630 === (11)))
{var inst_42619 = (state_42629[(2)]);var state_42629__$1 = state_42629;var statearr_42638_42657 = state_42629__$1;(statearr_42638_42657[(2)] = inst_42619);
(statearr_42638_42657[(1)] = (10));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42630 === (9)))
{var state_42629__$1 = state_42629;var statearr_42639_42658 = state_42629__$1;(statearr_42639_42658[(2)] = null);
(statearr_42639_42658[(1)] = (10));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42630 === (5)))
{var inst_42614 = cljs.core.async.close_BANG_(out);var state_42629__$1 = state_42629;var statearr_42640_42659 = state_42629__$1;(statearr_42640_42659[(2)] = inst_42614);
(statearr_42640_42659[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42630 === (10)))
{var inst_42622 = (state_42629[(2)]);var state_42629__$1 = (function (){var statearr_42641 = state_42629;(statearr_42641[(8)] = inst_42622);
return statearr_42641;
})();var statearr_42642_42660 = state_42629__$1;(statearr_42642_42660[(2)] = null);
(statearr_42642_42660[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42630 === (8)))
{var inst_42611 = (state_42629[(7)]);var state_42629__$1 = state_42629;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42629__$1,(11),out,inst_42611);
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
});})(c__5708__auto___42650,out))
;return ((function (switch__5693__auto__,c__5708__auto___42650,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42646 = [null,null,null,null,null,null,null,null,null];(statearr_42646[(0)] = state_machine__5694__auto__);
(statearr_42646[(1)] = (1));
return statearr_42646;
});
var state_machine__5694__auto____1 = (function (state_42629){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42629);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42647){if((e42647 instanceof Object))
{var ex__5697__auto__ = e42647;var statearr_42648_42661 = state_42629;(statearr_42648_42661[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42629);
return cljs.core.constant$keyword$872;
} else
{throw e42647;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__42662 = state_42629;
state_42629 = G__42662;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42629){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42650,out))
})();var state__5710__auto__ = (function (){var statearr_42649 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42650);
return statearr_42649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42650,out))
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
return (function (state_42814){var state_val_42815 = (state_42814[(1)]);if((state_val_42815 === (7)))
{var inst_42810 = (state_42814[(2)]);var state_42814__$1 = state_42814;var statearr_42816_42853 = state_42814__$1;(statearr_42816_42853[(2)] = inst_42810);
(statearr_42816_42853[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (20)))
{var inst_42785 = (state_42814[(7)]);var inst_42796 = (state_42814[(2)]);var inst_42797 = cljs.core.next(inst_42785);var inst_42771 = inst_42797;var inst_42772 = null;var inst_42773 = (0);var inst_42774 = (0);var state_42814__$1 = (function (){var statearr_42817 = state_42814;(statearr_42817[(8)] = inst_42773);
(statearr_42817[(9)] = inst_42772);
(statearr_42817[(10)] = inst_42796);
(statearr_42817[(11)] = inst_42771);
(statearr_42817[(12)] = inst_42774);
return statearr_42817;
})();var statearr_42818_42854 = state_42814__$1;(statearr_42818_42854[(2)] = null);
(statearr_42818_42854[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (1)))
{var state_42814__$1 = state_42814;var statearr_42819_42855 = state_42814__$1;(statearr_42819_42855[(2)] = null);
(statearr_42819_42855[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (4)))
{var inst_42760 = (state_42814[(13)]);var inst_42760__$1 = (state_42814[(2)]);var inst_42761 = (inst_42760__$1 == null);var state_42814__$1 = (function (){var statearr_42823 = state_42814;(statearr_42823[(13)] = inst_42760__$1);
return statearr_42823;
})();if(cljs.core.truth_(inst_42761))
{var statearr_42824_42856 = state_42814__$1;(statearr_42824_42856[(1)] = (5));
} else
{var statearr_42825_42857 = state_42814__$1;(statearr_42825_42857[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (15)))
{var state_42814__$1 = state_42814;var statearr_42826_42858 = state_42814__$1;(statearr_42826_42858[(2)] = null);
(statearr_42826_42858[(1)] = (16));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (13)))
{var inst_42773 = (state_42814[(8)]);var inst_42772 = (state_42814[(9)]);var inst_42771 = (state_42814[(11)]);var inst_42774 = (state_42814[(12)]);var inst_42781 = (state_42814[(2)]);var inst_42782 = (inst_42774 + (1));var tmp42820 = inst_42773;var tmp42821 = inst_42772;var tmp42822 = inst_42771;var inst_42771__$1 = tmp42822;var inst_42772__$1 = tmp42821;var inst_42773__$1 = tmp42820;var inst_42774__$1 = inst_42782;var state_42814__$1 = (function (){var statearr_42827 = state_42814;(statearr_42827[(8)] = inst_42773__$1);
(statearr_42827[(9)] = inst_42772__$1);
(statearr_42827[(14)] = inst_42781);
(statearr_42827[(11)] = inst_42771__$1);
(statearr_42827[(12)] = inst_42774__$1);
return statearr_42827;
})();var statearr_42828_42859 = state_42814__$1;(statearr_42828_42859[(2)] = null);
(statearr_42828_42859[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (6)))
{var inst_42760 = (state_42814[(13)]);var inst_42765 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42760) : f.call(null,inst_42760));var inst_42770 = cljs.core.seq(inst_42765);var inst_42771 = inst_42770;var inst_42772 = null;var inst_42773 = (0);var inst_42774 = (0);var state_42814__$1 = (function (){var statearr_42829 = state_42814;(statearr_42829[(8)] = inst_42773);
(statearr_42829[(9)] = inst_42772);
(statearr_42829[(11)] = inst_42771);
(statearr_42829[(12)] = inst_42774);
return statearr_42829;
})();var statearr_42830_42860 = state_42814__$1;(statearr_42830_42860[(2)] = null);
(statearr_42830_42860[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (17)))
{var inst_42785 = (state_42814[(7)]);var inst_42789 = cljs.core.chunk_first(inst_42785);var inst_42790 = cljs.core.chunk_rest(inst_42785);var inst_42791 = cljs.core.count(inst_42789);var inst_42771 = inst_42790;var inst_42772 = inst_42789;var inst_42773 = inst_42791;var inst_42774 = (0);var state_42814__$1 = (function (){var statearr_42831 = state_42814;(statearr_42831[(8)] = inst_42773);
(statearr_42831[(9)] = inst_42772);
(statearr_42831[(11)] = inst_42771);
(statearr_42831[(12)] = inst_42774);
return statearr_42831;
})();var statearr_42832_42861 = state_42814__$1;(statearr_42832_42861[(2)] = null);
(statearr_42832_42861[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (3)))
{var inst_42812 = (state_42814[(2)]);var state_42814__$1 = state_42814;return cljs.core.async.impl.ioc_helpers.return_chan(state_42814__$1,inst_42812);
} else
{if((state_val_42815 === (12)))
{var inst_42805 = (state_42814[(2)]);var state_42814__$1 = state_42814;var statearr_42833_42862 = state_42814__$1;(statearr_42833_42862[(2)] = inst_42805);
(statearr_42833_42862[(1)] = (9));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (2)))
{var state_42814__$1 = state_42814;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42814__$1,(4),in$);
} else
{if((state_val_42815 === (19)))
{var inst_42800 = (state_42814[(2)]);var state_42814__$1 = state_42814;var statearr_42834_42863 = state_42814__$1;(statearr_42834_42863[(2)] = inst_42800);
(statearr_42834_42863[(1)] = (16));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (11)))
{var inst_42785 = (state_42814[(7)]);var inst_42771 = (state_42814[(11)]);var inst_42785__$1 = cljs.core.seq(inst_42771);var state_42814__$1 = (function (){var statearr_42835 = state_42814;(statearr_42835[(7)] = inst_42785__$1);
return statearr_42835;
})();if(inst_42785__$1)
{var statearr_42836_42864 = state_42814__$1;(statearr_42836_42864[(1)] = (14));
} else
{var statearr_42837_42865 = state_42814__$1;(statearr_42837_42865[(1)] = (15));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (9)))
{var inst_42807 = (state_42814[(2)]);var state_42814__$1 = (function (){var statearr_42838 = state_42814;(statearr_42838[(15)] = inst_42807);
return statearr_42838;
})();var statearr_42839_42866 = state_42814__$1;(statearr_42839_42866[(2)] = null);
(statearr_42839_42866[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (5)))
{var inst_42763 = cljs.core.async.close_BANG_(out);var state_42814__$1 = state_42814;var statearr_42840_42867 = state_42814__$1;(statearr_42840_42867[(2)] = inst_42763);
(statearr_42840_42867[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (14)))
{var inst_42785 = (state_42814[(7)]);var inst_42787 = cljs.core.chunked_seq_QMARK_(inst_42785);var state_42814__$1 = state_42814;if(inst_42787)
{var statearr_42841_42868 = state_42814__$1;(statearr_42841_42868[(1)] = (17));
} else
{var statearr_42842_42869 = state_42814__$1;(statearr_42842_42869[(1)] = (18));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (16)))
{var inst_42803 = (state_42814[(2)]);var state_42814__$1 = state_42814;var statearr_42843_42870 = state_42814__$1;(statearr_42843_42870[(2)] = inst_42803);
(statearr_42843_42870[(1)] = (12));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42815 === (10)))
{var inst_42772 = (state_42814[(9)]);var inst_42774 = (state_42814[(12)]);var inst_42779 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42772,inst_42774);var state_42814__$1 = state_42814;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42814__$1,(13),out,inst_42779);
} else
{if((state_val_42815 === (18)))
{var inst_42785 = (state_42814[(7)]);var inst_42794 = cljs.core.first(inst_42785);var state_42814__$1 = state_42814;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42814__$1,(20),out,inst_42794);
} else
{if((state_val_42815 === (8)))
{var inst_42773 = (state_42814[(8)]);var inst_42774 = (state_42814[(12)]);var inst_42776 = (inst_42774 < inst_42773);var inst_42777 = inst_42776;var state_42814__$1 = state_42814;if(cljs.core.truth_(inst_42777))
{var statearr_42844_42871 = state_42814__$1;(statearr_42844_42871[(1)] = (10));
} else
{var statearr_42845_42872 = state_42814__$1;(statearr_42845_42872[(1)] = (11));
}
return cljs.core.constant$keyword$872;
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
var state_machine__5694__auto____0 = (function (){var statearr_42849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42849[(0)] = state_machine__5694__auto__);
(statearr_42849[(1)] = (1));
return statearr_42849;
});
var state_machine__5694__auto____1 = (function (state_42814){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42814);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42850){if((e42850 instanceof Object))
{var ex__5697__auto__ = e42850;var statearr_42851_42873 = state_42814;(statearr_42851_42873[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42814);
return cljs.core.constant$keyword$872;
} else
{throw e42850;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__42874 = state_42814;
state_42814 = G__42874;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42814){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_42852 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42852;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___42955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42955){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42955){
return (function (state_42934){var state_val_42935 = (state_42934[(1)]);if((state_val_42935 === (7)))
{var inst_42930 = (state_42934[(2)]);var state_42934__$1 = state_42934;var statearr_42936_42956 = state_42934__$1;(statearr_42936_42956[(2)] = inst_42930);
(statearr_42936_42956[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42935 === (1)))
{var state_42934__$1 = state_42934;var statearr_42937_42957 = state_42934__$1;(statearr_42937_42957[(2)] = null);
(statearr_42937_42957[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42935 === (4)))
{var inst_42917 = (state_42934[(7)]);var inst_42917__$1 = (state_42934[(2)]);var inst_42918 = (inst_42917__$1 == null);var state_42934__$1 = (function (){var statearr_42938 = state_42934;(statearr_42938[(7)] = inst_42917__$1);
return statearr_42938;
})();if(cljs.core.truth_(inst_42918))
{var statearr_42939_42958 = state_42934__$1;(statearr_42939_42958[(1)] = (5));
} else
{var statearr_42940_42959 = state_42934__$1;(statearr_42940_42959[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_42935 === (6)))
{var inst_42917 = (state_42934[(7)]);var state_42934__$1 = state_42934;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42934__$1,(11),to,inst_42917);
} else
{if((state_val_42935 === (3)))
{var inst_42932 = (state_42934[(2)]);var state_42934__$1 = state_42934;return cljs.core.async.impl.ioc_helpers.return_chan(state_42934__$1,inst_42932);
} else
{if((state_val_42935 === (2)))
{var state_42934__$1 = state_42934;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42934__$1,(4),from);
} else
{if((state_val_42935 === (11)))
{var inst_42927 = (state_42934[(2)]);var state_42934__$1 = (function (){var statearr_42941 = state_42934;(statearr_42941[(8)] = inst_42927);
return statearr_42941;
})();var statearr_42942_42960 = state_42934__$1;(statearr_42942_42960[(2)] = null);
(statearr_42942_42960[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42935 === (9)))
{var state_42934__$1 = state_42934;var statearr_42943_42961 = state_42934__$1;(statearr_42943_42961[(2)] = null);
(statearr_42943_42961[(1)] = (10));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42935 === (5)))
{var state_42934__$1 = state_42934;if(cljs.core.truth_(close_QMARK_))
{var statearr_42944_42962 = state_42934__$1;(statearr_42944_42962[(1)] = (8));
} else
{var statearr_42945_42963 = state_42934__$1;(statearr_42945_42963[(1)] = (9));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_42935 === (10)))
{var inst_42924 = (state_42934[(2)]);var state_42934__$1 = state_42934;var statearr_42946_42964 = state_42934__$1;(statearr_42946_42964[(2)] = inst_42924);
(statearr_42946_42964[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_42935 === (8)))
{var inst_42921 = cljs.core.async.close_BANG_(to);var state_42934__$1 = state_42934;var statearr_42947_42965 = state_42934__$1;(statearr_42947_42965[(2)] = inst_42921);
(statearr_42947_42965[(1)] = (10));
return cljs.core.constant$keyword$872;
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
});})(c__5708__auto___42955))
;return ((function (switch__5693__auto__,c__5708__auto___42955){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42951 = [null,null,null,null,null,null,null,null,null];(statearr_42951[(0)] = state_machine__5694__auto__);
(statearr_42951[(1)] = (1));
return statearr_42951;
});
var state_machine__5694__auto____1 = (function (state_42934){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42934);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42952){if((e42952 instanceof Object))
{var ex__5697__auto__ = e42952;var statearr_42953_42966 = state_42934;(statearr_42953_42966[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42934);
return cljs.core.constant$keyword$872;
} else
{throw e42952;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__42967 = state_42934;
state_42934 = G__42967;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42934){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42955))
})();var state__5710__auto__ = (function (){var statearr_42954 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42955);
return statearr_42954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42955))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5708__auto___43054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43054,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43054,tc,fc){
return (function (state_43032){var state_val_43033 = (state_43032[(1)]);if((state_val_43033 === (7)))
{var inst_43028 = (state_43032[(2)]);var state_43032__$1 = state_43032;var statearr_43034_43055 = state_43032__$1;(statearr_43034_43055[(2)] = inst_43028);
(statearr_43034_43055[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43033 === (1)))
{var state_43032__$1 = state_43032;var statearr_43035_43056 = state_43032__$1;(statearr_43035_43056[(2)] = null);
(statearr_43035_43056[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43033 === (4)))
{var inst_43013 = (state_43032[(7)]);var inst_43013__$1 = (state_43032[(2)]);var inst_43014 = (inst_43013__$1 == null);var state_43032__$1 = (function (){var statearr_43036 = state_43032;(statearr_43036[(7)] = inst_43013__$1);
return statearr_43036;
})();if(cljs.core.truth_(inst_43014))
{var statearr_43037_43057 = state_43032__$1;(statearr_43037_43057[(1)] = (5));
} else
{var statearr_43038_43058 = state_43032__$1;(statearr_43038_43058[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43033 === (6)))
{var inst_43013 = (state_43032[(7)]);var inst_43019 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43013) : p.call(null,inst_43013));var state_43032__$1 = state_43032;if(cljs.core.truth_(inst_43019))
{var statearr_43039_43059 = state_43032__$1;(statearr_43039_43059[(1)] = (9));
} else
{var statearr_43040_43060 = state_43032__$1;(statearr_43040_43060[(1)] = (10));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43033 === (3)))
{var inst_43030 = (state_43032[(2)]);var state_43032__$1 = state_43032;return cljs.core.async.impl.ioc_helpers.return_chan(state_43032__$1,inst_43030);
} else
{if((state_val_43033 === (2)))
{var state_43032__$1 = state_43032;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43032__$1,(4),ch);
} else
{if((state_val_43033 === (11)))
{var inst_43013 = (state_43032[(7)]);var inst_43023 = (state_43032[(2)]);var state_43032__$1 = state_43032;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43032__$1,(8),inst_43023,inst_43013);
} else
{if((state_val_43033 === (9)))
{var state_43032__$1 = state_43032;var statearr_43041_43061 = state_43032__$1;(statearr_43041_43061[(2)] = tc);
(statearr_43041_43061[(1)] = (11));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43033 === (5)))
{var inst_43016 = cljs.core.async.close_BANG_(tc);var inst_43017 = cljs.core.async.close_BANG_(fc);var state_43032__$1 = (function (){var statearr_43042 = state_43032;(statearr_43042[(8)] = inst_43016);
return statearr_43042;
})();var statearr_43043_43062 = state_43032__$1;(statearr_43043_43062[(2)] = inst_43017);
(statearr_43043_43062[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43033 === (10)))
{var state_43032__$1 = state_43032;var statearr_43044_43063 = state_43032__$1;(statearr_43044_43063[(2)] = fc);
(statearr_43044_43063[(1)] = (11));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43033 === (8)))
{var inst_43025 = (state_43032[(2)]);var state_43032__$1 = (function (){var statearr_43045 = state_43032;(statearr_43045[(9)] = inst_43025);
return statearr_43045;
})();var statearr_43046_43064 = state_43032__$1;(statearr_43046_43064[(2)] = null);
(statearr_43046_43064[(1)] = (2));
return cljs.core.constant$keyword$872;
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
});})(c__5708__auto___43054,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___43054,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43050 = [null,null,null,null,null,null,null,null,null,null];(statearr_43050[(0)] = state_machine__5694__auto__);
(statearr_43050[(1)] = (1));
return statearr_43050;
});
var state_machine__5694__auto____1 = (function (state_43032){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43032);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43051){if((e43051 instanceof Object))
{var ex__5697__auto__ = e43051;var statearr_43052_43065 = state_43032;(statearr_43052_43065[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43032);
return cljs.core.constant$keyword$872;
} else
{throw e43051;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__43066 = state_43032;
state_43032 = G__43066;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43032){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43054,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_43053 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43054);
return statearr_43053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43054,tc,fc))
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
return (function (state_43113){var state_val_43114 = (state_43113[(1)]);if((state_val_43114 === (7)))
{var inst_43109 = (state_43113[(2)]);var state_43113__$1 = state_43113;var statearr_43115_43131 = state_43113__$1;(statearr_43115_43131[(2)] = inst_43109);
(statearr_43115_43131[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43114 === (6)))
{var inst_43099 = (state_43113[(7)]);var inst_43102 = (state_43113[(8)]);var inst_43106 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43099,inst_43102) : f.call(null,inst_43099,inst_43102));var inst_43099__$1 = inst_43106;var state_43113__$1 = (function (){var statearr_43116 = state_43113;(statearr_43116[(7)] = inst_43099__$1);
return statearr_43116;
})();var statearr_43117_43132 = state_43113__$1;(statearr_43117_43132[(2)] = null);
(statearr_43117_43132[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43114 === (5)))
{var inst_43099 = (state_43113[(7)]);var state_43113__$1 = state_43113;var statearr_43118_43133 = state_43113__$1;(statearr_43118_43133[(2)] = inst_43099);
(statearr_43118_43133[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43114 === (4)))
{var inst_43102 = (state_43113[(8)]);var inst_43102__$1 = (state_43113[(2)]);var inst_43103 = (inst_43102__$1 == null);var state_43113__$1 = (function (){var statearr_43119 = state_43113;(statearr_43119[(8)] = inst_43102__$1);
return statearr_43119;
})();if(cljs.core.truth_(inst_43103))
{var statearr_43120_43134 = state_43113__$1;(statearr_43120_43134[(1)] = (5));
} else
{var statearr_43121_43135 = state_43113__$1;(statearr_43121_43135[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43114 === (3)))
{var inst_43111 = (state_43113[(2)]);var state_43113__$1 = state_43113;return cljs.core.async.impl.ioc_helpers.return_chan(state_43113__$1,inst_43111);
} else
{if((state_val_43114 === (2)))
{var state_43113__$1 = state_43113;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43113__$1,(4),ch);
} else
{if((state_val_43114 === (1)))
{var inst_43099 = init;var state_43113__$1 = (function (){var statearr_43122 = state_43113;(statearr_43122[(7)] = inst_43099);
return statearr_43122;
})();var statearr_43123_43136 = state_43113__$1;(statearr_43123_43136[(2)] = null);
(statearr_43123_43136[(1)] = (2));
return cljs.core.constant$keyword$872;
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
var state_machine__5694__auto____0 = (function (){var statearr_43127 = [null,null,null,null,null,null,null,null,null];(statearr_43127[(0)] = state_machine__5694__auto__);
(statearr_43127[(1)] = (1));
return statearr_43127;
});
var state_machine__5694__auto____1 = (function (state_43113){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43113);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43128){if((e43128 instanceof Object))
{var ex__5697__auto__ = e43128;var statearr_43129_43137 = state_43113;(statearr_43129_43137[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43113);
return cljs.core.constant$keyword$872;
} else
{throw e43128;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__43138 = state_43113;
state_43113 = G__43138;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43113){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_43130 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_43130;
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
return (function (state_43200){var state_val_43201 = (state_43200[(1)]);if((state_val_43201 === (7)))
{var inst_43181 = (state_43200[(7)]);var inst_43186 = (state_43200[(2)]);var inst_43187 = cljs.core.next(inst_43181);var inst_43181__$1 = inst_43187;var state_43200__$1 = (function (){var statearr_43202 = state_43200;(statearr_43202[(8)] = inst_43186);
(statearr_43202[(7)] = inst_43181__$1);
return statearr_43202;
})();var statearr_43203_43221 = state_43200__$1;(statearr_43203_43221[(2)] = null);
(statearr_43203_43221[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43201 === (1)))
{var inst_43180 = cljs.core.seq(coll);var inst_43181 = inst_43180;var state_43200__$1 = (function (){var statearr_43204 = state_43200;(statearr_43204[(7)] = inst_43181);
return statearr_43204;
})();var statearr_43205_43222 = state_43200__$1;(statearr_43205_43222[(2)] = null);
(statearr_43205_43222[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43201 === (4)))
{var inst_43181 = (state_43200[(7)]);var inst_43184 = cljs.core.first(inst_43181);var state_43200__$1 = state_43200;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43200__$1,(7),ch,inst_43184);
} else
{if((state_val_43201 === (6)))
{var inst_43196 = (state_43200[(2)]);var state_43200__$1 = state_43200;var statearr_43206_43223 = state_43200__$1;(statearr_43206_43223[(2)] = inst_43196);
(statearr_43206_43223[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43201 === (3)))
{var inst_43198 = (state_43200[(2)]);var state_43200__$1 = state_43200;return cljs.core.async.impl.ioc_helpers.return_chan(state_43200__$1,inst_43198);
} else
{if((state_val_43201 === (2)))
{var inst_43181 = (state_43200[(7)]);var state_43200__$1 = state_43200;if(cljs.core.truth_(inst_43181))
{var statearr_43207_43224 = state_43200__$1;(statearr_43207_43224[(1)] = (4));
} else
{var statearr_43208_43225 = state_43200__$1;(statearr_43208_43225[(1)] = (5));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43201 === (9)))
{var state_43200__$1 = state_43200;var statearr_43209_43226 = state_43200__$1;(statearr_43209_43226[(2)] = null);
(statearr_43209_43226[(1)] = (10));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43201 === (5)))
{var state_43200__$1 = state_43200;if(cljs.core.truth_(close_QMARK_))
{var statearr_43210_43227 = state_43200__$1;(statearr_43210_43227[(1)] = (8));
} else
{var statearr_43211_43228 = state_43200__$1;(statearr_43211_43228[(1)] = (9));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43201 === (10)))
{var inst_43194 = (state_43200[(2)]);var state_43200__$1 = state_43200;var statearr_43212_43229 = state_43200__$1;(statearr_43212_43229[(2)] = inst_43194);
(statearr_43212_43229[(1)] = (6));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43201 === (8)))
{var inst_43191 = cljs.core.async.close_BANG_(ch);var state_43200__$1 = state_43200;var statearr_43213_43230 = state_43200__$1;(statearr_43213_43230[(2)] = inst_43191);
(statearr_43213_43230[(1)] = (10));
return cljs.core.constant$keyword$872;
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
var state_machine__5694__auto____0 = (function (){var statearr_43217 = [null,null,null,null,null,null,null,null,null];(statearr_43217[(0)] = state_machine__5694__auto__);
(statearr_43217[(1)] = (1));
return statearr_43217;
});
var state_machine__5694__auto____1 = (function (state_43200){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43200);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43218){if((e43218 instanceof Object))
{var ex__5697__auto__ = e43218;var statearr_43219_43231 = state_43200;(statearr_43219_43231[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43200);
return cljs.core.constant$keyword$872;
} else
{throw e43218;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__43232 = state_43200;
state_43200 = G__43232;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43200){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_43220 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_43220;
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
cljs.core.async.Mux = (function (){var obj43234 = {};return obj43234;
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
cljs.core.async.Mult = (function (){var obj43236 = {};return obj43236;
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
cljs.core.async.mult = (function mult(ch){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var m = (function (){if(typeof cljs.core.async.t43460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43460 = (function (cs,ch,mult,meta43461){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta43461 = meta43461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43460.cljs$lang$type = true;
cljs.core.async.t43460.cljs$lang$ctorStr = "cljs.core.async/t43460";
cljs.core.async.t43460.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t43460");
});})(cs))
;
cljs.core.async.t43460.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t43460.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t43460.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t43460.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return null;
});})(cs))
;
cljs.core.async.t43460.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t43460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43462){var self__ = this;
var _43462__$1 = this;return self__.meta43461;
});})(cs))
;
cljs.core.async.t43460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43462,meta43461__$1){var self__ = this;
var _43462__$1 = this;return (new cljs.core.async.t43460(self__.cs,self__.ch,self__.mult,meta43461__$1));
});})(cs))
;
cljs.core.async.__GT_t43460 = ((function (cs){
return (function __GT_t43460(cs__$1,ch__$1,mult__$1,meta43461){return (new cljs.core.async.t43460(cs__$1,ch__$1,mult__$1,meta43461));
});})(cs))
;
}
return (new cljs.core.async.t43460(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___43683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43683,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43683,cs,m,dchan,dctr,done){
return (function (state_43597){var state_val_43598 = (state_43597[(1)]);if((state_val_43598 === (7)))
{var inst_43593 = (state_43597[(2)]);var state_43597__$1 = state_43597;var statearr_43599_43684 = state_43597__$1;(statearr_43599_43684[(2)] = inst_43593);
(statearr_43599_43684[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (20)))
{var inst_43494 = (state_43597[(7)]);var inst_43504 = cljs.core.first(inst_43494);var inst_43505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43504,(0),null);var inst_43506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43504,(1),null);var state_43597__$1 = (function (){var statearr_43600 = state_43597;(statearr_43600[(8)] = inst_43505);
return statearr_43600;
})();if(cljs.core.truth_(inst_43506))
{var statearr_43601_43685 = state_43597__$1;(statearr_43601_43685[(1)] = (22));
} else
{var statearr_43602_43686 = state_43597__$1;(statearr_43602_43686[(1)] = (23));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (27)))
{var inst_43536 = (state_43597[(9)]);var inst_43534 = (state_43597[(10)]);var inst_43541 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43534,inst_43536);var state_43597__$1 = (function (){var statearr_43603 = state_43597;(statearr_43603[(11)] = inst_43541);
return statearr_43603;
})();var statearr_43604_43687 = state_43597__$1;(statearr_43604_43687[(2)] = null);
(statearr_43604_43687[(1)] = (32));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (1)))
{var state_43597__$1 = state_43597;var statearr_43605_43688 = state_43597__$1;(statearr_43605_43688[(2)] = null);
(statearr_43605_43688[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (24)))
{var inst_43494 = (state_43597[(7)]);var inst_43511 = (state_43597[(2)]);var inst_43512 = cljs.core.next(inst_43494);var inst_43474 = inst_43512;var inst_43475 = null;var inst_43476 = (0);var inst_43477 = (0);var state_43597__$1 = (function (){var statearr_43606 = state_43597;(statearr_43606[(12)] = inst_43477);
(statearr_43606[(13)] = inst_43476);
(statearr_43606[(14)] = inst_43475);
(statearr_43606[(15)] = inst_43511);
(statearr_43606[(16)] = inst_43474);
return statearr_43606;
})();var statearr_43607_43689 = state_43597__$1;(statearr_43607_43689[(2)] = null);
(statearr_43607_43689[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (39)))
{var inst_43554 = (state_43597[(17)]);var inst_43572 = (state_43597[(2)]);var inst_43573 = cljs.core.next(inst_43554);var inst_43533 = inst_43573;var inst_43534 = null;var inst_43535 = (0);var inst_43536 = (0);var state_43597__$1 = (function (){var statearr_43611 = state_43597;(statearr_43611[(18)] = inst_43572);
(statearr_43611[(9)] = inst_43536);
(statearr_43611[(10)] = inst_43534);
(statearr_43611[(19)] = inst_43535);
(statearr_43611[(20)] = inst_43533);
return statearr_43611;
})();var statearr_43612_43690 = state_43597__$1;(statearr_43612_43690[(2)] = null);
(statearr_43612_43690[(1)] = (25));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (4)))
{var inst_43465 = (state_43597[(21)]);var inst_43465__$1 = (state_43597[(2)]);var inst_43466 = (inst_43465__$1 == null);var state_43597__$1 = (function (){var statearr_43613 = state_43597;(statearr_43613[(21)] = inst_43465__$1);
return statearr_43613;
})();if(cljs.core.truth_(inst_43466))
{var statearr_43614_43691 = state_43597__$1;(statearr_43614_43691[(1)] = (5));
} else
{var statearr_43615_43692 = state_43597__$1;(statearr_43615_43692[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (15)))
{var inst_43477 = (state_43597[(12)]);var inst_43476 = (state_43597[(13)]);var inst_43475 = (state_43597[(14)]);var inst_43474 = (state_43597[(16)]);var inst_43490 = (state_43597[(2)]);var inst_43491 = (inst_43477 + (1));var tmp43608 = inst_43476;var tmp43609 = inst_43475;var tmp43610 = inst_43474;var inst_43474__$1 = tmp43610;var inst_43475__$1 = tmp43609;var inst_43476__$1 = tmp43608;var inst_43477__$1 = inst_43491;var state_43597__$1 = (function (){var statearr_43616 = state_43597;(statearr_43616[(22)] = inst_43490);
(statearr_43616[(12)] = inst_43477__$1);
(statearr_43616[(13)] = inst_43476__$1);
(statearr_43616[(14)] = inst_43475__$1);
(statearr_43616[(16)] = inst_43474__$1);
return statearr_43616;
})();var statearr_43617_43693 = state_43597__$1;(statearr_43617_43693[(2)] = null);
(statearr_43617_43693[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (21)))
{var inst_43515 = (state_43597[(2)]);var state_43597__$1 = state_43597;var statearr_43618_43694 = state_43597__$1;(statearr_43618_43694[(2)] = inst_43515);
(statearr_43618_43694[(1)] = (18));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (31)))
{var inst_43541 = (state_43597[(11)]);var inst_43542 = (state_43597[(2)]);var inst_43543 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_43544 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43541);var state_43597__$1 = (function (){var statearr_43619 = state_43597;(statearr_43619[(23)] = inst_43542);
(statearr_43619[(24)] = inst_43543);
return statearr_43619;
})();var statearr_43620_43695 = state_43597__$1;(statearr_43620_43695[(2)] = inst_43544);
cljs.core.async.impl.ioc_helpers.process_exception(state_43597__$1);
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (32)))
{var inst_43465 = (state_43597[(21)]);var inst_43541 = (state_43597[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_43597,(31),Object,null,(30));var inst_43548 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43541,inst_43465,done);var state_43597__$1 = state_43597;var statearr_43621_43696 = state_43597__$1;(statearr_43621_43696[(2)] = inst_43548);
cljs.core.async.impl.ioc_helpers.process_exception(state_43597__$1);
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (40)))
{var inst_43563 = (state_43597[(25)]);var inst_43564 = (state_43597[(2)]);var inst_43565 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_43566 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43563);var state_43597__$1 = (function (){var statearr_43622 = state_43597;(statearr_43622[(26)] = inst_43565);
(statearr_43622[(27)] = inst_43564);
return statearr_43622;
})();var statearr_43623_43697 = state_43597__$1;(statearr_43623_43697[(2)] = inst_43566);
cljs.core.async.impl.ioc_helpers.process_exception(state_43597__$1);
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (33)))
{var inst_43554 = (state_43597[(17)]);var inst_43556 = cljs.core.chunked_seq_QMARK_(inst_43554);var state_43597__$1 = state_43597;if(inst_43556)
{var statearr_43624_43698 = state_43597__$1;(statearr_43624_43698[(1)] = (36));
} else
{var statearr_43625_43699 = state_43597__$1;(statearr_43625_43699[(1)] = (37));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (13)))
{var inst_43484 = (state_43597[(28)]);var inst_43487 = cljs.core.async.close_BANG_(inst_43484);var state_43597__$1 = state_43597;var statearr_43626_43700 = state_43597__$1;(statearr_43626_43700[(2)] = inst_43487);
(statearr_43626_43700[(1)] = (15));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (22)))
{var inst_43505 = (state_43597[(8)]);var inst_43508 = cljs.core.async.close_BANG_(inst_43505);var state_43597__$1 = state_43597;var statearr_43627_43701 = state_43597__$1;(statearr_43627_43701[(2)] = inst_43508);
(statearr_43627_43701[(1)] = (24));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (36)))
{var inst_43554 = (state_43597[(17)]);var inst_43558 = cljs.core.chunk_first(inst_43554);var inst_43559 = cljs.core.chunk_rest(inst_43554);var inst_43560 = cljs.core.count(inst_43558);var inst_43533 = inst_43559;var inst_43534 = inst_43558;var inst_43535 = inst_43560;var inst_43536 = (0);var state_43597__$1 = (function (){var statearr_43628 = state_43597;(statearr_43628[(9)] = inst_43536);
(statearr_43628[(10)] = inst_43534);
(statearr_43628[(19)] = inst_43535);
(statearr_43628[(20)] = inst_43533);
return statearr_43628;
})();var statearr_43629_43702 = state_43597__$1;(statearr_43629_43702[(2)] = null);
(statearr_43629_43702[(1)] = (25));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (41)))
{var inst_43465 = (state_43597[(21)]);var inst_43563 = (state_43597[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_43597,(40),Object,null,(39));var inst_43570 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43563,inst_43465,done);var state_43597__$1 = state_43597;var statearr_43630_43703 = state_43597__$1;(statearr_43630_43703[(2)] = inst_43570);
cljs.core.async.impl.ioc_helpers.process_exception(state_43597__$1);
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (43)))
{var state_43597__$1 = state_43597;var statearr_43631_43704 = state_43597__$1;(statearr_43631_43704[(2)] = null);
(statearr_43631_43704[(1)] = (44));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (29)))
{var inst_43581 = (state_43597[(2)]);var state_43597__$1 = state_43597;var statearr_43632_43705 = state_43597__$1;(statearr_43632_43705[(2)] = inst_43581);
(statearr_43632_43705[(1)] = (26));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (44)))
{var inst_43590 = (state_43597[(2)]);var state_43597__$1 = (function (){var statearr_43633 = state_43597;(statearr_43633[(29)] = inst_43590);
return statearr_43633;
})();var statearr_43634_43706 = state_43597__$1;(statearr_43634_43706[(2)] = null);
(statearr_43634_43706[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (6)))
{var inst_43525 = (state_43597[(30)]);var inst_43524 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_43525__$1 = cljs.core.keys(inst_43524);var inst_43526 = cljs.core.count(inst_43525__$1);var inst_43527 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_43526) : cljs.core.reset_BANG_.call(null,dctr,inst_43526));var inst_43532 = cljs.core.seq(inst_43525__$1);var inst_43533 = inst_43532;var inst_43534 = null;var inst_43535 = (0);var inst_43536 = (0);var state_43597__$1 = (function (){var statearr_43635 = state_43597;(statearr_43635[(31)] = inst_43527);
(statearr_43635[(9)] = inst_43536);
(statearr_43635[(10)] = inst_43534);
(statearr_43635[(30)] = inst_43525__$1);
(statearr_43635[(19)] = inst_43535);
(statearr_43635[(20)] = inst_43533);
return statearr_43635;
})();var statearr_43636_43707 = state_43597__$1;(statearr_43636_43707[(2)] = null);
(statearr_43636_43707[(1)] = (25));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (28)))
{var inst_43533 = (state_43597[(20)]);var inst_43554 = (state_43597[(17)]);var inst_43554__$1 = cljs.core.seq(inst_43533);var state_43597__$1 = (function (){var statearr_43637 = state_43597;(statearr_43637[(17)] = inst_43554__$1);
return statearr_43637;
})();if(inst_43554__$1)
{var statearr_43638_43708 = state_43597__$1;(statearr_43638_43708[(1)] = (33));
} else
{var statearr_43639_43709 = state_43597__$1;(statearr_43639_43709[(1)] = (34));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (25)))
{var inst_43536 = (state_43597[(9)]);var inst_43535 = (state_43597[(19)]);var inst_43538 = (inst_43536 < inst_43535);var inst_43539 = inst_43538;var state_43597__$1 = state_43597;if(cljs.core.truth_(inst_43539))
{var statearr_43640_43710 = state_43597__$1;(statearr_43640_43710[(1)] = (27));
} else
{var statearr_43641_43711 = state_43597__$1;(statearr_43641_43711[(1)] = (28));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (34)))
{var state_43597__$1 = state_43597;var statearr_43642_43712 = state_43597__$1;(statearr_43642_43712[(2)] = null);
(statearr_43642_43712[(1)] = (35));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (17)))
{var state_43597__$1 = state_43597;var statearr_43643_43713 = state_43597__$1;(statearr_43643_43713[(2)] = null);
(statearr_43643_43713[(1)] = (18));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (3)))
{var inst_43595 = (state_43597[(2)]);var state_43597__$1 = state_43597;return cljs.core.async.impl.ioc_helpers.return_chan(state_43597__$1,inst_43595);
} else
{if((state_val_43598 === (12)))
{var inst_43520 = (state_43597[(2)]);var state_43597__$1 = state_43597;var statearr_43644_43714 = state_43597__$1;(statearr_43644_43714[(2)] = inst_43520);
(statearr_43644_43714[(1)] = (9));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (2)))
{var state_43597__$1 = state_43597;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43597__$1,(4),ch);
} else
{if((state_val_43598 === (23)))
{var state_43597__$1 = state_43597;var statearr_43645_43715 = state_43597__$1;(statearr_43645_43715[(2)] = null);
(statearr_43645_43715[(1)] = (24));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (35)))
{var inst_43579 = (state_43597[(2)]);var state_43597__$1 = state_43597;var statearr_43646_43716 = state_43597__$1;(statearr_43646_43716[(2)] = inst_43579);
(statearr_43646_43716[(1)] = (29));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (19)))
{var inst_43494 = (state_43597[(7)]);var inst_43498 = cljs.core.chunk_first(inst_43494);var inst_43499 = cljs.core.chunk_rest(inst_43494);var inst_43500 = cljs.core.count(inst_43498);var inst_43474 = inst_43499;var inst_43475 = inst_43498;var inst_43476 = inst_43500;var inst_43477 = (0);var state_43597__$1 = (function (){var statearr_43647 = state_43597;(statearr_43647[(12)] = inst_43477);
(statearr_43647[(13)] = inst_43476);
(statearr_43647[(14)] = inst_43475);
(statearr_43647[(16)] = inst_43474);
return statearr_43647;
})();var statearr_43648_43717 = state_43597__$1;(statearr_43648_43717[(2)] = null);
(statearr_43648_43717[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (11)))
{var inst_43494 = (state_43597[(7)]);var inst_43474 = (state_43597[(16)]);var inst_43494__$1 = cljs.core.seq(inst_43474);var state_43597__$1 = (function (){var statearr_43649 = state_43597;(statearr_43649[(7)] = inst_43494__$1);
return statearr_43649;
})();if(inst_43494__$1)
{var statearr_43650_43718 = state_43597__$1;(statearr_43650_43718[(1)] = (16));
} else
{var statearr_43651_43719 = state_43597__$1;(statearr_43651_43719[(1)] = (17));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (9)))
{var inst_43522 = (state_43597[(2)]);var state_43597__$1 = state_43597;var statearr_43652_43720 = state_43597__$1;(statearr_43652_43720[(2)] = inst_43522);
(statearr_43652_43720[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (5)))
{var inst_43472 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_43473 = cljs.core.seq(inst_43472);var inst_43474 = inst_43473;var inst_43475 = null;var inst_43476 = (0);var inst_43477 = (0);var state_43597__$1 = (function (){var statearr_43653 = state_43597;(statearr_43653[(12)] = inst_43477);
(statearr_43653[(13)] = inst_43476);
(statearr_43653[(14)] = inst_43475);
(statearr_43653[(16)] = inst_43474);
return statearr_43653;
})();var statearr_43654_43721 = state_43597__$1;(statearr_43654_43721[(2)] = null);
(statearr_43654_43721[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (14)))
{var state_43597__$1 = state_43597;var statearr_43655_43722 = state_43597__$1;(statearr_43655_43722[(2)] = null);
(statearr_43655_43722[(1)] = (15));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (45)))
{var inst_43587 = (state_43597[(2)]);var state_43597__$1 = state_43597;var statearr_43656_43723 = state_43597__$1;(statearr_43656_43723[(2)] = inst_43587);
(statearr_43656_43723[(1)] = (44));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (26)))
{var inst_43525 = (state_43597[(30)]);var inst_43583 = (state_43597[(2)]);var inst_43584 = cljs.core.seq(inst_43525);var state_43597__$1 = (function (){var statearr_43657 = state_43597;(statearr_43657[(32)] = inst_43583);
return statearr_43657;
})();if(inst_43584)
{var statearr_43658_43724 = state_43597__$1;(statearr_43658_43724[(1)] = (42));
} else
{var statearr_43659_43725 = state_43597__$1;(statearr_43659_43725[(1)] = (43));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (16)))
{var inst_43494 = (state_43597[(7)]);var inst_43496 = cljs.core.chunked_seq_QMARK_(inst_43494);var state_43597__$1 = state_43597;if(inst_43496)
{var statearr_43663_43726 = state_43597__$1;(statearr_43663_43726[(1)] = (19));
} else
{var statearr_43664_43727 = state_43597__$1;(statearr_43664_43727[(1)] = (20));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (38)))
{var inst_43576 = (state_43597[(2)]);var state_43597__$1 = state_43597;var statearr_43665_43728 = state_43597__$1;(statearr_43665_43728[(2)] = inst_43576);
(statearr_43665_43728[(1)] = (35));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (30)))
{var inst_43536 = (state_43597[(9)]);var inst_43534 = (state_43597[(10)]);var inst_43535 = (state_43597[(19)]);var inst_43533 = (state_43597[(20)]);var inst_43550 = (state_43597[(2)]);var inst_43551 = (inst_43536 + (1));var tmp43660 = inst_43534;var tmp43661 = inst_43535;var tmp43662 = inst_43533;var inst_43533__$1 = tmp43662;var inst_43534__$1 = tmp43660;var inst_43535__$1 = tmp43661;var inst_43536__$1 = inst_43551;var state_43597__$1 = (function (){var statearr_43666 = state_43597;(statearr_43666[(33)] = inst_43550);
(statearr_43666[(9)] = inst_43536__$1);
(statearr_43666[(10)] = inst_43534__$1);
(statearr_43666[(19)] = inst_43535__$1);
(statearr_43666[(20)] = inst_43533__$1);
return statearr_43666;
})();var statearr_43667_43729 = state_43597__$1;(statearr_43667_43729[(2)] = null);
(statearr_43667_43729[(1)] = (25));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (10)))
{var inst_43477 = (state_43597[(12)]);var inst_43475 = (state_43597[(14)]);var inst_43483 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43475,inst_43477);var inst_43484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43483,(0),null);var inst_43485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43483,(1),null);var state_43597__$1 = (function (){var statearr_43668 = state_43597;(statearr_43668[(28)] = inst_43484);
return statearr_43668;
})();if(cljs.core.truth_(inst_43485))
{var statearr_43669_43730 = state_43597__$1;(statearr_43669_43730[(1)] = (13));
} else
{var statearr_43670_43731 = state_43597__$1;(statearr_43670_43731[(1)] = (14));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (18)))
{var inst_43518 = (state_43597[(2)]);var state_43597__$1 = state_43597;var statearr_43671_43732 = state_43597__$1;(statearr_43671_43732[(2)] = inst_43518);
(statearr_43671_43732[(1)] = (12));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (42)))
{var state_43597__$1 = state_43597;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43597__$1,(45),dchan);
} else
{if((state_val_43598 === (37)))
{var inst_43554 = (state_43597[(17)]);var inst_43563 = cljs.core.first(inst_43554);var state_43597__$1 = (function (){var statearr_43672 = state_43597;(statearr_43672[(25)] = inst_43563);
return statearr_43672;
})();var statearr_43673_43733 = state_43597__$1;(statearr_43673_43733[(2)] = null);
(statearr_43673_43733[(1)] = (41));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43598 === (8)))
{var inst_43477 = (state_43597[(12)]);var inst_43476 = (state_43597[(13)]);var inst_43479 = (inst_43477 < inst_43476);var inst_43480 = inst_43479;var state_43597__$1 = state_43597;if(cljs.core.truth_(inst_43480))
{var statearr_43674_43734 = state_43597__$1;(statearr_43674_43734[(1)] = (10));
} else
{var statearr_43675_43735 = state_43597__$1;(statearr_43675_43735[(1)] = (11));
}
return cljs.core.constant$keyword$872;
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
});})(c__5708__auto___43683,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___43683,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43679[(0)] = state_machine__5694__auto__);
(statearr_43679[(1)] = (1));
return statearr_43679;
});
var state_machine__5694__auto____1 = (function (state_43597){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43597);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43680){if((e43680 instanceof Object))
{var ex__5697__auto__ = e43680;var statearr_43681_43736 = state_43597;(statearr_43681_43736[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43597);
return cljs.core.constant$keyword$872;
} else
{throw e43680;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__43737 = state_43597;
state_43597 = G__43737;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43597){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43683,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_43682 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43683);
return statearr_43682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43683,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj43739 = {};return obj43739;
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
cljs.core.async.mix = (function mix(out){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$879,null,cljs.core.constant$keyword$880,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$881);var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$880) : cljs.core.atom.call(null,cljs.core.constant$keyword$880));var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));var solos = pick(cljs.core.constant$keyword$881,chs);var pauses = pick(cljs.core.constant$keyword$879,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$882,solos,cljs.core.constant$keyword$883,pick(cljs.core.constant$keyword$880,chs),cljs.core.constant$keyword$884,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$879)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t43849 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43849 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43850){
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
this.meta43850 = meta43850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43849.cljs$lang$type = true;
cljs.core.async.t43849.cljs$lang$ctorStr = "cljs.core.async/t43849";
cljs.core.async.t43849.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t43849");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43849.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t43849.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43849.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43849.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43849.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43849.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43849.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43851){var self__ = this;
var _43851__$1 = this;return self__.meta43850;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43851,meta43850__$1){var self__ = this;
var _43851__$1 = this;return (new cljs.core.async.t43849(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43850__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t43849 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t43849(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43850){return (new cljs.core.async.t43849(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43850));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t43849(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___43958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43916){var state_val_43917 = (state_43916[(1)]);if((state_val_43917 === (7)))
{var inst_43865 = (state_43916[(7)]);var inst_43870 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43865);var state_43916__$1 = state_43916;var statearr_43918_43959 = state_43916__$1;(statearr_43918_43959[(2)] = inst_43870);
(statearr_43918_43959[(1)] = (9));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (20)))
{var inst_43880 = (state_43916[(8)]);var state_43916__$1 = state_43916;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43916__$1,(23),out,inst_43880);
} else
{if((state_val_43917 === (1)))
{var inst_43855 = (state_43916[(9)]);var inst_43855__$1 = calc_state();var inst_43856 = cljs.core.seq_QMARK_(inst_43855__$1);var state_43916__$1 = (function (){var statearr_43919 = state_43916;(statearr_43919[(9)] = inst_43855__$1);
return statearr_43919;
})();if(inst_43856)
{var statearr_43920_43960 = state_43916__$1;(statearr_43920_43960[(1)] = (2));
} else
{var statearr_43921_43961 = state_43916__$1;(statearr_43921_43961[(1)] = (3));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (4)))
{var inst_43855 = (state_43916[(9)]);var inst_43861 = (state_43916[(2)]);var inst_43862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43861,cljs.core.constant$keyword$884);var inst_43863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43861,cljs.core.constant$keyword$883);var inst_43864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43861,cljs.core.constant$keyword$882);var inst_43865 = inst_43855;var state_43916__$1 = (function (){var statearr_43922 = state_43916;(statearr_43922[(10)] = inst_43862);
(statearr_43922[(7)] = inst_43865);
(statearr_43922[(11)] = inst_43864);
(statearr_43922[(12)] = inst_43863);
return statearr_43922;
})();var statearr_43923_43962 = state_43916__$1;(statearr_43923_43962[(2)] = null);
(statearr_43923_43962[(1)] = (5));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (15)))
{var state_43916__$1 = state_43916;var statearr_43924_43963 = state_43916__$1;(statearr_43924_43963[(2)] = null);
(statearr_43924_43963[(1)] = (16));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (21)))
{var state_43916__$1 = state_43916;var statearr_43925_43964 = state_43916__$1;(statearr_43925_43964[(2)] = null);
(statearr_43925_43964[(1)] = (22));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (13)))
{var inst_43912 = (state_43916[(2)]);var state_43916__$1 = state_43916;var statearr_43926_43965 = state_43916__$1;(statearr_43926_43965[(2)] = inst_43912);
(statearr_43926_43965[(1)] = (6));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (22)))
{var inst_43873 = (state_43916[(13)]);var inst_43909 = (state_43916[(2)]);var inst_43865 = inst_43873;var state_43916__$1 = (function (){var statearr_43927 = state_43916;(statearr_43927[(7)] = inst_43865);
(statearr_43927[(14)] = inst_43909);
return statearr_43927;
})();var statearr_43928_43966 = state_43916__$1;(statearr_43928_43966[(2)] = null);
(statearr_43928_43966[(1)] = (5));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (6)))
{var inst_43914 = (state_43916[(2)]);var state_43916__$1 = state_43916;return cljs.core.async.impl.ioc_helpers.return_chan(state_43916__$1,inst_43914);
} else
{if((state_val_43917 === (17)))
{var inst_43895 = (state_43916[(15)]);var state_43916__$1 = state_43916;var statearr_43929_43967 = state_43916__$1;(statearr_43929_43967[(2)] = inst_43895);
(statearr_43929_43967[(1)] = (19));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (3)))
{var inst_43855 = (state_43916[(9)]);var state_43916__$1 = state_43916;var statearr_43930_43968 = state_43916__$1;(statearr_43930_43968[(2)] = inst_43855);
(statearr_43930_43968[(1)] = (4));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (12)))
{var inst_43895 = (state_43916[(15)]);var inst_43881 = (state_43916[(16)]);var inst_43876 = (state_43916[(17)]);var inst_43895__$1 = (inst_43876.cljs$core$IFn$_invoke$arity$1 ? inst_43876.cljs$core$IFn$_invoke$arity$1(inst_43881) : inst_43876.call(null,inst_43881));var state_43916__$1 = (function (){var statearr_43931 = state_43916;(statearr_43931[(15)] = inst_43895__$1);
return statearr_43931;
})();if(cljs.core.truth_(inst_43895__$1))
{var statearr_43932_43969 = state_43916__$1;(statearr_43932_43969[(1)] = (17));
} else
{var statearr_43933_43970 = state_43916__$1;(statearr_43933_43970[(1)] = (18));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (2)))
{var inst_43855 = (state_43916[(9)]);var inst_43858 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43855);var state_43916__$1 = state_43916;var statearr_43934_43971 = state_43916__$1;(statearr_43934_43971[(2)] = inst_43858);
(statearr_43934_43971[(1)] = (4));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (23)))
{var inst_43906 = (state_43916[(2)]);var state_43916__$1 = state_43916;var statearr_43935_43972 = state_43916__$1;(statearr_43935_43972[(2)] = inst_43906);
(statearr_43935_43972[(1)] = (22));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (19)))
{var inst_43903 = (state_43916[(2)]);var state_43916__$1 = state_43916;if(cljs.core.truth_(inst_43903))
{var statearr_43936_43973 = state_43916__$1;(statearr_43936_43973[(1)] = (20));
} else
{var statearr_43937_43974 = state_43916__$1;(statearr_43937_43974[(1)] = (21));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (11)))
{var inst_43880 = (state_43916[(8)]);var inst_43886 = (inst_43880 == null);var state_43916__$1 = state_43916;if(cljs.core.truth_(inst_43886))
{var statearr_43938_43975 = state_43916__$1;(statearr_43938_43975[(1)] = (14));
} else
{var statearr_43939_43976 = state_43916__$1;(statearr_43939_43976[(1)] = (15));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (9)))
{var inst_43873 = (state_43916[(13)]);var inst_43873__$1 = (state_43916[(2)]);var inst_43874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43873__$1,cljs.core.constant$keyword$884);var inst_43875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43873__$1,cljs.core.constant$keyword$883);var inst_43876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43873__$1,cljs.core.constant$keyword$882);var state_43916__$1 = (function (){var statearr_43940 = state_43916;(statearr_43940[(13)] = inst_43873__$1);
(statearr_43940[(17)] = inst_43876);
(statearr_43940[(18)] = inst_43875);
return statearr_43940;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_43916__$1,(10),inst_43874);
} else
{if((state_val_43917 === (5)))
{var inst_43865 = (state_43916[(7)]);var inst_43868 = cljs.core.seq_QMARK_(inst_43865);var state_43916__$1 = state_43916;if(inst_43868)
{var statearr_43941_43977 = state_43916__$1;(statearr_43941_43977[(1)] = (7));
} else
{var statearr_43942_43978 = state_43916__$1;(statearr_43942_43978[(1)] = (8));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (14)))
{var inst_43881 = (state_43916[(16)]);var inst_43888 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43881);var state_43916__$1 = state_43916;var statearr_43943_43979 = state_43916__$1;(statearr_43943_43979[(2)] = inst_43888);
(statearr_43943_43979[(1)] = (16));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (16)))
{var inst_43891 = (state_43916[(2)]);var inst_43892 = calc_state();var inst_43865 = inst_43892;var state_43916__$1 = (function (){var statearr_43944 = state_43916;(statearr_43944[(19)] = inst_43891);
(statearr_43944[(7)] = inst_43865);
return statearr_43944;
})();var statearr_43945_43980 = state_43916__$1;(statearr_43945_43980[(2)] = null);
(statearr_43945_43980[(1)] = (5));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (10)))
{var inst_43880 = (state_43916[(8)]);var inst_43881 = (state_43916[(16)]);var inst_43879 = (state_43916[(2)]);var inst_43880__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43879,(0),null);var inst_43881__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43879,(1),null);var inst_43882 = (inst_43880__$1 == null);var inst_43883 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43881__$1,change);var inst_43884 = (inst_43882) || (inst_43883);var state_43916__$1 = (function (){var statearr_43946 = state_43916;(statearr_43946[(8)] = inst_43880__$1);
(statearr_43946[(16)] = inst_43881__$1);
return statearr_43946;
})();if(cljs.core.truth_(inst_43884))
{var statearr_43947_43981 = state_43916__$1;(statearr_43947_43981[(1)] = (11));
} else
{var statearr_43948_43982 = state_43916__$1;(statearr_43948_43982[(1)] = (12));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (18)))
{var inst_43881 = (state_43916[(16)]);var inst_43876 = (state_43916[(17)]);var inst_43875 = (state_43916[(18)]);var inst_43898 = cljs.core.empty_QMARK_(inst_43876);var inst_43899 = (inst_43875.cljs$core$IFn$_invoke$arity$1 ? inst_43875.cljs$core$IFn$_invoke$arity$1(inst_43881) : inst_43875.call(null,inst_43881));var inst_43900 = cljs.core.not(inst_43899);var inst_43901 = (inst_43898) && (inst_43900);var state_43916__$1 = state_43916;var statearr_43949_43983 = state_43916__$1;(statearr_43949_43983[(2)] = inst_43901);
(statearr_43949_43983[(1)] = (19));
return cljs.core.constant$keyword$872;
} else
{if((state_val_43917 === (8)))
{var inst_43865 = (state_43916[(7)]);var state_43916__$1 = state_43916;var statearr_43950_43984 = state_43916__$1;(statearr_43950_43984[(2)] = inst_43865);
(statearr_43950_43984[(1)] = (9));
return cljs.core.constant$keyword$872;
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
});})(c__5708__auto___43958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___43958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43954[(0)] = state_machine__5694__auto__);
(statearr_43954[(1)] = (1));
return statearr_43954;
});
var state_machine__5694__auto____1 = (function (state_43916){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43916);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43955){if((e43955 instanceof Object))
{var ex__5697__auto__ = e43955;var statearr_43956_43985 = state_43916;(statearr_43956_43985[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43916);
return cljs.core.constant$keyword$872;
} else
{throw e43955;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__43986 = state_43916;
state_43916 = G__43986;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43916){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_43957 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43958);
return statearr_43957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj43988 = {};return obj43988;
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
return (function (p1__43989_SHARP_){if(cljs.core.truth_((p1__43989_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43989_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43989_SHARP_.call(null,topic))))
{return p1__43989_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43989_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t44114 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44114 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta44115){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta44115 = meta44115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44114.cljs$lang$type = true;
cljs.core.async.t44114.cljs$lang$ctorStr = "cljs.core.async/t44114";
cljs.core.async.t44114.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t44114");
});})(mults,ensure_mult))
;
cljs.core.async.t44114.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t44114.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t44114.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t44114.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.mults,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY));
});})(mults,ensure_mult))
;
cljs.core.async.t44114.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t44114.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t44114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t44114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44116){var self__ = this;
var _44116__$1 = this;return self__.meta44115;
});})(mults,ensure_mult))
;
cljs.core.async.t44114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44116,meta44115__$1){var self__ = this;
var _44116__$1 = this;return (new cljs.core.async.t44114(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta44115__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t44114 = ((function (mults,ensure_mult){
return (function __GT_t44114(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta44115){return (new cljs.core.async.t44114(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta44115));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t44114(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___44238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___44238,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___44238,mults,ensure_mult,p){
return (function (state_44190){var state_val_44191 = (state_44190[(1)]);if((state_val_44191 === (7)))
{var inst_44186 = (state_44190[(2)]);var state_44190__$1 = state_44190;var statearr_44192_44239 = state_44190__$1;(statearr_44192_44239[(2)] = inst_44186);
(statearr_44192_44239[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (20)))
{var state_44190__$1 = state_44190;var statearr_44193_44240 = state_44190__$1;(statearr_44193_44240[(2)] = null);
(statearr_44193_44240[(1)] = (21));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (1)))
{var state_44190__$1 = state_44190;var statearr_44194_44241 = state_44190__$1;(statearr_44194_44241[(2)] = null);
(statearr_44194_44241[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (24)))
{var inst_44169 = (state_44190[(7)]);var inst_44119 = (state_44190[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_44190,(23),Object,null,(22));var inst_44176 = cljs.core.async.muxch_STAR_(inst_44169);var state_44190__$1 = state_44190;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44190__$1,(25),inst_44176,inst_44119);
} else
{if((state_val_44191 === (4)))
{var inst_44119 = (state_44190[(8)]);var inst_44119__$1 = (state_44190[(2)]);var inst_44120 = (inst_44119__$1 == null);var state_44190__$1 = (function (){var statearr_44195 = state_44190;(statearr_44195[(8)] = inst_44119__$1);
return statearr_44195;
})();if(cljs.core.truth_(inst_44120))
{var statearr_44196_44242 = state_44190__$1;(statearr_44196_44242[(1)] = (5));
} else
{var statearr_44197_44243 = state_44190__$1;(statearr_44197_44243[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (15)))
{var inst_44161 = (state_44190[(2)]);var state_44190__$1 = state_44190;var statearr_44198_44244 = state_44190__$1;(statearr_44198_44244[(2)] = inst_44161);
(statearr_44198_44244[(1)] = (12));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (21)))
{var inst_44183 = (state_44190[(2)]);var state_44190__$1 = (function (){var statearr_44199 = state_44190;(statearr_44199[(9)] = inst_44183);
return statearr_44199;
})();var statearr_44200_44245 = state_44190__$1;(statearr_44200_44245[(2)] = null);
(statearr_44200_44245[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (13)))
{var inst_44143 = (state_44190[(10)]);var inst_44145 = cljs.core.chunked_seq_QMARK_(inst_44143);var state_44190__$1 = state_44190;if(inst_44145)
{var statearr_44201_44246 = state_44190__$1;(statearr_44201_44246[(1)] = (16));
} else
{var statearr_44202_44247 = state_44190__$1;(statearr_44202_44247[(1)] = (17));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (22)))
{var inst_44180 = (state_44190[(2)]);var state_44190__$1 = state_44190;var statearr_44203_44248 = state_44190__$1;(statearr_44203_44248[(2)] = inst_44180);
(statearr_44203_44248[(1)] = (21));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (6)))
{var inst_44169 = (state_44190[(7)]);var inst_44119 = (state_44190[(8)]);var inst_44167 = (state_44190[(11)]);var inst_44167__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44119) : topic_fn.call(null,inst_44119));var inst_44168 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_44169__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44168,inst_44167__$1);var state_44190__$1 = (function (){var statearr_44204 = state_44190;(statearr_44204[(7)] = inst_44169__$1);
(statearr_44204[(11)] = inst_44167__$1);
return statearr_44204;
})();if(cljs.core.truth_(inst_44169__$1))
{var statearr_44205_44249 = state_44190__$1;(statearr_44205_44249[(1)] = (19));
} else
{var statearr_44206_44250 = state_44190__$1;(statearr_44206_44250[(1)] = (20));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (25)))
{var inst_44178 = (state_44190[(2)]);var state_44190__$1 = state_44190;var statearr_44207_44251 = state_44190__$1;(statearr_44207_44251[(2)] = inst_44178);
cljs.core.async.impl.ioc_helpers.process_exception(state_44190__$1);
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (17)))
{var inst_44143 = (state_44190[(10)]);var inst_44152 = cljs.core.first(inst_44143);var inst_44153 = cljs.core.async.muxch_STAR_(inst_44152);var inst_44154 = cljs.core.async.close_BANG_(inst_44153);var inst_44155 = cljs.core.next(inst_44143);var inst_44129 = inst_44155;var inst_44130 = null;var inst_44131 = (0);var inst_44132 = (0);var state_44190__$1 = (function (){var statearr_44208 = state_44190;(statearr_44208[(12)] = inst_44129);
(statearr_44208[(13)] = inst_44131);
(statearr_44208[(14)] = inst_44130);
(statearr_44208[(15)] = inst_44154);
(statearr_44208[(16)] = inst_44132);
return statearr_44208;
})();var statearr_44209_44252 = state_44190__$1;(statearr_44209_44252[(2)] = null);
(statearr_44209_44252[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (3)))
{var inst_44188 = (state_44190[(2)]);var state_44190__$1 = state_44190;return cljs.core.async.impl.ioc_helpers.return_chan(state_44190__$1,inst_44188);
} else
{if((state_val_44191 === (12)))
{var inst_44163 = (state_44190[(2)]);var state_44190__$1 = state_44190;var statearr_44210_44253 = state_44190__$1;(statearr_44210_44253[(2)] = inst_44163);
(statearr_44210_44253[(1)] = (9));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (2)))
{var state_44190__$1 = state_44190;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44190__$1,(4),ch);
} else
{if((state_val_44191 === (23)))
{var inst_44167 = (state_44190[(11)]);var inst_44171 = (state_44190[(2)]);var inst_44172 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44167);var state_44190__$1 = (function (){var statearr_44211 = state_44190;(statearr_44211[(17)] = inst_44171);
return statearr_44211;
})();var statearr_44212_44254 = state_44190__$1;(statearr_44212_44254[(2)] = inst_44172);
cljs.core.async.impl.ioc_helpers.process_exception(state_44190__$1);
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (19)))
{var state_44190__$1 = state_44190;var statearr_44213_44255 = state_44190__$1;(statearr_44213_44255[(2)] = null);
(statearr_44213_44255[(1)] = (24));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (11)))
{var inst_44129 = (state_44190[(12)]);var inst_44143 = (state_44190[(10)]);var inst_44143__$1 = cljs.core.seq(inst_44129);var state_44190__$1 = (function (){var statearr_44214 = state_44190;(statearr_44214[(10)] = inst_44143__$1);
return statearr_44214;
})();if(inst_44143__$1)
{var statearr_44215_44256 = state_44190__$1;(statearr_44215_44256[(1)] = (13));
} else
{var statearr_44216_44257 = state_44190__$1;(statearr_44216_44257[(1)] = (14));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (9)))
{var inst_44165 = (state_44190[(2)]);var state_44190__$1 = state_44190;var statearr_44217_44258 = state_44190__$1;(statearr_44217_44258[(2)] = inst_44165);
(statearr_44217_44258[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (5)))
{var inst_44126 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_44127 = cljs.core.vals(inst_44126);var inst_44128 = cljs.core.seq(inst_44127);var inst_44129 = inst_44128;var inst_44130 = null;var inst_44131 = (0);var inst_44132 = (0);var state_44190__$1 = (function (){var statearr_44218 = state_44190;(statearr_44218[(12)] = inst_44129);
(statearr_44218[(13)] = inst_44131);
(statearr_44218[(14)] = inst_44130);
(statearr_44218[(16)] = inst_44132);
return statearr_44218;
})();var statearr_44219_44259 = state_44190__$1;(statearr_44219_44259[(2)] = null);
(statearr_44219_44259[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (14)))
{var state_44190__$1 = state_44190;var statearr_44223_44260 = state_44190__$1;(statearr_44223_44260[(2)] = null);
(statearr_44223_44260[(1)] = (15));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (16)))
{var inst_44143 = (state_44190[(10)]);var inst_44147 = cljs.core.chunk_first(inst_44143);var inst_44148 = cljs.core.chunk_rest(inst_44143);var inst_44149 = cljs.core.count(inst_44147);var inst_44129 = inst_44148;var inst_44130 = inst_44147;var inst_44131 = inst_44149;var inst_44132 = (0);var state_44190__$1 = (function (){var statearr_44224 = state_44190;(statearr_44224[(12)] = inst_44129);
(statearr_44224[(13)] = inst_44131);
(statearr_44224[(14)] = inst_44130);
(statearr_44224[(16)] = inst_44132);
return statearr_44224;
})();var statearr_44225_44261 = state_44190__$1;(statearr_44225_44261[(2)] = null);
(statearr_44225_44261[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (10)))
{var inst_44129 = (state_44190[(12)]);var inst_44131 = (state_44190[(13)]);var inst_44130 = (state_44190[(14)]);var inst_44132 = (state_44190[(16)]);var inst_44137 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44130,inst_44132);var inst_44138 = cljs.core.async.muxch_STAR_(inst_44137);var inst_44139 = cljs.core.async.close_BANG_(inst_44138);var inst_44140 = (inst_44132 + (1));var tmp44220 = inst_44129;var tmp44221 = inst_44131;var tmp44222 = inst_44130;var inst_44129__$1 = tmp44220;var inst_44130__$1 = tmp44222;var inst_44131__$1 = tmp44221;var inst_44132__$1 = inst_44140;var state_44190__$1 = (function (){var statearr_44226 = state_44190;(statearr_44226[(18)] = inst_44139);
(statearr_44226[(12)] = inst_44129__$1);
(statearr_44226[(13)] = inst_44131__$1);
(statearr_44226[(14)] = inst_44130__$1);
(statearr_44226[(16)] = inst_44132__$1);
return statearr_44226;
})();var statearr_44227_44262 = state_44190__$1;(statearr_44227_44262[(2)] = null);
(statearr_44227_44262[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (18)))
{var inst_44158 = (state_44190[(2)]);var state_44190__$1 = state_44190;var statearr_44228_44263 = state_44190__$1;(statearr_44228_44263[(2)] = inst_44158);
(statearr_44228_44263[(1)] = (15));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44191 === (8)))
{var inst_44131 = (state_44190[(13)]);var inst_44132 = (state_44190[(16)]);var inst_44134 = (inst_44132 < inst_44131);var inst_44135 = inst_44134;var state_44190__$1 = state_44190;if(cljs.core.truth_(inst_44135))
{var statearr_44229_44264 = state_44190__$1;(statearr_44229_44264[(1)] = (10));
} else
{var statearr_44230_44265 = state_44190__$1;(statearr_44230_44265[(1)] = (11));
}
return cljs.core.constant$keyword$872;
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
});})(c__5708__auto___44238,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___44238,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44234[(0)] = state_machine__5694__auto__);
(statearr_44234[(1)] = (1));
return statearr_44234;
});
var state_machine__5694__auto____1 = (function (state_44190){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44190);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44235){if((e44235 instanceof Object))
{var ex__5697__auto__ = e44235;var statearr_44236_44266 = state_44190;(statearr_44236_44266[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44190);
return cljs.core.constant$keyword$872;
} else
{throw e44235;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__44267 = state_44190;
state_44190 = G__44267;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44190){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___44238,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_44237 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___44238);
return statearr_44237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___44238,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5708__auto___44404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___44404,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___44404,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44374){var state_val_44375 = (state_44374[(1)]);if((state_val_44375 === (7)))
{var state_44374__$1 = state_44374;var statearr_44376_44405 = state_44374__$1;(statearr_44376_44405[(2)] = null);
(statearr_44376_44405[(1)] = (8));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (1)))
{var state_44374__$1 = state_44374;var statearr_44377_44406 = state_44374__$1;(statearr_44377_44406[(2)] = null);
(statearr_44377_44406[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (4)))
{var inst_44338 = (state_44374[(7)]);var inst_44340 = (inst_44338 < cnt);var state_44374__$1 = state_44374;if(cljs.core.truth_(inst_44340))
{var statearr_44378_44407 = state_44374__$1;(statearr_44378_44407[(1)] = (6));
} else
{var statearr_44379_44408 = state_44374__$1;(statearr_44379_44408[(1)] = (7));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (15)))
{var inst_44370 = (state_44374[(2)]);var state_44374__$1 = state_44374;var statearr_44380_44409 = state_44374__$1;(statearr_44380_44409[(2)] = inst_44370);
(statearr_44380_44409[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (13)))
{var inst_44363 = cljs.core.async.close_BANG_(out);var state_44374__$1 = state_44374;var statearr_44381_44410 = state_44374__$1;(statearr_44381_44410[(2)] = inst_44363);
(statearr_44381_44410[(1)] = (15));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (6)))
{var state_44374__$1 = state_44374;var statearr_44382_44411 = state_44374__$1;(statearr_44382_44411[(2)] = null);
(statearr_44382_44411[(1)] = (11));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (3)))
{var inst_44372 = (state_44374[(2)]);var state_44374__$1 = state_44374;return cljs.core.async.impl.ioc_helpers.return_chan(state_44374__$1,inst_44372);
} else
{if((state_val_44375 === (12)))
{var inst_44360 = (state_44374[(8)]);var inst_44360__$1 = (state_44374[(2)]);var inst_44361 = cljs.core.some(cljs.core.nil_QMARK_,inst_44360__$1);var state_44374__$1 = (function (){var statearr_44383 = state_44374;(statearr_44383[(8)] = inst_44360__$1);
return statearr_44383;
})();if(cljs.core.truth_(inst_44361))
{var statearr_44384_44412 = state_44374__$1;(statearr_44384_44412[(1)] = (13));
} else
{var statearr_44385_44413 = state_44374__$1;(statearr_44385_44413[(1)] = (14));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (2)))
{var inst_44337 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));var inst_44338 = (0);var state_44374__$1 = (function (){var statearr_44386 = state_44374;(statearr_44386[(7)] = inst_44338);
(statearr_44386[(9)] = inst_44337);
return statearr_44386;
})();var statearr_44387_44414 = state_44374__$1;(statearr_44387_44414[(2)] = null);
(statearr_44387_44414[(1)] = (4));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (11)))
{var inst_44338 = (state_44374[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_44374,(10),Object,null,(9));var inst_44347 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44338) : chs__$1.call(null,inst_44338));var inst_44348 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44338) : done.call(null,inst_44338));var inst_44349 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44347,inst_44348);var state_44374__$1 = state_44374;var statearr_44388_44415 = state_44374__$1;(statearr_44388_44415[(2)] = inst_44349);
cljs.core.async.impl.ioc_helpers.process_exception(state_44374__$1);
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (9)))
{var inst_44338 = (state_44374[(7)]);var inst_44351 = (state_44374[(2)]);var inst_44352 = (inst_44338 + (1));var inst_44338__$1 = inst_44352;var state_44374__$1 = (function (){var statearr_44389 = state_44374;(statearr_44389[(10)] = inst_44351);
(statearr_44389[(7)] = inst_44338__$1);
return statearr_44389;
})();var statearr_44390_44416 = state_44374__$1;(statearr_44390_44416[(2)] = null);
(statearr_44390_44416[(1)] = (4));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (5)))
{var inst_44358 = (state_44374[(2)]);var state_44374__$1 = (function (){var statearr_44391 = state_44374;(statearr_44391[(11)] = inst_44358);
return statearr_44391;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44374__$1,(12),dchan);
} else
{if((state_val_44375 === (14)))
{var inst_44360 = (state_44374[(8)]);var inst_44365 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44360);var state_44374__$1 = state_44374;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44374__$1,(16),out,inst_44365);
} else
{if((state_val_44375 === (16)))
{var inst_44367 = (state_44374[(2)]);var state_44374__$1 = (function (){var statearr_44392 = state_44374;(statearr_44392[(12)] = inst_44367);
return statearr_44392;
})();var statearr_44393_44417 = state_44374__$1;(statearr_44393_44417[(2)] = null);
(statearr_44393_44417[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (10)))
{var inst_44342 = (state_44374[(2)]);var inst_44343 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_44374__$1 = (function (){var statearr_44394 = state_44374;(statearr_44394[(13)] = inst_44342);
return statearr_44394;
})();var statearr_44395_44418 = state_44374__$1;(statearr_44395_44418[(2)] = inst_44343);
cljs.core.async.impl.ioc_helpers.process_exception(state_44374__$1);
return cljs.core.constant$keyword$872;
} else
{if((state_val_44375 === (8)))
{var inst_44356 = (state_44374[(2)]);var state_44374__$1 = state_44374;var statearr_44396_44419 = state_44374__$1;(statearr_44396_44419[(2)] = inst_44356);
(statearr_44396_44419[(1)] = (5));
return cljs.core.constant$keyword$872;
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
});})(c__5708__auto___44404,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___44404,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44400[(0)] = state_machine__5694__auto__);
(statearr_44400[(1)] = (1));
return statearr_44400;
});
var state_machine__5694__auto____1 = (function (state_44374){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44374);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44401){if((e44401 instanceof Object))
{var ex__5697__auto__ = e44401;var statearr_44402_44420 = state_44374;(statearr_44402_44420[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44374);
return cljs.core.constant$keyword$872;
} else
{throw e44401;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__44421 = state_44374;
state_44374 = G__44421;
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
;})(switch__5693__auto__,c__5708__auto___44404,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_44403 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___44404);
return statearr_44403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___44404,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___44529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___44529,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___44529,out){
return (function (state_44505){var state_val_44506 = (state_44505[(1)]);if((state_val_44506 === (7)))
{var inst_44484 = (state_44505[(7)]);var inst_44485 = (state_44505[(8)]);var inst_44484__$1 = (state_44505[(2)]);var inst_44485__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44484__$1,(0),null);var inst_44486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44484__$1,(1),null);var inst_44487 = (inst_44485__$1 == null);var state_44505__$1 = (function (){var statearr_44507 = state_44505;(statearr_44507[(9)] = inst_44486);
(statearr_44507[(7)] = inst_44484__$1);
(statearr_44507[(8)] = inst_44485__$1);
return statearr_44507;
})();if(cljs.core.truth_(inst_44487))
{var statearr_44508_44530 = state_44505__$1;(statearr_44508_44530[(1)] = (8));
} else
{var statearr_44509_44531 = state_44505__$1;(statearr_44509_44531[(1)] = (9));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44506 === (1)))
{var inst_44476 = cljs.core.vec(chs);var inst_44477 = inst_44476;var state_44505__$1 = (function (){var statearr_44510 = state_44505;(statearr_44510[(10)] = inst_44477);
return statearr_44510;
})();var statearr_44511_44532 = state_44505__$1;(statearr_44511_44532[(2)] = null);
(statearr_44511_44532[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44506 === (4)))
{var inst_44477 = (state_44505[(10)]);var state_44505__$1 = state_44505;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_44505__$1,(7),inst_44477);
} else
{if((state_val_44506 === (6)))
{var inst_44501 = (state_44505[(2)]);var state_44505__$1 = state_44505;var statearr_44512_44533 = state_44505__$1;(statearr_44512_44533[(2)] = inst_44501);
(statearr_44512_44533[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44506 === (3)))
{var inst_44503 = (state_44505[(2)]);var state_44505__$1 = state_44505;return cljs.core.async.impl.ioc_helpers.return_chan(state_44505__$1,inst_44503);
} else
{if((state_val_44506 === (2)))
{var inst_44477 = (state_44505[(10)]);var inst_44479 = cljs.core.count(inst_44477);var inst_44480 = (inst_44479 > (0));var state_44505__$1 = state_44505;if(cljs.core.truth_(inst_44480))
{var statearr_44514_44534 = state_44505__$1;(statearr_44514_44534[(1)] = (4));
} else
{var statearr_44515_44535 = state_44505__$1;(statearr_44515_44535[(1)] = (5));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44506 === (11)))
{var inst_44477 = (state_44505[(10)]);var inst_44494 = (state_44505[(2)]);var tmp44513 = inst_44477;var inst_44477__$1 = tmp44513;var state_44505__$1 = (function (){var statearr_44516 = state_44505;(statearr_44516[(11)] = inst_44494);
(statearr_44516[(10)] = inst_44477__$1);
return statearr_44516;
})();var statearr_44517_44536 = state_44505__$1;(statearr_44517_44536[(2)] = null);
(statearr_44517_44536[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44506 === (9)))
{var inst_44485 = (state_44505[(8)]);var state_44505__$1 = state_44505;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44505__$1,(11),out,inst_44485);
} else
{if((state_val_44506 === (5)))
{var inst_44499 = cljs.core.async.close_BANG_(out);var state_44505__$1 = state_44505;var statearr_44518_44537 = state_44505__$1;(statearr_44518_44537[(2)] = inst_44499);
(statearr_44518_44537[(1)] = (6));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44506 === (10)))
{var inst_44497 = (state_44505[(2)]);var state_44505__$1 = state_44505;var statearr_44519_44538 = state_44505__$1;(statearr_44519_44538[(2)] = inst_44497);
(statearr_44519_44538[(1)] = (6));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44506 === (8)))
{var inst_44486 = (state_44505[(9)]);var inst_44484 = (state_44505[(7)]);var inst_44485 = (state_44505[(8)]);var inst_44477 = (state_44505[(10)]);var inst_44489 = (function (){var c = inst_44486;var v = inst_44485;var vec__44482 = inst_44484;var cs = inst_44477;return ((function (c,v,vec__44482,cs,inst_44486,inst_44484,inst_44485,inst_44477,state_val_44506,c__5708__auto___44529,out){
return (function (p1__44422_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44422_SHARP_);
});
;})(c,v,vec__44482,cs,inst_44486,inst_44484,inst_44485,inst_44477,state_val_44506,c__5708__auto___44529,out))
})();var inst_44490 = cljs.core.filterv(inst_44489,inst_44477);var inst_44477__$1 = inst_44490;var state_44505__$1 = (function (){var statearr_44520 = state_44505;(statearr_44520[(10)] = inst_44477__$1);
return statearr_44520;
})();var statearr_44521_44539 = state_44505__$1;(statearr_44521_44539[(2)] = null);
(statearr_44521_44539[(1)] = (2));
return cljs.core.constant$keyword$872;
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
});})(c__5708__auto___44529,out))
;return ((function (switch__5693__auto__,c__5708__auto___44529,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44525 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44525[(0)] = state_machine__5694__auto__);
(statearr_44525[(1)] = (1));
return statearr_44525;
});
var state_machine__5694__auto____1 = (function (state_44505){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44505);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44526){if((e44526 instanceof Object))
{var ex__5697__auto__ = e44526;var statearr_44527_44540 = state_44505;(statearr_44527_44540[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44505);
return cljs.core.constant$keyword$872;
} else
{throw e44526;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__44541 = state_44505;
state_44505 = G__44541;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44505){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___44529,out))
})();var state__5710__auto__ = (function (){var statearr_44528 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___44529);
return statearr_44528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___44529,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___44634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___44634,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___44634,out){
return (function (state_44611){var state_val_44612 = (state_44611[(1)]);if((state_val_44612 === (7)))
{var inst_44593 = (state_44611[(7)]);var inst_44593__$1 = (state_44611[(2)]);var inst_44594 = (inst_44593__$1 == null);var inst_44595 = cljs.core.not(inst_44594);var state_44611__$1 = (function (){var statearr_44613 = state_44611;(statearr_44613[(7)] = inst_44593__$1);
return statearr_44613;
})();if(inst_44595)
{var statearr_44614_44635 = state_44611__$1;(statearr_44614_44635[(1)] = (8));
} else
{var statearr_44615_44636 = state_44611__$1;(statearr_44615_44636[(1)] = (9));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44612 === (1)))
{var inst_44588 = (0);var state_44611__$1 = (function (){var statearr_44616 = state_44611;(statearr_44616[(8)] = inst_44588);
return statearr_44616;
})();var statearr_44617_44637 = state_44611__$1;(statearr_44617_44637[(2)] = null);
(statearr_44617_44637[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44612 === (4)))
{var state_44611__$1 = state_44611;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44611__$1,(7),ch);
} else
{if((state_val_44612 === (6)))
{var inst_44606 = (state_44611[(2)]);var state_44611__$1 = state_44611;var statearr_44618_44638 = state_44611__$1;(statearr_44618_44638[(2)] = inst_44606);
(statearr_44618_44638[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44612 === (3)))
{var inst_44608 = (state_44611[(2)]);var inst_44609 = cljs.core.async.close_BANG_(out);var state_44611__$1 = (function (){var statearr_44619 = state_44611;(statearr_44619[(9)] = inst_44608);
return statearr_44619;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_44611__$1,inst_44609);
} else
{if((state_val_44612 === (2)))
{var inst_44588 = (state_44611[(8)]);var inst_44590 = (inst_44588 < n);var state_44611__$1 = state_44611;if(cljs.core.truth_(inst_44590))
{var statearr_44620_44639 = state_44611__$1;(statearr_44620_44639[(1)] = (4));
} else
{var statearr_44621_44640 = state_44611__$1;(statearr_44621_44640[(1)] = (5));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44612 === (11)))
{var inst_44588 = (state_44611[(8)]);var inst_44598 = (state_44611[(2)]);var inst_44599 = (inst_44588 + (1));var inst_44588__$1 = inst_44599;var state_44611__$1 = (function (){var statearr_44622 = state_44611;(statearr_44622[(10)] = inst_44598);
(statearr_44622[(8)] = inst_44588__$1);
return statearr_44622;
})();var statearr_44623_44641 = state_44611__$1;(statearr_44623_44641[(2)] = null);
(statearr_44623_44641[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44612 === (9)))
{var state_44611__$1 = state_44611;var statearr_44624_44642 = state_44611__$1;(statearr_44624_44642[(2)] = null);
(statearr_44624_44642[(1)] = (10));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44612 === (5)))
{var state_44611__$1 = state_44611;var statearr_44625_44643 = state_44611__$1;(statearr_44625_44643[(2)] = null);
(statearr_44625_44643[(1)] = (6));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44612 === (10)))
{var inst_44603 = (state_44611[(2)]);var state_44611__$1 = state_44611;var statearr_44626_44644 = state_44611__$1;(statearr_44626_44644[(2)] = inst_44603);
(statearr_44626_44644[(1)] = (6));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44612 === (8)))
{var inst_44593 = (state_44611[(7)]);var state_44611__$1 = state_44611;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44611__$1,(11),out,inst_44593);
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
});})(c__5708__auto___44634,out))
;return ((function (switch__5693__auto__,c__5708__auto___44634,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44630 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_44630[(0)] = state_machine__5694__auto__);
(statearr_44630[(1)] = (1));
return statearr_44630;
});
var state_machine__5694__auto____1 = (function (state_44611){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44611);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44631){if((e44631 instanceof Object))
{var ex__5697__auto__ = e44631;var statearr_44632_44645 = state_44611;(statearr_44632_44645[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44611);
return cljs.core.constant$keyword$872;
} else
{throw e44631;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__44646 = state_44611;
state_44611 = G__44646;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44611){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___44634,out))
})();var state__5710__auto__ = (function (){var statearr_44633 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___44634);
return statearr_44633;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___44634,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___44743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___44743,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___44743,out){
return (function (state_44718){var state_val_44719 = (state_44718[(1)]);if((state_val_44719 === (7)))
{var inst_44713 = (state_44718[(2)]);var state_44718__$1 = state_44718;var statearr_44720_44744 = state_44718__$1;(statearr_44720_44744[(2)] = inst_44713);
(statearr_44720_44744[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44719 === (1)))
{var inst_44695 = null;var state_44718__$1 = (function (){var statearr_44721 = state_44718;(statearr_44721[(7)] = inst_44695);
return statearr_44721;
})();var statearr_44722_44745 = state_44718__$1;(statearr_44722_44745[(2)] = null);
(statearr_44722_44745[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44719 === (4)))
{var inst_44698 = (state_44718[(8)]);var inst_44698__$1 = (state_44718[(2)]);var inst_44699 = (inst_44698__$1 == null);var inst_44700 = cljs.core.not(inst_44699);var state_44718__$1 = (function (){var statearr_44723 = state_44718;(statearr_44723[(8)] = inst_44698__$1);
return statearr_44723;
})();if(inst_44700)
{var statearr_44724_44746 = state_44718__$1;(statearr_44724_44746[(1)] = (5));
} else
{var statearr_44725_44747 = state_44718__$1;(statearr_44725_44747[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44719 === (6)))
{var state_44718__$1 = state_44718;var statearr_44726_44748 = state_44718__$1;(statearr_44726_44748[(2)] = null);
(statearr_44726_44748[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44719 === (3)))
{var inst_44715 = (state_44718[(2)]);var inst_44716 = cljs.core.async.close_BANG_(out);var state_44718__$1 = (function (){var statearr_44727 = state_44718;(statearr_44727[(9)] = inst_44715);
return statearr_44727;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_44718__$1,inst_44716);
} else
{if((state_val_44719 === (2)))
{var state_44718__$1 = state_44718;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44718__$1,(4),ch);
} else
{if((state_val_44719 === (11)))
{var inst_44698 = (state_44718[(8)]);var inst_44707 = (state_44718[(2)]);var inst_44695 = inst_44698;var state_44718__$1 = (function (){var statearr_44728 = state_44718;(statearr_44728[(7)] = inst_44695);
(statearr_44728[(10)] = inst_44707);
return statearr_44728;
})();var statearr_44729_44749 = state_44718__$1;(statearr_44729_44749[(2)] = null);
(statearr_44729_44749[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44719 === (9)))
{var inst_44698 = (state_44718[(8)]);var state_44718__$1 = state_44718;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44718__$1,(11),out,inst_44698);
} else
{if((state_val_44719 === (5)))
{var inst_44695 = (state_44718[(7)]);var inst_44698 = (state_44718[(8)]);var inst_44702 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44698,inst_44695);var state_44718__$1 = state_44718;if(inst_44702)
{var statearr_44731_44750 = state_44718__$1;(statearr_44731_44750[(1)] = (8));
} else
{var statearr_44732_44751 = state_44718__$1;(statearr_44732_44751[(1)] = (9));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44719 === (10)))
{var inst_44710 = (state_44718[(2)]);var state_44718__$1 = state_44718;var statearr_44733_44752 = state_44718__$1;(statearr_44733_44752[(2)] = inst_44710);
(statearr_44733_44752[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44719 === (8)))
{var inst_44695 = (state_44718[(7)]);var tmp44730 = inst_44695;var inst_44695__$1 = tmp44730;var state_44718__$1 = (function (){var statearr_44734 = state_44718;(statearr_44734[(7)] = inst_44695__$1);
return statearr_44734;
})();var statearr_44735_44753 = state_44718__$1;(statearr_44735_44753[(2)] = null);
(statearr_44735_44753[(1)] = (2));
return cljs.core.constant$keyword$872;
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
});})(c__5708__auto___44743,out))
;return ((function (switch__5693__auto__,c__5708__auto___44743,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44739 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_44739[(0)] = state_machine__5694__auto__);
(statearr_44739[(1)] = (1));
return statearr_44739;
});
var state_machine__5694__auto____1 = (function (state_44718){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44718);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44740){if((e44740 instanceof Object))
{var ex__5697__auto__ = e44740;var statearr_44741_44754 = state_44718;(statearr_44741_44754[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44718);
return cljs.core.constant$keyword$872;
} else
{throw e44740;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__44755 = state_44718;
state_44718 = G__44755;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44718){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___44743,out))
})();var state__5710__auto__ = (function (){var statearr_44742 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___44743);
return statearr_44742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___44743,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___44890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___44890,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___44890,out){
return (function (state_44860){var state_val_44861 = (state_44860[(1)]);if((state_val_44861 === (7)))
{var inst_44856 = (state_44860[(2)]);var state_44860__$1 = state_44860;var statearr_44862_44891 = state_44860__$1;(statearr_44862_44891[(2)] = inst_44856);
(statearr_44862_44891[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44861 === (1)))
{var inst_44823 = (new Array(n));var inst_44824 = inst_44823;var inst_44825 = (0);var state_44860__$1 = (function (){var statearr_44863 = state_44860;(statearr_44863[(7)] = inst_44824);
(statearr_44863[(8)] = inst_44825);
return statearr_44863;
})();var statearr_44864_44892 = state_44860__$1;(statearr_44864_44892[(2)] = null);
(statearr_44864_44892[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44861 === (4)))
{var inst_44828 = (state_44860[(9)]);var inst_44828__$1 = (state_44860[(2)]);var inst_44829 = (inst_44828__$1 == null);var inst_44830 = cljs.core.not(inst_44829);var state_44860__$1 = (function (){var statearr_44865 = state_44860;(statearr_44865[(9)] = inst_44828__$1);
return statearr_44865;
})();if(inst_44830)
{var statearr_44866_44893 = state_44860__$1;(statearr_44866_44893[(1)] = (5));
} else
{var statearr_44867_44894 = state_44860__$1;(statearr_44867_44894[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44861 === (15)))
{var inst_44850 = (state_44860[(2)]);var state_44860__$1 = state_44860;var statearr_44868_44895 = state_44860__$1;(statearr_44868_44895[(2)] = inst_44850);
(statearr_44868_44895[(1)] = (14));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44861 === (13)))
{var state_44860__$1 = state_44860;var statearr_44869_44896 = state_44860__$1;(statearr_44869_44896[(2)] = null);
(statearr_44869_44896[(1)] = (14));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44861 === (6)))
{var inst_44825 = (state_44860[(8)]);var inst_44846 = (inst_44825 > (0));var state_44860__$1 = state_44860;if(cljs.core.truth_(inst_44846))
{var statearr_44870_44897 = state_44860__$1;(statearr_44870_44897[(1)] = (12));
} else
{var statearr_44871_44898 = state_44860__$1;(statearr_44871_44898[(1)] = (13));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44861 === (3)))
{var inst_44858 = (state_44860[(2)]);var state_44860__$1 = state_44860;return cljs.core.async.impl.ioc_helpers.return_chan(state_44860__$1,inst_44858);
} else
{if((state_val_44861 === (12)))
{var inst_44824 = (state_44860[(7)]);var inst_44848 = cljs.core.vec(inst_44824);var state_44860__$1 = state_44860;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44860__$1,(15),out,inst_44848);
} else
{if((state_val_44861 === (2)))
{var state_44860__$1 = state_44860;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44860__$1,(4),ch);
} else
{if((state_val_44861 === (11)))
{var inst_44840 = (state_44860[(2)]);var inst_44841 = (new Array(n));var inst_44824 = inst_44841;var inst_44825 = (0);var state_44860__$1 = (function (){var statearr_44872 = state_44860;(statearr_44872[(10)] = inst_44840);
(statearr_44872[(7)] = inst_44824);
(statearr_44872[(8)] = inst_44825);
return statearr_44872;
})();var statearr_44873_44899 = state_44860__$1;(statearr_44873_44899[(2)] = null);
(statearr_44873_44899[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44861 === (9)))
{var inst_44824 = (state_44860[(7)]);var inst_44838 = cljs.core.vec(inst_44824);var state_44860__$1 = state_44860;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44860__$1,(11),out,inst_44838);
} else
{if((state_val_44861 === (5)))
{var inst_44824 = (state_44860[(7)]);var inst_44833 = (state_44860[(11)]);var inst_44825 = (state_44860[(8)]);var inst_44828 = (state_44860[(9)]);var inst_44832 = (inst_44824[inst_44825] = inst_44828);var inst_44833__$1 = (inst_44825 + (1));var inst_44834 = (inst_44833__$1 < n);var state_44860__$1 = (function (){var statearr_44874 = state_44860;(statearr_44874[(12)] = inst_44832);
(statearr_44874[(11)] = inst_44833__$1);
return statearr_44874;
})();if(cljs.core.truth_(inst_44834))
{var statearr_44875_44900 = state_44860__$1;(statearr_44875_44900[(1)] = (8));
} else
{var statearr_44876_44901 = state_44860__$1;(statearr_44876_44901[(1)] = (9));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_44861 === (14)))
{var inst_44853 = (state_44860[(2)]);var inst_44854 = cljs.core.async.close_BANG_(out);var state_44860__$1 = (function (){var statearr_44878 = state_44860;(statearr_44878[(13)] = inst_44853);
return statearr_44878;
})();var statearr_44879_44902 = state_44860__$1;(statearr_44879_44902[(2)] = inst_44854);
(statearr_44879_44902[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44861 === (10)))
{var inst_44844 = (state_44860[(2)]);var state_44860__$1 = state_44860;var statearr_44880_44903 = state_44860__$1;(statearr_44880_44903[(2)] = inst_44844);
(statearr_44880_44903[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_44861 === (8)))
{var inst_44824 = (state_44860[(7)]);var inst_44833 = (state_44860[(11)]);var tmp44877 = inst_44824;var inst_44824__$1 = tmp44877;var inst_44825 = inst_44833;var state_44860__$1 = (function (){var statearr_44881 = state_44860;(statearr_44881[(7)] = inst_44824__$1);
(statearr_44881[(8)] = inst_44825);
return statearr_44881;
})();var statearr_44882_44904 = state_44860__$1;(statearr_44882_44904[(2)] = null);
(statearr_44882_44904[(1)] = (2));
return cljs.core.constant$keyword$872;
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
});})(c__5708__auto___44890,out))
;return ((function (switch__5693__auto__,c__5708__auto___44890,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44886[(0)] = state_machine__5694__auto__);
(statearr_44886[(1)] = (1));
return statearr_44886;
});
var state_machine__5694__auto____1 = (function (state_44860){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44860);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44887){if((e44887 instanceof Object))
{var ex__5697__auto__ = e44887;var statearr_44888_44905 = state_44860;(statearr_44888_44905[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44860);
return cljs.core.constant$keyword$872;
} else
{throw e44887;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__44906 = state_44860;
state_44860 = G__44906;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44860){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___44890,out))
})();var state__5710__auto__ = (function (){var statearr_44889 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___44890);
return statearr_44889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___44890,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___45049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___45049,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___45049,out){
return (function (state_45019){var state_val_45020 = (state_45019[(1)]);if((state_val_45020 === (7)))
{var inst_45015 = (state_45019[(2)]);var state_45019__$1 = state_45019;var statearr_45021_45050 = state_45019__$1;(statearr_45021_45050[(2)] = inst_45015);
(statearr_45021_45050[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_45020 === (1)))
{var inst_44978 = [];var inst_44979 = inst_44978;var inst_44980 = cljs.core.constant$keyword$885;var state_45019__$1 = (function (){var statearr_45022 = state_45019;(statearr_45022[(7)] = inst_44980);
(statearr_45022[(8)] = inst_44979);
return statearr_45022;
})();var statearr_45023_45051 = state_45019__$1;(statearr_45023_45051[(2)] = null);
(statearr_45023_45051[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_45020 === (4)))
{var inst_44983 = (state_45019[(9)]);var inst_44983__$1 = (state_45019[(2)]);var inst_44984 = (inst_44983__$1 == null);var inst_44985 = cljs.core.not(inst_44984);var state_45019__$1 = (function (){var statearr_45024 = state_45019;(statearr_45024[(9)] = inst_44983__$1);
return statearr_45024;
})();if(inst_44985)
{var statearr_45025_45052 = state_45019__$1;(statearr_45025_45052[(1)] = (5));
} else
{var statearr_45026_45053 = state_45019__$1;(statearr_45026_45053[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_45020 === (15)))
{var inst_45009 = (state_45019[(2)]);var state_45019__$1 = state_45019;var statearr_45027_45054 = state_45019__$1;(statearr_45027_45054[(2)] = inst_45009);
(statearr_45027_45054[(1)] = (14));
return cljs.core.constant$keyword$872;
} else
{if((state_val_45020 === (13)))
{var state_45019__$1 = state_45019;var statearr_45028_45055 = state_45019__$1;(statearr_45028_45055[(2)] = null);
(statearr_45028_45055[(1)] = (14));
return cljs.core.constant$keyword$872;
} else
{if((state_val_45020 === (6)))
{var inst_44979 = (state_45019[(8)]);var inst_45004 = inst_44979.length;var inst_45005 = (inst_45004 > (0));var state_45019__$1 = state_45019;if(cljs.core.truth_(inst_45005))
{var statearr_45029_45056 = state_45019__$1;(statearr_45029_45056[(1)] = (12));
} else
{var statearr_45030_45057 = state_45019__$1;(statearr_45030_45057[(1)] = (13));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_45020 === (3)))
{var inst_45017 = (state_45019[(2)]);var state_45019__$1 = state_45019;return cljs.core.async.impl.ioc_helpers.return_chan(state_45019__$1,inst_45017);
} else
{if((state_val_45020 === (12)))
{var inst_44979 = (state_45019[(8)]);var inst_45007 = cljs.core.vec(inst_44979);var state_45019__$1 = state_45019;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45019__$1,(15),out,inst_45007);
} else
{if((state_val_45020 === (2)))
{var state_45019__$1 = state_45019;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45019__$1,(4),ch);
} else
{if((state_val_45020 === (11)))
{var inst_44987 = (state_45019[(10)]);var inst_44983 = (state_45019[(9)]);var inst_44997 = (state_45019[(2)]);var inst_44998 = [];var inst_44999 = inst_44998.push(inst_44983);var inst_44979 = inst_44998;var inst_44980 = inst_44987;var state_45019__$1 = (function (){var statearr_45031 = state_45019;(statearr_45031[(11)] = inst_44999);
(statearr_45031[(12)] = inst_44997);
(statearr_45031[(7)] = inst_44980);
(statearr_45031[(8)] = inst_44979);
return statearr_45031;
})();var statearr_45032_45058 = state_45019__$1;(statearr_45032_45058[(2)] = null);
(statearr_45032_45058[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_45020 === (9)))
{var inst_44979 = (state_45019[(8)]);var inst_44995 = cljs.core.vec(inst_44979);var state_45019__$1 = state_45019;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45019__$1,(11),out,inst_44995);
} else
{if((state_val_45020 === (5)))
{var inst_44987 = (state_45019[(10)]);var inst_44980 = (state_45019[(7)]);var inst_44983 = (state_45019[(9)]);var inst_44987__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44983) : f.call(null,inst_44983));var inst_44988 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44987__$1,inst_44980);var inst_44989 = cljs.core.keyword_identical_QMARK_(inst_44980,cljs.core.constant$keyword$885);var inst_44990 = (inst_44988) || (inst_44989);var state_45019__$1 = (function (){var statearr_45033 = state_45019;(statearr_45033[(10)] = inst_44987__$1);
return statearr_45033;
})();if(cljs.core.truth_(inst_44990))
{var statearr_45034_45059 = state_45019__$1;(statearr_45034_45059[(1)] = (8));
} else
{var statearr_45035_45060 = state_45019__$1;(statearr_45035_45060[(1)] = (9));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_45020 === (14)))
{var inst_45012 = (state_45019[(2)]);var inst_45013 = cljs.core.async.close_BANG_(out);var state_45019__$1 = (function (){var statearr_45037 = state_45019;(statearr_45037[(13)] = inst_45012);
return statearr_45037;
})();var statearr_45038_45061 = state_45019__$1;(statearr_45038_45061[(2)] = inst_45013);
(statearr_45038_45061[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_45020 === (10)))
{var inst_45002 = (state_45019[(2)]);var state_45019__$1 = state_45019;var statearr_45039_45062 = state_45019__$1;(statearr_45039_45062[(2)] = inst_45002);
(statearr_45039_45062[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_45020 === (8)))
{var inst_44987 = (state_45019[(10)]);var inst_44983 = (state_45019[(9)]);var inst_44979 = (state_45019[(8)]);var inst_44992 = inst_44979.push(inst_44983);var tmp45036 = inst_44979;var inst_44979__$1 = tmp45036;var inst_44980 = inst_44987;var state_45019__$1 = (function (){var statearr_45040 = state_45019;(statearr_45040[(14)] = inst_44992);
(statearr_45040[(7)] = inst_44980);
(statearr_45040[(8)] = inst_44979__$1);
return statearr_45040;
})();var statearr_45041_45063 = state_45019__$1;(statearr_45041_45063[(2)] = null);
(statearr_45041_45063[(1)] = (2));
return cljs.core.constant$keyword$872;
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
});})(c__5708__auto___45049,out))
;return ((function (switch__5693__auto__,c__5708__auto___45049,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45045[(0)] = state_machine__5694__auto__);
(statearr_45045[(1)] = (1));
return statearr_45045;
});
var state_machine__5694__auto____1 = (function (state_45019){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45019);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45046){if((e45046 instanceof Object))
{var ex__5697__auto__ = e45046;var statearr_45047_45064 = state_45019;(statearr_45047_45064[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45019);
return cljs.core.constant$keyword$872;
} else
{throw e45046;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__45065 = state_45019;
state_45019 = G__45065;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45019){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___45049,out))
})();var state__5710__auto__ = (function (){var statearr_45048 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___45049);
return statearr_45048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___45049,out))
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
