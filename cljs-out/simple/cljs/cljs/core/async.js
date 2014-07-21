// Compiled by ClojureScript 0.0-2268
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t28357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28357 = (function (f,fn_handler,meta28358){
this.f = f;
this.fn_handler = fn_handler;
this.meta28358 = meta28358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28357.cljs$lang$type = true;
cljs.core.async.t28357.cljs$lang$ctorStr = "cljs.core.async/t28357";
cljs.core.async.t28357.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28357");
});
cljs.core.async.t28357.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t28357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t28357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28359){var self__ = this;
var _28359__$1 = this;return self__.meta28358;
});
cljs.core.async.t28357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28359,meta28358__$1){var self__ = this;
var _28359__$1 = this;return (new cljs.core.async.t28357(self__.f,self__.fn_handler,meta28358__$1));
});
cljs.core.async.__GT_t28357 = (function __GT_t28357(f__$1,fn_handler__$1,meta28358){return (new cljs.core.async.t28357(f__$1,fn_handler__$1,meta28358));
});
}
return (new cljs.core.async.t28357(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__28361 = buff;if(G__28361)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__28361.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__28361.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28361);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28361);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_28362 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28362);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28362,ret){
return (function (){return fn1.call(null,val_28362);
});})(val_28362,ret))
);
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
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___28363 = n;var x_28364 = (0);while(true){
if((x_28364 < n__4399__auto___28363))
{(a[x_28364] = (0));
{
var G__28365 = (x_28364 + (1));
x_28364 = G__28365;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__28366 = (i + (1));
i = G__28366;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t28370 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28370 = (function (flag,alt_flag,meta28371){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28371 = meta28371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28370.cljs$lang$type = true;
cljs.core.async.t28370.cljs$lang$ctorStr = "cljs.core.async/t28370";
cljs.core.async.t28370.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28370");
});})(flag))
;
cljs.core.async.t28370.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t28370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t28370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28372){var self__ = this;
var _28372__$1 = this;return self__.meta28371;
});})(flag))
;
cljs.core.async.t28370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28372,meta28371__$1){var self__ = this;
var _28372__$1 = this;return (new cljs.core.async.t28370(self__.flag,self__.alt_flag,meta28371__$1));
});})(flag))
;
cljs.core.async.__GT_t28370 = ((function (flag){
return (function __GT_t28370(flag__$1,alt_flag__$1,meta28371){return (new cljs.core.async.t28370(flag__$1,alt_flag__$1,meta28371));
});})(flag))
;
}
return (new cljs.core.async.t28370(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t28376 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28376 = (function (cb,flag,alt_handler,meta28377){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28377 = meta28377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28376.cljs$lang$type = true;
cljs.core.async.t28376.cljs$lang$ctorStr = "cljs.core.async/t28376";
cljs.core.async.t28376.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28376");
});
cljs.core.async.t28376.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t28376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t28376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28378){var self__ = this;
var _28378__$1 = this;return self__.meta28377;
});
cljs.core.async.t28376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28378,meta28377__$1){var self__ = this;
var _28378__$1 = this;return (new cljs.core.async.t28376(self__.cb,self__.flag,self__.alt_handler,meta28377__$1));
});
cljs.core.async.__GT_t28376 = (function __GT_t28376(cb__$1,flag__$1,alt_handler__$1,meta28377){return (new cljs.core.async.t28376(cb__$1,flag__$1,alt_handler__$1,meta28377));
});
}
return (new cljs.core.async.t28376(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28379_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28379_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__28380 = (i + (1));
i = G__28380;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__28381){var map__28383 = p__28381;var map__28383__$1 = ((cljs.core.seq_QMARK_.call(null,map__28383))?cljs.core.apply.call(null,cljs.core.hash_map,map__28383):map__28383);var opts = map__28383__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__28381 = null;if (arguments.length > 1) {
  p__28381 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__28381);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28384){
var ports = cljs.core.first(arglist__28384);
var p__28381 = cljs.core.rest(arglist__28384);
return alts_BANG___delegate(ports,p__28381);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t28392 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28392 = (function (ch,f,map_LT_,meta28393){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28393 = meta28393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28392.cljs$lang$type = true;
cljs.core.async.t28392.cljs$lang$ctorStr = "cljs.core.async/t28392";
cljs.core.async.t28392.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28392");
});
cljs.core.async.t28392.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28392.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t28392.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28392.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t28395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28395 = (function (fn1,_,meta28393,ch,f,map_LT_,meta28396){
this.fn1 = fn1;
this._ = _;
this.meta28393 = meta28393;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28396 = meta28396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28395.cljs$lang$type = true;
cljs.core.async.t28395.cljs$lang$ctorStr = "cljs.core.async/t28395";
cljs.core.async.t28395.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28395");
});})(___$1))
;
cljs.core.async.t28395.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28395.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__28385_SHARP_){return f1.call(null,(((p1__28385_SHARP_ == null))?null:self__.f.call(null,p1__28385_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t28395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28397){var self__ = this;
var _28397__$1 = this;return self__.meta28396;
});})(___$1))
;
cljs.core.async.t28395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28397,meta28396__$1){var self__ = this;
var _28397__$1 = this;return (new cljs.core.async.t28395(self__.fn1,self__._,self__.meta28393,self__.ch,self__.f,self__.map_LT_,meta28396__$1));
});})(___$1))
;
cljs.core.async.__GT_t28395 = ((function (___$1){
return (function __GT_t28395(fn1__$1,___$2,meta28393__$1,ch__$2,f__$2,map_LT___$2,meta28396){return (new cljs.core.async.t28395(fn1__$1,___$2,meta28393__$1,ch__$2,f__$2,map_LT___$2,meta28396));
});})(___$1))
;
}
return (new cljs.core.async.t28395(fn1,___$1,self__.meta28393,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t28392.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28392.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28394){var self__ = this;
var _28394__$1 = this;return self__.meta28393;
});
cljs.core.async.t28392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28394,meta28393__$1){var self__ = this;
var _28394__$1 = this;return (new cljs.core.async.t28392(self__.ch,self__.f,self__.map_LT_,meta28393__$1));
});
cljs.core.async.__GT_t28392 = (function __GT_t28392(ch__$1,f__$1,map_LT___$1,meta28393){return (new cljs.core.async.t28392(ch__$1,f__$1,map_LT___$1,meta28393));
});
}
return (new cljs.core.async.t28392(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t28401 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28401 = (function (ch,f,map_GT_,meta28402){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28402 = meta28402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28401.cljs$lang$type = true;
cljs.core.async.t28401.cljs$lang$ctorStr = "cljs.core.async/t28401";
cljs.core.async.t28401.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28401");
});
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28403){var self__ = this;
var _28403__$1 = this;return self__.meta28402;
});
cljs.core.async.t28401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28403,meta28402__$1){var self__ = this;
var _28403__$1 = this;return (new cljs.core.async.t28401(self__.ch,self__.f,self__.map_GT_,meta28402__$1));
});
cljs.core.async.__GT_t28401 = (function __GT_t28401(ch__$1,f__$1,map_GT___$1,meta28402){return (new cljs.core.async.t28401(ch__$1,f__$1,map_GT___$1,meta28402));
});
}
return (new cljs.core.async.t28401(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t28407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28407 = (function (ch,p,filter_GT_,meta28408){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28408 = meta28408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28407.cljs$lang$type = true;
cljs.core.async.t28407.cljs$lang$ctorStr = "cljs.core.async/t28407";
cljs.core.async.t28407.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28407");
});
cljs.core.async.t28407.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28407.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t28407.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28407.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28407.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28407.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28409){var self__ = this;
var _28409__$1 = this;return self__.meta28408;
});
cljs.core.async.t28407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28409,meta28408__$1){var self__ = this;
var _28409__$1 = this;return (new cljs.core.async.t28407(self__.ch,self__.p,self__.filter_GT_,meta28408__$1));
});
cljs.core.async.__GT_t28407 = (function __GT_t28407(ch__$1,p__$1,filter_GT___$1,meta28408){return (new cljs.core.async.t28407(ch__$1,p__$1,filter_GT___$1,meta28408));
});
}
return (new cljs.core.async.t28407(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___28492 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28492,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28492,out){
return (function (state_28471){var state_val_28472 = (state_28471[(1)]);if((state_val_28472 === (7)))
{var inst_28467 = (state_28471[(2)]);var state_28471__$1 = state_28471;var statearr_28473_28493 = state_28471__$1;(statearr_28473_28493[(2)] = inst_28467);
(statearr_28473_28493[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28472 === (1)))
{var state_28471__$1 = state_28471;var statearr_28474_28494 = state_28471__$1;(statearr_28474_28494[(2)] = null);
(statearr_28474_28494[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28472 === (4)))
{var inst_28453 = (state_28471[(7)]);var inst_28453__$1 = (state_28471[(2)]);var inst_28454 = (inst_28453__$1 == null);var state_28471__$1 = (function (){var statearr_28475 = state_28471;(statearr_28475[(7)] = inst_28453__$1);
return statearr_28475;
})();if(cljs.core.truth_(inst_28454))
{var statearr_28476_28495 = state_28471__$1;(statearr_28476_28495[(1)] = (5));
} else
{var statearr_28477_28496 = state_28471__$1;(statearr_28477_28496[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28472 === (6)))
{var inst_28453 = (state_28471[(7)]);var inst_28458 = p.call(null,inst_28453);var state_28471__$1 = state_28471;if(cljs.core.truth_(inst_28458))
{var statearr_28478_28497 = state_28471__$1;(statearr_28478_28497[(1)] = (8));
} else
{var statearr_28479_28498 = state_28471__$1;(statearr_28479_28498[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28472 === (3)))
{var inst_28469 = (state_28471[(2)]);var state_28471__$1 = state_28471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28471__$1,inst_28469);
} else
{if((state_val_28472 === (2)))
{var state_28471__$1 = state_28471;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28471__$1,(4),ch);
} else
{if((state_val_28472 === (11)))
{var inst_28461 = (state_28471[(2)]);var state_28471__$1 = state_28471;var statearr_28480_28499 = state_28471__$1;(statearr_28480_28499[(2)] = inst_28461);
(statearr_28480_28499[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28472 === (9)))
{var state_28471__$1 = state_28471;var statearr_28481_28500 = state_28471__$1;(statearr_28481_28500[(2)] = null);
(statearr_28481_28500[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28472 === (5)))
{var inst_28456 = cljs.core.async.close_BANG_.call(null,out);var state_28471__$1 = state_28471;var statearr_28482_28501 = state_28471__$1;(statearr_28482_28501[(2)] = inst_28456);
(statearr_28482_28501[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28472 === (10)))
{var inst_28464 = (state_28471[(2)]);var state_28471__$1 = (function (){var statearr_28483 = state_28471;(statearr_28483[(8)] = inst_28464);
return statearr_28483;
})();var statearr_28484_28502 = state_28471__$1;(statearr_28484_28502[(2)] = null);
(statearr_28484_28502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28472 === (8)))
{var inst_28453 = (state_28471[(7)]);var state_28471__$1 = state_28471;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28471__$1,(11),out,inst_28453);
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
});})(c__5693__auto___28492,out))
;return ((function (switch__5678__auto__,c__5693__auto___28492,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28488 = [null,null,null,null,null,null,null,null,null];(statearr_28488[(0)] = state_machine__5679__auto__);
(statearr_28488[(1)] = (1));
return statearr_28488;
});
var state_machine__5679__auto____1 = (function (state_28471){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28471);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28489){if((e28489 instanceof Object))
{var ex__5682__auto__ = e28489;var statearr_28490_28503 = state_28471;(statearr_28490_28503[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28471);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28504 = state_28471;
state_28471 = G__28504;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28471){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28492,out))
})();var state__5695__auto__ = (function (){var statearr_28491 = f__5694__auto__.call(null);(statearr_28491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28492);
return statearr_28491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28492,out))
);
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_28656){var state_val_28657 = (state_28656[(1)]);if((state_val_28657 === (7)))
{var inst_28652 = (state_28656[(2)]);var state_28656__$1 = state_28656;var statearr_28658_28695 = state_28656__$1;(statearr_28658_28695[(2)] = inst_28652);
(statearr_28658_28695[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (20)))
{var inst_28627 = (state_28656[(7)]);var inst_28638 = (state_28656[(2)]);var inst_28639 = cljs.core.next.call(null,inst_28627);var inst_28613 = inst_28639;var inst_28614 = null;var inst_28615 = (0);var inst_28616 = (0);var state_28656__$1 = (function (){var statearr_28659 = state_28656;(statearr_28659[(8)] = inst_28638);
(statearr_28659[(9)] = inst_28614);
(statearr_28659[(10)] = inst_28616);
(statearr_28659[(11)] = inst_28613);
(statearr_28659[(12)] = inst_28615);
return statearr_28659;
})();var statearr_28660_28696 = state_28656__$1;(statearr_28660_28696[(2)] = null);
(statearr_28660_28696[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (1)))
{var state_28656__$1 = state_28656;var statearr_28661_28697 = state_28656__$1;(statearr_28661_28697[(2)] = null);
(statearr_28661_28697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (4)))
{var inst_28602 = (state_28656[(13)]);var inst_28602__$1 = (state_28656[(2)]);var inst_28603 = (inst_28602__$1 == null);var state_28656__$1 = (function (){var statearr_28665 = state_28656;(statearr_28665[(13)] = inst_28602__$1);
return statearr_28665;
})();if(cljs.core.truth_(inst_28603))
{var statearr_28666_28698 = state_28656__$1;(statearr_28666_28698[(1)] = (5));
} else
{var statearr_28667_28699 = state_28656__$1;(statearr_28667_28699[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (15)))
{var state_28656__$1 = state_28656;var statearr_28668_28700 = state_28656__$1;(statearr_28668_28700[(2)] = null);
(statearr_28668_28700[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (13)))
{var inst_28614 = (state_28656[(9)]);var inst_28616 = (state_28656[(10)]);var inst_28613 = (state_28656[(11)]);var inst_28615 = (state_28656[(12)]);var inst_28623 = (state_28656[(2)]);var inst_28624 = (inst_28616 + (1));var tmp28662 = inst_28614;var tmp28663 = inst_28613;var tmp28664 = inst_28615;var inst_28613__$1 = tmp28663;var inst_28614__$1 = tmp28662;var inst_28615__$1 = tmp28664;var inst_28616__$1 = inst_28624;var state_28656__$1 = (function (){var statearr_28669 = state_28656;(statearr_28669[(9)] = inst_28614__$1);
(statearr_28669[(10)] = inst_28616__$1);
(statearr_28669[(11)] = inst_28613__$1);
(statearr_28669[(12)] = inst_28615__$1);
(statearr_28669[(14)] = inst_28623);
return statearr_28669;
})();var statearr_28670_28701 = state_28656__$1;(statearr_28670_28701[(2)] = null);
(statearr_28670_28701[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (6)))
{var inst_28602 = (state_28656[(13)]);var inst_28607 = f.call(null,inst_28602);var inst_28612 = cljs.core.seq.call(null,inst_28607);var inst_28613 = inst_28612;var inst_28614 = null;var inst_28615 = (0);var inst_28616 = (0);var state_28656__$1 = (function (){var statearr_28671 = state_28656;(statearr_28671[(9)] = inst_28614);
(statearr_28671[(10)] = inst_28616);
(statearr_28671[(11)] = inst_28613);
(statearr_28671[(12)] = inst_28615);
return statearr_28671;
})();var statearr_28672_28702 = state_28656__$1;(statearr_28672_28702[(2)] = null);
(statearr_28672_28702[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (17)))
{var inst_28627 = (state_28656[(7)]);var inst_28631 = cljs.core.chunk_first.call(null,inst_28627);var inst_28632 = cljs.core.chunk_rest.call(null,inst_28627);var inst_28633 = cljs.core.count.call(null,inst_28631);var inst_28613 = inst_28632;var inst_28614 = inst_28631;var inst_28615 = inst_28633;var inst_28616 = (0);var state_28656__$1 = (function (){var statearr_28673 = state_28656;(statearr_28673[(9)] = inst_28614);
(statearr_28673[(10)] = inst_28616);
(statearr_28673[(11)] = inst_28613);
(statearr_28673[(12)] = inst_28615);
return statearr_28673;
})();var statearr_28674_28703 = state_28656__$1;(statearr_28674_28703[(2)] = null);
(statearr_28674_28703[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (3)))
{var inst_28654 = (state_28656[(2)]);var state_28656__$1 = state_28656;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28656__$1,inst_28654);
} else
{if((state_val_28657 === (12)))
{var inst_28647 = (state_28656[(2)]);var state_28656__$1 = state_28656;var statearr_28675_28704 = state_28656__$1;(statearr_28675_28704[(2)] = inst_28647);
(statearr_28675_28704[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (2)))
{var state_28656__$1 = state_28656;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28656__$1,(4),in$);
} else
{if((state_val_28657 === (19)))
{var inst_28642 = (state_28656[(2)]);var state_28656__$1 = state_28656;var statearr_28676_28705 = state_28656__$1;(statearr_28676_28705[(2)] = inst_28642);
(statearr_28676_28705[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (11)))
{var inst_28613 = (state_28656[(11)]);var inst_28627 = (state_28656[(7)]);var inst_28627__$1 = cljs.core.seq.call(null,inst_28613);var state_28656__$1 = (function (){var statearr_28677 = state_28656;(statearr_28677[(7)] = inst_28627__$1);
return statearr_28677;
})();if(inst_28627__$1)
{var statearr_28678_28706 = state_28656__$1;(statearr_28678_28706[(1)] = (14));
} else
{var statearr_28679_28707 = state_28656__$1;(statearr_28679_28707[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (9)))
{var inst_28649 = (state_28656[(2)]);var state_28656__$1 = (function (){var statearr_28680 = state_28656;(statearr_28680[(15)] = inst_28649);
return statearr_28680;
})();var statearr_28681_28708 = state_28656__$1;(statearr_28681_28708[(2)] = null);
(statearr_28681_28708[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (5)))
{var inst_28605 = cljs.core.async.close_BANG_.call(null,out);var state_28656__$1 = state_28656;var statearr_28682_28709 = state_28656__$1;(statearr_28682_28709[(2)] = inst_28605);
(statearr_28682_28709[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (14)))
{var inst_28627 = (state_28656[(7)]);var inst_28629 = cljs.core.chunked_seq_QMARK_.call(null,inst_28627);var state_28656__$1 = state_28656;if(inst_28629)
{var statearr_28683_28710 = state_28656__$1;(statearr_28683_28710[(1)] = (17));
} else
{var statearr_28684_28711 = state_28656__$1;(statearr_28684_28711[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (16)))
{var inst_28645 = (state_28656[(2)]);var state_28656__$1 = state_28656;var statearr_28685_28712 = state_28656__$1;(statearr_28685_28712[(2)] = inst_28645);
(statearr_28685_28712[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28657 === (10)))
{var inst_28614 = (state_28656[(9)]);var inst_28616 = (state_28656[(10)]);var inst_28621 = cljs.core._nth.call(null,inst_28614,inst_28616);var state_28656__$1 = state_28656;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28656__$1,(13),out,inst_28621);
} else
{if((state_val_28657 === (18)))
{var inst_28627 = (state_28656[(7)]);var inst_28636 = cljs.core.first.call(null,inst_28627);var state_28656__$1 = state_28656;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28656__$1,(20),out,inst_28636);
} else
{if((state_val_28657 === (8)))
{var inst_28616 = (state_28656[(10)]);var inst_28615 = (state_28656[(12)]);var inst_28618 = (inst_28616 < inst_28615);var inst_28619 = inst_28618;var state_28656__$1 = state_28656;if(cljs.core.truth_(inst_28619))
{var statearr_28686_28713 = state_28656__$1;(statearr_28686_28713[(1)] = (10));
} else
{var statearr_28687_28714 = state_28656__$1;(statearr_28687_28714[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28691[(0)] = state_machine__5679__auto__);
(statearr_28691[(1)] = (1));
return statearr_28691;
});
var state_machine__5679__auto____1 = (function (state_28656){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28656);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28692){if((e28692 instanceof Object))
{var ex__5682__auto__ = e28692;var statearr_28693_28715 = state_28656;(statearr_28693_28715[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28716 = state_28656;
state_28656 = G__28716;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28656){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_28694 = f__5694__auto__.call(null);(statearr_28694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_28694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___28797 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28797){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28797){
return (function (state_28776){var state_val_28777 = (state_28776[(1)]);if((state_val_28777 === (7)))
{var inst_28772 = (state_28776[(2)]);var state_28776__$1 = state_28776;var statearr_28778_28798 = state_28776__$1;(statearr_28778_28798[(2)] = inst_28772);
(statearr_28778_28798[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28777 === (1)))
{var state_28776__$1 = state_28776;var statearr_28779_28799 = state_28776__$1;(statearr_28779_28799[(2)] = null);
(statearr_28779_28799[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28777 === (4)))
{var inst_28759 = (state_28776[(7)]);var inst_28759__$1 = (state_28776[(2)]);var inst_28760 = (inst_28759__$1 == null);var state_28776__$1 = (function (){var statearr_28780 = state_28776;(statearr_28780[(7)] = inst_28759__$1);
return statearr_28780;
})();if(cljs.core.truth_(inst_28760))
{var statearr_28781_28800 = state_28776__$1;(statearr_28781_28800[(1)] = (5));
} else
{var statearr_28782_28801 = state_28776__$1;(statearr_28782_28801[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28777 === (6)))
{var inst_28759 = (state_28776[(7)]);var state_28776__$1 = state_28776;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28776__$1,(11),to,inst_28759);
} else
{if((state_val_28777 === (3)))
{var inst_28774 = (state_28776[(2)]);var state_28776__$1 = state_28776;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28776__$1,inst_28774);
} else
{if((state_val_28777 === (2)))
{var state_28776__$1 = state_28776;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28776__$1,(4),from);
} else
{if((state_val_28777 === (11)))
{var inst_28769 = (state_28776[(2)]);var state_28776__$1 = (function (){var statearr_28783 = state_28776;(statearr_28783[(8)] = inst_28769);
return statearr_28783;
})();var statearr_28784_28802 = state_28776__$1;(statearr_28784_28802[(2)] = null);
(statearr_28784_28802[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28777 === (9)))
{var state_28776__$1 = state_28776;var statearr_28785_28803 = state_28776__$1;(statearr_28785_28803[(2)] = null);
(statearr_28785_28803[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28777 === (5)))
{var state_28776__$1 = state_28776;if(cljs.core.truth_(close_QMARK_))
{var statearr_28786_28804 = state_28776__$1;(statearr_28786_28804[(1)] = (8));
} else
{var statearr_28787_28805 = state_28776__$1;(statearr_28787_28805[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28777 === (10)))
{var inst_28766 = (state_28776[(2)]);var state_28776__$1 = state_28776;var statearr_28788_28806 = state_28776__$1;(statearr_28788_28806[(2)] = inst_28766);
(statearr_28788_28806[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28777 === (8)))
{var inst_28763 = cljs.core.async.close_BANG_.call(null,to);var state_28776__$1 = state_28776;var statearr_28789_28807 = state_28776__$1;(statearr_28789_28807[(2)] = inst_28763);
(statearr_28789_28807[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___28797))
;return ((function (switch__5678__auto__,c__5693__auto___28797){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28793 = [null,null,null,null,null,null,null,null,null];(statearr_28793[(0)] = state_machine__5679__auto__);
(statearr_28793[(1)] = (1));
return statearr_28793;
});
var state_machine__5679__auto____1 = (function (state_28776){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28776);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28794){if((e28794 instanceof Object))
{var ex__5682__auto__ = e28794;var statearr_28795_28808 = state_28776;(statearr_28795_28808[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28776);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28809 = state_28776;
state_28776 = G__28809;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28776){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28797))
})();var state__5695__auto__ = (function (){var statearr_28796 = f__5694__auto__.call(null);(statearr_28796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28797);
return statearr_28796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28797))
);
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___28896 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28896,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28896,tc,fc){
return (function (state_28874){var state_val_28875 = (state_28874[(1)]);if((state_val_28875 === (7)))
{var inst_28870 = (state_28874[(2)]);var state_28874__$1 = state_28874;var statearr_28876_28897 = state_28874__$1;(statearr_28876_28897[(2)] = inst_28870);
(statearr_28876_28897[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (1)))
{var state_28874__$1 = state_28874;var statearr_28877_28898 = state_28874__$1;(statearr_28877_28898[(2)] = null);
(statearr_28877_28898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (4)))
{var inst_28855 = (state_28874[(7)]);var inst_28855__$1 = (state_28874[(2)]);var inst_28856 = (inst_28855__$1 == null);var state_28874__$1 = (function (){var statearr_28878 = state_28874;(statearr_28878[(7)] = inst_28855__$1);
return statearr_28878;
})();if(cljs.core.truth_(inst_28856))
{var statearr_28879_28899 = state_28874__$1;(statearr_28879_28899[(1)] = (5));
} else
{var statearr_28880_28900 = state_28874__$1;(statearr_28880_28900[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (6)))
{var inst_28855 = (state_28874[(7)]);var inst_28861 = p.call(null,inst_28855);var state_28874__$1 = state_28874;if(cljs.core.truth_(inst_28861))
{var statearr_28881_28901 = state_28874__$1;(statearr_28881_28901[(1)] = (9));
} else
{var statearr_28882_28902 = state_28874__$1;(statearr_28882_28902[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (3)))
{var inst_28872 = (state_28874[(2)]);var state_28874__$1 = state_28874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28874__$1,inst_28872);
} else
{if((state_val_28875 === (2)))
{var state_28874__$1 = state_28874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28874__$1,(4),ch);
} else
{if((state_val_28875 === (11)))
{var inst_28855 = (state_28874[(7)]);var inst_28865 = (state_28874[(2)]);var state_28874__$1 = state_28874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28874__$1,(8),inst_28865,inst_28855);
} else
{if((state_val_28875 === (9)))
{var state_28874__$1 = state_28874;var statearr_28883_28903 = state_28874__$1;(statearr_28883_28903[(2)] = tc);
(statearr_28883_28903[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (5)))
{var inst_28858 = cljs.core.async.close_BANG_.call(null,tc);var inst_28859 = cljs.core.async.close_BANG_.call(null,fc);var state_28874__$1 = (function (){var statearr_28884 = state_28874;(statearr_28884[(8)] = inst_28858);
return statearr_28884;
})();var statearr_28885_28904 = state_28874__$1;(statearr_28885_28904[(2)] = inst_28859);
(statearr_28885_28904[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (10)))
{var state_28874__$1 = state_28874;var statearr_28886_28905 = state_28874__$1;(statearr_28886_28905[(2)] = fc);
(statearr_28886_28905[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (8)))
{var inst_28867 = (state_28874[(2)]);var state_28874__$1 = (function (){var statearr_28887 = state_28874;(statearr_28887[(9)] = inst_28867);
return statearr_28887;
})();var statearr_28888_28906 = state_28874__$1;(statearr_28888_28906[(2)] = null);
(statearr_28888_28906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___28896,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___28896,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28892 = [null,null,null,null,null,null,null,null,null,null];(statearr_28892[(0)] = state_machine__5679__auto__);
(statearr_28892[(1)] = (1));
return statearr_28892;
});
var state_machine__5679__auto____1 = (function (state_28874){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28874);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28893){if((e28893 instanceof Object))
{var ex__5682__auto__ = e28893;var statearr_28894_28907 = state_28874;(statearr_28894_28907[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28874);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28908 = state_28874;
state_28874 = G__28908;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28874){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28896,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_28895 = f__5694__auto__.call(null);(statearr_28895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28896);
return statearr_28895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28896,tc,fc))
);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_28955){var state_val_28956 = (state_28955[(1)]);if((state_val_28956 === (7)))
{var inst_28951 = (state_28955[(2)]);var state_28955__$1 = state_28955;var statearr_28957_28973 = state_28955__$1;(statearr_28957_28973[(2)] = inst_28951);
(statearr_28957_28973[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28956 === (6)))
{var inst_28941 = (state_28955[(7)]);var inst_28944 = (state_28955[(8)]);var inst_28948 = f.call(null,inst_28941,inst_28944);var inst_28941__$1 = inst_28948;var state_28955__$1 = (function (){var statearr_28958 = state_28955;(statearr_28958[(7)] = inst_28941__$1);
return statearr_28958;
})();var statearr_28959_28974 = state_28955__$1;(statearr_28959_28974[(2)] = null);
(statearr_28959_28974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28956 === (5)))
{var inst_28941 = (state_28955[(7)]);var state_28955__$1 = state_28955;var statearr_28960_28975 = state_28955__$1;(statearr_28960_28975[(2)] = inst_28941);
(statearr_28960_28975[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28956 === (4)))
{var inst_28944 = (state_28955[(8)]);var inst_28944__$1 = (state_28955[(2)]);var inst_28945 = (inst_28944__$1 == null);var state_28955__$1 = (function (){var statearr_28961 = state_28955;(statearr_28961[(8)] = inst_28944__$1);
return statearr_28961;
})();if(cljs.core.truth_(inst_28945))
{var statearr_28962_28976 = state_28955__$1;(statearr_28962_28976[(1)] = (5));
} else
{var statearr_28963_28977 = state_28955__$1;(statearr_28963_28977[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28956 === (3)))
{var inst_28953 = (state_28955[(2)]);var state_28955__$1 = state_28955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28955__$1,inst_28953);
} else
{if((state_val_28956 === (2)))
{var state_28955__$1 = state_28955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28955__$1,(4),ch);
} else
{if((state_val_28956 === (1)))
{var inst_28941 = init;var state_28955__$1 = (function (){var statearr_28964 = state_28955;(statearr_28964[(7)] = inst_28941);
return statearr_28964;
})();var statearr_28965_28978 = state_28955__$1;(statearr_28965_28978[(2)] = null);
(statearr_28965_28978[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28969 = [null,null,null,null,null,null,null,null,null];(statearr_28969[(0)] = state_machine__5679__auto__);
(statearr_28969[(1)] = (1));
return statearr_28969;
});
var state_machine__5679__auto____1 = (function (state_28955){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28955);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28970){if((e28970 instanceof Object))
{var ex__5682__auto__ = e28970;var statearr_28971_28979 = state_28955;(statearr_28971_28979[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28955);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28980 = state_28955;
state_28955 = G__28980;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28955){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_28972 = f__5694__auto__.call(null);(statearr_28972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_28972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_29042){var state_val_29043 = (state_29042[(1)]);if((state_val_29043 === (7)))
{var inst_29023 = (state_29042[(7)]);var inst_29028 = (state_29042[(2)]);var inst_29029 = cljs.core.next.call(null,inst_29023);var inst_29023__$1 = inst_29029;var state_29042__$1 = (function (){var statearr_29044 = state_29042;(statearr_29044[(7)] = inst_29023__$1);
(statearr_29044[(8)] = inst_29028);
return statearr_29044;
})();var statearr_29045_29063 = state_29042__$1;(statearr_29045_29063[(2)] = null);
(statearr_29045_29063[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29043 === (1)))
{var inst_29022 = cljs.core.seq.call(null,coll);var inst_29023 = inst_29022;var state_29042__$1 = (function (){var statearr_29046 = state_29042;(statearr_29046[(7)] = inst_29023);
return statearr_29046;
})();var statearr_29047_29064 = state_29042__$1;(statearr_29047_29064[(2)] = null);
(statearr_29047_29064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29043 === (4)))
{var inst_29023 = (state_29042[(7)]);var inst_29026 = cljs.core.first.call(null,inst_29023);var state_29042__$1 = state_29042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29042__$1,(7),ch,inst_29026);
} else
{if((state_val_29043 === (6)))
{var inst_29038 = (state_29042[(2)]);var state_29042__$1 = state_29042;var statearr_29048_29065 = state_29042__$1;(statearr_29048_29065[(2)] = inst_29038);
(statearr_29048_29065[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29043 === (3)))
{var inst_29040 = (state_29042[(2)]);var state_29042__$1 = state_29042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29042__$1,inst_29040);
} else
{if((state_val_29043 === (2)))
{var inst_29023 = (state_29042[(7)]);var state_29042__$1 = state_29042;if(cljs.core.truth_(inst_29023))
{var statearr_29049_29066 = state_29042__$1;(statearr_29049_29066[(1)] = (4));
} else
{var statearr_29050_29067 = state_29042__$1;(statearr_29050_29067[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29043 === (9)))
{var state_29042__$1 = state_29042;var statearr_29051_29068 = state_29042__$1;(statearr_29051_29068[(2)] = null);
(statearr_29051_29068[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29043 === (5)))
{var state_29042__$1 = state_29042;if(cljs.core.truth_(close_QMARK_))
{var statearr_29052_29069 = state_29042__$1;(statearr_29052_29069[(1)] = (8));
} else
{var statearr_29053_29070 = state_29042__$1;(statearr_29053_29070[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29043 === (10)))
{var inst_29036 = (state_29042[(2)]);var state_29042__$1 = state_29042;var statearr_29054_29071 = state_29042__$1;(statearr_29054_29071[(2)] = inst_29036);
(statearr_29054_29071[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29043 === (8)))
{var inst_29033 = cljs.core.async.close_BANG_.call(null,ch);var state_29042__$1 = state_29042;var statearr_29055_29072 = state_29042__$1;(statearr_29055_29072[(2)] = inst_29033);
(statearr_29055_29072[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29059 = [null,null,null,null,null,null,null,null,null];(statearr_29059[(0)] = state_machine__5679__auto__);
(statearr_29059[(1)] = (1));
return statearr_29059;
});
var state_machine__5679__auto____1 = (function (state_29042){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29042);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29060){if((e29060 instanceof Object))
{var ex__5682__auto__ = e29060;var statearr_29061_29073 = state_29042;(statearr_29061_29073[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29074 = state_29042;
state_29042 = G__29074;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29042){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_29062 = f__5694__auto__.call(null);(statearr_29062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_29062;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj29076 = {};return obj29076;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj29078 = {};return obj29078;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t29302 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29302 = (function (cs,ch,mult,meta29303){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29303 = meta29303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29302.cljs$lang$type = true;
cljs.core.async.t29302.cljs$lang$ctorStr = "cljs.core.async/t29302";
cljs.core.async.t29302.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t29302");
});})(cs))
;
cljs.core.async.t29302.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t29302.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t29302.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t29302.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t29302.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29302.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t29302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29304){var self__ = this;
var _29304__$1 = this;return self__.meta29303;
});})(cs))
;
cljs.core.async.t29302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29304,meta29303__$1){var self__ = this;
var _29304__$1 = this;return (new cljs.core.async.t29302(self__.cs,self__.ch,self__.mult,meta29303__$1));
});})(cs))
;
cljs.core.async.__GT_t29302 = ((function (cs){
return (function __GT_t29302(cs__$1,ch__$1,mult__$1,meta29303){return (new cljs.core.async.t29302(cs__$1,ch__$1,mult__$1,meta29303));
});})(cs))
;
}
return (new cljs.core.async.t29302(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___29525 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29525,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29525,cs,m,dchan,dctr,done){
return (function (state_29439){var state_val_29440 = (state_29439[(1)]);if((state_val_29440 === (7)))
{var inst_29435 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29441_29526 = state_29439__$1;(statearr_29441_29526[(2)] = inst_29435);
(statearr_29441_29526[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (20)))
{var inst_29336 = (state_29439[(7)]);var inst_29346 = cljs.core.first.call(null,inst_29336);var inst_29347 = cljs.core.nth.call(null,inst_29346,(0),null);var inst_29348 = cljs.core.nth.call(null,inst_29346,(1),null);var state_29439__$1 = (function (){var statearr_29442 = state_29439;(statearr_29442[(8)] = inst_29347);
return statearr_29442;
})();if(cljs.core.truth_(inst_29348))
{var statearr_29443_29527 = state_29439__$1;(statearr_29443_29527[(1)] = (22));
} else
{var statearr_29444_29528 = state_29439__$1;(statearr_29444_29528[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (27)))
{var inst_29378 = (state_29439[(9)]);var inst_29376 = (state_29439[(10)]);var inst_29383 = cljs.core._nth.call(null,inst_29376,inst_29378);var state_29439__$1 = (function (){var statearr_29445 = state_29439;(statearr_29445[(11)] = inst_29383);
return statearr_29445;
})();var statearr_29446_29529 = state_29439__$1;(statearr_29446_29529[(2)] = null);
(statearr_29446_29529[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (1)))
{var state_29439__$1 = state_29439;var statearr_29447_29530 = state_29439__$1;(statearr_29447_29530[(2)] = null);
(statearr_29447_29530[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (24)))
{var inst_29336 = (state_29439[(7)]);var inst_29353 = (state_29439[(2)]);var inst_29354 = cljs.core.next.call(null,inst_29336);var inst_29316 = inst_29354;var inst_29317 = null;var inst_29318 = (0);var inst_29319 = (0);var state_29439__$1 = (function (){var statearr_29448 = state_29439;(statearr_29448[(12)] = inst_29318);
(statearr_29448[(13)] = inst_29353);
(statearr_29448[(14)] = inst_29316);
(statearr_29448[(15)] = inst_29319);
(statearr_29448[(16)] = inst_29317);
return statearr_29448;
})();var statearr_29449_29531 = state_29439__$1;(statearr_29449_29531[(2)] = null);
(statearr_29449_29531[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (39)))
{var inst_29396 = (state_29439[(17)]);var inst_29414 = (state_29439[(2)]);var inst_29415 = cljs.core.next.call(null,inst_29396);var inst_29375 = inst_29415;var inst_29376 = null;var inst_29377 = (0);var inst_29378 = (0);var state_29439__$1 = (function (){var statearr_29453 = state_29439;(statearr_29453[(18)] = inst_29377);
(statearr_29453[(19)] = inst_29375);
(statearr_29453[(20)] = inst_29414);
(statearr_29453[(9)] = inst_29378);
(statearr_29453[(10)] = inst_29376);
return statearr_29453;
})();var statearr_29454_29532 = state_29439__$1;(statearr_29454_29532[(2)] = null);
(statearr_29454_29532[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (4)))
{var inst_29307 = (state_29439[(21)]);var inst_29307__$1 = (state_29439[(2)]);var inst_29308 = (inst_29307__$1 == null);var state_29439__$1 = (function (){var statearr_29455 = state_29439;(statearr_29455[(21)] = inst_29307__$1);
return statearr_29455;
})();if(cljs.core.truth_(inst_29308))
{var statearr_29456_29533 = state_29439__$1;(statearr_29456_29533[(1)] = (5));
} else
{var statearr_29457_29534 = state_29439__$1;(statearr_29457_29534[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (15)))
{var inst_29318 = (state_29439[(12)]);var inst_29316 = (state_29439[(14)]);var inst_29319 = (state_29439[(15)]);var inst_29317 = (state_29439[(16)]);var inst_29332 = (state_29439[(2)]);var inst_29333 = (inst_29319 + (1));var tmp29450 = inst_29318;var tmp29451 = inst_29316;var tmp29452 = inst_29317;var inst_29316__$1 = tmp29451;var inst_29317__$1 = tmp29452;var inst_29318__$1 = tmp29450;var inst_29319__$1 = inst_29333;var state_29439__$1 = (function (){var statearr_29458 = state_29439;(statearr_29458[(22)] = inst_29332);
(statearr_29458[(12)] = inst_29318__$1);
(statearr_29458[(14)] = inst_29316__$1);
(statearr_29458[(15)] = inst_29319__$1);
(statearr_29458[(16)] = inst_29317__$1);
return statearr_29458;
})();var statearr_29459_29535 = state_29439__$1;(statearr_29459_29535[(2)] = null);
(statearr_29459_29535[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (21)))
{var inst_29357 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29460_29536 = state_29439__$1;(statearr_29460_29536[(2)] = inst_29357);
(statearr_29460_29536[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (31)))
{var inst_29383 = (state_29439[(11)]);var inst_29384 = (state_29439[(2)]);var inst_29385 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29386 = cljs.core.async.untap_STAR_.call(null,m,inst_29383);var state_29439__$1 = (function (){var statearr_29461 = state_29439;(statearr_29461[(23)] = inst_29384);
(statearr_29461[(24)] = inst_29385);
return statearr_29461;
})();var statearr_29462_29537 = state_29439__$1;(statearr_29462_29537[(2)] = inst_29386);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (32)))
{var inst_29383 = (state_29439[(11)]);var inst_29307 = (state_29439[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29439,(31),Object,null,(30));var inst_29390 = cljs.core.async.put_BANG_.call(null,inst_29383,inst_29307,done);var state_29439__$1 = state_29439;var statearr_29463_29538 = state_29439__$1;(statearr_29463_29538[(2)] = inst_29390);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (40)))
{var inst_29405 = (state_29439[(25)]);var inst_29406 = (state_29439[(2)]);var inst_29407 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29408 = cljs.core.async.untap_STAR_.call(null,m,inst_29405);var state_29439__$1 = (function (){var statearr_29464 = state_29439;(statearr_29464[(26)] = inst_29407);
(statearr_29464[(27)] = inst_29406);
return statearr_29464;
})();var statearr_29465_29539 = state_29439__$1;(statearr_29465_29539[(2)] = inst_29408);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (33)))
{var inst_29396 = (state_29439[(17)]);var inst_29398 = cljs.core.chunked_seq_QMARK_.call(null,inst_29396);var state_29439__$1 = state_29439;if(inst_29398)
{var statearr_29466_29540 = state_29439__$1;(statearr_29466_29540[(1)] = (36));
} else
{var statearr_29467_29541 = state_29439__$1;(statearr_29467_29541[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (13)))
{var inst_29326 = (state_29439[(28)]);var inst_29329 = cljs.core.async.close_BANG_.call(null,inst_29326);var state_29439__$1 = state_29439;var statearr_29468_29542 = state_29439__$1;(statearr_29468_29542[(2)] = inst_29329);
(statearr_29468_29542[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (22)))
{var inst_29347 = (state_29439[(8)]);var inst_29350 = cljs.core.async.close_BANG_.call(null,inst_29347);var state_29439__$1 = state_29439;var statearr_29469_29543 = state_29439__$1;(statearr_29469_29543[(2)] = inst_29350);
(statearr_29469_29543[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (36)))
{var inst_29396 = (state_29439[(17)]);var inst_29400 = cljs.core.chunk_first.call(null,inst_29396);var inst_29401 = cljs.core.chunk_rest.call(null,inst_29396);var inst_29402 = cljs.core.count.call(null,inst_29400);var inst_29375 = inst_29401;var inst_29376 = inst_29400;var inst_29377 = inst_29402;var inst_29378 = (0);var state_29439__$1 = (function (){var statearr_29470 = state_29439;(statearr_29470[(18)] = inst_29377);
(statearr_29470[(19)] = inst_29375);
(statearr_29470[(9)] = inst_29378);
(statearr_29470[(10)] = inst_29376);
return statearr_29470;
})();var statearr_29471_29544 = state_29439__$1;(statearr_29471_29544[(2)] = null);
(statearr_29471_29544[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (41)))
{var inst_29307 = (state_29439[(21)]);var inst_29405 = (state_29439[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29439,(40),Object,null,(39));var inst_29412 = cljs.core.async.put_BANG_.call(null,inst_29405,inst_29307,done);var state_29439__$1 = state_29439;var statearr_29472_29545 = state_29439__$1;(statearr_29472_29545[(2)] = inst_29412);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (43)))
{var state_29439__$1 = state_29439;var statearr_29473_29546 = state_29439__$1;(statearr_29473_29546[(2)] = null);
(statearr_29473_29546[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (29)))
{var inst_29423 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29474_29547 = state_29439__$1;(statearr_29474_29547[(2)] = inst_29423);
(statearr_29474_29547[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (44)))
{var inst_29432 = (state_29439[(2)]);var state_29439__$1 = (function (){var statearr_29475 = state_29439;(statearr_29475[(29)] = inst_29432);
return statearr_29475;
})();var statearr_29476_29548 = state_29439__$1;(statearr_29476_29548[(2)] = null);
(statearr_29476_29548[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (6)))
{var inst_29367 = (state_29439[(30)]);var inst_29366 = cljs.core.deref.call(null,cs);var inst_29367__$1 = cljs.core.keys.call(null,inst_29366);var inst_29368 = cljs.core.count.call(null,inst_29367__$1);var inst_29369 = cljs.core.reset_BANG_.call(null,dctr,inst_29368);var inst_29374 = cljs.core.seq.call(null,inst_29367__$1);var inst_29375 = inst_29374;var inst_29376 = null;var inst_29377 = (0);var inst_29378 = (0);var state_29439__$1 = (function (){var statearr_29477 = state_29439;(statearr_29477[(18)] = inst_29377);
(statearr_29477[(19)] = inst_29375);
(statearr_29477[(31)] = inst_29369);
(statearr_29477[(9)] = inst_29378);
(statearr_29477[(30)] = inst_29367__$1);
(statearr_29477[(10)] = inst_29376);
return statearr_29477;
})();var statearr_29478_29549 = state_29439__$1;(statearr_29478_29549[(2)] = null);
(statearr_29478_29549[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (28)))
{var inst_29375 = (state_29439[(19)]);var inst_29396 = (state_29439[(17)]);var inst_29396__$1 = cljs.core.seq.call(null,inst_29375);var state_29439__$1 = (function (){var statearr_29479 = state_29439;(statearr_29479[(17)] = inst_29396__$1);
return statearr_29479;
})();if(inst_29396__$1)
{var statearr_29480_29550 = state_29439__$1;(statearr_29480_29550[(1)] = (33));
} else
{var statearr_29481_29551 = state_29439__$1;(statearr_29481_29551[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (25)))
{var inst_29377 = (state_29439[(18)]);var inst_29378 = (state_29439[(9)]);var inst_29380 = (inst_29378 < inst_29377);var inst_29381 = inst_29380;var state_29439__$1 = state_29439;if(cljs.core.truth_(inst_29381))
{var statearr_29482_29552 = state_29439__$1;(statearr_29482_29552[(1)] = (27));
} else
{var statearr_29483_29553 = state_29439__$1;(statearr_29483_29553[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (34)))
{var state_29439__$1 = state_29439;var statearr_29484_29554 = state_29439__$1;(statearr_29484_29554[(2)] = null);
(statearr_29484_29554[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (17)))
{var state_29439__$1 = state_29439;var statearr_29485_29555 = state_29439__$1;(statearr_29485_29555[(2)] = null);
(statearr_29485_29555[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (3)))
{var inst_29437 = (state_29439[(2)]);var state_29439__$1 = state_29439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29439__$1,inst_29437);
} else
{if((state_val_29440 === (12)))
{var inst_29362 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29486_29556 = state_29439__$1;(statearr_29486_29556[(2)] = inst_29362);
(statearr_29486_29556[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (2)))
{var state_29439__$1 = state_29439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(4),ch);
} else
{if((state_val_29440 === (23)))
{var state_29439__$1 = state_29439;var statearr_29487_29557 = state_29439__$1;(statearr_29487_29557[(2)] = null);
(statearr_29487_29557[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (35)))
{var inst_29421 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29488_29558 = state_29439__$1;(statearr_29488_29558[(2)] = inst_29421);
(statearr_29488_29558[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (19)))
{var inst_29336 = (state_29439[(7)]);var inst_29340 = cljs.core.chunk_first.call(null,inst_29336);var inst_29341 = cljs.core.chunk_rest.call(null,inst_29336);var inst_29342 = cljs.core.count.call(null,inst_29340);var inst_29316 = inst_29341;var inst_29317 = inst_29340;var inst_29318 = inst_29342;var inst_29319 = (0);var state_29439__$1 = (function (){var statearr_29489 = state_29439;(statearr_29489[(12)] = inst_29318);
(statearr_29489[(14)] = inst_29316);
(statearr_29489[(15)] = inst_29319);
(statearr_29489[(16)] = inst_29317);
return statearr_29489;
})();var statearr_29490_29559 = state_29439__$1;(statearr_29490_29559[(2)] = null);
(statearr_29490_29559[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (11)))
{var inst_29336 = (state_29439[(7)]);var inst_29316 = (state_29439[(14)]);var inst_29336__$1 = cljs.core.seq.call(null,inst_29316);var state_29439__$1 = (function (){var statearr_29491 = state_29439;(statearr_29491[(7)] = inst_29336__$1);
return statearr_29491;
})();if(inst_29336__$1)
{var statearr_29492_29560 = state_29439__$1;(statearr_29492_29560[(1)] = (16));
} else
{var statearr_29493_29561 = state_29439__$1;(statearr_29493_29561[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (9)))
{var inst_29364 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29494_29562 = state_29439__$1;(statearr_29494_29562[(2)] = inst_29364);
(statearr_29494_29562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (5)))
{var inst_29314 = cljs.core.deref.call(null,cs);var inst_29315 = cljs.core.seq.call(null,inst_29314);var inst_29316 = inst_29315;var inst_29317 = null;var inst_29318 = (0);var inst_29319 = (0);var state_29439__$1 = (function (){var statearr_29495 = state_29439;(statearr_29495[(12)] = inst_29318);
(statearr_29495[(14)] = inst_29316);
(statearr_29495[(15)] = inst_29319);
(statearr_29495[(16)] = inst_29317);
return statearr_29495;
})();var statearr_29496_29563 = state_29439__$1;(statearr_29496_29563[(2)] = null);
(statearr_29496_29563[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (14)))
{var state_29439__$1 = state_29439;var statearr_29497_29564 = state_29439__$1;(statearr_29497_29564[(2)] = null);
(statearr_29497_29564[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (45)))
{var inst_29429 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29498_29565 = state_29439__$1;(statearr_29498_29565[(2)] = inst_29429);
(statearr_29498_29565[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (26)))
{var inst_29367 = (state_29439[(30)]);var inst_29425 = (state_29439[(2)]);var inst_29426 = cljs.core.seq.call(null,inst_29367);var state_29439__$1 = (function (){var statearr_29499 = state_29439;(statearr_29499[(32)] = inst_29425);
return statearr_29499;
})();if(inst_29426)
{var statearr_29500_29566 = state_29439__$1;(statearr_29500_29566[(1)] = (42));
} else
{var statearr_29501_29567 = state_29439__$1;(statearr_29501_29567[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (16)))
{var inst_29336 = (state_29439[(7)]);var inst_29338 = cljs.core.chunked_seq_QMARK_.call(null,inst_29336);var state_29439__$1 = state_29439;if(inst_29338)
{var statearr_29505_29568 = state_29439__$1;(statearr_29505_29568[(1)] = (19));
} else
{var statearr_29506_29569 = state_29439__$1;(statearr_29506_29569[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (38)))
{var inst_29418 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29507_29570 = state_29439__$1;(statearr_29507_29570[(2)] = inst_29418);
(statearr_29507_29570[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (30)))
{var inst_29377 = (state_29439[(18)]);var inst_29375 = (state_29439[(19)]);var inst_29378 = (state_29439[(9)]);var inst_29376 = (state_29439[(10)]);var inst_29392 = (state_29439[(2)]);var inst_29393 = (inst_29378 + (1));var tmp29502 = inst_29377;var tmp29503 = inst_29375;var tmp29504 = inst_29376;var inst_29375__$1 = tmp29503;var inst_29376__$1 = tmp29504;var inst_29377__$1 = tmp29502;var inst_29378__$1 = inst_29393;var state_29439__$1 = (function (){var statearr_29508 = state_29439;(statearr_29508[(18)] = inst_29377__$1);
(statearr_29508[(19)] = inst_29375__$1);
(statearr_29508[(9)] = inst_29378__$1);
(statearr_29508[(33)] = inst_29392);
(statearr_29508[(10)] = inst_29376__$1);
return statearr_29508;
})();var statearr_29509_29571 = state_29439__$1;(statearr_29509_29571[(2)] = null);
(statearr_29509_29571[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (10)))
{var inst_29319 = (state_29439[(15)]);var inst_29317 = (state_29439[(16)]);var inst_29325 = cljs.core._nth.call(null,inst_29317,inst_29319);var inst_29326 = cljs.core.nth.call(null,inst_29325,(0),null);var inst_29327 = cljs.core.nth.call(null,inst_29325,(1),null);var state_29439__$1 = (function (){var statearr_29510 = state_29439;(statearr_29510[(28)] = inst_29326);
return statearr_29510;
})();if(cljs.core.truth_(inst_29327))
{var statearr_29511_29572 = state_29439__$1;(statearr_29511_29572[(1)] = (13));
} else
{var statearr_29512_29573 = state_29439__$1;(statearr_29512_29573[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (18)))
{var inst_29360 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29513_29574 = state_29439__$1;(statearr_29513_29574[(2)] = inst_29360);
(statearr_29513_29574[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (42)))
{var state_29439__$1 = state_29439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(45),dchan);
} else
{if((state_val_29440 === (37)))
{var inst_29396 = (state_29439[(17)]);var inst_29405 = cljs.core.first.call(null,inst_29396);var state_29439__$1 = (function (){var statearr_29514 = state_29439;(statearr_29514[(25)] = inst_29405);
return statearr_29514;
})();var statearr_29515_29575 = state_29439__$1;(statearr_29515_29575[(2)] = null);
(statearr_29515_29575[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (8)))
{var inst_29318 = (state_29439[(12)]);var inst_29319 = (state_29439[(15)]);var inst_29321 = (inst_29319 < inst_29318);var inst_29322 = inst_29321;var state_29439__$1 = state_29439;if(cljs.core.truth_(inst_29322))
{var statearr_29516_29576 = state_29439__$1;(statearr_29516_29576[(1)] = (10));
} else
{var statearr_29517_29577 = state_29439__$1;(statearr_29517_29577[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___29525,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___29525,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29521[(0)] = state_machine__5679__auto__);
(statearr_29521[(1)] = (1));
return statearr_29521;
});
var state_machine__5679__auto____1 = (function (state_29439){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29439);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29522){if((e29522 instanceof Object))
{var ex__5682__auto__ = e29522;var statearr_29523_29578 = state_29439;(statearr_29523_29578[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29579 = state_29439;
state_29439 = G__29579;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29439){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29525,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_29524 = f__5694__auto__.call(null);(statearr_29524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29525);
return statearr_29524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29525,cs,m,dchan,dctr,done))
);
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj29581 = {};return obj29581;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t29691 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29691 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29692){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29692 = meta29692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29691.cljs$lang$type = true;
cljs.core.async.t29691.cljs$lang$ctorStr = "cljs.core.async/t29691";
cljs.core.async.t29691.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t29691");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29691.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t29691.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29691.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29691.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29691.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29691.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29691.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29691.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29693){var self__ = this;
var _29693__$1 = this;return self__.meta29692;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29693,meta29692__$1){var self__ = this;
var _29693__$1 = this;return (new cljs.core.async.t29691(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29692__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t29691 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29691(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29692){return (new cljs.core.async.t29691(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29692));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t29691(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___29800 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29758){var state_val_29759 = (state_29758[(1)]);if((state_val_29759 === (7)))
{var inst_29707 = (state_29758[(7)]);var inst_29712 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29707);var state_29758__$1 = state_29758;var statearr_29760_29801 = state_29758__$1;(statearr_29760_29801[(2)] = inst_29712);
(statearr_29760_29801[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (20)))
{var inst_29722 = (state_29758[(8)]);var state_29758__$1 = state_29758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29758__$1,(23),out,inst_29722);
} else
{if((state_val_29759 === (1)))
{var inst_29697 = (state_29758[(9)]);var inst_29697__$1 = calc_state.call(null);var inst_29698 = cljs.core.seq_QMARK_.call(null,inst_29697__$1);var state_29758__$1 = (function (){var statearr_29761 = state_29758;(statearr_29761[(9)] = inst_29697__$1);
return statearr_29761;
})();if(inst_29698)
{var statearr_29762_29802 = state_29758__$1;(statearr_29762_29802[(1)] = (2));
} else
{var statearr_29763_29803 = state_29758__$1;(statearr_29763_29803[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (4)))
{var inst_29697 = (state_29758[(9)]);var inst_29703 = (state_29758[(2)]);var inst_29704 = cljs.core.get.call(null,inst_29703,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29705 = cljs.core.get.call(null,inst_29703,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29706 = cljs.core.get.call(null,inst_29703,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_29707 = inst_29697;var state_29758__$1 = (function (){var statearr_29764 = state_29758;(statearr_29764[(10)] = inst_29706);
(statearr_29764[(11)] = inst_29704);
(statearr_29764[(12)] = inst_29705);
(statearr_29764[(7)] = inst_29707);
return statearr_29764;
})();var statearr_29765_29804 = state_29758__$1;(statearr_29765_29804[(2)] = null);
(statearr_29765_29804[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (15)))
{var state_29758__$1 = state_29758;var statearr_29766_29805 = state_29758__$1;(statearr_29766_29805[(2)] = null);
(statearr_29766_29805[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (21)))
{var state_29758__$1 = state_29758;var statearr_29767_29806 = state_29758__$1;(statearr_29767_29806[(2)] = null);
(statearr_29767_29806[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (13)))
{var inst_29754 = (state_29758[(2)]);var state_29758__$1 = state_29758;var statearr_29768_29807 = state_29758__$1;(statearr_29768_29807[(2)] = inst_29754);
(statearr_29768_29807[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (22)))
{var inst_29715 = (state_29758[(13)]);var inst_29751 = (state_29758[(2)]);var inst_29707 = inst_29715;var state_29758__$1 = (function (){var statearr_29769 = state_29758;(statearr_29769[(14)] = inst_29751);
(statearr_29769[(7)] = inst_29707);
return statearr_29769;
})();var statearr_29770_29808 = state_29758__$1;(statearr_29770_29808[(2)] = null);
(statearr_29770_29808[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (6)))
{var inst_29756 = (state_29758[(2)]);var state_29758__$1 = state_29758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29758__$1,inst_29756);
} else
{if((state_val_29759 === (17)))
{var inst_29737 = (state_29758[(15)]);var state_29758__$1 = state_29758;var statearr_29771_29809 = state_29758__$1;(statearr_29771_29809[(2)] = inst_29737);
(statearr_29771_29809[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (3)))
{var inst_29697 = (state_29758[(9)]);var state_29758__$1 = state_29758;var statearr_29772_29810 = state_29758__$1;(statearr_29772_29810[(2)] = inst_29697);
(statearr_29772_29810[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (12)))
{var inst_29723 = (state_29758[(16)]);var inst_29737 = (state_29758[(15)]);var inst_29718 = (state_29758[(17)]);var inst_29737__$1 = inst_29718.call(null,inst_29723);var state_29758__$1 = (function (){var statearr_29773 = state_29758;(statearr_29773[(15)] = inst_29737__$1);
return statearr_29773;
})();if(cljs.core.truth_(inst_29737__$1))
{var statearr_29774_29811 = state_29758__$1;(statearr_29774_29811[(1)] = (17));
} else
{var statearr_29775_29812 = state_29758__$1;(statearr_29775_29812[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (2)))
{var inst_29697 = (state_29758[(9)]);var inst_29700 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29697);var state_29758__$1 = state_29758;var statearr_29776_29813 = state_29758__$1;(statearr_29776_29813[(2)] = inst_29700);
(statearr_29776_29813[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (23)))
{var inst_29748 = (state_29758[(2)]);var state_29758__$1 = state_29758;var statearr_29777_29814 = state_29758__$1;(statearr_29777_29814[(2)] = inst_29748);
(statearr_29777_29814[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (19)))
{var inst_29745 = (state_29758[(2)]);var state_29758__$1 = state_29758;if(cljs.core.truth_(inst_29745))
{var statearr_29778_29815 = state_29758__$1;(statearr_29778_29815[(1)] = (20));
} else
{var statearr_29779_29816 = state_29758__$1;(statearr_29779_29816[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (11)))
{var inst_29722 = (state_29758[(8)]);var inst_29728 = (inst_29722 == null);var state_29758__$1 = state_29758;if(cljs.core.truth_(inst_29728))
{var statearr_29780_29817 = state_29758__$1;(statearr_29780_29817[(1)] = (14));
} else
{var statearr_29781_29818 = state_29758__$1;(statearr_29781_29818[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (9)))
{var inst_29715 = (state_29758[(13)]);var inst_29715__$1 = (state_29758[(2)]);var inst_29716 = cljs.core.get.call(null,inst_29715__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29717 = cljs.core.get.call(null,inst_29715__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29718 = cljs.core.get.call(null,inst_29715__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_29758__$1 = (function (){var statearr_29782 = state_29758;(statearr_29782[(18)] = inst_29717);
(statearr_29782[(17)] = inst_29718);
(statearr_29782[(13)] = inst_29715__$1);
return statearr_29782;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29758__$1,(10),inst_29716);
} else
{if((state_val_29759 === (5)))
{var inst_29707 = (state_29758[(7)]);var inst_29710 = cljs.core.seq_QMARK_.call(null,inst_29707);var state_29758__$1 = state_29758;if(inst_29710)
{var statearr_29783_29819 = state_29758__$1;(statearr_29783_29819[(1)] = (7));
} else
{var statearr_29784_29820 = state_29758__$1;(statearr_29784_29820[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (14)))
{var inst_29723 = (state_29758[(16)]);var inst_29730 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29723);var state_29758__$1 = state_29758;var statearr_29785_29821 = state_29758__$1;(statearr_29785_29821[(2)] = inst_29730);
(statearr_29785_29821[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (16)))
{var inst_29733 = (state_29758[(2)]);var inst_29734 = calc_state.call(null);var inst_29707 = inst_29734;var state_29758__$1 = (function (){var statearr_29786 = state_29758;(statearr_29786[(19)] = inst_29733);
(statearr_29786[(7)] = inst_29707);
return statearr_29786;
})();var statearr_29787_29822 = state_29758__$1;(statearr_29787_29822[(2)] = null);
(statearr_29787_29822[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (10)))
{var inst_29723 = (state_29758[(16)]);var inst_29722 = (state_29758[(8)]);var inst_29721 = (state_29758[(2)]);var inst_29722__$1 = cljs.core.nth.call(null,inst_29721,(0),null);var inst_29723__$1 = cljs.core.nth.call(null,inst_29721,(1),null);var inst_29724 = (inst_29722__$1 == null);var inst_29725 = cljs.core._EQ_.call(null,inst_29723__$1,change);var inst_29726 = (inst_29724) || (inst_29725);var state_29758__$1 = (function (){var statearr_29788 = state_29758;(statearr_29788[(16)] = inst_29723__$1);
(statearr_29788[(8)] = inst_29722__$1);
return statearr_29788;
})();if(cljs.core.truth_(inst_29726))
{var statearr_29789_29823 = state_29758__$1;(statearr_29789_29823[(1)] = (11));
} else
{var statearr_29790_29824 = state_29758__$1;(statearr_29790_29824[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (18)))
{var inst_29723 = (state_29758[(16)]);var inst_29717 = (state_29758[(18)]);var inst_29718 = (state_29758[(17)]);var inst_29740 = cljs.core.empty_QMARK_.call(null,inst_29718);var inst_29741 = inst_29717.call(null,inst_29723);var inst_29742 = cljs.core.not.call(null,inst_29741);var inst_29743 = (inst_29740) && (inst_29742);var state_29758__$1 = state_29758;var statearr_29791_29825 = state_29758__$1;(statearr_29791_29825[(2)] = inst_29743);
(statearr_29791_29825[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29759 === (8)))
{var inst_29707 = (state_29758[(7)]);var state_29758__$1 = state_29758;var statearr_29792_29826 = state_29758__$1;(statearr_29792_29826[(2)] = inst_29707);
(statearr_29792_29826[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___29800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___29800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29796[(0)] = state_machine__5679__auto__);
(statearr_29796[(1)] = (1));
return statearr_29796;
});
var state_machine__5679__auto____1 = (function (state_29758){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29758);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29797){if((e29797 instanceof Object))
{var ex__5682__auto__ = e29797;var statearr_29798_29827 = state_29758;(statearr_29798_29827[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29828 = state_29758;
state_29758 = G__29828;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29758){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_29799 = f__5694__auto__.call(null);(statearr_29799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29800);
return statearr_29799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj29830 = {};return obj29830;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__29831_SHARP_){if(cljs.core.truth_(p1__29831_SHARP_.call(null,topic)))
{return p1__29831_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29831_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29956 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29956 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29957){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29957 = meta29957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29956.cljs$lang$type = true;
cljs.core.async.t29956.cljs$lang$ctorStr = "cljs.core.async/t29956";
cljs.core.async.t29956.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t29956");
});})(mults,ensure_mult))
;
cljs.core.async.t29956.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29956.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29956.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29956.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29956.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29958){var self__ = this;
var _29958__$1 = this;return self__.meta29957;
});})(mults,ensure_mult))
;
cljs.core.async.t29956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29958,meta29957__$1){var self__ = this;
var _29958__$1 = this;return (new cljs.core.async.t29956(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29957__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29956 = ((function (mults,ensure_mult){
return (function __GT_t29956(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29957){return (new cljs.core.async.t29956(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29957));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29956(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___30080 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30080,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30080,mults,ensure_mult,p){
return (function (state_30032){var state_val_30033 = (state_30032[(1)]);if((state_val_30033 === (7)))
{var inst_30028 = (state_30032[(2)]);var state_30032__$1 = state_30032;var statearr_30034_30081 = state_30032__$1;(statearr_30034_30081[(2)] = inst_30028);
(statearr_30034_30081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (20)))
{var state_30032__$1 = state_30032;var statearr_30035_30082 = state_30032__$1;(statearr_30035_30082[(2)] = null);
(statearr_30035_30082[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (1)))
{var state_30032__$1 = state_30032;var statearr_30036_30083 = state_30032__$1;(statearr_30036_30083[(2)] = null);
(statearr_30036_30083[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (24)))
{var inst_30011 = (state_30032[(7)]);var inst_29961 = (state_30032[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30032,(23),Object,null,(22));var inst_30018 = cljs.core.async.muxch_STAR_.call(null,inst_30011);var state_30032__$1 = state_30032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30032__$1,(25),inst_30018,inst_29961);
} else
{if((state_val_30033 === (4)))
{var inst_29961 = (state_30032[(8)]);var inst_29961__$1 = (state_30032[(2)]);var inst_29962 = (inst_29961__$1 == null);var state_30032__$1 = (function (){var statearr_30037 = state_30032;(statearr_30037[(8)] = inst_29961__$1);
return statearr_30037;
})();if(cljs.core.truth_(inst_29962))
{var statearr_30038_30084 = state_30032__$1;(statearr_30038_30084[(1)] = (5));
} else
{var statearr_30039_30085 = state_30032__$1;(statearr_30039_30085[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (15)))
{var inst_30003 = (state_30032[(2)]);var state_30032__$1 = state_30032;var statearr_30040_30086 = state_30032__$1;(statearr_30040_30086[(2)] = inst_30003);
(statearr_30040_30086[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (21)))
{var inst_30025 = (state_30032[(2)]);var state_30032__$1 = (function (){var statearr_30041 = state_30032;(statearr_30041[(9)] = inst_30025);
return statearr_30041;
})();var statearr_30042_30087 = state_30032__$1;(statearr_30042_30087[(2)] = null);
(statearr_30042_30087[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (13)))
{var inst_29985 = (state_30032[(10)]);var inst_29987 = cljs.core.chunked_seq_QMARK_.call(null,inst_29985);var state_30032__$1 = state_30032;if(inst_29987)
{var statearr_30043_30088 = state_30032__$1;(statearr_30043_30088[(1)] = (16));
} else
{var statearr_30044_30089 = state_30032__$1;(statearr_30044_30089[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (22)))
{var inst_30022 = (state_30032[(2)]);var state_30032__$1 = state_30032;var statearr_30045_30090 = state_30032__$1;(statearr_30045_30090[(2)] = inst_30022);
(statearr_30045_30090[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (6)))
{var inst_30011 = (state_30032[(7)]);var inst_30009 = (state_30032[(11)]);var inst_29961 = (state_30032[(8)]);var inst_30009__$1 = topic_fn.call(null,inst_29961);var inst_30010 = cljs.core.deref.call(null,mults);var inst_30011__$1 = cljs.core.get.call(null,inst_30010,inst_30009__$1);var state_30032__$1 = (function (){var statearr_30046 = state_30032;(statearr_30046[(7)] = inst_30011__$1);
(statearr_30046[(11)] = inst_30009__$1);
return statearr_30046;
})();if(cljs.core.truth_(inst_30011__$1))
{var statearr_30047_30091 = state_30032__$1;(statearr_30047_30091[(1)] = (19));
} else
{var statearr_30048_30092 = state_30032__$1;(statearr_30048_30092[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (25)))
{var inst_30020 = (state_30032[(2)]);var state_30032__$1 = state_30032;var statearr_30049_30093 = state_30032__$1;(statearr_30049_30093[(2)] = inst_30020);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30032__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (17)))
{var inst_29985 = (state_30032[(10)]);var inst_29994 = cljs.core.first.call(null,inst_29985);var inst_29995 = cljs.core.async.muxch_STAR_.call(null,inst_29994);var inst_29996 = cljs.core.async.close_BANG_.call(null,inst_29995);var inst_29997 = cljs.core.next.call(null,inst_29985);var inst_29971 = inst_29997;var inst_29972 = null;var inst_29973 = (0);var inst_29974 = (0);var state_30032__$1 = (function (){var statearr_30050 = state_30032;(statearr_30050[(12)] = inst_29971);
(statearr_30050[(13)] = inst_29996);
(statearr_30050[(14)] = inst_29972);
(statearr_30050[(15)] = inst_29974);
(statearr_30050[(16)] = inst_29973);
return statearr_30050;
})();var statearr_30051_30094 = state_30032__$1;(statearr_30051_30094[(2)] = null);
(statearr_30051_30094[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (3)))
{var inst_30030 = (state_30032[(2)]);var state_30032__$1 = state_30032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30032__$1,inst_30030);
} else
{if((state_val_30033 === (12)))
{var inst_30005 = (state_30032[(2)]);var state_30032__$1 = state_30032;var statearr_30052_30095 = state_30032__$1;(statearr_30052_30095[(2)] = inst_30005);
(statearr_30052_30095[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (2)))
{var state_30032__$1 = state_30032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30032__$1,(4),ch);
} else
{if((state_val_30033 === (23)))
{var inst_30009 = (state_30032[(11)]);var inst_30013 = (state_30032[(2)]);var inst_30014 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30009);var state_30032__$1 = (function (){var statearr_30053 = state_30032;(statearr_30053[(17)] = inst_30013);
return statearr_30053;
})();var statearr_30054_30096 = state_30032__$1;(statearr_30054_30096[(2)] = inst_30014);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30032__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (19)))
{var state_30032__$1 = state_30032;var statearr_30055_30097 = state_30032__$1;(statearr_30055_30097[(2)] = null);
(statearr_30055_30097[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (11)))
{var inst_29971 = (state_30032[(12)]);var inst_29985 = (state_30032[(10)]);var inst_29985__$1 = cljs.core.seq.call(null,inst_29971);var state_30032__$1 = (function (){var statearr_30056 = state_30032;(statearr_30056[(10)] = inst_29985__$1);
return statearr_30056;
})();if(inst_29985__$1)
{var statearr_30057_30098 = state_30032__$1;(statearr_30057_30098[(1)] = (13));
} else
{var statearr_30058_30099 = state_30032__$1;(statearr_30058_30099[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (9)))
{var inst_30007 = (state_30032[(2)]);var state_30032__$1 = state_30032;var statearr_30059_30100 = state_30032__$1;(statearr_30059_30100[(2)] = inst_30007);
(statearr_30059_30100[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (5)))
{var inst_29968 = cljs.core.deref.call(null,mults);var inst_29969 = cljs.core.vals.call(null,inst_29968);var inst_29970 = cljs.core.seq.call(null,inst_29969);var inst_29971 = inst_29970;var inst_29972 = null;var inst_29973 = (0);var inst_29974 = (0);var state_30032__$1 = (function (){var statearr_30060 = state_30032;(statearr_30060[(12)] = inst_29971);
(statearr_30060[(14)] = inst_29972);
(statearr_30060[(15)] = inst_29974);
(statearr_30060[(16)] = inst_29973);
return statearr_30060;
})();var statearr_30061_30101 = state_30032__$1;(statearr_30061_30101[(2)] = null);
(statearr_30061_30101[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (14)))
{var state_30032__$1 = state_30032;var statearr_30065_30102 = state_30032__$1;(statearr_30065_30102[(2)] = null);
(statearr_30065_30102[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (16)))
{var inst_29985 = (state_30032[(10)]);var inst_29989 = cljs.core.chunk_first.call(null,inst_29985);var inst_29990 = cljs.core.chunk_rest.call(null,inst_29985);var inst_29991 = cljs.core.count.call(null,inst_29989);var inst_29971 = inst_29990;var inst_29972 = inst_29989;var inst_29973 = inst_29991;var inst_29974 = (0);var state_30032__$1 = (function (){var statearr_30066 = state_30032;(statearr_30066[(12)] = inst_29971);
(statearr_30066[(14)] = inst_29972);
(statearr_30066[(15)] = inst_29974);
(statearr_30066[(16)] = inst_29973);
return statearr_30066;
})();var statearr_30067_30103 = state_30032__$1;(statearr_30067_30103[(2)] = null);
(statearr_30067_30103[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (10)))
{var inst_29971 = (state_30032[(12)]);var inst_29972 = (state_30032[(14)]);var inst_29974 = (state_30032[(15)]);var inst_29973 = (state_30032[(16)]);var inst_29979 = cljs.core._nth.call(null,inst_29972,inst_29974);var inst_29980 = cljs.core.async.muxch_STAR_.call(null,inst_29979);var inst_29981 = cljs.core.async.close_BANG_.call(null,inst_29980);var inst_29982 = (inst_29974 + (1));var tmp30062 = inst_29971;var tmp30063 = inst_29972;var tmp30064 = inst_29973;var inst_29971__$1 = tmp30062;var inst_29972__$1 = tmp30063;var inst_29973__$1 = tmp30064;var inst_29974__$1 = inst_29982;var state_30032__$1 = (function (){var statearr_30068 = state_30032;(statearr_30068[(12)] = inst_29971__$1);
(statearr_30068[(18)] = inst_29981);
(statearr_30068[(14)] = inst_29972__$1);
(statearr_30068[(15)] = inst_29974__$1);
(statearr_30068[(16)] = inst_29973__$1);
return statearr_30068;
})();var statearr_30069_30104 = state_30032__$1;(statearr_30069_30104[(2)] = null);
(statearr_30069_30104[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (18)))
{var inst_30000 = (state_30032[(2)]);var state_30032__$1 = state_30032;var statearr_30070_30105 = state_30032__$1;(statearr_30070_30105[(2)] = inst_30000);
(statearr_30070_30105[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30033 === (8)))
{var inst_29974 = (state_30032[(15)]);var inst_29973 = (state_30032[(16)]);var inst_29976 = (inst_29974 < inst_29973);var inst_29977 = inst_29976;var state_30032__$1 = state_30032;if(cljs.core.truth_(inst_29977))
{var statearr_30071_30106 = state_30032__$1;(statearr_30071_30106[(1)] = (10));
} else
{var statearr_30072_30107 = state_30032__$1;(statearr_30072_30107[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___30080,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___30080,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30076[(0)] = state_machine__5679__auto__);
(statearr_30076[(1)] = (1));
return statearr_30076;
});
var state_machine__5679__auto____1 = (function (state_30032){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30032);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30077){if((e30077 instanceof Object))
{var ex__5682__auto__ = e30077;var statearr_30078_30108 = state_30032;(statearr_30078_30108[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30032);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30109 = state_30032;
state_30032 = G__30109;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30032){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30080,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_30079 = f__5694__auto__.call(null);(statearr_30079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30080);
return statearr_30079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30080,mults,ensure_mult,p))
);
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5693__auto___30246 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30246,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30246,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30216){var state_val_30217 = (state_30216[(1)]);if((state_val_30217 === (7)))
{var state_30216__$1 = state_30216;var statearr_30218_30247 = state_30216__$1;(statearr_30218_30247[(2)] = null);
(statearr_30218_30247[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (1)))
{var state_30216__$1 = state_30216;var statearr_30219_30248 = state_30216__$1;(statearr_30219_30248[(2)] = null);
(statearr_30219_30248[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (4)))
{var inst_30180 = (state_30216[(7)]);var inst_30182 = (inst_30180 < cnt);var state_30216__$1 = state_30216;if(cljs.core.truth_(inst_30182))
{var statearr_30220_30249 = state_30216__$1;(statearr_30220_30249[(1)] = (6));
} else
{var statearr_30221_30250 = state_30216__$1;(statearr_30221_30250[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (15)))
{var inst_30212 = (state_30216[(2)]);var state_30216__$1 = state_30216;var statearr_30222_30251 = state_30216__$1;(statearr_30222_30251[(2)] = inst_30212);
(statearr_30222_30251[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (13)))
{var inst_30205 = cljs.core.async.close_BANG_.call(null,out);var state_30216__$1 = state_30216;var statearr_30223_30252 = state_30216__$1;(statearr_30223_30252[(2)] = inst_30205);
(statearr_30223_30252[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (6)))
{var state_30216__$1 = state_30216;var statearr_30224_30253 = state_30216__$1;(statearr_30224_30253[(2)] = null);
(statearr_30224_30253[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (3)))
{var inst_30214 = (state_30216[(2)]);var state_30216__$1 = state_30216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30216__$1,inst_30214);
} else
{if((state_val_30217 === (12)))
{var inst_30202 = (state_30216[(8)]);var inst_30202__$1 = (state_30216[(2)]);var inst_30203 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30202__$1);var state_30216__$1 = (function (){var statearr_30225 = state_30216;(statearr_30225[(8)] = inst_30202__$1);
return statearr_30225;
})();if(cljs.core.truth_(inst_30203))
{var statearr_30226_30254 = state_30216__$1;(statearr_30226_30254[(1)] = (13));
} else
{var statearr_30227_30255 = state_30216__$1;(statearr_30227_30255[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (2)))
{var inst_30179 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_30180 = (0);var state_30216__$1 = (function (){var statearr_30228 = state_30216;(statearr_30228[(7)] = inst_30180);
(statearr_30228[(9)] = inst_30179);
return statearr_30228;
})();var statearr_30229_30256 = state_30216__$1;(statearr_30229_30256[(2)] = null);
(statearr_30229_30256[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (11)))
{var inst_30180 = (state_30216[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30216,(10),Object,null,(9));var inst_30189 = chs__$1.call(null,inst_30180);var inst_30190 = done.call(null,inst_30180);var inst_30191 = cljs.core.async.take_BANG_.call(null,inst_30189,inst_30190);var state_30216__$1 = state_30216;var statearr_30230_30257 = state_30216__$1;(statearr_30230_30257[(2)] = inst_30191);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30216__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (9)))
{var inst_30180 = (state_30216[(7)]);var inst_30193 = (state_30216[(2)]);var inst_30194 = (inst_30180 + (1));var inst_30180__$1 = inst_30194;var state_30216__$1 = (function (){var statearr_30231 = state_30216;(statearr_30231[(10)] = inst_30193);
(statearr_30231[(7)] = inst_30180__$1);
return statearr_30231;
})();var statearr_30232_30258 = state_30216__$1;(statearr_30232_30258[(2)] = null);
(statearr_30232_30258[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (5)))
{var inst_30200 = (state_30216[(2)]);var state_30216__$1 = (function (){var statearr_30233 = state_30216;(statearr_30233[(11)] = inst_30200);
return statearr_30233;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30216__$1,(12),dchan);
} else
{if((state_val_30217 === (14)))
{var inst_30202 = (state_30216[(8)]);var inst_30207 = cljs.core.apply.call(null,f,inst_30202);var state_30216__$1 = state_30216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30216__$1,(16),out,inst_30207);
} else
{if((state_val_30217 === (16)))
{var inst_30209 = (state_30216[(2)]);var state_30216__$1 = (function (){var statearr_30234 = state_30216;(statearr_30234[(12)] = inst_30209);
return statearr_30234;
})();var statearr_30235_30259 = state_30216__$1;(statearr_30235_30259[(2)] = null);
(statearr_30235_30259[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (10)))
{var inst_30184 = (state_30216[(2)]);var inst_30185 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_30216__$1 = (function (){var statearr_30236 = state_30216;(statearr_30236[(13)] = inst_30184);
return statearr_30236;
})();var statearr_30237_30260 = state_30216__$1;(statearr_30237_30260[(2)] = inst_30185);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30216__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30217 === (8)))
{var inst_30198 = (state_30216[(2)]);var state_30216__$1 = state_30216;var statearr_30238_30261 = state_30216__$1;(statearr_30238_30261[(2)] = inst_30198);
(statearr_30238_30261[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___30246,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___30246,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30242[(0)] = state_machine__5679__auto__);
(statearr_30242[(1)] = (1));
return statearr_30242;
});
var state_machine__5679__auto____1 = (function (state_30216){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30216);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30243){if((e30243 instanceof Object))
{var ex__5682__auto__ = e30243;var statearr_30244_30262 = state_30216;(statearr_30244_30262[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30216);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30263 = state_30216;
state_30216 = G__30263;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30216){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30246,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_30245 = f__5694__auto__.call(null);(statearr_30245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30246);
return statearr_30245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30246,chs__$1,out,cnt,rets,dchan,dctr,done))
);
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30371 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30371,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30371,out){
return (function (state_30347){var state_val_30348 = (state_30347[(1)]);if((state_val_30348 === (7)))
{var inst_30326 = (state_30347[(7)]);var inst_30327 = (state_30347[(8)]);var inst_30326__$1 = (state_30347[(2)]);var inst_30327__$1 = cljs.core.nth.call(null,inst_30326__$1,(0),null);var inst_30328 = cljs.core.nth.call(null,inst_30326__$1,(1),null);var inst_30329 = (inst_30327__$1 == null);var state_30347__$1 = (function (){var statearr_30349 = state_30347;(statearr_30349[(7)] = inst_30326__$1);
(statearr_30349[(8)] = inst_30327__$1);
(statearr_30349[(9)] = inst_30328);
return statearr_30349;
})();if(cljs.core.truth_(inst_30329))
{var statearr_30350_30372 = state_30347__$1;(statearr_30350_30372[(1)] = (8));
} else
{var statearr_30351_30373 = state_30347__$1;(statearr_30351_30373[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30348 === (1)))
{var inst_30318 = cljs.core.vec.call(null,chs);var inst_30319 = inst_30318;var state_30347__$1 = (function (){var statearr_30352 = state_30347;(statearr_30352[(10)] = inst_30319);
return statearr_30352;
})();var statearr_30353_30374 = state_30347__$1;(statearr_30353_30374[(2)] = null);
(statearr_30353_30374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30348 === (4)))
{var inst_30319 = (state_30347[(10)]);var state_30347__$1 = state_30347;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30347__$1,(7),inst_30319);
} else
{if((state_val_30348 === (6)))
{var inst_30343 = (state_30347[(2)]);var state_30347__$1 = state_30347;var statearr_30354_30375 = state_30347__$1;(statearr_30354_30375[(2)] = inst_30343);
(statearr_30354_30375[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30348 === (3)))
{var inst_30345 = (state_30347[(2)]);var state_30347__$1 = state_30347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30347__$1,inst_30345);
} else
{if((state_val_30348 === (2)))
{var inst_30319 = (state_30347[(10)]);var inst_30321 = cljs.core.count.call(null,inst_30319);var inst_30322 = (inst_30321 > (0));var state_30347__$1 = state_30347;if(cljs.core.truth_(inst_30322))
{var statearr_30356_30376 = state_30347__$1;(statearr_30356_30376[(1)] = (4));
} else
{var statearr_30357_30377 = state_30347__$1;(statearr_30357_30377[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30348 === (11)))
{var inst_30319 = (state_30347[(10)]);var inst_30336 = (state_30347[(2)]);var tmp30355 = inst_30319;var inst_30319__$1 = tmp30355;var state_30347__$1 = (function (){var statearr_30358 = state_30347;(statearr_30358[(11)] = inst_30336);
(statearr_30358[(10)] = inst_30319__$1);
return statearr_30358;
})();var statearr_30359_30378 = state_30347__$1;(statearr_30359_30378[(2)] = null);
(statearr_30359_30378[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30348 === (9)))
{var inst_30327 = (state_30347[(8)]);var state_30347__$1 = state_30347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30347__$1,(11),out,inst_30327);
} else
{if((state_val_30348 === (5)))
{var inst_30341 = cljs.core.async.close_BANG_.call(null,out);var state_30347__$1 = state_30347;var statearr_30360_30379 = state_30347__$1;(statearr_30360_30379[(2)] = inst_30341);
(statearr_30360_30379[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30348 === (10)))
{var inst_30339 = (state_30347[(2)]);var state_30347__$1 = state_30347;var statearr_30361_30380 = state_30347__$1;(statearr_30361_30380[(2)] = inst_30339);
(statearr_30361_30380[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30348 === (8)))
{var inst_30326 = (state_30347[(7)]);var inst_30327 = (state_30347[(8)]);var inst_30328 = (state_30347[(9)]);var inst_30319 = (state_30347[(10)]);var inst_30331 = (function (){var c = inst_30328;var v = inst_30327;var vec__30324 = inst_30326;var cs = inst_30319;return ((function (c,v,vec__30324,cs,inst_30326,inst_30327,inst_30328,inst_30319,state_val_30348,c__5693__auto___30371,out){
return (function (p1__30264_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__30264_SHARP_);
});
;})(c,v,vec__30324,cs,inst_30326,inst_30327,inst_30328,inst_30319,state_val_30348,c__5693__auto___30371,out))
})();var inst_30332 = cljs.core.filterv.call(null,inst_30331,inst_30319);var inst_30319__$1 = inst_30332;var state_30347__$1 = (function (){var statearr_30362 = state_30347;(statearr_30362[(10)] = inst_30319__$1);
return statearr_30362;
})();var statearr_30363_30381 = state_30347__$1;(statearr_30363_30381[(2)] = null);
(statearr_30363_30381[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___30371,out))
;return ((function (switch__5678__auto__,c__5693__auto___30371,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30367 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30367[(0)] = state_machine__5679__auto__);
(statearr_30367[(1)] = (1));
return statearr_30367;
});
var state_machine__5679__auto____1 = (function (state_30347){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30347);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30368){if((e30368 instanceof Object))
{var ex__5682__auto__ = e30368;var statearr_30369_30382 = state_30347;(statearr_30369_30382[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30383 = state_30347;
state_30347 = G__30383;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30347){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30371,out))
})();var state__5695__auto__ = (function (){var statearr_30370 = f__5694__auto__.call(null);(statearr_30370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30371);
return statearr_30370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30371,out))
);
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30476 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30476,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30476,out){
return (function (state_30453){var state_val_30454 = (state_30453[(1)]);if((state_val_30454 === (7)))
{var inst_30435 = (state_30453[(7)]);var inst_30435__$1 = (state_30453[(2)]);var inst_30436 = (inst_30435__$1 == null);var inst_30437 = cljs.core.not.call(null,inst_30436);var state_30453__$1 = (function (){var statearr_30455 = state_30453;(statearr_30455[(7)] = inst_30435__$1);
return statearr_30455;
})();if(inst_30437)
{var statearr_30456_30477 = state_30453__$1;(statearr_30456_30477[(1)] = (8));
} else
{var statearr_30457_30478 = state_30453__$1;(statearr_30457_30478[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30454 === (1)))
{var inst_30430 = (0);var state_30453__$1 = (function (){var statearr_30458 = state_30453;(statearr_30458[(8)] = inst_30430);
return statearr_30458;
})();var statearr_30459_30479 = state_30453__$1;(statearr_30459_30479[(2)] = null);
(statearr_30459_30479[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30454 === (4)))
{var state_30453__$1 = state_30453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(7),ch);
} else
{if((state_val_30454 === (6)))
{var inst_30448 = (state_30453[(2)]);var state_30453__$1 = state_30453;var statearr_30460_30480 = state_30453__$1;(statearr_30460_30480[(2)] = inst_30448);
(statearr_30460_30480[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30454 === (3)))
{var inst_30450 = (state_30453[(2)]);var inst_30451 = cljs.core.async.close_BANG_.call(null,out);var state_30453__$1 = (function (){var statearr_30461 = state_30453;(statearr_30461[(9)] = inst_30450);
return statearr_30461;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30453__$1,inst_30451);
} else
{if((state_val_30454 === (2)))
{var inst_30430 = (state_30453[(8)]);var inst_30432 = (inst_30430 < n);var state_30453__$1 = state_30453;if(cljs.core.truth_(inst_30432))
{var statearr_30462_30481 = state_30453__$1;(statearr_30462_30481[(1)] = (4));
} else
{var statearr_30463_30482 = state_30453__$1;(statearr_30463_30482[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30454 === (11)))
{var inst_30430 = (state_30453[(8)]);var inst_30440 = (state_30453[(2)]);var inst_30441 = (inst_30430 + (1));var inst_30430__$1 = inst_30441;var state_30453__$1 = (function (){var statearr_30464 = state_30453;(statearr_30464[(8)] = inst_30430__$1);
(statearr_30464[(10)] = inst_30440);
return statearr_30464;
})();var statearr_30465_30483 = state_30453__$1;(statearr_30465_30483[(2)] = null);
(statearr_30465_30483[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30454 === (9)))
{var state_30453__$1 = state_30453;var statearr_30466_30484 = state_30453__$1;(statearr_30466_30484[(2)] = null);
(statearr_30466_30484[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30454 === (5)))
{var state_30453__$1 = state_30453;var statearr_30467_30485 = state_30453__$1;(statearr_30467_30485[(2)] = null);
(statearr_30467_30485[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30454 === (10)))
{var inst_30445 = (state_30453[(2)]);var state_30453__$1 = state_30453;var statearr_30468_30486 = state_30453__$1;(statearr_30468_30486[(2)] = inst_30445);
(statearr_30468_30486[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30454 === (8)))
{var inst_30435 = (state_30453[(7)]);var state_30453__$1 = state_30453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30453__$1,(11),out,inst_30435);
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
});})(c__5693__auto___30476,out))
;return ((function (switch__5678__auto__,c__5693__auto___30476,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30472 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30472[(0)] = state_machine__5679__auto__);
(statearr_30472[(1)] = (1));
return statearr_30472;
});
var state_machine__5679__auto____1 = (function (state_30453){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30453);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30473){if((e30473 instanceof Object))
{var ex__5682__auto__ = e30473;var statearr_30474_30487 = state_30453;(statearr_30474_30487[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30453);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30488 = state_30453;
state_30453 = G__30488;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30453){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30476,out))
})();var state__5695__auto__ = (function (){var statearr_30475 = f__5694__auto__.call(null);(statearr_30475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30476);
return statearr_30475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30476,out))
);
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30585 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30585,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30585,out){
return (function (state_30560){var state_val_30561 = (state_30560[(1)]);if((state_val_30561 === (7)))
{var inst_30555 = (state_30560[(2)]);var state_30560__$1 = state_30560;var statearr_30562_30586 = state_30560__$1;(statearr_30562_30586[(2)] = inst_30555);
(statearr_30562_30586[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (1)))
{var inst_30537 = null;var state_30560__$1 = (function (){var statearr_30563 = state_30560;(statearr_30563[(7)] = inst_30537);
return statearr_30563;
})();var statearr_30564_30587 = state_30560__$1;(statearr_30564_30587[(2)] = null);
(statearr_30564_30587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (4)))
{var inst_30540 = (state_30560[(8)]);var inst_30540__$1 = (state_30560[(2)]);var inst_30541 = (inst_30540__$1 == null);var inst_30542 = cljs.core.not.call(null,inst_30541);var state_30560__$1 = (function (){var statearr_30565 = state_30560;(statearr_30565[(8)] = inst_30540__$1);
return statearr_30565;
})();if(inst_30542)
{var statearr_30566_30588 = state_30560__$1;(statearr_30566_30588[(1)] = (5));
} else
{var statearr_30567_30589 = state_30560__$1;(statearr_30567_30589[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (6)))
{var state_30560__$1 = state_30560;var statearr_30568_30590 = state_30560__$1;(statearr_30568_30590[(2)] = null);
(statearr_30568_30590[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (3)))
{var inst_30557 = (state_30560[(2)]);var inst_30558 = cljs.core.async.close_BANG_.call(null,out);var state_30560__$1 = (function (){var statearr_30569 = state_30560;(statearr_30569[(9)] = inst_30557);
return statearr_30569;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30560__$1,inst_30558);
} else
{if((state_val_30561 === (2)))
{var state_30560__$1 = state_30560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30560__$1,(4),ch);
} else
{if((state_val_30561 === (11)))
{var inst_30540 = (state_30560[(8)]);var inst_30549 = (state_30560[(2)]);var inst_30537 = inst_30540;var state_30560__$1 = (function (){var statearr_30570 = state_30560;(statearr_30570[(7)] = inst_30537);
(statearr_30570[(10)] = inst_30549);
return statearr_30570;
})();var statearr_30571_30591 = state_30560__$1;(statearr_30571_30591[(2)] = null);
(statearr_30571_30591[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (9)))
{var inst_30540 = (state_30560[(8)]);var state_30560__$1 = state_30560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30560__$1,(11),out,inst_30540);
} else
{if((state_val_30561 === (5)))
{var inst_30537 = (state_30560[(7)]);var inst_30540 = (state_30560[(8)]);var inst_30544 = cljs.core._EQ_.call(null,inst_30540,inst_30537);var state_30560__$1 = state_30560;if(inst_30544)
{var statearr_30573_30592 = state_30560__$1;(statearr_30573_30592[(1)] = (8));
} else
{var statearr_30574_30593 = state_30560__$1;(statearr_30574_30593[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (10)))
{var inst_30552 = (state_30560[(2)]);var state_30560__$1 = state_30560;var statearr_30575_30594 = state_30560__$1;(statearr_30575_30594[(2)] = inst_30552);
(statearr_30575_30594[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (8)))
{var inst_30537 = (state_30560[(7)]);var tmp30572 = inst_30537;var inst_30537__$1 = tmp30572;var state_30560__$1 = (function (){var statearr_30576 = state_30560;(statearr_30576[(7)] = inst_30537__$1);
return statearr_30576;
})();var statearr_30577_30595 = state_30560__$1;(statearr_30577_30595[(2)] = null);
(statearr_30577_30595[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___30585,out))
;return ((function (switch__5678__auto__,c__5693__auto___30585,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30581 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30581[(0)] = state_machine__5679__auto__);
(statearr_30581[(1)] = (1));
return statearr_30581;
});
var state_machine__5679__auto____1 = (function (state_30560){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30560);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30582){if((e30582 instanceof Object))
{var ex__5682__auto__ = e30582;var statearr_30583_30596 = state_30560;(statearr_30583_30596[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30560);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30597 = state_30560;
state_30560 = G__30597;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30560){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30585,out))
})();var state__5695__auto__ = (function (){var statearr_30584 = f__5694__auto__.call(null);(statearr_30584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30585);
return statearr_30584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30585,out))
);
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30732 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30732,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30732,out){
return (function (state_30702){var state_val_30703 = (state_30702[(1)]);if((state_val_30703 === (7)))
{var inst_30698 = (state_30702[(2)]);var state_30702__$1 = state_30702;var statearr_30704_30733 = state_30702__$1;(statearr_30704_30733[(2)] = inst_30698);
(statearr_30704_30733[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30703 === (1)))
{var inst_30665 = (new Array(n));var inst_30666 = inst_30665;var inst_30667 = (0);var state_30702__$1 = (function (){var statearr_30705 = state_30702;(statearr_30705[(7)] = inst_30666);
(statearr_30705[(8)] = inst_30667);
return statearr_30705;
})();var statearr_30706_30734 = state_30702__$1;(statearr_30706_30734[(2)] = null);
(statearr_30706_30734[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30703 === (4)))
{var inst_30670 = (state_30702[(9)]);var inst_30670__$1 = (state_30702[(2)]);var inst_30671 = (inst_30670__$1 == null);var inst_30672 = cljs.core.not.call(null,inst_30671);var state_30702__$1 = (function (){var statearr_30707 = state_30702;(statearr_30707[(9)] = inst_30670__$1);
return statearr_30707;
})();if(inst_30672)
{var statearr_30708_30735 = state_30702__$1;(statearr_30708_30735[(1)] = (5));
} else
{var statearr_30709_30736 = state_30702__$1;(statearr_30709_30736[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30703 === (15)))
{var inst_30692 = (state_30702[(2)]);var state_30702__$1 = state_30702;var statearr_30710_30737 = state_30702__$1;(statearr_30710_30737[(2)] = inst_30692);
(statearr_30710_30737[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30703 === (13)))
{var state_30702__$1 = state_30702;var statearr_30711_30738 = state_30702__$1;(statearr_30711_30738[(2)] = null);
(statearr_30711_30738[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30703 === (6)))
{var inst_30667 = (state_30702[(8)]);var inst_30688 = (inst_30667 > (0));var state_30702__$1 = state_30702;if(cljs.core.truth_(inst_30688))
{var statearr_30712_30739 = state_30702__$1;(statearr_30712_30739[(1)] = (12));
} else
{var statearr_30713_30740 = state_30702__$1;(statearr_30713_30740[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30703 === (3)))
{var inst_30700 = (state_30702[(2)]);var state_30702__$1 = state_30702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30702__$1,inst_30700);
} else
{if((state_val_30703 === (12)))
{var inst_30666 = (state_30702[(7)]);var inst_30690 = cljs.core.vec.call(null,inst_30666);var state_30702__$1 = state_30702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30702__$1,(15),out,inst_30690);
} else
{if((state_val_30703 === (2)))
{var state_30702__$1 = state_30702;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30702__$1,(4),ch);
} else
{if((state_val_30703 === (11)))
{var inst_30682 = (state_30702[(2)]);var inst_30683 = (new Array(n));var inst_30666 = inst_30683;var inst_30667 = (0);var state_30702__$1 = (function (){var statearr_30714 = state_30702;(statearr_30714[(10)] = inst_30682);
(statearr_30714[(7)] = inst_30666);
(statearr_30714[(8)] = inst_30667);
return statearr_30714;
})();var statearr_30715_30741 = state_30702__$1;(statearr_30715_30741[(2)] = null);
(statearr_30715_30741[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30703 === (9)))
{var inst_30666 = (state_30702[(7)]);var inst_30680 = cljs.core.vec.call(null,inst_30666);var state_30702__$1 = state_30702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30702__$1,(11),out,inst_30680);
} else
{if((state_val_30703 === (5)))
{var inst_30666 = (state_30702[(7)]);var inst_30675 = (state_30702[(11)]);var inst_30667 = (state_30702[(8)]);var inst_30670 = (state_30702[(9)]);var inst_30674 = (inst_30666[inst_30667] = inst_30670);var inst_30675__$1 = (inst_30667 + (1));var inst_30676 = (inst_30675__$1 < n);var state_30702__$1 = (function (){var statearr_30716 = state_30702;(statearr_30716[(11)] = inst_30675__$1);
(statearr_30716[(12)] = inst_30674);
return statearr_30716;
})();if(cljs.core.truth_(inst_30676))
{var statearr_30717_30742 = state_30702__$1;(statearr_30717_30742[(1)] = (8));
} else
{var statearr_30718_30743 = state_30702__$1;(statearr_30718_30743[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30703 === (14)))
{var inst_30695 = (state_30702[(2)]);var inst_30696 = cljs.core.async.close_BANG_.call(null,out);var state_30702__$1 = (function (){var statearr_30720 = state_30702;(statearr_30720[(13)] = inst_30695);
return statearr_30720;
})();var statearr_30721_30744 = state_30702__$1;(statearr_30721_30744[(2)] = inst_30696);
(statearr_30721_30744[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30703 === (10)))
{var inst_30686 = (state_30702[(2)]);var state_30702__$1 = state_30702;var statearr_30722_30745 = state_30702__$1;(statearr_30722_30745[(2)] = inst_30686);
(statearr_30722_30745[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30703 === (8)))
{var inst_30666 = (state_30702[(7)]);var inst_30675 = (state_30702[(11)]);var tmp30719 = inst_30666;var inst_30666__$1 = tmp30719;var inst_30667 = inst_30675;var state_30702__$1 = (function (){var statearr_30723 = state_30702;(statearr_30723[(7)] = inst_30666__$1);
(statearr_30723[(8)] = inst_30667);
return statearr_30723;
})();var statearr_30724_30746 = state_30702__$1;(statearr_30724_30746[(2)] = null);
(statearr_30724_30746[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___30732,out))
;return ((function (switch__5678__auto__,c__5693__auto___30732,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30728[(0)] = state_machine__5679__auto__);
(statearr_30728[(1)] = (1));
return statearr_30728;
});
var state_machine__5679__auto____1 = (function (state_30702){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30702);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30729){if((e30729 instanceof Object))
{var ex__5682__auto__ = e30729;var statearr_30730_30747 = state_30702;(statearr_30730_30747[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30702);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30729;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30748 = state_30702;
state_30702 = G__30748;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30702){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30732,out))
})();var state__5695__auto__ = (function (){var statearr_30731 = f__5694__auto__.call(null);(statearr_30731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30732);
return statearr_30731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30732,out))
);
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30891 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30891,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30891,out){
return (function (state_30861){var state_val_30862 = (state_30861[(1)]);if((state_val_30862 === (7)))
{var inst_30857 = (state_30861[(2)]);var state_30861__$1 = state_30861;var statearr_30863_30892 = state_30861__$1;(statearr_30863_30892[(2)] = inst_30857);
(statearr_30863_30892[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30862 === (1)))
{var inst_30820 = [];var inst_30821 = inst_30820;var inst_30822 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_30861__$1 = (function (){var statearr_30864 = state_30861;(statearr_30864[(7)] = inst_30821);
(statearr_30864[(8)] = inst_30822);
return statearr_30864;
})();var statearr_30865_30893 = state_30861__$1;(statearr_30865_30893[(2)] = null);
(statearr_30865_30893[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30862 === (4)))
{var inst_30825 = (state_30861[(9)]);var inst_30825__$1 = (state_30861[(2)]);var inst_30826 = (inst_30825__$1 == null);var inst_30827 = cljs.core.not.call(null,inst_30826);var state_30861__$1 = (function (){var statearr_30866 = state_30861;(statearr_30866[(9)] = inst_30825__$1);
return statearr_30866;
})();if(inst_30827)
{var statearr_30867_30894 = state_30861__$1;(statearr_30867_30894[(1)] = (5));
} else
{var statearr_30868_30895 = state_30861__$1;(statearr_30868_30895[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30862 === (15)))
{var inst_30851 = (state_30861[(2)]);var state_30861__$1 = state_30861;var statearr_30869_30896 = state_30861__$1;(statearr_30869_30896[(2)] = inst_30851);
(statearr_30869_30896[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30862 === (13)))
{var state_30861__$1 = state_30861;var statearr_30870_30897 = state_30861__$1;(statearr_30870_30897[(2)] = null);
(statearr_30870_30897[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30862 === (6)))
{var inst_30821 = (state_30861[(7)]);var inst_30846 = inst_30821.length;var inst_30847 = (inst_30846 > (0));var state_30861__$1 = state_30861;if(cljs.core.truth_(inst_30847))
{var statearr_30871_30898 = state_30861__$1;(statearr_30871_30898[(1)] = (12));
} else
{var statearr_30872_30899 = state_30861__$1;(statearr_30872_30899[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30862 === (3)))
{var inst_30859 = (state_30861[(2)]);var state_30861__$1 = state_30861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30861__$1,inst_30859);
} else
{if((state_val_30862 === (12)))
{var inst_30821 = (state_30861[(7)]);var inst_30849 = cljs.core.vec.call(null,inst_30821);var state_30861__$1 = state_30861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30861__$1,(15),out,inst_30849);
} else
{if((state_val_30862 === (2)))
{var state_30861__$1 = state_30861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30861__$1,(4),ch);
} else
{if((state_val_30862 === (11)))
{var inst_30825 = (state_30861[(9)]);var inst_30829 = (state_30861[(10)]);var inst_30839 = (state_30861[(2)]);var inst_30840 = [];var inst_30841 = inst_30840.push(inst_30825);var inst_30821 = inst_30840;var inst_30822 = inst_30829;var state_30861__$1 = (function (){var statearr_30873 = state_30861;(statearr_30873[(11)] = inst_30841);
(statearr_30873[(12)] = inst_30839);
(statearr_30873[(7)] = inst_30821);
(statearr_30873[(8)] = inst_30822);
return statearr_30873;
})();var statearr_30874_30900 = state_30861__$1;(statearr_30874_30900[(2)] = null);
(statearr_30874_30900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30862 === (9)))
{var inst_30821 = (state_30861[(7)]);var inst_30837 = cljs.core.vec.call(null,inst_30821);var state_30861__$1 = state_30861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30861__$1,(11),out,inst_30837);
} else
{if((state_val_30862 === (5)))
{var inst_30825 = (state_30861[(9)]);var inst_30829 = (state_30861[(10)]);var inst_30822 = (state_30861[(8)]);var inst_30829__$1 = f.call(null,inst_30825);var inst_30830 = cljs.core._EQ_.call(null,inst_30829__$1,inst_30822);var inst_30831 = cljs.core.keyword_identical_QMARK_.call(null,inst_30822,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_30832 = (inst_30830) || (inst_30831);var state_30861__$1 = (function (){var statearr_30875 = state_30861;(statearr_30875[(10)] = inst_30829__$1);
return statearr_30875;
})();if(cljs.core.truth_(inst_30832))
{var statearr_30876_30901 = state_30861__$1;(statearr_30876_30901[(1)] = (8));
} else
{var statearr_30877_30902 = state_30861__$1;(statearr_30877_30902[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30862 === (14)))
{var inst_30854 = (state_30861[(2)]);var inst_30855 = cljs.core.async.close_BANG_.call(null,out);var state_30861__$1 = (function (){var statearr_30879 = state_30861;(statearr_30879[(13)] = inst_30854);
return statearr_30879;
})();var statearr_30880_30903 = state_30861__$1;(statearr_30880_30903[(2)] = inst_30855);
(statearr_30880_30903[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30862 === (10)))
{var inst_30844 = (state_30861[(2)]);var state_30861__$1 = state_30861;var statearr_30881_30904 = state_30861__$1;(statearr_30881_30904[(2)] = inst_30844);
(statearr_30881_30904[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30862 === (8)))
{var inst_30825 = (state_30861[(9)]);var inst_30829 = (state_30861[(10)]);var inst_30821 = (state_30861[(7)]);var inst_30834 = inst_30821.push(inst_30825);var tmp30878 = inst_30821;var inst_30821__$1 = tmp30878;var inst_30822 = inst_30829;var state_30861__$1 = (function (){var statearr_30882 = state_30861;(statearr_30882[(14)] = inst_30834);
(statearr_30882[(7)] = inst_30821__$1);
(statearr_30882[(8)] = inst_30822);
return statearr_30882;
})();var statearr_30883_30905 = state_30861__$1;(statearr_30883_30905[(2)] = null);
(statearr_30883_30905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___30891,out))
;return ((function (switch__5678__auto__,c__5693__auto___30891,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30887[(0)] = state_machine__5679__auto__);
(statearr_30887[(1)] = (1));
return statearr_30887;
});
var state_machine__5679__auto____1 = (function (state_30861){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30861);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30888){if((e30888 instanceof Object))
{var ex__5682__auto__ = e30888;var statearr_30889_30906 = state_30861;(statearr_30889_30906[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30861);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30907 = state_30861;
state_30861 = G__30907;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30861){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30891,out))
})();var state__5695__auto__ = (function (){var statearr_30890 = f__5694__auto__.call(null);(statearr_30890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30891);
return statearr_30890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30891,out))
);
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
