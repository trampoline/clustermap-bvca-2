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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25394 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25394 = (function (f,fn_handler,meta25395){
this.f = f;
this.fn_handler = fn_handler;
this.meta25395 = meta25395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25394.cljs$lang$type = true;
cljs.core.async.t25394.cljs$lang$ctorStr = "cljs.core.async/t25394";
cljs.core.async.t25394.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25394");
});
cljs.core.async.t25394.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25396){var self__ = this;
var _25396__$1 = this;return self__.meta25395;
});
cljs.core.async.t25394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25396,meta25395__$1){var self__ = this;
var _25396__$1 = this;return (new cljs.core.async.t25394(self__.f,self__.fn_handler,meta25395__$1));
});
cljs.core.async.__GT_t25394 = (function __GT_t25394(f__$1,fn_handler__$1,meta25395){return (new cljs.core.async.t25394(f__$1,fn_handler__$1,meta25395));
});
}
return (new cljs.core.async.t25394(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25398 = buff;if(G__25398)
{var bit__4189__auto__ = null;if(cljs.core.truth_((function (){var or__3539__auto__ = bit__4189__auto__;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return G__25398.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25398.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25398);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25398);
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
{var val_25399 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25399);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_25399,ret){
return (function (){return fn1.call(null,val_25399);
});})(val_25399,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3527__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4395__auto___25400 = n;var x_25401 = 0;while(true){
if((x_25401 < n__4395__auto___25400))
{(a[x_25401] = 0);
{
var G__25402 = (x_25401 + 1);
x_25401 = G__25402;
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
var G__25403 = (i + 1);
i = G__25403;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25407 = (function (flag,alt_flag,meta25408){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25408 = meta25408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25407.cljs$lang$type = true;
cljs.core.async.t25407.cljs$lang$ctorStr = "cljs.core.async/t25407";
cljs.core.async.t25407.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25407");
});})(flag))
;
cljs.core.async.t25407.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25409){var self__ = this;
var _25409__$1 = this;return self__.meta25408;
});})(flag))
;
cljs.core.async.t25407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25409,meta25408__$1){var self__ = this;
var _25409__$1 = this;return (new cljs.core.async.t25407(self__.flag,self__.alt_flag,meta25408__$1));
});})(flag))
;
cljs.core.async.__GT_t25407 = ((function (flag){
return (function __GT_t25407(flag__$1,alt_flag__$1,meta25408){return (new cljs.core.async.t25407(flag__$1,alt_flag__$1,meta25408));
});})(flag))
;
}
return (new cljs.core.async.t25407(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25413 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25413 = (function (cb,flag,alt_handler,meta25414){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25414 = meta25414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25413.cljs$lang$type = true;
cljs.core.async.t25413.cljs$lang$ctorStr = "cljs.core.async/t25413";
cljs.core.async.t25413.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25413");
});
cljs.core.async.t25413.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25415){var self__ = this;
var _25415__$1 = this;return self__.meta25414;
});
cljs.core.async.t25413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25415,meta25414__$1){var self__ = this;
var _25415__$1 = this;return (new cljs.core.async.t25413(self__.cb,self__.flag,self__.alt_handler,meta25414__$1));
});
cljs.core.async.__GT_t25413 = (function __GT_t25413(cb__$1,flag__$1,alt_handler__$1,meta25414){return (new cljs.core.async.t25413(cb__$1,flag__$1,alt_handler__$1,meta25414));
});
}
return (new cljs.core.async.t25413(cb,flag,alt_handler,null));
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
return (function (p1__25416_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25416_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3539__auto__ = wport;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__25417 = (i + 1);
i = G__25417;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3539__auto__ = ret;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3527__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3527__auto__;
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
var alts_BANG___delegate = function (ports,p__25418){var map__25420 = p__25418;var map__25420__$1 = ((cljs.core.seq_QMARK_.call(null,map__25420))?cljs.core.apply.call(null,cljs.core.hash_map,map__25420):map__25420);var opts = map__25420__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25418 = null;if (arguments.length > 1) {
  p__25418 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25418);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25421){
var ports = cljs.core.first(arglist__25421);
var p__25418 = cljs.core.rest(arglist__25421);
return alts_BANG___delegate(ports,p__25418);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25429 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25429 = (function (ch,f,map_LT_,meta25430){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25430 = meta25430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25429.cljs$lang$type = true;
cljs.core.async.t25429.cljs$lang$ctorStr = "cljs.core.async/t25429";
cljs.core.async.t25429.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25429");
});
cljs.core.async.t25429.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25429.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25429.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25429.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25432 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25432 = (function (fn1,_,meta25430,ch,f,map_LT_,meta25433){
this.fn1 = fn1;
this._ = _;
this.meta25430 = meta25430;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25433 = meta25433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25432.cljs$lang$type = true;
cljs.core.async.t25432.cljs$lang$ctorStr = "cljs.core.async/t25432";
cljs.core.async.t25432.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25432");
});})(___$1))
;
cljs.core.async.t25432.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25432.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25422_SHARP_){return f1.call(null,(((p1__25422_SHARP_ == null))?null:self__.f.call(null,p1__25422_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25434){var self__ = this;
var _25434__$1 = this;return self__.meta25433;
});})(___$1))
;
cljs.core.async.t25432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25434,meta25433__$1){var self__ = this;
var _25434__$1 = this;return (new cljs.core.async.t25432(self__.fn1,self__._,self__.meta25430,self__.ch,self__.f,self__.map_LT_,meta25433__$1));
});})(___$1))
;
cljs.core.async.__GT_t25432 = ((function (___$1){
return (function __GT_t25432(fn1__$1,___$2,meta25430__$1,ch__$2,f__$2,map_LT___$2,meta25433){return (new cljs.core.async.t25432(fn1__$1,___$2,meta25430__$1,ch__$2,f__$2,map_LT___$2,meta25433));
});})(___$1))
;
}
return (new cljs.core.async.t25432(fn1,___$1,self__.meta25430,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3527__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25429.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25429.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25431){var self__ = this;
var _25431__$1 = this;return self__.meta25430;
});
cljs.core.async.t25429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25431,meta25430__$1){var self__ = this;
var _25431__$1 = this;return (new cljs.core.async.t25429(self__.ch,self__.f,self__.map_LT_,meta25430__$1));
});
cljs.core.async.__GT_t25429 = (function __GT_t25429(ch__$1,f__$1,map_LT___$1,meta25430){return (new cljs.core.async.t25429(ch__$1,f__$1,map_LT___$1,meta25430));
});
}
return (new cljs.core.async.t25429(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25438 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25438 = (function (ch,f,map_GT_,meta25439){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25439 = meta25439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25438.cljs$lang$type = true;
cljs.core.async.t25438.cljs$lang$ctorStr = "cljs.core.async/t25438";
cljs.core.async.t25438.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25438");
});
cljs.core.async.t25438.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25438.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25438.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25438.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25438.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25438.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25440){var self__ = this;
var _25440__$1 = this;return self__.meta25439;
});
cljs.core.async.t25438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25440,meta25439__$1){var self__ = this;
var _25440__$1 = this;return (new cljs.core.async.t25438(self__.ch,self__.f,self__.map_GT_,meta25439__$1));
});
cljs.core.async.__GT_t25438 = (function __GT_t25438(ch__$1,f__$1,map_GT___$1,meta25439){return (new cljs.core.async.t25438(ch__$1,f__$1,map_GT___$1,meta25439));
});
}
return (new cljs.core.async.t25438(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25444 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25444 = (function (ch,p,filter_GT_,meta25445){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25445 = meta25445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25444.cljs$lang$type = true;
cljs.core.async.t25444.cljs$lang$ctorStr = "cljs.core.async/t25444";
cljs.core.async.t25444.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25444");
});
cljs.core.async.t25444.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25444.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25444.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25444.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25444.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25444.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25446){var self__ = this;
var _25446__$1 = this;return self__.meta25445;
});
cljs.core.async.t25444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25446,meta25445__$1){var self__ = this;
var _25446__$1 = this;return (new cljs.core.async.t25444(self__.ch,self__.p,self__.filter_GT_,meta25445__$1));
});
cljs.core.async.__GT_t25444 = (function __GT_t25444(ch__$1,p__$1,filter_GT___$1,meta25445){return (new cljs.core.async.t25444(ch__$1,p__$1,filter_GT___$1,meta25445));
});
}
return (new cljs.core.async.t25444(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___25529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___25529,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___25529,out){
return (function (state_25508){var state_val_25509 = (state_25508[1]);if((state_val_25509 === 7))
{var inst_25504 = (state_25508[2]);var state_25508__$1 = state_25508;var statearr_25510_25530 = state_25508__$1;(statearr_25510_25530[2] = inst_25504);
(statearr_25510_25530[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25509 === 1))
{var state_25508__$1 = state_25508;var statearr_25511_25531 = state_25508__$1;(statearr_25511_25531[2] = null);
(statearr_25511_25531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25509 === 4))
{var inst_25490 = (state_25508[7]);var inst_25490__$1 = (state_25508[2]);var inst_25491 = (inst_25490__$1 == null);var state_25508__$1 = (function (){var statearr_25512 = state_25508;(statearr_25512[7] = inst_25490__$1);
return statearr_25512;
})();if(cljs.core.truth_(inst_25491))
{var statearr_25513_25532 = state_25508__$1;(statearr_25513_25532[1] = 5);
} else
{var statearr_25514_25533 = state_25508__$1;(statearr_25514_25533[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25509 === 6))
{var inst_25490 = (state_25508[7]);var inst_25495 = p.call(null,inst_25490);var state_25508__$1 = state_25508;if(cljs.core.truth_(inst_25495))
{var statearr_25515_25534 = state_25508__$1;(statearr_25515_25534[1] = 8);
} else
{var statearr_25516_25535 = state_25508__$1;(statearr_25516_25535[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25509 === 3))
{var inst_25506 = (state_25508[2]);var state_25508__$1 = state_25508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25508__$1,inst_25506);
} else
{if((state_val_25509 === 2))
{var state_25508__$1 = state_25508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25508__$1,4,ch);
} else
{if((state_val_25509 === 11))
{var inst_25498 = (state_25508[2]);var state_25508__$1 = state_25508;var statearr_25517_25536 = state_25508__$1;(statearr_25517_25536[2] = inst_25498);
(statearr_25517_25536[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25509 === 9))
{var state_25508__$1 = state_25508;var statearr_25518_25537 = state_25508__$1;(statearr_25518_25537[2] = null);
(statearr_25518_25537[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25509 === 5))
{var inst_25493 = cljs.core.async.close_BANG_.call(null,out);var state_25508__$1 = state_25508;var statearr_25519_25538 = state_25508__$1;(statearr_25519_25538[2] = inst_25493);
(statearr_25519_25538[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25509 === 10))
{var inst_25501 = (state_25508[2]);var state_25508__$1 = (function (){var statearr_25520 = state_25508;(statearr_25520[8] = inst_25501);
return statearr_25520;
})();var statearr_25521_25539 = state_25508__$1;(statearr_25521_25539[2] = null);
(statearr_25521_25539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25509 === 8))
{var inst_25490 = (state_25508[7]);var state_25508__$1 = state_25508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25508__$1,11,out,inst_25490);
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
});})(c__5689__auto___25529,out))
;return ((function (switch__5674__auto__,c__5689__auto___25529,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_25525 = [null,null,null,null,null,null,null,null,null];(statearr_25525[0] = state_machine__5675__auto__);
(statearr_25525[1] = 1);
return statearr_25525;
});
var state_machine__5675__auto____1 = (function (state_25508){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_25508);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e25526){if((e25526 instanceof Object))
{var ex__5678__auto__ = e25526;var statearr_25527_25540 = state_25508;(statearr_25527_25540[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25508);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25541 = state_25508;
state_25508 = G__25541;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_25508){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_25508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___25529,out))
})();var state__5691__auto__ = (function (){var statearr_25528 = f__5690__auto__.call(null);(statearr_25528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___25529);
return statearr_25528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___25529,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_25693){var state_val_25694 = (state_25693[1]);if((state_val_25694 === 7))
{var inst_25689 = (state_25693[2]);var state_25693__$1 = state_25693;var statearr_25695_25732 = state_25693__$1;(statearr_25695_25732[2] = inst_25689);
(statearr_25695_25732[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 20))
{var inst_25664 = (state_25693[7]);var inst_25675 = (state_25693[2]);var inst_25676 = cljs.core.next.call(null,inst_25664);var inst_25650 = inst_25676;var inst_25651 = null;var inst_25652 = 0;var inst_25653 = 0;var state_25693__$1 = (function (){var statearr_25696 = state_25693;(statearr_25696[8] = inst_25650);
(statearr_25696[9] = inst_25653);
(statearr_25696[10] = inst_25675);
(statearr_25696[11] = inst_25651);
(statearr_25696[12] = inst_25652);
return statearr_25696;
})();var statearr_25697_25733 = state_25693__$1;(statearr_25697_25733[2] = null);
(statearr_25697_25733[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 1))
{var state_25693__$1 = state_25693;var statearr_25698_25734 = state_25693__$1;(statearr_25698_25734[2] = null);
(statearr_25698_25734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 4))
{var inst_25639 = (state_25693[13]);var inst_25639__$1 = (state_25693[2]);var inst_25640 = (inst_25639__$1 == null);var state_25693__$1 = (function (){var statearr_25702 = state_25693;(statearr_25702[13] = inst_25639__$1);
return statearr_25702;
})();if(cljs.core.truth_(inst_25640))
{var statearr_25703_25735 = state_25693__$1;(statearr_25703_25735[1] = 5);
} else
{var statearr_25704_25736 = state_25693__$1;(statearr_25704_25736[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 15))
{var state_25693__$1 = state_25693;var statearr_25705_25737 = state_25693__$1;(statearr_25705_25737[2] = null);
(statearr_25705_25737[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 13))
{var inst_25650 = (state_25693[8]);var inst_25653 = (state_25693[9]);var inst_25651 = (state_25693[11]);var inst_25652 = (state_25693[12]);var inst_25660 = (state_25693[2]);var inst_25661 = (inst_25653 + 1);var tmp25699 = inst_25650;var tmp25700 = inst_25651;var tmp25701 = inst_25652;var inst_25650__$1 = tmp25699;var inst_25651__$1 = tmp25700;var inst_25652__$1 = tmp25701;var inst_25653__$1 = inst_25661;var state_25693__$1 = (function (){var statearr_25706 = state_25693;(statearr_25706[8] = inst_25650__$1);
(statearr_25706[9] = inst_25653__$1);
(statearr_25706[11] = inst_25651__$1);
(statearr_25706[12] = inst_25652__$1);
(statearr_25706[14] = inst_25660);
return statearr_25706;
})();var statearr_25707_25738 = state_25693__$1;(statearr_25707_25738[2] = null);
(statearr_25707_25738[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 6))
{var inst_25639 = (state_25693[13]);var inst_25644 = f.call(null,inst_25639);var inst_25649 = cljs.core.seq.call(null,inst_25644);var inst_25650 = inst_25649;var inst_25651 = null;var inst_25652 = 0;var inst_25653 = 0;var state_25693__$1 = (function (){var statearr_25708 = state_25693;(statearr_25708[8] = inst_25650);
(statearr_25708[9] = inst_25653);
(statearr_25708[11] = inst_25651);
(statearr_25708[12] = inst_25652);
return statearr_25708;
})();var statearr_25709_25739 = state_25693__$1;(statearr_25709_25739[2] = null);
(statearr_25709_25739[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 17))
{var inst_25664 = (state_25693[7]);var inst_25668 = cljs.core.chunk_first.call(null,inst_25664);var inst_25669 = cljs.core.chunk_rest.call(null,inst_25664);var inst_25670 = cljs.core.count.call(null,inst_25668);var inst_25650 = inst_25669;var inst_25651 = inst_25668;var inst_25652 = inst_25670;var inst_25653 = 0;var state_25693__$1 = (function (){var statearr_25710 = state_25693;(statearr_25710[8] = inst_25650);
(statearr_25710[9] = inst_25653);
(statearr_25710[11] = inst_25651);
(statearr_25710[12] = inst_25652);
return statearr_25710;
})();var statearr_25711_25740 = state_25693__$1;(statearr_25711_25740[2] = null);
(statearr_25711_25740[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 3))
{var inst_25691 = (state_25693[2]);var state_25693__$1 = state_25693;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25693__$1,inst_25691);
} else
{if((state_val_25694 === 12))
{var inst_25684 = (state_25693[2]);var state_25693__$1 = state_25693;var statearr_25712_25741 = state_25693__$1;(statearr_25712_25741[2] = inst_25684);
(statearr_25712_25741[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 2))
{var state_25693__$1 = state_25693;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25693__$1,4,in$);
} else
{if((state_val_25694 === 19))
{var inst_25679 = (state_25693[2]);var state_25693__$1 = state_25693;var statearr_25713_25742 = state_25693__$1;(statearr_25713_25742[2] = inst_25679);
(statearr_25713_25742[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 11))
{var inst_25650 = (state_25693[8]);var inst_25664 = (state_25693[7]);var inst_25664__$1 = cljs.core.seq.call(null,inst_25650);var state_25693__$1 = (function (){var statearr_25714 = state_25693;(statearr_25714[7] = inst_25664__$1);
return statearr_25714;
})();if(inst_25664__$1)
{var statearr_25715_25743 = state_25693__$1;(statearr_25715_25743[1] = 14);
} else
{var statearr_25716_25744 = state_25693__$1;(statearr_25716_25744[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 9))
{var inst_25686 = (state_25693[2]);var state_25693__$1 = (function (){var statearr_25717 = state_25693;(statearr_25717[15] = inst_25686);
return statearr_25717;
})();var statearr_25718_25745 = state_25693__$1;(statearr_25718_25745[2] = null);
(statearr_25718_25745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 5))
{var inst_25642 = cljs.core.async.close_BANG_.call(null,out);var state_25693__$1 = state_25693;var statearr_25719_25746 = state_25693__$1;(statearr_25719_25746[2] = inst_25642);
(statearr_25719_25746[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 14))
{var inst_25664 = (state_25693[7]);var inst_25666 = cljs.core.chunked_seq_QMARK_.call(null,inst_25664);var state_25693__$1 = state_25693;if(inst_25666)
{var statearr_25720_25747 = state_25693__$1;(statearr_25720_25747[1] = 17);
} else
{var statearr_25721_25748 = state_25693__$1;(statearr_25721_25748[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 16))
{var inst_25682 = (state_25693[2]);var state_25693__$1 = state_25693;var statearr_25722_25749 = state_25693__$1;(statearr_25722_25749[2] = inst_25682);
(statearr_25722_25749[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25694 === 10))
{var inst_25653 = (state_25693[9]);var inst_25651 = (state_25693[11]);var inst_25658 = cljs.core._nth.call(null,inst_25651,inst_25653);var state_25693__$1 = state_25693;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25693__$1,13,out,inst_25658);
} else
{if((state_val_25694 === 18))
{var inst_25664 = (state_25693[7]);var inst_25673 = cljs.core.first.call(null,inst_25664);var state_25693__$1 = state_25693;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25693__$1,20,out,inst_25673);
} else
{if((state_val_25694 === 8))
{var inst_25653 = (state_25693[9]);var inst_25652 = (state_25693[12]);var inst_25655 = (inst_25653 < inst_25652);var inst_25656 = inst_25655;var state_25693__$1 = state_25693;if(cljs.core.truth_(inst_25656))
{var statearr_25723_25750 = state_25693__$1;(statearr_25723_25750[1] = 10);
} else
{var statearr_25724_25751 = state_25693__$1;(statearr_25724_25751[1] = 11);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_25728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25728[0] = state_machine__5675__auto__);
(statearr_25728[1] = 1);
return statearr_25728;
});
var state_machine__5675__auto____1 = (function (state_25693){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_25693);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e25729){if((e25729 instanceof Object))
{var ex__5678__auto__ = e25729;var statearr_25730_25752 = state_25693;(statearr_25730_25752[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25693);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25729;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25753 = state_25693;
state_25693 = G__25753;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_25693){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_25693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_25731 = f__5690__auto__.call(null);(statearr_25731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_25731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5689__auto___25834 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___25834){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___25834){
return (function (state_25813){var state_val_25814 = (state_25813[1]);if((state_val_25814 === 7))
{var inst_25809 = (state_25813[2]);var state_25813__$1 = state_25813;var statearr_25815_25835 = state_25813__$1;(statearr_25815_25835[2] = inst_25809);
(statearr_25815_25835[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25814 === 1))
{var state_25813__$1 = state_25813;var statearr_25816_25836 = state_25813__$1;(statearr_25816_25836[2] = null);
(statearr_25816_25836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25814 === 4))
{var inst_25796 = (state_25813[7]);var inst_25796__$1 = (state_25813[2]);var inst_25797 = (inst_25796__$1 == null);var state_25813__$1 = (function (){var statearr_25817 = state_25813;(statearr_25817[7] = inst_25796__$1);
return statearr_25817;
})();if(cljs.core.truth_(inst_25797))
{var statearr_25818_25837 = state_25813__$1;(statearr_25818_25837[1] = 5);
} else
{var statearr_25819_25838 = state_25813__$1;(statearr_25819_25838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25814 === 6))
{var inst_25796 = (state_25813[7]);var state_25813__$1 = state_25813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25813__$1,11,to,inst_25796);
} else
{if((state_val_25814 === 3))
{var inst_25811 = (state_25813[2]);var state_25813__$1 = state_25813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25813__$1,inst_25811);
} else
{if((state_val_25814 === 2))
{var state_25813__$1 = state_25813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25813__$1,4,from);
} else
{if((state_val_25814 === 11))
{var inst_25806 = (state_25813[2]);var state_25813__$1 = (function (){var statearr_25820 = state_25813;(statearr_25820[8] = inst_25806);
return statearr_25820;
})();var statearr_25821_25839 = state_25813__$1;(statearr_25821_25839[2] = null);
(statearr_25821_25839[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25814 === 9))
{var state_25813__$1 = state_25813;var statearr_25822_25840 = state_25813__$1;(statearr_25822_25840[2] = null);
(statearr_25822_25840[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25814 === 5))
{var state_25813__$1 = state_25813;if(cljs.core.truth_(close_QMARK_))
{var statearr_25823_25841 = state_25813__$1;(statearr_25823_25841[1] = 8);
} else
{var statearr_25824_25842 = state_25813__$1;(statearr_25824_25842[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25814 === 10))
{var inst_25803 = (state_25813[2]);var state_25813__$1 = state_25813;var statearr_25825_25843 = state_25813__$1;(statearr_25825_25843[2] = inst_25803);
(statearr_25825_25843[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25814 === 8))
{var inst_25800 = cljs.core.async.close_BANG_.call(null,to);var state_25813__$1 = state_25813;var statearr_25826_25844 = state_25813__$1;(statearr_25826_25844[2] = inst_25800);
(statearr_25826_25844[1] = 10);
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
});})(c__5689__auto___25834))
;return ((function (switch__5674__auto__,c__5689__auto___25834){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_25830 = [null,null,null,null,null,null,null,null,null];(statearr_25830[0] = state_machine__5675__auto__);
(statearr_25830[1] = 1);
return statearr_25830;
});
var state_machine__5675__auto____1 = (function (state_25813){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_25813);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e25831){if((e25831 instanceof Object))
{var ex__5678__auto__ = e25831;var statearr_25832_25845 = state_25813;(statearr_25832_25845[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25813);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25846 = state_25813;
state_25813 = G__25846;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_25813){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_25813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___25834))
})();var state__5691__auto__ = (function (){var statearr_25833 = f__5690__auto__.call(null);(statearr_25833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___25834);
return statearr_25833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___25834))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5689__auto___25933 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___25933,tc,fc){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___25933,tc,fc){
return (function (state_25911){var state_val_25912 = (state_25911[1]);if((state_val_25912 === 7))
{var inst_25907 = (state_25911[2]);var state_25911__$1 = state_25911;var statearr_25913_25934 = state_25911__$1;(statearr_25913_25934[2] = inst_25907);
(statearr_25913_25934[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25912 === 1))
{var state_25911__$1 = state_25911;var statearr_25914_25935 = state_25911__$1;(statearr_25914_25935[2] = null);
(statearr_25914_25935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25912 === 4))
{var inst_25892 = (state_25911[7]);var inst_25892__$1 = (state_25911[2]);var inst_25893 = (inst_25892__$1 == null);var state_25911__$1 = (function (){var statearr_25915 = state_25911;(statearr_25915[7] = inst_25892__$1);
return statearr_25915;
})();if(cljs.core.truth_(inst_25893))
{var statearr_25916_25936 = state_25911__$1;(statearr_25916_25936[1] = 5);
} else
{var statearr_25917_25937 = state_25911__$1;(statearr_25917_25937[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25912 === 6))
{var inst_25892 = (state_25911[7]);var inst_25898 = p.call(null,inst_25892);var state_25911__$1 = state_25911;if(cljs.core.truth_(inst_25898))
{var statearr_25918_25938 = state_25911__$1;(statearr_25918_25938[1] = 9);
} else
{var statearr_25919_25939 = state_25911__$1;(statearr_25919_25939[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25912 === 3))
{var inst_25909 = (state_25911[2]);var state_25911__$1 = state_25911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25911__$1,inst_25909);
} else
{if((state_val_25912 === 2))
{var state_25911__$1 = state_25911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25911__$1,4,ch);
} else
{if((state_val_25912 === 11))
{var inst_25892 = (state_25911[7]);var inst_25902 = (state_25911[2]);var state_25911__$1 = state_25911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25911__$1,8,inst_25902,inst_25892);
} else
{if((state_val_25912 === 9))
{var state_25911__$1 = state_25911;var statearr_25920_25940 = state_25911__$1;(statearr_25920_25940[2] = tc);
(statearr_25920_25940[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25912 === 5))
{var inst_25895 = cljs.core.async.close_BANG_.call(null,tc);var inst_25896 = cljs.core.async.close_BANG_.call(null,fc);var state_25911__$1 = (function (){var statearr_25921 = state_25911;(statearr_25921[8] = inst_25895);
return statearr_25921;
})();var statearr_25922_25941 = state_25911__$1;(statearr_25922_25941[2] = inst_25896);
(statearr_25922_25941[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25912 === 10))
{var state_25911__$1 = state_25911;var statearr_25923_25942 = state_25911__$1;(statearr_25923_25942[2] = fc);
(statearr_25923_25942[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25912 === 8))
{var inst_25904 = (state_25911[2]);var state_25911__$1 = (function (){var statearr_25924 = state_25911;(statearr_25924[9] = inst_25904);
return statearr_25924;
})();var statearr_25925_25943 = state_25911__$1;(statearr_25925_25943[2] = null);
(statearr_25925_25943[1] = 2);
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
});})(c__5689__auto___25933,tc,fc))
;return ((function (switch__5674__auto__,c__5689__auto___25933,tc,fc){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_25929 = [null,null,null,null,null,null,null,null,null,null];(statearr_25929[0] = state_machine__5675__auto__);
(statearr_25929[1] = 1);
return statearr_25929;
});
var state_machine__5675__auto____1 = (function (state_25911){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_25911);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e25930){if((e25930 instanceof Object))
{var ex__5678__auto__ = e25930;var statearr_25931_25944 = state_25911;(statearr_25931_25944[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25945 = state_25911;
state_25911 = G__25945;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_25911){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_25911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___25933,tc,fc))
})();var state__5691__auto__ = (function (){var statearr_25932 = f__5690__auto__.call(null);(statearr_25932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___25933);
return statearr_25932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___25933,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_25992){var state_val_25993 = (state_25992[1]);if((state_val_25993 === 7))
{var inst_25988 = (state_25992[2]);var state_25992__$1 = state_25992;var statearr_25994_26010 = state_25992__$1;(statearr_25994_26010[2] = inst_25988);
(statearr_25994_26010[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25993 === 6))
{var inst_25978 = (state_25992[7]);var inst_25981 = (state_25992[8]);var inst_25985 = f.call(null,inst_25978,inst_25981);var inst_25978__$1 = inst_25985;var state_25992__$1 = (function (){var statearr_25995 = state_25992;(statearr_25995[7] = inst_25978__$1);
return statearr_25995;
})();var statearr_25996_26011 = state_25992__$1;(statearr_25996_26011[2] = null);
(statearr_25996_26011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25993 === 5))
{var inst_25978 = (state_25992[7]);var state_25992__$1 = state_25992;var statearr_25997_26012 = state_25992__$1;(statearr_25997_26012[2] = inst_25978);
(statearr_25997_26012[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25993 === 4))
{var inst_25981 = (state_25992[8]);var inst_25981__$1 = (state_25992[2]);var inst_25982 = (inst_25981__$1 == null);var state_25992__$1 = (function (){var statearr_25998 = state_25992;(statearr_25998[8] = inst_25981__$1);
return statearr_25998;
})();if(cljs.core.truth_(inst_25982))
{var statearr_25999_26013 = state_25992__$1;(statearr_25999_26013[1] = 5);
} else
{var statearr_26000_26014 = state_25992__$1;(statearr_26000_26014[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25993 === 3))
{var inst_25990 = (state_25992[2]);var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25992__$1,inst_25990);
} else
{if((state_val_25993 === 2))
{var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25992__$1,4,ch);
} else
{if((state_val_25993 === 1))
{var inst_25978 = init;var state_25992__$1 = (function (){var statearr_26001 = state_25992;(statearr_26001[7] = inst_25978);
return statearr_26001;
})();var statearr_26002_26015 = state_25992__$1;(statearr_26002_26015[2] = null);
(statearr_26002_26015[1] = 2);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_26006 = [null,null,null,null,null,null,null,null,null];(statearr_26006[0] = state_machine__5675__auto__);
(statearr_26006[1] = 1);
return statearr_26006;
});
var state_machine__5675__auto____1 = (function (state_25992){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_25992);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e26007){if((e26007 instanceof Object))
{var ex__5678__auto__ = e26007;var statearr_26008_26016 = state_25992;(statearr_26008_26016[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26017 = state_25992;
state_25992 = G__26017;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_25992){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_25992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_26009 = f__5690__auto__.call(null);(statearr_26009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_26009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_26079){var state_val_26080 = (state_26079[1]);if((state_val_26080 === 7))
{var inst_26060 = (state_26079[7]);var inst_26065 = (state_26079[2]);var inst_26066 = cljs.core.next.call(null,inst_26060);var inst_26060__$1 = inst_26066;var state_26079__$1 = (function (){var statearr_26081 = state_26079;(statearr_26081[7] = inst_26060__$1);
(statearr_26081[8] = inst_26065);
return statearr_26081;
})();var statearr_26082_26100 = state_26079__$1;(statearr_26082_26100[2] = null);
(statearr_26082_26100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26080 === 1))
{var inst_26059 = cljs.core.seq.call(null,coll);var inst_26060 = inst_26059;var state_26079__$1 = (function (){var statearr_26083 = state_26079;(statearr_26083[7] = inst_26060);
return statearr_26083;
})();var statearr_26084_26101 = state_26079__$1;(statearr_26084_26101[2] = null);
(statearr_26084_26101[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26080 === 4))
{var inst_26060 = (state_26079[7]);var inst_26063 = cljs.core.first.call(null,inst_26060);var state_26079__$1 = state_26079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26079__$1,7,ch,inst_26063);
} else
{if((state_val_26080 === 6))
{var inst_26075 = (state_26079[2]);var state_26079__$1 = state_26079;var statearr_26085_26102 = state_26079__$1;(statearr_26085_26102[2] = inst_26075);
(statearr_26085_26102[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26080 === 3))
{var inst_26077 = (state_26079[2]);var state_26079__$1 = state_26079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26079__$1,inst_26077);
} else
{if((state_val_26080 === 2))
{var inst_26060 = (state_26079[7]);var state_26079__$1 = state_26079;if(cljs.core.truth_(inst_26060))
{var statearr_26086_26103 = state_26079__$1;(statearr_26086_26103[1] = 4);
} else
{var statearr_26087_26104 = state_26079__$1;(statearr_26087_26104[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26080 === 9))
{var state_26079__$1 = state_26079;var statearr_26088_26105 = state_26079__$1;(statearr_26088_26105[2] = null);
(statearr_26088_26105[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26080 === 5))
{var state_26079__$1 = state_26079;if(cljs.core.truth_(close_QMARK_))
{var statearr_26089_26106 = state_26079__$1;(statearr_26089_26106[1] = 8);
} else
{var statearr_26090_26107 = state_26079__$1;(statearr_26090_26107[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26080 === 10))
{var inst_26073 = (state_26079[2]);var state_26079__$1 = state_26079;var statearr_26091_26108 = state_26079__$1;(statearr_26091_26108[2] = inst_26073);
(statearr_26091_26108[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26080 === 8))
{var inst_26070 = cljs.core.async.close_BANG_.call(null,ch);var state_26079__$1 = state_26079;var statearr_26092_26109 = state_26079__$1;(statearr_26092_26109[2] = inst_26070);
(statearr_26092_26109[1] = 10);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_26096 = [null,null,null,null,null,null,null,null,null];(statearr_26096[0] = state_machine__5675__auto__);
(statearr_26096[1] = 1);
return statearr_26096;
});
var state_machine__5675__auto____1 = (function (state_26079){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_26079);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e26097){if((e26097 instanceof Object))
{var ex__5678__auto__ = e26097;var statearr_26098_26110 = state_26079;(statearr_26098_26110[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26111 = state_26079;
state_26079 = G__26111;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_26079){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_26079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_26099 = f__5690__auto__.call(null);(statearr_26099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_26099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
cljs.core.async.Mux = (function (){var obj26113 = {};return obj26113;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3527__auto__ = _;if(and__3527__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4166__auto__ = (((_ == null))?null:_);return (function (){var or__3539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26115 = {};return obj26115;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26339 = (function (cs,ch,mult,meta26340){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26340 = meta26340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26339.cljs$lang$type = true;
cljs.core.async.t26339.cljs$lang$ctorStr = "cljs.core.async/t26339";
cljs.core.async.t26339.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t26339");
});})(cs))
;
cljs.core.async.t26339.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26339.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26339.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26339.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26339.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26339.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26341){var self__ = this;
var _26341__$1 = this;return self__.meta26340;
});})(cs))
;
cljs.core.async.t26339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26341,meta26340__$1){var self__ = this;
var _26341__$1 = this;return (new cljs.core.async.t26339(self__.cs,self__.ch,self__.mult,meta26340__$1));
});})(cs))
;
cljs.core.async.__GT_t26339 = ((function (cs){
return (function __GT_t26339(cs__$1,ch__$1,mult__$1,meta26340){return (new cljs.core.async.t26339(cs__$1,ch__$1,mult__$1,meta26340));
});})(cs))
;
}
return (new cljs.core.async.t26339(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5689__auto___26562 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___26562,cs,m,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___26562,cs,m,dchan,dctr,done){
return (function (state_26476){var state_val_26477 = (state_26476[1]);if((state_val_26477 === 7))
{var inst_26472 = (state_26476[2]);var state_26476__$1 = state_26476;var statearr_26478_26563 = state_26476__$1;(statearr_26478_26563[2] = inst_26472);
(statearr_26478_26563[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 20))
{var inst_26373 = (state_26476[7]);var inst_26383 = cljs.core.first.call(null,inst_26373);var inst_26384 = cljs.core.nth.call(null,inst_26383,0,null);var inst_26385 = cljs.core.nth.call(null,inst_26383,1,null);var state_26476__$1 = (function (){var statearr_26479 = state_26476;(statearr_26479[8] = inst_26384);
return statearr_26479;
})();if(cljs.core.truth_(inst_26385))
{var statearr_26480_26564 = state_26476__$1;(statearr_26480_26564[1] = 22);
} else
{var statearr_26481_26565 = state_26476__$1;(statearr_26481_26565[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 27))
{var inst_26413 = (state_26476[9]);var inst_26415 = (state_26476[10]);var inst_26420 = cljs.core._nth.call(null,inst_26413,inst_26415);var state_26476__$1 = (function (){var statearr_26482 = state_26476;(statearr_26482[11] = inst_26420);
return statearr_26482;
})();var statearr_26483_26566 = state_26476__$1;(statearr_26483_26566[2] = null);
(statearr_26483_26566[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 1))
{var state_26476__$1 = state_26476;var statearr_26484_26567 = state_26476__$1;(statearr_26484_26567[2] = null);
(statearr_26484_26567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 24))
{var inst_26373 = (state_26476[7]);var inst_26390 = (state_26476[2]);var inst_26391 = cljs.core.next.call(null,inst_26373);var inst_26353 = inst_26391;var inst_26354 = null;var inst_26355 = 0;var inst_26356 = 0;var state_26476__$1 = (function (){var statearr_26485 = state_26476;(statearr_26485[12] = inst_26390);
(statearr_26485[13] = inst_26353);
(statearr_26485[14] = inst_26354);
(statearr_26485[15] = inst_26356);
(statearr_26485[16] = inst_26355);
return statearr_26485;
})();var statearr_26486_26568 = state_26476__$1;(statearr_26486_26568[2] = null);
(statearr_26486_26568[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 39))
{var inst_26433 = (state_26476[17]);var inst_26451 = (state_26476[2]);var inst_26452 = cljs.core.next.call(null,inst_26433);var inst_26412 = inst_26452;var inst_26413 = null;var inst_26414 = 0;var inst_26415 = 0;var state_26476__$1 = (function (){var statearr_26490 = state_26476;(statearr_26490[18] = inst_26412);
(statearr_26490[9] = inst_26413);
(statearr_26490[19] = inst_26451);
(statearr_26490[20] = inst_26414);
(statearr_26490[10] = inst_26415);
return statearr_26490;
})();var statearr_26491_26569 = state_26476__$1;(statearr_26491_26569[2] = null);
(statearr_26491_26569[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 4))
{var inst_26344 = (state_26476[21]);var inst_26344__$1 = (state_26476[2]);var inst_26345 = (inst_26344__$1 == null);var state_26476__$1 = (function (){var statearr_26492 = state_26476;(statearr_26492[21] = inst_26344__$1);
return statearr_26492;
})();if(cljs.core.truth_(inst_26345))
{var statearr_26493_26570 = state_26476__$1;(statearr_26493_26570[1] = 5);
} else
{var statearr_26494_26571 = state_26476__$1;(statearr_26494_26571[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 15))
{var inst_26353 = (state_26476[13]);var inst_26354 = (state_26476[14]);var inst_26356 = (state_26476[15]);var inst_26355 = (state_26476[16]);var inst_26369 = (state_26476[2]);var inst_26370 = (inst_26356 + 1);var tmp26487 = inst_26353;var tmp26488 = inst_26354;var tmp26489 = inst_26355;var inst_26353__$1 = tmp26487;var inst_26354__$1 = tmp26488;var inst_26355__$1 = tmp26489;var inst_26356__$1 = inst_26370;var state_26476__$1 = (function (){var statearr_26495 = state_26476;(statearr_26495[13] = inst_26353__$1);
(statearr_26495[14] = inst_26354__$1);
(statearr_26495[15] = inst_26356__$1);
(statearr_26495[22] = inst_26369);
(statearr_26495[16] = inst_26355__$1);
return statearr_26495;
})();var statearr_26496_26572 = state_26476__$1;(statearr_26496_26572[2] = null);
(statearr_26496_26572[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 21))
{var inst_26394 = (state_26476[2]);var state_26476__$1 = state_26476;var statearr_26497_26573 = state_26476__$1;(statearr_26497_26573[2] = inst_26394);
(statearr_26497_26573[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 31))
{var inst_26420 = (state_26476[11]);var inst_26421 = (state_26476[2]);var inst_26422 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26423 = cljs.core.async.untap_STAR_.call(null,m,inst_26420);var state_26476__$1 = (function (){var statearr_26498 = state_26476;(statearr_26498[23] = inst_26421);
(statearr_26498[24] = inst_26422);
return statearr_26498;
})();var statearr_26499_26574 = state_26476__$1;(statearr_26499_26574[2] = inst_26423);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26476__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 32))
{var inst_26420 = (state_26476[11]);var inst_26344 = (state_26476[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26476,31,Object,null,30);var inst_26427 = cljs.core.async.put_BANG_.call(null,inst_26420,inst_26344,done);var state_26476__$1 = state_26476;var statearr_26500_26575 = state_26476__$1;(statearr_26500_26575[2] = inst_26427);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26476__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 40))
{var inst_26442 = (state_26476[25]);var inst_26443 = (state_26476[2]);var inst_26444 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26445 = cljs.core.async.untap_STAR_.call(null,m,inst_26442);var state_26476__$1 = (function (){var statearr_26501 = state_26476;(statearr_26501[26] = inst_26444);
(statearr_26501[27] = inst_26443);
return statearr_26501;
})();var statearr_26502_26576 = state_26476__$1;(statearr_26502_26576[2] = inst_26445);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26476__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 33))
{var inst_26433 = (state_26476[17]);var inst_26435 = cljs.core.chunked_seq_QMARK_.call(null,inst_26433);var state_26476__$1 = state_26476;if(inst_26435)
{var statearr_26503_26577 = state_26476__$1;(statearr_26503_26577[1] = 36);
} else
{var statearr_26504_26578 = state_26476__$1;(statearr_26504_26578[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 13))
{var inst_26363 = (state_26476[28]);var inst_26366 = cljs.core.async.close_BANG_.call(null,inst_26363);var state_26476__$1 = state_26476;var statearr_26505_26579 = state_26476__$1;(statearr_26505_26579[2] = inst_26366);
(statearr_26505_26579[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 22))
{var inst_26384 = (state_26476[8]);var inst_26387 = cljs.core.async.close_BANG_.call(null,inst_26384);var state_26476__$1 = state_26476;var statearr_26506_26580 = state_26476__$1;(statearr_26506_26580[2] = inst_26387);
(statearr_26506_26580[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 36))
{var inst_26433 = (state_26476[17]);var inst_26437 = cljs.core.chunk_first.call(null,inst_26433);var inst_26438 = cljs.core.chunk_rest.call(null,inst_26433);var inst_26439 = cljs.core.count.call(null,inst_26437);var inst_26412 = inst_26438;var inst_26413 = inst_26437;var inst_26414 = inst_26439;var inst_26415 = 0;var state_26476__$1 = (function (){var statearr_26507 = state_26476;(statearr_26507[18] = inst_26412);
(statearr_26507[9] = inst_26413);
(statearr_26507[20] = inst_26414);
(statearr_26507[10] = inst_26415);
return statearr_26507;
})();var statearr_26508_26581 = state_26476__$1;(statearr_26508_26581[2] = null);
(statearr_26508_26581[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 41))
{var inst_26442 = (state_26476[25]);var inst_26344 = (state_26476[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26476,40,Object,null,39);var inst_26449 = cljs.core.async.put_BANG_.call(null,inst_26442,inst_26344,done);var state_26476__$1 = state_26476;var statearr_26509_26582 = state_26476__$1;(statearr_26509_26582[2] = inst_26449);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26476__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 43))
{var state_26476__$1 = state_26476;var statearr_26510_26583 = state_26476__$1;(statearr_26510_26583[2] = null);
(statearr_26510_26583[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 29))
{var inst_26460 = (state_26476[2]);var state_26476__$1 = state_26476;var statearr_26511_26584 = state_26476__$1;(statearr_26511_26584[2] = inst_26460);
(statearr_26511_26584[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 44))
{var inst_26469 = (state_26476[2]);var state_26476__$1 = (function (){var statearr_26512 = state_26476;(statearr_26512[29] = inst_26469);
return statearr_26512;
})();var statearr_26513_26585 = state_26476__$1;(statearr_26513_26585[2] = null);
(statearr_26513_26585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 6))
{var inst_26404 = (state_26476[30]);var inst_26403 = cljs.core.deref.call(null,cs);var inst_26404__$1 = cljs.core.keys.call(null,inst_26403);var inst_26405 = cljs.core.count.call(null,inst_26404__$1);var inst_26406 = cljs.core.reset_BANG_.call(null,dctr,inst_26405);var inst_26411 = cljs.core.seq.call(null,inst_26404__$1);var inst_26412 = inst_26411;var inst_26413 = null;var inst_26414 = 0;var inst_26415 = 0;var state_26476__$1 = (function (){var statearr_26514 = state_26476;(statearr_26514[31] = inst_26406);
(statearr_26514[18] = inst_26412);
(statearr_26514[9] = inst_26413);
(statearr_26514[30] = inst_26404__$1);
(statearr_26514[20] = inst_26414);
(statearr_26514[10] = inst_26415);
return statearr_26514;
})();var statearr_26515_26586 = state_26476__$1;(statearr_26515_26586[2] = null);
(statearr_26515_26586[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 28))
{var inst_26412 = (state_26476[18]);var inst_26433 = (state_26476[17]);var inst_26433__$1 = cljs.core.seq.call(null,inst_26412);var state_26476__$1 = (function (){var statearr_26516 = state_26476;(statearr_26516[17] = inst_26433__$1);
return statearr_26516;
})();if(inst_26433__$1)
{var statearr_26517_26587 = state_26476__$1;(statearr_26517_26587[1] = 33);
} else
{var statearr_26518_26588 = state_26476__$1;(statearr_26518_26588[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 25))
{var inst_26414 = (state_26476[20]);var inst_26415 = (state_26476[10]);var inst_26417 = (inst_26415 < inst_26414);var inst_26418 = inst_26417;var state_26476__$1 = state_26476;if(cljs.core.truth_(inst_26418))
{var statearr_26519_26589 = state_26476__$1;(statearr_26519_26589[1] = 27);
} else
{var statearr_26520_26590 = state_26476__$1;(statearr_26520_26590[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 34))
{var state_26476__$1 = state_26476;var statearr_26521_26591 = state_26476__$1;(statearr_26521_26591[2] = null);
(statearr_26521_26591[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 17))
{var state_26476__$1 = state_26476;var statearr_26522_26592 = state_26476__$1;(statearr_26522_26592[2] = null);
(statearr_26522_26592[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 3))
{var inst_26474 = (state_26476[2]);var state_26476__$1 = state_26476;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26476__$1,inst_26474);
} else
{if((state_val_26477 === 12))
{var inst_26399 = (state_26476[2]);var state_26476__$1 = state_26476;var statearr_26523_26593 = state_26476__$1;(statearr_26523_26593[2] = inst_26399);
(statearr_26523_26593[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 2))
{var state_26476__$1 = state_26476;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26476__$1,4,ch);
} else
{if((state_val_26477 === 23))
{var state_26476__$1 = state_26476;var statearr_26524_26594 = state_26476__$1;(statearr_26524_26594[2] = null);
(statearr_26524_26594[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 35))
{var inst_26458 = (state_26476[2]);var state_26476__$1 = state_26476;var statearr_26525_26595 = state_26476__$1;(statearr_26525_26595[2] = inst_26458);
(statearr_26525_26595[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 19))
{var inst_26373 = (state_26476[7]);var inst_26377 = cljs.core.chunk_first.call(null,inst_26373);var inst_26378 = cljs.core.chunk_rest.call(null,inst_26373);var inst_26379 = cljs.core.count.call(null,inst_26377);var inst_26353 = inst_26378;var inst_26354 = inst_26377;var inst_26355 = inst_26379;var inst_26356 = 0;var state_26476__$1 = (function (){var statearr_26526 = state_26476;(statearr_26526[13] = inst_26353);
(statearr_26526[14] = inst_26354);
(statearr_26526[15] = inst_26356);
(statearr_26526[16] = inst_26355);
return statearr_26526;
})();var statearr_26527_26596 = state_26476__$1;(statearr_26527_26596[2] = null);
(statearr_26527_26596[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 11))
{var inst_26353 = (state_26476[13]);var inst_26373 = (state_26476[7]);var inst_26373__$1 = cljs.core.seq.call(null,inst_26353);var state_26476__$1 = (function (){var statearr_26528 = state_26476;(statearr_26528[7] = inst_26373__$1);
return statearr_26528;
})();if(inst_26373__$1)
{var statearr_26529_26597 = state_26476__$1;(statearr_26529_26597[1] = 16);
} else
{var statearr_26530_26598 = state_26476__$1;(statearr_26530_26598[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 9))
{var inst_26401 = (state_26476[2]);var state_26476__$1 = state_26476;var statearr_26531_26599 = state_26476__$1;(statearr_26531_26599[2] = inst_26401);
(statearr_26531_26599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 5))
{var inst_26351 = cljs.core.deref.call(null,cs);var inst_26352 = cljs.core.seq.call(null,inst_26351);var inst_26353 = inst_26352;var inst_26354 = null;var inst_26355 = 0;var inst_26356 = 0;var state_26476__$1 = (function (){var statearr_26532 = state_26476;(statearr_26532[13] = inst_26353);
(statearr_26532[14] = inst_26354);
(statearr_26532[15] = inst_26356);
(statearr_26532[16] = inst_26355);
return statearr_26532;
})();var statearr_26533_26600 = state_26476__$1;(statearr_26533_26600[2] = null);
(statearr_26533_26600[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 14))
{var state_26476__$1 = state_26476;var statearr_26534_26601 = state_26476__$1;(statearr_26534_26601[2] = null);
(statearr_26534_26601[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 45))
{var inst_26466 = (state_26476[2]);var state_26476__$1 = state_26476;var statearr_26535_26602 = state_26476__$1;(statearr_26535_26602[2] = inst_26466);
(statearr_26535_26602[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 26))
{var inst_26404 = (state_26476[30]);var inst_26462 = (state_26476[2]);var inst_26463 = cljs.core.seq.call(null,inst_26404);var state_26476__$1 = (function (){var statearr_26536 = state_26476;(statearr_26536[32] = inst_26462);
return statearr_26536;
})();if(inst_26463)
{var statearr_26537_26603 = state_26476__$1;(statearr_26537_26603[1] = 42);
} else
{var statearr_26538_26604 = state_26476__$1;(statearr_26538_26604[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 16))
{var inst_26373 = (state_26476[7]);var inst_26375 = cljs.core.chunked_seq_QMARK_.call(null,inst_26373);var state_26476__$1 = state_26476;if(inst_26375)
{var statearr_26542_26605 = state_26476__$1;(statearr_26542_26605[1] = 19);
} else
{var statearr_26543_26606 = state_26476__$1;(statearr_26543_26606[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 38))
{var inst_26455 = (state_26476[2]);var state_26476__$1 = state_26476;var statearr_26544_26607 = state_26476__$1;(statearr_26544_26607[2] = inst_26455);
(statearr_26544_26607[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 30))
{var inst_26412 = (state_26476[18]);var inst_26413 = (state_26476[9]);var inst_26414 = (state_26476[20]);var inst_26415 = (state_26476[10]);var inst_26429 = (state_26476[2]);var inst_26430 = (inst_26415 + 1);var tmp26539 = inst_26412;var tmp26540 = inst_26413;var tmp26541 = inst_26414;var inst_26412__$1 = tmp26539;var inst_26413__$1 = tmp26540;var inst_26414__$1 = tmp26541;var inst_26415__$1 = inst_26430;var state_26476__$1 = (function (){var statearr_26545 = state_26476;(statearr_26545[18] = inst_26412__$1);
(statearr_26545[9] = inst_26413__$1);
(statearr_26545[20] = inst_26414__$1);
(statearr_26545[33] = inst_26429);
(statearr_26545[10] = inst_26415__$1);
return statearr_26545;
})();var statearr_26546_26608 = state_26476__$1;(statearr_26546_26608[2] = null);
(statearr_26546_26608[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 10))
{var inst_26354 = (state_26476[14]);var inst_26356 = (state_26476[15]);var inst_26362 = cljs.core._nth.call(null,inst_26354,inst_26356);var inst_26363 = cljs.core.nth.call(null,inst_26362,0,null);var inst_26364 = cljs.core.nth.call(null,inst_26362,1,null);var state_26476__$1 = (function (){var statearr_26547 = state_26476;(statearr_26547[28] = inst_26363);
return statearr_26547;
})();if(cljs.core.truth_(inst_26364))
{var statearr_26548_26609 = state_26476__$1;(statearr_26548_26609[1] = 13);
} else
{var statearr_26549_26610 = state_26476__$1;(statearr_26549_26610[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 18))
{var inst_26397 = (state_26476[2]);var state_26476__$1 = state_26476;var statearr_26550_26611 = state_26476__$1;(statearr_26550_26611[2] = inst_26397);
(statearr_26550_26611[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 42))
{var state_26476__$1 = state_26476;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26476__$1,45,dchan);
} else
{if((state_val_26477 === 37))
{var inst_26433 = (state_26476[17]);var inst_26442 = cljs.core.first.call(null,inst_26433);var state_26476__$1 = (function (){var statearr_26551 = state_26476;(statearr_26551[25] = inst_26442);
return statearr_26551;
})();var statearr_26552_26612 = state_26476__$1;(statearr_26552_26612[2] = null);
(statearr_26552_26612[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26477 === 8))
{var inst_26356 = (state_26476[15]);var inst_26355 = (state_26476[16]);var inst_26358 = (inst_26356 < inst_26355);var inst_26359 = inst_26358;var state_26476__$1 = state_26476;if(cljs.core.truth_(inst_26359))
{var statearr_26553_26613 = state_26476__$1;(statearr_26553_26613[1] = 10);
} else
{var statearr_26554_26614 = state_26476__$1;(statearr_26554_26614[1] = 11);
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
});})(c__5689__auto___26562,cs,m,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___26562,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_26558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26558[0] = state_machine__5675__auto__);
(statearr_26558[1] = 1);
return statearr_26558;
});
var state_machine__5675__auto____1 = (function (state_26476){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_26476);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e26559){if((e26559 instanceof Object))
{var ex__5678__auto__ = e26559;var statearr_26560_26615 = state_26476;(statearr_26560_26615[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26476);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26616 = state_26476;
state_26476 = G__26616;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_26476){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_26476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___26562,cs,m,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_26561 = f__5690__auto__.call(null);(statearr_26561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___26562);
return statearr_26561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___26562,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj26618 = {};return obj26618;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t26728 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26728 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26729){
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
this.meta26729 = meta26729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26728.cljs$lang$type = true;
cljs.core.async.t26728.cljs$lang$ctorStr = "cljs.core.async/t26728";
cljs.core.async.t26728.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t26728");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26728.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26728.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26728.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26728.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26728.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26728.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26728.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26730){var self__ = this;
var _26730__$1 = this;return self__.meta26729;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26730,meta26729__$1){var self__ = this;
var _26730__$1 = this;return (new cljs.core.async.t26728(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26729__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26728 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26728(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26729){return (new cljs.core.async.t26728(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26729));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26728(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5689__auto___26837 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___26837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___26837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26795){var state_val_26796 = (state_26795[1]);if((state_val_26796 === 7))
{var inst_26744 = (state_26795[7]);var inst_26749 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26744);var state_26795__$1 = state_26795;var statearr_26797_26838 = state_26795__$1;(statearr_26797_26838[2] = inst_26749);
(statearr_26797_26838[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 20))
{var inst_26759 = (state_26795[8]);var state_26795__$1 = state_26795;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26795__$1,23,out,inst_26759);
} else
{if((state_val_26796 === 1))
{var inst_26734 = (state_26795[9]);var inst_26734__$1 = calc_state.call(null);var inst_26735 = cljs.core.seq_QMARK_.call(null,inst_26734__$1);var state_26795__$1 = (function (){var statearr_26798 = state_26795;(statearr_26798[9] = inst_26734__$1);
return statearr_26798;
})();if(inst_26735)
{var statearr_26799_26839 = state_26795__$1;(statearr_26799_26839[1] = 2);
} else
{var statearr_26800_26840 = state_26795__$1;(statearr_26800_26840[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 4))
{var inst_26734 = (state_26795[9]);var inst_26740 = (state_26795[2]);var inst_26741 = cljs.core.get.call(null,inst_26740,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26742 = cljs.core.get.call(null,inst_26740,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26743 = cljs.core.get.call(null,inst_26740,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26744 = inst_26734;var state_26795__$1 = (function (){var statearr_26801 = state_26795;(statearr_26801[10] = inst_26743);
(statearr_26801[11] = inst_26741);
(statearr_26801[7] = inst_26744);
(statearr_26801[12] = inst_26742);
return statearr_26801;
})();var statearr_26802_26841 = state_26795__$1;(statearr_26802_26841[2] = null);
(statearr_26802_26841[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 15))
{var state_26795__$1 = state_26795;var statearr_26803_26842 = state_26795__$1;(statearr_26803_26842[2] = null);
(statearr_26803_26842[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 21))
{var state_26795__$1 = state_26795;var statearr_26804_26843 = state_26795__$1;(statearr_26804_26843[2] = null);
(statearr_26804_26843[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 13))
{var inst_26791 = (state_26795[2]);var state_26795__$1 = state_26795;var statearr_26805_26844 = state_26795__$1;(statearr_26805_26844[2] = inst_26791);
(statearr_26805_26844[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 22))
{var inst_26752 = (state_26795[13]);var inst_26788 = (state_26795[2]);var inst_26744 = inst_26752;var state_26795__$1 = (function (){var statearr_26806 = state_26795;(statearr_26806[7] = inst_26744);
(statearr_26806[14] = inst_26788);
return statearr_26806;
})();var statearr_26807_26845 = state_26795__$1;(statearr_26807_26845[2] = null);
(statearr_26807_26845[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 6))
{var inst_26793 = (state_26795[2]);var state_26795__$1 = state_26795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26795__$1,inst_26793);
} else
{if((state_val_26796 === 17))
{var inst_26774 = (state_26795[15]);var state_26795__$1 = state_26795;var statearr_26808_26846 = state_26795__$1;(statearr_26808_26846[2] = inst_26774);
(statearr_26808_26846[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 3))
{var inst_26734 = (state_26795[9]);var state_26795__$1 = state_26795;var statearr_26809_26847 = state_26795__$1;(statearr_26809_26847[2] = inst_26734);
(statearr_26809_26847[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 12))
{var inst_26760 = (state_26795[16]);var inst_26755 = (state_26795[17]);var inst_26774 = (state_26795[15]);var inst_26774__$1 = inst_26755.call(null,inst_26760);var state_26795__$1 = (function (){var statearr_26810 = state_26795;(statearr_26810[15] = inst_26774__$1);
return statearr_26810;
})();if(cljs.core.truth_(inst_26774__$1))
{var statearr_26811_26848 = state_26795__$1;(statearr_26811_26848[1] = 17);
} else
{var statearr_26812_26849 = state_26795__$1;(statearr_26812_26849[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 2))
{var inst_26734 = (state_26795[9]);var inst_26737 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26734);var state_26795__$1 = state_26795;var statearr_26813_26850 = state_26795__$1;(statearr_26813_26850[2] = inst_26737);
(statearr_26813_26850[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 23))
{var inst_26785 = (state_26795[2]);var state_26795__$1 = state_26795;var statearr_26814_26851 = state_26795__$1;(statearr_26814_26851[2] = inst_26785);
(statearr_26814_26851[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 19))
{var inst_26782 = (state_26795[2]);var state_26795__$1 = state_26795;if(cljs.core.truth_(inst_26782))
{var statearr_26815_26852 = state_26795__$1;(statearr_26815_26852[1] = 20);
} else
{var statearr_26816_26853 = state_26795__$1;(statearr_26816_26853[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 11))
{var inst_26759 = (state_26795[8]);var inst_26765 = (inst_26759 == null);var state_26795__$1 = state_26795;if(cljs.core.truth_(inst_26765))
{var statearr_26817_26854 = state_26795__$1;(statearr_26817_26854[1] = 14);
} else
{var statearr_26818_26855 = state_26795__$1;(statearr_26818_26855[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 9))
{var inst_26752 = (state_26795[13]);var inst_26752__$1 = (state_26795[2]);var inst_26753 = cljs.core.get.call(null,inst_26752__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26754 = cljs.core.get.call(null,inst_26752__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26755 = cljs.core.get.call(null,inst_26752__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26795__$1 = (function (){var statearr_26819 = state_26795;(statearr_26819[18] = inst_26754);
(statearr_26819[13] = inst_26752__$1);
(statearr_26819[17] = inst_26755);
return statearr_26819;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26795__$1,10,inst_26753);
} else
{if((state_val_26796 === 5))
{var inst_26744 = (state_26795[7]);var inst_26747 = cljs.core.seq_QMARK_.call(null,inst_26744);var state_26795__$1 = state_26795;if(inst_26747)
{var statearr_26820_26856 = state_26795__$1;(statearr_26820_26856[1] = 7);
} else
{var statearr_26821_26857 = state_26795__$1;(statearr_26821_26857[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 14))
{var inst_26760 = (state_26795[16]);var inst_26767 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26760);var state_26795__$1 = state_26795;var statearr_26822_26858 = state_26795__$1;(statearr_26822_26858[2] = inst_26767);
(statearr_26822_26858[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 16))
{var inst_26770 = (state_26795[2]);var inst_26771 = calc_state.call(null);var inst_26744 = inst_26771;var state_26795__$1 = (function (){var statearr_26823 = state_26795;(statearr_26823[19] = inst_26770);
(statearr_26823[7] = inst_26744);
return statearr_26823;
})();var statearr_26824_26859 = state_26795__$1;(statearr_26824_26859[2] = null);
(statearr_26824_26859[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 10))
{var inst_26760 = (state_26795[16]);var inst_26759 = (state_26795[8]);var inst_26758 = (state_26795[2]);var inst_26759__$1 = cljs.core.nth.call(null,inst_26758,0,null);var inst_26760__$1 = cljs.core.nth.call(null,inst_26758,1,null);var inst_26761 = (inst_26759__$1 == null);var inst_26762 = cljs.core._EQ_.call(null,inst_26760__$1,change);var inst_26763 = (inst_26761) || (inst_26762);var state_26795__$1 = (function (){var statearr_26825 = state_26795;(statearr_26825[16] = inst_26760__$1);
(statearr_26825[8] = inst_26759__$1);
return statearr_26825;
})();if(cljs.core.truth_(inst_26763))
{var statearr_26826_26860 = state_26795__$1;(statearr_26826_26860[1] = 11);
} else
{var statearr_26827_26861 = state_26795__$1;(statearr_26827_26861[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 18))
{var inst_26760 = (state_26795[16]);var inst_26754 = (state_26795[18]);var inst_26755 = (state_26795[17]);var inst_26777 = cljs.core.empty_QMARK_.call(null,inst_26755);var inst_26778 = inst_26754.call(null,inst_26760);var inst_26779 = cljs.core.not.call(null,inst_26778);var inst_26780 = (inst_26777) && (inst_26779);var state_26795__$1 = state_26795;var statearr_26828_26862 = state_26795__$1;(statearr_26828_26862[2] = inst_26780);
(statearr_26828_26862[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26796 === 8))
{var inst_26744 = (state_26795[7]);var state_26795__$1 = state_26795;var statearr_26829_26863 = state_26795__$1;(statearr_26829_26863[2] = inst_26744);
(statearr_26829_26863[1] = 9);
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
});})(c__5689__auto___26837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5674__auto__,c__5689__auto___26837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_26833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26833[0] = state_machine__5675__auto__);
(statearr_26833[1] = 1);
return statearr_26833;
});
var state_machine__5675__auto____1 = (function (state_26795){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_26795);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e26834){if((e26834 instanceof Object))
{var ex__5678__auto__ = e26834;var statearr_26835_26864 = state_26795;(statearr_26835_26864[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26795);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26834;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26865 = state_26795;
state_26795 = G__26865;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_26795){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_26795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___26837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5691__auto__ = (function (){var statearr_26836 = f__5690__auto__.call(null);(statearr_26836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___26837);
return statearr_26836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___26837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj26867 = {};return obj26867;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
return (function (topic){var or__3539__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3539__auto__,mults){
return (function (p1__26868_SHARP_){if(cljs.core.truth_(p1__26868_SHARP_.call(null,topic)))
{return p1__26868_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26868_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3539__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26993 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26993 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26994){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26994 = meta26994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26993.cljs$lang$type = true;
cljs.core.async.t26993.cljs$lang$ctorStr = "cljs.core.async/t26993";
cljs.core.async.t26993.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t26993");
});})(mults,ensure_mult))
;
cljs.core.async.t26993.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26993.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26993.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26993.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26993.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26993.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26993.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26995){var self__ = this;
var _26995__$1 = this;return self__.meta26994;
});})(mults,ensure_mult))
;
cljs.core.async.t26993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26995,meta26994__$1){var self__ = this;
var _26995__$1 = this;return (new cljs.core.async.t26993(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26994__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26993 = ((function (mults,ensure_mult){
return (function __GT_t26993(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26994){return (new cljs.core.async.t26993(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26994));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26993(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5689__auto___27117 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27117,mults,ensure_mult,p){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27117,mults,ensure_mult,p){
return (function (state_27069){var state_val_27070 = (state_27069[1]);if((state_val_27070 === 7))
{var inst_27065 = (state_27069[2]);var state_27069__$1 = state_27069;var statearr_27071_27118 = state_27069__$1;(statearr_27071_27118[2] = inst_27065);
(statearr_27071_27118[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 20))
{var state_27069__$1 = state_27069;var statearr_27072_27119 = state_27069__$1;(statearr_27072_27119[2] = null);
(statearr_27072_27119[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 1))
{var state_27069__$1 = state_27069;var statearr_27073_27120 = state_27069__$1;(statearr_27073_27120[2] = null);
(statearr_27073_27120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 24))
{var inst_26998 = (state_27069[7]);var inst_27048 = (state_27069[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27069,23,Object,null,22);var inst_27055 = cljs.core.async.muxch_STAR_.call(null,inst_27048);var state_27069__$1 = state_27069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27069__$1,25,inst_27055,inst_26998);
} else
{if((state_val_27070 === 4))
{var inst_26998 = (state_27069[7]);var inst_26998__$1 = (state_27069[2]);var inst_26999 = (inst_26998__$1 == null);var state_27069__$1 = (function (){var statearr_27074 = state_27069;(statearr_27074[7] = inst_26998__$1);
return statearr_27074;
})();if(cljs.core.truth_(inst_26999))
{var statearr_27075_27121 = state_27069__$1;(statearr_27075_27121[1] = 5);
} else
{var statearr_27076_27122 = state_27069__$1;(statearr_27076_27122[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 15))
{var inst_27040 = (state_27069[2]);var state_27069__$1 = state_27069;var statearr_27077_27123 = state_27069__$1;(statearr_27077_27123[2] = inst_27040);
(statearr_27077_27123[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 21))
{var inst_27062 = (state_27069[2]);var state_27069__$1 = (function (){var statearr_27078 = state_27069;(statearr_27078[9] = inst_27062);
return statearr_27078;
})();var statearr_27079_27124 = state_27069__$1;(statearr_27079_27124[2] = null);
(statearr_27079_27124[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 13))
{var inst_27022 = (state_27069[10]);var inst_27024 = cljs.core.chunked_seq_QMARK_.call(null,inst_27022);var state_27069__$1 = state_27069;if(inst_27024)
{var statearr_27080_27125 = state_27069__$1;(statearr_27080_27125[1] = 16);
} else
{var statearr_27081_27126 = state_27069__$1;(statearr_27081_27126[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 22))
{var inst_27059 = (state_27069[2]);var state_27069__$1 = state_27069;var statearr_27082_27127 = state_27069__$1;(statearr_27082_27127[2] = inst_27059);
(statearr_27082_27127[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 6))
{var inst_26998 = (state_27069[7]);var inst_27048 = (state_27069[8]);var inst_27046 = (state_27069[11]);var inst_27046__$1 = topic_fn.call(null,inst_26998);var inst_27047 = cljs.core.deref.call(null,mults);var inst_27048__$1 = cljs.core.get.call(null,inst_27047,inst_27046__$1);var state_27069__$1 = (function (){var statearr_27083 = state_27069;(statearr_27083[8] = inst_27048__$1);
(statearr_27083[11] = inst_27046__$1);
return statearr_27083;
})();if(cljs.core.truth_(inst_27048__$1))
{var statearr_27084_27128 = state_27069__$1;(statearr_27084_27128[1] = 19);
} else
{var statearr_27085_27129 = state_27069__$1;(statearr_27085_27129[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 25))
{var inst_27057 = (state_27069[2]);var state_27069__$1 = state_27069;var statearr_27086_27130 = state_27069__$1;(statearr_27086_27130[2] = inst_27057);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27069__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 17))
{var inst_27022 = (state_27069[10]);var inst_27031 = cljs.core.first.call(null,inst_27022);var inst_27032 = cljs.core.async.muxch_STAR_.call(null,inst_27031);var inst_27033 = cljs.core.async.close_BANG_.call(null,inst_27032);var inst_27034 = cljs.core.next.call(null,inst_27022);var inst_27008 = inst_27034;var inst_27009 = null;var inst_27010 = 0;var inst_27011 = 0;var state_27069__$1 = (function (){var statearr_27087 = state_27069;(statearr_27087[12] = inst_27010);
(statearr_27087[13] = inst_27011);
(statearr_27087[14] = inst_27008);
(statearr_27087[15] = inst_27009);
(statearr_27087[16] = inst_27033);
return statearr_27087;
})();var statearr_27088_27131 = state_27069__$1;(statearr_27088_27131[2] = null);
(statearr_27088_27131[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 3))
{var inst_27067 = (state_27069[2]);var state_27069__$1 = state_27069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27069__$1,inst_27067);
} else
{if((state_val_27070 === 12))
{var inst_27042 = (state_27069[2]);var state_27069__$1 = state_27069;var statearr_27089_27132 = state_27069__$1;(statearr_27089_27132[2] = inst_27042);
(statearr_27089_27132[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 2))
{var state_27069__$1 = state_27069;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27069__$1,4,ch);
} else
{if((state_val_27070 === 23))
{var inst_27046 = (state_27069[11]);var inst_27050 = (state_27069[2]);var inst_27051 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27046);var state_27069__$1 = (function (){var statearr_27090 = state_27069;(statearr_27090[17] = inst_27050);
return statearr_27090;
})();var statearr_27091_27133 = state_27069__$1;(statearr_27091_27133[2] = inst_27051);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27069__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 19))
{var state_27069__$1 = state_27069;var statearr_27092_27134 = state_27069__$1;(statearr_27092_27134[2] = null);
(statearr_27092_27134[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 11))
{var inst_27008 = (state_27069[14]);var inst_27022 = (state_27069[10]);var inst_27022__$1 = cljs.core.seq.call(null,inst_27008);var state_27069__$1 = (function (){var statearr_27093 = state_27069;(statearr_27093[10] = inst_27022__$1);
return statearr_27093;
})();if(inst_27022__$1)
{var statearr_27094_27135 = state_27069__$1;(statearr_27094_27135[1] = 13);
} else
{var statearr_27095_27136 = state_27069__$1;(statearr_27095_27136[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 9))
{var inst_27044 = (state_27069[2]);var state_27069__$1 = state_27069;var statearr_27096_27137 = state_27069__$1;(statearr_27096_27137[2] = inst_27044);
(statearr_27096_27137[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 5))
{var inst_27005 = cljs.core.deref.call(null,mults);var inst_27006 = cljs.core.vals.call(null,inst_27005);var inst_27007 = cljs.core.seq.call(null,inst_27006);var inst_27008 = inst_27007;var inst_27009 = null;var inst_27010 = 0;var inst_27011 = 0;var state_27069__$1 = (function (){var statearr_27097 = state_27069;(statearr_27097[12] = inst_27010);
(statearr_27097[13] = inst_27011);
(statearr_27097[14] = inst_27008);
(statearr_27097[15] = inst_27009);
return statearr_27097;
})();var statearr_27098_27138 = state_27069__$1;(statearr_27098_27138[2] = null);
(statearr_27098_27138[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 14))
{var state_27069__$1 = state_27069;var statearr_27102_27139 = state_27069__$1;(statearr_27102_27139[2] = null);
(statearr_27102_27139[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 16))
{var inst_27022 = (state_27069[10]);var inst_27026 = cljs.core.chunk_first.call(null,inst_27022);var inst_27027 = cljs.core.chunk_rest.call(null,inst_27022);var inst_27028 = cljs.core.count.call(null,inst_27026);var inst_27008 = inst_27027;var inst_27009 = inst_27026;var inst_27010 = inst_27028;var inst_27011 = 0;var state_27069__$1 = (function (){var statearr_27103 = state_27069;(statearr_27103[12] = inst_27010);
(statearr_27103[13] = inst_27011);
(statearr_27103[14] = inst_27008);
(statearr_27103[15] = inst_27009);
return statearr_27103;
})();var statearr_27104_27140 = state_27069__$1;(statearr_27104_27140[2] = null);
(statearr_27104_27140[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 10))
{var inst_27010 = (state_27069[12]);var inst_27011 = (state_27069[13]);var inst_27008 = (state_27069[14]);var inst_27009 = (state_27069[15]);var inst_27016 = cljs.core._nth.call(null,inst_27009,inst_27011);var inst_27017 = cljs.core.async.muxch_STAR_.call(null,inst_27016);var inst_27018 = cljs.core.async.close_BANG_.call(null,inst_27017);var inst_27019 = (inst_27011 + 1);var tmp27099 = inst_27010;var tmp27100 = inst_27008;var tmp27101 = inst_27009;var inst_27008__$1 = tmp27100;var inst_27009__$1 = tmp27101;var inst_27010__$1 = tmp27099;var inst_27011__$1 = inst_27019;var state_27069__$1 = (function (){var statearr_27105 = state_27069;(statearr_27105[18] = inst_27018);
(statearr_27105[12] = inst_27010__$1);
(statearr_27105[13] = inst_27011__$1);
(statearr_27105[14] = inst_27008__$1);
(statearr_27105[15] = inst_27009__$1);
return statearr_27105;
})();var statearr_27106_27141 = state_27069__$1;(statearr_27106_27141[2] = null);
(statearr_27106_27141[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 18))
{var inst_27037 = (state_27069[2]);var state_27069__$1 = state_27069;var statearr_27107_27142 = state_27069__$1;(statearr_27107_27142[2] = inst_27037);
(statearr_27107_27142[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27070 === 8))
{var inst_27010 = (state_27069[12]);var inst_27011 = (state_27069[13]);var inst_27013 = (inst_27011 < inst_27010);var inst_27014 = inst_27013;var state_27069__$1 = state_27069;if(cljs.core.truth_(inst_27014))
{var statearr_27108_27143 = state_27069__$1;(statearr_27108_27143[1] = 10);
} else
{var statearr_27109_27144 = state_27069__$1;(statearr_27109_27144[1] = 11);
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
});})(c__5689__auto___27117,mults,ensure_mult,p))
;return ((function (switch__5674__auto__,c__5689__auto___27117,mults,ensure_mult,p){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27113[0] = state_machine__5675__auto__);
(statearr_27113[1] = 1);
return statearr_27113;
});
var state_machine__5675__auto____1 = (function (state_27069){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27069);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27114){if((e27114 instanceof Object))
{var ex__5678__auto__ = e27114;var statearr_27115_27145 = state_27069;(statearr_27115_27145[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27069);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27114;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27146 = state_27069;
state_27069 = G__27146;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27069){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27117,mults,ensure_mult,p))
})();var state__5691__auto__ = (function (){var statearr_27116 = f__5690__auto__.call(null);(statearr_27116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27117);
return statearr_27116;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27117,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5689__auto___27283 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27283,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27283,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27253){var state_val_27254 = (state_27253[1]);if((state_val_27254 === 7))
{var state_27253__$1 = state_27253;var statearr_27255_27284 = state_27253__$1;(statearr_27255_27284[2] = null);
(statearr_27255_27284[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 1))
{var state_27253__$1 = state_27253;var statearr_27256_27285 = state_27253__$1;(statearr_27256_27285[2] = null);
(statearr_27256_27285[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 4))
{var inst_27217 = (state_27253[7]);var inst_27219 = (inst_27217 < cnt);var state_27253__$1 = state_27253;if(cljs.core.truth_(inst_27219))
{var statearr_27257_27286 = state_27253__$1;(statearr_27257_27286[1] = 6);
} else
{var statearr_27258_27287 = state_27253__$1;(statearr_27258_27287[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 15))
{var inst_27249 = (state_27253[2]);var state_27253__$1 = state_27253;var statearr_27259_27288 = state_27253__$1;(statearr_27259_27288[2] = inst_27249);
(statearr_27259_27288[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 13))
{var inst_27242 = cljs.core.async.close_BANG_.call(null,out);var state_27253__$1 = state_27253;var statearr_27260_27289 = state_27253__$1;(statearr_27260_27289[2] = inst_27242);
(statearr_27260_27289[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 6))
{var state_27253__$1 = state_27253;var statearr_27261_27290 = state_27253__$1;(statearr_27261_27290[2] = null);
(statearr_27261_27290[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 3))
{var inst_27251 = (state_27253[2]);var state_27253__$1 = state_27253;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27253__$1,inst_27251);
} else
{if((state_val_27254 === 12))
{var inst_27239 = (state_27253[8]);var inst_27239__$1 = (state_27253[2]);var inst_27240 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27239__$1);var state_27253__$1 = (function (){var statearr_27262 = state_27253;(statearr_27262[8] = inst_27239__$1);
return statearr_27262;
})();if(cljs.core.truth_(inst_27240))
{var statearr_27263_27291 = state_27253__$1;(statearr_27263_27291[1] = 13);
} else
{var statearr_27264_27292 = state_27253__$1;(statearr_27264_27292[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 2))
{var inst_27216 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27217 = 0;var state_27253__$1 = (function (){var statearr_27265 = state_27253;(statearr_27265[7] = inst_27217);
(statearr_27265[9] = inst_27216);
return statearr_27265;
})();var statearr_27266_27293 = state_27253__$1;(statearr_27266_27293[2] = null);
(statearr_27266_27293[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 11))
{var inst_27217 = (state_27253[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27253,10,Object,null,9);var inst_27226 = chs__$1.call(null,inst_27217);var inst_27227 = done.call(null,inst_27217);var inst_27228 = cljs.core.async.take_BANG_.call(null,inst_27226,inst_27227);var state_27253__$1 = state_27253;var statearr_27267_27294 = state_27253__$1;(statearr_27267_27294[2] = inst_27228);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27253__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 9))
{var inst_27217 = (state_27253[7]);var inst_27230 = (state_27253[2]);var inst_27231 = (inst_27217 + 1);var inst_27217__$1 = inst_27231;var state_27253__$1 = (function (){var statearr_27268 = state_27253;(statearr_27268[7] = inst_27217__$1);
(statearr_27268[10] = inst_27230);
return statearr_27268;
})();var statearr_27269_27295 = state_27253__$1;(statearr_27269_27295[2] = null);
(statearr_27269_27295[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 5))
{var inst_27237 = (state_27253[2]);var state_27253__$1 = (function (){var statearr_27270 = state_27253;(statearr_27270[11] = inst_27237);
return statearr_27270;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27253__$1,12,dchan);
} else
{if((state_val_27254 === 14))
{var inst_27239 = (state_27253[8]);var inst_27244 = cljs.core.apply.call(null,f,inst_27239);var state_27253__$1 = state_27253;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27253__$1,16,out,inst_27244);
} else
{if((state_val_27254 === 16))
{var inst_27246 = (state_27253[2]);var state_27253__$1 = (function (){var statearr_27271 = state_27253;(statearr_27271[12] = inst_27246);
return statearr_27271;
})();var statearr_27272_27296 = state_27253__$1;(statearr_27272_27296[2] = null);
(statearr_27272_27296[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 10))
{var inst_27221 = (state_27253[2]);var inst_27222 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27253__$1 = (function (){var statearr_27273 = state_27253;(statearr_27273[13] = inst_27221);
return statearr_27273;
})();var statearr_27274_27297 = state_27253__$1;(statearr_27274_27297[2] = inst_27222);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27253__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27254 === 8))
{var inst_27235 = (state_27253[2]);var state_27253__$1 = state_27253;var statearr_27275_27298 = state_27253__$1;(statearr_27275_27298[2] = inst_27235);
(statearr_27275_27298[1] = 5);
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
});})(c__5689__auto___27283,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___27283,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27279[0] = state_machine__5675__auto__);
(statearr_27279[1] = 1);
return statearr_27279;
});
var state_machine__5675__auto____1 = (function (state_27253){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27253);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27280){if((e27280 instanceof Object))
{var ex__5678__auto__ = e27280;var statearr_27281_27299 = state_27253;(statearr_27281_27299[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27253);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27300 = state_27253;
state_27253 = G__27300;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27253){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27283,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_27282 = f__5690__auto__.call(null);(statearr_27282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27283);
return statearr_27282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27283,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___27408 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27408,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27408,out){
return (function (state_27384){var state_val_27385 = (state_27384[1]);if((state_val_27385 === 7))
{var inst_27363 = (state_27384[7]);var inst_27364 = (state_27384[8]);var inst_27363__$1 = (state_27384[2]);var inst_27364__$1 = cljs.core.nth.call(null,inst_27363__$1,0,null);var inst_27365 = cljs.core.nth.call(null,inst_27363__$1,1,null);var inst_27366 = (inst_27364__$1 == null);var state_27384__$1 = (function (){var statearr_27386 = state_27384;(statearr_27386[9] = inst_27365);
(statearr_27386[7] = inst_27363__$1);
(statearr_27386[8] = inst_27364__$1);
return statearr_27386;
})();if(cljs.core.truth_(inst_27366))
{var statearr_27387_27409 = state_27384__$1;(statearr_27387_27409[1] = 8);
} else
{var statearr_27388_27410 = state_27384__$1;(statearr_27388_27410[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27385 === 1))
{var inst_27355 = cljs.core.vec.call(null,chs);var inst_27356 = inst_27355;var state_27384__$1 = (function (){var statearr_27389 = state_27384;(statearr_27389[10] = inst_27356);
return statearr_27389;
})();var statearr_27390_27411 = state_27384__$1;(statearr_27390_27411[2] = null);
(statearr_27390_27411[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27385 === 4))
{var inst_27356 = (state_27384[10]);var state_27384__$1 = state_27384;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27384__$1,7,inst_27356);
} else
{if((state_val_27385 === 6))
{var inst_27380 = (state_27384[2]);var state_27384__$1 = state_27384;var statearr_27391_27412 = state_27384__$1;(statearr_27391_27412[2] = inst_27380);
(statearr_27391_27412[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27385 === 3))
{var inst_27382 = (state_27384[2]);var state_27384__$1 = state_27384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27384__$1,inst_27382);
} else
{if((state_val_27385 === 2))
{var inst_27356 = (state_27384[10]);var inst_27358 = cljs.core.count.call(null,inst_27356);var inst_27359 = (inst_27358 > 0);var state_27384__$1 = state_27384;if(cljs.core.truth_(inst_27359))
{var statearr_27393_27413 = state_27384__$1;(statearr_27393_27413[1] = 4);
} else
{var statearr_27394_27414 = state_27384__$1;(statearr_27394_27414[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27385 === 11))
{var inst_27356 = (state_27384[10]);var inst_27373 = (state_27384[2]);var tmp27392 = inst_27356;var inst_27356__$1 = tmp27392;var state_27384__$1 = (function (){var statearr_27395 = state_27384;(statearr_27395[10] = inst_27356__$1);
(statearr_27395[11] = inst_27373);
return statearr_27395;
})();var statearr_27396_27415 = state_27384__$1;(statearr_27396_27415[2] = null);
(statearr_27396_27415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27385 === 9))
{var inst_27364 = (state_27384[8]);var state_27384__$1 = state_27384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27384__$1,11,out,inst_27364);
} else
{if((state_val_27385 === 5))
{var inst_27378 = cljs.core.async.close_BANG_.call(null,out);var state_27384__$1 = state_27384;var statearr_27397_27416 = state_27384__$1;(statearr_27397_27416[2] = inst_27378);
(statearr_27397_27416[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27385 === 10))
{var inst_27376 = (state_27384[2]);var state_27384__$1 = state_27384;var statearr_27398_27417 = state_27384__$1;(statearr_27398_27417[2] = inst_27376);
(statearr_27398_27417[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27385 === 8))
{var inst_27356 = (state_27384[10]);var inst_27365 = (state_27384[9]);var inst_27363 = (state_27384[7]);var inst_27364 = (state_27384[8]);var inst_27368 = (function (){var c = inst_27365;var v = inst_27364;var vec__27361 = inst_27363;var cs = inst_27356;return ((function (c,v,vec__27361,cs,inst_27356,inst_27365,inst_27363,inst_27364,state_val_27385,c__5689__auto___27408,out){
return (function (p1__27301_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27301_SHARP_);
});
;})(c,v,vec__27361,cs,inst_27356,inst_27365,inst_27363,inst_27364,state_val_27385,c__5689__auto___27408,out))
})();var inst_27369 = cljs.core.filterv.call(null,inst_27368,inst_27356);var inst_27356__$1 = inst_27369;var state_27384__$1 = (function (){var statearr_27399 = state_27384;(statearr_27399[10] = inst_27356__$1);
return statearr_27399;
})();var statearr_27400_27418 = state_27384__$1;(statearr_27400_27418[2] = null);
(statearr_27400_27418[1] = 2);
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
});})(c__5689__auto___27408,out))
;return ((function (switch__5674__auto__,c__5689__auto___27408,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27404 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27404[0] = state_machine__5675__auto__);
(statearr_27404[1] = 1);
return statearr_27404;
});
var state_machine__5675__auto____1 = (function (state_27384){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27384);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27405){if((e27405 instanceof Object))
{var ex__5678__auto__ = e27405;var statearr_27406_27419 = state_27384;(statearr_27406_27419[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27420 = state_27384;
state_27384 = G__27420;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27384){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27408,out))
})();var state__5691__auto__ = (function (){var statearr_27407 = f__5690__auto__.call(null);(statearr_27407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27408);
return statearr_27407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27408,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___27513 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27513,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27513,out){
return (function (state_27490){var state_val_27491 = (state_27490[1]);if((state_val_27491 === 7))
{var inst_27472 = (state_27490[7]);var inst_27472__$1 = (state_27490[2]);var inst_27473 = (inst_27472__$1 == null);var inst_27474 = cljs.core.not.call(null,inst_27473);var state_27490__$1 = (function (){var statearr_27492 = state_27490;(statearr_27492[7] = inst_27472__$1);
return statearr_27492;
})();if(inst_27474)
{var statearr_27493_27514 = state_27490__$1;(statearr_27493_27514[1] = 8);
} else
{var statearr_27494_27515 = state_27490__$1;(statearr_27494_27515[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27491 === 1))
{var inst_27467 = 0;var state_27490__$1 = (function (){var statearr_27495 = state_27490;(statearr_27495[8] = inst_27467);
return statearr_27495;
})();var statearr_27496_27516 = state_27490__$1;(statearr_27496_27516[2] = null);
(statearr_27496_27516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27491 === 4))
{var state_27490__$1 = state_27490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27490__$1,7,ch);
} else
{if((state_val_27491 === 6))
{var inst_27485 = (state_27490[2]);var state_27490__$1 = state_27490;var statearr_27497_27517 = state_27490__$1;(statearr_27497_27517[2] = inst_27485);
(statearr_27497_27517[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27491 === 3))
{var inst_27487 = (state_27490[2]);var inst_27488 = cljs.core.async.close_BANG_.call(null,out);var state_27490__$1 = (function (){var statearr_27498 = state_27490;(statearr_27498[9] = inst_27487);
return statearr_27498;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27490__$1,inst_27488);
} else
{if((state_val_27491 === 2))
{var inst_27467 = (state_27490[8]);var inst_27469 = (inst_27467 < n);var state_27490__$1 = state_27490;if(cljs.core.truth_(inst_27469))
{var statearr_27499_27518 = state_27490__$1;(statearr_27499_27518[1] = 4);
} else
{var statearr_27500_27519 = state_27490__$1;(statearr_27500_27519[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27491 === 11))
{var inst_27467 = (state_27490[8]);var inst_27477 = (state_27490[2]);var inst_27478 = (inst_27467 + 1);var inst_27467__$1 = inst_27478;var state_27490__$1 = (function (){var statearr_27501 = state_27490;(statearr_27501[10] = inst_27477);
(statearr_27501[8] = inst_27467__$1);
return statearr_27501;
})();var statearr_27502_27520 = state_27490__$1;(statearr_27502_27520[2] = null);
(statearr_27502_27520[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27491 === 9))
{var state_27490__$1 = state_27490;var statearr_27503_27521 = state_27490__$1;(statearr_27503_27521[2] = null);
(statearr_27503_27521[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27491 === 5))
{var state_27490__$1 = state_27490;var statearr_27504_27522 = state_27490__$1;(statearr_27504_27522[2] = null);
(statearr_27504_27522[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27491 === 10))
{var inst_27482 = (state_27490[2]);var state_27490__$1 = state_27490;var statearr_27505_27523 = state_27490__$1;(statearr_27505_27523[2] = inst_27482);
(statearr_27505_27523[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27491 === 8))
{var inst_27472 = (state_27490[7]);var state_27490__$1 = state_27490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27490__$1,11,out,inst_27472);
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
});})(c__5689__auto___27513,out))
;return ((function (switch__5674__auto__,c__5689__auto___27513,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27509 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27509[0] = state_machine__5675__auto__);
(statearr_27509[1] = 1);
return statearr_27509;
});
var state_machine__5675__auto____1 = (function (state_27490){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27490);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27510){if((e27510 instanceof Object))
{var ex__5678__auto__ = e27510;var statearr_27511_27524 = state_27490;(statearr_27511_27524[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27490);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27525 = state_27490;
state_27490 = G__27525;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27490){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27513,out))
})();var state__5691__auto__ = (function (){var statearr_27512 = f__5690__auto__.call(null);(statearr_27512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27513);
return statearr_27512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27513,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___27622 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27622,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27622,out){
return (function (state_27597){var state_val_27598 = (state_27597[1]);if((state_val_27598 === 7))
{var inst_27592 = (state_27597[2]);var state_27597__$1 = state_27597;var statearr_27599_27623 = state_27597__$1;(statearr_27599_27623[2] = inst_27592);
(statearr_27599_27623[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27598 === 1))
{var inst_27574 = null;var state_27597__$1 = (function (){var statearr_27600 = state_27597;(statearr_27600[7] = inst_27574);
return statearr_27600;
})();var statearr_27601_27624 = state_27597__$1;(statearr_27601_27624[2] = null);
(statearr_27601_27624[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27598 === 4))
{var inst_27577 = (state_27597[8]);var inst_27577__$1 = (state_27597[2]);var inst_27578 = (inst_27577__$1 == null);var inst_27579 = cljs.core.not.call(null,inst_27578);var state_27597__$1 = (function (){var statearr_27602 = state_27597;(statearr_27602[8] = inst_27577__$1);
return statearr_27602;
})();if(inst_27579)
{var statearr_27603_27625 = state_27597__$1;(statearr_27603_27625[1] = 5);
} else
{var statearr_27604_27626 = state_27597__$1;(statearr_27604_27626[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27598 === 6))
{var state_27597__$1 = state_27597;var statearr_27605_27627 = state_27597__$1;(statearr_27605_27627[2] = null);
(statearr_27605_27627[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27598 === 3))
{var inst_27594 = (state_27597[2]);var inst_27595 = cljs.core.async.close_BANG_.call(null,out);var state_27597__$1 = (function (){var statearr_27606 = state_27597;(statearr_27606[9] = inst_27594);
return statearr_27606;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27597__$1,inst_27595);
} else
{if((state_val_27598 === 2))
{var state_27597__$1 = state_27597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27597__$1,4,ch);
} else
{if((state_val_27598 === 11))
{var inst_27577 = (state_27597[8]);var inst_27586 = (state_27597[2]);var inst_27574 = inst_27577;var state_27597__$1 = (function (){var statearr_27607 = state_27597;(statearr_27607[10] = inst_27586);
(statearr_27607[7] = inst_27574);
return statearr_27607;
})();var statearr_27608_27628 = state_27597__$1;(statearr_27608_27628[2] = null);
(statearr_27608_27628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27598 === 9))
{var inst_27577 = (state_27597[8]);var state_27597__$1 = state_27597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27597__$1,11,out,inst_27577);
} else
{if((state_val_27598 === 5))
{var inst_27577 = (state_27597[8]);var inst_27574 = (state_27597[7]);var inst_27581 = cljs.core._EQ_.call(null,inst_27577,inst_27574);var state_27597__$1 = state_27597;if(inst_27581)
{var statearr_27610_27629 = state_27597__$1;(statearr_27610_27629[1] = 8);
} else
{var statearr_27611_27630 = state_27597__$1;(statearr_27611_27630[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27598 === 10))
{var inst_27589 = (state_27597[2]);var state_27597__$1 = state_27597;var statearr_27612_27631 = state_27597__$1;(statearr_27612_27631[2] = inst_27589);
(statearr_27612_27631[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27598 === 8))
{var inst_27574 = (state_27597[7]);var tmp27609 = inst_27574;var inst_27574__$1 = tmp27609;var state_27597__$1 = (function (){var statearr_27613 = state_27597;(statearr_27613[7] = inst_27574__$1);
return statearr_27613;
})();var statearr_27614_27632 = state_27597__$1;(statearr_27614_27632[2] = null);
(statearr_27614_27632[1] = 2);
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
});})(c__5689__auto___27622,out))
;return ((function (switch__5674__auto__,c__5689__auto___27622,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27618 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27618[0] = state_machine__5675__auto__);
(statearr_27618[1] = 1);
return statearr_27618;
});
var state_machine__5675__auto____1 = (function (state_27597){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27597);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27619){if((e27619 instanceof Object))
{var ex__5678__auto__ = e27619;var statearr_27620_27633 = state_27597;(statearr_27620_27633[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27597);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27634 = state_27597;
state_27597 = G__27634;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27597){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27622,out))
})();var state__5691__auto__ = (function (){var statearr_27621 = f__5690__auto__.call(null);(statearr_27621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27622);
return statearr_27621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27622,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___27769 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27769,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27769,out){
return (function (state_27739){var state_val_27740 = (state_27739[1]);if((state_val_27740 === 7))
{var inst_27735 = (state_27739[2]);var state_27739__$1 = state_27739;var statearr_27741_27770 = state_27739__$1;(statearr_27741_27770[2] = inst_27735);
(statearr_27741_27770[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27740 === 1))
{var inst_27702 = (new Array(n));var inst_27703 = inst_27702;var inst_27704 = 0;var state_27739__$1 = (function (){var statearr_27742 = state_27739;(statearr_27742[7] = inst_27703);
(statearr_27742[8] = inst_27704);
return statearr_27742;
})();var statearr_27743_27771 = state_27739__$1;(statearr_27743_27771[2] = null);
(statearr_27743_27771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27740 === 4))
{var inst_27707 = (state_27739[9]);var inst_27707__$1 = (state_27739[2]);var inst_27708 = (inst_27707__$1 == null);var inst_27709 = cljs.core.not.call(null,inst_27708);var state_27739__$1 = (function (){var statearr_27744 = state_27739;(statearr_27744[9] = inst_27707__$1);
return statearr_27744;
})();if(inst_27709)
{var statearr_27745_27772 = state_27739__$1;(statearr_27745_27772[1] = 5);
} else
{var statearr_27746_27773 = state_27739__$1;(statearr_27746_27773[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27740 === 15))
{var inst_27729 = (state_27739[2]);var state_27739__$1 = state_27739;var statearr_27747_27774 = state_27739__$1;(statearr_27747_27774[2] = inst_27729);
(statearr_27747_27774[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27740 === 13))
{var state_27739__$1 = state_27739;var statearr_27748_27775 = state_27739__$1;(statearr_27748_27775[2] = null);
(statearr_27748_27775[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27740 === 6))
{var inst_27704 = (state_27739[8]);var inst_27725 = (inst_27704 > 0);var state_27739__$1 = state_27739;if(cljs.core.truth_(inst_27725))
{var statearr_27749_27776 = state_27739__$1;(statearr_27749_27776[1] = 12);
} else
{var statearr_27750_27777 = state_27739__$1;(statearr_27750_27777[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27740 === 3))
{var inst_27737 = (state_27739[2]);var state_27739__$1 = state_27739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27739__$1,inst_27737);
} else
{if((state_val_27740 === 12))
{var inst_27703 = (state_27739[7]);var inst_27727 = cljs.core.vec.call(null,inst_27703);var state_27739__$1 = state_27739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27739__$1,15,out,inst_27727);
} else
{if((state_val_27740 === 2))
{var state_27739__$1 = state_27739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27739__$1,4,ch);
} else
{if((state_val_27740 === 11))
{var inst_27719 = (state_27739[2]);var inst_27720 = (new Array(n));var inst_27703 = inst_27720;var inst_27704 = 0;var state_27739__$1 = (function (){var statearr_27751 = state_27739;(statearr_27751[10] = inst_27719);
(statearr_27751[7] = inst_27703);
(statearr_27751[8] = inst_27704);
return statearr_27751;
})();var statearr_27752_27778 = state_27739__$1;(statearr_27752_27778[2] = null);
(statearr_27752_27778[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27740 === 9))
{var inst_27703 = (state_27739[7]);var inst_27717 = cljs.core.vec.call(null,inst_27703);var state_27739__$1 = state_27739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27739__$1,11,out,inst_27717);
} else
{if((state_val_27740 === 5))
{var inst_27703 = (state_27739[7]);var inst_27707 = (state_27739[9]);var inst_27704 = (state_27739[8]);var inst_27712 = (state_27739[11]);var inst_27711 = (inst_27703[inst_27704] = inst_27707);var inst_27712__$1 = (inst_27704 + 1);var inst_27713 = (inst_27712__$1 < n);var state_27739__$1 = (function (){var statearr_27753 = state_27739;(statearr_27753[12] = inst_27711);
(statearr_27753[11] = inst_27712__$1);
return statearr_27753;
})();if(cljs.core.truth_(inst_27713))
{var statearr_27754_27779 = state_27739__$1;(statearr_27754_27779[1] = 8);
} else
{var statearr_27755_27780 = state_27739__$1;(statearr_27755_27780[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27740 === 14))
{var inst_27732 = (state_27739[2]);var inst_27733 = cljs.core.async.close_BANG_.call(null,out);var state_27739__$1 = (function (){var statearr_27757 = state_27739;(statearr_27757[13] = inst_27732);
return statearr_27757;
})();var statearr_27758_27781 = state_27739__$1;(statearr_27758_27781[2] = inst_27733);
(statearr_27758_27781[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27740 === 10))
{var inst_27723 = (state_27739[2]);var state_27739__$1 = state_27739;var statearr_27759_27782 = state_27739__$1;(statearr_27759_27782[2] = inst_27723);
(statearr_27759_27782[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27740 === 8))
{var inst_27703 = (state_27739[7]);var inst_27712 = (state_27739[11]);var tmp27756 = inst_27703;var inst_27703__$1 = tmp27756;var inst_27704 = inst_27712;var state_27739__$1 = (function (){var statearr_27760 = state_27739;(statearr_27760[7] = inst_27703__$1);
(statearr_27760[8] = inst_27704);
return statearr_27760;
})();var statearr_27761_27783 = state_27739__$1;(statearr_27761_27783[2] = null);
(statearr_27761_27783[1] = 2);
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
});})(c__5689__auto___27769,out))
;return ((function (switch__5674__auto__,c__5689__auto___27769,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27765[0] = state_machine__5675__auto__);
(statearr_27765[1] = 1);
return statearr_27765;
});
var state_machine__5675__auto____1 = (function (state_27739){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27739);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27766){if((e27766 instanceof Object))
{var ex__5678__auto__ = e27766;var statearr_27767_27784 = state_27739;(statearr_27767_27784[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27739);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27785 = state_27739;
state_27739 = G__27785;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27739){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27769,out))
})();var state__5691__auto__ = (function (){var statearr_27768 = f__5690__auto__.call(null);(statearr_27768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27769);
return statearr_27768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27769,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___27928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27928,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27928,out){
return (function (state_27898){var state_val_27899 = (state_27898[1]);if((state_val_27899 === 7))
{var inst_27894 = (state_27898[2]);var state_27898__$1 = state_27898;var statearr_27900_27929 = state_27898__$1;(statearr_27900_27929[2] = inst_27894);
(statearr_27900_27929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27899 === 1))
{var inst_27857 = [];var inst_27858 = inst_27857;var inst_27859 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27898__$1 = (function (){var statearr_27901 = state_27898;(statearr_27901[7] = inst_27858);
(statearr_27901[8] = inst_27859);
return statearr_27901;
})();var statearr_27902_27930 = state_27898__$1;(statearr_27902_27930[2] = null);
(statearr_27902_27930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27899 === 4))
{var inst_27862 = (state_27898[9]);var inst_27862__$1 = (state_27898[2]);var inst_27863 = (inst_27862__$1 == null);var inst_27864 = cljs.core.not.call(null,inst_27863);var state_27898__$1 = (function (){var statearr_27903 = state_27898;(statearr_27903[9] = inst_27862__$1);
return statearr_27903;
})();if(inst_27864)
{var statearr_27904_27931 = state_27898__$1;(statearr_27904_27931[1] = 5);
} else
{var statearr_27905_27932 = state_27898__$1;(statearr_27905_27932[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27899 === 15))
{var inst_27888 = (state_27898[2]);var state_27898__$1 = state_27898;var statearr_27906_27933 = state_27898__$1;(statearr_27906_27933[2] = inst_27888);
(statearr_27906_27933[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27899 === 13))
{var state_27898__$1 = state_27898;var statearr_27907_27934 = state_27898__$1;(statearr_27907_27934[2] = null);
(statearr_27907_27934[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27899 === 6))
{var inst_27858 = (state_27898[7]);var inst_27883 = inst_27858.length;var inst_27884 = (inst_27883 > 0);var state_27898__$1 = state_27898;if(cljs.core.truth_(inst_27884))
{var statearr_27908_27935 = state_27898__$1;(statearr_27908_27935[1] = 12);
} else
{var statearr_27909_27936 = state_27898__$1;(statearr_27909_27936[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27899 === 3))
{var inst_27896 = (state_27898[2]);var state_27898__$1 = state_27898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27898__$1,inst_27896);
} else
{if((state_val_27899 === 12))
{var inst_27858 = (state_27898[7]);var inst_27886 = cljs.core.vec.call(null,inst_27858);var state_27898__$1 = state_27898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27898__$1,15,out,inst_27886);
} else
{if((state_val_27899 === 2))
{var state_27898__$1 = state_27898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27898__$1,4,ch);
} else
{if((state_val_27899 === 11))
{var inst_27866 = (state_27898[10]);var inst_27862 = (state_27898[9]);var inst_27876 = (state_27898[2]);var inst_27877 = [];var inst_27878 = inst_27877.push(inst_27862);var inst_27858 = inst_27877;var inst_27859 = inst_27866;var state_27898__$1 = (function (){var statearr_27910 = state_27898;(statearr_27910[7] = inst_27858);
(statearr_27910[8] = inst_27859);
(statearr_27910[11] = inst_27876);
(statearr_27910[12] = inst_27878);
return statearr_27910;
})();var statearr_27911_27937 = state_27898__$1;(statearr_27911_27937[2] = null);
(statearr_27911_27937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27899 === 9))
{var inst_27858 = (state_27898[7]);var inst_27874 = cljs.core.vec.call(null,inst_27858);var state_27898__$1 = state_27898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27898__$1,11,out,inst_27874);
} else
{if((state_val_27899 === 5))
{var inst_27859 = (state_27898[8]);var inst_27866 = (state_27898[10]);var inst_27862 = (state_27898[9]);var inst_27866__$1 = f.call(null,inst_27862);var inst_27867 = cljs.core._EQ_.call(null,inst_27866__$1,inst_27859);var inst_27868 = cljs.core.keyword_identical_QMARK_.call(null,inst_27859,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27869 = (inst_27867) || (inst_27868);var state_27898__$1 = (function (){var statearr_27912 = state_27898;(statearr_27912[10] = inst_27866__$1);
return statearr_27912;
})();if(cljs.core.truth_(inst_27869))
{var statearr_27913_27938 = state_27898__$1;(statearr_27913_27938[1] = 8);
} else
{var statearr_27914_27939 = state_27898__$1;(statearr_27914_27939[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27899 === 14))
{var inst_27891 = (state_27898[2]);var inst_27892 = cljs.core.async.close_BANG_.call(null,out);var state_27898__$1 = (function (){var statearr_27916 = state_27898;(statearr_27916[13] = inst_27891);
return statearr_27916;
})();var statearr_27917_27940 = state_27898__$1;(statearr_27917_27940[2] = inst_27892);
(statearr_27917_27940[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27899 === 10))
{var inst_27881 = (state_27898[2]);var state_27898__$1 = state_27898;var statearr_27918_27941 = state_27898__$1;(statearr_27918_27941[2] = inst_27881);
(statearr_27918_27941[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27899 === 8))
{var inst_27858 = (state_27898[7]);var inst_27866 = (state_27898[10]);var inst_27862 = (state_27898[9]);var inst_27871 = inst_27858.push(inst_27862);var tmp27915 = inst_27858;var inst_27858__$1 = tmp27915;var inst_27859 = inst_27866;var state_27898__$1 = (function (){var statearr_27919 = state_27898;(statearr_27919[7] = inst_27858__$1);
(statearr_27919[8] = inst_27859);
(statearr_27919[14] = inst_27871);
return statearr_27919;
})();var statearr_27920_27942 = state_27898__$1;(statearr_27920_27942[2] = null);
(statearr_27920_27942[1] = 2);
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
});})(c__5689__auto___27928,out))
;return ((function (switch__5674__auto__,c__5689__auto___27928,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27924[0] = state_machine__5675__auto__);
(statearr_27924[1] = 1);
return statearr_27924;
});
var state_machine__5675__auto____1 = (function (state_27898){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27925){if((e27925 instanceof Object))
{var ex__5678__auto__ = e27925;var statearr_27926_27943 = state_27898;(statearr_27926_27943[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27944 = state_27898;
state_27898 = G__27944;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27898){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27928,out))
})();var state__5691__auto__ = (function (){var statearr_27927 = f__5690__auto__.call(null);(statearr_27927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27928);
return statearr_27927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27928,out))
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