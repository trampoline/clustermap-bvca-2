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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15467 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15467 = (function (f,fn_handler,meta15468){
this.f = f;
this.fn_handler = fn_handler;
this.meta15468 = meta15468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15467.cljs$lang$type = true;
cljs.core.async.t15467.cljs$lang$ctorStr = "cljs.core.async/t15467";
cljs.core.async.t15467.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15467");
});
cljs.core.async.t15467.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15469){var self__ = this;
var _15469__$1 = this;return self__.meta15468;
});
cljs.core.async.t15467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15469,meta15468__$1){var self__ = this;
var _15469__$1 = this;return (new cljs.core.async.t15467(self__.f,self__.fn_handler,meta15468__$1));
});
cljs.core.async.__GT_t15467 = (function __GT_t15467(f__$1,fn_handler__$1,meta15468){return (new cljs.core.async.t15467(f__$1,fn_handler__$1,meta15468));
});
}
return (new cljs.core.async.t15467(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15471 = buff;if(G__15471)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__15471.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15471.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15471);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15471);
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
{var val_15472 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15472);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15472,ret){
return (function (){return fn1.call(null,val_15472);
});})(val_15472,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___15473 = n;var x_15474 = (0);while(true){
if((x_15474 < n__4414__auto___15473))
{(a[x_15474] = (0));
{
var G__15475 = (x_15474 + (1));
x_15474 = G__15475;
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
var G__15476 = (i + (1));
i = G__15476;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15480 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15480 = (function (flag,alt_flag,meta15481){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15481 = meta15481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15480.cljs$lang$type = true;
cljs.core.async.t15480.cljs$lang$ctorStr = "cljs.core.async/t15480";
cljs.core.async.t15480.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15480");
});})(flag))
;
cljs.core.async.t15480.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15482){var self__ = this;
var _15482__$1 = this;return self__.meta15481;
});})(flag))
;
cljs.core.async.t15480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15482,meta15481__$1){var self__ = this;
var _15482__$1 = this;return (new cljs.core.async.t15480(self__.flag,self__.alt_flag,meta15481__$1));
});})(flag))
;
cljs.core.async.__GT_t15480 = ((function (flag){
return (function __GT_t15480(flag__$1,alt_flag__$1,meta15481){return (new cljs.core.async.t15480(flag__$1,alt_flag__$1,meta15481));
});})(flag))
;
}
return (new cljs.core.async.t15480(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15486 = (function (cb,flag,alt_handler,meta15487){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15487 = meta15487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15486.cljs$lang$type = true;
cljs.core.async.t15486.cljs$lang$ctorStr = "cljs.core.async/t15486";
cljs.core.async.t15486.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15486");
});
cljs.core.async.t15486.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15488){var self__ = this;
var _15488__$1 = this;return self__.meta15487;
});
cljs.core.async.t15486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15488,meta15487__$1){var self__ = this;
var _15488__$1 = this;return (new cljs.core.async.t15486(self__.cb,self__.flag,self__.alt_handler,meta15487__$1));
});
cljs.core.async.__GT_t15486 = (function __GT_t15486(cb__$1,flag__$1,alt_handler__$1,meta15487){return (new cljs.core.async.t15486(cb__$1,flag__$1,alt_handler__$1,meta15487));
});
}
return (new cljs.core.async.t15486(cb,flag,alt_handler,null));
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
return (function (p1__15489_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15489_SHARP_,port], null));
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
var G__15490 = (i + (1));
i = G__15490;
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
var alts_BANG___delegate = function (ports,p__15491){var map__15493 = p__15491;var map__15493__$1 = ((cljs.core.seq_QMARK_.call(null,map__15493))?cljs.core.apply.call(null,cljs.core.hash_map,map__15493):map__15493);var opts = map__15493__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__15491 = null;if (arguments.length > 1) {
  p__15491 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15491);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15494){
var ports = cljs.core.first(arglist__15494);
var p__15491 = cljs.core.rest(arglist__15494);
return alts_BANG___delegate(ports,p__15491);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15502 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15502 = (function (ch,f,map_LT_,meta15503){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15503 = meta15503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15502.cljs$lang$type = true;
cljs.core.async.t15502.cljs$lang$ctorStr = "cljs.core.async/t15502";
cljs.core.async.t15502.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15502");
});
cljs.core.async.t15502.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15502.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15502.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15502.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15505 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15505 = (function (fn1,_,meta15503,ch,f,map_LT_,meta15506){
this.fn1 = fn1;
this._ = _;
this.meta15503 = meta15503;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15506 = meta15506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15505.cljs$lang$type = true;
cljs.core.async.t15505.cljs$lang$ctorStr = "cljs.core.async/t15505";
cljs.core.async.t15505.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15505");
});})(___$1))
;
cljs.core.async.t15505.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15505.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15495_SHARP_){return f1.call(null,(((p1__15495_SHARP_ == null))?null:self__.f.call(null,p1__15495_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15507){var self__ = this;
var _15507__$1 = this;return self__.meta15506;
});})(___$1))
;
cljs.core.async.t15505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15507,meta15506__$1){var self__ = this;
var _15507__$1 = this;return (new cljs.core.async.t15505(self__.fn1,self__._,self__.meta15503,self__.ch,self__.f,self__.map_LT_,meta15506__$1));
});})(___$1))
;
cljs.core.async.__GT_t15505 = ((function (___$1){
return (function __GT_t15505(fn1__$1,___$2,meta15503__$1,ch__$2,f__$2,map_LT___$2,meta15506){return (new cljs.core.async.t15505(fn1__$1,___$2,meta15503__$1,ch__$2,f__$2,map_LT___$2,meta15506));
});})(___$1))
;
}
return (new cljs.core.async.t15505(fn1,___$1,self__.meta15503,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15502.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15502.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15504){var self__ = this;
var _15504__$1 = this;return self__.meta15503;
});
cljs.core.async.t15502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15504,meta15503__$1){var self__ = this;
var _15504__$1 = this;return (new cljs.core.async.t15502(self__.ch,self__.f,self__.map_LT_,meta15503__$1));
});
cljs.core.async.__GT_t15502 = (function __GT_t15502(ch__$1,f__$1,map_LT___$1,meta15503){return (new cljs.core.async.t15502(ch__$1,f__$1,map_LT___$1,meta15503));
});
}
return (new cljs.core.async.t15502(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15511 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15511 = (function (ch,f,map_GT_,meta15512){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15512 = meta15512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15511.cljs$lang$type = true;
cljs.core.async.t15511.cljs$lang$ctorStr = "cljs.core.async/t15511";
cljs.core.async.t15511.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15511");
});
cljs.core.async.t15511.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15511.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15511.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15513){var self__ = this;
var _15513__$1 = this;return self__.meta15512;
});
cljs.core.async.t15511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15513,meta15512__$1){var self__ = this;
var _15513__$1 = this;return (new cljs.core.async.t15511(self__.ch,self__.f,self__.map_GT_,meta15512__$1));
});
cljs.core.async.__GT_t15511 = (function __GT_t15511(ch__$1,f__$1,map_GT___$1,meta15512){return (new cljs.core.async.t15511(ch__$1,f__$1,map_GT___$1,meta15512));
});
}
return (new cljs.core.async.t15511(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15517 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15517 = (function (ch,p,filter_GT_,meta15518){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15518 = meta15518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15517.cljs$lang$type = true;
cljs.core.async.t15517.cljs$lang$ctorStr = "cljs.core.async/t15517";
cljs.core.async.t15517.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15517");
});
cljs.core.async.t15517.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15517.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15517.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15519){var self__ = this;
var _15519__$1 = this;return self__.meta15518;
});
cljs.core.async.t15517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15519,meta15518__$1){var self__ = this;
var _15519__$1 = this;return (new cljs.core.async.t15517(self__.ch,self__.p,self__.filter_GT_,meta15518__$1));
});
cljs.core.async.__GT_t15517 = (function __GT_t15517(ch__$1,p__$1,filter_GT___$1,meta15518){return (new cljs.core.async.t15517(ch__$1,p__$1,filter_GT___$1,meta15518));
});
}
return (new cljs.core.async.t15517(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___15602 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___15602,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___15602,out){
return (function (state_15581){var state_val_15582 = (state_15581[(1)]);if((state_val_15582 === (7)))
{var inst_15577 = (state_15581[(2)]);var state_15581__$1 = state_15581;var statearr_15583_15603 = state_15581__$1;(statearr_15583_15603[(2)] = inst_15577);
(statearr_15583_15603[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (1)))
{var state_15581__$1 = state_15581;var statearr_15584_15604 = state_15581__$1;(statearr_15584_15604[(2)] = null);
(statearr_15584_15604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (4)))
{var inst_15563 = (state_15581[(7)]);var inst_15563__$1 = (state_15581[(2)]);var inst_15564 = (inst_15563__$1 == null);var state_15581__$1 = (function (){var statearr_15585 = state_15581;(statearr_15585[(7)] = inst_15563__$1);
return statearr_15585;
})();if(cljs.core.truth_(inst_15564))
{var statearr_15586_15605 = state_15581__$1;(statearr_15586_15605[(1)] = (5));
} else
{var statearr_15587_15606 = state_15581__$1;(statearr_15587_15606[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (6)))
{var inst_15563 = (state_15581[(7)]);var inst_15568 = p.call(null,inst_15563);var state_15581__$1 = state_15581;if(cljs.core.truth_(inst_15568))
{var statearr_15588_15607 = state_15581__$1;(statearr_15588_15607[(1)] = (8));
} else
{var statearr_15589_15608 = state_15581__$1;(statearr_15589_15608[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (3)))
{var inst_15579 = (state_15581[(2)]);var state_15581__$1 = state_15581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15581__$1,inst_15579);
} else
{if((state_val_15582 === (2)))
{var state_15581__$1 = state_15581;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15581__$1,(4),ch);
} else
{if((state_val_15582 === (11)))
{var inst_15571 = (state_15581[(2)]);var state_15581__$1 = state_15581;var statearr_15590_15609 = state_15581__$1;(statearr_15590_15609[(2)] = inst_15571);
(statearr_15590_15609[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (9)))
{var state_15581__$1 = state_15581;var statearr_15591_15610 = state_15581__$1;(statearr_15591_15610[(2)] = null);
(statearr_15591_15610[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (5)))
{var inst_15566 = cljs.core.async.close_BANG_.call(null,out);var state_15581__$1 = state_15581;var statearr_15592_15611 = state_15581__$1;(statearr_15592_15611[(2)] = inst_15566);
(statearr_15592_15611[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (10)))
{var inst_15574 = (state_15581[(2)]);var state_15581__$1 = (function (){var statearr_15593 = state_15581;(statearr_15593[(8)] = inst_15574);
return statearr_15593;
})();var statearr_15594_15612 = state_15581__$1;(statearr_15594_15612[(2)] = null);
(statearr_15594_15612[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (8)))
{var inst_15563 = (state_15581[(7)]);var state_15581__$1 = state_15581;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15581__$1,(11),out,inst_15563);
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
});})(c__5708__auto___15602,out))
;return ((function (switch__5693__auto__,c__5708__auto___15602,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_15598 = [null,null,null,null,null,null,null,null,null];(statearr_15598[(0)] = state_machine__5694__auto__);
(statearr_15598[(1)] = (1));
return statearr_15598;
});
var state_machine__5694__auto____1 = (function (state_15581){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15581);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e15599){if((e15599 instanceof Object))
{var ex__5697__auto__ = e15599;var statearr_15600_15613 = state_15581;(statearr_15600_15613[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15581);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15599;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15614 = state_15581;
state_15581 = G__15614;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15581){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___15602,out))
})();var state__5710__auto__ = (function (){var statearr_15601 = f__5709__auto__.call(null);(statearr_15601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___15602);
return statearr_15601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___15602,out))
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
return (function (state_15766){var state_val_15767 = (state_15766[(1)]);if((state_val_15767 === (7)))
{var inst_15762 = (state_15766[(2)]);var state_15766__$1 = state_15766;var statearr_15768_15805 = state_15766__$1;(statearr_15768_15805[(2)] = inst_15762);
(statearr_15768_15805[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (20)))
{var inst_15737 = (state_15766[(7)]);var inst_15748 = (state_15766[(2)]);var inst_15749 = cljs.core.next.call(null,inst_15737);var inst_15723 = inst_15749;var inst_15724 = null;var inst_15725 = (0);var inst_15726 = (0);var state_15766__$1 = (function (){var statearr_15769 = state_15766;(statearr_15769[(8)] = inst_15748);
(statearr_15769[(9)] = inst_15723);
(statearr_15769[(10)] = inst_15724);
(statearr_15769[(11)] = inst_15725);
(statearr_15769[(12)] = inst_15726);
return statearr_15769;
})();var statearr_15770_15806 = state_15766__$1;(statearr_15770_15806[(2)] = null);
(statearr_15770_15806[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (1)))
{var state_15766__$1 = state_15766;var statearr_15771_15807 = state_15766__$1;(statearr_15771_15807[(2)] = null);
(statearr_15771_15807[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (4)))
{var inst_15712 = (state_15766[(13)]);var inst_15712__$1 = (state_15766[(2)]);var inst_15713 = (inst_15712__$1 == null);var state_15766__$1 = (function (){var statearr_15775 = state_15766;(statearr_15775[(13)] = inst_15712__$1);
return statearr_15775;
})();if(cljs.core.truth_(inst_15713))
{var statearr_15776_15808 = state_15766__$1;(statearr_15776_15808[(1)] = (5));
} else
{var statearr_15777_15809 = state_15766__$1;(statearr_15777_15809[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (15)))
{var state_15766__$1 = state_15766;var statearr_15778_15810 = state_15766__$1;(statearr_15778_15810[(2)] = null);
(statearr_15778_15810[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (13)))
{var inst_15723 = (state_15766[(9)]);var inst_15724 = (state_15766[(10)]);var inst_15725 = (state_15766[(11)]);var inst_15726 = (state_15766[(12)]);var inst_15733 = (state_15766[(2)]);var inst_15734 = (inst_15726 + (1));var tmp15772 = inst_15723;var tmp15773 = inst_15724;var tmp15774 = inst_15725;var inst_15723__$1 = tmp15772;var inst_15724__$1 = tmp15773;var inst_15725__$1 = tmp15774;var inst_15726__$1 = inst_15734;var state_15766__$1 = (function (){var statearr_15779 = state_15766;(statearr_15779[(9)] = inst_15723__$1);
(statearr_15779[(10)] = inst_15724__$1);
(statearr_15779[(11)] = inst_15725__$1);
(statearr_15779[(14)] = inst_15733);
(statearr_15779[(12)] = inst_15726__$1);
return statearr_15779;
})();var statearr_15780_15811 = state_15766__$1;(statearr_15780_15811[(2)] = null);
(statearr_15780_15811[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (6)))
{var inst_15712 = (state_15766[(13)]);var inst_15717 = f.call(null,inst_15712);var inst_15722 = cljs.core.seq.call(null,inst_15717);var inst_15723 = inst_15722;var inst_15724 = null;var inst_15725 = (0);var inst_15726 = (0);var state_15766__$1 = (function (){var statearr_15781 = state_15766;(statearr_15781[(9)] = inst_15723);
(statearr_15781[(10)] = inst_15724);
(statearr_15781[(11)] = inst_15725);
(statearr_15781[(12)] = inst_15726);
return statearr_15781;
})();var statearr_15782_15812 = state_15766__$1;(statearr_15782_15812[(2)] = null);
(statearr_15782_15812[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (17)))
{var inst_15737 = (state_15766[(7)]);var inst_15741 = cljs.core.chunk_first.call(null,inst_15737);var inst_15742 = cljs.core.chunk_rest.call(null,inst_15737);var inst_15743 = cljs.core.count.call(null,inst_15741);var inst_15723 = inst_15742;var inst_15724 = inst_15741;var inst_15725 = inst_15743;var inst_15726 = (0);var state_15766__$1 = (function (){var statearr_15783 = state_15766;(statearr_15783[(9)] = inst_15723);
(statearr_15783[(10)] = inst_15724);
(statearr_15783[(11)] = inst_15725);
(statearr_15783[(12)] = inst_15726);
return statearr_15783;
})();var statearr_15784_15813 = state_15766__$1;(statearr_15784_15813[(2)] = null);
(statearr_15784_15813[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (3)))
{var inst_15764 = (state_15766[(2)]);var state_15766__$1 = state_15766;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15766__$1,inst_15764);
} else
{if((state_val_15767 === (12)))
{var inst_15757 = (state_15766[(2)]);var state_15766__$1 = state_15766;var statearr_15785_15814 = state_15766__$1;(statearr_15785_15814[(2)] = inst_15757);
(statearr_15785_15814[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (2)))
{var state_15766__$1 = state_15766;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15766__$1,(4),in$);
} else
{if((state_val_15767 === (19)))
{var inst_15752 = (state_15766[(2)]);var state_15766__$1 = state_15766;var statearr_15786_15815 = state_15766__$1;(statearr_15786_15815[(2)] = inst_15752);
(statearr_15786_15815[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (11)))
{var inst_15723 = (state_15766[(9)]);var inst_15737 = (state_15766[(7)]);var inst_15737__$1 = cljs.core.seq.call(null,inst_15723);var state_15766__$1 = (function (){var statearr_15787 = state_15766;(statearr_15787[(7)] = inst_15737__$1);
return statearr_15787;
})();if(inst_15737__$1)
{var statearr_15788_15816 = state_15766__$1;(statearr_15788_15816[(1)] = (14));
} else
{var statearr_15789_15817 = state_15766__$1;(statearr_15789_15817[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (9)))
{var inst_15759 = (state_15766[(2)]);var state_15766__$1 = (function (){var statearr_15790 = state_15766;(statearr_15790[(15)] = inst_15759);
return statearr_15790;
})();var statearr_15791_15818 = state_15766__$1;(statearr_15791_15818[(2)] = null);
(statearr_15791_15818[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (5)))
{var inst_15715 = cljs.core.async.close_BANG_.call(null,out);var state_15766__$1 = state_15766;var statearr_15792_15819 = state_15766__$1;(statearr_15792_15819[(2)] = inst_15715);
(statearr_15792_15819[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (14)))
{var inst_15737 = (state_15766[(7)]);var inst_15739 = cljs.core.chunked_seq_QMARK_.call(null,inst_15737);var state_15766__$1 = state_15766;if(inst_15739)
{var statearr_15793_15820 = state_15766__$1;(statearr_15793_15820[(1)] = (17));
} else
{var statearr_15794_15821 = state_15766__$1;(statearr_15794_15821[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (16)))
{var inst_15755 = (state_15766[(2)]);var state_15766__$1 = state_15766;var statearr_15795_15822 = state_15766__$1;(statearr_15795_15822[(2)] = inst_15755);
(statearr_15795_15822[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15767 === (10)))
{var inst_15724 = (state_15766[(10)]);var inst_15726 = (state_15766[(12)]);var inst_15731 = cljs.core._nth.call(null,inst_15724,inst_15726);var state_15766__$1 = state_15766;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15766__$1,(13),out,inst_15731);
} else
{if((state_val_15767 === (18)))
{var inst_15737 = (state_15766[(7)]);var inst_15746 = cljs.core.first.call(null,inst_15737);var state_15766__$1 = state_15766;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15766__$1,(20),out,inst_15746);
} else
{if((state_val_15767 === (8)))
{var inst_15725 = (state_15766[(11)]);var inst_15726 = (state_15766[(12)]);var inst_15728 = (inst_15726 < inst_15725);var inst_15729 = inst_15728;var state_15766__$1 = state_15766;if(cljs.core.truth_(inst_15729))
{var statearr_15796_15823 = state_15766__$1;(statearr_15796_15823[(1)] = (10));
} else
{var statearr_15797_15824 = state_15766__$1;(statearr_15797_15824[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_15801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15801[(0)] = state_machine__5694__auto__);
(statearr_15801[(1)] = (1));
return statearr_15801;
});
var state_machine__5694__auto____1 = (function (state_15766){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15766);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e15802){if((e15802 instanceof Object))
{var ex__5697__auto__ = e15802;var statearr_15803_15825 = state_15766;(statearr_15803_15825[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15766);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15802;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15826 = state_15766;
state_15766 = G__15826;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15766){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_15804 = f__5709__auto__.call(null);(statearr_15804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_15804;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___15907 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___15907){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___15907){
return (function (state_15886){var state_val_15887 = (state_15886[(1)]);if((state_val_15887 === (7)))
{var inst_15882 = (state_15886[(2)]);var state_15886__$1 = state_15886;var statearr_15888_15908 = state_15886__$1;(statearr_15888_15908[(2)] = inst_15882);
(statearr_15888_15908[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15887 === (1)))
{var state_15886__$1 = state_15886;var statearr_15889_15909 = state_15886__$1;(statearr_15889_15909[(2)] = null);
(statearr_15889_15909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15887 === (4)))
{var inst_15869 = (state_15886[(7)]);var inst_15869__$1 = (state_15886[(2)]);var inst_15870 = (inst_15869__$1 == null);var state_15886__$1 = (function (){var statearr_15890 = state_15886;(statearr_15890[(7)] = inst_15869__$1);
return statearr_15890;
})();if(cljs.core.truth_(inst_15870))
{var statearr_15891_15910 = state_15886__$1;(statearr_15891_15910[(1)] = (5));
} else
{var statearr_15892_15911 = state_15886__$1;(statearr_15892_15911[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15887 === (6)))
{var inst_15869 = (state_15886[(7)]);var state_15886__$1 = state_15886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15886__$1,(11),to,inst_15869);
} else
{if((state_val_15887 === (3)))
{var inst_15884 = (state_15886[(2)]);var state_15886__$1 = state_15886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15886__$1,inst_15884);
} else
{if((state_val_15887 === (2)))
{var state_15886__$1 = state_15886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15886__$1,(4),from);
} else
{if((state_val_15887 === (11)))
{var inst_15879 = (state_15886[(2)]);var state_15886__$1 = (function (){var statearr_15893 = state_15886;(statearr_15893[(8)] = inst_15879);
return statearr_15893;
})();var statearr_15894_15912 = state_15886__$1;(statearr_15894_15912[(2)] = null);
(statearr_15894_15912[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15887 === (9)))
{var state_15886__$1 = state_15886;var statearr_15895_15913 = state_15886__$1;(statearr_15895_15913[(2)] = null);
(statearr_15895_15913[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15887 === (5)))
{var state_15886__$1 = state_15886;if(cljs.core.truth_(close_QMARK_))
{var statearr_15896_15914 = state_15886__$1;(statearr_15896_15914[(1)] = (8));
} else
{var statearr_15897_15915 = state_15886__$1;(statearr_15897_15915[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15887 === (10)))
{var inst_15876 = (state_15886[(2)]);var state_15886__$1 = state_15886;var statearr_15898_15916 = state_15886__$1;(statearr_15898_15916[(2)] = inst_15876);
(statearr_15898_15916[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15887 === (8)))
{var inst_15873 = cljs.core.async.close_BANG_.call(null,to);var state_15886__$1 = state_15886;var statearr_15899_15917 = state_15886__$1;(statearr_15899_15917[(2)] = inst_15873);
(statearr_15899_15917[(1)] = (10));
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
});})(c__5708__auto___15907))
;return ((function (switch__5693__auto__,c__5708__auto___15907){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_15903 = [null,null,null,null,null,null,null,null,null];(statearr_15903[(0)] = state_machine__5694__auto__);
(statearr_15903[(1)] = (1));
return statearr_15903;
});
var state_machine__5694__auto____1 = (function (state_15886){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15886);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e15904){if((e15904 instanceof Object))
{var ex__5697__auto__ = e15904;var statearr_15905_15918 = state_15886;(statearr_15905_15918[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15886);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15904;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15919 = state_15886;
state_15886 = G__15919;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15886){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___15907))
})();var state__5710__auto__ = (function (){var statearr_15906 = f__5709__auto__.call(null);(statearr_15906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___15907);
return statearr_15906;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___15907))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___16006 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16006,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16006,tc,fc){
return (function (state_15984){var state_val_15985 = (state_15984[(1)]);if((state_val_15985 === (7)))
{var inst_15980 = (state_15984[(2)]);var state_15984__$1 = state_15984;var statearr_15986_16007 = state_15984__$1;(statearr_15986_16007[(2)] = inst_15980);
(statearr_15986_16007[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (1)))
{var state_15984__$1 = state_15984;var statearr_15987_16008 = state_15984__$1;(statearr_15987_16008[(2)] = null);
(statearr_15987_16008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (4)))
{var inst_15965 = (state_15984[(7)]);var inst_15965__$1 = (state_15984[(2)]);var inst_15966 = (inst_15965__$1 == null);var state_15984__$1 = (function (){var statearr_15988 = state_15984;(statearr_15988[(7)] = inst_15965__$1);
return statearr_15988;
})();if(cljs.core.truth_(inst_15966))
{var statearr_15989_16009 = state_15984__$1;(statearr_15989_16009[(1)] = (5));
} else
{var statearr_15990_16010 = state_15984__$1;(statearr_15990_16010[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (6)))
{var inst_15965 = (state_15984[(7)]);var inst_15971 = p.call(null,inst_15965);var state_15984__$1 = state_15984;if(cljs.core.truth_(inst_15971))
{var statearr_15991_16011 = state_15984__$1;(statearr_15991_16011[(1)] = (9));
} else
{var statearr_15992_16012 = state_15984__$1;(statearr_15992_16012[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (3)))
{var inst_15982 = (state_15984[(2)]);var state_15984__$1 = state_15984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15984__$1,inst_15982);
} else
{if((state_val_15985 === (2)))
{var state_15984__$1 = state_15984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15984__$1,(4),ch);
} else
{if((state_val_15985 === (11)))
{var inst_15965 = (state_15984[(7)]);var inst_15975 = (state_15984[(2)]);var state_15984__$1 = state_15984;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15984__$1,(8),inst_15975,inst_15965);
} else
{if((state_val_15985 === (9)))
{var state_15984__$1 = state_15984;var statearr_15993_16013 = state_15984__$1;(statearr_15993_16013[(2)] = tc);
(statearr_15993_16013[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (5)))
{var inst_15968 = cljs.core.async.close_BANG_.call(null,tc);var inst_15969 = cljs.core.async.close_BANG_.call(null,fc);var state_15984__$1 = (function (){var statearr_15994 = state_15984;(statearr_15994[(8)] = inst_15968);
return statearr_15994;
})();var statearr_15995_16014 = state_15984__$1;(statearr_15995_16014[(2)] = inst_15969);
(statearr_15995_16014[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (10)))
{var state_15984__$1 = state_15984;var statearr_15996_16015 = state_15984__$1;(statearr_15996_16015[(2)] = fc);
(statearr_15996_16015[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15985 === (8)))
{var inst_15977 = (state_15984[(2)]);var state_15984__$1 = (function (){var statearr_15997 = state_15984;(statearr_15997[(9)] = inst_15977);
return statearr_15997;
})();var statearr_15998_16016 = state_15984__$1;(statearr_15998_16016[(2)] = null);
(statearr_15998_16016[(1)] = (2));
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
});})(c__5708__auto___16006,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___16006,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16002 = [null,null,null,null,null,null,null,null,null,null];(statearr_16002[(0)] = state_machine__5694__auto__);
(statearr_16002[(1)] = (1));
return statearr_16002;
});
var state_machine__5694__auto____1 = (function (state_15984){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15984);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16003){if((e16003 instanceof Object))
{var ex__5697__auto__ = e16003;var statearr_16004_16017 = state_15984;(statearr_16004_16017[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16003;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16018 = state_15984;
state_15984 = G__16018;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15984){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16006,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_16005 = f__5709__auto__.call(null);(statearr_16005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16006);
return statearr_16005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16006,tc,fc))
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
return (function (state_16065){var state_val_16066 = (state_16065[(1)]);if((state_val_16066 === (7)))
{var inst_16061 = (state_16065[(2)]);var state_16065__$1 = state_16065;var statearr_16067_16083 = state_16065__$1;(statearr_16067_16083[(2)] = inst_16061);
(statearr_16067_16083[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16066 === (6)))
{var inst_16051 = (state_16065[(7)]);var inst_16054 = (state_16065[(8)]);var inst_16058 = f.call(null,inst_16051,inst_16054);var inst_16051__$1 = inst_16058;var state_16065__$1 = (function (){var statearr_16068 = state_16065;(statearr_16068[(7)] = inst_16051__$1);
return statearr_16068;
})();var statearr_16069_16084 = state_16065__$1;(statearr_16069_16084[(2)] = null);
(statearr_16069_16084[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16066 === (5)))
{var inst_16051 = (state_16065[(7)]);var state_16065__$1 = state_16065;var statearr_16070_16085 = state_16065__$1;(statearr_16070_16085[(2)] = inst_16051);
(statearr_16070_16085[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16066 === (4)))
{var inst_16054 = (state_16065[(8)]);var inst_16054__$1 = (state_16065[(2)]);var inst_16055 = (inst_16054__$1 == null);var state_16065__$1 = (function (){var statearr_16071 = state_16065;(statearr_16071[(8)] = inst_16054__$1);
return statearr_16071;
})();if(cljs.core.truth_(inst_16055))
{var statearr_16072_16086 = state_16065__$1;(statearr_16072_16086[(1)] = (5));
} else
{var statearr_16073_16087 = state_16065__$1;(statearr_16073_16087[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16066 === (3)))
{var inst_16063 = (state_16065[(2)]);var state_16065__$1 = state_16065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16065__$1,inst_16063);
} else
{if((state_val_16066 === (2)))
{var state_16065__$1 = state_16065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16065__$1,(4),ch);
} else
{if((state_val_16066 === (1)))
{var inst_16051 = init;var state_16065__$1 = (function (){var statearr_16074 = state_16065;(statearr_16074[(7)] = inst_16051);
return statearr_16074;
})();var statearr_16075_16088 = state_16065__$1;(statearr_16075_16088[(2)] = null);
(statearr_16075_16088[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_16079 = [null,null,null,null,null,null,null,null,null];(statearr_16079[(0)] = state_machine__5694__auto__);
(statearr_16079[(1)] = (1));
return statearr_16079;
});
var state_machine__5694__auto____1 = (function (state_16065){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16065);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16080){if((e16080 instanceof Object))
{var ex__5697__auto__ = e16080;var statearr_16081_16089 = state_16065;(statearr_16081_16089[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16065);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16080;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16090 = state_16065;
state_16065 = G__16090;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16065){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16082 = f__5709__auto__.call(null);(statearr_16082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16082;
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
return (function (state_16152){var state_val_16153 = (state_16152[(1)]);if((state_val_16153 === (7)))
{var inst_16133 = (state_16152[(7)]);var inst_16138 = (state_16152[(2)]);var inst_16139 = cljs.core.next.call(null,inst_16133);var inst_16133__$1 = inst_16139;var state_16152__$1 = (function (){var statearr_16154 = state_16152;(statearr_16154[(8)] = inst_16138);
(statearr_16154[(7)] = inst_16133__$1);
return statearr_16154;
})();var statearr_16155_16173 = state_16152__$1;(statearr_16155_16173[(2)] = null);
(statearr_16155_16173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16153 === (1)))
{var inst_16132 = cljs.core.seq.call(null,coll);var inst_16133 = inst_16132;var state_16152__$1 = (function (){var statearr_16156 = state_16152;(statearr_16156[(7)] = inst_16133);
return statearr_16156;
})();var statearr_16157_16174 = state_16152__$1;(statearr_16157_16174[(2)] = null);
(statearr_16157_16174[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16153 === (4)))
{var inst_16133 = (state_16152[(7)]);var inst_16136 = cljs.core.first.call(null,inst_16133);var state_16152__$1 = state_16152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16152__$1,(7),ch,inst_16136);
} else
{if((state_val_16153 === (6)))
{var inst_16148 = (state_16152[(2)]);var state_16152__$1 = state_16152;var statearr_16158_16175 = state_16152__$1;(statearr_16158_16175[(2)] = inst_16148);
(statearr_16158_16175[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16153 === (3)))
{var inst_16150 = (state_16152[(2)]);var state_16152__$1 = state_16152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16152__$1,inst_16150);
} else
{if((state_val_16153 === (2)))
{var inst_16133 = (state_16152[(7)]);var state_16152__$1 = state_16152;if(cljs.core.truth_(inst_16133))
{var statearr_16159_16176 = state_16152__$1;(statearr_16159_16176[(1)] = (4));
} else
{var statearr_16160_16177 = state_16152__$1;(statearr_16160_16177[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16153 === (9)))
{var state_16152__$1 = state_16152;var statearr_16161_16178 = state_16152__$1;(statearr_16161_16178[(2)] = null);
(statearr_16161_16178[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16153 === (5)))
{var state_16152__$1 = state_16152;if(cljs.core.truth_(close_QMARK_))
{var statearr_16162_16179 = state_16152__$1;(statearr_16162_16179[(1)] = (8));
} else
{var statearr_16163_16180 = state_16152__$1;(statearr_16163_16180[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16153 === (10)))
{var inst_16146 = (state_16152[(2)]);var state_16152__$1 = state_16152;var statearr_16164_16181 = state_16152__$1;(statearr_16164_16181[(2)] = inst_16146);
(statearr_16164_16181[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16153 === (8)))
{var inst_16143 = cljs.core.async.close_BANG_.call(null,ch);var state_16152__$1 = state_16152;var statearr_16165_16182 = state_16152__$1;(statearr_16165_16182[(2)] = inst_16143);
(statearr_16165_16182[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_16169 = [null,null,null,null,null,null,null,null,null];(statearr_16169[(0)] = state_machine__5694__auto__);
(statearr_16169[(1)] = (1));
return statearr_16169;
});
var state_machine__5694__auto____1 = (function (state_16152){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16152);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16170){if((e16170 instanceof Object))
{var ex__5697__auto__ = e16170;var statearr_16171_16183 = state_16152;(statearr_16171_16183[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16152);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16170;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16184 = state_16152;
state_16152 = G__16184;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16152){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16172 = f__5709__auto__.call(null);(statearr_16172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16172;
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
cljs.core.async.Mux = (function (){var obj16186 = {};return obj16186;
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
cljs.core.async.Mult = (function (){var obj16188 = {};return obj16188;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16412 = (function (cs,ch,mult,meta16413){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16413 = meta16413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16412.cljs$lang$type = true;
cljs.core.async.t16412.cljs$lang$ctorStr = "cljs.core.async/t16412";
cljs.core.async.t16412.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16412");
});})(cs))
;
cljs.core.async.t16412.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16412.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16412.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16412.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16412.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16414){var self__ = this;
var _16414__$1 = this;return self__.meta16413;
});})(cs))
;
cljs.core.async.t16412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16414,meta16413__$1){var self__ = this;
var _16414__$1 = this;return (new cljs.core.async.t16412(self__.cs,self__.ch,self__.mult,meta16413__$1));
});})(cs))
;
cljs.core.async.__GT_t16412 = ((function (cs){
return (function __GT_t16412(cs__$1,ch__$1,mult__$1,meta16413){return (new cljs.core.async.t16412(cs__$1,ch__$1,mult__$1,meta16413));
});})(cs))
;
}
return (new cljs.core.async.t16412(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___16635 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16635,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16635,cs,m,dchan,dctr,done){
return (function (state_16549){var state_val_16550 = (state_16549[(1)]);if((state_val_16550 === (7)))
{var inst_16545 = (state_16549[(2)]);var state_16549__$1 = state_16549;var statearr_16551_16636 = state_16549__$1;(statearr_16551_16636[(2)] = inst_16545);
(statearr_16551_16636[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (20)))
{var inst_16446 = (state_16549[(7)]);var inst_16456 = cljs.core.first.call(null,inst_16446);var inst_16457 = cljs.core.nth.call(null,inst_16456,(0),null);var inst_16458 = cljs.core.nth.call(null,inst_16456,(1),null);var state_16549__$1 = (function (){var statearr_16552 = state_16549;(statearr_16552[(8)] = inst_16457);
return statearr_16552;
})();if(cljs.core.truth_(inst_16458))
{var statearr_16553_16637 = state_16549__$1;(statearr_16553_16637[(1)] = (22));
} else
{var statearr_16554_16638 = state_16549__$1;(statearr_16554_16638[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (27)))
{var inst_16488 = (state_16549[(9)]);var inst_16486 = (state_16549[(10)]);var inst_16493 = cljs.core._nth.call(null,inst_16486,inst_16488);var state_16549__$1 = (function (){var statearr_16555 = state_16549;(statearr_16555[(11)] = inst_16493);
return statearr_16555;
})();var statearr_16556_16639 = state_16549__$1;(statearr_16556_16639[(2)] = null);
(statearr_16556_16639[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (1)))
{var state_16549__$1 = state_16549;var statearr_16557_16640 = state_16549__$1;(statearr_16557_16640[(2)] = null);
(statearr_16557_16640[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (24)))
{var inst_16446 = (state_16549[(7)]);var inst_16463 = (state_16549[(2)]);var inst_16464 = cljs.core.next.call(null,inst_16446);var inst_16426 = inst_16464;var inst_16427 = null;var inst_16428 = (0);var inst_16429 = (0);var state_16549__$1 = (function (){var statearr_16558 = state_16549;(statearr_16558[(12)] = inst_16463);
(statearr_16558[(13)] = inst_16428);
(statearr_16558[(14)] = inst_16429);
(statearr_16558[(15)] = inst_16426);
(statearr_16558[(16)] = inst_16427);
return statearr_16558;
})();var statearr_16559_16641 = state_16549__$1;(statearr_16559_16641[(2)] = null);
(statearr_16559_16641[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (39)))
{var inst_16506 = (state_16549[(17)]);var inst_16524 = (state_16549[(2)]);var inst_16525 = cljs.core.next.call(null,inst_16506);var inst_16485 = inst_16525;var inst_16486 = null;var inst_16487 = (0);var inst_16488 = (0);var state_16549__$1 = (function (){var statearr_16563 = state_16549;(statearr_16563[(9)] = inst_16488);
(statearr_16563[(18)] = inst_16485);
(statearr_16563[(19)] = inst_16524);
(statearr_16563[(10)] = inst_16486);
(statearr_16563[(20)] = inst_16487);
return statearr_16563;
})();var statearr_16564_16642 = state_16549__$1;(statearr_16564_16642[(2)] = null);
(statearr_16564_16642[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (4)))
{var inst_16417 = (state_16549[(21)]);var inst_16417__$1 = (state_16549[(2)]);var inst_16418 = (inst_16417__$1 == null);var state_16549__$1 = (function (){var statearr_16565 = state_16549;(statearr_16565[(21)] = inst_16417__$1);
return statearr_16565;
})();if(cljs.core.truth_(inst_16418))
{var statearr_16566_16643 = state_16549__$1;(statearr_16566_16643[(1)] = (5));
} else
{var statearr_16567_16644 = state_16549__$1;(statearr_16567_16644[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (15)))
{var inst_16428 = (state_16549[(13)]);var inst_16429 = (state_16549[(14)]);var inst_16426 = (state_16549[(15)]);var inst_16427 = (state_16549[(16)]);var inst_16442 = (state_16549[(2)]);var inst_16443 = (inst_16429 + (1));var tmp16560 = inst_16428;var tmp16561 = inst_16426;var tmp16562 = inst_16427;var inst_16426__$1 = tmp16561;var inst_16427__$1 = tmp16562;var inst_16428__$1 = tmp16560;var inst_16429__$1 = inst_16443;var state_16549__$1 = (function (){var statearr_16568 = state_16549;(statearr_16568[(22)] = inst_16442);
(statearr_16568[(13)] = inst_16428__$1);
(statearr_16568[(14)] = inst_16429__$1);
(statearr_16568[(15)] = inst_16426__$1);
(statearr_16568[(16)] = inst_16427__$1);
return statearr_16568;
})();var statearr_16569_16645 = state_16549__$1;(statearr_16569_16645[(2)] = null);
(statearr_16569_16645[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (21)))
{var inst_16467 = (state_16549[(2)]);var state_16549__$1 = state_16549;var statearr_16570_16646 = state_16549__$1;(statearr_16570_16646[(2)] = inst_16467);
(statearr_16570_16646[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (31)))
{var inst_16493 = (state_16549[(11)]);var inst_16494 = (state_16549[(2)]);var inst_16495 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16496 = cljs.core.async.untap_STAR_.call(null,m,inst_16493);var state_16549__$1 = (function (){var statearr_16571 = state_16549;(statearr_16571[(23)] = inst_16494);
(statearr_16571[(24)] = inst_16495);
return statearr_16571;
})();var statearr_16572_16647 = state_16549__$1;(statearr_16572_16647[(2)] = inst_16496);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16549__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (32)))
{var inst_16493 = (state_16549[(11)]);var inst_16417 = (state_16549[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16549,(31),Object,null,(30));var inst_16500 = cljs.core.async.put_BANG_.call(null,inst_16493,inst_16417,done);var state_16549__$1 = state_16549;var statearr_16573_16648 = state_16549__$1;(statearr_16573_16648[(2)] = inst_16500);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16549__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (40)))
{var inst_16515 = (state_16549[(25)]);var inst_16516 = (state_16549[(2)]);var inst_16517 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16518 = cljs.core.async.untap_STAR_.call(null,m,inst_16515);var state_16549__$1 = (function (){var statearr_16574 = state_16549;(statearr_16574[(26)] = inst_16517);
(statearr_16574[(27)] = inst_16516);
return statearr_16574;
})();var statearr_16575_16649 = state_16549__$1;(statearr_16575_16649[(2)] = inst_16518);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16549__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (33)))
{var inst_16506 = (state_16549[(17)]);var inst_16508 = cljs.core.chunked_seq_QMARK_.call(null,inst_16506);var state_16549__$1 = state_16549;if(inst_16508)
{var statearr_16576_16650 = state_16549__$1;(statearr_16576_16650[(1)] = (36));
} else
{var statearr_16577_16651 = state_16549__$1;(statearr_16577_16651[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (13)))
{var inst_16436 = (state_16549[(28)]);var inst_16439 = cljs.core.async.close_BANG_.call(null,inst_16436);var state_16549__$1 = state_16549;var statearr_16578_16652 = state_16549__$1;(statearr_16578_16652[(2)] = inst_16439);
(statearr_16578_16652[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (22)))
{var inst_16457 = (state_16549[(8)]);var inst_16460 = cljs.core.async.close_BANG_.call(null,inst_16457);var state_16549__$1 = state_16549;var statearr_16579_16653 = state_16549__$1;(statearr_16579_16653[(2)] = inst_16460);
(statearr_16579_16653[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (36)))
{var inst_16506 = (state_16549[(17)]);var inst_16510 = cljs.core.chunk_first.call(null,inst_16506);var inst_16511 = cljs.core.chunk_rest.call(null,inst_16506);var inst_16512 = cljs.core.count.call(null,inst_16510);var inst_16485 = inst_16511;var inst_16486 = inst_16510;var inst_16487 = inst_16512;var inst_16488 = (0);var state_16549__$1 = (function (){var statearr_16580 = state_16549;(statearr_16580[(9)] = inst_16488);
(statearr_16580[(18)] = inst_16485);
(statearr_16580[(10)] = inst_16486);
(statearr_16580[(20)] = inst_16487);
return statearr_16580;
})();var statearr_16581_16654 = state_16549__$1;(statearr_16581_16654[(2)] = null);
(statearr_16581_16654[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (41)))
{var inst_16515 = (state_16549[(25)]);var inst_16417 = (state_16549[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16549,(40),Object,null,(39));var inst_16522 = cljs.core.async.put_BANG_.call(null,inst_16515,inst_16417,done);var state_16549__$1 = state_16549;var statearr_16582_16655 = state_16549__$1;(statearr_16582_16655[(2)] = inst_16522);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16549__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (43)))
{var state_16549__$1 = state_16549;var statearr_16583_16656 = state_16549__$1;(statearr_16583_16656[(2)] = null);
(statearr_16583_16656[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (29)))
{var inst_16533 = (state_16549[(2)]);var state_16549__$1 = state_16549;var statearr_16584_16657 = state_16549__$1;(statearr_16584_16657[(2)] = inst_16533);
(statearr_16584_16657[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (44)))
{var inst_16542 = (state_16549[(2)]);var state_16549__$1 = (function (){var statearr_16585 = state_16549;(statearr_16585[(29)] = inst_16542);
return statearr_16585;
})();var statearr_16586_16658 = state_16549__$1;(statearr_16586_16658[(2)] = null);
(statearr_16586_16658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (6)))
{var inst_16477 = (state_16549[(30)]);var inst_16476 = cljs.core.deref.call(null,cs);var inst_16477__$1 = cljs.core.keys.call(null,inst_16476);var inst_16478 = cljs.core.count.call(null,inst_16477__$1);var inst_16479 = cljs.core.reset_BANG_.call(null,dctr,inst_16478);var inst_16484 = cljs.core.seq.call(null,inst_16477__$1);var inst_16485 = inst_16484;var inst_16486 = null;var inst_16487 = (0);var inst_16488 = (0);var state_16549__$1 = (function (){var statearr_16587 = state_16549;(statearr_16587[(9)] = inst_16488);
(statearr_16587[(18)] = inst_16485);
(statearr_16587[(31)] = inst_16479);
(statearr_16587[(30)] = inst_16477__$1);
(statearr_16587[(10)] = inst_16486);
(statearr_16587[(20)] = inst_16487);
return statearr_16587;
})();var statearr_16588_16659 = state_16549__$1;(statearr_16588_16659[(2)] = null);
(statearr_16588_16659[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (28)))
{var inst_16485 = (state_16549[(18)]);var inst_16506 = (state_16549[(17)]);var inst_16506__$1 = cljs.core.seq.call(null,inst_16485);var state_16549__$1 = (function (){var statearr_16589 = state_16549;(statearr_16589[(17)] = inst_16506__$1);
return statearr_16589;
})();if(inst_16506__$1)
{var statearr_16590_16660 = state_16549__$1;(statearr_16590_16660[(1)] = (33));
} else
{var statearr_16591_16661 = state_16549__$1;(statearr_16591_16661[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (25)))
{var inst_16488 = (state_16549[(9)]);var inst_16487 = (state_16549[(20)]);var inst_16490 = (inst_16488 < inst_16487);var inst_16491 = inst_16490;var state_16549__$1 = state_16549;if(cljs.core.truth_(inst_16491))
{var statearr_16592_16662 = state_16549__$1;(statearr_16592_16662[(1)] = (27));
} else
{var statearr_16593_16663 = state_16549__$1;(statearr_16593_16663[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (34)))
{var state_16549__$1 = state_16549;var statearr_16594_16664 = state_16549__$1;(statearr_16594_16664[(2)] = null);
(statearr_16594_16664[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (17)))
{var state_16549__$1 = state_16549;var statearr_16595_16665 = state_16549__$1;(statearr_16595_16665[(2)] = null);
(statearr_16595_16665[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (3)))
{var inst_16547 = (state_16549[(2)]);var state_16549__$1 = state_16549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16549__$1,inst_16547);
} else
{if((state_val_16550 === (12)))
{var inst_16472 = (state_16549[(2)]);var state_16549__$1 = state_16549;var statearr_16596_16666 = state_16549__$1;(statearr_16596_16666[(2)] = inst_16472);
(statearr_16596_16666[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (2)))
{var state_16549__$1 = state_16549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16549__$1,(4),ch);
} else
{if((state_val_16550 === (23)))
{var state_16549__$1 = state_16549;var statearr_16597_16667 = state_16549__$1;(statearr_16597_16667[(2)] = null);
(statearr_16597_16667[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (35)))
{var inst_16531 = (state_16549[(2)]);var state_16549__$1 = state_16549;var statearr_16598_16668 = state_16549__$1;(statearr_16598_16668[(2)] = inst_16531);
(statearr_16598_16668[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (19)))
{var inst_16446 = (state_16549[(7)]);var inst_16450 = cljs.core.chunk_first.call(null,inst_16446);var inst_16451 = cljs.core.chunk_rest.call(null,inst_16446);var inst_16452 = cljs.core.count.call(null,inst_16450);var inst_16426 = inst_16451;var inst_16427 = inst_16450;var inst_16428 = inst_16452;var inst_16429 = (0);var state_16549__$1 = (function (){var statearr_16599 = state_16549;(statearr_16599[(13)] = inst_16428);
(statearr_16599[(14)] = inst_16429);
(statearr_16599[(15)] = inst_16426);
(statearr_16599[(16)] = inst_16427);
return statearr_16599;
})();var statearr_16600_16669 = state_16549__$1;(statearr_16600_16669[(2)] = null);
(statearr_16600_16669[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (11)))
{var inst_16446 = (state_16549[(7)]);var inst_16426 = (state_16549[(15)]);var inst_16446__$1 = cljs.core.seq.call(null,inst_16426);var state_16549__$1 = (function (){var statearr_16601 = state_16549;(statearr_16601[(7)] = inst_16446__$1);
return statearr_16601;
})();if(inst_16446__$1)
{var statearr_16602_16670 = state_16549__$1;(statearr_16602_16670[(1)] = (16));
} else
{var statearr_16603_16671 = state_16549__$1;(statearr_16603_16671[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (9)))
{var inst_16474 = (state_16549[(2)]);var state_16549__$1 = state_16549;var statearr_16604_16672 = state_16549__$1;(statearr_16604_16672[(2)] = inst_16474);
(statearr_16604_16672[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (5)))
{var inst_16424 = cljs.core.deref.call(null,cs);var inst_16425 = cljs.core.seq.call(null,inst_16424);var inst_16426 = inst_16425;var inst_16427 = null;var inst_16428 = (0);var inst_16429 = (0);var state_16549__$1 = (function (){var statearr_16605 = state_16549;(statearr_16605[(13)] = inst_16428);
(statearr_16605[(14)] = inst_16429);
(statearr_16605[(15)] = inst_16426);
(statearr_16605[(16)] = inst_16427);
return statearr_16605;
})();var statearr_16606_16673 = state_16549__$1;(statearr_16606_16673[(2)] = null);
(statearr_16606_16673[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (14)))
{var state_16549__$1 = state_16549;var statearr_16607_16674 = state_16549__$1;(statearr_16607_16674[(2)] = null);
(statearr_16607_16674[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (45)))
{var inst_16539 = (state_16549[(2)]);var state_16549__$1 = state_16549;var statearr_16608_16675 = state_16549__$1;(statearr_16608_16675[(2)] = inst_16539);
(statearr_16608_16675[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (26)))
{var inst_16477 = (state_16549[(30)]);var inst_16535 = (state_16549[(2)]);var inst_16536 = cljs.core.seq.call(null,inst_16477);var state_16549__$1 = (function (){var statearr_16609 = state_16549;(statearr_16609[(32)] = inst_16535);
return statearr_16609;
})();if(inst_16536)
{var statearr_16610_16676 = state_16549__$1;(statearr_16610_16676[(1)] = (42));
} else
{var statearr_16611_16677 = state_16549__$1;(statearr_16611_16677[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (16)))
{var inst_16446 = (state_16549[(7)]);var inst_16448 = cljs.core.chunked_seq_QMARK_.call(null,inst_16446);var state_16549__$1 = state_16549;if(inst_16448)
{var statearr_16615_16678 = state_16549__$1;(statearr_16615_16678[(1)] = (19));
} else
{var statearr_16616_16679 = state_16549__$1;(statearr_16616_16679[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (38)))
{var inst_16528 = (state_16549[(2)]);var state_16549__$1 = state_16549;var statearr_16617_16680 = state_16549__$1;(statearr_16617_16680[(2)] = inst_16528);
(statearr_16617_16680[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (30)))
{var inst_16488 = (state_16549[(9)]);var inst_16485 = (state_16549[(18)]);var inst_16486 = (state_16549[(10)]);var inst_16487 = (state_16549[(20)]);var inst_16502 = (state_16549[(2)]);var inst_16503 = (inst_16488 + (1));var tmp16612 = inst_16485;var tmp16613 = inst_16486;var tmp16614 = inst_16487;var inst_16485__$1 = tmp16612;var inst_16486__$1 = tmp16613;var inst_16487__$1 = tmp16614;var inst_16488__$1 = inst_16503;var state_16549__$1 = (function (){var statearr_16618 = state_16549;(statearr_16618[(9)] = inst_16488__$1);
(statearr_16618[(18)] = inst_16485__$1);
(statearr_16618[(10)] = inst_16486__$1);
(statearr_16618[(20)] = inst_16487__$1);
(statearr_16618[(33)] = inst_16502);
return statearr_16618;
})();var statearr_16619_16681 = state_16549__$1;(statearr_16619_16681[(2)] = null);
(statearr_16619_16681[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (10)))
{var inst_16429 = (state_16549[(14)]);var inst_16427 = (state_16549[(16)]);var inst_16435 = cljs.core._nth.call(null,inst_16427,inst_16429);var inst_16436 = cljs.core.nth.call(null,inst_16435,(0),null);var inst_16437 = cljs.core.nth.call(null,inst_16435,(1),null);var state_16549__$1 = (function (){var statearr_16620 = state_16549;(statearr_16620[(28)] = inst_16436);
return statearr_16620;
})();if(cljs.core.truth_(inst_16437))
{var statearr_16621_16682 = state_16549__$1;(statearr_16621_16682[(1)] = (13));
} else
{var statearr_16622_16683 = state_16549__$1;(statearr_16622_16683[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (18)))
{var inst_16470 = (state_16549[(2)]);var state_16549__$1 = state_16549;var statearr_16623_16684 = state_16549__$1;(statearr_16623_16684[(2)] = inst_16470);
(statearr_16623_16684[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (42)))
{var state_16549__$1 = state_16549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16549__$1,(45),dchan);
} else
{if((state_val_16550 === (37)))
{var inst_16506 = (state_16549[(17)]);var inst_16515 = cljs.core.first.call(null,inst_16506);var state_16549__$1 = (function (){var statearr_16624 = state_16549;(statearr_16624[(25)] = inst_16515);
return statearr_16624;
})();var statearr_16625_16685 = state_16549__$1;(statearr_16625_16685[(2)] = null);
(statearr_16625_16685[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16550 === (8)))
{var inst_16428 = (state_16549[(13)]);var inst_16429 = (state_16549[(14)]);var inst_16431 = (inst_16429 < inst_16428);var inst_16432 = inst_16431;var state_16549__$1 = state_16549;if(cljs.core.truth_(inst_16432))
{var statearr_16626_16686 = state_16549__$1;(statearr_16626_16686[(1)] = (10));
} else
{var statearr_16627_16687 = state_16549__$1;(statearr_16627_16687[(1)] = (11));
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
});})(c__5708__auto___16635,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___16635,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16631[(0)] = state_machine__5694__auto__);
(statearr_16631[(1)] = (1));
return statearr_16631;
});
var state_machine__5694__auto____1 = (function (state_16549){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16549);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16632){if((e16632 instanceof Object))
{var ex__5697__auto__ = e16632;var statearr_16633_16688 = state_16549;(statearr_16633_16688[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16549);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16632;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16689 = state_16549;
state_16549 = G__16689;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16549){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16635,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_16634 = f__5709__auto__.call(null);(statearr_16634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16635);
return statearr_16634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16635,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16691 = {};return obj16691;
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
;var m = (function (){if(typeof cljs.core.async.t16801 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16801 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16802){
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
this.meta16802 = meta16802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16801.cljs$lang$type = true;
cljs.core.async.t16801.cljs$lang$ctorStr = "cljs.core.async/t16801";
cljs.core.async.t16801.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16801");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16801.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16801.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16801.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16801.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16801.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16801.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16801.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16801.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16803){var self__ = this;
var _16803__$1 = this;return self__.meta16802;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16803,meta16802__$1){var self__ = this;
var _16803__$1 = this;return (new cljs.core.async.t16801(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16802__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16801 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16801(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16802){return (new cljs.core.async.t16801(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16802));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16801(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___16910 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16910,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16910,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16868){var state_val_16869 = (state_16868[(1)]);if((state_val_16869 === (7)))
{var inst_16817 = (state_16868[(7)]);var inst_16822 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16817);var state_16868__$1 = state_16868;var statearr_16870_16911 = state_16868__$1;(statearr_16870_16911[(2)] = inst_16822);
(statearr_16870_16911[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (20)))
{var inst_16832 = (state_16868[(8)]);var state_16868__$1 = state_16868;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16868__$1,(23),out,inst_16832);
} else
{if((state_val_16869 === (1)))
{var inst_16807 = (state_16868[(9)]);var inst_16807__$1 = calc_state.call(null);var inst_16808 = cljs.core.seq_QMARK_.call(null,inst_16807__$1);var state_16868__$1 = (function (){var statearr_16871 = state_16868;(statearr_16871[(9)] = inst_16807__$1);
return statearr_16871;
})();if(inst_16808)
{var statearr_16872_16912 = state_16868__$1;(statearr_16872_16912[(1)] = (2));
} else
{var statearr_16873_16913 = state_16868__$1;(statearr_16873_16913[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (4)))
{var inst_16807 = (state_16868[(9)]);var inst_16813 = (state_16868[(2)]);var inst_16814 = cljs.core.get.call(null,inst_16813,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16815 = cljs.core.get.call(null,inst_16813,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16816 = cljs.core.get.call(null,inst_16813,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16817 = inst_16807;var state_16868__$1 = (function (){var statearr_16874 = state_16868;(statearr_16874[(10)] = inst_16814);
(statearr_16874[(7)] = inst_16817);
(statearr_16874[(11)] = inst_16816);
(statearr_16874[(12)] = inst_16815);
return statearr_16874;
})();var statearr_16875_16914 = state_16868__$1;(statearr_16875_16914[(2)] = null);
(statearr_16875_16914[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (15)))
{var state_16868__$1 = state_16868;var statearr_16876_16915 = state_16868__$1;(statearr_16876_16915[(2)] = null);
(statearr_16876_16915[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (21)))
{var state_16868__$1 = state_16868;var statearr_16877_16916 = state_16868__$1;(statearr_16877_16916[(2)] = null);
(statearr_16877_16916[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (13)))
{var inst_16864 = (state_16868[(2)]);var state_16868__$1 = state_16868;var statearr_16878_16917 = state_16868__$1;(statearr_16878_16917[(2)] = inst_16864);
(statearr_16878_16917[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (22)))
{var inst_16825 = (state_16868[(13)]);var inst_16861 = (state_16868[(2)]);var inst_16817 = inst_16825;var state_16868__$1 = (function (){var statearr_16879 = state_16868;(statearr_16879[(7)] = inst_16817);
(statearr_16879[(14)] = inst_16861);
return statearr_16879;
})();var statearr_16880_16918 = state_16868__$1;(statearr_16880_16918[(2)] = null);
(statearr_16880_16918[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (6)))
{var inst_16866 = (state_16868[(2)]);var state_16868__$1 = state_16868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16868__$1,inst_16866);
} else
{if((state_val_16869 === (17)))
{var inst_16847 = (state_16868[(15)]);var state_16868__$1 = state_16868;var statearr_16881_16919 = state_16868__$1;(statearr_16881_16919[(2)] = inst_16847);
(statearr_16881_16919[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (3)))
{var inst_16807 = (state_16868[(9)]);var state_16868__$1 = state_16868;var statearr_16882_16920 = state_16868__$1;(statearr_16882_16920[(2)] = inst_16807);
(statearr_16882_16920[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (12)))
{var inst_16847 = (state_16868[(15)]);var inst_16828 = (state_16868[(16)]);var inst_16833 = (state_16868[(17)]);var inst_16847__$1 = inst_16828.call(null,inst_16833);var state_16868__$1 = (function (){var statearr_16883 = state_16868;(statearr_16883[(15)] = inst_16847__$1);
return statearr_16883;
})();if(cljs.core.truth_(inst_16847__$1))
{var statearr_16884_16921 = state_16868__$1;(statearr_16884_16921[(1)] = (17));
} else
{var statearr_16885_16922 = state_16868__$1;(statearr_16885_16922[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (2)))
{var inst_16807 = (state_16868[(9)]);var inst_16810 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16807);var state_16868__$1 = state_16868;var statearr_16886_16923 = state_16868__$1;(statearr_16886_16923[(2)] = inst_16810);
(statearr_16886_16923[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (23)))
{var inst_16858 = (state_16868[(2)]);var state_16868__$1 = state_16868;var statearr_16887_16924 = state_16868__$1;(statearr_16887_16924[(2)] = inst_16858);
(statearr_16887_16924[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (19)))
{var inst_16855 = (state_16868[(2)]);var state_16868__$1 = state_16868;if(cljs.core.truth_(inst_16855))
{var statearr_16888_16925 = state_16868__$1;(statearr_16888_16925[(1)] = (20));
} else
{var statearr_16889_16926 = state_16868__$1;(statearr_16889_16926[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (11)))
{var inst_16832 = (state_16868[(8)]);var inst_16838 = (inst_16832 == null);var state_16868__$1 = state_16868;if(cljs.core.truth_(inst_16838))
{var statearr_16890_16927 = state_16868__$1;(statearr_16890_16927[(1)] = (14));
} else
{var statearr_16891_16928 = state_16868__$1;(statearr_16891_16928[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (9)))
{var inst_16825 = (state_16868[(13)]);var inst_16825__$1 = (state_16868[(2)]);var inst_16826 = cljs.core.get.call(null,inst_16825__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16827 = cljs.core.get.call(null,inst_16825__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16828 = cljs.core.get.call(null,inst_16825__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16868__$1 = (function (){var statearr_16892 = state_16868;(statearr_16892[(16)] = inst_16828);
(statearr_16892[(13)] = inst_16825__$1);
(statearr_16892[(18)] = inst_16827);
return statearr_16892;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16868__$1,(10),inst_16826);
} else
{if((state_val_16869 === (5)))
{var inst_16817 = (state_16868[(7)]);var inst_16820 = cljs.core.seq_QMARK_.call(null,inst_16817);var state_16868__$1 = state_16868;if(inst_16820)
{var statearr_16893_16929 = state_16868__$1;(statearr_16893_16929[(1)] = (7));
} else
{var statearr_16894_16930 = state_16868__$1;(statearr_16894_16930[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (14)))
{var inst_16833 = (state_16868[(17)]);var inst_16840 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16833);var state_16868__$1 = state_16868;var statearr_16895_16931 = state_16868__$1;(statearr_16895_16931[(2)] = inst_16840);
(statearr_16895_16931[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (16)))
{var inst_16843 = (state_16868[(2)]);var inst_16844 = calc_state.call(null);var inst_16817 = inst_16844;var state_16868__$1 = (function (){var statearr_16896 = state_16868;(statearr_16896[(7)] = inst_16817);
(statearr_16896[(19)] = inst_16843);
return statearr_16896;
})();var statearr_16897_16932 = state_16868__$1;(statearr_16897_16932[(2)] = null);
(statearr_16897_16932[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (10)))
{var inst_16832 = (state_16868[(8)]);var inst_16833 = (state_16868[(17)]);var inst_16831 = (state_16868[(2)]);var inst_16832__$1 = cljs.core.nth.call(null,inst_16831,(0),null);var inst_16833__$1 = cljs.core.nth.call(null,inst_16831,(1),null);var inst_16834 = (inst_16832__$1 == null);var inst_16835 = cljs.core._EQ_.call(null,inst_16833__$1,change);var inst_16836 = (inst_16834) || (inst_16835);var state_16868__$1 = (function (){var statearr_16898 = state_16868;(statearr_16898[(8)] = inst_16832__$1);
(statearr_16898[(17)] = inst_16833__$1);
return statearr_16898;
})();if(cljs.core.truth_(inst_16836))
{var statearr_16899_16933 = state_16868__$1;(statearr_16899_16933[(1)] = (11));
} else
{var statearr_16900_16934 = state_16868__$1;(statearr_16900_16934[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (18)))
{var inst_16828 = (state_16868[(16)]);var inst_16833 = (state_16868[(17)]);var inst_16827 = (state_16868[(18)]);var inst_16850 = cljs.core.empty_QMARK_.call(null,inst_16828);var inst_16851 = inst_16827.call(null,inst_16833);var inst_16852 = cljs.core.not.call(null,inst_16851);var inst_16853 = (inst_16850) && (inst_16852);var state_16868__$1 = state_16868;var statearr_16901_16935 = state_16868__$1;(statearr_16901_16935[(2)] = inst_16853);
(statearr_16901_16935[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16869 === (8)))
{var inst_16817 = (state_16868[(7)]);var state_16868__$1 = state_16868;var statearr_16902_16936 = state_16868__$1;(statearr_16902_16936[(2)] = inst_16817);
(statearr_16902_16936[(1)] = (9));
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
});})(c__5708__auto___16910,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___16910,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16906[(0)] = state_machine__5694__auto__);
(statearr_16906[(1)] = (1));
return statearr_16906;
});
var state_machine__5694__auto____1 = (function (state_16868){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16868);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16907){if((e16907 instanceof Object))
{var ex__5697__auto__ = e16907;var statearr_16908_16937 = state_16868;(statearr_16908_16937[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16868);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16907;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16938 = state_16868;
state_16868 = G__16938;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16868){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16910,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_16909 = f__5709__auto__.call(null);(statearr_16909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16910);
return statearr_16909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16910,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16940 = {};return obj16940;
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
return (function (p1__16941_SHARP_){if(cljs.core.truth_(p1__16941_SHARP_.call(null,topic)))
{return p1__16941_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16941_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17066 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17066 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17067){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17067 = meta17067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17066.cljs$lang$type = true;
cljs.core.async.t17066.cljs$lang$ctorStr = "cljs.core.async/t17066";
cljs.core.async.t17066.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t17066");
});})(mults,ensure_mult))
;
cljs.core.async.t17066.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17066.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17066.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17066.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17066.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17066.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17066.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17068){var self__ = this;
var _17068__$1 = this;return self__.meta17067;
});})(mults,ensure_mult))
;
cljs.core.async.t17066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17068,meta17067__$1){var self__ = this;
var _17068__$1 = this;return (new cljs.core.async.t17066(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17067__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17066 = ((function (mults,ensure_mult){
return (function __GT_t17066(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17067){return (new cljs.core.async.t17066(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17067));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17066(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___17190 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17190,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17190,mults,ensure_mult,p){
return (function (state_17142){var state_val_17143 = (state_17142[(1)]);if((state_val_17143 === (7)))
{var inst_17138 = (state_17142[(2)]);var state_17142__$1 = state_17142;var statearr_17144_17191 = state_17142__$1;(statearr_17144_17191[(2)] = inst_17138);
(statearr_17144_17191[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (20)))
{var state_17142__$1 = state_17142;var statearr_17145_17192 = state_17142__$1;(statearr_17145_17192[(2)] = null);
(statearr_17145_17192[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (1)))
{var state_17142__$1 = state_17142;var statearr_17146_17193 = state_17142__$1;(statearr_17146_17193[(2)] = null);
(statearr_17146_17193[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (24)))
{var inst_17071 = (state_17142[(7)]);var inst_17121 = (state_17142[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17142,(23),Object,null,(22));var inst_17128 = cljs.core.async.muxch_STAR_.call(null,inst_17121);var state_17142__$1 = state_17142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17142__$1,(25),inst_17128,inst_17071);
} else
{if((state_val_17143 === (4)))
{var inst_17071 = (state_17142[(7)]);var inst_17071__$1 = (state_17142[(2)]);var inst_17072 = (inst_17071__$1 == null);var state_17142__$1 = (function (){var statearr_17147 = state_17142;(statearr_17147[(7)] = inst_17071__$1);
return statearr_17147;
})();if(cljs.core.truth_(inst_17072))
{var statearr_17148_17194 = state_17142__$1;(statearr_17148_17194[(1)] = (5));
} else
{var statearr_17149_17195 = state_17142__$1;(statearr_17149_17195[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (15)))
{var inst_17113 = (state_17142[(2)]);var state_17142__$1 = state_17142;var statearr_17150_17196 = state_17142__$1;(statearr_17150_17196[(2)] = inst_17113);
(statearr_17150_17196[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (21)))
{var inst_17135 = (state_17142[(2)]);var state_17142__$1 = (function (){var statearr_17151 = state_17142;(statearr_17151[(9)] = inst_17135);
return statearr_17151;
})();var statearr_17152_17197 = state_17142__$1;(statearr_17152_17197[(2)] = null);
(statearr_17152_17197[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (13)))
{var inst_17095 = (state_17142[(10)]);var inst_17097 = cljs.core.chunked_seq_QMARK_.call(null,inst_17095);var state_17142__$1 = state_17142;if(inst_17097)
{var statearr_17153_17198 = state_17142__$1;(statearr_17153_17198[(1)] = (16));
} else
{var statearr_17154_17199 = state_17142__$1;(statearr_17154_17199[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (22)))
{var inst_17132 = (state_17142[(2)]);var state_17142__$1 = state_17142;var statearr_17155_17200 = state_17142__$1;(statearr_17155_17200[(2)] = inst_17132);
(statearr_17155_17200[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (6)))
{var inst_17119 = (state_17142[(11)]);var inst_17071 = (state_17142[(7)]);var inst_17121 = (state_17142[(8)]);var inst_17119__$1 = topic_fn.call(null,inst_17071);var inst_17120 = cljs.core.deref.call(null,mults);var inst_17121__$1 = cljs.core.get.call(null,inst_17120,inst_17119__$1);var state_17142__$1 = (function (){var statearr_17156 = state_17142;(statearr_17156[(11)] = inst_17119__$1);
(statearr_17156[(8)] = inst_17121__$1);
return statearr_17156;
})();if(cljs.core.truth_(inst_17121__$1))
{var statearr_17157_17201 = state_17142__$1;(statearr_17157_17201[(1)] = (19));
} else
{var statearr_17158_17202 = state_17142__$1;(statearr_17158_17202[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (25)))
{var inst_17130 = (state_17142[(2)]);var state_17142__$1 = state_17142;var statearr_17159_17203 = state_17142__$1;(statearr_17159_17203[(2)] = inst_17130);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17142__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (17)))
{var inst_17095 = (state_17142[(10)]);var inst_17104 = cljs.core.first.call(null,inst_17095);var inst_17105 = cljs.core.async.muxch_STAR_.call(null,inst_17104);var inst_17106 = cljs.core.async.close_BANG_.call(null,inst_17105);var inst_17107 = cljs.core.next.call(null,inst_17095);var inst_17081 = inst_17107;var inst_17082 = null;var inst_17083 = (0);var inst_17084 = (0);var state_17142__$1 = (function (){var statearr_17160 = state_17142;(statearr_17160[(12)] = inst_17083);
(statearr_17160[(13)] = inst_17082);
(statearr_17160[(14)] = inst_17081);
(statearr_17160[(15)] = inst_17084);
(statearr_17160[(16)] = inst_17106);
return statearr_17160;
})();var statearr_17161_17204 = state_17142__$1;(statearr_17161_17204[(2)] = null);
(statearr_17161_17204[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (3)))
{var inst_17140 = (state_17142[(2)]);var state_17142__$1 = state_17142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17142__$1,inst_17140);
} else
{if((state_val_17143 === (12)))
{var inst_17115 = (state_17142[(2)]);var state_17142__$1 = state_17142;var statearr_17162_17205 = state_17142__$1;(statearr_17162_17205[(2)] = inst_17115);
(statearr_17162_17205[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (2)))
{var state_17142__$1 = state_17142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17142__$1,(4),ch);
} else
{if((state_val_17143 === (23)))
{var inst_17119 = (state_17142[(11)]);var inst_17123 = (state_17142[(2)]);var inst_17124 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17119);var state_17142__$1 = (function (){var statearr_17163 = state_17142;(statearr_17163[(17)] = inst_17123);
return statearr_17163;
})();var statearr_17164_17206 = state_17142__$1;(statearr_17164_17206[(2)] = inst_17124);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17142__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (19)))
{var state_17142__$1 = state_17142;var statearr_17165_17207 = state_17142__$1;(statearr_17165_17207[(2)] = null);
(statearr_17165_17207[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (11)))
{var inst_17095 = (state_17142[(10)]);var inst_17081 = (state_17142[(14)]);var inst_17095__$1 = cljs.core.seq.call(null,inst_17081);var state_17142__$1 = (function (){var statearr_17166 = state_17142;(statearr_17166[(10)] = inst_17095__$1);
return statearr_17166;
})();if(inst_17095__$1)
{var statearr_17167_17208 = state_17142__$1;(statearr_17167_17208[(1)] = (13));
} else
{var statearr_17168_17209 = state_17142__$1;(statearr_17168_17209[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (9)))
{var inst_17117 = (state_17142[(2)]);var state_17142__$1 = state_17142;var statearr_17169_17210 = state_17142__$1;(statearr_17169_17210[(2)] = inst_17117);
(statearr_17169_17210[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (5)))
{var inst_17078 = cljs.core.deref.call(null,mults);var inst_17079 = cljs.core.vals.call(null,inst_17078);var inst_17080 = cljs.core.seq.call(null,inst_17079);var inst_17081 = inst_17080;var inst_17082 = null;var inst_17083 = (0);var inst_17084 = (0);var state_17142__$1 = (function (){var statearr_17170 = state_17142;(statearr_17170[(12)] = inst_17083);
(statearr_17170[(13)] = inst_17082);
(statearr_17170[(14)] = inst_17081);
(statearr_17170[(15)] = inst_17084);
return statearr_17170;
})();var statearr_17171_17211 = state_17142__$1;(statearr_17171_17211[(2)] = null);
(statearr_17171_17211[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (14)))
{var state_17142__$1 = state_17142;var statearr_17175_17212 = state_17142__$1;(statearr_17175_17212[(2)] = null);
(statearr_17175_17212[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (16)))
{var inst_17095 = (state_17142[(10)]);var inst_17099 = cljs.core.chunk_first.call(null,inst_17095);var inst_17100 = cljs.core.chunk_rest.call(null,inst_17095);var inst_17101 = cljs.core.count.call(null,inst_17099);var inst_17081 = inst_17100;var inst_17082 = inst_17099;var inst_17083 = inst_17101;var inst_17084 = (0);var state_17142__$1 = (function (){var statearr_17176 = state_17142;(statearr_17176[(12)] = inst_17083);
(statearr_17176[(13)] = inst_17082);
(statearr_17176[(14)] = inst_17081);
(statearr_17176[(15)] = inst_17084);
return statearr_17176;
})();var statearr_17177_17213 = state_17142__$1;(statearr_17177_17213[(2)] = null);
(statearr_17177_17213[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (10)))
{var inst_17083 = (state_17142[(12)]);var inst_17082 = (state_17142[(13)]);var inst_17081 = (state_17142[(14)]);var inst_17084 = (state_17142[(15)]);var inst_17089 = cljs.core._nth.call(null,inst_17082,inst_17084);var inst_17090 = cljs.core.async.muxch_STAR_.call(null,inst_17089);var inst_17091 = cljs.core.async.close_BANG_.call(null,inst_17090);var inst_17092 = (inst_17084 + (1));var tmp17172 = inst_17083;var tmp17173 = inst_17082;var tmp17174 = inst_17081;var inst_17081__$1 = tmp17174;var inst_17082__$1 = tmp17173;var inst_17083__$1 = tmp17172;var inst_17084__$1 = inst_17092;var state_17142__$1 = (function (){var statearr_17178 = state_17142;(statearr_17178[(12)] = inst_17083__$1);
(statearr_17178[(13)] = inst_17082__$1);
(statearr_17178[(18)] = inst_17091);
(statearr_17178[(14)] = inst_17081__$1);
(statearr_17178[(15)] = inst_17084__$1);
return statearr_17178;
})();var statearr_17179_17214 = state_17142__$1;(statearr_17179_17214[(2)] = null);
(statearr_17179_17214[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (18)))
{var inst_17110 = (state_17142[(2)]);var state_17142__$1 = state_17142;var statearr_17180_17215 = state_17142__$1;(statearr_17180_17215[(2)] = inst_17110);
(statearr_17180_17215[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17143 === (8)))
{var inst_17083 = (state_17142[(12)]);var inst_17084 = (state_17142[(15)]);var inst_17086 = (inst_17084 < inst_17083);var inst_17087 = inst_17086;var state_17142__$1 = state_17142;if(cljs.core.truth_(inst_17087))
{var statearr_17181_17216 = state_17142__$1;(statearr_17181_17216[(1)] = (10));
} else
{var statearr_17182_17217 = state_17142__$1;(statearr_17182_17217[(1)] = (11));
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
});})(c__5708__auto___17190,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___17190,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17186[(0)] = state_machine__5694__auto__);
(statearr_17186[(1)] = (1));
return statearr_17186;
});
var state_machine__5694__auto____1 = (function (state_17142){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17142);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17187){if((e17187 instanceof Object))
{var ex__5697__auto__ = e17187;var statearr_17188_17218 = state_17142;(statearr_17188_17218[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17142);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17187;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17219 = state_17142;
state_17142 = G__17219;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17142){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17190,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_17189 = f__5709__auto__.call(null);(statearr_17189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17190);
return statearr_17189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17190,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___17356 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17326){var state_val_17327 = (state_17326[(1)]);if((state_val_17327 === (7)))
{var state_17326__$1 = state_17326;var statearr_17328_17357 = state_17326__$1;(statearr_17328_17357[(2)] = null);
(statearr_17328_17357[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (1)))
{var state_17326__$1 = state_17326;var statearr_17329_17358 = state_17326__$1;(statearr_17329_17358[(2)] = null);
(statearr_17329_17358[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (4)))
{var inst_17290 = (state_17326[(7)]);var inst_17292 = (inst_17290 < cnt);var state_17326__$1 = state_17326;if(cljs.core.truth_(inst_17292))
{var statearr_17330_17359 = state_17326__$1;(statearr_17330_17359[(1)] = (6));
} else
{var statearr_17331_17360 = state_17326__$1;(statearr_17331_17360[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (15)))
{var inst_17322 = (state_17326[(2)]);var state_17326__$1 = state_17326;var statearr_17332_17361 = state_17326__$1;(statearr_17332_17361[(2)] = inst_17322);
(statearr_17332_17361[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (13)))
{var inst_17315 = cljs.core.async.close_BANG_.call(null,out);var state_17326__$1 = state_17326;var statearr_17333_17362 = state_17326__$1;(statearr_17333_17362[(2)] = inst_17315);
(statearr_17333_17362[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (6)))
{var state_17326__$1 = state_17326;var statearr_17334_17363 = state_17326__$1;(statearr_17334_17363[(2)] = null);
(statearr_17334_17363[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (3)))
{var inst_17324 = (state_17326[(2)]);var state_17326__$1 = state_17326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17326__$1,inst_17324);
} else
{if((state_val_17327 === (12)))
{var inst_17312 = (state_17326[(8)]);var inst_17312__$1 = (state_17326[(2)]);var inst_17313 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17312__$1);var state_17326__$1 = (function (){var statearr_17335 = state_17326;(statearr_17335[(8)] = inst_17312__$1);
return statearr_17335;
})();if(cljs.core.truth_(inst_17313))
{var statearr_17336_17364 = state_17326__$1;(statearr_17336_17364[(1)] = (13));
} else
{var statearr_17337_17365 = state_17326__$1;(statearr_17337_17365[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (2)))
{var inst_17289 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17290 = (0);var state_17326__$1 = (function (){var statearr_17338 = state_17326;(statearr_17338[(9)] = inst_17289);
(statearr_17338[(7)] = inst_17290);
return statearr_17338;
})();var statearr_17339_17366 = state_17326__$1;(statearr_17339_17366[(2)] = null);
(statearr_17339_17366[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (11)))
{var inst_17290 = (state_17326[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17326,(10),Object,null,(9));var inst_17299 = chs__$1.call(null,inst_17290);var inst_17300 = done.call(null,inst_17290);var inst_17301 = cljs.core.async.take_BANG_.call(null,inst_17299,inst_17300);var state_17326__$1 = state_17326;var statearr_17340_17367 = state_17326__$1;(statearr_17340_17367[(2)] = inst_17301);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17326__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (9)))
{var inst_17290 = (state_17326[(7)]);var inst_17303 = (state_17326[(2)]);var inst_17304 = (inst_17290 + (1));var inst_17290__$1 = inst_17304;var state_17326__$1 = (function (){var statearr_17341 = state_17326;(statearr_17341[(10)] = inst_17303);
(statearr_17341[(7)] = inst_17290__$1);
return statearr_17341;
})();var statearr_17342_17368 = state_17326__$1;(statearr_17342_17368[(2)] = null);
(statearr_17342_17368[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (5)))
{var inst_17310 = (state_17326[(2)]);var state_17326__$1 = (function (){var statearr_17343 = state_17326;(statearr_17343[(11)] = inst_17310);
return statearr_17343;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17326__$1,(12),dchan);
} else
{if((state_val_17327 === (14)))
{var inst_17312 = (state_17326[(8)]);var inst_17317 = cljs.core.apply.call(null,f,inst_17312);var state_17326__$1 = state_17326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17326__$1,(16),out,inst_17317);
} else
{if((state_val_17327 === (16)))
{var inst_17319 = (state_17326[(2)]);var state_17326__$1 = (function (){var statearr_17344 = state_17326;(statearr_17344[(12)] = inst_17319);
return statearr_17344;
})();var statearr_17345_17369 = state_17326__$1;(statearr_17345_17369[(2)] = null);
(statearr_17345_17369[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (10)))
{var inst_17294 = (state_17326[(2)]);var inst_17295 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17326__$1 = (function (){var statearr_17346 = state_17326;(statearr_17346[(13)] = inst_17294);
return statearr_17346;
})();var statearr_17347_17370 = state_17326__$1;(statearr_17347_17370[(2)] = inst_17295);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17326__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17327 === (8)))
{var inst_17308 = (state_17326[(2)]);var state_17326__$1 = state_17326;var statearr_17348_17371 = state_17326__$1;(statearr_17348_17371[(2)] = inst_17308);
(statearr_17348_17371[(1)] = (5));
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
});})(c__5708__auto___17356,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___17356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17352[(0)] = state_machine__5694__auto__);
(statearr_17352[(1)] = (1));
return statearr_17352;
});
var state_machine__5694__auto____1 = (function (state_17326){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17326);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17353){if((e17353 instanceof Object))
{var ex__5697__auto__ = e17353;var statearr_17354_17372 = state_17326;(statearr_17354_17372[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17326);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17353;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17373 = state_17326;
state_17326 = G__17373;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17326){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17356,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_17355 = f__5709__auto__.call(null);(statearr_17355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17356);
return statearr_17355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17356,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17481 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17481,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17481,out){
return (function (state_17457){var state_val_17458 = (state_17457[(1)]);if((state_val_17458 === (7)))
{var inst_17437 = (state_17457[(7)]);var inst_17436 = (state_17457[(8)]);var inst_17436__$1 = (state_17457[(2)]);var inst_17437__$1 = cljs.core.nth.call(null,inst_17436__$1,(0),null);var inst_17438 = cljs.core.nth.call(null,inst_17436__$1,(1),null);var inst_17439 = (inst_17437__$1 == null);var state_17457__$1 = (function (){var statearr_17459 = state_17457;(statearr_17459[(9)] = inst_17438);
(statearr_17459[(7)] = inst_17437__$1);
(statearr_17459[(8)] = inst_17436__$1);
return statearr_17459;
})();if(cljs.core.truth_(inst_17439))
{var statearr_17460_17482 = state_17457__$1;(statearr_17460_17482[(1)] = (8));
} else
{var statearr_17461_17483 = state_17457__$1;(statearr_17461_17483[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17458 === (1)))
{var inst_17428 = cljs.core.vec.call(null,chs);var inst_17429 = inst_17428;var state_17457__$1 = (function (){var statearr_17462 = state_17457;(statearr_17462[(10)] = inst_17429);
return statearr_17462;
})();var statearr_17463_17484 = state_17457__$1;(statearr_17463_17484[(2)] = null);
(statearr_17463_17484[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17458 === (4)))
{var inst_17429 = (state_17457[(10)]);var state_17457__$1 = state_17457;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17457__$1,(7),inst_17429);
} else
{if((state_val_17458 === (6)))
{var inst_17453 = (state_17457[(2)]);var state_17457__$1 = state_17457;var statearr_17464_17485 = state_17457__$1;(statearr_17464_17485[(2)] = inst_17453);
(statearr_17464_17485[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17458 === (3)))
{var inst_17455 = (state_17457[(2)]);var state_17457__$1 = state_17457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17457__$1,inst_17455);
} else
{if((state_val_17458 === (2)))
{var inst_17429 = (state_17457[(10)]);var inst_17431 = cljs.core.count.call(null,inst_17429);var inst_17432 = (inst_17431 > (0));var state_17457__$1 = state_17457;if(cljs.core.truth_(inst_17432))
{var statearr_17466_17486 = state_17457__$1;(statearr_17466_17486[(1)] = (4));
} else
{var statearr_17467_17487 = state_17457__$1;(statearr_17467_17487[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17458 === (11)))
{var inst_17429 = (state_17457[(10)]);var inst_17446 = (state_17457[(2)]);var tmp17465 = inst_17429;var inst_17429__$1 = tmp17465;var state_17457__$1 = (function (){var statearr_17468 = state_17457;(statearr_17468[(10)] = inst_17429__$1);
(statearr_17468[(11)] = inst_17446);
return statearr_17468;
})();var statearr_17469_17488 = state_17457__$1;(statearr_17469_17488[(2)] = null);
(statearr_17469_17488[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17458 === (9)))
{var inst_17437 = (state_17457[(7)]);var state_17457__$1 = state_17457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17457__$1,(11),out,inst_17437);
} else
{if((state_val_17458 === (5)))
{var inst_17451 = cljs.core.async.close_BANG_.call(null,out);var state_17457__$1 = state_17457;var statearr_17470_17489 = state_17457__$1;(statearr_17470_17489[(2)] = inst_17451);
(statearr_17470_17489[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17458 === (10)))
{var inst_17449 = (state_17457[(2)]);var state_17457__$1 = state_17457;var statearr_17471_17490 = state_17457__$1;(statearr_17471_17490[(2)] = inst_17449);
(statearr_17471_17490[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17458 === (8)))
{var inst_17429 = (state_17457[(10)]);var inst_17438 = (state_17457[(9)]);var inst_17437 = (state_17457[(7)]);var inst_17436 = (state_17457[(8)]);var inst_17441 = (function (){var c = inst_17438;var v = inst_17437;var vec__17434 = inst_17436;var cs = inst_17429;return ((function (c,v,vec__17434,cs,inst_17429,inst_17438,inst_17437,inst_17436,state_val_17458,c__5708__auto___17481,out){
return (function (p1__17374_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17374_SHARP_);
});
;})(c,v,vec__17434,cs,inst_17429,inst_17438,inst_17437,inst_17436,state_val_17458,c__5708__auto___17481,out))
})();var inst_17442 = cljs.core.filterv.call(null,inst_17441,inst_17429);var inst_17429__$1 = inst_17442;var state_17457__$1 = (function (){var statearr_17472 = state_17457;(statearr_17472[(10)] = inst_17429__$1);
return statearr_17472;
})();var statearr_17473_17491 = state_17457__$1;(statearr_17473_17491[(2)] = null);
(statearr_17473_17491[(1)] = (2));
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
});})(c__5708__auto___17481,out))
;return ((function (switch__5693__auto__,c__5708__auto___17481,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17477 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17477[(0)] = state_machine__5694__auto__);
(statearr_17477[(1)] = (1));
return statearr_17477;
});
var state_machine__5694__auto____1 = (function (state_17457){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17457);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17478){if((e17478 instanceof Object))
{var ex__5697__auto__ = e17478;var statearr_17479_17492 = state_17457;(statearr_17479_17492[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17457);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17478;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17493 = state_17457;
state_17457 = G__17493;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17457){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17481,out))
})();var state__5710__auto__ = (function (){var statearr_17480 = f__5709__auto__.call(null);(statearr_17480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17481);
return statearr_17480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17481,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17586 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17586,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17586,out){
return (function (state_17563){var state_val_17564 = (state_17563[(1)]);if((state_val_17564 === (7)))
{var inst_17545 = (state_17563[(7)]);var inst_17545__$1 = (state_17563[(2)]);var inst_17546 = (inst_17545__$1 == null);var inst_17547 = cljs.core.not.call(null,inst_17546);var state_17563__$1 = (function (){var statearr_17565 = state_17563;(statearr_17565[(7)] = inst_17545__$1);
return statearr_17565;
})();if(inst_17547)
{var statearr_17566_17587 = state_17563__$1;(statearr_17566_17587[(1)] = (8));
} else
{var statearr_17567_17588 = state_17563__$1;(statearr_17567_17588[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17564 === (1)))
{var inst_17540 = (0);var state_17563__$1 = (function (){var statearr_17568 = state_17563;(statearr_17568[(8)] = inst_17540);
return statearr_17568;
})();var statearr_17569_17589 = state_17563__$1;(statearr_17569_17589[(2)] = null);
(statearr_17569_17589[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17564 === (4)))
{var state_17563__$1 = state_17563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17563__$1,(7),ch);
} else
{if((state_val_17564 === (6)))
{var inst_17558 = (state_17563[(2)]);var state_17563__$1 = state_17563;var statearr_17570_17590 = state_17563__$1;(statearr_17570_17590[(2)] = inst_17558);
(statearr_17570_17590[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17564 === (3)))
{var inst_17560 = (state_17563[(2)]);var inst_17561 = cljs.core.async.close_BANG_.call(null,out);var state_17563__$1 = (function (){var statearr_17571 = state_17563;(statearr_17571[(9)] = inst_17560);
return statearr_17571;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17563__$1,inst_17561);
} else
{if((state_val_17564 === (2)))
{var inst_17540 = (state_17563[(8)]);var inst_17542 = (inst_17540 < n);var state_17563__$1 = state_17563;if(cljs.core.truth_(inst_17542))
{var statearr_17572_17591 = state_17563__$1;(statearr_17572_17591[(1)] = (4));
} else
{var statearr_17573_17592 = state_17563__$1;(statearr_17573_17592[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17564 === (11)))
{var inst_17540 = (state_17563[(8)]);var inst_17550 = (state_17563[(2)]);var inst_17551 = (inst_17540 + (1));var inst_17540__$1 = inst_17551;var state_17563__$1 = (function (){var statearr_17574 = state_17563;(statearr_17574[(8)] = inst_17540__$1);
(statearr_17574[(10)] = inst_17550);
return statearr_17574;
})();var statearr_17575_17593 = state_17563__$1;(statearr_17575_17593[(2)] = null);
(statearr_17575_17593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17564 === (9)))
{var state_17563__$1 = state_17563;var statearr_17576_17594 = state_17563__$1;(statearr_17576_17594[(2)] = null);
(statearr_17576_17594[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17564 === (5)))
{var state_17563__$1 = state_17563;var statearr_17577_17595 = state_17563__$1;(statearr_17577_17595[(2)] = null);
(statearr_17577_17595[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17564 === (10)))
{var inst_17555 = (state_17563[(2)]);var state_17563__$1 = state_17563;var statearr_17578_17596 = state_17563__$1;(statearr_17578_17596[(2)] = inst_17555);
(statearr_17578_17596[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17564 === (8)))
{var inst_17545 = (state_17563[(7)]);var state_17563__$1 = state_17563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17563__$1,(11),out,inst_17545);
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
});})(c__5708__auto___17586,out))
;return ((function (switch__5693__auto__,c__5708__auto___17586,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17582 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17582[(0)] = state_machine__5694__auto__);
(statearr_17582[(1)] = (1));
return statearr_17582;
});
var state_machine__5694__auto____1 = (function (state_17563){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17563);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17583){if((e17583 instanceof Object))
{var ex__5697__auto__ = e17583;var statearr_17584_17597 = state_17563;(statearr_17584_17597[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17583;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17598 = state_17563;
state_17563 = G__17598;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17563){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17586,out))
})();var state__5710__auto__ = (function (){var statearr_17585 = f__5709__auto__.call(null);(statearr_17585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17586);
return statearr_17585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17586,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17695 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17695,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17695,out){
return (function (state_17670){var state_val_17671 = (state_17670[(1)]);if((state_val_17671 === (7)))
{var inst_17665 = (state_17670[(2)]);var state_17670__$1 = state_17670;var statearr_17672_17696 = state_17670__$1;(statearr_17672_17696[(2)] = inst_17665);
(statearr_17672_17696[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17671 === (1)))
{var inst_17647 = null;var state_17670__$1 = (function (){var statearr_17673 = state_17670;(statearr_17673[(7)] = inst_17647);
return statearr_17673;
})();var statearr_17674_17697 = state_17670__$1;(statearr_17674_17697[(2)] = null);
(statearr_17674_17697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17671 === (4)))
{var inst_17650 = (state_17670[(8)]);var inst_17650__$1 = (state_17670[(2)]);var inst_17651 = (inst_17650__$1 == null);var inst_17652 = cljs.core.not.call(null,inst_17651);var state_17670__$1 = (function (){var statearr_17675 = state_17670;(statearr_17675[(8)] = inst_17650__$1);
return statearr_17675;
})();if(inst_17652)
{var statearr_17676_17698 = state_17670__$1;(statearr_17676_17698[(1)] = (5));
} else
{var statearr_17677_17699 = state_17670__$1;(statearr_17677_17699[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17671 === (6)))
{var state_17670__$1 = state_17670;var statearr_17678_17700 = state_17670__$1;(statearr_17678_17700[(2)] = null);
(statearr_17678_17700[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17671 === (3)))
{var inst_17667 = (state_17670[(2)]);var inst_17668 = cljs.core.async.close_BANG_.call(null,out);var state_17670__$1 = (function (){var statearr_17679 = state_17670;(statearr_17679[(9)] = inst_17667);
return statearr_17679;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17670__$1,inst_17668);
} else
{if((state_val_17671 === (2)))
{var state_17670__$1 = state_17670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17670__$1,(4),ch);
} else
{if((state_val_17671 === (11)))
{var inst_17650 = (state_17670[(8)]);var inst_17659 = (state_17670[(2)]);var inst_17647 = inst_17650;var state_17670__$1 = (function (){var statearr_17680 = state_17670;(statearr_17680[(10)] = inst_17659);
(statearr_17680[(7)] = inst_17647);
return statearr_17680;
})();var statearr_17681_17701 = state_17670__$1;(statearr_17681_17701[(2)] = null);
(statearr_17681_17701[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17671 === (9)))
{var inst_17650 = (state_17670[(8)]);var state_17670__$1 = state_17670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17670__$1,(11),out,inst_17650);
} else
{if((state_val_17671 === (5)))
{var inst_17647 = (state_17670[(7)]);var inst_17650 = (state_17670[(8)]);var inst_17654 = cljs.core._EQ_.call(null,inst_17650,inst_17647);var state_17670__$1 = state_17670;if(inst_17654)
{var statearr_17683_17702 = state_17670__$1;(statearr_17683_17702[(1)] = (8));
} else
{var statearr_17684_17703 = state_17670__$1;(statearr_17684_17703[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17671 === (10)))
{var inst_17662 = (state_17670[(2)]);var state_17670__$1 = state_17670;var statearr_17685_17704 = state_17670__$1;(statearr_17685_17704[(2)] = inst_17662);
(statearr_17685_17704[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17671 === (8)))
{var inst_17647 = (state_17670[(7)]);var tmp17682 = inst_17647;var inst_17647__$1 = tmp17682;var state_17670__$1 = (function (){var statearr_17686 = state_17670;(statearr_17686[(7)] = inst_17647__$1);
return statearr_17686;
})();var statearr_17687_17705 = state_17670__$1;(statearr_17687_17705[(2)] = null);
(statearr_17687_17705[(1)] = (2));
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
});})(c__5708__auto___17695,out))
;return ((function (switch__5693__auto__,c__5708__auto___17695,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17691 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17691[(0)] = state_machine__5694__auto__);
(statearr_17691[(1)] = (1));
return statearr_17691;
});
var state_machine__5694__auto____1 = (function (state_17670){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17670);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17692){if((e17692 instanceof Object))
{var ex__5697__auto__ = e17692;var statearr_17693_17706 = state_17670;(statearr_17693_17706[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17692;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17707 = state_17670;
state_17670 = G__17707;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17670){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17695,out))
})();var state__5710__auto__ = (function (){var statearr_17694 = f__5709__auto__.call(null);(statearr_17694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17695);
return statearr_17694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17695,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17842 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17842,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17842,out){
return (function (state_17812){var state_val_17813 = (state_17812[(1)]);if((state_val_17813 === (7)))
{var inst_17808 = (state_17812[(2)]);var state_17812__$1 = state_17812;var statearr_17814_17843 = state_17812__$1;(statearr_17814_17843[(2)] = inst_17808);
(statearr_17814_17843[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17813 === (1)))
{var inst_17775 = (new Array(n));var inst_17776 = inst_17775;var inst_17777 = (0);var state_17812__$1 = (function (){var statearr_17815 = state_17812;(statearr_17815[(7)] = inst_17777);
(statearr_17815[(8)] = inst_17776);
return statearr_17815;
})();var statearr_17816_17844 = state_17812__$1;(statearr_17816_17844[(2)] = null);
(statearr_17816_17844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17813 === (4)))
{var inst_17780 = (state_17812[(9)]);var inst_17780__$1 = (state_17812[(2)]);var inst_17781 = (inst_17780__$1 == null);var inst_17782 = cljs.core.not.call(null,inst_17781);var state_17812__$1 = (function (){var statearr_17817 = state_17812;(statearr_17817[(9)] = inst_17780__$1);
return statearr_17817;
})();if(inst_17782)
{var statearr_17818_17845 = state_17812__$1;(statearr_17818_17845[(1)] = (5));
} else
{var statearr_17819_17846 = state_17812__$1;(statearr_17819_17846[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17813 === (15)))
{var inst_17802 = (state_17812[(2)]);var state_17812__$1 = state_17812;var statearr_17820_17847 = state_17812__$1;(statearr_17820_17847[(2)] = inst_17802);
(statearr_17820_17847[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17813 === (13)))
{var state_17812__$1 = state_17812;var statearr_17821_17848 = state_17812__$1;(statearr_17821_17848[(2)] = null);
(statearr_17821_17848[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17813 === (6)))
{var inst_17777 = (state_17812[(7)]);var inst_17798 = (inst_17777 > (0));var state_17812__$1 = state_17812;if(cljs.core.truth_(inst_17798))
{var statearr_17822_17849 = state_17812__$1;(statearr_17822_17849[(1)] = (12));
} else
{var statearr_17823_17850 = state_17812__$1;(statearr_17823_17850[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17813 === (3)))
{var inst_17810 = (state_17812[(2)]);var state_17812__$1 = state_17812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17812__$1,inst_17810);
} else
{if((state_val_17813 === (12)))
{var inst_17776 = (state_17812[(8)]);var inst_17800 = cljs.core.vec.call(null,inst_17776);var state_17812__$1 = state_17812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17812__$1,(15),out,inst_17800);
} else
{if((state_val_17813 === (2)))
{var state_17812__$1 = state_17812;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17812__$1,(4),ch);
} else
{if((state_val_17813 === (11)))
{var inst_17792 = (state_17812[(2)]);var inst_17793 = (new Array(n));var inst_17776 = inst_17793;var inst_17777 = (0);var state_17812__$1 = (function (){var statearr_17824 = state_17812;(statearr_17824[(7)] = inst_17777);
(statearr_17824[(10)] = inst_17792);
(statearr_17824[(8)] = inst_17776);
return statearr_17824;
})();var statearr_17825_17851 = state_17812__$1;(statearr_17825_17851[(2)] = null);
(statearr_17825_17851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17813 === (9)))
{var inst_17776 = (state_17812[(8)]);var inst_17790 = cljs.core.vec.call(null,inst_17776);var state_17812__$1 = state_17812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17812__$1,(11),out,inst_17790);
} else
{if((state_val_17813 === (5)))
{var inst_17777 = (state_17812[(7)]);var inst_17785 = (state_17812[(11)]);var inst_17780 = (state_17812[(9)]);var inst_17776 = (state_17812[(8)]);var inst_17784 = (inst_17776[inst_17777] = inst_17780);var inst_17785__$1 = (inst_17777 + (1));var inst_17786 = (inst_17785__$1 < n);var state_17812__$1 = (function (){var statearr_17826 = state_17812;(statearr_17826[(11)] = inst_17785__$1);
(statearr_17826[(12)] = inst_17784);
return statearr_17826;
})();if(cljs.core.truth_(inst_17786))
{var statearr_17827_17852 = state_17812__$1;(statearr_17827_17852[(1)] = (8));
} else
{var statearr_17828_17853 = state_17812__$1;(statearr_17828_17853[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17813 === (14)))
{var inst_17805 = (state_17812[(2)]);var inst_17806 = cljs.core.async.close_BANG_.call(null,out);var state_17812__$1 = (function (){var statearr_17830 = state_17812;(statearr_17830[(13)] = inst_17805);
return statearr_17830;
})();var statearr_17831_17854 = state_17812__$1;(statearr_17831_17854[(2)] = inst_17806);
(statearr_17831_17854[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17813 === (10)))
{var inst_17796 = (state_17812[(2)]);var state_17812__$1 = state_17812;var statearr_17832_17855 = state_17812__$1;(statearr_17832_17855[(2)] = inst_17796);
(statearr_17832_17855[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17813 === (8)))
{var inst_17785 = (state_17812[(11)]);var inst_17776 = (state_17812[(8)]);var tmp17829 = inst_17776;var inst_17776__$1 = tmp17829;var inst_17777 = inst_17785;var state_17812__$1 = (function (){var statearr_17833 = state_17812;(statearr_17833[(7)] = inst_17777);
(statearr_17833[(8)] = inst_17776__$1);
return statearr_17833;
})();var statearr_17834_17856 = state_17812__$1;(statearr_17834_17856[(2)] = null);
(statearr_17834_17856[(1)] = (2));
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
});})(c__5708__auto___17842,out))
;return ((function (switch__5693__auto__,c__5708__auto___17842,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17838[(0)] = state_machine__5694__auto__);
(statearr_17838[(1)] = (1));
return statearr_17838;
});
var state_machine__5694__auto____1 = (function (state_17812){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17812);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17839){if((e17839 instanceof Object))
{var ex__5697__auto__ = e17839;var statearr_17840_17857 = state_17812;(statearr_17840_17857[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17812);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17839;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17858 = state_17812;
state_17812 = G__17858;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17812){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17842,out))
})();var state__5710__auto__ = (function (){var statearr_17841 = f__5709__auto__.call(null);(statearr_17841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17842);
return statearr_17841;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17842,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___18001 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18001,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18001,out){
return (function (state_17971){var state_val_17972 = (state_17971[(1)]);if((state_val_17972 === (7)))
{var inst_17967 = (state_17971[(2)]);var state_17971__$1 = state_17971;var statearr_17973_18002 = state_17971__$1;(statearr_17973_18002[(2)] = inst_17967);
(statearr_17973_18002[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (1)))
{var inst_17930 = [];var inst_17931 = inst_17930;var inst_17932 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_17971__$1 = (function (){var statearr_17974 = state_17971;(statearr_17974[(7)] = inst_17932);
(statearr_17974[(8)] = inst_17931);
return statearr_17974;
})();var statearr_17975_18003 = state_17971__$1;(statearr_17975_18003[(2)] = null);
(statearr_17975_18003[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (4)))
{var inst_17935 = (state_17971[(9)]);var inst_17935__$1 = (state_17971[(2)]);var inst_17936 = (inst_17935__$1 == null);var inst_17937 = cljs.core.not.call(null,inst_17936);var state_17971__$1 = (function (){var statearr_17976 = state_17971;(statearr_17976[(9)] = inst_17935__$1);
return statearr_17976;
})();if(inst_17937)
{var statearr_17977_18004 = state_17971__$1;(statearr_17977_18004[(1)] = (5));
} else
{var statearr_17978_18005 = state_17971__$1;(statearr_17978_18005[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (15)))
{var inst_17961 = (state_17971[(2)]);var state_17971__$1 = state_17971;var statearr_17979_18006 = state_17971__$1;(statearr_17979_18006[(2)] = inst_17961);
(statearr_17979_18006[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (13)))
{var state_17971__$1 = state_17971;var statearr_17980_18007 = state_17971__$1;(statearr_17980_18007[(2)] = null);
(statearr_17980_18007[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (6)))
{var inst_17931 = (state_17971[(8)]);var inst_17956 = inst_17931.length;var inst_17957 = (inst_17956 > (0));var state_17971__$1 = state_17971;if(cljs.core.truth_(inst_17957))
{var statearr_17981_18008 = state_17971__$1;(statearr_17981_18008[(1)] = (12));
} else
{var statearr_17982_18009 = state_17971__$1;(statearr_17982_18009[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (3)))
{var inst_17969 = (state_17971[(2)]);var state_17971__$1 = state_17971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17971__$1,inst_17969);
} else
{if((state_val_17972 === (12)))
{var inst_17931 = (state_17971[(8)]);var inst_17959 = cljs.core.vec.call(null,inst_17931);var state_17971__$1 = state_17971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17971__$1,(15),out,inst_17959);
} else
{if((state_val_17972 === (2)))
{var state_17971__$1 = state_17971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17971__$1,(4),ch);
} else
{if((state_val_17972 === (11)))
{var inst_17935 = (state_17971[(9)]);var inst_17939 = (state_17971[(10)]);var inst_17949 = (state_17971[(2)]);var inst_17950 = [];var inst_17951 = inst_17950.push(inst_17935);var inst_17931 = inst_17950;var inst_17932 = inst_17939;var state_17971__$1 = (function (){var statearr_17983 = state_17971;(statearr_17983[(7)] = inst_17932);
(statearr_17983[(8)] = inst_17931);
(statearr_17983[(11)] = inst_17949);
(statearr_17983[(12)] = inst_17951);
return statearr_17983;
})();var statearr_17984_18010 = state_17971__$1;(statearr_17984_18010[(2)] = null);
(statearr_17984_18010[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (9)))
{var inst_17931 = (state_17971[(8)]);var inst_17947 = cljs.core.vec.call(null,inst_17931);var state_17971__$1 = state_17971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17971__$1,(11),out,inst_17947);
} else
{if((state_val_17972 === (5)))
{var inst_17932 = (state_17971[(7)]);var inst_17935 = (state_17971[(9)]);var inst_17939 = (state_17971[(10)]);var inst_17939__$1 = f.call(null,inst_17935);var inst_17940 = cljs.core._EQ_.call(null,inst_17939__$1,inst_17932);var inst_17941 = cljs.core.keyword_identical_QMARK_.call(null,inst_17932,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_17942 = (inst_17940) || (inst_17941);var state_17971__$1 = (function (){var statearr_17985 = state_17971;(statearr_17985[(10)] = inst_17939__$1);
return statearr_17985;
})();if(cljs.core.truth_(inst_17942))
{var statearr_17986_18011 = state_17971__$1;(statearr_17986_18011[(1)] = (8));
} else
{var statearr_17987_18012 = state_17971__$1;(statearr_17987_18012[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (14)))
{var inst_17964 = (state_17971[(2)]);var inst_17965 = cljs.core.async.close_BANG_.call(null,out);var state_17971__$1 = (function (){var statearr_17989 = state_17971;(statearr_17989[(13)] = inst_17964);
return statearr_17989;
})();var statearr_17990_18013 = state_17971__$1;(statearr_17990_18013[(2)] = inst_17965);
(statearr_17990_18013[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (10)))
{var inst_17954 = (state_17971[(2)]);var state_17971__$1 = state_17971;var statearr_17991_18014 = state_17971__$1;(statearr_17991_18014[(2)] = inst_17954);
(statearr_17991_18014[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17972 === (8)))
{var inst_17931 = (state_17971[(8)]);var inst_17935 = (state_17971[(9)]);var inst_17939 = (state_17971[(10)]);var inst_17944 = inst_17931.push(inst_17935);var tmp17988 = inst_17931;var inst_17931__$1 = tmp17988;var inst_17932 = inst_17939;var state_17971__$1 = (function (){var statearr_17992 = state_17971;(statearr_17992[(7)] = inst_17932);
(statearr_17992[(8)] = inst_17931__$1);
(statearr_17992[(14)] = inst_17944);
return statearr_17992;
})();var statearr_17993_18015 = state_17971__$1;(statearr_17993_18015[(2)] = null);
(statearr_17993_18015[(1)] = (2));
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
});})(c__5708__auto___18001,out))
;return ((function (switch__5693__auto__,c__5708__auto___18001,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17997[(0)] = state_machine__5694__auto__);
(statearr_17997[(1)] = (1));
return statearr_17997;
});
var state_machine__5694__auto____1 = (function (state_17971){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17971);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17998){if((e17998 instanceof Object))
{var ex__5697__auto__ = e17998;var statearr_17999_18016 = state_17971;(statearr_17999_18016[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17971);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17998;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18017 = state_17971;
state_17971 = G__18017;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17971){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18001,out))
})();var state__5710__auto__ = (function (){var statearr_18000 = f__5709__auto__.call(null);(statearr_18000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18001);
return statearr_18000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18001,out))
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
