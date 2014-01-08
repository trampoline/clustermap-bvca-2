// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20659 = (function (f,fn_handler,meta20660){
this.f = f;
this.fn_handler = fn_handler;
this.meta20660 = meta20660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20659.cljs$lang$type = true;
cljs.core.async.t20659.cljs$lang$ctorStr = "cljs.core.async/t20659";
cljs.core.async.t20659.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20659");
});
cljs.core.async.t20659.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20661){var self__ = this;
var _20661__$1 = this;return self__.meta20660;
});
cljs.core.async.t20659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20661,meta20660__$1){var self__ = this;
var _20661__$1 = this;return (new cljs.core.async.t20659(self__.f,self__.fn_handler,meta20660__$1));
});
cljs.core.async.__GT_t20659 = (function __GT_t20659(f__$1,fn_handler__$1,meta20660){return (new cljs.core.async.t20659(f__$1,fn_handler__$1,meta20660));
});
}
return (new cljs.core.async.t20659(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20663 = buff;if(G__20663)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__20663.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20663.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20663);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20663);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
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
{var val_20664 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20664) : fn1.call(null,val_20664));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20664) : fn1.call(null,val_20664));
}));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___20665 = n;var x_20666 = 0;while(true){
if((x_20666 < n__4248__auto___20665))
{(a[x_20666] = 0);
{
var G__20667 = (x_20666 + 1);
x_20666 = G__20667;
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
var G__20668 = (i + 1);
i = G__20668;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t20672 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20672 = (function (flag,alt_flag,meta20673){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20673 = meta20673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20672.cljs$lang$type = true;
cljs.core.async.t20672.cljs$lang$ctorStr = "cljs.core.async/t20672";
cljs.core.async.t20672.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20672");
});
cljs.core.async.t20672.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20672.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t20672.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t20672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20674){var self__ = this;
var _20674__$1 = this;return self__.meta20673;
});
cljs.core.async.t20672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20674,meta20673__$1){var self__ = this;
var _20674__$1 = this;return (new cljs.core.async.t20672(self__.flag,self__.alt_flag,meta20673__$1));
});
cljs.core.async.__GT_t20672 = (function __GT_t20672(flag__$1,alt_flag__$1,meta20673){return (new cljs.core.async.t20672(flag__$1,alt_flag__$1,meta20673));
});
}
return (new cljs.core.async.t20672(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20678 = (function (cb,flag,alt_handler,meta20679){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20679 = meta20679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20678.cljs$lang$type = true;
cljs.core.async.t20678.cljs$lang$ctorStr = "cljs.core.async/t20678";
cljs.core.async.t20678.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20678");
});
cljs.core.async.t20678.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t20678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t20678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20680){var self__ = this;
var _20680__$1 = this;return self__.meta20679;
});
cljs.core.async.t20678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20680,meta20679__$1){var self__ = this;
var _20680__$1 = this;return (new cljs.core.async.t20678(self__.cb,self__.flag,self__.alt_handler,meta20679__$1));
});
cljs.core.async.__GT_t20678 = (function __GT_t20678(cb__$1,flag__$1,alt_handler__$1,meta20679){return (new cljs.core.async.t20678(cb__$1,flag__$1,alt_handler__$1,meta20679));
});
}
return (new cljs.core.async.t20678(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20681_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20681_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20681_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__20682 = (i + 1);
i = G__20682;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$110))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$110], null));
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
var alts_BANG___delegate = function (ports,p__20683){var map__20685 = p__20683;var map__20685__$1 = ((cljs.core.seq_QMARK_(map__20685))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20685):map__20685);var opts = map__20685__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__20683 = null;if (arguments.length > 1) {
  p__20683 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20683);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20686){
var ports = cljs.core.first(arglist__20686);
var p__20683 = cljs.core.rest(arglist__20686);
return alts_BANG___delegate(ports,p__20683);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20694 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20694 = (function (ch,f,map_LT_,meta20695){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20695 = meta20695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20694.cljs$lang$type = true;
cljs.core.async.t20694.cljs$lang$ctorStr = "cljs.core.async/t20694";
cljs.core.async.t20694.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20694");
});
cljs.core.async.t20694.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t20694.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t20697 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20697 = (function (fn1,_,meta20695,ch,f,map_LT_,meta20698){
this.fn1 = fn1;
this._ = _;
this.meta20695 = meta20695;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20698 = meta20698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20697.cljs$lang$type = true;
cljs.core.async.t20697.cljs$lang$ctorStr = "cljs.core.async/t20697";
cljs.core.async.t20697.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20697");
});
cljs.core.async.t20697.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t20697.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t20697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__20687_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__20687_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20687_SHARP_) : self__.f.call(null,p1__20687_SHARP_)))) : f1.call(null,(((p1__20687_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20687_SHARP_) : self__.f.call(null,p1__20687_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t20697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20699){var self__ = this;
var _20699__$1 = this;return self__.meta20698;
});
cljs.core.async.t20697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20699,meta20698__$1){var self__ = this;
var _20699__$1 = this;return (new cljs.core.async.t20697(self__.fn1,self__._,self__.meta20695,self__.ch,self__.f,self__.map_LT_,meta20698__$1));
});
cljs.core.async.__GT_t20697 = (function __GT_t20697(fn1__$1,___$2,meta20695__$1,ch__$2,f__$2,map_LT___$2,meta20698){return (new cljs.core.async.t20697(fn1__$1,___$2,meta20695__$1,ch__$2,f__$2,map_LT___$2,meta20698));
});
}
return (new cljs.core.async.t20697(fn1,___$1,self__.meta20695,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t20694.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20696){var self__ = this;
var _20696__$1 = this;return self__.meta20695;
});
cljs.core.async.t20694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20696,meta20695__$1){var self__ = this;
var _20696__$1 = this;return (new cljs.core.async.t20694(self__.ch,self__.f,self__.map_LT_,meta20695__$1));
});
cljs.core.async.__GT_t20694 = (function __GT_t20694(ch__$1,f__$1,map_LT___$1,meta20695){return (new cljs.core.async.t20694(ch__$1,f__$1,map_LT___$1,meta20695));
});
}
return (new cljs.core.async.t20694(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20703 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20703 = (function (ch,f,map_GT_,meta20704){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20704 = meta20704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20703.cljs$lang$type = true;
cljs.core.async.t20703.cljs$lang$ctorStr = "cljs.core.async/t20703";
cljs.core.async.t20703.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20703");
});
cljs.core.async.t20703.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t20703.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20703.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20705){var self__ = this;
var _20705__$1 = this;return self__.meta20704;
});
cljs.core.async.t20703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20705,meta20704__$1){var self__ = this;
var _20705__$1 = this;return (new cljs.core.async.t20703(self__.ch,self__.f,self__.map_GT_,meta20704__$1));
});
cljs.core.async.__GT_t20703 = (function __GT_t20703(ch__$1,f__$1,map_GT___$1,meta20704){return (new cljs.core.async.t20703(ch__$1,f__$1,map_GT___$1,meta20704));
});
}
return (new cljs.core.async.t20703(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20709 = (function (ch,p,filter_GT_,meta20710){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20710 = meta20710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20709.cljs$lang$type = true;
cljs.core.async.t20709.cljs$lang$ctorStr = "cljs.core.async/t20709";
cljs.core.async.t20709.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20709");
});
cljs.core.async.t20709.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t20709.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20709.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20711){var self__ = this;
var _20711__$1 = this;return self__.meta20710;
});
cljs.core.async.t20709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20711,meta20710__$1){var self__ = this;
var _20711__$1 = this;return (new cljs.core.async.t20709(self__.ch,self__.p,self__.filter_GT_,meta20710__$1));
});
cljs.core.async.__GT_t20709 = (function __GT_t20709(ch__$1,p__$1,filter_GT___$1,meta20710){return (new cljs.core.async.t20709(ch__$1,p__$1,filter_GT___$1,meta20710));
});
}
return (new cljs.core.async.t20709(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___20794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20773){var state_val_20774 = (state_20773[1]);if((state_val_20774 === 1))
{var state_20773__$1 = state_20773;var statearr_20775_20795 = state_20773__$1;(statearr_20775_20795[2] = null);
(statearr_20775_20795[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20774 === 2))
{var state_20773__$1 = state_20773;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20773__$1,4,ch);
} else
{if((state_val_20774 === 3))
{var inst_20771 = (state_20773[2]);var state_20773__$1 = state_20773;return cljs.core.async.impl.ioc_helpers.return_chan(state_20773__$1,inst_20771);
} else
{if((state_val_20774 === 4))
{var inst_20755 = (state_20773[7]);var inst_20755__$1 = (state_20773[2]);var inst_20756 = (inst_20755__$1 == null);var state_20773__$1 = (function (){var statearr_20776 = state_20773;(statearr_20776[7] = inst_20755__$1);
return statearr_20776;
})();if(cljs.core.truth_(inst_20756))
{var statearr_20777_20796 = state_20773__$1;(statearr_20777_20796[1] = 5);
} else
{var statearr_20778_20797 = state_20773__$1;(statearr_20778_20797[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_20774 === 5))
{var inst_20758 = cljs.core.async.close_BANG_(out);var state_20773__$1 = state_20773;var statearr_20779_20798 = state_20773__$1;(statearr_20779_20798[2] = inst_20758);
(statearr_20779_20798[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20774 === 6))
{var inst_20755 = (state_20773[7]);var inst_20760 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20755) : p.call(null,inst_20755));var state_20773__$1 = state_20773;if(cljs.core.truth_(inst_20760))
{var statearr_20780_20799 = state_20773__$1;(statearr_20780_20799[1] = 8);
} else
{var statearr_20781_20800 = state_20773__$1;(statearr_20781_20800[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_20774 === 7))
{var inst_20769 = (state_20773[2]);var state_20773__$1 = state_20773;var statearr_20782_20801 = state_20773__$1;(statearr_20782_20801[2] = inst_20769);
(statearr_20782_20801[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20774 === 8))
{var inst_20755 = (state_20773[7]);var state_20773__$1 = state_20773;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20773__$1,11,out,inst_20755);
} else
{if((state_val_20774 === 9))
{var state_20773__$1 = state_20773;var statearr_20783_20802 = state_20773__$1;(statearr_20783_20802[2] = null);
(statearr_20783_20802[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20774 === 10))
{var inst_20766 = (state_20773[2]);var state_20773__$1 = (function (){var statearr_20784 = state_20773;(statearr_20784[8] = inst_20766);
return statearr_20784;
})();var statearr_20785_20803 = state_20773__$1;(statearr_20785_20803[2] = null);
(statearr_20785_20803[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20774 === 11))
{var inst_20763 = (state_20773[2]);var state_20773__$1 = state_20773;var statearr_20786_20804 = state_20773__$1;(statearr_20786_20804[2] = inst_20763);
(statearr_20786_20804[1] = 10);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20790 = [null,null,null,null,null,null,null,null,null];(statearr_20790[0] = state_machine__5507__auto__);
(statearr_20790[1] = 1);
return statearr_20790;
});
var state_machine__5507__auto____1 = (function (state_20773){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20773);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20791){if((e20791 instanceof Object))
{var ex__5510__auto__ = e20791;var statearr_20792_20805 = state_20773;(statearr_20792_20805[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20773);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e20791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__20806 = state_20773;
state_20773 = G__20806;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20773){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20793 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20794);
return statearr_20793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20958){var state_val_20959 = (state_20958[1]);if((state_val_20959 === 1))
{var state_20958__$1 = state_20958;var statearr_20960_20997 = state_20958__$1;(statearr_20960_20997[2] = null);
(statearr_20960_20997[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 2))
{var state_20958__$1 = state_20958;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20958__$1,4,in$);
} else
{if((state_val_20959 === 3))
{var inst_20956 = (state_20958[2]);var state_20958__$1 = state_20958;return cljs.core.async.impl.ioc_helpers.return_chan(state_20958__$1,inst_20956);
} else
{if((state_val_20959 === 4))
{var inst_20904 = (state_20958[7]);var inst_20904__$1 = (state_20958[2]);var inst_20905 = (inst_20904__$1 == null);var state_20958__$1 = (function (){var statearr_20961 = state_20958;(statearr_20961[7] = inst_20904__$1);
return statearr_20961;
})();if(cljs.core.truth_(inst_20905))
{var statearr_20962_20998 = state_20958__$1;(statearr_20962_20998[1] = 5);
} else
{var statearr_20963_20999 = state_20958__$1;(statearr_20963_20999[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 5))
{var inst_20907 = cljs.core.async.close_BANG_(out);var state_20958__$1 = state_20958;var statearr_20964_21000 = state_20958__$1;(statearr_20964_21000[2] = inst_20907);
(statearr_20964_21000[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 6))
{var inst_20904 = (state_20958[7]);var inst_20909 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20904) : f.call(null,inst_20904));var inst_20914 = cljs.core.seq(inst_20909);var inst_20915 = inst_20914;var inst_20916 = null;var inst_20917 = 0;var inst_20918 = 0;var state_20958__$1 = (function (){var statearr_20965 = state_20958;(statearr_20965[8] = inst_20915);
(statearr_20965[9] = inst_20916);
(statearr_20965[10] = inst_20918);
(statearr_20965[11] = inst_20917);
return statearr_20965;
})();var statearr_20966_21001 = state_20958__$1;(statearr_20966_21001[2] = null);
(statearr_20966_21001[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 7))
{var inst_20954 = (state_20958[2]);var state_20958__$1 = state_20958;var statearr_20967_21002 = state_20958__$1;(statearr_20967_21002[2] = inst_20954);
(statearr_20967_21002[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 8))
{var inst_20918 = (state_20958[10]);var inst_20917 = (state_20958[11]);var inst_20920 = (inst_20918 < inst_20917);var inst_20921 = inst_20920;var state_20958__$1 = state_20958;if(cljs.core.truth_(inst_20921))
{var statearr_20968_21003 = state_20958__$1;(statearr_20968_21003[1] = 10);
} else
{var statearr_20969_21004 = state_20958__$1;(statearr_20969_21004[1] = 11);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 9))
{var inst_20951 = (state_20958[2]);var state_20958__$1 = (function (){var statearr_20970 = state_20958;(statearr_20970[12] = inst_20951);
return statearr_20970;
})();var statearr_20971_21005 = state_20958__$1;(statearr_20971_21005[2] = null);
(statearr_20971_21005[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 10))
{var inst_20916 = (state_20958[9]);var inst_20918 = (state_20958[10]);var inst_20923 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20916,inst_20918);var state_20958__$1 = state_20958;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20958__$1,13,out,inst_20923);
} else
{if((state_val_20959 === 11))
{var inst_20929 = (state_20958[13]);var inst_20915 = (state_20958[8]);var inst_20929__$1 = cljs.core.seq(inst_20915);var state_20958__$1 = (function (){var statearr_20975 = state_20958;(statearr_20975[13] = inst_20929__$1);
return statearr_20975;
})();if(inst_20929__$1)
{var statearr_20976_21006 = state_20958__$1;(statearr_20976_21006[1] = 14);
} else
{var statearr_20977_21007 = state_20958__$1;(statearr_20977_21007[1] = 15);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 12))
{var inst_20949 = (state_20958[2]);var state_20958__$1 = state_20958;var statearr_20978_21008 = state_20958__$1;(statearr_20978_21008[2] = inst_20949);
(statearr_20978_21008[1] = 9);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 13))
{var inst_20915 = (state_20958[8]);var inst_20916 = (state_20958[9]);var inst_20918 = (state_20958[10]);var inst_20917 = (state_20958[11]);var inst_20925 = (state_20958[2]);var inst_20926 = (inst_20918 + 1);var tmp20972 = inst_20915;var tmp20973 = inst_20916;var tmp20974 = inst_20917;var inst_20915__$1 = tmp20972;var inst_20916__$1 = tmp20973;var inst_20917__$1 = tmp20974;var inst_20918__$1 = inst_20926;var state_20958__$1 = (function (){var statearr_20979 = state_20958;(statearr_20979[8] = inst_20915__$1);
(statearr_20979[9] = inst_20916__$1);
(statearr_20979[10] = inst_20918__$1);
(statearr_20979[11] = inst_20917__$1);
(statearr_20979[14] = inst_20925);
return statearr_20979;
})();var statearr_20980_21009 = state_20958__$1;(statearr_20980_21009[2] = null);
(statearr_20980_21009[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 14))
{var inst_20929 = (state_20958[13]);var inst_20931 = cljs.core.chunked_seq_QMARK_(inst_20929);var state_20958__$1 = state_20958;if(inst_20931)
{var statearr_20981_21010 = state_20958__$1;(statearr_20981_21010[1] = 17);
} else
{var statearr_20982_21011 = state_20958__$1;(statearr_20982_21011[1] = 18);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 15))
{var state_20958__$1 = state_20958;var statearr_20983_21012 = state_20958__$1;(statearr_20983_21012[2] = null);
(statearr_20983_21012[1] = 16);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 16))
{var inst_20947 = (state_20958[2]);var state_20958__$1 = state_20958;var statearr_20984_21013 = state_20958__$1;(statearr_20984_21013[2] = inst_20947);
(statearr_20984_21013[1] = 12);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 17))
{var inst_20929 = (state_20958[13]);var inst_20933 = cljs.core.chunk_first(inst_20929);var inst_20934 = cljs.core.chunk_rest(inst_20929);var inst_20935 = cljs.core.count(inst_20933);var inst_20915 = inst_20934;var inst_20916 = inst_20933;var inst_20917 = inst_20935;var inst_20918 = 0;var state_20958__$1 = (function (){var statearr_20985 = state_20958;(statearr_20985[8] = inst_20915);
(statearr_20985[9] = inst_20916);
(statearr_20985[10] = inst_20918);
(statearr_20985[11] = inst_20917);
return statearr_20985;
})();var statearr_20986_21014 = state_20958__$1;(statearr_20986_21014[2] = null);
(statearr_20986_21014[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 18))
{var inst_20929 = (state_20958[13]);var inst_20938 = cljs.core.first(inst_20929);var state_20958__$1 = state_20958;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20958__$1,20,out,inst_20938);
} else
{if((state_val_20959 === 19))
{var inst_20944 = (state_20958[2]);var state_20958__$1 = state_20958;var statearr_20987_21015 = state_20958__$1;(statearr_20987_21015[2] = inst_20944);
(statearr_20987_21015[1] = 16);
return cljs.core.constant$keyword$120;
} else
{if((state_val_20959 === 20))
{var inst_20929 = (state_20958[13]);var inst_20940 = (state_20958[2]);var inst_20941 = cljs.core.next(inst_20929);var inst_20915 = inst_20941;var inst_20916 = null;var inst_20917 = 0;var inst_20918 = 0;var state_20958__$1 = (function (){var statearr_20988 = state_20958;(statearr_20988[8] = inst_20915);
(statearr_20988[9] = inst_20916);
(statearr_20988[15] = inst_20940);
(statearr_20988[10] = inst_20918);
(statearr_20988[11] = inst_20917);
return statearr_20988;
})();var statearr_20989_21016 = state_20958__$1;(statearr_20989_21016[2] = null);
(statearr_20989_21016[1] = 8);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20993[0] = state_machine__5507__auto__);
(statearr_20993[1] = 1);
return statearr_20993;
});
var state_machine__5507__auto____1 = (function (state_20958){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20958);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20994){if((e20994 instanceof Object))
{var ex__5510__auto__ = e20994;var statearr_20995_21017 = state_20958;(statearr_20995_21017[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20958);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e20994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21018 = state_20958;
state_20958 = G__21018;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20958){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20996 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___21099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21078){var state_val_21079 = (state_21078[1]);if((state_val_21079 === 1))
{var state_21078__$1 = state_21078;var statearr_21080_21100 = state_21078__$1;(statearr_21080_21100[2] = null);
(statearr_21080_21100[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21079 === 2))
{var state_21078__$1 = state_21078;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21078__$1,4,from);
} else
{if((state_val_21079 === 3))
{var inst_21076 = (state_21078[2]);var state_21078__$1 = state_21078;return cljs.core.async.impl.ioc_helpers.return_chan(state_21078__$1,inst_21076);
} else
{if((state_val_21079 === 4))
{var inst_21061 = (state_21078[7]);var inst_21061__$1 = (state_21078[2]);var inst_21062 = (inst_21061__$1 == null);var state_21078__$1 = (function (){var statearr_21081 = state_21078;(statearr_21081[7] = inst_21061__$1);
return statearr_21081;
})();if(cljs.core.truth_(inst_21062))
{var statearr_21082_21101 = state_21078__$1;(statearr_21082_21101[1] = 5);
} else
{var statearr_21083_21102 = state_21078__$1;(statearr_21083_21102[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21079 === 5))
{var state_21078__$1 = state_21078;if(cljs.core.truth_(close_QMARK_))
{var statearr_21084_21103 = state_21078__$1;(statearr_21084_21103[1] = 8);
} else
{var statearr_21085_21104 = state_21078__$1;(statearr_21085_21104[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21079 === 6))
{var inst_21061 = (state_21078[7]);var state_21078__$1 = state_21078;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21078__$1,11,to,inst_21061);
} else
{if((state_val_21079 === 7))
{var inst_21074 = (state_21078[2]);var state_21078__$1 = state_21078;var statearr_21086_21105 = state_21078__$1;(statearr_21086_21105[2] = inst_21074);
(statearr_21086_21105[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21079 === 8))
{var inst_21065 = cljs.core.async.close_BANG_(to);var state_21078__$1 = state_21078;var statearr_21087_21106 = state_21078__$1;(statearr_21087_21106[2] = inst_21065);
(statearr_21087_21106[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21079 === 9))
{var state_21078__$1 = state_21078;var statearr_21088_21107 = state_21078__$1;(statearr_21088_21107[2] = null);
(statearr_21088_21107[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21079 === 10))
{var inst_21068 = (state_21078[2]);var state_21078__$1 = state_21078;var statearr_21089_21108 = state_21078__$1;(statearr_21089_21108[2] = inst_21068);
(statearr_21089_21108[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21079 === 11))
{var inst_21071 = (state_21078[2]);var state_21078__$1 = (function (){var statearr_21090 = state_21078;(statearr_21090[8] = inst_21071);
return statearr_21090;
})();var statearr_21091_21109 = state_21078__$1;(statearr_21091_21109[2] = null);
(statearr_21091_21109[1] = 2);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21095 = [null,null,null,null,null,null,null,null,null];(statearr_21095[0] = state_machine__5507__auto__);
(statearr_21095[1] = 1);
return statearr_21095;
});
var state_machine__5507__auto____1 = (function (state_21078){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21078);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21096){if((e21096 instanceof Object))
{var ex__5510__auto__ = e21096;var statearr_21097_21110 = state_21078;(statearr_21097_21110[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21078);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e21096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21111 = state_21078;
state_21078 = G__21111;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21078){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21098 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21099);
return statearr_21098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___21198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21176){var state_val_21177 = (state_21176[1]);if((state_val_21177 === 1))
{var state_21176__$1 = state_21176;var statearr_21178_21199 = state_21176__$1;(statearr_21178_21199[2] = null);
(statearr_21178_21199[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21177 === 2))
{var state_21176__$1 = state_21176;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21176__$1,4,ch);
} else
{if((state_val_21177 === 3))
{var inst_21174 = (state_21176[2]);var state_21176__$1 = state_21176;return cljs.core.async.impl.ioc_helpers.return_chan(state_21176__$1,inst_21174);
} else
{if((state_val_21177 === 4))
{var inst_21157 = (state_21176[7]);var inst_21157__$1 = (state_21176[2]);var inst_21158 = (inst_21157__$1 == null);var state_21176__$1 = (function (){var statearr_21179 = state_21176;(statearr_21179[7] = inst_21157__$1);
return statearr_21179;
})();if(cljs.core.truth_(inst_21158))
{var statearr_21180_21200 = state_21176__$1;(statearr_21180_21200[1] = 5);
} else
{var statearr_21181_21201 = state_21176__$1;(statearr_21181_21201[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21177 === 5))
{var inst_21160 = cljs.core.async.close_BANG_(tc);var inst_21161 = cljs.core.async.close_BANG_(fc);var state_21176__$1 = (function (){var statearr_21182 = state_21176;(statearr_21182[8] = inst_21160);
return statearr_21182;
})();var statearr_21183_21202 = state_21176__$1;(statearr_21183_21202[2] = inst_21161);
(statearr_21183_21202[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21177 === 6))
{var inst_21157 = (state_21176[7]);var inst_21163 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21157) : p.call(null,inst_21157));var state_21176__$1 = state_21176;if(cljs.core.truth_(inst_21163))
{var statearr_21184_21203 = state_21176__$1;(statearr_21184_21203[1] = 9);
} else
{var statearr_21185_21204 = state_21176__$1;(statearr_21185_21204[1] = 10);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21177 === 7))
{var inst_21172 = (state_21176[2]);var state_21176__$1 = state_21176;var statearr_21186_21205 = state_21176__$1;(statearr_21186_21205[2] = inst_21172);
(statearr_21186_21205[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21177 === 8))
{var inst_21169 = (state_21176[2]);var state_21176__$1 = (function (){var statearr_21187 = state_21176;(statearr_21187[9] = inst_21169);
return statearr_21187;
})();var statearr_21188_21206 = state_21176__$1;(statearr_21188_21206[2] = null);
(statearr_21188_21206[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21177 === 9))
{var state_21176__$1 = state_21176;var statearr_21189_21207 = state_21176__$1;(statearr_21189_21207[2] = tc);
(statearr_21189_21207[1] = 11);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21177 === 10))
{var state_21176__$1 = state_21176;var statearr_21190_21208 = state_21176__$1;(statearr_21190_21208[2] = fc);
(statearr_21190_21208[1] = 11);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21177 === 11))
{var inst_21157 = (state_21176[7]);var inst_21167 = (state_21176[2]);var state_21176__$1 = state_21176;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21176__$1,8,inst_21167,inst_21157);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21194 = [null,null,null,null,null,null,null,null,null,null];(statearr_21194[0] = state_machine__5507__auto__);
(statearr_21194[1] = 1);
return statearr_21194;
});
var state_machine__5507__auto____1 = (function (state_21176){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21176);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21195){if((e21195 instanceof Object))
{var ex__5510__auto__ = e21195;var statearr_21196_21209 = state_21176;(statearr_21196_21209[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21176);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e21195;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21210 = state_21176;
state_21176 = G__21210;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21176){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21197 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21198);
return statearr_21197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21257){var state_val_21258 = (state_21257[1]);if((state_val_21258 === 7))
{var inst_21253 = (state_21257[2]);var state_21257__$1 = state_21257;var statearr_21259_21275 = state_21257__$1;(statearr_21259_21275[2] = inst_21253);
(statearr_21259_21275[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21258 === 6))
{var inst_21246 = (state_21257[7]);var inst_21243 = (state_21257[8]);var inst_21250 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21243,inst_21246) : f.call(null,inst_21243,inst_21246));var inst_21243__$1 = inst_21250;var state_21257__$1 = (function (){var statearr_21260 = state_21257;(statearr_21260[8] = inst_21243__$1);
return statearr_21260;
})();var statearr_21261_21276 = state_21257__$1;(statearr_21261_21276[2] = null);
(statearr_21261_21276[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21258 === 5))
{var inst_21243 = (state_21257[8]);var state_21257__$1 = state_21257;var statearr_21262_21277 = state_21257__$1;(statearr_21262_21277[2] = inst_21243);
(statearr_21262_21277[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21258 === 4))
{var inst_21246 = (state_21257[7]);var inst_21246__$1 = (state_21257[2]);var inst_21247 = (inst_21246__$1 == null);var state_21257__$1 = (function (){var statearr_21263 = state_21257;(statearr_21263[7] = inst_21246__$1);
return statearr_21263;
})();if(cljs.core.truth_(inst_21247))
{var statearr_21264_21278 = state_21257__$1;(statearr_21264_21278[1] = 5);
} else
{var statearr_21265_21279 = state_21257__$1;(statearr_21265_21279[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21258 === 3))
{var inst_21255 = (state_21257[2]);var state_21257__$1 = state_21257;return cljs.core.async.impl.ioc_helpers.return_chan(state_21257__$1,inst_21255);
} else
{if((state_val_21258 === 2))
{var state_21257__$1 = state_21257;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21257__$1,4,ch);
} else
{if((state_val_21258 === 1))
{var inst_21243 = init;var state_21257__$1 = (function (){var statearr_21266 = state_21257;(statearr_21266[8] = inst_21243);
return statearr_21266;
})();var statearr_21267_21280 = state_21257__$1;(statearr_21267_21280[2] = null);
(statearr_21267_21280[1] = 2);
return cljs.core.constant$keyword$120;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21271 = [null,null,null,null,null,null,null,null,null];(statearr_21271[0] = state_machine__5507__auto__);
(statearr_21271[1] = 1);
return statearr_21271;
});
var state_machine__5507__auto____1 = (function (state_21257){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21257);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21272){if((e21272 instanceof Object))
{var ex__5510__auto__ = e21272;var statearr_21273_21281 = state_21257;(statearr_21273_21281[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21257);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e21272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21282 = state_21257;
state_21257 = G__21282;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21257){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21274 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21344){var state_val_21345 = (state_21344[1]);if((state_val_21345 === 1))
{var inst_21324 = cljs.core.seq(coll);var inst_21325 = inst_21324;var state_21344__$1 = (function (){var statearr_21346 = state_21344;(statearr_21346[7] = inst_21325);
return statearr_21346;
})();var statearr_21347_21365 = state_21344__$1;(statearr_21347_21365[2] = null);
(statearr_21347_21365[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21345 === 2))
{var inst_21325 = (state_21344[7]);var state_21344__$1 = state_21344;if(cljs.core.truth_(inst_21325))
{var statearr_21348_21366 = state_21344__$1;(statearr_21348_21366[1] = 4);
} else
{var statearr_21349_21367 = state_21344__$1;(statearr_21349_21367[1] = 5);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21345 === 3))
{var inst_21342 = (state_21344[2]);var state_21344__$1 = state_21344;return cljs.core.async.impl.ioc_helpers.return_chan(state_21344__$1,inst_21342);
} else
{if((state_val_21345 === 4))
{var inst_21325 = (state_21344[7]);var inst_21328 = cljs.core.first(inst_21325);var state_21344__$1 = state_21344;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21344__$1,7,ch,inst_21328);
} else
{if((state_val_21345 === 5))
{var state_21344__$1 = state_21344;if(cljs.core.truth_(close_QMARK_))
{var statearr_21350_21368 = state_21344__$1;(statearr_21350_21368[1] = 8);
} else
{var statearr_21351_21369 = state_21344__$1;(statearr_21351_21369[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21345 === 6))
{var inst_21340 = (state_21344[2]);var state_21344__$1 = state_21344;var statearr_21352_21370 = state_21344__$1;(statearr_21352_21370[2] = inst_21340);
(statearr_21352_21370[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21345 === 7))
{var inst_21325 = (state_21344[7]);var inst_21330 = (state_21344[2]);var inst_21331 = cljs.core.next(inst_21325);var inst_21325__$1 = inst_21331;var state_21344__$1 = (function (){var statearr_21353 = state_21344;(statearr_21353[7] = inst_21325__$1);
(statearr_21353[8] = inst_21330);
return statearr_21353;
})();var statearr_21354_21371 = state_21344__$1;(statearr_21354_21371[2] = null);
(statearr_21354_21371[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21345 === 8))
{var inst_21335 = cljs.core.async.close_BANG_(ch);var state_21344__$1 = state_21344;var statearr_21355_21372 = state_21344__$1;(statearr_21355_21372[2] = inst_21335);
(statearr_21355_21372[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21345 === 9))
{var state_21344__$1 = state_21344;var statearr_21356_21373 = state_21344__$1;(statearr_21356_21373[2] = null);
(statearr_21356_21373[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21345 === 10))
{var inst_21338 = (state_21344[2]);var state_21344__$1 = state_21344;var statearr_21357_21374 = state_21344__$1;(statearr_21357_21374[2] = inst_21338);
(statearr_21357_21374[1] = 6);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21361 = [null,null,null,null,null,null,null,null,null];(statearr_21361[0] = state_machine__5507__auto__);
(statearr_21361[1] = 1);
return statearr_21361;
});
var state_machine__5507__auto____1 = (function (state_21344){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21344);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21362){if((e21362 instanceof Object))
{var ex__5510__auto__ = e21362;var statearr_21363_21375 = state_21344;(statearr_21363_21375[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21344);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e21362;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21376 = state_21344;
state_21344 = G__21376;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21344){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21364 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
cljs.core.async.Mux = (function (){var obj21378 = {};return obj21378;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21380 = {};return obj21380;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21604 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21604 = (function (cs,ch,mult,meta21605){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21605 = meta21605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21604.cljs$lang$type = true;
cljs.core.async.t21604.cljs$lang$ctorStr = "cljs.core.async/t21604";
cljs.core.async.t21604.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21604");
});})(cs))
;
cljs.core.async.t21604.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21604.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21604.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21604.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21604.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21606){var self__ = this;
var _21606__$1 = this;return self__.meta21605;
});})(cs))
;
cljs.core.async.t21604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21606,meta21605__$1){var self__ = this;
var _21606__$1 = this;return (new cljs.core.async.t21604(self__.cs,self__.ch,self__.mult,meta21605__$1));
});})(cs))
;
cljs.core.async.__GT_t21604 = ((function (cs){
return (function __GT_t21604(cs__$1,ch__$1,mult__$1,meta21605){return (new cljs.core.async.t21604(cs__$1,ch__$1,mult__$1,meta21605));
});})(cs))
;
}
return (new cljs.core.async.t21604(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___21827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21741){var state_val_21742 = (state_21741[1]);if((state_val_21742 === 32))
{var inst_21685 = (state_21741[7]);var inst_21609 = (state_21741[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21741,31,Object,null,30);var inst_21692 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21685,inst_21609,done);var state_21741__$1 = state_21741;var statearr_21743_21828 = state_21741__$1;(statearr_21743_21828[2] = inst_21692);
cljs.core.async.impl.ioc_helpers.process_exception(state_21741__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 1))
{var state_21741__$1 = state_21741;var statearr_21744_21829 = state_21741__$1;(statearr_21744_21829[2] = null);
(statearr_21744_21829[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 33))
{var inst_21698 = (state_21741[9]);var inst_21700 = cljs.core.chunked_seq_QMARK_(inst_21698);var state_21741__$1 = state_21741;if(inst_21700)
{var statearr_21745_21830 = state_21741__$1;(statearr_21745_21830[1] = 36);
} else
{var statearr_21746_21831 = state_21741__$1;(statearr_21746_21831[1] = 37);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 2))
{var state_21741__$1 = state_21741;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21741__$1,4,ch);
} else
{if((state_val_21742 === 34))
{var state_21741__$1 = state_21741;var statearr_21747_21832 = state_21741__$1;(statearr_21747_21832[2] = null);
(statearr_21747_21832[1] = 35);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 3))
{var inst_21739 = (state_21741[2]);var state_21741__$1 = state_21741;return cljs.core.async.impl.ioc_helpers.return_chan(state_21741__$1,inst_21739);
} else
{if((state_val_21742 === 35))
{var inst_21723 = (state_21741[2]);var state_21741__$1 = state_21741;var statearr_21748_21833 = state_21741__$1;(statearr_21748_21833[2] = inst_21723);
(statearr_21748_21833[1] = 29);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 4))
{var inst_21609 = (state_21741[8]);var inst_21609__$1 = (state_21741[2]);var inst_21610 = (inst_21609__$1 == null);var state_21741__$1 = (function (){var statearr_21749 = state_21741;(statearr_21749[8] = inst_21609__$1);
return statearr_21749;
})();if(cljs.core.truth_(inst_21610))
{var statearr_21750_21834 = state_21741__$1;(statearr_21750_21834[1] = 5);
} else
{var statearr_21751_21835 = state_21741__$1;(statearr_21751_21835[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 36))
{var inst_21698 = (state_21741[9]);var inst_21702 = cljs.core.chunk_first(inst_21698);var inst_21703 = cljs.core.chunk_rest(inst_21698);var inst_21704 = cljs.core.count(inst_21702);var inst_21677 = inst_21703;var inst_21678 = inst_21702;var inst_21679 = inst_21704;var inst_21680 = 0;var state_21741__$1 = (function (){var statearr_21752 = state_21741;(statearr_21752[10] = inst_21679);
(statearr_21752[11] = inst_21677);
(statearr_21752[12] = inst_21678);
(statearr_21752[13] = inst_21680);
return statearr_21752;
})();var statearr_21753_21836 = state_21741__$1;(statearr_21753_21836[2] = null);
(statearr_21753_21836[1] = 25);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 5))
{var inst_21616 = cljs.core.deref(cs);var inst_21617 = cljs.core.seq(inst_21616);var inst_21618 = inst_21617;var inst_21619 = null;var inst_21620 = 0;var inst_21621 = 0;var state_21741__$1 = (function (){var statearr_21754 = state_21741;(statearr_21754[14] = inst_21620);
(statearr_21754[15] = inst_21619);
(statearr_21754[16] = inst_21621);
(statearr_21754[17] = inst_21618);
return statearr_21754;
})();var statearr_21755_21837 = state_21741__$1;(statearr_21755_21837[2] = null);
(statearr_21755_21837[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 37))
{var inst_21698 = (state_21741[9]);var inst_21707 = cljs.core.first(inst_21698);var state_21741__$1 = (function (){var statearr_21756 = state_21741;(statearr_21756[18] = inst_21707);
return statearr_21756;
})();var statearr_21757_21838 = state_21741__$1;(statearr_21757_21838[2] = null);
(statearr_21757_21838[1] = 41);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 6))
{var inst_21669 = (state_21741[19]);var inst_21668 = cljs.core.deref(cs);var inst_21669__$1 = cljs.core.keys(inst_21668);var inst_21670 = cljs.core.count(inst_21669__$1);var inst_21671 = cljs.core.reset_BANG_(dctr,inst_21670);var inst_21676 = cljs.core.seq(inst_21669__$1);var inst_21677 = inst_21676;var inst_21678 = null;var inst_21679 = 0;var inst_21680 = 0;var state_21741__$1 = (function (){var statearr_21758 = state_21741;(statearr_21758[19] = inst_21669__$1);
(statearr_21758[10] = inst_21679);
(statearr_21758[11] = inst_21677);
(statearr_21758[12] = inst_21678);
(statearr_21758[13] = inst_21680);
(statearr_21758[20] = inst_21671);
return statearr_21758;
})();var statearr_21759_21839 = state_21741__$1;(statearr_21759_21839[2] = null);
(statearr_21759_21839[1] = 25);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 38))
{var inst_21720 = (state_21741[2]);var state_21741__$1 = state_21741;var statearr_21760_21840 = state_21741__$1;(statearr_21760_21840[2] = inst_21720);
(statearr_21760_21840[1] = 35);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 7))
{var inst_21737 = (state_21741[2]);var state_21741__$1 = state_21741;var statearr_21761_21841 = state_21741__$1;(statearr_21761_21841[2] = inst_21737);
(statearr_21761_21841[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 39))
{var inst_21698 = (state_21741[9]);var inst_21716 = (state_21741[2]);var inst_21717 = cljs.core.next(inst_21698);var inst_21677 = inst_21717;var inst_21678 = null;var inst_21679 = 0;var inst_21680 = 0;var state_21741__$1 = (function (){var statearr_21762 = state_21741;(statearr_21762[10] = inst_21679);
(statearr_21762[21] = inst_21716);
(statearr_21762[11] = inst_21677);
(statearr_21762[12] = inst_21678);
(statearr_21762[13] = inst_21680);
return statearr_21762;
})();var statearr_21763_21842 = state_21741__$1;(statearr_21763_21842[2] = null);
(statearr_21763_21842[1] = 25);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 8))
{var inst_21620 = (state_21741[14]);var inst_21621 = (state_21741[16]);var inst_21623 = (inst_21621 < inst_21620);var inst_21624 = inst_21623;var state_21741__$1 = state_21741;if(cljs.core.truth_(inst_21624))
{var statearr_21764_21843 = state_21741__$1;(statearr_21764_21843[1] = 10);
} else
{var statearr_21765_21844 = state_21741__$1;(statearr_21765_21844[1] = 11);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 40))
{var inst_21707 = (state_21741[18]);var inst_21708 = (state_21741[2]);var inst_21709 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21710 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21707);var state_21741__$1 = (function (){var statearr_21766 = state_21741;(statearr_21766[22] = inst_21708);
(statearr_21766[23] = inst_21709);
return statearr_21766;
})();var statearr_21767_21845 = state_21741__$1;(statearr_21767_21845[2] = inst_21710);
cljs.core.async.impl.ioc_helpers.process_exception(state_21741__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 9))
{var inst_21666 = (state_21741[2]);var state_21741__$1 = state_21741;var statearr_21768_21846 = state_21741__$1;(statearr_21768_21846[2] = inst_21666);
(statearr_21768_21846[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 41))
{var inst_21707 = (state_21741[18]);var inst_21609 = (state_21741[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21741,40,Object,null,39);var inst_21714 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21707,inst_21609,done);var state_21741__$1 = state_21741;var statearr_21769_21847 = state_21741__$1;(statearr_21769_21847[2] = inst_21714);
cljs.core.async.impl.ioc_helpers.process_exception(state_21741__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 10))
{var inst_21619 = (state_21741[15]);var inst_21621 = (state_21741[16]);var inst_21627 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21619,inst_21621);var inst_21628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21627,0,null);var inst_21629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21627,1,null);var state_21741__$1 = (function (){var statearr_21770 = state_21741;(statearr_21770[24] = inst_21628);
return statearr_21770;
})();if(cljs.core.truth_(inst_21629))
{var statearr_21771_21848 = state_21741__$1;(statearr_21771_21848[1] = 13);
} else
{var statearr_21772_21849 = state_21741__$1;(statearr_21772_21849[1] = 14);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 42))
{var state_21741__$1 = state_21741;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21741__$1,45,dchan);
} else
{if((state_val_21742 === 11))
{var inst_21638 = (state_21741[25]);var inst_21618 = (state_21741[17]);var inst_21638__$1 = cljs.core.seq(inst_21618);var state_21741__$1 = (function (){var statearr_21773 = state_21741;(statearr_21773[25] = inst_21638__$1);
return statearr_21773;
})();if(inst_21638__$1)
{var statearr_21774_21850 = state_21741__$1;(statearr_21774_21850[1] = 16);
} else
{var statearr_21775_21851 = state_21741__$1;(statearr_21775_21851[1] = 17);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 43))
{var state_21741__$1 = state_21741;var statearr_21776_21852 = state_21741__$1;(statearr_21776_21852[2] = null);
(statearr_21776_21852[1] = 44);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 12))
{var inst_21664 = (state_21741[2]);var state_21741__$1 = state_21741;var statearr_21777_21853 = state_21741__$1;(statearr_21777_21853[2] = inst_21664);
(statearr_21777_21853[1] = 9);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 44))
{var inst_21734 = (state_21741[2]);var state_21741__$1 = (function (){var statearr_21778 = state_21741;(statearr_21778[26] = inst_21734);
return statearr_21778;
})();var statearr_21779_21854 = state_21741__$1;(statearr_21779_21854[2] = null);
(statearr_21779_21854[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 13))
{var inst_21628 = (state_21741[24]);var inst_21631 = cljs.core.async.close_BANG_(inst_21628);var state_21741__$1 = state_21741;var statearr_21780_21855 = state_21741__$1;(statearr_21780_21855[2] = inst_21631);
(statearr_21780_21855[1] = 15);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 45))
{var inst_21731 = (state_21741[2]);var state_21741__$1 = state_21741;var statearr_21784_21856 = state_21741__$1;(statearr_21784_21856[2] = inst_21731);
(statearr_21784_21856[1] = 44);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 14))
{var state_21741__$1 = state_21741;var statearr_21785_21857 = state_21741__$1;(statearr_21785_21857[2] = null);
(statearr_21785_21857[1] = 15);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 15))
{var inst_21620 = (state_21741[14]);var inst_21619 = (state_21741[15]);var inst_21621 = (state_21741[16]);var inst_21618 = (state_21741[17]);var inst_21634 = (state_21741[2]);var inst_21635 = (inst_21621 + 1);var tmp21781 = inst_21620;var tmp21782 = inst_21619;var tmp21783 = inst_21618;var inst_21618__$1 = tmp21783;var inst_21619__$1 = tmp21782;var inst_21620__$1 = tmp21781;var inst_21621__$1 = inst_21635;var state_21741__$1 = (function (){var statearr_21786 = state_21741;(statearr_21786[27] = inst_21634);
(statearr_21786[14] = inst_21620__$1);
(statearr_21786[15] = inst_21619__$1);
(statearr_21786[16] = inst_21621__$1);
(statearr_21786[17] = inst_21618__$1);
return statearr_21786;
})();var statearr_21787_21858 = state_21741__$1;(statearr_21787_21858[2] = null);
(statearr_21787_21858[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 16))
{var inst_21638 = (state_21741[25]);var inst_21640 = cljs.core.chunked_seq_QMARK_(inst_21638);var state_21741__$1 = state_21741;if(inst_21640)
{var statearr_21788_21859 = state_21741__$1;(statearr_21788_21859[1] = 19);
} else
{var statearr_21789_21860 = state_21741__$1;(statearr_21789_21860[1] = 20);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 17))
{var state_21741__$1 = state_21741;var statearr_21790_21861 = state_21741__$1;(statearr_21790_21861[2] = null);
(statearr_21790_21861[1] = 18);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 18))
{var inst_21662 = (state_21741[2]);var state_21741__$1 = state_21741;var statearr_21791_21862 = state_21741__$1;(statearr_21791_21862[2] = inst_21662);
(statearr_21791_21862[1] = 12);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 19))
{var inst_21638 = (state_21741[25]);var inst_21642 = cljs.core.chunk_first(inst_21638);var inst_21643 = cljs.core.chunk_rest(inst_21638);var inst_21644 = cljs.core.count(inst_21642);var inst_21618 = inst_21643;var inst_21619 = inst_21642;var inst_21620 = inst_21644;var inst_21621 = 0;var state_21741__$1 = (function (){var statearr_21792 = state_21741;(statearr_21792[14] = inst_21620);
(statearr_21792[15] = inst_21619);
(statearr_21792[16] = inst_21621);
(statearr_21792[17] = inst_21618);
return statearr_21792;
})();var statearr_21793_21863 = state_21741__$1;(statearr_21793_21863[2] = null);
(statearr_21793_21863[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 20))
{var inst_21638 = (state_21741[25]);var inst_21648 = cljs.core.first(inst_21638);var inst_21649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21648,0,null);var inst_21650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21648,1,null);var state_21741__$1 = (function (){var statearr_21794 = state_21741;(statearr_21794[28] = inst_21649);
return statearr_21794;
})();if(cljs.core.truth_(inst_21650))
{var statearr_21795_21864 = state_21741__$1;(statearr_21795_21864[1] = 22);
} else
{var statearr_21796_21865 = state_21741__$1;(statearr_21796_21865[1] = 23);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 21))
{var inst_21659 = (state_21741[2]);var state_21741__$1 = state_21741;var statearr_21797_21866 = state_21741__$1;(statearr_21797_21866[2] = inst_21659);
(statearr_21797_21866[1] = 18);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 22))
{var inst_21649 = (state_21741[28]);var inst_21652 = cljs.core.async.close_BANG_(inst_21649);var state_21741__$1 = state_21741;var statearr_21798_21867 = state_21741__$1;(statearr_21798_21867[2] = inst_21652);
(statearr_21798_21867[1] = 24);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 23))
{var state_21741__$1 = state_21741;var statearr_21799_21868 = state_21741__$1;(statearr_21799_21868[2] = null);
(statearr_21799_21868[1] = 24);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 24))
{var inst_21638 = (state_21741[25]);var inst_21655 = (state_21741[2]);var inst_21656 = cljs.core.next(inst_21638);var inst_21618 = inst_21656;var inst_21619 = null;var inst_21620 = 0;var inst_21621 = 0;var state_21741__$1 = (function (){var statearr_21800 = state_21741;(statearr_21800[29] = inst_21655);
(statearr_21800[14] = inst_21620);
(statearr_21800[15] = inst_21619);
(statearr_21800[16] = inst_21621);
(statearr_21800[17] = inst_21618);
return statearr_21800;
})();var statearr_21801_21869 = state_21741__$1;(statearr_21801_21869[2] = null);
(statearr_21801_21869[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 25))
{var inst_21679 = (state_21741[10]);var inst_21680 = (state_21741[13]);var inst_21682 = (inst_21680 < inst_21679);var inst_21683 = inst_21682;var state_21741__$1 = state_21741;if(cljs.core.truth_(inst_21683))
{var statearr_21802_21870 = state_21741__$1;(statearr_21802_21870[1] = 27);
} else
{var statearr_21803_21871 = state_21741__$1;(statearr_21803_21871[1] = 28);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 26))
{var inst_21669 = (state_21741[19]);var inst_21727 = (state_21741[2]);var inst_21728 = cljs.core.seq(inst_21669);var state_21741__$1 = (function (){var statearr_21804 = state_21741;(statearr_21804[30] = inst_21727);
return statearr_21804;
})();if(inst_21728)
{var statearr_21805_21872 = state_21741__$1;(statearr_21805_21872[1] = 42);
} else
{var statearr_21806_21873 = state_21741__$1;(statearr_21806_21873[1] = 43);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 27))
{var inst_21678 = (state_21741[12]);var inst_21680 = (state_21741[13]);var inst_21685 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21678,inst_21680);var state_21741__$1 = (function (){var statearr_21807 = state_21741;(statearr_21807[7] = inst_21685);
return statearr_21807;
})();var statearr_21808_21874 = state_21741__$1;(statearr_21808_21874[2] = null);
(statearr_21808_21874[1] = 32);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 28))
{var inst_21698 = (state_21741[9]);var inst_21677 = (state_21741[11]);var inst_21698__$1 = cljs.core.seq(inst_21677);var state_21741__$1 = (function (){var statearr_21812 = state_21741;(statearr_21812[9] = inst_21698__$1);
return statearr_21812;
})();if(inst_21698__$1)
{var statearr_21813_21875 = state_21741__$1;(statearr_21813_21875[1] = 33);
} else
{var statearr_21814_21876 = state_21741__$1;(statearr_21814_21876[1] = 34);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 29))
{var inst_21725 = (state_21741[2]);var state_21741__$1 = state_21741;var statearr_21815_21877 = state_21741__$1;(statearr_21815_21877[2] = inst_21725);
(statearr_21815_21877[1] = 26);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 30))
{var inst_21679 = (state_21741[10]);var inst_21677 = (state_21741[11]);var inst_21678 = (state_21741[12]);var inst_21680 = (state_21741[13]);var inst_21694 = (state_21741[2]);var inst_21695 = (inst_21680 + 1);var tmp21809 = inst_21679;var tmp21810 = inst_21677;var tmp21811 = inst_21678;var inst_21677__$1 = tmp21810;var inst_21678__$1 = tmp21811;var inst_21679__$1 = tmp21809;var inst_21680__$1 = inst_21695;var state_21741__$1 = (function (){var statearr_21816 = state_21741;(statearr_21816[10] = inst_21679__$1);
(statearr_21816[31] = inst_21694);
(statearr_21816[11] = inst_21677__$1);
(statearr_21816[12] = inst_21678__$1);
(statearr_21816[13] = inst_21680__$1);
return statearr_21816;
})();var statearr_21817_21878 = state_21741__$1;(statearr_21817_21878[2] = null);
(statearr_21817_21878[1] = 25);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21742 === 31))
{var inst_21685 = (state_21741[7]);var inst_21686 = (state_21741[2]);var inst_21687 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21688 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21685);var state_21741__$1 = (function (){var statearr_21818 = state_21741;(statearr_21818[32] = inst_21686);
(statearr_21818[33] = inst_21687);
return statearr_21818;
})();var statearr_21819_21879 = state_21741__$1;(statearr_21819_21879[2] = inst_21688);
cljs.core.async.impl.ioc_helpers.process_exception(state_21741__$1);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21823[0] = state_machine__5507__auto__);
(statearr_21823[1] = 1);
return statearr_21823;
});
var state_machine__5507__auto____1 = (function (state_21741){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21741);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21824){if((e21824 instanceof Object))
{var ex__5510__auto__ = e21824;var statearr_21825_21880 = state_21741;(statearr_21825_21880[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21741);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e21824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21881 = state_21741;
state_21741 = G__21881;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21741){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21826 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21827);
return statearr_21826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj21883 = {};return obj21883;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$127,null,cljs.core.constant$keyword$128,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$129);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$128);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$129,chs);var pauses = pick(cljs.core.constant$keyword$127,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$130,solos,cljs.core.constant$keyword$131,pick(cljs.core.constant$keyword$128,chs),cljs.core.constant$keyword$132,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$127)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t21993 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21993 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta21994){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta21994 = meta21994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21993.cljs$lang$type = true;
cljs.core.async.t21993.cljs$lang$ctorStr = "cljs.core.async/t21993";
cljs.core.async.t21993.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21993");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21993.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t21993.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21993.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21993.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21993.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21993.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21993.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21993.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21995){var self__ = this;
var _21995__$1 = this;return self__.meta21994;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21995,meta21994__$1){var self__ = this;
var _21995__$1 = this;return (new cljs.core.async.t21993(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta21994__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t21993 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21993(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21994){return (new cljs.core.async.t21993(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21994));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t21993(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___22102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22060){var state_val_22061 = (state_22060[1]);if((state_val_22061 === 1))
{var inst_21999 = (state_22060[7]);var inst_21999__$1 = calc_state();var inst_22000 = cljs.core.seq_QMARK_(inst_21999__$1);var state_22060__$1 = (function (){var statearr_22062 = state_22060;(statearr_22062[7] = inst_21999__$1);
return statearr_22062;
})();if(inst_22000)
{var statearr_22063_22103 = state_22060__$1;(statearr_22063_22103[1] = 2);
} else
{var statearr_22064_22104 = state_22060__$1;(statearr_22064_22104[1] = 3);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 2))
{var inst_21999 = (state_22060[7]);var inst_22002 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21999);var state_22060__$1 = state_22060;var statearr_22065_22105 = state_22060__$1;(statearr_22065_22105[2] = inst_22002);
(statearr_22065_22105[1] = 4);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 3))
{var inst_21999 = (state_22060[7]);var state_22060__$1 = state_22060;var statearr_22066_22106 = state_22060__$1;(statearr_22066_22106[2] = inst_21999);
(statearr_22066_22106[1] = 4);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 4))
{var inst_21999 = (state_22060[7]);var inst_22005 = (state_22060[2]);var inst_22006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22005,cljs.core.constant$keyword$132);var inst_22007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22005,cljs.core.constant$keyword$131);var inst_22008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22005,cljs.core.constant$keyword$130);var inst_22009 = inst_21999;var state_22060__$1 = (function (){var statearr_22067 = state_22060;(statearr_22067[8] = inst_22009);
(statearr_22067[9] = inst_22006);
(statearr_22067[10] = inst_22007);
(statearr_22067[11] = inst_22008);
return statearr_22067;
})();var statearr_22068_22107 = state_22060__$1;(statearr_22068_22107[2] = null);
(statearr_22068_22107[1] = 5);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 5))
{var inst_22009 = (state_22060[8]);var inst_22012 = cljs.core.seq_QMARK_(inst_22009);var state_22060__$1 = state_22060;if(inst_22012)
{var statearr_22069_22108 = state_22060__$1;(statearr_22069_22108[1] = 7);
} else
{var statearr_22070_22109 = state_22060__$1;(statearr_22070_22109[1] = 8);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 6))
{var inst_22058 = (state_22060[2]);var state_22060__$1 = state_22060;return cljs.core.async.impl.ioc_helpers.return_chan(state_22060__$1,inst_22058);
} else
{if((state_val_22061 === 7))
{var inst_22009 = (state_22060[8]);var inst_22014 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22009);var state_22060__$1 = state_22060;var statearr_22071_22110 = state_22060__$1;(statearr_22071_22110[2] = inst_22014);
(statearr_22071_22110[1] = 9);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 8))
{var inst_22009 = (state_22060[8]);var state_22060__$1 = state_22060;var statearr_22072_22111 = state_22060__$1;(statearr_22072_22111[2] = inst_22009);
(statearr_22072_22111[1] = 9);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 9))
{var inst_22017 = (state_22060[12]);var inst_22017__$1 = (state_22060[2]);var inst_22018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22017__$1,cljs.core.constant$keyword$132);var inst_22019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22017__$1,cljs.core.constant$keyword$131);var inst_22020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22017__$1,cljs.core.constant$keyword$130);var state_22060__$1 = (function (){var statearr_22073 = state_22060;(statearr_22073[13] = inst_22020);
(statearr_22073[12] = inst_22017__$1);
(statearr_22073[14] = inst_22019);
return statearr_22073;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22060__$1,10,inst_22018);
} else
{if((state_val_22061 === 10))
{var inst_22025 = (state_22060[15]);var inst_22024 = (state_22060[16]);var inst_22023 = (state_22060[2]);var inst_22024__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22023,0,null);var inst_22025__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22023,1,null);var inst_22026 = (inst_22024__$1 == null);var inst_22027 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22025__$1,change);var inst_22028 = (inst_22026) || (inst_22027);var state_22060__$1 = (function (){var statearr_22074 = state_22060;(statearr_22074[15] = inst_22025__$1);
(statearr_22074[16] = inst_22024__$1);
return statearr_22074;
})();if(cljs.core.truth_(inst_22028))
{var statearr_22075_22112 = state_22060__$1;(statearr_22075_22112[1] = 11);
} else
{var statearr_22076_22113 = state_22060__$1;(statearr_22076_22113[1] = 12);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 11))
{var inst_22024 = (state_22060[16]);var inst_22030 = (inst_22024 == null);var state_22060__$1 = state_22060;if(cljs.core.truth_(inst_22030))
{var statearr_22077_22114 = state_22060__$1;(statearr_22077_22114[1] = 14);
} else
{var statearr_22078_22115 = state_22060__$1;(statearr_22078_22115[1] = 15);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 12))
{var inst_22020 = (state_22060[13]);var inst_22025 = (state_22060[15]);var inst_22039 = (state_22060[17]);var inst_22039__$1 = (inst_22020.cljs$core$IFn$_invoke$arity$1 ? inst_22020.cljs$core$IFn$_invoke$arity$1(inst_22025) : inst_22020.call(null,inst_22025));var state_22060__$1 = (function (){var statearr_22079 = state_22060;(statearr_22079[17] = inst_22039__$1);
return statearr_22079;
})();if(cljs.core.truth_(inst_22039__$1))
{var statearr_22080_22116 = state_22060__$1;(statearr_22080_22116[1] = 17);
} else
{var statearr_22081_22117 = state_22060__$1;(statearr_22081_22117[1] = 18);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 13))
{var inst_22056 = (state_22060[2]);var state_22060__$1 = state_22060;var statearr_22082_22118 = state_22060__$1;(statearr_22082_22118[2] = inst_22056);
(statearr_22082_22118[1] = 6);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 14))
{var inst_22025 = (state_22060[15]);var inst_22032 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22025);var state_22060__$1 = state_22060;var statearr_22083_22119 = state_22060__$1;(statearr_22083_22119[2] = inst_22032);
(statearr_22083_22119[1] = 16);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 15))
{var state_22060__$1 = state_22060;var statearr_22084_22120 = state_22060__$1;(statearr_22084_22120[2] = null);
(statearr_22084_22120[1] = 16);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 16))
{var inst_22035 = (state_22060[2]);var inst_22036 = calc_state();var inst_22009 = inst_22036;var state_22060__$1 = (function (){var statearr_22085 = state_22060;(statearr_22085[18] = inst_22035);
(statearr_22085[8] = inst_22009);
return statearr_22085;
})();var statearr_22086_22121 = state_22060__$1;(statearr_22086_22121[2] = null);
(statearr_22086_22121[1] = 5);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 17))
{var inst_22039 = (state_22060[17]);var state_22060__$1 = state_22060;var statearr_22087_22122 = state_22060__$1;(statearr_22087_22122[2] = inst_22039);
(statearr_22087_22122[1] = 19);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 18))
{var inst_22020 = (state_22060[13]);var inst_22025 = (state_22060[15]);var inst_22019 = (state_22060[14]);var inst_22042 = cljs.core.empty_QMARK_(inst_22020);var inst_22043 = (inst_22019.cljs$core$IFn$_invoke$arity$1 ? inst_22019.cljs$core$IFn$_invoke$arity$1(inst_22025) : inst_22019.call(null,inst_22025));var inst_22044 = cljs.core.not(inst_22043);var inst_22045 = (inst_22042) && (inst_22044);var state_22060__$1 = state_22060;var statearr_22088_22123 = state_22060__$1;(statearr_22088_22123[2] = inst_22045);
(statearr_22088_22123[1] = 19);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 19))
{var inst_22047 = (state_22060[2]);var state_22060__$1 = state_22060;if(cljs.core.truth_(inst_22047))
{var statearr_22089_22124 = state_22060__$1;(statearr_22089_22124[1] = 20);
} else
{var statearr_22090_22125 = state_22060__$1;(statearr_22090_22125[1] = 21);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 20))
{var inst_22024 = (state_22060[16]);var state_22060__$1 = state_22060;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22060__$1,23,out,inst_22024);
} else
{if((state_val_22061 === 21))
{var state_22060__$1 = state_22060;var statearr_22091_22126 = state_22060__$1;(statearr_22091_22126[2] = null);
(statearr_22091_22126[1] = 22);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 22))
{var inst_22017 = (state_22060[12]);var inst_22053 = (state_22060[2]);var inst_22009 = inst_22017;var state_22060__$1 = (function (){var statearr_22092 = state_22060;(statearr_22092[8] = inst_22009);
(statearr_22092[19] = inst_22053);
return statearr_22092;
})();var statearr_22093_22127 = state_22060__$1;(statearr_22093_22127[2] = null);
(statearr_22093_22127[1] = 5);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22061 === 23))
{var inst_22050 = (state_22060[2]);var state_22060__$1 = state_22060;var statearr_22094_22128 = state_22060__$1;(statearr_22094_22128[2] = inst_22050);
(statearr_22094_22128[1] = 22);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22098[0] = state_machine__5507__auto__);
(statearr_22098[1] = 1);
return statearr_22098;
});
var state_machine__5507__auto____1 = (function (state_22060){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22060);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22099){if((e22099 instanceof Object))
{var ex__5510__auto__ = e22099;var statearr_22100_22129 = state_22060;(statearr_22100_22129[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22060);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e22099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__22130 = state_22060;
state_22060 = G__22130;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22060){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22101 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22102);
return statearr_22101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj22132 = {};return obj22132;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
return (function (topic){var or__3406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3406__auto__,mults){
return (function (p1__22133_SHARP_){if(cljs.core.truth_((p1__22133_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22133_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__22133_SHARP_.call(null,topic))))
{return p1__22133_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22133_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22258 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22258 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22259){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22259 = meta22259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22258.cljs$lang$type = true;
cljs.core.async.t22258.cljs$lang$ctorStr = "cljs.core.async/t22258";
cljs.core.async.t22258.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22258");
});})(mults,ensure_mult))
;
cljs.core.async.t22258.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22258.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22258.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22258.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22258.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22260){var self__ = this;
var _22260__$1 = this;return self__.meta22259;
});})(mults,ensure_mult))
;
cljs.core.async.t22258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22260,meta22259__$1){var self__ = this;
var _22260__$1 = this;return (new cljs.core.async.t22258(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22259__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22258 = ((function (mults,ensure_mult){
return (function __GT_t22258(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22259){return (new cljs.core.async.t22258(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22259));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22258(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___22382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22334){var state_val_22335 = (state_22334[1]);if((state_val_22335 === 1))
{var state_22334__$1 = state_22334;var statearr_22336_22383 = state_22334__$1;(statearr_22336_22383[2] = null);
(statearr_22336_22383[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 2))
{var state_22334__$1 = state_22334;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22334__$1,4,ch);
} else
{if((state_val_22335 === 3))
{var inst_22332 = (state_22334[2]);var state_22334__$1 = state_22334;return cljs.core.async.impl.ioc_helpers.return_chan(state_22334__$1,inst_22332);
} else
{if((state_val_22335 === 4))
{var inst_22263 = (state_22334[7]);var inst_22263__$1 = (state_22334[2]);var inst_22264 = (inst_22263__$1 == null);var state_22334__$1 = (function (){var statearr_22337 = state_22334;(statearr_22337[7] = inst_22263__$1);
return statearr_22337;
})();if(cljs.core.truth_(inst_22264))
{var statearr_22338_22384 = state_22334__$1;(statearr_22338_22384[1] = 5);
} else
{var statearr_22339_22385 = state_22334__$1;(statearr_22339_22385[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 5))
{var inst_22270 = cljs.core.deref(mults);var inst_22271 = cljs.core.vals(inst_22270);var inst_22272 = cljs.core.seq(inst_22271);var inst_22273 = inst_22272;var inst_22274 = null;var inst_22275 = 0;var inst_22276 = 0;var state_22334__$1 = (function (){var statearr_22340 = state_22334;(statearr_22340[8] = inst_22276);
(statearr_22340[9] = inst_22274);
(statearr_22340[10] = inst_22275);
(statearr_22340[11] = inst_22273);
return statearr_22340;
})();var statearr_22341_22386 = state_22334__$1;(statearr_22341_22386[2] = null);
(statearr_22341_22386[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 6))
{var inst_22263 = (state_22334[7]);var inst_22311 = (state_22334[12]);var inst_22313 = (state_22334[13]);var inst_22311__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22263) : topic_fn.call(null,inst_22263));var inst_22312 = cljs.core.deref(mults);var inst_22313__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22312,inst_22311__$1);var state_22334__$1 = (function (){var statearr_22342 = state_22334;(statearr_22342[12] = inst_22311__$1);
(statearr_22342[13] = inst_22313__$1);
return statearr_22342;
})();if(cljs.core.truth_(inst_22313__$1))
{var statearr_22343_22387 = state_22334__$1;(statearr_22343_22387[1] = 19);
} else
{var statearr_22344_22388 = state_22334__$1;(statearr_22344_22388[1] = 20);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 7))
{var inst_22330 = (state_22334[2]);var state_22334__$1 = state_22334;var statearr_22345_22389 = state_22334__$1;(statearr_22345_22389[2] = inst_22330);
(statearr_22345_22389[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 8))
{var inst_22276 = (state_22334[8]);var inst_22275 = (state_22334[10]);var inst_22278 = (inst_22276 < inst_22275);var inst_22279 = inst_22278;var state_22334__$1 = state_22334;if(cljs.core.truth_(inst_22279))
{var statearr_22349_22390 = state_22334__$1;(statearr_22349_22390[1] = 10);
} else
{var statearr_22350_22391 = state_22334__$1;(statearr_22350_22391[1] = 11);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 9))
{var inst_22309 = (state_22334[2]);var state_22334__$1 = state_22334;var statearr_22351_22392 = state_22334__$1;(statearr_22351_22392[2] = inst_22309);
(statearr_22351_22392[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 10))
{var inst_22276 = (state_22334[8]);var inst_22274 = (state_22334[9]);var inst_22275 = (state_22334[10]);var inst_22273 = (state_22334[11]);var inst_22281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22274,inst_22276);var inst_22282 = cljs.core.async.muxch_STAR_(inst_22281);var inst_22283 = cljs.core.async.close_BANG_(inst_22282);var inst_22284 = (inst_22276 + 1);var tmp22346 = inst_22274;var tmp22347 = inst_22275;var tmp22348 = inst_22273;var inst_22273__$1 = tmp22348;var inst_22274__$1 = tmp22346;var inst_22275__$1 = tmp22347;var inst_22276__$1 = inst_22284;var state_22334__$1 = (function (){var statearr_22352 = state_22334;(statearr_22352[8] = inst_22276__$1);
(statearr_22352[9] = inst_22274__$1);
(statearr_22352[10] = inst_22275__$1);
(statearr_22352[11] = inst_22273__$1);
(statearr_22352[14] = inst_22283);
return statearr_22352;
})();var statearr_22353_22393 = state_22334__$1;(statearr_22353_22393[2] = null);
(statearr_22353_22393[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 11))
{var inst_22273 = (state_22334[11]);var inst_22287 = (state_22334[15]);var inst_22287__$1 = cljs.core.seq(inst_22273);var state_22334__$1 = (function (){var statearr_22354 = state_22334;(statearr_22354[15] = inst_22287__$1);
return statearr_22354;
})();if(inst_22287__$1)
{var statearr_22355_22394 = state_22334__$1;(statearr_22355_22394[1] = 13);
} else
{var statearr_22356_22395 = state_22334__$1;(statearr_22356_22395[1] = 14);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 12))
{var inst_22307 = (state_22334[2]);var state_22334__$1 = state_22334;var statearr_22357_22396 = state_22334__$1;(statearr_22357_22396[2] = inst_22307);
(statearr_22357_22396[1] = 9);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 13))
{var inst_22287 = (state_22334[15]);var inst_22289 = cljs.core.chunked_seq_QMARK_(inst_22287);var state_22334__$1 = state_22334;if(inst_22289)
{var statearr_22358_22397 = state_22334__$1;(statearr_22358_22397[1] = 16);
} else
{var statearr_22359_22398 = state_22334__$1;(statearr_22359_22398[1] = 17);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 14))
{var state_22334__$1 = state_22334;var statearr_22360_22399 = state_22334__$1;(statearr_22360_22399[2] = null);
(statearr_22360_22399[1] = 15);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 15))
{var inst_22305 = (state_22334[2]);var state_22334__$1 = state_22334;var statearr_22361_22400 = state_22334__$1;(statearr_22361_22400[2] = inst_22305);
(statearr_22361_22400[1] = 12);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 16))
{var inst_22287 = (state_22334[15]);var inst_22291 = cljs.core.chunk_first(inst_22287);var inst_22292 = cljs.core.chunk_rest(inst_22287);var inst_22293 = cljs.core.count(inst_22291);var inst_22273 = inst_22292;var inst_22274 = inst_22291;var inst_22275 = inst_22293;var inst_22276 = 0;var state_22334__$1 = (function (){var statearr_22362 = state_22334;(statearr_22362[8] = inst_22276);
(statearr_22362[9] = inst_22274);
(statearr_22362[10] = inst_22275);
(statearr_22362[11] = inst_22273);
return statearr_22362;
})();var statearr_22363_22401 = state_22334__$1;(statearr_22363_22401[2] = null);
(statearr_22363_22401[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 17))
{var inst_22287 = (state_22334[15]);var inst_22296 = cljs.core.first(inst_22287);var inst_22297 = cljs.core.async.muxch_STAR_(inst_22296);var inst_22298 = cljs.core.async.close_BANG_(inst_22297);var inst_22299 = cljs.core.next(inst_22287);var inst_22273 = inst_22299;var inst_22274 = null;var inst_22275 = 0;var inst_22276 = 0;var state_22334__$1 = (function (){var statearr_22364 = state_22334;(statearr_22364[8] = inst_22276);
(statearr_22364[9] = inst_22274);
(statearr_22364[10] = inst_22275);
(statearr_22364[11] = inst_22273);
(statearr_22364[16] = inst_22298);
return statearr_22364;
})();var statearr_22365_22402 = state_22334__$1;(statearr_22365_22402[2] = null);
(statearr_22365_22402[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 18))
{var inst_22302 = (state_22334[2]);var state_22334__$1 = state_22334;var statearr_22366_22403 = state_22334__$1;(statearr_22366_22403[2] = inst_22302);
(statearr_22366_22403[1] = 15);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 19))
{var state_22334__$1 = state_22334;var statearr_22367_22404 = state_22334__$1;(statearr_22367_22404[2] = null);
(statearr_22367_22404[1] = 24);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 20))
{var state_22334__$1 = state_22334;var statearr_22368_22405 = state_22334__$1;(statearr_22368_22405[2] = null);
(statearr_22368_22405[1] = 21);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 21))
{var inst_22327 = (state_22334[2]);var state_22334__$1 = (function (){var statearr_22369 = state_22334;(statearr_22369[17] = inst_22327);
return statearr_22369;
})();var statearr_22370_22406 = state_22334__$1;(statearr_22370_22406[2] = null);
(statearr_22370_22406[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 22))
{var inst_22324 = (state_22334[2]);var state_22334__$1 = state_22334;var statearr_22371_22407 = state_22334__$1;(statearr_22371_22407[2] = inst_22324);
(statearr_22371_22407[1] = 21);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 23))
{var inst_22311 = (state_22334[12]);var inst_22315 = (state_22334[2]);var inst_22316 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22311);var state_22334__$1 = (function (){var statearr_22372 = state_22334;(statearr_22372[18] = inst_22315);
return statearr_22372;
})();var statearr_22373_22408 = state_22334__$1;(statearr_22373_22408[2] = inst_22316);
cljs.core.async.impl.ioc_helpers.process_exception(state_22334__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22335 === 24))
{var inst_22263 = (state_22334[7]);var inst_22313 = (state_22334[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22334,23,Object,null,22);var inst_22320 = cljs.core.async.muxch_STAR_(inst_22313);var state_22334__$1 = state_22334;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22334__$1,25,inst_22320,inst_22263);
} else
{if((state_val_22335 === 25))
{var inst_22322 = (state_22334[2]);var state_22334__$1 = state_22334;var statearr_22374_22409 = state_22334__$1;(statearr_22374_22409[2] = inst_22322);
cljs.core.async.impl.ioc_helpers.process_exception(state_22334__$1);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22378[0] = state_machine__5507__auto__);
(statearr_22378[1] = 1);
return statearr_22378;
});
var state_machine__5507__auto____1 = (function (state_22334){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22334);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22379){if((e22379 instanceof Object))
{var ex__5510__auto__ = e22379;var statearr_22380_22410 = state_22334;(statearr_22380_22410[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22334);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e22379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__22411 = state_22334;
state_22334 = G__22411;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22334){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22381 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22382);
return statearr_22381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___22548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22518){var state_val_22519 = (state_22518[1]);if((state_val_22519 === 1))
{var state_22518__$1 = state_22518;var statearr_22520_22549 = state_22518__$1;(statearr_22520_22549[2] = null);
(statearr_22520_22549[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 2))
{var inst_22481 = cljs.core.reset_BANG_(dctr,cnt);var inst_22482 = 0;var state_22518__$1 = (function (){var statearr_22521 = state_22518;(statearr_22521[7] = inst_22481);
(statearr_22521[8] = inst_22482);
return statearr_22521;
})();var statearr_22522_22550 = state_22518__$1;(statearr_22522_22550[2] = null);
(statearr_22522_22550[1] = 4);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 3))
{var inst_22516 = (state_22518[2]);var state_22518__$1 = state_22518;return cljs.core.async.impl.ioc_helpers.return_chan(state_22518__$1,inst_22516);
} else
{if((state_val_22519 === 4))
{var inst_22482 = (state_22518[8]);var inst_22484 = (inst_22482 < cnt);var state_22518__$1 = state_22518;if(cljs.core.truth_(inst_22484))
{var statearr_22523_22551 = state_22518__$1;(statearr_22523_22551[1] = 6);
} else
{var statearr_22524_22552 = state_22518__$1;(statearr_22524_22552[1] = 7);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 5))
{var inst_22502 = (state_22518[2]);var state_22518__$1 = (function (){var statearr_22525 = state_22518;(statearr_22525[9] = inst_22502);
return statearr_22525;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22518__$1,12,dchan);
} else
{if((state_val_22519 === 6))
{var state_22518__$1 = state_22518;var statearr_22526_22553 = state_22518__$1;(statearr_22526_22553[2] = null);
(statearr_22526_22553[1] = 11);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 7))
{var state_22518__$1 = state_22518;var statearr_22527_22554 = state_22518__$1;(statearr_22527_22554[2] = null);
(statearr_22527_22554[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 8))
{var inst_22500 = (state_22518[2]);var state_22518__$1 = state_22518;var statearr_22528_22555 = state_22518__$1;(statearr_22528_22555[2] = inst_22500);
(statearr_22528_22555[1] = 5);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 9))
{var inst_22482 = (state_22518[8]);var inst_22495 = (state_22518[2]);var inst_22496 = (inst_22482 + 1);var inst_22482__$1 = inst_22496;var state_22518__$1 = (function (){var statearr_22529 = state_22518;(statearr_22529[8] = inst_22482__$1);
(statearr_22529[10] = inst_22495);
return statearr_22529;
})();var statearr_22530_22556 = state_22518__$1;(statearr_22530_22556[2] = null);
(statearr_22530_22556[1] = 4);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 10))
{var inst_22486 = (state_22518[2]);var inst_22487 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_22518__$1 = (function (){var statearr_22531 = state_22518;(statearr_22531[11] = inst_22486);
return statearr_22531;
})();var statearr_22532_22557 = state_22518__$1;(statearr_22532_22557[2] = inst_22487);
cljs.core.async.impl.ioc_helpers.process_exception(state_22518__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 11))
{var inst_22482 = (state_22518[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22518,10,Object,null,9);var inst_22491 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22482) : chs__$1.call(null,inst_22482));var inst_22492 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22482) : done.call(null,inst_22482));var inst_22493 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22491,inst_22492);var state_22518__$1 = state_22518;var statearr_22533_22558 = state_22518__$1;(statearr_22533_22558[2] = inst_22493);
cljs.core.async.impl.ioc_helpers.process_exception(state_22518__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 12))
{var inst_22504 = (state_22518[12]);var inst_22504__$1 = (state_22518[2]);var inst_22505 = cljs.core.some(cljs.core.nil_QMARK_,inst_22504__$1);var state_22518__$1 = (function (){var statearr_22534 = state_22518;(statearr_22534[12] = inst_22504__$1);
return statearr_22534;
})();if(cljs.core.truth_(inst_22505))
{var statearr_22535_22559 = state_22518__$1;(statearr_22535_22559[1] = 13);
} else
{var statearr_22536_22560 = state_22518__$1;(statearr_22536_22560[1] = 14);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 13))
{var inst_22507 = cljs.core.async.close_BANG_(out);var state_22518__$1 = state_22518;var statearr_22537_22561 = state_22518__$1;(statearr_22537_22561[2] = inst_22507);
(statearr_22537_22561[1] = 15);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 14))
{var inst_22504 = (state_22518[12]);var inst_22509 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22504);var state_22518__$1 = state_22518;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22518__$1,16,out,inst_22509);
} else
{if((state_val_22519 === 15))
{var inst_22514 = (state_22518[2]);var state_22518__$1 = state_22518;var statearr_22538_22562 = state_22518__$1;(statearr_22538_22562[2] = inst_22514);
(statearr_22538_22562[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22519 === 16))
{var inst_22511 = (state_22518[2]);var state_22518__$1 = (function (){var statearr_22539 = state_22518;(statearr_22539[13] = inst_22511);
return statearr_22539;
})();var statearr_22540_22563 = state_22518__$1;(statearr_22540_22563[2] = null);
(statearr_22540_22563[1] = 2);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22544[0] = state_machine__5507__auto__);
(statearr_22544[1] = 1);
return statearr_22544;
});
var state_machine__5507__auto____1 = (function (state_22518){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22518);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22545){if((e22545 instanceof Object))
{var ex__5510__auto__ = e22545;var statearr_22546_22564 = state_22518;(statearr_22546_22564[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22518);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e22545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__22565 = state_22518;
state_22518 = G__22565;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22518){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22547 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22548);
return statearr_22547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22649){var state_val_22650 = (state_22649[1]);if((state_val_22650 === 1))
{var inst_22620 = cljs.core.vec(chs);var inst_22621 = inst_22620;var state_22649__$1 = (function (){var statearr_22651 = state_22649;(statearr_22651[7] = inst_22621);
return statearr_22651;
})();var statearr_22652_22674 = state_22649__$1;(statearr_22652_22674[2] = null);
(statearr_22652_22674[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22650 === 2))
{var inst_22621 = (state_22649[7]);var inst_22623 = cljs.core.count(inst_22621);var inst_22624 = (inst_22623 > 0);var state_22649__$1 = state_22649;if(cljs.core.truth_(inst_22624))
{var statearr_22653_22675 = state_22649__$1;(statearr_22653_22675[1] = 4);
} else
{var statearr_22654_22676 = state_22649__$1;(statearr_22654_22676[1] = 5);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22650 === 3))
{var inst_22647 = (state_22649[2]);var state_22649__$1 = state_22649;return cljs.core.async.impl.ioc_helpers.return_chan(state_22649__$1,inst_22647);
} else
{if((state_val_22650 === 4))
{var inst_22621 = (state_22649[7]);var state_22649__$1 = state_22649;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22649__$1,7,inst_22621);
} else
{if((state_val_22650 === 5))
{var inst_22643 = cljs.core.async.close_BANG_(out);var state_22649__$1 = state_22649;var statearr_22655_22677 = state_22649__$1;(statearr_22655_22677[2] = inst_22643);
(statearr_22655_22677[1] = 6);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22650 === 6))
{var inst_22645 = (state_22649[2]);var state_22649__$1 = state_22649;var statearr_22656_22678 = state_22649__$1;(statearr_22656_22678[2] = inst_22645);
(statearr_22656_22678[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22650 === 7))
{var inst_22628 = (state_22649[8]);var inst_22629 = (state_22649[9]);var inst_22628__$1 = (state_22649[2]);var inst_22629__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22628__$1,0,null);var inst_22630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22628__$1,1,null);var inst_22631 = (inst_22629__$1 == null);var state_22649__$1 = (function (){var statearr_22657 = state_22649;(statearr_22657[10] = inst_22630);
(statearr_22657[8] = inst_22628__$1);
(statearr_22657[9] = inst_22629__$1);
return statearr_22657;
})();if(cljs.core.truth_(inst_22631))
{var statearr_22658_22679 = state_22649__$1;(statearr_22658_22679[1] = 8);
} else
{var statearr_22659_22680 = state_22649__$1;(statearr_22659_22680[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22650 === 8))
{var inst_22621 = (state_22649[7]);var inst_22630 = (state_22649[10]);var inst_22628 = (state_22649[8]);var inst_22629 = (state_22649[9]);var inst_22633 = (function (){var c = inst_22630;var v = inst_22629;var vec__22626 = inst_22628;var cs = inst_22621;return ((function (c,v,vec__22626,cs,inst_22621,inst_22630,inst_22628,inst_22629,state_val_22650){
return (function (p1__22566_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22566_SHARP_);
});
;})(c,v,vec__22626,cs,inst_22621,inst_22630,inst_22628,inst_22629,state_val_22650))
})();var inst_22634 = cljs.core.filterv(inst_22633,inst_22621);var inst_22621__$1 = inst_22634;var state_22649__$1 = (function (){var statearr_22660 = state_22649;(statearr_22660[7] = inst_22621__$1);
return statearr_22660;
})();var statearr_22661_22681 = state_22649__$1;(statearr_22661_22681[2] = null);
(statearr_22661_22681[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22650 === 9))
{var inst_22629 = (state_22649[9]);var state_22649__$1 = state_22649;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22649__$1,11,out,inst_22629);
} else
{if((state_val_22650 === 10))
{var inst_22641 = (state_22649[2]);var state_22649__$1 = state_22649;var statearr_22663_22682 = state_22649__$1;(statearr_22663_22682[2] = inst_22641);
(statearr_22663_22682[1] = 6);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22650 === 11))
{var inst_22621 = (state_22649[7]);var inst_22638 = (state_22649[2]);var tmp22662 = inst_22621;var inst_22621__$1 = tmp22662;var state_22649__$1 = (function (){var statearr_22664 = state_22649;(statearr_22664[11] = inst_22638);
(statearr_22664[7] = inst_22621__$1);
return statearr_22664;
})();var statearr_22665_22683 = state_22649__$1;(statearr_22665_22683[2] = null);
(statearr_22665_22683[1] = 2);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22669 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22669[0] = state_machine__5507__auto__);
(statearr_22669[1] = 1);
return statearr_22669;
});
var state_machine__5507__auto____1 = (function (state_22649){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22649);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22670){if((e22670 instanceof Object))
{var ex__5510__auto__ = e22670;var statearr_22671_22684 = state_22649;(statearr_22671_22684[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22649);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e22670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__22685 = state_22649;
state_22649 = G__22685;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22649){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22672 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22673);
return statearr_22672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22755){var state_val_22756 = (state_22755[1]);if((state_val_22756 === 1))
{var inst_22732 = 0;var state_22755__$1 = (function (){var statearr_22757 = state_22755;(statearr_22757[7] = inst_22732);
return statearr_22757;
})();var statearr_22758_22779 = state_22755__$1;(statearr_22758_22779[2] = null);
(statearr_22758_22779[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22756 === 2))
{var inst_22732 = (state_22755[7]);var inst_22734 = (inst_22732 < n);var state_22755__$1 = state_22755;if(cljs.core.truth_(inst_22734))
{var statearr_22759_22780 = state_22755__$1;(statearr_22759_22780[1] = 4);
} else
{var statearr_22760_22781 = state_22755__$1;(statearr_22760_22781[1] = 5);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22756 === 3))
{var inst_22752 = (state_22755[2]);var inst_22753 = cljs.core.async.close_BANG_(out);var state_22755__$1 = (function (){var statearr_22761 = state_22755;(statearr_22761[8] = inst_22752);
return statearr_22761;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22755__$1,inst_22753);
} else
{if((state_val_22756 === 4))
{var state_22755__$1 = state_22755;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22755__$1,7,ch);
} else
{if((state_val_22756 === 5))
{var state_22755__$1 = state_22755;var statearr_22762_22782 = state_22755__$1;(statearr_22762_22782[2] = null);
(statearr_22762_22782[1] = 6);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22756 === 6))
{var inst_22750 = (state_22755[2]);var state_22755__$1 = state_22755;var statearr_22763_22783 = state_22755__$1;(statearr_22763_22783[2] = inst_22750);
(statearr_22763_22783[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22756 === 7))
{var inst_22737 = (state_22755[9]);var inst_22737__$1 = (state_22755[2]);var inst_22738 = (inst_22737__$1 == null);var inst_22739 = cljs.core.not(inst_22738);var state_22755__$1 = (function (){var statearr_22764 = state_22755;(statearr_22764[9] = inst_22737__$1);
return statearr_22764;
})();if(inst_22739)
{var statearr_22765_22784 = state_22755__$1;(statearr_22765_22784[1] = 8);
} else
{var statearr_22766_22785 = state_22755__$1;(statearr_22766_22785[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22756 === 8))
{var inst_22737 = (state_22755[9]);var state_22755__$1 = state_22755;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22755__$1,11,out,inst_22737);
} else
{if((state_val_22756 === 9))
{var state_22755__$1 = state_22755;var statearr_22767_22786 = state_22755__$1;(statearr_22767_22786[2] = null);
(statearr_22767_22786[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22756 === 10))
{var inst_22747 = (state_22755[2]);var state_22755__$1 = state_22755;var statearr_22768_22787 = state_22755__$1;(statearr_22768_22787[2] = inst_22747);
(statearr_22768_22787[1] = 6);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22756 === 11))
{var inst_22732 = (state_22755[7]);var inst_22742 = (state_22755[2]);var inst_22743 = (inst_22732 + 1);var inst_22732__$1 = inst_22743;var state_22755__$1 = (function (){var statearr_22769 = state_22755;(statearr_22769[10] = inst_22742);
(statearr_22769[7] = inst_22732__$1);
return statearr_22769;
})();var statearr_22770_22788 = state_22755__$1;(statearr_22770_22788[2] = null);
(statearr_22770_22788[1] = 2);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22774 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22774[0] = state_machine__5507__auto__);
(statearr_22774[1] = 1);
return statearr_22774;
});
var state_machine__5507__auto____1 = (function (state_22755){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22755);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22775){if((e22775 instanceof Object))
{var ex__5510__auto__ = e22775;var statearr_22776_22789 = state_22755;(statearr_22776_22789[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22755);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e22775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__22790 = state_22755;
state_22755 = G__22790;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22755){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22777 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22778);
return statearr_22777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22862){var state_val_22863 = (state_22862[1]);if((state_val_22863 === 1))
{var inst_22839 = null;var state_22862__$1 = (function (){var statearr_22864 = state_22862;(statearr_22864[7] = inst_22839);
return statearr_22864;
})();var statearr_22865_22888 = state_22862__$1;(statearr_22865_22888[2] = null);
(statearr_22865_22888[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22863 === 2))
{var state_22862__$1 = state_22862;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22862__$1,4,ch);
} else
{if((state_val_22863 === 3))
{var inst_22859 = (state_22862[2]);var inst_22860 = cljs.core.async.close_BANG_(out);var state_22862__$1 = (function (){var statearr_22866 = state_22862;(statearr_22866[8] = inst_22859);
return statearr_22866;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22862__$1,inst_22860);
} else
{if((state_val_22863 === 4))
{var inst_22842 = (state_22862[9]);var inst_22842__$1 = (state_22862[2]);var inst_22843 = (inst_22842__$1 == null);var inst_22844 = cljs.core.not(inst_22843);var state_22862__$1 = (function (){var statearr_22867 = state_22862;(statearr_22867[9] = inst_22842__$1);
return statearr_22867;
})();if(inst_22844)
{var statearr_22868_22889 = state_22862__$1;(statearr_22868_22889[1] = 5);
} else
{var statearr_22869_22890 = state_22862__$1;(statearr_22869_22890[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22863 === 5))
{var inst_22839 = (state_22862[7]);var inst_22842 = (state_22862[9]);var inst_22846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22842,inst_22839);var state_22862__$1 = state_22862;if(inst_22846)
{var statearr_22870_22891 = state_22862__$1;(statearr_22870_22891[1] = 8);
} else
{var statearr_22871_22892 = state_22862__$1;(statearr_22871_22892[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22863 === 6))
{var state_22862__$1 = state_22862;var statearr_22873_22893 = state_22862__$1;(statearr_22873_22893[2] = null);
(statearr_22873_22893[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22863 === 7))
{var inst_22857 = (state_22862[2]);var state_22862__$1 = state_22862;var statearr_22874_22894 = state_22862__$1;(statearr_22874_22894[2] = inst_22857);
(statearr_22874_22894[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22863 === 8))
{var inst_22839 = (state_22862[7]);var tmp22872 = inst_22839;var inst_22839__$1 = tmp22872;var state_22862__$1 = (function (){var statearr_22875 = state_22862;(statearr_22875[7] = inst_22839__$1);
return statearr_22875;
})();var statearr_22876_22895 = state_22862__$1;(statearr_22876_22895[2] = null);
(statearr_22876_22895[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22863 === 9))
{var inst_22842 = (state_22862[9]);var state_22862__$1 = state_22862;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22862__$1,11,out,inst_22842);
} else
{if((state_val_22863 === 10))
{var inst_22854 = (state_22862[2]);var state_22862__$1 = state_22862;var statearr_22877_22896 = state_22862__$1;(statearr_22877_22896[2] = inst_22854);
(statearr_22877_22896[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22863 === 11))
{var inst_22842 = (state_22862[9]);var inst_22851 = (state_22862[2]);var inst_22839 = inst_22842;var state_22862__$1 = (function (){var statearr_22878 = state_22862;(statearr_22878[7] = inst_22839);
(statearr_22878[10] = inst_22851);
return statearr_22878;
})();var statearr_22879_22897 = state_22862__$1;(statearr_22879_22897[2] = null);
(statearr_22879_22897[1] = 2);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22883 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22883[0] = state_machine__5507__auto__);
(statearr_22883[1] = 1);
return statearr_22883;
});
var state_machine__5507__auto____1 = (function (state_22862){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22862);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22884){if((e22884 instanceof Object))
{var ex__5510__auto__ = e22884;var statearr_22885_22898 = state_22862;(statearr_22885_22898[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22862);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e22884;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__22899 = state_22862;
state_22862 = G__22899;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22862){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22886 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22887);
return statearr_22886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23004){var state_val_23005 = (state_23004[1]);if((state_val_23005 === 1))
{var inst_22967 = (new Array(n));var inst_22968 = inst_22967;var inst_22969 = 0;var state_23004__$1 = (function (){var statearr_23006 = state_23004;(statearr_23006[7] = inst_22969);
(statearr_23006[8] = inst_22968);
return statearr_23006;
})();var statearr_23007_23035 = state_23004__$1;(statearr_23007_23035[2] = null);
(statearr_23007_23035[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23005 === 2))
{var state_23004__$1 = state_23004;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23004__$1,4,ch);
} else
{if((state_val_23005 === 3))
{var inst_23002 = (state_23004[2]);var state_23004__$1 = state_23004;return cljs.core.async.impl.ioc_helpers.return_chan(state_23004__$1,inst_23002);
} else
{if((state_val_23005 === 4))
{var inst_22972 = (state_23004[9]);var inst_22972__$1 = (state_23004[2]);var inst_22973 = (inst_22972__$1 == null);var inst_22974 = cljs.core.not(inst_22973);var state_23004__$1 = (function (){var statearr_23008 = state_23004;(statearr_23008[9] = inst_22972__$1);
return statearr_23008;
})();if(inst_22974)
{var statearr_23009_23036 = state_23004__$1;(statearr_23009_23036[1] = 5);
} else
{var statearr_23010_23037 = state_23004__$1;(statearr_23010_23037[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23005 === 5))
{var inst_22969 = (state_23004[7]);var inst_22968 = (state_23004[8]);var inst_22977 = (state_23004[10]);var inst_22972 = (state_23004[9]);var inst_22976 = (inst_22968[inst_22969] = inst_22972);var inst_22977__$1 = (inst_22969 + 1);var inst_22978 = (inst_22977__$1 < n);var state_23004__$1 = (function (){var statearr_23011 = state_23004;(statearr_23011[11] = inst_22976);
(statearr_23011[10] = inst_22977__$1);
return statearr_23011;
})();if(cljs.core.truth_(inst_22978))
{var statearr_23012_23038 = state_23004__$1;(statearr_23012_23038[1] = 8);
} else
{var statearr_23013_23039 = state_23004__$1;(statearr_23013_23039[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23005 === 6))
{var inst_22969 = (state_23004[7]);var inst_22990 = (inst_22969 > 0);var state_23004__$1 = state_23004;if(cljs.core.truth_(inst_22990))
{var statearr_23015_23040 = state_23004__$1;(statearr_23015_23040[1] = 12);
} else
{var statearr_23016_23041 = state_23004__$1;(statearr_23016_23041[1] = 13);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23005 === 7))
{var inst_23000 = (state_23004[2]);var state_23004__$1 = state_23004;var statearr_23017_23042 = state_23004__$1;(statearr_23017_23042[2] = inst_23000);
(statearr_23017_23042[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23005 === 8))
{var inst_22968 = (state_23004[8]);var inst_22977 = (state_23004[10]);var tmp23014 = inst_22968;var inst_22968__$1 = tmp23014;var inst_22969 = inst_22977;var state_23004__$1 = (function (){var statearr_23018 = state_23004;(statearr_23018[7] = inst_22969);
(statearr_23018[8] = inst_22968__$1);
return statearr_23018;
})();var statearr_23019_23043 = state_23004__$1;(statearr_23019_23043[2] = null);
(statearr_23019_23043[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23005 === 9))
{var inst_22968 = (state_23004[8]);var inst_22982 = cljs.core.vec(inst_22968);var state_23004__$1 = state_23004;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23004__$1,11,out,inst_22982);
} else
{if((state_val_23005 === 10))
{var inst_22988 = (state_23004[2]);var state_23004__$1 = state_23004;var statearr_23020_23044 = state_23004__$1;(statearr_23020_23044[2] = inst_22988);
(statearr_23020_23044[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23005 === 11))
{var inst_22984 = (state_23004[2]);var inst_22985 = (new Array(n));var inst_22968 = inst_22985;var inst_22969 = 0;var state_23004__$1 = (function (){var statearr_23021 = state_23004;(statearr_23021[12] = inst_22984);
(statearr_23021[7] = inst_22969);
(statearr_23021[8] = inst_22968);
return statearr_23021;
})();var statearr_23022_23045 = state_23004__$1;(statearr_23022_23045[2] = null);
(statearr_23022_23045[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23005 === 12))
{var inst_22968 = (state_23004[8]);var inst_22992 = cljs.core.vec(inst_22968);var state_23004__$1 = state_23004;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23004__$1,15,out,inst_22992);
} else
{if((state_val_23005 === 13))
{var state_23004__$1 = state_23004;var statearr_23023_23046 = state_23004__$1;(statearr_23023_23046[2] = null);
(statearr_23023_23046[1] = 14);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23005 === 14))
{var inst_22997 = (state_23004[2]);var inst_22998 = cljs.core.async.close_BANG_(out);var state_23004__$1 = (function (){var statearr_23024 = state_23004;(statearr_23024[13] = inst_22997);
return statearr_23024;
})();var statearr_23025_23047 = state_23004__$1;(statearr_23025_23047[2] = inst_22998);
(statearr_23025_23047[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23005 === 15))
{var inst_22994 = (state_23004[2]);var state_23004__$1 = state_23004;var statearr_23026_23048 = state_23004__$1;(statearr_23026_23048[2] = inst_22994);
(statearr_23026_23048[1] = 14);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23030[0] = state_machine__5507__auto__);
(statearr_23030[1] = 1);
return statearr_23030;
});
var state_machine__5507__auto____1 = (function (state_23004){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23004);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23031){if((e23031 instanceof Object))
{var ex__5510__auto__ = e23031;var statearr_23032_23049 = state_23004;(statearr_23032_23049[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23004);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e23031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__23050 = state_23004;
state_23004 = G__23050;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23004){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23033 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23034);
return statearr_23033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23163){var state_val_23164 = (state_23163[1]);if((state_val_23164 === 1))
{var inst_23122 = [];var inst_23123 = inst_23122;var inst_23124 = cljs.core.constant$keyword$133;var state_23163__$1 = (function (){var statearr_23165 = state_23163;(statearr_23165[7] = inst_23124);
(statearr_23165[8] = inst_23123);
return statearr_23165;
})();var statearr_23166_23194 = state_23163__$1;(statearr_23166_23194[2] = null);
(statearr_23166_23194[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23164 === 2))
{var state_23163__$1 = state_23163;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23163__$1,4,ch);
} else
{if((state_val_23164 === 3))
{var inst_23161 = (state_23163[2]);var state_23163__$1 = state_23163;return cljs.core.async.impl.ioc_helpers.return_chan(state_23163__$1,inst_23161);
} else
{if((state_val_23164 === 4))
{var inst_23127 = (state_23163[9]);var inst_23127__$1 = (state_23163[2]);var inst_23128 = (inst_23127__$1 == null);var inst_23129 = cljs.core.not(inst_23128);var state_23163__$1 = (function (){var statearr_23167 = state_23163;(statearr_23167[9] = inst_23127__$1);
return statearr_23167;
})();if(inst_23129)
{var statearr_23168_23195 = state_23163__$1;(statearr_23168_23195[1] = 5);
} else
{var statearr_23169_23196 = state_23163__$1;(statearr_23169_23196[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23164 === 5))
{var inst_23124 = (state_23163[7]);var inst_23131 = (state_23163[10]);var inst_23127 = (state_23163[9]);var inst_23131__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23127) : f.call(null,inst_23127));var inst_23132 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23131__$1,inst_23124);var inst_23133 = cljs.core.keyword_identical_QMARK_(inst_23124,cljs.core.constant$keyword$133);var inst_23134 = (inst_23132) || (inst_23133);var state_23163__$1 = (function (){var statearr_23170 = state_23163;(statearr_23170[10] = inst_23131__$1);
return statearr_23170;
})();if(cljs.core.truth_(inst_23134))
{var statearr_23171_23197 = state_23163__$1;(statearr_23171_23197[1] = 8);
} else
{var statearr_23172_23198 = state_23163__$1;(statearr_23172_23198[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23164 === 6))
{var inst_23123 = (state_23163[8]);var inst_23148 = inst_23123.length;var inst_23149 = (inst_23148 > 0);var state_23163__$1 = state_23163;if(cljs.core.truth_(inst_23149))
{var statearr_23174_23199 = state_23163__$1;(statearr_23174_23199[1] = 12);
} else
{var statearr_23175_23200 = state_23163__$1;(statearr_23175_23200[1] = 13);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23164 === 7))
{var inst_23159 = (state_23163[2]);var state_23163__$1 = state_23163;var statearr_23176_23201 = state_23163__$1;(statearr_23176_23201[2] = inst_23159);
(statearr_23176_23201[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23164 === 8))
{var inst_23123 = (state_23163[8]);var inst_23131 = (state_23163[10]);var inst_23127 = (state_23163[9]);var inst_23136 = inst_23123.push(inst_23127);var tmp23173 = inst_23123;var inst_23123__$1 = tmp23173;var inst_23124 = inst_23131;var state_23163__$1 = (function (){var statearr_23177 = state_23163;(statearr_23177[7] = inst_23124);
(statearr_23177[8] = inst_23123__$1);
(statearr_23177[11] = inst_23136);
return statearr_23177;
})();var statearr_23178_23202 = state_23163__$1;(statearr_23178_23202[2] = null);
(statearr_23178_23202[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23164 === 9))
{var inst_23123 = (state_23163[8]);var inst_23139 = cljs.core.vec(inst_23123);var state_23163__$1 = state_23163;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23163__$1,11,out,inst_23139);
} else
{if((state_val_23164 === 10))
{var inst_23146 = (state_23163[2]);var state_23163__$1 = state_23163;var statearr_23179_23203 = state_23163__$1;(statearr_23179_23203[2] = inst_23146);
(statearr_23179_23203[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23164 === 11))
{var inst_23131 = (state_23163[10]);var inst_23127 = (state_23163[9]);var inst_23141 = (state_23163[2]);var inst_23142 = [];var inst_23143 = inst_23142.push(inst_23127);var inst_23123 = inst_23142;var inst_23124 = inst_23131;var state_23163__$1 = (function (){var statearr_23180 = state_23163;(statearr_23180[7] = inst_23124);
(statearr_23180[8] = inst_23123);
(statearr_23180[12] = inst_23143);
(statearr_23180[13] = inst_23141);
return statearr_23180;
})();var statearr_23181_23204 = state_23163__$1;(statearr_23181_23204[2] = null);
(statearr_23181_23204[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23164 === 12))
{var inst_23123 = (state_23163[8]);var inst_23151 = cljs.core.vec(inst_23123);var state_23163__$1 = state_23163;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23163__$1,15,out,inst_23151);
} else
{if((state_val_23164 === 13))
{var state_23163__$1 = state_23163;var statearr_23182_23205 = state_23163__$1;(statearr_23182_23205[2] = null);
(statearr_23182_23205[1] = 14);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23164 === 14))
{var inst_23156 = (state_23163[2]);var inst_23157 = cljs.core.async.close_BANG_(out);var state_23163__$1 = (function (){var statearr_23183 = state_23163;(statearr_23183[14] = inst_23156);
return statearr_23183;
})();var statearr_23184_23206 = state_23163__$1;(statearr_23184_23206[2] = inst_23157);
(statearr_23184_23206[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23164 === 15))
{var inst_23153 = (state_23163[2]);var state_23163__$1 = state_23163;var statearr_23185_23207 = state_23163__$1;(statearr_23185_23207[2] = inst_23153);
(statearr_23185_23207[1] = 14);
return cljs.core.constant$keyword$120;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23189[0] = state_machine__5507__auto__);
(statearr_23189[1] = 1);
return statearr_23189;
});
var state_machine__5507__auto____1 = (function (state_23163){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23163);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23190){if((e23190 instanceof Object))
{var ex__5510__auto__ = e23190;var statearr_23191_23208 = state_23163;(statearr_23191_23208[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23163);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e23190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__23209 = state_23163;
state_23163 = G__23209;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23163){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23192 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23193);
return statearr_23192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
