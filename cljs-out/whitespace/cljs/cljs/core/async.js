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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15350 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15350 = (function (f,fn_handler,meta15351){
this.f = f;
this.fn_handler = fn_handler;
this.meta15351 = meta15351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15350.cljs$lang$type = true;
cljs.core.async.t15350.cljs$lang$ctorStr = "cljs.core.async/t15350";
cljs.core.async.t15350.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15350");
});
cljs.core.async.t15350.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15352){var self__ = this;
var _15352__$1 = this;return self__.meta15351;
});
cljs.core.async.t15350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15352,meta15351__$1){var self__ = this;
var _15352__$1 = this;return (new cljs.core.async.t15350(self__.f,self__.fn_handler,meta15351__$1));
});
cljs.core.async.__GT_t15350 = (function __GT_t15350(f__$1,fn_handler__$1,meta15351){return (new cljs.core.async.t15350(f__$1,fn_handler__$1,meta15351));
});
}
return (new cljs.core.async.t15350(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15354 = buff;if(G__15354)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__15354.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15354.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15354);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15354);
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
{var val_15355 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15355);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15355,ret){
return (function (){return fn1.call(null,val_15355);
});})(val_15355,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___15356 = n;var x_15357 = (0);while(true){
if((x_15357 < n__4399__auto___15356))
{(a[x_15357] = (0));
{
var G__15358 = (x_15357 + (1));
x_15357 = G__15358;
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
var G__15359 = (i + (1));
i = G__15359;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15363 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15363 = (function (flag,alt_flag,meta15364){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15364 = meta15364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15363.cljs$lang$type = true;
cljs.core.async.t15363.cljs$lang$ctorStr = "cljs.core.async/t15363";
cljs.core.async.t15363.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15363");
});})(flag))
;
cljs.core.async.t15363.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15365){var self__ = this;
var _15365__$1 = this;return self__.meta15364;
});})(flag))
;
cljs.core.async.t15363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15365,meta15364__$1){var self__ = this;
var _15365__$1 = this;return (new cljs.core.async.t15363(self__.flag,self__.alt_flag,meta15364__$1));
});})(flag))
;
cljs.core.async.__GT_t15363 = ((function (flag){
return (function __GT_t15363(flag__$1,alt_flag__$1,meta15364){return (new cljs.core.async.t15363(flag__$1,alt_flag__$1,meta15364));
});})(flag))
;
}
return (new cljs.core.async.t15363(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15369 = (function (cb,flag,alt_handler,meta15370){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15370 = meta15370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15369.cljs$lang$type = true;
cljs.core.async.t15369.cljs$lang$ctorStr = "cljs.core.async/t15369";
cljs.core.async.t15369.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15369");
});
cljs.core.async.t15369.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15371){var self__ = this;
var _15371__$1 = this;return self__.meta15370;
});
cljs.core.async.t15369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15371,meta15370__$1){var self__ = this;
var _15371__$1 = this;return (new cljs.core.async.t15369(self__.cb,self__.flag,self__.alt_handler,meta15370__$1));
});
cljs.core.async.__GT_t15369 = (function __GT_t15369(cb__$1,flag__$1,alt_handler__$1,meta15370){return (new cljs.core.async.t15369(cb__$1,flag__$1,alt_handler__$1,meta15370));
});
}
return (new cljs.core.async.t15369(cb,flag,alt_handler,null));
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
return (function (p1__15372_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15372_SHARP_,port], null));
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
var G__15373 = (i + (1));
i = G__15373;
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
var alts_BANG___delegate = function (ports,p__15374){var map__15376 = p__15374;var map__15376__$1 = ((cljs.core.seq_QMARK_.call(null,map__15376))?cljs.core.apply.call(null,cljs.core.hash_map,map__15376):map__15376);var opts = map__15376__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15374 = null;if (arguments.length > 1) {
  p__15374 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15374);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15377){
var ports = cljs.core.first(arglist__15377);
var p__15374 = cljs.core.rest(arglist__15377);
return alts_BANG___delegate(ports,p__15374);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15385 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15385 = (function (ch,f,map_LT_,meta15386){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15386 = meta15386;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15385.cljs$lang$type = true;
cljs.core.async.t15385.cljs$lang$ctorStr = "cljs.core.async/t15385";
cljs.core.async.t15385.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15385");
});
cljs.core.async.t15385.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15385.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15388 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15388 = (function (fn1,_,meta15386,ch,f,map_LT_,meta15389){
this.fn1 = fn1;
this._ = _;
this.meta15386 = meta15386;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15389 = meta15389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15388.cljs$lang$type = true;
cljs.core.async.t15388.cljs$lang$ctorStr = "cljs.core.async/t15388";
cljs.core.async.t15388.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15388");
});})(___$1))
;
cljs.core.async.t15388.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15388.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15378_SHARP_){return f1.call(null,(((p1__15378_SHARP_ == null))?null:self__.f.call(null,p1__15378_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15390){var self__ = this;
var _15390__$1 = this;return self__.meta15389;
});})(___$1))
;
cljs.core.async.t15388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15390,meta15389__$1){var self__ = this;
var _15390__$1 = this;return (new cljs.core.async.t15388(self__.fn1,self__._,self__.meta15386,self__.ch,self__.f,self__.map_LT_,meta15389__$1));
});})(___$1))
;
cljs.core.async.__GT_t15388 = ((function (___$1){
return (function __GT_t15388(fn1__$1,___$2,meta15386__$1,ch__$2,f__$2,map_LT___$2,meta15389){return (new cljs.core.async.t15388(fn1__$1,___$2,meta15386__$1,ch__$2,f__$2,map_LT___$2,meta15389));
});})(___$1))
;
}
return (new cljs.core.async.t15388(fn1,___$1,self__.meta15386,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15385.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15387){var self__ = this;
var _15387__$1 = this;return self__.meta15386;
});
cljs.core.async.t15385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15387,meta15386__$1){var self__ = this;
var _15387__$1 = this;return (new cljs.core.async.t15385(self__.ch,self__.f,self__.map_LT_,meta15386__$1));
});
cljs.core.async.__GT_t15385 = (function __GT_t15385(ch__$1,f__$1,map_LT___$1,meta15386){return (new cljs.core.async.t15385(ch__$1,f__$1,map_LT___$1,meta15386));
});
}
return (new cljs.core.async.t15385(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15394 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15394 = (function (ch,f,map_GT_,meta15395){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15395 = meta15395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15394.cljs$lang$type = true;
cljs.core.async.t15394.cljs$lang$ctorStr = "cljs.core.async/t15394";
cljs.core.async.t15394.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15394");
});
cljs.core.async.t15394.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15394.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15394.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15394.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15394.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15394.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15396){var self__ = this;
var _15396__$1 = this;return self__.meta15395;
});
cljs.core.async.t15394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15396,meta15395__$1){var self__ = this;
var _15396__$1 = this;return (new cljs.core.async.t15394(self__.ch,self__.f,self__.map_GT_,meta15395__$1));
});
cljs.core.async.__GT_t15394 = (function __GT_t15394(ch__$1,f__$1,map_GT___$1,meta15395){return (new cljs.core.async.t15394(ch__$1,f__$1,map_GT___$1,meta15395));
});
}
return (new cljs.core.async.t15394(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15400 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15400 = (function (ch,p,filter_GT_,meta15401){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15401 = meta15401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15400.cljs$lang$type = true;
cljs.core.async.t15400.cljs$lang$ctorStr = "cljs.core.async/t15400";
cljs.core.async.t15400.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15400");
});
cljs.core.async.t15400.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15400.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15400.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15402){var self__ = this;
var _15402__$1 = this;return self__.meta15401;
});
cljs.core.async.t15400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15402,meta15401__$1){var self__ = this;
var _15402__$1 = this;return (new cljs.core.async.t15400(self__.ch,self__.p,self__.filter_GT_,meta15401__$1));
});
cljs.core.async.__GT_t15400 = (function __GT_t15400(ch__$1,p__$1,filter_GT___$1,meta15401){return (new cljs.core.async.t15400(ch__$1,p__$1,filter_GT___$1,meta15401));
});
}
return (new cljs.core.async.t15400(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___15485 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15485,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15485,out){
return (function (state_15464){var state_val_15465 = (state_15464[(1)]);if((state_val_15465 === (7)))
{var inst_15460 = (state_15464[(2)]);var state_15464__$1 = state_15464;var statearr_15466_15486 = state_15464__$1;(statearr_15466_15486[(2)] = inst_15460);
(statearr_15466_15486[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15465 === (1)))
{var state_15464__$1 = state_15464;var statearr_15467_15487 = state_15464__$1;(statearr_15467_15487[(2)] = null);
(statearr_15467_15487[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15465 === (4)))
{var inst_15446 = (state_15464[(7)]);var inst_15446__$1 = (state_15464[(2)]);var inst_15447 = (inst_15446__$1 == null);var state_15464__$1 = (function (){var statearr_15468 = state_15464;(statearr_15468[(7)] = inst_15446__$1);
return statearr_15468;
})();if(cljs.core.truth_(inst_15447))
{var statearr_15469_15488 = state_15464__$1;(statearr_15469_15488[(1)] = (5));
} else
{var statearr_15470_15489 = state_15464__$1;(statearr_15470_15489[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15465 === (6)))
{var inst_15446 = (state_15464[(7)]);var inst_15451 = p.call(null,inst_15446);var state_15464__$1 = state_15464;if(cljs.core.truth_(inst_15451))
{var statearr_15471_15490 = state_15464__$1;(statearr_15471_15490[(1)] = (8));
} else
{var statearr_15472_15491 = state_15464__$1;(statearr_15472_15491[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15465 === (3)))
{var inst_15462 = (state_15464[(2)]);var state_15464__$1 = state_15464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15464__$1,inst_15462);
} else
{if((state_val_15465 === (2)))
{var state_15464__$1 = state_15464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15464__$1,(4),ch);
} else
{if((state_val_15465 === (11)))
{var inst_15454 = (state_15464[(2)]);var state_15464__$1 = state_15464;var statearr_15473_15492 = state_15464__$1;(statearr_15473_15492[(2)] = inst_15454);
(statearr_15473_15492[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15465 === (9)))
{var state_15464__$1 = state_15464;var statearr_15474_15493 = state_15464__$1;(statearr_15474_15493[(2)] = null);
(statearr_15474_15493[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15465 === (5)))
{var inst_15449 = cljs.core.async.close_BANG_.call(null,out);var state_15464__$1 = state_15464;var statearr_15475_15494 = state_15464__$1;(statearr_15475_15494[(2)] = inst_15449);
(statearr_15475_15494[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15465 === (10)))
{var inst_15457 = (state_15464[(2)]);var state_15464__$1 = (function (){var statearr_15476 = state_15464;(statearr_15476[(8)] = inst_15457);
return statearr_15476;
})();var statearr_15477_15495 = state_15464__$1;(statearr_15477_15495[(2)] = null);
(statearr_15477_15495[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15465 === (8)))
{var inst_15446 = (state_15464[(7)]);var state_15464__$1 = state_15464;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15464__$1,(11),out,inst_15446);
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
});})(c__5693__auto___15485,out))
;return ((function (switch__5678__auto__,c__5693__auto___15485,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15481 = [null,null,null,null,null,null,null,null,null];(statearr_15481[(0)] = state_machine__5679__auto__);
(statearr_15481[(1)] = (1));
return statearr_15481;
});
var state_machine__5679__auto____1 = (function (state_15464){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15464);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15482){if((e15482 instanceof Object))
{var ex__5682__auto__ = e15482;var statearr_15483_15496 = state_15464;(statearr_15483_15496[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15464);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15497 = state_15464;
state_15464 = G__15497;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15464){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15485,out))
})();var state__5695__auto__ = (function (){var statearr_15484 = f__5694__auto__.call(null);(statearr_15484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15485);
return statearr_15484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15485,out))
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
return (function (state_15649){var state_val_15650 = (state_15649[(1)]);if((state_val_15650 === (7)))
{var inst_15645 = (state_15649[(2)]);var state_15649__$1 = state_15649;var statearr_15651_15688 = state_15649__$1;(statearr_15651_15688[(2)] = inst_15645);
(statearr_15651_15688[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (20)))
{var inst_15620 = (state_15649[(7)]);var inst_15631 = (state_15649[(2)]);var inst_15632 = cljs.core.next.call(null,inst_15620);var inst_15606 = inst_15632;var inst_15607 = null;var inst_15608 = (0);var inst_15609 = (0);var state_15649__$1 = (function (){var statearr_15652 = state_15649;(statearr_15652[(8)] = inst_15631);
(statearr_15652[(9)] = inst_15607);
(statearr_15652[(10)] = inst_15606);
(statearr_15652[(11)] = inst_15609);
(statearr_15652[(12)] = inst_15608);
return statearr_15652;
})();var statearr_15653_15689 = state_15649__$1;(statearr_15653_15689[(2)] = null);
(statearr_15653_15689[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (1)))
{var state_15649__$1 = state_15649;var statearr_15654_15690 = state_15649__$1;(statearr_15654_15690[(2)] = null);
(statearr_15654_15690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (4)))
{var inst_15595 = (state_15649[(13)]);var inst_15595__$1 = (state_15649[(2)]);var inst_15596 = (inst_15595__$1 == null);var state_15649__$1 = (function (){var statearr_15658 = state_15649;(statearr_15658[(13)] = inst_15595__$1);
return statearr_15658;
})();if(cljs.core.truth_(inst_15596))
{var statearr_15659_15691 = state_15649__$1;(statearr_15659_15691[(1)] = (5));
} else
{var statearr_15660_15692 = state_15649__$1;(statearr_15660_15692[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (15)))
{var state_15649__$1 = state_15649;var statearr_15661_15693 = state_15649__$1;(statearr_15661_15693[(2)] = null);
(statearr_15661_15693[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (13)))
{var inst_15607 = (state_15649[(9)]);var inst_15606 = (state_15649[(10)]);var inst_15609 = (state_15649[(11)]);var inst_15608 = (state_15649[(12)]);var inst_15616 = (state_15649[(2)]);var inst_15617 = (inst_15609 + (1));var tmp15655 = inst_15607;var tmp15656 = inst_15606;var tmp15657 = inst_15608;var inst_15606__$1 = tmp15656;var inst_15607__$1 = tmp15655;var inst_15608__$1 = tmp15657;var inst_15609__$1 = inst_15617;var state_15649__$1 = (function (){var statearr_15662 = state_15649;(statearr_15662[(14)] = inst_15616);
(statearr_15662[(9)] = inst_15607__$1);
(statearr_15662[(10)] = inst_15606__$1);
(statearr_15662[(11)] = inst_15609__$1);
(statearr_15662[(12)] = inst_15608__$1);
return statearr_15662;
})();var statearr_15663_15694 = state_15649__$1;(statearr_15663_15694[(2)] = null);
(statearr_15663_15694[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (6)))
{var inst_15595 = (state_15649[(13)]);var inst_15600 = f.call(null,inst_15595);var inst_15605 = cljs.core.seq.call(null,inst_15600);var inst_15606 = inst_15605;var inst_15607 = null;var inst_15608 = (0);var inst_15609 = (0);var state_15649__$1 = (function (){var statearr_15664 = state_15649;(statearr_15664[(9)] = inst_15607);
(statearr_15664[(10)] = inst_15606);
(statearr_15664[(11)] = inst_15609);
(statearr_15664[(12)] = inst_15608);
return statearr_15664;
})();var statearr_15665_15695 = state_15649__$1;(statearr_15665_15695[(2)] = null);
(statearr_15665_15695[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (17)))
{var inst_15620 = (state_15649[(7)]);var inst_15624 = cljs.core.chunk_first.call(null,inst_15620);var inst_15625 = cljs.core.chunk_rest.call(null,inst_15620);var inst_15626 = cljs.core.count.call(null,inst_15624);var inst_15606 = inst_15625;var inst_15607 = inst_15624;var inst_15608 = inst_15626;var inst_15609 = (0);var state_15649__$1 = (function (){var statearr_15666 = state_15649;(statearr_15666[(9)] = inst_15607);
(statearr_15666[(10)] = inst_15606);
(statearr_15666[(11)] = inst_15609);
(statearr_15666[(12)] = inst_15608);
return statearr_15666;
})();var statearr_15667_15696 = state_15649__$1;(statearr_15667_15696[(2)] = null);
(statearr_15667_15696[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (3)))
{var inst_15647 = (state_15649[(2)]);var state_15649__$1 = state_15649;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15649__$1,inst_15647);
} else
{if((state_val_15650 === (12)))
{var inst_15640 = (state_15649[(2)]);var state_15649__$1 = state_15649;var statearr_15668_15697 = state_15649__$1;(statearr_15668_15697[(2)] = inst_15640);
(statearr_15668_15697[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (2)))
{var state_15649__$1 = state_15649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15649__$1,(4),in$);
} else
{if((state_val_15650 === (19)))
{var inst_15635 = (state_15649[(2)]);var state_15649__$1 = state_15649;var statearr_15669_15698 = state_15649__$1;(statearr_15669_15698[(2)] = inst_15635);
(statearr_15669_15698[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (11)))
{var inst_15620 = (state_15649[(7)]);var inst_15606 = (state_15649[(10)]);var inst_15620__$1 = cljs.core.seq.call(null,inst_15606);var state_15649__$1 = (function (){var statearr_15670 = state_15649;(statearr_15670[(7)] = inst_15620__$1);
return statearr_15670;
})();if(inst_15620__$1)
{var statearr_15671_15699 = state_15649__$1;(statearr_15671_15699[(1)] = (14));
} else
{var statearr_15672_15700 = state_15649__$1;(statearr_15672_15700[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (9)))
{var inst_15642 = (state_15649[(2)]);var state_15649__$1 = (function (){var statearr_15673 = state_15649;(statearr_15673[(15)] = inst_15642);
return statearr_15673;
})();var statearr_15674_15701 = state_15649__$1;(statearr_15674_15701[(2)] = null);
(statearr_15674_15701[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (5)))
{var inst_15598 = cljs.core.async.close_BANG_.call(null,out);var state_15649__$1 = state_15649;var statearr_15675_15702 = state_15649__$1;(statearr_15675_15702[(2)] = inst_15598);
(statearr_15675_15702[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (14)))
{var inst_15620 = (state_15649[(7)]);var inst_15622 = cljs.core.chunked_seq_QMARK_.call(null,inst_15620);var state_15649__$1 = state_15649;if(inst_15622)
{var statearr_15676_15703 = state_15649__$1;(statearr_15676_15703[(1)] = (17));
} else
{var statearr_15677_15704 = state_15649__$1;(statearr_15677_15704[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (16)))
{var inst_15638 = (state_15649[(2)]);var state_15649__$1 = state_15649;var statearr_15678_15705 = state_15649__$1;(statearr_15678_15705[(2)] = inst_15638);
(statearr_15678_15705[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15650 === (10)))
{var inst_15607 = (state_15649[(9)]);var inst_15609 = (state_15649[(11)]);var inst_15614 = cljs.core._nth.call(null,inst_15607,inst_15609);var state_15649__$1 = state_15649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15649__$1,(13),out,inst_15614);
} else
{if((state_val_15650 === (18)))
{var inst_15620 = (state_15649[(7)]);var inst_15629 = cljs.core.first.call(null,inst_15620);var state_15649__$1 = state_15649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15649__$1,(20),out,inst_15629);
} else
{if((state_val_15650 === (8)))
{var inst_15609 = (state_15649[(11)]);var inst_15608 = (state_15649[(12)]);var inst_15611 = (inst_15609 < inst_15608);var inst_15612 = inst_15611;var state_15649__$1 = state_15649;if(cljs.core.truth_(inst_15612))
{var statearr_15679_15706 = state_15649__$1;(statearr_15679_15706[(1)] = (10));
} else
{var statearr_15680_15707 = state_15649__$1;(statearr_15680_15707[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_15684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15684[(0)] = state_machine__5679__auto__);
(statearr_15684[(1)] = (1));
return statearr_15684;
});
var state_machine__5679__auto____1 = (function (state_15649){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15649);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15685){if((e15685 instanceof Object))
{var ex__5682__auto__ = e15685;var statearr_15686_15708 = state_15649;(statearr_15686_15708[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15649);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15709 = state_15649;
state_15649 = G__15709;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15649){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15687 = f__5694__auto__.call(null);(statearr_15687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15687;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___15790 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15790){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15790){
return (function (state_15769){var state_val_15770 = (state_15769[(1)]);if((state_val_15770 === (7)))
{var inst_15765 = (state_15769[(2)]);var state_15769__$1 = state_15769;var statearr_15771_15791 = state_15769__$1;(statearr_15771_15791[(2)] = inst_15765);
(statearr_15771_15791[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15770 === (1)))
{var state_15769__$1 = state_15769;var statearr_15772_15792 = state_15769__$1;(statearr_15772_15792[(2)] = null);
(statearr_15772_15792[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15770 === (4)))
{var inst_15752 = (state_15769[(7)]);var inst_15752__$1 = (state_15769[(2)]);var inst_15753 = (inst_15752__$1 == null);var state_15769__$1 = (function (){var statearr_15773 = state_15769;(statearr_15773[(7)] = inst_15752__$1);
return statearr_15773;
})();if(cljs.core.truth_(inst_15753))
{var statearr_15774_15793 = state_15769__$1;(statearr_15774_15793[(1)] = (5));
} else
{var statearr_15775_15794 = state_15769__$1;(statearr_15775_15794[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15770 === (6)))
{var inst_15752 = (state_15769[(7)]);var state_15769__$1 = state_15769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15769__$1,(11),to,inst_15752);
} else
{if((state_val_15770 === (3)))
{var inst_15767 = (state_15769[(2)]);var state_15769__$1 = state_15769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15769__$1,inst_15767);
} else
{if((state_val_15770 === (2)))
{var state_15769__$1 = state_15769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15769__$1,(4),from);
} else
{if((state_val_15770 === (11)))
{var inst_15762 = (state_15769[(2)]);var state_15769__$1 = (function (){var statearr_15776 = state_15769;(statearr_15776[(8)] = inst_15762);
return statearr_15776;
})();var statearr_15777_15795 = state_15769__$1;(statearr_15777_15795[(2)] = null);
(statearr_15777_15795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15770 === (9)))
{var state_15769__$1 = state_15769;var statearr_15778_15796 = state_15769__$1;(statearr_15778_15796[(2)] = null);
(statearr_15778_15796[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15770 === (5)))
{var state_15769__$1 = state_15769;if(cljs.core.truth_(close_QMARK_))
{var statearr_15779_15797 = state_15769__$1;(statearr_15779_15797[(1)] = (8));
} else
{var statearr_15780_15798 = state_15769__$1;(statearr_15780_15798[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15770 === (10)))
{var inst_15759 = (state_15769[(2)]);var state_15769__$1 = state_15769;var statearr_15781_15799 = state_15769__$1;(statearr_15781_15799[(2)] = inst_15759);
(statearr_15781_15799[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15770 === (8)))
{var inst_15756 = cljs.core.async.close_BANG_.call(null,to);var state_15769__$1 = state_15769;var statearr_15782_15800 = state_15769__$1;(statearr_15782_15800[(2)] = inst_15756);
(statearr_15782_15800[(1)] = (10));
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
});})(c__5693__auto___15790))
;return ((function (switch__5678__auto__,c__5693__auto___15790){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15786 = [null,null,null,null,null,null,null,null,null];(statearr_15786[(0)] = state_machine__5679__auto__);
(statearr_15786[(1)] = (1));
return statearr_15786;
});
var state_machine__5679__auto____1 = (function (state_15769){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15769);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15787){if((e15787 instanceof Object))
{var ex__5682__auto__ = e15787;var statearr_15788_15801 = state_15769;(statearr_15788_15801[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15769);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15802 = state_15769;
state_15769 = G__15802;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15769){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15790))
})();var state__5695__auto__ = (function (){var statearr_15789 = f__5694__auto__.call(null);(statearr_15789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15790);
return statearr_15789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15790))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___15889 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15889,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15889,tc,fc){
return (function (state_15867){var state_val_15868 = (state_15867[(1)]);if((state_val_15868 === (7)))
{var inst_15863 = (state_15867[(2)]);var state_15867__$1 = state_15867;var statearr_15869_15890 = state_15867__$1;(statearr_15869_15890[(2)] = inst_15863);
(statearr_15869_15890[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15868 === (1)))
{var state_15867__$1 = state_15867;var statearr_15870_15891 = state_15867__$1;(statearr_15870_15891[(2)] = null);
(statearr_15870_15891[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15868 === (4)))
{var inst_15848 = (state_15867[(7)]);var inst_15848__$1 = (state_15867[(2)]);var inst_15849 = (inst_15848__$1 == null);var state_15867__$1 = (function (){var statearr_15871 = state_15867;(statearr_15871[(7)] = inst_15848__$1);
return statearr_15871;
})();if(cljs.core.truth_(inst_15849))
{var statearr_15872_15892 = state_15867__$1;(statearr_15872_15892[(1)] = (5));
} else
{var statearr_15873_15893 = state_15867__$1;(statearr_15873_15893[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15868 === (6)))
{var inst_15848 = (state_15867[(7)]);var inst_15854 = p.call(null,inst_15848);var state_15867__$1 = state_15867;if(cljs.core.truth_(inst_15854))
{var statearr_15874_15894 = state_15867__$1;(statearr_15874_15894[(1)] = (9));
} else
{var statearr_15875_15895 = state_15867__$1;(statearr_15875_15895[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15868 === (3)))
{var inst_15865 = (state_15867[(2)]);var state_15867__$1 = state_15867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15867__$1,inst_15865);
} else
{if((state_val_15868 === (2)))
{var state_15867__$1 = state_15867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15867__$1,(4),ch);
} else
{if((state_val_15868 === (11)))
{var inst_15848 = (state_15867[(7)]);var inst_15858 = (state_15867[(2)]);var state_15867__$1 = state_15867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15867__$1,(8),inst_15858,inst_15848);
} else
{if((state_val_15868 === (9)))
{var state_15867__$1 = state_15867;var statearr_15876_15896 = state_15867__$1;(statearr_15876_15896[(2)] = tc);
(statearr_15876_15896[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15868 === (5)))
{var inst_15851 = cljs.core.async.close_BANG_.call(null,tc);var inst_15852 = cljs.core.async.close_BANG_.call(null,fc);var state_15867__$1 = (function (){var statearr_15877 = state_15867;(statearr_15877[(8)] = inst_15851);
return statearr_15877;
})();var statearr_15878_15897 = state_15867__$1;(statearr_15878_15897[(2)] = inst_15852);
(statearr_15878_15897[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15868 === (10)))
{var state_15867__$1 = state_15867;var statearr_15879_15898 = state_15867__$1;(statearr_15879_15898[(2)] = fc);
(statearr_15879_15898[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15868 === (8)))
{var inst_15860 = (state_15867[(2)]);var state_15867__$1 = (function (){var statearr_15880 = state_15867;(statearr_15880[(9)] = inst_15860);
return statearr_15880;
})();var statearr_15881_15899 = state_15867__$1;(statearr_15881_15899[(2)] = null);
(statearr_15881_15899[(1)] = (2));
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
});})(c__5693__auto___15889,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___15889,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15885 = [null,null,null,null,null,null,null,null,null,null];(statearr_15885[(0)] = state_machine__5679__auto__);
(statearr_15885[(1)] = (1));
return statearr_15885;
});
var state_machine__5679__auto____1 = (function (state_15867){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15867);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15886){if((e15886 instanceof Object))
{var ex__5682__auto__ = e15886;var statearr_15887_15900 = state_15867;(statearr_15887_15900[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15886;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15901 = state_15867;
state_15867 = G__15901;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15867){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15889,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_15888 = f__5694__auto__.call(null);(statearr_15888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15889);
return statearr_15888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15889,tc,fc))
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
return (function (state_15948){var state_val_15949 = (state_15948[(1)]);if((state_val_15949 === (7)))
{var inst_15944 = (state_15948[(2)]);var state_15948__$1 = state_15948;var statearr_15950_15966 = state_15948__$1;(statearr_15950_15966[(2)] = inst_15944);
(statearr_15950_15966[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15949 === (6)))
{var inst_15934 = (state_15948[(7)]);var inst_15937 = (state_15948[(8)]);var inst_15941 = f.call(null,inst_15934,inst_15937);var inst_15934__$1 = inst_15941;var state_15948__$1 = (function (){var statearr_15951 = state_15948;(statearr_15951[(7)] = inst_15934__$1);
return statearr_15951;
})();var statearr_15952_15967 = state_15948__$1;(statearr_15952_15967[(2)] = null);
(statearr_15952_15967[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15949 === (5)))
{var inst_15934 = (state_15948[(7)]);var state_15948__$1 = state_15948;var statearr_15953_15968 = state_15948__$1;(statearr_15953_15968[(2)] = inst_15934);
(statearr_15953_15968[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15949 === (4)))
{var inst_15937 = (state_15948[(8)]);var inst_15937__$1 = (state_15948[(2)]);var inst_15938 = (inst_15937__$1 == null);var state_15948__$1 = (function (){var statearr_15954 = state_15948;(statearr_15954[(8)] = inst_15937__$1);
return statearr_15954;
})();if(cljs.core.truth_(inst_15938))
{var statearr_15955_15969 = state_15948__$1;(statearr_15955_15969[(1)] = (5));
} else
{var statearr_15956_15970 = state_15948__$1;(statearr_15956_15970[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15949 === (3)))
{var inst_15946 = (state_15948[(2)]);var state_15948__$1 = state_15948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15948__$1,inst_15946);
} else
{if((state_val_15949 === (2)))
{var state_15948__$1 = state_15948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15948__$1,(4),ch);
} else
{if((state_val_15949 === (1)))
{var inst_15934 = init;var state_15948__$1 = (function (){var statearr_15957 = state_15948;(statearr_15957[(7)] = inst_15934);
return statearr_15957;
})();var statearr_15958_15971 = state_15948__$1;(statearr_15958_15971[(2)] = null);
(statearr_15958_15971[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_15962 = [null,null,null,null,null,null,null,null,null];(statearr_15962[(0)] = state_machine__5679__auto__);
(statearr_15962[(1)] = (1));
return statearr_15962;
});
var state_machine__5679__auto____1 = (function (state_15948){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15948);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15963){if((e15963 instanceof Object))
{var ex__5682__auto__ = e15963;var statearr_15964_15972 = state_15948;(statearr_15964_15972[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15948);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15963;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15973 = state_15948;
state_15948 = G__15973;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15948){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15965 = f__5694__auto__.call(null);(statearr_15965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15965;
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
return (function (state_16035){var state_val_16036 = (state_16035[(1)]);if((state_val_16036 === (7)))
{var inst_16016 = (state_16035[(7)]);var inst_16021 = (state_16035[(2)]);var inst_16022 = cljs.core.next.call(null,inst_16016);var inst_16016__$1 = inst_16022;var state_16035__$1 = (function (){var statearr_16037 = state_16035;(statearr_16037[(7)] = inst_16016__$1);
(statearr_16037[(8)] = inst_16021);
return statearr_16037;
})();var statearr_16038_16056 = state_16035__$1;(statearr_16038_16056[(2)] = null);
(statearr_16038_16056[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16036 === (1)))
{var inst_16015 = cljs.core.seq.call(null,coll);var inst_16016 = inst_16015;var state_16035__$1 = (function (){var statearr_16039 = state_16035;(statearr_16039[(7)] = inst_16016);
return statearr_16039;
})();var statearr_16040_16057 = state_16035__$1;(statearr_16040_16057[(2)] = null);
(statearr_16040_16057[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16036 === (4)))
{var inst_16016 = (state_16035[(7)]);var inst_16019 = cljs.core.first.call(null,inst_16016);var state_16035__$1 = state_16035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16035__$1,(7),ch,inst_16019);
} else
{if((state_val_16036 === (6)))
{var inst_16031 = (state_16035[(2)]);var state_16035__$1 = state_16035;var statearr_16041_16058 = state_16035__$1;(statearr_16041_16058[(2)] = inst_16031);
(statearr_16041_16058[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16036 === (3)))
{var inst_16033 = (state_16035[(2)]);var state_16035__$1 = state_16035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16035__$1,inst_16033);
} else
{if((state_val_16036 === (2)))
{var inst_16016 = (state_16035[(7)]);var state_16035__$1 = state_16035;if(cljs.core.truth_(inst_16016))
{var statearr_16042_16059 = state_16035__$1;(statearr_16042_16059[(1)] = (4));
} else
{var statearr_16043_16060 = state_16035__$1;(statearr_16043_16060[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16036 === (9)))
{var state_16035__$1 = state_16035;var statearr_16044_16061 = state_16035__$1;(statearr_16044_16061[(2)] = null);
(statearr_16044_16061[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16036 === (5)))
{var state_16035__$1 = state_16035;if(cljs.core.truth_(close_QMARK_))
{var statearr_16045_16062 = state_16035__$1;(statearr_16045_16062[(1)] = (8));
} else
{var statearr_16046_16063 = state_16035__$1;(statearr_16046_16063[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16036 === (10)))
{var inst_16029 = (state_16035[(2)]);var state_16035__$1 = state_16035;var statearr_16047_16064 = state_16035__$1;(statearr_16047_16064[(2)] = inst_16029);
(statearr_16047_16064[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16036 === (8)))
{var inst_16026 = cljs.core.async.close_BANG_.call(null,ch);var state_16035__$1 = state_16035;var statearr_16048_16065 = state_16035__$1;(statearr_16048_16065[(2)] = inst_16026);
(statearr_16048_16065[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_16052 = [null,null,null,null,null,null,null,null,null];(statearr_16052[(0)] = state_machine__5679__auto__);
(statearr_16052[(1)] = (1));
return statearr_16052;
});
var state_machine__5679__auto____1 = (function (state_16035){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16035);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16053){if((e16053 instanceof Object))
{var ex__5682__auto__ = e16053;var statearr_16054_16066 = state_16035;(statearr_16054_16066[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16035);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16067 = state_16035;
state_16035 = G__16067;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16035){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_16055 = f__5694__auto__.call(null);(statearr_16055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_16055;
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
cljs.core.async.Mux = (function (){var obj16069 = {};return obj16069;
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
cljs.core.async.Mult = (function (){var obj16071 = {};return obj16071;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16295 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16295 = (function (cs,ch,mult,meta16296){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16296 = meta16296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16295.cljs$lang$type = true;
cljs.core.async.t16295.cljs$lang$ctorStr = "cljs.core.async/t16295";
cljs.core.async.t16295.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16295");
});})(cs))
;
cljs.core.async.t16295.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16295.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16295.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16295.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16295.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16297){var self__ = this;
var _16297__$1 = this;return self__.meta16296;
});})(cs))
;
cljs.core.async.t16295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16297,meta16296__$1){var self__ = this;
var _16297__$1 = this;return (new cljs.core.async.t16295(self__.cs,self__.ch,self__.mult,meta16296__$1));
});})(cs))
;
cljs.core.async.__GT_t16295 = ((function (cs){
return (function __GT_t16295(cs__$1,ch__$1,mult__$1,meta16296){return (new cljs.core.async.t16295(cs__$1,ch__$1,mult__$1,meta16296));
});})(cs))
;
}
return (new cljs.core.async.t16295(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___16518 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16518,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16518,cs,m,dchan,dctr,done){
return (function (state_16432){var state_val_16433 = (state_16432[(1)]);if((state_val_16433 === (7)))
{var inst_16428 = (state_16432[(2)]);var state_16432__$1 = state_16432;var statearr_16434_16519 = state_16432__$1;(statearr_16434_16519[(2)] = inst_16428);
(statearr_16434_16519[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (20)))
{var inst_16329 = (state_16432[(7)]);var inst_16339 = cljs.core.first.call(null,inst_16329);var inst_16340 = cljs.core.nth.call(null,inst_16339,(0),null);var inst_16341 = cljs.core.nth.call(null,inst_16339,(1),null);var state_16432__$1 = (function (){var statearr_16435 = state_16432;(statearr_16435[(8)] = inst_16340);
return statearr_16435;
})();if(cljs.core.truth_(inst_16341))
{var statearr_16436_16520 = state_16432__$1;(statearr_16436_16520[(1)] = (22));
} else
{var statearr_16437_16521 = state_16432__$1;(statearr_16437_16521[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (27)))
{var inst_16369 = (state_16432[(9)]);var inst_16371 = (state_16432[(10)]);var inst_16376 = cljs.core._nth.call(null,inst_16369,inst_16371);var state_16432__$1 = (function (){var statearr_16438 = state_16432;(statearr_16438[(11)] = inst_16376);
return statearr_16438;
})();var statearr_16439_16522 = state_16432__$1;(statearr_16439_16522[(2)] = null);
(statearr_16439_16522[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (1)))
{var state_16432__$1 = state_16432;var statearr_16440_16523 = state_16432__$1;(statearr_16440_16523[(2)] = null);
(statearr_16440_16523[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (24)))
{var inst_16329 = (state_16432[(7)]);var inst_16346 = (state_16432[(2)]);var inst_16347 = cljs.core.next.call(null,inst_16329);var inst_16309 = inst_16347;var inst_16310 = null;var inst_16311 = (0);var inst_16312 = (0);var state_16432__$1 = (function (){var statearr_16441 = state_16432;(statearr_16441[(12)] = inst_16309);
(statearr_16441[(13)] = inst_16310);
(statearr_16441[(14)] = inst_16311);
(statearr_16441[(15)] = inst_16312);
(statearr_16441[(16)] = inst_16346);
return statearr_16441;
})();var statearr_16442_16524 = state_16432__$1;(statearr_16442_16524[(2)] = null);
(statearr_16442_16524[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (39)))
{var inst_16389 = (state_16432[(17)]);var inst_16407 = (state_16432[(2)]);var inst_16408 = cljs.core.next.call(null,inst_16389);var inst_16368 = inst_16408;var inst_16369 = null;var inst_16370 = (0);var inst_16371 = (0);var state_16432__$1 = (function (){var statearr_16446 = state_16432;(statearr_16446[(9)] = inst_16369);
(statearr_16446[(18)] = inst_16368);
(statearr_16446[(19)] = inst_16407);
(statearr_16446[(20)] = inst_16370);
(statearr_16446[(10)] = inst_16371);
return statearr_16446;
})();var statearr_16447_16525 = state_16432__$1;(statearr_16447_16525[(2)] = null);
(statearr_16447_16525[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (4)))
{var inst_16300 = (state_16432[(21)]);var inst_16300__$1 = (state_16432[(2)]);var inst_16301 = (inst_16300__$1 == null);var state_16432__$1 = (function (){var statearr_16448 = state_16432;(statearr_16448[(21)] = inst_16300__$1);
return statearr_16448;
})();if(cljs.core.truth_(inst_16301))
{var statearr_16449_16526 = state_16432__$1;(statearr_16449_16526[(1)] = (5));
} else
{var statearr_16450_16527 = state_16432__$1;(statearr_16450_16527[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (15)))
{var inst_16309 = (state_16432[(12)]);var inst_16310 = (state_16432[(13)]);var inst_16311 = (state_16432[(14)]);var inst_16312 = (state_16432[(15)]);var inst_16325 = (state_16432[(2)]);var inst_16326 = (inst_16312 + (1));var tmp16443 = inst_16309;var tmp16444 = inst_16310;var tmp16445 = inst_16311;var inst_16309__$1 = tmp16443;var inst_16310__$1 = tmp16444;var inst_16311__$1 = tmp16445;var inst_16312__$1 = inst_16326;var state_16432__$1 = (function (){var statearr_16451 = state_16432;(statearr_16451[(12)] = inst_16309__$1);
(statearr_16451[(13)] = inst_16310__$1);
(statearr_16451[(22)] = inst_16325);
(statearr_16451[(14)] = inst_16311__$1);
(statearr_16451[(15)] = inst_16312__$1);
return statearr_16451;
})();var statearr_16452_16528 = state_16432__$1;(statearr_16452_16528[(2)] = null);
(statearr_16452_16528[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (21)))
{var inst_16350 = (state_16432[(2)]);var state_16432__$1 = state_16432;var statearr_16453_16529 = state_16432__$1;(statearr_16453_16529[(2)] = inst_16350);
(statearr_16453_16529[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (31)))
{var inst_16376 = (state_16432[(11)]);var inst_16377 = (state_16432[(2)]);var inst_16378 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16379 = cljs.core.async.untap_STAR_.call(null,m,inst_16376);var state_16432__$1 = (function (){var statearr_16454 = state_16432;(statearr_16454[(23)] = inst_16377);
(statearr_16454[(24)] = inst_16378);
return statearr_16454;
})();var statearr_16455_16530 = state_16432__$1;(statearr_16455_16530[(2)] = inst_16379);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16432__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (32)))
{var inst_16300 = (state_16432[(21)]);var inst_16376 = (state_16432[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16432,(31),Object,null,(30));var inst_16383 = cljs.core.async.put_BANG_.call(null,inst_16376,inst_16300,done);var state_16432__$1 = state_16432;var statearr_16456_16531 = state_16432__$1;(statearr_16456_16531[(2)] = inst_16383);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16432__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (40)))
{var inst_16398 = (state_16432[(25)]);var inst_16399 = (state_16432[(2)]);var inst_16400 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16401 = cljs.core.async.untap_STAR_.call(null,m,inst_16398);var state_16432__$1 = (function (){var statearr_16457 = state_16432;(statearr_16457[(26)] = inst_16399);
(statearr_16457[(27)] = inst_16400);
return statearr_16457;
})();var statearr_16458_16532 = state_16432__$1;(statearr_16458_16532[(2)] = inst_16401);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16432__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (33)))
{var inst_16389 = (state_16432[(17)]);var inst_16391 = cljs.core.chunked_seq_QMARK_.call(null,inst_16389);var state_16432__$1 = state_16432;if(inst_16391)
{var statearr_16459_16533 = state_16432__$1;(statearr_16459_16533[(1)] = (36));
} else
{var statearr_16460_16534 = state_16432__$1;(statearr_16460_16534[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (13)))
{var inst_16319 = (state_16432[(28)]);var inst_16322 = cljs.core.async.close_BANG_.call(null,inst_16319);var state_16432__$1 = state_16432;var statearr_16461_16535 = state_16432__$1;(statearr_16461_16535[(2)] = inst_16322);
(statearr_16461_16535[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (22)))
{var inst_16340 = (state_16432[(8)]);var inst_16343 = cljs.core.async.close_BANG_.call(null,inst_16340);var state_16432__$1 = state_16432;var statearr_16462_16536 = state_16432__$1;(statearr_16462_16536[(2)] = inst_16343);
(statearr_16462_16536[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (36)))
{var inst_16389 = (state_16432[(17)]);var inst_16393 = cljs.core.chunk_first.call(null,inst_16389);var inst_16394 = cljs.core.chunk_rest.call(null,inst_16389);var inst_16395 = cljs.core.count.call(null,inst_16393);var inst_16368 = inst_16394;var inst_16369 = inst_16393;var inst_16370 = inst_16395;var inst_16371 = (0);var state_16432__$1 = (function (){var statearr_16463 = state_16432;(statearr_16463[(9)] = inst_16369);
(statearr_16463[(18)] = inst_16368);
(statearr_16463[(20)] = inst_16370);
(statearr_16463[(10)] = inst_16371);
return statearr_16463;
})();var statearr_16464_16537 = state_16432__$1;(statearr_16464_16537[(2)] = null);
(statearr_16464_16537[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (41)))
{var inst_16300 = (state_16432[(21)]);var inst_16398 = (state_16432[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16432,(40),Object,null,(39));var inst_16405 = cljs.core.async.put_BANG_.call(null,inst_16398,inst_16300,done);var state_16432__$1 = state_16432;var statearr_16465_16538 = state_16432__$1;(statearr_16465_16538[(2)] = inst_16405);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16432__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (43)))
{var state_16432__$1 = state_16432;var statearr_16466_16539 = state_16432__$1;(statearr_16466_16539[(2)] = null);
(statearr_16466_16539[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (29)))
{var inst_16416 = (state_16432[(2)]);var state_16432__$1 = state_16432;var statearr_16467_16540 = state_16432__$1;(statearr_16467_16540[(2)] = inst_16416);
(statearr_16467_16540[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (44)))
{var inst_16425 = (state_16432[(2)]);var state_16432__$1 = (function (){var statearr_16468 = state_16432;(statearr_16468[(29)] = inst_16425);
return statearr_16468;
})();var statearr_16469_16541 = state_16432__$1;(statearr_16469_16541[(2)] = null);
(statearr_16469_16541[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (6)))
{var inst_16360 = (state_16432[(30)]);var inst_16359 = cljs.core.deref.call(null,cs);var inst_16360__$1 = cljs.core.keys.call(null,inst_16359);var inst_16361 = cljs.core.count.call(null,inst_16360__$1);var inst_16362 = cljs.core.reset_BANG_.call(null,dctr,inst_16361);var inst_16367 = cljs.core.seq.call(null,inst_16360__$1);var inst_16368 = inst_16367;var inst_16369 = null;var inst_16370 = (0);var inst_16371 = (0);var state_16432__$1 = (function (){var statearr_16470 = state_16432;(statearr_16470[(9)] = inst_16369);
(statearr_16470[(30)] = inst_16360__$1);
(statearr_16470[(18)] = inst_16368);
(statearr_16470[(31)] = inst_16362);
(statearr_16470[(20)] = inst_16370);
(statearr_16470[(10)] = inst_16371);
return statearr_16470;
})();var statearr_16471_16542 = state_16432__$1;(statearr_16471_16542[(2)] = null);
(statearr_16471_16542[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (28)))
{var inst_16389 = (state_16432[(17)]);var inst_16368 = (state_16432[(18)]);var inst_16389__$1 = cljs.core.seq.call(null,inst_16368);var state_16432__$1 = (function (){var statearr_16472 = state_16432;(statearr_16472[(17)] = inst_16389__$1);
return statearr_16472;
})();if(inst_16389__$1)
{var statearr_16473_16543 = state_16432__$1;(statearr_16473_16543[(1)] = (33));
} else
{var statearr_16474_16544 = state_16432__$1;(statearr_16474_16544[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (25)))
{var inst_16370 = (state_16432[(20)]);var inst_16371 = (state_16432[(10)]);var inst_16373 = (inst_16371 < inst_16370);var inst_16374 = inst_16373;var state_16432__$1 = state_16432;if(cljs.core.truth_(inst_16374))
{var statearr_16475_16545 = state_16432__$1;(statearr_16475_16545[(1)] = (27));
} else
{var statearr_16476_16546 = state_16432__$1;(statearr_16476_16546[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (34)))
{var state_16432__$1 = state_16432;var statearr_16477_16547 = state_16432__$1;(statearr_16477_16547[(2)] = null);
(statearr_16477_16547[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (17)))
{var state_16432__$1 = state_16432;var statearr_16478_16548 = state_16432__$1;(statearr_16478_16548[(2)] = null);
(statearr_16478_16548[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (3)))
{var inst_16430 = (state_16432[(2)]);var state_16432__$1 = state_16432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16432__$1,inst_16430);
} else
{if((state_val_16433 === (12)))
{var inst_16355 = (state_16432[(2)]);var state_16432__$1 = state_16432;var statearr_16479_16549 = state_16432__$1;(statearr_16479_16549[(2)] = inst_16355);
(statearr_16479_16549[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (2)))
{var state_16432__$1 = state_16432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16432__$1,(4),ch);
} else
{if((state_val_16433 === (23)))
{var state_16432__$1 = state_16432;var statearr_16480_16550 = state_16432__$1;(statearr_16480_16550[(2)] = null);
(statearr_16480_16550[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (35)))
{var inst_16414 = (state_16432[(2)]);var state_16432__$1 = state_16432;var statearr_16481_16551 = state_16432__$1;(statearr_16481_16551[(2)] = inst_16414);
(statearr_16481_16551[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (19)))
{var inst_16329 = (state_16432[(7)]);var inst_16333 = cljs.core.chunk_first.call(null,inst_16329);var inst_16334 = cljs.core.chunk_rest.call(null,inst_16329);var inst_16335 = cljs.core.count.call(null,inst_16333);var inst_16309 = inst_16334;var inst_16310 = inst_16333;var inst_16311 = inst_16335;var inst_16312 = (0);var state_16432__$1 = (function (){var statearr_16482 = state_16432;(statearr_16482[(12)] = inst_16309);
(statearr_16482[(13)] = inst_16310);
(statearr_16482[(14)] = inst_16311);
(statearr_16482[(15)] = inst_16312);
return statearr_16482;
})();var statearr_16483_16552 = state_16432__$1;(statearr_16483_16552[(2)] = null);
(statearr_16483_16552[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (11)))
{var inst_16309 = (state_16432[(12)]);var inst_16329 = (state_16432[(7)]);var inst_16329__$1 = cljs.core.seq.call(null,inst_16309);var state_16432__$1 = (function (){var statearr_16484 = state_16432;(statearr_16484[(7)] = inst_16329__$1);
return statearr_16484;
})();if(inst_16329__$1)
{var statearr_16485_16553 = state_16432__$1;(statearr_16485_16553[(1)] = (16));
} else
{var statearr_16486_16554 = state_16432__$1;(statearr_16486_16554[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (9)))
{var inst_16357 = (state_16432[(2)]);var state_16432__$1 = state_16432;var statearr_16487_16555 = state_16432__$1;(statearr_16487_16555[(2)] = inst_16357);
(statearr_16487_16555[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (5)))
{var inst_16307 = cljs.core.deref.call(null,cs);var inst_16308 = cljs.core.seq.call(null,inst_16307);var inst_16309 = inst_16308;var inst_16310 = null;var inst_16311 = (0);var inst_16312 = (0);var state_16432__$1 = (function (){var statearr_16488 = state_16432;(statearr_16488[(12)] = inst_16309);
(statearr_16488[(13)] = inst_16310);
(statearr_16488[(14)] = inst_16311);
(statearr_16488[(15)] = inst_16312);
return statearr_16488;
})();var statearr_16489_16556 = state_16432__$1;(statearr_16489_16556[(2)] = null);
(statearr_16489_16556[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (14)))
{var state_16432__$1 = state_16432;var statearr_16490_16557 = state_16432__$1;(statearr_16490_16557[(2)] = null);
(statearr_16490_16557[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (45)))
{var inst_16422 = (state_16432[(2)]);var state_16432__$1 = state_16432;var statearr_16491_16558 = state_16432__$1;(statearr_16491_16558[(2)] = inst_16422);
(statearr_16491_16558[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (26)))
{var inst_16360 = (state_16432[(30)]);var inst_16418 = (state_16432[(2)]);var inst_16419 = cljs.core.seq.call(null,inst_16360);var state_16432__$1 = (function (){var statearr_16492 = state_16432;(statearr_16492[(32)] = inst_16418);
return statearr_16492;
})();if(inst_16419)
{var statearr_16493_16559 = state_16432__$1;(statearr_16493_16559[(1)] = (42));
} else
{var statearr_16494_16560 = state_16432__$1;(statearr_16494_16560[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (16)))
{var inst_16329 = (state_16432[(7)]);var inst_16331 = cljs.core.chunked_seq_QMARK_.call(null,inst_16329);var state_16432__$1 = state_16432;if(inst_16331)
{var statearr_16498_16561 = state_16432__$1;(statearr_16498_16561[(1)] = (19));
} else
{var statearr_16499_16562 = state_16432__$1;(statearr_16499_16562[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (38)))
{var inst_16411 = (state_16432[(2)]);var state_16432__$1 = state_16432;var statearr_16500_16563 = state_16432__$1;(statearr_16500_16563[(2)] = inst_16411);
(statearr_16500_16563[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (30)))
{var inst_16369 = (state_16432[(9)]);var inst_16368 = (state_16432[(18)]);var inst_16370 = (state_16432[(20)]);var inst_16371 = (state_16432[(10)]);var inst_16385 = (state_16432[(2)]);var inst_16386 = (inst_16371 + (1));var tmp16495 = inst_16369;var tmp16496 = inst_16368;var tmp16497 = inst_16370;var inst_16368__$1 = tmp16496;var inst_16369__$1 = tmp16495;var inst_16370__$1 = tmp16497;var inst_16371__$1 = inst_16386;var state_16432__$1 = (function (){var statearr_16501 = state_16432;(statearr_16501[(9)] = inst_16369__$1);
(statearr_16501[(18)] = inst_16368__$1);
(statearr_16501[(20)] = inst_16370__$1);
(statearr_16501[(10)] = inst_16371__$1);
(statearr_16501[(33)] = inst_16385);
return statearr_16501;
})();var statearr_16502_16564 = state_16432__$1;(statearr_16502_16564[(2)] = null);
(statearr_16502_16564[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (10)))
{var inst_16310 = (state_16432[(13)]);var inst_16312 = (state_16432[(15)]);var inst_16318 = cljs.core._nth.call(null,inst_16310,inst_16312);var inst_16319 = cljs.core.nth.call(null,inst_16318,(0),null);var inst_16320 = cljs.core.nth.call(null,inst_16318,(1),null);var state_16432__$1 = (function (){var statearr_16503 = state_16432;(statearr_16503[(28)] = inst_16319);
return statearr_16503;
})();if(cljs.core.truth_(inst_16320))
{var statearr_16504_16565 = state_16432__$1;(statearr_16504_16565[(1)] = (13));
} else
{var statearr_16505_16566 = state_16432__$1;(statearr_16505_16566[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (18)))
{var inst_16353 = (state_16432[(2)]);var state_16432__$1 = state_16432;var statearr_16506_16567 = state_16432__$1;(statearr_16506_16567[(2)] = inst_16353);
(statearr_16506_16567[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (42)))
{var state_16432__$1 = state_16432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16432__$1,(45),dchan);
} else
{if((state_val_16433 === (37)))
{var inst_16389 = (state_16432[(17)]);var inst_16398 = cljs.core.first.call(null,inst_16389);var state_16432__$1 = (function (){var statearr_16507 = state_16432;(statearr_16507[(25)] = inst_16398);
return statearr_16507;
})();var statearr_16508_16568 = state_16432__$1;(statearr_16508_16568[(2)] = null);
(statearr_16508_16568[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16433 === (8)))
{var inst_16311 = (state_16432[(14)]);var inst_16312 = (state_16432[(15)]);var inst_16314 = (inst_16312 < inst_16311);var inst_16315 = inst_16314;var state_16432__$1 = state_16432;if(cljs.core.truth_(inst_16315))
{var statearr_16509_16569 = state_16432__$1;(statearr_16509_16569[(1)] = (10));
} else
{var statearr_16510_16570 = state_16432__$1;(statearr_16510_16570[(1)] = (11));
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
});})(c__5693__auto___16518,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16518,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16514[(0)] = state_machine__5679__auto__);
(statearr_16514[(1)] = (1));
return statearr_16514;
});
var state_machine__5679__auto____1 = (function (state_16432){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16432);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16515){if((e16515 instanceof Object))
{var ex__5682__auto__ = e16515;var statearr_16516_16571 = state_16432;(statearr_16516_16571[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16572 = state_16432;
state_16432 = G__16572;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16432){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16518,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16517 = f__5694__auto__.call(null);(statearr_16517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16518);
return statearr_16517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16518,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16574 = {};return obj16574;
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
;var m = (function (){if(typeof cljs.core.async.t16684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16684 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16685){
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
this.meta16685 = meta16685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16684.cljs$lang$type = true;
cljs.core.async.t16684.cljs$lang$ctorStr = "cljs.core.async/t16684";
cljs.core.async.t16684.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16684");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16684.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16684.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16684.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16684.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16684.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16684.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16684.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16686){var self__ = this;
var _16686__$1 = this;return self__.meta16685;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16686,meta16685__$1){var self__ = this;
var _16686__$1 = this;return (new cljs.core.async.t16684(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16685__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16684 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16684(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16685){return (new cljs.core.async.t16684(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16685));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16684(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___16793 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16751){var state_val_16752 = (state_16751[(1)]);if((state_val_16752 === (7)))
{var inst_16700 = (state_16751[(7)]);var inst_16705 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16700);var state_16751__$1 = state_16751;var statearr_16753_16794 = state_16751__$1;(statearr_16753_16794[(2)] = inst_16705);
(statearr_16753_16794[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (20)))
{var inst_16715 = (state_16751[(8)]);var state_16751__$1 = state_16751;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16751__$1,(23),out,inst_16715);
} else
{if((state_val_16752 === (1)))
{var inst_16690 = (state_16751[(9)]);var inst_16690__$1 = calc_state.call(null);var inst_16691 = cljs.core.seq_QMARK_.call(null,inst_16690__$1);var state_16751__$1 = (function (){var statearr_16754 = state_16751;(statearr_16754[(9)] = inst_16690__$1);
return statearr_16754;
})();if(inst_16691)
{var statearr_16755_16795 = state_16751__$1;(statearr_16755_16795[(1)] = (2));
} else
{var statearr_16756_16796 = state_16751__$1;(statearr_16756_16796[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (4)))
{var inst_16690 = (state_16751[(9)]);var inst_16696 = (state_16751[(2)]);var inst_16697 = cljs.core.get.call(null,inst_16696,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16698 = cljs.core.get.call(null,inst_16696,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16699 = cljs.core.get.call(null,inst_16696,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16700 = inst_16690;var state_16751__$1 = (function (){var statearr_16757 = state_16751;(statearr_16757[(10)] = inst_16697);
(statearr_16757[(7)] = inst_16700);
(statearr_16757[(11)] = inst_16698);
(statearr_16757[(12)] = inst_16699);
return statearr_16757;
})();var statearr_16758_16797 = state_16751__$1;(statearr_16758_16797[(2)] = null);
(statearr_16758_16797[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (15)))
{var state_16751__$1 = state_16751;var statearr_16759_16798 = state_16751__$1;(statearr_16759_16798[(2)] = null);
(statearr_16759_16798[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (21)))
{var state_16751__$1 = state_16751;var statearr_16760_16799 = state_16751__$1;(statearr_16760_16799[(2)] = null);
(statearr_16760_16799[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (13)))
{var inst_16747 = (state_16751[(2)]);var state_16751__$1 = state_16751;var statearr_16761_16800 = state_16751__$1;(statearr_16761_16800[(2)] = inst_16747);
(statearr_16761_16800[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (22)))
{var inst_16708 = (state_16751[(13)]);var inst_16744 = (state_16751[(2)]);var inst_16700 = inst_16708;var state_16751__$1 = (function (){var statearr_16762 = state_16751;(statearr_16762[(14)] = inst_16744);
(statearr_16762[(7)] = inst_16700);
return statearr_16762;
})();var statearr_16763_16801 = state_16751__$1;(statearr_16763_16801[(2)] = null);
(statearr_16763_16801[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (6)))
{var inst_16749 = (state_16751[(2)]);var state_16751__$1 = state_16751;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16751__$1,inst_16749);
} else
{if((state_val_16752 === (17)))
{var inst_16730 = (state_16751[(15)]);var state_16751__$1 = state_16751;var statearr_16764_16802 = state_16751__$1;(statearr_16764_16802[(2)] = inst_16730);
(statearr_16764_16802[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (3)))
{var inst_16690 = (state_16751[(9)]);var state_16751__$1 = state_16751;var statearr_16765_16803 = state_16751__$1;(statearr_16765_16803[(2)] = inst_16690);
(statearr_16765_16803[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (12)))
{var inst_16716 = (state_16751[(16)]);var inst_16711 = (state_16751[(17)]);var inst_16730 = (state_16751[(15)]);var inst_16730__$1 = inst_16711.call(null,inst_16716);var state_16751__$1 = (function (){var statearr_16766 = state_16751;(statearr_16766[(15)] = inst_16730__$1);
return statearr_16766;
})();if(cljs.core.truth_(inst_16730__$1))
{var statearr_16767_16804 = state_16751__$1;(statearr_16767_16804[(1)] = (17));
} else
{var statearr_16768_16805 = state_16751__$1;(statearr_16768_16805[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (2)))
{var inst_16690 = (state_16751[(9)]);var inst_16693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16690);var state_16751__$1 = state_16751;var statearr_16769_16806 = state_16751__$1;(statearr_16769_16806[(2)] = inst_16693);
(statearr_16769_16806[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (23)))
{var inst_16741 = (state_16751[(2)]);var state_16751__$1 = state_16751;var statearr_16770_16807 = state_16751__$1;(statearr_16770_16807[(2)] = inst_16741);
(statearr_16770_16807[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (19)))
{var inst_16738 = (state_16751[(2)]);var state_16751__$1 = state_16751;if(cljs.core.truth_(inst_16738))
{var statearr_16771_16808 = state_16751__$1;(statearr_16771_16808[(1)] = (20));
} else
{var statearr_16772_16809 = state_16751__$1;(statearr_16772_16809[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (11)))
{var inst_16715 = (state_16751[(8)]);var inst_16721 = (inst_16715 == null);var state_16751__$1 = state_16751;if(cljs.core.truth_(inst_16721))
{var statearr_16773_16810 = state_16751__$1;(statearr_16773_16810[(1)] = (14));
} else
{var statearr_16774_16811 = state_16751__$1;(statearr_16774_16811[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (9)))
{var inst_16708 = (state_16751[(13)]);var inst_16708__$1 = (state_16751[(2)]);var inst_16709 = cljs.core.get.call(null,inst_16708__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16710 = cljs.core.get.call(null,inst_16708__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16711 = cljs.core.get.call(null,inst_16708__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16751__$1 = (function (){var statearr_16775 = state_16751;(statearr_16775[(18)] = inst_16710);
(statearr_16775[(17)] = inst_16711);
(statearr_16775[(13)] = inst_16708__$1);
return statearr_16775;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16751__$1,(10),inst_16709);
} else
{if((state_val_16752 === (5)))
{var inst_16700 = (state_16751[(7)]);var inst_16703 = cljs.core.seq_QMARK_.call(null,inst_16700);var state_16751__$1 = state_16751;if(inst_16703)
{var statearr_16776_16812 = state_16751__$1;(statearr_16776_16812[(1)] = (7));
} else
{var statearr_16777_16813 = state_16751__$1;(statearr_16777_16813[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (14)))
{var inst_16716 = (state_16751[(16)]);var inst_16723 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16716);var state_16751__$1 = state_16751;var statearr_16778_16814 = state_16751__$1;(statearr_16778_16814[(2)] = inst_16723);
(statearr_16778_16814[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (16)))
{var inst_16726 = (state_16751[(2)]);var inst_16727 = calc_state.call(null);var inst_16700 = inst_16727;var state_16751__$1 = (function (){var statearr_16779 = state_16751;(statearr_16779[(7)] = inst_16700);
(statearr_16779[(19)] = inst_16726);
return statearr_16779;
})();var statearr_16780_16815 = state_16751__$1;(statearr_16780_16815[(2)] = null);
(statearr_16780_16815[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (10)))
{var inst_16716 = (state_16751[(16)]);var inst_16715 = (state_16751[(8)]);var inst_16714 = (state_16751[(2)]);var inst_16715__$1 = cljs.core.nth.call(null,inst_16714,(0),null);var inst_16716__$1 = cljs.core.nth.call(null,inst_16714,(1),null);var inst_16717 = (inst_16715__$1 == null);var inst_16718 = cljs.core._EQ_.call(null,inst_16716__$1,change);var inst_16719 = (inst_16717) || (inst_16718);var state_16751__$1 = (function (){var statearr_16781 = state_16751;(statearr_16781[(16)] = inst_16716__$1);
(statearr_16781[(8)] = inst_16715__$1);
return statearr_16781;
})();if(cljs.core.truth_(inst_16719))
{var statearr_16782_16816 = state_16751__$1;(statearr_16782_16816[(1)] = (11));
} else
{var statearr_16783_16817 = state_16751__$1;(statearr_16783_16817[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (18)))
{var inst_16716 = (state_16751[(16)]);var inst_16710 = (state_16751[(18)]);var inst_16711 = (state_16751[(17)]);var inst_16733 = cljs.core.empty_QMARK_.call(null,inst_16711);var inst_16734 = inst_16710.call(null,inst_16716);var inst_16735 = cljs.core.not.call(null,inst_16734);var inst_16736 = (inst_16733) && (inst_16735);var state_16751__$1 = state_16751;var statearr_16784_16818 = state_16751__$1;(statearr_16784_16818[(2)] = inst_16736);
(statearr_16784_16818[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16752 === (8)))
{var inst_16700 = (state_16751[(7)]);var state_16751__$1 = state_16751;var statearr_16785_16819 = state_16751__$1;(statearr_16785_16819[(2)] = inst_16700);
(statearr_16785_16819[(1)] = (9));
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
});})(c__5693__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16789[(0)] = state_machine__5679__auto__);
(statearr_16789[(1)] = (1));
return statearr_16789;
});
var state_machine__5679__auto____1 = (function (state_16751){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16751);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16790){if((e16790 instanceof Object))
{var ex__5682__auto__ = e16790;var statearr_16791_16820 = state_16751;(statearr_16791_16820[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16751);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16790;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16821 = state_16751;
state_16751 = G__16821;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16751){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_16792 = f__5694__auto__.call(null);(statearr_16792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16793);
return statearr_16792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16823 = {};return obj16823;
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
return (function (p1__16824_SHARP_){if(cljs.core.truth_(p1__16824_SHARP_.call(null,topic)))
{return p1__16824_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16824_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16949 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16949 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16950){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16950 = meta16950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16949.cljs$lang$type = true;
cljs.core.async.t16949.cljs$lang$ctorStr = "cljs.core.async/t16949";
cljs.core.async.t16949.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16949");
});})(mults,ensure_mult))
;
cljs.core.async.t16949.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16949.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16949.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16949.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16949.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16949.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16949.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16951){var self__ = this;
var _16951__$1 = this;return self__.meta16950;
});})(mults,ensure_mult))
;
cljs.core.async.t16949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16951,meta16950__$1){var self__ = this;
var _16951__$1 = this;return (new cljs.core.async.t16949(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16950__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16949 = ((function (mults,ensure_mult){
return (function __GT_t16949(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16950){return (new cljs.core.async.t16949(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16950));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16949(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___17073 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17073,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17073,mults,ensure_mult,p){
return (function (state_17025){var state_val_17026 = (state_17025[(1)]);if((state_val_17026 === (7)))
{var inst_17021 = (state_17025[(2)]);var state_17025__$1 = state_17025;var statearr_17027_17074 = state_17025__$1;(statearr_17027_17074[(2)] = inst_17021);
(statearr_17027_17074[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (20)))
{var state_17025__$1 = state_17025;var statearr_17028_17075 = state_17025__$1;(statearr_17028_17075[(2)] = null);
(statearr_17028_17075[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (1)))
{var state_17025__$1 = state_17025;var statearr_17029_17076 = state_17025__$1;(statearr_17029_17076[(2)] = null);
(statearr_17029_17076[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (24)))
{var inst_17004 = (state_17025[(7)]);var inst_16954 = (state_17025[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17025,(23),Object,null,(22));var inst_17011 = cljs.core.async.muxch_STAR_.call(null,inst_17004);var state_17025__$1 = state_17025;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17025__$1,(25),inst_17011,inst_16954);
} else
{if((state_val_17026 === (4)))
{var inst_16954 = (state_17025[(8)]);var inst_16954__$1 = (state_17025[(2)]);var inst_16955 = (inst_16954__$1 == null);var state_17025__$1 = (function (){var statearr_17030 = state_17025;(statearr_17030[(8)] = inst_16954__$1);
return statearr_17030;
})();if(cljs.core.truth_(inst_16955))
{var statearr_17031_17077 = state_17025__$1;(statearr_17031_17077[(1)] = (5));
} else
{var statearr_17032_17078 = state_17025__$1;(statearr_17032_17078[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (15)))
{var inst_16996 = (state_17025[(2)]);var state_17025__$1 = state_17025;var statearr_17033_17079 = state_17025__$1;(statearr_17033_17079[(2)] = inst_16996);
(statearr_17033_17079[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (21)))
{var inst_17018 = (state_17025[(2)]);var state_17025__$1 = (function (){var statearr_17034 = state_17025;(statearr_17034[(9)] = inst_17018);
return statearr_17034;
})();var statearr_17035_17080 = state_17025__$1;(statearr_17035_17080[(2)] = null);
(statearr_17035_17080[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (13)))
{var inst_16978 = (state_17025[(10)]);var inst_16980 = cljs.core.chunked_seq_QMARK_.call(null,inst_16978);var state_17025__$1 = state_17025;if(inst_16980)
{var statearr_17036_17081 = state_17025__$1;(statearr_17036_17081[(1)] = (16));
} else
{var statearr_17037_17082 = state_17025__$1;(statearr_17037_17082[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (22)))
{var inst_17015 = (state_17025[(2)]);var state_17025__$1 = state_17025;var statearr_17038_17083 = state_17025__$1;(statearr_17038_17083[(2)] = inst_17015);
(statearr_17038_17083[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (6)))
{var inst_17002 = (state_17025[(11)]);var inst_17004 = (state_17025[(7)]);var inst_16954 = (state_17025[(8)]);var inst_17002__$1 = topic_fn.call(null,inst_16954);var inst_17003 = cljs.core.deref.call(null,mults);var inst_17004__$1 = cljs.core.get.call(null,inst_17003,inst_17002__$1);var state_17025__$1 = (function (){var statearr_17039 = state_17025;(statearr_17039[(11)] = inst_17002__$1);
(statearr_17039[(7)] = inst_17004__$1);
return statearr_17039;
})();if(cljs.core.truth_(inst_17004__$1))
{var statearr_17040_17084 = state_17025__$1;(statearr_17040_17084[(1)] = (19));
} else
{var statearr_17041_17085 = state_17025__$1;(statearr_17041_17085[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (25)))
{var inst_17013 = (state_17025[(2)]);var state_17025__$1 = state_17025;var statearr_17042_17086 = state_17025__$1;(statearr_17042_17086[(2)] = inst_17013);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17025__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (17)))
{var inst_16978 = (state_17025[(10)]);var inst_16987 = cljs.core.first.call(null,inst_16978);var inst_16988 = cljs.core.async.muxch_STAR_.call(null,inst_16987);var inst_16989 = cljs.core.async.close_BANG_.call(null,inst_16988);var inst_16990 = cljs.core.next.call(null,inst_16978);var inst_16964 = inst_16990;var inst_16965 = null;var inst_16966 = (0);var inst_16967 = (0);var state_17025__$1 = (function (){var statearr_17043 = state_17025;(statearr_17043[(12)] = inst_16965);
(statearr_17043[(13)] = inst_16989);
(statearr_17043[(14)] = inst_16967);
(statearr_17043[(15)] = inst_16966);
(statearr_17043[(16)] = inst_16964);
return statearr_17043;
})();var statearr_17044_17087 = state_17025__$1;(statearr_17044_17087[(2)] = null);
(statearr_17044_17087[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (3)))
{var inst_17023 = (state_17025[(2)]);var state_17025__$1 = state_17025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17025__$1,inst_17023);
} else
{if((state_val_17026 === (12)))
{var inst_16998 = (state_17025[(2)]);var state_17025__$1 = state_17025;var statearr_17045_17088 = state_17025__$1;(statearr_17045_17088[(2)] = inst_16998);
(statearr_17045_17088[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (2)))
{var state_17025__$1 = state_17025;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17025__$1,(4),ch);
} else
{if((state_val_17026 === (23)))
{var inst_17002 = (state_17025[(11)]);var inst_17006 = (state_17025[(2)]);var inst_17007 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17002);var state_17025__$1 = (function (){var statearr_17046 = state_17025;(statearr_17046[(17)] = inst_17006);
return statearr_17046;
})();var statearr_17047_17089 = state_17025__$1;(statearr_17047_17089[(2)] = inst_17007);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17025__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (19)))
{var state_17025__$1 = state_17025;var statearr_17048_17090 = state_17025__$1;(statearr_17048_17090[(2)] = null);
(statearr_17048_17090[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (11)))
{var inst_16978 = (state_17025[(10)]);var inst_16964 = (state_17025[(16)]);var inst_16978__$1 = cljs.core.seq.call(null,inst_16964);var state_17025__$1 = (function (){var statearr_17049 = state_17025;(statearr_17049[(10)] = inst_16978__$1);
return statearr_17049;
})();if(inst_16978__$1)
{var statearr_17050_17091 = state_17025__$1;(statearr_17050_17091[(1)] = (13));
} else
{var statearr_17051_17092 = state_17025__$1;(statearr_17051_17092[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (9)))
{var inst_17000 = (state_17025[(2)]);var state_17025__$1 = state_17025;var statearr_17052_17093 = state_17025__$1;(statearr_17052_17093[(2)] = inst_17000);
(statearr_17052_17093[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (5)))
{var inst_16961 = cljs.core.deref.call(null,mults);var inst_16962 = cljs.core.vals.call(null,inst_16961);var inst_16963 = cljs.core.seq.call(null,inst_16962);var inst_16964 = inst_16963;var inst_16965 = null;var inst_16966 = (0);var inst_16967 = (0);var state_17025__$1 = (function (){var statearr_17053 = state_17025;(statearr_17053[(12)] = inst_16965);
(statearr_17053[(14)] = inst_16967);
(statearr_17053[(15)] = inst_16966);
(statearr_17053[(16)] = inst_16964);
return statearr_17053;
})();var statearr_17054_17094 = state_17025__$1;(statearr_17054_17094[(2)] = null);
(statearr_17054_17094[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (14)))
{var state_17025__$1 = state_17025;var statearr_17058_17095 = state_17025__$1;(statearr_17058_17095[(2)] = null);
(statearr_17058_17095[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (16)))
{var inst_16978 = (state_17025[(10)]);var inst_16982 = cljs.core.chunk_first.call(null,inst_16978);var inst_16983 = cljs.core.chunk_rest.call(null,inst_16978);var inst_16984 = cljs.core.count.call(null,inst_16982);var inst_16964 = inst_16983;var inst_16965 = inst_16982;var inst_16966 = inst_16984;var inst_16967 = (0);var state_17025__$1 = (function (){var statearr_17059 = state_17025;(statearr_17059[(12)] = inst_16965);
(statearr_17059[(14)] = inst_16967);
(statearr_17059[(15)] = inst_16966);
(statearr_17059[(16)] = inst_16964);
return statearr_17059;
})();var statearr_17060_17096 = state_17025__$1;(statearr_17060_17096[(2)] = null);
(statearr_17060_17096[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (10)))
{var inst_16965 = (state_17025[(12)]);var inst_16967 = (state_17025[(14)]);var inst_16966 = (state_17025[(15)]);var inst_16964 = (state_17025[(16)]);var inst_16972 = cljs.core._nth.call(null,inst_16965,inst_16967);var inst_16973 = cljs.core.async.muxch_STAR_.call(null,inst_16972);var inst_16974 = cljs.core.async.close_BANG_.call(null,inst_16973);var inst_16975 = (inst_16967 + (1));var tmp17055 = inst_16965;var tmp17056 = inst_16966;var tmp17057 = inst_16964;var inst_16964__$1 = tmp17057;var inst_16965__$1 = tmp17055;var inst_16966__$1 = tmp17056;var inst_16967__$1 = inst_16975;var state_17025__$1 = (function (){var statearr_17061 = state_17025;(statearr_17061[(12)] = inst_16965__$1);
(statearr_17061[(14)] = inst_16967__$1);
(statearr_17061[(15)] = inst_16966__$1);
(statearr_17061[(16)] = inst_16964__$1);
(statearr_17061[(18)] = inst_16974);
return statearr_17061;
})();var statearr_17062_17097 = state_17025__$1;(statearr_17062_17097[(2)] = null);
(statearr_17062_17097[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (18)))
{var inst_16993 = (state_17025[(2)]);var state_17025__$1 = state_17025;var statearr_17063_17098 = state_17025__$1;(statearr_17063_17098[(2)] = inst_16993);
(statearr_17063_17098[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17026 === (8)))
{var inst_16967 = (state_17025[(14)]);var inst_16966 = (state_17025[(15)]);var inst_16969 = (inst_16967 < inst_16966);var inst_16970 = inst_16969;var state_17025__$1 = state_17025;if(cljs.core.truth_(inst_16970))
{var statearr_17064_17099 = state_17025__$1;(statearr_17064_17099[(1)] = (10));
} else
{var statearr_17065_17100 = state_17025__$1;(statearr_17065_17100[(1)] = (11));
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
});})(c__5693__auto___17073,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___17073,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17069[(0)] = state_machine__5679__auto__);
(statearr_17069[(1)] = (1));
return statearr_17069;
});
var state_machine__5679__auto____1 = (function (state_17025){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17025);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17070){if((e17070 instanceof Object))
{var ex__5682__auto__ = e17070;var statearr_17071_17101 = state_17025;(statearr_17071_17101[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17025);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17102 = state_17025;
state_17025 = G__17102;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17025){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17073,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_17072 = f__5694__auto__.call(null);(statearr_17072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17073);
return statearr_17072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17073,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___17239 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17209){var state_val_17210 = (state_17209[(1)]);if((state_val_17210 === (7)))
{var state_17209__$1 = state_17209;var statearr_17211_17240 = state_17209__$1;(statearr_17211_17240[(2)] = null);
(statearr_17211_17240[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (1)))
{var state_17209__$1 = state_17209;var statearr_17212_17241 = state_17209__$1;(statearr_17212_17241[(2)] = null);
(statearr_17212_17241[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (4)))
{var inst_17173 = (state_17209[(7)]);var inst_17175 = (inst_17173 < cnt);var state_17209__$1 = state_17209;if(cljs.core.truth_(inst_17175))
{var statearr_17213_17242 = state_17209__$1;(statearr_17213_17242[(1)] = (6));
} else
{var statearr_17214_17243 = state_17209__$1;(statearr_17214_17243[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (15)))
{var inst_17205 = (state_17209[(2)]);var state_17209__$1 = state_17209;var statearr_17215_17244 = state_17209__$1;(statearr_17215_17244[(2)] = inst_17205);
(statearr_17215_17244[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (13)))
{var inst_17198 = cljs.core.async.close_BANG_.call(null,out);var state_17209__$1 = state_17209;var statearr_17216_17245 = state_17209__$1;(statearr_17216_17245[(2)] = inst_17198);
(statearr_17216_17245[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (6)))
{var state_17209__$1 = state_17209;var statearr_17217_17246 = state_17209__$1;(statearr_17217_17246[(2)] = null);
(statearr_17217_17246[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (3)))
{var inst_17207 = (state_17209[(2)]);var state_17209__$1 = state_17209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17209__$1,inst_17207);
} else
{if((state_val_17210 === (12)))
{var inst_17195 = (state_17209[(8)]);var inst_17195__$1 = (state_17209[(2)]);var inst_17196 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17195__$1);var state_17209__$1 = (function (){var statearr_17218 = state_17209;(statearr_17218[(8)] = inst_17195__$1);
return statearr_17218;
})();if(cljs.core.truth_(inst_17196))
{var statearr_17219_17247 = state_17209__$1;(statearr_17219_17247[(1)] = (13));
} else
{var statearr_17220_17248 = state_17209__$1;(statearr_17220_17248[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (2)))
{var inst_17172 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17173 = (0);var state_17209__$1 = (function (){var statearr_17221 = state_17209;(statearr_17221[(7)] = inst_17173);
(statearr_17221[(9)] = inst_17172);
return statearr_17221;
})();var statearr_17222_17249 = state_17209__$1;(statearr_17222_17249[(2)] = null);
(statearr_17222_17249[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (11)))
{var inst_17173 = (state_17209[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17209,(10),Object,null,(9));var inst_17182 = chs__$1.call(null,inst_17173);var inst_17183 = done.call(null,inst_17173);var inst_17184 = cljs.core.async.take_BANG_.call(null,inst_17182,inst_17183);var state_17209__$1 = state_17209;var statearr_17223_17250 = state_17209__$1;(statearr_17223_17250[(2)] = inst_17184);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17209__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (9)))
{var inst_17173 = (state_17209[(7)]);var inst_17186 = (state_17209[(2)]);var inst_17187 = (inst_17173 + (1));var inst_17173__$1 = inst_17187;var state_17209__$1 = (function (){var statearr_17224 = state_17209;(statearr_17224[(10)] = inst_17186);
(statearr_17224[(7)] = inst_17173__$1);
return statearr_17224;
})();var statearr_17225_17251 = state_17209__$1;(statearr_17225_17251[(2)] = null);
(statearr_17225_17251[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (5)))
{var inst_17193 = (state_17209[(2)]);var state_17209__$1 = (function (){var statearr_17226 = state_17209;(statearr_17226[(11)] = inst_17193);
return statearr_17226;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17209__$1,(12),dchan);
} else
{if((state_val_17210 === (14)))
{var inst_17195 = (state_17209[(8)]);var inst_17200 = cljs.core.apply.call(null,f,inst_17195);var state_17209__$1 = state_17209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17209__$1,(16),out,inst_17200);
} else
{if((state_val_17210 === (16)))
{var inst_17202 = (state_17209[(2)]);var state_17209__$1 = (function (){var statearr_17227 = state_17209;(statearr_17227[(12)] = inst_17202);
return statearr_17227;
})();var statearr_17228_17252 = state_17209__$1;(statearr_17228_17252[(2)] = null);
(statearr_17228_17252[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (10)))
{var inst_17177 = (state_17209[(2)]);var inst_17178 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17209__$1 = (function (){var statearr_17229 = state_17209;(statearr_17229[(13)] = inst_17177);
return statearr_17229;
})();var statearr_17230_17253 = state_17209__$1;(statearr_17230_17253[(2)] = inst_17178);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17209__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17210 === (8)))
{var inst_17191 = (state_17209[(2)]);var state_17209__$1 = state_17209;var statearr_17231_17254 = state_17209__$1;(statearr_17231_17254[(2)] = inst_17191);
(statearr_17231_17254[(1)] = (5));
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
});})(c__5693__auto___17239,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___17239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17235[(0)] = state_machine__5679__auto__);
(statearr_17235[(1)] = (1));
return statearr_17235;
});
var state_machine__5679__auto____1 = (function (state_17209){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17209);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17236){if((e17236 instanceof Object))
{var ex__5682__auto__ = e17236;var statearr_17237_17255 = state_17209;(statearr_17237_17255[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17209);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17236;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17256 = state_17209;
state_17209 = G__17256;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17209){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17239,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_17238 = f__5694__auto__.call(null);(statearr_17238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17239);
return statearr_17238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17239,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17364 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17364,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17364,out){
return (function (state_17340){var state_val_17341 = (state_17340[(1)]);if((state_val_17341 === (7)))
{var inst_17319 = (state_17340[(7)]);var inst_17320 = (state_17340[(8)]);var inst_17319__$1 = (state_17340[(2)]);var inst_17320__$1 = cljs.core.nth.call(null,inst_17319__$1,(0),null);var inst_17321 = cljs.core.nth.call(null,inst_17319__$1,(1),null);var inst_17322 = (inst_17320__$1 == null);var state_17340__$1 = (function (){var statearr_17342 = state_17340;(statearr_17342[(7)] = inst_17319__$1);
(statearr_17342[(9)] = inst_17321);
(statearr_17342[(8)] = inst_17320__$1);
return statearr_17342;
})();if(cljs.core.truth_(inst_17322))
{var statearr_17343_17365 = state_17340__$1;(statearr_17343_17365[(1)] = (8));
} else
{var statearr_17344_17366 = state_17340__$1;(statearr_17344_17366[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17341 === (1)))
{var inst_17311 = cljs.core.vec.call(null,chs);var inst_17312 = inst_17311;var state_17340__$1 = (function (){var statearr_17345 = state_17340;(statearr_17345[(10)] = inst_17312);
return statearr_17345;
})();var statearr_17346_17367 = state_17340__$1;(statearr_17346_17367[(2)] = null);
(statearr_17346_17367[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17341 === (4)))
{var inst_17312 = (state_17340[(10)]);var state_17340__$1 = state_17340;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17340__$1,(7),inst_17312);
} else
{if((state_val_17341 === (6)))
{var inst_17336 = (state_17340[(2)]);var state_17340__$1 = state_17340;var statearr_17347_17368 = state_17340__$1;(statearr_17347_17368[(2)] = inst_17336);
(statearr_17347_17368[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17341 === (3)))
{var inst_17338 = (state_17340[(2)]);var state_17340__$1 = state_17340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17340__$1,inst_17338);
} else
{if((state_val_17341 === (2)))
{var inst_17312 = (state_17340[(10)]);var inst_17314 = cljs.core.count.call(null,inst_17312);var inst_17315 = (inst_17314 > (0));var state_17340__$1 = state_17340;if(cljs.core.truth_(inst_17315))
{var statearr_17349_17369 = state_17340__$1;(statearr_17349_17369[(1)] = (4));
} else
{var statearr_17350_17370 = state_17340__$1;(statearr_17350_17370[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17341 === (11)))
{var inst_17312 = (state_17340[(10)]);var inst_17329 = (state_17340[(2)]);var tmp17348 = inst_17312;var inst_17312__$1 = tmp17348;var state_17340__$1 = (function (){var statearr_17351 = state_17340;(statearr_17351[(11)] = inst_17329);
(statearr_17351[(10)] = inst_17312__$1);
return statearr_17351;
})();var statearr_17352_17371 = state_17340__$1;(statearr_17352_17371[(2)] = null);
(statearr_17352_17371[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17341 === (9)))
{var inst_17320 = (state_17340[(8)]);var state_17340__$1 = state_17340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17340__$1,(11),out,inst_17320);
} else
{if((state_val_17341 === (5)))
{var inst_17334 = cljs.core.async.close_BANG_.call(null,out);var state_17340__$1 = state_17340;var statearr_17353_17372 = state_17340__$1;(statearr_17353_17372[(2)] = inst_17334);
(statearr_17353_17372[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17341 === (10)))
{var inst_17332 = (state_17340[(2)]);var state_17340__$1 = state_17340;var statearr_17354_17373 = state_17340__$1;(statearr_17354_17373[(2)] = inst_17332);
(statearr_17354_17373[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17341 === (8)))
{var inst_17312 = (state_17340[(10)]);var inst_17319 = (state_17340[(7)]);var inst_17321 = (state_17340[(9)]);var inst_17320 = (state_17340[(8)]);var inst_17324 = (function (){var c = inst_17321;var v = inst_17320;var vec__17317 = inst_17319;var cs = inst_17312;return ((function (c,v,vec__17317,cs,inst_17312,inst_17319,inst_17321,inst_17320,state_val_17341,c__5693__auto___17364,out){
return (function (p1__17257_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17257_SHARP_);
});
;})(c,v,vec__17317,cs,inst_17312,inst_17319,inst_17321,inst_17320,state_val_17341,c__5693__auto___17364,out))
})();var inst_17325 = cljs.core.filterv.call(null,inst_17324,inst_17312);var inst_17312__$1 = inst_17325;var state_17340__$1 = (function (){var statearr_17355 = state_17340;(statearr_17355[(10)] = inst_17312__$1);
return statearr_17355;
})();var statearr_17356_17374 = state_17340__$1;(statearr_17356_17374[(2)] = null);
(statearr_17356_17374[(1)] = (2));
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
});})(c__5693__auto___17364,out))
;return ((function (switch__5678__auto__,c__5693__auto___17364,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17360 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17360[(0)] = state_machine__5679__auto__);
(statearr_17360[(1)] = (1));
return statearr_17360;
});
var state_machine__5679__auto____1 = (function (state_17340){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17340);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17361){if((e17361 instanceof Object))
{var ex__5682__auto__ = e17361;var statearr_17362_17375 = state_17340;(statearr_17362_17375[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17376 = state_17340;
state_17340 = G__17376;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17340){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17364,out))
})();var state__5695__auto__ = (function (){var statearr_17363 = f__5694__auto__.call(null);(statearr_17363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17364);
return statearr_17363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17364,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17469 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17469,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17469,out){
return (function (state_17446){var state_val_17447 = (state_17446[(1)]);if((state_val_17447 === (7)))
{var inst_17428 = (state_17446[(7)]);var inst_17428__$1 = (state_17446[(2)]);var inst_17429 = (inst_17428__$1 == null);var inst_17430 = cljs.core.not.call(null,inst_17429);var state_17446__$1 = (function (){var statearr_17448 = state_17446;(statearr_17448[(7)] = inst_17428__$1);
return statearr_17448;
})();if(inst_17430)
{var statearr_17449_17470 = state_17446__$1;(statearr_17449_17470[(1)] = (8));
} else
{var statearr_17450_17471 = state_17446__$1;(statearr_17450_17471[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17447 === (1)))
{var inst_17423 = (0);var state_17446__$1 = (function (){var statearr_17451 = state_17446;(statearr_17451[(8)] = inst_17423);
return statearr_17451;
})();var statearr_17452_17472 = state_17446__$1;(statearr_17452_17472[(2)] = null);
(statearr_17452_17472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17447 === (4)))
{var state_17446__$1 = state_17446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17446__$1,(7),ch);
} else
{if((state_val_17447 === (6)))
{var inst_17441 = (state_17446[(2)]);var state_17446__$1 = state_17446;var statearr_17453_17473 = state_17446__$1;(statearr_17453_17473[(2)] = inst_17441);
(statearr_17453_17473[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17447 === (3)))
{var inst_17443 = (state_17446[(2)]);var inst_17444 = cljs.core.async.close_BANG_.call(null,out);var state_17446__$1 = (function (){var statearr_17454 = state_17446;(statearr_17454[(9)] = inst_17443);
return statearr_17454;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17446__$1,inst_17444);
} else
{if((state_val_17447 === (2)))
{var inst_17423 = (state_17446[(8)]);var inst_17425 = (inst_17423 < n);var state_17446__$1 = state_17446;if(cljs.core.truth_(inst_17425))
{var statearr_17455_17474 = state_17446__$1;(statearr_17455_17474[(1)] = (4));
} else
{var statearr_17456_17475 = state_17446__$1;(statearr_17456_17475[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17447 === (11)))
{var inst_17423 = (state_17446[(8)]);var inst_17433 = (state_17446[(2)]);var inst_17434 = (inst_17423 + (1));var inst_17423__$1 = inst_17434;var state_17446__$1 = (function (){var statearr_17457 = state_17446;(statearr_17457[(8)] = inst_17423__$1);
(statearr_17457[(10)] = inst_17433);
return statearr_17457;
})();var statearr_17458_17476 = state_17446__$1;(statearr_17458_17476[(2)] = null);
(statearr_17458_17476[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17447 === (9)))
{var state_17446__$1 = state_17446;var statearr_17459_17477 = state_17446__$1;(statearr_17459_17477[(2)] = null);
(statearr_17459_17477[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17447 === (5)))
{var state_17446__$1 = state_17446;var statearr_17460_17478 = state_17446__$1;(statearr_17460_17478[(2)] = null);
(statearr_17460_17478[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17447 === (10)))
{var inst_17438 = (state_17446[(2)]);var state_17446__$1 = state_17446;var statearr_17461_17479 = state_17446__$1;(statearr_17461_17479[(2)] = inst_17438);
(statearr_17461_17479[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17447 === (8)))
{var inst_17428 = (state_17446[(7)]);var state_17446__$1 = state_17446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17446__$1,(11),out,inst_17428);
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
});})(c__5693__auto___17469,out))
;return ((function (switch__5678__auto__,c__5693__auto___17469,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17465 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17465[(0)] = state_machine__5679__auto__);
(statearr_17465[(1)] = (1));
return statearr_17465;
});
var state_machine__5679__auto____1 = (function (state_17446){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17446);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17466){if((e17466 instanceof Object))
{var ex__5682__auto__ = e17466;var statearr_17467_17480 = state_17446;(statearr_17467_17480[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17481 = state_17446;
state_17446 = G__17481;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17446){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17469,out))
})();var state__5695__auto__ = (function (){var statearr_17468 = f__5694__auto__.call(null);(statearr_17468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17469);
return statearr_17468;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17469,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17578 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17578,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17578,out){
return (function (state_17553){var state_val_17554 = (state_17553[(1)]);if((state_val_17554 === (7)))
{var inst_17548 = (state_17553[(2)]);var state_17553__$1 = state_17553;var statearr_17555_17579 = state_17553__$1;(statearr_17555_17579[(2)] = inst_17548);
(statearr_17555_17579[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17554 === (1)))
{var inst_17530 = null;var state_17553__$1 = (function (){var statearr_17556 = state_17553;(statearr_17556[(7)] = inst_17530);
return statearr_17556;
})();var statearr_17557_17580 = state_17553__$1;(statearr_17557_17580[(2)] = null);
(statearr_17557_17580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17554 === (4)))
{var inst_17533 = (state_17553[(8)]);var inst_17533__$1 = (state_17553[(2)]);var inst_17534 = (inst_17533__$1 == null);var inst_17535 = cljs.core.not.call(null,inst_17534);var state_17553__$1 = (function (){var statearr_17558 = state_17553;(statearr_17558[(8)] = inst_17533__$1);
return statearr_17558;
})();if(inst_17535)
{var statearr_17559_17581 = state_17553__$1;(statearr_17559_17581[(1)] = (5));
} else
{var statearr_17560_17582 = state_17553__$1;(statearr_17560_17582[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17554 === (6)))
{var state_17553__$1 = state_17553;var statearr_17561_17583 = state_17553__$1;(statearr_17561_17583[(2)] = null);
(statearr_17561_17583[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17554 === (3)))
{var inst_17550 = (state_17553[(2)]);var inst_17551 = cljs.core.async.close_BANG_.call(null,out);var state_17553__$1 = (function (){var statearr_17562 = state_17553;(statearr_17562[(9)] = inst_17550);
return statearr_17562;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17553__$1,inst_17551);
} else
{if((state_val_17554 === (2)))
{var state_17553__$1 = state_17553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17553__$1,(4),ch);
} else
{if((state_val_17554 === (11)))
{var inst_17533 = (state_17553[(8)]);var inst_17542 = (state_17553[(2)]);var inst_17530 = inst_17533;var state_17553__$1 = (function (){var statearr_17563 = state_17553;(statearr_17563[(10)] = inst_17542);
(statearr_17563[(7)] = inst_17530);
return statearr_17563;
})();var statearr_17564_17584 = state_17553__$1;(statearr_17564_17584[(2)] = null);
(statearr_17564_17584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17554 === (9)))
{var inst_17533 = (state_17553[(8)]);var state_17553__$1 = state_17553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17553__$1,(11),out,inst_17533);
} else
{if((state_val_17554 === (5)))
{var inst_17533 = (state_17553[(8)]);var inst_17530 = (state_17553[(7)]);var inst_17537 = cljs.core._EQ_.call(null,inst_17533,inst_17530);var state_17553__$1 = state_17553;if(inst_17537)
{var statearr_17566_17585 = state_17553__$1;(statearr_17566_17585[(1)] = (8));
} else
{var statearr_17567_17586 = state_17553__$1;(statearr_17567_17586[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17554 === (10)))
{var inst_17545 = (state_17553[(2)]);var state_17553__$1 = state_17553;var statearr_17568_17587 = state_17553__$1;(statearr_17568_17587[(2)] = inst_17545);
(statearr_17568_17587[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17554 === (8)))
{var inst_17530 = (state_17553[(7)]);var tmp17565 = inst_17530;var inst_17530__$1 = tmp17565;var state_17553__$1 = (function (){var statearr_17569 = state_17553;(statearr_17569[(7)] = inst_17530__$1);
return statearr_17569;
})();var statearr_17570_17588 = state_17553__$1;(statearr_17570_17588[(2)] = null);
(statearr_17570_17588[(1)] = (2));
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
});})(c__5693__auto___17578,out))
;return ((function (switch__5678__auto__,c__5693__auto___17578,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17574 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17574[(0)] = state_machine__5679__auto__);
(statearr_17574[(1)] = (1));
return statearr_17574;
});
var state_machine__5679__auto____1 = (function (state_17553){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17553);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17575){if((e17575 instanceof Object))
{var ex__5682__auto__ = e17575;var statearr_17576_17589 = state_17553;(statearr_17576_17589[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17590 = state_17553;
state_17553 = G__17590;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17553){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17578,out))
})();var state__5695__auto__ = (function (){var statearr_17577 = f__5694__auto__.call(null);(statearr_17577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17578);
return statearr_17577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17578,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17725 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17725,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17725,out){
return (function (state_17695){var state_val_17696 = (state_17695[(1)]);if((state_val_17696 === (7)))
{var inst_17691 = (state_17695[(2)]);var state_17695__$1 = state_17695;var statearr_17697_17726 = state_17695__$1;(statearr_17697_17726[(2)] = inst_17691);
(statearr_17697_17726[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17696 === (1)))
{var inst_17658 = (new Array(n));var inst_17659 = inst_17658;var inst_17660 = (0);var state_17695__$1 = (function (){var statearr_17698 = state_17695;(statearr_17698[(7)] = inst_17659);
(statearr_17698[(8)] = inst_17660);
return statearr_17698;
})();var statearr_17699_17727 = state_17695__$1;(statearr_17699_17727[(2)] = null);
(statearr_17699_17727[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17696 === (4)))
{var inst_17663 = (state_17695[(9)]);var inst_17663__$1 = (state_17695[(2)]);var inst_17664 = (inst_17663__$1 == null);var inst_17665 = cljs.core.not.call(null,inst_17664);var state_17695__$1 = (function (){var statearr_17700 = state_17695;(statearr_17700[(9)] = inst_17663__$1);
return statearr_17700;
})();if(inst_17665)
{var statearr_17701_17728 = state_17695__$1;(statearr_17701_17728[(1)] = (5));
} else
{var statearr_17702_17729 = state_17695__$1;(statearr_17702_17729[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17696 === (15)))
{var inst_17685 = (state_17695[(2)]);var state_17695__$1 = state_17695;var statearr_17703_17730 = state_17695__$1;(statearr_17703_17730[(2)] = inst_17685);
(statearr_17703_17730[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17696 === (13)))
{var state_17695__$1 = state_17695;var statearr_17704_17731 = state_17695__$1;(statearr_17704_17731[(2)] = null);
(statearr_17704_17731[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17696 === (6)))
{var inst_17660 = (state_17695[(8)]);var inst_17681 = (inst_17660 > (0));var state_17695__$1 = state_17695;if(cljs.core.truth_(inst_17681))
{var statearr_17705_17732 = state_17695__$1;(statearr_17705_17732[(1)] = (12));
} else
{var statearr_17706_17733 = state_17695__$1;(statearr_17706_17733[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17696 === (3)))
{var inst_17693 = (state_17695[(2)]);var state_17695__$1 = state_17695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17695__$1,inst_17693);
} else
{if((state_val_17696 === (12)))
{var inst_17659 = (state_17695[(7)]);var inst_17683 = cljs.core.vec.call(null,inst_17659);var state_17695__$1 = state_17695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17695__$1,(15),out,inst_17683);
} else
{if((state_val_17696 === (2)))
{var state_17695__$1 = state_17695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17695__$1,(4),ch);
} else
{if((state_val_17696 === (11)))
{var inst_17675 = (state_17695[(2)]);var inst_17676 = (new Array(n));var inst_17659 = inst_17676;var inst_17660 = (0);var state_17695__$1 = (function (){var statearr_17707 = state_17695;(statearr_17707[(7)] = inst_17659);
(statearr_17707[(10)] = inst_17675);
(statearr_17707[(8)] = inst_17660);
return statearr_17707;
})();var statearr_17708_17734 = state_17695__$1;(statearr_17708_17734[(2)] = null);
(statearr_17708_17734[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17696 === (9)))
{var inst_17659 = (state_17695[(7)]);var inst_17673 = cljs.core.vec.call(null,inst_17659);var state_17695__$1 = state_17695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17695__$1,(11),out,inst_17673);
} else
{if((state_val_17696 === (5)))
{var inst_17659 = (state_17695[(7)]);var inst_17660 = (state_17695[(8)]);var inst_17663 = (state_17695[(9)]);var inst_17668 = (state_17695[(11)]);var inst_17667 = (inst_17659[inst_17660] = inst_17663);var inst_17668__$1 = (inst_17660 + (1));var inst_17669 = (inst_17668__$1 < n);var state_17695__$1 = (function (){var statearr_17709 = state_17695;(statearr_17709[(12)] = inst_17667);
(statearr_17709[(11)] = inst_17668__$1);
return statearr_17709;
})();if(cljs.core.truth_(inst_17669))
{var statearr_17710_17735 = state_17695__$1;(statearr_17710_17735[(1)] = (8));
} else
{var statearr_17711_17736 = state_17695__$1;(statearr_17711_17736[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17696 === (14)))
{var inst_17688 = (state_17695[(2)]);var inst_17689 = cljs.core.async.close_BANG_.call(null,out);var state_17695__$1 = (function (){var statearr_17713 = state_17695;(statearr_17713[(13)] = inst_17688);
return statearr_17713;
})();var statearr_17714_17737 = state_17695__$1;(statearr_17714_17737[(2)] = inst_17689);
(statearr_17714_17737[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17696 === (10)))
{var inst_17679 = (state_17695[(2)]);var state_17695__$1 = state_17695;var statearr_17715_17738 = state_17695__$1;(statearr_17715_17738[(2)] = inst_17679);
(statearr_17715_17738[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17696 === (8)))
{var inst_17659 = (state_17695[(7)]);var inst_17668 = (state_17695[(11)]);var tmp17712 = inst_17659;var inst_17659__$1 = tmp17712;var inst_17660 = inst_17668;var state_17695__$1 = (function (){var statearr_17716 = state_17695;(statearr_17716[(7)] = inst_17659__$1);
(statearr_17716[(8)] = inst_17660);
return statearr_17716;
})();var statearr_17717_17739 = state_17695__$1;(statearr_17717_17739[(2)] = null);
(statearr_17717_17739[(1)] = (2));
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
});})(c__5693__auto___17725,out))
;return ((function (switch__5678__auto__,c__5693__auto___17725,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17721[(0)] = state_machine__5679__auto__);
(statearr_17721[(1)] = (1));
return statearr_17721;
});
var state_machine__5679__auto____1 = (function (state_17695){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17695);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17722){if((e17722 instanceof Object))
{var ex__5682__auto__ = e17722;var statearr_17723_17740 = state_17695;(statearr_17723_17740[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17695);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17741 = state_17695;
state_17695 = G__17741;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17695){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17725,out))
})();var state__5695__auto__ = (function (){var statearr_17724 = f__5694__auto__.call(null);(statearr_17724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17725);
return statearr_17724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17725,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17884 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17884,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17884,out){
return (function (state_17854){var state_val_17855 = (state_17854[(1)]);if((state_val_17855 === (7)))
{var inst_17850 = (state_17854[(2)]);var state_17854__$1 = state_17854;var statearr_17856_17885 = state_17854__$1;(statearr_17856_17885[(2)] = inst_17850);
(statearr_17856_17885[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17855 === (1)))
{var inst_17813 = [];var inst_17814 = inst_17813;var inst_17815 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_17854__$1 = (function (){var statearr_17857 = state_17854;(statearr_17857[(7)] = inst_17814);
(statearr_17857[(8)] = inst_17815);
return statearr_17857;
})();var statearr_17858_17886 = state_17854__$1;(statearr_17858_17886[(2)] = null);
(statearr_17858_17886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17855 === (4)))
{var inst_17818 = (state_17854[(9)]);var inst_17818__$1 = (state_17854[(2)]);var inst_17819 = (inst_17818__$1 == null);var inst_17820 = cljs.core.not.call(null,inst_17819);var state_17854__$1 = (function (){var statearr_17859 = state_17854;(statearr_17859[(9)] = inst_17818__$1);
return statearr_17859;
})();if(inst_17820)
{var statearr_17860_17887 = state_17854__$1;(statearr_17860_17887[(1)] = (5));
} else
{var statearr_17861_17888 = state_17854__$1;(statearr_17861_17888[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17855 === (15)))
{var inst_17844 = (state_17854[(2)]);var state_17854__$1 = state_17854;var statearr_17862_17889 = state_17854__$1;(statearr_17862_17889[(2)] = inst_17844);
(statearr_17862_17889[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17855 === (13)))
{var state_17854__$1 = state_17854;var statearr_17863_17890 = state_17854__$1;(statearr_17863_17890[(2)] = null);
(statearr_17863_17890[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17855 === (6)))
{var inst_17814 = (state_17854[(7)]);var inst_17839 = inst_17814.length;var inst_17840 = (inst_17839 > (0));var state_17854__$1 = state_17854;if(cljs.core.truth_(inst_17840))
{var statearr_17864_17891 = state_17854__$1;(statearr_17864_17891[(1)] = (12));
} else
{var statearr_17865_17892 = state_17854__$1;(statearr_17865_17892[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17855 === (3)))
{var inst_17852 = (state_17854[(2)]);var state_17854__$1 = state_17854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17854__$1,inst_17852);
} else
{if((state_val_17855 === (12)))
{var inst_17814 = (state_17854[(7)]);var inst_17842 = cljs.core.vec.call(null,inst_17814);var state_17854__$1 = state_17854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17854__$1,(15),out,inst_17842);
} else
{if((state_val_17855 === (2)))
{var state_17854__$1 = state_17854;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17854__$1,(4),ch);
} else
{if((state_val_17855 === (11)))
{var inst_17822 = (state_17854[(10)]);var inst_17818 = (state_17854[(9)]);var inst_17832 = (state_17854[(2)]);var inst_17833 = [];var inst_17834 = inst_17833.push(inst_17818);var inst_17814 = inst_17833;var inst_17815 = inst_17822;var state_17854__$1 = (function (){var statearr_17866 = state_17854;(statearr_17866[(11)] = inst_17834);
(statearr_17866[(7)] = inst_17814);
(statearr_17866[(8)] = inst_17815);
(statearr_17866[(12)] = inst_17832);
return statearr_17866;
})();var statearr_17867_17893 = state_17854__$1;(statearr_17867_17893[(2)] = null);
(statearr_17867_17893[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17855 === (9)))
{var inst_17814 = (state_17854[(7)]);var inst_17830 = cljs.core.vec.call(null,inst_17814);var state_17854__$1 = state_17854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17854__$1,(11),out,inst_17830);
} else
{if((state_val_17855 === (5)))
{var inst_17822 = (state_17854[(10)]);var inst_17815 = (state_17854[(8)]);var inst_17818 = (state_17854[(9)]);var inst_17822__$1 = f.call(null,inst_17818);var inst_17823 = cljs.core._EQ_.call(null,inst_17822__$1,inst_17815);var inst_17824 = cljs.core.keyword_identical_QMARK_.call(null,inst_17815,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_17825 = (inst_17823) || (inst_17824);var state_17854__$1 = (function (){var statearr_17868 = state_17854;(statearr_17868[(10)] = inst_17822__$1);
return statearr_17868;
})();if(cljs.core.truth_(inst_17825))
{var statearr_17869_17894 = state_17854__$1;(statearr_17869_17894[(1)] = (8));
} else
{var statearr_17870_17895 = state_17854__$1;(statearr_17870_17895[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17855 === (14)))
{var inst_17847 = (state_17854[(2)]);var inst_17848 = cljs.core.async.close_BANG_.call(null,out);var state_17854__$1 = (function (){var statearr_17872 = state_17854;(statearr_17872[(13)] = inst_17847);
return statearr_17872;
})();var statearr_17873_17896 = state_17854__$1;(statearr_17873_17896[(2)] = inst_17848);
(statearr_17873_17896[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17855 === (10)))
{var inst_17837 = (state_17854[(2)]);var state_17854__$1 = state_17854;var statearr_17874_17897 = state_17854__$1;(statearr_17874_17897[(2)] = inst_17837);
(statearr_17874_17897[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17855 === (8)))
{var inst_17822 = (state_17854[(10)]);var inst_17814 = (state_17854[(7)]);var inst_17818 = (state_17854[(9)]);var inst_17827 = inst_17814.push(inst_17818);var tmp17871 = inst_17814;var inst_17814__$1 = tmp17871;var inst_17815 = inst_17822;var state_17854__$1 = (function (){var statearr_17875 = state_17854;(statearr_17875[(7)] = inst_17814__$1);
(statearr_17875[(8)] = inst_17815);
(statearr_17875[(14)] = inst_17827);
return statearr_17875;
})();var statearr_17876_17898 = state_17854__$1;(statearr_17876_17898[(2)] = null);
(statearr_17876_17898[(1)] = (2));
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
});})(c__5693__auto___17884,out))
;return ((function (switch__5678__auto__,c__5693__auto___17884,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17880[(0)] = state_machine__5679__auto__);
(statearr_17880[(1)] = (1));
return statearr_17880;
});
var state_machine__5679__auto____1 = (function (state_17854){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17854);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17881){if((e17881 instanceof Object))
{var ex__5682__auto__ = e17881;var statearr_17882_17899 = state_17854;(statearr_17882_17899[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17854);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17900 = state_17854;
state_17854 = G__17900;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17854){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17884,out))
})();var state__5695__auto__ = (function (){var statearr_17883 = f__5694__auto__.call(null);(statearr_17883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17884);
return statearr_17883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17884,out))
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
