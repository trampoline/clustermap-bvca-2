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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22710 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22710 = (function (f,fn_handler,meta22711){
this.f = f;
this.fn_handler = fn_handler;
this.meta22711 = meta22711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22710.cljs$lang$type = true;
cljs.core.async.t22710.cljs$lang$ctorStr = "cljs.core.async/t22710";
cljs.core.async.t22710.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22710");
});
cljs.core.async.t22710.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22712){var self__ = this;
var _22712__$1 = this;return self__.meta22711;
});
cljs.core.async.t22710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22712,meta22711__$1){var self__ = this;
var _22712__$1 = this;return (new cljs.core.async.t22710(self__.f,self__.fn_handler,meta22711__$1));
});
cljs.core.async.__GT_t22710 = (function __GT_t22710(f__$1,fn_handler__$1,meta22711){return (new cljs.core.async.t22710(f__$1,fn_handler__$1,meta22711));
});
}
return (new cljs.core.async.t22710(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22714 = buff;if(G__22714)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__22714.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22714.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22714);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22714);
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
{var val_22715 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22715) : fn1.call(null,val_22715));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22715) : fn1.call(null,val_22715));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___22716 = n;var x_22717 = 0;while(true){
if((x_22717 < n__4248__auto___22716))
{(a[x_22717] = 0);
{
var G__22718 = (x_22717 + 1);
x_22717 = G__22718;
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
var G__22719 = (i + 1);
i = G__22719;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t22723 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22723 = (function (flag,alt_flag,meta22724){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22724 = meta22724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22723.cljs$lang$type = true;
cljs.core.async.t22723.cljs$lang$ctorStr = "cljs.core.async/t22723";
cljs.core.async.t22723.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22723");
});
cljs.core.async.t22723.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t22723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t22723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22725){var self__ = this;
var _22725__$1 = this;return self__.meta22724;
});
cljs.core.async.t22723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22725,meta22724__$1){var self__ = this;
var _22725__$1 = this;return (new cljs.core.async.t22723(self__.flag,self__.alt_flag,meta22724__$1));
});
cljs.core.async.__GT_t22723 = (function __GT_t22723(flag__$1,alt_flag__$1,meta22724){return (new cljs.core.async.t22723(flag__$1,alt_flag__$1,meta22724));
});
}
return (new cljs.core.async.t22723(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22729 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22729 = (function (cb,flag,alt_handler,meta22730){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22730 = meta22730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22729.cljs$lang$type = true;
cljs.core.async.t22729.cljs$lang$ctorStr = "cljs.core.async/t22729";
cljs.core.async.t22729.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22729");
});
cljs.core.async.t22729.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t22729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t22729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22731){var self__ = this;
var _22731__$1 = this;return self__.meta22730;
});
cljs.core.async.t22729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22731,meta22730__$1){var self__ = this;
var _22731__$1 = this;return (new cljs.core.async.t22729(self__.cb,self__.flag,self__.alt_handler,meta22730__$1));
});
cljs.core.async.__GT_t22729 = (function __GT_t22729(cb__$1,flag__$1,alt_handler__$1,meta22730){return (new cljs.core.async.t22729(cb__$1,flag__$1,alt_handler__$1,meta22730));
});
}
return (new cljs.core.async.t22729(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$176.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22732_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22732_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22732_SHARP_,port], null)));
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
var G__22733 = (i + 1);
i = G__22733;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$160))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$160], null));
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
var alts_BANG___delegate = function (ports,p__22734){var map__22736 = p__22734;var map__22736__$1 = ((cljs.core.seq_QMARK_(map__22736))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22736):map__22736);var opts = map__22736__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22734 = null;if (arguments.length > 1) {
  p__22734 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22734);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22737){
var ports = cljs.core.first(arglist__22737);
var p__22734 = cljs.core.rest(arglist__22737);
return alts_BANG___delegate(ports,p__22734);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22745 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22745 = (function (ch,f,map_LT_,meta22746){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22746 = meta22746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22745.cljs$lang$type = true;
cljs.core.async.t22745.cljs$lang$ctorStr = "cljs.core.async/t22745";
cljs.core.async.t22745.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22745");
});
cljs.core.async.t22745.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22745.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t22745.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22745.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t22748 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22748 = (function (fn1,_,meta22746,ch,f,map_LT_,meta22749){
this.fn1 = fn1;
this._ = _;
this.meta22746 = meta22746;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22749 = meta22749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22748.cljs$lang$type = true;
cljs.core.async.t22748.cljs$lang$ctorStr = "cljs.core.async/t22748";
cljs.core.async.t22748.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22748");
});
cljs.core.async.t22748.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t22748.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t22748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__22738_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__22738_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22738_SHARP_) : self__.f.call(null,p1__22738_SHARP_)))) : f1.call(null,(((p1__22738_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22738_SHARP_) : self__.f.call(null,p1__22738_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t22748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22750){var self__ = this;
var _22750__$1 = this;return self__.meta22749;
});
cljs.core.async.t22748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22750,meta22749__$1){var self__ = this;
var _22750__$1 = this;return (new cljs.core.async.t22748(self__.fn1,self__._,self__.meta22746,self__.ch,self__.f,self__.map_LT_,meta22749__$1));
});
cljs.core.async.__GT_t22748 = (function __GT_t22748(fn1__$1,___$2,meta22746__$1,ch__$2,f__$2,map_LT___$2,meta22749){return (new cljs.core.async.t22748(fn1__$1,___$2,meta22746__$1,ch__$2,f__$2,map_LT___$2,meta22749));
});
}
return (new cljs.core.async.t22748(fn1,___$1,self__.meta22746,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t22745.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22745.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22747){var self__ = this;
var _22747__$1 = this;return self__.meta22746;
});
cljs.core.async.t22745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22747,meta22746__$1){var self__ = this;
var _22747__$1 = this;return (new cljs.core.async.t22745(self__.ch,self__.f,self__.map_LT_,meta22746__$1));
});
cljs.core.async.__GT_t22745 = (function __GT_t22745(ch__$1,f__$1,map_LT___$1,meta22746){return (new cljs.core.async.t22745(ch__$1,f__$1,map_LT___$1,meta22746));
});
}
return (new cljs.core.async.t22745(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22754 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22754 = (function (ch,f,map_GT_,meta22755){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22755 = meta22755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22754.cljs$lang$type = true;
cljs.core.async.t22754.cljs$lang$ctorStr = "cljs.core.async/t22754";
cljs.core.async.t22754.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22754");
});
cljs.core.async.t22754.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t22754.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22754.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22756){var self__ = this;
var _22756__$1 = this;return self__.meta22755;
});
cljs.core.async.t22754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22756,meta22755__$1){var self__ = this;
var _22756__$1 = this;return (new cljs.core.async.t22754(self__.ch,self__.f,self__.map_GT_,meta22755__$1));
});
cljs.core.async.__GT_t22754 = (function __GT_t22754(ch__$1,f__$1,map_GT___$1,meta22755){return (new cljs.core.async.t22754(ch__$1,f__$1,map_GT___$1,meta22755));
});
}
return (new cljs.core.async.t22754(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22760 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22760 = (function (ch,p,filter_GT_,meta22761){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22761 = meta22761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22760.cljs$lang$type = true;
cljs.core.async.t22760.cljs$lang$ctorStr = "cljs.core.async/t22760";
cljs.core.async.t22760.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22760");
});
cljs.core.async.t22760.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22760.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t22760.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22760.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22760.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22760.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22762){var self__ = this;
var _22762__$1 = this;return self__.meta22761;
});
cljs.core.async.t22760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22762,meta22761__$1){var self__ = this;
var _22762__$1 = this;return (new cljs.core.async.t22760(self__.ch,self__.p,self__.filter_GT_,meta22761__$1));
});
cljs.core.async.__GT_t22760 = (function __GT_t22760(ch__$1,p__$1,filter_GT___$1,meta22761){return (new cljs.core.async.t22760(ch__$1,p__$1,filter_GT___$1,meta22761));
});
}
return (new cljs.core.async.t22760(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22824){var state_val_22825 = (state_22824[1]);if((state_val_22825 === 1))
{var state_22824__$1 = state_22824;var statearr_22826_22846 = state_22824__$1;(statearr_22826_22846[2] = null);
(statearr_22826_22846[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22825 === 2))
{var state_22824__$1 = state_22824;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22824__$1,4,ch);
} else
{if((state_val_22825 === 3))
{var inst_22822 = (state_22824[2]);var state_22824__$1 = state_22824;return cljs.core.async.impl.ioc_helpers.return_chan(state_22824__$1,inst_22822);
} else
{if((state_val_22825 === 4))
{var inst_22806 = (state_22824[7]);var inst_22806__$1 = (state_22824[2]);var inst_22807 = (inst_22806__$1 == null);var state_22824__$1 = (function (){var statearr_22827 = state_22824;(statearr_22827[7] = inst_22806__$1);
return statearr_22827;
})();if(cljs.core.truth_(inst_22807))
{var statearr_22828_22847 = state_22824__$1;(statearr_22828_22847[1] = 5);
} else
{var statearr_22829_22848 = state_22824__$1;(statearr_22829_22848[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_22825 === 5))
{var inst_22809 = cljs.core.async.close_BANG_(out);var state_22824__$1 = state_22824;var statearr_22830_22849 = state_22824__$1;(statearr_22830_22849[2] = inst_22809);
(statearr_22830_22849[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22825 === 6))
{var inst_22806 = (state_22824[7]);var inst_22811 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22806) : p.call(null,inst_22806));var state_22824__$1 = state_22824;if(cljs.core.truth_(inst_22811))
{var statearr_22831_22850 = state_22824__$1;(statearr_22831_22850[1] = 8);
} else
{var statearr_22832_22851 = state_22824__$1;(statearr_22832_22851[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_22825 === 7))
{var inst_22820 = (state_22824[2]);var state_22824__$1 = state_22824;var statearr_22833_22852 = state_22824__$1;(statearr_22833_22852[2] = inst_22820);
(statearr_22833_22852[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22825 === 8))
{var inst_22806 = (state_22824[7]);var state_22824__$1 = state_22824;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22824__$1,11,out,inst_22806);
} else
{if((state_val_22825 === 9))
{var state_22824__$1 = state_22824;var statearr_22834_22853 = state_22824__$1;(statearr_22834_22853[2] = null);
(statearr_22834_22853[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22825 === 10))
{var inst_22817 = (state_22824[2]);var state_22824__$1 = (function (){var statearr_22835 = state_22824;(statearr_22835[8] = inst_22817);
return statearr_22835;
})();var statearr_22836_22854 = state_22824__$1;(statearr_22836_22854[2] = null);
(statearr_22836_22854[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22825 === 11))
{var inst_22814 = (state_22824[2]);var state_22824__$1 = state_22824;var statearr_22837_22855 = state_22824__$1;(statearr_22837_22855[2] = inst_22814);
(statearr_22837_22855[1] = 10);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_22841 = [null,null,null,null,null,null,null,null,null];(statearr_22841[0] = state_machine__5507__auto__);
(statearr_22841[1] = 1);
return statearr_22841;
});
var state_machine__5507__auto____1 = (function (state_22824){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22824);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22842){if((e22842 instanceof Object))
{var ex__5510__auto__ = e22842;var statearr_22843_22856 = state_22824;(statearr_22843_22856[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22824);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e22842;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__22857 = state_22824;
state_22824 = G__22857;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22824){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22844 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22845);
return statearr_22844;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23009){var state_val_23010 = (state_23009[1]);if((state_val_23010 === 1))
{var state_23009__$1 = state_23009;var statearr_23011_23048 = state_23009__$1;(statearr_23011_23048[2] = null);
(statearr_23011_23048[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 2))
{var state_23009__$1 = state_23009;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23009__$1,4,in$);
} else
{if((state_val_23010 === 3))
{var inst_23007 = (state_23009[2]);var state_23009__$1 = state_23009;return cljs.core.async.impl.ioc_helpers.return_chan(state_23009__$1,inst_23007);
} else
{if((state_val_23010 === 4))
{var inst_22955 = (state_23009[7]);var inst_22955__$1 = (state_23009[2]);var inst_22956 = (inst_22955__$1 == null);var state_23009__$1 = (function (){var statearr_23012 = state_23009;(statearr_23012[7] = inst_22955__$1);
return statearr_23012;
})();if(cljs.core.truth_(inst_22956))
{var statearr_23013_23049 = state_23009__$1;(statearr_23013_23049[1] = 5);
} else
{var statearr_23014_23050 = state_23009__$1;(statearr_23014_23050[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 5))
{var inst_22958 = cljs.core.async.close_BANG_(out);var state_23009__$1 = state_23009;var statearr_23015_23051 = state_23009__$1;(statearr_23015_23051[2] = inst_22958);
(statearr_23015_23051[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 6))
{var inst_22955 = (state_23009[7]);var inst_22960 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22955) : f.call(null,inst_22955));var inst_22965 = cljs.core.seq(inst_22960);var inst_22966 = inst_22965;var inst_22967 = null;var inst_22968 = 0;var inst_22969 = 0;var state_23009__$1 = (function (){var statearr_23016 = state_23009;(statearr_23016[8] = inst_22967);
(statearr_23016[9] = inst_22966);
(statearr_23016[10] = inst_22969);
(statearr_23016[11] = inst_22968);
return statearr_23016;
})();var statearr_23017_23052 = state_23009__$1;(statearr_23017_23052[2] = null);
(statearr_23017_23052[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 7))
{var inst_23005 = (state_23009[2]);var state_23009__$1 = state_23009;var statearr_23018_23053 = state_23009__$1;(statearr_23018_23053[2] = inst_23005);
(statearr_23018_23053[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 8))
{var inst_22969 = (state_23009[10]);var inst_22968 = (state_23009[11]);var inst_22971 = (inst_22969 < inst_22968);var inst_22972 = inst_22971;var state_23009__$1 = state_23009;if(cljs.core.truth_(inst_22972))
{var statearr_23019_23054 = state_23009__$1;(statearr_23019_23054[1] = 10);
} else
{var statearr_23020_23055 = state_23009__$1;(statearr_23020_23055[1] = 11);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 9))
{var inst_23002 = (state_23009[2]);var state_23009__$1 = (function (){var statearr_23021 = state_23009;(statearr_23021[12] = inst_23002);
return statearr_23021;
})();var statearr_23022_23056 = state_23009__$1;(statearr_23022_23056[2] = null);
(statearr_23022_23056[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 10))
{var inst_22967 = (state_23009[8]);var inst_22969 = (state_23009[10]);var inst_22974 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22967,inst_22969);var state_23009__$1 = state_23009;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23009__$1,13,out,inst_22974);
} else
{if((state_val_23010 === 11))
{var inst_22966 = (state_23009[9]);var inst_22980 = (state_23009[13]);var inst_22980__$1 = cljs.core.seq(inst_22966);var state_23009__$1 = (function (){var statearr_23026 = state_23009;(statearr_23026[13] = inst_22980__$1);
return statearr_23026;
})();if(inst_22980__$1)
{var statearr_23027_23057 = state_23009__$1;(statearr_23027_23057[1] = 14);
} else
{var statearr_23028_23058 = state_23009__$1;(statearr_23028_23058[1] = 15);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 12))
{var inst_23000 = (state_23009[2]);var state_23009__$1 = state_23009;var statearr_23029_23059 = state_23009__$1;(statearr_23029_23059[2] = inst_23000);
(statearr_23029_23059[1] = 9);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 13))
{var inst_22967 = (state_23009[8]);var inst_22966 = (state_23009[9]);var inst_22969 = (state_23009[10]);var inst_22968 = (state_23009[11]);var inst_22976 = (state_23009[2]);var inst_22977 = (inst_22969 + 1);var tmp23023 = inst_22967;var tmp23024 = inst_22966;var tmp23025 = inst_22968;var inst_22966__$1 = tmp23024;var inst_22967__$1 = tmp23023;var inst_22968__$1 = tmp23025;var inst_22969__$1 = inst_22977;var state_23009__$1 = (function (){var statearr_23030 = state_23009;(statearr_23030[8] = inst_22967__$1);
(statearr_23030[9] = inst_22966__$1);
(statearr_23030[10] = inst_22969__$1);
(statearr_23030[11] = inst_22968__$1);
(statearr_23030[14] = inst_22976);
return statearr_23030;
})();var statearr_23031_23060 = state_23009__$1;(statearr_23031_23060[2] = null);
(statearr_23031_23060[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 14))
{var inst_22980 = (state_23009[13]);var inst_22982 = cljs.core.chunked_seq_QMARK_(inst_22980);var state_23009__$1 = state_23009;if(inst_22982)
{var statearr_23032_23061 = state_23009__$1;(statearr_23032_23061[1] = 17);
} else
{var statearr_23033_23062 = state_23009__$1;(statearr_23033_23062[1] = 18);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 15))
{var state_23009__$1 = state_23009;var statearr_23034_23063 = state_23009__$1;(statearr_23034_23063[2] = null);
(statearr_23034_23063[1] = 16);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 16))
{var inst_22998 = (state_23009[2]);var state_23009__$1 = state_23009;var statearr_23035_23064 = state_23009__$1;(statearr_23035_23064[2] = inst_22998);
(statearr_23035_23064[1] = 12);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 17))
{var inst_22980 = (state_23009[13]);var inst_22984 = cljs.core.chunk_first(inst_22980);var inst_22985 = cljs.core.chunk_rest(inst_22980);var inst_22986 = cljs.core.count(inst_22984);var inst_22966 = inst_22985;var inst_22967 = inst_22984;var inst_22968 = inst_22986;var inst_22969 = 0;var state_23009__$1 = (function (){var statearr_23036 = state_23009;(statearr_23036[8] = inst_22967);
(statearr_23036[9] = inst_22966);
(statearr_23036[10] = inst_22969);
(statearr_23036[11] = inst_22968);
return statearr_23036;
})();var statearr_23037_23065 = state_23009__$1;(statearr_23037_23065[2] = null);
(statearr_23037_23065[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 18))
{var inst_22980 = (state_23009[13]);var inst_22989 = cljs.core.first(inst_22980);var state_23009__$1 = state_23009;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23009__$1,20,out,inst_22989);
} else
{if((state_val_23010 === 19))
{var inst_22995 = (state_23009[2]);var state_23009__$1 = state_23009;var statearr_23038_23066 = state_23009__$1;(statearr_23038_23066[2] = inst_22995);
(statearr_23038_23066[1] = 16);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23010 === 20))
{var inst_22980 = (state_23009[13]);var inst_22991 = (state_23009[2]);var inst_22992 = cljs.core.next(inst_22980);var inst_22966 = inst_22992;var inst_22967 = null;var inst_22968 = 0;var inst_22969 = 0;var state_23009__$1 = (function (){var statearr_23039 = state_23009;(statearr_23039[15] = inst_22991);
(statearr_23039[8] = inst_22967);
(statearr_23039[9] = inst_22966);
(statearr_23039[10] = inst_22969);
(statearr_23039[11] = inst_22968);
return statearr_23039;
})();var statearr_23040_23067 = state_23009__$1;(statearr_23040_23067[2] = null);
(statearr_23040_23067[1] = 8);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_23044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23044[0] = state_machine__5507__auto__);
(statearr_23044[1] = 1);
return statearr_23044;
});
var state_machine__5507__auto____1 = (function (state_23009){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23009);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23045){if((e23045 instanceof Object))
{var ex__5510__auto__ = e23045;var statearr_23046_23068 = state_23009;(statearr_23046_23068[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23009);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23069 = state_23009;
state_23009 = G__23069;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23009){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23047 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23047;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23129){var state_val_23130 = (state_23129[1]);if((state_val_23130 === 1))
{var state_23129__$1 = state_23129;var statearr_23131_23151 = state_23129__$1;(statearr_23131_23151[2] = null);
(statearr_23131_23151[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23130 === 2))
{var state_23129__$1 = state_23129;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23129__$1,4,from);
} else
{if((state_val_23130 === 3))
{var inst_23127 = (state_23129[2]);var state_23129__$1 = state_23129;return cljs.core.async.impl.ioc_helpers.return_chan(state_23129__$1,inst_23127);
} else
{if((state_val_23130 === 4))
{var inst_23112 = (state_23129[7]);var inst_23112__$1 = (state_23129[2]);var inst_23113 = (inst_23112__$1 == null);var state_23129__$1 = (function (){var statearr_23132 = state_23129;(statearr_23132[7] = inst_23112__$1);
return statearr_23132;
})();if(cljs.core.truth_(inst_23113))
{var statearr_23133_23152 = state_23129__$1;(statearr_23133_23152[1] = 5);
} else
{var statearr_23134_23153 = state_23129__$1;(statearr_23134_23153[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23130 === 5))
{var state_23129__$1 = state_23129;if(cljs.core.truth_(close_QMARK_))
{var statearr_23135_23154 = state_23129__$1;(statearr_23135_23154[1] = 8);
} else
{var statearr_23136_23155 = state_23129__$1;(statearr_23136_23155[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23130 === 6))
{var inst_23112 = (state_23129[7]);var state_23129__$1 = state_23129;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23129__$1,11,to,inst_23112);
} else
{if((state_val_23130 === 7))
{var inst_23125 = (state_23129[2]);var state_23129__$1 = state_23129;var statearr_23137_23156 = state_23129__$1;(statearr_23137_23156[2] = inst_23125);
(statearr_23137_23156[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23130 === 8))
{var inst_23116 = cljs.core.async.close_BANG_(to);var state_23129__$1 = state_23129;var statearr_23138_23157 = state_23129__$1;(statearr_23138_23157[2] = inst_23116);
(statearr_23138_23157[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23130 === 9))
{var state_23129__$1 = state_23129;var statearr_23139_23158 = state_23129__$1;(statearr_23139_23158[2] = null);
(statearr_23139_23158[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23130 === 10))
{var inst_23119 = (state_23129[2]);var state_23129__$1 = state_23129;var statearr_23140_23159 = state_23129__$1;(statearr_23140_23159[2] = inst_23119);
(statearr_23140_23159[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23130 === 11))
{var inst_23122 = (state_23129[2]);var state_23129__$1 = (function (){var statearr_23141 = state_23129;(statearr_23141[8] = inst_23122);
return statearr_23141;
})();var statearr_23142_23160 = state_23129__$1;(statearr_23142_23160[2] = null);
(statearr_23142_23160[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_23146 = [null,null,null,null,null,null,null,null,null];(statearr_23146[0] = state_machine__5507__auto__);
(statearr_23146[1] = 1);
return statearr_23146;
});
var state_machine__5507__auto____1 = (function (state_23129){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23129);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23147){if((e23147 instanceof Object))
{var ex__5510__auto__ = e23147;var statearr_23148_23161 = state_23129;(statearr_23148_23161[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23129);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23147;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23162 = state_23129;
state_23129 = G__23162;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23129){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23149 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23150);
return statearr_23149;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23227){var state_val_23228 = (state_23227[1]);if((state_val_23228 === 1))
{var state_23227__$1 = state_23227;var statearr_23229_23250 = state_23227__$1;(statearr_23229_23250[2] = null);
(statearr_23229_23250[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23228 === 2))
{var state_23227__$1 = state_23227;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23227__$1,4,ch);
} else
{if((state_val_23228 === 3))
{var inst_23225 = (state_23227[2]);var state_23227__$1 = state_23227;return cljs.core.async.impl.ioc_helpers.return_chan(state_23227__$1,inst_23225);
} else
{if((state_val_23228 === 4))
{var inst_23208 = (state_23227[7]);var inst_23208__$1 = (state_23227[2]);var inst_23209 = (inst_23208__$1 == null);var state_23227__$1 = (function (){var statearr_23230 = state_23227;(statearr_23230[7] = inst_23208__$1);
return statearr_23230;
})();if(cljs.core.truth_(inst_23209))
{var statearr_23231_23251 = state_23227__$1;(statearr_23231_23251[1] = 5);
} else
{var statearr_23232_23252 = state_23227__$1;(statearr_23232_23252[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23228 === 5))
{var inst_23211 = cljs.core.async.close_BANG_(tc);var inst_23212 = cljs.core.async.close_BANG_(fc);var state_23227__$1 = (function (){var statearr_23233 = state_23227;(statearr_23233[8] = inst_23211);
return statearr_23233;
})();var statearr_23234_23253 = state_23227__$1;(statearr_23234_23253[2] = inst_23212);
(statearr_23234_23253[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23228 === 6))
{var inst_23208 = (state_23227[7]);var inst_23214 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23208) : p.call(null,inst_23208));var state_23227__$1 = state_23227;if(cljs.core.truth_(inst_23214))
{var statearr_23235_23254 = state_23227__$1;(statearr_23235_23254[1] = 9);
} else
{var statearr_23236_23255 = state_23227__$1;(statearr_23236_23255[1] = 10);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23228 === 7))
{var inst_23223 = (state_23227[2]);var state_23227__$1 = state_23227;var statearr_23237_23256 = state_23227__$1;(statearr_23237_23256[2] = inst_23223);
(statearr_23237_23256[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23228 === 8))
{var inst_23220 = (state_23227[2]);var state_23227__$1 = (function (){var statearr_23238 = state_23227;(statearr_23238[9] = inst_23220);
return statearr_23238;
})();var statearr_23239_23257 = state_23227__$1;(statearr_23239_23257[2] = null);
(statearr_23239_23257[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23228 === 9))
{var state_23227__$1 = state_23227;var statearr_23240_23258 = state_23227__$1;(statearr_23240_23258[2] = tc);
(statearr_23240_23258[1] = 11);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23228 === 10))
{var state_23227__$1 = state_23227;var statearr_23241_23259 = state_23227__$1;(statearr_23241_23259[2] = fc);
(statearr_23241_23259[1] = 11);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23228 === 11))
{var inst_23208 = (state_23227[7]);var inst_23218 = (state_23227[2]);var state_23227__$1 = state_23227;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23227__$1,8,inst_23218,inst_23208);
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
var state_machine__5507__auto____0 = (function (){var statearr_23245 = [null,null,null,null,null,null,null,null,null,null];(statearr_23245[0] = state_machine__5507__auto__);
(statearr_23245[1] = 1);
return statearr_23245;
});
var state_machine__5507__auto____1 = (function (state_23227){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23227);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23246){if((e23246 instanceof Object))
{var ex__5510__auto__ = e23246;var statearr_23247_23260 = state_23227;(statearr_23247_23260[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23227);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23246;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23261 = state_23227;
state_23227 = G__23261;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23227){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23248 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23249);
return statearr_23248;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23308){var state_val_23309 = (state_23308[1]);if((state_val_23309 === 7))
{var inst_23304 = (state_23308[2]);var state_23308__$1 = state_23308;var statearr_23310_23326 = state_23308__$1;(statearr_23310_23326[2] = inst_23304);
(statearr_23310_23326[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23309 === 6))
{var inst_23297 = (state_23308[7]);var inst_23294 = (state_23308[8]);var inst_23301 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23294,inst_23297) : f.call(null,inst_23294,inst_23297));var inst_23294__$1 = inst_23301;var state_23308__$1 = (function (){var statearr_23311 = state_23308;(statearr_23311[8] = inst_23294__$1);
return statearr_23311;
})();var statearr_23312_23327 = state_23308__$1;(statearr_23312_23327[2] = null);
(statearr_23312_23327[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23309 === 5))
{var inst_23294 = (state_23308[8]);var state_23308__$1 = state_23308;var statearr_23313_23328 = state_23308__$1;(statearr_23313_23328[2] = inst_23294);
(statearr_23313_23328[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23309 === 4))
{var inst_23297 = (state_23308[7]);var inst_23297__$1 = (state_23308[2]);var inst_23298 = (inst_23297__$1 == null);var state_23308__$1 = (function (){var statearr_23314 = state_23308;(statearr_23314[7] = inst_23297__$1);
return statearr_23314;
})();if(cljs.core.truth_(inst_23298))
{var statearr_23315_23329 = state_23308__$1;(statearr_23315_23329[1] = 5);
} else
{var statearr_23316_23330 = state_23308__$1;(statearr_23316_23330[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23309 === 3))
{var inst_23306 = (state_23308[2]);var state_23308__$1 = state_23308;return cljs.core.async.impl.ioc_helpers.return_chan(state_23308__$1,inst_23306);
} else
{if((state_val_23309 === 2))
{var state_23308__$1 = state_23308;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23308__$1,4,ch);
} else
{if((state_val_23309 === 1))
{var inst_23294 = init;var state_23308__$1 = (function (){var statearr_23317 = state_23308;(statearr_23317[8] = inst_23294);
return statearr_23317;
})();var statearr_23318_23331 = state_23308__$1;(statearr_23318_23331[2] = null);
(statearr_23318_23331[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_23322 = [null,null,null,null,null,null,null,null,null];(statearr_23322[0] = state_machine__5507__auto__);
(statearr_23322[1] = 1);
return statearr_23322;
});
var state_machine__5507__auto____1 = (function (state_23308){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23308);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23323){if((e23323 instanceof Object))
{var ex__5510__auto__ = e23323;var statearr_23324_23332 = state_23308;(statearr_23324_23332[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23308);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23323;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23333 = state_23308;
state_23308 = G__23333;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23308){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23325 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23325;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23395){var state_val_23396 = (state_23395[1]);if((state_val_23396 === 1))
{var inst_23375 = cljs.core.seq(coll);var inst_23376 = inst_23375;var state_23395__$1 = (function (){var statearr_23397 = state_23395;(statearr_23397[7] = inst_23376);
return statearr_23397;
})();var statearr_23398_23416 = state_23395__$1;(statearr_23398_23416[2] = null);
(statearr_23398_23416[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23396 === 2))
{var inst_23376 = (state_23395[7]);var state_23395__$1 = state_23395;if(cljs.core.truth_(inst_23376))
{var statearr_23399_23417 = state_23395__$1;(statearr_23399_23417[1] = 4);
} else
{var statearr_23400_23418 = state_23395__$1;(statearr_23400_23418[1] = 5);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23396 === 3))
{var inst_23393 = (state_23395[2]);var state_23395__$1 = state_23395;return cljs.core.async.impl.ioc_helpers.return_chan(state_23395__$1,inst_23393);
} else
{if((state_val_23396 === 4))
{var inst_23376 = (state_23395[7]);var inst_23379 = cljs.core.first(inst_23376);var state_23395__$1 = state_23395;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23395__$1,7,ch,inst_23379);
} else
{if((state_val_23396 === 5))
{var state_23395__$1 = state_23395;if(cljs.core.truth_(close_QMARK_))
{var statearr_23401_23419 = state_23395__$1;(statearr_23401_23419[1] = 8);
} else
{var statearr_23402_23420 = state_23395__$1;(statearr_23402_23420[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23396 === 6))
{var inst_23391 = (state_23395[2]);var state_23395__$1 = state_23395;var statearr_23403_23421 = state_23395__$1;(statearr_23403_23421[2] = inst_23391);
(statearr_23403_23421[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23396 === 7))
{var inst_23376 = (state_23395[7]);var inst_23381 = (state_23395[2]);var inst_23382 = cljs.core.next(inst_23376);var inst_23376__$1 = inst_23382;var state_23395__$1 = (function (){var statearr_23404 = state_23395;(statearr_23404[8] = inst_23381);
(statearr_23404[7] = inst_23376__$1);
return statearr_23404;
})();var statearr_23405_23422 = state_23395__$1;(statearr_23405_23422[2] = null);
(statearr_23405_23422[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23396 === 8))
{var inst_23386 = cljs.core.async.close_BANG_(ch);var state_23395__$1 = state_23395;var statearr_23406_23423 = state_23395__$1;(statearr_23406_23423[2] = inst_23386);
(statearr_23406_23423[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23396 === 9))
{var state_23395__$1 = state_23395;var statearr_23407_23424 = state_23395__$1;(statearr_23407_23424[2] = null);
(statearr_23407_23424[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23396 === 10))
{var inst_23389 = (state_23395[2]);var state_23395__$1 = state_23395;var statearr_23408_23425 = state_23395__$1;(statearr_23408_23425[2] = inst_23389);
(statearr_23408_23425[1] = 6);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_23412 = [null,null,null,null,null,null,null,null,null];(statearr_23412[0] = state_machine__5507__auto__);
(statearr_23412[1] = 1);
return statearr_23412;
});
var state_machine__5507__auto____1 = (function (state_23395){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23395);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23413){if((e23413 instanceof Object))
{var ex__5510__auto__ = e23413;var statearr_23414_23426 = state_23395;(statearr_23414_23426[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23395);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23427 = state_23395;
state_23395 = G__23427;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23395){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23415 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23415;
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
cljs.core.async.Mux = (function (){var obj23429 = {};return obj23429;
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
cljs.core.async.Mult = (function (){var obj23431 = {};return obj23431;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23655 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23655 = (function (cs,ch,mult,meta23656){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23656 = meta23656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23655.cljs$lang$type = true;
cljs.core.async.t23655.cljs$lang$ctorStr = "cljs.core.async/t23655";
cljs.core.async.t23655.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23655");
});})(cs))
;
cljs.core.async.t23655.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23655.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23655.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23655.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23655.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23657){var self__ = this;
var _23657__$1 = this;return self__.meta23656;
});})(cs))
;
cljs.core.async.t23655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23657,meta23656__$1){var self__ = this;
var _23657__$1 = this;return (new cljs.core.async.t23655(self__.cs,self__.ch,self__.mult,meta23656__$1));
});})(cs))
;
cljs.core.async.__GT_t23655 = ((function (cs){
return (function __GT_t23655(cs__$1,ch__$1,mult__$1,meta23656){return (new cljs.core.async.t23655(cs__$1,ch__$1,mult__$1,meta23656));
});})(cs))
;
}
return (new cljs.core.async.t23655(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___23878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23792){var state_val_23793 = (state_23792[1]);if((state_val_23793 === 32))
{var inst_23736 = (state_23792[7]);var inst_23660 = (state_23792[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23792,31,Object,null,30);var inst_23743 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23736,inst_23660,done);var state_23792__$1 = state_23792;var statearr_23794_23879 = state_23792__$1;(statearr_23794_23879[2] = inst_23743);
cljs.core.async.impl.ioc_helpers.process_exception(state_23792__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 1))
{var state_23792__$1 = state_23792;var statearr_23795_23880 = state_23792__$1;(statearr_23795_23880[2] = null);
(statearr_23795_23880[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 33))
{var inst_23749 = (state_23792[9]);var inst_23751 = cljs.core.chunked_seq_QMARK_(inst_23749);var state_23792__$1 = state_23792;if(inst_23751)
{var statearr_23796_23881 = state_23792__$1;(statearr_23796_23881[1] = 36);
} else
{var statearr_23797_23882 = state_23792__$1;(statearr_23797_23882[1] = 37);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 2))
{var state_23792__$1 = state_23792;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23792__$1,4,ch);
} else
{if((state_val_23793 === 34))
{var state_23792__$1 = state_23792;var statearr_23798_23883 = state_23792__$1;(statearr_23798_23883[2] = null);
(statearr_23798_23883[1] = 35);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 3))
{var inst_23790 = (state_23792[2]);var state_23792__$1 = state_23792;return cljs.core.async.impl.ioc_helpers.return_chan(state_23792__$1,inst_23790);
} else
{if((state_val_23793 === 35))
{var inst_23774 = (state_23792[2]);var state_23792__$1 = state_23792;var statearr_23799_23884 = state_23792__$1;(statearr_23799_23884[2] = inst_23774);
(statearr_23799_23884[1] = 29);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 4))
{var inst_23660 = (state_23792[8]);var inst_23660__$1 = (state_23792[2]);var inst_23661 = (inst_23660__$1 == null);var state_23792__$1 = (function (){var statearr_23800 = state_23792;(statearr_23800[8] = inst_23660__$1);
return statearr_23800;
})();if(cljs.core.truth_(inst_23661))
{var statearr_23801_23885 = state_23792__$1;(statearr_23801_23885[1] = 5);
} else
{var statearr_23802_23886 = state_23792__$1;(statearr_23802_23886[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 36))
{var inst_23749 = (state_23792[9]);var inst_23753 = cljs.core.chunk_first(inst_23749);var inst_23754 = cljs.core.chunk_rest(inst_23749);var inst_23755 = cljs.core.count(inst_23753);var inst_23728 = inst_23754;var inst_23729 = inst_23753;var inst_23730 = inst_23755;var inst_23731 = 0;var state_23792__$1 = (function (){var statearr_23803 = state_23792;(statearr_23803[10] = inst_23728);
(statearr_23803[11] = inst_23729);
(statearr_23803[12] = inst_23731);
(statearr_23803[13] = inst_23730);
return statearr_23803;
})();var statearr_23804_23887 = state_23792__$1;(statearr_23804_23887[2] = null);
(statearr_23804_23887[1] = 25);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 5))
{var inst_23667 = cljs.core.deref(cs);var inst_23668 = cljs.core.seq(inst_23667);var inst_23669 = inst_23668;var inst_23670 = null;var inst_23671 = 0;var inst_23672 = 0;var state_23792__$1 = (function (){var statearr_23805 = state_23792;(statearr_23805[14] = inst_23671);
(statearr_23805[15] = inst_23672);
(statearr_23805[16] = inst_23670);
(statearr_23805[17] = inst_23669);
return statearr_23805;
})();var statearr_23806_23888 = state_23792__$1;(statearr_23806_23888[2] = null);
(statearr_23806_23888[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 37))
{var inst_23749 = (state_23792[9]);var inst_23758 = cljs.core.first(inst_23749);var state_23792__$1 = (function (){var statearr_23807 = state_23792;(statearr_23807[18] = inst_23758);
return statearr_23807;
})();var statearr_23808_23889 = state_23792__$1;(statearr_23808_23889[2] = null);
(statearr_23808_23889[1] = 41);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 6))
{var inst_23720 = (state_23792[19]);var inst_23719 = cljs.core.deref(cs);var inst_23720__$1 = cljs.core.keys(inst_23719);var inst_23721 = cljs.core.count(inst_23720__$1);var inst_23722 = cljs.core.reset_BANG_(dctr,inst_23721);var inst_23727 = cljs.core.seq(inst_23720__$1);var inst_23728 = inst_23727;var inst_23729 = null;var inst_23730 = 0;var inst_23731 = 0;var state_23792__$1 = (function (){var statearr_23809 = state_23792;(statearr_23809[10] = inst_23728);
(statearr_23809[19] = inst_23720__$1);
(statearr_23809[11] = inst_23729);
(statearr_23809[12] = inst_23731);
(statearr_23809[20] = inst_23722);
(statearr_23809[13] = inst_23730);
return statearr_23809;
})();var statearr_23810_23890 = state_23792__$1;(statearr_23810_23890[2] = null);
(statearr_23810_23890[1] = 25);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 38))
{var inst_23771 = (state_23792[2]);var state_23792__$1 = state_23792;var statearr_23811_23891 = state_23792__$1;(statearr_23811_23891[2] = inst_23771);
(statearr_23811_23891[1] = 35);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 7))
{var inst_23788 = (state_23792[2]);var state_23792__$1 = state_23792;var statearr_23812_23892 = state_23792__$1;(statearr_23812_23892[2] = inst_23788);
(statearr_23812_23892[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 39))
{var inst_23749 = (state_23792[9]);var inst_23767 = (state_23792[2]);var inst_23768 = cljs.core.next(inst_23749);var inst_23728 = inst_23768;var inst_23729 = null;var inst_23730 = 0;var inst_23731 = 0;var state_23792__$1 = (function (){var statearr_23813 = state_23792;(statearr_23813[10] = inst_23728);
(statearr_23813[11] = inst_23729);
(statearr_23813[12] = inst_23731);
(statearr_23813[13] = inst_23730);
(statearr_23813[21] = inst_23767);
return statearr_23813;
})();var statearr_23814_23893 = state_23792__$1;(statearr_23814_23893[2] = null);
(statearr_23814_23893[1] = 25);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 8))
{var inst_23671 = (state_23792[14]);var inst_23672 = (state_23792[15]);var inst_23674 = (inst_23672 < inst_23671);var inst_23675 = inst_23674;var state_23792__$1 = state_23792;if(cljs.core.truth_(inst_23675))
{var statearr_23815_23894 = state_23792__$1;(statearr_23815_23894[1] = 10);
} else
{var statearr_23816_23895 = state_23792__$1;(statearr_23816_23895[1] = 11);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 40))
{var inst_23758 = (state_23792[18]);var inst_23759 = (state_23792[2]);var inst_23760 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23761 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23758);var state_23792__$1 = (function (){var statearr_23817 = state_23792;(statearr_23817[22] = inst_23760);
(statearr_23817[23] = inst_23759);
return statearr_23817;
})();var statearr_23818_23896 = state_23792__$1;(statearr_23818_23896[2] = inst_23761);
cljs.core.async.impl.ioc_helpers.process_exception(state_23792__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 9))
{var inst_23717 = (state_23792[2]);var state_23792__$1 = state_23792;var statearr_23819_23897 = state_23792__$1;(statearr_23819_23897[2] = inst_23717);
(statearr_23819_23897[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 41))
{var inst_23660 = (state_23792[8]);var inst_23758 = (state_23792[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23792,40,Object,null,39);var inst_23765 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23758,inst_23660,done);var state_23792__$1 = state_23792;var statearr_23820_23898 = state_23792__$1;(statearr_23820_23898[2] = inst_23765);
cljs.core.async.impl.ioc_helpers.process_exception(state_23792__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 10))
{var inst_23672 = (state_23792[15]);var inst_23670 = (state_23792[16]);var inst_23678 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23670,inst_23672);var inst_23679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23678,0,null);var inst_23680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23678,1,null);var state_23792__$1 = (function (){var statearr_23821 = state_23792;(statearr_23821[24] = inst_23679);
return statearr_23821;
})();if(cljs.core.truth_(inst_23680))
{var statearr_23822_23899 = state_23792__$1;(statearr_23822_23899[1] = 13);
} else
{var statearr_23823_23900 = state_23792__$1;(statearr_23823_23900[1] = 14);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 42))
{var state_23792__$1 = state_23792;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23792__$1,45,dchan);
} else
{if((state_val_23793 === 11))
{var inst_23669 = (state_23792[17]);var inst_23689 = (state_23792[25]);var inst_23689__$1 = cljs.core.seq(inst_23669);var state_23792__$1 = (function (){var statearr_23824 = state_23792;(statearr_23824[25] = inst_23689__$1);
return statearr_23824;
})();if(inst_23689__$1)
{var statearr_23825_23901 = state_23792__$1;(statearr_23825_23901[1] = 16);
} else
{var statearr_23826_23902 = state_23792__$1;(statearr_23826_23902[1] = 17);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 43))
{var state_23792__$1 = state_23792;var statearr_23827_23903 = state_23792__$1;(statearr_23827_23903[2] = null);
(statearr_23827_23903[1] = 44);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 12))
{var inst_23715 = (state_23792[2]);var state_23792__$1 = state_23792;var statearr_23828_23904 = state_23792__$1;(statearr_23828_23904[2] = inst_23715);
(statearr_23828_23904[1] = 9);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 44))
{var inst_23785 = (state_23792[2]);var state_23792__$1 = (function (){var statearr_23829 = state_23792;(statearr_23829[26] = inst_23785);
return statearr_23829;
})();var statearr_23830_23905 = state_23792__$1;(statearr_23830_23905[2] = null);
(statearr_23830_23905[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 13))
{var inst_23679 = (state_23792[24]);var inst_23682 = cljs.core.async.close_BANG_(inst_23679);var state_23792__$1 = state_23792;var statearr_23831_23906 = state_23792__$1;(statearr_23831_23906[2] = inst_23682);
(statearr_23831_23906[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 45))
{var inst_23782 = (state_23792[2]);var state_23792__$1 = state_23792;var statearr_23835_23907 = state_23792__$1;(statearr_23835_23907[2] = inst_23782);
(statearr_23835_23907[1] = 44);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 14))
{var state_23792__$1 = state_23792;var statearr_23836_23908 = state_23792__$1;(statearr_23836_23908[2] = null);
(statearr_23836_23908[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 15))
{var inst_23671 = (state_23792[14]);var inst_23672 = (state_23792[15]);var inst_23670 = (state_23792[16]);var inst_23669 = (state_23792[17]);var inst_23685 = (state_23792[2]);var inst_23686 = (inst_23672 + 1);var tmp23832 = inst_23671;var tmp23833 = inst_23670;var tmp23834 = inst_23669;var inst_23669__$1 = tmp23834;var inst_23670__$1 = tmp23833;var inst_23671__$1 = tmp23832;var inst_23672__$1 = inst_23686;var state_23792__$1 = (function (){var statearr_23837 = state_23792;(statearr_23837[14] = inst_23671__$1);
(statearr_23837[15] = inst_23672__$1);
(statearr_23837[16] = inst_23670__$1);
(statearr_23837[27] = inst_23685);
(statearr_23837[17] = inst_23669__$1);
return statearr_23837;
})();var statearr_23838_23909 = state_23792__$1;(statearr_23838_23909[2] = null);
(statearr_23838_23909[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 16))
{var inst_23689 = (state_23792[25]);var inst_23691 = cljs.core.chunked_seq_QMARK_(inst_23689);var state_23792__$1 = state_23792;if(inst_23691)
{var statearr_23839_23910 = state_23792__$1;(statearr_23839_23910[1] = 19);
} else
{var statearr_23840_23911 = state_23792__$1;(statearr_23840_23911[1] = 20);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 17))
{var state_23792__$1 = state_23792;var statearr_23841_23912 = state_23792__$1;(statearr_23841_23912[2] = null);
(statearr_23841_23912[1] = 18);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 18))
{var inst_23713 = (state_23792[2]);var state_23792__$1 = state_23792;var statearr_23842_23913 = state_23792__$1;(statearr_23842_23913[2] = inst_23713);
(statearr_23842_23913[1] = 12);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 19))
{var inst_23689 = (state_23792[25]);var inst_23693 = cljs.core.chunk_first(inst_23689);var inst_23694 = cljs.core.chunk_rest(inst_23689);var inst_23695 = cljs.core.count(inst_23693);var inst_23669 = inst_23694;var inst_23670 = inst_23693;var inst_23671 = inst_23695;var inst_23672 = 0;var state_23792__$1 = (function (){var statearr_23843 = state_23792;(statearr_23843[14] = inst_23671);
(statearr_23843[15] = inst_23672);
(statearr_23843[16] = inst_23670);
(statearr_23843[17] = inst_23669);
return statearr_23843;
})();var statearr_23844_23914 = state_23792__$1;(statearr_23844_23914[2] = null);
(statearr_23844_23914[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 20))
{var inst_23689 = (state_23792[25]);var inst_23699 = cljs.core.first(inst_23689);var inst_23700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23699,0,null);var inst_23701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23699,1,null);var state_23792__$1 = (function (){var statearr_23845 = state_23792;(statearr_23845[28] = inst_23700);
return statearr_23845;
})();if(cljs.core.truth_(inst_23701))
{var statearr_23846_23915 = state_23792__$1;(statearr_23846_23915[1] = 22);
} else
{var statearr_23847_23916 = state_23792__$1;(statearr_23847_23916[1] = 23);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 21))
{var inst_23710 = (state_23792[2]);var state_23792__$1 = state_23792;var statearr_23848_23917 = state_23792__$1;(statearr_23848_23917[2] = inst_23710);
(statearr_23848_23917[1] = 18);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 22))
{var inst_23700 = (state_23792[28]);var inst_23703 = cljs.core.async.close_BANG_(inst_23700);var state_23792__$1 = state_23792;var statearr_23849_23918 = state_23792__$1;(statearr_23849_23918[2] = inst_23703);
(statearr_23849_23918[1] = 24);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 23))
{var state_23792__$1 = state_23792;var statearr_23850_23919 = state_23792__$1;(statearr_23850_23919[2] = null);
(statearr_23850_23919[1] = 24);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 24))
{var inst_23689 = (state_23792[25]);var inst_23706 = (state_23792[2]);var inst_23707 = cljs.core.next(inst_23689);var inst_23669 = inst_23707;var inst_23670 = null;var inst_23671 = 0;var inst_23672 = 0;var state_23792__$1 = (function (){var statearr_23851 = state_23792;(statearr_23851[14] = inst_23671);
(statearr_23851[15] = inst_23672);
(statearr_23851[16] = inst_23670);
(statearr_23851[17] = inst_23669);
(statearr_23851[29] = inst_23706);
return statearr_23851;
})();var statearr_23852_23920 = state_23792__$1;(statearr_23852_23920[2] = null);
(statearr_23852_23920[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 25))
{var inst_23731 = (state_23792[12]);var inst_23730 = (state_23792[13]);var inst_23733 = (inst_23731 < inst_23730);var inst_23734 = inst_23733;var state_23792__$1 = state_23792;if(cljs.core.truth_(inst_23734))
{var statearr_23853_23921 = state_23792__$1;(statearr_23853_23921[1] = 27);
} else
{var statearr_23854_23922 = state_23792__$1;(statearr_23854_23922[1] = 28);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 26))
{var inst_23720 = (state_23792[19]);var inst_23778 = (state_23792[2]);var inst_23779 = cljs.core.seq(inst_23720);var state_23792__$1 = (function (){var statearr_23855 = state_23792;(statearr_23855[30] = inst_23778);
return statearr_23855;
})();if(inst_23779)
{var statearr_23856_23923 = state_23792__$1;(statearr_23856_23923[1] = 42);
} else
{var statearr_23857_23924 = state_23792__$1;(statearr_23857_23924[1] = 43);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 27))
{var inst_23729 = (state_23792[11]);var inst_23731 = (state_23792[12]);var inst_23736 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23729,inst_23731);var state_23792__$1 = (function (){var statearr_23858 = state_23792;(statearr_23858[7] = inst_23736);
return statearr_23858;
})();var statearr_23859_23925 = state_23792__$1;(statearr_23859_23925[2] = null);
(statearr_23859_23925[1] = 32);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 28))
{var inst_23728 = (state_23792[10]);var inst_23749 = (state_23792[9]);var inst_23749__$1 = cljs.core.seq(inst_23728);var state_23792__$1 = (function (){var statearr_23863 = state_23792;(statearr_23863[9] = inst_23749__$1);
return statearr_23863;
})();if(inst_23749__$1)
{var statearr_23864_23926 = state_23792__$1;(statearr_23864_23926[1] = 33);
} else
{var statearr_23865_23927 = state_23792__$1;(statearr_23865_23927[1] = 34);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 29))
{var inst_23776 = (state_23792[2]);var state_23792__$1 = state_23792;var statearr_23866_23928 = state_23792__$1;(statearr_23866_23928[2] = inst_23776);
(statearr_23866_23928[1] = 26);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 30))
{var inst_23728 = (state_23792[10]);var inst_23729 = (state_23792[11]);var inst_23731 = (state_23792[12]);var inst_23730 = (state_23792[13]);var inst_23745 = (state_23792[2]);var inst_23746 = (inst_23731 + 1);var tmp23860 = inst_23728;var tmp23861 = inst_23729;var tmp23862 = inst_23730;var inst_23728__$1 = tmp23860;var inst_23729__$1 = tmp23861;var inst_23730__$1 = tmp23862;var inst_23731__$1 = inst_23746;var state_23792__$1 = (function (){var statearr_23867 = state_23792;(statearr_23867[10] = inst_23728__$1);
(statearr_23867[11] = inst_23729__$1);
(statearr_23867[31] = inst_23745);
(statearr_23867[12] = inst_23731__$1);
(statearr_23867[13] = inst_23730__$1);
return statearr_23867;
})();var statearr_23868_23929 = state_23792__$1;(statearr_23868_23929[2] = null);
(statearr_23868_23929[1] = 25);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23793 === 31))
{var inst_23736 = (state_23792[7]);var inst_23737 = (state_23792[2]);var inst_23738 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23739 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23736);var state_23792__$1 = (function (){var statearr_23869 = state_23792;(statearr_23869[32] = inst_23737);
(statearr_23869[33] = inst_23738);
return statearr_23869;
})();var statearr_23870_23930 = state_23792__$1;(statearr_23870_23930[2] = inst_23739);
cljs.core.async.impl.ioc_helpers.process_exception(state_23792__$1);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_23874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23874[0] = state_machine__5507__auto__);
(statearr_23874[1] = 1);
return statearr_23874;
});
var state_machine__5507__auto____1 = (function (state_23792){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23792);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23875){if((e23875 instanceof Object))
{var ex__5510__auto__ = e23875;var statearr_23876_23931 = state_23792;(statearr_23876_23931[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23792);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23932 = state_23792;
state_23792 = G__23932;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23792){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23877 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23878);
return statearr_23877;
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
cljs.core.async.Mix = (function (){var obj23934 = {};return obj23934;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$177,null,cljs.core.constant$keyword$178,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$179);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$178);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$179,chs);var pauses = pick(cljs.core.constant$keyword$177,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$180,solos,cljs.core.constant$keyword$181,pick(cljs.core.constant$keyword$178,chs),cljs.core.constant$keyword$182,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$177)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24044 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24044 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24045){
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
this.meta24045 = meta24045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24044.cljs$lang$type = true;
cljs.core.async.t24044.cljs$lang$ctorStr = "cljs.core.async/t24044";
cljs.core.async.t24044.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24044");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24044.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24044.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24044.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24044.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24044.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24044.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24044.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24044.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24046){var self__ = this;
var _24046__$1 = this;return self__.meta24045;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24046,meta24045__$1){var self__ = this;
var _24046__$1 = this;return (new cljs.core.async.t24044(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24045__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24044 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24044(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24045){return (new cljs.core.async.t24044(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24045));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24044(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24111){var state_val_24112 = (state_24111[1]);if((state_val_24112 === 1))
{var inst_24050 = (state_24111[7]);var inst_24050__$1 = calc_state();var inst_24051 = cljs.core.seq_QMARK_(inst_24050__$1);var state_24111__$1 = (function (){var statearr_24113 = state_24111;(statearr_24113[7] = inst_24050__$1);
return statearr_24113;
})();if(inst_24051)
{var statearr_24114_24154 = state_24111__$1;(statearr_24114_24154[1] = 2);
} else
{var statearr_24115_24155 = state_24111__$1;(statearr_24115_24155[1] = 3);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 2))
{var inst_24050 = (state_24111[7]);var inst_24053 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24050);var state_24111__$1 = state_24111;var statearr_24116_24156 = state_24111__$1;(statearr_24116_24156[2] = inst_24053);
(statearr_24116_24156[1] = 4);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 3))
{var inst_24050 = (state_24111[7]);var state_24111__$1 = state_24111;var statearr_24117_24157 = state_24111__$1;(statearr_24117_24157[2] = inst_24050);
(statearr_24117_24157[1] = 4);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 4))
{var inst_24050 = (state_24111[7]);var inst_24056 = (state_24111[2]);var inst_24057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24056,cljs.core.constant$keyword$182);var inst_24058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24056,cljs.core.constant$keyword$181);var inst_24059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24056,cljs.core.constant$keyword$180);var inst_24060 = inst_24050;var state_24111__$1 = (function (){var statearr_24118 = state_24111;(statearr_24118[8] = inst_24059);
(statearr_24118[9] = inst_24058);
(statearr_24118[10] = inst_24057);
(statearr_24118[11] = inst_24060);
return statearr_24118;
})();var statearr_24119_24158 = state_24111__$1;(statearr_24119_24158[2] = null);
(statearr_24119_24158[1] = 5);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 5))
{var inst_24060 = (state_24111[11]);var inst_24063 = cljs.core.seq_QMARK_(inst_24060);var state_24111__$1 = state_24111;if(inst_24063)
{var statearr_24120_24159 = state_24111__$1;(statearr_24120_24159[1] = 7);
} else
{var statearr_24121_24160 = state_24111__$1;(statearr_24121_24160[1] = 8);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 6))
{var inst_24109 = (state_24111[2]);var state_24111__$1 = state_24111;return cljs.core.async.impl.ioc_helpers.return_chan(state_24111__$1,inst_24109);
} else
{if((state_val_24112 === 7))
{var inst_24060 = (state_24111[11]);var inst_24065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24060);var state_24111__$1 = state_24111;var statearr_24122_24161 = state_24111__$1;(statearr_24122_24161[2] = inst_24065);
(statearr_24122_24161[1] = 9);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 8))
{var inst_24060 = (state_24111[11]);var state_24111__$1 = state_24111;var statearr_24123_24162 = state_24111__$1;(statearr_24123_24162[2] = inst_24060);
(statearr_24123_24162[1] = 9);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 9))
{var inst_24068 = (state_24111[12]);var inst_24068__$1 = (state_24111[2]);var inst_24069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24068__$1,cljs.core.constant$keyword$182);var inst_24070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24068__$1,cljs.core.constant$keyword$181);var inst_24071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24068__$1,cljs.core.constant$keyword$180);var state_24111__$1 = (function (){var statearr_24124 = state_24111;(statearr_24124[13] = inst_24070);
(statearr_24124[14] = inst_24071);
(statearr_24124[12] = inst_24068__$1);
return statearr_24124;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24111__$1,10,inst_24069);
} else
{if((state_val_24112 === 10))
{var inst_24076 = (state_24111[15]);var inst_24075 = (state_24111[16]);var inst_24074 = (state_24111[2]);var inst_24075__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24074,0,null);var inst_24076__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24074,1,null);var inst_24077 = (inst_24075__$1 == null);var inst_24078 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24076__$1,change);var inst_24079 = (inst_24077) || (inst_24078);var state_24111__$1 = (function (){var statearr_24125 = state_24111;(statearr_24125[15] = inst_24076__$1);
(statearr_24125[16] = inst_24075__$1);
return statearr_24125;
})();if(cljs.core.truth_(inst_24079))
{var statearr_24126_24163 = state_24111__$1;(statearr_24126_24163[1] = 11);
} else
{var statearr_24127_24164 = state_24111__$1;(statearr_24127_24164[1] = 12);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 11))
{var inst_24075 = (state_24111[16]);var inst_24081 = (inst_24075 == null);var state_24111__$1 = state_24111;if(cljs.core.truth_(inst_24081))
{var statearr_24128_24165 = state_24111__$1;(statearr_24128_24165[1] = 14);
} else
{var statearr_24129_24166 = state_24111__$1;(statearr_24129_24166[1] = 15);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 12))
{var inst_24071 = (state_24111[14]);var inst_24090 = (state_24111[17]);var inst_24076 = (state_24111[15]);var inst_24090__$1 = (inst_24071.cljs$core$IFn$_invoke$arity$1 ? inst_24071.cljs$core$IFn$_invoke$arity$1(inst_24076) : inst_24071.call(null,inst_24076));var state_24111__$1 = (function (){var statearr_24130 = state_24111;(statearr_24130[17] = inst_24090__$1);
return statearr_24130;
})();if(cljs.core.truth_(inst_24090__$1))
{var statearr_24131_24167 = state_24111__$1;(statearr_24131_24167[1] = 17);
} else
{var statearr_24132_24168 = state_24111__$1;(statearr_24132_24168[1] = 18);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 13))
{var inst_24107 = (state_24111[2]);var state_24111__$1 = state_24111;var statearr_24133_24169 = state_24111__$1;(statearr_24133_24169[2] = inst_24107);
(statearr_24133_24169[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 14))
{var inst_24076 = (state_24111[15]);var inst_24083 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24076);var state_24111__$1 = state_24111;var statearr_24134_24170 = state_24111__$1;(statearr_24134_24170[2] = inst_24083);
(statearr_24134_24170[1] = 16);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 15))
{var state_24111__$1 = state_24111;var statearr_24135_24171 = state_24111__$1;(statearr_24135_24171[2] = null);
(statearr_24135_24171[1] = 16);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 16))
{var inst_24086 = (state_24111[2]);var inst_24087 = calc_state();var inst_24060 = inst_24087;var state_24111__$1 = (function (){var statearr_24136 = state_24111;(statearr_24136[18] = inst_24086);
(statearr_24136[11] = inst_24060);
return statearr_24136;
})();var statearr_24137_24172 = state_24111__$1;(statearr_24137_24172[2] = null);
(statearr_24137_24172[1] = 5);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 17))
{var inst_24090 = (state_24111[17]);var state_24111__$1 = state_24111;var statearr_24138_24173 = state_24111__$1;(statearr_24138_24173[2] = inst_24090);
(statearr_24138_24173[1] = 19);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 18))
{var inst_24070 = (state_24111[13]);var inst_24071 = (state_24111[14]);var inst_24076 = (state_24111[15]);var inst_24093 = cljs.core.empty_QMARK_(inst_24071);var inst_24094 = (inst_24070.cljs$core$IFn$_invoke$arity$1 ? inst_24070.cljs$core$IFn$_invoke$arity$1(inst_24076) : inst_24070.call(null,inst_24076));var inst_24095 = cljs.core.not(inst_24094);var inst_24096 = (inst_24093) && (inst_24095);var state_24111__$1 = state_24111;var statearr_24139_24174 = state_24111__$1;(statearr_24139_24174[2] = inst_24096);
(statearr_24139_24174[1] = 19);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 19))
{var inst_24098 = (state_24111[2]);var state_24111__$1 = state_24111;if(cljs.core.truth_(inst_24098))
{var statearr_24140_24175 = state_24111__$1;(statearr_24140_24175[1] = 20);
} else
{var statearr_24141_24176 = state_24111__$1;(statearr_24141_24176[1] = 21);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 20))
{var inst_24075 = (state_24111[16]);var state_24111__$1 = state_24111;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24111__$1,23,out,inst_24075);
} else
{if((state_val_24112 === 21))
{var state_24111__$1 = state_24111;var statearr_24142_24177 = state_24111__$1;(statearr_24142_24177[2] = null);
(statearr_24142_24177[1] = 22);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 22))
{var inst_24068 = (state_24111[12]);var inst_24104 = (state_24111[2]);var inst_24060 = inst_24068;var state_24111__$1 = (function (){var statearr_24143 = state_24111;(statearr_24143[11] = inst_24060);
(statearr_24143[19] = inst_24104);
return statearr_24143;
})();var statearr_24144_24178 = state_24111__$1;(statearr_24144_24178[2] = null);
(statearr_24144_24178[1] = 5);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24112 === 23))
{var inst_24101 = (state_24111[2]);var state_24111__$1 = state_24111;var statearr_24145_24179 = state_24111__$1;(statearr_24145_24179[2] = inst_24101);
(statearr_24145_24179[1] = 22);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24149[0] = state_machine__5507__auto__);
(statearr_24149[1] = 1);
return statearr_24149;
});
var state_machine__5507__auto____1 = (function (state_24111){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24111);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24150){if((e24150 instanceof Object))
{var ex__5510__auto__ = e24150;var statearr_24151_24180 = state_24111;(statearr_24151_24180[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24111);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24150;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24181 = state_24111;
state_24111 = G__24181;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24111){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24152 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24153);
return statearr_24152;
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
cljs.core.async.Pub = (function (){var obj24183 = {};return obj24183;
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
return (function (p1__24184_SHARP_){if(cljs.core.truth_((p1__24184_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24184_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24184_SHARP_.call(null,topic))))
{return p1__24184_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24184_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24309 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24309 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24310){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24310 = meta24310;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24309.cljs$lang$type = true;
cljs.core.async.t24309.cljs$lang$ctorStr = "cljs.core.async/t24309";
cljs.core.async.t24309.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24309");
});})(mults,ensure_mult))
;
cljs.core.async.t24309.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24309.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24309.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24309.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24309.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24309.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24309.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24311){var self__ = this;
var _24311__$1 = this;return self__.meta24310;
});})(mults,ensure_mult))
;
cljs.core.async.t24309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24311,meta24310__$1){var self__ = this;
var _24311__$1 = this;return (new cljs.core.async.t24309(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24310__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24309 = ((function (mults,ensure_mult){
return (function __GT_t24309(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24310){return (new cljs.core.async.t24309(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24310));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24309(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24385){var state_val_24386 = (state_24385[1]);if((state_val_24386 === 1))
{var state_24385__$1 = state_24385;var statearr_24387_24434 = state_24385__$1;(statearr_24387_24434[2] = null);
(statearr_24387_24434[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 2))
{var state_24385__$1 = state_24385;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24385__$1,4,ch);
} else
{if((state_val_24386 === 3))
{var inst_24383 = (state_24385[2]);var state_24385__$1 = state_24385;return cljs.core.async.impl.ioc_helpers.return_chan(state_24385__$1,inst_24383);
} else
{if((state_val_24386 === 4))
{var inst_24314 = (state_24385[7]);var inst_24314__$1 = (state_24385[2]);var inst_24315 = (inst_24314__$1 == null);var state_24385__$1 = (function (){var statearr_24388 = state_24385;(statearr_24388[7] = inst_24314__$1);
return statearr_24388;
})();if(cljs.core.truth_(inst_24315))
{var statearr_24389_24435 = state_24385__$1;(statearr_24389_24435[1] = 5);
} else
{var statearr_24390_24436 = state_24385__$1;(statearr_24390_24436[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 5))
{var inst_24321 = cljs.core.deref(mults);var inst_24322 = cljs.core.vals(inst_24321);var inst_24323 = cljs.core.seq(inst_24322);var inst_24324 = inst_24323;var inst_24325 = null;var inst_24326 = 0;var inst_24327 = 0;var state_24385__$1 = (function (){var statearr_24391 = state_24385;(statearr_24391[8] = inst_24326);
(statearr_24391[9] = inst_24327);
(statearr_24391[10] = inst_24325);
(statearr_24391[11] = inst_24324);
return statearr_24391;
})();var statearr_24392_24437 = state_24385__$1;(statearr_24392_24437[2] = null);
(statearr_24392_24437[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 6))
{var inst_24364 = (state_24385[12]);var inst_24362 = (state_24385[13]);var inst_24314 = (state_24385[7]);var inst_24362__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24314) : topic_fn.call(null,inst_24314));var inst_24363 = cljs.core.deref(mults);var inst_24364__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24363,inst_24362__$1);var state_24385__$1 = (function (){var statearr_24393 = state_24385;(statearr_24393[12] = inst_24364__$1);
(statearr_24393[13] = inst_24362__$1);
return statearr_24393;
})();if(cljs.core.truth_(inst_24364__$1))
{var statearr_24394_24438 = state_24385__$1;(statearr_24394_24438[1] = 19);
} else
{var statearr_24395_24439 = state_24385__$1;(statearr_24395_24439[1] = 20);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 7))
{var inst_24381 = (state_24385[2]);var state_24385__$1 = state_24385;var statearr_24396_24440 = state_24385__$1;(statearr_24396_24440[2] = inst_24381);
(statearr_24396_24440[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 8))
{var inst_24326 = (state_24385[8]);var inst_24327 = (state_24385[9]);var inst_24329 = (inst_24327 < inst_24326);var inst_24330 = inst_24329;var state_24385__$1 = state_24385;if(cljs.core.truth_(inst_24330))
{var statearr_24400_24441 = state_24385__$1;(statearr_24400_24441[1] = 10);
} else
{var statearr_24401_24442 = state_24385__$1;(statearr_24401_24442[1] = 11);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 9))
{var inst_24360 = (state_24385[2]);var state_24385__$1 = state_24385;var statearr_24402_24443 = state_24385__$1;(statearr_24402_24443[2] = inst_24360);
(statearr_24402_24443[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 10))
{var inst_24326 = (state_24385[8]);var inst_24327 = (state_24385[9]);var inst_24325 = (state_24385[10]);var inst_24324 = (state_24385[11]);var inst_24332 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24325,inst_24327);var inst_24333 = cljs.core.async.muxch_STAR_(inst_24332);var inst_24334 = cljs.core.async.close_BANG_(inst_24333);var inst_24335 = (inst_24327 + 1);var tmp24397 = inst_24326;var tmp24398 = inst_24325;var tmp24399 = inst_24324;var inst_24324__$1 = tmp24399;var inst_24325__$1 = tmp24398;var inst_24326__$1 = tmp24397;var inst_24327__$1 = inst_24335;var state_24385__$1 = (function (){var statearr_24403 = state_24385;(statearr_24403[8] = inst_24326__$1);
(statearr_24403[9] = inst_24327__$1);
(statearr_24403[14] = inst_24334);
(statearr_24403[10] = inst_24325__$1);
(statearr_24403[11] = inst_24324__$1);
return statearr_24403;
})();var statearr_24404_24444 = state_24385__$1;(statearr_24404_24444[2] = null);
(statearr_24404_24444[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 11))
{var inst_24324 = (state_24385[11]);var inst_24338 = (state_24385[15]);var inst_24338__$1 = cljs.core.seq(inst_24324);var state_24385__$1 = (function (){var statearr_24405 = state_24385;(statearr_24405[15] = inst_24338__$1);
return statearr_24405;
})();if(inst_24338__$1)
{var statearr_24406_24445 = state_24385__$1;(statearr_24406_24445[1] = 13);
} else
{var statearr_24407_24446 = state_24385__$1;(statearr_24407_24446[1] = 14);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 12))
{var inst_24358 = (state_24385[2]);var state_24385__$1 = state_24385;var statearr_24408_24447 = state_24385__$1;(statearr_24408_24447[2] = inst_24358);
(statearr_24408_24447[1] = 9);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 13))
{var inst_24338 = (state_24385[15]);var inst_24340 = cljs.core.chunked_seq_QMARK_(inst_24338);var state_24385__$1 = state_24385;if(inst_24340)
{var statearr_24409_24448 = state_24385__$1;(statearr_24409_24448[1] = 16);
} else
{var statearr_24410_24449 = state_24385__$1;(statearr_24410_24449[1] = 17);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 14))
{var state_24385__$1 = state_24385;var statearr_24411_24450 = state_24385__$1;(statearr_24411_24450[2] = null);
(statearr_24411_24450[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 15))
{var inst_24356 = (state_24385[2]);var state_24385__$1 = state_24385;var statearr_24412_24451 = state_24385__$1;(statearr_24412_24451[2] = inst_24356);
(statearr_24412_24451[1] = 12);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 16))
{var inst_24338 = (state_24385[15]);var inst_24342 = cljs.core.chunk_first(inst_24338);var inst_24343 = cljs.core.chunk_rest(inst_24338);var inst_24344 = cljs.core.count(inst_24342);var inst_24324 = inst_24343;var inst_24325 = inst_24342;var inst_24326 = inst_24344;var inst_24327 = 0;var state_24385__$1 = (function (){var statearr_24413 = state_24385;(statearr_24413[8] = inst_24326);
(statearr_24413[9] = inst_24327);
(statearr_24413[10] = inst_24325);
(statearr_24413[11] = inst_24324);
return statearr_24413;
})();var statearr_24414_24452 = state_24385__$1;(statearr_24414_24452[2] = null);
(statearr_24414_24452[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 17))
{var inst_24338 = (state_24385[15]);var inst_24347 = cljs.core.first(inst_24338);var inst_24348 = cljs.core.async.muxch_STAR_(inst_24347);var inst_24349 = cljs.core.async.close_BANG_(inst_24348);var inst_24350 = cljs.core.next(inst_24338);var inst_24324 = inst_24350;var inst_24325 = null;var inst_24326 = 0;var inst_24327 = 0;var state_24385__$1 = (function (){var statearr_24415 = state_24385;(statearr_24415[8] = inst_24326);
(statearr_24415[9] = inst_24327);
(statearr_24415[10] = inst_24325);
(statearr_24415[11] = inst_24324);
(statearr_24415[16] = inst_24349);
return statearr_24415;
})();var statearr_24416_24453 = state_24385__$1;(statearr_24416_24453[2] = null);
(statearr_24416_24453[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 18))
{var inst_24353 = (state_24385[2]);var state_24385__$1 = state_24385;var statearr_24417_24454 = state_24385__$1;(statearr_24417_24454[2] = inst_24353);
(statearr_24417_24454[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 19))
{var state_24385__$1 = state_24385;var statearr_24418_24455 = state_24385__$1;(statearr_24418_24455[2] = null);
(statearr_24418_24455[1] = 24);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 20))
{var state_24385__$1 = state_24385;var statearr_24419_24456 = state_24385__$1;(statearr_24419_24456[2] = null);
(statearr_24419_24456[1] = 21);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 21))
{var inst_24378 = (state_24385[2]);var state_24385__$1 = (function (){var statearr_24420 = state_24385;(statearr_24420[17] = inst_24378);
return statearr_24420;
})();var statearr_24421_24457 = state_24385__$1;(statearr_24421_24457[2] = null);
(statearr_24421_24457[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 22))
{var inst_24375 = (state_24385[2]);var state_24385__$1 = state_24385;var statearr_24422_24458 = state_24385__$1;(statearr_24422_24458[2] = inst_24375);
(statearr_24422_24458[1] = 21);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 23))
{var inst_24362 = (state_24385[13]);var inst_24366 = (state_24385[2]);var inst_24367 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24362);var state_24385__$1 = (function (){var statearr_24423 = state_24385;(statearr_24423[18] = inst_24366);
return statearr_24423;
})();var statearr_24424_24459 = state_24385__$1;(statearr_24424_24459[2] = inst_24367);
cljs.core.async.impl.ioc_helpers.process_exception(state_24385__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24386 === 24))
{var inst_24364 = (state_24385[12]);var inst_24314 = (state_24385[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24385,23,Object,null,22);var inst_24371 = cljs.core.async.muxch_STAR_(inst_24364);var state_24385__$1 = state_24385;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24385__$1,25,inst_24371,inst_24314);
} else
{if((state_val_24386 === 25))
{var inst_24373 = (state_24385[2]);var state_24385__$1 = state_24385;var statearr_24425_24460 = state_24385__$1;(statearr_24425_24460[2] = inst_24373);
cljs.core.async.impl.ioc_helpers.process_exception(state_24385__$1);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24429[0] = state_machine__5507__auto__);
(statearr_24429[1] = 1);
return statearr_24429;
});
var state_machine__5507__auto____1 = (function (state_24385){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24385);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24430){if((e24430 instanceof Object))
{var ex__5510__auto__ = e24430;var statearr_24431_24461 = state_24385;(statearr_24431_24461[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24385);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24430;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24462 = state_24385;
state_24385 = G__24462;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24385){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24432 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24433);
return statearr_24432;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24569){var state_val_24570 = (state_24569[1]);if((state_val_24570 === 1))
{var state_24569__$1 = state_24569;var statearr_24571_24600 = state_24569__$1;(statearr_24571_24600[2] = null);
(statearr_24571_24600[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 2))
{var inst_24532 = cljs.core.reset_BANG_(dctr,cnt);var inst_24533 = 0;var state_24569__$1 = (function (){var statearr_24572 = state_24569;(statearr_24572[7] = inst_24533);
(statearr_24572[8] = inst_24532);
return statearr_24572;
})();var statearr_24573_24601 = state_24569__$1;(statearr_24573_24601[2] = null);
(statearr_24573_24601[1] = 4);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 3))
{var inst_24567 = (state_24569[2]);var state_24569__$1 = state_24569;return cljs.core.async.impl.ioc_helpers.return_chan(state_24569__$1,inst_24567);
} else
{if((state_val_24570 === 4))
{var inst_24533 = (state_24569[7]);var inst_24535 = (inst_24533 < cnt);var state_24569__$1 = state_24569;if(cljs.core.truth_(inst_24535))
{var statearr_24574_24602 = state_24569__$1;(statearr_24574_24602[1] = 6);
} else
{var statearr_24575_24603 = state_24569__$1;(statearr_24575_24603[1] = 7);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 5))
{var inst_24553 = (state_24569[2]);var state_24569__$1 = (function (){var statearr_24576 = state_24569;(statearr_24576[9] = inst_24553);
return statearr_24576;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24569__$1,12,dchan);
} else
{if((state_val_24570 === 6))
{var state_24569__$1 = state_24569;var statearr_24577_24604 = state_24569__$1;(statearr_24577_24604[2] = null);
(statearr_24577_24604[1] = 11);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 7))
{var state_24569__$1 = state_24569;var statearr_24578_24605 = state_24569__$1;(statearr_24578_24605[2] = null);
(statearr_24578_24605[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 8))
{var inst_24551 = (state_24569[2]);var state_24569__$1 = state_24569;var statearr_24579_24606 = state_24569__$1;(statearr_24579_24606[2] = inst_24551);
(statearr_24579_24606[1] = 5);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 9))
{var inst_24533 = (state_24569[7]);var inst_24546 = (state_24569[2]);var inst_24547 = (inst_24533 + 1);var inst_24533__$1 = inst_24547;var state_24569__$1 = (function (){var statearr_24580 = state_24569;(statearr_24580[7] = inst_24533__$1);
(statearr_24580[10] = inst_24546);
return statearr_24580;
})();var statearr_24581_24607 = state_24569__$1;(statearr_24581_24607[2] = null);
(statearr_24581_24607[1] = 4);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 10))
{var inst_24537 = (state_24569[2]);var inst_24538 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24569__$1 = (function (){var statearr_24582 = state_24569;(statearr_24582[11] = inst_24537);
return statearr_24582;
})();var statearr_24583_24608 = state_24569__$1;(statearr_24583_24608[2] = inst_24538);
cljs.core.async.impl.ioc_helpers.process_exception(state_24569__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 11))
{var inst_24533 = (state_24569[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24569,10,Object,null,9);var inst_24542 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24533) : chs__$1.call(null,inst_24533));var inst_24543 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24533) : done.call(null,inst_24533));var inst_24544 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24542,inst_24543);var state_24569__$1 = state_24569;var statearr_24584_24609 = state_24569__$1;(statearr_24584_24609[2] = inst_24544);
cljs.core.async.impl.ioc_helpers.process_exception(state_24569__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 12))
{var inst_24555 = (state_24569[12]);var inst_24555__$1 = (state_24569[2]);var inst_24556 = cljs.core.some(cljs.core.nil_QMARK_,inst_24555__$1);var state_24569__$1 = (function (){var statearr_24585 = state_24569;(statearr_24585[12] = inst_24555__$1);
return statearr_24585;
})();if(cljs.core.truth_(inst_24556))
{var statearr_24586_24610 = state_24569__$1;(statearr_24586_24610[1] = 13);
} else
{var statearr_24587_24611 = state_24569__$1;(statearr_24587_24611[1] = 14);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 13))
{var inst_24558 = cljs.core.async.close_BANG_(out);var state_24569__$1 = state_24569;var statearr_24588_24612 = state_24569__$1;(statearr_24588_24612[2] = inst_24558);
(statearr_24588_24612[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 14))
{var inst_24555 = (state_24569[12]);var inst_24560 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24555);var state_24569__$1 = state_24569;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24569__$1,16,out,inst_24560);
} else
{if((state_val_24570 === 15))
{var inst_24565 = (state_24569[2]);var state_24569__$1 = state_24569;var statearr_24589_24613 = state_24569__$1;(statearr_24589_24613[2] = inst_24565);
(statearr_24589_24613[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24570 === 16))
{var inst_24562 = (state_24569[2]);var state_24569__$1 = (function (){var statearr_24590 = state_24569;(statearr_24590[13] = inst_24562);
return statearr_24590;
})();var statearr_24591_24614 = state_24569__$1;(statearr_24591_24614[2] = null);
(statearr_24591_24614[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24595[0] = state_machine__5507__auto__);
(statearr_24595[1] = 1);
return statearr_24595;
});
var state_machine__5507__auto____1 = (function (state_24569){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24569);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24596){if((e24596 instanceof Object))
{var ex__5510__auto__ = e24596;var statearr_24597_24615 = state_24569;(statearr_24597_24615[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24569);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24616 = state_24569;
state_24569 = G__24616;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24569){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24598 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24599);
return statearr_24598;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24700){var state_val_24701 = (state_24700[1]);if((state_val_24701 === 1))
{var inst_24671 = cljs.core.vec(chs);var inst_24672 = inst_24671;var state_24700__$1 = (function (){var statearr_24702 = state_24700;(statearr_24702[7] = inst_24672);
return statearr_24702;
})();var statearr_24703_24725 = state_24700__$1;(statearr_24703_24725[2] = null);
(statearr_24703_24725[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24701 === 2))
{var inst_24672 = (state_24700[7]);var inst_24674 = cljs.core.count(inst_24672);var inst_24675 = (inst_24674 > 0);var state_24700__$1 = state_24700;if(cljs.core.truth_(inst_24675))
{var statearr_24704_24726 = state_24700__$1;(statearr_24704_24726[1] = 4);
} else
{var statearr_24705_24727 = state_24700__$1;(statearr_24705_24727[1] = 5);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24701 === 3))
{var inst_24698 = (state_24700[2]);var state_24700__$1 = state_24700;return cljs.core.async.impl.ioc_helpers.return_chan(state_24700__$1,inst_24698);
} else
{if((state_val_24701 === 4))
{var inst_24672 = (state_24700[7]);var state_24700__$1 = state_24700;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24700__$1,7,inst_24672);
} else
{if((state_val_24701 === 5))
{var inst_24694 = cljs.core.async.close_BANG_(out);var state_24700__$1 = state_24700;var statearr_24706_24728 = state_24700__$1;(statearr_24706_24728[2] = inst_24694);
(statearr_24706_24728[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24701 === 6))
{var inst_24696 = (state_24700[2]);var state_24700__$1 = state_24700;var statearr_24707_24729 = state_24700__$1;(statearr_24707_24729[2] = inst_24696);
(statearr_24707_24729[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24701 === 7))
{var inst_24680 = (state_24700[8]);var inst_24679 = (state_24700[9]);var inst_24679__$1 = (state_24700[2]);var inst_24680__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24679__$1,0,null);var inst_24681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24679__$1,1,null);var inst_24682 = (inst_24680__$1 == null);var state_24700__$1 = (function (){var statearr_24708 = state_24700;(statearr_24708[10] = inst_24681);
(statearr_24708[8] = inst_24680__$1);
(statearr_24708[9] = inst_24679__$1);
return statearr_24708;
})();if(cljs.core.truth_(inst_24682))
{var statearr_24709_24730 = state_24700__$1;(statearr_24709_24730[1] = 8);
} else
{var statearr_24710_24731 = state_24700__$1;(statearr_24710_24731[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24701 === 8))
{var inst_24681 = (state_24700[10]);var inst_24680 = (state_24700[8]);var inst_24679 = (state_24700[9]);var inst_24672 = (state_24700[7]);var inst_24684 = (function (){var c = inst_24681;var v = inst_24680;var vec__24677 = inst_24679;var cs = inst_24672;return ((function (c,v,vec__24677,cs,inst_24681,inst_24680,inst_24679,inst_24672,state_val_24701){
return (function (p1__24617_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24617_SHARP_);
});
;})(c,v,vec__24677,cs,inst_24681,inst_24680,inst_24679,inst_24672,state_val_24701))
})();var inst_24685 = cljs.core.filterv(inst_24684,inst_24672);var inst_24672__$1 = inst_24685;var state_24700__$1 = (function (){var statearr_24711 = state_24700;(statearr_24711[7] = inst_24672__$1);
return statearr_24711;
})();var statearr_24712_24732 = state_24700__$1;(statearr_24712_24732[2] = null);
(statearr_24712_24732[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24701 === 9))
{var inst_24680 = (state_24700[8]);var state_24700__$1 = state_24700;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24700__$1,11,out,inst_24680);
} else
{if((state_val_24701 === 10))
{var inst_24692 = (state_24700[2]);var state_24700__$1 = state_24700;var statearr_24714_24733 = state_24700__$1;(statearr_24714_24733[2] = inst_24692);
(statearr_24714_24733[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24701 === 11))
{var inst_24672 = (state_24700[7]);var inst_24689 = (state_24700[2]);var tmp24713 = inst_24672;var inst_24672__$1 = tmp24713;var state_24700__$1 = (function (){var statearr_24715 = state_24700;(statearr_24715[11] = inst_24689);
(statearr_24715[7] = inst_24672__$1);
return statearr_24715;
})();var statearr_24716_24734 = state_24700__$1;(statearr_24716_24734[2] = null);
(statearr_24716_24734[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24720 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24720[0] = state_machine__5507__auto__);
(statearr_24720[1] = 1);
return statearr_24720;
});
var state_machine__5507__auto____1 = (function (state_24700){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24700);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24721){if((e24721 instanceof Object))
{var ex__5510__auto__ = e24721;var statearr_24722_24735 = state_24700;(statearr_24722_24735[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24700);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24736 = state_24700;
state_24700 = G__24736;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24700){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24723 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24724);
return statearr_24723;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24806){var state_val_24807 = (state_24806[1]);if((state_val_24807 === 1))
{var inst_24783 = 0;var state_24806__$1 = (function (){var statearr_24808 = state_24806;(statearr_24808[7] = inst_24783);
return statearr_24808;
})();var statearr_24809_24830 = state_24806__$1;(statearr_24809_24830[2] = null);
(statearr_24809_24830[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24807 === 2))
{var inst_24783 = (state_24806[7]);var inst_24785 = (inst_24783 < n);var state_24806__$1 = state_24806;if(cljs.core.truth_(inst_24785))
{var statearr_24810_24831 = state_24806__$1;(statearr_24810_24831[1] = 4);
} else
{var statearr_24811_24832 = state_24806__$1;(statearr_24811_24832[1] = 5);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24807 === 3))
{var inst_24803 = (state_24806[2]);var inst_24804 = cljs.core.async.close_BANG_(out);var state_24806__$1 = (function (){var statearr_24812 = state_24806;(statearr_24812[8] = inst_24803);
return statearr_24812;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24806__$1,inst_24804);
} else
{if((state_val_24807 === 4))
{var state_24806__$1 = state_24806;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24806__$1,7,ch);
} else
{if((state_val_24807 === 5))
{var state_24806__$1 = state_24806;var statearr_24813_24833 = state_24806__$1;(statearr_24813_24833[2] = null);
(statearr_24813_24833[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24807 === 6))
{var inst_24801 = (state_24806[2]);var state_24806__$1 = state_24806;var statearr_24814_24834 = state_24806__$1;(statearr_24814_24834[2] = inst_24801);
(statearr_24814_24834[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24807 === 7))
{var inst_24788 = (state_24806[9]);var inst_24788__$1 = (state_24806[2]);var inst_24789 = (inst_24788__$1 == null);var inst_24790 = cljs.core.not(inst_24789);var state_24806__$1 = (function (){var statearr_24815 = state_24806;(statearr_24815[9] = inst_24788__$1);
return statearr_24815;
})();if(inst_24790)
{var statearr_24816_24835 = state_24806__$1;(statearr_24816_24835[1] = 8);
} else
{var statearr_24817_24836 = state_24806__$1;(statearr_24817_24836[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24807 === 8))
{var inst_24788 = (state_24806[9]);var state_24806__$1 = state_24806;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24806__$1,11,out,inst_24788);
} else
{if((state_val_24807 === 9))
{var state_24806__$1 = state_24806;var statearr_24818_24837 = state_24806__$1;(statearr_24818_24837[2] = null);
(statearr_24818_24837[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24807 === 10))
{var inst_24798 = (state_24806[2]);var state_24806__$1 = state_24806;var statearr_24819_24838 = state_24806__$1;(statearr_24819_24838[2] = inst_24798);
(statearr_24819_24838[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24807 === 11))
{var inst_24783 = (state_24806[7]);var inst_24793 = (state_24806[2]);var inst_24794 = (inst_24783 + 1);var inst_24783__$1 = inst_24794;var state_24806__$1 = (function (){var statearr_24820 = state_24806;(statearr_24820[7] = inst_24783__$1);
(statearr_24820[10] = inst_24793);
return statearr_24820;
})();var statearr_24821_24839 = state_24806__$1;(statearr_24821_24839[2] = null);
(statearr_24821_24839[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24825 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24825[0] = state_machine__5507__auto__);
(statearr_24825[1] = 1);
return statearr_24825;
});
var state_machine__5507__auto____1 = (function (state_24806){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24806);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24826){if((e24826 instanceof Object))
{var ex__5510__auto__ = e24826;var statearr_24827_24840 = state_24806;(statearr_24827_24840[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24806);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24841 = state_24806;
state_24806 = G__24841;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24806){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24828 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24829);
return statearr_24828;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24913){var state_val_24914 = (state_24913[1]);if((state_val_24914 === 1))
{var inst_24890 = null;var state_24913__$1 = (function (){var statearr_24915 = state_24913;(statearr_24915[7] = inst_24890);
return statearr_24915;
})();var statearr_24916_24939 = state_24913__$1;(statearr_24916_24939[2] = null);
(statearr_24916_24939[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24914 === 2))
{var state_24913__$1 = state_24913;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24913__$1,4,ch);
} else
{if((state_val_24914 === 3))
{var inst_24910 = (state_24913[2]);var inst_24911 = cljs.core.async.close_BANG_(out);var state_24913__$1 = (function (){var statearr_24917 = state_24913;(statearr_24917[8] = inst_24910);
return statearr_24917;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24913__$1,inst_24911);
} else
{if((state_val_24914 === 4))
{var inst_24893 = (state_24913[9]);var inst_24893__$1 = (state_24913[2]);var inst_24894 = (inst_24893__$1 == null);var inst_24895 = cljs.core.not(inst_24894);var state_24913__$1 = (function (){var statearr_24918 = state_24913;(statearr_24918[9] = inst_24893__$1);
return statearr_24918;
})();if(inst_24895)
{var statearr_24919_24940 = state_24913__$1;(statearr_24919_24940[1] = 5);
} else
{var statearr_24920_24941 = state_24913__$1;(statearr_24920_24941[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24914 === 5))
{var inst_24893 = (state_24913[9]);var inst_24890 = (state_24913[7]);var inst_24897 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24893,inst_24890);var state_24913__$1 = state_24913;if(inst_24897)
{var statearr_24921_24942 = state_24913__$1;(statearr_24921_24942[1] = 8);
} else
{var statearr_24922_24943 = state_24913__$1;(statearr_24922_24943[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24914 === 6))
{var state_24913__$1 = state_24913;var statearr_24924_24944 = state_24913__$1;(statearr_24924_24944[2] = null);
(statearr_24924_24944[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24914 === 7))
{var inst_24908 = (state_24913[2]);var state_24913__$1 = state_24913;var statearr_24925_24945 = state_24913__$1;(statearr_24925_24945[2] = inst_24908);
(statearr_24925_24945[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24914 === 8))
{var inst_24890 = (state_24913[7]);var tmp24923 = inst_24890;var inst_24890__$1 = tmp24923;var state_24913__$1 = (function (){var statearr_24926 = state_24913;(statearr_24926[7] = inst_24890__$1);
return statearr_24926;
})();var statearr_24927_24946 = state_24913__$1;(statearr_24927_24946[2] = null);
(statearr_24927_24946[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24914 === 9))
{var inst_24893 = (state_24913[9]);var state_24913__$1 = state_24913;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24913__$1,11,out,inst_24893);
} else
{if((state_val_24914 === 10))
{var inst_24905 = (state_24913[2]);var state_24913__$1 = state_24913;var statearr_24928_24947 = state_24913__$1;(statearr_24928_24947[2] = inst_24905);
(statearr_24928_24947[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24914 === 11))
{var inst_24893 = (state_24913[9]);var inst_24902 = (state_24913[2]);var inst_24890 = inst_24893;var state_24913__$1 = (function (){var statearr_24929 = state_24913;(statearr_24929[10] = inst_24902);
(statearr_24929[7] = inst_24890);
return statearr_24929;
})();var statearr_24930_24948 = state_24913__$1;(statearr_24930_24948[2] = null);
(statearr_24930_24948[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24934 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24934[0] = state_machine__5507__auto__);
(statearr_24934[1] = 1);
return statearr_24934;
});
var state_machine__5507__auto____1 = (function (state_24913){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24913);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24935){if((e24935 instanceof Object))
{var ex__5510__auto__ = e24935;var statearr_24936_24949 = state_24913;(statearr_24936_24949[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24913);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24950 = state_24913;
state_24913 = G__24950;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24913){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24937 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24938);
return statearr_24937;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25055){var state_val_25056 = (state_25055[1]);if((state_val_25056 === 1))
{var inst_25018 = (new Array(n));var inst_25019 = inst_25018;var inst_25020 = 0;var state_25055__$1 = (function (){var statearr_25057 = state_25055;(statearr_25057[7] = inst_25019);
(statearr_25057[8] = inst_25020);
return statearr_25057;
})();var statearr_25058_25086 = state_25055__$1;(statearr_25058_25086[2] = null);
(statearr_25058_25086[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25056 === 2))
{var state_25055__$1 = state_25055;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25055__$1,4,ch);
} else
{if((state_val_25056 === 3))
{var inst_25053 = (state_25055[2]);var state_25055__$1 = state_25055;return cljs.core.async.impl.ioc_helpers.return_chan(state_25055__$1,inst_25053);
} else
{if((state_val_25056 === 4))
{var inst_25023 = (state_25055[9]);var inst_25023__$1 = (state_25055[2]);var inst_25024 = (inst_25023__$1 == null);var inst_25025 = cljs.core.not(inst_25024);var state_25055__$1 = (function (){var statearr_25059 = state_25055;(statearr_25059[9] = inst_25023__$1);
return statearr_25059;
})();if(inst_25025)
{var statearr_25060_25087 = state_25055__$1;(statearr_25060_25087[1] = 5);
} else
{var statearr_25061_25088 = state_25055__$1;(statearr_25061_25088[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25056 === 5))
{var inst_25019 = (state_25055[7]);var inst_25028 = (state_25055[10]);var inst_25023 = (state_25055[9]);var inst_25020 = (state_25055[8]);var inst_25027 = (inst_25019[inst_25020] = inst_25023);var inst_25028__$1 = (inst_25020 + 1);var inst_25029 = (inst_25028__$1 < n);var state_25055__$1 = (function (){var statearr_25062 = state_25055;(statearr_25062[10] = inst_25028__$1);
(statearr_25062[11] = inst_25027);
return statearr_25062;
})();if(cljs.core.truth_(inst_25029))
{var statearr_25063_25089 = state_25055__$1;(statearr_25063_25089[1] = 8);
} else
{var statearr_25064_25090 = state_25055__$1;(statearr_25064_25090[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25056 === 6))
{var inst_25020 = (state_25055[8]);var inst_25041 = (inst_25020 > 0);var state_25055__$1 = state_25055;if(cljs.core.truth_(inst_25041))
{var statearr_25066_25091 = state_25055__$1;(statearr_25066_25091[1] = 12);
} else
{var statearr_25067_25092 = state_25055__$1;(statearr_25067_25092[1] = 13);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25056 === 7))
{var inst_25051 = (state_25055[2]);var state_25055__$1 = state_25055;var statearr_25068_25093 = state_25055__$1;(statearr_25068_25093[2] = inst_25051);
(statearr_25068_25093[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25056 === 8))
{var inst_25019 = (state_25055[7]);var inst_25028 = (state_25055[10]);var tmp25065 = inst_25019;var inst_25019__$1 = tmp25065;var inst_25020 = inst_25028;var state_25055__$1 = (function (){var statearr_25069 = state_25055;(statearr_25069[7] = inst_25019__$1);
(statearr_25069[8] = inst_25020);
return statearr_25069;
})();var statearr_25070_25094 = state_25055__$1;(statearr_25070_25094[2] = null);
(statearr_25070_25094[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25056 === 9))
{var inst_25019 = (state_25055[7]);var inst_25033 = cljs.core.vec(inst_25019);var state_25055__$1 = state_25055;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25055__$1,11,out,inst_25033);
} else
{if((state_val_25056 === 10))
{var inst_25039 = (state_25055[2]);var state_25055__$1 = state_25055;var statearr_25071_25095 = state_25055__$1;(statearr_25071_25095[2] = inst_25039);
(statearr_25071_25095[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25056 === 11))
{var inst_25035 = (state_25055[2]);var inst_25036 = (new Array(n));var inst_25019 = inst_25036;var inst_25020 = 0;var state_25055__$1 = (function (){var statearr_25072 = state_25055;(statearr_25072[7] = inst_25019);
(statearr_25072[8] = inst_25020);
(statearr_25072[12] = inst_25035);
return statearr_25072;
})();var statearr_25073_25096 = state_25055__$1;(statearr_25073_25096[2] = null);
(statearr_25073_25096[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25056 === 12))
{var inst_25019 = (state_25055[7]);var inst_25043 = cljs.core.vec(inst_25019);var state_25055__$1 = state_25055;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25055__$1,15,out,inst_25043);
} else
{if((state_val_25056 === 13))
{var state_25055__$1 = state_25055;var statearr_25074_25097 = state_25055__$1;(statearr_25074_25097[2] = null);
(statearr_25074_25097[1] = 14);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25056 === 14))
{var inst_25048 = (state_25055[2]);var inst_25049 = cljs.core.async.close_BANG_(out);var state_25055__$1 = (function (){var statearr_25075 = state_25055;(statearr_25075[13] = inst_25048);
return statearr_25075;
})();var statearr_25076_25098 = state_25055__$1;(statearr_25076_25098[2] = inst_25049);
(statearr_25076_25098[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25056 === 15))
{var inst_25045 = (state_25055[2]);var state_25055__$1 = state_25055;var statearr_25077_25099 = state_25055__$1;(statearr_25077_25099[2] = inst_25045);
(statearr_25077_25099[1] = 14);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_25081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25081[0] = state_machine__5507__auto__);
(statearr_25081[1] = 1);
return statearr_25081;
});
var state_machine__5507__auto____1 = (function (state_25055){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25055);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25082){if((e25082 instanceof Object))
{var ex__5510__auto__ = e25082;var statearr_25083_25100 = state_25055;(statearr_25083_25100[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25055);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e25082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__25101 = state_25055;
state_25055 = G__25101;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25055){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25084 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25085);
return statearr_25084;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25214){var state_val_25215 = (state_25214[1]);if((state_val_25215 === 1))
{var inst_25173 = [];var inst_25174 = inst_25173;var inst_25175 = cljs.core.constant$keyword$183;var state_25214__$1 = (function (){var statearr_25216 = state_25214;(statearr_25216[7] = inst_25175);
(statearr_25216[8] = inst_25174);
return statearr_25216;
})();var statearr_25217_25245 = state_25214__$1;(statearr_25217_25245[2] = null);
(statearr_25217_25245[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25215 === 2))
{var state_25214__$1 = state_25214;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25214__$1,4,ch);
} else
{if((state_val_25215 === 3))
{var inst_25212 = (state_25214[2]);var state_25214__$1 = state_25214;return cljs.core.async.impl.ioc_helpers.return_chan(state_25214__$1,inst_25212);
} else
{if((state_val_25215 === 4))
{var inst_25178 = (state_25214[9]);var inst_25178__$1 = (state_25214[2]);var inst_25179 = (inst_25178__$1 == null);var inst_25180 = cljs.core.not(inst_25179);var state_25214__$1 = (function (){var statearr_25218 = state_25214;(statearr_25218[9] = inst_25178__$1);
return statearr_25218;
})();if(inst_25180)
{var statearr_25219_25246 = state_25214__$1;(statearr_25219_25246[1] = 5);
} else
{var statearr_25220_25247 = state_25214__$1;(statearr_25220_25247[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25215 === 5))
{var inst_25178 = (state_25214[9]);var inst_25175 = (state_25214[7]);var inst_25182 = (state_25214[10]);var inst_25182__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25178) : f.call(null,inst_25178));var inst_25183 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25182__$1,inst_25175);var inst_25184 = cljs.core.keyword_identical_QMARK_(inst_25175,cljs.core.constant$keyword$183);var inst_25185 = (inst_25183) || (inst_25184);var state_25214__$1 = (function (){var statearr_25221 = state_25214;(statearr_25221[10] = inst_25182__$1);
return statearr_25221;
})();if(cljs.core.truth_(inst_25185))
{var statearr_25222_25248 = state_25214__$1;(statearr_25222_25248[1] = 8);
} else
{var statearr_25223_25249 = state_25214__$1;(statearr_25223_25249[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25215 === 6))
{var inst_25174 = (state_25214[8]);var inst_25199 = inst_25174.length;var inst_25200 = (inst_25199 > 0);var state_25214__$1 = state_25214;if(cljs.core.truth_(inst_25200))
{var statearr_25225_25250 = state_25214__$1;(statearr_25225_25250[1] = 12);
} else
{var statearr_25226_25251 = state_25214__$1;(statearr_25226_25251[1] = 13);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25215 === 7))
{var inst_25210 = (state_25214[2]);var state_25214__$1 = state_25214;var statearr_25227_25252 = state_25214__$1;(statearr_25227_25252[2] = inst_25210);
(statearr_25227_25252[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25215 === 8))
{var inst_25178 = (state_25214[9]);var inst_25174 = (state_25214[8]);var inst_25182 = (state_25214[10]);var inst_25187 = inst_25174.push(inst_25178);var tmp25224 = inst_25174;var inst_25174__$1 = tmp25224;var inst_25175 = inst_25182;var state_25214__$1 = (function (){var statearr_25228 = state_25214;(statearr_25228[7] = inst_25175);
(statearr_25228[8] = inst_25174__$1);
(statearr_25228[11] = inst_25187);
return statearr_25228;
})();var statearr_25229_25253 = state_25214__$1;(statearr_25229_25253[2] = null);
(statearr_25229_25253[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25215 === 9))
{var inst_25174 = (state_25214[8]);var inst_25190 = cljs.core.vec(inst_25174);var state_25214__$1 = state_25214;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25214__$1,11,out,inst_25190);
} else
{if((state_val_25215 === 10))
{var inst_25197 = (state_25214[2]);var state_25214__$1 = state_25214;var statearr_25230_25254 = state_25214__$1;(statearr_25230_25254[2] = inst_25197);
(statearr_25230_25254[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25215 === 11))
{var inst_25178 = (state_25214[9]);var inst_25182 = (state_25214[10]);var inst_25192 = (state_25214[2]);var inst_25193 = [];var inst_25194 = inst_25193.push(inst_25178);var inst_25174 = inst_25193;var inst_25175 = inst_25182;var state_25214__$1 = (function (){var statearr_25231 = state_25214;(statearr_25231[7] = inst_25175);
(statearr_25231[8] = inst_25174);
(statearr_25231[12] = inst_25192);
(statearr_25231[13] = inst_25194);
return statearr_25231;
})();var statearr_25232_25255 = state_25214__$1;(statearr_25232_25255[2] = null);
(statearr_25232_25255[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25215 === 12))
{var inst_25174 = (state_25214[8]);var inst_25202 = cljs.core.vec(inst_25174);var state_25214__$1 = state_25214;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25214__$1,15,out,inst_25202);
} else
{if((state_val_25215 === 13))
{var state_25214__$1 = state_25214;var statearr_25233_25256 = state_25214__$1;(statearr_25233_25256[2] = null);
(statearr_25233_25256[1] = 14);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25215 === 14))
{var inst_25207 = (state_25214[2]);var inst_25208 = cljs.core.async.close_BANG_(out);var state_25214__$1 = (function (){var statearr_25234 = state_25214;(statearr_25234[14] = inst_25207);
return statearr_25234;
})();var statearr_25235_25257 = state_25214__$1;(statearr_25235_25257[2] = inst_25208);
(statearr_25235_25257[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25215 === 15))
{var inst_25204 = (state_25214[2]);var state_25214__$1 = state_25214;var statearr_25236_25258 = state_25214__$1;(statearr_25236_25258[2] = inst_25204);
(statearr_25236_25258[1] = 14);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_25240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25240[0] = state_machine__5507__auto__);
(statearr_25240[1] = 1);
return statearr_25240;
});
var state_machine__5507__auto____1 = (function (state_25214){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25214);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25241){if((e25241 instanceof Object))
{var ex__5510__auto__ = e25241;var statearr_25242_25259 = state_25214;(statearr_25242_25259[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25214);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e25241;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__25260 = state_25214;
state_25214 = G__25260;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25214){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25243 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25244);
return statearr_25243;
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
