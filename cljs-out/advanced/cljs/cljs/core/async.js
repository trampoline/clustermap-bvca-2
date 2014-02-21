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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24273 = (function (f,fn_handler,meta24274){
this.f = f;
this.fn_handler = fn_handler;
this.meta24274 = meta24274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24273.cljs$lang$type = true;
cljs.core.async.t24273.cljs$lang$ctorStr = "cljs.core.async/t24273";
cljs.core.async.t24273.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24273");
});
cljs.core.async.t24273.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24275){var self__ = this;
var _24275__$1 = this;return self__.meta24274;
});
cljs.core.async.t24273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24275,meta24274__$1){var self__ = this;
var _24275__$1 = this;return (new cljs.core.async.t24273(self__.f,self__.fn_handler,meta24274__$1));
});
cljs.core.async.__GT_t24273 = (function __GT_t24273(f__$1,fn_handler__$1,meta24274){return (new cljs.core.async.t24273(f__$1,fn_handler__$1,meta24274));
});
}
return (new cljs.core.async.t24273(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24277 = buff;if(G__24277)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24277.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24277.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24277);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24277);
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
{var val_24278 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24278) : fn1.call(null,val_24278));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24278) : fn1.call(null,val_24278));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24279 = n;var x_24280 = 0;while(true){
if((x_24280 < n__4248__auto___24279))
{(a[x_24280] = 0);
{
var G__24281 = (x_24280 + 1);
x_24280 = G__24281;
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
var G__24282 = (i + 1);
i = G__24282;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24286 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24286 = (function (flag,alt_flag,meta24287){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24287 = meta24287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24286.cljs$lang$type = true;
cljs.core.async.t24286.cljs$lang$ctorStr = "cljs.core.async/t24286";
cljs.core.async.t24286.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24286");
});
cljs.core.async.t24286.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24288){var self__ = this;
var _24288__$1 = this;return self__.meta24287;
});
cljs.core.async.t24286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24288,meta24287__$1){var self__ = this;
var _24288__$1 = this;return (new cljs.core.async.t24286(self__.flag,self__.alt_flag,meta24287__$1));
});
cljs.core.async.__GT_t24286 = (function __GT_t24286(flag__$1,alt_flag__$1,meta24287){return (new cljs.core.async.t24286(flag__$1,alt_flag__$1,meta24287));
});
}
return (new cljs.core.async.t24286(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24292 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24292 = (function (cb,flag,alt_handler,meta24293){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24293 = meta24293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24292.cljs$lang$type = true;
cljs.core.async.t24292.cljs$lang$ctorStr = "cljs.core.async/t24292";
cljs.core.async.t24292.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24292");
});
cljs.core.async.t24292.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24294){var self__ = this;
var _24294__$1 = this;return self__.meta24293;
});
cljs.core.async.t24292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24294,meta24293__$1){var self__ = this;
var _24294__$1 = this;return (new cljs.core.async.t24292(self__.cb,self__.flag,self__.alt_handler,meta24293__$1));
});
cljs.core.async.__GT_t24292 = (function __GT_t24292(cb__$1,flag__$1,alt_handler__$1,meta24293){return (new cljs.core.async.t24292(cb__$1,flag__$1,alt_handler__$1,meta24293));
});
}
return (new cljs.core.async.t24292(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24295_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24295_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24295_SHARP_,port], null)));
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
var G__24296 = (i + 1);
i = G__24296;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$231))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$231], null));
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
var alts_BANG___delegate = function (ports,p__24297){var map__24299 = p__24297;var map__24299__$1 = ((cljs.core.seq_QMARK_(map__24299))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24299):map__24299);var opts = map__24299__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24297 = null;if (arguments.length > 1) {
  p__24297 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24297);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24300){
var ports = cljs.core.first(arglist__24300);
var p__24297 = cljs.core.rest(arglist__24300);
return alts_BANG___delegate(ports,p__24297);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24308 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24308 = (function (ch,f,map_LT_,meta24309){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24309 = meta24309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24308.cljs$lang$type = true;
cljs.core.async.t24308.cljs$lang$ctorStr = "cljs.core.async/t24308";
cljs.core.async.t24308.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24308");
});
cljs.core.async.t24308.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24308.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24311 = (function (fn1,_,meta24309,ch,f,map_LT_,meta24312){
this.fn1 = fn1;
this._ = _;
this.meta24309 = meta24309;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24312 = meta24312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24311.cljs$lang$type = true;
cljs.core.async.t24311.cljs$lang$ctorStr = "cljs.core.async/t24311";
cljs.core.async.t24311.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24311");
});
cljs.core.async.t24311.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24311.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24301_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24301_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24301_SHARP_) : self__.f.call(null,p1__24301_SHARP_)))) : f1.call(null,(((p1__24301_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24301_SHARP_) : self__.f.call(null,p1__24301_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24313){var self__ = this;
var _24313__$1 = this;return self__.meta24312;
});
cljs.core.async.t24311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24313,meta24312__$1){var self__ = this;
var _24313__$1 = this;return (new cljs.core.async.t24311(self__.fn1,self__._,self__.meta24309,self__.ch,self__.f,self__.map_LT_,meta24312__$1));
});
cljs.core.async.__GT_t24311 = (function __GT_t24311(fn1__$1,___$2,meta24309__$1,ch__$2,f__$2,map_LT___$2,meta24312){return (new cljs.core.async.t24311(fn1__$1,___$2,meta24309__$1,ch__$2,f__$2,map_LT___$2,meta24312));
});
}
return (new cljs.core.async.t24311(fn1,___$1,self__.meta24309,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24308.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24310){var self__ = this;
var _24310__$1 = this;return self__.meta24309;
});
cljs.core.async.t24308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24310,meta24309__$1){var self__ = this;
var _24310__$1 = this;return (new cljs.core.async.t24308(self__.ch,self__.f,self__.map_LT_,meta24309__$1));
});
cljs.core.async.__GT_t24308 = (function __GT_t24308(ch__$1,f__$1,map_LT___$1,meta24309){return (new cljs.core.async.t24308(ch__$1,f__$1,map_LT___$1,meta24309));
});
}
return (new cljs.core.async.t24308(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24317 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24317 = (function (ch,f,map_GT_,meta24318){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24318 = meta24318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24317.cljs$lang$type = true;
cljs.core.async.t24317.cljs$lang$ctorStr = "cljs.core.async/t24317";
cljs.core.async.t24317.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24317");
});
cljs.core.async.t24317.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24317.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24317.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24317.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24317.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24317.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24319){var self__ = this;
var _24319__$1 = this;return self__.meta24318;
});
cljs.core.async.t24317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24319,meta24318__$1){var self__ = this;
var _24319__$1 = this;return (new cljs.core.async.t24317(self__.ch,self__.f,self__.map_GT_,meta24318__$1));
});
cljs.core.async.__GT_t24317 = (function __GT_t24317(ch__$1,f__$1,map_GT___$1,meta24318){return (new cljs.core.async.t24317(ch__$1,f__$1,map_GT___$1,meta24318));
});
}
return (new cljs.core.async.t24317(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24323 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24323 = (function (ch,p,filter_GT_,meta24324){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24324 = meta24324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24323.cljs$lang$type = true;
cljs.core.async.t24323.cljs$lang$ctorStr = "cljs.core.async/t24323";
cljs.core.async.t24323.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24323");
});
cljs.core.async.t24323.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24323.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24323.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24323.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24323.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24323.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24325){var self__ = this;
var _24325__$1 = this;return self__.meta24324;
});
cljs.core.async.t24323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24325,meta24324__$1){var self__ = this;
var _24325__$1 = this;return (new cljs.core.async.t24323(self__.ch,self__.p,self__.filter_GT_,meta24324__$1));
});
cljs.core.async.__GT_t24323 = (function __GT_t24323(ch__$1,p__$1,filter_GT___$1,meta24324){return (new cljs.core.async.t24323(ch__$1,p__$1,filter_GT___$1,meta24324));
});
}
return (new cljs.core.async.t24323(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24387){var state_val_24388 = (state_24387[1]);if((state_val_24388 === 1))
{var state_24387__$1 = state_24387;var statearr_24389_24409 = state_24387__$1;(statearr_24389_24409[2] = null);
(statearr_24389_24409[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24388 === 2))
{var state_24387__$1 = state_24387;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24387__$1,4,ch);
} else
{if((state_val_24388 === 3))
{var inst_24385 = (state_24387[2]);var state_24387__$1 = state_24387;return cljs.core.async.impl.ioc_helpers.return_chan(state_24387__$1,inst_24385);
} else
{if((state_val_24388 === 4))
{var inst_24369 = (state_24387[7]);var inst_24369__$1 = (state_24387[2]);var inst_24370 = (inst_24369__$1 == null);var state_24387__$1 = (function (){var statearr_24390 = state_24387;(statearr_24390[7] = inst_24369__$1);
return statearr_24390;
})();if(cljs.core.truth_(inst_24370))
{var statearr_24391_24410 = state_24387__$1;(statearr_24391_24410[1] = 5);
} else
{var statearr_24392_24411 = state_24387__$1;(statearr_24392_24411[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24388 === 5))
{var inst_24372 = cljs.core.async.close_BANG_(out);var state_24387__$1 = state_24387;var statearr_24393_24412 = state_24387__$1;(statearr_24393_24412[2] = inst_24372);
(statearr_24393_24412[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24388 === 6))
{var inst_24369 = (state_24387[7]);var inst_24374 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24369) : p.call(null,inst_24369));var state_24387__$1 = state_24387;if(cljs.core.truth_(inst_24374))
{var statearr_24394_24413 = state_24387__$1;(statearr_24394_24413[1] = 8);
} else
{var statearr_24395_24414 = state_24387__$1;(statearr_24395_24414[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24388 === 7))
{var inst_24383 = (state_24387[2]);var state_24387__$1 = state_24387;var statearr_24396_24415 = state_24387__$1;(statearr_24396_24415[2] = inst_24383);
(statearr_24396_24415[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24388 === 8))
{var inst_24369 = (state_24387[7]);var state_24387__$1 = state_24387;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24387__$1,11,out,inst_24369);
} else
{if((state_val_24388 === 9))
{var state_24387__$1 = state_24387;var statearr_24397_24416 = state_24387__$1;(statearr_24397_24416[2] = null);
(statearr_24397_24416[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24388 === 10))
{var inst_24380 = (state_24387[2]);var state_24387__$1 = (function (){var statearr_24398 = state_24387;(statearr_24398[8] = inst_24380);
return statearr_24398;
})();var statearr_24399_24417 = state_24387__$1;(statearr_24399_24417[2] = null);
(statearr_24399_24417[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24388 === 11))
{var inst_24377 = (state_24387[2]);var state_24387__$1 = state_24387;var statearr_24400_24418 = state_24387__$1;(statearr_24400_24418[2] = inst_24377);
(statearr_24400_24418[1] = 10);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_24404 = [null,null,null,null,null,null,null,null,null];(statearr_24404[0] = state_machine__5507__auto__);
(statearr_24404[1] = 1);
return statearr_24404;
});
var state_machine__5507__auto____1 = (function (state_24387){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24387);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24405){if((e24405 instanceof Object))
{var ex__5510__auto__ = e24405;var statearr_24406_24419 = state_24387;(statearr_24406_24419[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24387);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24420 = state_24387;
state_24387 = G__24420;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24387){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24407 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24408);
return statearr_24407;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24572){var state_val_24573 = (state_24572[1]);if((state_val_24573 === 1))
{var state_24572__$1 = state_24572;var statearr_24574_24611 = state_24572__$1;(statearr_24574_24611[2] = null);
(statearr_24574_24611[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 2))
{var state_24572__$1 = state_24572;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24572__$1,4,in$);
} else
{if((state_val_24573 === 3))
{var inst_24570 = (state_24572[2]);var state_24572__$1 = state_24572;return cljs.core.async.impl.ioc_helpers.return_chan(state_24572__$1,inst_24570);
} else
{if((state_val_24573 === 4))
{var inst_24518 = (state_24572[7]);var inst_24518__$1 = (state_24572[2]);var inst_24519 = (inst_24518__$1 == null);var state_24572__$1 = (function (){var statearr_24575 = state_24572;(statearr_24575[7] = inst_24518__$1);
return statearr_24575;
})();if(cljs.core.truth_(inst_24519))
{var statearr_24576_24612 = state_24572__$1;(statearr_24576_24612[1] = 5);
} else
{var statearr_24577_24613 = state_24572__$1;(statearr_24577_24613[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 5))
{var inst_24521 = cljs.core.async.close_BANG_(out);var state_24572__$1 = state_24572;var statearr_24578_24614 = state_24572__$1;(statearr_24578_24614[2] = inst_24521);
(statearr_24578_24614[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 6))
{var inst_24518 = (state_24572[7]);var inst_24523 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24518) : f.call(null,inst_24518));var inst_24528 = cljs.core.seq(inst_24523);var inst_24529 = inst_24528;var inst_24530 = null;var inst_24531 = 0;var inst_24532 = 0;var state_24572__$1 = (function (){var statearr_24579 = state_24572;(statearr_24579[8] = inst_24532);
(statearr_24579[9] = inst_24531);
(statearr_24579[10] = inst_24530);
(statearr_24579[11] = inst_24529);
return statearr_24579;
})();var statearr_24580_24615 = state_24572__$1;(statearr_24580_24615[2] = null);
(statearr_24580_24615[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 7))
{var inst_24568 = (state_24572[2]);var state_24572__$1 = state_24572;var statearr_24581_24616 = state_24572__$1;(statearr_24581_24616[2] = inst_24568);
(statearr_24581_24616[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 8))
{var inst_24532 = (state_24572[8]);var inst_24531 = (state_24572[9]);var inst_24534 = (inst_24532 < inst_24531);var inst_24535 = inst_24534;var state_24572__$1 = state_24572;if(cljs.core.truth_(inst_24535))
{var statearr_24582_24617 = state_24572__$1;(statearr_24582_24617[1] = 10);
} else
{var statearr_24583_24618 = state_24572__$1;(statearr_24583_24618[1] = 11);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 9))
{var inst_24565 = (state_24572[2]);var state_24572__$1 = (function (){var statearr_24584 = state_24572;(statearr_24584[12] = inst_24565);
return statearr_24584;
})();var statearr_24585_24619 = state_24572__$1;(statearr_24585_24619[2] = null);
(statearr_24585_24619[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 10))
{var inst_24532 = (state_24572[8]);var inst_24530 = (state_24572[10]);var inst_24537 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24530,inst_24532);var state_24572__$1 = state_24572;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24572__$1,13,out,inst_24537);
} else
{if((state_val_24573 === 11))
{var inst_24529 = (state_24572[11]);var inst_24543 = (state_24572[13]);var inst_24543__$1 = cljs.core.seq(inst_24529);var state_24572__$1 = (function (){var statearr_24589 = state_24572;(statearr_24589[13] = inst_24543__$1);
return statearr_24589;
})();if(inst_24543__$1)
{var statearr_24590_24620 = state_24572__$1;(statearr_24590_24620[1] = 14);
} else
{var statearr_24591_24621 = state_24572__$1;(statearr_24591_24621[1] = 15);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 12))
{var inst_24563 = (state_24572[2]);var state_24572__$1 = state_24572;var statearr_24592_24622 = state_24572__$1;(statearr_24592_24622[2] = inst_24563);
(statearr_24592_24622[1] = 9);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 13))
{var inst_24532 = (state_24572[8]);var inst_24531 = (state_24572[9]);var inst_24530 = (state_24572[10]);var inst_24529 = (state_24572[11]);var inst_24539 = (state_24572[2]);var inst_24540 = (inst_24532 + 1);var tmp24586 = inst_24531;var tmp24587 = inst_24530;var tmp24588 = inst_24529;var inst_24529__$1 = tmp24588;var inst_24530__$1 = tmp24587;var inst_24531__$1 = tmp24586;var inst_24532__$1 = inst_24540;var state_24572__$1 = (function (){var statearr_24593 = state_24572;(statearr_24593[14] = inst_24539);
(statearr_24593[8] = inst_24532__$1);
(statearr_24593[9] = inst_24531__$1);
(statearr_24593[10] = inst_24530__$1);
(statearr_24593[11] = inst_24529__$1);
return statearr_24593;
})();var statearr_24594_24623 = state_24572__$1;(statearr_24594_24623[2] = null);
(statearr_24594_24623[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 14))
{var inst_24543 = (state_24572[13]);var inst_24545 = cljs.core.chunked_seq_QMARK_(inst_24543);var state_24572__$1 = state_24572;if(inst_24545)
{var statearr_24595_24624 = state_24572__$1;(statearr_24595_24624[1] = 17);
} else
{var statearr_24596_24625 = state_24572__$1;(statearr_24596_24625[1] = 18);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 15))
{var state_24572__$1 = state_24572;var statearr_24597_24626 = state_24572__$1;(statearr_24597_24626[2] = null);
(statearr_24597_24626[1] = 16);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 16))
{var inst_24561 = (state_24572[2]);var state_24572__$1 = state_24572;var statearr_24598_24627 = state_24572__$1;(statearr_24598_24627[2] = inst_24561);
(statearr_24598_24627[1] = 12);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 17))
{var inst_24543 = (state_24572[13]);var inst_24547 = cljs.core.chunk_first(inst_24543);var inst_24548 = cljs.core.chunk_rest(inst_24543);var inst_24549 = cljs.core.count(inst_24547);var inst_24529 = inst_24548;var inst_24530 = inst_24547;var inst_24531 = inst_24549;var inst_24532 = 0;var state_24572__$1 = (function (){var statearr_24599 = state_24572;(statearr_24599[8] = inst_24532);
(statearr_24599[9] = inst_24531);
(statearr_24599[10] = inst_24530);
(statearr_24599[11] = inst_24529);
return statearr_24599;
})();var statearr_24600_24628 = state_24572__$1;(statearr_24600_24628[2] = null);
(statearr_24600_24628[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 18))
{var inst_24543 = (state_24572[13]);var inst_24552 = cljs.core.first(inst_24543);var state_24572__$1 = state_24572;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24572__$1,20,out,inst_24552);
} else
{if((state_val_24573 === 19))
{var inst_24558 = (state_24572[2]);var state_24572__$1 = state_24572;var statearr_24601_24629 = state_24572__$1;(statearr_24601_24629[2] = inst_24558);
(statearr_24601_24629[1] = 16);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24573 === 20))
{var inst_24543 = (state_24572[13]);var inst_24554 = (state_24572[2]);var inst_24555 = cljs.core.next(inst_24543);var inst_24529 = inst_24555;var inst_24530 = null;var inst_24531 = 0;var inst_24532 = 0;var state_24572__$1 = (function (){var statearr_24602 = state_24572;(statearr_24602[8] = inst_24532);
(statearr_24602[9] = inst_24531);
(statearr_24602[10] = inst_24530);
(statearr_24602[15] = inst_24554);
(statearr_24602[11] = inst_24529);
return statearr_24602;
})();var statearr_24603_24630 = state_24572__$1;(statearr_24603_24630[2] = null);
(statearr_24603_24630[1] = 8);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_24607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24607[0] = state_machine__5507__auto__);
(statearr_24607[1] = 1);
return statearr_24607;
});
var state_machine__5507__auto____1 = (function (state_24572){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24572);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24608){if((e24608 instanceof Object))
{var ex__5510__auto__ = e24608;var statearr_24609_24631 = state_24572;(statearr_24609_24631[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24572);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24608;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24632 = state_24572;
state_24572 = G__24632;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24572){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24610 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24610;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24692){var state_val_24693 = (state_24692[1]);if((state_val_24693 === 1))
{var state_24692__$1 = state_24692;var statearr_24694_24714 = state_24692__$1;(statearr_24694_24714[2] = null);
(statearr_24694_24714[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24693 === 2))
{var state_24692__$1 = state_24692;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24692__$1,4,from);
} else
{if((state_val_24693 === 3))
{var inst_24690 = (state_24692[2]);var state_24692__$1 = state_24692;return cljs.core.async.impl.ioc_helpers.return_chan(state_24692__$1,inst_24690);
} else
{if((state_val_24693 === 4))
{var inst_24675 = (state_24692[7]);var inst_24675__$1 = (state_24692[2]);var inst_24676 = (inst_24675__$1 == null);var state_24692__$1 = (function (){var statearr_24695 = state_24692;(statearr_24695[7] = inst_24675__$1);
return statearr_24695;
})();if(cljs.core.truth_(inst_24676))
{var statearr_24696_24715 = state_24692__$1;(statearr_24696_24715[1] = 5);
} else
{var statearr_24697_24716 = state_24692__$1;(statearr_24697_24716[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24693 === 5))
{var state_24692__$1 = state_24692;if(cljs.core.truth_(close_QMARK_))
{var statearr_24698_24717 = state_24692__$1;(statearr_24698_24717[1] = 8);
} else
{var statearr_24699_24718 = state_24692__$1;(statearr_24699_24718[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24693 === 6))
{var inst_24675 = (state_24692[7]);var state_24692__$1 = state_24692;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24692__$1,11,to,inst_24675);
} else
{if((state_val_24693 === 7))
{var inst_24688 = (state_24692[2]);var state_24692__$1 = state_24692;var statearr_24700_24719 = state_24692__$1;(statearr_24700_24719[2] = inst_24688);
(statearr_24700_24719[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24693 === 8))
{var inst_24679 = cljs.core.async.close_BANG_(to);var state_24692__$1 = state_24692;var statearr_24701_24720 = state_24692__$1;(statearr_24701_24720[2] = inst_24679);
(statearr_24701_24720[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24693 === 9))
{var state_24692__$1 = state_24692;var statearr_24702_24721 = state_24692__$1;(statearr_24702_24721[2] = null);
(statearr_24702_24721[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24693 === 10))
{var inst_24682 = (state_24692[2]);var state_24692__$1 = state_24692;var statearr_24703_24722 = state_24692__$1;(statearr_24703_24722[2] = inst_24682);
(statearr_24703_24722[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24693 === 11))
{var inst_24685 = (state_24692[2]);var state_24692__$1 = (function (){var statearr_24704 = state_24692;(statearr_24704[8] = inst_24685);
return statearr_24704;
})();var statearr_24705_24723 = state_24692__$1;(statearr_24705_24723[2] = null);
(statearr_24705_24723[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_24709 = [null,null,null,null,null,null,null,null,null];(statearr_24709[0] = state_machine__5507__auto__);
(statearr_24709[1] = 1);
return statearr_24709;
});
var state_machine__5507__auto____1 = (function (state_24692){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24692);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24710){if((e24710 instanceof Object))
{var ex__5510__auto__ = e24710;var statearr_24711_24724 = state_24692;(statearr_24711_24724[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24692);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24725 = state_24692;
state_24692 = G__24725;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24692){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24712 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24713);
return statearr_24712;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24790){var state_val_24791 = (state_24790[1]);if((state_val_24791 === 1))
{var state_24790__$1 = state_24790;var statearr_24792_24813 = state_24790__$1;(statearr_24792_24813[2] = null);
(statearr_24792_24813[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24791 === 2))
{var state_24790__$1 = state_24790;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24790__$1,4,ch);
} else
{if((state_val_24791 === 3))
{var inst_24788 = (state_24790[2]);var state_24790__$1 = state_24790;return cljs.core.async.impl.ioc_helpers.return_chan(state_24790__$1,inst_24788);
} else
{if((state_val_24791 === 4))
{var inst_24771 = (state_24790[7]);var inst_24771__$1 = (state_24790[2]);var inst_24772 = (inst_24771__$1 == null);var state_24790__$1 = (function (){var statearr_24793 = state_24790;(statearr_24793[7] = inst_24771__$1);
return statearr_24793;
})();if(cljs.core.truth_(inst_24772))
{var statearr_24794_24814 = state_24790__$1;(statearr_24794_24814[1] = 5);
} else
{var statearr_24795_24815 = state_24790__$1;(statearr_24795_24815[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24791 === 5))
{var inst_24774 = cljs.core.async.close_BANG_(tc);var inst_24775 = cljs.core.async.close_BANG_(fc);var state_24790__$1 = (function (){var statearr_24796 = state_24790;(statearr_24796[8] = inst_24774);
return statearr_24796;
})();var statearr_24797_24816 = state_24790__$1;(statearr_24797_24816[2] = inst_24775);
(statearr_24797_24816[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24791 === 6))
{var inst_24771 = (state_24790[7]);var inst_24777 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24771) : p.call(null,inst_24771));var state_24790__$1 = state_24790;if(cljs.core.truth_(inst_24777))
{var statearr_24798_24817 = state_24790__$1;(statearr_24798_24817[1] = 9);
} else
{var statearr_24799_24818 = state_24790__$1;(statearr_24799_24818[1] = 10);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24791 === 7))
{var inst_24786 = (state_24790[2]);var state_24790__$1 = state_24790;var statearr_24800_24819 = state_24790__$1;(statearr_24800_24819[2] = inst_24786);
(statearr_24800_24819[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24791 === 8))
{var inst_24783 = (state_24790[2]);var state_24790__$1 = (function (){var statearr_24801 = state_24790;(statearr_24801[9] = inst_24783);
return statearr_24801;
})();var statearr_24802_24820 = state_24790__$1;(statearr_24802_24820[2] = null);
(statearr_24802_24820[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24791 === 9))
{var state_24790__$1 = state_24790;var statearr_24803_24821 = state_24790__$1;(statearr_24803_24821[2] = tc);
(statearr_24803_24821[1] = 11);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24791 === 10))
{var state_24790__$1 = state_24790;var statearr_24804_24822 = state_24790__$1;(statearr_24804_24822[2] = fc);
(statearr_24804_24822[1] = 11);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24791 === 11))
{var inst_24771 = (state_24790[7]);var inst_24781 = (state_24790[2]);var state_24790__$1 = state_24790;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24790__$1,8,inst_24781,inst_24771);
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
var state_machine__5507__auto____0 = (function (){var statearr_24808 = [null,null,null,null,null,null,null,null,null,null];(statearr_24808[0] = state_machine__5507__auto__);
(statearr_24808[1] = 1);
return statearr_24808;
});
var state_machine__5507__auto____1 = (function (state_24790){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24790);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24809){if((e24809 instanceof Object))
{var ex__5510__auto__ = e24809;var statearr_24810_24823 = state_24790;(statearr_24810_24823[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24790);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24809;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24824 = state_24790;
state_24790 = G__24824;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24790){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24811 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24812);
return statearr_24811;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24871){var state_val_24872 = (state_24871[1]);if((state_val_24872 === 7))
{var inst_24867 = (state_24871[2]);var state_24871__$1 = state_24871;var statearr_24873_24889 = state_24871__$1;(statearr_24873_24889[2] = inst_24867);
(statearr_24873_24889[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24872 === 6))
{var inst_24860 = (state_24871[7]);var inst_24857 = (state_24871[8]);var inst_24864 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24857,inst_24860) : f.call(null,inst_24857,inst_24860));var inst_24857__$1 = inst_24864;var state_24871__$1 = (function (){var statearr_24874 = state_24871;(statearr_24874[8] = inst_24857__$1);
return statearr_24874;
})();var statearr_24875_24890 = state_24871__$1;(statearr_24875_24890[2] = null);
(statearr_24875_24890[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24872 === 5))
{var inst_24857 = (state_24871[8]);var state_24871__$1 = state_24871;var statearr_24876_24891 = state_24871__$1;(statearr_24876_24891[2] = inst_24857);
(statearr_24876_24891[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24872 === 4))
{var inst_24860 = (state_24871[7]);var inst_24860__$1 = (state_24871[2]);var inst_24861 = (inst_24860__$1 == null);var state_24871__$1 = (function (){var statearr_24877 = state_24871;(statearr_24877[7] = inst_24860__$1);
return statearr_24877;
})();if(cljs.core.truth_(inst_24861))
{var statearr_24878_24892 = state_24871__$1;(statearr_24878_24892[1] = 5);
} else
{var statearr_24879_24893 = state_24871__$1;(statearr_24879_24893[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24872 === 3))
{var inst_24869 = (state_24871[2]);var state_24871__$1 = state_24871;return cljs.core.async.impl.ioc_helpers.return_chan(state_24871__$1,inst_24869);
} else
{if((state_val_24872 === 2))
{var state_24871__$1 = state_24871;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24871__$1,4,ch);
} else
{if((state_val_24872 === 1))
{var inst_24857 = init;var state_24871__$1 = (function (){var statearr_24880 = state_24871;(statearr_24880[8] = inst_24857);
return statearr_24880;
})();var statearr_24881_24894 = state_24871__$1;(statearr_24881_24894[2] = null);
(statearr_24881_24894[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_24885 = [null,null,null,null,null,null,null,null,null];(statearr_24885[0] = state_machine__5507__auto__);
(statearr_24885[1] = 1);
return statearr_24885;
});
var state_machine__5507__auto____1 = (function (state_24871){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24871);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24886){if((e24886 instanceof Object))
{var ex__5510__auto__ = e24886;var statearr_24887_24895 = state_24871;(statearr_24887_24895[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24871);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24886;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24896 = state_24871;
state_24871 = G__24896;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24871){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24888 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24888;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24958){var state_val_24959 = (state_24958[1]);if((state_val_24959 === 1))
{var inst_24938 = cljs.core.seq(coll);var inst_24939 = inst_24938;var state_24958__$1 = (function (){var statearr_24960 = state_24958;(statearr_24960[7] = inst_24939);
return statearr_24960;
})();var statearr_24961_24979 = state_24958__$1;(statearr_24961_24979[2] = null);
(statearr_24961_24979[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24959 === 2))
{var inst_24939 = (state_24958[7]);var state_24958__$1 = state_24958;if(cljs.core.truth_(inst_24939))
{var statearr_24962_24980 = state_24958__$1;(statearr_24962_24980[1] = 4);
} else
{var statearr_24963_24981 = state_24958__$1;(statearr_24963_24981[1] = 5);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24959 === 3))
{var inst_24956 = (state_24958[2]);var state_24958__$1 = state_24958;return cljs.core.async.impl.ioc_helpers.return_chan(state_24958__$1,inst_24956);
} else
{if((state_val_24959 === 4))
{var inst_24939 = (state_24958[7]);var inst_24942 = cljs.core.first(inst_24939);var state_24958__$1 = state_24958;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24958__$1,7,ch,inst_24942);
} else
{if((state_val_24959 === 5))
{var state_24958__$1 = state_24958;if(cljs.core.truth_(close_QMARK_))
{var statearr_24964_24982 = state_24958__$1;(statearr_24964_24982[1] = 8);
} else
{var statearr_24965_24983 = state_24958__$1;(statearr_24965_24983[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_24959 === 6))
{var inst_24954 = (state_24958[2]);var state_24958__$1 = state_24958;var statearr_24966_24984 = state_24958__$1;(statearr_24966_24984[2] = inst_24954);
(statearr_24966_24984[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24959 === 7))
{var inst_24939 = (state_24958[7]);var inst_24944 = (state_24958[2]);var inst_24945 = cljs.core.next(inst_24939);var inst_24939__$1 = inst_24945;var state_24958__$1 = (function (){var statearr_24967 = state_24958;(statearr_24967[7] = inst_24939__$1);
(statearr_24967[8] = inst_24944);
return statearr_24967;
})();var statearr_24968_24985 = state_24958__$1;(statearr_24968_24985[2] = null);
(statearr_24968_24985[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24959 === 8))
{var inst_24949 = cljs.core.async.close_BANG_(ch);var state_24958__$1 = state_24958;var statearr_24969_24986 = state_24958__$1;(statearr_24969_24986[2] = inst_24949);
(statearr_24969_24986[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24959 === 9))
{var state_24958__$1 = state_24958;var statearr_24970_24987 = state_24958__$1;(statearr_24970_24987[2] = null);
(statearr_24970_24987[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_24959 === 10))
{var inst_24952 = (state_24958[2]);var state_24958__$1 = state_24958;var statearr_24971_24988 = state_24958__$1;(statearr_24971_24988[2] = inst_24952);
(statearr_24971_24988[1] = 6);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_24975 = [null,null,null,null,null,null,null,null,null];(statearr_24975[0] = state_machine__5507__auto__);
(statearr_24975[1] = 1);
return statearr_24975;
});
var state_machine__5507__auto____1 = (function (state_24958){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24958);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24976){if((e24976 instanceof Object))
{var ex__5510__auto__ = e24976;var statearr_24977_24989 = state_24958;(statearr_24977_24989[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24958);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e24976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__24990 = state_24958;
state_24958 = G__24990;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24958){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24978 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24978;
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
cljs.core.async.Mux = (function (){var obj24992 = {};return obj24992;
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
cljs.core.async.Mult = (function (){var obj24994 = {};return obj24994;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25218 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25218 = (function (cs,ch,mult,meta25219){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25219 = meta25219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25218.cljs$lang$type = true;
cljs.core.async.t25218.cljs$lang$ctorStr = "cljs.core.async/t25218";
cljs.core.async.t25218.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25218");
});})(cs))
;
cljs.core.async.t25218.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25218.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25218.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25218.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25218.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25220){var self__ = this;
var _25220__$1 = this;return self__.meta25219;
});})(cs))
;
cljs.core.async.t25218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25220,meta25219__$1){var self__ = this;
var _25220__$1 = this;return (new cljs.core.async.t25218(self__.cs,self__.ch,self__.mult,meta25219__$1));
});})(cs))
;
cljs.core.async.__GT_t25218 = ((function (cs){
return (function __GT_t25218(cs__$1,ch__$1,mult__$1,meta25219){return (new cljs.core.async.t25218(cs__$1,ch__$1,mult__$1,meta25219));
});})(cs))
;
}
return (new cljs.core.async.t25218(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25355){var state_val_25356 = (state_25355[1]);if((state_val_25356 === 32))
{var inst_25299 = (state_25355[7]);var inst_25223 = (state_25355[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25355,31,Object,null,30);var inst_25306 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25299,inst_25223,done);var state_25355__$1 = state_25355;var statearr_25357_25442 = state_25355__$1;(statearr_25357_25442[2] = inst_25306);
cljs.core.async.impl.ioc_helpers.process_exception(state_25355__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 1))
{var state_25355__$1 = state_25355;var statearr_25358_25443 = state_25355__$1;(statearr_25358_25443[2] = null);
(statearr_25358_25443[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 33))
{var inst_25312 = (state_25355[9]);var inst_25314 = cljs.core.chunked_seq_QMARK_(inst_25312);var state_25355__$1 = state_25355;if(inst_25314)
{var statearr_25359_25444 = state_25355__$1;(statearr_25359_25444[1] = 36);
} else
{var statearr_25360_25445 = state_25355__$1;(statearr_25360_25445[1] = 37);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 2))
{var state_25355__$1 = state_25355;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25355__$1,4,ch);
} else
{if((state_val_25356 === 34))
{var state_25355__$1 = state_25355;var statearr_25361_25446 = state_25355__$1;(statearr_25361_25446[2] = null);
(statearr_25361_25446[1] = 35);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 3))
{var inst_25353 = (state_25355[2]);var state_25355__$1 = state_25355;return cljs.core.async.impl.ioc_helpers.return_chan(state_25355__$1,inst_25353);
} else
{if((state_val_25356 === 35))
{var inst_25337 = (state_25355[2]);var state_25355__$1 = state_25355;var statearr_25362_25447 = state_25355__$1;(statearr_25362_25447[2] = inst_25337);
(statearr_25362_25447[1] = 29);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 4))
{var inst_25223 = (state_25355[8]);var inst_25223__$1 = (state_25355[2]);var inst_25224 = (inst_25223__$1 == null);var state_25355__$1 = (function (){var statearr_25363 = state_25355;(statearr_25363[8] = inst_25223__$1);
return statearr_25363;
})();if(cljs.core.truth_(inst_25224))
{var statearr_25364_25448 = state_25355__$1;(statearr_25364_25448[1] = 5);
} else
{var statearr_25365_25449 = state_25355__$1;(statearr_25365_25449[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 36))
{var inst_25312 = (state_25355[9]);var inst_25316 = cljs.core.chunk_first(inst_25312);var inst_25317 = cljs.core.chunk_rest(inst_25312);var inst_25318 = cljs.core.count(inst_25316);var inst_25291 = inst_25317;var inst_25292 = inst_25316;var inst_25293 = inst_25318;var inst_25294 = 0;var state_25355__$1 = (function (){var statearr_25366 = state_25355;(statearr_25366[10] = inst_25294);
(statearr_25366[11] = inst_25293);
(statearr_25366[12] = inst_25291);
(statearr_25366[13] = inst_25292);
return statearr_25366;
})();var statearr_25367_25450 = state_25355__$1;(statearr_25367_25450[2] = null);
(statearr_25367_25450[1] = 25);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 5))
{var inst_25230 = cljs.core.deref(cs);var inst_25231 = cljs.core.seq(inst_25230);var inst_25232 = inst_25231;var inst_25233 = null;var inst_25234 = 0;var inst_25235 = 0;var state_25355__$1 = (function (){var statearr_25368 = state_25355;(statearr_25368[14] = inst_25233);
(statearr_25368[15] = inst_25234);
(statearr_25368[16] = inst_25232);
(statearr_25368[17] = inst_25235);
return statearr_25368;
})();var statearr_25369_25451 = state_25355__$1;(statearr_25369_25451[2] = null);
(statearr_25369_25451[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 37))
{var inst_25312 = (state_25355[9]);var inst_25321 = cljs.core.first(inst_25312);var state_25355__$1 = (function (){var statearr_25370 = state_25355;(statearr_25370[18] = inst_25321);
return statearr_25370;
})();var statearr_25371_25452 = state_25355__$1;(statearr_25371_25452[2] = null);
(statearr_25371_25452[1] = 41);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 6))
{var inst_25283 = (state_25355[19]);var inst_25282 = cljs.core.deref(cs);var inst_25283__$1 = cljs.core.keys(inst_25282);var inst_25284 = cljs.core.count(inst_25283__$1);var inst_25285 = cljs.core.reset_BANG_(dctr,inst_25284);var inst_25290 = cljs.core.seq(inst_25283__$1);var inst_25291 = inst_25290;var inst_25292 = null;var inst_25293 = 0;var inst_25294 = 0;var state_25355__$1 = (function (){var statearr_25372 = state_25355;(statearr_25372[10] = inst_25294);
(statearr_25372[11] = inst_25293);
(statearr_25372[12] = inst_25291);
(statearr_25372[13] = inst_25292);
(statearr_25372[19] = inst_25283__$1);
(statearr_25372[20] = inst_25285);
return statearr_25372;
})();var statearr_25373_25453 = state_25355__$1;(statearr_25373_25453[2] = null);
(statearr_25373_25453[1] = 25);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 38))
{var inst_25334 = (state_25355[2]);var state_25355__$1 = state_25355;var statearr_25374_25454 = state_25355__$1;(statearr_25374_25454[2] = inst_25334);
(statearr_25374_25454[1] = 35);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 7))
{var inst_25351 = (state_25355[2]);var state_25355__$1 = state_25355;var statearr_25375_25455 = state_25355__$1;(statearr_25375_25455[2] = inst_25351);
(statearr_25375_25455[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 39))
{var inst_25312 = (state_25355[9]);var inst_25330 = (state_25355[2]);var inst_25331 = cljs.core.next(inst_25312);var inst_25291 = inst_25331;var inst_25292 = null;var inst_25293 = 0;var inst_25294 = 0;var state_25355__$1 = (function (){var statearr_25376 = state_25355;(statearr_25376[21] = inst_25330);
(statearr_25376[10] = inst_25294);
(statearr_25376[11] = inst_25293);
(statearr_25376[12] = inst_25291);
(statearr_25376[13] = inst_25292);
return statearr_25376;
})();var statearr_25377_25456 = state_25355__$1;(statearr_25377_25456[2] = null);
(statearr_25377_25456[1] = 25);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 8))
{var inst_25234 = (state_25355[15]);var inst_25235 = (state_25355[17]);var inst_25237 = (inst_25235 < inst_25234);var inst_25238 = inst_25237;var state_25355__$1 = state_25355;if(cljs.core.truth_(inst_25238))
{var statearr_25378_25457 = state_25355__$1;(statearr_25378_25457[1] = 10);
} else
{var statearr_25379_25458 = state_25355__$1;(statearr_25379_25458[1] = 11);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 40))
{var inst_25321 = (state_25355[18]);var inst_25322 = (state_25355[2]);var inst_25323 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25324 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25321);var state_25355__$1 = (function (){var statearr_25380 = state_25355;(statearr_25380[22] = inst_25323);
(statearr_25380[23] = inst_25322);
return statearr_25380;
})();var statearr_25381_25459 = state_25355__$1;(statearr_25381_25459[2] = inst_25324);
cljs.core.async.impl.ioc_helpers.process_exception(state_25355__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 9))
{var inst_25280 = (state_25355[2]);var state_25355__$1 = state_25355;var statearr_25382_25460 = state_25355__$1;(statearr_25382_25460[2] = inst_25280);
(statearr_25382_25460[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 41))
{var inst_25223 = (state_25355[8]);var inst_25321 = (state_25355[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25355,40,Object,null,39);var inst_25328 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25321,inst_25223,done);var state_25355__$1 = state_25355;var statearr_25383_25461 = state_25355__$1;(statearr_25383_25461[2] = inst_25328);
cljs.core.async.impl.ioc_helpers.process_exception(state_25355__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 10))
{var inst_25233 = (state_25355[14]);var inst_25235 = (state_25355[17]);var inst_25241 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25233,inst_25235);var inst_25242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25241,0,null);var inst_25243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25241,1,null);var state_25355__$1 = (function (){var statearr_25384 = state_25355;(statearr_25384[24] = inst_25242);
return statearr_25384;
})();if(cljs.core.truth_(inst_25243))
{var statearr_25385_25462 = state_25355__$1;(statearr_25385_25462[1] = 13);
} else
{var statearr_25386_25463 = state_25355__$1;(statearr_25386_25463[1] = 14);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 42))
{var state_25355__$1 = state_25355;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25355__$1,45,dchan);
} else
{if((state_val_25356 === 11))
{var inst_25252 = (state_25355[25]);var inst_25232 = (state_25355[16]);var inst_25252__$1 = cljs.core.seq(inst_25232);var state_25355__$1 = (function (){var statearr_25387 = state_25355;(statearr_25387[25] = inst_25252__$1);
return statearr_25387;
})();if(inst_25252__$1)
{var statearr_25388_25464 = state_25355__$1;(statearr_25388_25464[1] = 16);
} else
{var statearr_25389_25465 = state_25355__$1;(statearr_25389_25465[1] = 17);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 43))
{var state_25355__$1 = state_25355;var statearr_25390_25466 = state_25355__$1;(statearr_25390_25466[2] = null);
(statearr_25390_25466[1] = 44);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 12))
{var inst_25278 = (state_25355[2]);var state_25355__$1 = state_25355;var statearr_25391_25467 = state_25355__$1;(statearr_25391_25467[2] = inst_25278);
(statearr_25391_25467[1] = 9);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 44))
{var inst_25348 = (state_25355[2]);var state_25355__$1 = (function (){var statearr_25392 = state_25355;(statearr_25392[26] = inst_25348);
return statearr_25392;
})();var statearr_25393_25468 = state_25355__$1;(statearr_25393_25468[2] = null);
(statearr_25393_25468[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 13))
{var inst_25242 = (state_25355[24]);var inst_25245 = cljs.core.async.close_BANG_(inst_25242);var state_25355__$1 = state_25355;var statearr_25394_25469 = state_25355__$1;(statearr_25394_25469[2] = inst_25245);
(statearr_25394_25469[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 45))
{var inst_25345 = (state_25355[2]);var state_25355__$1 = state_25355;var statearr_25398_25470 = state_25355__$1;(statearr_25398_25470[2] = inst_25345);
(statearr_25398_25470[1] = 44);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 14))
{var state_25355__$1 = state_25355;var statearr_25399_25471 = state_25355__$1;(statearr_25399_25471[2] = null);
(statearr_25399_25471[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 15))
{var inst_25233 = (state_25355[14]);var inst_25234 = (state_25355[15]);var inst_25232 = (state_25355[16]);var inst_25235 = (state_25355[17]);var inst_25248 = (state_25355[2]);var inst_25249 = (inst_25235 + 1);var tmp25395 = inst_25233;var tmp25396 = inst_25234;var tmp25397 = inst_25232;var inst_25232__$1 = tmp25397;var inst_25233__$1 = tmp25395;var inst_25234__$1 = tmp25396;var inst_25235__$1 = inst_25249;var state_25355__$1 = (function (){var statearr_25400 = state_25355;(statearr_25400[14] = inst_25233__$1);
(statearr_25400[15] = inst_25234__$1);
(statearr_25400[16] = inst_25232__$1);
(statearr_25400[27] = inst_25248);
(statearr_25400[17] = inst_25235__$1);
return statearr_25400;
})();var statearr_25401_25472 = state_25355__$1;(statearr_25401_25472[2] = null);
(statearr_25401_25472[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 16))
{var inst_25252 = (state_25355[25]);var inst_25254 = cljs.core.chunked_seq_QMARK_(inst_25252);var state_25355__$1 = state_25355;if(inst_25254)
{var statearr_25402_25473 = state_25355__$1;(statearr_25402_25473[1] = 19);
} else
{var statearr_25403_25474 = state_25355__$1;(statearr_25403_25474[1] = 20);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 17))
{var state_25355__$1 = state_25355;var statearr_25404_25475 = state_25355__$1;(statearr_25404_25475[2] = null);
(statearr_25404_25475[1] = 18);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 18))
{var inst_25276 = (state_25355[2]);var state_25355__$1 = state_25355;var statearr_25405_25476 = state_25355__$1;(statearr_25405_25476[2] = inst_25276);
(statearr_25405_25476[1] = 12);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 19))
{var inst_25252 = (state_25355[25]);var inst_25256 = cljs.core.chunk_first(inst_25252);var inst_25257 = cljs.core.chunk_rest(inst_25252);var inst_25258 = cljs.core.count(inst_25256);var inst_25232 = inst_25257;var inst_25233 = inst_25256;var inst_25234 = inst_25258;var inst_25235 = 0;var state_25355__$1 = (function (){var statearr_25406 = state_25355;(statearr_25406[14] = inst_25233);
(statearr_25406[15] = inst_25234);
(statearr_25406[16] = inst_25232);
(statearr_25406[17] = inst_25235);
return statearr_25406;
})();var statearr_25407_25477 = state_25355__$1;(statearr_25407_25477[2] = null);
(statearr_25407_25477[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 20))
{var inst_25252 = (state_25355[25]);var inst_25262 = cljs.core.first(inst_25252);var inst_25263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25262,0,null);var inst_25264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25262,1,null);var state_25355__$1 = (function (){var statearr_25408 = state_25355;(statearr_25408[28] = inst_25263);
return statearr_25408;
})();if(cljs.core.truth_(inst_25264))
{var statearr_25409_25478 = state_25355__$1;(statearr_25409_25478[1] = 22);
} else
{var statearr_25410_25479 = state_25355__$1;(statearr_25410_25479[1] = 23);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 21))
{var inst_25273 = (state_25355[2]);var state_25355__$1 = state_25355;var statearr_25411_25480 = state_25355__$1;(statearr_25411_25480[2] = inst_25273);
(statearr_25411_25480[1] = 18);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 22))
{var inst_25263 = (state_25355[28]);var inst_25266 = cljs.core.async.close_BANG_(inst_25263);var state_25355__$1 = state_25355;var statearr_25412_25481 = state_25355__$1;(statearr_25412_25481[2] = inst_25266);
(statearr_25412_25481[1] = 24);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 23))
{var state_25355__$1 = state_25355;var statearr_25413_25482 = state_25355__$1;(statearr_25413_25482[2] = null);
(statearr_25413_25482[1] = 24);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 24))
{var inst_25252 = (state_25355[25]);var inst_25269 = (state_25355[2]);var inst_25270 = cljs.core.next(inst_25252);var inst_25232 = inst_25270;var inst_25233 = null;var inst_25234 = 0;var inst_25235 = 0;var state_25355__$1 = (function (){var statearr_25414 = state_25355;(statearr_25414[29] = inst_25269);
(statearr_25414[14] = inst_25233);
(statearr_25414[15] = inst_25234);
(statearr_25414[16] = inst_25232);
(statearr_25414[17] = inst_25235);
return statearr_25414;
})();var statearr_25415_25483 = state_25355__$1;(statearr_25415_25483[2] = null);
(statearr_25415_25483[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 25))
{var inst_25294 = (state_25355[10]);var inst_25293 = (state_25355[11]);var inst_25296 = (inst_25294 < inst_25293);var inst_25297 = inst_25296;var state_25355__$1 = state_25355;if(cljs.core.truth_(inst_25297))
{var statearr_25416_25484 = state_25355__$1;(statearr_25416_25484[1] = 27);
} else
{var statearr_25417_25485 = state_25355__$1;(statearr_25417_25485[1] = 28);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 26))
{var inst_25283 = (state_25355[19]);var inst_25341 = (state_25355[2]);var inst_25342 = cljs.core.seq(inst_25283);var state_25355__$1 = (function (){var statearr_25418 = state_25355;(statearr_25418[30] = inst_25341);
return statearr_25418;
})();if(inst_25342)
{var statearr_25419_25486 = state_25355__$1;(statearr_25419_25486[1] = 42);
} else
{var statearr_25420_25487 = state_25355__$1;(statearr_25420_25487[1] = 43);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 27))
{var inst_25294 = (state_25355[10]);var inst_25292 = (state_25355[13]);var inst_25299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25292,inst_25294);var state_25355__$1 = (function (){var statearr_25421 = state_25355;(statearr_25421[7] = inst_25299);
return statearr_25421;
})();var statearr_25422_25488 = state_25355__$1;(statearr_25422_25488[2] = null);
(statearr_25422_25488[1] = 32);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 28))
{var inst_25291 = (state_25355[12]);var inst_25312 = (state_25355[9]);var inst_25312__$1 = cljs.core.seq(inst_25291);var state_25355__$1 = (function (){var statearr_25426 = state_25355;(statearr_25426[9] = inst_25312__$1);
return statearr_25426;
})();if(inst_25312__$1)
{var statearr_25427_25489 = state_25355__$1;(statearr_25427_25489[1] = 33);
} else
{var statearr_25428_25490 = state_25355__$1;(statearr_25428_25490[1] = 34);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 29))
{var inst_25339 = (state_25355[2]);var state_25355__$1 = state_25355;var statearr_25429_25491 = state_25355__$1;(statearr_25429_25491[2] = inst_25339);
(statearr_25429_25491[1] = 26);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 30))
{var inst_25294 = (state_25355[10]);var inst_25293 = (state_25355[11]);var inst_25291 = (state_25355[12]);var inst_25292 = (state_25355[13]);var inst_25308 = (state_25355[2]);var inst_25309 = (inst_25294 + 1);var tmp25423 = inst_25293;var tmp25424 = inst_25291;var tmp25425 = inst_25292;var inst_25291__$1 = tmp25424;var inst_25292__$1 = tmp25425;var inst_25293__$1 = tmp25423;var inst_25294__$1 = inst_25309;var state_25355__$1 = (function (){var statearr_25430 = state_25355;(statearr_25430[10] = inst_25294__$1);
(statearr_25430[11] = inst_25293__$1);
(statearr_25430[12] = inst_25291__$1);
(statearr_25430[13] = inst_25292__$1);
(statearr_25430[31] = inst_25308);
return statearr_25430;
})();var statearr_25431_25492 = state_25355__$1;(statearr_25431_25492[2] = null);
(statearr_25431_25492[1] = 25);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25356 === 31))
{var inst_25299 = (state_25355[7]);var inst_25300 = (state_25355[2]);var inst_25301 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25302 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25299);var state_25355__$1 = (function (){var statearr_25432 = state_25355;(statearr_25432[32] = inst_25301);
(statearr_25432[33] = inst_25300);
return statearr_25432;
})();var statearr_25433_25493 = state_25355__$1;(statearr_25433_25493[2] = inst_25302);
cljs.core.async.impl.ioc_helpers.process_exception(state_25355__$1);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_25437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25437[0] = state_machine__5507__auto__);
(statearr_25437[1] = 1);
return statearr_25437;
});
var state_machine__5507__auto____1 = (function (state_25355){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25355);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25438){if((e25438 instanceof Object))
{var ex__5510__auto__ = e25438;var statearr_25439_25494 = state_25355;(statearr_25439_25494[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25355);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e25438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__25495 = state_25355;
state_25355 = G__25495;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25355){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25440 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25441);
return statearr_25440;
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
cljs.core.async.Mix = (function (){var obj25497 = {};return obj25497;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$248,null,cljs.core.constant$keyword$249,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$250);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$249);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$250,chs);var pauses = pick(cljs.core.constant$keyword$248,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$251,solos,cljs.core.constant$keyword$252,pick(cljs.core.constant$keyword$249,chs),cljs.core.constant$keyword$253,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$248)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25607 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25607 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25608){
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
this.meta25608 = meta25608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25607.cljs$lang$type = true;
cljs.core.async.t25607.cljs$lang$ctorStr = "cljs.core.async/t25607";
cljs.core.async.t25607.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25607");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25607.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25607.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25607.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25607.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25607.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25607.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25607.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25607.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25609){var self__ = this;
var _25609__$1 = this;return self__.meta25608;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25609,meta25608__$1){var self__ = this;
var _25609__$1 = this;return (new cljs.core.async.t25607(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25608__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25607 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25607(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25608){return (new cljs.core.async.t25607(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25608));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25607(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25674){var state_val_25675 = (state_25674[1]);if((state_val_25675 === 1))
{var inst_25613 = (state_25674[7]);var inst_25613__$1 = calc_state();var inst_25614 = cljs.core.seq_QMARK_(inst_25613__$1);var state_25674__$1 = (function (){var statearr_25676 = state_25674;(statearr_25676[7] = inst_25613__$1);
return statearr_25676;
})();if(inst_25614)
{var statearr_25677_25717 = state_25674__$1;(statearr_25677_25717[1] = 2);
} else
{var statearr_25678_25718 = state_25674__$1;(statearr_25678_25718[1] = 3);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 2))
{var inst_25613 = (state_25674[7]);var inst_25616 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25613);var state_25674__$1 = state_25674;var statearr_25679_25719 = state_25674__$1;(statearr_25679_25719[2] = inst_25616);
(statearr_25679_25719[1] = 4);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 3))
{var inst_25613 = (state_25674[7]);var state_25674__$1 = state_25674;var statearr_25680_25720 = state_25674__$1;(statearr_25680_25720[2] = inst_25613);
(statearr_25680_25720[1] = 4);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 4))
{var inst_25613 = (state_25674[7]);var inst_25619 = (state_25674[2]);var inst_25620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25619,cljs.core.constant$keyword$253);var inst_25621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25619,cljs.core.constant$keyword$252);var inst_25622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25619,cljs.core.constant$keyword$251);var inst_25623 = inst_25613;var state_25674__$1 = (function (){var statearr_25681 = state_25674;(statearr_25681[8] = inst_25623);
(statearr_25681[9] = inst_25622);
(statearr_25681[10] = inst_25621);
(statearr_25681[11] = inst_25620);
return statearr_25681;
})();var statearr_25682_25721 = state_25674__$1;(statearr_25682_25721[2] = null);
(statearr_25682_25721[1] = 5);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 5))
{var inst_25623 = (state_25674[8]);var inst_25626 = cljs.core.seq_QMARK_(inst_25623);var state_25674__$1 = state_25674;if(inst_25626)
{var statearr_25683_25722 = state_25674__$1;(statearr_25683_25722[1] = 7);
} else
{var statearr_25684_25723 = state_25674__$1;(statearr_25684_25723[1] = 8);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 6))
{var inst_25672 = (state_25674[2]);var state_25674__$1 = state_25674;return cljs.core.async.impl.ioc_helpers.return_chan(state_25674__$1,inst_25672);
} else
{if((state_val_25675 === 7))
{var inst_25623 = (state_25674[8]);var inst_25628 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25623);var state_25674__$1 = state_25674;var statearr_25685_25724 = state_25674__$1;(statearr_25685_25724[2] = inst_25628);
(statearr_25685_25724[1] = 9);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 8))
{var inst_25623 = (state_25674[8]);var state_25674__$1 = state_25674;var statearr_25686_25725 = state_25674__$1;(statearr_25686_25725[2] = inst_25623);
(statearr_25686_25725[1] = 9);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 9))
{var inst_25631 = (state_25674[12]);var inst_25631__$1 = (state_25674[2]);var inst_25632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25631__$1,cljs.core.constant$keyword$253);var inst_25633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25631__$1,cljs.core.constant$keyword$252);var inst_25634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25631__$1,cljs.core.constant$keyword$251);var state_25674__$1 = (function (){var statearr_25687 = state_25674;(statearr_25687[13] = inst_25634);
(statearr_25687[14] = inst_25633);
(statearr_25687[12] = inst_25631__$1);
return statearr_25687;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25674__$1,10,inst_25632);
} else
{if((state_val_25675 === 10))
{var inst_25639 = (state_25674[15]);var inst_25638 = (state_25674[16]);var inst_25637 = (state_25674[2]);var inst_25638__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25637,0,null);var inst_25639__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25637,1,null);var inst_25640 = (inst_25638__$1 == null);var inst_25641 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25639__$1,change);var inst_25642 = (inst_25640) || (inst_25641);var state_25674__$1 = (function (){var statearr_25688 = state_25674;(statearr_25688[15] = inst_25639__$1);
(statearr_25688[16] = inst_25638__$1);
return statearr_25688;
})();if(cljs.core.truth_(inst_25642))
{var statearr_25689_25726 = state_25674__$1;(statearr_25689_25726[1] = 11);
} else
{var statearr_25690_25727 = state_25674__$1;(statearr_25690_25727[1] = 12);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 11))
{var inst_25638 = (state_25674[16]);var inst_25644 = (inst_25638 == null);var state_25674__$1 = state_25674;if(cljs.core.truth_(inst_25644))
{var statearr_25691_25728 = state_25674__$1;(statearr_25691_25728[1] = 14);
} else
{var statearr_25692_25729 = state_25674__$1;(statearr_25692_25729[1] = 15);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 12))
{var inst_25639 = (state_25674[15]);var inst_25653 = (state_25674[17]);var inst_25634 = (state_25674[13]);var inst_25653__$1 = (inst_25634.cljs$core$IFn$_invoke$arity$1 ? inst_25634.cljs$core$IFn$_invoke$arity$1(inst_25639) : inst_25634.call(null,inst_25639));var state_25674__$1 = (function (){var statearr_25693 = state_25674;(statearr_25693[17] = inst_25653__$1);
return statearr_25693;
})();if(cljs.core.truth_(inst_25653__$1))
{var statearr_25694_25730 = state_25674__$1;(statearr_25694_25730[1] = 17);
} else
{var statearr_25695_25731 = state_25674__$1;(statearr_25695_25731[1] = 18);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 13))
{var inst_25670 = (state_25674[2]);var state_25674__$1 = state_25674;var statearr_25696_25732 = state_25674__$1;(statearr_25696_25732[2] = inst_25670);
(statearr_25696_25732[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 14))
{var inst_25639 = (state_25674[15]);var inst_25646 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25639);var state_25674__$1 = state_25674;var statearr_25697_25733 = state_25674__$1;(statearr_25697_25733[2] = inst_25646);
(statearr_25697_25733[1] = 16);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 15))
{var state_25674__$1 = state_25674;var statearr_25698_25734 = state_25674__$1;(statearr_25698_25734[2] = null);
(statearr_25698_25734[1] = 16);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 16))
{var inst_25649 = (state_25674[2]);var inst_25650 = calc_state();var inst_25623 = inst_25650;var state_25674__$1 = (function (){var statearr_25699 = state_25674;(statearr_25699[8] = inst_25623);
(statearr_25699[18] = inst_25649);
return statearr_25699;
})();var statearr_25700_25735 = state_25674__$1;(statearr_25700_25735[2] = null);
(statearr_25700_25735[1] = 5);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 17))
{var inst_25653 = (state_25674[17]);var state_25674__$1 = state_25674;var statearr_25701_25736 = state_25674__$1;(statearr_25701_25736[2] = inst_25653);
(statearr_25701_25736[1] = 19);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 18))
{var inst_25639 = (state_25674[15]);var inst_25634 = (state_25674[13]);var inst_25633 = (state_25674[14]);var inst_25656 = cljs.core.empty_QMARK_(inst_25634);var inst_25657 = (inst_25633.cljs$core$IFn$_invoke$arity$1 ? inst_25633.cljs$core$IFn$_invoke$arity$1(inst_25639) : inst_25633.call(null,inst_25639));var inst_25658 = cljs.core.not(inst_25657);var inst_25659 = (inst_25656) && (inst_25658);var state_25674__$1 = state_25674;var statearr_25702_25737 = state_25674__$1;(statearr_25702_25737[2] = inst_25659);
(statearr_25702_25737[1] = 19);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 19))
{var inst_25661 = (state_25674[2]);var state_25674__$1 = state_25674;if(cljs.core.truth_(inst_25661))
{var statearr_25703_25738 = state_25674__$1;(statearr_25703_25738[1] = 20);
} else
{var statearr_25704_25739 = state_25674__$1;(statearr_25704_25739[1] = 21);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 20))
{var inst_25638 = (state_25674[16]);var state_25674__$1 = state_25674;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25674__$1,23,out,inst_25638);
} else
{if((state_val_25675 === 21))
{var state_25674__$1 = state_25674;var statearr_25705_25740 = state_25674__$1;(statearr_25705_25740[2] = null);
(statearr_25705_25740[1] = 22);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 22))
{var inst_25631 = (state_25674[12]);var inst_25667 = (state_25674[2]);var inst_25623 = inst_25631;var state_25674__$1 = (function (){var statearr_25706 = state_25674;(statearr_25706[19] = inst_25667);
(statearr_25706[8] = inst_25623);
return statearr_25706;
})();var statearr_25707_25741 = state_25674__$1;(statearr_25707_25741[2] = null);
(statearr_25707_25741[1] = 5);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25675 === 23))
{var inst_25664 = (state_25674[2]);var state_25674__$1 = state_25674;var statearr_25708_25742 = state_25674__$1;(statearr_25708_25742[2] = inst_25664);
(statearr_25708_25742[1] = 22);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_25712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25712[0] = state_machine__5507__auto__);
(statearr_25712[1] = 1);
return statearr_25712;
});
var state_machine__5507__auto____1 = (function (state_25674){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25674);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25713){if((e25713 instanceof Object))
{var ex__5510__auto__ = e25713;var statearr_25714_25743 = state_25674;(statearr_25714_25743[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25674);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e25713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__25744 = state_25674;
state_25674 = G__25744;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25674){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25715 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25716);
return statearr_25715;
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
cljs.core.async.Pub = (function (){var obj25746 = {};return obj25746;
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
return (function (p1__25747_SHARP_){if(cljs.core.truth_((p1__25747_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25747_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25747_SHARP_.call(null,topic))))
{return p1__25747_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25747_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25872 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25872 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25873){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25873 = meta25873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25872.cljs$lang$type = true;
cljs.core.async.t25872.cljs$lang$ctorStr = "cljs.core.async/t25872";
cljs.core.async.t25872.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25872");
});})(mults,ensure_mult))
;
cljs.core.async.t25872.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25872.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25872.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25872.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25874){var self__ = this;
var _25874__$1 = this;return self__.meta25873;
});})(mults,ensure_mult))
;
cljs.core.async.t25872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25874,meta25873__$1){var self__ = this;
var _25874__$1 = this;return (new cljs.core.async.t25872(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25873__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25872 = ((function (mults,ensure_mult){
return (function __GT_t25872(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25873){return (new cljs.core.async.t25872(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25873));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25872(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25948){var state_val_25949 = (state_25948[1]);if((state_val_25949 === 1))
{var state_25948__$1 = state_25948;var statearr_25950_25997 = state_25948__$1;(statearr_25950_25997[2] = null);
(statearr_25950_25997[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 2))
{var state_25948__$1 = state_25948;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25948__$1,4,ch);
} else
{if((state_val_25949 === 3))
{var inst_25946 = (state_25948[2]);var state_25948__$1 = state_25948;return cljs.core.async.impl.ioc_helpers.return_chan(state_25948__$1,inst_25946);
} else
{if((state_val_25949 === 4))
{var inst_25877 = (state_25948[7]);var inst_25877__$1 = (state_25948[2]);var inst_25878 = (inst_25877__$1 == null);var state_25948__$1 = (function (){var statearr_25951 = state_25948;(statearr_25951[7] = inst_25877__$1);
return statearr_25951;
})();if(cljs.core.truth_(inst_25878))
{var statearr_25952_25998 = state_25948__$1;(statearr_25952_25998[1] = 5);
} else
{var statearr_25953_25999 = state_25948__$1;(statearr_25953_25999[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 5))
{var inst_25884 = cljs.core.deref(mults);var inst_25885 = cljs.core.vals(inst_25884);var inst_25886 = cljs.core.seq(inst_25885);var inst_25887 = inst_25886;var inst_25888 = null;var inst_25889 = 0;var inst_25890 = 0;var state_25948__$1 = (function (){var statearr_25954 = state_25948;(statearr_25954[8] = inst_25890);
(statearr_25954[9] = inst_25888);
(statearr_25954[10] = inst_25889);
(statearr_25954[11] = inst_25887);
return statearr_25954;
})();var statearr_25955_26000 = state_25948__$1;(statearr_25955_26000[2] = null);
(statearr_25955_26000[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 6))
{var inst_25925 = (state_25948[12]);var inst_25927 = (state_25948[13]);var inst_25877 = (state_25948[7]);var inst_25925__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25877) : topic_fn.call(null,inst_25877));var inst_25926 = cljs.core.deref(mults);var inst_25927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25926,inst_25925__$1);var state_25948__$1 = (function (){var statearr_25956 = state_25948;(statearr_25956[12] = inst_25925__$1);
(statearr_25956[13] = inst_25927__$1);
return statearr_25956;
})();if(cljs.core.truth_(inst_25927__$1))
{var statearr_25957_26001 = state_25948__$1;(statearr_25957_26001[1] = 19);
} else
{var statearr_25958_26002 = state_25948__$1;(statearr_25958_26002[1] = 20);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 7))
{var inst_25944 = (state_25948[2]);var state_25948__$1 = state_25948;var statearr_25959_26003 = state_25948__$1;(statearr_25959_26003[2] = inst_25944);
(statearr_25959_26003[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 8))
{var inst_25890 = (state_25948[8]);var inst_25889 = (state_25948[10]);var inst_25892 = (inst_25890 < inst_25889);var inst_25893 = inst_25892;var state_25948__$1 = state_25948;if(cljs.core.truth_(inst_25893))
{var statearr_25963_26004 = state_25948__$1;(statearr_25963_26004[1] = 10);
} else
{var statearr_25964_26005 = state_25948__$1;(statearr_25964_26005[1] = 11);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 9))
{var inst_25923 = (state_25948[2]);var state_25948__$1 = state_25948;var statearr_25965_26006 = state_25948__$1;(statearr_25965_26006[2] = inst_25923);
(statearr_25965_26006[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 10))
{var inst_25890 = (state_25948[8]);var inst_25888 = (state_25948[9]);var inst_25889 = (state_25948[10]);var inst_25887 = (state_25948[11]);var inst_25895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25888,inst_25890);var inst_25896 = cljs.core.async.muxch_STAR_(inst_25895);var inst_25897 = cljs.core.async.close_BANG_(inst_25896);var inst_25898 = (inst_25890 + 1);var tmp25960 = inst_25888;var tmp25961 = inst_25889;var tmp25962 = inst_25887;var inst_25887__$1 = tmp25962;var inst_25888__$1 = tmp25960;var inst_25889__$1 = tmp25961;var inst_25890__$1 = inst_25898;var state_25948__$1 = (function (){var statearr_25966 = state_25948;(statearr_25966[8] = inst_25890__$1);
(statearr_25966[9] = inst_25888__$1);
(statearr_25966[14] = inst_25897);
(statearr_25966[10] = inst_25889__$1);
(statearr_25966[11] = inst_25887__$1);
return statearr_25966;
})();var statearr_25967_26007 = state_25948__$1;(statearr_25967_26007[2] = null);
(statearr_25967_26007[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 11))
{var inst_25887 = (state_25948[11]);var inst_25901 = (state_25948[15]);var inst_25901__$1 = cljs.core.seq(inst_25887);var state_25948__$1 = (function (){var statearr_25968 = state_25948;(statearr_25968[15] = inst_25901__$1);
return statearr_25968;
})();if(inst_25901__$1)
{var statearr_25969_26008 = state_25948__$1;(statearr_25969_26008[1] = 13);
} else
{var statearr_25970_26009 = state_25948__$1;(statearr_25970_26009[1] = 14);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 12))
{var inst_25921 = (state_25948[2]);var state_25948__$1 = state_25948;var statearr_25971_26010 = state_25948__$1;(statearr_25971_26010[2] = inst_25921);
(statearr_25971_26010[1] = 9);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 13))
{var inst_25901 = (state_25948[15]);var inst_25903 = cljs.core.chunked_seq_QMARK_(inst_25901);var state_25948__$1 = state_25948;if(inst_25903)
{var statearr_25972_26011 = state_25948__$1;(statearr_25972_26011[1] = 16);
} else
{var statearr_25973_26012 = state_25948__$1;(statearr_25973_26012[1] = 17);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 14))
{var state_25948__$1 = state_25948;var statearr_25974_26013 = state_25948__$1;(statearr_25974_26013[2] = null);
(statearr_25974_26013[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 15))
{var inst_25919 = (state_25948[2]);var state_25948__$1 = state_25948;var statearr_25975_26014 = state_25948__$1;(statearr_25975_26014[2] = inst_25919);
(statearr_25975_26014[1] = 12);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 16))
{var inst_25901 = (state_25948[15]);var inst_25905 = cljs.core.chunk_first(inst_25901);var inst_25906 = cljs.core.chunk_rest(inst_25901);var inst_25907 = cljs.core.count(inst_25905);var inst_25887 = inst_25906;var inst_25888 = inst_25905;var inst_25889 = inst_25907;var inst_25890 = 0;var state_25948__$1 = (function (){var statearr_25976 = state_25948;(statearr_25976[8] = inst_25890);
(statearr_25976[9] = inst_25888);
(statearr_25976[10] = inst_25889);
(statearr_25976[11] = inst_25887);
return statearr_25976;
})();var statearr_25977_26015 = state_25948__$1;(statearr_25977_26015[2] = null);
(statearr_25977_26015[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 17))
{var inst_25901 = (state_25948[15]);var inst_25910 = cljs.core.first(inst_25901);var inst_25911 = cljs.core.async.muxch_STAR_(inst_25910);var inst_25912 = cljs.core.async.close_BANG_(inst_25911);var inst_25913 = cljs.core.next(inst_25901);var inst_25887 = inst_25913;var inst_25888 = null;var inst_25889 = 0;var inst_25890 = 0;var state_25948__$1 = (function (){var statearr_25978 = state_25948;(statearr_25978[8] = inst_25890);
(statearr_25978[9] = inst_25888);
(statearr_25978[10] = inst_25889);
(statearr_25978[11] = inst_25887);
(statearr_25978[16] = inst_25912);
return statearr_25978;
})();var statearr_25979_26016 = state_25948__$1;(statearr_25979_26016[2] = null);
(statearr_25979_26016[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 18))
{var inst_25916 = (state_25948[2]);var state_25948__$1 = state_25948;var statearr_25980_26017 = state_25948__$1;(statearr_25980_26017[2] = inst_25916);
(statearr_25980_26017[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 19))
{var state_25948__$1 = state_25948;var statearr_25981_26018 = state_25948__$1;(statearr_25981_26018[2] = null);
(statearr_25981_26018[1] = 24);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 20))
{var state_25948__$1 = state_25948;var statearr_25982_26019 = state_25948__$1;(statearr_25982_26019[2] = null);
(statearr_25982_26019[1] = 21);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 21))
{var inst_25941 = (state_25948[2]);var state_25948__$1 = (function (){var statearr_25983 = state_25948;(statearr_25983[17] = inst_25941);
return statearr_25983;
})();var statearr_25984_26020 = state_25948__$1;(statearr_25984_26020[2] = null);
(statearr_25984_26020[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 22))
{var inst_25938 = (state_25948[2]);var state_25948__$1 = state_25948;var statearr_25985_26021 = state_25948__$1;(statearr_25985_26021[2] = inst_25938);
(statearr_25985_26021[1] = 21);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 23))
{var inst_25925 = (state_25948[12]);var inst_25929 = (state_25948[2]);var inst_25930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25925);var state_25948__$1 = (function (){var statearr_25986 = state_25948;(statearr_25986[18] = inst_25929);
return statearr_25986;
})();var statearr_25987_26022 = state_25948__$1;(statearr_25987_26022[2] = inst_25930);
cljs.core.async.impl.ioc_helpers.process_exception(state_25948__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_25949 === 24))
{var inst_25927 = (state_25948[13]);var inst_25877 = (state_25948[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25948,23,Object,null,22);var inst_25934 = cljs.core.async.muxch_STAR_(inst_25927);var state_25948__$1 = state_25948;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25948__$1,25,inst_25934,inst_25877);
} else
{if((state_val_25949 === 25))
{var inst_25936 = (state_25948[2]);var state_25948__$1 = state_25948;var statearr_25988_26023 = state_25948__$1;(statearr_25988_26023[2] = inst_25936);
cljs.core.async.impl.ioc_helpers.process_exception(state_25948__$1);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_25992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25992[0] = state_machine__5507__auto__);
(statearr_25992[1] = 1);
return statearr_25992;
});
var state_machine__5507__auto____1 = (function (state_25948){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25948);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25993){if((e25993 instanceof Object))
{var ex__5510__auto__ = e25993;var statearr_25994_26024 = state_25948;(statearr_25994_26024[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25948);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e25993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26025 = state_25948;
state_25948 = G__26025;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25948){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25995 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25996);
return statearr_25995;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___26162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26132){var state_val_26133 = (state_26132[1]);if((state_val_26133 === 1))
{var state_26132__$1 = state_26132;var statearr_26134_26163 = state_26132__$1;(statearr_26134_26163[2] = null);
(statearr_26134_26163[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 2))
{var inst_26095 = cljs.core.reset_BANG_(dctr,cnt);var inst_26096 = 0;var state_26132__$1 = (function (){var statearr_26135 = state_26132;(statearr_26135[7] = inst_26095);
(statearr_26135[8] = inst_26096);
return statearr_26135;
})();var statearr_26136_26164 = state_26132__$1;(statearr_26136_26164[2] = null);
(statearr_26136_26164[1] = 4);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 3))
{var inst_26130 = (state_26132[2]);var state_26132__$1 = state_26132;return cljs.core.async.impl.ioc_helpers.return_chan(state_26132__$1,inst_26130);
} else
{if((state_val_26133 === 4))
{var inst_26096 = (state_26132[8]);var inst_26098 = (inst_26096 < cnt);var state_26132__$1 = state_26132;if(cljs.core.truth_(inst_26098))
{var statearr_26137_26165 = state_26132__$1;(statearr_26137_26165[1] = 6);
} else
{var statearr_26138_26166 = state_26132__$1;(statearr_26138_26166[1] = 7);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 5))
{var inst_26116 = (state_26132[2]);var state_26132__$1 = (function (){var statearr_26139 = state_26132;(statearr_26139[9] = inst_26116);
return statearr_26139;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26132__$1,12,dchan);
} else
{if((state_val_26133 === 6))
{var state_26132__$1 = state_26132;var statearr_26140_26167 = state_26132__$1;(statearr_26140_26167[2] = null);
(statearr_26140_26167[1] = 11);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 7))
{var state_26132__$1 = state_26132;var statearr_26141_26168 = state_26132__$1;(statearr_26141_26168[2] = null);
(statearr_26141_26168[1] = 8);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 8))
{var inst_26114 = (state_26132[2]);var state_26132__$1 = state_26132;var statearr_26142_26169 = state_26132__$1;(statearr_26142_26169[2] = inst_26114);
(statearr_26142_26169[1] = 5);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 9))
{var inst_26096 = (state_26132[8]);var inst_26109 = (state_26132[2]);var inst_26110 = (inst_26096 + 1);var inst_26096__$1 = inst_26110;var state_26132__$1 = (function (){var statearr_26143 = state_26132;(statearr_26143[10] = inst_26109);
(statearr_26143[8] = inst_26096__$1);
return statearr_26143;
})();var statearr_26144_26170 = state_26132__$1;(statearr_26144_26170[2] = null);
(statearr_26144_26170[1] = 4);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 10))
{var inst_26100 = (state_26132[2]);var inst_26101 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26132__$1 = (function (){var statearr_26145 = state_26132;(statearr_26145[11] = inst_26100);
return statearr_26145;
})();var statearr_26146_26171 = state_26132__$1;(statearr_26146_26171[2] = inst_26101);
cljs.core.async.impl.ioc_helpers.process_exception(state_26132__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 11))
{var inst_26096 = (state_26132[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26132,10,Object,null,9);var inst_26105 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26096) : chs__$1.call(null,inst_26096));var inst_26106 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26096) : done.call(null,inst_26096));var inst_26107 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26105,inst_26106);var state_26132__$1 = state_26132;var statearr_26147_26172 = state_26132__$1;(statearr_26147_26172[2] = inst_26107);
cljs.core.async.impl.ioc_helpers.process_exception(state_26132__$1);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 12))
{var inst_26118 = (state_26132[12]);var inst_26118__$1 = (state_26132[2]);var inst_26119 = cljs.core.some(cljs.core.nil_QMARK_,inst_26118__$1);var state_26132__$1 = (function (){var statearr_26148 = state_26132;(statearr_26148[12] = inst_26118__$1);
return statearr_26148;
})();if(cljs.core.truth_(inst_26119))
{var statearr_26149_26173 = state_26132__$1;(statearr_26149_26173[1] = 13);
} else
{var statearr_26150_26174 = state_26132__$1;(statearr_26150_26174[1] = 14);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 13))
{var inst_26121 = cljs.core.async.close_BANG_(out);var state_26132__$1 = state_26132;var statearr_26151_26175 = state_26132__$1;(statearr_26151_26175[2] = inst_26121);
(statearr_26151_26175[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 14))
{var inst_26118 = (state_26132[12]);var inst_26123 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26118);var state_26132__$1 = state_26132;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26132__$1,16,out,inst_26123);
} else
{if((state_val_26133 === 15))
{var inst_26128 = (state_26132[2]);var state_26132__$1 = state_26132;var statearr_26152_26176 = state_26132__$1;(statearr_26152_26176[2] = inst_26128);
(statearr_26152_26176[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26133 === 16))
{var inst_26125 = (state_26132[2]);var state_26132__$1 = (function (){var statearr_26153 = state_26132;(statearr_26153[13] = inst_26125);
return statearr_26153;
})();var statearr_26154_26177 = state_26132__$1;(statearr_26154_26177[2] = null);
(statearr_26154_26177[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26158[0] = state_machine__5507__auto__);
(statearr_26158[1] = 1);
return statearr_26158;
});
var state_machine__5507__auto____1 = (function (state_26132){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26132);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26159){if((e26159 instanceof Object))
{var ex__5510__auto__ = e26159;var statearr_26160_26178 = state_26132;(statearr_26160_26178[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26132);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26179 = state_26132;
state_26132 = G__26179;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26132){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26161 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26162);
return statearr_26161;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26263){var state_val_26264 = (state_26263[1]);if((state_val_26264 === 1))
{var inst_26234 = cljs.core.vec(chs);var inst_26235 = inst_26234;var state_26263__$1 = (function (){var statearr_26265 = state_26263;(statearr_26265[7] = inst_26235);
return statearr_26265;
})();var statearr_26266_26288 = state_26263__$1;(statearr_26266_26288[2] = null);
(statearr_26266_26288[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26264 === 2))
{var inst_26235 = (state_26263[7]);var inst_26237 = cljs.core.count(inst_26235);var inst_26238 = (inst_26237 > 0);var state_26263__$1 = state_26263;if(cljs.core.truth_(inst_26238))
{var statearr_26267_26289 = state_26263__$1;(statearr_26267_26289[1] = 4);
} else
{var statearr_26268_26290 = state_26263__$1;(statearr_26268_26290[1] = 5);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26264 === 3))
{var inst_26261 = (state_26263[2]);var state_26263__$1 = state_26263;return cljs.core.async.impl.ioc_helpers.return_chan(state_26263__$1,inst_26261);
} else
{if((state_val_26264 === 4))
{var inst_26235 = (state_26263[7]);var state_26263__$1 = state_26263;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26263__$1,7,inst_26235);
} else
{if((state_val_26264 === 5))
{var inst_26257 = cljs.core.async.close_BANG_(out);var state_26263__$1 = state_26263;var statearr_26269_26291 = state_26263__$1;(statearr_26269_26291[2] = inst_26257);
(statearr_26269_26291[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26264 === 6))
{var inst_26259 = (state_26263[2]);var state_26263__$1 = state_26263;var statearr_26270_26292 = state_26263__$1;(statearr_26270_26292[2] = inst_26259);
(statearr_26270_26292[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26264 === 7))
{var inst_26243 = (state_26263[8]);var inst_26242 = (state_26263[9]);var inst_26242__$1 = (state_26263[2]);var inst_26243__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26242__$1,0,null);var inst_26244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26242__$1,1,null);var inst_26245 = (inst_26243__$1 == null);var state_26263__$1 = (function (){var statearr_26271 = state_26263;(statearr_26271[8] = inst_26243__$1);
(statearr_26271[10] = inst_26244);
(statearr_26271[9] = inst_26242__$1);
return statearr_26271;
})();if(cljs.core.truth_(inst_26245))
{var statearr_26272_26293 = state_26263__$1;(statearr_26272_26293[1] = 8);
} else
{var statearr_26273_26294 = state_26263__$1;(statearr_26273_26294[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26264 === 8))
{var inst_26235 = (state_26263[7]);var inst_26243 = (state_26263[8]);var inst_26244 = (state_26263[10]);var inst_26242 = (state_26263[9]);var inst_26247 = (function (){var c = inst_26244;var v = inst_26243;var vec__26240 = inst_26242;var cs = inst_26235;return ((function (c,v,vec__26240,cs,inst_26235,inst_26243,inst_26244,inst_26242,state_val_26264){
return (function (p1__26180_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26180_SHARP_);
});
;})(c,v,vec__26240,cs,inst_26235,inst_26243,inst_26244,inst_26242,state_val_26264))
})();var inst_26248 = cljs.core.filterv(inst_26247,inst_26235);var inst_26235__$1 = inst_26248;var state_26263__$1 = (function (){var statearr_26274 = state_26263;(statearr_26274[7] = inst_26235__$1);
return statearr_26274;
})();var statearr_26275_26295 = state_26263__$1;(statearr_26275_26295[2] = null);
(statearr_26275_26295[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26264 === 9))
{var inst_26243 = (state_26263[8]);var state_26263__$1 = state_26263;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26263__$1,11,out,inst_26243);
} else
{if((state_val_26264 === 10))
{var inst_26255 = (state_26263[2]);var state_26263__$1 = state_26263;var statearr_26277_26296 = state_26263__$1;(statearr_26277_26296[2] = inst_26255);
(statearr_26277_26296[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26264 === 11))
{var inst_26235 = (state_26263[7]);var inst_26252 = (state_26263[2]);var tmp26276 = inst_26235;var inst_26235__$1 = tmp26276;var state_26263__$1 = (function (){var statearr_26278 = state_26263;(statearr_26278[7] = inst_26235__$1);
(statearr_26278[11] = inst_26252);
return statearr_26278;
})();var statearr_26279_26297 = state_26263__$1;(statearr_26279_26297[2] = null);
(statearr_26279_26297[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26283 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26283[0] = state_machine__5507__auto__);
(statearr_26283[1] = 1);
return statearr_26283;
});
var state_machine__5507__auto____1 = (function (state_26263){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26263);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26284){if((e26284 instanceof Object))
{var ex__5510__auto__ = e26284;var statearr_26285_26298 = state_26263;(statearr_26285_26298[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26263);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26299 = state_26263;
state_26263 = G__26299;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26263){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26286 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26287);
return statearr_26286;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26369){var state_val_26370 = (state_26369[1]);if((state_val_26370 === 1))
{var inst_26346 = 0;var state_26369__$1 = (function (){var statearr_26371 = state_26369;(statearr_26371[7] = inst_26346);
return statearr_26371;
})();var statearr_26372_26393 = state_26369__$1;(statearr_26372_26393[2] = null);
(statearr_26372_26393[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26370 === 2))
{var inst_26346 = (state_26369[7]);var inst_26348 = (inst_26346 < n);var state_26369__$1 = state_26369;if(cljs.core.truth_(inst_26348))
{var statearr_26373_26394 = state_26369__$1;(statearr_26373_26394[1] = 4);
} else
{var statearr_26374_26395 = state_26369__$1;(statearr_26374_26395[1] = 5);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26370 === 3))
{var inst_26366 = (state_26369[2]);var inst_26367 = cljs.core.async.close_BANG_(out);var state_26369__$1 = (function (){var statearr_26375 = state_26369;(statearr_26375[8] = inst_26366);
return statearr_26375;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26369__$1,inst_26367);
} else
{if((state_val_26370 === 4))
{var state_26369__$1 = state_26369;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26369__$1,7,ch);
} else
{if((state_val_26370 === 5))
{var state_26369__$1 = state_26369;var statearr_26376_26396 = state_26369__$1;(statearr_26376_26396[2] = null);
(statearr_26376_26396[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26370 === 6))
{var inst_26364 = (state_26369[2]);var state_26369__$1 = state_26369;var statearr_26377_26397 = state_26369__$1;(statearr_26377_26397[2] = inst_26364);
(statearr_26377_26397[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26370 === 7))
{var inst_26351 = (state_26369[9]);var inst_26351__$1 = (state_26369[2]);var inst_26352 = (inst_26351__$1 == null);var inst_26353 = cljs.core.not(inst_26352);var state_26369__$1 = (function (){var statearr_26378 = state_26369;(statearr_26378[9] = inst_26351__$1);
return statearr_26378;
})();if(inst_26353)
{var statearr_26379_26398 = state_26369__$1;(statearr_26379_26398[1] = 8);
} else
{var statearr_26380_26399 = state_26369__$1;(statearr_26380_26399[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26370 === 8))
{var inst_26351 = (state_26369[9]);var state_26369__$1 = state_26369;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26369__$1,11,out,inst_26351);
} else
{if((state_val_26370 === 9))
{var state_26369__$1 = state_26369;var statearr_26381_26400 = state_26369__$1;(statearr_26381_26400[2] = null);
(statearr_26381_26400[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26370 === 10))
{var inst_26361 = (state_26369[2]);var state_26369__$1 = state_26369;var statearr_26382_26401 = state_26369__$1;(statearr_26382_26401[2] = inst_26361);
(statearr_26382_26401[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26370 === 11))
{var inst_26346 = (state_26369[7]);var inst_26356 = (state_26369[2]);var inst_26357 = (inst_26346 + 1);var inst_26346__$1 = inst_26357;var state_26369__$1 = (function (){var statearr_26383 = state_26369;(statearr_26383[10] = inst_26356);
(statearr_26383[7] = inst_26346__$1);
return statearr_26383;
})();var statearr_26384_26402 = state_26369__$1;(statearr_26384_26402[2] = null);
(statearr_26384_26402[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26388 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26388[0] = state_machine__5507__auto__);
(statearr_26388[1] = 1);
return statearr_26388;
});
var state_machine__5507__auto____1 = (function (state_26369){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26369);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26389){if((e26389 instanceof Object))
{var ex__5510__auto__ = e26389;var statearr_26390_26403 = state_26369;(statearr_26390_26403[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26369);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26404 = state_26369;
state_26369 = G__26404;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26369){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26391 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26392);
return statearr_26391;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26476){var state_val_26477 = (state_26476[1]);if((state_val_26477 === 1))
{var inst_26453 = null;var state_26476__$1 = (function (){var statearr_26478 = state_26476;(statearr_26478[7] = inst_26453);
return statearr_26478;
})();var statearr_26479_26502 = state_26476__$1;(statearr_26479_26502[2] = null);
(statearr_26479_26502[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26477 === 2))
{var state_26476__$1 = state_26476;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26476__$1,4,ch);
} else
{if((state_val_26477 === 3))
{var inst_26473 = (state_26476[2]);var inst_26474 = cljs.core.async.close_BANG_(out);var state_26476__$1 = (function (){var statearr_26480 = state_26476;(statearr_26480[8] = inst_26473);
return statearr_26480;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26476__$1,inst_26474);
} else
{if((state_val_26477 === 4))
{var inst_26456 = (state_26476[9]);var inst_26456__$1 = (state_26476[2]);var inst_26457 = (inst_26456__$1 == null);var inst_26458 = cljs.core.not(inst_26457);var state_26476__$1 = (function (){var statearr_26481 = state_26476;(statearr_26481[9] = inst_26456__$1);
return statearr_26481;
})();if(inst_26458)
{var statearr_26482_26503 = state_26476__$1;(statearr_26482_26503[1] = 5);
} else
{var statearr_26483_26504 = state_26476__$1;(statearr_26483_26504[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26477 === 5))
{var inst_26456 = (state_26476[9]);var inst_26453 = (state_26476[7]);var inst_26460 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26456,inst_26453);var state_26476__$1 = state_26476;if(inst_26460)
{var statearr_26484_26505 = state_26476__$1;(statearr_26484_26505[1] = 8);
} else
{var statearr_26485_26506 = state_26476__$1;(statearr_26485_26506[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26477 === 6))
{var state_26476__$1 = state_26476;var statearr_26487_26507 = state_26476__$1;(statearr_26487_26507[2] = null);
(statearr_26487_26507[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26477 === 7))
{var inst_26471 = (state_26476[2]);var state_26476__$1 = state_26476;var statearr_26488_26508 = state_26476__$1;(statearr_26488_26508[2] = inst_26471);
(statearr_26488_26508[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26477 === 8))
{var inst_26453 = (state_26476[7]);var tmp26486 = inst_26453;var inst_26453__$1 = tmp26486;var state_26476__$1 = (function (){var statearr_26489 = state_26476;(statearr_26489[7] = inst_26453__$1);
return statearr_26489;
})();var statearr_26490_26509 = state_26476__$1;(statearr_26490_26509[2] = null);
(statearr_26490_26509[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26477 === 9))
{var inst_26456 = (state_26476[9]);var state_26476__$1 = state_26476;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26476__$1,11,out,inst_26456);
} else
{if((state_val_26477 === 10))
{var inst_26468 = (state_26476[2]);var state_26476__$1 = state_26476;var statearr_26491_26510 = state_26476__$1;(statearr_26491_26510[2] = inst_26468);
(statearr_26491_26510[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26477 === 11))
{var inst_26456 = (state_26476[9]);var inst_26465 = (state_26476[2]);var inst_26453 = inst_26456;var state_26476__$1 = (function (){var statearr_26492 = state_26476;(statearr_26492[10] = inst_26465);
(statearr_26492[7] = inst_26453);
return statearr_26492;
})();var statearr_26493_26511 = state_26476__$1;(statearr_26493_26511[2] = null);
(statearr_26493_26511[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26497 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26497[0] = state_machine__5507__auto__);
(statearr_26497[1] = 1);
return statearr_26497;
});
var state_machine__5507__auto____1 = (function (state_26476){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26476);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26498){if((e26498 instanceof Object))
{var ex__5510__auto__ = e26498;var statearr_26499_26512 = state_26476;(statearr_26499_26512[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26476);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26513 = state_26476;
state_26476 = G__26513;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26476){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26500 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26501);
return statearr_26500;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26618){var state_val_26619 = (state_26618[1]);if((state_val_26619 === 1))
{var inst_26581 = (new Array(n));var inst_26582 = inst_26581;var inst_26583 = 0;var state_26618__$1 = (function (){var statearr_26620 = state_26618;(statearr_26620[7] = inst_26583);
(statearr_26620[8] = inst_26582);
return statearr_26620;
})();var statearr_26621_26649 = state_26618__$1;(statearr_26621_26649[2] = null);
(statearr_26621_26649[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26619 === 2))
{var state_26618__$1 = state_26618;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26618__$1,4,ch);
} else
{if((state_val_26619 === 3))
{var inst_26616 = (state_26618[2]);var state_26618__$1 = state_26618;return cljs.core.async.impl.ioc_helpers.return_chan(state_26618__$1,inst_26616);
} else
{if((state_val_26619 === 4))
{var inst_26586 = (state_26618[9]);var inst_26586__$1 = (state_26618[2]);var inst_26587 = (inst_26586__$1 == null);var inst_26588 = cljs.core.not(inst_26587);var state_26618__$1 = (function (){var statearr_26622 = state_26618;(statearr_26622[9] = inst_26586__$1);
return statearr_26622;
})();if(inst_26588)
{var statearr_26623_26650 = state_26618__$1;(statearr_26623_26650[1] = 5);
} else
{var statearr_26624_26651 = state_26618__$1;(statearr_26624_26651[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26619 === 5))
{var inst_26586 = (state_26618[9]);var inst_26583 = (state_26618[7]);var inst_26582 = (state_26618[8]);var inst_26591 = (state_26618[10]);var inst_26590 = (inst_26582[inst_26583] = inst_26586);var inst_26591__$1 = (inst_26583 + 1);var inst_26592 = (inst_26591__$1 < n);var state_26618__$1 = (function (){var statearr_26625 = state_26618;(statearr_26625[10] = inst_26591__$1);
(statearr_26625[11] = inst_26590);
return statearr_26625;
})();if(cljs.core.truth_(inst_26592))
{var statearr_26626_26652 = state_26618__$1;(statearr_26626_26652[1] = 8);
} else
{var statearr_26627_26653 = state_26618__$1;(statearr_26627_26653[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26619 === 6))
{var inst_26583 = (state_26618[7]);var inst_26604 = (inst_26583 > 0);var state_26618__$1 = state_26618;if(cljs.core.truth_(inst_26604))
{var statearr_26629_26654 = state_26618__$1;(statearr_26629_26654[1] = 12);
} else
{var statearr_26630_26655 = state_26618__$1;(statearr_26630_26655[1] = 13);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26619 === 7))
{var inst_26614 = (state_26618[2]);var state_26618__$1 = state_26618;var statearr_26631_26656 = state_26618__$1;(statearr_26631_26656[2] = inst_26614);
(statearr_26631_26656[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26619 === 8))
{var inst_26582 = (state_26618[8]);var inst_26591 = (state_26618[10]);var tmp26628 = inst_26582;var inst_26582__$1 = tmp26628;var inst_26583 = inst_26591;var state_26618__$1 = (function (){var statearr_26632 = state_26618;(statearr_26632[7] = inst_26583);
(statearr_26632[8] = inst_26582__$1);
return statearr_26632;
})();var statearr_26633_26657 = state_26618__$1;(statearr_26633_26657[2] = null);
(statearr_26633_26657[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26619 === 9))
{var inst_26582 = (state_26618[8]);var inst_26596 = cljs.core.vec(inst_26582);var state_26618__$1 = state_26618;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26618__$1,11,out,inst_26596);
} else
{if((state_val_26619 === 10))
{var inst_26602 = (state_26618[2]);var state_26618__$1 = state_26618;var statearr_26634_26658 = state_26618__$1;(statearr_26634_26658[2] = inst_26602);
(statearr_26634_26658[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26619 === 11))
{var inst_26598 = (state_26618[2]);var inst_26599 = (new Array(n));var inst_26582 = inst_26599;var inst_26583 = 0;var state_26618__$1 = (function (){var statearr_26635 = state_26618;(statearr_26635[7] = inst_26583);
(statearr_26635[8] = inst_26582);
(statearr_26635[12] = inst_26598);
return statearr_26635;
})();var statearr_26636_26659 = state_26618__$1;(statearr_26636_26659[2] = null);
(statearr_26636_26659[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26619 === 12))
{var inst_26582 = (state_26618[8]);var inst_26606 = cljs.core.vec(inst_26582);var state_26618__$1 = state_26618;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26618__$1,15,out,inst_26606);
} else
{if((state_val_26619 === 13))
{var state_26618__$1 = state_26618;var statearr_26637_26660 = state_26618__$1;(statearr_26637_26660[2] = null);
(statearr_26637_26660[1] = 14);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26619 === 14))
{var inst_26611 = (state_26618[2]);var inst_26612 = cljs.core.async.close_BANG_(out);var state_26618__$1 = (function (){var statearr_26638 = state_26618;(statearr_26638[13] = inst_26611);
return statearr_26638;
})();var statearr_26639_26661 = state_26618__$1;(statearr_26639_26661[2] = inst_26612);
(statearr_26639_26661[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26619 === 15))
{var inst_26608 = (state_26618[2]);var state_26618__$1 = state_26618;var statearr_26640_26662 = state_26618__$1;(statearr_26640_26662[2] = inst_26608);
(statearr_26640_26662[1] = 14);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26644[0] = state_machine__5507__auto__);
(statearr_26644[1] = 1);
return statearr_26644;
});
var state_machine__5507__auto____1 = (function (state_26618){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26618);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26645){if((e26645 instanceof Object))
{var ex__5510__auto__ = e26645;var statearr_26646_26663 = state_26618;(statearr_26646_26663[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26618);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26664 = state_26618;
state_26618 = G__26664;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26618){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26647 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26648);
return statearr_26647;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26777){var state_val_26778 = (state_26777[1]);if((state_val_26778 === 1))
{var inst_26736 = [];var inst_26737 = inst_26736;var inst_26738 = cljs.core.constant$keyword$254;var state_26777__$1 = (function (){var statearr_26779 = state_26777;(statearr_26779[7] = inst_26737);
(statearr_26779[8] = inst_26738);
return statearr_26779;
})();var statearr_26780_26808 = state_26777__$1;(statearr_26780_26808[2] = null);
(statearr_26780_26808[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26778 === 2))
{var state_26777__$1 = state_26777;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26777__$1,4,ch);
} else
{if((state_val_26778 === 3))
{var inst_26775 = (state_26777[2]);var state_26777__$1 = state_26777;return cljs.core.async.impl.ioc_helpers.return_chan(state_26777__$1,inst_26775);
} else
{if((state_val_26778 === 4))
{var inst_26741 = (state_26777[9]);var inst_26741__$1 = (state_26777[2]);var inst_26742 = (inst_26741__$1 == null);var inst_26743 = cljs.core.not(inst_26742);var state_26777__$1 = (function (){var statearr_26781 = state_26777;(statearr_26781[9] = inst_26741__$1);
return statearr_26781;
})();if(inst_26743)
{var statearr_26782_26809 = state_26777__$1;(statearr_26782_26809[1] = 5);
} else
{var statearr_26783_26810 = state_26777__$1;(statearr_26783_26810[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26778 === 5))
{var inst_26741 = (state_26777[9]);var inst_26745 = (state_26777[10]);var inst_26738 = (state_26777[8]);var inst_26745__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26741) : f.call(null,inst_26741));var inst_26746 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26745__$1,inst_26738);var inst_26747 = cljs.core.keyword_identical_QMARK_(inst_26738,cljs.core.constant$keyword$254);var inst_26748 = (inst_26746) || (inst_26747);var state_26777__$1 = (function (){var statearr_26784 = state_26777;(statearr_26784[10] = inst_26745__$1);
return statearr_26784;
})();if(cljs.core.truth_(inst_26748))
{var statearr_26785_26811 = state_26777__$1;(statearr_26785_26811[1] = 8);
} else
{var statearr_26786_26812 = state_26777__$1;(statearr_26786_26812[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26778 === 6))
{var inst_26737 = (state_26777[7]);var inst_26762 = inst_26737.length;var inst_26763 = (inst_26762 > 0);var state_26777__$1 = state_26777;if(cljs.core.truth_(inst_26763))
{var statearr_26788_26813 = state_26777__$1;(statearr_26788_26813[1] = 12);
} else
{var statearr_26789_26814 = state_26777__$1;(statearr_26789_26814[1] = 13);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_26778 === 7))
{var inst_26773 = (state_26777[2]);var state_26777__$1 = state_26777;var statearr_26790_26815 = state_26777__$1;(statearr_26790_26815[2] = inst_26773);
(statearr_26790_26815[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26778 === 8))
{var inst_26741 = (state_26777[9]);var inst_26745 = (state_26777[10]);var inst_26737 = (state_26777[7]);var inst_26750 = inst_26737.push(inst_26741);var tmp26787 = inst_26737;var inst_26737__$1 = tmp26787;var inst_26738 = inst_26745;var state_26777__$1 = (function (){var statearr_26791 = state_26777;(statearr_26791[11] = inst_26750);
(statearr_26791[7] = inst_26737__$1);
(statearr_26791[8] = inst_26738);
return statearr_26791;
})();var statearr_26792_26816 = state_26777__$1;(statearr_26792_26816[2] = null);
(statearr_26792_26816[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26778 === 9))
{var inst_26737 = (state_26777[7]);var inst_26753 = cljs.core.vec(inst_26737);var state_26777__$1 = state_26777;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26777__$1,11,out,inst_26753);
} else
{if((state_val_26778 === 10))
{var inst_26760 = (state_26777[2]);var state_26777__$1 = state_26777;var statearr_26793_26817 = state_26777__$1;(statearr_26793_26817[2] = inst_26760);
(statearr_26793_26817[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26778 === 11))
{var inst_26741 = (state_26777[9]);var inst_26745 = (state_26777[10]);var inst_26755 = (state_26777[2]);var inst_26756 = [];var inst_26757 = inst_26756.push(inst_26741);var inst_26737 = inst_26756;var inst_26738 = inst_26745;var state_26777__$1 = (function (){var statearr_26794 = state_26777;(statearr_26794[12] = inst_26755);
(statearr_26794[7] = inst_26737);
(statearr_26794[8] = inst_26738);
(statearr_26794[13] = inst_26757);
return statearr_26794;
})();var statearr_26795_26818 = state_26777__$1;(statearr_26795_26818[2] = null);
(statearr_26795_26818[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26778 === 12))
{var inst_26737 = (state_26777[7]);var inst_26765 = cljs.core.vec(inst_26737);var state_26777__$1 = state_26777;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26777__$1,15,out,inst_26765);
} else
{if((state_val_26778 === 13))
{var state_26777__$1 = state_26777;var statearr_26796_26819 = state_26777__$1;(statearr_26796_26819[2] = null);
(statearr_26796_26819[1] = 14);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26778 === 14))
{var inst_26770 = (state_26777[2]);var inst_26771 = cljs.core.async.close_BANG_(out);var state_26777__$1 = (function (){var statearr_26797 = state_26777;(statearr_26797[14] = inst_26770);
return statearr_26797;
})();var statearr_26798_26820 = state_26777__$1;(statearr_26798_26820[2] = inst_26771);
(statearr_26798_26820[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_26778 === 15))
{var inst_26767 = (state_26777[2]);var state_26777__$1 = state_26777;var statearr_26799_26821 = state_26777__$1;(statearr_26799_26821[2] = inst_26767);
(statearr_26799_26821[1] = 14);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_26803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26803[0] = state_machine__5507__auto__);
(statearr_26803[1] = 1);
return statearr_26803;
});
var state_machine__5507__auto____1 = (function (state_26777){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26777);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26804){if((e26804 instanceof Object))
{var ex__5510__auto__ = e26804;var statearr_26805_26822 = state_26777;(statearr_26805_26822[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26777);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e26804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__26823 = state_26777;
state_26777 = G__26823;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26777){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26806 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26807);
return statearr_26806;
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
