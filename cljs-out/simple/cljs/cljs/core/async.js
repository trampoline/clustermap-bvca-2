// Compiled by ClojureScript 0.0-2227
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25396 = (function (f,fn_handler,meta25397){
this.f = f;
this.fn_handler = fn_handler;
this.meta25397 = meta25397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25396.cljs$lang$type = true;
cljs.core.async.t25396.cljs$lang$ctorStr = "cljs.core.async/t25396";
cljs.core.async.t25396.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t25396");
});
cljs.core.async.t25396.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25398){var self__ = this;
var _25398__$1 = this;return self__.meta25397;
});
cljs.core.async.t25396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25398,meta25397__$1){var self__ = this;
var _25398__$1 = this;return (new cljs.core.async.t25396(self__.f,self__.fn_handler,meta25397__$1));
});
cljs.core.async.__GT_t25396 = (function __GT_t25396(f__$1,fn_handler__$1,meta25397){return (new cljs.core.async.t25396(f__$1,fn_handler__$1,meta25397));
});
}
return (new cljs.core.async.t25396(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25400 = buff;if(G__25400)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__25400.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25400.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25400);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25400);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
{var val_25401 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25401);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_25401,ret){
return (function (){return fn1.call(null,val_25401);
});})(val_25401,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3529__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4397__auto___25402 = n;var x_25403 = 0;while(true){
if((x_25403 < n__4397__auto___25402))
{(a[x_25403] = 0);
{
var G__25404 = (x_25403 + 1);
x_25403 = G__25404;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__25405 = (i + 1);
i = G__25405;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25409 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25409 = (function (flag,alt_flag,meta25410){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25410 = meta25410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25409.cljs$lang$type = true;
cljs.core.async.t25409.cljs$lang$ctorStr = "cljs.core.async/t25409";
cljs.core.async.t25409.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t25409");
});})(flag))
;
cljs.core.async.t25409.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25411){var self__ = this;
var _25411__$1 = this;return self__.meta25410;
});})(flag))
;
cljs.core.async.t25409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25411,meta25410__$1){var self__ = this;
var _25411__$1 = this;return (new cljs.core.async.t25409(self__.flag,self__.alt_flag,meta25410__$1));
});})(flag))
;
cljs.core.async.__GT_t25409 = ((function (flag){
return (function __GT_t25409(flag__$1,alt_flag__$1,meta25410){return (new cljs.core.async.t25409(flag__$1,alt_flag__$1,meta25410));
});})(flag))
;
}
return (new cljs.core.async.t25409(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25415 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25415 = (function (cb,flag,alt_handler,meta25416){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25416 = meta25416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25415.cljs$lang$type = true;
cljs.core.async.t25415.cljs$lang$ctorStr = "cljs.core.async/t25415";
cljs.core.async.t25415.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t25415");
});
cljs.core.async.t25415.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25417){var self__ = this;
var _25417__$1 = this;return self__.meta25416;
});
cljs.core.async.t25415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25417,meta25416__$1){var self__ = this;
var _25417__$1 = this;return (new cljs.core.async.t25415(self__.cb,self__.flag,self__.alt_handler,meta25416__$1));
});
cljs.core.async.__GT_t25415 = (function __GT_t25415(cb__$1,flag__$1,alt_handler__$1,meta25416){return (new cljs.core.async.t25415(cb__$1,flag__$1,alt_handler__$1,meta25416));
});
}
return (new cljs.core.async.t25415(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25418_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25418_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3541__auto__ = wport;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__25419 = (i + 1);
i = G__25419;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3541__auto__ = ret;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3529__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__25420){var map__25422 = p__25420;var map__25422__$1 = ((cljs.core.seq_QMARK_.call(null,map__25422))?cljs.core.apply.call(null,cljs.core.hash_map,map__25422):map__25422);var opts = map__25422__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25420 = null;if (arguments.length > 1) {
  p__25420 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25420);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25423){
var ports = cljs.core.first(arglist__25423);
var p__25420 = cljs.core.rest(arglist__25423);
return alts_BANG___delegate(ports,p__25420);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25431 = (function (ch,f,map_LT_,meta25432){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25432 = meta25432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25431.cljs$lang$type = true;
cljs.core.async.t25431.cljs$lang$ctorStr = "cljs.core.async/t25431";
cljs.core.async.t25431.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t25431");
});
cljs.core.async.t25431.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25431.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25434 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25434 = (function (fn1,_,meta25432,ch,f,map_LT_,meta25435){
this.fn1 = fn1;
this._ = _;
this.meta25432 = meta25432;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25435 = meta25435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25434.cljs$lang$type = true;
cljs.core.async.t25434.cljs$lang$ctorStr = "cljs.core.async/t25434";
cljs.core.async.t25434.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t25434");
});})(___$1))
;
cljs.core.async.t25434.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25434.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25424_SHARP_){return f1.call(null,(((p1__25424_SHARP_ == null))?null:self__.f.call(null,p1__25424_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25436){var self__ = this;
var _25436__$1 = this;return self__.meta25435;
});})(___$1))
;
cljs.core.async.t25434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25436,meta25435__$1){var self__ = this;
var _25436__$1 = this;return (new cljs.core.async.t25434(self__.fn1,self__._,self__.meta25432,self__.ch,self__.f,self__.map_LT_,meta25435__$1));
});})(___$1))
;
cljs.core.async.__GT_t25434 = ((function (___$1){
return (function __GT_t25434(fn1__$1,___$2,meta25432__$1,ch__$2,f__$2,map_LT___$2,meta25435){return (new cljs.core.async.t25434(fn1__$1,___$2,meta25432__$1,ch__$2,f__$2,map_LT___$2,meta25435));
});})(___$1))
;
}
return (new cljs.core.async.t25434(fn1,___$1,self__.meta25432,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25431.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25433){var self__ = this;
var _25433__$1 = this;return self__.meta25432;
});
cljs.core.async.t25431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25433,meta25432__$1){var self__ = this;
var _25433__$1 = this;return (new cljs.core.async.t25431(self__.ch,self__.f,self__.map_LT_,meta25432__$1));
});
cljs.core.async.__GT_t25431 = (function __GT_t25431(ch__$1,f__$1,map_LT___$1,meta25432){return (new cljs.core.async.t25431(ch__$1,f__$1,map_LT___$1,meta25432));
});
}
return (new cljs.core.async.t25431(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25440 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25440 = (function (ch,f,map_GT_,meta25441){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25441 = meta25441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25440.cljs$lang$type = true;
cljs.core.async.t25440.cljs$lang$ctorStr = "cljs.core.async/t25440";
cljs.core.async.t25440.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t25440");
});
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25442){var self__ = this;
var _25442__$1 = this;return self__.meta25441;
});
cljs.core.async.t25440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25442,meta25441__$1){var self__ = this;
var _25442__$1 = this;return (new cljs.core.async.t25440(self__.ch,self__.f,self__.map_GT_,meta25441__$1));
});
cljs.core.async.__GT_t25440 = (function __GT_t25440(ch__$1,f__$1,map_GT___$1,meta25441){return (new cljs.core.async.t25440(ch__$1,f__$1,map_GT___$1,meta25441));
});
}
return (new cljs.core.async.t25440(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25446 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25446 = (function (ch,p,filter_GT_,meta25447){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25447 = meta25447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25446.cljs$lang$type = true;
cljs.core.async.t25446.cljs$lang$ctorStr = "cljs.core.async/t25446";
cljs.core.async.t25446.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t25446");
});
cljs.core.async.t25446.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25446.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25446.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25448){var self__ = this;
var _25448__$1 = this;return self__.meta25447;
});
cljs.core.async.t25446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25448,meta25447__$1){var self__ = this;
var _25448__$1 = this;return (new cljs.core.async.t25446(self__.ch,self__.p,self__.filter_GT_,meta25447__$1));
});
cljs.core.async.__GT_t25446 = (function __GT_t25446(ch__$1,p__$1,filter_GT___$1,meta25447){return (new cljs.core.async.t25446(ch__$1,p__$1,filter_GT___$1,meta25447));
});
}
return (new cljs.core.async.t25446(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___25531 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___25531,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___25531,out){
return (function (state_25510){var state_val_25511 = (state_25510[1]);if((state_val_25511 === 7))
{var inst_25506 = (state_25510[2]);var state_25510__$1 = state_25510;var statearr_25512_25532 = state_25510__$1;(statearr_25512_25532[2] = inst_25506);
(statearr_25512_25532[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25511 === 1))
{var state_25510__$1 = state_25510;var statearr_25513_25533 = state_25510__$1;(statearr_25513_25533[2] = null);
(statearr_25513_25533[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25511 === 4))
{var inst_25492 = (state_25510[7]);var inst_25492__$1 = (state_25510[2]);var inst_25493 = (inst_25492__$1 == null);var state_25510__$1 = (function (){var statearr_25514 = state_25510;(statearr_25514[7] = inst_25492__$1);
return statearr_25514;
})();if(cljs.core.truth_(inst_25493))
{var statearr_25515_25534 = state_25510__$1;(statearr_25515_25534[1] = 5);
} else
{var statearr_25516_25535 = state_25510__$1;(statearr_25516_25535[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25511 === 6))
{var inst_25492 = (state_25510[7]);var inst_25497 = p.call(null,inst_25492);var state_25510__$1 = state_25510;if(cljs.core.truth_(inst_25497))
{var statearr_25517_25536 = state_25510__$1;(statearr_25517_25536[1] = 8);
} else
{var statearr_25518_25537 = state_25510__$1;(statearr_25518_25537[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25511 === 3))
{var inst_25508 = (state_25510[2]);var state_25510__$1 = state_25510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25510__$1,inst_25508);
} else
{if((state_val_25511 === 2))
{var state_25510__$1 = state_25510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25510__$1,4,ch);
} else
{if((state_val_25511 === 11))
{var inst_25500 = (state_25510[2]);var state_25510__$1 = state_25510;var statearr_25519_25538 = state_25510__$1;(statearr_25519_25538[2] = inst_25500);
(statearr_25519_25538[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25511 === 9))
{var state_25510__$1 = state_25510;var statearr_25520_25539 = state_25510__$1;(statearr_25520_25539[2] = null);
(statearr_25520_25539[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25511 === 5))
{var inst_25495 = cljs.core.async.close_BANG_.call(null,out);var state_25510__$1 = state_25510;var statearr_25521_25540 = state_25510__$1;(statearr_25521_25540[2] = inst_25495);
(statearr_25521_25540[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25511 === 10))
{var inst_25503 = (state_25510[2]);var state_25510__$1 = (function (){var statearr_25522 = state_25510;(statearr_25522[8] = inst_25503);
return statearr_25522;
})();var statearr_25523_25541 = state_25510__$1;(statearr_25523_25541[2] = null);
(statearr_25523_25541[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25511 === 8))
{var inst_25492 = (state_25510[7]);var state_25510__$1 = state_25510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25510__$1,11,out,inst_25492);
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
});})(c__5691__auto___25531,out))
;return ((function (switch__5676__auto__,c__5691__auto___25531,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_25527 = [null,null,null,null,null,null,null,null,null];(statearr_25527[0] = state_machine__5677__auto__);
(statearr_25527[1] = 1);
return statearr_25527;
});
var state_machine__5677__auto____1 = (function (state_25510){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_25510);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e25528){if((e25528 instanceof Object))
{var ex__5680__auto__ = e25528;var statearr_25529_25542 = state_25510;(statearr_25529_25542[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25510);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25528;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25543 = state_25510;
state_25510 = G__25543;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_25510){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_25510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___25531,out))
})();var state__5693__auto__ = (function (){var statearr_25530 = f__5692__auto__.call(null);(statearr_25530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___25531);
return statearr_25530;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___25531,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_25695){var state_val_25696 = (state_25695[1]);if((state_val_25696 === 7))
{var inst_25691 = (state_25695[2]);var state_25695__$1 = state_25695;var statearr_25697_25734 = state_25695__$1;(statearr_25697_25734[2] = inst_25691);
(statearr_25697_25734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 20))
{var inst_25666 = (state_25695[7]);var inst_25677 = (state_25695[2]);var inst_25678 = cljs.core.next.call(null,inst_25666);var inst_25652 = inst_25678;var inst_25653 = null;var inst_25654 = 0;var inst_25655 = 0;var state_25695__$1 = (function (){var statearr_25698 = state_25695;(statearr_25698[8] = inst_25677);
(statearr_25698[9] = inst_25653);
(statearr_25698[10] = inst_25652);
(statearr_25698[11] = inst_25655);
(statearr_25698[12] = inst_25654);
return statearr_25698;
})();var statearr_25699_25735 = state_25695__$1;(statearr_25699_25735[2] = null);
(statearr_25699_25735[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 1))
{var state_25695__$1 = state_25695;var statearr_25700_25736 = state_25695__$1;(statearr_25700_25736[2] = null);
(statearr_25700_25736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 4))
{var inst_25641 = (state_25695[13]);var inst_25641__$1 = (state_25695[2]);var inst_25642 = (inst_25641__$1 == null);var state_25695__$1 = (function (){var statearr_25704 = state_25695;(statearr_25704[13] = inst_25641__$1);
return statearr_25704;
})();if(cljs.core.truth_(inst_25642))
{var statearr_25705_25737 = state_25695__$1;(statearr_25705_25737[1] = 5);
} else
{var statearr_25706_25738 = state_25695__$1;(statearr_25706_25738[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 15))
{var state_25695__$1 = state_25695;var statearr_25707_25739 = state_25695__$1;(statearr_25707_25739[2] = null);
(statearr_25707_25739[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 13))
{var inst_25653 = (state_25695[9]);var inst_25652 = (state_25695[10]);var inst_25655 = (state_25695[11]);var inst_25654 = (state_25695[12]);var inst_25662 = (state_25695[2]);var inst_25663 = (inst_25655 + 1);var tmp25701 = inst_25653;var tmp25702 = inst_25652;var tmp25703 = inst_25654;var inst_25652__$1 = tmp25702;var inst_25653__$1 = tmp25701;var inst_25654__$1 = tmp25703;var inst_25655__$1 = inst_25663;var state_25695__$1 = (function (){var statearr_25708 = state_25695;(statearr_25708[14] = inst_25662);
(statearr_25708[9] = inst_25653__$1);
(statearr_25708[10] = inst_25652__$1);
(statearr_25708[11] = inst_25655__$1);
(statearr_25708[12] = inst_25654__$1);
return statearr_25708;
})();var statearr_25709_25740 = state_25695__$1;(statearr_25709_25740[2] = null);
(statearr_25709_25740[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 6))
{var inst_25641 = (state_25695[13]);var inst_25646 = f.call(null,inst_25641);var inst_25651 = cljs.core.seq.call(null,inst_25646);var inst_25652 = inst_25651;var inst_25653 = null;var inst_25654 = 0;var inst_25655 = 0;var state_25695__$1 = (function (){var statearr_25710 = state_25695;(statearr_25710[9] = inst_25653);
(statearr_25710[10] = inst_25652);
(statearr_25710[11] = inst_25655);
(statearr_25710[12] = inst_25654);
return statearr_25710;
})();var statearr_25711_25741 = state_25695__$1;(statearr_25711_25741[2] = null);
(statearr_25711_25741[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 17))
{var inst_25666 = (state_25695[7]);var inst_25670 = cljs.core.chunk_first.call(null,inst_25666);var inst_25671 = cljs.core.chunk_rest.call(null,inst_25666);var inst_25672 = cljs.core.count.call(null,inst_25670);var inst_25652 = inst_25671;var inst_25653 = inst_25670;var inst_25654 = inst_25672;var inst_25655 = 0;var state_25695__$1 = (function (){var statearr_25712 = state_25695;(statearr_25712[9] = inst_25653);
(statearr_25712[10] = inst_25652);
(statearr_25712[11] = inst_25655);
(statearr_25712[12] = inst_25654);
return statearr_25712;
})();var statearr_25713_25742 = state_25695__$1;(statearr_25713_25742[2] = null);
(statearr_25713_25742[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 3))
{var inst_25693 = (state_25695[2]);var state_25695__$1 = state_25695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25695__$1,inst_25693);
} else
{if((state_val_25696 === 12))
{var inst_25686 = (state_25695[2]);var state_25695__$1 = state_25695;var statearr_25714_25743 = state_25695__$1;(statearr_25714_25743[2] = inst_25686);
(statearr_25714_25743[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 2))
{var state_25695__$1 = state_25695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25695__$1,4,in$);
} else
{if((state_val_25696 === 19))
{var inst_25681 = (state_25695[2]);var state_25695__$1 = state_25695;var statearr_25715_25744 = state_25695__$1;(statearr_25715_25744[2] = inst_25681);
(statearr_25715_25744[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 11))
{var inst_25652 = (state_25695[10]);var inst_25666 = (state_25695[7]);var inst_25666__$1 = cljs.core.seq.call(null,inst_25652);var state_25695__$1 = (function (){var statearr_25716 = state_25695;(statearr_25716[7] = inst_25666__$1);
return statearr_25716;
})();if(inst_25666__$1)
{var statearr_25717_25745 = state_25695__$1;(statearr_25717_25745[1] = 14);
} else
{var statearr_25718_25746 = state_25695__$1;(statearr_25718_25746[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 9))
{var inst_25688 = (state_25695[2]);var state_25695__$1 = (function (){var statearr_25719 = state_25695;(statearr_25719[15] = inst_25688);
return statearr_25719;
})();var statearr_25720_25747 = state_25695__$1;(statearr_25720_25747[2] = null);
(statearr_25720_25747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 5))
{var inst_25644 = cljs.core.async.close_BANG_.call(null,out);var state_25695__$1 = state_25695;var statearr_25721_25748 = state_25695__$1;(statearr_25721_25748[2] = inst_25644);
(statearr_25721_25748[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 14))
{var inst_25666 = (state_25695[7]);var inst_25668 = cljs.core.chunked_seq_QMARK_.call(null,inst_25666);var state_25695__$1 = state_25695;if(inst_25668)
{var statearr_25722_25749 = state_25695__$1;(statearr_25722_25749[1] = 17);
} else
{var statearr_25723_25750 = state_25695__$1;(statearr_25723_25750[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 16))
{var inst_25684 = (state_25695[2]);var state_25695__$1 = state_25695;var statearr_25724_25751 = state_25695__$1;(statearr_25724_25751[2] = inst_25684);
(statearr_25724_25751[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25696 === 10))
{var inst_25653 = (state_25695[9]);var inst_25655 = (state_25695[11]);var inst_25660 = cljs.core._nth.call(null,inst_25653,inst_25655);var state_25695__$1 = state_25695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25695__$1,13,out,inst_25660);
} else
{if((state_val_25696 === 18))
{var inst_25666 = (state_25695[7]);var inst_25675 = cljs.core.first.call(null,inst_25666);var state_25695__$1 = state_25695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25695__$1,20,out,inst_25675);
} else
{if((state_val_25696 === 8))
{var inst_25655 = (state_25695[11]);var inst_25654 = (state_25695[12]);var inst_25657 = (inst_25655 < inst_25654);var inst_25658 = inst_25657;var state_25695__$1 = state_25695;if(cljs.core.truth_(inst_25658))
{var statearr_25725_25752 = state_25695__$1;(statearr_25725_25752[1] = 10);
} else
{var statearr_25726_25753 = state_25695__$1;(statearr_25726_25753[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_25730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25730[0] = state_machine__5677__auto__);
(statearr_25730[1] = 1);
return statearr_25730;
});
var state_machine__5677__auto____1 = (function (state_25695){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_25695);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e25731){if((e25731 instanceof Object))
{var ex__5680__auto__ = e25731;var statearr_25732_25754 = state_25695;(statearr_25732_25754[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25731;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25755 = state_25695;
state_25695 = G__25755;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_25695){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_25695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_25733 = f__5692__auto__.call(null);(statearr_25733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_25733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5691__auto___25836 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___25836){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___25836){
return (function (state_25815){var state_val_25816 = (state_25815[1]);if((state_val_25816 === 7))
{var inst_25811 = (state_25815[2]);var state_25815__$1 = state_25815;var statearr_25817_25837 = state_25815__$1;(statearr_25817_25837[2] = inst_25811);
(statearr_25817_25837[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25816 === 1))
{var state_25815__$1 = state_25815;var statearr_25818_25838 = state_25815__$1;(statearr_25818_25838[2] = null);
(statearr_25818_25838[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25816 === 4))
{var inst_25798 = (state_25815[7]);var inst_25798__$1 = (state_25815[2]);var inst_25799 = (inst_25798__$1 == null);var state_25815__$1 = (function (){var statearr_25819 = state_25815;(statearr_25819[7] = inst_25798__$1);
return statearr_25819;
})();if(cljs.core.truth_(inst_25799))
{var statearr_25820_25839 = state_25815__$1;(statearr_25820_25839[1] = 5);
} else
{var statearr_25821_25840 = state_25815__$1;(statearr_25821_25840[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25816 === 6))
{var inst_25798 = (state_25815[7]);var state_25815__$1 = state_25815;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25815__$1,11,to,inst_25798);
} else
{if((state_val_25816 === 3))
{var inst_25813 = (state_25815[2]);var state_25815__$1 = state_25815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25815__$1,inst_25813);
} else
{if((state_val_25816 === 2))
{var state_25815__$1 = state_25815;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25815__$1,4,from);
} else
{if((state_val_25816 === 11))
{var inst_25808 = (state_25815[2]);var state_25815__$1 = (function (){var statearr_25822 = state_25815;(statearr_25822[8] = inst_25808);
return statearr_25822;
})();var statearr_25823_25841 = state_25815__$1;(statearr_25823_25841[2] = null);
(statearr_25823_25841[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25816 === 9))
{var state_25815__$1 = state_25815;var statearr_25824_25842 = state_25815__$1;(statearr_25824_25842[2] = null);
(statearr_25824_25842[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25816 === 5))
{var state_25815__$1 = state_25815;if(cljs.core.truth_(close_QMARK_))
{var statearr_25825_25843 = state_25815__$1;(statearr_25825_25843[1] = 8);
} else
{var statearr_25826_25844 = state_25815__$1;(statearr_25826_25844[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25816 === 10))
{var inst_25805 = (state_25815[2]);var state_25815__$1 = state_25815;var statearr_25827_25845 = state_25815__$1;(statearr_25827_25845[2] = inst_25805);
(statearr_25827_25845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25816 === 8))
{var inst_25802 = cljs.core.async.close_BANG_.call(null,to);var state_25815__$1 = state_25815;var statearr_25828_25846 = state_25815__$1;(statearr_25828_25846[2] = inst_25802);
(statearr_25828_25846[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___25836))
;return ((function (switch__5676__auto__,c__5691__auto___25836){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_25832 = [null,null,null,null,null,null,null,null,null];(statearr_25832[0] = state_machine__5677__auto__);
(statearr_25832[1] = 1);
return statearr_25832;
});
var state_machine__5677__auto____1 = (function (state_25815){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_25815);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e25833){if((e25833 instanceof Object))
{var ex__5680__auto__ = e25833;var statearr_25834_25847 = state_25815;(statearr_25834_25847[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25833;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25848 = state_25815;
state_25815 = G__25848;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_25815){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_25815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___25836))
})();var state__5693__auto__ = (function (){var statearr_25835 = f__5692__auto__.call(null);(statearr_25835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___25836);
return statearr_25835;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___25836))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5691__auto___25935 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___25935,tc,fc){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___25935,tc,fc){
return (function (state_25913){var state_val_25914 = (state_25913[1]);if((state_val_25914 === 7))
{var inst_25909 = (state_25913[2]);var state_25913__$1 = state_25913;var statearr_25915_25936 = state_25913__$1;(statearr_25915_25936[2] = inst_25909);
(statearr_25915_25936[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25914 === 1))
{var state_25913__$1 = state_25913;var statearr_25916_25937 = state_25913__$1;(statearr_25916_25937[2] = null);
(statearr_25916_25937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25914 === 4))
{var inst_25894 = (state_25913[7]);var inst_25894__$1 = (state_25913[2]);var inst_25895 = (inst_25894__$1 == null);var state_25913__$1 = (function (){var statearr_25917 = state_25913;(statearr_25917[7] = inst_25894__$1);
return statearr_25917;
})();if(cljs.core.truth_(inst_25895))
{var statearr_25918_25938 = state_25913__$1;(statearr_25918_25938[1] = 5);
} else
{var statearr_25919_25939 = state_25913__$1;(statearr_25919_25939[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25914 === 6))
{var inst_25894 = (state_25913[7]);var inst_25900 = p.call(null,inst_25894);var state_25913__$1 = state_25913;if(cljs.core.truth_(inst_25900))
{var statearr_25920_25940 = state_25913__$1;(statearr_25920_25940[1] = 9);
} else
{var statearr_25921_25941 = state_25913__$1;(statearr_25921_25941[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25914 === 3))
{var inst_25911 = (state_25913[2]);var state_25913__$1 = state_25913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25913__$1,inst_25911);
} else
{if((state_val_25914 === 2))
{var state_25913__$1 = state_25913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25913__$1,4,ch);
} else
{if((state_val_25914 === 11))
{var inst_25894 = (state_25913[7]);var inst_25904 = (state_25913[2]);var state_25913__$1 = state_25913;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25913__$1,8,inst_25904,inst_25894);
} else
{if((state_val_25914 === 9))
{var state_25913__$1 = state_25913;var statearr_25922_25942 = state_25913__$1;(statearr_25922_25942[2] = tc);
(statearr_25922_25942[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25914 === 5))
{var inst_25897 = cljs.core.async.close_BANG_.call(null,tc);var inst_25898 = cljs.core.async.close_BANG_.call(null,fc);var state_25913__$1 = (function (){var statearr_25923 = state_25913;(statearr_25923[8] = inst_25897);
return statearr_25923;
})();var statearr_25924_25943 = state_25913__$1;(statearr_25924_25943[2] = inst_25898);
(statearr_25924_25943[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25914 === 10))
{var state_25913__$1 = state_25913;var statearr_25925_25944 = state_25913__$1;(statearr_25925_25944[2] = fc);
(statearr_25925_25944[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25914 === 8))
{var inst_25906 = (state_25913[2]);var state_25913__$1 = (function (){var statearr_25926 = state_25913;(statearr_25926[9] = inst_25906);
return statearr_25926;
})();var statearr_25927_25945 = state_25913__$1;(statearr_25927_25945[2] = null);
(statearr_25927_25945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___25935,tc,fc))
;return ((function (switch__5676__auto__,c__5691__auto___25935,tc,fc){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_25931 = [null,null,null,null,null,null,null,null,null,null];(statearr_25931[0] = state_machine__5677__auto__);
(statearr_25931[1] = 1);
return statearr_25931;
});
var state_machine__5677__auto____1 = (function (state_25913){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_25913);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e25932){if((e25932 instanceof Object))
{var ex__5680__auto__ = e25932;var statearr_25933_25946 = state_25913;(statearr_25933_25946[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25913);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25947 = state_25913;
state_25913 = G__25947;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_25913){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_25913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___25935,tc,fc))
})();var state__5693__auto__ = (function (){var statearr_25934 = f__5692__auto__.call(null);(statearr_25934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___25935);
return statearr_25934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___25935,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_25994){var state_val_25995 = (state_25994[1]);if((state_val_25995 === 7))
{var inst_25990 = (state_25994[2]);var state_25994__$1 = state_25994;var statearr_25996_26012 = state_25994__$1;(statearr_25996_26012[2] = inst_25990);
(statearr_25996_26012[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25995 === 6))
{var inst_25983 = (state_25994[7]);var inst_25980 = (state_25994[8]);var inst_25987 = f.call(null,inst_25980,inst_25983);var inst_25980__$1 = inst_25987;var state_25994__$1 = (function (){var statearr_25997 = state_25994;(statearr_25997[8] = inst_25980__$1);
return statearr_25997;
})();var statearr_25998_26013 = state_25994__$1;(statearr_25998_26013[2] = null);
(statearr_25998_26013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25995 === 5))
{var inst_25980 = (state_25994[8]);var state_25994__$1 = state_25994;var statearr_25999_26014 = state_25994__$1;(statearr_25999_26014[2] = inst_25980);
(statearr_25999_26014[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25995 === 4))
{var inst_25983 = (state_25994[7]);var inst_25983__$1 = (state_25994[2]);var inst_25984 = (inst_25983__$1 == null);var state_25994__$1 = (function (){var statearr_26000 = state_25994;(statearr_26000[7] = inst_25983__$1);
return statearr_26000;
})();if(cljs.core.truth_(inst_25984))
{var statearr_26001_26015 = state_25994__$1;(statearr_26001_26015[1] = 5);
} else
{var statearr_26002_26016 = state_25994__$1;(statearr_26002_26016[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25995 === 3))
{var inst_25992 = (state_25994[2]);var state_25994__$1 = state_25994;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25994__$1,inst_25992);
} else
{if((state_val_25995 === 2))
{var state_25994__$1 = state_25994;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25994__$1,4,ch);
} else
{if((state_val_25995 === 1))
{var inst_25980 = init;var state_25994__$1 = (function (){var statearr_26003 = state_25994;(statearr_26003[8] = inst_25980);
return statearr_26003;
})();var statearr_26004_26017 = state_25994__$1;(statearr_26004_26017[2] = null);
(statearr_26004_26017[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_26008 = [null,null,null,null,null,null,null,null,null];(statearr_26008[0] = state_machine__5677__auto__);
(statearr_26008[1] = 1);
return statearr_26008;
});
var state_machine__5677__auto____1 = (function (state_25994){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_25994);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e26009){if((e26009 instanceof Object))
{var ex__5680__auto__ = e26009;var statearr_26010_26018 = state_25994;(statearr_26010_26018[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25994);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26019 = state_25994;
state_25994 = G__26019;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_25994){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_25994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_26011 = f__5692__auto__.call(null);(statearr_26011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_26011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_26081){var state_val_26082 = (state_26081[1]);if((state_val_26082 === 7))
{var inst_26062 = (state_26081[7]);var inst_26067 = (state_26081[2]);var inst_26068 = cljs.core.next.call(null,inst_26062);var inst_26062__$1 = inst_26068;var state_26081__$1 = (function (){var statearr_26083 = state_26081;(statearr_26083[8] = inst_26067);
(statearr_26083[7] = inst_26062__$1);
return statearr_26083;
})();var statearr_26084_26102 = state_26081__$1;(statearr_26084_26102[2] = null);
(statearr_26084_26102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 1))
{var inst_26061 = cljs.core.seq.call(null,coll);var inst_26062 = inst_26061;var state_26081__$1 = (function (){var statearr_26085 = state_26081;(statearr_26085[7] = inst_26062);
return statearr_26085;
})();var statearr_26086_26103 = state_26081__$1;(statearr_26086_26103[2] = null);
(statearr_26086_26103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 4))
{var inst_26062 = (state_26081[7]);var inst_26065 = cljs.core.first.call(null,inst_26062);var state_26081__$1 = state_26081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26081__$1,7,ch,inst_26065);
} else
{if((state_val_26082 === 6))
{var inst_26077 = (state_26081[2]);var state_26081__$1 = state_26081;var statearr_26087_26104 = state_26081__$1;(statearr_26087_26104[2] = inst_26077);
(statearr_26087_26104[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 3))
{var inst_26079 = (state_26081[2]);var state_26081__$1 = state_26081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26081__$1,inst_26079);
} else
{if((state_val_26082 === 2))
{var inst_26062 = (state_26081[7]);var state_26081__$1 = state_26081;if(cljs.core.truth_(inst_26062))
{var statearr_26088_26105 = state_26081__$1;(statearr_26088_26105[1] = 4);
} else
{var statearr_26089_26106 = state_26081__$1;(statearr_26089_26106[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 9))
{var state_26081__$1 = state_26081;var statearr_26090_26107 = state_26081__$1;(statearr_26090_26107[2] = null);
(statearr_26090_26107[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 5))
{var state_26081__$1 = state_26081;if(cljs.core.truth_(close_QMARK_))
{var statearr_26091_26108 = state_26081__$1;(statearr_26091_26108[1] = 8);
} else
{var statearr_26092_26109 = state_26081__$1;(statearr_26092_26109[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 10))
{var inst_26075 = (state_26081[2]);var state_26081__$1 = state_26081;var statearr_26093_26110 = state_26081__$1;(statearr_26093_26110[2] = inst_26075);
(statearr_26093_26110[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26082 === 8))
{var inst_26072 = cljs.core.async.close_BANG_.call(null,ch);var state_26081__$1 = state_26081;var statearr_26094_26111 = state_26081__$1;(statearr_26094_26111[2] = inst_26072);
(statearr_26094_26111[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_26098 = [null,null,null,null,null,null,null,null,null];(statearr_26098[0] = state_machine__5677__auto__);
(statearr_26098[1] = 1);
return statearr_26098;
});
var state_machine__5677__auto____1 = (function (state_26081){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_26081);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e26099){if((e26099 instanceof Object))
{var ex__5680__auto__ = e26099;var statearr_26100_26112 = state_26081;(statearr_26100_26112[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26081);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26113 = state_26081;
state_26081 = G__26113;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_26081){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_26081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_26101 = f__5692__auto__.call(null);(statearr_26101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_26101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj26115 = {};return obj26115;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3529__auto__ = _;if(and__3529__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4168__auto__ = (((_ == null))?null:_);return (function (){var or__3541__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26117 = {};return obj26117;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26341 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26341 = (function (cs,ch,mult,meta26342){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26342 = meta26342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26341.cljs$lang$type = true;
cljs.core.async.t26341.cljs$lang$ctorStr = "cljs.core.async/t26341";
cljs.core.async.t26341.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t26341");
});})(cs))
;
cljs.core.async.t26341.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26341.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26341.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26341.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26341.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26341.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26343){var self__ = this;
var _26343__$1 = this;return self__.meta26342;
});})(cs))
;
cljs.core.async.t26341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26343,meta26342__$1){var self__ = this;
var _26343__$1 = this;return (new cljs.core.async.t26341(self__.cs,self__.ch,self__.mult,meta26342__$1));
});})(cs))
;
cljs.core.async.__GT_t26341 = ((function (cs){
return (function __GT_t26341(cs__$1,ch__$1,mult__$1,meta26342){return (new cljs.core.async.t26341(cs__$1,ch__$1,mult__$1,meta26342));
});})(cs))
;
}
return (new cljs.core.async.t26341(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5691__auto___26564 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___26564,cs,m,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___26564,cs,m,dchan,dctr,done){
return (function (state_26478){var state_val_26479 = (state_26478[1]);if((state_val_26479 === 7))
{var inst_26474 = (state_26478[2]);var state_26478__$1 = state_26478;var statearr_26480_26565 = state_26478__$1;(statearr_26480_26565[2] = inst_26474);
(statearr_26480_26565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 20))
{var inst_26375 = (state_26478[7]);var inst_26385 = cljs.core.first.call(null,inst_26375);var inst_26386 = cljs.core.nth.call(null,inst_26385,0,null);var inst_26387 = cljs.core.nth.call(null,inst_26385,1,null);var state_26478__$1 = (function (){var statearr_26481 = state_26478;(statearr_26481[8] = inst_26386);
return statearr_26481;
})();if(cljs.core.truth_(inst_26387))
{var statearr_26482_26566 = state_26478__$1;(statearr_26482_26566[1] = 22);
} else
{var statearr_26483_26567 = state_26478__$1;(statearr_26483_26567[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 27))
{var inst_26415 = (state_26478[9]);var inst_26417 = (state_26478[10]);var inst_26422 = cljs.core._nth.call(null,inst_26415,inst_26417);var state_26478__$1 = (function (){var statearr_26484 = state_26478;(statearr_26484[11] = inst_26422);
return statearr_26484;
})();var statearr_26485_26568 = state_26478__$1;(statearr_26485_26568[2] = null);
(statearr_26485_26568[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 1))
{var state_26478__$1 = state_26478;var statearr_26486_26569 = state_26478__$1;(statearr_26486_26569[2] = null);
(statearr_26486_26569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 24))
{var inst_26375 = (state_26478[7]);var inst_26392 = (state_26478[2]);var inst_26393 = cljs.core.next.call(null,inst_26375);var inst_26355 = inst_26393;var inst_26356 = null;var inst_26357 = 0;var inst_26358 = 0;var state_26478__$1 = (function (){var statearr_26487 = state_26478;(statearr_26487[12] = inst_26358);
(statearr_26487[13] = inst_26357);
(statearr_26487[14] = inst_26356);
(statearr_26487[15] = inst_26355);
(statearr_26487[16] = inst_26392);
return statearr_26487;
})();var statearr_26488_26570 = state_26478__$1;(statearr_26488_26570[2] = null);
(statearr_26488_26570[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 39))
{var inst_26435 = (state_26478[17]);var inst_26453 = (state_26478[2]);var inst_26454 = cljs.core.next.call(null,inst_26435);var inst_26414 = inst_26454;var inst_26415 = null;var inst_26416 = 0;var inst_26417 = 0;var state_26478__$1 = (function (){var statearr_26492 = state_26478;(statearr_26492[18] = inst_26416);
(statearr_26492[19] = inst_26453);
(statearr_26492[20] = inst_26414);
(statearr_26492[9] = inst_26415);
(statearr_26492[10] = inst_26417);
return statearr_26492;
})();var statearr_26493_26571 = state_26478__$1;(statearr_26493_26571[2] = null);
(statearr_26493_26571[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 4))
{var inst_26346 = (state_26478[21]);var inst_26346__$1 = (state_26478[2]);var inst_26347 = (inst_26346__$1 == null);var state_26478__$1 = (function (){var statearr_26494 = state_26478;(statearr_26494[21] = inst_26346__$1);
return statearr_26494;
})();if(cljs.core.truth_(inst_26347))
{var statearr_26495_26572 = state_26478__$1;(statearr_26495_26572[1] = 5);
} else
{var statearr_26496_26573 = state_26478__$1;(statearr_26496_26573[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 15))
{var inst_26358 = (state_26478[12]);var inst_26357 = (state_26478[13]);var inst_26356 = (state_26478[14]);var inst_26355 = (state_26478[15]);var inst_26371 = (state_26478[2]);var inst_26372 = (inst_26358 + 1);var tmp26489 = inst_26357;var tmp26490 = inst_26356;var tmp26491 = inst_26355;var inst_26355__$1 = tmp26491;var inst_26356__$1 = tmp26490;var inst_26357__$1 = tmp26489;var inst_26358__$1 = inst_26372;var state_26478__$1 = (function (){var statearr_26497 = state_26478;(statearr_26497[12] = inst_26358__$1);
(statearr_26497[13] = inst_26357__$1);
(statearr_26497[22] = inst_26371);
(statearr_26497[14] = inst_26356__$1);
(statearr_26497[15] = inst_26355__$1);
return statearr_26497;
})();var statearr_26498_26574 = state_26478__$1;(statearr_26498_26574[2] = null);
(statearr_26498_26574[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 21))
{var inst_26396 = (state_26478[2]);var state_26478__$1 = state_26478;var statearr_26499_26575 = state_26478__$1;(statearr_26499_26575[2] = inst_26396);
(statearr_26499_26575[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 31))
{var inst_26422 = (state_26478[11]);var inst_26423 = (state_26478[2]);var inst_26424 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26425 = cljs.core.async.untap_STAR_.call(null,m,inst_26422);var state_26478__$1 = (function (){var statearr_26500 = state_26478;(statearr_26500[23] = inst_26423);
(statearr_26500[24] = inst_26424);
return statearr_26500;
})();var statearr_26501_26576 = state_26478__$1;(statearr_26501_26576[2] = inst_26425);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26478__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 32))
{var inst_26346 = (state_26478[21]);var inst_26422 = (state_26478[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26478,31,Object,null,30);var inst_26429 = cljs.core.async.put_BANG_.call(null,inst_26422,inst_26346,done);var state_26478__$1 = state_26478;var statearr_26502_26577 = state_26478__$1;(statearr_26502_26577[2] = inst_26429);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26478__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 40))
{var inst_26444 = (state_26478[25]);var inst_26445 = (state_26478[2]);var inst_26446 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26447 = cljs.core.async.untap_STAR_.call(null,m,inst_26444);var state_26478__$1 = (function (){var statearr_26503 = state_26478;(statearr_26503[26] = inst_26445);
(statearr_26503[27] = inst_26446);
return statearr_26503;
})();var statearr_26504_26578 = state_26478__$1;(statearr_26504_26578[2] = inst_26447);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26478__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 33))
{var inst_26435 = (state_26478[17]);var inst_26437 = cljs.core.chunked_seq_QMARK_.call(null,inst_26435);var state_26478__$1 = state_26478;if(inst_26437)
{var statearr_26505_26579 = state_26478__$1;(statearr_26505_26579[1] = 36);
} else
{var statearr_26506_26580 = state_26478__$1;(statearr_26506_26580[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 13))
{var inst_26365 = (state_26478[28]);var inst_26368 = cljs.core.async.close_BANG_.call(null,inst_26365);var state_26478__$1 = state_26478;var statearr_26507_26581 = state_26478__$1;(statearr_26507_26581[2] = inst_26368);
(statearr_26507_26581[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 22))
{var inst_26386 = (state_26478[8]);var inst_26389 = cljs.core.async.close_BANG_.call(null,inst_26386);var state_26478__$1 = state_26478;var statearr_26508_26582 = state_26478__$1;(statearr_26508_26582[2] = inst_26389);
(statearr_26508_26582[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 36))
{var inst_26435 = (state_26478[17]);var inst_26439 = cljs.core.chunk_first.call(null,inst_26435);var inst_26440 = cljs.core.chunk_rest.call(null,inst_26435);var inst_26441 = cljs.core.count.call(null,inst_26439);var inst_26414 = inst_26440;var inst_26415 = inst_26439;var inst_26416 = inst_26441;var inst_26417 = 0;var state_26478__$1 = (function (){var statearr_26509 = state_26478;(statearr_26509[18] = inst_26416);
(statearr_26509[20] = inst_26414);
(statearr_26509[9] = inst_26415);
(statearr_26509[10] = inst_26417);
return statearr_26509;
})();var statearr_26510_26583 = state_26478__$1;(statearr_26510_26583[2] = null);
(statearr_26510_26583[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 41))
{var inst_26346 = (state_26478[21]);var inst_26444 = (state_26478[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26478,40,Object,null,39);var inst_26451 = cljs.core.async.put_BANG_.call(null,inst_26444,inst_26346,done);var state_26478__$1 = state_26478;var statearr_26511_26584 = state_26478__$1;(statearr_26511_26584[2] = inst_26451);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26478__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 43))
{var state_26478__$1 = state_26478;var statearr_26512_26585 = state_26478__$1;(statearr_26512_26585[2] = null);
(statearr_26512_26585[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 29))
{var inst_26462 = (state_26478[2]);var state_26478__$1 = state_26478;var statearr_26513_26586 = state_26478__$1;(statearr_26513_26586[2] = inst_26462);
(statearr_26513_26586[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 44))
{var inst_26471 = (state_26478[2]);var state_26478__$1 = (function (){var statearr_26514 = state_26478;(statearr_26514[29] = inst_26471);
return statearr_26514;
})();var statearr_26515_26587 = state_26478__$1;(statearr_26515_26587[2] = null);
(statearr_26515_26587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 6))
{var inst_26406 = (state_26478[30]);var inst_26405 = cljs.core.deref.call(null,cs);var inst_26406__$1 = cljs.core.keys.call(null,inst_26405);var inst_26407 = cljs.core.count.call(null,inst_26406__$1);var inst_26408 = cljs.core.reset_BANG_.call(null,dctr,inst_26407);var inst_26413 = cljs.core.seq.call(null,inst_26406__$1);var inst_26414 = inst_26413;var inst_26415 = null;var inst_26416 = 0;var inst_26417 = 0;var state_26478__$1 = (function (){var statearr_26516 = state_26478;(statearr_26516[30] = inst_26406__$1);
(statearr_26516[31] = inst_26408);
(statearr_26516[18] = inst_26416);
(statearr_26516[20] = inst_26414);
(statearr_26516[9] = inst_26415);
(statearr_26516[10] = inst_26417);
return statearr_26516;
})();var statearr_26517_26588 = state_26478__$1;(statearr_26517_26588[2] = null);
(statearr_26517_26588[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 28))
{var inst_26414 = (state_26478[20]);var inst_26435 = (state_26478[17]);var inst_26435__$1 = cljs.core.seq.call(null,inst_26414);var state_26478__$1 = (function (){var statearr_26518 = state_26478;(statearr_26518[17] = inst_26435__$1);
return statearr_26518;
})();if(inst_26435__$1)
{var statearr_26519_26589 = state_26478__$1;(statearr_26519_26589[1] = 33);
} else
{var statearr_26520_26590 = state_26478__$1;(statearr_26520_26590[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 25))
{var inst_26416 = (state_26478[18]);var inst_26417 = (state_26478[10]);var inst_26419 = (inst_26417 < inst_26416);var inst_26420 = inst_26419;var state_26478__$1 = state_26478;if(cljs.core.truth_(inst_26420))
{var statearr_26521_26591 = state_26478__$1;(statearr_26521_26591[1] = 27);
} else
{var statearr_26522_26592 = state_26478__$1;(statearr_26522_26592[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 34))
{var state_26478__$1 = state_26478;var statearr_26523_26593 = state_26478__$1;(statearr_26523_26593[2] = null);
(statearr_26523_26593[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 17))
{var state_26478__$1 = state_26478;var statearr_26524_26594 = state_26478__$1;(statearr_26524_26594[2] = null);
(statearr_26524_26594[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 3))
{var inst_26476 = (state_26478[2]);var state_26478__$1 = state_26478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26478__$1,inst_26476);
} else
{if((state_val_26479 === 12))
{var inst_26401 = (state_26478[2]);var state_26478__$1 = state_26478;var statearr_26525_26595 = state_26478__$1;(statearr_26525_26595[2] = inst_26401);
(statearr_26525_26595[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 2))
{var state_26478__$1 = state_26478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26478__$1,4,ch);
} else
{if((state_val_26479 === 23))
{var state_26478__$1 = state_26478;var statearr_26526_26596 = state_26478__$1;(statearr_26526_26596[2] = null);
(statearr_26526_26596[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 35))
{var inst_26460 = (state_26478[2]);var state_26478__$1 = state_26478;var statearr_26527_26597 = state_26478__$1;(statearr_26527_26597[2] = inst_26460);
(statearr_26527_26597[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 19))
{var inst_26375 = (state_26478[7]);var inst_26379 = cljs.core.chunk_first.call(null,inst_26375);var inst_26380 = cljs.core.chunk_rest.call(null,inst_26375);var inst_26381 = cljs.core.count.call(null,inst_26379);var inst_26355 = inst_26380;var inst_26356 = inst_26379;var inst_26357 = inst_26381;var inst_26358 = 0;var state_26478__$1 = (function (){var statearr_26528 = state_26478;(statearr_26528[12] = inst_26358);
(statearr_26528[13] = inst_26357);
(statearr_26528[14] = inst_26356);
(statearr_26528[15] = inst_26355);
return statearr_26528;
})();var statearr_26529_26598 = state_26478__$1;(statearr_26529_26598[2] = null);
(statearr_26529_26598[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 11))
{var inst_26355 = (state_26478[15]);var inst_26375 = (state_26478[7]);var inst_26375__$1 = cljs.core.seq.call(null,inst_26355);var state_26478__$1 = (function (){var statearr_26530 = state_26478;(statearr_26530[7] = inst_26375__$1);
return statearr_26530;
})();if(inst_26375__$1)
{var statearr_26531_26599 = state_26478__$1;(statearr_26531_26599[1] = 16);
} else
{var statearr_26532_26600 = state_26478__$1;(statearr_26532_26600[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 9))
{var inst_26403 = (state_26478[2]);var state_26478__$1 = state_26478;var statearr_26533_26601 = state_26478__$1;(statearr_26533_26601[2] = inst_26403);
(statearr_26533_26601[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 5))
{var inst_26353 = cljs.core.deref.call(null,cs);var inst_26354 = cljs.core.seq.call(null,inst_26353);var inst_26355 = inst_26354;var inst_26356 = null;var inst_26357 = 0;var inst_26358 = 0;var state_26478__$1 = (function (){var statearr_26534 = state_26478;(statearr_26534[12] = inst_26358);
(statearr_26534[13] = inst_26357);
(statearr_26534[14] = inst_26356);
(statearr_26534[15] = inst_26355);
return statearr_26534;
})();var statearr_26535_26602 = state_26478__$1;(statearr_26535_26602[2] = null);
(statearr_26535_26602[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 14))
{var state_26478__$1 = state_26478;var statearr_26536_26603 = state_26478__$1;(statearr_26536_26603[2] = null);
(statearr_26536_26603[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 45))
{var inst_26468 = (state_26478[2]);var state_26478__$1 = state_26478;var statearr_26537_26604 = state_26478__$1;(statearr_26537_26604[2] = inst_26468);
(statearr_26537_26604[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 26))
{var inst_26406 = (state_26478[30]);var inst_26464 = (state_26478[2]);var inst_26465 = cljs.core.seq.call(null,inst_26406);var state_26478__$1 = (function (){var statearr_26538 = state_26478;(statearr_26538[32] = inst_26464);
return statearr_26538;
})();if(inst_26465)
{var statearr_26539_26605 = state_26478__$1;(statearr_26539_26605[1] = 42);
} else
{var statearr_26540_26606 = state_26478__$1;(statearr_26540_26606[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 16))
{var inst_26375 = (state_26478[7]);var inst_26377 = cljs.core.chunked_seq_QMARK_.call(null,inst_26375);var state_26478__$1 = state_26478;if(inst_26377)
{var statearr_26544_26607 = state_26478__$1;(statearr_26544_26607[1] = 19);
} else
{var statearr_26545_26608 = state_26478__$1;(statearr_26545_26608[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 38))
{var inst_26457 = (state_26478[2]);var state_26478__$1 = state_26478;var statearr_26546_26609 = state_26478__$1;(statearr_26546_26609[2] = inst_26457);
(statearr_26546_26609[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 30))
{var inst_26416 = (state_26478[18]);var inst_26414 = (state_26478[20]);var inst_26415 = (state_26478[9]);var inst_26417 = (state_26478[10]);var inst_26431 = (state_26478[2]);var inst_26432 = (inst_26417 + 1);var tmp26541 = inst_26416;var tmp26542 = inst_26414;var tmp26543 = inst_26415;var inst_26414__$1 = tmp26542;var inst_26415__$1 = tmp26543;var inst_26416__$1 = tmp26541;var inst_26417__$1 = inst_26432;var state_26478__$1 = (function (){var statearr_26547 = state_26478;(statearr_26547[18] = inst_26416__$1);
(statearr_26547[20] = inst_26414__$1);
(statearr_26547[9] = inst_26415__$1);
(statearr_26547[33] = inst_26431);
(statearr_26547[10] = inst_26417__$1);
return statearr_26547;
})();var statearr_26548_26610 = state_26478__$1;(statearr_26548_26610[2] = null);
(statearr_26548_26610[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 10))
{var inst_26358 = (state_26478[12]);var inst_26356 = (state_26478[14]);var inst_26364 = cljs.core._nth.call(null,inst_26356,inst_26358);var inst_26365 = cljs.core.nth.call(null,inst_26364,0,null);var inst_26366 = cljs.core.nth.call(null,inst_26364,1,null);var state_26478__$1 = (function (){var statearr_26549 = state_26478;(statearr_26549[28] = inst_26365);
return statearr_26549;
})();if(cljs.core.truth_(inst_26366))
{var statearr_26550_26611 = state_26478__$1;(statearr_26550_26611[1] = 13);
} else
{var statearr_26551_26612 = state_26478__$1;(statearr_26551_26612[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 18))
{var inst_26399 = (state_26478[2]);var state_26478__$1 = state_26478;var statearr_26552_26613 = state_26478__$1;(statearr_26552_26613[2] = inst_26399);
(statearr_26552_26613[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 42))
{var state_26478__$1 = state_26478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26478__$1,45,dchan);
} else
{if((state_val_26479 === 37))
{var inst_26435 = (state_26478[17]);var inst_26444 = cljs.core.first.call(null,inst_26435);var state_26478__$1 = (function (){var statearr_26553 = state_26478;(statearr_26553[25] = inst_26444);
return statearr_26553;
})();var statearr_26554_26614 = state_26478__$1;(statearr_26554_26614[2] = null);
(statearr_26554_26614[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26479 === 8))
{var inst_26358 = (state_26478[12]);var inst_26357 = (state_26478[13]);var inst_26360 = (inst_26358 < inst_26357);var inst_26361 = inst_26360;var state_26478__$1 = state_26478;if(cljs.core.truth_(inst_26361))
{var statearr_26555_26615 = state_26478__$1;(statearr_26555_26615[1] = 10);
} else
{var statearr_26556_26616 = state_26478__$1;(statearr_26556_26616[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___26564,cs,m,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___26564,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_26560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26560[0] = state_machine__5677__auto__);
(statearr_26560[1] = 1);
return statearr_26560;
});
var state_machine__5677__auto____1 = (function (state_26478){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_26478);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e26561){if((e26561 instanceof Object))
{var ex__5680__auto__ = e26561;var statearr_26562_26617 = state_26478;(statearr_26562_26617[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26618 = state_26478;
state_26478 = G__26618;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_26478){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_26478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___26564,cs,m,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_26563 = f__5692__auto__.call(null);(statearr_26563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___26564);
return statearr_26563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___26564,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj26620 = {};return obj26620;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t26730 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26730 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26731){
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
this.meta26731 = meta26731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26730.cljs$lang$type = true;
cljs.core.async.t26730.cljs$lang$ctorStr = "cljs.core.async/t26730";
cljs.core.async.t26730.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t26730");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26730.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26730.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26730.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26730.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26730.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26730.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26730.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26730.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26732){var self__ = this;
var _26732__$1 = this;return self__.meta26731;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26732,meta26731__$1){var self__ = this;
var _26732__$1 = this;return (new cljs.core.async.t26730(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26731__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26730 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26730(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26731){return (new cljs.core.async.t26730(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26731));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26730(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5691__auto___26839 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26797){var state_val_26798 = (state_26797[1]);if((state_val_26798 === 7))
{var inst_26746 = (state_26797[7]);var inst_26751 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26746);var state_26797__$1 = state_26797;var statearr_26799_26840 = state_26797__$1;(statearr_26799_26840[2] = inst_26751);
(statearr_26799_26840[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 20))
{var inst_26761 = (state_26797[8]);var state_26797__$1 = state_26797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26797__$1,23,out,inst_26761);
} else
{if((state_val_26798 === 1))
{var inst_26736 = (state_26797[9]);var inst_26736__$1 = calc_state.call(null);var inst_26737 = cljs.core.seq_QMARK_.call(null,inst_26736__$1);var state_26797__$1 = (function (){var statearr_26800 = state_26797;(statearr_26800[9] = inst_26736__$1);
return statearr_26800;
})();if(inst_26737)
{var statearr_26801_26841 = state_26797__$1;(statearr_26801_26841[1] = 2);
} else
{var statearr_26802_26842 = state_26797__$1;(statearr_26802_26842[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 4))
{var inst_26736 = (state_26797[9]);var inst_26742 = (state_26797[2]);var inst_26743 = cljs.core.get.call(null,inst_26742,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26744 = cljs.core.get.call(null,inst_26742,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26745 = cljs.core.get.call(null,inst_26742,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26746 = inst_26736;var state_26797__$1 = (function (){var statearr_26803 = state_26797;(statearr_26803[10] = inst_26745);
(statearr_26803[11] = inst_26743);
(statearr_26803[12] = inst_26744);
(statearr_26803[7] = inst_26746);
return statearr_26803;
})();var statearr_26804_26843 = state_26797__$1;(statearr_26804_26843[2] = null);
(statearr_26804_26843[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 15))
{var state_26797__$1 = state_26797;var statearr_26805_26844 = state_26797__$1;(statearr_26805_26844[2] = null);
(statearr_26805_26844[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 21))
{var state_26797__$1 = state_26797;var statearr_26806_26845 = state_26797__$1;(statearr_26806_26845[2] = null);
(statearr_26806_26845[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 13))
{var inst_26793 = (state_26797[2]);var state_26797__$1 = state_26797;var statearr_26807_26846 = state_26797__$1;(statearr_26807_26846[2] = inst_26793);
(statearr_26807_26846[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 22))
{var inst_26754 = (state_26797[13]);var inst_26790 = (state_26797[2]);var inst_26746 = inst_26754;var state_26797__$1 = (function (){var statearr_26808 = state_26797;(statearr_26808[14] = inst_26790);
(statearr_26808[7] = inst_26746);
return statearr_26808;
})();var statearr_26809_26847 = state_26797__$1;(statearr_26809_26847[2] = null);
(statearr_26809_26847[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 6))
{var inst_26795 = (state_26797[2]);var state_26797__$1 = state_26797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26797__$1,inst_26795);
} else
{if((state_val_26798 === 17))
{var inst_26776 = (state_26797[15]);var state_26797__$1 = state_26797;var statearr_26810_26848 = state_26797__$1;(statearr_26810_26848[2] = inst_26776);
(statearr_26810_26848[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 3))
{var inst_26736 = (state_26797[9]);var state_26797__$1 = state_26797;var statearr_26811_26849 = state_26797__$1;(statearr_26811_26849[2] = inst_26736);
(statearr_26811_26849[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 12))
{var inst_26776 = (state_26797[15]);var inst_26762 = (state_26797[16]);var inst_26757 = (state_26797[17]);var inst_26776__$1 = inst_26757.call(null,inst_26762);var state_26797__$1 = (function (){var statearr_26812 = state_26797;(statearr_26812[15] = inst_26776__$1);
return statearr_26812;
})();if(cljs.core.truth_(inst_26776__$1))
{var statearr_26813_26850 = state_26797__$1;(statearr_26813_26850[1] = 17);
} else
{var statearr_26814_26851 = state_26797__$1;(statearr_26814_26851[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 2))
{var inst_26736 = (state_26797[9]);var inst_26739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26736);var state_26797__$1 = state_26797;var statearr_26815_26852 = state_26797__$1;(statearr_26815_26852[2] = inst_26739);
(statearr_26815_26852[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 23))
{var inst_26787 = (state_26797[2]);var state_26797__$1 = state_26797;var statearr_26816_26853 = state_26797__$1;(statearr_26816_26853[2] = inst_26787);
(statearr_26816_26853[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 19))
{var inst_26784 = (state_26797[2]);var state_26797__$1 = state_26797;if(cljs.core.truth_(inst_26784))
{var statearr_26817_26854 = state_26797__$1;(statearr_26817_26854[1] = 20);
} else
{var statearr_26818_26855 = state_26797__$1;(statearr_26818_26855[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 11))
{var inst_26761 = (state_26797[8]);var inst_26767 = (inst_26761 == null);var state_26797__$1 = state_26797;if(cljs.core.truth_(inst_26767))
{var statearr_26819_26856 = state_26797__$1;(statearr_26819_26856[1] = 14);
} else
{var statearr_26820_26857 = state_26797__$1;(statearr_26820_26857[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 9))
{var inst_26754 = (state_26797[13]);var inst_26754__$1 = (state_26797[2]);var inst_26755 = cljs.core.get.call(null,inst_26754__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26756 = cljs.core.get.call(null,inst_26754__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26757 = cljs.core.get.call(null,inst_26754__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26797__$1 = (function (){var statearr_26821 = state_26797;(statearr_26821[13] = inst_26754__$1);
(statearr_26821[18] = inst_26756);
(statearr_26821[17] = inst_26757);
return statearr_26821;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26797__$1,10,inst_26755);
} else
{if((state_val_26798 === 5))
{var inst_26746 = (state_26797[7]);var inst_26749 = cljs.core.seq_QMARK_.call(null,inst_26746);var state_26797__$1 = state_26797;if(inst_26749)
{var statearr_26822_26858 = state_26797__$1;(statearr_26822_26858[1] = 7);
} else
{var statearr_26823_26859 = state_26797__$1;(statearr_26823_26859[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 14))
{var inst_26762 = (state_26797[16]);var inst_26769 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26762);var state_26797__$1 = state_26797;var statearr_26824_26860 = state_26797__$1;(statearr_26824_26860[2] = inst_26769);
(statearr_26824_26860[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 16))
{var inst_26772 = (state_26797[2]);var inst_26773 = calc_state.call(null);var inst_26746 = inst_26773;var state_26797__$1 = (function (){var statearr_26825 = state_26797;(statearr_26825[19] = inst_26772);
(statearr_26825[7] = inst_26746);
return statearr_26825;
})();var statearr_26826_26861 = state_26797__$1;(statearr_26826_26861[2] = null);
(statearr_26826_26861[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 10))
{var inst_26761 = (state_26797[8]);var inst_26762 = (state_26797[16]);var inst_26760 = (state_26797[2]);var inst_26761__$1 = cljs.core.nth.call(null,inst_26760,0,null);var inst_26762__$1 = cljs.core.nth.call(null,inst_26760,1,null);var inst_26763 = (inst_26761__$1 == null);var inst_26764 = cljs.core._EQ_.call(null,inst_26762__$1,change);var inst_26765 = (inst_26763) || (inst_26764);var state_26797__$1 = (function (){var statearr_26827 = state_26797;(statearr_26827[8] = inst_26761__$1);
(statearr_26827[16] = inst_26762__$1);
return statearr_26827;
})();if(cljs.core.truth_(inst_26765))
{var statearr_26828_26862 = state_26797__$1;(statearr_26828_26862[1] = 11);
} else
{var statearr_26829_26863 = state_26797__$1;(statearr_26829_26863[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 18))
{var inst_26762 = (state_26797[16]);var inst_26756 = (state_26797[18]);var inst_26757 = (state_26797[17]);var inst_26779 = cljs.core.empty_QMARK_.call(null,inst_26757);var inst_26780 = inst_26756.call(null,inst_26762);var inst_26781 = cljs.core.not.call(null,inst_26780);var inst_26782 = (inst_26779) && (inst_26781);var state_26797__$1 = state_26797;var statearr_26830_26864 = state_26797__$1;(statearr_26830_26864[2] = inst_26782);
(statearr_26830_26864[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26798 === 8))
{var inst_26746 = (state_26797[7]);var state_26797__$1 = state_26797;var statearr_26831_26865 = state_26797__$1;(statearr_26831_26865[2] = inst_26746);
(statearr_26831_26865[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5676__auto__,c__5691__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_26835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26835[0] = state_machine__5677__auto__);
(statearr_26835[1] = 1);
return statearr_26835;
});
var state_machine__5677__auto____1 = (function (state_26797){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_26797);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e26836){if((e26836 instanceof Object))
{var ex__5680__auto__ = e26836;var statearr_26837_26866 = state_26797;(statearr_26837_26866[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26797);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26867 = state_26797;
state_26797 = G__26867;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_26797){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_26797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5693__auto__ = (function (){var statearr_26838 = f__5692__auto__.call(null);(statearr_26838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___26839);
return statearr_26838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj26869 = {};return obj26869;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
return (function (topic){var or__3541__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3541__auto__,mults){
return (function (p1__26870_SHARP_){if(cljs.core.truth_(p1__26870_SHARP_.call(null,topic)))
{return p1__26870_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26870_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3541__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26995 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26995 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26996){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26996 = meta26996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26995.cljs$lang$type = true;
cljs.core.async.t26995.cljs$lang$ctorStr = "cljs.core.async/t26995";
cljs.core.async.t26995.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t26995");
});})(mults,ensure_mult))
;
cljs.core.async.t26995.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26995.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26995.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26995.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26997){var self__ = this;
var _26997__$1 = this;return self__.meta26996;
});})(mults,ensure_mult))
;
cljs.core.async.t26995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26997,meta26996__$1){var self__ = this;
var _26997__$1 = this;return (new cljs.core.async.t26995(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26996__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26995 = ((function (mults,ensure_mult){
return (function __GT_t26995(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26996){return (new cljs.core.async.t26995(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26996));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26995(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5691__auto___27119 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___27119,mults,ensure_mult,p){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___27119,mults,ensure_mult,p){
return (function (state_27071){var state_val_27072 = (state_27071[1]);if((state_val_27072 === 7))
{var inst_27067 = (state_27071[2]);var state_27071__$1 = state_27071;var statearr_27073_27120 = state_27071__$1;(statearr_27073_27120[2] = inst_27067);
(statearr_27073_27120[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 20))
{var state_27071__$1 = state_27071;var statearr_27074_27121 = state_27071__$1;(statearr_27074_27121[2] = null);
(statearr_27074_27121[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 1))
{var state_27071__$1 = state_27071;var statearr_27075_27122 = state_27071__$1;(statearr_27075_27122[2] = null);
(statearr_27075_27122[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 24))
{var inst_27050 = (state_27071[7]);var inst_27000 = (state_27071[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27071,23,Object,null,22);var inst_27057 = cljs.core.async.muxch_STAR_.call(null,inst_27050);var state_27071__$1 = state_27071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27071__$1,25,inst_27057,inst_27000);
} else
{if((state_val_27072 === 4))
{var inst_27000 = (state_27071[8]);var inst_27000__$1 = (state_27071[2]);var inst_27001 = (inst_27000__$1 == null);var state_27071__$1 = (function (){var statearr_27076 = state_27071;(statearr_27076[8] = inst_27000__$1);
return statearr_27076;
})();if(cljs.core.truth_(inst_27001))
{var statearr_27077_27123 = state_27071__$1;(statearr_27077_27123[1] = 5);
} else
{var statearr_27078_27124 = state_27071__$1;(statearr_27078_27124[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 15))
{var inst_27042 = (state_27071[2]);var state_27071__$1 = state_27071;var statearr_27079_27125 = state_27071__$1;(statearr_27079_27125[2] = inst_27042);
(statearr_27079_27125[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 21))
{var inst_27064 = (state_27071[2]);var state_27071__$1 = (function (){var statearr_27080 = state_27071;(statearr_27080[9] = inst_27064);
return statearr_27080;
})();var statearr_27081_27126 = state_27071__$1;(statearr_27081_27126[2] = null);
(statearr_27081_27126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 13))
{var inst_27024 = (state_27071[10]);var inst_27026 = cljs.core.chunked_seq_QMARK_.call(null,inst_27024);var state_27071__$1 = state_27071;if(inst_27026)
{var statearr_27082_27127 = state_27071__$1;(statearr_27082_27127[1] = 16);
} else
{var statearr_27083_27128 = state_27071__$1;(statearr_27083_27128[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 22))
{var inst_27061 = (state_27071[2]);var state_27071__$1 = state_27071;var statearr_27084_27129 = state_27071__$1;(statearr_27084_27129[2] = inst_27061);
(statearr_27084_27129[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 6))
{var inst_27050 = (state_27071[7]);var inst_27048 = (state_27071[11]);var inst_27000 = (state_27071[8]);var inst_27048__$1 = topic_fn.call(null,inst_27000);var inst_27049 = cljs.core.deref.call(null,mults);var inst_27050__$1 = cljs.core.get.call(null,inst_27049,inst_27048__$1);var state_27071__$1 = (function (){var statearr_27085 = state_27071;(statearr_27085[7] = inst_27050__$1);
(statearr_27085[11] = inst_27048__$1);
return statearr_27085;
})();if(cljs.core.truth_(inst_27050__$1))
{var statearr_27086_27130 = state_27071__$1;(statearr_27086_27130[1] = 19);
} else
{var statearr_27087_27131 = state_27071__$1;(statearr_27087_27131[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 25))
{var inst_27059 = (state_27071[2]);var state_27071__$1 = state_27071;var statearr_27088_27132 = state_27071__$1;(statearr_27088_27132[2] = inst_27059);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27071__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 17))
{var inst_27024 = (state_27071[10]);var inst_27033 = cljs.core.first.call(null,inst_27024);var inst_27034 = cljs.core.async.muxch_STAR_.call(null,inst_27033);var inst_27035 = cljs.core.async.close_BANG_.call(null,inst_27034);var inst_27036 = cljs.core.next.call(null,inst_27024);var inst_27010 = inst_27036;var inst_27011 = null;var inst_27012 = 0;var inst_27013 = 0;var state_27071__$1 = (function (){var statearr_27089 = state_27071;(statearr_27089[12] = inst_27012);
(statearr_27089[13] = inst_27010);
(statearr_27089[14] = inst_27035);
(statearr_27089[15] = inst_27013);
(statearr_27089[16] = inst_27011);
return statearr_27089;
})();var statearr_27090_27133 = state_27071__$1;(statearr_27090_27133[2] = null);
(statearr_27090_27133[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 3))
{var inst_27069 = (state_27071[2]);var state_27071__$1 = state_27071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27071__$1,inst_27069);
} else
{if((state_val_27072 === 12))
{var inst_27044 = (state_27071[2]);var state_27071__$1 = state_27071;var statearr_27091_27134 = state_27071__$1;(statearr_27091_27134[2] = inst_27044);
(statearr_27091_27134[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 2))
{var state_27071__$1 = state_27071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27071__$1,4,ch);
} else
{if((state_val_27072 === 23))
{var inst_27048 = (state_27071[11]);var inst_27052 = (state_27071[2]);var inst_27053 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27048);var state_27071__$1 = (function (){var statearr_27092 = state_27071;(statearr_27092[17] = inst_27052);
return statearr_27092;
})();var statearr_27093_27135 = state_27071__$1;(statearr_27093_27135[2] = inst_27053);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27071__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 19))
{var state_27071__$1 = state_27071;var statearr_27094_27136 = state_27071__$1;(statearr_27094_27136[2] = null);
(statearr_27094_27136[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 11))
{var inst_27010 = (state_27071[13]);var inst_27024 = (state_27071[10]);var inst_27024__$1 = cljs.core.seq.call(null,inst_27010);var state_27071__$1 = (function (){var statearr_27095 = state_27071;(statearr_27095[10] = inst_27024__$1);
return statearr_27095;
})();if(inst_27024__$1)
{var statearr_27096_27137 = state_27071__$1;(statearr_27096_27137[1] = 13);
} else
{var statearr_27097_27138 = state_27071__$1;(statearr_27097_27138[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 9))
{var inst_27046 = (state_27071[2]);var state_27071__$1 = state_27071;var statearr_27098_27139 = state_27071__$1;(statearr_27098_27139[2] = inst_27046);
(statearr_27098_27139[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 5))
{var inst_27007 = cljs.core.deref.call(null,mults);var inst_27008 = cljs.core.vals.call(null,inst_27007);var inst_27009 = cljs.core.seq.call(null,inst_27008);var inst_27010 = inst_27009;var inst_27011 = null;var inst_27012 = 0;var inst_27013 = 0;var state_27071__$1 = (function (){var statearr_27099 = state_27071;(statearr_27099[12] = inst_27012);
(statearr_27099[13] = inst_27010);
(statearr_27099[15] = inst_27013);
(statearr_27099[16] = inst_27011);
return statearr_27099;
})();var statearr_27100_27140 = state_27071__$1;(statearr_27100_27140[2] = null);
(statearr_27100_27140[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 14))
{var state_27071__$1 = state_27071;var statearr_27104_27141 = state_27071__$1;(statearr_27104_27141[2] = null);
(statearr_27104_27141[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 16))
{var inst_27024 = (state_27071[10]);var inst_27028 = cljs.core.chunk_first.call(null,inst_27024);var inst_27029 = cljs.core.chunk_rest.call(null,inst_27024);var inst_27030 = cljs.core.count.call(null,inst_27028);var inst_27010 = inst_27029;var inst_27011 = inst_27028;var inst_27012 = inst_27030;var inst_27013 = 0;var state_27071__$1 = (function (){var statearr_27105 = state_27071;(statearr_27105[12] = inst_27012);
(statearr_27105[13] = inst_27010);
(statearr_27105[15] = inst_27013);
(statearr_27105[16] = inst_27011);
return statearr_27105;
})();var statearr_27106_27142 = state_27071__$1;(statearr_27106_27142[2] = null);
(statearr_27106_27142[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 10))
{var inst_27012 = (state_27071[12]);var inst_27010 = (state_27071[13]);var inst_27013 = (state_27071[15]);var inst_27011 = (state_27071[16]);var inst_27018 = cljs.core._nth.call(null,inst_27011,inst_27013);var inst_27019 = cljs.core.async.muxch_STAR_.call(null,inst_27018);var inst_27020 = cljs.core.async.close_BANG_.call(null,inst_27019);var inst_27021 = (inst_27013 + 1);var tmp27101 = inst_27012;var tmp27102 = inst_27010;var tmp27103 = inst_27011;var inst_27010__$1 = tmp27102;var inst_27011__$1 = tmp27103;var inst_27012__$1 = tmp27101;var inst_27013__$1 = inst_27021;var state_27071__$1 = (function (){var statearr_27107 = state_27071;(statearr_27107[12] = inst_27012__$1);
(statearr_27107[13] = inst_27010__$1);
(statearr_27107[15] = inst_27013__$1);
(statearr_27107[16] = inst_27011__$1);
(statearr_27107[18] = inst_27020);
return statearr_27107;
})();var statearr_27108_27143 = state_27071__$1;(statearr_27108_27143[2] = null);
(statearr_27108_27143[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 18))
{var inst_27039 = (state_27071[2]);var state_27071__$1 = state_27071;var statearr_27109_27144 = state_27071__$1;(statearr_27109_27144[2] = inst_27039);
(statearr_27109_27144[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27072 === 8))
{var inst_27012 = (state_27071[12]);var inst_27013 = (state_27071[15]);var inst_27015 = (inst_27013 < inst_27012);var inst_27016 = inst_27015;var state_27071__$1 = state_27071;if(cljs.core.truth_(inst_27016))
{var statearr_27110_27145 = state_27071__$1;(statearr_27110_27145[1] = 10);
} else
{var statearr_27111_27146 = state_27071__$1;(statearr_27111_27146[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___27119,mults,ensure_mult,p))
;return ((function (switch__5676__auto__,c__5691__auto___27119,mults,ensure_mult,p){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_27115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27115[0] = state_machine__5677__auto__);
(statearr_27115[1] = 1);
return statearr_27115;
});
var state_machine__5677__auto____1 = (function (state_27071){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_27071);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e27116){if((e27116 instanceof Object))
{var ex__5680__auto__ = e27116;var statearr_27117_27147 = state_27071;(statearr_27117_27147[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27071);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27148 = state_27071;
state_27071 = G__27148;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_27071){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_27071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___27119,mults,ensure_mult,p))
})();var state__5693__auto__ = (function (){var statearr_27118 = f__5692__auto__.call(null);(statearr_27118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___27119);
return statearr_27118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___27119,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5691__auto___27285 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27255){var state_val_27256 = (state_27255[1]);if((state_val_27256 === 7))
{var state_27255__$1 = state_27255;var statearr_27257_27286 = state_27255__$1;(statearr_27257_27286[2] = null);
(statearr_27257_27286[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 1))
{var state_27255__$1 = state_27255;var statearr_27258_27287 = state_27255__$1;(statearr_27258_27287[2] = null);
(statearr_27258_27287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 4))
{var inst_27219 = (state_27255[7]);var inst_27221 = (inst_27219 < cnt);var state_27255__$1 = state_27255;if(cljs.core.truth_(inst_27221))
{var statearr_27259_27288 = state_27255__$1;(statearr_27259_27288[1] = 6);
} else
{var statearr_27260_27289 = state_27255__$1;(statearr_27260_27289[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 15))
{var inst_27251 = (state_27255[2]);var state_27255__$1 = state_27255;var statearr_27261_27290 = state_27255__$1;(statearr_27261_27290[2] = inst_27251);
(statearr_27261_27290[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 13))
{var inst_27244 = cljs.core.async.close_BANG_.call(null,out);var state_27255__$1 = state_27255;var statearr_27262_27291 = state_27255__$1;(statearr_27262_27291[2] = inst_27244);
(statearr_27262_27291[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 6))
{var state_27255__$1 = state_27255;var statearr_27263_27292 = state_27255__$1;(statearr_27263_27292[2] = null);
(statearr_27263_27292[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 3))
{var inst_27253 = (state_27255[2]);var state_27255__$1 = state_27255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27255__$1,inst_27253);
} else
{if((state_val_27256 === 12))
{var inst_27241 = (state_27255[8]);var inst_27241__$1 = (state_27255[2]);var inst_27242 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27241__$1);var state_27255__$1 = (function (){var statearr_27264 = state_27255;(statearr_27264[8] = inst_27241__$1);
return statearr_27264;
})();if(cljs.core.truth_(inst_27242))
{var statearr_27265_27293 = state_27255__$1;(statearr_27265_27293[1] = 13);
} else
{var statearr_27266_27294 = state_27255__$1;(statearr_27266_27294[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 2))
{var inst_27218 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27219 = 0;var state_27255__$1 = (function (){var statearr_27267 = state_27255;(statearr_27267[9] = inst_27218);
(statearr_27267[7] = inst_27219);
return statearr_27267;
})();var statearr_27268_27295 = state_27255__$1;(statearr_27268_27295[2] = null);
(statearr_27268_27295[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 11))
{var inst_27219 = (state_27255[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27255,10,Object,null,9);var inst_27228 = chs__$1.call(null,inst_27219);var inst_27229 = done.call(null,inst_27219);var inst_27230 = cljs.core.async.take_BANG_.call(null,inst_27228,inst_27229);var state_27255__$1 = state_27255;var statearr_27269_27296 = state_27255__$1;(statearr_27269_27296[2] = inst_27230);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27255__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 9))
{var inst_27219 = (state_27255[7]);var inst_27232 = (state_27255[2]);var inst_27233 = (inst_27219 + 1);var inst_27219__$1 = inst_27233;var state_27255__$1 = (function (){var statearr_27270 = state_27255;(statearr_27270[10] = inst_27232);
(statearr_27270[7] = inst_27219__$1);
return statearr_27270;
})();var statearr_27271_27297 = state_27255__$1;(statearr_27271_27297[2] = null);
(statearr_27271_27297[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 5))
{var inst_27239 = (state_27255[2]);var state_27255__$1 = (function (){var statearr_27272 = state_27255;(statearr_27272[11] = inst_27239);
return statearr_27272;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27255__$1,12,dchan);
} else
{if((state_val_27256 === 14))
{var inst_27241 = (state_27255[8]);var inst_27246 = cljs.core.apply.call(null,f,inst_27241);var state_27255__$1 = state_27255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27255__$1,16,out,inst_27246);
} else
{if((state_val_27256 === 16))
{var inst_27248 = (state_27255[2]);var state_27255__$1 = (function (){var statearr_27273 = state_27255;(statearr_27273[12] = inst_27248);
return statearr_27273;
})();var statearr_27274_27298 = state_27255__$1;(statearr_27274_27298[2] = null);
(statearr_27274_27298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 10))
{var inst_27223 = (state_27255[2]);var inst_27224 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27255__$1 = (function (){var statearr_27275 = state_27255;(statearr_27275[13] = inst_27223);
return statearr_27275;
})();var statearr_27276_27299 = state_27255__$1;(statearr_27276_27299[2] = inst_27224);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27255__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27256 === 8))
{var inst_27237 = (state_27255[2]);var state_27255__$1 = state_27255;var statearr_27277_27300 = state_27255__$1;(statearr_27277_27300[2] = inst_27237);
(statearr_27277_27300[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_27281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27281[0] = state_machine__5677__auto__);
(statearr_27281[1] = 1);
return statearr_27281;
});
var state_machine__5677__auto____1 = (function (state_27255){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_27255);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e27282){if((e27282 instanceof Object))
{var ex__5680__auto__ = e27282;var statearr_27283_27301 = state_27255;(statearr_27283_27301[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27302 = state_27255;
state_27255 = G__27302;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_27255){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_27255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_27284 = f__5692__auto__.call(null);(statearr_27284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___27285);
return statearr_27284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___27410 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___27410,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___27410,out){
return (function (state_27386){var state_val_27387 = (state_27386[1]);if((state_val_27387 === 7))
{var inst_27365 = (state_27386[7]);var inst_27366 = (state_27386[8]);var inst_27365__$1 = (state_27386[2]);var inst_27366__$1 = cljs.core.nth.call(null,inst_27365__$1,0,null);var inst_27367 = cljs.core.nth.call(null,inst_27365__$1,1,null);var inst_27368 = (inst_27366__$1 == null);var state_27386__$1 = (function (){var statearr_27388 = state_27386;(statearr_27388[9] = inst_27367);
(statearr_27388[7] = inst_27365__$1);
(statearr_27388[8] = inst_27366__$1);
return statearr_27388;
})();if(cljs.core.truth_(inst_27368))
{var statearr_27389_27411 = state_27386__$1;(statearr_27389_27411[1] = 8);
} else
{var statearr_27390_27412 = state_27386__$1;(statearr_27390_27412[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27387 === 1))
{var inst_27357 = cljs.core.vec.call(null,chs);var inst_27358 = inst_27357;var state_27386__$1 = (function (){var statearr_27391 = state_27386;(statearr_27391[10] = inst_27358);
return statearr_27391;
})();var statearr_27392_27413 = state_27386__$1;(statearr_27392_27413[2] = null);
(statearr_27392_27413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27387 === 4))
{var inst_27358 = (state_27386[10]);var state_27386__$1 = state_27386;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27386__$1,7,inst_27358);
} else
{if((state_val_27387 === 6))
{var inst_27382 = (state_27386[2]);var state_27386__$1 = state_27386;var statearr_27393_27414 = state_27386__$1;(statearr_27393_27414[2] = inst_27382);
(statearr_27393_27414[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27387 === 3))
{var inst_27384 = (state_27386[2]);var state_27386__$1 = state_27386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27386__$1,inst_27384);
} else
{if((state_val_27387 === 2))
{var inst_27358 = (state_27386[10]);var inst_27360 = cljs.core.count.call(null,inst_27358);var inst_27361 = (inst_27360 > 0);var state_27386__$1 = state_27386;if(cljs.core.truth_(inst_27361))
{var statearr_27395_27415 = state_27386__$1;(statearr_27395_27415[1] = 4);
} else
{var statearr_27396_27416 = state_27386__$1;(statearr_27396_27416[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27387 === 11))
{var inst_27358 = (state_27386[10]);var inst_27375 = (state_27386[2]);var tmp27394 = inst_27358;var inst_27358__$1 = tmp27394;var state_27386__$1 = (function (){var statearr_27397 = state_27386;(statearr_27397[10] = inst_27358__$1);
(statearr_27397[11] = inst_27375);
return statearr_27397;
})();var statearr_27398_27417 = state_27386__$1;(statearr_27398_27417[2] = null);
(statearr_27398_27417[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27387 === 9))
{var inst_27366 = (state_27386[8]);var state_27386__$1 = state_27386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27386__$1,11,out,inst_27366);
} else
{if((state_val_27387 === 5))
{var inst_27380 = cljs.core.async.close_BANG_.call(null,out);var state_27386__$1 = state_27386;var statearr_27399_27418 = state_27386__$1;(statearr_27399_27418[2] = inst_27380);
(statearr_27399_27418[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27387 === 10))
{var inst_27378 = (state_27386[2]);var state_27386__$1 = state_27386;var statearr_27400_27419 = state_27386__$1;(statearr_27400_27419[2] = inst_27378);
(statearr_27400_27419[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27387 === 8))
{var inst_27367 = (state_27386[9]);var inst_27358 = (state_27386[10]);var inst_27365 = (state_27386[7]);var inst_27366 = (state_27386[8]);var inst_27370 = (function (){var c = inst_27367;var v = inst_27366;var vec__27363 = inst_27365;var cs = inst_27358;return ((function (c,v,vec__27363,cs,inst_27367,inst_27358,inst_27365,inst_27366,state_val_27387,c__5691__auto___27410,out){
return (function (p1__27303_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27303_SHARP_);
});
;})(c,v,vec__27363,cs,inst_27367,inst_27358,inst_27365,inst_27366,state_val_27387,c__5691__auto___27410,out))
})();var inst_27371 = cljs.core.filterv.call(null,inst_27370,inst_27358);var inst_27358__$1 = inst_27371;var state_27386__$1 = (function (){var statearr_27401 = state_27386;(statearr_27401[10] = inst_27358__$1);
return statearr_27401;
})();var statearr_27402_27420 = state_27386__$1;(statearr_27402_27420[2] = null);
(statearr_27402_27420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___27410,out))
;return ((function (switch__5676__auto__,c__5691__auto___27410,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_27406 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27406[0] = state_machine__5677__auto__);
(statearr_27406[1] = 1);
return statearr_27406;
});
var state_machine__5677__auto____1 = (function (state_27386){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_27386);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e27407){if((e27407 instanceof Object))
{var ex__5680__auto__ = e27407;var statearr_27408_27421 = state_27386;(statearr_27408_27421[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27386);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27422 = state_27386;
state_27386 = G__27422;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_27386){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_27386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___27410,out))
})();var state__5693__auto__ = (function (){var statearr_27409 = f__5692__auto__.call(null);(statearr_27409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___27410);
return statearr_27409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___27410,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___27515 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___27515,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___27515,out){
return (function (state_27492){var state_val_27493 = (state_27492[1]);if((state_val_27493 === 7))
{var inst_27474 = (state_27492[7]);var inst_27474__$1 = (state_27492[2]);var inst_27475 = (inst_27474__$1 == null);var inst_27476 = cljs.core.not.call(null,inst_27475);var state_27492__$1 = (function (){var statearr_27494 = state_27492;(statearr_27494[7] = inst_27474__$1);
return statearr_27494;
})();if(inst_27476)
{var statearr_27495_27516 = state_27492__$1;(statearr_27495_27516[1] = 8);
} else
{var statearr_27496_27517 = state_27492__$1;(statearr_27496_27517[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27493 === 1))
{var inst_27469 = 0;var state_27492__$1 = (function (){var statearr_27497 = state_27492;(statearr_27497[8] = inst_27469);
return statearr_27497;
})();var statearr_27498_27518 = state_27492__$1;(statearr_27498_27518[2] = null);
(statearr_27498_27518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27493 === 4))
{var state_27492__$1 = state_27492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27492__$1,7,ch);
} else
{if((state_val_27493 === 6))
{var inst_27487 = (state_27492[2]);var state_27492__$1 = state_27492;var statearr_27499_27519 = state_27492__$1;(statearr_27499_27519[2] = inst_27487);
(statearr_27499_27519[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27493 === 3))
{var inst_27489 = (state_27492[2]);var inst_27490 = cljs.core.async.close_BANG_.call(null,out);var state_27492__$1 = (function (){var statearr_27500 = state_27492;(statearr_27500[9] = inst_27489);
return statearr_27500;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27492__$1,inst_27490);
} else
{if((state_val_27493 === 2))
{var inst_27469 = (state_27492[8]);var inst_27471 = (inst_27469 < n);var state_27492__$1 = state_27492;if(cljs.core.truth_(inst_27471))
{var statearr_27501_27520 = state_27492__$1;(statearr_27501_27520[1] = 4);
} else
{var statearr_27502_27521 = state_27492__$1;(statearr_27502_27521[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27493 === 11))
{var inst_27469 = (state_27492[8]);var inst_27479 = (state_27492[2]);var inst_27480 = (inst_27469 + 1);var inst_27469__$1 = inst_27480;var state_27492__$1 = (function (){var statearr_27503 = state_27492;(statearr_27503[8] = inst_27469__$1);
(statearr_27503[10] = inst_27479);
return statearr_27503;
})();var statearr_27504_27522 = state_27492__$1;(statearr_27504_27522[2] = null);
(statearr_27504_27522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27493 === 9))
{var state_27492__$1 = state_27492;var statearr_27505_27523 = state_27492__$1;(statearr_27505_27523[2] = null);
(statearr_27505_27523[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27493 === 5))
{var state_27492__$1 = state_27492;var statearr_27506_27524 = state_27492__$1;(statearr_27506_27524[2] = null);
(statearr_27506_27524[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27493 === 10))
{var inst_27484 = (state_27492[2]);var state_27492__$1 = state_27492;var statearr_27507_27525 = state_27492__$1;(statearr_27507_27525[2] = inst_27484);
(statearr_27507_27525[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27493 === 8))
{var inst_27474 = (state_27492[7]);var state_27492__$1 = state_27492;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27492__$1,11,out,inst_27474);
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
});})(c__5691__auto___27515,out))
;return ((function (switch__5676__auto__,c__5691__auto___27515,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_27511 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27511[0] = state_machine__5677__auto__);
(statearr_27511[1] = 1);
return statearr_27511;
});
var state_machine__5677__auto____1 = (function (state_27492){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_27492);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e27512){if((e27512 instanceof Object))
{var ex__5680__auto__ = e27512;var statearr_27513_27526 = state_27492;(statearr_27513_27526[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27492);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27527 = state_27492;
state_27492 = G__27527;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_27492){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_27492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___27515,out))
})();var state__5693__auto__ = (function (){var statearr_27514 = f__5692__auto__.call(null);(statearr_27514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___27515);
return statearr_27514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___27515,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___27624 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___27624,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___27624,out){
return (function (state_27599){var state_val_27600 = (state_27599[1]);if((state_val_27600 === 7))
{var inst_27594 = (state_27599[2]);var state_27599__$1 = state_27599;var statearr_27601_27625 = state_27599__$1;(statearr_27601_27625[2] = inst_27594);
(statearr_27601_27625[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27600 === 1))
{var inst_27576 = null;var state_27599__$1 = (function (){var statearr_27602 = state_27599;(statearr_27602[7] = inst_27576);
return statearr_27602;
})();var statearr_27603_27626 = state_27599__$1;(statearr_27603_27626[2] = null);
(statearr_27603_27626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27600 === 4))
{var inst_27579 = (state_27599[8]);var inst_27579__$1 = (state_27599[2]);var inst_27580 = (inst_27579__$1 == null);var inst_27581 = cljs.core.not.call(null,inst_27580);var state_27599__$1 = (function (){var statearr_27604 = state_27599;(statearr_27604[8] = inst_27579__$1);
return statearr_27604;
})();if(inst_27581)
{var statearr_27605_27627 = state_27599__$1;(statearr_27605_27627[1] = 5);
} else
{var statearr_27606_27628 = state_27599__$1;(statearr_27606_27628[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27600 === 6))
{var state_27599__$1 = state_27599;var statearr_27607_27629 = state_27599__$1;(statearr_27607_27629[2] = null);
(statearr_27607_27629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27600 === 3))
{var inst_27596 = (state_27599[2]);var inst_27597 = cljs.core.async.close_BANG_.call(null,out);var state_27599__$1 = (function (){var statearr_27608 = state_27599;(statearr_27608[9] = inst_27596);
return statearr_27608;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27599__$1,inst_27597);
} else
{if((state_val_27600 === 2))
{var state_27599__$1 = state_27599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27599__$1,4,ch);
} else
{if((state_val_27600 === 11))
{var inst_27579 = (state_27599[8]);var inst_27588 = (state_27599[2]);var inst_27576 = inst_27579;var state_27599__$1 = (function (){var statearr_27609 = state_27599;(statearr_27609[10] = inst_27588);
(statearr_27609[7] = inst_27576);
return statearr_27609;
})();var statearr_27610_27630 = state_27599__$1;(statearr_27610_27630[2] = null);
(statearr_27610_27630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27600 === 9))
{var inst_27579 = (state_27599[8]);var state_27599__$1 = state_27599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27599__$1,11,out,inst_27579);
} else
{if((state_val_27600 === 5))
{var inst_27579 = (state_27599[8]);var inst_27576 = (state_27599[7]);var inst_27583 = cljs.core._EQ_.call(null,inst_27579,inst_27576);var state_27599__$1 = state_27599;if(inst_27583)
{var statearr_27612_27631 = state_27599__$1;(statearr_27612_27631[1] = 8);
} else
{var statearr_27613_27632 = state_27599__$1;(statearr_27613_27632[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27600 === 10))
{var inst_27591 = (state_27599[2]);var state_27599__$1 = state_27599;var statearr_27614_27633 = state_27599__$1;(statearr_27614_27633[2] = inst_27591);
(statearr_27614_27633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27600 === 8))
{var inst_27576 = (state_27599[7]);var tmp27611 = inst_27576;var inst_27576__$1 = tmp27611;var state_27599__$1 = (function (){var statearr_27615 = state_27599;(statearr_27615[7] = inst_27576__$1);
return statearr_27615;
})();var statearr_27616_27634 = state_27599__$1;(statearr_27616_27634[2] = null);
(statearr_27616_27634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___27624,out))
;return ((function (switch__5676__auto__,c__5691__auto___27624,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_27620 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27620[0] = state_machine__5677__auto__);
(statearr_27620[1] = 1);
return statearr_27620;
});
var state_machine__5677__auto____1 = (function (state_27599){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_27599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e27621){if((e27621 instanceof Object))
{var ex__5680__auto__ = e27621;var statearr_27622_27635 = state_27599;(statearr_27622_27635[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27636 = state_27599;
state_27599 = G__27636;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_27599){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_27599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___27624,out))
})();var state__5693__auto__ = (function (){var statearr_27623 = f__5692__auto__.call(null);(statearr_27623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___27624);
return statearr_27623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___27624,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___27771 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___27771,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___27771,out){
return (function (state_27741){var state_val_27742 = (state_27741[1]);if((state_val_27742 === 7))
{var inst_27737 = (state_27741[2]);var state_27741__$1 = state_27741;var statearr_27743_27772 = state_27741__$1;(statearr_27743_27772[2] = inst_27737);
(statearr_27743_27772[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27742 === 1))
{var inst_27704 = (new Array(n));var inst_27705 = inst_27704;var inst_27706 = 0;var state_27741__$1 = (function (){var statearr_27744 = state_27741;(statearr_27744[7] = inst_27706);
(statearr_27744[8] = inst_27705);
return statearr_27744;
})();var statearr_27745_27773 = state_27741__$1;(statearr_27745_27773[2] = null);
(statearr_27745_27773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27742 === 4))
{var inst_27709 = (state_27741[9]);var inst_27709__$1 = (state_27741[2]);var inst_27710 = (inst_27709__$1 == null);var inst_27711 = cljs.core.not.call(null,inst_27710);var state_27741__$1 = (function (){var statearr_27746 = state_27741;(statearr_27746[9] = inst_27709__$1);
return statearr_27746;
})();if(inst_27711)
{var statearr_27747_27774 = state_27741__$1;(statearr_27747_27774[1] = 5);
} else
{var statearr_27748_27775 = state_27741__$1;(statearr_27748_27775[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27742 === 15))
{var inst_27731 = (state_27741[2]);var state_27741__$1 = state_27741;var statearr_27749_27776 = state_27741__$1;(statearr_27749_27776[2] = inst_27731);
(statearr_27749_27776[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27742 === 13))
{var state_27741__$1 = state_27741;var statearr_27750_27777 = state_27741__$1;(statearr_27750_27777[2] = null);
(statearr_27750_27777[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27742 === 6))
{var inst_27706 = (state_27741[7]);var inst_27727 = (inst_27706 > 0);var state_27741__$1 = state_27741;if(cljs.core.truth_(inst_27727))
{var statearr_27751_27778 = state_27741__$1;(statearr_27751_27778[1] = 12);
} else
{var statearr_27752_27779 = state_27741__$1;(statearr_27752_27779[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27742 === 3))
{var inst_27739 = (state_27741[2]);var state_27741__$1 = state_27741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27741__$1,inst_27739);
} else
{if((state_val_27742 === 12))
{var inst_27705 = (state_27741[8]);var inst_27729 = cljs.core.vec.call(null,inst_27705);var state_27741__$1 = state_27741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27741__$1,15,out,inst_27729);
} else
{if((state_val_27742 === 2))
{var state_27741__$1 = state_27741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27741__$1,4,ch);
} else
{if((state_val_27742 === 11))
{var inst_27721 = (state_27741[2]);var inst_27722 = (new Array(n));var inst_27705 = inst_27722;var inst_27706 = 0;var state_27741__$1 = (function (){var statearr_27753 = state_27741;(statearr_27753[7] = inst_27706);
(statearr_27753[10] = inst_27721);
(statearr_27753[8] = inst_27705);
return statearr_27753;
})();var statearr_27754_27780 = state_27741__$1;(statearr_27754_27780[2] = null);
(statearr_27754_27780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27742 === 9))
{var inst_27705 = (state_27741[8]);var inst_27719 = cljs.core.vec.call(null,inst_27705);var state_27741__$1 = state_27741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27741__$1,11,out,inst_27719);
} else
{if((state_val_27742 === 5))
{var inst_27714 = (state_27741[11]);var inst_27706 = (state_27741[7]);var inst_27705 = (state_27741[8]);var inst_27709 = (state_27741[9]);var inst_27713 = (inst_27705[inst_27706] = inst_27709);var inst_27714__$1 = (inst_27706 + 1);var inst_27715 = (inst_27714__$1 < n);var state_27741__$1 = (function (){var statearr_27755 = state_27741;(statearr_27755[12] = inst_27713);
(statearr_27755[11] = inst_27714__$1);
return statearr_27755;
})();if(cljs.core.truth_(inst_27715))
{var statearr_27756_27781 = state_27741__$1;(statearr_27756_27781[1] = 8);
} else
{var statearr_27757_27782 = state_27741__$1;(statearr_27757_27782[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27742 === 14))
{var inst_27734 = (state_27741[2]);var inst_27735 = cljs.core.async.close_BANG_.call(null,out);var state_27741__$1 = (function (){var statearr_27759 = state_27741;(statearr_27759[13] = inst_27734);
return statearr_27759;
})();var statearr_27760_27783 = state_27741__$1;(statearr_27760_27783[2] = inst_27735);
(statearr_27760_27783[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27742 === 10))
{var inst_27725 = (state_27741[2]);var state_27741__$1 = state_27741;var statearr_27761_27784 = state_27741__$1;(statearr_27761_27784[2] = inst_27725);
(statearr_27761_27784[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27742 === 8))
{var inst_27714 = (state_27741[11]);var inst_27705 = (state_27741[8]);var tmp27758 = inst_27705;var inst_27705__$1 = tmp27758;var inst_27706 = inst_27714;var state_27741__$1 = (function (){var statearr_27762 = state_27741;(statearr_27762[7] = inst_27706);
(statearr_27762[8] = inst_27705__$1);
return statearr_27762;
})();var statearr_27763_27785 = state_27741__$1;(statearr_27763_27785[2] = null);
(statearr_27763_27785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___27771,out))
;return ((function (switch__5676__auto__,c__5691__auto___27771,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_27767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27767[0] = state_machine__5677__auto__);
(statearr_27767[1] = 1);
return statearr_27767;
});
var state_machine__5677__auto____1 = (function (state_27741){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_27741);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e27768){if((e27768 instanceof Object))
{var ex__5680__auto__ = e27768;var statearr_27769_27786 = state_27741;(statearr_27769_27786[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27787 = state_27741;
state_27741 = G__27787;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_27741){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_27741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___27771,out))
})();var state__5693__auto__ = (function (){var statearr_27770 = f__5692__auto__.call(null);(statearr_27770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___27771);
return statearr_27770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___27771,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___27930 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___27930,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___27930,out){
return (function (state_27900){var state_val_27901 = (state_27900[1]);if((state_val_27901 === 7))
{var inst_27896 = (state_27900[2]);var state_27900__$1 = state_27900;var statearr_27902_27931 = state_27900__$1;(statearr_27902_27931[2] = inst_27896);
(statearr_27902_27931[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27901 === 1))
{var inst_27859 = [];var inst_27860 = inst_27859;var inst_27861 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27900__$1 = (function (){var statearr_27903 = state_27900;(statearr_27903[7] = inst_27860);
(statearr_27903[8] = inst_27861);
return statearr_27903;
})();var statearr_27904_27932 = state_27900__$1;(statearr_27904_27932[2] = null);
(statearr_27904_27932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27901 === 4))
{var inst_27864 = (state_27900[9]);var inst_27864__$1 = (state_27900[2]);var inst_27865 = (inst_27864__$1 == null);var inst_27866 = cljs.core.not.call(null,inst_27865);var state_27900__$1 = (function (){var statearr_27905 = state_27900;(statearr_27905[9] = inst_27864__$1);
return statearr_27905;
})();if(inst_27866)
{var statearr_27906_27933 = state_27900__$1;(statearr_27906_27933[1] = 5);
} else
{var statearr_27907_27934 = state_27900__$1;(statearr_27907_27934[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27901 === 15))
{var inst_27890 = (state_27900[2]);var state_27900__$1 = state_27900;var statearr_27908_27935 = state_27900__$1;(statearr_27908_27935[2] = inst_27890);
(statearr_27908_27935[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27901 === 13))
{var state_27900__$1 = state_27900;var statearr_27909_27936 = state_27900__$1;(statearr_27909_27936[2] = null);
(statearr_27909_27936[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27901 === 6))
{var inst_27860 = (state_27900[7]);var inst_27885 = inst_27860.length;var inst_27886 = (inst_27885 > 0);var state_27900__$1 = state_27900;if(cljs.core.truth_(inst_27886))
{var statearr_27910_27937 = state_27900__$1;(statearr_27910_27937[1] = 12);
} else
{var statearr_27911_27938 = state_27900__$1;(statearr_27911_27938[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27901 === 3))
{var inst_27898 = (state_27900[2]);var state_27900__$1 = state_27900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27900__$1,inst_27898);
} else
{if((state_val_27901 === 12))
{var inst_27860 = (state_27900[7]);var inst_27888 = cljs.core.vec.call(null,inst_27860);var state_27900__$1 = state_27900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27900__$1,15,out,inst_27888);
} else
{if((state_val_27901 === 2))
{var state_27900__$1 = state_27900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27900__$1,4,ch);
} else
{if((state_val_27901 === 11))
{var inst_27868 = (state_27900[10]);var inst_27864 = (state_27900[9]);var inst_27878 = (state_27900[2]);var inst_27879 = [];var inst_27880 = inst_27879.push(inst_27864);var inst_27860 = inst_27879;var inst_27861 = inst_27868;var state_27900__$1 = (function (){var statearr_27912 = state_27900;(statearr_27912[7] = inst_27860);
(statearr_27912[11] = inst_27880);
(statearr_27912[8] = inst_27861);
(statearr_27912[12] = inst_27878);
return statearr_27912;
})();var statearr_27913_27939 = state_27900__$1;(statearr_27913_27939[2] = null);
(statearr_27913_27939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27901 === 9))
{var inst_27860 = (state_27900[7]);var inst_27876 = cljs.core.vec.call(null,inst_27860);var state_27900__$1 = state_27900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27900__$1,11,out,inst_27876);
} else
{if((state_val_27901 === 5))
{var inst_27868 = (state_27900[10]);var inst_27864 = (state_27900[9]);var inst_27861 = (state_27900[8]);var inst_27868__$1 = f.call(null,inst_27864);var inst_27869 = cljs.core._EQ_.call(null,inst_27868__$1,inst_27861);var inst_27870 = cljs.core.keyword_identical_QMARK_.call(null,inst_27861,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27871 = (inst_27869) || (inst_27870);var state_27900__$1 = (function (){var statearr_27914 = state_27900;(statearr_27914[10] = inst_27868__$1);
return statearr_27914;
})();if(cljs.core.truth_(inst_27871))
{var statearr_27915_27940 = state_27900__$1;(statearr_27915_27940[1] = 8);
} else
{var statearr_27916_27941 = state_27900__$1;(statearr_27916_27941[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27901 === 14))
{var inst_27893 = (state_27900[2]);var inst_27894 = cljs.core.async.close_BANG_.call(null,out);var state_27900__$1 = (function (){var statearr_27918 = state_27900;(statearr_27918[13] = inst_27893);
return statearr_27918;
})();var statearr_27919_27942 = state_27900__$1;(statearr_27919_27942[2] = inst_27894);
(statearr_27919_27942[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27901 === 10))
{var inst_27883 = (state_27900[2]);var state_27900__$1 = state_27900;var statearr_27920_27943 = state_27900__$1;(statearr_27920_27943[2] = inst_27883);
(statearr_27920_27943[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27901 === 8))
{var inst_27868 = (state_27900[10]);var inst_27860 = (state_27900[7]);var inst_27864 = (state_27900[9]);var inst_27873 = inst_27860.push(inst_27864);var tmp27917 = inst_27860;var inst_27860__$1 = tmp27917;var inst_27861 = inst_27868;var state_27900__$1 = (function (){var statearr_27921 = state_27900;(statearr_27921[7] = inst_27860__$1);
(statearr_27921[14] = inst_27873);
(statearr_27921[8] = inst_27861);
return statearr_27921;
})();var statearr_27922_27944 = state_27900__$1;(statearr_27922_27944[2] = null);
(statearr_27922_27944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5691__auto___27930,out))
;return ((function (switch__5676__auto__,c__5691__auto___27930,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_27926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27926[0] = state_machine__5677__auto__);
(statearr_27926[1] = 1);
return statearr_27926;
});
var state_machine__5677__auto____1 = (function (state_27900){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_27900);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e27927){if((e27927 instanceof Object))
{var ex__5680__auto__ = e27927;var statearr_27928_27945 = state_27900;(statearr_27928_27945[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27900);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27946 = state_27900;
state_27900 = G__27946;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_27900){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_27900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___27930,out))
})();var state__5693__auto__ = (function (){var statearr_27929 = f__5692__auto__.call(null);(statearr_27929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___27930);
return statearr_27929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___27930,out))
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
