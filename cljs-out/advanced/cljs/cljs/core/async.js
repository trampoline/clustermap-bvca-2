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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24269 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24269 = (function (f,fn_handler,meta24270){
this.f = f;
this.fn_handler = fn_handler;
this.meta24270 = meta24270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24269.cljs$lang$type = true;
cljs.core.async.t24269.cljs$lang$ctorStr = "cljs.core.async/t24269";
cljs.core.async.t24269.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24269");
});
cljs.core.async.t24269.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24271){var self__ = this;
var _24271__$1 = this;return self__.meta24270;
});
cljs.core.async.t24269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24271,meta24270__$1){var self__ = this;
var _24271__$1 = this;return (new cljs.core.async.t24269(self__.f,self__.fn_handler,meta24270__$1));
});
cljs.core.async.__GT_t24269 = (function __GT_t24269(f__$1,fn_handler__$1,meta24270){return (new cljs.core.async.t24269(f__$1,fn_handler__$1,meta24270));
});
}
return (new cljs.core.async.t24269(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24273 = buff;if(G__24273)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24273.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24273.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24273);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24273);
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
{var val_24274 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24274) : fn1.call(null,val_24274));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24274) : fn1.call(null,val_24274));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24275 = n;var x_24276 = 0;while(true){
if((x_24276 < n__4248__auto___24275))
{(a[x_24276] = 0);
{
var G__24277 = (x_24276 + 1);
x_24276 = G__24277;
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
var G__24278 = (i + 1);
i = G__24278;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24282 = (function (flag,alt_flag,meta24283){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24283 = meta24283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24282.cljs$lang$type = true;
cljs.core.async.t24282.cljs$lang$ctorStr = "cljs.core.async/t24282";
cljs.core.async.t24282.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24282");
});
cljs.core.async.t24282.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24284){var self__ = this;
var _24284__$1 = this;return self__.meta24283;
});
cljs.core.async.t24282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24284,meta24283__$1){var self__ = this;
var _24284__$1 = this;return (new cljs.core.async.t24282(self__.flag,self__.alt_flag,meta24283__$1));
});
cljs.core.async.__GT_t24282 = (function __GT_t24282(flag__$1,alt_flag__$1,meta24283){return (new cljs.core.async.t24282(flag__$1,alt_flag__$1,meta24283));
});
}
return (new cljs.core.async.t24282(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24288 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24288 = (function (cb,flag,alt_handler,meta24289){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24289 = meta24289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24288.cljs$lang$type = true;
cljs.core.async.t24288.cljs$lang$ctorStr = "cljs.core.async/t24288";
cljs.core.async.t24288.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24288");
});
cljs.core.async.t24288.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24288.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24288.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24290){var self__ = this;
var _24290__$1 = this;return self__.meta24289;
});
cljs.core.async.t24288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24290,meta24289__$1){var self__ = this;
var _24290__$1 = this;return (new cljs.core.async.t24288(self__.cb,self__.flag,self__.alt_handler,meta24289__$1));
});
cljs.core.async.__GT_t24288 = (function __GT_t24288(cb__$1,flag__$1,alt_handler__$1,meta24289){return (new cljs.core.async.t24288(cb__$1,flag__$1,alt_handler__$1,meta24289));
});
}
return (new cljs.core.async.t24288(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$249.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24291_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24291_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24291_SHARP_,port], null)));
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
var G__24292 = (i + 1);
i = G__24292;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$233))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$233], null));
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
var alts_BANG___delegate = function (ports,p__24293){var map__24295 = p__24293;var map__24295__$1 = ((cljs.core.seq_QMARK_(map__24295))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24295):map__24295);var opts = map__24295__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24293 = null;if (arguments.length > 1) {
  p__24293 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24293);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24296){
var ports = cljs.core.first(arglist__24296);
var p__24293 = cljs.core.rest(arglist__24296);
return alts_BANG___delegate(ports,p__24293);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24304 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24304 = (function (ch,f,map_LT_,meta24305){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24305 = meta24305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24304.cljs$lang$type = true;
cljs.core.async.t24304.cljs$lang$ctorStr = "cljs.core.async/t24304";
cljs.core.async.t24304.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24304");
});
cljs.core.async.t24304.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24304.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24304.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24304.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24307 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24307 = (function (fn1,_,meta24305,ch,f,map_LT_,meta24308){
this.fn1 = fn1;
this._ = _;
this.meta24305 = meta24305;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24308 = meta24308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24307.cljs$lang$type = true;
cljs.core.async.t24307.cljs$lang$ctorStr = "cljs.core.async/t24307";
cljs.core.async.t24307.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24307");
});
cljs.core.async.t24307.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24307.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24297_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24297_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24297_SHARP_) : self__.f.call(null,p1__24297_SHARP_)))) : f1.call(null,(((p1__24297_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24297_SHARP_) : self__.f.call(null,p1__24297_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24309){var self__ = this;
var _24309__$1 = this;return self__.meta24308;
});
cljs.core.async.t24307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24309,meta24308__$1){var self__ = this;
var _24309__$1 = this;return (new cljs.core.async.t24307(self__.fn1,self__._,self__.meta24305,self__.ch,self__.f,self__.map_LT_,meta24308__$1));
});
cljs.core.async.__GT_t24307 = (function __GT_t24307(fn1__$1,___$2,meta24305__$1,ch__$2,f__$2,map_LT___$2,meta24308){return (new cljs.core.async.t24307(fn1__$1,___$2,meta24305__$1,ch__$2,f__$2,map_LT___$2,meta24308));
});
}
return (new cljs.core.async.t24307(fn1,___$1,self__.meta24305,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24304.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24304.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24306){var self__ = this;
var _24306__$1 = this;return self__.meta24305;
});
cljs.core.async.t24304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24306,meta24305__$1){var self__ = this;
var _24306__$1 = this;return (new cljs.core.async.t24304(self__.ch,self__.f,self__.map_LT_,meta24305__$1));
});
cljs.core.async.__GT_t24304 = (function __GT_t24304(ch__$1,f__$1,map_LT___$1,meta24305){return (new cljs.core.async.t24304(ch__$1,f__$1,map_LT___$1,meta24305));
});
}
return (new cljs.core.async.t24304(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24313 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24313 = (function (ch,f,map_GT_,meta24314){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24314 = meta24314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24313.cljs$lang$type = true;
cljs.core.async.t24313.cljs$lang$ctorStr = "cljs.core.async/t24313";
cljs.core.async.t24313.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24313");
});
cljs.core.async.t24313.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24313.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24313.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24315){var self__ = this;
var _24315__$1 = this;return self__.meta24314;
});
cljs.core.async.t24313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24315,meta24314__$1){var self__ = this;
var _24315__$1 = this;return (new cljs.core.async.t24313(self__.ch,self__.f,self__.map_GT_,meta24314__$1));
});
cljs.core.async.__GT_t24313 = (function __GT_t24313(ch__$1,f__$1,map_GT___$1,meta24314){return (new cljs.core.async.t24313(ch__$1,f__$1,map_GT___$1,meta24314));
});
}
return (new cljs.core.async.t24313(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24319 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24319 = (function (ch,p,filter_GT_,meta24320){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24320 = meta24320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24319.cljs$lang$type = true;
cljs.core.async.t24319.cljs$lang$ctorStr = "cljs.core.async/t24319";
cljs.core.async.t24319.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24319");
});
cljs.core.async.t24319.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24319.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24319.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24321){var self__ = this;
var _24321__$1 = this;return self__.meta24320;
});
cljs.core.async.t24319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24321,meta24320__$1){var self__ = this;
var _24321__$1 = this;return (new cljs.core.async.t24319(self__.ch,self__.p,self__.filter_GT_,meta24320__$1));
});
cljs.core.async.__GT_t24319 = (function __GT_t24319(ch__$1,p__$1,filter_GT___$1,meta24320){return (new cljs.core.async.t24319(ch__$1,p__$1,filter_GT___$1,meta24320));
});
}
return (new cljs.core.async.t24319(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24383){var state_val_24384 = (state_24383[1]);if((state_val_24384 === 1))
{var state_24383__$1 = state_24383;var statearr_24385_24405 = state_24383__$1;(statearr_24385_24405[2] = null);
(statearr_24385_24405[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24384 === 2))
{var state_24383__$1 = state_24383;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24383__$1,4,ch);
} else
{if((state_val_24384 === 3))
{var inst_24381 = (state_24383[2]);var state_24383__$1 = state_24383;return cljs.core.async.impl.ioc_helpers.return_chan(state_24383__$1,inst_24381);
} else
{if((state_val_24384 === 4))
{var inst_24365 = (state_24383[7]);var inst_24365__$1 = (state_24383[2]);var inst_24366 = (inst_24365__$1 == null);var state_24383__$1 = (function (){var statearr_24386 = state_24383;(statearr_24386[7] = inst_24365__$1);
return statearr_24386;
})();if(cljs.core.truth_(inst_24366))
{var statearr_24387_24406 = state_24383__$1;(statearr_24387_24406[1] = 5);
} else
{var statearr_24388_24407 = state_24383__$1;(statearr_24388_24407[1] = 6);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24384 === 5))
{var inst_24368 = cljs.core.async.close_BANG_(out);var state_24383__$1 = state_24383;var statearr_24389_24408 = state_24383__$1;(statearr_24389_24408[2] = inst_24368);
(statearr_24389_24408[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24384 === 6))
{var inst_24365 = (state_24383[7]);var inst_24370 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24365) : p.call(null,inst_24365));var state_24383__$1 = state_24383;if(cljs.core.truth_(inst_24370))
{var statearr_24390_24409 = state_24383__$1;(statearr_24390_24409[1] = 8);
} else
{var statearr_24391_24410 = state_24383__$1;(statearr_24391_24410[1] = 9);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24384 === 7))
{var inst_24379 = (state_24383[2]);var state_24383__$1 = state_24383;var statearr_24392_24411 = state_24383__$1;(statearr_24392_24411[2] = inst_24379);
(statearr_24392_24411[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24384 === 8))
{var inst_24365 = (state_24383[7]);var state_24383__$1 = state_24383;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24383__$1,11,out,inst_24365);
} else
{if((state_val_24384 === 9))
{var state_24383__$1 = state_24383;var statearr_24393_24412 = state_24383__$1;(statearr_24393_24412[2] = null);
(statearr_24393_24412[1] = 10);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24384 === 10))
{var inst_24376 = (state_24383[2]);var state_24383__$1 = (function (){var statearr_24394 = state_24383;(statearr_24394[8] = inst_24376);
return statearr_24394;
})();var statearr_24395_24413 = state_24383__$1;(statearr_24395_24413[2] = null);
(statearr_24395_24413[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24384 === 11))
{var inst_24373 = (state_24383[2]);var state_24383__$1 = state_24383;var statearr_24396_24414 = state_24383__$1;(statearr_24396_24414[2] = inst_24373);
(statearr_24396_24414[1] = 10);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_24400 = [null,null,null,null,null,null,null,null,null];(statearr_24400[0] = state_machine__5507__auto__);
(statearr_24400[1] = 1);
return statearr_24400;
});
var state_machine__5507__auto____1 = (function (state_24383){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24383);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24401){if((e24401 instanceof Object))
{var ex__5510__auto__ = e24401;var statearr_24402_24415 = state_24383;(statearr_24402_24415[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24383);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e24401;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__24416 = state_24383;
state_24383 = G__24416;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24383){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24403 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24404);
return statearr_24403;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24568){var state_val_24569 = (state_24568[1]);if((state_val_24569 === 1))
{var state_24568__$1 = state_24568;var statearr_24570_24607 = state_24568__$1;(statearr_24570_24607[2] = null);
(statearr_24570_24607[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 2))
{var state_24568__$1 = state_24568;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24568__$1,4,in$);
} else
{if((state_val_24569 === 3))
{var inst_24566 = (state_24568[2]);var state_24568__$1 = state_24568;return cljs.core.async.impl.ioc_helpers.return_chan(state_24568__$1,inst_24566);
} else
{if((state_val_24569 === 4))
{var inst_24514 = (state_24568[7]);var inst_24514__$1 = (state_24568[2]);var inst_24515 = (inst_24514__$1 == null);var state_24568__$1 = (function (){var statearr_24571 = state_24568;(statearr_24571[7] = inst_24514__$1);
return statearr_24571;
})();if(cljs.core.truth_(inst_24515))
{var statearr_24572_24608 = state_24568__$1;(statearr_24572_24608[1] = 5);
} else
{var statearr_24573_24609 = state_24568__$1;(statearr_24573_24609[1] = 6);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 5))
{var inst_24517 = cljs.core.async.close_BANG_(out);var state_24568__$1 = state_24568;var statearr_24574_24610 = state_24568__$1;(statearr_24574_24610[2] = inst_24517);
(statearr_24574_24610[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 6))
{var inst_24514 = (state_24568[7]);var inst_24519 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24514) : f.call(null,inst_24514));var inst_24524 = cljs.core.seq(inst_24519);var inst_24525 = inst_24524;var inst_24526 = null;var inst_24527 = 0;var inst_24528 = 0;var state_24568__$1 = (function (){var statearr_24575 = state_24568;(statearr_24575[8] = inst_24525);
(statearr_24575[9] = inst_24526);
(statearr_24575[10] = inst_24527);
(statearr_24575[11] = inst_24528);
return statearr_24575;
})();var statearr_24576_24611 = state_24568__$1;(statearr_24576_24611[2] = null);
(statearr_24576_24611[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 7))
{var inst_24564 = (state_24568[2]);var state_24568__$1 = state_24568;var statearr_24577_24612 = state_24568__$1;(statearr_24577_24612[2] = inst_24564);
(statearr_24577_24612[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 8))
{var inst_24527 = (state_24568[10]);var inst_24528 = (state_24568[11]);var inst_24530 = (inst_24528 < inst_24527);var inst_24531 = inst_24530;var state_24568__$1 = state_24568;if(cljs.core.truth_(inst_24531))
{var statearr_24578_24613 = state_24568__$1;(statearr_24578_24613[1] = 10);
} else
{var statearr_24579_24614 = state_24568__$1;(statearr_24579_24614[1] = 11);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 9))
{var inst_24561 = (state_24568[2]);var state_24568__$1 = (function (){var statearr_24580 = state_24568;(statearr_24580[12] = inst_24561);
return statearr_24580;
})();var statearr_24581_24615 = state_24568__$1;(statearr_24581_24615[2] = null);
(statearr_24581_24615[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 10))
{var inst_24526 = (state_24568[9]);var inst_24528 = (state_24568[11]);var inst_24533 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24526,inst_24528);var state_24568__$1 = state_24568;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24568__$1,13,out,inst_24533);
} else
{if((state_val_24569 === 11))
{var inst_24539 = (state_24568[13]);var inst_24525 = (state_24568[8]);var inst_24539__$1 = cljs.core.seq(inst_24525);var state_24568__$1 = (function (){var statearr_24585 = state_24568;(statearr_24585[13] = inst_24539__$1);
return statearr_24585;
})();if(inst_24539__$1)
{var statearr_24586_24616 = state_24568__$1;(statearr_24586_24616[1] = 14);
} else
{var statearr_24587_24617 = state_24568__$1;(statearr_24587_24617[1] = 15);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 12))
{var inst_24559 = (state_24568[2]);var state_24568__$1 = state_24568;var statearr_24588_24618 = state_24568__$1;(statearr_24588_24618[2] = inst_24559);
(statearr_24588_24618[1] = 9);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 13))
{var inst_24525 = (state_24568[8]);var inst_24526 = (state_24568[9]);var inst_24527 = (state_24568[10]);var inst_24528 = (state_24568[11]);var inst_24535 = (state_24568[2]);var inst_24536 = (inst_24528 + 1);var tmp24582 = inst_24525;var tmp24583 = inst_24526;var tmp24584 = inst_24527;var inst_24525__$1 = tmp24582;var inst_24526__$1 = tmp24583;var inst_24527__$1 = tmp24584;var inst_24528__$1 = inst_24536;var state_24568__$1 = (function (){var statearr_24589 = state_24568;(statearr_24589[8] = inst_24525__$1);
(statearr_24589[9] = inst_24526__$1);
(statearr_24589[10] = inst_24527__$1);
(statearr_24589[11] = inst_24528__$1);
(statearr_24589[14] = inst_24535);
return statearr_24589;
})();var statearr_24590_24619 = state_24568__$1;(statearr_24590_24619[2] = null);
(statearr_24590_24619[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 14))
{var inst_24539 = (state_24568[13]);var inst_24541 = cljs.core.chunked_seq_QMARK_(inst_24539);var state_24568__$1 = state_24568;if(inst_24541)
{var statearr_24591_24620 = state_24568__$1;(statearr_24591_24620[1] = 17);
} else
{var statearr_24592_24621 = state_24568__$1;(statearr_24592_24621[1] = 18);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 15))
{var state_24568__$1 = state_24568;var statearr_24593_24622 = state_24568__$1;(statearr_24593_24622[2] = null);
(statearr_24593_24622[1] = 16);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 16))
{var inst_24557 = (state_24568[2]);var state_24568__$1 = state_24568;var statearr_24594_24623 = state_24568__$1;(statearr_24594_24623[2] = inst_24557);
(statearr_24594_24623[1] = 12);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 17))
{var inst_24539 = (state_24568[13]);var inst_24543 = cljs.core.chunk_first(inst_24539);var inst_24544 = cljs.core.chunk_rest(inst_24539);var inst_24545 = cljs.core.count(inst_24543);var inst_24525 = inst_24544;var inst_24526 = inst_24543;var inst_24527 = inst_24545;var inst_24528 = 0;var state_24568__$1 = (function (){var statearr_24595 = state_24568;(statearr_24595[8] = inst_24525);
(statearr_24595[9] = inst_24526);
(statearr_24595[10] = inst_24527);
(statearr_24595[11] = inst_24528);
return statearr_24595;
})();var statearr_24596_24624 = state_24568__$1;(statearr_24596_24624[2] = null);
(statearr_24596_24624[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 18))
{var inst_24539 = (state_24568[13]);var inst_24548 = cljs.core.first(inst_24539);var state_24568__$1 = state_24568;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24568__$1,20,out,inst_24548);
} else
{if((state_val_24569 === 19))
{var inst_24554 = (state_24568[2]);var state_24568__$1 = state_24568;var statearr_24597_24625 = state_24568__$1;(statearr_24597_24625[2] = inst_24554);
(statearr_24597_24625[1] = 16);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24569 === 20))
{var inst_24539 = (state_24568[13]);var inst_24550 = (state_24568[2]);var inst_24551 = cljs.core.next(inst_24539);var inst_24525 = inst_24551;var inst_24526 = null;var inst_24527 = 0;var inst_24528 = 0;var state_24568__$1 = (function (){var statearr_24598 = state_24568;(statearr_24598[8] = inst_24525);
(statearr_24598[9] = inst_24526);
(statearr_24598[10] = inst_24527);
(statearr_24598[11] = inst_24528);
(statearr_24598[15] = inst_24550);
return statearr_24598;
})();var statearr_24599_24626 = state_24568__$1;(statearr_24599_24626[2] = null);
(statearr_24599_24626[1] = 8);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_24603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24603[0] = state_machine__5507__auto__);
(statearr_24603[1] = 1);
return statearr_24603;
});
var state_machine__5507__auto____1 = (function (state_24568){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24568);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24604){if((e24604 instanceof Object))
{var ex__5510__auto__ = e24604;var statearr_24605_24627 = state_24568;(statearr_24605_24627[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24568);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e24604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__24628 = state_24568;
state_24568 = G__24628;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24568){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24606 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24606;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24688){var state_val_24689 = (state_24688[1]);if((state_val_24689 === 1))
{var state_24688__$1 = state_24688;var statearr_24690_24710 = state_24688__$1;(statearr_24690_24710[2] = null);
(statearr_24690_24710[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24689 === 2))
{var state_24688__$1 = state_24688;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24688__$1,4,from);
} else
{if((state_val_24689 === 3))
{var inst_24686 = (state_24688[2]);var state_24688__$1 = state_24688;return cljs.core.async.impl.ioc_helpers.return_chan(state_24688__$1,inst_24686);
} else
{if((state_val_24689 === 4))
{var inst_24671 = (state_24688[7]);var inst_24671__$1 = (state_24688[2]);var inst_24672 = (inst_24671__$1 == null);var state_24688__$1 = (function (){var statearr_24691 = state_24688;(statearr_24691[7] = inst_24671__$1);
return statearr_24691;
})();if(cljs.core.truth_(inst_24672))
{var statearr_24692_24711 = state_24688__$1;(statearr_24692_24711[1] = 5);
} else
{var statearr_24693_24712 = state_24688__$1;(statearr_24693_24712[1] = 6);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24689 === 5))
{var state_24688__$1 = state_24688;if(cljs.core.truth_(close_QMARK_))
{var statearr_24694_24713 = state_24688__$1;(statearr_24694_24713[1] = 8);
} else
{var statearr_24695_24714 = state_24688__$1;(statearr_24695_24714[1] = 9);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24689 === 6))
{var inst_24671 = (state_24688[7]);var state_24688__$1 = state_24688;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24688__$1,11,to,inst_24671);
} else
{if((state_val_24689 === 7))
{var inst_24684 = (state_24688[2]);var state_24688__$1 = state_24688;var statearr_24696_24715 = state_24688__$1;(statearr_24696_24715[2] = inst_24684);
(statearr_24696_24715[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24689 === 8))
{var inst_24675 = cljs.core.async.close_BANG_(to);var state_24688__$1 = state_24688;var statearr_24697_24716 = state_24688__$1;(statearr_24697_24716[2] = inst_24675);
(statearr_24697_24716[1] = 10);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24689 === 9))
{var state_24688__$1 = state_24688;var statearr_24698_24717 = state_24688__$1;(statearr_24698_24717[2] = null);
(statearr_24698_24717[1] = 10);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24689 === 10))
{var inst_24678 = (state_24688[2]);var state_24688__$1 = state_24688;var statearr_24699_24718 = state_24688__$1;(statearr_24699_24718[2] = inst_24678);
(statearr_24699_24718[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24689 === 11))
{var inst_24681 = (state_24688[2]);var state_24688__$1 = (function (){var statearr_24700 = state_24688;(statearr_24700[8] = inst_24681);
return statearr_24700;
})();var statearr_24701_24719 = state_24688__$1;(statearr_24701_24719[2] = null);
(statearr_24701_24719[1] = 2);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_24705 = [null,null,null,null,null,null,null,null,null];(statearr_24705[0] = state_machine__5507__auto__);
(statearr_24705[1] = 1);
return statearr_24705;
});
var state_machine__5507__auto____1 = (function (state_24688){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24688);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24706){if((e24706 instanceof Object))
{var ex__5510__auto__ = e24706;var statearr_24707_24720 = state_24688;(statearr_24707_24720[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24688);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e24706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__24721 = state_24688;
state_24688 = G__24721;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24688){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24708 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24709);
return statearr_24708;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24786){var state_val_24787 = (state_24786[1]);if((state_val_24787 === 1))
{var state_24786__$1 = state_24786;var statearr_24788_24809 = state_24786__$1;(statearr_24788_24809[2] = null);
(statearr_24788_24809[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24787 === 2))
{var state_24786__$1 = state_24786;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24786__$1,4,ch);
} else
{if((state_val_24787 === 3))
{var inst_24784 = (state_24786[2]);var state_24786__$1 = state_24786;return cljs.core.async.impl.ioc_helpers.return_chan(state_24786__$1,inst_24784);
} else
{if((state_val_24787 === 4))
{var inst_24767 = (state_24786[7]);var inst_24767__$1 = (state_24786[2]);var inst_24768 = (inst_24767__$1 == null);var state_24786__$1 = (function (){var statearr_24789 = state_24786;(statearr_24789[7] = inst_24767__$1);
return statearr_24789;
})();if(cljs.core.truth_(inst_24768))
{var statearr_24790_24810 = state_24786__$1;(statearr_24790_24810[1] = 5);
} else
{var statearr_24791_24811 = state_24786__$1;(statearr_24791_24811[1] = 6);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24787 === 5))
{var inst_24770 = cljs.core.async.close_BANG_(tc);var inst_24771 = cljs.core.async.close_BANG_(fc);var state_24786__$1 = (function (){var statearr_24792 = state_24786;(statearr_24792[8] = inst_24770);
return statearr_24792;
})();var statearr_24793_24812 = state_24786__$1;(statearr_24793_24812[2] = inst_24771);
(statearr_24793_24812[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24787 === 6))
{var inst_24767 = (state_24786[7]);var inst_24773 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24767) : p.call(null,inst_24767));var state_24786__$1 = state_24786;if(cljs.core.truth_(inst_24773))
{var statearr_24794_24813 = state_24786__$1;(statearr_24794_24813[1] = 9);
} else
{var statearr_24795_24814 = state_24786__$1;(statearr_24795_24814[1] = 10);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24787 === 7))
{var inst_24782 = (state_24786[2]);var state_24786__$1 = state_24786;var statearr_24796_24815 = state_24786__$1;(statearr_24796_24815[2] = inst_24782);
(statearr_24796_24815[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24787 === 8))
{var inst_24779 = (state_24786[2]);var state_24786__$1 = (function (){var statearr_24797 = state_24786;(statearr_24797[9] = inst_24779);
return statearr_24797;
})();var statearr_24798_24816 = state_24786__$1;(statearr_24798_24816[2] = null);
(statearr_24798_24816[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24787 === 9))
{var state_24786__$1 = state_24786;var statearr_24799_24817 = state_24786__$1;(statearr_24799_24817[2] = tc);
(statearr_24799_24817[1] = 11);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24787 === 10))
{var state_24786__$1 = state_24786;var statearr_24800_24818 = state_24786__$1;(statearr_24800_24818[2] = fc);
(statearr_24800_24818[1] = 11);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24787 === 11))
{var inst_24767 = (state_24786[7]);var inst_24777 = (state_24786[2]);var state_24786__$1 = state_24786;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24786__$1,8,inst_24777,inst_24767);
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
var state_machine__5507__auto____0 = (function (){var statearr_24804 = [null,null,null,null,null,null,null,null,null,null];(statearr_24804[0] = state_machine__5507__auto__);
(statearr_24804[1] = 1);
return statearr_24804;
});
var state_machine__5507__auto____1 = (function (state_24786){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24786);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24805){if((e24805 instanceof Object))
{var ex__5510__auto__ = e24805;var statearr_24806_24819 = state_24786;(statearr_24806_24819[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24786);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e24805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__24820 = state_24786;
state_24786 = G__24820;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24786){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24807 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24808);
return statearr_24807;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24867){var state_val_24868 = (state_24867[1]);if((state_val_24868 === 7))
{var inst_24863 = (state_24867[2]);var state_24867__$1 = state_24867;var statearr_24869_24885 = state_24867__$1;(statearr_24869_24885[2] = inst_24863);
(statearr_24869_24885[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24868 === 6))
{var inst_24853 = (state_24867[7]);var inst_24856 = (state_24867[8]);var inst_24860 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24853,inst_24856) : f.call(null,inst_24853,inst_24856));var inst_24853__$1 = inst_24860;var state_24867__$1 = (function (){var statearr_24870 = state_24867;(statearr_24870[7] = inst_24853__$1);
return statearr_24870;
})();var statearr_24871_24886 = state_24867__$1;(statearr_24871_24886[2] = null);
(statearr_24871_24886[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24868 === 5))
{var inst_24853 = (state_24867[7]);var state_24867__$1 = state_24867;var statearr_24872_24887 = state_24867__$1;(statearr_24872_24887[2] = inst_24853);
(statearr_24872_24887[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24868 === 4))
{var inst_24856 = (state_24867[8]);var inst_24856__$1 = (state_24867[2]);var inst_24857 = (inst_24856__$1 == null);var state_24867__$1 = (function (){var statearr_24873 = state_24867;(statearr_24873[8] = inst_24856__$1);
return statearr_24873;
})();if(cljs.core.truth_(inst_24857))
{var statearr_24874_24888 = state_24867__$1;(statearr_24874_24888[1] = 5);
} else
{var statearr_24875_24889 = state_24867__$1;(statearr_24875_24889[1] = 6);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24868 === 3))
{var inst_24865 = (state_24867[2]);var state_24867__$1 = state_24867;return cljs.core.async.impl.ioc_helpers.return_chan(state_24867__$1,inst_24865);
} else
{if((state_val_24868 === 2))
{var state_24867__$1 = state_24867;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24867__$1,4,ch);
} else
{if((state_val_24868 === 1))
{var inst_24853 = init;var state_24867__$1 = (function (){var statearr_24876 = state_24867;(statearr_24876[7] = inst_24853);
return statearr_24876;
})();var statearr_24877_24890 = state_24867__$1;(statearr_24877_24890[2] = null);
(statearr_24877_24890[1] = 2);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_24881 = [null,null,null,null,null,null,null,null,null];(statearr_24881[0] = state_machine__5507__auto__);
(statearr_24881[1] = 1);
return statearr_24881;
});
var state_machine__5507__auto____1 = (function (state_24867){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24867);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24882){if((e24882 instanceof Object))
{var ex__5510__auto__ = e24882;var statearr_24883_24891 = state_24867;(statearr_24883_24891[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24867);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e24882;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__24892 = state_24867;
state_24867 = G__24892;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24867){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24884 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24884;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24954){var state_val_24955 = (state_24954[1]);if((state_val_24955 === 1))
{var inst_24934 = cljs.core.seq(coll);var inst_24935 = inst_24934;var state_24954__$1 = (function (){var statearr_24956 = state_24954;(statearr_24956[7] = inst_24935);
return statearr_24956;
})();var statearr_24957_24975 = state_24954__$1;(statearr_24957_24975[2] = null);
(statearr_24957_24975[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24955 === 2))
{var inst_24935 = (state_24954[7]);var state_24954__$1 = state_24954;if(cljs.core.truth_(inst_24935))
{var statearr_24958_24976 = state_24954__$1;(statearr_24958_24976[1] = 4);
} else
{var statearr_24959_24977 = state_24954__$1;(statearr_24959_24977[1] = 5);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24955 === 3))
{var inst_24952 = (state_24954[2]);var state_24954__$1 = state_24954;return cljs.core.async.impl.ioc_helpers.return_chan(state_24954__$1,inst_24952);
} else
{if((state_val_24955 === 4))
{var inst_24935 = (state_24954[7]);var inst_24938 = cljs.core.first(inst_24935);var state_24954__$1 = state_24954;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24954__$1,7,ch,inst_24938);
} else
{if((state_val_24955 === 5))
{var state_24954__$1 = state_24954;if(cljs.core.truth_(close_QMARK_))
{var statearr_24960_24978 = state_24954__$1;(statearr_24960_24978[1] = 8);
} else
{var statearr_24961_24979 = state_24954__$1;(statearr_24961_24979[1] = 9);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_24955 === 6))
{var inst_24950 = (state_24954[2]);var state_24954__$1 = state_24954;var statearr_24962_24980 = state_24954__$1;(statearr_24962_24980[2] = inst_24950);
(statearr_24962_24980[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24955 === 7))
{var inst_24935 = (state_24954[7]);var inst_24940 = (state_24954[2]);var inst_24941 = cljs.core.next(inst_24935);var inst_24935__$1 = inst_24941;var state_24954__$1 = (function (){var statearr_24963 = state_24954;(statearr_24963[7] = inst_24935__$1);
(statearr_24963[8] = inst_24940);
return statearr_24963;
})();var statearr_24964_24981 = state_24954__$1;(statearr_24964_24981[2] = null);
(statearr_24964_24981[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24955 === 8))
{var inst_24945 = cljs.core.async.close_BANG_(ch);var state_24954__$1 = state_24954;var statearr_24965_24982 = state_24954__$1;(statearr_24965_24982[2] = inst_24945);
(statearr_24965_24982[1] = 10);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24955 === 9))
{var state_24954__$1 = state_24954;var statearr_24966_24983 = state_24954__$1;(statearr_24966_24983[2] = null);
(statearr_24966_24983[1] = 10);
return cljs.core.constant$keyword$243;
} else
{if((state_val_24955 === 10))
{var inst_24948 = (state_24954[2]);var state_24954__$1 = state_24954;var statearr_24967_24984 = state_24954__$1;(statearr_24967_24984[2] = inst_24948);
(statearr_24967_24984[1] = 6);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_24971 = [null,null,null,null,null,null,null,null,null];(statearr_24971[0] = state_machine__5507__auto__);
(statearr_24971[1] = 1);
return statearr_24971;
});
var state_machine__5507__auto____1 = (function (state_24954){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24954);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24972){if((e24972 instanceof Object))
{var ex__5510__auto__ = e24972;var statearr_24973_24985 = state_24954;(statearr_24973_24985[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24954);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e24972;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__24986 = state_24954;
state_24954 = G__24986;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24954){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24974 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24974;
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
cljs.core.async.Mux = (function (){var obj24988 = {};return obj24988;
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
cljs.core.async.Mult = (function (){var obj24990 = {};return obj24990;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25214 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25214 = (function (cs,ch,mult,meta25215){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25215 = meta25215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25214.cljs$lang$type = true;
cljs.core.async.t25214.cljs$lang$ctorStr = "cljs.core.async/t25214";
cljs.core.async.t25214.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25214");
});})(cs))
;
cljs.core.async.t25214.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25214.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25214.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25214.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25214.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25214.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25216){var self__ = this;
var _25216__$1 = this;return self__.meta25215;
});})(cs))
;
cljs.core.async.t25214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25216,meta25215__$1){var self__ = this;
var _25216__$1 = this;return (new cljs.core.async.t25214(self__.cs,self__.ch,self__.mult,meta25215__$1));
});})(cs))
;
cljs.core.async.__GT_t25214 = ((function (cs){
return (function __GT_t25214(cs__$1,ch__$1,mult__$1,meta25215){return (new cljs.core.async.t25214(cs__$1,ch__$1,mult__$1,meta25215));
});})(cs))
;
}
return (new cljs.core.async.t25214(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25351){var state_val_25352 = (state_25351[1]);if((state_val_25352 === 32))
{var inst_25219 = (state_25351[7]);var inst_25295 = (state_25351[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25351,31,Object,null,30);var inst_25302 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25295,inst_25219,done);var state_25351__$1 = state_25351;var statearr_25353_25438 = state_25351__$1;(statearr_25353_25438[2] = inst_25302);
cljs.core.async.impl.ioc_helpers.process_exception(state_25351__$1);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 1))
{var state_25351__$1 = state_25351;var statearr_25354_25439 = state_25351__$1;(statearr_25354_25439[2] = null);
(statearr_25354_25439[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 33))
{var inst_25308 = (state_25351[9]);var inst_25310 = cljs.core.chunked_seq_QMARK_(inst_25308);var state_25351__$1 = state_25351;if(inst_25310)
{var statearr_25355_25440 = state_25351__$1;(statearr_25355_25440[1] = 36);
} else
{var statearr_25356_25441 = state_25351__$1;(statearr_25356_25441[1] = 37);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 2))
{var state_25351__$1 = state_25351;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25351__$1,4,ch);
} else
{if((state_val_25352 === 34))
{var state_25351__$1 = state_25351;var statearr_25357_25442 = state_25351__$1;(statearr_25357_25442[2] = null);
(statearr_25357_25442[1] = 35);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 3))
{var inst_25349 = (state_25351[2]);var state_25351__$1 = state_25351;return cljs.core.async.impl.ioc_helpers.return_chan(state_25351__$1,inst_25349);
} else
{if((state_val_25352 === 35))
{var inst_25333 = (state_25351[2]);var state_25351__$1 = state_25351;var statearr_25358_25443 = state_25351__$1;(statearr_25358_25443[2] = inst_25333);
(statearr_25358_25443[1] = 29);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 4))
{var inst_25219 = (state_25351[7]);var inst_25219__$1 = (state_25351[2]);var inst_25220 = (inst_25219__$1 == null);var state_25351__$1 = (function (){var statearr_25359 = state_25351;(statearr_25359[7] = inst_25219__$1);
return statearr_25359;
})();if(cljs.core.truth_(inst_25220))
{var statearr_25360_25444 = state_25351__$1;(statearr_25360_25444[1] = 5);
} else
{var statearr_25361_25445 = state_25351__$1;(statearr_25361_25445[1] = 6);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 36))
{var inst_25308 = (state_25351[9]);var inst_25312 = cljs.core.chunk_first(inst_25308);var inst_25313 = cljs.core.chunk_rest(inst_25308);var inst_25314 = cljs.core.count(inst_25312);var inst_25287 = inst_25313;var inst_25288 = inst_25312;var inst_25289 = inst_25314;var inst_25290 = 0;var state_25351__$1 = (function (){var statearr_25362 = state_25351;(statearr_25362[10] = inst_25288);
(statearr_25362[11] = inst_25289);
(statearr_25362[12] = inst_25290);
(statearr_25362[13] = inst_25287);
return statearr_25362;
})();var statearr_25363_25446 = state_25351__$1;(statearr_25363_25446[2] = null);
(statearr_25363_25446[1] = 25);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 5))
{var inst_25226 = cljs.core.deref(cs);var inst_25227 = cljs.core.seq(inst_25226);var inst_25228 = inst_25227;var inst_25229 = null;var inst_25230 = 0;var inst_25231 = 0;var state_25351__$1 = (function (){var statearr_25364 = state_25351;(statearr_25364[14] = inst_25231);
(statearr_25364[15] = inst_25230);
(statearr_25364[16] = inst_25228);
(statearr_25364[17] = inst_25229);
return statearr_25364;
})();var statearr_25365_25447 = state_25351__$1;(statearr_25365_25447[2] = null);
(statearr_25365_25447[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 37))
{var inst_25308 = (state_25351[9]);var inst_25317 = cljs.core.first(inst_25308);var state_25351__$1 = (function (){var statearr_25366 = state_25351;(statearr_25366[18] = inst_25317);
return statearr_25366;
})();var statearr_25367_25448 = state_25351__$1;(statearr_25367_25448[2] = null);
(statearr_25367_25448[1] = 41);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 6))
{var inst_25279 = (state_25351[19]);var inst_25278 = cljs.core.deref(cs);var inst_25279__$1 = cljs.core.keys(inst_25278);var inst_25280 = cljs.core.count(inst_25279__$1);var inst_25281 = cljs.core.reset_BANG_(dctr,inst_25280);var inst_25286 = cljs.core.seq(inst_25279__$1);var inst_25287 = inst_25286;var inst_25288 = null;var inst_25289 = 0;var inst_25290 = 0;var state_25351__$1 = (function (){var statearr_25368 = state_25351;(statearr_25368[20] = inst_25281);
(statearr_25368[10] = inst_25288);
(statearr_25368[11] = inst_25289);
(statearr_25368[12] = inst_25290);
(statearr_25368[13] = inst_25287);
(statearr_25368[19] = inst_25279__$1);
return statearr_25368;
})();var statearr_25369_25449 = state_25351__$1;(statearr_25369_25449[2] = null);
(statearr_25369_25449[1] = 25);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 38))
{var inst_25330 = (state_25351[2]);var state_25351__$1 = state_25351;var statearr_25370_25450 = state_25351__$1;(statearr_25370_25450[2] = inst_25330);
(statearr_25370_25450[1] = 35);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 7))
{var inst_25347 = (state_25351[2]);var state_25351__$1 = state_25351;var statearr_25371_25451 = state_25351__$1;(statearr_25371_25451[2] = inst_25347);
(statearr_25371_25451[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 39))
{var inst_25308 = (state_25351[9]);var inst_25326 = (state_25351[2]);var inst_25327 = cljs.core.next(inst_25308);var inst_25287 = inst_25327;var inst_25288 = null;var inst_25289 = 0;var inst_25290 = 0;var state_25351__$1 = (function (){var statearr_25372 = state_25351;(statearr_25372[21] = inst_25326);
(statearr_25372[10] = inst_25288);
(statearr_25372[11] = inst_25289);
(statearr_25372[12] = inst_25290);
(statearr_25372[13] = inst_25287);
return statearr_25372;
})();var statearr_25373_25452 = state_25351__$1;(statearr_25373_25452[2] = null);
(statearr_25373_25452[1] = 25);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 8))
{var inst_25231 = (state_25351[14]);var inst_25230 = (state_25351[15]);var inst_25233 = (inst_25231 < inst_25230);var inst_25234 = inst_25233;var state_25351__$1 = state_25351;if(cljs.core.truth_(inst_25234))
{var statearr_25374_25453 = state_25351__$1;(statearr_25374_25453[1] = 10);
} else
{var statearr_25375_25454 = state_25351__$1;(statearr_25375_25454[1] = 11);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 40))
{var inst_25317 = (state_25351[18]);var inst_25318 = (state_25351[2]);var inst_25319 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25320 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25317);var state_25351__$1 = (function (){var statearr_25376 = state_25351;(statearr_25376[22] = inst_25318);
(statearr_25376[23] = inst_25319);
return statearr_25376;
})();var statearr_25377_25455 = state_25351__$1;(statearr_25377_25455[2] = inst_25320);
cljs.core.async.impl.ioc_helpers.process_exception(state_25351__$1);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 9))
{var inst_25276 = (state_25351[2]);var state_25351__$1 = state_25351;var statearr_25378_25456 = state_25351__$1;(statearr_25378_25456[2] = inst_25276);
(statearr_25378_25456[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 41))
{var inst_25219 = (state_25351[7]);var inst_25317 = (state_25351[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25351,40,Object,null,39);var inst_25324 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25317,inst_25219,done);var state_25351__$1 = state_25351;var statearr_25379_25457 = state_25351__$1;(statearr_25379_25457[2] = inst_25324);
cljs.core.async.impl.ioc_helpers.process_exception(state_25351__$1);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 10))
{var inst_25231 = (state_25351[14]);var inst_25229 = (state_25351[17]);var inst_25237 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25229,inst_25231);var inst_25238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25237,0,null);var inst_25239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25237,1,null);var state_25351__$1 = (function (){var statearr_25380 = state_25351;(statearr_25380[24] = inst_25238);
return statearr_25380;
})();if(cljs.core.truth_(inst_25239))
{var statearr_25381_25458 = state_25351__$1;(statearr_25381_25458[1] = 13);
} else
{var statearr_25382_25459 = state_25351__$1;(statearr_25382_25459[1] = 14);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 42))
{var state_25351__$1 = state_25351;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25351__$1,45,dchan);
} else
{if((state_val_25352 === 11))
{var inst_25248 = (state_25351[25]);var inst_25228 = (state_25351[16]);var inst_25248__$1 = cljs.core.seq(inst_25228);var state_25351__$1 = (function (){var statearr_25383 = state_25351;(statearr_25383[25] = inst_25248__$1);
return statearr_25383;
})();if(inst_25248__$1)
{var statearr_25384_25460 = state_25351__$1;(statearr_25384_25460[1] = 16);
} else
{var statearr_25385_25461 = state_25351__$1;(statearr_25385_25461[1] = 17);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 43))
{var state_25351__$1 = state_25351;var statearr_25386_25462 = state_25351__$1;(statearr_25386_25462[2] = null);
(statearr_25386_25462[1] = 44);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 12))
{var inst_25274 = (state_25351[2]);var state_25351__$1 = state_25351;var statearr_25387_25463 = state_25351__$1;(statearr_25387_25463[2] = inst_25274);
(statearr_25387_25463[1] = 9);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 44))
{var inst_25344 = (state_25351[2]);var state_25351__$1 = (function (){var statearr_25388 = state_25351;(statearr_25388[26] = inst_25344);
return statearr_25388;
})();var statearr_25389_25464 = state_25351__$1;(statearr_25389_25464[2] = null);
(statearr_25389_25464[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 13))
{var inst_25238 = (state_25351[24]);var inst_25241 = cljs.core.async.close_BANG_(inst_25238);var state_25351__$1 = state_25351;var statearr_25390_25465 = state_25351__$1;(statearr_25390_25465[2] = inst_25241);
(statearr_25390_25465[1] = 15);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 45))
{var inst_25341 = (state_25351[2]);var state_25351__$1 = state_25351;var statearr_25394_25466 = state_25351__$1;(statearr_25394_25466[2] = inst_25341);
(statearr_25394_25466[1] = 44);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 14))
{var state_25351__$1 = state_25351;var statearr_25395_25467 = state_25351__$1;(statearr_25395_25467[2] = null);
(statearr_25395_25467[1] = 15);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 15))
{var inst_25231 = (state_25351[14]);var inst_25230 = (state_25351[15]);var inst_25228 = (state_25351[16]);var inst_25229 = (state_25351[17]);var inst_25244 = (state_25351[2]);var inst_25245 = (inst_25231 + 1);var tmp25391 = inst_25230;var tmp25392 = inst_25228;var tmp25393 = inst_25229;var inst_25228__$1 = tmp25392;var inst_25229__$1 = tmp25393;var inst_25230__$1 = tmp25391;var inst_25231__$1 = inst_25245;var state_25351__$1 = (function (){var statearr_25396 = state_25351;(statearr_25396[14] = inst_25231__$1);
(statearr_25396[15] = inst_25230__$1);
(statearr_25396[27] = inst_25244);
(statearr_25396[16] = inst_25228__$1);
(statearr_25396[17] = inst_25229__$1);
return statearr_25396;
})();var statearr_25397_25468 = state_25351__$1;(statearr_25397_25468[2] = null);
(statearr_25397_25468[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 16))
{var inst_25248 = (state_25351[25]);var inst_25250 = cljs.core.chunked_seq_QMARK_(inst_25248);var state_25351__$1 = state_25351;if(inst_25250)
{var statearr_25398_25469 = state_25351__$1;(statearr_25398_25469[1] = 19);
} else
{var statearr_25399_25470 = state_25351__$1;(statearr_25399_25470[1] = 20);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 17))
{var state_25351__$1 = state_25351;var statearr_25400_25471 = state_25351__$1;(statearr_25400_25471[2] = null);
(statearr_25400_25471[1] = 18);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 18))
{var inst_25272 = (state_25351[2]);var state_25351__$1 = state_25351;var statearr_25401_25472 = state_25351__$1;(statearr_25401_25472[2] = inst_25272);
(statearr_25401_25472[1] = 12);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 19))
{var inst_25248 = (state_25351[25]);var inst_25252 = cljs.core.chunk_first(inst_25248);var inst_25253 = cljs.core.chunk_rest(inst_25248);var inst_25254 = cljs.core.count(inst_25252);var inst_25228 = inst_25253;var inst_25229 = inst_25252;var inst_25230 = inst_25254;var inst_25231 = 0;var state_25351__$1 = (function (){var statearr_25402 = state_25351;(statearr_25402[14] = inst_25231);
(statearr_25402[15] = inst_25230);
(statearr_25402[16] = inst_25228);
(statearr_25402[17] = inst_25229);
return statearr_25402;
})();var statearr_25403_25473 = state_25351__$1;(statearr_25403_25473[2] = null);
(statearr_25403_25473[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 20))
{var inst_25248 = (state_25351[25]);var inst_25258 = cljs.core.first(inst_25248);var inst_25259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25258,0,null);var inst_25260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25258,1,null);var state_25351__$1 = (function (){var statearr_25404 = state_25351;(statearr_25404[28] = inst_25259);
return statearr_25404;
})();if(cljs.core.truth_(inst_25260))
{var statearr_25405_25474 = state_25351__$1;(statearr_25405_25474[1] = 22);
} else
{var statearr_25406_25475 = state_25351__$1;(statearr_25406_25475[1] = 23);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 21))
{var inst_25269 = (state_25351[2]);var state_25351__$1 = state_25351;var statearr_25407_25476 = state_25351__$1;(statearr_25407_25476[2] = inst_25269);
(statearr_25407_25476[1] = 18);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 22))
{var inst_25259 = (state_25351[28]);var inst_25262 = cljs.core.async.close_BANG_(inst_25259);var state_25351__$1 = state_25351;var statearr_25408_25477 = state_25351__$1;(statearr_25408_25477[2] = inst_25262);
(statearr_25408_25477[1] = 24);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 23))
{var state_25351__$1 = state_25351;var statearr_25409_25478 = state_25351__$1;(statearr_25409_25478[2] = null);
(statearr_25409_25478[1] = 24);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 24))
{var inst_25248 = (state_25351[25]);var inst_25265 = (state_25351[2]);var inst_25266 = cljs.core.next(inst_25248);var inst_25228 = inst_25266;var inst_25229 = null;var inst_25230 = 0;var inst_25231 = 0;var state_25351__$1 = (function (){var statearr_25410 = state_25351;(statearr_25410[29] = inst_25265);
(statearr_25410[14] = inst_25231);
(statearr_25410[15] = inst_25230);
(statearr_25410[16] = inst_25228);
(statearr_25410[17] = inst_25229);
return statearr_25410;
})();var statearr_25411_25479 = state_25351__$1;(statearr_25411_25479[2] = null);
(statearr_25411_25479[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 25))
{var inst_25289 = (state_25351[11]);var inst_25290 = (state_25351[12]);var inst_25292 = (inst_25290 < inst_25289);var inst_25293 = inst_25292;var state_25351__$1 = state_25351;if(cljs.core.truth_(inst_25293))
{var statearr_25412_25480 = state_25351__$1;(statearr_25412_25480[1] = 27);
} else
{var statearr_25413_25481 = state_25351__$1;(statearr_25413_25481[1] = 28);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 26))
{var inst_25279 = (state_25351[19]);var inst_25337 = (state_25351[2]);var inst_25338 = cljs.core.seq(inst_25279);var state_25351__$1 = (function (){var statearr_25414 = state_25351;(statearr_25414[30] = inst_25337);
return statearr_25414;
})();if(inst_25338)
{var statearr_25415_25482 = state_25351__$1;(statearr_25415_25482[1] = 42);
} else
{var statearr_25416_25483 = state_25351__$1;(statearr_25416_25483[1] = 43);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 27))
{var inst_25288 = (state_25351[10]);var inst_25290 = (state_25351[12]);var inst_25295 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25288,inst_25290);var state_25351__$1 = (function (){var statearr_25417 = state_25351;(statearr_25417[8] = inst_25295);
return statearr_25417;
})();var statearr_25418_25484 = state_25351__$1;(statearr_25418_25484[2] = null);
(statearr_25418_25484[1] = 32);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 28))
{var inst_25287 = (state_25351[13]);var inst_25308 = (state_25351[9]);var inst_25308__$1 = cljs.core.seq(inst_25287);var state_25351__$1 = (function (){var statearr_25422 = state_25351;(statearr_25422[9] = inst_25308__$1);
return statearr_25422;
})();if(inst_25308__$1)
{var statearr_25423_25485 = state_25351__$1;(statearr_25423_25485[1] = 33);
} else
{var statearr_25424_25486 = state_25351__$1;(statearr_25424_25486[1] = 34);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 29))
{var inst_25335 = (state_25351[2]);var state_25351__$1 = state_25351;var statearr_25425_25487 = state_25351__$1;(statearr_25425_25487[2] = inst_25335);
(statearr_25425_25487[1] = 26);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 30))
{var inst_25288 = (state_25351[10]);var inst_25289 = (state_25351[11]);var inst_25290 = (state_25351[12]);var inst_25287 = (state_25351[13]);var inst_25304 = (state_25351[2]);var inst_25305 = (inst_25290 + 1);var tmp25419 = inst_25288;var tmp25420 = inst_25289;var tmp25421 = inst_25287;var inst_25287__$1 = tmp25421;var inst_25288__$1 = tmp25419;var inst_25289__$1 = tmp25420;var inst_25290__$1 = inst_25305;var state_25351__$1 = (function (){var statearr_25426 = state_25351;(statearr_25426[31] = inst_25304);
(statearr_25426[10] = inst_25288__$1);
(statearr_25426[11] = inst_25289__$1);
(statearr_25426[12] = inst_25290__$1);
(statearr_25426[13] = inst_25287__$1);
return statearr_25426;
})();var statearr_25427_25488 = state_25351__$1;(statearr_25427_25488[2] = null);
(statearr_25427_25488[1] = 25);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25352 === 31))
{var inst_25295 = (state_25351[8]);var inst_25296 = (state_25351[2]);var inst_25297 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25298 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25295);var state_25351__$1 = (function (){var statearr_25428 = state_25351;(statearr_25428[32] = inst_25297);
(statearr_25428[33] = inst_25296);
return statearr_25428;
})();var statearr_25429_25489 = state_25351__$1;(statearr_25429_25489[2] = inst_25298);
cljs.core.async.impl.ioc_helpers.process_exception(state_25351__$1);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_25433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25433[0] = state_machine__5507__auto__);
(statearr_25433[1] = 1);
return statearr_25433;
});
var state_machine__5507__auto____1 = (function (state_25351){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25351);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25434){if((e25434 instanceof Object))
{var ex__5510__auto__ = e25434;var statearr_25435_25490 = state_25351;(statearr_25435_25490[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25351);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e25434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__25491 = state_25351;
state_25351 = G__25491;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25351){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25436 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25437);
return statearr_25436;
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
cljs.core.async.Mix = (function (){var obj25493 = {};return obj25493;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$250,null,cljs.core.constant$keyword$251,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$252);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$251);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$252,chs);var pauses = pick(cljs.core.constant$keyword$250,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$253,solos,cljs.core.constant$keyword$254,pick(cljs.core.constant$keyword$251,chs),cljs.core.constant$keyword$255,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$250)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25603 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25603 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25604){
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
this.meta25604 = meta25604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25603.cljs$lang$type = true;
cljs.core.async.t25603.cljs$lang$ctorStr = "cljs.core.async/t25603";
cljs.core.async.t25603.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25603");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25603.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25603.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25603.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25603.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25603.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25603.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25603.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25603.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25605){var self__ = this;
var _25605__$1 = this;return self__.meta25604;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25605,meta25604__$1){var self__ = this;
var _25605__$1 = this;return (new cljs.core.async.t25603(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25604__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25603 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25603(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25604){return (new cljs.core.async.t25603(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25604));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25603(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25670){var state_val_25671 = (state_25670[1]);if((state_val_25671 === 1))
{var inst_25609 = (state_25670[7]);var inst_25609__$1 = calc_state();var inst_25610 = cljs.core.seq_QMARK_(inst_25609__$1);var state_25670__$1 = (function (){var statearr_25672 = state_25670;(statearr_25672[7] = inst_25609__$1);
return statearr_25672;
})();if(inst_25610)
{var statearr_25673_25713 = state_25670__$1;(statearr_25673_25713[1] = 2);
} else
{var statearr_25674_25714 = state_25670__$1;(statearr_25674_25714[1] = 3);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 2))
{var inst_25609 = (state_25670[7]);var inst_25612 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25609);var state_25670__$1 = state_25670;var statearr_25675_25715 = state_25670__$1;(statearr_25675_25715[2] = inst_25612);
(statearr_25675_25715[1] = 4);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 3))
{var inst_25609 = (state_25670[7]);var state_25670__$1 = state_25670;var statearr_25676_25716 = state_25670__$1;(statearr_25676_25716[2] = inst_25609);
(statearr_25676_25716[1] = 4);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 4))
{var inst_25609 = (state_25670[7]);var inst_25615 = (state_25670[2]);var inst_25616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25615,cljs.core.constant$keyword$255);var inst_25617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25615,cljs.core.constant$keyword$254);var inst_25618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25615,cljs.core.constant$keyword$253);var inst_25619 = inst_25609;var state_25670__$1 = (function (){var statearr_25677 = state_25670;(statearr_25677[8] = inst_25616);
(statearr_25677[9] = inst_25618);
(statearr_25677[10] = inst_25617);
(statearr_25677[11] = inst_25619);
return statearr_25677;
})();var statearr_25678_25717 = state_25670__$1;(statearr_25678_25717[2] = null);
(statearr_25678_25717[1] = 5);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 5))
{var inst_25619 = (state_25670[11]);var inst_25622 = cljs.core.seq_QMARK_(inst_25619);var state_25670__$1 = state_25670;if(inst_25622)
{var statearr_25679_25718 = state_25670__$1;(statearr_25679_25718[1] = 7);
} else
{var statearr_25680_25719 = state_25670__$1;(statearr_25680_25719[1] = 8);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 6))
{var inst_25668 = (state_25670[2]);var state_25670__$1 = state_25670;return cljs.core.async.impl.ioc_helpers.return_chan(state_25670__$1,inst_25668);
} else
{if((state_val_25671 === 7))
{var inst_25619 = (state_25670[11]);var inst_25624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25619);var state_25670__$1 = state_25670;var statearr_25681_25720 = state_25670__$1;(statearr_25681_25720[2] = inst_25624);
(statearr_25681_25720[1] = 9);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 8))
{var inst_25619 = (state_25670[11]);var state_25670__$1 = state_25670;var statearr_25682_25721 = state_25670__$1;(statearr_25682_25721[2] = inst_25619);
(statearr_25682_25721[1] = 9);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 9))
{var inst_25627 = (state_25670[12]);var inst_25627__$1 = (state_25670[2]);var inst_25628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25627__$1,cljs.core.constant$keyword$255);var inst_25629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25627__$1,cljs.core.constant$keyword$254);var inst_25630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25627__$1,cljs.core.constant$keyword$253);var state_25670__$1 = (function (){var statearr_25683 = state_25670;(statearr_25683[13] = inst_25629);
(statearr_25683[14] = inst_25630);
(statearr_25683[12] = inst_25627__$1);
return statearr_25683;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25670__$1,10,inst_25628);
} else
{if((state_val_25671 === 10))
{var inst_25635 = (state_25670[15]);var inst_25634 = (state_25670[16]);var inst_25633 = (state_25670[2]);var inst_25634__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25633,0,null);var inst_25635__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25633,1,null);var inst_25636 = (inst_25634__$1 == null);var inst_25637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25635__$1,change);var inst_25638 = (inst_25636) || (inst_25637);var state_25670__$1 = (function (){var statearr_25684 = state_25670;(statearr_25684[15] = inst_25635__$1);
(statearr_25684[16] = inst_25634__$1);
return statearr_25684;
})();if(cljs.core.truth_(inst_25638))
{var statearr_25685_25722 = state_25670__$1;(statearr_25685_25722[1] = 11);
} else
{var statearr_25686_25723 = state_25670__$1;(statearr_25686_25723[1] = 12);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 11))
{var inst_25634 = (state_25670[16]);var inst_25640 = (inst_25634 == null);var state_25670__$1 = state_25670;if(cljs.core.truth_(inst_25640))
{var statearr_25687_25724 = state_25670__$1;(statearr_25687_25724[1] = 14);
} else
{var statearr_25688_25725 = state_25670__$1;(statearr_25688_25725[1] = 15);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 12))
{var inst_25649 = (state_25670[17]);var inst_25630 = (state_25670[14]);var inst_25635 = (state_25670[15]);var inst_25649__$1 = (inst_25630.cljs$core$IFn$_invoke$arity$1 ? inst_25630.cljs$core$IFn$_invoke$arity$1(inst_25635) : inst_25630.call(null,inst_25635));var state_25670__$1 = (function (){var statearr_25689 = state_25670;(statearr_25689[17] = inst_25649__$1);
return statearr_25689;
})();if(cljs.core.truth_(inst_25649__$1))
{var statearr_25690_25726 = state_25670__$1;(statearr_25690_25726[1] = 17);
} else
{var statearr_25691_25727 = state_25670__$1;(statearr_25691_25727[1] = 18);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 13))
{var inst_25666 = (state_25670[2]);var state_25670__$1 = state_25670;var statearr_25692_25728 = state_25670__$1;(statearr_25692_25728[2] = inst_25666);
(statearr_25692_25728[1] = 6);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 14))
{var inst_25635 = (state_25670[15]);var inst_25642 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25635);var state_25670__$1 = state_25670;var statearr_25693_25729 = state_25670__$1;(statearr_25693_25729[2] = inst_25642);
(statearr_25693_25729[1] = 16);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 15))
{var state_25670__$1 = state_25670;var statearr_25694_25730 = state_25670__$1;(statearr_25694_25730[2] = null);
(statearr_25694_25730[1] = 16);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 16))
{var inst_25645 = (state_25670[2]);var inst_25646 = calc_state();var inst_25619 = inst_25646;var state_25670__$1 = (function (){var statearr_25695 = state_25670;(statearr_25695[18] = inst_25645);
(statearr_25695[11] = inst_25619);
return statearr_25695;
})();var statearr_25696_25731 = state_25670__$1;(statearr_25696_25731[2] = null);
(statearr_25696_25731[1] = 5);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 17))
{var inst_25649 = (state_25670[17]);var state_25670__$1 = state_25670;var statearr_25697_25732 = state_25670__$1;(statearr_25697_25732[2] = inst_25649);
(statearr_25697_25732[1] = 19);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 18))
{var inst_25629 = (state_25670[13]);var inst_25630 = (state_25670[14]);var inst_25635 = (state_25670[15]);var inst_25652 = cljs.core.empty_QMARK_(inst_25630);var inst_25653 = (inst_25629.cljs$core$IFn$_invoke$arity$1 ? inst_25629.cljs$core$IFn$_invoke$arity$1(inst_25635) : inst_25629.call(null,inst_25635));var inst_25654 = cljs.core.not(inst_25653);var inst_25655 = (inst_25652) && (inst_25654);var state_25670__$1 = state_25670;var statearr_25698_25733 = state_25670__$1;(statearr_25698_25733[2] = inst_25655);
(statearr_25698_25733[1] = 19);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 19))
{var inst_25657 = (state_25670[2]);var state_25670__$1 = state_25670;if(cljs.core.truth_(inst_25657))
{var statearr_25699_25734 = state_25670__$1;(statearr_25699_25734[1] = 20);
} else
{var statearr_25700_25735 = state_25670__$1;(statearr_25700_25735[1] = 21);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 20))
{var inst_25634 = (state_25670[16]);var state_25670__$1 = state_25670;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25670__$1,23,out,inst_25634);
} else
{if((state_val_25671 === 21))
{var state_25670__$1 = state_25670;var statearr_25701_25736 = state_25670__$1;(statearr_25701_25736[2] = null);
(statearr_25701_25736[1] = 22);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 22))
{var inst_25627 = (state_25670[12]);var inst_25663 = (state_25670[2]);var inst_25619 = inst_25627;var state_25670__$1 = (function (){var statearr_25702 = state_25670;(statearr_25702[19] = inst_25663);
(statearr_25702[11] = inst_25619);
return statearr_25702;
})();var statearr_25703_25737 = state_25670__$1;(statearr_25703_25737[2] = null);
(statearr_25703_25737[1] = 5);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25671 === 23))
{var inst_25660 = (state_25670[2]);var state_25670__$1 = state_25670;var statearr_25704_25738 = state_25670__$1;(statearr_25704_25738[2] = inst_25660);
(statearr_25704_25738[1] = 22);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_25708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25708[0] = state_machine__5507__auto__);
(statearr_25708[1] = 1);
return statearr_25708;
});
var state_machine__5507__auto____1 = (function (state_25670){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25670);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25709){if((e25709 instanceof Object))
{var ex__5510__auto__ = e25709;var statearr_25710_25739 = state_25670;(statearr_25710_25739[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25670);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e25709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__25740 = state_25670;
state_25670 = G__25740;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25670){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25711 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25712);
return statearr_25711;
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
cljs.core.async.Pub = (function (){var obj25742 = {};return obj25742;
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
return (function (p1__25743_SHARP_){if(cljs.core.truth_((p1__25743_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25743_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25743_SHARP_.call(null,topic))))
{return p1__25743_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25743_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25868 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25868 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25869){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25869 = meta25869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25868.cljs$lang$type = true;
cljs.core.async.t25868.cljs$lang$ctorStr = "cljs.core.async/t25868";
cljs.core.async.t25868.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25868");
});})(mults,ensure_mult))
;
cljs.core.async.t25868.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25868.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25868.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25868.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25870){var self__ = this;
var _25870__$1 = this;return self__.meta25869;
});})(mults,ensure_mult))
;
cljs.core.async.t25868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25870,meta25869__$1){var self__ = this;
var _25870__$1 = this;return (new cljs.core.async.t25868(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25869__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25868 = ((function (mults,ensure_mult){
return (function __GT_t25868(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25869){return (new cljs.core.async.t25868(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25869));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25868(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25944){var state_val_25945 = (state_25944[1]);if((state_val_25945 === 1))
{var state_25944__$1 = state_25944;var statearr_25946_25993 = state_25944__$1;(statearr_25946_25993[2] = null);
(statearr_25946_25993[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 2))
{var state_25944__$1 = state_25944;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25944__$1,4,ch);
} else
{if((state_val_25945 === 3))
{var inst_25942 = (state_25944[2]);var state_25944__$1 = state_25944;return cljs.core.async.impl.ioc_helpers.return_chan(state_25944__$1,inst_25942);
} else
{if((state_val_25945 === 4))
{var inst_25873 = (state_25944[7]);var inst_25873__$1 = (state_25944[2]);var inst_25874 = (inst_25873__$1 == null);var state_25944__$1 = (function (){var statearr_25947 = state_25944;(statearr_25947[7] = inst_25873__$1);
return statearr_25947;
})();if(cljs.core.truth_(inst_25874))
{var statearr_25948_25994 = state_25944__$1;(statearr_25948_25994[1] = 5);
} else
{var statearr_25949_25995 = state_25944__$1;(statearr_25949_25995[1] = 6);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 5))
{var inst_25880 = cljs.core.deref(mults);var inst_25881 = cljs.core.vals(inst_25880);var inst_25882 = cljs.core.seq(inst_25881);var inst_25883 = inst_25882;var inst_25884 = null;var inst_25885 = 0;var inst_25886 = 0;var state_25944__$1 = (function (){var statearr_25950 = state_25944;(statearr_25950[8] = inst_25886);
(statearr_25950[9] = inst_25885);
(statearr_25950[10] = inst_25884);
(statearr_25950[11] = inst_25883);
return statearr_25950;
})();var statearr_25951_25996 = state_25944__$1;(statearr_25951_25996[2] = null);
(statearr_25951_25996[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 6))
{var inst_25921 = (state_25944[12]);var inst_25923 = (state_25944[13]);var inst_25873 = (state_25944[7]);var inst_25921__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25873) : topic_fn.call(null,inst_25873));var inst_25922 = cljs.core.deref(mults);var inst_25923__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25922,inst_25921__$1);var state_25944__$1 = (function (){var statearr_25952 = state_25944;(statearr_25952[12] = inst_25921__$1);
(statearr_25952[13] = inst_25923__$1);
return statearr_25952;
})();if(cljs.core.truth_(inst_25923__$1))
{var statearr_25953_25997 = state_25944__$1;(statearr_25953_25997[1] = 19);
} else
{var statearr_25954_25998 = state_25944__$1;(statearr_25954_25998[1] = 20);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 7))
{var inst_25940 = (state_25944[2]);var state_25944__$1 = state_25944;var statearr_25955_25999 = state_25944__$1;(statearr_25955_25999[2] = inst_25940);
(statearr_25955_25999[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 8))
{var inst_25886 = (state_25944[8]);var inst_25885 = (state_25944[9]);var inst_25888 = (inst_25886 < inst_25885);var inst_25889 = inst_25888;var state_25944__$1 = state_25944;if(cljs.core.truth_(inst_25889))
{var statearr_25959_26000 = state_25944__$1;(statearr_25959_26000[1] = 10);
} else
{var statearr_25960_26001 = state_25944__$1;(statearr_25960_26001[1] = 11);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 9))
{var inst_25919 = (state_25944[2]);var state_25944__$1 = state_25944;var statearr_25961_26002 = state_25944__$1;(statearr_25961_26002[2] = inst_25919);
(statearr_25961_26002[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 10))
{var inst_25886 = (state_25944[8]);var inst_25885 = (state_25944[9]);var inst_25884 = (state_25944[10]);var inst_25883 = (state_25944[11]);var inst_25891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25884,inst_25886);var inst_25892 = cljs.core.async.muxch_STAR_(inst_25891);var inst_25893 = cljs.core.async.close_BANG_(inst_25892);var inst_25894 = (inst_25886 + 1);var tmp25956 = inst_25885;var tmp25957 = inst_25884;var tmp25958 = inst_25883;var inst_25883__$1 = tmp25958;var inst_25884__$1 = tmp25957;var inst_25885__$1 = tmp25956;var inst_25886__$1 = inst_25894;var state_25944__$1 = (function (){var statearr_25962 = state_25944;(statearr_25962[14] = inst_25893);
(statearr_25962[8] = inst_25886__$1);
(statearr_25962[9] = inst_25885__$1);
(statearr_25962[10] = inst_25884__$1);
(statearr_25962[11] = inst_25883__$1);
return statearr_25962;
})();var statearr_25963_26003 = state_25944__$1;(statearr_25963_26003[2] = null);
(statearr_25963_26003[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 11))
{var inst_25897 = (state_25944[15]);var inst_25883 = (state_25944[11]);var inst_25897__$1 = cljs.core.seq(inst_25883);var state_25944__$1 = (function (){var statearr_25964 = state_25944;(statearr_25964[15] = inst_25897__$1);
return statearr_25964;
})();if(inst_25897__$1)
{var statearr_25965_26004 = state_25944__$1;(statearr_25965_26004[1] = 13);
} else
{var statearr_25966_26005 = state_25944__$1;(statearr_25966_26005[1] = 14);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 12))
{var inst_25917 = (state_25944[2]);var state_25944__$1 = state_25944;var statearr_25967_26006 = state_25944__$1;(statearr_25967_26006[2] = inst_25917);
(statearr_25967_26006[1] = 9);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 13))
{var inst_25897 = (state_25944[15]);var inst_25899 = cljs.core.chunked_seq_QMARK_(inst_25897);var state_25944__$1 = state_25944;if(inst_25899)
{var statearr_25968_26007 = state_25944__$1;(statearr_25968_26007[1] = 16);
} else
{var statearr_25969_26008 = state_25944__$1;(statearr_25969_26008[1] = 17);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 14))
{var state_25944__$1 = state_25944;var statearr_25970_26009 = state_25944__$1;(statearr_25970_26009[2] = null);
(statearr_25970_26009[1] = 15);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 15))
{var inst_25915 = (state_25944[2]);var state_25944__$1 = state_25944;var statearr_25971_26010 = state_25944__$1;(statearr_25971_26010[2] = inst_25915);
(statearr_25971_26010[1] = 12);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 16))
{var inst_25897 = (state_25944[15]);var inst_25901 = cljs.core.chunk_first(inst_25897);var inst_25902 = cljs.core.chunk_rest(inst_25897);var inst_25903 = cljs.core.count(inst_25901);var inst_25883 = inst_25902;var inst_25884 = inst_25901;var inst_25885 = inst_25903;var inst_25886 = 0;var state_25944__$1 = (function (){var statearr_25972 = state_25944;(statearr_25972[8] = inst_25886);
(statearr_25972[9] = inst_25885);
(statearr_25972[10] = inst_25884);
(statearr_25972[11] = inst_25883);
return statearr_25972;
})();var statearr_25973_26011 = state_25944__$1;(statearr_25973_26011[2] = null);
(statearr_25973_26011[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 17))
{var inst_25897 = (state_25944[15]);var inst_25906 = cljs.core.first(inst_25897);var inst_25907 = cljs.core.async.muxch_STAR_(inst_25906);var inst_25908 = cljs.core.async.close_BANG_(inst_25907);var inst_25909 = cljs.core.next(inst_25897);var inst_25883 = inst_25909;var inst_25884 = null;var inst_25885 = 0;var inst_25886 = 0;var state_25944__$1 = (function (){var statearr_25974 = state_25944;(statearr_25974[16] = inst_25908);
(statearr_25974[8] = inst_25886);
(statearr_25974[9] = inst_25885);
(statearr_25974[10] = inst_25884);
(statearr_25974[11] = inst_25883);
return statearr_25974;
})();var statearr_25975_26012 = state_25944__$1;(statearr_25975_26012[2] = null);
(statearr_25975_26012[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 18))
{var inst_25912 = (state_25944[2]);var state_25944__$1 = state_25944;var statearr_25976_26013 = state_25944__$1;(statearr_25976_26013[2] = inst_25912);
(statearr_25976_26013[1] = 15);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 19))
{var state_25944__$1 = state_25944;var statearr_25977_26014 = state_25944__$1;(statearr_25977_26014[2] = null);
(statearr_25977_26014[1] = 24);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 20))
{var state_25944__$1 = state_25944;var statearr_25978_26015 = state_25944__$1;(statearr_25978_26015[2] = null);
(statearr_25978_26015[1] = 21);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 21))
{var inst_25937 = (state_25944[2]);var state_25944__$1 = (function (){var statearr_25979 = state_25944;(statearr_25979[17] = inst_25937);
return statearr_25979;
})();var statearr_25980_26016 = state_25944__$1;(statearr_25980_26016[2] = null);
(statearr_25980_26016[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 22))
{var inst_25934 = (state_25944[2]);var state_25944__$1 = state_25944;var statearr_25981_26017 = state_25944__$1;(statearr_25981_26017[2] = inst_25934);
(statearr_25981_26017[1] = 21);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 23))
{var inst_25921 = (state_25944[12]);var inst_25925 = (state_25944[2]);var inst_25926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25921);var state_25944__$1 = (function (){var statearr_25982 = state_25944;(statearr_25982[18] = inst_25925);
return statearr_25982;
})();var statearr_25983_26018 = state_25944__$1;(statearr_25983_26018[2] = inst_25926);
cljs.core.async.impl.ioc_helpers.process_exception(state_25944__$1);
return cljs.core.constant$keyword$243;
} else
{if((state_val_25945 === 24))
{var inst_25923 = (state_25944[13]);var inst_25873 = (state_25944[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25944,23,Object,null,22);var inst_25930 = cljs.core.async.muxch_STAR_(inst_25923);var state_25944__$1 = state_25944;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25944__$1,25,inst_25930,inst_25873);
} else
{if((state_val_25945 === 25))
{var inst_25932 = (state_25944[2]);var state_25944__$1 = state_25944;var statearr_25984_26019 = state_25944__$1;(statearr_25984_26019[2] = inst_25932);
cljs.core.async.impl.ioc_helpers.process_exception(state_25944__$1);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_25988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25988[0] = state_machine__5507__auto__);
(statearr_25988[1] = 1);
return statearr_25988;
});
var state_machine__5507__auto____1 = (function (state_25944){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25944);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25989){if((e25989 instanceof Object))
{var ex__5510__auto__ = e25989;var statearr_25990_26020 = state_25944;(statearr_25990_26020[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25944);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e25989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__26021 = state_25944;
state_25944 = G__26021;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25944){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25991 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25992);
return statearr_25991;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___26158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26128){var state_val_26129 = (state_26128[1]);if((state_val_26129 === 1))
{var state_26128__$1 = state_26128;var statearr_26130_26159 = state_26128__$1;(statearr_26130_26159[2] = null);
(statearr_26130_26159[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 2))
{var inst_26091 = cljs.core.reset_BANG_(dctr,cnt);var inst_26092 = 0;var state_26128__$1 = (function (){var statearr_26131 = state_26128;(statearr_26131[7] = inst_26091);
(statearr_26131[8] = inst_26092);
return statearr_26131;
})();var statearr_26132_26160 = state_26128__$1;(statearr_26132_26160[2] = null);
(statearr_26132_26160[1] = 4);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 3))
{var inst_26126 = (state_26128[2]);var state_26128__$1 = state_26128;return cljs.core.async.impl.ioc_helpers.return_chan(state_26128__$1,inst_26126);
} else
{if((state_val_26129 === 4))
{var inst_26092 = (state_26128[8]);var inst_26094 = (inst_26092 < cnt);var state_26128__$1 = state_26128;if(cljs.core.truth_(inst_26094))
{var statearr_26133_26161 = state_26128__$1;(statearr_26133_26161[1] = 6);
} else
{var statearr_26134_26162 = state_26128__$1;(statearr_26134_26162[1] = 7);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 5))
{var inst_26112 = (state_26128[2]);var state_26128__$1 = (function (){var statearr_26135 = state_26128;(statearr_26135[9] = inst_26112);
return statearr_26135;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26128__$1,12,dchan);
} else
{if((state_val_26129 === 6))
{var state_26128__$1 = state_26128;var statearr_26136_26163 = state_26128__$1;(statearr_26136_26163[2] = null);
(statearr_26136_26163[1] = 11);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 7))
{var state_26128__$1 = state_26128;var statearr_26137_26164 = state_26128__$1;(statearr_26137_26164[2] = null);
(statearr_26137_26164[1] = 8);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 8))
{var inst_26110 = (state_26128[2]);var state_26128__$1 = state_26128;var statearr_26138_26165 = state_26128__$1;(statearr_26138_26165[2] = inst_26110);
(statearr_26138_26165[1] = 5);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 9))
{var inst_26092 = (state_26128[8]);var inst_26105 = (state_26128[2]);var inst_26106 = (inst_26092 + 1);var inst_26092__$1 = inst_26106;var state_26128__$1 = (function (){var statearr_26139 = state_26128;(statearr_26139[8] = inst_26092__$1);
(statearr_26139[10] = inst_26105);
return statearr_26139;
})();var statearr_26140_26166 = state_26128__$1;(statearr_26140_26166[2] = null);
(statearr_26140_26166[1] = 4);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 10))
{var inst_26096 = (state_26128[2]);var inst_26097 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26128__$1 = (function (){var statearr_26141 = state_26128;(statearr_26141[11] = inst_26096);
return statearr_26141;
})();var statearr_26142_26167 = state_26128__$1;(statearr_26142_26167[2] = inst_26097);
cljs.core.async.impl.ioc_helpers.process_exception(state_26128__$1);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 11))
{var inst_26092 = (state_26128[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26128,10,Object,null,9);var inst_26101 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26092) : chs__$1.call(null,inst_26092));var inst_26102 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26092) : done.call(null,inst_26092));var inst_26103 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26101,inst_26102);var state_26128__$1 = state_26128;var statearr_26143_26168 = state_26128__$1;(statearr_26143_26168[2] = inst_26103);
cljs.core.async.impl.ioc_helpers.process_exception(state_26128__$1);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 12))
{var inst_26114 = (state_26128[12]);var inst_26114__$1 = (state_26128[2]);var inst_26115 = cljs.core.some(cljs.core.nil_QMARK_,inst_26114__$1);var state_26128__$1 = (function (){var statearr_26144 = state_26128;(statearr_26144[12] = inst_26114__$1);
return statearr_26144;
})();if(cljs.core.truth_(inst_26115))
{var statearr_26145_26169 = state_26128__$1;(statearr_26145_26169[1] = 13);
} else
{var statearr_26146_26170 = state_26128__$1;(statearr_26146_26170[1] = 14);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 13))
{var inst_26117 = cljs.core.async.close_BANG_(out);var state_26128__$1 = state_26128;var statearr_26147_26171 = state_26128__$1;(statearr_26147_26171[2] = inst_26117);
(statearr_26147_26171[1] = 15);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 14))
{var inst_26114 = (state_26128[12]);var inst_26119 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26114);var state_26128__$1 = state_26128;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26128__$1,16,out,inst_26119);
} else
{if((state_val_26129 === 15))
{var inst_26124 = (state_26128[2]);var state_26128__$1 = state_26128;var statearr_26148_26172 = state_26128__$1;(statearr_26148_26172[2] = inst_26124);
(statearr_26148_26172[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26129 === 16))
{var inst_26121 = (state_26128[2]);var state_26128__$1 = (function (){var statearr_26149 = state_26128;(statearr_26149[13] = inst_26121);
return statearr_26149;
})();var statearr_26150_26173 = state_26128__$1;(statearr_26150_26173[2] = null);
(statearr_26150_26173[1] = 2);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_26154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26154[0] = state_machine__5507__auto__);
(statearr_26154[1] = 1);
return statearr_26154;
});
var state_machine__5507__auto____1 = (function (state_26128){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26128);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26155){if((e26155 instanceof Object))
{var ex__5510__auto__ = e26155;var statearr_26156_26174 = state_26128;(statearr_26156_26174[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26128);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e26155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__26175 = state_26128;
state_26128 = G__26175;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26128){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26157 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26158);
return statearr_26157;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26259){var state_val_26260 = (state_26259[1]);if((state_val_26260 === 1))
{var inst_26230 = cljs.core.vec(chs);var inst_26231 = inst_26230;var state_26259__$1 = (function (){var statearr_26261 = state_26259;(statearr_26261[7] = inst_26231);
return statearr_26261;
})();var statearr_26262_26284 = state_26259__$1;(statearr_26262_26284[2] = null);
(statearr_26262_26284[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26260 === 2))
{var inst_26231 = (state_26259[7]);var inst_26233 = cljs.core.count(inst_26231);var inst_26234 = (inst_26233 > 0);var state_26259__$1 = state_26259;if(cljs.core.truth_(inst_26234))
{var statearr_26263_26285 = state_26259__$1;(statearr_26263_26285[1] = 4);
} else
{var statearr_26264_26286 = state_26259__$1;(statearr_26264_26286[1] = 5);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26260 === 3))
{var inst_26257 = (state_26259[2]);var state_26259__$1 = state_26259;return cljs.core.async.impl.ioc_helpers.return_chan(state_26259__$1,inst_26257);
} else
{if((state_val_26260 === 4))
{var inst_26231 = (state_26259[7]);var state_26259__$1 = state_26259;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26259__$1,7,inst_26231);
} else
{if((state_val_26260 === 5))
{var inst_26253 = cljs.core.async.close_BANG_(out);var state_26259__$1 = state_26259;var statearr_26265_26287 = state_26259__$1;(statearr_26265_26287[2] = inst_26253);
(statearr_26265_26287[1] = 6);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26260 === 6))
{var inst_26255 = (state_26259[2]);var state_26259__$1 = state_26259;var statearr_26266_26288 = state_26259__$1;(statearr_26266_26288[2] = inst_26255);
(statearr_26266_26288[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26260 === 7))
{var inst_26239 = (state_26259[8]);var inst_26238 = (state_26259[9]);var inst_26238__$1 = (state_26259[2]);var inst_26239__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26238__$1,0,null);var inst_26240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26238__$1,1,null);var inst_26241 = (inst_26239__$1 == null);var state_26259__$1 = (function (){var statearr_26267 = state_26259;(statearr_26267[8] = inst_26239__$1);
(statearr_26267[9] = inst_26238__$1);
(statearr_26267[10] = inst_26240);
return statearr_26267;
})();if(cljs.core.truth_(inst_26241))
{var statearr_26268_26289 = state_26259__$1;(statearr_26268_26289[1] = 8);
} else
{var statearr_26269_26290 = state_26259__$1;(statearr_26269_26290[1] = 9);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26260 === 8))
{var inst_26239 = (state_26259[8]);var inst_26238 = (state_26259[9]);var inst_26231 = (state_26259[7]);var inst_26240 = (state_26259[10]);var inst_26243 = (function (){var c = inst_26240;var v = inst_26239;var vec__26236 = inst_26238;var cs = inst_26231;return ((function (c,v,vec__26236,cs,inst_26239,inst_26238,inst_26231,inst_26240,state_val_26260){
return (function (p1__26176_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26176_SHARP_);
});
;})(c,v,vec__26236,cs,inst_26239,inst_26238,inst_26231,inst_26240,state_val_26260))
})();var inst_26244 = cljs.core.filterv(inst_26243,inst_26231);var inst_26231__$1 = inst_26244;var state_26259__$1 = (function (){var statearr_26270 = state_26259;(statearr_26270[7] = inst_26231__$1);
return statearr_26270;
})();var statearr_26271_26291 = state_26259__$1;(statearr_26271_26291[2] = null);
(statearr_26271_26291[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26260 === 9))
{var inst_26239 = (state_26259[8]);var state_26259__$1 = state_26259;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26259__$1,11,out,inst_26239);
} else
{if((state_val_26260 === 10))
{var inst_26251 = (state_26259[2]);var state_26259__$1 = state_26259;var statearr_26273_26292 = state_26259__$1;(statearr_26273_26292[2] = inst_26251);
(statearr_26273_26292[1] = 6);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26260 === 11))
{var inst_26231 = (state_26259[7]);var inst_26248 = (state_26259[2]);var tmp26272 = inst_26231;var inst_26231__$1 = tmp26272;var state_26259__$1 = (function (){var statearr_26274 = state_26259;(statearr_26274[7] = inst_26231__$1);
(statearr_26274[11] = inst_26248);
return statearr_26274;
})();var statearr_26275_26293 = state_26259__$1;(statearr_26275_26293[2] = null);
(statearr_26275_26293[1] = 2);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_26279 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26279[0] = state_machine__5507__auto__);
(statearr_26279[1] = 1);
return statearr_26279;
});
var state_machine__5507__auto____1 = (function (state_26259){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26259);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26280){if((e26280 instanceof Object))
{var ex__5510__auto__ = e26280;var statearr_26281_26294 = state_26259;(statearr_26281_26294[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26259);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e26280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__26295 = state_26259;
state_26259 = G__26295;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26259){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26282 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26283);
return statearr_26282;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26365){var state_val_26366 = (state_26365[1]);if((state_val_26366 === 1))
{var inst_26342 = 0;var state_26365__$1 = (function (){var statearr_26367 = state_26365;(statearr_26367[7] = inst_26342);
return statearr_26367;
})();var statearr_26368_26389 = state_26365__$1;(statearr_26368_26389[2] = null);
(statearr_26368_26389[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26366 === 2))
{var inst_26342 = (state_26365[7]);var inst_26344 = (inst_26342 < n);var state_26365__$1 = state_26365;if(cljs.core.truth_(inst_26344))
{var statearr_26369_26390 = state_26365__$1;(statearr_26369_26390[1] = 4);
} else
{var statearr_26370_26391 = state_26365__$1;(statearr_26370_26391[1] = 5);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26366 === 3))
{var inst_26362 = (state_26365[2]);var inst_26363 = cljs.core.async.close_BANG_(out);var state_26365__$1 = (function (){var statearr_26371 = state_26365;(statearr_26371[8] = inst_26362);
return statearr_26371;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26365__$1,inst_26363);
} else
{if((state_val_26366 === 4))
{var state_26365__$1 = state_26365;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26365__$1,7,ch);
} else
{if((state_val_26366 === 5))
{var state_26365__$1 = state_26365;var statearr_26372_26392 = state_26365__$1;(statearr_26372_26392[2] = null);
(statearr_26372_26392[1] = 6);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26366 === 6))
{var inst_26360 = (state_26365[2]);var state_26365__$1 = state_26365;var statearr_26373_26393 = state_26365__$1;(statearr_26373_26393[2] = inst_26360);
(statearr_26373_26393[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26366 === 7))
{var inst_26347 = (state_26365[9]);var inst_26347__$1 = (state_26365[2]);var inst_26348 = (inst_26347__$1 == null);var inst_26349 = cljs.core.not(inst_26348);var state_26365__$1 = (function (){var statearr_26374 = state_26365;(statearr_26374[9] = inst_26347__$1);
return statearr_26374;
})();if(inst_26349)
{var statearr_26375_26394 = state_26365__$1;(statearr_26375_26394[1] = 8);
} else
{var statearr_26376_26395 = state_26365__$1;(statearr_26376_26395[1] = 9);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26366 === 8))
{var inst_26347 = (state_26365[9]);var state_26365__$1 = state_26365;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26365__$1,11,out,inst_26347);
} else
{if((state_val_26366 === 9))
{var state_26365__$1 = state_26365;var statearr_26377_26396 = state_26365__$1;(statearr_26377_26396[2] = null);
(statearr_26377_26396[1] = 10);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26366 === 10))
{var inst_26357 = (state_26365[2]);var state_26365__$1 = state_26365;var statearr_26378_26397 = state_26365__$1;(statearr_26378_26397[2] = inst_26357);
(statearr_26378_26397[1] = 6);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26366 === 11))
{var inst_26342 = (state_26365[7]);var inst_26352 = (state_26365[2]);var inst_26353 = (inst_26342 + 1);var inst_26342__$1 = inst_26353;var state_26365__$1 = (function (){var statearr_26379 = state_26365;(statearr_26379[7] = inst_26342__$1);
(statearr_26379[10] = inst_26352);
return statearr_26379;
})();var statearr_26380_26398 = state_26365__$1;(statearr_26380_26398[2] = null);
(statearr_26380_26398[1] = 2);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_26384 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26384[0] = state_machine__5507__auto__);
(statearr_26384[1] = 1);
return statearr_26384;
});
var state_machine__5507__auto____1 = (function (state_26365){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26365);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26385){if((e26385 instanceof Object))
{var ex__5510__auto__ = e26385;var statearr_26386_26399 = state_26365;(statearr_26386_26399[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26365);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e26385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__26400 = state_26365;
state_26365 = G__26400;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26365){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26365);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26472){var state_val_26473 = (state_26472[1]);if((state_val_26473 === 1))
{var inst_26449 = null;var state_26472__$1 = (function (){var statearr_26474 = state_26472;(statearr_26474[7] = inst_26449);
return statearr_26474;
})();var statearr_26475_26498 = state_26472__$1;(statearr_26475_26498[2] = null);
(statearr_26475_26498[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26473 === 2))
{var state_26472__$1 = state_26472;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26472__$1,4,ch);
} else
{if((state_val_26473 === 3))
{var inst_26469 = (state_26472[2]);var inst_26470 = cljs.core.async.close_BANG_(out);var state_26472__$1 = (function (){var statearr_26476 = state_26472;(statearr_26476[8] = inst_26469);
return statearr_26476;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26472__$1,inst_26470);
} else
{if((state_val_26473 === 4))
{var inst_26452 = (state_26472[9]);var inst_26452__$1 = (state_26472[2]);var inst_26453 = (inst_26452__$1 == null);var inst_26454 = cljs.core.not(inst_26453);var state_26472__$1 = (function (){var statearr_26477 = state_26472;(statearr_26477[9] = inst_26452__$1);
return statearr_26477;
})();if(inst_26454)
{var statearr_26478_26499 = state_26472__$1;(statearr_26478_26499[1] = 5);
} else
{var statearr_26479_26500 = state_26472__$1;(statearr_26479_26500[1] = 6);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26473 === 5))
{var inst_26449 = (state_26472[7]);var inst_26452 = (state_26472[9]);var inst_26456 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26452,inst_26449);var state_26472__$1 = state_26472;if(inst_26456)
{var statearr_26480_26501 = state_26472__$1;(statearr_26480_26501[1] = 8);
} else
{var statearr_26481_26502 = state_26472__$1;(statearr_26481_26502[1] = 9);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26473 === 6))
{var state_26472__$1 = state_26472;var statearr_26483_26503 = state_26472__$1;(statearr_26483_26503[2] = null);
(statearr_26483_26503[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26473 === 7))
{var inst_26467 = (state_26472[2]);var state_26472__$1 = state_26472;var statearr_26484_26504 = state_26472__$1;(statearr_26484_26504[2] = inst_26467);
(statearr_26484_26504[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26473 === 8))
{var inst_26449 = (state_26472[7]);var tmp26482 = inst_26449;var inst_26449__$1 = tmp26482;var state_26472__$1 = (function (){var statearr_26485 = state_26472;(statearr_26485[7] = inst_26449__$1);
return statearr_26485;
})();var statearr_26486_26505 = state_26472__$1;(statearr_26486_26505[2] = null);
(statearr_26486_26505[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26473 === 9))
{var inst_26452 = (state_26472[9]);var state_26472__$1 = state_26472;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26472__$1,11,out,inst_26452);
} else
{if((state_val_26473 === 10))
{var inst_26464 = (state_26472[2]);var state_26472__$1 = state_26472;var statearr_26487_26506 = state_26472__$1;(statearr_26487_26506[2] = inst_26464);
(statearr_26487_26506[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26473 === 11))
{var inst_26452 = (state_26472[9]);var inst_26461 = (state_26472[2]);var inst_26449 = inst_26452;var state_26472__$1 = (function (){var statearr_26488 = state_26472;(statearr_26488[10] = inst_26461);
(statearr_26488[7] = inst_26449);
return statearr_26488;
})();var statearr_26489_26507 = state_26472__$1;(statearr_26489_26507[2] = null);
(statearr_26489_26507[1] = 2);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_26493 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26493[0] = state_machine__5507__auto__);
(statearr_26493[1] = 1);
return statearr_26493;
});
var state_machine__5507__auto____1 = (function (state_26472){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26472);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26494){if((e26494 instanceof Object))
{var ex__5510__auto__ = e26494;var statearr_26495_26508 = state_26472;(statearr_26495_26508[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26472);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e26494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__26509 = state_26472;
state_26472 = G__26509;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26472){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26496 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26497);
return statearr_26496;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26614){var state_val_26615 = (state_26614[1]);if((state_val_26615 === 1))
{var inst_26577 = (new Array(n));var inst_26578 = inst_26577;var inst_26579 = 0;var state_26614__$1 = (function (){var statearr_26616 = state_26614;(statearr_26616[7] = inst_26579);
(statearr_26616[8] = inst_26578);
return statearr_26616;
})();var statearr_26617_26645 = state_26614__$1;(statearr_26617_26645[2] = null);
(statearr_26617_26645[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26615 === 2))
{var state_26614__$1 = state_26614;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26614__$1,4,ch);
} else
{if((state_val_26615 === 3))
{var inst_26612 = (state_26614[2]);var state_26614__$1 = state_26614;return cljs.core.async.impl.ioc_helpers.return_chan(state_26614__$1,inst_26612);
} else
{if((state_val_26615 === 4))
{var inst_26582 = (state_26614[9]);var inst_26582__$1 = (state_26614[2]);var inst_26583 = (inst_26582__$1 == null);var inst_26584 = cljs.core.not(inst_26583);var state_26614__$1 = (function (){var statearr_26618 = state_26614;(statearr_26618[9] = inst_26582__$1);
return statearr_26618;
})();if(inst_26584)
{var statearr_26619_26646 = state_26614__$1;(statearr_26619_26646[1] = 5);
} else
{var statearr_26620_26647 = state_26614__$1;(statearr_26620_26647[1] = 6);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26615 === 5))
{var inst_26587 = (state_26614[10]);var inst_26582 = (state_26614[9]);var inst_26579 = (state_26614[7]);var inst_26578 = (state_26614[8]);var inst_26586 = (inst_26578[inst_26579] = inst_26582);var inst_26587__$1 = (inst_26579 + 1);var inst_26588 = (inst_26587__$1 < n);var state_26614__$1 = (function (){var statearr_26621 = state_26614;(statearr_26621[11] = inst_26586);
(statearr_26621[10] = inst_26587__$1);
return statearr_26621;
})();if(cljs.core.truth_(inst_26588))
{var statearr_26622_26648 = state_26614__$1;(statearr_26622_26648[1] = 8);
} else
{var statearr_26623_26649 = state_26614__$1;(statearr_26623_26649[1] = 9);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26615 === 6))
{var inst_26579 = (state_26614[7]);var inst_26600 = (inst_26579 > 0);var state_26614__$1 = state_26614;if(cljs.core.truth_(inst_26600))
{var statearr_26625_26650 = state_26614__$1;(statearr_26625_26650[1] = 12);
} else
{var statearr_26626_26651 = state_26614__$1;(statearr_26626_26651[1] = 13);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26615 === 7))
{var inst_26610 = (state_26614[2]);var state_26614__$1 = state_26614;var statearr_26627_26652 = state_26614__$1;(statearr_26627_26652[2] = inst_26610);
(statearr_26627_26652[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26615 === 8))
{var inst_26587 = (state_26614[10]);var inst_26578 = (state_26614[8]);var tmp26624 = inst_26578;var inst_26578__$1 = tmp26624;var inst_26579 = inst_26587;var state_26614__$1 = (function (){var statearr_26628 = state_26614;(statearr_26628[7] = inst_26579);
(statearr_26628[8] = inst_26578__$1);
return statearr_26628;
})();var statearr_26629_26653 = state_26614__$1;(statearr_26629_26653[2] = null);
(statearr_26629_26653[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26615 === 9))
{var inst_26578 = (state_26614[8]);var inst_26592 = cljs.core.vec(inst_26578);var state_26614__$1 = state_26614;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26614__$1,11,out,inst_26592);
} else
{if((state_val_26615 === 10))
{var inst_26598 = (state_26614[2]);var state_26614__$1 = state_26614;var statearr_26630_26654 = state_26614__$1;(statearr_26630_26654[2] = inst_26598);
(statearr_26630_26654[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26615 === 11))
{var inst_26594 = (state_26614[2]);var inst_26595 = (new Array(n));var inst_26578 = inst_26595;var inst_26579 = 0;var state_26614__$1 = (function (){var statearr_26631 = state_26614;(statearr_26631[12] = inst_26594);
(statearr_26631[7] = inst_26579);
(statearr_26631[8] = inst_26578);
return statearr_26631;
})();var statearr_26632_26655 = state_26614__$1;(statearr_26632_26655[2] = null);
(statearr_26632_26655[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26615 === 12))
{var inst_26578 = (state_26614[8]);var inst_26602 = cljs.core.vec(inst_26578);var state_26614__$1 = state_26614;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26614__$1,15,out,inst_26602);
} else
{if((state_val_26615 === 13))
{var state_26614__$1 = state_26614;var statearr_26633_26656 = state_26614__$1;(statearr_26633_26656[2] = null);
(statearr_26633_26656[1] = 14);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26615 === 14))
{var inst_26607 = (state_26614[2]);var inst_26608 = cljs.core.async.close_BANG_(out);var state_26614__$1 = (function (){var statearr_26634 = state_26614;(statearr_26634[13] = inst_26607);
return statearr_26634;
})();var statearr_26635_26657 = state_26614__$1;(statearr_26635_26657[2] = inst_26608);
(statearr_26635_26657[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26615 === 15))
{var inst_26604 = (state_26614[2]);var state_26614__$1 = state_26614;var statearr_26636_26658 = state_26614__$1;(statearr_26636_26658[2] = inst_26604);
(statearr_26636_26658[1] = 14);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_26640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26640[0] = state_machine__5507__auto__);
(statearr_26640[1] = 1);
return statearr_26640;
});
var state_machine__5507__auto____1 = (function (state_26614){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26614);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26641){if((e26641 instanceof Object))
{var ex__5510__auto__ = e26641;var statearr_26642_26659 = state_26614;(statearr_26642_26659[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26614);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e26641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__26660 = state_26614;
state_26614 = G__26660;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26614){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26643 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26644);
return statearr_26643;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26773){var state_val_26774 = (state_26773[1]);if((state_val_26774 === 1))
{var inst_26732 = [];var inst_26733 = inst_26732;var inst_26734 = cljs.core.constant$keyword$256;var state_26773__$1 = (function (){var statearr_26775 = state_26773;(statearr_26775[7] = inst_26734);
(statearr_26775[8] = inst_26733);
return statearr_26775;
})();var statearr_26776_26804 = state_26773__$1;(statearr_26776_26804[2] = null);
(statearr_26776_26804[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26774 === 2))
{var state_26773__$1 = state_26773;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26773__$1,4,ch);
} else
{if((state_val_26774 === 3))
{var inst_26771 = (state_26773[2]);var state_26773__$1 = state_26773;return cljs.core.async.impl.ioc_helpers.return_chan(state_26773__$1,inst_26771);
} else
{if((state_val_26774 === 4))
{var inst_26737 = (state_26773[9]);var inst_26737__$1 = (state_26773[2]);var inst_26738 = (inst_26737__$1 == null);var inst_26739 = cljs.core.not(inst_26738);var state_26773__$1 = (function (){var statearr_26777 = state_26773;(statearr_26777[9] = inst_26737__$1);
return statearr_26777;
})();if(inst_26739)
{var statearr_26778_26805 = state_26773__$1;(statearr_26778_26805[1] = 5);
} else
{var statearr_26779_26806 = state_26773__$1;(statearr_26779_26806[1] = 6);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26774 === 5))
{var inst_26741 = (state_26773[10]);var inst_26737 = (state_26773[9]);var inst_26734 = (state_26773[7]);var inst_26741__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26737) : f.call(null,inst_26737));var inst_26742 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26741__$1,inst_26734);var inst_26743 = cljs.core.keyword_identical_QMARK_(inst_26734,cljs.core.constant$keyword$256);var inst_26744 = (inst_26742) || (inst_26743);var state_26773__$1 = (function (){var statearr_26780 = state_26773;(statearr_26780[10] = inst_26741__$1);
return statearr_26780;
})();if(cljs.core.truth_(inst_26744))
{var statearr_26781_26807 = state_26773__$1;(statearr_26781_26807[1] = 8);
} else
{var statearr_26782_26808 = state_26773__$1;(statearr_26782_26808[1] = 9);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26774 === 6))
{var inst_26733 = (state_26773[8]);var inst_26758 = inst_26733.length;var inst_26759 = (inst_26758 > 0);var state_26773__$1 = state_26773;if(cljs.core.truth_(inst_26759))
{var statearr_26784_26809 = state_26773__$1;(statearr_26784_26809[1] = 12);
} else
{var statearr_26785_26810 = state_26773__$1;(statearr_26785_26810[1] = 13);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_26774 === 7))
{var inst_26769 = (state_26773[2]);var state_26773__$1 = state_26773;var statearr_26786_26811 = state_26773__$1;(statearr_26786_26811[2] = inst_26769);
(statearr_26786_26811[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26774 === 8))
{var inst_26741 = (state_26773[10]);var inst_26737 = (state_26773[9]);var inst_26733 = (state_26773[8]);var inst_26746 = inst_26733.push(inst_26737);var tmp26783 = inst_26733;var inst_26733__$1 = tmp26783;var inst_26734 = inst_26741;var state_26773__$1 = (function (){var statearr_26787 = state_26773;(statearr_26787[11] = inst_26746);
(statearr_26787[7] = inst_26734);
(statearr_26787[8] = inst_26733__$1);
return statearr_26787;
})();var statearr_26788_26812 = state_26773__$1;(statearr_26788_26812[2] = null);
(statearr_26788_26812[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26774 === 9))
{var inst_26733 = (state_26773[8]);var inst_26749 = cljs.core.vec(inst_26733);var state_26773__$1 = state_26773;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26773__$1,11,out,inst_26749);
} else
{if((state_val_26774 === 10))
{var inst_26756 = (state_26773[2]);var state_26773__$1 = state_26773;var statearr_26789_26813 = state_26773__$1;(statearr_26789_26813[2] = inst_26756);
(statearr_26789_26813[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26774 === 11))
{var inst_26741 = (state_26773[10]);var inst_26737 = (state_26773[9]);var inst_26751 = (state_26773[2]);var inst_26752 = [];var inst_26753 = inst_26752.push(inst_26737);var inst_26733 = inst_26752;var inst_26734 = inst_26741;var state_26773__$1 = (function (){var statearr_26790 = state_26773;(statearr_26790[12] = inst_26753);
(statearr_26790[13] = inst_26751);
(statearr_26790[7] = inst_26734);
(statearr_26790[8] = inst_26733);
return statearr_26790;
})();var statearr_26791_26814 = state_26773__$1;(statearr_26791_26814[2] = null);
(statearr_26791_26814[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26774 === 12))
{var inst_26733 = (state_26773[8]);var inst_26761 = cljs.core.vec(inst_26733);var state_26773__$1 = state_26773;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26773__$1,15,out,inst_26761);
} else
{if((state_val_26774 === 13))
{var state_26773__$1 = state_26773;var statearr_26792_26815 = state_26773__$1;(statearr_26792_26815[2] = null);
(statearr_26792_26815[1] = 14);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26774 === 14))
{var inst_26766 = (state_26773[2]);var inst_26767 = cljs.core.async.close_BANG_(out);var state_26773__$1 = (function (){var statearr_26793 = state_26773;(statearr_26793[14] = inst_26766);
return statearr_26793;
})();var statearr_26794_26816 = state_26773__$1;(statearr_26794_26816[2] = inst_26767);
(statearr_26794_26816[1] = 7);
return cljs.core.constant$keyword$243;
} else
{if((state_val_26774 === 15))
{var inst_26763 = (state_26773[2]);var state_26773__$1 = state_26773;var statearr_26795_26817 = state_26773__$1;(statearr_26795_26817[2] = inst_26763);
(statearr_26795_26817[1] = 14);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_26799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26799[0] = state_machine__5507__auto__);
(statearr_26799[1] = 1);
return statearr_26799;
});
var state_machine__5507__auto____1 = (function (state_26773){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26773);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26800){if((e26800 instanceof Object))
{var ex__5510__auto__ = e26800;var statearr_26801_26818 = state_26773;(statearr_26801_26818[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26773);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e26800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__26819 = state_26773;
state_26773 = G__26819;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26773){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26802 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26803);
return statearr_26802;
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
