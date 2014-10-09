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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t29302 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29302 = (function (f,fn_handler,meta29303){
this.f = f;
this.fn_handler = fn_handler;
this.meta29303 = meta29303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29302.cljs$lang$type = true;
cljs.core.async.t29302.cljs$lang$ctorStr = "cljs.core.async/t29302";
cljs.core.async.t29302.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29302");
});
cljs.core.async.t29302.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t29302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t29302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29304){var self__ = this;
var _29304__$1 = this;return self__.meta29303;
});
cljs.core.async.t29302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29304,meta29303__$1){var self__ = this;
var _29304__$1 = this;return (new cljs.core.async.t29302(self__.f,self__.fn_handler,meta29303__$1));
});
cljs.core.async.__GT_t29302 = (function __GT_t29302(f__$1,fn_handler__$1,meta29303){return (new cljs.core.async.t29302(f__$1,fn_handler__$1,meta29303));
});
}
return (new cljs.core.async.t29302(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__29306 = buff;if(G__29306)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__29306.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__29306.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29306);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29306);
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
{var val_29307 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_29307);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_29307,ret){
return (function (){return fn1.call(null,val_29307);
});})(val_29307,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___29308 = n;var x_29309 = (0);while(true){
if((x_29309 < n__4414__auto___29308))
{(a[x_29309] = (0));
{
var G__29310 = (x_29309 + (1));
x_29309 = G__29310;
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
var G__29311 = (i + (1));
i = G__29311;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t29315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29315 = (function (flag,alt_flag,meta29316){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29316 = meta29316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29315.cljs$lang$type = true;
cljs.core.async.t29315.cljs$lang$ctorStr = "cljs.core.async/t29315";
cljs.core.async.t29315.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29315");
});})(flag))
;
cljs.core.async.t29315.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t29315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t29315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29317){var self__ = this;
var _29317__$1 = this;return self__.meta29316;
});})(flag))
;
cljs.core.async.t29315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29317,meta29316__$1){var self__ = this;
var _29317__$1 = this;return (new cljs.core.async.t29315(self__.flag,self__.alt_flag,meta29316__$1));
});})(flag))
;
cljs.core.async.__GT_t29315 = ((function (flag){
return (function __GT_t29315(flag__$1,alt_flag__$1,meta29316){return (new cljs.core.async.t29315(flag__$1,alt_flag__$1,meta29316));
});})(flag))
;
}
return (new cljs.core.async.t29315(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t29321 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29321 = (function (cb,flag,alt_handler,meta29322){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29322 = meta29322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29321.cljs$lang$type = true;
cljs.core.async.t29321.cljs$lang$ctorStr = "cljs.core.async/t29321";
cljs.core.async.t29321.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29321");
});
cljs.core.async.t29321.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t29321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t29321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29323){var self__ = this;
var _29323__$1 = this;return self__.meta29322;
});
cljs.core.async.t29321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29323,meta29322__$1){var self__ = this;
var _29323__$1 = this;return (new cljs.core.async.t29321(self__.cb,self__.flag,self__.alt_handler,meta29322__$1));
});
cljs.core.async.__GT_t29321 = (function __GT_t29321(cb__$1,flag__$1,alt_handler__$1,meta29322){return (new cljs.core.async.t29321(cb__$1,flag__$1,alt_handler__$1,meta29322));
});
}
return (new cljs.core.async.t29321(cb,flag,alt_handler,null));
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
return (function (p1__29324_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29324_SHARP_,port], null));
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
var G__29325 = (i + (1));
i = G__29325;
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
var alts_BANG___delegate = function (ports,p__29326){var map__29328 = p__29326;var map__29328__$1 = ((cljs.core.seq_QMARK_.call(null,map__29328))?cljs.core.apply.call(null,cljs.core.hash_map,map__29328):map__29328);var opts = map__29328__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__29326 = null;if (arguments.length > 1) {
  p__29326 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__29326);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29329){
var ports = cljs.core.first(arglist__29329);
var p__29326 = cljs.core.rest(arglist__29329);
return alts_BANG___delegate(ports,p__29326);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t29337 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29337 = (function (ch,f,map_LT_,meta29338){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29338 = meta29338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29337.cljs$lang$type = true;
cljs.core.async.t29337.cljs$lang$ctorStr = "cljs.core.async/t29337";
cljs.core.async.t29337.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29337");
});
cljs.core.async.t29337.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t29337.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t29340 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29340 = (function (fn1,_,meta29338,ch,f,map_LT_,meta29341){
this.fn1 = fn1;
this._ = _;
this.meta29338 = meta29338;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29341 = meta29341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29340.cljs$lang$type = true;
cljs.core.async.t29340.cljs$lang$ctorStr = "cljs.core.async/t29340";
cljs.core.async.t29340.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29340");
});})(___$1))
;
cljs.core.async.t29340.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t29340.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t29340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__29330_SHARP_){return f1.call(null,(((p1__29330_SHARP_ == null))?null:self__.f.call(null,p1__29330_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t29340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29342){var self__ = this;
var _29342__$1 = this;return self__.meta29341;
});})(___$1))
;
cljs.core.async.t29340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29342,meta29341__$1){var self__ = this;
var _29342__$1 = this;return (new cljs.core.async.t29340(self__.fn1,self__._,self__.meta29338,self__.ch,self__.f,self__.map_LT_,meta29341__$1));
});})(___$1))
;
cljs.core.async.__GT_t29340 = ((function (___$1){
return (function __GT_t29340(fn1__$1,___$2,meta29338__$1,ch__$2,f__$2,map_LT___$2,meta29341){return (new cljs.core.async.t29340(fn1__$1,___$2,meta29338__$1,ch__$2,f__$2,map_LT___$2,meta29341));
});})(___$1))
;
}
return (new cljs.core.async.t29340(fn1,___$1,self__.meta29338,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t29337.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29339){var self__ = this;
var _29339__$1 = this;return self__.meta29338;
});
cljs.core.async.t29337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29339,meta29338__$1){var self__ = this;
var _29339__$1 = this;return (new cljs.core.async.t29337(self__.ch,self__.f,self__.map_LT_,meta29338__$1));
});
cljs.core.async.__GT_t29337 = (function __GT_t29337(ch__$1,f__$1,map_LT___$1,meta29338){return (new cljs.core.async.t29337(ch__$1,f__$1,map_LT___$1,meta29338));
});
}
return (new cljs.core.async.t29337(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t29346 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29346 = (function (ch,f,map_GT_,meta29347){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29347 = meta29347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29346.cljs$lang$type = true;
cljs.core.async.t29346.cljs$lang$ctorStr = "cljs.core.async/t29346";
cljs.core.async.t29346.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29346");
});
cljs.core.async.t29346.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t29346.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29346.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29348){var self__ = this;
var _29348__$1 = this;return self__.meta29347;
});
cljs.core.async.t29346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29348,meta29347__$1){var self__ = this;
var _29348__$1 = this;return (new cljs.core.async.t29346(self__.ch,self__.f,self__.map_GT_,meta29347__$1));
});
cljs.core.async.__GT_t29346 = (function __GT_t29346(ch__$1,f__$1,map_GT___$1,meta29347){return (new cljs.core.async.t29346(ch__$1,f__$1,map_GT___$1,meta29347));
});
}
return (new cljs.core.async.t29346(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t29352 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29352 = (function (ch,p,filter_GT_,meta29353){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29353 = meta29353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29352.cljs$lang$type = true;
cljs.core.async.t29352.cljs$lang$ctorStr = "cljs.core.async/t29352";
cljs.core.async.t29352.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29352");
});
cljs.core.async.t29352.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t29352.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29352.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29354){var self__ = this;
var _29354__$1 = this;return self__.meta29353;
});
cljs.core.async.t29352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29354,meta29353__$1){var self__ = this;
var _29354__$1 = this;return (new cljs.core.async.t29352(self__.ch,self__.p,self__.filter_GT_,meta29353__$1));
});
cljs.core.async.__GT_t29352 = (function __GT_t29352(ch__$1,p__$1,filter_GT___$1,meta29353){return (new cljs.core.async.t29352(ch__$1,p__$1,filter_GT___$1,meta29353));
});
}
return (new cljs.core.async.t29352(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___29437 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29437,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29437,out){
return (function (state_29416){var state_val_29417 = (state_29416[(1)]);if((state_val_29417 === (7)))
{var inst_29412 = (state_29416[(2)]);var state_29416__$1 = state_29416;var statearr_29418_29438 = state_29416__$1;(statearr_29418_29438[(2)] = inst_29412);
(statearr_29418_29438[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29417 === (1)))
{var state_29416__$1 = state_29416;var statearr_29419_29439 = state_29416__$1;(statearr_29419_29439[(2)] = null);
(statearr_29419_29439[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29417 === (4)))
{var inst_29398 = (state_29416[(7)]);var inst_29398__$1 = (state_29416[(2)]);var inst_29399 = (inst_29398__$1 == null);var state_29416__$1 = (function (){var statearr_29420 = state_29416;(statearr_29420[(7)] = inst_29398__$1);
return statearr_29420;
})();if(cljs.core.truth_(inst_29399))
{var statearr_29421_29440 = state_29416__$1;(statearr_29421_29440[(1)] = (5));
} else
{var statearr_29422_29441 = state_29416__$1;(statearr_29422_29441[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29417 === (6)))
{var inst_29398 = (state_29416[(7)]);var inst_29403 = p.call(null,inst_29398);var state_29416__$1 = state_29416;if(cljs.core.truth_(inst_29403))
{var statearr_29423_29442 = state_29416__$1;(statearr_29423_29442[(1)] = (8));
} else
{var statearr_29424_29443 = state_29416__$1;(statearr_29424_29443[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29417 === (3)))
{var inst_29414 = (state_29416[(2)]);var state_29416__$1 = state_29416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29416__$1,inst_29414);
} else
{if((state_val_29417 === (2)))
{var state_29416__$1 = state_29416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29416__$1,(4),ch);
} else
{if((state_val_29417 === (11)))
{var inst_29406 = (state_29416[(2)]);var state_29416__$1 = state_29416;var statearr_29425_29444 = state_29416__$1;(statearr_29425_29444[(2)] = inst_29406);
(statearr_29425_29444[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29417 === (9)))
{var state_29416__$1 = state_29416;var statearr_29426_29445 = state_29416__$1;(statearr_29426_29445[(2)] = null);
(statearr_29426_29445[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29417 === (5)))
{var inst_29401 = cljs.core.async.close_BANG_.call(null,out);var state_29416__$1 = state_29416;var statearr_29427_29446 = state_29416__$1;(statearr_29427_29446[(2)] = inst_29401);
(statearr_29427_29446[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29417 === (10)))
{var inst_29409 = (state_29416[(2)]);var state_29416__$1 = (function (){var statearr_29428 = state_29416;(statearr_29428[(8)] = inst_29409);
return statearr_29428;
})();var statearr_29429_29447 = state_29416__$1;(statearr_29429_29447[(2)] = null);
(statearr_29429_29447[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29417 === (8)))
{var inst_29398 = (state_29416[(7)]);var state_29416__$1 = state_29416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29416__$1,(11),out,inst_29398);
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
});})(c__5708__auto___29437,out))
;return ((function (switch__5693__auto__,c__5708__auto___29437,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29433 = [null,null,null,null,null,null,null,null,null];(statearr_29433[(0)] = state_machine__5694__auto__);
(statearr_29433[(1)] = (1));
return statearr_29433;
});
var state_machine__5694__auto____1 = (function (state_29416){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29416);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29434){if((e29434 instanceof Object))
{var ex__5697__auto__ = e29434;var statearr_29435_29448 = state_29416;(statearr_29435_29448[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29416);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29434;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29449 = state_29416;
state_29416 = G__29449;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29416){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29437,out))
})();var state__5710__auto__ = (function (){var statearr_29436 = f__5709__auto__.call(null);(statearr_29436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29437);
return statearr_29436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29437,out))
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
return (function (state_29601){var state_val_29602 = (state_29601[(1)]);if((state_val_29602 === (7)))
{var inst_29597 = (state_29601[(2)]);var state_29601__$1 = state_29601;var statearr_29603_29640 = state_29601__$1;(statearr_29603_29640[(2)] = inst_29597);
(statearr_29603_29640[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (20)))
{var inst_29572 = (state_29601[(7)]);var inst_29583 = (state_29601[(2)]);var inst_29584 = cljs.core.next.call(null,inst_29572);var inst_29558 = inst_29584;var inst_29559 = null;var inst_29560 = (0);var inst_29561 = (0);var state_29601__$1 = (function (){var statearr_29604 = state_29601;(statearr_29604[(8)] = inst_29560);
(statearr_29604[(9)] = inst_29558);
(statearr_29604[(10)] = inst_29561);
(statearr_29604[(11)] = inst_29583);
(statearr_29604[(12)] = inst_29559);
return statearr_29604;
})();var statearr_29605_29641 = state_29601__$1;(statearr_29605_29641[(2)] = null);
(statearr_29605_29641[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (1)))
{var state_29601__$1 = state_29601;var statearr_29606_29642 = state_29601__$1;(statearr_29606_29642[(2)] = null);
(statearr_29606_29642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (4)))
{var inst_29547 = (state_29601[(13)]);var inst_29547__$1 = (state_29601[(2)]);var inst_29548 = (inst_29547__$1 == null);var state_29601__$1 = (function (){var statearr_29610 = state_29601;(statearr_29610[(13)] = inst_29547__$1);
return statearr_29610;
})();if(cljs.core.truth_(inst_29548))
{var statearr_29611_29643 = state_29601__$1;(statearr_29611_29643[(1)] = (5));
} else
{var statearr_29612_29644 = state_29601__$1;(statearr_29612_29644[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (15)))
{var state_29601__$1 = state_29601;var statearr_29613_29645 = state_29601__$1;(statearr_29613_29645[(2)] = null);
(statearr_29613_29645[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (13)))
{var inst_29560 = (state_29601[(8)]);var inst_29558 = (state_29601[(9)]);var inst_29561 = (state_29601[(10)]);var inst_29559 = (state_29601[(12)]);var inst_29568 = (state_29601[(2)]);var inst_29569 = (inst_29561 + (1));var tmp29607 = inst_29560;var tmp29608 = inst_29558;var tmp29609 = inst_29559;var inst_29558__$1 = tmp29608;var inst_29559__$1 = tmp29609;var inst_29560__$1 = tmp29607;var inst_29561__$1 = inst_29569;var state_29601__$1 = (function (){var statearr_29614 = state_29601;(statearr_29614[(8)] = inst_29560__$1);
(statearr_29614[(9)] = inst_29558__$1);
(statearr_29614[(14)] = inst_29568);
(statearr_29614[(10)] = inst_29561__$1);
(statearr_29614[(12)] = inst_29559__$1);
return statearr_29614;
})();var statearr_29615_29646 = state_29601__$1;(statearr_29615_29646[(2)] = null);
(statearr_29615_29646[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (6)))
{var inst_29547 = (state_29601[(13)]);var inst_29552 = f.call(null,inst_29547);var inst_29557 = cljs.core.seq.call(null,inst_29552);var inst_29558 = inst_29557;var inst_29559 = null;var inst_29560 = (0);var inst_29561 = (0);var state_29601__$1 = (function (){var statearr_29616 = state_29601;(statearr_29616[(8)] = inst_29560);
(statearr_29616[(9)] = inst_29558);
(statearr_29616[(10)] = inst_29561);
(statearr_29616[(12)] = inst_29559);
return statearr_29616;
})();var statearr_29617_29647 = state_29601__$1;(statearr_29617_29647[(2)] = null);
(statearr_29617_29647[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (17)))
{var inst_29572 = (state_29601[(7)]);var inst_29576 = cljs.core.chunk_first.call(null,inst_29572);var inst_29577 = cljs.core.chunk_rest.call(null,inst_29572);var inst_29578 = cljs.core.count.call(null,inst_29576);var inst_29558 = inst_29577;var inst_29559 = inst_29576;var inst_29560 = inst_29578;var inst_29561 = (0);var state_29601__$1 = (function (){var statearr_29618 = state_29601;(statearr_29618[(8)] = inst_29560);
(statearr_29618[(9)] = inst_29558);
(statearr_29618[(10)] = inst_29561);
(statearr_29618[(12)] = inst_29559);
return statearr_29618;
})();var statearr_29619_29648 = state_29601__$1;(statearr_29619_29648[(2)] = null);
(statearr_29619_29648[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (3)))
{var inst_29599 = (state_29601[(2)]);var state_29601__$1 = state_29601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29601__$1,inst_29599);
} else
{if((state_val_29602 === (12)))
{var inst_29592 = (state_29601[(2)]);var state_29601__$1 = state_29601;var statearr_29620_29649 = state_29601__$1;(statearr_29620_29649[(2)] = inst_29592);
(statearr_29620_29649[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (2)))
{var state_29601__$1 = state_29601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29601__$1,(4),in$);
} else
{if((state_val_29602 === (19)))
{var inst_29587 = (state_29601[(2)]);var state_29601__$1 = state_29601;var statearr_29621_29650 = state_29601__$1;(statearr_29621_29650[(2)] = inst_29587);
(statearr_29621_29650[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (11)))
{var inst_29572 = (state_29601[(7)]);var inst_29558 = (state_29601[(9)]);var inst_29572__$1 = cljs.core.seq.call(null,inst_29558);var state_29601__$1 = (function (){var statearr_29622 = state_29601;(statearr_29622[(7)] = inst_29572__$1);
return statearr_29622;
})();if(inst_29572__$1)
{var statearr_29623_29651 = state_29601__$1;(statearr_29623_29651[(1)] = (14));
} else
{var statearr_29624_29652 = state_29601__$1;(statearr_29624_29652[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (9)))
{var inst_29594 = (state_29601[(2)]);var state_29601__$1 = (function (){var statearr_29625 = state_29601;(statearr_29625[(15)] = inst_29594);
return statearr_29625;
})();var statearr_29626_29653 = state_29601__$1;(statearr_29626_29653[(2)] = null);
(statearr_29626_29653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (5)))
{var inst_29550 = cljs.core.async.close_BANG_.call(null,out);var state_29601__$1 = state_29601;var statearr_29627_29654 = state_29601__$1;(statearr_29627_29654[(2)] = inst_29550);
(statearr_29627_29654[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (14)))
{var inst_29572 = (state_29601[(7)]);var inst_29574 = cljs.core.chunked_seq_QMARK_.call(null,inst_29572);var state_29601__$1 = state_29601;if(inst_29574)
{var statearr_29628_29655 = state_29601__$1;(statearr_29628_29655[(1)] = (17));
} else
{var statearr_29629_29656 = state_29601__$1;(statearr_29629_29656[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (16)))
{var inst_29590 = (state_29601[(2)]);var state_29601__$1 = state_29601;var statearr_29630_29657 = state_29601__$1;(statearr_29630_29657[(2)] = inst_29590);
(statearr_29630_29657[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29602 === (10)))
{var inst_29561 = (state_29601[(10)]);var inst_29559 = (state_29601[(12)]);var inst_29566 = cljs.core._nth.call(null,inst_29559,inst_29561);var state_29601__$1 = state_29601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29601__$1,(13),out,inst_29566);
} else
{if((state_val_29602 === (18)))
{var inst_29572 = (state_29601[(7)]);var inst_29581 = cljs.core.first.call(null,inst_29572);var state_29601__$1 = state_29601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29601__$1,(20),out,inst_29581);
} else
{if((state_val_29602 === (8)))
{var inst_29560 = (state_29601[(8)]);var inst_29561 = (state_29601[(10)]);var inst_29563 = (inst_29561 < inst_29560);var inst_29564 = inst_29563;var state_29601__$1 = state_29601;if(cljs.core.truth_(inst_29564))
{var statearr_29631_29658 = state_29601__$1;(statearr_29631_29658[(1)] = (10));
} else
{var statearr_29632_29659 = state_29601__$1;(statearr_29632_29659[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_29636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29636[(0)] = state_machine__5694__auto__);
(statearr_29636[(1)] = (1));
return statearr_29636;
});
var state_machine__5694__auto____1 = (function (state_29601){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29601);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29637){if((e29637 instanceof Object))
{var ex__5697__auto__ = e29637;var statearr_29638_29660 = state_29601;(statearr_29638_29660[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29601);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29637;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29661 = state_29601;
state_29601 = G__29661;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29601){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_29639 = f__5709__auto__.call(null);(statearr_29639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_29639;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___29742 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29742){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29742){
return (function (state_29721){var state_val_29722 = (state_29721[(1)]);if((state_val_29722 === (7)))
{var inst_29717 = (state_29721[(2)]);var state_29721__$1 = state_29721;var statearr_29723_29743 = state_29721__$1;(statearr_29723_29743[(2)] = inst_29717);
(statearr_29723_29743[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29722 === (1)))
{var state_29721__$1 = state_29721;var statearr_29724_29744 = state_29721__$1;(statearr_29724_29744[(2)] = null);
(statearr_29724_29744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29722 === (4)))
{var inst_29704 = (state_29721[(7)]);var inst_29704__$1 = (state_29721[(2)]);var inst_29705 = (inst_29704__$1 == null);var state_29721__$1 = (function (){var statearr_29725 = state_29721;(statearr_29725[(7)] = inst_29704__$1);
return statearr_29725;
})();if(cljs.core.truth_(inst_29705))
{var statearr_29726_29745 = state_29721__$1;(statearr_29726_29745[(1)] = (5));
} else
{var statearr_29727_29746 = state_29721__$1;(statearr_29727_29746[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29722 === (6)))
{var inst_29704 = (state_29721[(7)]);var state_29721__$1 = state_29721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29721__$1,(11),to,inst_29704);
} else
{if((state_val_29722 === (3)))
{var inst_29719 = (state_29721[(2)]);var state_29721__$1 = state_29721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29721__$1,inst_29719);
} else
{if((state_val_29722 === (2)))
{var state_29721__$1 = state_29721;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29721__$1,(4),from);
} else
{if((state_val_29722 === (11)))
{var inst_29714 = (state_29721[(2)]);var state_29721__$1 = (function (){var statearr_29728 = state_29721;(statearr_29728[(8)] = inst_29714);
return statearr_29728;
})();var statearr_29729_29747 = state_29721__$1;(statearr_29729_29747[(2)] = null);
(statearr_29729_29747[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29722 === (9)))
{var state_29721__$1 = state_29721;var statearr_29730_29748 = state_29721__$1;(statearr_29730_29748[(2)] = null);
(statearr_29730_29748[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29722 === (5)))
{var state_29721__$1 = state_29721;if(cljs.core.truth_(close_QMARK_))
{var statearr_29731_29749 = state_29721__$1;(statearr_29731_29749[(1)] = (8));
} else
{var statearr_29732_29750 = state_29721__$1;(statearr_29732_29750[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29722 === (10)))
{var inst_29711 = (state_29721[(2)]);var state_29721__$1 = state_29721;var statearr_29733_29751 = state_29721__$1;(statearr_29733_29751[(2)] = inst_29711);
(statearr_29733_29751[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29722 === (8)))
{var inst_29708 = cljs.core.async.close_BANG_.call(null,to);var state_29721__$1 = state_29721;var statearr_29734_29752 = state_29721__$1;(statearr_29734_29752[(2)] = inst_29708);
(statearr_29734_29752[(1)] = (10));
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
});})(c__5708__auto___29742))
;return ((function (switch__5693__auto__,c__5708__auto___29742){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29738 = [null,null,null,null,null,null,null,null,null];(statearr_29738[(0)] = state_machine__5694__auto__);
(statearr_29738[(1)] = (1));
return statearr_29738;
});
var state_machine__5694__auto____1 = (function (state_29721){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29721);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29739){if((e29739 instanceof Object))
{var ex__5697__auto__ = e29739;var statearr_29740_29753 = state_29721;(statearr_29740_29753[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29721);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29739;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29754 = state_29721;
state_29721 = G__29754;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29721){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29742))
})();var state__5710__auto__ = (function (){var statearr_29741 = f__5709__auto__.call(null);(statearr_29741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29742);
return statearr_29741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29742))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___29841 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29841,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29841,tc,fc){
return (function (state_29819){var state_val_29820 = (state_29819[(1)]);if((state_val_29820 === (7)))
{var inst_29815 = (state_29819[(2)]);var state_29819__$1 = state_29819;var statearr_29821_29842 = state_29819__$1;(statearr_29821_29842[(2)] = inst_29815);
(statearr_29821_29842[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29820 === (1)))
{var state_29819__$1 = state_29819;var statearr_29822_29843 = state_29819__$1;(statearr_29822_29843[(2)] = null);
(statearr_29822_29843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29820 === (4)))
{var inst_29800 = (state_29819[(7)]);var inst_29800__$1 = (state_29819[(2)]);var inst_29801 = (inst_29800__$1 == null);var state_29819__$1 = (function (){var statearr_29823 = state_29819;(statearr_29823[(7)] = inst_29800__$1);
return statearr_29823;
})();if(cljs.core.truth_(inst_29801))
{var statearr_29824_29844 = state_29819__$1;(statearr_29824_29844[(1)] = (5));
} else
{var statearr_29825_29845 = state_29819__$1;(statearr_29825_29845[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29820 === (6)))
{var inst_29800 = (state_29819[(7)]);var inst_29806 = p.call(null,inst_29800);var state_29819__$1 = state_29819;if(cljs.core.truth_(inst_29806))
{var statearr_29826_29846 = state_29819__$1;(statearr_29826_29846[(1)] = (9));
} else
{var statearr_29827_29847 = state_29819__$1;(statearr_29827_29847[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29820 === (3)))
{var inst_29817 = (state_29819[(2)]);var state_29819__$1 = state_29819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29819__$1,inst_29817);
} else
{if((state_val_29820 === (2)))
{var state_29819__$1 = state_29819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29819__$1,(4),ch);
} else
{if((state_val_29820 === (11)))
{var inst_29800 = (state_29819[(7)]);var inst_29810 = (state_29819[(2)]);var state_29819__$1 = state_29819;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29819__$1,(8),inst_29810,inst_29800);
} else
{if((state_val_29820 === (9)))
{var state_29819__$1 = state_29819;var statearr_29828_29848 = state_29819__$1;(statearr_29828_29848[(2)] = tc);
(statearr_29828_29848[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29820 === (5)))
{var inst_29803 = cljs.core.async.close_BANG_.call(null,tc);var inst_29804 = cljs.core.async.close_BANG_.call(null,fc);var state_29819__$1 = (function (){var statearr_29829 = state_29819;(statearr_29829[(8)] = inst_29803);
return statearr_29829;
})();var statearr_29830_29849 = state_29819__$1;(statearr_29830_29849[(2)] = inst_29804);
(statearr_29830_29849[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29820 === (10)))
{var state_29819__$1 = state_29819;var statearr_29831_29850 = state_29819__$1;(statearr_29831_29850[(2)] = fc);
(statearr_29831_29850[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29820 === (8)))
{var inst_29812 = (state_29819[(2)]);var state_29819__$1 = (function (){var statearr_29832 = state_29819;(statearr_29832[(9)] = inst_29812);
return statearr_29832;
})();var statearr_29833_29851 = state_29819__$1;(statearr_29833_29851[(2)] = null);
(statearr_29833_29851[(1)] = (2));
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
});})(c__5708__auto___29841,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___29841,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29837 = [null,null,null,null,null,null,null,null,null,null];(statearr_29837[(0)] = state_machine__5694__auto__);
(statearr_29837[(1)] = (1));
return statearr_29837;
});
var state_machine__5694__auto____1 = (function (state_29819){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29819);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29838){if((e29838 instanceof Object))
{var ex__5697__auto__ = e29838;var statearr_29839_29852 = state_29819;(statearr_29839_29852[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29819);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29838;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29853 = state_29819;
state_29819 = G__29853;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29819){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29841,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_29840 = f__5709__auto__.call(null);(statearr_29840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29841);
return statearr_29840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29841,tc,fc))
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
return (function (state_29900){var state_val_29901 = (state_29900[(1)]);if((state_val_29901 === (7)))
{var inst_29896 = (state_29900[(2)]);var state_29900__$1 = state_29900;var statearr_29902_29918 = state_29900__$1;(statearr_29902_29918[(2)] = inst_29896);
(statearr_29902_29918[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29901 === (6)))
{var inst_29889 = (state_29900[(7)]);var inst_29886 = (state_29900[(8)]);var inst_29893 = f.call(null,inst_29886,inst_29889);var inst_29886__$1 = inst_29893;var state_29900__$1 = (function (){var statearr_29903 = state_29900;(statearr_29903[(8)] = inst_29886__$1);
return statearr_29903;
})();var statearr_29904_29919 = state_29900__$1;(statearr_29904_29919[(2)] = null);
(statearr_29904_29919[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29901 === (5)))
{var inst_29886 = (state_29900[(8)]);var state_29900__$1 = state_29900;var statearr_29905_29920 = state_29900__$1;(statearr_29905_29920[(2)] = inst_29886);
(statearr_29905_29920[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29901 === (4)))
{var inst_29889 = (state_29900[(7)]);var inst_29889__$1 = (state_29900[(2)]);var inst_29890 = (inst_29889__$1 == null);var state_29900__$1 = (function (){var statearr_29906 = state_29900;(statearr_29906[(7)] = inst_29889__$1);
return statearr_29906;
})();if(cljs.core.truth_(inst_29890))
{var statearr_29907_29921 = state_29900__$1;(statearr_29907_29921[(1)] = (5));
} else
{var statearr_29908_29922 = state_29900__$1;(statearr_29908_29922[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29901 === (3)))
{var inst_29898 = (state_29900[(2)]);var state_29900__$1 = state_29900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29900__$1,inst_29898);
} else
{if((state_val_29901 === (2)))
{var state_29900__$1 = state_29900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29900__$1,(4),ch);
} else
{if((state_val_29901 === (1)))
{var inst_29886 = init;var state_29900__$1 = (function (){var statearr_29909 = state_29900;(statearr_29909[(8)] = inst_29886);
return statearr_29909;
})();var statearr_29910_29923 = state_29900__$1;(statearr_29910_29923[(2)] = null);
(statearr_29910_29923[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_29914 = [null,null,null,null,null,null,null,null,null];(statearr_29914[(0)] = state_machine__5694__auto__);
(statearr_29914[(1)] = (1));
return statearr_29914;
});
var state_machine__5694__auto____1 = (function (state_29900){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29900);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29915){if((e29915 instanceof Object))
{var ex__5697__auto__ = e29915;var statearr_29916_29924 = state_29900;(statearr_29916_29924[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29900);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29915;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29925 = state_29900;
state_29900 = G__29925;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29900){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_29917 = f__5709__auto__.call(null);(statearr_29917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_29917;
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
return (function (state_29987){var state_val_29988 = (state_29987[(1)]);if((state_val_29988 === (7)))
{var inst_29968 = (state_29987[(7)]);var inst_29973 = (state_29987[(2)]);var inst_29974 = cljs.core.next.call(null,inst_29968);var inst_29968__$1 = inst_29974;var state_29987__$1 = (function (){var statearr_29989 = state_29987;(statearr_29989[(7)] = inst_29968__$1);
(statearr_29989[(8)] = inst_29973);
return statearr_29989;
})();var statearr_29990_30008 = state_29987__$1;(statearr_29990_30008[(2)] = null);
(statearr_29990_30008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29988 === (1)))
{var inst_29967 = cljs.core.seq.call(null,coll);var inst_29968 = inst_29967;var state_29987__$1 = (function (){var statearr_29991 = state_29987;(statearr_29991[(7)] = inst_29968);
return statearr_29991;
})();var statearr_29992_30009 = state_29987__$1;(statearr_29992_30009[(2)] = null);
(statearr_29992_30009[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29988 === (4)))
{var inst_29968 = (state_29987[(7)]);var inst_29971 = cljs.core.first.call(null,inst_29968);var state_29987__$1 = state_29987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29987__$1,(7),ch,inst_29971);
} else
{if((state_val_29988 === (6)))
{var inst_29983 = (state_29987[(2)]);var state_29987__$1 = state_29987;var statearr_29993_30010 = state_29987__$1;(statearr_29993_30010[(2)] = inst_29983);
(statearr_29993_30010[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29988 === (3)))
{var inst_29985 = (state_29987[(2)]);var state_29987__$1 = state_29987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29987__$1,inst_29985);
} else
{if((state_val_29988 === (2)))
{var inst_29968 = (state_29987[(7)]);var state_29987__$1 = state_29987;if(cljs.core.truth_(inst_29968))
{var statearr_29994_30011 = state_29987__$1;(statearr_29994_30011[(1)] = (4));
} else
{var statearr_29995_30012 = state_29987__$1;(statearr_29995_30012[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29988 === (9)))
{var state_29987__$1 = state_29987;var statearr_29996_30013 = state_29987__$1;(statearr_29996_30013[(2)] = null);
(statearr_29996_30013[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29988 === (5)))
{var state_29987__$1 = state_29987;if(cljs.core.truth_(close_QMARK_))
{var statearr_29997_30014 = state_29987__$1;(statearr_29997_30014[(1)] = (8));
} else
{var statearr_29998_30015 = state_29987__$1;(statearr_29998_30015[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29988 === (10)))
{var inst_29981 = (state_29987[(2)]);var state_29987__$1 = state_29987;var statearr_29999_30016 = state_29987__$1;(statearr_29999_30016[(2)] = inst_29981);
(statearr_29999_30016[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29988 === (8)))
{var inst_29978 = cljs.core.async.close_BANG_.call(null,ch);var state_29987__$1 = state_29987;var statearr_30000_30017 = state_29987__$1;(statearr_30000_30017[(2)] = inst_29978);
(statearr_30000_30017[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_30004 = [null,null,null,null,null,null,null,null,null];(statearr_30004[(0)] = state_machine__5694__auto__);
(statearr_30004[(1)] = (1));
return statearr_30004;
});
var state_machine__5694__auto____1 = (function (state_29987){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29987);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30005){if((e30005 instanceof Object))
{var ex__5697__auto__ = e30005;var statearr_30006_30018 = state_29987;(statearr_30006_30018[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30005;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30019 = state_29987;
state_29987 = G__30019;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29987){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_30007 = f__5709__auto__.call(null);(statearr_30007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_30007;
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
cljs.core.async.Mux = (function (){var obj30021 = {};return obj30021;
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
cljs.core.async.Mult = (function (){var obj30023 = {};return obj30023;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t30247 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30247 = (function (cs,ch,mult,meta30248){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30248 = meta30248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30247.cljs$lang$type = true;
cljs.core.async.t30247.cljs$lang$ctorStr = "cljs.core.async/t30247";
cljs.core.async.t30247.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t30247");
});})(cs))
;
cljs.core.async.t30247.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t30247.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t30247.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t30247.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t30247.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t30247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30249){var self__ = this;
var _30249__$1 = this;return self__.meta30248;
});})(cs))
;
cljs.core.async.t30247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30249,meta30248__$1){var self__ = this;
var _30249__$1 = this;return (new cljs.core.async.t30247(self__.cs,self__.ch,self__.mult,meta30248__$1));
});})(cs))
;
cljs.core.async.__GT_t30247 = ((function (cs){
return (function __GT_t30247(cs__$1,ch__$1,mult__$1,meta30248){return (new cljs.core.async.t30247(cs__$1,ch__$1,mult__$1,meta30248));
});})(cs))
;
}
return (new cljs.core.async.t30247(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___30470 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30470,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30470,cs,m,dchan,dctr,done){
return (function (state_30384){var state_val_30385 = (state_30384[(1)]);if((state_val_30385 === (7)))
{var inst_30380 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30386_30471 = state_30384__$1;(statearr_30386_30471[(2)] = inst_30380);
(statearr_30386_30471[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (20)))
{var inst_30281 = (state_30384[(7)]);var inst_30291 = cljs.core.first.call(null,inst_30281);var inst_30292 = cljs.core.nth.call(null,inst_30291,(0),null);var inst_30293 = cljs.core.nth.call(null,inst_30291,(1),null);var state_30384__$1 = (function (){var statearr_30387 = state_30384;(statearr_30387[(8)] = inst_30292);
return statearr_30387;
})();if(cljs.core.truth_(inst_30293))
{var statearr_30388_30472 = state_30384__$1;(statearr_30388_30472[(1)] = (22));
} else
{var statearr_30389_30473 = state_30384__$1;(statearr_30389_30473[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (27)))
{var inst_30323 = (state_30384[(9)]);var inst_30321 = (state_30384[(10)]);var inst_30328 = cljs.core._nth.call(null,inst_30321,inst_30323);var state_30384__$1 = (function (){var statearr_30390 = state_30384;(statearr_30390[(11)] = inst_30328);
return statearr_30390;
})();var statearr_30391_30474 = state_30384__$1;(statearr_30391_30474[(2)] = null);
(statearr_30391_30474[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (1)))
{var state_30384__$1 = state_30384;var statearr_30392_30475 = state_30384__$1;(statearr_30392_30475[(2)] = null);
(statearr_30392_30475[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (24)))
{var inst_30281 = (state_30384[(7)]);var inst_30298 = (state_30384[(2)]);var inst_30299 = cljs.core.next.call(null,inst_30281);var inst_30261 = inst_30299;var inst_30262 = null;var inst_30263 = (0);var inst_30264 = (0);var state_30384__$1 = (function (){var statearr_30393 = state_30384;(statearr_30393[(12)] = inst_30262);
(statearr_30393[(13)] = inst_30263);
(statearr_30393[(14)] = inst_30264);
(statearr_30393[(15)] = inst_30261);
(statearr_30393[(16)] = inst_30298);
return statearr_30393;
})();var statearr_30394_30476 = state_30384__$1;(statearr_30394_30476[(2)] = null);
(statearr_30394_30476[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (39)))
{var inst_30341 = (state_30384[(17)]);var inst_30359 = (state_30384[(2)]);var inst_30360 = cljs.core.next.call(null,inst_30341);var inst_30320 = inst_30360;var inst_30321 = null;var inst_30322 = (0);var inst_30323 = (0);var state_30384__$1 = (function (){var statearr_30398 = state_30384;(statearr_30398[(9)] = inst_30323);
(statearr_30398[(18)] = inst_30322);
(statearr_30398[(10)] = inst_30321);
(statearr_30398[(19)] = inst_30359);
(statearr_30398[(20)] = inst_30320);
return statearr_30398;
})();var statearr_30399_30477 = state_30384__$1;(statearr_30399_30477[(2)] = null);
(statearr_30399_30477[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (4)))
{var inst_30252 = (state_30384[(21)]);var inst_30252__$1 = (state_30384[(2)]);var inst_30253 = (inst_30252__$1 == null);var state_30384__$1 = (function (){var statearr_30400 = state_30384;(statearr_30400[(21)] = inst_30252__$1);
return statearr_30400;
})();if(cljs.core.truth_(inst_30253))
{var statearr_30401_30478 = state_30384__$1;(statearr_30401_30478[(1)] = (5));
} else
{var statearr_30402_30479 = state_30384__$1;(statearr_30402_30479[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (15)))
{var inst_30262 = (state_30384[(12)]);var inst_30263 = (state_30384[(13)]);var inst_30264 = (state_30384[(14)]);var inst_30261 = (state_30384[(15)]);var inst_30277 = (state_30384[(2)]);var inst_30278 = (inst_30264 + (1));var tmp30395 = inst_30262;var tmp30396 = inst_30263;var tmp30397 = inst_30261;var inst_30261__$1 = tmp30397;var inst_30262__$1 = tmp30395;var inst_30263__$1 = tmp30396;var inst_30264__$1 = inst_30278;var state_30384__$1 = (function (){var statearr_30403 = state_30384;(statearr_30403[(22)] = inst_30277);
(statearr_30403[(12)] = inst_30262__$1);
(statearr_30403[(13)] = inst_30263__$1);
(statearr_30403[(14)] = inst_30264__$1);
(statearr_30403[(15)] = inst_30261__$1);
return statearr_30403;
})();var statearr_30404_30480 = state_30384__$1;(statearr_30404_30480[(2)] = null);
(statearr_30404_30480[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (21)))
{var inst_30302 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30405_30481 = state_30384__$1;(statearr_30405_30481[(2)] = inst_30302);
(statearr_30405_30481[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (31)))
{var inst_30328 = (state_30384[(11)]);var inst_30329 = (state_30384[(2)]);var inst_30330 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30331 = cljs.core.async.untap_STAR_.call(null,m,inst_30328);var state_30384__$1 = (function (){var statearr_30406 = state_30384;(statearr_30406[(23)] = inst_30330);
(statearr_30406[(24)] = inst_30329);
return statearr_30406;
})();var statearr_30407_30482 = state_30384__$1;(statearr_30407_30482[(2)] = inst_30331);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30384__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (32)))
{var inst_30328 = (state_30384[(11)]);var inst_30252 = (state_30384[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30384,(31),Object,null,(30));var inst_30335 = cljs.core.async.put_BANG_.call(null,inst_30328,inst_30252,done);var state_30384__$1 = state_30384;var statearr_30408_30483 = state_30384__$1;(statearr_30408_30483[(2)] = inst_30335);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30384__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (40)))
{var inst_30350 = (state_30384[(25)]);var inst_30351 = (state_30384[(2)]);var inst_30352 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30353 = cljs.core.async.untap_STAR_.call(null,m,inst_30350);var state_30384__$1 = (function (){var statearr_30409 = state_30384;(statearr_30409[(26)] = inst_30351);
(statearr_30409[(27)] = inst_30352);
return statearr_30409;
})();var statearr_30410_30484 = state_30384__$1;(statearr_30410_30484[(2)] = inst_30353);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30384__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (33)))
{var inst_30341 = (state_30384[(17)]);var inst_30343 = cljs.core.chunked_seq_QMARK_.call(null,inst_30341);var state_30384__$1 = state_30384;if(inst_30343)
{var statearr_30411_30485 = state_30384__$1;(statearr_30411_30485[(1)] = (36));
} else
{var statearr_30412_30486 = state_30384__$1;(statearr_30412_30486[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (13)))
{var inst_30271 = (state_30384[(28)]);var inst_30274 = cljs.core.async.close_BANG_.call(null,inst_30271);var state_30384__$1 = state_30384;var statearr_30413_30487 = state_30384__$1;(statearr_30413_30487[(2)] = inst_30274);
(statearr_30413_30487[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (22)))
{var inst_30292 = (state_30384[(8)]);var inst_30295 = cljs.core.async.close_BANG_.call(null,inst_30292);var state_30384__$1 = state_30384;var statearr_30414_30488 = state_30384__$1;(statearr_30414_30488[(2)] = inst_30295);
(statearr_30414_30488[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (36)))
{var inst_30341 = (state_30384[(17)]);var inst_30345 = cljs.core.chunk_first.call(null,inst_30341);var inst_30346 = cljs.core.chunk_rest.call(null,inst_30341);var inst_30347 = cljs.core.count.call(null,inst_30345);var inst_30320 = inst_30346;var inst_30321 = inst_30345;var inst_30322 = inst_30347;var inst_30323 = (0);var state_30384__$1 = (function (){var statearr_30415 = state_30384;(statearr_30415[(9)] = inst_30323);
(statearr_30415[(18)] = inst_30322);
(statearr_30415[(10)] = inst_30321);
(statearr_30415[(20)] = inst_30320);
return statearr_30415;
})();var statearr_30416_30489 = state_30384__$1;(statearr_30416_30489[(2)] = null);
(statearr_30416_30489[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (41)))
{var inst_30350 = (state_30384[(25)]);var inst_30252 = (state_30384[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30384,(40),Object,null,(39));var inst_30357 = cljs.core.async.put_BANG_.call(null,inst_30350,inst_30252,done);var state_30384__$1 = state_30384;var statearr_30417_30490 = state_30384__$1;(statearr_30417_30490[(2)] = inst_30357);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30384__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (43)))
{var state_30384__$1 = state_30384;var statearr_30418_30491 = state_30384__$1;(statearr_30418_30491[(2)] = null);
(statearr_30418_30491[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (29)))
{var inst_30368 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30419_30492 = state_30384__$1;(statearr_30419_30492[(2)] = inst_30368);
(statearr_30419_30492[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (44)))
{var inst_30377 = (state_30384[(2)]);var state_30384__$1 = (function (){var statearr_30420 = state_30384;(statearr_30420[(29)] = inst_30377);
return statearr_30420;
})();var statearr_30421_30493 = state_30384__$1;(statearr_30421_30493[(2)] = null);
(statearr_30421_30493[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (6)))
{var inst_30312 = (state_30384[(30)]);var inst_30311 = cljs.core.deref.call(null,cs);var inst_30312__$1 = cljs.core.keys.call(null,inst_30311);var inst_30313 = cljs.core.count.call(null,inst_30312__$1);var inst_30314 = cljs.core.reset_BANG_.call(null,dctr,inst_30313);var inst_30319 = cljs.core.seq.call(null,inst_30312__$1);var inst_30320 = inst_30319;var inst_30321 = null;var inst_30322 = (0);var inst_30323 = (0);var state_30384__$1 = (function (){var statearr_30422 = state_30384;(statearr_30422[(9)] = inst_30323);
(statearr_30422[(31)] = inst_30314);
(statearr_30422[(18)] = inst_30322);
(statearr_30422[(10)] = inst_30321);
(statearr_30422[(20)] = inst_30320);
(statearr_30422[(30)] = inst_30312__$1);
return statearr_30422;
})();var statearr_30423_30494 = state_30384__$1;(statearr_30423_30494[(2)] = null);
(statearr_30423_30494[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (28)))
{var inst_30320 = (state_30384[(20)]);var inst_30341 = (state_30384[(17)]);var inst_30341__$1 = cljs.core.seq.call(null,inst_30320);var state_30384__$1 = (function (){var statearr_30424 = state_30384;(statearr_30424[(17)] = inst_30341__$1);
return statearr_30424;
})();if(inst_30341__$1)
{var statearr_30425_30495 = state_30384__$1;(statearr_30425_30495[(1)] = (33));
} else
{var statearr_30426_30496 = state_30384__$1;(statearr_30426_30496[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (25)))
{var inst_30323 = (state_30384[(9)]);var inst_30322 = (state_30384[(18)]);var inst_30325 = (inst_30323 < inst_30322);var inst_30326 = inst_30325;var state_30384__$1 = state_30384;if(cljs.core.truth_(inst_30326))
{var statearr_30427_30497 = state_30384__$1;(statearr_30427_30497[(1)] = (27));
} else
{var statearr_30428_30498 = state_30384__$1;(statearr_30428_30498[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (34)))
{var state_30384__$1 = state_30384;var statearr_30429_30499 = state_30384__$1;(statearr_30429_30499[(2)] = null);
(statearr_30429_30499[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (17)))
{var state_30384__$1 = state_30384;var statearr_30430_30500 = state_30384__$1;(statearr_30430_30500[(2)] = null);
(statearr_30430_30500[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (3)))
{var inst_30382 = (state_30384[(2)]);var state_30384__$1 = state_30384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30384__$1,inst_30382);
} else
{if((state_val_30385 === (12)))
{var inst_30307 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30431_30501 = state_30384__$1;(statearr_30431_30501[(2)] = inst_30307);
(statearr_30431_30501[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (2)))
{var state_30384__$1 = state_30384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30384__$1,(4),ch);
} else
{if((state_val_30385 === (23)))
{var state_30384__$1 = state_30384;var statearr_30432_30502 = state_30384__$1;(statearr_30432_30502[(2)] = null);
(statearr_30432_30502[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (35)))
{var inst_30366 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30433_30503 = state_30384__$1;(statearr_30433_30503[(2)] = inst_30366);
(statearr_30433_30503[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (19)))
{var inst_30281 = (state_30384[(7)]);var inst_30285 = cljs.core.chunk_first.call(null,inst_30281);var inst_30286 = cljs.core.chunk_rest.call(null,inst_30281);var inst_30287 = cljs.core.count.call(null,inst_30285);var inst_30261 = inst_30286;var inst_30262 = inst_30285;var inst_30263 = inst_30287;var inst_30264 = (0);var state_30384__$1 = (function (){var statearr_30434 = state_30384;(statearr_30434[(12)] = inst_30262);
(statearr_30434[(13)] = inst_30263);
(statearr_30434[(14)] = inst_30264);
(statearr_30434[(15)] = inst_30261);
return statearr_30434;
})();var statearr_30435_30504 = state_30384__$1;(statearr_30435_30504[(2)] = null);
(statearr_30435_30504[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (11)))
{var inst_30281 = (state_30384[(7)]);var inst_30261 = (state_30384[(15)]);var inst_30281__$1 = cljs.core.seq.call(null,inst_30261);var state_30384__$1 = (function (){var statearr_30436 = state_30384;(statearr_30436[(7)] = inst_30281__$1);
return statearr_30436;
})();if(inst_30281__$1)
{var statearr_30437_30505 = state_30384__$1;(statearr_30437_30505[(1)] = (16));
} else
{var statearr_30438_30506 = state_30384__$1;(statearr_30438_30506[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (9)))
{var inst_30309 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30439_30507 = state_30384__$1;(statearr_30439_30507[(2)] = inst_30309);
(statearr_30439_30507[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (5)))
{var inst_30259 = cljs.core.deref.call(null,cs);var inst_30260 = cljs.core.seq.call(null,inst_30259);var inst_30261 = inst_30260;var inst_30262 = null;var inst_30263 = (0);var inst_30264 = (0);var state_30384__$1 = (function (){var statearr_30440 = state_30384;(statearr_30440[(12)] = inst_30262);
(statearr_30440[(13)] = inst_30263);
(statearr_30440[(14)] = inst_30264);
(statearr_30440[(15)] = inst_30261);
return statearr_30440;
})();var statearr_30441_30508 = state_30384__$1;(statearr_30441_30508[(2)] = null);
(statearr_30441_30508[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (14)))
{var state_30384__$1 = state_30384;var statearr_30442_30509 = state_30384__$1;(statearr_30442_30509[(2)] = null);
(statearr_30442_30509[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (45)))
{var inst_30374 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30443_30510 = state_30384__$1;(statearr_30443_30510[(2)] = inst_30374);
(statearr_30443_30510[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (26)))
{var inst_30312 = (state_30384[(30)]);var inst_30370 = (state_30384[(2)]);var inst_30371 = cljs.core.seq.call(null,inst_30312);var state_30384__$1 = (function (){var statearr_30444 = state_30384;(statearr_30444[(32)] = inst_30370);
return statearr_30444;
})();if(inst_30371)
{var statearr_30445_30511 = state_30384__$1;(statearr_30445_30511[(1)] = (42));
} else
{var statearr_30446_30512 = state_30384__$1;(statearr_30446_30512[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (16)))
{var inst_30281 = (state_30384[(7)]);var inst_30283 = cljs.core.chunked_seq_QMARK_.call(null,inst_30281);var state_30384__$1 = state_30384;if(inst_30283)
{var statearr_30450_30513 = state_30384__$1;(statearr_30450_30513[(1)] = (19));
} else
{var statearr_30451_30514 = state_30384__$1;(statearr_30451_30514[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (38)))
{var inst_30363 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30452_30515 = state_30384__$1;(statearr_30452_30515[(2)] = inst_30363);
(statearr_30452_30515[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (30)))
{var inst_30323 = (state_30384[(9)]);var inst_30322 = (state_30384[(18)]);var inst_30321 = (state_30384[(10)]);var inst_30320 = (state_30384[(20)]);var inst_30337 = (state_30384[(2)]);var inst_30338 = (inst_30323 + (1));var tmp30447 = inst_30322;var tmp30448 = inst_30321;var tmp30449 = inst_30320;var inst_30320__$1 = tmp30449;var inst_30321__$1 = tmp30448;var inst_30322__$1 = tmp30447;var inst_30323__$1 = inst_30338;var state_30384__$1 = (function (){var statearr_30453 = state_30384;(statearr_30453[(33)] = inst_30337);
(statearr_30453[(9)] = inst_30323__$1);
(statearr_30453[(18)] = inst_30322__$1);
(statearr_30453[(10)] = inst_30321__$1);
(statearr_30453[(20)] = inst_30320__$1);
return statearr_30453;
})();var statearr_30454_30516 = state_30384__$1;(statearr_30454_30516[(2)] = null);
(statearr_30454_30516[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (10)))
{var inst_30262 = (state_30384[(12)]);var inst_30264 = (state_30384[(14)]);var inst_30270 = cljs.core._nth.call(null,inst_30262,inst_30264);var inst_30271 = cljs.core.nth.call(null,inst_30270,(0),null);var inst_30272 = cljs.core.nth.call(null,inst_30270,(1),null);var state_30384__$1 = (function (){var statearr_30455 = state_30384;(statearr_30455[(28)] = inst_30271);
return statearr_30455;
})();if(cljs.core.truth_(inst_30272))
{var statearr_30456_30517 = state_30384__$1;(statearr_30456_30517[(1)] = (13));
} else
{var statearr_30457_30518 = state_30384__$1;(statearr_30457_30518[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (18)))
{var inst_30305 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30458_30519 = state_30384__$1;(statearr_30458_30519[(2)] = inst_30305);
(statearr_30458_30519[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (42)))
{var state_30384__$1 = state_30384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30384__$1,(45),dchan);
} else
{if((state_val_30385 === (37)))
{var inst_30341 = (state_30384[(17)]);var inst_30350 = cljs.core.first.call(null,inst_30341);var state_30384__$1 = (function (){var statearr_30459 = state_30384;(statearr_30459[(25)] = inst_30350);
return statearr_30459;
})();var statearr_30460_30520 = state_30384__$1;(statearr_30460_30520[(2)] = null);
(statearr_30460_30520[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (8)))
{var inst_30263 = (state_30384[(13)]);var inst_30264 = (state_30384[(14)]);var inst_30266 = (inst_30264 < inst_30263);var inst_30267 = inst_30266;var state_30384__$1 = state_30384;if(cljs.core.truth_(inst_30267))
{var statearr_30461_30521 = state_30384__$1;(statearr_30461_30521[(1)] = (10));
} else
{var statearr_30462_30522 = state_30384__$1;(statearr_30462_30522[(1)] = (11));
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
});})(c__5708__auto___30470,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___30470,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30466[(0)] = state_machine__5694__auto__);
(statearr_30466[(1)] = (1));
return statearr_30466;
});
var state_machine__5694__auto____1 = (function (state_30384){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30384);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30467){if((e30467 instanceof Object))
{var ex__5697__auto__ = e30467;var statearr_30468_30523 = state_30384;(statearr_30468_30523[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30384);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30467;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30524 = state_30384;
state_30384 = G__30524;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30384){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30470,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_30469 = f__5709__auto__.call(null);(statearr_30469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30470);
return statearr_30469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30470,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj30526 = {};return obj30526;
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
;var m = (function (){if(typeof cljs.core.async.t30636 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30636 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30637){
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
this.meta30637 = meta30637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30636.cljs$lang$type = true;
cljs.core.async.t30636.cljs$lang$ctorStr = "cljs.core.async/t30636";
cljs.core.async.t30636.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t30636");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30636.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t30636.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30636.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30636.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30636.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30636.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30636.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30636.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30638){var self__ = this;
var _30638__$1 = this;return self__.meta30637;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30638,meta30637__$1){var self__ = this;
var _30638__$1 = this;return (new cljs.core.async.t30636(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30637__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t30636 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30636(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30637){return (new cljs.core.async.t30636(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30637));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t30636(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___30745 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30703){var state_val_30704 = (state_30703[(1)]);if((state_val_30704 === (7)))
{var inst_30652 = (state_30703[(7)]);var inst_30657 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30652);var state_30703__$1 = state_30703;var statearr_30705_30746 = state_30703__$1;(statearr_30705_30746[(2)] = inst_30657);
(statearr_30705_30746[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (20)))
{var inst_30667 = (state_30703[(8)]);var state_30703__$1 = state_30703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30703__$1,(23),out,inst_30667);
} else
{if((state_val_30704 === (1)))
{var inst_30642 = (state_30703[(9)]);var inst_30642__$1 = calc_state.call(null);var inst_30643 = cljs.core.seq_QMARK_.call(null,inst_30642__$1);var state_30703__$1 = (function (){var statearr_30706 = state_30703;(statearr_30706[(9)] = inst_30642__$1);
return statearr_30706;
})();if(inst_30643)
{var statearr_30707_30747 = state_30703__$1;(statearr_30707_30747[(1)] = (2));
} else
{var statearr_30708_30748 = state_30703__$1;(statearr_30708_30748[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (4)))
{var inst_30642 = (state_30703[(9)]);var inst_30648 = (state_30703[(2)]);var inst_30649 = cljs.core.get.call(null,inst_30648,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_30650 = cljs.core.get.call(null,inst_30648,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_30651 = cljs.core.get.call(null,inst_30648,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_30652 = inst_30642;var state_30703__$1 = (function (){var statearr_30709 = state_30703;(statearr_30709[(10)] = inst_30651);
(statearr_30709[(7)] = inst_30652);
(statearr_30709[(11)] = inst_30650);
(statearr_30709[(12)] = inst_30649);
return statearr_30709;
})();var statearr_30710_30749 = state_30703__$1;(statearr_30710_30749[(2)] = null);
(statearr_30710_30749[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (15)))
{var state_30703__$1 = state_30703;var statearr_30711_30750 = state_30703__$1;(statearr_30711_30750[(2)] = null);
(statearr_30711_30750[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (21)))
{var state_30703__$1 = state_30703;var statearr_30712_30751 = state_30703__$1;(statearr_30712_30751[(2)] = null);
(statearr_30712_30751[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (13)))
{var inst_30699 = (state_30703[(2)]);var state_30703__$1 = state_30703;var statearr_30713_30752 = state_30703__$1;(statearr_30713_30752[(2)] = inst_30699);
(statearr_30713_30752[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (22)))
{var inst_30660 = (state_30703[(13)]);var inst_30696 = (state_30703[(2)]);var inst_30652 = inst_30660;var state_30703__$1 = (function (){var statearr_30714 = state_30703;(statearr_30714[(7)] = inst_30652);
(statearr_30714[(14)] = inst_30696);
return statearr_30714;
})();var statearr_30715_30753 = state_30703__$1;(statearr_30715_30753[(2)] = null);
(statearr_30715_30753[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (6)))
{var inst_30701 = (state_30703[(2)]);var state_30703__$1 = state_30703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30703__$1,inst_30701);
} else
{if((state_val_30704 === (17)))
{var inst_30682 = (state_30703[(15)]);var state_30703__$1 = state_30703;var statearr_30716_30754 = state_30703__$1;(statearr_30716_30754[(2)] = inst_30682);
(statearr_30716_30754[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (3)))
{var inst_30642 = (state_30703[(9)]);var state_30703__$1 = state_30703;var statearr_30717_30755 = state_30703__$1;(statearr_30717_30755[(2)] = inst_30642);
(statearr_30717_30755[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (12)))
{var inst_30663 = (state_30703[(16)]);var inst_30682 = (state_30703[(15)]);var inst_30668 = (state_30703[(17)]);var inst_30682__$1 = inst_30663.call(null,inst_30668);var state_30703__$1 = (function (){var statearr_30718 = state_30703;(statearr_30718[(15)] = inst_30682__$1);
return statearr_30718;
})();if(cljs.core.truth_(inst_30682__$1))
{var statearr_30719_30756 = state_30703__$1;(statearr_30719_30756[(1)] = (17));
} else
{var statearr_30720_30757 = state_30703__$1;(statearr_30720_30757[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (2)))
{var inst_30642 = (state_30703[(9)]);var inst_30645 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30642);var state_30703__$1 = state_30703;var statearr_30721_30758 = state_30703__$1;(statearr_30721_30758[(2)] = inst_30645);
(statearr_30721_30758[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (23)))
{var inst_30693 = (state_30703[(2)]);var state_30703__$1 = state_30703;var statearr_30722_30759 = state_30703__$1;(statearr_30722_30759[(2)] = inst_30693);
(statearr_30722_30759[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (19)))
{var inst_30690 = (state_30703[(2)]);var state_30703__$1 = state_30703;if(cljs.core.truth_(inst_30690))
{var statearr_30723_30760 = state_30703__$1;(statearr_30723_30760[(1)] = (20));
} else
{var statearr_30724_30761 = state_30703__$1;(statearr_30724_30761[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (11)))
{var inst_30667 = (state_30703[(8)]);var inst_30673 = (inst_30667 == null);var state_30703__$1 = state_30703;if(cljs.core.truth_(inst_30673))
{var statearr_30725_30762 = state_30703__$1;(statearr_30725_30762[(1)] = (14));
} else
{var statearr_30726_30763 = state_30703__$1;(statearr_30726_30763[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (9)))
{var inst_30660 = (state_30703[(13)]);var inst_30660__$1 = (state_30703[(2)]);var inst_30661 = cljs.core.get.call(null,inst_30660__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_30662 = cljs.core.get.call(null,inst_30660__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_30663 = cljs.core.get.call(null,inst_30660__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_30703__$1 = (function (){var statearr_30727 = state_30703;(statearr_30727[(16)] = inst_30663);
(statearr_30727[(18)] = inst_30662);
(statearr_30727[(13)] = inst_30660__$1);
return statearr_30727;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30703__$1,(10),inst_30661);
} else
{if((state_val_30704 === (5)))
{var inst_30652 = (state_30703[(7)]);var inst_30655 = cljs.core.seq_QMARK_.call(null,inst_30652);var state_30703__$1 = state_30703;if(inst_30655)
{var statearr_30728_30764 = state_30703__$1;(statearr_30728_30764[(1)] = (7));
} else
{var statearr_30729_30765 = state_30703__$1;(statearr_30729_30765[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (14)))
{var inst_30668 = (state_30703[(17)]);var inst_30675 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30668);var state_30703__$1 = state_30703;var statearr_30730_30766 = state_30703__$1;(statearr_30730_30766[(2)] = inst_30675);
(statearr_30730_30766[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (16)))
{var inst_30678 = (state_30703[(2)]);var inst_30679 = calc_state.call(null);var inst_30652 = inst_30679;var state_30703__$1 = (function (){var statearr_30731 = state_30703;(statearr_30731[(7)] = inst_30652);
(statearr_30731[(19)] = inst_30678);
return statearr_30731;
})();var statearr_30732_30767 = state_30703__$1;(statearr_30732_30767[(2)] = null);
(statearr_30732_30767[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (10)))
{var inst_30668 = (state_30703[(17)]);var inst_30667 = (state_30703[(8)]);var inst_30666 = (state_30703[(2)]);var inst_30667__$1 = cljs.core.nth.call(null,inst_30666,(0),null);var inst_30668__$1 = cljs.core.nth.call(null,inst_30666,(1),null);var inst_30669 = (inst_30667__$1 == null);var inst_30670 = cljs.core._EQ_.call(null,inst_30668__$1,change);var inst_30671 = (inst_30669) || (inst_30670);var state_30703__$1 = (function (){var statearr_30733 = state_30703;(statearr_30733[(17)] = inst_30668__$1);
(statearr_30733[(8)] = inst_30667__$1);
return statearr_30733;
})();if(cljs.core.truth_(inst_30671))
{var statearr_30734_30768 = state_30703__$1;(statearr_30734_30768[(1)] = (11));
} else
{var statearr_30735_30769 = state_30703__$1;(statearr_30735_30769[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (18)))
{var inst_30663 = (state_30703[(16)]);var inst_30662 = (state_30703[(18)]);var inst_30668 = (state_30703[(17)]);var inst_30685 = cljs.core.empty_QMARK_.call(null,inst_30663);var inst_30686 = inst_30662.call(null,inst_30668);var inst_30687 = cljs.core.not.call(null,inst_30686);var inst_30688 = (inst_30685) && (inst_30687);var state_30703__$1 = state_30703;var statearr_30736_30770 = state_30703__$1;(statearr_30736_30770[(2)] = inst_30688);
(statearr_30736_30770[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (8)))
{var inst_30652 = (state_30703[(7)]);var state_30703__$1 = state_30703;var statearr_30737_30771 = state_30703__$1;(statearr_30737_30771[(2)] = inst_30652);
(statearr_30737_30771[(1)] = (9));
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
});})(c__5708__auto___30745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___30745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30741[(0)] = state_machine__5694__auto__);
(statearr_30741[(1)] = (1));
return statearr_30741;
});
var state_machine__5694__auto____1 = (function (state_30703){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30703);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30742){if((e30742 instanceof Object))
{var ex__5697__auto__ = e30742;var statearr_30743_30772 = state_30703;(statearr_30743_30772[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30742;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30773 = state_30703;
state_30703 = G__30773;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30703){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_30744 = f__5709__auto__.call(null);(statearr_30744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30745);
return statearr_30744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj30775 = {};return obj30775;
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
return (function (p1__30776_SHARP_){if(cljs.core.truth_(p1__30776_SHARP_.call(null,topic)))
{return p1__30776_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__30776_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t30901 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30901 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30902){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30902 = meta30902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30901.cljs$lang$type = true;
cljs.core.async.t30901.cljs$lang$ctorStr = "cljs.core.async/t30901";
cljs.core.async.t30901.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t30901");
});})(mults,ensure_mult))
;
cljs.core.async.t30901.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t30901.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t30901.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t30901.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t30901.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t30901.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t30901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30903){var self__ = this;
var _30903__$1 = this;return self__.meta30902;
});})(mults,ensure_mult))
;
cljs.core.async.t30901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30903,meta30902__$1){var self__ = this;
var _30903__$1 = this;return (new cljs.core.async.t30901(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30902__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t30901 = ((function (mults,ensure_mult){
return (function __GT_t30901(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30902){return (new cljs.core.async.t30901(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30902));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t30901(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___31025 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31025,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31025,mults,ensure_mult,p){
return (function (state_30977){var state_val_30978 = (state_30977[(1)]);if((state_val_30978 === (7)))
{var inst_30973 = (state_30977[(2)]);var state_30977__$1 = state_30977;var statearr_30979_31026 = state_30977__$1;(statearr_30979_31026[(2)] = inst_30973);
(statearr_30979_31026[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (20)))
{var state_30977__$1 = state_30977;var statearr_30980_31027 = state_30977__$1;(statearr_30980_31027[(2)] = null);
(statearr_30980_31027[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (1)))
{var state_30977__$1 = state_30977;var statearr_30981_31028 = state_30977__$1;(statearr_30981_31028[(2)] = null);
(statearr_30981_31028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (24)))
{var inst_30956 = (state_30977[(7)]);var inst_30906 = (state_30977[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30977,(23),Object,null,(22));var inst_30963 = cljs.core.async.muxch_STAR_.call(null,inst_30956);var state_30977__$1 = state_30977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30977__$1,(25),inst_30963,inst_30906);
} else
{if((state_val_30978 === (4)))
{var inst_30906 = (state_30977[(8)]);var inst_30906__$1 = (state_30977[(2)]);var inst_30907 = (inst_30906__$1 == null);var state_30977__$1 = (function (){var statearr_30982 = state_30977;(statearr_30982[(8)] = inst_30906__$1);
return statearr_30982;
})();if(cljs.core.truth_(inst_30907))
{var statearr_30983_31029 = state_30977__$1;(statearr_30983_31029[(1)] = (5));
} else
{var statearr_30984_31030 = state_30977__$1;(statearr_30984_31030[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (15)))
{var inst_30948 = (state_30977[(2)]);var state_30977__$1 = state_30977;var statearr_30985_31031 = state_30977__$1;(statearr_30985_31031[(2)] = inst_30948);
(statearr_30985_31031[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (21)))
{var inst_30970 = (state_30977[(2)]);var state_30977__$1 = (function (){var statearr_30986 = state_30977;(statearr_30986[(9)] = inst_30970);
return statearr_30986;
})();var statearr_30987_31032 = state_30977__$1;(statearr_30987_31032[(2)] = null);
(statearr_30987_31032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (13)))
{var inst_30930 = (state_30977[(10)]);var inst_30932 = cljs.core.chunked_seq_QMARK_.call(null,inst_30930);var state_30977__$1 = state_30977;if(inst_30932)
{var statearr_30988_31033 = state_30977__$1;(statearr_30988_31033[(1)] = (16));
} else
{var statearr_30989_31034 = state_30977__$1;(statearr_30989_31034[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (22)))
{var inst_30967 = (state_30977[(2)]);var state_30977__$1 = state_30977;var statearr_30990_31035 = state_30977__$1;(statearr_30990_31035[(2)] = inst_30967);
(statearr_30990_31035[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (6)))
{var inst_30954 = (state_30977[(11)]);var inst_30956 = (state_30977[(7)]);var inst_30906 = (state_30977[(8)]);var inst_30954__$1 = topic_fn.call(null,inst_30906);var inst_30955 = cljs.core.deref.call(null,mults);var inst_30956__$1 = cljs.core.get.call(null,inst_30955,inst_30954__$1);var state_30977__$1 = (function (){var statearr_30991 = state_30977;(statearr_30991[(11)] = inst_30954__$1);
(statearr_30991[(7)] = inst_30956__$1);
return statearr_30991;
})();if(cljs.core.truth_(inst_30956__$1))
{var statearr_30992_31036 = state_30977__$1;(statearr_30992_31036[(1)] = (19));
} else
{var statearr_30993_31037 = state_30977__$1;(statearr_30993_31037[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (25)))
{var inst_30965 = (state_30977[(2)]);var state_30977__$1 = state_30977;var statearr_30994_31038 = state_30977__$1;(statearr_30994_31038[(2)] = inst_30965);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30977__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (17)))
{var inst_30930 = (state_30977[(10)]);var inst_30939 = cljs.core.first.call(null,inst_30930);var inst_30940 = cljs.core.async.muxch_STAR_.call(null,inst_30939);var inst_30941 = cljs.core.async.close_BANG_.call(null,inst_30940);var inst_30942 = cljs.core.next.call(null,inst_30930);var inst_30916 = inst_30942;var inst_30917 = null;var inst_30918 = (0);var inst_30919 = (0);var state_30977__$1 = (function (){var statearr_30995 = state_30977;(statearr_30995[(12)] = inst_30919);
(statearr_30995[(13)] = inst_30941);
(statearr_30995[(14)] = inst_30918);
(statearr_30995[(15)] = inst_30917);
(statearr_30995[(16)] = inst_30916);
return statearr_30995;
})();var statearr_30996_31039 = state_30977__$1;(statearr_30996_31039[(2)] = null);
(statearr_30996_31039[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (3)))
{var inst_30975 = (state_30977[(2)]);var state_30977__$1 = state_30977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30977__$1,inst_30975);
} else
{if((state_val_30978 === (12)))
{var inst_30950 = (state_30977[(2)]);var state_30977__$1 = state_30977;var statearr_30997_31040 = state_30977__$1;(statearr_30997_31040[(2)] = inst_30950);
(statearr_30997_31040[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (2)))
{var state_30977__$1 = state_30977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30977__$1,(4),ch);
} else
{if((state_val_30978 === (23)))
{var inst_30954 = (state_30977[(11)]);var inst_30958 = (state_30977[(2)]);var inst_30959 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30954);var state_30977__$1 = (function (){var statearr_30998 = state_30977;(statearr_30998[(17)] = inst_30958);
return statearr_30998;
})();var statearr_30999_31041 = state_30977__$1;(statearr_30999_31041[(2)] = inst_30959);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30977__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (19)))
{var state_30977__$1 = state_30977;var statearr_31000_31042 = state_30977__$1;(statearr_31000_31042[(2)] = null);
(statearr_31000_31042[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (11)))
{var inst_30930 = (state_30977[(10)]);var inst_30916 = (state_30977[(16)]);var inst_30930__$1 = cljs.core.seq.call(null,inst_30916);var state_30977__$1 = (function (){var statearr_31001 = state_30977;(statearr_31001[(10)] = inst_30930__$1);
return statearr_31001;
})();if(inst_30930__$1)
{var statearr_31002_31043 = state_30977__$1;(statearr_31002_31043[(1)] = (13));
} else
{var statearr_31003_31044 = state_30977__$1;(statearr_31003_31044[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (9)))
{var inst_30952 = (state_30977[(2)]);var state_30977__$1 = state_30977;var statearr_31004_31045 = state_30977__$1;(statearr_31004_31045[(2)] = inst_30952);
(statearr_31004_31045[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (5)))
{var inst_30913 = cljs.core.deref.call(null,mults);var inst_30914 = cljs.core.vals.call(null,inst_30913);var inst_30915 = cljs.core.seq.call(null,inst_30914);var inst_30916 = inst_30915;var inst_30917 = null;var inst_30918 = (0);var inst_30919 = (0);var state_30977__$1 = (function (){var statearr_31005 = state_30977;(statearr_31005[(12)] = inst_30919);
(statearr_31005[(14)] = inst_30918);
(statearr_31005[(15)] = inst_30917);
(statearr_31005[(16)] = inst_30916);
return statearr_31005;
})();var statearr_31006_31046 = state_30977__$1;(statearr_31006_31046[(2)] = null);
(statearr_31006_31046[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (14)))
{var state_30977__$1 = state_30977;var statearr_31010_31047 = state_30977__$1;(statearr_31010_31047[(2)] = null);
(statearr_31010_31047[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (16)))
{var inst_30930 = (state_30977[(10)]);var inst_30934 = cljs.core.chunk_first.call(null,inst_30930);var inst_30935 = cljs.core.chunk_rest.call(null,inst_30930);var inst_30936 = cljs.core.count.call(null,inst_30934);var inst_30916 = inst_30935;var inst_30917 = inst_30934;var inst_30918 = inst_30936;var inst_30919 = (0);var state_30977__$1 = (function (){var statearr_31011 = state_30977;(statearr_31011[(12)] = inst_30919);
(statearr_31011[(14)] = inst_30918);
(statearr_31011[(15)] = inst_30917);
(statearr_31011[(16)] = inst_30916);
return statearr_31011;
})();var statearr_31012_31048 = state_30977__$1;(statearr_31012_31048[(2)] = null);
(statearr_31012_31048[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (10)))
{var inst_30919 = (state_30977[(12)]);var inst_30918 = (state_30977[(14)]);var inst_30917 = (state_30977[(15)]);var inst_30916 = (state_30977[(16)]);var inst_30924 = cljs.core._nth.call(null,inst_30917,inst_30919);var inst_30925 = cljs.core.async.muxch_STAR_.call(null,inst_30924);var inst_30926 = cljs.core.async.close_BANG_.call(null,inst_30925);var inst_30927 = (inst_30919 + (1));var tmp31007 = inst_30918;var tmp31008 = inst_30917;var tmp31009 = inst_30916;var inst_30916__$1 = tmp31009;var inst_30917__$1 = tmp31008;var inst_30918__$1 = tmp31007;var inst_30919__$1 = inst_30927;var state_30977__$1 = (function (){var statearr_31013 = state_30977;(statearr_31013[(12)] = inst_30919__$1);
(statearr_31013[(14)] = inst_30918__$1);
(statearr_31013[(18)] = inst_30926);
(statearr_31013[(15)] = inst_30917__$1);
(statearr_31013[(16)] = inst_30916__$1);
return statearr_31013;
})();var statearr_31014_31049 = state_30977__$1;(statearr_31014_31049[(2)] = null);
(statearr_31014_31049[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (18)))
{var inst_30945 = (state_30977[(2)]);var state_30977__$1 = state_30977;var statearr_31015_31050 = state_30977__$1;(statearr_31015_31050[(2)] = inst_30945);
(statearr_31015_31050[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30978 === (8)))
{var inst_30919 = (state_30977[(12)]);var inst_30918 = (state_30977[(14)]);var inst_30921 = (inst_30919 < inst_30918);var inst_30922 = inst_30921;var state_30977__$1 = state_30977;if(cljs.core.truth_(inst_30922))
{var statearr_31016_31051 = state_30977__$1;(statearr_31016_31051[(1)] = (10));
} else
{var statearr_31017_31052 = state_30977__$1;(statearr_31017_31052[(1)] = (11));
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
});})(c__5708__auto___31025,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___31025,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31021[(0)] = state_machine__5694__auto__);
(statearr_31021[(1)] = (1));
return statearr_31021;
});
var state_machine__5694__auto____1 = (function (state_30977){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30977);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31022){if((e31022 instanceof Object))
{var ex__5697__auto__ = e31022;var statearr_31023_31053 = state_30977;(statearr_31023_31053[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30977);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31022;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31054 = state_30977;
state_30977 = G__31054;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30977){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31025,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_31024 = f__5709__auto__.call(null);(statearr_31024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31025);
return statearr_31024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31025,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___31191 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31191,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31191,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31161){var state_val_31162 = (state_31161[(1)]);if((state_val_31162 === (7)))
{var state_31161__$1 = state_31161;var statearr_31163_31192 = state_31161__$1;(statearr_31163_31192[(2)] = null);
(statearr_31163_31192[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (1)))
{var state_31161__$1 = state_31161;var statearr_31164_31193 = state_31161__$1;(statearr_31164_31193[(2)] = null);
(statearr_31164_31193[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (4)))
{var inst_31125 = (state_31161[(7)]);var inst_31127 = (inst_31125 < cnt);var state_31161__$1 = state_31161;if(cljs.core.truth_(inst_31127))
{var statearr_31165_31194 = state_31161__$1;(statearr_31165_31194[(1)] = (6));
} else
{var statearr_31166_31195 = state_31161__$1;(statearr_31166_31195[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (15)))
{var inst_31157 = (state_31161[(2)]);var state_31161__$1 = state_31161;var statearr_31167_31196 = state_31161__$1;(statearr_31167_31196[(2)] = inst_31157);
(statearr_31167_31196[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (13)))
{var inst_31150 = cljs.core.async.close_BANG_.call(null,out);var state_31161__$1 = state_31161;var statearr_31168_31197 = state_31161__$1;(statearr_31168_31197[(2)] = inst_31150);
(statearr_31168_31197[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (6)))
{var state_31161__$1 = state_31161;var statearr_31169_31198 = state_31161__$1;(statearr_31169_31198[(2)] = null);
(statearr_31169_31198[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (3)))
{var inst_31159 = (state_31161[(2)]);var state_31161__$1 = state_31161;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31161__$1,inst_31159);
} else
{if((state_val_31162 === (12)))
{var inst_31147 = (state_31161[(8)]);var inst_31147__$1 = (state_31161[(2)]);var inst_31148 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31147__$1);var state_31161__$1 = (function (){var statearr_31170 = state_31161;(statearr_31170[(8)] = inst_31147__$1);
return statearr_31170;
})();if(cljs.core.truth_(inst_31148))
{var statearr_31171_31199 = state_31161__$1;(statearr_31171_31199[(1)] = (13));
} else
{var statearr_31172_31200 = state_31161__$1;(statearr_31172_31200[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (2)))
{var inst_31124 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_31125 = (0);var state_31161__$1 = (function (){var statearr_31173 = state_31161;(statearr_31173[(9)] = inst_31124);
(statearr_31173[(7)] = inst_31125);
return statearr_31173;
})();var statearr_31174_31201 = state_31161__$1;(statearr_31174_31201[(2)] = null);
(statearr_31174_31201[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (11)))
{var inst_31125 = (state_31161[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31161,(10),Object,null,(9));var inst_31134 = chs__$1.call(null,inst_31125);var inst_31135 = done.call(null,inst_31125);var inst_31136 = cljs.core.async.take_BANG_.call(null,inst_31134,inst_31135);var state_31161__$1 = state_31161;var statearr_31175_31202 = state_31161__$1;(statearr_31175_31202[(2)] = inst_31136);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31161__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (9)))
{var inst_31125 = (state_31161[(7)]);var inst_31138 = (state_31161[(2)]);var inst_31139 = (inst_31125 + (1));var inst_31125__$1 = inst_31139;var state_31161__$1 = (function (){var statearr_31176 = state_31161;(statearr_31176[(7)] = inst_31125__$1);
(statearr_31176[(10)] = inst_31138);
return statearr_31176;
})();var statearr_31177_31203 = state_31161__$1;(statearr_31177_31203[(2)] = null);
(statearr_31177_31203[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (5)))
{var inst_31145 = (state_31161[(2)]);var state_31161__$1 = (function (){var statearr_31178 = state_31161;(statearr_31178[(11)] = inst_31145);
return statearr_31178;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31161__$1,(12),dchan);
} else
{if((state_val_31162 === (14)))
{var inst_31147 = (state_31161[(8)]);var inst_31152 = cljs.core.apply.call(null,f,inst_31147);var state_31161__$1 = state_31161;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31161__$1,(16),out,inst_31152);
} else
{if((state_val_31162 === (16)))
{var inst_31154 = (state_31161[(2)]);var state_31161__$1 = (function (){var statearr_31179 = state_31161;(statearr_31179[(12)] = inst_31154);
return statearr_31179;
})();var statearr_31180_31204 = state_31161__$1;(statearr_31180_31204[(2)] = null);
(statearr_31180_31204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (10)))
{var inst_31129 = (state_31161[(2)]);var inst_31130 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_31161__$1 = (function (){var statearr_31181 = state_31161;(statearr_31181[(13)] = inst_31129);
return statearr_31181;
})();var statearr_31182_31205 = state_31161__$1;(statearr_31182_31205[(2)] = inst_31130);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31161__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31162 === (8)))
{var inst_31143 = (state_31161[(2)]);var state_31161__$1 = state_31161;var statearr_31183_31206 = state_31161__$1;(statearr_31183_31206[(2)] = inst_31143);
(statearr_31183_31206[(1)] = (5));
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
});})(c__5708__auto___31191,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___31191,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31187[(0)] = state_machine__5694__auto__);
(statearr_31187[(1)] = (1));
return statearr_31187;
});
var state_machine__5694__auto____1 = (function (state_31161){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31161);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31188){if((e31188 instanceof Object))
{var ex__5697__auto__ = e31188;var statearr_31189_31207 = state_31161;(statearr_31189_31207[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31161);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31188;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31208 = state_31161;
state_31161 = G__31208;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31161){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31191,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_31190 = f__5709__auto__.call(null);(statearr_31190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31191);
return statearr_31190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31191,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___31316 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31316,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31316,out){
return (function (state_31292){var state_val_31293 = (state_31292[(1)]);if((state_val_31293 === (7)))
{var inst_31271 = (state_31292[(7)]);var inst_31272 = (state_31292[(8)]);var inst_31271__$1 = (state_31292[(2)]);var inst_31272__$1 = cljs.core.nth.call(null,inst_31271__$1,(0),null);var inst_31273 = cljs.core.nth.call(null,inst_31271__$1,(1),null);var inst_31274 = (inst_31272__$1 == null);var state_31292__$1 = (function (){var statearr_31294 = state_31292;(statearr_31294[(7)] = inst_31271__$1);
(statearr_31294[(8)] = inst_31272__$1);
(statearr_31294[(9)] = inst_31273);
return statearr_31294;
})();if(cljs.core.truth_(inst_31274))
{var statearr_31295_31317 = state_31292__$1;(statearr_31295_31317[(1)] = (8));
} else
{var statearr_31296_31318 = state_31292__$1;(statearr_31296_31318[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31293 === (1)))
{var inst_31263 = cljs.core.vec.call(null,chs);var inst_31264 = inst_31263;var state_31292__$1 = (function (){var statearr_31297 = state_31292;(statearr_31297[(10)] = inst_31264);
return statearr_31297;
})();var statearr_31298_31319 = state_31292__$1;(statearr_31298_31319[(2)] = null);
(statearr_31298_31319[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31293 === (4)))
{var inst_31264 = (state_31292[(10)]);var state_31292__$1 = state_31292;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31292__$1,(7),inst_31264);
} else
{if((state_val_31293 === (6)))
{var inst_31288 = (state_31292[(2)]);var state_31292__$1 = state_31292;var statearr_31299_31320 = state_31292__$1;(statearr_31299_31320[(2)] = inst_31288);
(statearr_31299_31320[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31293 === (3)))
{var inst_31290 = (state_31292[(2)]);var state_31292__$1 = state_31292;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31292__$1,inst_31290);
} else
{if((state_val_31293 === (2)))
{var inst_31264 = (state_31292[(10)]);var inst_31266 = cljs.core.count.call(null,inst_31264);var inst_31267 = (inst_31266 > (0));var state_31292__$1 = state_31292;if(cljs.core.truth_(inst_31267))
{var statearr_31301_31321 = state_31292__$1;(statearr_31301_31321[(1)] = (4));
} else
{var statearr_31302_31322 = state_31292__$1;(statearr_31302_31322[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31293 === (11)))
{var inst_31264 = (state_31292[(10)]);var inst_31281 = (state_31292[(2)]);var tmp31300 = inst_31264;var inst_31264__$1 = tmp31300;var state_31292__$1 = (function (){var statearr_31303 = state_31292;(statearr_31303[(11)] = inst_31281);
(statearr_31303[(10)] = inst_31264__$1);
return statearr_31303;
})();var statearr_31304_31323 = state_31292__$1;(statearr_31304_31323[(2)] = null);
(statearr_31304_31323[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31293 === (9)))
{var inst_31272 = (state_31292[(8)]);var state_31292__$1 = state_31292;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31292__$1,(11),out,inst_31272);
} else
{if((state_val_31293 === (5)))
{var inst_31286 = cljs.core.async.close_BANG_.call(null,out);var state_31292__$1 = state_31292;var statearr_31305_31324 = state_31292__$1;(statearr_31305_31324[(2)] = inst_31286);
(statearr_31305_31324[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31293 === (10)))
{var inst_31284 = (state_31292[(2)]);var state_31292__$1 = state_31292;var statearr_31306_31325 = state_31292__$1;(statearr_31306_31325[(2)] = inst_31284);
(statearr_31306_31325[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31293 === (8)))
{var inst_31264 = (state_31292[(10)]);var inst_31271 = (state_31292[(7)]);var inst_31272 = (state_31292[(8)]);var inst_31273 = (state_31292[(9)]);var inst_31276 = (function (){var c = inst_31273;var v = inst_31272;var vec__31269 = inst_31271;var cs = inst_31264;return ((function (c,v,vec__31269,cs,inst_31264,inst_31271,inst_31272,inst_31273,state_val_31293,c__5708__auto___31316,out){
return (function (p1__31209_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__31209_SHARP_);
});
;})(c,v,vec__31269,cs,inst_31264,inst_31271,inst_31272,inst_31273,state_val_31293,c__5708__auto___31316,out))
})();var inst_31277 = cljs.core.filterv.call(null,inst_31276,inst_31264);var inst_31264__$1 = inst_31277;var state_31292__$1 = (function (){var statearr_31307 = state_31292;(statearr_31307[(10)] = inst_31264__$1);
return statearr_31307;
})();var statearr_31308_31326 = state_31292__$1;(statearr_31308_31326[(2)] = null);
(statearr_31308_31326[(1)] = (2));
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
});})(c__5708__auto___31316,out))
;return ((function (switch__5693__auto__,c__5708__auto___31316,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31312 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31312[(0)] = state_machine__5694__auto__);
(statearr_31312[(1)] = (1));
return statearr_31312;
});
var state_machine__5694__auto____1 = (function (state_31292){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31292);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31313){if((e31313 instanceof Object))
{var ex__5697__auto__ = e31313;var statearr_31314_31327 = state_31292;(statearr_31314_31327[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31292);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31313;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31328 = state_31292;
state_31292 = G__31328;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31292){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31316,out))
})();var state__5710__auto__ = (function (){var statearr_31315 = f__5709__auto__.call(null);(statearr_31315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31316);
return statearr_31315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31316,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___31421 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31421,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31421,out){
return (function (state_31398){var state_val_31399 = (state_31398[(1)]);if((state_val_31399 === (7)))
{var inst_31380 = (state_31398[(7)]);var inst_31380__$1 = (state_31398[(2)]);var inst_31381 = (inst_31380__$1 == null);var inst_31382 = cljs.core.not.call(null,inst_31381);var state_31398__$1 = (function (){var statearr_31400 = state_31398;(statearr_31400[(7)] = inst_31380__$1);
return statearr_31400;
})();if(inst_31382)
{var statearr_31401_31422 = state_31398__$1;(statearr_31401_31422[(1)] = (8));
} else
{var statearr_31402_31423 = state_31398__$1;(statearr_31402_31423[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31399 === (1)))
{var inst_31375 = (0);var state_31398__$1 = (function (){var statearr_31403 = state_31398;(statearr_31403[(8)] = inst_31375);
return statearr_31403;
})();var statearr_31404_31424 = state_31398__$1;(statearr_31404_31424[(2)] = null);
(statearr_31404_31424[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31399 === (4)))
{var state_31398__$1 = state_31398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31398__$1,(7),ch);
} else
{if((state_val_31399 === (6)))
{var inst_31393 = (state_31398[(2)]);var state_31398__$1 = state_31398;var statearr_31405_31425 = state_31398__$1;(statearr_31405_31425[(2)] = inst_31393);
(statearr_31405_31425[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31399 === (3)))
{var inst_31395 = (state_31398[(2)]);var inst_31396 = cljs.core.async.close_BANG_.call(null,out);var state_31398__$1 = (function (){var statearr_31406 = state_31398;(statearr_31406[(9)] = inst_31395);
return statearr_31406;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31398__$1,inst_31396);
} else
{if((state_val_31399 === (2)))
{var inst_31375 = (state_31398[(8)]);var inst_31377 = (inst_31375 < n);var state_31398__$1 = state_31398;if(cljs.core.truth_(inst_31377))
{var statearr_31407_31426 = state_31398__$1;(statearr_31407_31426[(1)] = (4));
} else
{var statearr_31408_31427 = state_31398__$1;(statearr_31408_31427[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31399 === (11)))
{var inst_31375 = (state_31398[(8)]);var inst_31385 = (state_31398[(2)]);var inst_31386 = (inst_31375 + (1));var inst_31375__$1 = inst_31386;var state_31398__$1 = (function (){var statearr_31409 = state_31398;(statearr_31409[(8)] = inst_31375__$1);
(statearr_31409[(10)] = inst_31385);
return statearr_31409;
})();var statearr_31410_31428 = state_31398__$1;(statearr_31410_31428[(2)] = null);
(statearr_31410_31428[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31399 === (9)))
{var state_31398__$1 = state_31398;var statearr_31411_31429 = state_31398__$1;(statearr_31411_31429[(2)] = null);
(statearr_31411_31429[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31399 === (5)))
{var state_31398__$1 = state_31398;var statearr_31412_31430 = state_31398__$1;(statearr_31412_31430[(2)] = null);
(statearr_31412_31430[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31399 === (10)))
{var inst_31390 = (state_31398[(2)]);var state_31398__$1 = state_31398;var statearr_31413_31431 = state_31398__$1;(statearr_31413_31431[(2)] = inst_31390);
(statearr_31413_31431[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31399 === (8)))
{var inst_31380 = (state_31398[(7)]);var state_31398__$1 = state_31398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31398__$1,(11),out,inst_31380);
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
});})(c__5708__auto___31421,out))
;return ((function (switch__5693__auto__,c__5708__auto___31421,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31417 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31417[(0)] = state_machine__5694__auto__);
(statearr_31417[(1)] = (1));
return statearr_31417;
});
var state_machine__5694__auto____1 = (function (state_31398){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31398);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31418){if((e31418 instanceof Object))
{var ex__5697__auto__ = e31418;var statearr_31419_31432 = state_31398;(statearr_31419_31432[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31398);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31418;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31433 = state_31398;
state_31398 = G__31433;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31398){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31421,out))
})();var state__5710__auto__ = (function (){var statearr_31420 = f__5709__auto__.call(null);(statearr_31420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31421);
return statearr_31420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31421,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___31530 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31530,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31530,out){
return (function (state_31505){var state_val_31506 = (state_31505[(1)]);if((state_val_31506 === (7)))
{var inst_31500 = (state_31505[(2)]);var state_31505__$1 = state_31505;var statearr_31507_31531 = state_31505__$1;(statearr_31507_31531[(2)] = inst_31500);
(statearr_31507_31531[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31506 === (1)))
{var inst_31482 = null;var state_31505__$1 = (function (){var statearr_31508 = state_31505;(statearr_31508[(7)] = inst_31482);
return statearr_31508;
})();var statearr_31509_31532 = state_31505__$1;(statearr_31509_31532[(2)] = null);
(statearr_31509_31532[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31506 === (4)))
{var inst_31485 = (state_31505[(8)]);var inst_31485__$1 = (state_31505[(2)]);var inst_31486 = (inst_31485__$1 == null);var inst_31487 = cljs.core.not.call(null,inst_31486);var state_31505__$1 = (function (){var statearr_31510 = state_31505;(statearr_31510[(8)] = inst_31485__$1);
return statearr_31510;
})();if(inst_31487)
{var statearr_31511_31533 = state_31505__$1;(statearr_31511_31533[(1)] = (5));
} else
{var statearr_31512_31534 = state_31505__$1;(statearr_31512_31534[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31506 === (6)))
{var state_31505__$1 = state_31505;var statearr_31513_31535 = state_31505__$1;(statearr_31513_31535[(2)] = null);
(statearr_31513_31535[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31506 === (3)))
{var inst_31502 = (state_31505[(2)]);var inst_31503 = cljs.core.async.close_BANG_.call(null,out);var state_31505__$1 = (function (){var statearr_31514 = state_31505;(statearr_31514[(9)] = inst_31502);
return statearr_31514;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31505__$1,inst_31503);
} else
{if((state_val_31506 === (2)))
{var state_31505__$1 = state_31505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31505__$1,(4),ch);
} else
{if((state_val_31506 === (11)))
{var inst_31485 = (state_31505[(8)]);var inst_31494 = (state_31505[(2)]);var inst_31482 = inst_31485;var state_31505__$1 = (function (){var statearr_31515 = state_31505;(statearr_31515[(10)] = inst_31494);
(statearr_31515[(7)] = inst_31482);
return statearr_31515;
})();var statearr_31516_31536 = state_31505__$1;(statearr_31516_31536[(2)] = null);
(statearr_31516_31536[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31506 === (9)))
{var inst_31485 = (state_31505[(8)]);var state_31505__$1 = state_31505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31505__$1,(11),out,inst_31485);
} else
{if((state_val_31506 === (5)))
{var inst_31485 = (state_31505[(8)]);var inst_31482 = (state_31505[(7)]);var inst_31489 = cljs.core._EQ_.call(null,inst_31485,inst_31482);var state_31505__$1 = state_31505;if(inst_31489)
{var statearr_31518_31537 = state_31505__$1;(statearr_31518_31537[(1)] = (8));
} else
{var statearr_31519_31538 = state_31505__$1;(statearr_31519_31538[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31506 === (10)))
{var inst_31497 = (state_31505[(2)]);var state_31505__$1 = state_31505;var statearr_31520_31539 = state_31505__$1;(statearr_31520_31539[(2)] = inst_31497);
(statearr_31520_31539[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31506 === (8)))
{var inst_31482 = (state_31505[(7)]);var tmp31517 = inst_31482;var inst_31482__$1 = tmp31517;var state_31505__$1 = (function (){var statearr_31521 = state_31505;(statearr_31521[(7)] = inst_31482__$1);
return statearr_31521;
})();var statearr_31522_31540 = state_31505__$1;(statearr_31522_31540[(2)] = null);
(statearr_31522_31540[(1)] = (2));
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
});})(c__5708__auto___31530,out))
;return ((function (switch__5693__auto__,c__5708__auto___31530,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31526 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31526[(0)] = state_machine__5694__auto__);
(statearr_31526[(1)] = (1));
return statearr_31526;
});
var state_machine__5694__auto____1 = (function (state_31505){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31505);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31527){if((e31527 instanceof Object))
{var ex__5697__auto__ = e31527;var statearr_31528_31541 = state_31505;(statearr_31528_31541[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31505);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31527;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31542 = state_31505;
state_31505 = G__31542;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31505){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31530,out))
})();var state__5710__auto__ = (function (){var statearr_31529 = f__5709__auto__.call(null);(statearr_31529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31530);
return statearr_31529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31530,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___31677 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31677,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31677,out){
return (function (state_31647){var state_val_31648 = (state_31647[(1)]);if((state_val_31648 === (7)))
{var inst_31643 = (state_31647[(2)]);var state_31647__$1 = state_31647;var statearr_31649_31678 = state_31647__$1;(statearr_31649_31678[(2)] = inst_31643);
(statearr_31649_31678[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31648 === (1)))
{var inst_31610 = (new Array(n));var inst_31611 = inst_31610;var inst_31612 = (0);var state_31647__$1 = (function (){var statearr_31650 = state_31647;(statearr_31650[(7)] = inst_31611);
(statearr_31650[(8)] = inst_31612);
return statearr_31650;
})();var statearr_31651_31679 = state_31647__$1;(statearr_31651_31679[(2)] = null);
(statearr_31651_31679[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31648 === (4)))
{var inst_31615 = (state_31647[(9)]);var inst_31615__$1 = (state_31647[(2)]);var inst_31616 = (inst_31615__$1 == null);var inst_31617 = cljs.core.not.call(null,inst_31616);var state_31647__$1 = (function (){var statearr_31652 = state_31647;(statearr_31652[(9)] = inst_31615__$1);
return statearr_31652;
})();if(inst_31617)
{var statearr_31653_31680 = state_31647__$1;(statearr_31653_31680[(1)] = (5));
} else
{var statearr_31654_31681 = state_31647__$1;(statearr_31654_31681[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31648 === (15)))
{var inst_31637 = (state_31647[(2)]);var state_31647__$1 = state_31647;var statearr_31655_31682 = state_31647__$1;(statearr_31655_31682[(2)] = inst_31637);
(statearr_31655_31682[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31648 === (13)))
{var state_31647__$1 = state_31647;var statearr_31656_31683 = state_31647__$1;(statearr_31656_31683[(2)] = null);
(statearr_31656_31683[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31648 === (6)))
{var inst_31612 = (state_31647[(8)]);var inst_31633 = (inst_31612 > (0));var state_31647__$1 = state_31647;if(cljs.core.truth_(inst_31633))
{var statearr_31657_31684 = state_31647__$1;(statearr_31657_31684[(1)] = (12));
} else
{var statearr_31658_31685 = state_31647__$1;(statearr_31658_31685[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31648 === (3)))
{var inst_31645 = (state_31647[(2)]);var state_31647__$1 = state_31647;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31647__$1,inst_31645);
} else
{if((state_val_31648 === (12)))
{var inst_31611 = (state_31647[(7)]);var inst_31635 = cljs.core.vec.call(null,inst_31611);var state_31647__$1 = state_31647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31647__$1,(15),out,inst_31635);
} else
{if((state_val_31648 === (2)))
{var state_31647__$1 = state_31647;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31647__$1,(4),ch);
} else
{if((state_val_31648 === (11)))
{var inst_31627 = (state_31647[(2)]);var inst_31628 = (new Array(n));var inst_31611 = inst_31628;var inst_31612 = (0);var state_31647__$1 = (function (){var statearr_31659 = state_31647;(statearr_31659[(7)] = inst_31611);
(statearr_31659[(8)] = inst_31612);
(statearr_31659[(10)] = inst_31627);
return statearr_31659;
})();var statearr_31660_31686 = state_31647__$1;(statearr_31660_31686[(2)] = null);
(statearr_31660_31686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31648 === (9)))
{var inst_31611 = (state_31647[(7)]);var inst_31625 = cljs.core.vec.call(null,inst_31611);var state_31647__$1 = state_31647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31647__$1,(11),out,inst_31625);
} else
{if((state_val_31648 === (5)))
{var inst_31611 = (state_31647[(7)]);var inst_31612 = (state_31647[(8)]);var inst_31615 = (state_31647[(9)]);var inst_31620 = (state_31647[(11)]);var inst_31619 = (inst_31611[inst_31612] = inst_31615);var inst_31620__$1 = (inst_31612 + (1));var inst_31621 = (inst_31620__$1 < n);var state_31647__$1 = (function (){var statearr_31661 = state_31647;(statearr_31661[(12)] = inst_31619);
(statearr_31661[(11)] = inst_31620__$1);
return statearr_31661;
})();if(cljs.core.truth_(inst_31621))
{var statearr_31662_31687 = state_31647__$1;(statearr_31662_31687[(1)] = (8));
} else
{var statearr_31663_31688 = state_31647__$1;(statearr_31663_31688[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31648 === (14)))
{var inst_31640 = (state_31647[(2)]);var inst_31641 = cljs.core.async.close_BANG_.call(null,out);var state_31647__$1 = (function (){var statearr_31665 = state_31647;(statearr_31665[(13)] = inst_31640);
return statearr_31665;
})();var statearr_31666_31689 = state_31647__$1;(statearr_31666_31689[(2)] = inst_31641);
(statearr_31666_31689[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31648 === (10)))
{var inst_31631 = (state_31647[(2)]);var state_31647__$1 = state_31647;var statearr_31667_31690 = state_31647__$1;(statearr_31667_31690[(2)] = inst_31631);
(statearr_31667_31690[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31648 === (8)))
{var inst_31611 = (state_31647[(7)]);var inst_31620 = (state_31647[(11)]);var tmp31664 = inst_31611;var inst_31611__$1 = tmp31664;var inst_31612 = inst_31620;var state_31647__$1 = (function (){var statearr_31668 = state_31647;(statearr_31668[(7)] = inst_31611__$1);
(statearr_31668[(8)] = inst_31612);
return statearr_31668;
})();var statearr_31669_31691 = state_31647__$1;(statearr_31669_31691[(2)] = null);
(statearr_31669_31691[(1)] = (2));
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
});})(c__5708__auto___31677,out))
;return ((function (switch__5693__auto__,c__5708__auto___31677,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31673[(0)] = state_machine__5694__auto__);
(statearr_31673[(1)] = (1));
return statearr_31673;
});
var state_machine__5694__auto____1 = (function (state_31647){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31647);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31674){if((e31674 instanceof Object))
{var ex__5697__auto__ = e31674;var statearr_31675_31692 = state_31647;(statearr_31675_31692[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31647);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31674;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31693 = state_31647;
state_31647 = G__31693;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31647){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31677,out))
})();var state__5710__auto__ = (function (){var statearr_31676 = f__5709__auto__.call(null);(statearr_31676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31677);
return statearr_31676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31677,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___31836 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31836,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31836,out){
return (function (state_31806){var state_val_31807 = (state_31806[(1)]);if((state_val_31807 === (7)))
{var inst_31802 = (state_31806[(2)]);var state_31806__$1 = state_31806;var statearr_31808_31837 = state_31806__$1;(statearr_31808_31837[(2)] = inst_31802);
(statearr_31808_31837[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31807 === (1)))
{var inst_31765 = [];var inst_31766 = inst_31765;var inst_31767 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_31806__$1 = (function (){var statearr_31809 = state_31806;(statearr_31809[(7)] = inst_31766);
(statearr_31809[(8)] = inst_31767);
return statearr_31809;
})();var statearr_31810_31838 = state_31806__$1;(statearr_31810_31838[(2)] = null);
(statearr_31810_31838[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31807 === (4)))
{var inst_31770 = (state_31806[(9)]);var inst_31770__$1 = (state_31806[(2)]);var inst_31771 = (inst_31770__$1 == null);var inst_31772 = cljs.core.not.call(null,inst_31771);var state_31806__$1 = (function (){var statearr_31811 = state_31806;(statearr_31811[(9)] = inst_31770__$1);
return statearr_31811;
})();if(inst_31772)
{var statearr_31812_31839 = state_31806__$1;(statearr_31812_31839[(1)] = (5));
} else
{var statearr_31813_31840 = state_31806__$1;(statearr_31813_31840[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31807 === (15)))
{var inst_31796 = (state_31806[(2)]);var state_31806__$1 = state_31806;var statearr_31814_31841 = state_31806__$1;(statearr_31814_31841[(2)] = inst_31796);
(statearr_31814_31841[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31807 === (13)))
{var state_31806__$1 = state_31806;var statearr_31815_31842 = state_31806__$1;(statearr_31815_31842[(2)] = null);
(statearr_31815_31842[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31807 === (6)))
{var inst_31766 = (state_31806[(7)]);var inst_31791 = inst_31766.length;var inst_31792 = (inst_31791 > (0));var state_31806__$1 = state_31806;if(cljs.core.truth_(inst_31792))
{var statearr_31816_31843 = state_31806__$1;(statearr_31816_31843[(1)] = (12));
} else
{var statearr_31817_31844 = state_31806__$1;(statearr_31817_31844[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31807 === (3)))
{var inst_31804 = (state_31806[(2)]);var state_31806__$1 = state_31806;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31806__$1,inst_31804);
} else
{if((state_val_31807 === (12)))
{var inst_31766 = (state_31806[(7)]);var inst_31794 = cljs.core.vec.call(null,inst_31766);var state_31806__$1 = state_31806;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31806__$1,(15),out,inst_31794);
} else
{if((state_val_31807 === (2)))
{var state_31806__$1 = state_31806;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31806__$1,(4),ch);
} else
{if((state_val_31807 === (11)))
{var inst_31770 = (state_31806[(9)]);var inst_31774 = (state_31806[(10)]);var inst_31784 = (state_31806[(2)]);var inst_31785 = [];var inst_31786 = inst_31785.push(inst_31770);var inst_31766 = inst_31785;var inst_31767 = inst_31774;var state_31806__$1 = (function (){var statearr_31818 = state_31806;(statearr_31818[(11)] = inst_31786);
(statearr_31818[(7)] = inst_31766);
(statearr_31818[(8)] = inst_31767);
(statearr_31818[(12)] = inst_31784);
return statearr_31818;
})();var statearr_31819_31845 = state_31806__$1;(statearr_31819_31845[(2)] = null);
(statearr_31819_31845[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31807 === (9)))
{var inst_31766 = (state_31806[(7)]);var inst_31782 = cljs.core.vec.call(null,inst_31766);var state_31806__$1 = state_31806;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31806__$1,(11),out,inst_31782);
} else
{if((state_val_31807 === (5)))
{var inst_31770 = (state_31806[(9)]);var inst_31767 = (state_31806[(8)]);var inst_31774 = (state_31806[(10)]);var inst_31774__$1 = f.call(null,inst_31770);var inst_31775 = cljs.core._EQ_.call(null,inst_31774__$1,inst_31767);var inst_31776 = cljs.core.keyword_identical_QMARK_.call(null,inst_31767,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_31777 = (inst_31775) || (inst_31776);var state_31806__$1 = (function (){var statearr_31820 = state_31806;(statearr_31820[(10)] = inst_31774__$1);
return statearr_31820;
})();if(cljs.core.truth_(inst_31777))
{var statearr_31821_31846 = state_31806__$1;(statearr_31821_31846[(1)] = (8));
} else
{var statearr_31822_31847 = state_31806__$1;(statearr_31822_31847[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31807 === (14)))
{var inst_31799 = (state_31806[(2)]);var inst_31800 = cljs.core.async.close_BANG_.call(null,out);var state_31806__$1 = (function (){var statearr_31824 = state_31806;(statearr_31824[(13)] = inst_31799);
return statearr_31824;
})();var statearr_31825_31848 = state_31806__$1;(statearr_31825_31848[(2)] = inst_31800);
(statearr_31825_31848[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31807 === (10)))
{var inst_31789 = (state_31806[(2)]);var state_31806__$1 = state_31806;var statearr_31826_31849 = state_31806__$1;(statearr_31826_31849[(2)] = inst_31789);
(statearr_31826_31849[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31807 === (8)))
{var inst_31770 = (state_31806[(9)]);var inst_31766 = (state_31806[(7)]);var inst_31774 = (state_31806[(10)]);var inst_31779 = inst_31766.push(inst_31770);var tmp31823 = inst_31766;var inst_31766__$1 = tmp31823;var inst_31767 = inst_31774;var state_31806__$1 = (function (){var statearr_31827 = state_31806;(statearr_31827[(14)] = inst_31779);
(statearr_31827[(7)] = inst_31766__$1);
(statearr_31827[(8)] = inst_31767);
return statearr_31827;
})();var statearr_31828_31850 = state_31806__$1;(statearr_31828_31850[(2)] = null);
(statearr_31828_31850[(1)] = (2));
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
});})(c__5708__auto___31836,out))
;return ((function (switch__5693__auto__,c__5708__auto___31836,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31832[(0)] = state_machine__5694__auto__);
(statearr_31832[(1)] = (1));
return statearr_31832;
});
var state_machine__5694__auto____1 = (function (state_31806){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31806);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31833){if((e31833 instanceof Object))
{var ex__5697__auto__ = e31833;var statearr_31834_31851 = state_31806;(statearr_31834_31851[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31806);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31833;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31852 = state_31806;
state_31806 = G__31852;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31806){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31836,out))
})();var state__5710__auto__ = (function (){var statearr_31835 = f__5709__auto__.call(null);(statearr_31835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31836);
return statearr_31835;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31836,out))
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
