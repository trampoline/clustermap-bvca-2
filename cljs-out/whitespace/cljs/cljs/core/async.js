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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19395 = (function (f,fn_handler,meta19396){
this.f = f;
this.fn_handler = fn_handler;
this.meta19396 = meta19396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19395.cljs$lang$type = true;
cljs.core.async.t19395.cljs$lang$ctorStr = "cljs.core.async/t19395";
cljs.core.async.t19395.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19395");
});
cljs.core.async.t19395.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19397){var self__ = this;
var _19397__$1 = this;return self__.meta19396;
});
cljs.core.async.t19395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19397,meta19396__$1){var self__ = this;
var _19397__$1 = this;return (new cljs.core.async.t19395(self__.f,self__.fn_handler,meta19396__$1));
});
cljs.core.async.__GT_t19395 = (function __GT_t19395(f__$1,fn_handler__$1,meta19396){return (new cljs.core.async.t19395(f__$1,fn_handler__$1,meta19396));
});
}
return (new cljs.core.async.t19395(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19399 = buff;if(G__19399)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__19399.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19399.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19399);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19399);
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
{var val_19400 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19400);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_19400,ret){
return (function (){return fn1.call(null,val_19400);
});})(val_19400,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___19401 = n;var x_19402 = (0);while(true){
if((x_19402 < n__4414__auto___19401))
{(a[x_19402] = (0));
{
var G__19403 = (x_19402 + (1));
x_19402 = G__19403;
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
var G__19404 = (i + (1));
i = G__19404;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19408 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19408 = (function (flag,alt_flag,meta19409){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19409 = meta19409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19408.cljs$lang$type = true;
cljs.core.async.t19408.cljs$lang$ctorStr = "cljs.core.async/t19408";
cljs.core.async.t19408.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19408");
});})(flag))
;
cljs.core.async.t19408.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t19408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t19408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19410){var self__ = this;
var _19410__$1 = this;return self__.meta19409;
});})(flag))
;
cljs.core.async.t19408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19410,meta19409__$1){var self__ = this;
var _19410__$1 = this;return (new cljs.core.async.t19408(self__.flag,self__.alt_flag,meta19409__$1));
});})(flag))
;
cljs.core.async.__GT_t19408 = ((function (flag){
return (function __GT_t19408(flag__$1,alt_flag__$1,meta19409){return (new cljs.core.async.t19408(flag__$1,alt_flag__$1,meta19409));
});})(flag))
;
}
return (new cljs.core.async.t19408(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19414 = (function (cb,flag,alt_handler,meta19415){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19415 = meta19415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19414.cljs$lang$type = true;
cljs.core.async.t19414.cljs$lang$ctorStr = "cljs.core.async/t19414";
cljs.core.async.t19414.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19414");
});
cljs.core.async.t19414.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19416){var self__ = this;
var _19416__$1 = this;return self__.meta19415;
});
cljs.core.async.t19414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19416,meta19415__$1){var self__ = this;
var _19416__$1 = this;return (new cljs.core.async.t19414(self__.cb,self__.flag,self__.alt_handler,meta19415__$1));
});
cljs.core.async.__GT_t19414 = (function __GT_t19414(cb__$1,flag__$1,alt_handler__$1,meta19415){return (new cljs.core.async.t19414(cb__$1,flag__$1,alt_handler__$1,meta19415));
});
}
return (new cljs.core.async.t19414(cb,flag,alt_handler,null));
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
return (function (p1__19417_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19417_SHARP_,port], null));
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
var G__19418 = (i + (1));
i = G__19418;
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
var alts_BANG___delegate = function (ports,p__19419){var map__19421 = p__19419;var map__19421__$1 = ((cljs.core.seq_QMARK_.call(null,map__19421))?cljs.core.apply.call(null,cljs.core.hash_map,map__19421):map__19421);var opts = map__19421__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__19419 = null;if (arguments.length > 1) {
  p__19419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19419);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19422){
var ports = cljs.core.first(arglist__19422);
var p__19419 = cljs.core.rest(arglist__19422);
return alts_BANG___delegate(ports,p__19419);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19430 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19430 = (function (ch,f,map_LT_,meta19431){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19431 = meta19431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19430.cljs$lang$type = true;
cljs.core.async.t19430.cljs$lang$ctorStr = "cljs.core.async/t19430";
cljs.core.async.t19430.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19430");
});
cljs.core.async.t19430.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19430.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t19430.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19430.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19433 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19433 = (function (fn1,_,meta19431,ch,f,map_LT_,meta19434){
this.fn1 = fn1;
this._ = _;
this.meta19431 = meta19431;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19434 = meta19434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19433.cljs$lang$type = true;
cljs.core.async.t19433.cljs$lang$ctorStr = "cljs.core.async/t19433";
cljs.core.async.t19433.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19433");
});})(___$1))
;
cljs.core.async.t19433.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19433.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__19423_SHARP_){return f1.call(null,(((p1__19423_SHARP_ == null))?null:self__.f.call(null,p1__19423_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t19433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19435){var self__ = this;
var _19435__$1 = this;return self__.meta19434;
});})(___$1))
;
cljs.core.async.t19433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19435,meta19434__$1){var self__ = this;
var _19435__$1 = this;return (new cljs.core.async.t19433(self__.fn1,self__._,self__.meta19431,self__.ch,self__.f,self__.map_LT_,meta19434__$1));
});})(___$1))
;
cljs.core.async.__GT_t19433 = ((function (___$1){
return (function __GT_t19433(fn1__$1,___$2,meta19431__$1,ch__$2,f__$2,map_LT___$2,meta19434){return (new cljs.core.async.t19433(fn1__$1,___$2,meta19431__$1,ch__$2,f__$2,map_LT___$2,meta19434));
});})(___$1))
;
}
return (new cljs.core.async.t19433(fn1,___$1,self__.meta19431,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t19430.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19430.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19432){var self__ = this;
var _19432__$1 = this;return self__.meta19431;
});
cljs.core.async.t19430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19432,meta19431__$1){var self__ = this;
var _19432__$1 = this;return (new cljs.core.async.t19430(self__.ch,self__.f,self__.map_LT_,meta19431__$1));
});
cljs.core.async.__GT_t19430 = (function __GT_t19430(ch__$1,f__$1,map_LT___$1,meta19431){return (new cljs.core.async.t19430(ch__$1,f__$1,map_LT___$1,meta19431));
});
}
return (new cljs.core.async.t19430(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19439 = (function (ch,f,map_GT_,meta19440){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19440 = meta19440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19439.cljs$lang$type = true;
cljs.core.async.t19439.cljs$lang$ctorStr = "cljs.core.async/t19439";
cljs.core.async.t19439.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19439");
});
cljs.core.async.t19439.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t19439.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19439.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19441){var self__ = this;
var _19441__$1 = this;return self__.meta19440;
});
cljs.core.async.t19439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19441,meta19440__$1){var self__ = this;
var _19441__$1 = this;return (new cljs.core.async.t19439(self__.ch,self__.f,self__.map_GT_,meta19440__$1));
});
cljs.core.async.__GT_t19439 = (function __GT_t19439(ch__$1,f__$1,map_GT___$1,meta19440){return (new cljs.core.async.t19439(ch__$1,f__$1,map_GT___$1,meta19440));
});
}
return (new cljs.core.async.t19439(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19445 = (function (ch,p,filter_GT_,meta19446){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19446 = meta19446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19445.cljs$lang$type = true;
cljs.core.async.t19445.cljs$lang$ctorStr = "cljs.core.async/t19445";
cljs.core.async.t19445.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19445");
});
cljs.core.async.t19445.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t19445.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19445.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19447){var self__ = this;
var _19447__$1 = this;return self__.meta19446;
});
cljs.core.async.t19445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19447,meta19446__$1){var self__ = this;
var _19447__$1 = this;return (new cljs.core.async.t19445(self__.ch,self__.p,self__.filter_GT_,meta19446__$1));
});
cljs.core.async.__GT_t19445 = (function __GT_t19445(ch__$1,p__$1,filter_GT___$1,meta19446){return (new cljs.core.async.t19445(ch__$1,p__$1,filter_GT___$1,meta19446));
});
}
return (new cljs.core.async.t19445(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___19530 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19530,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19530,out){
return (function (state_19509){var state_val_19510 = (state_19509[(1)]);if((state_val_19510 === (7)))
{var inst_19505 = (state_19509[(2)]);var state_19509__$1 = state_19509;var statearr_19511_19531 = state_19509__$1;(statearr_19511_19531[(2)] = inst_19505);
(statearr_19511_19531[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19510 === (1)))
{var state_19509__$1 = state_19509;var statearr_19512_19532 = state_19509__$1;(statearr_19512_19532[(2)] = null);
(statearr_19512_19532[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19510 === (4)))
{var inst_19491 = (state_19509[(7)]);var inst_19491__$1 = (state_19509[(2)]);var inst_19492 = (inst_19491__$1 == null);var state_19509__$1 = (function (){var statearr_19513 = state_19509;(statearr_19513[(7)] = inst_19491__$1);
return statearr_19513;
})();if(cljs.core.truth_(inst_19492))
{var statearr_19514_19533 = state_19509__$1;(statearr_19514_19533[(1)] = (5));
} else
{var statearr_19515_19534 = state_19509__$1;(statearr_19515_19534[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19510 === (6)))
{var inst_19491 = (state_19509[(7)]);var inst_19496 = p.call(null,inst_19491);var state_19509__$1 = state_19509;if(cljs.core.truth_(inst_19496))
{var statearr_19516_19535 = state_19509__$1;(statearr_19516_19535[(1)] = (8));
} else
{var statearr_19517_19536 = state_19509__$1;(statearr_19517_19536[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19510 === (3)))
{var inst_19507 = (state_19509[(2)]);var state_19509__$1 = state_19509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19509__$1,inst_19507);
} else
{if((state_val_19510 === (2)))
{var state_19509__$1 = state_19509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19509__$1,(4),ch);
} else
{if((state_val_19510 === (11)))
{var inst_19499 = (state_19509[(2)]);var state_19509__$1 = state_19509;var statearr_19518_19537 = state_19509__$1;(statearr_19518_19537[(2)] = inst_19499);
(statearr_19518_19537[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19510 === (9)))
{var state_19509__$1 = state_19509;var statearr_19519_19538 = state_19509__$1;(statearr_19519_19538[(2)] = null);
(statearr_19519_19538[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19510 === (5)))
{var inst_19494 = cljs.core.async.close_BANG_.call(null,out);var state_19509__$1 = state_19509;var statearr_19520_19539 = state_19509__$1;(statearr_19520_19539[(2)] = inst_19494);
(statearr_19520_19539[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19510 === (10)))
{var inst_19502 = (state_19509[(2)]);var state_19509__$1 = (function (){var statearr_19521 = state_19509;(statearr_19521[(8)] = inst_19502);
return statearr_19521;
})();var statearr_19522_19540 = state_19509__$1;(statearr_19522_19540[(2)] = null);
(statearr_19522_19540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19510 === (8)))
{var inst_19491 = (state_19509[(7)]);var state_19509__$1 = state_19509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19509__$1,(11),out,inst_19491);
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
});})(c__5708__auto___19530,out))
;return ((function (switch__5693__auto__,c__5708__auto___19530,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19526 = [null,null,null,null,null,null,null,null,null];(statearr_19526[(0)] = state_machine__5694__auto__);
(statearr_19526[(1)] = (1));
return statearr_19526;
});
var state_machine__5694__auto____1 = (function (state_19509){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19509);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19527){if((e19527 instanceof Object))
{var ex__5697__auto__ = e19527;var statearr_19528_19541 = state_19509;(statearr_19528_19541[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19509);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19527;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19542 = state_19509;
state_19509 = G__19542;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19509){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19530,out))
})();var state__5710__auto__ = (function (){var statearr_19529 = f__5709__auto__.call(null);(statearr_19529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19530);
return statearr_19529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19530,out))
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
return (function (state_19694){var state_val_19695 = (state_19694[(1)]);if((state_val_19695 === (7)))
{var inst_19690 = (state_19694[(2)]);var state_19694__$1 = state_19694;var statearr_19696_19733 = state_19694__$1;(statearr_19696_19733[(2)] = inst_19690);
(statearr_19696_19733[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (20)))
{var inst_19665 = (state_19694[(7)]);var inst_19676 = (state_19694[(2)]);var inst_19677 = cljs.core.next.call(null,inst_19665);var inst_19651 = inst_19677;var inst_19652 = null;var inst_19653 = (0);var inst_19654 = (0);var state_19694__$1 = (function (){var statearr_19697 = state_19694;(statearr_19697[(8)] = inst_19653);
(statearr_19697[(9)] = inst_19651);
(statearr_19697[(10)] = inst_19652);
(statearr_19697[(11)] = inst_19654);
(statearr_19697[(12)] = inst_19676);
return statearr_19697;
})();var statearr_19698_19734 = state_19694__$1;(statearr_19698_19734[(2)] = null);
(statearr_19698_19734[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (1)))
{var state_19694__$1 = state_19694;var statearr_19699_19735 = state_19694__$1;(statearr_19699_19735[(2)] = null);
(statearr_19699_19735[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (4)))
{var inst_19640 = (state_19694[(13)]);var inst_19640__$1 = (state_19694[(2)]);var inst_19641 = (inst_19640__$1 == null);var state_19694__$1 = (function (){var statearr_19703 = state_19694;(statearr_19703[(13)] = inst_19640__$1);
return statearr_19703;
})();if(cljs.core.truth_(inst_19641))
{var statearr_19704_19736 = state_19694__$1;(statearr_19704_19736[(1)] = (5));
} else
{var statearr_19705_19737 = state_19694__$1;(statearr_19705_19737[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (15)))
{var state_19694__$1 = state_19694;var statearr_19706_19738 = state_19694__$1;(statearr_19706_19738[(2)] = null);
(statearr_19706_19738[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (13)))
{var inst_19653 = (state_19694[(8)]);var inst_19651 = (state_19694[(9)]);var inst_19652 = (state_19694[(10)]);var inst_19654 = (state_19694[(11)]);var inst_19661 = (state_19694[(2)]);var inst_19662 = (inst_19654 + (1));var tmp19700 = inst_19653;var tmp19701 = inst_19651;var tmp19702 = inst_19652;var inst_19651__$1 = tmp19701;var inst_19652__$1 = tmp19702;var inst_19653__$1 = tmp19700;var inst_19654__$1 = inst_19662;var state_19694__$1 = (function (){var statearr_19707 = state_19694;(statearr_19707[(8)] = inst_19653__$1);
(statearr_19707[(9)] = inst_19651__$1);
(statearr_19707[(10)] = inst_19652__$1);
(statearr_19707[(11)] = inst_19654__$1);
(statearr_19707[(14)] = inst_19661);
return statearr_19707;
})();var statearr_19708_19739 = state_19694__$1;(statearr_19708_19739[(2)] = null);
(statearr_19708_19739[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (6)))
{var inst_19640 = (state_19694[(13)]);var inst_19645 = f.call(null,inst_19640);var inst_19650 = cljs.core.seq.call(null,inst_19645);var inst_19651 = inst_19650;var inst_19652 = null;var inst_19653 = (0);var inst_19654 = (0);var state_19694__$1 = (function (){var statearr_19709 = state_19694;(statearr_19709[(8)] = inst_19653);
(statearr_19709[(9)] = inst_19651);
(statearr_19709[(10)] = inst_19652);
(statearr_19709[(11)] = inst_19654);
return statearr_19709;
})();var statearr_19710_19740 = state_19694__$1;(statearr_19710_19740[(2)] = null);
(statearr_19710_19740[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (17)))
{var inst_19665 = (state_19694[(7)]);var inst_19669 = cljs.core.chunk_first.call(null,inst_19665);var inst_19670 = cljs.core.chunk_rest.call(null,inst_19665);var inst_19671 = cljs.core.count.call(null,inst_19669);var inst_19651 = inst_19670;var inst_19652 = inst_19669;var inst_19653 = inst_19671;var inst_19654 = (0);var state_19694__$1 = (function (){var statearr_19711 = state_19694;(statearr_19711[(8)] = inst_19653);
(statearr_19711[(9)] = inst_19651);
(statearr_19711[(10)] = inst_19652);
(statearr_19711[(11)] = inst_19654);
return statearr_19711;
})();var statearr_19712_19741 = state_19694__$1;(statearr_19712_19741[(2)] = null);
(statearr_19712_19741[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (3)))
{var inst_19692 = (state_19694[(2)]);var state_19694__$1 = state_19694;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19694__$1,inst_19692);
} else
{if((state_val_19695 === (12)))
{var inst_19685 = (state_19694[(2)]);var state_19694__$1 = state_19694;var statearr_19713_19742 = state_19694__$1;(statearr_19713_19742[(2)] = inst_19685);
(statearr_19713_19742[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (2)))
{var state_19694__$1 = state_19694;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19694__$1,(4),in$);
} else
{if((state_val_19695 === (19)))
{var inst_19680 = (state_19694[(2)]);var state_19694__$1 = state_19694;var statearr_19714_19743 = state_19694__$1;(statearr_19714_19743[(2)] = inst_19680);
(statearr_19714_19743[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (11)))
{var inst_19651 = (state_19694[(9)]);var inst_19665 = (state_19694[(7)]);var inst_19665__$1 = cljs.core.seq.call(null,inst_19651);var state_19694__$1 = (function (){var statearr_19715 = state_19694;(statearr_19715[(7)] = inst_19665__$1);
return statearr_19715;
})();if(inst_19665__$1)
{var statearr_19716_19744 = state_19694__$1;(statearr_19716_19744[(1)] = (14));
} else
{var statearr_19717_19745 = state_19694__$1;(statearr_19717_19745[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (9)))
{var inst_19687 = (state_19694[(2)]);var state_19694__$1 = (function (){var statearr_19718 = state_19694;(statearr_19718[(15)] = inst_19687);
return statearr_19718;
})();var statearr_19719_19746 = state_19694__$1;(statearr_19719_19746[(2)] = null);
(statearr_19719_19746[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (5)))
{var inst_19643 = cljs.core.async.close_BANG_.call(null,out);var state_19694__$1 = state_19694;var statearr_19720_19747 = state_19694__$1;(statearr_19720_19747[(2)] = inst_19643);
(statearr_19720_19747[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (14)))
{var inst_19665 = (state_19694[(7)]);var inst_19667 = cljs.core.chunked_seq_QMARK_.call(null,inst_19665);var state_19694__$1 = state_19694;if(inst_19667)
{var statearr_19721_19748 = state_19694__$1;(statearr_19721_19748[(1)] = (17));
} else
{var statearr_19722_19749 = state_19694__$1;(statearr_19722_19749[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (16)))
{var inst_19683 = (state_19694[(2)]);var state_19694__$1 = state_19694;var statearr_19723_19750 = state_19694__$1;(statearr_19723_19750[(2)] = inst_19683);
(statearr_19723_19750[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19695 === (10)))
{var inst_19652 = (state_19694[(10)]);var inst_19654 = (state_19694[(11)]);var inst_19659 = cljs.core._nth.call(null,inst_19652,inst_19654);var state_19694__$1 = state_19694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19694__$1,(13),out,inst_19659);
} else
{if((state_val_19695 === (18)))
{var inst_19665 = (state_19694[(7)]);var inst_19674 = cljs.core.first.call(null,inst_19665);var state_19694__$1 = state_19694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19694__$1,(20),out,inst_19674);
} else
{if((state_val_19695 === (8)))
{var inst_19653 = (state_19694[(8)]);var inst_19654 = (state_19694[(11)]);var inst_19656 = (inst_19654 < inst_19653);var inst_19657 = inst_19656;var state_19694__$1 = state_19694;if(cljs.core.truth_(inst_19657))
{var statearr_19724_19751 = state_19694__$1;(statearr_19724_19751[(1)] = (10));
} else
{var statearr_19725_19752 = state_19694__$1;(statearr_19725_19752[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_19729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19729[(0)] = state_machine__5694__auto__);
(statearr_19729[(1)] = (1));
return statearr_19729;
});
var state_machine__5694__auto____1 = (function (state_19694){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19694);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19730){if((e19730 instanceof Object))
{var ex__5697__auto__ = e19730;var statearr_19731_19753 = state_19694;(statearr_19731_19753[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19694);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19730;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19754 = state_19694;
state_19694 = G__19754;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19694){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_19732 = f__5709__auto__.call(null);(statearr_19732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19732;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___19835 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19835){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19835){
return (function (state_19814){var state_val_19815 = (state_19814[(1)]);if((state_val_19815 === (7)))
{var inst_19810 = (state_19814[(2)]);var state_19814__$1 = state_19814;var statearr_19816_19836 = state_19814__$1;(statearr_19816_19836[(2)] = inst_19810);
(statearr_19816_19836[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19815 === (1)))
{var state_19814__$1 = state_19814;var statearr_19817_19837 = state_19814__$1;(statearr_19817_19837[(2)] = null);
(statearr_19817_19837[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19815 === (4)))
{var inst_19797 = (state_19814[(7)]);var inst_19797__$1 = (state_19814[(2)]);var inst_19798 = (inst_19797__$1 == null);var state_19814__$1 = (function (){var statearr_19818 = state_19814;(statearr_19818[(7)] = inst_19797__$1);
return statearr_19818;
})();if(cljs.core.truth_(inst_19798))
{var statearr_19819_19838 = state_19814__$1;(statearr_19819_19838[(1)] = (5));
} else
{var statearr_19820_19839 = state_19814__$1;(statearr_19820_19839[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19815 === (6)))
{var inst_19797 = (state_19814[(7)]);var state_19814__$1 = state_19814;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19814__$1,(11),to,inst_19797);
} else
{if((state_val_19815 === (3)))
{var inst_19812 = (state_19814[(2)]);var state_19814__$1 = state_19814;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19814__$1,inst_19812);
} else
{if((state_val_19815 === (2)))
{var state_19814__$1 = state_19814;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19814__$1,(4),from);
} else
{if((state_val_19815 === (11)))
{var inst_19807 = (state_19814[(2)]);var state_19814__$1 = (function (){var statearr_19821 = state_19814;(statearr_19821[(8)] = inst_19807);
return statearr_19821;
})();var statearr_19822_19840 = state_19814__$1;(statearr_19822_19840[(2)] = null);
(statearr_19822_19840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19815 === (9)))
{var state_19814__$1 = state_19814;var statearr_19823_19841 = state_19814__$1;(statearr_19823_19841[(2)] = null);
(statearr_19823_19841[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19815 === (5)))
{var state_19814__$1 = state_19814;if(cljs.core.truth_(close_QMARK_))
{var statearr_19824_19842 = state_19814__$1;(statearr_19824_19842[(1)] = (8));
} else
{var statearr_19825_19843 = state_19814__$1;(statearr_19825_19843[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19815 === (10)))
{var inst_19804 = (state_19814[(2)]);var state_19814__$1 = state_19814;var statearr_19826_19844 = state_19814__$1;(statearr_19826_19844[(2)] = inst_19804);
(statearr_19826_19844[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19815 === (8)))
{var inst_19801 = cljs.core.async.close_BANG_.call(null,to);var state_19814__$1 = state_19814;var statearr_19827_19845 = state_19814__$1;(statearr_19827_19845[(2)] = inst_19801);
(statearr_19827_19845[(1)] = (10));
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
});})(c__5708__auto___19835))
;return ((function (switch__5693__auto__,c__5708__auto___19835){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19831 = [null,null,null,null,null,null,null,null,null];(statearr_19831[(0)] = state_machine__5694__auto__);
(statearr_19831[(1)] = (1));
return statearr_19831;
});
var state_machine__5694__auto____1 = (function (state_19814){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19814);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19832){if((e19832 instanceof Object))
{var ex__5697__auto__ = e19832;var statearr_19833_19846 = state_19814;(statearr_19833_19846[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19814);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19832;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19847 = state_19814;
state_19814 = G__19847;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19814){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19835))
})();var state__5710__auto__ = (function (){var statearr_19834 = f__5709__auto__.call(null);(statearr_19834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19835);
return statearr_19834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19835))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___19934 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19934,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19934,tc,fc){
return (function (state_19912){var state_val_19913 = (state_19912[(1)]);if((state_val_19913 === (7)))
{var inst_19908 = (state_19912[(2)]);var state_19912__$1 = state_19912;var statearr_19914_19935 = state_19912__$1;(statearr_19914_19935[(2)] = inst_19908);
(statearr_19914_19935[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19913 === (1)))
{var state_19912__$1 = state_19912;var statearr_19915_19936 = state_19912__$1;(statearr_19915_19936[(2)] = null);
(statearr_19915_19936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19913 === (4)))
{var inst_19893 = (state_19912[(7)]);var inst_19893__$1 = (state_19912[(2)]);var inst_19894 = (inst_19893__$1 == null);var state_19912__$1 = (function (){var statearr_19916 = state_19912;(statearr_19916[(7)] = inst_19893__$1);
return statearr_19916;
})();if(cljs.core.truth_(inst_19894))
{var statearr_19917_19937 = state_19912__$1;(statearr_19917_19937[(1)] = (5));
} else
{var statearr_19918_19938 = state_19912__$1;(statearr_19918_19938[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19913 === (6)))
{var inst_19893 = (state_19912[(7)]);var inst_19899 = p.call(null,inst_19893);var state_19912__$1 = state_19912;if(cljs.core.truth_(inst_19899))
{var statearr_19919_19939 = state_19912__$1;(statearr_19919_19939[(1)] = (9));
} else
{var statearr_19920_19940 = state_19912__$1;(statearr_19920_19940[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19913 === (3)))
{var inst_19910 = (state_19912[(2)]);var state_19912__$1 = state_19912;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19912__$1,inst_19910);
} else
{if((state_val_19913 === (2)))
{var state_19912__$1 = state_19912;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19912__$1,(4),ch);
} else
{if((state_val_19913 === (11)))
{var inst_19893 = (state_19912[(7)]);var inst_19903 = (state_19912[(2)]);var state_19912__$1 = state_19912;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19912__$1,(8),inst_19903,inst_19893);
} else
{if((state_val_19913 === (9)))
{var state_19912__$1 = state_19912;var statearr_19921_19941 = state_19912__$1;(statearr_19921_19941[(2)] = tc);
(statearr_19921_19941[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19913 === (5)))
{var inst_19896 = cljs.core.async.close_BANG_.call(null,tc);var inst_19897 = cljs.core.async.close_BANG_.call(null,fc);var state_19912__$1 = (function (){var statearr_19922 = state_19912;(statearr_19922[(8)] = inst_19896);
return statearr_19922;
})();var statearr_19923_19942 = state_19912__$1;(statearr_19923_19942[(2)] = inst_19897);
(statearr_19923_19942[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19913 === (10)))
{var state_19912__$1 = state_19912;var statearr_19924_19943 = state_19912__$1;(statearr_19924_19943[(2)] = fc);
(statearr_19924_19943[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19913 === (8)))
{var inst_19905 = (state_19912[(2)]);var state_19912__$1 = (function (){var statearr_19925 = state_19912;(statearr_19925[(9)] = inst_19905);
return statearr_19925;
})();var statearr_19926_19944 = state_19912__$1;(statearr_19926_19944[(2)] = null);
(statearr_19926_19944[(1)] = (2));
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
});})(c__5708__auto___19934,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___19934,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19930 = [null,null,null,null,null,null,null,null,null,null];(statearr_19930[(0)] = state_machine__5694__auto__);
(statearr_19930[(1)] = (1));
return statearr_19930;
});
var state_machine__5694__auto____1 = (function (state_19912){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19912);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19931){if((e19931 instanceof Object))
{var ex__5697__auto__ = e19931;var statearr_19932_19945 = state_19912;(statearr_19932_19945[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19912);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19931;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19946 = state_19912;
state_19912 = G__19946;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19912){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19934,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_19933 = f__5709__auto__.call(null);(statearr_19933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19934);
return statearr_19933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19934,tc,fc))
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
return (function (state_19993){var state_val_19994 = (state_19993[(1)]);if((state_val_19994 === (7)))
{var inst_19989 = (state_19993[(2)]);var state_19993__$1 = state_19993;var statearr_19995_20011 = state_19993__$1;(statearr_19995_20011[(2)] = inst_19989);
(statearr_19995_20011[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19994 === (6)))
{var inst_19979 = (state_19993[(7)]);var inst_19982 = (state_19993[(8)]);var inst_19986 = f.call(null,inst_19979,inst_19982);var inst_19979__$1 = inst_19986;var state_19993__$1 = (function (){var statearr_19996 = state_19993;(statearr_19996[(7)] = inst_19979__$1);
return statearr_19996;
})();var statearr_19997_20012 = state_19993__$1;(statearr_19997_20012[(2)] = null);
(statearr_19997_20012[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19994 === (5)))
{var inst_19979 = (state_19993[(7)]);var state_19993__$1 = state_19993;var statearr_19998_20013 = state_19993__$1;(statearr_19998_20013[(2)] = inst_19979);
(statearr_19998_20013[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19994 === (4)))
{var inst_19982 = (state_19993[(8)]);var inst_19982__$1 = (state_19993[(2)]);var inst_19983 = (inst_19982__$1 == null);var state_19993__$1 = (function (){var statearr_19999 = state_19993;(statearr_19999[(8)] = inst_19982__$1);
return statearr_19999;
})();if(cljs.core.truth_(inst_19983))
{var statearr_20000_20014 = state_19993__$1;(statearr_20000_20014[(1)] = (5));
} else
{var statearr_20001_20015 = state_19993__$1;(statearr_20001_20015[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19994 === (3)))
{var inst_19991 = (state_19993[(2)]);var state_19993__$1 = state_19993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19993__$1,inst_19991);
} else
{if((state_val_19994 === (2)))
{var state_19993__$1 = state_19993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19993__$1,(4),ch);
} else
{if((state_val_19994 === (1)))
{var inst_19979 = init;var state_19993__$1 = (function (){var statearr_20002 = state_19993;(statearr_20002[(7)] = inst_19979);
return statearr_20002;
})();var statearr_20003_20016 = state_19993__$1;(statearr_20003_20016[(2)] = null);
(statearr_20003_20016[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_20007 = [null,null,null,null,null,null,null,null,null];(statearr_20007[(0)] = state_machine__5694__auto__);
(statearr_20007[(1)] = (1));
return statearr_20007;
});
var state_machine__5694__auto____1 = (function (state_19993){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19993);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20008){if((e20008 instanceof Object))
{var ex__5697__auto__ = e20008;var statearr_20009_20017 = state_19993;(statearr_20009_20017[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19993);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20008;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20018 = state_19993;
state_19993 = G__20018;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19993){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_20010 = f__5709__auto__.call(null);(statearr_20010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_20010;
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
return (function (state_20080){var state_val_20081 = (state_20080[(1)]);if((state_val_20081 === (7)))
{var inst_20061 = (state_20080[(7)]);var inst_20066 = (state_20080[(2)]);var inst_20067 = cljs.core.next.call(null,inst_20061);var inst_20061__$1 = inst_20067;var state_20080__$1 = (function (){var statearr_20082 = state_20080;(statearr_20082[(8)] = inst_20066);
(statearr_20082[(7)] = inst_20061__$1);
return statearr_20082;
})();var statearr_20083_20101 = state_20080__$1;(statearr_20083_20101[(2)] = null);
(statearr_20083_20101[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20081 === (1)))
{var inst_20060 = cljs.core.seq.call(null,coll);var inst_20061 = inst_20060;var state_20080__$1 = (function (){var statearr_20084 = state_20080;(statearr_20084[(7)] = inst_20061);
return statearr_20084;
})();var statearr_20085_20102 = state_20080__$1;(statearr_20085_20102[(2)] = null);
(statearr_20085_20102[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20081 === (4)))
{var inst_20061 = (state_20080[(7)]);var inst_20064 = cljs.core.first.call(null,inst_20061);var state_20080__$1 = state_20080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20080__$1,(7),ch,inst_20064);
} else
{if((state_val_20081 === (6)))
{var inst_20076 = (state_20080[(2)]);var state_20080__$1 = state_20080;var statearr_20086_20103 = state_20080__$1;(statearr_20086_20103[(2)] = inst_20076);
(statearr_20086_20103[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20081 === (3)))
{var inst_20078 = (state_20080[(2)]);var state_20080__$1 = state_20080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20080__$1,inst_20078);
} else
{if((state_val_20081 === (2)))
{var inst_20061 = (state_20080[(7)]);var state_20080__$1 = state_20080;if(cljs.core.truth_(inst_20061))
{var statearr_20087_20104 = state_20080__$1;(statearr_20087_20104[(1)] = (4));
} else
{var statearr_20088_20105 = state_20080__$1;(statearr_20088_20105[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20081 === (9)))
{var state_20080__$1 = state_20080;var statearr_20089_20106 = state_20080__$1;(statearr_20089_20106[(2)] = null);
(statearr_20089_20106[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20081 === (5)))
{var state_20080__$1 = state_20080;if(cljs.core.truth_(close_QMARK_))
{var statearr_20090_20107 = state_20080__$1;(statearr_20090_20107[(1)] = (8));
} else
{var statearr_20091_20108 = state_20080__$1;(statearr_20091_20108[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20081 === (10)))
{var inst_20074 = (state_20080[(2)]);var state_20080__$1 = state_20080;var statearr_20092_20109 = state_20080__$1;(statearr_20092_20109[(2)] = inst_20074);
(statearr_20092_20109[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20081 === (8)))
{var inst_20071 = cljs.core.async.close_BANG_.call(null,ch);var state_20080__$1 = state_20080;var statearr_20093_20110 = state_20080__$1;(statearr_20093_20110[(2)] = inst_20071);
(statearr_20093_20110[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_20097 = [null,null,null,null,null,null,null,null,null];(statearr_20097[(0)] = state_machine__5694__auto__);
(statearr_20097[(1)] = (1));
return statearr_20097;
});
var state_machine__5694__auto____1 = (function (state_20080){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20080);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20098){if((e20098 instanceof Object))
{var ex__5697__auto__ = e20098;var statearr_20099_20111 = state_20080;(statearr_20099_20111[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20080);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20098;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20112 = state_20080;
state_20080 = G__20112;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20080){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_20100 = f__5709__auto__.call(null);(statearr_20100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_20100;
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
cljs.core.async.Mux = (function (){var obj20114 = {};return obj20114;
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
cljs.core.async.Mult = (function (){var obj20116 = {};return obj20116;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20340 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20340 = (function (cs,ch,mult,meta20341){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20341 = meta20341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20340.cljs$lang$type = true;
cljs.core.async.t20340.cljs$lang$ctorStr = "cljs.core.async/t20340";
cljs.core.async.t20340.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t20340");
});})(cs))
;
cljs.core.async.t20340.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20340.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20340.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20340.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20340.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20342){var self__ = this;
var _20342__$1 = this;return self__.meta20341;
});})(cs))
;
cljs.core.async.t20340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20342,meta20341__$1){var self__ = this;
var _20342__$1 = this;return (new cljs.core.async.t20340(self__.cs,self__.ch,self__.mult,meta20341__$1));
});})(cs))
;
cljs.core.async.__GT_t20340 = ((function (cs){
return (function __GT_t20340(cs__$1,ch__$1,mult__$1,meta20341){return (new cljs.core.async.t20340(cs__$1,ch__$1,mult__$1,meta20341));
});})(cs))
;
}
return (new cljs.core.async.t20340(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___20563 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20563,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20563,cs,m,dchan,dctr,done){
return (function (state_20477){var state_val_20478 = (state_20477[(1)]);if((state_val_20478 === (7)))
{var inst_20473 = (state_20477[(2)]);var state_20477__$1 = state_20477;var statearr_20479_20564 = state_20477__$1;(statearr_20479_20564[(2)] = inst_20473);
(statearr_20479_20564[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (20)))
{var inst_20374 = (state_20477[(7)]);var inst_20384 = cljs.core.first.call(null,inst_20374);var inst_20385 = cljs.core.nth.call(null,inst_20384,(0),null);var inst_20386 = cljs.core.nth.call(null,inst_20384,(1),null);var state_20477__$1 = (function (){var statearr_20480 = state_20477;(statearr_20480[(8)] = inst_20385);
return statearr_20480;
})();if(cljs.core.truth_(inst_20386))
{var statearr_20481_20565 = state_20477__$1;(statearr_20481_20565[(1)] = (22));
} else
{var statearr_20482_20566 = state_20477__$1;(statearr_20482_20566[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (27)))
{var inst_20416 = (state_20477[(9)]);var inst_20414 = (state_20477[(10)]);var inst_20421 = cljs.core._nth.call(null,inst_20414,inst_20416);var state_20477__$1 = (function (){var statearr_20483 = state_20477;(statearr_20483[(11)] = inst_20421);
return statearr_20483;
})();var statearr_20484_20567 = state_20477__$1;(statearr_20484_20567[(2)] = null);
(statearr_20484_20567[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (1)))
{var state_20477__$1 = state_20477;var statearr_20485_20568 = state_20477__$1;(statearr_20485_20568[(2)] = null);
(statearr_20485_20568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (24)))
{var inst_20374 = (state_20477[(7)]);var inst_20391 = (state_20477[(2)]);var inst_20392 = cljs.core.next.call(null,inst_20374);var inst_20354 = inst_20392;var inst_20355 = null;var inst_20356 = (0);var inst_20357 = (0);var state_20477__$1 = (function (){var statearr_20486 = state_20477;(statearr_20486[(12)] = inst_20391);
(statearr_20486[(13)] = inst_20354);
(statearr_20486[(14)] = inst_20357);
(statearr_20486[(15)] = inst_20355);
(statearr_20486[(16)] = inst_20356);
return statearr_20486;
})();var statearr_20487_20569 = state_20477__$1;(statearr_20487_20569[(2)] = null);
(statearr_20487_20569[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (39)))
{var inst_20434 = (state_20477[(17)]);var inst_20452 = (state_20477[(2)]);var inst_20453 = cljs.core.next.call(null,inst_20434);var inst_20413 = inst_20453;var inst_20414 = null;var inst_20415 = (0);var inst_20416 = (0);var state_20477__$1 = (function (){var statearr_20491 = state_20477;(statearr_20491[(9)] = inst_20416);
(statearr_20491[(10)] = inst_20414);
(statearr_20491[(18)] = inst_20452);
(statearr_20491[(19)] = inst_20415);
(statearr_20491[(20)] = inst_20413);
return statearr_20491;
})();var statearr_20492_20570 = state_20477__$1;(statearr_20492_20570[(2)] = null);
(statearr_20492_20570[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (4)))
{var inst_20345 = (state_20477[(21)]);var inst_20345__$1 = (state_20477[(2)]);var inst_20346 = (inst_20345__$1 == null);var state_20477__$1 = (function (){var statearr_20493 = state_20477;(statearr_20493[(21)] = inst_20345__$1);
return statearr_20493;
})();if(cljs.core.truth_(inst_20346))
{var statearr_20494_20571 = state_20477__$1;(statearr_20494_20571[(1)] = (5));
} else
{var statearr_20495_20572 = state_20477__$1;(statearr_20495_20572[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (15)))
{var inst_20354 = (state_20477[(13)]);var inst_20357 = (state_20477[(14)]);var inst_20355 = (state_20477[(15)]);var inst_20356 = (state_20477[(16)]);var inst_20370 = (state_20477[(2)]);var inst_20371 = (inst_20357 + (1));var tmp20488 = inst_20354;var tmp20489 = inst_20355;var tmp20490 = inst_20356;var inst_20354__$1 = tmp20488;var inst_20355__$1 = tmp20489;var inst_20356__$1 = tmp20490;var inst_20357__$1 = inst_20371;var state_20477__$1 = (function (){var statearr_20496 = state_20477;(statearr_20496[(22)] = inst_20370);
(statearr_20496[(13)] = inst_20354__$1);
(statearr_20496[(14)] = inst_20357__$1);
(statearr_20496[(15)] = inst_20355__$1);
(statearr_20496[(16)] = inst_20356__$1);
return statearr_20496;
})();var statearr_20497_20573 = state_20477__$1;(statearr_20497_20573[(2)] = null);
(statearr_20497_20573[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (21)))
{var inst_20395 = (state_20477[(2)]);var state_20477__$1 = state_20477;var statearr_20498_20574 = state_20477__$1;(statearr_20498_20574[(2)] = inst_20395);
(statearr_20498_20574[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (31)))
{var inst_20421 = (state_20477[(11)]);var inst_20422 = (state_20477[(2)]);var inst_20423 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20424 = cljs.core.async.untap_STAR_.call(null,m,inst_20421);var state_20477__$1 = (function (){var statearr_20499 = state_20477;(statearr_20499[(23)] = inst_20423);
(statearr_20499[(24)] = inst_20422);
return statearr_20499;
})();var statearr_20500_20575 = state_20477__$1;(statearr_20500_20575[(2)] = inst_20424);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20477__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (32)))
{var inst_20345 = (state_20477[(21)]);var inst_20421 = (state_20477[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20477,(31),Object,null,(30));var inst_20428 = cljs.core.async.put_BANG_.call(null,inst_20421,inst_20345,done);var state_20477__$1 = state_20477;var statearr_20501_20576 = state_20477__$1;(statearr_20501_20576[(2)] = inst_20428);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20477__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (40)))
{var inst_20443 = (state_20477[(25)]);var inst_20444 = (state_20477[(2)]);var inst_20445 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20446 = cljs.core.async.untap_STAR_.call(null,m,inst_20443);var state_20477__$1 = (function (){var statearr_20502 = state_20477;(statearr_20502[(26)] = inst_20444);
(statearr_20502[(27)] = inst_20445);
return statearr_20502;
})();var statearr_20503_20577 = state_20477__$1;(statearr_20503_20577[(2)] = inst_20446);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20477__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (33)))
{var inst_20434 = (state_20477[(17)]);var inst_20436 = cljs.core.chunked_seq_QMARK_.call(null,inst_20434);var state_20477__$1 = state_20477;if(inst_20436)
{var statearr_20504_20578 = state_20477__$1;(statearr_20504_20578[(1)] = (36));
} else
{var statearr_20505_20579 = state_20477__$1;(statearr_20505_20579[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (13)))
{var inst_20364 = (state_20477[(28)]);var inst_20367 = cljs.core.async.close_BANG_.call(null,inst_20364);var state_20477__$1 = state_20477;var statearr_20506_20580 = state_20477__$1;(statearr_20506_20580[(2)] = inst_20367);
(statearr_20506_20580[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (22)))
{var inst_20385 = (state_20477[(8)]);var inst_20388 = cljs.core.async.close_BANG_.call(null,inst_20385);var state_20477__$1 = state_20477;var statearr_20507_20581 = state_20477__$1;(statearr_20507_20581[(2)] = inst_20388);
(statearr_20507_20581[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (36)))
{var inst_20434 = (state_20477[(17)]);var inst_20438 = cljs.core.chunk_first.call(null,inst_20434);var inst_20439 = cljs.core.chunk_rest.call(null,inst_20434);var inst_20440 = cljs.core.count.call(null,inst_20438);var inst_20413 = inst_20439;var inst_20414 = inst_20438;var inst_20415 = inst_20440;var inst_20416 = (0);var state_20477__$1 = (function (){var statearr_20508 = state_20477;(statearr_20508[(9)] = inst_20416);
(statearr_20508[(10)] = inst_20414);
(statearr_20508[(19)] = inst_20415);
(statearr_20508[(20)] = inst_20413);
return statearr_20508;
})();var statearr_20509_20582 = state_20477__$1;(statearr_20509_20582[(2)] = null);
(statearr_20509_20582[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (41)))
{var inst_20345 = (state_20477[(21)]);var inst_20443 = (state_20477[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20477,(40),Object,null,(39));var inst_20450 = cljs.core.async.put_BANG_.call(null,inst_20443,inst_20345,done);var state_20477__$1 = state_20477;var statearr_20510_20583 = state_20477__$1;(statearr_20510_20583[(2)] = inst_20450);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20477__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (43)))
{var state_20477__$1 = state_20477;var statearr_20511_20584 = state_20477__$1;(statearr_20511_20584[(2)] = null);
(statearr_20511_20584[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (29)))
{var inst_20461 = (state_20477[(2)]);var state_20477__$1 = state_20477;var statearr_20512_20585 = state_20477__$1;(statearr_20512_20585[(2)] = inst_20461);
(statearr_20512_20585[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (44)))
{var inst_20470 = (state_20477[(2)]);var state_20477__$1 = (function (){var statearr_20513 = state_20477;(statearr_20513[(29)] = inst_20470);
return statearr_20513;
})();var statearr_20514_20586 = state_20477__$1;(statearr_20514_20586[(2)] = null);
(statearr_20514_20586[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (6)))
{var inst_20405 = (state_20477[(30)]);var inst_20404 = cljs.core.deref.call(null,cs);var inst_20405__$1 = cljs.core.keys.call(null,inst_20404);var inst_20406 = cljs.core.count.call(null,inst_20405__$1);var inst_20407 = cljs.core.reset_BANG_.call(null,dctr,inst_20406);var inst_20412 = cljs.core.seq.call(null,inst_20405__$1);var inst_20413 = inst_20412;var inst_20414 = null;var inst_20415 = (0);var inst_20416 = (0);var state_20477__$1 = (function (){var statearr_20515 = state_20477;(statearr_20515[(31)] = inst_20407);
(statearr_20515[(9)] = inst_20416);
(statearr_20515[(10)] = inst_20414);
(statearr_20515[(30)] = inst_20405__$1);
(statearr_20515[(19)] = inst_20415);
(statearr_20515[(20)] = inst_20413);
return statearr_20515;
})();var statearr_20516_20587 = state_20477__$1;(statearr_20516_20587[(2)] = null);
(statearr_20516_20587[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (28)))
{var inst_20434 = (state_20477[(17)]);var inst_20413 = (state_20477[(20)]);var inst_20434__$1 = cljs.core.seq.call(null,inst_20413);var state_20477__$1 = (function (){var statearr_20517 = state_20477;(statearr_20517[(17)] = inst_20434__$1);
return statearr_20517;
})();if(inst_20434__$1)
{var statearr_20518_20588 = state_20477__$1;(statearr_20518_20588[(1)] = (33));
} else
{var statearr_20519_20589 = state_20477__$1;(statearr_20519_20589[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (25)))
{var inst_20416 = (state_20477[(9)]);var inst_20415 = (state_20477[(19)]);var inst_20418 = (inst_20416 < inst_20415);var inst_20419 = inst_20418;var state_20477__$1 = state_20477;if(cljs.core.truth_(inst_20419))
{var statearr_20520_20590 = state_20477__$1;(statearr_20520_20590[(1)] = (27));
} else
{var statearr_20521_20591 = state_20477__$1;(statearr_20521_20591[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (34)))
{var state_20477__$1 = state_20477;var statearr_20522_20592 = state_20477__$1;(statearr_20522_20592[(2)] = null);
(statearr_20522_20592[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (17)))
{var state_20477__$1 = state_20477;var statearr_20523_20593 = state_20477__$1;(statearr_20523_20593[(2)] = null);
(statearr_20523_20593[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (3)))
{var inst_20475 = (state_20477[(2)]);var state_20477__$1 = state_20477;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20477__$1,inst_20475);
} else
{if((state_val_20478 === (12)))
{var inst_20400 = (state_20477[(2)]);var state_20477__$1 = state_20477;var statearr_20524_20594 = state_20477__$1;(statearr_20524_20594[(2)] = inst_20400);
(statearr_20524_20594[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (2)))
{var state_20477__$1 = state_20477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20477__$1,(4),ch);
} else
{if((state_val_20478 === (23)))
{var state_20477__$1 = state_20477;var statearr_20525_20595 = state_20477__$1;(statearr_20525_20595[(2)] = null);
(statearr_20525_20595[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (35)))
{var inst_20459 = (state_20477[(2)]);var state_20477__$1 = state_20477;var statearr_20526_20596 = state_20477__$1;(statearr_20526_20596[(2)] = inst_20459);
(statearr_20526_20596[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (19)))
{var inst_20374 = (state_20477[(7)]);var inst_20378 = cljs.core.chunk_first.call(null,inst_20374);var inst_20379 = cljs.core.chunk_rest.call(null,inst_20374);var inst_20380 = cljs.core.count.call(null,inst_20378);var inst_20354 = inst_20379;var inst_20355 = inst_20378;var inst_20356 = inst_20380;var inst_20357 = (0);var state_20477__$1 = (function (){var statearr_20527 = state_20477;(statearr_20527[(13)] = inst_20354);
(statearr_20527[(14)] = inst_20357);
(statearr_20527[(15)] = inst_20355);
(statearr_20527[(16)] = inst_20356);
return statearr_20527;
})();var statearr_20528_20597 = state_20477__$1;(statearr_20528_20597[(2)] = null);
(statearr_20528_20597[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (11)))
{var inst_20354 = (state_20477[(13)]);var inst_20374 = (state_20477[(7)]);var inst_20374__$1 = cljs.core.seq.call(null,inst_20354);var state_20477__$1 = (function (){var statearr_20529 = state_20477;(statearr_20529[(7)] = inst_20374__$1);
return statearr_20529;
})();if(inst_20374__$1)
{var statearr_20530_20598 = state_20477__$1;(statearr_20530_20598[(1)] = (16));
} else
{var statearr_20531_20599 = state_20477__$1;(statearr_20531_20599[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (9)))
{var inst_20402 = (state_20477[(2)]);var state_20477__$1 = state_20477;var statearr_20532_20600 = state_20477__$1;(statearr_20532_20600[(2)] = inst_20402);
(statearr_20532_20600[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (5)))
{var inst_20352 = cljs.core.deref.call(null,cs);var inst_20353 = cljs.core.seq.call(null,inst_20352);var inst_20354 = inst_20353;var inst_20355 = null;var inst_20356 = (0);var inst_20357 = (0);var state_20477__$1 = (function (){var statearr_20533 = state_20477;(statearr_20533[(13)] = inst_20354);
(statearr_20533[(14)] = inst_20357);
(statearr_20533[(15)] = inst_20355);
(statearr_20533[(16)] = inst_20356);
return statearr_20533;
})();var statearr_20534_20601 = state_20477__$1;(statearr_20534_20601[(2)] = null);
(statearr_20534_20601[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (14)))
{var state_20477__$1 = state_20477;var statearr_20535_20602 = state_20477__$1;(statearr_20535_20602[(2)] = null);
(statearr_20535_20602[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (45)))
{var inst_20467 = (state_20477[(2)]);var state_20477__$1 = state_20477;var statearr_20536_20603 = state_20477__$1;(statearr_20536_20603[(2)] = inst_20467);
(statearr_20536_20603[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (26)))
{var inst_20405 = (state_20477[(30)]);var inst_20463 = (state_20477[(2)]);var inst_20464 = cljs.core.seq.call(null,inst_20405);var state_20477__$1 = (function (){var statearr_20537 = state_20477;(statearr_20537[(32)] = inst_20463);
return statearr_20537;
})();if(inst_20464)
{var statearr_20538_20604 = state_20477__$1;(statearr_20538_20604[(1)] = (42));
} else
{var statearr_20539_20605 = state_20477__$1;(statearr_20539_20605[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (16)))
{var inst_20374 = (state_20477[(7)]);var inst_20376 = cljs.core.chunked_seq_QMARK_.call(null,inst_20374);var state_20477__$1 = state_20477;if(inst_20376)
{var statearr_20543_20606 = state_20477__$1;(statearr_20543_20606[(1)] = (19));
} else
{var statearr_20544_20607 = state_20477__$1;(statearr_20544_20607[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (38)))
{var inst_20456 = (state_20477[(2)]);var state_20477__$1 = state_20477;var statearr_20545_20608 = state_20477__$1;(statearr_20545_20608[(2)] = inst_20456);
(statearr_20545_20608[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (30)))
{var inst_20416 = (state_20477[(9)]);var inst_20414 = (state_20477[(10)]);var inst_20415 = (state_20477[(19)]);var inst_20413 = (state_20477[(20)]);var inst_20430 = (state_20477[(2)]);var inst_20431 = (inst_20416 + (1));var tmp20540 = inst_20414;var tmp20541 = inst_20415;var tmp20542 = inst_20413;var inst_20413__$1 = tmp20542;var inst_20414__$1 = tmp20540;var inst_20415__$1 = tmp20541;var inst_20416__$1 = inst_20431;var state_20477__$1 = (function (){var statearr_20546 = state_20477;(statearr_20546[(33)] = inst_20430);
(statearr_20546[(9)] = inst_20416__$1);
(statearr_20546[(10)] = inst_20414__$1);
(statearr_20546[(19)] = inst_20415__$1);
(statearr_20546[(20)] = inst_20413__$1);
return statearr_20546;
})();var statearr_20547_20609 = state_20477__$1;(statearr_20547_20609[(2)] = null);
(statearr_20547_20609[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (10)))
{var inst_20357 = (state_20477[(14)]);var inst_20355 = (state_20477[(15)]);var inst_20363 = cljs.core._nth.call(null,inst_20355,inst_20357);var inst_20364 = cljs.core.nth.call(null,inst_20363,(0),null);var inst_20365 = cljs.core.nth.call(null,inst_20363,(1),null);var state_20477__$1 = (function (){var statearr_20548 = state_20477;(statearr_20548[(28)] = inst_20364);
return statearr_20548;
})();if(cljs.core.truth_(inst_20365))
{var statearr_20549_20610 = state_20477__$1;(statearr_20549_20610[(1)] = (13));
} else
{var statearr_20550_20611 = state_20477__$1;(statearr_20550_20611[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (18)))
{var inst_20398 = (state_20477[(2)]);var state_20477__$1 = state_20477;var statearr_20551_20612 = state_20477__$1;(statearr_20551_20612[(2)] = inst_20398);
(statearr_20551_20612[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (42)))
{var state_20477__$1 = state_20477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20477__$1,(45),dchan);
} else
{if((state_val_20478 === (37)))
{var inst_20434 = (state_20477[(17)]);var inst_20443 = cljs.core.first.call(null,inst_20434);var state_20477__$1 = (function (){var statearr_20552 = state_20477;(statearr_20552[(25)] = inst_20443);
return statearr_20552;
})();var statearr_20553_20613 = state_20477__$1;(statearr_20553_20613[(2)] = null);
(statearr_20553_20613[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20478 === (8)))
{var inst_20357 = (state_20477[(14)]);var inst_20356 = (state_20477[(16)]);var inst_20359 = (inst_20357 < inst_20356);var inst_20360 = inst_20359;var state_20477__$1 = state_20477;if(cljs.core.truth_(inst_20360))
{var statearr_20554_20614 = state_20477__$1;(statearr_20554_20614[(1)] = (10));
} else
{var statearr_20555_20615 = state_20477__$1;(statearr_20555_20615[(1)] = (11));
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
});})(c__5708__auto___20563,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___20563,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20559[(0)] = state_machine__5694__auto__);
(statearr_20559[(1)] = (1));
return statearr_20559;
});
var state_machine__5694__auto____1 = (function (state_20477){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20477);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20560){if((e20560 instanceof Object))
{var ex__5697__auto__ = e20560;var statearr_20561_20616 = state_20477;(statearr_20561_20616[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20477);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20560;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20617 = state_20477;
state_20477 = G__20617;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20477){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20563,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_20562 = f__5709__auto__.call(null);(statearr_20562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20563);
return statearr_20562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20563,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj20619 = {};return obj20619;
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
;var m = (function (){if(typeof cljs.core.async.t20729 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20729 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20730){
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
this.meta20730 = meta20730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20729.cljs$lang$type = true;
cljs.core.async.t20729.cljs$lang$ctorStr = "cljs.core.async/t20729";
cljs.core.async.t20729.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t20729");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20729.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20729.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20729.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20729.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20729.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20729.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20729.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20731){var self__ = this;
var _20731__$1 = this;return self__.meta20730;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20731,meta20730__$1){var self__ = this;
var _20731__$1 = this;return (new cljs.core.async.t20729(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20730__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20729 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20729(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20730){return (new cljs.core.async.t20729(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20730));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20729(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___20838 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20796){var state_val_20797 = (state_20796[(1)]);if((state_val_20797 === (7)))
{var inst_20745 = (state_20796[(7)]);var inst_20750 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20745);var state_20796__$1 = state_20796;var statearr_20798_20839 = state_20796__$1;(statearr_20798_20839[(2)] = inst_20750);
(statearr_20798_20839[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (20)))
{var inst_20760 = (state_20796[(8)]);var state_20796__$1 = state_20796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20796__$1,(23),out,inst_20760);
} else
{if((state_val_20797 === (1)))
{var inst_20735 = (state_20796[(9)]);var inst_20735__$1 = calc_state.call(null);var inst_20736 = cljs.core.seq_QMARK_.call(null,inst_20735__$1);var state_20796__$1 = (function (){var statearr_20799 = state_20796;(statearr_20799[(9)] = inst_20735__$1);
return statearr_20799;
})();if(inst_20736)
{var statearr_20800_20840 = state_20796__$1;(statearr_20800_20840[(1)] = (2));
} else
{var statearr_20801_20841 = state_20796__$1;(statearr_20801_20841[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (4)))
{var inst_20735 = (state_20796[(9)]);var inst_20741 = (state_20796[(2)]);var inst_20742 = cljs.core.get.call(null,inst_20741,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20743 = cljs.core.get.call(null,inst_20741,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20744 = cljs.core.get.call(null,inst_20741,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_20745 = inst_20735;var state_20796__$1 = (function (){var statearr_20802 = state_20796;(statearr_20802[(7)] = inst_20745);
(statearr_20802[(10)] = inst_20742);
(statearr_20802[(11)] = inst_20744);
(statearr_20802[(12)] = inst_20743);
return statearr_20802;
})();var statearr_20803_20842 = state_20796__$1;(statearr_20803_20842[(2)] = null);
(statearr_20803_20842[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (15)))
{var state_20796__$1 = state_20796;var statearr_20804_20843 = state_20796__$1;(statearr_20804_20843[(2)] = null);
(statearr_20804_20843[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (21)))
{var state_20796__$1 = state_20796;var statearr_20805_20844 = state_20796__$1;(statearr_20805_20844[(2)] = null);
(statearr_20805_20844[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (13)))
{var inst_20792 = (state_20796[(2)]);var state_20796__$1 = state_20796;var statearr_20806_20845 = state_20796__$1;(statearr_20806_20845[(2)] = inst_20792);
(statearr_20806_20845[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (22)))
{var inst_20753 = (state_20796[(13)]);var inst_20789 = (state_20796[(2)]);var inst_20745 = inst_20753;var state_20796__$1 = (function (){var statearr_20807 = state_20796;(statearr_20807[(7)] = inst_20745);
(statearr_20807[(14)] = inst_20789);
return statearr_20807;
})();var statearr_20808_20846 = state_20796__$1;(statearr_20808_20846[(2)] = null);
(statearr_20808_20846[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (6)))
{var inst_20794 = (state_20796[(2)]);var state_20796__$1 = state_20796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20796__$1,inst_20794);
} else
{if((state_val_20797 === (17)))
{var inst_20775 = (state_20796[(15)]);var state_20796__$1 = state_20796;var statearr_20809_20847 = state_20796__$1;(statearr_20809_20847[(2)] = inst_20775);
(statearr_20809_20847[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (3)))
{var inst_20735 = (state_20796[(9)]);var state_20796__$1 = state_20796;var statearr_20810_20848 = state_20796__$1;(statearr_20810_20848[(2)] = inst_20735);
(statearr_20810_20848[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (12)))
{var inst_20756 = (state_20796[(16)]);var inst_20775 = (state_20796[(15)]);var inst_20761 = (state_20796[(17)]);var inst_20775__$1 = inst_20756.call(null,inst_20761);var state_20796__$1 = (function (){var statearr_20811 = state_20796;(statearr_20811[(15)] = inst_20775__$1);
return statearr_20811;
})();if(cljs.core.truth_(inst_20775__$1))
{var statearr_20812_20849 = state_20796__$1;(statearr_20812_20849[(1)] = (17));
} else
{var statearr_20813_20850 = state_20796__$1;(statearr_20813_20850[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (2)))
{var inst_20735 = (state_20796[(9)]);var inst_20738 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20735);var state_20796__$1 = state_20796;var statearr_20814_20851 = state_20796__$1;(statearr_20814_20851[(2)] = inst_20738);
(statearr_20814_20851[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (23)))
{var inst_20786 = (state_20796[(2)]);var state_20796__$1 = state_20796;var statearr_20815_20852 = state_20796__$1;(statearr_20815_20852[(2)] = inst_20786);
(statearr_20815_20852[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (19)))
{var inst_20783 = (state_20796[(2)]);var state_20796__$1 = state_20796;if(cljs.core.truth_(inst_20783))
{var statearr_20816_20853 = state_20796__$1;(statearr_20816_20853[(1)] = (20));
} else
{var statearr_20817_20854 = state_20796__$1;(statearr_20817_20854[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (11)))
{var inst_20760 = (state_20796[(8)]);var inst_20766 = (inst_20760 == null);var state_20796__$1 = state_20796;if(cljs.core.truth_(inst_20766))
{var statearr_20818_20855 = state_20796__$1;(statearr_20818_20855[(1)] = (14));
} else
{var statearr_20819_20856 = state_20796__$1;(statearr_20819_20856[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (9)))
{var inst_20753 = (state_20796[(13)]);var inst_20753__$1 = (state_20796[(2)]);var inst_20754 = cljs.core.get.call(null,inst_20753__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20755 = cljs.core.get.call(null,inst_20753__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20756 = cljs.core.get.call(null,inst_20753__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_20796__$1 = (function (){var statearr_20820 = state_20796;(statearr_20820[(16)] = inst_20756);
(statearr_20820[(13)] = inst_20753__$1);
(statearr_20820[(18)] = inst_20755);
return statearr_20820;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20796__$1,(10),inst_20754);
} else
{if((state_val_20797 === (5)))
{var inst_20745 = (state_20796[(7)]);var inst_20748 = cljs.core.seq_QMARK_.call(null,inst_20745);var state_20796__$1 = state_20796;if(inst_20748)
{var statearr_20821_20857 = state_20796__$1;(statearr_20821_20857[(1)] = (7));
} else
{var statearr_20822_20858 = state_20796__$1;(statearr_20822_20858[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (14)))
{var inst_20761 = (state_20796[(17)]);var inst_20768 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20761);var state_20796__$1 = state_20796;var statearr_20823_20859 = state_20796__$1;(statearr_20823_20859[(2)] = inst_20768);
(statearr_20823_20859[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (16)))
{var inst_20771 = (state_20796[(2)]);var inst_20772 = calc_state.call(null);var inst_20745 = inst_20772;var state_20796__$1 = (function (){var statearr_20824 = state_20796;(statearr_20824[(19)] = inst_20771);
(statearr_20824[(7)] = inst_20745);
return statearr_20824;
})();var statearr_20825_20860 = state_20796__$1;(statearr_20825_20860[(2)] = null);
(statearr_20825_20860[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (10)))
{var inst_20761 = (state_20796[(17)]);var inst_20760 = (state_20796[(8)]);var inst_20759 = (state_20796[(2)]);var inst_20760__$1 = cljs.core.nth.call(null,inst_20759,(0),null);var inst_20761__$1 = cljs.core.nth.call(null,inst_20759,(1),null);var inst_20762 = (inst_20760__$1 == null);var inst_20763 = cljs.core._EQ_.call(null,inst_20761__$1,change);var inst_20764 = (inst_20762) || (inst_20763);var state_20796__$1 = (function (){var statearr_20826 = state_20796;(statearr_20826[(17)] = inst_20761__$1);
(statearr_20826[(8)] = inst_20760__$1);
return statearr_20826;
})();if(cljs.core.truth_(inst_20764))
{var statearr_20827_20861 = state_20796__$1;(statearr_20827_20861[(1)] = (11));
} else
{var statearr_20828_20862 = state_20796__$1;(statearr_20828_20862[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (18)))
{var inst_20756 = (state_20796[(16)]);var inst_20755 = (state_20796[(18)]);var inst_20761 = (state_20796[(17)]);var inst_20778 = cljs.core.empty_QMARK_.call(null,inst_20756);var inst_20779 = inst_20755.call(null,inst_20761);var inst_20780 = cljs.core.not.call(null,inst_20779);var inst_20781 = (inst_20778) && (inst_20780);var state_20796__$1 = state_20796;var statearr_20829_20863 = state_20796__$1;(statearr_20829_20863[(2)] = inst_20781);
(statearr_20829_20863[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20797 === (8)))
{var inst_20745 = (state_20796[(7)]);var state_20796__$1 = state_20796;var statearr_20830_20864 = state_20796__$1;(statearr_20830_20864[(2)] = inst_20745);
(statearr_20830_20864[(1)] = (9));
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
});})(c__5708__auto___20838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___20838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20834[(0)] = state_machine__5694__auto__);
(statearr_20834[(1)] = (1));
return statearr_20834;
});
var state_machine__5694__auto____1 = (function (state_20796){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20796);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20835){if((e20835 instanceof Object))
{var ex__5697__auto__ = e20835;var statearr_20836_20865 = state_20796;(statearr_20836_20865[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20796);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20866 = state_20796;
state_20796 = G__20866;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20796){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_20837 = f__5709__auto__.call(null);(statearr_20837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20838);
return statearr_20837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj20868 = {};return obj20868;
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
return (function (p1__20869_SHARP_){if(cljs.core.truth_(p1__20869_SHARP_.call(null,topic)))
{return p1__20869_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20869_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20994 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20994 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20995){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20995 = meta20995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20994.cljs$lang$type = true;
cljs.core.async.t20994.cljs$lang$ctorStr = "cljs.core.async/t20994";
cljs.core.async.t20994.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t20994");
});})(mults,ensure_mult))
;
cljs.core.async.t20994.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20994.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20994.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20994.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20994.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20994.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20996){var self__ = this;
var _20996__$1 = this;return self__.meta20995;
});})(mults,ensure_mult))
;
cljs.core.async.t20994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20996,meta20995__$1){var self__ = this;
var _20996__$1 = this;return (new cljs.core.async.t20994(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20995__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20994 = ((function (mults,ensure_mult){
return (function __GT_t20994(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20995){return (new cljs.core.async.t20994(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20995));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20994(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___21118 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21118,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21118,mults,ensure_mult,p){
return (function (state_21070){var state_val_21071 = (state_21070[(1)]);if((state_val_21071 === (7)))
{var inst_21066 = (state_21070[(2)]);var state_21070__$1 = state_21070;var statearr_21072_21119 = state_21070__$1;(statearr_21072_21119[(2)] = inst_21066);
(statearr_21072_21119[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (20)))
{var state_21070__$1 = state_21070;var statearr_21073_21120 = state_21070__$1;(statearr_21073_21120[(2)] = null);
(statearr_21073_21120[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (1)))
{var state_21070__$1 = state_21070;var statearr_21074_21121 = state_21070__$1;(statearr_21074_21121[(2)] = null);
(statearr_21074_21121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (24)))
{var inst_20999 = (state_21070[(7)]);var inst_21049 = (state_21070[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21070,(23),Object,null,(22));var inst_21056 = cljs.core.async.muxch_STAR_.call(null,inst_21049);var state_21070__$1 = state_21070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21070__$1,(25),inst_21056,inst_20999);
} else
{if((state_val_21071 === (4)))
{var inst_20999 = (state_21070[(7)]);var inst_20999__$1 = (state_21070[(2)]);var inst_21000 = (inst_20999__$1 == null);var state_21070__$1 = (function (){var statearr_21075 = state_21070;(statearr_21075[(7)] = inst_20999__$1);
return statearr_21075;
})();if(cljs.core.truth_(inst_21000))
{var statearr_21076_21122 = state_21070__$1;(statearr_21076_21122[(1)] = (5));
} else
{var statearr_21077_21123 = state_21070__$1;(statearr_21077_21123[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (15)))
{var inst_21041 = (state_21070[(2)]);var state_21070__$1 = state_21070;var statearr_21078_21124 = state_21070__$1;(statearr_21078_21124[(2)] = inst_21041);
(statearr_21078_21124[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (21)))
{var inst_21063 = (state_21070[(2)]);var state_21070__$1 = (function (){var statearr_21079 = state_21070;(statearr_21079[(9)] = inst_21063);
return statearr_21079;
})();var statearr_21080_21125 = state_21070__$1;(statearr_21080_21125[(2)] = null);
(statearr_21080_21125[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (13)))
{var inst_21023 = (state_21070[(10)]);var inst_21025 = cljs.core.chunked_seq_QMARK_.call(null,inst_21023);var state_21070__$1 = state_21070;if(inst_21025)
{var statearr_21081_21126 = state_21070__$1;(statearr_21081_21126[(1)] = (16));
} else
{var statearr_21082_21127 = state_21070__$1;(statearr_21082_21127[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (22)))
{var inst_21060 = (state_21070[(2)]);var state_21070__$1 = state_21070;var statearr_21083_21128 = state_21070__$1;(statearr_21083_21128[(2)] = inst_21060);
(statearr_21083_21128[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (6)))
{var inst_20999 = (state_21070[(7)]);var inst_21047 = (state_21070[(11)]);var inst_21049 = (state_21070[(8)]);var inst_21047__$1 = topic_fn.call(null,inst_20999);var inst_21048 = cljs.core.deref.call(null,mults);var inst_21049__$1 = cljs.core.get.call(null,inst_21048,inst_21047__$1);var state_21070__$1 = (function (){var statearr_21084 = state_21070;(statearr_21084[(11)] = inst_21047__$1);
(statearr_21084[(8)] = inst_21049__$1);
return statearr_21084;
})();if(cljs.core.truth_(inst_21049__$1))
{var statearr_21085_21129 = state_21070__$1;(statearr_21085_21129[(1)] = (19));
} else
{var statearr_21086_21130 = state_21070__$1;(statearr_21086_21130[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (25)))
{var inst_21058 = (state_21070[(2)]);var state_21070__$1 = state_21070;var statearr_21087_21131 = state_21070__$1;(statearr_21087_21131[(2)] = inst_21058);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21070__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (17)))
{var inst_21023 = (state_21070[(10)]);var inst_21032 = cljs.core.first.call(null,inst_21023);var inst_21033 = cljs.core.async.muxch_STAR_.call(null,inst_21032);var inst_21034 = cljs.core.async.close_BANG_.call(null,inst_21033);var inst_21035 = cljs.core.next.call(null,inst_21023);var inst_21009 = inst_21035;var inst_21010 = null;var inst_21011 = (0);var inst_21012 = (0);var state_21070__$1 = (function (){var statearr_21088 = state_21070;(statearr_21088[(12)] = inst_21009);
(statearr_21088[(13)] = inst_21034);
(statearr_21088[(14)] = inst_21011);
(statearr_21088[(15)] = inst_21012);
(statearr_21088[(16)] = inst_21010);
return statearr_21088;
})();var statearr_21089_21132 = state_21070__$1;(statearr_21089_21132[(2)] = null);
(statearr_21089_21132[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (3)))
{var inst_21068 = (state_21070[(2)]);var state_21070__$1 = state_21070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21070__$1,inst_21068);
} else
{if((state_val_21071 === (12)))
{var inst_21043 = (state_21070[(2)]);var state_21070__$1 = state_21070;var statearr_21090_21133 = state_21070__$1;(statearr_21090_21133[(2)] = inst_21043);
(statearr_21090_21133[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (2)))
{var state_21070__$1 = state_21070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21070__$1,(4),ch);
} else
{if((state_val_21071 === (23)))
{var inst_21047 = (state_21070[(11)]);var inst_21051 = (state_21070[(2)]);var inst_21052 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21047);var state_21070__$1 = (function (){var statearr_21091 = state_21070;(statearr_21091[(17)] = inst_21051);
return statearr_21091;
})();var statearr_21092_21134 = state_21070__$1;(statearr_21092_21134[(2)] = inst_21052);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21070__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (19)))
{var state_21070__$1 = state_21070;var statearr_21093_21135 = state_21070__$1;(statearr_21093_21135[(2)] = null);
(statearr_21093_21135[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (11)))
{var inst_21009 = (state_21070[(12)]);var inst_21023 = (state_21070[(10)]);var inst_21023__$1 = cljs.core.seq.call(null,inst_21009);var state_21070__$1 = (function (){var statearr_21094 = state_21070;(statearr_21094[(10)] = inst_21023__$1);
return statearr_21094;
})();if(inst_21023__$1)
{var statearr_21095_21136 = state_21070__$1;(statearr_21095_21136[(1)] = (13));
} else
{var statearr_21096_21137 = state_21070__$1;(statearr_21096_21137[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (9)))
{var inst_21045 = (state_21070[(2)]);var state_21070__$1 = state_21070;var statearr_21097_21138 = state_21070__$1;(statearr_21097_21138[(2)] = inst_21045);
(statearr_21097_21138[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (5)))
{var inst_21006 = cljs.core.deref.call(null,mults);var inst_21007 = cljs.core.vals.call(null,inst_21006);var inst_21008 = cljs.core.seq.call(null,inst_21007);var inst_21009 = inst_21008;var inst_21010 = null;var inst_21011 = (0);var inst_21012 = (0);var state_21070__$1 = (function (){var statearr_21098 = state_21070;(statearr_21098[(12)] = inst_21009);
(statearr_21098[(14)] = inst_21011);
(statearr_21098[(15)] = inst_21012);
(statearr_21098[(16)] = inst_21010);
return statearr_21098;
})();var statearr_21099_21139 = state_21070__$1;(statearr_21099_21139[(2)] = null);
(statearr_21099_21139[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (14)))
{var state_21070__$1 = state_21070;var statearr_21103_21140 = state_21070__$1;(statearr_21103_21140[(2)] = null);
(statearr_21103_21140[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (16)))
{var inst_21023 = (state_21070[(10)]);var inst_21027 = cljs.core.chunk_first.call(null,inst_21023);var inst_21028 = cljs.core.chunk_rest.call(null,inst_21023);var inst_21029 = cljs.core.count.call(null,inst_21027);var inst_21009 = inst_21028;var inst_21010 = inst_21027;var inst_21011 = inst_21029;var inst_21012 = (0);var state_21070__$1 = (function (){var statearr_21104 = state_21070;(statearr_21104[(12)] = inst_21009);
(statearr_21104[(14)] = inst_21011);
(statearr_21104[(15)] = inst_21012);
(statearr_21104[(16)] = inst_21010);
return statearr_21104;
})();var statearr_21105_21141 = state_21070__$1;(statearr_21105_21141[(2)] = null);
(statearr_21105_21141[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (10)))
{var inst_21009 = (state_21070[(12)]);var inst_21011 = (state_21070[(14)]);var inst_21012 = (state_21070[(15)]);var inst_21010 = (state_21070[(16)]);var inst_21017 = cljs.core._nth.call(null,inst_21010,inst_21012);var inst_21018 = cljs.core.async.muxch_STAR_.call(null,inst_21017);var inst_21019 = cljs.core.async.close_BANG_.call(null,inst_21018);var inst_21020 = (inst_21012 + (1));var tmp21100 = inst_21009;var tmp21101 = inst_21011;var tmp21102 = inst_21010;var inst_21009__$1 = tmp21100;var inst_21010__$1 = tmp21102;var inst_21011__$1 = tmp21101;var inst_21012__$1 = inst_21020;var state_21070__$1 = (function (){var statearr_21106 = state_21070;(statearr_21106[(12)] = inst_21009__$1);
(statearr_21106[(14)] = inst_21011__$1);
(statearr_21106[(15)] = inst_21012__$1);
(statearr_21106[(16)] = inst_21010__$1);
(statearr_21106[(18)] = inst_21019);
return statearr_21106;
})();var statearr_21107_21142 = state_21070__$1;(statearr_21107_21142[(2)] = null);
(statearr_21107_21142[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (18)))
{var inst_21038 = (state_21070[(2)]);var state_21070__$1 = state_21070;var statearr_21108_21143 = state_21070__$1;(statearr_21108_21143[(2)] = inst_21038);
(statearr_21108_21143[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21071 === (8)))
{var inst_21011 = (state_21070[(14)]);var inst_21012 = (state_21070[(15)]);var inst_21014 = (inst_21012 < inst_21011);var inst_21015 = inst_21014;var state_21070__$1 = state_21070;if(cljs.core.truth_(inst_21015))
{var statearr_21109_21144 = state_21070__$1;(statearr_21109_21144[(1)] = (10));
} else
{var statearr_21110_21145 = state_21070__$1;(statearr_21110_21145[(1)] = (11));
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
});})(c__5708__auto___21118,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___21118,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21114[(0)] = state_machine__5694__auto__);
(statearr_21114[(1)] = (1));
return statearr_21114;
});
var state_machine__5694__auto____1 = (function (state_21070){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21070);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21115){if((e21115 instanceof Object))
{var ex__5697__auto__ = e21115;var statearr_21116_21146 = state_21070;(statearr_21116_21146[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21115;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21147 = state_21070;
state_21070 = G__21147;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21070){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21118,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_21117 = f__5709__auto__.call(null);(statearr_21117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21118);
return statearr_21117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21118,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___21284 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21284,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21284,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21254){var state_val_21255 = (state_21254[(1)]);if((state_val_21255 === (7)))
{var state_21254__$1 = state_21254;var statearr_21256_21285 = state_21254__$1;(statearr_21256_21285[(2)] = null);
(statearr_21256_21285[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (1)))
{var state_21254__$1 = state_21254;var statearr_21257_21286 = state_21254__$1;(statearr_21257_21286[(2)] = null);
(statearr_21257_21286[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (4)))
{var inst_21218 = (state_21254[(7)]);var inst_21220 = (inst_21218 < cnt);var state_21254__$1 = state_21254;if(cljs.core.truth_(inst_21220))
{var statearr_21258_21287 = state_21254__$1;(statearr_21258_21287[(1)] = (6));
} else
{var statearr_21259_21288 = state_21254__$1;(statearr_21259_21288[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (15)))
{var inst_21250 = (state_21254[(2)]);var state_21254__$1 = state_21254;var statearr_21260_21289 = state_21254__$1;(statearr_21260_21289[(2)] = inst_21250);
(statearr_21260_21289[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (13)))
{var inst_21243 = cljs.core.async.close_BANG_.call(null,out);var state_21254__$1 = state_21254;var statearr_21261_21290 = state_21254__$1;(statearr_21261_21290[(2)] = inst_21243);
(statearr_21261_21290[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (6)))
{var state_21254__$1 = state_21254;var statearr_21262_21291 = state_21254__$1;(statearr_21262_21291[(2)] = null);
(statearr_21262_21291[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (3)))
{var inst_21252 = (state_21254[(2)]);var state_21254__$1 = state_21254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21254__$1,inst_21252);
} else
{if((state_val_21255 === (12)))
{var inst_21240 = (state_21254[(8)]);var inst_21240__$1 = (state_21254[(2)]);var inst_21241 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21240__$1);var state_21254__$1 = (function (){var statearr_21263 = state_21254;(statearr_21263[(8)] = inst_21240__$1);
return statearr_21263;
})();if(cljs.core.truth_(inst_21241))
{var statearr_21264_21292 = state_21254__$1;(statearr_21264_21292[(1)] = (13));
} else
{var statearr_21265_21293 = state_21254__$1;(statearr_21265_21293[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (2)))
{var inst_21217 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21218 = (0);var state_21254__$1 = (function (){var statearr_21266 = state_21254;(statearr_21266[(7)] = inst_21218);
(statearr_21266[(9)] = inst_21217);
return statearr_21266;
})();var statearr_21267_21294 = state_21254__$1;(statearr_21267_21294[(2)] = null);
(statearr_21267_21294[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (11)))
{var inst_21218 = (state_21254[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21254,(10),Object,null,(9));var inst_21227 = chs__$1.call(null,inst_21218);var inst_21228 = done.call(null,inst_21218);var inst_21229 = cljs.core.async.take_BANG_.call(null,inst_21227,inst_21228);var state_21254__$1 = state_21254;var statearr_21268_21295 = state_21254__$1;(statearr_21268_21295[(2)] = inst_21229);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21254__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (9)))
{var inst_21218 = (state_21254[(7)]);var inst_21231 = (state_21254[(2)]);var inst_21232 = (inst_21218 + (1));var inst_21218__$1 = inst_21232;var state_21254__$1 = (function (){var statearr_21269 = state_21254;(statearr_21269[(7)] = inst_21218__$1);
(statearr_21269[(10)] = inst_21231);
return statearr_21269;
})();var statearr_21270_21296 = state_21254__$1;(statearr_21270_21296[(2)] = null);
(statearr_21270_21296[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (5)))
{var inst_21238 = (state_21254[(2)]);var state_21254__$1 = (function (){var statearr_21271 = state_21254;(statearr_21271[(11)] = inst_21238);
return statearr_21271;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21254__$1,(12),dchan);
} else
{if((state_val_21255 === (14)))
{var inst_21240 = (state_21254[(8)]);var inst_21245 = cljs.core.apply.call(null,f,inst_21240);var state_21254__$1 = state_21254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21254__$1,(16),out,inst_21245);
} else
{if((state_val_21255 === (16)))
{var inst_21247 = (state_21254[(2)]);var state_21254__$1 = (function (){var statearr_21272 = state_21254;(statearr_21272[(12)] = inst_21247);
return statearr_21272;
})();var statearr_21273_21297 = state_21254__$1;(statearr_21273_21297[(2)] = null);
(statearr_21273_21297[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (10)))
{var inst_21222 = (state_21254[(2)]);var inst_21223 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21254__$1 = (function (){var statearr_21274 = state_21254;(statearr_21274[(13)] = inst_21222);
return statearr_21274;
})();var statearr_21275_21298 = state_21254__$1;(statearr_21275_21298[(2)] = inst_21223);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21254__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (8)))
{var inst_21236 = (state_21254[(2)]);var state_21254__$1 = state_21254;var statearr_21276_21299 = state_21254__$1;(statearr_21276_21299[(2)] = inst_21236);
(statearr_21276_21299[(1)] = (5));
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
});})(c__5708__auto___21284,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___21284,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21280[(0)] = state_machine__5694__auto__);
(statearr_21280[(1)] = (1));
return statearr_21280;
});
var state_machine__5694__auto____1 = (function (state_21254){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21254);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21281){if((e21281 instanceof Object))
{var ex__5697__auto__ = e21281;var statearr_21282_21300 = state_21254;(statearr_21282_21300[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21254);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21281;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21301 = state_21254;
state_21254 = G__21301;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21254){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21284,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_21283 = f__5709__auto__.call(null);(statearr_21283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21284);
return statearr_21283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21284,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21409 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21409,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21409,out){
return (function (state_21385){var state_val_21386 = (state_21385[(1)]);if((state_val_21386 === (7)))
{var inst_21364 = (state_21385[(7)]);var inst_21365 = (state_21385[(8)]);var inst_21364__$1 = (state_21385[(2)]);var inst_21365__$1 = cljs.core.nth.call(null,inst_21364__$1,(0),null);var inst_21366 = cljs.core.nth.call(null,inst_21364__$1,(1),null);var inst_21367 = (inst_21365__$1 == null);var state_21385__$1 = (function (){var statearr_21387 = state_21385;(statearr_21387[(7)] = inst_21364__$1);
(statearr_21387[(9)] = inst_21366);
(statearr_21387[(8)] = inst_21365__$1);
return statearr_21387;
})();if(cljs.core.truth_(inst_21367))
{var statearr_21388_21410 = state_21385__$1;(statearr_21388_21410[(1)] = (8));
} else
{var statearr_21389_21411 = state_21385__$1;(statearr_21389_21411[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21386 === (1)))
{var inst_21356 = cljs.core.vec.call(null,chs);var inst_21357 = inst_21356;var state_21385__$1 = (function (){var statearr_21390 = state_21385;(statearr_21390[(10)] = inst_21357);
return statearr_21390;
})();var statearr_21391_21412 = state_21385__$1;(statearr_21391_21412[(2)] = null);
(statearr_21391_21412[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21386 === (4)))
{var inst_21357 = (state_21385[(10)]);var state_21385__$1 = state_21385;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21385__$1,(7),inst_21357);
} else
{if((state_val_21386 === (6)))
{var inst_21381 = (state_21385[(2)]);var state_21385__$1 = state_21385;var statearr_21392_21413 = state_21385__$1;(statearr_21392_21413[(2)] = inst_21381);
(statearr_21392_21413[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21386 === (3)))
{var inst_21383 = (state_21385[(2)]);var state_21385__$1 = state_21385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21385__$1,inst_21383);
} else
{if((state_val_21386 === (2)))
{var inst_21357 = (state_21385[(10)]);var inst_21359 = cljs.core.count.call(null,inst_21357);var inst_21360 = (inst_21359 > (0));var state_21385__$1 = state_21385;if(cljs.core.truth_(inst_21360))
{var statearr_21394_21414 = state_21385__$1;(statearr_21394_21414[(1)] = (4));
} else
{var statearr_21395_21415 = state_21385__$1;(statearr_21395_21415[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21386 === (11)))
{var inst_21357 = (state_21385[(10)]);var inst_21374 = (state_21385[(2)]);var tmp21393 = inst_21357;var inst_21357__$1 = tmp21393;var state_21385__$1 = (function (){var statearr_21396 = state_21385;(statearr_21396[(10)] = inst_21357__$1);
(statearr_21396[(11)] = inst_21374);
return statearr_21396;
})();var statearr_21397_21416 = state_21385__$1;(statearr_21397_21416[(2)] = null);
(statearr_21397_21416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21386 === (9)))
{var inst_21365 = (state_21385[(8)]);var state_21385__$1 = state_21385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21385__$1,(11),out,inst_21365);
} else
{if((state_val_21386 === (5)))
{var inst_21379 = cljs.core.async.close_BANG_.call(null,out);var state_21385__$1 = state_21385;var statearr_21398_21417 = state_21385__$1;(statearr_21398_21417[(2)] = inst_21379);
(statearr_21398_21417[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21386 === (10)))
{var inst_21377 = (state_21385[(2)]);var state_21385__$1 = state_21385;var statearr_21399_21418 = state_21385__$1;(statearr_21399_21418[(2)] = inst_21377);
(statearr_21399_21418[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21386 === (8)))
{var inst_21364 = (state_21385[(7)]);var inst_21366 = (state_21385[(9)]);var inst_21357 = (state_21385[(10)]);var inst_21365 = (state_21385[(8)]);var inst_21369 = (function (){var c = inst_21366;var v = inst_21365;var vec__21362 = inst_21364;var cs = inst_21357;return ((function (c,v,vec__21362,cs,inst_21364,inst_21366,inst_21357,inst_21365,state_val_21386,c__5708__auto___21409,out){
return (function (p1__21302_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__21302_SHARP_);
});
;})(c,v,vec__21362,cs,inst_21364,inst_21366,inst_21357,inst_21365,state_val_21386,c__5708__auto___21409,out))
})();var inst_21370 = cljs.core.filterv.call(null,inst_21369,inst_21357);var inst_21357__$1 = inst_21370;var state_21385__$1 = (function (){var statearr_21400 = state_21385;(statearr_21400[(10)] = inst_21357__$1);
return statearr_21400;
})();var statearr_21401_21419 = state_21385__$1;(statearr_21401_21419[(2)] = null);
(statearr_21401_21419[(1)] = (2));
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
});})(c__5708__auto___21409,out))
;return ((function (switch__5693__auto__,c__5708__auto___21409,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21405 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21405[(0)] = state_machine__5694__auto__);
(statearr_21405[(1)] = (1));
return statearr_21405;
});
var state_machine__5694__auto____1 = (function (state_21385){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21385);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21406){if((e21406 instanceof Object))
{var ex__5697__auto__ = e21406;var statearr_21407_21420 = state_21385;(statearr_21407_21420[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21385);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21406;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21421 = state_21385;
state_21385 = G__21421;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21385){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21409,out))
})();var state__5710__auto__ = (function (){var statearr_21408 = f__5709__auto__.call(null);(statearr_21408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21409);
return statearr_21408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21409,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21514 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21514,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21514,out){
return (function (state_21491){var state_val_21492 = (state_21491[(1)]);if((state_val_21492 === (7)))
{var inst_21473 = (state_21491[(7)]);var inst_21473__$1 = (state_21491[(2)]);var inst_21474 = (inst_21473__$1 == null);var inst_21475 = cljs.core.not.call(null,inst_21474);var state_21491__$1 = (function (){var statearr_21493 = state_21491;(statearr_21493[(7)] = inst_21473__$1);
return statearr_21493;
})();if(inst_21475)
{var statearr_21494_21515 = state_21491__$1;(statearr_21494_21515[(1)] = (8));
} else
{var statearr_21495_21516 = state_21491__$1;(statearr_21495_21516[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21492 === (1)))
{var inst_21468 = (0);var state_21491__$1 = (function (){var statearr_21496 = state_21491;(statearr_21496[(8)] = inst_21468);
return statearr_21496;
})();var statearr_21497_21517 = state_21491__$1;(statearr_21497_21517[(2)] = null);
(statearr_21497_21517[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21492 === (4)))
{var state_21491__$1 = state_21491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21491__$1,(7),ch);
} else
{if((state_val_21492 === (6)))
{var inst_21486 = (state_21491[(2)]);var state_21491__$1 = state_21491;var statearr_21498_21518 = state_21491__$1;(statearr_21498_21518[(2)] = inst_21486);
(statearr_21498_21518[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21492 === (3)))
{var inst_21488 = (state_21491[(2)]);var inst_21489 = cljs.core.async.close_BANG_.call(null,out);var state_21491__$1 = (function (){var statearr_21499 = state_21491;(statearr_21499[(9)] = inst_21488);
return statearr_21499;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21491__$1,inst_21489);
} else
{if((state_val_21492 === (2)))
{var inst_21468 = (state_21491[(8)]);var inst_21470 = (inst_21468 < n);var state_21491__$1 = state_21491;if(cljs.core.truth_(inst_21470))
{var statearr_21500_21519 = state_21491__$1;(statearr_21500_21519[(1)] = (4));
} else
{var statearr_21501_21520 = state_21491__$1;(statearr_21501_21520[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21492 === (11)))
{var inst_21468 = (state_21491[(8)]);var inst_21478 = (state_21491[(2)]);var inst_21479 = (inst_21468 + (1));var inst_21468__$1 = inst_21479;var state_21491__$1 = (function (){var statearr_21502 = state_21491;(statearr_21502[(8)] = inst_21468__$1);
(statearr_21502[(10)] = inst_21478);
return statearr_21502;
})();var statearr_21503_21521 = state_21491__$1;(statearr_21503_21521[(2)] = null);
(statearr_21503_21521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21492 === (9)))
{var state_21491__$1 = state_21491;var statearr_21504_21522 = state_21491__$1;(statearr_21504_21522[(2)] = null);
(statearr_21504_21522[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21492 === (5)))
{var state_21491__$1 = state_21491;var statearr_21505_21523 = state_21491__$1;(statearr_21505_21523[(2)] = null);
(statearr_21505_21523[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21492 === (10)))
{var inst_21483 = (state_21491[(2)]);var state_21491__$1 = state_21491;var statearr_21506_21524 = state_21491__$1;(statearr_21506_21524[(2)] = inst_21483);
(statearr_21506_21524[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21492 === (8)))
{var inst_21473 = (state_21491[(7)]);var state_21491__$1 = state_21491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21491__$1,(11),out,inst_21473);
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
});})(c__5708__auto___21514,out))
;return ((function (switch__5693__auto__,c__5708__auto___21514,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21510 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21510[(0)] = state_machine__5694__auto__);
(statearr_21510[(1)] = (1));
return statearr_21510;
});
var state_machine__5694__auto____1 = (function (state_21491){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21491);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21511){if((e21511 instanceof Object))
{var ex__5697__auto__ = e21511;var statearr_21512_21525 = state_21491;(statearr_21512_21525[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21491);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21511;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21526 = state_21491;
state_21491 = G__21526;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21491){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21514,out))
})();var state__5710__auto__ = (function (){var statearr_21513 = f__5709__auto__.call(null);(statearr_21513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21514);
return statearr_21513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21514,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21623 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21623,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21623,out){
return (function (state_21598){var state_val_21599 = (state_21598[(1)]);if((state_val_21599 === (7)))
{var inst_21593 = (state_21598[(2)]);var state_21598__$1 = state_21598;var statearr_21600_21624 = state_21598__$1;(statearr_21600_21624[(2)] = inst_21593);
(statearr_21600_21624[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21599 === (1)))
{var inst_21575 = null;var state_21598__$1 = (function (){var statearr_21601 = state_21598;(statearr_21601[(7)] = inst_21575);
return statearr_21601;
})();var statearr_21602_21625 = state_21598__$1;(statearr_21602_21625[(2)] = null);
(statearr_21602_21625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21599 === (4)))
{var inst_21578 = (state_21598[(8)]);var inst_21578__$1 = (state_21598[(2)]);var inst_21579 = (inst_21578__$1 == null);var inst_21580 = cljs.core.not.call(null,inst_21579);var state_21598__$1 = (function (){var statearr_21603 = state_21598;(statearr_21603[(8)] = inst_21578__$1);
return statearr_21603;
})();if(inst_21580)
{var statearr_21604_21626 = state_21598__$1;(statearr_21604_21626[(1)] = (5));
} else
{var statearr_21605_21627 = state_21598__$1;(statearr_21605_21627[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21599 === (6)))
{var state_21598__$1 = state_21598;var statearr_21606_21628 = state_21598__$1;(statearr_21606_21628[(2)] = null);
(statearr_21606_21628[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21599 === (3)))
{var inst_21595 = (state_21598[(2)]);var inst_21596 = cljs.core.async.close_BANG_.call(null,out);var state_21598__$1 = (function (){var statearr_21607 = state_21598;(statearr_21607[(9)] = inst_21595);
return statearr_21607;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21598__$1,inst_21596);
} else
{if((state_val_21599 === (2)))
{var state_21598__$1 = state_21598;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21598__$1,(4),ch);
} else
{if((state_val_21599 === (11)))
{var inst_21578 = (state_21598[(8)]);var inst_21587 = (state_21598[(2)]);var inst_21575 = inst_21578;var state_21598__$1 = (function (){var statearr_21608 = state_21598;(statearr_21608[(10)] = inst_21587);
(statearr_21608[(7)] = inst_21575);
return statearr_21608;
})();var statearr_21609_21629 = state_21598__$1;(statearr_21609_21629[(2)] = null);
(statearr_21609_21629[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21599 === (9)))
{var inst_21578 = (state_21598[(8)]);var state_21598__$1 = state_21598;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21598__$1,(11),out,inst_21578);
} else
{if((state_val_21599 === (5)))
{var inst_21578 = (state_21598[(8)]);var inst_21575 = (state_21598[(7)]);var inst_21582 = cljs.core._EQ_.call(null,inst_21578,inst_21575);var state_21598__$1 = state_21598;if(inst_21582)
{var statearr_21611_21630 = state_21598__$1;(statearr_21611_21630[(1)] = (8));
} else
{var statearr_21612_21631 = state_21598__$1;(statearr_21612_21631[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21599 === (10)))
{var inst_21590 = (state_21598[(2)]);var state_21598__$1 = state_21598;var statearr_21613_21632 = state_21598__$1;(statearr_21613_21632[(2)] = inst_21590);
(statearr_21613_21632[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21599 === (8)))
{var inst_21575 = (state_21598[(7)]);var tmp21610 = inst_21575;var inst_21575__$1 = tmp21610;var state_21598__$1 = (function (){var statearr_21614 = state_21598;(statearr_21614[(7)] = inst_21575__$1);
return statearr_21614;
})();var statearr_21615_21633 = state_21598__$1;(statearr_21615_21633[(2)] = null);
(statearr_21615_21633[(1)] = (2));
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
});})(c__5708__auto___21623,out))
;return ((function (switch__5693__auto__,c__5708__auto___21623,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21619 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21619[(0)] = state_machine__5694__auto__);
(statearr_21619[(1)] = (1));
return statearr_21619;
});
var state_machine__5694__auto____1 = (function (state_21598){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21598);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21620){if((e21620 instanceof Object))
{var ex__5697__auto__ = e21620;var statearr_21621_21634 = state_21598;(statearr_21621_21634[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21598);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21620;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21635 = state_21598;
state_21598 = G__21635;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21598){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21623,out))
})();var state__5710__auto__ = (function (){var statearr_21622 = f__5709__auto__.call(null);(statearr_21622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21623);
return statearr_21622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21623,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21770 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21770,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21770,out){
return (function (state_21740){var state_val_21741 = (state_21740[(1)]);if((state_val_21741 === (7)))
{var inst_21736 = (state_21740[(2)]);var state_21740__$1 = state_21740;var statearr_21742_21771 = state_21740__$1;(statearr_21742_21771[(2)] = inst_21736);
(statearr_21742_21771[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21741 === (1)))
{var inst_21703 = (new Array(n));var inst_21704 = inst_21703;var inst_21705 = (0);var state_21740__$1 = (function (){var statearr_21743 = state_21740;(statearr_21743[(7)] = inst_21705);
(statearr_21743[(8)] = inst_21704);
return statearr_21743;
})();var statearr_21744_21772 = state_21740__$1;(statearr_21744_21772[(2)] = null);
(statearr_21744_21772[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21741 === (4)))
{var inst_21708 = (state_21740[(9)]);var inst_21708__$1 = (state_21740[(2)]);var inst_21709 = (inst_21708__$1 == null);var inst_21710 = cljs.core.not.call(null,inst_21709);var state_21740__$1 = (function (){var statearr_21745 = state_21740;(statearr_21745[(9)] = inst_21708__$1);
return statearr_21745;
})();if(inst_21710)
{var statearr_21746_21773 = state_21740__$1;(statearr_21746_21773[(1)] = (5));
} else
{var statearr_21747_21774 = state_21740__$1;(statearr_21747_21774[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21741 === (15)))
{var inst_21730 = (state_21740[(2)]);var state_21740__$1 = state_21740;var statearr_21748_21775 = state_21740__$1;(statearr_21748_21775[(2)] = inst_21730);
(statearr_21748_21775[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21741 === (13)))
{var state_21740__$1 = state_21740;var statearr_21749_21776 = state_21740__$1;(statearr_21749_21776[(2)] = null);
(statearr_21749_21776[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21741 === (6)))
{var inst_21705 = (state_21740[(7)]);var inst_21726 = (inst_21705 > (0));var state_21740__$1 = state_21740;if(cljs.core.truth_(inst_21726))
{var statearr_21750_21777 = state_21740__$1;(statearr_21750_21777[(1)] = (12));
} else
{var statearr_21751_21778 = state_21740__$1;(statearr_21751_21778[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21741 === (3)))
{var inst_21738 = (state_21740[(2)]);var state_21740__$1 = state_21740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21740__$1,inst_21738);
} else
{if((state_val_21741 === (12)))
{var inst_21704 = (state_21740[(8)]);var inst_21728 = cljs.core.vec.call(null,inst_21704);var state_21740__$1 = state_21740;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21740__$1,(15),out,inst_21728);
} else
{if((state_val_21741 === (2)))
{var state_21740__$1 = state_21740;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21740__$1,(4),ch);
} else
{if((state_val_21741 === (11)))
{var inst_21720 = (state_21740[(2)]);var inst_21721 = (new Array(n));var inst_21704 = inst_21721;var inst_21705 = (0);var state_21740__$1 = (function (){var statearr_21752 = state_21740;(statearr_21752[(7)] = inst_21705);
(statearr_21752[(10)] = inst_21720);
(statearr_21752[(8)] = inst_21704);
return statearr_21752;
})();var statearr_21753_21779 = state_21740__$1;(statearr_21753_21779[(2)] = null);
(statearr_21753_21779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21741 === (9)))
{var inst_21704 = (state_21740[(8)]);var inst_21718 = cljs.core.vec.call(null,inst_21704);var state_21740__$1 = state_21740;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21740__$1,(11),out,inst_21718);
} else
{if((state_val_21741 === (5)))
{var inst_21705 = (state_21740[(7)]);var inst_21713 = (state_21740[(11)]);var inst_21708 = (state_21740[(9)]);var inst_21704 = (state_21740[(8)]);var inst_21712 = (inst_21704[inst_21705] = inst_21708);var inst_21713__$1 = (inst_21705 + (1));var inst_21714 = (inst_21713__$1 < n);var state_21740__$1 = (function (){var statearr_21754 = state_21740;(statearr_21754[(11)] = inst_21713__$1);
(statearr_21754[(12)] = inst_21712);
return statearr_21754;
})();if(cljs.core.truth_(inst_21714))
{var statearr_21755_21780 = state_21740__$1;(statearr_21755_21780[(1)] = (8));
} else
{var statearr_21756_21781 = state_21740__$1;(statearr_21756_21781[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21741 === (14)))
{var inst_21733 = (state_21740[(2)]);var inst_21734 = cljs.core.async.close_BANG_.call(null,out);var state_21740__$1 = (function (){var statearr_21758 = state_21740;(statearr_21758[(13)] = inst_21733);
return statearr_21758;
})();var statearr_21759_21782 = state_21740__$1;(statearr_21759_21782[(2)] = inst_21734);
(statearr_21759_21782[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21741 === (10)))
{var inst_21724 = (state_21740[(2)]);var state_21740__$1 = state_21740;var statearr_21760_21783 = state_21740__$1;(statearr_21760_21783[(2)] = inst_21724);
(statearr_21760_21783[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21741 === (8)))
{var inst_21713 = (state_21740[(11)]);var inst_21704 = (state_21740[(8)]);var tmp21757 = inst_21704;var inst_21704__$1 = tmp21757;var inst_21705 = inst_21713;var state_21740__$1 = (function (){var statearr_21761 = state_21740;(statearr_21761[(7)] = inst_21705);
(statearr_21761[(8)] = inst_21704__$1);
return statearr_21761;
})();var statearr_21762_21784 = state_21740__$1;(statearr_21762_21784[(2)] = null);
(statearr_21762_21784[(1)] = (2));
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
});})(c__5708__auto___21770,out))
;return ((function (switch__5693__auto__,c__5708__auto___21770,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21766[(0)] = state_machine__5694__auto__);
(statearr_21766[(1)] = (1));
return statearr_21766;
});
var state_machine__5694__auto____1 = (function (state_21740){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21740);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21767){if((e21767 instanceof Object))
{var ex__5697__auto__ = e21767;var statearr_21768_21785 = state_21740;(statearr_21768_21785[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21740);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21767;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21786 = state_21740;
state_21740 = G__21786;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21740){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21770,out))
})();var state__5710__auto__ = (function (){var statearr_21769 = f__5709__auto__.call(null);(statearr_21769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21770);
return statearr_21769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21770,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21929 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21929,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21929,out){
return (function (state_21899){var state_val_21900 = (state_21899[(1)]);if((state_val_21900 === (7)))
{var inst_21895 = (state_21899[(2)]);var state_21899__$1 = state_21899;var statearr_21901_21930 = state_21899__$1;(statearr_21901_21930[(2)] = inst_21895);
(statearr_21901_21930[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21900 === (1)))
{var inst_21858 = [];var inst_21859 = inst_21858;var inst_21860 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_21899__$1 = (function (){var statearr_21902 = state_21899;(statearr_21902[(7)] = inst_21860);
(statearr_21902[(8)] = inst_21859);
return statearr_21902;
})();var statearr_21903_21931 = state_21899__$1;(statearr_21903_21931[(2)] = null);
(statearr_21903_21931[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21900 === (4)))
{var inst_21863 = (state_21899[(9)]);var inst_21863__$1 = (state_21899[(2)]);var inst_21864 = (inst_21863__$1 == null);var inst_21865 = cljs.core.not.call(null,inst_21864);var state_21899__$1 = (function (){var statearr_21904 = state_21899;(statearr_21904[(9)] = inst_21863__$1);
return statearr_21904;
})();if(inst_21865)
{var statearr_21905_21932 = state_21899__$1;(statearr_21905_21932[(1)] = (5));
} else
{var statearr_21906_21933 = state_21899__$1;(statearr_21906_21933[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21900 === (15)))
{var inst_21889 = (state_21899[(2)]);var state_21899__$1 = state_21899;var statearr_21907_21934 = state_21899__$1;(statearr_21907_21934[(2)] = inst_21889);
(statearr_21907_21934[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21900 === (13)))
{var state_21899__$1 = state_21899;var statearr_21908_21935 = state_21899__$1;(statearr_21908_21935[(2)] = null);
(statearr_21908_21935[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21900 === (6)))
{var inst_21859 = (state_21899[(8)]);var inst_21884 = inst_21859.length;var inst_21885 = (inst_21884 > (0));var state_21899__$1 = state_21899;if(cljs.core.truth_(inst_21885))
{var statearr_21909_21936 = state_21899__$1;(statearr_21909_21936[(1)] = (12));
} else
{var statearr_21910_21937 = state_21899__$1;(statearr_21910_21937[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21900 === (3)))
{var inst_21897 = (state_21899[(2)]);var state_21899__$1 = state_21899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21899__$1,inst_21897);
} else
{if((state_val_21900 === (12)))
{var inst_21859 = (state_21899[(8)]);var inst_21887 = cljs.core.vec.call(null,inst_21859);var state_21899__$1 = state_21899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21899__$1,(15),out,inst_21887);
} else
{if((state_val_21900 === (2)))
{var state_21899__$1 = state_21899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21899__$1,(4),ch);
} else
{if((state_val_21900 === (11)))
{var inst_21863 = (state_21899[(9)]);var inst_21867 = (state_21899[(10)]);var inst_21877 = (state_21899[(2)]);var inst_21878 = [];var inst_21879 = inst_21878.push(inst_21863);var inst_21859 = inst_21878;var inst_21860 = inst_21867;var state_21899__$1 = (function (){var statearr_21911 = state_21899;(statearr_21911[(11)] = inst_21877);
(statearr_21911[(12)] = inst_21879);
(statearr_21911[(7)] = inst_21860);
(statearr_21911[(8)] = inst_21859);
return statearr_21911;
})();var statearr_21912_21938 = state_21899__$1;(statearr_21912_21938[(2)] = null);
(statearr_21912_21938[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21900 === (9)))
{var inst_21859 = (state_21899[(8)]);var inst_21875 = cljs.core.vec.call(null,inst_21859);var state_21899__$1 = state_21899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21899__$1,(11),out,inst_21875);
} else
{if((state_val_21900 === (5)))
{var inst_21863 = (state_21899[(9)]);var inst_21860 = (state_21899[(7)]);var inst_21867 = (state_21899[(10)]);var inst_21867__$1 = f.call(null,inst_21863);var inst_21868 = cljs.core._EQ_.call(null,inst_21867__$1,inst_21860);var inst_21869 = cljs.core.keyword_identical_QMARK_.call(null,inst_21860,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_21870 = (inst_21868) || (inst_21869);var state_21899__$1 = (function (){var statearr_21913 = state_21899;(statearr_21913[(10)] = inst_21867__$1);
return statearr_21913;
})();if(cljs.core.truth_(inst_21870))
{var statearr_21914_21939 = state_21899__$1;(statearr_21914_21939[(1)] = (8));
} else
{var statearr_21915_21940 = state_21899__$1;(statearr_21915_21940[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21900 === (14)))
{var inst_21892 = (state_21899[(2)]);var inst_21893 = cljs.core.async.close_BANG_.call(null,out);var state_21899__$1 = (function (){var statearr_21917 = state_21899;(statearr_21917[(13)] = inst_21892);
return statearr_21917;
})();var statearr_21918_21941 = state_21899__$1;(statearr_21918_21941[(2)] = inst_21893);
(statearr_21918_21941[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21900 === (10)))
{var inst_21882 = (state_21899[(2)]);var state_21899__$1 = state_21899;var statearr_21919_21942 = state_21899__$1;(statearr_21919_21942[(2)] = inst_21882);
(statearr_21919_21942[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21900 === (8)))
{var inst_21863 = (state_21899[(9)]);var inst_21867 = (state_21899[(10)]);var inst_21859 = (state_21899[(8)]);var inst_21872 = inst_21859.push(inst_21863);var tmp21916 = inst_21859;var inst_21859__$1 = tmp21916;var inst_21860 = inst_21867;var state_21899__$1 = (function (){var statearr_21920 = state_21899;(statearr_21920[(7)] = inst_21860);
(statearr_21920[(14)] = inst_21872);
(statearr_21920[(8)] = inst_21859__$1);
return statearr_21920;
})();var statearr_21921_21943 = state_21899__$1;(statearr_21921_21943[(2)] = null);
(statearr_21921_21943[(1)] = (2));
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
});})(c__5708__auto___21929,out))
;return ((function (switch__5693__auto__,c__5708__auto___21929,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21925[(0)] = state_machine__5694__auto__);
(statearr_21925[(1)] = (1));
return statearr_21925;
});
var state_machine__5694__auto____1 = (function (state_21899){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_21899);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21926){if((e21926 instanceof Object))
{var ex__5697__auto__ = e21926;var statearr_21927_21944 = state_21899;(statearr_21927_21944[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21899);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21926;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21945 = state_21899;
state_21899 = G__21945;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_21899){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_21899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21929,out))
})();var state__5710__auto__ = (function (){var statearr_21928 = f__5709__auto__.call(null);(statearr_21928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21929);
return statearr_21928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21929,out))
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
