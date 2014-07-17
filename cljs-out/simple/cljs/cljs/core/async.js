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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t26999 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26999 = (function (f,fn_handler,meta27000){
this.f = f;
this.fn_handler = fn_handler;
this.meta27000 = meta27000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26999.cljs$lang$type = true;
cljs.core.async.t26999.cljs$lang$ctorStr = "cljs.core.async/t26999";
cljs.core.async.t26999.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t26999");
});
cljs.core.async.t26999.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t26999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t26999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27001){var self__ = this;
var _27001__$1 = this;return self__.meta27000;
});
cljs.core.async.t26999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27001,meta27000__$1){var self__ = this;
var _27001__$1 = this;return (new cljs.core.async.t26999(self__.f,self__.fn_handler,meta27000__$1));
});
cljs.core.async.__GT_t26999 = (function __GT_t26999(f__$1,fn_handler__$1,meta27000){return (new cljs.core.async.t26999(f__$1,fn_handler__$1,meta27000));
});
}
return (new cljs.core.async.t26999(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__27003 = buff;if(G__27003)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__27003.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__27003.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27003);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27003);
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
{var val_27004 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_27004);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_27004,ret){
return (function (){return fn1.call(null,val_27004);
});})(val_27004,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___27005 = n;var x_27006 = (0);while(true){
if((x_27006 < n__4399__auto___27005))
{(a[x_27006] = (0));
{
var G__27007 = (x_27006 + (1));
x_27006 = G__27007;
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
var G__27008 = (i + (1));
i = G__27008;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t27012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27012 = (function (flag,alt_flag,meta27013){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27013 = meta27013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27012.cljs$lang$type = true;
cljs.core.async.t27012.cljs$lang$ctorStr = "cljs.core.async/t27012";
cljs.core.async.t27012.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27012");
});})(flag))
;
cljs.core.async.t27012.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t27012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t27012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27014){var self__ = this;
var _27014__$1 = this;return self__.meta27013;
});})(flag))
;
cljs.core.async.t27012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27014,meta27013__$1){var self__ = this;
var _27014__$1 = this;return (new cljs.core.async.t27012(self__.flag,self__.alt_flag,meta27013__$1));
});})(flag))
;
cljs.core.async.__GT_t27012 = ((function (flag){
return (function __GT_t27012(flag__$1,alt_flag__$1,meta27013){return (new cljs.core.async.t27012(flag__$1,alt_flag__$1,meta27013));
});})(flag))
;
}
return (new cljs.core.async.t27012(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t27018 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27018 = (function (cb,flag,alt_handler,meta27019){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27019 = meta27019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27018.cljs$lang$type = true;
cljs.core.async.t27018.cljs$lang$ctorStr = "cljs.core.async/t27018";
cljs.core.async.t27018.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27018");
});
cljs.core.async.t27018.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t27018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t27018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27020){var self__ = this;
var _27020__$1 = this;return self__.meta27019;
});
cljs.core.async.t27018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27020,meta27019__$1){var self__ = this;
var _27020__$1 = this;return (new cljs.core.async.t27018(self__.cb,self__.flag,self__.alt_handler,meta27019__$1));
});
cljs.core.async.__GT_t27018 = (function __GT_t27018(cb__$1,flag__$1,alt_handler__$1,meta27019){return (new cljs.core.async.t27018(cb__$1,flag__$1,alt_handler__$1,meta27019));
});
}
return (new cljs.core.async.t27018(cb,flag,alt_handler,null));
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
return (function (p1__27021_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27021_SHARP_,port], null));
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
var G__27022 = (i + (1));
i = G__27022;
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
var alts_BANG___delegate = function (ports,p__27023){var map__27025 = p__27023;var map__27025__$1 = ((cljs.core.seq_QMARK_.call(null,map__27025))?cljs.core.apply.call(null,cljs.core.hash_map,map__27025):map__27025);var opts = map__27025__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__27023 = null;if (arguments.length > 1) {
  p__27023 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__27023);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27026){
var ports = cljs.core.first(arglist__27026);
var p__27023 = cljs.core.rest(arglist__27026);
return alts_BANG___delegate(ports,p__27023);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27034 = (function (ch,f,map_LT_,meta27035){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27035 = meta27035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27034.cljs$lang$type = true;
cljs.core.async.t27034.cljs$lang$ctorStr = "cljs.core.async/t27034";
cljs.core.async.t27034.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27034");
});
cljs.core.async.t27034.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t27034.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27037 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27037 = (function (fn1,_,meta27035,ch,f,map_LT_,meta27038){
this.fn1 = fn1;
this._ = _;
this.meta27035 = meta27035;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27038 = meta27038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27037.cljs$lang$type = true;
cljs.core.async.t27037.cljs$lang$ctorStr = "cljs.core.async/t27037";
cljs.core.async.t27037.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27037");
});})(___$1))
;
cljs.core.async.t27037.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27037.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27027_SHARP_){return f1.call(null,(((p1__27027_SHARP_ == null))?null:self__.f.call(null,p1__27027_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27039){var self__ = this;
var _27039__$1 = this;return self__.meta27038;
});})(___$1))
;
cljs.core.async.t27037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27039,meta27038__$1){var self__ = this;
var _27039__$1 = this;return (new cljs.core.async.t27037(self__.fn1,self__._,self__.meta27035,self__.ch,self__.f,self__.map_LT_,meta27038__$1));
});})(___$1))
;
cljs.core.async.__GT_t27037 = ((function (___$1){
return (function __GT_t27037(fn1__$1,___$2,meta27035__$1,ch__$2,f__$2,map_LT___$2,meta27038){return (new cljs.core.async.t27037(fn1__$1,___$2,meta27035__$1,ch__$2,f__$2,map_LT___$2,meta27038));
});})(___$1))
;
}
return (new cljs.core.async.t27037(fn1,___$1,self__.meta27035,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t27034.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27036){var self__ = this;
var _27036__$1 = this;return self__.meta27035;
});
cljs.core.async.t27034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27036,meta27035__$1){var self__ = this;
var _27036__$1 = this;return (new cljs.core.async.t27034(self__.ch,self__.f,self__.map_LT_,meta27035__$1));
});
cljs.core.async.__GT_t27034 = (function __GT_t27034(ch__$1,f__$1,map_LT___$1,meta27035){return (new cljs.core.async.t27034(ch__$1,f__$1,map_LT___$1,meta27035));
});
}
return (new cljs.core.async.t27034(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27043 = (function (ch,f,map_GT_,meta27044){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27044 = meta27044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27043.cljs$lang$type = true;
cljs.core.async.t27043.cljs$lang$ctorStr = "cljs.core.async/t27043";
cljs.core.async.t27043.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27043");
});
cljs.core.async.t27043.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27043.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t27043.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27043.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27043.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27043.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27045){var self__ = this;
var _27045__$1 = this;return self__.meta27044;
});
cljs.core.async.t27043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27045,meta27044__$1){var self__ = this;
var _27045__$1 = this;return (new cljs.core.async.t27043(self__.ch,self__.f,self__.map_GT_,meta27044__$1));
});
cljs.core.async.__GT_t27043 = (function __GT_t27043(ch__$1,f__$1,map_GT___$1,meta27044){return (new cljs.core.async.t27043(ch__$1,f__$1,map_GT___$1,meta27044));
});
}
return (new cljs.core.async.t27043(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27049 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27049 = (function (ch,p,filter_GT_,meta27050){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27050 = meta27050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27049.cljs$lang$type = true;
cljs.core.async.t27049.cljs$lang$ctorStr = "cljs.core.async/t27049";
cljs.core.async.t27049.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27049");
});
cljs.core.async.t27049.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27049.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t27049.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27049.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27049.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27049.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27051){var self__ = this;
var _27051__$1 = this;return self__.meta27050;
});
cljs.core.async.t27049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27051,meta27050__$1){var self__ = this;
var _27051__$1 = this;return (new cljs.core.async.t27049(self__.ch,self__.p,self__.filter_GT_,meta27050__$1));
});
cljs.core.async.__GT_t27049 = (function __GT_t27049(ch__$1,p__$1,filter_GT___$1,meta27050){return (new cljs.core.async.t27049(ch__$1,p__$1,filter_GT___$1,meta27050));
});
}
return (new cljs.core.async.t27049(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___27134 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27134,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27134,out){
return (function (state_27113){var state_val_27114 = (state_27113[(1)]);if((state_val_27114 === (7)))
{var inst_27109 = (state_27113[(2)]);var state_27113__$1 = state_27113;var statearr_27115_27135 = state_27113__$1;(statearr_27115_27135[(2)] = inst_27109);
(statearr_27115_27135[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27114 === (1)))
{var state_27113__$1 = state_27113;var statearr_27116_27136 = state_27113__$1;(statearr_27116_27136[(2)] = null);
(statearr_27116_27136[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27114 === (4)))
{var inst_27095 = (state_27113[(7)]);var inst_27095__$1 = (state_27113[(2)]);var inst_27096 = (inst_27095__$1 == null);var state_27113__$1 = (function (){var statearr_27117 = state_27113;(statearr_27117[(7)] = inst_27095__$1);
return statearr_27117;
})();if(cljs.core.truth_(inst_27096))
{var statearr_27118_27137 = state_27113__$1;(statearr_27118_27137[(1)] = (5));
} else
{var statearr_27119_27138 = state_27113__$1;(statearr_27119_27138[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27114 === (6)))
{var inst_27095 = (state_27113[(7)]);var inst_27100 = p.call(null,inst_27095);var state_27113__$1 = state_27113;if(cljs.core.truth_(inst_27100))
{var statearr_27120_27139 = state_27113__$1;(statearr_27120_27139[(1)] = (8));
} else
{var statearr_27121_27140 = state_27113__$1;(statearr_27121_27140[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27114 === (3)))
{var inst_27111 = (state_27113[(2)]);var state_27113__$1 = state_27113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27113__$1,inst_27111);
} else
{if((state_val_27114 === (2)))
{var state_27113__$1 = state_27113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27113__$1,(4),ch);
} else
{if((state_val_27114 === (11)))
{var inst_27103 = (state_27113[(2)]);var state_27113__$1 = state_27113;var statearr_27122_27141 = state_27113__$1;(statearr_27122_27141[(2)] = inst_27103);
(statearr_27122_27141[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27114 === (9)))
{var state_27113__$1 = state_27113;var statearr_27123_27142 = state_27113__$1;(statearr_27123_27142[(2)] = null);
(statearr_27123_27142[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27114 === (5)))
{var inst_27098 = cljs.core.async.close_BANG_.call(null,out);var state_27113__$1 = state_27113;var statearr_27124_27143 = state_27113__$1;(statearr_27124_27143[(2)] = inst_27098);
(statearr_27124_27143[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27114 === (10)))
{var inst_27106 = (state_27113[(2)]);var state_27113__$1 = (function (){var statearr_27125 = state_27113;(statearr_27125[(8)] = inst_27106);
return statearr_27125;
})();var statearr_27126_27144 = state_27113__$1;(statearr_27126_27144[(2)] = null);
(statearr_27126_27144[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27114 === (8)))
{var inst_27095 = (state_27113[(7)]);var state_27113__$1 = state_27113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27113__$1,(11),out,inst_27095);
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
});})(c__5693__auto___27134,out))
;return ((function (switch__5678__auto__,c__5693__auto___27134,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27130 = [null,null,null,null,null,null,null,null,null];(statearr_27130[(0)] = state_machine__5679__auto__);
(statearr_27130[(1)] = (1));
return statearr_27130;
});
var state_machine__5679__auto____1 = (function (state_27113){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27113);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27131){if((e27131 instanceof Object))
{var ex__5682__auto__ = e27131;var statearr_27132_27145 = state_27113;(statearr_27132_27145[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27113);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27146 = state_27113;
state_27113 = G__27146;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27113){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27134,out))
})();var state__5695__auto__ = (function (){var statearr_27133 = f__5694__auto__.call(null);(statearr_27133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27134);
return statearr_27133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27134,out))
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
return (function (state_27298){var state_val_27299 = (state_27298[(1)]);if((state_val_27299 === (7)))
{var inst_27294 = (state_27298[(2)]);var state_27298__$1 = state_27298;var statearr_27300_27337 = state_27298__$1;(statearr_27300_27337[(2)] = inst_27294);
(statearr_27300_27337[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (20)))
{var inst_27269 = (state_27298[(7)]);var inst_27280 = (state_27298[(2)]);var inst_27281 = cljs.core.next.call(null,inst_27269);var inst_27255 = inst_27281;var inst_27256 = null;var inst_27257 = (0);var inst_27258 = (0);var state_27298__$1 = (function (){var statearr_27301 = state_27298;(statearr_27301[(8)] = inst_27255);
(statearr_27301[(9)] = inst_27257);
(statearr_27301[(10)] = inst_27258);
(statearr_27301[(11)] = inst_27256);
(statearr_27301[(12)] = inst_27280);
return statearr_27301;
})();var statearr_27302_27338 = state_27298__$1;(statearr_27302_27338[(2)] = null);
(statearr_27302_27338[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (1)))
{var state_27298__$1 = state_27298;var statearr_27303_27339 = state_27298__$1;(statearr_27303_27339[(2)] = null);
(statearr_27303_27339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (4)))
{var inst_27244 = (state_27298[(13)]);var inst_27244__$1 = (state_27298[(2)]);var inst_27245 = (inst_27244__$1 == null);var state_27298__$1 = (function (){var statearr_27307 = state_27298;(statearr_27307[(13)] = inst_27244__$1);
return statearr_27307;
})();if(cljs.core.truth_(inst_27245))
{var statearr_27308_27340 = state_27298__$1;(statearr_27308_27340[(1)] = (5));
} else
{var statearr_27309_27341 = state_27298__$1;(statearr_27309_27341[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (15)))
{var state_27298__$1 = state_27298;var statearr_27310_27342 = state_27298__$1;(statearr_27310_27342[(2)] = null);
(statearr_27310_27342[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (13)))
{var inst_27255 = (state_27298[(8)]);var inst_27257 = (state_27298[(9)]);var inst_27258 = (state_27298[(10)]);var inst_27256 = (state_27298[(11)]);var inst_27265 = (state_27298[(2)]);var inst_27266 = (inst_27258 + (1));var tmp27304 = inst_27255;var tmp27305 = inst_27257;var tmp27306 = inst_27256;var inst_27255__$1 = tmp27304;var inst_27256__$1 = tmp27306;var inst_27257__$1 = tmp27305;var inst_27258__$1 = inst_27266;var state_27298__$1 = (function (){var statearr_27311 = state_27298;(statearr_27311[(14)] = inst_27265);
(statearr_27311[(8)] = inst_27255__$1);
(statearr_27311[(9)] = inst_27257__$1);
(statearr_27311[(10)] = inst_27258__$1);
(statearr_27311[(11)] = inst_27256__$1);
return statearr_27311;
})();var statearr_27312_27343 = state_27298__$1;(statearr_27312_27343[(2)] = null);
(statearr_27312_27343[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (6)))
{var inst_27244 = (state_27298[(13)]);var inst_27249 = f.call(null,inst_27244);var inst_27254 = cljs.core.seq.call(null,inst_27249);var inst_27255 = inst_27254;var inst_27256 = null;var inst_27257 = (0);var inst_27258 = (0);var state_27298__$1 = (function (){var statearr_27313 = state_27298;(statearr_27313[(8)] = inst_27255);
(statearr_27313[(9)] = inst_27257);
(statearr_27313[(10)] = inst_27258);
(statearr_27313[(11)] = inst_27256);
return statearr_27313;
})();var statearr_27314_27344 = state_27298__$1;(statearr_27314_27344[(2)] = null);
(statearr_27314_27344[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (17)))
{var inst_27269 = (state_27298[(7)]);var inst_27273 = cljs.core.chunk_first.call(null,inst_27269);var inst_27274 = cljs.core.chunk_rest.call(null,inst_27269);var inst_27275 = cljs.core.count.call(null,inst_27273);var inst_27255 = inst_27274;var inst_27256 = inst_27273;var inst_27257 = inst_27275;var inst_27258 = (0);var state_27298__$1 = (function (){var statearr_27315 = state_27298;(statearr_27315[(8)] = inst_27255);
(statearr_27315[(9)] = inst_27257);
(statearr_27315[(10)] = inst_27258);
(statearr_27315[(11)] = inst_27256);
return statearr_27315;
})();var statearr_27316_27345 = state_27298__$1;(statearr_27316_27345[(2)] = null);
(statearr_27316_27345[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (3)))
{var inst_27296 = (state_27298[(2)]);var state_27298__$1 = state_27298;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27298__$1,inst_27296);
} else
{if((state_val_27299 === (12)))
{var inst_27289 = (state_27298[(2)]);var state_27298__$1 = state_27298;var statearr_27317_27346 = state_27298__$1;(statearr_27317_27346[(2)] = inst_27289);
(statearr_27317_27346[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (2)))
{var state_27298__$1 = state_27298;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27298__$1,(4),in$);
} else
{if((state_val_27299 === (19)))
{var inst_27284 = (state_27298[(2)]);var state_27298__$1 = state_27298;var statearr_27318_27347 = state_27298__$1;(statearr_27318_27347[(2)] = inst_27284);
(statearr_27318_27347[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (11)))
{var inst_27255 = (state_27298[(8)]);var inst_27269 = (state_27298[(7)]);var inst_27269__$1 = cljs.core.seq.call(null,inst_27255);var state_27298__$1 = (function (){var statearr_27319 = state_27298;(statearr_27319[(7)] = inst_27269__$1);
return statearr_27319;
})();if(inst_27269__$1)
{var statearr_27320_27348 = state_27298__$1;(statearr_27320_27348[(1)] = (14));
} else
{var statearr_27321_27349 = state_27298__$1;(statearr_27321_27349[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (9)))
{var inst_27291 = (state_27298[(2)]);var state_27298__$1 = (function (){var statearr_27322 = state_27298;(statearr_27322[(15)] = inst_27291);
return statearr_27322;
})();var statearr_27323_27350 = state_27298__$1;(statearr_27323_27350[(2)] = null);
(statearr_27323_27350[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (5)))
{var inst_27247 = cljs.core.async.close_BANG_.call(null,out);var state_27298__$1 = state_27298;var statearr_27324_27351 = state_27298__$1;(statearr_27324_27351[(2)] = inst_27247);
(statearr_27324_27351[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (14)))
{var inst_27269 = (state_27298[(7)]);var inst_27271 = cljs.core.chunked_seq_QMARK_.call(null,inst_27269);var state_27298__$1 = state_27298;if(inst_27271)
{var statearr_27325_27352 = state_27298__$1;(statearr_27325_27352[(1)] = (17));
} else
{var statearr_27326_27353 = state_27298__$1;(statearr_27326_27353[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (16)))
{var inst_27287 = (state_27298[(2)]);var state_27298__$1 = state_27298;var statearr_27327_27354 = state_27298__$1;(statearr_27327_27354[(2)] = inst_27287);
(statearr_27327_27354[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27299 === (10)))
{var inst_27258 = (state_27298[(10)]);var inst_27256 = (state_27298[(11)]);var inst_27263 = cljs.core._nth.call(null,inst_27256,inst_27258);var state_27298__$1 = state_27298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27298__$1,(13),out,inst_27263);
} else
{if((state_val_27299 === (18)))
{var inst_27269 = (state_27298[(7)]);var inst_27278 = cljs.core.first.call(null,inst_27269);var state_27298__$1 = state_27298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27298__$1,(20),out,inst_27278);
} else
{if((state_val_27299 === (8)))
{var inst_27257 = (state_27298[(9)]);var inst_27258 = (state_27298[(10)]);var inst_27260 = (inst_27258 < inst_27257);var inst_27261 = inst_27260;var state_27298__$1 = state_27298;if(cljs.core.truth_(inst_27261))
{var statearr_27328_27355 = state_27298__$1;(statearr_27328_27355[(1)] = (10));
} else
{var statearr_27329_27356 = state_27298__$1;(statearr_27329_27356[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_27333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27333[(0)] = state_machine__5679__auto__);
(statearr_27333[(1)] = (1));
return statearr_27333;
});
var state_machine__5679__auto____1 = (function (state_27298){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27298);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27334){if((e27334 instanceof Object))
{var ex__5682__auto__ = e27334;var statearr_27335_27357 = state_27298;(statearr_27335_27357[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27298);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27334;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27358 = state_27298;
state_27298 = G__27358;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27298){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_27336 = f__5694__auto__.call(null);(statearr_27336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_27336;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___27439 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27439){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27439){
return (function (state_27418){var state_val_27419 = (state_27418[(1)]);if((state_val_27419 === (7)))
{var inst_27414 = (state_27418[(2)]);var state_27418__$1 = state_27418;var statearr_27420_27440 = state_27418__$1;(statearr_27420_27440[(2)] = inst_27414);
(statearr_27420_27440[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27419 === (1)))
{var state_27418__$1 = state_27418;var statearr_27421_27441 = state_27418__$1;(statearr_27421_27441[(2)] = null);
(statearr_27421_27441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27419 === (4)))
{var inst_27401 = (state_27418[(7)]);var inst_27401__$1 = (state_27418[(2)]);var inst_27402 = (inst_27401__$1 == null);var state_27418__$1 = (function (){var statearr_27422 = state_27418;(statearr_27422[(7)] = inst_27401__$1);
return statearr_27422;
})();if(cljs.core.truth_(inst_27402))
{var statearr_27423_27442 = state_27418__$1;(statearr_27423_27442[(1)] = (5));
} else
{var statearr_27424_27443 = state_27418__$1;(statearr_27424_27443[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27419 === (6)))
{var inst_27401 = (state_27418[(7)]);var state_27418__$1 = state_27418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27418__$1,(11),to,inst_27401);
} else
{if((state_val_27419 === (3)))
{var inst_27416 = (state_27418[(2)]);var state_27418__$1 = state_27418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27418__$1,inst_27416);
} else
{if((state_val_27419 === (2)))
{var state_27418__$1 = state_27418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27418__$1,(4),from);
} else
{if((state_val_27419 === (11)))
{var inst_27411 = (state_27418[(2)]);var state_27418__$1 = (function (){var statearr_27425 = state_27418;(statearr_27425[(8)] = inst_27411);
return statearr_27425;
})();var statearr_27426_27444 = state_27418__$1;(statearr_27426_27444[(2)] = null);
(statearr_27426_27444[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27419 === (9)))
{var state_27418__$1 = state_27418;var statearr_27427_27445 = state_27418__$1;(statearr_27427_27445[(2)] = null);
(statearr_27427_27445[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27419 === (5)))
{var state_27418__$1 = state_27418;if(cljs.core.truth_(close_QMARK_))
{var statearr_27428_27446 = state_27418__$1;(statearr_27428_27446[(1)] = (8));
} else
{var statearr_27429_27447 = state_27418__$1;(statearr_27429_27447[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27419 === (10)))
{var inst_27408 = (state_27418[(2)]);var state_27418__$1 = state_27418;var statearr_27430_27448 = state_27418__$1;(statearr_27430_27448[(2)] = inst_27408);
(statearr_27430_27448[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27419 === (8)))
{var inst_27405 = cljs.core.async.close_BANG_.call(null,to);var state_27418__$1 = state_27418;var statearr_27431_27449 = state_27418__$1;(statearr_27431_27449[(2)] = inst_27405);
(statearr_27431_27449[(1)] = (10));
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
});})(c__5693__auto___27439))
;return ((function (switch__5678__auto__,c__5693__auto___27439){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27435 = [null,null,null,null,null,null,null,null,null];(statearr_27435[(0)] = state_machine__5679__auto__);
(statearr_27435[(1)] = (1));
return statearr_27435;
});
var state_machine__5679__auto____1 = (function (state_27418){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27418);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27436){if((e27436 instanceof Object))
{var ex__5682__auto__ = e27436;var statearr_27437_27450 = state_27418;(statearr_27437_27450[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27451 = state_27418;
state_27418 = G__27451;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27418){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27439))
})();var state__5695__auto__ = (function (){var statearr_27438 = f__5694__auto__.call(null);(statearr_27438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27439);
return statearr_27438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27439))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___27538 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27538,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27538,tc,fc){
return (function (state_27516){var state_val_27517 = (state_27516[(1)]);if((state_val_27517 === (7)))
{var inst_27512 = (state_27516[(2)]);var state_27516__$1 = state_27516;var statearr_27518_27539 = state_27516__$1;(statearr_27518_27539[(2)] = inst_27512);
(statearr_27518_27539[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27517 === (1)))
{var state_27516__$1 = state_27516;var statearr_27519_27540 = state_27516__$1;(statearr_27519_27540[(2)] = null);
(statearr_27519_27540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27517 === (4)))
{var inst_27497 = (state_27516[(7)]);var inst_27497__$1 = (state_27516[(2)]);var inst_27498 = (inst_27497__$1 == null);var state_27516__$1 = (function (){var statearr_27520 = state_27516;(statearr_27520[(7)] = inst_27497__$1);
return statearr_27520;
})();if(cljs.core.truth_(inst_27498))
{var statearr_27521_27541 = state_27516__$1;(statearr_27521_27541[(1)] = (5));
} else
{var statearr_27522_27542 = state_27516__$1;(statearr_27522_27542[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27517 === (6)))
{var inst_27497 = (state_27516[(7)]);var inst_27503 = p.call(null,inst_27497);var state_27516__$1 = state_27516;if(cljs.core.truth_(inst_27503))
{var statearr_27523_27543 = state_27516__$1;(statearr_27523_27543[(1)] = (9));
} else
{var statearr_27524_27544 = state_27516__$1;(statearr_27524_27544[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27517 === (3)))
{var inst_27514 = (state_27516[(2)]);var state_27516__$1 = state_27516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27516__$1,inst_27514);
} else
{if((state_val_27517 === (2)))
{var state_27516__$1 = state_27516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27516__$1,(4),ch);
} else
{if((state_val_27517 === (11)))
{var inst_27497 = (state_27516[(7)]);var inst_27507 = (state_27516[(2)]);var state_27516__$1 = state_27516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27516__$1,(8),inst_27507,inst_27497);
} else
{if((state_val_27517 === (9)))
{var state_27516__$1 = state_27516;var statearr_27525_27545 = state_27516__$1;(statearr_27525_27545[(2)] = tc);
(statearr_27525_27545[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27517 === (5)))
{var inst_27500 = cljs.core.async.close_BANG_.call(null,tc);var inst_27501 = cljs.core.async.close_BANG_.call(null,fc);var state_27516__$1 = (function (){var statearr_27526 = state_27516;(statearr_27526[(8)] = inst_27500);
return statearr_27526;
})();var statearr_27527_27546 = state_27516__$1;(statearr_27527_27546[(2)] = inst_27501);
(statearr_27527_27546[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27517 === (10)))
{var state_27516__$1 = state_27516;var statearr_27528_27547 = state_27516__$1;(statearr_27528_27547[(2)] = fc);
(statearr_27528_27547[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27517 === (8)))
{var inst_27509 = (state_27516[(2)]);var state_27516__$1 = (function (){var statearr_27529 = state_27516;(statearr_27529[(9)] = inst_27509);
return statearr_27529;
})();var statearr_27530_27548 = state_27516__$1;(statearr_27530_27548[(2)] = null);
(statearr_27530_27548[(1)] = (2));
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
});})(c__5693__auto___27538,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___27538,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27534 = [null,null,null,null,null,null,null,null,null,null];(statearr_27534[(0)] = state_machine__5679__auto__);
(statearr_27534[(1)] = (1));
return statearr_27534;
});
var state_machine__5679__auto____1 = (function (state_27516){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27516);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27535){if((e27535 instanceof Object))
{var ex__5682__auto__ = e27535;var statearr_27536_27549 = state_27516;(statearr_27536_27549[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27516);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27550 = state_27516;
state_27516 = G__27550;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27516){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27538,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_27537 = f__5694__auto__.call(null);(statearr_27537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27538);
return statearr_27537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27538,tc,fc))
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
return (function (state_27597){var state_val_27598 = (state_27597[(1)]);if((state_val_27598 === (7)))
{var inst_27593 = (state_27597[(2)]);var state_27597__$1 = state_27597;var statearr_27599_27615 = state_27597__$1;(statearr_27599_27615[(2)] = inst_27593);
(statearr_27599_27615[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27598 === (6)))
{var inst_27586 = (state_27597[(7)]);var inst_27583 = (state_27597[(8)]);var inst_27590 = f.call(null,inst_27583,inst_27586);var inst_27583__$1 = inst_27590;var state_27597__$1 = (function (){var statearr_27600 = state_27597;(statearr_27600[(8)] = inst_27583__$1);
return statearr_27600;
})();var statearr_27601_27616 = state_27597__$1;(statearr_27601_27616[(2)] = null);
(statearr_27601_27616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27598 === (5)))
{var inst_27583 = (state_27597[(8)]);var state_27597__$1 = state_27597;var statearr_27602_27617 = state_27597__$1;(statearr_27602_27617[(2)] = inst_27583);
(statearr_27602_27617[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27598 === (4)))
{var inst_27586 = (state_27597[(7)]);var inst_27586__$1 = (state_27597[(2)]);var inst_27587 = (inst_27586__$1 == null);var state_27597__$1 = (function (){var statearr_27603 = state_27597;(statearr_27603[(7)] = inst_27586__$1);
return statearr_27603;
})();if(cljs.core.truth_(inst_27587))
{var statearr_27604_27618 = state_27597__$1;(statearr_27604_27618[(1)] = (5));
} else
{var statearr_27605_27619 = state_27597__$1;(statearr_27605_27619[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27598 === (3)))
{var inst_27595 = (state_27597[(2)]);var state_27597__$1 = state_27597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27597__$1,inst_27595);
} else
{if((state_val_27598 === (2)))
{var state_27597__$1 = state_27597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27597__$1,(4),ch);
} else
{if((state_val_27598 === (1)))
{var inst_27583 = init;var state_27597__$1 = (function (){var statearr_27606 = state_27597;(statearr_27606[(8)] = inst_27583);
return statearr_27606;
})();var statearr_27607_27620 = state_27597__$1;(statearr_27607_27620[(2)] = null);
(statearr_27607_27620[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_27611 = [null,null,null,null,null,null,null,null,null];(statearr_27611[(0)] = state_machine__5679__auto__);
(statearr_27611[(1)] = (1));
return statearr_27611;
});
var state_machine__5679__auto____1 = (function (state_27597){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27597);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27612){if((e27612 instanceof Object))
{var ex__5682__auto__ = e27612;var statearr_27613_27621 = state_27597;(statearr_27613_27621[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27597);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27612;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27622 = state_27597;
state_27597 = G__27622;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27597){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_27614 = f__5694__auto__.call(null);(statearr_27614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_27614;
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
return (function (state_27684){var state_val_27685 = (state_27684[(1)]);if((state_val_27685 === (7)))
{var inst_27665 = (state_27684[(7)]);var inst_27670 = (state_27684[(2)]);var inst_27671 = cljs.core.next.call(null,inst_27665);var inst_27665__$1 = inst_27671;var state_27684__$1 = (function (){var statearr_27686 = state_27684;(statearr_27686[(7)] = inst_27665__$1);
(statearr_27686[(8)] = inst_27670);
return statearr_27686;
})();var statearr_27687_27705 = state_27684__$1;(statearr_27687_27705[(2)] = null);
(statearr_27687_27705[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27685 === (1)))
{var inst_27664 = cljs.core.seq.call(null,coll);var inst_27665 = inst_27664;var state_27684__$1 = (function (){var statearr_27688 = state_27684;(statearr_27688[(7)] = inst_27665);
return statearr_27688;
})();var statearr_27689_27706 = state_27684__$1;(statearr_27689_27706[(2)] = null);
(statearr_27689_27706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27685 === (4)))
{var inst_27665 = (state_27684[(7)]);var inst_27668 = cljs.core.first.call(null,inst_27665);var state_27684__$1 = state_27684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27684__$1,(7),ch,inst_27668);
} else
{if((state_val_27685 === (6)))
{var inst_27680 = (state_27684[(2)]);var state_27684__$1 = state_27684;var statearr_27690_27707 = state_27684__$1;(statearr_27690_27707[(2)] = inst_27680);
(statearr_27690_27707[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27685 === (3)))
{var inst_27682 = (state_27684[(2)]);var state_27684__$1 = state_27684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27684__$1,inst_27682);
} else
{if((state_val_27685 === (2)))
{var inst_27665 = (state_27684[(7)]);var state_27684__$1 = state_27684;if(cljs.core.truth_(inst_27665))
{var statearr_27691_27708 = state_27684__$1;(statearr_27691_27708[(1)] = (4));
} else
{var statearr_27692_27709 = state_27684__$1;(statearr_27692_27709[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27685 === (9)))
{var state_27684__$1 = state_27684;var statearr_27693_27710 = state_27684__$1;(statearr_27693_27710[(2)] = null);
(statearr_27693_27710[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27685 === (5)))
{var state_27684__$1 = state_27684;if(cljs.core.truth_(close_QMARK_))
{var statearr_27694_27711 = state_27684__$1;(statearr_27694_27711[(1)] = (8));
} else
{var statearr_27695_27712 = state_27684__$1;(statearr_27695_27712[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27685 === (10)))
{var inst_27678 = (state_27684[(2)]);var state_27684__$1 = state_27684;var statearr_27696_27713 = state_27684__$1;(statearr_27696_27713[(2)] = inst_27678);
(statearr_27696_27713[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27685 === (8)))
{var inst_27675 = cljs.core.async.close_BANG_.call(null,ch);var state_27684__$1 = state_27684;var statearr_27697_27714 = state_27684__$1;(statearr_27697_27714[(2)] = inst_27675);
(statearr_27697_27714[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_27701 = [null,null,null,null,null,null,null,null,null];(statearr_27701[(0)] = state_machine__5679__auto__);
(statearr_27701[(1)] = (1));
return statearr_27701;
});
var state_machine__5679__auto____1 = (function (state_27684){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27684);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27702){if((e27702 instanceof Object))
{var ex__5682__auto__ = e27702;var statearr_27703_27715 = state_27684;(statearr_27703_27715[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27684);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27702;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27716 = state_27684;
state_27684 = G__27716;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27684){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_27704 = f__5694__auto__.call(null);(statearr_27704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_27704;
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
cljs.core.async.Mux = (function (){var obj27718 = {};return obj27718;
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
cljs.core.async.Mult = (function (){var obj27720 = {};return obj27720;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t27944 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27944 = (function (cs,ch,mult,meta27945){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27945 = meta27945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27944.cljs$lang$type = true;
cljs.core.async.t27944.cljs$lang$ctorStr = "cljs.core.async/t27944";
cljs.core.async.t27944.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27944");
});})(cs))
;
cljs.core.async.t27944.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t27944.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t27944.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t27944.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t27944.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t27944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27946){var self__ = this;
var _27946__$1 = this;return self__.meta27945;
});})(cs))
;
cljs.core.async.t27944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27946,meta27945__$1){var self__ = this;
var _27946__$1 = this;return (new cljs.core.async.t27944(self__.cs,self__.ch,self__.mult,meta27945__$1));
});})(cs))
;
cljs.core.async.__GT_t27944 = ((function (cs){
return (function __GT_t27944(cs__$1,ch__$1,mult__$1,meta27945){return (new cljs.core.async.t27944(cs__$1,ch__$1,mult__$1,meta27945));
});})(cs))
;
}
return (new cljs.core.async.t27944(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___28167 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28167,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28167,cs,m,dchan,dctr,done){
return (function (state_28081){var state_val_28082 = (state_28081[(1)]);if((state_val_28082 === (7)))
{var inst_28077 = (state_28081[(2)]);var state_28081__$1 = state_28081;var statearr_28083_28168 = state_28081__$1;(statearr_28083_28168[(2)] = inst_28077);
(statearr_28083_28168[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (20)))
{var inst_27978 = (state_28081[(7)]);var inst_27988 = cljs.core.first.call(null,inst_27978);var inst_27989 = cljs.core.nth.call(null,inst_27988,(0),null);var inst_27990 = cljs.core.nth.call(null,inst_27988,(1),null);var state_28081__$1 = (function (){var statearr_28084 = state_28081;(statearr_28084[(8)] = inst_27989);
return statearr_28084;
})();if(cljs.core.truth_(inst_27990))
{var statearr_28085_28169 = state_28081__$1;(statearr_28085_28169[(1)] = (22));
} else
{var statearr_28086_28170 = state_28081__$1;(statearr_28086_28170[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (27)))
{var inst_28018 = (state_28081[(9)]);var inst_28020 = (state_28081[(10)]);var inst_28025 = cljs.core._nth.call(null,inst_28018,inst_28020);var state_28081__$1 = (function (){var statearr_28087 = state_28081;(statearr_28087[(11)] = inst_28025);
return statearr_28087;
})();var statearr_28088_28171 = state_28081__$1;(statearr_28088_28171[(2)] = null);
(statearr_28088_28171[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (1)))
{var state_28081__$1 = state_28081;var statearr_28089_28172 = state_28081__$1;(statearr_28089_28172[(2)] = null);
(statearr_28089_28172[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (24)))
{var inst_27978 = (state_28081[(7)]);var inst_27995 = (state_28081[(2)]);var inst_27996 = cljs.core.next.call(null,inst_27978);var inst_27958 = inst_27996;var inst_27959 = null;var inst_27960 = (0);var inst_27961 = (0);var state_28081__$1 = (function (){var statearr_28090 = state_28081;(statearr_28090[(12)] = inst_27995);
(statearr_28090[(13)] = inst_27961);
(statearr_28090[(14)] = inst_27958);
(statearr_28090[(15)] = inst_27959);
(statearr_28090[(16)] = inst_27960);
return statearr_28090;
})();var statearr_28091_28173 = state_28081__$1;(statearr_28091_28173[(2)] = null);
(statearr_28091_28173[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (39)))
{var inst_28038 = (state_28081[(17)]);var inst_28056 = (state_28081[(2)]);var inst_28057 = cljs.core.next.call(null,inst_28038);var inst_28017 = inst_28057;var inst_28018 = null;var inst_28019 = (0);var inst_28020 = (0);var state_28081__$1 = (function (){var statearr_28095 = state_28081;(statearr_28095[(9)] = inst_28018);
(statearr_28095[(18)] = inst_28019);
(statearr_28095[(19)] = inst_28017);
(statearr_28095[(10)] = inst_28020);
(statearr_28095[(20)] = inst_28056);
return statearr_28095;
})();var statearr_28096_28174 = state_28081__$1;(statearr_28096_28174[(2)] = null);
(statearr_28096_28174[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (4)))
{var inst_27949 = (state_28081[(21)]);var inst_27949__$1 = (state_28081[(2)]);var inst_27950 = (inst_27949__$1 == null);var state_28081__$1 = (function (){var statearr_28097 = state_28081;(statearr_28097[(21)] = inst_27949__$1);
return statearr_28097;
})();if(cljs.core.truth_(inst_27950))
{var statearr_28098_28175 = state_28081__$1;(statearr_28098_28175[(1)] = (5));
} else
{var statearr_28099_28176 = state_28081__$1;(statearr_28099_28176[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (15)))
{var inst_27961 = (state_28081[(13)]);var inst_27958 = (state_28081[(14)]);var inst_27959 = (state_28081[(15)]);var inst_27960 = (state_28081[(16)]);var inst_27974 = (state_28081[(2)]);var inst_27975 = (inst_27961 + (1));var tmp28092 = inst_27958;var tmp28093 = inst_27959;var tmp28094 = inst_27960;var inst_27958__$1 = tmp28092;var inst_27959__$1 = tmp28093;var inst_27960__$1 = tmp28094;var inst_27961__$1 = inst_27975;var state_28081__$1 = (function (){var statearr_28100 = state_28081;(statearr_28100[(22)] = inst_27974);
(statearr_28100[(13)] = inst_27961__$1);
(statearr_28100[(14)] = inst_27958__$1);
(statearr_28100[(15)] = inst_27959__$1);
(statearr_28100[(16)] = inst_27960__$1);
return statearr_28100;
})();var statearr_28101_28177 = state_28081__$1;(statearr_28101_28177[(2)] = null);
(statearr_28101_28177[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (21)))
{var inst_27999 = (state_28081[(2)]);var state_28081__$1 = state_28081;var statearr_28102_28178 = state_28081__$1;(statearr_28102_28178[(2)] = inst_27999);
(statearr_28102_28178[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (31)))
{var inst_28025 = (state_28081[(11)]);var inst_28026 = (state_28081[(2)]);var inst_28027 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28028 = cljs.core.async.untap_STAR_.call(null,m,inst_28025);var state_28081__$1 = (function (){var statearr_28103 = state_28081;(statearr_28103[(23)] = inst_28027);
(statearr_28103[(24)] = inst_28026);
return statearr_28103;
})();var statearr_28104_28179 = state_28081__$1;(statearr_28104_28179[(2)] = inst_28028);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28081__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (32)))
{var inst_27949 = (state_28081[(21)]);var inst_28025 = (state_28081[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28081,(31),Object,null,(30));var inst_28032 = cljs.core.async.put_BANG_.call(null,inst_28025,inst_27949,done);var state_28081__$1 = state_28081;var statearr_28105_28180 = state_28081__$1;(statearr_28105_28180[(2)] = inst_28032);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28081__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (40)))
{var inst_28047 = (state_28081[(25)]);var inst_28048 = (state_28081[(2)]);var inst_28049 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28050 = cljs.core.async.untap_STAR_.call(null,m,inst_28047);var state_28081__$1 = (function (){var statearr_28106 = state_28081;(statearr_28106[(26)] = inst_28048);
(statearr_28106[(27)] = inst_28049);
return statearr_28106;
})();var statearr_28107_28181 = state_28081__$1;(statearr_28107_28181[(2)] = inst_28050);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28081__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (33)))
{var inst_28038 = (state_28081[(17)]);var inst_28040 = cljs.core.chunked_seq_QMARK_.call(null,inst_28038);var state_28081__$1 = state_28081;if(inst_28040)
{var statearr_28108_28182 = state_28081__$1;(statearr_28108_28182[(1)] = (36));
} else
{var statearr_28109_28183 = state_28081__$1;(statearr_28109_28183[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (13)))
{var inst_27968 = (state_28081[(28)]);var inst_27971 = cljs.core.async.close_BANG_.call(null,inst_27968);var state_28081__$1 = state_28081;var statearr_28110_28184 = state_28081__$1;(statearr_28110_28184[(2)] = inst_27971);
(statearr_28110_28184[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (22)))
{var inst_27989 = (state_28081[(8)]);var inst_27992 = cljs.core.async.close_BANG_.call(null,inst_27989);var state_28081__$1 = state_28081;var statearr_28111_28185 = state_28081__$1;(statearr_28111_28185[(2)] = inst_27992);
(statearr_28111_28185[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (36)))
{var inst_28038 = (state_28081[(17)]);var inst_28042 = cljs.core.chunk_first.call(null,inst_28038);var inst_28043 = cljs.core.chunk_rest.call(null,inst_28038);var inst_28044 = cljs.core.count.call(null,inst_28042);var inst_28017 = inst_28043;var inst_28018 = inst_28042;var inst_28019 = inst_28044;var inst_28020 = (0);var state_28081__$1 = (function (){var statearr_28112 = state_28081;(statearr_28112[(9)] = inst_28018);
(statearr_28112[(18)] = inst_28019);
(statearr_28112[(19)] = inst_28017);
(statearr_28112[(10)] = inst_28020);
return statearr_28112;
})();var statearr_28113_28186 = state_28081__$1;(statearr_28113_28186[(2)] = null);
(statearr_28113_28186[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (41)))
{var inst_27949 = (state_28081[(21)]);var inst_28047 = (state_28081[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28081,(40),Object,null,(39));var inst_28054 = cljs.core.async.put_BANG_.call(null,inst_28047,inst_27949,done);var state_28081__$1 = state_28081;var statearr_28114_28187 = state_28081__$1;(statearr_28114_28187[(2)] = inst_28054);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28081__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (43)))
{var state_28081__$1 = state_28081;var statearr_28115_28188 = state_28081__$1;(statearr_28115_28188[(2)] = null);
(statearr_28115_28188[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (29)))
{var inst_28065 = (state_28081[(2)]);var state_28081__$1 = state_28081;var statearr_28116_28189 = state_28081__$1;(statearr_28116_28189[(2)] = inst_28065);
(statearr_28116_28189[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (44)))
{var inst_28074 = (state_28081[(2)]);var state_28081__$1 = (function (){var statearr_28117 = state_28081;(statearr_28117[(29)] = inst_28074);
return statearr_28117;
})();var statearr_28118_28190 = state_28081__$1;(statearr_28118_28190[(2)] = null);
(statearr_28118_28190[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (6)))
{var inst_28009 = (state_28081[(30)]);var inst_28008 = cljs.core.deref.call(null,cs);var inst_28009__$1 = cljs.core.keys.call(null,inst_28008);var inst_28010 = cljs.core.count.call(null,inst_28009__$1);var inst_28011 = cljs.core.reset_BANG_.call(null,dctr,inst_28010);var inst_28016 = cljs.core.seq.call(null,inst_28009__$1);var inst_28017 = inst_28016;var inst_28018 = null;var inst_28019 = (0);var inst_28020 = (0);var state_28081__$1 = (function (){var statearr_28119 = state_28081;(statearr_28119[(9)] = inst_28018);
(statearr_28119[(18)] = inst_28019);
(statearr_28119[(31)] = inst_28011);
(statearr_28119[(19)] = inst_28017);
(statearr_28119[(30)] = inst_28009__$1);
(statearr_28119[(10)] = inst_28020);
return statearr_28119;
})();var statearr_28120_28191 = state_28081__$1;(statearr_28120_28191[(2)] = null);
(statearr_28120_28191[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (28)))
{var inst_28038 = (state_28081[(17)]);var inst_28017 = (state_28081[(19)]);var inst_28038__$1 = cljs.core.seq.call(null,inst_28017);var state_28081__$1 = (function (){var statearr_28121 = state_28081;(statearr_28121[(17)] = inst_28038__$1);
return statearr_28121;
})();if(inst_28038__$1)
{var statearr_28122_28192 = state_28081__$1;(statearr_28122_28192[(1)] = (33));
} else
{var statearr_28123_28193 = state_28081__$1;(statearr_28123_28193[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (25)))
{var inst_28019 = (state_28081[(18)]);var inst_28020 = (state_28081[(10)]);var inst_28022 = (inst_28020 < inst_28019);var inst_28023 = inst_28022;var state_28081__$1 = state_28081;if(cljs.core.truth_(inst_28023))
{var statearr_28124_28194 = state_28081__$1;(statearr_28124_28194[(1)] = (27));
} else
{var statearr_28125_28195 = state_28081__$1;(statearr_28125_28195[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (34)))
{var state_28081__$1 = state_28081;var statearr_28126_28196 = state_28081__$1;(statearr_28126_28196[(2)] = null);
(statearr_28126_28196[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (17)))
{var state_28081__$1 = state_28081;var statearr_28127_28197 = state_28081__$1;(statearr_28127_28197[(2)] = null);
(statearr_28127_28197[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (3)))
{var inst_28079 = (state_28081[(2)]);var state_28081__$1 = state_28081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28081__$1,inst_28079);
} else
{if((state_val_28082 === (12)))
{var inst_28004 = (state_28081[(2)]);var state_28081__$1 = state_28081;var statearr_28128_28198 = state_28081__$1;(statearr_28128_28198[(2)] = inst_28004);
(statearr_28128_28198[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (2)))
{var state_28081__$1 = state_28081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28081__$1,(4),ch);
} else
{if((state_val_28082 === (23)))
{var state_28081__$1 = state_28081;var statearr_28129_28199 = state_28081__$1;(statearr_28129_28199[(2)] = null);
(statearr_28129_28199[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (35)))
{var inst_28063 = (state_28081[(2)]);var state_28081__$1 = state_28081;var statearr_28130_28200 = state_28081__$1;(statearr_28130_28200[(2)] = inst_28063);
(statearr_28130_28200[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (19)))
{var inst_27978 = (state_28081[(7)]);var inst_27982 = cljs.core.chunk_first.call(null,inst_27978);var inst_27983 = cljs.core.chunk_rest.call(null,inst_27978);var inst_27984 = cljs.core.count.call(null,inst_27982);var inst_27958 = inst_27983;var inst_27959 = inst_27982;var inst_27960 = inst_27984;var inst_27961 = (0);var state_28081__$1 = (function (){var statearr_28131 = state_28081;(statearr_28131[(13)] = inst_27961);
(statearr_28131[(14)] = inst_27958);
(statearr_28131[(15)] = inst_27959);
(statearr_28131[(16)] = inst_27960);
return statearr_28131;
})();var statearr_28132_28201 = state_28081__$1;(statearr_28132_28201[(2)] = null);
(statearr_28132_28201[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (11)))
{var inst_27978 = (state_28081[(7)]);var inst_27958 = (state_28081[(14)]);var inst_27978__$1 = cljs.core.seq.call(null,inst_27958);var state_28081__$1 = (function (){var statearr_28133 = state_28081;(statearr_28133[(7)] = inst_27978__$1);
return statearr_28133;
})();if(inst_27978__$1)
{var statearr_28134_28202 = state_28081__$1;(statearr_28134_28202[(1)] = (16));
} else
{var statearr_28135_28203 = state_28081__$1;(statearr_28135_28203[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (9)))
{var inst_28006 = (state_28081[(2)]);var state_28081__$1 = state_28081;var statearr_28136_28204 = state_28081__$1;(statearr_28136_28204[(2)] = inst_28006);
(statearr_28136_28204[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (5)))
{var inst_27956 = cljs.core.deref.call(null,cs);var inst_27957 = cljs.core.seq.call(null,inst_27956);var inst_27958 = inst_27957;var inst_27959 = null;var inst_27960 = (0);var inst_27961 = (0);var state_28081__$1 = (function (){var statearr_28137 = state_28081;(statearr_28137[(13)] = inst_27961);
(statearr_28137[(14)] = inst_27958);
(statearr_28137[(15)] = inst_27959);
(statearr_28137[(16)] = inst_27960);
return statearr_28137;
})();var statearr_28138_28205 = state_28081__$1;(statearr_28138_28205[(2)] = null);
(statearr_28138_28205[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (14)))
{var state_28081__$1 = state_28081;var statearr_28139_28206 = state_28081__$1;(statearr_28139_28206[(2)] = null);
(statearr_28139_28206[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (45)))
{var inst_28071 = (state_28081[(2)]);var state_28081__$1 = state_28081;var statearr_28140_28207 = state_28081__$1;(statearr_28140_28207[(2)] = inst_28071);
(statearr_28140_28207[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (26)))
{var inst_28009 = (state_28081[(30)]);var inst_28067 = (state_28081[(2)]);var inst_28068 = cljs.core.seq.call(null,inst_28009);var state_28081__$1 = (function (){var statearr_28141 = state_28081;(statearr_28141[(32)] = inst_28067);
return statearr_28141;
})();if(inst_28068)
{var statearr_28142_28208 = state_28081__$1;(statearr_28142_28208[(1)] = (42));
} else
{var statearr_28143_28209 = state_28081__$1;(statearr_28143_28209[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (16)))
{var inst_27978 = (state_28081[(7)]);var inst_27980 = cljs.core.chunked_seq_QMARK_.call(null,inst_27978);var state_28081__$1 = state_28081;if(inst_27980)
{var statearr_28147_28210 = state_28081__$1;(statearr_28147_28210[(1)] = (19));
} else
{var statearr_28148_28211 = state_28081__$1;(statearr_28148_28211[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (38)))
{var inst_28060 = (state_28081[(2)]);var state_28081__$1 = state_28081;var statearr_28149_28212 = state_28081__$1;(statearr_28149_28212[(2)] = inst_28060);
(statearr_28149_28212[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (30)))
{var inst_28018 = (state_28081[(9)]);var inst_28019 = (state_28081[(18)]);var inst_28017 = (state_28081[(19)]);var inst_28020 = (state_28081[(10)]);var inst_28034 = (state_28081[(2)]);var inst_28035 = (inst_28020 + (1));var tmp28144 = inst_28018;var tmp28145 = inst_28019;var tmp28146 = inst_28017;var inst_28017__$1 = tmp28146;var inst_28018__$1 = tmp28144;var inst_28019__$1 = tmp28145;var inst_28020__$1 = inst_28035;var state_28081__$1 = (function (){var statearr_28150 = state_28081;(statearr_28150[(9)] = inst_28018__$1);
(statearr_28150[(18)] = inst_28019__$1);
(statearr_28150[(19)] = inst_28017__$1);
(statearr_28150[(10)] = inst_28020__$1);
(statearr_28150[(33)] = inst_28034);
return statearr_28150;
})();var statearr_28151_28213 = state_28081__$1;(statearr_28151_28213[(2)] = null);
(statearr_28151_28213[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (10)))
{var inst_27961 = (state_28081[(13)]);var inst_27959 = (state_28081[(15)]);var inst_27967 = cljs.core._nth.call(null,inst_27959,inst_27961);var inst_27968 = cljs.core.nth.call(null,inst_27967,(0),null);var inst_27969 = cljs.core.nth.call(null,inst_27967,(1),null);var state_28081__$1 = (function (){var statearr_28152 = state_28081;(statearr_28152[(28)] = inst_27968);
return statearr_28152;
})();if(cljs.core.truth_(inst_27969))
{var statearr_28153_28214 = state_28081__$1;(statearr_28153_28214[(1)] = (13));
} else
{var statearr_28154_28215 = state_28081__$1;(statearr_28154_28215[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (18)))
{var inst_28002 = (state_28081[(2)]);var state_28081__$1 = state_28081;var statearr_28155_28216 = state_28081__$1;(statearr_28155_28216[(2)] = inst_28002);
(statearr_28155_28216[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (42)))
{var state_28081__$1 = state_28081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28081__$1,(45),dchan);
} else
{if((state_val_28082 === (37)))
{var inst_28038 = (state_28081[(17)]);var inst_28047 = cljs.core.first.call(null,inst_28038);var state_28081__$1 = (function (){var statearr_28156 = state_28081;(statearr_28156[(25)] = inst_28047);
return statearr_28156;
})();var statearr_28157_28217 = state_28081__$1;(statearr_28157_28217[(2)] = null);
(statearr_28157_28217[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28082 === (8)))
{var inst_27961 = (state_28081[(13)]);var inst_27960 = (state_28081[(16)]);var inst_27963 = (inst_27961 < inst_27960);var inst_27964 = inst_27963;var state_28081__$1 = state_28081;if(cljs.core.truth_(inst_27964))
{var statearr_28158_28218 = state_28081__$1;(statearr_28158_28218[(1)] = (10));
} else
{var statearr_28159_28219 = state_28081__$1;(statearr_28159_28219[(1)] = (11));
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
});})(c__5693__auto___28167,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___28167,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28163[(0)] = state_machine__5679__auto__);
(statearr_28163[(1)] = (1));
return statearr_28163;
});
var state_machine__5679__auto____1 = (function (state_28081){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28081);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28164){if((e28164 instanceof Object))
{var ex__5682__auto__ = e28164;var statearr_28165_28220 = state_28081;(statearr_28165_28220[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28221 = state_28081;
state_28081 = G__28221;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28081){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28167,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_28166 = f__5694__auto__.call(null);(statearr_28166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28167);
return statearr_28166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28167,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj28223 = {};return obj28223;
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
;var m = (function (){if(typeof cljs.core.async.t28333 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28333 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28334){
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
this.meta28334 = meta28334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28333.cljs$lang$type = true;
cljs.core.async.t28333.cljs$lang$ctorStr = "cljs.core.async/t28333";
cljs.core.async.t28333.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28333");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28333.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t28333.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28333.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28333.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28333.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28333.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28333.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28333.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28335){var self__ = this;
var _28335__$1 = this;return self__.meta28334;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28335,meta28334__$1){var self__ = this;
var _28335__$1 = this;return (new cljs.core.async.t28333(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28334__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t28333 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28333(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28334){return (new cljs.core.async.t28333(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28334));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t28333(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___28442 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28400){var state_val_28401 = (state_28400[(1)]);if((state_val_28401 === (7)))
{var inst_28349 = (state_28400[(7)]);var inst_28354 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28349);var state_28400__$1 = state_28400;var statearr_28402_28443 = state_28400__$1;(statearr_28402_28443[(2)] = inst_28354);
(statearr_28402_28443[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (20)))
{var inst_28364 = (state_28400[(8)]);var state_28400__$1 = state_28400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28400__$1,(23),out,inst_28364);
} else
{if((state_val_28401 === (1)))
{var inst_28339 = (state_28400[(9)]);var inst_28339__$1 = calc_state.call(null);var inst_28340 = cljs.core.seq_QMARK_.call(null,inst_28339__$1);var state_28400__$1 = (function (){var statearr_28403 = state_28400;(statearr_28403[(9)] = inst_28339__$1);
return statearr_28403;
})();if(inst_28340)
{var statearr_28404_28444 = state_28400__$1;(statearr_28404_28444[(1)] = (2));
} else
{var statearr_28405_28445 = state_28400__$1;(statearr_28405_28445[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (4)))
{var inst_28339 = (state_28400[(9)]);var inst_28345 = (state_28400[(2)]);var inst_28346 = cljs.core.get.call(null,inst_28345,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_28347 = cljs.core.get.call(null,inst_28345,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_28348 = cljs.core.get.call(null,inst_28345,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_28349 = inst_28339;var state_28400__$1 = (function (){var statearr_28406 = state_28400;(statearr_28406[(10)] = inst_28347);
(statearr_28406[(11)] = inst_28348);
(statearr_28406[(12)] = inst_28346);
(statearr_28406[(7)] = inst_28349);
return statearr_28406;
})();var statearr_28407_28446 = state_28400__$1;(statearr_28407_28446[(2)] = null);
(statearr_28407_28446[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (15)))
{var state_28400__$1 = state_28400;var statearr_28408_28447 = state_28400__$1;(statearr_28408_28447[(2)] = null);
(statearr_28408_28447[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (21)))
{var state_28400__$1 = state_28400;var statearr_28409_28448 = state_28400__$1;(statearr_28409_28448[(2)] = null);
(statearr_28409_28448[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (13)))
{var inst_28396 = (state_28400[(2)]);var state_28400__$1 = state_28400;var statearr_28410_28449 = state_28400__$1;(statearr_28410_28449[(2)] = inst_28396);
(statearr_28410_28449[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (22)))
{var inst_28357 = (state_28400[(13)]);var inst_28393 = (state_28400[(2)]);var inst_28349 = inst_28357;var state_28400__$1 = (function (){var statearr_28411 = state_28400;(statearr_28411[(7)] = inst_28349);
(statearr_28411[(14)] = inst_28393);
return statearr_28411;
})();var statearr_28412_28450 = state_28400__$1;(statearr_28412_28450[(2)] = null);
(statearr_28412_28450[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (6)))
{var inst_28398 = (state_28400[(2)]);var state_28400__$1 = state_28400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28400__$1,inst_28398);
} else
{if((state_val_28401 === (17)))
{var inst_28379 = (state_28400[(15)]);var state_28400__$1 = state_28400;var statearr_28413_28451 = state_28400__$1;(statearr_28413_28451[(2)] = inst_28379);
(statearr_28413_28451[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (3)))
{var inst_28339 = (state_28400[(9)]);var state_28400__$1 = state_28400;var statearr_28414_28452 = state_28400__$1;(statearr_28414_28452[(2)] = inst_28339);
(statearr_28414_28452[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (12)))
{var inst_28360 = (state_28400[(16)]);var inst_28365 = (state_28400[(17)]);var inst_28379 = (state_28400[(15)]);var inst_28379__$1 = inst_28360.call(null,inst_28365);var state_28400__$1 = (function (){var statearr_28415 = state_28400;(statearr_28415[(15)] = inst_28379__$1);
return statearr_28415;
})();if(cljs.core.truth_(inst_28379__$1))
{var statearr_28416_28453 = state_28400__$1;(statearr_28416_28453[(1)] = (17));
} else
{var statearr_28417_28454 = state_28400__$1;(statearr_28417_28454[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (2)))
{var inst_28339 = (state_28400[(9)]);var inst_28342 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28339);var state_28400__$1 = state_28400;var statearr_28418_28455 = state_28400__$1;(statearr_28418_28455[(2)] = inst_28342);
(statearr_28418_28455[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (23)))
{var inst_28390 = (state_28400[(2)]);var state_28400__$1 = state_28400;var statearr_28419_28456 = state_28400__$1;(statearr_28419_28456[(2)] = inst_28390);
(statearr_28419_28456[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (19)))
{var inst_28387 = (state_28400[(2)]);var state_28400__$1 = state_28400;if(cljs.core.truth_(inst_28387))
{var statearr_28420_28457 = state_28400__$1;(statearr_28420_28457[(1)] = (20));
} else
{var statearr_28421_28458 = state_28400__$1;(statearr_28421_28458[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (11)))
{var inst_28364 = (state_28400[(8)]);var inst_28370 = (inst_28364 == null);var state_28400__$1 = state_28400;if(cljs.core.truth_(inst_28370))
{var statearr_28422_28459 = state_28400__$1;(statearr_28422_28459[(1)] = (14));
} else
{var statearr_28423_28460 = state_28400__$1;(statearr_28423_28460[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (9)))
{var inst_28357 = (state_28400[(13)]);var inst_28357__$1 = (state_28400[(2)]);var inst_28358 = cljs.core.get.call(null,inst_28357__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_28359 = cljs.core.get.call(null,inst_28357__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_28360 = cljs.core.get.call(null,inst_28357__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_28400__$1 = (function (){var statearr_28424 = state_28400;(statearr_28424[(16)] = inst_28360);
(statearr_28424[(13)] = inst_28357__$1);
(statearr_28424[(18)] = inst_28359);
return statearr_28424;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28400__$1,(10),inst_28358);
} else
{if((state_val_28401 === (5)))
{var inst_28349 = (state_28400[(7)]);var inst_28352 = cljs.core.seq_QMARK_.call(null,inst_28349);var state_28400__$1 = state_28400;if(inst_28352)
{var statearr_28425_28461 = state_28400__$1;(statearr_28425_28461[(1)] = (7));
} else
{var statearr_28426_28462 = state_28400__$1;(statearr_28426_28462[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (14)))
{var inst_28365 = (state_28400[(17)]);var inst_28372 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28365);var state_28400__$1 = state_28400;var statearr_28427_28463 = state_28400__$1;(statearr_28427_28463[(2)] = inst_28372);
(statearr_28427_28463[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (16)))
{var inst_28375 = (state_28400[(2)]);var inst_28376 = calc_state.call(null);var inst_28349 = inst_28376;var state_28400__$1 = (function (){var statearr_28428 = state_28400;(statearr_28428[(19)] = inst_28375);
(statearr_28428[(7)] = inst_28349);
return statearr_28428;
})();var statearr_28429_28464 = state_28400__$1;(statearr_28429_28464[(2)] = null);
(statearr_28429_28464[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (10)))
{var inst_28365 = (state_28400[(17)]);var inst_28364 = (state_28400[(8)]);var inst_28363 = (state_28400[(2)]);var inst_28364__$1 = cljs.core.nth.call(null,inst_28363,(0),null);var inst_28365__$1 = cljs.core.nth.call(null,inst_28363,(1),null);var inst_28366 = (inst_28364__$1 == null);var inst_28367 = cljs.core._EQ_.call(null,inst_28365__$1,change);var inst_28368 = (inst_28366) || (inst_28367);var state_28400__$1 = (function (){var statearr_28430 = state_28400;(statearr_28430[(17)] = inst_28365__$1);
(statearr_28430[(8)] = inst_28364__$1);
return statearr_28430;
})();if(cljs.core.truth_(inst_28368))
{var statearr_28431_28465 = state_28400__$1;(statearr_28431_28465[(1)] = (11));
} else
{var statearr_28432_28466 = state_28400__$1;(statearr_28432_28466[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (18)))
{var inst_28360 = (state_28400[(16)]);var inst_28365 = (state_28400[(17)]);var inst_28359 = (state_28400[(18)]);var inst_28382 = cljs.core.empty_QMARK_.call(null,inst_28360);var inst_28383 = inst_28359.call(null,inst_28365);var inst_28384 = cljs.core.not.call(null,inst_28383);var inst_28385 = (inst_28382) && (inst_28384);var state_28400__$1 = state_28400;var statearr_28433_28467 = state_28400__$1;(statearr_28433_28467[(2)] = inst_28385);
(statearr_28433_28467[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (8)))
{var inst_28349 = (state_28400[(7)]);var state_28400__$1 = state_28400;var statearr_28434_28468 = state_28400__$1;(statearr_28434_28468[(2)] = inst_28349);
(statearr_28434_28468[(1)] = (9));
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
});})(c__5693__auto___28442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___28442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28438[(0)] = state_machine__5679__auto__);
(statearr_28438[(1)] = (1));
return statearr_28438;
});
var state_machine__5679__auto____1 = (function (state_28400){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28400);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28439){if((e28439 instanceof Object))
{var ex__5682__auto__ = e28439;var statearr_28440_28469 = state_28400;(statearr_28440_28469[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28400);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28470 = state_28400;
state_28400 = G__28470;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28400){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_28441 = f__5694__auto__.call(null);(statearr_28441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28442);
return statearr_28441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28442,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj28472 = {};return obj28472;
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
return (function (p1__28473_SHARP_){if(cljs.core.truth_(p1__28473_SHARP_.call(null,topic)))
{return p1__28473_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__28473_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t28598 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28598 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28599){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28599 = meta28599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28598.cljs$lang$type = true;
cljs.core.async.t28598.cljs$lang$ctorStr = "cljs.core.async/t28598";
cljs.core.async.t28598.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28598");
});})(mults,ensure_mult))
;
cljs.core.async.t28598.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t28598.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t28598.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t28598.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t28598.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t28598.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28598.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t28598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28600){var self__ = this;
var _28600__$1 = this;return self__.meta28599;
});})(mults,ensure_mult))
;
cljs.core.async.t28598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28600,meta28599__$1){var self__ = this;
var _28600__$1 = this;return (new cljs.core.async.t28598(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28599__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t28598 = ((function (mults,ensure_mult){
return (function __GT_t28598(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28599){return (new cljs.core.async.t28598(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28599));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t28598(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___28722 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28722,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28722,mults,ensure_mult,p){
return (function (state_28674){var state_val_28675 = (state_28674[(1)]);if((state_val_28675 === (7)))
{var inst_28670 = (state_28674[(2)]);var state_28674__$1 = state_28674;var statearr_28676_28723 = state_28674__$1;(statearr_28676_28723[(2)] = inst_28670);
(statearr_28676_28723[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (20)))
{var state_28674__$1 = state_28674;var statearr_28677_28724 = state_28674__$1;(statearr_28677_28724[(2)] = null);
(statearr_28677_28724[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (1)))
{var state_28674__$1 = state_28674;var statearr_28678_28725 = state_28674__$1;(statearr_28678_28725[(2)] = null);
(statearr_28678_28725[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (24)))
{var inst_28603 = (state_28674[(7)]);var inst_28653 = (state_28674[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28674,(23),Object,null,(22));var inst_28660 = cljs.core.async.muxch_STAR_.call(null,inst_28653);var state_28674__$1 = state_28674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28674__$1,(25),inst_28660,inst_28603);
} else
{if((state_val_28675 === (4)))
{var inst_28603 = (state_28674[(7)]);var inst_28603__$1 = (state_28674[(2)]);var inst_28604 = (inst_28603__$1 == null);var state_28674__$1 = (function (){var statearr_28679 = state_28674;(statearr_28679[(7)] = inst_28603__$1);
return statearr_28679;
})();if(cljs.core.truth_(inst_28604))
{var statearr_28680_28726 = state_28674__$1;(statearr_28680_28726[(1)] = (5));
} else
{var statearr_28681_28727 = state_28674__$1;(statearr_28681_28727[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (15)))
{var inst_28645 = (state_28674[(2)]);var state_28674__$1 = state_28674;var statearr_28682_28728 = state_28674__$1;(statearr_28682_28728[(2)] = inst_28645);
(statearr_28682_28728[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (21)))
{var inst_28667 = (state_28674[(2)]);var state_28674__$1 = (function (){var statearr_28683 = state_28674;(statearr_28683[(9)] = inst_28667);
return statearr_28683;
})();var statearr_28684_28729 = state_28674__$1;(statearr_28684_28729[(2)] = null);
(statearr_28684_28729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (13)))
{var inst_28627 = (state_28674[(10)]);var inst_28629 = cljs.core.chunked_seq_QMARK_.call(null,inst_28627);var state_28674__$1 = state_28674;if(inst_28629)
{var statearr_28685_28730 = state_28674__$1;(statearr_28685_28730[(1)] = (16));
} else
{var statearr_28686_28731 = state_28674__$1;(statearr_28686_28731[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (22)))
{var inst_28664 = (state_28674[(2)]);var state_28674__$1 = state_28674;var statearr_28687_28732 = state_28674__$1;(statearr_28687_28732[(2)] = inst_28664);
(statearr_28687_28732[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (6)))
{var inst_28603 = (state_28674[(7)]);var inst_28653 = (state_28674[(8)]);var inst_28651 = (state_28674[(11)]);var inst_28651__$1 = topic_fn.call(null,inst_28603);var inst_28652 = cljs.core.deref.call(null,mults);var inst_28653__$1 = cljs.core.get.call(null,inst_28652,inst_28651__$1);var state_28674__$1 = (function (){var statearr_28688 = state_28674;(statearr_28688[(8)] = inst_28653__$1);
(statearr_28688[(11)] = inst_28651__$1);
return statearr_28688;
})();if(cljs.core.truth_(inst_28653__$1))
{var statearr_28689_28733 = state_28674__$1;(statearr_28689_28733[(1)] = (19));
} else
{var statearr_28690_28734 = state_28674__$1;(statearr_28690_28734[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (25)))
{var inst_28662 = (state_28674[(2)]);var state_28674__$1 = state_28674;var statearr_28691_28735 = state_28674__$1;(statearr_28691_28735[(2)] = inst_28662);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28674__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (17)))
{var inst_28627 = (state_28674[(10)]);var inst_28636 = cljs.core.first.call(null,inst_28627);var inst_28637 = cljs.core.async.muxch_STAR_.call(null,inst_28636);var inst_28638 = cljs.core.async.close_BANG_.call(null,inst_28637);var inst_28639 = cljs.core.next.call(null,inst_28627);var inst_28613 = inst_28639;var inst_28614 = null;var inst_28615 = (0);var inst_28616 = (0);var state_28674__$1 = (function (){var statearr_28692 = state_28674;(statearr_28692[(12)] = inst_28638);
(statearr_28692[(13)] = inst_28614);
(statearr_28692[(14)] = inst_28616);
(statearr_28692[(15)] = inst_28613);
(statearr_28692[(16)] = inst_28615);
return statearr_28692;
})();var statearr_28693_28736 = state_28674__$1;(statearr_28693_28736[(2)] = null);
(statearr_28693_28736[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (3)))
{var inst_28672 = (state_28674[(2)]);var state_28674__$1 = state_28674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28674__$1,inst_28672);
} else
{if((state_val_28675 === (12)))
{var inst_28647 = (state_28674[(2)]);var state_28674__$1 = state_28674;var statearr_28694_28737 = state_28674__$1;(statearr_28694_28737[(2)] = inst_28647);
(statearr_28694_28737[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (2)))
{var state_28674__$1 = state_28674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28674__$1,(4),ch);
} else
{if((state_val_28675 === (23)))
{var inst_28651 = (state_28674[(11)]);var inst_28655 = (state_28674[(2)]);var inst_28656 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28651);var state_28674__$1 = (function (){var statearr_28695 = state_28674;(statearr_28695[(17)] = inst_28655);
return statearr_28695;
})();var statearr_28696_28738 = state_28674__$1;(statearr_28696_28738[(2)] = inst_28656);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28674__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (19)))
{var state_28674__$1 = state_28674;var statearr_28697_28739 = state_28674__$1;(statearr_28697_28739[(2)] = null);
(statearr_28697_28739[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (11)))
{var inst_28613 = (state_28674[(15)]);var inst_28627 = (state_28674[(10)]);var inst_28627__$1 = cljs.core.seq.call(null,inst_28613);var state_28674__$1 = (function (){var statearr_28698 = state_28674;(statearr_28698[(10)] = inst_28627__$1);
return statearr_28698;
})();if(inst_28627__$1)
{var statearr_28699_28740 = state_28674__$1;(statearr_28699_28740[(1)] = (13));
} else
{var statearr_28700_28741 = state_28674__$1;(statearr_28700_28741[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (9)))
{var inst_28649 = (state_28674[(2)]);var state_28674__$1 = state_28674;var statearr_28701_28742 = state_28674__$1;(statearr_28701_28742[(2)] = inst_28649);
(statearr_28701_28742[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (5)))
{var inst_28610 = cljs.core.deref.call(null,mults);var inst_28611 = cljs.core.vals.call(null,inst_28610);var inst_28612 = cljs.core.seq.call(null,inst_28611);var inst_28613 = inst_28612;var inst_28614 = null;var inst_28615 = (0);var inst_28616 = (0);var state_28674__$1 = (function (){var statearr_28702 = state_28674;(statearr_28702[(13)] = inst_28614);
(statearr_28702[(14)] = inst_28616);
(statearr_28702[(15)] = inst_28613);
(statearr_28702[(16)] = inst_28615);
return statearr_28702;
})();var statearr_28703_28743 = state_28674__$1;(statearr_28703_28743[(2)] = null);
(statearr_28703_28743[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (14)))
{var state_28674__$1 = state_28674;var statearr_28707_28744 = state_28674__$1;(statearr_28707_28744[(2)] = null);
(statearr_28707_28744[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (16)))
{var inst_28627 = (state_28674[(10)]);var inst_28631 = cljs.core.chunk_first.call(null,inst_28627);var inst_28632 = cljs.core.chunk_rest.call(null,inst_28627);var inst_28633 = cljs.core.count.call(null,inst_28631);var inst_28613 = inst_28632;var inst_28614 = inst_28631;var inst_28615 = inst_28633;var inst_28616 = (0);var state_28674__$1 = (function (){var statearr_28708 = state_28674;(statearr_28708[(13)] = inst_28614);
(statearr_28708[(14)] = inst_28616);
(statearr_28708[(15)] = inst_28613);
(statearr_28708[(16)] = inst_28615);
return statearr_28708;
})();var statearr_28709_28745 = state_28674__$1;(statearr_28709_28745[(2)] = null);
(statearr_28709_28745[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (10)))
{var inst_28614 = (state_28674[(13)]);var inst_28616 = (state_28674[(14)]);var inst_28613 = (state_28674[(15)]);var inst_28615 = (state_28674[(16)]);var inst_28621 = cljs.core._nth.call(null,inst_28614,inst_28616);var inst_28622 = cljs.core.async.muxch_STAR_.call(null,inst_28621);var inst_28623 = cljs.core.async.close_BANG_.call(null,inst_28622);var inst_28624 = (inst_28616 + (1));var tmp28704 = inst_28614;var tmp28705 = inst_28613;var tmp28706 = inst_28615;var inst_28613__$1 = tmp28705;var inst_28614__$1 = tmp28704;var inst_28615__$1 = tmp28706;var inst_28616__$1 = inst_28624;var state_28674__$1 = (function (){var statearr_28710 = state_28674;(statearr_28710[(13)] = inst_28614__$1);
(statearr_28710[(14)] = inst_28616__$1);
(statearr_28710[(15)] = inst_28613__$1);
(statearr_28710[(16)] = inst_28615__$1);
(statearr_28710[(18)] = inst_28623);
return statearr_28710;
})();var statearr_28711_28746 = state_28674__$1;(statearr_28711_28746[(2)] = null);
(statearr_28711_28746[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (18)))
{var inst_28642 = (state_28674[(2)]);var state_28674__$1 = state_28674;var statearr_28712_28747 = state_28674__$1;(statearr_28712_28747[(2)] = inst_28642);
(statearr_28712_28747[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28675 === (8)))
{var inst_28616 = (state_28674[(14)]);var inst_28615 = (state_28674[(16)]);var inst_28618 = (inst_28616 < inst_28615);var inst_28619 = inst_28618;var state_28674__$1 = state_28674;if(cljs.core.truth_(inst_28619))
{var statearr_28713_28748 = state_28674__$1;(statearr_28713_28748[(1)] = (10));
} else
{var statearr_28714_28749 = state_28674__$1;(statearr_28714_28749[(1)] = (11));
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
});})(c__5693__auto___28722,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___28722,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28718[(0)] = state_machine__5679__auto__);
(statearr_28718[(1)] = (1));
return statearr_28718;
});
var state_machine__5679__auto____1 = (function (state_28674){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28674);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28719){if((e28719 instanceof Object))
{var ex__5682__auto__ = e28719;var statearr_28720_28750 = state_28674;(statearr_28720_28750[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28751 = state_28674;
state_28674 = G__28751;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28674){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28722,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_28721 = f__5694__auto__.call(null);(statearr_28721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28722);
return statearr_28721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28722,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___28888 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28888,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28888,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28858){var state_val_28859 = (state_28858[(1)]);if((state_val_28859 === (7)))
{var state_28858__$1 = state_28858;var statearr_28860_28889 = state_28858__$1;(statearr_28860_28889[(2)] = null);
(statearr_28860_28889[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (1)))
{var state_28858__$1 = state_28858;var statearr_28861_28890 = state_28858__$1;(statearr_28861_28890[(2)] = null);
(statearr_28861_28890[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (4)))
{var inst_28822 = (state_28858[(7)]);var inst_28824 = (inst_28822 < cnt);var state_28858__$1 = state_28858;if(cljs.core.truth_(inst_28824))
{var statearr_28862_28891 = state_28858__$1;(statearr_28862_28891[(1)] = (6));
} else
{var statearr_28863_28892 = state_28858__$1;(statearr_28863_28892[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (15)))
{var inst_28854 = (state_28858[(2)]);var state_28858__$1 = state_28858;var statearr_28864_28893 = state_28858__$1;(statearr_28864_28893[(2)] = inst_28854);
(statearr_28864_28893[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (13)))
{var inst_28847 = cljs.core.async.close_BANG_.call(null,out);var state_28858__$1 = state_28858;var statearr_28865_28894 = state_28858__$1;(statearr_28865_28894[(2)] = inst_28847);
(statearr_28865_28894[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (6)))
{var state_28858__$1 = state_28858;var statearr_28866_28895 = state_28858__$1;(statearr_28866_28895[(2)] = null);
(statearr_28866_28895[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (3)))
{var inst_28856 = (state_28858[(2)]);var state_28858__$1 = state_28858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28858__$1,inst_28856);
} else
{if((state_val_28859 === (12)))
{var inst_28844 = (state_28858[(8)]);var inst_28844__$1 = (state_28858[(2)]);var inst_28845 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28844__$1);var state_28858__$1 = (function (){var statearr_28867 = state_28858;(statearr_28867[(8)] = inst_28844__$1);
return statearr_28867;
})();if(cljs.core.truth_(inst_28845))
{var statearr_28868_28896 = state_28858__$1;(statearr_28868_28896[(1)] = (13));
} else
{var statearr_28869_28897 = state_28858__$1;(statearr_28869_28897[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (2)))
{var inst_28821 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_28822 = (0);var state_28858__$1 = (function (){var statearr_28870 = state_28858;(statearr_28870[(7)] = inst_28822);
(statearr_28870[(9)] = inst_28821);
return statearr_28870;
})();var statearr_28871_28898 = state_28858__$1;(statearr_28871_28898[(2)] = null);
(statearr_28871_28898[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (11)))
{var inst_28822 = (state_28858[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28858,(10),Object,null,(9));var inst_28831 = chs__$1.call(null,inst_28822);var inst_28832 = done.call(null,inst_28822);var inst_28833 = cljs.core.async.take_BANG_.call(null,inst_28831,inst_28832);var state_28858__$1 = state_28858;var statearr_28872_28899 = state_28858__$1;(statearr_28872_28899[(2)] = inst_28833);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28858__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (9)))
{var inst_28822 = (state_28858[(7)]);var inst_28835 = (state_28858[(2)]);var inst_28836 = (inst_28822 + (1));var inst_28822__$1 = inst_28836;var state_28858__$1 = (function (){var statearr_28873 = state_28858;(statearr_28873[(7)] = inst_28822__$1);
(statearr_28873[(10)] = inst_28835);
return statearr_28873;
})();var statearr_28874_28900 = state_28858__$1;(statearr_28874_28900[(2)] = null);
(statearr_28874_28900[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (5)))
{var inst_28842 = (state_28858[(2)]);var state_28858__$1 = (function (){var statearr_28875 = state_28858;(statearr_28875[(11)] = inst_28842);
return statearr_28875;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28858__$1,(12),dchan);
} else
{if((state_val_28859 === (14)))
{var inst_28844 = (state_28858[(8)]);var inst_28849 = cljs.core.apply.call(null,f,inst_28844);var state_28858__$1 = state_28858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28858__$1,(16),out,inst_28849);
} else
{if((state_val_28859 === (16)))
{var inst_28851 = (state_28858[(2)]);var state_28858__$1 = (function (){var statearr_28876 = state_28858;(statearr_28876[(12)] = inst_28851);
return statearr_28876;
})();var statearr_28877_28901 = state_28858__$1;(statearr_28877_28901[(2)] = null);
(statearr_28877_28901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (10)))
{var inst_28826 = (state_28858[(2)]);var inst_28827 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_28858__$1 = (function (){var statearr_28878 = state_28858;(statearr_28878[(13)] = inst_28826);
return statearr_28878;
})();var statearr_28879_28902 = state_28858__$1;(statearr_28879_28902[(2)] = inst_28827);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28858__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28859 === (8)))
{var inst_28840 = (state_28858[(2)]);var state_28858__$1 = state_28858;var statearr_28880_28903 = state_28858__$1;(statearr_28880_28903[(2)] = inst_28840);
(statearr_28880_28903[(1)] = (5));
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
});})(c__5693__auto___28888,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___28888,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28884[(0)] = state_machine__5679__auto__);
(statearr_28884[(1)] = (1));
return statearr_28884;
});
var state_machine__5679__auto____1 = (function (state_28858){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28858);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28885){if((e28885 instanceof Object))
{var ex__5682__auto__ = e28885;var statearr_28886_28904 = state_28858;(statearr_28886_28904[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28858);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28885;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28905 = state_28858;
state_28858 = G__28905;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28858){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28888,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_28887 = f__5694__auto__.call(null);(statearr_28887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28888);
return statearr_28887;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28888,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29013 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29013,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29013,out){
return (function (state_28989){var state_val_28990 = (state_28989[(1)]);if((state_val_28990 === (7)))
{var inst_28968 = (state_28989[(7)]);var inst_28969 = (state_28989[(8)]);var inst_28968__$1 = (state_28989[(2)]);var inst_28969__$1 = cljs.core.nth.call(null,inst_28968__$1,(0),null);var inst_28970 = cljs.core.nth.call(null,inst_28968__$1,(1),null);var inst_28971 = (inst_28969__$1 == null);var state_28989__$1 = (function (){var statearr_28991 = state_28989;(statearr_28991[(9)] = inst_28970);
(statearr_28991[(7)] = inst_28968__$1);
(statearr_28991[(8)] = inst_28969__$1);
return statearr_28991;
})();if(cljs.core.truth_(inst_28971))
{var statearr_28992_29014 = state_28989__$1;(statearr_28992_29014[(1)] = (8));
} else
{var statearr_28993_29015 = state_28989__$1;(statearr_28993_29015[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28990 === (1)))
{var inst_28960 = cljs.core.vec.call(null,chs);var inst_28961 = inst_28960;var state_28989__$1 = (function (){var statearr_28994 = state_28989;(statearr_28994[(10)] = inst_28961);
return statearr_28994;
})();var statearr_28995_29016 = state_28989__$1;(statearr_28995_29016[(2)] = null);
(statearr_28995_29016[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28990 === (4)))
{var inst_28961 = (state_28989[(10)]);var state_28989__$1 = state_28989;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28989__$1,(7),inst_28961);
} else
{if((state_val_28990 === (6)))
{var inst_28985 = (state_28989[(2)]);var state_28989__$1 = state_28989;var statearr_28996_29017 = state_28989__$1;(statearr_28996_29017[(2)] = inst_28985);
(statearr_28996_29017[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28990 === (3)))
{var inst_28987 = (state_28989[(2)]);var state_28989__$1 = state_28989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28989__$1,inst_28987);
} else
{if((state_val_28990 === (2)))
{var inst_28961 = (state_28989[(10)]);var inst_28963 = cljs.core.count.call(null,inst_28961);var inst_28964 = (inst_28963 > (0));var state_28989__$1 = state_28989;if(cljs.core.truth_(inst_28964))
{var statearr_28998_29018 = state_28989__$1;(statearr_28998_29018[(1)] = (4));
} else
{var statearr_28999_29019 = state_28989__$1;(statearr_28999_29019[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28990 === (11)))
{var inst_28961 = (state_28989[(10)]);var inst_28978 = (state_28989[(2)]);var tmp28997 = inst_28961;var inst_28961__$1 = tmp28997;var state_28989__$1 = (function (){var statearr_29000 = state_28989;(statearr_29000[(11)] = inst_28978);
(statearr_29000[(10)] = inst_28961__$1);
return statearr_29000;
})();var statearr_29001_29020 = state_28989__$1;(statearr_29001_29020[(2)] = null);
(statearr_29001_29020[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28990 === (9)))
{var inst_28969 = (state_28989[(8)]);var state_28989__$1 = state_28989;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28989__$1,(11),out,inst_28969);
} else
{if((state_val_28990 === (5)))
{var inst_28983 = cljs.core.async.close_BANG_.call(null,out);var state_28989__$1 = state_28989;var statearr_29002_29021 = state_28989__$1;(statearr_29002_29021[(2)] = inst_28983);
(statearr_29002_29021[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28990 === (10)))
{var inst_28981 = (state_28989[(2)]);var state_28989__$1 = state_28989;var statearr_29003_29022 = state_28989__$1;(statearr_29003_29022[(2)] = inst_28981);
(statearr_29003_29022[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28990 === (8)))
{var inst_28970 = (state_28989[(9)]);var inst_28968 = (state_28989[(7)]);var inst_28969 = (state_28989[(8)]);var inst_28961 = (state_28989[(10)]);var inst_28973 = (function (){var c = inst_28970;var v = inst_28969;var vec__28966 = inst_28968;var cs = inst_28961;return ((function (c,v,vec__28966,cs,inst_28970,inst_28968,inst_28969,inst_28961,state_val_28990,c__5693__auto___29013,out){
return (function (p1__28906_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__28906_SHARP_);
});
;})(c,v,vec__28966,cs,inst_28970,inst_28968,inst_28969,inst_28961,state_val_28990,c__5693__auto___29013,out))
})();var inst_28974 = cljs.core.filterv.call(null,inst_28973,inst_28961);var inst_28961__$1 = inst_28974;var state_28989__$1 = (function (){var statearr_29004 = state_28989;(statearr_29004[(10)] = inst_28961__$1);
return statearr_29004;
})();var statearr_29005_29023 = state_28989__$1;(statearr_29005_29023[(2)] = null);
(statearr_29005_29023[(1)] = (2));
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
});})(c__5693__auto___29013,out))
;return ((function (switch__5678__auto__,c__5693__auto___29013,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29009 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29009[(0)] = state_machine__5679__auto__);
(statearr_29009[(1)] = (1));
return statearr_29009;
});
var state_machine__5679__auto____1 = (function (state_28989){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28989);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29010){if((e29010 instanceof Object))
{var ex__5682__auto__ = e29010;var statearr_29011_29024 = state_28989;(statearr_29011_29024[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28989);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29025 = state_28989;
state_28989 = G__29025;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28989){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29013,out))
})();var state__5695__auto__ = (function (){var statearr_29012 = f__5694__auto__.call(null);(statearr_29012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29013);
return statearr_29012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29013,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29118 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29118,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29118,out){
return (function (state_29095){var state_val_29096 = (state_29095[(1)]);if((state_val_29096 === (7)))
{var inst_29077 = (state_29095[(7)]);var inst_29077__$1 = (state_29095[(2)]);var inst_29078 = (inst_29077__$1 == null);var inst_29079 = cljs.core.not.call(null,inst_29078);var state_29095__$1 = (function (){var statearr_29097 = state_29095;(statearr_29097[(7)] = inst_29077__$1);
return statearr_29097;
})();if(inst_29079)
{var statearr_29098_29119 = state_29095__$1;(statearr_29098_29119[(1)] = (8));
} else
{var statearr_29099_29120 = state_29095__$1;(statearr_29099_29120[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29096 === (1)))
{var inst_29072 = (0);var state_29095__$1 = (function (){var statearr_29100 = state_29095;(statearr_29100[(8)] = inst_29072);
return statearr_29100;
})();var statearr_29101_29121 = state_29095__$1;(statearr_29101_29121[(2)] = null);
(statearr_29101_29121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29096 === (4)))
{var state_29095__$1 = state_29095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29095__$1,(7),ch);
} else
{if((state_val_29096 === (6)))
{var inst_29090 = (state_29095[(2)]);var state_29095__$1 = state_29095;var statearr_29102_29122 = state_29095__$1;(statearr_29102_29122[(2)] = inst_29090);
(statearr_29102_29122[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29096 === (3)))
{var inst_29092 = (state_29095[(2)]);var inst_29093 = cljs.core.async.close_BANG_.call(null,out);var state_29095__$1 = (function (){var statearr_29103 = state_29095;(statearr_29103[(9)] = inst_29092);
return statearr_29103;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29095__$1,inst_29093);
} else
{if((state_val_29096 === (2)))
{var inst_29072 = (state_29095[(8)]);var inst_29074 = (inst_29072 < n);var state_29095__$1 = state_29095;if(cljs.core.truth_(inst_29074))
{var statearr_29104_29123 = state_29095__$1;(statearr_29104_29123[(1)] = (4));
} else
{var statearr_29105_29124 = state_29095__$1;(statearr_29105_29124[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29096 === (11)))
{var inst_29072 = (state_29095[(8)]);var inst_29082 = (state_29095[(2)]);var inst_29083 = (inst_29072 + (1));var inst_29072__$1 = inst_29083;var state_29095__$1 = (function (){var statearr_29106 = state_29095;(statearr_29106[(10)] = inst_29082);
(statearr_29106[(8)] = inst_29072__$1);
return statearr_29106;
})();var statearr_29107_29125 = state_29095__$1;(statearr_29107_29125[(2)] = null);
(statearr_29107_29125[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29096 === (9)))
{var state_29095__$1 = state_29095;var statearr_29108_29126 = state_29095__$1;(statearr_29108_29126[(2)] = null);
(statearr_29108_29126[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29096 === (5)))
{var state_29095__$1 = state_29095;var statearr_29109_29127 = state_29095__$1;(statearr_29109_29127[(2)] = null);
(statearr_29109_29127[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29096 === (10)))
{var inst_29087 = (state_29095[(2)]);var state_29095__$1 = state_29095;var statearr_29110_29128 = state_29095__$1;(statearr_29110_29128[(2)] = inst_29087);
(statearr_29110_29128[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29096 === (8)))
{var inst_29077 = (state_29095[(7)]);var state_29095__$1 = state_29095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29095__$1,(11),out,inst_29077);
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
});})(c__5693__auto___29118,out))
;return ((function (switch__5678__auto__,c__5693__auto___29118,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29114 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29114[(0)] = state_machine__5679__auto__);
(statearr_29114[(1)] = (1));
return statearr_29114;
});
var state_machine__5679__auto____1 = (function (state_29095){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29095);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29115){if((e29115 instanceof Object))
{var ex__5682__auto__ = e29115;var statearr_29116_29129 = state_29095;(statearr_29116_29129[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29130 = state_29095;
state_29095 = G__29130;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29095){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29118,out))
})();var state__5695__auto__ = (function (){var statearr_29117 = f__5694__auto__.call(null);(statearr_29117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29118);
return statearr_29117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29118,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29227 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29227,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29227,out){
return (function (state_29202){var state_val_29203 = (state_29202[(1)]);if((state_val_29203 === (7)))
{var inst_29197 = (state_29202[(2)]);var state_29202__$1 = state_29202;var statearr_29204_29228 = state_29202__$1;(statearr_29204_29228[(2)] = inst_29197);
(statearr_29204_29228[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (1)))
{var inst_29179 = null;var state_29202__$1 = (function (){var statearr_29205 = state_29202;(statearr_29205[(7)] = inst_29179);
return statearr_29205;
})();var statearr_29206_29229 = state_29202__$1;(statearr_29206_29229[(2)] = null);
(statearr_29206_29229[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (4)))
{var inst_29182 = (state_29202[(8)]);var inst_29182__$1 = (state_29202[(2)]);var inst_29183 = (inst_29182__$1 == null);var inst_29184 = cljs.core.not.call(null,inst_29183);var state_29202__$1 = (function (){var statearr_29207 = state_29202;(statearr_29207[(8)] = inst_29182__$1);
return statearr_29207;
})();if(inst_29184)
{var statearr_29208_29230 = state_29202__$1;(statearr_29208_29230[(1)] = (5));
} else
{var statearr_29209_29231 = state_29202__$1;(statearr_29209_29231[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (6)))
{var state_29202__$1 = state_29202;var statearr_29210_29232 = state_29202__$1;(statearr_29210_29232[(2)] = null);
(statearr_29210_29232[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (3)))
{var inst_29199 = (state_29202[(2)]);var inst_29200 = cljs.core.async.close_BANG_.call(null,out);var state_29202__$1 = (function (){var statearr_29211 = state_29202;(statearr_29211[(9)] = inst_29199);
return statearr_29211;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29202__$1,inst_29200);
} else
{if((state_val_29203 === (2)))
{var state_29202__$1 = state_29202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29202__$1,(4),ch);
} else
{if((state_val_29203 === (11)))
{var inst_29182 = (state_29202[(8)]);var inst_29191 = (state_29202[(2)]);var inst_29179 = inst_29182;var state_29202__$1 = (function (){var statearr_29212 = state_29202;(statearr_29212[(10)] = inst_29191);
(statearr_29212[(7)] = inst_29179);
return statearr_29212;
})();var statearr_29213_29233 = state_29202__$1;(statearr_29213_29233[(2)] = null);
(statearr_29213_29233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (9)))
{var inst_29182 = (state_29202[(8)]);var state_29202__$1 = state_29202;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29202__$1,(11),out,inst_29182);
} else
{if((state_val_29203 === (5)))
{var inst_29182 = (state_29202[(8)]);var inst_29179 = (state_29202[(7)]);var inst_29186 = cljs.core._EQ_.call(null,inst_29182,inst_29179);var state_29202__$1 = state_29202;if(inst_29186)
{var statearr_29215_29234 = state_29202__$1;(statearr_29215_29234[(1)] = (8));
} else
{var statearr_29216_29235 = state_29202__$1;(statearr_29216_29235[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (10)))
{var inst_29194 = (state_29202[(2)]);var state_29202__$1 = state_29202;var statearr_29217_29236 = state_29202__$1;(statearr_29217_29236[(2)] = inst_29194);
(statearr_29217_29236[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (8)))
{var inst_29179 = (state_29202[(7)]);var tmp29214 = inst_29179;var inst_29179__$1 = tmp29214;var state_29202__$1 = (function (){var statearr_29218 = state_29202;(statearr_29218[(7)] = inst_29179__$1);
return statearr_29218;
})();var statearr_29219_29237 = state_29202__$1;(statearr_29219_29237[(2)] = null);
(statearr_29219_29237[(1)] = (2));
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
});})(c__5693__auto___29227,out))
;return ((function (switch__5678__auto__,c__5693__auto___29227,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29223 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29223[(0)] = state_machine__5679__auto__);
(statearr_29223[(1)] = (1));
return statearr_29223;
});
var state_machine__5679__auto____1 = (function (state_29202){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29202);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29224){if((e29224 instanceof Object))
{var ex__5682__auto__ = e29224;var statearr_29225_29238 = state_29202;(statearr_29225_29238[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29202);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29239 = state_29202;
state_29202 = G__29239;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29202){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29227,out))
})();var state__5695__auto__ = (function (){var statearr_29226 = f__5694__auto__.call(null);(statearr_29226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29227);
return statearr_29226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29227,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29374 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29374,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29374,out){
return (function (state_29344){var state_val_29345 = (state_29344[(1)]);if((state_val_29345 === (7)))
{var inst_29340 = (state_29344[(2)]);var state_29344__$1 = state_29344;var statearr_29346_29375 = state_29344__$1;(statearr_29346_29375[(2)] = inst_29340);
(statearr_29346_29375[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29345 === (1)))
{var inst_29307 = (new Array(n));var inst_29308 = inst_29307;var inst_29309 = (0);var state_29344__$1 = (function (){var statearr_29347 = state_29344;(statearr_29347[(7)] = inst_29308);
(statearr_29347[(8)] = inst_29309);
return statearr_29347;
})();var statearr_29348_29376 = state_29344__$1;(statearr_29348_29376[(2)] = null);
(statearr_29348_29376[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29345 === (4)))
{var inst_29312 = (state_29344[(9)]);var inst_29312__$1 = (state_29344[(2)]);var inst_29313 = (inst_29312__$1 == null);var inst_29314 = cljs.core.not.call(null,inst_29313);var state_29344__$1 = (function (){var statearr_29349 = state_29344;(statearr_29349[(9)] = inst_29312__$1);
return statearr_29349;
})();if(inst_29314)
{var statearr_29350_29377 = state_29344__$1;(statearr_29350_29377[(1)] = (5));
} else
{var statearr_29351_29378 = state_29344__$1;(statearr_29351_29378[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29345 === (15)))
{var inst_29334 = (state_29344[(2)]);var state_29344__$1 = state_29344;var statearr_29352_29379 = state_29344__$1;(statearr_29352_29379[(2)] = inst_29334);
(statearr_29352_29379[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29345 === (13)))
{var state_29344__$1 = state_29344;var statearr_29353_29380 = state_29344__$1;(statearr_29353_29380[(2)] = null);
(statearr_29353_29380[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29345 === (6)))
{var inst_29309 = (state_29344[(8)]);var inst_29330 = (inst_29309 > (0));var state_29344__$1 = state_29344;if(cljs.core.truth_(inst_29330))
{var statearr_29354_29381 = state_29344__$1;(statearr_29354_29381[(1)] = (12));
} else
{var statearr_29355_29382 = state_29344__$1;(statearr_29355_29382[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29345 === (3)))
{var inst_29342 = (state_29344[(2)]);var state_29344__$1 = state_29344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29344__$1,inst_29342);
} else
{if((state_val_29345 === (12)))
{var inst_29308 = (state_29344[(7)]);var inst_29332 = cljs.core.vec.call(null,inst_29308);var state_29344__$1 = state_29344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29344__$1,(15),out,inst_29332);
} else
{if((state_val_29345 === (2)))
{var state_29344__$1 = state_29344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29344__$1,(4),ch);
} else
{if((state_val_29345 === (11)))
{var inst_29324 = (state_29344[(2)]);var inst_29325 = (new Array(n));var inst_29308 = inst_29325;var inst_29309 = (0);var state_29344__$1 = (function (){var statearr_29356 = state_29344;(statearr_29356[(10)] = inst_29324);
(statearr_29356[(7)] = inst_29308);
(statearr_29356[(8)] = inst_29309);
return statearr_29356;
})();var statearr_29357_29383 = state_29344__$1;(statearr_29357_29383[(2)] = null);
(statearr_29357_29383[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29345 === (9)))
{var inst_29308 = (state_29344[(7)]);var inst_29322 = cljs.core.vec.call(null,inst_29308);var state_29344__$1 = state_29344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29344__$1,(11),out,inst_29322);
} else
{if((state_val_29345 === (5)))
{var inst_29308 = (state_29344[(7)]);var inst_29309 = (state_29344[(8)]);var inst_29317 = (state_29344[(11)]);var inst_29312 = (state_29344[(9)]);var inst_29316 = (inst_29308[inst_29309] = inst_29312);var inst_29317__$1 = (inst_29309 + (1));var inst_29318 = (inst_29317__$1 < n);var state_29344__$1 = (function (){var statearr_29358 = state_29344;(statearr_29358[(12)] = inst_29316);
(statearr_29358[(11)] = inst_29317__$1);
return statearr_29358;
})();if(cljs.core.truth_(inst_29318))
{var statearr_29359_29384 = state_29344__$1;(statearr_29359_29384[(1)] = (8));
} else
{var statearr_29360_29385 = state_29344__$1;(statearr_29360_29385[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29345 === (14)))
{var inst_29337 = (state_29344[(2)]);var inst_29338 = cljs.core.async.close_BANG_.call(null,out);var state_29344__$1 = (function (){var statearr_29362 = state_29344;(statearr_29362[(13)] = inst_29337);
return statearr_29362;
})();var statearr_29363_29386 = state_29344__$1;(statearr_29363_29386[(2)] = inst_29338);
(statearr_29363_29386[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29345 === (10)))
{var inst_29328 = (state_29344[(2)]);var state_29344__$1 = state_29344;var statearr_29364_29387 = state_29344__$1;(statearr_29364_29387[(2)] = inst_29328);
(statearr_29364_29387[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29345 === (8)))
{var inst_29308 = (state_29344[(7)]);var inst_29317 = (state_29344[(11)]);var tmp29361 = inst_29308;var inst_29308__$1 = tmp29361;var inst_29309 = inst_29317;var state_29344__$1 = (function (){var statearr_29365 = state_29344;(statearr_29365[(7)] = inst_29308__$1);
(statearr_29365[(8)] = inst_29309);
return statearr_29365;
})();var statearr_29366_29388 = state_29344__$1;(statearr_29366_29388[(2)] = null);
(statearr_29366_29388[(1)] = (2));
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
});})(c__5693__auto___29374,out))
;return ((function (switch__5678__auto__,c__5693__auto___29374,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29370[(0)] = state_machine__5679__auto__);
(statearr_29370[(1)] = (1));
return statearr_29370;
});
var state_machine__5679__auto____1 = (function (state_29344){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29344);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29371){if((e29371 instanceof Object))
{var ex__5682__auto__ = e29371;var statearr_29372_29389 = state_29344;(statearr_29372_29389[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29344);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29390 = state_29344;
state_29344 = G__29390;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29344){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29374,out))
})();var state__5695__auto__ = (function (){var statearr_29373 = f__5694__auto__.call(null);(statearr_29373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29374);
return statearr_29373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29374,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29533 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29533,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29533,out){
return (function (state_29503){var state_val_29504 = (state_29503[(1)]);if((state_val_29504 === (7)))
{var inst_29499 = (state_29503[(2)]);var state_29503__$1 = state_29503;var statearr_29505_29534 = state_29503__$1;(statearr_29505_29534[(2)] = inst_29499);
(statearr_29505_29534[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29504 === (1)))
{var inst_29462 = [];var inst_29463 = inst_29462;var inst_29464 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_29503__$1 = (function (){var statearr_29506 = state_29503;(statearr_29506[(7)] = inst_29463);
(statearr_29506[(8)] = inst_29464);
return statearr_29506;
})();var statearr_29507_29535 = state_29503__$1;(statearr_29507_29535[(2)] = null);
(statearr_29507_29535[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29504 === (4)))
{var inst_29467 = (state_29503[(9)]);var inst_29467__$1 = (state_29503[(2)]);var inst_29468 = (inst_29467__$1 == null);var inst_29469 = cljs.core.not.call(null,inst_29468);var state_29503__$1 = (function (){var statearr_29508 = state_29503;(statearr_29508[(9)] = inst_29467__$1);
return statearr_29508;
})();if(inst_29469)
{var statearr_29509_29536 = state_29503__$1;(statearr_29509_29536[(1)] = (5));
} else
{var statearr_29510_29537 = state_29503__$1;(statearr_29510_29537[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29504 === (15)))
{var inst_29493 = (state_29503[(2)]);var state_29503__$1 = state_29503;var statearr_29511_29538 = state_29503__$1;(statearr_29511_29538[(2)] = inst_29493);
(statearr_29511_29538[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29504 === (13)))
{var state_29503__$1 = state_29503;var statearr_29512_29539 = state_29503__$1;(statearr_29512_29539[(2)] = null);
(statearr_29512_29539[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29504 === (6)))
{var inst_29463 = (state_29503[(7)]);var inst_29488 = inst_29463.length;var inst_29489 = (inst_29488 > (0));var state_29503__$1 = state_29503;if(cljs.core.truth_(inst_29489))
{var statearr_29513_29540 = state_29503__$1;(statearr_29513_29540[(1)] = (12));
} else
{var statearr_29514_29541 = state_29503__$1;(statearr_29514_29541[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29504 === (3)))
{var inst_29501 = (state_29503[(2)]);var state_29503__$1 = state_29503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29503__$1,inst_29501);
} else
{if((state_val_29504 === (12)))
{var inst_29463 = (state_29503[(7)]);var inst_29491 = cljs.core.vec.call(null,inst_29463);var state_29503__$1 = state_29503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29503__$1,(15),out,inst_29491);
} else
{if((state_val_29504 === (2)))
{var state_29503__$1 = state_29503;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29503__$1,(4),ch);
} else
{if((state_val_29504 === (11)))
{var inst_29467 = (state_29503[(9)]);var inst_29471 = (state_29503[(10)]);var inst_29481 = (state_29503[(2)]);var inst_29482 = [];var inst_29483 = inst_29482.push(inst_29467);var inst_29463 = inst_29482;var inst_29464 = inst_29471;var state_29503__$1 = (function (){var statearr_29515 = state_29503;(statearr_29515[(7)] = inst_29463);
(statearr_29515[(8)] = inst_29464);
(statearr_29515[(11)] = inst_29483);
(statearr_29515[(12)] = inst_29481);
return statearr_29515;
})();var statearr_29516_29542 = state_29503__$1;(statearr_29516_29542[(2)] = null);
(statearr_29516_29542[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29504 === (9)))
{var inst_29463 = (state_29503[(7)]);var inst_29479 = cljs.core.vec.call(null,inst_29463);var state_29503__$1 = state_29503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29503__$1,(11),out,inst_29479);
} else
{if((state_val_29504 === (5)))
{var inst_29467 = (state_29503[(9)]);var inst_29464 = (state_29503[(8)]);var inst_29471 = (state_29503[(10)]);var inst_29471__$1 = f.call(null,inst_29467);var inst_29472 = cljs.core._EQ_.call(null,inst_29471__$1,inst_29464);var inst_29473 = cljs.core.keyword_identical_QMARK_.call(null,inst_29464,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_29474 = (inst_29472) || (inst_29473);var state_29503__$1 = (function (){var statearr_29517 = state_29503;(statearr_29517[(10)] = inst_29471__$1);
return statearr_29517;
})();if(cljs.core.truth_(inst_29474))
{var statearr_29518_29543 = state_29503__$1;(statearr_29518_29543[(1)] = (8));
} else
{var statearr_29519_29544 = state_29503__$1;(statearr_29519_29544[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29504 === (14)))
{var inst_29496 = (state_29503[(2)]);var inst_29497 = cljs.core.async.close_BANG_.call(null,out);var state_29503__$1 = (function (){var statearr_29521 = state_29503;(statearr_29521[(13)] = inst_29496);
return statearr_29521;
})();var statearr_29522_29545 = state_29503__$1;(statearr_29522_29545[(2)] = inst_29497);
(statearr_29522_29545[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29504 === (10)))
{var inst_29486 = (state_29503[(2)]);var state_29503__$1 = state_29503;var statearr_29523_29546 = state_29503__$1;(statearr_29523_29546[(2)] = inst_29486);
(statearr_29523_29546[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29504 === (8)))
{var inst_29467 = (state_29503[(9)]);var inst_29463 = (state_29503[(7)]);var inst_29471 = (state_29503[(10)]);var inst_29476 = inst_29463.push(inst_29467);var tmp29520 = inst_29463;var inst_29463__$1 = tmp29520;var inst_29464 = inst_29471;var state_29503__$1 = (function (){var statearr_29524 = state_29503;(statearr_29524[(14)] = inst_29476);
(statearr_29524[(7)] = inst_29463__$1);
(statearr_29524[(8)] = inst_29464);
return statearr_29524;
})();var statearr_29525_29547 = state_29503__$1;(statearr_29525_29547[(2)] = null);
(statearr_29525_29547[(1)] = (2));
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
});})(c__5693__auto___29533,out))
;return ((function (switch__5678__auto__,c__5693__auto___29533,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29529[(0)] = state_machine__5679__auto__);
(statearr_29529[(1)] = (1));
return statearr_29529;
});
var state_machine__5679__auto____1 = (function (state_29503){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29503);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29530){if((e29530 instanceof Object))
{var ex__5682__auto__ = e29530;var statearr_29531_29548 = state_29503;(statearr_29531_29548[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29503);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29549 = state_29503;
state_29503 = G__29549;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29503){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29533,out))
})();var state__5695__auto__ = (function (){var statearr_29532 = f__5694__auto__.call(null);(statearr_29532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29533);
return statearr_29532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29533,out))
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
