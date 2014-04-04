// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t35799 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35799 = (function (f,fn_handler,meta35800){
this.f = f;
this.fn_handler = fn_handler;
this.meta35800 = meta35800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35799.cljs$lang$type = true;
cljs.core.async.t35799.cljs$lang$ctorStr = "cljs.core.async/t35799";
cljs.core.async.t35799.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35799");
});
cljs.core.async.t35799.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t35799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t35799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35801){var self__ = this;
var _35801__$1 = this;return self__.meta35800;
});
cljs.core.async.t35799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35801,meta35800__$1){var self__ = this;
var _35801__$1 = this;return (new cljs.core.async.t35799(self__.f,self__.fn_handler,meta35800__$1));
});
cljs.core.async.__GT_t35799 = (function __GT_t35799(f__$1,fn_handler__$1,meta35800){return (new cljs.core.async.t35799(f__$1,fn_handler__$1,meta35800));
});
}
return (new cljs.core.async.t35799(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__35803 = buff;if(G__35803)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__35803.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__35803.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__35803);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__35803);
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
{var val_35804 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35804) : fn1.call(null,val_35804));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35804) : fn1.call(null,val_35804));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___35805 = n;var x_35806 = 0;while(true){
if((x_35806 < n__4289__auto___35805))
{(a[x_35806] = 0);
{
var G__35807 = (x_35806 + 1);
x_35806 = G__35807;
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
var G__35808 = (i + 1);
i = G__35808;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t35812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35812 = (function (flag,alt_flag,meta35813){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta35813 = meta35813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35812.cljs$lang$type = true;
cljs.core.async.t35812.cljs$lang$ctorStr = "cljs.core.async/t35812";
cljs.core.async.t35812.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35812");
});
cljs.core.async.t35812.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t35812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t35812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35814){var self__ = this;
var _35814__$1 = this;return self__.meta35813;
});
cljs.core.async.t35812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35814,meta35813__$1){var self__ = this;
var _35814__$1 = this;return (new cljs.core.async.t35812(self__.flag,self__.alt_flag,meta35813__$1));
});
cljs.core.async.__GT_t35812 = (function __GT_t35812(flag__$1,alt_flag__$1,meta35813){return (new cljs.core.async.t35812(flag__$1,alt_flag__$1,meta35813));
});
}
return (new cljs.core.async.t35812(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t35818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35818 = (function (cb,flag,alt_handler,meta35819){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta35819 = meta35819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35818.cljs$lang$type = true;
cljs.core.async.t35818.cljs$lang$ctorStr = "cljs.core.async/t35818";
cljs.core.async.t35818.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35818");
});
cljs.core.async.t35818.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t35818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t35818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35820){var self__ = this;
var _35820__$1 = this;return self__.meta35819;
});
cljs.core.async.t35818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35820,meta35819__$1){var self__ = this;
var _35820__$1 = this;return (new cljs.core.async.t35818(self__.cb,self__.flag,self__.alt_handler,meta35819__$1));
});
cljs.core.async.__GT_t35818 = (function __GT_t35818(cb__$1,flag__$1,alt_handler__$1,meta35819){return (new cljs.core.async.t35818(cb__$1,flag__$1,alt_handler__$1,meta35819));
});
}
return (new cljs.core.async.t35818(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$559.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35821_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35821_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35821_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__35822 = (i + 1);
i = G__35822;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$543))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3429__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3429__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$543.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$543], null));
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
var alts_BANG___delegate = function (ports,p__35823){var map__35825 = p__35823;var map__35825__$1 = ((cljs.core.seq_QMARK_(map__35825))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35825):map__35825);var opts = map__35825__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__35823 = null;if (arguments.length > 1) {
  p__35823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__35823);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__35826){
var ports = cljs.core.first(arglist__35826);
var p__35823 = cljs.core.rest(arglist__35826);
return alts_BANG___delegate(ports,p__35823);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t35834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35834 = (function (ch,f,map_LT_,meta35835){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35835 = meta35835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35834.cljs$lang$type = true;
cljs.core.async.t35834.cljs$lang$ctorStr = "cljs.core.async/t35834";
cljs.core.async.t35834.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35834");
});
cljs.core.async.t35834.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t35834.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t35837 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35837 = (function (fn1,_,meta35835,ch,f,map_LT_,meta35838){
this.fn1 = fn1;
this._ = _;
this.meta35835 = meta35835;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35838 = meta35838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35837.cljs$lang$type = true;
cljs.core.async.t35837.cljs$lang$ctorStr = "cljs.core.async/t35837";
cljs.core.async.t35837.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35837");
});
cljs.core.async.t35837.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t35837.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t35837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__35827_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__35827_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35827_SHARP_) : self__.f.call(null,p1__35827_SHARP_)))) : f1.call(null,(((p1__35827_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35827_SHARP_) : self__.f.call(null,p1__35827_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t35837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35839){var self__ = this;
var _35839__$1 = this;return self__.meta35838;
});
cljs.core.async.t35837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35839,meta35838__$1){var self__ = this;
var _35839__$1 = this;return (new cljs.core.async.t35837(self__.fn1,self__._,self__.meta35835,self__.ch,self__.f,self__.map_LT_,meta35838__$1));
});
cljs.core.async.__GT_t35837 = (function __GT_t35837(fn1__$1,___$2,meta35835__$1,ch__$2,f__$2,map_LT___$2,meta35838){return (new cljs.core.async.t35837(fn1__$1,___$2,meta35835__$1,ch__$2,f__$2,map_LT___$2,meta35838));
});
}
return (new cljs.core.async.t35837(fn1,___$1,self__.meta35835,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t35834.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t35834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35836){var self__ = this;
var _35836__$1 = this;return self__.meta35835;
});
cljs.core.async.t35834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35836,meta35835__$1){var self__ = this;
var _35836__$1 = this;return (new cljs.core.async.t35834(self__.ch,self__.f,self__.map_LT_,meta35835__$1));
});
cljs.core.async.__GT_t35834 = (function __GT_t35834(ch__$1,f__$1,map_LT___$1,meta35835){return (new cljs.core.async.t35834(ch__$1,f__$1,map_LT___$1,meta35835));
});
}
return (new cljs.core.async.t35834(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t35843 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35843 = (function (ch,f,map_GT_,meta35844){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta35844 = meta35844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35843.cljs$lang$type = true;
cljs.core.async.t35843.cljs$lang$ctorStr = "cljs.core.async/t35843";
cljs.core.async.t35843.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35843");
});
cljs.core.async.t35843.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t35843.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t35843.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t35843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35845){var self__ = this;
var _35845__$1 = this;return self__.meta35844;
});
cljs.core.async.t35843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35845,meta35844__$1){var self__ = this;
var _35845__$1 = this;return (new cljs.core.async.t35843(self__.ch,self__.f,self__.map_GT_,meta35844__$1));
});
cljs.core.async.__GT_t35843 = (function __GT_t35843(ch__$1,f__$1,map_GT___$1,meta35844){return (new cljs.core.async.t35843(ch__$1,f__$1,map_GT___$1,meta35844));
});
}
return (new cljs.core.async.t35843(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t35849 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35849 = (function (ch,p,filter_GT_,meta35850){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta35850 = meta35850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35849.cljs$lang$type = true;
cljs.core.async.t35849.cljs$lang$ctorStr = "cljs.core.async/t35849";
cljs.core.async.t35849.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35849");
});
cljs.core.async.t35849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t35849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t35849.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t35849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35851){var self__ = this;
var _35851__$1 = this;return self__.meta35850;
});
cljs.core.async.t35849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35851,meta35850__$1){var self__ = this;
var _35851__$1 = this;return (new cljs.core.async.t35849(self__.ch,self__.p,self__.filter_GT_,meta35850__$1));
});
cljs.core.async.__GT_t35849 = (function __GT_t35849(ch__$1,p__$1,filter_GT___$1,meta35850){return (new cljs.core.async.t35849(ch__$1,p__$1,filter_GT___$1,meta35850));
});
}
return (new cljs.core.async.t35849(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___35934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_35913){var state_val_35914 = (state_35913[1]);if((state_val_35914 === 1))
{var state_35913__$1 = state_35913;var statearr_35915_35935 = state_35913__$1;(statearr_35915_35935[2] = null);
(statearr_35915_35935[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_35914 === 2))
{var state_35913__$1 = state_35913;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35913__$1,4,ch);
} else
{if((state_val_35914 === 3))
{var inst_35911 = (state_35913[2]);var state_35913__$1 = state_35913;return cljs.core.async.impl.ioc_helpers.return_chan(state_35913__$1,inst_35911);
} else
{if((state_val_35914 === 4))
{var inst_35895 = (state_35913[7]);var inst_35895__$1 = (state_35913[2]);var inst_35896 = (inst_35895__$1 == null);var state_35913__$1 = (function (){var statearr_35916 = state_35913;(statearr_35916[7] = inst_35895__$1);
return statearr_35916;
})();if(cljs.core.truth_(inst_35896))
{var statearr_35917_35936 = state_35913__$1;(statearr_35917_35936[1] = 5);
} else
{var statearr_35918_35937 = state_35913__$1;(statearr_35918_35937[1] = 6);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_35914 === 5))
{var inst_35898 = cljs.core.async.close_BANG_(out);var state_35913__$1 = state_35913;var statearr_35919_35938 = state_35913__$1;(statearr_35919_35938[2] = inst_35898);
(statearr_35919_35938[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_35914 === 6))
{var inst_35895 = (state_35913[7]);var inst_35900 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35895) : p.call(null,inst_35895));var state_35913__$1 = state_35913;if(cljs.core.truth_(inst_35900))
{var statearr_35920_35939 = state_35913__$1;(statearr_35920_35939[1] = 8);
} else
{var statearr_35921_35940 = state_35913__$1;(statearr_35921_35940[1] = 9);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_35914 === 7))
{var inst_35909 = (state_35913[2]);var state_35913__$1 = state_35913;var statearr_35922_35941 = state_35913__$1;(statearr_35922_35941[2] = inst_35909);
(statearr_35922_35941[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_35914 === 8))
{var inst_35895 = (state_35913[7]);var state_35913__$1 = state_35913;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35913__$1,11,out,inst_35895);
} else
{if((state_val_35914 === 9))
{var state_35913__$1 = state_35913;var statearr_35923_35942 = state_35913__$1;(statearr_35923_35942[2] = null);
(statearr_35923_35942[1] = 10);
return cljs.core.constant$keyword$553;
} else
{if((state_val_35914 === 10))
{var inst_35906 = (state_35913[2]);var state_35913__$1 = (function (){var statearr_35924 = state_35913;(statearr_35924[8] = inst_35906);
return statearr_35924;
})();var statearr_35925_35943 = state_35913__$1;(statearr_35925_35943[2] = null);
(statearr_35925_35943[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_35914 === 11))
{var inst_35903 = (state_35913[2]);var state_35913__$1 = state_35913;var statearr_35926_35944 = state_35913__$1;(statearr_35926_35944[2] = inst_35903);
(statearr_35926_35944[1] = 10);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_35930 = [null,null,null,null,null,null,null,null,null];(statearr_35930[0] = state_machine__5548__auto__);
(statearr_35930[1] = 1);
return statearr_35930;
});
var state_machine__5548__auto____1 = (function (state_35913){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_35913);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e35931){if((e35931 instanceof Object))
{var ex__5551__auto__ = e35931;var statearr_35932_35945 = state_35913;(statearr_35932_35945[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35913);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e35931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__35946 = state_35913;
state_35913 = G__35946;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_35913){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_35913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_35933 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_35933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___35934);
return statearr_35933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36098){var state_val_36099 = (state_36098[1]);if((state_val_36099 === 1))
{var state_36098__$1 = state_36098;var statearr_36100_36137 = state_36098__$1;(statearr_36100_36137[2] = null);
(statearr_36100_36137[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 2))
{var state_36098__$1 = state_36098;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36098__$1,4,in$);
} else
{if((state_val_36099 === 3))
{var inst_36096 = (state_36098[2]);var state_36098__$1 = state_36098;return cljs.core.async.impl.ioc_helpers.return_chan(state_36098__$1,inst_36096);
} else
{if((state_val_36099 === 4))
{var inst_36044 = (state_36098[7]);var inst_36044__$1 = (state_36098[2]);var inst_36045 = (inst_36044__$1 == null);var state_36098__$1 = (function (){var statearr_36101 = state_36098;(statearr_36101[7] = inst_36044__$1);
return statearr_36101;
})();if(cljs.core.truth_(inst_36045))
{var statearr_36102_36138 = state_36098__$1;(statearr_36102_36138[1] = 5);
} else
{var statearr_36103_36139 = state_36098__$1;(statearr_36103_36139[1] = 6);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 5))
{var inst_36047 = cljs.core.async.close_BANG_(out);var state_36098__$1 = state_36098;var statearr_36104_36140 = state_36098__$1;(statearr_36104_36140[2] = inst_36047);
(statearr_36104_36140[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 6))
{var inst_36044 = (state_36098[7]);var inst_36049 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36044) : f.call(null,inst_36044));var inst_36054 = cljs.core.seq(inst_36049);var inst_36055 = inst_36054;var inst_36056 = null;var inst_36057 = 0;var inst_36058 = 0;var state_36098__$1 = (function (){var statearr_36105 = state_36098;(statearr_36105[8] = inst_36057);
(statearr_36105[9] = inst_36058);
(statearr_36105[10] = inst_36055);
(statearr_36105[11] = inst_36056);
return statearr_36105;
})();var statearr_36106_36141 = state_36098__$1;(statearr_36106_36141[2] = null);
(statearr_36106_36141[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 7))
{var inst_36094 = (state_36098[2]);var state_36098__$1 = state_36098;var statearr_36107_36142 = state_36098__$1;(statearr_36107_36142[2] = inst_36094);
(statearr_36107_36142[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 8))
{var inst_36057 = (state_36098[8]);var inst_36058 = (state_36098[9]);var inst_36060 = (inst_36058 < inst_36057);var inst_36061 = inst_36060;var state_36098__$1 = state_36098;if(cljs.core.truth_(inst_36061))
{var statearr_36108_36143 = state_36098__$1;(statearr_36108_36143[1] = 10);
} else
{var statearr_36109_36144 = state_36098__$1;(statearr_36109_36144[1] = 11);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 9))
{var inst_36091 = (state_36098[2]);var state_36098__$1 = (function (){var statearr_36110 = state_36098;(statearr_36110[12] = inst_36091);
return statearr_36110;
})();var statearr_36111_36145 = state_36098__$1;(statearr_36111_36145[2] = null);
(statearr_36111_36145[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 10))
{var inst_36058 = (state_36098[9]);var inst_36056 = (state_36098[11]);var inst_36063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36056,inst_36058);var state_36098__$1 = state_36098;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36098__$1,13,out,inst_36063);
} else
{if((state_val_36099 === 11))
{var inst_36069 = (state_36098[13]);var inst_36055 = (state_36098[10]);var inst_36069__$1 = cljs.core.seq(inst_36055);var state_36098__$1 = (function (){var statearr_36115 = state_36098;(statearr_36115[13] = inst_36069__$1);
return statearr_36115;
})();if(inst_36069__$1)
{var statearr_36116_36146 = state_36098__$1;(statearr_36116_36146[1] = 14);
} else
{var statearr_36117_36147 = state_36098__$1;(statearr_36117_36147[1] = 15);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 12))
{var inst_36089 = (state_36098[2]);var state_36098__$1 = state_36098;var statearr_36118_36148 = state_36098__$1;(statearr_36118_36148[2] = inst_36089);
(statearr_36118_36148[1] = 9);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 13))
{var inst_36057 = (state_36098[8]);var inst_36058 = (state_36098[9]);var inst_36055 = (state_36098[10]);var inst_36056 = (state_36098[11]);var inst_36065 = (state_36098[2]);var inst_36066 = (inst_36058 + 1);var tmp36112 = inst_36057;var tmp36113 = inst_36055;var tmp36114 = inst_36056;var inst_36055__$1 = tmp36113;var inst_36056__$1 = tmp36114;var inst_36057__$1 = tmp36112;var inst_36058__$1 = inst_36066;var state_36098__$1 = (function (){var statearr_36119 = state_36098;(statearr_36119[14] = inst_36065);
(statearr_36119[8] = inst_36057__$1);
(statearr_36119[9] = inst_36058__$1);
(statearr_36119[10] = inst_36055__$1);
(statearr_36119[11] = inst_36056__$1);
return statearr_36119;
})();var statearr_36120_36149 = state_36098__$1;(statearr_36120_36149[2] = null);
(statearr_36120_36149[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 14))
{var inst_36069 = (state_36098[13]);var inst_36071 = cljs.core.chunked_seq_QMARK_(inst_36069);var state_36098__$1 = state_36098;if(inst_36071)
{var statearr_36121_36150 = state_36098__$1;(statearr_36121_36150[1] = 17);
} else
{var statearr_36122_36151 = state_36098__$1;(statearr_36122_36151[1] = 18);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 15))
{var state_36098__$1 = state_36098;var statearr_36123_36152 = state_36098__$1;(statearr_36123_36152[2] = null);
(statearr_36123_36152[1] = 16);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 16))
{var inst_36087 = (state_36098[2]);var state_36098__$1 = state_36098;var statearr_36124_36153 = state_36098__$1;(statearr_36124_36153[2] = inst_36087);
(statearr_36124_36153[1] = 12);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 17))
{var inst_36069 = (state_36098[13]);var inst_36073 = cljs.core.chunk_first(inst_36069);var inst_36074 = cljs.core.chunk_rest(inst_36069);var inst_36075 = cljs.core.count(inst_36073);var inst_36055 = inst_36074;var inst_36056 = inst_36073;var inst_36057 = inst_36075;var inst_36058 = 0;var state_36098__$1 = (function (){var statearr_36125 = state_36098;(statearr_36125[8] = inst_36057);
(statearr_36125[9] = inst_36058);
(statearr_36125[10] = inst_36055);
(statearr_36125[11] = inst_36056);
return statearr_36125;
})();var statearr_36126_36154 = state_36098__$1;(statearr_36126_36154[2] = null);
(statearr_36126_36154[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 18))
{var inst_36069 = (state_36098[13]);var inst_36078 = cljs.core.first(inst_36069);var state_36098__$1 = state_36098;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36098__$1,20,out,inst_36078);
} else
{if((state_val_36099 === 19))
{var inst_36084 = (state_36098[2]);var state_36098__$1 = state_36098;var statearr_36127_36155 = state_36098__$1;(statearr_36127_36155[2] = inst_36084);
(statearr_36127_36155[1] = 16);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36099 === 20))
{var inst_36069 = (state_36098[13]);var inst_36080 = (state_36098[2]);var inst_36081 = cljs.core.next(inst_36069);var inst_36055 = inst_36081;var inst_36056 = null;var inst_36057 = 0;var inst_36058 = 0;var state_36098__$1 = (function (){var statearr_36128 = state_36098;(statearr_36128[15] = inst_36080);
(statearr_36128[8] = inst_36057);
(statearr_36128[9] = inst_36058);
(statearr_36128[10] = inst_36055);
(statearr_36128[11] = inst_36056);
return statearr_36128;
})();var statearr_36129_36156 = state_36098__$1;(statearr_36129_36156[2] = null);
(statearr_36129_36156[1] = 8);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36133[0] = state_machine__5548__auto__);
(statearr_36133[1] = 1);
return statearr_36133;
});
var state_machine__5548__auto____1 = (function (state_36098){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36098);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36134){if((e36134 instanceof Object))
{var ex__5551__auto__ = e36134;var statearr_36135_36157 = state_36098;(statearr_36135_36157[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36098);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e36134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__36158 = state_36098;
state_36098 = G__36158;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36098){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36136 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___36239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36218){var state_val_36219 = (state_36218[1]);if((state_val_36219 === 1))
{var state_36218__$1 = state_36218;var statearr_36220_36240 = state_36218__$1;(statearr_36220_36240[2] = null);
(statearr_36220_36240[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36219 === 2))
{var state_36218__$1 = state_36218;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36218__$1,4,from);
} else
{if((state_val_36219 === 3))
{var inst_36216 = (state_36218[2]);var state_36218__$1 = state_36218;return cljs.core.async.impl.ioc_helpers.return_chan(state_36218__$1,inst_36216);
} else
{if((state_val_36219 === 4))
{var inst_36201 = (state_36218[7]);var inst_36201__$1 = (state_36218[2]);var inst_36202 = (inst_36201__$1 == null);var state_36218__$1 = (function (){var statearr_36221 = state_36218;(statearr_36221[7] = inst_36201__$1);
return statearr_36221;
})();if(cljs.core.truth_(inst_36202))
{var statearr_36222_36241 = state_36218__$1;(statearr_36222_36241[1] = 5);
} else
{var statearr_36223_36242 = state_36218__$1;(statearr_36223_36242[1] = 6);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36219 === 5))
{var state_36218__$1 = state_36218;if(cljs.core.truth_(close_QMARK_))
{var statearr_36224_36243 = state_36218__$1;(statearr_36224_36243[1] = 8);
} else
{var statearr_36225_36244 = state_36218__$1;(statearr_36225_36244[1] = 9);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36219 === 6))
{var inst_36201 = (state_36218[7]);var state_36218__$1 = state_36218;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36218__$1,11,to,inst_36201);
} else
{if((state_val_36219 === 7))
{var inst_36214 = (state_36218[2]);var state_36218__$1 = state_36218;var statearr_36226_36245 = state_36218__$1;(statearr_36226_36245[2] = inst_36214);
(statearr_36226_36245[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36219 === 8))
{var inst_36205 = cljs.core.async.close_BANG_(to);var state_36218__$1 = state_36218;var statearr_36227_36246 = state_36218__$1;(statearr_36227_36246[2] = inst_36205);
(statearr_36227_36246[1] = 10);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36219 === 9))
{var state_36218__$1 = state_36218;var statearr_36228_36247 = state_36218__$1;(statearr_36228_36247[2] = null);
(statearr_36228_36247[1] = 10);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36219 === 10))
{var inst_36208 = (state_36218[2]);var state_36218__$1 = state_36218;var statearr_36229_36248 = state_36218__$1;(statearr_36229_36248[2] = inst_36208);
(statearr_36229_36248[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36219 === 11))
{var inst_36211 = (state_36218[2]);var state_36218__$1 = (function (){var statearr_36230 = state_36218;(statearr_36230[8] = inst_36211);
return statearr_36230;
})();var statearr_36231_36249 = state_36218__$1;(statearr_36231_36249[2] = null);
(statearr_36231_36249[1] = 2);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36235 = [null,null,null,null,null,null,null,null,null];(statearr_36235[0] = state_machine__5548__auto__);
(statearr_36235[1] = 1);
return statearr_36235;
});
var state_machine__5548__auto____1 = (function (state_36218){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36218);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36236){if((e36236 instanceof Object))
{var ex__5551__auto__ = e36236;var statearr_36237_36250 = state_36218;(statearr_36237_36250[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36218);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e36236;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__36251 = state_36218;
state_36218 = G__36251;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36218){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36238 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36239);
return statearr_36238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5562__auto___36338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36316){var state_val_36317 = (state_36316[1]);if((state_val_36317 === 1))
{var state_36316__$1 = state_36316;var statearr_36318_36339 = state_36316__$1;(statearr_36318_36339[2] = null);
(statearr_36318_36339[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36317 === 2))
{var state_36316__$1 = state_36316;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36316__$1,4,ch);
} else
{if((state_val_36317 === 3))
{var inst_36314 = (state_36316[2]);var state_36316__$1 = state_36316;return cljs.core.async.impl.ioc_helpers.return_chan(state_36316__$1,inst_36314);
} else
{if((state_val_36317 === 4))
{var inst_36297 = (state_36316[7]);var inst_36297__$1 = (state_36316[2]);var inst_36298 = (inst_36297__$1 == null);var state_36316__$1 = (function (){var statearr_36319 = state_36316;(statearr_36319[7] = inst_36297__$1);
return statearr_36319;
})();if(cljs.core.truth_(inst_36298))
{var statearr_36320_36340 = state_36316__$1;(statearr_36320_36340[1] = 5);
} else
{var statearr_36321_36341 = state_36316__$1;(statearr_36321_36341[1] = 6);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36317 === 5))
{var inst_36300 = cljs.core.async.close_BANG_(tc);var inst_36301 = cljs.core.async.close_BANG_(fc);var state_36316__$1 = (function (){var statearr_36322 = state_36316;(statearr_36322[8] = inst_36300);
return statearr_36322;
})();var statearr_36323_36342 = state_36316__$1;(statearr_36323_36342[2] = inst_36301);
(statearr_36323_36342[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36317 === 6))
{var inst_36297 = (state_36316[7]);var inst_36303 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36297) : p.call(null,inst_36297));var state_36316__$1 = state_36316;if(cljs.core.truth_(inst_36303))
{var statearr_36324_36343 = state_36316__$1;(statearr_36324_36343[1] = 9);
} else
{var statearr_36325_36344 = state_36316__$1;(statearr_36325_36344[1] = 10);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36317 === 7))
{var inst_36312 = (state_36316[2]);var state_36316__$1 = state_36316;var statearr_36326_36345 = state_36316__$1;(statearr_36326_36345[2] = inst_36312);
(statearr_36326_36345[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36317 === 8))
{var inst_36309 = (state_36316[2]);var state_36316__$1 = (function (){var statearr_36327 = state_36316;(statearr_36327[9] = inst_36309);
return statearr_36327;
})();var statearr_36328_36346 = state_36316__$1;(statearr_36328_36346[2] = null);
(statearr_36328_36346[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36317 === 9))
{var state_36316__$1 = state_36316;var statearr_36329_36347 = state_36316__$1;(statearr_36329_36347[2] = tc);
(statearr_36329_36347[1] = 11);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36317 === 10))
{var state_36316__$1 = state_36316;var statearr_36330_36348 = state_36316__$1;(statearr_36330_36348[2] = fc);
(statearr_36330_36348[1] = 11);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36317 === 11))
{var inst_36297 = (state_36316[7]);var inst_36307 = (state_36316[2]);var state_36316__$1 = state_36316;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36316__$1,8,inst_36307,inst_36297);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36334 = [null,null,null,null,null,null,null,null,null,null];(statearr_36334[0] = state_machine__5548__auto__);
(statearr_36334[1] = 1);
return statearr_36334;
});
var state_machine__5548__auto____1 = (function (state_36316){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36316);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36335){if((e36335 instanceof Object))
{var ex__5551__auto__ = e36335;var statearr_36336_36349 = state_36316;(statearr_36336_36349[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36316);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e36335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__36350 = state_36316;
state_36316 = G__36350;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36316){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36337 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36338);
return statearr_36337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36397){var state_val_36398 = (state_36397[1]);if((state_val_36398 === 7))
{var inst_36393 = (state_36397[2]);var state_36397__$1 = state_36397;var statearr_36399_36415 = state_36397__$1;(statearr_36399_36415[2] = inst_36393);
(statearr_36399_36415[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36398 === 6))
{var inst_36386 = (state_36397[7]);var inst_36383 = (state_36397[8]);var inst_36390 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36383,inst_36386) : f.call(null,inst_36383,inst_36386));var inst_36383__$1 = inst_36390;var state_36397__$1 = (function (){var statearr_36400 = state_36397;(statearr_36400[8] = inst_36383__$1);
return statearr_36400;
})();var statearr_36401_36416 = state_36397__$1;(statearr_36401_36416[2] = null);
(statearr_36401_36416[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36398 === 5))
{var inst_36383 = (state_36397[8]);var state_36397__$1 = state_36397;var statearr_36402_36417 = state_36397__$1;(statearr_36402_36417[2] = inst_36383);
(statearr_36402_36417[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36398 === 4))
{var inst_36386 = (state_36397[7]);var inst_36386__$1 = (state_36397[2]);var inst_36387 = (inst_36386__$1 == null);var state_36397__$1 = (function (){var statearr_36403 = state_36397;(statearr_36403[7] = inst_36386__$1);
return statearr_36403;
})();if(cljs.core.truth_(inst_36387))
{var statearr_36404_36418 = state_36397__$1;(statearr_36404_36418[1] = 5);
} else
{var statearr_36405_36419 = state_36397__$1;(statearr_36405_36419[1] = 6);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36398 === 3))
{var inst_36395 = (state_36397[2]);var state_36397__$1 = state_36397;return cljs.core.async.impl.ioc_helpers.return_chan(state_36397__$1,inst_36395);
} else
{if((state_val_36398 === 2))
{var state_36397__$1 = state_36397;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36397__$1,4,ch);
} else
{if((state_val_36398 === 1))
{var inst_36383 = init;var state_36397__$1 = (function (){var statearr_36406 = state_36397;(statearr_36406[8] = inst_36383);
return statearr_36406;
})();var statearr_36407_36420 = state_36397__$1;(statearr_36407_36420[2] = null);
(statearr_36407_36420[1] = 2);
return cljs.core.constant$keyword$553;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36411 = [null,null,null,null,null,null,null,null,null];(statearr_36411[0] = state_machine__5548__auto__);
(statearr_36411[1] = 1);
return statearr_36411;
});
var state_machine__5548__auto____1 = (function (state_36397){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36397);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36412){if((e36412 instanceof Object))
{var ex__5551__auto__ = e36412;var statearr_36413_36421 = state_36397;(statearr_36413_36421[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36397);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e36412;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__36422 = state_36397;
state_36397 = G__36422;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36397){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36414 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36484){var state_val_36485 = (state_36484[1]);if((state_val_36485 === 1))
{var inst_36464 = cljs.core.seq(coll);var inst_36465 = inst_36464;var state_36484__$1 = (function (){var statearr_36486 = state_36484;(statearr_36486[7] = inst_36465);
return statearr_36486;
})();var statearr_36487_36505 = state_36484__$1;(statearr_36487_36505[2] = null);
(statearr_36487_36505[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36485 === 2))
{var inst_36465 = (state_36484[7]);var state_36484__$1 = state_36484;if(cljs.core.truth_(inst_36465))
{var statearr_36488_36506 = state_36484__$1;(statearr_36488_36506[1] = 4);
} else
{var statearr_36489_36507 = state_36484__$1;(statearr_36489_36507[1] = 5);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36485 === 3))
{var inst_36482 = (state_36484[2]);var state_36484__$1 = state_36484;return cljs.core.async.impl.ioc_helpers.return_chan(state_36484__$1,inst_36482);
} else
{if((state_val_36485 === 4))
{var inst_36465 = (state_36484[7]);var inst_36468 = cljs.core.first(inst_36465);var state_36484__$1 = state_36484;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36484__$1,7,ch,inst_36468);
} else
{if((state_val_36485 === 5))
{var state_36484__$1 = state_36484;if(cljs.core.truth_(close_QMARK_))
{var statearr_36490_36508 = state_36484__$1;(statearr_36490_36508[1] = 8);
} else
{var statearr_36491_36509 = state_36484__$1;(statearr_36491_36509[1] = 9);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36485 === 6))
{var inst_36480 = (state_36484[2]);var state_36484__$1 = state_36484;var statearr_36492_36510 = state_36484__$1;(statearr_36492_36510[2] = inst_36480);
(statearr_36492_36510[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36485 === 7))
{var inst_36465 = (state_36484[7]);var inst_36470 = (state_36484[2]);var inst_36471 = cljs.core.next(inst_36465);var inst_36465__$1 = inst_36471;var state_36484__$1 = (function (){var statearr_36493 = state_36484;(statearr_36493[7] = inst_36465__$1);
(statearr_36493[8] = inst_36470);
return statearr_36493;
})();var statearr_36494_36511 = state_36484__$1;(statearr_36494_36511[2] = null);
(statearr_36494_36511[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36485 === 8))
{var inst_36475 = cljs.core.async.close_BANG_(ch);var state_36484__$1 = state_36484;var statearr_36495_36512 = state_36484__$1;(statearr_36495_36512[2] = inst_36475);
(statearr_36495_36512[1] = 10);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36485 === 9))
{var state_36484__$1 = state_36484;var statearr_36496_36513 = state_36484__$1;(statearr_36496_36513[2] = null);
(statearr_36496_36513[1] = 10);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36485 === 10))
{var inst_36478 = (state_36484[2]);var state_36484__$1 = state_36484;var statearr_36497_36514 = state_36484__$1;(statearr_36497_36514[2] = inst_36478);
(statearr_36497_36514[1] = 6);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36501 = [null,null,null,null,null,null,null,null,null];(statearr_36501[0] = state_machine__5548__auto__);
(statearr_36501[1] = 1);
return statearr_36501;
});
var state_machine__5548__auto____1 = (function (state_36484){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36484);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36502){if((e36502 instanceof Object))
{var ex__5551__auto__ = e36502;var statearr_36503_36515 = state_36484;(statearr_36503_36515[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36484);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e36502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__36516 = state_36484;
state_36484 = G__36516;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36484){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36504 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.Mux = (function (){var obj36518 = {};return obj36518;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj36520 = {};return obj36520;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t36744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36744 = (function (cs,ch,mult,meta36745){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta36745 = meta36745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36744.cljs$lang$type = true;
cljs.core.async.t36744.cljs$lang$ctorStr = "cljs.core.async/t36744";
cljs.core.async.t36744.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36744");
});})(cs))
;
cljs.core.async.t36744.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t36744.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t36744.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t36744.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t36744.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t36744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36746){var self__ = this;
var _36746__$1 = this;return self__.meta36745;
});})(cs))
;
cljs.core.async.t36744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36746,meta36745__$1){var self__ = this;
var _36746__$1 = this;return (new cljs.core.async.t36744(self__.cs,self__.ch,self__.mult,meta36745__$1));
});})(cs))
;
cljs.core.async.__GT_t36744 = ((function (cs){
return (function __GT_t36744(cs__$1,ch__$1,mult__$1,meta36745){return (new cljs.core.async.t36744(cs__$1,ch__$1,mult__$1,meta36745));
});})(cs))
;
}
return (new cljs.core.async.t36744(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___36967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36881){var state_val_36882 = (state_36881[1]);if((state_val_36882 === 32))
{var inst_36825 = (state_36881[7]);var inst_36749 = (state_36881[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36881,31,Object,null,30);var inst_36832 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36825,inst_36749,done);var state_36881__$1 = state_36881;var statearr_36883_36968 = state_36881__$1;(statearr_36883_36968[2] = inst_36832);
cljs.core.async.impl.ioc_helpers.process_exception(state_36881__$1);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 1))
{var state_36881__$1 = state_36881;var statearr_36884_36969 = state_36881__$1;(statearr_36884_36969[2] = null);
(statearr_36884_36969[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 33))
{var inst_36838 = (state_36881[9]);var inst_36840 = cljs.core.chunked_seq_QMARK_(inst_36838);var state_36881__$1 = state_36881;if(inst_36840)
{var statearr_36885_36970 = state_36881__$1;(statearr_36885_36970[1] = 36);
} else
{var statearr_36886_36971 = state_36881__$1;(statearr_36886_36971[1] = 37);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 2))
{var state_36881__$1 = state_36881;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36881__$1,4,ch);
} else
{if((state_val_36882 === 34))
{var state_36881__$1 = state_36881;var statearr_36887_36972 = state_36881__$1;(statearr_36887_36972[2] = null);
(statearr_36887_36972[1] = 35);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 3))
{var inst_36879 = (state_36881[2]);var state_36881__$1 = state_36881;return cljs.core.async.impl.ioc_helpers.return_chan(state_36881__$1,inst_36879);
} else
{if((state_val_36882 === 35))
{var inst_36863 = (state_36881[2]);var state_36881__$1 = state_36881;var statearr_36888_36973 = state_36881__$1;(statearr_36888_36973[2] = inst_36863);
(statearr_36888_36973[1] = 29);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 4))
{var inst_36749 = (state_36881[8]);var inst_36749__$1 = (state_36881[2]);var inst_36750 = (inst_36749__$1 == null);var state_36881__$1 = (function (){var statearr_36889 = state_36881;(statearr_36889[8] = inst_36749__$1);
return statearr_36889;
})();if(cljs.core.truth_(inst_36750))
{var statearr_36890_36974 = state_36881__$1;(statearr_36890_36974[1] = 5);
} else
{var statearr_36891_36975 = state_36881__$1;(statearr_36891_36975[1] = 6);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 36))
{var inst_36838 = (state_36881[9]);var inst_36842 = cljs.core.chunk_first(inst_36838);var inst_36843 = cljs.core.chunk_rest(inst_36838);var inst_36844 = cljs.core.count(inst_36842);var inst_36817 = inst_36843;var inst_36818 = inst_36842;var inst_36819 = inst_36844;var inst_36820 = 0;var state_36881__$1 = (function (){var statearr_36892 = state_36881;(statearr_36892[10] = inst_36820);
(statearr_36892[11] = inst_36818);
(statearr_36892[12] = inst_36817);
(statearr_36892[13] = inst_36819);
return statearr_36892;
})();var statearr_36893_36976 = state_36881__$1;(statearr_36893_36976[2] = null);
(statearr_36893_36976[1] = 25);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 5))
{var inst_36756 = cljs.core.deref(cs);var inst_36757 = cljs.core.seq(inst_36756);var inst_36758 = inst_36757;var inst_36759 = null;var inst_36760 = 0;var inst_36761 = 0;var state_36881__$1 = (function (){var statearr_36894 = state_36881;(statearr_36894[14] = inst_36761);
(statearr_36894[15] = inst_36760);
(statearr_36894[16] = inst_36758);
(statearr_36894[17] = inst_36759);
return statearr_36894;
})();var statearr_36895_36977 = state_36881__$1;(statearr_36895_36977[2] = null);
(statearr_36895_36977[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 37))
{var inst_36838 = (state_36881[9]);var inst_36847 = cljs.core.first(inst_36838);var state_36881__$1 = (function (){var statearr_36896 = state_36881;(statearr_36896[18] = inst_36847);
return statearr_36896;
})();var statearr_36897_36978 = state_36881__$1;(statearr_36897_36978[2] = null);
(statearr_36897_36978[1] = 41);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 6))
{var inst_36809 = (state_36881[19]);var inst_36808 = cljs.core.deref(cs);var inst_36809__$1 = cljs.core.keys(inst_36808);var inst_36810 = cljs.core.count(inst_36809__$1);var inst_36811 = cljs.core.reset_BANG_(dctr,inst_36810);var inst_36816 = cljs.core.seq(inst_36809__$1);var inst_36817 = inst_36816;var inst_36818 = null;var inst_36819 = 0;var inst_36820 = 0;var state_36881__$1 = (function (){var statearr_36898 = state_36881;(statearr_36898[20] = inst_36811);
(statearr_36898[10] = inst_36820);
(statearr_36898[19] = inst_36809__$1);
(statearr_36898[11] = inst_36818);
(statearr_36898[12] = inst_36817);
(statearr_36898[13] = inst_36819);
return statearr_36898;
})();var statearr_36899_36979 = state_36881__$1;(statearr_36899_36979[2] = null);
(statearr_36899_36979[1] = 25);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 38))
{var inst_36860 = (state_36881[2]);var state_36881__$1 = state_36881;var statearr_36900_36980 = state_36881__$1;(statearr_36900_36980[2] = inst_36860);
(statearr_36900_36980[1] = 35);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 7))
{var inst_36877 = (state_36881[2]);var state_36881__$1 = state_36881;var statearr_36901_36981 = state_36881__$1;(statearr_36901_36981[2] = inst_36877);
(statearr_36901_36981[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 39))
{var inst_36838 = (state_36881[9]);var inst_36856 = (state_36881[2]);var inst_36857 = cljs.core.next(inst_36838);var inst_36817 = inst_36857;var inst_36818 = null;var inst_36819 = 0;var inst_36820 = 0;var state_36881__$1 = (function (){var statearr_36902 = state_36881;(statearr_36902[21] = inst_36856);
(statearr_36902[10] = inst_36820);
(statearr_36902[11] = inst_36818);
(statearr_36902[12] = inst_36817);
(statearr_36902[13] = inst_36819);
return statearr_36902;
})();var statearr_36903_36982 = state_36881__$1;(statearr_36903_36982[2] = null);
(statearr_36903_36982[1] = 25);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 8))
{var inst_36761 = (state_36881[14]);var inst_36760 = (state_36881[15]);var inst_36763 = (inst_36761 < inst_36760);var inst_36764 = inst_36763;var state_36881__$1 = state_36881;if(cljs.core.truth_(inst_36764))
{var statearr_36904_36983 = state_36881__$1;(statearr_36904_36983[1] = 10);
} else
{var statearr_36905_36984 = state_36881__$1;(statearr_36905_36984[1] = 11);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 40))
{var inst_36847 = (state_36881[18]);var inst_36848 = (state_36881[2]);var inst_36849 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_36850 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36847);var state_36881__$1 = (function (){var statearr_36906 = state_36881;(statearr_36906[22] = inst_36849);
(statearr_36906[23] = inst_36848);
return statearr_36906;
})();var statearr_36907_36985 = state_36881__$1;(statearr_36907_36985[2] = inst_36850);
cljs.core.async.impl.ioc_helpers.process_exception(state_36881__$1);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 9))
{var inst_36806 = (state_36881[2]);var state_36881__$1 = state_36881;var statearr_36908_36986 = state_36881__$1;(statearr_36908_36986[2] = inst_36806);
(statearr_36908_36986[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 41))
{var inst_36847 = (state_36881[18]);var inst_36749 = (state_36881[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36881,40,Object,null,39);var inst_36854 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36847,inst_36749,done);var state_36881__$1 = state_36881;var statearr_36909_36987 = state_36881__$1;(statearr_36909_36987[2] = inst_36854);
cljs.core.async.impl.ioc_helpers.process_exception(state_36881__$1);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 10))
{var inst_36761 = (state_36881[14]);var inst_36759 = (state_36881[17]);var inst_36767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36759,inst_36761);var inst_36768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36767,0,null);var inst_36769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36767,1,null);var state_36881__$1 = (function (){var statearr_36910 = state_36881;(statearr_36910[24] = inst_36768);
return statearr_36910;
})();if(cljs.core.truth_(inst_36769))
{var statearr_36911_36988 = state_36881__$1;(statearr_36911_36988[1] = 13);
} else
{var statearr_36912_36989 = state_36881__$1;(statearr_36912_36989[1] = 14);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 42))
{var state_36881__$1 = state_36881;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36881__$1,45,dchan);
} else
{if((state_val_36882 === 11))
{var inst_36778 = (state_36881[25]);var inst_36758 = (state_36881[16]);var inst_36778__$1 = cljs.core.seq(inst_36758);var state_36881__$1 = (function (){var statearr_36913 = state_36881;(statearr_36913[25] = inst_36778__$1);
return statearr_36913;
})();if(inst_36778__$1)
{var statearr_36914_36990 = state_36881__$1;(statearr_36914_36990[1] = 16);
} else
{var statearr_36915_36991 = state_36881__$1;(statearr_36915_36991[1] = 17);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 43))
{var state_36881__$1 = state_36881;var statearr_36916_36992 = state_36881__$1;(statearr_36916_36992[2] = null);
(statearr_36916_36992[1] = 44);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 12))
{var inst_36804 = (state_36881[2]);var state_36881__$1 = state_36881;var statearr_36917_36993 = state_36881__$1;(statearr_36917_36993[2] = inst_36804);
(statearr_36917_36993[1] = 9);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 44))
{var inst_36874 = (state_36881[2]);var state_36881__$1 = (function (){var statearr_36918 = state_36881;(statearr_36918[26] = inst_36874);
return statearr_36918;
})();var statearr_36919_36994 = state_36881__$1;(statearr_36919_36994[2] = null);
(statearr_36919_36994[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 13))
{var inst_36768 = (state_36881[24]);var inst_36771 = cljs.core.async.close_BANG_(inst_36768);var state_36881__$1 = state_36881;var statearr_36920_36995 = state_36881__$1;(statearr_36920_36995[2] = inst_36771);
(statearr_36920_36995[1] = 15);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 45))
{var inst_36871 = (state_36881[2]);var state_36881__$1 = state_36881;var statearr_36924_36996 = state_36881__$1;(statearr_36924_36996[2] = inst_36871);
(statearr_36924_36996[1] = 44);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 14))
{var state_36881__$1 = state_36881;var statearr_36925_36997 = state_36881__$1;(statearr_36925_36997[2] = null);
(statearr_36925_36997[1] = 15);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 15))
{var inst_36761 = (state_36881[14]);var inst_36760 = (state_36881[15]);var inst_36758 = (state_36881[16]);var inst_36759 = (state_36881[17]);var inst_36774 = (state_36881[2]);var inst_36775 = (inst_36761 + 1);var tmp36921 = inst_36760;var tmp36922 = inst_36758;var tmp36923 = inst_36759;var inst_36758__$1 = tmp36922;var inst_36759__$1 = tmp36923;var inst_36760__$1 = tmp36921;var inst_36761__$1 = inst_36775;var state_36881__$1 = (function (){var statearr_36926 = state_36881;(statearr_36926[14] = inst_36761__$1);
(statearr_36926[15] = inst_36760__$1);
(statearr_36926[27] = inst_36774);
(statearr_36926[16] = inst_36758__$1);
(statearr_36926[17] = inst_36759__$1);
return statearr_36926;
})();var statearr_36927_36998 = state_36881__$1;(statearr_36927_36998[2] = null);
(statearr_36927_36998[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 16))
{var inst_36778 = (state_36881[25]);var inst_36780 = cljs.core.chunked_seq_QMARK_(inst_36778);var state_36881__$1 = state_36881;if(inst_36780)
{var statearr_36928_36999 = state_36881__$1;(statearr_36928_36999[1] = 19);
} else
{var statearr_36929_37000 = state_36881__$1;(statearr_36929_37000[1] = 20);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 17))
{var state_36881__$1 = state_36881;var statearr_36930_37001 = state_36881__$1;(statearr_36930_37001[2] = null);
(statearr_36930_37001[1] = 18);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 18))
{var inst_36802 = (state_36881[2]);var state_36881__$1 = state_36881;var statearr_36931_37002 = state_36881__$1;(statearr_36931_37002[2] = inst_36802);
(statearr_36931_37002[1] = 12);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 19))
{var inst_36778 = (state_36881[25]);var inst_36782 = cljs.core.chunk_first(inst_36778);var inst_36783 = cljs.core.chunk_rest(inst_36778);var inst_36784 = cljs.core.count(inst_36782);var inst_36758 = inst_36783;var inst_36759 = inst_36782;var inst_36760 = inst_36784;var inst_36761 = 0;var state_36881__$1 = (function (){var statearr_36932 = state_36881;(statearr_36932[14] = inst_36761);
(statearr_36932[15] = inst_36760);
(statearr_36932[16] = inst_36758);
(statearr_36932[17] = inst_36759);
return statearr_36932;
})();var statearr_36933_37003 = state_36881__$1;(statearr_36933_37003[2] = null);
(statearr_36933_37003[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 20))
{var inst_36778 = (state_36881[25]);var inst_36788 = cljs.core.first(inst_36778);var inst_36789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36788,0,null);var inst_36790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36788,1,null);var state_36881__$1 = (function (){var statearr_36934 = state_36881;(statearr_36934[28] = inst_36789);
return statearr_36934;
})();if(cljs.core.truth_(inst_36790))
{var statearr_36935_37004 = state_36881__$1;(statearr_36935_37004[1] = 22);
} else
{var statearr_36936_37005 = state_36881__$1;(statearr_36936_37005[1] = 23);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 21))
{var inst_36799 = (state_36881[2]);var state_36881__$1 = state_36881;var statearr_36937_37006 = state_36881__$1;(statearr_36937_37006[2] = inst_36799);
(statearr_36937_37006[1] = 18);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 22))
{var inst_36789 = (state_36881[28]);var inst_36792 = cljs.core.async.close_BANG_(inst_36789);var state_36881__$1 = state_36881;var statearr_36938_37007 = state_36881__$1;(statearr_36938_37007[2] = inst_36792);
(statearr_36938_37007[1] = 24);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 23))
{var state_36881__$1 = state_36881;var statearr_36939_37008 = state_36881__$1;(statearr_36939_37008[2] = null);
(statearr_36939_37008[1] = 24);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 24))
{var inst_36778 = (state_36881[25]);var inst_36795 = (state_36881[2]);var inst_36796 = cljs.core.next(inst_36778);var inst_36758 = inst_36796;var inst_36759 = null;var inst_36760 = 0;var inst_36761 = 0;var state_36881__$1 = (function (){var statearr_36940 = state_36881;(statearr_36940[29] = inst_36795);
(statearr_36940[14] = inst_36761);
(statearr_36940[15] = inst_36760);
(statearr_36940[16] = inst_36758);
(statearr_36940[17] = inst_36759);
return statearr_36940;
})();var statearr_36941_37009 = state_36881__$1;(statearr_36941_37009[2] = null);
(statearr_36941_37009[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 25))
{var inst_36820 = (state_36881[10]);var inst_36819 = (state_36881[13]);var inst_36822 = (inst_36820 < inst_36819);var inst_36823 = inst_36822;var state_36881__$1 = state_36881;if(cljs.core.truth_(inst_36823))
{var statearr_36942_37010 = state_36881__$1;(statearr_36942_37010[1] = 27);
} else
{var statearr_36943_37011 = state_36881__$1;(statearr_36943_37011[1] = 28);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 26))
{var inst_36809 = (state_36881[19]);var inst_36867 = (state_36881[2]);var inst_36868 = cljs.core.seq(inst_36809);var state_36881__$1 = (function (){var statearr_36944 = state_36881;(statearr_36944[30] = inst_36867);
return statearr_36944;
})();if(inst_36868)
{var statearr_36945_37012 = state_36881__$1;(statearr_36945_37012[1] = 42);
} else
{var statearr_36946_37013 = state_36881__$1;(statearr_36946_37013[1] = 43);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 27))
{var inst_36820 = (state_36881[10]);var inst_36818 = (state_36881[11]);var inst_36825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36818,inst_36820);var state_36881__$1 = (function (){var statearr_36947 = state_36881;(statearr_36947[7] = inst_36825);
return statearr_36947;
})();var statearr_36948_37014 = state_36881__$1;(statearr_36948_37014[2] = null);
(statearr_36948_37014[1] = 32);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 28))
{var inst_36838 = (state_36881[9]);var inst_36817 = (state_36881[12]);var inst_36838__$1 = cljs.core.seq(inst_36817);var state_36881__$1 = (function (){var statearr_36952 = state_36881;(statearr_36952[9] = inst_36838__$1);
return statearr_36952;
})();if(inst_36838__$1)
{var statearr_36953_37015 = state_36881__$1;(statearr_36953_37015[1] = 33);
} else
{var statearr_36954_37016 = state_36881__$1;(statearr_36954_37016[1] = 34);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 29))
{var inst_36865 = (state_36881[2]);var state_36881__$1 = state_36881;var statearr_36955_37017 = state_36881__$1;(statearr_36955_37017[2] = inst_36865);
(statearr_36955_37017[1] = 26);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 30))
{var inst_36820 = (state_36881[10]);var inst_36818 = (state_36881[11]);var inst_36817 = (state_36881[12]);var inst_36819 = (state_36881[13]);var inst_36834 = (state_36881[2]);var inst_36835 = (inst_36820 + 1);var tmp36949 = inst_36818;var tmp36950 = inst_36817;var tmp36951 = inst_36819;var inst_36817__$1 = tmp36950;var inst_36818__$1 = tmp36949;var inst_36819__$1 = tmp36951;var inst_36820__$1 = inst_36835;var state_36881__$1 = (function (){var statearr_36956 = state_36881;(statearr_36956[10] = inst_36820__$1);
(statearr_36956[11] = inst_36818__$1);
(statearr_36956[12] = inst_36817__$1);
(statearr_36956[13] = inst_36819__$1);
(statearr_36956[31] = inst_36834);
return statearr_36956;
})();var statearr_36957_37018 = state_36881__$1;(statearr_36957_37018[2] = null);
(statearr_36957_37018[1] = 25);
return cljs.core.constant$keyword$553;
} else
{if((state_val_36882 === 31))
{var inst_36825 = (state_36881[7]);var inst_36826 = (state_36881[2]);var inst_36827 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_36828 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36825);var state_36881__$1 = (function (){var statearr_36958 = state_36881;(statearr_36958[32] = inst_36827);
(statearr_36958[33] = inst_36826);
return statearr_36958;
})();var statearr_36959_37019 = state_36881__$1;(statearr_36959_37019[2] = inst_36828);
cljs.core.async.impl.ioc_helpers.process_exception(state_36881__$1);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36963[0] = state_machine__5548__auto__);
(statearr_36963[1] = 1);
return statearr_36963;
});
var state_machine__5548__auto____1 = (function (state_36881){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36881);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36964){if((e36964 instanceof Object))
{var ex__5551__auto__ = e36964;var statearr_36965_37020 = state_36881;(statearr_36965_37020[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36881);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e36964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__37021 = state_36881;
state_36881 = G__37021;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36881){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36966 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36967);
return statearr_36966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.Mix = (function (){var obj37023 = {};return obj37023;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$560,null,cljs.core.constant$keyword$561,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$562);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$561);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$562,chs);var pauses = pick(cljs.core.constant$keyword$560,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$563,solos,cljs.core.constant$keyword$564,pick(cljs.core.constant$keyword$561,chs),cljs.core.constant$keyword$565,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$560)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t37133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37133 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta37134){
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
this.meta37134 = meta37134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37133.cljs$lang$type = true;
cljs.core.async.t37133.cljs$lang$ctorStr = "cljs.core.async/t37133";
cljs.core.async.t37133.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37133");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37133.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t37133.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37133.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37133.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37133.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37133.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37133.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37135){var self__ = this;
var _37135__$1 = this;return self__.meta37134;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37135,meta37134__$1){var self__ = this;
var _37135__$1 = this;return (new cljs.core.async.t37133(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta37134__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t37133 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37133(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37134){return (new cljs.core.async.t37133(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37134));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t37133(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___37242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37200){var state_val_37201 = (state_37200[1]);if((state_val_37201 === 1))
{var inst_37139 = (state_37200[7]);var inst_37139__$1 = calc_state();var inst_37140 = cljs.core.seq_QMARK_(inst_37139__$1);var state_37200__$1 = (function (){var statearr_37202 = state_37200;(statearr_37202[7] = inst_37139__$1);
return statearr_37202;
})();if(inst_37140)
{var statearr_37203_37243 = state_37200__$1;(statearr_37203_37243[1] = 2);
} else
{var statearr_37204_37244 = state_37200__$1;(statearr_37204_37244[1] = 3);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 2))
{var inst_37139 = (state_37200[7]);var inst_37142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37139);var state_37200__$1 = state_37200;var statearr_37205_37245 = state_37200__$1;(statearr_37205_37245[2] = inst_37142);
(statearr_37205_37245[1] = 4);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 3))
{var inst_37139 = (state_37200[7]);var state_37200__$1 = state_37200;var statearr_37206_37246 = state_37200__$1;(statearr_37206_37246[2] = inst_37139);
(statearr_37206_37246[1] = 4);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 4))
{var inst_37139 = (state_37200[7]);var inst_37145 = (state_37200[2]);var inst_37146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37145,cljs.core.constant$keyword$565);var inst_37147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37145,cljs.core.constant$keyword$564);var inst_37148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37145,cljs.core.constant$keyword$563);var inst_37149 = inst_37139;var state_37200__$1 = (function (){var statearr_37207 = state_37200;(statearr_37207[8] = inst_37149);
(statearr_37207[9] = inst_37148);
(statearr_37207[10] = inst_37146);
(statearr_37207[11] = inst_37147);
return statearr_37207;
})();var statearr_37208_37247 = state_37200__$1;(statearr_37208_37247[2] = null);
(statearr_37208_37247[1] = 5);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 5))
{var inst_37149 = (state_37200[8]);var inst_37152 = cljs.core.seq_QMARK_(inst_37149);var state_37200__$1 = state_37200;if(inst_37152)
{var statearr_37209_37248 = state_37200__$1;(statearr_37209_37248[1] = 7);
} else
{var statearr_37210_37249 = state_37200__$1;(statearr_37210_37249[1] = 8);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 6))
{var inst_37198 = (state_37200[2]);var state_37200__$1 = state_37200;return cljs.core.async.impl.ioc_helpers.return_chan(state_37200__$1,inst_37198);
} else
{if((state_val_37201 === 7))
{var inst_37149 = (state_37200[8]);var inst_37154 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37149);var state_37200__$1 = state_37200;var statearr_37211_37250 = state_37200__$1;(statearr_37211_37250[2] = inst_37154);
(statearr_37211_37250[1] = 9);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 8))
{var inst_37149 = (state_37200[8]);var state_37200__$1 = state_37200;var statearr_37212_37251 = state_37200__$1;(statearr_37212_37251[2] = inst_37149);
(statearr_37212_37251[1] = 9);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 9))
{var inst_37157 = (state_37200[12]);var inst_37157__$1 = (state_37200[2]);var inst_37158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37157__$1,cljs.core.constant$keyword$565);var inst_37159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37157__$1,cljs.core.constant$keyword$564);var inst_37160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37157__$1,cljs.core.constant$keyword$563);var state_37200__$1 = (function (){var statearr_37213 = state_37200;(statearr_37213[12] = inst_37157__$1);
(statearr_37213[13] = inst_37159);
(statearr_37213[14] = inst_37160);
return statearr_37213;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37200__$1,10,inst_37158);
} else
{if((state_val_37201 === 10))
{var inst_37165 = (state_37200[15]);var inst_37164 = (state_37200[16]);var inst_37163 = (state_37200[2]);var inst_37164__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37163,0,null);var inst_37165__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37163,1,null);var inst_37166 = (inst_37164__$1 == null);var inst_37167 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37165__$1,change);var inst_37168 = (inst_37166) || (inst_37167);var state_37200__$1 = (function (){var statearr_37214 = state_37200;(statearr_37214[15] = inst_37165__$1);
(statearr_37214[16] = inst_37164__$1);
return statearr_37214;
})();if(cljs.core.truth_(inst_37168))
{var statearr_37215_37252 = state_37200__$1;(statearr_37215_37252[1] = 11);
} else
{var statearr_37216_37253 = state_37200__$1;(statearr_37216_37253[1] = 12);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 11))
{var inst_37164 = (state_37200[16]);var inst_37170 = (inst_37164 == null);var state_37200__$1 = state_37200;if(cljs.core.truth_(inst_37170))
{var statearr_37217_37254 = state_37200__$1;(statearr_37217_37254[1] = 14);
} else
{var statearr_37218_37255 = state_37200__$1;(statearr_37218_37255[1] = 15);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 12))
{var inst_37165 = (state_37200[15]);var inst_37179 = (state_37200[17]);var inst_37160 = (state_37200[14]);var inst_37179__$1 = (inst_37160.cljs$core$IFn$_invoke$arity$1 ? inst_37160.cljs$core$IFn$_invoke$arity$1(inst_37165) : inst_37160.call(null,inst_37165));var state_37200__$1 = (function (){var statearr_37219 = state_37200;(statearr_37219[17] = inst_37179__$1);
return statearr_37219;
})();if(cljs.core.truth_(inst_37179__$1))
{var statearr_37220_37256 = state_37200__$1;(statearr_37220_37256[1] = 17);
} else
{var statearr_37221_37257 = state_37200__$1;(statearr_37221_37257[1] = 18);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 13))
{var inst_37196 = (state_37200[2]);var state_37200__$1 = state_37200;var statearr_37222_37258 = state_37200__$1;(statearr_37222_37258[2] = inst_37196);
(statearr_37222_37258[1] = 6);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 14))
{var inst_37165 = (state_37200[15]);var inst_37172 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37165);var state_37200__$1 = state_37200;var statearr_37223_37259 = state_37200__$1;(statearr_37223_37259[2] = inst_37172);
(statearr_37223_37259[1] = 16);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 15))
{var state_37200__$1 = state_37200;var statearr_37224_37260 = state_37200__$1;(statearr_37224_37260[2] = null);
(statearr_37224_37260[1] = 16);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 16))
{var inst_37175 = (state_37200[2]);var inst_37176 = calc_state();var inst_37149 = inst_37176;var state_37200__$1 = (function (){var statearr_37225 = state_37200;(statearr_37225[8] = inst_37149);
(statearr_37225[18] = inst_37175);
return statearr_37225;
})();var statearr_37226_37261 = state_37200__$1;(statearr_37226_37261[2] = null);
(statearr_37226_37261[1] = 5);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 17))
{var inst_37179 = (state_37200[17]);var state_37200__$1 = state_37200;var statearr_37227_37262 = state_37200__$1;(statearr_37227_37262[2] = inst_37179);
(statearr_37227_37262[1] = 19);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 18))
{var inst_37165 = (state_37200[15]);var inst_37159 = (state_37200[13]);var inst_37160 = (state_37200[14]);var inst_37182 = cljs.core.empty_QMARK_(inst_37160);var inst_37183 = (inst_37159.cljs$core$IFn$_invoke$arity$1 ? inst_37159.cljs$core$IFn$_invoke$arity$1(inst_37165) : inst_37159.call(null,inst_37165));var inst_37184 = cljs.core.not(inst_37183);var inst_37185 = (inst_37182) && (inst_37184);var state_37200__$1 = state_37200;var statearr_37228_37263 = state_37200__$1;(statearr_37228_37263[2] = inst_37185);
(statearr_37228_37263[1] = 19);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 19))
{var inst_37187 = (state_37200[2]);var state_37200__$1 = state_37200;if(cljs.core.truth_(inst_37187))
{var statearr_37229_37264 = state_37200__$1;(statearr_37229_37264[1] = 20);
} else
{var statearr_37230_37265 = state_37200__$1;(statearr_37230_37265[1] = 21);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 20))
{var inst_37164 = (state_37200[16]);var state_37200__$1 = state_37200;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37200__$1,23,out,inst_37164);
} else
{if((state_val_37201 === 21))
{var state_37200__$1 = state_37200;var statearr_37231_37266 = state_37200__$1;(statearr_37231_37266[2] = null);
(statearr_37231_37266[1] = 22);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 22))
{var inst_37157 = (state_37200[12]);var inst_37193 = (state_37200[2]);var inst_37149 = inst_37157;var state_37200__$1 = (function (){var statearr_37232 = state_37200;(statearr_37232[8] = inst_37149);
(statearr_37232[19] = inst_37193);
return statearr_37232;
})();var statearr_37233_37267 = state_37200__$1;(statearr_37233_37267[2] = null);
(statearr_37233_37267[1] = 5);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37201 === 23))
{var inst_37190 = (state_37200[2]);var state_37200__$1 = state_37200;var statearr_37234_37268 = state_37200__$1;(statearr_37234_37268[2] = inst_37190);
(statearr_37234_37268[1] = 22);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37238[0] = state_machine__5548__auto__);
(statearr_37238[1] = 1);
return statearr_37238;
});
var state_machine__5548__auto____1 = (function (state_37200){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37200);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37239){if((e37239 instanceof Object))
{var ex__5551__auto__ = e37239;var statearr_37240_37269 = state_37200;(statearr_37240_37269[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37200);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e37239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__37270 = state_37200;
state_37200 = G__37270;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37200){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37241 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37242);
return statearr_37241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
cljs.core.async.Pub = (function (){var obj37272 = {};return obj37272;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
return (function (topic){var or__3441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3441__auto__,mults){
return (function (p1__37273_SHARP_){if(cljs.core.truth_((p1__37273_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37273_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37273_SHARP_.call(null,topic))))
{return p1__37273_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37273_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t37398 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37398 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37399){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37399 = meta37399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37398.cljs$lang$type = true;
cljs.core.async.t37398.cljs$lang$ctorStr = "cljs.core.async/t37398";
cljs.core.async.t37398.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37398");
});})(mults,ensure_mult))
;
cljs.core.async.t37398.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t37398.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t37398.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t37398.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t37398.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t37398.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t37398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37400){var self__ = this;
var _37400__$1 = this;return self__.meta37399;
});})(mults,ensure_mult))
;
cljs.core.async.t37398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37400,meta37399__$1){var self__ = this;
var _37400__$1 = this;return (new cljs.core.async.t37398(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37399__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t37398 = ((function (mults,ensure_mult){
return (function __GT_t37398(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37399){return (new cljs.core.async.t37398(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37399));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t37398(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___37522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37474){var state_val_37475 = (state_37474[1]);if((state_val_37475 === 1))
{var state_37474__$1 = state_37474;var statearr_37476_37523 = state_37474__$1;(statearr_37476_37523[2] = null);
(statearr_37476_37523[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 2))
{var state_37474__$1 = state_37474;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37474__$1,4,ch);
} else
{if((state_val_37475 === 3))
{var inst_37472 = (state_37474[2]);var state_37474__$1 = state_37474;return cljs.core.async.impl.ioc_helpers.return_chan(state_37474__$1,inst_37472);
} else
{if((state_val_37475 === 4))
{var inst_37403 = (state_37474[7]);var inst_37403__$1 = (state_37474[2]);var inst_37404 = (inst_37403__$1 == null);var state_37474__$1 = (function (){var statearr_37477 = state_37474;(statearr_37477[7] = inst_37403__$1);
return statearr_37477;
})();if(cljs.core.truth_(inst_37404))
{var statearr_37478_37524 = state_37474__$1;(statearr_37478_37524[1] = 5);
} else
{var statearr_37479_37525 = state_37474__$1;(statearr_37479_37525[1] = 6);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 5))
{var inst_37410 = cljs.core.deref(mults);var inst_37411 = cljs.core.vals(inst_37410);var inst_37412 = cljs.core.seq(inst_37411);var inst_37413 = inst_37412;var inst_37414 = null;var inst_37415 = 0;var inst_37416 = 0;var state_37474__$1 = (function (){var statearr_37480 = state_37474;(statearr_37480[8] = inst_37416);
(statearr_37480[9] = inst_37415);
(statearr_37480[10] = inst_37414);
(statearr_37480[11] = inst_37413);
return statearr_37480;
})();var statearr_37481_37526 = state_37474__$1;(statearr_37481_37526[2] = null);
(statearr_37481_37526[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 6))
{var inst_37403 = (state_37474[7]);var inst_37453 = (state_37474[12]);var inst_37451 = (state_37474[13]);var inst_37451__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37403) : topic_fn.call(null,inst_37403));var inst_37452 = cljs.core.deref(mults);var inst_37453__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37452,inst_37451__$1);var state_37474__$1 = (function (){var statearr_37482 = state_37474;(statearr_37482[12] = inst_37453__$1);
(statearr_37482[13] = inst_37451__$1);
return statearr_37482;
})();if(cljs.core.truth_(inst_37453__$1))
{var statearr_37483_37527 = state_37474__$1;(statearr_37483_37527[1] = 19);
} else
{var statearr_37484_37528 = state_37474__$1;(statearr_37484_37528[1] = 20);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 7))
{var inst_37470 = (state_37474[2]);var state_37474__$1 = state_37474;var statearr_37485_37529 = state_37474__$1;(statearr_37485_37529[2] = inst_37470);
(statearr_37485_37529[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 8))
{var inst_37416 = (state_37474[8]);var inst_37415 = (state_37474[9]);var inst_37418 = (inst_37416 < inst_37415);var inst_37419 = inst_37418;var state_37474__$1 = state_37474;if(cljs.core.truth_(inst_37419))
{var statearr_37489_37530 = state_37474__$1;(statearr_37489_37530[1] = 10);
} else
{var statearr_37490_37531 = state_37474__$1;(statearr_37490_37531[1] = 11);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 9))
{var inst_37449 = (state_37474[2]);var state_37474__$1 = state_37474;var statearr_37491_37532 = state_37474__$1;(statearr_37491_37532[2] = inst_37449);
(statearr_37491_37532[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 10))
{var inst_37416 = (state_37474[8]);var inst_37415 = (state_37474[9]);var inst_37414 = (state_37474[10]);var inst_37413 = (state_37474[11]);var inst_37421 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37414,inst_37416);var inst_37422 = cljs.core.async.muxch_STAR_(inst_37421);var inst_37423 = cljs.core.async.close_BANG_(inst_37422);var inst_37424 = (inst_37416 + 1);var tmp37486 = inst_37415;var tmp37487 = inst_37414;var tmp37488 = inst_37413;var inst_37413__$1 = tmp37488;var inst_37414__$1 = tmp37487;var inst_37415__$1 = tmp37486;var inst_37416__$1 = inst_37424;var state_37474__$1 = (function (){var statearr_37492 = state_37474;(statearr_37492[8] = inst_37416__$1);
(statearr_37492[14] = inst_37423);
(statearr_37492[9] = inst_37415__$1);
(statearr_37492[10] = inst_37414__$1);
(statearr_37492[11] = inst_37413__$1);
return statearr_37492;
})();var statearr_37493_37533 = state_37474__$1;(statearr_37493_37533[2] = null);
(statearr_37493_37533[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 11))
{var inst_37427 = (state_37474[15]);var inst_37413 = (state_37474[11]);var inst_37427__$1 = cljs.core.seq(inst_37413);var state_37474__$1 = (function (){var statearr_37494 = state_37474;(statearr_37494[15] = inst_37427__$1);
return statearr_37494;
})();if(inst_37427__$1)
{var statearr_37495_37534 = state_37474__$1;(statearr_37495_37534[1] = 13);
} else
{var statearr_37496_37535 = state_37474__$1;(statearr_37496_37535[1] = 14);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 12))
{var inst_37447 = (state_37474[2]);var state_37474__$1 = state_37474;var statearr_37497_37536 = state_37474__$1;(statearr_37497_37536[2] = inst_37447);
(statearr_37497_37536[1] = 9);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 13))
{var inst_37427 = (state_37474[15]);var inst_37429 = cljs.core.chunked_seq_QMARK_(inst_37427);var state_37474__$1 = state_37474;if(inst_37429)
{var statearr_37498_37537 = state_37474__$1;(statearr_37498_37537[1] = 16);
} else
{var statearr_37499_37538 = state_37474__$1;(statearr_37499_37538[1] = 17);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 14))
{var state_37474__$1 = state_37474;var statearr_37500_37539 = state_37474__$1;(statearr_37500_37539[2] = null);
(statearr_37500_37539[1] = 15);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 15))
{var inst_37445 = (state_37474[2]);var state_37474__$1 = state_37474;var statearr_37501_37540 = state_37474__$1;(statearr_37501_37540[2] = inst_37445);
(statearr_37501_37540[1] = 12);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 16))
{var inst_37427 = (state_37474[15]);var inst_37431 = cljs.core.chunk_first(inst_37427);var inst_37432 = cljs.core.chunk_rest(inst_37427);var inst_37433 = cljs.core.count(inst_37431);var inst_37413 = inst_37432;var inst_37414 = inst_37431;var inst_37415 = inst_37433;var inst_37416 = 0;var state_37474__$1 = (function (){var statearr_37502 = state_37474;(statearr_37502[8] = inst_37416);
(statearr_37502[9] = inst_37415);
(statearr_37502[10] = inst_37414);
(statearr_37502[11] = inst_37413);
return statearr_37502;
})();var statearr_37503_37541 = state_37474__$1;(statearr_37503_37541[2] = null);
(statearr_37503_37541[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 17))
{var inst_37427 = (state_37474[15]);var inst_37436 = cljs.core.first(inst_37427);var inst_37437 = cljs.core.async.muxch_STAR_(inst_37436);var inst_37438 = cljs.core.async.close_BANG_(inst_37437);var inst_37439 = cljs.core.next(inst_37427);var inst_37413 = inst_37439;var inst_37414 = null;var inst_37415 = 0;var inst_37416 = 0;var state_37474__$1 = (function (){var statearr_37504 = state_37474;(statearr_37504[16] = inst_37438);
(statearr_37504[8] = inst_37416);
(statearr_37504[9] = inst_37415);
(statearr_37504[10] = inst_37414);
(statearr_37504[11] = inst_37413);
return statearr_37504;
})();var statearr_37505_37542 = state_37474__$1;(statearr_37505_37542[2] = null);
(statearr_37505_37542[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 18))
{var inst_37442 = (state_37474[2]);var state_37474__$1 = state_37474;var statearr_37506_37543 = state_37474__$1;(statearr_37506_37543[2] = inst_37442);
(statearr_37506_37543[1] = 15);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 19))
{var state_37474__$1 = state_37474;var statearr_37507_37544 = state_37474__$1;(statearr_37507_37544[2] = null);
(statearr_37507_37544[1] = 24);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 20))
{var state_37474__$1 = state_37474;var statearr_37508_37545 = state_37474__$1;(statearr_37508_37545[2] = null);
(statearr_37508_37545[1] = 21);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 21))
{var inst_37467 = (state_37474[2]);var state_37474__$1 = (function (){var statearr_37509 = state_37474;(statearr_37509[17] = inst_37467);
return statearr_37509;
})();var statearr_37510_37546 = state_37474__$1;(statearr_37510_37546[2] = null);
(statearr_37510_37546[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 22))
{var inst_37464 = (state_37474[2]);var state_37474__$1 = state_37474;var statearr_37511_37547 = state_37474__$1;(statearr_37511_37547[2] = inst_37464);
(statearr_37511_37547[1] = 21);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 23))
{var inst_37451 = (state_37474[13]);var inst_37455 = (state_37474[2]);var inst_37456 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37451);var state_37474__$1 = (function (){var statearr_37512 = state_37474;(statearr_37512[18] = inst_37455);
return statearr_37512;
})();var statearr_37513_37548 = state_37474__$1;(statearr_37513_37548[2] = inst_37456);
cljs.core.async.impl.ioc_helpers.process_exception(state_37474__$1);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37475 === 24))
{var inst_37403 = (state_37474[7]);var inst_37453 = (state_37474[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37474,23,Object,null,22);var inst_37460 = cljs.core.async.muxch_STAR_(inst_37453);var state_37474__$1 = state_37474;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37474__$1,25,inst_37460,inst_37403);
} else
{if((state_val_37475 === 25))
{var inst_37462 = (state_37474[2]);var state_37474__$1 = state_37474;var statearr_37514_37549 = state_37474__$1;(statearr_37514_37549[2] = inst_37462);
cljs.core.async.impl.ioc_helpers.process_exception(state_37474__$1);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37518[0] = state_machine__5548__auto__);
(statearr_37518[1] = 1);
return statearr_37518;
});
var state_machine__5548__auto____1 = (function (state_37474){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37474);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37519){if((e37519 instanceof Object))
{var ex__5551__auto__ = e37519;var statearr_37520_37550 = state_37474;(statearr_37520_37550[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37474);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e37519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__37551 = state_37474;
state_37474 = G__37551;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37474){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37521 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37522);
return statearr_37521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5562__auto___37688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37658){var state_val_37659 = (state_37658[1]);if((state_val_37659 === 1))
{var state_37658__$1 = state_37658;var statearr_37660_37689 = state_37658__$1;(statearr_37660_37689[2] = null);
(statearr_37660_37689[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 2))
{var inst_37621 = cljs.core.reset_BANG_(dctr,cnt);var inst_37622 = 0;var state_37658__$1 = (function (){var statearr_37661 = state_37658;(statearr_37661[7] = inst_37622);
(statearr_37661[8] = inst_37621);
return statearr_37661;
})();var statearr_37662_37690 = state_37658__$1;(statearr_37662_37690[2] = null);
(statearr_37662_37690[1] = 4);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 3))
{var inst_37656 = (state_37658[2]);var state_37658__$1 = state_37658;return cljs.core.async.impl.ioc_helpers.return_chan(state_37658__$1,inst_37656);
} else
{if((state_val_37659 === 4))
{var inst_37622 = (state_37658[7]);var inst_37624 = (inst_37622 < cnt);var state_37658__$1 = state_37658;if(cljs.core.truth_(inst_37624))
{var statearr_37663_37691 = state_37658__$1;(statearr_37663_37691[1] = 6);
} else
{var statearr_37664_37692 = state_37658__$1;(statearr_37664_37692[1] = 7);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 5))
{var inst_37642 = (state_37658[2]);var state_37658__$1 = (function (){var statearr_37665 = state_37658;(statearr_37665[9] = inst_37642);
return statearr_37665;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37658__$1,12,dchan);
} else
{if((state_val_37659 === 6))
{var state_37658__$1 = state_37658;var statearr_37666_37693 = state_37658__$1;(statearr_37666_37693[2] = null);
(statearr_37666_37693[1] = 11);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 7))
{var state_37658__$1 = state_37658;var statearr_37667_37694 = state_37658__$1;(statearr_37667_37694[2] = null);
(statearr_37667_37694[1] = 8);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 8))
{var inst_37640 = (state_37658[2]);var state_37658__$1 = state_37658;var statearr_37668_37695 = state_37658__$1;(statearr_37668_37695[2] = inst_37640);
(statearr_37668_37695[1] = 5);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 9))
{var inst_37622 = (state_37658[7]);var inst_37635 = (state_37658[2]);var inst_37636 = (inst_37622 + 1);var inst_37622__$1 = inst_37636;var state_37658__$1 = (function (){var statearr_37669 = state_37658;(statearr_37669[10] = inst_37635);
(statearr_37669[7] = inst_37622__$1);
return statearr_37669;
})();var statearr_37670_37696 = state_37658__$1;(statearr_37670_37696[2] = null);
(statearr_37670_37696[1] = 4);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 10))
{var inst_37626 = (state_37658[2]);var inst_37627 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_37658__$1 = (function (){var statearr_37671 = state_37658;(statearr_37671[11] = inst_37626);
return statearr_37671;
})();var statearr_37672_37697 = state_37658__$1;(statearr_37672_37697[2] = inst_37627);
cljs.core.async.impl.ioc_helpers.process_exception(state_37658__$1);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 11))
{var inst_37622 = (state_37658[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37658,10,Object,null,9);var inst_37631 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37622) : chs__$1.call(null,inst_37622));var inst_37632 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37622) : done.call(null,inst_37622));var inst_37633 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37631,inst_37632);var state_37658__$1 = state_37658;var statearr_37673_37698 = state_37658__$1;(statearr_37673_37698[2] = inst_37633);
cljs.core.async.impl.ioc_helpers.process_exception(state_37658__$1);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 12))
{var inst_37644 = (state_37658[12]);var inst_37644__$1 = (state_37658[2]);var inst_37645 = cljs.core.some(cljs.core.nil_QMARK_,inst_37644__$1);var state_37658__$1 = (function (){var statearr_37674 = state_37658;(statearr_37674[12] = inst_37644__$1);
return statearr_37674;
})();if(cljs.core.truth_(inst_37645))
{var statearr_37675_37699 = state_37658__$1;(statearr_37675_37699[1] = 13);
} else
{var statearr_37676_37700 = state_37658__$1;(statearr_37676_37700[1] = 14);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 13))
{var inst_37647 = cljs.core.async.close_BANG_(out);var state_37658__$1 = state_37658;var statearr_37677_37701 = state_37658__$1;(statearr_37677_37701[2] = inst_37647);
(statearr_37677_37701[1] = 15);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 14))
{var inst_37644 = (state_37658[12]);var inst_37649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37644);var state_37658__$1 = state_37658;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37658__$1,16,out,inst_37649);
} else
{if((state_val_37659 === 15))
{var inst_37654 = (state_37658[2]);var state_37658__$1 = state_37658;var statearr_37678_37702 = state_37658__$1;(statearr_37678_37702[2] = inst_37654);
(statearr_37678_37702[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37659 === 16))
{var inst_37651 = (state_37658[2]);var state_37658__$1 = (function (){var statearr_37679 = state_37658;(statearr_37679[13] = inst_37651);
return statearr_37679;
})();var statearr_37680_37703 = state_37658__$1;(statearr_37680_37703[2] = null);
(statearr_37680_37703[1] = 2);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37684[0] = state_machine__5548__auto__);
(statearr_37684[1] = 1);
return statearr_37684;
});
var state_machine__5548__auto____1 = (function (state_37658){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37658);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37685){if((e37685 instanceof Object))
{var ex__5551__auto__ = e37685;var statearr_37686_37704 = state_37658;(statearr_37686_37704[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37658);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e37685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__37705 = state_37658;
state_37658 = G__37705;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37658){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37687 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37688);
return statearr_37687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___37813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37789){var state_val_37790 = (state_37789[1]);if((state_val_37790 === 1))
{var inst_37760 = cljs.core.vec(chs);var inst_37761 = inst_37760;var state_37789__$1 = (function (){var statearr_37791 = state_37789;(statearr_37791[7] = inst_37761);
return statearr_37791;
})();var statearr_37792_37814 = state_37789__$1;(statearr_37792_37814[2] = null);
(statearr_37792_37814[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37790 === 2))
{var inst_37761 = (state_37789[7]);var inst_37763 = cljs.core.count(inst_37761);var inst_37764 = (inst_37763 > 0);var state_37789__$1 = state_37789;if(cljs.core.truth_(inst_37764))
{var statearr_37793_37815 = state_37789__$1;(statearr_37793_37815[1] = 4);
} else
{var statearr_37794_37816 = state_37789__$1;(statearr_37794_37816[1] = 5);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37790 === 3))
{var inst_37787 = (state_37789[2]);var state_37789__$1 = state_37789;return cljs.core.async.impl.ioc_helpers.return_chan(state_37789__$1,inst_37787);
} else
{if((state_val_37790 === 4))
{var inst_37761 = (state_37789[7]);var state_37789__$1 = state_37789;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37789__$1,7,inst_37761);
} else
{if((state_val_37790 === 5))
{var inst_37783 = cljs.core.async.close_BANG_(out);var state_37789__$1 = state_37789;var statearr_37795_37817 = state_37789__$1;(statearr_37795_37817[2] = inst_37783);
(statearr_37795_37817[1] = 6);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37790 === 6))
{var inst_37785 = (state_37789[2]);var state_37789__$1 = state_37789;var statearr_37796_37818 = state_37789__$1;(statearr_37796_37818[2] = inst_37785);
(statearr_37796_37818[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37790 === 7))
{var inst_37768 = (state_37789[8]);var inst_37769 = (state_37789[9]);var inst_37768__$1 = (state_37789[2]);var inst_37769__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37768__$1,0,null);var inst_37770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37768__$1,1,null);var inst_37771 = (inst_37769__$1 == null);var state_37789__$1 = (function (){var statearr_37797 = state_37789;(statearr_37797[10] = inst_37770);
(statearr_37797[8] = inst_37768__$1);
(statearr_37797[9] = inst_37769__$1);
return statearr_37797;
})();if(cljs.core.truth_(inst_37771))
{var statearr_37798_37819 = state_37789__$1;(statearr_37798_37819[1] = 8);
} else
{var statearr_37799_37820 = state_37789__$1;(statearr_37799_37820[1] = 9);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37790 === 8))
{var inst_37761 = (state_37789[7]);var inst_37770 = (state_37789[10]);var inst_37768 = (state_37789[8]);var inst_37769 = (state_37789[9]);var inst_37773 = (function (){var c = inst_37770;var v = inst_37769;var vec__37766 = inst_37768;var cs = inst_37761;return ((function (c,v,vec__37766,cs,inst_37761,inst_37770,inst_37768,inst_37769,state_val_37790){
return (function (p1__37706_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37706_SHARP_);
});
;})(c,v,vec__37766,cs,inst_37761,inst_37770,inst_37768,inst_37769,state_val_37790))
})();var inst_37774 = cljs.core.filterv(inst_37773,inst_37761);var inst_37761__$1 = inst_37774;var state_37789__$1 = (function (){var statearr_37800 = state_37789;(statearr_37800[7] = inst_37761__$1);
return statearr_37800;
})();var statearr_37801_37821 = state_37789__$1;(statearr_37801_37821[2] = null);
(statearr_37801_37821[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37790 === 9))
{var inst_37769 = (state_37789[9]);var state_37789__$1 = state_37789;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37789__$1,11,out,inst_37769);
} else
{if((state_val_37790 === 10))
{var inst_37781 = (state_37789[2]);var state_37789__$1 = state_37789;var statearr_37803_37822 = state_37789__$1;(statearr_37803_37822[2] = inst_37781);
(statearr_37803_37822[1] = 6);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37790 === 11))
{var inst_37761 = (state_37789[7]);var inst_37778 = (state_37789[2]);var tmp37802 = inst_37761;var inst_37761__$1 = tmp37802;var state_37789__$1 = (function (){var statearr_37804 = state_37789;(statearr_37804[7] = inst_37761__$1);
(statearr_37804[11] = inst_37778);
return statearr_37804;
})();var statearr_37805_37823 = state_37789__$1;(statearr_37805_37823[2] = null);
(statearr_37805_37823[1] = 2);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37809 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37809[0] = state_machine__5548__auto__);
(statearr_37809[1] = 1);
return statearr_37809;
});
var state_machine__5548__auto____1 = (function (state_37789){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37789);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37810){if((e37810 instanceof Object))
{var ex__5551__auto__ = e37810;var statearr_37811_37824 = state_37789;(statearr_37811_37824[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37789);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e37810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__37825 = state_37789;
state_37789 = G__37825;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37789){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37812 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37813);
return statearr_37812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___37918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37895){var state_val_37896 = (state_37895[1]);if((state_val_37896 === 1))
{var inst_37872 = 0;var state_37895__$1 = (function (){var statearr_37897 = state_37895;(statearr_37897[7] = inst_37872);
return statearr_37897;
})();var statearr_37898_37919 = state_37895__$1;(statearr_37898_37919[2] = null);
(statearr_37898_37919[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37896 === 2))
{var inst_37872 = (state_37895[7]);var inst_37874 = (inst_37872 < n);var state_37895__$1 = state_37895;if(cljs.core.truth_(inst_37874))
{var statearr_37899_37920 = state_37895__$1;(statearr_37899_37920[1] = 4);
} else
{var statearr_37900_37921 = state_37895__$1;(statearr_37900_37921[1] = 5);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37896 === 3))
{var inst_37892 = (state_37895[2]);var inst_37893 = cljs.core.async.close_BANG_(out);var state_37895__$1 = (function (){var statearr_37901 = state_37895;(statearr_37901[8] = inst_37892);
return statearr_37901;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_37895__$1,inst_37893);
} else
{if((state_val_37896 === 4))
{var state_37895__$1 = state_37895;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37895__$1,7,ch);
} else
{if((state_val_37896 === 5))
{var state_37895__$1 = state_37895;var statearr_37902_37922 = state_37895__$1;(statearr_37902_37922[2] = null);
(statearr_37902_37922[1] = 6);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37896 === 6))
{var inst_37890 = (state_37895[2]);var state_37895__$1 = state_37895;var statearr_37903_37923 = state_37895__$1;(statearr_37903_37923[2] = inst_37890);
(statearr_37903_37923[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37896 === 7))
{var inst_37877 = (state_37895[9]);var inst_37877__$1 = (state_37895[2]);var inst_37878 = (inst_37877__$1 == null);var inst_37879 = cljs.core.not(inst_37878);var state_37895__$1 = (function (){var statearr_37904 = state_37895;(statearr_37904[9] = inst_37877__$1);
return statearr_37904;
})();if(inst_37879)
{var statearr_37905_37924 = state_37895__$1;(statearr_37905_37924[1] = 8);
} else
{var statearr_37906_37925 = state_37895__$1;(statearr_37906_37925[1] = 9);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_37896 === 8))
{var inst_37877 = (state_37895[9]);var state_37895__$1 = state_37895;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37895__$1,11,out,inst_37877);
} else
{if((state_val_37896 === 9))
{var state_37895__$1 = state_37895;var statearr_37907_37926 = state_37895__$1;(statearr_37907_37926[2] = null);
(statearr_37907_37926[1] = 10);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37896 === 10))
{var inst_37887 = (state_37895[2]);var state_37895__$1 = state_37895;var statearr_37908_37927 = state_37895__$1;(statearr_37908_37927[2] = inst_37887);
(statearr_37908_37927[1] = 6);
return cljs.core.constant$keyword$553;
} else
{if((state_val_37896 === 11))
{var inst_37872 = (state_37895[7]);var inst_37882 = (state_37895[2]);var inst_37883 = (inst_37872 + 1);var inst_37872__$1 = inst_37883;var state_37895__$1 = (function (){var statearr_37909 = state_37895;(statearr_37909[7] = inst_37872__$1);
(statearr_37909[10] = inst_37882);
return statearr_37909;
})();var statearr_37910_37928 = state_37895__$1;(statearr_37910_37928[2] = null);
(statearr_37910_37928[1] = 2);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37914 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37914[0] = state_machine__5548__auto__);
(statearr_37914[1] = 1);
return statearr_37914;
});
var state_machine__5548__auto____1 = (function (state_37895){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37895);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37915){if((e37915 instanceof Object))
{var ex__5551__auto__ = e37915;var statearr_37916_37929 = state_37895;(statearr_37916_37929[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37895);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e37915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__37930 = state_37895;
state_37895 = G__37930;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37895){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37917 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37918);
return statearr_37917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38002){var state_val_38003 = (state_38002[1]);if((state_val_38003 === 1))
{var inst_37979 = null;var state_38002__$1 = (function (){var statearr_38004 = state_38002;(statearr_38004[7] = inst_37979);
return statearr_38004;
})();var statearr_38005_38028 = state_38002__$1;(statearr_38005_38028[2] = null);
(statearr_38005_38028[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38003 === 2))
{var state_38002__$1 = state_38002;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38002__$1,4,ch);
} else
{if((state_val_38003 === 3))
{var inst_37999 = (state_38002[2]);var inst_38000 = cljs.core.async.close_BANG_(out);var state_38002__$1 = (function (){var statearr_38006 = state_38002;(statearr_38006[8] = inst_37999);
return statearr_38006;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38002__$1,inst_38000);
} else
{if((state_val_38003 === 4))
{var inst_37982 = (state_38002[9]);var inst_37982__$1 = (state_38002[2]);var inst_37983 = (inst_37982__$1 == null);var inst_37984 = cljs.core.not(inst_37983);var state_38002__$1 = (function (){var statearr_38007 = state_38002;(statearr_38007[9] = inst_37982__$1);
return statearr_38007;
})();if(inst_37984)
{var statearr_38008_38029 = state_38002__$1;(statearr_38008_38029[1] = 5);
} else
{var statearr_38009_38030 = state_38002__$1;(statearr_38009_38030[1] = 6);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_38003 === 5))
{var inst_37979 = (state_38002[7]);var inst_37982 = (state_38002[9]);var inst_37986 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37982,inst_37979);var state_38002__$1 = state_38002;if(inst_37986)
{var statearr_38010_38031 = state_38002__$1;(statearr_38010_38031[1] = 8);
} else
{var statearr_38011_38032 = state_38002__$1;(statearr_38011_38032[1] = 9);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_38003 === 6))
{var state_38002__$1 = state_38002;var statearr_38013_38033 = state_38002__$1;(statearr_38013_38033[2] = null);
(statearr_38013_38033[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38003 === 7))
{var inst_37997 = (state_38002[2]);var state_38002__$1 = state_38002;var statearr_38014_38034 = state_38002__$1;(statearr_38014_38034[2] = inst_37997);
(statearr_38014_38034[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38003 === 8))
{var inst_37979 = (state_38002[7]);var tmp38012 = inst_37979;var inst_37979__$1 = tmp38012;var state_38002__$1 = (function (){var statearr_38015 = state_38002;(statearr_38015[7] = inst_37979__$1);
return statearr_38015;
})();var statearr_38016_38035 = state_38002__$1;(statearr_38016_38035[2] = null);
(statearr_38016_38035[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38003 === 9))
{var inst_37982 = (state_38002[9]);var state_38002__$1 = state_38002;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38002__$1,11,out,inst_37982);
} else
{if((state_val_38003 === 10))
{var inst_37994 = (state_38002[2]);var state_38002__$1 = state_38002;var statearr_38017_38036 = state_38002__$1;(statearr_38017_38036[2] = inst_37994);
(statearr_38017_38036[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38003 === 11))
{var inst_37982 = (state_38002[9]);var inst_37991 = (state_38002[2]);var inst_37979 = inst_37982;var state_38002__$1 = (function (){var statearr_38018 = state_38002;(statearr_38018[10] = inst_37991);
(statearr_38018[7] = inst_37979);
return statearr_38018;
})();var statearr_38019_38037 = state_38002__$1;(statearr_38019_38037[2] = null);
(statearr_38019_38037[1] = 2);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38023 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38023[0] = state_machine__5548__auto__);
(statearr_38023[1] = 1);
return statearr_38023;
});
var state_machine__5548__auto____1 = (function (state_38002){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38002);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38024){if((e38024 instanceof Object))
{var ex__5551__auto__ = e38024;var statearr_38025_38038 = state_38002;(statearr_38025_38038[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38002);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e38024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__38039 = state_38002;
state_38002 = G__38039;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38002){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38026 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38027);
return statearr_38026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38144){var state_val_38145 = (state_38144[1]);if((state_val_38145 === 1))
{var inst_38107 = (new Array(n));var inst_38108 = inst_38107;var inst_38109 = 0;var state_38144__$1 = (function (){var statearr_38146 = state_38144;(statearr_38146[7] = inst_38109);
(statearr_38146[8] = inst_38108);
return statearr_38146;
})();var statearr_38147_38175 = state_38144__$1;(statearr_38147_38175[2] = null);
(statearr_38147_38175[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38145 === 2))
{var state_38144__$1 = state_38144;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38144__$1,4,ch);
} else
{if((state_val_38145 === 3))
{var inst_38142 = (state_38144[2]);var state_38144__$1 = state_38144;return cljs.core.async.impl.ioc_helpers.return_chan(state_38144__$1,inst_38142);
} else
{if((state_val_38145 === 4))
{var inst_38112 = (state_38144[9]);var inst_38112__$1 = (state_38144[2]);var inst_38113 = (inst_38112__$1 == null);var inst_38114 = cljs.core.not(inst_38113);var state_38144__$1 = (function (){var statearr_38148 = state_38144;(statearr_38148[9] = inst_38112__$1);
return statearr_38148;
})();if(inst_38114)
{var statearr_38149_38176 = state_38144__$1;(statearr_38149_38176[1] = 5);
} else
{var statearr_38150_38177 = state_38144__$1;(statearr_38150_38177[1] = 6);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_38145 === 5))
{var inst_38109 = (state_38144[7]);var inst_38117 = (state_38144[10]);var inst_38112 = (state_38144[9]);var inst_38108 = (state_38144[8]);var inst_38116 = (inst_38108[inst_38109] = inst_38112);var inst_38117__$1 = (inst_38109 + 1);var inst_38118 = (inst_38117__$1 < n);var state_38144__$1 = (function (){var statearr_38151 = state_38144;(statearr_38151[10] = inst_38117__$1);
(statearr_38151[11] = inst_38116);
return statearr_38151;
})();if(cljs.core.truth_(inst_38118))
{var statearr_38152_38178 = state_38144__$1;(statearr_38152_38178[1] = 8);
} else
{var statearr_38153_38179 = state_38144__$1;(statearr_38153_38179[1] = 9);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_38145 === 6))
{var inst_38109 = (state_38144[7]);var inst_38130 = (inst_38109 > 0);var state_38144__$1 = state_38144;if(cljs.core.truth_(inst_38130))
{var statearr_38155_38180 = state_38144__$1;(statearr_38155_38180[1] = 12);
} else
{var statearr_38156_38181 = state_38144__$1;(statearr_38156_38181[1] = 13);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_38145 === 7))
{var inst_38140 = (state_38144[2]);var state_38144__$1 = state_38144;var statearr_38157_38182 = state_38144__$1;(statearr_38157_38182[2] = inst_38140);
(statearr_38157_38182[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38145 === 8))
{var inst_38117 = (state_38144[10]);var inst_38108 = (state_38144[8]);var tmp38154 = inst_38108;var inst_38108__$1 = tmp38154;var inst_38109 = inst_38117;var state_38144__$1 = (function (){var statearr_38158 = state_38144;(statearr_38158[7] = inst_38109);
(statearr_38158[8] = inst_38108__$1);
return statearr_38158;
})();var statearr_38159_38183 = state_38144__$1;(statearr_38159_38183[2] = null);
(statearr_38159_38183[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38145 === 9))
{var inst_38108 = (state_38144[8]);var inst_38122 = cljs.core.vec(inst_38108);var state_38144__$1 = state_38144;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38144__$1,11,out,inst_38122);
} else
{if((state_val_38145 === 10))
{var inst_38128 = (state_38144[2]);var state_38144__$1 = state_38144;var statearr_38160_38184 = state_38144__$1;(statearr_38160_38184[2] = inst_38128);
(statearr_38160_38184[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38145 === 11))
{var inst_38124 = (state_38144[2]);var inst_38125 = (new Array(n));var inst_38108 = inst_38125;var inst_38109 = 0;var state_38144__$1 = (function (){var statearr_38161 = state_38144;(statearr_38161[12] = inst_38124);
(statearr_38161[7] = inst_38109);
(statearr_38161[8] = inst_38108);
return statearr_38161;
})();var statearr_38162_38185 = state_38144__$1;(statearr_38162_38185[2] = null);
(statearr_38162_38185[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38145 === 12))
{var inst_38108 = (state_38144[8]);var inst_38132 = cljs.core.vec(inst_38108);var state_38144__$1 = state_38144;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38144__$1,15,out,inst_38132);
} else
{if((state_val_38145 === 13))
{var state_38144__$1 = state_38144;var statearr_38163_38186 = state_38144__$1;(statearr_38163_38186[2] = null);
(statearr_38163_38186[1] = 14);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38145 === 14))
{var inst_38137 = (state_38144[2]);var inst_38138 = cljs.core.async.close_BANG_(out);var state_38144__$1 = (function (){var statearr_38164 = state_38144;(statearr_38164[13] = inst_38137);
return statearr_38164;
})();var statearr_38165_38187 = state_38144__$1;(statearr_38165_38187[2] = inst_38138);
(statearr_38165_38187[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38145 === 15))
{var inst_38134 = (state_38144[2]);var state_38144__$1 = state_38144;var statearr_38166_38188 = state_38144__$1;(statearr_38166_38188[2] = inst_38134);
(statearr_38166_38188[1] = 14);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38170[0] = state_machine__5548__auto__);
(statearr_38170[1] = 1);
return statearr_38170;
});
var state_machine__5548__auto____1 = (function (state_38144){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38144);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38171){if((e38171 instanceof Object))
{var ex__5551__auto__ = e38171;var statearr_38172_38189 = state_38144;(statearr_38172_38189[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38144);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e38171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__38190 = state_38144;
state_38144 = G__38190;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38144){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38173 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38174);
return statearr_38173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38303){var state_val_38304 = (state_38303[1]);if((state_val_38304 === 1))
{var inst_38262 = [];var inst_38263 = inst_38262;var inst_38264 = cljs.core.constant$keyword$566;var state_38303__$1 = (function (){var statearr_38305 = state_38303;(statearr_38305[7] = inst_38263);
(statearr_38305[8] = inst_38264);
return statearr_38305;
})();var statearr_38306_38334 = state_38303__$1;(statearr_38306_38334[2] = null);
(statearr_38306_38334[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38304 === 2))
{var state_38303__$1 = state_38303;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38303__$1,4,ch);
} else
{if((state_val_38304 === 3))
{var inst_38301 = (state_38303[2]);var state_38303__$1 = state_38303;return cljs.core.async.impl.ioc_helpers.return_chan(state_38303__$1,inst_38301);
} else
{if((state_val_38304 === 4))
{var inst_38267 = (state_38303[9]);var inst_38267__$1 = (state_38303[2]);var inst_38268 = (inst_38267__$1 == null);var inst_38269 = cljs.core.not(inst_38268);var state_38303__$1 = (function (){var statearr_38307 = state_38303;(statearr_38307[9] = inst_38267__$1);
return statearr_38307;
})();if(inst_38269)
{var statearr_38308_38335 = state_38303__$1;(statearr_38308_38335[1] = 5);
} else
{var statearr_38309_38336 = state_38303__$1;(statearr_38309_38336[1] = 6);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_38304 === 5))
{var inst_38271 = (state_38303[10]);var inst_38267 = (state_38303[9]);var inst_38264 = (state_38303[8]);var inst_38271__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38267) : f.call(null,inst_38267));var inst_38272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38271__$1,inst_38264);var inst_38273 = cljs.core.keyword_identical_QMARK_(inst_38264,cljs.core.constant$keyword$566);var inst_38274 = (inst_38272) || (inst_38273);var state_38303__$1 = (function (){var statearr_38310 = state_38303;(statearr_38310[10] = inst_38271__$1);
return statearr_38310;
})();if(cljs.core.truth_(inst_38274))
{var statearr_38311_38337 = state_38303__$1;(statearr_38311_38337[1] = 8);
} else
{var statearr_38312_38338 = state_38303__$1;(statearr_38312_38338[1] = 9);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_38304 === 6))
{var inst_38263 = (state_38303[7]);var inst_38288 = inst_38263.length;var inst_38289 = (inst_38288 > 0);var state_38303__$1 = state_38303;if(cljs.core.truth_(inst_38289))
{var statearr_38314_38339 = state_38303__$1;(statearr_38314_38339[1] = 12);
} else
{var statearr_38315_38340 = state_38303__$1;(statearr_38315_38340[1] = 13);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_38304 === 7))
{var inst_38299 = (state_38303[2]);var state_38303__$1 = state_38303;var statearr_38316_38341 = state_38303__$1;(statearr_38316_38341[2] = inst_38299);
(statearr_38316_38341[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38304 === 8))
{var inst_38271 = (state_38303[10]);var inst_38267 = (state_38303[9]);var inst_38263 = (state_38303[7]);var inst_38276 = inst_38263.push(inst_38267);var tmp38313 = inst_38263;var inst_38263__$1 = tmp38313;var inst_38264 = inst_38271;var state_38303__$1 = (function (){var statearr_38317 = state_38303;(statearr_38317[7] = inst_38263__$1);
(statearr_38317[8] = inst_38264);
(statearr_38317[11] = inst_38276);
return statearr_38317;
})();var statearr_38318_38342 = state_38303__$1;(statearr_38318_38342[2] = null);
(statearr_38318_38342[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38304 === 9))
{var inst_38263 = (state_38303[7]);var inst_38279 = cljs.core.vec(inst_38263);var state_38303__$1 = state_38303;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38303__$1,11,out,inst_38279);
} else
{if((state_val_38304 === 10))
{var inst_38286 = (state_38303[2]);var state_38303__$1 = state_38303;var statearr_38319_38343 = state_38303__$1;(statearr_38319_38343[2] = inst_38286);
(statearr_38319_38343[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38304 === 11))
{var inst_38271 = (state_38303[10]);var inst_38267 = (state_38303[9]);var inst_38281 = (state_38303[2]);var inst_38282 = [];var inst_38283 = inst_38282.push(inst_38267);var inst_38263 = inst_38282;var inst_38264 = inst_38271;var state_38303__$1 = (function (){var statearr_38320 = state_38303;(statearr_38320[7] = inst_38263);
(statearr_38320[8] = inst_38264);
(statearr_38320[12] = inst_38281);
(statearr_38320[13] = inst_38283);
return statearr_38320;
})();var statearr_38321_38344 = state_38303__$1;(statearr_38321_38344[2] = null);
(statearr_38321_38344[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38304 === 12))
{var inst_38263 = (state_38303[7]);var inst_38291 = cljs.core.vec(inst_38263);var state_38303__$1 = state_38303;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38303__$1,15,out,inst_38291);
} else
{if((state_val_38304 === 13))
{var state_38303__$1 = state_38303;var statearr_38322_38345 = state_38303__$1;(statearr_38322_38345[2] = null);
(statearr_38322_38345[1] = 14);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38304 === 14))
{var inst_38296 = (state_38303[2]);var inst_38297 = cljs.core.async.close_BANG_(out);var state_38303__$1 = (function (){var statearr_38323 = state_38303;(statearr_38323[14] = inst_38296);
return statearr_38323;
})();var statearr_38324_38346 = state_38303__$1;(statearr_38324_38346[2] = inst_38297);
(statearr_38324_38346[1] = 7);
return cljs.core.constant$keyword$553;
} else
{if((state_val_38304 === 15))
{var inst_38293 = (state_38303[2]);var state_38303__$1 = state_38303;var statearr_38325_38347 = state_38303__$1;(statearr_38325_38347[2] = inst_38293);
(statearr_38325_38347[1] = 14);
return cljs.core.constant$keyword$553;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38329[0] = state_machine__5548__auto__);
(statearr_38329[1] = 1);
return statearr_38329;
});
var state_machine__5548__auto____1 = (function (state_38303){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38303);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38330){if((e38330 instanceof Object))
{var ex__5551__auto__ = e38330;var statearr_38331_38348 = state_38303;(statearr_38331_38348[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38303);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e38330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__38349 = state_38303;
state_38303 = G__38349;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38303){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38332 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38333);
return statearr_38332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
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
