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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t64097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64097 = (function (f,fn_handler,meta64098){
this.f = f;
this.fn_handler = fn_handler;
this.meta64098 = meta64098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64097.cljs$lang$type = true;
cljs.core.async.t64097.cljs$lang$ctorStr = "cljs.core.async/t64097";
cljs.core.async.t64097.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t64097");
});
cljs.core.async.t64097.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t64097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t64097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t64097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64099){var self__ = this;
var _64099__$1 = this;return self__.meta64098;
});
cljs.core.async.t64097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64099,meta64098__$1){var self__ = this;
var _64099__$1 = this;return (new cljs.core.async.t64097(self__.f,self__.fn_handler,meta64098__$1));
});
cljs.core.async.__GT_t64097 = (function __GT_t64097(f__$1,fn_handler__$1,meta64098){return (new cljs.core.async.t64097(f__$1,fn_handler__$1,meta64098));
});
}
return (new cljs.core.async.t64097(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__64101 = buff;if(G__64101)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__64101.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__64101.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__64101);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__64101);
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
{var val_64102 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_64102);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_64102,ret){
return (function (){return fn1.call(null,val_64102);
});})(val_64102,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___64103 = n;var x_64104 = (0);while(true){
if((x_64104 < n__4414__auto___64103))
{(a[x_64104] = (0));
{
var G__64105 = (x_64104 + (1));
x_64104 = G__64105;
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
var G__64106 = (i + (1));
i = G__64106;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t64110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64110 = (function (flag,alt_flag,meta64111){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta64111 = meta64111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64110.cljs$lang$type = true;
cljs.core.async.t64110.cljs$lang$ctorStr = "cljs.core.async/t64110";
cljs.core.async.t64110.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t64110");
});})(flag))
;
cljs.core.async.t64110.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t64110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t64110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t64110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_64112){var self__ = this;
var _64112__$1 = this;return self__.meta64111;
});})(flag))
;
cljs.core.async.t64110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_64112,meta64111__$1){var self__ = this;
var _64112__$1 = this;return (new cljs.core.async.t64110(self__.flag,self__.alt_flag,meta64111__$1));
});})(flag))
;
cljs.core.async.__GT_t64110 = ((function (flag){
return (function __GT_t64110(flag__$1,alt_flag__$1,meta64111){return (new cljs.core.async.t64110(flag__$1,alt_flag__$1,meta64111));
});})(flag))
;
}
return (new cljs.core.async.t64110(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t64116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64116 = (function (cb,flag,alt_handler,meta64117){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta64117 = meta64117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64116.cljs$lang$type = true;
cljs.core.async.t64116.cljs$lang$ctorStr = "cljs.core.async/t64116";
cljs.core.async.t64116.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t64116");
});
cljs.core.async.t64116.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t64116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t64116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t64116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64118){var self__ = this;
var _64118__$1 = this;return self__.meta64117;
});
cljs.core.async.t64116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64118,meta64117__$1){var self__ = this;
var _64118__$1 = this;return (new cljs.core.async.t64116(self__.cb,self__.flag,self__.alt_handler,meta64117__$1));
});
cljs.core.async.__GT_t64116 = (function __GT_t64116(cb__$1,flag__$1,alt_handler__$1,meta64117){return (new cljs.core.async.t64116(cb__$1,flag__$1,alt_handler__$1,meta64117));
});
}
return (new cljs.core.async.t64116(cb,flag,alt_handler,null));
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
return (function (p1__64119_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64119_SHARP_,port], null));
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
var G__64120 = (i + (1));
i = G__64120;
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
var alts_BANG___delegate = function (ports,p__64121){var map__64123 = p__64121;var map__64123__$1 = ((cljs.core.seq_QMARK_.call(null,map__64123))?cljs.core.apply.call(null,cljs.core.hash_map,map__64123):map__64123);var opts = map__64123__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__64121 = null;if (arguments.length > 1) {
  p__64121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__64121);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__64124){
var ports = cljs.core.first(arglist__64124);
var p__64121 = cljs.core.rest(arglist__64124);
return alts_BANG___delegate(ports,p__64121);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t64132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64132 = (function (ch,f,map_LT_,meta64133){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta64133 = meta64133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64132.cljs$lang$type = true;
cljs.core.async.t64132.cljs$lang$ctorStr = "cljs.core.async/t64132";
cljs.core.async.t64132.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t64132");
});
cljs.core.async.t64132.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t64132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t64132.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t64132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t64135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64135 = (function (fn1,_,meta64133,ch,f,map_LT_,meta64136){
this.fn1 = fn1;
this._ = _;
this.meta64133 = meta64133;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta64136 = meta64136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64135.cljs$lang$type = true;
cljs.core.async.t64135.cljs$lang$ctorStr = "cljs.core.async/t64135";
cljs.core.async.t64135.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t64135");
});})(___$1))
;
cljs.core.async.t64135.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t64135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t64135.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t64135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__64125_SHARP_){return f1.call(null,(((p1__64125_SHARP_ == null))?null:self__.f.call(null,p1__64125_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t64135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_64137){var self__ = this;
var _64137__$1 = this;return self__.meta64136;
});})(___$1))
;
cljs.core.async.t64135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_64137,meta64136__$1){var self__ = this;
var _64137__$1 = this;return (new cljs.core.async.t64135(self__.fn1,self__._,self__.meta64133,self__.ch,self__.f,self__.map_LT_,meta64136__$1));
});})(___$1))
;
cljs.core.async.__GT_t64135 = ((function (___$1){
return (function __GT_t64135(fn1__$1,___$2,meta64133__$1,ch__$2,f__$2,map_LT___$2,meta64136){return (new cljs.core.async.t64135(fn1__$1,___$2,meta64133__$1,ch__$2,f__$2,map_LT___$2,meta64136));
});})(___$1))
;
}
return (new cljs.core.async.t64135(fn1,___$1,self__.meta64133,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t64132.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t64132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t64132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64134){var self__ = this;
var _64134__$1 = this;return self__.meta64133;
});
cljs.core.async.t64132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64134,meta64133__$1){var self__ = this;
var _64134__$1 = this;return (new cljs.core.async.t64132(self__.ch,self__.f,self__.map_LT_,meta64133__$1));
});
cljs.core.async.__GT_t64132 = (function __GT_t64132(ch__$1,f__$1,map_LT___$1,meta64133){return (new cljs.core.async.t64132(ch__$1,f__$1,map_LT___$1,meta64133));
});
}
return (new cljs.core.async.t64132(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t64141 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64141 = (function (ch,f,map_GT_,meta64142){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta64142 = meta64142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64141.cljs$lang$type = true;
cljs.core.async.t64141.cljs$lang$ctorStr = "cljs.core.async/t64141";
cljs.core.async.t64141.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t64141");
});
cljs.core.async.t64141.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t64141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t64141.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t64141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t64141.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t64141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t64141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64143){var self__ = this;
var _64143__$1 = this;return self__.meta64142;
});
cljs.core.async.t64141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64143,meta64142__$1){var self__ = this;
var _64143__$1 = this;return (new cljs.core.async.t64141(self__.ch,self__.f,self__.map_GT_,meta64142__$1));
});
cljs.core.async.__GT_t64141 = (function __GT_t64141(ch__$1,f__$1,map_GT___$1,meta64142){return (new cljs.core.async.t64141(ch__$1,f__$1,map_GT___$1,meta64142));
});
}
return (new cljs.core.async.t64141(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t64147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64147 = (function (ch,p,filter_GT_,meta64148){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta64148 = meta64148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64147.cljs$lang$type = true;
cljs.core.async.t64147.cljs$lang$ctorStr = "cljs.core.async/t64147";
cljs.core.async.t64147.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t64147");
});
cljs.core.async.t64147.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t64147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t64147.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t64147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t64147.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t64147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t64147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64149){var self__ = this;
var _64149__$1 = this;return self__.meta64148;
});
cljs.core.async.t64147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64149,meta64148__$1){var self__ = this;
var _64149__$1 = this;return (new cljs.core.async.t64147(self__.ch,self__.p,self__.filter_GT_,meta64148__$1));
});
cljs.core.async.__GT_t64147 = (function __GT_t64147(ch__$1,p__$1,filter_GT___$1,meta64148){return (new cljs.core.async.t64147(ch__$1,p__$1,filter_GT___$1,meta64148));
});
}
return (new cljs.core.async.t64147(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___64232 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___64232,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___64232,out){
return (function (state_64211){var state_val_64212 = (state_64211[(1)]);if((state_val_64212 === (7)))
{var inst_64207 = (state_64211[(2)]);var state_64211__$1 = state_64211;var statearr_64213_64233 = state_64211__$1;(statearr_64213_64233[(2)] = inst_64207);
(statearr_64213_64233[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64212 === (1)))
{var state_64211__$1 = state_64211;var statearr_64214_64234 = state_64211__$1;(statearr_64214_64234[(2)] = null);
(statearr_64214_64234[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64212 === (4)))
{var inst_64193 = (state_64211[(7)]);var inst_64193__$1 = (state_64211[(2)]);var inst_64194 = (inst_64193__$1 == null);var state_64211__$1 = (function (){var statearr_64215 = state_64211;(statearr_64215[(7)] = inst_64193__$1);
return statearr_64215;
})();if(cljs.core.truth_(inst_64194))
{var statearr_64216_64235 = state_64211__$1;(statearr_64216_64235[(1)] = (5));
} else
{var statearr_64217_64236 = state_64211__$1;(statearr_64217_64236[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64212 === (6)))
{var inst_64193 = (state_64211[(7)]);var inst_64198 = p.call(null,inst_64193);var state_64211__$1 = state_64211;if(cljs.core.truth_(inst_64198))
{var statearr_64218_64237 = state_64211__$1;(statearr_64218_64237[(1)] = (8));
} else
{var statearr_64219_64238 = state_64211__$1;(statearr_64219_64238[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64212 === (3)))
{var inst_64209 = (state_64211[(2)]);var state_64211__$1 = state_64211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64211__$1,inst_64209);
} else
{if((state_val_64212 === (2)))
{var state_64211__$1 = state_64211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64211__$1,(4),ch);
} else
{if((state_val_64212 === (11)))
{var inst_64201 = (state_64211[(2)]);var state_64211__$1 = state_64211;var statearr_64220_64239 = state_64211__$1;(statearr_64220_64239[(2)] = inst_64201);
(statearr_64220_64239[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64212 === (9)))
{var state_64211__$1 = state_64211;var statearr_64221_64240 = state_64211__$1;(statearr_64221_64240[(2)] = null);
(statearr_64221_64240[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64212 === (5)))
{var inst_64196 = cljs.core.async.close_BANG_.call(null,out);var state_64211__$1 = state_64211;var statearr_64222_64241 = state_64211__$1;(statearr_64222_64241[(2)] = inst_64196);
(statearr_64222_64241[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64212 === (10)))
{var inst_64204 = (state_64211[(2)]);var state_64211__$1 = (function (){var statearr_64223 = state_64211;(statearr_64223[(8)] = inst_64204);
return statearr_64223;
})();var statearr_64224_64242 = state_64211__$1;(statearr_64224_64242[(2)] = null);
(statearr_64224_64242[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64212 === (8)))
{var inst_64193 = (state_64211[(7)]);var state_64211__$1 = state_64211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64211__$1,(11),out,inst_64193);
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
});})(c__5708__auto___64232,out))
;return ((function (switch__5693__auto__,c__5708__auto___64232,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_64228 = [null,null,null,null,null,null,null,null,null];(statearr_64228[(0)] = state_machine__5694__auto__);
(statearr_64228[(1)] = (1));
return statearr_64228;
});
var state_machine__5694__auto____1 = (function (state_64211){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_64211);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e64229){if((e64229 instanceof Object))
{var ex__5697__auto__ = e64229;var statearr_64230_64243 = state_64211;(statearr_64230_64243[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64211);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e64229;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64244 = state_64211;
state_64211 = G__64244;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_64211){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_64211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___64232,out))
})();var state__5710__auto__ = (function (){var statearr_64231 = f__5709__auto__.call(null);(statearr_64231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___64232);
return statearr_64231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___64232,out))
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
return (function (state_64396){var state_val_64397 = (state_64396[(1)]);if((state_val_64397 === (7)))
{var inst_64392 = (state_64396[(2)]);var state_64396__$1 = state_64396;var statearr_64398_64435 = state_64396__$1;(statearr_64398_64435[(2)] = inst_64392);
(statearr_64398_64435[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (20)))
{var inst_64367 = (state_64396[(7)]);var inst_64378 = (state_64396[(2)]);var inst_64379 = cljs.core.next.call(null,inst_64367);var inst_64353 = inst_64379;var inst_64354 = null;var inst_64355 = (0);var inst_64356 = (0);var state_64396__$1 = (function (){var statearr_64399 = state_64396;(statearr_64399[(8)] = inst_64354);
(statearr_64399[(9)] = inst_64353);
(statearr_64399[(10)] = inst_64356);
(statearr_64399[(11)] = inst_64355);
(statearr_64399[(12)] = inst_64378);
return statearr_64399;
})();var statearr_64400_64436 = state_64396__$1;(statearr_64400_64436[(2)] = null);
(statearr_64400_64436[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (1)))
{var state_64396__$1 = state_64396;var statearr_64401_64437 = state_64396__$1;(statearr_64401_64437[(2)] = null);
(statearr_64401_64437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (4)))
{var inst_64342 = (state_64396[(13)]);var inst_64342__$1 = (state_64396[(2)]);var inst_64343 = (inst_64342__$1 == null);var state_64396__$1 = (function (){var statearr_64405 = state_64396;(statearr_64405[(13)] = inst_64342__$1);
return statearr_64405;
})();if(cljs.core.truth_(inst_64343))
{var statearr_64406_64438 = state_64396__$1;(statearr_64406_64438[(1)] = (5));
} else
{var statearr_64407_64439 = state_64396__$1;(statearr_64407_64439[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (15)))
{var state_64396__$1 = state_64396;var statearr_64408_64440 = state_64396__$1;(statearr_64408_64440[(2)] = null);
(statearr_64408_64440[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (13)))
{var inst_64354 = (state_64396[(8)]);var inst_64353 = (state_64396[(9)]);var inst_64356 = (state_64396[(10)]);var inst_64355 = (state_64396[(11)]);var inst_64363 = (state_64396[(2)]);var inst_64364 = (inst_64356 + (1));var tmp64402 = inst_64354;var tmp64403 = inst_64353;var tmp64404 = inst_64355;var inst_64353__$1 = tmp64403;var inst_64354__$1 = tmp64402;var inst_64355__$1 = tmp64404;var inst_64356__$1 = inst_64364;var state_64396__$1 = (function (){var statearr_64409 = state_64396;(statearr_64409[(8)] = inst_64354__$1);
(statearr_64409[(9)] = inst_64353__$1);
(statearr_64409[(10)] = inst_64356__$1);
(statearr_64409[(11)] = inst_64355__$1);
(statearr_64409[(14)] = inst_64363);
return statearr_64409;
})();var statearr_64410_64441 = state_64396__$1;(statearr_64410_64441[(2)] = null);
(statearr_64410_64441[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (6)))
{var inst_64342 = (state_64396[(13)]);var inst_64347 = f.call(null,inst_64342);var inst_64352 = cljs.core.seq.call(null,inst_64347);var inst_64353 = inst_64352;var inst_64354 = null;var inst_64355 = (0);var inst_64356 = (0);var state_64396__$1 = (function (){var statearr_64411 = state_64396;(statearr_64411[(8)] = inst_64354);
(statearr_64411[(9)] = inst_64353);
(statearr_64411[(10)] = inst_64356);
(statearr_64411[(11)] = inst_64355);
return statearr_64411;
})();var statearr_64412_64442 = state_64396__$1;(statearr_64412_64442[(2)] = null);
(statearr_64412_64442[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (17)))
{var inst_64367 = (state_64396[(7)]);var inst_64371 = cljs.core.chunk_first.call(null,inst_64367);var inst_64372 = cljs.core.chunk_rest.call(null,inst_64367);var inst_64373 = cljs.core.count.call(null,inst_64371);var inst_64353 = inst_64372;var inst_64354 = inst_64371;var inst_64355 = inst_64373;var inst_64356 = (0);var state_64396__$1 = (function (){var statearr_64413 = state_64396;(statearr_64413[(8)] = inst_64354);
(statearr_64413[(9)] = inst_64353);
(statearr_64413[(10)] = inst_64356);
(statearr_64413[(11)] = inst_64355);
return statearr_64413;
})();var statearr_64414_64443 = state_64396__$1;(statearr_64414_64443[(2)] = null);
(statearr_64414_64443[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (3)))
{var inst_64394 = (state_64396[(2)]);var state_64396__$1 = state_64396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64396__$1,inst_64394);
} else
{if((state_val_64397 === (12)))
{var inst_64387 = (state_64396[(2)]);var state_64396__$1 = state_64396;var statearr_64415_64444 = state_64396__$1;(statearr_64415_64444[(2)] = inst_64387);
(statearr_64415_64444[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (2)))
{var state_64396__$1 = state_64396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64396__$1,(4),in$);
} else
{if((state_val_64397 === (19)))
{var inst_64382 = (state_64396[(2)]);var state_64396__$1 = state_64396;var statearr_64416_64445 = state_64396__$1;(statearr_64416_64445[(2)] = inst_64382);
(statearr_64416_64445[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (11)))
{var inst_64353 = (state_64396[(9)]);var inst_64367 = (state_64396[(7)]);var inst_64367__$1 = cljs.core.seq.call(null,inst_64353);var state_64396__$1 = (function (){var statearr_64417 = state_64396;(statearr_64417[(7)] = inst_64367__$1);
return statearr_64417;
})();if(inst_64367__$1)
{var statearr_64418_64446 = state_64396__$1;(statearr_64418_64446[(1)] = (14));
} else
{var statearr_64419_64447 = state_64396__$1;(statearr_64419_64447[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (9)))
{var inst_64389 = (state_64396[(2)]);var state_64396__$1 = (function (){var statearr_64420 = state_64396;(statearr_64420[(15)] = inst_64389);
return statearr_64420;
})();var statearr_64421_64448 = state_64396__$1;(statearr_64421_64448[(2)] = null);
(statearr_64421_64448[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (5)))
{var inst_64345 = cljs.core.async.close_BANG_.call(null,out);var state_64396__$1 = state_64396;var statearr_64422_64449 = state_64396__$1;(statearr_64422_64449[(2)] = inst_64345);
(statearr_64422_64449[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (14)))
{var inst_64367 = (state_64396[(7)]);var inst_64369 = cljs.core.chunked_seq_QMARK_.call(null,inst_64367);var state_64396__$1 = state_64396;if(inst_64369)
{var statearr_64423_64450 = state_64396__$1;(statearr_64423_64450[(1)] = (17));
} else
{var statearr_64424_64451 = state_64396__$1;(statearr_64424_64451[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (16)))
{var inst_64385 = (state_64396[(2)]);var state_64396__$1 = state_64396;var statearr_64425_64452 = state_64396__$1;(statearr_64425_64452[(2)] = inst_64385);
(statearr_64425_64452[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64397 === (10)))
{var inst_64354 = (state_64396[(8)]);var inst_64356 = (state_64396[(10)]);var inst_64361 = cljs.core._nth.call(null,inst_64354,inst_64356);var state_64396__$1 = state_64396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64396__$1,(13),out,inst_64361);
} else
{if((state_val_64397 === (18)))
{var inst_64367 = (state_64396[(7)]);var inst_64376 = cljs.core.first.call(null,inst_64367);var state_64396__$1 = state_64396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64396__$1,(20),out,inst_64376);
} else
{if((state_val_64397 === (8)))
{var inst_64356 = (state_64396[(10)]);var inst_64355 = (state_64396[(11)]);var inst_64358 = (inst_64356 < inst_64355);var inst_64359 = inst_64358;var state_64396__$1 = state_64396;if(cljs.core.truth_(inst_64359))
{var statearr_64426_64453 = state_64396__$1;(statearr_64426_64453[(1)] = (10));
} else
{var statearr_64427_64454 = state_64396__$1;(statearr_64427_64454[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_64431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_64431[(0)] = state_machine__5694__auto__);
(statearr_64431[(1)] = (1));
return statearr_64431;
});
var state_machine__5694__auto____1 = (function (state_64396){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_64396);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e64432){if((e64432 instanceof Object))
{var ex__5697__auto__ = e64432;var statearr_64433_64455 = state_64396;(statearr_64433_64455[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64396);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e64432;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64456 = state_64396;
state_64396 = G__64456;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_64396){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_64396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_64434 = f__5709__auto__.call(null);(statearr_64434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_64434;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___64537 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___64537){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___64537){
return (function (state_64516){var state_val_64517 = (state_64516[(1)]);if((state_val_64517 === (7)))
{var inst_64512 = (state_64516[(2)]);var state_64516__$1 = state_64516;var statearr_64518_64538 = state_64516__$1;(statearr_64518_64538[(2)] = inst_64512);
(statearr_64518_64538[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64517 === (1)))
{var state_64516__$1 = state_64516;var statearr_64519_64539 = state_64516__$1;(statearr_64519_64539[(2)] = null);
(statearr_64519_64539[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64517 === (4)))
{var inst_64499 = (state_64516[(7)]);var inst_64499__$1 = (state_64516[(2)]);var inst_64500 = (inst_64499__$1 == null);var state_64516__$1 = (function (){var statearr_64520 = state_64516;(statearr_64520[(7)] = inst_64499__$1);
return statearr_64520;
})();if(cljs.core.truth_(inst_64500))
{var statearr_64521_64540 = state_64516__$1;(statearr_64521_64540[(1)] = (5));
} else
{var statearr_64522_64541 = state_64516__$1;(statearr_64522_64541[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64517 === (6)))
{var inst_64499 = (state_64516[(7)]);var state_64516__$1 = state_64516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64516__$1,(11),to,inst_64499);
} else
{if((state_val_64517 === (3)))
{var inst_64514 = (state_64516[(2)]);var state_64516__$1 = state_64516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64516__$1,inst_64514);
} else
{if((state_val_64517 === (2)))
{var state_64516__$1 = state_64516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64516__$1,(4),from);
} else
{if((state_val_64517 === (11)))
{var inst_64509 = (state_64516[(2)]);var state_64516__$1 = (function (){var statearr_64523 = state_64516;(statearr_64523[(8)] = inst_64509);
return statearr_64523;
})();var statearr_64524_64542 = state_64516__$1;(statearr_64524_64542[(2)] = null);
(statearr_64524_64542[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64517 === (9)))
{var state_64516__$1 = state_64516;var statearr_64525_64543 = state_64516__$1;(statearr_64525_64543[(2)] = null);
(statearr_64525_64543[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64517 === (5)))
{var state_64516__$1 = state_64516;if(cljs.core.truth_(close_QMARK_))
{var statearr_64526_64544 = state_64516__$1;(statearr_64526_64544[(1)] = (8));
} else
{var statearr_64527_64545 = state_64516__$1;(statearr_64527_64545[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64517 === (10)))
{var inst_64506 = (state_64516[(2)]);var state_64516__$1 = state_64516;var statearr_64528_64546 = state_64516__$1;(statearr_64528_64546[(2)] = inst_64506);
(statearr_64528_64546[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64517 === (8)))
{var inst_64503 = cljs.core.async.close_BANG_.call(null,to);var state_64516__$1 = state_64516;var statearr_64529_64547 = state_64516__$1;(statearr_64529_64547[(2)] = inst_64503);
(statearr_64529_64547[(1)] = (10));
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
});})(c__5708__auto___64537))
;return ((function (switch__5693__auto__,c__5708__auto___64537){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_64533 = [null,null,null,null,null,null,null,null,null];(statearr_64533[(0)] = state_machine__5694__auto__);
(statearr_64533[(1)] = (1));
return statearr_64533;
});
var state_machine__5694__auto____1 = (function (state_64516){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_64516);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e64534){if((e64534 instanceof Object))
{var ex__5697__auto__ = e64534;var statearr_64535_64548 = state_64516;(statearr_64535_64548[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64516);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e64534;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64549 = state_64516;
state_64516 = G__64549;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_64516){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_64516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___64537))
})();var state__5710__auto__ = (function (){var statearr_64536 = f__5709__auto__.call(null);(statearr_64536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___64537);
return statearr_64536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___64537))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___64636 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___64636,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___64636,tc,fc){
return (function (state_64614){var state_val_64615 = (state_64614[(1)]);if((state_val_64615 === (7)))
{var inst_64610 = (state_64614[(2)]);var state_64614__$1 = state_64614;var statearr_64616_64637 = state_64614__$1;(statearr_64616_64637[(2)] = inst_64610);
(statearr_64616_64637[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64615 === (1)))
{var state_64614__$1 = state_64614;var statearr_64617_64638 = state_64614__$1;(statearr_64617_64638[(2)] = null);
(statearr_64617_64638[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64615 === (4)))
{var inst_64595 = (state_64614[(7)]);var inst_64595__$1 = (state_64614[(2)]);var inst_64596 = (inst_64595__$1 == null);var state_64614__$1 = (function (){var statearr_64618 = state_64614;(statearr_64618[(7)] = inst_64595__$1);
return statearr_64618;
})();if(cljs.core.truth_(inst_64596))
{var statearr_64619_64639 = state_64614__$1;(statearr_64619_64639[(1)] = (5));
} else
{var statearr_64620_64640 = state_64614__$1;(statearr_64620_64640[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64615 === (6)))
{var inst_64595 = (state_64614[(7)]);var inst_64601 = p.call(null,inst_64595);var state_64614__$1 = state_64614;if(cljs.core.truth_(inst_64601))
{var statearr_64621_64641 = state_64614__$1;(statearr_64621_64641[(1)] = (9));
} else
{var statearr_64622_64642 = state_64614__$1;(statearr_64622_64642[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64615 === (3)))
{var inst_64612 = (state_64614[(2)]);var state_64614__$1 = state_64614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64614__$1,inst_64612);
} else
{if((state_val_64615 === (2)))
{var state_64614__$1 = state_64614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64614__$1,(4),ch);
} else
{if((state_val_64615 === (11)))
{var inst_64595 = (state_64614[(7)]);var inst_64605 = (state_64614[(2)]);var state_64614__$1 = state_64614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64614__$1,(8),inst_64605,inst_64595);
} else
{if((state_val_64615 === (9)))
{var state_64614__$1 = state_64614;var statearr_64623_64643 = state_64614__$1;(statearr_64623_64643[(2)] = tc);
(statearr_64623_64643[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64615 === (5)))
{var inst_64598 = cljs.core.async.close_BANG_.call(null,tc);var inst_64599 = cljs.core.async.close_BANG_.call(null,fc);var state_64614__$1 = (function (){var statearr_64624 = state_64614;(statearr_64624[(8)] = inst_64598);
return statearr_64624;
})();var statearr_64625_64644 = state_64614__$1;(statearr_64625_64644[(2)] = inst_64599);
(statearr_64625_64644[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64615 === (10)))
{var state_64614__$1 = state_64614;var statearr_64626_64645 = state_64614__$1;(statearr_64626_64645[(2)] = fc);
(statearr_64626_64645[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64615 === (8)))
{var inst_64607 = (state_64614[(2)]);var state_64614__$1 = (function (){var statearr_64627 = state_64614;(statearr_64627[(9)] = inst_64607);
return statearr_64627;
})();var statearr_64628_64646 = state_64614__$1;(statearr_64628_64646[(2)] = null);
(statearr_64628_64646[(1)] = (2));
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
});})(c__5708__auto___64636,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___64636,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_64632 = [null,null,null,null,null,null,null,null,null,null];(statearr_64632[(0)] = state_machine__5694__auto__);
(statearr_64632[(1)] = (1));
return statearr_64632;
});
var state_machine__5694__auto____1 = (function (state_64614){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_64614);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e64633){if((e64633 instanceof Object))
{var ex__5697__auto__ = e64633;var statearr_64634_64647 = state_64614;(statearr_64634_64647[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64614);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e64633;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64648 = state_64614;
state_64614 = G__64648;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_64614){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_64614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___64636,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_64635 = f__5709__auto__.call(null);(statearr_64635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___64636);
return statearr_64635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___64636,tc,fc))
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
return (function (state_64695){var state_val_64696 = (state_64695[(1)]);if((state_val_64696 === (7)))
{var inst_64691 = (state_64695[(2)]);var state_64695__$1 = state_64695;var statearr_64697_64713 = state_64695__$1;(statearr_64697_64713[(2)] = inst_64691);
(statearr_64697_64713[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64696 === (6)))
{var inst_64681 = (state_64695[(7)]);var inst_64684 = (state_64695[(8)]);var inst_64688 = f.call(null,inst_64681,inst_64684);var inst_64681__$1 = inst_64688;var state_64695__$1 = (function (){var statearr_64698 = state_64695;(statearr_64698[(7)] = inst_64681__$1);
return statearr_64698;
})();var statearr_64699_64714 = state_64695__$1;(statearr_64699_64714[(2)] = null);
(statearr_64699_64714[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64696 === (5)))
{var inst_64681 = (state_64695[(7)]);var state_64695__$1 = state_64695;var statearr_64700_64715 = state_64695__$1;(statearr_64700_64715[(2)] = inst_64681);
(statearr_64700_64715[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64696 === (4)))
{var inst_64684 = (state_64695[(8)]);var inst_64684__$1 = (state_64695[(2)]);var inst_64685 = (inst_64684__$1 == null);var state_64695__$1 = (function (){var statearr_64701 = state_64695;(statearr_64701[(8)] = inst_64684__$1);
return statearr_64701;
})();if(cljs.core.truth_(inst_64685))
{var statearr_64702_64716 = state_64695__$1;(statearr_64702_64716[(1)] = (5));
} else
{var statearr_64703_64717 = state_64695__$1;(statearr_64703_64717[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64696 === (3)))
{var inst_64693 = (state_64695[(2)]);var state_64695__$1 = state_64695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64695__$1,inst_64693);
} else
{if((state_val_64696 === (2)))
{var state_64695__$1 = state_64695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64695__$1,(4),ch);
} else
{if((state_val_64696 === (1)))
{var inst_64681 = init;var state_64695__$1 = (function (){var statearr_64704 = state_64695;(statearr_64704[(7)] = inst_64681);
return statearr_64704;
})();var statearr_64705_64718 = state_64695__$1;(statearr_64705_64718[(2)] = null);
(statearr_64705_64718[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_64709 = [null,null,null,null,null,null,null,null,null];(statearr_64709[(0)] = state_machine__5694__auto__);
(statearr_64709[(1)] = (1));
return statearr_64709;
});
var state_machine__5694__auto____1 = (function (state_64695){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_64695);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e64710){if((e64710 instanceof Object))
{var ex__5697__auto__ = e64710;var statearr_64711_64719 = state_64695;(statearr_64711_64719[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64695);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e64710;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64720 = state_64695;
state_64695 = G__64720;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_64695){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_64695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_64712 = f__5709__auto__.call(null);(statearr_64712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_64712;
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
return (function (state_64782){var state_val_64783 = (state_64782[(1)]);if((state_val_64783 === (7)))
{var inst_64763 = (state_64782[(7)]);var inst_64768 = (state_64782[(2)]);var inst_64769 = cljs.core.next.call(null,inst_64763);var inst_64763__$1 = inst_64769;var state_64782__$1 = (function (){var statearr_64784 = state_64782;(statearr_64784[(8)] = inst_64768);
(statearr_64784[(7)] = inst_64763__$1);
return statearr_64784;
})();var statearr_64785_64803 = state_64782__$1;(statearr_64785_64803[(2)] = null);
(statearr_64785_64803[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64783 === (1)))
{var inst_64762 = cljs.core.seq.call(null,coll);var inst_64763 = inst_64762;var state_64782__$1 = (function (){var statearr_64786 = state_64782;(statearr_64786[(7)] = inst_64763);
return statearr_64786;
})();var statearr_64787_64804 = state_64782__$1;(statearr_64787_64804[(2)] = null);
(statearr_64787_64804[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64783 === (4)))
{var inst_64763 = (state_64782[(7)]);var inst_64766 = cljs.core.first.call(null,inst_64763);var state_64782__$1 = state_64782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64782__$1,(7),ch,inst_64766);
} else
{if((state_val_64783 === (6)))
{var inst_64778 = (state_64782[(2)]);var state_64782__$1 = state_64782;var statearr_64788_64805 = state_64782__$1;(statearr_64788_64805[(2)] = inst_64778);
(statearr_64788_64805[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64783 === (3)))
{var inst_64780 = (state_64782[(2)]);var state_64782__$1 = state_64782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64782__$1,inst_64780);
} else
{if((state_val_64783 === (2)))
{var inst_64763 = (state_64782[(7)]);var state_64782__$1 = state_64782;if(cljs.core.truth_(inst_64763))
{var statearr_64789_64806 = state_64782__$1;(statearr_64789_64806[(1)] = (4));
} else
{var statearr_64790_64807 = state_64782__$1;(statearr_64790_64807[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64783 === (9)))
{var state_64782__$1 = state_64782;var statearr_64791_64808 = state_64782__$1;(statearr_64791_64808[(2)] = null);
(statearr_64791_64808[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64783 === (5)))
{var state_64782__$1 = state_64782;if(cljs.core.truth_(close_QMARK_))
{var statearr_64792_64809 = state_64782__$1;(statearr_64792_64809[(1)] = (8));
} else
{var statearr_64793_64810 = state_64782__$1;(statearr_64793_64810[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64783 === (10)))
{var inst_64776 = (state_64782[(2)]);var state_64782__$1 = state_64782;var statearr_64794_64811 = state_64782__$1;(statearr_64794_64811[(2)] = inst_64776);
(statearr_64794_64811[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64783 === (8)))
{var inst_64773 = cljs.core.async.close_BANG_.call(null,ch);var state_64782__$1 = state_64782;var statearr_64795_64812 = state_64782__$1;(statearr_64795_64812[(2)] = inst_64773);
(statearr_64795_64812[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_64799 = [null,null,null,null,null,null,null,null,null];(statearr_64799[(0)] = state_machine__5694__auto__);
(statearr_64799[(1)] = (1));
return statearr_64799;
});
var state_machine__5694__auto____1 = (function (state_64782){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_64782);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e64800){if((e64800 instanceof Object))
{var ex__5697__auto__ = e64800;var statearr_64801_64813 = state_64782;(statearr_64801_64813[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64782);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e64800;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64814 = state_64782;
state_64782 = G__64814;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_64782){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_64782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_64802 = f__5709__auto__.call(null);(statearr_64802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_64802;
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
cljs.core.async.Mux = (function (){var obj64816 = {};return obj64816;
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
cljs.core.async.Mult = (function (){var obj64818 = {};return obj64818;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t65042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t65042 = (function (cs,ch,mult,meta65043){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta65043 = meta65043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t65042.cljs$lang$type = true;
cljs.core.async.t65042.cljs$lang$ctorStr = "cljs.core.async/t65042";
cljs.core.async.t65042.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t65042");
});})(cs))
;
cljs.core.async.t65042.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t65042.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t65042.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t65042.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t65042.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t65042.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t65042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_65044){var self__ = this;
var _65044__$1 = this;return self__.meta65043;
});})(cs))
;
cljs.core.async.t65042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_65044,meta65043__$1){var self__ = this;
var _65044__$1 = this;return (new cljs.core.async.t65042(self__.cs,self__.ch,self__.mult,meta65043__$1));
});})(cs))
;
cljs.core.async.__GT_t65042 = ((function (cs){
return (function __GT_t65042(cs__$1,ch__$1,mult__$1,meta65043){return (new cljs.core.async.t65042(cs__$1,ch__$1,mult__$1,meta65043));
});})(cs))
;
}
return (new cljs.core.async.t65042(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___65265 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___65265,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___65265,cs,m,dchan,dctr,done){
return (function (state_65179){var state_val_65180 = (state_65179[(1)]);if((state_val_65180 === (7)))
{var inst_65175 = (state_65179[(2)]);var state_65179__$1 = state_65179;var statearr_65181_65266 = state_65179__$1;(statearr_65181_65266[(2)] = inst_65175);
(statearr_65181_65266[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (20)))
{var inst_65076 = (state_65179[(7)]);var inst_65086 = cljs.core.first.call(null,inst_65076);var inst_65087 = cljs.core.nth.call(null,inst_65086,(0),null);var inst_65088 = cljs.core.nth.call(null,inst_65086,(1),null);var state_65179__$1 = (function (){var statearr_65182 = state_65179;(statearr_65182[(8)] = inst_65087);
return statearr_65182;
})();if(cljs.core.truth_(inst_65088))
{var statearr_65183_65267 = state_65179__$1;(statearr_65183_65267[(1)] = (22));
} else
{var statearr_65184_65268 = state_65179__$1;(statearr_65184_65268[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (27)))
{var inst_65118 = (state_65179[(9)]);var inst_65116 = (state_65179[(10)]);var inst_65123 = cljs.core._nth.call(null,inst_65116,inst_65118);var state_65179__$1 = (function (){var statearr_65185 = state_65179;(statearr_65185[(11)] = inst_65123);
return statearr_65185;
})();var statearr_65186_65269 = state_65179__$1;(statearr_65186_65269[(2)] = null);
(statearr_65186_65269[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (1)))
{var state_65179__$1 = state_65179;var statearr_65187_65270 = state_65179__$1;(statearr_65187_65270[(2)] = null);
(statearr_65187_65270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (24)))
{var inst_65076 = (state_65179[(7)]);var inst_65093 = (state_65179[(2)]);var inst_65094 = cljs.core.next.call(null,inst_65076);var inst_65056 = inst_65094;var inst_65057 = null;var inst_65058 = (0);var inst_65059 = (0);var state_65179__$1 = (function (){var statearr_65188 = state_65179;(statearr_65188[(12)] = inst_65056);
(statearr_65188[(13)] = inst_65058);
(statearr_65188[(14)] = inst_65057);
(statearr_65188[(15)] = inst_65093);
(statearr_65188[(16)] = inst_65059);
return statearr_65188;
})();var statearr_65189_65271 = state_65179__$1;(statearr_65189_65271[(2)] = null);
(statearr_65189_65271[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (39)))
{var inst_65136 = (state_65179[(17)]);var inst_65154 = (state_65179[(2)]);var inst_65155 = cljs.core.next.call(null,inst_65136);var inst_65115 = inst_65155;var inst_65116 = null;var inst_65117 = (0);var inst_65118 = (0);var state_65179__$1 = (function (){var statearr_65193 = state_65179;(statearr_65193[(18)] = inst_65117);
(statearr_65193[(9)] = inst_65118);
(statearr_65193[(19)] = inst_65115);
(statearr_65193[(20)] = inst_65154);
(statearr_65193[(10)] = inst_65116);
return statearr_65193;
})();var statearr_65194_65272 = state_65179__$1;(statearr_65194_65272[(2)] = null);
(statearr_65194_65272[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (4)))
{var inst_65047 = (state_65179[(21)]);var inst_65047__$1 = (state_65179[(2)]);var inst_65048 = (inst_65047__$1 == null);var state_65179__$1 = (function (){var statearr_65195 = state_65179;(statearr_65195[(21)] = inst_65047__$1);
return statearr_65195;
})();if(cljs.core.truth_(inst_65048))
{var statearr_65196_65273 = state_65179__$1;(statearr_65196_65273[(1)] = (5));
} else
{var statearr_65197_65274 = state_65179__$1;(statearr_65197_65274[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (15)))
{var inst_65056 = (state_65179[(12)]);var inst_65058 = (state_65179[(13)]);var inst_65057 = (state_65179[(14)]);var inst_65059 = (state_65179[(16)]);var inst_65072 = (state_65179[(2)]);var inst_65073 = (inst_65059 + (1));var tmp65190 = inst_65056;var tmp65191 = inst_65058;var tmp65192 = inst_65057;var inst_65056__$1 = tmp65190;var inst_65057__$1 = tmp65192;var inst_65058__$1 = tmp65191;var inst_65059__$1 = inst_65073;var state_65179__$1 = (function (){var statearr_65198 = state_65179;(statearr_65198[(12)] = inst_65056__$1);
(statearr_65198[(13)] = inst_65058__$1);
(statearr_65198[(14)] = inst_65057__$1);
(statearr_65198[(22)] = inst_65072);
(statearr_65198[(16)] = inst_65059__$1);
return statearr_65198;
})();var statearr_65199_65275 = state_65179__$1;(statearr_65199_65275[(2)] = null);
(statearr_65199_65275[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (21)))
{var inst_65097 = (state_65179[(2)]);var state_65179__$1 = state_65179;var statearr_65200_65276 = state_65179__$1;(statearr_65200_65276[(2)] = inst_65097);
(statearr_65200_65276[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (31)))
{var inst_65123 = (state_65179[(11)]);var inst_65124 = (state_65179[(2)]);var inst_65125 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_65126 = cljs.core.async.untap_STAR_.call(null,m,inst_65123);var state_65179__$1 = (function (){var statearr_65201 = state_65179;(statearr_65201[(23)] = inst_65124);
(statearr_65201[(24)] = inst_65125);
return statearr_65201;
})();var statearr_65202_65277 = state_65179__$1;(statearr_65202_65277[(2)] = inst_65126);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65179__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (32)))
{var inst_65047 = (state_65179[(21)]);var inst_65123 = (state_65179[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_65179,(31),Object,null,(30));var inst_65130 = cljs.core.async.put_BANG_.call(null,inst_65123,inst_65047,done);var state_65179__$1 = state_65179;var statearr_65203_65278 = state_65179__$1;(statearr_65203_65278[(2)] = inst_65130);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65179__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (40)))
{var inst_65145 = (state_65179[(25)]);var inst_65146 = (state_65179[(2)]);var inst_65147 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_65148 = cljs.core.async.untap_STAR_.call(null,m,inst_65145);var state_65179__$1 = (function (){var statearr_65204 = state_65179;(statearr_65204[(26)] = inst_65147);
(statearr_65204[(27)] = inst_65146);
return statearr_65204;
})();var statearr_65205_65279 = state_65179__$1;(statearr_65205_65279[(2)] = inst_65148);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65179__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (33)))
{var inst_65136 = (state_65179[(17)]);var inst_65138 = cljs.core.chunked_seq_QMARK_.call(null,inst_65136);var state_65179__$1 = state_65179;if(inst_65138)
{var statearr_65206_65280 = state_65179__$1;(statearr_65206_65280[(1)] = (36));
} else
{var statearr_65207_65281 = state_65179__$1;(statearr_65207_65281[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (13)))
{var inst_65066 = (state_65179[(28)]);var inst_65069 = cljs.core.async.close_BANG_.call(null,inst_65066);var state_65179__$1 = state_65179;var statearr_65208_65282 = state_65179__$1;(statearr_65208_65282[(2)] = inst_65069);
(statearr_65208_65282[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (22)))
{var inst_65087 = (state_65179[(8)]);var inst_65090 = cljs.core.async.close_BANG_.call(null,inst_65087);var state_65179__$1 = state_65179;var statearr_65209_65283 = state_65179__$1;(statearr_65209_65283[(2)] = inst_65090);
(statearr_65209_65283[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (36)))
{var inst_65136 = (state_65179[(17)]);var inst_65140 = cljs.core.chunk_first.call(null,inst_65136);var inst_65141 = cljs.core.chunk_rest.call(null,inst_65136);var inst_65142 = cljs.core.count.call(null,inst_65140);var inst_65115 = inst_65141;var inst_65116 = inst_65140;var inst_65117 = inst_65142;var inst_65118 = (0);var state_65179__$1 = (function (){var statearr_65210 = state_65179;(statearr_65210[(18)] = inst_65117);
(statearr_65210[(9)] = inst_65118);
(statearr_65210[(19)] = inst_65115);
(statearr_65210[(10)] = inst_65116);
return statearr_65210;
})();var statearr_65211_65284 = state_65179__$1;(statearr_65211_65284[(2)] = null);
(statearr_65211_65284[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (41)))
{var inst_65047 = (state_65179[(21)]);var inst_65145 = (state_65179[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_65179,(40),Object,null,(39));var inst_65152 = cljs.core.async.put_BANG_.call(null,inst_65145,inst_65047,done);var state_65179__$1 = state_65179;var statearr_65212_65285 = state_65179__$1;(statearr_65212_65285[(2)] = inst_65152);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65179__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (43)))
{var state_65179__$1 = state_65179;var statearr_65213_65286 = state_65179__$1;(statearr_65213_65286[(2)] = null);
(statearr_65213_65286[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (29)))
{var inst_65163 = (state_65179[(2)]);var state_65179__$1 = state_65179;var statearr_65214_65287 = state_65179__$1;(statearr_65214_65287[(2)] = inst_65163);
(statearr_65214_65287[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (44)))
{var inst_65172 = (state_65179[(2)]);var state_65179__$1 = (function (){var statearr_65215 = state_65179;(statearr_65215[(29)] = inst_65172);
return statearr_65215;
})();var statearr_65216_65288 = state_65179__$1;(statearr_65216_65288[(2)] = null);
(statearr_65216_65288[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (6)))
{var inst_65107 = (state_65179[(30)]);var inst_65106 = cljs.core.deref.call(null,cs);var inst_65107__$1 = cljs.core.keys.call(null,inst_65106);var inst_65108 = cljs.core.count.call(null,inst_65107__$1);var inst_65109 = cljs.core.reset_BANG_.call(null,dctr,inst_65108);var inst_65114 = cljs.core.seq.call(null,inst_65107__$1);var inst_65115 = inst_65114;var inst_65116 = null;var inst_65117 = (0);var inst_65118 = (0);var state_65179__$1 = (function (){var statearr_65217 = state_65179;(statearr_65217[(31)] = inst_65109);
(statearr_65217[(30)] = inst_65107__$1);
(statearr_65217[(18)] = inst_65117);
(statearr_65217[(9)] = inst_65118);
(statearr_65217[(19)] = inst_65115);
(statearr_65217[(10)] = inst_65116);
return statearr_65217;
})();var statearr_65218_65289 = state_65179__$1;(statearr_65218_65289[(2)] = null);
(statearr_65218_65289[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (28)))
{var inst_65136 = (state_65179[(17)]);var inst_65115 = (state_65179[(19)]);var inst_65136__$1 = cljs.core.seq.call(null,inst_65115);var state_65179__$1 = (function (){var statearr_65219 = state_65179;(statearr_65219[(17)] = inst_65136__$1);
return statearr_65219;
})();if(inst_65136__$1)
{var statearr_65220_65290 = state_65179__$1;(statearr_65220_65290[(1)] = (33));
} else
{var statearr_65221_65291 = state_65179__$1;(statearr_65221_65291[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (25)))
{var inst_65117 = (state_65179[(18)]);var inst_65118 = (state_65179[(9)]);var inst_65120 = (inst_65118 < inst_65117);var inst_65121 = inst_65120;var state_65179__$1 = state_65179;if(cljs.core.truth_(inst_65121))
{var statearr_65222_65292 = state_65179__$1;(statearr_65222_65292[(1)] = (27));
} else
{var statearr_65223_65293 = state_65179__$1;(statearr_65223_65293[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (34)))
{var state_65179__$1 = state_65179;var statearr_65224_65294 = state_65179__$1;(statearr_65224_65294[(2)] = null);
(statearr_65224_65294[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (17)))
{var state_65179__$1 = state_65179;var statearr_65225_65295 = state_65179__$1;(statearr_65225_65295[(2)] = null);
(statearr_65225_65295[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (3)))
{var inst_65177 = (state_65179[(2)]);var state_65179__$1 = state_65179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65179__$1,inst_65177);
} else
{if((state_val_65180 === (12)))
{var inst_65102 = (state_65179[(2)]);var state_65179__$1 = state_65179;var statearr_65226_65296 = state_65179__$1;(statearr_65226_65296[(2)] = inst_65102);
(statearr_65226_65296[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (2)))
{var state_65179__$1 = state_65179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65179__$1,(4),ch);
} else
{if((state_val_65180 === (23)))
{var state_65179__$1 = state_65179;var statearr_65227_65297 = state_65179__$1;(statearr_65227_65297[(2)] = null);
(statearr_65227_65297[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (35)))
{var inst_65161 = (state_65179[(2)]);var state_65179__$1 = state_65179;var statearr_65228_65298 = state_65179__$1;(statearr_65228_65298[(2)] = inst_65161);
(statearr_65228_65298[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (19)))
{var inst_65076 = (state_65179[(7)]);var inst_65080 = cljs.core.chunk_first.call(null,inst_65076);var inst_65081 = cljs.core.chunk_rest.call(null,inst_65076);var inst_65082 = cljs.core.count.call(null,inst_65080);var inst_65056 = inst_65081;var inst_65057 = inst_65080;var inst_65058 = inst_65082;var inst_65059 = (0);var state_65179__$1 = (function (){var statearr_65229 = state_65179;(statearr_65229[(12)] = inst_65056);
(statearr_65229[(13)] = inst_65058);
(statearr_65229[(14)] = inst_65057);
(statearr_65229[(16)] = inst_65059);
return statearr_65229;
})();var statearr_65230_65299 = state_65179__$1;(statearr_65230_65299[(2)] = null);
(statearr_65230_65299[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (11)))
{var inst_65056 = (state_65179[(12)]);var inst_65076 = (state_65179[(7)]);var inst_65076__$1 = cljs.core.seq.call(null,inst_65056);var state_65179__$1 = (function (){var statearr_65231 = state_65179;(statearr_65231[(7)] = inst_65076__$1);
return statearr_65231;
})();if(inst_65076__$1)
{var statearr_65232_65300 = state_65179__$1;(statearr_65232_65300[(1)] = (16));
} else
{var statearr_65233_65301 = state_65179__$1;(statearr_65233_65301[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (9)))
{var inst_65104 = (state_65179[(2)]);var state_65179__$1 = state_65179;var statearr_65234_65302 = state_65179__$1;(statearr_65234_65302[(2)] = inst_65104);
(statearr_65234_65302[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (5)))
{var inst_65054 = cljs.core.deref.call(null,cs);var inst_65055 = cljs.core.seq.call(null,inst_65054);var inst_65056 = inst_65055;var inst_65057 = null;var inst_65058 = (0);var inst_65059 = (0);var state_65179__$1 = (function (){var statearr_65235 = state_65179;(statearr_65235[(12)] = inst_65056);
(statearr_65235[(13)] = inst_65058);
(statearr_65235[(14)] = inst_65057);
(statearr_65235[(16)] = inst_65059);
return statearr_65235;
})();var statearr_65236_65303 = state_65179__$1;(statearr_65236_65303[(2)] = null);
(statearr_65236_65303[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (14)))
{var state_65179__$1 = state_65179;var statearr_65237_65304 = state_65179__$1;(statearr_65237_65304[(2)] = null);
(statearr_65237_65304[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (45)))
{var inst_65169 = (state_65179[(2)]);var state_65179__$1 = state_65179;var statearr_65238_65305 = state_65179__$1;(statearr_65238_65305[(2)] = inst_65169);
(statearr_65238_65305[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (26)))
{var inst_65107 = (state_65179[(30)]);var inst_65165 = (state_65179[(2)]);var inst_65166 = cljs.core.seq.call(null,inst_65107);var state_65179__$1 = (function (){var statearr_65239 = state_65179;(statearr_65239[(32)] = inst_65165);
return statearr_65239;
})();if(inst_65166)
{var statearr_65240_65306 = state_65179__$1;(statearr_65240_65306[(1)] = (42));
} else
{var statearr_65241_65307 = state_65179__$1;(statearr_65241_65307[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (16)))
{var inst_65076 = (state_65179[(7)]);var inst_65078 = cljs.core.chunked_seq_QMARK_.call(null,inst_65076);var state_65179__$1 = state_65179;if(inst_65078)
{var statearr_65245_65308 = state_65179__$1;(statearr_65245_65308[(1)] = (19));
} else
{var statearr_65246_65309 = state_65179__$1;(statearr_65246_65309[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (38)))
{var inst_65158 = (state_65179[(2)]);var state_65179__$1 = state_65179;var statearr_65247_65310 = state_65179__$1;(statearr_65247_65310[(2)] = inst_65158);
(statearr_65247_65310[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (30)))
{var inst_65117 = (state_65179[(18)]);var inst_65118 = (state_65179[(9)]);var inst_65115 = (state_65179[(19)]);var inst_65116 = (state_65179[(10)]);var inst_65132 = (state_65179[(2)]);var inst_65133 = (inst_65118 + (1));var tmp65242 = inst_65117;var tmp65243 = inst_65115;var tmp65244 = inst_65116;var inst_65115__$1 = tmp65243;var inst_65116__$1 = tmp65244;var inst_65117__$1 = tmp65242;var inst_65118__$1 = inst_65133;var state_65179__$1 = (function (){var statearr_65248 = state_65179;(statearr_65248[(33)] = inst_65132);
(statearr_65248[(18)] = inst_65117__$1);
(statearr_65248[(9)] = inst_65118__$1);
(statearr_65248[(19)] = inst_65115__$1);
(statearr_65248[(10)] = inst_65116__$1);
return statearr_65248;
})();var statearr_65249_65311 = state_65179__$1;(statearr_65249_65311[(2)] = null);
(statearr_65249_65311[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (10)))
{var inst_65057 = (state_65179[(14)]);var inst_65059 = (state_65179[(16)]);var inst_65065 = cljs.core._nth.call(null,inst_65057,inst_65059);var inst_65066 = cljs.core.nth.call(null,inst_65065,(0),null);var inst_65067 = cljs.core.nth.call(null,inst_65065,(1),null);var state_65179__$1 = (function (){var statearr_65250 = state_65179;(statearr_65250[(28)] = inst_65066);
return statearr_65250;
})();if(cljs.core.truth_(inst_65067))
{var statearr_65251_65312 = state_65179__$1;(statearr_65251_65312[(1)] = (13));
} else
{var statearr_65252_65313 = state_65179__$1;(statearr_65252_65313[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (18)))
{var inst_65100 = (state_65179[(2)]);var state_65179__$1 = state_65179;var statearr_65253_65314 = state_65179__$1;(statearr_65253_65314[(2)] = inst_65100);
(statearr_65253_65314[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (42)))
{var state_65179__$1 = state_65179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65179__$1,(45),dchan);
} else
{if((state_val_65180 === (37)))
{var inst_65136 = (state_65179[(17)]);var inst_65145 = cljs.core.first.call(null,inst_65136);var state_65179__$1 = (function (){var statearr_65254 = state_65179;(statearr_65254[(25)] = inst_65145);
return statearr_65254;
})();var statearr_65255_65315 = state_65179__$1;(statearr_65255_65315[(2)] = null);
(statearr_65255_65315[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65180 === (8)))
{var inst_65058 = (state_65179[(13)]);var inst_65059 = (state_65179[(16)]);var inst_65061 = (inst_65059 < inst_65058);var inst_65062 = inst_65061;var state_65179__$1 = state_65179;if(cljs.core.truth_(inst_65062))
{var statearr_65256_65316 = state_65179__$1;(statearr_65256_65316[(1)] = (10));
} else
{var statearr_65257_65317 = state_65179__$1;(statearr_65257_65317[(1)] = (11));
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
});})(c__5708__auto___65265,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___65265,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65261[(0)] = state_machine__5694__auto__);
(statearr_65261[(1)] = (1));
return statearr_65261;
});
var state_machine__5694__auto____1 = (function (state_65179){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65179);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65262){if((e65262 instanceof Object))
{var ex__5697__auto__ = e65262;var statearr_65263_65318 = state_65179;(statearr_65263_65318[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65262;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65319 = state_65179;
state_65179 = G__65319;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65179){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___65265,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_65264 = f__5709__auto__.call(null);(statearr_65264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___65265);
return statearr_65264;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___65265,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj65321 = {};return obj65321;
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
;var m = (function (){if(typeof cljs.core.async.t65431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t65431 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta65432){
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
this.meta65432 = meta65432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t65431.cljs$lang$type = true;
cljs.core.async.t65431.cljs$lang$ctorStr = "cljs.core.async/t65431";
cljs.core.async.t65431.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t65431");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t65431.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t65431.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t65431.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t65431.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t65431.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t65431.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t65431.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t65431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t65431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_65433){var self__ = this;
var _65433__$1 = this;return self__.meta65432;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t65431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_65433,meta65432__$1){var self__ = this;
var _65433__$1 = this;return (new cljs.core.async.t65431(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta65432__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t65431 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t65431(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta65432){return (new cljs.core.async.t65431(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta65432));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t65431(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___65540 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___65540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___65540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_65498){var state_val_65499 = (state_65498[(1)]);if((state_val_65499 === (7)))
{var inst_65447 = (state_65498[(7)]);var inst_65452 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65447);var state_65498__$1 = state_65498;var statearr_65500_65541 = state_65498__$1;(statearr_65500_65541[(2)] = inst_65452);
(statearr_65500_65541[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (20)))
{var inst_65462 = (state_65498[(8)]);var state_65498__$1 = state_65498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65498__$1,(23),out,inst_65462);
} else
{if((state_val_65499 === (1)))
{var inst_65437 = (state_65498[(9)]);var inst_65437__$1 = calc_state.call(null);var inst_65438 = cljs.core.seq_QMARK_.call(null,inst_65437__$1);var state_65498__$1 = (function (){var statearr_65501 = state_65498;(statearr_65501[(9)] = inst_65437__$1);
return statearr_65501;
})();if(inst_65438)
{var statearr_65502_65542 = state_65498__$1;(statearr_65502_65542[(1)] = (2));
} else
{var statearr_65503_65543 = state_65498__$1;(statearr_65503_65543[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (4)))
{var inst_65437 = (state_65498[(9)]);var inst_65443 = (state_65498[(2)]);var inst_65444 = cljs.core.get.call(null,inst_65443,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_65445 = cljs.core.get.call(null,inst_65443,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_65446 = cljs.core.get.call(null,inst_65443,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_65447 = inst_65437;var state_65498__$1 = (function (){var statearr_65504 = state_65498;(statearr_65504[(10)] = inst_65444);
(statearr_65504[(11)] = inst_65446);
(statearr_65504[(12)] = inst_65445);
(statearr_65504[(7)] = inst_65447);
return statearr_65504;
})();var statearr_65505_65544 = state_65498__$1;(statearr_65505_65544[(2)] = null);
(statearr_65505_65544[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (15)))
{var state_65498__$1 = state_65498;var statearr_65506_65545 = state_65498__$1;(statearr_65506_65545[(2)] = null);
(statearr_65506_65545[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (21)))
{var state_65498__$1 = state_65498;var statearr_65507_65546 = state_65498__$1;(statearr_65507_65546[(2)] = null);
(statearr_65507_65546[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (13)))
{var inst_65494 = (state_65498[(2)]);var state_65498__$1 = state_65498;var statearr_65508_65547 = state_65498__$1;(statearr_65508_65547[(2)] = inst_65494);
(statearr_65508_65547[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (22)))
{var inst_65455 = (state_65498[(13)]);var inst_65491 = (state_65498[(2)]);var inst_65447 = inst_65455;var state_65498__$1 = (function (){var statearr_65509 = state_65498;(statearr_65509[(14)] = inst_65491);
(statearr_65509[(7)] = inst_65447);
return statearr_65509;
})();var statearr_65510_65548 = state_65498__$1;(statearr_65510_65548[(2)] = null);
(statearr_65510_65548[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (6)))
{var inst_65496 = (state_65498[(2)]);var state_65498__$1 = state_65498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65498__$1,inst_65496);
} else
{if((state_val_65499 === (17)))
{var inst_65477 = (state_65498[(15)]);var state_65498__$1 = state_65498;var statearr_65511_65549 = state_65498__$1;(statearr_65511_65549[(2)] = inst_65477);
(statearr_65511_65549[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (3)))
{var inst_65437 = (state_65498[(9)]);var state_65498__$1 = state_65498;var statearr_65512_65550 = state_65498__$1;(statearr_65512_65550[(2)] = inst_65437);
(statearr_65512_65550[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (12)))
{var inst_65458 = (state_65498[(16)]);var inst_65463 = (state_65498[(17)]);var inst_65477 = (state_65498[(15)]);var inst_65477__$1 = inst_65458.call(null,inst_65463);var state_65498__$1 = (function (){var statearr_65513 = state_65498;(statearr_65513[(15)] = inst_65477__$1);
return statearr_65513;
})();if(cljs.core.truth_(inst_65477__$1))
{var statearr_65514_65551 = state_65498__$1;(statearr_65514_65551[(1)] = (17));
} else
{var statearr_65515_65552 = state_65498__$1;(statearr_65515_65552[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (2)))
{var inst_65437 = (state_65498[(9)]);var inst_65440 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65437);var state_65498__$1 = state_65498;var statearr_65516_65553 = state_65498__$1;(statearr_65516_65553[(2)] = inst_65440);
(statearr_65516_65553[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (23)))
{var inst_65488 = (state_65498[(2)]);var state_65498__$1 = state_65498;var statearr_65517_65554 = state_65498__$1;(statearr_65517_65554[(2)] = inst_65488);
(statearr_65517_65554[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (19)))
{var inst_65485 = (state_65498[(2)]);var state_65498__$1 = state_65498;if(cljs.core.truth_(inst_65485))
{var statearr_65518_65555 = state_65498__$1;(statearr_65518_65555[(1)] = (20));
} else
{var statearr_65519_65556 = state_65498__$1;(statearr_65519_65556[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (11)))
{var inst_65462 = (state_65498[(8)]);var inst_65468 = (inst_65462 == null);var state_65498__$1 = state_65498;if(cljs.core.truth_(inst_65468))
{var statearr_65520_65557 = state_65498__$1;(statearr_65520_65557[(1)] = (14));
} else
{var statearr_65521_65558 = state_65498__$1;(statearr_65521_65558[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (9)))
{var inst_65455 = (state_65498[(13)]);var inst_65455__$1 = (state_65498[(2)]);var inst_65456 = cljs.core.get.call(null,inst_65455__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_65457 = cljs.core.get.call(null,inst_65455__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_65458 = cljs.core.get.call(null,inst_65455__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_65498__$1 = (function (){var statearr_65522 = state_65498;(statearr_65522[(16)] = inst_65458);
(statearr_65522[(18)] = inst_65457);
(statearr_65522[(13)] = inst_65455__$1);
return statearr_65522;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_65498__$1,(10),inst_65456);
} else
{if((state_val_65499 === (5)))
{var inst_65447 = (state_65498[(7)]);var inst_65450 = cljs.core.seq_QMARK_.call(null,inst_65447);var state_65498__$1 = state_65498;if(inst_65450)
{var statearr_65523_65559 = state_65498__$1;(statearr_65523_65559[(1)] = (7));
} else
{var statearr_65524_65560 = state_65498__$1;(statearr_65524_65560[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (14)))
{var inst_65463 = (state_65498[(17)]);var inst_65470 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_65463);var state_65498__$1 = state_65498;var statearr_65525_65561 = state_65498__$1;(statearr_65525_65561[(2)] = inst_65470);
(statearr_65525_65561[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (16)))
{var inst_65473 = (state_65498[(2)]);var inst_65474 = calc_state.call(null);var inst_65447 = inst_65474;var state_65498__$1 = (function (){var statearr_65526 = state_65498;(statearr_65526[(7)] = inst_65447);
(statearr_65526[(19)] = inst_65473);
return statearr_65526;
})();var statearr_65527_65562 = state_65498__$1;(statearr_65527_65562[(2)] = null);
(statearr_65527_65562[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (10)))
{var inst_65462 = (state_65498[(8)]);var inst_65463 = (state_65498[(17)]);var inst_65461 = (state_65498[(2)]);var inst_65462__$1 = cljs.core.nth.call(null,inst_65461,(0),null);var inst_65463__$1 = cljs.core.nth.call(null,inst_65461,(1),null);var inst_65464 = (inst_65462__$1 == null);var inst_65465 = cljs.core._EQ_.call(null,inst_65463__$1,change);var inst_65466 = (inst_65464) || (inst_65465);var state_65498__$1 = (function (){var statearr_65528 = state_65498;(statearr_65528[(8)] = inst_65462__$1);
(statearr_65528[(17)] = inst_65463__$1);
return statearr_65528;
})();if(cljs.core.truth_(inst_65466))
{var statearr_65529_65563 = state_65498__$1;(statearr_65529_65563[(1)] = (11));
} else
{var statearr_65530_65564 = state_65498__$1;(statearr_65530_65564[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (18)))
{var inst_65458 = (state_65498[(16)]);var inst_65457 = (state_65498[(18)]);var inst_65463 = (state_65498[(17)]);var inst_65480 = cljs.core.empty_QMARK_.call(null,inst_65458);var inst_65481 = inst_65457.call(null,inst_65463);var inst_65482 = cljs.core.not.call(null,inst_65481);var inst_65483 = (inst_65480) && (inst_65482);var state_65498__$1 = state_65498;var statearr_65531_65565 = state_65498__$1;(statearr_65531_65565[(2)] = inst_65483);
(statearr_65531_65565[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65499 === (8)))
{var inst_65447 = (state_65498[(7)]);var state_65498__$1 = state_65498;var statearr_65532_65566 = state_65498__$1;(statearr_65532_65566[(2)] = inst_65447);
(statearr_65532_65566[(1)] = (9));
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
});})(c__5708__auto___65540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___65540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65536[(0)] = state_machine__5694__auto__);
(statearr_65536[(1)] = (1));
return statearr_65536;
});
var state_machine__5694__auto____1 = (function (state_65498){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65498);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65537){if((e65537 instanceof Object))
{var ex__5697__auto__ = e65537;var statearr_65538_65567 = state_65498;(statearr_65538_65567[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65498);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65537;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65568 = state_65498;
state_65498 = G__65568;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65498){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___65540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_65539 = f__5709__auto__.call(null);(statearr_65539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___65540);
return statearr_65539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___65540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj65570 = {};return obj65570;
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
return (function (p1__65571_SHARP_){if(cljs.core.truth_(p1__65571_SHARP_.call(null,topic)))
{return p1__65571_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__65571_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t65696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t65696 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta65697){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta65697 = meta65697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t65696.cljs$lang$type = true;
cljs.core.async.t65696.cljs$lang$ctorStr = "cljs.core.async/t65696";
cljs.core.async.t65696.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t65696");
});})(mults,ensure_mult))
;
cljs.core.async.t65696.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t65696.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t65696.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t65696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t65696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t65696.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t65696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t65696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_65698){var self__ = this;
var _65698__$1 = this;return self__.meta65697;
});})(mults,ensure_mult))
;
cljs.core.async.t65696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_65698,meta65697__$1){var self__ = this;
var _65698__$1 = this;return (new cljs.core.async.t65696(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta65697__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t65696 = ((function (mults,ensure_mult){
return (function __GT_t65696(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta65697){return (new cljs.core.async.t65696(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta65697));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t65696(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___65820 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___65820,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___65820,mults,ensure_mult,p){
return (function (state_65772){var state_val_65773 = (state_65772[(1)]);if((state_val_65773 === (7)))
{var inst_65768 = (state_65772[(2)]);var state_65772__$1 = state_65772;var statearr_65774_65821 = state_65772__$1;(statearr_65774_65821[(2)] = inst_65768);
(statearr_65774_65821[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (20)))
{var state_65772__$1 = state_65772;var statearr_65775_65822 = state_65772__$1;(statearr_65775_65822[(2)] = null);
(statearr_65775_65822[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (1)))
{var state_65772__$1 = state_65772;var statearr_65776_65823 = state_65772__$1;(statearr_65776_65823[(2)] = null);
(statearr_65776_65823[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (24)))
{var inst_65751 = (state_65772[(7)]);var inst_65701 = (state_65772[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_65772,(23),Object,null,(22));var inst_65758 = cljs.core.async.muxch_STAR_.call(null,inst_65751);var state_65772__$1 = state_65772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65772__$1,(25),inst_65758,inst_65701);
} else
{if((state_val_65773 === (4)))
{var inst_65701 = (state_65772[(8)]);var inst_65701__$1 = (state_65772[(2)]);var inst_65702 = (inst_65701__$1 == null);var state_65772__$1 = (function (){var statearr_65777 = state_65772;(statearr_65777[(8)] = inst_65701__$1);
return statearr_65777;
})();if(cljs.core.truth_(inst_65702))
{var statearr_65778_65824 = state_65772__$1;(statearr_65778_65824[(1)] = (5));
} else
{var statearr_65779_65825 = state_65772__$1;(statearr_65779_65825[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (15)))
{var inst_65743 = (state_65772[(2)]);var state_65772__$1 = state_65772;var statearr_65780_65826 = state_65772__$1;(statearr_65780_65826[(2)] = inst_65743);
(statearr_65780_65826[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (21)))
{var inst_65765 = (state_65772[(2)]);var state_65772__$1 = (function (){var statearr_65781 = state_65772;(statearr_65781[(9)] = inst_65765);
return statearr_65781;
})();var statearr_65782_65827 = state_65772__$1;(statearr_65782_65827[(2)] = null);
(statearr_65782_65827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (13)))
{var inst_65725 = (state_65772[(10)]);var inst_65727 = cljs.core.chunked_seq_QMARK_.call(null,inst_65725);var state_65772__$1 = state_65772;if(inst_65727)
{var statearr_65783_65828 = state_65772__$1;(statearr_65783_65828[(1)] = (16));
} else
{var statearr_65784_65829 = state_65772__$1;(statearr_65784_65829[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (22)))
{var inst_65762 = (state_65772[(2)]);var state_65772__$1 = state_65772;var statearr_65785_65830 = state_65772__$1;(statearr_65785_65830[(2)] = inst_65762);
(statearr_65785_65830[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (6)))
{var inst_65751 = (state_65772[(7)]);var inst_65701 = (state_65772[(8)]);var inst_65749 = (state_65772[(11)]);var inst_65749__$1 = topic_fn.call(null,inst_65701);var inst_65750 = cljs.core.deref.call(null,mults);var inst_65751__$1 = cljs.core.get.call(null,inst_65750,inst_65749__$1);var state_65772__$1 = (function (){var statearr_65786 = state_65772;(statearr_65786[(7)] = inst_65751__$1);
(statearr_65786[(11)] = inst_65749__$1);
return statearr_65786;
})();if(cljs.core.truth_(inst_65751__$1))
{var statearr_65787_65831 = state_65772__$1;(statearr_65787_65831[(1)] = (19));
} else
{var statearr_65788_65832 = state_65772__$1;(statearr_65788_65832[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (25)))
{var inst_65760 = (state_65772[(2)]);var state_65772__$1 = state_65772;var statearr_65789_65833 = state_65772__$1;(statearr_65789_65833[(2)] = inst_65760);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65772__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (17)))
{var inst_65725 = (state_65772[(10)]);var inst_65734 = cljs.core.first.call(null,inst_65725);var inst_65735 = cljs.core.async.muxch_STAR_.call(null,inst_65734);var inst_65736 = cljs.core.async.close_BANG_.call(null,inst_65735);var inst_65737 = cljs.core.next.call(null,inst_65725);var inst_65711 = inst_65737;var inst_65712 = null;var inst_65713 = (0);var inst_65714 = (0);var state_65772__$1 = (function (){var statearr_65790 = state_65772;(statearr_65790[(12)] = inst_65711);
(statearr_65790[(13)] = inst_65713);
(statearr_65790[(14)] = inst_65736);
(statearr_65790[(15)] = inst_65712);
(statearr_65790[(16)] = inst_65714);
return statearr_65790;
})();var statearr_65791_65834 = state_65772__$1;(statearr_65791_65834[(2)] = null);
(statearr_65791_65834[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (3)))
{var inst_65770 = (state_65772[(2)]);var state_65772__$1 = state_65772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65772__$1,inst_65770);
} else
{if((state_val_65773 === (12)))
{var inst_65745 = (state_65772[(2)]);var state_65772__$1 = state_65772;var statearr_65792_65835 = state_65772__$1;(statearr_65792_65835[(2)] = inst_65745);
(statearr_65792_65835[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (2)))
{var state_65772__$1 = state_65772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65772__$1,(4),ch);
} else
{if((state_val_65773 === (23)))
{var inst_65749 = (state_65772[(11)]);var inst_65753 = (state_65772[(2)]);var inst_65754 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_65749);var state_65772__$1 = (function (){var statearr_65793 = state_65772;(statearr_65793[(17)] = inst_65753);
return statearr_65793;
})();var statearr_65794_65836 = state_65772__$1;(statearr_65794_65836[(2)] = inst_65754);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65772__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (19)))
{var state_65772__$1 = state_65772;var statearr_65795_65837 = state_65772__$1;(statearr_65795_65837[(2)] = null);
(statearr_65795_65837[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (11)))
{var inst_65711 = (state_65772[(12)]);var inst_65725 = (state_65772[(10)]);var inst_65725__$1 = cljs.core.seq.call(null,inst_65711);var state_65772__$1 = (function (){var statearr_65796 = state_65772;(statearr_65796[(10)] = inst_65725__$1);
return statearr_65796;
})();if(inst_65725__$1)
{var statearr_65797_65838 = state_65772__$1;(statearr_65797_65838[(1)] = (13));
} else
{var statearr_65798_65839 = state_65772__$1;(statearr_65798_65839[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (9)))
{var inst_65747 = (state_65772[(2)]);var state_65772__$1 = state_65772;var statearr_65799_65840 = state_65772__$1;(statearr_65799_65840[(2)] = inst_65747);
(statearr_65799_65840[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (5)))
{var inst_65708 = cljs.core.deref.call(null,mults);var inst_65709 = cljs.core.vals.call(null,inst_65708);var inst_65710 = cljs.core.seq.call(null,inst_65709);var inst_65711 = inst_65710;var inst_65712 = null;var inst_65713 = (0);var inst_65714 = (0);var state_65772__$1 = (function (){var statearr_65800 = state_65772;(statearr_65800[(12)] = inst_65711);
(statearr_65800[(13)] = inst_65713);
(statearr_65800[(15)] = inst_65712);
(statearr_65800[(16)] = inst_65714);
return statearr_65800;
})();var statearr_65801_65841 = state_65772__$1;(statearr_65801_65841[(2)] = null);
(statearr_65801_65841[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (14)))
{var state_65772__$1 = state_65772;var statearr_65805_65842 = state_65772__$1;(statearr_65805_65842[(2)] = null);
(statearr_65805_65842[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (16)))
{var inst_65725 = (state_65772[(10)]);var inst_65729 = cljs.core.chunk_first.call(null,inst_65725);var inst_65730 = cljs.core.chunk_rest.call(null,inst_65725);var inst_65731 = cljs.core.count.call(null,inst_65729);var inst_65711 = inst_65730;var inst_65712 = inst_65729;var inst_65713 = inst_65731;var inst_65714 = (0);var state_65772__$1 = (function (){var statearr_65806 = state_65772;(statearr_65806[(12)] = inst_65711);
(statearr_65806[(13)] = inst_65713);
(statearr_65806[(15)] = inst_65712);
(statearr_65806[(16)] = inst_65714);
return statearr_65806;
})();var statearr_65807_65843 = state_65772__$1;(statearr_65807_65843[(2)] = null);
(statearr_65807_65843[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (10)))
{var inst_65711 = (state_65772[(12)]);var inst_65713 = (state_65772[(13)]);var inst_65712 = (state_65772[(15)]);var inst_65714 = (state_65772[(16)]);var inst_65719 = cljs.core._nth.call(null,inst_65712,inst_65714);var inst_65720 = cljs.core.async.muxch_STAR_.call(null,inst_65719);var inst_65721 = cljs.core.async.close_BANG_.call(null,inst_65720);var inst_65722 = (inst_65714 + (1));var tmp65802 = inst_65711;var tmp65803 = inst_65713;var tmp65804 = inst_65712;var inst_65711__$1 = tmp65802;var inst_65712__$1 = tmp65804;var inst_65713__$1 = tmp65803;var inst_65714__$1 = inst_65722;var state_65772__$1 = (function (){var statearr_65808 = state_65772;(statearr_65808[(18)] = inst_65721);
(statearr_65808[(12)] = inst_65711__$1);
(statearr_65808[(13)] = inst_65713__$1);
(statearr_65808[(15)] = inst_65712__$1);
(statearr_65808[(16)] = inst_65714__$1);
return statearr_65808;
})();var statearr_65809_65844 = state_65772__$1;(statearr_65809_65844[(2)] = null);
(statearr_65809_65844[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (18)))
{var inst_65740 = (state_65772[(2)]);var state_65772__$1 = state_65772;var statearr_65810_65845 = state_65772__$1;(statearr_65810_65845[(2)] = inst_65740);
(statearr_65810_65845[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65773 === (8)))
{var inst_65713 = (state_65772[(13)]);var inst_65714 = (state_65772[(16)]);var inst_65716 = (inst_65714 < inst_65713);var inst_65717 = inst_65716;var state_65772__$1 = state_65772;if(cljs.core.truth_(inst_65717))
{var statearr_65811_65846 = state_65772__$1;(statearr_65811_65846[(1)] = (10));
} else
{var statearr_65812_65847 = state_65772__$1;(statearr_65812_65847[(1)] = (11));
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
});})(c__5708__auto___65820,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___65820,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65816[(0)] = state_machine__5694__auto__);
(statearr_65816[(1)] = (1));
return statearr_65816;
});
var state_machine__5694__auto____1 = (function (state_65772){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65772);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65817){if((e65817 instanceof Object))
{var ex__5697__auto__ = e65817;var statearr_65818_65848 = state_65772;(statearr_65818_65848[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65817;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65849 = state_65772;
state_65772 = G__65849;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65772){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___65820,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_65819 = f__5709__auto__.call(null);(statearr_65819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___65820);
return statearr_65819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___65820,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___65986 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___65986,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___65986,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_65956){var state_val_65957 = (state_65956[(1)]);if((state_val_65957 === (7)))
{var state_65956__$1 = state_65956;var statearr_65958_65987 = state_65956__$1;(statearr_65958_65987[(2)] = null);
(statearr_65958_65987[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (1)))
{var state_65956__$1 = state_65956;var statearr_65959_65988 = state_65956__$1;(statearr_65959_65988[(2)] = null);
(statearr_65959_65988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (4)))
{var inst_65920 = (state_65956[(7)]);var inst_65922 = (inst_65920 < cnt);var state_65956__$1 = state_65956;if(cljs.core.truth_(inst_65922))
{var statearr_65960_65989 = state_65956__$1;(statearr_65960_65989[(1)] = (6));
} else
{var statearr_65961_65990 = state_65956__$1;(statearr_65961_65990[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (15)))
{var inst_65952 = (state_65956[(2)]);var state_65956__$1 = state_65956;var statearr_65962_65991 = state_65956__$1;(statearr_65962_65991[(2)] = inst_65952);
(statearr_65962_65991[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (13)))
{var inst_65945 = cljs.core.async.close_BANG_.call(null,out);var state_65956__$1 = state_65956;var statearr_65963_65992 = state_65956__$1;(statearr_65963_65992[(2)] = inst_65945);
(statearr_65963_65992[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (6)))
{var state_65956__$1 = state_65956;var statearr_65964_65993 = state_65956__$1;(statearr_65964_65993[(2)] = null);
(statearr_65964_65993[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (3)))
{var inst_65954 = (state_65956[(2)]);var state_65956__$1 = state_65956;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65956__$1,inst_65954);
} else
{if((state_val_65957 === (12)))
{var inst_65942 = (state_65956[(8)]);var inst_65942__$1 = (state_65956[(2)]);var inst_65943 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_65942__$1);var state_65956__$1 = (function (){var statearr_65965 = state_65956;(statearr_65965[(8)] = inst_65942__$1);
return statearr_65965;
})();if(cljs.core.truth_(inst_65943))
{var statearr_65966_65994 = state_65956__$1;(statearr_65966_65994[(1)] = (13));
} else
{var statearr_65967_65995 = state_65956__$1;(statearr_65967_65995[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (2)))
{var inst_65919 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_65920 = (0);var state_65956__$1 = (function (){var statearr_65968 = state_65956;(statearr_65968[(9)] = inst_65919);
(statearr_65968[(7)] = inst_65920);
return statearr_65968;
})();var statearr_65969_65996 = state_65956__$1;(statearr_65969_65996[(2)] = null);
(statearr_65969_65996[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (11)))
{var inst_65920 = (state_65956[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_65956,(10),Object,null,(9));var inst_65929 = chs__$1.call(null,inst_65920);var inst_65930 = done.call(null,inst_65920);var inst_65931 = cljs.core.async.take_BANG_.call(null,inst_65929,inst_65930);var state_65956__$1 = state_65956;var statearr_65970_65997 = state_65956__$1;(statearr_65970_65997[(2)] = inst_65931);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65956__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (9)))
{var inst_65920 = (state_65956[(7)]);var inst_65933 = (state_65956[(2)]);var inst_65934 = (inst_65920 + (1));var inst_65920__$1 = inst_65934;var state_65956__$1 = (function (){var statearr_65971 = state_65956;(statearr_65971[(7)] = inst_65920__$1);
(statearr_65971[(10)] = inst_65933);
return statearr_65971;
})();var statearr_65972_65998 = state_65956__$1;(statearr_65972_65998[(2)] = null);
(statearr_65972_65998[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (5)))
{var inst_65940 = (state_65956[(2)]);var state_65956__$1 = (function (){var statearr_65973 = state_65956;(statearr_65973[(11)] = inst_65940);
return statearr_65973;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65956__$1,(12),dchan);
} else
{if((state_val_65957 === (14)))
{var inst_65942 = (state_65956[(8)]);var inst_65947 = cljs.core.apply.call(null,f,inst_65942);var state_65956__$1 = state_65956;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65956__$1,(16),out,inst_65947);
} else
{if((state_val_65957 === (16)))
{var inst_65949 = (state_65956[(2)]);var state_65956__$1 = (function (){var statearr_65974 = state_65956;(statearr_65974[(12)] = inst_65949);
return statearr_65974;
})();var statearr_65975_65999 = state_65956__$1;(statearr_65975_65999[(2)] = null);
(statearr_65975_65999[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (10)))
{var inst_65924 = (state_65956[(2)]);var inst_65925 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_65956__$1 = (function (){var statearr_65976 = state_65956;(statearr_65976[(13)] = inst_65924);
return statearr_65976;
})();var statearr_65977_66000 = state_65956__$1;(statearr_65977_66000[(2)] = inst_65925);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65956__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65957 === (8)))
{var inst_65938 = (state_65956[(2)]);var state_65956__$1 = state_65956;var statearr_65978_66001 = state_65956__$1;(statearr_65978_66001[(2)] = inst_65938);
(statearr_65978_66001[(1)] = (5));
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
});})(c__5708__auto___65986,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___65986,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65982[(0)] = state_machine__5694__auto__);
(statearr_65982[(1)] = (1));
return statearr_65982;
});
var state_machine__5694__auto____1 = (function (state_65956){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65956);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65983){if((e65983 instanceof Object))
{var ex__5697__auto__ = e65983;var statearr_65984_66002 = state_65956;(statearr_65984_66002[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65956);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65983;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__66003 = state_65956;
state_65956 = G__66003;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65956){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___65986,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_65985 = f__5709__auto__.call(null);(statearr_65985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___65986);
return statearr_65985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___65986,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___66111 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___66111,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___66111,out){
return (function (state_66087){var state_val_66088 = (state_66087[(1)]);if((state_val_66088 === (7)))
{var inst_66066 = (state_66087[(7)]);var inst_66067 = (state_66087[(8)]);var inst_66066__$1 = (state_66087[(2)]);var inst_66067__$1 = cljs.core.nth.call(null,inst_66066__$1,(0),null);var inst_66068 = cljs.core.nth.call(null,inst_66066__$1,(1),null);var inst_66069 = (inst_66067__$1 == null);var state_66087__$1 = (function (){var statearr_66089 = state_66087;(statearr_66089[(9)] = inst_66068);
(statearr_66089[(7)] = inst_66066__$1);
(statearr_66089[(8)] = inst_66067__$1);
return statearr_66089;
})();if(cljs.core.truth_(inst_66069))
{var statearr_66090_66112 = state_66087__$1;(statearr_66090_66112[(1)] = (8));
} else
{var statearr_66091_66113 = state_66087__$1;(statearr_66091_66113[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66088 === (1)))
{var inst_66058 = cljs.core.vec.call(null,chs);var inst_66059 = inst_66058;var state_66087__$1 = (function (){var statearr_66092 = state_66087;(statearr_66092[(10)] = inst_66059);
return statearr_66092;
})();var statearr_66093_66114 = state_66087__$1;(statearr_66093_66114[(2)] = null);
(statearr_66093_66114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66088 === (4)))
{var inst_66059 = (state_66087[(10)]);var state_66087__$1 = state_66087;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_66087__$1,(7),inst_66059);
} else
{if((state_val_66088 === (6)))
{var inst_66083 = (state_66087[(2)]);var state_66087__$1 = state_66087;var statearr_66094_66115 = state_66087__$1;(statearr_66094_66115[(2)] = inst_66083);
(statearr_66094_66115[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66088 === (3)))
{var inst_66085 = (state_66087[(2)]);var state_66087__$1 = state_66087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66087__$1,inst_66085);
} else
{if((state_val_66088 === (2)))
{var inst_66059 = (state_66087[(10)]);var inst_66061 = cljs.core.count.call(null,inst_66059);var inst_66062 = (inst_66061 > (0));var state_66087__$1 = state_66087;if(cljs.core.truth_(inst_66062))
{var statearr_66096_66116 = state_66087__$1;(statearr_66096_66116[(1)] = (4));
} else
{var statearr_66097_66117 = state_66087__$1;(statearr_66097_66117[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66088 === (11)))
{var inst_66059 = (state_66087[(10)]);var inst_66076 = (state_66087[(2)]);var tmp66095 = inst_66059;var inst_66059__$1 = tmp66095;var state_66087__$1 = (function (){var statearr_66098 = state_66087;(statearr_66098[(11)] = inst_66076);
(statearr_66098[(10)] = inst_66059__$1);
return statearr_66098;
})();var statearr_66099_66118 = state_66087__$1;(statearr_66099_66118[(2)] = null);
(statearr_66099_66118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66088 === (9)))
{var inst_66067 = (state_66087[(8)]);var state_66087__$1 = state_66087;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66087__$1,(11),out,inst_66067);
} else
{if((state_val_66088 === (5)))
{var inst_66081 = cljs.core.async.close_BANG_.call(null,out);var state_66087__$1 = state_66087;var statearr_66100_66119 = state_66087__$1;(statearr_66100_66119[(2)] = inst_66081);
(statearr_66100_66119[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66088 === (10)))
{var inst_66079 = (state_66087[(2)]);var state_66087__$1 = state_66087;var statearr_66101_66120 = state_66087__$1;(statearr_66101_66120[(2)] = inst_66079);
(statearr_66101_66120[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66088 === (8)))
{var inst_66068 = (state_66087[(9)]);var inst_66059 = (state_66087[(10)]);var inst_66066 = (state_66087[(7)]);var inst_66067 = (state_66087[(8)]);var inst_66071 = (function (){var c = inst_66068;var v = inst_66067;var vec__66064 = inst_66066;var cs = inst_66059;return ((function (c,v,vec__66064,cs,inst_66068,inst_66059,inst_66066,inst_66067,state_val_66088,c__5708__auto___66111,out){
return (function (p1__66004_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__66004_SHARP_);
});
;})(c,v,vec__66064,cs,inst_66068,inst_66059,inst_66066,inst_66067,state_val_66088,c__5708__auto___66111,out))
})();var inst_66072 = cljs.core.filterv.call(null,inst_66071,inst_66059);var inst_66059__$1 = inst_66072;var state_66087__$1 = (function (){var statearr_66102 = state_66087;(statearr_66102[(10)] = inst_66059__$1);
return statearr_66102;
})();var statearr_66103_66121 = state_66087__$1;(statearr_66103_66121[(2)] = null);
(statearr_66103_66121[(1)] = (2));
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
});})(c__5708__auto___66111,out))
;return ((function (switch__5693__auto__,c__5708__auto___66111,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_66107 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_66107[(0)] = state_machine__5694__auto__);
(statearr_66107[(1)] = (1));
return statearr_66107;
});
var state_machine__5694__auto____1 = (function (state_66087){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_66087);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e66108){if((e66108 instanceof Object))
{var ex__5697__auto__ = e66108;var statearr_66109_66122 = state_66087;(statearr_66109_66122[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66087);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e66108;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__66123 = state_66087;
state_66087 = G__66123;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_66087){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_66087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___66111,out))
})();var state__5710__auto__ = (function (){var statearr_66110 = f__5709__auto__.call(null);(statearr_66110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___66111);
return statearr_66110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___66111,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___66216 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___66216,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___66216,out){
return (function (state_66193){var state_val_66194 = (state_66193[(1)]);if((state_val_66194 === (7)))
{var inst_66175 = (state_66193[(7)]);var inst_66175__$1 = (state_66193[(2)]);var inst_66176 = (inst_66175__$1 == null);var inst_66177 = cljs.core.not.call(null,inst_66176);var state_66193__$1 = (function (){var statearr_66195 = state_66193;(statearr_66195[(7)] = inst_66175__$1);
return statearr_66195;
})();if(inst_66177)
{var statearr_66196_66217 = state_66193__$1;(statearr_66196_66217[(1)] = (8));
} else
{var statearr_66197_66218 = state_66193__$1;(statearr_66197_66218[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66194 === (1)))
{var inst_66170 = (0);var state_66193__$1 = (function (){var statearr_66198 = state_66193;(statearr_66198[(8)] = inst_66170);
return statearr_66198;
})();var statearr_66199_66219 = state_66193__$1;(statearr_66199_66219[(2)] = null);
(statearr_66199_66219[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66194 === (4)))
{var state_66193__$1 = state_66193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66193__$1,(7),ch);
} else
{if((state_val_66194 === (6)))
{var inst_66188 = (state_66193[(2)]);var state_66193__$1 = state_66193;var statearr_66200_66220 = state_66193__$1;(statearr_66200_66220[(2)] = inst_66188);
(statearr_66200_66220[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66194 === (3)))
{var inst_66190 = (state_66193[(2)]);var inst_66191 = cljs.core.async.close_BANG_.call(null,out);var state_66193__$1 = (function (){var statearr_66201 = state_66193;(statearr_66201[(9)] = inst_66190);
return statearr_66201;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66193__$1,inst_66191);
} else
{if((state_val_66194 === (2)))
{var inst_66170 = (state_66193[(8)]);var inst_66172 = (inst_66170 < n);var state_66193__$1 = state_66193;if(cljs.core.truth_(inst_66172))
{var statearr_66202_66221 = state_66193__$1;(statearr_66202_66221[(1)] = (4));
} else
{var statearr_66203_66222 = state_66193__$1;(statearr_66203_66222[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66194 === (11)))
{var inst_66170 = (state_66193[(8)]);var inst_66180 = (state_66193[(2)]);var inst_66181 = (inst_66170 + (1));var inst_66170__$1 = inst_66181;var state_66193__$1 = (function (){var statearr_66204 = state_66193;(statearr_66204[(10)] = inst_66180);
(statearr_66204[(8)] = inst_66170__$1);
return statearr_66204;
})();var statearr_66205_66223 = state_66193__$1;(statearr_66205_66223[(2)] = null);
(statearr_66205_66223[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66194 === (9)))
{var state_66193__$1 = state_66193;var statearr_66206_66224 = state_66193__$1;(statearr_66206_66224[(2)] = null);
(statearr_66206_66224[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66194 === (5)))
{var state_66193__$1 = state_66193;var statearr_66207_66225 = state_66193__$1;(statearr_66207_66225[(2)] = null);
(statearr_66207_66225[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66194 === (10)))
{var inst_66185 = (state_66193[(2)]);var state_66193__$1 = state_66193;var statearr_66208_66226 = state_66193__$1;(statearr_66208_66226[(2)] = inst_66185);
(statearr_66208_66226[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66194 === (8)))
{var inst_66175 = (state_66193[(7)]);var state_66193__$1 = state_66193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66193__$1,(11),out,inst_66175);
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
});})(c__5708__auto___66216,out))
;return ((function (switch__5693__auto__,c__5708__auto___66216,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_66212 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_66212[(0)] = state_machine__5694__auto__);
(statearr_66212[(1)] = (1));
return statearr_66212;
});
var state_machine__5694__auto____1 = (function (state_66193){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_66193);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e66213){if((e66213 instanceof Object))
{var ex__5697__auto__ = e66213;var statearr_66214_66227 = state_66193;(statearr_66214_66227[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66193);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e66213;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__66228 = state_66193;
state_66193 = G__66228;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_66193){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_66193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___66216,out))
})();var state__5710__auto__ = (function (){var statearr_66215 = f__5709__auto__.call(null);(statearr_66215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___66216);
return statearr_66215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___66216,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___66325 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___66325,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___66325,out){
return (function (state_66300){var state_val_66301 = (state_66300[(1)]);if((state_val_66301 === (7)))
{var inst_66295 = (state_66300[(2)]);var state_66300__$1 = state_66300;var statearr_66302_66326 = state_66300__$1;(statearr_66302_66326[(2)] = inst_66295);
(statearr_66302_66326[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66301 === (1)))
{var inst_66277 = null;var state_66300__$1 = (function (){var statearr_66303 = state_66300;(statearr_66303[(7)] = inst_66277);
return statearr_66303;
})();var statearr_66304_66327 = state_66300__$1;(statearr_66304_66327[(2)] = null);
(statearr_66304_66327[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66301 === (4)))
{var inst_66280 = (state_66300[(8)]);var inst_66280__$1 = (state_66300[(2)]);var inst_66281 = (inst_66280__$1 == null);var inst_66282 = cljs.core.not.call(null,inst_66281);var state_66300__$1 = (function (){var statearr_66305 = state_66300;(statearr_66305[(8)] = inst_66280__$1);
return statearr_66305;
})();if(inst_66282)
{var statearr_66306_66328 = state_66300__$1;(statearr_66306_66328[(1)] = (5));
} else
{var statearr_66307_66329 = state_66300__$1;(statearr_66307_66329[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66301 === (6)))
{var state_66300__$1 = state_66300;var statearr_66308_66330 = state_66300__$1;(statearr_66308_66330[(2)] = null);
(statearr_66308_66330[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66301 === (3)))
{var inst_66297 = (state_66300[(2)]);var inst_66298 = cljs.core.async.close_BANG_.call(null,out);var state_66300__$1 = (function (){var statearr_66309 = state_66300;(statearr_66309[(9)] = inst_66297);
return statearr_66309;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66300__$1,inst_66298);
} else
{if((state_val_66301 === (2)))
{var state_66300__$1 = state_66300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66300__$1,(4),ch);
} else
{if((state_val_66301 === (11)))
{var inst_66280 = (state_66300[(8)]);var inst_66289 = (state_66300[(2)]);var inst_66277 = inst_66280;var state_66300__$1 = (function (){var statearr_66310 = state_66300;(statearr_66310[(10)] = inst_66289);
(statearr_66310[(7)] = inst_66277);
return statearr_66310;
})();var statearr_66311_66331 = state_66300__$1;(statearr_66311_66331[(2)] = null);
(statearr_66311_66331[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66301 === (9)))
{var inst_66280 = (state_66300[(8)]);var state_66300__$1 = state_66300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66300__$1,(11),out,inst_66280);
} else
{if((state_val_66301 === (5)))
{var inst_66280 = (state_66300[(8)]);var inst_66277 = (state_66300[(7)]);var inst_66284 = cljs.core._EQ_.call(null,inst_66280,inst_66277);var state_66300__$1 = state_66300;if(inst_66284)
{var statearr_66313_66332 = state_66300__$1;(statearr_66313_66332[(1)] = (8));
} else
{var statearr_66314_66333 = state_66300__$1;(statearr_66314_66333[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66301 === (10)))
{var inst_66292 = (state_66300[(2)]);var state_66300__$1 = state_66300;var statearr_66315_66334 = state_66300__$1;(statearr_66315_66334[(2)] = inst_66292);
(statearr_66315_66334[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66301 === (8)))
{var inst_66277 = (state_66300[(7)]);var tmp66312 = inst_66277;var inst_66277__$1 = tmp66312;var state_66300__$1 = (function (){var statearr_66316 = state_66300;(statearr_66316[(7)] = inst_66277__$1);
return statearr_66316;
})();var statearr_66317_66335 = state_66300__$1;(statearr_66317_66335[(2)] = null);
(statearr_66317_66335[(1)] = (2));
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
});})(c__5708__auto___66325,out))
;return ((function (switch__5693__auto__,c__5708__auto___66325,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_66321 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_66321[(0)] = state_machine__5694__auto__);
(statearr_66321[(1)] = (1));
return statearr_66321;
});
var state_machine__5694__auto____1 = (function (state_66300){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_66300);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e66322){if((e66322 instanceof Object))
{var ex__5697__auto__ = e66322;var statearr_66323_66336 = state_66300;(statearr_66323_66336[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66300);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e66322;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__66337 = state_66300;
state_66300 = G__66337;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_66300){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_66300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___66325,out))
})();var state__5710__auto__ = (function (){var statearr_66324 = f__5709__auto__.call(null);(statearr_66324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___66325);
return statearr_66324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___66325,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___66472 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___66472,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___66472,out){
return (function (state_66442){var state_val_66443 = (state_66442[(1)]);if((state_val_66443 === (7)))
{var inst_66438 = (state_66442[(2)]);var state_66442__$1 = state_66442;var statearr_66444_66473 = state_66442__$1;(statearr_66444_66473[(2)] = inst_66438);
(statearr_66444_66473[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66443 === (1)))
{var inst_66405 = (new Array(n));var inst_66406 = inst_66405;var inst_66407 = (0);var state_66442__$1 = (function (){var statearr_66445 = state_66442;(statearr_66445[(7)] = inst_66407);
(statearr_66445[(8)] = inst_66406);
return statearr_66445;
})();var statearr_66446_66474 = state_66442__$1;(statearr_66446_66474[(2)] = null);
(statearr_66446_66474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66443 === (4)))
{var inst_66410 = (state_66442[(9)]);var inst_66410__$1 = (state_66442[(2)]);var inst_66411 = (inst_66410__$1 == null);var inst_66412 = cljs.core.not.call(null,inst_66411);var state_66442__$1 = (function (){var statearr_66447 = state_66442;(statearr_66447[(9)] = inst_66410__$1);
return statearr_66447;
})();if(inst_66412)
{var statearr_66448_66475 = state_66442__$1;(statearr_66448_66475[(1)] = (5));
} else
{var statearr_66449_66476 = state_66442__$1;(statearr_66449_66476[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66443 === (15)))
{var inst_66432 = (state_66442[(2)]);var state_66442__$1 = state_66442;var statearr_66450_66477 = state_66442__$1;(statearr_66450_66477[(2)] = inst_66432);
(statearr_66450_66477[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66443 === (13)))
{var state_66442__$1 = state_66442;var statearr_66451_66478 = state_66442__$1;(statearr_66451_66478[(2)] = null);
(statearr_66451_66478[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66443 === (6)))
{var inst_66407 = (state_66442[(7)]);var inst_66428 = (inst_66407 > (0));var state_66442__$1 = state_66442;if(cljs.core.truth_(inst_66428))
{var statearr_66452_66479 = state_66442__$1;(statearr_66452_66479[(1)] = (12));
} else
{var statearr_66453_66480 = state_66442__$1;(statearr_66453_66480[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66443 === (3)))
{var inst_66440 = (state_66442[(2)]);var state_66442__$1 = state_66442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66442__$1,inst_66440);
} else
{if((state_val_66443 === (12)))
{var inst_66406 = (state_66442[(8)]);var inst_66430 = cljs.core.vec.call(null,inst_66406);var state_66442__$1 = state_66442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66442__$1,(15),out,inst_66430);
} else
{if((state_val_66443 === (2)))
{var state_66442__$1 = state_66442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66442__$1,(4),ch);
} else
{if((state_val_66443 === (11)))
{var inst_66422 = (state_66442[(2)]);var inst_66423 = (new Array(n));var inst_66406 = inst_66423;var inst_66407 = (0);var state_66442__$1 = (function (){var statearr_66454 = state_66442;(statearr_66454[(7)] = inst_66407);
(statearr_66454[(8)] = inst_66406);
(statearr_66454[(10)] = inst_66422);
return statearr_66454;
})();var statearr_66455_66481 = state_66442__$1;(statearr_66455_66481[(2)] = null);
(statearr_66455_66481[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66443 === (9)))
{var inst_66406 = (state_66442[(8)]);var inst_66420 = cljs.core.vec.call(null,inst_66406);var state_66442__$1 = state_66442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66442__$1,(11),out,inst_66420);
} else
{if((state_val_66443 === (5)))
{var inst_66407 = (state_66442[(7)]);var inst_66406 = (state_66442[(8)]);var inst_66410 = (state_66442[(9)]);var inst_66415 = (state_66442[(11)]);var inst_66414 = (inst_66406[inst_66407] = inst_66410);var inst_66415__$1 = (inst_66407 + (1));var inst_66416 = (inst_66415__$1 < n);var state_66442__$1 = (function (){var statearr_66456 = state_66442;(statearr_66456[(12)] = inst_66414);
(statearr_66456[(11)] = inst_66415__$1);
return statearr_66456;
})();if(cljs.core.truth_(inst_66416))
{var statearr_66457_66482 = state_66442__$1;(statearr_66457_66482[(1)] = (8));
} else
{var statearr_66458_66483 = state_66442__$1;(statearr_66458_66483[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66443 === (14)))
{var inst_66435 = (state_66442[(2)]);var inst_66436 = cljs.core.async.close_BANG_.call(null,out);var state_66442__$1 = (function (){var statearr_66460 = state_66442;(statearr_66460[(13)] = inst_66435);
return statearr_66460;
})();var statearr_66461_66484 = state_66442__$1;(statearr_66461_66484[(2)] = inst_66436);
(statearr_66461_66484[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66443 === (10)))
{var inst_66426 = (state_66442[(2)]);var state_66442__$1 = state_66442;var statearr_66462_66485 = state_66442__$1;(statearr_66462_66485[(2)] = inst_66426);
(statearr_66462_66485[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66443 === (8)))
{var inst_66406 = (state_66442[(8)]);var inst_66415 = (state_66442[(11)]);var tmp66459 = inst_66406;var inst_66406__$1 = tmp66459;var inst_66407 = inst_66415;var state_66442__$1 = (function (){var statearr_66463 = state_66442;(statearr_66463[(7)] = inst_66407);
(statearr_66463[(8)] = inst_66406__$1);
return statearr_66463;
})();var statearr_66464_66486 = state_66442__$1;(statearr_66464_66486[(2)] = null);
(statearr_66464_66486[(1)] = (2));
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
});})(c__5708__auto___66472,out))
;return ((function (switch__5693__auto__,c__5708__auto___66472,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_66468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_66468[(0)] = state_machine__5694__auto__);
(statearr_66468[(1)] = (1));
return statearr_66468;
});
var state_machine__5694__auto____1 = (function (state_66442){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_66442);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e66469){if((e66469 instanceof Object))
{var ex__5697__auto__ = e66469;var statearr_66470_66487 = state_66442;(statearr_66470_66487[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66442);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e66469;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__66488 = state_66442;
state_66442 = G__66488;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_66442){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_66442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___66472,out))
})();var state__5710__auto__ = (function (){var statearr_66471 = f__5709__auto__.call(null);(statearr_66471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___66472);
return statearr_66471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___66472,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___66631 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___66631,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___66631,out){
return (function (state_66601){var state_val_66602 = (state_66601[(1)]);if((state_val_66602 === (7)))
{var inst_66597 = (state_66601[(2)]);var state_66601__$1 = state_66601;var statearr_66603_66632 = state_66601__$1;(statearr_66603_66632[(2)] = inst_66597);
(statearr_66603_66632[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66602 === (1)))
{var inst_66560 = [];var inst_66561 = inst_66560;var inst_66562 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_66601__$1 = (function (){var statearr_66604 = state_66601;(statearr_66604[(7)] = inst_66562);
(statearr_66604[(8)] = inst_66561);
return statearr_66604;
})();var statearr_66605_66633 = state_66601__$1;(statearr_66605_66633[(2)] = null);
(statearr_66605_66633[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66602 === (4)))
{var inst_66565 = (state_66601[(9)]);var inst_66565__$1 = (state_66601[(2)]);var inst_66566 = (inst_66565__$1 == null);var inst_66567 = cljs.core.not.call(null,inst_66566);var state_66601__$1 = (function (){var statearr_66606 = state_66601;(statearr_66606[(9)] = inst_66565__$1);
return statearr_66606;
})();if(inst_66567)
{var statearr_66607_66634 = state_66601__$1;(statearr_66607_66634[(1)] = (5));
} else
{var statearr_66608_66635 = state_66601__$1;(statearr_66608_66635[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66602 === (15)))
{var inst_66591 = (state_66601[(2)]);var state_66601__$1 = state_66601;var statearr_66609_66636 = state_66601__$1;(statearr_66609_66636[(2)] = inst_66591);
(statearr_66609_66636[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66602 === (13)))
{var state_66601__$1 = state_66601;var statearr_66610_66637 = state_66601__$1;(statearr_66610_66637[(2)] = null);
(statearr_66610_66637[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66602 === (6)))
{var inst_66561 = (state_66601[(8)]);var inst_66586 = inst_66561.length;var inst_66587 = (inst_66586 > (0));var state_66601__$1 = state_66601;if(cljs.core.truth_(inst_66587))
{var statearr_66611_66638 = state_66601__$1;(statearr_66611_66638[(1)] = (12));
} else
{var statearr_66612_66639 = state_66601__$1;(statearr_66612_66639[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66602 === (3)))
{var inst_66599 = (state_66601[(2)]);var state_66601__$1 = state_66601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66601__$1,inst_66599);
} else
{if((state_val_66602 === (12)))
{var inst_66561 = (state_66601[(8)]);var inst_66589 = cljs.core.vec.call(null,inst_66561);var state_66601__$1 = state_66601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66601__$1,(15),out,inst_66589);
} else
{if((state_val_66602 === (2)))
{var state_66601__$1 = state_66601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66601__$1,(4),ch);
} else
{if((state_val_66602 === (11)))
{var inst_66569 = (state_66601[(10)]);var inst_66565 = (state_66601[(9)]);var inst_66579 = (state_66601[(2)]);var inst_66580 = [];var inst_66581 = inst_66580.push(inst_66565);var inst_66561 = inst_66580;var inst_66562 = inst_66569;var state_66601__$1 = (function (){var statearr_66613 = state_66601;(statearr_66613[(11)] = inst_66579);
(statearr_66613[(12)] = inst_66581);
(statearr_66613[(7)] = inst_66562);
(statearr_66613[(8)] = inst_66561);
return statearr_66613;
})();var statearr_66614_66640 = state_66601__$1;(statearr_66614_66640[(2)] = null);
(statearr_66614_66640[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66602 === (9)))
{var inst_66561 = (state_66601[(8)]);var inst_66577 = cljs.core.vec.call(null,inst_66561);var state_66601__$1 = state_66601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66601__$1,(11),out,inst_66577);
} else
{if((state_val_66602 === (5)))
{var inst_66569 = (state_66601[(10)]);var inst_66565 = (state_66601[(9)]);var inst_66562 = (state_66601[(7)]);var inst_66569__$1 = f.call(null,inst_66565);var inst_66570 = cljs.core._EQ_.call(null,inst_66569__$1,inst_66562);var inst_66571 = cljs.core.keyword_identical_QMARK_.call(null,inst_66562,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_66572 = (inst_66570) || (inst_66571);var state_66601__$1 = (function (){var statearr_66615 = state_66601;(statearr_66615[(10)] = inst_66569__$1);
return statearr_66615;
})();if(cljs.core.truth_(inst_66572))
{var statearr_66616_66641 = state_66601__$1;(statearr_66616_66641[(1)] = (8));
} else
{var statearr_66617_66642 = state_66601__$1;(statearr_66617_66642[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66602 === (14)))
{var inst_66594 = (state_66601[(2)]);var inst_66595 = cljs.core.async.close_BANG_.call(null,out);var state_66601__$1 = (function (){var statearr_66619 = state_66601;(statearr_66619[(13)] = inst_66594);
return statearr_66619;
})();var statearr_66620_66643 = state_66601__$1;(statearr_66620_66643[(2)] = inst_66595);
(statearr_66620_66643[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66602 === (10)))
{var inst_66584 = (state_66601[(2)]);var state_66601__$1 = state_66601;var statearr_66621_66644 = state_66601__$1;(statearr_66621_66644[(2)] = inst_66584);
(statearr_66621_66644[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_66602 === (8)))
{var inst_66569 = (state_66601[(10)]);var inst_66565 = (state_66601[(9)]);var inst_66561 = (state_66601[(8)]);var inst_66574 = inst_66561.push(inst_66565);var tmp66618 = inst_66561;var inst_66561__$1 = tmp66618;var inst_66562 = inst_66569;var state_66601__$1 = (function (){var statearr_66622 = state_66601;(statearr_66622[(14)] = inst_66574);
(statearr_66622[(7)] = inst_66562);
(statearr_66622[(8)] = inst_66561__$1);
return statearr_66622;
})();var statearr_66623_66645 = state_66601__$1;(statearr_66623_66645[(2)] = null);
(statearr_66623_66645[(1)] = (2));
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
});})(c__5708__auto___66631,out))
;return ((function (switch__5693__auto__,c__5708__auto___66631,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_66627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_66627[(0)] = state_machine__5694__auto__);
(statearr_66627[(1)] = (1));
return statearr_66627;
});
var state_machine__5694__auto____1 = (function (state_66601){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_66601);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e66628){if((e66628 instanceof Object))
{var ex__5697__auto__ = e66628;var statearr_66629_66646 = state_66601;(statearr_66629_66646[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66601);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e66628;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__66647 = state_66601;
state_66601 = G__66647;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_66601){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_66601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___66631,out))
})();var state__5710__auto__ = (function (){var statearr_66630 = f__5709__auto__.call(null);(statearr_66630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___66631);
return statearr_66630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___66631,out))
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