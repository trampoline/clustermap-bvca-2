// Compiled by ClojureScript 0.0-2227
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t36520 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36520 = (function (f,fn_handler,meta36521){
this.f = f;
this.fn_handler = fn_handler;
this.meta36521 = meta36521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36520.cljs$lang$type = true;
cljs.core.async.t36520.cljs$lang$ctorStr = "cljs.core.async/t36520";
cljs.core.async.t36520.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36520");
});
cljs.core.async.t36520.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t36520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t36520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36522){var self__ = this;
var _36522__$1 = this;return self__.meta36521;
});
cljs.core.async.t36520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36522,meta36521__$1){var self__ = this;
var _36522__$1 = this;return (new cljs.core.async.t36520(self__.f,self__.fn_handler,meta36521__$1));
});
cljs.core.async.__GT_t36520 = (function __GT_t36520(f__$1,fn_handler__$1,meta36521){return (new cljs.core.async.t36520(f__$1,fn_handler__$1,meta36521));
});
}
return (new cljs.core.async.t36520(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__36524 = buff;if(G__36524)
{var bit__4189__auto__ = null;if(cljs.core.truth_((function (){var or__3539__auto__ = bit__4189__auto__;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return G__36524.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__36524.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36524);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36524);
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
{var val_36525 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36525) : fn1.call(null,val_36525));
} else
{cljs.core.async.impl.dispatch.run(((function (val_36525,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36525) : fn1.call(null,val_36525));
});})(val_36525,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3527__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4395__auto___36526 = n;var x_36527 = 0;while(true){
if((x_36527 < n__4395__auto___36526))
{(a[x_36527] = 0);
{
var G__36528 = (x_36527 + 1);
x_36527 = G__36528;
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
var G__36529 = (i + 1);
i = G__36529;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t36533 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36533 = (function (flag,alt_flag,meta36534){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36534 = meta36534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36533.cljs$lang$type = true;
cljs.core.async.t36533.cljs$lang$ctorStr = "cljs.core.async/t36533";
cljs.core.async.t36533.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36533");
});})(flag))
;
cljs.core.async.t36533.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t36533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t36533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36535){var self__ = this;
var _36535__$1 = this;return self__.meta36534;
});})(flag))
;
cljs.core.async.t36533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36535,meta36534__$1){var self__ = this;
var _36535__$1 = this;return (new cljs.core.async.t36533(self__.flag,self__.alt_flag,meta36534__$1));
});})(flag))
;
cljs.core.async.__GT_t36533 = ((function (flag){
return (function __GT_t36533(flag__$1,alt_flag__$1,meta36534){return (new cljs.core.async.t36533(flag__$1,alt_flag__$1,meta36534));
});})(flag))
;
}
return (new cljs.core.async.t36533(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t36539 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36539 = (function (cb,flag,alt_handler,meta36540){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36540 = meta36540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36539.cljs$lang$type = true;
cljs.core.async.t36539.cljs$lang$ctorStr = "cljs.core.async/t36539";
cljs.core.async.t36539.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36539");
});
cljs.core.async.t36539.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t36539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t36539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36541){var self__ = this;
var _36541__$1 = this;return self__.meta36540;
});
cljs.core.async.t36539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36541,meta36540__$1){var self__ = this;
var _36541__$1 = this;return (new cljs.core.async.t36539(self__.cb,self__.flag,self__.alt_handler,meta36540__$1));
});
cljs.core.async.__GT_t36539 = (function __GT_t36539(cb__$1,flag__$1,alt_handler__$1,meta36540){return (new cljs.core.async.t36539(cb__$1,flag__$1,alt_handler__$1,meta36540));
});
}
return (new cljs.core.async.t36539(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$597.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36542_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36542_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36542_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3539__auto__ = wport;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__36543 = (i + 1);
i = G__36543;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3539__auto__ = ret;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$581))
{var temp__4126__auto__ = (function (){var and__3527__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3527__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3527__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$581.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$581], null));
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
var alts_BANG___delegate = function (ports,p__36544){var map__36546 = p__36544;var map__36546__$1 = ((cljs.core.seq_QMARK_(map__36546))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36546):map__36546);var opts = map__36546__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__36544 = null;if (arguments.length > 1) {
  p__36544 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__36544);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36547){
var ports = cljs.core.first(arglist__36547);
var p__36544 = cljs.core.rest(arglist__36547);
return alts_BANG___delegate(ports,p__36544);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t36555 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36555 = (function (ch,f,map_LT_,meta36556){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36556 = meta36556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36555.cljs$lang$type = true;
cljs.core.async.t36555.cljs$lang$ctorStr = "cljs.core.async/t36555";
cljs.core.async.t36555.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36555");
});
cljs.core.async.t36555.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36555.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t36555.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36555.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t36558 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36558 = (function (fn1,_,meta36556,ch,f,map_LT_,meta36559){
this.fn1 = fn1;
this._ = _;
this.meta36556 = meta36556;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36559 = meta36559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36558.cljs$lang$type = true;
cljs.core.async.t36558.cljs$lang$ctorStr = "cljs.core.async/t36558";
cljs.core.async.t36558.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36558");
});})(___$1))
;
cljs.core.async.t36558.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t36558.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t36558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__36548_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__36548_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36548_SHARP_) : self__.f.call(null,p1__36548_SHARP_)))) : f1.call(null,(((p1__36548_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36548_SHARP_) : self__.f.call(null,p1__36548_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t36558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36560){var self__ = this;
var _36560__$1 = this;return self__.meta36559;
});})(___$1))
;
cljs.core.async.t36558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36560,meta36559__$1){var self__ = this;
var _36560__$1 = this;return (new cljs.core.async.t36558(self__.fn1,self__._,self__.meta36556,self__.ch,self__.f,self__.map_LT_,meta36559__$1));
});})(___$1))
;
cljs.core.async.__GT_t36558 = ((function (___$1){
return (function __GT_t36558(fn1__$1,___$2,meta36556__$1,ch__$2,f__$2,map_LT___$2,meta36559){return (new cljs.core.async.t36558(fn1__$1,___$2,meta36556__$1,ch__$2,f__$2,map_LT___$2,meta36559));
});})(___$1))
;
}
return (new cljs.core.async.t36558(fn1,___$1,self__.meta36556,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3527__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t36555.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36555.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36557){var self__ = this;
var _36557__$1 = this;return self__.meta36556;
});
cljs.core.async.t36555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36557,meta36556__$1){var self__ = this;
var _36557__$1 = this;return (new cljs.core.async.t36555(self__.ch,self__.f,self__.map_LT_,meta36556__$1));
});
cljs.core.async.__GT_t36555 = (function __GT_t36555(ch__$1,f__$1,map_LT___$1,meta36556){return (new cljs.core.async.t36555(ch__$1,f__$1,map_LT___$1,meta36556));
});
}
return (new cljs.core.async.t36555(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t36564 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36564 = (function (ch,f,map_GT_,meta36565){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36565 = meta36565;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36564.cljs$lang$type = true;
cljs.core.async.t36564.cljs$lang$ctorStr = "cljs.core.async/t36564";
cljs.core.async.t36564.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36564");
});
cljs.core.async.t36564.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t36564.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36564.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36566){var self__ = this;
var _36566__$1 = this;return self__.meta36565;
});
cljs.core.async.t36564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36566,meta36565__$1){var self__ = this;
var _36566__$1 = this;return (new cljs.core.async.t36564(self__.ch,self__.f,self__.map_GT_,meta36565__$1));
});
cljs.core.async.__GT_t36564 = (function __GT_t36564(ch__$1,f__$1,map_GT___$1,meta36565){return (new cljs.core.async.t36564(ch__$1,f__$1,map_GT___$1,meta36565));
});
}
return (new cljs.core.async.t36564(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36570 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36570 = (function (ch,p,filter_GT_,meta36571){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36571 = meta36571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36570.cljs$lang$type = true;
cljs.core.async.t36570.cljs$lang$ctorStr = "cljs.core.async/t36570";
cljs.core.async.t36570.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t36570");
});
cljs.core.async.t36570.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t36570.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36570.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36572){var self__ = this;
var _36572__$1 = this;return self__.meta36571;
});
cljs.core.async.t36570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36572,meta36571__$1){var self__ = this;
var _36572__$1 = this;return (new cljs.core.async.t36570(self__.ch,self__.p,self__.filter_GT_,meta36571__$1));
});
cljs.core.async.__GT_t36570 = (function __GT_t36570(ch__$1,p__$1,filter_GT___$1,meta36571){return (new cljs.core.async.t36570(ch__$1,p__$1,filter_GT___$1,meta36571));
});
}
return (new cljs.core.async.t36570(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___36655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___36655,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___36655,out){
return (function (state_36634){var state_val_36635 = (state_36634[1]);if((state_val_36635 === 7))
{var inst_36630 = (state_36634[2]);var state_36634__$1 = state_36634;var statearr_36636_36656 = state_36634__$1;(statearr_36636_36656[2] = inst_36630);
(statearr_36636_36656[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36635 === 1))
{var state_36634__$1 = state_36634;var statearr_36637_36657 = state_36634__$1;(statearr_36637_36657[2] = null);
(statearr_36637_36657[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36635 === 4))
{var inst_36616 = (state_36634[7]);var inst_36616__$1 = (state_36634[2]);var inst_36617 = (inst_36616__$1 == null);var state_36634__$1 = (function (){var statearr_36638 = state_36634;(statearr_36638[7] = inst_36616__$1);
return statearr_36638;
})();if(cljs.core.truth_(inst_36617))
{var statearr_36639_36658 = state_36634__$1;(statearr_36639_36658[1] = 5);
} else
{var statearr_36640_36659 = state_36634__$1;(statearr_36640_36659[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36635 === 6))
{var inst_36616 = (state_36634[7]);var inst_36621 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36616) : p.call(null,inst_36616));var state_36634__$1 = state_36634;if(cljs.core.truth_(inst_36621))
{var statearr_36641_36660 = state_36634__$1;(statearr_36641_36660[1] = 8);
} else
{var statearr_36642_36661 = state_36634__$1;(statearr_36642_36661[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36635 === 3))
{var inst_36632 = (state_36634[2]);var state_36634__$1 = state_36634;return cljs.core.async.impl.ioc_helpers.return_chan(state_36634__$1,inst_36632);
} else
{if((state_val_36635 === 2))
{var state_36634__$1 = state_36634;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36634__$1,4,ch);
} else
{if((state_val_36635 === 11))
{var inst_36624 = (state_36634[2]);var state_36634__$1 = state_36634;var statearr_36643_36662 = state_36634__$1;(statearr_36643_36662[2] = inst_36624);
(statearr_36643_36662[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36635 === 9))
{var state_36634__$1 = state_36634;var statearr_36644_36663 = state_36634__$1;(statearr_36644_36663[2] = null);
(statearr_36644_36663[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36635 === 5))
{var inst_36619 = cljs.core.async.close_BANG_(out);var state_36634__$1 = state_36634;var statearr_36645_36664 = state_36634__$1;(statearr_36645_36664[2] = inst_36619);
(statearr_36645_36664[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36635 === 10))
{var inst_36627 = (state_36634[2]);var state_36634__$1 = (function (){var statearr_36646 = state_36634;(statearr_36646[8] = inst_36627);
return statearr_36646;
})();var statearr_36647_36665 = state_36634__$1;(statearr_36647_36665[2] = null);
(statearr_36647_36665[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36635 === 8))
{var inst_36616 = (state_36634[7]);var state_36634__$1 = state_36634;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36634__$1,11,out,inst_36616);
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
});})(c__5689__auto___36655,out))
;return ((function (switch__5674__auto__,c__5689__auto___36655,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_36651 = [null,null,null,null,null,null,null,null,null];(statearr_36651[0] = state_machine__5675__auto__);
(statearr_36651[1] = 1);
return statearr_36651;
});
var state_machine__5675__auto____1 = (function (state_36634){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_36634);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e36652){if((e36652 instanceof Object))
{var ex__5678__auto__ = e36652;var statearr_36653_36666 = state_36634;(statearr_36653_36666[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36634);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e36652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__36667 = state_36634;
state_36634 = G__36667;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_36634){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_36634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___36655,out))
})();var state__5691__auto__ = (function (){var statearr_36654 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_36654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___36655);
return statearr_36654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___36655,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_36819){var state_val_36820 = (state_36819[1]);if((state_val_36820 === 7))
{var inst_36815 = (state_36819[2]);var state_36819__$1 = state_36819;var statearr_36821_36858 = state_36819__$1;(statearr_36821_36858[2] = inst_36815);
(statearr_36821_36858[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 20))
{var inst_36790 = (state_36819[7]);var inst_36801 = (state_36819[2]);var inst_36802 = cljs.core.next(inst_36790);var inst_36776 = inst_36802;var inst_36777 = null;var inst_36778 = 0;var inst_36779 = 0;var state_36819__$1 = (function (){var statearr_36822 = state_36819;(statearr_36822[8] = inst_36779);
(statearr_36822[9] = inst_36777);
(statearr_36822[10] = inst_36801);
(statearr_36822[11] = inst_36778);
(statearr_36822[12] = inst_36776);
return statearr_36822;
})();var statearr_36823_36859 = state_36819__$1;(statearr_36823_36859[2] = null);
(statearr_36823_36859[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 1))
{var state_36819__$1 = state_36819;var statearr_36824_36860 = state_36819__$1;(statearr_36824_36860[2] = null);
(statearr_36824_36860[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 4))
{var inst_36765 = (state_36819[13]);var inst_36765__$1 = (state_36819[2]);var inst_36766 = (inst_36765__$1 == null);var state_36819__$1 = (function (){var statearr_36828 = state_36819;(statearr_36828[13] = inst_36765__$1);
return statearr_36828;
})();if(cljs.core.truth_(inst_36766))
{var statearr_36829_36861 = state_36819__$1;(statearr_36829_36861[1] = 5);
} else
{var statearr_36830_36862 = state_36819__$1;(statearr_36830_36862[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 15))
{var state_36819__$1 = state_36819;var statearr_36831_36863 = state_36819__$1;(statearr_36831_36863[2] = null);
(statearr_36831_36863[1] = 16);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 13))
{var inst_36779 = (state_36819[8]);var inst_36777 = (state_36819[9]);var inst_36778 = (state_36819[11]);var inst_36776 = (state_36819[12]);var inst_36786 = (state_36819[2]);var inst_36787 = (inst_36779 + 1);var tmp36825 = inst_36777;var tmp36826 = inst_36778;var tmp36827 = inst_36776;var inst_36776__$1 = tmp36827;var inst_36777__$1 = tmp36825;var inst_36778__$1 = tmp36826;var inst_36779__$1 = inst_36787;var state_36819__$1 = (function (){var statearr_36832 = state_36819;(statearr_36832[14] = inst_36786);
(statearr_36832[8] = inst_36779__$1);
(statearr_36832[9] = inst_36777__$1);
(statearr_36832[11] = inst_36778__$1);
(statearr_36832[12] = inst_36776__$1);
return statearr_36832;
})();var statearr_36833_36864 = state_36819__$1;(statearr_36833_36864[2] = null);
(statearr_36833_36864[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 6))
{var inst_36765 = (state_36819[13]);var inst_36770 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36765) : f.call(null,inst_36765));var inst_36775 = cljs.core.seq(inst_36770);var inst_36776 = inst_36775;var inst_36777 = null;var inst_36778 = 0;var inst_36779 = 0;var state_36819__$1 = (function (){var statearr_36834 = state_36819;(statearr_36834[8] = inst_36779);
(statearr_36834[9] = inst_36777);
(statearr_36834[11] = inst_36778);
(statearr_36834[12] = inst_36776);
return statearr_36834;
})();var statearr_36835_36865 = state_36819__$1;(statearr_36835_36865[2] = null);
(statearr_36835_36865[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 17))
{var inst_36790 = (state_36819[7]);var inst_36794 = cljs.core.chunk_first(inst_36790);var inst_36795 = cljs.core.chunk_rest(inst_36790);var inst_36796 = cljs.core.count(inst_36794);var inst_36776 = inst_36795;var inst_36777 = inst_36794;var inst_36778 = inst_36796;var inst_36779 = 0;var state_36819__$1 = (function (){var statearr_36836 = state_36819;(statearr_36836[8] = inst_36779);
(statearr_36836[9] = inst_36777);
(statearr_36836[11] = inst_36778);
(statearr_36836[12] = inst_36776);
return statearr_36836;
})();var statearr_36837_36866 = state_36819__$1;(statearr_36837_36866[2] = null);
(statearr_36837_36866[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 3))
{var inst_36817 = (state_36819[2]);var state_36819__$1 = state_36819;return cljs.core.async.impl.ioc_helpers.return_chan(state_36819__$1,inst_36817);
} else
{if((state_val_36820 === 12))
{var inst_36810 = (state_36819[2]);var state_36819__$1 = state_36819;var statearr_36838_36867 = state_36819__$1;(statearr_36838_36867[2] = inst_36810);
(statearr_36838_36867[1] = 9);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 2))
{var state_36819__$1 = state_36819;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36819__$1,4,in$);
} else
{if((state_val_36820 === 19))
{var inst_36805 = (state_36819[2]);var state_36819__$1 = state_36819;var statearr_36839_36868 = state_36819__$1;(statearr_36839_36868[2] = inst_36805);
(statearr_36839_36868[1] = 16);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 11))
{var inst_36790 = (state_36819[7]);var inst_36776 = (state_36819[12]);var inst_36790__$1 = cljs.core.seq(inst_36776);var state_36819__$1 = (function (){var statearr_36840 = state_36819;(statearr_36840[7] = inst_36790__$1);
return statearr_36840;
})();if(inst_36790__$1)
{var statearr_36841_36869 = state_36819__$1;(statearr_36841_36869[1] = 14);
} else
{var statearr_36842_36870 = state_36819__$1;(statearr_36842_36870[1] = 15);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 9))
{var inst_36812 = (state_36819[2]);var state_36819__$1 = (function (){var statearr_36843 = state_36819;(statearr_36843[15] = inst_36812);
return statearr_36843;
})();var statearr_36844_36871 = state_36819__$1;(statearr_36844_36871[2] = null);
(statearr_36844_36871[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 5))
{var inst_36768 = cljs.core.async.close_BANG_(out);var state_36819__$1 = state_36819;var statearr_36845_36872 = state_36819__$1;(statearr_36845_36872[2] = inst_36768);
(statearr_36845_36872[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 14))
{var inst_36790 = (state_36819[7]);var inst_36792 = cljs.core.chunked_seq_QMARK_(inst_36790);var state_36819__$1 = state_36819;if(inst_36792)
{var statearr_36846_36873 = state_36819__$1;(statearr_36846_36873[1] = 17);
} else
{var statearr_36847_36874 = state_36819__$1;(statearr_36847_36874[1] = 18);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 16))
{var inst_36808 = (state_36819[2]);var state_36819__$1 = state_36819;var statearr_36848_36875 = state_36819__$1;(statearr_36848_36875[2] = inst_36808);
(statearr_36848_36875[1] = 12);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36820 === 10))
{var inst_36779 = (state_36819[8]);var inst_36777 = (state_36819[9]);var inst_36784 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36777,inst_36779);var state_36819__$1 = state_36819;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36819__$1,13,out,inst_36784);
} else
{if((state_val_36820 === 18))
{var inst_36790 = (state_36819[7]);var inst_36799 = cljs.core.first(inst_36790);var state_36819__$1 = state_36819;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36819__$1,20,out,inst_36799);
} else
{if((state_val_36820 === 8))
{var inst_36779 = (state_36819[8]);var inst_36778 = (state_36819[11]);var inst_36781 = (inst_36779 < inst_36778);var inst_36782 = inst_36781;var state_36819__$1 = state_36819;if(cljs.core.truth_(inst_36782))
{var statearr_36849_36876 = state_36819__$1;(statearr_36849_36876[1] = 10);
} else
{var statearr_36850_36877 = state_36819__$1;(statearr_36850_36877[1] = 11);
}
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_36854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36854[0] = state_machine__5675__auto__);
(statearr_36854[1] = 1);
return statearr_36854;
});
var state_machine__5675__auto____1 = (function (state_36819){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_36819);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e36855){if((e36855 instanceof Object))
{var ex__5678__auto__ = e36855;var statearr_36856_36878 = state_36819;(statearr_36856_36878[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36819);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e36855;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__36879 = state_36819;
state_36819 = G__36879;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_36819){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_36819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_36857 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_36857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_36857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5689__auto___36960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___36960){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___36960){
return (function (state_36939){var state_val_36940 = (state_36939[1]);if((state_val_36940 === 7))
{var inst_36935 = (state_36939[2]);var state_36939__$1 = state_36939;var statearr_36941_36961 = state_36939__$1;(statearr_36941_36961[2] = inst_36935);
(statearr_36941_36961[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36940 === 1))
{var state_36939__$1 = state_36939;var statearr_36942_36962 = state_36939__$1;(statearr_36942_36962[2] = null);
(statearr_36942_36962[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36940 === 4))
{var inst_36922 = (state_36939[7]);var inst_36922__$1 = (state_36939[2]);var inst_36923 = (inst_36922__$1 == null);var state_36939__$1 = (function (){var statearr_36943 = state_36939;(statearr_36943[7] = inst_36922__$1);
return statearr_36943;
})();if(cljs.core.truth_(inst_36923))
{var statearr_36944_36963 = state_36939__$1;(statearr_36944_36963[1] = 5);
} else
{var statearr_36945_36964 = state_36939__$1;(statearr_36945_36964[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36940 === 6))
{var inst_36922 = (state_36939[7]);var state_36939__$1 = state_36939;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36939__$1,11,to,inst_36922);
} else
{if((state_val_36940 === 3))
{var inst_36937 = (state_36939[2]);var state_36939__$1 = state_36939;return cljs.core.async.impl.ioc_helpers.return_chan(state_36939__$1,inst_36937);
} else
{if((state_val_36940 === 2))
{var state_36939__$1 = state_36939;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36939__$1,4,from);
} else
{if((state_val_36940 === 11))
{var inst_36932 = (state_36939[2]);var state_36939__$1 = (function (){var statearr_36946 = state_36939;(statearr_36946[8] = inst_36932);
return statearr_36946;
})();var statearr_36947_36965 = state_36939__$1;(statearr_36947_36965[2] = null);
(statearr_36947_36965[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36940 === 9))
{var state_36939__$1 = state_36939;var statearr_36948_36966 = state_36939__$1;(statearr_36948_36966[2] = null);
(statearr_36948_36966[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36940 === 5))
{var state_36939__$1 = state_36939;if(cljs.core.truth_(close_QMARK_))
{var statearr_36949_36967 = state_36939__$1;(statearr_36949_36967[1] = 8);
} else
{var statearr_36950_36968 = state_36939__$1;(statearr_36950_36968[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_36940 === 10))
{var inst_36929 = (state_36939[2]);var state_36939__$1 = state_36939;var statearr_36951_36969 = state_36939__$1;(statearr_36951_36969[2] = inst_36929);
(statearr_36951_36969[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_36940 === 8))
{var inst_36926 = cljs.core.async.close_BANG_(to);var state_36939__$1 = state_36939;var statearr_36952_36970 = state_36939__$1;(statearr_36952_36970[2] = inst_36926);
(statearr_36952_36970[1] = 10);
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto___36960))
;return ((function (switch__5674__auto__,c__5689__auto___36960){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_36956 = [null,null,null,null,null,null,null,null,null];(statearr_36956[0] = state_machine__5675__auto__);
(statearr_36956[1] = 1);
return statearr_36956;
});
var state_machine__5675__auto____1 = (function (state_36939){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_36939);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e36957){if((e36957 instanceof Object))
{var ex__5678__auto__ = e36957;var statearr_36958_36971 = state_36939;(statearr_36958_36971[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36939);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e36957;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__36972 = state_36939;
state_36939 = G__36972;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_36939){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_36939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___36960))
})();var state__5691__auto__ = (function (){var statearr_36959 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_36959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___36960);
return statearr_36959;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___36960))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5689__auto___37059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___37059,tc,fc){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___37059,tc,fc){
return (function (state_37037){var state_val_37038 = (state_37037[1]);if((state_val_37038 === 7))
{var inst_37033 = (state_37037[2]);var state_37037__$1 = state_37037;var statearr_37039_37060 = state_37037__$1;(statearr_37039_37060[2] = inst_37033);
(statearr_37039_37060[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37038 === 1))
{var state_37037__$1 = state_37037;var statearr_37040_37061 = state_37037__$1;(statearr_37040_37061[2] = null);
(statearr_37040_37061[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37038 === 4))
{var inst_37018 = (state_37037[7]);var inst_37018__$1 = (state_37037[2]);var inst_37019 = (inst_37018__$1 == null);var state_37037__$1 = (function (){var statearr_37041 = state_37037;(statearr_37041[7] = inst_37018__$1);
return statearr_37041;
})();if(cljs.core.truth_(inst_37019))
{var statearr_37042_37062 = state_37037__$1;(statearr_37042_37062[1] = 5);
} else
{var statearr_37043_37063 = state_37037__$1;(statearr_37043_37063[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37038 === 6))
{var inst_37018 = (state_37037[7]);var inst_37024 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37018) : p.call(null,inst_37018));var state_37037__$1 = state_37037;if(cljs.core.truth_(inst_37024))
{var statearr_37044_37064 = state_37037__$1;(statearr_37044_37064[1] = 9);
} else
{var statearr_37045_37065 = state_37037__$1;(statearr_37045_37065[1] = 10);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37038 === 3))
{var inst_37035 = (state_37037[2]);var state_37037__$1 = state_37037;return cljs.core.async.impl.ioc_helpers.return_chan(state_37037__$1,inst_37035);
} else
{if((state_val_37038 === 2))
{var state_37037__$1 = state_37037;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37037__$1,4,ch);
} else
{if((state_val_37038 === 11))
{var inst_37018 = (state_37037[7]);var inst_37028 = (state_37037[2]);var state_37037__$1 = state_37037;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37037__$1,8,inst_37028,inst_37018);
} else
{if((state_val_37038 === 9))
{var state_37037__$1 = state_37037;var statearr_37046_37066 = state_37037__$1;(statearr_37046_37066[2] = tc);
(statearr_37046_37066[1] = 11);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37038 === 5))
{var inst_37021 = cljs.core.async.close_BANG_(tc);var inst_37022 = cljs.core.async.close_BANG_(fc);var state_37037__$1 = (function (){var statearr_37047 = state_37037;(statearr_37047[8] = inst_37021);
return statearr_37047;
})();var statearr_37048_37067 = state_37037__$1;(statearr_37048_37067[2] = inst_37022);
(statearr_37048_37067[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37038 === 10))
{var state_37037__$1 = state_37037;var statearr_37049_37068 = state_37037__$1;(statearr_37049_37068[2] = fc);
(statearr_37049_37068[1] = 11);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37038 === 8))
{var inst_37030 = (state_37037[2]);var state_37037__$1 = (function (){var statearr_37050 = state_37037;(statearr_37050[9] = inst_37030);
return statearr_37050;
})();var statearr_37051_37069 = state_37037__$1;(statearr_37051_37069[2] = null);
(statearr_37051_37069[1] = 2);
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto___37059,tc,fc))
;return ((function (switch__5674__auto__,c__5689__auto___37059,tc,fc){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_37055 = [null,null,null,null,null,null,null,null,null,null];(statearr_37055[0] = state_machine__5675__auto__);
(statearr_37055[1] = 1);
return statearr_37055;
});
var state_machine__5675__auto____1 = (function (state_37037){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_37037);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e37056){if((e37056 instanceof Object))
{var ex__5678__auto__ = e37056;var statearr_37057_37070 = state_37037;(statearr_37057_37070[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37037);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e37056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__37071 = state_37037;
state_37037 = G__37071;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_37037){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_37037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___37059,tc,fc))
})();var state__5691__auto__ = (function (){var statearr_37058 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_37058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___37059);
return statearr_37058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___37059,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_37118){var state_val_37119 = (state_37118[1]);if((state_val_37119 === 7))
{var inst_37114 = (state_37118[2]);var state_37118__$1 = state_37118;var statearr_37120_37136 = state_37118__$1;(statearr_37120_37136[2] = inst_37114);
(statearr_37120_37136[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37119 === 6))
{var inst_37104 = (state_37118[7]);var inst_37107 = (state_37118[8]);var inst_37111 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37104,inst_37107) : f.call(null,inst_37104,inst_37107));var inst_37104__$1 = inst_37111;var state_37118__$1 = (function (){var statearr_37121 = state_37118;(statearr_37121[7] = inst_37104__$1);
return statearr_37121;
})();var statearr_37122_37137 = state_37118__$1;(statearr_37122_37137[2] = null);
(statearr_37122_37137[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37119 === 5))
{var inst_37104 = (state_37118[7]);var state_37118__$1 = state_37118;var statearr_37123_37138 = state_37118__$1;(statearr_37123_37138[2] = inst_37104);
(statearr_37123_37138[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37119 === 4))
{var inst_37107 = (state_37118[8]);var inst_37107__$1 = (state_37118[2]);var inst_37108 = (inst_37107__$1 == null);var state_37118__$1 = (function (){var statearr_37124 = state_37118;(statearr_37124[8] = inst_37107__$1);
return statearr_37124;
})();if(cljs.core.truth_(inst_37108))
{var statearr_37125_37139 = state_37118__$1;(statearr_37125_37139[1] = 5);
} else
{var statearr_37126_37140 = state_37118__$1;(statearr_37126_37140[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37119 === 3))
{var inst_37116 = (state_37118[2]);var state_37118__$1 = state_37118;return cljs.core.async.impl.ioc_helpers.return_chan(state_37118__$1,inst_37116);
} else
{if((state_val_37119 === 2))
{var state_37118__$1 = state_37118;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37118__$1,4,ch);
} else
{if((state_val_37119 === 1))
{var inst_37104 = init;var state_37118__$1 = (function (){var statearr_37127 = state_37118;(statearr_37127[7] = inst_37104);
return statearr_37127;
})();var statearr_37128_37141 = state_37118__$1;(statearr_37128_37141[2] = null);
(statearr_37128_37141[1] = 2);
return cljs.core.constant$keyword$591;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_37132 = [null,null,null,null,null,null,null,null,null];(statearr_37132[0] = state_machine__5675__auto__);
(statearr_37132[1] = 1);
return statearr_37132;
});
var state_machine__5675__auto____1 = (function (state_37118){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_37118);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e37133){if((e37133 instanceof Object))
{var ex__5678__auto__ = e37133;var statearr_37134_37142 = state_37118;(statearr_37134_37142[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37118);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e37133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__37143 = state_37118;
state_37118 = G__37143;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_37118){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_37118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_37135 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_37135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_37135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_37205){var state_val_37206 = (state_37205[1]);if((state_val_37206 === 7))
{var inst_37186 = (state_37205[7]);var inst_37191 = (state_37205[2]);var inst_37192 = cljs.core.next(inst_37186);var inst_37186__$1 = inst_37192;var state_37205__$1 = (function (){var statearr_37207 = state_37205;(statearr_37207[7] = inst_37186__$1);
(statearr_37207[8] = inst_37191);
return statearr_37207;
})();var statearr_37208_37226 = state_37205__$1;(statearr_37208_37226[2] = null);
(statearr_37208_37226[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37206 === 1))
{var inst_37185 = cljs.core.seq(coll);var inst_37186 = inst_37185;var state_37205__$1 = (function (){var statearr_37209 = state_37205;(statearr_37209[7] = inst_37186);
return statearr_37209;
})();var statearr_37210_37227 = state_37205__$1;(statearr_37210_37227[2] = null);
(statearr_37210_37227[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37206 === 4))
{var inst_37186 = (state_37205[7]);var inst_37189 = cljs.core.first(inst_37186);var state_37205__$1 = state_37205;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37205__$1,7,ch,inst_37189);
} else
{if((state_val_37206 === 6))
{var inst_37201 = (state_37205[2]);var state_37205__$1 = state_37205;var statearr_37211_37228 = state_37205__$1;(statearr_37211_37228[2] = inst_37201);
(statearr_37211_37228[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37206 === 3))
{var inst_37203 = (state_37205[2]);var state_37205__$1 = state_37205;return cljs.core.async.impl.ioc_helpers.return_chan(state_37205__$1,inst_37203);
} else
{if((state_val_37206 === 2))
{var inst_37186 = (state_37205[7]);var state_37205__$1 = state_37205;if(cljs.core.truth_(inst_37186))
{var statearr_37212_37229 = state_37205__$1;(statearr_37212_37229[1] = 4);
} else
{var statearr_37213_37230 = state_37205__$1;(statearr_37213_37230[1] = 5);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37206 === 9))
{var state_37205__$1 = state_37205;var statearr_37214_37231 = state_37205__$1;(statearr_37214_37231[2] = null);
(statearr_37214_37231[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37206 === 5))
{var state_37205__$1 = state_37205;if(cljs.core.truth_(close_QMARK_))
{var statearr_37215_37232 = state_37205__$1;(statearr_37215_37232[1] = 8);
} else
{var statearr_37216_37233 = state_37205__$1;(statearr_37216_37233[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37206 === 10))
{var inst_37199 = (state_37205[2]);var state_37205__$1 = state_37205;var statearr_37217_37234 = state_37205__$1;(statearr_37217_37234[2] = inst_37199);
(statearr_37217_37234[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37206 === 8))
{var inst_37196 = cljs.core.async.close_BANG_(ch);var state_37205__$1 = state_37205;var statearr_37218_37235 = state_37205__$1;(statearr_37218_37235[2] = inst_37196);
(statearr_37218_37235[1] = 10);
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_37222 = [null,null,null,null,null,null,null,null,null];(statearr_37222[0] = state_machine__5675__auto__);
(statearr_37222[1] = 1);
return statearr_37222;
});
var state_machine__5675__auto____1 = (function (state_37205){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_37205);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e37223){if((e37223 instanceof Object))
{var ex__5678__auto__ = e37223;var statearr_37224_37236 = state_37205;(statearr_37224_37236[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37205);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e37223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__37237 = state_37205;
state_37205 = G__37237;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_37205){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_37205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_37225 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_37225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_37225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
cljs.core.async.Mux = (function (){var obj37239 = {};return obj37239;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3527__auto__ = _;if(and__3527__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4166__auto__ = (((_ == null))?null:_);return (function (){var or__3539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj37241 = {};return obj37241;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t37465 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37465 = (function (cs,ch,mult,meta37466){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37466 = meta37466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37465.cljs$lang$type = true;
cljs.core.async.t37465.cljs$lang$ctorStr = "cljs.core.async/t37465";
cljs.core.async.t37465.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t37465");
});})(cs))
;
cljs.core.async.t37465.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t37465.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t37465.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t37465.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t37465.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t37465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37467){var self__ = this;
var _37467__$1 = this;return self__.meta37466;
});})(cs))
;
cljs.core.async.t37465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37467,meta37466__$1){var self__ = this;
var _37467__$1 = this;return (new cljs.core.async.t37465(self__.cs,self__.ch,self__.mult,meta37466__$1));
});})(cs))
;
cljs.core.async.__GT_t37465 = ((function (cs){
return (function __GT_t37465(cs__$1,ch__$1,mult__$1,meta37466){return (new cljs.core.async.t37465(cs__$1,ch__$1,mult__$1,meta37466));
});})(cs))
;
}
return (new cljs.core.async.t37465(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5689__auto___37688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___37688,cs,m,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___37688,cs,m,dchan,dctr,done){
return (function (state_37602){var state_val_37603 = (state_37602[1]);if((state_val_37603 === 7))
{var inst_37598 = (state_37602[2]);var state_37602__$1 = state_37602;var statearr_37604_37689 = state_37602__$1;(statearr_37604_37689[2] = inst_37598);
(statearr_37604_37689[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 20))
{var inst_37499 = (state_37602[7]);var inst_37509 = cljs.core.first(inst_37499);var inst_37510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37509,0,null);var inst_37511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37509,1,null);var state_37602__$1 = (function (){var statearr_37605 = state_37602;(statearr_37605[8] = inst_37510);
return statearr_37605;
})();if(cljs.core.truth_(inst_37511))
{var statearr_37606_37690 = state_37602__$1;(statearr_37606_37690[1] = 22);
} else
{var statearr_37607_37691 = state_37602__$1;(statearr_37607_37691[1] = 23);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 27))
{var inst_37539 = (state_37602[9]);var inst_37541 = (state_37602[10]);var inst_37546 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37539,inst_37541);var state_37602__$1 = (function (){var statearr_37608 = state_37602;(statearr_37608[11] = inst_37546);
return statearr_37608;
})();var statearr_37609_37692 = state_37602__$1;(statearr_37609_37692[2] = null);
(statearr_37609_37692[1] = 32);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 1))
{var state_37602__$1 = state_37602;var statearr_37610_37693 = state_37602__$1;(statearr_37610_37693[2] = null);
(statearr_37610_37693[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 24))
{var inst_37499 = (state_37602[7]);var inst_37516 = (state_37602[2]);var inst_37517 = cljs.core.next(inst_37499);var inst_37479 = inst_37517;var inst_37480 = null;var inst_37481 = 0;var inst_37482 = 0;var state_37602__$1 = (function (){var statearr_37611 = state_37602;(statearr_37611[12] = inst_37479);
(statearr_37611[13] = inst_37516);
(statearr_37611[14] = inst_37481);
(statearr_37611[15] = inst_37482);
(statearr_37611[16] = inst_37480);
return statearr_37611;
})();var statearr_37612_37694 = state_37602__$1;(statearr_37612_37694[2] = null);
(statearr_37612_37694[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 39))
{var inst_37559 = (state_37602[17]);var inst_37577 = (state_37602[2]);var inst_37578 = cljs.core.next(inst_37559);var inst_37538 = inst_37578;var inst_37539 = null;var inst_37540 = 0;var inst_37541 = 0;var state_37602__$1 = (function (){var statearr_37616 = state_37602;(statearr_37616[9] = inst_37539);
(statearr_37616[18] = inst_37540);
(statearr_37616[19] = inst_37577);
(statearr_37616[10] = inst_37541);
(statearr_37616[20] = inst_37538);
return statearr_37616;
})();var statearr_37617_37695 = state_37602__$1;(statearr_37617_37695[2] = null);
(statearr_37617_37695[1] = 25);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 4))
{var inst_37470 = (state_37602[21]);var inst_37470__$1 = (state_37602[2]);var inst_37471 = (inst_37470__$1 == null);var state_37602__$1 = (function (){var statearr_37618 = state_37602;(statearr_37618[21] = inst_37470__$1);
return statearr_37618;
})();if(cljs.core.truth_(inst_37471))
{var statearr_37619_37696 = state_37602__$1;(statearr_37619_37696[1] = 5);
} else
{var statearr_37620_37697 = state_37602__$1;(statearr_37620_37697[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 15))
{var inst_37479 = (state_37602[12]);var inst_37481 = (state_37602[14]);var inst_37482 = (state_37602[15]);var inst_37480 = (state_37602[16]);var inst_37495 = (state_37602[2]);var inst_37496 = (inst_37482 + 1);var tmp37613 = inst_37479;var tmp37614 = inst_37481;var tmp37615 = inst_37480;var inst_37479__$1 = tmp37613;var inst_37480__$1 = tmp37615;var inst_37481__$1 = tmp37614;var inst_37482__$1 = inst_37496;var state_37602__$1 = (function (){var statearr_37621 = state_37602;(statearr_37621[22] = inst_37495);
(statearr_37621[12] = inst_37479__$1);
(statearr_37621[14] = inst_37481__$1);
(statearr_37621[15] = inst_37482__$1);
(statearr_37621[16] = inst_37480__$1);
return statearr_37621;
})();var statearr_37622_37698 = state_37602__$1;(statearr_37622_37698[2] = null);
(statearr_37622_37698[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 21))
{var inst_37520 = (state_37602[2]);var state_37602__$1 = state_37602;var statearr_37623_37699 = state_37602__$1;(statearr_37623_37699[2] = inst_37520);
(statearr_37623_37699[1] = 18);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 31))
{var inst_37546 = (state_37602[11]);var inst_37547 = (state_37602[2]);var inst_37548 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37549 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37546);var state_37602__$1 = (function (){var statearr_37624 = state_37602;(statearr_37624[23] = inst_37548);
(statearr_37624[24] = inst_37547);
return statearr_37624;
})();var statearr_37625_37700 = state_37602__$1;(statearr_37625_37700[2] = inst_37549);
cljs.core.async.impl.ioc_helpers.process_exception(state_37602__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 32))
{var inst_37546 = (state_37602[11]);var inst_37470 = (state_37602[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37602,31,Object,null,30);var inst_37553 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37546,inst_37470,done);var state_37602__$1 = state_37602;var statearr_37626_37701 = state_37602__$1;(statearr_37626_37701[2] = inst_37553);
cljs.core.async.impl.ioc_helpers.process_exception(state_37602__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 40))
{var inst_37568 = (state_37602[25]);var inst_37569 = (state_37602[2]);var inst_37570 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37571 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37568);var state_37602__$1 = (function (){var statearr_37627 = state_37602;(statearr_37627[26] = inst_37569);
(statearr_37627[27] = inst_37570);
return statearr_37627;
})();var statearr_37628_37702 = state_37602__$1;(statearr_37628_37702[2] = inst_37571);
cljs.core.async.impl.ioc_helpers.process_exception(state_37602__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 33))
{var inst_37559 = (state_37602[17]);var inst_37561 = cljs.core.chunked_seq_QMARK_(inst_37559);var state_37602__$1 = state_37602;if(inst_37561)
{var statearr_37629_37703 = state_37602__$1;(statearr_37629_37703[1] = 36);
} else
{var statearr_37630_37704 = state_37602__$1;(statearr_37630_37704[1] = 37);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 13))
{var inst_37489 = (state_37602[28]);var inst_37492 = cljs.core.async.close_BANG_(inst_37489);var state_37602__$1 = state_37602;var statearr_37631_37705 = state_37602__$1;(statearr_37631_37705[2] = inst_37492);
(statearr_37631_37705[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 22))
{var inst_37510 = (state_37602[8]);var inst_37513 = cljs.core.async.close_BANG_(inst_37510);var state_37602__$1 = state_37602;var statearr_37632_37706 = state_37602__$1;(statearr_37632_37706[2] = inst_37513);
(statearr_37632_37706[1] = 24);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 36))
{var inst_37559 = (state_37602[17]);var inst_37563 = cljs.core.chunk_first(inst_37559);var inst_37564 = cljs.core.chunk_rest(inst_37559);var inst_37565 = cljs.core.count(inst_37563);var inst_37538 = inst_37564;var inst_37539 = inst_37563;var inst_37540 = inst_37565;var inst_37541 = 0;var state_37602__$1 = (function (){var statearr_37633 = state_37602;(statearr_37633[9] = inst_37539);
(statearr_37633[18] = inst_37540);
(statearr_37633[10] = inst_37541);
(statearr_37633[20] = inst_37538);
return statearr_37633;
})();var statearr_37634_37707 = state_37602__$1;(statearr_37634_37707[2] = null);
(statearr_37634_37707[1] = 25);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 41))
{var inst_37470 = (state_37602[21]);var inst_37568 = (state_37602[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37602,40,Object,null,39);var inst_37575 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37568,inst_37470,done);var state_37602__$1 = state_37602;var statearr_37635_37708 = state_37602__$1;(statearr_37635_37708[2] = inst_37575);
cljs.core.async.impl.ioc_helpers.process_exception(state_37602__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 43))
{var state_37602__$1 = state_37602;var statearr_37636_37709 = state_37602__$1;(statearr_37636_37709[2] = null);
(statearr_37636_37709[1] = 44);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 29))
{var inst_37586 = (state_37602[2]);var state_37602__$1 = state_37602;var statearr_37637_37710 = state_37602__$1;(statearr_37637_37710[2] = inst_37586);
(statearr_37637_37710[1] = 26);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 44))
{var inst_37595 = (state_37602[2]);var state_37602__$1 = (function (){var statearr_37638 = state_37602;(statearr_37638[29] = inst_37595);
return statearr_37638;
})();var statearr_37639_37711 = state_37602__$1;(statearr_37639_37711[2] = null);
(statearr_37639_37711[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 6))
{var inst_37530 = (state_37602[30]);var inst_37529 = cljs.core.deref(cs);var inst_37530__$1 = cljs.core.keys(inst_37529);var inst_37531 = cljs.core.count(inst_37530__$1);var inst_37532 = cljs.core.reset_BANG_(dctr,inst_37531);var inst_37537 = cljs.core.seq(inst_37530__$1);var inst_37538 = inst_37537;var inst_37539 = null;var inst_37540 = 0;var inst_37541 = 0;var state_37602__$1 = (function (){var statearr_37640 = state_37602;(statearr_37640[9] = inst_37539);
(statearr_37640[18] = inst_37540);
(statearr_37640[10] = inst_37541);
(statearr_37640[31] = inst_37532);
(statearr_37640[20] = inst_37538);
(statearr_37640[30] = inst_37530__$1);
return statearr_37640;
})();var statearr_37641_37712 = state_37602__$1;(statearr_37641_37712[2] = null);
(statearr_37641_37712[1] = 25);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 28))
{var inst_37559 = (state_37602[17]);var inst_37538 = (state_37602[20]);var inst_37559__$1 = cljs.core.seq(inst_37538);var state_37602__$1 = (function (){var statearr_37642 = state_37602;(statearr_37642[17] = inst_37559__$1);
return statearr_37642;
})();if(inst_37559__$1)
{var statearr_37643_37713 = state_37602__$1;(statearr_37643_37713[1] = 33);
} else
{var statearr_37644_37714 = state_37602__$1;(statearr_37644_37714[1] = 34);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 25))
{var inst_37540 = (state_37602[18]);var inst_37541 = (state_37602[10]);var inst_37543 = (inst_37541 < inst_37540);var inst_37544 = inst_37543;var state_37602__$1 = state_37602;if(cljs.core.truth_(inst_37544))
{var statearr_37645_37715 = state_37602__$1;(statearr_37645_37715[1] = 27);
} else
{var statearr_37646_37716 = state_37602__$1;(statearr_37646_37716[1] = 28);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 34))
{var state_37602__$1 = state_37602;var statearr_37647_37717 = state_37602__$1;(statearr_37647_37717[2] = null);
(statearr_37647_37717[1] = 35);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 17))
{var state_37602__$1 = state_37602;var statearr_37648_37718 = state_37602__$1;(statearr_37648_37718[2] = null);
(statearr_37648_37718[1] = 18);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 3))
{var inst_37600 = (state_37602[2]);var state_37602__$1 = state_37602;return cljs.core.async.impl.ioc_helpers.return_chan(state_37602__$1,inst_37600);
} else
{if((state_val_37603 === 12))
{var inst_37525 = (state_37602[2]);var state_37602__$1 = state_37602;var statearr_37649_37719 = state_37602__$1;(statearr_37649_37719[2] = inst_37525);
(statearr_37649_37719[1] = 9);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 2))
{var state_37602__$1 = state_37602;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37602__$1,4,ch);
} else
{if((state_val_37603 === 23))
{var state_37602__$1 = state_37602;var statearr_37650_37720 = state_37602__$1;(statearr_37650_37720[2] = null);
(statearr_37650_37720[1] = 24);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 35))
{var inst_37584 = (state_37602[2]);var state_37602__$1 = state_37602;var statearr_37651_37721 = state_37602__$1;(statearr_37651_37721[2] = inst_37584);
(statearr_37651_37721[1] = 29);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 19))
{var inst_37499 = (state_37602[7]);var inst_37503 = cljs.core.chunk_first(inst_37499);var inst_37504 = cljs.core.chunk_rest(inst_37499);var inst_37505 = cljs.core.count(inst_37503);var inst_37479 = inst_37504;var inst_37480 = inst_37503;var inst_37481 = inst_37505;var inst_37482 = 0;var state_37602__$1 = (function (){var statearr_37652 = state_37602;(statearr_37652[12] = inst_37479);
(statearr_37652[14] = inst_37481);
(statearr_37652[15] = inst_37482);
(statearr_37652[16] = inst_37480);
return statearr_37652;
})();var statearr_37653_37722 = state_37602__$1;(statearr_37653_37722[2] = null);
(statearr_37653_37722[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 11))
{var inst_37479 = (state_37602[12]);var inst_37499 = (state_37602[7]);var inst_37499__$1 = cljs.core.seq(inst_37479);var state_37602__$1 = (function (){var statearr_37654 = state_37602;(statearr_37654[7] = inst_37499__$1);
return statearr_37654;
})();if(inst_37499__$1)
{var statearr_37655_37723 = state_37602__$1;(statearr_37655_37723[1] = 16);
} else
{var statearr_37656_37724 = state_37602__$1;(statearr_37656_37724[1] = 17);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 9))
{var inst_37527 = (state_37602[2]);var state_37602__$1 = state_37602;var statearr_37657_37725 = state_37602__$1;(statearr_37657_37725[2] = inst_37527);
(statearr_37657_37725[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 5))
{var inst_37477 = cljs.core.deref(cs);var inst_37478 = cljs.core.seq(inst_37477);var inst_37479 = inst_37478;var inst_37480 = null;var inst_37481 = 0;var inst_37482 = 0;var state_37602__$1 = (function (){var statearr_37658 = state_37602;(statearr_37658[12] = inst_37479);
(statearr_37658[14] = inst_37481);
(statearr_37658[15] = inst_37482);
(statearr_37658[16] = inst_37480);
return statearr_37658;
})();var statearr_37659_37726 = state_37602__$1;(statearr_37659_37726[2] = null);
(statearr_37659_37726[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 14))
{var state_37602__$1 = state_37602;var statearr_37660_37727 = state_37602__$1;(statearr_37660_37727[2] = null);
(statearr_37660_37727[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 45))
{var inst_37592 = (state_37602[2]);var state_37602__$1 = state_37602;var statearr_37661_37728 = state_37602__$1;(statearr_37661_37728[2] = inst_37592);
(statearr_37661_37728[1] = 44);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 26))
{var inst_37530 = (state_37602[30]);var inst_37588 = (state_37602[2]);var inst_37589 = cljs.core.seq(inst_37530);var state_37602__$1 = (function (){var statearr_37662 = state_37602;(statearr_37662[32] = inst_37588);
return statearr_37662;
})();if(inst_37589)
{var statearr_37663_37729 = state_37602__$1;(statearr_37663_37729[1] = 42);
} else
{var statearr_37664_37730 = state_37602__$1;(statearr_37664_37730[1] = 43);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 16))
{var inst_37499 = (state_37602[7]);var inst_37501 = cljs.core.chunked_seq_QMARK_(inst_37499);var state_37602__$1 = state_37602;if(inst_37501)
{var statearr_37668_37731 = state_37602__$1;(statearr_37668_37731[1] = 19);
} else
{var statearr_37669_37732 = state_37602__$1;(statearr_37669_37732[1] = 20);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 38))
{var inst_37581 = (state_37602[2]);var state_37602__$1 = state_37602;var statearr_37670_37733 = state_37602__$1;(statearr_37670_37733[2] = inst_37581);
(statearr_37670_37733[1] = 35);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 30))
{var inst_37539 = (state_37602[9]);var inst_37540 = (state_37602[18]);var inst_37541 = (state_37602[10]);var inst_37538 = (state_37602[20]);var inst_37555 = (state_37602[2]);var inst_37556 = (inst_37541 + 1);var tmp37665 = inst_37539;var tmp37666 = inst_37540;var tmp37667 = inst_37538;var inst_37538__$1 = tmp37667;var inst_37539__$1 = tmp37665;var inst_37540__$1 = tmp37666;var inst_37541__$1 = inst_37556;var state_37602__$1 = (function (){var statearr_37671 = state_37602;(statearr_37671[33] = inst_37555);
(statearr_37671[9] = inst_37539__$1);
(statearr_37671[18] = inst_37540__$1);
(statearr_37671[10] = inst_37541__$1);
(statearr_37671[20] = inst_37538__$1);
return statearr_37671;
})();var statearr_37672_37734 = state_37602__$1;(statearr_37672_37734[2] = null);
(statearr_37672_37734[1] = 25);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 10))
{var inst_37482 = (state_37602[15]);var inst_37480 = (state_37602[16]);var inst_37488 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37480,inst_37482);var inst_37489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37488,0,null);var inst_37490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37488,1,null);var state_37602__$1 = (function (){var statearr_37673 = state_37602;(statearr_37673[28] = inst_37489);
return statearr_37673;
})();if(cljs.core.truth_(inst_37490))
{var statearr_37674_37735 = state_37602__$1;(statearr_37674_37735[1] = 13);
} else
{var statearr_37675_37736 = state_37602__$1;(statearr_37675_37736[1] = 14);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 18))
{var inst_37523 = (state_37602[2]);var state_37602__$1 = state_37602;var statearr_37676_37737 = state_37602__$1;(statearr_37676_37737[2] = inst_37523);
(statearr_37676_37737[1] = 12);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 42))
{var state_37602__$1 = state_37602;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37602__$1,45,dchan);
} else
{if((state_val_37603 === 37))
{var inst_37559 = (state_37602[17]);var inst_37568 = cljs.core.first(inst_37559);var state_37602__$1 = (function (){var statearr_37677 = state_37602;(statearr_37677[25] = inst_37568);
return statearr_37677;
})();var statearr_37678_37738 = state_37602__$1;(statearr_37678_37738[2] = null);
(statearr_37678_37738[1] = 41);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37603 === 8))
{var inst_37481 = (state_37602[14]);var inst_37482 = (state_37602[15]);var inst_37484 = (inst_37482 < inst_37481);var inst_37485 = inst_37484;var state_37602__$1 = state_37602;if(cljs.core.truth_(inst_37485))
{var statearr_37679_37739 = state_37602__$1;(statearr_37679_37739[1] = 10);
} else
{var statearr_37680_37740 = state_37602__$1;(statearr_37680_37740[1] = 11);
}
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto___37688,cs,m,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___37688,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_37684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37684[0] = state_machine__5675__auto__);
(statearr_37684[1] = 1);
return statearr_37684;
});
var state_machine__5675__auto____1 = (function (state_37602){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_37602);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e37685){if((e37685 instanceof Object))
{var ex__5678__auto__ = e37685;var statearr_37686_37741 = state_37602;(statearr_37686_37741[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37602);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e37685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__37742 = state_37602;
state_37602 = G__37742;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_37602){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_37602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___37688,cs,m,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_37687 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_37687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___37688);
return statearr_37687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___37688,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj37744 = {};return obj37744;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,null,cljs.core.constant$keyword$599,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$600);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$599);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$600,chs);var pauses = pick(cljs.core.constant$keyword$598,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$601,solos,cljs.core.constant$keyword$602,pick(cljs.core.constant$keyword$599,chs),cljs.core.constant$keyword$603,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$598)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t37854 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37854 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37855){
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
this.meta37855 = meta37855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37854.cljs$lang$type = true;
cljs.core.async.t37854.cljs$lang$ctorStr = "cljs.core.async/t37854";
cljs.core.async.t37854.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t37854");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37854.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t37854.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37854.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37854.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37854.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37854.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37854.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37856){var self__ = this;
var _37856__$1 = this;return self__.meta37855;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37856,meta37855__$1){var self__ = this;
var _37856__$1 = this;return (new cljs.core.async.t37854(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37855__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t37854 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37854(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37855){return (new cljs.core.async.t37854(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37855));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t37854(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5689__auto___37963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___37963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___37963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37921){var state_val_37922 = (state_37921[1]);if((state_val_37922 === 7))
{var inst_37870 = (state_37921[7]);var inst_37875 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37870);var state_37921__$1 = state_37921;var statearr_37923_37964 = state_37921__$1;(statearr_37923_37964[2] = inst_37875);
(statearr_37923_37964[1] = 9);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 20))
{var inst_37885 = (state_37921[8]);var state_37921__$1 = state_37921;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37921__$1,23,out,inst_37885);
} else
{if((state_val_37922 === 1))
{var inst_37860 = (state_37921[9]);var inst_37860__$1 = calc_state();var inst_37861 = cljs.core.seq_QMARK_(inst_37860__$1);var state_37921__$1 = (function (){var statearr_37924 = state_37921;(statearr_37924[9] = inst_37860__$1);
return statearr_37924;
})();if(inst_37861)
{var statearr_37925_37965 = state_37921__$1;(statearr_37925_37965[1] = 2);
} else
{var statearr_37926_37966 = state_37921__$1;(statearr_37926_37966[1] = 3);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 4))
{var inst_37860 = (state_37921[9]);var inst_37866 = (state_37921[2]);var inst_37867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37866,cljs.core.constant$keyword$603);var inst_37868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37866,cljs.core.constant$keyword$602);var inst_37869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37866,cljs.core.constant$keyword$601);var inst_37870 = inst_37860;var state_37921__$1 = (function (){var statearr_37927 = state_37921;(statearr_37927[10] = inst_37869);
(statearr_37927[11] = inst_37867);
(statearr_37927[12] = inst_37868);
(statearr_37927[7] = inst_37870);
return statearr_37927;
})();var statearr_37928_37967 = state_37921__$1;(statearr_37928_37967[2] = null);
(statearr_37928_37967[1] = 5);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 15))
{var state_37921__$1 = state_37921;var statearr_37929_37968 = state_37921__$1;(statearr_37929_37968[2] = null);
(statearr_37929_37968[1] = 16);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 21))
{var state_37921__$1 = state_37921;var statearr_37930_37969 = state_37921__$1;(statearr_37930_37969[2] = null);
(statearr_37930_37969[1] = 22);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 13))
{var inst_37917 = (state_37921[2]);var state_37921__$1 = state_37921;var statearr_37931_37970 = state_37921__$1;(statearr_37931_37970[2] = inst_37917);
(statearr_37931_37970[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 22))
{var inst_37878 = (state_37921[13]);var inst_37914 = (state_37921[2]);var inst_37870 = inst_37878;var state_37921__$1 = (function (){var statearr_37932 = state_37921;(statearr_37932[14] = inst_37914);
(statearr_37932[7] = inst_37870);
return statearr_37932;
})();var statearr_37933_37971 = state_37921__$1;(statearr_37933_37971[2] = null);
(statearr_37933_37971[1] = 5);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 6))
{var inst_37919 = (state_37921[2]);var state_37921__$1 = state_37921;return cljs.core.async.impl.ioc_helpers.return_chan(state_37921__$1,inst_37919);
} else
{if((state_val_37922 === 17))
{var inst_37900 = (state_37921[15]);var state_37921__$1 = state_37921;var statearr_37934_37972 = state_37921__$1;(statearr_37934_37972[2] = inst_37900);
(statearr_37934_37972[1] = 19);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 3))
{var inst_37860 = (state_37921[9]);var state_37921__$1 = state_37921;var statearr_37935_37973 = state_37921__$1;(statearr_37935_37973[2] = inst_37860);
(statearr_37935_37973[1] = 4);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 12))
{var inst_37900 = (state_37921[15]);var inst_37886 = (state_37921[16]);var inst_37881 = (state_37921[17]);var inst_37900__$1 = (inst_37881.cljs$core$IFn$_invoke$arity$1 ? inst_37881.cljs$core$IFn$_invoke$arity$1(inst_37886) : inst_37881.call(null,inst_37886));var state_37921__$1 = (function (){var statearr_37936 = state_37921;(statearr_37936[15] = inst_37900__$1);
return statearr_37936;
})();if(cljs.core.truth_(inst_37900__$1))
{var statearr_37937_37974 = state_37921__$1;(statearr_37937_37974[1] = 17);
} else
{var statearr_37938_37975 = state_37921__$1;(statearr_37938_37975[1] = 18);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 2))
{var inst_37860 = (state_37921[9]);var inst_37863 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37860);var state_37921__$1 = state_37921;var statearr_37939_37976 = state_37921__$1;(statearr_37939_37976[2] = inst_37863);
(statearr_37939_37976[1] = 4);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 23))
{var inst_37911 = (state_37921[2]);var state_37921__$1 = state_37921;var statearr_37940_37977 = state_37921__$1;(statearr_37940_37977[2] = inst_37911);
(statearr_37940_37977[1] = 22);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 19))
{var inst_37908 = (state_37921[2]);var state_37921__$1 = state_37921;if(cljs.core.truth_(inst_37908))
{var statearr_37941_37978 = state_37921__$1;(statearr_37941_37978[1] = 20);
} else
{var statearr_37942_37979 = state_37921__$1;(statearr_37942_37979[1] = 21);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 11))
{var inst_37885 = (state_37921[8]);var inst_37891 = (inst_37885 == null);var state_37921__$1 = state_37921;if(cljs.core.truth_(inst_37891))
{var statearr_37943_37980 = state_37921__$1;(statearr_37943_37980[1] = 14);
} else
{var statearr_37944_37981 = state_37921__$1;(statearr_37944_37981[1] = 15);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 9))
{var inst_37878 = (state_37921[13]);var inst_37878__$1 = (state_37921[2]);var inst_37879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37878__$1,cljs.core.constant$keyword$603);var inst_37880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37878__$1,cljs.core.constant$keyword$602);var inst_37881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37878__$1,cljs.core.constant$keyword$601);var state_37921__$1 = (function (){var statearr_37945 = state_37921;(statearr_37945[18] = inst_37880);
(statearr_37945[17] = inst_37881);
(statearr_37945[13] = inst_37878__$1);
return statearr_37945;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37921__$1,10,inst_37879);
} else
{if((state_val_37922 === 5))
{var inst_37870 = (state_37921[7]);var inst_37873 = cljs.core.seq_QMARK_(inst_37870);var state_37921__$1 = state_37921;if(inst_37873)
{var statearr_37946_37982 = state_37921__$1;(statearr_37946_37982[1] = 7);
} else
{var statearr_37947_37983 = state_37921__$1;(statearr_37947_37983[1] = 8);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 14))
{var inst_37886 = (state_37921[16]);var inst_37893 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37886);var state_37921__$1 = state_37921;var statearr_37948_37984 = state_37921__$1;(statearr_37948_37984[2] = inst_37893);
(statearr_37948_37984[1] = 16);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 16))
{var inst_37896 = (state_37921[2]);var inst_37897 = calc_state();var inst_37870 = inst_37897;var state_37921__$1 = (function (){var statearr_37949 = state_37921;(statearr_37949[19] = inst_37896);
(statearr_37949[7] = inst_37870);
return statearr_37949;
})();var statearr_37950_37985 = state_37921__$1;(statearr_37950_37985[2] = null);
(statearr_37950_37985[1] = 5);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 10))
{var inst_37886 = (state_37921[16]);var inst_37885 = (state_37921[8]);var inst_37884 = (state_37921[2]);var inst_37885__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37884,0,null);var inst_37886__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37884,1,null);var inst_37887 = (inst_37885__$1 == null);var inst_37888 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37886__$1,change);var inst_37889 = (inst_37887) || (inst_37888);var state_37921__$1 = (function (){var statearr_37951 = state_37921;(statearr_37951[16] = inst_37886__$1);
(statearr_37951[8] = inst_37885__$1);
return statearr_37951;
})();if(cljs.core.truth_(inst_37889))
{var statearr_37952_37986 = state_37921__$1;(statearr_37952_37986[1] = 11);
} else
{var statearr_37953_37987 = state_37921__$1;(statearr_37953_37987[1] = 12);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 18))
{var inst_37886 = (state_37921[16]);var inst_37880 = (state_37921[18]);var inst_37881 = (state_37921[17]);var inst_37903 = cljs.core.empty_QMARK_(inst_37881);var inst_37904 = (inst_37880.cljs$core$IFn$_invoke$arity$1 ? inst_37880.cljs$core$IFn$_invoke$arity$1(inst_37886) : inst_37880.call(null,inst_37886));var inst_37905 = cljs.core.not(inst_37904);var inst_37906 = (inst_37903) && (inst_37905);var state_37921__$1 = state_37921;var statearr_37954_37988 = state_37921__$1;(statearr_37954_37988[2] = inst_37906);
(statearr_37954_37988[1] = 19);
return cljs.core.constant$keyword$591;
} else
{if((state_val_37922 === 8))
{var inst_37870 = (state_37921[7]);var state_37921__$1 = state_37921;var statearr_37955_37989 = state_37921__$1;(statearr_37955_37989[2] = inst_37870);
(statearr_37955_37989[1] = 9);
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto___37963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5674__auto__,c__5689__auto___37963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_37959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37959[0] = state_machine__5675__auto__);
(statearr_37959[1] = 1);
return statearr_37959;
});
var state_machine__5675__auto____1 = (function (state_37921){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_37921);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e37960){if((e37960 instanceof Object))
{var ex__5678__auto__ = e37960;var statearr_37961_37990 = state_37921;(statearr_37961_37990[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37921);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e37960;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__37991 = state_37921;
state_37921 = G__37991;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_37921){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_37921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___37963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5691__auto__ = (function (){var statearr_37962 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_37962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___37963);
return statearr_37962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___37963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj37993 = {};return obj37993;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
return (function (topic){var or__3539__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3539__auto__,mults){
return (function (p1__37994_SHARP_){if(cljs.core.truth_((p1__37994_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37994_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37994_SHARP_.call(null,topic))))
{return p1__37994_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37994_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3539__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t38119 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38119 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38120){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38120 = meta38120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38119.cljs$lang$type = true;
cljs.core.async.t38119.cljs$lang$ctorStr = "cljs.core.async/t38119";
cljs.core.async.t38119.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"cljs.core.async/t38119");
});})(mults,ensure_mult))
;
cljs.core.async.t38119.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t38119.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t38119.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t38119.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t38119.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t38119.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t38119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38121){var self__ = this;
var _38121__$1 = this;return self__.meta38120;
});})(mults,ensure_mult))
;
cljs.core.async.t38119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38121,meta38120__$1){var self__ = this;
var _38121__$1 = this;return (new cljs.core.async.t38119(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38120__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t38119 = ((function (mults,ensure_mult){
return (function __GT_t38119(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38120){return (new cljs.core.async.t38119(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38120));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t38119(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5689__auto___38243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38243,mults,ensure_mult,p){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38243,mults,ensure_mult,p){
return (function (state_38195){var state_val_38196 = (state_38195[1]);if((state_val_38196 === 7))
{var inst_38191 = (state_38195[2]);var state_38195__$1 = state_38195;var statearr_38197_38244 = state_38195__$1;(statearr_38197_38244[2] = inst_38191);
(statearr_38197_38244[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 20))
{var state_38195__$1 = state_38195;var statearr_38198_38245 = state_38195__$1;(statearr_38198_38245[2] = null);
(statearr_38198_38245[1] = 21);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 1))
{var state_38195__$1 = state_38195;var statearr_38199_38246 = state_38195__$1;(statearr_38199_38246[2] = null);
(statearr_38199_38246[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 24))
{var inst_38174 = (state_38195[7]);var inst_38124 = (state_38195[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38195,23,Object,null,22);var inst_38181 = cljs.core.async.muxch_STAR_(inst_38174);var state_38195__$1 = state_38195;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38195__$1,25,inst_38181,inst_38124);
} else
{if((state_val_38196 === 4))
{var inst_38124 = (state_38195[8]);var inst_38124__$1 = (state_38195[2]);var inst_38125 = (inst_38124__$1 == null);var state_38195__$1 = (function (){var statearr_38200 = state_38195;(statearr_38200[8] = inst_38124__$1);
return statearr_38200;
})();if(cljs.core.truth_(inst_38125))
{var statearr_38201_38247 = state_38195__$1;(statearr_38201_38247[1] = 5);
} else
{var statearr_38202_38248 = state_38195__$1;(statearr_38202_38248[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 15))
{var inst_38166 = (state_38195[2]);var state_38195__$1 = state_38195;var statearr_38203_38249 = state_38195__$1;(statearr_38203_38249[2] = inst_38166);
(statearr_38203_38249[1] = 12);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 21))
{var inst_38188 = (state_38195[2]);var state_38195__$1 = (function (){var statearr_38204 = state_38195;(statearr_38204[9] = inst_38188);
return statearr_38204;
})();var statearr_38205_38250 = state_38195__$1;(statearr_38205_38250[2] = null);
(statearr_38205_38250[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 13))
{var inst_38148 = (state_38195[10]);var inst_38150 = cljs.core.chunked_seq_QMARK_(inst_38148);var state_38195__$1 = state_38195;if(inst_38150)
{var statearr_38206_38251 = state_38195__$1;(statearr_38206_38251[1] = 16);
} else
{var statearr_38207_38252 = state_38195__$1;(statearr_38207_38252[1] = 17);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 22))
{var inst_38185 = (state_38195[2]);var state_38195__$1 = state_38195;var statearr_38208_38253 = state_38195__$1;(statearr_38208_38253[2] = inst_38185);
(statearr_38208_38253[1] = 21);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 6))
{var inst_38174 = (state_38195[7]);var inst_38172 = (state_38195[11]);var inst_38124 = (state_38195[8]);var inst_38172__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38124) : topic_fn.call(null,inst_38124));var inst_38173 = cljs.core.deref(mults);var inst_38174__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38173,inst_38172__$1);var state_38195__$1 = (function (){var statearr_38209 = state_38195;(statearr_38209[7] = inst_38174__$1);
(statearr_38209[11] = inst_38172__$1);
return statearr_38209;
})();if(cljs.core.truth_(inst_38174__$1))
{var statearr_38210_38254 = state_38195__$1;(statearr_38210_38254[1] = 19);
} else
{var statearr_38211_38255 = state_38195__$1;(statearr_38211_38255[1] = 20);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 25))
{var inst_38183 = (state_38195[2]);var state_38195__$1 = state_38195;var statearr_38212_38256 = state_38195__$1;(statearr_38212_38256[2] = inst_38183);
cljs.core.async.impl.ioc_helpers.process_exception(state_38195__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 17))
{var inst_38148 = (state_38195[10]);var inst_38157 = cljs.core.first(inst_38148);var inst_38158 = cljs.core.async.muxch_STAR_(inst_38157);var inst_38159 = cljs.core.async.close_BANG_(inst_38158);var inst_38160 = cljs.core.next(inst_38148);var inst_38134 = inst_38160;var inst_38135 = null;var inst_38136 = 0;var inst_38137 = 0;var state_38195__$1 = (function (){var statearr_38213 = state_38195;(statearr_38213[12] = inst_38159);
(statearr_38213[13] = inst_38134);
(statearr_38213[14] = inst_38135);
(statearr_38213[15] = inst_38137);
(statearr_38213[16] = inst_38136);
return statearr_38213;
})();var statearr_38214_38257 = state_38195__$1;(statearr_38214_38257[2] = null);
(statearr_38214_38257[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 3))
{var inst_38193 = (state_38195[2]);var state_38195__$1 = state_38195;return cljs.core.async.impl.ioc_helpers.return_chan(state_38195__$1,inst_38193);
} else
{if((state_val_38196 === 12))
{var inst_38168 = (state_38195[2]);var state_38195__$1 = state_38195;var statearr_38215_38258 = state_38195__$1;(statearr_38215_38258[2] = inst_38168);
(statearr_38215_38258[1] = 9);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 2))
{var state_38195__$1 = state_38195;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38195__$1,4,ch);
} else
{if((state_val_38196 === 23))
{var inst_38172 = (state_38195[11]);var inst_38176 = (state_38195[2]);var inst_38177 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38172);var state_38195__$1 = (function (){var statearr_38216 = state_38195;(statearr_38216[17] = inst_38176);
return statearr_38216;
})();var statearr_38217_38259 = state_38195__$1;(statearr_38217_38259[2] = inst_38177);
cljs.core.async.impl.ioc_helpers.process_exception(state_38195__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 19))
{var state_38195__$1 = state_38195;var statearr_38218_38260 = state_38195__$1;(statearr_38218_38260[2] = null);
(statearr_38218_38260[1] = 24);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 11))
{var inst_38134 = (state_38195[13]);var inst_38148 = (state_38195[10]);var inst_38148__$1 = cljs.core.seq(inst_38134);var state_38195__$1 = (function (){var statearr_38219 = state_38195;(statearr_38219[10] = inst_38148__$1);
return statearr_38219;
})();if(inst_38148__$1)
{var statearr_38220_38261 = state_38195__$1;(statearr_38220_38261[1] = 13);
} else
{var statearr_38221_38262 = state_38195__$1;(statearr_38221_38262[1] = 14);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 9))
{var inst_38170 = (state_38195[2]);var state_38195__$1 = state_38195;var statearr_38222_38263 = state_38195__$1;(statearr_38222_38263[2] = inst_38170);
(statearr_38222_38263[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 5))
{var inst_38131 = cljs.core.deref(mults);var inst_38132 = cljs.core.vals(inst_38131);var inst_38133 = cljs.core.seq(inst_38132);var inst_38134 = inst_38133;var inst_38135 = null;var inst_38136 = 0;var inst_38137 = 0;var state_38195__$1 = (function (){var statearr_38223 = state_38195;(statearr_38223[13] = inst_38134);
(statearr_38223[14] = inst_38135);
(statearr_38223[15] = inst_38137);
(statearr_38223[16] = inst_38136);
return statearr_38223;
})();var statearr_38224_38264 = state_38195__$1;(statearr_38224_38264[2] = null);
(statearr_38224_38264[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 14))
{var state_38195__$1 = state_38195;var statearr_38228_38265 = state_38195__$1;(statearr_38228_38265[2] = null);
(statearr_38228_38265[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 16))
{var inst_38148 = (state_38195[10]);var inst_38152 = cljs.core.chunk_first(inst_38148);var inst_38153 = cljs.core.chunk_rest(inst_38148);var inst_38154 = cljs.core.count(inst_38152);var inst_38134 = inst_38153;var inst_38135 = inst_38152;var inst_38136 = inst_38154;var inst_38137 = 0;var state_38195__$1 = (function (){var statearr_38229 = state_38195;(statearr_38229[13] = inst_38134);
(statearr_38229[14] = inst_38135);
(statearr_38229[15] = inst_38137);
(statearr_38229[16] = inst_38136);
return statearr_38229;
})();var statearr_38230_38266 = state_38195__$1;(statearr_38230_38266[2] = null);
(statearr_38230_38266[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 10))
{var inst_38134 = (state_38195[13]);var inst_38135 = (state_38195[14]);var inst_38137 = (state_38195[15]);var inst_38136 = (state_38195[16]);var inst_38142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38135,inst_38137);var inst_38143 = cljs.core.async.muxch_STAR_(inst_38142);var inst_38144 = cljs.core.async.close_BANG_(inst_38143);var inst_38145 = (inst_38137 + 1);var tmp38225 = inst_38134;var tmp38226 = inst_38135;var tmp38227 = inst_38136;var inst_38134__$1 = tmp38225;var inst_38135__$1 = tmp38226;var inst_38136__$1 = tmp38227;var inst_38137__$1 = inst_38145;var state_38195__$1 = (function (){var statearr_38231 = state_38195;(statearr_38231[13] = inst_38134__$1);
(statearr_38231[14] = inst_38135__$1);
(statearr_38231[18] = inst_38144);
(statearr_38231[15] = inst_38137__$1);
(statearr_38231[16] = inst_38136__$1);
return statearr_38231;
})();var statearr_38232_38267 = state_38195__$1;(statearr_38232_38267[2] = null);
(statearr_38232_38267[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 18))
{var inst_38163 = (state_38195[2]);var state_38195__$1 = state_38195;var statearr_38233_38268 = state_38195__$1;(statearr_38233_38268[2] = inst_38163);
(statearr_38233_38268[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38196 === 8))
{var inst_38137 = (state_38195[15]);var inst_38136 = (state_38195[16]);var inst_38139 = (inst_38137 < inst_38136);var inst_38140 = inst_38139;var state_38195__$1 = state_38195;if(cljs.core.truth_(inst_38140))
{var statearr_38234_38269 = state_38195__$1;(statearr_38234_38269[1] = 10);
} else
{var statearr_38235_38270 = state_38195__$1;(statearr_38235_38270[1] = 11);
}
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto___38243,mults,ensure_mult,p))
;return ((function (switch__5674__auto__,c__5689__auto___38243,mults,ensure_mult,p){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38239[0] = state_machine__5675__auto__);
(statearr_38239[1] = 1);
return statearr_38239;
});
var state_machine__5675__auto____1 = (function (state_38195){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38195);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38240){if((e38240 instanceof Object))
{var ex__5678__auto__ = e38240;var statearr_38241_38271 = state_38195;(statearr_38241_38271[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38195);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38240;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__38272 = state_38195;
state_38195 = G__38272;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38195){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38243,mults,ensure_mult,p))
})();var state__5691__auto__ = (function (){var statearr_38242 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38243);
return statearr_38242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38243,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5689__auto___38409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38409,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38409,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38379){var state_val_38380 = (state_38379[1]);if((state_val_38380 === 7))
{var state_38379__$1 = state_38379;var statearr_38381_38410 = state_38379__$1;(statearr_38381_38410[2] = null);
(statearr_38381_38410[1] = 8);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 1))
{var state_38379__$1 = state_38379;var statearr_38382_38411 = state_38379__$1;(statearr_38382_38411[2] = null);
(statearr_38382_38411[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 4))
{var inst_38343 = (state_38379[7]);var inst_38345 = (inst_38343 < cnt);var state_38379__$1 = state_38379;if(cljs.core.truth_(inst_38345))
{var statearr_38383_38412 = state_38379__$1;(statearr_38383_38412[1] = 6);
} else
{var statearr_38384_38413 = state_38379__$1;(statearr_38384_38413[1] = 7);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 15))
{var inst_38375 = (state_38379[2]);var state_38379__$1 = state_38379;var statearr_38385_38414 = state_38379__$1;(statearr_38385_38414[2] = inst_38375);
(statearr_38385_38414[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 13))
{var inst_38368 = cljs.core.async.close_BANG_(out);var state_38379__$1 = state_38379;var statearr_38386_38415 = state_38379__$1;(statearr_38386_38415[2] = inst_38368);
(statearr_38386_38415[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 6))
{var state_38379__$1 = state_38379;var statearr_38387_38416 = state_38379__$1;(statearr_38387_38416[2] = null);
(statearr_38387_38416[1] = 11);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 3))
{var inst_38377 = (state_38379[2]);var state_38379__$1 = state_38379;return cljs.core.async.impl.ioc_helpers.return_chan(state_38379__$1,inst_38377);
} else
{if((state_val_38380 === 12))
{var inst_38365 = (state_38379[8]);var inst_38365__$1 = (state_38379[2]);var inst_38366 = cljs.core.some(cljs.core.nil_QMARK_,inst_38365__$1);var state_38379__$1 = (function (){var statearr_38388 = state_38379;(statearr_38388[8] = inst_38365__$1);
return statearr_38388;
})();if(cljs.core.truth_(inst_38366))
{var statearr_38389_38417 = state_38379__$1;(statearr_38389_38417[1] = 13);
} else
{var statearr_38390_38418 = state_38379__$1;(statearr_38390_38418[1] = 14);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 2))
{var inst_38342 = cljs.core.reset_BANG_(dctr,cnt);var inst_38343 = 0;var state_38379__$1 = (function (){var statearr_38391 = state_38379;(statearr_38391[7] = inst_38343);
(statearr_38391[9] = inst_38342);
return statearr_38391;
})();var statearr_38392_38419 = state_38379__$1;(statearr_38392_38419[2] = null);
(statearr_38392_38419[1] = 4);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 11))
{var inst_38343 = (state_38379[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38379,10,Object,null,9);var inst_38352 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38343) : chs__$1.call(null,inst_38343));var inst_38353 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38343) : done.call(null,inst_38343));var inst_38354 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38352,inst_38353);var state_38379__$1 = state_38379;var statearr_38393_38420 = state_38379__$1;(statearr_38393_38420[2] = inst_38354);
cljs.core.async.impl.ioc_helpers.process_exception(state_38379__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 9))
{var inst_38343 = (state_38379[7]);var inst_38356 = (state_38379[2]);var inst_38357 = (inst_38343 + 1);var inst_38343__$1 = inst_38357;var state_38379__$1 = (function (){var statearr_38394 = state_38379;(statearr_38394[7] = inst_38343__$1);
(statearr_38394[10] = inst_38356);
return statearr_38394;
})();var statearr_38395_38421 = state_38379__$1;(statearr_38395_38421[2] = null);
(statearr_38395_38421[1] = 4);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 5))
{var inst_38363 = (state_38379[2]);var state_38379__$1 = (function (){var statearr_38396 = state_38379;(statearr_38396[11] = inst_38363);
return statearr_38396;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38379__$1,12,dchan);
} else
{if((state_val_38380 === 14))
{var inst_38365 = (state_38379[8]);var inst_38370 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38365);var state_38379__$1 = state_38379;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38379__$1,16,out,inst_38370);
} else
{if((state_val_38380 === 16))
{var inst_38372 = (state_38379[2]);var state_38379__$1 = (function (){var statearr_38397 = state_38379;(statearr_38397[12] = inst_38372);
return statearr_38397;
})();var statearr_38398_38422 = state_38379__$1;(statearr_38398_38422[2] = null);
(statearr_38398_38422[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 10))
{var inst_38347 = (state_38379[2]);var inst_38348 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_38379__$1 = (function (){var statearr_38399 = state_38379;(statearr_38399[13] = inst_38347);
return statearr_38399;
})();var statearr_38400_38423 = state_38379__$1;(statearr_38400_38423[2] = inst_38348);
cljs.core.async.impl.ioc_helpers.process_exception(state_38379__$1);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38380 === 8))
{var inst_38361 = (state_38379[2]);var state_38379__$1 = state_38379;var statearr_38401_38424 = state_38379__$1;(statearr_38401_38424[2] = inst_38361);
(statearr_38401_38424[1] = 5);
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto___38409,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___38409,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38405[0] = state_machine__5675__auto__);
(statearr_38405[1] = 1);
return statearr_38405;
});
var state_machine__5675__auto____1 = (function (state_38379){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38379);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38406){if((e38406 instanceof Object))
{var ex__5678__auto__ = e38406;var statearr_38407_38425 = state_38379;(statearr_38407_38425[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38379);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__38426 = state_38379;
state_38379 = G__38426;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38379){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38409,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_38408 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38409);
return statearr_38408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38409,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___38534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38534,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38534,out){
return (function (state_38510){var state_val_38511 = (state_38510[1]);if((state_val_38511 === 7))
{var inst_38489 = (state_38510[7]);var inst_38490 = (state_38510[8]);var inst_38489__$1 = (state_38510[2]);var inst_38490__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38489__$1,0,null);var inst_38491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38489__$1,1,null);var inst_38492 = (inst_38490__$1 == null);var state_38510__$1 = (function (){var statearr_38512 = state_38510;(statearr_38512[7] = inst_38489__$1);
(statearr_38512[9] = inst_38491);
(statearr_38512[8] = inst_38490__$1);
return statearr_38512;
})();if(cljs.core.truth_(inst_38492))
{var statearr_38513_38535 = state_38510__$1;(statearr_38513_38535[1] = 8);
} else
{var statearr_38514_38536 = state_38510__$1;(statearr_38514_38536[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38511 === 1))
{var inst_38481 = cljs.core.vec(chs);var inst_38482 = inst_38481;var state_38510__$1 = (function (){var statearr_38515 = state_38510;(statearr_38515[10] = inst_38482);
return statearr_38515;
})();var statearr_38516_38537 = state_38510__$1;(statearr_38516_38537[2] = null);
(statearr_38516_38537[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38511 === 4))
{var inst_38482 = (state_38510[10]);var state_38510__$1 = state_38510;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_38510__$1,7,inst_38482);
} else
{if((state_val_38511 === 6))
{var inst_38506 = (state_38510[2]);var state_38510__$1 = state_38510;var statearr_38517_38538 = state_38510__$1;(statearr_38517_38538[2] = inst_38506);
(statearr_38517_38538[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38511 === 3))
{var inst_38508 = (state_38510[2]);var state_38510__$1 = state_38510;return cljs.core.async.impl.ioc_helpers.return_chan(state_38510__$1,inst_38508);
} else
{if((state_val_38511 === 2))
{var inst_38482 = (state_38510[10]);var inst_38484 = cljs.core.count(inst_38482);var inst_38485 = (inst_38484 > 0);var state_38510__$1 = state_38510;if(cljs.core.truth_(inst_38485))
{var statearr_38519_38539 = state_38510__$1;(statearr_38519_38539[1] = 4);
} else
{var statearr_38520_38540 = state_38510__$1;(statearr_38520_38540[1] = 5);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38511 === 11))
{var inst_38482 = (state_38510[10]);var inst_38499 = (state_38510[2]);var tmp38518 = inst_38482;var inst_38482__$1 = tmp38518;var state_38510__$1 = (function (){var statearr_38521 = state_38510;(statearr_38521[11] = inst_38499);
(statearr_38521[10] = inst_38482__$1);
return statearr_38521;
})();var statearr_38522_38541 = state_38510__$1;(statearr_38522_38541[2] = null);
(statearr_38522_38541[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38511 === 9))
{var inst_38490 = (state_38510[8]);var state_38510__$1 = state_38510;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38510__$1,11,out,inst_38490);
} else
{if((state_val_38511 === 5))
{var inst_38504 = cljs.core.async.close_BANG_(out);var state_38510__$1 = state_38510;var statearr_38523_38542 = state_38510__$1;(statearr_38523_38542[2] = inst_38504);
(statearr_38523_38542[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38511 === 10))
{var inst_38502 = (state_38510[2]);var state_38510__$1 = state_38510;var statearr_38524_38543 = state_38510__$1;(statearr_38524_38543[2] = inst_38502);
(statearr_38524_38543[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38511 === 8))
{var inst_38482 = (state_38510[10]);var inst_38489 = (state_38510[7]);var inst_38491 = (state_38510[9]);var inst_38490 = (state_38510[8]);var inst_38494 = (function (){var c = inst_38491;var v = inst_38490;var vec__38487 = inst_38489;var cs = inst_38482;return ((function (c,v,vec__38487,cs,inst_38482,inst_38489,inst_38491,inst_38490,state_val_38511,c__5689__auto___38534,out){
return (function (p1__38427_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38427_SHARP_);
});
;})(c,v,vec__38487,cs,inst_38482,inst_38489,inst_38491,inst_38490,state_val_38511,c__5689__auto___38534,out))
})();var inst_38495 = cljs.core.filterv(inst_38494,inst_38482);var inst_38482__$1 = inst_38495;var state_38510__$1 = (function (){var statearr_38525 = state_38510;(statearr_38525[10] = inst_38482__$1);
return statearr_38525;
})();var statearr_38526_38544 = state_38510__$1;(statearr_38526_38544[2] = null);
(statearr_38526_38544[1] = 2);
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto___38534,out))
;return ((function (switch__5674__auto__,c__5689__auto___38534,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38530 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38530[0] = state_machine__5675__auto__);
(statearr_38530[1] = 1);
return statearr_38530;
});
var state_machine__5675__auto____1 = (function (state_38510){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38510);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38531){if((e38531 instanceof Object))
{var ex__5678__auto__ = e38531;var statearr_38532_38545 = state_38510;(statearr_38532_38545[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38510);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38531;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__38546 = state_38510;
state_38510 = G__38546;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38510){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38534,out))
})();var state__5691__auto__ = (function (){var statearr_38533 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38534);
return statearr_38533;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38534,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___38639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38639,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38639,out){
return (function (state_38616){var state_val_38617 = (state_38616[1]);if((state_val_38617 === 7))
{var inst_38598 = (state_38616[7]);var inst_38598__$1 = (state_38616[2]);var inst_38599 = (inst_38598__$1 == null);var inst_38600 = cljs.core.not(inst_38599);var state_38616__$1 = (function (){var statearr_38618 = state_38616;(statearr_38618[7] = inst_38598__$1);
return statearr_38618;
})();if(inst_38600)
{var statearr_38619_38640 = state_38616__$1;(statearr_38619_38640[1] = 8);
} else
{var statearr_38620_38641 = state_38616__$1;(statearr_38620_38641[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38617 === 1))
{var inst_38593 = 0;var state_38616__$1 = (function (){var statearr_38621 = state_38616;(statearr_38621[8] = inst_38593);
return statearr_38621;
})();var statearr_38622_38642 = state_38616__$1;(statearr_38622_38642[2] = null);
(statearr_38622_38642[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38617 === 4))
{var state_38616__$1 = state_38616;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38616__$1,7,ch);
} else
{if((state_val_38617 === 6))
{var inst_38611 = (state_38616[2]);var state_38616__$1 = state_38616;var statearr_38623_38643 = state_38616__$1;(statearr_38623_38643[2] = inst_38611);
(statearr_38623_38643[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38617 === 3))
{var inst_38613 = (state_38616[2]);var inst_38614 = cljs.core.async.close_BANG_(out);var state_38616__$1 = (function (){var statearr_38624 = state_38616;(statearr_38624[9] = inst_38613);
return statearr_38624;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38616__$1,inst_38614);
} else
{if((state_val_38617 === 2))
{var inst_38593 = (state_38616[8]);var inst_38595 = (inst_38593 < n);var state_38616__$1 = state_38616;if(cljs.core.truth_(inst_38595))
{var statearr_38625_38644 = state_38616__$1;(statearr_38625_38644[1] = 4);
} else
{var statearr_38626_38645 = state_38616__$1;(statearr_38626_38645[1] = 5);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38617 === 11))
{var inst_38593 = (state_38616[8]);var inst_38603 = (state_38616[2]);var inst_38604 = (inst_38593 + 1);var inst_38593__$1 = inst_38604;var state_38616__$1 = (function (){var statearr_38627 = state_38616;(statearr_38627[10] = inst_38603);
(statearr_38627[8] = inst_38593__$1);
return statearr_38627;
})();var statearr_38628_38646 = state_38616__$1;(statearr_38628_38646[2] = null);
(statearr_38628_38646[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38617 === 9))
{var state_38616__$1 = state_38616;var statearr_38629_38647 = state_38616__$1;(statearr_38629_38647[2] = null);
(statearr_38629_38647[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38617 === 5))
{var state_38616__$1 = state_38616;var statearr_38630_38648 = state_38616__$1;(statearr_38630_38648[2] = null);
(statearr_38630_38648[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38617 === 10))
{var inst_38608 = (state_38616[2]);var state_38616__$1 = state_38616;var statearr_38631_38649 = state_38616__$1;(statearr_38631_38649[2] = inst_38608);
(statearr_38631_38649[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38617 === 8))
{var inst_38598 = (state_38616[7]);var state_38616__$1 = state_38616;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38616__$1,11,out,inst_38598);
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
});})(c__5689__auto___38639,out))
;return ((function (switch__5674__auto__,c__5689__auto___38639,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38635 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38635[0] = state_machine__5675__auto__);
(statearr_38635[1] = 1);
return statearr_38635;
});
var state_machine__5675__auto____1 = (function (state_38616){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38616);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38636){if((e38636 instanceof Object))
{var ex__5678__auto__ = e38636;var statearr_38637_38650 = state_38616;(statearr_38637_38650[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38616);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__38651 = state_38616;
state_38616 = G__38651;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38616){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38639,out))
})();var state__5691__auto__ = (function (){var statearr_38638 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38639);
return statearr_38638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38639,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___38748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38748,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38748,out){
return (function (state_38723){var state_val_38724 = (state_38723[1]);if((state_val_38724 === 7))
{var inst_38718 = (state_38723[2]);var state_38723__$1 = state_38723;var statearr_38725_38749 = state_38723__$1;(statearr_38725_38749[2] = inst_38718);
(statearr_38725_38749[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38724 === 1))
{var inst_38700 = null;var state_38723__$1 = (function (){var statearr_38726 = state_38723;(statearr_38726[7] = inst_38700);
return statearr_38726;
})();var statearr_38727_38750 = state_38723__$1;(statearr_38727_38750[2] = null);
(statearr_38727_38750[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38724 === 4))
{var inst_38703 = (state_38723[8]);var inst_38703__$1 = (state_38723[2]);var inst_38704 = (inst_38703__$1 == null);var inst_38705 = cljs.core.not(inst_38704);var state_38723__$1 = (function (){var statearr_38728 = state_38723;(statearr_38728[8] = inst_38703__$1);
return statearr_38728;
})();if(inst_38705)
{var statearr_38729_38751 = state_38723__$1;(statearr_38729_38751[1] = 5);
} else
{var statearr_38730_38752 = state_38723__$1;(statearr_38730_38752[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38724 === 6))
{var state_38723__$1 = state_38723;var statearr_38731_38753 = state_38723__$1;(statearr_38731_38753[2] = null);
(statearr_38731_38753[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38724 === 3))
{var inst_38720 = (state_38723[2]);var inst_38721 = cljs.core.async.close_BANG_(out);var state_38723__$1 = (function (){var statearr_38732 = state_38723;(statearr_38732[9] = inst_38720);
return statearr_38732;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38723__$1,inst_38721);
} else
{if((state_val_38724 === 2))
{var state_38723__$1 = state_38723;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38723__$1,4,ch);
} else
{if((state_val_38724 === 11))
{var inst_38703 = (state_38723[8]);var inst_38712 = (state_38723[2]);var inst_38700 = inst_38703;var state_38723__$1 = (function (){var statearr_38733 = state_38723;(statearr_38733[7] = inst_38700);
(statearr_38733[10] = inst_38712);
return statearr_38733;
})();var statearr_38734_38754 = state_38723__$1;(statearr_38734_38754[2] = null);
(statearr_38734_38754[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38724 === 9))
{var inst_38703 = (state_38723[8]);var state_38723__$1 = state_38723;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38723__$1,11,out,inst_38703);
} else
{if((state_val_38724 === 5))
{var inst_38700 = (state_38723[7]);var inst_38703 = (state_38723[8]);var inst_38707 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38703,inst_38700);var state_38723__$1 = state_38723;if(inst_38707)
{var statearr_38736_38755 = state_38723__$1;(statearr_38736_38755[1] = 8);
} else
{var statearr_38737_38756 = state_38723__$1;(statearr_38737_38756[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38724 === 10))
{var inst_38715 = (state_38723[2]);var state_38723__$1 = state_38723;var statearr_38738_38757 = state_38723__$1;(statearr_38738_38757[2] = inst_38715);
(statearr_38738_38757[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38724 === 8))
{var inst_38700 = (state_38723[7]);var tmp38735 = inst_38700;var inst_38700__$1 = tmp38735;var state_38723__$1 = (function (){var statearr_38739 = state_38723;(statearr_38739[7] = inst_38700__$1);
return statearr_38739;
})();var statearr_38740_38758 = state_38723__$1;(statearr_38740_38758[2] = null);
(statearr_38740_38758[1] = 2);
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto___38748,out))
;return ((function (switch__5674__auto__,c__5689__auto___38748,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38744 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38744[0] = state_machine__5675__auto__);
(statearr_38744[1] = 1);
return statearr_38744;
});
var state_machine__5675__auto____1 = (function (state_38723){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38723);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38745){if((e38745 instanceof Object))
{var ex__5678__auto__ = e38745;var statearr_38746_38759 = state_38723;(statearr_38746_38759[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38723);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__38760 = state_38723;
state_38723 = G__38760;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38723){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38748,out))
})();var state__5691__auto__ = (function (){var statearr_38747 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38748);
return statearr_38747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38748,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___38895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___38895,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___38895,out){
return (function (state_38865){var state_val_38866 = (state_38865[1]);if((state_val_38866 === 7))
{var inst_38861 = (state_38865[2]);var state_38865__$1 = state_38865;var statearr_38867_38896 = state_38865__$1;(statearr_38867_38896[2] = inst_38861);
(statearr_38867_38896[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38866 === 1))
{var inst_38828 = (new Array(n));var inst_38829 = inst_38828;var inst_38830 = 0;var state_38865__$1 = (function (){var statearr_38868 = state_38865;(statearr_38868[7] = inst_38829);
(statearr_38868[8] = inst_38830);
return statearr_38868;
})();var statearr_38869_38897 = state_38865__$1;(statearr_38869_38897[2] = null);
(statearr_38869_38897[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38866 === 4))
{var inst_38833 = (state_38865[9]);var inst_38833__$1 = (state_38865[2]);var inst_38834 = (inst_38833__$1 == null);var inst_38835 = cljs.core.not(inst_38834);var state_38865__$1 = (function (){var statearr_38870 = state_38865;(statearr_38870[9] = inst_38833__$1);
return statearr_38870;
})();if(inst_38835)
{var statearr_38871_38898 = state_38865__$1;(statearr_38871_38898[1] = 5);
} else
{var statearr_38872_38899 = state_38865__$1;(statearr_38872_38899[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38866 === 15))
{var inst_38855 = (state_38865[2]);var state_38865__$1 = state_38865;var statearr_38873_38900 = state_38865__$1;(statearr_38873_38900[2] = inst_38855);
(statearr_38873_38900[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38866 === 13))
{var state_38865__$1 = state_38865;var statearr_38874_38901 = state_38865__$1;(statearr_38874_38901[2] = null);
(statearr_38874_38901[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38866 === 6))
{var inst_38830 = (state_38865[8]);var inst_38851 = (inst_38830 > 0);var state_38865__$1 = state_38865;if(cljs.core.truth_(inst_38851))
{var statearr_38875_38902 = state_38865__$1;(statearr_38875_38902[1] = 12);
} else
{var statearr_38876_38903 = state_38865__$1;(statearr_38876_38903[1] = 13);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38866 === 3))
{var inst_38863 = (state_38865[2]);var state_38865__$1 = state_38865;return cljs.core.async.impl.ioc_helpers.return_chan(state_38865__$1,inst_38863);
} else
{if((state_val_38866 === 12))
{var inst_38829 = (state_38865[7]);var inst_38853 = cljs.core.vec(inst_38829);var state_38865__$1 = state_38865;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38865__$1,15,out,inst_38853);
} else
{if((state_val_38866 === 2))
{var state_38865__$1 = state_38865;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38865__$1,4,ch);
} else
{if((state_val_38866 === 11))
{var inst_38845 = (state_38865[2]);var inst_38846 = (new Array(n));var inst_38829 = inst_38846;var inst_38830 = 0;var state_38865__$1 = (function (){var statearr_38877 = state_38865;(statearr_38877[7] = inst_38829);
(statearr_38877[8] = inst_38830);
(statearr_38877[10] = inst_38845);
return statearr_38877;
})();var statearr_38878_38904 = state_38865__$1;(statearr_38878_38904[2] = null);
(statearr_38878_38904[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38866 === 9))
{var inst_38829 = (state_38865[7]);var inst_38843 = cljs.core.vec(inst_38829);var state_38865__$1 = state_38865;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38865__$1,11,out,inst_38843);
} else
{if((state_val_38866 === 5))
{var inst_38833 = (state_38865[9]);var inst_38829 = (state_38865[7]);var inst_38830 = (state_38865[8]);var inst_38838 = (state_38865[11]);var inst_38837 = (inst_38829[inst_38830] = inst_38833);var inst_38838__$1 = (inst_38830 + 1);var inst_38839 = (inst_38838__$1 < n);var state_38865__$1 = (function (){var statearr_38879 = state_38865;(statearr_38879[12] = inst_38837);
(statearr_38879[11] = inst_38838__$1);
return statearr_38879;
})();if(cljs.core.truth_(inst_38839))
{var statearr_38880_38905 = state_38865__$1;(statearr_38880_38905[1] = 8);
} else
{var statearr_38881_38906 = state_38865__$1;(statearr_38881_38906[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_38866 === 14))
{var inst_38858 = (state_38865[2]);var inst_38859 = cljs.core.async.close_BANG_(out);var state_38865__$1 = (function (){var statearr_38883 = state_38865;(statearr_38883[13] = inst_38858);
return statearr_38883;
})();var statearr_38884_38907 = state_38865__$1;(statearr_38884_38907[2] = inst_38859);
(statearr_38884_38907[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38866 === 10))
{var inst_38849 = (state_38865[2]);var state_38865__$1 = state_38865;var statearr_38885_38908 = state_38865__$1;(statearr_38885_38908[2] = inst_38849);
(statearr_38885_38908[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_38866 === 8))
{var inst_38829 = (state_38865[7]);var inst_38838 = (state_38865[11]);var tmp38882 = inst_38829;var inst_38829__$1 = tmp38882;var inst_38830 = inst_38838;var state_38865__$1 = (function (){var statearr_38886 = state_38865;(statearr_38886[7] = inst_38829__$1);
(statearr_38886[8] = inst_38830);
return statearr_38886;
})();var statearr_38887_38909 = state_38865__$1;(statearr_38887_38909[2] = null);
(statearr_38887_38909[1] = 2);
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto___38895,out))
;return ((function (switch__5674__auto__,c__5689__auto___38895,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_38891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38891[0] = state_machine__5675__auto__);
(statearr_38891[1] = 1);
return statearr_38891;
});
var state_machine__5675__auto____1 = (function (state_38865){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_38865);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e38892){if((e38892 instanceof Object))
{var ex__5678__auto__ = e38892;var statearr_38893_38910 = state_38865;(statearr_38893_38910[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38865);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e38892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__38911 = state_38865;
state_38865 = G__38911;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_38865){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_38865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___38895,out))
})();var state__5691__auto__ = (function (){var statearr_38894 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_38894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___38895);
return statearr_38894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___38895,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5689__auto___39054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___39054,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___39054,out){
return (function (state_39024){var state_val_39025 = (state_39024[1]);if((state_val_39025 === 7))
{var inst_39020 = (state_39024[2]);var state_39024__$1 = state_39024;var statearr_39026_39055 = state_39024__$1;(statearr_39026_39055[2] = inst_39020);
(statearr_39026_39055[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39025 === 1))
{var inst_38983 = [];var inst_38984 = inst_38983;var inst_38985 = cljs.core.constant$keyword$604;var state_39024__$1 = (function (){var statearr_39027 = state_39024;(statearr_39027[7] = inst_38984);
(statearr_39027[8] = inst_38985);
return statearr_39027;
})();var statearr_39028_39056 = state_39024__$1;(statearr_39028_39056[2] = null);
(statearr_39028_39056[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39025 === 4))
{var inst_38988 = (state_39024[9]);var inst_38988__$1 = (state_39024[2]);var inst_38989 = (inst_38988__$1 == null);var inst_38990 = cljs.core.not(inst_38989);var state_39024__$1 = (function (){var statearr_39029 = state_39024;(statearr_39029[9] = inst_38988__$1);
return statearr_39029;
})();if(inst_38990)
{var statearr_39030_39057 = state_39024__$1;(statearr_39030_39057[1] = 5);
} else
{var statearr_39031_39058 = state_39024__$1;(statearr_39031_39058[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_39025 === 15))
{var inst_39014 = (state_39024[2]);var state_39024__$1 = state_39024;var statearr_39032_39059 = state_39024__$1;(statearr_39032_39059[2] = inst_39014);
(statearr_39032_39059[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39025 === 13))
{var state_39024__$1 = state_39024;var statearr_39033_39060 = state_39024__$1;(statearr_39033_39060[2] = null);
(statearr_39033_39060[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39025 === 6))
{var inst_38984 = (state_39024[7]);var inst_39009 = inst_38984.length;var inst_39010 = (inst_39009 > 0);var state_39024__$1 = state_39024;if(cljs.core.truth_(inst_39010))
{var statearr_39034_39061 = state_39024__$1;(statearr_39034_39061[1] = 12);
} else
{var statearr_39035_39062 = state_39024__$1;(statearr_39035_39062[1] = 13);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_39025 === 3))
{var inst_39022 = (state_39024[2]);var state_39024__$1 = state_39024;return cljs.core.async.impl.ioc_helpers.return_chan(state_39024__$1,inst_39022);
} else
{if((state_val_39025 === 12))
{var inst_38984 = (state_39024[7]);var inst_39012 = cljs.core.vec(inst_38984);var state_39024__$1 = state_39024;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39024__$1,15,out,inst_39012);
} else
{if((state_val_39025 === 2))
{var state_39024__$1 = state_39024;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39024__$1,4,ch);
} else
{if((state_val_39025 === 11))
{var inst_38988 = (state_39024[9]);var inst_38992 = (state_39024[10]);var inst_39002 = (state_39024[2]);var inst_39003 = [];var inst_39004 = inst_39003.push(inst_38988);var inst_38984 = inst_39003;var inst_38985 = inst_38992;var state_39024__$1 = (function (){var statearr_39036 = state_39024;(statearr_39036[11] = inst_39004);
(statearr_39036[7] = inst_38984);
(statearr_39036[12] = inst_39002);
(statearr_39036[8] = inst_38985);
return statearr_39036;
})();var statearr_39037_39063 = state_39024__$1;(statearr_39037_39063[2] = null);
(statearr_39037_39063[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39025 === 9))
{var inst_38984 = (state_39024[7]);var inst_39000 = cljs.core.vec(inst_38984);var state_39024__$1 = state_39024;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39024__$1,11,out,inst_39000);
} else
{if((state_val_39025 === 5))
{var inst_38988 = (state_39024[9]);var inst_38992 = (state_39024[10]);var inst_38985 = (state_39024[8]);var inst_38992__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38988) : f.call(null,inst_38988));var inst_38993 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38992__$1,inst_38985);var inst_38994 = cljs.core.keyword_identical_QMARK_(inst_38985,cljs.core.constant$keyword$604);var inst_38995 = (inst_38993) || (inst_38994);var state_39024__$1 = (function (){var statearr_39038 = state_39024;(statearr_39038[10] = inst_38992__$1);
return statearr_39038;
})();if(cljs.core.truth_(inst_38995))
{var statearr_39039_39064 = state_39024__$1;(statearr_39039_39064[1] = 8);
} else
{var statearr_39040_39065 = state_39024__$1;(statearr_39040_39065[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_39025 === 14))
{var inst_39017 = (state_39024[2]);var inst_39018 = cljs.core.async.close_BANG_(out);var state_39024__$1 = (function (){var statearr_39042 = state_39024;(statearr_39042[13] = inst_39017);
return statearr_39042;
})();var statearr_39043_39066 = state_39024__$1;(statearr_39043_39066[2] = inst_39018);
(statearr_39043_39066[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39025 === 10))
{var inst_39007 = (state_39024[2]);var state_39024__$1 = state_39024;var statearr_39044_39067 = state_39024__$1;(statearr_39044_39067[2] = inst_39007);
(statearr_39044_39067[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_39025 === 8))
{var inst_38988 = (state_39024[9]);var inst_38992 = (state_39024[10]);var inst_38984 = (state_39024[7]);var inst_38997 = inst_38984.push(inst_38988);var tmp39041 = inst_38984;var inst_38984__$1 = tmp39041;var inst_38985 = inst_38992;var state_39024__$1 = (function (){var statearr_39045 = state_39024;(statearr_39045[7] = inst_38984__$1);
(statearr_39045[8] = inst_38985);
(statearr_39045[14] = inst_38997);
return statearr_39045;
})();var statearr_39046_39068 = state_39024__$1;(statearr_39046_39068[2] = null);
(statearr_39046_39068[1] = 2);
return cljs.core.constant$keyword$591;
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
});})(c__5689__auto___39054,out))
;return ((function (switch__5674__auto__,c__5689__auto___39054,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_39050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39050[0] = state_machine__5675__auto__);
(statearr_39050[1] = 1);
return statearr_39050;
});
var state_machine__5675__auto____1 = (function (state_39024){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_39024);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e39051){if((e39051 instanceof Object))
{var ex__5678__auto__ = e39051;var statearr_39052_39069 = state_39024;(statearr_39052_39069[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39024);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e39051;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__39070 = state_39024;
state_39024 = G__39070;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_39024){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_39024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___39054,out))
})();var state__5691__auto__ = (function (){var statearr_39053 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_39053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___39054);
return statearr_39053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___39054,out))
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
