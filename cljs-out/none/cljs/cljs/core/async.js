// Compiled by ClojureScript 0.0-2322
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15592 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15592 = (function (f,fn_handler,meta15593){
this.f = f;
this.fn_handler = fn_handler;
this.meta15593 = meta15593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15592.cljs$lang$type = true;
cljs.core.async.t15592.cljs$lang$ctorStr = "cljs.core.async/t15592";
cljs.core.async.t15592.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15592");
});
cljs.core.async.t15592.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15594){var self__ = this;
var _15594__$1 = this;return self__.meta15593;
});
cljs.core.async.t15592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15594,meta15593__$1){var self__ = this;
var _15594__$1 = this;return (new cljs.core.async.t15592(self__.f,self__.fn_handler,meta15593__$1));
});
cljs.core.async.__GT_t15592 = (function __GT_t15592(f__$1,fn_handler__$1,meta15593){return (new cljs.core.async.t15592(f__$1,fn_handler__$1,meta15593));
});
}
return (new cljs.core.async.t15592(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15596 = buff;if(G__15596)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__15596.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15596.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15596);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15596);
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
{var val_15597 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15597);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15597,ret){
return (function (){return fn1.call(null,val_15597);
});})(val_15597,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3546__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___15598 = n;var x_15599 = (0);while(true){
if((x_15599 < n__4414__auto___15598))
{(a[x_15599] = (0));
{
var G__15600 = (x_15599 + (1));
x_15599 = G__15600;
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
var G__15601 = (i + (1));
i = G__15601;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15605 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15605 = (function (flag,alt_flag,meta15606){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15606 = meta15606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15605.cljs$lang$type = true;
cljs.core.async.t15605.cljs$lang$ctorStr = "cljs.core.async/t15605";
cljs.core.async.t15605.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15605");
});})(flag))
;
cljs.core.async.t15605.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15607){var self__ = this;
var _15607__$1 = this;return self__.meta15606;
});})(flag))
;
cljs.core.async.t15605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15607,meta15606__$1){var self__ = this;
var _15607__$1 = this;return (new cljs.core.async.t15605(self__.flag,self__.alt_flag,meta15606__$1));
});})(flag))
;
cljs.core.async.__GT_t15605 = ((function (flag){
return (function __GT_t15605(flag__$1,alt_flag__$1,meta15606){return (new cljs.core.async.t15605(flag__$1,alt_flag__$1,meta15606));
});})(flag))
;
}
return (new cljs.core.async.t15605(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15611 = (function (cb,flag,alt_handler,meta15612){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15612 = meta15612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15611.cljs$lang$type = true;
cljs.core.async.t15611.cljs$lang$ctorStr = "cljs.core.async/t15611";
cljs.core.async.t15611.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15611");
});
cljs.core.async.t15611.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15613){var self__ = this;
var _15613__$1 = this;return self__.meta15612;
});
cljs.core.async.t15611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15613,meta15612__$1){var self__ = this;
var _15613__$1 = this;return (new cljs.core.async.t15611(self__.cb,self__.flag,self__.alt_handler,meta15612__$1));
});
cljs.core.async.__GT_t15611 = (function __GT_t15611(cb__$1,flag__$1,alt_handler__$1,meta15612){return (new cljs.core.async.t15611(cb__$1,flag__$1,alt_handler__$1,meta15612));
});
}
return (new cljs.core.async.t15611(cb,flag,alt_handler,null));
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
return (function (p1__15614_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15614_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15615 = (i + (1));
i = G__15615;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3558__auto__ = ret;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3546__auto__;
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
var alts_BANG___delegate = function (ports,p__15616){var map__15618 = p__15616;var map__15618__$1 = ((cljs.core.seq_QMARK_.call(null,map__15618))?cljs.core.apply.call(null,cljs.core.hash_map,map__15618):map__15618);var opts = map__15618__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__15616 = null;if (arguments.length > 1) {
  p__15616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15616);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15619){
var ports = cljs.core.first(arglist__15619);
var p__15616 = cljs.core.rest(arglist__15619);
return alts_BANG___delegate(ports,p__15616);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15627 = (function (ch,f,map_LT_,meta15628){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15628 = meta15628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15627.cljs$lang$type = true;
cljs.core.async.t15627.cljs$lang$ctorStr = "cljs.core.async/t15627";
cljs.core.async.t15627.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15627");
});
cljs.core.async.t15627.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15627.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15630 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15630 = (function (fn1,_,meta15628,ch,f,map_LT_,meta15631){
this.fn1 = fn1;
this._ = _;
this.meta15628 = meta15628;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15631 = meta15631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15630.cljs$lang$type = true;
cljs.core.async.t15630.cljs$lang$ctorStr = "cljs.core.async/t15630";
cljs.core.async.t15630.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15630");
});})(___$1))
;
cljs.core.async.t15630.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15630.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15620_SHARP_){return f1.call(null,(((p1__15620_SHARP_ == null))?null:self__.f.call(null,p1__15620_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15632){var self__ = this;
var _15632__$1 = this;return self__.meta15631;
});})(___$1))
;
cljs.core.async.t15630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15632,meta15631__$1){var self__ = this;
var _15632__$1 = this;return (new cljs.core.async.t15630(self__.fn1,self__._,self__.meta15628,self__.ch,self__.f,self__.map_LT_,meta15631__$1));
});})(___$1))
;
cljs.core.async.__GT_t15630 = ((function (___$1){
return (function __GT_t15630(fn1__$1,___$2,meta15628__$1,ch__$2,f__$2,map_LT___$2,meta15631){return (new cljs.core.async.t15630(fn1__$1,___$2,meta15628__$1,ch__$2,f__$2,map_LT___$2,meta15631));
});})(___$1))
;
}
return (new cljs.core.async.t15630(fn1,___$1,self__.meta15628,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15627.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15629){var self__ = this;
var _15629__$1 = this;return self__.meta15628;
});
cljs.core.async.t15627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15629,meta15628__$1){var self__ = this;
var _15629__$1 = this;return (new cljs.core.async.t15627(self__.ch,self__.f,self__.map_LT_,meta15628__$1));
});
cljs.core.async.__GT_t15627 = (function __GT_t15627(ch__$1,f__$1,map_LT___$1,meta15628){return (new cljs.core.async.t15627(ch__$1,f__$1,map_LT___$1,meta15628));
});
}
return (new cljs.core.async.t15627(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15636 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15636 = (function (ch,f,map_GT_,meta15637){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15637 = meta15637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15636.cljs$lang$type = true;
cljs.core.async.t15636.cljs$lang$ctorStr = "cljs.core.async/t15636";
cljs.core.async.t15636.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15636");
});
cljs.core.async.t15636.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15636.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15636.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15638){var self__ = this;
var _15638__$1 = this;return self__.meta15637;
});
cljs.core.async.t15636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15638,meta15637__$1){var self__ = this;
var _15638__$1 = this;return (new cljs.core.async.t15636(self__.ch,self__.f,self__.map_GT_,meta15637__$1));
});
cljs.core.async.__GT_t15636 = (function __GT_t15636(ch__$1,f__$1,map_GT___$1,meta15637){return (new cljs.core.async.t15636(ch__$1,f__$1,map_GT___$1,meta15637));
});
}
return (new cljs.core.async.t15636(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15642 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15642 = (function (ch,p,filter_GT_,meta15643){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15643 = meta15643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15642.cljs$lang$type = true;
cljs.core.async.t15642.cljs$lang$ctorStr = "cljs.core.async/t15642";
cljs.core.async.t15642.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15642");
});
cljs.core.async.t15642.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15642.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15642.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15644){var self__ = this;
var _15644__$1 = this;return self__.meta15643;
});
cljs.core.async.t15642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15644,meta15643__$1){var self__ = this;
var _15644__$1 = this;return (new cljs.core.async.t15642(self__.ch,self__.p,self__.filter_GT_,meta15643__$1));
});
cljs.core.async.__GT_t15642 = (function __GT_t15642(ch__$1,p__$1,filter_GT___$1,meta15643){return (new cljs.core.async.t15642(ch__$1,p__$1,filter_GT___$1,meta15643));
});
}
return (new cljs.core.async.t15642(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___15727 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___15727,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___15727,out){
return (function (state_15706){var state_val_15707 = (state_15706[(1)]);if((state_val_15707 === (7)))
{var inst_15702 = (state_15706[(2)]);var state_15706__$1 = state_15706;var statearr_15708_15728 = state_15706__$1;(statearr_15708_15728[(2)] = inst_15702);
(statearr_15708_15728[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15707 === (1)))
{var state_15706__$1 = state_15706;var statearr_15709_15729 = state_15706__$1;(statearr_15709_15729[(2)] = null);
(statearr_15709_15729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15707 === (4)))
{var inst_15688 = (state_15706[(7)]);var inst_15688__$1 = (state_15706[(2)]);var inst_15689 = (inst_15688__$1 == null);var state_15706__$1 = (function (){var statearr_15710 = state_15706;(statearr_15710[(7)] = inst_15688__$1);
return statearr_15710;
})();if(cljs.core.truth_(inst_15689))
{var statearr_15711_15730 = state_15706__$1;(statearr_15711_15730[(1)] = (5));
} else
{var statearr_15712_15731 = state_15706__$1;(statearr_15712_15731[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15707 === (6)))
{var inst_15688 = (state_15706[(7)]);var inst_15693 = p.call(null,inst_15688);var state_15706__$1 = state_15706;if(cljs.core.truth_(inst_15693))
{var statearr_15713_15732 = state_15706__$1;(statearr_15713_15732[(1)] = (8));
} else
{var statearr_15714_15733 = state_15706__$1;(statearr_15714_15733[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15707 === (3)))
{var inst_15704 = (state_15706[(2)]);var state_15706__$1 = state_15706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15706__$1,inst_15704);
} else
{if((state_val_15707 === (2)))
{var state_15706__$1 = state_15706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15706__$1,(4),ch);
} else
{if((state_val_15707 === (11)))
{var inst_15696 = (state_15706[(2)]);var state_15706__$1 = state_15706;var statearr_15715_15734 = state_15706__$1;(statearr_15715_15734[(2)] = inst_15696);
(statearr_15715_15734[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15707 === (9)))
{var state_15706__$1 = state_15706;var statearr_15716_15735 = state_15706__$1;(statearr_15716_15735[(2)] = null);
(statearr_15716_15735[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15707 === (5)))
{var inst_15691 = cljs.core.async.close_BANG_.call(null,out);var state_15706__$1 = state_15706;var statearr_15717_15736 = state_15706__$1;(statearr_15717_15736[(2)] = inst_15691);
(statearr_15717_15736[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15707 === (10)))
{var inst_15699 = (state_15706[(2)]);var state_15706__$1 = (function (){var statearr_15718 = state_15706;(statearr_15718[(8)] = inst_15699);
return statearr_15718;
})();var statearr_15719_15737 = state_15706__$1;(statearr_15719_15737[(2)] = null);
(statearr_15719_15737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15707 === (8)))
{var inst_15688 = (state_15706[(7)]);var state_15706__$1 = state_15706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15706__$1,(11),out,inst_15688);
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
});})(c__5708__auto___15727,out))
;return ((function (switch__5693__auto__,c__5708__auto___15727,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_15723 = [null,null,null,null,null,null,null,null,null];(statearr_15723[(0)] = state_machine__5694__auto__);
(statearr_15723[(1)] = (1));
return statearr_15723;
});
var state_machine__5694__auto____1 = (function (state_15706){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15706);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e15724){if((e15724 instanceof Object))
{var ex__5697__auto__ = e15724;var statearr_15725_15738 = state_15706;(statearr_15725_15738[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15706);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15724;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15739 = state_15706;
state_15706 = G__15739;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15706){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___15727,out))
})();var state__5710__auto__ = (function (){var statearr_15726 = f__5709__auto__.call(null);(statearr_15726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___15727);
return statearr_15726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___15727,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_15891){var state_val_15892 = (state_15891[(1)]);if((state_val_15892 === (7)))
{var inst_15887 = (state_15891[(2)]);var state_15891__$1 = state_15891;var statearr_15893_15930 = state_15891__$1;(statearr_15893_15930[(2)] = inst_15887);
(statearr_15893_15930[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (20)))
{var inst_15862 = (state_15891[(7)]);var inst_15873 = (state_15891[(2)]);var inst_15874 = cljs.core.next.call(null,inst_15862);var inst_15848 = inst_15874;var inst_15849 = null;var inst_15850 = (0);var inst_15851 = (0);var state_15891__$1 = (function (){var statearr_15894 = state_15891;(statearr_15894[(8)] = inst_15851);
(statearr_15894[(9)] = inst_15849);
(statearr_15894[(10)] = inst_15873);
(statearr_15894[(11)] = inst_15848);
(statearr_15894[(12)] = inst_15850);
return statearr_15894;
})();var statearr_15895_15931 = state_15891__$1;(statearr_15895_15931[(2)] = null);
(statearr_15895_15931[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (1)))
{var state_15891__$1 = state_15891;var statearr_15896_15932 = state_15891__$1;(statearr_15896_15932[(2)] = null);
(statearr_15896_15932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (4)))
{var inst_15837 = (state_15891[(13)]);var inst_15837__$1 = (state_15891[(2)]);var inst_15838 = (inst_15837__$1 == null);var state_15891__$1 = (function (){var statearr_15900 = state_15891;(statearr_15900[(13)] = inst_15837__$1);
return statearr_15900;
})();if(cljs.core.truth_(inst_15838))
{var statearr_15901_15933 = state_15891__$1;(statearr_15901_15933[(1)] = (5));
} else
{var statearr_15902_15934 = state_15891__$1;(statearr_15902_15934[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (15)))
{var state_15891__$1 = state_15891;var statearr_15903_15935 = state_15891__$1;(statearr_15903_15935[(2)] = null);
(statearr_15903_15935[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (13)))
{var inst_15851 = (state_15891[(8)]);var inst_15849 = (state_15891[(9)]);var inst_15848 = (state_15891[(11)]);var inst_15850 = (state_15891[(12)]);var inst_15858 = (state_15891[(2)]);var inst_15859 = (inst_15851 + (1));var tmp15897 = inst_15849;var tmp15898 = inst_15848;var tmp15899 = inst_15850;var inst_15848__$1 = tmp15898;var inst_15849__$1 = tmp15897;var inst_15850__$1 = tmp15899;var inst_15851__$1 = inst_15859;var state_15891__$1 = (function (){var statearr_15904 = state_15891;(statearr_15904[(14)] = inst_15858);
(statearr_15904[(8)] = inst_15851__$1);
(statearr_15904[(9)] = inst_15849__$1);
(statearr_15904[(11)] = inst_15848__$1);
(statearr_15904[(12)] = inst_15850__$1);
return statearr_15904;
})();var statearr_15905_15936 = state_15891__$1;(statearr_15905_15936[(2)] = null);
(statearr_15905_15936[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (6)))
{var inst_15837 = (state_15891[(13)]);var inst_15842 = f.call(null,inst_15837);var inst_15847 = cljs.core.seq.call(null,inst_15842);var inst_15848 = inst_15847;var inst_15849 = null;var inst_15850 = (0);var inst_15851 = (0);var state_15891__$1 = (function (){var statearr_15906 = state_15891;(statearr_15906[(8)] = inst_15851);
(statearr_15906[(9)] = inst_15849);
(statearr_15906[(11)] = inst_15848);
(statearr_15906[(12)] = inst_15850);
return statearr_15906;
})();var statearr_15907_15937 = state_15891__$1;(statearr_15907_15937[(2)] = null);
(statearr_15907_15937[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (17)))
{var inst_15862 = (state_15891[(7)]);var inst_15866 = cljs.core.chunk_first.call(null,inst_15862);var inst_15867 = cljs.core.chunk_rest.call(null,inst_15862);var inst_15868 = cljs.core.count.call(null,inst_15866);var inst_15848 = inst_15867;var inst_15849 = inst_15866;var inst_15850 = inst_15868;var inst_15851 = (0);var state_15891__$1 = (function (){var statearr_15908 = state_15891;(statearr_15908[(8)] = inst_15851);
(statearr_15908[(9)] = inst_15849);
(statearr_15908[(11)] = inst_15848);
(statearr_15908[(12)] = inst_15850);
return statearr_15908;
})();var statearr_15909_15938 = state_15891__$1;(statearr_15909_15938[(2)] = null);
(statearr_15909_15938[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (3)))
{var inst_15889 = (state_15891[(2)]);var state_15891__$1 = state_15891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15891__$1,inst_15889);
} else
{if((state_val_15892 === (12)))
{var inst_15882 = (state_15891[(2)]);var state_15891__$1 = state_15891;var statearr_15910_15939 = state_15891__$1;(statearr_15910_15939[(2)] = inst_15882);
(statearr_15910_15939[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (2)))
{var state_15891__$1 = state_15891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15891__$1,(4),in$);
} else
{if((state_val_15892 === (19)))
{var inst_15877 = (state_15891[(2)]);var state_15891__$1 = state_15891;var statearr_15911_15940 = state_15891__$1;(statearr_15911_15940[(2)] = inst_15877);
(statearr_15911_15940[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (11)))
{var inst_15862 = (state_15891[(7)]);var inst_15848 = (state_15891[(11)]);var inst_15862__$1 = cljs.core.seq.call(null,inst_15848);var state_15891__$1 = (function (){var statearr_15912 = state_15891;(statearr_15912[(7)] = inst_15862__$1);
return statearr_15912;
})();if(inst_15862__$1)
{var statearr_15913_15941 = state_15891__$1;(statearr_15913_15941[(1)] = (14));
} else
{var statearr_15914_15942 = state_15891__$1;(statearr_15914_15942[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (9)))
{var inst_15884 = (state_15891[(2)]);var state_15891__$1 = (function (){var statearr_15915 = state_15891;(statearr_15915[(15)] = inst_15884);
return statearr_15915;
})();var statearr_15916_15943 = state_15891__$1;(statearr_15916_15943[(2)] = null);
(statearr_15916_15943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (5)))
{var inst_15840 = cljs.core.async.close_BANG_.call(null,out);var state_15891__$1 = state_15891;var statearr_15917_15944 = state_15891__$1;(statearr_15917_15944[(2)] = inst_15840);
(statearr_15917_15944[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (14)))
{var inst_15862 = (state_15891[(7)]);var inst_15864 = cljs.core.chunked_seq_QMARK_.call(null,inst_15862);var state_15891__$1 = state_15891;if(inst_15864)
{var statearr_15918_15945 = state_15891__$1;(statearr_15918_15945[(1)] = (17));
} else
{var statearr_15919_15946 = state_15891__$1;(statearr_15919_15946[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (16)))
{var inst_15880 = (state_15891[(2)]);var state_15891__$1 = state_15891;var statearr_15920_15947 = state_15891__$1;(statearr_15920_15947[(2)] = inst_15880);
(statearr_15920_15947[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15892 === (10)))
{var inst_15851 = (state_15891[(8)]);var inst_15849 = (state_15891[(9)]);var inst_15856 = cljs.core._nth.call(null,inst_15849,inst_15851);var state_15891__$1 = state_15891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15891__$1,(13),out,inst_15856);
} else
{if((state_val_15892 === (18)))
{var inst_15862 = (state_15891[(7)]);var inst_15871 = cljs.core.first.call(null,inst_15862);var state_15891__$1 = state_15891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15891__$1,(20),out,inst_15871);
} else
{if((state_val_15892 === (8)))
{var inst_15851 = (state_15891[(8)]);var inst_15850 = (state_15891[(12)]);var inst_15853 = (inst_15851 < inst_15850);var inst_15854 = inst_15853;var state_15891__$1 = state_15891;if(cljs.core.truth_(inst_15854))
{var statearr_15921_15948 = state_15891__$1;(statearr_15921_15948[(1)] = (10));
} else
{var statearr_15922_15949 = state_15891__$1;(statearr_15922_15949[(1)] = (11));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_15926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15926[(0)] = state_machine__5694__auto__);
(statearr_15926[(1)] = (1));
return statearr_15926;
});
var state_machine__5694__auto____1 = (function (state_15891){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15891);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e15927){if((e15927 instanceof Object))
{var ex__5697__auto__ = e15927;var statearr_15928_15950 = state_15891;(statearr_15928_15950[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15927;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15951 = state_15891;
state_15891 = G__15951;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15891){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_15929 = f__5709__auto__.call(null);(statearr_15929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_15929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___16032 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16032){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16032){
return (function (state_16011){var state_val_16012 = (state_16011[(1)]);if((state_val_16012 === (7)))
{var inst_16007 = (state_16011[(2)]);var state_16011__$1 = state_16011;var statearr_16013_16033 = state_16011__$1;(statearr_16013_16033[(2)] = inst_16007);
(statearr_16013_16033[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (1)))
{var state_16011__$1 = state_16011;var statearr_16014_16034 = state_16011__$1;(statearr_16014_16034[(2)] = null);
(statearr_16014_16034[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (4)))
{var inst_15994 = (state_16011[(7)]);var inst_15994__$1 = (state_16011[(2)]);var inst_15995 = (inst_15994__$1 == null);var state_16011__$1 = (function (){var statearr_16015 = state_16011;(statearr_16015[(7)] = inst_15994__$1);
return statearr_16015;
})();if(cljs.core.truth_(inst_15995))
{var statearr_16016_16035 = state_16011__$1;(statearr_16016_16035[(1)] = (5));
} else
{var statearr_16017_16036 = state_16011__$1;(statearr_16017_16036[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (6)))
{var inst_15994 = (state_16011[(7)]);var state_16011__$1 = state_16011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16011__$1,(11),to,inst_15994);
} else
{if((state_val_16012 === (3)))
{var inst_16009 = (state_16011[(2)]);var state_16011__$1 = state_16011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16011__$1,inst_16009);
} else
{if((state_val_16012 === (2)))
{var state_16011__$1 = state_16011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16011__$1,(4),from);
} else
{if((state_val_16012 === (11)))
{var inst_16004 = (state_16011[(2)]);var state_16011__$1 = (function (){var statearr_16018 = state_16011;(statearr_16018[(8)] = inst_16004);
return statearr_16018;
})();var statearr_16019_16037 = state_16011__$1;(statearr_16019_16037[(2)] = null);
(statearr_16019_16037[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (9)))
{var state_16011__$1 = state_16011;var statearr_16020_16038 = state_16011__$1;(statearr_16020_16038[(2)] = null);
(statearr_16020_16038[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (5)))
{var state_16011__$1 = state_16011;if(cljs.core.truth_(close_QMARK_))
{var statearr_16021_16039 = state_16011__$1;(statearr_16021_16039[(1)] = (8));
} else
{var statearr_16022_16040 = state_16011__$1;(statearr_16022_16040[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (10)))
{var inst_16001 = (state_16011[(2)]);var state_16011__$1 = state_16011;var statearr_16023_16041 = state_16011__$1;(statearr_16023_16041[(2)] = inst_16001);
(statearr_16023_16041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16012 === (8)))
{var inst_15998 = cljs.core.async.close_BANG_.call(null,to);var state_16011__$1 = state_16011;var statearr_16024_16042 = state_16011__$1;(statearr_16024_16042[(2)] = inst_15998);
(statearr_16024_16042[(1)] = (10));
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
});})(c__5708__auto___16032))
;return ((function (switch__5693__auto__,c__5708__auto___16032){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16028 = [null,null,null,null,null,null,null,null,null];(statearr_16028[(0)] = state_machine__5694__auto__);
(statearr_16028[(1)] = (1));
return statearr_16028;
});
var state_machine__5694__auto____1 = (function (state_16011){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16011);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16029){if((e16029 instanceof Object))
{var ex__5697__auto__ = e16029;var statearr_16030_16043 = state_16011;(statearr_16030_16043[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16011);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16029;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16044 = state_16011;
state_16011 = G__16044;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16011){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16032))
})();var state__5710__auto__ = (function (){var statearr_16031 = f__5709__auto__.call(null);(statearr_16031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16032);
return statearr_16031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16032))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___16131 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16131,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16131,tc,fc){
return (function (state_16109){var state_val_16110 = (state_16109[(1)]);if((state_val_16110 === (7)))
{var inst_16105 = (state_16109[(2)]);var state_16109__$1 = state_16109;var statearr_16111_16132 = state_16109__$1;(statearr_16111_16132[(2)] = inst_16105);
(statearr_16111_16132[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16110 === (1)))
{var state_16109__$1 = state_16109;var statearr_16112_16133 = state_16109__$1;(statearr_16112_16133[(2)] = null);
(statearr_16112_16133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16110 === (4)))
{var inst_16090 = (state_16109[(7)]);var inst_16090__$1 = (state_16109[(2)]);var inst_16091 = (inst_16090__$1 == null);var state_16109__$1 = (function (){var statearr_16113 = state_16109;(statearr_16113[(7)] = inst_16090__$1);
return statearr_16113;
})();if(cljs.core.truth_(inst_16091))
{var statearr_16114_16134 = state_16109__$1;(statearr_16114_16134[(1)] = (5));
} else
{var statearr_16115_16135 = state_16109__$1;(statearr_16115_16135[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16110 === (6)))
{var inst_16090 = (state_16109[(7)]);var inst_16096 = p.call(null,inst_16090);var state_16109__$1 = state_16109;if(cljs.core.truth_(inst_16096))
{var statearr_16116_16136 = state_16109__$1;(statearr_16116_16136[(1)] = (9));
} else
{var statearr_16117_16137 = state_16109__$1;(statearr_16117_16137[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16110 === (3)))
{var inst_16107 = (state_16109[(2)]);var state_16109__$1 = state_16109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16109__$1,inst_16107);
} else
{if((state_val_16110 === (2)))
{var state_16109__$1 = state_16109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16109__$1,(4),ch);
} else
{if((state_val_16110 === (11)))
{var inst_16090 = (state_16109[(7)]);var inst_16100 = (state_16109[(2)]);var state_16109__$1 = state_16109;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16109__$1,(8),inst_16100,inst_16090);
} else
{if((state_val_16110 === (9)))
{var state_16109__$1 = state_16109;var statearr_16118_16138 = state_16109__$1;(statearr_16118_16138[(2)] = tc);
(statearr_16118_16138[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16110 === (5)))
{var inst_16093 = cljs.core.async.close_BANG_.call(null,tc);var inst_16094 = cljs.core.async.close_BANG_.call(null,fc);var state_16109__$1 = (function (){var statearr_16119 = state_16109;(statearr_16119[(8)] = inst_16093);
return statearr_16119;
})();var statearr_16120_16139 = state_16109__$1;(statearr_16120_16139[(2)] = inst_16094);
(statearr_16120_16139[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16110 === (10)))
{var state_16109__$1 = state_16109;var statearr_16121_16140 = state_16109__$1;(statearr_16121_16140[(2)] = fc);
(statearr_16121_16140[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16110 === (8)))
{var inst_16102 = (state_16109[(2)]);var state_16109__$1 = (function (){var statearr_16122 = state_16109;(statearr_16122[(9)] = inst_16102);
return statearr_16122;
})();var statearr_16123_16141 = state_16109__$1;(statearr_16123_16141[(2)] = null);
(statearr_16123_16141[(1)] = (2));
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
});})(c__5708__auto___16131,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___16131,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16127 = [null,null,null,null,null,null,null,null,null,null];(statearr_16127[(0)] = state_machine__5694__auto__);
(statearr_16127[(1)] = (1));
return statearr_16127;
});
var state_machine__5694__auto____1 = (function (state_16109){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16109);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16128){if((e16128 instanceof Object))
{var ex__5697__auto__ = e16128;var statearr_16129_16142 = state_16109;(statearr_16129_16142[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16109);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16128;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16143 = state_16109;
state_16109 = G__16143;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16109){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16131,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_16130 = f__5709__auto__.call(null);(statearr_16130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16131);
return statearr_16130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16131,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_16190){var state_val_16191 = (state_16190[(1)]);if((state_val_16191 === (7)))
{var inst_16186 = (state_16190[(2)]);var state_16190__$1 = state_16190;var statearr_16192_16208 = state_16190__$1;(statearr_16192_16208[(2)] = inst_16186);
(statearr_16192_16208[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16191 === (6)))
{var inst_16176 = (state_16190[(7)]);var inst_16179 = (state_16190[(8)]);var inst_16183 = f.call(null,inst_16176,inst_16179);var inst_16176__$1 = inst_16183;var state_16190__$1 = (function (){var statearr_16193 = state_16190;(statearr_16193[(7)] = inst_16176__$1);
return statearr_16193;
})();var statearr_16194_16209 = state_16190__$1;(statearr_16194_16209[(2)] = null);
(statearr_16194_16209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16191 === (5)))
{var inst_16176 = (state_16190[(7)]);var state_16190__$1 = state_16190;var statearr_16195_16210 = state_16190__$1;(statearr_16195_16210[(2)] = inst_16176);
(statearr_16195_16210[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16191 === (4)))
{var inst_16179 = (state_16190[(8)]);var inst_16179__$1 = (state_16190[(2)]);var inst_16180 = (inst_16179__$1 == null);var state_16190__$1 = (function (){var statearr_16196 = state_16190;(statearr_16196[(8)] = inst_16179__$1);
return statearr_16196;
})();if(cljs.core.truth_(inst_16180))
{var statearr_16197_16211 = state_16190__$1;(statearr_16197_16211[(1)] = (5));
} else
{var statearr_16198_16212 = state_16190__$1;(statearr_16198_16212[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16191 === (3)))
{var inst_16188 = (state_16190[(2)]);var state_16190__$1 = state_16190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16190__$1,inst_16188);
} else
{if((state_val_16191 === (2)))
{var state_16190__$1 = state_16190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16190__$1,(4),ch);
} else
{if((state_val_16191 === (1)))
{var inst_16176 = init;var state_16190__$1 = (function (){var statearr_16199 = state_16190;(statearr_16199[(7)] = inst_16176);
return statearr_16199;
})();var statearr_16200_16213 = state_16190__$1;(statearr_16200_16213[(2)] = null);
(statearr_16200_16213[(1)] = (2));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16204 = [null,null,null,null,null,null,null,null,null];(statearr_16204[(0)] = state_machine__5694__auto__);
(statearr_16204[(1)] = (1));
return statearr_16204;
});
var state_machine__5694__auto____1 = (function (state_16190){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16190);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16205){if((e16205 instanceof Object))
{var ex__5697__auto__ = e16205;var statearr_16206_16214 = state_16190;(statearr_16206_16214[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16190);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16205;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16215 = state_16190;
state_16190 = G__16215;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16190){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16207 = f__5709__auto__.call(null);(statearr_16207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_16277){var state_val_16278 = (state_16277[(1)]);if((state_val_16278 === (7)))
{var inst_16258 = (state_16277[(7)]);var inst_16263 = (state_16277[(2)]);var inst_16264 = cljs.core.next.call(null,inst_16258);var inst_16258__$1 = inst_16264;var state_16277__$1 = (function (){var statearr_16279 = state_16277;(statearr_16279[(7)] = inst_16258__$1);
(statearr_16279[(8)] = inst_16263);
return statearr_16279;
})();var statearr_16280_16298 = state_16277__$1;(statearr_16280_16298[(2)] = null);
(statearr_16280_16298[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16278 === (1)))
{var inst_16257 = cljs.core.seq.call(null,coll);var inst_16258 = inst_16257;var state_16277__$1 = (function (){var statearr_16281 = state_16277;(statearr_16281[(7)] = inst_16258);
return statearr_16281;
})();var statearr_16282_16299 = state_16277__$1;(statearr_16282_16299[(2)] = null);
(statearr_16282_16299[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16278 === (4)))
{var inst_16258 = (state_16277[(7)]);var inst_16261 = cljs.core.first.call(null,inst_16258);var state_16277__$1 = state_16277;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16277__$1,(7),ch,inst_16261);
} else
{if((state_val_16278 === (6)))
{var inst_16273 = (state_16277[(2)]);var state_16277__$1 = state_16277;var statearr_16283_16300 = state_16277__$1;(statearr_16283_16300[(2)] = inst_16273);
(statearr_16283_16300[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16278 === (3)))
{var inst_16275 = (state_16277[(2)]);var state_16277__$1 = state_16277;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16277__$1,inst_16275);
} else
{if((state_val_16278 === (2)))
{var inst_16258 = (state_16277[(7)]);var state_16277__$1 = state_16277;if(cljs.core.truth_(inst_16258))
{var statearr_16284_16301 = state_16277__$1;(statearr_16284_16301[(1)] = (4));
} else
{var statearr_16285_16302 = state_16277__$1;(statearr_16285_16302[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16278 === (9)))
{var state_16277__$1 = state_16277;var statearr_16286_16303 = state_16277__$1;(statearr_16286_16303[(2)] = null);
(statearr_16286_16303[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16278 === (5)))
{var state_16277__$1 = state_16277;if(cljs.core.truth_(close_QMARK_))
{var statearr_16287_16304 = state_16277__$1;(statearr_16287_16304[(1)] = (8));
} else
{var statearr_16288_16305 = state_16277__$1;(statearr_16288_16305[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16278 === (10)))
{var inst_16271 = (state_16277[(2)]);var state_16277__$1 = state_16277;var statearr_16289_16306 = state_16277__$1;(statearr_16289_16306[(2)] = inst_16271);
(statearr_16289_16306[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16278 === (8)))
{var inst_16268 = cljs.core.async.close_BANG_.call(null,ch);var state_16277__$1 = state_16277;var statearr_16290_16307 = state_16277__$1;(statearr_16290_16307[(2)] = inst_16268);
(statearr_16290_16307[(1)] = (10));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16294 = [null,null,null,null,null,null,null,null,null];(statearr_16294[(0)] = state_machine__5694__auto__);
(statearr_16294[(1)] = (1));
return statearr_16294;
});
var state_machine__5694__auto____1 = (function (state_16277){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16277);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16295){if((e16295 instanceof Object))
{var ex__5697__auto__ = e16295;var statearr_16296_16308 = state_16277;(statearr_16296_16308[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16277);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16295;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16309 = state_16277;
state_16277 = G__16309;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16277){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16297 = f__5709__auto__.call(null);(statearr_16297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
cljs.core.async.Mux = (function (){var obj16311 = {};return obj16311;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3546__auto__ = _;if(and__3546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4185__auto__ = (((_ == null))?null:_);return (function (){var or__3558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16313 = {};return obj16313;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16537 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16537 = (function (cs,ch,mult,meta16538){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16538 = meta16538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16537.cljs$lang$type = true;
cljs.core.async.t16537.cljs$lang$ctorStr = "cljs.core.async/t16537";
cljs.core.async.t16537.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16537");
});})(cs))
;
cljs.core.async.t16537.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16537.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16537.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16537.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16537.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16539){var self__ = this;
var _16539__$1 = this;return self__.meta16538;
});})(cs))
;
cljs.core.async.t16537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16539,meta16538__$1){var self__ = this;
var _16539__$1 = this;return (new cljs.core.async.t16537(self__.cs,self__.ch,self__.mult,meta16538__$1));
});})(cs))
;
cljs.core.async.__GT_t16537 = ((function (cs){
return (function __GT_t16537(cs__$1,ch__$1,mult__$1,meta16538){return (new cljs.core.async.t16537(cs__$1,ch__$1,mult__$1,meta16538));
});})(cs))
;
}
return (new cljs.core.async.t16537(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___16760 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16760,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16760,cs,m,dchan,dctr,done){
return (function (state_16674){var state_val_16675 = (state_16674[(1)]);if((state_val_16675 === (7)))
{var inst_16670 = (state_16674[(2)]);var state_16674__$1 = state_16674;var statearr_16676_16761 = state_16674__$1;(statearr_16676_16761[(2)] = inst_16670);
(statearr_16676_16761[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (20)))
{var inst_16571 = (state_16674[(7)]);var inst_16581 = cljs.core.first.call(null,inst_16571);var inst_16582 = cljs.core.nth.call(null,inst_16581,(0),null);var inst_16583 = cljs.core.nth.call(null,inst_16581,(1),null);var state_16674__$1 = (function (){var statearr_16677 = state_16674;(statearr_16677[(8)] = inst_16582);
return statearr_16677;
})();if(cljs.core.truth_(inst_16583))
{var statearr_16678_16762 = state_16674__$1;(statearr_16678_16762[(1)] = (22));
} else
{var statearr_16679_16763 = state_16674__$1;(statearr_16679_16763[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (27)))
{var inst_16613 = (state_16674[(9)]);var inst_16611 = (state_16674[(10)]);var inst_16618 = cljs.core._nth.call(null,inst_16611,inst_16613);var state_16674__$1 = (function (){var statearr_16680 = state_16674;(statearr_16680[(11)] = inst_16618);
return statearr_16680;
})();var statearr_16681_16764 = state_16674__$1;(statearr_16681_16764[(2)] = null);
(statearr_16681_16764[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (1)))
{var state_16674__$1 = state_16674;var statearr_16682_16765 = state_16674__$1;(statearr_16682_16765[(2)] = null);
(statearr_16682_16765[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (24)))
{var inst_16571 = (state_16674[(7)]);var inst_16588 = (state_16674[(2)]);var inst_16589 = cljs.core.next.call(null,inst_16571);var inst_16551 = inst_16589;var inst_16552 = null;var inst_16553 = (0);var inst_16554 = (0);var state_16674__$1 = (function (){var statearr_16683 = state_16674;(statearr_16683[(12)] = inst_16552);
(statearr_16683[(13)] = inst_16553);
(statearr_16683[(14)] = inst_16551);
(statearr_16683[(15)] = inst_16554);
(statearr_16683[(16)] = inst_16588);
return statearr_16683;
})();var statearr_16684_16766 = state_16674__$1;(statearr_16684_16766[(2)] = null);
(statearr_16684_16766[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (39)))
{var inst_16631 = (state_16674[(17)]);var inst_16649 = (state_16674[(2)]);var inst_16650 = cljs.core.next.call(null,inst_16631);var inst_16610 = inst_16650;var inst_16611 = null;var inst_16612 = (0);var inst_16613 = (0);var state_16674__$1 = (function (){var statearr_16688 = state_16674;(statearr_16688[(9)] = inst_16613);
(statearr_16688[(18)] = inst_16649);
(statearr_16688[(19)] = inst_16610);
(statearr_16688[(20)] = inst_16612);
(statearr_16688[(10)] = inst_16611);
return statearr_16688;
})();var statearr_16689_16767 = state_16674__$1;(statearr_16689_16767[(2)] = null);
(statearr_16689_16767[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (4)))
{var inst_16542 = (state_16674[(21)]);var inst_16542__$1 = (state_16674[(2)]);var inst_16543 = (inst_16542__$1 == null);var state_16674__$1 = (function (){var statearr_16690 = state_16674;(statearr_16690[(21)] = inst_16542__$1);
return statearr_16690;
})();if(cljs.core.truth_(inst_16543))
{var statearr_16691_16768 = state_16674__$1;(statearr_16691_16768[(1)] = (5));
} else
{var statearr_16692_16769 = state_16674__$1;(statearr_16692_16769[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (15)))
{var inst_16552 = (state_16674[(12)]);var inst_16553 = (state_16674[(13)]);var inst_16551 = (state_16674[(14)]);var inst_16554 = (state_16674[(15)]);var inst_16567 = (state_16674[(2)]);var inst_16568 = (inst_16554 + (1));var tmp16685 = inst_16552;var tmp16686 = inst_16553;var tmp16687 = inst_16551;var inst_16551__$1 = tmp16687;var inst_16552__$1 = tmp16685;var inst_16553__$1 = tmp16686;var inst_16554__$1 = inst_16568;var state_16674__$1 = (function (){var statearr_16693 = state_16674;(statearr_16693[(12)] = inst_16552__$1);
(statearr_16693[(13)] = inst_16553__$1);
(statearr_16693[(22)] = inst_16567);
(statearr_16693[(14)] = inst_16551__$1);
(statearr_16693[(15)] = inst_16554__$1);
return statearr_16693;
})();var statearr_16694_16770 = state_16674__$1;(statearr_16694_16770[(2)] = null);
(statearr_16694_16770[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (21)))
{var inst_16592 = (state_16674[(2)]);var state_16674__$1 = state_16674;var statearr_16695_16771 = state_16674__$1;(statearr_16695_16771[(2)] = inst_16592);
(statearr_16695_16771[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (31)))
{var inst_16618 = (state_16674[(11)]);var inst_16619 = (state_16674[(2)]);var inst_16620 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16621 = cljs.core.async.untap_STAR_.call(null,m,inst_16618);var state_16674__$1 = (function (){var statearr_16696 = state_16674;(statearr_16696[(23)] = inst_16619);
(statearr_16696[(24)] = inst_16620);
return statearr_16696;
})();var statearr_16697_16772 = state_16674__$1;(statearr_16697_16772[(2)] = inst_16621);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16674__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (32)))
{var inst_16542 = (state_16674[(21)]);var inst_16618 = (state_16674[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16674,(31),Object,null,(30));var inst_16625 = cljs.core.async.put_BANG_.call(null,inst_16618,inst_16542,done);var state_16674__$1 = state_16674;var statearr_16698_16773 = state_16674__$1;(statearr_16698_16773[(2)] = inst_16625);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16674__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (40)))
{var inst_16640 = (state_16674[(25)]);var inst_16641 = (state_16674[(2)]);var inst_16642 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16643 = cljs.core.async.untap_STAR_.call(null,m,inst_16640);var state_16674__$1 = (function (){var statearr_16699 = state_16674;(statearr_16699[(26)] = inst_16641);
(statearr_16699[(27)] = inst_16642);
return statearr_16699;
})();var statearr_16700_16774 = state_16674__$1;(statearr_16700_16774[(2)] = inst_16643);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16674__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (33)))
{var inst_16631 = (state_16674[(17)]);var inst_16633 = cljs.core.chunked_seq_QMARK_.call(null,inst_16631);var state_16674__$1 = state_16674;if(inst_16633)
{var statearr_16701_16775 = state_16674__$1;(statearr_16701_16775[(1)] = (36));
} else
{var statearr_16702_16776 = state_16674__$1;(statearr_16702_16776[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (13)))
{var inst_16561 = (state_16674[(28)]);var inst_16564 = cljs.core.async.close_BANG_.call(null,inst_16561);var state_16674__$1 = state_16674;var statearr_16703_16777 = state_16674__$1;(statearr_16703_16777[(2)] = inst_16564);
(statearr_16703_16777[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (22)))
{var inst_16582 = (state_16674[(8)]);var inst_16585 = cljs.core.async.close_BANG_.call(null,inst_16582);var state_16674__$1 = state_16674;var statearr_16704_16778 = state_16674__$1;(statearr_16704_16778[(2)] = inst_16585);
(statearr_16704_16778[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (36)))
{var inst_16631 = (state_16674[(17)]);var inst_16635 = cljs.core.chunk_first.call(null,inst_16631);var inst_16636 = cljs.core.chunk_rest.call(null,inst_16631);var inst_16637 = cljs.core.count.call(null,inst_16635);var inst_16610 = inst_16636;var inst_16611 = inst_16635;var inst_16612 = inst_16637;var inst_16613 = (0);var state_16674__$1 = (function (){var statearr_16705 = state_16674;(statearr_16705[(9)] = inst_16613);
(statearr_16705[(19)] = inst_16610);
(statearr_16705[(20)] = inst_16612);
(statearr_16705[(10)] = inst_16611);
return statearr_16705;
})();var statearr_16706_16779 = state_16674__$1;(statearr_16706_16779[(2)] = null);
(statearr_16706_16779[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (41)))
{var inst_16640 = (state_16674[(25)]);var inst_16542 = (state_16674[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16674,(40),Object,null,(39));var inst_16647 = cljs.core.async.put_BANG_.call(null,inst_16640,inst_16542,done);var state_16674__$1 = state_16674;var statearr_16707_16780 = state_16674__$1;(statearr_16707_16780[(2)] = inst_16647);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16674__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (43)))
{var state_16674__$1 = state_16674;var statearr_16708_16781 = state_16674__$1;(statearr_16708_16781[(2)] = null);
(statearr_16708_16781[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (29)))
{var inst_16658 = (state_16674[(2)]);var state_16674__$1 = state_16674;var statearr_16709_16782 = state_16674__$1;(statearr_16709_16782[(2)] = inst_16658);
(statearr_16709_16782[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (44)))
{var inst_16667 = (state_16674[(2)]);var state_16674__$1 = (function (){var statearr_16710 = state_16674;(statearr_16710[(29)] = inst_16667);
return statearr_16710;
})();var statearr_16711_16783 = state_16674__$1;(statearr_16711_16783[(2)] = null);
(statearr_16711_16783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (6)))
{var inst_16602 = (state_16674[(30)]);var inst_16601 = cljs.core.deref.call(null,cs);var inst_16602__$1 = cljs.core.keys.call(null,inst_16601);var inst_16603 = cljs.core.count.call(null,inst_16602__$1);var inst_16604 = cljs.core.reset_BANG_.call(null,dctr,inst_16603);var inst_16609 = cljs.core.seq.call(null,inst_16602__$1);var inst_16610 = inst_16609;var inst_16611 = null;var inst_16612 = (0);var inst_16613 = (0);var state_16674__$1 = (function (){var statearr_16712 = state_16674;(statearr_16712[(31)] = inst_16604);
(statearr_16712[(9)] = inst_16613);
(statearr_16712[(19)] = inst_16610);
(statearr_16712[(20)] = inst_16612);
(statearr_16712[(10)] = inst_16611);
(statearr_16712[(30)] = inst_16602__$1);
return statearr_16712;
})();var statearr_16713_16784 = state_16674__$1;(statearr_16713_16784[(2)] = null);
(statearr_16713_16784[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (28)))
{var inst_16610 = (state_16674[(19)]);var inst_16631 = (state_16674[(17)]);var inst_16631__$1 = cljs.core.seq.call(null,inst_16610);var state_16674__$1 = (function (){var statearr_16714 = state_16674;(statearr_16714[(17)] = inst_16631__$1);
return statearr_16714;
})();if(inst_16631__$1)
{var statearr_16715_16785 = state_16674__$1;(statearr_16715_16785[(1)] = (33));
} else
{var statearr_16716_16786 = state_16674__$1;(statearr_16716_16786[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (25)))
{var inst_16613 = (state_16674[(9)]);var inst_16612 = (state_16674[(20)]);var inst_16615 = (inst_16613 < inst_16612);var inst_16616 = inst_16615;var state_16674__$1 = state_16674;if(cljs.core.truth_(inst_16616))
{var statearr_16717_16787 = state_16674__$1;(statearr_16717_16787[(1)] = (27));
} else
{var statearr_16718_16788 = state_16674__$1;(statearr_16718_16788[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (34)))
{var state_16674__$1 = state_16674;var statearr_16719_16789 = state_16674__$1;(statearr_16719_16789[(2)] = null);
(statearr_16719_16789[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (17)))
{var state_16674__$1 = state_16674;var statearr_16720_16790 = state_16674__$1;(statearr_16720_16790[(2)] = null);
(statearr_16720_16790[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (3)))
{var inst_16672 = (state_16674[(2)]);var state_16674__$1 = state_16674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16674__$1,inst_16672);
} else
{if((state_val_16675 === (12)))
{var inst_16597 = (state_16674[(2)]);var state_16674__$1 = state_16674;var statearr_16721_16791 = state_16674__$1;(statearr_16721_16791[(2)] = inst_16597);
(statearr_16721_16791[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (2)))
{var state_16674__$1 = state_16674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16674__$1,(4),ch);
} else
{if((state_val_16675 === (23)))
{var state_16674__$1 = state_16674;var statearr_16722_16792 = state_16674__$1;(statearr_16722_16792[(2)] = null);
(statearr_16722_16792[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (35)))
{var inst_16656 = (state_16674[(2)]);var state_16674__$1 = state_16674;var statearr_16723_16793 = state_16674__$1;(statearr_16723_16793[(2)] = inst_16656);
(statearr_16723_16793[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (19)))
{var inst_16571 = (state_16674[(7)]);var inst_16575 = cljs.core.chunk_first.call(null,inst_16571);var inst_16576 = cljs.core.chunk_rest.call(null,inst_16571);var inst_16577 = cljs.core.count.call(null,inst_16575);var inst_16551 = inst_16576;var inst_16552 = inst_16575;var inst_16553 = inst_16577;var inst_16554 = (0);var state_16674__$1 = (function (){var statearr_16724 = state_16674;(statearr_16724[(12)] = inst_16552);
(statearr_16724[(13)] = inst_16553);
(statearr_16724[(14)] = inst_16551);
(statearr_16724[(15)] = inst_16554);
return statearr_16724;
})();var statearr_16725_16794 = state_16674__$1;(statearr_16725_16794[(2)] = null);
(statearr_16725_16794[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (11)))
{var inst_16551 = (state_16674[(14)]);var inst_16571 = (state_16674[(7)]);var inst_16571__$1 = cljs.core.seq.call(null,inst_16551);var state_16674__$1 = (function (){var statearr_16726 = state_16674;(statearr_16726[(7)] = inst_16571__$1);
return statearr_16726;
})();if(inst_16571__$1)
{var statearr_16727_16795 = state_16674__$1;(statearr_16727_16795[(1)] = (16));
} else
{var statearr_16728_16796 = state_16674__$1;(statearr_16728_16796[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (9)))
{var inst_16599 = (state_16674[(2)]);var state_16674__$1 = state_16674;var statearr_16729_16797 = state_16674__$1;(statearr_16729_16797[(2)] = inst_16599);
(statearr_16729_16797[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (5)))
{var inst_16549 = cljs.core.deref.call(null,cs);var inst_16550 = cljs.core.seq.call(null,inst_16549);var inst_16551 = inst_16550;var inst_16552 = null;var inst_16553 = (0);var inst_16554 = (0);var state_16674__$1 = (function (){var statearr_16730 = state_16674;(statearr_16730[(12)] = inst_16552);
(statearr_16730[(13)] = inst_16553);
(statearr_16730[(14)] = inst_16551);
(statearr_16730[(15)] = inst_16554);
return statearr_16730;
})();var statearr_16731_16798 = state_16674__$1;(statearr_16731_16798[(2)] = null);
(statearr_16731_16798[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (14)))
{var state_16674__$1 = state_16674;var statearr_16732_16799 = state_16674__$1;(statearr_16732_16799[(2)] = null);
(statearr_16732_16799[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (45)))
{var inst_16664 = (state_16674[(2)]);var state_16674__$1 = state_16674;var statearr_16733_16800 = state_16674__$1;(statearr_16733_16800[(2)] = inst_16664);
(statearr_16733_16800[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (26)))
{var inst_16602 = (state_16674[(30)]);var inst_16660 = (state_16674[(2)]);var inst_16661 = cljs.core.seq.call(null,inst_16602);var state_16674__$1 = (function (){var statearr_16734 = state_16674;(statearr_16734[(32)] = inst_16660);
return statearr_16734;
})();if(inst_16661)
{var statearr_16735_16801 = state_16674__$1;(statearr_16735_16801[(1)] = (42));
} else
{var statearr_16736_16802 = state_16674__$1;(statearr_16736_16802[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (16)))
{var inst_16571 = (state_16674[(7)]);var inst_16573 = cljs.core.chunked_seq_QMARK_.call(null,inst_16571);var state_16674__$1 = state_16674;if(inst_16573)
{var statearr_16740_16803 = state_16674__$1;(statearr_16740_16803[(1)] = (19));
} else
{var statearr_16741_16804 = state_16674__$1;(statearr_16741_16804[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (38)))
{var inst_16653 = (state_16674[(2)]);var state_16674__$1 = state_16674;var statearr_16742_16805 = state_16674__$1;(statearr_16742_16805[(2)] = inst_16653);
(statearr_16742_16805[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (30)))
{var inst_16613 = (state_16674[(9)]);var inst_16610 = (state_16674[(19)]);var inst_16612 = (state_16674[(20)]);var inst_16611 = (state_16674[(10)]);var inst_16627 = (state_16674[(2)]);var inst_16628 = (inst_16613 + (1));var tmp16737 = inst_16610;var tmp16738 = inst_16612;var tmp16739 = inst_16611;var inst_16610__$1 = tmp16737;var inst_16611__$1 = tmp16739;var inst_16612__$1 = tmp16738;var inst_16613__$1 = inst_16628;var state_16674__$1 = (function (){var statearr_16743 = state_16674;(statearr_16743[(9)] = inst_16613__$1);
(statearr_16743[(19)] = inst_16610__$1);
(statearr_16743[(20)] = inst_16612__$1);
(statearr_16743[(33)] = inst_16627);
(statearr_16743[(10)] = inst_16611__$1);
return statearr_16743;
})();var statearr_16744_16806 = state_16674__$1;(statearr_16744_16806[(2)] = null);
(statearr_16744_16806[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (10)))
{var inst_16552 = (state_16674[(12)]);var inst_16554 = (state_16674[(15)]);var inst_16560 = cljs.core._nth.call(null,inst_16552,inst_16554);var inst_16561 = cljs.core.nth.call(null,inst_16560,(0),null);var inst_16562 = cljs.core.nth.call(null,inst_16560,(1),null);var state_16674__$1 = (function (){var statearr_16745 = state_16674;(statearr_16745[(28)] = inst_16561);
return statearr_16745;
})();if(cljs.core.truth_(inst_16562))
{var statearr_16746_16807 = state_16674__$1;(statearr_16746_16807[(1)] = (13));
} else
{var statearr_16747_16808 = state_16674__$1;(statearr_16747_16808[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (18)))
{var inst_16595 = (state_16674[(2)]);var state_16674__$1 = state_16674;var statearr_16748_16809 = state_16674__$1;(statearr_16748_16809[(2)] = inst_16595);
(statearr_16748_16809[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (42)))
{var state_16674__$1 = state_16674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16674__$1,(45),dchan);
} else
{if((state_val_16675 === (37)))
{var inst_16631 = (state_16674[(17)]);var inst_16640 = cljs.core.first.call(null,inst_16631);var state_16674__$1 = (function (){var statearr_16749 = state_16674;(statearr_16749[(25)] = inst_16640);
return statearr_16749;
})();var statearr_16750_16810 = state_16674__$1;(statearr_16750_16810[(2)] = null);
(statearr_16750_16810[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16675 === (8)))
{var inst_16553 = (state_16674[(13)]);var inst_16554 = (state_16674[(15)]);var inst_16556 = (inst_16554 < inst_16553);var inst_16557 = inst_16556;var state_16674__$1 = state_16674;if(cljs.core.truth_(inst_16557))
{var statearr_16751_16811 = state_16674__$1;(statearr_16751_16811[(1)] = (10));
} else
{var statearr_16752_16812 = state_16674__$1;(statearr_16752_16812[(1)] = (11));
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
});})(c__5708__auto___16760,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___16760,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16756[(0)] = state_machine__5694__auto__);
(statearr_16756[(1)] = (1));
return statearr_16756;
});
var state_machine__5694__auto____1 = (function (state_16674){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16674);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16757){if((e16757 instanceof Object))
{var ex__5697__auto__ = e16757;var statearr_16758_16813 = state_16674;(statearr_16758_16813[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16757;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16814 = state_16674;
state_16674 = G__16814;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16674){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16760,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_16759 = f__5709__auto__.call(null);(statearr_16759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16760);
return statearr_16759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16760,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16816 = {};return obj16816;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t16926 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16926 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16927){
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
this.meta16927 = meta16927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16926.cljs$lang$type = true;
cljs.core.async.t16926.cljs$lang$ctorStr = "cljs.core.async/t16926";
cljs.core.async.t16926.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16926");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16926.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16926.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16926.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16926.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16926.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16926.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16926.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16928){var self__ = this;
var _16928__$1 = this;return self__.meta16927;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16928,meta16927__$1){var self__ = this;
var _16928__$1 = this;return (new cljs.core.async.t16926(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16927__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16926 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16926(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16927){return (new cljs.core.async.t16926(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16927));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16926(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___17035 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17035,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17035,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16993){var state_val_16994 = (state_16993[(1)]);if((state_val_16994 === (7)))
{var inst_16942 = (state_16993[(7)]);var inst_16947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16942);var state_16993__$1 = state_16993;var statearr_16995_17036 = state_16993__$1;(statearr_16995_17036[(2)] = inst_16947);
(statearr_16995_17036[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (20)))
{var inst_16957 = (state_16993[(8)]);var state_16993__$1 = state_16993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16993__$1,(23),out,inst_16957);
} else
{if((state_val_16994 === (1)))
{var inst_16932 = (state_16993[(9)]);var inst_16932__$1 = calc_state.call(null);var inst_16933 = cljs.core.seq_QMARK_.call(null,inst_16932__$1);var state_16993__$1 = (function (){var statearr_16996 = state_16993;(statearr_16996[(9)] = inst_16932__$1);
return statearr_16996;
})();if(inst_16933)
{var statearr_16997_17037 = state_16993__$1;(statearr_16997_17037[(1)] = (2));
} else
{var statearr_16998_17038 = state_16993__$1;(statearr_16998_17038[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (4)))
{var inst_16932 = (state_16993[(9)]);var inst_16938 = (state_16993[(2)]);var inst_16939 = cljs.core.get.call(null,inst_16938,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16940 = cljs.core.get.call(null,inst_16938,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16941 = cljs.core.get.call(null,inst_16938,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16942 = inst_16932;var state_16993__$1 = (function (){var statearr_16999 = state_16993;(statearr_16999[(7)] = inst_16942);
(statearr_16999[(10)] = inst_16941);
(statearr_16999[(11)] = inst_16940);
(statearr_16999[(12)] = inst_16939);
return statearr_16999;
})();var statearr_17000_17039 = state_16993__$1;(statearr_17000_17039[(2)] = null);
(statearr_17000_17039[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (15)))
{var state_16993__$1 = state_16993;var statearr_17001_17040 = state_16993__$1;(statearr_17001_17040[(2)] = null);
(statearr_17001_17040[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (21)))
{var state_16993__$1 = state_16993;var statearr_17002_17041 = state_16993__$1;(statearr_17002_17041[(2)] = null);
(statearr_17002_17041[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (13)))
{var inst_16989 = (state_16993[(2)]);var state_16993__$1 = state_16993;var statearr_17003_17042 = state_16993__$1;(statearr_17003_17042[(2)] = inst_16989);
(statearr_17003_17042[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (22)))
{var inst_16950 = (state_16993[(13)]);var inst_16986 = (state_16993[(2)]);var inst_16942 = inst_16950;var state_16993__$1 = (function (){var statearr_17004 = state_16993;(statearr_17004[(7)] = inst_16942);
(statearr_17004[(14)] = inst_16986);
return statearr_17004;
})();var statearr_17005_17043 = state_16993__$1;(statearr_17005_17043[(2)] = null);
(statearr_17005_17043[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (6)))
{var inst_16991 = (state_16993[(2)]);var state_16993__$1 = state_16993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16993__$1,inst_16991);
} else
{if((state_val_16994 === (17)))
{var inst_16972 = (state_16993[(15)]);var state_16993__$1 = state_16993;var statearr_17006_17044 = state_16993__$1;(statearr_17006_17044[(2)] = inst_16972);
(statearr_17006_17044[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (3)))
{var inst_16932 = (state_16993[(9)]);var state_16993__$1 = state_16993;var statearr_17007_17045 = state_16993__$1;(statearr_17007_17045[(2)] = inst_16932);
(statearr_17007_17045[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (12)))
{var inst_16953 = (state_16993[(16)]);var inst_16958 = (state_16993[(17)]);var inst_16972 = (state_16993[(15)]);var inst_16972__$1 = inst_16953.call(null,inst_16958);var state_16993__$1 = (function (){var statearr_17008 = state_16993;(statearr_17008[(15)] = inst_16972__$1);
return statearr_17008;
})();if(cljs.core.truth_(inst_16972__$1))
{var statearr_17009_17046 = state_16993__$1;(statearr_17009_17046[(1)] = (17));
} else
{var statearr_17010_17047 = state_16993__$1;(statearr_17010_17047[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (2)))
{var inst_16932 = (state_16993[(9)]);var inst_16935 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16932);var state_16993__$1 = state_16993;var statearr_17011_17048 = state_16993__$1;(statearr_17011_17048[(2)] = inst_16935);
(statearr_17011_17048[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (23)))
{var inst_16983 = (state_16993[(2)]);var state_16993__$1 = state_16993;var statearr_17012_17049 = state_16993__$1;(statearr_17012_17049[(2)] = inst_16983);
(statearr_17012_17049[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (19)))
{var inst_16980 = (state_16993[(2)]);var state_16993__$1 = state_16993;if(cljs.core.truth_(inst_16980))
{var statearr_17013_17050 = state_16993__$1;(statearr_17013_17050[(1)] = (20));
} else
{var statearr_17014_17051 = state_16993__$1;(statearr_17014_17051[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (11)))
{var inst_16957 = (state_16993[(8)]);var inst_16963 = (inst_16957 == null);var state_16993__$1 = state_16993;if(cljs.core.truth_(inst_16963))
{var statearr_17015_17052 = state_16993__$1;(statearr_17015_17052[(1)] = (14));
} else
{var statearr_17016_17053 = state_16993__$1;(statearr_17016_17053[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (9)))
{var inst_16950 = (state_16993[(13)]);var inst_16950__$1 = (state_16993[(2)]);var inst_16951 = cljs.core.get.call(null,inst_16950__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16952 = cljs.core.get.call(null,inst_16950__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16953 = cljs.core.get.call(null,inst_16950__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16993__$1 = (function (){var statearr_17017 = state_16993;(statearr_17017[(13)] = inst_16950__$1);
(statearr_17017[(16)] = inst_16953);
(statearr_17017[(18)] = inst_16952);
return statearr_17017;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16993__$1,(10),inst_16951);
} else
{if((state_val_16994 === (5)))
{var inst_16942 = (state_16993[(7)]);var inst_16945 = cljs.core.seq_QMARK_.call(null,inst_16942);var state_16993__$1 = state_16993;if(inst_16945)
{var statearr_17018_17054 = state_16993__$1;(statearr_17018_17054[(1)] = (7));
} else
{var statearr_17019_17055 = state_16993__$1;(statearr_17019_17055[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (14)))
{var inst_16958 = (state_16993[(17)]);var inst_16965 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16958);var state_16993__$1 = state_16993;var statearr_17020_17056 = state_16993__$1;(statearr_17020_17056[(2)] = inst_16965);
(statearr_17020_17056[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (16)))
{var inst_16968 = (state_16993[(2)]);var inst_16969 = calc_state.call(null);var inst_16942 = inst_16969;var state_16993__$1 = (function (){var statearr_17021 = state_16993;(statearr_17021[(7)] = inst_16942);
(statearr_17021[(19)] = inst_16968);
return statearr_17021;
})();var statearr_17022_17057 = state_16993__$1;(statearr_17022_17057[(2)] = null);
(statearr_17022_17057[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (10)))
{var inst_16958 = (state_16993[(17)]);var inst_16957 = (state_16993[(8)]);var inst_16956 = (state_16993[(2)]);var inst_16957__$1 = cljs.core.nth.call(null,inst_16956,(0),null);var inst_16958__$1 = cljs.core.nth.call(null,inst_16956,(1),null);var inst_16959 = (inst_16957__$1 == null);var inst_16960 = cljs.core._EQ_.call(null,inst_16958__$1,change);var inst_16961 = (inst_16959) || (inst_16960);var state_16993__$1 = (function (){var statearr_17023 = state_16993;(statearr_17023[(17)] = inst_16958__$1);
(statearr_17023[(8)] = inst_16957__$1);
return statearr_17023;
})();if(cljs.core.truth_(inst_16961))
{var statearr_17024_17058 = state_16993__$1;(statearr_17024_17058[(1)] = (11));
} else
{var statearr_17025_17059 = state_16993__$1;(statearr_17025_17059[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (18)))
{var inst_16953 = (state_16993[(16)]);var inst_16952 = (state_16993[(18)]);var inst_16958 = (state_16993[(17)]);var inst_16975 = cljs.core.empty_QMARK_.call(null,inst_16953);var inst_16976 = inst_16952.call(null,inst_16958);var inst_16977 = cljs.core.not.call(null,inst_16976);var inst_16978 = (inst_16975) && (inst_16977);var state_16993__$1 = state_16993;var statearr_17026_17060 = state_16993__$1;(statearr_17026_17060[(2)] = inst_16978);
(statearr_17026_17060[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16994 === (8)))
{var inst_16942 = (state_16993[(7)]);var state_16993__$1 = state_16993;var statearr_17027_17061 = state_16993__$1;(statearr_17027_17061[(2)] = inst_16942);
(statearr_17027_17061[(1)] = (9));
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
});})(c__5708__auto___17035,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___17035,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17031[(0)] = state_machine__5694__auto__);
(statearr_17031[(1)] = (1));
return statearr_17031;
});
var state_machine__5694__auto____1 = (function (state_16993){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16993);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17032){if((e17032 instanceof Object))
{var ex__5697__auto__ = e17032;var statearr_17033_17062 = state_16993;(statearr_17033_17062[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16993);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17032;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17063 = state_16993;
state_16993 = G__17063;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16993){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17035,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_17034 = f__5709__auto__.call(null);(statearr_17034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17035);
return statearr_17034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17035,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj17065 = {};return obj17065;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
return (function (topic){var or__3558__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3558__auto__,mults){
return (function (p1__17066_SHARP_){if(cljs.core.truth_(p1__17066_SHARP_.call(null,topic)))
{return p1__17066_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17066_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17191 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17191 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17192){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17192 = meta17192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17191.cljs$lang$type = true;
cljs.core.async.t17191.cljs$lang$ctorStr = "cljs.core.async/t17191";
cljs.core.async.t17191.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t17191");
});})(mults,ensure_mult))
;
cljs.core.async.t17191.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17191.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17191.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17191.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17193){var self__ = this;
var _17193__$1 = this;return self__.meta17192;
});})(mults,ensure_mult))
;
cljs.core.async.t17191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17193,meta17192__$1){var self__ = this;
var _17193__$1 = this;return (new cljs.core.async.t17191(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17192__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17191 = ((function (mults,ensure_mult){
return (function __GT_t17191(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17192){return (new cljs.core.async.t17191(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17192));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17191(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___17315 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17315,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17315,mults,ensure_mult,p){
return (function (state_17267){var state_val_17268 = (state_17267[(1)]);if((state_val_17268 === (7)))
{var inst_17263 = (state_17267[(2)]);var state_17267__$1 = state_17267;var statearr_17269_17316 = state_17267__$1;(statearr_17269_17316[(2)] = inst_17263);
(statearr_17269_17316[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (20)))
{var state_17267__$1 = state_17267;var statearr_17270_17317 = state_17267__$1;(statearr_17270_17317[(2)] = null);
(statearr_17270_17317[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (1)))
{var state_17267__$1 = state_17267;var statearr_17271_17318 = state_17267__$1;(statearr_17271_17318[(2)] = null);
(statearr_17271_17318[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (24)))
{var inst_17196 = (state_17267[(7)]);var inst_17246 = (state_17267[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17267,(23),Object,null,(22));var inst_17253 = cljs.core.async.muxch_STAR_.call(null,inst_17246);var state_17267__$1 = state_17267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17267__$1,(25),inst_17253,inst_17196);
} else
{if((state_val_17268 === (4)))
{var inst_17196 = (state_17267[(7)]);var inst_17196__$1 = (state_17267[(2)]);var inst_17197 = (inst_17196__$1 == null);var state_17267__$1 = (function (){var statearr_17272 = state_17267;(statearr_17272[(7)] = inst_17196__$1);
return statearr_17272;
})();if(cljs.core.truth_(inst_17197))
{var statearr_17273_17319 = state_17267__$1;(statearr_17273_17319[(1)] = (5));
} else
{var statearr_17274_17320 = state_17267__$1;(statearr_17274_17320[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (15)))
{var inst_17238 = (state_17267[(2)]);var state_17267__$1 = state_17267;var statearr_17275_17321 = state_17267__$1;(statearr_17275_17321[(2)] = inst_17238);
(statearr_17275_17321[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (21)))
{var inst_17260 = (state_17267[(2)]);var state_17267__$1 = (function (){var statearr_17276 = state_17267;(statearr_17276[(9)] = inst_17260);
return statearr_17276;
})();var statearr_17277_17322 = state_17267__$1;(statearr_17277_17322[(2)] = null);
(statearr_17277_17322[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (13)))
{var inst_17220 = (state_17267[(10)]);var inst_17222 = cljs.core.chunked_seq_QMARK_.call(null,inst_17220);var state_17267__$1 = state_17267;if(inst_17222)
{var statearr_17278_17323 = state_17267__$1;(statearr_17278_17323[(1)] = (16));
} else
{var statearr_17279_17324 = state_17267__$1;(statearr_17279_17324[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (22)))
{var inst_17257 = (state_17267[(2)]);var state_17267__$1 = state_17267;var statearr_17280_17325 = state_17267__$1;(statearr_17280_17325[(2)] = inst_17257);
(statearr_17280_17325[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (6)))
{var inst_17196 = (state_17267[(7)]);var inst_17246 = (state_17267[(8)]);var inst_17244 = (state_17267[(11)]);var inst_17244__$1 = topic_fn.call(null,inst_17196);var inst_17245 = cljs.core.deref.call(null,mults);var inst_17246__$1 = cljs.core.get.call(null,inst_17245,inst_17244__$1);var state_17267__$1 = (function (){var statearr_17281 = state_17267;(statearr_17281[(8)] = inst_17246__$1);
(statearr_17281[(11)] = inst_17244__$1);
return statearr_17281;
})();if(cljs.core.truth_(inst_17246__$1))
{var statearr_17282_17326 = state_17267__$1;(statearr_17282_17326[(1)] = (19));
} else
{var statearr_17283_17327 = state_17267__$1;(statearr_17283_17327[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (25)))
{var inst_17255 = (state_17267[(2)]);var state_17267__$1 = state_17267;var statearr_17284_17328 = state_17267__$1;(statearr_17284_17328[(2)] = inst_17255);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17267__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (17)))
{var inst_17220 = (state_17267[(10)]);var inst_17229 = cljs.core.first.call(null,inst_17220);var inst_17230 = cljs.core.async.muxch_STAR_.call(null,inst_17229);var inst_17231 = cljs.core.async.close_BANG_.call(null,inst_17230);var inst_17232 = cljs.core.next.call(null,inst_17220);var inst_17206 = inst_17232;var inst_17207 = null;var inst_17208 = (0);var inst_17209 = (0);var state_17267__$1 = (function (){var statearr_17285 = state_17267;(statearr_17285[(12)] = inst_17231);
(statearr_17285[(13)] = inst_17209);
(statearr_17285[(14)] = inst_17206);
(statearr_17285[(15)] = inst_17207);
(statearr_17285[(16)] = inst_17208);
return statearr_17285;
})();var statearr_17286_17329 = state_17267__$1;(statearr_17286_17329[(2)] = null);
(statearr_17286_17329[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (3)))
{var inst_17265 = (state_17267[(2)]);var state_17267__$1 = state_17267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17267__$1,inst_17265);
} else
{if((state_val_17268 === (12)))
{var inst_17240 = (state_17267[(2)]);var state_17267__$1 = state_17267;var statearr_17287_17330 = state_17267__$1;(statearr_17287_17330[(2)] = inst_17240);
(statearr_17287_17330[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (2)))
{var state_17267__$1 = state_17267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17267__$1,(4),ch);
} else
{if((state_val_17268 === (23)))
{var inst_17244 = (state_17267[(11)]);var inst_17248 = (state_17267[(2)]);var inst_17249 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17244);var state_17267__$1 = (function (){var statearr_17288 = state_17267;(statearr_17288[(17)] = inst_17248);
return statearr_17288;
})();var statearr_17289_17331 = state_17267__$1;(statearr_17289_17331[(2)] = inst_17249);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17267__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (19)))
{var state_17267__$1 = state_17267;var statearr_17290_17332 = state_17267__$1;(statearr_17290_17332[(2)] = null);
(statearr_17290_17332[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (11)))
{var inst_17206 = (state_17267[(14)]);var inst_17220 = (state_17267[(10)]);var inst_17220__$1 = cljs.core.seq.call(null,inst_17206);var state_17267__$1 = (function (){var statearr_17291 = state_17267;(statearr_17291[(10)] = inst_17220__$1);
return statearr_17291;
})();if(inst_17220__$1)
{var statearr_17292_17333 = state_17267__$1;(statearr_17292_17333[(1)] = (13));
} else
{var statearr_17293_17334 = state_17267__$1;(statearr_17293_17334[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (9)))
{var inst_17242 = (state_17267[(2)]);var state_17267__$1 = state_17267;var statearr_17294_17335 = state_17267__$1;(statearr_17294_17335[(2)] = inst_17242);
(statearr_17294_17335[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (5)))
{var inst_17203 = cljs.core.deref.call(null,mults);var inst_17204 = cljs.core.vals.call(null,inst_17203);var inst_17205 = cljs.core.seq.call(null,inst_17204);var inst_17206 = inst_17205;var inst_17207 = null;var inst_17208 = (0);var inst_17209 = (0);var state_17267__$1 = (function (){var statearr_17295 = state_17267;(statearr_17295[(13)] = inst_17209);
(statearr_17295[(14)] = inst_17206);
(statearr_17295[(15)] = inst_17207);
(statearr_17295[(16)] = inst_17208);
return statearr_17295;
})();var statearr_17296_17336 = state_17267__$1;(statearr_17296_17336[(2)] = null);
(statearr_17296_17336[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (14)))
{var state_17267__$1 = state_17267;var statearr_17300_17337 = state_17267__$1;(statearr_17300_17337[(2)] = null);
(statearr_17300_17337[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (16)))
{var inst_17220 = (state_17267[(10)]);var inst_17224 = cljs.core.chunk_first.call(null,inst_17220);var inst_17225 = cljs.core.chunk_rest.call(null,inst_17220);var inst_17226 = cljs.core.count.call(null,inst_17224);var inst_17206 = inst_17225;var inst_17207 = inst_17224;var inst_17208 = inst_17226;var inst_17209 = (0);var state_17267__$1 = (function (){var statearr_17301 = state_17267;(statearr_17301[(13)] = inst_17209);
(statearr_17301[(14)] = inst_17206);
(statearr_17301[(15)] = inst_17207);
(statearr_17301[(16)] = inst_17208);
return statearr_17301;
})();var statearr_17302_17338 = state_17267__$1;(statearr_17302_17338[(2)] = null);
(statearr_17302_17338[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (10)))
{var inst_17209 = (state_17267[(13)]);var inst_17206 = (state_17267[(14)]);var inst_17207 = (state_17267[(15)]);var inst_17208 = (state_17267[(16)]);var inst_17214 = cljs.core._nth.call(null,inst_17207,inst_17209);var inst_17215 = cljs.core.async.muxch_STAR_.call(null,inst_17214);var inst_17216 = cljs.core.async.close_BANG_.call(null,inst_17215);var inst_17217 = (inst_17209 + (1));var tmp17297 = inst_17206;var tmp17298 = inst_17207;var tmp17299 = inst_17208;var inst_17206__$1 = tmp17297;var inst_17207__$1 = tmp17298;var inst_17208__$1 = tmp17299;var inst_17209__$1 = inst_17217;var state_17267__$1 = (function (){var statearr_17303 = state_17267;(statearr_17303[(13)] = inst_17209__$1);
(statearr_17303[(14)] = inst_17206__$1);
(statearr_17303[(15)] = inst_17207__$1);
(statearr_17303[(16)] = inst_17208__$1);
(statearr_17303[(18)] = inst_17216);
return statearr_17303;
})();var statearr_17304_17339 = state_17267__$1;(statearr_17304_17339[(2)] = null);
(statearr_17304_17339[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (18)))
{var inst_17235 = (state_17267[(2)]);var state_17267__$1 = state_17267;var statearr_17305_17340 = state_17267__$1;(statearr_17305_17340[(2)] = inst_17235);
(statearr_17305_17340[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (8)))
{var inst_17209 = (state_17267[(13)]);var inst_17208 = (state_17267[(16)]);var inst_17211 = (inst_17209 < inst_17208);var inst_17212 = inst_17211;var state_17267__$1 = state_17267;if(cljs.core.truth_(inst_17212))
{var statearr_17306_17341 = state_17267__$1;(statearr_17306_17341[(1)] = (10));
} else
{var statearr_17307_17342 = state_17267__$1;(statearr_17307_17342[(1)] = (11));
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
});})(c__5708__auto___17315,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___17315,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17311[(0)] = state_machine__5694__auto__);
(statearr_17311[(1)] = (1));
return statearr_17311;
});
var state_machine__5694__auto____1 = (function (state_17267){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17267);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17312){if((e17312 instanceof Object))
{var ex__5697__auto__ = e17312;var statearr_17313_17343 = state_17267;(statearr_17313_17343[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17312;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17344 = state_17267;
state_17267 = G__17344;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17267){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17315,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_17314 = f__5709__auto__.call(null);(statearr_17314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17315);
return statearr_17314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17315,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___17481 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17451){var state_val_17452 = (state_17451[(1)]);if((state_val_17452 === (7)))
{var state_17451__$1 = state_17451;var statearr_17453_17482 = state_17451__$1;(statearr_17453_17482[(2)] = null);
(statearr_17453_17482[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (1)))
{var state_17451__$1 = state_17451;var statearr_17454_17483 = state_17451__$1;(statearr_17454_17483[(2)] = null);
(statearr_17454_17483[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (4)))
{var inst_17415 = (state_17451[(7)]);var inst_17417 = (inst_17415 < cnt);var state_17451__$1 = state_17451;if(cljs.core.truth_(inst_17417))
{var statearr_17455_17484 = state_17451__$1;(statearr_17455_17484[(1)] = (6));
} else
{var statearr_17456_17485 = state_17451__$1;(statearr_17456_17485[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (15)))
{var inst_17447 = (state_17451[(2)]);var state_17451__$1 = state_17451;var statearr_17457_17486 = state_17451__$1;(statearr_17457_17486[(2)] = inst_17447);
(statearr_17457_17486[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (13)))
{var inst_17440 = cljs.core.async.close_BANG_.call(null,out);var state_17451__$1 = state_17451;var statearr_17458_17487 = state_17451__$1;(statearr_17458_17487[(2)] = inst_17440);
(statearr_17458_17487[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (6)))
{var state_17451__$1 = state_17451;var statearr_17459_17488 = state_17451__$1;(statearr_17459_17488[(2)] = null);
(statearr_17459_17488[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (3)))
{var inst_17449 = (state_17451[(2)]);var state_17451__$1 = state_17451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17451__$1,inst_17449);
} else
{if((state_val_17452 === (12)))
{var inst_17437 = (state_17451[(8)]);var inst_17437__$1 = (state_17451[(2)]);var inst_17438 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17437__$1);var state_17451__$1 = (function (){var statearr_17460 = state_17451;(statearr_17460[(8)] = inst_17437__$1);
return statearr_17460;
})();if(cljs.core.truth_(inst_17438))
{var statearr_17461_17489 = state_17451__$1;(statearr_17461_17489[(1)] = (13));
} else
{var statearr_17462_17490 = state_17451__$1;(statearr_17462_17490[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (2)))
{var inst_17414 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17415 = (0);var state_17451__$1 = (function (){var statearr_17463 = state_17451;(statearr_17463[(7)] = inst_17415);
(statearr_17463[(9)] = inst_17414);
return statearr_17463;
})();var statearr_17464_17491 = state_17451__$1;(statearr_17464_17491[(2)] = null);
(statearr_17464_17491[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (11)))
{var inst_17415 = (state_17451[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17451,(10),Object,null,(9));var inst_17424 = chs__$1.call(null,inst_17415);var inst_17425 = done.call(null,inst_17415);var inst_17426 = cljs.core.async.take_BANG_.call(null,inst_17424,inst_17425);var state_17451__$1 = state_17451;var statearr_17465_17492 = state_17451__$1;(statearr_17465_17492[(2)] = inst_17426);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17451__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (9)))
{var inst_17415 = (state_17451[(7)]);var inst_17428 = (state_17451[(2)]);var inst_17429 = (inst_17415 + (1));var inst_17415__$1 = inst_17429;var state_17451__$1 = (function (){var statearr_17466 = state_17451;(statearr_17466[(10)] = inst_17428);
(statearr_17466[(7)] = inst_17415__$1);
return statearr_17466;
})();var statearr_17467_17493 = state_17451__$1;(statearr_17467_17493[(2)] = null);
(statearr_17467_17493[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (5)))
{var inst_17435 = (state_17451[(2)]);var state_17451__$1 = (function (){var statearr_17468 = state_17451;(statearr_17468[(11)] = inst_17435);
return statearr_17468;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17451__$1,(12),dchan);
} else
{if((state_val_17452 === (14)))
{var inst_17437 = (state_17451[(8)]);var inst_17442 = cljs.core.apply.call(null,f,inst_17437);var state_17451__$1 = state_17451;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17451__$1,(16),out,inst_17442);
} else
{if((state_val_17452 === (16)))
{var inst_17444 = (state_17451[(2)]);var state_17451__$1 = (function (){var statearr_17469 = state_17451;(statearr_17469[(12)] = inst_17444);
return statearr_17469;
})();var statearr_17470_17494 = state_17451__$1;(statearr_17470_17494[(2)] = null);
(statearr_17470_17494[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (10)))
{var inst_17419 = (state_17451[(2)]);var inst_17420 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17451__$1 = (function (){var statearr_17471 = state_17451;(statearr_17471[(13)] = inst_17419);
return statearr_17471;
})();var statearr_17472_17495 = state_17451__$1;(statearr_17472_17495[(2)] = inst_17420);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17451__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17452 === (8)))
{var inst_17433 = (state_17451[(2)]);var state_17451__$1 = state_17451;var statearr_17473_17496 = state_17451__$1;(statearr_17473_17496[(2)] = inst_17433);
(statearr_17473_17496[(1)] = (5));
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
});})(c__5708__auto___17481,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___17481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17477[(0)] = state_machine__5694__auto__);
(statearr_17477[(1)] = (1));
return statearr_17477;
});
var state_machine__5694__auto____1 = (function (state_17451){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17451);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17478){if((e17478 instanceof Object))
{var ex__5697__auto__ = e17478;var statearr_17479_17497 = state_17451;(statearr_17479_17497[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17451);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17478;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17498 = state_17451;
state_17451 = G__17498;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17451){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17481,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_17480 = f__5709__auto__.call(null);(statearr_17480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17481);
return statearr_17480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17481,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17606 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17606,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17606,out){
return (function (state_17582){var state_val_17583 = (state_17582[(1)]);if((state_val_17583 === (7)))
{var inst_17562 = (state_17582[(7)]);var inst_17561 = (state_17582[(8)]);var inst_17561__$1 = (state_17582[(2)]);var inst_17562__$1 = cljs.core.nth.call(null,inst_17561__$1,(0),null);var inst_17563 = cljs.core.nth.call(null,inst_17561__$1,(1),null);var inst_17564 = (inst_17562__$1 == null);var state_17582__$1 = (function (){var statearr_17584 = state_17582;(statearr_17584[(9)] = inst_17563);
(statearr_17584[(7)] = inst_17562__$1);
(statearr_17584[(8)] = inst_17561__$1);
return statearr_17584;
})();if(cljs.core.truth_(inst_17564))
{var statearr_17585_17607 = state_17582__$1;(statearr_17585_17607[(1)] = (8));
} else
{var statearr_17586_17608 = state_17582__$1;(statearr_17586_17608[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17583 === (1)))
{var inst_17553 = cljs.core.vec.call(null,chs);var inst_17554 = inst_17553;var state_17582__$1 = (function (){var statearr_17587 = state_17582;(statearr_17587[(10)] = inst_17554);
return statearr_17587;
})();var statearr_17588_17609 = state_17582__$1;(statearr_17588_17609[(2)] = null);
(statearr_17588_17609[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17583 === (4)))
{var inst_17554 = (state_17582[(10)]);var state_17582__$1 = state_17582;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17582__$1,(7),inst_17554);
} else
{if((state_val_17583 === (6)))
{var inst_17578 = (state_17582[(2)]);var state_17582__$1 = state_17582;var statearr_17589_17610 = state_17582__$1;(statearr_17589_17610[(2)] = inst_17578);
(statearr_17589_17610[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17583 === (3)))
{var inst_17580 = (state_17582[(2)]);var state_17582__$1 = state_17582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17582__$1,inst_17580);
} else
{if((state_val_17583 === (2)))
{var inst_17554 = (state_17582[(10)]);var inst_17556 = cljs.core.count.call(null,inst_17554);var inst_17557 = (inst_17556 > (0));var state_17582__$1 = state_17582;if(cljs.core.truth_(inst_17557))
{var statearr_17591_17611 = state_17582__$1;(statearr_17591_17611[(1)] = (4));
} else
{var statearr_17592_17612 = state_17582__$1;(statearr_17592_17612[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17583 === (11)))
{var inst_17554 = (state_17582[(10)]);var inst_17571 = (state_17582[(2)]);var tmp17590 = inst_17554;var inst_17554__$1 = tmp17590;var state_17582__$1 = (function (){var statearr_17593 = state_17582;(statearr_17593[(10)] = inst_17554__$1);
(statearr_17593[(11)] = inst_17571);
return statearr_17593;
})();var statearr_17594_17613 = state_17582__$1;(statearr_17594_17613[(2)] = null);
(statearr_17594_17613[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17583 === (9)))
{var inst_17562 = (state_17582[(7)]);var state_17582__$1 = state_17582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17582__$1,(11),out,inst_17562);
} else
{if((state_val_17583 === (5)))
{var inst_17576 = cljs.core.async.close_BANG_.call(null,out);var state_17582__$1 = state_17582;var statearr_17595_17614 = state_17582__$1;(statearr_17595_17614[(2)] = inst_17576);
(statearr_17595_17614[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17583 === (10)))
{var inst_17574 = (state_17582[(2)]);var state_17582__$1 = state_17582;var statearr_17596_17615 = state_17582__$1;(statearr_17596_17615[(2)] = inst_17574);
(statearr_17596_17615[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17583 === (8)))
{var inst_17563 = (state_17582[(9)]);var inst_17554 = (state_17582[(10)]);var inst_17562 = (state_17582[(7)]);var inst_17561 = (state_17582[(8)]);var inst_17566 = (function (){var c = inst_17563;var v = inst_17562;var vec__17559 = inst_17561;var cs = inst_17554;return ((function (c,v,vec__17559,cs,inst_17563,inst_17554,inst_17562,inst_17561,state_val_17583,c__5708__auto___17606,out){
return (function (p1__17499_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17499_SHARP_);
});
;})(c,v,vec__17559,cs,inst_17563,inst_17554,inst_17562,inst_17561,state_val_17583,c__5708__auto___17606,out))
})();var inst_17567 = cljs.core.filterv.call(null,inst_17566,inst_17554);var inst_17554__$1 = inst_17567;var state_17582__$1 = (function (){var statearr_17597 = state_17582;(statearr_17597[(10)] = inst_17554__$1);
return statearr_17597;
})();var statearr_17598_17616 = state_17582__$1;(statearr_17598_17616[(2)] = null);
(statearr_17598_17616[(1)] = (2));
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
});})(c__5708__auto___17606,out))
;return ((function (switch__5693__auto__,c__5708__auto___17606,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17602 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17602[(0)] = state_machine__5694__auto__);
(statearr_17602[(1)] = (1));
return statearr_17602;
});
var state_machine__5694__auto____1 = (function (state_17582){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17582);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17603){if((e17603 instanceof Object))
{var ex__5697__auto__ = e17603;var statearr_17604_17617 = state_17582;(statearr_17604_17617[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17582);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17603;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17618 = state_17582;
state_17582 = G__17618;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17582){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17606,out))
})();var state__5710__auto__ = (function (){var statearr_17605 = f__5709__auto__.call(null);(statearr_17605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17606);
return statearr_17605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17606,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17711 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17711,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17711,out){
return (function (state_17688){var state_val_17689 = (state_17688[(1)]);if((state_val_17689 === (7)))
{var inst_17670 = (state_17688[(7)]);var inst_17670__$1 = (state_17688[(2)]);var inst_17671 = (inst_17670__$1 == null);var inst_17672 = cljs.core.not.call(null,inst_17671);var state_17688__$1 = (function (){var statearr_17690 = state_17688;(statearr_17690[(7)] = inst_17670__$1);
return statearr_17690;
})();if(inst_17672)
{var statearr_17691_17712 = state_17688__$1;(statearr_17691_17712[(1)] = (8));
} else
{var statearr_17692_17713 = state_17688__$1;(statearr_17692_17713[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (1)))
{var inst_17665 = (0);var state_17688__$1 = (function (){var statearr_17693 = state_17688;(statearr_17693[(8)] = inst_17665);
return statearr_17693;
})();var statearr_17694_17714 = state_17688__$1;(statearr_17694_17714[(2)] = null);
(statearr_17694_17714[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (4)))
{var state_17688__$1 = state_17688;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17688__$1,(7),ch);
} else
{if((state_val_17689 === (6)))
{var inst_17683 = (state_17688[(2)]);var state_17688__$1 = state_17688;var statearr_17695_17715 = state_17688__$1;(statearr_17695_17715[(2)] = inst_17683);
(statearr_17695_17715[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (3)))
{var inst_17685 = (state_17688[(2)]);var inst_17686 = cljs.core.async.close_BANG_.call(null,out);var state_17688__$1 = (function (){var statearr_17696 = state_17688;(statearr_17696[(9)] = inst_17685);
return statearr_17696;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17688__$1,inst_17686);
} else
{if((state_val_17689 === (2)))
{var inst_17665 = (state_17688[(8)]);var inst_17667 = (inst_17665 < n);var state_17688__$1 = state_17688;if(cljs.core.truth_(inst_17667))
{var statearr_17697_17716 = state_17688__$1;(statearr_17697_17716[(1)] = (4));
} else
{var statearr_17698_17717 = state_17688__$1;(statearr_17698_17717[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (11)))
{var inst_17665 = (state_17688[(8)]);var inst_17675 = (state_17688[(2)]);var inst_17676 = (inst_17665 + (1));var inst_17665__$1 = inst_17676;var state_17688__$1 = (function (){var statearr_17699 = state_17688;(statearr_17699[(10)] = inst_17675);
(statearr_17699[(8)] = inst_17665__$1);
return statearr_17699;
})();var statearr_17700_17718 = state_17688__$1;(statearr_17700_17718[(2)] = null);
(statearr_17700_17718[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (9)))
{var state_17688__$1 = state_17688;var statearr_17701_17719 = state_17688__$1;(statearr_17701_17719[(2)] = null);
(statearr_17701_17719[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (5)))
{var state_17688__$1 = state_17688;var statearr_17702_17720 = state_17688__$1;(statearr_17702_17720[(2)] = null);
(statearr_17702_17720[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (10)))
{var inst_17680 = (state_17688[(2)]);var state_17688__$1 = state_17688;var statearr_17703_17721 = state_17688__$1;(statearr_17703_17721[(2)] = inst_17680);
(statearr_17703_17721[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17689 === (8)))
{var inst_17670 = (state_17688[(7)]);var state_17688__$1 = state_17688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17688__$1,(11),out,inst_17670);
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
});})(c__5708__auto___17711,out))
;return ((function (switch__5693__auto__,c__5708__auto___17711,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17707 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17707[(0)] = state_machine__5694__auto__);
(statearr_17707[(1)] = (1));
return statearr_17707;
});
var state_machine__5694__auto____1 = (function (state_17688){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17688);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17708){if((e17708 instanceof Object))
{var ex__5697__auto__ = e17708;var statearr_17709_17722 = state_17688;(statearr_17709_17722[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17688);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17708;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17723 = state_17688;
state_17688 = G__17723;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17688){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17711,out))
})();var state__5710__auto__ = (function (){var statearr_17710 = f__5709__auto__.call(null);(statearr_17710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17711);
return statearr_17710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17711,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17820 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17820,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17820,out){
return (function (state_17795){var state_val_17796 = (state_17795[(1)]);if((state_val_17796 === (7)))
{var inst_17790 = (state_17795[(2)]);var state_17795__$1 = state_17795;var statearr_17797_17821 = state_17795__$1;(statearr_17797_17821[(2)] = inst_17790);
(statearr_17797_17821[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17796 === (1)))
{var inst_17772 = null;var state_17795__$1 = (function (){var statearr_17798 = state_17795;(statearr_17798[(7)] = inst_17772);
return statearr_17798;
})();var statearr_17799_17822 = state_17795__$1;(statearr_17799_17822[(2)] = null);
(statearr_17799_17822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17796 === (4)))
{var inst_17775 = (state_17795[(8)]);var inst_17775__$1 = (state_17795[(2)]);var inst_17776 = (inst_17775__$1 == null);var inst_17777 = cljs.core.not.call(null,inst_17776);var state_17795__$1 = (function (){var statearr_17800 = state_17795;(statearr_17800[(8)] = inst_17775__$1);
return statearr_17800;
})();if(inst_17777)
{var statearr_17801_17823 = state_17795__$1;(statearr_17801_17823[(1)] = (5));
} else
{var statearr_17802_17824 = state_17795__$1;(statearr_17802_17824[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17796 === (6)))
{var state_17795__$1 = state_17795;var statearr_17803_17825 = state_17795__$1;(statearr_17803_17825[(2)] = null);
(statearr_17803_17825[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17796 === (3)))
{var inst_17792 = (state_17795[(2)]);var inst_17793 = cljs.core.async.close_BANG_.call(null,out);var state_17795__$1 = (function (){var statearr_17804 = state_17795;(statearr_17804[(9)] = inst_17792);
return statearr_17804;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17795__$1,inst_17793);
} else
{if((state_val_17796 === (2)))
{var state_17795__$1 = state_17795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17795__$1,(4),ch);
} else
{if((state_val_17796 === (11)))
{var inst_17775 = (state_17795[(8)]);var inst_17784 = (state_17795[(2)]);var inst_17772 = inst_17775;var state_17795__$1 = (function (){var statearr_17805 = state_17795;(statearr_17805[(7)] = inst_17772);
(statearr_17805[(10)] = inst_17784);
return statearr_17805;
})();var statearr_17806_17826 = state_17795__$1;(statearr_17806_17826[(2)] = null);
(statearr_17806_17826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17796 === (9)))
{var inst_17775 = (state_17795[(8)]);var state_17795__$1 = state_17795;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17795__$1,(11),out,inst_17775);
} else
{if((state_val_17796 === (5)))
{var inst_17772 = (state_17795[(7)]);var inst_17775 = (state_17795[(8)]);var inst_17779 = cljs.core._EQ_.call(null,inst_17775,inst_17772);var state_17795__$1 = state_17795;if(inst_17779)
{var statearr_17808_17827 = state_17795__$1;(statearr_17808_17827[(1)] = (8));
} else
{var statearr_17809_17828 = state_17795__$1;(statearr_17809_17828[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17796 === (10)))
{var inst_17787 = (state_17795[(2)]);var state_17795__$1 = state_17795;var statearr_17810_17829 = state_17795__$1;(statearr_17810_17829[(2)] = inst_17787);
(statearr_17810_17829[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17796 === (8)))
{var inst_17772 = (state_17795[(7)]);var tmp17807 = inst_17772;var inst_17772__$1 = tmp17807;var state_17795__$1 = (function (){var statearr_17811 = state_17795;(statearr_17811[(7)] = inst_17772__$1);
return statearr_17811;
})();var statearr_17812_17830 = state_17795__$1;(statearr_17812_17830[(2)] = null);
(statearr_17812_17830[(1)] = (2));
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
});})(c__5708__auto___17820,out))
;return ((function (switch__5693__auto__,c__5708__auto___17820,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17816 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17816[(0)] = state_machine__5694__auto__);
(statearr_17816[(1)] = (1));
return statearr_17816;
});
var state_machine__5694__auto____1 = (function (state_17795){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17795);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17817){if((e17817 instanceof Object))
{var ex__5697__auto__ = e17817;var statearr_17818_17831 = state_17795;(statearr_17818_17831[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17795);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17817;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17832 = state_17795;
state_17795 = G__17832;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17795){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17820,out))
})();var state__5710__auto__ = (function (){var statearr_17819 = f__5709__auto__.call(null);(statearr_17819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17820);
return statearr_17819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17820,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17967 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17967,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17967,out){
return (function (state_17937){var state_val_17938 = (state_17937[(1)]);if((state_val_17938 === (7)))
{var inst_17933 = (state_17937[(2)]);var state_17937__$1 = state_17937;var statearr_17939_17968 = state_17937__$1;(statearr_17939_17968[(2)] = inst_17933);
(statearr_17939_17968[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17938 === (1)))
{var inst_17900 = (new Array(n));var inst_17901 = inst_17900;var inst_17902 = (0);var state_17937__$1 = (function (){var statearr_17940 = state_17937;(statearr_17940[(7)] = inst_17902);
(statearr_17940[(8)] = inst_17901);
return statearr_17940;
})();var statearr_17941_17969 = state_17937__$1;(statearr_17941_17969[(2)] = null);
(statearr_17941_17969[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17938 === (4)))
{var inst_17905 = (state_17937[(9)]);var inst_17905__$1 = (state_17937[(2)]);var inst_17906 = (inst_17905__$1 == null);var inst_17907 = cljs.core.not.call(null,inst_17906);var state_17937__$1 = (function (){var statearr_17942 = state_17937;(statearr_17942[(9)] = inst_17905__$1);
return statearr_17942;
})();if(inst_17907)
{var statearr_17943_17970 = state_17937__$1;(statearr_17943_17970[(1)] = (5));
} else
{var statearr_17944_17971 = state_17937__$1;(statearr_17944_17971[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17938 === (15)))
{var inst_17927 = (state_17937[(2)]);var state_17937__$1 = state_17937;var statearr_17945_17972 = state_17937__$1;(statearr_17945_17972[(2)] = inst_17927);
(statearr_17945_17972[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17938 === (13)))
{var state_17937__$1 = state_17937;var statearr_17946_17973 = state_17937__$1;(statearr_17946_17973[(2)] = null);
(statearr_17946_17973[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17938 === (6)))
{var inst_17902 = (state_17937[(7)]);var inst_17923 = (inst_17902 > (0));var state_17937__$1 = state_17937;if(cljs.core.truth_(inst_17923))
{var statearr_17947_17974 = state_17937__$1;(statearr_17947_17974[(1)] = (12));
} else
{var statearr_17948_17975 = state_17937__$1;(statearr_17948_17975[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17938 === (3)))
{var inst_17935 = (state_17937[(2)]);var state_17937__$1 = state_17937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17937__$1,inst_17935);
} else
{if((state_val_17938 === (12)))
{var inst_17901 = (state_17937[(8)]);var inst_17925 = cljs.core.vec.call(null,inst_17901);var state_17937__$1 = state_17937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17937__$1,(15),out,inst_17925);
} else
{if((state_val_17938 === (2)))
{var state_17937__$1 = state_17937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17937__$1,(4),ch);
} else
{if((state_val_17938 === (11)))
{var inst_17917 = (state_17937[(2)]);var inst_17918 = (new Array(n));var inst_17901 = inst_17918;var inst_17902 = (0);var state_17937__$1 = (function (){var statearr_17949 = state_17937;(statearr_17949[(7)] = inst_17902);
(statearr_17949[(8)] = inst_17901);
(statearr_17949[(10)] = inst_17917);
return statearr_17949;
})();var statearr_17950_17976 = state_17937__$1;(statearr_17950_17976[(2)] = null);
(statearr_17950_17976[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17938 === (9)))
{var inst_17901 = (state_17937[(8)]);var inst_17915 = cljs.core.vec.call(null,inst_17901);var state_17937__$1 = state_17937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17937__$1,(11),out,inst_17915);
} else
{if((state_val_17938 === (5)))
{var inst_17902 = (state_17937[(7)]);var inst_17910 = (state_17937[(11)]);var inst_17901 = (state_17937[(8)]);var inst_17905 = (state_17937[(9)]);var inst_17909 = (inst_17901[inst_17902] = inst_17905);var inst_17910__$1 = (inst_17902 + (1));var inst_17911 = (inst_17910__$1 < n);var state_17937__$1 = (function (){var statearr_17951 = state_17937;(statearr_17951[(11)] = inst_17910__$1);
(statearr_17951[(12)] = inst_17909);
return statearr_17951;
})();if(cljs.core.truth_(inst_17911))
{var statearr_17952_17977 = state_17937__$1;(statearr_17952_17977[(1)] = (8));
} else
{var statearr_17953_17978 = state_17937__$1;(statearr_17953_17978[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17938 === (14)))
{var inst_17930 = (state_17937[(2)]);var inst_17931 = cljs.core.async.close_BANG_.call(null,out);var state_17937__$1 = (function (){var statearr_17955 = state_17937;(statearr_17955[(13)] = inst_17930);
return statearr_17955;
})();var statearr_17956_17979 = state_17937__$1;(statearr_17956_17979[(2)] = inst_17931);
(statearr_17956_17979[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17938 === (10)))
{var inst_17921 = (state_17937[(2)]);var state_17937__$1 = state_17937;var statearr_17957_17980 = state_17937__$1;(statearr_17957_17980[(2)] = inst_17921);
(statearr_17957_17980[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17938 === (8)))
{var inst_17910 = (state_17937[(11)]);var inst_17901 = (state_17937[(8)]);var tmp17954 = inst_17901;var inst_17901__$1 = tmp17954;var inst_17902 = inst_17910;var state_17937__$1 = (function (){var statearr_17958 = state_17937;(statearr_17958[(7)] = inst_17902);
(statearr_17958[(8)] = inst_17901__$1);
return statearr_17958;
})();var statearr_17959_17981 = state_17937__$1;(statearr_17959_17981[(2)] = null);
(statearr_17959_17981[(1)] = (2));
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
});})(c__5708__auto___17967,out))
;return ((function (switch__5693__auto__,c__5708__auto___17967,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17963[(0)] = state_machine__5694__auto__);
(statearr_17963[(1)] = (1));
return statearr_17963;
});
var state_machine__5694__auto____1 = (function (state_17937){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17937);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17964){if((e17964 instanceof Object))
{var ex__5697__auto__ = e17964;var statearr_17965_17982 = state_17937;(statearr_17965_17982[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17937);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17964;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17983 = state_17937;
state_17937 = G__17983;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17937){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17967,out))
})();var state__5710__auto__ = (function (){var statearr_17966 = f__5709__auto__.call(null);(statearr_17966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17967);
return statearr_17966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17967,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___18126 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18126,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18126,out){
return (function (state_18096){var state_val_18097 = (state_18096[(1)]);if((state_val_18097 === (7)))
{var inst_18092 = (state_18096[(2)]);var state_18096__$1 = state_18096;var statearr_18098_18127 = state_18096__$1;(statearr_18098_18127[(2)] = inst_18092);
(statearr_18098_18127[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18097 === (1)))
{var inst_18055 = [];var inst_18056 = inst_18055;var inst_18057 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_18096__$1 = (function (){var statearr_18099 = state_18096;(statearr_18099[(7)] = inst_18057);
(statearr_18099[(8)] = inst_18056);
return statearr_18099;
})();var statearr_18100_18128 = state_18096__$1;(statearr_18100_18128[(2)] = null);
(statearr_18100_18128[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18097 === (4)))
{var inst_18060 = (state_18096[(9)]);var inst_18060__$1 = (state_18096[(2)]);var inst_18061 = (inst_18060__$1 == null);var inst_18062 = cljs.core.not.call(null,inst_18061);var state_18096__$1 = (function (){var statearr_18101 = state_18096;(statearr_18101[(9)] = inst_18060__$1);
return statearr_18101;
})();if(inst_18062)
{var statearr_18102_18129 = state_18096__$1;(statearr_18102_18129[(1)] = (5));
} else
{var statearr_18103_18130 = state_18096__$1;(statearr_18103_18130[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18097 === (15)))
{var inst_18086 = (state_18096[(2)]);var state_18096__$1 = state_18096;var statearr_18104_18131 = state_18096__$1;(statearr_18104_18131[(2)] = inst_18086);
(statearr_18104_18131[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18097 === (13)))
{var state_18096__$1 = state_18096;var statearr_18105_18132 = state_18096__$1;(statearr_18105_18132[(2)] = null);
(statearr_18105_18132[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18097 === (6)))
{var inst_18056 = (state_18096[(8)]);var inst_18081 = inst_18056.length;var inst_18082 = (inst_18081 > (0));var state_18096__$1 = state_18096;if(cljs.core.truth_(inst_18082))
{var statearr_18106_18133 = state_18096__$1;(statearr_18106_18133[(1)] = (12));
} else
{var statearr_18107_18134 = state_18096__$1;(statearr_18107_18134[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18097 === (3)))
{var inst_18094 = (state_18096[(2)]);var state_18096__$1 = state_18096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18096__$1,inst_18094);
} else
{if((state_val_18097 === (12)))
{var inst_18056 = (state_18096[(8)]);var inst_18084 = cljs.core.vec.call(null,inst_18056);var state_18096__$1 = state_18096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18096__$1,(15),out,inst_18084);
} else
{if((state_val_18097 === (2)))
{var state_18096__$1 = state_18096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18096__$1,(4),ch);
} else
{if((state_val_18097 === (11)))
{var inst_18060 = (state_18096[(9)]);var inst_18064 = (state_18096[(10)]);var inst_18074 = (state_18096[(2)]);var inst_18075 = [];var inst_18076 = inst_18075.push(inst_18060);var inst_18056 = inst_18075;var inst_18057 = inst_18064;var state_18096__$1 = (function (){var statearr_18108 = state_18096;(statearr_18108[(7)] = inst_18057);
(statearr_18108[(11)] = inst_18074);
(statearr_18108[(12)] = inst_18076);
(statearr_18108[(8)] = inst_18056);
return statearr_18108;
})();var statearr_18109_18135 = state_18096__$1;(statearr_18109_18135[(2)] = null);
(statearr_18109_18135[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18097 === (9)))
{var inst_18056 = (state_18096[(8)]);var inst_18072 = cljs.core.vec.call(null,inst_18056);var state_18096__$1 = state_18096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18096__$1,(11),out,inst_18072);
} else
{if((state_val_18097 === (5)))
{var inst_18057 = (state_18096[(7)]);var inst_18060 = (state_18096[(9)]);var inst_18064 = (state_18096[(10)]);var inst_18064__$1 = f.call(null,inst_18060);var inst_18065 = cljs.core._EQ_.call(null,inst_18064__$1,inst_18057);var inst_18066 = cljs.core.keyword_identical_QMARK_.call(null,inst_18057,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_18067 = (inst_18065) || (inst_18066);var state_18096__$1 = (function (){var statearr_18110 = state_18096;(statearr_18110[(10)] = inst_18064__$1);
return statearr_18110;
})();if(cljs.core.truth_(inst_18067))
{var statearr_18111_18136 = state_18096__$1;(statearr_18111_18136[(1)] = (8));
} else
{var statearr_18112_18137 = state_18096__$1;(statearr_18112_18137[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18097 === (14)))
{var inst_18089 = (state_18096[(2)]);var inst_18090 = cljs.core.async.close_BANG_.call(null,out);var state_18096__$1 = (function (){var statearr_18114 = state_18096;(statearr_18114[(13)] = inst_18089);
return statearr_18114;
})();var statearr_18115_18138 = state_18096__$1;(statearr_18115_18138[(2)] = inst_18090);
(statearr_18115_18138[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18097 === (10)))
{var inst_18079 = (state_18096[(2)]);var state_18096__$1 = state_18096;var statearr_18116_18139 = state_18096__$1;(statearr_18116_18139[(2)] = inst_18079);
(statearr_18116_18139[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18097 === (8)))
{var inst_18056 = (state_18096[(8)]);var inst_18060 = (state_18096[(9)]);var inst_18064 = (state_18096[(10)]);var inst_18069 = inst_18056.push(inst_18060);var tmp18113 = inst_18056;var inst_18056__$1 = tmp18113;var inst_18057 = inst_18064;var state_18096__$1 = (function (){var statearr_18117 = state_18096;(statearr_18117[(7)] = inst_18057);
(statearr_18117[(14)] = inst_18069);
(statearr_18117[(8)] = inst_18056__$1);
return statearr_18117;
})();var statearr_18118_18140 = state_18096__$1;(statearr_18118_18140[(2)] = null);
(statearr_18118_18140[(1)] = (2));
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
});})(c__5708__auto___18126,out))
;return ((function (switch__5693__auto__,c__5708__auto___18126,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18122[(0)] = state_machine__5694__auto__);
(statearr_18122[(1)] = (1));
return statearr_18122;
});
var state_machine__5694__auto____1 = (function (state_18096){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18096);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18123){if((e18123 instanceof Object))
{var ex__5697__auto__ = e18123;var statearr_18124_18141 = state_18096;(statearr_18124_18141[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18096);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18123;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18142 = state_18096;
state_18096 = G__18142;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18096){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18126,out))
})();var state__5710__auto__ = (function (){var statearr_18125 = f__5709__auto__.call(null);(statearr_18125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18126);
return statearr_18125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18126,out))
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

//# sourceMappingURL=async.js.map