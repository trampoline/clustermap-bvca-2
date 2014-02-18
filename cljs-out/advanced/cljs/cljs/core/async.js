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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24265 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24265 = (function (f,fn_handler,meta24266){
this.f = f;
this.fn_handler = fn_handler;
this.meta24266 = meta24266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24265.cljs$lang$type = true;
cljs.core.async.t24265.cljs$lang$ctorStr = "cljs.core.async/t24265";
cljs.core.async.t24265.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24265");
});
cljs.core.async.t24265.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24267){var self__ = this;
var _24267__$1 = this;return self__.meta24266;
});
cljs.core.async.t24265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24267,meta24266__$1){var self__ = this;
var _24267__$1 = this;return (new cljs.core.async.t24265(self__.f,self__.fn_handler,meta24266__$1));
});
cljs.core.async.__GT_t24265 = (function __GT_t24265(f__$1,fn_handler__$1,meta24266){return (new cljs.core.async.t24265(f__$1,fn_handler__$1,meta24266));
});
}
return (new cljs.core.async.t24265(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24269 = buff;if(G__24269)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24269.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24269.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24269);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24269);
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
{var val_24270 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24270) : fn1.call(null,val_24270));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24270) : fn1.call(null,val_24270));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24271 = n;var x_24272 = 0;while(true){
if((x_24272 < n__4248__auto___24271))
{(a[x_24272] = 0);
{
var G__24273 = (x_24272 + 1);
x_24272 = G__24273;
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
var G__24274 = (i + 1);
i = G__24274;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24278 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24278 = (function (flag,alt_flag,meta24279){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24279 = meta24279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24278.cljs$lang$type = true;
cljs.core.async.t24278.cljs$lang$ctorStr = "cljs.core.async/t24278";
cljs.core.async.t24278.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24278");
});
cljs.core.async.t24278.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24280){var self__ = this;
var _24280__$1 = this;return self__.meta24279;
});
cljs.core.async.t24278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24280,meta24279__$1){var self__ = this;
var _24280__$1 = this;return (new cljs.core.async.t24278(self__.flag,self__.alt_flag,meta24279__$1));
});
cljs.core.async.__GT_t24278 = (function __GT_t24278(flag__$1,alt_flag__$1,meta24279){return (new cljs.core.async.t24278(flag__$1,alt_flag__$1,meta24279));
});
}
return (new cljs.core.async.t24278(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24284 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24284 = (function (cb,flag,alt_handler,meta24285){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24285 = meta24285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24284.cljs$lang$type = true;
cljs.core.async.t24284.cljs$lang$ctorStr = "cljs.core.async/t24284";
cljs.core.async.t24284.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24284");
});
cljs.core.async.t24284.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24286){var self__ = this;
var _24286__$1 = this;return self__.meta24285;
});
cljs.core.async.t24284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24286,meta24285__$1){var self__ = this;
var _24286__$1 = this;return (new cljs.core.async.t24284(self__.cb,self__.flag,self__.alt_handler,meta24285__$1));
});
cljs.core.async.__GT_t24284 = (function __GT_t24284(cb__$1,flag__$1,alt_handler__$1,meta24285){return (new cljs.core.async.t24284(cb__$1,flag__$1,alt_handler__$1,meta24285));
});
}
return (new cljs.core.async.t24284(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24287_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24287_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24287_SHARP_,port], null)));
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
var G__24288 = (i + 1);
i = G__24288;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$230))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$230], null));
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
var alts_BANG___delegate = function (ports,p__24289){var map__24291 = p__24289;var map__24291__$1 = ((cljs.core.seq_QMARK_(map__24291))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24291):map__24291);var opts = map__24291__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24289 = null;if (arguments.length > 1) {
  p__24289 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24289);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24292){
var ports = cljs.core.first(arglist__24292);
var p__24289 = cljs.core.rest(arglist__24292);
return alts_BANG___delegate(ports,p__24289);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24300 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24300 = (function (ch,f,map_LT_,meta24301){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24301 = meta24301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24300.cljs$lang$type = true;
cljs.core.async.t24300.cljs$lang$ctorStr = "cljs.core.async/t24300";
cljs.core.async.t24300.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24300");
});
cljs.core.async.t24300.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24300.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24303 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24303 = (function (fn1,_,meta24301,ch,f,map_LT_,meta24304){
this.fn1 = fn1;
this._ = _;
this.meta24301 = meta24301;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24304 = meta24304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24303.cljs$lang$type = true;
cljs.core.async.t24303.cljs$lang$ctorStr = "cljs.core.async/t24303";
cljs.core.async.t24303.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24303");
});
cljs.core.async.t24303.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24303.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24303.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24303.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24293_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24293_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24293_SHARP_) : self__.f.call(null,p1__24293_SHARP_)))) : f1.call(null,(((p1__24293_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24293_SHARP_) : self__.f.call(null,p1__24293_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24305){var self__ = this;
var _24305__$1 = this;return self__.meta24304;
});
cljs.core.async.t24303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24305,meta24304__$1){var self__ = this;
var _24305__$1 = this;return (new cljs.core.async.t24303(self__.fn1,self__._,self__.meta24301,self__.ch,self__.f,self__.map_LT_,meta24304__$1));
});
cljs.core.async.__GT_t24303 = (function __GT_t24303(fn1__$1,___$2,meta24301__$1,ch__$2,f__$2,map_LT___$2,meta24304){return (new cljs.core.async.t24303(fn1__$1,___$2,meta24301__$1,ch__$2,f__$2,map_LT___$2,meta24304));
});
}
return (new cljs.core.async.t24303(fn1,___$1,self__.meta24301,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24300.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24302){var self__ = this;
var _24302__$1 = this;return self__.meta24301;
});
cljs.core.async.t24300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24302,meta24301__$1){var self__ = this;
var _24302__$1 = this;return (new cljs.core.async.t24300(self__.ch,self__.f,self__.map_LT_,meta24301__$1));
});
cljs.core.async.__GT_t24300 = (function __GT_t24300(ch__$1,f__$1,map_LT___$1,meta24301){return (new cljs.core.async.t24300(ch__$1,f__$1,map_LT___$1,meta24301));
});
}
return (new cljs.core.async.t24300(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24309 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24309 = (function (ch,f,map_GT_,meta24310){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24310 = meta24310;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24309.cljs$lang$type = true;
cljs.core.async.t24309.cljs$lang$ctorStr = "cljs.core.async/t24309";
cljs.core.async.t24309.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24309");
});
cljs.core.async.t24309.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24309.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24309.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24309.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24309.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24309.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24311){var self__ = this;
var _24311__$1 = this;return self__.meta24310;
});
cljs.core.async.t24309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24311,meta24310__$1){var self__ = this;
var _24311__$1 = this;return (new cljs.core.async.t24309(self__.ch,self__.f,self__.map_GT_,meta24310__$1));
});
cljs.core.async.__GT_t24309 = (function __GT_t24309(ch__$1,f__$1,map_GT___$1,meta24310){return (new cljs.core.async.t24309(ch__$1,f__$1,map_GT___$1,meta24310));
});
}
return (new cljs.core.async.t24309(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24315 = (function (ch,p,filter_GT_,meta24316){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24316 = meta24316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24315.cljs$lang$type = true;
cljs.core.async.t24315.cljs$lang$ctorStr = "cljs.core.async/t24315";
cljs.core.async.t24315.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24315");
});
cljs.core.async.t24315.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24315.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24315.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24317){var self__ = this;
var _24317__$1 = this;return self__.meta24316;
});
cljs.core.async.t24315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24317,meta24316__$1){var self__ = this;
var _24317__$1 = this;return (new cljs.core.async.t24315(self__.ch,self__.p,self__.filter_GT_,meta24316__$1));
});
cljs.core.async.__GT_t24315 = (function __GT_t24315(ch__$1,p__$1,filter_GT___$1,meta24316){return (new cljs.core.async.t24315(ch__$1,p__$1,filter_GT___$1,meta24316));
});
}
return (new cljs.core.async.t24315(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24379){var state_val_24380 = (state_24379[1]);if((state_val_24380 === 1))
{var state_24379__$1 = state_24379;var statearr_24381_24401 = state_24379__$1;(statearr_24381_24401[2] = null);
(statearr_24381_24401[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24380 === 2))
{var state_24379__$1 = state_24379;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24379__$1,4,ch);
} else
{if((state_val_24380 === 3))
{var inst_24377 = (state_24379[2]);var state_24379__$1 = state_24379;return cljs.core.async.impl.ioc_helpers.return_chan(state_24379__$1,inst_24377);
} else
{if((state_val_24380 === 4))
{var inst_24361 = (state_24379[7]);var inst_24361__$1 = (state_24379[2]);var inst_24362 = (inst_24361__$1 == null);var state_24379__$1 = (function (){var statearr_24382 = state_24379;(statearr_24382[7] = inst_24361__$1);
return statearr_24382;
})();if(cljs.core.truth_(inst_24362))
{var statearr_24383_24402 = state_24379__$1;(statearr_24383_24402[1] = 5);
} else
{var statearr_24384_24403 = state_24379__$1;(statearr_24384_24403[1] = 6);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24380 === 5))
{var inst_24364 = cljs.core.async.close_BANG_(out);var state_24379__$1 = state_24379;var statearr_24385_24404 = state_24379__$1;(statearr_24385_24404[2] = inst_24364);
(statearr_24385_24404[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24380 === 6))
{var inst_24361 = (state_24379[7]);var inst_24366 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24361) : p.call(null,inst_24361));var state_24379__$1 = state_24379;if(cljs.core.truth_(inst_24366))
{var statearr_24386_24405 = state_24379__$1;(statearr_24386_24405[1] = 8);
} else
{var statearr_24387_24406 = state_24379__$1;(statearr_24387_24406[1] = 9);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24380 === 7))
{var inst_24375 = (state_24379[2]);var state_24379__$1 = state_24379;var statearr_24388_24407 = state_24379__$1;(statearr_24388_24407[2] = inst_24375);
(statearr_24388_24407[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24380 === 8))
{var inst_24361 = (state_24379[7]);var state_24379__$1 = state_24379;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24379__$1,11,out,inst_24361);
} else
{if((state_val_24380 === 9))
{var state_24379__$1 = state_24379;var statearr_24389_24408 = state_24379__$1;(statearr_24389_24408[2] = null);
(statearr_24389_24408[1] = 10);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24380 === 10))
{var inst_24372 = (state_24379[2]);var state_24379__$1 = (function (){var statearr_24390 = state_24379;(statearr_24390[8] = inst_24372);
return statearr_24390;
})();var statearr_24391_24409 = state_24379__$1;(statearr_24391_24409[2] = null);
(statearr_24391_24409[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24380 === 11))
{var inst_24369 = (state_24379[2]);var state_24379__$1 = state_24379;var statearr_24392_24410 = state_24379__$1;(statearr_24392_24410[2] = inst_24369);
(statearr_24392_24410[1] = 10);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_24396 = [null,null,null,null,null,null,null,null,null];(statearr_24396[0] = state_machine__5507__auto__);
(statearr_24396[1] = 1);
return statearr_24396;
});
var state_machine__5507__auto____1 = (function (state_24379){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24379);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24397){if((e24397 instanceof Object))
{var ex__5510__auto__ = e24397;var statearr_24398_24411 = state_24379;(statearr_24398_24411[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24379);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e24397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__24412 = state_24379;
state_24379 = G__24412;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24379){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24399 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24400);
return statearr_24399;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24564){var state_val_24565 = (state_24564[1]);if((state_val_24565 === 1))
{var state_24564__$1 = state_24564;var statearr_24566_24603 = state_24564__$1;(statearr_24566_24603[2] = null);
(statearr_24566_24603[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 2))
{var state_24564__$1 = state_24564;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24564__$1,4,in$);
} else
{if((state_val_24565 === 3))
{var inst_24562 = (state_24564[2]);var state_24564__$1 = state_24564;return cljs.core.async.impl.ioc_helpers.return_chan(state_24564__$1,inst_24562);
} else
{if((state_val_24565 === 4))
{var inst_24510 = (state_24564[7]);var inst_24510__$1 = (state_24564[2]);var inst_24511 = (inst_24510__$1 == null);var state_24564__$1 = (function (){var statearr_24567 = state_24564;(statearr_24567[7] = inst_24510__$1);
return statearr_24567;
})();if(cljs.core.truth_(inst_24511))
{var statearr_24568_24604 = state_24564__$1;(statearr_24568_24604[1] = 5);
} else
{var statearr_24569_24605 = state_24564__$1;(statearr_24569_24605[1] = 6);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 5))
{var inst_24513 = cljs.core.async.close_BANG_(out);var state_24564__$1 = state_24564;var statearr_24570_24606 = state_24564__$1;(statearr_24570_24606[2] = inst_24513);
(statearr_24570_24606[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 6))
{var inst_24510 = (state_24564[7]);var inst_24515 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24510) : f.call(null,inst_24510));var inst_24520 = cljs.core.seq(inst_24515);var inst_24521 = inst_24520;var inst_24522 = null;var inst_24523 = 0;var inst_24524 = 0;var state_24564__$1 = (function (){var statearr_24571 = state_24564;(statearr_24571[8] = inst_24524);
(statearr_24571[9] = inst_24523);
(statearr_24571[10] = inst_24522);
(statearr_24571[11] = inst_24521);
return statearr_24571;
})();var statearr_24572_24607 = state_24564__$1;(statearr_24572_24607[2] = null);
(statearr_24572_24607[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 7))
{var inst_24560 = (state_24564[2]);var state_24564__$1 = state_24564;var statearr_24573_24608 = state_24564__$1;(statearr_24573_24608[2] = inst_24560);
(statearr_24573_24608[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 8))
{var inst_24524 = (state_24564[8]);var inst_24523 = (state_24564[9]);var inst_24526 = (inst_24524 < inst_24523);var inst_24527 = inst_24526;var state_24564__$1 = state_24564;if(cljs.core.truth_(inst_24527))
{var statearr_24574_24609 = state_24564__$1;(statearr_24574_24609[1] = 10);
} else
{var statearr_24575_24610 = state_24564__$1;(statearr_24575_24610[1] = 11);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 9))
{var inst_24557 = (state_24564[2]);var state_24564__$1 = (function (){var statearr_24576 = state_24564;(statearr_24576[12] = inst_24557);
return statearr_24576;
})();var statearr_24577_24611 = state_24564__$1;(statearr_24577_24611[2] = null);
(statearr_24577_24611[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 10))
{var inst_24524 = (state_24564[8]);var inst_24522 = (state_24564[10]);var inst_24529 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24522,inst_24524);var state_24564__$1 = state_24564;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24564__$1,13,out,inst_24529);
} else
{if((state_val_24565 === 11))
{var inst_24521 = (state_24564[11]);var inst_24535 = (state_24564[13]);var inst_24535__$1 = cljs.core.seq(inst_24521);var state_24564__$1 = (function (){var statearr_24581 = state_24564;(statearr_24581[13] = inst_24535__$1);
return statearr_24581;
})();if(inst_24535__$1)
{var statearr_24582_24612 = state_24564__$1;(statearr_24582_24612[1] = 14);
} else
{var statearr_24583_24613 = state_24564__$1;(statearr_24583_24613[1] = 15);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 12))
{var inst_24555 = (state_24564[2]);var state_24564__$1 = state_24564;var statearr_24584_24614 = state_24564__$1;(statearr_24584_24614[2] = inst_24555);
(statearr_24584_24614[1] = 9);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 13))
{var inst_24524 = (state_24564[8]);var inst_24523 = (state_24564[9]);var inst_24522 = (state_24564[10]);var inst_24521 = (state_24564[11]);var inst_24531 = (state_24564[2]);var inst_24532 = (inst_24524 + 1);var tmp24578 = inst_24523;var tmp24579 = inst_24522;var tmp24580 = inst_24521;var inst_24521__$1 = tmp24580;var inst_24522__$1 = tmp24579;var inst_24523__$1 = tmp24578;var inst_24524__$1 = inst_24532;var state_24564__$1 = (function (){var statearr_24585 = state_24564;(statearr_24585[8] = inst_24524__$1);
(statearr_24585[14] = inst_24531);
(statearr_24585[9] = inst_24523__$1);
(statearr_24585[10] = inst_24522__$1);
(statearr_24585[11] = inst_24521__$1);
return statearr_24585;
})();var statearr_24586_24615 = state_24564__$1;(statearr_24586_24615[2] = null);
(statearr_24586_24615[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 14))
{var inst_24535 = (state_24564[13]);var inst_24537 = cljs.core.chunked_seq_QMARK_(inst_24535);var state_24564__$1 = state_24564;if(inst_24537)
{var statearr_24587_24616 = state_24564__$1;(statearr_24587_24616[1] = 17);
} else
{var statearr_24588_24617 = state_24564__$1;(statearr_24588_24617[1] = 18);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 15))
{var state_24564__$1 = state_24564;var statearr_24589_24618 = state_24564__$1;(statearr_24589_24618[2] = null);
(statearr_24589_24618[1] = 16);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 16))
{var inst_24553 = (state_24564[2]);var state_24564__$1 = state_24564;var statearr_24590_24619 = state_24564__$1;(statearr_24590_24619[2] = inst_24553);
(statearr_24590_24619[1] = 12);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 17))
{var inst_24535 = (state_24564[13]);var inst_24539 = cljs.core.chunk_first(inst_24535);var inst_24540 = cljs.core.chunk_rest(inst_24535);var inst_24541 = cljs.core.count(inst_24539);var inst_24521 = inst_24540;var inst_24522 = inst_24539;var inst_24523 = inst_24541;var inst_24524 = 0;var state_24564__$1 = (function (){var statearr_24591 = state_24564;(statearr_24591[8] = inst_24524);
(statearr_24591[9] = inst_24523);
(statearr_24591[10] = inst_24522);
(statearr_24591[11] = inst_24521);
return statearr_24591;
})();var statearr_24592_24620 = state_24564__$1;(statearr_24592_24620[2] = null);
(statearr_24592_24620[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 18))
{var inst_24535 = (state_24564[13]);var inst_24544 = cljs.core.first(inst_24535);var state_24564__$1 = state_24564;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24564__$1,20,out,inst_24544);
} else
{if((state_val_24565 === 19))
{var inst_24550 = (state_24564[2]);var state_24564__$1 = state_24564;var statearr_24593_24621 = state_24564__$1;(statearr_24593_24621[2] = inst_24550);
(statearr_24593_24621[1] = 16);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24565 === 20))
{var inst_24535 = (state_24564[13]);var inst_24546 = (state_24564[2]);var inst_24547 = cljs.core.next(inst_24535);var inst_24521 = inst_24547;var inst_24522 = null;var inst_24523 = 0;var inst_24524 = 0;var state_24564__$1 = (function (){var statearr_24594 = state_24564;(statearr_24594[8] = inst_24524);
(statearr_24594[9] = inst_24523);
(statearr_24594[10] = inst_24522);
(statearr_24594[11] = inst_24521);
(statearr_24594[15] = inst_24546);
return statearr_24594;
})();var statearr_24595_24622 = state_24564__$1;(statearr_24595_24622[2] = null);
(statearr_24595_24622[1] = 8);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_24599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24599[0] = state_machine__5507__auto__);
(statearr_24599[1] = 1);
return statearr_24599;
});
var state_machine__5507__auto____1 = (function (state_24564){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24564);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24600){if((e24600 instanceof Object))
{var ex__5510__auto__ = e24600;var statearr_24601_24623 = state_24564;(statearr_24601_24623[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24564);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e24600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__24624 = state_24564;
state_24564 = G__24624;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24564){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24602 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24602;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24684){var state_val_24685 = (state_24684[1]);if((state_val_24685 === 1))
{var state_24684__$1 = state_24684;var statearr_24686_24706 = state_24684__$1;(statearr_24686_24706[2] = null);
(statearr_24686_24706[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24685 === 2))
{var state_24684__$1 = state_24684;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24684__$1,4,from);
} else
{if((state_val_24685 === 3))
{var inst_24682 = (state_24684[2]);var state_24684__$1 = state_24684;return cljs.core.async.impl.ioc_helpers.return_chan(state_24684__$1,inst_24682);
} else
{if((state_val_24685 === 4))
{var inst_24667 = (state_24684[7]);var inst_24667__$1 = (state_24684[2]);var inst_24668 = (inst_24667__$1 == null);var state_24684__$1 = (function (){var statearr_24687 = state_24684;(statearr_24687[7] = inst_24667__$1);
return statearr_24687;
})();if(cljs.core.truth_(inst_24668))
{var statearr_24688_24707 = state_24684__$1;(statearr_24688_24707[1] = 5);
} else
{var statearr_24689_24708 = state_24684__$1;(statearr_24689_24708[1] = 6);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24685 === 5))
{var state_24684__$1 = state_24684;if(cljs.core.truth_(close_QMARK_))
{var statearr_24690_24709 = state_24684__$1;(statearr_24690_24709[1] = 8);
} else
{var statearr_24691_24710 = state_24684__$1;(statearr_24691_24710[1] = 9);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24685 === 6))
{var inst_24667 = (state_24684[7]);var state_24684__$1 = state_24684;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24684__$1,11,to,inst_24667);
} else
{if((state_val_24685 === 7))
{var inst_24680 = (state_24684[2]);var state_24684__$1 = state_24684;var statearr_24692_24711 = state_24684__$1;(statearr_24692_24711[2] = inst_24680);
(statearr_24692_24711[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24685 === 8))
{var inst_24671 = cljs.core.async.close_BANG_(to);var state_24684__$1 = state_24684;var statearr_24693_24712 = state_24684__$1;(statearr_24693_24712[2] = inst_24671);
(statearr_24693_24712[1] = 10);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24685 === 9))
{var state_24684__$1 = state_24684;var statearr_24694_24713 = state_24684__$1;(statearr_24694_24713[2] = null);
(statearr_24694_24713[1] = 10);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24685 === 10))
{var inst_24674 = (state_24684[2]);var state_24684__$1 = state_24684;var statearr_24695_24714 = state_24684__$1;(statearr_24695_24714[2] = inst_24674);
(statearr_24695_24714[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24685 === 11))
{var inst_24677 = (state_24684[2]);var state_24684__$1 = (function (){var statearr_24696 = state_24684;(statearr_24696[8] = inst_24677);
return statearr_24696;
})();var statearr_24697_24715 = state_24684__$1;(statearr_24697_24715[2] = null);
(statearr_24697_24715[1] = 2);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_24701 = [null,null,null,null,null,null,null,null,null];(statearr_24701[0] = state_machine__5507__auto__);
(statearr_24701[1] = 1);
return statearr_24701;
});
var state_machine__5507__auto____1 = (function (state_24684){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24684);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24702){if((e24702 instanceof Object))
{var ex__5510__auto__ = e24702;var statearr_24703_24716 = state_24684;(statearr_24703_24716[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24684);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e24702;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__24717 = state_24684;
state_24684 = G__24717;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24684){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24704 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24705);
return statearr_24704;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24782){var state_val_24783 = (state_24782[1]);if((state_val_24783 === 1))
{var state_24782__$1 = state_24782;var statearr_24784_24805 = state_24782__$1;(statearr_24784_24805[2] = null);
(statearr_24784_24805[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24783 === 2))
{var state_24782__$1 = state_24782;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24782__$1,4,ch);
} else
{if((state_val_24783 === 3))
{var inst_24780 = (state_24782[2]);var state_24782__$1 = state_24782;return cljs.core.async.impl.ioc_helpers.return_chan(state_24782__$1,inst_24780);
} else
{if((state_val_24783 === 4))
{var inst_24763 = (state_24782[7]);var inst_24763__$1 = (state_24782[2]);var inst_24764 = (inst_24763__$1 == null);var state_24782__$1 = (function (){var statearr_24785 = state_24782;(statearr_24785[7] = inst_24763__$1);
return statearr_24785;
})();if(cljs.core.truth_(inst_24764))
{var statearr_24786_24806 = state_24782__$1;(statearr_24786_24806[1] = 5);
} else
{var statearr_24787_24807 = state_24782__$1;(statearr_24787_24807[1] = 6);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24783 === 5))
{var inst_24766 = cljs.core.async.close_BANG_(tc);var inst_24767 = cljs.core.async.close_BANG_(fc);var state_24782__$1 = (function (){var statearr_24788 = state_24782;(statearr_24788[8] = inst_24766);
return statearr_24788;
})();var statearr_24789_24808 = state_24782__$1;(statearr_24789_24808[2] = inst_24767);
(statearr_24789_24808[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24783 === 6))
{var inst_24763 = (state_24782[7]);var inst_24769 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24763) : p.call(null,inst_24763));var state_24782__$1 = state_24782;if(cljs.core.truth_(inst_24769))
{var statearr_24790_24809 = state_24782__$1;(statearr_24790_24809[1] = 9);
} else
{var statearr_24791_24810 = state_24782__$1;(statearr_24791_24810[1] = 10);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24783 === 7))
{var inst_24778 = (state_24782[2]);var state_24782__$1 = state_24782;var statearr_24792_24811 = state_24782__$1;(statearr_24792_24811[2] = inst_24778);
(statearr_24792_24811[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24783 === 8))
{var inst_24775 = (state_24782[2]);var state_24782__$1 = (function (){var statearr_24793 = state_24782;(statearr_24793[9] = inst_24775);
return statearr_24793;
})();var statearr_24794_24812 = state_24782__$1;(statearr_24794_24812[2] = null);
(statearr_24794_24812[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24783 === 9))
{var state_24782__$1 = state_24782;var statearr_24795_24813 = state_24782__$1;(statearr_24795_24813[2] = tc);
(statearr_24795_24813[1] = 11);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24783 === 10))
{var state_24782__$1 = state_24782;var statearr_24796_24814 = state_24782__$1;(statearr_24796_24814[2] = fc);
(statearr_24796_24814[1] = 11);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24783 === 11))
{var inst_24763 = (state_24782[7]);var inst_24773 = (state_24782[2]);var state_24782__$1 = state_24782;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24782__$1,8,inst_24773,inst_24763);
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
var state_machine__5507__auto____0 = (function (){var statearr_24800 = [null,null,null,null,null,null,null,null,null,null];(statearr_24800[0] = state_machine__5507__auto__);
(statearr_24800[1] = 1);
return statearr_24800;
});
var state_machine__5507__auto____1 = (function (state_24782){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24782);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24801){if((e24801 instanceof Object))
{var ex__5510__auto__ = e24801;var statearr_24802_24815 = state_24782;(statearr_24802_24815[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24782);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e24801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__24816 = state_24782;
state_24782 = G__24816;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24782){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24803 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24804);
return statearr_24803;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24863){var state_val_24864 = (state_24863[1]);if((state_val_24864 === 7))
{var inst_24859 = (state_24863[2]);var state_24863__$1 = state_24863;var statearr_24865_24881 = state_24863__$1;(statearr_24865_24881[2] = inst_24859);
(statearr_24865_24881[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24864 === 6))
{var inst_24852 = (state_24863[7]);var inst_24849 = (state_24863[8]);var inst_24856 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24849,inst_24852) : f.call(null,inst_24849,inst_24852));var inst_24849__$1 = inst_24856;var state_24863__$1 = (function (){var statearr_24866 = state_24863;(statearr_24866[8] = inst_24849__$1);
return statearr_24866;
})();var statearr_24867_24882 = state_24863__$1;(statearr_24867_24882[2] = null);
(statearr_24867_24882[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24864 === 5))
{var inst_24849 = (state_24863[8]);var state_24863__$1 = state_24863;var statearr_24868_24883 = state_24863__$1;(statearr_24868_24883[2] = inst_24849);
(statearr_24868_24883[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24864 === 4))
{var inst_24852 = (state_24863[7]);var inst_24852__$1 = (state_24863[2]);var inst_24853 = (inst_24852__$1 == null);var state_24863__$1 = (function (){var statearr_24869 = state_24863;(statearr_24869[7] = inst_24852__$1);
return statearr_24869;
})();if(cljs.core.truth_(inst_24853))
{var statearr_24870_24884 = state_24863__$1;(statearr_24870_24884[1] = 5);
} else
{var statearr_24871_24885 = state_24863__$1;(statearr_24871_24885[1] = 6);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24864 === 3))
{var inst_24861 = (state_24863[2]);var state_24863__$1 = state_24863;return cljs.core.async.impl.ioc_helpers.return_chan(state_24863__$1,inst_24861);
} else
{if((state_val_24864 === 2))
{var state_24863__$1 = state_24863;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24863__$1,4,ch);
} else
{if((state_val_24864 === 1))
{var inst_24849 = init;var state_24863__$1 = (function (){var statearr_24872 = state_24863;(statearr_24872[8] = inst_24849);
return statearr_24872;
})();var statearr_24873_24886 = state_24863__$1;(statearr_24873_24886[2] = null);
(statearr_24873_24886[1] = 2);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_24877 = [null,null,null,null,null,null,null,null,null];(statearr_24877[0] = state_machine__5507__auto__);
(statearr_24877[1] = 1);
return statearr_24877;
});
var state_machine__5507__auto____1 = (function (state_24863){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24863);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24878){if((e24878 instanceof Object))
{var ex__5510__auto__ = e24878;var statearr_24879_24887 = state_24863;(statearr_24879_24887[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24863);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e24878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__24888 = state_24863;
state_24863 = G__24888;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24863){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24880 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24880;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24950){var state_val_24951 = (state_24950[1]);if((state_val_24951 === 1))
{var inst_24930 = cljs.core.seq(coll);var inst_24931 = inst_24930;var state_24950__$1 = (function (){var statearr_24952 = state_24950;(statearr_24952[7] = inst_24931);
return statearr_24952;
})();var statearr_24953_24971 = state_24950__$1;(statearr_24953_24971[2] = null);
(statearr_24953_24971[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24951 === 2))
{var inst_24931 = (state_24950[7]);var state_24950__$1 = state_24950;if(cljs.core.truth_(inst_24931))
{var statearr_24954_24972 = state_24950__$1;(statearr_24954_24972[1] = 4);
} else
{var statearr_24955_24973 = state_24950__$1;(statearr_24955_24973[1] = 5);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24951 === 3))
{var inst_24948 = (state_24950[2]);var state_24950__$1 = state_24950;return cljs.core.async.impl.ioc_helpers.return_chan(state_24950__$1,inst_24948);
} else
{if((state_val_24951 === 4))
{var inst_24931 = (state_24950[7]);var inst_24934 = cljs.core.first(inst_24931);var state_24950__$1 = state_24950;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24950__$1,7,ch,inst_24934);
} else
{if((state_val_24951 === 5))
{var state_24950__$1 = state_24950;if(cljs.core.truth_(close_QMARK_))
{var statearr_24956_24974 = state_24950__$1;(statearr_24956_24974[1] = 8);
} else
{var statearr_24957_24975 = state_24950__$1;(statearr_24957_24975[1] = 9);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_24951 === 6))
{var inst_24946 = (state_24950[2]);var state_24950__$1 = state_24950;var statearr_24958_24976 = state_24950__$1;(statearr_24958_24976[2] = inst_24946);
(statearr_24958_24976[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24951 === 7))
{var inst_24931 = (state_24950[7]);var inst_24936 = (state_24950[2]);var inst_24937 = cljs.core.next(inst_24931);var inst_24931__$1 = inst_24937;var state_24950__$1 = (function (){var statearr_24959 = state_24950;(statearr_24959[8] = inst_24936);
(statearr_24959[7] = inst_24931__$1);
return statearr_24959;
})();var statearr_24960_24977 = state_24950__$1;(statearr_24960_24977[2] = null);
(statearr_24960_24977[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24951 === 8))
{var inst_24941 = cljs.core.async.close_BANG_(ch);var state_24950__$1 = state_24950;var statearr_24961_24978 = state_24950__$1;(statearr_24961_24978[2] = inst_24941);
(statearr_24961_24978[1] = 10);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24951 === 9))
{var state_24950__$1 = state_24950;var statearr_24962_24979 = state_24950__$1;(statearr_24962_24979[2] = null);
(statearr_24962_24979[1] = 10);
return cljs.core.constant$keyword$240;
} else
{if((state_val_24951 === 10))
{var inst_24944 = (state_24950[2]);var state_24950__$1 = state_24950;var statearr_24963_24980 = state_24950__$1;(statearr_24963_24980[2] = inst_24944);
(statearr_24963_24980[1] = 6);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_24967 = [null,null,null,null,null,null,null,null,null];(statearr_24967[0] = state_machine__5507__auto__);
(statearr_24967[1] = 1);
return statearr_24967;
});
var state_machine__5507__auto____1 = (function (state_24950){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24950);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24968){if((e24968 instanceof Object))
{var ex__5510__auto__ = e24968;var statearr_24969_24981 = state_24950;(statearr_24969_24981[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24950);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e24968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__24982 = state_24950;
state_24950 = G__24982;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24950){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24970 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24970;
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
cljs.core.async.Mux = (function (){var obj24984 = {};return obj24984;
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
cljs.core.async.Mult = (function (){var obj24986 = {};return obj24986;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25210 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25210 = (function (cs,ch,mult,meta25211){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25211 = meta25211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25210.cljs$lang$type = true;
cljs.core.async.t25210.cljs$lang$ctorStr = "cljs.core.async/t25210";
cljs.core.async.t25210.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25210");
});})(cs))
;
cljs.core.async.t25210.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25210.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25210.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25210.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25210.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25212){var self__ = this;
var _25212__$1 = this;return self__.meta25211;
});})(cs))
;
cljs.core.async.t25210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25212,meta25211__$1){var self__ = this;
var _25212__$1 = this;return (new cljs.core.async.t25210(self__.cs,self__.ch,self__.mult,meta25211__$1));
});})(cs))
;
cljs.core.async.__GT_t25210 = ((function (cs){
return (function __GT_t25210(cs__$1,ch__$1,mult__$1,meta25211){return (new cljs.core.async.t25210(cs__$1,ch__$1,mult__$1,meta25211));
});})(cs))
;
}
return (new cljs.core.async.t25210(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25347){var state_val_25348 = (state_25347[1]);if((state_val_25348 === 32))
{var inst_25215 = (state_25347[7]);var inst_25291 = (state_25347[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25347,31,Object,null,30);var inst_25298 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25291,inst_25215,done);var state_25347__$1 = state_25347;var statearr_25349_25434 = state_25347__$1;(statearr_25349_25434[2] = inst_25298);
cljs.core.async.impl.ioc_helpers.process_exception(state_25347__$1);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 1))
{var state_25347__$1 = state_25347;var statearr_25350_25435 = state_25347__$1;(statearr_25350_25435[2] = null);
(statearr_25350_25435[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 33))
{var inst_25304 = (state_25347[9]);var inst_25306 = cljs.core.chunked_seq_QMARK_(inst_25304);var state_25347__$1 = state_25347;if(inst_25306)
{var statearr_25351_25436 = state_25347__$1;(statearr_25351_25436[1] = 36);
} else
{var statearr_25352_25437 = state_25347__$1;(statearr_25352_25437[1] = 37);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 2))
{var state_25347__$1 = state_25347;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25347__$1,4,ch);
} else
{if((state_val_25348 === 34))
{var state_25347__$1 = state_25347;var statearr_25353_25438 = state_25347__$1;(statearr_25353_25438[2] = null);
(statearr_25353_25438[1] = 35);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 3))
{var inst_25345 = (state_25347[2]);var state_25347__$1 = state_25347;return cljs.core.async.impl.ioc_helpers.return_chan(state_25347__$1,inst_25345);
} else
{if((state_val_25348 === 35))
{var inst_25329 = (state_25347[2]);var state_25347__$1 = state_25347;var statearr_25354_25439 = state_25347__$1;(statearr_25354_25439[2] = inst_25329);
(statearr_25354_25439[1] = 29);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 4))
{var inst_25215 = (state_25347[7]);var inst_25215__$1 = (state_25347[2]);var inst_25216 = (inst_25215__$1 == null);var state_25347__$1 = (function (){var statearr_25355 = state_25347;(statearr_25355[7] = inst_25215__$1);
return statearr_25355;
})();if(cljs.core.truth_(inst_25216))
{var statearr_25356_25440 = state_25347__$1;(statearr_25356_25440[1] = 5);
} else
{var statearr_25357_25441 = state_25347__$1;(statearr_25357_25441[1] = 6);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 36))
{var inst_25304 = (state_25347[9]);var inst_25308 = cljs.core.chunk_first(inst_25304);var inst_25309 = cljs.core.chunk_rest(inst_25304);var inst_25310 = cljs.core.count(inst_25308);var inst_25283 = inst_25309;var inst_25284 = inst_25308;var inst_25285 = inst_25310;var inst_25286 = 0;var state_25347__$1 = (function (){var statearr_25358 = state_25347;(statearr_25358[10] = inst_25286);
(statearr_25358[11] = inst_25283);
(statearr_25358[12] = inst_25285);
(statearr_25358[13] = inst_25284);
return statearr_25358;
})();var statearr_25359_25442 = state_25347__$1;(statearr_25359_25442[2] = null);
(statearr_25359_25442[1] = 25);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 5))
{var inst_25222 = cljs.core.deref(cs);var inst_25223 = cljs.core.seq(inst_25222);var inst_25224 = inst_25223;var inst_25225 = null;var inst_25226 = 0;var inst_25227 = 0;var state_25347__$1 = (function (){var statearr_25360 = state_25347;(statearr_25360[14] = inst_25227);
(statearr_25360[15] = inst_25226);
(statearr_25360[16] = inst_25225);
(statearr_25360[17] = inst_25224);
return statearr_25360;
})();var statearr_25361_25443 = state_25347__$1;(statearr_25361_25443[2] = null);
(statearr_25361_25443[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 37))
{var inst_25304 = (state_25347[9]);var inst_25313 = cljs.core.first(inst_25304);var state_25347__$1 = (function (){var statearr_25362 = state_25347;(statearr_25362[18] = inst_25313);
return statearr_25362;
})();var statearr_25363_25444 = state_25347__$1;(statearr_25363_25444[2] = null);
(statearr_25363_25444[1] = 41);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 6))
{var inst_25275 = (state_25347[19]);var inst_25274 = cljs.core.deref(cs);var inst_25275__$1 = cljs.core.keys(inst_25274);var inst_25276 = cljs.core.count(inst_25275__$1);var inst_25277 = cljs.core.reset_BANG_(dctr,inst_25276);var inst_25282 = cljs.core.seq(inst_25275__$1);var inst_25283 = inst_25282;var inst_25284 = null;var inst_25285 = 0;var inst_25286 = 0;var state_25347__$1 = (function (){var statearr_25364 = state_25347;(statearr_25364[20] = inst_25277);
(statearr_25364[19] = inst_25275__$1);
(statearr_25364[10] = inst_25286);
(statearr_25364[11] = inst_25283);
(statearr_25364[12] = inst_25285);
(statearr_25364[13] = inst_25284);
return statearr_25364;
})();var statearr_25365_25445 = state_25347__$1;(statearr_25365_25445[2] = null);
(statearr_25365_25445[1] = 25);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 38))
{var inst_25326 = (state_25347[2]);var state_25347__$1 = state_25347;var statearr_25366_25446 = state_25347__$1;(statearr_25366_25446[2] = inst_25326);
(statearr_25366_25446[1] = 35);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 7))
{var inst_25343 = (state_25347[2]);var state_25347__$1 = state_25347;var statearr_25367_25447 = state_25347__$1;(statearr_25367_25447[2] = inst_25343);
(statearr_25367_25447[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 39))
{var inst_25304 = (state_25347[9]);var inst_25322 = (state_25347[2]);var inst_25323 = cljs.core.next(inst_25304);var inst_25283 = inst_25323;var inst_25284 = null;var inst_25285 = 0;var inst_25286 = 0;var state_25347__$1 = (function (){var statearr_25368 = state_25347;(statearr_25368[21] = inst_25322);
(statearr_25368[10] = inst_25286);
(statearr_25368[11] = inst_25283);
(statearr_25368[12] = inst_25285);
(statearr_25368[13] = inst_25284);
return statearr_25368;
})();var statearr_25369_25448 = state_25347__$1;(statearr_25369_25448[2] = null);
(statearr_25369_25448[1] = 25);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 8))
{var inst_25227 = (state_25347[14]);var inst_25226 = (state_25347[15]);var inst_25229 = (inst_25227 < inst_25226);var inst_25230 = inst_25229;var state_25347__$1 = state_25347;if(cljs.core.truth_(inst_25230))
{var statearr_25370_25449 = state_25347__$1;(statearr_25370_25449[1] = 10);
} else
{var statearr_25371_25450 = state_25347__$1;(statearr_25371_25450[1] = 11);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 40))
{var inst_25313 = (state_25347[18]);var inst_25314 = (state_25347[2]);var inst_25315 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25316 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25313);var state_25347__$1 = (function (){var statearr_25372 = state_25347;(statearr_25372[22] = inst_25315);
(statearr_25372[23] = inst_25314);
return statearr_25372;
})();var statearr_25373_25451 = state_25347__$1;(statearr_25373_25451[2] = inst_25316);
cljs.core.async.impl.ioc_helpers.process_exception(state_25347__$1);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 9))
{var inst_25272 = (state_25347[2]);var state_25347__$1 = state_25347;var statearr_25374_25452 = state_25347__$1;(statearr_25374_25452[2] = inst_25272);
(statearr_25374_25452[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 41))
{var inst_25215 = (state_25347[7]);var inst_25313 = (state_25347[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25347,40,Object,null,39);var inst_25320 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25313,inst_25215,done);var state_25347__$1 = state_25347;var statearr_25375_25453 = state_25347__$1;(statearr_25375_25453[2] = inst_25320);
cljs.core.async.impl.ioc_helpers.process_exception(state_25347__$1);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 10))
{var inst_25227 = (state_25347[14]);var inst_25225 = (state_25347[16]);var inst_25233 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25225,inst_25227);var inst_25234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25233,0,null);var inst_25235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25233,1,null);var state_25347__$1 = (function (){var statearr_25376 = state_25347;(statearr_25376[24] = inst_25234);
return statearr_25376;
})();if(cljs.core.truth_(inst_25235))
{var statearr_25377_25454 = state_25347__$1;(statearr_25377_25454[1] = 13);
} else
{var statearr_25378_25455 = state_25347__$1;(statearr_25378_25455[1] = 14);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 42))
{var state_25347__$1 = state_25347;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25347__$1,45,dchan);
} else
{if((state_val_25348 === 11))
{var inst_25224 = (state_25347[17]);var inst_25244 = (state_25347[25]);var inst_25244__$1 = cljs.core.seq(inst_25224);var state_25347__$1 = (function (){var statearr_25379 = state_25347;(statearr_25379[25] = inst_25244__$1);
return statearr_25379;
})();if(inst_25244__$1)
{var statearr_25380_25456 = state_25347__$1;(statearr_25380_25456[1] = 16);
} else
{var statearr_25381_25457 = state_25347__$1;(statearr_25381_25457[1] = 17);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 43))
{var state_25347__$1 = state_25347;var statearr_25382_25458 = state_25347__$1;(statearr_25382_25458[2] = null);
(statearr_25382_25458[1] = 44);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 12))
{var inst_25270 = (state_25347[2]);var state_25347__$1 = state_25347;var statearr_25383_25459 = state_25347__$1;(statearr_25383_25459[2] = inst_25270);
(statearr_25383_25459[1] = 9);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 44))
{var inst_25340 = (state_25347[2]);var state_25347__$1 = (function (){var statearr_25384 = state_25347;(statearr_25384[26] = inst_25340);
return statearr_25384;
})();var statearr_25385_25460 = state_25347__$1;(statearr_25385_25460[2] = null);
(statearr_25385_25460[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 13))
{var inst_25234 = (state_25347[24]);var inst_25237 = cljs.core.async.close_BANG_(inst_25234);var state_25347__$1 = state_25347;var statearr_25386_25461 = state_25347__$1;(statearr_25386_25461[2] = inst_25237);
(statearr_25386_25461[1] = 15);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 45))
{var inst_25337 = (state_25347[2]);var state_25347__$1 = state_25347;var statearr_25390_25462 = state_25347__$1;(statearr_25390_25462[2] = inst_25337);
(statearr_25390_25462[1] = 44);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 14))
{var state_25347__$1 = state_25347;var statearr_25391_25463 = state_25347__$1;(statearr_25391_25463[2] = null);
(statearr_25391_25463[1] = 15);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 15))
{var inst_25227 = (state_25347[14]);var inst_25226 = (state_25347[15]);var inst_25225 = (state_25347[16]);var inst_25224 = (state_25347[17]);var inst_25240 = (state_25347[2]);var inst_25241 = (inst_25227 + 1);var tmp25387 = inst_25226;var tmp25388 = inst_25225;var tmp25389 = inst_25224;var inst_25224__$1 = tmp25389;var inst_25225__$1 = tmp25388;var inst_25226__$1 = tmp25387;var inst_25227__$1 = inst_25241;var state_25347__$1 = (function (){var statearr_25392 = state_25347;(statearr_25392[14] = inst_25227__$1);
(statearr_25392[15] = inst_25226__$1);
(statearr_25392[16] = inst_25225__$1);
(statearr_25392[17] = inst_25224__$1);
(statearr_25392[27] = inst_25240);
return statearr_25392;
})();var statearr_25393_25464 = state_25347__$1;(statearr_25393_25464[2] = null);
(statearr_25393_25464[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 16))
{var inst_25244 = (state_25347[25]);var inst_25246 = cljs.core.chunked_seq_QMARK_(inst_25244);var state_25347__$1 = state_25347;if(inst_25246)
{var statearr_25394_25465 = state_25347__$1;(statearr_25394_25465[1] = 19);
} else
{var statearr_25395_25466 = state_25347__$1;(statearr_25395_25466[1] = 20);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 17))
{var state_25347__$1 = state_25347;var statearr_25396_25467 = state_25347__$1;(statearr_25396_25467[2] = null);
(statearr_25396_25467[1] = 18);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 18))
{var inst_25268 = (state_25347[2]);var state_25347__$1 = state_25347;var statearr_25397_25468 = state_25347__$1;(statearr_25397_25468[2] = inst_25268);
(statearr_25397_25468[1] = 12);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 19))
{var inst_25244 = (state_25347[25]);var inst_25248 = cljs.core.chunk_first(inst_25244);var inst_25249 = cljs.core.chunk_rest(inst_25244);var inst_25250 = cljs.core.count(inst_25248);var inst_25224 = inst_25249;var inst_25225 = inst_25248;var inst_25226 = inst_25250;var inst_25227 = 0;var state_25347__$1 = (function (){var statearr_25398 = state_25347;(statearr_25398[14] = inst_25227);
(statearr_25398[15] = inst_25226);
(statearr_25398[16] = inst_25225);
(statearr_25398[17] = inst_25224);
return statearr_25398;
})();var statearr_25399_25469 = state_25347__$1;(statearr_25399_25469[2] = null);
(statearr_25399_25469[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 20))
{var inst_25244 = (state_25347[25]);var inst_25254 = cljs.core.first(inst_25244);var inst_25255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25254,0,null);var inst_25256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25254,1,null);var state_25347__$1 = (function (){var statearr_25400 = state_25347;(statearr_25400[28] = inst_25255);
return statearr_25400;
})();if(cljs.core.truth_(inst_25256))
{var statearr_25401_25470 = state_25347__$1;(statearr_25401_25470[1] = 22);
} else
{var statearr_25402_25471 = state_25347__$1;(statearr_25402_25471[1] = 23);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 21))
{var inst_25265 = (state_25347[2]);var state_25347__$1 = state_25347;var statearr_25403_25472 = state_25347__$1;(statearr_25403_25472[2] = inst_25265);
(statearr_25403_25472[1] = 18);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 22))
{var inst_25255 = (state_25347[28]);var inst_25258 = cljs.core.async.close_BANG_(inst_25255);var state_25347__$1 = state_25347;var statearr_25404_25473 = state_25347__$1;(statearr_25404_25473[2] = inst_25258);
(statearr_25404_25473[1] = 24);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 23))
{var state_25347__$1 = state_25347;var statearr_25405_25474 = state_25347__$1;(statearr_25405_25474[2] = null);
(statearr_25405_25474[1] = 24);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 24))
{var inst_25244 = (state_25347[25]);var inst_25261 = (state_25347[2]);var inst_25262 = cljs.core.next(inst_25244);var inst_25224 = inst_25262;var inst_25225 = null;var inst_25226 = 0;var inst_25227 = 0;var state_25347__$1 = (function (){var statearr_25406 = state_25347;(statearr_25406[14] = inst_25227);
(statearr_25406[15] = inst_25226);
(statearr_25406[16] = inst_25225);
(statearr_25406[17] = inst_25224);
(statearr_25406[29] = inst_25261);
return statearr_25406;
})();var statearr_25407_25475 = state_25347__$1;(statearr_25407_25475[2] = null);
(statearr_25407_25475[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 25))
{var inst_25286 = (state_25347[10]);var inst_25285 = (state_25347[12]);var inst_25288 = (inst_25286 < inst_25285);var inst_25289 = inst_25288;var state_25347__$1 = state_25347;if(cljs.core.truth_(inst_25289))
{var statearr_25408_25476 = state_25347__$1;(statearr_25408_25476[1] = 27);
} else
{var statearr_25409_25477 = state_25347__$1;(statearr_25409_25477[1] = 28);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 26))
{var inst_25275 = (state_25347[19]);var inst_25333 = (state_25347[2]);var inst_25334 = cljs.core.seq(inst_25275);var state_25347__$1 = (function (){var statearr_25410 = state_25347;(statearr_25410[30] = inst_25333);
return statearr_25410;
})();if(inst_25334)
{var statearr_25411_25478 = state_25347__$1;(statearr_25411_25478[1] = 42);
} else
{var statearr_25412_25479 = state_25347__$1;(statearr_25412_25479[1] = 43);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 27))
{var inst_25286 = (state_25347[10]);var inst_25284 = (state_25347[13]);var inst_25291 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25284,inst_25286);var state_25347__$1 = (function (){var statearr_25413 = state_25347;(statearr_25413[8] = inst_25291);
return statearr_25413;
})();var statearr_25414_25480 = state_25347__$1;(statearr_25414_25480[2] = null);
(statearr_25414_25480[1] = 32);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 28))
{var inst_25304 = (state_25347[9]);var inst_25283 = (state_25347[11]);var inst_25304__$1 = cljs.core.seq(inst_25283);var state_25347__$1 = (function (){var statearr_25418 = state_25347;(statearr_25418[9] = inst_25304__$1);
return statearr_25418;
})();if(inst_25304__$1)
{var statearr_25419_25481 = state_25347__$1;(statearr_25419_25481[1] = 33);
} else
{var statearr_25420_25482 = state_25347__$1;(statearr_25420_25482[1] = 34);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 29))
{var inst_25331 = (state_25347[2]);var state_25347__$1 = state_25347;var statearr_25421_25483 = state_25347__$1;(statearr_25421_25483[2] = inst_25331);
(statearr_25421_25483[1] = 26);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 30))
{var inst_25286 = (state_25347[10]);var inst_25283 = (state_25347[11]);var inst_25285 = (state_25347[12]);var inst_25284 = (state_25347[13]);var inst_25300 = (state_25347[2]);var inst_25301 = (inst_25286 + 1);var tmp25415 = inst_25283;var tmp25416 = inst_25285;var tmp25417 = inst_25284;var inst_25283__$1 = tmp25415;var inst_25284__$1 = tmp25417;var inst_25285__$1 = tmp25416;var inst_25286__$1 = inst_25301;var state_25347__$1 = (function (){var statearr_25422 = state_25347;(statearr_25422[31] = inst_25300);
(statearr_25422[10] = inst_25286__$1);
(statearr_25422[11] = inst_25283__$1);
(statearr_25422[12] = inst_25285__$1);
(statearr_25422[13] = inst_25284__$1);
return statearr_25422;
})();var statearr_25423_25484 = state_25347__$1;(statearr_25423_25484[2] = null);
(statearr_25423_25484[1] = 25);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25348 === 31))
{var inst_25291 = (state_25347[8]);var inst_25292 = (state_25347[2]);var inst_25293 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25294 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25291);var state_25347__$1 = (function (){var statearr_25424 = state_25347;(statearr_25424[32] = inst_25293);
(statearr_25424[33] = inst_25292);
return statearr_25424;
})();var statearr_25425_25485 = state_25347__$1;(statearr_25425_25485[2] = inst_25294);
cljs.core.async.impl.ioc_helpers.process_exception(state_25347__$1);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_25429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25429[0] = state_machine__5507__auto__);
(statearr_25429[1] = 1);
return statearr_25429;
});
var state_machine__5507__auto____1 = (function (state_25347){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25347);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25430){if((e25430 instanceof Object))
{var ex__5510__auto__ = e25430;var statearr_25431_25486 = state_25347;(statearr_25431_25486[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25347);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e25430;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__25487 = state_25347;
state_25347 = G__25487;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25347){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25432 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25433);
return statearr_25432;
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
cljs.core.async.Mix = (function (){var obj25489 = {};return obj25489;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$247,null,cljs.core.constant$keyword$248,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$249);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$248);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$249,chs);var pauses = pick(cljs.core.constant$keyword$247,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$250,solos,cljs.core.constant$keyword$251,pick(cljs.core.constant$keyword$248,chs),cljs.core.constant$keyword$252,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$247)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25599 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25599 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25600){
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
this.meta25600 = meta25600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25599.cljs$lang$type = true;
cljs.core.async.t25599.cljs$lang$ctorStr = "cljs.core.async/t25599";
cljs.core.async.t25599.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25599");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25599.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25599.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25599.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25599.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25599.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25599.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25599.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25599.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25601){var self__ = this;
var _25601__$1 = this;return self__.meta25600;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25601,meta25600__$1){var self__ = this;
var _25601__$1 = this;return (new cljs.core.async.t25599(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25600__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25599 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25599(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25600){return (new cljs.core.async.t25599(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25600));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25599(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25666){var state_val_25667 = (state_25666[1]);if((state_val_25667 === 1))
{var inst_25605 = (state_25666[7]);var inst_25605__$1 = calc_state();var inst_25606 = cljs.core.seq_QMARK_(inst_25605__$1);var state_25666__$1 = (function (){var statearr_25668 = state_25666;(statearr_25668[7] = inst_25605__$1);
return statearr_25668;
})();if(inst_25606)
{var statearr_25669_25709 = state_25666__$1;(statearr_25669_25709[1] = 2);
} else
{var statearr_25670_25710 = state_25666__$1;(statearr_25670_25710[1] = 3);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 2))
{var inst_25605 = (state_25666[7]);var inst_25608 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25605);var state_25666__$1 = state_25666;var statearr_25671_25711 = state_25666__$1;(statearr_25671_25711[2] = inst_25608);
(statearr_25671_25711[1] = 4);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 3))
{var inst_25605 = (state_25666[7]);var state_25666__$1 = state_25666;var statearr_25672_25712 = state_25666__$1;(statearr_25672_25712[2] = inst_25605);
(statearr_25672_25712[1] = 4);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 4))
{var inst_25605 = (state_25666[7]);var inst_25611 = (state_25666[2]);var inst_25612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25611,cljs.core.constant$keyword$252);var inst_25613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25611,cljs.core.constant$keyword$251);var inst_25614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25611,cljs.core.constant$keyword$250);var inst_25615 = inst_25605;var state_25666__$1 = (function (){var statearr_25673 = state_25666;(statearr_25673[8] = inst_25613);
(statearr_25673[9] = inst_25614);
(statearr_25673[10] = inst_25615);
(statearr_25673[11] = inst_25612);
return statearr_25673;
})();var statearr_25674_25713 = state_25666__$1;(statearr_25674_25713[2] = null);
(statearr_25674_25713[1] = 5);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 5))
{var inst_25615 = (state_25666[10]);var inst_25618 = cljs.core.seq_QMARK_(inst_25615);var state_25666__$1 = state_25666;if(inst_25618)
{var statearr_25675_25714 = state_25666__$1;(statearr_25675_25714[1] = 7);
} else
{var statearr_25676_25715 = state_25666__$1;(statearr_25676_25715[1] = 8);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 6))
{var inst_25664 = (state_25666[2]);var state_25666__$1 = state_25666;return cljs.core.async.impl.ioc_helpers.return_chan(state_25666__$1,inst_25664);
} else
{if((state_val_25667 === 7))
{var inst_25615 = (state_25666[10]);var inst_25620 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25615);var state_25666__$1 = state_25666;var statearr_25677_25716 = state_25666__$1;(statearr_25677_25716[2] = inst_25620);
(statearr_25677_25716[1] = 9);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 8))
{var inst_25615 = (state_25666[10]);var state_25666__$1 = state_25666;var statearr_25678_25717 = state_25666__$1;(statearr_25678_25717[2] = inst_25615);
(statearr_25678_25717[1] = 9);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 9))
{var inst_25623 = (state_25666[12]);var inst_25623__$1 = (state_25666[2]);var inst_25624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25623__$1,cljs.core.constant$keyword$252);var inst_25625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25623__$1,cljs.core.constant$keyword$251);var inst_25626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25623__$1,cljs.core.constant$keyword$250);var state_25666__$1 = (function (){var statearr_25679 = state_25666;(statearr_25679[12] = inst_25623__$1);
(statearr_25679[13] = inst_25625);
(statearr_25679[14] = inst_25626);
return statearr_25679;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25666__$1,10,inst_25624);
} else
{if((state_val_25667 === 10))
{var inst_25630 = (state_25666[15]);var inst_25631 = (state_25666[16]);var inst_25629 = (state_25666[2]);var inst_25630__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25629,0,null);var inst_25631__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25629,1,null);var inst_25632 = (inst_25630__$1 == null);var inst_25633 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25631__$1,change);var inst_25634 = (inst_25632) || (inst_25633);var state_25666__$1 = (function (){var statearr_25680 = state_25666;(statearr_25680[15] = inst_25630__$1);
(statearr_25680[16] = inst_25631__$1);
return statearr_25680;
})();if(cljs.core.truth_(inst_25634))
{var statearr_25681_25718 = state_25666__$1;(statearr_25681_25718[1] = 11);
} else
{var statearr_25682_25719 = state_25666__$1;(statearr_25682_25719[1] = 12);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 11))
{var inst_25630 = (state_25666[15]);var inst_25636 = (inst_25630 == null);var state_25666__$1 = state_25666;if(cljs.core.truth_(inst_25636))
{var statearr_25683_25720 = state_25666__$1;(statearr_25683_25720[1] = 14);
} else
{var statearr_25684_25721 = state_25666__$1;(statearr_25684_25721[1] = 15);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 12))
{var inst_25645 = (state_25666[17]);var inst_25626 = (state_25666[14]);var inst_25631 = (state_25666[16]);var inst_25645__$1 = (inst_25626.cljs$core$IFn$_invoke$arity$1 ? inst_25626.cljs$core$IFn$_invoke$arity$1(inst_25631) : inst_25626.call(null,inst_25631));var state_25666__$1 = (function (){var statearr_25685 = state_25666;(statearr_25685[17] = inst_25645__$1);
return statearr_25685;
})();if(cljs.core.truth_(inst_25645__$1))
{var statearr_25686_25722 = state_25666__$1;(statearr_25686_25722[1] = 17);
} else
{var statearr_25687_25723 = state_25666__$1;(statearr_25687_25723[1] = 18);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 13))
{var inst_25662 = (state_25666[2]);var state_25666__$1 = state_25666;var statearr_25688_25724 = state_25666__$1;(statearr_25688_25724[2] = inst_25662);
(statearr_25688_25724[1] = 6);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 14))
{var inst_25631 = (state_25666[16]);var inst_25638 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25631);var state_25666__$1 = state_25666;var statearr_25689_25725 = state_25666__$1;(statearr_25689_25725[2] = inst_25638);
(statearr_25689_25725[1] = 16);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 15))
{var state_25666__$1 = state_25666;var statearr_25690_25726 = state_25666__$1;(statearr_25690_25726[2] = null);
(statearr_25690_25726[1] = 16);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 16))
{var inst_25641 = (state_25666[2]);var inst_25642 = calc_state();var inst_25615 = inst_25642;var state_25666__$1 = (function (){var statearr_25691 = state_25666;(statearr_25691[10] = inst_25615);
(statearr_25691[18] = inst_25641);
return statearr_25691;
})();var statearr_25692_25727 = state_25666__$1;(statearr_25692_25727[2] = null);
(statearr_25692_25727[1] = 5);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 17))
{var inst_25645 = (state_25666[17]);var state_25666__$1 = state_25666;var statearr_25693_25728 = state_25666__$1;(statearr_25693_25728[2] = inst_25645);
(statearr_25693_25728[1] = 19);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 18))
{var inst_25625 = (state_25666[13]);var inst_25626 = (state_25666[14]);var inst_25631 = (state_25666[16]);var inst_25648 = cljs.core.empty_QMARK_(inst_25626);var inst_25649 = (inst_25625.cljs$core$IFn$_invoke$arity$1 ? inst_25625.cljs$core$IFn$_invoke$arity$1(inst_25631) : inst_25625.call(null,inst_25631));var inst_25650 = cljs.core.not(inst_25649);var inst_25651 = (inst_25648) && (inst_25650);var state_25666__$1 = state_25666;var statearr_25694_25729 = state_25666__$1;(statearr_25694_25729[2] = inst_25651);
(statearr_25694_25729[1] = 19);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 19))
{var inst_25653 = (state_25666[2]);var state_25666__$1 = state_25666;if(cljs.core.truth_(inst_25653))
{var statearr_25695_25730 = state_25666__$1;(statearr_25695_25730[1] = 20);
} else
{var statearr_25696_25731 = state_25666__$1;(statearr_25696_25731[1] = 21);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 20))
{var inst_25630 = (state_25666[15]);var state_25666__$1 = state_25666;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25666__$1,23,out,inst_25630);
} else
{if((state_val_25667 === 21))
{var state_25666__$1 = state_25666;var statearr_25697_25732 = state_25666__$1;(statearr_25697_25732[2] = null);
(statearr_25697_25732[1] = 22);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 22))
{var inst_25623 = (state_25666[12]);var inst_25659 = (state_25666[2]);var inst_25615 = inst_25623;var state_25666__$1 = (function (){var statearr_25698 = state_25666;(statearr_25698[10] = inst_25615);
(statearr_25698[19] = inst_25659);
return statearr_25698;
})();var statearr_25699_25733 = state_25666__$1;(statearr_25699_25733[2] = null);
(statearr_25699_25733[1] = 5);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25667 === 23))
{var inst_25656 = (state_25666[2]);var state_25666__$1 = state_25666;var statearr_25700_25734 = state_25666__$1;(statearr_25700_25734[2] = inst_25656);
(statearr_25700_25734[1] = 22);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_25704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25704[0] = state_machine__5507__auto__);
(statearr_25704[1] = 1);
return statearr_25704;
});
var state_machine__5507__auto____1 = (function (state_25666){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25666);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25705){if((e25705 instanceof Object))
{var ex__5510__auto__ = e25705;var statearr_25706_25735 = state_25666;(statearr_25706_25735[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25666);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e25705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__25736 = state_25666;
state_25666 = G__25736;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25666){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25707 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25708);
return statearr_25707;
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
cljs.core.async.Pub = (function (){var obj25738 = {};return obj25738;
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
return (function (p1__25739_SHARP_){if(cljs.core.truth_((p1__25739_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25739_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25739_SHARP_.call(null,topic))))
{return p1__25739_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25739_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25864 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25865){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25865 = meta25865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25864.cljs$lang$type = true;
cljs.core.async.t25864.cljs$lang$ctorStr = "cljs.core.async/t25864";
cljs.core.async.t25864.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25864");
});})(mults,ensure_mult))
;
cljs.core.async.t25864.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25864.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25864.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25864.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25864.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25864.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25866){var self__ = this;
var _25866__$1 = this;return self__.meta25865;
});})(mults,ensure_mult))
;
cljs.core.async.t25864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25866,meta25865__$1){var self__ = this;
var _25866__$1 = this;return (new cljs.core.async.t25864(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25865__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25864 = ((function (mults,ensure_mult){
return (function __GT_t25864(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25865){return (new cljs.core.async.t25864(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25865));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25864(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25940){var state_val_25941 = (state_25940[1]);if((state_val_25941 === 1))
{var state_25940__$1 = state_25940;var statearr_25942_25989 = state_25940__$1;(statearr_25942_25989[2] = null);
(statearr_25942_25989[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 2))
{var state_25940__$1 = state_25940;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25940__$1,4,ch);
} else
{if((state_val_25941 === 3))
{var inst_25938 = (state_25940[2]);var state_25940__$1 = state_25940;return cljs.core.async.impl.ioc_helpers.return_chan(state_25940__$1,inst_25938);
} else
{if((state_val_25941 === 4))
{var inst_25869 = (state_25940[7]);var inst_25869__$1 = (state_25940[2]);var inst_25870 = (inst_25869__$1 == null);var state_25940__$1 = (function (){var statearr_25943 = state_25940;(statearr_25943[7] = inst_25869__$1);
return statearr_25943;
})();if(cljs.core.truth_(inst_25870))
{var statearr_25944_25990 = state_25940__$1;(statearr_25944_25990[1] = 5);
} else
{var statearr_25945_25991 = state_25940__$1;(statearr_25945_25991[1] = 6);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 5))
{var inst_25876 = cljs.core.deref(mults);var inst_25877 = cljs.core.vals(inst_25876);var inst_25878 = cljs.core.seq(inst_25877);var inst_25879 = inst_25878;var inst_25880 = null;var inst_25881 = 0;var inst_25882 = 0;var state_25940__$1 = (function (){var statearr_25946 = state_25940;(statearr_25946[8] = inst_25879);
(statearr_25946[9] = inst_25882);
(statearr_25946[10] = inst_25880);
(statearr_25946[11] = inst_25881);
return statearr_25946;
})();var statearr_25947_25992 = state_25940__$1;(statearr_25947_25992[2] = null);
(statearr_25947_25992[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 6))
{var inst_25917 = (state_25940[12]);var inst_25919 = (state_25940[13]);var inst_25869 = (state_25940[7]);var inst_25917__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25869) : topic_fn.call(null,inst_25869));var inst_25918 = cljs.core.deref(mults);var inst_25919__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25918,inst_25917__$1);var state_25940__$1 = (function (){var statearr_25948 = state_25940;(statearr_25948[12] = inst_25917__$1);
(statearr_25948[13] = inst_25919__$1);
return statearr_25948;
})();if(cljs.core.truth_(inst_25919__$1))
{var statearr_25949_25993 = state_25940__$1;(statearr_25949_25993[1] = 19);
} else
{var statearr_25950_25994 = state_25940__$1;(statearr_25950_25994[1] = 20);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 7))
{var inst_25936 = (state_25940[2]);var state_25940__$1 = state_25940;var statearr_25951_25995 = state_25940__$1;(statearr_25951_25995[2] = inst_25936);
(statearr_25951_25995[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 8))
{var inst_25882 = (state_25940[9]);var inst_25881 = (state_25940[11]);var inst_25884 = (inst_25882 < inst_25881);var inst_25885 = inst_25884;var state_25940__$1 = state_25940;if(cljs.core.truth_(inst_25885))
{var statearr_25955_25996 = state_25940__$1;(statearr_25955_25996[1] = 10);
} else
{var statearr_25956_25997 = state_25940__$1;(statearr_25956_25997[1] = 11);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 9))
{var inst_25915 = (state_25940[2]);var state_25940__$1 = state_25940;var statearr_25957_25998 = state_25940__$1;(statearr_25957_25998[2] = inst_25915);
(statearr_25957_25998[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 10))
{var inst_25879 = (state_25940[8]);var inst_25882 = (state_25940[9]);var inst_25880 = (state_25940[10]);var inst_25881 = (state_25940[11]);var inst_25887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25880,inst_25882);var inst_25888 = cljs.core.async.muxch_STAR_(inst_25887);var inst_25889 = cljs.core.async.close_BANG_(inst_25888);var inst_25890 = (inst_25882 + 1);var tmp25952 = inst_25879;var tmp25953 = inst_25880;var tmp25954 = inst_25881;var inst_25879__$1 = tmp25952;var inst_25880__$1 = tmp25953;var inst_25881__$1 = tmp25954;var inst_25882__$1 = inst_25890;var state_25940__$1 = (function (){var statearr_25958 = state_25940;(statearr_25958[14] = inst_25889);
(statearr_25958[8] = inst_25879__$1);
(statearr_25958[9] = inst_25882__$1);
(statearr_25958[10] = inst_25880__$1);
(statearr_25958[11] = inst_25881__$1);
return statearr_25958;
})();var statearr_25959_25999 = state_25940__$1;(statearr_25959_25999[2] = null);
(statearr_25959_25999[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 11))
{var inst_25893 = (state_25940[15]);var inst_25879 = (state_25940[8]);var inst_25893__$1 = cljs.core.seq(inst_25879);var state_25940__$1 = (function (){var statearr_25960 = state_25940;(statearr_25960[15] = inst_25893__$1);
return statearr_25960;
})();if(inst_25893__$1)
{var statearr_25961_26000 = state_25940__$1;(statearr_25961_26000[1] = 13);
} else
{var statearr_25962_26001 = state_25940__$1;(statearr_25962_26001[1] = 14);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 12))
{var inst_25913 = (state_25940[2]);var state_25940__$1 = state_25940;var statearr_25963_26002 = state_25940__$1;(statearr_25963_26002[2] = inst_25913);
(statearr_25963_26002[1] = 9);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 13))
{var inst_25893 = (state_25940[15]);var inst_25895 = cljs.core.chunked_seq_QMARK_(inst_25893);var state_25940__$1 = state_25940;if(inst_25895)
{var statearr_25964_26003 = state_25940__$1;(statearr_25964_26003[1] = 16);
} else
{var statearr_25965_26004 = state_25940__$1;(statearr_25965_26004[1] = 17);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 14))
{var state_25940__$1 = state_25940;var statearr_25966_26005 = state_25940__$1;(statearr_25966_26005[2] = null);
(statearr_25966_26005[1] = 15);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 15))
{var inst_25911 = (state_25940[2]);var state_25940__$1 = state_25940;var statearr_25967_26006 = state_25940__$1;(statearr_25967_26006[2] = inst_25911);
(statearr_25967_26006[1] = 12);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 16))
{var inst_25893 = (state_25940[15]);var inst_25897 = cljs.core.chunk_first(inst_25893);var inst_25898 = cljs.core.chunk_rest(inst_25893);var inst_25899 = cljs.core.count(inst_25897);var inst_25879 = inst_25898;var inst_25880 = inst_25897;var inst_25881 = inst_25899;var inst_25882 = 0;var state_25940__$1 = (function (){var statearr_25968 = state_25940;(statearr_25968[8] = inst_25879);
(statearr_25968[9] = inst_25882);
(statearr_25968[10] = inst_25880);
(statearr_25968[11] = inst_25881);
return statearr_25968;
})();var statearr_25969_26007 = state_25940__$1;(statearr_25969_26007[2] = null);
(statearr_25969_26007[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 17))
{var inst_25893 = (state_25940[15]);var inst_25902 = cljs.core.first(inst_25893);var inst_25903 = cljs.core.async.muxch_STAR_(inst_25902);var inst_25904 = cljs.core.async.close_BANG_(inst_25903);var inst_25905 = cljs.core.next(inst_25893);var inst_25879 = inst_25905;var inst_25880 = null;var inst_25881 = 0;var inst_25882 = 0;var state_25940__$1 = (function (){var statearr_25970 = state_25940;(statearr_25970[16] = inst_25904);
(statearr_25970[8] = inst_25879);
(statearr_25970[9] = inst_25882);
(statearr_25970[10] = inst_25880);
(statearr_25970[11] = inst_25881);
return statearr_25970;
})();var statearr_25971_26008 = state_25940__$1;(statearr_25971_26008[2] = null);
(statearr_25971_26008[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 18))
{var inst_25908 = (state_25940[2]);var state_25940__$1 = state_25940;var statearr_25972_26009 = state_25940__$1;(statearr_25972_26009[2] = inst_25908);
(statearr_25972_26009[1] = 15);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 19))
{var state_25940__$1 = state_25940;var statearr_25973_26010 = state_25940__$1;(statearr_25973_26010[2] = null);
(statearr_25973_26010[1] = 24);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 20))
{var state_25940__$1 = state_25940;var statearr_25974_26011 = state_25940__$1;(statearr_25974_26011[2] = null);
(statearr_25974_26011[1] = 21);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 21))
{var inst_25933 = (state_25940[2]);var state_25940__$1 = (function (){var statearr_25975 = state_25940;(statearr_25975[17] = inst_25933);
return statearr_25975;
})();var statearr_25976_26012 = state_25940__$1;(statearr_25976_26012[2] = null);
(statearr_25976_26012[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 22))
{var inst_25930 = (state_25940[2]);var state_25940__$1 = state_25940;var statearr_25977_26013 = state_25940__$1;(statearr_25977_26013[2] = inst_25930);
(statearr_25977_26013[1] = 21);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 23))
{var inst_25917 = (state_25940[12]);var inst_25921 = (state_25940[2]);var inst_25922 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25917);var state_25940__$1 = (function (){var statearr_25978 = state_25940;(statearr_25978[18] = inst_25921);
return statearr_25978;
})();var statearr_25979_26014 = state_25940__$1;(statearr_25979_26014[2] = inst_25922);
cljs.core.async.impl.ioc_helpers.process_exception(state_25940__$1);
return cljs.core.constant$keyword$240;
} else
{if((state_val_25941 === 24))
{var inst_25919 = (state_25940[13]);var inst_25869 = (state_25940[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25940,23,Object,null,22);var inst_25926 = cljs.core.async.muxch_STAR_(inst_25919);var state_25940__$1 = state_25940;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25940__$1,25,inst_25926,inst_25869);
} else
{if((state_val_25941 === 25))
{var inst_25928 = (state_25940[2]);var state_25940__$1 = state_25940;var statearr_25980_26015 = state_25940__$1;(statearr_25980_26015[2] = inst_25928);
cljs.core.async.impl.ioc_helpers.process_exception(state_25940__$1);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_25984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25984[0] = state_machine__5507__auto__);
(statearr_25984[1] = 1);
return statearr_25984;
});
var state_machine__5507__auto____1 = (function (state_25940){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25940);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25985){if((e25985 instanceof Object))
{var ex__5510__auto__ = e25985;var statearr_25986_26016 = state_25940;(statearr_25986_26016[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25940);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e25985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__26017 = state_25940;
state_25940 = G__26017;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25940){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25987 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25988);
return statearr_25987;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___26154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26124){var state_val_26125 = (state_26124[1]);if((state_val_26125 === 1))
{var state_26124__$1 = state_26124;var statearr_26126_26155 = state_26124__$1;(statearr_26126_26155[2] = null);
(statearr_26126_26155[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 2))
{var inst_26087 = cljs.core.reset_BANG_(dctr,cnt);var inst_26088 = 0;var state_26124__$1 = (function (){var statearr_26127 = state_26124;(statearr_26127[7] = inst_26088);
(statearr_26127[8] = inst_26087);
return statearr_26127;
})();var statearr_26128_26156 = state_26124__$1;(statearr_26128_26156[2] = null);
(statearr_26128_26156[1] = 4);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 3))
{var inst_26122 = (state_26124[2]);var state_26124__$1 = state_26124;return cljs.core.async.impl.ioc_helpers.return_chan(state_26124__$1,inst_26122);
} else
{if((state_val_26125 === 4))
{var inst_26088 = (state_26124[7]);var inst_26090 = (inst_26088 < cnt);var state_26124__$1 = state_26124;if(cljs.core.truth_(inst_26090))
{var statearr_26129_26157 = state_26124__$1;(statearr_26129_26157[1] = 6);
} else
{var statearr_26130_26158 = state_26124__$1;(statearr_26130_26158[1] = 7);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 5))
{var inst_26108 = (state_26124[2]);var state_26124__$1 = (function (){var statearr_26131 = state_26124;(statearr_26131[9] = inst_26108);
return statearr_26131;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26124__$1,12,dchan);
} else
{if((state_val_26125 === 6))
{var state_26124__$1 = state_26124;var statearr_26132_26159 = state_26124__$1;(statearr_26132_26159[2] = null);
(statearr_26132_26159[1] = 11);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 7))
{var state_26124__$1 = state_26124;var statearr_26133_26160 = state_26124__$1;(statearr_26133_26160[2] = null);
(statearr_26133_26160[1] = 8);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 8))
{var inst_26106 = (state_26124[2]);var state_26124__$1 = state_26124;var statearr_26134_26161 = state_26124__$1;(statearr_26134_26161[2] = inst_26106);
(statearr_26134_26161[1] = 5);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 9))
{var inst_26088 = (state_26124[7]);var inst_26101 = (state_26124[2]);var inst_26102 = (inst_26088 + 1);var inst_26088__$1 = inst_26102;var state_26124__$1 = (function (){var statearr_26135 = state_26124;(statearr_26135[10] = inst_26101);
(statearr_26135[7] = inst_26088__$1);
return statearr_26135;
})();var statearr_26136_26162 = state_26124__$1;(statearr_26136_26162[2] = null);
(statearr_26136_26162[1] = 4);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 10))
{var inst_26092 = (state_26124[2]);var inst_26093 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26124__$1 = (function (){var statearr_26137 = state_26124;(statearr_26137[11] = inst_26092);
return statearr_26137;
})();var statearr_26138_26163 = state_26124__$1;(statearr_26138_26163[2] = inst_26093);
cljs.core.async.impl.ioc_helpers.process_exception(state_26124__$1);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 11))
{var inst_26088 = (state_26124[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26124,10,Object,null,9);var inst_26097 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26088) : chs__$1.call(null,inst_26088));var inst_26098 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26088) : done.call(null,inst_26088));var inst_26099 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26097,inst_26098);var state_26124__$1 = state_26124;var statearr_26139_26164 = state_26124__$1;(statearr_26139_26164[2] = inst_26099);
cljs.core.async.impl.ioc_helpers.process_exception(state_26124__$1);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 12))
{var inst_26110 = (state_26124[12]);var inst_26110__$1 = (state_26124[2]);var inst_26111 = cljs.core.some(cljs.core.nil_QMARK_,inst_26110__$1);var state_26124__$1 = (function (){var statearr_26140 = state_26124;(statearr_26140[12] = inst_26110__$1);
return statearr_26140;
})();if(cljs.core.truth_(inst_26111))
{var statearr_26141_26165 = state_26124__$1;(statearr_26141_26165[1] = 13);
} else
{var statearr_26142_26166 = state_26124__$1;(statearr_26142_26166[1] = 14);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 13))
{var inst_26113 = cljs.core.async.close_BANG_(out);var state_26124__$1 = state_26124;var statearr_26143_26167 = state_26124__$1;(statearr_26143_26167[2] = inst_26113);
(statearr_26143_26167[1] = 15);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 14))
{var inst_26110 = (state_26124[12]);var inst_26115 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26110);var state_26124__$1 = state_26124;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26124__$1,16,out,inst_26115);
} else
{if((state_val_26125 === 15))
{var inst_26120 = (state_26124[2]);var state_26124__$1 = state_26124;var statearr_26144_26168 = state_26124__$1;(statearr_26144_26168[2] = inst_26120);
(statearr_26144_26168[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26125 === 16))
{var inst_26117 = (state_26124[2]);var state_26124__$1 = (function (){var statearr_26145 = state_26124;(statearr_26145[13] = inst_26117);
return statearr_26145;
})();var statearr_26146_26169 = state_26124__$1;(statearr_26146_26169[2] = null);
(statearr_26146_26169[1] = 2);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_26150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26150[0] = state_machine__5507__auto__);
(statearr_26150[1] = 1);
return statearr_26150;
});
var state_machine__5507__auto____1 = (function (state_26124){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26124);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26151){if((e26151 instanceof Object))
{var ex__5510__auto__ = e26151;var statearr_26152_26170 = state_26124;(statearr_26152_26170[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26124);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e26151;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__26171 = state_26124;
state_26124 = G__26171;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26124){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26153 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26154);
return statearr_26153;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26255){var state_val_26256 = (state_26255[1]);if((state_val_26256 === 1))
{var inst_26226 = cljs.core.vec(chs);var inst_26227 = inst_26226;var state_26255__$1 = (function (){var statearr_26257 = state_26255;(statearr_26257[7] = inst_26227);
return statearr_26257;
})();var statearr_26258_26280 = state_26255__$1;(statearr_26258_26280[2] = null);
(statearr_26258_26280[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26256 === 2))
{var inst_26227 = (state_26255[7]);var inst_26229 = cljs.core.count(inst_26227);var inst_26230 = (inst_26229 > 0);var state_26255__$1 = state_26255;if(cljs.core.truth_(inst_26230))
{var statearr_26259_26281 = state_26255__$1;(statearr_26259_26281[1] = 4);
} else
{var statearr_26260_26282 = state_26255__$1;(statearr_26260_26282[1] = 5);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26256 === 3))
{var inst_26253 = (state_26255[2]);var state_26255__$1 = state_26255;return cljs.core.async.impl.ioc_helpers.return_chan(state_26255__$1,inst_26253);
} else
{if((state_val_26256 === 4))
{var inst_26227 = (state_26255[7]);var state_26255__$1 = state_26255;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26255__$1,7,inst_26227);
} else
{if((state_val_26256 === 5))
{var inst_26249 = cljs.core.async.close_BANG_(out);var state_26255__$1 = state_26255;var statearr_26261_26283 = state_26255__$1;(statearr_26261_26283[2] = inst_26249);
(statearr_26261_26283[1] = 6);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26256 === 6))
{var inst_26251 = (state_26255[2]);var state_26255__$1 = state_26255;var statearr_26262_26284 = state_26255__$1;(statearr_26262_26284[2] = inst_26251);
(statearr_26262_26284[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26256 === 7))
{var inst_26234 = (state_26255[8]);var inst_26235 = (state_26255[9]);var inst_26234__$1 = (state_26255[2]);var inst_26235__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26234__$1,0,null);var inst_26236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26234__$1,1,null);var inst_26237 = (inst_26235__$1 == null);var state_26255__$1 = (function (){var statearr_26263 = state_26255;(statearr_26263[10] = inst_26236);
(statearr_26263[8] = inst_26234__$1);
(statearr_26263[9] = inst_26235__$1);
return statearr_26263;
})();if(cljs.core.truth_(inst_26237))
{var statearr_26264_26285 = state_26255__$1;(statearr_26264_26285[1] = 8);
} else
{var statearr_26265_26286 = state_26255__$1;(statearr_26265_26286[1] = 9);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26256 === 8))
{var inst_26236 = (state_26255[10]);var inst_26234 = (state_26255[8]);var inst_26235 = (state_26255[9]);var inst_26227 = (state_26255[7]);var inst_26239 = (function (){var c = inst_26236;var v = inst_26235;var vec__26232 = inst_26234;var cs = inst_26227;return ((function (c,v,vec__26232,cs,inst_26236,inst_26234,inst_26235,inst_26227,state_val_26256){
return (function (p1__26172_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26172_SHARP_);
});
;})(c,v,vec__26232,cs,inst_26236,inst_26234,inst_26235,inst_26227,state_val_26256))
})();var inst_26240 = cljs.core.filterv(inst_26239,inst_26227);var inst_26227__$1 = inst_26240;var state_26255__$1 = (function (){var statearr_26266 = state_26255;(statearr_26266[7] = inst_26227__$1);
return statearr_26266;
})();var statearr_26267_26287 = state_26255__$1;(statearr_26267_26287[2] = null);
(statearr_26267_26287[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26256 === 9))
{var inst_26235 = (state_26255[9]);var state_26255__$1 = state_26255;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26255__$1,11,out,inst_26235);
} else
{if((state_val_26256 === 10))
{var inst_26247 = (state_26255[2]);var state_26255__$1 = state_26255;var statearr_26269_26288 = state_26255__$1;(statearr_26269_26288[2] = inst_26247);
(statearr_26269_26288[1] = 6);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26256 === 11))
{var inst_26227 = (state_26255[7]);var inst_26244 = (state_26255[2]);var tmp26268 = inst_26227;var inst_26227__$1 = tmp26268;var state_26255__$1 = (function (){var statearr_26270 = state_26255;(statearr_26270[7] = inst_26227__$1);
(statearr_26270[11] = inst_26244);
return statearr_26270;
})();var statearr_26271_26289 = state_26255__$1;(statearr_26271_26289[2] = null);
(statearr_26271_26289[1] = 2);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_26275 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26275[0] = state_machine__5507__auto__);
(statearr_26275[1] = 1);
return statearr_26275;
});
var state_machine__5507__auto____1 = (function (state_26255){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26255);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26276){if((e26276 instanceof Object))
{var ex__5510__auto__ = e26276;var statearr_26277_26290 = state_26255;(statearr_26277_26290[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26255);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e26276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__26291 = state_26255;
state_26255 = G__26291;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26255){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26278 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26279);
return statearr_26278;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26361){var state_val_26362 = (state_26361[1]);if((state_val_26362 === 1))
{var inst_26338 = 0;var state_26361__$1 = (function (){var statearr_26363 = state_26361;(statearr_26363[7] = inst_26338);
return statearr_26363;
})();var statearr_26364_26385 = state_26361__$1;(statearr_26364_26385[2] = null);
(statearr_26364_26385[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26362 === 2))
{var inst_26338 = (state_26361[7]);var inst_26340 = (inst_26338 < n);var state_26361__$1 = state_26361;if(cljs.core.truth_(inst_26340))
{var statearr_26365_26386 = state_26361__$1;(statearr_26365_26386[1] = 4);
} else
{var statearr_26366_26387 = state_26361__$1;(statearr_26366_26387[1] = 5);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26362 === 3))
{var inst_26358 = (state_26361[2]);var inst_26359 = cljs.core.async.close_BANG_(out);var state_26361__$1 = (function (){var statearr_26367 = state_26361;(statearr_26367[8] = inst_26358);
return statearr_26367;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26361__$1,inst_26359);
} else
{if((state_val_26362 === 4))
{var state_26361__$1 = state_26361;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26361__$1,7,ch);
} else
{if((state_val_26362 === 5))
{var state_26361__$1 = state_26361;var statearr_26368_26388 = state_26361__$1;(statearr_26368_26388[2] = null);
(statearr_26368_26388[1] = 6);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26362 === 6))
{var inst_26356 = (state_26361[2]);var state_26361__$1 = state_26361;var statearr_26369_26389 = state_26361__$1;(statearr_26369_26389[2] = inst_26356);
(statearr_26369_26389[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26362 === 7))
{var inst_26343 = (state_26361[9]);var inst_26343__$1 = (state_26361[2]);var inst_26344 = (inst_26343__$1 == null);var inst_26345 = cljs.core.not(inst_26344);var state_26361__$1 = (function (){var statearr_26370 = state_26361;(statearr_26370[9] = inst_26343__$1);
return statearr_26370;
})();if(inst_26345)
{var statearr_26371_26390 = state_26361__$1;(statearr_26371_26390[1] = 8);
} else
{var statearr_26372_26391 = state_26361__$1;(statearr_26372_26391[1] = 9);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26362 === 8))
{var inst_26343 = (state_26361[9]);var state_26361__$1 = state_26361;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26361__$1,11,out,inst_26343);
} else
{if((state_val_26362 === 9))
{var state_26361__$1 = state_26361;var statearr_26373_26392 = state_26361__$1;(statearr_26373_26392[2] = null);
(statearr_26373_26392[1] = 10);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26362 === 10))
{var inst_26353 = (state_26361[2]);var state_26361__$1 = state_26361;var statearr_26374_26393 = state_26361__$1;(statearr_26374_26393[2] = inst_26353);
(statearr_26374_26393[1] = 6);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26362 === 11))
{var inst_26338 = (state_26361[7]);var inst_26348 = (state_26361[2]);var inst_26349 = (inst_26338 + 1);var inst_26338__$1 = inst_26349;var state_26361__$1 = (function (){var statearr_26375 = state_26361;(statearr_26375[10] = inst_26348);
(statearr_26375[7] = inst_26338__$1);
return statearr_26375;
})();var statearr_26376_26394 = state_26361__$1;(statearr_26376_26394[2] = null);
(statearr_26376_26394[1] = 2);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_26380 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26380[0] = state_machine__5507__auto__);
(statearr_26380[1] = 1);
return statearr_26380;
});
var state_machine__5507__auto____1 = (function (state_26361){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26361);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26381){if((e26381 instanceof Object))
{var ex__5510__auto__ = e26381;var statearr_26382_26395 = state_26361;(statearr_26382_26395[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26361);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e26381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__26396 = state_26361;
state_26361 = G__26396;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26361){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26383 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26384);
return statearr_26383;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26468){var state_val_26469 = (state_26468[1]);if((state_val_26469 === 1))
{var inst_26445 = null;var state_26468__$1 = (function (){var statearr_26470 = state_26468;(statearr_26470[7] = inst_26445);
return statearr_26470;
})();var statearr_26471_26494 = state_26468__$1;(statearr_26471_26494[2] = null);
(statearr_26471_26494[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26469 === 2))
{var state_26468__$1 = state_26468;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26468__$1,4,ch);
} else
{if((state_val_26469 === 3))
{var inst_26465 = (state_26468[2]);var inst_26466 = cljs.core.async.close_BANG_(out);var state_26468__$1 = (function (){var statearr_26472 = state_26468;(statearr_26472[8] = inst_26465);
return statearr_26472;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26468__$1,inst_26466);
} else
{if((state_val_26469 === 4))
{var inst_26448 = (state_26468[9]);var inst_26448__$1 = (state_26468[2]);var inst_26449 = (inst_26448__$1 == null);var inst_26450 = cljs.core.not(inst_26449);var state_26468__$1 = (function (){var statearr_26473 = state_26468;(statearr_26473[9] = inst_26448__$1);
return statearr_26473;
})();if(inst_26450)
{var statearr_26474_26495 = state_26468__$1;(statearr_26474_26495[1] = 5);
} else
{var statearr_26475_26496 = state_26468__$1;(statearr_26475_26496[1] = 6);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26469 === 5))
{var inst_26448 = (state_26468[9]);var inst_26445 = (state_26468[7]);var inst_26452 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26448,inst_26445);var state_26468__$1 = state_26468;if(inst_26452)
{var statearr_26476_26497 = state_26468__$1;(statearr_26476_26497[1] = 8);
} else
{var statearr_26477_26498 = state_26468__$1;(statearr_26477_26498[1] = 9);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26469 === 6))
{var state_26468__$1 = state_26468;var statearr_26479_26499 = state_26468__$1;(statearr_26479_26499[2] = null);
(statearr_26479_26499[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26469 === 7))
{var inst_26463 = (state_26468[2]);var state_26468__$1 = state_26468;var statearr_26480_26500 = state_26468__$1;(statearr_26480_26500[2] = inst_26463);
(statearr_26480_26500[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26469 === 8))
{var inst_26445 = (state_26468[7]);var tmp26478 = inst_26445;var inst_26445__$1 = tmp26478;var state_26468__$1 = (function (){var statearr_26481 = state_26468;(statearr_26481[7] = inst_26445__$1);
return statearr_26481;
})();var statearr_26482_26501 = state_26468__$1;(statearr_26482_26501[2] = null);
(statearr_26482_26501[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26469 === 9))
{var inst_26448 = (state_26468[9]);var state_26468__$1 = state_26468;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26468__$1,11,out,inst_26448);
} else
{if((state_val_26469 === 10))
{var inst_26460 = (state_26468[2]);var state_26468__$1 = state_26468;var statearr_26483_26502 = state_26468__$1;(statearr_26483_26502[2] = inst_26460);
(statearr_26483_26502[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26469 === 11))
{var inst_26448 = (state_26468[9]);var inst_26457 = (state_26468[2]);var inst_26445 = inst_26448;var state_26468__$1 = (function (){var statearr_26484 = state_26468;(statearr_26484[10] = inst_26457);
(statearr_26484[7] = inst_26445);
return statearr_26484;
})();var statearr_26485_26503 = state_26468__$1;(statearr_26485_26503[2] = null);
(statearr_26485_26503[1] = 2);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_26489 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26489[0] = state_machine__5507__auto__);
(statearr_26489[1] = 1);
return statearr_26489;
});
var state_machine__5507__auto____1 = (function (state_26468){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26468);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26490){if((e26490 instanceof Object))
{var ex__5510__auto__ = e26490;var statearr_26491_26504 = state_26468;(statearr_26491_26504[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26468);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e26490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__26505 = state_26468;
state_26468 = G__26505;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26468){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26492 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26493);
return statearr_26492;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26610){var state_val_26611 = (state_26610[1]);if((state_val_26611 === 1))
{var inst_26573 = (new Array(n));var inst_26574 = inst_26573;var inst_26575 = 0;var state_26610__$1 = (function (){var statearr_26612 = state_26610;(statearr_26612[7] = inst_26575);
(statearr_26612[8] = inst_26574);
return statearr_26612;
})();var statearr_26613_26641 = state_26610__$1;(statearr_26613_26641[2] = null);
(statearr_26613_26641[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26611 === 2))
{var state_26610__$1 = state_26610;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26610__$1,4,ch);
} else
{if((state_val_26611 === 3))
{var inst_26608 = (state_26610[2]);var state_26610__$1 = state_26610;return cljs.core.async.impl.ioc_helpers.return_chan(state_26610__$1,inst_26608);
} else
{if((state_val_26611 === 4))
{var inst_26578 = (state_26610[9]);var inst_26578__$1 = (state_26610[2]);var inst_26579 = (inst_26578__$1 == null);var inst_26580 = cljs.core.not(inst_26579);var state_26610__$1 = (function (){var statearr_26614 = state_26610;(statearr_26614[9] = inst_26578__$1);
return statearr_26614;
})();if(inst_26580)
{var statearr_26615_26642 = state_26610__$1;(statearr_26615_26642[1] = 5);
} else
{var statearr_26616_26643 = state_26610__$1;(statearr_26616_26643[1] = 6);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26611 === 5))
{var inst_26583 = (state_26610[10]);var inst_26578 = (state_26610[9]);var inst_26575 = (state_26610[7]);var inst_26574 = (state_26610[8]);var inst_26582 = (inst_26574[inst_26575] = inst_26578);var inst_26583__$1 = (inst_26575 + 1);var inst_26584 = (inst_26583__$1 < n);var state_26610__$1 = (function (){var statearr_26617 = state_26610;(statearr_26617[10] = inst_26583__$1);
(statearr_26617[11] = inst_26582);
return statearr_26617;
})();if(cljs.core.truth_(inst_26584))
{var statearr_26618_26644 = state_26610__$1;(statearr_26618_26644[1] = 8);
} else
{var statearr_26619_26645 = state_26610__$1;(statearr_26619_26645[1] = 9);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26611 === 6))
{var inst_26575 = (state_26610[7]);var inst_26596 = (inst_26575 > 0);var state_26610__$1 = state_26610;if(cljs.core.truth_(inst_26596))
{var statearr_26621_26646 = state_26610__$1;(statearr_26621_26646[1] = 12);
} else
{var statearr_26622_26647 = state_26610__$1;(statearr_26622_26647[1] = 13);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26611 === 7))
{var inst_26606 = (state_26610[2]);var state_26610__$1 = state_26610;var statearr_26623_26648 = state_26610__$1;(statearr_26623_26648[2] = inst_26606);
(statearr_26623_26648[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26611 === 8))
{var inst_26583 = (state_26610[10]);var inst_26574 = (state_26610[8]);var tmp26620 = inst_26574;var inst_26574__$1 = tmp26620;var inst_26575 = inst_26583;var state_26610__$1 = (function (){var statearr_26624 = state_26610;(statearr_26624[7] = inst_26575);
(statearr_26624[8] = inst_26574__$1);
return statearr_26624;
})();var statearr_26625_26649 = state_26610__$1;(statearr_26625_26649[2] = null);
(statearr_26625_26649[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26611 === 9))
{var inst_26574 = (state_26610[8]);var inst_26588 = cljs.core.vec(inst_26574);var state_26610__$1 = state_26610;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26610__$1,11,out,inst_26588);
} else
{if((state_val_26611 === 10))
{var inst_26594 = (state_26610[2]);var state_26610__$1 = state_26610;var statearr_26626_26650 = state_26610__$1;(statearr_26626_26650[2] = inst_26594);
(statearr_26626_26650[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26611 === 11))
{var inst_26590 = (state_26610[2]);var inst_26591 = (new Array(n));var inst_26574 = inst_26591;var inst_26575 = 0;var state_26610__$1 = (function (){var statearr_26627 = state_26610;(statearr_26627[12] = inst_26590);
(statearr_26627[7] = inst_26575);
(statearr_26627[8] = inst_26574);
return statearr_26627;
})();var statearr_26628_26651 = state_26610__$1;(statearr_26628_26651[2] = null);
(statearr_26628_26651[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26611 === 12))
{var inst_26574 = (state_26610[8]);var inst_26598 = cljs.core.vec(inst_26574);var state_26610__$1 = state_26610;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26610__$1,15,out,inst_26598);
} else
{if((state_val_26611 === 13))
{var state_26610__$1 = state_26610;var statearr_26629_26652 = state_26610__$1;(statearr_26629_26652[2] = null);
(statearr_26629_26652[1] = 14);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26611 === 14))
{var inst_26603 = (state_26610[2]);var inst_26604 = cljs.core.async.close_BANG_(out);var state_26610__$1 = (function (){var statearr_26630 = state_26610;(statearr_26630[13] = inst_26603);
return statearr_26630;
})();var statearr_26631_26653 = state_26610__$1;(statearr_26631_26653[2] = inst_26604);
(statearr_26631_26653[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26611 === 15))
{var inst_26600 = (state_26610[2]);var state_26610__$1 = state_26610;var statearr_26632_26654 = state_26610__$1;(statearr_26632_26654[2] = inst_26600);
(statearr_26632_26654[1] = 14);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_26636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26636[0] = state_machine__5507__auto__);
(statearr_26636[1] = 1);
return statearr_26636;
});
var state_machine__5507__auto____1 = (function (state_26610){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26610);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26637){if((e26637 instanceof Object))
{var ex__5510__auto__ = e26637;var statearr_26638_26655 = state_26610;(statearr_26638_26655[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26610);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e26637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__26656 = state_26610;
state_26610 = G__26656;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26610){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26639 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26640);
return statearr_26639;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26769){var state_val_26770 = (state_26769[1]);if((state_val_26770 === 1))
{var inst_26728 = [];var inst_26729 = inst_26728;var inst_26730 = cljs.core.constant$keyword$253;var state_26769__$1 = (function (){var statearr_26771 = state_26769;(statearr_26771[7] = inst_26729);
(statearr_26771[8] = inst_26730);
return statearr_26771;
})();var statearr_26772_26800 = state_26769__$1;(statearr_26772_26800[2] = null);
(statearr_26772_26800[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26770 === 2))
{var state_26769__$1 = state_26769;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26769__$1,4,ch);
} else
{if((state_val_26770 === 3))
{var inst_26767 = (state_26769[2]);var state_26769__$1 = state_26769;return cljs.core.async.impl.ioc_helpers.return_chan(state_26769__$1,inst_26767);
} else
{if((state_val_26770 === 4))
{var inst_26733 = (state_26769[9]);var inst_26733__$1 = (state_26769[2]);var inst_26734 = (inst_26733__$1 == null);var inst_26735 = cljs.core.not(inst_26734);var state_26769__$1 = (function (){var statearr_26773 = state_26769;(statearr_26773[9] = inst_26733__$1);
return statearr_26773;
})();if(inst_26735)
{var statearr_26774_26801 = state_26769__$1;(statearr_26774_26801[1] = 5);
} else
{var statearr_26775_26802 = state_26769__$1;(statearr_26775_26802[1] = 6);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26770 === 5))
{var inst_26737 = (state_26769[10]);var inst_26733 = (state_26769[9]);var inst_26730 = (state_26769[8]);var inst_26737__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26733) : f.call(null,inst_26733));var inst_26738 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26737__$1,inst_26730);var inst_26739 = cljs.core.keyword_identical_QMARK_(inst_26730,cljs.core.constant$keyword$253);var inst_26740 = (inst_26738) || (inst_26739);var state_26769__$1 = (function (){var statearr_26776 = state_26769;(statearr_26776[10] = inst_26737__$1);
return statearr_26776;
})();if(cljs.core.truth_(inst_26740))
{var statearr_26777_26803 = state_26769__$1;(statearr_26777_26803[1] = 8);
} else
{var statearr_26778_26804 = state_26769__$1;(statearr_26778_26804[1] = 9);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26770 === 6))
{var inst_26729 = (state_26769[7]);var inst_26754 = inst_26729.length;var inst_26755 = (inst_26754 > 0);var state_26769__$1 = state_26769;if(cljs.core.truth_(inst_26755))
{var statearr_26780_26805 = state_26769__$1;(statearr_26780_26805[1] = 12);
} else
{var statearr_26781_26806 = state_26769__$1;(statearr_26781_26806[1] = 13);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_26770 === 7))
{var inst_26765 = (state_26769[2]);var state_26769__$1 = state_26769;var statearr_26782_26807 = state_26769__$1;(statearr_26782_26807[2] = inst_26765);
(statearr_26782_26807[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26770 === 8))
{var inst_26729 = (state_26769[7]);var inst_26737 = (state_26769[10]);var inst_26733 = (state_26769[9]);var inst_26742 = inst_26729.push(inst_26733);var tmp26779 = inst_26729;var inst_26729__$1 = tmp26779;var inst_26730 = inst_26737;var state_26769__$1 = (function (){var statearr_26783 = state_26769;(statearr_26783[7] = inst_26729__$1);
(statearr_26783[11] = inst_26742);
(statearr_26783[8] = inst_26730);
return statearr_26783;
})();var statearr_26784_26808 = state_26769__$1;(statearr_26784_26808[2] = null);
(statearr_26784_26808[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26770 === 9))
{var inst_26729 = (state_26769[7]);var inst_26745 = cljs.core.vec(inst_26729);var state_26769__$1 = state_26769;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26769__$1,11,out,inst_26745);
} else
{if((state_val_26770 === 10))
{var inst_26752 = (state_26769[2]);var state_26769__$1 = state_26769;var statearr_26785_26809 = state_26769__$1;(statearr_26785_26809[2] = inst_26752);
(statearr_26785_26809[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26770 === 11))
{var inst_26737 = (state_26769[10]);var inst_26733 = (state_26769[9]);var inst_26747 = (state_26769[2]);var inst_26748 = [];var inst_26749 = inst_26748.push(inst_26733);var inst_26729 = inst_26748;var inst_26730 = inst_26737;var state_26769__$1 = (function (){var statearr_26786 = state_26769;(statearr_26786[12] = inst_26747);
(statearr_26786[13] = inst_26749);
(statearr_26786[7] = inst_26729);
(statearr_26786[8] = inst_26730);
return statearr_26786;
})();var statearr_26787_26810 = state_26769__$1;(statearr_26787_26810[2] = null);
(statearr_26787_26810[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26770 === 12))
{var inst_26729 = (state_26769[7]);var inst_26757 = cljs.core.vec(inst_26729);var state_26769__$1 = state_26769;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26769__$1,15,out,inst_26757);
} else
{if((state_val_26770 === 13))
{var state_26769__$1 = state_26769;var statearr_26788_26811 = state_26769__$1;(statearr_26788_26811[2] = null);
(statearr_26788_26811[1] = 14);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26770 === 14))
{var inst_26762 = (state_26769[2]);var inst_26763 = cljs.core.async.close_BANG_(out);var state_26769__$1 = (function (){var statearr_26789 = state_26769;(statearr_26789[14] = inst_26762);
return statearr_26789;
})();var statearr_26790_26812 = state_26769__$1;(statearr_26790_26812[2] = inst_26763);
(statearr_26790_26812[1] = 7);
return cljs.core.constant$keyword$240;
} else
{if((state_val_26770 === 15))
{var inst_26759 = (state_26769[2]);var state_26769__$1 = state_26769;var statearr_26791_26813 = state_26769__$1;(statearr_26791_26813[2] = inst_26759);
(statearr_26791_26813[1] = 14);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_26795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26795[0] = state_machine__5507__auto__);
(statearr_26795[1] = 1);
return statearr_26795;
});
var state_machine__5507__auto____1 = (function (state_26769){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26769);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26796){if((e26796 instanceof Object))
{var ex__5510__auto__ = e26796;var statearr_26797_26814 = state_26769;(statearr_26797_26814[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26769);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e26796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__26815 = state_26769;
state_26769 = G__26815;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26769){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26798 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26799);
return statearr_26798;
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
