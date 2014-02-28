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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24293 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24293 = (function (f,fn_handler,meta24294){
this.f = f;
this.fn_handler = fn_handler;
this.meta24294 = meta24294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24293.cljs$lang$type = true;
cljs.core.async.t24293.cljs$lang$ctorStr = "cljs.core.async/t24293";
cljs.core.async.t24293.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24293");
});
cljs.core.async.t24293.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24293.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24293.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24295){var self__ = this;
var _24295__$1 = this;return self__.meta24294;
});
cljs.core.async.t24293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24295,meta24294__$1){var self__ = this;
var _24295__$1 = this;return (new cljs.core.async.t24293(self__.f,self__.fn_handler,meta24294__$1));
});
cljs.core.async.__GT_t24293 = (function __GT_t24293(f__$1,fn_handler__$1,meta24294){return (new cljs.core.async.t24293(f__$1,fn_handler__$1,meta24294));
});
}
return (new cljs.core.async.t24293(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24297 = buff;if(G__24297)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24297.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24297.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24297);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24297);
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
{var val_24298 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24298) : fn1.call(null,val_24298));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24298) : fn1.call(null,val_24298));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24299 = n;var x_24300 = 0;while(true){
if((x_24300 < n__4248__auto___24299))
{(a[x_24300] = 0);
{
var G__24301 = (x_24300 + 1);
x_24300 = G__24301;
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
var G__24302 = (i + 1);
i = G__24302;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24306 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24306 = (function (flag,alt_flag,meta24307){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24307 = meta24307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24306.cljs$lang$type = true;
cljs.core.async.t24306.cljs$lang$ctorStr = "cljs.core.async/t24306";
cljs.core.async.t24306.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24306");
});
cljs.core.async.t24306.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24308){var self__ = this;
var _24308__$1 = this;return self__.meta24307;
});
cljs.core.async.t24306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24308,meta24307__$1){var self__ = this;
var _24308__$1 = this;return (new cljs.core.async.t24306(self__.flag,self__.alt_flag,meta24307__$1));
});
cljs.core.async.__GT_t24306 = (function __GT_t24306(flag__$1,alt_flag__$1,meta24307){return (new cljs.core.async.t24306(flag__$1,alt_flag__$1,meta24307));
});
}
return (new cljs.core.async.t24306(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24312 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24312 = (function (cb,flag,alt_handler,meta24313){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24313 = meta24313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24312.cljs$lang$type = true;
cljs.core.async.t24312.cljs$lang$ctorStr = "cljs.core.async/t24312";
cljs.core.async.t24312.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24312");
});
cljs.core.async.t24312.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24314){var self__ = this;
var _24314__$1 = this;return self__.meta24313;
});
cljs.core.async.t24312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24314,meta24313__$1){var self__ = this;
var _24314__$1 = this;return (new cljs.core.async.t24312(self__.cb,self__.flag,self__.alt_handler,meta24313__$1));
});
cljs.core.async.__GT_t24312 = (function __GT_t24312(cb__$1,flag__$1,alt_handler__$1,meta24313){return (new cljs.core.async.t24312(cb__$1,flag__$1,alt_handler__$1,meta24313));
});
}
return (new cljs.core.async.t24312(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24315_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24315_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24315_SHARP_,port], null)));
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
var G__24316 = (i + 1);
i = G__24316;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$245))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$245], null));
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
var alts_BANG___delegate = function (ports,p__24317){var map__24319 = p__24317;var map__24319__$1 = ((cljs.core.seq_QMARK_(map__24319))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24319):map__24319);var opts = map__24319__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24317 = null;if (arguments.length > 1) {
  p__24317 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24317);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24320){
var ports = cljs.core.first(arglist__24320);
var p__24317 = cljs.core.rest(arglist__24320);
return alts_BANG___delegate(ports,p__24317);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24328 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24328 = (function (ch,f,map_LT_,meta24329){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24329 = meta24329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24328.cljs$lang$type = true;
cljs.core.async.t24328.cljs$lang$ctorStr = "cljs.core.async/t24328";
cljs.core.async.t24328.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24328");
});
cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24331 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24331 = (function (fn1,_,meta24329,ch,f,map_LT_,meta24332){
this.fn1 = fn1;
this._ = _;
this.meta24329 = meta24329;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24332 = meta24332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24331.cljs$lang$type = true;
cljs.core.async.t24331.cljs$lang$ctorStr = "cljs.core.async/t24331";
cljs.core.async.t24331.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24331");
});
cljs.core.async.t24331.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24331.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24321_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24321_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24321_SHARP_) : self__.f.call(null,p1__24321_SHARP_)))) : f1.call(null,(((p1__24321_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24321_SHARP_) : self__.f.call(null,p1__24321_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24333){var self__ = this;
var _24333__$1 = this;return self__.meta24332;
});
cljs.core.async.t24331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24333,meta24332__$1){var self__ = this;
var _24333__$1 = this;return (new cljs.core.async.t24331(self__.fn1,self__._,self__.meta24329,self__.ch,self__.f,self__.map_LT_,meta24332__$1));
});
cljs.core.async.__GT_t24331 = (function __GT_t24331(fn1__$1,___$2,meta24329__$1,ch__$2,f__$2,map_LT___$2,meta24332){return (new cljs.core.async.t24331(fn1__$1,___$2,meta24329__$1,ch__$2,f__$2,map_LT___$2,meta24332));
});
}
return (new cljs.core.async.t24331(fn1,___$1,self__.meta24329,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24330){var self__ = this;
var _24330__$1 = this;return self__.meta24329;
});
cljs.core.async.t24328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24330,meta24329__$1){var self__ = this;
var _24330__$1 = this;return (new cljs.core.async.t24328(self__.ch,self__.f,self__.map_LT_,meta24329__$1));
});
cljs.core.async.__GT_t24328 = (function __GT_t24328(ch__$1,f__$1,map_LT___$1,meta24329){return (new cljs.core.async.t24328(ch__$1,f__$1,map_LT___$1,meta24329));
});
}
return (new cljs.core.async.t24328(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24337 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24337 = (function (ch,f,map_GT_,meta24338){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24338 = meta24338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24337.cljs$lang$type = true;
cljs.core.async.t24337.cljs$lang$ctorStr = "cljs.core.async/t24337";
cljs.core.async.t24337.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24337");
});
cljs.core.async.t24337.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24337.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24337.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24339){var self__ = this;
var _24339__$1 = this;return self__.meta24338;
});
cljs.core.async.t24337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24339,meta24338__$1){var self__ = this;
var _24339__$1 = this;return (new cljs.core.async.t24337(self__.ch,self__.f,self__.map_GT_,meta24338__$1));
});
cljs.core.async.__GT_t24337 = (function __GT_t24337(ch__$1,f__$1,map_GT___$1,meta24338){return (new cljs.core.async.t24337(ch__$1,f__$1,map_GT___$1,meta24338));
});
}
return (new cljs.core.async.t24337(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24343 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24343 = (function (ch,p,filter_GT_,meta24344){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24344 = meta24344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24343.cljs$lang$type = true;
cljs.core.async.t24343.cljs$lang$ctorStr = "cljs.core.async/t24343";
cljs.core.async.t24343.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24343");
});
cljs.core.async.t24343.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24343.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24343.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24343.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24343.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24343.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24345){var self__ = this;
var _24345__$1 = this;return self__.meta24344;
});
cljs.core.async.t24343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24345,meta24344__$1){var self__ = this;
var _24345__$1 = this;return (new cljs.core.async.t24343(self__.ch,self__.p,self__.filter_GT_,meta24344__$1));
});
cljs.core.async.__GT_t24343 = (function __GT_t24343(ch__$1,p__$1,filter_GT___$1,meta24344){return (new cljs.core.async.t24343(ch__$1,p__$1,filter_GT___$1,meta24344));
});
}
return (new cljs.core.async.t24343(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24407){var state_val_24408 = (state_24407[1]);if((state_val_24408 === 1))
{var state_24407__$1 = state_24407;var statearr_24409_24429 = state_24407__$1;(statearr_24409_24429[2] = null);
(statearr_24409_24429[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24408 === 2))
{var state_24407__$1 = state_24407;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24407__$1,4,ch);
} else
{if((state_val_24408 === 3))
{var inst_24405 = (state_24407[2]);var state_24407__$1 = state_24407;return cljs.core.async.impl.ioc_helpers.return_chan(state_24407__$1,inst_24405);
} else
{if((state_val_24408 === 4))
{var inst_24389 = (state_24407[7]);var inst_24389__$1 = (state_24407[2]);var inst_24390 = (inst_24389__$1 == null);var state_24407__$1 = (function (){var statearr_24410 = state_24407;(statearr_24410[7] = inst_24389__$1);
return statearr_24410;
})();if(cljs.core.truth_(inst_24390))
{var statearr_24411_24430 = state_24407__$1;(statearr_24411_24430[1] = 5);
} else
{var statearr_24412_24431 = state_24407__$1;(statearr_24412_24431[1] = 6);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24408 === 5))
{var inst_24392 = cljs.core.async.close_BANG_(out);var state_24407__$1 = state_24407;var statearr_24413_24432 = state_24407__$1;(statearr_24413_24432[2] = inst_24392);
(statearr_24413_24432[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24408 === 6))
{var inst_24389 = (state_24407[7]);var inst_24394 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24389) : p.call(null,inst_24389));var state_24407__$1 = state_24407;if(cljs.core.truth_(inst_24394))
{var statearr_24414_24433 = state_24407__$1;(statearr_24414_24433[1] = 8);
} else
{var statearr_24415_24434 = state_24407__$1;(statearr_24415_24434[1] = 9);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24408 === 7))
{var inst_24403 = (state_24407[2]);var state_24407__$1 = state_24407;var statearr_24416_24435 = state_24407__$1;(statearr_24416_24435[2] = inst_24403);
(statearr_24416_24435[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24408 === 8))
{var inst_24389 = (state_24407[7]);var state_24407__$1 = state_24407;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24407__$1,11,out,inst_24389);
} else
{if((state_val_24408 === 9))
{var state_24407__$1 = state_24407;var statearr_24417_24436 = state_24407__$1;(statearr_24417_24436[2] = null);
(statearr_24417_24436[1] = 10);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24408 === 10))
{var inst_24400 = (state_24407[2]);var state_24407__$1 = (function (){var statearr_24418 = state_24407;(statearr_24418[8] = inst_24400);
return statearr_24418;
})();var statearr_24419_24437 = state_24407__$1;(statearr_24419_24437[2] = null);
(statearr_24419_24437[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24408 === 11))
{var inst_24397 = (state_24407[2]);var state_24407__$1 = state_24407;var statearr_24420_24438 = state_24407__$1;(statearr_24420_24438[2] = inst_24397);
(statearr_24420_24438[1] = 10);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_24424 = [null,null,null,null,null,null,null,null,null];(statearr_24424[0] = state_machine__5507__auto__);
(statearr_24424[1] = 1);
return statearr_24424;
});
var state_machine__5507__auto____1 = (function (state_24407){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24407);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24425){if((e24425 instanceof Object))
{var ex__5510__auto__ = e24425;var statearr_24426_24439 = state_24407;(statearr_24426_24439[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24407);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e24425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__24440 = state_24407;
state_24407 = G__24440;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24407){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24427 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24428);
return statearr_24427;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24592){var state_val_24593 = (state_24592[1]);if((state_val_24593 === 1))
{var state_24592__$1 = state_24592;var statearr_24594_24631 = state_24592__$1;(statearr_24594_24631[2] = null);
(statearr_24594_24631[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 2))
{var state_24592__$1 = state_24592;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24592__$1,4,in$);
} else
{if((state_val_24593 === 3))
{var inst_24590 = (state_24592[2]);var state_24592__$1 = state_24592;return cljs.core.async.impl.ioc_helpers.return_chan(state_24592__$1,inst_24590);
} else
{if((state_val_24593 === 4))
{var inst_24538 = (state_24592[7]);var inst_24538__$1 = (state_24592[2]);var inst_24539 = (inst_24538__$1 == null);var state_24592__$1 = (function (){var statearr_24595 = state_24592;(statearr_24595[7] = inst_24538__$1);
return statearr_24595;
})();if(cljs.core.truth_(inst_24539))
{var statearr_24596_24632 = state_24592__$1;(statearr_24596_24632[1] = 5);
} else
{var statearr_24597_24633 = state_24592__$1;(statearr_24597_24633[1] = 6);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 5))
{var inst_24541 = cljs.core.async.close_BANG_(out);var state_24592__$1 = state_24592;var statearr_24598_24634 = state_24592__$1;(statearr_24598_24634[2] = inst_24541);
(statearr_24598_24634[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 6))
{var inst_24538 = (state_24592[7]);var inst_24543 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24538) : f.call(null,inst_24538));var inst_24548 = cljs.core.seq(inst_24543);var inst_24549 = inst_24548;var inst_24550 = null;var inst_24551 = 0;var inst_24552 = 0;var state_24592__$1 = (function (){var statearr_24599 = state_24592;(statearr_24599[8] = inst_24549);
(statearr_24599[9] = inst_24551);
(statearr_24599[10] = inst_24552);
(statearr_24599[11] = inst_24550);
return statearr_24599;
})();var statearr_24600_24635 = state_24592__$1;(statearr_24600_24635[2] = null);
(statearr_24600_24635[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 7))
{var inst_24588 = (state_24592[2]);var state_24592__$1 = state_24592;var statearr_24601_24636 = state_24592__$1;(statearr_24601_24636[2] = inst_24588);
(statearr_24601_24636[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 8))
{var inst_24551 = (state_24592[9]);var inst_24552 = (state_24592[10]);var inst_24554 = (inst_24552 < inst_24551);var inst_24555 = inst_24554;var state_24592__$1 = state_24592;if(cljs.core.truth_(inst_24555))
{var statearr_24602_24637 = state_24592__$1;(statearr_24602_24637[1] = 10);
} else
{var statearr_24603_24638 = state_24592__$1;(statearr_24603_24638[1] = 11);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 9))
{var inst_24585 = (state_24592[2]);var state_24592__$1 = (function (){var statearr_24604 = state_24592;(statearr_24604[12] = inst_24585);
return statearr_24604;
})();var statearr_24605_24639 = state_24592__$1;(statearr_24605_24639[2] = null);
(statearr_24605_24639[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 10))
{var inst_24552 = (state_24592[10]);var inst_24550 = (state_24592[11]);var inst_24557 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24550,inst_24552);var state_24592__$1 = state_24592;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24592__$1,13,out,inst_24557);
} else
{if((state_val_24593 === 11))
{var inst_24563 = (state_24592[13]);var inst_24549 = (state_24592[8]);var inst_24563__$1 = cljs.core.seq(inst_24549);var state_24592__$1 = (function (){var statearr_24609 = state_24592;(statearr_24609[13] = inst_24563__$1);
return statearr_24609;
})();if(inst_24563__$1)
{var statearr_24610_24640 = state_24592__$1;(statearr_24610_24640[1] = 14);
} else
{var statearr_24611_24641 = state_24592__$1;(statearr_24611_24641[1] = 15);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 12))
{var inst_24583 = (state_24592[2]);var state_24592__$1 = state_24592;var statearr_24612_24642 = state_24592__$1;(statearr_24612_24642[2] = inst_24583);
(statearr_24612_24642[1] = 9);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 13))
{var inst_24549 = (state_24592[8]);var inst_24551 = (state_24592[9]);var inst_24552 = (state_24592[10]);var inst_24550 = (state_24592[11]);var inst_24559 = (state_24592[2]);var inst_24560 = (inst_24552 + 1);var tmp24606 = inst_24549;var tmp24607 = inst_24551;var tmp24608 = inst_24550;var inst_24549__$1 = tmp24606;var inst_24550__$1 = tmp24608;var inst_24551__$1 = tmp24607;var inst_24552__$1 = inst_24560;var state_24592__$1 = (function (){var statearr_24613 = state_24592;(statearr_24613[14] = inst_24559);
(statearr_24613[8] = inst_24549__$1);
(statearr_24613[9] = inst_24551__$1);
(statearr_24613[10] = inst_24552__$1);
(statearr_24613[11] = inst_24550__$1);
return statearr_24613;
})();var statearr_24614_24643 = state_24592__$1;(statearr_24614_24643[2] = null);
(statearr_24614_24643[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 14))
{var inst_24563 = (state_24592[13]);var inst_24565 = cljs.core.chunked_seq_QMARK_(inst_24563);var state_24592__$1 = state_24592;if(inst_24565)
{var statearr_24615_24644 = state_24592__$1;(statearr_24615_24644[1] = 17);
} else
{var statearr_24616_24645 = state_24592__$1;(statearr_24616_24645[1] = 18);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 15))
{var state_24592__$1 = state_24592;var statearr_24617_24646 = state_24592__$1;(statearr_24617_24646[2] = null);
(statearr_24617_24646[1] = 16);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 16))
{var inst_24581 = (state_24592[2]);var state_24592__$1 = state_24592;var statearr_24618_24647 = state_24592__$1;(statearr_24618_24647[2] = inst_24581);
(statearr_24618_24647[1] = 12);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 17))
{var inst_24563 = (state_24592[13]);var inst_24567 = cljs.core.chunk_first(inst_24563);var inst_24568 = cljs.core.chunk_rest(inst_24563);var inst_24569 = cljs.core.count(inst_24567);var inst_24549 = inst_24568;var inst_24550 = inst_24567;var inst_24551 = inst_24569;var inst_24552 = 0;var state_24592__$1 = (function (){var statearr_24619 = state_24592;(statearr_24619[8] = inst_24549);
(statearr_24619[9] = inst_24551);
(statearr_24619[10] = inst_24552);
(statearr_24619[11] = inst_24550);
return statearr_24619;
})();var statearr_24620_24648 = state_24592__$1;(statearr_24620_24648[2] = null);
(statearr_24620_24648[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 18))
{var inst_24563 = (state_24592[13]);var inst_24572 = cljs.core.first(inst_24563);var state_24592__$1 = state_24592;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24592__$1,20,out,inst_24572);
} else
{if((state_val_24593 === 19))
{var inst_24578 = (state_24592[2]);var state_24592__$1 = state_24592;var statearr_24621_24649 = state_24592__$1;(statearr_24621_24649[2] = inst_24578);
(statearr_24621_24649[1] = 16);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24593 === 20))
{var inst_24563 = (state_24592[13]);var inst_24574 = (state_24592[2]);var inst_24575 = cljs.core.next(inst_24563);var inst_24549 = inst_24575;var inst_24550 = null;var inst_24551 = 0;var inst_24552 = 0;var state_24592__$1 = (function (){var statearr_24622 = state_24592;(statearr_24622[15] = inst_24574);
(statearr_24622[8] = inst_24549);
(statearr_24622[9] = inst_24551);
(statearr_24622[10] = inst_24552);
(statearr_24622[11] = inst_24550);
return statearr_24622;
})();var statearr_24623_24650 = state_24592__$1;(statearr_24623_24650[2] = null);
(statearr_24623_24650[1] = 8);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_24627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24627[0] = state_machine__5507__auto__);
(statearr_24627[1] = 1);
return statearr_24627;
});
var state_machine__5507__auto____1 = (function (state_24592){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24592);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24628){if((e24628 instanceof Object))
{var ex__5510__auto__ = e24628;var statearr_24629_24651 = state_24592;(statearr_24629_24651[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24592);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e24628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__24652 = state_24592;
state_24592 = G__24652;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24592){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24630 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24630;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24712){var state_val_24713 = (state_24712[1]);if((state_val_24713 === 1))
{var state_24712__$1 = state_24712;var statearr_24714_24734 = state_24712__$1;(statearr_24714_24734[2] = null);
(statearr_24714_24734[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24713 === 2))
{var state_24712__$1 = state_24712;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24712__$1,4,from);
} else
{if((state_val_24713 === 3))
{var inst_24710 = (state_24712[2]);var state_24712__$1 = state_24712;return cljs.core.async.impl.ioc_helpers.return_chan(state_24712__$1,inst_24710);
} else
{if((state_val_24713 === 4))
{var inst_24695 = (state_24712[7]);var inst_24695__$1 = (state_24712[2]);var inst_24696 = (inst_24695__$1 == null);var state_24712__$1 = (function (){var statearr_24715 = state_24712;(statearr_24715[7] = inst_24695__$1);
return statearr_24715;
})();if(cljs.core.truth_(inst_24696))
{var statearr_24716_24735 = state_24712__$1;(statearr_24716_24735[1] = 5);
} else
{var statearr_24717_24736 = state_24712__$1;(statearr_24717_24736[1] = 6);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24713 === 5))
{var state_24712__$1 = state_24712;if(cljs.core.truth_(close_QMARK_))
{var statearr_24718_24737 = state_24712__$1;(statearr_24718_24737[1] = 8);
} else
{var statearr_24719_24738 = state_24712__$1;(statearr_24719_24738[1] = 9);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24713 === 6))
{var inst_24695 = (state_24712[7]);var state_24712__$1 = state_24712;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24712__$1,11,to,inst_24695);
} else
{if((state_val_24713 === 7))
{var inst_24708 = (state_24712[2]);var state_24712__$1 = state_24712;var statearr_24720_24739 = state_24712__$1;(statearr_24720_24739[2] = inst_24708);
(statearr_24720_24739[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24713 === 8))
{var inst_24699 = cljs.core.async.close_BANG_(to);var state_24712__$1 = state_24712;var statearr_24721_24740 = state_24712__$1;(statearr_24721_24740[2] = inst_24699);
(statearr_24721_24740[1] = 10);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24713 === 9))
{var state_24712__$1 = state_24712;var statearr_24722_24741 = state_24712__$1;(statearr_24722_24741[2] = null);
(statearr_24722_24741[1] = 10);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24713 === 10))
{var inst_24702 = (state_24712[2]);var state_24712__$1 = state_24712;var statearr_24723_24742 = state_24712__$1;(statearr_24723_24742[2] = inst_24702);
(statearr_24723_24742[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24713 === 11))
{var inst_24705 = (state_24712[2]);var state_24712__$1 = (function (){var statearr_24724 = state_24712;(statearr_24724[8] = inst_24705);
return statearr_24724;
})();var statearr_24725_24743 = state_24712__$1;(statearr_24725_24743[2] = null);
(statearr_24725_24743[1] = 2);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_24729 = [null,null,null,null,null,null,null,null,null];(statearr_24729[0] = state_machine__5507__auto__);
(statearr_24729[1] = 1);
return statearr_24729;
});
var state_machine__5507__auto____1 = (function (state_24712){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24712);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24730){if((e24730 instanceof Object))
{var ex__5510__auto__ = e24730;var statearr_24731_24744 = state_24712;(statearr_24731_24744[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24712);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e24730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__24745 = state_24712;
state_24712 = G__24745;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24712){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24732 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24733);
return statearr_24732;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24810){var state_val_24811 = (state_24810[1]);if((state_val_24811 === 1))
{var state_24810__$1 = state_24810;var statearr_24812_24833 = state_24810__$1;(statearr_24812_24833[2] = null);
(statearr_24812_24833[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24811 === 2))
{var state_24810__$1 = state_24810;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24810__$1,4,ch);
} else
{if((state_val_24811 === 3))
{var inst_24808 = (state_24810[2]);var state_24810__$1 = state_24810;return cljs.core.async.impl.ioc_helpers.return_chan(state_24810__$1,inst_24808);
} else
{if((state_val_24811 === 4))
{var inst_24791 = (state_24810[7]);var inst_24791__$1 = (state_24810[2]);var inst_24792 = (inst_24791__$1 == null);var state_24810__$1 = (function (){var statearr_24813 = state_24810;(statearr_24813[7] = inst_24791__$1);
return statearr_24813;
})();if(cljs.core.truth_(inst_24792))
{var statearr_24814_24834 = state_24810__$1;(statearr_24814_24834[1] = 5);
} else
{var statearr_24815_24835 = state_24810__$1;(statearr_24815_24835[1] = 6);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24811 === 5))
{var inst_24794 = cljs.core.async.close_BANG_(tc);var inst_24795 = cljs.core.async.close_BANG_(fc);var state_24810__$1 = (function (){var statearr_24816 = state_24810;(statearr_24816[8] = inst_24794);
return statearr_24816;
})();var statearr_24817_24836 = state_24810__$1;(statearr_24817_24836[2] = inst_24795);
(statearr_24817_24836[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24811 === 6))
{var inst_24791 = (state_24810[7]);var inst_24797 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24791) : p.call(null,inst_24791));var state_24810__$1 = state_24810;if(cljs.core.truth_(inst_24797))
{var statearr_24818_24837 = state_24810__$1;(statearr_24818_24837[1] = 9);
} else
{var statearr_24819_24838 = state_24810__$1;(statearr_24819_24838[1] = 10);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24811 === 7))
{var inst_24806 = (state_24810[2]);var state_24810__$1 = state_24810;var statearr_24820_24839 = state_24810__$1;(statearr_24820_24839[2] = inst_24806);
(statearr_24820_24839[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24811 === 8))
{var inst_24803 = (state_24810[2]);var state_24810__$1 = (function (){var statearr_24821 = state_24810;(statearr_24821[9] = inst_24803);
return statearr_24821;
})();var statearr_24822_24840 = state_24810__$1;(statearr_24822_24840[2] = null);
(statearr_24822_24840[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24811 === 9))
{var state_24810__$1 = state_24810;var statearr_24823_24841 = state_24810__$1;(statearr_24823_24841[2] = tc);
(statearr_24823_24841[1] = 11);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24811 === 10))
{var state_24810__$1 = state_24810;var statearr_24824_24842 = state_24810__$1;(statearr_24824_24842[2] = fc);
(statearr_24824_24842[1] = 11);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24811 === 11))
{var inst_24791 = (state_24810[7]);var inst_24801 = (state_24810[2]);var state_24810__$1 = state_24810;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24810__$1,8,inst_24801,inst_24791);
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
var state_machine__5507__auto____0 = (function (){var statearr_24828 = [null,null,null,null,null,null,null,null,null,null];(statearr_24828[0] = state_machine__5507__auto__);
(statearr_24828[1] = 1);
return statearr_24828;
});
var state_machine__5507__auto____1 = (function (state_24810){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24810);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24829){if((e24829 instanceof Object))
{var ex__5510__auto__ = e24829;var statearr_24830_24843 = state_24810;(statearr_24830_24843[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24810);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e24829;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__24844 = state_24810;
state_24810 = G__24844;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24810){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24831 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24832);
return statearr_24831;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24891){var state_val_24892 = (state_24891[1]);if((state_val_24892 === 7))
{var inst_24887 = (state_24891[2]);var state_24891__$1 = state_24891;var statearr_24893_24909 = state_24891__$1;(statearr_24893_24909[2] = inst_24887);
(statearr_24893_24909[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24892 === 6))
{var inst_24880 = (state_24891[7]);var inst_24877 = (state_24891[8]);var inst_24884 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24877,inst_24880) : f.call(null,inst_24877,inst_24880));var inst_24877__$1 = inst_24884;var state_24891__$1 = (function (){var statearr_24894 = state_24891;(statearr_24894[8] = inst_24877__$1);
return statearr_24894;
})();var statearr_24895_24910 = state_24891__$1;(statearr_24895_24910[2] = null);
(statearr_24895_24910[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24892 === 5))
{var inst_24877 = (state_24891[8]);var state_24891__$1 = state_24891;var statearr_24896_24911 = state_24891__$1;(statearr_24896_24911[2] = inst_24877);
(statearr_24896_24911[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24892 === 4))
{var inst_24880 = (state_24891[7]);var inst_24880__$1 = (state_24891[2]);var inst_24881 = (inst_24880__$1 == null);var state_24891__$1 = (function (){var statearr_24897 = state_24891;(statearr_24897[7] = inst_24880__$1);
return statearr_24897;
})();if(cljs.core.truth_(inst_24881))
{var statearr_24898_24912 = state_24891__$1;(statearr_24898_24912[1] = 5);
} else
{var statearr_24899_24913 = state_24891__$1;(statearr_24899_24913[1] = 6);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24892 === 3))
{var inst_24889 = (state_24891[2]);var state_24891__$1 = state_24891;return cljs.core.async.impl.ioc_helpers.return_chan(state_24891__$1,inst_24889);
} else
{if((state_val_24892 === 2))
{var state_24891__$1 = state_24891;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24891__$1,4,ch);
} else
{if((state_val_24892 === 1))
{var inst_24877 = init;var state_24891__$1 = (function (){var statearr_24900 = state_24891;(statearr_24900[8] = inst_24877);
return statearr_24900;
})();var statearr_24901_24914 = state_24891__$1;(statearr_24901_24914[2] = null);
(statearr_24901_24914[1] = 2);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_24905 = [null,null,null,null,null,null,null,null,null];(statearr_24905[0] = state_machine__5507__auto__);
(statearr_24905[1] = 1);
return statearr_24905;
});
var state_machine__5507__auto____1 = (function (state_24891){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24891);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24906){if((e24906 instanceof Object))
{var ex__5510__auto__ = e24906;var statearr_24907_24915 = state_24891;(statearr_24907_24915[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24891);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e24906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__24916 = state_24891;
state_24891 = G__24916;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24891){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24908 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24908;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24978){var state_val_24979 = (state_24978[1]);if((state_val_24979 === 1))
{var inst_24958 = cljs.core.seq(coll);var inst_24959 = inst_24958;var state_24978__$1 = (function (){var statearr_24980 = state_24978;(statearr_24980[7] = inst_24959);
return statearr_24980;
})();var statearr_24981_24999 = state_24978__$1;(statearr_24981_24999[2] = null);
(statearr_24981_24999[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24979 === 2))
{var inst_24959 = (state_24978[7]);var state_24978__$1 = state_24978;if(cljs.core.truth_(inst_24959))
{var statearr_24982_25000 = state_24978__$1;(statearr_24982_25000[1] = 4);
} else
{var statearr_24983_25001 = state_24978__$1;(statearr_24983_25001[1] = 5);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24979 === 3))
{var inst_24976 = (state_24978[2]);var state_24978__$1 = state_24978;return cljs.core.async.impl.ioc_helpers.return_chan(state_24978__$1,inst_24976);
} else
{if((state_val_24979 === 4))
{var inst_24959 = (state_24978[7]);var inst_24962 = cljs.core.first(inst_24959);var state_24978__$1 = state_24978;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24978__$1,7,ch,inst_24962);
} else
{if((state_val_24979 === 5))
{var state_24978__$1 = state_24978;if(cljs.core.truth_(close_QMARK_))
{var statearr_24984_25002 = state_24978__$1;(statearr_24984_25002[1] = 8);
} else
{var statearr_24985_25003 = state_24978__$1;(statearr_24985_25003[1] = 9);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_24979 === 6))
{var inst_24974 = (state_24978[2]);var state_24978__$1 = state_24978;var statearr_24986_25004 = state_24978__$1;(statearr_24986_25004[2] = inst_24974);
(statearr_24986_25004[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24979 === 7))
{var inst_24959 = (state_24978[7]);var inst_24964 = (state_24978[2]);var inst_24965 = cljs.core.next(inst_24959);var inst_24959__$1 = inst_24965;var state_24978__$1 = (function (){var statearr_24987 = state_24978;(statearr_24987[8] = inst_24964);
(statearr_24987[7] = inst_24959__$1);
return statearr_24987;
})();var statearr_24988_25005 = state_24978__$1;(statearr_24988_25005[2] = null);
(statearr_24988_25005[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24979 === 8))
{var inst_24969 = cljs.core.async.close_BANG_(ch);var state_24978__$1 = state_24978;var statearr_24989_25006 = state_24978__$1;(statearr_24989_25006[2] = inst_24969);
(statearr_24989_25006[1] = 10);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24979 === 9))
{var state_24978__$1 = state_24978;var statearr_24990_25007 = state_24978__$1;(statearr_24990_25007[2] = null);
(statearr_24990_25007[1] = 10);
return cljs.core.constant$keyword$255;
} else
{if((state_val_24979 === 10))
{var inst_24972 = (state_24978[2]);var state_24978__$1 = state_24978;var statearr_24991_25008 = state_24978__$1;(statearr_24991_25008[2] = inst_24972);
(statearr_24991_25008[1] = 6);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_24995 = [null,null,null,null,null,null,null,null,null];(statearr_24995[0] = state_machine__5507__auto__);
(statearr_24995[1] = 1);
return statearr_24995;
});
var state_machine__5507__auto____1 = (function (state_24978){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24978);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24996){if((e24996 instanceof Object))
{var ex__5510__auto__ = e24996;var statearr_24997_25009 = state_24978;(statearr_24997_25009[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24978);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e24996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__25010 = state_24978;
state_24978 = G__25010;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24978){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24998 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24998;
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
cljs.core.async.Mux = (function (){var obj25012 = {};return obj25012;
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
cljs.core.async.Mult = (function (){var obj25014 = {};return obj25014;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25238 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25238 = (function (cs,ch,mult,meta25239){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25239 = meta25239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25238.cljs$lang$type = true;
cljs.core.async.t25238.cljs$lang$ctorStr = "cljs.core.async/t25238";
cljs.core.async.t25238.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25238");
});})(cs))
;
cljs.core.async.t25238.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25238.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25238.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25238.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25238.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25240){var self__ = this;
var _25240__$1 = this;return self__.meta25239;
});})(cs))
;
cljs.core.async.t25238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25240,meta25239__$1){var self__ = this;
var _25240__$1 = this;return (new cljs.core.async.t25238(self__.cs,self__.ch,self__.mult,meta25239__$1));
});})(cs))
;
cljs.core.async.__GT_t25238 = ((function (cs){
return (function __GT_t25238(cs__$1,ch__$1,mult__$1,meta25239){return (new cljs.core.async.t25238(cs__$1,ch__$1,mult__$1,meta25239));
});})(cs))
;
}
return (new cljs.core.async.t25238(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25375){var state_val_25376 = (state_25375[1]);if((state_val_25376 === 32))
{var inst_25319 = (state_25375[7]);var inst_25243 = (state_25375[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25375,31,Object,null,30);var inst_25326 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25319,inst_25243,done);var state_25375__$1 = state_25375;var statearr_25377_25462 = state_25375__$1;(statearr_25377_25462[2] = inst_25326);
cljs.core.async.impl.ioc_helpers.process_exception(state_25375__$1);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 1))
{var state_25375__$1 = state_25375;var statearr_25378_25463 = state_25375__$1;(statearr_25378_25463[2] = null);
(statearr_25378_25463[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 33))
{var inst_25332 = (state_25375[9]);var inst_25334 = cljs.core.chunked_seq_QMARK_(inst_25332);var state_25375__$1 = state_25375;if(inst_25334)
{var statearr_25379_25464 = state_25375__$1;(statearr_25379_25464[1] = 36);
} else
{var statearr_25380_25465 = state_25375__$1;(statearr_25380_25465[1] = 37);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 2))
{var state_25375__$1 = state_25375;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25375__$1,4,ch);
} else
{if((state_val_25376 === 34))
{var state_25375__$1 = state_25375;var statearr_25381_25466 = state_25375__$1;(statearr_25381_25466[2] = null);
(statearr_25381_25466[1] = 35);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 3))
{var inst_25373 = (state_25375[2]);var state_25375__$1 = state_25375;return cljs.core.async.impl.ioc_helpers.return_chan(state_25375__$1,inst_25373);
} else
{if((state_val_25376 === 35))
{var inst_25357 = (state_25375[2]);var state_25375__$1 = state_25375;var statearr_25382_25467 = state_25375__$1;(statearr_25382_25467[2] = inst_25357);
(statearr_25382_25467[1] = 29);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 4))
{var inst_25243 = (state_25375[8]);var inst_25243__$1 = (state_25375[2]);var inst_25244 = (inst_25243__$1 == null);var state_25375__$1 = (function (){var statearr_25383 = state_25375;(statearr_25383[8] = inst_25243__$1);
return statearr_25383;
})();if(cljs.core.truth_(inst_25244))
{var statearr_25384_25468 = state_25375__$1;(statearr_25384_25468[1] = 5);
} else
{var statearr_25385_25469 = state_25375__$1;(statearr_25385_25469[1] = 6);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 36))
{var inst_25332 = (state_25375[9]);var inst_25336 = cljs.core.chunk_first(inst_25332);var inst_25337 = cljs.core.chunk_rest(inst_25332);var inst_25338 = cljs.core.count(inst_25336);var inst_25311 = inst_25337;var inst_25312 = inst_25336;var inst_25313 = inst_25338;var inst_25314 = 0;var state_25375__$1 = (function (){var statearr_25386 = state_25375;(statearr_25386[10] = inst_25311);
(statearr_25386[11] = inst_25314);
(statearr_25386[12] = inst_25313);
(statearr_25386[13] = inst_25312);
return statearr_25386;
})();var statearr_25387_25470 = state_25375__$1;(statearr_25387_25470[2] = null);
(statearr_25387_25470[1] = 25);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 5))
{var inst_25250 = cljs.core.deref(cs);var inst_25251 = cljs.core.seq(inst_25250);var inst_25252 = inst_25251;var inst_25253 = null;var inst_25254 = 0;var inst_25255 = 0;var state_25375__$1 = (function (){var statearr_25388 = state_25375;(statearr_25388[14] = inst_25255);
(statearr_25388[15] = inst_25253);
(statearr_25388[16] = inst_25254);
(statearr_25388[17] = inst_25252);
return statearr_25388;
})();var statearr_25389_25471 = state_25375__$1;(statearr_25389_25471[2] = null);
(statearr_25389_25471[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 37))
{var inst_25332 = (state_25375[9]);var inst_25341 = cljs.core.first(inst_25332);var state_25375__$1 = (function (){var statearr_25390 = state_25375;(statearr_25390[18] = inst_25341);
return statearr_25390;
})();var statearr_25391_25472 = state_25375__$1;(statearr_25391_25472[2] = null);
(statearr_25391_25472[1] = 41);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 6))
{var inst_25303 = (state_25375[19]);var inst_25302 = cljs.core.deref(cs);var inst_25303__$1 = cljs.core.keys(inst_25302);var inst_25304 = cljs.core.count(inst_25303__$1);var inst_25305 = cljs.core.reset_BANG_(dctr,inst_25304);var inst_25310 = cljs.core.seq(inst_25303__$1);var inst_25311 = inst_25310;var inst_25312 = null;var inst_25313 = 0;var inst_25314 = 0;var state_25375__$1 = (function (){var statearr_25392 = state_25375;(statearr_25392[19] = inst_25303__$1);
(statearr_25392[10] = inst_25311);
(statearr_25392[20] = inst_25305);
(statearr_25392[11] = inst_25314);
(statearr_25392[12] = inst_25313);
(statearr_25392[13] = inst_25312);
return statearr_25392;
})();var statearr_25393_25473 = state_25375__$1;(statearr_25393_25473[2] = null);
(statearr_25393_25473[1] = 25);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 38))
{var inst_25354 = (state_25375[2]);var state_25375__$1 = state_25375;var statearr_25394_25474 = state_25375__$1;(statearr_25394_25474[2] = inst_25354);
(statearr_25394_25474[1] = 35);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 7))
{var inst_25371 = (state_25375[2]);var state_25375__$1 = state_25375;var statearr_25395_25475 = state_25375__$1;(statearr_25395_25475[2] = inst_25371);
(statearr_25395_25475[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 39))
{var inst_25332 = (state_25375[9]);var inst_25350 = (state_25375[2]);var inst_25351 = cljs.core.next(inst_25332);var inst_25311 = inst_25351;var inst_25312 = null;var inst_25313 = 0;var inst_25314 = 0;var state_25375__$1 = (function (){var statearr_25396 = state_25375;(statearr_25396[10] = inst_25311);
(statearr_25396[21] = inst_25350);
(statearr_25396[11] = inst_25314);
(statearr_25396[12] = inst_25313);
(statearr_25396[13] = inst_25312);
return statearr_25396;
})();var statearr_25397_25476 = state_25375__$1;(statearr_25397_25476[2] = null);
(statearr_25397_25476[1] = 25);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 8))
{var inst_25255 = (state_25375[14]);var inst_25254 = (state_25375[16]);var inst_25257 = (inst_25255 < inst_25254);var inst_25258 = inst_25257;var state_25375__$1 = state_25375;if(cljs.core.truth_(inst_25258))
{var statearr_25398_25477 = state_25375__$1;(statearr_25398_25477[1] = 10);
} else
{var statearr_25399_25478 = state_25375__$1;(statearr_25399_25478[1] = 11);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 40))
{var inst_25341 = (state_25375[18]);var inst_25342 = (state_25375[2]);var inst_25343 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25344 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25341);var state_25375__$1 = (function (){var statearr_25400 = state_25375;(statearr_25400[22] = inst_25343);
(statearr_25400[23] = inst_25342);
return statearr_25400;
})();var statearr_25401_25479 = state_25375__$1;(statearr_25401_25479[2] = inst_25344);
cljs.core.async.impl.ioc_helpers.process_exception(state_25375__$1);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 9))
{var inst_25300 = (state_25375[2]);var state_25375__$1 = state_25375;var statearr_25402_25480 = state_25375__$1;(statearr_25402_25480[2] = inst_25300);
(statearr_25402_25480[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 41))
{var inst_25341 = (state_25375[18]);var inst_25243 = (state_25375[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25375,40,Object,null,39);var inst_25348 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25341,inst_25243,done);var state_25375__$1 = state_25375;var statearr_25403_25481 = state_25375__$1;(statearr_25403_25481[2] = inst_25348);
cljs.core.async.impl.ioc_helpers.process_exception(state_25375__$1);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 10))
{var inst_25255 = (state_25375[14]);var inst_25253 = (state_25375[15]);var inst_25261 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25253,inst_25255);var inst_25262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25261,0,null);var inst_25263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25261,1,null);var state_25375__$1 = (function (){var statearr_25404 = state_25375;(statearr_25404[24] = inst_25262);
return statearr_25404;
})();if(cljs.core.truth_(inst_25263))
{var statearr_25405_25482 = state_25375__$1;(statearr_25405_25482[1] = 13);
} else
{var statearr_25406_25483 = state_25375__$1;(statearr_25406_25483[1] = 14);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 42))
{var state_25375__$1 = state_25375;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25375__$1,45,dchan);
} else
{if((state_val_25376 === 11))
{var inst_25252 = (state_25375[17]);var inst_25272 = (state_25375[25]);var inst_25272__$1 = cljs.core.seq(inst_25252);var state_25375__$1 = (function (){var statearr_25407 = state_25375;(statearr_25407[25] = inst_25272__$1);
return statearr_25407;
})();if(inst_25272__$1)
{var statearr_25408_25484 = state_25375__$1;(statearr_25408_25484[1] = 16);
} else
{var statearr_25409_25485 = state_25375__$1;(statearr_25409_25485[1] = 17);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 43))
{var state_25375__$1 = state_25375;var statearr_25410_25486 = state_25375__$1;(statearr_25410_25486[2] = null);
(statearr_25410_25486[1] = 44);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 12))
{var inst_25298 = (state_25375[2]);var state_25375__$1 = state_25375;var statearr_25411_25487 = state_25375__$1;(statearr_25411_25487[2] = inst_25298);
(statearr_25411_25487[1] = 9);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 44))
{var inst_25368 = (state_25375[2]);var state_25375__$1 = (function (){var statearr_25412 = state_25375;(statearr_25412[26] = inst_25368);
return statearr_25412;
})();var statearr_25413_25488 = state_25375__$1;(statearr_25413_25488[2] = null);
(statearr_25413_25488[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 13))
{var inst_25262 = (state_25375[24]);var inst_25265 = cljs.core.async.close_BANG_(inst_25262);var state_25375__$1 = state_25375;var statearr_25414_25489 = state_25375__$1;(statearr_25414_25489[2] = inst_25265);
(statearr_25414_25489[1] = 15);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 45))
{var inst_25365 = (state_25375[2]);var state_25375__$1 = state_25375;var statearr_25418_25490 = state_25375__$1;(statearr_25418_25490[2] = inst_25365);
(statearr_25418_25490[1] = 44);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 14))
{var state_25375__$1 = state_25375;var statearr_25419_25491 = state_25375__$1;(statearr_25419_25491[2] = null);
(statearr_25419_25491[1] = 15);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 15))
{var inst_25255 = (state_25375[14]);var inst_25253 = (state_25375[15]);var inst_25254 = (state_25375[16]);var inst_25252 = (state_25375[17]);var inst_25268 = (state_25375[2]);var inst_25269 = (inst_25255 + 1);var tmp25415 = inst_25253;var tmp25416 = inst_25254;var tmp25417 = inst_25252;var inst_25252__$1 = tmp25417;var inst_25253__$1 = tmp25415;var inst_25254__$1 = tmp25416;var inst_25255__$1 = inst_25269;var state_25375__$1 = (function (){var statearr_25420 = state_25375;(statearr_25420[14] = inst_25255__$1);
(statearr_25420[15] = inst_25253__$1);
(statearr_25420[16] = inst_25254__$1);
(statearr_25420[17] = inst_25252__$1);
(statearr_25420[27] = inst_25268);
return statearr_25420;
})();var statearr_25421_25492 = state_25375__$1;(statearr_25421_25492[2] = null);
(statearr_25421_25492[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 16))
{var inst_25272 = (state_25375[25]);var inst_25274 = cljs.core.chunked_seq_QMARK_(inst_25272);var state_25375__$1 = state_25375;if(inst_25274)
{var statearr_25422_25493 = state_25375__$1;(statearr_25422_25493[1] = 19);
} else
{var statearr_25423_25494 = state_25375__$1;(statearr_25423_25494[1] = 20);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 17))
{var state_25375__$1 = state_25375;var statearr_25424_25495 = state_25375__$1;(statearr_25424_25495[2] = null);
(statearr_25424_25495[1] = 18);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 18))
{var inst_25296 = (state_25375[2]);var state_25375__$1 = state_25375;var statearr_25425_25496 = state_25375__$1;(statearr_25425_25496[2] = inst_25296);
(statearr_25425_25496[1] = 12);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 19))
{var inst_25272 = (state_25375[25]);var inst_25276 = cljs.core.chunk_first(inst_25272);var inst_25277 = cljs.core.chunk_rest(inst_25272);var inst_25278 = cljs.core.count(inst_25276);var inst_25252 = inst_25277;var inst_25253 = inst_25276;var inst_25254 = inst_25278;var inst_25255 = 0;var state_25375__$1 = (function (){var statearr_25426 = state_25375;(statearr_25426[14] = inst_25255);
(statearr_25426[15] = inst_25253);
(statearr_25426[16] = inst_25254);
(statearr_25426[17] = inst_25252);
return statearr_25426;
})();var statearr_25427_25497 = state_25375__$1;(statearr_25427_25497[2] = null);
(statearr_25427_25497[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 20))
{var inst_25272 = (state_25375[25]);var inst_25282 = cljs.core.first(inst_25272);var inst_25283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25282,0,null);var inst_25284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25282,1,null);var state_25375__$1 = (function (){var statearr_25428 = state_25375;(statearr_25428[28] = inst_25283);
return statearr_25428;
})();if(cljs.core.truth_(inst_25284))
{var statearr_25429_25498 = state_25375__$1;(statearr_25429_25498[1] = 22);
} else
{var statearr_25430_25499 = state_25375__$1;(statearr_25430_25499[1] = 23);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 21))
{var inst_25293 = (state_25375[2]);var state_25375__$1 = state_25375;var statearr_25431_25500 = state_25375__$1;(statearr_25431_25500[2] = inst_25293);
(statearr_25431_25500[1] = 18);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 22))
{var inst_25283 = (state_25375[28]);var inst_25286 = cljs.core.async.close_BANG_(inst_25283);var state_25375__$1 = state_25375;var statearr_25432_25501 = state_25375__$1;(statearr_25432_25501[2] = inst_25286);
(statearr_25432_25501[1] = 24);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 23))
{var state_25375__$1 = state_25375;var statearr_25433_25502 = state_25375__$1;(statearr_25433_25502[2] = null);
(statearr_25433_25502[1] = 24);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 24))
{var inst_25272 = (state_25375[25]);var inst_25289 = (state_25375[2]);var inst_25290 = cljs.core.next(inst_25272);var inst_25252 = inst_25290;var inst_25253 = null;var inst_25254 = 0;var inst_25255 = 0;var state_25375__$1 = (function (){var statearr_25434 = state_25375;(statearr_25434[14] = inst_25255);
(statearr_25434[15] = inst_25253);
(statearr_25434[16] = inst_25254);
(statearr_25434[17] = inst_25252);
(statearr_25434[29] = inst_25289);
return statearr_25434;
})();var statearr_25435_25503 = state_25375__$1;(statearr_25435_25503[2] = null);
(statearr_25435_25503[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 25))
{var inst_25314 = (state_25375[11]);var inst_25313 = (state_25375[12]);var inst_25316 = (inst_25314 < inst_25313);var inst_25317 = inst_25316;var state_25375__$1 = state_25375;if(cljs.core.truth_(inst_25317))
{var statearr_25436_25504 = state_25375__$1;(statearr_25436_25504[1] = 27);
} else
{var statearr_25437_25505 = state_25375__$1;(statearr_25437_25505[1] = 28);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 26))
{var inst_25303 = (state_25375[19]);var inst_25361 = (state_25375[2]);var inst_25362 = cljs.core.seq(inst_25303);var state_25375__$1 = (function (){var statearr_25438 = state_25375;(statearr_25438[30] = inst_25361);
return statearr_25438;
})();if(inst_25362)
{var statearr_25439_25506 = state_25375__$1;(statearr_25439_25506[1] = 42);
} else
{var statearr_25440_25507 = state_25375__$1;(statearr_25440_25507[1] = 43);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 27))
{var inst_25314 = (state_25375[11]);var inst_25312 = (state_25375[13]);var inst_25319 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25312,inst_25314);var state_25375__$1 = (function (){var statearr_25441 = state_25375;(statearr_25441[7] = inst_25319);
return statearr_25441;
})();var statearr_25442_25508 = state_25375__$1;(statearr_25442_25508[2] = null);
(statearr_25442_25508[1] = 32);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 28))
{var inst_25332 = (state_25375[9]);var inst_25311 = (state_25375[10]);var inst_25332__$1 = cljs.core.seq(inst_25311);var state_25375__$1 = (function (){var statearr_25446 = state_25375;(statearr_25446[9] = inst_25332__$1);
return statearr_25446;
})();if(inst_25332__$1)
{var statearr_25447_25509 = state_25375__$1;(statearr_25447_25509[1] = 33);
} else
{var statearr_25448_25510 = state_25375__$1;(statearr_25448_25510[1] = 34);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 29))
{var inst_25359 = (state_25375[2]);var state_25375__$1 = state_25375;var statearr_25449_25511 = state_25375__$1;(statearr_25449_25511[2] = inst_25359);
(statearr_25449_25511[1] = 26);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 30))
{var inst_25311 = (state_25375[10]);var inst_25314 = (state_25375[11]);var inst_25313 = (state_25375[12]);var inst_25312 = (state_25375[13]);var inst_25328 = (state_25375[2]);var inst_25329 = (inst_25314 + 1);var tmp25443 = inst_25311;var tmp25444 = inst_25313;var tmp25445 = inst_25312;var inst_25311__$1 = tmp25443;var inst_25312__$1 = tmp25445;var inst_25313__$1 = tmp25444;var inst_25314__$1 = inst_25329;var state_25375__$1 = (function (){var statearr_25450 = state_25375;(statearr_25450[31] = inst_25328);
(statearr_25450[10] = inst_25311__$1);
(statearr_25450[11] = inst_25314__$1);
(statearr_25450[12] = inst_25313__$1);
(statearr_25450[13] = inst_25312__$1);
return statearr_25450;
})();var statearr_25451_25512 = state_25375__$1;(statearr_25451_25512[2] = null);
(statearr_25451_25512[1] = 25);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25376 === 31))
{var inst_25319 = (state_25375[7]);var inst_25320 = (state_25375[2]);var inst_25321 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25322 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25319);var state_25375__$1 = (function (){var statearr_25452 = state_25375;(statearr_25452[32] = inst_25321);
(statearr_25452[33] = inst_25320);
return statearr_25452;
})();var statearr_25453_25513 = state_25375__$1;(statearr_25453_25513[2] = inst_25322);
cljs.core.async.impl.ioc_helpers.process_exception(state_25375__$1);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_25457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25457[0] = state_machine__5507__auto__);
(statearr_25457[1] = 1);
return statearr_25457;
});
var state_machine__5507__auto____1 = (function (state_25375){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25375);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25458){if((e25458 instanceof Object))
{var ex__5510__auto__ = e25458;var statearr_25459_25514 = state_25375;(statearr_25459_25514[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25375);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e25458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__25515 = state_25375;
state_25375 = G__25515;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25375){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25460 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25461);
return statearr_25460;
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
cljs.core.async.Mix = (function (){var obj25517 = {};return obj25517;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,null,cljs.core.constant$keyword$263,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$264);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$263);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$264,chs);var pauses = pick(cljs.core.constant$keyword$262,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$265,solos,cljs.core.constant$keyword$266,pick(cljs.core.constant$keyword$263,chs),cljs.core.constant$keyword$267,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$262)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25627 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25628){
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
this.meta25628 = meta25628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25627.cljs$lang$type = true;
cljs.core.async.t25627.cljs$lang$ctorStr = "cljs.core.async/t25627";
cljs.core.async.t25627.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25627");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25627.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25627.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25627.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25627.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25627.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25627.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25627.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25629){var self__ = this;
var _25629__$1 = this;return self__.meta25628;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25629,meta25628__$1){var self__ = this;
var _25629__$1 = this;return (new cljs.core.async.t25627(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25628__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25627 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25627(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25628){return (new cljs.core.async.t25627(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25628));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25627(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25694){var state_val_25695 = (state_25694[1]);if((state_val_25695 === 1))
{var inst_25633 = (state_25694[7]);var inst_25633__$1 = calc_state();var inst_25634 = cljs.core.seq_QMARK_(inst_25633__$1);var state_25694__$1 = (function (){var statearr_25696 = state_25694;(statearr_25696[7] = inst_25633__$1);
return statearr_25696;
})();if(inst_25634)
{var statearr_25697_25737 = state_25694__$1;(statearr_25697_25737[1] = 2);
} else
{var statearr_25698_25738 = state_25694__$1;(statearr_25698_25738[1] = 3);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 2))
{var inst_25633 = (state_25694[7]);var inst_25636 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25633);var state_25694__$1 = state_25694;var statearr_25699_25739 = state_25694__$1;(statearr_25699_25739[2] = inst_25636);
(statearr_25699_25739[1] = 4);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 3))
{var inst_25633 = (state_25694[7]);var state_25694__$1 = state_25694;var statearr_25700_25740 = state_25694__$1;(statearr_25700_25740[2] = inst_25633);
(statearr_25700_25740[1] = 4);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 4))
{var inst_25633 = (state_25694[7]);var inst_25639 = (state_25694[2]);var inst_25640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25639,cljs.core.constant$keyword$267);var inst_25641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25639,cljs.core.constant$keyword$266);var inst_25642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25639,cljs.core.constant$keyword$265);var inst_25643 = inst_25633;var state_25694__$1 = (function (){var statearr_25701 = state_25694;(statearr_25701[8] = inst_25643);
(statearr_25701[9] = inst_25642);
(statearr_25701[10] = inst_25640);
(statearr_25701[11] = inst_25641);
return statearr_25701;
})();var statearr_25702_25741 = state_25694__$1;(statearr_25702_25741[2] = null);
(statearr_25702_25741[1] = 5);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 5))
{var inst_25643 = (state_25694[8]);var inst_25646 = cljs.core.seq_QMARK_(inst_25643);var state_25694__$1 = state_25694;if(inst_25646)
{var statearr_25703_25742 = state_25694__$1;(statearr_25703_25742[1] = 7);
} else
{var statearr_25704_25743 = state_25694__$1;(statearr_25704_25743[1] = 8);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 6))
{var inst_25692 = (state_25694[2]);var state_25694__$1 = state_25694;return cljs.core.async.impl.ioc_helpers.return_chan(state_25694__$1,inst_25692);
} else
{if((state_val_25695 === 7))
{var inst_25643 = (state_25694[8]);var inst_25648 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25643);var state_25694__$1 = state_25694;var statearr_25705_25744 = state_25694__$1;(statearr_25705_25744[2] = inst_25648);
(statearr_25705_25744[1] = 9);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 8))
{var inst_25643 = (state_25694[8]);var state_25694__$1 = state_25694;var statearr_25706_25745 = state_25694__$1;(statearr_25706_25745[2] = inst_25643);
(statearr_25706_25745[1] = 9);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 9))
{var inst_25651 = (state_25694[12]);var inst_25651__$1 = (state_25694[2]);var inst_25652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25651__$1,cljs.core.constant$keyword$267);var inst_25653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25651__$1,cljs.core.constant$keyword$266);var inst_25654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25651__$1,cljs.core.constant$keyword$265);var state_25694__$1 = (function (){var statearr_25707 = state_25694;(statearr_25707[12] = inst_25651__$1);
(statearr_25707[13] = inst_25654);
(statearr_25707[14] = inst_25653);
return statearr_25707;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25694__$1,10,inst_25652);
} else
{if((state_val_25695 === 10))
{var inst_25658 = (state_25694[15]);var inst_25659 = (state_25694[16]);var inst_25657 = (state_25694[2]);var inst_25658__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25657,0,null);var inst_25659__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25657,1,null);var inst_25660 = (inst_25658__$1 == null);var inst_25661 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25659__$1,change);var inst_25662 = (inst_25660) || (inst_25661);var state_25694__$1 = (function (){var statearr_25708 = state_25694;(statearr_25708[15] = inst_25658__$1);
(statearr_25708[16] = inst_25659__$1);
return statearr_25708;
})();if(cljs.core.truth_(inst_25662))
{var statearr_25709_25746 = state_25694__$1;(statearr_25709_25746[1] = 11);
} else
{var statearr_25710_25747 = state_25694__$1;(statearr_25710_25747[1] = 12);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 11))
{var inst_25658 = (state_25694[15]);var inst_25664 = (inst_25658 == null);var state_25694__$1 = state_25694;if(cljs.core.truth_(inst_25664))
{var statearr_25711_25748 = state_25694__$1;(statearr_25711_25748[1] = 14);
} else
{var statearr_25712_25749 = state_25694__$1;(statearr_25712_25749[1] = 15);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 12))
{var inst_25659 = (state_25694[16]);var inst_25654 = (state_25694[13]);var inst_25673 = (state_25694[17]);var inst_25673__$1 = (inst_25654.cljs$core$IFn$_invoke$arity$1 ? inst_25654.cljs$core$IFn$_invoke$arity$1(inst_25659) : inst_25654.call(null,inst_25659));var state_25694__$1 = (function (){var statearr_25713 = state_25694;(statearr_25713[17] = inst_25673__$1);
return statearr_25713;
})();if(cljs.core.truth_(inst_25673__$1))
{var statearr_25714_25750 = state_25694__$1;(statearr_25714_25750[1] = 17);
} else
{var statearr_25715_25751 = state_25694__$1;(statearr_25715_25751[1] = 18);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 13))
{var inst_25690 = (state_25694[2]);var state_25694__$1 = state_25694;var statearr_25716_25752 = state_25694__$1;(statearr_25716_25752[2] = inst_25690);
(statearr_25716_25752[1] = 6);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 14))
{var inst_25659 = (state_25694[16]);var inst_25666 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25659);var state_25694__$1 = state_25694;var statearr_25717_25753 = state_25694__$1;(statearr_25717_25753[2] = inst_25666);
(statearr_25717_25753[1] = 16);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 15))
{var state_25694__$1 = state_25694;var statearr_25718_25754 = state_25694__$1;(statearr_25718_25754[2] = null);
(statearr_25718_25754[1] = 16);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 16))
{var inst_25669 = (state_25694[2]);var inst_25670 = calc_state();var inst_25643 = inst_25670;var state_25694__$1 = (function (){var statearr_25719 = state_25694;(statearr_25719[8] = inst_25643);
(statearr_25719[18] = inst_25669);
return statearr_25719;
})();var statearr_25720_25755 = state_25694__$1;(statearr_25720_25755[2] = null);
(statearr_25720_25755[1] = 5);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 17))
{var inst_25673 = (state_25694[17]);var state_25694__$1 = state_25694;var statearr_25721_25756 = state_25694__$1;(statearr_25721_25756[2] = inst_25673);
(statearr_25721_25756[1] = 19);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 18))
{var inst_25659 = (state_25694[16]);var inst_25654 = (state_25694[13]);var inst_25653 = (state_25694[14]);var inst_25676 = cljs.core.empty_QMARK_(inst_25654);var inst_25677 = (inst_25653.cljs$core$IFn$_invoke$arity$1 ? inst_25653.cljs$core$IFn$_invoke$arity$1(inst_25659) : inst_25653.call(null,inst_25659));var inst_25678 = cljs.core.not(inst_25677);var inst_25679 = (inst_25676) && (inst_25678);var state_25694__$1 = state_25694;var statearr_25722_25757 = state_25694__$1;(statearr_25722_25757[2] = inst_25679);
(statearr_25722_25757[1] = 19);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 19))
{var inst_25681 = (state_25694[2]);var state_25694__$1 = state_25694;if(cljs.core.truth_(inst_25681))
{var statearr_25723_25758 = state_25694__$1;(statearr_25723_25758[1] = 20);
} else
{var statearr_25724_25759 = state_25694__$1;(statearr_25724_25759[1] = 21);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 20))
{var inst_25658 = (state_25694[15]);var state_25694__$1 = state_25694;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25694__$1,23,out,inst_25658);
} else
{if((state_val_25695 === 21))
{var state_25694__$1 = state_25694;var statearr_25725_25760 = state_25694__$1;(statearr_25725_25760[2] = null);
(statearr_25725_25760[1] = 22);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 22))
{var inst_25651 = (state_25694[12]);var inst_25687 = (state_25694[2]);var inst_25643 = inst_25651;var state_25694__$1 = (function (){var statearr_25726 = state_25694;(statearr_25726[19] = inst_25687);
(statearr_25726[8] = inst_25643);
return statearr_25726;
})();var statearr_25727_25761 = state_25694__$1;(statearr_25727_25761[2] = null);
(statearr_25727_25761[1] = 5);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25695 === 23))
{var inst_25684 = (state_25694[2]);var state_25694__$1 = state_25694;var statearr_25728_25762 = state_25694__$1;(statearr_25728_25762[2] = inst_25684);
(statearr_25728_25762[1] = 22);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_25732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25732[0] = state_machine__5507__auto__);
(statearr_25732[1] = 1);
return statearr_25732;
});
var state_machine__5507__auto____1 = (function (state_25694){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25694);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25733){if((e25733 instanceof Object))
{var ex__5510__auto__ = e25733;var statearr_25734_25763 = state_25694;(statearr_25734_25763[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25694);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e25733;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__25764 = state_25694;
state_25694 = G__25764;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25694){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25694);
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
cljs.core.async.Pub = (function (){var obj25766 = {};return obj25766;
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
return (function (p1__25767_SHARP_){if(cljs.core.truth_((p1__25767_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25767_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25767_SHARP_.call(null,topic))))
{return p1__25767_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25767_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25892 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25892 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25893){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25893 = meta25893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25892.cljs$lang$type = true;
cljs.core.async.t25892.cljs$lang$ctorStr = "cljs.core.async/t25892";
cljs.core.async.t25892.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25892");
});})(mults,ensure_mult))
;
cljs.core.async.t25892.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25892.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25892.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25892.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25892.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25892.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25892.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25894){var self__ = this;
var _25894__$1 = this;return self__.meta25893;
});})(mults,ensure_mult))
;
cljs.core.async.t25892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25894,meta25893__$1){var self__ = this;
var _25894__$1 = this;return (new cljs.core.async.t25892(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25893__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25892 = ((function (mults,ensure_mult){
return (function __GT_t25892(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25893){return (new cljs.core.async.t25892(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25893));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25892(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___26016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25968){var state_val_25969 = (state_25968[1]);if((state_val_25969 === 1))
{var state_25968__$1 = state_25968;var statearr_25970_26017 = state_25968__$1;(statearr_25970_26017[2] = null);
(statearr_25970_26017[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 2))
{var state_25968__$1 = state_25968;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25968__$1,4,ch);
} else
{if((state_val_25969 === 3))
{var inst_25966 = (state_25968[2]);var state_25968__$1 = state_25968;return cljs.core.async.impl.ioc_helpers.return_chan(state_25968__$1,inst_25966);
} else
{if((state_val_25969 === 4))
{var inst_25897 = (state_25968[7]);var inst_25897__$1 = (state_25968[2]);var inst_25898 = (inst_25897__$1 == null);var state_25968__$1 = (function (){var statearr_25971 = state_25968;(statearr_25971[7] = inst_25897__$1);
return statearr_25971;
})();if(cljs.core.truth_(inst_25898))
{var statearr_25972_26018 = state_25968__$1;(statearr_25972_26018[1] = 5);
} else
{var statearr_25973_26019 = state_25968__$1;(statearr_25973_26019[1] = 6);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 5))
{var inst_25904 = cljs.core.deref(mults);var inst_25905 = cljs.core.vals(inst_25904);var inst_25906 = cljs.core.seq(inst_25905);var inst_25907 = inst_25906;var inst_25908 = null;var inst_25909 = 0;var inst_25910 = 0;var state_25968__$1 = (function (){var statearr_25974 = state_25968;(statearr_25974[8] = inst_25909);
(statearr_25974[9] = inst_25907);
(statearr_25974[10] = inst_25908);
(statearr_25974[11] = inst_25910);
return statearr_25974;
})();var statearr_25975_26020 = state_25968__$1;(statearr_25975_26020[2] = null);
(statearr_25975_26020[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 6))
{var inst_25947 = (state_25968[12]);var inst_25897 = (state_25968[7]);var inst_25945 = (state_25968[13]);var inst_25945__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25897) : topic_fn.call(null,inst_25897));var inst_25946 = cljs.core.deref(mults);var inst_25947__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25946,inst_25945__$1);var state_25968__$1 = (function (){var statearr_25976 = state_25968;(statearr_25976[12] = inst_25947__$1);
(statearr_25976[13] = inst_25945__$1);
return statearr_25976;
})();if(cljs.core.truth_(inst_25947__$1))
{var statearr_25977_26021 = state_25968__$1;(statearr_25977_26021[1] = 19);
} else
{var statearr_25978_26022 = state_25968__$1;(statearr_25978_26022[1] = 20);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 7))
{var inst_25964 = (state_25968[2]);var state_25968__$1 = state_25968;var statearr_25979_26023 = state_25968__$1;(statearr_25979_26023[2] = inst_25964);
(statearr_25979_26023[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 8))
{var inst_25909 = (state_25968[8]);var inst_25910 = (state_25968[11]);var inst_25912 = (inst_25910 < inst_25909);var inst_25913 = inst_25912;var state_25968__$1 = state_25968;if(cljs.core.truth_(inst_25913))
{var statearr_25983_26024 = state_25968__$1;(statearr_25983_26024[1] = 10);
} else
{var statearr_25984_26025 = state_25968__$1;(statearr_25984_26025[1] = 11);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 9))
{var inst_25943 = (state_25968[2]);var state_25968__$1 = state_25968;var statearr_25985_26026 = state_25968__$1;(statearr_25985_26026[2] = inst_25943);
(statearr_25985_26026[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 10))
{var inst_25909 = (state_25968[8]);var inst_25907 = (state_25968[9]);var inst_25908 = (state_25968[10]);var inst_25910 = (state_25968[11]);var inst_25915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25908,inst_25910);var inst_25916 = cljs.core.async.muxch_STAR_(inst_25915);var inst_25917 = cljs.core.async.close_BANG_(inst_25916);var inst_25918 = (inst_25910 + 1);var tmp25980 = inst_25909;var tmp25981 = inst_25907;var tmp25982 = inst_25908;var inst_25907__$1 = tmp25981;var inst_25908__$1 = tmp25982;var inst_25909__$1 = tmp25980;var inst_25910__$1 = inst_25918;var state_25968__$1 = (function (){var statearr_25986 = state_25968;(statearr_25986[8] = inst_25909__$1);
(statearr_25986[9] = inst_25907__$1);
(statearr_25986[10] = inst_25908__$1);
(statearr_25986[14] = inst_25917);
(statearr_25986[11] = inst_25910__$1);
return statearr_25986;
})();var statearr_25987_26027 = state_25968__$1;(statearr_25987_26027[2] = null);
(statearr_25987_26027[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 11))
{var inst_25907 = (state_25968[9]);var inst_25921 = (state_25968[15]);var inst_25921__$1 = cljs.core.seq(inst_25907);var state_25968__$1 = (function (){var statearr_25988 = state_25968;(statearr_25988[15] = inst_25921__$1);
return statearr_25988;
})();if(inst_25921__$1)
{var statearr_25989_26028 = state_25968__$1;(statearr_25989_26028[1] = 13);
} else
{var statearr_25990_26029 = state_25968__$1;(statearr_25990_26029[1] = 14);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 12))
{var inst_25941 = (state_25968[2]);var state_25968__$1 = state_25968;var statearr_25991_26030 = state_25968__$1;(statearr_25991_26030[2] = inst_25941);
(statearr_25991_26030[1] = 9);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 13))
{var inst_25921 = (state_25968[15]);var inst_25923 = cljs.core.chunked_seq_QMARK_(inst_25921);var state_25968__$1 = state_25968;if(inst_25923)
{var statearr_25992_26031 = state_25968__$1;(statearr_25992_26031[1] = 16);
} else
{var statearr_25993_26032 = state_25968__$1;(statearr_25993_26032[1] = 17);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 14))
{var state_25968__$1 = state_25968;var statearr_25994_26033 = state_25968__$1;(statearr_25994_26033[2] = null);
(statearr_25994_26033[1] = 15);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 15))
{var inst_25939 = (state_25968[2]);var state_25968__$1 = state_25968;var statearr_25995_26034 = state_25968__$1;(statearr_25995_26034[2] = inst_25939);
(statearr_25995_26034[1] = 12);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 16))
{var inst_25921 = (state_25968[15]);var inst_25925 = cljs.core.chunk_first(inst_25921);var inst_25926 = cljs.core.chunk_rest(inst_25921);var inst_25927 = cljs.core.count(inst_25925);var inst_25907 = inst_25926;var inst_25908 = inst_25925;var inst_25909 = inst_25927;var inst_25910 = 0;var state_25968__$1 = (function (){var statearr_25996 = state_25968;(statearr_25996[8] = inst_25909);
(statearr_25996[9] = inst_25907);
(statearr_25996[10] = inst_25908);
(statearr_25996[11] = inst_25910);
return statearr_25996;
})();var statearr_25997_26035 = state_25968__$1;(statearr_25997_26035[2] = null);
(statearr_25997_26035[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 17))
{var inst_25921 = (state_25968[15]);var inst_25930 = cljs.core.first(inst_25921);var inst_25931 = cljs.core.async.muxch_STAR_(inst_25930);var inst_25932 = cljs.core.async.close_BANG_(inst_25931);var inst_25933 = cljs.core.next(inst_25921);var inst_25907 = inst_25933;var inst_25908 = null;var inst_25909 = 0;var inst_25910 = 0;var state_25968__$1 = (function (){var statearr_25998 = state_25968;(statearr_25998[16] = inst_25932);
(statearr_25998[8] = inst_25909);
(statearr_25998[9] = inst_25907);
(statearr_25998[10] = inst_25908);
(statearr_25998[11] = inst_25910);
return statearr_25998;
})();var statearr_25999_26036 = state_25968__$1;(statearr_25999_26036[2] = null);
(statearr_25999_26036[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 18))
{var inst_25936 = (state_25968[2]);var state_25968__$1 = state_25968;var statearr_26000_26037 = state_25968__$1;(statearr_26000_26037[2] = inst_25936);
(statearr_26000_26037[1] = 15);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 19))
{var state_25968__$1 = state_25968;var statearr_26001_26038 = state_25968__$1;(statearr_26001_26038[2] = null);
(statearr_26001_26038[1] = 24);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 20))
{var state_25968__$1 = state_25968;var statearr_26002_26039 = state_25968__$1;(statearr_26002_26039[2] = null);
(statearr_26002_26039[1] = 21);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 21))
{var inst_25961 = (state_25968[2]);var state_25968__$1 = (function (){var statearr_26003 = state_25968;(statearr_26003[17] = inst_25961);
return statearr_26003;
})();var statearr_26004_26040 = state_25968__$1;(statearr_26004_26040[2] = null);
(statearr_26004_26040[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 22))
{var inst_25958 = (state_25968[2]);var state_25968__$1 = state_25968;var statearr_26005_26041 = state_25968__$1;(statearr_26005_26041[2] = inst_25958);
(statearr_26005_26041[1] = 21);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 23))
{var inst_25945 = (state_25968[13]);var inst_25949 = (state_25968[2]);var inst_25950 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25945);var state_25968__$1 = (function (){var statearr_26006 = state_25968;(statearr_26006[18] = inst_25949);
return statearr_26006;
})();var statearr_26007_26042 = state_25968__$1;(statearr_26007_26042[2] = inst_25950);
cljs.core.async.impl.ioc_helpers.process_exception(state_25968__$1);
return cljs.core.constant$keyword$255;
} else
{if((state_val_25969 === 24))
{var inst_25947 = (state_25968[12]);var inst_25897 = (state_25968[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25968,23,Object,null,22);var inst_25954 = cljs.core.async.muxch_STAR_(inst_25947);var state_25968__$1 = state_25968;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25968__$1,25,inst_25954,inst_25897);
} else
{if((state_val_25969 === 25))
{var inst_25956 = (state_25968[2]);var state_25968__$1 = state_25968;var statearr_26008_26043 = state_25968__$1;(statearr_26008_26043[2] = inst_25956);
cljs.core.async.impl.ioc_helpers.process_exception(state_25968__$1);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_26012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26012[0] = state_machine__5507__auto__);
(statearr_26012[1] = 1);
return statearr_26012;
});
var state_machine__5507__auto____1 = (function (state_25968){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25968);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26013){if((e26013 instanceof Object))
{var ex__5510__auto__ = e26013;var statearr_26014_26044 = state_25968;(statearr_26014_26044[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25968);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e26013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__26045 = state_25968;
state_25968 = G__26045;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25968){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26015 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26016);
return statearr_26015;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___26182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26152){var state_val_26153 = (state_26152[1]);if((state_val_26153 === 1))
{var state_26152__$1 = state_26152;var statearr_26154_26183 = state_26152__$1;(statearr_26154_26183[2] = null);
(statearr_26154_26183[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 2))
{var inst_26115 = cljs.core.reset_BANG_(dctr,cnt);var inst_26116 = 0;var state_26152__$1 = (function (){var statearr_26155 = state_26152;(statearr_26155[7] = inst_26116);
(statearr_26155[8] = inst_26115);
return statearr_26155;
})();var statearr_26156_26184 = state_26152__$1;(statearr_26156_26184[2] = null);
(statearr_26156_26184[1] = 4);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 3))
{var inst_26150 = (state_26152[2]);var state_26152__$1 = state_26152;return cljs.core.async.impl.ioc_helpers.return_chan(state_26152__$1,inst_26150);
} else
{if((state_val_26153 === 4))
{var inst_26116 = (state_26152[7]);var inst_26118 = (inst_26116 < cnt);var state_26152__$1 = state_26152;if(cljs.core.truth_(inst_26118))
{var statearr_26157_26185 = state_26152__$1;(statearr_26157_26185[1] = 6);
} else
{var statearr_26158_26186 = state_26152__$1;(statearr_26158_26186[1] = 7);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 5))
{var inst_26136 = (state_26152[2]);var state_26152__$1 = (function (){var statearr_26159 = state_26152;(statearr_26159[9] = inst_26136);
return statearr_26159;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26152__$1,12,dchan);
} else
{if((state_val_26153 === 6))
{var state_26152__$1 = state_26152;var statearr_26160_26187 = state_26152__$1;(statearr_26160_26187[2] = null);
(statearr_26160_26187[1] = 11);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 7))
{var state_26152__$1 = state_26152;var statearr_26161_26188 = state_26152__$1;(statearr_26161_26188[2] = null);
(statearr_26161_26188[1] = 8);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 8))
{var inst_26134 = (state_26152[2]);var state_26152__$1 = state_26152;var statearr_26162_26189 = state_26152__$1;(statearr_26162_26189[2] = inst_26134);
(statearr_26162_26189[1] = 5);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 9))
{var inst_26116 = (state_26152[7]);var inst_26129 = (state_26152[2]);var inst_26130 = (inst_26116 + 1);var inst_26116__$1 = inst_26130;var state_26152__$1 = (function (){var statearr_26163 = state_26152;(statearr_26163[7] = inst_26116__$1);
(statearr_26163[10] = inst_26129);
return statearr_26163;
})();var statearr_26164_26190 = state_26152__$1;(statearr_26164_26190[2] = null);
(statearr_26164_26190[1] = 4);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 10))
{var inst_26120 = (state_26152[2]);var inst_26121 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26152__$1 = (function (){var statearr_26165 = state_26152;(statearr_26165[11] = inst_26120);
return statearr_26165;
})();var statearr_26166_26191 = state_26152__$1;(statearr_26166_26191[2] = inst_26121);
cljs.core.async.impl.ioc_helpers.process_exception(state_26152__$1);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 11))
{var inst_26116 = (state_26152[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26152,10,Object,null,9);var inst_26125 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26116) : chs__$1.call(null,inst_26116));var inst_26126 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26116) : done.call(null,inst_26116));var inst_26127 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26125,inst_26126);var state_26152__$1 = state_26152;var statearr_26167_26192 = state_26152__$1;(statearr_26167_26192[2] = inst_26127);
cljs.core.async.impl.ioc_helpers.process_exception(state_26152__$1);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 12))
{var inst_26138 = (state_26152[12]);var inst_26138__$1 = (state_26152[2]);var inst_26139 = cljs.core.some(cljs.core.nil_QMARK_,inst_26138__$1);var state_26152__$1 = (function (){var statearr_26168 = state_26152;(statearr_26168[12] = inst_26138__$1);
return statearr_26168;
})();if(cljs.core.truth_(inst_26139))
{var statearr_26169_26193 = state_26152__$1;(statearr_26169_26193[1] = 13);
} else
{var statearr_26170_26194 = state_26152__$1;(statearr_26170_26194[1] = 14);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 13))
{var inst_26141 = cljs.core.async.close_BANG_(out);var state_26152__$1 = state_26152;var statearr_26171_26195 = state_26152__$1;(statearr_26171_26195[2] = inst_26141);
(statearr_26171_26195[1] = 15);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 14))
{var inst_26138 = (state_26152[12]);var inst_26143 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26138);var state_26152__$1 = state_26152;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26152__$1,16,out,inst_26143);
} else
{if((state_val_26153 === 15))
{var inst_26148 = (state_26152[2]);var state_26152__$1 = state_26152;var statearr_26172_26196 = state_26152__$1;(statearr_26172_26196[2] = inst_26148);
(statearr_26172_26196[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26153 === 16))
{var inst_26145 = (state_26152[2]);var state_26152__$1 = (function (){var statearr_26173 = state_26152;(statearr_26173[13] = inst_26145);
return statearr_26173;
})();var statearr_26174_26197 = state_26152__$1;(statearr_26174_26197[2] = null);
(statearr_26174_26197[1] = 2);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_26178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26178[0] = state_machine__5507__auto__);
(statearr_26178[1] = 1);
return statearr_26178;
});
var state_machine__5507__auto____1 = (function (state_26152){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26152);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26179){if((e26179 instanceof Object))
{var ex__5510__auto__ = e26179;var statearr_26180_26198 = state_26152;(statearr_26180_26198[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26152);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e26179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__26199 = state_26152;
state_26152 = G__26199;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26152){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26181 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26182);
return statearr_26181;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26283){var state_val_26284 = (state_26283[1]);if((state_val_26284 === 1))
{var inst_26254 = cljs.core.vec(chs);var inst_26255 = inst_26254;var state_26283__$1 = (function (){var statearr_26285 = state_26283;(statearr_26285[7] = inst_26255);
return statearr_26285;
})();var statearr_26286_26308 = state_26283__$1;(statearr_26286_26308[2] = null);
(statearr_26286_26308[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26284 === 2))
{var inst_26255 = (state_26283[7]);var inst_26257 = cljs.core.count(inst_26255);var inst_26258 = (inst_26257 > 0);var state_26283__$1 = state_26283;if(cljs.core.truth_(inst_26258))
{var statearr_26287_26309 = state_26283__$1;(statearr_26287_26309[1] = 4);
} else
{var statearr_26288_26310 = state_26283__$1;(statearr_26288_26310[1] = 5);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26284 === 3))
{var inst_26281 = (state_26283[2]);var state_26283__$1 = state_26283;return cljs.core.async.impl.ioc_helpers.return_chan(state_26283__$1,inst_26281);
} else
{if((state_val_26284 === 4))
{var inst_26255 = (state_26283[7]);var state_26283__$1 = state_26283;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26283__$1,7,inst_26255);
} else
{if((state_val_26284 === 5))
{var inst_26277 = cljs.core.async.close_BANG_(out);var state_26283__$1 = state_26283;var statearr_26289_26311 = state_26283__$1;(statearr_26289_26311[2] = inst_26277);
(statearr_26289_26311[1] = 6);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26284 === 6))
{var inst_26279 = (state_26283[2]);var state_26283__$1 = state_26283;var statearr_26290_26312 = state_26283__$1;(statearr_26290_26312[2] = inst_26279);
(statearr_26290_26312[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26284 === 7))
{var inst_26262 = (state_26283[8]);var inst_26263 = (state_26283[9]);var inst_26262__$1 = (state_26283[2]);var inst_26263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26262__$1,0,null);var inst_26264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26262__$1,1,null);var inst_26265 = (inst_26263__$1 == null);var state_26283__$1 = (function (){var statearr_26291 = state_26283;(statearr_26291[8] = inst_26262__$1);
(statearr_26291[10] = inst_26264);
(statearr_26291[9] = inst_26263__$1);
return statearr_26291;
})();if(cljs.core.truth_(inst_26265))
{var statearr_26292_26313 = state_26283__$1;(statearr_26292_26313[1] = 8);
} else
{var statearr_26293_26314 = state_26283__$1;(statearr_26293_26314[1] = 9);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26284 === 8))
{var inst_26262 = (state_26283[8]);var inst_26264 = (state_26283[10]);var inst_26263 = (state_26283[9]);var inst_26255 = (state_26283[7]);var inst_26267 = (function (){var c = inst_26264;var v = inst_26263;var vec__26260 = inst_26262;var cs = inst_26255;return ((function (c,v,vec__26260,cs,inst_26262,inst_26264,inst_26263,inst_26255,state_val_26284){
return (function (p1__26200_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26200_SHARP_);
});
;})(c,v,vec__26260,cs,inst_26262,inst_26264,inst_26263,inst_26255,state_val_26284))
})();var inst_26268 = cljs.core.filterv(inst_26267,inst_26255);var inst_26255__$1 = inst_26268;var state_26283__$1 = (function (){var statearr_26294 = state_26283;(statearr_26294[7] = inst_26255__$1);
return statearr_26294;
})();var statearr_26295_26315 = state_26283__$1;(statearr_26295_26315[2] = null);
(statearr_26295_26315[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26284 === 9))
{var inst_26263 = (state_26283[9]);var state_26283__$1 = state_26283;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26283__$1,11,out,inst_26263);
} else
{if((state_val_26284 === 10))
{var inst_26275 = (state_26283[2]);var state_26283__$1 = state_26283;var statearr_26297_26316 = state_26283__$1;(statearr_26297_26316[2] = inst_26275);
(statearr_26297_26316[1] = 6);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26284 === 11))
{var inst_26255 = (state_26283[7]);var inst_26272 = (state_26283[2]);var tmp26296 = inst_26255;var inst_26255__$1 = tmp26296;var state_26283__$1 = (function (){var statearr_26298 = state_26283;(statearr_26298[11] = inst_26272);
(statearr_26298[7] = inst_26255__$1);
return statearr_26298;
})();var statearr_26299_26317 = state_26283__$1;(statearr_26299_26317[2] = null);
(statearr_26299_26317[1] = 2);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_26303 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26303[0] = state_machine__5507__auto__);
(statearr_26303[1] = 1);
return statearr_26303;
});
var state_machine__5507__auto____1 = (function (state_26283){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26283);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26304){if((e26304 instanceof Object))
{var ex__5510__auto__ = e26304;var statearr_26305_26318 = state_26283;(statearr_26305_26318[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26283);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e26304;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__26319 = state_26283;
state_26283 = G__26319;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26283){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26306 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26307);
return statearr_26306;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26389){var state_val_26390 = (state_26389[1]);if((state_val_26390 === 1))
{var inst_26366 = 0;var state_26389__$1 = (function (){var statearr_26391 = state_26389;(statearr_26391[7] = inst_26366);
return statearr_26391;
})();var statearr_26392_26413 = state_26389__$1;(statearr_26392_26413[2] = null);
(statearr_26392_26413[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26390 === 2))
{var inst_26366 = (state_26389[7]);var inst_26368 = (inst_26366 < n);var state_26389__$1 = state_26389;if(cljs.core.truth_(inst_26368))
{var statearr_26393_26414 = state_26389__$1;(statearr_26393_26414[1] = 4);
} else
{var statearr_26394_26415 = state_26389__$1;(statearr_26394_26415[1] = 5);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26390 === 3))
{var inst_26386 = (state_26389[2]);var inst_26387 = cljs.core.async.close_BANG_(out);var state_26389__$1 = (function (){var statearr_26395 = state_26389;(statearr_26395[8] = inst_26386);
return statearr_26395;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26389__$1,inst_26387);
} else
{if((state_val_26390 === 4))
{var state_26389__$1 = state_26389;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26389__$1,7,ch);
} else
{if((state_val_26390 === 5))
{var state_26389__$1 = state_26389;var statearr_26396_26416 = state_26389__$1;(statearr_26396_26416[2] = null);
(statearr_26396_26416[1] = 6);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26390 === 6))
{var inst_26384 = (state_26389[2]);var state_26389__$1 = state_26389;var statearr_26397_26417 = state_26389__$1;(statearr_26397_26417[2] = inst_26384);
(statearr_26397_26417[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26390 === 7))
{var inst_26371 = (state_26389[9]);var inst_26371__$1 = (state_26389[2]);var inst_26372 = (inst_26371__$1 == null);var inst_26373 = cljs.core.not(inst_26372);var state_26389__$1 = (function (){var statearr_26398 = state_26389;(statearr_26398[9] = inst_26371__$1);
return statearr_26398;
})();if(inst_26373)
{var statearr_26399_26418 = state_26389__$1;(statearr_26399_26418[1] = 8);
} else
{var statearr_26400_26419 = state_26389__$1;(statearr_26400_26419[1] = 9);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26390 === 8))
{var inst_26371 = (state_26389[9]);var state_26389__$1 = state_26389;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26389__$1,11,out,inst_26371);
} else
{if((state_val_26390 === 9))
{var state_26389__$1 = state_26389;var statearr_26401_26420 = state_26389__$1;(statearr_26401_26420[2] = null);
(statearr_26401_26420[1] = 10);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26390 === 10))
{var inst_26381 = (state_26389[2]);var state_26389__$1 = state_26389;var statearr_26402_26421 = state_26389__$1;(statearr_26402_26421[2] = inst_26381);
(statearr_26402_26421[1] = 6);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26390 === 11))
{var inst_26366 = (state_26389[7]);var inst_26376 = (state_26389[2]);var inst_26377 = (inst_26366 + 1);var inst_26366__$1 = inst_26377;var state_26389__$1 = (function (){var statearr_26403 = state_26389;(statearr_26403[7] = inst_26366__$1);
(statearr_26403[10] = inst_26376);
return statearr_26403;
})();var statearr_26404_26422 = state_26389__$1;(statearr_26404_26422[2] = null);
(statearr_26404_26422[1] = 2);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_26408 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26408[0] = state_machine__5507__auto__);
(statearr_26408[1] = 1);
return statearr_26408;
});
var state_machine__5507__auto____1 = (function (state_26389){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26389);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26409){if((e26409 instanceof Object))
{var ex__5510__auto__ = e26409;var statearr_26410_26423 = state_26389;(statearr_26410_26423[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26389);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e26409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__26424 = state_26389;
state_26389 = G__26424;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26389){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26411 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26412);
return statearr_26411;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26496){var state_val_26497 = (state_26496[1]);if((state_val_26497 === 1))
{var inst_26473 = null;var state_26496__$1 = (function (){var statearr_26498 = state_26496;(statearr_26498[7] = inst_26473);
return statearr_26498;
})();var statearr_26499_26522 = state_26496__$1;(statearr_26499_26522[2] = null);
(statearr_26499_26522[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26497 === 2))
{var state_26496__$1 = state_26496;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26496__$1,4,ch);
} else
{if((state_val_26497 === 3))
{var inst_26493 = (state_26496[2]);var inst_26494 = cljs.core.async.close_BANG_(out);var state_26496__$1 = (function (){var statearr_26500 = state_26496;(statearr_26500[8] = inst_26493);
return statearr_26500;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26496__$1,inst_26494);
} else
{if((state_val_26497 === 4))
{var inst_26476 = (state_26496[9]);var inst_26476__$1 = (state_26496[2]);var inst_26477 = (inst_26476__$1 == null);var inst_26478 = cljs.core.not(inst_26477);var state_26496__$1 = (function (){var statearr_26501 = state_26496;(statearr_26501[9] = inst_26476__$1);
return statearr_26501;
})();if(inst_26478)
{var statearr_26502_26523 = state_26496__$1;(statearr_26502_26523[1] = 5);
} else
{var statearr_26503_26524 = state_26496__$1;(statearr_26503_26524[1] = 6);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26497 === 5))
{var inst_26476 = (state_26496[9]);var inst_26473 = (state_26496[7]);var inst_26480 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26476,inst_26473);var state_26496__$1 = state_26496;if(inst_26480)
{var statearr_26504_26525 = state_26496__$1;(statearr_26504_26525[1] = 8);
} else
{var statearr_26505_26526 = state_26496__$1;(statearr_26505_26526[1] = 9);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26497 === 6))
{var state_26496__$1 = state_26496;var statearr_26507_26527 = state_26496__$1;(statearr_26507_26527[2] = null);
(statearr_26507_26527[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26497 === 7))
{var inst_26491 = (state_26496[2]);var state_26496__$1 = state_26496;var statearr_26508_26528 = state_26496__$1;(statearr_26508_26528[2] = inst_26491);
(statearr_26508_26528[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26497 === 8))
{var inst_26473 = (state_26496[7]);var tmp26506 = inst_26473;var inst_26473__$1 = tmp26506;var state_26496__$1 = (function (){var statearr_26509 = state_26496;(statearr_26509[7] = inst_26473__$1);
return statearr_26509;
})();var statearr_26510_26529 = state_26496__$1;(statearr_26510_26529[2] = null);
(statearr_26510_26529[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26497 === 9))
{var inst_26476 = (state_26496[9]);var state_26496__$1 = state_26496;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26496__$1,11,out,inst_26476);
} else
{if((state_val_26497 === 10))
{var inst_26488 = (state_26496[2]);var state_26496__$1 = state_26496;var statearr_26511_26530 = state_26496__$1;(statearr_26511_26530[2] = inst_26488);
(statearr_26511_26530[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26497 === 11))
{var inst_26476 = (state_26496[9]);var inst_26485 = (state_26496[2]);var inst_26473 = inst_26476;var state_26496__$1 = (function (){var statearr_26512 = state_26496;(statearr_26512[7] = inst_26473);
(statearr_26512[10] = inst_26485);
return statearr_26512;
})();var statearr_26513_26531 = state_26496__$1;(statearr_26513_26531[2] = null);
(statearr_26513_26531[1] = 2);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_26517 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26517[0] = state_machine__5507__auto__);
(statearr_26517[1] = 1);
return statearr_26517;
});
var state_machine__5507__auto____1 = (function (state_26496){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26496);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26518){if((e26518 instanceof Object))
{var ex__5510__auto__ = e26518;var statearr_26519_26532 = state_26496;(statearr_26519_26532[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26496);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e26518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__26533 = state_26496;
state_26496 = G__26533;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26496){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26520 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26521);
return statearr_26520;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26638){var state_val_26639 = (state_26638[1]);if((state_val_26639 === 1))
{var inst_26601 = (new Array(n));var inst_26602 = inst_26601;var inst_26603 = 0;var state_26638__$1 = (function (){var statearr_26640 = state_26638;(statearr_26640[7] = inst_26603);
(statearr_26640[8] = inst_26602);
return statearr_26640;
})();var statearr_26641_26669 = state_26638__$1;(statearr_26641_26669[2] = null);
(statearr_26641_26669[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26639 === 2))
{var state_26638__$1 = state_26638;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26638__$1,4,ch);
} else
{if((state_val_26639 === 3))
{var inst_26636 = (state_26638[2]);var state_26638__$1 = state_26638;return cljs.core.async.impl.ioc_helpers.return_chan(state_26638__$1,inst_26636);
} else
{if((state_val_26639 === 4))
{var inst_26606 = (state_26638[9]);var inst_26606__$1 = (state_26638[2]);var inst_26607 = (inst_26606__$1 == null);var inst_26608 = cljs.core.not(inst_26607);var state_26638__$1 = (function (){var statearr_26642 = state_26638;(statearr_26642[9] = inst_26606__$1);
return statearr_26642;
})();if(inst_26608)
{var statearr_26643_26670 = state_26638__$1;(statearr_26643_26670[1] = 5);
} else
{var statearr_26644_26671 = state_26638__$1;(statearr_26644_26671[1] = 6);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26639 === 5))
{var inst_26603 = (state_26638[7]);var inst_26611 = (state_26638[10]);var inst_26606 = (state_26638[9]);var inst_26602 = (state_26638[8]);var inst_26610 = (inst_26602[inst_26603] = inst_26606);var inst_26611__$1 = (inst_26603 + 1);var inst_26612 = (inst_26611__$1 < n);var state_26638__$1 = (function (){var statearr_26645 = state_26638;(statearr_26645[10] = inst_26611__$1);
(statearr_26645[11] = inst_26610);
return statearr_26645;
})();if(cljs.core.truth_(inst_26612))
{var statearr_26646_26672 = state_26638__$1;(statearr_26646_26672[1] = 8);
} else
{var statearr_26647_26673 = state_26638__$1;(statearr_26647_26673[1] = 9);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26639 === 6))
{var inst_26603 = (state_26638[7]);var inst_26624 = (inst_26603 > 0);var state_26638__$1 = state_26638;if(cljs.core.truth_(inst_26624))
{var statearr_26649_26674 = state_26638__$1;(statearr_26649_26674[1] = 12);
} else
{var statearr_26650_26675 = state_26638__$1;(statearr_26650_26675[1] = 13);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26639 === 7))
{var inst_26634 = (state_26638[2]);var state_26638__$1 = state_26638;var statearr_26651_26676 = state_26638__$1;(statearr_26651_26676[2] = inst_26634);
(statearr_26651_26676[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26639 === 8))
{var inst_26611 = (state_26638[10]);var inst_26602 = (state_26638[8]);var tmp26648 = inst_26602;var inst_26602__$1 = tmp26648;var inst_26603 = inst_26611;var state_26638__$1 = (function (){var statearr_26652 = state_26638;(statearr_26652[7] = inst_26603);
(statearr_26652[8] = inst_26602__$1);
return statearr_26652;
})();var statearr_26653_26677 = state_26638__$1;(statearr_26653_26677[2] = null);
(statearr_26653_26677[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26639 === 9))
{var inst_26602 = (state_26638[8]);var inst_26616 = cljs.core.vec(inst_26602);var state_26638__$1 = state_26638;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26638__$1,11,out,inst_26616);
} else
{if((state_val_26639 === 10))
{var inst_26622 = (state_26638[2]);var state_26638__$1 = state_26638;var statearr_26654_26678 = state_26638__$1;(statearr_26654_26678[2] = inst_26622);
(statearr_26654_26678[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26639 === 11))
{var inst_26618 = (state_26638[2]);var inst_26619 = (new Array(n));var inst_26602 = inst_26619;var inst_26603 = 0;var state_26638__$1 = (function (){var statearr_26655 = state_26638;(statearr_26655[12] = inst_26618);
(statearr_26655[7] = inst_26603);
(statearr_26655[8] = inst_26602);
return statearr_26655;
})();var statearr_26656_26679 = state_26638__$1;(statearr_26656_26679[2] = null);
(statearr_26656_26679[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26639 === 12))
{var inst_26602 = (state_26638[8]);var inst_26626 = cljs.core.vec(inst_26602);var state_26638__$1 = state_26638;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26638__$1,15,out,inst_26626);
} else
{if((state_val_26639 === 13))
{var state_26638__$1 = state_26638;var statearr_26657_26680 = state_26638__$1;(statearr_26657_26680[2] = null);
(statearr_26657_26680[1] = 14);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26639 === 14))
{var inst_26631 = (state_26638[2]);var inst_26632 = cljs.core.async.close_BANG_(out);var state_26638__$1 = (function (){var statearr_26658 = state_26638;(statearr_26658[13] = inst_26631);
return statearr_26658;
})();var statearr_26659_26681 = state_26638__$1;(statearr_26659_26681[2] = inst_26632);
(statearr_26659_26681[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26639 === 15))
{var inst_26628 = (state_26638[2]);var state_26638__$1 = state_26638;var statearr_26660_26682 = state_26638__$1;(statearr_26660_26682[2] = inst_26628);
(statearr_26660_26682[1] = 14);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_26664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26664[0] = state_machine__5507__auto__);
(statearr_26664[1] = 1);
return statearr_26664;
});
var state_machine__5507__auto____1 = (function (state_26638){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26638);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26665){if((e26665 instanceof Object))
{var ex__5510__auto__ = e26665;var statearr_26666_26683 = state_26638;(statearr_26666_26683[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26638);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e26665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__26684 = state_26638;
state_26638 = G__26684;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26638){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26667 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26668);
return statearr_26667;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26797){var state_val_26798 = (state_26797[1]);if((state_val_26798 === 1))
{var inst_26756 = [];var inst_26757 = inst_26756;var inst_26758 = cljs.core.constant$keyword$268;var state_26797__$1 = (function (){var statearr_26799 = state_26797;(statearr_26799[7] = inst_26757);
(statearr_26799[8] = inst_26758);
return statearr_26799;
})();var statearr_26800_26828 = state_26797__$1;(statearr_26800_26828[2] = null);
(statearr_26800_26828[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26798 === 2))
{var state_26797__$1 = state_26797;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26797__$1,4,ch);
} else
{if((state_val_26798 === 3))
{var inst_26795 = (state_26797[2]);var state_26797__$1 = state_26797;return cljs.core.async.impl.ioc_helpers.return_chan(state_26797__$1,inst_26795);
} else
{if((state_val_26798 === 4))
{var inst_26761 = (state_26797[9]);var inst_26761__$1 = (state_26797[2]);var inst_26762 = (inst_26761__$1 == null);var inst_26763 = cljs.core.not(inst_26762);var state_26797__$1 = (function (){var statearr_26801 = state_26797;(statearr_26801[9] = inst_26761__$1);
return statearr_26801;
})();if(inst_26763)
{var statearr_26802_26829 = state_26797__$1;(statearr_26802_26829[1] = 5);
} else
{var statearr_26803_26830 = state_26797__$1;(statearr_26803_26830[1] = 6);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26798 === 5))
{var inst_26761 = (state_26797[9]);var inst_26758 = (state_26797[8]);var inst_26765 = (state_26797[10]);var inst_26765__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26761) : f.call(null,inst_26761));var inst_26766 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26765__$1,inst_26758);var inst_26767 = cljs.core.keyword_identical_QMARK_(inst_26758,cljs.core.constant$keyword$268);var inst_26768 = (inst_26766) || (inst_26767);var state_26797__$1 = (function (){var statearr_26804 = state_26797;(statearr_26804[10] = inst_26765__$1);
return statearr_26804;
})();if(cljs.core.truth_(inst_26768))
{var statearr_26805_26831 = state_26797__$1;(statearr_26805_26831[1] = 8);
} else
{var statearr_26806_26832 = state_26797__$1;(statearr_26806_26832[1] = 9);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26798 === 6))
{var inst_26757 = (state_26797[7]);var inst_26782 = inst_26757.length;var inst_26783 = (inst_26782 > 0);var state_26797__$1 = state_26797;if(cljs.core.truth_(inst_26783))
{var statearr_26808_26833 = state_26797__$1;(statearr_26808_26833[1] = 12);
} else
{var statearr_26809_26834 = state_26797__$1;(statearr_26809_26834[1] = 13);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_26798 === 7))
{var inst_26793 = (state_26797[2]);var state_26797__$1 = state_26797;var statearr_26810_26835 = state_26797__$1;(statearr_26810_26835[2] = inst_26793);
(statearr_26810_26835[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26798 === 8))
{var inst_26761 = (state_26797[9]);var inst_26757 = (state_26797[7]);var inst_26765 = (state_26797[10]);var inst_26770 = inst_26757.push(inst_26761);var tmp26807 = inst_26757;var inst_26757__$1 = tmp26807;var inst_26758 = inst_26765;var state_26797__$1 = (function (){var statearr_26811 = state_26797;(statearr_26811[7] = inst_26757__$1);
(statearr_26811[8] = inst_26758);
(statearr_26811[11] = inst_26770);
return statearr_26811;
})();var statearr_26812_26836 = state_26797__$1;(statearr_26812_26836[2] = null);
(statearr_26812_26836[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26798 === 9))
{var inst_26757 = (state_26797[7]);var inst_26773 = cljs.core.vec(inst_26757);var state_26797__$1 = state_26797;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26797__$1,11,out,inst_26773);
} else
{if((state_val_26798 === 10))
{var inst_26780 = (state_26797[2]);var state_26797__$1 = state_26797;var statearr_26813_26837 = state_26797__$1;(statearr_26813_26837[2] = inst_26780);
(statearr_26813_26837[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26798 === 11))
{var inst_26761 = (state_26797[9]);var inst_26765 = (state_26797[10]);var inst_26775 = (state_26797[2]);var inst_26776 = [];var inst_26777 = inst_26776.push(inst_26761);var inst_26757 = inst_26776;var inst_26758 = inst_26765;var state_26797__$1 = (function (){var statearr_26814 = state_26797;(statearr_26814[12] = inst_26777);
(statearr_26814[13] = inst_26775);
(statearr_26814[7] = inst_26757);
(statearr_26814[8] = inst_26758);
return statearr_26814;
})();var statearr_26815_26838 = state_26797__$1;(statearr_26815_26838[2] = null);
(statearr_26815_26838[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26798 === 12))
{var inst_26757 = (state_26797[7]);var inst_26785 = cljs.core.vec(inst_26757);var state_26797__$1 = state_26797;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26797__$1,15,out,inst_26785);
} else
{if((state_val_26798 === 13))
{var state_26797__$1 = state_26797;var statearr_26816_26839 = state_26797__$1;(statearr_26816_26839[2] = null);
(statearr_26816_26839[1] = 14);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26798 === 14))
{var inst_26790 = (state_26797[2]);var inst_26791 = cljs.core.async.close_BANG_(out);var state_26797__$1 = (function (){var statearr_26817 = state_26797;(statearr_26817[14] = inst_26790);
return statearr_26817;
})();var statearr_26818_26840 = state_26797__$1;(statearr_26818_26840[2] = inst_26791);
(statearr_26818_26840[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_26798 === 15))
{var inst_26787 = (state_26797[2]);var state_26797__$1 = state_26797;var statearr_26819_26841 = state_26797__$1;(statearr_26819_26841[2] = inst_26787);
(statearr_26819_26841[1] = 14);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_26823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26823[0] = state_machine__5507__auto__);
(statearr_26823[1] = 1);
return statearr_26823;
});
var state_machine__5507__auto____1 = (function (state_26797){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26797);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26824){if((e26824 instanceof Object))
{var ex__5510__auto__ = e26824;var statearr_26825_26842 = state_26797;(statearr_26825_26842[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26797);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e26824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__26843 = state_26797;
state_26797 = G__26843;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26797){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26826 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26827);
return statearr_26826;
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
