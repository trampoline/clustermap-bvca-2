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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15443 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15443 = (function (f,fn_handler,meta15444){
this.f = f;
this.fn_handler = fn_handler;
this.meta15444 = meta15444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15443.cljs$lang$type = true;
cljs.core.async.t15443.cljs$lang$ctorStr = "cljs.core.async/t15443";
cljs.core.async.t15443.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15443");
});
cljs.core.async.t15443.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15445){var self__ = this;
var _15445__$1 = this;return self__.meta15444;
});
cljs.core.async.t15443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15445,meta15444__$1){var self__ = this;
var _15445__$1 = this;return (new cljs.core.async.t15443(self__.f,self__.fn_handler,meta15444__$1));
});
cljs.core.async.__GT_t15443 = (function __GT_t15443(f__$1,fn_handler__$1,meta15444){return (new cljs.core.async.t15443(f__$1,fn_handler__$1,meta15444));
});
}
return (new cljs.core.async.t15443(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15447 = buff;if(G__15447)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__15447.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15447.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15447);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15447);
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
{var val_15448 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15448);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15448,ret){
return (function (){return fn1.call(null,val_15448);
});})(val_15448,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___15449 = n;var x_15450 = (0);while(true){
if((x_15450 < n__4414__auto___15449))
{(a[x_15450] = (0));
{
var G__15451 = (x_15450 + (1));
x_15450 = G__15451;
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
var G__15452 = (i + (1));
i = G__15452;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15456 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15456 = (function (flag,alt_flag,meta15457){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15457 = meta15457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15456.cljs$lang$type = true;
cljs.core.async.t15456.cljs$lang$ctorStr = "cljs.core.async/t15456";
cljs.core.async.t15456.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15456");
});})(flag))
;
cljs.core.async.t15456.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15458){var self__ = this;
var _15458__$1 = this;return self__.meta15457;
});})(flag))
;
cljs.core.async.t15456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15458,meta15457__$1){var self__ = this;
var _15458__$1 = this;return (new cljs.core.async.t15456(self__.flag,self__.alt_flag,meta15457__$1));
});})(flag))
;
cljs.core.async.__GT_t15456 = ((function (flag){
return (function __GT_t15456(flag__$1,alt_flag__$1,meta15457){return (new cljs.core.async.t15456(flag__$1,alt_flag__$1,meta15457));
});})(flag))
;
}
return (new cljs.core.async.t15456(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15462 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15462 = (function (cb,flag,alt_handler,meta15463){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15463 = meta15463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15462.cljs$lang$type = true;
cljs.core.async.t15462.cljs$lang$ctorStr = "cljs.core.async/t15462";
cljs.core.async.t15462.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15462");
});
cljs.core.async.t15462.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15464){var self__ = this;
var _15464__$1 = this;return self__.meta15463;
});
cljs.core.async.t15462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15464,meta15463__$1){var self__ = this;
var _15464__$1 = this;return (new cljs.core.async.t15462(self__.cb,self__.flag,self__.alt_handler,meta15463__$1));
});
cljs.core.async.__GT_t15462 = (function __GT_t15462(cb__$1,flag__$1,alt_handler__$1,meta15463){return (new cljs.core.async.t15462(cb__$1,flag__$1,alt_handler__$1,meta15463));
});
}
return (new cljs.core.async.t15462(cb,flag,alt_handler,null));
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
return (function (p1__15465_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15465_SHARP_,port], null));
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
var G__15466 = (i + (1));
i = G__15466;
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
var alts_BANG___delegate = function (ports,p__15467){var map__15469 = p__15467;var map__15469__$1 = ((cljs.core.seq_QMARK_.call(null,map__15469))?cljs.core.apply.call(null,cljs.core.hash_map,map__15469):map__15469);var opts = map__15469__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__15467 = null;if (arguments.length > 1) {
  p__15467 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15467);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15470){
var ports = cljs.core.first(arglist__15470);
var p__15467 = cljs.core.rest(arglist__15470);
return alts_BANG___delegate(ports,p__15467);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15478 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15478 = (function (ch,f,map_LT_,meta15479){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15479 = meta15479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15478.cljs$lang$type = true;
cljs.core.async.t15478.cljs$lang$ctorStr = "cljs.core.async/t15478";
cljs.core.async.t15478.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15478");
});
cljs.core.async.t15478.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15478.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15481 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15481 = (function (fn1,_,meta15479,ch,f,map_LT_,meta15482){
this.fn1 = fn1;
this._ = _;
this.meta15479 = meta15479;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15482 = meta15482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15481.cljs$lang$type = true;
cljs.core.async.t15481.cljs$lang$ctorStr = "cljs.core.async/t15481";
cljs.core.async.t15481.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15481");
});})(___$1))
;
cljs.core.async.t15481.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15481.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15471_SHARP_){return f1.call(null,(((p1__15471_SHARP_ == null))?null:self__.f.call(null,p1__15471_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15483){var self__ = this;
var _15483__$1 = this;return self__.meta15482;
});})(___$1))
;
cljs.core.async.t15481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15483,meta15482__$1){var self__ = this;
var _15483__$1 = this;return (new cljs.core.async.t15481(self__.fn1,self__._,self__.meta15479,self__.ch,self__.f,self__.map_LT_,meta15482__$1));
});})(___$1))
;
cljs.core.async.__GT_t15481 = ((function (___$1){
return (function __GT_t15481(fn1__$1,___$2,meta15479__$1,ch__$2,f__$2,map_LT___$2,meta15482){return (new cljs.core.async.t15481(fn1__$1,___$2,meta15479__$1,ch__$2,f__$2,map_LT___$2,meta15482));
});})(___$1))
;
}
return (new cljs.core.async.t15481(fn1,___$1,self__.meta15479,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15478.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15480){var self__ = this;
var _15480__$1 = this;return self__.meta15479;
});
cljs.core.async.t15478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15480,meta15479__$1){var self__ = this;
var _15480__$1 = this;return (new cljs.core.async.t15478(self__.ch,self__.f,self__.map_LT_,meta15479__$1));
});
cljs.core.async.__GT_t15478 = (function __GT_t15478(ch__$1,f__$1,map_LT___$1,meta15479){return (new cljs.core.async.t15478(ch__$1,f__$1,map_LT___$1,meta15479));
});
}
return (new cljs.core.async.t15478(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15487 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15487 = (function (ch,f,map_GT_,meta15488){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15488 = meta15488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15487.cljs$lang$type = true;
cljs.core.async.t15487.cljs$lang$ctorStr = "cljs.core.async/t15487";
cljs.core.async.t15487.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15487");
});
cljs.core.async.t15487.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15487.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15487.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15487.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15487.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15487.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15489){var self__ = this;
var _15489__$1 = this;return self__.meta15488;
});
cljs.core.async.t15487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15489,meta15488__$1){var self__ = this;
var _15489__$1 = this;return (new cljs.core.async.t15487(self__.ch,self__.f,self__.map_GT_,meta15488__$1));
});
cljs.core.async.__GT_t15487 = (function __GT_t15487(ch__$1,f__$1,map_GT___$1,meta15488){return (new cljs.core.async.t15487(ch__$1,f__$1,map_GT___$1,meta15488));
});
}
return (new cljs.core.async.t15487(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15493 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15493 = (function (ch,p,filter_GT_,meta15494){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15494 = meta15494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15493.cljs$lang$type = true;
cljs.core.async.t15493.cljs$lang$ctorStr = "cljs.core.async/t15493";
cljs.core.async.t15493.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15493");
});
cljs.core.async.t15493.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15493.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15493.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15493.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15493.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15493.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15495){var self__ = this;
var _15495__$1 = this;return self__.meta15494;
});
cljs.core.async.t15493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15495,meta15494__$1){var self__ = this;
var _15495__$1 = this;return (new cljs.core.async.t15493(self__.ch,self__.p,self__.filter_GT_,meta15494__$1));
});
cljs.core.async.__GT_t15493 = (function __GT_t15493(ch__$1,p__$1,filter_GT___$1,meta15494){return (new cljs.core.async.t15493(ch__$1,p__$1,filter_GT___$1,meta15494));
});
}
return (new cljs.core.async.t15493(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___15578 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___15578,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___15578,out){
return (function (state_15557){var state_val_15558 = (state_15557[(1)]);if((state_val_15558 === (7)))
{var inst_15553 = (state_15557[(2)]);var state_15557__$1 = state_15557;var statearr_15559_15579 = state_15557__$1;(statearr_15559_15579[(2)] = inst_15553);
(statearr_15559_15579[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15558 === (1)))
{var state_15557__$1 = state_15557;var statearr_15560_15580 = state_15557__$1;(statearr_15560_15580[(2)] = null);
(statearr_15560_15580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15558 === (4)))
{var inst_15539 = (state_15557[(7)]);var inst_15539__$1 = (state_15557[(2)]);var inst_15540 = (inst_15539__$1 == null);var state_15557__$1 = (function (){var statearr_15561 = state_15557;(statearr_15561[(7)] = inst_15539__$1);
return statearr_15561;
})();if(cljs.core.truth_(inst_15540))
{var statearr_15562_15581 = state_15557__$1;(statearr_15562_15581[(1)] = (5));
} else
{var statearr_15563_15582 = state_15557__$1;(statearr_15563_15582[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15558 === (6)))
{var inst_15539 = (state_15557[(7)]);var inst_15544 = p.call(null,inst_15539);var state_15557__$1 = state_15557;if(cljs.core.truth_(inst_15544))
{var statearr_15564_15583 = state_15557__$1;(statearr_15564_15583[(1)] = (8));
} else
{var statearr_15565_15584 = state_15557__$1;(statearr_15565_15584[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15558 === (3)))
{var inst_15555 = (state_15557[(2)]);var state_15557__$1 = state_15557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15557__$1,inst_15555);
} else
{if((state_val_15558 === (2)))
{var state_15557__$1 = state_15557;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15557__$1,(4),ch);
} else
{if((state_val_15558 === (11)))
{var inst_15547 = (state_15557[(2)]);var state_15557__$1 = state_15557;var statearr_15566_15585 = state_15557__$1;(statearr_15566_15585[(2)] = inst_15547);
(statearr_15566_15585[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15558 === (9)))
{var state_15557__$1 = state_15557;var statearr_15567_15586 = state_15557__$1;(statearr_15567_15586[(2)] = null);
(statearr_15567_15586[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15558 === (5)))
{var inst_15542 = cljs.core.async.close_BANG_.call(null,out);var state_15557__$1 = state_15557;var statearr_15568_15587 = state_15557__$1;(statearr_15568_15587[(2)] = inst_15542);
(statearr_15568_15587[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15558 === (10)))
{var inst_15550 = (state_15557[(2)]);var state_15557__$1 = (function (){var statearr_15569 = state_15557;(statearr_15569[(8)] = inst_15550);
return statearr_15569;
})();var statearr_15570_15588 = state_15557__$1;(statearr_15570_15588[(2)] = null);
(statearr_15570_15588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15558 === (8)))
{var inst_15539 = (state_15557[(7)]);var state_15557__$1 = state_15557;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15557__$1,(11),out,inst_15539);
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
});})(c__5708__auto___15578,out))
;return ((function (switch__5693__auto__,c__5708__auto___15578,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_15574 = [null,null,null,null,null,null,null,null,null];(statearr_15574[(0)] = state_machine__5694__auto__);
(statearr_15574[(1)] = (1));
return statearr_15574;
});
var state_machine__5694__auto____1 = (function (state_15557){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15557);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e15575){if((e15575 instanceof Object))
{var ex__5697__auto__ = e15575;var statearr_15576_15589 = state_15557;(statearr_15576_15589[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15557);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15575;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15590 = state_15557;
state_15557 = G__15590;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15557){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___15578,out))
})();var state__5710__auto__ = (function (){var statearr_15577 = f__5709__auto__.call(null);(statearr_15577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___15578);
return statearr_15577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___15578,out))
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
return (function (state_15742){var state_val_15743 = (state_15742[(1)]);if((state_val_15743 === (7)))
{var inst_15738 = (state_15742[(2)]);var state_15742__$1 = state_15742;var statearr_15744_15781 = state_15742__$1;(statearr_15744_15781[(2)] = inst_15738);
(statearr_15744_15781[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (20)))
{var inst_15713 = (state_15742[(7)]);var inst_15724 = (state_15742[(2)]);var inst_15725 = cljs.core.next.call(null,inst_15713);var inst_15699 = inst_15725;var inst_15700 = null;var inst_15701 = (0);var inst_15702 = (0);var state_15742__$1 = (function (){var statearr_15745 = state_15742;(statearr_15745[(8)] = inst_15701);
(statearr_15745[(9)] = inst_15724);
(statearr_15745[(10)] = inst_15699);
(statearr_15745[(11)] = inst_15700);
(statearr_15745[(12)] = inst_15702);
return statearr_15745;
})();var statearr_15746_15782 = state_15742__$1;(statearr_15746_15782[(2)] = null);
(statearr_15746_15782[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (1)))
{var state_15742__$1 = state_15742;var statearr_15747_15783 = state_15742__$1;(statearr_15747_15783[(2)] = null);
(statearr_15747_15783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (4)))
{var inst_15688 = (state_15742[(13)]);var inst_15688__$1 = (state_15742[(2)]);var inst_15689 = (inst_15688__$1 == null);var state_15742__$1 = (function (){var statearr_15751 = state_15742;(statearr_15751[(13)] = inst_15688__$1);
return statearr_15751;
})();if(cljs.core.truth_(inst_15689))
{var statearr_15752_15784 = state_15742__$1;(statearr_15752_15784[(1)] = (5));
} else
{var statearr_15753_15785 = state_15742__$1;(statearr_15753_15785[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (15)))
{var state_15742__$1 = state_15742;var statearr_15754_15786 = state_15742__$1;(statearr_15754_15786[(2)] = null);
(statearr_15754_15786[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (13)))
{var inst_15701 = (state_15742[(8)]);var inst_15699 = (state_15742[(10)]);var inst_15700 = (state_15742[(11)]);var inst_15702 = (state_15742[(12)]);var inst_15709 = (state_15742[(2)]);var inst_15710 = (inst_15702 + (1));var tmp15748 = inst_15701;var tmp15749 = inst_15699;var tmp15750 = inst_15700;var inst_15699__$1 = tmp15749;var inst_15700__$1 = tmp15750;var inst_15701__$1 = tmp15748;var inst_15702__$1 = inst_15710;var state_15742__$1 = (function (){var statearr_15755 = state_15742;(statearr_15755[(8)] = inst_15701__$1);
(statearr_15755[(10)] = inst_15699__$1);
(statearr_15755[(11)] = inst_15700__$1);
(statearr_15755[(12)] = inst_15702__$1);
(statearr_15755[(14)] = inst_15709);
return statearr_15755;
})();var statearr_15756_15787 = state_15742__$1;(statearr_15756_15787[(2)] = null);
(statearr_15756_15787[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (6)))
{var inst_15688 = (state_15742[(13)]);var inst_15693 = f.call(null,inst_15688);var inst_15698 = cljs.core.seq.call(null,inst_15693);var inst_15699 = inst_15698;var inst_15700 = null;var inst_15701 = (0);var inst_15702 = (0);var state_15742__$1 = (function (){var statearr_15757 = state_15742;(statearr_15757[(8)] = inst_15701);
(statearr_15757[(10)] = inst_15699);
(statearr_15757[(11)] = inst_15700);
(statearr_15757[(12)] = inst_15702);
return statearr_15757;
})();var statearr_15758_15788 = state_15742__$1;(statearr_15758_15788[(2)] = null);
(statearr_15758_15788[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (17)))
{var inst_15713 = (state_15742[(7)]);var inst_15717 = cljs.core.chunk_first.call(null,inst_15713);var inst_15718 = cljs.core.chunk_rest.call(null,inst_15713);var inst_15719 = cljs.core.count.call(null,inst_15717);var inst_15699 = inst_15718;var inst_15700 = inst_15717;var inst_15701 = inst_15719;var inst_15702 = (0);var state_15742__$1 = (function (){var statearr_15759 = state_15742;(statearr_15759[(8)] = inst_15701);
(statearr_15759[(10)] = inst_15699);
(statearr_15759[(11)] = inst_15700);
(statearr_15759[(12)] = inst_15702);
return statearr_15759;
})();var statearr_15760_15789 = state_15742__$1;(statearr_15760_15789[(2)] = null);
(statearr_15760_15789[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (3)))
{var inst_15740 = (state_15742[(2)]);var state_15742__$1 = state_15742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15742__$1,inst_15740);
} else
{if((state_val_15743 === (12)))
{var inst_15733 = (state_15742[(2)]);var state_15742__$1 = state_15742;var statearr_15761_15790 = state_15742__$1;(statearr_15761_15790[(2)] = inst_15733);
(statearr_15761_15790[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (2)))
{var state_15742__$1 = state_15742;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15742__$1,(4),in$);
} else
{if((state_val_15743 === (19)))
{var inst_15728 = (state_15742[(2)]);var state_15742__$1 = state_15742;var statearr_15762_15791 = state_15742__$1;(statearr_15762_15791[(2)] = inst_15728);
(statearr_15762_15791[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (11)))
{var inst_15699 = (state_15742[(10)]);var inst_15713 = (state_15742[(7)]);var inst_15713__$1 = cljs.core.seq.call(null,inst_15699);var state_15742__$1 = (function (){var statearr_15763 = state_15742;(statearr_15763[(7)] = inst_15713__$1);
return statearr_15763;
})();if(inst_15713__$1)
{var statearr_15764_15792 = state_15742__$1;(statearr_15764_15792[(1)] = (14));
} else
{var statearr_15765_15793 = state_15742__$1;(statearr_15765_15793[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (9)))
{var inst_15735 = (state_15742[(2)]);var state_15742__$1 = (function (){var statearr_15766 = state_15742;(statearr_15766[(15)] = inst_15735);
return statearr_15766;
})();var statearr_15767_15794 = state_15742__$1;(statearr_15767_15794[(2)] = null);
(statearr_15767_15794[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (5)))
{var inst_15691 = cljs.core.async.close_BANG_.call(null,out);var state_15742__$1 = state_15742;var statearr_15768_15795 = state_15742__$1;(statearr_15768_15795[(2)] = inst_15691);
(statearr_15768_15795[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (14)))
{var inst_15713 = (state_15742[(7)]);var inst_15715 = cljs.core.chunked_seq_QMARK_.call(null,inst_15713);var state_15742__$1 = state_15742;if(inst_15715)
{var statearr_15769_15796 = state_15742__$1;(statearr_15769_15796[(1)] = (17));
} else
{var statearr_15770_15797 = state_15742__$1;(statearr_15770_15797[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (16)))
{var inst_15731 = (state_15742[(2)]);var state_15742__$1 = state_15742;var statearr_15771_15798 = state_15742__$1;(statearr_15771_15798[(2)] = inst_15731);
(statearr_15771_15798[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15743 === (10)))
{var inst_15700 = (state_15742[(11)]);var inst_15702 = (state_15742[(12)]);var inst_15707 = cljs.core._nth.call(null,inst_15700,inst_15702);var state_15742__$1 = state_15742;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15742__$1,(13),out,inst_15707);
} else
{if((state_val_15743 === (18)))
{var inst_15713 = (state_15742[(7)]);var inst_15722 = cljs.core.first.call(null,inst_15713);var state_15742__$1 = state_15742;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15742__$1,(20),out,inst_15722);
} else
{if((state_val_15743 === (8)))
{var inst_15701 = (state_15742[(8)]);var inst_15702 = (state_15742[(12)]);var inst_15704 = (inst_15702 < inst_15701);var inst_15705 = inst_15704;var state_15742__$1 = state_15742;if(cljs.core.truth_(inst_15705))
{var statearr_15772_15799 = state_15742__$1;(statearr_15772_15799[(1)] = (10));
} else
{var statearr_15773_15800 = state_15742__$1;(statearr_15773_15800[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_15777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15777[(0)] = state_machine__5694__auto__);
(statearr_15777[(1)] = (1));
return statearr_15777;
});
var state_machine__5694__auto____1 = (function (state_15742){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15742);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e15778){if((e15778 instanceof Object))
{var ex__5697__auto__ = e15778;var statearr_15779_15801 = state_15742;(statearr_15779_15801[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15742);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15778;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15802 = state_15742;
state_15742 = G__15802;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15742){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_15780 = f__5709__auto__.call(null);(statearr_15780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_15780;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___15883 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___15883){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___15883){
return (function (state_15862){var state_val_15863 = (state_15862[(1)]);if((state_val_15863 === (7)))
{var inst_15858 = (state_15862[(2)]);var state_15862__$1 = state_15862;var statearr_15864_15884 = state_15862__$1;(statearr_15864_15884[(2)] = inst_15858);
(statearr_15864_15884[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (1)))
{var state_15862__$1 = state_15862;var statearr_15865_15885 = state_15862__$1;(statearr_15865_15885[(2)] = null);
(statearr_15865_15885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (4)))
{var inst_15845 = (state_15862[(7)]);var inst_15845__$1 = (state_15862[(2)]);var inst_15846 = (inst_15845__$1 == null);var state_15862__$1 = (function (){var statearr_15866 = state_15862;(statearr_15866[(7)] = inst_15845__$1);
return statearr_15866;
})();if(cljs.core.truth_(inst_15846))
{var statearr_15867_15886 = state_15862__$1;(statearr_15867_15886[(1)] = (5));
} else
{var statearr_15868_15887 = state_15862__$1;(statearr_15868_15887[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (6)))
{var inst_15845 = (state_15862[(7)]);var state_15862__$1 = state_15862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15862__$1,(11),to,inst_15845);
} else
{if((state_val_15863 === (3)))
{var inst_15860 = (state_15862[(2)]);var state_15862__$1 = state_15862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15862__$1,inst_15860);
} else
{if((state_val_15863 === (2)))
{var state_15862__$1 = state_15862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15862__$1,(4),from);
} else
{if((state_val_15863 === (11)))
{var inst_15855 = (state_15862[(2)]);var state_15862__$1 = (function (){var statearr_15869 = state_15862;(statearr_15869[(8)] = inst_15855);
return statearr_15869;
})();var statearr_15870_15888 = state_15862__$1;(statearr_15870_15888[(2)] = null);
(statearr_15870_15888[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (9)))
{var state_15862__$1 = state_15862;var statearr_15871_15889 = state_15862__$1;(statearr_15871_15889[(2)] = null);
(statearr_15871_15889[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (5)))
{var state_15862__$1 = state_15862;if(cljs.core.truth_(close_QMARK_))
{var statearr_15872_15890 = state_15862__$1;(statearr_15872_15890[(1)] = (8));
} else
{var statearr_15873_15891 = state_15862__$1;(statearr_15873_15891[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (10)))
{var inst_15852 = (state_15862[(2)]);var state_15862__$1 = state_15862;var statearr_15874_15892 = state_15862__$1;(statearr_15874_15892[(2)] = inst_15852);
(statearr_15874_15892[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (8)))
{var inst_15849 = cljs.core.async.close_BANG_.call(null,to);var state_15862__$1 = state_15862;var statearr_15875_15893 = state_15862__$1;(statearr_15875_15893[(2)] = inst_15849);
(statearr_15875_15893[(1)] = (10));
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
});})(c__5708__auto___15883))
;return ((function (switch__5693__auto__,c__5708__auto___15883){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_15879 = [null,null,null,null,null,null,null,null,null];(statearr_15879[(0)] = state_machine__5694__auto__);
(statearr_15879[(1)] = (1));
return statearr_15879;
});
var state_machine__5694__auto____1 = (function (state_15862){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15862);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e15880){if((e15880 instanceof Object))
{var ex__5697__auto__ = e15880;var statearr_15881_15894 = state_15862;(statearr_15881_15894[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15880;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15895 = state_15862;
state_15862 = G__15895;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15862){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___15883))
})();var state__5710__auto__ = (function (){var statearr_15882 = f__5709__auto__.call(null);(statearr_15882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___15883);
return statearr_15882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___15883))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___15982 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___15982,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___15982,tc,fc){
return (function (state_15960){var state_val_15961 = (state_15960[(1)]);if((state_val_15961 === (7)))
{var inst_15956 = (state_15960[(2)]);var state_15960__$1 = state_15960;var statearr_15962_15983 = state_15960__$1;(statearr_15962_15983[(2)] = inst_15956);
(statearr_15962_15983[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15961 === (1)))
{var state_15960__$1 = state_15960;var statearr_15963_15984 = state_15960__$1;(statearr_15963_15984[(2)] = null);
(statearr_15963_15984[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15961 === (4)))
{var inst_15941 = (state_15960[(7)]);var inst_15941__$1 = (state_15960[(2)]);var inst_15942 = (inst_15941__$1 == null);var state_15960__$1 = (function (){var statearr_15964 = state_15960;(statearr_15964[(7)] = inst_15941__$1);
return statearr_15964;
})();if(cljs.core.truth_(inst_15942))
{var statearr_15965_15985 = state_15960__$1;(statearr_15965_15985[(1)] = (5));
} else
{var statearr_15966_15986 = state_15960__$1;(statearr_15966_15986[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15961 === (6)))
{var inst_15941 = (state_15960[(7)]);var inst_15947 = p.call(null,inst_15941);var state_15960__$1 = state_15960;if(cljs.core.truth_(inst_15947))
{var statearr_15967_15987 = state_15960__$1;(statearr_15967_15987[(1)] = (9));
} else
{var statearr_15968_15988 = state_15960__$1;(statearr_15968_15988[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15961 === (3)))
{var inst_15958 = (state_15960[(2)]);var state_15960__$1 = state_15960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15960__$1,inst_15958);
} else
{if((state_val_15961 === (2)))
{var state_15960__$1 = state_15960;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15960__$1,(4),ch);
} else
{if((state_val_15961 === (11)))
{var inst_15941 = (state_15960[(7)]);var inst_15951 = (state_15960[(2)]);var state_15960__$1 = state_15960;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15960__$1,(8),inst_15951,inst_15941);
} else
{if((state_val_15961 === (9)))
{var state_15960__$1 = state_15960;var statearr_15969_15989 = state_15960__$1;(statearr_15969_15989[(2)] = tc);
(statearr_15969_15989[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15961 === (5)))
{var inst_15944 = cljs.core.async.close_BANG_.call(null,tc);var inst_15945 = cljs.core.async.close_BANG_.call(null,fc);var state_15960__$1 = (function (){var statearr_15970 = state_15960;(statearr_15970[(8)] = inst_15944);
return statearr_15970;
})();var statearr_15971_15990 = state_15960__$1;(statearr_15971_15990[(2)] = inst_15945);
(statearr_15971_15990[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15961 === (10)))
{var state_15960__$1 = state_15960;var statearr_15972_15991 = state_15960__$1;(statearr_15972_15991[(2)] = fc);
(statearr_15972_15991[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15961 === (8)))
{var inst_15953 = (state_15960[(2)]);var state_15960__$1 = (function (){var statearr_15973 = state_15960;(statearr_15973[(9)] = inst_15953);
return statearr_15973;
})();var statearr_15974_15992 = state_15960__$1;(statearr_15974_15992[(2)] = null);
(statearr_15974_15992[(1)] = (2));
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
});})(c__5708__auto___15982,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___15982,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_15978 = [null,null,null,null,null,null,null,null,null,null];(statearr_15978[(0)] = state_machine__5694__auto__);
(statearr_15978[(1)] = (1));
return statearr_15978;
});
var state_machine__5694__auto____1 = (function (state_15960){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_15960);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e15979){if((e15979 instanceof Object))
{var ex__5697__auto__ = e15979;var statearr_15980_15993 = state_15960;(statearr_15980_15993[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15960);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15979;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15994 = state_15960;
state_15960 = G__15994;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_15960){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_15960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___15982,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_15981 = f__5709__auto__.call(null);(statearr_15981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___15982);
return statearr_15981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___15982,tc,fc))
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
return (function (state_16041){var state_val_16042 = (state_16041[(1)]);if((state_val_16042 === (7)))
{var inst_16037 = (state_16041[(2)]);var state_16041__$1 = state_16041;var statearr_16043_16059 = state_16041__$1;(statearr_16043_16059[(2)] = inst_16037);
(statearr_16043_16059[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16042 === (6)))
{var inst_16027 = (state_16041[(7)]);var inst_16030 = (state_16041[(8)]);var inst_16034 = f.call(null,inst_16027,inst_16030);var inst_16027__$1 = inst_16034;var state_16041__$1 = (function (){var statearr_16044 = state_16041;(statearr_16044[(7)] = inst_16027__$1);
return statearr_16044;
})();var statearr_16045_16060 = state_16041__$1;(statearr_16045_16060[(2)] = null);
(statearr_16045_16060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16042 === (5)))
{var inst_16027 = (state_16041[(7)]);var state_16041__$1 = state_16041;var statearr_16046_16061 = state_16041__$1;(statearr_16046_16061[(2)] = inst_16027);
(statearr_16046_16061[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16042 === (4)))
{var inst_16030 = (state_16041[(8)]);var inst_16030__$1 = (state_16041[(2)]);var inst_16031 = (inst_16030__$1 == null);var state_16041__$1 = (function (){var statearr_16047 = state_16041;(statearr_16047[(8)] = inst_16030__$1);
return statearr_16047;
})();if(cljs.core.truth_(inst_16031))
{var statearr_16048_16062 = state_16041__$1;(statearr_16048_16062[(1)] = (5));
} else
{var statearr_16049_16063 = state_16041__$1;(statearr_16049_16063[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16042 === (3)))
{var inst_16039 = (state_16041[(2)]);var state_16041__$1 = state_16041;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16041__$1,inst_16039);
} else
{if((state_val_16042 === (2)))
{var state_16041__$1 = state_16041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16041__$1,(4),ch);
} else
{if((state_val_16042 === (1)))
{var inst_16027 = init;var state_16041__$1 = (function (){var statearr_16050 = state_16041;(statearr_16050[(7)] = inst_16027);
return statearr_16050;
})();var statearr_16051_16064 = state_16041__$1;(statearr_16051_16064[(2)] = null);
(statearr_16051_16064[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_16055 = [null,null,null,null,null,null,null,null,null];(statearr_16055[(0)] = state_machine__5694__auto__);
(statearr_16055[(1)] = (1));
return statearr_16055;
});
var state_machine__5694__auto____1 = (function (state_16041){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16041);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16056){if((e16056 instanceof Object))
{var ex__5697__auto__ = e16056;var statearr_16057_16065 = state_16041;(statearr_16057_16065[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16041);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16056;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16066 = state_16041;
state_16041 = G__16066;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16041){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16058 = f__5709__auto__.call(null);(statearr_16058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16058;
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
return (function (state_16128){var state_val_16129 = (state_16128[(1)]);if((state_val_16129 === (7)))
{var inst_16109 = (state_16128[(7)]);var inst_16114 = (state_16128[(2)]);var inst_16115 = cljs.core.next.call(null,inst_16109);var inst_16109__$1 = inst_16115;var state_16128__$1 = (function (){var statearr_16130 = state_16128;(statearr_16130[(7)] = inst_16109__$1);
(statearr_16130[(8)] = inst_16114);
return statearr_16130;
})();var statearr_16131_16149 = state_16128__$1;(statearr_16131_16149[(2)] = null);
(statearr_16131_16149[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16129 === (1)))
{var inst_16108 = cljs.core.seq.call(null,coll);var inst_16109 = inst_16108;var state_16128__$1 = (function (){var statearr_16132 = state_16128;(statearr_16132[(7)] = inst_16109);
return statearr_16132;
})();var statearr_16133_16150 = state_16128__$1;(statearr_16133_16150[(2)] = null);
(statearr_16133_16150[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16129 === (4)))
{var inst_16109 = (state_16128[(7)]);var inst_16112 = cljs.core.first.call(null,inst_16109);var state_16128__$1 = state_16128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16128__$1,(7),ch,inst_16112);
} else
{if((state_val_16129 === (6)))
{var inst_16124 = (state_16128[(2)]);var state_16128__$1 = state_16128;var statearr_16134_16151 = state_16128__$1;(statearr_16134_16151[(2)] = inst_16124);
(statearr_16134_16151[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16129 === (3)))
{var inst_16126 = (state_16128[(2)]);var state_16128__$1 = state_16128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16128__$1,inst_16126);
} else
{if((state_val_16129 === (2)))
{var inst_16109 = (state_16128[(7)]);var state_16128__$1 = state_16128;if(cljs.core.truth_(inst_16109))
{var statearr_16135_16152 = state_16128__$1;(statearr_16135_16152[(1)] = (4));
} else
{var statearr_16136_16153 = state_16128__$1;(statearr_16136_16153[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16129 === (9)))
{var state_16128__$1 = state_16128;var statearr_16137_16154 = state_16128__$1;(statearr_16137_16154[(2)] = null);
(statearr_16137_16154[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16129 === (5)))
{var state_16128__$1 = state_16128;if(cljs.core.truth_(close_QMARK_))
{var statearr_16138_16155 = state_16128__$1;(statearr_16138_16155[(1)] = (8));
} else
{var statearr_16139_16156 = state_16128__$1;(statearr_16139_16156[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16129 === (10)))
{var inst_16122 = (state_16128[(2)]);var state_16128__$1 = state_16128;var statearr_16140_16157 = state_16128__$1;(statearr_16140_16157[(2)] = inst_16122);
(statearr_16140_16157[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16129 === (8)))
{var inst_16119 = cljs.core.async.close_BANG_.call(null,ch);var state_16128__$1 = state_16128;var statearr_16141_16158 = state_16128__$1;(statearr_16141_16158[(2)] = inst_16119);
(statearr_16141_16158[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_16145 = [null,null,null,null,null,null,null,null,null];(statearr_16145[(0)] = state_machine__5694__auto__);
(statearr_16145[(1)] = (1));
return statearr_16145;
});
var state_machine__5694__auto____1 = (function (state_16128){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16128);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16146){if((e16146 instanceof Object))
{var ex__5697__auto__ = e16146;var statearr_16147_16159 = state_16128;(statearr_16147_16159[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16146;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16160 = state_16128;
state_16128 = G__16160;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16128){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16148 = f__5709__auto__.call(null);(statearr_16148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16148;
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
cljs.core.async.Mux = (function (){var obj16162 = {};return obj16162;
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
cljs.core.async.Mult = (function (){var obj16164 = {};return obj16164;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16388 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16388 = (function (cs,ch,mult,meta16389){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16389 = meta16389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16388.cljs$lang$type = true;
cljs.core.async.t16388.cljs$lang$ctorStr = "cljs.core.async/t16388";
cljs.core.async.t16388.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16388");
});})(cs))
;
cljs.core.async.t16388.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16388.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16388.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16388.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16388.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16388.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16390){var self__ = this;
var _16390__$1 = this;return self__.meta16389;
});})(cs))
;
cljs.core.async.t16388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16390,meta16389__$1){var self__ = this;
var _16390__$1 = this;return (new cljs.core.async.t16388(self__.cs,self__.ch,self__.mult,meta16389__$1));
});})(cs))
;
cljs.core.async.__GT_t16388 = ((function (cs){
return (function __GT_t16388(cs__$1,ch__$1,mult__$1,meta16389){return (new cljs.core.async.t16388(cs__$1,ch__$1,mult__$1,meta16389));
});})(cs))
;
}
return (new cljs.core.async.t16388(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___16611 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16611,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16611,cs,m,dchan,dctr,done){
return (function (state_16525){var state_val_16526 = (state_16525[(1)]);if((state_val_16526 === (7)))
{var inst_16521 = (state_16525[(2)]);var state_16525__$1 = state_16525;var statearr_16527_16612 = state_16525__$1;(statearr_16527_16612[(2)] = inst_16521);
(statearr_16527_16612[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (20)))
{var inst_16422 = (state_16525[(7)]);var inst_16432 = cljs.core.first.call(null,inst_16422);var inst_16433 = cljs.core.nth.call(null,inst_16432,(0),null);var inst_16434 = cljs.core.nth.call(null,inst_16432,(1),null);var state_16525__$1 = (function (){var statearr_16528 = state_16525;(statearr_16528[(8)] = inst_16433);
return statearr_16528;
})();if(cljs.core.truth_(inst_16434))
{var statearr_16529_16613 = state_16525__$1;(statearr_16529_16613[(1)] = (22));
} else
{var statearr_16530_16614 = state_16525__$1;(statearr_16530_16614[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (27)))
{var inst_16462 = (state_16525[(9)]);var inst_16464 = (state_16525[(10)]);var inst_16469 = cljs.core._nth.call(null,inst_16462,inst_16464);var state_16525__$1 = (function (){var statearr_16531 = state_16525;(statearr_16531[(11)] = inst_16469);
return statearr_16531;
})();var statearr_16532_16615 = state_16525__$1;(statearr_16532_16615[(2)] = null);
(statearr_16532_16615[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (1)))
{var state_16525__$1 = state_16525;var statearr_16533_16616 = state_16525__$1;(statearr_16533_16616[(2)] = null);
(statearr_16533_16616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (24)))
{var inst_16422 = (state_16525[(7)]);var inst_16439 = (state_16525[(2)]);var inst_16440 = cljs.core.next.call(null,inst_16422);var inst_16402 = inst_16440;var inst_16403 = null;var inst_16404 = (0);var inst_16405 = (0);var state_16525__$1 = (function (){var statearr_16534 = state_16525;(statearr_16534[(12)] = inst_16402);
(statearr_16534[(13)] = inst_16439);
(statearr_16534[(14)] = inst_16403);
(statearr_16534[(15)] = inst_16404);
(statearr_16534[(16)] = inst_16405);
return statearr_16534;
})();var statearr_16535_16617 = state_16525__$1;(statearr_16535_16617[(2)] = null);
(statearr_16535_16617[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (39)))
{var inst_16482 = (state_16525[(17)]);var inst_16500 = (state_16525[(2)]);var inst_16501 = cljs.core.next.call(null,inst_16482);var inst_16461 = inst_16501;var inst_16462 = null;var inst_16463 = (0);var inst_16464 = (0);var state_16525__$1 = (function (){var statearr_16539 = state_16525;(statearr_16539[(9)] = inst_16462);
(statearr_16539[(18)] = inst_16461);
(statearr_16539[(19)] = inst_16463);
(statearr_16539[(10)] = inst_16464);
(statearr_16539[(20)] = inst_16500);
return statearr_16539;
})();var statearr_16540_16618 = state_16525__$1;(statearr_16540_16618[(2)] = null);
(statearr_16540_16618[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (4)))
{var inst_16393 = (state_16525[(21)]);var inst_16393__$1 = (state_16525[(2)]);var inst_16394 = (inst_16393__$1 == null);var state_16525__$1 = (function (){var statearr_16541 = state_16525;(statearr_16541[(21)] = inst_16393__$1);
return statearr_16541;
})();if(cljs.core.truth_(inst_16394))
{var statearr_16542_16619 = state_16525__$1;(statearr_16542_16619[(1)] = (5));
} else
{var statearr_16543_16620 = state_16525__$1;(statearr_16543_16620[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (15)))
{var inst_16402 = (state_16525[(12)]);var inst_16403 = (state_16525[(14)]);var inst_16404 = (state_16525[(15)]);var inst_16405 = (state_16525[(16)]);var inst_16418 = (state_16525[(2)]);var inst_16419 = (inst_16405 + (1));var tmp16536 = inst_16402;var tmp16537 = inst_16403;var tmp16538 = inst_16404;var inst_16402__$1 = tmp16536;var inst_16403__$1 = tmp16537;var inst_16404__$1 = tmp16538;var inst_16405__$1 = inst_16419;var state_16525__$1 = (function (){var statearr_16544 = state_16525;(statearr_16544[(12)] = inst_16402__$1);
(statearr_16544[(22)] = inst_16418);
(statearr_16544[(14)] = inst_16403__$1);
(statearr_16544[(15)] = inst_16404__$1);
(statearr_16544[(16)] = inst_16405__$1);
return statearr_16544;
})();var statearr_16545_16621 = state_16525__$1;(statearr_16545_16621[(2)] = null);
(statearr_16545_16621[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (21)))
{var inst_16443 = (state_16525[(2)]);var state_16525__$1 = state_16525;var statearr_16546_16622 = state_16525__$1;(statearr_16546_16622[(2)] = inst_16443);
(statearr_16546_16622[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (31)))
{var inst_16469 = (state_16525[(11)]);var inst_16470 = (state_16525[(2)]);var inst_16471 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16472 = cljs.core.async.untap_STAR_.call(null,m,inst_16469);var state_16525__$1 = (function (){var statearr_16547 = state_16525;(statearr_16547[(23)] = inst_16471);
(statearr_16547[(24)] = inst_16470);
return statearr_16547;
})();var statearr_16548_16623 = state_16525__$1;(statearr_16548_16623[(2)] = inst_16472);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16525__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (32)))
{var inst_16469 = (state_16525[(11)]);var inst_16393 = (state_16525[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16525,(31),Object,null,(30));var inst_16476 = cljs.core.async.put_BANG_.call(null,inst_16469,inst_16393,done);var state_16525__$1 = state_16525;var statearr_16549_16624 = state_16525__$1;(statearr_16549_16624[(2)] = inst_16476);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16525__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (40)))
{var inst_16491 = (state_16525[(25)]);var inst_16492 = (state_16525[(2)]);var inst_16493 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16494 = cljs.core.async.untap_STAR_.call(null,m,inst_16491);var state_16525__$1 = (function (){var statearr_16550 = state_16525;(statearr_16550[(26)] = inst_16492);
(statearr_16550[(27)] = inst_16493);
return statearr_16550;
})();var statearr_16551_16625 = state_16525__$1;(statearr_16551_16625[(2)] = inst_16494);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16525__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (33)))
{var inst_16482 = (state_16525[(17)]);var inst_16484 = cljs.core.chunked_seq_QMARK_.call(null,inst_16482);var state_16525__$1 = state_16525;if(inst_16484)
{var statearr_16552_16626 = state_16525__$1;(statearr_16552_16626[(1)] = (36));
} else
{var statearr_16553_16627 = state_16525__$1;(statearr_16553_16627[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (13)))
{var inst_16412 = (state_16525[(28)]);var inst_16415 = cljs.core.async.close_BANG_.call(null,inst_16412);var state_16525__$1 = state_16525;var statearr_16554_16628 = state_16525__$1;(statearr_16554_16628[(2)] = inst_16415);
(statearr_16554_16628[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (22)))
{var inst_16433 = (state_16525[(8)]);var inst_16436 = cljs.core.async.close_BANG_.call(null,inst_16433);var state_16525__$1 = state_16525;var statearr_16555_16629 = state_16525__$1;(statearr_16555_16629[(2)] = inst_16436);
(statearr_16555_16629[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (36)))
{var inst_16482 = (state_16525[(17)]);var inst_16486 = cljs.core.chunk_first.call(null,inst_16482);var inst_16487 = cljs.core.chunk_rest.call(null,inst_16482);var inst_16488 = cljs.core.count.call(null,inst_16486);var inst_16461 = inst_16487;var inst_16462 = inst_16486;var inst_16463 = inst_16488;var inst_16464 = (0);var state_16525__$1 = (function (){var statearr_16556 = state_16525;(statearr_16556[(9)] = inst_16462);
(statearr_16556[(18)] = inst_16461);
(statearr_16556[(19)] = inst_16463);
(statearr_16556[(10)] = inst_16464);
return statearr_16556;
})();var statearr_16557_16630 = state_16525__$1;(statearr_16557_16630[(2)] = null);
(statearr_16557_16630[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (41)))
{var inst_16491 = (state_16525[(25)]);var inst_16393 = (state_16525[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16525,(40),Object,null,(39));var inst_16498 = cljs.core.async.put_BANG_.call(null,inst_16491,inst_16393,done);var state_16525__$1 = state_16525;var statearr_16558_16631 = state_16525__$1;(statearr_16558_16631[(2)] = inst_16498);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16525__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (43)))
{var state_16525__$1 = state_16525;var statearr_16559_16632 = state_16525__$1;(statearr_16559_16632[(2)] = null);
(statearr_16559_16632[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (29)))
{var inst_16509 = (state_16525[(2)]);var state_16525__$1 = state_16525;var statearr_16560_16633 = state_16525__$1;(statearr_16560_16633[(2)] = inst_16509);
(statearr_16560_16633[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (44)))
{var inst_16518 = (state_16525[(2)]);var state_16525__$1 = (function (){var statearr_16561 = state_16525;(statearr_16561[(29)] = inst_16518);
return statearr_16561;
})();var statearr_16562_16634 = state_16525__$1;(statearr_16562_16634[(2)] = null);
(statearr_16562_16634[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (6)))
{var inst_16453 = (state_16525[(30)]);var inst_16452 = cljs.core.deref.call(null,cs);var inst_16453__$1 = cljs.core.keys.call(null,inst_16452);var inst_16454 = cljs.core.count.call(null,inst_16453__$1);var inst_16455 = cljs.core.reset_BANG_.call(null,dctr,inst_16454);var inst_16460 = cljs.core.seq.call(null,inst_16453__$1);var inst_16461 = inst_16460;var inst_16462 = null;var inst_16463 = (0);var inst_16464 = (0);var state_16525__$1 = (function (){var statearr_16563 = state_16525;(statearr_16563[(9)] = inst_16462);
(statearr_16563[(18)] = inst_16461);
(statearr_16563[(19)] = inst_16463);
(statearr_16563[(30)] = inst_16453__$1);
(statearr_16563[(31)] = inst_16455);
(statearr_16563[(10)] = inst_16464);
return statearr_16563;
})();var statearr_16564_16635 = state_16525__$1;(statearr_16564_16635[(2)] = null);
(statearr_16564_16635[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (28)))
{var inst_16482 = (state_16525[(17)]);var inst_16461 = (state_16525[(18)]);var inst_16482__$1 = cljs.core.seq.call(null,inst_16461);var state_16525__$1 = (function (){var statearr_16565 = state_16525;(statearr_16565[(17)] = inst_16482__$1);
return statearr_16565;
})();if(inst_16482__$1)
{var statearr_16566_16636 = state_16525__$1;(statearr_16566_16636[(1)] = (33));
} else
{var statearr_16567_16637 = state_16525__$1;(statearr_16567_16637[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (25)))
{var inst_16463 = (state_16525[(19)]);var inst_16464 = (state_16525[(10)]);var inst_16466 = (inst_16464 < inst_16463);var inst_16467 = inst_16466;var state_16525__$1 = state_16525;if(cljs.core.truth_(inst_16467))
{var statearr_16568_16638 = state_16525__$1;(statearr_16568_16638[(1)] = (27));
} else
{var statearr_16569_16639 = state_16525__$1;(statearr_16569_16639[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (34)))
{var state_16525__$1 = state_16525;var statearr_16570_16640 = state_16525__$1;(statearr_16570_16640[(2)] = null);
(statearr_16570_16640[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (17)))
{var state_16525__$1 = state_16525;var statearr_16571_16641 = state_16525__$1;(statearr_16571_16641[(2)] = null);
(statearr_16571_16641[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (3)))
{var inst_16523 = (state_16525[(2)]);var state_16525__$1 = state_16525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16525__$1,inst_16523);
} else
{if((state_val_16526 === (12)))
{var inst_16448 = (state_16525[(2)]);var state_16525__$1 = state_16525;var statearr_16572_16642 = state_16525__$1;(statearr_16572_16642[(2)] = inst_16448);
(statearr_16572_16642[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (2)))
{var state_16525__$1 = state_16525;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16525__$1,(4),ch);
} else
{if((state_val_16526 === (23)))
{var state_16525__$1 = state_16525;var statearr_16573_16643 = state_16525__$1;(statearr_16573_16643[(2)] = null);
(statearr_16573_16643[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (35)))
{var inst_16507 = (state_16525[(2)]);var state_16525__$1 = state_16525;var statearr_16574_16644 = state_16525__$1;(statearr_16574_16644[(2)] = inst_16507);
(statearr_16574_16644[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (19)))
{var inst_16422 = (state_16525[(7)]);var inst_16426 = cljs.core.chunk_first.call(null,inst_16422);var inst_16427 = cljs.core.chunk_rest.call(null,inst_16422);var inst_16428 = cljs.core.count.call(null,inst_16426);var inst_16402 = inst_16427;var inst_16403 = inst_16426;var inst_16404 = inst_16428;var inst_16405 = (0);var state_16525__$1 = (function (){var statearr_16575 = state_16525;(statearr_16575[(12)] = inst_16402);
(statearr_16575[(14)] = inst_16403);
(statearr_16575[(15)] = inst_16404);
(statearr_16575[(16)] = inst_16405);
return statearr_16575;
})();var statearr_16576_16645 = state_16525__$1;(statearr_16576_16645[(2)] = null);
(statearr_16576_16645[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (11)))
{var inst_16402 = (state_16525[(12)]);var inst_16422 = (state_16525[(7)]);var inst_16422__$1 = cljs.core.seq.call(null,inst_16402);var state_16525__$1 = (function (){var statearr_16577 = state_16525;(statearr_16577[(7)] = inst_16422__$1);
return statearr_16577;
})();if(inst_16422__$1)
{var statearr_16578_16646 = state_16525__$1;(statearr_16578_16646[(1)] = (16));
} else
{var statearr_16579_16647 = state_16525__$1;(statearr_16579_16647[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (9)))
{var inst_16450 = (state_16525[(2)]);var state_16525__$1 = state_16525;var statearr_16580_16648 = state_16525__$1;(statearr_16580_16648[(2)] = inst_16450);
(statearr_16580_16648[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (5)))
{var inst_16400 = cljs.core.deref.call(null,cs);var inst_16401 = cljs.core.seq.call(null,inst_16400);var inst_16402 = inst_16401;var inst_16403 = null;var inst_16404 = (0);var inst_16405 = (0);var state_16525__$1 = (function (){var statearr_16581 = state_16525;(statearr_16581[(12)] = inst_16402);
(statearr_16581[(14)] = inst_16403);
(statearr_16581[(15)] = inst_16404);
(statearr_16581[(16)] = inst_16405);
return statearr_16581;
})();var statearr_16582_16649 = state_16525__$1;(statearr_16582_16649[(2)] = null);
(statearr_16582_16649[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (14)))
{var state_16525__$1 = state_16525;var statearr_16583_16650 = state_16525__$1;(statearr_16583_16650[(2)] = null);
(statearr_16583_16650[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (45)))
{var inst_16515 = (state_16525[(2)]);var state_16525__$1 = state_16525;var statearr_16584_16651 = state_16525__$1;(statearr_16584_16651[(2)] = inst_16515);
(statearr_16584_16651[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (26)))
{var inst_16453 = (state_16525[(30)]);var inst_16511 = (state_16525[(2)]);var inst_16512 = cljs.core.seq.call(null,inst_16453);var state_16525__$1 = (function (){var statearr_16585 = state_16525;(statearr_16585[(32)] = inst_16511);
return statearr_16585;
})();if(inst_16512)
{var statearr_16586_16652 = state_16525__$1;(statearr_16586_16652[(1)] = (42));
} else
{var statearr_16587_16653 = state_16525__$1;(statearr_16587_16653[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (16)))
{var inst_16422 = (state_16525[(7)]);var inst_16424 = cljs.core.chunked_seq_QMARK_.call(null,inst_16422);var state_16525__$1 = state_16525;if(inst_16424)
{var statearr_16591_16654 = state_16525__$1;(statearr_16591_16654[(1)] = (19));
} else
{var statearr_16592_16655 = state_16525__$1;(statearr_16592_16655[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (38)))
{var inst_16504 = (state_16525[(2)]);var state_16525__$1 = state_16525;var statearr_16593_16656 = state_16525__$1;(statearr_16593_16656[(2)] = inst_16504);
(statearr_16593_16656[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (30)))
{var inst_16462 = (state_16525[(9)]);var inst_16461 = (state_16525[(18)]);var inst_16463 = (state_16525[(19)]);var inst_16464 = (state_16525[(10)]);var inst_16478 = (state_16525[(2)]);var inst_16479 = (inst_16464 + (1));var tmp16588 = inst_16462;var tmp16589 = inst_16461;var tmp16590 = inst_16463;var inst_16461__$1 = tmp16589;var inst_16462__$1 = tmp16588;var inst_16463__$1 = tmp16590;var inst_16464__$1 = inst_16479;var state_16525__$1 = (function (){var statearr_16594 = state_16525;(statearr_16594[(9)] = inst_16462__$1);
(statearr_16594[(18)] = inst_16461__$1);
(statearr_16594[(19)] = inst_16463__$1);
(statearr_16594[(10)] = inst_16464__$1);
(statearr_16594[(33)] = inst_16478);
return statearr_16594;
})();var statearr_16595_16657 = state_16525__$1;(statearr_16595_16657[(2)] = null);
(statearr_16595_16657[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (10)))
{var inst_16403 = (state_16525[(14)]);var inst_16405 = (state_16525[(16)]);var inst_16411 = cljs.core._nth.call(null,inst_16403,inst_16405);var inst_16412 = cljs.core.nth.call(null,inst_16411,(0),null);var inst_16413 = cljs.core.nth.call(null,inst_16411,(1),null);var state_16525__$1 = (function (){var statearr_16596 = state_16525;(statearr_16596[(28)] = inst_16412);
return statearr_16596;
})();if(cljs.core.truth_(inst_16413))
{var statearr_16597_16658 = state_16525__$1;(statearr_16597_16658[(1)] = (13));
} else
{var statearr_16598_16659 = state_16525__$1;(statearr_16598_16659[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (18)))
{var inst_16446 = (state_16525[(2)]);var state_16525__$1 = state_16525;var statearr_16599_16660 = state_16525__$1;(statearr_16599_16660[(2)] = inst_16446);
(statearr_16599_16660[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (42)))
{var state_16525__$1 = state_16525;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16525__$1,(45),dchan);
} else
{if((state_val_16526 === (37)))
{var inst_16482 = (state_16525[(17)]);var inst_16491 = cljs.core.first.call(null,inst_16482);var state_16525__$1 = (function (){var statearr_16600 = state_16525;(statearr_16600[(25)] = inst_16491);
return statearr_16600;
})();var statearr_16601_16661 = state_16525__$1;(statearr_16601_16661[(2)] = null);
(statearr_16601_16661[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16526 === (8)))
{var inst_16404 = (state_16525[(15)]);var inst_16405 = (state_16525[(16)]);var inst_16407 = (inst_16405 < inst_16404);var inst_16408 = inst_16407;var state_16525__$1 = state_16525;if(cljs.core.truth_(inst_16408))
{var statearr_16602_16662 = state_16525__$1;(statearr_16602_16662[(1)] = (10));
} else
{var statearr_16603_16663 = state_16525__$1;(statearr_16603_16663[(1)] = (11));
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
});})(c__5708__auto___16611,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___16611,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16607[(0)] = state_machine__5694__auto__);
(statearr_16607[(1)] = (1));
return statearr_16607;
});
var state_machine__5694__auto____1 = (function (state_16525){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16525);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16608){if((e16608 instanceof Object))
{var ex__5697__auto__ = e16608;var statearr_16609_16664 = state_16525;(statearr_16609_16664[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16525);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16608;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16665 = state_16525;
state_16525 = G__16665;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16525){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16611,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_16610 = f__5709__auto__.call(null);(statearr_16610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16611);
return statearr_16610;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16611,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16667 = {};return obj16667;
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
;var m = (function (){if(typeof cljs.core.async.t16777 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16777 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16778){
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
this.meta16778 = meta16778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16777.cljs$lang$type = true;
cljs.core.async.t16777.cljs$lang$ctorStr = "cljs.core.async/t16777";
cljs.core.async.t16777.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16777");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16777.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16777.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16777.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16777.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16777.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16777.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16777.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16779){var self__ = this;
var _16779__$1 = this;return self__.meta16778;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16779,meta16778__$1){var self__ = this;
var _16779__$1 = this;return (new cljs.core.async.t16777(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16778__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16777 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16777(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16778){return (new cljs.core.async.t16777(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16778));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16777(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___16886 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16844){var state_val_16845 = (state_16844[(1)]);if((state_val_16845 === (7)))
{var inst_16793 = (state_16844[(7)]);var inst_16798 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16793);var state_16844__$1 = state_16844;var statearr_16846_16887 = state_16844__$1;(statearr_16846_16887[(2)] = inst_16798);
(statearr_16846_16887[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (20)))
{var inst_16808 = (state_16844[(8)]);var state_16844__$1 = state_16844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16844__$1,(23),out,inst_16808);
} else
{if((state_val_16845 === (1)))
{var inst_16783 = (state_16844[(9)]);var inst_16783__$1 = calc_state.call(null);var inst_16784 = cljs.core.seq_QMARK_.call(null,inst_16783__$1);var state_16844__$1 = (function (){var statearr_16847 = state_16844;(statearr_16847[(9)] = inst_16783__$1);
return statearr_16847;
})();if(inst_16784)
{var statearr_16848_16888 = state_16844__$1;(statearr_16848_16888[(1)] = (2));
} else
{var statearr_16849_16889 = state_16844__$1;(statearr_16849_16889[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (4)))
{var inst_16783 = (state_16844[(9)]);var inst_16789 = (state_16844[(2)]);var inst_16790 = cljs.core.get.call(null,inst_16789,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16791 = cljs.core.get.call(null,inst_16789,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16792 = cljs.core.get.call(null,inst_16789,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16793 = inst_16783;var state_16844__$1 = (function (){var statearr_16850 = state_16844;(statearr_16850[(7)] = inst_16793);
(statearr_16850[(10)] = inst_16792);
(statearr_16850[(11)] = inst_16790);
(statearr_16850[(12)] = inst_16791);
return statearr_16850;
})();var statearr_16851_16890 = state_16844__$1;(statearr_16851_16890[(2)] = null);
(statearr_16851_16890[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (15)))
{var state_16844__$1 = state_16844;var statearr_16852_16891 = state_16844__$1;(statearr_16852_16891[(2)] = null);
(statearr_16852_16891[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (21)))
{var state_16844__$1 = state_16844;var statearr_16853_16892 = state_16844__$1;(statearr_16853_16892[(2)] = null);
(statearr_16853_16892[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (13)))
{var inst_16840 = (state_16844[(2)]);var state_16844__$1 = state_16844;var statearr_16854_16893 = state_16844__$1;(statearr_16854_16893[(2)] = inst_16840);
(statearr_16854_16893[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (22)))
{var inst_16801 = (state_16844[(13)]);var inst_16837 = (state_16844[(2)]);var inst_16793 = inst_16801;var state_16844__$1 = (function (){var statearr_16855 = state_16844;(statearr_16855[(7)] = inst_16793);
(statearr_16855[(14)] = inst_16837);
return statearr_16855;
})();var statearr_16856_16894 = state_16844__$1;(statearr_16856_16894[(2)] = null);
(statearr_16856_16894[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (6)))
{var inst_16842 = (state_16844[(2)]);var state_16844__$1 = state_16844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16844__$1,inst_16842);
} else
{if((state_val_16845 === (17)))
{var inst_16823 = (state_16844[(15)]);var state_16844__$1 = state_16844;var statearr_16857_16895 = state_16844__$1;(statearr_16857_16895[(2)] = inst_16823);
(statearr_16857_16895[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (3)))
{var inst_16783 = (state_16844[(9)]);var state_16844__$1 = state_16844;var statearr_16858_16896 = state_16844__$1;(statearr_16858_16896[(2)] = inst_16783);
(statearr_16858_16896[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (12)))
{var inst_16809 = (state_16844[(16)]);var inst_16823 = (state_16844[(15)]);var inst_16804 = (state_16844[(17)]);var inst_16823__$1 = inst_16804.call(null,inst_16809);var state_16844__$1 = (function (){var statearr_16859 = state_16844;(statearr_16859[(15)] = inst_16823__$1);
return statearr_16859;
})();if(cljs.core.truth_(inst_16823__$1))
{var statearr_16860_16897 = state_16844__$1;(statearr_16860_16897[(1)] = (17));
} else
{var statearr_16861_16898 = state_16844__$1;(statearr_16861_16898[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (2)))
{var inst_16783 = (state_16844[(9)]);var inst_16786 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16783);var state_16844__$1 = state_16844;var statearr_16862_16899 = state_16844__$1;(statearr_16862_16899[(2)] = inst_16786);
(statearr_16862_16899[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (23)))
{var inst_16834 = (state_16844[(2)]);var state_16844__$1 = state_16844;var statearr_16863_16900 = state_16844__$1;(statearr_16863_16900[(2)] = inst_16834);
(statearr_16863_16900[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (19)))
{var inst_16831 = (state_16844[(2)]);var state_16844__$1 = state_16844;if(cljs.core.truth_(inst_16831))
{var statearr_16864_16901 = state_16844__$1;(statearr_16864_16901[(1)] = (20));
} else
{var statearr_16865_16902 = state_16844__$1;(statearr_16865_16902[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (11)))
{var inst_16808 = (state_16844[(8)]);var inst_16814 = (inst_16808 == null);var state_16844__$1 = state_16844;if(cljs.core.truth_(inst_16814))
{var statearr_16866_16903 = state_16844__$1;(statearr_16866_16903[(1)] = (14));
} else
{var statearr_16867_16904 = state_16844__$1;(statearr_16867_16904[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (9)))
{var inst_16801 = (state_16844[(13)]);var inst_16801__$1 = (state_16844[(2)]);var inst_16802 = cljs.core.get.call(null,inst_16801__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16803 = cljs.core.get.call(null,inst_16801__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16804 = cljs.core.get.call(null,inst_16801__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16844__$1 = (function (){var statearr_16868 = state_16844;(statearr_16868[(18)] = inst_16803);
(statearr_16868[(17)] = inst_16804);
(statearr_16868[(13)] = inst_16801__$1);
return statearr_16868;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16844__$1,(10),inst_16802);
} else
{if((state_val_16845 === (5)))
{var inst_16793 = (state_16844[(7)]);var inst_16796 = cljs.core.seq_QMARK_.call(null,inst_16793);var state_16844__$1 = state_16844;if(inst_16796)
{var statearr_16869_16905 = state_16844__$1;(statearr_16869_16905[(1)] = (7));
} else
{var statearr_16870_16906 = state_16844__$1;(statearr_16870_16906[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (14)))
{var inst_16809 = (state_16844[(16)]);var inst_16816 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16809);var state_16844__$1 = state_16844;var statearr_16871_16907 = state_16844__$1;(statearr_16871_16907[(2)] = inst_16816);
(statearr_16871_16907[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (16)))
{var inst_16819 = (state_16844[(2)]);var inst_16820 = calc_state.call(null);var inst_16793 = inst_16820;var state_16844__$1 = (function (){var statearr_16872 = state_16844;(statearr_16872[(7)] = inst_16793);
(statearr_16872[(19)] = inst_16819);
return statearr_16872;
})();var statearr_16873_16908 = state_16844__$1;(statearr_16873_16908[(2)] = null);
(statearr_16873_16908[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (10)))
{var inst_16809 = (state_16844[(16)]);var inst_16808 = (state_16844[(8)]);var inst_16807 = (state_16844[(2)]);var inst_16808__$1 = cljs.core.nth.call(null,inst_16807,(0),null);var inst_16809__$1 = cljs.core.nth.call(null,inst_16807,(1),null);var inst_16810 = (inst_16808__$1 == null);var inst_16811 = cljs.core._EQ_.call(null,inst_16809__$1,change);var inst_16812 = (inst_16810) || (inst_16811);var state_16844__$1 = (function (){var statearr_16874 = state_16844;(statearr_16874[(16)] = inst_16809__$1);
(statearr_16874[(8)] = inst_16808__$1);
return statearr_16874;
})();if(cljs.core.truth_(inst_16812))
{var statearr_16875_16909 = state_16844__$1;(statearr_16875_16909[(1)] = (11));
} else
{var statearr_16876_16910 = state_16844__$1;(statearr_16876_16910[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (18)))
{var inst_16803 = (state_16844[(18)]);var inst_16809 = (state_16844[(16)]);var inst_16804 = (state_16844[(17)]);var inst_16826 = cljs.core.empty_QMARK_.call(null,inst_16804);var inst_16827 = inst_16803.call(null,inst_16809);var inst_16828 = cljs.core.not.call(null,inst_16827);var inst_16829 = (inst_16826) && (inst_16828);var state_16844__$1 = state_16844;var statearr_16877_16911 = state_16844__$1;(statearr_16877_16911[(2)] = inst_16829);
(statearr_16877_16911[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (8)))
{var inst_16793 = (state_16844[(7)]);var state_16844__$1 = state_16844;var statearr_16878_16912 = state_16844__$1;(statearr_16878_16912[(2)] = inst_16793);
(statearr_16878_16912[(1)] = (9));
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
});})(c__5708__auto___16886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___16886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16882[(0)] = state_machine__5694__auto__);
(statearr_16882[(1)] = (1));
return statearr_16882;
});
var state_machine__5694__auto____1 = (function (state_16844){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16844);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16883){if((e16883 instanceof Object))
{var ex__5697__auto__ = e16883;var statearr_16884_16913 = state_16844;(statearr_16884_16913[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16844);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16883;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16914 = state_16844;
state_16844 = G__16914;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16844){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_16885 = f__5709__auto__.call(null);(statearr_16885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16886);
return statearr_16885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16916 = {};return obj16916;
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
return (function (p1__16917_SHARP_){if(cljs.core.truth_(p1__16917_SHARP_.call(null,topic)))
{return p1__16917_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16917_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17042 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17043){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17043 = meta17043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17042.cljs$lang$type = true;
cljs.core.async.t17042.cljs$lang$ctorStr = "cljs.core.async/t17042";
cljs.core.async.t17042.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t17042");
});})(mults,ensure_mult))
;
cljs.core.async.t17042.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17042.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17042.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17042.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17042.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17042.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17042.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17044){var self__ = this;
var _17044__$1 = this;return self__.meta17043;
});})(mults,ensure_mult))
;
cljs.core.async.t17042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17044,meta17043__$1){var self__ = this;
var _17044__$1 = this;return (new cljs.core.async.t17042(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17043__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17042 = ((function (mults,ensure_mult){
return (function __GT_t17042(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17043){return (new cljs.core.async.t17042(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17043));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17042(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___17166 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17166,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17166,mults,ensure_mult,p){
return (function (state_17118){var state_val_17119 = (state_17118[(1)]);if((state_val_17119 === (7)))
{var inst_17114 = (state_17118[(2)]);var state_17118__$1 = state_17118;var statearr_17120_17167 = state_17118__$1;(statearr_17120_17167[(2)] = inst_17114);
(statearr_17120_17167[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (20)))
{var state_17118__$1 = state_17118;var statearr_17121_17168 = state_17118__$1;(statearr_17121_17168[(2)] = null);
(statearr_17121_17168[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (1)))
{var state_17118__$1 = state_17118;var statearr_17122_17169 = state_17118__$1;(statearr_17122_17169[(2)] = null);
(statearr_17122_17169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (24)))
{var inst_17047 = (state_17118[(7)]);var inst_17097 = (state_17118[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17118,(23),Object,null,(22));var inst_17104 = cljs.core.async.muxch_STAR_.call(null,inst_17097);var state_17118__$1 = state_17118;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17118__$1,(25),inst_17104,inst_17047);
} else
{if((state_val_17119 === (4)))
{var inst_17047 = (state_17118[(7)]);var inst_17047__$1 = (state_17118[(2)]);var inst_17048 = (inst_17047__$1 == null);var state_17118__$1 = (function (){var statearr_17123 = state_17118;(statearr_17123[(7)] = inst_17047__$1);
return statearr_17123;
})();if(cljs.core.truth_(inst_17048))
{var statearr_17124_17170 = state_17118__$1;(statearr_17124_17170[(1)] = (5));
} else
{var statearr_17125_17171 = state_17118__$1;(statearr_17125_17171[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (15)))
{var inst_17089 = (state_17118[(2)]);var state_17118__$1 = state_17118;var statearr_17126_17172 = state_17118__$1;(statearr_17126_17172[(2)] = inst_17089);
(statearr_17126_17172[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (21)))
{var inst_17111 = (state_17118[(2)]);var state_17118__$1 = (function (){var statearr_17127 = state_17118;(statearr_17127[(9)] = inst_17111);
return statearr_17127;
})();var statearr_17128_17173 = state_17118__$1;(statearr_17128_17173[(2)] = null);
(statearr_17128_17173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (13)))
{var inst_17071 = (state_17118[(10)]);var inst_17073 = cljs.core.chunked_seq_QMARK_.call(null,inst_17071);var state_17118__$1 = state_17118;if(inst_17073)
{var statearr_17129_17174 = state_17118__$1;(statearr_17129_17174[(1)] = (16));
} else
{var statearr_17130_17175 = state_17118__$1;(statearr_17130_17175[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (22)))
{var inst_17108 = (state_17118[(2)]);var state_17118__$1 = state_17118;var statearr_17131_17176 = state_17118__$1;(statearr_17131_17176[(2)] = inst_17108);
(statearr_17131_17176[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (6)))
{var inst_17095 = (state_17118[(11)]);var inst_17047 = (state_17118[(7)]);var inst_17097 = (state_17118[(8)]);var inst_17095__$1 = topic_fn.call(null,inst_17047);var inst_17096 = cljs.core.deref.call(null,mults);var inst_17097__$1 = cljs.core.get.call(null,inst_17096,inst_17095__$1);var state_17118__$1 = (function (){var statearr_17132 = state_17118;(statearr_17132[(11)] = inst_17095__$1);
(statearr_17132[(8)] = inst_17097__$1);
return statearr_17132;
})();if(cljs.core.truth_(inst_17097__$1))
{var statearr_17133_17177 = state_17118__$1;(statearr_17133_17177[(1)] = (19));
} else
{var statearr_17134_17178 = state_17118__$1;(statearr_17134_17178[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (25)))
{var inst_17106 = (state_17118[(2)]);var state_17118__$1 = state_17118;var statearr_17135_17179 = state_17118__$1;(statearr_17135_17179[(2)] = inst_17106);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17118__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (17)))
{var inst_17071 = (state_17118[(10)]);var inst_17080 = cljs.core.first.call(null,inst_17071);var inst_17081 = cljs.core.async.muxch_STAR_.call(null,inst_17080);var inst_17082 = cljs.core.async.close_BANG_.call(null,inst_17081);var inst_17083 = cljs.core.next.call(null,inst_17071);var inst_17057 = inst_17083;var inst_17058 = null;var inst_17059 = (0);var inst_17060 = (0);var state_17118__$1 = (function (){var statearr_17136 = state_17118;(statearr_17136[(12)] = inst_17082);
(statearr_17136[(13)] = inst_17058);
(statearr_17136[(14)] = inst_17057);
(statearr_17136[(15)] = inst_17060);
(statearr_17136[(16)] = inst_17059);
return statearr_17136;
})();var statearr_17137_17180 = state_17118__$1;(statearr_17137_17180[(2)] = null);
(statearr_17137_17180[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (3)))
{var inst_17116 = (state_17118[(2)]);var state_17118__$1 = state_17118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17118__$1,inst_17116);
} else
{if((state_val_17119 === (12)))
{var inst_17091 = (state_17118[(2)]);var state_17118__$1 = state_17118;var statearr_17138_17181 = state_17118__$1;(statearr_17138_17181[(2)] = inst_17091);
(statearr_17138_17181[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (2)))
{var state_17118__$1 = state_17118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17118__$1,(4),ch);
} else
{if((state_val_17119 === (23)))
{var inst_17095 = (state_17118[(11)]);var inst_17099 = (state_17118[(2)]);var inst_17100 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17095);var state_17118__$1 = (function (){var statearr_17139 = state_17118;(statearr_17139[(17)] = inst_17099);
return statearr_17139;
})();var statearr_17140_17182 = state_17118__$1;(statearr_17140_17182[(2)] = inst_17100);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17118__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (19)))
{var state_17118__$1 = state_17118;var statearr_17141_17183 = state_17118__$1;(statearr_17141_17183[(2)] = null);
(statearr_17141_17183[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (11)))
{var inst_17057 = (state_17118[(14)]);var inst_17071 = (state_17118[(10)]);var inst_17071__$1 = cljs.core.seq.call(null,inst_17057);var state_17118__$1 = (function (){var statearr_17142 = state_17118;(statearr_17142[(10)] = inst_17071__$1);
return statearr_17142;
})();if(inst_17071__$1)
{var statearr_17143_17184 = state_17118__$1;(statearr_17143_17184[(1)] = (13));
} else
{var statearr_17144_17185 = state_17118__$1;(statearr_17144_17185[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (9)))
{var inst_17093 = (state_17118[(2)]);var state_17118__$1 = state_17118;var statearr_17145_17186 = state_17118__$1;(statearr_17145_17186[(2)] = inst_17093);
(statearr_17145_17186[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (5)))
{var inst_17054 = cljs.core.deref.call(null,mults);var inst_17055 = cljs.core.vals.call(null,inst_17054);var inst_17056 = cljs.core.seq.call(null,inst_17055);var inst_17057 = inst_17056;var inst_17058 = null;var inst_17059 = (0);var inst_17060 = (0);var state_17118__$1 = (function (){var statearr_17146 = state_17118;(statearr_17146[(13)] = inst_17058);
(statearr_17146[(14)] = inst_17057);
(statearr_17146[(15)] = inst_17060);
(statearr_17146[(16)] = inst_17059);
return statearr_17146;
})();var statearr_17147_17187 = state_17118__$1;(statearr_17147_17187[(2)] = null);
(statearr_17147_17187[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (14)))
{var state_17118__$1 = state_17118;var statearr_17151_17188 = state_17118__$1;(statearr_17151_17188[(2)] = null);
(statearr_17151_17188[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (16)))
{var inst_17071 = (state_17118[(10)]);var inst_17075 = cljs.core.chunk_first.call(null,inst_17071);var inst_17076 = cljs.core.chunk_rest.call(null,inst_17071);var inst_17077 = cljs.core.count.call(null,inst_17075);var inst_17057 = inst_17076;var inst_17058 = inst_17075;var inst_17059 = inst_17077;var inst_17060 = (0);var state_17118__$1 = (function (){var statearr_17152 = state_17118;(statearr_17152[(13)] = inst_17058);
(statearr_17152[(14)] = inst_17057);
(statearr_17152[(15)] = inst_17060);
(statearr_17152[(16)] = inst_17059);
return statearr_17152;
})();var statearr_17153_17189 = state_17118__$1;(statearr_17153_17189[(2)] = null);
(statearr_17153_17189[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (10)))
{var inst_17058 = (state_17118[(13)]);var inst_17057 = (state_17118[(14)]);var inst_17060 = (state_17118[(15)]);var inst_17059 = (state_17118[(16)]);var inst_17065 = cljs.core._nth.call(null,inst_17058,inst_17060);var inst_17066 = cljs.core.async.muxch_STAR_.call(null,inst_17065);var inst_17067 = cljs.core.async.close_BANG_.call(null,inst_17066);var inst_17068 = (inst_17060 + (1));var tmp17148 = inst_17058;var tmp17149 = inst_17057;var tmp17150 = inst_17059;var inst_17057__$1 = tmp17149;var inst_17058__$1 = tmp17148;var inst_17059__$1 = tmp17150;var inst_17060__$1 = inst_17068;var state_17118__$1 = (function (){var statearr_17154 = state_17118;(statearr_17154[(13)] = inst_17058__$1);
(statearr_17154[(14)] = inst_17057__$1);
(statearr_17154[(18)] = inst_17067);
(statearr_17154[(15)] = inst_17060__$1);
(statearr_17154[(16)] = inst_17059__$1);
return statearr_17154;
})();var statearr_17155_17190 = state_17118__$1;(statearr_17155_17190[(2)] = null);
(statearr_17155_17190[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (18)))
{var inst_17086 = (state_17118[(2)]);var state_17118__$1 = state_17118;var statearr_17156_17191 = state_17118__$1;(statearr_17156_17191[(2)] = inst_17086);
(statearr_17156_17191[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17119 === (8)))
{var inst_17060 = (state_17118[(15)]);var inst_17059 = (state_17118[(16)]);var inst_17062 = (inst_17060 < inst_17059);var inst_17063 = inst_17062;var state_17118__$1 = state_17118;if(cljs.core.truth_(inst_17063))
{var statearr_17157_17192 = state_17118__$1;(statearr_17157_17192[(1)] = (10));
} else
{var statearr_17158_17193 = state_17118__$1;(statearr_17158_17193[(1)] = (11));
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
});})(c__5708__auto___17166,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___17166,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17162[(0)] = state_machine__5694__auto__);
(statearr_17162[(1)] = (1));
return statearr_17162;
});
var state_machine__5694__auto____1 = (function (state_17118){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17118);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17163){if((e17163 instanceof Object))
{var ex__5697__auto__ = e17163;var statearr_17164_17194 = state_17118;(statearr_17164_17194[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17118);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17163;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17195 = state_17118;
state_17118 = G__17195;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17118){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17166,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_17165 = f__5709__auto__.call(null);(statearr_17165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17166);
return statearr_17165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17166,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___17332 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17302){var state_val_17303 = (state_17302[(1)]);if((state_val_17303 === (7)))
{var state_17302__$1 = state_17302;var statearr_17304_17333 = state_17302__$1;(statearr_17304_17333[(2)] = null);
(statearr_17304_17333[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (1)))
{var state_17302__$1 = state_17302;var statearr_17305_17334 = state_17302__$1;(statearr_17305_17334[(2)] = null);
(statearr_17305_17334[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (4)))
{var inst_17266 = (state_17302[(7)]);var inst_17268 = (inst_17266 < cnt);var state_17302__$1 = state_17302;if(cljs.core.truth_(inst_17268))
{var statearr_17306_17335 = state_17302__$1;(statearr_17306_17335[(1)] = (6));
} else
{var statearr_17307_17336 = state_17302__$1;(statearr_17307_17336[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (15)))
{var inst_17298 = (state_17302[(2)]);var state_17302__$1 = state_17302;var statearr_17308_17337 = state_17302__$1;(statearr_17308_17337[(2)] = inst_17298);
(statearr_17308_17337[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (13)))
{var inst_17291 = cljs.core.async.close_BANG_.call(null,out);var state_17302__$1 = state_17302;var statearr_17309_17338 = state_17302__$1;(statearr_17309_17338[(2)] = inst_17291);
(statearr_17309_17338[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (6)))
{var state_17302__$1 = state_17302;var statearr_17310_17339 = state_17302__$1;(statearr_17310_17339[(2)] = null);
(statearr_17310_17339[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (3)))
{var inst_17300 = (state_17302[(2)]);var state_17302__$1 = state_17302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17302__$1,inst_17300);
} else
{if((state_val_17303 === (12)))
{var inst_17288 = (state_17302[(8)]);var inst_17288__$1 = (state_17302[(2)]);var inst_17289 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17288__$1);var state_17302__$1 = (function (){var statearr_17311 = state_17302;(statearr_17311[(8)] = inst_17288__$1);
return statearr_17311;
})();if(cljs.core.truth_(inst_17289))
{var statearr_17312_17340 = state_17302__$1;(statearr_17312_17340[(1)] = (13));
} else
{var statearr_17313_17341 = state_17302__$1;(statearr_17313_17341[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (2)))
{var inst_17265 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17266 = (0);var state_17302__$1 = (function (){var statearr_17314 = state_17302;(statearr_17314[(7)] = inst_17266);
(statearr_17314[(9)] = inst_17265);
return statearr_17314;
})();var statearr_17315_17342 = state_17302__$1;(statearr_17315_17342[(2)] = null);
(statearr_17315_17342[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (11)))
{var inst_17266 = (state_17302[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17302,(10),Object,null,(9));var inst_17275 = chs__$1.call(null,inst_17266);var inst_17276 = done.call(null,inst_17266);var inst_17277 = cljs.core.async.take_BANG_.call(null,inst_17275,inst_17276);var state_17302__$1 = state_17302;var statearr_17316_17343 = state_17302__$1;(statearr_17316_17343[(2)] = inst_17277);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17302__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (9)))
{var inst_17266 = (state_17302[(7)]);var inst_17279 = (state_17302[(2)]);var inst_17280 = (inst_17266 + (1));var inst_17266__$1 = inst_17280;var state_17302__$1 = (function (){var statearr_17317 = state_17302;(statearr_17317[(7)] = inst_17266__$1);
(statearr_17317[(10)] = inst_17279);
return statearr_17317;
})();var statearr_17318_17344 = state_17302__$1;(statearr_17318_17344[(2)] = null);
(statearr_17318_17344[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (5)))
{var inst_17286 = (state_17302[(2)]);var state_17302__$1 = (function (){var statearr_17319 = state_17302;(statearr_17319[(11)] = inst_17286);
return statearr_17319;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17302__$1,(12),dchan);
} else
{if((state_val_17303 === (14)))
{var inst_17288 = (state_17302[(8)]);var inst_17293 = cljs.core.apply.call(null,f,inst_17288);var state_17302__$1 = state_17302;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17302__$1,(16),out,inst_17293);
} else
{if((state_val_17303 === (16)))
{var inst_17295 = (state_17302[(2)]);var state_17302__$1 = (function (){var statearr_17320 = state_17302;(statearr_17320[(12)] = inst_17295);
return statearr_17320;
})();var statearr_17321_17345 = state_17302__$1;(statearr_17321_17345[(2)] = null);
(statearr_17321_17345[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (10)))
{var inst_17270 = (state_17302[(2)]);var inst_17271 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17302__$1 = (function (){var statearr_17322 = state_17302;(statearr_17322[(13)] = inst_17270);
return statearr_17322;
})();var statearr_17323_17346 = state_17302__$1;(statearr_17323_17346[(2)] = inst_17271);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17302__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17303 === (8)))
{var inst_17284 = (state_17302[(2)]);var state_17302__$1 = state_17302;var statearr_17324_17347 = state_17302__$1;(statearr_17324_17347[(2)] = inst_17284);
(statearr_17324_17347[(1)] = (5));
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
});})(c__5708__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17328[(0)] = state_machine__5694__auto__);
(statearr_17328[(1)] = (1));
return statearr_17328;
});
var state_machine__5694__auto____1 = (function (state_17302){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17302);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17329){if((e17329 instanceof Object))
{var ex__5697__auto__ = e17329;var statearr_17330_17348 = state_17302;(statearr_17330_17348[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17302);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17329;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17349 = state_17302;
state_17302 = G__17349;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17302){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_17331 = f__5709__auto__.call(null);(statearr_17331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17332);
return statearr_17331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17332,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17457 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17457,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17457,out){
return (function (state_17433){var state_val_17434 = (state_17433[(1)]);if((state_val_17434 === (7)))
{var inst_17413 = (state_17433[(7)]);var inst_17412 = (state_17433[(8)]);var inst_17412__$1 = (state_17433[(2)]);var inst_17413__$1 = cljs.core.nth.call(null,inst_17412__$1,(0),null);var inst_17414 = cljs.core.nth.call(null,inst_17412__$1,(1),null);var inst_17415 = (inst_17413__$1 == null);var state_17433__$1 = (function (){var statearr_17435 = state_17433;(statearr_17435[(7)] = inst_17413__$1);
(statearr_17435[(8)] = inst_17412__$1);
(statearr_17435[(9)] = inst_17414);
return statearr_17435;
})();if(cljs.core.truth_(inst_17415))
{var statearr_17436_17458 = state_17433__$1;(statearr_17436_17458[(1)] = (8));
} else
{var statearr_17437_17459 = state_17433__$1;(statearr_17437_17459[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (1)))
{var inst_17404 = cljs.core.vec.call(null,chs);var inst_17405 = inst_17404;var state_17433__$1 = (function (){var statearr_17438 = state_17433;(statearr_17438[(10)] = inst_17405);
return statearr_17438;
})();var statearr_17439_17460 = state_17433__$1;(statearr_17439_17460[(2)] = null);
(statearr_17439_17460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (4)))
{var inst_17405 = (state_17433[(10)]);var state_17433__$1 = state_17433;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17433__$1,(7),inst_17405);
} else
{if((state_val_17434 === (6)))
{var inst_17429 = (state_17433[(2)]);var state_17433__$1 = state_17433;var statearr_17440_17461 = state_17433__$1;(statearr_17440_17461[(2)] = inst_17429);
(statearr_17440_17461[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (3)))
{var inst_17431 = (state_17433[(2)]);var state_17433__$1 = state_17433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17433__$1,inst_17431);
} else
{if((state_val_17434 === (2)))
{var inst_17405 = (state_17433[(10)]);var inst_17407 = cljs.core.count.call(null,inst_17405);var inst_17408 = (inst_17407 > (0));var state_17433__$1 = state_17433;if(cljs.core.truth_(inst_17408))
{var statearr_17442_17462 = state_17433__$1;(statearr_17442_17462[(1)] = (4));
} else
{var statearr_17443_17463 = state_17433__$1;(statearr_17443_17463[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (11)))
{var inst_17405 = (state_17433[(10)]);var inst_17422 = (state_17433[(2)]);var tmp17441 = inst_17405;var inst_17405__$1 = tmp17441;var state_17433__$1 = (function (){var statearr_17444 = state_17433;(statearr_17444[(10)] = inst_17405__$1);
(statearr_17444[(11)] = inst_17422);
return statearr_17444;
})();var statearr_17445_17464 = state_17433__$1;(statearr_17445_17464[(2)] = null);
(statearr_17445_17464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (9)))
{var inst_17413 = (state_17433[(7)]);var state_17433__$1 = state_17433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17433__$1,(11),out,inst_17413);
} else
{if((state_val_17434 === (5)))
{var inst_17427 = cljs.core.async.close_BANG_.call(null,out);var state_17433__$1 = state_17433;var statearr_17446_17465 = state_17433__$1;(statearr_17446_17465[(2)] = inst_17427);
(statearr_17446_17465[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (10)))
{var inst_17425 = (state_17433[(2)]);var state_17433__$1 = state_17433;var statearr_17447_17466 = state_17433__$1;(statearr_17447_17466[(2)] = inst_17425);
(statearr_17447_17466[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17434 === (8)))
{var inst_17413 = (state_17433[(7)]);var inst_17412 = (state_17433[(8)]);var inst_17414 = (state_17433[(9)]);var inst_17405 = (state_17433[(10)]);var inst_17417 = (function (){var c = inst_17414;var v = inst_17413;var vec__17410 = inst_17412;var cs = inst_17405;return ((function (c,v,vec__17410,cs,inst_17413,inst_17412,inst_17414,inst_17405,state_val_17434,c__5708__auto___17457,out){
return (function (p1__17350_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17350_SHARP_);
});
;})(c,v,vec__17410,cs,inst_17413,inst_17412,inst_17414,inst_17405,state_val_17434,c__5708__auto___17457,out))
})();var inst_17418 = cljs.core.filterv.call(null,inst_17417,inst_17405);var inst_17405__$1 = inst_17418;var state_17433__$1 = (function (){var statearr_17448 = state_17433;(statearr_17448[(10)] = inst_17405__$1);
return statearr_17448;
})();var statearr_17449_17467 = state_17433__$1;(statearr_17449_17467[(2)] = null);
(statearr_17449_17467[(1)] = (2));
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
});})(c__5708__auto___17457,out))
;return ((function (switch__5693__auto__,c__5708__auto___17457,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17453 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17453[(0)] = state_machine__5694__auto__);
(statearr_17453[(1)] = (1));
return statearr_17453;
});
var state_machine__5694__auto____1 = (function (state_17433){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17433);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17454){if((e17454 instanceof Object))
{var ex__5697__auto__ = e17454;var statearr_17455_17468 = state_17433;(statearr_17455_17468[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17433);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17454;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17469 = state_17433;
state_17433 = G__17469;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17433){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17457,out))
})();var state__5710__auto__ = (function (){var statearr_17456 = f__5709__auto__.call(null);(statearr_17456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17457);
return statearr_17456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17457,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17562 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17562,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17562,out){
return (function (state_17539){var state_val_17540 = (state_17539[(1)]);if((state_val_17540 === (7)))
{var inst_17521 = (state_17539[(7)]);var inst_17521__$1 = (state_17539[(2)]);var inst_17522 = (inst_17521__$1 == null);var inst_17523 = cljs.core.not.call(null,inst_17522);var state_17539__$1 = (function (){var statearr_17541 = state_17539;(statearr_17541[(7)] = inst_17521__$1);
return statearr_17541;
})();if(inst_17523)
{var statearr_17542_17563 = state_17539__$1;(statearr_17542_17563[(1)] = (8));
} else
{var statearr_17543_17564 = state_17539__$1;(statearr_17543_17564[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17540 === (1)))
{var inst_17516 = (0);var state_17539__$1 = (function (){var statearr_17544 = state_17539;(statearr_17544[(8)] = inst_17516);
return statearr_17544;
})();var statearr_17545_17565 = state_17539__$1;(statearr_17545_17565[(2)] = null);
(statearr_17545_17565[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17540 === (4)))
{var state_17539__$1 = state_17539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17539__$1,(7),ch);
} else
{if((state_val_17540 === (6)))
{var inst_17534 = (state_17539[(2)]);var state_17539__$1 = state_17539;var statearr_17546_17566 = state_17539__$1;(statearr_17546_17566[(2)] = inst_17534);
(statearr_17546_17566[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17540 === (3)))
{var inst_17536 = (state_17539[(2)]);var inst_17537 = cljs.core.async.close_BANG_.call(null,out);var state_17539__$1 = (function (){var statearr_17547 = state_17539;(statearr_17547[(9)] = inst_17536);
return statearr_17547;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17539__$1,inst_17537);
} else
{if((state_val_17540 === (2)))
{var inst_17516 = (state_17539[(8)]);var inst_17518 = (inst_17516 < n);var state_17539__$1 = state_17539;if(cljs.core.truth_(inst_17518))
{var statearr_17548_17567 = state_17539__$1;(statearr_17548_17567[(1)] = (4));
} else
{var statearr_17549_17568 = state_17539__$1;(statearr_17549_17568[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17540 === (11)))
{var inst_17516 = (state_17539[(8)]);var inst_17526 = (state_17539[(2)]);var inst_17527 = (inst_17516 + (1));var inst_17516__$1 = inst_17527;var state_17539__$1 = (function (){var statearr_17550 = state_17539;(statearr_17550[(8)] = inst_17516__$1);
(statearr_17550[(10)] = inst_17526);
return statearr_17550;
})();var statearr_17551_17569 = state_17539__$1;(statearr_17551_17569[(2)] = null);
(statearr_17551_17569[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17540 === (9)))
{var state_17539__$1 = state_17539;var statearr_17552_17570 = state_17539__$1;(statearr_17552_17570[(2)] = null);
(statearr_17552_17570[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17540 === (5)))
{var state_17539__$1 = state_17539;var statearr_17553_17571 = state_17539__$1;(statearr_17553_17571[(2)] = null);
(statearr_17553_17571[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17540 === (10)))
{var inst_17531 = (state_17539[(2)]);var state_17539__$1 = state_17539;var statearr_17554_17572 = state_17539__$1;(statearr_17554_17572[(2)] = inst_17531);
(statearr_17554_17572[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17540 === (8)))
{var inst_17521 = (state_17539[(7)]);var state_17539__$1 = state_17539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17539__$1,(11),out,inst_17521);
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
});})(c__5708__auto___17562,out))
;return ((function (switch__5693__auto__,c__5708__auto___17562,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17558 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17558[(0)] = state_machine__5694__auto__);
(statearr_17558[(1)] = (1));
return statearr_17558;
});
var state_machine__5694__auto____1 = (function (state_17539){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17539);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17559){if((e17559 instanceof Object))
{var ex__5697__auto__ = e17559;var statearr_17560_17573 = state_17539;(statearr_17560_17573[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17539);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17559;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17574 = state_17539;
state_17539 = G__17574;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17539){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17562,out))
})();var state__5710__auto__ = (function (){var statearr_17561 = f__5709__auto__.call(null);(statearr_17561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17562);
return statearr_17561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17562,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17671 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17671,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17671,out){
return (function (state_17646){var state_val_17647 = (state_17646[(1)]);if((state_val_17647 === (7)))
{var inst_17641 = (state_17646[(2)]);var state_17646__$1 = state_17646;var statearr_17648_17672 = state_17646__$1;(statearr_17648_17672[(2)] = inst_17641);
(statearr_17648_17672[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17647 === (1)))
{var inst_17623 = null;var state_17646__$1 = (function (){var statearr_17649 = state_17646;(statearr_17649[(7)] = inst_17623);
return statearr_17649;
})();var statearr_17650_17673 = state_17646__$1;(statearr_17650_17673[(2)] = null);
(statearr_17650_17673[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17647 === (4)))
{var inst_17626 = (state_17646[(8)]);var inst_17626__$1 = (state_17646[(2)]);var inst_17627 = (inst_17626__$1 == null);var inst_17628 = cljs.core.not.call(null,inst_17627);var state_17646__$1 = (function (){var statearr_17651 = state_17646;(statearr_17651[(8)] = inst_17626__$1);
return statearr_17651;
})();if(inst_17628)
{var statearr_17652_17674 = state_17646__$1;(statearr_17652_17674[(1)] = (5));
} else
{var statearr_17653_17675 = state_17646__$1;(statearr_17653_17675[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17647 === (6)))
{var state_17646__$1 = state_17646;var statearr_17654_17676 = state_17646__$1;(statearr_17654_17676[(2)] = null);
(statearr_17654_17676[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17647 === (3)))
{var inst_17643 = (state_17646[(2)]);var inst_17644 = cljs.core.async.close_BANG_.call(null,out);var state_17646__$1 = (function (){var statearr_17655 = state_17646;(statearr_17655[(9)] = inst_17643);
return statearr_17655;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17646__$1,inst_17644);
} else
{if((state_val_17647 === (2)))
{var state_17646__$1 = state_17646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17646__$1,(4),ch);
} else
{if((state_val_17647 === (11)))
{var inst_17626 = (state_17646[(8)]);var inst_17635 = (state_17646[(2)]);var inst_17623 = inst_17626;var state_17646__$1 = (function (){var statearr_17656 = state_17646;(statearr_17656[(7)] = inst_17623);
(statearr_17656[(10)] = inst_17635);
return statearr_17656;
})();var statearr_17657_17677 = state_17646__$1;(statearr_17657_17677[(2)] = null);
(statearr_17657_17677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17647 === (9)))
{var inst_17626 = (state_17646[(8)]);var state_17646__$1 = state_17646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17646__$1,(11),out,inst_17626);
} else
{if((state_val_17647 === (5)))
{var inst_17626 = (state_17646[(8)]);var inst_17623 = (state_17646[(7)]);var inst_17630 = cljs.core._EQ_.call(null,inst_17626,inst_17623);var state_17646__$1 = state_17646;if(inst_17630)
{var statearr_17659_17678 = state_17646__$1;(statearr_17659_17678[(1)] = (8));
} else
{var statearr_17660_17679 = state_17646__$1;(statearr_17660_17679[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17647 === (10)))
{var inst_17638 = (state_17646[(2)]);var state_17646__$1 = state_17646;var statearr_17661_17680 = state_17646__$1;(statearr_17661_17680[(2)] = inst_17638);
(statearr_17661_17680[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17647 === (8)))
{var inst_17623 = (state_17646[(7)]);var tmp17658 = inst_17623;var inst_17623__$1 = tmp17658;var state_17646__$1 = (function (){var statearr_17662 = state_17646;(statearr_17662[(7)] = inst_17623__$1);
return statearr_17662;
})();var statearr_17663_17681 = state_17646__$1;(statearr_17663_17681[(2)] = null);
(statearr_17663_17681[(1)] = (2));
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
});})(c__5708__auto___17671,out))
;return ((function (switch__5693__auto__,c__5708__auto___17671,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17667 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17667[(0)] = state_machine__5694__auto__);
(statearr_17667[(1)] = (1));
return statearr_17667;
});
var state_machine__5694__auto____1 = (function (state_17646){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17646);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17668){if((e17668 instanceof Object))
{var ex__5697__auto__ = e17668;var statearr_17669_17682 = state_17646;(statearr_17669_17682[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17646);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17668;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17683 = state_17646;
state_17646 = G__17683;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17646){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17671,out))
})();var state__5710__auto__ = (function (){var statearr_17670 = f__5709__auto__.call(null);(statearr_17670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17671);
return statearr_17670;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17671,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17818 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17818,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17818,out){
return (function (state_17788){var state_val_17789 = (state_17788[(1)]);if((state_val_17789 === (7)))
{var inst_17784 = (state_17788[(2)]);var state_17788__$1 = state_17788;var statearr_17790_17819 = state_17788__$1;(statearr_17790_17819[(2)] = inst_17784);
(statearr_17790_17819[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17789 === (1)))
{var inst_17751 = (new Array(n));var inst_17752 = inst_17751;var inst_17753 = (0);var state_17788__$1 = (function (){var statearr_17791 = state_17788;(statearr_17791[(7)] = inst_17752);
(statearr_17791[(8)] = inst_17753);
return statearr_17791;
})();var statearr_17792_17820 = state_17788__$1;(statearr_17792_17820[(2)] = null);
(statearr_17792_17820[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17789 === (4)))
{var inst_17756 = (state_17788[(9)]);var inst_17756__$1 = (state_17788[(2)]);var inst_17757 = (inst_17756__$1 == null);var inst_17758 = cljs.core.not.call(null,inst_17757);var state_17788__$1 = (function (){var statearr_17793 = state_17788;(statearr_17793[(9)] = inst_17756__$1);
return statearr_17793;
})();if(inst_17758)
{var statearr_17794_17821 = state_17788__$1;(statearr_17794_17821[(1)] = (5));
} else
{var statearr_17795_17822 = state_17788__$1;(statearr_17795_17822[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17789 === (15)))
{var inst_17778 = (state_17788[(2)]);var state_17788__$1 = state_17788;var statearr_17796_17823 = state_17788__$1;(statearr_17796_17823[(2)] = inst_17778);
(statearr_17796_17823[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17789 === (13)))
{var state_17788__$1 = state_17788;var statearr_17797_17824 = state_17788__$1;(statearr_17797_17824[(2)] = null);
(statearr_17797_17824[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17789 === (6)))
{var inst_17753 = (state_17788[(8)]);var inst_17774 = (inst_17753 > (0));var state_17788__$1 = state_17788;if(cljs.core.truth_(inst_17774))
{var statearr_17798_17825 = state_17788__$1;(statearr_17798_17825[(1)] = (12));
} else
{var statearr_17799_17826 = state_17788__$1;(statearr_17799_17826[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17789 === (3)))
{var inst_17786 = (state_17788[(2)]);var state_17788__$1 = state_17788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17788__$1,inst_17786);
} else
{if((state_val_17789 === (12)))
{var inst_17752 = (state_17788[(7)]);var inst_17776 = cljs.core.vec.call(null,inst_17752);var state_17788__$1 = state_17788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17788__$1,(15),out,inst_17776);
} else
{if((state_val_17789 === (2)))
{var state_17788__$1 = state_17788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17788__$1,(4),ch);
} else
{if((state_val_17789 === (11)))
{var inst_17768 = (state_17788[(2)]);var inst_17769 = (new Array(n));var inst_17752 = inst_17769;var inst_17753 = (0);var state_17788__$1 = (function (){var statearr_17800 = state_17788;(statearr_17800[(10)] = inst_17768);
(statearr_17800[(7)] = inst_17752);
(statearr_17800[(8)] = inst_17753);
return statearr_17800;
})();var statearr_17801_17827 = state_17788__$1;(statearr_17801_17827[(2)] = null);
(statearr_17801_17827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17789 === (9)))
{var inst_17752 = (state_17788[(7)]);var inst_17766 = cljs.core.vec.call(null,inst_17752);var state_17788__$1 = state_17788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17788__$1,(11),out,inst_17766);
} else
{if((state_val_17789 === (5)))
{var inst_17761 = (state_17788[(11)]);var inst_17752 = (state_17788[(7)]);var inst_17756 = (state_17788[(9)]);var inst_17753 = (state_17788[(8)]);var inst_17760 = (inst_17752[inst_17753] = inst_17756);var inst_17761__$1 = (inst_17753 + (1));var inst_17762 = (inst_17761__$1 < n);var state_17788__$1 = (function (){var statearr_17802 = state_17788;(statearr_17802[(11)] = inst_17761__$1);
(statearr_17802[(12)] = inst_17760);
return statearr_17802;
})();if(cljs.core.truth_(inst_17762))
{var statearr_17803_17828 = state_17788__$1;(statearr_17803_17828[(1)] = (8));
} else
{var statearr_17804_17829 = state_17788__$1;(statearr_17804_17829[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17789 === (14)))
{var inst_17781 = (state_17788[(2)]);var inst_17782 = cljs.core.async.close_BANG_.call(null,out);var state_17788__$1 = (function (){var statearr_17806 = state_17788;(statearr_17806[(13)] = inst_17781);
return statearr_17806;
})();var statearr_17807_17830 = state_17788__$1;(statearr_17807_17830[(2)] = inst_17782);
(statearr_17807_17830[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17789 === (10)))
{var inst_17772 = (state_17788[(2)]);var state_17788__$1 = state_17788;var statearr_17808_17831 = state_17788__$1;(statearr_17808_17831[(2)] = inst_17772);
(statearr_17808_17831[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17789 === (8)))
{var inst_17761 = (state_17788[(11)]);var inst_17752 = (state_17788[(7)]);var tmp17805 = inst_17752;var inst_17752__$1 = tmp17805;var inst_17753 = inst_17761;var state_17788__$1 = (function (){var statearr_17809 = state_17788;(statearr_17809[(7)] = inst_17752__$1);
(statearr_17809[(8)] = inst_17753);
return statearr_17809;
})();var statearr_17810_17832 = state_17788__$1;(statearr_17810_17832[(2)] = null);
(statearr_17810_17832[(1)] = (2));
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
});})(c__5708__auto___17818,out))
;return ((function (switch__5693__auto__,c__5708__auto___17818,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17814[(0)] = state_machine__5694__auto__);
(statearr_17814[(1)] = (1));
return statearr_17814;
});
var state_machine__5694__auto____1 = (function (state_17788){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17788);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17815){if((e17815 instanceof Object))
{var ex__5697__auto__ = e17815;var statearr_17816_17833 = state_17788;(statearr_17816_17833[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17788);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17815;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17834 = state_17788;
state_17788 = G__17834;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17788){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17818,out))
})();var state__5710__auto__ = (function (){var statearr_17817 = f__5709__auto__.call(null);(statearr_17817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17818);
return statearr_17817;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17818,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___17977 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17977,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17977,out){
return (function (state_17947){var state_val_17948 = (state_17947[(1)]);if((state_val_17948 === (7)))
{var inst_17943 = (state_17947[(2)]);var state_17947__$1 = state_17947;var statearr_17949_17978 = state_17947__$1;(statearr_17949_17978[(2)] = inst_17943);
(statearr_17949_17978[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17948 === (1)))
{var inst_17906 = [];var inst_17907 = inst_17906;var inst_17908 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_17947__$1 = (function (){var statearr_17950 = state_17947;(statearr_17950[(7)] = inst_17908);
(statearr_17950[(8)] = inst_17907);
return statearr_17950;
})();var statearr_17951_17979 = state_17947__$1;(statearr_17951_17979[(2)] = null);
(statearr_17951_17979[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17948 === (4)))
{var inst_17911 = (state_17947[(9)]);var inst_17911__$1 = (state_17947[(2)]);var inst_17912 = (inst_17911__$1 == null);var inst_17913 = cljs.core.not.call(null,inst_17912);var state_17947__$1 = (function (){var statearr_17952 = state_17947;(statearr_17952[(9)] = inst_17911__$1);
return statearr_17952;
})();if(inst_17913)
{var statearr_17953_17980 = state_17947__$1;(statearr_17953_17980[(1)] = (5));
} else
{var statearr_17954_17981 = state_17947__$1;(statearr_17954_17981[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17948 === (15)))
{var inst_17937 = (state_17947[(2)]);var state_17947__$1 = state_17947;var statearr_17955_17982 = state_17947__$1;(statearr_17955_17982[(2)] = inst_17937);
(statearr_17955_17982[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17948 === (13)))
{var state_17947__$1 = state_17947;var statearr_17956_17983 = state_17947__$1;(statearr_17956_17983[(2)] = null);
(statearr_17956_17983[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17948 === (6)))
{var inst_17907 = (state_17947[(8)]);var inst_17932 = inst_17907.length;var inst_17933 = (inst_17932 > (0));var state_17947__$1 = state_17947;if(cljs.core.truth_(inst_17933))
{var statearr_17957_17984 = state_17947__$1;(statearr_17957_17984[(1)] = (12));
} else
{var statearr_17958_17985 = state_17947__$1;(statearr_17958_17985[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17948 === (3)))
{var inst_17945 = (state_17947[(2)]);var state_17947__$1 = state_17947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17947__$1,inst_17945);
} else
{if((state_val_17948 === (12)))
{var inst_17907 = (state_17947[(8)]);var inst_17935 = cljs.core.vec.call(null,inst_17907);var state_17947__$1 = state_17947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17947__$1,(15),out,inst_17935);
} else
{if((state_val_17948 === (2)))
{var state_17947__$1 = state_17947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17947__$1,(4),ch);
} else
{if((state_val_17948 === (11)))
{var inst_17911 = (state_17947[(9)]);var inst_17915 = (state_17947[(10)]);var inst_17925 = (state_17947[(2)]);var inst_17926 = [];var inst_17927 = inst_17926.push(inst_17911);var inst_17907 = inst_17926;var inst_17908 = inst_17915;var state_17947__$1 = (function (){var statearr_17959 = state_17947;(statearr_17959[(7)] = inst_17908);
(statearr_17959[(11)] = inst_17925);
(statearr_17959[(12)] = inst_17927);
(statearr_17959[(8)] = inst_17907);
return statearr_17959;
})();var statearr_17960_17986 = state_17947__$1;(statearr_17960_17986[(2)] = null);
(statearr_17960_17986[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17948 === (9)))
{var inst_17907 = (state_17947[(8)]);var inst_17923 = cljs.core.vec.call(null,inst_17907);var state_17947__$1 = state_17947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17947__$1,(11),out,inst_17923);
} else
{if((state_val_17948 === (5)))
{var inst_17911 = (state_17947[(9)]);var inst_17908 = (state_17947[(7)]);var inst_17915 = (state_17947[(10)]);var inst_17915__$1 = f.call(null,inst_17911);var inst_17916 = cljs.core._EQ_.call(null,inst_17915__$1,inst_17908);var inst_17917 = cljs.core.keyword_identical_QMARK_.call(null,inst_17908,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_17918 = (inst_17916) || (inst_17917);var state_17947__$1 = (function (){var statearr_17961 = state_17947;(statearr_17961[(10)] = inst_17915__$1);
return statearr_17961;
})();if(cljs.core.truth_(inst_17918))
{var statearr_17962_17987 = state_17947__$1;(statearr_17962_17987[(1)] = (8));
} else
{var statearr_17963_17988 = state_17947__$1;(statearr_17963_17988[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17948 === (14)))
{var inst_17940 = (state_17947[(2)]);var inst_17941 = cljs.core.async.close_BANG_.call(null,out);var state_17947__$1 = (function (){var statearr_17965 = state_17947;(statearr_17965[(13)] = inst_17940);
return statearr_17965;
})();var statearr_17966_17989 = state_17947__$1;(statearr_17966_17989[(2)] = inst_17941);
(statearr_17966_17989[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17948 === (10)))
{var inst_17930 = (state_17947[(2)]);var state_17947__$1 = state_17947;var statearr_17967_17990 = state_17947__$1;(statearr_17967_17990[(2)] = inst_17930);
(statearr_17967_17990[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17948 === (8)))
{var inst_17911 = (state_17947[(9)]);var inst_17915 = (state_17947[(10)]);var inst_17907 = (state_17947[(8)]);var inst_17920 = inst_17907.push(inst_17911);var tmp17964 = inst_17907;var inst_17907__$1 = tmp17964;var inst_17908 = inst_17915;var state_17947__$1 = (function (){var statearr_17968 = state_17947;(statearr_17968[(7)] = inst_17908);
(statearr_17968[(14)] = inst_17920);
(statearr_17968[(8)] = inst_17907__$1);
return statearr_17968;
})();var statearr_17969_17991 = state_17947__$1;(statearr_17969_17991[(2)] = null);
(statearr_17969_17991[(1)] = (2));
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
});})(c__5708__auto___17977,out))
;return ((function (switch__5693__auto__,c__5708__auto___17977,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17973[(0)] = state_machine__5694__auto__);
(statearr_17973[(1)] = (1));
return statearr_17973;
});
var state_machine__5694__auto____1 = (function (state_17947){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17947);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17974){if((e17974 instanceof Object))
{var ex__5697__auto__ = e17974;var statearr_17975_17992 = state_17947;(statearr_17975_17992[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17947);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17974;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17993 = state_17947;
state_17947 = G__17993;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17947){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17977,out))
})();var state__5710__auto__ = (function (){var statearr_17976 = f__5709__auto__.call(null);(statearr_17976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17977);
return statearr_17976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17977,out))
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
