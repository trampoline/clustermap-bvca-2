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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20857 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20857 = (function (f,fn_handler,meta20858){
this.f = f;
this.fn_handler = fn_handler;
this.meta20858 = meta20858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20857.cljs$lang$type = true;
cljs.core.async.t20857.cljs$lang$ctorStr = "cljs.core.async/t20857";
cljs.core.async.t20857.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20857");
});
cljs.core.async.t20857.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20859){var self__ = this;
var _20859__$1 = this;return self__.meta20858;
});
cljs.core.async.t20857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20859,meta20858__$1){var self__ = this;
var _20859__$1 = this;return (new cljs.core.async.t20857(self__.f,self__.fn_handler,meta20858__$1));
});
cljs.core.async.__GT_t20857 = (function __GT_t20857(f__$1,fn_handler__$1,meta20858){return (new cljs.core.async.t20857(f__$1,fn_handler__$1,meta20858));
});
}
return (new cljs.core.async.t20857(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20861 = buff;if(G__20861)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__20861.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20861.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20861);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20861);
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
{var val_20862 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20862) : fn1.call(null,val_20862));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20862) : fn1.call(null,val_20862));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___20863 = n;var x_20864 = 0;while(true){
if((x_20864 < n__4248__auto___20863))
{(a[x_20864] = 0);
{
var G__20865 = (x_20864 + 1);
x_20864 = G__20865;
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
var G__20866 = (i + 1);
i = G__20866;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t20870 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20870 = (function (flag,alt_flag,meta20871){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20871 = meta20871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20870.cljs$lang$type = true;
cljs.core.async.t20870.cljs$lang$ctorStr = "cljs.core.async/t20870";
cljs.core.async.t20870.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20870");
});
cljs.core.async.t20870.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t20870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t20870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20872){var self__ = this;
var _20872__$1 = this;return self__.meta20871;
});
cljs.core.async.t20870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20872,meta20871__$1){var self__ = this;
var _20872__$1 = this;return (new cljs.core.async.t20870(self__.flag,self__.alt_flag,meta20871__$1));
});
cljs.core.async.__GT_t20870 = (function __GT_t20870(flag__$1,alt_flag__$1,meta20871){return (new cljs.core.async.t20870(flag__$1,alt_flag__$1,meta20871));
});
}
return (new cljs.core.async.t20870(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20876 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20876 = (function (cb,flag,alt_handler,meta20877){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20877 = meta20877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20876.cljs$lang$type = true;
cljs.core.async.t20876.cljs$lang$ctorStr = "cljs.core.async/t20876";
cljs.core.async.t20876.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20876");
});
cljs.core.async.t20876.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t20876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t20876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20878){var self__ = this;
var _20878__$1 = this;return self__.meta20877;
});
cljs.core.async.t20876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20878,meta20877__$1){var self__ = this;
var _20878__$1 = this;return (new cljs.core.async.t20876(self__.cb,self__.flag,self__.alt_handler,meta20877__$1));
});
cljs.core.async.__GT_t20876 = (function __GT_t20876(cb__$1,flag__$1,alt_handler__$1,meta20877){return (new cljs.core.async.t20876(cb__$1,flag__$1,alt_handler__$1,meta20877));
});
}
return (new cljs.core.async.t20876(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20879_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20879_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20879_SHARP_,port], null)));
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
var G__20880 = (i + 1);
i = G__20880;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$113))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$113], null));
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
var alts_BANG___delegate = function (ports,p__20881){var map__20883 = p__20881;var map__20883__$1 = ((cljs.core.seq_QMARK_(map__20883))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20883):map__20883);var opts = map__20883__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__20881 = null;if (arguments.length > 1) {
  p__20881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20881);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20884){
var ports = cljs.core.first(arglist__20884);
var p__20881 = cljs.core.rest(arglist__20884);
return alts_BANG___delegate(ports,p__20881);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20892 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20892 = (function (ch,f,map_LT_,meta20893){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20893 = meta20893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20892.cljs$lang$type = true;
cljs.core.async.t20892.cljs$lang$ctorStr = "cljs.core.async/t20892";
cljs.core.async.t20892.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20892");
});
cljs.core.async.t20892.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20892.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t20892.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20892.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t20895 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20895 = (function (fn1,_,meta20893,ch,f,map_LT_,meta20896){
this.fn1 = fn1;
this._ = _;
this.meta20893 = meta20893;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20896 = meta20896;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20895.cljs$lang$type = true;
cljs.core.async.t20895.cljs$lang$ctorStr = "cljs.core.async/t20895";
cljs.core.async.t20895.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20895");
});
cljs.core.async.t20895.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t20895.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t20895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__20885_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__20885_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20885_SHARP_) : self__.f.call(null,p1__20885_SHARP_)))) : f1.call(null,(((p1__20885_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20885_SHARP_) : self__.f.call(null,p1__20885_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t20895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20897){var self__ = this;
var _20897__$1 = this;return self__.meta20896;
});
cljs.core.async.t20895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20897,meta20896__$1){var self__ = this;
var _20897__$1 = this;return (new cljs.core.async.t20895(self__.fn1,self__._,self__.meta20893,self__.ch,self__.f,self__.map_LT_,meta20896__$1));
});
cljs.core.async.__GT_t20895 = (function __GT_t20895(fn1__$1,___$2,meta20893__$1,ch__$2,f__$2,map_LT___$2,meta20896){return (new cljs.core.async.t20895(fn1__$1,___$2,meta20893__$1,ch__$2,f__$2,map_LT___$2,meta20896));
});
}
return (new cljs.core.async.t20895(fn1,___$1,self__.meta20893,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t20892.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20892.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20894){var self__ = this;
var _20894__$1 = this;return self__.meta20893;
});
cljs.core.async.t20892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20894,meta20893__$1){var self__ = this;
var _20894__$1 = this;return (new cljs.core.async.t20892(self__.ch,self__.f,self__.map_LT_,meta20893__$1));
});
cljs.core.async.__GT_t20892 = (function __GT_t20892(ch__$1,f__$1,map_LT___$1,meta20893){return (new cljs.core.async.t20892(ch__$1,f__$1,map_LT___$1,meta20893));
});
}
return (new cljs.core.async.t20892(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20901 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20901 = (function (ch,f,map_GT_,meta20902){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20902 = meta20902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20901.cljs$lang$type = true;
cljs.core.async.t20901.cljs$lang$ctorStr = "cljs.core.async/t20901";
cljs.core.async.t20901.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20901");
});
cljs.core.async.t20901.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t20901.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20901.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20903){var self__ = this;
var _20903__$1 = this;return self__.meta20902;
});
cljs.core.async.t20901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20903,meta20902__$1){var self__ = this;
var _20903__$1 = this;return (new cljs.core.async.t20901(self__.ch,self__.f,self__.map_GT_,meta20902__$1));
});
cljs.core.async.__GT_t20901 = (function __GT_t20901(ch__$1,f__$1,map_GT___$1,meta20902){return (new cljs.core.async.t20901(ch__$1,f__$1,map_GT___$1,meta20902));
});
}
return (new cljs.core.async.t20901(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20907 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20907 = (function (ch,p,filter_GT_,meta20908){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20908 = meta20908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20907.cljs$lang$type = true;
cljs.core.async.t20907.cljs$lang$ctorStr = "cljs.core.async/t20907";
cljs.core.async.t20907.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20907");
});
cljs.core.async.t20907.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t20907.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20907.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20909){var self__ = this;
var _20909__$1 = this;return self__.meta20908;
});
cljs.core.async.t20907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20909,meta20908__$1){var self__ = this;
var _20909__$1 = this;return (new cljs.core.async.t20907(self__.ch,self__.p,self__.filter_GT_,meta20908__$1));
});
cljs.core.async.__GT_t20907 = (function __GT_t20907(ch__$1,p__$1,filter_GT___$1,meta20908){return (new cljs.core.async.t20907(ch__$1,p__$1,filter_GT___$1,meta20908));
});
}
return (new cljs.core.async.t20907(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___20992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20971){var state_val_20972 = (state_20971[1]);if((state_val_20972 === 1))
{var state_20971__$1 = state_20971;var statearr_20973_20993 = state_20971__$1;(statearr_20973_20993[2] = null);
(statearr_20973_20993[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_20972 === 2))
{var state_20971__$1 = state_20971;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20971__$1,4,ch);
} else
{if((state_val_20972 === 3))
{var inst_20969 = (state_20971[2]);var state_20971__$1 = state_20971;return cljs.core.async.impl.ioc_helpers.return_chan(state_20971__$1,inst_20969);
} else
{if((state_val_20972 === 4))
{var inst_20953 = (state_20971[7]);var inst_20953__$1 = (state_20971[2]);var inst_20954 = (inst_20953__$1 == null);var state_20971__$1 = (function (){var statearr_20974 = state_20971;(statearr_20974[7] = inst_20953__$1);
return statearr_20974;
})();if(cljs.core.truth_(inst_20954))
{var statearr_20975_20994 = state_20971__$1;(statearr_20975_20994[1] = 5);
} else
{var statearr_20976_20995 = state_20971__$1;(statearr_20976_20995[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_20972 === 5))
{var inst_20956 = cljs.core.async.close_BANG_(out);var state_20971__$1 = state_20971;var statearr_20977_20996 = state_20971__$1;(statearr_20977_20996[2] = inst_20956);
(statearr_20977_20996[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_20972 === 6))
{var inst_20953 = (state_20971[7]);var inst_20958 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20953) : p.call(null,inst_20953));var state_20971__$1 = state_20971;if(cljs.core.truth_(inst_20958))
{var statearr_20978_20997 = state_20971__$1;(statearr_20978_20997[1] = 8);
} else
{var statearr_20979_20998 = state_20971__$1;(statearr_20979_20998[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_20972 === 7))
{var inst_20967 = (state_20971[2]);var state_20971__$1 = state_20971;var statearr_20980_20999 = state_20971__$1;(statearr_20980_20999[2] = inst_20967);
(statearr_20980_20999[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_20972 === 8))
{var inst_20953 = (state_20971[7]);var state_20971__$1 = state_20971;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20971__$1,11,out,inst_20953);
} else
{if((state_val_20972 === 9))
{var state_20971__$1 = state_20971;var statearr_20981_21000 = state_20971__$1;(statearr_20981_21000[2] = null);
(statearr_20981_21000[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_20972 === 10))
{var inst_20964 = (state_20971[2]);var state_20971__$1 = (function (){var statearr_20982 = state_20971;(statearr_20982[8] = inst_20964);
return statearr_20982;
})();var statearr_20983_21001 = state_20971__$1;(statearr_20983_21001[2] = null);
(statearr_20983_21001[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_20972 === 11))
{var inst_20961 = (state_20971[2]);var state_20971__$1 = state_20971;var statearr_20984_21002 = state_20971__$1;(statearr_20984_21002[2] = inst_20961);
(statearr_20984_21002[1] = 10);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_20988 = [null,null,null,null,null,null,null,null,null];(statearr_20988[0] = state_machine__5507__auto__);
(statearr_20988[1] = 1);
return statearr_20988;
});
var state_machine__5507__auto____1 = (function (state_20971){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20971);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20989){if((e20989 instanceof Object))
{var ex__5510__auto__ = e20989;var statearr_20990_21003 = state_20971;(statearr_20990_21003[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20971);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e20989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21004 = state_20971;
state_20971 = G__21004;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20971){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20991 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20992);
return statearr_20991;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21156){var state_val_21157 = (state_21156[1]);if((state_val_21157 === 1))
{var state_21156__$1 = state_21156;var statearr_21158_21195 = state_21156__$1;(statearr_21158_21195[2] = null);
(statearr_21158_21195[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 2))
{var state_21156__$1 = state_21156;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21156__$1,4,in$);
} else
{if((state_val_21157 === 3))
{var inst_21154 = (state_21156[2]);var state_21156__$1 = state_21156;return cljs.core.async.impl.ioc_helpers.return_chan(state_21156__$1,inst_21154);
} else
{if((state_val_21157 === 4))
{var inst_21102 = (state_21156[7]);var inst_21102__$1 = (state_21156[2]);var inst_21103 = (inst_21102__$1 == null);var state_21156__$1 = (function (){var statearr_21159 = state_21156;(statearr_21159[7] = inst_21102__$1);
return statearr_21159;
})();if(cljs.core.truth_(inst_21103))
{var statearr_21160_21196 = state_21156__$1;(statearr_21160_21196[1] = 5);
} else
{var statearr_21161_21197 = state_21156__$1;(statearr_21161_21197[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 5))
{var inst_21105 = cljs.core.async.close_BANG_(out);var state_21156__$1 = state_21156;var statearr_21162_21198 = state_21156__$1;(statearr_21162_21198[2] = inst_21105);
(statearr_21162_21198[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 6))
{var inst_21102 = (state_21156[7]);var inst_21107 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21102) : f.call(null,inst_21102));var inst_21112 = cljs.core.seq(inst_21107);var inst_21113 = inst_21112;var inst_21114 = null;var inst_21115 = 0;var inst_21116 = 0;var state_21156__$1 = (function (){var statearr_21163 = state_21156;(statearr_21163[8] = inst_21114);
(statearr_21163[9] = inst_21115);
(statearr_21163[10] = inst_21116);
(statearr_21163[11] = inst_21113);
return statearr_21163;
})();var statearr_21164_21199 = state_21156__$1;(statearr_21164_21199[2] = null);
(statearr_21164_21199[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 7))
{var inst_21152 = (state_21156[2]);var state_21156__$1 = state_21156;var statearr_21165_21200 = state_21156__$1;(statearr_21165_21200[2] = inst_21152);
(statearr_21165_21200[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 8))
{var inst_21115 = (state_21156[9]);var inst_21116 = (state_21156[10]);var inst_21118 = (inst_21116 < inst_21115);var inst_21119 = inst_21118;var state_21156__$1 = state_21156;if(cljs.core.truth_(inst_21119))
{var statearr_21166_21201 = state_21156__$1;(statearr_21166_21201[1] = 10);
} else
{var statearr_21167_21202 = state_21156__$1;(statearr_21167_21202[1] = 11);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 9))
{var inst_21149 = (state_21156[2]);var state_21156__$1 = (function (){var statearr_21168 = state_21156;(statearr_21168[12] = inst_21149);
return statearr_21168;
})();var statearr_21169_21203 = state_21156__$1;(statearr_21169_21203[2] = null);
(statearr_21169_21203[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 10))
{var inst_21114 = (state_21156[8]);var inst_21116 = (state_21156[10]);var inst_21121 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21114,inst_21116);var state_21156__$1 = state_21156;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21156__$1,13,out,inst_21121);
} else
{if((state_val_21157 === 11))
{var inst_21127 = (state_21156[13]);var inst_21113 = (state_21156[11]);var inst_21127__$1 = cljs.core.seq(inst_21113);var state_21156__$1 = (function (){var statearr_21173 = state_21156;(statearr_21173[13] = inst_21127__$1);
return statearr_21173;
})();if(inst_21127__$1)
{var statearr_21174_21204 = state_21156__$1;(statearr_21174_21204[1] = 14);
} else
{var statearr_21175_21205 = state_21156__$1;(statearr_21175_21205[1] = 15);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 12))
{var inst_21147 = (state_21156[2]);var state_21156__$1 = state_21156;var statearr_21176_21206 = state_21156__$1;(statearr_21176_21206[2] = inst_21147);
(statearr_21176_21206[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 13))
{var inst_21114 = (state_21156[8]);var inst_21115 = (state_21156[9]);var inst_21116 = (state_21156[10]);var inst_21113 = (state_21156[11]);var inst_21123 = (state_21156[2]);var inst_21124 = (inst_21116 + 1);var tmp21170 = inst_21114;var tmp21171 = inst_21115;var tmp21172 = inst_21113;var inst_21113__$1 = tmp21172;var inst_21114__$1 = tmp21170;var inst_21115__$1 = tmp21171;var inst_21116__$1 = inst_21124;var state_21156__$1 = (function (){var statearr_21177 = state_21156;(statearr_21177[8] = inst_21114__$1);
(statearr_21177[14] = inst_21123);
(statearr_21177[9] = inst_21115__$1);
(statearr_21177[10] = inst_21116__$1);
(statearr_21177[11] = inst_21113__$1);
return statearr_21177;
})();var statearr_21178_21207 = state_21156__$1;(statearr_21178_21207[2] = null);
(statearr_21178_21207[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 14))
{var inst_21127 = (state_21156[13]);var inst_21129 = cljs.core.chunked_seq_QMARK_(inst_21127);var state_21156__$1 = state_21156;if(inst_21129)
{var statearr_21179_21208 = state_21156__$1;(statearr_21179_21208[1] = 17);
} else
{var statearr_21180_21209 = state_21156__$1;(statearr_21180_21209[1] = 18);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 15))
{var state_21156__$1 = state_21156;var statearr_21181_21210 = state_21156__$1;(statearr_21181_21210[2] = null);
(statearr_21181_21210[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 16))
{var inst_21145 = (state_21156[2]);var state_21156__$1 = state_21156;var statearr_21182_21211 = state_21156__$1;(statearr_21182_21211[2] = inst_21145);
(statearr_21182_21211[1] = 12);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 17))
{var inst_21127 = (state_21156[13]);var inst_21131 = cljs.core.chunk_first(inst_21127);var inst_21132 = cljs.core.chunk_rest(inst_21127);var inst_21133 = cljs.core.count(inst_21131);var inst_21113 = inst_21132;var inst_21114 = inst_21131;var inst_21115 = inst_21133;var inst_21116 = 0;var state_21156__$1 = (function (){var statearr_21183 = state_21156;(statearr_21183[8] = inst_21114);
(statearr_21183[9] = inst_21115);
(statearr_21183[10] = inst_21116);
(statearr_21183[11] = inst_21113);
return statearr_21183;
})();var statearr_21184_21212 = state_21156__$1;(statearr_21184_21212[2] = null);
(statearr_21184_21212[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 18))
{var inst_21127 = (state_21156[13]);var inst_21136 = cljs.core.first(inst_21127);var state_21156__$1 = state_21156;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21156__$1,20,out,inst_21136);
} else
{if((state_val_21157 === 19))
{var inst_21142 = (state_21156[2]);var state_21156__$1 = state_21156;var statearr_21185_21213 = state_21156__$1;(statearr_21185_21213[2] = inst_21142);
(statearr_21185_21213[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21157 === 20))
{var inst_21127 = (state_21156[13]);var inst_21138 = (state_21156[2]);var inst_21139 = cljs.core.next(inst_21127);var inst_21113 = inst_21139;var inst_21114 = null;var inst_21115 = 0;var inst_21116 = 0;var state_21156__$1 = (function (){var statearr_21186 = state_21156;(statearr_21186[15] = inst_21138);
(statearr_21186[8] = inst_21114);
(statearr_21186[9] = inst_21115);
(statearr_21186[10] = inst_21116);
(statearr_21186[11] = inst_21113);
return statearr_21186;
})();var statearr_21187_21214 = state_21156__$1;(statearr_21187_21214[2] = null);
(statearr_21187_21214[1] = 8);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21191[0] = state_machine__5507__auto__);
(statearr_21191[1] = 1);
return statearr_21191;
});
var state_machine__5507__auto____1 = (function (state_21156){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21156);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21192){if((e21192 instanceof Object))
{var ex__5510__auto__ = e21192;var statearr_21193_21215 = state_21156;(statearr_21193_21215[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21156);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21216 = state_21156;
state_21156 = G__21216;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21156){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21194 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21194;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___21297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21276){var state_val_21277 = (state_21276[1]);if((state_val_21277 === 1))
{var state_21276__$1 = state_21276;var statearr_21278_21298 = state_21276__$1;(statearr_21278_21298[2] = null);
(statearr_21278_21298[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21277 === 2))
{var state_21276__$1 = state_21276;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21276__$1,4,from);
} else
{if((state_val_21277 === 3))
{var inst_21274 = (state_21276[2]);var state_21276__$1 = state_21276;return cljs.core.async.impl.ioc_helpers.return_chan(state_21276__$1,inst_21274);
} else
{if((state_val_21277 === 4))
{var inst_21259 = (state_21276[7]);var inst_21259__$1 = (state_21276[2]);var inst_21260 = (inst_21259__$1 == null);var state_21276__$1 = (function (){var statearr_21279 = state_21276;(statearr_21279[7] = inst_21259__$1);
return statearr_21279;
})();if(cljs.core.truth_(inst_21260))
{var statearr_21280_21299 = state_21276__$1;(statearr_21280_21299[1] = 5);
} else
{var statearr_21281_21300 = state_21276__$1;(statearr_21281_21300[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21277 === 5))
{var state_21276__$1 = state_21276;if(cljs.core.truth_(close_QMARK_))
{var statearr_21282_21301 = state_21276__$1;(statearr_21282_21301[1] = 8);
} else
{var statearr_21283_21302 = state_21276__$1;(statearr_21283_21302[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21277 === 6))
{var inst_21259 = (state_21276[7]);var state_21276__$1 = state_21276;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21276__$1,11,to,inst_21259);
} else
{if((state_val_21277 === 7))
{var inst_21272 = (state_21276[2]);var state_21276__$1 = state_21276;var statearr_21284_21303 = state_21276__$1;(statearr_21284_21303[2] = inst_21272);
(statearr_21284_21303[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21277 === 8))
{var inst_21263 = cljs.core.async.close_BANG_(to);var state_21276__$1 = state_21276;var statearr_21285_21304 = state_21276__$1;(statearr_21285_21304[2] = inst_21263);
(statearr_21285_21304[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21277 === 9))
{var state_21276__$1 = state_21276;var statearr_21286_21305 = state_21276__$1;(statearr_21286_21305[2] = null);
(statearr_21286_21305[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21277 === 10))
{var inst_21266 = (state_21276[2]);var state_21276__$1 = state_21276;var statearr_21287_21306 = state_21276__$1;(statearr_21287_21306[2] = inst_21266);
(statearr_21287_21306[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21277 === 11))
{var inst_21269 = (state_21276[2]);var state_21276__$1 = (function (){var statearr_21288 = state_21276;(statearr_21288[8] = inst_21269);
return statearr_21288;
})();var statearr_21289_21307 = state_21276__$1;(statearr_21289_21307[2] = null);
(statearr_21289_21307[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21293 = [null,null,null,null,null,null,null,null,null];(statearr_21293[0] = state_machine__5507__auto__);
(statearr_21293[1] = 1);
return statearr_21293;
});
var state_machine__5507__auto____1 = (function (state_21276){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21276);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21294){if((e21294 instanceof Object))
{var ex__5510__auto__ = e21294;var statearr_21295_21308 = state_21276;(statearr_21295_21308[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21276);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21294;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21309 = state_21276;
state_21276 = G__21309;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21276){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21296 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21297);
return statearr_21296;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___21396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21374){var state_val_21375 = (state_21374[1]);if((state_val_21375 === 1))
{var state_21374__$1 = state_21374;var statearr_21376_21397 = state_21374__$1;(statearr_21376_21397[2] = null);
(statearr_21376_21397[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21375 === 2))
{var state_21374__$1 = state_21374;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21374__$1,4,ch);
} else
{if((state_val_21375 === 3))
{var inst_21372 = (state_21374[2]);var state_21374__$1 = state_21374;return cljs.core.async.impl.ioc_helpers.return_chan(state_21374__$1,inst_21372);
} else
{if((state_val_21375 === 4))
{var inst_21355 = (state_21374[7]);var inst_21355__$1 = (state_21374[2]);var inst_21356 = (inst_21355__$1 == null);var state_21374__$1 = (function (){var statearr_21377 = state_21374;(statearr_21377[7] = inst_21355__$1);
return statearr_21377;
})();if(cljs.core.truth_(inst_21356))
{var statearr_21378_21398 = state_21374__$1;(statearr_21378_21398[1] = 5);
} else
{var statearr_21379_21399 = state_21374__$1;(statearr_21379_21399[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21375 === 5))
{var inst_21358 = cljs.core.async.close_BANG_(tc);var inst_21359 = cljs.core.async.close_BANG_(fc);var state_21374__$1 = (function (){var statearr_21380 = state_21374;(statearr_21380[8] = inst_21358);
return statearr_21380;
})();var statearr_21381_21400 = state_21374__$1;(statearr_21381_21400[2] = inst_21359);
(statearr_21381_21400[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21375 === 6))
{var inst_21355 = (state_21374[7]);var inst_21361 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21355) : p.call(null,inst_21355));var state_21374__$1 = state_21374;if(cljs.core.truth_(inst_21361))
{var statearr_21382_21401 = state_21374__$1;(statearr_21382_21401[1] = 9);
} else
{var statearr_21383_21402 = state_21374__$1;(statearr_21383_21402[1] = 10);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21375 === 7))
{var inst_21370 = (state_21374[2]);var state_21374__$1 = state_21374;var statearr_21384_21403 = state_21374__$1;(statearr_21384_21403[2] = inst_21370);
(statearr_21384_21403[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21375 === 8))
{var inst_21367 = (state_21374[2]);var state_21374__$1 = (function (){var statearr_21385 = state_21374;(statearr_21385[9] = inst_21367);
return statearr_21385;
})();var statearr_21386_21404 = state_21374__$1;(statearr_21386_21404[2] = null);
(statearr_21386_21404[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21375 === 9))
{var state_21374__$1 = state_21374;var statearr_21387_21405 = state_21374__$1;(statearr_21387_21405[2] = tc);
(statearr_21387_21405[1] = 11);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21375 === 10))
{var state_21374__$1 = state_21374;var statearr_21388_21406 = state_21374__$1;(statearr_21388_21406[2] = fc);
(statearr_21388_21406[1] = 11);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21375 === 11))
{var inst_21355 = (state_21374[7]);var inst_21365 = (state_21374[2]);var state_21374__$1 = state_21374;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21374__$1,8,inst_21365,inst_21355);
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
var state_machine__5507__auto____0 = (function (){var statearr_21392 = [null,null,null,null,null,null,null,null,null,null];(statearr_21392[0] = state_machine__5507__auto__);
(statearr_21392[1] = 1);
return statearr_21392;
});
var state_machine__5507__auto____1 = (function (state_21374){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21374);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21393){if((e21393 instanceof Object))
{var ex__5510__auto__ = e21393;var statearr_21394_21407 = state_21374;(statearr_21394_21407[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21374);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21408 = state_21374;
state_21374 = G__21408;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21374){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21395 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21396);
return statearr_21395;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21455){var state_val_21456 = (state_21455[1]);if((state_val_21456 === 7))
{var inst_21451 = (state_21455[2]);var state_21455__$1 = state_21455;var statearr_21457_21473 = state_21455__$1;(statearr_21457_21473[2] = inst_21451);
(statearr_21457_21473[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21456 === 6))
{var inst_21444 = (state_21455[7]);var inst_21441 = (state_21455[8]);var inst_21448 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21441,inst_21444) : f.call(null,inst_21441,inst_21444));var inst_21441__$1 = inst_21448;var state_21455__$1 = (function (){var statearr_21458 = state_21455;(statearr_21458[8] = inst_21441__$1);
return statearr_21458;
})();var statearr_21459_21474 = state_21455__$1;(statearr_21459_21474[2] = null);
(statearr_21459_21474[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21456 === 5))
{var inst_21441 = (state_21455[8]);var state_21455__$1 = state_21455;var statearr_21460_21475 = state_21455__$1;(statearr_21460_21475[2] = inst_21441);
(statearr_21460_21475[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21456 === 4))
{var inst_21444 = (state_21455[7]);var inst_21444__$1 = (state_21455[2]);var inst_21445 = (inst_21444__$1 == null);var state_21455__$1 = (function (){var statearr_21461 = state_21455;(statearr_21461[7] = inst_21444__$1);
return statearr_21461;
})();if(cljs.core.truth_(inst_21445))
{var statearr_21462_21476 = state_21455__$1;(statearr_21462_21476[1] = 5);
} else
{var statearr_21463_21477 = state_21455__$1;(statearr_21463_21477[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21456 === 3))
{var inst_21453 = (state_21455[2]);var state_21455__$1 = state_21455;return cljs.core.async.impl.ioc_helpers.return_chan(state_21455__$1,inst_21453);
} else
{if((state_val_21456 === 2))
{var state_21455__$1 = state_21455;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21455__$1,4,ch);
} else
{if((state_val_21456 === 1))
{var inst_21441 = init;var state_21455__$1 = (function (){var statearr_21464 = state_21455;(statearr_21464[8] = inst_21441);
return statearr_21464;
})();var statearr_21465_21478 = state_21455__$1;(statearr_21465_21478[2] = null);
(statearr_21465_21478[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21469 = [null,null,null,null,null,null,null,null,null];(statearr_21469[0] = state_machine__5507__auto__);
(statearr_21469[1] = 1);
return statearr_21469;
});
var state_machine__5507__auto____1 = (function (state_21455){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21455);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21470){if((e21470 instanceof Object))
{var ex__5510__auto__ = e21470;var statearr_21471_21479 = state_21455;(statearr_21471_21479[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21455);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21480 = state_21455;
state_21455 = G__21480;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21455){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21472 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21472;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21542){var state_val_21543 = (state_21542[1]);if((state_val_21543 === 1))
{var inst_21522 = cljs.core.seq(coll);var inst_21523 = inst_21522;var state_21542__$1 = (function (){var statearr_21544 = state_21542;(statearr_21544[7] = inst_21523);
return statearr_21544;
})();var statearr_21545_21563 = state_21542__$1;(statearr_21545_21563[2] = null);
(statearr_21545_21563[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21543 === 2))
{var inst_21523 = (state_21542[7]);var state_21542__$1 = state_21542;if(cljs.core.truth_(inst_21523))
{var statearr_21546_21564 = state_21542__$1;(statearr_21546_21564[1] = 4);
} else
{var statearr_21547_21565 = state_21542__$1;(statearr_21547_21565[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21543 === 3))
{var inst_21540 = (state_21542[2]);var state_21542__$1 = state_21542;return cljs.core.async.impl.ioc_helpers.return_chan(state_21542__$1,inst_21540);
} else
{if((state_val_21543 === 4))
{var inst_21523 = (state_21542[7]);var inst_21526 = cljs.core.first(inst_21523);var state_21542__$1 = state_21542;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21542__$1,7,ch,inst_21526);
} else
{if((state_val_21543 === 5))
{var state_21542__$1 = state_21542;if(cljs.core.truth_(close_QMARK_))
{var statearr_21548_21566 = state_21542__$1;(statearr_21548_21566[1] = 8);
} else
{var statearr_21549_21567 = state_21542__$1;(statearr_21549_21567[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21543 === 6))
{var inst_21538 = (state_21542[2]);var state_21542__$1 = state_21542;var statearr_21550_21568 = state_21542__$1;(statearr_21550_21568[2] = inst_21538);
(statearr_21550_21568[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21543 === 7))
{var inst_21523 = (state_21542[7]);var inst_21528 = (state_21542[2]);var inst_21529 = cljs.core.next(inst_21523);var inst_21523__$1 = inst_21529;var state_21542__$1 = (function (){var statearr_21551 = state_21542;(statearr_21551[7] = inst_21523__$1);
(statearr_21551[8] = inst_21528);
return statearr_21551;
})();var statearr_21552_21569 = state_21542__$1;(statearr_21552_21569[2] = null);
(statearr_21552_21569[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21543 === 8))
{var inst_21533 = cljs.core.async.close_BANG_(ch);var state_21542__$1 = state_21542;var statearr_21553_21570 = state_21542__$1;(statearr_21553_21570[2] = inst_21533);
(statearr_21553_21570[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21543 === 9))
{var state_21542__$1 = state_21542;var statearr_21554_21571 = state_21542__$1;(statearr_21554_21571[2] = null);
(statearr_21554_21571[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21543 === 10))
{var inst_21536 = (state_21542[2]);var state_21542__$1 = state_21542;var statearr_21555_21572 = state_21542__$1;(statearr_21555_21572[2] = inst_21536);
(statearr_21555_21572[1] = 6);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21559 = [null,null,null,null,null,null,null,null,null];(statearr_21559[0] = state_machine__5507__auto__);
(statearr_21559[1] = 1);
return statearr_21559;
});
var state_machine__5507__auto____1 = (function (state_21542){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21542);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21560){if((e21560 instanceof Object))
{var ex__5510__auto__ = e21560;var statearr_21561_21573 = state_21542;(statearr_21561_21573[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21542);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21574 = state_21542;
state_21542 = G__21574;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21542){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21562 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21562;
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
cljs.core.async.Mux = (function (){var obj21576 = {};return obj21576;
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
cljs.core.async.Mult = (function (){var obj21578 = {};return obj21578;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21802 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21802 = (function (cs,ch,mult,meta21803){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21803 = meta21803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21802.cljs$lang$type = true;
cljs.core.async.t21802.cljs$lang$ctorStr = "cljs.core.async/t21802";
cljs.core.async.t21802.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21802");
});})(cs))
;
cljs.core.async.t21802.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21802.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21802.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21802.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21802.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21804){var self__ = this;
var _21804__$1 = this;return self__.meta21803;
});})(cs))
;
cljs.core.async.t21802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21804,meta21803__$1){var self__ = this;
var _21804__$1 = this;return (new cljs.core.async.t21802(self__.cs,self__.ch,self__.mult,meta21803__$1));
});})(cs))
;
cljs.core.async.__GT_t21802 = ((function (cs){
return (function __GT_t21802(cs__$1,ch__$1,mult__$1,meta21803){return (new cljs.core.async.t21802(cs__$1,ch__$1,mult__$1,meta21803));
});})(cs))
;
}
return (new cljs.core.async.t21802(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___22025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21939){var state_val_21940 = (state_21939[1]);if((state_val_21940 === 32))
{var inst_21883 = (state_21939[7]);var inst_21807 = (state_21939[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21939,31,Object,null,30);var inst_21890 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21883,inst_21807,done);var state_21939__$1 = state_21939;var statearr_21941_22026 = state_21939__$1;(statearr_21941_22026[2] = inst_21890);
cljs.core.async.impl.ioc_helpers.process_exception(state_21939__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 1))
{var state_21939__$1 = state_21939;var statearr_21942_22027 = state_21939__$1;(statearr_21942_22027[2] = null);
(statearr_21942_22027[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 33))
{var inst_21896 = (state_21939[9]);var inst_21898 = cljs.core.chunked_seq_QMARK_(inst_21896);var state_21939__$1 = state_21939;if(inst_21898)
{var statearr_21943_22028 = state_21939__$1;(statearr_21943_22028[1] = 36);
} else
{var statearr_21944_22029 = state_21939__$1;(statearr_21944_22029[1] = 37);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 2))
{var state_21939__$1 = state_21939;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21939__$1,4,ch);
} else
{if((state_val_21940 === 34))
{var state_21939__$1 = state_21939;var statearr_21945_22030 = state_21939__$1;(statearr_21945_22030[2] = null);
(statearr_21945_22030[1] = 35);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 3))
{var inst_21937 = (state_21939[2]);var state_21939__$1 = state_21939;return cljs.core.async.impl.ioc_helpers.return_chan(state_21939__$1,inst_21937);
} else
{if((state_val_21940 === 35))
{var inst_21921 = (state_21939[2]);var state_21939__$1 = state_21939;var statearr_21946_22031 = state_21939__$1;(statearr_21946_22031[2] = inst_21921);
(statearr_21946_22031[1] = 29);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 4))
{var inst_21807 = (state_21939[8]);var inst_21807__$1 = (state_21939[2]);var inst_21808 = (inst_21807__$1 == null);var state_21939__$1 = (function (){var statearr_21947 = state_21939;(statearr_21947[8] = inst_21807__$1);
return statearr_21947;
})();if(cljs.core.truth_(inst_21808))
{var statearr_21948_22032 = state_21939__$1;(statearr_21948_22032[1] = 5);
} else
{var statearr_21949_22033 = state_21939__$1;(statearr_21949_22033[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 36))
{var inst_21896 = (state_21939[9]);var inst_21900 = cljs.core.chunk_first(inst_21896);var inst_21901 = cljs.core.chunk_rest(inst_21896);var inst_21902 = cljs.core.count(inst_21900);var inst_21875 = inst_21901;var inst_21876 = inst_21900;var inst_21877 = inst_21902;var inst_21878 = 0;var state_21939__$1 = (function (){var statearr_21950 = state_21939;(statearr_21950[10] = inst_21878);
(statearr_21950[11] = inst_21877);
(statearr_21950[12] = inst_21875);
(statearr_21950[13] = inst_21876);
return statearr_21950;
})();var statearr_21951_22034 = state_21939__$1;(statearr_21951_22034[2] = null);
(statearr_21951_22034[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 5))
{var inst_21814 = cljs.core.deref(cs);var inst_21815 = cljs.core.seq(inst_21814);var inst_21816 = inst_21815;var inst_21817 = null;var inst_21818 = 0;var inst_21819 = 0;var state_21939__$1 = (function (){var statearr_21952 = state_21939;(statearr_21952[14] = inst_21819);
(statearr_21952[15] = inst_21817);
(statearr_21952[16] = inst_21818);
(statearr_21952[17] = inst_21816);
return statearr_21952;
})();var statearr_21953_22035 = state_21939__$1;(statearr_21953_22035[2] = null);
(statearr_21953_22035[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 37))
{var inst_21896 = (state_21939[9]);var inst_21905 = cljs.core.first(inst_21896);var state_21939__$1 = (function (){var statearr_21954 = state_21939;(statearr_21954[18] = inst_21905);
return statearr_21954;
})();var statearr_21955_22036 = state_21939__$1;(statearr_21955_22036[2] = null);
(statearr_21955_22036[1] = 41);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 6))
{var inst_21867 = (state_21939[19]);var inst_21866 = cljs.core.deref(cs);var inst_21867__$1 = cljs.core.keys(inst_21866);var inst_21868 = cljs.core.count(inst_21867__$1);var inst_21869 = cljs.core.reset_BANG_(dctr,inst_21868);var inst_21874 = cljs.core.seq(inst_21867__$1);var inst_21875 = inst_21874;var inst_21876 = null;var inst_21877 = 0;var inst_21878 = 0;var state_21939__$1 = (function (){var statearr_21956 = state_21939;(statearr_21956[19] = inst_21867__$1);
(statearr_21956[20] = inst_21869);
(statearr_21956[10] = inst_21878);
(statearr_21956[11] = inst_21877);
(statearr_21956[12] = inst_21875);
(statearr_21956[13] = inst_21876);
return statearr_21956;
})();var statearr_21957_22037 = state_21939__$1;(statearr_21957_22037[2] = null);
(statearr_21957_22037[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 38))
{var inst_21918 = (state_21939[2]);var state_21939__$1 = state_21939;var statearr_21958_22038 = state_21939__$1;(statearr_21958_22038[2] = inst_21918);
(statearr_21958_22038[1] = 35);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 7))
{var inst_21935 = (state_21939[2]);var state_21939__$1 = state_21939;var statearr_21959_22039 = state_21939__$1;(statearr_21959_22039[2] = inst_21935);
(statearr_21959_22039[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 39))
{var inst_21896 = (state_21939[9]);var inst_21914 = (state_21939[2]);var inst_21915 = cljs.core.next(inst_21896);var inst_21875 = inst_21915;var inst_21876 = null;var inst_21877 = 0;var inst_21878 = 0;var state_21939__$1 = (function (){var statearr_21960 = state_21939;(statearr_21960[10] = inst_21878);
(statearr_21960[11] = inst_21877);
(statearr_21960[21] = inst_21914);
(statearr_21960[12] = inst_21875);
(statearr_21960[13] = inst_21876);
return statearr_21960;
})();var statearr_21961_22040 = state_21939__$1;(statearr_21961_22040[2] = null);
(statearr_21961_22040[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 8))
{var inst_21819 = (state_21939[14]);var inst_21818 = (state_21939[16]);var inst_21821 = (inst_21819 < inst_21818);var inst_21822 = inst_21821;var state_21939__$1 = state_21939;if(cljs.core.truth_(inst_21822))
{var statearr_21962_22041 = state_21939__$1;(statearr_21962_22041[1] = 10);
} else
{var statearr_21963_22042 = state_21939__$1;(statearr_21963_22042[1] = 11);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 40))
{var inst_21905 = (state_21939[18]);var inst_21906 = (state_21939[2]);var inst_21907 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21908 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21905);var state_21939__$1 = (function (){var statearr_21964 = state_21939;(statearr_21964[22] = inst_21906);
(statearr_21964[23] = inst_21907);
return statearr_21964;
})();var statearr_21965_22043 = state_21939__$1;(statearr_21965_22043[2] = inst_21908);
cljs.core.async.impl.ioc_helpers.process_exception(state_21939__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 9))
{var inst_21864 = (state_21939[2]);var state_21939__$1 = state_21939;var statearr_21966_22044 = state_21939__$1;(statearr_21966_22044[2] = inst_21864);
(statearr_21966_22044[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 41))
{var inst_21905 = (state_21939[18]);var inst_21807 = (state_21939[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21939,40,Object,null,39);var inst_21912 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21905,inst_21807,done);var state_21939__$1 = state_21939;var statearr_21967_22045 = state_21939__$1;(statearr_21967_22045[2] = inst_21912);
cljs.core.async.impl.ioc_helpers.process_exception(state_21939__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 10))
{var inst_21819 = (state_21939[14]);var inst_21817 = (state_21939[15]);var inst_21825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21817,inst_21819);var inst_21826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21825,0,null);var inst_21827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21825,1,null);var state_21939__$1 = (function (){var statearr_21968 = state_21939;(statearr_21968[24] = inst_21826);
return statearr_21968;
})();if(cljs.core.truth_(inst_21827))
{var statearr_21969_22046 = state_21939__$1;(statearr_21969_22046[1] = 13);
} else
{var statearr_21970_22047 = state_21939__$1;(statearr_21970_22047[1] = 14);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 42))
{var state_21939__$1 = state_21939;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21939__$1,45,dchan);
} else
{if((state_val_21940 === 11))
{var inst_21836 = (state_21939[25]);var inst_21816 = (state_21939[17]);var inst_21836__$1 = cljs.core.seq(inst_21816);var state_21939__$1 = (function (){var statearr_21971 = state_21939;(statearr_21971[25] = inst_21836__$1);
return statearr_21971;
})();if(inst_21836__$1)
{var statearr_21972_22048 = state_21939__$1;(statearr_21972_22048[1] = 16);
} else
{var statearr_21973_22049 = state_21939__$1;(statearr_21973_22049[1] = 17);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 43))
{var state_21939__$1 = state_21939;var statearr_21974_22050 = state_21939__$1;(statearr_21974_22050[2] = null);
(statearr_21974_22050[1] = 44);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 12))
{var inst_21862 = (state_21939[2]);var state_21939__$1 = state_21939;var statearr_21975_22051 = state_21939__$1;(statearr_21975_22051[2] = inst_21862);
(statearr_21975_22051[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 44))
{var inst_21932 = (state_21939[2]);var state_21939__$1 = (function (){var statearr_21976 = state_21939;(statearr_21976[26] = inst_21932);
return statearr_21976;
})();var statearr_21977_22052 = state_21939__$1;(statearr_21977_22052[2] = null);
(statearr_21977_22052[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 13))
{var inst_21826 = (state_21939[24]);var inst_21829 = cljs.core.async.close_BANG_(inst_21826);var state_21939__$1 = state_21939;var statearr_21978_22053 = state_21939__$1;(statearr_21978_22053[2] = inst_21829);
(statearr_21978_22053[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 45))
{var inst_21929 = (state_21939[2]);var state_21939__$1 = state_21939;var statearr_21982_22054 = state_21939__$1;(statearr_21982_22054[2] = inst_21929);
(statearr_21982_22054[1] = 44);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 14))
{var state_21939__$1 = state_21939;var statearr_21983_22055 = state_21939__$1;(statearr_21983_22055[2] = null);
(statearr_21983_22055[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 15))
{var inst_21819 = (state_21939[14]);var inst_21817 = (state_21939[15]);var inst_21818 = (state_21939[16]);var inst_21816 = (state_21939[17]);var inst_21832 = (state_21939[2]);var inst_21833 = (inst_21819 + 1);var tmp21979 = inst_21817;var tmp21980 = inst_21818;var tmp21981 = inst_21816;var inst_21816__$1 = tmp21981;var inst_21817__$1 = tmp21979;var inst_21818__$1 = tmp21980;var inst_21819__$1 = inst_21833;var state_21939__$1 = (function (){var statearr_21984 = state_21939;(statearr_21984[14] = inst_21819__$1);
(statearr_21984[27] = inst_21832);
(statearr_21984[15] = inst_21817__$1);
(statearr_21984[16] = inst_21818__$1);
(statearr_21984[17] = inst_21816__$1);
return statearr_21984;
})();var statearr_21985_22056 = state_21939__$1;(statearr_21985_22056[2] = null);
(statearr_21985_22056[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 16))
{var inst_21836 = (state_21939[25]);var inst_21838 = cljs.core.chunked_seq_QMARK_(inst_21836);var state_21939__$1 = state_21939;if(inst_21838)
{var statearr_21986_22057 = state_21939__$1;(statearr_21986_22057[1] = 19);
} else
{var statearr_21987_22058 = state_21939__$1;(statearr_21987_22058[1] = 20);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 17))
{var state_21939__$1 = state_21939;var statearr_21988_22059 = state_21939__$1;(statearr_21988_22059[2] = null);
(statearr_21988_22059[1] = 18);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 18))
{var inst_21860 = (state_21939[2]);var state_21939__$1 = state_21939;var statearr_21989_22060 = state_21939__$1;(statearr_21989_22060[2] = inst_21860);
(statearr_21989_22060[1] = 12);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 19))
{var inst_21836 = (state_21939[25]);var inst_21840 = cljs.core.chunk_first(inst_21836);var inst_21841 = cljs.core.chunk_rest(inst_21836);var inst_21842 = cljs.core.count(inst_21840);var inst_21816 = inst_21841;var inst_21817 = inst_21840;var inst_21818 = inst_21842;var inst_21819 = 0;var state_21939__$1 = (function (){var statearr_21990 = state_21939;(statearr_21990[14] = inst_21819);
(statearr_21990[15] = inst_21817);
(statearr_21990[16] = inst_21818);
(statearr_21990[17] = inst_21816);
return statearr_21990;
})();var statearr_21991_22061 = state_21939__$1;(statearr_21991_22061[2] = null);
(statearr_21991_22061[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 20))
{var inst_21836 = (state_21939[25]);var inst_21846 = cljs.core.first(inst_21836);var inst_21847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21846,0,null);var inst_21848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21846,1,null);var state_21939__$1 = (function (){var statearr_21992 = state_21939;(statearr_21992[28] = inst_21847);
return statearr_21992;
})();if(cljs.core.truth_(inst_21848))
{var statearr_21993_22062 = state_21939__$1;(statearr_21993_22062[1] = 22);
} else
{var statearr_21994_22063 = state_21939__$1;(statearr_21994_22063[1] = 23);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 21))
{var inst_21857 = (state_21939[2]);var state_21939__$1 = state_21939;var statearr_21995_22064 = state_21939__$1;(statearr_21995_22064[2] = inst_21857);
(statearr_21995_22064[1] = 18);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 22))
{var inst_21847 = (state_21939[28]);var inst_21850 = cljs.core.async.close_BANG_(inst_21847);var state_21939__$1 = state_21939;var statearr_21996_22065 = state_21939__$1;(statearr_21996_22065[2] = inst_21850);
(statearr_21996_22065[1] = 24);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 23))
{var state_21939__$1 = state_21939;var statearr_21997_22066 = state_21939__$1;(statearr_21997_22066[2] = null);
(statearr_21997_22066[1] = 24);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 24))
{var inst_21836 = (state_21939[25]);var inst_21853 = (state_21939[2]);var inst_21854 = cljs.core.next(inst_21836);var inst_21816 = inst_21854;var inst_21817 = null;var inst_21818 = 0;var inst_21819 = 0;var state_21939__$1 = (function (){var statearr_21998 = state_21939;(statearr_21998[29] = inst_21853);
(statearr_21998[14] = inst_21819);
(statearr_21998[15] = inst_21817);
(statearr_21998[16] = inst_21818);
(statearr_21998[17] = inst_21816);
return statearr_21998;
})();var statearr_21999_22067 = state_21939__$1;(statearr_21999_22067[2] = null);
(statearr_21999_22067[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 25))
{var inst_21878 = (state_21939[10]);var inst_21877 = (state_21939[11]);var inst_21880 = (inst_21878 < inst_21877);var inst_21881 = inst_21880;var state_21939__$1 = state_21939;if(cljs.core.truth_(inst_21881))
{var statearr_22000_22068 = state_21939__$1;(statearr_22000_22068[1] = 27);
} else
{var statearr_22001_22069 = state_21939__$1;(statearr_22001_22069[1] = 28);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 26))
{var inst_21867 = (state_21939[19]);var inst_21925 = (state_21939[2]);var inst_21926 = cljs.core.seq(inst_21867);var state_21939__$1 = (function (){var statearr_22002 = state_21939;(statearr_22002[30] = inst_21925);
return statearr_22002;
})();if(inst_21926)
{var statearr_22003_22070 = state_21939__$1;(statearr_22003_22070[1] = 42);
} else
{var statearr_22004_22071 = state_21939__$1;(statearr_22004_22071[1] = 43);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 27))
{var inst_21878 = (state_21939[10]);var inst_21876 = (state_21939[13]);var inst_21883 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21876,inst_21878);var state_21939__$1 = (function (){var statearr_22005 = state_21939;(statearr_22005[7] = inst_21883);
return statearr_22005;
})();var statearr_22006_22072 = state_21939__$1;(statearr_22006_22072[2] = null);
(statearr_22006_22072[1] = 32);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 28))
{var inst_21896 = (state_21939[9]);var inst_21875 = (state_21939[12]);var inst_21896__$1 = cljs.core.seq(inst_21875);var state_21939__$1 = (function (){var statearr_22010 = state_21939;(statearr_22010[9] = inst_21896__$1);
return statearr_22010;
})();if(inst_21896__$1)
{var statearr_22011_22073 = state_21939__$1;(statearr_22011_22073[1] = 33);
} else
{var statearr_22012_22074 = state_21939__$1;(statearr_22012_22074[1] = 34);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 29))
{var inst_21923 = (state_21939[2]);var state_21939__$1 = state_21939;var statearr_22013_22075 = state_21939__$1;(statearr_22013_22075[2] = inst_21923);
(statearr_22013_22075[1] = 26);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 30))
{var inst_21878 = (state_21939[10]);var inst_21877 = (state_21939[11]);var inst_21875 = (state_21939[12]);var inst_21876 = (state_21939[13]);var inst_21892 = (state_21939[2]);var inst_21893 = (inst_21878 + 1);var tmp22007 = inst_21877;var tmp22008 = inst_21875;var tmp22009 = inst_21876;var inst_21875__$1 = tmp22008;var inst_21876__$1 = tmp22009;var inst_21877__$1 = tmp22007;var inst_21878__$1 = inst_21893;var state_21939__$1 = (function (){var statearr_22014 = state_21939;(statearr_22014[10] = inst_21878__$1);
(statearr_22014[11] = inst_21877__$1);
(statearr_22014[31] = inst_21892);
(statearr_22014[12] = inst_21875__$1);
(statearr_22014[13] = inst_21876__$1);
return statearr_22014;
})();var statearr_22015_22076 = state_21939__$1;(statearr_22015_22076[2] = null);
(statearr_22015_22076[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21940 === 31))
{var inst_21883 = (state_21939[7]);var inst_21884 = (state_21939[2]);var inst_21885 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21886 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21883);var state_21939__$1 = (function (){var statearr_22016 = state_21939;(statearr_22016[32] = inst_21884);
(statearr_22016[33] = inst_21885);
return statearr_22016;
})();var statearr_22017_22077 = state_21939__$1;(statearr_22017_22077[2] = inst_21886);
cljs.core.async.impl.ioc_helpers.process_exception(state_21939__$1);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22021[0] = state_machine__5507__auto__);
(statearr_22021[1] = 1);
return statearr_22021;
});
var state_machine__5507__auto____1 = (function (state_21939){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21939);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22022){if((e22022 instanceof Object))
{var ex__5510__auto__ = e22022;var statearr_22023_22078 = state_21939;(statearr_22023_22078[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21939);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22079 = state_21939;
state_21939 = G__22079;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21939){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22024 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22025);
return statearr_22024;
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
cljs.core.async.Mix = (function (){var obj22081 = {};return obj22081;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,null,cljs.core.constant$keyword$131,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$132);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$131);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$132,chs);var pauses = pick(cljs.core.constant$keyword$130,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$133,solos,cljs.core.constant$keyword$134,pick(cljs.core.constant$keyword$131,chs),cljs.core.constant$keyword$135,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$130)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t22191 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22191 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22192){
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
this.meta22192 = meta22192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22191.cljs$lang$type = true;
cljs.core.async.t22191.cljs$lang$ctorStr = "cljs.core.async/t22191";
cljs.core.async.t22191.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22191");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22191.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22191.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22191.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22191.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22191.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22191.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22191.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22193){var self__ = this;
var _22193__$1 = this;return self__.meta22192;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22193,meta22192__$1){var self__ = this;
var _22193__$1 = this;return (new cljs.core.async.t22191(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22192__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22191 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22191(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22192){return (new cljs.core.async.t22191(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22192));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22191(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___22300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22258){var state_val_22259 = (state_22258[1]);if((state_val_22259 === 1))
{var inst_22197 = (state_22258[7]);var inst_22197__$1 = calc_state();var inst_22198 = cljs.core.seq_QMARK_(inst_22197__$1);var state_22258__$1 = (function (){var statearr_22260 = state_22258;(statearr_22260[7] = inst_22197__$1);
return statearr_22260;
})();if(inst_22198)
{var statearr_22261_22301 = state_22258__$1;(statearr_22261_22301[1] = 2);
} else
{var statearr_22262_22302 = state_22258__$1;(statearr_22262_22302[1] = 3);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 2))
{var inst_22197 = (state_22258[7]);var inst_22200 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22197);var state_22258__$1 = state_22258;var statearr_22263_22303 = state_22258__$1;(statearr_22263_22303[2] = inst_22200);
(statearr_22263_22303[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 3))
{var inst_22197 = (state_22258[7]);var state_22258__$1 = state_22258;var statearr_22264_22304 = state_22258__$1;(statearr_22264_22304[2] = inst_22197);
(statearr_22264_22304[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 4))
{var inst_22197 = (state_22258[7]);var inst_22203 = (state_22258[2]);var inst_22204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22203,cljs.core.constant$keyword$135);var inst_22205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22203,cljs.core.constant$keyword$134);var inst_22206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22203,cljs.core.constant$keyword$133);var inst_22207 = inst_22197;var state_22258__$1 = (function (){var statearr_22265 = state_22258;(statearr_22265[8] = inst_22207);
(statearr_22265[9] = inst_22204);
(statearr_22265[10] = inst_22205);
(statearr_22265[11] = inst_22206);
return statearr_22265;
})();var statearr_22266_22305 = state_22258__$1;(statearr_22266_22305[2] = null);
(statearr_22266_22305[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 5))
{var inst_22207 = (state_22258[8]);var inst_22210 = cljs.core.seq_QMARK_(inst_22207);var state_22258__$1 = state_22258;if(inst_22210)
{var statearr_22267_22306 = state_22258__$1;(statearr_22267_22306[1] = 7);
} else
{var statearr_22268_22307 = state_22258__$1;(statearr_22268_22307[1] = 8);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 6))
{var inst_22256 = (state_22258[2]);var state_22258__$1 = state_22258;return cljs.core.async.impl.ioc_helpers.return_chan(state_22258__$1,inst_22256);
} else
{if((state_val_22259 === 7))
{var inst_22207 = (state_22258[8]);var inst_22212 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22207);var state_22258__$1 = state_22258;var statearr_22269_22308 = state_22258__$1;(statearr_22269_22308[2] = inst_22212);
(statearr_22269_22308[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 8))
{var inst_22207 = (state_22258[8]);var state_22258__$1 = state_22258;var statearr_22270_22309 = state_22258__$1;(statearr_22270_22309[2] = inst_22207);
(statearr_22270_22309[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 9))
{var inst_22215 = (state_22258[12]);var inst_22215__$1 = (state_22258[2]);var inst_22216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22215__$1,cljs.core.constant$keyword$135);var inst_22217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22215__$1,cljs.core.constant$keyword$134);var inst_22218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22215__$1,cljs.core.constant$keyword$133);var state_22258__$1 = (function (){var statearr_22271 = state_22258;(statearr_22271[12] = inst_22215__$1);
(statearr_22271[13] = inst_22217);
(statearr_22271[14] = inst_22218);
return statearr_22271;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22258__$1,10,inst_22216);
} else
{if((state_val_22259 === 10))
{var inst_22223 = (state_22258[15]);var inst_22222 = (state_22258[16]);var inst_22221 = (state_22258[2]);var inst_22222__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22221,0,null);var inst_22223__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22221,1,null);var inst_22224 = (inst_22222__$1 == null);var inst_22225 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22223__$1,change);var inst_22226 = (inst_22224) || (inst_22225);var state_22258__$1 = (function (){var statearr_22272 = state_22258;(statearr_22272[15] = inst_22223__$1);
(statearr_22272[16] = inst_22222__$1);
return statearr_22272;
})();if(cljs.core.truth_(inst_22226))
{var statearr_22273_22310 = state_22258__$1;(statearr_22273_22310[1] = 11);
} else
{var statearr_22274_22311 = state_22258__$1;(statearr_22274_22311[1] = 12);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 11))
{var inst_22222 = (state_22258[16]);var inst_22228 = (inst_22222 == null);var state_22258__$1 = state_22258;if(cljs.core.truth_(inst_22228))
{var statearr_22275_22312 = state_22258__$1;(statearr_22275_22312[1] = 14);
} else
{var statearr_22276_22313 = state_22258__$1;(statearr_22276_22313[1] = 15);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 12))
{var inst_22223 = (state_22258[15]);var inst_22218 = (state_22258[14]);var inst_22237 = (state_22258[17]);var inst_22237__$1 = (inst_22218.cljs$core$IFn$_invoke$arity$1 ? inst_22218.cljs$core$IFn$_invoke$arity$1(inst_22223) : inst_22218.call(null,inst_22223));var state_22258__$1 = (function (){var statearr_22277 = state_22258;(statearr_22277[17] = inst_22237__$1);
return statearr_22277;
})();if(cljs.core.truth_(inst_22237__$1))
{var statearr_22278_22314 = state_22258__$1;(statearr_22278_22314[1] = 17);
} else
{var statearr_22279_22315 = state_22258__$1;(statearr_22279_22315[1] = 18);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 13))
{var inst_22254 = (state_22258[2]);var state_22258__$1 = state_22258;var statearr_22280_22316 = state_22258__$1;(statearr_22280_22316[2] = inst_22254);
(statearr_22280_22316[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 14))
{var inst_22223 = (state_22258[15]);var inst_22230 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22223);var state_22258__$1 = state_22258;var statearr_22281_22317 = state_22258__$1;(statearr_22281_22317[2] = inst_22230);
(statearr_22281_22317[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 15))
{var state_22258__$1 = state_22258;var statearr_22282_22318 = state_22258__$1;(statearr_22282_22318[2] = null);
(statearr_22282_22318[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 16))
{var inst_22233 = (state_22258[2]);var inst_22234 = calc_state();var inst_22207 = inst_22234;var state_22258__$1 = (function (){var statearr_22283 = state_22258;(statearr_22283[18] = inst_22233);
(statearr_22283[8] = inst_22207);
return statearr_22283;
})();var statearr_22284_22319 = state_22258__$1;(statearr_22284_22319[2] = null);
(statearr_22284_22319[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 17))
{var inst_22237 = (state_22258[17]);var state_22258__$1 = state_22258;var statearr_22285_22320 = state_22258__$1;(statearr_22285_22320[2] = inst_22237);
(statearr_22285_22320[1] = 19);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 18))
{var inst_22223 = (state_22258[15]);var inst_22217 = (state_22258[13]);var inst_22218 = (state_22258[14]);var inst_22240 = cljs.core.empty_QMARK_(inst_22218);var inst_22241 = (inst_22217.cljs$core$IFn$_invoke$arity$1 ? inst_22217.cljs$core$IFn$_invoke$arity$1(inst_22223) : inst_22217.call(null,inst_22223));var inst_22242 = cljs.core.not(inst_22241);var inst_22243 = (inst_22240) && (inst_22242);var state_22258__$1 = state_22258;var statearr_22286_22321 = state_22258__$1;(statearr_22286_22321[2] = inst_22243);
(statearr_22286_22321[1] = 19);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 19))
{var inst_22245 = (state_22258[2]);var state_22258__$1 = state_22258;if(cljs.core.truth_(inst_22245))
{var statearr_22287_22322 = state_22258__$1;(statearr_22287_22322[1] = 20);
} else
{var statearr_22288_22323 = state_22258__$1;(statearr_22288_22323[1] = 21);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 20))
{var inst_22222 = (state_22258[16]);var state_22258__$1 = state_22258;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22258__$1,23,out,inst_22222);
} else
{if((state_val_22259 === 21))
{var state_22258__$1 = state_22258;var statearr_22289_22324 = state_22258__$1;(statearr_22289_22324[2] = null);
(statearr_22289_22324[1] = 22);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 22))
{var inst_22215 = (state_22258[12]);var inst_22251 = (state_22258[2]);var inst_22207 = inst_22215;var state_22258__$1 = (function (){var statearr_22290 = state_22258;(statearr_22290[8] = inst_22207);
(statearr_22290[19] = inst_22251);
return statearr_22290;
})();var statearr_22291_22325 = state_22258__$1;(statearr_22291_22325[2] = null);
(statearr_22291_22325[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22259 === 23))
{var inst_22248 = (state_22258[2]);var state_22258__$1 = state_22258;var statearr_22292_22326 = state_22258__$1;(statearr_22292_22326[2] = inst_22248);
(statearr_22292_22326[1] = 22);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22296[0] = state_machine__5507__auto__);
(statearr_22296[1] = 1);
return statearr_22296;
});
var state_machine__5507__auto____1 = (function (state_22258){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22258);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22297){if((e22297 instanceof Object))
{var ex__5510__auto__ = e22297;var statearr_22298_22327 = state_22258;(statearr_22298_22327[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22258);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22328 = state_22258;
state_22258 = G__22328;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22258){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22299 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22300);
return statearr_22299;
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
cljs.core.async.Pub = (function (){var obj22330 = {};return obj22330;
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
return (function (p1__22331_SHARP_){if(cljs.core.truth_((p1__22331_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22331_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__22331_SHARP_.call(null,topic))))
{return p1__22331_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22331_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22456 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22456 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22457){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22457 = meta22457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22456.cljs$lang$type = true;
cljs.core.async.t22456.cljs$lang$ctorStr = "cljs.core.async/t22456";
cljs.core.async.t22456.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22456");
});})(mults,ensure_mult))
;
cljs.core.async.t22456.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22456.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22456.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22456.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22456.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22456.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22458){var self__ = this;
var _22458__$1 = this;return self__.meta22457;
});})(mults,ensure_mult))
;
cljs.core.async.t22456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22458,meta22457__$1){var self__ = this;
var _22458__$1 = this;return (new cljs.core.async.t22456(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22457__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22456 = ((function (mults,ensure_mult){
return (function __GT_t22456(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22457){return (new cljs.core.async.t22456(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22457));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22456(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___22580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22532){var state_val_22533 = (state_22532[1]);if((state_val_22533 === 1))
{var state_22532__$1 = state_22532;var statearr_22534_22581 = state_22532__$1;(statearr_22534_22581[2] = null);
(statearr_22534_22581[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 2))
{var state_22532__$1 = state_22532;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22532__$1,4,ch);
} else
{if((state_val_22533 === 3))
{var inst_22530 = (state_22532[2]);var state_22532__$1 = state_22532;return cljs.core.async.impl.ioc_helpers.return_chan(state_22532__$1,inst_22530);
} else
{if((state_val_22533 === 4))
{var inst_22461 = (state_22532[7]);var inst_22461__$1 = (state_22532[2]);var inst_22462 = (inst_22461__$1 == null);var state_22532__$1 = (function (){var statearr_22535 = state_22532;(statearr_22535[7] = inst_22461__$1);
return statearr_22535;
})();if(cljs.core.truth_(inst_22462))
{var statearr_22536_22582 = state_22532__$1;(statearr_22536_22582[1] = 5);
} else
{var statearr_22537_22583 = state_22532__$1;(statearr_22537_22583[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 5))
{var inst_22468 = cljs.core.deref(mults);var inst_22469 = cljs.core.vals(inst_22468);var inst_22470 = cljs.core.seq(inst_22469);var inst_22471 = inst_22470;var inst_22472 = null;var inst_22473 = 0;var inst_22474 = 0;var state_22532__$1 = (function (){var statearr_22538 = state_22532;(statearr_22538[8] = inst_22474);
(statearr_22538[9] = inst_22472);
(statearr_22538[10] = inst_22473);
(statearr_22538[11] = inst_22471);
return statearr_22538;
})();var statearr_22539_22584 = state_22532__$1;(statearr_22539_22584[2] = null);
(statearr_22539_22584[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 6))
{var inst_22461 = (state_22532[7]);var inst_22511 = (state_22532[12]);var inst_22509 = (state_22532[13]);var inst_22509__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22461) : topic_fn.call(null,inst_22461));var inst_22510 = cljs.core.deref(mults);var inst_22511__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22510,inst_22509__$1);var state_22532__$1 = (function (){var statearr_22540 = state_22532;(statearr_22540[12] = inst_22511__$1);
(statearr_22540[13] = inst_22509__$1);
return statearr_22540;
})();if(cljs.core.truth_(inst_22511__$1))
{var statearr_22541_22585 = state_22532__$1;(statearr_22541_22585[1] = 19);
} else
{var statearr_22542_22586 = state_22532__$1;(statearr_22542_22586[1] = 20);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 7))
{var inst_22528 = (state_22532[2]);var state_22532__$1 = state_22532;var statearr_22543_22587 = state_22532__$1;(statearr_22543_22587[2] = inst_22528);
(statearr_22543_22587[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 8))
{var inst_22474 = (state_22532[8]);var inst_22473 = (state_22532[10]);var inst_22476 = (inst_22474 < inst_22473);var inst_22477 = inst_22476;var state_22532__$1 = state_22532;if(cljs.core.truth_(inst_22477))
{var statearr_22547_22588 = state_22532__$1;(statearr_22547_22588[1] = 10);
} else
{var statearr_22548_22589 = state_22532__$1;(statearr_22548_22589[1] = 11);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 9))
{var inst_22507 = (state_22532[2]);var state_22532__$1 = state_22532;var statearr_22549_22590 = state_22532__$1;(statearr_22549_22590[2] = inst_22507);
(statearr_22549_22590[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 10))
{var inst_22474 = (state_22532[8]);var inst_22472 = (state_22532[9]);var inst_22473 = (state_22532[10]);var inst_22471 = (state_22532[11]);var inst_22479 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22472,inst_22474);var inst_22480 = cljs.core.async.muxch_STAR_(inst_22479);var inst_22481 = cljs.core.async.close_BANG_(inst_22480);var inst_22482 = (inst_22474 + 1);var tmp22544 = inst_22472;var tmp22545 = inst_22473;var tmp22546 = inst_22471;var inst_22471__$1 = tmp22546;var inst_22472__$1 = tmp22544;var inst_22473__$1 = tmp22545;var inst_22474__$1 = inst_22482;var state_22532__$1 = (function (){var statearr_22550 = state_22532;(statearr_22550[8] = inst_22474__$1);
(statearr_22550[9] = inst_22472__$1);
(statearr_22550[10] = inst_22473__$1);
(statearr_22550[11] = inst_22471__$1);
(statearr_22550[14] = inst_22481);
return statearr_22550;
})();var statearr_22551_22591 = state_22532__$1;(statearr_22551_22591[2] = null);
(statearr_22551_22591[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 11))
{var inst_22471 = (state_22532[11]);var inst_22485 = (state_22532[15]);var inst_22485__$1 = cljs.core.seq(inst_22471);var state_22532__$1 = (function (){var statearr_22552 = state_22532;(statearr_22552[15] = inst_22485__$1);
return statearr_22552;
})();if(inst_22485__$1)
{var statearr_22553_22592 = state_22532__$1;(statearr_22553_22592[1] = 13);
} else
{var statearr_22554_22593 = state_22532__$1;(statearr_22554_22593[1] = 14);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 12))
{var inst_22505 = (state_22532[2]);var state_22532__$1 = state_22532;var statearr_22555_22594 = state_22532__$1;(statearr_22555_22594[2] = inst_22505);
(statearr_22555_22594[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 13))
{var inst_22485 = (state_22532[15]);var inst_22487 = cljs.core.chunked_seq_QMARK_(inst_22485);var state_22532__$1 = state_22532;if(inst_22487)
{var statearr_22556_22595 = state_22532__$1;(statearr_22556_22595[1] = 16);
} else
{var statearr_22557_22596 = state_22532__$1;(statearr_22557_22596[1] = 17);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 14))
{var state_22532__$1 = state_22532;var statearr_22558_22597 = state_22532__$1;(statearr_22558_22597[2] = null);
(statearr_22558_22597[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 15))
{var inst_22503 = (state_22532[2]);var state_22532__$1 = state_22532;var statearr_22559_22598 = state_22532__$1;(statearr_22559_22598[2] = inst_22503);
(statearr_22559_22598[1] = 12);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 16))
{var inst_22485 = (state_22532[15]);var inst_22489 = cljs.core.chunk_first(inst_22485);var inst_22490 = cljs.core.chunk_rest(inst_22485);var inst_22491 = cljs.core.count(inst_22489);var inst_22471 = inst_22490;var inst_22472 = inst_22489;var inst_22473 = inst_22491;var inst_22474 = 0;var state_22532__$1 = (function (){var statearr_22560 = state_22532;(statearr_22560[8] = inst_22474);
(statearr_22560[9] = inst_22472);
(statearr_22560[10] = inst_22473);
(statearr_22560[11] = inst_22471);
return statearr_22560;
})();var statearr_22561_22599 = state_22532__$1;(statearr_22561_22599[2] = null);
(statearr_22561_22599[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 17))
{var inst_22485 = (state_22532[15]);var inst_22494 = cljs.core.first(inst_22485);var inst_22495 = cljs.core.async.muxch_STAR_(inst_22494);var inst_22496 = cljs.core.async.close_BANG_(inst_22495);var inst_22497 = cljs.core.next(inst_22485);var inst_22471 = inst_22497;var inst_22472 = null;var inst_22473 = 0;var inst_22474 = 0;var state_22532__$1 = (function (){var statearr_22562 = state_22532;(statearr_22562[8] = inst_22474);
(statearr_22562[9] = inst_22472);
(statearr_22562[10] = inst_22473);
(statearr_22562[11] = inst_22471);
(statearr_22562[16] = inst_22496);
return statearr_22562;
})();var statearr_22563_22600 = state_22532__$1;(statearr_22563_22600[2] = null);
(statearr_22563_22600[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 18))
{var inst_22500 = (state_22532[2]);var state_22532__$1 = state_22532;var statearr_22564_22601 = state_22532__$1;(statearr_22564_22601[2] = inst_22500);
(statearr_22564_22601[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 19))
{var state_22532__$1 = state_22532;var statearr_22565_22602 = state_22532__$1;(statearr_22565_22602[2] = null);
(statearr_22565_22602[1] = 24);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 20))
{var state_22532__$1 = state_22532;var statearr_22566_22603 = state_22532__$1;(statearr_22566_22603[2] = null);
(statearr_22566_22603[1] = 21);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 21))
{var inst_22525 = (state_22532[2]);var state_22532__$1 = (function (){var statearr_22567 = state_22532;(statearr_22567[17] = inst_22525);
return statearr_22567;
})();var statearr_22568_22604 = state_22532__$1;(statearr_22568_22604[2] = null);
(statearr_22568_22604[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 22))
{var inst_22522 = (state_22532[2]);var state_22532__$1 = state_22532;var statearr_22569_22605 = state_22532__$1;(statearr_22569_22605[2] = inst_22522);
(statearr_22569_22605[1] = 21);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 23))
{var inst_22509 = (state_22532[13]);var inst_22513 = (state_22532[2]);var inst_22514 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22509);var state_22532__$1 = (function (){var statearr_22570 = state_22532;(statearr_22570[18] = inst_22513);
return statearr_22570;
})();var statearr_22571_22606 = state_22532__$1;(statearr_22571_22606[2] = inst_22514);
cljs.core.async.impl.ioc_helpers.process_exception(state_22532__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22533 === 24))
{var inst_22461 = (state_22532[7]);var inst_22511 = (state_22532[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22532,23,Object,null,22);var inst_22518 = cljs.core.async.muxch_STAR_(inst_22511);var state_22532__$1 = state_22532;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22532__$1,25,inst_22518,inst_22461);
} else
{if((state_val_22533 === 25))
{var inst_22520 = (state_22532[2]);var state_22532__$1 = state_22532;var statearr_22572_22607 = state_22532__$1;(statearr_22572_22607[2] = inst_22520);
cljs.core.async.impl.ioc_helpers.process_exception(state_22532__$1);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22576[0] = state_machine__5507__auto__);
(statearr_22576[1] = 1);
return statearr_22576;
});
var state_machine__5507__auto____1 = (function (state_22532){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22532);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22577){if((e22577 instanceof Object))
{var ex__5510__auto__ = e22577;var statearr_22578_22608 = state_22532;(statearr_22578_22608[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22532);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22609 = state_22532;
state_22532 = G__22609;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22532){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22579 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22580);
return statearr_22579;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___22746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22716){var state_val_22717 = (state_22716[1]);if((state_val_22717 === 1))
{var state_22716__$1 = state_22716;var statearr_22718_22747 = state_22716__$1;(statearr_22718_22747[2] = null);
(statearr_22718_22747[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 2))
{var inst_22679 = cljs.core.reset_BANG_(dctr,cnt);var inst_22680 = 0;var state_22716__$1 = (function (){var statearr_22719 = state_22716;(statearr_22719[7] = inst_22680);
(statearr_22719[8] = inst_22679);
return statearr_22719;
})();var statearr_22720_22748 = state_22716__$1;(statearr_22720_22748[2] = null);
(statearr_22720_22748[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 3))
{var inst_22714 = (state_22716[2]);var state_22716__$1 = state_22716;return cljs.core.async.impl.ioc_helpers.return_chan(state_22716__$1,inst_22714);
} else
{if((state_val_22717 === 4))
{var inst_22680 = (state_22716[7]);var inst_22682 = (inst_22680 < cnt);var state_22716__$1 = state_22716;if(cljs.core.truth_(inst_22682))
{var statearr_22721_22749 = state_22716__$1;(statearr_22721_22749[1] = 6);
} else
{var statearr_22722_22750 = state_22716__$1;(statearr_22722_22750[1] = 7);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 5))
{var inst_22700 = (state_22716[2]);var state_22716__$1 = (function (){var statearr_22723 = state_22716;(statearr_22723[9] = inst_22700);
return statearr_22723;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22716__$1,12,dchan);
} else
{if((state_val_22717 === 6))
{var state_22716__$1 = state_22716;var statearr_22724_22751 = state_22716__$1;(statearr_22724_22751[2] = null);
(statearr_22724_22751[1] = 11);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 7))
{var state_22716__$1 = state_22716;var statearr_22725_22752 = state_22716__$1;(statearr_22725_22752[2] = null);
(statearr_22725_22752[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 8))
{var inst_22698 = (state_22716[2]);var state_22716__$1 = state_22716;var statearr_22726_22753 = state_22716__$1;(statearr_22726_22753[2] = inst_22698);
(statearr_22726_22753[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 9))
{var inst_22680 = (state_22716[7]);var inst_22693 = (state_22716[2]);var inst_22694 = (inst_22680 + 1);var inst_22680__$1 = inst_22694;var state_22716__$1 = (function (){var statearr_22727 = state_22716;(statearr_22727[7] = inst_22680__$1);
(statearr_22727[10] = inst_22693);
return statearr_22727;
})();var statearr_22728_22754 = state_22716__$1;(statearr_22728_22754[2] = null);
(statearr_22728_22754[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 10))
{var inst_22684 = (state_22716[2]);var inst_22685 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_22716__$1 = (function (){var statearr_22729 = state_22716;(statearr_22729[11] = inst_22684);
return statearr_22729;
})();var statearr_22730_22755 = state_22716__$1;(statearr_22730_22755[2] = inst_22685);
cljs.core.async.impl.ioc_helpers.process_exception(state_22716__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 11))
{var inst_22680 = (state_22716[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22716,10,Object,null,9);var inst_22689 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22680) : chs__$1.call(null,inst_22680));var inst_22690 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22680) : done.call(null,inst_22680));var inst_22691 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22689,inst_22690);var state_22716__$1 = state_22716;var statearr_22731_22756 = state_22716__$1;(statearr_22731_22756[2] = inst_22691);
cljs.core.async.impl.ioc_helpers.process_exception(state_22716__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 12))
{var inst_22702 = (state_22716[12]);var inst_22702__$1 = (state_22716[2]);var inst_22703 = cljs.core.some(cljs.core.nil_QMARK_,inst_22702__$1);var state_22716__$1 = (function (){var statearr_22732 = state_22716;(statearr_22732[12] = inst_22702__$1);
return statearr_22732;
})();if(cljs.core.truth_(inst_22703))
{var statearr_22733_22757 = state_22716__$1;(statearr_22733_22757[1] = 13);
} else
{var statearr_22734_22758 = state_22716__$1;(statearr_22734_22758[1] = 14);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 13))
{var inst_22705 = cljs.core.async.close_BANG_(out);var state_22716__$1 = state_22716;var statearr_22735_22759 = state_22716__$1;(statearr_22735_22759[2] = inst_22705);
(statearr_22735_22759[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 14))
{var inst_22702 = (state_22716[12]);var inst_22707 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22702);var state_22716__$1 = state_22716;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22716__$1,16,out,inst_22707);
} else
{if((state_val_22717 === 15))
{var inst_22712 = (state_22716[2]);var state_22716__$1 = state_22716;var statearr_22736_22760 = state_22716__$1;(statearr_22736_22760[2] = inst_22712);
(statearr_22736_22760[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22717 === 16))
{var inst_22709 = (state_22716[2]);var state_22716__$1 = (function (){var statearr_22737 = state_22716;(statearr_22737[13] = inst_22709);
return statearr_22737;
})();var statearr_22738_22761 = state_22716__$1;(statearr_22738_22761[2] = null);
(statearr_22738_22761[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22742[0] = state_machine__5507__auto__);
(statearr_22742[1] = 1);
return statearr_22742;
});
var state_machine__5507__auto____1 = (function (state_22716){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22716);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22743){if((e22743 instanceof Object))
{var ex__5510__auto__ = e22743;var statearr_22744_22762 = state_22716;(statearr_22744_22762[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22716);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22763 = state_22716;
state_22716 = G__22763;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22716){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22745 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22746);
return statearr_22745;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22847){var state_val_22848 = (state_22847[1]);if((state_val_22848 === 1))
{var inst_22818 = cljs.core.vec(chs);var inst_22819 = inst_22818;var state_22847__$1 = (function (){var statearr_22849 = state_22847;(statearr_22849[7] = inst_22819);
return statearr_22849;
})();var statearr_22850_22872 = state_22847__$1;(statearr_22850_22872[2] = null);
(statearr_22850_22872[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22848 === 2))
{var inst_22819 = (state_22847[7]);var inst_22821 = cljs.core.count(inst_22819);var inst_22822 = (inst_22821 > 0);var state_22847__$1 = state_22847;if(cljs.core.truth_(inst_22822))
{var statearr_22851_22873 = state_22847__$1;(statearr_22851_22873[1] = 4);
} else
{var statearr_22852_22874 = state_22847__$1;(statearr_22852_22874[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22848 === 3))
{var inst_22845 = (state_22847[2]);var state_22847__$1 = state_22847;return cljs.core.async.impl.ioc_helpers.return_chan(state_22847__$1,inst_22845);
} else
{if((state_val_22848 === 4))
{var inst_22819 = (state_22847[7]);var state_22847__$1 = state_22847;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22847__$1,7,inst_22819);
} else
{if((state_val_22848 === 5))
{var inst_22841 = cljs.core.async.close_BANG_(out);var state_22847__$1 = state_22847;var statearr_22853_22875 = state_22847__$1;(statearr_22853_22875[2] = inst_22841);
(statearr_22853_22875[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22848 === 6))
{var inst_22843 = (state_22847[2]);var state_22847__$1 = state_22847;var statearr_22854_22876 = state_22847__$1;(statearr_22854_22876[2] = inst_22843);
(statearr_22854_22876[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22848 === 7))
{var inst_22826 = (state_22847[8]);var inst_22827 = (state_22847[9]);var inst_22826__$1 = (state_22847[2]);var inst_22827__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22826__$1,0,null);var inst_22828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22826__$1,1,null);var inst_22829 = (inst_22827__$1 == null);var state_22847__$1 = (function (){var statearr_22855 = state_22847;(statearr_22855[8] = inst_22826__$1);
(statearr_22855[9] = inst_22827__$1);
(statearr_22855[10] = inst_22828);
return statearr_22855;
})();if(cljs.core.truth_(inst_22829))
{var statearr_22856_22877 = state_22847__$1;(statearr_22856_22877[1] = 8);
} else
{var statearr_22857_22878 = state_22847__$1;(statearr_22857_22878[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22848 === 8))
{var inst_22819 = (state_22847[7]);var inst_22826 = (state_22847[8]);var inst_22827 = (state_22847[9]);var inst_22828 = (state_22847[10]);var inst_22831 = (function (){var c = inst_22828;var v = inst_22827;var vec__22824 = inst_22826;var cs = inst_22819;return ((function (c,v,vec__22824,cs,inst_22819,inst_22826,inst_22827,inst_22828,state_val_22848){
return (function (p1__22764_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22764_SHARP_);
});
;})(c,v,vec__22824,cs,inst_22819,inst_22826,inst_22827,inst_22828,state_val_22848))
})();var inst_22832 = cljs.core.filterv(inst_22831,inst_22819);var inst_22819__$1 = inst_22832;var state_22847__$1 = (function (){var statearr_22858 = state_22847;(statearr_22858[7] = inst_22819__$1);
return statearr_22858;
})();var statearr_22859_22879 = state_22847__$1;(statearr_22859_22879[2] = null);
(statearr_22859_22879[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22848 === 9))
{var inst_22827 = (state_22847[9]);var state_22847__$1 = state_22847;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22847__$1,11,out,inst_22827);
} else
{if((state_val_22848 === 10))
{var inst_22839 = (state_22847[2]);var state_22847__$1 = state_22847;var statearr_22861_22880 = state_22847__$1;(statearr_22861_22880[2] = inst_22839);
(statearr_22861_22880[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22848 === 11))
{var inst_22819 = (state_22847[7]);var inst_22836 = (state_22847[2]);var tmp22860 = inst_22819;var inst_22819__$1 = tmp22860;var state_22847__$1 = (function (){var statearr_22862 = state_22847;(statearr_22862[11] = inst_22836);
(statearr_22862[7] = inst_22819__$1);
return statearr_22862;
})();var statearr_22863_22881 = state_22847__$1;(statearr_22863_22881[2] = null);
(statearr_22863_22881[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22867 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22867[0] = state_machine__5507__auto__);
(statearr_22867[1] = 1);
return statearr_22867;
});
var state_machine__5507__auto____1 = (function (state_22847){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22847);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22868){if((e22868 instanceof Object))
{var ex__5510__auto__ = e22868;var statearr_22869_22882 = state_22847;(statearr_22869_22882[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22847);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22868;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22883 = state_22847;
state_22847 = G__22883;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22847){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22870 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22871);
return statearr_22870;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22953){var state_val_22954 = (state_22953[1]);if((state_val_22954 === 1))
{var inst_22930 = 0;var state_22953__$1 = (function (){var statearr_22955 = state_22953;(statearr_22955[7] = inst_22930);
return statearr_22955;
})();var statearr_22956_22977 = state_22953__$1;(statearr_22956_22977[2] = null);
(statearr_22956_22977[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22954 === 2))
{var inst_22930 = (state_22953[7]);var inst_22932 = (inst_22930 < n);var state_22953__$1 = state_22953;if(cljs.core.truth_(inst_22932))
{var statearr_22957_22978 = state_22953__$1;(statearr_22957_22978[1] = 4);
} else
{var statearr_22958_22979 = state_22953__$1;(statearr_22958_22979[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22954 === 3))
{var inst_22950 = (state_22953[2]);var inst_22951 = cljs.core.async.close_BANG_(out);var state_22953__$1 = (function (){var statearr_22959 = state_22953;(statearr_22959[8] = inst_22950);
return statearr_22959;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22953__$1,inst_22951);
} else
{if((state_val_22954 === 4))
{var state_22953__$1 = state_22953;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22953__$1,7,ch);
} else
{if((state_val_22954 === 5))
{var state_22953__$1 = state_22953;var statearr_22960_22980 = state_22953__$1;(statearr_22960_22980[2] = null);
(statearr_22960_22980[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22954 === 6))
{var inst_22948 = (state_22953[2]);var state_22953__$1 = state_22953;var statearr_22961_22981 = state_22953__$1;(statearr_22961_22981[2] = inst_22948);
(statearr_22961_22981[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22954 === 7))
{var inst_22935 = (state_22953[9]);var inst_22935__$1 = (state_22953[2]);var inst_22936 = (inst_22935__$1 == null);var inst_22937 = cljs.core.not(inst_22936);var state_22953__$1 = (function (){var statearr_22962 = state_22953;(statearr_22962[9] = inst_22935__$1);
return statearr_22962;
})();if(inst_22937)
{var statearr_22963_22982 = state_22953__$1;(statearr_22963_22982[1] = 8);
} else
{var statearr_22964_22983 = state_22953__$1;(statearr_22964_22983[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22954 === 8))
{var inst_22935 = (state_22953[9]);var state_22953__$1 = state_22953;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22953__$1,11,out,inst_22935);
} else
{if((state_val_22954 === 9))
{var state_22953__$1 = state_22953;var statearr_22965_22984 = state_22953__$1;(statearr_22965_22984[2] = null);
(statearr_22965_22984[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22954 === 10))
{var inst_22945 = (state_22953[2]);var state_22953__$1 = state_22953;var statearr_22966_22985 = state_22953__$1;(statearr_22966_22985[2] = inst_22945);
(statearr_22966_22985[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22954 === 11))
{var inst_22930 = (state_22953[7]);var inst_22940 = (state_22953[2]);var inst_22941 = (inst_22930 + 1);var inst_22930__$1 = inst_22941;var state_22953__$1 = (function (){var statearr_22967 = state_22953;(statearr_22967[10] = inst_22940);
(statearr_22967[7] = inst_22930__$1);
return statearr_22967;
})();var statearr_22968_22986 = state_22953__$1;(statearr_22968_22986[2] = null);
(statearr_22968_22986[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22972 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22972[0] = state_machine__5507__auto__);
(statearr_22972[1] = 1);
return statearr_22972;
});
var state_machine__5507__auto____1 = (function (state_22953){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22953);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22973){if((e22973 instanceof Object))
{var ex__5510__auto__ = e22973;var statearr_22974_22987 = state_22953;(statearr_22974_22987[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22953);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22988 = state_22953;
state_22953 = G__22988;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22953){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22975 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22976);
return statearr_22975;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23060){var state_val_23061 = (state_23060[1]);if((state_val_23061 === 1))
{var inst_23037 = null;var state_23060__$1 = (function (){var statearr_23062 = state_23060;(statearr_23062[7] = inst_23037);
return statearr_23062;
})();var statearr_23063_23086 = state_23060__$1;(statearr_23063_23086[2] = null);
(statearr_23063_23086[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23061 === 2))
{var state_23060__$1 = state_23060;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23060__$1,4,ch);
} else
{if((state_val_23061 === 3))
{var inst_23057 = (state_23060[2]);var inst_23058 = cljs.core.async.close_BANG_(out);var state_23060__$1 = (function (){var statearr_23064 = state_23060;(statearr_23064[8] = inst_23057);
return statearr_23064;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23060__$1,inst_23058);
} else
{if((state_val_23061 === 4))
{var inst_23040 = (state_23060[9]);var inst_23040__$1 = (state_23060[2]);var inst_23041 = (inst_23040__$1 == null);var inst_23042 = cljs.core.not(inst_23041);var state_23060__$1 = (function (){var statearr_23065 = state_23060;(statearr_23065[9] = inst_23040__$1);
return statearr_23065;
})();if(inst_23042)
{var statearr_23066_23087 = state_23060__$1;(statearr_23066_23087[1] = 5);
} else
{var statearr_23067_23088 = state_23060__$1;(statearr_23067_23088[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23061 === 5))
{var inst_23037 = (state_23060[7]);var inst_23040 = (state_23060[9]);var inst_23044 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23040,inst_23037);var state_23060__$1 = state_23060;if(inst_23044)
{var statearr_23068_23089 = state_23060__$1;(statearr_23068_23089[1] = 8);
} else
{var statearr_23069_23090 = state_23060__$1;(statearr_23069_23090[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23061 === 6))
{var state_23060__$1 = state_23060;var statearr_23071_23091 = state_23060__$1;(statearr_23071_23091[2] = null);
(statearr_23071_23091[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23061 === 7))
{var inst_23055 = (state_23060[2]);var state_23060__$1 = state_23060;var statearr_23072_23092 = state_23060__$1;(statearr_23072_23092[2] = inst_23055);
(statearr_23072_23092[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23061 === 8))
{var inst_23037 = (state_23060[7]);var tmp23070 = inst_23037;var inst_23037__$1 = tmp23070;var state_23060__$1 = (function (){var statearr_23073 = state_23060;(statearr_23073[7] = inst_23037__$1);
return statearr_23073;
})();var statearr_23074_23093 = state_23060__$1;(statearr_23074_23093[2] = null);
(statearr_23074_23093[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23061 === 9))
{var inst_23040 = (state_23060[9]);var state_23060__$1 = state_23060;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23060__$1,11,out,inst_23040);
} else
{if((state_val_23061 === 10))
{var inst_23052 = (state_23060[2]);var state_23060__$1 = state_23060;var statearr_23075_23094 = state_23060__$1;(statearr_23075_23094[2] = inst_23052);
(statearr_23075_23094[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23061 === 11))
{var inst_23040 = (state_23060[9]);var inst_23049 = (state_23060[2]);var inst_23037 = inst_23040;var state_23060__$1 = (function (){var statearr_23076 = state_23060;(statearr_23076[10] = inst_23049);
(statearr_23076[7] = inst_23037);
return statearr_23076;
})();var statearr_23077_23095 = state_23060__$1;(statearr_23077_23095[2] = null);
(statearr_23077_23095[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_23081 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23081[0] = state_machine__5507__auto__);
(statearr_23081[1] = 1);
return statearr_23081;
});
var state_machine__5507__auto____1 = (function (state_23060){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23060);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23082){if((e23082 instanceof Object))
{var ex__5510__auto__ = e23082;var statearr_23083_23096 = state_23060;(statearr_23083_23096[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23060);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e23082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__23097 = state_23060;
state_23060 = G__23097;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23060){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23084 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23085);
return statearr_23084;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23202){var state_val_23203 = (state_23202[1]);if((state_val_23203 === 1))
{var inst_23165 = (new Array(n));var inst_23166 = inst_23165;var inst_23167 = 0;var state_23202__$1 = (function (){var statearr_23204 = state_23202;(statearr_23204[7] = inst_23167);
(statearr_23204[8] = inst_23166);
return statearr_23204;
})();var statearr_23205_23233 = state_23202__$1;(statearr_23205_23233[2] = null);
(statearr_23205_23233[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23203 === 2))
{var state_23202__$1 = state_23202;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23202__$1,4,ch);
} else
{if((state_val_23203 === 3))
{var inst_23200 = (state_23202[2]);var state_23202__$1 = state_23202;return cljs.core.async.impl.ioc_helpers.return_chan(state_23202__$1,inst_23200);
} else
{if((state_val_23203 === 4))
{var inst_23170 = (state_23202[9]);var inst_23170__$1 = (state_23202[2]);var inst_23171 = (inst_23170__$1 == null);var inst_23172 = cljs.core.not(inst_23171);var state_23202__$1 = (function (){var statearr_23206 = state_23202;(statearr_23206[9] = inst_23170__$1);
return statearr_23206;
})();if(inst_23172)
{var statearr_23207_23234 = state_23202__$1;(statearr_23207_23234[1] = 5);
} else
{var statearr_23208_23235 = state_23202__$1;(statearr_23208_23235[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23203 === 5))
{var inst_23167 = (state_23202[7]);var inst_23166 = (state_23202[8]);var inst_23175 = (state_23202[10]);var inst_23170 = (state_23202[9]);var inst_23174 = (inst_23166[inst_23167] = inst_23170);var inst_23175__$1 = (inst_23167 + 1);var inst_23176 = (inst_23175__$1 < n);var state_23202__$1 = (function (){var statearr_23209 = state_23202;(statearr_23209[11] = inst_23174);
(statearr_23209[10] = inst_23175__$1);
return statearr_23209;
})();if(cljs.core.truth_(inst_23176))
{var statearr_23210_23236 = state_23202__$1;(statearr_23210_23236[1] = 8);
} else
{var statearr_23211_23237 = state_23202__$1;(statearr_23211_23237[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23203 === 6))
{var inst_23167 = (state_23202[7]);var inst_23188 = (inst_23167 > 0);var state_23202__$1 = state_23202;if(cljs.core.truth_(inst_23188))
{var statearr_23213_23238 = state_23202__$1;(statearr_23213_23238[1] = 12);
} else
{var statearr_23214_23239 = state_23202__$1;(statearr_23214_23239[1] = 13);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23203 === 7))
{var inst_23198 = (state_23202[2]);var state_23202__$1 = state_23202;var statearr_23215_23240 = state_23202__$1;(statearr_23215_23240[2] = inst_23198);
(statearr_23215_23240[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23203 === 8))
{var inst_23166 = (state_23202[8]);var inst_23175 = (state_23202[10]);var tmp23212 = inst_23166;var inst_23166__$1 = tmp23212;var inst_23167 = inst_23175;var state_23202__$1 = (function (){var statearr_23216 = state_23202;(statearr_23216[7] = inst_23167);
(statearr_23216[8] = inst_23166__$1);
return statearr_23216;
})();var statearr_23217_23241 = state_23202__$1;(statearr_23217_23241[2] = null);
(statearr_23217_23241[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23203 === 9))
{var inst_23166 = (state_23202[8]);var inst_23180 = cljs.core.vec(inst_23166);var state_23202__$1 = state_23202;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23202__$1,11,out,inst_23180);
} else
{if((state_val_23203 === 10))
{var inst_23186 = (state_23202[2]);var state_23202__$1 = state_23202;var statearr_23218_23242 = state_23202__$1;(statearr_23218_23242[2] = inst_23186);
(statearr_23218_23242[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23203 === 11))
{var inst_23182 = (state_23202[2]);var inst_23183 = (new Array(n));var inst_23166 = inst_23183;var inst_23167 = 0;var state_23202__$1 = (function (){var statearr_23219 = state_23202;(statearr_23219[7] = inst_23167);
(statearr_23219[8] = inst_23166);
(statearr_23219[12] = inst_23182);
return statearr_23219;
})();var statearr_23220_23243 = state_23202__$1;(statearr_23220_23243[2] = null);
(statearr_23220_23243[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23203 === 12))
{var inst_23166 = (state_23202[8]);var inst_23190 = cljs.core.vec(inst_23166);var state_23202__$1 = state_23202;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23202__$1,15,out,inst_23190);
} else
{if((state_val_23203 === 13))
{var state_23202__$1 = state_23202;var statearr_23221_23244 = state_23202__$1;(statearr_23221_23244[2] = null);
(statearr_23221_23244[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23203 === 14))
{var inst_23195 = (state_23202[2]);var inst_23196 = cljs.core.async.close_BANG_(out);var state_23202__$1 = (function (){var statearr_23222 = state_23202;(statearr_23222[13] = inst_23195);
return statearr_23222;
})();var statearr_23223_23245 = state_23202__$1;(statearr_23223_23245[2] = inst_23196);
(statearr_23223_23245[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23203 === 15))
{var inst_23192 = (state_23202[2]);var state_23202__$1 = state_23202;var statearr_23224_23246 = state_23202__$1;(statearr_23224_23246[2] = inst_23192);
(statearr_23224_23246[1] = 14);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_23228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23228[0] = state_machine__5507__auto__);
(statearr_23228[1] = 1);
return statearr_23228;
});
var state_machine__5507__auto____1 = (function (state_23202){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23202);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23229){if((e23229 instanceof Object))
{var ex__5510__auto__ = e23229;var statearr_23230_23247 = state_23202;(statearr_23230_23247[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23202);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e23229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__23248 = state_23202;
state_23202 = G__23248;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23202){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23231 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23232);
return statearr_23231;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23361){var state_val_23362 = (state_23361[1]);if((state_val_23362 === 1))
{var inst_23320 = [];var inst_23321 = inst_23320;var inst_23322 = cljs.core.constant$keyword$136;var state_23361__$1 = (function (){var statearr_23363 = state_23361;(statearr_23363[7] = inst_23322);
(statearr_23363[8] = inst_23321);
return statearr_23363;
})();var statearr_23364_23392 = state_23361__$1;(statearr_23364_23392[2] = null);
(statearr_23364_23392[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23362 === 2))
{var state_23361__$1 = state_23361;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23361__$1,4,ch);
} else
{if((state_val_23362 === 3))
{var inst_23359 = (state_23361[2]);var state_23361__$1 = state_23361;return cljs.core.async.impl.ioc_helpers.return_chan(state_23361__$1,inst_23359);
} else
{if((state_val_23362 === 4))
{var inst_23325 = (state_23361[9]);var inst_23325__$1 = (state_23361[2]);var inst_23326 = (inst_23325__$1 == null);var inst_23327 = cljs.core.not(inst_23326);var state_23361__$1 = (function (){var statearr_23365 = state_23361;(statearr_23365[9] = inst_23325__$1);
return statearr_23365;
})();if(inst_23327)
{var statearr_23366_23393 = state_23361__$1;(statearr_23366_23393[1] = 5);
} else
{var statearr_23367_23394 = state_23361__$1;(statearr_23367_23394[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23362 === 5))
{var inst_23329 = (state_23361[10]);var inst_23322 = (state_23361[7]);var inst_23325 = (state_23361[9]);var inst_23329__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23325) : f.call(null,inst_23325));var inst_23330 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23329__$1,inst_23322);var inst_23331 = cljs.core.keyword_identical_QMARK_(inst_23322,cljs.core.constant$keyword$136);var inst_23332 = (inst_23330) || (inst_23331);var state_23361__$1 = (function (){var statearr_23368 = state_23361;(statearr_23368[10] = inst_23329__$1);
return statearr_23368;
})();if(cljs.core.truth_(inst_23332))
{var statearr_23369_23395 = state_23361__$1;(statearr_23369_23395[1] = 8);
} else
{var statearr_23370_23396 = state_23361__$1;(statearr_23370_23396[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23362 === 6))
{var inst_23321 = (state_23361[8]);var inst_23346 = inst_23321.length;var inst_23347 = (inst_23346 > 0);var state_23361__$1 = state_23361;if(cljs.core.truth_(inst_23347))
{var statearr_23372_23397 = state_23361__$1;(statearr_23372_23397[1] = 12);
} else
{var statearr_23373_23398 = state_23361__$1;(statearr_23373_23398[1] = 13);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23362 === 7))
{var inst_23357 = (state_23361[2]);var state_23361__$1 = state_23361;var statearr_23374_23399 = state_23361__$1;(statearr_23374_23399[2] = inst_23357);
(statearr_23374_23399[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23362 === 8))
{var inst_23329 = (state_23361[10]);var inst_23321 = (state_23361[8]);var inst_23325 = (state_23361[9]);var inst_23334 = inst_23321.push(inst_23325);var tmp23371 = inst_23321;var inst_23321__$1 = tmp23371;var inst_23322 = inst_23329;var state_23361__$1 = (function (){var statearr_23375 = state_23361;(statearr_23375[7] = inst_23322);
(statearr_23375[8] = inst_23321__$1);
(statearr_23375[11] = inst_23334);
return statearr_23375;
})();var statearr_23376_23400 = state_23361__$1;(statearr_23376_23400[2] = null);
(statearr_23376_23400[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23362 === 9))
{var inst_23321 = (state_23361[8]);var inst_23337 = cljs.core.vec(inst_23321);var state_23361__$1 = state_23361;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23361__$1,11,out,inst_23337);
} else
{if((state_val_23362 === 10))
{var inst_23344 = (state_23361[2]);var state_23361__$1 = state_23361;var statearr_23377_23401 = state_23361__$1;(statearr_23377_23401[2] = inst_23344);
(statearr_23377_23401[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23362 === 11))
{var inst_23329 = (state_23361[10]);var inst_23325 = (state_23361[9]);var inst_23339 = (state_23361[2]);var inst_23340 = [];var inst_23341 = inst_23340.push(inst_23325);var inst_23321 = inst_23340;var inst_23322 = inst_23329;var state_23361__$1 = (function (){var statearr_23378 = state_23361;(statearr_23378[7] = inst_23322);
(statearr_23378[8] = inst_23321);
(statearr_23378[12] = inst_23339);
(statearr_23378[13] = inst_23341);
return statearr_23378;
})();var statearr_23379_23402 = state_23361__$1;(statearr_23379_23402[2] = null);
(statearr_23379_23402[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23362 === 12))
{var inst_23321 = (state_23361[8]);var inst_23349 = cljs.core.vec(inst_23321);var state_23361__$1 = state_23361;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23361__$1,15,out,inst_23349);
} else
{if((state_val_23362 === 13))
{var state_23361__$1 = state_23361;var statearr_23380_23403 = state_23361__$1;(statearr_23380_23403[2] = null);
(statearr_23380_23403[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23362 === 14))
{var inst_23354 = (state_23361[2]);var inst_23355 = cljs.core.async.close_BANG_(out);var state_23361__$1 = (function (){var statearr_23381 = state_23361;(statearr_23381[14] = inst_23354);
return statearr_23381;
})();var statearr_23382_23404 = state_23361__$1;(statearr_23382_23404[2] = inst_23355);
(statearr_23382_23404[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23362 === 15))
{var inst_23351 = (state_23361[2]);var state_23361__$1 = state_23361;var statearr_23383_23405 = state_23361__$1;(statearr_23383_23405[2] = inst_23351);
(statearr_23383_23405[1] = 14);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_23387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23387[0] = state_machine__5507__auto__);
(statearr_23387[1] = 1);
return statearr_23387;
});
var state_machine__5507__auto____1 = (function (state_23361){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23361);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23388){if((e23388 instanceof Object))
{var ex__5510__auto__ = e23388;var statearr_23389_23406 = state_23361;(statearr_23389_23406[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23361);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e23388;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__23407 = state_23361;
state_23361 = G__23407;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23361){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23390 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23391);
return statearr_23390;
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
