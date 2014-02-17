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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24013 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24013 = (function (f,fn_handler,meta24014){
this.f = f;
this.fn_handler = fn_handler;
this.meta24014 = meta24014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24013.cljs$lang$type = true;
cljs.core.async.t24013.cljs$lang$ctorStr = "cljs.core.async/t24013";
cljs.core.async.t24013.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24013");
});
cljs.core.async.t24013.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24015){var self__ = this;
var _24015__$1 = this;return self__.meta24014;
});
cljs.core.async.t24013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24015,meta24014__$1){var self__ = this;
var _24015__$1 = this;return (new cljs.core.async.t24013(self__.f,self__.fn_handler,meta24014__$1));
});
cljs.core.async.__GT_t24013 = (function __GT_t24013(f__$1,fn_handler__$1,meta24014){return (new cljs.core.async.t24013(f__$1,fn_handler__$1,meta24014));
});
}
return (new cljs.core.async.t24013(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24017 = buff;if(G__24017)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24017.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24017.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24017);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24017);
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
{var val_24018 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24018) : fn1.call(null,val_24018));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24018) : fn1.call(null,val_24018));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24019 = n;var x_24020 = 0;while(true){
if((x_24020 < n__4248__auto___24019))
{(a[x_24020] = 0);
{
var G__24021 = (x_24020 + 1);
x_24020 = G__24021;
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
var G__24022 = (i + 1);
i = G__24022;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24026 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24026 = (function (flag,alt_flag,meta24027){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24027 = meta24027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24026.cljs$lang$type = true;
cljs.core.async.t24026.cljs$lang$ctorStr = "cljs.core.async/t24026";
cljs.core.async.t24026.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24026");
});
cljs.core.async.t24026.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24028){var self__ = this;
var _24028__$1 = this;return self__.meta24027;
});
cljs.core.async.t24026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24028,meta24027__$1){var self__ = this;
var _24028__$1 = this;return (new cljs.core.async.t24026(self__.flag,self__.alt_flag,meta24027__$1));
});
cljs.core.async.__GT_t24026 = (function __GT_t24026(flag__$1,alt_flag__$1,meta24027){return (new cljs.core.async.t24026(flag__$1,alt_flag__$1,meta24027));
});
}
return (new cljs.core.async.t24026(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24032 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24032 = (function (cb,flag,alt_handler,meta24033){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24033 = meta24033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24032.cljs$lang$type = true;
cljs.core.async.t24032.cljs$lang$ctorStr = "cljs.core.async/t24032";
cljs.core.async.t24032.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24032");
});
cljs.core.async.t24032.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24034){var self__ = this;
var _24034__$1 = this;return self__.meta24033;
});
cljs.core.async.t24032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24034,meta24033__$1){var self__ = this;
var _24034__$1 = this;return (new cljs.core.async.t24032(self__.cb,self__.flag,self__.alt_handler,meta24033__$1));
});
cljs.core.async.__GT_t24032 = (function __GT_t24032(cb__$1,flag__$1,alt_handler__$1,meta24033){return (new cljs.core.async.t24032(cb__$1,flag__$1,alt_handler__$1,meta24033));
});
}
return (new cljs.core.async.t24032(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24035_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24035_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24035_SHARP_,port], null)));
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
var G__24036 = (i + 1);
i = G__24036;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$224))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$224], null));
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
var alts_BANG___delegate = function (ports,p__24037){var map__24039 = p__24037;var map__24039__$1 = ((cljs.core.seq_QMARK_(map__24039))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24039):map__24039);var opts = map__24039__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24037 = null;if (arguments.length > 1) {
  p__24037 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24037);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24040){
var ports = cljs.core.first(arglist__24040);
var p__24037 = cljs.core.rest(arglist__24040);
return alts_BANG___delegate(ports,p__24037);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24048 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24048 = (function (ch,f,map_LT_,meta24049){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24049 = meta24049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24048.cljs$lang$type = true;
cljs.core.async.t24048.cljs$lang$ctorStr = "cljs.core.async/t24048";
cljs.core.async.t24048.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24048");
});
cljs.core.async.t24048.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24048.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24051 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24051 = (function (fn1,_,meta24049,ch,f,map_LT_,meta24052){
this.fn1 = fn1;
this._ = _;
this.meta24049 = meta24049;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24052 = meta24052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24051.cljs$lang$type = true;
cljs.core.async.t24051.cljs$lang$ctorStr = "cljs.core.async/t24051";
cljs.core.async.t24051.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24051");
});
cljs.core.async.t24051.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24051.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24041_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24041_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24041_SHARP_) : self__.f.call(null,p1__24041_SHARP_)))) : f1.call(null,(((p1__24041_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24041_SHARP_) : self__.f.call(null,p1__24041_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24053){var self__ = this;
var _24053__$1 = this;return self__.meta24052;
});
cljs.core.async.t24051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24053,meta24052__$1){var self__ = this;
var _24053__$1 = this;return (new cljs.core.async.t24051(self__.fn1,self__._,self__.meta24049,self__.ch,self__.f,self__.map_LT_,meta24052__$1));
});
cljs.core.async.__GT_t24051 = (function __GT_t24051(fn1__$1,___$2,meta24049__$1,ch__$2,f__$2,map_LT___$2,meta24052){return (new cljs.core.async.t24051(fn1__$1,___$2,meta24049__$1,ch__$2,f__$2,map_LT___$2,meta24052));
});
}
return (new cljs.core.async.t24051(fn1,___$1,self__.meta24049,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24048.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24050){var self__ = this;
var _24050__$1 = this;return self__.meta24049;
});
cljs.core.async.t24048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24050,meta24049__$1){var self__ = this;
var _24050__$1 = this;return (new cljs.core.async.t24048(self__.ch,self__.f,self__.map_LT_,meta24049__$1));
});
cljs.core.async.__GT_t24048 = (function __GT_t24048(ch__$1,f__$1,map_LT___$1,meta24049){return (new cljs.core.async.t24048(ch__$1,f__$1,map_LT___$1,meta24049));
});
}
return (new cljs.core.async.t24048(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24057 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24057 = (function (ch,f,map_GT_,meta24058){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24058 = meta24058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24057.cljs$lang$type = true;
cljs.core.async.t24057.cljs$lang$ctorStr = "cljs.core.async/t24057";
cljs.core.async.t24057.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24057");
});
cljs.core.async.t24057.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24057.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24057.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24057.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24057.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24057.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24059){var self__ = this;
var _24059__$1 = this;return self__.meta24058;
});
cljs.core.async.t24057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24059,meta24058__$1){var self__ = this;
var _24059__$1 = this;return (new cljs.core.async.t24057(self__.ch,self__.f,self__.map_GT_,meta24058__$1));
});
cljs.core.async.__GT_t24057 = (function __GT_t24057(ch__$1,f__$1,map_GT___$1,meta24058){return (new cljs.core.async.t24057(ch__$1,f__$1,map_GT___$1,meta24058));
});
}
return (new cljs.core.async.t24057(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24063 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24063 = (function (ch,p,filter_GT_,meta24064){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24064 = meta24064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24063.cljs$lang$type = true;
cljs.core.async.t24063.cljs$lang$ctorStr = "cljs.core.async/t24063";
cljs.core.async.t24063.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24063");
});
cljs.core.async.t24063.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24063.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24063.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24065){var self__ = this;
var _24065__$1 = this;return self__.meta24064;
});
cljs.core.async.t24063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24065,meta24064__$1){var self__ = this;
var _24065__$1 = this;return (new cljs.core.async.t24063(self__.ch,self__.p,self__.filter_GT_,meta24064__$1));
});
cljs.core.async.__GT_t24063 = (function __GT_t24063(ch__$1,p__$1,filter_GT___$1,meta24064){return (new cljs.core.async.t24063(ch__$1,p__$1,filter_GT___$1,meta24064));
});
}
return (new cljs.core.async.t24063(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24127){var state_val_24128 = (state_24127[1]);if((state_val_24128 === 1))
{var state_24127__$1 = state_24127;var statearr_24129_24149 = state_24127__$1;(statearr_24129_24149[2] = null);
(statearr_24129_24149[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24128 === 2))
{var state_24127__$1 = state_24127;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24127__$1,4,ch);
} else
{if((state_val_24128 === 3))
{var inst_24125 = (state_24127[2]);var state_24127__$1 = state_24127;return cljs.core.async.impl.ioc_helpers.return_chan(state_24127__$1,inst_24125);
} else
{if((state_val_24128 === 4))
{var inst_24109 = (state_24127[7]);var inst_24109__$1 = (state_24127[2]);var inst_24110 = (inst_24109__$1 == null);var state_24127__$1 = (function (){var statearr_24130 = state_24127;(statearr_24130[7] = inst_24109__$1);
return statearr_24130;
})();if(cljs.core.truth_(inst_24110))
{var statearr_24131_24150 = state_24127__$1;(statearr_24131_24150[1] = 5);
} else
{var statearr_24132_24151 = state_24127__$1;(statearr_24132_24151[1] = 6);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24128 === 5))
{var inst_24112 = cljs.core.async.close_BANG_(out);var state_24127__$1 = state_24127;var statearr_24133_24152 = state_24127__$1;(statearr_24133_24152[2] = inst_24112);
(statearr_24133_24152[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24128 === 6))
{var inst_24109 = (state_24127[7]);var inst_24114 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24109) : p.call(null,inst_24109));var state_24127__$1 = state_24127;if(cljs.core.truth_(inst_24114))
{var statearr_24134_24153 = state_24127__$1;(statearr_24134_24153[1] = 8);
} else
{var statearr_24135_24154 = state_24127__$1;(statearr_24135_24154[1] = 9);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24128 === 7))
{var inst_24123 = (state_24127[2]);var state_24127__$1 = state_24127;var statearr_24136_24155 = state_24127__$1;(statearr_24136_24155[2] = inst_24123);
(statearr_24136_24155[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24128 === 8))
{var inst_24109 = (state_24127[7]);var state_24127__$1 = state_24127;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24127__$1,11,out,inst_24109);
} else
{if((state_val_24128 === 9))
{var state_24127__$1 = state_24127;var statearr_24137_24156 = state_24127__$1;(statearr_24137_24156[2] = null);
(statearr_24137_24156[1] = 10);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24128 === 10))
{var inst_24120 = (state_24127[2]);var state_24127__$1 = (function (){var statearr_24138 = state_24127;(statearr_24138[8] = inst_24120);
return statearr_24138;
})();var statearr_24139_24157 = state_24127__$1;(statearr_24139_24157[2] = null);
(statearr_24139_24157[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24128 === 11))
{var inst_24117 = (state_24127[2]);var state_24127__$1 = state_24127;var statearr_24140_24158 = state_24127__$1;(statearr_24140_24158[2] = inst_24117);
(statearr_24140_24158[1] = 10);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_24144 = [null,null,null,null,null,null,null,null,null];(statearr_24144[0] = state_machine__5507__auto__);
(statearr_24144[1] = 1);
return statearr_24144;
});
var state_machine__5507__auto____1 = (function (state_24127){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24127);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24145){if((e24145 instanceof Object))
{var ex__5510__auto__ = e24145;var statearr_24146_24159 = state_24127;(statearr_24146_24159[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24127);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e24145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__24160 = state_24127;
state_24127 = G__24160;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24127){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24147 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24148);
return statearr_24147;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24312){var state_val_24313 = (state_24312[1]);if((state_val_24313 === 1))
{var state_24312__$1 = state_24312;var statearr_24314_24351 = state_24312__$1;(statearr_24314_24351[2] = null);
(statearr_24314_24351[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 2))
{var state_24312__$1 = state_24312;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24312__$1,4,in$);
} else
{if((state_val_24313 === 3))
{var inst_24310 = (state_24312[2]);var state_24312__$1 = state_24312;return cljs.core.async.impl.ioc_helpers.return_chan(state_24312__$1,inst_24310);
} else
{if((state_val_24313 === 4))
{var inst_24258 = (state_24312[7]);var inst_24258__$1 = (state_24312[2]);var inst_24259 = (inst_24258__$1 == null);var state_24312__$1 = (function (){var statearr_24315 = state_24312;(statearr_24315[7] = inst_24258__$1);
return statearr_24315;
})();if(cljs.core.truth_(inst_24259))
{var statearr_24316_24352 = state_24312__$1;(statearr_24316_24352[1] = 5);
} else
{var statearr_24317_24353 = state_24312__$1;(statearr_24317_24353[1] = 6);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 5))
{var inst_24261 = cljs.core.async.close_BANG_(out);var state_24312__$1 = state_24312;var statearr_24318_24354 = state_24312__$1;(statearr_24318_24354[2] = inst_24261);
(statearr_24318_24354[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 6))
{var inst_24258 = (state_24312[7]);var inst_24263 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24258) : f.call(null,inst_24258));var inst_24268 = cljs.core.seq(inst_24263);var inst_24269 = inst_24268;var inst_24270 = null;var inst_24271 = 0;var inst_24272 = 0;var state_24312__$1 = (function (){var statearr_24319 = state_24312;(statearr_24319[8] = inst_24271);
(statearr_24319[9] = inst_24270);
(statearr_24319[10] = inst_24269);
(statearr_24319[11] = inst_24272);
return statearr_24319;
})();var statearr_24320_24355 = state_24312__$1;(statearr_24320_24355[2] = null);
(statearr_24320_24355[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 7))
{var inst_24308 = (state_24312[2]);var state_24312__$1 = state_24312;var statearr_24321_24356 = state_24312__$1;(statearr_24321_24356[2] = inst_24308);
(statearr_24321_24356[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 8))
{var inst_24271 = (state_24312[8]);var inst_24272 = (state_24312[11]);var inst_24274 = (inst_24272 < inst_24271);var inst_24275 = inst_24274;var state_24312__$1 = state_24312;if(cljs.core.truth_(inst_24275))
{var statearr_24322_24357 = state_24312__$1;(statearr_24322_24357[1] = 10);
} else
{var statearr_24323_24358 = state_24312__$1;(statearr_24323_24358[1] = 11);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 9))
{var inst_24305 = (state_24312[2]);var state_24312__$1 = (function (){var statearr_24324 = state_24312;(statearr_24324[12] = inst_24305);
return statearr_24324;
})();var statearr_24325_24359 = state_24312__$1;(statearr_24325_24359[2] = null);
(statearr_24325_24359[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 10))
{var inst_24270 = (state_24312[9]);var inst_24272 = (state_24312[11]);var inst_24277 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24270,inst_24272);var state_24312__$1 = state_24312;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24312__$1,13,out,inst_24277);
} else
{if((state_val_24313 === 11))
{var inst_24283 = (state_24312[13]);var inst_24269 = (state_24312[10]);var inst_24283__$1 = cljs.core.seq(inst_24269);var state_24312__$1 = (function (){var statearr_24329 = state_24312;(statearr_24329[13] = inst_24283__$1);
return statearr_24329;
})();if(inst_24283__$1)
{var statearr_24330_24360 = state_24312__$1;(statearr_24330_24360[1] = 14);
} else
{var statearr_24331_24361 = state_24312__$1;(statearr_24331_24361[1] = 15);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 12))
{var inst_24303 = (state_24312[2]);var state_24312__$1 = state_24312;var statearr_24332_24362 = state_24312__$1;(statearr_24332_24362[2] = inst_24303);
(statearr_24332_24362[1] = 9);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 13))
{var inst_24271 = (state_24312[8]);var inst_24270 = (state_24312[9]);var inst_24269 = (state_24312[10]);var inst_24272 = (state_24312[11]);var inst_24279 = (state_24312[2]);var inst_24280 = (inst_24272 + 1);var tmp24326 = inst_24271;var tmp24327 = inst_24270;var tmp24328 = inst_24269;var inst_24269__$1 = tmp24328;var inst_24270__$1 = tmp24327;var inst_24271__$1 = tmp24326;var inst_24272__$1 = inst_24280;var state_24312__$1 = (function (){var statearr_24333 = state_24312;(statearr_24333[14] = inst_24279);
(statearr_24333[8] = inst_24271__$1);
(statearr_24333[9] = inst_24270__$1);
(statearr_24333[10] = inst_24269__$1);
(statearr_24333[11] = inst_24272__$1);
return statearr_24333;
})();var statearr_24334_24363 = state_24312__$1;(statearr_24334_24363[2] = null);
(statearr_24334_24363[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 14))
{var inst_24283 = (state_24312[13]);var inst_24285 = cljs.core.chunked_seq_QMARK_(inst_24283);var state_24312__$1 = state_24312;if(inst_24285)
{var statearr_24335_24364 = state_24312__$1;(statearr_24335_24364[1] = 17);
} else
{var statearr_24336_24365 = state_24312__$1;(statearr_24336_24365[1] = 18);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 15))
{var state_24312__$1 = state_24312;var statearr_24337_24366 = state_24312__$1;(statearr_24337_24366[2] = null);
(statearr_24337_24366[1] = 16);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 16))
{var inst_24301 = (state_24312[2]);var state_24312__$1 = state_24312;var statearr_24338_24367 = state_24312__$1;(statearr_24338_24367[2] = inst_24301);
(statearr_24338_24367[1] = 12);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 17))
{var inst_24283 = (state_24312[13]);var inst_24287 = cljs.core.chunk_first(inst_24283);var inst_24288 = cljs.core.chunk_rest(inst_24283);var inst_24289 = cljs.core.count(inst_24287);var inst_24269 = inst_24288;var inst_24270 = inst_24287;var inst_24271 = inst_24289;var inst_24272 = 0;var state_24312__$1 = (function (){var statearr_24339 = state_24312;(statearr_24339[8] = inst_24271);
(statearr_24339[9] = inst_24270);
(statearr_24339[10] = inst_24269);
(statearr_24339[11] = inst_24272);
return statearr_24339;
})();var statearr_24340_24368 = state_24312__$1;(statearr_24340_24368[2] = null);
(statearr_24340_24368[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 18))
{var inst_24283 = (state_24312[13]);var inst_24292 = cljs.core.first(inst_24283);var state_24312__$1 = state_24312;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24312__$1,20,out,inst_24292);
} else
{if((state_val_24313 === 19))
{var inst_24298 = (state_24312[2]);var state_24312__$1 = state_24312;var statearr_24341_24369 = state_24312__$1;(statearr_24341_24369[2] = inst_24298);
(statearr_24341_24369[1] = 16);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24313 === 20))
{var inst_24283 = (state_24312[13]);var inst_24294 = (state_24312[2]);var inst_24295 = cljs.core.next(inst_24283);var inst_24269 = inst_24295;var inst_24270 = null;var inst_24271 = 0;var inst_24272 = 0;var state_24312__$1 = (function (){var statearr_24342 = state_24312;(statearr_24342[15] = inst_24294);
(statearr_24342[8] = inst_24271);
(statearr_24342[9] = inst_24270);
(statearr_24342[10] = inst_24269);
(statearr_24342[11] = inst_24272);
return statearr_24342;
})();var statearr_24343_24370 = state_24312__$1;(statearr_24343_24370[2] = null);
(statearr_24343_24370[1] = 8);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_24347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24347[0] = state_machine__5507__auto__);
(statearr_24347[1] = 1);
return statearr_24347;
});
var state_machine__5507__auto____1 = (function (state_24312){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24312);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24348){if((e24348 instanceof Object))
{var ex__5510__auto__ = e24348;var statearr_24349_24371 = state_24312;(statearr_24349_24371[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24312);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e24348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__24372 = state_24312;
state_24312 = G__24372;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24312){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24350 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24350;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24432){var state_val_24433 = (state_24432[1]);if((state_val_24433 === 1))
{var state_24432__$1 = state_24432;var statearr_24434_24454 = state_24432__$1;(statearr_24434_24454[2] = null);
(statearr_24434_24454[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24433 === 2))
{var state_24432__$1 = state_24432;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24432__$1,4,from);
} else
{if((state_val_24433 === 3))
{var inst_24430 = (state_24432[2]);var state_24432__$1 = state_24432;return cljs.core.async.impl.ioc_helpers.return_chan(state_24432__$1,inst_24430);
} else
{if((state_val_24433 === 4))
{var inst_24415 = (state_24432[7]);var inst_24415__$1 = (state_24432[2]);var inst_24416 = (inst_24415__$1 == null);var state_24432__$1 = (function (){var statearr_24435 = state_24432;(statearr_24435[7] = inst_24415__$1);
return statearr_24435;
})();if(cljs.core.truth_(inst_24416))
{var statearr_24436_24455 = state_24432__$1;(statearr_24436_24455[1] = 5);
} else
{var statearr_24437_24456 = state_24432__$1;(statearr_24437_24456[1] = 6);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24433 === 5))
{var state_24432__$1 = state_24432;if(cljs.core.truth_(close_QMARK_))
{var statearr_24438_24457 = state_24432__$1;(statearr_24438_24457[1] = 8);
} else
{var statearr_24439_24458 = state_24432__$1;(statearr_24439_24458[1] = 9);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24433 === 6))
{var inst_24415 = (state_24432[7]);var state_24432__$1 = state_24432;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24432__$1,11,to,inst_24415);
} else
{if((state_val_24433 === 7))
{var inst_24428 = (state_24432[2]);var state_24432__$1 = state_24432;var statearr_24440_24459 = state_24432__$1;(statearr_24440_24459[2] = inst_24428);
(statearr_24440_24459[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24433 === 8))
{var inst_24419 = cljs.core.async.close_BANG_(to);var state_24432__$1 = state_24432;var statearr_24441_24460 = state_24432__$1;(statearr_24441_24460[2] = inst_24419);
(statearr_24441_24460[1] = 10);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24433 === 9))
{var state_24432__$1 = state_24432;var statearr_24442_24461 = state_24432__$1;(statearr_24442_24461[2] = null);
(statearr_24442_24461[1] = 10);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24433 === 10))
{var inst_24422 = (state_24432[2]);var state_24432__$1 = state_24432;var statearr_24443_24462 = state_24432__$1;(statearr_24443_24462[2] = inst_24422);
(statearr_24443_24462[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24433 === 11))
{var inst_24425 = (state_24432[2]);var state_24432__$1 = (function (){var statearr_24444 = state_24432;(statearr_24444[8] = inst_24425);
return statearr_24444;
})();var statearr_24445_24463 = state_24432__$1;(statearr_24445_24463[2] = null);
(statearr_24445_24463[1] = 2);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_24449 = [null,null,null,null,null,null,null,null,null];(statearr_24449[0] = state_machine__5507__auto__);
(statearr_24449[1] = 1);
return statearr_24449;
});
var state_machine__5507__auto____1 = (function (state_24432){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24432);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24450){if((e24450 instanceof Object))
{var ex__5510__auto__ = e24450;var statearr_24451_24464 = state_24432;(statearr_24451_24464[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24432);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e24450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__24465 = state_24432;
state_24432 = G__24465;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24432){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24452 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24453);
return statearr_24452;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24530){var state_val_24531 = (state_24530[1]);if((state_val_24531 === 1))
{var state_24530__$1 = state_24530;var statearr_24532_24553 = state_24530__$1;(statearr_24532_24553[2] = null);
(statearr_24532_24553[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24531 === 2))
{var state_24530__$1 = state_24530;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24530__$1,4,ch);
} else
{if((state_val_24531 === 3))
{var inst_24528 = (state_24530[2]);var state_24530__$1 = state_24530;return cljs.core.async.impl.ioc_helpers.return_chan(state_24530__$1,inst_24528);
} else
{if((state_val_24531 === 4))
{var inst_24511 = (state_24530[7]);var inst_24511__$1 = (state_24530[2]);var inst_24512 = (inst_24511__$1 == null);var state_24530__$1 = (function (){var statearr_24533 = state_24530;(statearr_24533[7] = inst_24511__$1);
return statearr_24533;
})();if(cljs.core.truth_(inst_24512))
{var statearr_24534_24554 = state_24530__$1;(statearr_24534_24554[1] = 5);
} else
{var statearr_24535_24555 = state_24530__$1;(statearr_24535_24555[1] = 6);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24531 === 5))
{var inst_24514 = cljs.core.async.close_BANG_(tc);var inst_24515 = cljs.core.async.close_BANG_(fc);var state_24530__$1 = (function (){var statearr_24536 = state_24530;(statearr_24536[8] = inst_24514);
return statearr_24536;
})();var statearr_24537_24556 = state_24530__$1;(statearr_24537_24556[2] = inst_24515);
(statearr_24537_24556[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24531 === 6))
{var inst_24511 = (state_24530[7]);var inst_24517 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24511) : p.call(null,inst_24511));var state_24530__$1 = state_24530;if(cljs.core.truth_(inst_24517))
{var statearr_24538_24557 = state_24530__$1;(statearr_24538_24557[1] = 9);
} else
{var statearr_24539_24558 = state_24530__$1;(statearr_24539_24558[1] = 10);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24531 === 7))
{var inst_24526 = (state_24530[2]);var state_24530__$1 = state_24530;var statearr_24540_24559 = state_24530__$1;(statearr_24540_24559[2] = inst_24526);
(statearr_24540_24559[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24531 === 8))
{var inst_24523 = (state_24530[2]);var state_24530__$1 = (function (){var statearr_24541 = state_24530;(statearr_24541[9] = inst_24523);
return statearr_24541;
})();var statearr_24542_24560 = state_24530__$1;(statearr_24542_24560[2] = null);
(statearr_24542_24560[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24531 === 9))
{var state_24530__$1 = state_24530;var statearr_24543_24561 = state_24530__$1;(statearr_24543_24561[2] = tc);
(statearr_24543_24561[1] = 11);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24531 === 10))
{var state_24530__$1 = state_24530;var statearr_24544_24562 = state_24530__$1;(statearr_24544_24562[2] = fc);
(statearr_24544_24562[1] = 11);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24531 === 11))
{var inst_24511 = (state_24530[7]);var inst_24521 = (state_24530[2]);var state_24530__$1 = state_24530;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24530__$1,8,inst_24521,inst_24511);
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
var state_machine__5507__auto____0 = (function (){var statearr_24548 = [null,null,null,null,null,null,null,null,null,null];(statearr_24548[0] = state_machine__5507__auto__);
(statearr_24548[1] = 1);
return statearr_24548;
});
var state_machine__5507__auto____1 = (function (state_24530){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24530);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24549){if((e24549 instanceof Object))
{var ex__5510__auto__ = e24549;var statearr_24550_24563 = state_24530;(statearr_24550_24563[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24530);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e24549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__24564 = state_24530;
state_24530 = G__24564;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24530){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24551 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24552);
return statearr_24551;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24611){var state_val_24612 = (state_24611[1]);if((state_val_24612 === 7))
{var inst_24607 = (state_24611[2]);var state_24611__$1 = state_24611;var statearr_24613_24629 = state_24611__$1;(statearr_24613_24629[2] = inst_24607);
(statearr_24613_24629[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24612 === 6))
{var inst_24600 = (state_24611[7]);var inst_24597 = (state_24611[8]);var inst_24604 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24597,inst_24600) : f.call(null,inst_24597,inst_24600));var inst_24597__$1 = inst_24604;var state_24611__$1 = (function (){var statearr_24614 = state_24611;(statearr_24614[8] = inst_24597__$1);
return statearr_24614;
})();var statearr_24615_24630 = state_24611__$1;(statearr_24615_24630[2] = null);
(statearr_24615_24630[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24612 === 5))
{var inst_24597 = (state_24611[8]);var state_24611__$1 = state_24611;var statearr_24616_24631 = state_24611__$1;(statearr_24616_24631[2] = inst_24597);
(statearr_24616_24631[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24612 === 4))
{var inst_24600 = (state_24611[7]);var inst_24600__$1 = (state_24611[2]);var inst_24601 = (inst_24600__$1 == null);var state_24611__$1 = (function (){var statearr_24617 = state_24611;(statearr_24617[7] = inst_24600__$1);
return statearr_24617;
})();if(cljs.core.truth_(inst_24601))
{var statearr_24618_24632 = state_24611__$1;(statearr_24618_24632[1] = 5);
} else
{var statearr_24619_24633 = state_24611__$1;(statearr_24619_24633[1] = 6);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24612 === 3))
{var inst_24609 = (state_24611[2]);var state_24611__$1 = state_24611;return cljs.core.async.impl.ioc_helpers.return_chan(state_24611__$1,inst_24609);
} else
{if((state_val_24612 === 2))
{var state_24611__$1 = state_24611;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24611__$1,4,ch);
} else
{if((state_val_24612 === 1))
{var inst_24597 = init;var state_24611__$1 = (function (){var statearr_24620 = state_24611;(statearr_24620[8] = inst_24597);
return statearr_24620;
})();var statearr_24621_24634 = state_24611__$1;(statearr_24621_24634[2] = null);
(statearr_24621_24634[1] = 2);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_24625 = [null,null,null,null,null,null,null,null,null];(statearr_24625[0] = state_machine__5507__auto__);
(statearr_24625[1] = 1);
return statearr_24625;
});
var state_machine__5507__auto____1 = (function (state_24611){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24611);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24626){if((e24626 instanceof Object))
{var ex__5510__auto__ = e24626;var statearr_24627_24635 = state_24611;(statearr_24627_24635[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24611);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e24626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__24636 = state_24611;
state_24611 = G__24636;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24611){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24628 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24628;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24698){var state_val_24699 = (state_24698[1]);if((state_val_24699 === 1))
{var inst_24678 = cljs.core.seq(coll);var inst_24679 = inst_24678;var state_24698__$1 = (function (){var statearr_24700 = state_24698;(statearr_24700[7] = inst_24679);
return statearr_24700;
})();var statearr_24701_24719 = state_24698__$1;(statearr_24701_24719[2] = null);
(statearr_24701_24719[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24699 === 2))
{var inst_24679 = (state_24698[7]);var state_24698__$1 = state_24698;if(cljs.core.truth_(inst_24679))
{var statearr_24702_24720 = state_24698__$1;(statearr_24702_24720[1] = 4);
} else
{var statearr_24703_24721 = state_24698__$1;(statearr_24703_24721[1] = 5);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24699 === 3))
{var inst_24696 = (state_24698[2]);var state_24698__$1 = state_24698;return cljs.core.async.impl.ioc_helpers.return_chan(state_24698__$1,inst_24696);
} else
{if((state_val_24699 === 4))
{var inst_24679 = (state_24698[7]);var inst_24682 = cljs.core.first(inst_24679);var state_24698__$1 = state_24698;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24698__$1,7,ch,inst_24682);
} else
{if((state_val_24699 === 5))
{var state_24698__$1 = state_24698;if(cljs.core.truth_(close_QMARK_))
{var statearr_24704_24722 = state_24698__$1;(statearr_24704_24722[1] = 8);
} else
{var statearr_24705_24723 = state_24698__$1;(statearr_24705_24723[1] = 9);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_24699 === 6))
{var inst_24694 = (state_24698[2]);var state_24698__$1 = state_24698;var statearr_24706_24724 = state_24698__$1;(statearr_24706_24724[2] = inst_24694);
(statearr_24706_24724[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24699 === 7))
{var inst_24679 = (state_24698[7]);var inst_24684 = (state_24698[2]);var inst_24685 = cljs.core.next(inst_24679);var inst_24679__$1 = inst_24685;var state_24698__$1 = (function (){var statearr_24707 = state_24698;(statearr_24707[8] = inst_24684);
(statearr_24707[7] = inst_24679__$1);
return statearr_24707;
})();var statearr_24708_24725 = state_24698__$1;(statearr_24708_24725[2] = null);
(statearr_24708_24725[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24699 === 8))
{var inst_24689 = cljs.core.async.close_BANG_(ch);var state_24698__$1 = state_24698;var statearr_24709_24726 = state_24698__$1;(statearr_24709_24726[2] = inst_24689);
(statearr_24709_24726[1] = 10);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24699 === 9))
{var state_24698__$1 = state_24698;var statearr_24710_24727 = state_24698__$1;(statearr_24710_24727[2] = null);
(statearr_24710_24727[1] = 10);
return cljs.core.constant$keyword$234;
} else
{if((state_val_24699 === 10))
{var inst_24692 = (state_24698[2]);var state_24698__$1 = state_24698;var statearr_24711_24728 = state_24698__$1;(statearr_24711_24728[2] = inst_24692);
(statearr_24711_24728[1] = 6);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_24715 = [null,null,null,null,null,null,null,null,null];(statearr_24715[0] = state_machine__5507__auto__);
(statearr_24715[1] = 1);
return statearr_24715;
});
var state_machine__5507__auto____1 = (function (state_24698){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24698);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24716){if((e24716 instanceof Object))
{var ex__5510__auto__ = e24716;var statearr_24717_24729 = state_24698;(statearr_24717_24729[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24698);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e24716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__24730 = state_24698;
state_24698 = G__24730;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24698){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24718 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24718;
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
cljs.core.async.Mux = (function (){var obj24732 = {};return obj24732;
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
cljs.core.async.Mult = (function (){var obj24734 = {};return obj24734;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24958 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24958 = (function (cs,ch,mult,meta24959){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24959 = meta24959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24958.cljs$lang$type = true;
cljs.core.async.t24958.cljs$lang$ctorStr = "cljs.core.async/t24958";
cljs.core.async.t24958.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24958");
});})(cs))
;
cljs.core.async.t24958.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24958.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24958.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24958.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24958.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24960){var self__ = this;
var _24960__$1 = this;return self__.meta24959;
});})(cs))
;
cljs.core.async.t24958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24960,meta24959__$1){var self__ = this;
var _24960__$1 = this;return (new cljs.core.async.t24958(self__.cs,self__.ch,self__.mult,meta24959__$1));
});})(cs))
;
cljs.core.async.__GT_t24958 = ((function (cs){
return (function __GT_t24958(cs__$1,ch__$1,mult__$1,meta24959){return (new cljs.core.async.t24958(cs__$1,ch__$1,mult__$1,meta24959));
});})(cs))
;
}
return (new cljs.core.async.t24958(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25095){var state_val_25096 = (state_25095[1]);if((state_val_25096 === 32))
{var inst_24963 = (state_25095[7]);var inst_25039 = (state_25095[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25095,31,Object,null,30);var inst_25046 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25039,inst_24963,done);var state_25095__$1 = state_25095;var statearr_25097_25182 = state_25095__$1;(statearr_25097_25182[2] = inst_25046);
cljs.core.async.impl.ioc_helpers.process_exception(state_25095__$1);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 1))
{var state_25095__$1 = state_25095;var statearr_25098_25183 = state_25095__$1;(statearr_25098_25183[2] = null);
(statearr_25098_25183[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 33))
{var inst_25052 = (state_25095[9]);var inst_25054 = cljs.core.chunked_seq_QMARK_(inst_25052);var state_25095__$1 = state_25095;if(inst_25054)
{var statearr_25099_25184 = state_25095__$1;(statearr_25099_25184[1] = 36);
} else
{var statearr_25100_25185 = state_25095__$1;(statearr_25100_25185[1] = 37);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 2))
{var state_25095__$1 = state_25095;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25095__$1,4,ch);
} else
{if((state_val_25096 === 34))
{var state_25095__$1 = state_25095;var statearr_25101_25186 = state_25095__$1;(statearr_25101_25186[2] = null);
(statearr_25101_25186[1] = 35);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 3))
{var inst_25093 = (state_25095[2]);var state_25095__$1 = state_25095;return cljs.core.async.impl.ioc_helpers.return_chan(state_25095__$1,inst_25093);
} else
{if((state_val_25096 === 35))
{var inst_25077 = (state_25095[2]);var state_25095__$1 = state_25095;var statearr_25102_25187 = state_25095__$1;(statearr_25102_25187[2] = inst_25077);
(statearr_25102_25187[1] = 29);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 4))
{var inst_24963 = (state_25095[7]);var inst_24963__$1 = (state_25095[2]);var inst_24964 = (inst_24963__$1 == null);var state_25095__$1 = (function (){var statearr_25103 = state_25095;(statearr_25103[7] = inst_24963__$1);
return statearr_25103;
})();if(cljs.core.truth_(inst_24964))
{var statearr_25104_25188 = state_25095__$1;(statearr_25104_25188[1] = 5);
} else
{var statearr_25105_25189 = state_25095__$1;(statearr_25105_25189[1] = 6);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 36))
{var inst_25052 = (state_25095[9]);var inst_25056 = cljs.core.chunk_first(inst_25052);var inst_25057 = cljs.core.chunk_rest(inst_25052);var inst_25058 = cljs.core.count(inst_25056);var inst_25031 = inst_25057;var inst_25032 = inst_25056;var inst_25033 = inst_25058;var inst_25034 = 0;var state_25095__$1 = (function (){var statearr_25106 = state_25095;(statearr_25106[10] = inst_25033);
(statearr_25106[11] = inst_25034);
(statearr_25106[12] = inst_25032);
(statearr_25106[13] = inst_25031);
return statearr_25106;
})();var statearr_25107_25190 = state_25095__$1;(statearr_25107_25190[2] = null);
(statearr_25107_25190[1] = 25);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 5))
{var inst_24970 = cljs.core.deref(cs);var inst_24971 = cljs.core.seq(inst_24970);var inst_24972 = inst_24971;var inst_24973 = null;var inst_24974 = 0;var inst_24975 = 0;var state_25095__$1 = (function (){var statearr_25108 = state_25095;(statearr_25108[14] = inst_24974);
(statearr_25108[15] = inst_24973);
(statearr_25108[16] = inst_24972);
(statearr_25108[17] = inst_24975);
return statearr_25108;
})();var statearr_25109_25191 = state_25095__$1;(statearr_25109_25191[2] = null);
(statearr_25109_25191[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 37))
{var inst_25052 = (state_25095[9]);var inst_25061 = cljs.core.first(inst_25052);var state_25095__$1 = (function (){var statearr_25110 = state_25095;(statearr_25110[18] = inst_25061);
return statearr_25110;
})();var statearr_25111_25192 = state_25095__$1;(statearr_25111_25192[2] = null);
(statearr_25111_25192[1] = 41);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 6))
{var inst_25023 = (state_25095[19]);var inst_25022 = cljs.core.deref(cs);var inst_25023__$1 = cljs.core.keys(inst_25022);var inst_25024 = cljs.core.count(inst_25023__$1);var inst_25025 = cljs.core.reset_BANG_(dctr,inst_25024);var inst_25030 = cljs.core.seq(inst_25023__$1);var inst_25031 = inst_25030;var inst_25032 = null;var inst_25033 = 0;var inst_25034 = 0;var state_25095__$1 = (function (){var statearr_25112 = state_25095;(statearr_25112[20] = inst_25025);
(statearr_25112[19] = inst_25023__$1);
(statearr_25112[10] = inst_25033);
(statearr_25112[11] = inst_25034);
(statearr_25112[12] = inst_25032);
(statearr_25112[13] = inst_25031);
return statearr_25112;
})();var statearr_25113_25193 = state_25095__$1;(statearr_25113_25193[2] = null);
(statearr_25113_25193[1] = 25);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 38))
{var inst_25074 = (state_25095[2]);var state_25095__$1 = state_25095;var statearr_25114_25194 = state_25095__$1;(statearr_25114_25194[2] = inst_25074);
(statearr_25114_25194[1] = 35);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 7))
{var inst_25091 = (state_25095[2]);var state_25095__$1 = state_25095;var statearr_25115_25195 = state_25095__$1;(statearr_25115_25195[2] = inst_25091);
(statearr_25115_25195[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 39))
{var inst_25052 = (state_25095[9]);var inst_25070 = (state_25095[2]);var inst_25071 = cljs.core.next(inst_25052);var inst_25031 = inst_25071;var inst_25032 = null;var inst_25033 = 0;var inst_25034 = 0;var state_25095__$1 = (function (){var statearr_25116 = state_25095;(statearr_25116[21] = inst_25070);
(statearr_25116[10] = inst_25033);
(statearr_25116[11] = inst_25034);
(statearr_25116[12] = inst_25032);
(statearr_25116[13] = inst_25031);
return statearr_25116;
})();var statearr_25117_25196 = state_25095__$1;(statearr_25117_25196[2] = null);
(statearr_25117_25196[1] = 25);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 8))
{var inst_24974 = (state_25095[14]);var inst_24975 = (state_25095[17]);var inst_24977 = (inst_24975 < inst_24974);var inst_24978 = inst_24977;var state_25095__$1 = state_25095;if(cljs.core.truth_(inst_24978))
{var statearr_25118_25197 = state_25095__$1;(statearr_25118_25197[1] = 10);
} else
{var statearr_25119_25198 = state_25095__$1;(statearr_25119_25198[1] = 11);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 40))
{var inst_25061 = (state_25095[18]);var inst_25062 = (state_25095[2]);var inst_25063 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25064 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25061);var state_25095__$1 = (function (){var statearr_25120 = state_25095;(statearr_25120[22] = inst_25063);
(statearr_25120[23] = inst_25062);
return statearr_25120;
})();var statearr_25121_25199 = state_25095__$1;(statearr_25121_25199[2] = inst_25064);
cljs.core.async.impl.ioc_helpers.process_exception(state_25095__$1);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 9))
{var inst_25020 = (state_25095[2]);var state_25095__$1 = state_25095;var statearr_25122_25200 = state_25095__$1;(statearr_25122_25200[2] = inst_25020);
(statearr_25122_25200[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 41))
{var inst_24963 = (state_25095[7]);var inst_25061 = (state_25095[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25095,40,Object,null,39);var inst_25068 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25061,inst_24963,done);var state_25095__$1 = state_25095;var statearr_25123_25201 = state_25095__$1;(statearr_25123_25201[2] = inst_25068);
cljs.core.async.impl.ioc_helpers.process_exception(state_25095__$1);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 10))
{var inst_24973 = (state_25095[15]);var inst_24975 = (state_25095[17]);var inst_24981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24973,inst_24975);var inst_24982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24981,0,null);var inst_24983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24981,1,null);var state_25095__$1 = (function (){var statearr_25124 = state_25095;(statearr_25124[24] = inst_24982);
return statearr_25124;
})();if(cljs.core.truth_(inst_24983))
{var statearr_25125_25202 = state_25095__$1;(statearr_25125_25202[1] = 13);
} else
{var statearr_25126_25203 = state_25095__$1;(statearr_25126_25203[1] = 14);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 42))
{var state_25095__$1 = state_25095;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25095__$1,45,dchan);
} else
{if((state_val_25096 === 11))
{var inst_24972 = (state_25095[16]);var inst_24992 = (state_25095[25]);var inst_24992__$1 = cljs.core.seq(inst_24972);var state_25095__$1 = (function (){var statearr_25127 = state_25095;(statearr_25127[25] = inst_24992__$1);
return statearr_25127;
})();if(inst_24992__$1)
{var statearr_25128_25204 = state_25095__$1;(statearr_25128_25204[1] = 16);
} else
{var statearr_25129_25205 = state_25095__$1;(statearr_25129_25205[1] = 17);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 43))
{var state_25095__$1 = state_25095;var statearr_25130_25206 = state_25095__$1;(statearr_25130_25206[2] = null);
(statearr_25130_25206[1] = 44);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 12))
{var inst_25018 = (state_25095[2]);var state_25095__$1 = state_25095;var statearr_25131_25207 = state_25095__$1;(statearr_25131_25207[2] = inst_25018);
(statearr_25131_25207[1] = 9);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 44))
{var inst_25088 = (state_25095[2]);var state_25095__$1 = (function (){var statearr_25132 = state_25095;(statearr_25132[26] = inst_25088);
return statearr_25132;
})();var statearr_25133_25208 = state_25095__$1;(statearr_25133_25208[2] = null);
(statearr_25133_25208[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 13))
{var inst_24982 = (state_25095[24]);var inst_24985 = cljs.core.async.close_BANG_(inst_24982);var state_25095__$1 = state_25095;var statearr_25134_25209 = state_25095__$1;(statearr_25134_25209[2] = inst_24985);
(statearr_25134_25209[1] = 15);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 45))
{var inst_25085 = (state_25095[2]);var state_25095__$1 = state_25095;var statearr_25138_25210 = state_25095__$1;(statearr_25138_25210[2] = inst_25085);
(statearr_25138_25210[1] = 44);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 14))
{var state_25095__$1 = state_25095;var statearr_25139_25211 = state_25095__$1;(statearr_25139_25211[2] = null);
(statearr_25139_25211[1] = 15);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 15))
{var inst_24974 = (state_25095[14]);var inst_24973 = (state_25095[15]);var inst_24972 = (state_25095[16]);var inst_24975 = (state_25095[17]);var inst_24988 = (state_25095[2]);var inst_24989 = (inst_24975 + 1);var tmp25135 = inst_24974;var tmp25136 = inst_24973;var tmp25137 = inst_24972;var inst_24972__$1 = tmp25137;var inst_24973__$1 = tmp25136;var inst_24974__$1 = tmp25135;var inst_24975__$1 = inst_24989;var state_25095__$1 = (function (){var statearr_25140 = state_25095;(statearr_25140[14] = inst_24974__$1);
(statearr_25140[15] = inst_24973__$1);
(statearr_25140[16] = inst_24972__$1);
(statearr_25140[27] = inst_24988);
(statearr_25140[17] = inst_24975__$1);
return statearr_25140;
})();var statearr_25141_25212 = state_25095__$1;(statearr_25141_25212[2] = null);
(statearr_25141_25212[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 16))
{var inst_24992 = (state_25095[25]);var inst_24994 = cljs.core.chunked_seq_QMARK_(inst_24992);var state_25095__$1 = state_25095;if(inst_24994)
{var statearr_25142_25213 = state_25095__$1;(statearr_25142_25213[1] = 19);
} else
{var statearr_25143_25214 = state_25095__$1;(statearr_25143_25214[1] = 20);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 17))
{var state_25095__$1 = state_25095;var statearr_25144_25215 = state_25095__$1;(statearr_25144_25215[2] = null);
(statearr_25144_25215[1] = 18);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 18))
{var inst_25016 = (state_25095[2]);var state_25095__$1 = state_25095;var statearr_25145_25216 = state_25095__$1;(statearr_25145_25216[2] = inst_25016);
(statearr_25145_25216[1] = 12);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 19))
{var inst_24992 = (state_25095[25]);var inst_24996 = cljs.core.chunk_first(inst_24992);var inst_24997 = cljs.core.chunk_rest(inst_24992);var inst_24998 = cljs.core.count(inst_24996);var inst_24972 = inst_24997;var inst_24973 = inst_24996;var inst_24974 = inst_24998;var inst_24975 = 0;var state_25095__$1 = (function (){var statearr_25146 = state_25095;(statearr_25146[14] = inst_24974);
(statearr_25146[15] = inst_24973);
(statearr_25146[16] = inst_24972);
(statearr_25146[17] = inst_24975);
return statearr_25146;
})();var statearr_25147_25217 = state_25095__$1;(statearr_25147_25217[2] = null);
(statearr_25147_25217[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 20))
{var inst_24992 = (state_25095[25]);var inst_25002 = cljs.core.first(inst_24992);var inst_25003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25002,0,null);var inst_25004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25002,1,null);var state_25095__$1 = (function (){var statearr_25148 = state_25095;(statearr_25148[28] = inst_25003);
return statearr_25148;
})();if(cljs.core.truth_(inst_25004))
{var statearr_25149_25218 = state_25095__$1;(statearr_25149_25218[1] = 22);
} else
{var statearr_25150_25219 = state_25095__$1;(statearr_25150_25219[1] = 23);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 21))
{var inst_25013 = (state_25095[2]);var state_25095__$1 = state_25095;var statearr_25151_25220 = state_25095__$1;(statearr_25151_25220[2] = inst_25013);
(statearr_25151_25220[1] = 18);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 22))
{var inst_25003 = (state_25095[28]);var inst_25006 = cljs.core.async.close_BANG_(inst_25003);var state_25095__$1 = state_25095;var statearr_25152_25221 = state_25095__$1;(statearr_25152_25221[2] = inst_25006);
(statearr_25152_25221[1] = 24);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 23))
{var state_25095__$1 = state_25095;var statearr_25153_25222 = state_25095__$1;(statearr_25153_25222[2] = null);
(statearr_25153_25222[1] = 24);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 24))
{var inst_24992 = (state_25095[25]);var inst_25009 = (state_25095[2]);var inst_25010 = cljs.core.next(inst_24992);var inst_24972 = inst_25010;var inst_24973 = null;var inst_24974 = 0;var inst_24975 = 0;var state_25095__$1 = (function (){var statearr_25154 = state_25095;(statearr_25154[14] = inst_24974);
(statearr_25154[15] = inst_24973);
(statearr_25154[16] = inst_24972);
(statearr_25154[29] = inst_25009);
(statearr_25154[17] = inst_24975);
return statearr_25154;
})();var statearr_25155_25223 = state_25095__$1;(statearr_25155_25223[2] = null);
(statearr_25155_25223[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 25))
{var inst_25033 = (state_25095[10]);var inst_25034 = (state_25095[11]);var inst_25036 = (inst_25034 < inst_25033);var inst_25037 = inst_25036;var state_25095__$1 = state_25095;if(cljs.core.truth_(inst_25037))
{var statearr_25156_25224 = state_25095__$1;(statearr_25156_25224[1] = 27);
} else
{var statearr_25157_25225 = state_25095__$1;(statearr_25157_25225[1] = 28);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 26))
{var inst_25023 = (state_25095[19]);var inst_25081 = (state_25095[2]);var inst_25082 = cljs.core.seq(inst_25023);var state_25095__$1 = (function (){var statearr_25158 = state_25095;(statearr_25158[30] = inst_25081);
return statearr_25158;
})();if(inst_25082)
{var statearr_25159_25226 = state_25095__$1;(statearr_25159_25226[1] = 42);
} else
{var statearr_25160_25227 = state_25095__$1;(statearr_25160_25227[1] = 43);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 27))
{var inst_25034 = (state_25095[11]);var inst_25032 = (state_25095[12]);var inst_25039 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25032,inst_25034);var state_25095__$1 = (function (){var statearr_25161 = state_25095;(statearr_25161[8] = inst_25039);
return statearr_25161;
})();var statearr_25162_25228 = state_25095__$1;(statearr_25162_25228[2] = null);
(statearr_25162_25228[1] = 32);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 28))
{var inst_25052 = (state_25095[9]);var inst_25031 = (state_25095[13]);var inst_25052__$1 = cljs.core.seq(inst_25031);var state_25095__$1 = (function (){var statearr_25166 = state_25095;(statearr_25166[9] = inst_25052__$1);
return statearr_25166;
})();if(inst_25052__$1)
{var statearr_25167_25229 = state_25095__$1;(statearr_25167_25229[1] = 33);
} else
{var statearr_25168_25230 = state_25095__$1;(statearr_25168_25230[1] = 34);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 29))
{var inst_25079 = (state_25095[2]);var state_25095__$1 = state_25095;var statearr_25169_25231 = state_25095__$1;(statearr_25169_25231[2] = inst_25079);
(statearr_25169_25231[1] = 26);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 30))
{var inst_25033 = (state_25095[10]);var inst_25034 = (state_25095[11]);var inst_25032 = (state_25095[12]);var inst_25031 = (state_25095[13]);var inst_25048 = (state_25095[2]);var inst_25049 = (inst_25034 + 1);var tmp25163 = inst_25033;var tmp25164 = inst_25032;var tmp25165 = inst_25031;var inst_25031__$1 = tmp25165;var inst_25032__$1 = tmp25164;var inst_25033__$1 = tmp25163;var inst_25034__$1 = inst_25049;var state_25095__$1 = (function (){var statearr_25170 = state_25095;(statearr_25170[10] = inst_25033__$1);
(statearr_25170[11] = inst_25034__$1);
(statearr_25170[12] = inst_25032__$1);
(statearr_25170[13] = inst_25031__$1);
(statearr_25170[31] = inst_25048);
return statearr_25170;
})();var statearr_25171_25232 = state_25095__$1;(statearr_25171_25232[2] = null);
(statearr_25171_25232[1] = 25);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25096 === 31))
{var inst_25039 = (state_25095[8]);var inst_25040 = (state_25095[2]);var inst_25041 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25042 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25039);var state_25095__$1 = (function (){var statearr_25172 = state_25095;(statearr_25172[32] = inst_25041);
(statearr_25172[33] = inst_25040);
return statearr_25172;
})();var statearr_25173_25233 = state_25095__$1;(statearr_25173_25233[2] = inst_25042);
cljs.core.async.impl.ioc_helpers.process_exception(state_25095__$1);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_25177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25177[0] = state_machine__5507__auto__);
(statearr_25177[1] = 1);
return statearr_25177;
});
var state_machine__5507__auto____1 = (function (state_25095){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25095);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25178){if((e25178 instanceof Object))
{var ex__5510__auto__ = e25178;var statearr_25179_25234 = state_25095;(statearr_25179_25234[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25095);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e25178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__25235 = state_25095;
state_25095 = G__25235;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25095){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25180 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25181);
return statearr_25180;
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
cljs.core.async.Mix = (function (){var obj25237 = {};return obj25237;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$241,null,cljs.core.constant$keyword$242,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$243);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$242);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$243,chs);var pauses = pick(cljs.core.constant$keyword$241,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$244,solos,cljs.core.constant$keyword$245,pick(cljs.core.constant$keyword$242,chs),cljs.core.constant$keyword$246,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$241)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25347 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25348){
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
this.meta25348 = meta25348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25347.cljs$lang$type = true;
cljs.core.async.t25347.cljs$lang$ctorStr = "cljs.core.async/t25347";
cljs.core.async.t25347.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25347");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25347.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25347.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25347.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25347.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25347.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25347.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25347.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25349){var self__ = this;
var _25349__$1 = this;return self__.meta25348;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25349,meta25348__$1){var self__ = this;
var _25349__$1 = this;return (new cljs.core.async.t25347(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25348__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25347 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25347(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25348){return (new cljs.core.async.t25347(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25348));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25347(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25414){var state_val_25415 = (state_25414[1]);if((state_val_25415 === 1))
{var inst_25353 = (state_25414[7]);var inst_25353__$1 = calc_state();var inst_25354 = cljs.core.seq_QMARK_(inst_25353__$1);var state_25414__$1 = (function (){var statearr_25416 = state_25414;(statearr_25416[7] = inst_25353__$1);
return statearr_25416;
})();if(inst_25354)
{var statearr_25417_25457 = state_25414__$1;(statearr_25417_25457[1] = 2);
} else
{var statearr_25418_25458 = state_25414__$1;(statearr_25418_25458[1] = 3);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 2))
{var inst_25353 = (state_25414[7]);var inst_25356 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25353);var state_25414__$1 = state_25414;var statearr_25419_25459 = state_25414__$1;(statearr_25419_25459[2] = inst_25356);
(statearr_25419_25459[1] = 4);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 3))
{var inst_25353 = (state_25414[7]);var state_25414__$1 = state_25414;var statearr_25420_25460 = state_25414__$1;(statearr_25420_25460[2] = inst_25353);
(statearr_25420_25460[1] = 4);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 4))
{var inst_25353 = (state_25414[7]);var inst_25359 = (state_25414[2]);var inst_25360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25359,cljs.core.constant$keyword$246);var inst_25361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25359,cljs.core.constant$keyword$245);var inst_25362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25359,cljs.core.constant$keyword$244);var inst_25363 = inst_25353;var state_25414__$1 = (function (){var statearr_25421 = state_25414;(statearr_25421[8] = inst_25363);
(statearr_25421[9] = inst_25360);
(statearr_25421[10] = inst_25362);
(statearr_25421[11] = inst_25361);
return statearr_25421;
})();var statearr_25422_25461 = state_25414__$1;(statearr_25422_25461[2] = null);
(statearr_25422_25461[1] = 5);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 5))
{var inst_25363 = (state_25414[8]);var inst_25366 = cljs.core.seq_QMARK_(inst_25363);var state_25414__$1 = state_25414;if(inst_25366)
{var statearr_25423_25462 = state_25414__$1;(statearr_25423_25462[1] = 7);
} else
{var statearr_25424_25463 = state_25414__$1;(statearr_25424_25463[1] = 8);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 6))
{var inst_25412 = (state_25414[2]);var state_25414__$1 = state_25414;return cljs.core.async.impl.ioc_helpers.return_chan(state_25414__$1,inst_25412);
} else
{if((state_val_25415 === 7))
{var inst_25363 = (state_25414[8]);var inst_25368 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25363);var state_25414__$1 = state_25414;var statearr_25425_25464 = state_25414__$1;(statearr_25425_25464[2] = inst_25368);
(statearr_25425_25464[1] = 9);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 8))
{var inst_25363 = (state_25414[8]);var state_25414__$1 = state_25414;var statearr_25426_25465 = state_25414__$1;(statearr_25426_25465[2] = inst_25363);
(statearr_25426_25465[1] = 9);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 9))
{var inst_25371 = (state_25414[12]);var inst_25371__$1 = (state_25414[2]);var inst_25372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25371__$1,cljs.core.constant$keyword$246);var inst_25373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25371__$1,cljs.core.constant$keyword$245);var inst_25374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25371__$1,cljs.core.constant$keyword$244);var state_25414__$1 = (function (){var statearr_25427 = state_25414;(statearr_25427[13] = inst_25374);
(statearr_25427[12] = inst_25371__$1);
(statearr_25427[14] = inst_25373);
return statearr_25427;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25414__$1,10,inst_25372);
} else
{if((state_val_25415 === 10))
{var inst_25379 = (state_25414[15]);var inst_25378 = (state_25414[16]);var inst_25377 = (state_25414[2]);var inst_25378__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25377,0,null);var inst_25379__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25377,1,null);var inst_25380 = (inst_25378__$1 == null);var inst_25381 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25379__$1,change);var inst_25382 = (inst_25380) || (inst_25381);var state_25414__$1 = (function (){var statearr_25428 = state_25414;(statearr_25428[15] = inst_25379__$1);
(statearr_25428[16] = inst_25378__$1);
return statearr_25428;
})();if(cljs.core.truth_(inst_25382))
{var statearr_25429_25466 = state_25414__$1;(statearr_25429_25466[1] = 11);
} else
{var statearr_25430_25467 = state_25414__$1;(statearr_25430_25467[1] = 12);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 11))
{var inst_25378 = (state_25414[16]);var inst_25384 = (inst_25378 == null);var state_25414__$1 = state_25414;if(cljs.core.truth_(inst_25384))
{var statearr_25431_25468 = state_25414__$1;(statearr_25431_25468[1] = 14);
} else
{var statearr_25432_25469 = state_25414__$1;(statearr_25432_25469[1] = 15);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 12))
{var inst_25374 = (state_25414[13]);var inst_25379 = (state_25414[15]);var inst_25393 = (state_25414[17]);var inst_25393__$1 = (inst_25374.cljs$core$IFn$_invoke$arity$1 ? inst_25374.cljs$core$IFn$_invoke$arity$1(inst_25379) : inst_25374.call(null,inst_25379));var state_25414__$1 = (function (){var statearr_25433 = state_25414;(statearr_25433[17] = inst_25393__$1);
return statearr_25433;
})();if(cljs.core.truth_(inst_25393__$1))
{var statearr_25434_25470 = state_25414__$1;(statearr_25434_25470[1] = 17);
} else
{var statearr_25435_25471 = state_25414__$1;(statearr_25435_25471[1] = 18);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 13))
{var inst_25410 = (state_25414[2]);var state_25414__$1 = state_25414;var statearr_25436_25472 = state_25414__$1;(statearr_25436_25472[2] = inst_25410);
(statearr_25436_25472[1] = 6);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 14))
{var inst_25379 = (state_25414[15]);var inst_25386 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25379);var state_25414__$1 = state_25414;var statearr_25437_25473 = state_25414__$1;(statearr_25437_25473[2] = inst_25386);
(statearr_25437_25473[1] = 16);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 15))
{var state_25414__$1 = state_25414;var statearr_25438_25474 = state_25414__$1;(statearr_25438_25474[2] = null);
(statearr_25438_25474[1] = 16);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 16))
{var inst_25389 = (state_25414[2]);var inst_25390 = calc_state();var inst_25363 = inst_25390;var state_25414__$1 = (function (){var statearr_25439 = state_25414;(statearr_25439[18] = inst_25389);
(statearr_25439[8] = inst_25363);
return statearr_25439;
})();var statearr_25440_25475 = state_25414__$1;(statearr_25440_25475[2] = null);
(statearr_25440_25475[1] = 5);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 17))
{var inst_25393 = (state_25414[17]);var state_25414__$1 = state_25414;var statearr_25441_25476 = state_25414__$1;(statearr_25441_25476[2] = inst_25393);
(statearr_25441_25476[1] = 19);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 18))
{var inst_25374 = (state_25414[13]);var inst_25373 = (state_25414[14]);var inst_25379 = (state_25414[15]);var inst_25396 = cljs.core.empty_QMARK_(inst_25374);var inst_25397 = (inst_25373.cljs$core$IFn$_invoke$arity$1 ? inst_25373.cljs$core$IFn$_invoke$arity$1(inst_25379) : inst_25373.call(null,inst_25379));var inst_25398 = cljs.core.not(inst_25397);var inst_25399 = (inst_25396) && (inst_25398);var state_25414__$1 = state_25414;var statearr_25442_25477 = state_25414__$1;(statearr_25442_25477[2] = inst_25399);
(statearr_25442_25477[1] = 19);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 19))
{var inst_25401 = (state_25414[2]);var state_25414__$1 = state_25414;if(cljs.core.truth_(inst_25401))
{var statearr_25443_25478 = state_25414__$1;(statearr_25443_25478[1] = 20);
} else
{var statearr_25444_25479 = state_25414__$1;(statearr_25444_25479[1] = 21);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 20))
{var inst_25378 = (state_25414[16]);var state_25414__$1 = state_25414;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25414__$1,23,out,inst_25378);
} else
{if((state_val_25415 === 21))
{var state_25414__$1 = state_25414;var statearr_25445_25480 = state_25414__$1;(statearr_25445_25480[2] = null);
(statearr_25445_25480[1] = 22);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 22))
{var inst_25371 = (state_25414[12]);var inst_25407 = (state_25414[2]);var inst_25363 = inst_25371;var state_25414__$1 = (function (){var statearr_25446 = state_25414;(statearr_25446[19] = inst_25407);
(statearr_25446[8] = inst_25363);
return statearr_25446;
})();var statearr_25447_25481 = state_25414__$1;(statearr_25447_25481[2] = null);
(statearr_25447_25481[1] = 5);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25415 === 23))
{var inst_25404 = (state_25414[2]);var state_25414__$1 = state_25414;var statearr_25448_25482 = state_25414__$1;(statearr_25448_25482[2] = inst_25404);
(statearr_25448_25482[1] = 22);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_25452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25452[0] = state_machine__5507__auto__);
(statearr_25452[1] = 1);
return statearr_25452;
});
var state_machine__5507__auto____1 = (function (state_25414){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25414);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25453){if((e25453 instanceof Object))
{var ex__5510__auto__ = e25453;var statearr_25454_25483 = state_25414;(statearr_25454_25483[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25414);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e25453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__25484 = state_25414;
state_25414 = G__25484;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25414){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25455 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25456);
return statearr_25455;
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
cljs.core.async.Pub = (function (){var obj25486 = {};return obj25486;
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
return (function (p1__25487_SHARP_){if(cljs.core.truth_((p1__25487_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25487_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25487_SHARP_.call(null,topic))))
{return p1__25487_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25487_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25612 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25612 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25613){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25613 = meta25613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25612.cljs$lang$type = true;
cljs.core.async.t25612.cljs$lang$ctorStr = "cljs.core.async/t25612";
cljs.core.async.t25612.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25612");
});})(mults,ensure_mult))
;
cljs.core.async.t25612.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25612.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25612.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25612.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25614){var self__ = this;
var _25614__$1 = this;return self__.meta25613;
});})(mults,ensure_mult))
;
cljs.core.async.t25612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25614,meta25613__$1){var self__ = this;
var _25614__$1 = this;return (new cljs.core.async.t25612(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25613__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25612 = ((function (mults,ensure_mult){
return (function __GT_t25612(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25613){return (new cljs.core.async.t25612(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25613));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25612(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25688){var state_val_25689 = (state_25688[1]);if((state_val_25689 === 1))
{var state_25688__$1 = state_25688;var statearr_25690_25737 = state_25688__$1;(statearr_25690_25737[2] = null);
(statearr_25690_25737[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 2))
{var state_25688__$1 = state_25688;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25688__$1,4,ch);
} else
{if((state_val_25689 === 3))
{var inst_25686 = (state_25688[2]);var state_25688__$1 = state_25688;return cljs.core.async.impl.ioc_helpers.return_chan(state_25688__$1,inst_25686);
} else
{if((state_val_25689 === 4))
{var inst_25617 = (state_25688[7]);var inst_25617__$1 = (state_25688[2]);var inst_25618 = (inst_25617__$1 == null);var state_25688__$1 = (function (){var statearr_25691 = state_25688;(statearr_25691[7] = inst_25617__$1);
return statearr_25691;
})();if(cljs.core.truth_(inst_25618))
{var statearr_25692_25738 = state_25688__$1;(statearr_25692_25738[1] = 5);
} else
{var statearr_25693_25739 = state_25688__$1;(statearr_25693_25739[1] = 6);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 5))
{var inst_25624 = cljs.core.deref(mults);var inst_25625 = cljs.core.vals(inst_25624);var inst_25626 = cljs.core.seq(inst_25625);var inst_25627 = inst_25626;var inst_25628 = null;var inst_25629 = 0;var inst_25630 = 0;var state_25688__$1 = (function (){var statearr_25694 = state_25688;(statearr_25694[8] = inst_25629);
(statearr_25694[9] = inst_25628);
(statearr_25694[10] = inst_25630);
(statearr_25694[11] = inst_25627);
return statearr_25694;
})();var statearr_25695_25740 = state_25688__$1;(statearr_25695_25740[2] = null);
(statearr_25695_25740[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 6))
{var inst_25667 = (state_25688[12]);var inst_25665 = (state_25688[13]);var inst_25617 = (state_25688[7]);var inst_25665__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25617) : topic_fn.call(null,inst_25617));var inst_25666 = cljs.core.deref(mults);var inst_25667__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25666,inst_25665__$1);var state_25688__$1 = (function (){var statearr_25696 = state_25688;(statearr_25696[12] = inst_25667__$1);
(statearr_25696[13] = inst_25665__$1);
return statearr_25696;
})();if(cljs.core.truth_(inst_25667__$1))
{var statearr_25697_25741 = state_25688__$1;(statearr_25697_25741[1] = 19);
} else
{var statearr_25698_25742 = state_25688__$1;(statearr_25698_25742[1] = 20);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 7))
{var inst_25684 = (state_25688[2]);var state_25688__$1 = state_25688;var statearr_25699_25743 = state_25688__$1;(statearr_25699_25743[2] = inst_25684);
(statearr_25699_25743[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 8))
{var inst_25629 = (state_25688[8]);var inst_25630 = (state_25688[10]);var inst_25632 = (inst_25630 < inst_25629);var inst_25633 = inst_25632;var state_25688__$1 = state_25688;if(cljs.core.truth_(inst_25633))
{var statearr_25703_25744 = state_25688__$1;(statearr_25703_25744[1] = 10);
} else
{var statearr_25704_25745 = state_25688__$1;(statearr_25704_25745[1] = 11);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 9))
{var inst_25663 = (state_25688[2]);var state_25688__$1 = state_25688;var statearr_25705_25746 = state_25688__$1;(statearr_25705_25746[2] = inst_25663);
(statearr_25705_25746[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 10))
{var inst_25629 = (state_25688[8]);var inst_25628 = (state_25688[9]);var inst_25630 = (state_25688[10]);var inst_25627 = (state_25688[11]);var inst_25635 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25628,inst_25630);var inst_25636 = cljs.core.async.muxch_STAR_(inst_25635);var inst_25637 = cljs.core.async.close_BANG_(inst_25636);var inst_25638 = (inst_25630 + 1);var tmp25700 = inst_25629;var tmp25701 = inst_25628;var tmp25702 = inst_25627;var inst_25627__$1 = tmp25702;var inst_25628__$1 = tmp25701;var inst_25629__$1 = tmp25700;var inst_25630__$1 = inst_25638;var state_25688__$1 = (function (){var statearr_25706 = state_25688;(statearr_25706[8] = inst_25629__$1);
(statearr_25706[9] = inst_25628__$1);
(statearr_25706[10] = inst_25630__$1);
(statearr_25706[14] = inst_25637);
(statearr_25706[11] = inst_25627__$1);
return statearr_25706;
})();var statearr_25707_25747 = state_25688__$1;(statearr_25707_25747[2] = null);
(statearr_25707_25747[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 11))
{var inst_25641 = (state_25688[15]);var inst_25627 = (state_25688[11]);var inst_25641__$1 = cljs.core.seq(inst_25627);var state_25688__$1 = (function (){var statearr_25708 = state_25688;(statearr_25708[15] = inst_25641__$1);
return statearr_25708;
})();if(inst_25641__$1)
{var statearr_25709_25748 = state_25688__$1;(statearr_25709_25748[1] = 13);
} else
{var statearr_25710_25749 = state_25688__$1;(statearr_25710_25749[1] = 14);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 12))
{var inst_25661 = (state_25688[2]);var state_25688__$1 = state_25688;var statearr_25711_25750 = state_25688__$1;(statearr_25711_25750[2] = inst_25661);
(statearr_25711_25750[1] = 9);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 13))
{var inst_25641 = (state_25688[15]);var inst_25643 = cljs.core.chunked_seq_QMARK_(inst_25641);var state_25688__$1 = state_25688;if(inst_25643)
{var statearr_25712_25751 = state_25688__$1;(statearr_25712_25751[1] = 16);
} else
{var statearr_25713_25752 = state_25688__$1;(statearr_25713_25752[1] = 17);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 14))
{var state_25688__$1 = state_25688;var statearr_25714_25753 = state_25688__$1;(statearr_25714_25753[2] = null);
(statearr_25714_25753[1] = 15);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 15))
{var inst_25659 = (state_25688[2]);var state_25688__$1 = state_25688;var statearr_25715_25754 = state_25688__$1;(statearr_25715_25754[2] = inst_25659);
(statearr_25715_25754[1] = 12);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 16))
{var inst_25641 = (state_25688[15]);var inst_25645 = cljs.core.chunk_first(inst_25641);var inst_25646 = cljs.core.chunk_rest(inst_25641);var inst_25647 = cljs.core.count(inst_25645);var inst_25627 = inst_25646;var inst_25628 = inst_25645;var inst_25629 = inst_25647;var inst_25630 = 0;var state_25688__$1 = (function (){var statearr_25716 = state_25688;(statearr_25716[8] = inst_25629);
(statearr_25716[9] = inst_25628);
(statearr_25716[10] = inst_25630);
(statearr_25716[11] = inst_25627);
return statearr_25716;
})();var statearr_25717_25755 = state_25688__$1;(statearr_25717_25755[2] = null);
(statearr_25717_25755[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 17))
{var inst_25641 = (state_25688[15]);var inst_25650 = cljs.core.first(inst_25641);var inst_25651 = cljs.core.async.muxch_STAR_(inst_25650);var inst_25652 = cljs.core.async.close_BANG_(inst_25651);var inst_25653 = cljs.core.next(inst_25641);var inst_25627 = inst_25653;var inst_25628 = null;var inst_25629 = 0;var inst_25630 = 0;var state_25688__$1 = (function (){var statearr_25718 = state_25688;(statearr_25718[8] = inst_25629);
(statearr_25718[9] = inst_25628);
(statearr_25718[16] = inst_25652);
(statearr_25718[10] = inst_25630);
(statearr_25718[11] = inst_25627);
return statearr_25718;
})();var statearr_25719_25756 = state_25688__$1;(statearr_25719_25756[2] = null);
(statearr_25719_25756[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 18))
{var inst_25656 = (state_25688[2]);var state_25688__$1 = state_25688;var statearr_25720_25757 = state_25688__$1;(statearr_25720_25757[2] = inst_25656);
(statearr_25720_25757[1] = 15);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 19))
{var state_25688__$1 = state_25688;var statearr_25721_25758 = state_25688__$1;(statearr_25721_25758[2] = null);
(statearr_25721_25758[1] = 24);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 20))
{var state_25688__$1 = state_25688;var statearr_25722_25759 = state_25688__$1;(statearr_25722_25759[2] = null);
(statearr_25722_25759[1] = 21);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 21))
{var inst_25681 = (state_25688[2]);var state_25688__$1 = (function (){var statearr_25723 = state_25688;(statearr_25723[17] = inst_25681);
return statearr_25723;
})();var statearr_25724_25760 = state_25688__$1;(statearr_25724_25760[2] = null);
(statearr_25724_25760[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 22))
{var inst_25678 = (state_25688[2]);var state_25688__$1 = state_25688;var statearr_25725_25761 = state_25688__$1;(statearr_25725_25761[2] = inst_25678);
(statearr_25725_25761[1] = 21);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 23))
{var inst_25665 = (state_25688[13]);var inst_25669 = (state_25688[2]);var inst_25670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25665);var state_25688__$1 = (function (){var statearr_25726 = state_25688;(statearr_25726[18] = inst_25669);
return statearr_25726;
})();var statearr_25727_25762 = state_25688__$1;(statearr_25727_25762[2] = inst_25670);
cljs.core.async.impl.ioc_helpers.process_exception(state_25688__$1);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25689 === 24))
{var inst_25667 = (state_25688[12]);var inst_25617 = (state_25688[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25688,23,Object,null,22);var inst_25674 = cljs.core.async.muxch_STAR_(inst_25667);var state_25688__$1 = state_25688;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25688__$1,25,inst_25674,inst_25617);
} else
{if((state_val_25689 === 25))
{var inst_25676 = (state_25688[2]);var state_25688__$1 = state_25688;var statearr_25728_25763 = state_25688__$1;(statearr_25728_25763[2] = inst_25676);
cljs.core.async.impl.ioc_helpers.process_exception(state_25688__$1);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_25732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25732[0] = state_machine__5507__auto__);
(statearr_25732[1] = 1);
return statearr_25732;
});
var state_machine__5507__auto____1 = (function (state_25688){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25688);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25733){if((e25733 instanceof Object))
{var ex__5510__auto__ = e25733;var statearr_25734_25764 = state_25688;(statearr_25734_25764[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25688);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e25733;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__25765 = state_25688;
state_25688 = G__25765;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25688){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25735 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25736);
return statearr_25735;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25872){var state_val_25873 = (state_25872[1]);if((state_val_25873 === 1))
{var state_25872__$1 = state_25872;var statearr_25874_25903 = state_25872__$1;(statearr_25874_25903[2] = null);
(statearr_25874_25903[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 2))
{var inst_25835 = cljs.core.reset_BANG_(dctr,cnt);var inst_25836 = 0;var state_25872__$1 = (function (){var statearr_25875 = state_25872;(statearr_25875[7] = inst_25835);
(statearr_25875[8] = inst_25836);
return statearr_25875;
})();var statearr_25876_25904 = state_25872__$1;(statearr_25876_25904[2] = null);
(statearr_25876_25904[1] = 4);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 3))
{var inst_25870 = (state_25872[2]);var state_25872__$1 = state_25872;return cljs.core.async.impl.ioc_helpers.return_chan(state_25872__$1,inst_25870);
} else
{if((state_val_25873 === 4))
{var inst_25836 = (state_25872[8]);var inst_25838 = (inst_25836 < cnt);var state_25872__$1 = state_25872;if(cljs.core.truth_(inst_25838))
{var statearr_25877_25905 = state_25872__$1;(statearr_25877_25905[1] = 6);
} else
{var statearr_25878_25906 = state_25872__$1;(statearr_25878_25906[1] = 7);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 5))
{var inst_25856 = (state_25872[2]);var state_25872__$1 = (function (){var statearr_25879 = state_25872;(statearr_25879[9] = inst_25856);
return statearr_25879;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25872__$1,12,dchan);
} else
{if((state_val_25873 === 6))
{var state_25872__$1 = state_25872;var statearr_25880_25907 = state_25872__$1;(statearr_25880_25907[2] = null);
(statearr_25880_25907[1] = 11);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 7))
{var state_25872__$1 = state_25872;var statearr_25881_25908 = state_25872__$1;(statearr_25881_25908[2] = null);
(statearr_25881_25908[1] = 8);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 8))
{var inst_25854 = (state_25872[2]);var state_25872__$1 = state_25872;var statearr_25882_25909 = state_25872__$1;(statearr_25882_25909[2] = inst_25854);
(statearr_25882_25909[1] = 5);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 9))
{var inst_25836 = (state_25872[8]);var inst_25849 = (state_25872[2]);var inst_25850 = (inst_25836 + 1);var inst_25836__$1 = inst_25850;var state_25872__$1 = (function (){var statearr_25883 = state_25872;(statearr_25883[10] = inst_25849);
(statearr_25883[8] = inst_25836__$1);
return statearr_25883;
})();var statearr_25884_25910 = state_25872__$1;(statearr_25884_25910[2] = null);
(statearr_25884_25910[1] = 4);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 10))
{var inst_25840 = (state_25872[2]);var inst_25841 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25872__$1 = (function (){var statearr_25885 = state_25872;(statearr_25885[11] = inst_25840);
return statearr_25885;
})();var statearr_25886_25911 = state_25872__$1;(statearr_25886_25911[2] = inst_25841);
cljs.core.async.impl.ioc_helpers.process_exception(state_25872__$1);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 11))
{var inst_25836 = (state_25872[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25872,10,Object,null,9);var inst_25845 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25836) : chs__$1.call(null,inst_25836));var inst_25846 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25836) : done.call(null,inst_25836));var inst_25847 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25845,inst_25846);var state_25872__$1 = state_25872;var statearr_25887_25912 = state_25872__$1;(statearr_25887_25912[2] = inst_25847);
cljs.core.async.impl.ioc_helpers.process_exception(state_25872__$1);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 12))
{var inst_25858 = (state_25872[12]);var inst_25858__$1 = (state_25872[2]);var inst_25859 = cljs.core.some(cljs.core.nil_QMARK_,inst_25858__$1);var state_25872__$1 = (function (){var statearr_25888 = state_25872;(statearr_25888[12] = inst_25858__$1);
return statearr_25888;
})();if(cljs.core.truth_(inst_25859))
{var statearr_25889_25913 = state_25872__$1;(statearr_25889_25913[1] = 13);
} else
{var statearr_25890_25914 = state_25872__$1;(statearr_25890_25914[1] = 14);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 13))
{var inst_25861 = cljs.core.async.close_BANG_(out);var state_25872__$1 = state_25872;var statearr_25891_25915 = state_25872__$1;(statearr_25891_25915[2] = inst_25861);
(statearr_25891_25915[1] = 15);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 14))
{var inst_25858 = (state_25872[12]);var inst_25863 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25858);var state_25872__$1 = state_25872;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25872__$1,16,out,inst_25863);
} else
{if((state_val_25873 === 15))
{var inst_25868 = (state_25872[2]);var state_25872__$1 = state_25872;var statearr_25892_25916 = state_25872__$1;(statearr_25892_25916[2] = inst_25868);
(statearr_25892_25916[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_25873 === 16))
{var inst_25865 = (state_25872[2]);var state_25872__$1 = (function (){var statearr_25893 = state_25872;(statearr_25893[13] = inst_25865);
return statearr_25893;
})();var statearr_25894_25917 = state_25872__$1;(statearr_25894_25917[2] = null);
(statearr_25894_25917[1] = 2);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_25898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25898[0] = state_machine__5507__auto__);
(statearr_25898[1] = 1);
return statearr_25898;
});
var state_machine__5507__auto____1 = (function (state_25872){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25872);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25899){if((e25899 instanceof Object))
{var ex__5510__auto__ = e25899;var statearr_25900_25918 = state_25872;(statearr_25900_25918[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25872);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e25899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__25919 = state_25872;
state_25872 = G__25919;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25872){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25901 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25902);
return statearr_25901;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26003){var state_val_26004 = (state_26003[1]);if((state_val_26004 === 1))
{var inst_25974 = cljs.core.vec(chs);var inst_25975 = inst_25974;var state_26003__$1 = (function (){var statearr_26005 = state_26003;(statearr_26005[7] = inst_25975);
return statearr_26005;
})();var statearr_26006_26028 = state_26003__$1;(statearr_26006_26028[2] = null);
(statearr_26006_26028[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26004 === 2))
{var inst_25975 = (state_26003[7]);var inst_25977 = cljs.core.count(inst_25975);var inst_25978 = (inst_25977 > 0);var state_26003__$1 = state_26003;if(cljs.core.truth_(inst_25978))
{var statearr_26007_26029 = state_26003__$1;(statearr_26007_26029[1] = 4);
} else
{var statearr_26008_26030 = state_26003__$1;(statearr_26008_26030[1] = 5);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26004 === 3))
{var inst_26001 = (state_26003[2]);var state_26003__$1 = state_26003;return cljs.core.async.impl.ioc_helpers.return_chan(state_26003__$1,inst_26001);
} else
{if((state_val_26004 === 4))
{var inst_25975 = (state_26003[7]);var state_26003__$1 = state_26003;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26003__$1,7,inst_25975);
} else
{if((state_val_26004 === 5))
{var inst_25997 = cljs.core.async.close_BANG_(out);var state_26003__$1 = state_26003;var statearr_26009_26031 = state_26003__$1;(statearr_26009_26031[2] = inst_25997);
(statearr_26009_26031[1] = 6);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26004 === 6))
{var inst_25999 = (state_26003[2]);var state_26003__$1 = state_26003;var statearr_26010_26032 = state_26003__$1;(statearr_26010_26032[2] = inst_25999);
(statearr_26010_26032[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26004 === 7))
{var inst_25983 = (state_26003[8]);var inst_25982 = (state_26003[9]);var inst_25982__$1 = (state_26003[2]);var inst_25983__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25982__$1,0,null);var inst_25984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25982__$1,1,null);var inst_25985 = (inst_25983__$1 == null);var state_26003__$1 = (function (){var statearr_26011 = state_26003;(statearr_26011[10] = inst_25984);
(statearr_26011[8] = inst_25983__$1);
(statearr_26011[9] = inst_25982__$1);
return statearr_26011;
})();if(cljs.core.truth_(inst_25985))
{var statearr_26012_26033 = state_26003__$1;(statearr_26012_26033[1] = 8);
} else
{var statearr_26013_26034 = state_26003__$1;(statearr_26013_26034[1] = 9);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26004 === 8))
{var inst_25984 = (state_26003[10]);var inst_25983 = (state_26003[8]);var inst_25982 = (state_26003[9]);var inst_25975 = (state_26003[7]);var inst_25987 = (function (){var c = inst_25984;var v = inst_25983;var vec__25980 = inst_25982;var cs = inst_25975;return ((function (c,v,vec__25980,cs,inst_25984,inst_25983,inst_25982,inst_25975,state_val_26004){
return (function (p1__25920_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25920_SHARP_);
});
;})(c,v,vec__25980,cs,inst_25984,inst_25983,inst_25982,inst_25975,state_val_26004))
})();var inst_25988 = cljs.core.filterv(inst_25987,inst_25975);var inst_25975__$1 = inst_25988;var state_26003__$1 = (function (){var statearr_26014 = state_26003;(statearr_26014[7] = inst_25975__$1);
return statearr_26014;
})();var statearr_26015_26035 = state_26003__$1;(statearr_26015_26035[2] = null);
(statearr_26015_26035[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26004 === 9))
{var inst_25983 = (state_26003[8]);var state_26003__$1 = state_26003;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26003__$1,11,out,inst_25983);
} else
{if((state_val_26004 === 10))
{var inst_25995 = (state_26003[2]);var state_26003__$1 = state_26003;var statearr_26017_26036 = state_26003__$1;(statearr_26017_26036[2] = inst_25995);
(statearr_26017_26036[1] = 6);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26004 === 11))
{var inst_25975 = (state_26003[7]);var inst_25992 = (state_26003[2]);var tmp26016 = inst_25975;var inst_25975__$1 = tmp26016;var state_26003__$1 = (function (){var statearr_26018 = state_26003;(statearr_26018[7] = inst_25975__$1);
(statearr_26018[11] = inst_25992);
return statearr_26018;
})();var statearr_26019_26037 = state_26003__$1;(statearr_26019_26037[2] = null);
(statearr_26019_26037[1] = 2);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_26023 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26023[0] = state_machine__5507__auto__);
(statearr_26023[1] = 1);
return statearr_26023;
});
var state_machine__5507__auto____1 = (function (state_26003){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26003);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26024){if((e26024 instanceof Object))
{var ex__5510__auto__ = e26024;var statearr_26025_26038 = state_26003;(statearr_26025_26038[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26003);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e26024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__26039 = state_26003;
state_26003 = G__26039;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26003){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26026 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26027);
return statearr_26026;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26109){var state_val_26110 = (state_26109[1]);if((state_val_26110 === 1))
{var inst_26086 = 0;var state_26109__$1 = (function (){var statearr_26111 = state_26109;(statearr_26111[7] = inst_26086);
return statearr_26111;
})();var statearr_26112_26133 = state_26109__$1;(statearr_26112_26133[2] = null);
(statearr_26112_26133[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26110 === 2))
{var inst_26086 = (state_26109[7]);var inst_26088 = (inst_26086 < n);var state_26109__$1 = state_26109;if(cljs.core.truth_(inst_26088))
{var statearr_26113_26134 = state_26109__$1;(statearr_26113_26134[1] = 4);
} else
{var statearr_26114_26135 = state_26109__$1;(statearr_26114_26135[1] = 5);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26110 === 3))
{var inst_26106 = (state_26109[2]);var inst_26107 = cljs.core.async.close_BANG_(out);var state_26109__$1 = (function (){var statearr_26115 = state_26109;(statearr_26115[8] = inst_26106);
return statearr_26115;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26109__$1,inst_26107);
} else
{if((state_val_26110 === 4))
{var state_26109__$1 = state_26109;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26109__$1,7,ch);
} else
{if((state_val_26110 === 5))
{var state_26109__$1 = state_26109;var statearr_26116_26136 = state_26109__$1;(statearr_26116_26136[2] = null);
(statearr_26116_26136[1] = 6);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26110 === 6))
{var inst_26104 = (state_26109[2]);var state_26109__$1 = state_26109;var statearr_26117_26137 = state_26109__$1;(statearr_26117_26137[2] = inst_26104);
(statearr_26117_26137[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26110 === 7))
{var inst_26091 = (state_26109[9]);var inst_26091__$1 = (state_26109[2]);var inst_26092 = (inst_26091__$1 == null);var inst_26093 = cljs.core.not(inst_26092);var state_26109__$1 = (function (){var statearr_26118 = state_26109;(statearr_26118[9] = inst_26091__$1);
return statearr_26118;
})();if(inst_26093)
{var statearr_26119_26138 = state_26109__$1;(statearr_26119_26138[1] = 8);
} else
{var statearr_26120_26139 = state_26109__$1;(statearr_26120_26139[1] = 9);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26110 === 8))
{var inst_26091 = (state_26109[9]);var state_26109__$1 = state_26109;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26109__$1,11,out,inst_26091);
} else
{if((state_val_26110 === 9))
{var state_26109__$1 = state_26109;var statearr_26121_26140 = state_26109__$1;(statearr_26121_26140[2] = null);
(statearr_26121_26140[1] = 10);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26110 === 10))
{var inst_26101 = (state_26109[2]);var state_26109__$1 = state_26109;var statearr_26122_26141 = state_26109__$1;(statearr_26122_26141[2] = inst_26101);
(statearr_26122_26141[1] = 6);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26110 === 11))
{var inst_26086 = (state_26109[7]);var inst_26096 = (state_26109[2]);var inst_26097 = (inst_26086 + 1);var inst_26086__$1 = inst_26097;var state_26109__$1 = (function (){var statearr_26123 = state_26109;(statearr_26123[7] = inst_26086__$1);
(statearr_26123[10] = inst_26096);
return statearr_26123;
})();var statearr_26124_26142 = state_26109__$1;(statearr_26124_26142[2] = null);
(statearr_26124_26142[1] = 2);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_26128 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26128[0] = state_machine__5507__auto__);
(statearr_26128[1] = 1);
return statearr_26128;
});
var state_machine__5507__auto____1 = (function (state_26109){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26109);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26129){if((e26129 instanceof Object))
{var ex__5510__auto__ = e26129;var statearr_26130_26143 = state_26109;(statearr_26130_26143[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26109);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e26129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__26144 = state_26109;
state_26109 = G__26144;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26109){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26131 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26132);
return statearr_26131;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26216){var state_val_26217 = (state_26216[1]);if((state_val_26217 === 1))
{var inst_26193 = null;var state_26216__$1 = (function (){var statearr_26218 = state_26216;(statearr_26218[7] = inst_26193);
return statearr_26218;
})();var statearr_26219_26242 = state_26216__$1;(statearr_26219_26242[2] = null);
(statearr_26219_26242[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26217 === 2))
{var state_26216__$1 = state_26216;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26216__$1,4,ch);
} else
{if((state_val_26217 === 3))
{var inst_26213 = (state_26216[2]);var inst_26214 = cljs.core.async.close_BANG_(out);var state_26216__$1 = (function (){var statearr_26220 = state_26216;(statearr_26220[8] = inst_26213);
return statearr_26220;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26216__$1,inst_26214);
} else
{if((state_val_26217 === 4))
{var inst_26196 = (state_26216[9]);var inst_26196__$1 = (state_26216[2]);var inst_26197 = (inst_26196__$1 == null);var inst_26198 = cljs.core.not(inst_26197);var state_26216__$1 = (function (){var statearr_26221 = state_26216;(statearr_26221[9] = inst_26196__$1);
return statearr_26221;
})();if(inst_26198)
{var statearr_26222_26243 = state_26216__$1;(statearr_26222_26243[1] = 5);
} else
{var statearr_26223_26244 = state_26216__$1;(statearr_26223_26244[1] = 6);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26217 === 5))
{var inst_26196 = (state_26216[9]);var inst_26193 = (state_26216[7]);var inst_26200 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26196,inst_26193);var state_26216__$1 = state_26216;if(inst_26200)
{var statearr_26224_26245 = state_26216__$1;(statearr_26224_26245[1] = 8);
} else
{var statearr_26225_26246 = state_26216__$1;(statearr_26225_26246[1] = 9);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26217 === 6))
{var state_26216__$1 = state_26216;var statearr_26227_26247 = state_26216__$1;(statearr_26227_26247[2] = null);
(statearr_26227_26247[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26217 === 7))
{var inst_26211 = (state_26216[2]);var state_26216__$1 = state_26216;var statearr_26228_26248 = state_26216__$1;(statearr_26228_26248[2] = inst_26211);
(statearr_26228_26248[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26217 === 8))
{var inst_26193 = (state_26216[7]);var tmp26226 = inst_26193;var inst_26193__$1 = tmp26226;var state_26216__$1 = (function (){var statearr_26229 = state_26216;(statearr_26229[7] = inst_26193__$1);
return statearr_26229;
})();var statearr_26230_26249 = state_26216__$1;(statearr_26230_26249[2] = null);
(statearr_26230_26249[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26217 === 9))
{var inst_26196 = (state_26216[9]);var state_26216__$1 = state_26216;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26216__$1,11,out,inst_26196);
} else
{if((state_val_26217 === 10))
{var inst_26208 = (state_26216[2]);var state_26216__$1 = state_26216;var statearr_26231_26250 = state_26216__$1;(statearr_26231_26250[2] = inst_26208);
(statearr_26231_26250[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26217 === 11))
{var inst_26196 = (state_26216[9]);var inst_26205 = (state_26216[2]);var inst_26193 = inst_26196;var state_26216__$1 = (function (){var statearr_26232 = state_26216;(statearr_26232[7] = inst_26193);
(statearr_26232[10] = inst_26205);
return statearr_26232;
})();var statearr_26233_26251 = state_26216__$1;(statearr_26233_26251[2] = null);
(statearr_26233_26251[1] = 2);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_26237 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26237[0] = state_machine__5507__auto__);
(statearr_26237[1] = 1);
return statearr_26237;
});
var state_machine__5507__auto____1 = (function (state_26216){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26216);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26238){if((e26238 instanceof Object))
{var ex__5510__auto__ = e26238;var statearr_26239_26252 = state_26216;(statearr_26239_26252[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26216);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e26238;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__26253 = state_26216;
state_26216 = G__26253;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26216){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26240 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26241);
return statearr_26240;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26358){var state_val_26359 = (state_26358[1]);if((state_val_26359 === 1))
{var inst_26321 = (new Array(n));var inst_26322 = inst_26321;var inst_26323 = 0;var state_26358__$1 = (function (){var statearr_26360 = state_26358;(statearr_26360[7] = inst_26322);
(statearr_26360[8] = inst_26323);
return statearr_26360;
})();var statearr_26361_26389 = state_26358__$1;(statearr_26361_26389[2] = null);
(statearr_26361_26389[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26359 === 2))
{var state_26358__$1 = state_26358;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26358__$1,4,ch);
} else
{if((state_val_26359 === 3))
{var inst_26356 = (state_26358[2]);var state_26358__$1 = state_26358;return cljs.core.async.impl.ioc_helpers.return_chan(state_26358__$1,inst_26356);
} else
{if((state_val_26359 === 4))
{var inst_26326 = (state_26358[9]);var inst_26326__$1 = (state_26358[2]);var inst_26327 = (inst_26326__$1 == null);var inst_26328 = cljs.core.not(inst_26327);var state_26358__$1 = (function (){var statearr_26362 = state_26358;(statearr_26362[9] = inst_26326__$1);
return statearr_26362;
})();if(inst_26328)
{var statearr_26363_26390 = state_26358__$1;(statearr_26363_26390[1] = 5);
} else
{var statearr_26364_26391 = state_26358__$1;(statearr_26364_26391[1] = 6);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26359 === 5))
{var inst_26322 = (state_26358[7]);var inst_26323 = (state_26358[8]);var inst_26331 = (state_26358[10]);var inst_26326 = (state_26358[9]);var inst_26330 = (inst_26322[inst_26323] = inst_26326);var inst_26331__$1 = (inst_26323 + 1);var inst_26332 = (inst_26331__$1 < n);var state_26358__$1 = (function (){var statearr_26365 = state_26358;(statearr_26365[10] = inst_26331__$1);
(statearr_26365[11] = inst_26330);
return statearr_26365;
})();if(cljs.core.truth_(inst_26332))
{var statearr_26366_26392 = state_26358__$1;(statearr_26366_26392[1] = 8);
} else
{var statearr_26367_26393 = state_26358__$1;(statearr_26367_26393[1] = 9);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26359 === 6))
{var inst_26323 = (state_26358[8]);var inst_26344 = (inst_26323 > 0);var state_26358__$1 = state_26358;if(cljs.core.truth_(inst_26344))
{var statearr_26369_26394 = state_26358__$1;(statearr_26369_26394[1] = 12);
} else
{var statearr_26370_26395 = state_26358__$1;(statearr_26370_26395[1] = 13);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26359 === 7))
{var inst_26354 = (state_26358[2]);var state_26358__$1 = state_26358;var statearr_26371_26396 = state_26358__$1;(statearr_26371_26396[2] = inst_26354);
(statearr_26371_26396[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26359 === 8))
{var inst_26322 = (state_26358[7]);var inst_26331 = (state_26358[10]);var tmp26368 = inst_26322;var inst_26322__$1 = tmp26368;var inst_26323 = inst_26331;var state_26358__$1 = (function (){var statearr_26372 = state_26358;(statearr_26372[7] = inst_26322__$1);
(statearr_26372[8] = inst_26323);
return statearr_26372;
})();var statearr_26373_26397 = state_26358__$1;(statearr_26373_26397[2] = null);
(statearr_26373_26397[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26359 === 9))
{var inst_26322 = (state_26358[7]);var inst_26336 = cljs.core.vec(inst_26322);var state_26358__$1 = state_26358;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26358__$1,11,out,inst_26336);
} else
{if((state_val_26359 === 10))
{var inst_26342 = (state_26358[2]);var state_26358__$1 = state_26358;var statearr_26374_26398 = state_26358__$1;(statearr_26374_26398[2] = inst_26342);
(statearr_26374_26398[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26359 === 11))
{var inst_26338 = (state_26358[2]);var inst_26339 = (new Array(n));var inst_26322 = inst_26339;var inst_26323 = 0;var state_26358__$1 = (function (){var statearr_26375 = state_26358;(statearr_26375[7] = inst_26322);
(statearr_26375[8] = inst_26323);
(statearr_26375[12] = inst_26338);
return statearr_26375;
})();var statearr_26376_26399 = state_26358__$1;(statearr_26376_26399[2] = null);
(statearr_26376_26399[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26359 === 12))
{var inst_26322 = (state_26358[7]);var inst_26346 = cljs.core.vec(inst_26322);var state_26358__$1 = state_26358;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26358__$1,15,out,inst_26346);
} else
{if((state_val_26359 === 13))
{var state_26358__$1 = state_26358;var statearr_26377_26400 = state_26358__$1;(statearr_26377_26400[2] = null);
(statearr_26377_26400[1] = 14);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26359 === 14))
{var inst_26351 = (state_26358[2]);var inst_26352 = cljs.core.async.close_BANG_(out);var state_26358__$1 = (function (){var statearr_26378 = state_26358;(statearr_26378[13] = inst_26351);
return statearr_26378;
})();var statearr_26379_26401 = state_26358__$1;(statearr_26379_26401[2] = inst_26352);
(statearr_26379_26401[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26359 === 15))
{var inst_26348 = (state_26358[2]);var state_26358__$1 = state_26358;var statearr_26380_26402 = state_26358__$1;(statearr_26380_26402[2] = inst_26348);
(statearr_26380_26402[1] = 14);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_26384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26384[0] = state_machine__5507__auto__);
(statearr_26384[1] = 1);
return statearr_26384;
});
var state_machine__5507__auto____1 = (function (state_26358){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26358);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26385){if((e26385 instanceof Object))
{var ex__5510__auto__ = e26385;var statearr_26386_26403 = state_26358;(statearr_26386_26403[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26358);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e26385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__26404 = state_26358;
state_26358 = G__26404;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26358){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26387 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26388);
return statearr_26387;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26517){var state_val_26518 = (state_26517[1]);if((state_val_26518 === 1))
{var inst_26476 = [];var inst_26477 = inst_26476;var inst_26478 = cljs.core.constant$keyword$247;var state_26517__$1 = (function (){var statearr_26519 = state_26517;(statearr_26519[7] = inst_26478);
(statearr_26519[8] = inst_26477);
return statearr_26519;
})();var statearr_26520_26548 = state_26517__$1;(statearr_26520_26548[2] = null);
(statearr_26520_26548[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26518 === 2))
{var state_26517__$1 = state_26517;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26517__$1,4,ch);
} else
{if((state_val_26518 === 3))
{var inst_26515 = (state_26517[2]);var state_26517__$1 = state_26517;return cljs.core.async.impl.ioc_helpers.return_chan(state_26517__$1,inst_26515);
} else
{if((state_val_26518 === 4))
{var inst_26481 = (state_26517[9]);var inst_26481__$1 = (state_26517[2]);var inst_26482 = (inst_26481__$1 == null);var inst_26483 = cljs.core.not(inst_26482);var state_26517__$1 = (function (){var statearr_26521 = state_26517;(statearr_26521[9] = inst_26481__$1);
return statearr_26521;
})();if(inst_26483)
{var statearr_26522_26549 = state_26517__$1;(statearr_26522_26549[1] = 5);
} else
{var statearr_26523_26550 = state_26517__$1;(statearr_26523_26550[1] = 6);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26518 === 5))
{var inst_26478 = (state_26517[7]);var inst_26485 = (state_26517[10]);var inst_26481 = (state_26517[9]);var inst_26485__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26481) : f.call(null,inst_26481));var inst_26486 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26485__$1,inst_26478);var inst_26487 = cljs.core.keyword_identical_QMARK_(inst_26478,cljs.core.constant$keyword$247);var inst_26488 = (inst_26486) || (inst_26487);var state_26517__$1 = (function (){var statearr_26524 = state_26517;(statearr_26524[10] = inst_26485__$1);
return statearr_26524;
})();if(cljs.core.truth_(inst_26488))
{var statearr_26525_26551 = state_26517__$1;(statearr_26525_26551[1] = 8);
} else
{var statearr_26526_26552 = state_26517__$1;(statearr_26526_26552[1] = 9);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26518 === 6))
{var inst_26477 = (state_26517[8]);var inst_26502 = inst_26477.length;var inst_26503 = (inst_26502 > 0);var state_26517__$1 = state_26517;if(cljs.core.truth_(inst_26503))
{var statearr_26528_26553 = state_26517__$1;(statearr_26528_26553[1] = 12);
} else
{var statearr_26529_26554 = state_26517__$1;(statearr_26529_26554[1] = 13);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_26518 === 7))
{var inst_26513 = (state_26517[2]);var state_26517__$1 = state_26517;var statearr_26530_26555 = state_26517__$1;(statearr_26530_26555[2] = inst_26513);
(statearr_26530_26555[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26518 === 8))
{var inst_26477 = (state_26517[8]);var inst_26485 = (state_26517[10]);var inst_26481 = (state_26517[9]);var inst_26490 = inst_26477.push(inst_26481);var tmp26527 = inst_26477;var inst_26477__$1 = tmp26527;var inst_26478 = inst_26485;var state_26517__$1 = (function (){var statearr_26531 = state_26517;(statearr_26531[11] = inst_26490);
(statearr_26531[7] = inst_26478);
(statearr_26531[8] = inst_26477__$1);
return statearr_26531;
})();var statearr_26532_26556 = state_26517__$1;(statearr_26532_26556[2] = null);
(statearr_26532_26556[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26518 === 9))
{var inst_26477 = (state_26517[8]);var inst_26493 = cljs.core.vec(inst_26477);var state_26517__$1 = state_26517;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26517__$1,11,out,inst_26493);
} else
{if((state_val_26518 === 10))
{var inst_26500 = (state_26517[2]);var state_26517__$1 = state_26517;var statearr_26533_26557 = state_26517__$1;(statearr_26533_26557[2] = inst_26500);
(statearr_26533_26557[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26518 === 11))
{var inst_26485 = (state_26517[10]);var inst_26481 = (state_26517[9]);var inst_26495 = (state_26517[2]);var inst_26496 = [];var inst_26497 = inst_26496.push(inst_26481);var inst_26477 = inst_26496;var inst_26478 = inst_26485;var state_26517__$1 = (function (){var statearr_26534 = state_26517;(statearr_26534[7] = inst_26478);
(statearr_26534[8] = inst_26477);
(statearr_26534[12] = inst_26497);
(statearr_26534[13] = inst_26495);
return statearr_26534;
})();var statearr_26535_26558 = state_26517__$1;(statearr_26535_26558[2] = null);
(statearr_26535_26558[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26518 === 12))
{var inst_26477 = (state_26517[8]);var inst_26505 = cljs.core.vec(inst_26477);var state_26517__$1 = state_26517;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26517__$1,15,out,inst_26505);
} else
{if((state_val_26518 === 13))
{var state_26517__$1 = state_26517;var statearr_26536_26559 = state_26517__$1;(statearr_26536_26559[2] = null);
(statearr_26536_26559[1] = 14);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26518 === 14))
{var inst_26510 = (state_26517[2]);var inst_26511 = cljs.core.async.close_BANG_(out);var state_26517__$1 = (function (){var statearr_26537 = state_26517;(statearr_26537[14] = inst_26510);
return statearr_26537;
})();var statearr_26538_26560 = state_26517__$1;(statearr_26538_26560[2] = inst_26511);
(statearr_26538_26560[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_26518 === 15))
{var inst_26507 = (state_26517[2]);var state_26517__$1 = state_26517;var statearr_26539_26561 = state_26517__$1;(statearr_26539_26561[2] = inst_26507);
(statearr_26539_26561[1] = 14);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_26543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26543[0] = state_machine__5507__auto__);
(statearr_26543[1] = 1);
return statearr_26543;
});
var state_machine__5507__auto____1 = (function (state_26517){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26517);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26544){if((e26544 instanceof Object))
{var ex__5510__auto__ = e26544;var statearr_26545_26562 = state_26517;(statearr_26545_26562[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26517);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e26544;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__26563 = state_26517;
state_26517 = G__26563;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26517){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26546 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26547);
return statearr_26546;
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
