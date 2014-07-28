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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t28367 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28367 = (function (f,fn_handler,meta28368){
this.f = f;
this.fn_handler = fn_handler;
this.meta28368 = meta28368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28367.cljs$lang$type = true;
cljs.core.async.t28367.cljs$lang$ctorStr = "cljs.core.async/t28367";
cljs.core.async.t28367.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28367");
});
cljs.core.async.t28367.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t28367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t28367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28369){var self__ = this;
var _28369__$1 = this;return self__.meta28368;
});
cljs.core.async.t28367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28369,meta28368__$1){var self__ = this;
var _28369__$1 = this;return (new cljs.core.async.t28367(self__.f,self__.fn_handler,meta28368__$1));
});
cljs.core.async.__GT_t28367 = (function __GT_t28367(f__$1,fn_handler__$1,meta28368){return (new cljs.core.async.t28367(f__$1,fn_handler__$1,meta28368));
});
}
return (new cljs.core.async.t28367(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__28371 = buff;if(G__28371)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__28371.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__28371.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28371);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28371);
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
{var val_28372 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28372);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28372,ret){
return (function (){return fn1.call(null,val_28372);
});})(val_28372,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___28373 = n;var x_28374 = (0);while(true){
if((x_28374 < n__4399__auto___28373))
{(a[x_28374] = (0));
{
var G__28375 = (x_28374 + (1));
x_28374 = G__28375;
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
var G__28376 = (i + (1));
i = G__28376;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t28380 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28380 = (function (flag,alt_flag,meta28381){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28381 = meta28381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28380.cljs$lang$type = true;
cljs.core.async.t28380.cljs$lang$ctorStr = "cljs.core.async/t28380";
cljs.core.async.t28380.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28380");
});})(flag))
;
cljs.core.async.t28380.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t28380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t28380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28382){var self__ = this;
var _28382__$1 = this;return self__.meta28381;
});})(flag))
;
cljs.core.async.t28380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28382,meta28381__$1){var self__ = this;
var _28382__$1 = this;return (new cljs.core.async.t28380(self__.flag,self__.alt_flag,meta28381__$1));
});})(flag))
;
cljs.core.async.__GT_t28380 = ((function (flag){
return (function __GT_t28380(flag__$1,alt_flag__$1,meta28381){return (new cljs.core.async.t28380(flag__$1,alt_flag__$1,meta28381));
});})(flag))
;
}
return (new cljs.core.async.t28380(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t28386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28386 = (function (cb,flag,alt_handler,meta28387){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28387 = meta28387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28386.cljs$lang$type = true;
cljs.core.async.t28386.cljs$lang$ctorStr = "cljs.core.async/t28386";
cljs.core.async.t28386.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28386");
});
cljs.core.async.t28386.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t28386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t28386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28388){var self__ = this;
var _28388__$1 = this;return self__.meta28387;
});
cljs.core.async.t28386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28388,meta28387__$1){var self__ = this;
var _28388__$1 = this;return (new cljs.core.async.t28386(self__.cb,self__.flag,self__.alt_handler,meta28387__$1));
});
cljs.core.async.__GT_t28386 = (function __GT_t28386(cb__$1,flag__$1,alt_handler__$1,meta28387){return (new cljs.core.async.t28386(cb__$1,flag__$1,alt_handler__$1,meta28387));
});
}
return (new cljs.core.async.t28386(cb,flag,alt_handler,null));
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
return (function (p1__28389_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28389_SHARP_,port], null));
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
var G__28390 = (i + (1));
i = G__28390;
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
var alts_BANG___delegate = function (ports,p__28391){var map__28393 = p__28391;var map__28393__$1 = ((cljs.core.seq_QMARK_.call(null,map__28393))?cljs.core.apply.call(null,cljs.core.hash_map,map__28393):map__28393);var opts = map__28393__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__28391 = null;if (arguments.length > 1) {
  p__28391 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__28391);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28394){
var ports = cljs.core.first(arglist__28394);
var p__28391 = cljs.core.rest(arglist__28394);
return alts_BANG___delegate(ports,p__28391);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t28402 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28402 = (function (ch,f,map_LT_,meta28403){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28403 = meta28403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28402.cljs$lang$type = true;
cljs.core.async.t28402.cljs$lang$ctorStr = "cljs.core.async/t28402";
cljs.core.async.t28402.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28402");
});
cljs.core.async.t28402.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t28402.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t28405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28405 = (function (fn1,_,meta28403,ch,f,map_LT_,meta28406){
this.fn1 = fn1;
this._ = _;
this.meta28403 = meta28403;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28406 = meta28406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28405.cljs$lang$type = true;
cljs.core.async.t28405.cljs$lang$ctorStr = "cljs.core.async/t28405";
cljs.core.async.t28405.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28405");
});})(___$1))
;
cljs.core.async.t28405.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28405.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__28395_SHARP_){return f1.call(null,(((p1__28395_SHARP_ == null))?null:self__.f.call(null,p1__28395_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t28405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28407){var self__ = this;
var _28407__$1 = this;return self__.meta28406;
});})(___$1))
;
cljs.core.async.t28405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28407,meta28406__$1){var self__ = this;
var _28407__$1 = this;return (new cljs.core.async.t28405(self__.fn1,self__._,self__.meta28403,self__.ch,self__.f,self__.map_LT_,meta28406__$1));
});})(___$1))
;
cljs.core.async.__GT_t28405 = ((function (___$1){
return (function __GT_t28405(fn1__$1,___$2,meta28403__$1,ch__$2,f__$2,map_LT___$2,meta28406){return (new cljs.core.async.t28405(fn1__$1,___$2,meta28403__$1,ch__$2,f__$2,map_LT___$2,meta28406));
});})(___$1))
;
}
return (new cljs.core.async.t28405(fn1,___$1,self__.meta28403,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t28402.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28404){var self__ = this;
var _28404__$1 = this;return self__.meta28403;
});
cljs.core.async.t28402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28404,meta28403__$1){var self__ = this;
var _28404__$1 = this;return (new cljs.core.async.t28402(self__.ch,self__.f,self__.map_LT_,meta28403__$1));
});
cljs.core.async.__GT_t28402 = (function __GT_t28402(ch__$1,f__$1,map_LT___$1,meta28403){return (new cljs.core.async.t28402(ch__$1,f__$1,map_LT___$1,meta28403));
});
}
return (new cljs.core.async.t28402(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t28411 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28411 = (function (ch,f,map_GT_,meta28412){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28412 = meta28412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28411.cljs$lang$type = true;
cljs.core.async.t28411.cljs$lang$ctorStr = "cljs.core.async/t28411";
cljs.core.async.t28411.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28411");
});
cljs.core.async.t28411.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t28411.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28411.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28413){var self__ = this;
var _28413__$1 = this;return self__.meta28412;
});
cljs.core.async.t28411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28413,meta28412__$1){var self__ = this;
var _28413__$1 = this;return (new cljs.core.async.t28411(self__.ch,self__.f,self__.map_GT_,meta28412__$1));
});
cljs.core.async.__GT_t28411 = (function __GT_t28411(ch__$1,f__$1,map_GT___$1,meta28412){return (new cljs.core.async.t28411(ch__$1,f__$1,map_GT___$1,meta28412));
});
}
return (new cljs.core.async.t28411(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t28417 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28417 = (function (ch,p,filter_GT_,meta28418){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28418 = meta28418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28417.cljs$lang$type = true;
cljs.core.async.t28417.cljs$lang$ctorStr = "cljs.core.async/t28417";
cljs.core.async.t28417.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28417");
});
cljs.core.async.t28417.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t28417.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28417.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28419){var self__ = this;
var _28419__$1 = this;return self__.meta28418;
});
cljs.core.async.t28417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28419,meta28418__$1){var self__ = this;
var _28419__$1 = this;return (new cljs.core.async.t28417(self__.ch,self__.p,self__.filter_GT_,meta28418__$1));
});
cljs.core.async.__GT_t28417 = (function __GT_t28417(ch__$1,p__$1,filter_GT___$1,meta28418){return (new cljs.core.async.t28417(ch__$1,p__$1,filter_GT___$1,meta28418));
});
}
return (new cljs.core.async.t28417(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___28502 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28502,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28502,out){
return (function (state_28481){var state_val_28482 = (state_28481[(1)]);if((state_val_28482 === (7)))
{var inst_28477 = (state_28481[(2)]);var state_28481__$1 = state_28481;var statearr_28483_28503 = state_28481__$1;(statearr_28483_28503[(2)] = inst_28477);
(statearr_28483_28503[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28482 === (1)))
{var state_28481__$1 = state_28481;var statearr_28484_28504 = state_28481__$1;(statearr_28484_28504[(2)] = null);
(statearr_28484_28504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28482 === (4)))
{var inst_28463 = (state_28481[(7)]);var inst_28463__$1 = (state_28481[(2)]);var inst_28464 = (inst_28463__$1 == null);var state_28481__$1 = (function (){var statearr_28485 = state_28481;(statearr_28485[(7)] = inst_28463__$1);
return statearr_28485;
})();if(cljs.core.truth_(inst_28464))
{var statearr_28486_28505 = state_28481__$1;(statearr_28486_28505[(1)] = (5));
} else
{var statearr_28487_28506 = state_28481__$1;(statearr_28487_28506[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28482 === (6)))
{var inst_28463 = (state_28481[(7)]);var inst_28468 = p.call(null,inst_28463);var state_28481__$1 = state_28481;if(cljs.core.truth_(inst_28468))
{var statearr_28488_28507 = state_28481__$1;(statearr_28488_28507[(1)] = (8));
} else
{var statearr_28489_28508 = state_28481__$1;(statearr_28489_28508[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28482 === (3)))
{var inst_28479 = (state_28481[(2)]);var state_28481__$1 = state_28481;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28481__$1,inst_28479);
} else
{if((state_val_28482 === (2)))
{var state_28481__$1 = state_28481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28481__$1,(4),ch);
} else
{if((state_val_28482 === (11)))
{var inst_28471 = (state_28481[(2)]);var state_28481__$1 = state_28481;var statearr_28490_28509 = state_28481__$1;(statearr_28490_28509[(2)] = inst_28471);
(statearr_28490_28509[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28482 === (9)))
{var state_28481__$1 = state_28481;var statearr_28491_28510 = state_28481__$1;(statearr_28491_28510[(2)] = null);
(statearr_28491_28510[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28482 === (5)))
{var inst_28466 = cljs.core.async.close_BANG_.call(null,out);var state_28481__$1 = state_28481;var statearr_28492_28511 = state_28481__$1;(statearr_28492_28511[(2)] = inst_28466);
(statearr_28492_28511[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28482 === (10)))
{var inst_28474 = (state_28481[(2)]);var state_28481__$1 = (function (){var statearr_28493 = state_28481;(statearr_28493[(8)] = inst_28474);
return statearr_28493;
})();var statearr_28494_28512 = state_28481__$1;(statearr_28494_28512[(2)] = null);
(statearr_28494_28512[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28482 === (8)))
{var inst_28463 = (state_28481[(7)]);var state_28481__$1 = state_28481;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28481__$1,(11),out,inst_28463);
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
});})(c__5693__auto___28502,out))
;return ((function (switch__5678__auto__,c__5693__auto___28502,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28498 = [null,null,null,null,null,null,null,null,null];(statearr_28498[(0)] = state_machine__5679__auto__);
(statearr_28498[(1)] = (1));
return statearr_28498;
});
var state_machine__5679__auto____1 = (function (state_28481){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28481);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28499){if((e28499 instanceof Object))
{var ex__5682__auto__ = e28499;var statearr_28500_28513 = state_28481;(statearr_28500_28513[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28481);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28499;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28514 = state_28481;
state_28481 = G__28514;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28481){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28502,out))
})();var state__5695__auto__ = (function (){var statearr_28501 = f__5694__auto__.call(null);(statearr_28501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28502);
return statearr_28501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28502,out))
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
return (function (state_28666){var state_val_28667 = (state_28666[(1)]);if((state_val_28667 === (7)))
{var inst_28662 = (state_28666[(2)]);var state_28666__$1 = state_28666;var statearr_28668_28705 = state_28666__$1;(statearr_28668_28705[(2)] = inst_28662);
(statearr_28668_28705[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (20)))
{var inst_28637 = (state_28666[(7)]);var inst_28648 = (state_28666[(2)]);var inst_28649 = cljs.core.next.call(null,inst_28637);var inst_28623 = inst_28649;var inst_28624 = null;var inst_28625 = (0);var inst_28626 = (0);var state_28666__$1 = (function (){var statearr_28669 = state_28666;(statearr_28669[(8)] = inst_28648);
(statearr_28669[(9)] = inst_28626);
(statearr_28669[(10)] = inst_28625);
(statearr_28669[(11)] = inst_28624);
(statearr_28669[(12)] = inst_28623);
return statearr_28669;
})();var statearr_28670_28706 = state_28666__$1;(statearr_28670_28706[(2)] = null);
(statearr_28670_28706[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (1)))
{var state_28666__$1 = state_28666;var statearr_28671_28707 = state_28666__$1;(statearr_28671_28707[(2)] = null);
(statearr_28671_28707[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (4)))
{var inst_28612 = (state_28666[(13)]);var inst_28612__$1 = (state_28666[(2)]);var inst_28613 = (inst_28612__$1 == null);var state_28666__$1 = (function (){var statearr_28675 = state_28666;(statearr_28675[(13)] = inst_28612__$1);
return statearr_28675;
})();if(cljs.core.truth_(inst_28613))
{var statearr_28676_28708 = state_28666__$1;(statearr_28676_28708[(1)] = (5));
} else
{var statearr_28677_28709 = state_28666__$1;(statearr_28677_28709[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (15)))
{var state_28666__$1 = state_28666;var statearr_28678_28710 = state_28666__$1;(statearr_28678_28710[(2)] = null);
(statearr_28678_28710[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (13)))
{var inst_28626 = (state_28666[(9)]);var inst_28625 = (state_28666[(10)]);var inst_28624 = (state_28666[(11)]);var inst_28623 = (state_28666[(12)]);var inst_28633 = (state_28666[(2)]);var inst_28634 = (inst_28626 + (1));var tmp28672 = inst_28625;var tmp28673 = inst_28624;var tmp28674 = inst_28623;var inst_28623__$1 = tmp28674;var inst_28624__$1 = tmp28673;var inst_28625__$1 = tmp28672;var inst_28626__$1 = inst_28634;var state_28666__$1 = (function (){var statearr_28679 = state_28666;(statearr_28679[(9)] = inst_28626__$1);
(statearr_28679[(10)] = inst_28625__$1);
(statearr_28679[(11)] = inst_28624__$1);
(statearr_28679[(14)] = inst_28633);
(statearr_28679[(12)] = inst_28623__$1);
return statearr_28679;
})();var statearr_28680_28711 = state_28666__$1;(statearr_28680_28711[(2)] = null);
(statearr_28680_28711[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (6)))
{var inst_28612 = (state_28666[(13)]);var inst_28617 = f.call(null,inst_28612);var inst_28622 = cljs.core.seq.call(null,inst_28617);var inst_28623 = inst_28622;var inst_28624 = null;var inst_28625 = (0);var inst_28626 = (0);var state_28666__$1 = (function (){var statearr_28681 = state_28666;(statearr_28681[(9)] = inst_28626);
(statearr_28681[(10)] = inst_28625);
(statearr_28681[(11)] = inst_28624);
(statearr_28681[(12)] = inst_28623);
return statearr_28681;
})();var statearr_28682_28712 = state_28666__$1;(statearr_28682_28712[(2)] = null);
(statearr_28682_28712[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (17)))
{var inst_28637 = (state_28666[(7)]);var inst_28641 = cljs.core.chunk_first.call(null,inst_28637);var inst_28642 = cljs.core.chunk_rest.call(null,inst_28637);var inst_28643 = cljs.core.count.call(null,inst_28641);var inst_28623 = inst_28642;var inst_28624 = inst_28641;var inst_28625 = inst_28643;var inst_28626 = (0);var state_28666__$1 = (function (){var statearr_28683 = state_28666;(statearr_28683[(9)] = inst_28626);
(statearr_28683[(10)] = inst_28625);
(statearr_28683[(11)] = inst_28624);
(statearr_28683[(12)] = inst_28623);
return statearr_28683;
})();var statearr_28684_28713 = state_28666__$1;(statearr_28684_28713[(2)] = null);
(statearr_28684_28713[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (3)))
{var inst_28664 = (state_28666[(2)]);var state_28666__$1 = state_28666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28666__$1,inst_28664);
} else
{if((state_val_28667 === (12)))
{var inst_28657 = (state_28666[(2)]);var state_28666__$1 = state_28666;var statearr_28685_28714 = state_28666__$1;(statearr_28685_28714[(2)] = inst_28657);
(statearr_28685_28714[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (2)))
{var state_28666__$1 = state_28666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28666__$1,(4),in$);
} else
{if((state_val_28667 === (19)))
{var inst_28652 = (state_28666[(2)]);var state_28666__$1 = state_28666;var statearr_28686_28715 = state_28666__$1;(statearr_28686_28715[(2)] = inst_28652);
(statearr_28686_28715[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (11)))
{var inst_28637 = (state_28666[(7)]);var inst_28623 = (state_28666[(12)]);var inst_28637__$1 = cljs.core.seq.call(null,inst_28623);var state_28666__$1 = (function (){var statearr_28687 = state_28666;(statearr_28687[(7)] = inst_28637__$1);
return statearr_28687;
})();if(inst_28637__$1)
{var statearr_28688_28716 = state_28666__$1;(statearr_28688_28716[(1)] = (14));
} else
{var statearr_28689_28717 = state_28666__$1;(statearr_28689_28717[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (9)))
{var inst_28659 = (state_28666[(2)]);var state_28666__$1 = (function (){var statearr_28690 = state_28666;(statearr_28690[(15)] = inst_28659);
return statearr_28690;
})();var statearr_28691_28718 = state_28666__$1;(statearr_28691_28718[(2)] = null);
(statearr_28691_28718[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (5)))
{var inst_28615 = cljs.core.async.close_BANG_.call(null,out);var state_28666__$1 = state_28666;var statearr_28692_28719 = state_28666__$1;(statearr_28692_28719[(2)] = inst_28615);
(statearr_28692_28719[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (14)))
{var inst_28637 = (state_28666[(7)]);var inst_28639 = cljs.core.chunked_seq_QMARK_.call(null,inst_28637);var state_28666__$1 = state_28666;if(inst_28639)
{var statearr_28693_28720 = state_28666__$1;(statearr_28693_28720[(1)] = (17));
} else
{var statearr_28694_28721 = state_28666__$1;(statearr_28694_28721[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (16)))
{var inst_28655 = (state_28666[(2)]);var state_28666__$1 = state_28666;var statearr_28695_28722 = state_28666__$1;(statearr_28695_28722[(2)] = inst_28655);
(statearr_28695_28722[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28667 === (10)))
{var inst_28626 = (state_28666[(9)]);var inst_28624 = (state_28666[(11)]);var inst_28631 = cljs.core._nth.call(null,inst_28624,inst_28626);var state_28666__$1 = state_28666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28666__$1,(13),out,inst_28631);
} else
{if((state_val_28667 === (18)))
{var inst_28637 = (state_28666[(7)]);var inst_28646 = cljs.core.first.call(null,inst_28637);var state_28666__$1 = state_28666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28666__$1,(20),out,inst_28646);
} else
{if((state_val_28667 === (8)))
{var inst_28626 = (state_28666[(9)]);var inst_28625 = (state_28666[(10)]);var inst_28628 = (inst_28626 < inst_28625);var inst_28629 = inst_28628;var state_28666__$1 = state_28666;if(cljs.core.truth_(inst_28629))
{var statearr_28696_28723 = state_28666__$1;(statearr_28696_28723[(1)] = (10));
} else
{var statearr_28697_28724 = state_28666__$1;(statearr_28697_28724[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_28701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28701[(0)] = state_machine__5679__auto__);
(statearr_28701[(1)] = (1));
return statearr_28701;
});
var state_machine__5679__auto____1 = (function (state_28666){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28666);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28702){if((e28702 instanceof Object))
{var ex__5682__auto__ = e28702;var statearr_28703_28725 = state_28666;(statearr_28703_28725[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28666);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28702;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28726 = state_28666;
state_28666 = G__28726;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28666){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_28704 = f__5694__auto__.call(null);(statearr_28704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_28704;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___28807 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28807){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28807){
return (function (state_28786){var state_val_28787 = (state_28786[(1)]);if((state_val_28787 === (7)))
{var inst_28782 = (state_28786[(2)]);var state_28786__$1 = state_28786;var statearr_28788_28808 = state_28786__$1;(statearr_28788_28808[(2)] = inst_28782);
(statearr_28788_28808[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28787 === (1)))
{var state_28786__$1 = state_28786;var statearr_28789_28809 = state_28786__$1;(statearr_28789_28809[(2)] = null);
(statearr_28789_28809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28787 === (4)))
{var inst_28769 = (state_28786[(7)]);var inst_28769__$1 = (state_28786[(2)]);var inst_28770 = (inst_28769__$1 == null);var state_28786__$1 = (function (){var statearr_28790 = state_28786;(statearr_28790[(7)] = inst_28769__$1);
return statearr_28790;
})();if(cljs.core.truth_(inst_28770))
{var statearr_28791_28810 = state_28786__$1;(statearr_28791_28810[(1)] = (5));
} else
{var statearr_28792_28811 = state_28786__$1;(statearr_28792_28811[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28787 === (6)))
{var inst_28769 = (state_28786[(7)]);var state_28786__$1 = state_28786;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28786__$1,(11),to,inst_28769);
} else
{if((state_val_28787 === (3)))
{var inst_28784 = (state_28786[(2)]);var state_28786__$1 = state_28786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28786__$1,inst_28784);
} else
{if((state_val_28787 === (2)))
{var state_28786__$1 = state_28786;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28786__$1,(4),from);
} else
{if((state_val_28787 === (11)))
{var inst_28779 = (state_28786[(2)]);var state_28786__$1 = (function (){var statearr_28793 = state_28786;(statearr_28793[(8)] = inst_28779);
return statearr_28793;
})();var statearr_28794_28812 = state_28786__$1;(statearr_28794_28812[(2)] = null);
(statearr_28794_28812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28787 === (9)))
{var state_28786__$1 = state_28786;var statearr_28795_28813 = state_28786__$1;(statearr_28795_28813[(2)] = null);
(statearr_28795_28813[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28787 === (5)))
{var state_28786__$1 = state_28786;if(cljs.core.truth_(close_QMARK_))
{var statearr_28796_28814 = state_28786__$1;(statearr_28796_28814[(1)] = (8));
} else
{var statearr_28797_28815 = state_28786__$1;(statearr_28797_28815[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28787 === (10)))
{var inst_28776 = (state_28786[(2)]);var state_28786__$1 = state_28786;var statearr_28798_28816 = state_28786__$1;(statearr_28798_28816[(2)] = inst_28776);
(statearr_28798_28816[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28787 === (8)))
{var inst_28773 = cljs.core.async.close_BANG_.call(null,to);var state_28786__$1 = state_28786;var statearr_28799_28817 = state_28786__$1;(statearr_28799_28817[(2)] = inst_28773);
(statearr_28799_28817[(1)] = (10));
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
});})(c__5693__auto___28807))
;return ((function (switch__5678__auto__,c__5693__auto___28807){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28803 = [null,null,null,null,null,null,null,null,null];(statearr_28803[(0)] = state_machine__5679__auto__);
(statearr_28803[(1)] = (1));
return statearr_28803;
});
var state_machine__5679__auto____1 = (function (state_28786){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28786);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28804){if((e28804 instanceof Object))
{var ex__5682__auto__ = e28804;var statearr_28805_28818 = state_28786;(statearr_28805_28818[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28786);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28819 = state_28786;
state_28786 = G__28819;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28786){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28807))
})();var state__5695__auto__ = (function (){var statearr_28806 = f__5694__auto__.call(null);(statearr_28806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28807);
return statearr_28806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28807))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___28906 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28906,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28906,tc,fc){
return (function (state_28884){var state_val_28885 = (state_28884[(1)]);if((state_val_28885 === (7)))
{var inst_28880 = (state_28884[(2)]);var state_28884__$1 = state_28884;var statearr_28886_28907 = state_28884__$1;(statearr_28886_28907[(2)] = inst_28880);
(statearr_28886_28907[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (1)))
{var state_28884__$1 = state_28884;var statearr_28887_28908 = state_28884__$1;(statearr_28887_28908[(2)] = null);
(statearr_28887_28908[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (4)))
{var inst_28865 = (state_28884[(7)]);var inst_28865__$1 = (state_28884[(2)]);var inst_28866 = (inst_28865__$1 == null);var state_28884__$1 = (function (){var statearr_28888 = state_28884;(statearr_28888[(7)] = inst_28865__$1);
return statearr_28888;
})();if(cljs.core.truth_(inst_28866))
{var statearr_28889_28909 = state_28884__$1;(statearr_28889_28909[(1)] = (5));
} else
{var statearr_28890_28910 = state_28884__$1;(statearr_28890_28910[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (6)))
{var inst_28865 = (state_28884[(7)]);var inst_28871 = p.call(null,inst_28865);var state_28884__$1 = state_28884;if(cljs.core.truth_(inst_28871))
{var statearr_28891_28911 = state_28884__$1;(statearr_28891_28911[(1)] = (9));
} else
{var statearr_28892_28912 = state_28884__$1;(statearr_28892_28912[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (3)))
{var inst_28882 = (state_28884[(2)]);var state_28884__$1 = state_28884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28884__$1,inst_28882);
} else
{if((state_val_28885 === (2)))
{var state_28884__$1 = state_28884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28884__$1,(4),ch);
} else
{if((state_val_28885 === (11)))
{var inst_28865 = (state_28884[(7)]);var inst_28875 = (state_28884[(2)]);var state_28884__$1 = state_28884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28884__$1,(8),inst_28875,inst_28865);
} else
{if((state_val_28885 === (9)))
{var state_28884__$1 = state_28884;var statearr_28893_28913 = state_28884__$1;(statearr_28893_28913[(2)] = tc);
(statearr_28893_28913[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (5)))
{var inst_28868 = cljs.core.async.close_BANG_.call(null,tc);var inst_28869 = cljs.core.async.close_BANG_.call(null,fc);var state_28884__$1 = (function (){var statearr_28894 = state_28884;(statearr_28894[(8)] = inst_28868);
return statearr_28894;
})();var statearr_28895_28914 = state_28884__$1;(statearr_28895_28914[(2)] = inst_28869);
(statearr_28895_28914[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (10)))
{var state_28884__$1 = state_28884;var statearr_28896_28915 = state_28884__$1;(statearr_28896_28915[(2)] = fc);
(statearr_28896_28915[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (8)))
{var inst_28877 = (state_28884[(2)]);var state_28884__$1 = (function (){var statearr_28897 = state_28884;(statearr_28897[(9)] = inst_28877);
return statearr_28897;
})();var statearr_28898_28916 = state_28884__$1;(statearr_28898_28916[(2)] = null);
(statearr_28898_28916[(1)] = (2));
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
});})(c__5693__auto___28906,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___28906,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28902 = [null,null,null,null,null,null,null,null,null,null];(statearr_28902[(0)] = state_machine__5679__auto__);
(statearr_28902[(1)] = (1));
return statearr_28902;
});
var state_machine__5679__auto____1 = (function (state_28884){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28884);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28903){if((e28903 instanceof Object))
{var ex__5682__auto__ = e28903;var statearr_28904_28917 = state_28884;(statearr_28904_28917[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28918 = state_28884;
state_28884 = G__28918;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28884){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28906,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_28905 = f__5694__auto__.call(null);(statearr_28905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28906);
return statearr_28905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28906,tc,fc))
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
return (function (state_28965){var state_val_28966 = (state_28965[(1)]);if((state_val_28966 === (7)))
{var inst_28961 = (state_28965[(2)]);var state_28965__$1 = state_28965;var statearr_28967_28983 = state_28965__$1;(statearr_28967_28983[(2)] = inst_28961);
(statearr_28967_28983[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28966 === (6)))
{var inst_28951 = (state_28965[(7)]);var inst_28954 = (state_28965[(8)]);var inst_28958 = f.call(null,inst_28951,inst_28954);var inst_28951__$1 = inst_28958;var state_28965__$1 = (function (){var statearr_28968 = state_28965;(statearr_28968[(7)] = inst_28951__$1);
return statearr_28968;
})();var statearr_28969_28984 = state_28965__$1;(statearr_28969_28984[(2)] = null);
(statearr_28969_28984[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28966 === (5)))
{var inst_28951 = (state_28965[(7)]);var state_28965__$1 = state_28965;var statearr_28970_28985 = state_28965__$1;(statearr_28970_28985[(2)] = inst_28951);
(statearr_28970_28985[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28966 === (4)))
{var inst_28954 = (state_28965[(8)]);var inst_28954__$1 = (state_28965[(2)]);var inst_28955 = (inst_28954__$1 == null);var state_28965__$1 = (function (){var statearr_28971 = state_28965;(statearr_28971[(8)] = inst_28954__$1);
return statearr_28971;
})();if(cljs.core.truth_(inst_28955))
{var statearr_28972_28986 = state_28965__$1;(statearr_28972_28986[(1)] = (5));
} else
{var statearr_28973_28987 = state_28965__$1;(statearr_28973_28987[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28966 === (3)))
{var inst_28963 = (state_28965[(2)]);var state_28965__$1 = state_28965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28965__$1,inst_28963);
} else
{if((state_val_28966 === (2)))
{var state_28965__$1 = state_28965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28965__$1,(4),ch);
} else
{if((state_val_28966 === (1)))
{var inst_28951 = init;var state_28965__$1 = (function (){var statearr_28974 = state_28965;(statearr_28974[(7)] = inst_28951);
return statearr_28974;
})();var statearr_28975_28988 = state_28965__$1;(statearr_28975_28988[(2)] = null);
(statearr_28975_28988[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_28979 = [null,null,null,null,null,null,null,null,null];(statearr_28979[(0)] = state_machine__5679__auto__);
(statearr_28979[(1)] = (1));
return statearr_28979;
});
var state_machine__5679__auto____1 = (function (state_28965){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28965);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28980){if((e28980 instanceof Object))
{var ex__5682__auto__ = e28980;var statearr_28981_28989 = state_28965;(statearr_28981_28989[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28965);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28980;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28990 = state_28965;
state_28965 = G__28990;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28965){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_28982 = f__5694__auto__.call(null);(statearr_28982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_28982;
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
return (function (state_29052){var state_val_29053 = (state_29052[(1)]);if((state_val_29053 === (7)))
{var inst_29033 = (state_29052[(7)]);var inst_29038 = (state_29052[(2)]);var inst_29039 = cljs.core.next.call(null,inst_29033);var inst_29033__$1 = inst_29039;var state_29052__$1 = (function (){var statearr_29054 = state_29052;(statearr_29054[(7)] = inst_29033__$1);
(statearr_29054[(8)] = inst_29038);
return statearr_29054;
})();var statearr_29055_29073 = state_29052__$1;(statearr_29055_29073[(2)] = null);
(statearr_29055_29073[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29053 === (1)))
{var inst_29032 = cljs.core.seq.call(null,coll);var inst_29033 = inst_29032;var state_29052__$1 = (function (){var statearr_29056 = state_29052;(statearr_29056[(7)] = inst_29033);
return statearr_29056;
})();var statearr_29057_29074 = state_29052__$1;(statearr_29057_29074[(2)] = null);
(statearr_29057_29074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29053 === (4)))
{var inst_29033 = (state_29052[(7)]);var inst_29036 = cljs.core.first.call(null,inst_29033);var state_29052__$1 = state_29052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29052__$1,(7),ch,inst_29036);
} else
{if((state_val_29053 === (6)))
{var inst_29048 = (state_29052[(2)]);var state_29052__$1 = state_29052;var statearr_29058_29075 = state_29052__$1;(statearr_29058_29075[(2)] = inst_29048);
(statearr_29058_29075[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29053 === (3)))
{var inst_29050 = (state_29052[(2)]);var state_29052__$1 = state_29052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29052__$1,inst_29050);
} else
{if((state_val_29053 === (2)))
{var inst_29033 = (state_29052[(7)]);var state_29052__$1 = state_29052;if(cljs.core.truth_(inst_29033))
{var statearr_29059_29076 = state_29052__$1;(statearr_29059_29076[(1)] = (4));
} else
{var statearr_29060_29077 = state_29052__$1;(statearr_29060_29077[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29053 === (9)))
{var state_29052__$1 = state_29052;var statearr_29061_29078 = state_29052__$1;(statearr_29061_29078[(2)] = null);
(statearr_29061_29078[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29053 === (5)))
{var state_29052__$1 = state_29052;if(cljs.core.truth_(close_QMARK_))
{var statearr_29062_29079 = state_29052__$1;(statearr_29062_29079[(1)] = (8));
} else
{var statearr_29063_29080 = state_29052__$1;(statearr_29063_29080[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29053 === (10)))
{var inst_29046 = (state_29052[(2)]);var state_29052__$1 = state_29052;var statearr_29064_29081 = state_29052__$1;(statearr_29064_29081[(2)] = inst_29046);
(statearr_29064_29081[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29053 === (8)))
{var inst_29043 = cljs.core.async.close_BANG_.call(null,ch);var state_29052__$1 = state_29052;var statearr_29065_29082 = state_29052__$1;(statearr_29065_29082[(2)] = inst_29043);
(statearr_29065_29082[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_29069 = [null,null,null,null,null,null,null,null,null];(statearr_29069[(0)] = state_machine__5679__auto__);
(statearr_29069[(1)] = (1));
return statearr_29069;
});
var state_machine__5679__auto____1 = (function (state_29052){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29052);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29070){if((e29070 instanceof Object))
{var ex__5682__auto__ = e29070;var statearr_29071_29083 = state_29052;(statearr_29071_29083[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29052);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29084 = state_29052;
state_29052 = G__29084;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29052){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_29072 = f__5694__auto__.call(null);(statearr_29072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_29072;
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
cljs.core.async.Mux = (function (){var obj29086 = {};return obj29086;
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
cljs.core.async.Mult = (function (){var obj29088 = {};return obj29088;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t29312 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29312 = (function (cs,ch,mult,meta29313){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29313 = meta29313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29312.cljs$lang$type = true;
cljs.core.async.t29312.cljs$lang$ctorStr = "cljs.core.async/t29312";
cljs.core.async.t29312.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t29312");
});})(cs))
;
cljs.core.async.t29312.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t29312.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t29312.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t29312.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t29312.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29312.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t29312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29314){var self__ = this;
var _29314__$1 = this;return self__.meta29313;
});})(cs))
;
cljs.core.async.t29312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29314,meta29313__$1){var self__ = this;
var _29314__$1 = this;return (new cljs.core.async.t29312(self__.cs,self__.ch,self__.mult,meta29313__$1));
});})(cs))
;
cljs.core.async.__GT_t29312 = ((function (cs){
return (function __GT_t29312(cs__$1,ch__$1,mult__$1,meta29313){return (new cljs.core.async.t29312(cs__$1,ch__$1,mult__$1,meta29313));
});})(cs))
;
}
return (new cljs.core.async.t29312(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___29535 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29535,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29535,cs,m,dchan,dctr,done){
return (function (state_29449){var state_val_29450 = (state_29449[(1)]);if((state_val_29450 === (7)))
{var inst_29445 = (state_29449[(2)]);var state_29449__$1 = state_29449;var statearr_29451_29536 = state_29449__$1;(statearr_29451_29536[(2)] = inst_29445);
(statearr_29451_29536[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (20)))
{var inst_29346 = (state_29449[(7)]);var inst_29356 = cljs.core.first.call(null,inst_29346);var inst_29357 = cljs.core.nth.call(null,inst_29356,(0),null);var inst_29358 = cljs.core.nth.call(null,inst_29356,(1),null);var state_29449__$1 = (function (){var statearr_29452 = state_29449;(statearr_29452[(8)] = inst_29357);
return statearr_29452;
})();if(cljs.core.truth_(inst_29358))
{var statearr_29453_29537 = state_29449__$1;(statearr_29453_29537[(1)] = (22));
} else
{var statearr_29454_29538 = state_29449__$1;(statearr_29454_29538[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (27)))
{var inst_29386 = (state_29449[(9)]);var inst_29388 = (state_29449[(10)]);var inst_29393 = cljs.core._nth.call(null,inst_29386,inst_29388);var state_29449__$1 = (function (){var statearr_29455 = state_29449;(statearr_29455[(11)] = inst_29393);
return statearr_29455;
})();var statearr_29456_29539 = state_29449__$1;(statearr_29456_29539[(2)] = null);
(statearr_29456_29539[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (1)))
{var state_29449__$1 = state_29449;var statearr_29457_29540 = state_29449__$1;(statearr_29457_29540[(2)] = null);
(statearr_29457_29540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (24)))
{var inst_29346 = (state_29449[(7)]);var inst_29363 = (state_29449[(2)]);var inst_29364 = cljs.core.next.call(null,inst_29346);var inst_29326 = inst_29364;var inst_29327 = null;var inst_29328 = (0);var inst_29329 = (0);var state_29449__$1 = (function (){var statearr_29458 = state_29449;(statearr_29458[(12)] = inst_29327);
(statearr_29458[(13)] = inst_29328);
(statearr_29458[(14)] = inst_29329);
(statearr_29458[(15)] = inst_29326);
(statearr_29458[(16)] = inst_29363);
return statearr_29458;
})();var statearr_29459_29541 = state_29449__$1;(statearr_29459_29541[(2)] = null);
(statearr_29459_29541[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (39)))
{var inst_29406 = (state_29449[(17)]);var inst_29424 = (state_29449[(2)]);var inst_29425 = cljs.core.next.call(null,inst_29406);var inst_29385 = inst_29425;var inst_29386 = null;var inst_29387 = (0);var inst_29388 = (0);var state_29449__$1 = (function (){var statearr_29463 = state_29449;(statearr_29463[(18)] = inst_29424);
(statearr_29463[(19)] = inst_29387);
(statearr_29463[(9)] = inst_29386);
(statearr_29463[(10)] = inst_29388);
(statearr_29463[(20)] = inst_29385);
return statearr_29463;
})();var statearr_29464_29542 = state_29449__$1;(statearr_29464_29542[(2)] = null);
(statearr_29464_29542[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (4)))
{var inst_29317 = (state_29449[(21)]);var inst_29317__$1 = (state_29449[(2)]);var inst_29318 = (inst_29317__$1 == null);var state_29449__$1 = (function (){var statearr_29465 = state_29449;(statearr_29465[(21)] = inst_29317__$1);
return statearr_29465;
})();if(cljs.core.truth_(inst_29318))
{var statearr_29466_29543 = state_29449__$1;(statearr_29466_29543[(1)] = (5));
} else
{var statearr_29467_29544 = state_29449__$1;(statearr_29467_29544[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (15)))
{var inst_29327 = (state_29449[(12)]);var inst_29328 = (state_29449[(13)]);var inst_29329 = (state_29449[(14)]);var inst_29326 = (state_29449[(15)]);var inst_29342 = (state_29449[(2)]);var inst_29343 = (inst_29329 + (1));var tmp29460 = inst_29327;var tmp29461 = inst_29328;var tmp29462 = inst_29326;var inst_29326__$1 = tmp29462;var inst_29327__$1 = tmp29460;var inst_29328__$1 = tmp29461;var inst_29329__$1 = inst_29343;var state_29449__$1 = (function (){var statearr_29468 = state_29449;(statearr_29468[(12)] = inst_29327__$1);
(statearr_29468[(13)] = inst_29328__$1);
(statearr_29468[(14)] = inst_29329__$1);
(statearr_29468[(15)] = inst_29326__$1);
(statearr_29468[(22)] = inst_29342);
return statearr_29468;
})();var statearr_29469_29545 = state_29449__$1;(statearr_29469_29545[(2)] = null);
(statearr_29469_29545[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (21)))
{var inst_29367 = (state_29449[(2)]);var state_29449__$1 = state_29449;var statearr_29470_29546 = state_29449__$1;(statearr_29470_29546[(2)] = inst_29367);
(statearr_29470_29546[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (31)))
{var inst_29393 = (state_29449[(11)]);var inst_29394 = (state_29449[(2)]);var inst_29395 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29396 = cljs.core.async.untap_STAR_.call(null,m,inst_29393);var state_29449__$1 = (function (){var statearr_29471 = state_29449;(statearr_29471[(23)] = inst_29395);
(statearr_29471[(24)] = inst_29394);
return statearr_29471;
})();var statearr_29472_29547 = state_29449__$1;(statearr_29472_29547[(2)] = inst_29396);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29449__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (32)))
{var inst_29393 = (state_29449[(11)]);var inst_29317 = (state_29449[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29449,(31),Object,null,(30));var inst_29400 = cljs.core.async.put_BANG_.call(null,inst_29393,inst_29317,done);var state_29449__$1 = state_29449;var statearr_29473_29548 = state_29449__$1;(statearr_29473_29548[(2)] = inst_29400);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29449__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (40)))
{var inst_29415 = (state_29449[(25)]);var inst_29416 = (state_29449[(2)]);var inst_29417 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29418 = cljs.core.async.untap_STAR_.call(null,m,inst_29415);var state_29449__$1 = (function (){var statearr_29474 = state_29449;(statearr_29474[(26)] = inst_29417);
(statearr_29474[(27)] = inst_29416);
return statearr_29474;
})();var statearr_29475_29549 = state_29449__$1;(statearr_29475_29549[(2)] = inst_29418);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29449__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (33)))
{var inst_29406 = (state_29449[(17)]);var inst_29408 = cljs.core.chunked_seq_QMARK_.call(null,inst_29406);var state_29449__$1 = state_29449;if(inst_29408)
{var statearr_29476_29550 = state_29449__$1;(statearr_29476_29550[(1)] = (36));
} else
{var statearr_29477_29551 = state_29449__$1;(statearr_29477_29551[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (13)))
{var inst_29336 = (state_29449[(28)]);var inst_29339 = cljs.core.async.close_BANG_.call(null,inst_29336);var state_29449__$1 = state_29449;var statearr_29478_29552 = state_29449__$1;(statearr_29478_29552[(2)] = inst_29339);
(statearr_29478_29552[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (22)))
{var inst_29357 = (state_29449[(8)]);var inst_29360 = cljs.core.async.close_BANG_.call(null,inst_29357);var state_29449__$1 = state_29449;var statearr_29479_29553 = state_29449__$1;(statearr_29479_29553[(2)] = inst_29360);
(statearr_29479_29553[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (36)))
{var inst_29406 = (state_29449[(17)]);var inst_29410 = cljs.core.chunk_first.call(null,inst_29406);var inst_29411 = cljs.core.chunk_rest.call(null,inst_29406);var inst_29412 = cljs.core.count.call(null,inst_29410);var inst_29385 = inst_29411;var inst_29386 = inst_29410;var inst_29387 = inst_29412;var inst_29388 = (0);var state_29449__$1 = (function (){var statearr_29480 = state_29449;(statearr_29480[(19)] = inst_29387);
(statearr_29480[(9)] = inst_29386);
(statearr_29480[(10)] = inst_29388);
(statearr_29480[(20)] = inst_29385);
return statearr_29480;
})();var statearr_29481_29554 = state_29449__$1;(statearr_29481_29554[(2)] = null);
(statearr_29481_29554[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (41)))
{var inst_29317 = (state_29449[(21)]);var inst_29415 = (state_29449[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29449,(40),Object,null,(39));var inst_29422 = cljs.core.async.put_BANG_.call(null,inst_29415,inst_29317,done);var state_29449__$1 = state_29449;var statearr_29482_29555 = state_29449__$1;(statearr_29482_29555[(2)] = inst_29422);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29449__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (43)))
{var state_29449__$1 = state_29449;var statearr_29483_29556 = state_29449__$1;(statearr_29483_29556[(2)] = null);
(statearr_29483_29556[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (29)))
{var inst_29433 = (state_29449[(2)]);var state_29449__$1 = state_29449;var statearr_29484_29557 = state_29449__$1;(statearr_29484_29557[(2)] = inst_29433);
(statearr_29484_29557[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (44)))
{var inst_29442 = (state_29449[(2)]);var state_29449__$1 = (function (){var statearr_29485 = state_29449;(statearr_29485[(29)] = inst_29442);
return statearr_29485;
})();var statearr_29486_29558 = state_29449__$1;(statearr_29486_29558[(2)] = null);
(statearr_29486_29558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (6)))
{var inst_29377 = (state_29449[(30)]);var inst_29376 = cljs.core.deref.call(null,cs);var inst_29377__$1 = cljs.core.keys.call(null,inst_29376);var inst_29378 = cljs.core.count.call(null,inst_29377__$1);var inst_29379 = cljs.core.reset_BANG_.call(null,dctr,inst_29378);var inst_29384 = cljs.core.seq.call(null,inst_29377__$1);var inst_29385 = inst_29384;var inst_29386 = null;var inst_29387 = (0);var inst_29388 = (0);var state_29449__$1 = (function (){var statearr_29487 = state_29449;(statearr_29487[(30)] = inst_29377__$1);
(statearr_29487[(19)] = inst_29387);
(statearr_29487[(31)] = inst_29379);
(statearr_29487[(9)] = inst_29386);
(statearr_29487[(10)] = inst_29388);
(statearr_29487[(20)] = inst_29385);
return statearr_29487;
})();var statearr_29488_29559 = state_29449__$1;(statearr_29488_29559[(2)] = null);
(statearr_29488_29559[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (28)))
{var inst_29406 = (state_29449[(17)]);var inst_29385 = (state_29449[(20)]);var inst_29406__$1 = cljs.core.seq.call(null,inst_29385);var state_29449__$1 = (function (){var statearr_29489 = state_29449;(statearr_29489[(17)] = inst_29406__$1);
return statearr_29489;
})();if(inst_29406__$1)
{var statearr_29490_29560 = state_29449__$1;(statearr_29490_29560[(1)] = (33));
} else
{var statearr_29491_29561 = state_29449__$1;(statearr_29491_29561[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (25)))
{var inst_29387 = (state_29449[(19)]);var inst_29388 = (state_29449[(10)]);var inst_29390 = (inst_29388 < inst_29387);var inst_29391 = inst_29390;var state_29449__$1 = state_29449;if(cljs.core.truth_(inst_29391))
{var statearr_29492_29562 = state_29449__$1;(statearr_29492_29562[(1)] = (27));
} else
{var statearr_29493_29563 = state_29449__$1;(statearr_29493_29563[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (34)))
{var state_29449__$1 = state_29449;var statearr_29494_29564 = state_29449__$1;(statearr_29494_29564[(2)] = null);
(statearr_29494_29564[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (17)))
{var state_29449__$1 = state_29449;var statearr_29495_29565 = state_29449__$1;(statearr_29495_29565[(2)] = null);
(statearr_29495_29565[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (3)))
{var inst_29447 = (state_29449[(2)]);var state_29449__$1 = state_29449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29449__$1,inst_29447);
} else
{if((state_val_29450 === (12)))
{var inst_29372 = (state_29449[(2)]);var state_29449__$1 = state_29449;var statearr_29496_29566 = state_29449__$1;(statearr_29496_29566[(2)] = inst_29372);
(statearr_29496_29566[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (2)))
{var state_29449__$1 = state_29449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29449__$1,(4),ch);
} else
{if((state_val_29450 === (23)))
{var state_29449__$1 = state_29449;var statearr_29497_29567 = state_29449__$1;(statearr_29497_29567[(2)] = null);
(statearr_29497_29567[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (35)))
{var inst_29431 = (state_29449[(2)]);var state_29449__$1 = state_29449;var statearr_29498_29568 = state_29449__$1;(statearr_29498_29568[(2)] = inst_29431);
(statearr_29498_29568[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (19)))
{var inst_29346 = (state_29449[(7)]);var inst_29350 = cljs.core.chunk_first.call(null,inst_29346);var inst_29351 = cljs.core.chunk_rest.call(null,inst_29346);var inst_29352 = cljs.core.count.call(null,inst_29350);var inst_29326 = inst_29351;var inst_29327 = inst_29350;var inst_29328 = inst_29352;var inst_29329 = (0);var state_29449__$1 = (function (){var statearr_29499 = state_29449;(statearr_29499[(12)] = inst_29327);
(statearr_29499[(13)] = inst_29328);
(statearr_29499[(14)] = inst_29329);
(statearr_29499[(15)] = inst_29326);
return statearr_29499;
})();var statearr_29500_29569 = state_29449__$1;(statearr_29500_29569[(2)] = null);
(statearr_29500_29569[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (11)))
{var inst_29346 = (state_29449[(7)]);var inst_29326 = (state_29449[(15)]);var inst_29346__$1 = cljs.core.seq.call(null,inst_29326);var state_29449__$1 = (function (){var statearr_29501 = state_29449;(statearr_29501[(7)] = inst_29346__$1);
return statearr_29501;
})();if(inst_29346__$1)
{var statearr_29502_29570 = state_29449__$1;(statearr_29502_29570[(1)] = (16));
} else
{var statearr_29503_29571 = state_29449__$1;(statearr_29503_29571[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (9)))
{var inst_29374 = (state_29449[(2)]);var state_29449__$1 = state_29449;var statearr_29504_29572 = state_29449__$1;(statearr_29504_29572[(2)] = inst_29374);
(statearr_29504_29572[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (5)))
{var inst_29324 = cljs.core.deref.call(null,cs);var inst_29325 = cljs.core.seq.call(null,inst_29324);var inst_29326 = inst_29325;var inst_29327 = null;var inst_29328 = (0);var inst_29329 = (0);var state_29449__$1 = (function (){var statearr_29505 = state_29449;(statearr_29505[(12)] = inst_29327);
(statearr_29505[(13)] = inst_29328);
(statearr_29505[(14)] = inst_29329);
(statearr_29505[(15)] = inst_29326);
return statearr_29505;
})();var statearr_29506_29573 = state_29449__$1;(statearr_29506_29573[(2)] = null);
(statearr_29506_29573[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (14)))
{var state_29449__$1 = state_29449;var statearr_29507_29574 = state_29449__$1;(statearr_29507_29574[(2)] = null);
(statearr_29507_29574[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (45)))
{var inst_29439 = (state_29449[(2)]);var state_29449__$1 = state_29449;var statearr_29508_29575 = state_29449__$1;(statearr_29508_29575[(2)] = inst_29439);
(statearr_29508_29575[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (26)))
{var inst_29377 = (state_29449[(30)]);var inst_29435 = (state_29449[(2)]);var inst_29436 = cljs.core.seq.call(null,inst_29377);var state_29449__$1 = (function (){var statearr_29509 = state_29449;(statearr_29509[(32)] = inst_29435);
return statearr_29509;
})();if(inst_29436)
{var statearr_29510_29576 = state_29449__$1;(statearr_29510_29576[(1)] = (42));
} else
{var statearr_29511_29577 = state_29449__$1;(statearr_29511_29577[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (16)))
{var inst_29346 = (state_29449[(7)]);var inst_29348 = cljs.core.chunked_seq_QMARK_.call(null,inst_29346);var state_29449__$1 = state_29449;if(inst_29348)
{var statearr_29515_29578 = state_29449__$1;(statearr_29515_29578[(1)] = (19));
} else
{var statearr_29516_29579 = state_29449__$1;(statearr_29516_29579[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (38)))
{var inst_29428 = (state_29449[(2)]);var state_29449__$1 = state_29449;var statearr_29517_29580 = state_29449__$1;(statearr_29517_29580[(2)] = inst_29428);
(statearr_29517_29580[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (30)))
{var inst_29387 = (state_29449[(19)]);var inst_29386 = (state_29449[(9)]);var inst_29388 = (state_29449[(10)]);var inst_29385 = (state_29449[(20)]);var inst_29402 = (state_29449[(2)]);var inst_29403 = (inst_29388 + (1));var tmp29512 = inst_29387;var tmp29513 = inst_29386;var tmp29514 = inst_29385;var inst_29385__$1 = tmp29514;var inst_29386__$1 = tmp29513;var inst_29387__$1 = tmp29512;var inst_29388__$1 = inst_29403;var state_29449__$1 = (function (){var statearr_29518 = state_29449;(statearr_29518[(19)] = inst_29387__$1);
(statearr_29518[(9)] = inst_29386__$1);
(statearr_29518[(10)] = inst_29388__$1);
(statearr_29518[(20)] = inst_29385__$1);
(statearr_29518[(33)] = inst_29402);
return statearr_29518;
})();var statearr_29519_29581 = state_29449__$1;(statearr_29519_29581[(2)] = null);
(statearr_29519_29581[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (10)))
{var inst_29327 = (state_29449[(12)]);var inst_29329 = (state_29449[(14)]);var inst_29335 = cljs.core._nth.call(null,inst_29327,inst_29329);var inst_29336 = cljs.core.nth.call(null,inst_29335,(0),null);var inst_29337 = cljs.core.nth.call(null,inst_29335,(1),null);var state_29449__$1 = (function (){var statearr_29520 = state_29449;(statearr_29520[(28)] = inst_29336);
return statearr_29520;
})();if(cljs.core.truth_(inst_29337))
{var statearr_29521_29582 = state_29449__$1;(statearr_29521_29582[(1)] = (13));
} else
{var statearr_29522_29583 = state_29449__$1;(statearr_29522_29583[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (18)))
{var inst_29370 = (state_29449[(2)]);var state_29449__$1 = state_29449;var statearr_29523_29584 = state_29449__$1;(statearr_29523_29584[(2)] = inst_29370);
(statearr_29523_29584[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (42)))
{var state_29449__$1 = state_29449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29449__$1,(45),dchan);
} else
{if((state_val_29450 === (37)))
{var inst_29406 = (state_29449[(17)]);var inst_29415 = cljs.core.first.call(null,inst_29406);var state_29449__$1 = (function (){var statearr_29524 = state_29449;(statearr_29524[(25)] = inst_29415);
return statearr_29524;
})();var statearr_29525_29585 = state_29449__$1;(statearr_29525_29585[(2)] = null);
(statearr_29525_29585[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29450 === (8)))
{var inst_29328 = (state_29449[(13)]);var inst_29329 = (state_29449[(14)]);var inst_29331 = (inst_29329 < inst_29328);var inst_29332 = inst_29331;var state_29449__$1 = state_29449;if(cljs.core.truth_(inst_29332))
{var statearr_29526_29586 = state_29449__$1;(statearr_29526_29586[(1)] = (10));
} else
{var statearr_29527_29587 = state_29449__$1;(statearr_29527_29587[(1)] = (11));
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
});})(c__5693__auto___29535,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___29535,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29531[(0)] = state_machine__5679__auto__);
(statearr_29531[(1)] = (1));
return statearr_29531;
});
var state_machine__5679__auto____1 = (function (state_29449){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29449);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29532){if((e29532 instanceof Object))
{var ex__5682__auto__ = e29532;var statearr_29533_29588 = state_29449;(statearr_29533_29588[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29449);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29589 = state_29449;
state_29449 = G__29589;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29449){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29535,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_29534 = f__5694__auto__.call(null);(statearr_29534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29535);
return statearr_29534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29535,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj29591 = {};return obj29591;
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
;var m = (function (){if(typeof cljs.core.async.t29701 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29701 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29702){
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
this.meta29702 = meta29702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29701.cljs$lang$type = true;
cljs.core.async.t29701.cljs$lang$ctorStr = "cljs.core.async/t29701";
cljs.core.async.t29701.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t29701");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29701.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t29701.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29701.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29701.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29701.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29701.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29701.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29701.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29703){var self__ = this;
var _29703__$1 = this;return self__.meta29702;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29703,meta29702__$1){var self__ = this;
var _29703__$1 = this;return (new cljs.core.async.t29701(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29702__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t29701 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29701(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29702){return (new cljs.core.async.t29701(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29702));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t29701(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___29810 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29768){var state_val_29769 = (state_29768[(1)]);if((state_val_29769 === (7)))
{var inst_29717 = (state_29768[(7)]);var inst_29722 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29717);var state_29768__$1 = state_29768;var statearr_29770_29811 = state_29768__$1;(statearr_29770_29811[(2)] = inst_29722);
(statearr_29770_29811[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (20)))
{var inst_29732 = (state_29768[(8)]);var state_29768__$1 = state_29768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29768__$1,(23),out,inst_29732);
} else
{if((state_val_29769 === (1)))
{var inst_29707 = (state_29768[(9)]);var inst_29707__$1 = calc_state.call(null);var inst_29708 = cljs.core.seq_QMARK_.call(null,inst_29707__$1);var state_29768__$1 = (function (){var statearr_29771 = state_29768;(statearr_29771[(9)] = inst_29707__$1);
return statearr_29771;
})();if(inst_29708)
{var statearr_29772_29812 = state_29768__$1;(statearr_29772_29812[(1)] = (2));
} else
{var statearr_29773_29813 = state_29768__$1;(statearr_29773_29813[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (4)))
{var inst_29707 = (state_29768[(9)]);var inst_29713 = (state_29768[(2)]);var inst_29714 = cljs.core.get.call(null,inst_29713,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29715 = cljs.core.get.call(null,inst_29713,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29716 = cljs.core.get.call(null,inst_29713,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_29717 = inst_29707;var state_29768__$1 = (function (){var statearr_29774 = state_29768;(statearr_29774[(10)] = inst_29714);
(statearr_29774[(7)] = inst_29717);
(statearr_29774[(11)] = inst_29715);
(statearr_29774[(12)] = inst_29716);
return statearr_29774;
})();var statearr_29775_29814 = state_29768__$1;(statearr_29775_29814[(2)] = null);
(statearr_29775_29814[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (15)))
{var state_29768__$1 = state_29768;var statearr_29776_29815 = state_29768__$1;(statearr_29776_29815[(2)] = null);
(statearr_29776_29815[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (21)))
{var state_29768__$1 = state_29768;var statearr_29777_29816 = state_29768__$1;(statearr_29777_29816[(2)] = null);
(statearr_29777_29816[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (13)))
{var inst_29764 = (state_29768[(2)]);var state_29768__$1 = state_29768;var statearr_29778_29817 = state_29768__$1;(statearr_29778_29817[(2)] = inst_29764);
(statearr_29778_29817[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (22)))
{var inst_29725 = (state_29768[(13)]);var inst_29761 = (state_29768[(2)]);var inst_29717 = inst_29725;var state_29768__$1 = (function (){var statearr_29779 = state_29768;(statearr_29779[(7)] = inst_29717);
(statearr_29779[(14)] = inst_29761);
return statearr_29779;
})();var statearr_29780_29818 = state_29768__$1;(statearr_29780_29818[(2)] = null);
(statearr_29780_29818[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (6)))
{var inst_29766 = (state_29768[(2)]);var state_29768__$1 = state_29768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29768__$1,inst_29766);
} else
{if((state_val_29769 === (17)))
{var inst_29747 = (state_29768[(15)]);var state_29768__$1 = state_29768;var statearr_29781_29819 = state_29768__$1;(statearr_29781_29819[(2)] = inst_29747);
(statearr_29781_29819[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (3)))
{var inst_29707 = (state_29768[(9)]);var state_29768__$1 = state_29768;var statearr_29782_29820 = state_29768__$1;(statearr_29782_29820[(2)] = inst_29707);
(statearr_29782_29820[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (12)))
{var inst_29733 = (state_29768[(16)]);var inst_29728 = (state_29768[(17)]);var inst_29747 = (state_29768[(15)]);var inst_29747__$1 = inst_29728.call(null,inst_29733);var state_29768__$1 = (function (){var statearr_29783 = state_29768;(statearr_29783[(15)] = inst_29747__$1);
return statearr_29783;
})();if(cljs.core.truth_(inst_29747__$1))
{var statearr_29784_29821 = state_29768__$1;(statearr_29784_29821[(1)] = (17));
} else
{var statearr_29785_29822 = state_29768__$1;(statearr_29785_29822[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (2)))
{var inst_29707 = (state_29768[(9)]);var inst_29710 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29707);var state_29768__$1 = state_29768;var statearr_29786_29823 = state_29768__$1;(statearr_29786_29823[(2)] = inst_29710);
(statearr_29786_29823[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (23)))
{var inst_29758 = (state_29768[(2)]);var state_29768__$1 = state_29768;var statearr_29787_29824 = state_29768__$1;(statearr_29787_29824[(2)] = inst_29758);
(statearr_29787_29824[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (19)))
{var inst_29755 = (state_29768[(2)]);var state_29768__$1 = state_29768;if(cljs.core.truth_(inst_29755))
{var statearr_29788_29825 = state_29768__$1;(statearr_29788_29825[(1)] = (20));
} else
{var statearr_29789_29826 = state_29768__$1;(statearr_29789_29826[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (11)))
{var inst_29732 = (state_29768[(8)]);var inst_29738 = (inst_29732 == null);var state_29768__$1 = state_29768;if(cljs.core.truth_(inst_29738))
{var statearr_29790_29827 = state_29768__$1;(statearr_29790_29827[(1)] = (14));
} else
{var statearr_29791_29828 = state_29768__$1;(statearr_29791_29828[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (9)))
{var inst_29725 = (state_29768[(13)]);var inst_29725__$1 = (state_29768[(2)]);var inst_29726 = cljs.core.get.call(null,inst_29725__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29727 = cljs.core.get.call(null,inst_29725__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29728 = cljs.core.get.call(null,inst_29725__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_29768__$1 = (function (){var statearr_29792 = state_29768;(statearr_29792[(13)] = inst_29725__$1);
(statearr_29792[(18)] = inst_29727);
(statearr_29792[(17)] = inst_29728);
return statearr_29792;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29768__$1,(10),inst_29726);
} else
{if((state_val_29769 === (5)))
{var inst_29717 = (state_29768[(7)]);var inst_29720 = cljs.core.seq_QMARK_.call(null,inst_29717);var state_29768__$1 = state_29768;if(inst_29720)
{var statearr_29793_29829 = state_29768__$1;(statearr_29793_29829[(1)] = (7));
} else
{var statearr_29794_29830 = state_29768__$1;(statearr_29794_29830[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (14)))
{var inst_29733 = (state_29768[(16)]);var inst_29740 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29733);var state_29768__$1 = state_29768;var statearr_29795_29831 = state_29768__$1;(statearr_29795_29831[(2)] = inst_29740);
(statearr_29795_29831[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (16)))
{var inst_29743 = (state_29768[(2)]);var inst_29744 = calc_state.call(null);var inst_29717 = inst_29744;var state_29768__$1 = (function (){var statearr_29796 = state_29768;(statearr_29796[(7)] = inst_29717);
(statearr_29796[(19)] = inst_29743);
return statearr_29796;
})();var statearr_29797_29832 = state_29768__$1;(statearr_29797_29832[(2)] = null);
(statearr_29797_29832[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (10)))
{var inst_29732 = (state_29768[(8)]);var inst_29733 = (state_29768[(16)]);var inst_29731 = (state_29768[(2)]);var inst_29732__$1 = cljs.core.nth.call(null,inst_29731,(0),null);var inst_29733__$1 = cljs.core.nth.call(null,inst_29731,(1),null);var inst_29734 = (inst_29732__$1 == null);var inst_29735 = cljs.core._EQ_.call(null,inst_29733__$1,change);var inst_29736 = (inst_29734) || (inst_29735);var state_29768__$1 = (function (){var statearr_29798 = state_29768;(statearr_29798[(8)] = inst_29732__$1);
(statearr_29798[(16)] = inst_29733__$1);
return statearr_29798;
})();if(cljs.core.truth_(inst_29736))
{var statearr_29799_29833 = state_29768__$1;(statearr_29799_29833[(1)] = (11));
} else
{var statearr_29800_29834 = state_29768__$1;(statearr_29800_29834[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (18)))
{var inst_29727 = (state_29768[(18)]);var inst_29733 = (state_29768[(16)]);var inst_29728 = (state_29768[(17)]);var inst_29750 = cljs.core.empty_QMARK_.call(null,inst_29728);var inst_29751 = inst_29727.call(null,inst_29733);var inst_29752 = cljs.core.not.call(null,inst_29751);var inst_29753 = (inst_29750) && (inst_29752);var state_29768__$1 = state_29768;var statearr_29801_29835 = state_29768__$1;(statearr_29801_29835[(2)] = inst_29753);
(statearr_29801_29835[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29769 === (8)))
{var inst_29717 = (state_29768[(7)]);var state_29768__$1 = state_29768;var statearr_29802_29836 = state_29768__$1;(statearr_29802_29836[(2)] = inst_29717);
(statearr_29802_29836[(1)] = (9));
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
});})(c__5693__auto___29810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___29810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29806[(0)] = state_machine__5679__auto__);
(statearr_29806[(1)] = (1));
return statearr_29806;
});
var state_machine__5679__auto____1 = (function (state_29768){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29768);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29807){if((e29807 instanceof Object))
{var ex__5682__auto__ = e29807;var statearr_29808_29837 = state_29768;(statearr_29808_29837[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29838 = state_29768;
state_29768 = G__29838;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29768){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_29809 = f__5694__auto__.call(null);(statearr_29809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29810);
return statearr_29809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj29840 = {};return obj29840;
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
return (function (p1__29841_SHARP_){if(cljs.core.truth_(p1__29841_SHARP_.call(null,topic)))
{return p1__29841_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29841_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29966 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29966 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29967){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29967 = meta29967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29966.cljs$lang$type = true;
cljs.core.async.t29966.cljs$lang$ctorStr = "cljs.core.async/t29966";
cljs.core.async.t29966.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t29966");
});})(mults,ensure_mult))
;
cljs.core.async.t29966.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29966.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29966.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29966.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29966.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29966.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29968){var self__ = this;
var _29968__$1 = this;return self__.meta29967;
});})(mults,ensure_mult))
;
cljs.core.async.t29966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29968,meta29967__$1){var self__ = this;
var _29968__$1 = this;return (new cljs.core.async.t29966(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29967__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29966 = ((function (mults,ensure_mult){
return (function __GT_t29966(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29967){return (new cljs.core.async.t29966(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29967));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29966(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___30090 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30090,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30090,mults,ensure_mult,p){
return (function (state_30042){var state_val_30043 = (state_30042[(1)]);if((state_val_30043 === (7)))
{var inst_30038 = (state_30042[(2)]);var state_30042__$1 = state_30042;var statearr_30044_30091 = state_30042__$1;(statearr_30044_30091[(2)] = inst_30038);
(statearr_30044_30091[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (20)))
{var state_30042__$1 = state_30042;var statearr_30045_30092 = state_30042__$1;(statearr_30045_30092[(2)] = null);
(statearr_30045_30092[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (1)))
{var state_30042__$1 = state_30042;var statearr_30046_30093 = state_30042__$1;(statearr_30046_30093[(2)] = null);
(statearr_30046_30093[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (24)))
{var inst_30021 = (state_30042[(7)]);var inst_29971 = (state_30042[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30042,(23),Object,null,(22));var inst_30028 = cljs.core.async.muxch_STAR_.call(null,inst_30021);var state_30042__$1 = state_30042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30042__$1,(25),inst_30028,inst_29971);
} else
{if((state_val_30043 === (4)))
{var inst_29971 = (state_30042[(8)]);var inst_29971__$1 = (state_30042[(2)]);var inst_29972 = (inst_29971__$1 == null);var state_30042__$1 = (function (){var statearr_30047 = state_30042;(statearr_30047[(8)] = inst_29971__$1);
return statearr_30047;
})();if(cljs.core.truth_(inst_29972))
{var statearr_30048_30094 = state_30042__$1;(statearr_30048_30094[(1)] = (5));
} else
{var statearr_30049_30095 = state_30042__$1;(statearr_30049_30095[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (15)))
{var inst_30013 = (state_30042[(2)]);var state_30042__$1 = state_30042;var statearr_30050_30096 = state_30042__$1;(statearr_30050_30096[(2)] = inst_30013);
(statearr_30050_30096[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (21)))
{var inst_30035 = (state_30042[(2)]);var state_30042__$1 = (function (){var statearr_30051 = state_30042;(statearr_30051[(9)] = inst_30035);
return statearr_30051;
})();var statearr_30052_30097 = state_30042__$1;(statearr_30052_30097[(2)] = null);
(statearr_30052_30097[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (13)))
{var inst_29995 = (state_30042[(10)]);var inst_29997 = cljs.core.chunked_seq_QMARK_.call(null,inst_29995);var state_30042__$1 = state_30042;if(inst_29997)
{var statearr_30053_30098 = state_30042__$1;(statearr_30053_30098[(1)] = (16));
} else
{var statearr_30054_30099 = state_30042__$1;(statearr_30054_30099[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (22)))
{var inst_30032 = (state_30042[(2)]);var state_30042__$1 = state_30042;var statearr_30055_30100 = state_30042__$1;(statearr_30055_30100[(2)] = inst_30032);
(statearr_30055_30100[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (6)))
{var inst_30021 = (state_30042[(7)]);var inst_29971 = (state_30042[(8)]);var inst_30019 = (state_30042[(11)]);var inst_30019__$1 = topic_fn.call(null,inst_29971);var inst_30020 = cljs.core.deref.call(null,mults);var inst_30021__$1 = cljs.core.get.call(null,inst_30020,inst_30019__$1);var state_30042__$1 = (function (){var statearr_30056 = state_30042;(statearr_30056[(7)] = inst_30021__$1);
(statearr_30056[(11)] = inst_30019__$1);
return statearr_30056;
})();if(cljs.core.truth_(inst_30021__$1))
{var statearr_30057_30101 = state_30042__$1;(statearr_30057_30101[(1)] = (19));
} else
{var statearr_30058_30102 = state_30042__$1;(statearr_30058_30102[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (25)))
{var inst_30030 = (state_30042[(2)]);var state_30042__$1 = state_30042;var statearr_30059_30103 = state_30042__$1;(statearr_30059_30103[(2)] = inst_30030);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30042__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (17)))
{var inst_29995 = (state_30042[(10)]);var inst_30004 = cljs.core.first.call(null,inst_29995);var inst_30005 = cljs.core.async.muxch_STAR_.call(null,inst_30004);var inst_30006 = cljs.core.async.close_BANG_.call(null,inst_30005);var inst_30007 = cljs.core.next.call(null,inst_29995);var inst_29981 = inst_30007;var inst_29982 = null;var inst_29983 = (0);var inst_29984 = (0);var state_30042__$1 = (function (){var statearr_30060 = state_30042;(statearr_30060[(12)] = inst_29982);
(statearr_30060[(13)] = inst_29981);
(statearr_30060[(14)] = inst_30006);
(statearr_30060[(15)] = inst_29983);
(statearr_30060[(16)] = inst_29984);
return statearr_30060;
})();var statearr_30061_30104 = state_30042__$1;(statearr_30061_30104[(2)] = null);
(statearr_30061_30104[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (3)))
{var inst_30040 = (state_30042[(2)]);var state_30042__$1 = state_30042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30042__$1,inst_30040);
} else
{if((state_val_30043 === (12)))
{var inst_30015 = (state_30042[(2)]);var state_30042__$1 = state_30042;var statearr_30062_30105 = state_30042__$1;(statearr_30062_30105[(2)] = inst_30015);
(statearr_30062_30105[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (2)))
{var state_30042__$1 = state_30042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30042__$1,(4),ch);
} else
{if((state_val_30043 === (23)))
{var inst_30019 = (state_30042[(11)]);var inst_30023 = (state_30042[(2)]);var inst_30024 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30019);var state_30042__$1 = (function (){var statearr_30063 = state_30042;(statearr_30063[(17)] = inst_30023);
return statearr_30063;
})();var statearr_30064_30106 = state_30042__$1;(statearr_30064_30106[(2)] = inst_30024);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30042__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (19)))
{var state_30042__$1 = state_30042;var statearr_30065_30107 = state_30042__$1;(statearr_30065_30107[(2)] = null);
(statearr_30065_30107[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (11)))
{var inst_29981 = (state_30042[(13)]);var inst_29995 = (state_30042[(10)]);var inst_29995__$1 = cljs.core.seq.call(null,inst_29981);var state_30042__$1 = (function (){var statearr_30066 = state_30042;(statearr_30066[(10)] = inst_29995__$1);
return statearr_30066;
})();if(inst_29995__$1)
{var statearr_30067_30108 = state_30042__$1;(statearr_30067_30108[(1)] = (13));
} else
{var statearr_30068_30109 = state_30042__$1;(statearr_30068_30109[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (9)))
{var inst_30017 = (state_30042[(2)]);var state_30042__$1 = state_30042;var statearr_30069_30110 = state_30042__$1;(statearr_30069_30110[(2)] = inst_30017);
(statearr_30069_30110[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (5)))
{var inst_29978 = cljs.core.deref.call(null,mults);var inst_29979 = cljs.core.vals.call(null,inst_29978);var inst_29980 = cljs.core.seq.call(null,inst_29979);var inst_29981 = inst_29980;var inst_29982 = null;var inst_29983 = (0);var inst_29984 = (0);var state_30042__$1 = (function (){var statearr_30070 = state_30042;(statearr_30070[(12)] = inst_29982);
(statearr_30070[(13)] = inst_29981);
(statearr_30070[(15)] = inst_29983);
(statearr_30070[(16)] = inst_29984);
return statearr_30070;
})();var statearr_30071_30111 = state_30042__$1;(statearr_30071_30111[(2)] = null);
(statearr_30071_30111[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (14)))
{var state_30042__$1 = state_30042;var statearr_30075_30112 = state_30042__$1;(statearr_30075_30112[(2)] = null);
(statearr_30075_30112[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (16)))
{var inst_29995 = (state_30042[(10)]);var inst_29999 = cljs.core.chunk_first.call(null,inst_29995);var inst_30000 = cljs.core.chunk_rest.call(null,inst_29995);var inst_30001 = cljs.core.count.call(null,inst_29999);var inst_29981 = inst_30000;var inst_29982 = inst_29999;var inst_29983 = inst_30001;var inst_29984 = (0);var state_30042__$1 = (function (){var statearr_30076 = state_30042;(statearr_30076[(12)] = inst_29982);
(statearr_30076[(13)] = inst_29981);
(statearr_30076[(15)] = inst_29983);
(statearr_30076[(16)] = inst_29984);
return statearr_30076;
})();var statearr_30077_30113 = state_30042__$1;(statearr_30077_30113[(2)] = null);
(statearr_30077_30113[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (10)))
{var inst_29982 = (state_30042[(12)]);var inst_29981 = (state_30042[(13)]);var inst_29983 = (state_30042[(15)]);var inst_29984 = (state_30042[(16)]);var inst_29989 = cljs.core._nth.call(null,inst_29982,inst_29984);var inst_29990 = cljs.core.async.muxch_STAR_.call(null,inst_29989);var inst_29991 = cljs.core.async.close_BANG_.call(null,inst_29990);var inst_29992 = (inst_29984 + (1));var tmp30072 = inst_29982;var tmp30073 = inst_29981;var tmp30074 = inst_29983;var inst_29981__$1 = tmp30073;var inst_29982__$1 = tmp30072;var inst_29983__$1 = tmp30074;var inst_29984__$1 = inst_29992;var state_30042__$1 = (function (){var statearr_30078 = state_30042;(statearr_30078[(18)] = inst_29991);
(statearr_30078[(12)] = inst_29982__$1);
(statearr_30078[(13)] = inst_29981__$1);
(statearr_30078[(15)] = inst_29983__$1);
(statearr_30078[(16)] = inst_29984__$1);
return statearr_30078;
})();var statearr_30079_30114 = state_30042__$1;(statearr_30079_30114[(2)] = null);
(statearr_30079_30114[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (18)))
{var inst_30010 = (state_30042[(2)]);var state_30042__$1 = state_30042;var statearr_30080_30115 = state_30042__$1;(statearr_30080_30115[(2)] = inst_30010);
(statearr_30080_30115[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30043 === (8)))
{var inst_29983 = (state_30042[(15)]);var inst_29984 = (state_30042[(16)]);var inst_29986 = (inst_29984 < inst_29983);var inst_29987 = inst_29986;var state_30042__$1 = state_30042;if(cljs.core.truth_(inst_29987))
{var statearr_30081_30116 = state_30042__$1;(statearr_30081_30116[(1)] = (10));
} else
{var statearr_30082_30117 = state_30042__$1;(statearr_30082_30117[(1)] = (11));
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
});})(c__5693__auto___30090,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___30090,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30086[(0)] = state_machine__5679__auto__);
(statearr_30086[(1)] = (1));
return statearr_30086;
});
var state_machine__5679__auto____1 = (function (state_30042){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30042);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30087){if((e30087 instanceof Object))
{var ex__5682__auto__ = e30087;var statearr_30088_30118 = state_30042;(statearr_30088_30118[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30119 = state_30042;
state_30042 = G__30119;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30042){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30090,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_30089 = f__5694__auto__.call(null);(statearr_30089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30090);
return statearr_30089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30090,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___30256 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30256,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30256,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30226){var state_val_30227 = (state_30226[(1)]);if((state_val_30227 === (7)))
{var state_30226__$1 = state_30226;var statearr_30228_30257 = state_30226__$1;(statearr_30228_30257[(2)] = null);
(statearr_30228_30257[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (1)))
{var state_30226__$1 = state_30226;var statearr_30229_30258 = state_30226__$1;(statearr_30229_30258[(2)] = null);
(statearr_30229_30258[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (4)))
{var inst_30190 = (state_30226[(7)]);var inst_30192 = (inst_30190 < cnt);var state_30226__$1 = state_30226;if(cljs.core.truth_(inst_30192))
{var statearr_30230_30259 = state_30226__$1;(statearr_30230_30259[(1)] = (6));
} else
{var statearr_30231_30260 = state_30226__$1;(statearr_30231_30260[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (15)))
{var inst_30222 = (state_30226[(2)]);var state_30226__$1 = state_30226;var statearr_30232_30261 = state_30226__$1;(statearr_30232_30261[(2)] = inst_30222);
(statearr_30232_30261[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (13)))
{var inst_30215 = cljs.core.async.close_BANG_.call(null,out);var state_30226__$1 = state_30226;var statearr_30233_30262 = state_30226__$1;(statearr_30233_30262[(2)] = inst_30215);
(statearr_30233_30262[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (6)))
{var state_30226__$1 = state_30226;var statearr_30234_30263 = state_30226__$1;(statearr_30234_30263[(2)] = null);
(statearr_30234_30263[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (3)))
{var inst_30224 = (state_30226[(2)]);var state_30226__$1 = state_30226;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30226__$1,inst_30224);
} else
{if((state_val_30227 === (12)))
{var inst_30212 = (state_30226[(8)]);var inst_30212__$1 = (state_30226[(2)]);var inst_30213 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30212__$1);var state_30226__$1 = (function (){var statearr_30235 = state_30226;(statearr_30235[(8)] = inst_30212__$1);
return statearr_30235;
})();if(cljs.core.truth_(inst_30213))
{var statearr_30236_30264 = state_30226__$1;(statearr_30236_30264[(1)] = (13));
} else
{var statearr_30237_30265 = state_30226__$1;(statearr_30237_30265[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (2)))
{var inst_30189 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_30190 = (0);var state_30226__$1 = (function (){var statearr_30238 = state_30226;(statearr_30238[(7)] = inst_30190);
(statearr_30238[(9)] = inst_30189);
return statearr_30238;
})();var statearr_30239_30266 = state_30226__$1;(statearr_30239_30266[(2)] = null);
(statearr_30239_30266[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (11)))
{var inst_30190 = (state_30226[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30226,(10),Object,null,(9));var inst_30199 = chs__$1.call(null,inst_30190);var inst_30200 = done.call(null,inst_30190);var inst_30201 = cljs.core.async.take_BANG_.call(null,inst_30199,inst_30200);var state_30226__$1 = state_30226;var statearr_30240_30267 = state_30226__$1;(statearr_30240_30267[(2)] = inst_30201);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30226__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (9)))
{var inst_30190 = (state_30226[(7)]);var inst_30203 = (state_30226[(2)]);var inst_30204 = (inst_30190 + (1));var inst_30190__$1 = inst_30204;var state_30226__$1 = (function (){var statearr_30241 = state_30226;(statearr_30241[(7)] = inst_30190__$1);
(statearr_30241[(10)] = inst_30203);
return statearr_30241;
})();var statearr_30242_30268 = state_30226__$1;(statearr_30242_30268[(2)] = null);
(statearr_30242_30268[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (5)))
{var inst_30210 = (state_30226[(2)]);var state_30226__$1 = (function (){var statearr_30243 = state_30226;(statearr_30243[(11)] = inst_30210);
return statearr_30243;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30226__$1,(12),dchan);
} else
{if((state_val_30227 === (14)))
{var inst_30212 = (state_30226[(8)]);var inst_30217 = cljs.core.apply.call(null,f,inst_30212);var state_30226__$1 = state_30226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30226__$1,(16),out,inst_30217);
} else
{if((state_val_30227 === (16)))
{var inst_30219 = (state_30226[(2)]);var state_30226__$1 = (function (){var statearr_30244 = state_30226;(statearr_30244[(12)] = inst_30219);
return statearr_30244;
})();var statearr_30245_30269 = state_30226__$1;(statearr_30245_30269[(2)] = null);
(statearr_30245_30269[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (10)))
{var inst_30194 = (state_30226[(2)]);var inst_30195 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_30226__$1 = (function (){var statearr_30246 = state_30226;(statearr_30246[(13)] = inst_30194);
return statearr_30246;
})();var statearr_30247_30270 = state_30226__$1;(statearr_30247_30270[(2)] = inst_30195);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30226__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30227 === (8)))
{var inst_30208 = (state_30226[(2)]);var state_30226__$1 = state_30226;var statearr_30248_30271 = state_30226__$1;(statearr_30248_30271[(2)] = inst_30208);
(statearr_30248_30271[(1)] = (5));
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
});})(c__5693__auto___30256,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___30256,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30252[(0)] = state_machine__5679__auto__);
(statearr_30252[(1)] = (1));
return statearr_30252;
});
var state_machine__5679__auto____1 = (function (state_30226){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30226);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30253){if((e30253 instanceof Object))
{var ex__5682__auto__ = e30253;var statearr_30254_30272 = state_30226;(statearr_30254_30272[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30226);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30273 = state_30226;
state_30226 = G__30273;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30226){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30256,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_30255 = f__5694__auto__.call(null);(statearr_30255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30256);
return statearr_30255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30256,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30381 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30381,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30381,out){
return (function (state_30357){var state_val_30358 = (state_30357[(1)]);if((state_val_30358 === (7)))
{var inst_30337 = (state_30357[(7)]);var inst_30336 = (state_30357[(8)]);var inst_30336__$1 = (state_30357[(2)]);var inst_30337__$1 = cljs.core.nth.call(null,inst_30336__$1,(0),null);var inst_30338 = cljs.core.nth.call(null,inst_30336__$1,(1),null);var inst_30339 = (inst_30337__$1 == null);var state_30357__$1 = (function (){var statearr_30359 = state_30357;(statearr_30359[(7)] = inst_30337__$1);
(statearr_30359[(9)] = inst_30338);
(statearr_30359[(8)] = inst_30336__$1);
return statearr_30359;
})();if(cljs.core.truth_(inst_30339))
{var statearr_30360_30382 = state_30357__$1;(statearr_30360_30382[(1)] = (8));
} else
{var statearr_30361_30383 = state_30357__$1;(statearr_30361_30383[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30358 === (1)))
{var inst_30328 = cljs.core.vec.call(null,chs);var inst_30329 = inst_30328;var state_30357__$1 = (function (){var statearr_30362 = state_30357;(statearr_30362[(10)] = inst_30329);
return statearr_30362;
})();var statearr_30363_30384 = state_30357__$1;(statearr_30363_30384[(2)] = null);
(statearr_30363_30384[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30358 === (4)))
{var inst_30329 = (state_30357[(10)]);var state_30357__$1 = state_30357;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30357__$1,(7),inst_30329);
} else
{if((state_val_30358 === (6)))
{var inst_30353 = (state_30357[(2)]);var state_30357__$1 = state_30357;var statearr_30364_30385 = state_30357__$1;(statearr_30364_30385[(2)] = inst_30353);
(statearr_30364_30385[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30358 === (3)))
{var inst_30355 = (state_30357[(2)]);var state_30357__$1 = state_30357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30357__$1,inst_30355);
} else
{if((state_val_30358 === (2)))
{var inst_30329 = (state_30357[(10)]);var inst_30331 = cljs.core.count.call(null,inst_30329);var inst_30332 = (inst_30331 > (0));var state_30357__$1 = state_30357;if(cljs.core.truth_(inst_30332))
{var statearr_30366_30386 = state_30357__$1;(statearr_30366_30386[(1)] = (4));
} else
{var statearr_30367_30387 = state_30357__$1;(statearr_30367_30387[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30358 === (11)))
{var inst_30329 = (state_30357[(10)]);var inst_30346 = (state_30357[(2)]);var tmp30365 = inst_30329;var inst_30329__$1 = tmp30365;var state_30357__$1 = (function (){var statearr_30368 = state_30357;(statearr_30368[(11)] = inst_30346);
(statearr_30368[(10)] = inst_30329__$1);
return statearr_30368;
})();var statearr_30369_30388 = state_30357__$1;(statearr_30369_30388[(2)] = null);
(statearr_30369_30388[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30358 === (9)))
{var inst_30337 = (state_30357[(7)]);var state_30357__$1 = state_30357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30357__$1,(11),out,inst_30337);
} else
{if((state_val_30358 === (5)))
{var inst_30351 = cljs.core.async.close_BANG_.call(null,out);var state_30357__$1 = state_30357;var statearr_30370_30389 = state_30357__$1;(statearr_30370_30389[(2)] = inst_30351);
(statearr_30370_30389[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30358 === (10)))
{var inst_30349 = (state_30357[(2)]);var state_30357__$1 = state_30357;var statearr_30371_30390 = state_30357__$1;(statearr_30371_30390[(2)] = inst_30349);
(statearr_30371_30390[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30358 === (8)))
{var inst_30337 = (state_30357[(7)]);var inst_30338 = (state_30357[(9)]);var inst_30336 = (state_30357[(8)]);var inst_30329 = (state_30357[(10)]);var inst_30341 = (function (){var c = inst_30338;var v = inst_30337;var vec__30334 = inst_30336;var cs = inst_30329;return ((function (c,v,vec__30334,cs,inst_30337,inst_30338,inst_30336,inst_30329,state_val_30358,c__5693__auto___30381,out){
return (function (p1__30274_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__30274_SHARP_);
});
;})(c,v,vec__30334,cs,inst_30337,inst_30338,inst_30336,inst_30329,state_val_30358,c__5693__auto___30381,out))
})();var inst_30342 = cljs.core.filterv.call(null,inst_30341,inst_30329);var inst_30329__$1 = inst_30342;var state_30357__$1 = (function (){var statearr_30372 = state_30357;(statearr_30372[(10)] = inst_30329__$1);
return statearr_30372;
})();var statearr_30373_30391 = state_30357__$1;(statearr_30373_30391[(2)] = null);
(statearr_30373_30391[(1)] = (2));
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
});})(c__5693__auto___30381,out))
;return ((function (switch__5678__auto__,c__5693__auto___30381,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30377 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30377[(0)] = state_machine__5679__auto__);
(statearr_30377[(1)] = (1));
return statearr_30377;
});
var state_machine__5679__auto____1 = (function (state_30357){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30357);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30378){if((e30378 instanceof Object))
{var ex__5682__auto__ = e30378;var statearr_30379_30392 = state_30357;(statearr_30379_30392[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30357);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30378;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30393 = state_30357;
state_30357 = G__30393;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30357){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30381,out))
})();var state__5695__auto__ = (function (){var statearr_30380 = f__5694__auto__.call(null);(statearr_30380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30381);
return statearr_30380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30381,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30486 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30486,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30486,out){
return (function (state_30463){var state_val_30464 = (state_30463[(1)]);if((state_val_30464 === (7)))
{var inst_30445 = (state_30463[(7)]);var inst_30445__$1 = (state_30463[(2)]);var inst_30446 = (inst_30445__$1 == null);var inst_30447 = cljs.core.not.call(null,inst_30446);var state_30463__$1 = (function (){var statearr_30465 = state_30463;(statearr_30465[(7)] = inst_30445__$1);
return statearr_30465;
})();if(inst_30447)
{var statearr_30466_30487 = state_30463__$1;(statearr_30466_30487[(1)] = (8));
} else
{var statearr_30467_30488 = state_30463__$1;(statearr_30467_30488[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (1)))
{var inst_30440 = (0);var state_30463__$1 = (function (){var statearr_30468 = state_30463;(statearr_30468[(8)] = inst_30440);
return statearr_30468;
})();var statearr_30469_30489 = state_30463__$1;(statearr_30469_30489[(2)] = null);
(statearr_30469_30489[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (4)))
{var state_30463__$1 = state_30463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(7),ch);
} else
{if((state_val_30464 === (6)))
{var inst_30458 = (state_30463[(2)]);var state_30463__$1 = state_30463;var statearr_30470_30490 = state_30463__$1;(statearr_30470_30490[(2)] = inst_30458);
(statearr_30470_30490[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (3)))
{var inst_30460 = (state_30463[(2)]);var inst_30461 = cljs.core.async.close_BANG_.call(null,out);var state_30463__$1 = (function (){var statearr_30471 = state_30463;(statearr_30471[(9)] = inst_30460);
return statearr_30471;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30463__$1,inst_30461);
} else
{if((state_val_30464 === (2)))
{var inst_30440 = (state_30463[(8)]);var inst_30442 = (inst_30440 < n);var state_30463__$1 = state_30463;if(cljs.core.truth_(inst_30442))
{var statearr_30472_30491 = state_30463__$1;(statearr_30472_30491[(1)] = (4));
} else
{var statearr_30473_30492 = state_30463__$1;(statearr_30473_30492[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (11)))
{var inst_30440 = (state_30463[(8)]);var inst_30450 = (state_30463[(2)]);var inst_30451 = (inst_30440 + (1));var inst_30440__$1 = inst_30451;var state_30463__$1 = (function (){var statearr_30474 = state_30463;(statearr_30474[(8)] = inst_30440__$1);
(statearr_30474[(10)] = inst_30450);
return statearr_30474;
})();var statearr_30475_30493 = state_30463__$1;(statearr_30475_30493[(2)] = null);
(statearr_30475_30493[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (9)))
{var state_30463__$1 = state_30463;var statearr_30476_30494 = state_30463__$1;(statearr_30476_30494[(2)] = null);
(statearr_30476_30494[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (5)))
{var state_30463__$1 = state_30463;var statearr_30477_30495 = state_30463__$1;(statearr_30477_30495[(2)] = null);
(statearr_30477_30495[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (10)))
{var inst_30455 = (state_30463[(2)]);var state_30463__$1 = state_30463;var statearr_30478_30496 = state_30463__$1;(statearr_30478_30496[(2)] = inst_30455);
(statearr_30478_30496[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (8)))
{var inst_30445 = (state_30463[(7)]);var state_30463__$1 = state_30463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30463__$1,(11),out,inst_30445);
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
});})(c__5693__auto___30486,out))
;return ((function (switch__5678__auto__,c__5693__auto___30486,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30482 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30482[(0)] = state_machine__5679__auto__);
(statearr_30482[(1)] = (1));
return statearr_30482;
});
var state_machine__5679__auto____1 = (function (state_30463){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30463);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30483){if((e30483 instanceof Object))
{var ex__5682__auto__ = e30483;var statearr_30484_30497 = state_30463;(statearr_30484_30497[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30463);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30483;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30498 = state_30463;
state_30463 = G__30498;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30463){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30486,out))
})();var state__5695__auto__ = (function (){var statearr_30485 = f__5694__auto__.call(null);(statearr_30485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30486);
return statearr_30485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30486,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30595 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30595,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30595,out){
return (function (state_30570){var state_val_30571 = (state_30570[(1)]);if((state_val_30571 === (7)))
{var inst_30565 = (state_30570[(2)]);var state_30570__$1 = state_30570;var statearr_30572_30596 = state_30570__$1;(statearr_30572_30596[(2)] = inst_30565);
(statearr_30572_30596[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30571 === (1)))
{var inst_30547 = null;var state_30570__$1 = (function (){var statearr_30573 = state_30570;(statearr_30573[(7)] = inst_30547);
return statearr_30573;
})();var statearr_30574_30597 = state_30570__$1;(statearr_30574_30597[(2)] = null);
(statearr_30574_30597[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30571 === (4)))
{var inst_30550 = (state_30570[(8)]);var inst_30550__$1 = (state_30570[(2)]);var inst_30551 = (inst_30550__$1 == null);var inst_30552 = cljs.core.not.call(null,inst_30551);var state_30570__$1 = (function (){var statearr_30575 = state_30570;(statearr_30575[(8)] = inst_30550__$1);
return statearr_30575;
})();if(inst_30552)
{var statearr_30576_30598 = state_30570__$1;(statearr_30576_30598[(1)] = (5));
} else
{var statearr_30577_30599 = state_30570__$1;(statearr_30577_30599[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30571 === (6)))
{var state_30570__$1 = state_30570;var statearr_30578_30600 = state_30570__$1;(statearr_30578_30600[(2)] = null);
(statearr_30578_30600[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30571 === (3)))
{var inst_30567 = (state_30570[(2)]);var inst_30568 = cljs.core.async.close_BANG_.call(null,out);var state_30570__$1 = (function (){var statearr_30579 = state_30570;(statearr_30579[(9)] = inst_30567);
return statearr_30579;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30570__$1,inst_30568);
} else
{if((state_val_30571 === (2)))
{var state_30570__$1 = state_30570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30570__$1,(4),ch);
} else
{if((state_val_30571 === (11)))
{var inst_30550 = (state_30570[(8)]);var inst_30559 = (state_30570[(2)]);var inst_30547 = inst_30550;var state_30570__$1 = (function (){var statearr_30580 = state_30570;(statearr_30580[(7)] = inst_30547);
(statearr_30580[(10)] = inst_30559);
return statearr_30580;
})();var statearr_30581_30601 = state_30570__$1;(statearr_30581_30601[(2)] = null);
(statearr_30581_30601[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30571 === (9)))
{var inst_30550 = (state_30570[(8)]);var state_30570__$1 = state_30570;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30570__$1,(11),out,inst_30550);
} else
{if((state_val_30571 === (5)))
{var inst_30547 = (state_30570[(7)]);var inst_30550 = (state_30570[(8)]);var inst_30554 = cljs.core._EQ_.call(null,inst_30550,inst_30547);var state_30570__$1 = state_30570;if(inst_30554)
{var statearr_30583_30602 = state_30570__$1;(statearr_30583_30602[(1)] = (8));
} else
{var statearr_30584_30603 = state_30570__$1;(statearr_30584_30603[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30571 === (10)))
{var inst_30562 = (state_30570[(2)]);var state_30570__$1 = state_30570;var statearr_30585_30604 = state_30570__$1;(statearr_30585_30604[(2)] = inst_30562);
(statearr_30585_30604[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30571 === (8)))
{var inst_30547 = (state_30570[(7)]);var tmp30582 = inst_30547;var inst_30547__$1 = tmp30582;var state_30570__$1 = (function (){var statearr_30586 = state_30570;(statearr_30586[(7)] = inst_30547__$1);
return statearr_30586;
})();var statearr_30587_30605 = state_30570__$1;(statearr_30587_30605[(2)] = null);
(statearr_30587_30605[(1)] = (2));
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
});})(c__5693__auto___30595,out))
;return ((function (switch__5678__auto__,c__5693__auto___30595,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30591 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30591[(0)] = state_machine__5679__auto__);
(statearr_30591[(1)] = (1));
return statearr_30591;
});
var state_machine__5679__auto____1 = (function (state_30570){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30570);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30592){if((e30592 instanceof Object))
{var ex__5682__auto__ = e30592;var statearr_30593_30606 = state_30570;(statearr_30593_30606[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30570);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30607 = state_30570;
state_30570 = G__30607;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30570){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30595,out))
})();var state__5695__auto__ = (function (){var statearr_30594 = f__5694__auto__.call(null);(statearr_30594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30595);
return statearr_30594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30595,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30742 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30742,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30742,out){
return (function (state_30712){var state_val_30713 = (state_30712[(1)]);if((state_val_30713 === (7)))
{var inst_30708 = (state_30712[(2)]);var state_30712__$1 = state_30712;var statearr_30714_30743 = state_30712__$1;(statearr_30714_30743[(2)] = inst_30708);
(statearr_30714_30743[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30713 === (1)))
{var inst_30675 = (new Array(n));var inst_30676 = inst_30675;var inst_30677 = (0);var state_30712__$1 = (function (){var statearr_30715 = state_30712;(statearr_30715[(7)] = inst_30677);
(statearr_30715[(8)] = inst_30676);
return statearr_30715;
})();var statearr_30716_30744 = state_30712__$1;(statearr_30716_30744[(2)] = null);
(statearr_30716_30744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30713 === (4)))
{var inst_30680 = (state_30712[(9)]);var inst_30680__$1 = (state_30712[(2)]);var inst_30681 = (inst_30680__$1 == null);var inst_30682 = cljs.core.not.call(null,inst_30681);var state_30712__$1 = (function (){var statearr_30717 = state_30712;(statearr_30717[(9)] = inst_30680__$1);
return statearr_30717;
})();if(inst_30682)
{var statearr_30718_30745 = state_30712__$1;(statearr_30718_30745[(1)] = (5));
} else
{var statearr_30719_30746 = state_30712__$1;(statearr_30719_30746[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30713 === (15)))
{var inst_30702 = (state_30712[(2)]);var state_30712__$1 = state_30712;var statearr_30720_30747 = state_30712__$1;(statearr_30720_30747[(2)] = inst_30702);
(statearr_30720_30747[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30713 === (13)))
{var state_30712__$1 = state_30712;var statearr_30721_30748 = state_30712__$1;(statearr_30721_30748[(2)] = null);
(statearr_30721_30748[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30713 === (6)))
{var inst_30677 = (state_30712[(7)]);var inst_30698 = (inst_30677 > (0));var state_30712__$1 = state_30712;if(cljs.core.truth_(inst_30698))
{var statearr_30722_30749 = state_30712__$1;(statearr_30722_30749[(1)] = (12));
} else
{var statearr_30723_30750 = state_30712__$1;(statearr_30723_30750[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30713 === (3)))
{var inst_30710 = (state_30712[(2)]);var state_30712__$1 = state_30712;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30712__$1,inst_30710);
} else
{if((state_val_30713 === (12)))
{var inst_30676 = (state_30712[(8)]);var inst_30700 = cljs.core.vec.call(null,inst_30676);var state_30712__$1 = state_30712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30712__$1,(15),out,inst_30700);
} else
{if((state_val_30713 === (2)))
{var state_30712__$1 = state_30712;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30712__$1,(4),ch);
} else
{if((state_val_30713 === (11)))
{var inst_30692 = (state_30712[(2)]);var inst_30693 = (new Array(n));var inst_30676 = inst_30693;var inst_30677 = (0);var state_30712__$1 = (function (){var statearr_30724 = state_30712;(statearr_30724[(7)] = inst_30677);
(statearr_30724[(10)] = inst_30692);
(statearr_30724[(8)] = inst_30676);
return statearr_30724;
})();var statearr_30725_30751 = state_30712__$1;(statearr_30725_30751[(2)] = null);
(statearr_30725_30751[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30713 === (9)))
{var inst_30676 = (state_30712[(8)]);var inst_30690 = cljs.core.vec.call(null,inst_30676);var state_30712__$1 = state_30712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30712__$1,(11),out,inst_30690);
} else
{if((state_val_30713 === (5)))
{var inst_30677 = (state_30712[(7)]);var inst_30685 = (state_30712[(11)]);var inst_30676 = (state_30712[(8)]);var inst_30680 = (state_30712[(9)]);var inst_30684 = (inst_30676[inst_30677] = inst_30680);var inst_30685__$1 = (inst_30677 + (1));var inst_30686 = (inst_30685__$1 < n);var state_30712__$1 = (function (){var statearr_30726 = state_30712;(statearr_30726[(12)] = inst_30684);
(statearr_30726[(11)] = inst_30685__$1);
return statearr_30726;
})();if(cljs.core.truth_(inst_30686))
{var statearr_30727_30752 = state_30712__$1;(statearr_30727_30752[(1)] = (8));
} else
{var statearr_30728_30753 = state_30712__$1;(statearr_30728_30753[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30713 === (14)))
{var inst_30705 = (state_30712[(2)]);var inst_30706 = cljs.core.async.close_BANG_.call(null,out);var state_30712__$1 = (function (){var statearr_30730 = state_30712;(statearr_30730[(13)] = inst_30705);
return statearr_30730;
})();var statearr_30731_30754 = state_30712__$1;(statearr_30731_30754[(2)] = inst_30706);
(statearr_30731_30754[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30713 === (10)))
{var inst_30696 = (state_30712[(2)]);var state_30712__$1 = state_30712;var statearr_30732_30755 = state_30712__$1;(statearr_30732_30755[(2)] = inst_30696);
(statearr_30732_30755[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30713 === (8)))
{var inst_30685 = (state_30712[(11)]);var inst_30676 = (state_30712[(8)]);var tmp30729 = inst_30676;var inst_30676__$1 = tmp30729;var inst_30677 = inst_30685;var state_30712__$1 = (function (){var statearr_30733 = state_30712;(statearr_30733[(7)] = inst_30677);
(statearr_30733[(8)] = inst_30676__$1);
return statearr_30733;
})();var statearr_30734_30756 = state_30712__$1;(statearr_30734_30756[(2)] = null);
(statearr_30734_30756[(1)] = (2));
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
});})(c__5693__auto___30742,out))
;return ((function (switch__5678__auto__,c__5693__auto___30742,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30738[(0)] = state_machine__5679__auto__);
(statearr_30738[(1)] = (1));
return statearr_30738;
});
var state_machine__5679__auto____1 = (function (state_30712){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30712);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30739){if((e30739 instanceof Object))
{var ex__5682__auto__ = e30739;var statearr_30740_30757 = state_30712;(statearr_30740_30757[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30712);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30758 = state_30712;
state_30712 = G__30758;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30712){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30742,out))
})();var state__5695__auto__ = (function (){var statearr_30741 = f__5694__auto__.call(null);(statearr_30741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30742);
return statearr_30741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30742,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30901 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30901,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30901,out){
return (function (state_30871){var state_val_30872 = (state_30871[(1)]);if((state_val_30872 === (7)))
{var inst_30867 = (state_30871[(2)]);var state_30871__$1 = state_30871;var statearr_30873_30902 = state_30871__$1;(statearr_30873_30902[(2)] = inst_30867);
(statearr_30873_30902[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30872 === (1)))
{var inst_30830 = [];var inst_30831 = inst_30830;var inst_30832 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_30871__$1 = (function (){var statearr_30874 = state_30871;(statearr_30874[(7)] = inst_30831);
(statearr_30874[(8)] = inst_30832);
return statearr_30874;
})();var statearr_30875_30903 = state_30871__$1;(statearr_30875_30903[(2)] = null);
(statearr_30875_30903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30872 === (4)))
{var inst_30835 = (state_30871[(9)]);var inst_30835__$1 = (state_30871[(2)]);var inst_30836 = (inst_30835__$1 == null);var inst_30837 = cljs.core.not.call(null,inst_30836);var state_30871__$1 = (function (){var statearr_30876 = state_30871;(statearr_30876[(9)] = inst_30835__$1);
return statearr_30876;
})();if(inst_30837)
{var statearr_30877_30904 = state_30871__$1;(statearr_30877_30904[(1)] = (5));
} else
{var statearr_30878_30905 = state_30871__$1;(statearr_30878_30905[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30872 === (15)))
{var inst_30861 = (state_30871[(2)]);var state_30871__$1 = state_30871;var statearr_30879_30906 = state_30871__$1;(statearr_30879_30906[(2)] = inst_30861);
(statearr_30879_30906[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30872 === (13)))
{var state_30871__$1 = state_30871;var statearr_30880_30907 = state_30871__$1;(statearr_30880_30907[(2)] = null);
(statearr_30880_30907[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30872 === (6)))
{var inst_30831 = (state_30871[(7)]);var inst_30856 = inst_30831.length;var inst_30857 = (inst_30856 > (0));var state_30871__$1 = state_30871;if(cljs.core.truth_(inst_30857))
{var statearr_30881_30908 = state_30871__$1;(statearr_30881_30908[(1)] = (12));
} else
{var statearr_30882_30909 = state_30871__$1;(statearr_30882_30909[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30872 === (3)))
{var inst_30869 = (state_30871[(2)]);var state_30871__$1 = state_30871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30871__$1,inst_30869);
} else
{if((state_val_30872 === (12)))
{var inst_30831 = (state_30871[(7)]);var inst_30859 = cljs.core.vec.call(null,inst_30831);var state_30871__$1 = state_30871;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30871__$1,(15),out,inst_30859);
} else
{if((state_val_30872 === (2)))
{var state_30871__$1 = state_30871;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30871__$1,(4),ch);
} else
{if((state_val_30872 === (11)))
{var inst_30835 = (state_30871[(9)]);var inst_30839 = (state_30871[(10)]);var inst_30849 = (state_30871[(2)]);var inst_30850 = [];var inst_30851 = inst_30850.push(inst_30835);var inst_30831 = inst_30850;var inst_30832 = inst_30839;var state_30871__$1 = (function (){var statearr_30883 = state_30871;(statearr_30883[(11)] = inst_30849);
(statearr_30883[(12)] = inst_30851);
(statearr_30883[(7)] = inst_30831);
(statearr_30883[(8)] = inst_30832);
return statearr_30883;
})();var statearr_30884_30910 = state_30871__$1;(statearr_30884_30910[(2)] = null);
(statearr_30884_30910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30872 === (9)))
{var inst_30831 = (state_30871[(7)]);var inst_30847 = cljs.core.vec.call(null,inst_30831);var state_30871__$1 = state_30871;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30871__$1,(11),out,inst_30847);
} else
{if((state_val_30872 === (5)))
{var inst_30835 = (state_30871[(9)]);var inst_30839 = (state_30871[(10)]);var inst_30832 = (state_30871[(8)]);var inst_30839__$1 = f.call(null,inst_30835);var inst_30840 = cljs.core._EQ_.call(null,inst_30839__$1,inst_30832);var inst_30841 = cljs.core.keyword_identical_QMARK_.call(null,inst_30832,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_30842 = (inst_30840) || (inst_30841);var state_30871__$1 = (function (){var statearr_30885 = state_30871;(statearr_30885[(10)] = inst_30839__$1);
return statearr_30885;
})();if(cljs.core.truth_(inst_30842))
{var statearr_30886_30911 = state_30871__$1;(statearr_30886_30911[(1)] = (8));
} else
{var statearr_30887_30912 = state_30871__$1;(statearr_30887_30912[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30872 === (14)))
{var inst_30864 = (state_30871[(2)]);var inst_30865 = cljs.core.async.close_BANG_.call(null,out);var state_30871__$1 = (function (){var statearr_30889 = state_30871;(statearr_30889[(13)] = inst_30864);
return statearr_30889;
})();var statearr_30890_30913 = state_30871__$1;(statearr_30890_30913[(2)] = inst_30865);
(statearr_30890_30913[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30872 === (10)))
{var inst_30854 = (state_30871[(2)]);var state_30871__$1 = state_30871;var statearr_30891_30914 = state_30871__$1;(statearr_30891_30914[(2)] = inst_30854);
(statearr_30891_30914[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30872 === (8)))
{var inst_30835 = (state_30871[(9)]);var inst_30839 = (state_30871[(10)]);var inst_30831 = (state_30871[(7)]);var inst_30844 = inst_30831.push(inst_30835);var tmp30888 = inst_30831;var inst_30831__$1 = tmp30888;var inst_30832 = inst_30839;var state_30871__$1 = (function (){var statearr_30892 = state_30871;(statearr_30892[(7)] = inst_30831__$1);
(statearr_30892[(14)] = inst_30844);
(statearr_30892[(8)] = inst_30832);
return statearr_30892;
})();var statearr_30893_30915 = state_30871__$1;(statearr_30893_30915[(2)] = null);
(statearr_30893_30915[(1)] = (2));
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
});})(c__5693__auto___30901,out))
;return ((function (switch__5678__auto__,c__5693__auto___30901,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30897[(0)] = state_machine__5679__auto__);
(statearr_30897[(1)] = (1));
return statearr_30897;
});
var state_machine__5679__auto____1 = (function (state_30871){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30871);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30898){if((e30898 instanceof Object))
{var ex__5682__auto__ = e30898;var statearr_30899_30916 = state_30871;(statearr_30899_30916[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30871);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30917 = state_30871;
state_30871 = G__30917;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30871){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30901,out))
})();var state__5695__auto__ = (function (){var statearr_30900 = f__5694__auto__.call(null);(statearr_30900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30901);
return statearr_30900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30901,out))
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
