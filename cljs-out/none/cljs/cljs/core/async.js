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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25410 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25410 = (function (f,fn_handler,meta25411){
this.f = f;
this.fn_handler = fn_handler;
this.meta25411 = meta25411;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25410.cljs$lang$type = true;
cljs.core.async.t25410.cljs$lang$ctorStr = "cljs.core.async/t25410";
cljs.core.async.t25410.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25410");
});
cljs.core.async.t25410.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25412){var self__ = this;
var _25412__$1 = this;return self__.meta25411;
});
cljs.core.async.t25410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25412,meta25411__$1){var self__ = this;
var _25412__$1 = this;return (new cljs.core.async.t25410(self__.f,self__.fn_handler,meta25411__$1));
});
cljs.core.async.__GT_t25410 = (function __GT_t25410(f__$1,fn_handler__$1,meta25411){return (new cljs.core.async.t25410(f__$1,fn_handler__$1,meta25411));
});
}
return (new cljs.core.async.t25410(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25414 = buff;if(G__25414)
{var bit__4189__auto__ = null;if(cljs.core.truth_((function (){var or__3539__auto__ = bit__4189__auto__;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return G__25414.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25414.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25414);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25414);
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
{var val_25415 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25415);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_25415,ret){
return (function (){return fn1.call(null,val_25415);
});})(val_25415,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4395__auto___25416 = n;var x_25417 = 0;while(true){
if((x_25417 < n__4395__auto___25416))
{(a[x_25417] = 0);
{
var G__25418 = (x_25417 + 1);
x_25417 = G__25418;
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
var G__25419 = (i + 1);
i = G__25419;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25423 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25423 = (function (flag,alt_flag,meta25424){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25424 = meta25424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25423.cljs$lang$type = true;
cljs.core.async.t25423.cljs$lang$ctorStr = "cljs.core.async/t25423";
cljs.core.async.t25423.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25423");
});})(flag))
;
cljs.core.async.t25423.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25425){var self__ = this;
var _25425__$1 = this;return self__.meta25424;
});})(flag))
;
cljs.core.async.t25423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25425,meta25424__$1){var self__ = this;
var _25425__$1 = this;return (new cljs.core.async.t25423(self__.flag,self__.alt_flag,meta25424__$1));
});})(flag))
;
cljs.core.async.__GT_t25423 = ((function (flag){
return (function __GT_t25423(flag__$1,alt_flag__$1,meta25424){return (new cljs.core.async.t25423(flag__$1,alt_flag__$1,meta25424));
});})(flag))
;
}
return (new cljs.core.async.t25423(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25429 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25429 = (function (cb,flag,alt_handler,meta25430){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25430 = meta25430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25429.cljs$lang$type = true;
cljs.core.async.t25429.cljs$lang$ctorStr = "cljs.core.async/t25429";
cljs.core.async.t25429.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25429");
});
cljs.core.async.t25429.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25431){var self__ = this;
var _25431__$1 = this;return self__.meta25430;
});
cljs.core.async.t25429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25431,meta25430__$1){var self__ = this;
var _25431__$1 = this;return (new cljs.core.async.t25429(self__.cb,self__.flag,self__.alt_handler,meta25430__$1));
});
cljs.core.async.__GT_t25429 = (function __GT_t25429(cb__$1,flag__$1,alt_handler__$1,meta25430){return (new cljs.core.async.t25429(cb__$1,flag__$1,alt_handler__$1,meta25430));
});
}
return (new cljs.core.async.t25429(cb,flag,alt_handler,null));
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
return (function (p1__25432_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25432_SHARP_,port], null));
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
var G__25433 = (i + 1);
i = G__25433;
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
var alts_BANG___delegate = function (ports,p__25434){var map__25436 = p__25434;var map__25436__$1 = ((cljs.core.seq_QMARK_.call(null,map__25436))?cljs.core.apply.call(null,cljs.core.hash_map,map__25436):map__25436);var opts = map__25436__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25434 = null;if (arguments.length > 1) {
  p__25434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25434);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25437){
var ports = cljs.core.first(arglist__25437);
var p__25434 = cljs.core.rest(arglist__25437);
return alts_BANG___delegate(ports,p__25434);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25445 = (function (ch,f,map_LT_,meta25446){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25446 = meta25446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25445.cljs$lang$type = true;
cljs.core.async.t25445.cljs$lang$ctorStr = "cljs.core.async/t25445";
cljs.core.async.t25445.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25445");
});
cljs.core.async.t25445.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25445.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25448 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25448 = (function (fn1,_,meta25446,ch,f,map_LT_,meta25449){
this.fn1 = fn1;
this._ = _;
this.meta25446 = meta25446;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25449 = meta25449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25448.cljs$lang$type = true;
cljs.core.async.t25448.cljs$lang$ctorStr = "cljs.core.async/t25448";
cljs.core.async.t25448.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25448");
});})(___$1))
;
cljs.core.async.t25448.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25448.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25448.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25448.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25438_SHARP_){return f1.call(null,(((p1__25438_SHARP_ == null))?null:self__.f.call(null,p1__25438_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25450){var self__ = this;
var _25450__$1 = this;return self__.meta25449;
});})(___$1))
;
cljs.core.async.t25448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25450,meta25449__$1){var self__ = this;
var _25450__$1 = this;return (new cljs.core.async.t25448(self__.fn1,self__._,self__.meta25446,self__.ch,self__.f,self__.map_LT_,meta25449__$1));
});})(___$1))
;
cljs.core.async.__GT_t25448 = ((function (___$1){
return (function __GT_t25448(fn1__$1,___$2,meta25446__$1,ch__$2,f__$2,map_LT___$2,meta25449){return (new cljs.core.async.t25448(fn1__$1,___$2,meta25446__$1,ch__$2,f__$2,map_LT___$2,meta25449));
});})(___$1))
;
}
return (new cljs.core.async.t25448(fn1,___$1,self__.meta25446,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25445.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25447){var self__ = this;
var _25447__$1 = this;return self__.meta25446;
});
cljs.core.async.t25445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25447,meta25446__$1){var self__ = this;
var _25447__$1 = this;return (new cljs.core.async.t25445(self__.ch,self__.f,self__.map_LT_,meta25446__$1));
});
cljs.core.async.__GT_t25445 = (function __GT_t25445(ch__$1,f__$1,map_LT___$1,meta25446){return (new cljs.core.async.t25445(ch__$1,f__$1,map_LT___$1,meta25446));
});
}
return (new cljs.core.async.t25445(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25454 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25454 = (function (ch,f,map_GT_,meta25455){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25455 = meta25455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25454.cljs$lang$type = true;
cljs.core.async.t25454.cljs$lang$ctorStr = "cljs.core.async/t25454";
cljs.core.async.t25454.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25454");
});
cljs.core.async.t25454.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25454.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25454.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25456){var self__ = this;
var _25456__$1 = this;return self__.meta25455;
});
cljs.core.async.t25454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25456,meta25455__$1){var self__ = this;
var _25456__$1 = this;return (new cljs.core.async.t25454(self__.ch,self__.f,self__.map_GT_,meta25455__$1));
});
cljs.core.async.__GT_t25454 = (function __GT_t25454(ch__$1,f__$1,map_GT___$1,meta25455){return (new cljs.core.async.t25454(ch__$1,f__$1,map_GT___$1,meta25455));
});
}
return (new cljs.core.async.t25454(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25460 = (function (ch,p,filter_GT_,meta25461){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25461 = meta25461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25460.cljs$lang$type = true;
cljs.core.async.t25460.cljs$lang$ctorStr = "cljs.core.async/t25460";
cljs.core.async.t25460.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t25460");
});
cljs.core.async.t25460.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25460.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25460.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25462){var self__ = this;
var _25462__$1 = this;return self__.meta25461;
});
cljs.core.async.t25460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25462,meta25461__$1){var self__ = this;
var _25462__$1 = this;return (new cljs.core.async.t25460(self__.ch,self__.p,self__.filter_GT_,meta25461__$1));
});
cljs.core.async.__GT_t25460 = (function __GT_t25460(ch__$1,p__$1,filter_GT___$1,meta25461){return (new cljs.core.async.t25460(ch__$1,p__$1,filter_GT___$1,meta25461));
});
}
return (new cljs.core.async.t25460(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___25545 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___25545,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___25545,out){
return (function (state_25524){var state_val_25525 = (state_25524[1]);if((state_val_25525 === 7))
{var inst_25520 = (state_25524[2]);var state_25524__$1 = state_25524;var statearr_25526_25546 = state_25524__$1;(statearr_25526_25546[2] = inst_25520);
(statearr_25526_25546[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25525 === 1))
{var state_25524__$1 = state_25524;var statearr_25527_25547 = state_25524__$1;(statearr_25527_25547[2] = null);
(statearr_25527_25547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25525 === 4))
{var inst_25506 = (state_25524[7]);var inst_25506__$1 = (state_25524[2]);var inst_25507 = (inst_25506__$1 == null);var state_25524__$1 = (function (){var statearr_25528 = state_25524;(statearr_25528[7] = inst_25506__$1);
return statearr_25528;
})();if(cljs.core.truth_(inst_25507))
{var statearr_25529_25548 = state_25524__$1;(statearr_25529_25548[1] = 5);
} else
{var statearr_25530_25549 = state_25524__$1;(statearr_25530_25549[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25525 === 6))
{var inst_25506 = (state_25524[7]);var inst_25511 = p.call(null,inst_25506);var state_25524__$1 = state_25524;if(cljs.core.truth_(inst_25511))
{var statearr_25531_25550 = state_25524__$1;(statearr_25531_25550[1] = 8);
} else
{var statearr_25532_25551 = state_25524__$1;(statearr_25532_25551[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25525 === 3))
{var inst_25522 = (state_25524[2]);var state_25524__$1 = state_25524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25524__$1,inst_25522);
} else
{if((state_val_25525 === 2))
{var state_25524__$1 = state_25524;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25524__$1,4,ch);
} else
{if((state_val_25525 === 11))
{var inst_25514 = (state_25524[2]);var state_25524__$1 = state_25524;var statearr_25533_25552 = state_25524__$1;(statearr_25533_25552[2] = inst_25514);
(statearr_25533_25552[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25525 === 9))
{var state_25524__$1 = state_25524;var statearr_25534_25553 = state_25524__$1;(statearr_25534_25553[2] = null);
(statearr_25534_25553[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25525 === 5))
{var inst_25509 = cljs.core.async.close_BANG_.call(null,out);var state_25524__$1 = state_25524;var statearr_25535_25554 = state_25524__$1;(statearr_25535_25554[2] = inst_25509);
(statearr_25535_25554[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25525 === 10))
{var inst_25517 = (state_25524[2]);var state_25524__$1 = (function (){var statearr_25536 = state_25524;(statearr_25536[8] = inst_25517);
return statearr_25536;
})();var statearr_25537_25555 = state_25524__$1;(statearr_25537_25555[2] = null);
(statearr_25537_25555[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25525 === 8))
{var inst_25506 = (state_25524[7]);var state_25524__$1 = state_25524;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25524__$1,11,out,inst_25506);
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
});})(c__5689__auto___25545,out))
;return ((function (switch__5674__auto__,c__5689__auto___25545,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_25541 = [null,null,null,null,null,null,null,null,null];(statearr_25541[0] = state_machine__5675__auto__);
(statearr_25541[1] = 1);
return statearr_25541;
});
var state_machine__5675__auto____1 = (function (state_25524){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_25524);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e25542){if((e25542 instanceof Object))
{var ex__5678__auto__ = e25542;var statearr_25543_25556 = state_25524;(statearr_25543_25556[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25524);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25557 = state_25524;
state_25524 = G__25557;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_25524){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_25524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___25545,out))
})();var state__5691__auto__ = (function (){var statearr_25544 = f__5690__auto__.call(null);(statearr_25544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___25545);
return statearr_25544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___25545,out))
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
return (function (state_25709){var state_val_25710 = (state_25709[1]);if((state_val_25710 === 7))
{var inst_25705 = (state_25709[2]);var state_25709__$1 = state_25709;var statearr_25711_25748 = state_25709__$1;(statearr_25711_25748[2] = inst_25705);
(statearr_25711_25748[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 20))
{var inst_25680 = (state_25709[7]);var inst_25691 = (state_25709[2]);var inst_25692 = cljs.core.next.call(null,inst_25680);var inst_25666 = inst_25692;var inst_25667 = null;var inst_25668 = 0;var inst_25669 = 0;var state_25709__$1 = (function (){var statearr_25712 = state_25709;(statearr_25712[8] = inst_25691);
(statearr_25712[9] = inst_25668);
(statearr_25712[10] = inst_25667);
(statearr_25712[11] = inst_25669);
(statearr_25712[12] = inst_25666);
return statearr_25712;
})();var statearr_25713_25749 = state_25709__$1;(statearr_25713_25749[2] = null);
(statearr_25713_25749[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 1))
{var state_25709__$1 = state_25709;var statearr_25714_25750 = state_25709__$1;(statearr_25714_25750[2] = null);
(statearr_25714_25750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 4))
{var inst_25655 = (state_25709[13]);var inst_25655__$1 = (state_25709[2]);var inst_25656 = (inst_25655__$1 == null);var state_25709__$1 = (function (){var statearr_25718 = state_25709;(statearr_25718[13] = inst_25655__$1);
return statearr_25718;
})();if(cljs.core.truth_(inst_25656))
{var statearr_25719_25751 = state_25709__$1;(statearr_25719_25751[1] = 5);
} else
{var statearr_25720_25752 = state_25709__$1;(statearr_25720_25752[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 15))
{var state_25709__$1 = state_25709;var statearr_25721_25753 = state_25709__$1;(statearr_25721_25753[2] = null);
(statearr_25721_25753[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 13))
{var inst_25668 = (state_25709[9]);var inst_25667 = (state_25709[10]);var inst_25669 = (state_25709[11]);var inst_25666 = (state_25709[12]);var inst_25676 = (state_25709[2]);var inst_25677 = (inst_25669 + 1);var tmp25715 = inst_25668;var tmp25716 = inst_25667;var tmp25717 = inst_25666;var inst_25666__$1 = tmp25717;var inst_25667__$1 = tmp25716;var inst_25668__$1 = tmp25715;var inst_25669__$1 = inst_25677;var state_25709__$1 = (function (){var statearr_25722 = state_25709;(statearr_25722[9] = inst_25668__$1);
(statearr_25722[10] = inst_25667__$1);
(statearr_25722[11] = inst_25669__$1);
(statearr_25722[14] = inst_25676);
(statearr_25722[12] = inst_25666__$1);
return statearr_25722;
})();var statearr_25723_25754 = state_25709__$1;(statearr_25723_25754[2] = null);
(statearr_25723_25754[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 6))
{var inst_25655 = (state_25709[13]);var inst_25660 = f.call(null,inst_25655);var inst_25665 = cljs.core.seq.call(null,inst_25660);var inst_25666 = inst_25665;var inst_25667 = null;var inst_25668 = 0;var inst_25669 = 0;var state_25709__$1 = (function (){var statearr_25724 = state_25709;(statearr_25724[9] = inst_25668);
(statearr_25724[10] = inst_25667);
(statearr_25724[11] = inst_25669);
(statearr_25724[12] = inst_25666);
return statearr_25724;
})();var statearr_25725_25755 = state_25709__$1;(statearr_25725_25755[2] = null);
(statearr_25725_25755[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 17))
{var inst_25680 = (state_25709[7]);var inst_25684 = cljs.core.chunk_first.call(null,inst_25680);var inst_25685 = cljs.core.chunk_rest.call(null,inst_25680);var inst_25686 = cljs.core.count.call(null,inst_25684);var inst_25666 = inst_25685;var inst_25667 = inst_25684;var inst_25668 = inst_25686;var inst_25669 = 0;var state_25709__$1 = (function (){var statearr_25726 = state_25709;(statearr_25726[9] = inst_25668);
(statearr_25726[10] = inst_25667);
(statearr_25726[11] = inst_25669);
(statearr_25726[12] = inst_25666);
return statearr_25726;
})();var statearr_25727_25756 = state_25709__$1;(statearr_25727_25756[2] = null);
(statearr_25727_25756[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 3))
{var inst_25707 = (state_25709[2]);var state_25709__$1 = state_25709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25709__$1,inst_25707);
} else
{if((state_val_25710 === 12))
{var inst_25700 = (state_25709[2]);var state_25709__$1 = state_25709;var statearr_25728_25757 = state_25709__$1;(statearr_25728_25757[2] = inst_25700);
(statearr_25728_25757[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 2))
{var state_25709__$1 = state_25709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25709__$1,4,in$);
} else
{if((state_val_25710 === 19))
{var inst_25695 = (state_25709[2]);var state_25709__$1 = state_25709;var statearr_25729_25758 = state_25709__$1;(statearr_25729_25758[2] = inst_25695);
(statearr_25729_25758[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 11))
{var inst_25680 = (state_25709[7]);var inst_25666 = (state_25709[12]);var inst_25680__$1 = cljs.core.seq.call(null,inst_25666);var state_25709__$1 = (function (){var statearr_25730 = state_25709;(statearr_25730[7] = inst_25680__$1);
return statearr_25730;
})();if(inst_25680__$1)
{var statearr_25731_25759 = state_25709__$1;(statearr_25731_25759[1] = 14);
} else
{var statearr_25732_25760 = state_25709__$1;(statearr_25732_25760[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 9))
{var inst_25702 = (state_25709[2]);var state_25709__$1 = (function (){var statearr_25733 = state_25709;(statearr_25733[15] = inst_25702);
return statearr_25733;
})();var statearr_25734_25761 = state_25709__$1;(statearr_25734_25761[2] = null);
(statearr_25734_25761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 5))
{var inst_25658 = cljs.core.async.close_BANG_.call(null,out);var state_25709__$1 = state_25709;var statearr_25735_25762 = state_25709__$1;(statearr_25735_25762[2] = inst_25658);
(statearr_25735_25762[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 14))
{var inst_25680 = (state_25709[7]);var inst_25682 = cljs.core.chunked_seq_QMARK_.call(null,inst_25680);var state_25709__$1 = state_25709;if(inst_25682)
{var statearr_25736_25763 = state_25709__$1;(statearr_25736_25763[1] = 17);
} else
{var statearr_25737_25764 = state_25709__$1;(statearr_25737_25764[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 16))
{var inst_25698 = (state_25709[2]);var state_25709__$1 = state_25709;var statearr_25738_25765 = state_25709__$1;(statearr_25738_25765[2] = inst_25698);
(statearr_25738_25765[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25710 === 10))
{var inst_25667 = (state_25709[10]);var inst_25669 = (state_25709[11]);var inst_25674 = cljs.core._nth.call(null,inst_25667,inst_25669);var state_25709__$1 = state_25709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25709__$1,13,out,inst_25674);
} else
{if((state_val_25710 === 18))
{var inst_25680 = (state_25709[7]);var inst_25689 = cljs.core.first.call(null,inst_25680);var state_25709__$1 = state_25709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25709__$1,20,out,inst_25689);
} else
{if((state_val_25710 === 8))
{var inst_25668 = (state_25709[9]);var inst_25669 = (state_25709[11]);var inst_25671 = (inst_25669 < inst_25668);var inst_25672 = inst_25671;var state_25709__$1 = state_25709;if(cljs.core.truth_(inst_25672))
{var statearr_25739_25766 = state_25709__$1;(statearr_25739_25766[1] = 10);
} else
{var statearr_25740_25767 = state_25709__$1;(statearr_25740_25767[1] = 11);
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
var state_machine__5675__auto____0 = (function (){var statearr_25744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25744[0] = state_machine__5675__auto__);
(statearr_25744[1] = 1);
return statearr_25744;
});
var state_machine__5675__auto____1 = (function (state_25709){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_25709);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e25745){if((e25745 instanceof Object))
{var ex__5678__auto__ = e25745;var statearr_25746_25768 = state_25709;(statearr_25746_25768[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25769 = state_25709;
state_25709 = G__25769;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_25709){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_25709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_25747 = f__5690__auto__.call(null);(statearr_25747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_25747;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5689__auto___25850 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___25850){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___25850){
return (function (state_25829){var state_val_25830 = (state_25829[1]);if((state_val_25830 === 7))
{var inst_25825 = (state_25829[2]);var state_25829__$1 = state_25829;var statearr_25831_25851 = state_25829__$1;(statearr_25831_25851[2] = inst_25825);
(statearr_25831_25851[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 1))
{var state_25829__$1 = state_25829;var statearr_25832_25852 = state_25829__$1;(statearr_25832_25852[2] = null);
(statearr_25832_25852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 4))
{var inst_25812 = (state_25829[7]);var inst_25812__$1 = (state_25829[2]);var inst_25813 = (inst_25812__$1 == null);var state_25829__$1 = (function (){var statearr_25833 = state_25829;(statearr_25833[7] = inst_25812__$1);
return statearr_25833;
})();if(cljs.core.truth_(inst_25813))
{var statearr_25834_25853 = state_25829__$1;(statearr_25834_25853[1] = 5);
} else
{var statearr_25835_25854 = state_25829__$1;(statearr_25835_25854[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 6))
{var inst_25812 = (state_25829[7]);var state_25829__$1 = state_25829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25829__$1,11,to,inst_25812);
} else
{if((state_val_25830 === 3))
{var inst_25827 = (state_25829[2]);var state_25829__$1 = state_25829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25829__$1,inst_25827);
} else
{if((state_val_25830 === 2))
{var state_25829__$1 = state_25829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25829__$1,4,from);
} else
{if((state_val_25830 === 11))
{var inst_25822 = (state_25829[2]);var state_25829__$1 = (function (){var statearr_25836 = state_25829;(statearr_25836[8] = inst_25822);
return statearr_25836;
})();var statearr_25837_25855 = state_25829__$1;(statearr_25837_25855[2] = null);
(statearr_25837_25855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 9))
{var state_25829__$1 = state_25829;var statearr_25838_25856 = state_25829__$1;(statearr_25838_25856[2] = null);
(statearr_25838_25856[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 5))
{var state_25829__$1 = state_25829;if(cljs.core.truth_(close_QMARK_))
{var statearr_25839_25857 = state_25829__$1;(statearr_25839_25857[1] = 8);
} else
{var statearr_25840_25858 = state_25829__$1;(statearr_25840_25858[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 10))
{var inst_25819 = (state_25829[2]);var state_25829__$1 = state_25829;var statearr_25841_25859 = state_25829__$1;(statearr_25841_25859[2] = inst_25819);
(statearr_25841_25859[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 8))
{var inst_25816 = cljs.core.async.close_BANG_.call(null,to);var state_25829__$1 = state_25829;var statearr_25842_25860 = state_25829__$1;(statearr_25842_25860[2] = inst_25816);
(statearr_25842_25860[1] = 10);
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
});})(c__5689__auto___25850))
;return ((function (switch__5674__auto__,c__5689__auto___25850){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_25846 = [null,null,null,null,null,null,null,null,null];(statearr_25846[0] = state_machine__5675__auto__);
(statearr_25846[1] = 1);
return statearr_25846;
});
var state_machine__5675__auto____1 = (function (state_25829){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_25829);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e25847){if((e25847 instanceof Object))
{var ex__5678__auto__ = e25847;var statearr_25848_25861 = state_25829;(statearr_25848_25861[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25829);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25862 = state_25829;
state_25829 = G__25862;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_25829){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_25829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___25850))
})();var state__5691__auto__ = (function (){var statearr_25849 = f__5690__auto__.call(null);(statearr_25849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___25850);
return statearr_25849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___25850))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5689__auto___25949 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___25949,tc,fc){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___25949,tc,fc){
return (function (state_25927){var state_val_25928 = (state_25927[1]);if((state_val_25928 === 7))
{var inst_25923 = (state_25927[2]);var state_25927__$1 = state_25927;var statearr_25929_25950 = state_25927__$1;(statearr_25929_25950[2] = inst_25923);
(statearr_25929_25950[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25928 === 1))
{var state_25927__$1 = state_25927;var statearr_25930_25951 = state_25927__$1;(statearr_25930_25951[2] = null);
(statearr_25930_25951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25928 === 4))
{var inst_25908 = (state_25927[7]);var inst_25908__$1 = (state_25927[2]);var inst_25909 = (inst_25908__$1 == null);var state_25927__$1 = (function (){var statearr_25931 = state_25927;(statearr_25931[7] = inst_25908__$1);
return statearr_25931;
})();if(cljs.core.truth_(inst_25909))
{var statearr_25932_25952 = state_25927__$1;(statearr_25932_25952[1] = 5);
} else
{var statearr_25933_25953 = state_25927__$1;(statearr_25933_25953[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25928 === 6))
{var inst_25908 = (state_25927[7]);var inst_25914 = p.call(null,inst_25908);var state_25927__$1 = state_25927;if(cljs.core.truth_(inst_25914))
{var statearr_25934_25954 = state_25927__$1;(statearr_25934_25954[1] = 9);
} else
{var statearr_25935_25955 = state_25927__$1;(statearr_25935_25955[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25928 === 3))
{var inst_25925 = (state_25927[2]);var state_25927__$1 = state_25927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25927__$1,inst_25925);
} else
{if((state_val_25928 === 2))
{var state_25927__$1 = state_25927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25927__$1,4,ch);
} else
{if((state_val_25928 === 11))
{var inst_25908 = (state_25927[7]);var inst_25918 = (state_25927[2]);var state_25927__$1 = state_25927;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25927__$1,8,inst_25918,inst_25908);
} else
{if((state_val_25928 === 9))
{var state_25927__$1 = state_25927;var statearr_25936_25956 = state_25927__$1;(statearr_25936_25956[2] = tc);
(statearr_25936_25956[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25928 === 5))
{var inst_25911 = cljs.core.async.close_BANG_.call(null,tc);var inst_25912 = cljs.core.async.close_BANG_.call(null,fc);var state_25927__$1 = (function (){var statearr_25937 = state_25927;(statearr_25937[8] = inst_25911);
return statearr_25937;
})();var statearr_25938_25957 = state_25927__$1;(statearr_25938_25957[2] = inst_25912);
(statearr_25938_25957[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25928 === 10))
{var state_25927__$1 = state_25927;var statearr_25939_25958 = state_25927__$1;(statearr_25939_25958[2] = fc);
(statearr_25939_25958[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25928 === 8))
{var inst_25920 = (state_25927[2]);var state_25927__$1 = (function (){var statearr_25940 = state_25927;(statearr_25940[9] = inst_25920);
return statearr_25940;
})();var statearr_25941_25959 = state_25927__$1;(statearr_25941_25959[2] = null);
(statearr_25941_25959[1] = 2);
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
});})(c__5689__auto___25949,tc,fc))
;return ((function (switch__5674__auto__,c__5689__auto___25949,tc,fc){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_25945 = [null,null,null,null,null,null,null,null,null,null];(statearr_25945[0] = state_machine__5675__auto__);
(statearr_25945[1] = 1);
return statearr_25945;
});
var state_machine__5675__auto____1 = (function (state_25927){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_25927);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e25946){if((e25946 instanceof Object))
{var ex__5678__auto__ = e25946;var statearr_25947_25960 = state_25927;(statearr_25947_25960[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25927);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25946;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25961 = state_25927;
state_25927 = G__25961;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_25927){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_25927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___25949,tc,fc))
})();var state__5691__auto__ = (function (){var statearr_25948 = f__5690__auto__.call(null);(statearr_25948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___25949);
return statearr_25948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___25949,tc,fc))
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
return (function (state_26008){var state_val_26009 = (state_26008[1]);if((state_val_26009 === 7))
{var inst_26004 = (state_26008[2]);var state_26008__$1 = state_26008;var statearr_26010_26026 = state_26008__$1;(statearr_26010_26026[2] = inst_26004);
(statearr_26010_26026[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26009 === 6))
{var inst_25997 = (state_26008[7]);var inst_25994 = (state_26008[8]);var inst_26001 = f.call(null,inst_25994,inst_25997);var inst_25994__$1 = inst_26001;var state_26008__$1 = (function (){var statearr_26011 = state_26008;(statearr_26011[8] = inst_25994__$1);
return statearr_26011;
})();var statearr_26012_26027 = state_26008__$1;(statearr_26012_26027[2] = null);
(statearr_26012_26027[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26009 === 5))
{var inst_25994 = (state_26008[8]);var state_26008__$1 = state_26008;var statearr_26013_26028 = state_26008__$1;(statearr_26013_26028[2] = inst_25994);
(statearr_26013_26028[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26009 === 4))
{var inst_25997 = (state_26008[7]);var inst_25997__$1 = (state_26008[2]);var inst_25998 = (inst_25997__$1 == null);var state_26008__$1 = (function (){var statearr_26014 = state_26008;(statearr_26014[7] = inst_25997__$1);
return statearr_26014;
})();if(cljs.core.truth_(inst_25998))
{var statearr_26015_26029 = state_26008__$1;(statearr_26015_26029[1] = 5);
} else
{var statearr_26016_26030 = state_26008__$1;(statearr_26016_26030[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26009 === 3))
{var inst_26006 = (state_26008[2]);var state_26008__$1 = state_26008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26008__$1,inst_26006);
} else
{if((state_val_26009 === 2))
{var state_26008__$1 = state_26008;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26008__$1,4,ch);
} else
{if((state_val_26009 === 1))
{var inst_25994 = init;var state_26008__$1 = (function (){var statearr_26017 = state_26008;(statearr_26017[8] = inst_25994);
return statearr_26017;
})();var statearr_26018_26031 = state_26008__$1;(statearr_26018_26031[2] = null);
(statearr_26018_26031[1] = 2);
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
var state_machine__5675__auto____0 = (function (){var statearr_26022 = [null,null,null,null,null,null,null,null,null];(statearr_26022[0] = state_machine__5675__auto__);
(statearr_26022[1] = 1);
return statearr_26022;
});
var state_machine__5675__auto____1 = (function (state_26008){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_26008);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e26023){if((e26023 instanceof Object))
{var ex__5678__auto__ = e26023;var statearr_26024_26032 = state_26008;(statearr_26024_26032[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26008);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26033 = state_26008;
state_26008 = G__26033;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_26008){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_26008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_26025 = f__5690__auto__.call(null);(statearr_26025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_26025;
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
return (function (state_26095){var state_val_26096 = (state_26095[1]);if((state_val_26096 === 7))
{var inst_26076 = (state_26095[7]);var inst_26081 = (state_26095[2]);var inst_26082 = cljs.core.next.call(null,inst_26076);var inst_26076__$1 = inst_26082;var state_26095__$1 = (function (){var statearr_26097 = state_26095;(statearr_26097[7] = inst_26076__$1);
(statearr_26097[8] = inst_26081);
return statearr_26097;
})();var statearr_26098_26116 = state_26095__$1;(statearr_26098_26116[2] = null);
(statearr_26098_26116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 1))
{var inst_26075 = cljs.core.seq.call(null,coll);var inst_26076 = inst_26075;var state_26095__$1 = (function (){var statearr_26099 = state_26095;(statearr_26099[7] = inst_26076);
return statearr_26099;
})();var statearr_26100_26117 = state_26095__$1;(statearr_26100_26117[2] = null);
(statearr_26100_26117[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 4))
{var inst_26076 = (state_26095[7]);var inst_26079 = cljs.core.first.call(null,inst_26076);var state_26095__$1 = state_26095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26095__$1,7,ch,inst_26079);
} else
{if((state_val_26096 === 6))
{var inst_26091 = (state_26095[2]);var state_26095__$1 = state_26095;var statearr_26101_26118 = state_26095__$1;(statearr_26101_26118[2] = inst_26091);
(statearr_26101_26118[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 3))
{var inst_26093 = (state_26095[2]);var state_26095__$1 = state_26095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26095__$1,inst_26093);
} else
{if((state_val_26096 === 2))
{var inst_26076 = (state_26095[7]);var state_26095__$1 = state_26095;if(cljs.core.truth_(inst_26076))
{var statearr_26102_26119 = state_26095__$1;(statearr_26102_26119[1] = 4);
} else
{var statearr_26103_26120 = state_26095__$1;(statearr_26103_26120[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 9))
{var state_26095__$1 = state_26095;var statearr_26104_26121 = state_26095__$1;(statearr_26104_26121[2] = null);
(statearr_26104_26121[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 5))
{var state_26095__$1 = state_26095;if(cljs.core.truth_(close_QMARK_))
{var statearr_26105_26122 = state_26095__$1;(statearr_26105_26122[1] = 8);
} else
{var statearr_26106_26123 = state_26095__$1;(statearr_26106_26123[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 10))
{var inst_26089 = (state_26095[2]);var state_26095__$1 = state_26095;var statearr_26107_26124 = state_26095__$1;(statearr_26107_26124[2] = inst_26089);
(statearr_26107_26124[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26096 === 8))
{var inst_26086 = cljs.core.async.close_BANG_.call(null,ch);var state_26095__$1 = state_26095;var statearr_26108_26125 = state_26095__$1;(statearr_26108_26125[2] = inst_26086);
(statearr_26108_26125[1] = 10);
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
var state_machine__5675__auto____0 = (function (){var statearr_26112 = [null,null,null,null,null,null,null,null,null];(statearr_26112[0] = state_machine__5675__auto__);
(statearr_26112[1] = 1);
return statearr_26112;
});
var state_machine__5675__auto____1 = (function (state_26095){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_26095);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e26113){if((e26113 instanceof Object))
{var ex__5678__auto__ = e26113;var statearr_26114_26126 = state_26095;(statearr_26114_26126[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26095);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26113;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26127 = state_26095;
state_26095 = G__26127;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_26095){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_26095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_26115 = f__5690__auto__.call(null);(statearr_26115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_26115;
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
cljs.core.async.Mux = (function (){var obj26129 = {};return obj26129;
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
cljs.core.async.Mult = (function (){var obj26131 = {};return obj26131;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26355 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26355 = (function (cs,ch,mult,meta26356){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26356 = meta26356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26355.cljs$lang$type = true;
cljs.core.async.t26355.cljs$lang$ctorStr = "cljs.core.async/t26355";
cljs.core.async.t26355.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t26355");
});})(cs))
;
cljs.core.async.t26355.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26355.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26355.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26355.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26355.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26355.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26357){var self__ = this;
var _26357__$1 = this;return self__.meta26356;
});})(cs))
;
cljs.core.async.t26355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26357,meta26356__$1){var self__ = this;
var _26357__$1 = this;return (new cljs.core.async.t26355(self__.cs,self__.ch,self__.mult,meta26356__$1));
});})(cs))
;
cljs.core.async.__GT_t26355 = ((function (cs){
return (function __GT_t26355(cs__$1,ch__$1,mult__$1,meta26356){return (new cljs.core.async.t26355(cs__$1,ch__$1,mult__$1,meta26356));
});})(cs))
;
}
return (new cljs.core.async.t26355(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5689__auto___26578 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___26578,cs,m,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___26578,cs,m,dchan,dctr,done){
return (function (state_26492){var state_val_26493 = (state_26492[1]);if((state_val_26493 === 7))
{var inst_26488 = (state_26492[2]);var state_26492__$1 = state_26492;var statearr_26494_26579 = state_26492__$1;(statearr_26494_26579[2] = inst_26488);
(statearr_26494_26579[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 20))
{var inst_26389 = (state_26492[7]);var inst_26399 = cljs.core.first.call(null,inst_26389);var inst_26400 = cljs.core.nth.call(null,inst_26399,0,null);var inst_26401 = cljs.core.nth.call(null,inst_26399,1,null);var state_26492__$1 = (function (){var statearr_26495 = state_26492;(statearr_26495[8] = inst_26400);
return statearr_26495;
})();if(cljs.core.truth_(inst_26401))
{var statearr_26496_26580 = state_26492__$1;(statearr_26496_26580[1] = 22);
} else
{var statearr_26497_26581 = state_26492__$1;(statearr_26497_26581[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 27))
{var inst_26429 = (state_26492[9]);var inst_26431 = (state_26492[10]);var inst_26436 = cljs.core._nth.call(null,inst_26429,inst_26431);var state_26492__$1 = (function (){var statearr_26498 = state_26492;(statearr_26498[11] = inst_26436);
return statearr_26498;
})();var statearr_26499_26582 = state_26492__$1;(statearr_26499_26582[2] = null);
(statearr_26499_26582[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 1))
{var state_26492__$1 = state_26492;var statearr_26500_26583 = state_26492__$1;(statearr_26500_26583[2] = null);
(statearr_26500_26583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 24))
{var inst_26389 = (state_26492[7]);var inst_26406 = (state_26492[2]);var inst_26407 = cljs.core.next.call(null,inst_26389);var inst_26369 = inst_26407;var inst_26370 = null;var inst_26371 = 0;var inst_26372 = 0;var state_26492__$1 = (function (){var statearr_26501 = state_26492;(statearr_26501[12] = inst_26406);
(statearr_26501[13] = inst_26370);
(statearr_26501[14] = inst_26371);
(statearr_26501[15] = inst_26372);
(statearr_26501[16] = inst_26369);
return statearr_26501;
})();var statearr_26502_26584 = state_26492__$1;(statearr_26502_26584[2] = null);
(statearr_26502_26584[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 39))
{var inst_26449 = (state_26492[17]);var inst_26467 = (state_26492[2]);var inst_26468 = cljs.core.next.call(null,inst_26449);var inst_26428 = inst_26468;var inst_26429 = null;var inst_26430 = 0;var inst_26431 = 0;var state_26492__$1 = (function (){var statearr_26506 = state_26492;(statearr_26506[18] = inst_26430);
(statearr_26506[19] = inst_26428);
(statearr_26506[9] = inst_26429);
(statearr_26506[10] = inst_26431);
(statearr_26506[20] = inst_26467);
return statearr_26506;
})();var statearr_26507_26585 = state_26492__$1;(statearr_26507_26585[2] = null);
(statearr_26507_26585[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 4))
{var inst_26360 = (state_26492[21]);var inst_26360__$1 = (state_26492[2]);var inst_26361 = (inst_26360__$1 == null);var state_26492__$1 = (function (){var statearr_26508 = state_26492;(statearr_26508[21] = inst_26360__$1);
return statearr_26508;
})();if(cljs.core.truth_(inst_26361))
{var statearr_26509_26586 = state_26492__$1;(statearr_26509_26586[1] = 5);
} else
{var statearr_26510_26587 = state_26492__$1;(statearr_26510_26587[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 15))
{var inst_26370 = (state_26492[13]);var inst_26371 = (state_26492[14]);var inst_26372 = (state_26492[15]);var inst_26369 = (state_26492[16]);var inst_26385 = (state_26492[2]);var inst_26386 = (inst_26372 + 1);var tmp26503 = inst_26370;var tmp26504 = inst_26371;var tmp26505 = inst_26369;var inst_26369__$1 = tmp26505;var inst_26370__$1 = tmp26503;var inst_26371__$1 = tmp26504;var inst_26372__$1 = inst_26386;var state_26492__$1 = (function (){var statearr_26511 = state_26492;(statearr_26511[13] = inst_26370__$1);
(statearr_26511[14] = inst_26371__$1);
(statearr_26511[15] = inst_26372__$1);
(statearr_26511[16] = inst_26369__$1);
(statearr_26511[22] = inst_26385);
return statearr_26511;
})();var statearr_26512_26588 = state_26492__$1;(statearr_26512_26588[2] = null);
(statearr_26512_26588[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 21))
{var inst_26410 = (state_26492[2]);var state_26492__$1 = state_26492;var statearr_26513_26589 = state_26492__$1;(statearr_26513_26589[2] = inst_26410);
(statearr_26513_26589[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 31))
{var inst_26436 = (state_26492[11]);var inst_26437 = (state_26492[2]);var inst_26438 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26439 = cljs.core.async.untap_STAR_.call(null,m,inst_26436);var state_26492__$1 = (function (){var statearr_26514 = state_26492;(statearr_26514[23] = inst_26437);
(statearr_26514[24] = inst_26438);
return statearr_26514;
})();var statearr_26515_26590 = state_26492__$1;(statearr_26515_26590[2] = inst_26439);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26492__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 32))
{var inst_26360 = (state_26492[21]);var inst_26436 = (state_26492[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26492,31,Object,null,30);var inst_26443 = cljs.core.async.put_BANG_.call(null,inst_26436,inst_26360,done);var state_26492__$1 = state_26492;var statearr_26516_26591 = state_26492__$1;(statearr_26516_26591[2] = inst_26443);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26492__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 40))
{var inst_26458 = (state_26492[25]);var inst_26459 = (state_26492[2]);var inst_26460 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26461 = cljs.core.async.untap_STAR_.call(null,m,inst_26458);var state_26492__$1 = (function (){var statearr_26517 = state_26492;(statearr_26517[26] = inst_26460);
(statearr_26517[27] = inst_26459);
return statearr_26517;
})();var statearr_26518_26592 = state_26492__$1;(statearr_26518_26592[2] = inst_26461);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26492__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 33))
{var inst_26449 = (state_26492[17]);var inst_26451 = cljs.core.chunked_seq_QMARK_.call(null,inst_26449);var state_26492__$1 = state_26492;if(inst_26451)
{var statearr_26519_26593 = state_26492__$1;(statearr_26519_26593[1] = 36);
} else
{var statearr_26520_26594 = state_26492__$1;(statearr_26520_26594[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 13))
{var inst_26379 = (state_26492[28]);var inst_26382 = cljs.core.async.close_BANG_.call(null,inst_26379);var state_26492__$1 = state_26492;var statearr_26521_26595 = state_26492__$1;(statearr_26521_26595[2] = inst_26382);
(statearr_26521_26595[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 22))
{var inst_26400 = (state_26492[8]);var inst_26403 = cljs.core.async.close_BANG_.call(null,inst_26400);var state_26492__$1 = state_26492;var statearr_26522_26596 = state_26492__$1;(statearr_26522_26596[2] = inst_26403);
(statearr_26522_26596[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 36))
{var inst_26449 = (state_26492[17]);var inst_26453 = cljs.core.chunk_first.call(null,inst_26449);var inst_26454 = cljs.core.chunk_rest.call(null,inst_26449);var inst_26455 = cljs.core.count.call(null,inst_26453);var inst_26428 = inst_26454;var inst_26429 = inst_26453;var inst_26430 = inst_26455;var inst_26431 = 0;var state_26492__$1 = (function (){var statearr_26523 = state_26492;(statearr_26523[18] = inst_26430);
(statearr_26523[19] = inst_26428);
(statearr_26523[9] = inst_26429);
(statearr_26523[10] = inst_26431);
return statearr_26523;
})();var statearr_26524_26597 = state_26492__$1;(statearr_26524_26597[2] = null);
(statearr_26524_26597[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 41))
{var inst_26360 = (state_26492[21]);var inst_26458 = (state_26492[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26492,40,Object,null,39);var inst_26465 = cljs.core.async.put_BANG_.call(null,inst_26458,inst_26360,done);var state_26492__$1 = state_26492;var statearr_26525_26598 = state_26492__$1;(statearr_26525_26598[2] = inst_26465);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26492__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 43))
{var state_26492__$1 = state_26492;var statearr_26526_26599 = state_26492__$1;(statearr_26526_26599[2] = null);
(statearr_26526_26599[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 29))
{var inst_26476 = (state_26492[2]);var state_26492__$1 = state_26492;var statearr_26527_26600 = state_26492__$1;(statearr_26527_26600[2] = inst_26476);
(statearr_26527_26600[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 44))
{var inst_26485 = (state_26492[2]);var state_26492__$1 = (function (){var statearr_26528 = state_26492;(statearr_26528[29] = inst_26485);
return statearr_26528;
})();var statearr_26529_26601 = state_26492__$1;(statearr_26529_26601[2] = null);
(statearr_26529_26601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 6))
{var inst_26420 = (state_26492[30]);var inst_26419 = cljs.core.deref.call(null,cs);var inst_26420__$1 = cljs.core.keys.call(null,inst_26419);var inst_26421 = cljs.core.count.call(null,inst_26420__$1);var inst_26422 = cljs.core.reset_BANG_.call(null,dctr,inst_26421);var inst_26427 = cljs.core.seq.call(null,inst_26420__$1);var inst_26428 = inst_26427;var inst_26429 = null;var inst_26430 = 0;var inst_26431 = 0;var state_26492__$1 = (function (){var statearr_26530 = state_26492;(statearr_26530[18] = inst_26430);
(statearr_26530[30] = inst_26420__$1);
(statearr_26530[19] = inst_26428);
(statearr_26530[31] = inst_26422);
(statearr_26530[9] = inst_26429);
(statearr_26530[10] = inst_26431);
return statearr_26530;
})();var statearr_26531_26602 = state_26492__$1;(statearr_26531_26602[2] = null);
(statearr_26531_26602[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 28))
{var inst_26428 = (state_26492[19]);var inst_26449 = (state_26492[17]);var inst_26449__$1 = cljs.core.seq.call(null,inst_26428);var state_26492__$1 = (function (){var statearr_26532 = state_26492;(statearr_26532[17] = inst_26449__$1);
return statearr_26532;
})();if(inst_26449__$1)
{var statearr_26533_26603 = state_26492__$1;(statearr_26533_26603[1] = 33);
} else
{var statearr_26534_26604 = state_26492__$1;(statearr_26534_26604[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 25))
{var inst_26430 = (state_26492[18]);var inst_26431 = (state_26492[10]);var inst_26433 = (inst_26431 < inst_26430);var inst_26434 = inst_26433;var state_26492__$1 = state_26492;if(cljs.core.truth_(inst_26434))
{var statearr_26535_26605 = state_26492__$1;(statearr_26535_26605[1] = 27);
} else
{var statearr_26536_26606 = state_26492__$1;(statearr_26536_26606[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 34))
{var state_26492__$1 = state_26492;var statearr_26537_26607 = state_26492__$1;(statearr_26537_26607[2] = null);
(statearr_26537_26607[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 17))
{var state_26492__$1 = state_26492;var statearr_26538_26608 = state_26492__$1;(statearr_26538_26608[2] = null);
(statearr_26538_26608[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 3))
{var inst_26490 = (state_26492[2]);var state_26492__$1 = state_26492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26492__$1,inst_26490);
} else
{if((state_val_26493 === 12))
{var inst_26415 = (state_26492[2]);var state_26492__$1 = state_26492;var statearr_26539_26609 = state_26492__$1;(statearr_26539_26609[2] = inst_26415);
(statearr_26539_26609[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 2))
{var state_26492__$1 = state_26492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26492__$1,4,ch);
} else
{if((state_val_26493 === 23))
{var state_26492__$1 = state_26492;var statearr_26540_26610 = state_26492__$1;(statearr_26540_26610[2] = null);
(statearr_26540_26610[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 35))
{var inst_26474 = (state_26492[2]);var state_26492__$1 = state_26492;var statearr_26541_26611 = state_26492__$1;(statearr_26541_26611[2] = inst_26474);
(statearr_26541_26611[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 19))
{var inst_26389 = (state_26492[7]);var inst_26393 = cljs.core.chunk_first.call(null,inst_26389);var inst_26394 = cljs.core.chunk_rest.call(null,inst_26389);var inst_26395 = cljs.core.count.call(null,inst_26393);var inst_26369 = inst_26394;var inst_26370 = inst_26393;var inst_26371 = inst_26395;var inst_26372 = 0;var state_26492__$1 = (function (){var statearr_26542 = state_26492;(statearr_26542[13] = inst_26370);
(statearr_26542[14] = inst_26371);
(statearr_26542[15] = inst_26372);
(statearr_26542[16] = inst_26369);
return statearr_26542;
})();var statearr_26543_26612 = state_26492__$1;(statearr_26543_26612[2] = null);
(statearr_26543_26612[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 11))
{var inst_26369 = (state_26492[16]);var inst_26389 = (state_26492[7]);var inst_26389__$1 = cljs.core.seq.call(null,inst_26369);var state_26492__$1 = (function (){var statearr_26544 = state_26492;(statearr_26544[7] = inst_26389__$1);
return statearr_26544;
})();if(inst_26389__$1)
{var statearr_26545_26613 = state_26492__$1;(statearr_26545_26613[1] = 16);
} else
{var statearr_26546_26614 = state_26492__$1;(statearr_26546_26614[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 9))
{var inst_26417 = (state_26492[2]);var state_26492__$1 = state_26492;var statearr_26547_26615 = state_26492__$1;(statearr_26547_26615[2] = inst_26417);
(statearr_26547_26615[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 5))
{var inst_26367 = cljs.core.deref.call(null,cs);var inst_26368 = cljs.core.seq.call(null,inst_26367);var inst_26369 = inst_26368;var inst_26370 = null;var inst_26371 = 0;var inst_26372 = 0;var state_26492__$1 = (function (){var statearr_26548 = state_26492;(statearr_26548[13] = inst_26370);
(statearr_26548[14] = inst_26371);
(statearr_26548[15] = inst_26372);
(statearr_26548[16] = inst_26369);
return statearr_26548;
})();var statearr_26549_26616 = state_26492__$1;(statearr_26549_26616[2] = null);
(statearr_26549_26616[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 14))
{var state_26492__$1 = state_26492;var statearr_26550_26617 = state_26492__$1;(statearr_26550_26617[2] = null);
(statearr_26550_26617[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 45))
{var inst_26482 = (state_26492[2]);var state_26492__$1 = state_26492;var statearr_26551_26618 = state_26492__$1;(statearr_26551_26618[2] = inst_26482);
(statearr_26551_26618[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 26))
{var inst_26420 = (state_26492[30]);var inst_26478 = (state_26492[2]);var inst_26479 = cljs.core.seq.call(null,inst_26420);var state_26492__$1 = (function (){var statearr_26552 = state_26492;(statearr_26552[32] = inst_26478);
return statearr_26552;
})();if(inst_26479)
{var statearr_26553_26619 = state_26492__$1;(statearr_26553_26619[1] = 42);
} else
{var statearr_26554_26620 = state_26492__$1;(statearr_26554_26620[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 16))
{var inst_26389 = (state_26492[7]);var inst_26391 = cljs.core.chunked_seq_QMARK_.call(null,inst_26389);var state_26492__$1 = state_26492;if(inst_26391)
{var statearr_26558_26621 = state_26492__$1;(statearr_26558_26621[1] = 19);
} else
{var statearr_26559_26622 = state_26492__$1;(statearr_26559_26622[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 38))
{var inst_26471 = (state_26492[2]);var state_26492__$1 = state_26492;var statearr_26560_26623 = state_26492__$1;(statearr_26560_26623[2] = inst_26471);
(statearr_26560_26623[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 30))
{var inst_26430 = (state_26492[18]);var inst_26428 = (state_26492[19]);var inst_26429 = (state_26492[9]);var inst_26431 = (state_26492[10]);var inst_26445 = (state_26492[2]);var inst_26446 = (inst_26431 + 1);var tmp26555 = inst_26430;var tmp26556 = inst_26428;var tmp26557 = inst_26429;var inst_26428__$1 = tmp26556;var inst_26429__$1 = tmp26557;var inst_26430__$1 = tmp26555;var inst_26431__$1 = inst_26446;var state_26492__$1 = (function (){var statearr_26561 = state_26492;(statearr_26561[33] = inst_26445);
(statearr_26561[18] = inst_26430__$1);
(statearr_26561[19] = inst_26428__$1);
(statearr_26561[9] = inst_26429__$1);
(statearr_26561[10] = inst_26431__$1);
return statearr_26561;
})();var statearr_26562_26624 = state_26492__$1;(statearr_26562_26624[2] = null);
(statearr_26562_26624[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 10))
{var inst_26370 = (state_26492[13]);var inst_26372 = (state_26492[15]);var inst_26378 = cljs.core._nth.call(null,inst_26370,inst_26372);var inst_26379 = cljs.core.nth.call(null,inst_26378,0,null);var inst_26380 = cljs.core.nth.call(null,inst_26378,1,null);var state_26492__$1 = (function (){var statearr_26563 = state_26492;(statearr_26563[28] = inst_26379);
return statearr_26563;
})();if(cljs.core.truth_(inst_26380))
{var statearr_26564_26625 = state_26492__$1;(statearr_26564_26625[1] = 13);
} else
{var statearr_26565_26626 = state_26492__$1;(statearr_26565_26626[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 18))
{var inst_26413 = (state_26492[2]);var state_26492__$1 = state_26492;var statearr_26566_26627 = state_26492__$1;(statearr_26566_26627[2] = inst_26413);
(statearr_26566_26627[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 42))
{var state_26492__$1 = state_26492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26492__$1,45,dchan);
} else
{if((state_val_26493 === 37))
{var inst_26449 = (state_26492[17]);var inst_26458 = cljs.core.first.call(null,inst_26449);var state_26492__$1 = (function (){var statearr_26567 = state_26492;(statearr_26567[25] = inst_26458);
return statearr_26567;
})();var statearr_26568_26628 = state_26492__$1;(statearr_26568_26628[2] = null);
(statearr_26568_26628[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26493 === 8))
{var inst_26371 = (state_26492[14]);var inst_26372 = (state_26492[15]);var inst_26374 = (inst_26372 < inst_26371);var inst_26375 = inst_26374;var state_26492__$1 = state_26492;if(cljs.core.truth_(inst_26375))
{var statearr_26569_26629 = state_26492__$1;(statearr_26569_26629[1] = 10);
} else
{var statearr_26570_26630 = state_26492__$1;(statearr_26570_26630[1] = 11);
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
});})(c__5689__auto___26578,cs,m,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___26578,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_26574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26574[0] = state_machine__5675__auto__);
(statearr_26574[1] = 1);
return statearr_26574;
});
var state_machine__5675__auto____1 = (function (state_26492){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_26492);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e26575){if((e26575 instanceof Object))
{var ex__5678__auto__ = e26575;var statearr_26576_26631 = state_26492;(statearr_26576_26631[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26492);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26632 = state_26492;
state_26492 = G__26632;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_26492){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_26492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___26578,cs,m,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_26577 = f__5690__auto__.call(null);(statearr_26577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___26578);
return statearr_26577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___26578,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj26634 = {};return obj26634;
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
;var m = (function (){if(typeof cljs.core.async.t26744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26744 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26745){
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
this.meta26745 = meta26745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26744.cljs$lang$type = true;
cljs.core.async.t26744.cljs$lang$ctorStr = "cljs.core.async/t26744";
cljs.core.async.t26744.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t26744");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26744.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26744.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26744.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26744.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26744.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26744.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26744.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26746){var self__ = this;
var _26746__$1 = this;return self__.meta26745;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26746,meta26745__$1){var self__ = this;
var _26746__$1 = this;return (new cljs.core.async.t26744(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26745__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26744 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26744(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26745){return (new cljs.core.async.t26744(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26745));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26744(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5689__auto___26853 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___26853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___26853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26811){var state_val_26812 = (state_26811[1]);if((state_val_26812 === 7))
{var inst_26760 = (state_26811[7]);var inst_26765 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26760);var state_26811__$1 = state_26811;var statearr_26813_26854 = state_26811__$1;(statearr_26813_26854[2] = inst_26765);
(statearr_26813_26854[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 20))
{var inst_26775 = (state_26811[8]);var state_26811__$1 = state_26811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26811__$1,23,out,inst_26775);
} else
{if((state_val_26812 === 1))
{var inst_26750 = (state_26811[9]);var inst_26750__$1 = calc_state.call(null);var inst_26751 = cljs.core.seq_QMARK_.call(null,inst_26750__$1);var state_26811__$1 = (function (){var statearr_26814 = state_26811;(statearr_26814[9] = inst_26750__$1);
return statearr_26814;
})();if(inst_26751)
{var statearr_26815_26855 = state_26811__$1;(statearr_26815_26855[1] = 2);
} else
{var statearr_26816_26856 = state_26811__$1;(statearr_26816_26856[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 4))
{var inst_26750 = (state_26811[9]);var inst_26756 = (state_26811[2]);var inst_26757 = cljs.core.get.call(null,inst_26756,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26758 = cljs.core.get.call(null,inst_26756,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26759 = cljs.core.get.call(null,inst_26756,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26760 = inst_26750;var state_26811__$1 = (function (){var statearr_26817 = state_26811;(statearr_26817[7] = inst_26760);
(statearr_26817[10] = inst_26759);
(statearr_26817[11] = inst_26757);
(statearr_26817[12] = inst_26758);
return statearr_26817;
})();var statearr_26818_26857 = state_26811__$1;(statearr_26818_26857[2] = null);
(statearr_26818_26857[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 15))
{var state_26811__$1 = state_26811;var statearr_26819_26858 = state_26811__$1;(statearr_26819_26858[2] = null);
(statearr_26819_26858[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 21))
{var state_26811__$1 = state_26811;var statearr_26820_26859 = state_26811__$1;(statearr_26820_26859[2] = null);
(statearr_26820_26859[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 13))
{var inst_26807 = (state_26811[2]);var state_26811__$1 = state_26811;var statearr_26821_26860 = state_26811__$1;(statearr_26821_26860[2] = inst_26807);
(statearr_26821_26860[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 22))
{var inst_26768 = (state_26811[13]);var inst_26804 = (state_26811[2]);var inst_26760 = inst_26768;var state_26811__$1 = (function (){var statearr_26822 = state_26811;(statearr_26822[7] = inst_26760);
(statearr_26822[14] = inst_26804);
return statearr_26822;
})();var statearr_26823_26861 = state_26811__$1;(statearr_26823_26861[2] = null);
(statearr_26823_26861[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 6))
{var inst_26809 = (state_26811[2]);var state_26811__$1 = state_26811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26811__$1,inst_26809);
} else
{if((state_val_26812 === 17))
{var inst_26790 = (state_26811[15]);var state_26811__$1 = state_26811;var statearr_26824_26862 = state_26811__$1;(statearr_26824_26862[2] = inst_26790);
(statearr_26824_26862[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 3))
{var inst_26750 = (state_26811[9]);var state_26811__$1 = state_26811;var statearr_26825_26863 = state_26811__$1;(statearr_26825_26863[2] = inst_26750);
(statearr_26825_26863[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 12))
{var inst_26776 = (state_26811[16]);var inst_26771 = (state_26811[17]);var inst_26790 = (state_26811[15]);var inst_26790__$1 = inst_26771.call(null,inst_26776);var state_26811__$1 = (function (){var statearr_26826 = state_26811;(statearr_26826[15] = inst_26790__$1);
return statearr_26826;
})();if(cljs.core.truth_(inst_26790__$1))
{var statearr_26827_26864 = state_26811__$1;(statearr_26827_26864[1] = 17);
} else
{var statearr_26828_26865 = state_26811__$1;(statearr_26828_26865[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 2))
{var inst_26750 = (state_26811[9]);var inst_26753 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26750);var state_26811__$1 = state_26811;var statearr_26829_26866 = state_26811__$1;(statearr_26829_26866[2] = inst_26753);
(statearr_26829_26866[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 23))
{var inst_26801 = (state_26811[2]);var state_26811__$1 = state_26811;var statearr_26830_26867 = state_26811__$1;(statearr_26830_26867[2] = inst_26801);
(statearr_26830_26867[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 19))
{var inst_26798 = (state_26811[2]);var state_26811__$1 = state_26811;if(cljs.core.truth_(inst_26798))
{var statearr_26831_26868 = state_26811__$1;(statearr_26831_26868[1] = 20);
} else
{var statearr_26832_26869 = state_26811__$1;(statearr_26832_26869[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 11))
{var inst_26775 = (state_26811[8]);var inst_26781 = (inst_26775 == null);var state_26811__$1 = state_26811;if(cljs.core.truth_(inst_26781))
{var statearr_26833_26870 = state_26811__$1;(statearr_26833_26870[1] = 14);
} else
{var statearr_26834_26871 = state_26811__$1;(statearr_26834_26871[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 9))
{var inst_26768 = (state_26811[13]);var inst_26768__$1 = (state_26811[2]);var inst_26769 = cljs.core.get.call(null,inst_26768__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26770 = cljs.core.get.call(null,inst_26768__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26771 = cljs.core.get.call(null,inst_26768__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26811__$1 = (function (){var statearr_26835 = state_26811;(statearr_26835[18] = inst_26770);
(statearr_26835[13] = inst_26768__$1);
(statearr_26835[17] = inst_26771);
return statearr_26835;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26811__$1,10,inst_26769);
} else
{if((state_val_26812 === 5))
{var inst_26760 = (state_26811[7]);var inst_26763 = cljs.core.seq_QMARK_.call(null,inst_26760);var state_26811__$1 = state_26811;if(inst_26763)
{var statearr_26836_26872 = state_26811__$1;(statearr_26836_26872[1] = 7);
} else
{var statearr_26837_26873 = state_26811__$1;(statearr_26837_26873[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 14))
{var inst_26776 = (state_26811[16]);var inst_26783 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26776);var state_26811__$1 = state_26811;var statearr_26838_26874 = state_26811__$1;(statearr_26838_26874[2] = inst_26783);
(statearr_26838_26874[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 16))
{var inst_26786 = (state_26811[2]);var inst_26787 = calc_state.call(null);var inst_26760 = inst_26787;var state_26811__$1 = (function (){var statearr_26839 = state_26811;(statearr_26839[7] = inst_26760);
(statearr_26839[19] = inst_26786);
return statearr_26839;
})();var statearr_26840_26875 = state_26811__$1;(statearr_26840_26875[2] = null);
(statearr_26840_26875[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 10))
{var inst_26776 = (state_26811[16]);var inst_26775 = (state_26811[8]);var inst_26774 = (state_26811[2]);var inst_26775__$1 = cljs.core.nth.call(null,inst_26774,0,null);var inst_26776__$1 = cljs.core.nth.call(null,inst_26774,1,null);var inst_26777 = (inst_26775__$1 == null);var inst_26778 = cljs.core._EQ_.call(null,inst_26776__$1,change);var inst_26779 = (inst_26777) || (inst_26778);var state_26811__$1 = (function (){var statearr_26841 = state_26811;(statearr_26841[16] = inst_26776__$1);
(statearr_26841[8] = inst_26775__$1);
return statearr_26841;
})();if(cljs.core.truth_(inst_26779))
{var statearr_26842_26876 = state_26811__$1;(statearr_26842_26876[1] = 11);
} else
{var statearr_26843_26877 = state_26811__$1;(statearr_26843_26877[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 18))
{var inst_26776 = (state_26811[16]);var inst_26770 = (state_26811[18]);var inst_26771 = (state_26811[17]);var inst_26793 = cljs.core.empty_QMARK_.call(null,inst_26771);var inst_26794 = inst_26770.call(null,inst_26776);var inst_26795 = cljs.core.not.call(null,inst_26794);var inst_26796 = (inst_26793) && (inst_26795);var state_26811__$1 = state_26811;var statearr_26844_26878 = state_26811__$1;(statearr_26844_26878[2] = inst_26796);
(statearr_26844_26878[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26812 === 8))
{var inst_26760 = (state_26811[7]);var state_26811__$1 = state_26811;var statearr_26845_26879 = state_26811__$1;(statearr_26845_26879[2] = inst_26760);
(statearr_26845_26879[1] = 9);
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
});})(c__5689__auto___26853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5674__auto__,c__5689__auto___26853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_26849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26849[0] = state_machine__5675__auto__);
(statearr_26849[1] = 1);
return statearr_26849;
});
var state_machine__5675__auto____1 = (function (state_26811){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_26811);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e26850){if((e26850 instanceof Object))
{var ex__5678__auto__ = e26850;var statearr_26851_26880 = state_26811;(statearr_26851_26880[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26811);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26881 = state_26811;
state_26811 = G__26881;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_26811){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_26811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___26853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5691__auto__ = (function (){var statearr_26852 = f__5690__auto__.call(null);(statearr_26852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___26853);
return statearr_26852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___26853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj26883 = {};return obj26883;
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
return (function (p1__26884_SHARP_){if(cljs.core.truth_(p1__26884_SHARP_.call(null,topic)))
{return p1__26884_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26884_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3539__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27009 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27009 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27010){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27010 = meta27010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27009.cljs$lang$type = true;
cljs.core.async.t27009.cljs$lang$ctorStr = "cljs.core.async/t27009";
cljs.core.async.t27009.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t27009");
});})(mults,ensure_mult))
;
cljs.core.async.t27009.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27009.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27009.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27009.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27009.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27009.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27009.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27011){var self__ = this;
var _27011__$1 = this;return self__.meta27010;
});})(mults,ensure_mult))
;
cljs.core.async.t27009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27011,meta27010__$1){var self__ = this;
var _27011__$1 = this;return (new cljs.core.async.t27009(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27010__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27009 = ((function (mults,ensure_mult){
return (function __GT_t27009(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27010){return (new cljs.core.async.t27009(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27010));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27009(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5689__auto___27133 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27133,mults,ensure_mult,p){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27133,mults,ensure_mult,p){
return (function (state_27085){var state_val_27086 = (state_27085[1]);if((state_val_27086 === 7))
{var inst_27081 = (state_27085[2]);var state_27085__$1 = state_27085;var statearr_27087_27134 = state_27085__$1;(statearr_27087_27134[2] = inst_27081);
(statearr_27087_27134[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 20))
{var state_27085__$1 = state_27085;var statearr_27088_27135 = state_27085__$1;(statearr_27088_27135[2] = null);
(statearr_27088_27135[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 1))
{var state_27085__$1 = state_27085;var statearr_27089_27136 = state_27085__$1;(statearr_27089_27136[2] = null);
(statearr_27089_27136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 24))
{var inst_27014 = (state_27085[7]);var inst_27064 = (state_27085[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27085,23,Object,null,22);var inst_27071 = cljs.core.async.muxch_STAR_.call(null,inst_27064);var state_27085__$1 = state_27085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27085__$1,25,inst_27071,inst_27014);
} else
{if((state_val_27086 === 4))
{var inst_27014 = (state_27085[7]);var inst_27014__$1 = (state_27085[2]);var inst_27015 = (inst_27014__$1 == null);var state_27085__$1 = (function (){var statearr_27090 = state_27085;(statearr_27090[7] = inst_27014__$1);
return statearr_27090;
})();if(cljs.core.truth_(inst_27015))
{var statearr_27091_27137 = state_27085__$1;(statearr_27091_27137[1] = 5);
} else
{var statearr_27092_27138 = state_27085__$1;(statearr_27092_27138[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 15))
{var inst_27056 = (state_27085[2]);var state_27085__$1 = state_27085;var statearr_27093_27139 = state_27085__$1;(statearr_27093_27139[2] = inst_27056);
(statearr_27093_27139[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 21))
{var inst_27078 = (state_27085[2]);var state_27085__$1 = (function (){var statearr_27094 = state_27085;(statearr_27094[9] = inst_27078);
return statearr_27094;
})();var statearr_27095_27140 = state_27085__$1;(statearr_27095_27140[2] = null);
(statearr_27095_27140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 13))
{var inst_27038 = (state_27085[10]);var inst_27040 = cljs.core.chunked_seq_QMARK_.call(null,inst_27038);var state_27085__$1 = state_27085;if(inst_27040)
{var statearr_27096_27141 = state_27085__$1;(statearr_27096_27141[1] = 16);
} else
{var statearr_27097_27142 = state_27085__$1;(statearr_27097_27142[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 22))
{var inst_27075 = (state_27085[2]);var state_27085__$1 = state_27085;var statearr_27098_27143 = state_27085__$1;(statearr_27098_27143[2] = inst_27075);
(statearr_27098_27143[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 6))
{var inst_27062 = (state_27085[11]);var inst_27014 = (state_27085[7]);var inst_27064 = (state_27085[8]);var inst_27062__$1 = topic_fn.call(null,inst_27014);var inst_27063 = cljs.core.deref.call(null,mults);var inst_27064__$1 = cljs.core.get.call(null,inst_27063,inst_27062__$1);var state_27085__$1 = (function (){var statearr_27099 = state_27085;(statearr_27099[11] = inst_27062__$1);
(statearr_27099[8] = inst_27064__$1);
return statearr_27099;
})();if(cljs.core.truth_(inst_27064__$1))
{var statearr_27100_27144 = state_27085__$1;(statearr_27100_27144[1] = 19);
} else
{var statearr_27101_27145 = state_27085__$1;(statearr_27101_27145[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 25))
{var inst_27073 = (state_27085[2]);var state_27085__$1 = state_27085;var statearr_27102_27146 = state_27085__$1;(statearr_27102_27146[2] = inst_27073);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27085__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 17))
{var inst_27038 = (state_27085[10]);var inst_27047 = cljs.core.first.call(null,inst_27038);var inst_27048 = cljs.core.async.muxch_STAR_.call(null,inst_27047);var inst_27049 = cljs.core.async.close_BANG_.call(null,inst_27048);var inst_27050 = cljs.core.next.call(null,inst_27038);var inst_27024 = inst_27050;var inst_27025 = null;var inst_27026 = 0;var inst_27027 = 0;var state_27085__$1 = (function (){var statearr_27103 = state_27085;(statearr_27103[12] = inst_27026);
(statearr_27103[13] = inst_27025);
(statearr_27103[14] = inst_27024);
(statearr_27103[15] = inst_27027);
(statearr_27103[16] = inst_27049);
return statearr_27103;
})();var statearr_27104_27147 = state_27085__$1;(statearr_27104_27147[2] = null);
(statearr_27104_27147[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 3))
{var inst_27083 = (state_27085[2]);var state_27085__$1 = state_27085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27085__$1,inst_27083);
} else
{if((state_val_27086 === 12))
{var inst_27058 = (state_27085[2]);var state_27085__$1 = state_27085;var statearr_27105_27148 = state_27085__$1;(statearr_27105_27148[2] = inst_27058);
(statearr_27105_27148[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 2))
{var state_27085__$1 = state_27085;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27085__$1,4,ch);
} else
{if((state_val_27086 === 23))
{var inst_27062 = (state_27085[11]);var inst_27066 = (state_27085[2]);var inst_27067 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27062);var state_27085__$1 = (function (){var statearr_27106 = state_27085;(statearr_27106[17] = inst_27066);
return statearr_27106;
})();var statearr_27107_27149 = state_27085__$1;(statearr_27107_27149[2] = inst_27067);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27085__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 19))
{var state_27085__$1 = state_27085;var statearr_27108_27150 = state_27085__$1;(statearr_27108_27150[2] = null);
(statearr_27108_27150[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 11))
{var inst_27038 = (state_27085[10]);var inst_27024 = (state_27085[14]);var inst_27038__$1 = cljs.core.seq.call(null,inst_27024);var state_27085__$1 = (function (){var statearr_27109 = state_27085;(statearr_27109[10] = inst_27038__$1);
return statearr_27109;
})();if(inst_27038__$1)
{var statearr_27110_27151 = state_27085__$1;(statearr_27110_27151[1] = 13);
} else
{var statearr_27111_27152 = state_27085__$1;(statearr_27111_27152[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 9))
{var inst_27060 = (state_27085[2]);var state_27085__$1 = state_27085;var statearr_27112_27153 = state_27085__$1;(statearr_27112_27153[2] = inst_27060);
(statearr_27112_27153[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 5))
{var inst_27021 = cljs.core.deref.call(null,mults);var inst_27022 = cljs.core.vals.call(null,inst_27021);var inst_27023 = cljs.core.seq.call(null,inst_27022);var inst_27024 = inst_27023;var inst_27025 = null;var inst_27026 = 0;var inst_27027 = 0;var state_27085__$1 = (function (){var statearr_27113 = state_27085;(statearr_27113[12] = inst_27026);
(statearr_27113[13] = inst_27025);
(statearr_27113[14] = inst_27024);
(statearr_27113[15] = inst_27027);
return statearr_27113;
})();var statearr_27114_27154 = state_27085__$1;(statearr_27114_27154[2] = null);
(statearr_27114_27154[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 14))
{var state_27085__$1 = state_27085;var statearr_27118_27155 = state_27085__$1;(statearr_27118_27155[2] = null);
(statearr_27118_27155[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 16))
{var inst_27038 = (state_27085[10]);var inst_27042 = cljs.core.chunk_first.call(null,inst_27038);var inst_27043 = cljs.core.chunk_rest.call(null,inst_27038);var inst_27044 = cljs.core.count.call(null,inst_27042);var inst_27024 = inst_27043;var inst_27025 = inst_27042;var inst_27026 = inst_27044;var inst_27027 = 0;var state_27085__$1 = (function (){var statearr_27119 = state_27085;(statearr_27119[12] = inst_27026);
(statearr_27119[13] = inst_27025);
(statearr_27119[14] = inst_27024);
(statearr_27119[15] = inst_27027);
return statearr_27119;
})();var statearr_27120_27156 = state_27085__$1;(statearr_27120_27156[2] = null);
(statearr_27120_27156[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 10))
{var inst_27026 = (state_27085[12]);var inst_27025 = (state_27085[13]);var inst_27024 = (state_27085[14]);var inst_27027 = (state_27085[15]);var inst_27032 = cljs.core._nth.call(null,inst_27025,inst_27027);var inst_27033 = cljs.core.async.muxch_STAR_.call(null,inst_27032);var inst_27034 = cljs.core.async.close_BANG_.call(null,inst_27033);var inst_27035 = (inst_27027 + 1);var tmp27115 = inst_27026;var tmp27116 = inst_27025;var tmp27117 = inst_27024;var inst_27024__$1 = tmp27117;var inst_27025__$1 = tmp27116;var inst_27026__$1 = tmp27115;var inst_27027__$1 = inst_27035;var state_27085__$1 = (function (){var statearr_27121 = state_27085;(statearr_27121[12] = inst_27026__$1);
(statearr_27121[18] = inst_27034);
(statearr_27121[13] = inst_27025__$1);
(statearr_27121[14] = inst_27024__$1);
(statearr_27121[15] = inst_27027__$1);
return statearr_27121;
})();var statearr_27122_27157 = state_27085__$1;(statearr_27122_27157[2] = null);
(statearr_27122_27157[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 18))
{var inst_27053 = (state_27085[2]);var state_27085__$1 = state_27085;var statearr_27123_27158 = state_27085__$1;(statearr_27123_27158[2] = inst_27053);
(statearr_27123_27158[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27086 === 8))
{var inst_27026 = (state_27085[12]);var inst_27027 = (state_27085[15]);var inst_27029 = (inst_27027 < inst_27026);var inst_27030 = inst_27029;var state_27085__$1 = state_27085;if(cljs.core.truth_(inst_27030))
{var statearr_27124_27159 = state_27085__$1;(statearr_27124_27159[1] = 10);
} else
{var statearr_27125_27160 = state_27085__$1;(statearr_27125_27160[1] = 11);
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
});})(c__5689__auto___27133,mults,ensure_mult,p))
;return ((function (switch__5674__auto__,c__5689__auto___27133,mults,ensure_mult,p){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27129[0] = state_machine__5675__auto__);
(statearr_27129[1] = 1);
return statearr_27129;
});
var state_machine__5675__auto____1 = (function (state_27085){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27085);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27130){if((e27130 instanceof Object))
{var ex__5678__auto__ = e27130;var statearr_27131_27161 = state_27085;(statearr_27131_27161[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27085);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27162 = state_27085;
state_27085 = G__27162;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27085){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27133,mults,ensure_mult,p))
})();var state__5691__auto__ = (function (){var statearr_27132 = f__5690__auto__.call(null);(statearr_27132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27133);
return statearr_27132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27133,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5689__auto___27299 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27269){var state_val_27270 = (state_27269[1]);if((state_val_27270 === 7))
{var state_27269__$1 = state_27269;var statearr_27271_27300 = state_27269__$1;(statearr_27271_27300[2] = null);
(statearr_27271_27300[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 1))
{var state_27269__$1 = state_27269;var statearr_27272_27301 = state_27269__$1;(statearr_27272_27301[2] = null);
(statearr_27272_27301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 4))
{var inst_27233 = (state_27269[7]);var inst_27235 = (inst_27233 < cnt);var state_27269__$1 = state_27269;if(cljs.core.truth_(inst_27235))
{var statearr_27273_27302 = state_27269__$1;(statearr_27273_27302[1] = 6);
} else
{var statearr_27274_27303 = state_27269__$1;(statearr_27274_27303[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 15))
{var inst_27265 = (state_27269[2]);var state_27269__$1 = state_27269;var statearr_27275_27304 = state_27269__$1;(statearr_27275_27304[2] = inst_27265);
(statearr_27275_27304[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 13))
{var inst_27258 = cljs.core.async.close_BANG_.call(null,out);var state_27269__$1 = state_27269;var statearr_27276_27305 = state_27269__$1;(statearr_27276_27305[2] = inst_27258);
(statearr_27276_27305[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 6))
{var state_27269__$1 = state_27269;var statearr_27277_27306 = state_27269__$1;(statearr_27277_27306[2] = null);
(statearr_27277_27306[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 3))
{var inst_27267 = (state_27269[2]);var state_27269__$1 = state_27269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27269__$1,inst_27267);
} else
{if((state_val_27270 === 12))
{var inst_27255 = (state_27269[8]);var inst_27255__$1 = (state_27269[2]);var inst_27256 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27255__$1);var state_27269__$1 = (function (){var statearr_27278 = state_27269;(statearr_27278[8] = inst_27255__$1);
return statearr_27278;
})();if(cljs.core.truth_(inst_27256))
{var statearr_27279_27307 = state_27269__$1;(statearr_27279_27307[1] = 13);
} else
{var statearr_27280_27308 = state_27269__$1;(statearr_27280_27308[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 2))
{var inst_27232 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27233 = 0;var state_27269__$1 = (function (){var statearr_27281 = state_27269;(statearr_27281[7] = inst_27233);
(statearr_27281[9] = inst_27232);
return statearr_27281;
})();var statearr_27282_27309 = state_27269__$1;(statearr_27282_27309[2] = null);
(statearr_27282_27309[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 11))
{var inst_27233 = (state_27269[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27269,10,Object,null,9);var inst_27242 = chs__$1.call(null,inst_27233);var inst_27243 = done.call(null,inst_27233);var inst_27244 = cljs.core.async.take_BANG_.call(null,inst_27242,inst_27243);var state_27269__$1 = state_27269;var statearr_27283_27310 = state_27269__$1;(statearr_27283_27310[2] = inst_27244);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27269__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 9))
{var inst_27233 = (state_27269[7]);var inst_27246 = (state_27269[2]);var inst_27247 = (inst_27233 + 1);var inst_27233__$1 = inst_27247;var state_27269__$1 = (function (){var statearr_27284 = state_27269;(statearr_27284[7] = inst_27233__$1);
(statearr_27284[10] = inst_27246);
return statearr_27284;
})();var statearr_27285_27311 = state_27269__$1;(statearr_27285_27311[2] = null);
(statearr_27285_27311[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 5))
{var inst_27253 = (state_27269[2]);var state_27269__$1 = (function (){var statearr_27286 = state_27269;(statearr_27286[11] = inst_27253);
return statearr_27286;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27269__$1,12,dchan);
} else
{if((state_val_27270 === 14))
{var inst_27255 = (state_27269[8]);var inst_27260 = cljs.core.apply.call(null,f,inst_27255);var state_27269__$1 = state_27269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27269__$1,16,out,inst_27260);
} else
{if((state_val_27270 === 16))
{var inst_27262 = (state_27269[2]);var state_27269__$1 = (function (){var statearr_27287 = state_27269;(statearr_27287[12] = inst_27262);
return statearr_27287;
})();var statearr_27288_27312 = state_27269__$1;(statearr_27288_27312[2] = null);
(statearr_27288_27312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 10))
{var inst_27237 = (state_27269[2]);var inst_27238 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27269__$1 = (function (){var statearr_27289 = state_27269;(statearr_27289[13] = inst_27237);
return statearr_27289;
})();var statearr_27290_27313 = state_27269__$1;(statearr_27290_27313[2] = inst_27238);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27269__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27270 === 8))
{var inst_27251 = (state_27269[2]);var state_27269__$1 = state_27269;var statearr_27291_27314 = state_27269__$1;(statearr_27291_27314[2] = inst_27251);
(statearr_27291_27314[1] = 5);
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
});})(c__5689__auto___27299,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___27299,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27295[0] = state_machine__5675__auto__);
(statearr_27295[1] = 1);
return statearr_27295;
});
var state_machine__5675__auto____1 = (function (state_27269){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27269);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27296){if((e27296 instanceof Object))
{var ex__5678__auto__ = e27296;var statearr_27297_27315 = state_27269;(statearr_27297_27315[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27316 = state_27269;
state_27269 = G__27316;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27269){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27299,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_27298 = f__5690__auto__.call(null);(statearr_27298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27299);
return statearr_27298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27299,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___27424 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27424,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27424,out){
return (function (state_27400){var state_val_27401 = (state_27400[1]);if((state_val_27401 === 7))
{var inst_27379 = (state_27400[7]);var inst_27380 = (state_27400[8]);var inst_27379__$1 = (state_27400[2]);var inst_27380__$1 = cljs.core.nth.call(null,inst_27379__$1,0,null);var inst_27381 = cljs.core.nth.call(null,inst_27379__$1,1,null);var inst_27382 = (inst_27380__$1 == null);var state_27400__$1 = (function (){var statearr_27402 = state_27400;(statearr_27402[9] = inst_27381);
(statearr_27402[7] = inst_27379__$1);
(statearr_27402[8] = inst_27380__$1);
return statearr_27402;
})();if(cljs.core.truth_(inst_27382))
{var statearr_27403_27425 = state_27400__$1;(statearr_27403_27425[1] = 8);
} else
{var statearr_27404_27426 = state_27400__$1;(statearr_27404_27426[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27401 === 1))
{var inst_27371 = cljs.core.vec.call(null,chs);var inst_27372 = inst_27371;var state_27400__$1 = (function (){var statearr_27405 = state_27400;(statearr_27405[10] = inst_27372);
return statearr_27405;
})();var statearr_27406_27427 = state_27400__$1;(statearr_27406_27427[2] = null);
(statearr_27406_27427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27401 === 4))
{var inst_27372 = (state_27400[10]);var state_27400__$1 = state_27400;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27400__$1,7,inst_27372);
} else
{if((state_val_27401 === 6))
{var inst_27396 = (state_27400[2]);var state_27400__$1 = state_27400;var statearr_27407_27428 = state_27400__$1;(statearr_27407_27428[2] = inst_27396);
(statearr_27407_27428[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27401 === 3))
{var inst_27398 = (state_27400[2]);var state_27400__$1 = state_27400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27400__$1,inst_27398);
} else
{if((state_val_27401 === 2))
{var inst_27372 = (state_27400[10]);var inst_27374 = cljs.core.count.call(null,inst_27372);var inst_27375 = (inst_27374 > 0);var state_27400__$1 = state_27400;if(cljs.core.truth_(inst_27375))
{var statearr_27409_27429 = state_27400__$1;(statearr_27409_27429[1] = 4);
} else
{var statearr_27410_27430 = state_27400__$1;(statearr_27410_27430[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27401 === 11))
{var inst_27372 = (state_27400[10]);var inst_27389 = (state_27400[2]);var tmp27408 = inst_27372;var inst_27372__$1 = tmp27408;var state_27400__$1 = (function (){var statearr_27411 = state_27400;(statearr_27411[11] = inst_27389);
(statearr_27411[10] = inst_27372__$1);
return statearr_27411;
})();var statearr_27412_27431 = state_27400__$1;(statearr_27412_27431[2] = null);
(statearr_27412_27431[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27401 === 9))
{var inst_27380 = (state_27400[8]);var state_27400__$1 = state_27400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27400__$1,11,out,inst_27380);
} else
{if((state_val_27401 === 5))
{var inst_27394 = cljs.core.async.close_BANG_.call(null,out);var state_27400__$1 = state_27400;var statearr_27413_27432 = state_27400__$1;(statearr_27413_27432[2] = inst_27394);
(statearr_27413_27432[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27401 === 10))
{var inst_27392 = (state_27400[2]);var state_27400__$1 = state_27400;var statearr_27414_27433 = state_27400__$1;(statearr_27414_27433[2] = inst_27392);
(statearr_27414_27433[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27401 === 8))
{var inst_27381 = (state_27400[9]);var inst_27379 = (state_27400[7]);var inst_27380 = (state_27400[8]);var inst_27372 = (state_27400[10]);var inst_27384 = (function (){var c = inst_27381;var v = inst_27380;var vec__27377 = inst_27379;var cs = inst_27372;return ((function (c,v,vec__27377,cs,inst_27381,inst_27379,inst_27380,inst_27372,state_val_27401,c__5689__auto___27424,out){
return (function (p1__27317_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27317_SHARP_);
});
;})(c,v,vec__27377,cs,inst_27381,inst_27379,inst_27380,inst_27372,state_val_27401,c__5689__auto___27424,out))
})();var inst_27385 = cljs.core.filterv.call(null,inst_27384,inst_27372);var inst_27372__$1 = inst_27385;var state_27400__$1 = (function (){var statearr_27415 = state_27400;(statearr_27415[10] = inst_27372__$1);
return statearr_27415;
})();var statearr_27416_27434 = state_27400__$1;(statearr_27416_27434[2] = null);
(statearr_27416_27434[1] = 2);
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
});})(c__5689__auto___27424,out))
;return ((function (switch__5674__auto__,c__5689__auto___27424,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27420 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27420[0] = state_machine__5675__auto__);
(statearr_27420[1] = 1);
return statearr_27420;
});
var state_machine__5675__auto____1 = (function (state_27400){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27400);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27421){if((e27421 instanceof Object))
{var ex__5678__auto__ = e27421;var statearr_27422_27435 = state_27400;(statearr_27422_27435[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27400);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27421;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27436 = state_27400;
state_27400 = G__27436;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27400){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27424,out))
})();var state__5691__auto__ = (function (){var statearr_27423 = f__5690__auto__.call(null);(statearr_27423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27424);
return statearr_27423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27424,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___27529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27529,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27529,out){
return (function (state_27506){var state_val_27507 = (state_27506[1]);if((state_val_27507 === 7))
{var inst_27488 = (state_27506[7]);var inst_27488__$1 = (state_27506[2]);var inst_27489 = (inst_27488__$1 == null);var inst_27490 = cljs.core.not.call(null,inst_27489);var state_27506__$1 = (function (){var statearr_27508 = state_27506;(statearr_27508[7] = inst_27488__$1);
return statearr_27508;
})();if(inst_27490)
{var statearr_27509_27530 = state_27506__$1;(statearr_27509_27530[1] = 8);
} else
{var statearr_27510_27531 = state_27506__$1;(statearr_27510_27531[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 1))
{var inst_27483 = 0;var state_27506__$1 = (function (){var statearr_27511 = state_27506;(statearr_27511[8] = inst_27483);
return statearr_27511;
})();var statearr_27512_27532 = state_27506__$1;(statearr_27512_27532[2] = null);
(statearr_27512_27532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 4))
{var state_27506__$1 = state_27506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27506__$1,7,ch);
} else
{if((state_val_27507 === 6))
{var inst_27501 = (state_27506[2]);var state_27506__$1 = state_27506;var statearr_27513_27533 = state_27506__$1;(statearr_27513_27533[2] = inst_27501);
(statearr_27513_27533[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 3))
{var inst_27503 = (state_27506[2]);var inst_27504 = cljs.core.async.close_BANG_.call(null,out);var state_27506__$1 = (function (){var statearr_27514 = state_27506;(statearr_27514[9] = inst_27503);
return statearr_27514;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27506__$1,inst_27504);
} else
{if((state_val_27507 === 2))
{var inst_27483 = (state_27506[8]);var inst_27485 = (inst_27483 < n);var state_27506__$1 = state_27506;if(cljs.core.truth_(inst_27485))
{var statearr_27515_27534 = state_27506__$1;(statearr_27515_27534[1] = 4);
} else
{var statearr_27516_27535 = state_27506__$1;(statearr_27516_27535[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 11))
{var inst_27483 = (state_27506[8]);var inst_27493 = (state_27506[2]);var inst_27494 = (inst_27483 + 1);var inst_27483__$1 = inst_27494;var state_27506__$1 = (function (){var statearr_27517 = state_27506;(statearr_27517[10] = inst_27493);
(statearr_27517[8] = inst_27483__$1);
return statearr_27517;
})();var statearr_27518_27536 = state_27506__$1;(statearr_27518_27536[2] = null);
(statearr_27518_27536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 9))
{var state_27506__$1 = state_27506;var statearr_27519_27537 = state_27506__$1;(statearr_27519_27537[2] = null);
(statearr_27519_27537[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 5))
{var state_27506__$1 = state_27506;var statearr_27520_27538 = state_27506__$1;(statearr_27520_27538[2] = null);
(statearr_27520_27538[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 10))
{var inst_27498 = (state_27506[2]);var state_27506__$1 = state_27506;var statearr_27521_27539 = state_27506__$1;(statearr_27521_27539[2] = inst_27498);
(statearr_27521_27539[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 8))
{var inst_27488 = (state_27506[7]);var state_27506__$1 = state_27506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27506__$1,11,out,inst_27488);
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
});})(c__5689__auto___27529,out))
;return ((function (switch__5674__auto__,c__5689__auto___27529,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27525 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27525[0] = state_machine__5675__auto__);
(statearr_27525[1] = 1);
return statearr_27525;
});
var state_machine__5675__auto____1 = (function (state_27506){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27506);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27526){if((e27526 instanceof Object))
{var ex__5678__auto__ = e27526;var statearr_27527_27540 = state_27506;(statearr_27527_27540[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27506);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27541 = state_27506;
state_27506 = G__27541;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27506){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27529,out))
})();var state__5691__auto__ = (function (){var statearr_27528 = f__5690__auto__.call(null);(statearr_27528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27529);
return statearr_27528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27529,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___27638 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27638,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27638,out){
return (function (state_27613){var state_val_27614 = (state_27613[1]);if((state_val_27614 === 7))
{var inst_27608 = (state_27613[2]);var state_27613__$1 = state_27613;var statearr_27615_27639 = state_27613__$1;(statearr_27615_27639[2] = inst_27608);
(statearr_27615_27639[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27614 === 1))
{var inst_27590 = null;var state_27613__$1 = (function (){var statearr_27616 = state_27613;(statearr_27616[7] = inst_27590);
return statearr_27616;
})();var statearr_27617_27640 = state_27613__$1;(statearr_27617_27640[2] = null);
(statearr_27617_27640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27614 === 4))
{var inst_27593 = (state_27613[8]);var inst_27593__$1 = (state_27613[2]);var inst_27594 = (inst_27593__$1 == null);var inst_27595 = cljs.core.not.call(null,inst_27594);var state_27613__$1 = (function (){var statearr_27618 = state_27613;(statearr_27618[8] = inst_27593__$1);
return statearr_27618;
})();if(inst_27595)
{var statearr_27619_27641 = state_27613__$1;(statearr_27619_27641[1] = 5);
} else
{var statearr_27620_27642 = state_27613__$1;(statearr_27620_27642[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27614 === 6))
{var state_27613__$1 = state_27613;var statearr_27621_27643 = state_27613__$1;(statearr_27621_27643[2] = null);
(statearr_27621_27643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27614 === 3))
{var inst_27610 = (state_27613[2]);var inst_27611 = cljs.core.async.close_BANG_.call(null,out);var state_27613__$1 = (function (){var statearr_27622 = state_27613;(statearr_27622[9] = inst_27610);
return statearr_27622;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27613__$1,inst_27611);
} else
{if((state_val_27614 === 2))
{var state_27613__$1 = state_27613;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27613__$1,4,ch);
} else
{if((state_val_27614 === 11))
{var inst_27593 = (state_27613[8]);var inst_27602 = (state_27613[2]);var inst_27590 = inst_27593;var state_27613__$1 = (function (){var statearr_27623 = state_27613;(statearr_27623[7] = inst_27590);
(statearr_27623[10] = inst_27602);
return statearr_27623;
})();var statearr_27624_27644 = state_27613__$1;(statearr_27624_27644[2] = null);
(statearr_27624_27644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27614 === 9))
{var inst_27593 = (state_27613[8]);var state_27613__$1 = state_27613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27613__$1,11,out,inst_27593);
} else
{if((state_val_27614 === 5))
{var inst_27590 = (state_27613[7]);var inst_27593 = (state_27613[8]);var inst_27597 = cljs.core._EQ_.call(null,inst_27593,inst_27590);var state_27613__$1 = state_27613;if(inst_27597)
{var statearr_27626_27645 = state_27613__$1;(statearr_27626_27645[1] = 8);
} else
{var statearr_27627_27646 = state_27613__$1;(statearr_27627_27646[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27614 === 10))
{var inst_27605 = (state_27613[2]);var state_27613__$1 = state_27613;var statearr_27628_27647 = state_27613__$1;(statearr_27628_27647[2] = inst_27605);
(statearr_27628_27647[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27614 === 8))
{var inst_27590 = (state_27613[7]);var tmp27625 = inst_27590;var inst_27590__$1 = tmp27625;var state_27613__$1 = (function (){var statearr_27629 = state_27613;(statearr_27629[7] = inst_27590__$1);
return statearr_27629;
})();var statearr_27630_27648 = state_27613__$1;(statearr_27630_27648[2] = null);
(statearr_27630_27648[1] = 2);
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
});})(c__5689__auto___27638,out))
;return ((function (switch__5674__auto__,c__5689__auto___27638,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27634 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27634[0] = state_machine__5675__auto__);
(statearr_27634[1] = 1);
return statearr_27634;
});
var state_machine__5675__auto____1 = (function (state_27613){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27613);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27635){if((e27635 instanceof Object))
{var ex__5678__auto__ = e27635;var statearr_27636_27649 = state_27613;(statearr_27636_27649[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27613);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27650 = state_27613;
state_27613 = G__27650;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27613){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27638,out))
})();var state__5691__auto__ = (function (){var statearr_27637 = f__5690__auto__.call(null);(statearr_27637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27638);
return statearr_27637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27638,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___27785 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27785,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27785,out){
return (function (state_27755){var state_val_27756 = (state_27755[1]);if((state_val_27756 === 7))
{var inst_27751 = (state_27755[2]);var state_27755__$1 = state_27755;var statearr_27757_27786 = state_27755__$1;(statearr_27757_27786[2] = inst_27751);
(statearr_27757_27786[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27756 === 1))
{var inst_27718 = (new Array(n));var inst_27719 = inst_27718;var inst_27720 = 0;var state_27755__$1 = (function (){var statearr_27758 = state_27755;(statearr_27758[7] = inst_27720);
(statearr_27758[8] = inst_27719);
return statearr_27758;
})();var statearr_27759_27787 = state_27755__$1;(statearr_27759_27787[2] = null);
(statearr_27759_27787[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27756 === 4))
{var inst_27723 = (state_27755[9]);var inst_27723__$1 = (state_27755[2]);var inst_27724 = (inst_27723__$1 == null);var inst_27725 = cljs.core.not.call(null,inst_27724);var state_27755__$1 = (function (){var statearr_27760 = state_27755;(statearr_27760[9] = inst_27723__$1);
return statearr_27760;
})();if(inst_27725)
{var statearr_27761_27788 = state_27755__$1;(statearr_27761_27788[1] = 5);
} else
{var statearr_27762_27789 = state_27755__$1;(statearr_27762_27789[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27756 === 15))
{var inst_27745 = (state_27755[2]);var state_27755__$1 = state_27755;var statearr_27763_27790 = state_27755__$1;(statearr_27763_27790[2] = inst_27745);
(statearr_27763_27790[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27756 === 13))
{var state_27755__$1 = state_27755;var statearr_27764_27791 = state_27755__$1;(statearr_27764_27791[2] = null);
(statearr_27764_27791[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27756 === 6))
{var inst_27720 = (state_27755[7]);var inst_27741 = (inst_27720 > 0);var state_27755__$1 = state_27755;if(cljs.core.truth_(inst_27741))
{var statearr_27765_27792 = state_27755__$1;(statearr_27765_27792[1] = 12);
} else
{var statearr_27766_27793 = state_27755__$1;(statearr_27766_27793[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27756 === 3))
{var inst_27753 = (state_27755[2]);var state_27755__$1 = state_27755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27755__$1,inst_27753);
} else
{if((state_val_27756 === 12))
{var inst_27719 = (state_27755[8]);var inst_27743 = cljs.core.vec.call(null,inst_27719);var state_27755__$1 = state_27755;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27755__$1,15,out,inst_27743);
} else
{if((state_val_27756 === 2))
{var state_27755__$1 = state_27755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27755__$1,4,ch);
} else
{if((state_val_27756 === 11))
{var inst_27735 = (state_27755[2]);var inst_27736 = (new Array(n));var inst_27719 = inst_27736;var inst_27720 = 0;var state_27755__$1 = (function (){var statearr_27767 = state_27755;(statearr_27767[7] = inst_27720);
(statearr_27767[8] = inst_27719);
(statearr_27767[10] = inst_27735);
return statearr_27767;
})();var statearr_27768_27794 = state_27755__$1;(statearr_27768_27794[2] = null);
(statearr_27768_27794[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27756 === 9))
{var inst_27719 = (state_27755[8]);var inst_27733 = cljs.core.vec.call(null,inst_27719);var state_27755__$1 = state_27755;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27755__$1,11,out,inst_27733);
} else
{if((state_val_27756 === 5))
{var inst_27723 = (state_27755[9]);var inst_27720 = (state_27755[7]);var inst_27719 = (state_27755[8]);var inst_27728 = (state_27755[11]);var inst_27727 = (inst_27719[inst_27720] = inst_27723);var inst_27728__$1 = (inst_27720 + 1);var inst_27729 = (inst_27728__$1 < n);var state_27755__$1 = (function (){var statearr_27769 = state_27755;(statearr_27769[12] = inst_27727);
(statearr_27769[11] = inst_27728__$1);
return statearr_27769;
})();if(cljs.core.truth_(inst_27729))
{var statearr_27770_27795 = state_27755__$1;(statearr_27770_27795[1] = 8);
} else
{var statearr_27771_27796 = state_27755__$1;(statearr_27771_27796[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27756 === 14))
{var inst_27748 = (state_27755[2]);var inst_27749 = cljs.core.async.close_BANG_.call(null,out);var state_27755__$1 = (function (){var statearr_27773 = state_27755;(statearr_27773[13] = inst_27748);
return statearr_27773;
})();var statearr_27774_27797 = state_27755__$1;(statearr_27774_27797[2] = inst_27749);
(statearr_27774_27797[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27756 === 10))
{var inst_27739 = (state_27755[2]);var state_27755__$1 = state_27755;var statearr_27775_27798 = state_27755__$1;(statearr_27775_27798[2] = inst_27739);
(statearr_27775_27798[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27756 === 8))
{var inst_27719 = (state_27755[8]);var inst_27728 = (state_27755[11]);var tmp27772 = inst_27719;var inst_27719__$1 = tmp27772;var inst_27720 = inst_27728;var state_27755__$1 = (function (){var statearr_27776 = state_27755;(statearr_27776[7] = inst_27720);
(statearr_27776[8] = inst_27719__$1);
return statearr_27776;
})();var statearr_27777_27799 = state_27755__$1;(statearr_27777_27799[2] = null);
(statearr_27777_27799[1] = 2);
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
});})(c__5689__auto___27785,out))
;return ((function (switch__5674__auto__,c__5689__auto___27785,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27781[0] = state_machine__5675__auto__);
(statearr_27781[1] = 1);
return statearr_27781;
});
var state_machine__5675__auto____1 = (function (state_27755){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27755);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27782){if((e27782 instanceof Object))
{var ex__5678__auto__ = e27782;var statearr_27783_27800 = state_27755;(statearr_27783_27800[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27755);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27782;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27801 = state_27755;
state_27755 = G__27801;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27755){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27785,out))
})();var state__5691__auto__ = (function (){var statearr_27784 = f__5690__auto__.call(null);(statearr_27784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27785);
return statearr_27784;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27785,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___27944 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___27944,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___27944,out){
return (function (state_27914){var state_val_27915 = (state_27914[1]);if((state_val_27915 === 7))
{var inst_27910 = (state_27914[2]);var state_27914__$1 = state_27914;var statearr_27916_27945 = state_27914__$1;(statearr_27916_27945[2] = inst_27910);
(statearr_27916_27945[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27915 === 1))
{var inst_27873 = [];var inst_27874 = inst_27873;var inst_27875 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27914__$1 = (function (){var statearr_27917 = state_27914;(statearr_27917[7] = inst_27874);
(statearr_27917[8] = inst_27875);
return statearr_27917;
})();var statearr_27918_27946 = state_27914__$1;(statearr_27918_27946[2] = null);
(statearr_27918_27946[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27915 === 4))
{var inst_27878 = (state_27914[9]);var inst_27878__$1 = (state_27914[2]);var inst_27879 = (inst_27878__$1 == null);var inst_27880 = cljs.core.not.call(null,inst_27879);var state_27914__$1 = (function (){var statearr_27919 = state_27914;(statearr_27919[9] = inst_27878__$1);
return statearr_27919;
})();if(inst_27880)
{var statearr_27920_27947 = state_27914__$1;(statearr_27920_27947[1] = 5);
} else
{var statearr_27921_27948 = state_27914__$1;(statearr_27921_27948[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27915 === 15))
{var inst_27904 = (state_27914[2]);var state_27914__$1 = state_27914;var statearr_27922_27949 = state_27914__$1;(statearr_27922_27949[2] = inst_27904);
(statearr_27922_27949[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27915 === 13))
{var state_27914__$1 = state_27914;var statearr_27923_27950 = state_27914__$1;(statearr_27923_27950[2] = null);
(statearr_27923_27950[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27915 === 6))
{var inst_27874 = (state_27914[7]);var inst_27899 = inst_27874.length;var inst_27900 = (inst_27899 > 0);var state_27914__$1 = state_27914;if(cljs.core.truth_(inst_27900))
{var statearr_27924_27951 = state_27914__$1;(statearr_27924_27951[1] = 12);
} else
{var statearr_27925_27952 = state_27914__$1;(statearr_27925_27952[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27915 === 3))
{var inst_27912 = (state_27914[2]);var state_27914__$1 = state_27914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27914__$1,inst_27912);
} else
{if((state_val_27915 === 12))
{var inst_27874 = (state_27914[7]);var inst_27902 = cljs.core.vec.call(null,inst_27874);var state_27914__$1 = state_27914;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27914__$1,15,out,inst_27902);
} else
{if((state_val_27915 === 2))
{var state_27914__$1 = state_27914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27914__$1,4,ch);
} else
{if((state_val_27915 === 11))
{var inst_27882 = (state_27914[10]);var inst_27878 = (state_27914[9]);var inst_27892 = (state_27914[2]);var inst_27893 = [];var inst_27894 = inst_27893.push(inst_27878);var inst_27874 = inst_27893;var inst_27875 = inst_27882;var state_27914__$1 = (function (){var statearr_27926 = state_27914;(statearr_27926[7] = inst_27874);
(statearr_27926[8] = inst_27875);
(statearr_27926[11] = inst_27892);
(statearr_27926[12] = inst_27894);
return statearr_27926;
})();var statearr_27927_27953 = state_27914__$1;(statearr_27927_27953[2] = null);
(statearr_27927_27953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27915 === 9))
{var inst_27874 = (state_27914[7]);var inst_27890 = cljs.core.vec.call(null,inst_27874);var state_27914__$1 = state_27914;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27914__$1,11,out,inst_27890);
} else
{if((state_val_27915 === 5))
{var inst_27882 = (state_27914[10]);var inst_27875 = (state_27914[8]);var inst_27878 = (state_27914[9]);var inst_27882__$1 = f.call(null,inst_27878);var inst_27883 = cljs.core._EQ_.call(null,inst_27882__$1,inst_27875);var inst_27884 = cljs.core.keyword_identical_QMARK_.call(null,inst_27875,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27885 = (inst_27883) || (inst_27884);var state_27914__$1 = (function (){var statearr_27928 = state_27914;(statearr_27928[10] = inst_27882__$1);
return statearr_27928;
})();if(cljs.core.truth_(inst_27885))
{var statearr_27929_27954 = state_27914__$1;(statearr_27929_27954[1] = 8);
} else
{var statearr_27930_27955 = state_27914__$1;(statearr_27930_27955[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27915 === 14))
{var inst_27907 = (state_27914[2]);var inst_27908 = cljs.core.async.close_BANG_.call(null,out);var state_27914__$1 = (function (){var statearr_27932 = state_27914;(statearr_27932[13] = inst_27907);
return statearr_27932;
})();var statearr_27933_27956 = state_27914__$1;(statearr_27933_27956[2] = inst_27908);
(statearr_27933_27956[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27915 === 10))
{var inst_27897 = (state_27914[2]);var state_27914__$1 = state_27914;var statearr_27934_27957 = state_27914__$1;(statearr_27934_27957[2] = inst_27897);
(statearr_27934_27957[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27915 === 8))
{var inst_27882 = (state_27914[10]);var inst_27874 = (state_27914[7]);var inst_27878 = (state_27914[9]);var inst_27887 = inst_27874.push(inst_27878);var tmp27931 = inst_27874;var inst_27874__$1 = tmp27931;var inst_27875 = inst_27882;var state_27914__$1 = (function (){var statearr_27935 = state_27914;(statearr_27935[14] = inst_27887);
(statearr_27935[7] = inst_27874__$1);
(statearr_27935[8] = inst_27875);
return statearr_27935;
})();var statearr_27936_27958 = state_27914__$1;(statearr_27936_27958[2] = null);
(statearr_27936_27958[1] = 2);
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
});})(c__5689__auto___27944,out))
;return ((function (switch__5674__auto__,c__5689__auto___27944,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_27940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27940[0] = state_machine__5675__auto__);
(statearr_27940[1] = 1);
return statearr_27940;
});
var state_machine__5675__auto____1 = (function (state_27914){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_27914);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e27941){if((e27941 instanceof Object))
{var ex__5678__auto__ = e27941;var statearr_27942_27959 = state_27914;(statearr_27942_27959[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27914);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27941;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27960 = state_27914;
state_27914 = G__27960;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_27914){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_27914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___27944,out))
})();var state__5691__auto__ = (function (){var statearr_27943 = f__5690__auto__.call(null);(statearr_27943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___27944);
return statearr_27943;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___27944,out))
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