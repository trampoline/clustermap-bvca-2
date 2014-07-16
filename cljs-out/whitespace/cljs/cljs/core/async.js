// Compiled by ClojureScript 0.0-2261
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15019 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15019 = (function (f,fn_handler,meta15020){
this.f = f;
this.fn_handler = fn_handler;
this.meta15020 = meta15020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15019.cljs$lang$type = true;
cljs.core.async.t15019.cljs$lang$ctorStr = "cljs.core.async/t15019";
cljs.core.async.t15019.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15019");
});
cljs.core.async.t15019.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15021){var self__ = this;
var _15021__$1 = this;return self__.meta15020;
});
cljs.core.async.t15019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15021,meta15020__$1){var self__ = this;
var _15021__$1 = this;return (new cljs.core.async.t15019(self__.f,self__.fn_handler,meta15020__$1));
});
cljs.core.async.__GT_t15019 = (function __GT_t15019(f__$1,fn_handler__$1,meta15020){return (new cljs.core.async.t15019(f__$1,fn_handler__$1,meta15020));
});
}
return (new cljs.core.async.t15019(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15023 = buff;if(G__15023)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__15023.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15023.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15023);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15023);
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
{var val_15024 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15024);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15024,ret){
return (function (){return fn1.call(null,val_15024);
});})(val_15024,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___15025 = n;var x_15026 = (0);while(true){
if((x_15026 < n__4399__auto___15025))
{(a[x_15026] = (0));
{
var G__15027 = (x_15026 + (1));
x_15026 = G__15027;
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
var G__15028 = (i + (1));
i = G__15028;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15032 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15032 = (function (flag,alt_flag,meta15033){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15033 = meta15033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15032.cljs$lang$type = true;
cljs.core.async.t15032.cljs$lang$ctorStr = "cljs.core.async/t15032";
cljs.core.async.t15032.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15032");
});})(flag))
;
cljs.core.async.t15032.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15032.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15034){var self__ = this;
var _15034__$1 = this;return self__.meta15033;
});})(flag))
;
cljs.core.async.t15032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15034,meta15033__$1){var self__ = this;
var _15034__$1 = this;return (new cljs.core.async.t15032(self__.flag,self__.alt_flag,meta15033__$1));
});})(flag))
;
cljs.core.async.__GT_t15032 = ((function (flag){
return (function __GT_t15032(flag__$1,alt_flag__$1,meta15033){return (new cljs.core.async.t15032(flag__$1,alt_flag__$1,meta15033));
});})(flag))
;
}
return (new cljs.core.async.t15032(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15038 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15038 = (function (cb,flag,alt_handler,meta15039){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15039 = meta15039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15038.cljs$lang$type = true;
cljs.core.async.t15038.cljs$lang$ctorStr = "cljs.core.async/t15038";
cljs.core.async.t15038.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15038");
});
cljs.core.async.t15038.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15040){var self__ = this;
var _15040__$1 = this;return self__.meta15039;
});
cljs.core.async.t15038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15040,meta15039__$1){var self__ = this;
var _15040__$1 = this;return (new cljs.core.async.t15038(self__.cb,self__.flag,self__.alt_handler,meta15039__$1));
});
cljs.core.async.__GT_t15038 = (function __GT_t15038(cb__$1,flag__$1,alt_handler__$1,meta15039){return (new cljs.core.async.t15038(cb__$1,flag__$1,alt_handler__$1,meta15039));
});
}
return (new cljs.core.async.t15038(cb,flag,alt_handler,null));
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
return (function (p1__15041_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15041_SHARP_,port], null));
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
var G__15042 = (i + (1));
i = G__15042;
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
var alts_BANG___delegate = function (ports,p__15043){var map__15045 = p__15043;var map__15045__$1 = ((cljs.core.seq_QMARK_.call(null,map__15045))?cljs.core.apply.call(null,cljs.core.hash_map,map__15045):map__15045);var opts = map__15045__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15043 = null;if (arguments.length > 1) {
  p__15043 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15043);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15046){
var ports = cljs.core.first(arglist__15046);
var p__15043 = cljs.core.rest(arglist__15046);
return alts_BANG___delegate(ports,p__15043);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15054 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15054 = (function (ch,f,map_LT_,meta15055){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15055 = meta15055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15054.cljs$lang$type = true;
cljs.core.async.t15054.cljs$lang$ctorStr = "cljs.core.async/t15054";
cljs.core.async.t15054.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15054");
});
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15057 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15057 = (function (fn1,_,meta15055,ch,f,map_LT_,meta15058){
this.fn1 = fn1;
this._ = _;
this.meta15055 = meta15055;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15058 = meta15058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15057.cljs$lang$type = true;
cljs.core.async.t15057.cljs$lang$ctorStr = "cljs.core.async/t15057";
cljs.core.async.t15057.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15057");
});})(___$1))
;
cljs.core.async.t15057.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15057.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15047_SHARP_){return f1.call(null,(((p1__15047_SHARP_ == null))?null:self__.f.call(null,p1__15047_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15059){var self__ = this;
var _15059__$1 = this;return self__.meta15058;
});})(___$1))
;
cljs.core.async.t15057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15059,meta15058__$1){var self__ = this;
var _15059__$1 = this;return (new cljs.core.async.t15057(self__.fn1,self__._,self__.meta15055,self__.ch,self__.f,self__.map_LT_,meta15058__$1));
});})(___$1))
;
cljs.core.async.__GT_t15057 = ((function (___$1){
return (function __GT_t15057(fn1__$1,___$2,meta15055__$1,ch__$2,f__$2,map_LT___$2,meta15058){return (new cljs.core.async.t15057(fn1__$1,___$2,meta15055__$1,ch__$2,f__$2,map_LT___$2,meta15058));
});})(___$1))
;
}
return (new cljs.core.async.t15057(fn1,___$1,self__.meta15055,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15056){var self__ = this;
var _15056__$1 = this;return self__.meta15055;
});
cljs.core.async.t15054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15056,meta15055__$1){var self__ = this;
var _15056__$1 = this;return (new cljs.core.async.t15054(self__.ch,self__.f,self__.map_LT_,meta15055__$1));
});
cljs.core.async.__GT_t15054 = (function __GT_t15054(ch__$1,f__$1,map_LT___$1,meta15055){return (new cljs.core.async.t15054(ch__$1,f__$1,map_LT___$1,meta15055));
});
}
return (new cljs.core.async.t15054(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15063 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15063 = (function (ch,f,map_GT_,meta15064){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15064 = meta15064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15063.cljs$lang$type = true;
cljs.core.async.t15063.cljs$lang$ctorStr = "cljs.core.async/t15063";
cljs.core.async.t15063.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15063");
});
cljs.core.async.t15063.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15063.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15063.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15065){var self__ = this;
var _15065__$1 = this;return self__.meta15064;
});
cljs.core.async.t15063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15065,meta15064__$1){var self__ = this;
var _15065__$1 = this;return (new cljs.core.async.t15063(self__.ch,self__.f,self__.map_GT_,meta15064__$1));
});
cljs.core.async.__GT_t15063 = (function __GT_t15063(ch__$1,f__$1,map_GT___$1,meta15064){return (new cljs.core.async.t15063(ch__$1,f__$1,map_GT___$1,meta15064));
});
}
return (new cljs.core.async.t15063(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15069 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15069 = (function (ch,p,filter_GT_,meta15070){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15070 = meta15070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15069.cljs$lang$type = true;
cljs.core.async.t15069.cljs$lang$ctorStr = "cljs.core.async/t15069";
cljs.core.async.t15069.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15069");
});
cljs.core.async.t15069.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15069.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15069.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15069.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15069.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15069.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15071){var self__ = this;
var _15071__$1 = this;return self__.meta15070;
});
cljs.core.async.t15069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15071,meta15070__$1){var self__ = this;
var _15071__$1 = this;return (new cljs.core.async.t15069(self__.ch,self__.p,self__.filter_GT_,meta15070__$1));
});
cljs.core.async.__GT_t15069 = (function __GT_t15069(ch__$1,p__$1,filter_GT___$1,meta15070){return (new cljs.core.async.t15069(ch__$1,p__$1,filter_GT___$1,meta15070));
});
}
return (new cljs.core.async.t15069(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___15154 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15154,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15154,out){
return (function (state_15133){var state_val_15134 = (state_15133[(1)]);if((state_val_15134 === (7)))
{var inst_15129 = (state_15133[(2)]);var state_15133__$1 = state_15133;var statearr_15135_15155 = state_15133__$1;(statearr_15135_15155[(2)] = inst_15129);
(statearr_15135_15155[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15134 === (1)))
{var state_15133__$1 = state_15133;var statearr_15136_15156 = state_15133__$1;(statearr_15136_15156[(2)] = null);
(statearr_15136_15156[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15134 === (4)))
{var inst_15115 = (state_15133[(7)]);var inst_15115__$1 = (state_15133[(2)]);var inst_15116 = (inst_15115__$1 == null);var state_15133__$1 = (function (){var statearr_15137 = state_15133;(statearr_15137[(7)] = inst_15115__$1);
return statearr_15137;
})();if(cljs.core.truth_(inst_15116))
{var statearr_15138_15157 = state_15133__$1;(statearr_15138_15157[(1)] = (5));
} else
{var statearr_15139_15158 = state_15133__$1;(statearr_15139_15158[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15134 === (6)))
{var inst_15115 = (state_15133[(7)]);var inst_15120 = p.call(null,inst_15115);var state_15133__$1 = state_15133;if(cljs.core.truth_(inst_15120))
{var statearr_15140_15159 = state_15133__$1;(statearr_15140_15159[(1)] = (8));
} else
{var statearr_15141_15160 = state_15133__$1;(statearr_15141_15160[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15134 === (3)))
{var inst_15131 = (state_15133[(2)]);var state_15133__$1 = state_15133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15133__$1,inst_15131);
} else
{if((state_val_15134 === (2)))
{var state_15133__$1 = state_15133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15133__$1,(4),ch);
} else
{if((state_val_15134 === (11)))
{var inst_15123 = (state_15133[(2)]);var state_15133__$1 = state_15133;var statearr_15142_15161 = state_15133__$1;(statearr_15142_15161[(2)] = inst_15123);
(statearr_15142_15161[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15134 === (9)))
{var state_15133__$1 = state_15133;var statearr_15143_15162 = state_15133__$1;(statearr_15143_15162[(2)] = null);
(statearr_15143_15162[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15134 === (5)))
{var inst_15118 = cljs.core.async.close_BANG_.call(null,out);var state_15133__$1 = state_15133;var statearr_15144_15163 = state_15133__$1;(statearr_15144_15163[(2)] = inst_15118);
(statearr_15144_15163[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15134 === (10)))
{var inst_15126 = (state_15133[(2)]);var state_15133__$1 = (function (){var statearr_15145 = state_15133;(statearr_15145[(8)] = inst_15126);
return statearr_15145;
})();var statearr_15146_15164 = state_15133__$1;(statearr_15146_15164[(2)] = null);
(statearr_15146_15164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15134 === (8)))
{var inst_15115 = (state_15133[(7)]);var state_15133__$1 = state_15133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15133__$1,(11),out,inst_15115);
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
});})(c__5693__auto___15154,out))
;return ((function (switch__5678__auto__,c__5693__auto___15154,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15150 = [null,null,null,null,null,null,null,null,null];(statearr_15150[(0)] = state_machine__5679__auto__);
(statearr_15150[(1)] = (1));
return statearr_15150;
});
var state_machine__5679__auto____1 = (function (state_15133){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15133);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15151){if((e15151 instanceof Object))
{var ex__5682__auto__ = e15151;var statearr_15152_15165 = state_15133;(statearr_15152_15165[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15133);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15151;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15166 = state_15133;
state_15133 = G__15166;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15133){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15154,out))
})();var state__5695__auto__ = (function (){var statearr_15153 = f__5694__auto__.call(null);(statearr_15153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15154);
return statearr_15153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15154,out))
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
return (function (state_15318){var state_val_15319 = (state_15318[(1)]);if((state_val_15319 === (7)))
{var inst_15314 = (state_15318[(2)]);var state_15318__$1 = state_15318;var statearr_15320_15357 = state_15318__$1;(statearr_15320_15357[(2)] = inst_15314);
(statearr_15320_15357[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (20)))
{var inst_15289 = (state_15318[(7)]);var inst_15300 = (state_15318[(2)]);var inst_15301 = cljs.core.next.call(null,inst_15289);var inst_15275 = inst_15301;var inst_15276 = null;var inst_15277 = (0);var inst_15278 = (0);var state_15318__$1 = (function (){var statearr_15321 = state_15318;(statearr_15321[(8)] = inst_15277);
(statearr_15321[(9)] = inst_15275);
(statearr_15321[(10)] = inst_15276);
(statearr_15321[(11)] = inst_15300);
(statearr_15321[(12)] = inst_15278);
return statearr_15321;
})();var statearr_15322_15358 = state_15318__$1;(statearr_15322_15358[(2)] = null);
(statearr_15322_15358[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (1)))
{var state_15318__$1 = state_15318;var statearr_15323_15359 = state_15318__$1;(statearr_15323_15359[(2)] = null);
(statearr_15323_15359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (4)))
{var inst_15264 = (state_15318[(13)]);var inst_15264__$1 = (state_15318[(2)]);var inst_15265 = (inst_15264__$1 == null);var state_15318__$1 = (function (){var statearr_15327 = state_15318;(statearr_15327[(13)] = inst_15264__$1);
return statearr_15327;
})();if(cljs.core.truth_(inst_15265))
{var statearr_15328_15360 = state_15318__$1;(statearr_15328_15360[(1)] = (5));
} else
{var statearr_15329_15361 = state_15318__$1;(statearr_15329_15361[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (15)))
{var state_15318__$1 = state_15318;var statearr_15330_15362 = state_15318__$1;(statearr_15330_15362[(2)] = null);
(statearr_15330_15362[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (13)))
{var inst_15277 = (state_15318[(8)]);var inst_15275 = (state_15318[(9)]);var inst_15276 = (state_15318[(10)]);var inst_15278 = (state_15318[(12)]);var inst_15285 = (state_15318[(2)]);var inst_15286 = (inst_15278 + (1));var tmp15324 = inst_15277;var tmp15325 = inst_15275;var tmp15326 = inst_15276;var inst_15275__$1 = tmp15325;var inst_15276__$1 = tmp15326;var inst_15277__$1 = tmp15324;var inst_15278__$1 = inst_15286;var state_15318__$1 = (function (){var statearr_15331 = state_15318;(statearr_15331[(8)] = inst_15277__$1);
(statearr_15331[(9)] = inst_15275__$1);
(statearr_15331[(10)] = inst_15276__$1);
(statearr_15331[(14)] = inst_15285);
(statearr_15331[(12)] = inst_15278__$1);
return statearr_15331;
})();var statearr_15332_15363 = state_15318__$1;(statearr_15332_15363[(2)] = null);
(statearr_15332_15363[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (6)))
{var inst_15264 = (state_15318[(13)]);var inst_15269 = f.call(null,inst_15264);var inst_15274 = cljs.core.seq.call(null,inst_15269);var inst_15275 = inst_15274;var inst_15276 = null;var inst_15277 = (0);var inst_15278 = (0);var state_15318__$1 = (function (){var statearr_15333 = state_15318;(statearr_15333[(8)] = inst_15277);
(statearr_15333[(9)] = inst_15275);
(statearr_15333[(10)] = inst_15276);
(statearr_15333[(12)] = inst_15278);
return statearr_15333;
})();var statearr_15334_15364 = state_15318__$1;(statearr_15334_15364[(2)] = null);
(statearr_15334_15364[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (17)))
{var inst_15289 = (state_15318[(7)]);var inst_15293 = cljs.core.chunk_first.call(null,inst_15289);var inst_15294 = cljs.core.chunk_rest.call(null,inst_15289);var inst_15295 = cljs.core.count.call(null,inst_15293);var inst_15275 = inst_15294;var inst_15276 = inst_15293;var inst_15277 = inst_15295;var inst_15278 = (0);var state_15318__$1 = (function (){var statearr_15335 = state_15318;(statearr_15335[(8)] = inst_15277);
(statearr_15335[(9)] = inst_15275);
(statearr_15335[(10)] = inst_15276);
(statearr_15335[(12)] = inst_15278);
return statearr_15335;
})();var statearr_15336_15365 = state_15318__$1;(statearr_15336_15365[(2)] = null);
(statearr_15336_15365[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (3)))
{var inst_15316 = (state_15318[(2)]);var state_15318__$1 = state_15318;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15318__$1,inst_15316);
} else
{if((state_val_15319 === (12)))
{var inst_15309 = (state_15318[(2)]);var state_15318__$1 = state_15318;var statearr_15337_15366 = state_15318__$1;(statearr_15337_15366[(2)] = inst_15309);
(statearr_15337_15366[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (2)))
{var state_15318__$1 = state_15318;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15318__$1,(4),in$);
} else
{if((state_val_15319 === (19)))
{var inst_15304 = (state_15318[(2)]);var state_15318__$1 = state_15318;var statearr_15338_15367 = state_15318__$1;(statearr_15338_15367[(2)] = inst_15304);
(statearr_15338_15367[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (11)))
{var inst_15289 = (state_15318[(7)]);var inst_15275 = (state_15318[(9)]);var inst_15289__$1 = cljs.core.seq.call(null,inst_15275);var state_15318__$1 = (function (){var statearr_15339 = state_15318;(statearr_15339[(7)] = inst_15289__$1);
return statearr_15339;
})();if(inst_15289__$1)
{var statearr_15340_15368 = state_15318__$1;(statearr_15340_15368[(1)] = (14));
} else
{var statearr_15341_15369 = state_15318__$1;(statearr_15341_15369[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (9)))
{var inst_15311 = (state_15318[(2)]);var state_15318__$1 = (function (){var statearr_15342 = state_15318;(statearr_15342[(15)] = inst_15311);
return statearr_15342;
})();var statearr_15343_15370 = state_15318__$1;(statearr_15343_15370[(2)] = null);
(statearr_15343_15370[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (5)))
{var inst_15267 = cljs.core.async.close_BANG_.call(null,out);var state_15318__$1 = state_15318;var statearr_15344_15371 = state_15318__$1;(statearr_15344_15371[(2)] = inst_15267);
(statearr_15344_15371[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (14)))
{var inst_15289 = (state_15318[(7)]);var inst_15291 = cljs.core.chunked_seq_QMARK_.call(null,inst_15289);var state_15318__$1 = state_15318;if(inst_15291)
{var statearr_15345_15372 = state_15318__$1;(statearr_15345_15372[(1)] = (17));
} else
{var statearr_15346_15373 = state_15318__$1;(statearr_15346_15373[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (16)))
{var inst_15307 = (state_15318[(2)]);var state_15318__$1 = state_15318;var statearr_15347_15374 = state_15318__$1;(statearr_15347_15374[(2)] = inst_15307);
(statearr_15347_15374[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15319 === (10)))
{var inst_15276 = (state_15318[(10)]);var inst_15278 = (state_15318[(12)]);var inst_15283 = cljs.core._nth.call(null,inst_15276,inst_15278);var state_15318__$1 = state_15318;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15318__$1,(13),out,inst_15283);
} else
{if((state_val_15319 === (18)))
{var inst_15289 = (state_15318[(7)]);var inst_15298 = cljs.core.first.call(null,inst_15289);var state_15318__$1 = state_15318;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15318__$1,(20),out,inst_15298);
} else
{if((state_val_15319 === (8)))
{var inst_15277 = (state_15318[(8)]);var inst_15278 = (state_15318[(12)]);var inst_15280 = (inst_15278 < inst_15277);var inst_15281 = inst_15280;var state_15318__$1 = state_15318;if(cljs.core.truth_(inst_15281))
{var statearr_15348_15375 = state_15318__$1;(statearr_15348_15375[(1)] = (10));
} else
{var statearr_15349_15376 = state_15318__$1;(statearr_15349_15376[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_15353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15353[(0)] = state_machine__5679__auto__);
(statearr_15353[(1)] = (1));
return statearr_15353;
});
var state_machine__5679__auto____1 = (function (state_15318){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15318);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15354){if((e15354 instanceof Object))
{var ex__5682__auto__ = e15354;var statearr_15355_15377 = state_15318;(statearr_15355_15377[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15318);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15378 = state_15318;
state_15318 = G__15378;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15318){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15356 = f__5694__auto__.call(null);(statearr_15356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15356;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___15459 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15459){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15459){
return (function (state_15438){var state_val_15439 = (state_15438[(1)]);if((state_val_15439 === (7)))
{var inst_15434 = (state_15438[(2)]);var state_15438__$1 = state_15438;var statearr_15440_15460 = state_15438__$1;(statearr_15440_15460[(2)] = inst_15434);
(statearr_15440_15460[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15439 === (1)))
{var state_15438__$1 = state_15438;var statearr_15441_15461 = state_15438__$1;(statearr_15441_15461[(2)] = null);
(statearr_15441_15461[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15439 === (4)))
{var inst_15421 = (state_15438[(7)]);var inst_15421__$1 = (state_15438[(2)]);var inst_15422 = (inst_15421__$1 == null);var state_15438__$1 = (function (){var statearr_15442 = state_15438;(statearr_15442[(7)] = inst_15421__$1);
return statearr_15442;
})();if(cljs.core.truth_(inst_15422))
{var statearr_15443_15462 = state_15438__$1;(statearr_15443_15462[(1)] = (5));
} else
{var statearr_15444_15463 = state_15438__$1;(statearr_15444_15463[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15439 === (6)))
{var inst_15421 = (state_15438[(7)]);var state_15438__$1 = state_15438;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15438__$1,(11),to,inst_15421);
} else
{if((state_val_15439 === (3)))
{var inst_15436 = (state_15438[(2)]);var state_15438__$1 = state_15438;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15438__$1,inst_15436);
} else
{if((state_val_15439 === (2)))
{var state_15438__$1 = state_15438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15438__$1,(4),from);
} else
{if((state_val_15439 === (11)))
{var inst_15431 = (state_15438[(2)]);var state_15438__$1 = (function (){var statearr_15445 = state_15438;(statearr_15445[(8)] = inst_15431);
return statearr_15445;
})();var statearr_15446_15464 = state_15438__$1;(statearr_15446_15464[(2)] = null);
(statearr_15446_15464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15439 === (9)))
{var state_15438__$1 = state_15438;var statearr_15447_15465 = state_15438__$1;(statearr_15447_15465[(2)] = null);
(statearr_15447_15465[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15439 === (5)))
{var state_15438__$1 = state_15438;if(cljs.core.truth_(close_QMARK_))
{var statearr_15448_15466 = state_15438__$1;(statearr_15448_15466[(1)] = (8));
} else
{var statearr_15449_15467 = state_15438__$1;(statearr_15449_15467[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15439 === (10)))
{var inst_15428 = (state_15438[(2)]);var state_15438__$1 = state_15438;var statearr_15450_15468 = state_15438__$1;(statearr_15450_15468[(2)] = inst_15428);
(statearr_15450_15468[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15439 === (8)))
{var inst_15425 = cljs.core.async.close_BANG_.call(null,to);var state_15438__$1 = state_15438;var statearr_15451_15469 = state_15438__$1;(statearr_15451_15469[(2)] = inst_15425);
(statearr_15451_15469[(1)] = (10));
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
});})(c__5693__auto___15459))
;return ((function (switch__5678__auto__,c__5693__auto___15459){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15455 = [null,null,null,null,null,null,null,null,null];(statearr_15455[(0)] = state_machine__5679__auto__);
(statearr_15455[(1)] = (1));
return statearr_15455;
});
var state_machine__5679__auto____1 = (function (state_15438){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15438);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15456){if((e15456 instanceof Object))
{var ex__5682__auto__ = e15456;var statearr_15457_15470 = state_15438;(statearr_15457_15470[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15438);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15471 = state_15438;
state_15438 = G__15471;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15438){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15459))
})();var state__5695__auto__ = (function (){var statearr_15458 = f__5694__auto__.call(null);(statearr_15458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15459);
return statearr_15458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15459))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___15558 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15558,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15558,tc,fc){
return (function (state_15536){var state_val_15537 = (state_15536[(1)]);if((state_val_15537 === (7)))
{var inst_15532 = (state_15536[(2)]);var state_15536__$1 = state_15536;var statearr_15538_15559 = state_15536__$1;(statearr_15538_15559[(2)] = inst_15532);
(statearr_15538_15559[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15537 === (1)))
{var state_15536__$1 = state_15536;var statearr_15539_15560 = state_15536__$1;(statearr_15539_15560[(2)] = null);
(statearr_15539_15560[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15537 === (4)))
{var inst_15517 = (state_15536[(7)]);var inst_15517__$1 = (state_15536[(2)]);var inst_15518 = (inst_15517__$1 == null);var state_15536__$1 = (function (){var statearr_15540 = state_15536;(statearr_15540[(7)] = inst_15517__$1);
return statearr_15540;
})();if(cljs.core.truth_(inst_15518))
{var statearr_15541_15561 = state_15536__$1;(statearr_15541_15561[(1)] = (5));
} else
{var statearr_15542_15562 = state_15536__$1;(statearr_15542_15562[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15537 === (6)))
{var inst_15517 = (state_15536[(7)]);var inst_15523 = p.call(null,inst_15517);var state_15536__$1 = state_15536;if(cljs.core.truth_(inst_15523))
{var statearr_15543_15563 = state_15536__$1;(statearr_15543_15563[(1)] = (9));
} else
{var statearr_15544_15564 = state_15536__$1;(statearr_15544_15564[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15537 === (3)))
{var inst_15534 = (state_15536[(2)]);var state_15536__$1 = state_15536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15536__$1,inst_15534);
} else
{if((state_val_15537 === (2)))
{var state_15536__$1 = state_15536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15536__$1,(4),ch);
} else
{if((state_val_15537 === (11)))
{var inst_15517 = (state_15536[(7)]);var inst_15527 = (state_15536[(2)]);var state_15536__$1 = state_15536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15536__$1,(8),inst_15527,inst_15517);
} else
{if((state_val_15537 === (9)))
{var state_15536__$1 = state_15536;var statearr_15545_15565 = state_15536__$1;(statearr_15545_15565[(2)] = tc);
(statearr_15545_15565[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15537 === (5)))
{var inst_15520 = cljs.core.async.close_BANG_.call(null,tc);var inst_15521 = cljs.core.async.close_BANG_.call(null,fc);var state_15536__$1 = (function (){var statearr_15546 = state_15536;(statearr_15546[(8)] = inst_15520);
return statearr_15546;
})();var statearr_15547_15566 = state_15536__$1;(statearr_15547_15566[(2)] = inst_15521);
(statearr_15547_15566[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15537 === (10)))
{var state_15536__$1 = state_15536;var statearr_15548_15567 = state_15536__$1;(statearr_15548_15567[(2)] = fc);
(statearr_15548_15567[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15537 === (8)))
{var inst_15529 = (state_15536[(2)]);var state_15536__$1 = (function (){var statearr_15549 = state_15536;(statearr_15549[(9)] = inst_15529);
return statearr_15549;
})();var statearr_15550_15568 = state_15536__$1;(statearr_15550_15568[(2)] = null);
(statearr_15550_15568[(1)] = (2));
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
});})(c__5693__auto___15558,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___15558,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15554 = [null,null,null,null,null,null,null,null,null,null];(statearr_15554[(0)] = state_machine__5679__auto__);
(statearr_15554[(1)] = (1));
return statearr_15554;
});
var state_machine__5679__auto____1 = (function (state_15536){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15536);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15555){if((e15555 instanceof Object))
{var ex__5682__auto__ = e15555;var statearr_15556_15569 = state_15536;(statearr_15556_15569[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15536);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15570 = state_15536;
state_15536 = G__15570;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15536){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15558,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_15557 = f__5694__auto__.call(null);(statearr_15557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15558);
return statearr_15557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15558,tc,fc))
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
return (function (state_15617){var state_val_15618 = (state_15617[(1)]);if((state_val_15618 === (7)))
{var inst_15613 = (state_15617[(2)]);var state_15617__$1 = state_15617;var statearr_15619_15635 = state_15617__$1;(statearr_15619_15635[(2)] = inst_15613);
(statearr_15619_15635[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15618 === (6)))
{var inst_15603 = (state_15617[(7)]);var inst_15606 = (state_15617[(8)]);var inst_15610 = f.call(null,inst_15603,inst_15606);var inst_15603__$1 = inst_15610;var state_15617__$1 = (function (){var statearr_15620 = state_15617;(statearr_15620[(7)] = inst_15603__$1);
return statearr_15620;
})();var statearr_15621_15636 = state_15617__$1;(statearr_15621_15636[(2)] = null);
(statearr_15621_15636[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15618 === (5)))
{var inst_15603 = (state_15617[(7)]);var state_15617__$1 = state_15617;var statearr_15622_15637 = state_15617__$1;(statearr_15622_15637[(2)] = inst_15603);
(statearr_15622_15637[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15618 === (4)))
{var inst_15606 = (state_15617[(8)]);var inst_15606__$1 = (state_15617[(2)]);var inst_15607 = (inst_15606__$1 == null);var state_15617__$1 = (function (){var statearr_15623 = state_15617;(statearr_15623[(8)] = inst_15606__$1);
return statearr_15623;
})();if(cljs.core.truth_(inst_15607))
{var statearr_15624_15638 = state_15617__$1;(statearr_15624_15638[(1)] = (5));
} else
{var statearr_15625_15639 = state_15617__$1;(statearr_15625_15639[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15618 === (3)))
{var inst_15615 = (state_15617[(2)]);var state_15617__$1 = state_15617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15617__$1,inst_15615);
} else
{if((state_val_15618 === (2)))
{var state_15617__$1 = state_15617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15617__$1,(4),ch);
} else
{if((state_val_15618 === (1)))
{var inst_15603 = init;var state_15617__$1 = (function (){var statearr_15626 = state_15617;(statearr_15626[(7)] = inst_15603);
return statearr_15626;
})();var statearr_15627_15640 = state_15617__$1;(statearr_15627_15640[(2)] = null);
(statearr_15627_15640[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_15631 = [null,null,null,null,null,null,null,null,null];(statearr_15631[(0)] = state_machine__5679__auto__);
(statearr_15631[(1)] = (1));
return statearr_15631;
});
var state_machine__5679__auto____1 = (function (state_15617){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15617);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15632){if((e15632 instanceof Object))
{var ex__5682__auto__ = e15632;var statearr_15633_15641 = state_15617;(statearr_15633_15641[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15642 = state_15617;
state_15617 = G__15642;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15617){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15634 = f__5694__auto__.call(null);(statearr_15634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15634;
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
return (function (state_15704){var state_val_15705 = (state_15704[(1)]);if((state_val_15705 === (7)))
{var inst_15685 = (state_15704[(7)]);var inst_15690 = (state_15704[(2)]);var inst_15691 = cljs.core.next.call(null,inst_15685);var inst_15685__$1 = inst_15691;var state_15704__$1 = (function (){var statearr_15706 = state_15704;(statearr_15706[(7)] = inst_15685__$1);
(statearr_15706[(8)] = inst_15690);
return statearr_15706;
})();var statearr_15707_15725 = state_15704__$1;(statearr_15707_15725[(2)] = null);
(statearr_15707_15725[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15705 === (1)))
{var inst_15684 = cljs.core.seq.call(null,coll);var inst_15685 = inst_15684;var state_15704__$1 = (function (){var statearr_15708 = state_15704;(statearr_15708[(7)] = inst_15685);
return statearr_15708;
})();var statearr_15709_15726 = state_15704__$1;(statearr_15709_15726[(2)] = null);
(statearr_15709_15726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15705 === (4)))
{var inst_15685 = (state_15704[(7)]);var inst_15688 = cljs.core.first.call(null,inst_15685);var state_15704__$1 = state_15704;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15704__$1,(7),ch,inst_15688);
} else
{if((state_val_15705 === (6)))
{var inst_15700 = (state_15704[(2)]);var state_15704__$1 = state_15704;var statearr_15710_15727 = state_15704__$1;(statearr_15710_15727[(2)] = inst_15700);
(statearr_15710_15727[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15705 === (3)))
{var inst_15702 = (state_15704[(2)]);var state_15704__$1 = state_15704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15704__$1,inst_15702);
} else
{if((state_val_15705 === (2)))
{var inst_15685 = (state_15704[(7)]);var state_15704__$1 = state_15704;if(cljs.core.truth_(inst_15685))
{var statearr_15711_15728 = state_15704__$1;(statearr_15711_15728[(1)] = (4));
} else
{var statearr_15712_15729 = state_15704__$1;(statearr_15712_15729[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15705 === (9)))
{var state_15704__$1 = state_15704;var statearr_15713_15730 = state_15704__$1;(statearr_15713_15730[(2)] = null);
(statearr_15713_15730[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15705 === (5)))
{var state_15704__$1 = state_15704;if(cljs.core.truth_(close_QMARK_))
{var statearr_15714_15731 = state_15704__$1;(statearr_15714_15731[(1)] = (8));
} else
{var statearr_15715_15732 = state_15704__$1;(statearr_15715_15732[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15705 === (10)))
{var inst_15698 = (state_15704[(2)]);var state_15704__$1 = state_15704;var statearr_15716_15733 = state_15704__$1;(statearr_15716_15733[(2)] = inst_15698);
(statearr_15716_15733[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15705 === (8)))
{var inst_15695 = cljs.core.async.close_BANG_.call(null,ch);var state_15704__$1 = state_15704;var statearr_15717_15734 = state_15704__$1;(statearr_15717_15734[(2)] = inst_15695);
(statearr_15717_15734[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_15721 = [null,null,null,null,null,null,null,null,null];(statearr_15721[(0)] = state_machine__5679__auto__);
(statearr_15721[(1)] = (1));
return statearr_15721;
});
var state_machine__5679__auto____1 = (function (state_15704){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15704);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15722){if((e15722 instanceof Object))
{var ex__5682__auto__ = e15722;var statearr_15723_15735 = state_15704;(statearr_15723_15735[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15704);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15736 = state_15704;
state_15704 = G__15736;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15704){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15724 = f__5694__auto__.call(null);(statearr_15724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15724;
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
cljs.core.async.Mux = (function (){var obj15738 = {};return obj15738;
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
cljs.core.async.Mult = (function (){var obj15740 = {};return obj15740;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15964 = (function (cs,ch,mult,meta15965){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15965 = meta15965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15964.cljs$lang$type = true;
cljs.core.async.t15964.cljs$lang$ctorStr = "cljs.core.async/t15964";
cljs.core.async.t15964.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15964");
});})(cs))
;
cljs.core.async.t15964.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15964.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15964.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15964.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15964.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15966){var self__ = this;
var _15966__$1 = this;return self__.meta15965;
});})(cs))
;
cljs.core.async.t15964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15966,meta15965__$1){var self__ = this;
var _15966__$1 = this;return (new cljs.core.async.t15964(self__.cs,self__.ch,self__.mult,meta15965__$1));
});})(cs))
;
cljs.core.async.__GT_t15964 = ((function (cs){
return (function __GT_t15964(cs__$1,ch__$1,mult__$1,meta15965){return (new cljs.core.async.t15964(cs__$1,ch__$1,mult__$1,meta15965));
});})(cs))
;
}
return (new cljs.core.async.t15964(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___16187 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16187,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16187,cs,m,dchan,dctr,done){
return (function (state_16101){var state_val_16102 = (state_16101[(1)]);if((state_val_16102 === (7)))
{var inst_16097 = (state_16101[(2)]);var state_16101__$1 = state_16101;var statearr_16103_16188 = state_16101__$1;(statearr_16103_16188[(2)] = inst_16097);
(statearr_16103_16188[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (20)))
{var inst_15998 = (state_16101[(7)]);var inst_16008 = cljs.core.first.call(null,inst_15998);var inst_16009 = cljs.core.nth.call(null,inst_16008,(0),null);var inst_16010 = cljs.core.nth.call(null,inst_16008,(1),null);var state_16101__$1 = (function (){var statearr_16104 = state_16101;(statearr_16104[(8)] = inst_16009);
return statearr_16104;
})();if(cljs.core.truth_(inst_16010))
{var statearr_16105_16189 = state_16101__$1;(statearr_16105_16189[(1)] = (22));
} else
{var statearr_16106_16190 = state_16101__$1;(statearr_16106_16190[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (27)))
{var inst_16038 = (state_16101[(9)]);var inst_16040 = (state_16101[(10)]);var inst_16045 = cljs.core._nth.call(null,inst_16038,inst_16040);var state_16101__$1 = (function (){var statearr_16107 = state_16101;(statearr_16107[(11)] = inst_16045);
return statearr_16107;
})();var statearr_16108_16191 = state_16101__$1;(statearr_16108_16191[(2)] = null);
(statearr_16108_16191[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (1)))
{var state_16101__$1 = state_16101;var statearr_16109_16192 = state_16101__$1;(statearr_16109_16192[(2)] = null);
(statearr_16109_16192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (24)))
{var inst_15998 = (state_16101[(7)]);var inst_16015 = (state_16101[(2)]);var inst_16016 = cljs.core.next.call(null,inst_15998);var inst_15978 = inst_16016;var inst_15979 = null;var inst_15980 = (0);var inst_15981 = (0);var state_16101__$1 = (function (){var statearr_16110 = state_16101;(statearr_16110[(12)] = inst_15978);
(statearr_16110[(13)] = inst_15980);
(statearr_16110[(14)] = inst_15981);
(statearr_16110[(15)] = inst_15979);
(statearr_16110[(16)] = inst_16015);
return statearr_16110;
})();var statearr_16111_16193 = state_16101__$1;(statearr_16111_16193[(2)] = null);
(statearr_16111_16193[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (39)))
{var inst_16058 = (state_16101[(17)]);var inst_16076 = (state_16101[(2)]);var inst_16077 = cljs.core.next.call(null,inst_16058);var inst_16037 = inst_16077;var inst_16038 = null;var inst_16039 = (0);var inst_16040 = (0);var state_16101__$1 = (function (){var statearr_16115 = state_16101;(statearr_16115[(18)] = inst_16076);
(statearr_16115[(19)] = inst_16039);
(statearr_16115[(9)] = inst_16038);
(statearr_16115[(10)] = inst_16040);
(statearr_16115[(20)] = inst_16037);
return statearr_16115;
})();var statearr_16116_16194 = state_16101__$1;(statearr_16116_16194[(2)] = null);
(statearr_16116_16194[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (4)))
{var inst_15969 = (state_16101[(21)]);var inst_15969__$1 = (state_16101[(2)]);var inst_15970 = (inst_15969__$1 == null);var state_16101__$1 = (function (){var statearr_16117 = state_16101;(statearr_16117[(21)] = inst_15969__$1);
return statearr_16117;
})();if(cljs.core.truth_(inst_15970))
{var statearr_16118_16195 = state_16101__$1;(statearr_16118_16195[(1)] = (5));
} else
{var statearr_16119_16196 = state_16101__$1;(statearr_16119_16196[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (15)))
{var inst_15978 = (state_16101[(12)]);var inst_15980 = (state_16101[(13)]);var inst_15981 = (state_16101[(14)]);var inst_15979 = (state_16101[(15)]);var inst_15994 = (state_16101[(2)]);var inst_15995 = (inst_15981 + (1));var tmp16112 = inst_15978;var tmp16113 = inst_15980;var tmp16114 = inst_15979;var inst_15978__$1 = tmp16112;var inst_15979__$1 = tmp16114;var inst_15980__$1 = tmp16113;var inst_15981__$1 = inst_15995;var state_16101__$1 = (function (){var statearr_16120 = state_16101;(statearr_16120[(12)] = inst_15978__$1);
(statearr_16120[(13)] = inst_15980__$1);
(statearr_16120[(14)] = inst_15981__$1);
(statearr_16120[(22)] = inst_15994);
(statearr_16120[(15)] = inst_15979__$1);
return statearr_16120;
})();var statearr_16121_16197 = state_16101__$1;(statearr_16121_16197[(2)] = null);
(statearr_16121_16197[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (21)))
{var inst_16019 = (state_16101[(2)]);var state_16101__$1 = state_16101;var statearr_16122_16198 = state_16101__$1;(statearr_16122_16198[(2)] = inst_16019);
(statearr_16122_16198[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (31)))
{var inst_16045 = (state_16101[(11)]);var inst_16046 = (state_16101[(2)]);var inst_16047 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16048 = cljs.core.async.untap_STAR_.call(null,m,inst_16045);var state_16101__$1 = (function (){var statearr_16123 = state_16101;(statearr_16123[(23)] = inst_16047);
(statearr_16123[(24)] = inst_16046);
return statearr_16123;
})();var statearr_16124_16199 = state_16101__$1;(statearr_16124_16199[(2)] = inst_16048);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16101__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (32)))
{var inst_15969 = (state_16101[(21)]);var inst_16045 = (state_16101[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16101,(31),Object,null,(30));var inst_16052 = cljs.core.async.put_BANG_.call(null,inst_16045,inst_15969,done);var state_16101__$1 = state_16101;var statearr_16125_16200 = state_16101__$1;(statearr_16125_16200[(2)] = inst_16052);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16101__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (40)))
{var inst_16067 = (state_16101[(25)]);var inst_16068 = (state_16101[(2)]);var inst_16069 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16070 = cljs.core.async.untap_STAR_.call(null,m,inst_16067);var state_16101__$1 = (function (){var statearr_16126 = state_16101;(statearr_16126[(26)] = inst_16068);
(statearr_16126[(27)] = inst_16069);
return statearr_16126;
})();var statearr_16127_16201 = state_16101__$1;(statearr_16127_16201[(2)] = inst_16070);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16101__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (33)))
{var inst_16058 = (state_16101[(17)]);var inst_16060 = cljs.core.chunked_seq_QMARK_.call(null,inst_16058);var state_16101__$1 = state_16101;if(inst_16060)
{var statearr_16128_16202 = state_16101__$1;(statearr_16128_16202[(1)] = (36));
} else
{var statearr_16129_16203 = state_16101__$1;(statearr_16129_16203[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (13)))
{var inst_15988 = (state_16101[(28)]);var inst_15991 = cljs.core.async.close_BANG_.call(null,inst_15988);var state_16101__$1 = state_16101;var statearr_16130_16204 = state_16101__$1;(statearr_16130_16204[(2)] = inst_15991);
(statearr_16130_16204[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (22)))
{var inst_16009 = (state_16101[(8)]);var inst_16012 = cljs.core.async.close_BANG_.call(null,inst_16009);var state_16101__$1 = state_16101;var statearr_16131_16205 = state_16101__$1;(statearr_16131_16205[(2)] = inst_16012);
(statearr_16131_16205[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (36)))
{var inst_16058 = (state_16101[(17)]);var inst_16062 = cljs.core.chunk_first.call(null,inst_16058);var inst_16063 = cljs.core.chunk_rest.call(null,inst_16058);var inst_16064 = cljs.core.count.call(null,inst_16062);var inst_16037 = inst_16063;var inst_16038 = inst_16062;var inst_16039 = inst_16064;var inst_16040 = (0);var state_16101__$1 = (function (){var statearr_16132 = state_16101;(statearr_16132[(19)] = inst_16039);
(statearr_16132[(9)] = inst_16038);
(statearr_16132[(10)] = inst_16040);
(statearr_16132[(20)] = inst_16037);
return statearr_16132;
})();var statearr_16133_16206 = state_16101__$1;(statearr_16133_16206[(2)] = null);
(statearr_16133_16206[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (41)))
{var inst_15969 = (state_16101[(21)]);var inst_16067 = (state_16101[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16101,(40),Object,null,(39));var inst_16074 = cljs.core.async.put_BANG_.call(null,inst_16067,inst_15969,done);var state_16101__$1 = state_16101;var statearr_16134_16207 = state_16101__$1;(statearr_16134_16207[(2)] = inst_16074);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16101__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (43)))
{var state_16101__$1 = state_16101;var statearr_16135_16208 = state_16101__$1;(statearr_16135_16208[(2)] = null);
(statearr_16135_16208[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (29)))
{var inst_16085 = (state_16101[(2)]);var state_16101__$1 = state_16101;var statearr_16136_16209 = state_16101__$1;(statearr_16136_16209[(2)] = inst_16085);
(statearr_16136_16209[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (44)))
{var inst_16094 = (state_16101[(2)]);var state_16101__$1 = (function (){var statearr_16137 = state_16101;(statearr_16137[(29)] = inst_16094);
return statearr_16137;
})();var statearr_16138_16210 = state_16101__$1;(statearr_16138_16210[(2)] = null);
(statearr_16138_16210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (6)))
{var inst_16029 = (state_16101[(30)]);var inst_16028 = cljs.core.deref.call(null,cs);var inst_16029__$1 = cljs.core.keys.call(null,inst_16028);var inst_16030 = cljs.core.count.call(null,inst_16029__$1);var inst_16031 = cljs.core.reset_BANG_.call(null,dctr,inst_16030);var inst_16036 = cljs.core.seq.call(null,inst_16029__$1);var inst_16037 = inst_16036;var inst_16038 = null;var inst_16039 = (0);var inst_16040 = (0);var state_16101__$1 = (function (){var statearr_16139 = state_16101;(statearr_16139[(30)] = inst_16029__$1);
(statearr_16139[(19)] = inst_16039);
(statearr_16139[(9)] = inst_16038);
(statearr_16139[(10)] = inst_16040);
(statearr_16139[(31)] = inst_16031);
(statearr_16139[(20)] = inst_16037);
return statearr_16139;
})();var statearr_16140_16211 = state_16101__$1;(statearr_16140_16211[(2)] = null);
(statearr_16140_16211[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (28)))
{var inst_16058 = (state_16101[(17)]);var inst_16037 = (state_16101[(20)]);var inst_16058__$1 = cljs.core.seq.call(null,inst_16037);var state_16101__$1 = (function (){var statearr_16141 = state_16101;(statearr_16141[(17)] = inst_16058__$1);
return statearr_16141;
})();if(inst_16058__$1)
{var statearr_16142_16212 = state_16101__$1;(statearr_16142_16212[(1)] = (33));
} else
{var statearr_16143_16213 = state_16101__$1;(statearr_16143_16213[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (25)))
{var inst_16039 = (state_16101[(19)]);var inst_16040 = (state_16101[(10)]);var inst_16042 = (inst_16040 < inst_16039);var inst_16043 = inst_16042;var state_16101__$1 = state_16101;if(cljs.core.truth_(inst_16043))
{var statearr_16144_16214 = state_16101__$1;(statearr_16144_16214[(1)] = (27));
} else
{var statearr_16145_16215 = state_16101__$1;(statearr_16145_16215[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (34)))
{var state_16101__$1 = state_16101;var statearr_16146_16216 = state_16101__$1;(statearr_16146_16216[(2)] = null);
(statearr_16146_16216[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (17)))
{var state_16101__$1 = state_16101;var statearr_16147_16217 = state_16101__$1;(statearr_16147_16217[(2)] = null);
(statearr_16147_16217[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (3)))
{var inst_16099 = (state_16101[(2)]);var state_16101__$1 = state_16101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16101__$1,inst_16099);
} else
{if((state_val_16102 === (12)))
{var inst_16024 = (state_16101[(2)]);var state_16101__$1 = state_16101;var statearr_16148_16218 = state_16101__$1;(statearr_16148_16218[(2)] = inst_16024);
(statearr_16148_16218[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (2)))
{var state_16101__$1 = state_16101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16101__$1,(4),ch);
} else
{if((state_val_16102 === (23)))
{var state_16101__$1 = state_16101;var statearr_16149_16219 = state_16101__$1;(statearr_16149_16219[(2)] = null);
(statearr_16149_16219[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (35)))
{var inst_16083 = (state_16101[(2)]);var state_16101__$1 = state_16101;var statearr_16150_16220 = state_16101__$1;(statearr_16150_16220[(2)] = inst_16083);
(statearr_16150_16220[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (19)))
{var inst_15998 = (state_16101[(7)]);var inst_16002 = cljs.core.chunk_first.call(null,inst_15998);var inst_16003 = cljs.core.chunk_rest.call(null,inst_15998);var inst_16004 = cljs.core.count.call(null,inst_16002);var inst_15978 = inst_16003;var inst_15979 = inst_16002;var inst_15980 = inst_16004;var inst_15981 = (0);var state_16101__$1 = (function (){var statearr_16151 = state_16101;(statearr_16151[(12)] = inst_15978);
(statearr_16151[(13)] = inst_15980);
(statearr_16151[(14)] = inst_15981);
(statearr_16151[(15)] = inst_15979);
return statearr_16151;
})();var statearr_16152_16221 = state_16101__$1;(statearr_16152_16221[(2)] = null);
(statearr_16152_16221[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (11)))
{var inst_15978 = (state_16101[(12)]);var inst_15998 = (state_16101[(7)]);var inst_15998__$1 = cljs.core.seq.call(null,inst_15978);var state_16101__$1 = (function (){var statearr_16153 = state_16101;(statearr_16153[(7)] = inst_15998__$1);
return statearr_16153;
})();if(inst_15998__$1)
{var statearr_16154_16222 = state_16101__$1;(statearr_16154_16222[(1)] = (16));
} else
{var statearr_16155_16223 = state_16101__$1;(statearr_16155_16223[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (9)))
{var inst_16026 = (state_16101[(2)]);var state_16101__$1 = state_16101;var statearr_16156_16224 = state_16101__$1;(statearr_16156_16224[(2)] = inst_16026);
(statearr_16156_16224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (5)))
{var inst_15976 = cljs.core.deref.call(null,cs);var inst_15977 = cljs.core.seq.call(null,inst_15976);var inst_15978 = inst_15977;var inst_15979 = null;var inst_15980 = (0);var inst_15981 = (0);var state_16101__$1 = (function (){var statearr_16157 = state_16101;(statearr_16157[(12)] = inst_15978);
(statearr_16157[(13)] = inst_15980);
(statearr_16157[(14)] = inst_15981);
(statearr_16157[(15)] = inst_15979);
return statearr_16157;
})();var statearr_16158_16225 = state_16101__$1;(statearr_16158_16225[(2)] = null);
(statearr_16158_16225[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (14)))
{var state_16101__$1 = state_16101;var statearr_16159_16226 = state_16101__$1;(statearr_16159_16226[(2)] = null);
(statearr_16159_16226[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (45)))
{var inst_16091 = (state_16101[(2)]);var state_16101__$1 = state_16101;var statearr_16160_16227 = state_16101__$1;(statearr_16160_16227[(2)] = inst_16091);
(statearr_16160_16227[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (26)))
{var inst_16029 = (state_16101[(30)]);var inst_16087 = (state_16101[(2)]);var inst_16088 = cljs.core.seq.call(null,inst_16029);var state_16101__$1 = (function (){var statearr_16161 = state_16101;(statearr_16161[(32)] = inst_16087);
return statearr_16161;
})();if(inst_16088)
{var statearr_16162_16228 = state_16101__$1;(statearr_16162_16228[(1)] = (42));
} else
{var statearr_16163_16229 = state_16101__$1;(statearr_16163_16229[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (16)))
{var inst_15998 = (state_16101[(7)]);var inst_16000 = cljs.core.chunked_seq_QMARK_.call(null,inst_15998);var state_16101__$1 = state_16101;if(inst_16000)
{var statearr_16167_16230 = state_16101__$1;(statearr_16167_16230[(1)] = (19));
} else
{var statearr_16168_16231 = state_16101__$1;(statearr_16168_16231[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (38)))
{var inst_16080 = (state_16101[(2)]);var state_16101__$1 = state_16101;var statearr_16169_16232 = state_16101__$1;(statearr_16169_16232[(2)] = inst_16080);
(statearr_16169_16232[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (30)))
{var inst_16039 = (state_16101[(19)]);var inst_16038 = (state_16101[(9)]);var inst_16040 = (state_16101[(10)]);var inst_16037 = (state_16101[(20)]);var inst_16054 = (state_16101[(2)]);var inst_16055 = (inst_16040 + (1));var tmp16164 = inst_16039;var tmp16165 = inst_16038;var tmp16166 = inst_16037;var inst_16037__$1 = tmp16166;var inst_16038__$1 = tmp16165;var inst_16039__$1 = tmp16164;var inst_16040__$1 = inst_16055;var state_16101__$1 = (function (){var statearr_16170 = state_16101;(statearr_16170[(19)] = inst_16039__$1);
(statearr_16170[(9)] = inst_16038__$1);
(statearr_16170[(10)] = inst_16040__$1);
(statearr_16170[(33)] = inst_16054);
(statearr_16170[(20)] = inst_16037__$1);
return statearr_16170;
})();var statearr_16171_16233 = state_16101__$1;(statearr_16171_16233[(2)] = null);
(statearr_16171_16233[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (10)))
{var inst_15981 = (state_16101[(14)]);var inst_15979 = (state_16101[(15)]);var inst_15987 = cljs.core._nth.call(null,inst_15979,inst_15981);var inst_15988 = cljs.core.nth.call(null,inst_15987,(0),null);var inst_15989 = cljs.core.nth.call(null,inst_15987,(1),null);var state_16101__$1 = (function (){var statearr_16172 = state_16101;(statearr_16172[(28)] = inst_15988);
return statearr_16172;
})();if(cljs.core.truth_(inst_15989))
{var statearr_16173_16234 = state_16101__$1;(statearr_16173_16234[(1)] = (13));
} else
{var statearr_16174_16235 = state_16101__$1;(statearr_16174_16235[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (18)))
{var inst_16022 = (state_16101[(2)]);var state_16101__$1 = state_16101;var statearr_16175_16236 = state_16101__$1;(statearr_16175_16236[(2)] = inst_16022);
(statearr_16175_16236[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (42)))
{var state_16101__$1 = state_16101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16101__$1,(45),dchan);
} else
{if((state_val_16102 === (37)))
{var inst_16058 = (state_16101[(17)]);var inst_16067 = cljs.core.first.call(null,inst_16058);var state_16101__$1 = (function (){var statearr_16176 = state_16101;(statearr_16176[(25)] = inst_16067);
return statearr_16176;
})();var statearr_16177_16237 = state_16101__$1;(statearr_16177_16237[(2)] = null);
(statearr_16177_16237[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (8)))
{var inst_15980 = (state_16101[(13)]);var inst_15981 = (state_16101[(14)]);var inst_15983 = (inst_15981 < inst_15980);var inst_15984 = inst_15983;var state_16101__$1 = state_16101;if(cljs.core.truth_(inst_15984))
{var statearr_16178_16238 = state_16101__$1;(statearr_16178_16238[(1)] = (10));
} else
{var statearr_16179_16239 = state_16101__$1;(statearr_16179_16239[(1)] = (11));
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
});})(c__5693__auto___16187,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16187,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16183[(0)] = state_machine__5679__auto__);
(statearr_16183[(1)] = (1));
return statearr_16183;
});
var state_machine__5679__auto____1 = (function (state_16101){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16101);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16184){if((e16184 instanceof Object))
{var ex__5682__auto__ = e16184;var statearr_16185_16240 = state_16101;(statearr_16185_16240[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16241 = state_16101;
state_16101 = G__16241;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16101){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16187,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16186 = f__5694__auto__.call(null);(statearr_16186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16187);
return statearr_16186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16187,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16243 = {};return obj16243;
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
;var m = (function (){if(typeof cljs.core.async.t16353 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16353 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16354){
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
this.meta16354 = meta16354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16353.cljs$lang$type = true;
cljs.core.async.t16353.cljs$lang$ctorStr = "cljs.core.async/t16353";
cljs.core.async.t16353.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16353");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16353.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16355){var self__ = this;
var _16355__$1 = this;return self__.meta16354;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16355,meta16354__$1){var self__ = this;
var _16355__$1 = this;return (new cljs.core.async.t16353(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16354__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16353 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16353(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16354){return (new cljs.core.async.t16353(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16354));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16353(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___16462 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16420){var state_val_16421 = (state_16420[(1)]);if((state_val_16421 === (7)))
{var inst_16369 = (state_16420[(7)]);var inst_16374 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16369);var state_16420__$1 = state_16420;var statearr_16422_16463 = state_16420__$1;(statearr_16422_16463[(2)] = inst_16374);
(statearr_16422_16463[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (20)))
{var inst_16384 = (state_16420[(8)]);var state_16420__$1 = state_16420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16420__$1,(23),out,inst_16384);
} else
{if((state_val_16421 === (1)))
{var inst_16359 = (state_16420[(9)]);var inst_16359__$1 = calc_state.call(null);var inst_16360 = cljs.core.seq_QMARK_.call(null,inst_16359__$1);var state_16420__$1 = (function (){var statearr_16423 = state_16420;(statearr_16423[(9)] = inst_16359__$1);
return statearr_16423;
})();if(inst_16360)
{var statearr_16424_16464 = state_16420__$1;(statearr_16424_16464[(1)] = (2));
} else
{var statearr_16425_16465 = state_16420__$1;(statearr_16425_16465[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (4)))
{var inst_16359 = (state_16420[(9)]);var inst_16365 = (state_16420[(2)]);var inst_16366 = cljs.core.get.call(null,inst_16365,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16367 = cljs.core.get.call(null,inst_16365,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16368 = cljs.core.get.call(null,inst_16365,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16369 = inst_16359;var state_16420__$1 = (function (){var statearr_16426 = state_16420;(statearr_16426[(10)] = inst_16366);
(statearr_16426[(7)] = inst_16369);
(statearr_16426[(11)] = inst_16368);
(statearr_16426[(12)] = inst_16367);
return statearr_16426;
})();var statearr_16427_16466 = state_16420__$1;(statearr_16427_16466[(2)] = null);
(statearr_16427_16466[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (15)))
{var state_16420__$1 = state_16420;var statearr_16428_16467 = state_16420__$1;(statearr_16428_16467[(2)] = null);
(statearr_16428_16467[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (21)))
{var state_16420__$1 = state_16420;var statearr_16429_16468 = state_16420__$1;(statearr_16429_16468[(2)] = null);
(statearr_16429_16468[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (13)))
{var inst_16416 = (state_16420[(2)]);var state_16420__$1 = state_16420;var statearr_16430_16469 = state_16420__$1;(statearr_16430_16469[(2)] = inst_16416);
(statearr_16430_16469[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (22)))
{var inst_16377 = (state_16420[(13)]);var inst_16413 = (state_16420[(2)]);var inst_16369 = inst_16377;var state_16420__$1 = (function (){var statearr_16431 = state_16420;(statearr_16431[(7)] = inst_16369);
(statearr_16431[(14)] = inst_16413);
return statearr_16431;
})();var statearr_16432_16470 = state_16420__$1;(statearr_16432_16470[(2)] = null);
(statearr_16432_16470[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (6)))
{var inst_16418 = (state_16420[(2)]);var state_16420__$1 = state_16420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16420__$1,inst_16418);
} else
{if((state_val_16421 === (17)))
{var inst_16399 = (state_16420[(15)]);var state_16420__$1 = state_16420;var statearr_16433_16471 = state_16420__$1;(statearr_16433_16471[(2)] = inst_16399);
(statearr_16433_16471[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (3)))
{var inst_16359 = (state_16420[(9)]);var state_16420__$1 = state_16420;var statearr_16434_16472 = state_16420__$1;(statearr_16434_16472[(2)] = inst_16359);
(statearr_16434_16472[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (12)))
{var inst_16399 = (state_16420[(15)]);var inst_16380 = (state_16420[(16)]);var inst_16385 = (state_16420[(17)]);var inst_16399__$1 = inst_16380.call(null,inst_16385);var state_16420__$1 = (function (){var statearr_16435 = state_16420;(statearr_16435[(15)] = inst_16399__$1);
return statearr_16435;
})();if(cljs.core.truth_(inst_16399__$1))
{var statearr_16436_16473 = state_16420__$1;(statearr_16436_16473[(1)] = (17));
} else
{var statearr_16437_16474 = state_16420__$1;(statearr_16437_16474[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (2)))
{var inst_16359 = (state_16420[(9)]);var inst_16362 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16359);var state_16420__$1 = state_16420;var statearr_16438_16475 = state_16420__$1;(statearr_16438_16475[(2)] = inst_16362);
(statearr_16438_16475[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (23)))
{var inst_16410 = (state_16420[(2)]);var state_16420__$1 = state_16420;var statearr_16439_16476 = state_16420__$1;(statearr_16439_16476[(2)] = inst_16410);
(statearr_16439_16476[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (19)))
{var inst_16407 = (state_16420[(2)]);var state_16420__$1 = state_16420;if(cljs.core.truth_(inst_16407))
{var statearr_16440_16477 = state_16420__$1;(statearr_16440_16477[(1)] = (20));
} else
{var statearr_16441_16478 = state_16420__$1;(statearr_16441_16478[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (11)))
{var inst_16384 = (state_16420[(8)]);var inst_16390 = (inst_16384 == null);var state_16420__$1 = state_16420;if(cljs.core.truth_(inst_16390))
{var statearr_16442_16479 = state_16420__$1;(statearr_16442_16479[(1)] = (14));
} else
{var statearr_16443_16480 = state_16420__$1;(statearr_16443_16480[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (9)))
{var inst_16377 = (state_16420[(13)]);var inst_16377__$1 = (state_16420[(2)]);var inst_16378 = cljs.core.get.call(null,inst_16377__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16379 = cljs.core.get.call(null,inst_16377__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16380 = cljs.core.get.call(null,inst_16377__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16420__$1 = (function (){var statearr_16444 = state_16420;(statearr_16444[(13)] = inst_16377__$1);
(statearr_16444[(16)] = inst_16380);
(statearr_16444[(18)] = inst_16379);
return statearr_16444;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16420__$1,(10),inst_16378);
} else
{if((state_val_16421 === (5)))
{var inst_16369 = (state_16420[(7)]);var inst_16372 = cljs.core.seq_QMARK_.call(null,inst_16369);var state_16420__$1 = state_16420;if(inst_16372)
{var statearr_16445_16481 = state_16420__$1;(statearr_16445_16481[(1)] = (7));
} else
{var statearr_16446_16482 = state_16420__$1;(statearr_16446_16482[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (14)))
{var inst_16385 = (state_16420[(17)]);var inst_16392 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16385);var state_16420__$1 = state_16420;var statearr_16447_16483 = state_16420__$1;(statearr_16447_16483[(2)] = inst_16392);
(statearr_16447_16483[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (16)))
{var inst_16395 = (state_16420[(2)]);var inst_16396 = calc_state.call(null);var inst_16369 = inst_16396;var state_16420__$1 = (function (){var statearr_16448 = state_16420;(statearr_16448[(19)] = inst_16395);
(statearr_16448[(7)] = inst_16369);
return statearr_16448;
})();var statearr_16449_16484 = state_16420__$1;(statearr_16449_16484[(2)] = null);
(statearr_16449_16484[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (10)))
{var inst_16384 = (state_16420[(8)]);var inst_16385 = (state_16420[(17)]);var inst_16383 = (state_16420[(2)]);var inst_16384__$1 = cljs.core.nth.call(null,inst_16383,(0),null);var inst_16385__$1 = cljs.core.nth.call(null,inst_16383,(1),null);var inst_16386 = (inst_16384__$1 == null);var inst_16387 = cljs.core._EQ_.call(null,inst_16385__$1,change);var inst_16388 = (inst_16386) || (inst_16387);var state_16420__$1 = (function (){var statearr_16450 = state_16420;(statearr_16450[(8)] = inst_16384__$1);
(statearr_16450[(17)] = inst_16385__$1);
return statearr_16450;
})();if(cljs.core.truth_(inst_16388))
{var statearr_16451_16485 = state_16420__$1;(statearr_16451_16485[(1)] = (11));
} else
{var statearr_16452_16486 = state_16420__$1;(statearr_16452_16486[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (18)))
{var inst_16380 = (state_16420[(16)]);var inst_16385 = (state_16420[(17)]);var inst_16379 = (state_16420[(18)]);var inst_16402 = cljs.core.empty_QMARK_.call(null,inst_16380);var inst_16403 = inst_16379.call(null,inst_16385);var inst_16404 = cljs.core.not.call(null,inst_16403);var inst_16405 = (inst_16402) && (inst_16404);var state_16420__$1 = state_16420;var statearr_16453_16487 = state_16420__$1;(statearr_16453_16487[(2)] = inst_16405);
(statearr_16453_16487[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (8)))
{var inst_16369 = (state_16420[(7)]);var state_16420__$1 = state_16420;var statearr_16454_16488 = state_16420__$1;(statearr_16454_16488[(2)] = inst_16369);
(statearr_16454_16488[(1)] = (9));
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
});})(c__5693__auto___16462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___16462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16458[(0)] = state_machine__5679__auto__);
(statearr_16458[(1)] = (1));
return statearr_16458;
});
var state_machine__5679__auto____1 = (function (state_16420){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16420);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16459){if((e16459 instanceof Object))
{var ex__5682__auto__ = e16459;var statearr_16460_16489 = state_16420;(statearr_16460_16489[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16490 = state_16420;
state_16420 = G__16490;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16420){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_16461 = f__5694__auto__.call(null);(statearr_16461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16462);
return statearr_16461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16492 = {};return obj16492;
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
return (function (p1__16493_SHARP_){if(cljs.core.truth_(p1__16493_SHARP_.call(null,topic)))
{return p1__16493_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16493_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16618 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16618 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16619){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16619 = meta16619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16618.cljs$lang$type = true;
cljs.core.async.t16618.cljs$lang$ctorStr = "cljs.core.async/t16618";
cljs.core.async.t16618.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16618");
});})(mults,ensure_mult))
;
cljs.core.async.t16618.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16618.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16618.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16618.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16620){var self__ = this;
var _16620__$1 = this;return self__.meta16619;
});})(mults,ensure_mult))
;
cljs.core.async.t16618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16620,meta16619__$1){var self__ = this;
var _16620__$1 = this;return (new cljs.core.async.t16618(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16619__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16618 = ((function (mults,ensure_mult){
return (function __GT_t16618(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16619){return (new cljs.core.async.t16618(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16619));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16618(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___16742 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16742,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16742,mults,ensure_mult,p){
return (function (state_16694){var state_val_16695 = (state_16694[(1)]);if((state_val_16695 === (7)))
{var inst_16690 = (state_16694[(2)]);var state_16694__$1 = state_16694;var statearr_16696_16743 = state_16694__$1;(statearr_16696_16743[(2)] = inst_16690);
(statearr_16696_16743[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (20)))
{var state_16694__$1 = state_16694;var statearr_16697_16744 = state_16694__$1;(statearr_16697_16744[(2)] = null);
(statearr_16697_16744[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (1)))
{var state_16694__$1 = state_16694;var statearr_16698_16745 = state_16694__$1;(statearr_16698_16745[(2)] = null);
(statearr_16698_16745[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (24)))
{var inst_16623 = (state_16694[(7)]);var inst_16673 = (state_16694[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16694,(23),Object,null,(22));var inst_16680 = cljs.core.async.muxch_STAR_.call(null,inst_16673);var state_16694__$1 = state_16694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16694__$1,(25),inst_16680,inst_16623);
} else
{if((state_val_16695 === (4)))
{var inst_16623 = (state_16694[(7)]);var inst_16623__$1 = (state_16694[(2)]);var inst_16624 = (inst_16623__$1 == null);var state_16694__$1 = (function (){var statearr_16699 = state_16694;(statearr_16699[(7)] = inst_16623__$1);
return statearr_16699;
})();if(cljs.core.truth_(inst_16624))
{var statearr_16700_16746 = state_16694__$1;(statearr_16700_16746[(1)] = (5));
} else
{var statearr_16701_16747 = state_16694__$1;(statearr_16701_16747[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (15)))
{var inst_16665 = (state_16694[(2)]);var state_16694__$1 = state_16694;var statearr_16702_16748 = state_16694__$1;(statearr_16702_16748[(2)] = inst_16665);
(statearr_16702_16748[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (21)))
{var inst_16687 = (state_16694[(2)]);var state_16694__$1 = (function (){var statearr_16703 = state_16694;(statearr_16703[(9)] = inst_16687);
return statearr_16703;
})();var statearr_16704_16749 = state_16694__$1;(statearr_16704_16749[(2)] = null);
(statearr_16704_16749[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (13)))
{var inst_16647 = (state_16694[(10)]);var inst_16649 = cljs.core.chunked_seq_QMARK_.call(null,inst_16647);var state_16694__$1 = state_16694;if(inst_16649)
{var statearr_16705_16750 = state_16694__$1;(statearr_16705_16750[(1)] = (16));
} else
{var statearr_16706_16751 = state_16694__$1;(statearr_16706_16751[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (22)))
{var inst_16684 = (state_16694[(2)]);var state_16694__$1 = state_16694;var statearr_16707_16752 = state_16694__$1;(statearr_16707_16752[(2)] = inst_16684);
(statearr_16707_16752[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (6)))
{var inst_16623 = (state_16694[(7)]);var inst_16673 = (state_16694[(8)]);var inst_16671 = (state_16694[(11)]);var inst_16671__$1 = topic_fn.call(null,inst_16623);var inst_16672 = cljs.core.deref.call(null,mults);var inst_16673__$1 = cljs.core.get.call(null,inst_16672,inst_16671__$1);var state_16694__$1 = (function (){var statearr_16708 = state_16694;(statearr_16708[(8)] = inst_16673__$1);
(statearr_16708[(11)] = inst_16671__$1);
return statearr_16708;
})();if(cljs.core.truth_(inst_16673__$1))
{var statearr_16709_16753 = state_16694__$1;(statearr_16709_16753[(1)] = (19));
} else
{var statearr_16710_16754 = state_16694__$1;(statearr_16710_16754[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (25)))
{var inst_16682 = (state_16694[(2)]);var state_16694__$1 = state_16694;var statearr_16711_16755 = state_16694__$1;(statearr_16711_16755[(2)] = inst_16682);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16694__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (17)))
{var inst_16647 = (state_16694[(10)]);var inst_16656 = cljs.core.first.call(null,inst_16647);var inst_16657 = cljs.core.async.muxch_STAR_.call(null,inst_16656);var inst_16658 = cljs.core.async.close_BANG_.call(null,inst_16657);var inst_16659 = cljs.core.next.call(null,inst_16647);var inst_16633 = inst_16659;var inst_16634 = null;var inst_16635 = (0);var inst_16636 = (0);var state_16694__$1 = (function (){var statearr_16712 = state_16694;(statearr_16712[(12)] = inst_16658);
(statearr_16712[(13)] = inst_16634);
(statearr_16712[(14)] = inst_16633);
(statearr_16712[(15)] = inst_16636);
(statearr_16712[(16)] = inst_16635);
return statearr_16712;
})();var statearr_16713_16756 = state_16694__$1;(statearr_16713_16756[(2)] = null);
(statearr_16713_16756[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (3)))
{var inst_16692 = (state_16694[(2)]);var state_16694__$1 = state_16694;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16694__$1,inst_16692);
} else
{if((state_val_16695 === (12)))
{var inst_16667 = (state_16694[(2)]);var state_16694__$1 = state_16694;var statearr_16714_16757 = state_16694__$1;(statearr_16714_16757[(2)] = inst_16667);
(statearr_16714_16757[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (2)))
{var state_16694__$1 = state_16694;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16694__$1,(4),ch);
} else
{if((state_val_16695 === (23)))
{var inst_16671 = (state_16694[(11)]);var inst_16675 = (state_16694[(2)]);var inst_16676 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16671);var state_16694__$1 = (function (){var statearr_16715 = state_16694;(statearr_16715[(17)] = inst_16675);
return statearr_16715;
})();var statearr_16716_16758 = state_16694__$1;(statearr_16716_16758[(2)] = inst_16676);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16694__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (19)))
{var state_16694__$1 = state_16694;var statearr_16717_16759 = state_16694__$1;(statearr_16717_16759[(2)] = null);
(statearr_16717_16759[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (11)))
{var inst_16647 = (state_16694[(10)]);var inst_16633 = (state_16694[(14)]);var inst_16647__$1 = cljs.core.seq.call(null,inst_16633);var state_16694__$1 = (function (){var statearr_16718 = state_16694;(statearr_16718[(10)] = inst_16647__$1);
return statearr_16718;
})();if(inst_16647__$1)
{var statearr_16719_16760 = state_16694__$1;(statearr_16719_16760[(1)] = (13));
} else
{var statearr_16720_16761 = state_16694__$1;(statearr_16720_16761[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (9)))
{var inst_16669 = (state_16694[(2)]);var state_16694__$1 = state_16694;var statearr_16721_16762 = state_16694__$1;(statearr_16721_16762[(2)] = inst_16669);
(statearr_16721_16762[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (5)))
{var inst_16630 = cljs.core.deref.call(null,mults);var inst_16631 = cljs.core.vals.call(null,inst_16630);var inst_16632 = cljs.core.seq.call(null,inst_16631);var inst_16633 = inst_16632;var inst_16634 = null;var inst_16635 = (0);var inst_16636 = (0);var state_16694__$1 = (function (){var statearr_16722 = state_16694;(statearr_16722[(13)] = inst_16634);
(statearr_16722[(14)] = inst_16633);
(statearr_16722[(15)] = inst_16636);
(statearr_16722[(16)] = inst_16635);
return statearr_16722;
})();var statearr_16723_16763 = state_16694__$1;(statearr_16723_16763[(2)] = null);
(statearr_16723_16763[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (14)))
{var state_16694__$1 = state_16694;var statearr_16727_16764 = state_16694__$1;(statearr_16727_16764[(2)] = null);
(statearr_16727_16764[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (16)))
{var inst_16647 = (state_16694[(10)]);var inst_16651 = cljs.core.chunk_first.call(null,inst_16647);var inst_16652 = cljs.core.chunk_rest.call(null,inst_16647);var inst_16653 = cljs.core.count.call(null,inst_16651);var inst_16633 = inst_16652;var inst_16634 = inst_16651;var inst_16635 = inst_16653;var inst_16636 = (0);var state_16694__$1 = (function (){var statearr_16728 = state_16694;(statearr_16728[(13)] = inst_16634);
(statearr_16728[(14)] = inst_16633);
(statearr_16728[(15)] = inst_16636);
(statearr_16728[(16)] = inst_16635);
return statearr_16728;
})();var statearr_16729_16765 = state_16694__$1;(statearr_16729_16765[(2)] = null);
(statearr_16729_16765[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (10)))
{var inst_16634 = (state_16694[(13)]);var inst_16633 = (state_16694[(14)]);var inst_16636 = (state_16694[(15)]);var inst_16635 = (state_16694[(16)]);var inst_16641 = cljs.core._nth.call(null,inst_16634,inst_16636);var inst_16642 = cljs.core.async.muxch_STAR_.call(null,inst_16641);var inst_16643 = cljs.core.async.close_BANG_.call(null,inst_16642);var inst_16644 = (inst_16636 + (1));var tmp16724 = inst_16634;var tmp16725 = inst_16633;var tmp16726 = inst_16635;var inst_16633__$1 = tmp16725;var inst_16634__$1 = tmp16724;var inst_16635__$1 = tmp16726;var inst_16636__$1 = inst_16644;var state_16694__$1 = (function (){var statearr_16730 = state_16694;(statearr_16730[(18)] = inst_16643);
(statearr_16730[(13)] = inst_16634__$1);
(statearr_16730[(14)] = inst_16633__$1);
(statearr_16730[(15)] = inst_16636__$1);
(statearr_16730[(16)] = inst_16635__$1);
return statearr_16730;
})();var statearr_16731_16766 = state_16694__$1;(statearr_16731_16766[(2)] = null);
(statearr_16731_16766[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (18)))
{var inst_16662 = (state_16694[(2)]);var state_16694__$1 = state_16694;var statearr_16732_16767 = state_16694__$1;(statearr_16732_16767[(2)] = inst_16662);
(statearr_16732_16767[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16695 === (8)))
{var inst_16636 = (state_16694[(15)]);var inst_16635 = (state_16694[(16)]);var inst_16638 = (inst_16636 < inst_16635);var inst_16639 = inst_16638;var state_16694__$1 = state_16694;if(cljs.core.truth_(inst_16639))
{var statearr_16733_16768 = state_16694__$1;(statearr_16733_16768[(1)] = (10));
} else
{var statearr_16734_16769 = state_16694__$1;(statearr_16734_16769[(1)] = (11));
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
});})(c__5693__auto___16742,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___16742,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16738[(0)] = state_machine__5679__auto__);
(statearr_16738[(1)] = (1));
return statearr_16738;
});
var state_machine__5679__auto____1 = (function (state_16694){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16694);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16739){if((e16739 instanceof Object))
{var ex__5682__auto__ = e16739;var statearr_16740_16770 = state_16694;(statearr_16740_16770[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16694);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16771 = state_16694;
state_16694 = G__16771;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16694){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16742,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_16741 = f__5694__auto__.call(null);(statearr_16741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16742);
return statearr_16741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16742,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___16908 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16878){var state_val_16879 = (state_16878[(1)]);if((state_val_16879 === (7)))
{var state_16878__$1 = state_16878;var statearr_16880_16909 = state_16878__$1;(statearr_16880_16909[(2)] = null);
(statearr_16880_16909[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (1)))
{var state_16878__$1 = state_16878;var statearr_16881_16910 = state_16878__$1;(statearr_16881_16910[(2)] = null);
(statearr_16881_16910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (4)))
{var inst_16842 = (state_16878[(7)]);var inst_16844 = (inst_16842 < cnt);var state_16878__$1 = state_16878;if(cljs.core.truth_(inst_16844))
{var statearr_16882_16911 = state_16878__$1;(statearr_16882_16911[(1)] = (6));
} else
{var statearr_16883_16912 = state_16878__$1;(statearr_16883_16912[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (15)))
{var inst_16874 = (state_16878[(2)]);var state_16878__$1 = state_16878;var statearr_16884_16913 = state_16878__$1;(statearr_16884_16913[(2)] = inst_16874);
(statearr_16884_16913[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (13)))
{var inst_16867 = cljs.core.async.close_BANG_.call(null,out);var state_16878__$1 = state_16878;var statearr_16885_16914 = state_16878__$1;(statearr_16885_16914[(2)] = inst_16867);
(statearr_16885_16914[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (6)))
{var state_16878__$1 = state_16878;var statearr_16886_16915 = state_16878__$1;(statearr_16886_16915[(2)] = null);
(statearr_16886_16915[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (3)))
{var inst_16876 = (state_16878[(2)]);var state_16878__$1 = state_16878;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16878__$1,inst_16876);
} else
{if((state_val_16879 === (12)))
{var inst_16864 = (state_16878[(8)]);var inst_16864__$1 = (state_16878[(2)]);var inst_16865 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16864__$1);var state_16878__$1 = (function (){var statearr_16887 = state_16878;(statearr_16887[(8)] = inst_16864__$1);
return statearr_16887;
})();if(cljs.core.truth_(inst_16865))
{var statearr_16888_16916 = state_16878__$1;(statearr_16888_16916[(1)] = (13));
} else
{var statearr_16889_16917 = state_16878__$1;(statearr_16889_16917[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (2)))
{var inst_16841 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16842 = (0);var state_16878__$1 = (function (){var statearr_16890 = state_16878;(statearr_16890[(9)] = inst_16841);
(statearr_16890[(7)] = inst_16842);
return statearr_16890;
})();var statearr_16891_16918 = state_16878__$1;(statearr_16891_16918[(2)] = null);
(statearr_16891_16918[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (11)))
{var inst_16842 = (state_16878[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16878,(10),Object,null,(9));var inst_16851 = chs__$1.call(null,inst_16842);var inst_16852 = done.call(null,inst_16842);var inst_16853 = cljs.core.async.take_BANG_.call(null,inst_16851,inst_16852);var state_16878__$1 = state_16878;var statearr_16892_16919 = state_16878__$1;(statearr_16892_16919[(2)] = inst_16853);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16878__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (9)))
{var inst_16842 = (state_16878[(7)]);var inst_16855 = (state_16878[(2)]);var inst_16856 = (inst_16842 + (1));var inst_16842__$1 = inst_16856;var state_16878__$1 = (function (){var statearr_16893 = state_16878;(statearr_16893[(7)] = inst_16842__$1);
(statearr_16893[(10)] = inst_16855);
return statearr_16893;
})();var statearr_16894_16920 = state_16878__$1;(statearr_16894_16920[(2)] = null);
(statearr_16894_16920[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (5)))
{var inst_16862 = (state_16878[(2)]);var state_16878__$1 = (function (){var statearr_16895 = state_16878;(statearr_16895[(11)] = inst_16862);
return statearr_16895;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16878__$1,(12),dchan);
} else
{if((state_val_16879 === (14)))
{var inst_16864 = (state_16878[(8)]);var inst_16869 = cljs.core.apply.call(null,f,inst_16864);var state_16878__$1 = state_16878;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16878__$1,(16),out,inst_16869);
} else
{if((state_val_16879 === (16)))
{var inst_16871 = (state_16878[(2)]);var state_16878__$1 = (function (){var statearr_16896 = state_16878;(statearr_16896[(12)] = inst_16871);
return statearr_16896;
})();var statearr_16897_16921 = state_16878__$1;(statearr_16897_16921[(2)] = null);
(statearr_16897_16921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (10)))
{var inst_16846 = (state_16878[(2)]);var inst_16847 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16878__$1 = (function (){var statearr_16898 = state_16878;(statearr_16898[(13)] = inst_16846);
return statearr_16898;
})();var statearr_16899_16922 = state_16878__$1;(statearr_16899_16922[(2)] = inst_16847);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16878__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16879 === (8)))
{var inst_16860 = (state_16878[(2)]);var state_16878__$1 = state_16878;var statearr_16900_16923 = state_16878__$1;(statearr_16900_16923[(2)] = inst_16860);
(statearr_16900_16923[(1)] = (5));
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
});})(c__5693__auto___16908,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16904[(0)] = state_machine__5679__auto__);
(statearr_16904[(1)] = (1));
return statearr_16904;
});
var state_machine__5679__auto____1 = (function (state_16878){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16878);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16905){if((e16905 instanceof Object))
{var ex__5682__auto__ = e16905;var statearr_16906_16924 = state_16878;(statearr_16906_16924[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16878);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16925 = state_16878;
state_16878 = G__16925;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16878){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16908,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16907 = f__5694__auto__.call(null);(statearr_16907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16908);
return statearr_16907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16908,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17033 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17033,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17033,out){
return (function (state_17009){var state_val_17010 = (state_17009[(1)]);if((state_val_17010 === (7)))
{var inst_16989 = (state_17009[(7)]);var inst_16988 = (state_17009[(8)]);var inst_16988__$1 = (state_17009[(2)]);var inst_16989__$1 = cljs.core.nth.call(null,inst_16988__$1,(0),null);var inst_16990 = cljs.core.nth.call(null,inst_16988__$1,(1),null);var inst_16991 = (inst_16989__$1 == null);var state_17009__$1 = (function (){var statearr_17011 = state_17009;(statearr_17011[(7)] = inst_16989__$1);
(statearr_17011[(8)] = inst_16988__$1);
(statearr_17011[(9)] = inst_16990);
return statearr_17011;
})();if(cljs.core.truth_(inst_16991))
{var statearr_17012_17034 = state_17009__$1;(statearr_17012_17034[(1)] = (8));
} else
{var statearr_17013_17035 = state_17009__$1;(statearr_17013_17035[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (1)))
{var inst_16980 = cljs.core.vec.call(null,chs);var inst_16981 = inst_16980;var state_17009__$1 = (function (){var statearr_17014 = state_17009;(statearr_17014[(10)] = inst_16981);
return statearr_17014;
})();var statearr_17015_17036 = state_17009__$1;(statearr_17015_17036[(2)] = null);
(statearr_17015_17036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (4)))
{var inst_16981 = (state_17009[(10)]);var state_17009__$1 = state_17009;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17009__$1,(7),inst_16981);
} else
{if((state_val_17010 === (6)))
{var inst_17005 = (state_17009[(2)]);var state_17009__$1 = state_17009;var statearr_17016_17037 = state_17009__$1;(statearr_17016_17037[(2)] = inst_17005);
(statearr_17016_17037[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (3)))
{var inst_17007 = (state_17009[(2)]);var state_17009__$1 = state_17009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17009__$1,inst_17007);
} else
{if((state_val_17010 === (2)))
{var inst_16981 = (state_17009[(10)]);var inst_16983 = cljs.core.count.call(null,inst_16981);var inst_16984 = (inst_16983 > (0));var state_17009__$1 = state_17009;if(cljs.core.truth_(inst_16984))
{var statearr_17018_17038 = state_17009__$1;(statearr_17018_17038[(1)] = (4));
} else
{var statearr_17019_17039 = state_17009__$1;(statearr_17019_17039[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (11)))
{var inst_16981 = (state_17009[(10)]);var inst_16998 = (state_17009[(2)]);var tmp17017 = inst_16981;var inst_16981__$1 = tmp17017;var state_17009__$1 = (function (){var statearr_17020 = state_17009;(statearr_17020[(11)] = inst_16998);
(statearr_17020[(10)] = inst_16981__$1);
return statearr_17020;
})();var statearr_17021_17040 = state_17009__$1;(statearr_17021_17040[(2)] = null);
(statearr_17021_17040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (9)))
{var inst_16989 = (state_17009[(7)]);var state_17009__$1 = state_17009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17009__$1,(11),out,inst_16989);
} else
{if((state_val_17010 === (5)))
{var inst_17003 = cljs.core.async.close_BANG_.call(null,out);var state_17009__$1 = state_17009;var statearr_17022_17041 = state_17009__$1;(statearr_17022_17041[(2)] = inst_17003);
(statearr_17022_17041[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (10)))
{var inst_17001 = (state_17009[(2)]);var state_17009__$1 = state_17009;var statearr_17023_17042 = state_17009__$1;(statearr_17023_17042[(2)] = inst_17001);
(statearr_17023_17042[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (8)))
{var inst_16989 = (state_17009[(7)]);var inst_16988 = (state_17009[(8)]);var inst_16981 = (state_17009[(10)]);var inst_16990 = (state_17009[(9)]);var inst_16993 = (function (){var c = inst_16990;var v = inst_16989;var vec__16986 = inst_16988;var cs = inst_16981;return ((function (c,v,vec__16986,cs,inst_16989,inst_16988,inst_16981,inst_16990,state_val_17010,c__5693__auto___17033,out){
return (function (p1__16926_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16926_SHARP_);
});
;})(c,v,vec__16986,cs,inst_16989,inst_16988,inst_16981,inst_16990,state_val_17010,c__5693__auto___17033,out))
})();var inst_16994 = cljs.core.filterv.call(null,inst_16993,inst_16981);var inst_16981__$1 = inst_16994;var state_17009__$1 = (function (){var statearr_17024 = state_17009;(statearr_17024[(10)] = inst_16981__$1);
return statearr_17024;
})();var statearr_17025_17043 = state_17009__$1;(statearr_17025_17043[(2)] = null);
(statearr_17025_17043[(1)] = (2));
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
});})(c__5693__auto___17033,out))
;return ((function (switch__5678__auto__,c__5693__auto___17033,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17029 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17029[(0)] = state_machine__5679__auto__);
(statearr_17029[(1)] = (1));
return statearr_17029;
});
var state_machine__5679__auto____1 = (function (state_17009){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17009);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17030){if((e17030 instanceof Object))
{var ex__5682__auto__ = e17030;var statearr_17031_17044 = state_17009;(statearr_17031_17044[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17045 = state_17009;
state_17009 = G__17045;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17009){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17033,out))
})();var state__5695__auto__ = (function (){var statearr_17032 = f__5694__auto__.call(null);(statearr_17032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17033);
return statearr_17032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17033,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17138 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17138,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17138,out){
return (function (state_17115){var state_val_17116 = (state_17115[(1)]);if((state_val_17116 === (7)))
{var inst_17097 = (state_17115[(7)]);var inst_17097__$1 = (state_17115[(2)]);var inst_17098 = (inst_17097__$1 == null);var inst_17099 = cljs.core.not.call(null,inst_17098);var state_17115__$1 = (function (){var statearr_17117 = state_17115;(statearr_17117[(7)] = inst_17097__$1);
return statearr_17117;
})();if(inst_17099)
{var statearr_17118_17139 = state_17115__$1;(statearr_17118_17139[(1)] = (8));
} else
{var statearr_17119_17140 = state_17115__$1;(statearr_17119_17140[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17116 === (1)))
{var inst_17092 = (0);var state_17115__$1 = (function (){var statearr_17120 = state_17115;(statearr_17120[(8)] = inst_17092);
return statearr_17120;
})();var statearr_17121_17141 = state_17115__$1;(statearr_17121_17141[(2)] = null);
(statearr_17121_17141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17116 === (4)))
{var state_17115__$1 = state_17115;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17115__$1,(7),ch);
} else
{if((state_val_17116 === (6)))
{var inst_17110 = (state_17115[(2)]);var state_17115__$1 = state_17115;var statearr_17122_17142 = state_17115__$1;(statearr_17122_17142[(2)] = inst_17110);
(statearr_17122_17142[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17116 === (3)))
{var inst_17112 = (state_17115[(2)]);var inst_17113 = cljs.core.async.close_BANG_.call(null,out);var state_17115__$1 = (function (){var statearr_17123 = state_17115;(statearr_17123[(9)] = inst_17112);
return statearr_17123;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17115__$1,inst_17113);
} else
{if((state_val_17116 === (2)))
{var inst_17092 = (state_17115[(8)]);var inst_17094 = (inst_17092 < n);var state_17115__$1 = state_17115;if(cljs.core.truth_(inst_17094))
{var statearr_17124_17143 = state_17115__$1;(statearr_17124_17143[(1)] = (4));
} else
{var statearr_17125_17144 = state_17115__$1;(statearr_17125_17144[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17116 === (11)))
{var inst_17092 = (state_17115[(8)]);var inst_17102 = (state_17115[(2)]);var inst_17103 = (inst_17092 + (1));var inst_17092__$1 = inst_17103;var state_17115__$1 = (function (){var statearr_17126 = state_17115;(statearr_17126[(10)] = inst_17102);
(statearr_17126[(8)] = inst_17092__$1);
return statearr_17126;
})();var statearr_17127_17145 = state_17115__$1;(statearr_17127_17145[(2)] = null);
(statearr_17127_17145[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17116 === (9)))
{var state_17115__$1 = state_17115;var statearr_17128_17146 = state_17115__$1;(statearr_17128_17146[(2)] = null);
(statearr_17128_17146[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17116 === (5)))
{var state_17115__$1 = state_17115;var statearr_17129_17147 = state_17115__$1;(statearr_17129_17147[(2)] = null);
(statearr_17129_17147[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17116 === (10)))
{var inst_17107 = (state_17115[(2)]);var state_17115__$1 = state_17115;var statearr_17130_17148 = state_17115__$1;(statearr_17130_17148[(2)] = inst_17107);
(statearr_17130_17148[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17116 === (8)))
{var inst_17097 = (state_17115[(7)]);var state_17115__$1 = state_17115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17115__$1,(11),out,inst_17097);
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
});})(c__5693__auto___17138,out))
;return ((function (switch__5678__auto__,c__5693__auto___17138,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17134 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17134[(0)] = state_machine__5679__auto__);
(statearr_17134[(1)] = (1));
return statearr_17134;
});
var state_machine__5679__auto____1 = (function (state_17115){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17115);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17135){if((e17135 instanceof Object))
{var ex__5682__auto__ = e17135;var statearr_17136_17149 = state_17115;(statearr_17136_17149[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17115);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17150 = state_17115;
state_17115 = G__17150;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17115){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17138,out))
})();var state__5695__auto__ = (function (){var statearr_17137 = f__5694__auto__.call(null);(statearr_17137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17138);
return statearr_17137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17138,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17247 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17247,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17247,out){
return (function (state_17222){var state_val_17223 = (state_17222[(1)]);if((state_val_17223 === (7)))
{var inst_17217 = (state_17222[(2)]);var state_17222__$1 = state_17222;var statearr_17224_17248 = state_17222__$1;(statearr_17224_17248[(2)] = inst_17217);
(statearr_17224_17248[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (1)))
{var inst_17199 = null;var state_17222__$1 = (function (){var statearr_17225 = state_17222;(statearr_17225[(7)] = inst_17199);
return statearr_17225;
})();var statearr_17226_17249 = state_17222__$1;(statearr_17226_17249[(2)] = null);
(statearr_17226_17249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (4)))
{var inst_17202 = (state_17222[(8)]);var inst_17202__$1 = (state_17222[(2)]);var inst_17203 = (inst_17202__$1 == null);var inst_17204 = cljs.core.not.call(null,inst_17203);var state_17222__$1 = (function (){var statearr_17227 = state_17222;(statearr_17227[(8)] = inst_17202__$1);
return statearr_17227;
})();if(inst_17204)
{var statearr_17228_17250 = state_17222__$1;(statearr_17228_17250[(1)] = (5));
} else
{var statearr_17229_17251 = state_17222__$1;(statearr_17229_17251[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (6)))
{var state_17222__$1 = state_17222;var statearr_17230_17252 = state_17222__$1;(statearr_17230_17252[(2)] = null);
(statearr_17230_17252[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (3)))
{var inst_17219 = (state_17222[(2)]);var inst_17220 = cljs.core.async.close_BANG_.call(null,out);var state_17222__$1 = (function (){var statearr_17231 = state_17222;(statearr_17231[(9)] = inst_17219);
return statearr_17231;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17222__$1,inst_17220);
} else
{if((state_val_17223 === (2)))
{var state_17222__$1 = state_17222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17222__$1,(4),ch);
} else
{if((state_val_17223 === (11)))
{var inst_17202 = (state_17222[(8)]);var inst_17211 = (state_17222[(2)]);var inst_17199 = inst_17202;var state_17222__$1 = (function (){var statearr_17232 = state_17222;(statearr_17232[(7)] = inst_17199);
(statearr_17232[(10)] = inst_17211);
return statearr_17232;
})();var statearr_17233_17253 = state_17222__$1;(statearr_17233_17253[(2)] = null);
(statearr_17233_17253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (9)))
{var inst_17202 = (state_17222[(8)]);var state_17222__$1 = state_17222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17222__$1,(11),out,inst_17202);
} else
{if((state_val_17223 === (5)))
{var inst_17202 = (state_17222[(8)]);var inst_17199 = (state_17222[(7)]);var inst_17206 = cljs.core._EQ_.call(null,inst_17202,inst_17199);var state_17222__$1 = state_17222;if(inst_17206)
{var statearr_17235_17254 = state_17222__$1;(statearr_17235_17254[(1)] = (8));
} else
{var statearr_17236_17255 = state_17222__$1;(statearr_17236_17255[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (10)))
{var inst_17214 = (state_17222[(2)]);var state_17222__$1 = state_17222;var statearr_17237_17256 = state_17222__$1;(statearr_17237_17256[(2)] = inst_17214);
(statearr_17237_17256[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (8)))
{var inst_17199 = (state_17222[(7)]);var tmp17234 = inst_17199;var inst_17199__$1 = tmp17234;var state_17222__$1 = (function (){var statearr_17238 = state_17222;(statearr_17238[(7)] = inst_17199__$1);
return statearr_17238;
})();var statearr_17239_17257 = state_17222__$1;(statearr_17239_17257[(2)] = null);
(statearr_17239_17257[(1)] = (2));
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
});})(c__5693__auto___17247,out))
;return ((function (switch__5678__auto__,c__5693__auto___17247,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17243 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17243[(0)] = state_machine__5679__auto__);
(statearr_17243[(1)] = (1));
return statearr_17243;
});
var state_machine__5679__auto____1 = (function (state_17222){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17222);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17244){if((e17244 instanceof Object))
{var ex__5682__auto__ = e17244;var statearr_17245_17258 = state_17222;(statearr_17245_17258[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17259 = state_17222;
state_17222 = G__17259;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17222){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17247,out))
})();var state__5695__auto__ = (function (){var statearr_17246 = f__5694__auto__.call(null);(statearr_17246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17247);
return statearr_17246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17247,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17394 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17394,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17394,out){
return (function (state_17364){var state_val_17365 = (state_17364[(1)]);if((state_val_17365 === (7)))
{var inst_17360 = (state_17364[(2)]);var state_17364__$1 = state_17364;var statearr_17366_17395 = state_17364__$1;(statearr_17366_17395[(2)] = inst_17360);
(statearr_17366_17395[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (1)))
{var inst_17327 = (new Array(n));var inst_17328 = inst_17327;var inst_17329 = (0);var state_17364__$1 = (function (){var statearr_17367 = state_17364;(statearr_17367[(7)] = inst_17329);
(statearr_17367[(8)] = inst_17328);
return statearr_17367;
})();var statearr_17368_17396 = state_17364__$1;(statearr_17368_17396[(2)] = null);
(statearr_17368_17396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (4)))
{var inst_17332 = (state_17364[(9)]);var inst_17332__$1 = (state_17364[(2)]);var inst_17333 = (inst_17332__$1 == null);var inst_17334 = cljs.core.not.call(null,inst_17333);var state_17364__$1 = (function (){var statearr_17369 = state_17364;(statearr_17369[(9)] = inst_17332__$1);
return statearr_17369;
})();if(inst_17334)
{var statearr_17370_17397 = state_17364__$1;(statearr_17370_17397[(1)] = (5));
} else
{var statearr_17371_17398 = state_17364__$1;(statearr_17371_17398[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (15)))
{var inst_17354 = (state_17364[(2)]);var state_17364__$1 = state_17364;var statearr_17372_17399 = state_17364__$1;(statearr_17372_17399[(2)] = inst_17354);
(statearr_17372_17399[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (13)))
{var state_17364__$1 = state_17364;var statearr_17373_17400 = state_17364__$1;(statearr_17373_17400[(2)] = null);
(statearr_17373_17400[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (6)))
{var inst_17329 = (state_17364[(7)]);var inst_17350 = (inst_17329 > (0));var state_17364__$1 = state_17364;if(cljs.core.truth_(inst_17350))
{var statearr_17374_17401 = state_17364__$1;(statearr_17374_17401[(1)] = (12));
} else
{var statearr_17375_17402 = state_17364__$1;(statearr_17375_17402[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (3)))
{var inst_17362 = (state_17364[(2)]);var state_17364__$1 = state_17364;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17364__$1,inst_17362);
} else
{if((state_val_17365 === (12)))
{var inst_17328 = (state_17364[(8)]);var inst_17352 = cljs.core.vec.call(null,inst_17328);var state_17364__$1 = state_17364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17364__$1,(15),out,inst_17352);
} else
{if((state_val_17365 === (2)))
{var state_17364__$1 = state_17364;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17364__$1,(4),ch);
} else
{if((state_val_17365 === (11)))
{var inst_17344 = (state_17364[(2)]);var inst_17345 = (new Array(n));var inst_17328 = inst_17345;var inst_17329 = (0);var state_17364__$1 = (function (){var statearr_17376 = state_17364;(statearr_17376[(7)] = inst_17329);
(statearr_17376[(8)] = inst_17328);
(statearr_17376[(10)] = inst_17344);
return statearr_17376;
})();var statearr_17377_17403 = state_17364__$1;(statearr_17377_17403[(2)] = null);
(statearr_17377_17403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (9)))
{var inst_17328 = (state_17364[(8)]);var inst_17342 = cljs.core.vec.call(null,inst_17328);var state_17364__$1 = state_17364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17364__$1,(11),out,inst_17342);
} else
{if((state_val_17365 === (5)))
{var inst_17329 = (state_17364[(7)]);var inst_17328 = (state_17364[(8)]);var inst_17337 = (state_17364[(11)]);var inst_17332 = (state_17364[(9)]);var inst_17336 = (inst_17328[inst_17329] = inst_17332);var inst_17337__$1 = (inst_17329 + (1));var inst_17338 = (inst_17337__$1 < n);var state_17364__$1 = (function (){var statearr_17378 = state_17364;(statearr_17378[(12)] = inst_17336);
(statearr_17378[(11)] = inst_17337__$1);
return statearr_17378;
})();if(cljs.core.truth_(inst_17338))
{var statearr_17379_17404 = state_17364__$1;(statearr_17379_17404[(1)] = (8));
} else
{var statearr_17380_17405 = state_17364__$1;(statearr_17380_17405[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (14)))
{var inst_17357 = (state_17364[(2)]);var inst_17358 = cljs.core.async.close_BANG_.call(null,out);var state_17364__$1 = (function (){var statearr_17382 = state_17364;(statearr_17382[(13)] = inst_17357);
return statearr_17382;
})();var statearr_17383_17406 = state_17364__$1;(statearr_17383_17406[(2)] = inst_17358);
(statearr_17383_17406[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (10)))
{var inst_17348 = (state_17364[(2)]);var state_17364__$1 = state_17364;var statearr_17384_17407 = state_17364__$1;(statearr_17384_17407[(2)] = inst_17348);
(statearr_17384_17407[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (8)))
{var inst_17328 = (state_17364[(8)]);var inst_17337 = (state_17364[(11)]);var tmp17381 = inst_17328;var inst_17328__$1 = tmp17381;var inst_17329 = inst_17337;var state_17364__$1 = (function (){var statearr_17385 = state_17364;(statearr_17385[(7)] = inst_17329);
(statearr_17385[(8)] = inst_17328__$1);
return statearr_17385;
})();var statearr_17386_17408 = state_17364__$1;(statearr_17386_17408[(2)] = null);
(statearr_17386_17408[(1)] = (2));
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
});})(c__5693__auto___17394,out))
;return ((function (switch__5678__auto__,c__5693__auto___17394,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17390[(0)] = state_machine__5679__auto__);
(statearr_17390[(1)] = (1));
return statearr_17390;
});
var state_machine__5679__auto____1 = (function (state_17364){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17364);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17391){if((e17391 instanceof Object))
{var ex__5682__auto__ = e17391;var statearr_17392_17409 = state_17364;(statearr_17392_17409[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17364);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17391;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17410 = state_17364;
state_17364 = G__17410;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17364){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17394,out))
})();var state__5695__auto__ = (function (){var statearr_17393 = f__5694__auto__.call(null);(statearr_17393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17394);
return statearr_17393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17394,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17553 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17553,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17553,out){
return (function (state_17523){var state_val_17524 = (state_17523[(1)]);if((state_val_17524 === (7)))
{var inst_17519 = (state_17523[(2)]);var state_17523__$1 = state_17523;var statearr_17525_17554 = state_17523__$1;(statearr_17525_17554[(2)] = inst_17519);
(statearr_17525_17554[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (1)))
{var inst_17482 = [];var inst_17483 = inst_17482;var inst_17484 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_17523__$1 = (function (){var statearr_17526 = state_17523;(statearr_17526[(7)] = inst_17484);
(statearr_17526[(8)] = inst_17483);
return statearr_17526;
})();var statearr_17527_17555 = state_17523__$1;(statearr_17527_17555[(2)] = null);
(statearr_17527_17555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (4)))
{var inst_17487 = (state_17523[(9)]);var inst_17487__$1 = (state_17523[(2)]);var inst_17488 = (inst_17487__$1 == null);var inst_17489 = cljs.core.not.call(null,inst_17488);var state_17523__$1 = (function (){var statearr_17528 = state_17523;(statearr_17528[(9)] = inst_17487__$1);
return statearr_17528;
})();if(inst_17489)
{var statearr_17529_17556 = state_17523__$1;(statearr_17529_17556[(1)] = (5));
} else
{var statearr_17530_17557 = state_17523__$1;(statearr_17530_17557[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (15)))
{var inst_17513 = (state_17523[(2)]);var state_17523__$1 = state_17523;var statearr_17531_17558 = state_17523__$1;(statearr_17531_17558[(2)] = inst_17513);
(statearr_17531_17558[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (13)))
{var state_17523__$1 = state_17523;var statearr_17532_17559 = state_17523__$1;(statearr_17532_17559[(2)] = null);
(statearr_17532_17559[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (6)))
{var inst_17483 = (state_17523[(8)]);var inst_17508 = inst_17483.length;var inst_17509 = (inst_17508 > (0));var state_17523__$1 = state_17523;if(cljs.core.truth_(inst_17509))
{var statearr_17533_17560 = state_17523__$1;(statearr_17533_17560[(1)] = (12));
} else
{var statearr_17534_17561 = state_17523__$1;(statearr_17534_17561[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (3)))
{var inst_17521 = (state_17523[(2)]);var state_17523__$1 = state_17523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17523__$1,inst_17521);
} else
{if((state_val_17524 === (12)))
{var inst_17483 = (state_17523[(8)]);var inst_17511 = cljs.core.vec.call(null,inst_17483);var state_17523__$1 = state_17523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17523__$1,(15),out,inst_17511);
} else
{if((state_val_17524 === (2)))
{var state_17523__$1 = state_17523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17523__$1,(4),ch);
} else
{if((state_val_17524 === (11)))
{var inst_17487 = (state_17523[(9)]);var inst_17491 = (state_17523[(10)]);var inst_17501 = (state_17523[(2)]);var inst_17502 = [];var inst_17503 = inst_17502.push(inst_17487);var inst_17483 = inst_17502;var inst_17484 = inst_17491;var state_17523__$1 = (function (){var statearr_17535 = state_17523;(statearr_17535[(7)] = inst_17484);
(statearr_17535[(11)] = inst_17501);
(statearr_17535[(8)] = inst_17483);
(statearr_17535[(12)] = inst_17503);
return statearr_17535;
})();var statearr_17536_17562 = state_17523__$1;(statearr_17536_17562[(2)] = null);
(statearr_17536_17562[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (9)))
{var inst_17483 = (state_17523[(8)]);var inst_17499 = cljs.core.vec.call(null,inst_17483);var state_17523__$1 = state_17523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17523__$1,(11),out,inst_17499);
} else
{if((state_val_17524 === (5)))
{var inst_17487 = (state_17523[(9)]);var inst_17484 = (state_17523[(7)]);var inst_17491 = (state_17523[(10)]);var inst_17491__$1 = f.call(null,inst_17487);var inst_17492 = cljs.core._EQ_.call(null,inst_17491__$1,inst_17484);var inst_17493 = cljs.core.keyword_identical_QMARK_.call(null,inst_17484,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_17494 = (inst_17492) || (inst_17493);var state_17523__$1 = (function (){var statearr_17537 = state_17523;(statearr_17537[(10)] = inst_17491__$1);
return statearr_17537;
})();if(cljs.core.truth_(inst_17494))
{var statearr_17538_17563 = state_17523__$1;(statearr_17538_17563[(1)] = (8));
} else
{var statearr_17539_17564 = state_17523__$1;(statearr_17539_17564[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (14)))
{var inst_17516 = (state_17523[(2)]);var inst_17517 = cljs.core.async.close_BANG_.call(null,out);var state_17523__$1 = (function (){var statearr_17541 = state_17523;(statearr_17541[(13)] = inst_17516);
return statearr_17541;
})();var statearr_17542_17565 = state_17523__$1;(statearr_17542_17565[(2)] = inst_17517);
(statearr_17542_17565[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (10)))
{var inst_17506 = (state_17523[(2)]);var state_17523__$1 = state_17523;var statearr_17543_17566 = state_17523__$1;(statearr_17543_17566[(2)] = inst_17506);
(statearr_17543_17566[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (8)))
{var inst_17487 = (state_17523[(9)]);var inst_17491 = (state_17523[(10)]);var inst_17483 = (state_17523[(8)]);var inst_17496 = inst_17483.push(inst_17487);var tmp17540 = inst_17483;var inst_17483__$1 = tmp17540;var inst_17484 = inst_17491;var state_17523__$1 = (function (){var statearr_17544 = state_17523;(statearr_17544[(7)] = inst_17484);
(statearr_17544[(8)] = inst_17483__$1);
(statearr_17544[(14)] = inst_17496);
return statearr_17544;
})();var statearr_17545_17567 = state_17523__$1;(statearr_17545_17567[(2)] = null);
(statearr_17545_17567[(1)] = (2));
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
});})(c__5693__auto___17553,out))
;return ((function (switch__5678__auto__,c__5693__auto___17553,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17549[(0)] = state_machine__5679__auto__);
(statearr_17549[(1)] = (1));
return statearr_17549;
});
var state_machine__5679__auto____1 = (function (state_17523){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17523);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17550){if((e17550 instanceof Object))
{var ex__5682__auto__ = e17550;var statearr_17551_17568 = state_17523;(statearr_17551_17568[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17569 = state_17523;
state_17523 = G__17569;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17523){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17553,out))
})();var state__5695__auto__ = (function (){var statearr_17552 = f__5694__auto__.call(null);(statearr_17552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17553);
return statearr_17552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17553,out))
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
