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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22451 = (function (f,fn_handler,meta22452){
this.f = f;
this.fn_handler = fn_handler;
this.meta22452 = meta22452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22451.cljs$lang$type = true;
cljs.core.async.t22451.cljs$lang$ctorStr = "cljs.core.async/t22451";
cljs.core.async.t22451.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22451");
});
cljs.core.async.t22451.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22453){var self__ = this;
var _22453__$1 = this;return self__.meta22452;
});
cljs.core.async.t22451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22453,meta22452__$1){var self__ = this;
var _22453__$1 = this;return (new cljs.core.async.t22451(self__.f,self__.fn_handler,meta22452__$1));
});
cljs.core.async.__GT_t22451 = (function __GT_t22451(f__$1,fn_handler__$1,meta22452){return (new cljs.core.async.t22451(f__$1,fn_handler__$1,meta22452));
});
}
return (new cljs.core.async.t22451(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22455 = buff;if(G__22455)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__22455.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22455.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22455);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22455);
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
{var val_22456 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22456) : fn1.call(null,val_22456));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22456) : fn1.call(null,val_22456));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___22457 = n;var x_22458 = 0;while(true){
if((x_22458 < n__4248__auto___22457))
{(a[x_22458] = 0);
{
var G__22459 = (x_22458 + 1);
x_22458 = G__22459;
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
var G__22460 = (i + 1);
i = G__22460;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t22464 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22464 = (function (flag,alt_flag,meta22465){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22465 = meta22465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22464.cljs$lang$type = true;
cljs.core.async.t22464.cljs$lang$ctorStr = "cljs.core.async/t22464";
cljs.core.async.t22464.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22464");
});
cljs.core.async.t22464.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22464.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t22464.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t22464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22466){var self__ = this;
var _22466__$1 = this;return self__.meta22465;
});
cljs.core.async.t22464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22466,meta22465__$1){var self__ = this;
var _22466__$1 = this;return (new cljs.core.async.t22464(self__.flag,self__.alt_flag,meta22465__$1));
});
cljs.core.async.__GT_t22464 = (function __GT_t22464(flag__$1,alt_flag__$1,meta22465){return (new cljs.core.async.t22464(flag__$1,alt_flag__$1,meta22465));
});
}
return (new cljs.core.async.t22464(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22470 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22470 = (function (cb,flag,alt_handler,meta22471){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22471 = meta22471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22470.cljs$lang$type = true;
cljs.core.async.t22470.cljs$lang$ctorStr = "cljs.core.async/t22470";
cljs.core.async.t22470.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22470");
});
cljs.core.async.t22470.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22470.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t22470.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t22470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22472){var self__ = this;
var _22472__$1 = this;return self__.meta22471;
});
cljs.core.async.t22470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22472,meta22471__$1){var self__ = this;
var _22472__$1 = this;return (new cljs.core.async.t22470(self__.cb,self__.flag,self__.alt_handler,meta22471__$1));
});
cljs.core.async.__GT_t22470 = (function __GT_t22470(cb__$1,flag__$1,alt_handler__$1,meta22471){return (new cljs.core.async.t22470(cb__$1,flag__$1,alt_handler__$1,meta22471));
});
}
return (new cljs.core.async.t22470(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$173.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22473_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22473_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22473_SHARP_,port], null)));
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
var G__22474 = (i + 1);
i = G__22474;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$157))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$157], null));
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
var alts_BANG___delegate = function (ports,p__22475){var map__22477 = p__22475;var map__22477__$1 = ((cljs.core.seq_QMARK_(map__22477))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22477):map__22477);var opts = map__22477__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22475 = null;if (arguments.length > 1) {
  p__22475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22475);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22478){
var ports = cljs.core.first(arglist__22478);
var p__22475 = cljs.core.rest(arglist__22478);
return alts_BANG___delegate(ports,p__22475);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22486 = (function (ch,f,map_LT_,meta22487){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22487 = meta22487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22486.cljs$lang$type = true;
cljs.core.async.t22486.cljs$lang$ctorStr = "cljs.core.async/t22486";
cljs.core.async.t22486.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22486");
});
cljs.core.async.t22486.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22486.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t22486.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22486.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t22489 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22489 = (function (fn1,_,meta22487,ch,f,map_LT_,meta22490){
this.fn1 = fn1;
this._ = _;
this.meta22487 = meta22487;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22490 = meta22490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22489.cljs$lang$type = true;
cljs.core.async.t22489.cljs$lang$ctorStr = "cljs.core.async/t22489";
cljs.core.async.t22489.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22489");
});
cljs.core.async.t22489.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t22489.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t22489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__22479_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__22479_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22479_SHARP_) : self__.f.call(null,p1__22479_SHARP_)))) : f1.call(null,(((p1__22479_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22479_SHARP_) : self__.f.call(null,p1__22479_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t22489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22491){var self__ = this;
var _22491__$1 = this;return self__.meta22490;
});
cljs.core.async.t22489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22491,meta22490__$1){var self__ = this;
var _22491__$1 = this;return (new cljs.core.async.t22489(self__.fn1,self__._,self__.meta22487,self__.ch,self__.f,self__.map_LT_,meta22490__$1));
});
cljs.core.async.__GT_t22489 = (function __GT_t22489(fn1__$1,___$2,meta22487__$1,ch__$2,f__$2,map_LT___$2,meta22490){return (new cljs.core.async.t22489(fn1__$1,___$2,meta22487__$1,ch__$2,f__$2,map_LT___$2,meta22490));
});
}
return (new cljs.core.async.t22489(fn1,___$1,self__.meta22487,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t22486.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22486.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22488){var self__ = this;
var _22488__$1 = this;return self__.meta22487;
});
cljs.core.async.t22486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22488,meta22487__$1){var self__ = this;
var _22488__$1 = this;return (new cljs.core.async.t22486(self__.ch,self__.f,self__.map_LT_,meta22487__$1));
});
cljs.core.async.__GT_t22486 = (function __GT_t22486(ch__$1,f__$1,map_LT___$1,meta22487){return (new cljs.core.async.t22486(ch__$1,f__$1,map_LT___$1,meta22487));
});
}
return (new cljs.core.async.t22486(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22495 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22495 = (function (ch,f,map_GT_,meta22496){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22496 = meta22496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22495.cljs$lang$type = true;
cljs.core.async.t22495.cljs$lang$ctorStr = "cljs.core.async/t22495";
cljs.core.async.t22495.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22495");
});
cljs.core.async.t22495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t22495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22495.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22497){var self__ = this;
var _22497__$1 = this;return self__.meta22496;
});
cljs.core.async.t22495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22497,meta22496__$1){var self__ = this;
var _22497__$1 = this;return (new cljs.core.async.t22495(self__.ch,self__.f,self__.map_GT_,meta22496__$1));
});
cljs.core.async.__GT_t22495 = (function __GT_t22495(ch__$1,f__$1,map_GT___$1,meta22496){return (new cljs.core.async.t22495(ch__$1,f__$1,map_GT___$1,meta22496));
});
}
return (new cljs.core.async.t22495(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22501 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22501 = (function (ch,p,filter_GT_,meta22502){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22502 = meta22502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22501.cljs$lang$type = true;
cljs.core.async.t22501.cljs$lang$ctorStr = "cljs.core.async/t22501";
cljs.core.async.t22501.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22501");
});
cljs.core.async.t22501.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22501.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t22501.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22501.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22501.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22501.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22503){var self__ = this;
var _22503__$1 = this;return self__.meta22502;
});
cljs.core.async.t22501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22503,meta22502__$1){var self__ = this;
var _22503__$1 = this;return (new cljs.core.async.t22501(self__.ch,self__.p,self__.filter_GT_,meta22502__$1));
});
cljs.core.async.__GT_t22501 = (function __GT_t22501(ch__$1,p__$1,filter_GT___$1,meta22502){return (new cljs.core.async.t22501(ch__$1,p__$1,filter_GT___$1,meta22502));
});
}
return (new cljs.core.async.t22501(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22565){var state_val_22566 = (state_22565[1]);if((state_val_22566 === 1))
{var state_22565__$1 = state_22565;var statearr_22567_22587 = state_22565__$1;(statearr_22567_22587[2] = null);
(statearr_22567_22587[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22566 === 2))
{var state_22565__$1 = state_22565;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22565__$1,4,ch);
} else
{if((state_val_22566 === 3))
{var inst_22563 = (state_22565[2]);var state_22565__$1 = state_22565;return cljs.core.async.impl.ioc_helpers.return_chan(state_22565__$1,inst_22563);
} else
{if((state_val_22566 === 4))
{var inst_22547 = (state_22565[7]);var inst_22547__$1 = (state_22565[2]);var inst_22548 = (inst_22547__$1 == null);var state_22565__$1 = (function (){var statearr_22568 = state_22565;(statearr_22568[7] = inst_22547__$1);
return statearr_22568;
})();if(cljs.core.truth_(inst_22548))
{var statearr_22569_22588 = state_22565__$1;(statearr_22569_22588[1] = 5);
} else
{var statearr_22570_22589 = state_22565__$1;(statearr_22570_22589[1] = 6);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_22566 === 5))
{var inst_22550 = cljs.core.async.close_BANG_(out);var state_22565__$1 = state_22565;var statearr_22571_22590 = state_22565__$1;(statearr_22571_22590[2] = inst_22550);
(statearr_22571_22590[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22566 === 6))
{var inst_22547 = (state_22565[7]);var inst_22552 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22547) : p.call(null,inst_22547));var state_22565__$1 = state_22565;if(cljs.core.truth_(inst_22552))
{var statearr_22572_22591 = state_22565__$1;(statearr_22572_22591[1] = 8);
} else
{var statearr_22573_22592 = state_22565__$1;(statearr_22573_22592[1] = 9);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_22566 === 7))
{var inst_22561 = (state_22565[2]);var state_22565__$1 = state_22565;var statearr_22574_22593 = state_22565__$1;(statearr_22574_22593[2] = inst_22561);
(statearr_22574_22593[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22566 === 8))
{var inst_22547 = (state_22565[7]);var state_22565__$1 = state_22565;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22565__$1,11,out,inst_22547);
} else
{if((state_val_22566 === 9))
{var state_22565__$1 = state_22565;var statearr_22575_22594 = state_22565__$1;(statearr_22575_22594[2] = null);
(statearr_22575_22594[1] = 10);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22566 === 10))
{var inst_22558 = (state_22565[2]);var state_22565__$1 = (function (){var statearr_22576 = state_22565;(statearr_22576[8] = inst_22558);
return statearr_22576;
})();var statearr_22577_22595 = state_22565__$1;(statearr_22577_22595[2] = null);
(statearr_22577_22595[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22566 === 11))
{var inst_22555 = (state_22565[2]);var state_22565__$1 = state_22565;var statearr_22578_22596 = state_22565__$1;(statearr_22578_22596[2] = inst_22555);
(statearr_22578_22596[1] = 10);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_22582 = [null,null,null,null,null,null,null,null,null];(statearr_22582[0] = state_machine__5507__auto__);
(statearr_22582[1] = 1);
return statearr_22582;
});
var state_machine__5507__auto____1 = (function (state_22565){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22565);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22583){if((e22583 instanceof Object))
{var ex__5510__auto__ = e22583;var statearr_22584_22597 = state_22565;(statearr_22584_22597[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22565);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e22583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__22598 = state_22565;
state_22565 = G__22598;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22565){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22585 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22586);
return statearr_22585;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22750){var state_val_22751 = (state_22750[1]);if((state_val_22751 === 1))
{var state_22750__$1 = state_22750;var statearr_22752_22789 = state_22750__$1;(statearr_22752_22789[2] = null);
(statearr_22752_22789[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 2))
{var state_22750__$1 = state_22750;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22750__$1,4,in$);
} else
{if((state_val_22751 === 3))
{var inst_22748 = (state_22750[2]);var state_22750__$1 = state_22750;return cljs.core.async.impl.ioc_helpers.return_chan(state_22750__$1,inst_22748);
} else
{if((state_val_22751 === 4))
{var inst_22696 = (state_22750[7]);var inst_22696__$1 = (state_22750[2]);var inst_22697 = (inst_22696__$1 == null);var state_22750__$1 = (function (){var statearr_22753 = state_22750;(statearr_22753[7] = inst_22696__$1);
return statearr_22753;
})();if(cljs.core.truth_(inst_22697))
{var statearr_22754_22790 = state_22750__$1;(statearr_22754_22790[1] = 5);
} else
{var statearr_22755_22791 = state_22750__$1;(statearr_22755_22791[1] = 6);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 5))
{var inst_22699 = cljs.core.async.close_BANG_(out);var state_22750__$1 = state_22750;var statearr_22756_22792 = state_22750__$1;(statearr_22756_22792[2] = inst_22699);
(statearr_22756_22792[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 6))
{var inst_22696 = (state_22750[7]);var inst_22701 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22696) : f.call(null,inst_22696));var inst_22706 = cljs.core.seq(inst_22701);var inst_22707 = inst_22706;var inst_22708 = null;var inst_22709 = 0;var inst_22710 = 0;var state_22750__$1 = (function (){var statearr_22757 = state_22750;(statearr_22757[8] = inst_22708);
(statearr_22757[9] = inst_22710);
(statearr_22757[10] = inst_22709);
(statearr_22757[11] = inst_22707);
return statearr_22757;
})();var statearr_22758_22793 = state_22750__$1;(statearr_22758_22793[2] = null);
(statearr_22758_22793[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 7))
{var inst_22746 = (state_22750[2]);var state_22750__$1 = state_22750;var statearr_22759_22794 = state_22750__$1;(statearr_22759_22794[2] = inst_22746);
(statearr_22759_22794[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 8))
{var inst_22710 = (state_22750[9]);var inst_22709 = (state_22750[10]);var inst_22712 = (inst_22710 < inst_22709);var inst_22713 = inst_22712;var state_22750__$1 = state_22750;if(cljs.core.truth_(inst_22713))
{var statearr_22760_22795 = state_22750__$1;(statearr_22760_22795[1] = 10);
} else
{var statearr_22761_22796 = state_22750__$1;(statearr_22761_22796[1] = 11);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 9))
{var inst_22743 = (state_22750[2]);var state_22750__$1 = (function (){var statearr_22762 = state_22750;(statearr_22762[12] = inst_22743);
return statearr_22762;
})();var statearr_22763_22797 = state_22750__$1;(statearr_22763_22797[2] = null);
(statearr_22763_22797[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 10))
{var inst_22708 = (state_22750[8]);var inst_22710 = (state_22750[9]);var inst_22715 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22708,inst_22710);var state_22750__$1 = state_22750;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22750__$1,13,out,inst_22715);
} else
{if((state_val_22751 === 11))
{var inst_22721 = (state_22750[13]);var inst_22707 = (state_22750[11]);var inst_22721__$1 = cljs.core.seq(inst_22707);var state_22750__$1 = (function (){var statearr_22767 = state_22750;(statearr_22767[13] = inst_22721__$1);
return statearr_22767;
})();if(inst_22721__$1)
{var statearr_22768_22798 = state_22750__$1;(statearr_22768_22798[1] = 14);
} else
{var statearr_22769_22799 = state_22750__$1;(statearr_22769_22799[1] = 15);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 12))
{var inst_22741 = (state_22750[2]);var state_22750__$1 = state_22750;var statearr_22770_22800 = state_22750__$1;(statearr_22770_22800[2] = inst_22741);
(statearr_22770_22800[1] = 9);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 13))
{var inst_22708 = (state_22750[8]);var inst_22710 = (state_22750[9]);var inst_22709 = (state_22750[10]);var inst_22707 = (state_22750[11]);var inst_22717 = (state_22750[2]);var inst_22718 = (inst_22710 + 1);var tmp22764 = inst_22708;var tmp22765 = inst_22709;var tmp22766 = inst_22707;var inst_22707__$1 = tmp22766;var inst_22708__$1 = tmp22764;var inst_22709__$1 = tmp22765;var inst_22710__$1 = inst_22718;var state_22750__$1 = (function (){var statearr_22771 = state_22750;(statearr_22771[14] = inst_22717);
(statearr_22771[8] = inst_22708__$1);
(statearr_22771[9] = inst_22710__$1);
(statearr_22771[10] = inst_22709__$1);
(statearr_22771[11] = inst_22707__$1);
return statearr_22771;
})();var statearr_22772_22801 = state_22750__$1;(statearr_22772_22801[2] = null);
(statearr_22772_22801[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 14))
{var inst_22721 = (state_22750[13]);var inst_22723 = cljs.core.chunked_seq_QMARK_(inst_22721);var state_22750__$1 = state_22750;if(inst_22723)
{var statearr_22773_22802 = state_22750__$1;(statearr_22773_22802[1] = 17);
} else
{var statearr_22774_22803 = state_22750__$1;(statearr_22774_22803[1] = 18);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 15))
{var state_22750__$1 = state_22750;var statearr_22775_22804 = state_22750__$1;(statearr_22775_22804[2] = null);
(statearr_22775_22804[1] = 16);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 16))
{var inst_22739 = (state_22750[2]);var state_22750__$1 = state_22750;var statearr_22776_22805 = state_22750__$1;(statearr_22776_22805[2] = inst_22739);
(statearr_22776_22805[1] = 12);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 17))
{var inst_22721 = (state_22750[13]);var inst_22725 = cljs.core.chunk_first(inst_22721);var inst_22726 = cljs.core.chunk_rest(inst_22721);var inst_22727 = cljs.core.count(inst_22725);var inst_22707 = inst_22726;var inst_22708 = inst_22725;var inst_22709 = inst_22727;var inst_22710 = 0;var state_22750__$1 = (function (){var statearr_22777 = state_22750;(statearr_22777[8] = inst_22708);
(statearr_22777[9] = inst_22710);
(statearr_22777[10] = inst_22709);
(statearr_22777[11] = inst_22707);
return statearr_22777;
})();var statearr_22778_22806 = state_22750__$1;(statearr_22778_22806[2] = null);
(statearr_22778_22806[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 18))
{var inst_22721 = (state_22750[13]);var inst_22730 = cljs.core.first(inst_22721);var state_22750__$1 = state_22750;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22750__$1,20,out,inst_22730);
} else
{if((state_val_22751 === 19))
{var inst_22736 = (state_22750[2]);var state_22750__$1 = state_22750;var statearr_22779_22807 = state_22750__$1;(statearr_22779_22807[2] = inst_22736);
(statearr_22779_22807[1] = 16);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22751 === 20))
{var inst_22721 = (state_22750[13]);var inst_22732 = (state_22750[2]);var inst_22733 = cljs.core.next(inst_22721);var inst_22707 = inst_22733;var inst_22708 = null;var inst_22709 = 0;var inst_22710 = 0;var state_22750__$1 = (function (){var statearr_22780 = state_22750;(statearr_22780[15] = inst_22732);
(statearr_22780[8] = inst_22708);
(statearr_22780[9] = inst_22710);
(statearr_22780[10] = inst_22709);
(statearr_22780[11] = inst_22707);
return statearr_22780;
})();var statearr_22781_22808 = state_22750__$1;(statearr_22781_22808[2] = null);
(statearr_22781_22808[1] = 8);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_22785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22785[0] = state_machine__5507__auto__);
(statearr_22785[1] = 1);
return statearr_22785;
});
var state_machine__5507__auto____1 = (function (state_22750){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22750);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22786){if((e22786 instanceof Object))
{var ex__5510__auto__ = e22786;var statearr_22787_22809 = state_22750;(statearr_22787_22809[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22750);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e22786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__22810 = state_22750;
state_22750 = G__22810;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22750){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22788 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22788;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___22891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22870){var state_val_22871 = (state_22870[1]);if((state_val_22871 === 1))
{var state_22870__$1 = state_22870;var statearr_22872_22892 = state_22870__$1;(statearr_22872_22892[2] = null);
(statearr_22872_22892[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22871 === 2))
{var state_22870__$1 = state_22870;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22870__$1,4,from);
} else
{if((state_val_22871 === 3))
{var inst_22868 = (state_22870[2]);var state_22870__$1 = state_22870;return cljs.core.async.impl.ioc_helpers.return_chan(state_22870__$1,inst_22868);
} else
{if((state_val_22871 === 4))
{var inst_22853 = (state_22870[7]);var inst_22853__$1 = (state_22870[2]);var inst_22854 = (inst_22853__$1 == null);var state_22870__$1 = (function (){var statearr_22873 = state_22870;(statearr_22873[7] = inst_22853__$1);
return statearr_22873;
})();if(cljs.core.truth_(inst_22854))
{var statearr_22874_22893 = state_22870__$1;(statearr_22874_22893[1] = 5);
} else
{var statearr_22875_22894 = state_22870__$1;(statearr_22875_22894[1] = 6);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_22871 === 5))
{var state_22870__$1 = state_22870;if(cljs.core.truth_(close_QMARK_))
{var statearr_22876_22895 = state_22870__$1;(statearr_22876_22895[1] = 8);
} else
{var statearr_22877_22896 = state_22870__$1;(statearr_22877_22896[1] = 9);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_22871 === 6))
{var inst_22853 = (state_22870[7]);var state_22870__$1 = state_22870;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22870__$1,11,to,inst_22853);
} else
{if((state_val_22871 === 7))
{var inst_22866 = (state_22870[2]);var state_22870__$1 = state_22870;var statearr_22878_22897 = state_22870__$1;(statearr_22878_22897[2] = inst_22866);
(statearr_22878_22897[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22871 === 8))
{var inst_22857 = cljs.core.async.close_BANG_(to);var state_22870__$1 = state_22870;var statearr_22879_22898 = state_22870__$1;(statearr_22879_22898[2] = inst_22857);
(statearr_22879_22898[1] = 10);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22871 === 9))
{var state_22870__$1 = state_22870;var statearr_22880_22899 = state_22870__$1;(statearr_22880_22899[2] = null);
(statearr_22880_22899[1] = 10);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22871 === 10))
{var inst_22860 = (state_22870[2]);var state_22870__$1 = state_22870;var statearr_22881_22900 = state_22870__$1;(statearr_22881_22900[2] = inst_22860);
(statearr_22881_22900[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22871 === 11))
{var inst_22863 = (state_22870[2]);var state_22870__$1 = (function (){var statearr_22882 = state_22870;(statearr_22882[8] = inst_22863);
return statearr_22882;
})();var statearr_22883_22901 = state_22870__$1;(statearr_22883_22901[2] = null);
(statearr_22883_22901[1] = 2);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_22887 = [null,null,null,null,null,null,null,null,null];(statearr_22887[0] = state_machine__5507__auto__);
(statearr_22887[1] = 1);
return statearr_22887;
});
var state_machine__5507__auto____1 = (function (state_22870){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22870);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22888){if((e22888 instanceof Object))
{var ex__5510__auto__ = e22888;var statearr_22889_22902 = state_22870;(statearr_22889_22902[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22870);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e22888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__22903 = state_22870;
state_22870 = G__22903;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22870){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22890 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22891);
return statearr_22890;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___22990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22968){var state_val_22969 = (state_22968[1]);if((state_val_22969 === 1))
{var state_22968__$1 = state_22968;var statearr_22970_22991 = state_22968__$1;(statearr_22970_22991[2] = null);
(statearr_22970_22991[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22969 === 2))
{var state_22968__$1 = state_22968;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22968__$1,4,ch);
} else
{if((state_val_22969 === 3))
{var inst_22966 = (state_22968[2]);var state_22968__$1 = state_22968;return cljs.core.async.impl.ioc_helpers.return_chan(state_22968__$1,inst_22966);
} else
{if((state_val_22969 === 4))
{var inst_22949 = (state_22968[7]);var inst_22949__$1 = (state_22968[2]);var inst_22950 = (inst_22949__$1 == null);var state_22968__$1 = (function (){var statearr_22971 = state_22968;(statearr_22971[7] = inst_22949__$1);
return statearr_22971;
})();if(cljs.core.truth_(inst_22950))
{var statearr_22972_22992 = state_22968__$1;(statearr_22972_22992[1] = 5);
} else
{var statearr_22973_22993 = state_22968__$1;(statearr_22973_22993[1] = 6);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_22969 === 5))
{var inst_22952 = cljs.core.async.close_BANG_(tc);var inst_22953 = cljs.core.async.close_BANG_(fc);var state_22968__$1 = (function (){var statearr_22974 = state_22968;(statearr_22974[8] = inst_22952);
return statearr_22974;
})();var statearr_22975_22994 = state_22968__$1;(statearr_22975_22994[2] = inst_22953);
(statearr_22975_22994[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22969 === 6))
{var inst_22949 = (state_22968[7]);var inst_22955 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22949) : p.call(null,inst_22949));var state_22968__$1 = state_22968;if(cljs.core.truth_(inst_22955))
{var statearr_22976_22995 = state_22968__$1;(statearr_22976_22995[1] = 9);
} else
{var statearr_22977_22996 = state_22968__$1;(statearr_22977_22996[1] = 10);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_22969 === 7))
{var inst_22964 = (state_22968[2]);var state_22968__$1 = state_22968;var statearr_22978_22997 = state_22968__$1;(statearr_22978_22997[2] = inst_22964);
(statearr_22978_22997[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22969 === 8))
{var inst_22961 = (state_22968[2]);var state_22968__$1 = (function (){var statearr_22979 = state_22968;(statearr_22979[9] = inst_22961);
return statearr_22979;
})();var statearr_22980_22998 = state_22968__$1;(statearr_22980_22998[2] = null);
(statearr_22980_22998[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22969 === 9))
{var state_22968__$1 = state_22968;var statearr_22981_22999 = state_22968__$1;(statearr_22981_22999[2] = tc);
(statearr_22981_22999[1] = 11);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22969 === 10))
{var state_22968__$1 = state_22968;var statearr_22982_23000 = state_22968__$1;(statearr_22982_23000[2] = fc);
(statearr_22982_23000[1] = 11);
return cljs.core.constant$keyword$167;
} else
{if((state_val_22969 === 11))
{var inst_22949 = (state_22968[7]);var inst_22959 = (state_22968[2]);var state_22968__$1 = state_22968;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22968__$1,8,inst_22959,inst_22949);
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
var state_machine__5507__auto____0 = (function (){var statearr_22986 = [null,null,null,null,null,null,null,null,null,null];(statearr_22986[0] = state_machine__5507__auto__);
(statearr_22986[1] = 1);
return statearr_22986;
});
var state_machine__5507__auto____1 = (function (state_22968){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22968);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22987){if((e22987 instanceof Object))
{var ex__5510__auto__ = e22987;var statearr_22988_23001 = state_22968;(statearr_22988_23001[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22968);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e22987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__23002 = state_22968;
state_22968 = G__23002;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22968){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22989 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22990);
return statearr_22989;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23049){var state_val_23050 = (state_23049[1]);if((state_val_23050 === 7))
{var inst_23045 = (state_23049[2]);var state_23049__$1 = state_23049;var statearr_23051_23067 = state_23049__$1;(statearr_23051_23067[2] = inst_23045);
(statearr_23051_23067[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23050 === 6))
{var inst_23038 = (state_23049[7]);var inst_23035 = (state_23049[8]);var inst_23042 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23035,inst_23038) : f.call(null,inst_23035,inst_23038));var inst_23035__$1 = inst_23042;var state_23049__$1 = (function (){var statearr_23052 = state_23049;(statearr_23052[8] = inst_23035__$1);
return statearr_23052;
})();var statearr_23053_23068 = state_23049__$1;(statearr_23053_23068[2] = null);
(statearr_23053_23068[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23050 === 5))
{var inst_23035 = (state_23049[8]);var state_23049__$1 = state_23049;var statearr_23054_23069 = state_23049__$1;(statearr_23054_23069[2] = inst_23035);
(statearr_23054_23069[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23050 === 4))
{var inst_23038 = (state_23049[7]);var inst_23038__$1 = (state_23049[2]);var inst_23039 = (inst_23038__$1 == null);var state_23049__$1 = (function (){var statearr_23055 = state_23049;(statearr_23055[7] = inst_23038__$1);
return statearr_23055;
})();if(cljs.core.truth_(inst_23039))
{var statearr_23056_23070 = state_23049__$1;(statearr_23056_23070[1] = 5);
} else
{var statearr_23057_23071 = state_23049__$1;(statearr_23057_23071[1] = 6);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23050 === 3))
{var inst_23047 = (state_23049[2]);var state_23049__$1 = state_23049;return cljs.core.async.impl.ioc_helpers.return_chan(state_23049__$1,inst_23047);
} else
{if((state_val_23050 === 2))
{var state_23049__$1 = state_23049;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23049__$1,4,ch);
} else
{if((state_val_23050 === 1))
{var inst_23035 = init;var state_23049__$1 = (function (){var statearr_23058 = state_23049;(statearr_23058[8] = inst_23035);
return statearr_23058;
})();var statearr_23059_23072 = state_23049__$1;(statearr_23059_23072[2] = null);
(statearr_23059_23072[1] = 2);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_23063 = [null,null,null,null,null,null,null,null,null];(statearr_23063[0] = state_machine__5507__auto__);
(statearr_23063[1] = 1);
return statearr_23063;
});
var state_machine__5507__auto____1 = (function (state_23049){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23049);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23064){if((e23064 instanceof Object))
{var ex__5510__auto__ = e23064;var statearr_23065_23073 = state_23049;(statearr_23065_23073[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23049);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e23064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__23074 = state_23049;
state_23049 = G__23074;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23049){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23066 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23066;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23136){var state_val_23137 = (state_23136[1]);if((state_val_23137 === 1))
{var inst_23116 = cljs.core.seq(coll);var inst_23117 = inst_23116;var state_23136__$1 = (function (){var statearr_23138 = state_23136;(statearr_23138[7] = inst_23117);
return statearr_23138;
})();var statearr_23139_23157 = state_23136__$1;(statearr_23139_23157[2] = null);
(statearr_23139_23157[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23137 === 2))
{var inst_23117 = (state_23136[7]);var state_23136__$1 = state_23136;if(cljs.core.truth_(inst_23117))
{var statearr_23140_23158 = state_23136__$1;(statearr_23140_23158[1] = 4);
} else
{var statearr_23141_23159 = state_23136__$1;(statearr_23141_23159[1] = 5);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23137 === 3))
{var inst_23134 = (state_23136[2]);var state_23136__$1 = state_23136;return cljs.core.async.impl.ioc_helpers.return_chan(state_23136__$1,inst_23134);
} else
{if((state_val_23137 === 4))
{var inst_23117 = (state_23136[7]);var inst_23120 = cljs.core.first(inst_23117);var state_23136__$1 = state_23136;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23136__$1,7,ch,inst_23120);
} else
{if((state_val_23137 === 5))
{var state_23136__$1 = state_23136;if(cljs.core.truth_(close_QMARK_))
{var statearr_23142_23160 = state_23136__$1;(statearr_23142_23160[1] = 8);
} else
{var statearr_23143_23161 = state_23136__$1;(statearr_23143_23161[1] = 9);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23137 === 6))
{var inst_23132 = (state_23136[2]);var state_23136__$1 = state_23136;var statearr_23144_23162 = state_23136__$1;(statearr_23144_23162[2] = inst_23132);
(statearr_23144_23162[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23137 === 7))
{var inst_23117 = (state_23136[7]);var inst_23122 = (state_23136[2]);var inst_23123 = cljs.core.next(inst_23117);var inst_23117__$1 = inst_23123;var state_23136__$1 = (function (){var statearr_23145 = state_23136;(statearr_23145[7] = inst_23117__$1);
(statearr_23145[8] = inst_23122);
return statearr_23145;
})();var statearr_23146_23163 = state_23136__$1;(statearr_23146_23163[2] = null);
(statearr_23146_23163[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23137 === 8))
{var inst_23127 = cljs.core.async.close_BANG_(ch);var state_23136__$1 = state_23136;var statearr_23147_23164 = state_23136__$1;(statearr_23147_23164[2] = inst_23127);
(statearr_23147_23164[1] = 10);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23137 === 9))
{var state_23136__$1 = state_23136;var statearr_23148_23165 = state_23136__$1;(statearr_23148_23165[2] = null);
(statearr_23148_23165[1] = 10);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23137 === 10))
{var inst_23130 = (state_23136[2]);var state_23136__$1 = state_23136;var statearr_23149_23166 = state_23136__$1;(statearr_23149_23166[2] = inst_23130);
(statearr_23149_23166[1] = 6);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_23153 = [null,null,null,null,null,null,null,null,null];(statearr_23153[0] = state_machine__5507__auto__);
(statearr_23153[1] = 1);
return statearr_23153;
});
var state_machine__5507__auto____1 = (function (state_23136){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23136);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23154){if((e23154 instanceof Object))
{var ex__5510__auto__ = e23154;var statearr_23155_23167 = state_23136;(statearr_23155_23167[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23136);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e23154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__23168 = state_23136;
state_23136 = G__23168;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23136){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23156 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23156;
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
cljs.core.async.Mux = (function (){var obj23170 = {};return obj23170;
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
cljs.core.async.Mult = (function (){var obj23172 = {};return obj23172;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23396 = (function (cs,ch,mult,meta23397){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23397 = meta23397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23396.cljs$lang$type = true;
cljs.core.async.t23396.cljs$lang$ctorStr = "cljs.core.async/t23396";
cljs.core.async.t23396.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23396");
});})(cs))
;
cljs.core.async.t23396.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23396.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23396.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23396.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23396.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23398){var self__ = this;
var _23398__$1 = this;return self__.meta23397;
});})(cs))
;
cljs.core.async.t23396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23398,meta23397__$1){var self__ = this;
var _23398__$1 = this;return (new cljs.core.async.t23396(self__.cs,self__.ch,self__.mult,meta23397__$1));
});})(cs))
;
cljs.core.async.__GT_t23396 = ((function (cs){
return (function __GT_t23396(cs__$1,ch__$1,mult__$1,meta23397){return (new cljs.core.async.t23396(cs__$1,ch__$1,mult__$1,meta23397));
});})(cs))
;
}
return (new cljs.core.async.t23396(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___23619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23533){var state_val_23534 = (state_23533[1]);if((state_val_23534 === 32))
{var inst_23401 = (state_23533[7]);var inst_23477 = (state_23533[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23533,31,Object,null,30);var inst_23484 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23477,inst_23401,done);var state_23533__$1 = state_23533;var statearr_23535_23620 = state_23533__$1;(statearr_23535_23620[2] = inst_23484);
cljs.core.async.impl.ioc_helpers.process_exception(state_23533__$1);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 1))
{var state_23533__$1 = state_23533;var statearr_23536_23621 = state_23533__$1;(statearr_23536_23621[2] = null);
(statearr_23536_23621[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 33))
{var inst_23490 = (state_23533[9]);var inst_23492 = cljs.core.chunked_seq_QMARK_(inst_23490);var state_23533__$1 = state_23533;if(inst_23492)
{var statearr_23537_23622 = state_23533__$1;(statearr_23537_23622[1] = 36);
} else
{var statearr_23538_23623 = state_23533__$1;(statearr_23538_23623[1] = 37);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 2))
{var state_23533__$1 = state_23533;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23533__$1,4,ch);
} else
{if((state_val_23534 === 34))
{var state_23533__$1 = state_23533;var statearr_23539_23624 = state_23533__$1;(statearr_23539_23624[2] = null);
(statearr_23539_23624[1] = 35);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 3))
{var inst_23531 = (state_23533[2]);var state_23533__$1 = state_23533;return cljs.core.async.impl.ioc_helpers.return_chan(state_23533__$1,inst_23531);
} else
{if((state_val_23534 === 35))
{var inst_23515 = (state_23533[2]);var state_23533__$1 = state_23533;var statearr_23540_23625 = state_23533__$1;(statearr_23540_23625[2] = inst_23515);
(statearr_23540_23625[1] = 29);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 4))
{var inst_23401 = (state_23533[7]);var inst_23401__$1 = (state_23533[2]);var inst_23402 = (inst_23401__$1 == null);var state_23533__$1 = (function (){var statearr_23541 = state_23533;(statearr_23541[7] = inst_23401__$1);
return statearr_23541;
})();if(cljs.core.truth_(inst_23402))
{var statearr_23542_23626 = state_23533__$1;(statearr_23542_23626[1] = 5);
} else
{var statearr_23543_23627 = state_23533__$1;(statearr_23543_23627[1] = 6);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 36))
{var inst_23490 = (state_23533[9]);var inst_23494 = cljs.core.chunk_first(inst_23490);var inst_23495 = cljs.core.chunk_rest(inst_23490);var inst_23496 = cljs.core.count(inst_23494);var inst_23469 = inst_23495;var inst_23470 = inst_23494;var inst_23471 = inst_23496;var inst_23472 = 0;var state_23533__$1 = (function (){var statearr_23544 = state_23533;(statearr_23544[10] = inst_23471);
(statearr_23544[11] = inst_23472);
(statearr_23544[12] = inst_23470);
(statearr_23544[13] = inst_23469);
return statearr_23544;
})();var statearr_23545_23628 = state_23533__$1;(statearr_23545_23628[2] = null);
(statearr_23545_23628[1] = 25);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 5))
{var inst_23408 = cljs.core.deref(cs);var inst_23409 = cljs.core.seq(inst_23408);var inst_23410 = inst_23409;var inst_23411 = null;var inst_23412 = 0;var inst_23413 = 0;var state_23533__$1 = (function (){var statearr_23546 = state_23533;(statearr_23546[14] = inst_23413);
(statearr_23546[15] = inst_23412);
(statearr_23546[16] = inst_23411);
(statearr_23546[17] = inst_23410);
return statearr_23546;
})();var statearr_23547_23629 = state_23533__$1;(statearr_23547_23629[2] = null);
(statearr_23547_23629[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 37))
{var inst_23490 = (state_23533[9]);var inst_23499 = cljs.core.first(inst_23490);var state_23533__$1 = (function (){var statearr_23548 = state_23533;(statearr_23548[18] = inst_23499);
return statearr_23548;
})();var statearr_23549_23630 = state_23533__$1;(statearr_23549_23630[2] = null);
(statearr_23549_23630[1] = 41);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 6))
{var inst_23461 = (state_23533[19]);var inst_23460 = cljs.core.deref(cs);var inst_23461__$1 = cljs.core.keys(inst_23460);var inst_23462 = cljs.core.count(inst_23461__$1);var inst_23463 = cljs.core.reset_BANG_(dctr,inst_23462);var inst_23468 = cljs.core.seq(inst_23461__$1);var inst_23469 = inst_23468;var inst_23470 = null;var inst_23471 = 0;var inst_23472 = 0;var state_23533__$1 = (function (){var statearr_23550 = state_23533;(statearr_23550[10] = inst_23471);
(statearr_23550[11] = inst_23472);
(statearr_23550[12] = inst_23470);
(statearr_23550[13] = inst_23469);
(statearr_23550[20] = inst_23463);
(statearr_23550[19] = inst_23461__$1);
return statearr_23550;
})();var statearr_23551_23631 = state_23533__$1;(statearr_23551_23631[2] = null);
(statearr_23551_23631[1] = 25);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 38))
{var inst_23512 = (state_23533[2]);var state_23533__$1 = state_23533;var statearr_23552_23632 = state_23533__$1;(statearr_23552_23632[2] = inst_23512);
(statearr_23552_23632[1] = 35);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 7))
{var inst_23529 = (state_23533[2]);var state_23533__$1 = state_23533;var statearr_23553_23633 = state_23533__$1;(statearr_23553_23633[2] = inst_23529);
(statearr_23553_23633[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 39))
{var inst_23490 = (state_23533[9]);var inst_23508 = (state_23533[2]);var inst_23509 = cljs.core.next(inst_23490);var inst_23469 = inst_23509;var inst_23470 = null;var inst_23471 = 0;var inst_23472 = 0;var state_23533__$1 = (function (){var statearr_23554 = state_23533;(statearr_23554[10] = inst_23471);
(statearr_23554[11] = inst_23472);
(statearr_23554[12] = inst_23470);
(statearr_23554[13] = inst_23469);
(statearr_23554[21] = inst_23508);
return statearr_23554;
})();var statearr_23555_23634 = state_23533__$1;(statearr_23555_23634[2] = null);
(statearr_23555_23634[1] = 25);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 8))
{var inst_23413 = (state_23533[14]);var inst_23412 = (state_23533[15]);var inst_23415 = (inst_23413 < inst_23412);var inst_23416 = inst_23415;var state_23533__$1 = state_23533;if(cljs.core.truth_(inst_23416))
{var statearr_23556_23635 = state_23533__$1;(statearr_23556_23635[1] = 10);
} else
{var statearr_23557_23636 = state_23533__$1;(statearr_23557_23636[1] = 11);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 40))
{var inst_23499 = (state_23533[18]);var inst_23500 = (state_23533[2]);var inst_23501 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23502 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23499);var state_23533__$1 = (function (){var statearr_23558 = state_23533;(statearr_23558[22] = inst_23501);
(statearr_23558[23] = inst_23500);
return statearr_23558;
})();var statearr_23559_23637 = state_23533__$1;(statearr_23559_23637[2] = inst_23502);
cljs.core.async.impl.ioc_helpers.process_exception(state_23533__$1);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 9))
{var inst_23458 = (state_23533[2]);var state_23533__$1 = state_23533;var statearr_23560_23638 = state_23533__$1;(statearr_23560_23638[2] = inst_23458);
(statearr_23560_23638[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 41))
{var inst_23401 = (state_23533[7]);var inst_23499 = (state_23533[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23533,40,Object,null,39);var inst_23506 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23499,inst_23401,done);var state_23533__$1 = state_23533;var statearr_23561_23639 = state_23533__$1;(statearr_23561_23639[2] = inst_23506);
cljs.core.async.impl.ioc_helpers.process_exception(state_23533__$1);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 10))
{var inst_23413 = (state_23533[14]);var inst_23411 = (state_23533[16]);var inst_23419 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23411,inst_23413);var inst_23420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23419,0,null);var inst_23421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23419,1,null);var state_23533__$1 = (function (){var statearr_23562 = state_23533;(statearr_23562[24] = inst_23420);
return statearr_23562;
})();if(cljs.core.truth_(inst_23421))
{var statearr_23563_23640 = state_23533__$1;(statearr_23563_23640[1] = 13);
} else
{var statearr_23564_23641 = state_23533__$1;(statearr_23564_23641[1] = 14);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 42))
{var state_23533__$1 = state_23533;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23533__$1,45,dchan);
} else
{if((state_val_23534 === 11))
{var inst_23430 = (state_23533[25]);var inst_23410 = (state_23533[17]);var inst_23430__$1 = cljs.core.seq(inst_23410);var state_23533__$1 = (function (){var statearr_23565 = state_23533;(statearr_23565[25] = inst_23430__$1);
return statearr_23565;
})();if(inst_23430__$1)
{var statearr_23566_23642 = state_23533__$1;(statearr_23566_23642[1] = 16);
} else
{var statearr_23567_23643 = state_23533__$1;(statearr_23567_23643[1] = 17);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 43))
{var state_23533__$1 = state_23533;var statearr_23568_23644 = state_23533__$1;(statearr_23568_23644[2] = null);
(statearr_23568_23644[1] = 44);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 12))
{var inst_23456 = (state_23533[2]);var state_23533__$1 = state_23533;var statearr_23569_23645 = state_23533__$1;(statearr_23569_23645[2] = inst_23456);
(statearr_23569_23645[1] = 9);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 44))
{var inst_23526 = (state_23533[2]);var state_23533__$1 = (function (){var statearr_23570 = state_23533;(statearr_23570[26] = inst_23526);
return statearr_23570;
})();var statearr_23571_23646 = state_23533__$1;(statearr_23571_23646[2] = null);
(statearr_23571_23646[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 13))
{var inst_23420 = (state_23533[24]);var inst_23423 = cljs.core.async.close_BANG_(inst_23420);var state_23533__$1 = state_23533;var statearr_23572_23647 = state_23533__$1;(statearr_23572_23647[2] = inst_23423);
(statearr_23572_23647[1] = 15);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 45))
{var inst_23523 = (state_23533[2]);var state_23533__$1 = state_23533;var statearr_23576_23648 = state_23533__$1;(statearr_23576_23648[2] = inst_23523);
(statearr_23576_23648[1] = 44);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 14))
{var state_23533__$1 = state_23533;var statearr_23577_23649 = state_23533__$1;(statearr_23577_23649[2] = null);
(statearr_23577_23649[1] = 15);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 15))
{var inst_23413 = (state_23533[14]);var inst_23412 = (state_23533[15]);var inst_23411 = (state_23533[16]);var inst_23410 = (state_23533[17]);var inst_23426 = (state_23533[2]);var inst_23427 = (inst_23413 + 1);var tmp23573 = inst_23412;var tmp23574 = inst_23411;var tmp23575 = inst_23410;var inst_23410__$1 = tmp23575;var inst_23411__$1 = tmp23574;var inst_23412__$1 = tmp23573;var inst_23413__$1 = inst_23427;var state_23533__$1 = (function (){var statearr_23578 = state_23533;(statearr_23578[27] = inst_23426);
(statearr_23578[14] = inst_23413__$1);
(statearr_23578[15] = inst_23412__$1);
(statearr_23578[16] = inst_23411__$1);
(statearr_23578[17] = inst_23410__$1);
return statearr_23578;
})();var statearr_23579_23650 = state_23533__$1;(statearr_23579_23650[2] = null);
(statearr_23579_23650[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 16))
{var inst_23430 = (state_23533[25]);var inst_23432 = cljs.core.chunked_seq_QMARK_(inst_23430);var state_23533__$1 = state_23533;if(inst_23432)
{var statearr_23580_23651 = state_23533__$1;(statearr_23580_23651[1] = 19);
} else
{var statearr_23581_23652 = state_23533__$1;(statearr_23581_23652[1] = 20);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 17))
{var state_23533__$1 = state_23533;var statearr_23582_23653 = state_23533__$1;(statearr_23582_23653[2] = null);
(statearr_23582_23653[1] = 18);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 18))
{var inst_23454 = (state_23533[2]);var state_23533__$1 = state_23533;var statearr_23583_23654 = state_23533__$1;(statearr_23583_23654[2] = inst_23454);
(statearr_23583_23654[1] = 12);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 19))
{var inst_23430 = (state_23533[25]);var inst_23434 = cljs.core.chunk_first(inst_23430);var inst_23435 = cljs.core.chunk_rest(inst_23430);var inst_23436 = cljs.core.count(inst_23434);var inst_23410 = inst_23435;var inst_23411 = inst_23434;var inst_23412 = inst_23436;var inst_23413 = 0;var state_23533__$1 = (function (){var statearr_23584 = state_23533;(statearr_23584[14] = inst_23413);
(statearr_23584[15] = inst_23412);
(statearr_23584[16] = inst_23411);
(statearr_23584[17] = inst_23410);
return statearr_23584;
})();var statearr_23585_23655 = state_23533__$1;(statearr_23585_23655[2] = null);
(statearr_23585_23655[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 20))
{var inst_23430 = (state_23533[25]);var inst_23440 = cljs.core.first(inst_23430);var inst_23441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23440,0,null);var inst_23442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23440,1,null);var state_23533__$1 = (function (){var statearr_23586 = state_23533;(statearr_23586[28] = inst_23441);
return statearr_23586;
})();if(cljs.core.truth_(inst_23442))
{var statearr_23587_23656 = state_23533__$1;(statearr_23587_23656[1] = 22);
} else
{var statearr_23588_23657 = state_23533__$1;(statearr_23588_23657[1] = 23);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 21))
{var inst_23451 = (state_23533[2]);var state_23533__$1 = state_23533;var statearr_23589_23658 = state_23533__$1;(statearr_23589_23658[2] = inst_23451);
(statearr_23589_23658[1] = 18);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 22))
{var inst_23441 = (state_23533[28]);var inst_23444 = cljs.core.async.close_BANG_(inst_23441);var state_23533__$1 = state_23533;var statearr_23590_23659 = state_23533__$1;(statearr_23590_23659[2] = inst_23444);
(statearr_23590_23659[1] = 24);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 23))
{var state_23533__$1 = state_23533;var statearr_23591_23660 = state_23533__$1;(statearr_23591_23660[2] = null);
(statearr_23591_23660[1] = 24);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 24))
{var inst_23430 = (state_23533[25]);var inst_23447 = (state_23533[2]);var inst_23448 = cljs.core.next(inst_23430);var inst_23410 = inst_23448;var inst_23411 = null;var inst_23412 = 0;var inst_23413 = 0;var state_23533__$1 = (function (){var statearr_23592 = state_23533;(statearr_23592[14] = inst_23413);
(statearr_23592[15] = inst_23412);
(statearr_23592[29] = inst_23447);
(statearr_23592[16] = inst_23411);
(statearr_23592[17] = inst_23410);
return statearr_23592;
})();var statearr_23593_23661 = state_23533__$1;(statearr_23593_23661[2] = null);
(statearr_23593_23661[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 25))
{var inst_23471 = (state_23533[10]);var inst_23472 = (state_23533[11]);var inst_23474 = (inst_23472 < inst_23471);var inst_23475 = inst_23474;var state_23533__$1 = state_23533;if(cljs.core.truth_(inst_23475))
{var statearr_23594_23662 = state_23533__$1;(statearr_23594_23662[1] = 27);
} else
{var statearr_23595_23663 = state_23533__$1;(statearr_23595_23663[1] = 28);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 26))
{var inst_23461 = (state_23533[19]);var inst_23519 = (state_23533[2]);var inst_23520 = cljs.core.seq(inst_23461);var state_23533__$1 = (function (){var statearr_23596 = state_23533;(statearr_23596[30] = inst_23519);
return statearr_23596;
})();if(inst_23520)
{var statearr_23597_23664 = state_23533__$1;(statearr_23597_23664[1] = 42);
} else
{var statearr_23598_23665 = state_23533__$1;(statearr_23598_23665[1] = 43);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 27))
{var inst_23472 = (state_23533[11]);var inst_23470 = (state_23533[12]);var inst_23477 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23470,inst_23472);var state_23533__$1 = (function (){var statearr_23599 = state_23533;(statearr_23599[8] = inst_23477);
return statearr_23599;
})();var statearr_23600_23666 = state_23533__$1;(statearr_23600_23666[2] = null);
(statearr_23600_23666[1] = 32);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 28))
{var inst_23469 = (state_23533[13]);var inst_23490 = (state_23533[9]);var inst_23490__$1 = cljs.core.seq(inst_23469);var state_23533__$1 = (function (){var statearr_23604 = state_23533;(statearr_23604[9] = inst_23490__$1);
return statearr_23604;
})();if(inst_23490__$1)
{var statearr_23605_23667 = state_23533__$1;(statearr_23605_23667[1] = 33);
} else
{var statearr_23606_23668 = state_23533__$1;(statearr_23606_23668[1] = 34);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 29))
{var inst_23517 = (state_23533[2]);var state_23533__$1 = state_23533;var statearr_23607_23669 = state_23533__$1;(statearr_23607_23669[2] = inst_23517);
(statearr_23607_23669[1] = 26);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 30))
{var inst_23471 = (state_23533[10]);var inst_23472 = (state_23533[11]);var inst_23470 = (state_23533[12]);var inst_23469 = (state_23533[13]);var inst_23486 = (state_23533[2]);var inst_23487 = (inst_23472 + 1);var tmp23601 = inst_23471;var tmp23602 = inst_23470;var tmp23603 = inst_23469;var inst_23469__$1 = tmp23603;var inst_23470__$1 = tmp23602;var inst_23471__$1 = tmp23601;var inst_23472__$1 = inst_23487;var state_23533__$1 = (function (){var statearr_23608 = state_23533;(statearr_23608[10] = inst_23471__$1);
(statearr_23608[11] = inst_23472__$1);
(statearr_23608[12] = inst_23470__$1);
(statearr_23608[31] = inst_23486);
(statearr_23608[13] = inst_23469__$1);
return statearr_23608;
})();var statearr_23609_23670 = state_23533__$1;(statearr_23609_23670[2] = null);
(statearr_23609_23670[1] = 25);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23534 === 31))
{var inst_23477 = (state_23533[8]);var inst_23478 = (state_23533[2]);var inst_23479 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23480 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23477);var state_23533__$1 = (function (){var statearr_23610 = state_23533;(statearr_23610[32] = inst_23479);
(statearr_23610[33] = inst_23478);
return statearr_23610;
})();var statearr_23611_23671 = state_23533__$1;(statearr_23611_23671[2] = inst_23480);
cljs.core.async.impl.ioc_helpers.process_exception(state_23533__$1);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_23615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23615[0] = state_machine__5507__auto__);
(statearr_23615[1] = 1);
return statearr_23615;
});
var state_machine__5507__auto____1 = (function (state_23533){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23533);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23616){if((e23616 instanceof Object))
{var ex__5510__auto__ = e23616;var statearr_23617_23672 = state_23533;(statearr_23617_23672[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23533);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e23616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__23673 = state_23533;
state_23533 = G__23673;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23533){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23618 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23619);
return statearr_23618;
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
cljs.core.async.Mix = (function (){var obj23675 = {};return obj23675;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$174,null,cljs.core.constant$keyword$175,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$176);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$175);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$176,chs);var pauses = pick(cljs.core.constant$keyword$174,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$177,solos,cljs.core.constant$keyword$178,pick(cljs.core.constant$keyword$175,chs),cljs.core.constant$keyword$179,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$174)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t23785 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23785 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta23786){
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
this.meta23786 = meta23786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23785.cljs$lang$type = true;
cljs.core.async.t23785.cljs$lang$ctorStr = "cljs.core.async/t23785";
cljs.core.async.t23785.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23785");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23785.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23785.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23785.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23785.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23785.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23785.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23785.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23787){var self__ = this;
var _23787__$1 = this;return self__.meta23786;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23787,meta23786__$1){var self__ = this;
var _23787__$1 = this;return (new cljs.core.async.t23785(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta23786__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23785 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23785(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23786){return (new cljs.core.async.t23785(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23786));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23785(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___23894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23852){var state_val_23853 = (state_23852[1]);if((state_val_23853 === 1))
{var inst_23791 = (state_23852[7]);var inst_23791__$1 = calc_state();var inst_23792 = cljs.core.seq_QMARK_(inst_23791__$1);var state_23852__$1 = (function (){var statearr_23854 = state_23852;(statearr_23854[7] = inst_23791__$1);
return statearr_23854;
})();if(inst_23792)
{var statearr_23855_23895 = state_23852__$1;(statearr_23855_23895[1] = 2);
} else
{var statearr_23856_23896 = state_23852__$1;(statearr_23856_23896[1] = 3);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 2))
{var inst_23791 = (state_23852[7]);var inst_23794 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23791);var state_23852__$1 = state_23852;var statearr_23857_23897 = state_23852__$1;(statearr_23857_23897[2] = inst_23794);
(statearr_23857_23897[1] = 4);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 3))
{var inst_23791 = (state_23852[7]);var state_23852__$1 = state_23852;var statearr_23858_23898 = state_23852__$1;(statearr_23858_23898[2] = inst_23791);
(statearr_23858_23898[1] = 4);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 4))
{var inst_23791 = (state_23852[7]);var inst_23797 = (state_23852[2]);var inst_23798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23797,cljs.core.constant$keyword$179);var inst_23799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23797,cljs.core.constant$keyword$178);var inst_23800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23797,cljs.core.constant$keyword$177);var inst_23801 = inst_23791;var state_23852__$1 = (function (){var statearr_23859 = state_23852;(statearr_23859[8] = inst_23798);
(statearr_23859[9] = inst_23799);
(statearr_23859[10] = inst_23800);
(statearr_23859[11] = inst_23801);
return statearr_23859;
})();var statearr_23860_23899 = state_23852__$1;(statearr_23860_23899[2] = null);
(statearr_23860_23899[1] = 5);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 5))
{var inst_23801 = (state_23852[11]);var inst_23804 = cljs.core.seq_QMARK_(inst_23801);var state_23852__$1 = state_23852;if(inst_23804)
{var statearr_23861_23900 = state_23852__$1;(statearr_23861_23900[1] = 7);
} else
{var statearr_23862_23901 = state_23852__$1;(statearr_23862_23901[1] = 8);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 6))
{var inst_23850 = (state_23852[2]);var state_23852__$1 = state_23852;return cljs.core.async.impl.ioc_helpers.return_chan(state_23852__$1,inst_23850);
} else
{if((state_val_23853 === 7))
{var inst_23801 = (state_23852[11]);var inst_23806 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23801);var state_23852__$1 = state_23852;var statearr_23863_23902 = state_23852__$1;(statearr_23863_23902[2] = inst_23806);
(statearr_23863_23902[1] = 9);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 8))
{var inst_23801 = (state_23852[11]);var state_23852__$1 = state_23852;var statearr_23864_23903 = state_23852__$1;(statearr_23864_23903[2] = inst_23801);
(statearr_23864_23903[1] = 9);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 9))
{var inst_23809 = (state_23852[12]);var inst_23809__$1 = (state_23852[2]);var inst_23810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23809__$1,cljs.core.constant$keyword$179);var inst_23811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23809__$1,cljs.core.constant$keyword$178);var inst_23812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23809__$1,cljs.core.constant$keyword$177);var state_23852__$1 = (function (){var statearr_23865 = state_23852;(statearr_23865[12] = inst_23809__$1);
(statearr_23865[13] = inst_23811);
(statearr_23865[14] = inst_23812);
return statearr_23865;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_23852__$1,10,inst_23810);
} else
{if((state_val_23853 === 10))
{var inst_23816 = (state_23852[15]);var inst_23817 = (state_23852[16]);var inst_23815 = (state_23852[2]);var inst_23816__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23815,0,null);var inst_23817__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23815,1,null);var inst_23818 = (inst_23816__$1 == null);var inst_23819 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23817__$1,change);var inst_23820 = (inst_23818) || (inst_23819);var state_23852__$1 = (function (){var statearr_23866 = state_23852;(statearr_23866[15] = inst_23816__$1);
(statearr_23866[16] = inst_23817__$1);
return statearr_23866;
})();if(cljs.core.truth_(inst_23820))
{var statearr_23867_23904 = state_23852__$1;(statearr_23867_23904[1] = 11);
} else
{var statearr_23868_23905 = state_23852__$1;(statearr_23868_23905[1] = 12);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 11))
{var inst_23816 = (state_23852[15]);var inst_23822 = (inst_23816 == null);var state_23852__$1 = state_23852;if(cljs.core.truth_(inst_23822))
{var statearr_23869_23906 = state_23852__$1;(statearr_23869_23906[1] = 14);
} else
{var statearr_23870_23907 = state_23852__$1;(statearr_23870_23907[1] = 15);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 12))
{var inst_23831 = (state_23852[17]);var inst_23817 = (state_23852[16]);var inst_23812 = (state_23852[14]);var inst_23831__$1 = (inst_23812.cljs$core$IFn$_invoke$arity$1 ? inst_23812.cljs$core$IFn$_invoke$arity$1(inst_23817) : inst_23812.call(null,inst_23817));var state_23852__$1 = (function (){var statearr_23871 = state_23852;(statearr_23871[17] = inst_23831__$1);
return statearr_23871;
})();if(cljs.core.truth_(inst_23831__$1))
{var statearr_23872_23908 = state_23852__$1;(statearr_23872_23908[1] = 17);
} else
{var statearr_23873_23909 = state_23852__$1;(statearr_23873_23909[1] = 18);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 13))
{var inst_23848 = (state_23852[2]);var state_23852__$1 = state_23852;var statearr_23874_23910 = state_23852__$1;(statearr_23874_23910[2] = inst_23848);
(statearr_23874_23910[1] = 6);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 14))
{var inst_23817 = (state_23852[16]);var inst_23824 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23817);var state_23852__$1 = state_23852;var statearr_23875_23911 = state_23852__$1;(statearr_23875_23911[2] = inst_23824);
(statearr_23875_23911[1] = 16);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 15))
{var state_23852__$1 = state_23852;var statearr_23876_23912 = state_23852__$1;(statearr_23876_23912[2] = null);
(statearr_23876_23912[1] = 16);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 16))
{var inst_23827 = (state_23852[2]);var inst_23828 = calc_state();var inst_23801 = inst_23828;var state_23852__$1 = (function (){var statearr_23877 = state_23852;(statearr_23877[18] = inst_23827);
(statearr_23877[11] = inst_23801);
return statearr_23877;
})();var statearr_23878_23913 = state_23852__$1;(statearr_23878_23913[2] = null);
(statearr_23878_23913[1] = 5);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 17))
{var inst_23831 = (state_23852[17]);var state_23852__$1 = state_23852;var statearr_23879_23914 = state_23852__$1;(statearr_23879_23914[2] = inst_23831);
(statearr_23879_23914[1] = 19);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 18))
{var inst_23817 = (state_23852[16]);var inst_23811 = (state_23852[13]);var inst_23812 = (state_23852[14]);var inst_23834 = cljs.core.empty_QMARK_(inst_23812);var inst_23835 = (inst_23811.cljs$core$IFn$_invoke$arity$1 ? inst_23811.cljs$core$IFn$_invoke$arity$1(inst_23817) : inst_23811.call(null,inst_23817));var inst_23836 = cljs.core.not(inst_23835);var inst_23837 = (inst_23834) && (inst_23836);var state_23852__$1 = state_23852;var statearr_23880_23915 = state_23852__$1;(statearr_23880_23915[2] = inst_23837);
(statearr_23880_23915[1] = 19);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 19))
{var inst_23839 = (state_23852[2]);var state_23852__$1 = state_23852;if(cljs.core.truth_(inst_23839))
{var statearr_23881_23916 = state_23852__$1;(statearr_23881_23916[1] = 20);
} else
{var statearr_23882_23917 = state_23852__$1;(statearr_23882_23917[1] = 21);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 20))
{var inst_23816 = (state_23852[15]);var state_23852__$1 = state_23852;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23852__$1,23,out,inst_23816);
} else
{if((state_val_23853 === 21))
{var state_23852__$1 = state_23852;var statearr_23883_23918 = state_23852__$1;(statearr_23883_23918[2] = null);
(statearr_23883_23918[1] = 22);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 22))
{var inst_23809 = (state_23852[12]);var inst_23845 = (state_23852[2]);var inst_23801 = inst_23809;var state_23852__$1 = (function (){var statearr_23884 = state_23852;(statearr_23884[11] = inst_23801);
(statearr_23884[19] = inst_23845);
return statearr_23884;
})();var statearr_23885_23919 = state_23852__$1;(statearr_23885_23919[2] = null);
(statearr_23885_23919[1] = 5);
return cljs.core.constant$keyword$167;
} else
{if((state_val_23853 === 23))
{var inst_23842 = (state_23852[2]);var state_23852__$1 = state_23852;var statearr_23886_23920 = state_23852__$1;(statearr_23886_23920[2] = inst_23842);
(statearr_23886_23920[1] = 22);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_23890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23890[0] = state_machine__5507__auto__);
(statearr_23890[1] = 1);
return statearr_23890;
});
var state_machine__5507__auto____1 = (function (state_23852){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23852);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23891){if((e23891 instanceof Object))
{var ex__5510__auto__ = e23891;var statearr_23892_23921 = state_23852;(statearr_23892_23921[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23852);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e23891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__23922 = state_23852;
state_23852 = G__23922;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23852){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23893 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23894);
return statearr_23893;
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
cljs.core.async.Pub = (function (){var obj23924 = {};return obj23924;
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
return (function (p1__23925_SHARP_){if(cljs.core.truth_((p1__23925_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23925_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23925_SHARP_.call(null,topic))))
{return p1__23925_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23925_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24050 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24050 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24051){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24051 = meta24051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24050.cljs$lang$type = true;
cljs.core.async.t24050.cljs$lang$ctorStr = "cljs.core.async/t24050";
cljs.core.async.t24050.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24050");
});})(mults,ensure_mult))
;
cljs.core.async.t24050.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24050.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24050.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24050.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24050.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24050.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24050.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24052){var self__ = this;
var _24052__$1 = this;return self__.meta24051;
});})(mults,ensure_mult))
;
cljs.core.async.t24050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24052,meta24051__$1){var self__ = this;
var _24052__$1 = this;return (new cljs.core.async.t24050(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24051__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24050 = ((function (mults,ensure_mult){
return (function __GT_t24050(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24051){return (new cljs.core.async.t24050(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24051));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24050(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24126){var state_val_24127 = (state_24126[1]);if((state_val_24127 === 1))
{var state_24126__$1 = state_24126;var statearr_24128_24175 = state_24126__$1;(statearr_24128_24175[2] = null);
(statearr_24128_24175[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 2))
{var state_24126__$1 = state_24126;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24126__$1,4,ch);
} else
{if((state_val_24127 === 3))
{var inst_24124 = (state_24126[2]);var state_24126__$1 = state_24126;return cljs.core.async.impl.ioc_helpers.return_chan(state_24126__$1,inst_24124);
} else
{if((state_val_24127 === 4))
{var inst_24055 = (state_24126[7]);var inst_24055__$1 = (state_24126[2]);var inst_24056 = (inst_24055__$1 == null);var state_24126__$1 = (function (){var statearr_24129 = state_24126;(statearr_24129[7] = inst_24055__$1);
return statearr_24129;
})();if(cljs.core.truth_(inst_24056))
{var statearr_24130_24176 = state_24126__$1;(statearr_24130_24176[1] = 5);
} else
{var statearr_24131_24177 = state_24126__$1;(statearr_24131_24177[1] = 6);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 5))
{var inst_24062 = cljs.core.deref(mults);var inst_24063 = cljs.core.vals(inst_24062);var inst_24064 = cljs.core.seq(inst_24063);var inst_24065 = inst_24064;var inst_24066 = null;var inst_24067 = 0;var inst_24068 = 0;var state_24126__$1 = (function (){var statearr_24132 = state_24126;(statearr_24132[8] = inst_24067);
(statearr_24132[9] = inst_24068);
(statearr_24132[10] = inst_24065);
(statearr_24132[11] = inst_24066);
return statearr_24132;
})();var statearr_24133_24178 = state_24126__$1;(statearr_24133_24178[2] = null);
(statearr_24133_24178[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 6))
{var inst_24055 = (state_24126[7]);var inst_24105 = (state_24126[12]);var inst_24103 = (state_24126[13]);var inst_24103__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24055) : topic_fn.call(null,inst_24055));var inst_24104 = cljs.core.deref(mults);var inst_24105__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24104,inst_24103__$1);var state_24126__$1 = (function (){var statearr_24134 = state_24126;(statearr_24134[12] = inst_24105__$1);
(statearr_24134[13] = inst_24103__$1);
return statearr_24134;
})();if(cljs.core.truth_(inst_24105__$1))
{var statearr_24135_24179 = state_24126__$1;(statearr_24135_24179[1] = 19);
} else
{var statearr_24136_24180 = state_24126__$1;(statearr_24136_24180[1] = 20);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 7))
{var inst_24122 = (state_24126[2]);var state_24126__$1 = state_24126;var statearr_24137_24181 = state_24126__$1;(statearr_24137_24181[2] = inst_24122);
(statearr_24137_24181[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 8))
{var inst_24067 = (state_24126[8]);var inst_24068 = (state_24126[9]);var inst_24070 = (inst_24068 < inst_24067);var inst_24071 = inst_24070;var state_24126__$1 = state_24126;if(cljs.core.truth_(inst_24071))
{var statearr_24141_24182 = state_24126__$1;(statearr_24141_24182[1] = 10);
} else
{var statearr_24142_24183 = state_24126__$1;(statearr_24142_24183[1] = 11);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 9))
{var inst_24101 = (state_24126[2]);var state_24126__$1 = state_24126;var statearr_24143_24184 = state_24126__$1;(statearr_24143_24184[2] = inst_24101);
(statearr_24143_24184[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 10))
{var inst_24067 = (state_24126[8]);var inst_24068 = (state_24126[9]);var inst_24065 = (state_24126[10]);var inst_24066 = (state_24126[11]);var inst_24073 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24066,inst_24068);var inst_24074 = cljs.core.async.muxch_STAR_(inst_24073);var inst_24075 = cljs.core.async.close_BANG_(inst_24074);var inst_24076 = (inst_24068 + 1);var tmp24138 = inst_24067;var tmp24139 = inst_24065;var tmp24140 = inst_24066;var inst_24065__$1 = tmp24139;var inst_24066__$1 = tmp24140;var inst_24067__$1 = tmp24138;var inst_24068__$1 = inst_24076;var state_24126__$1 = (function (){var statearr_24144 = state_24126;(statearr_24144[8] = inst_24067__$1);
(statearr_24144[9] = inst_24068__$1);
(statearr_24144[10] = inst_24065__$1);
(statearr_24144[11] = inst_24066__$1);
(statearr_24144[14] = inst_24075);
return statearr_24144;
})();var statearr_24145_24185 = state_24126__$1;(statearr_24145_24185[2] = null);
(statearr_24145_24185[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 11))
{var inst_24065 = (state_24126[10]);var inst_24079 = (state_24126[15]);var inst_24079__$1 = cljs.core.seq(inst_24065);var state_24126__$1 = (function (){var statearr_24146 = state_24126;(statearr_24146[15] = inst_24079__$1);
return statearr_24146;
})();if(inst_24079__$1)
{var statearr_24147_24186 = state_24126__$1;(statearr_24147_24186[1] = 13);
} else
{var statearr_24148_24187 = state_24126__$1;(statearr_24148_24187[1] = 14);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 12))
{var inst_24099 = (state_24126[2]);var state_24126__$1 = state_24126;var statearr_24149_24188 = state_24126__$1;(statearr_24149_24188[2] = inst_24099);
(statearr_24149_24188[1] = 9);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 13))
{var inst_24079 = (state_24126[15]);var inst_24081 = cljs.core.chunked_seq_QMARK_(inst_24079);var state_24126__$1 = state_24126;if(inst_24081)
{var statearr_24150_24189 = state_24126__$1;(statearr_24150_24189[1] = 16);
} else
{var statearr_24151_24190 = state_24126__$1;(statearr_24151_24190[1] = 17);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 14))
{var state_24126__$1 = state_24126;var statearr_24152_24191 = state_24126__$1;(statearr_24152_24191[2] = null);
(statearr_24152_24191[1] = 15);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 15))
{var inst_24097 = (state_24126[2]);var state_24126__$1 = state_24126;var statearr_24153_24192 = state_24126__$1;(statearr_24153_24192[2] = inst_24097);
(statearr_24153_24192[1] = 12);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 16))
{var inst_24079 = (state_24126[15]);var inst_24083 = cljs.core.chunk_first(inst_24079);var inst_24084 = cljs.core.chunk_rest(inst_24079);var inst_24085 = cljs.core.count(inst_24083);var inst_24065 = inst_24084;var inst_24066 = inst_24083;var inst_24067 = inst_24085;var inst_24068 = 0;var state_24126__$1 = (function (){var statearr_24154 = state_24126;(statearr_24154[8] = inst_24067);
(statearr_24154[9] = inst_24068);
(statearr_24154[10] = inst_24065);
(statearr_24154[11] = inst_24066);
return statearr_24154;
})();var statearr_24155_24193 = state_24126__$1;(statearr_24155_24193[2] = null);
(statearr_24155_24193[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 17))
{var inst_24079 = (state_24126[15]);var inst_24088 = cljs.core.first(inst_24079);var inst_24089 = cljs.core.async.muxch_STAR_(inst_24088);var inst_24090 = cljs.core.async.close_BANG_(inst_24089);var inst_24091 = cljs.core.next(inst_24079);var inst_24065 = inst_24091;var inst_24066 = null;var inst_24067 = 0;var inst_24068 = 0;var state_24126__$1 = (function (){var statearr_24156 = state_24126;(statearr_24156[8] = inst_24067);
(statearr_24156[16] = inst_24090);
(statearr_24156[9] = inst_24068);
(statearr_24156[10] = inst_24065);
(statearr_24156[11] = inst_24066);
return statearr_24156;
})();var statearr_24157_24194 = state_24126__$1;(statearr_24157_24194[2] = null);
(statearr_24157_24194[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 18))
{var inst_24094 = (state_24126[2]);var state_24126__$1 = state_24126;var statearr_24158_24195 = state_24126__$1;(statearr_24158_24195[2] = inst_24094);
(statearr_24158_24195[1] = 15);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 19))
{var state_24126__$1 = state_24126;var statearr_24159_24196 = state_24126__$1;(statearr_24159_24196[2] = null);
(statearr_24159_24196[1] = 24);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 20))
{var state_24126__$1 = state_24126;var statearr_24160_24197 = state_24126__$1;(statearr_24160_24197[2] = null);
(statearr_24160_24197[1] = 21);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 21))
{var inst_24119 = (state_24126[2]);var state_24126__$1 = (function (){var statearr_24161 = state_24126;(statearr_24161[17] = inst_24119);
return statearr_24161;
})();var statearr_24162_24198 = state_24126__$1;(statearr_24162_24198[2] = null);
(statearr_24162_24198[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 22))
{var inst_24116 = (state_24126[2]);var state_24126__$1 = state_24126;var statearr_24163_24199 = state_24126__$1;(statearr_24163_24199[2] = inst_24116);
(statearr_24163_24199[1] = 21);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 23))
{var inst_24103 = (state_24126[13]);var inst_24107 = (state_24126[2]);var inst_24108 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24103);var state_24126__$1 = (function (){var statearr_24164 = state_24126;(statearr_24164[18] = inst_24107);
return statearr_24164;
})();var statearr_24165_24200 = state_24126__$1;(statearr_24165_24200[2] = inst_24108);
cljs.core.async.impl.ioc_helpers.process_exception(state_24126__$1);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24127 === 24))
{var inst_24055 = (state_24126[7]);var inst_24105 = (state_24126[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24126,23,Object,null,22);var inst_24112 = cljs.core.async.muxch_STAR_(inst_24105);var state_24126__$1 = state_24126;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24126__$1,25,inst_24112,inst_24055);
} else
{if((state_val_24127 === 25))
{var inst_24114 = (state_24126[2]);var state_24126__$1 = state_24126;var statearr_24166_24201 = state_24126__$1;(statearr_24166_24201[2] = inst_24114);
cljs.core.async.impl.ioc_helpers.process_exception(state_24126__$1);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_24170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24170[0] = state_machine__5507__auto__);
(statearr_24170[1] = 1);
return statearr_24170;
});
var state_machine__5507__auto____1 = (function (state_24126){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24126);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24171){if((e24171 instanceof Object))
{var ex__5510__auto__ = e24171;var statearr_24172_24202 = state_24126;(statearr_24172_24202[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24126);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e24171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__24203 = state_24126;
state_24126 = G__24203;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24126){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24173 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24174);
return statearr_24173;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24310){var state_val_24311 = (state_24310[1]);if((state_val_24311 === 1))
{var state_24310__$1 = state_24310;var statearr_24312_24341 = state_24310__$1;(statearr_24312_24341[2] = null);
(statearr_24312_24341[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 2))
{var inst_24273 = cljs.core.reset_BANG_(dctr,cnt);var inst_24274 = 0;var state_24310__$1 = (function (){var statearr_24313 = state_24310;(statearr_24313[7] = inst_24274);
(statearr_24313[8] = inst_24273);
return statearr_24313;
})();var statearr_24314_24342 = state_24310__$1;(statearr_24314_24342[2] = null);
(statearr_24314_24342[1] = 4);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 3))
{var inst_24308 = (state_24310[2]);var state_24310__$1 = state_24310;return cljs.core.async.impl.ioc_helpers.return_chan(state_24310__$1,inst_24308);
} else
{if((state_val_24311 === 4))
{var inst_24274 = (state_24310[7]);var inst_24276 = (inst_24274 < cnt);var state_24310__$1 = state_24310;if(cljs.core.truth_(inst_24276))
{var statearr_24315_24343 = state_24310__$1;(statearr_24315_24343[1] = 6);
} else
{var statearr_24316_24344 = state_24310__$1;(statearr_24316_24344[1] = 7);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 5))
{var inst_24294 = (state_24310[2]);var state_24310__$1 = (function (){var statearr_24317 = state_24310;(statearr_24317[9] = inst_24294);
return statearr_24317;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24310__$1,12,dchan);
} else
{if((state_val_24311 === 6))
{var state_24310__$1 = state_24310;var statearr_24318_24345 = state_24310__$1;(statearr_24318_24345[2] = null);
(statearr_24318_24345[1] = 11);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 7))
{var state_24310__$1 = state_24310;var statearr_24319_24346 = state_24310__$1;(statearr_24319_24346[2] = null);
(statearr_24319_24346[1] = 8);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 8))
{var inst_24292 = (state_24310[2]);var state_24310__$1 = state_24310;var statearr_24320_24347 = state_24310__$1;(statearr_24320_24347[2] = inst_24292);
(statearr_24320_24347[1] = 5);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 9))
{var inst_24274 = (state_24310[7]);var inst_24287 = (state_24310[2]);var inst_24288 = (inst_24274 + 1);var inst_24274__$1 = inst_24288;var state_24310__$1 = (function (){var statearr_24321 = state_24310;(statearr_24321[10] = inst_24287);
(statearr_24321[7] = inst_24274__$1);
return statearr_24321;
})();var statearr_24322_24348 = state_24310__$1;(statearr_24322_24348[2] = null);
(statearr_24322_24348[1] = 4);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 10))
{var inst_24278 = (state_24310[2]);var inst_24279 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24310__$1 = (function (){var statearr_24323 = state_24310;(statearr_24323[11] = inst_24278);
return statearr_24323;
})();var statearr_24324_24349 = state_24310__$1;(statearr_24324_24349[2] = inst_24279);
cljs.core.async.impl.ioc_helpers.process_exception(state_24310__$1);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 11))
{var inst_24274 = (state_24310[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24310,10,Object,null,9);var inst_24283 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24274) : chs__$1.call(null,inst_24274));var inst_24284 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24274) : done.call(null,inst_24274));var inst_24285 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24283,inst_24284);var state_24310__$1 = state_24310;var statearr_24325_24350 = state_24310__$1;(statearr_24325_24350[2] = inst_24285);
cljs.core.async.impl.ioc_helpers.process_exception(state_24310__$1);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 12))
{var inst_24296 = (state_24310[12]);var inst_24296__$1 = (state_24310[2]);var inst_24297 = cljs.core.some(cljs.core.nil_QMARK_,inst_24296__$1);var state_24310__$1 = (function (){var statearr_24326 = state_24310;(statearr_24326[12] = inst_24296__$1);
return statearr_24326;
})();if(cljs.core.truth_(inst_24297))
{var statearr_24327_24351 = state_24310__$1;(statearr_24327_24351[1] = 13);
} else
{var statearr_24328_24352 = state_24310__$1;(statearr_24328_24352[1] = 14);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 13))
{var inst_24299 = cljs.core.async.close_BANG_(out);var state_24310__$1 = state_24310;var statearr_24329_24353 = state_24310__$1;(statearr_24329_24353[2] = inst_24299);
(statearr_24329_24353[1] = 15);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 14))
{var inst_24296 = (state_24310[12]);var inst_24301 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24296);var state_24310__$1 = state_24310;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24310__$1,16,out,inst_24301);
} else
{if((state_val_24311 === 15))
{var inst_24306 = (state_24310[2]);var state_24310__$1 = state_24310;var statearr_24330_24354 = state_24310__$1;(statearr_24330_24354[2] = inst_24306);
(statearr_24330_24354[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24311 === 16))
{var inst_24303 = (state_24310[2]);var state_24310__$1 = (function (){var statearr_24331 = state_24310;(statearr_24331[13] = inst_24303);
return statearr_24331;
})();var statearr_24332_24355 = state_24310__$1;(statearr_24332_24355[2] = null);
(statearr_24332_24355[1] = 2);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_24336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24336[0] = state_machine__5507__auto__);
(statearr_24336[1] = 1);
return statearr_24336;
});
var state_machine__5507__auto____1 = (function (state_24310){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24310);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24337){if((e24337 instanceof Object))
{var ex__5510__auto__ = e24337;var statearr_24338_24356 = state_24310;(statearr_24338_24356[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24310);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e24337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__24357 = state_24310;
state_24310 = G__24357;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24310){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24339 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24340);
return statearr_24339;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24441){var state_val_24442 = (state_24441[1]);if((state_val_24442 === 1))
{var inst_24412 = cljs.core.vec(chs);var inst_24413 = inst_24412;var state_24441__$1 = (function (){var statearr_24443 = state_24441;(statearr_24443[7] = inst_24413);
return statearr_24443;
})();var statearr_24444_24466 = state_24441__$1;(statearr_24444_24466[2] = null);
(statearr_24444_24466[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24442 === 2))
{var inst_24413 = (state_24441[7]);var inst_24415 = cljs.core.count(inst_24413);var inst_24416 = (inst_24415 > 0);var state_24441__$1 = state_24441;if(cljs.core.truth_(inst_24416))
{var statearr_24445_24467 = state_24441__$1;(statearr_24445_24467[1] = 4);
} else
{var statearr_24446_24468 = state_24441__$1;(statearr_24446_24468[1] = 5);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24442 === 3))
{var inst_24439 = (state_24441[2]);var state_24441__$1 = state_24441;return cljs.core.async.impl.ioc_helpers.return_chan(state_24441__$1,inst_24439);
} else
{if((state_val_24442 === 4))
{var inst_24413 = (state_24441[7]);var state_24441__$1 = state_24441;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24441__$1,7,inst_24413);
} else
{if((state_val_24442 === 5))
{var inst_24435 = cljs.core.async.close_BANG_(out);var state_24441__$1 = state_24441;var statearr_24447_24469 = state_24441__$1;(statearr_24447_24469[2] = inst_24435);
(statearr_24447_24469[1] = 6);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24442 === 6))
{var inst_24437 = (state_24441[2]);var state_24441__$1 = state_24441;var statearr_24448_24470 = state_24441__$1;(statearr_24448_24470[2] = inst_24437);
(statearr_24448_24470[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24442 === 7))
{var inst_24420 = (state_24441[8]);var inst_24421 = (state_24441[9]);var inst_24420__$1 = (state_24441[2]);var inst_24421__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24420__$1,0,null);var inst_24422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24420__$1,1,null);var inst_24423 = (inst_24421__$1 == null);var state_24441__$1 = (function (){var statearr_24449 = state_24441;(statearr_24449[8] = inst_24420__$1);
(statearr_24449[10] = inst_24422);
(statearr_24449[9] = inst_24421__$1);
return statearr_24449;
})();if(cljs.core.truth_(inst_24423))
{var statearr_24450_24471 = state_24441__$1;(statearr_24450_24471[1] = 8);
} else
{var statearr_24451_24472 = state_24441__$1;(statearr_24451_24472[1] = 9);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24442 === 8))
{var inst_24413 = (state_24441[7]);var inst_24420 = (state_24441[8]);var inst_24422 = (state_24441[10]);var inst_24421 = (state_24441[9]);var inst_24425 = (function (){var c = inst_24422;var v = inst_24421;var vec__24418 = inst_24420;var cs = inst_24413;return ((function (c,v,vec__24418,cs,inst_24413,inst_24420,inst_24422,inst_24421,state_val_24442){
return (function (p1__24358_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24358_SHARP_);
});
;})(c,v,vec__24418,cs,inst_24413,inst_24420,inst_24422,inst_24421,state_val_24442))
})();var inst_24426 = cljs.core.filterv(inst_24425,inst_24413);var inst_24413__$1 = inst_24426;var state_24441__$1 = (function (){var statearr_24452 = state_24441;(statearr_24452[7] = inst_24413__$1);
return statearr_24452;
})();var statearr_24453_24473 = state_24441__$1;(statearr_24453_24473[2] = null);
(statearr_24453_24473[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24442 === 9))
{var inst_24421 = (state_24441[9]);var state_24441__$1 = state_24441;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24441__$1,11,out,inst_24421);
} else
{if((state_val_24442 === 10))
{var inst_24433 = (state_24441[2]);var state_24441__$1 = state_24441;var statearr_24455_24474 = state_24441__$1;(statearr_24455_24474[2] = inst_24433);
(statearr_24455_24474[1] = 6);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24442 === 11))
{var inst_24413 = (state_24441[7]);var inst_24430 = (state_24441[2]);var tmp24454 = inst_24413;var inst_24413__$1 = tmp24454;var state_24441__$1 = (function (){var statearr_24456 = state_24441;(statearr_24456[7] = inst_24413__$1);
(statearr_24456[11] = inst_24430);
return statearr_24456;
})();var statearr_24457_24475 = state_24441__$1;(statearr_24457_24475[2] = null);
(statearr_24457_24475[1] = 2);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_24461 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24461[0] = state_machine__5507__auto__);
(statearr_24461[1] = 1);
return statearr_24461;
});
var state_machine__5507__auto____1 = (function (state_24441){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24441);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24462){if((e24462 instanceof Object))
{var ex__5510__auto__ = e24462;var statearr_24463_24476 = state_24441;(statearr_24463_24476[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24441);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e24462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__24477 = state_24441;
state_24441 = G__24477;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24441){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24464 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24465);
return statearr_24464;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24547){var state_val_24548 = (state_24547[1]);if((state_val_24548 === 1))
{var inst_24524 = 0;var state_24547__$1 = (function (){var statearr_24549 = state_24547;(statearr_24549[7] = inst_24524);
return statearr_24549;
})();var statearr_24550_24571 = state_24547__$1;(statearr_24550_24571[2] = null);
(statearr_24550_24571[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24548 === 2))
{var inst_24524 = (state_24547[7]);var inst_24526 = (inst_24524 < n);var state_24547__$1 = state_24547;if(cljs.core.truth_(inst_24526))
{var statearr_24551_24572 = state_24547__$1;(statearr_24551_24572[1] = 4);
} else
{var statearr_24552_24573 = state_24547__$1;(statearr_24552_24573[1] = 5);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24548 === 3))
{var inst_24544 = (state_24547[2]);var inst_24545 = cljs.core.async.close_BANG_(out);var state_24547__$1 = (function (){var statearr_24553 = state_24547;(statearr_24553[8] = inst_24544);
return statearr_24553;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24547__$1,inst_24545);
} else
{if((state_val_24548 === 4))
{var state_24547__$1 = state_24547;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24547__$1,7,ch);
} else
{if((state_val_24548 === 5))
{var state_24547__$1 = state_24547;var statearr_24554_24574 = state_24547__$1;(statearr_24554_24574[2] = null);
(statearr_24554_24574[1] = 6);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24548 === 6))
{var inst_24542 = (state_24547[2]);var state_24547__$1 = state_24547;var statearr_24555_24575 = state_24547__$1;(statearr_24555_24575[2] = inst_24542);
(statearr_24555_24575[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24548 === 7))
{var inst_24529 = (state_24547[9]);var inst_24529__$1 = (state_24547[2]);var inst_24530 = (inst_24529__$1 == null);var inst_24531 = cljs.core.not(inst_24530);var state_24547__$1 = (function (){var statearr_24556 = state_24547;(statearr_24556[9] = inst_24529__$1);
return statearr_24556;
})();if(inst_24531)
{var statearr_24557_24576 = state_24547__$1;(statearr_24557_24576[1] = 8);
} else
{var statearr_24558_24577 = state_24547__$1;(statearr_24558_24577[1] = 9);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24548 === 8))
{var inst_24529 = (state_24547[9]);var state_24547__$1 = state_24547;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24547__$1,11,out,inst_24529);
} else
{if((state_val_24548 === 9))
{var state_24547__$1 = state_24547;var statearr_24559_24578 = state_24547__$1;(statearr_24559_24578[2] = null);
(statearr_24559_24578[1] = 10);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24548 === 10))
{var inst_24539 = (state_24547[2]);var state_24547__$1 = state_24547;var statearr_24560_24579 = state_24547__$1;(statearr_24560_24579[2] = inst_24539);
(statearr_24560_24579[1] = 6);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24548 === 11))
{var inst_24524 = (state_24547[7]);var inst_24534 = (state_24547[2]);var inst_24535 = (inst_24524 + 1);var inst_24524__$1 = inst_24535;var state_24547__$1 = (function (){var statearr_24561 = state_24547;(statearr_24561[10] = inst_24534);
(statearr_24561[7] = inst_24524__$1);
return statearr_24561;
})();var statearr_24562_24580 = state_24547__$1;(statearr_24562_24580[2] = null);
(statearr_24562_24580[1] = 2);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_24566 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24566[0] = state_machine__5507__auto__);
(statearr_24566[1] = 1);
return statearr_24566;
});
var state_machine__5507__auto____1 = (function (state_24547){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24547);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24567){if((e24567 instanceof Object))
{var ex__5510__auto__ = e24567;var statearr_24568_24581 = state_24547;(statearr_24568_24581[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24547);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e24567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__24582 = state_24547;
state_24547 = G__24582;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24547){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24569 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24570);
return statearr_24569;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24654){var state_val_24655 = (state_24654[1]);if((state_val_24655 === 1))
{var inst_24631 = null;var state_24654__$1 = (function (){var statearr_24656 = state_24654;(statearr_24656[7] = inst_24631);
return statearr_24656;
})();var statearr_24657_24680 = state_24654__$1;(statearr_24657_24680[2] = null);
(statearr_24657_24680[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24655 === 2))
{var state_24654__$1 = state_24654;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24654__$1,4,ch);
} else
{if((state_val_24655 === 3))
{var inst_24651 = (state_24654[2]);var inst_24652 = cljs.core.async.close_BANG_(out);var state_24654__$1 = (function (){var statearr_24658 = state_24654;(statearr_24658[8] = inst_24651);
return statearr_24658;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24654__$1,inst_24652);
} else
{if((state_val_24655 === 4))
{var inst_24634 = (state_24654[9]);var inst_24634__$1 = (state_24654[2]);var inst_24635 = (inst_24634__$1 == null);var inst_24636 = cljs.core.not(inst_24635);var state_24654__$1 = (function (){var statearr_24659 = state_24654;(statearr_24659[9] = inst_24634__$1);
return statearr_24659;
})();if(inst_24636)
{var statearr_24660_24681 = state_24654__$1;(statearr_24660_24681[1] = 5);
} else
{var statearr_24661_24682 = state_24654__$1;(statearr_24661_24682[1] = 6);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24655 === 5))
{var inst_24634 = (state_24654[9]);var inst_24631 = (state_24654[7]);var inst_24638 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24634,inst_24631);var state_24654__$1 = state_24654;if(inst_24638)
{var statearr_24662_24683 = state_24654__$1;(statearr_24662_24683[1] = 8);
} else
{var statearr_24663_24684 = state_24654__$1;(statearr_24663_24684[1] = 9);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24655 === 6))
{var state_24654__$1 = state_24654;var statearr_24665_24685 = state_24654__$1;(statearr_24665_24685[2] = null);
(statearr_24665_24685[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24655 === 7))
{var inst_24649 = (state_24654[2]);var state_24654__$1 = state_24654;var statearr_24666_24686 = state_24654__$1;(statearr_24666_24686[2] = inst_24649);
(statearr_24666_24686[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24655 === 8))
{var inst_24631 = (state_24654[7]);var tmp24664 = inst_24631;var inst_24631__$1 = tmp24664;var state_24654__$1 = (function (){var statearr_24667 = state_24654;(statearr_24667[7] = inst_24631__$1);
return statearr_24667;
})();var statearr_24668_24687 = state_24654__$1;(statearr_24668_24687[2] = null);
(statearr_24668_24687[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24655 === 9))
{var inst_24634 = (state_24654[9]);var state_24654__$1 = state_24654;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24654__$1,11,out,inst_24634);
} else
{if((state_val_24655 === 10))
{var inst_24646 = (state_24654[2]);var state_24654__$1 = state_24654;var statearr_24669_24688 = state_24654__$1;(statearr_24669_24688[2] = inst_24646);
(statearr_24669_24688[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24655 === 11))
{var inst_24634 = (state_24654[9]);var inst_24643 = (state_24654[2]);var inst_24631 = inst_24634;var state_24654__$1 = (function (){var statearr_24670 = state_24654;(statearr_24670[10] = inst_24643);
(statearr_24670[7] = inst_24631);
return statearr_24670;
})();var statearr_24671_24689 = state_24654__$1;(statearr_24671_24689[2] = null);
(statearr_24671_24689[1] = 2);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_24675 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24675[0] = state_machine__5507__auto__);
(statearr_24675[1] = 1);
return statearr_24675;
});
var state_machine__5507__auto____1 = (function (state_24654){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24654);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24676){if((e24676 instanceof Object))
{var ex__5510__auto__ = e24676;var statearr_24677_24690 = state_24654;(statearr_24677_24690[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24654);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e24676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__24691 = state_24654;
state_24654 = G__24691;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24654){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24678 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24679);
return statearr_24678;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24796){var state_val_24797 = (state_24796[1]);if((state_val_24797 === 1))
{var inst_24759 = (new Array(n));var inst_24760 = inst_24759;var inst_24761 = 0;var state_24796__$1 = (function (){var statearr_24798 = state_24796;(statearr_24798[7] = inst_24760);
(statearr_24798[8] = inst_24761);
return statearr_24798;
})();var statearr_24799_24827 = state_24796__$1;(statearr_24799_24827[2] = null);
(statearr_24799_24827[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24797 === 2))
{var state_24796__$1 = state_24796;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24796__$1,4,ch);
} else
{if((state_val_24797 === 3))
{var inst_24794 = (state_24796[2]);var state_24796__$1 = state_24796;return cljs.core.async.impl.ioc_helpers.return_chan(state_24796__$1,inst_24794);
} else
{if((state_val_24797 === 4))
{var inst_24764 = (state_24796[9]);var inst_24764__$1 = (state_24796[2]);var inst_24765 = (inst_24764__$1 == null);var inst_24766 = cljs.core.not(inst_24765);var state_24796__$1 = (function (){var statearr_24800 = state_24796;(statearr_24800[9] = inst_24764__$1);
return statearr_24800;
})();if(inst_24766)
{var statearr_24801_24828 = state_24796__$1;(statearr_24801_24828[1] = 5);
} else
{var statearr_24802_24829 = state_24796__$1;(statearr_24802_24829[1] = 6);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24797 === 5))
{var inst_24760 = (state_24796[7]);var inst_24761 = (state_24796[8]);var inst_24769 = (state_24796[10]);var inst_24764 = (state_24796[9]);var inst_24768 = (inst_24760[inst_24761] = inst_24764);var inst_24769__$1 = (inst_24761 + 1);var inst_24770 = (inst_24769__$1 < n);var state_24796__$1 = (function (){var statearr_24803 = state_24796;(statearr_24803[11] = inst_24768);
(statearr_24803[10] = inst_24769__$1);
return statearr_24803;
})();if(cljs.core.truth_(inst_24770))
{var statearr_24804_24830 = state_24796__$1;(statearr_24804_24830[1] = 8);
} else
{var statearr_24805_24831 = state_24796__$1;(statearr_24805_24831[1] = 9);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24797 === 6))
{var inst_24761 = (state_24796[8]);var inst_24782 = (inst_24761 > 0);var state_24796__$1 = state_24796;if(cljs.core.truth_(inst_24782))
{var statearr_24807_24832 = state_24796__$1;(statearr_24807_24832[1] = 12);
} else
{var statearr_24808_24833 = state_24796__$1;(statearr_24808_24833[1] = 13);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24797 === 7))
{var inst_24792 = (state_24796[2]);var state_24796__$1 = state_24796;var statearr_24809_24834 = state_24796__$1;(statearr_24809_24834[2] = inst_24792);
(statearr_24809_24834[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24797 === 8))
{var inst_24760 = (state_24796[7]);var inst_24769 = (state_24796[10]);var tmp24806 = inst_24760;var inst_24760__$1 = tmp24806;var inst_24761 = inst_24769;var state_24796__$1 = (function (){var statearr_24810 = state_24796;(statearr_24810[7] = inst_24760__$1);
(statearr_24810[8] = inst_24761);
return statearr_24810;
})();var statearr_24811_24835 = state_24796__$1;(statearr_24811_24835[2] = null);
(statearr_24811_24835[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24797 === 9))
{var inst_24760 = (state_24796[7]);var inst_24774 = cljs.core.vec(inst_24760);var state_24796__$1 = state_24796;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24796__$1,11,out,inst_24774);
} else
{if((state_val_24797 === 10))
{var inst_24780 = (state_24796[2]);var state_24796__$1 = state_24796;var statearr_24812_24836 = state_24796__$1;(statearr_24812_24836[2] = inst_24780);
(statearr_24812_24836[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24797 === 11))
{var inst_24776 = (state_24796[2]);var inst_24777 = (new Array(n));var inst_24760 = inst_24777;var inst_24761 = 0;var state_24796__$1 = (function (){var statearr_24813 = state_24796;(statearr_24813[7] = inst_24760);
(statearr_24813[8] = inst_24761);
(statearr_24813[12] = inst_24776);
return statearr_24813;
})();var statearr_24814_24837 = state_24796__$1;(statearr_24814_24837[2] = null);
(statearr_24814_24837[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24797 === 12))
{var inst_24760 = (state_24796[7]);var inst_24784 = cljs.core.vec(inst_24760);var state_24796__$1 = state_24796;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24796__$1,15,out,inst_24784);
} else
{if((state_val_24797 === 13))
{var state_24796__$1 = state_24796;var statearr_24815_24838 = state_24796__$1;(statearr_24815_24838[2] = null);
(statearr_24815_24838[1] = 14);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24797 === 14))
{var inst_24789 = (state_24796[2]);var inst_24790 = cljs.core.async.close_BANG_(out);var state_24796__$1 = (function (){var statearr_24816 = state_24796;(statearr_24816[13] = inst_24789);
return statearr_24816;
})();var statearr_24817_24839 = state_24796__$1;(statearr_24817_24839[2] = inst_24790);
(statearr_24817_24839[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24797 === 15))
{var inst_24786 = (state_24796[2]);var state_24796__$1 = state_24796;var statearr_24818_24840 = state_24796__$1;(statearr_24818_24840[2] = inst_24786);
(statearr_24818_24840[1] = 14);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_24822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24822[0] = state_machine__5507__auto__);
(statearr_24822[1] = 1);
return statearr_24822;
});
var state_machine__5507__auto____1 = (function (state_24796){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24796);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24823){if((e24823 instanceof Object))
{var ex__5510__auto__ = e24823;var statearr_24824_24841 = state_24796;(statearr_24824_24841[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24796);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e24823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__24842 = state_24796;
state_24796 = G__24842;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24796){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24825 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24826);
return statearr_24825;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24955){var state_val_24956 = (state_24955[1]);if((state_val_24956 === 1))
{var inst_24914 = [];var inst_24915 = inst_24914;var inst_24916 = cljs.core.constant$keyword$180;var state_24955__$1 = (function (){var statearr_24957 = state_24955;(statearr_24957[7] = inst_24916);
(statearr_24957[8] = inst_24915);
return statearr_24957;
})();var statearr_24958_24986 = state_24955__$1;(statearr_24958_24986[2] = null);
(statearr_24958_24986[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24956 === 2))
{var state_24955__$1 = state_24955;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24955__$1,4,ch);
} else
{if((state_val_24956 === 3))
{var inst_24953 = (state_24955[2]);var state_24955__$1 = state_24955;return cljs.core.async.impl.ioc_helpers.return_chan(state_24955__$1,inst_24953);
} else
{if((state_val_24956 === 4))
{var inst_24919 = (state_24955[9]);var inst_24919__$1 = (state_24955[2]);var inst_24920 = (inst_24919__$1 == null);var inst_24921 = cljs.core.not(inst_24920);var state_24955__$1 = (function (){var statearr_24959 = state_24955;(statearr_24959[9] = inst_24919__$1);
return statearr_24959;
})();if(inst_24921)
{var statearr_24960_24987 = state_24955__$1;(statearr_24960_24987[1] = 5);
} else
{var statearr_24961_24988 = state_24955__$1;(statearr_24961_24988[1] = 6);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24956 === 5))
{var inst_24923 = (state_24955[10]);var inst_24916 = (state_24955[7]);var inst_24919 = (state_24955[9]);var inst_24923__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24919) : f.call(null,inst_24919));var inst_24924 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24923__$1,inst_24916);var inst_24925 = cljs.core.keyword_identical_QMARK_(inst_24916,cljs.core.constant$keyword$180);var inst_24926 = (inst_24924) || (inst_24925);var state_24955__$1 = (function (){var statearr_24962 = state_24955;(statearr_24962[10] = inst_24923__$1);
return statearr_24962;
})();if(cljs.core.truth_(inst_24926))
{var statearr_24963_24989 = state_24955__$1;(statearr_24963_24989[1] = 8);
} else
{var statearr_24964_24990 = state_24955__$1;(statearr_24964_24990[1] = 9);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24956 === 6))
{var inst_24915 = (state_24955[8]);var inst_24940 = inst_24915.length;var inst_24941 = (inst_24940 > 0);var state_24955__$1 = state_24955;if(cljs.core.truth_(inst_24941))
{var statearr_24966_24991 = state_24955__$1;(statearr_24966_24991[1] = 12);
} else
{var statearr_24967_24992 = state_24955__$1;(statearr_24967_24992[1] = 13);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_24956 === 7))
{var inst_24951 = (state_24955[2]);var state_24955__$1 = state_24955;var statearr_24968_24993 = state_24955__$1;(statearr_24968_24993[2] = inst_24951);
(statearr_24968_24993[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24956 === 8))
{var inst_24923 = (state_24955[10]);var inst_24915 = (state_24955[8]);var inst_24919 = (state_24955[9]);var inst_24928 = inst_24915.push(inst_24919);var tmp24965 = inst_24915;var inst_24915__$1 = tmp24965;var inst_24916 = inst_24923;var state_24955__$1 = (function (){var statearr_24969 = state_24955;(statearr_24969[7] = inst_24916);
(statearr_24969[8] = inst_24915__$1);
(statearr_24969[11] = inst_24928);
return statearr_24969;
})();var statearr_24970_24994 = state_24955__$1;(statearr_24970_24994[2] = null);
(statearr_24970_24994[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24956 === 9))
{var inst_24915 = (state_24955[8]);var inst_24931 = cljs.core.vec(inst_24915);var state_24955__$1 = state_24955;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24955__$1,11,out,inst_24931);
} else
{if((state_val_24956 === 10))
{var inst_24938 = (state_24955[2]);var state_24955__$1 = state_24955;var statearr_24971_24995 = state_24955__$1;(statearr_24971_24995[2] = inst_24938);
(statearr_24971_24995[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24956 === 11))
{var inst_24923 = (state_24955[10]);var inst_24919 = (state_24955[9]);var inst_24933 = (state_24955[2]);var inst_24934 = [];var inst_24935 = inst_24934.push(inst_24919);var inst_24915 = inst_24934;var inst_24916 = inst_24923;var state_24955__$1 = (function (){var statearr_24972 = state_24955;(statearr_24972[12] = inst_24935);
(statearr_24972[7] = inst_24916);
(statearr_24972[8] = inst_24915);
(statearr_24972[13] = inst_24933);
return statearr_24972;
})();var statearr_24973_24996 = state_24955__$1;(statearr_24973_24996[2] = null);
(statearr_24973_24996[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24956 === 12))
{var inst_24915 = (state_24955[8]);var inst_24943 = cljs.core.vec(inst_24915);var state_24955__$1 = state_24955;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24955__$1,15,out,inst_24943);
} else
{if((state_val_24956 === 13))
{var state_24955__$1 = state_24955;var statearr_24974_24997 = state_24955__$1;(statearr_24974_24997[2] = null);
(statearr_24974_24997[1] = 14);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24956 === 14))
{var inst_24948 = (state_24955[2]);var inst_24949 = cljs.core.async.close_BANG_(out);var state_24955__$1 = (function (){var statearr_24975 = state_24955;(statearr_24975[14] = inst_24948);
return statearr_24975;
})();var statearr_24976_24998 = state_24955__$1;(statearr_24976_24998[2] = inst_24949);
(statearr_24976_24998[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_24956 === 15))
{var inst_24945 = (state_24955[2]);var state_24955__$1 = state_24955;var statearr_24977_24999 = state_24955__$1;(statearr_24977_24999[2] = inst_24945);
(statearr_24977_24999[1] = 14);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_24981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24981[0] = state_machine__5507__auto__);
(statearr_24981[1] = 1);
return statearr_24981;
});
var state_machine__5507__auto____1 = (function (state_24955){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24955);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24982){if((e24982 instanceof Object))
{var ex__5510__auto__ = e24982;var statearr_24983_25000 = state_24955;(statearr_24983_25000[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24955);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e24982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__25001 = state_24955;
state_24955 = G__25001;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24955){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24984 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24985);
return statearr_24984;
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
