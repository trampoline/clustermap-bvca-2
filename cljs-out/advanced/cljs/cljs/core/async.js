// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t36075 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36075 = (function (f,fn_handler,meta36076){
this.f = f;
this.fn_handler = fn_handler;
this.meta36076 = meta36076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36075.cljs$lang$type = true;
cljs.core.async.t36075.cljs$lang$ctorStr = "cljs.core.async/t36075";
cljs.core.async.t36075.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36075");
});
cljs.core.async.t36075.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t36075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t36075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36077){var self__ = this;
var _36077__$1 = this;return self__.meta36076;
});
cljs.core.async.t36075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36077,meta36076__$1){var self__ = this;
var _36077__$1 = this;return (new cljs.core.async.t36075(self__.f,self__.fn_handler,meta36076__$1));
});
cljs.core.async.__GT_t36075 = (function __GT_t36075(f__$1,fn_handler__$1,meta36076){return (new cljs.core.async.t36075(f__$1,fn_handler__$1,meta36076));
});
}
return (new cljs.core.async.t36075(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__36079 = buff;if(G__36079)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__36079.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__36079.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36079);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__36079);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_36080 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36080) : fn1.call(null,val_36080));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36080) : fn1.call(null,val_36080));
}));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
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
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___36081 = n;var x_36082 = 0;while(true){
if((x_36082 < n__4289__auto___36081))
{(a[x_36082] = 0);
{
var G__36083 = (x_36082 + 1);
x_36082 = G__36083;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__36084 = (i + 1);
i = G__36084;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t36088 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36088 = (function (flag,alt_flag,meta36089){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36089 = meta36089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36088.cljs$lang$type = true;
cljs.core.async.t36088.cljs$lang$ctorStr = "cljs.core.async/t36088";
cljs.core.async.t36088.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36088");
});
cljs.core.async.t36088.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t36088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t36088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36090){var self__ = this;
var _36090__$1 = this;return self__.meta36089;
});
cljs.core.async.t36088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36090,meta36089__$1){var self__ = this;
var _36090__$1 = this;return (new cljs.core.async.t36088(self__.flag,self__.alt_flag,meta36089__$1));
});
cljs.core.async.__GT_t36088 = (function __GT_t36088(flag__$1,alt_flag__$1,meta36089){return (new cljs.core.async.t36088(flag__$1,alt_flag__$1,meta36089));
});
}
return (new cljs.core.async.t36088(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t36094 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36094 = (function (cb,flag,alt_handler,meta36095){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36095 = meta36095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36094.cljs$lang$type = true;
cljs.core.async.t36094.cljs$lang$ctorStr = "cljs.core.async/t36094";
cljs.core.async.t36094.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36094");
});
cljs.core.async.t36094.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t36094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t36094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36096){var self__ = this;
var _36096__$1 = this;return self__.meta36095;
});
cljs.core.async.t36094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36096,meta36095__$1){var self__ = this;
var _36096__$1 = this;return (new cljs.core.async.t36094(self__.cb,self__.flag,self__.alt_handler,meta36095__$1));
});
cljs.core.async.__GT_t36094 = (function __GT_t36094(cb__$1,flag__$1,alt_handler__$1,meta36095){return (new cljs.core.async.t36094(cb__$1,flag__$1,alt_handler__$1,meta36095));
});
}
return (new cljs.core.async.t36094(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$561.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36097_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36097_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36097_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__36098 = (i + 1);
i = G__36098;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$545))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3429__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3429__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$545.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$545], null));
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
var alts_BANG___delegate = function (ports,p__36099){var map__36101 = p__36099;var map__36101__$1 = ((cljs.core.seq_QMARK_(map__36101))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36101):map__36101);var opts = map__36101__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__36099 = null;if (arguments.length > 1) {
  p__36099 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__36099);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36102){
var ports = cljs.core.first(arglist__36102);
var p__36099 = cljs.core.rest(arglist__36102);
return alts_BANG___delegate(ports,p__36099);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t36110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36110 = (function (ch,f,map_LT_,meta36111){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36111 = meta36111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36110.cljs$lang$type = true;
cljs.core.async.t36110.cljs$lang$ctorStr = "cljs.core.async/t36110";
cljs.core.async.t36110.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36110");
});
cljs.core.async.t36110.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36110.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t36110.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36110.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t36113 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36113 = (function (fn1,_,meta36111,ch,f,map_LT_,meta36114){
this.fn1 = fn1;
this._ = _;
this.meta36111 = meta36111;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36114 = meta36114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36113.cljs$lang$type = true;
cljs.core.async.t36113.cljs$lang$ctorStr = "cljs.core.async/t36113";
cljs.core.async.t36113.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36113");
});
cljs.core.async.t36113.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t36113.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t36113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__36103_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__36103_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36103_SHARP_) : self__.f.call(null,p1__36103_SHARP_)))) : f1.call(null,(((p1__36103_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36103_SHARP_) : self__.f.call(null,p1__36103_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t36113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36115){var self__ = this;
var _36115__$1 = this;return self__.meta36114;
});
cljs.core.async.t36113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36115,meta36114__$1){var self__ = this;
var _36115__$1 = this;return (new cljs.core.async.t36113(self__.fn1,self__._,self__.meta36111,self__.ch,self__.f,self__.map_LT_,meta36114__$1));
});
cljs.core.async.__GT_t36113 = (function __GT_t36113(fn1__$1,___$2,meta36111__$1,ch__$2,f__$2,map_LT___$2,meta36114){return (new cljs.core.async.t36113(fn1__$1,___$2,meta36111__$1,ch__$2,f__$2,map_LT___$2,meta36114));
});
}
return (new cljs.core.async.t36113(fn1,___$1,self__.meta36111,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t36110.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36110.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36112){var self__ = this;
var _36112__$1 = this;return self__.meta36111;
});
cljs.core.async.t36110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36112,meta36111__$1){var self__ = this;
var _36112__$1 = this;return (new cljs.core.async.t36110(self__.ch,self__.f,self__.map_LT_,meta36111__$1));
});
cljs.core.async.__GT_t36110 = (function __GT_t36110(ch__$1,f__$1,map_LT___$1,meta36111){return (new cljs.core.async.t36110(ch__$1,f__$1,map_LT___$1,meta36111));
});
}
return (new cljs.core.async.t36110(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t36119 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36119 = (function (ch,f,map_GT_,meta36120){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36120 = meta36120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36119.cljs$lang$type = true;
cljs.core.async.t36119.cljs$lang$ctorStr = "cljs.core.async/t36119";
cljs.core.async.t36119.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36119");
});
cljs.core.async.t36119.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t36119.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36119.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36121){var self__ = this;
var _36121__$1 = this;return self__.meta36120;
});
cljs.core.async.t36119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36121,meta36120__$1){var self__ = this;
var _36121__$1 = this;return (new cljs.core.async.t36119(self__.ch,self__.f,self__.map_GT_,meta36120__$1));
});
cljs.core.async.__GT_t36119 = (function __GT_t36119(ch__$1,f__$1,map_GT___$1,meta36120){return (new cljs.core.async.t36119(ch__$1,f__$1,map_GT___$1,meta36120));
});
}
return (new cljs.core.async.t36119(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36125 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36125 = (function (ch,p,filter_GT_,meta36126){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36126 = meta36126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36125.cljs$lang$type = true;
cljs.core.async.t36125.cljs$lang$ctorStr = "cljs.core.async/t36125";
cljs.core.async.t36125.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36125");
});
cljs.core.async.t36125.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36125.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t36125.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36125.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t36125.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36125.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t36125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36127){var self__ = this;
var _36127__$1 = this;return self__.meta36126;
});
cljs.core.async.t36125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36127,meta36126__$1){var self__ = this;
var _36127__$1 = this;return (new cljs.core.async.t36125(self__.ch,self__.p,self__.filter_GT_,meta36126__$1));
});
cljs.core.async.__GT_t36125 = (function __GT_t36125(ch__$1,p__$1,filter_GT___$1,meta36126){return (new cljs.core.async.t36125(ch__$1,p__$1,filter_GT___$1,meta36126));
});
}
return (new cljs.core.async.t36125(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___36210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36189){var state_val_36190 = (state_36189[1]);if((state_val_36190 === 1))
{var state_36189__$1 = state_36189;var statearr_36191_36211 = state_36189__$1;(statearr_36191_36211[2] = null);
(statearr_36191_36211[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36190 === 2))
{var state_36189__$1 = state_36189;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36189__$1,4,ch);
} else
{if((state_val_36190 === 3))
{var inst_36187 = (state_36189[2]);var state_36189__$1 = state_36189;return cljs.core.async.impl.ioc_helpers.return_chan(state_36189__$1,inst_36187);
} else
{if((state_val_36190 === 4))
{var inst_36171 = (state_36189[7]);var inst_36171__$1 = (state_36189[2]);var inst_36172 = (inst_36171__$1 == null);var state_36189__$1 = (function (){var statearr_36192 = state_36189;(statearr_36192[7] = inst_36171__$1);
return statearr_36192;
})();if(cljs.core.truth_(inst_36172))
{var statearr_36193_36212 = state_36189__$1;(statearr_36193_36212[1] = 5);
} else
{var statearr_36194_36213 = state_36189__$1;(statearr_36194_36213[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36190 === 5))
{var inst_36174 = cljs.core.async.close_BANG_(out);var state_36189__$1 = state_36189;var statearr_36195_36214 = state_36189__$1;(statearr_36195_36214[2] = inst_36174);
(statearr_36195_36214[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36190 === 6))
{var inst_36171 = (state_36189[7]);var inst_36176 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36171) : p.call(null,inst_36171));var state_36189__$1 = state_36189;if(cljs.core.truth_(inst_36176))
{var statearr_36196_36215 = state_36189__$1;(statearr_36196_36215[1] = 8);
} else
{var statearr_36197_36216 = state_36189__$1;(statearr_36197_36216[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36190 === 7))
{var inst_36185 = (state_36189[2]);var state_36189__$1 = state_36189;var statearr_36198_36217 = state_36189__$1;(statearr_36198_36217[2] = inst_36185);
(statearr_36198_36217[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36190 === 8))
{var inst_36171 = (state_36189[7]);var state_36189__$1 = state_36189;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36189__$1,11,out,inst_36171);
} else
{if((state_val_36190 === 9))
{var state_36189__$1 = state_36189;var statearr_36199_36218 = state_36189__$1;(statearr_36199_36218[2] = null);
(statearr_36199_36218[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36190 === 10))
{var inst_36182 = (state_36189[2]);var state_36189__$1 = (function (){var statearr_36200 = state_36189;(statearr_36200[8] = inst_36182);
return statearr_36200;
})();var statearr_36201_36219 = state_36189__$1;(statearr_36201_36219[2] = null);
(statearr_36201_36219[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36190 === 11))
{var inst_36179 = (state_36189[2]);var state_36189__$1 = state_36189;var statearr_36202_36220 = state_36189__$1;(statearr_36202_36220[2] = inst_36179);
(statearr_36202_36220[1] = 10);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36206 = [null,null,null,null,null,null,null,null,null];(statearr_36206[0] = state_machine__5548__auto__);
(statearr_36206[1] = 1);
return statearr_36206;
});
var state_machine__5548__auto____1 = (function (state_36189){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36189);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36207){if((e36207 instanceof Object))
{var ex__5551__auto__ = e36207;var statearr_36208_36221 = state_36189;(statearr_36208_36221[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36189);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__36222 = state_36189;
state_36189 = G__36222;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36189){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36209 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36210);
return statearr_36209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
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
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36374){var state_val_36375 = (state_36374[1]);if((state_val_36375 === 1))
{var state_36374__$1 = state_36374;var statearr_36376_36413 = state_36374__$1;(statearr_36376_36413[2] = null);
(statearr_36376_36413[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 2))
{var state_36374__$1 = state_36374;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36374__$1,4,in$);
} else
{if((state_val_36375 === 3))
{var inst_36372 = (state_36374[2]);var state_36374__$1 = state_36374;return cljs.core.async.impl.ioc_helpers.return_chan(state_36374__$1,inst_36372);
} else
{if((state_val_36375 === 4))
{var inst_36320 = (state_36374[7]);var inst_36320__$1 = (state_36374[2]);var inst_36321 = (inst_36320__$1 == null);var state_36374__$1 = (function (){var statearr_36377 = state_36374;(statearr_36377[7] = inst_36320__$1);
return statearr_36377;
})();if(cljs.core.truth_(inst_36321))
{var statearr_36378_36414 = state_36374__$1;(statearr_36378_36414[1] = 5);
} else
{var statearr_36379_36415 = state_36374__$1;(statearr_36379_36415[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 5))
{var inst_36323 = cljs.core.async.close_BANG_(out);var state_36374__$1 = state_36374;var statearr_36380_36416 = state_36374__$1;(statearr_36380_36416[2] = inst_36323);
(statearr_36380_36416[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 6))
{var inst_36320 = (state_36374[7]);var inst_36325 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36320) : f.call(null,inst_36320));var inst_36330 = cljs.core.seq(inst_36325);var inst_36331 = inst_36330;var inst_36332 = null;var inst_36333 = 0;var inst_36334 = 0;var state_36374__$1 = (function (){var statearr_36381 = state_36374;(statearr_36381[8] = inst_36334);
(statearr_36381[9] = inst_36332);
(statearr_36381[10] = inst_36333);
(statearr_36381[11] = inst_36331);
return statearr_36381;
})();var statearr_36382_36417 = state_36374__$1;(statearr_36382_36417[2] = null);
(statearr_36382_36417[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 7))
{var inst_36370 = (state_36374[2]);var state_36374__$1 = state_36374;var statearr_36383_36418 = state_36374__$1;(statearr_36383_36418[2] = inst_36370);
(statearr_36383_36418[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 8))
{var inst_36334 = (state_36374[8]);var inst_36333 = (state_36374[10]);var inst_36336 = (inst_36334 < inst_36333);var inst_36337 = inst_36336;var state_36374__$1 = state_36374;if(cljs.core.truth_(inst_36337))
{var statearr_36384_36419 = state_36374__$1;(statearr_36384_36419[1] = 10);
} else
{var statearr_36385_36420 = state_36374__$1;(statearr_36385_36420[1] = 11);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 9))
{var inst_36367 = (state_36374[2]);var state_36374__$1 = (function (){var statearr_36386 = state_36374;(statearr_36386[12] = inst_36367);
return statearr_36386;
})();var statearr_36387_36421 = state_36374__$1;(statearr_36387_36421[2] = null);
(statearr_36387_36421[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 10))
{var inst_36334 = (state_36374[8]);var inst_36332 = (state_36374[9]);var inst_36339 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36332,inst_36334);var state_36374__$1 = state_36374;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36374__$1,13,out,inst_36339);
} else
{if((state_val_36375 === 11))
{var inst_36345 = (state_36374[13]);var inst_36331 = (state_36374[11]);var inst_36345__$1 = cljs.core.seq(inst_36331);var state_36374__$1 = (function (){var statearr_36391 = state_36374;(statearr_36391[13] = inst_36345__$1);
return statearr_36391;
})();if(inst_36345__$1)
{var statearr_36392_36422 = state_36374__$1;(statearr_36392_36422[1] = 14);
} else
{var statearr_36393_36423 = state_36374__$1;(statearr_36393_36423[1] = 15);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 12))
{var inst_36365 = (state_36374[2]);var state_36374__$1 = state_36374;var statearr_36394_36424 = state_36374__$1;(statearr_36394_36424[2] = inst_36365);
(statearr_36394_36424[1] = 9);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 13))
{var inst_36334 = (state_36374[8]);var inst_36332 = (state_36374[9]);var inst_36333 = (state_36374[10]);var inst_36331 = (state_36374[11]);var inst_36341 = (state_36374[2]);var inst_36342 = (inst_36334 + 1);var tmp36388 = inst_36332;var tmp36389 = inst_36333;var tmp36390 = inst_36331;var inst_36331__$1 = tmp36390;var inst_36332__$1 = tmp36388;var inst_36333__$1 = tmp36389;var inst_36334__$1 = inst_36342;var state_36374__$1 = (function (){var statearr_36395 = state_36374;(statearr_36395[14] = inst_36341);
(statearr_36395[8] = inst_36334__$1);
(statearr_36395[9] = inst_36332__$1);
(statearr_36395[10] = inst_36333__$1);
(statearr_36395[11] = inst_36331__$1);
return statearr_36395;
})();var statearr_36396_36425 = state_36374__$1;(statearr_36396_36425[2] = null);
(statearr_36396_36425[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 14))
{var inst_36345 = (state_36374[13]);var inst_36347 = cljs.core.chunked_seq_QMARK_(inst_36345);var state_36374__$1 = state_36374;if(inst_36347)
{var statearr_36397_36426 = state_36374__$1;(statearr_36397_36426[1] = 17);
} else
{var statearr_36398_36427 = state_36374__$1;(statearr_36398_36427[1] = 18);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 15))
{var state_36374__$1 = state_36374;var statearr_36399_36428 = state_36374__$1;(statearr_36399_36428[2] = null);
(statearr_36399_36428[1] = 16);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 16))
{var inst_36363 = (state_36374[2]);var state_36374__$1 = state_36374;var statearr_36400_36429 = state_36374__$1;(statearr_36400_36429[2] = inst_36363);
(statearr_36400_36429[1] = 12);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 17))
{var inst_36345 = (state_36374[13]);var inst_36349 = cljs.core.chunk_first(inst_36345);var inst_36350 = cljs.core.chunk_rest(inst_36345);var inst_36351 = cljs.core.count(inst_36349);var inst_36331 = inst_36350;var inst_36332 = inst_36349;var inst_36333 = inst_36351;var inst_36334 = 0;var state_36374__$1 = (function (){var statearr_36401 = state_36374;(statearr_36401[8] = inst_36334);
(statearr_36401[9] = inst_36332);
(statearr_36401[10] = inst_36333);
(statearr_36401[11] = inst_36331);
return statearr_36401;
})();var statearr_36402_36430 = state_36374__$1;(statearr_36402_36430[2] = null);
(statearr_36402_36430[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 18))
{var inst_36345 = (state_36374[13]);var inst_36354 = cljs.core.first(inst_36345);var state_36374__$1 = state_36374;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36374__$1,20,out,inst_36354);
} else
{if((state_val_36375 === 19))
{var inst_36360 = (state_36374[2]);var state_36374__$1 = state_36374;var statearr_36403_36431 = state_36374__$1;(statearr_36403_36431[2] = inst_36360);
(statearr_36403_36431[1] = 16);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36375 === 20))
{var inst_36345 = (state_36374[13]);var inst_36356 = (state_36374[2]);var inst_36357 = cljs.core.next(inst_36345);var inst_36331 = inst_36357;var inst_36332 = null;var inst_36333 = 0;var inst_36334 = 0;var state_36374__$1 = (function (){var statearr_36404 = state_36374;(statearr_36404[15] = inst_36356);
(statearr_36404[8] = inst_36334);
(statearr_36404[9] = inst_36332);
(statearr_36404[10] = inst_36333);
(statearr_36404[11] = inst_36331);
return statearr_36404;
})();var statearr_36405_36432 = state_36374__$1;(statearr_36405_36432[2] = null);
(statearr_36405_36432[1] = 8);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36409[0] = state_machine__5548__auto__);
(statearr_36409[1] = 1);
return statearr_36409;
});
var state_machine__5548__auto____1 = (function (state_36374){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36374);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36410){if((e36410 instanceof Object))
{var ex__5551__auto__ = e36410;var statearr_36411_36433 = state_36374;(statearr_36411_36433[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36374);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36410;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__36434 = state_36374;
state_36374 = G__36434;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36374){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36412 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36412;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___36515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36494){var state_val_36495 = (state_36494[1]);if((state_val_36495 === 1))
{var state_36494__$1 = state_36494;var statearr_36496_36516 = state_36494__$1;(statearr_36496_36516[2] = null);
(statearr_36496_36516[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36495 === 2))
{var state_36494__$1 = state_36494;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36494__$1,4,from);
} else
{if((state_val_36495 === 3))
{var inst_36492 = (state_36494[2]);var state_36494__$1 = state_36494;return cljs.core.async.impl.ioc_helpers.return_chan(state_36494__$1,inst_36492);
} else
{if((state_val_36495 === 4))
{var inst_36477 = (state_36494[7]);var inst_36477__$1 = (state_36494[2]);var inst_36478 = (inst_36477__$1 == null);var state_36494__$1 = (function (){var statearr_36497 = state_36494;(statearr_36497[7] = inst_36477__$1);
return statearr_36497;
})();if(cljs.core.truth_(inst_36478))
{var statearr_36498_36517 = state_36494__$1;(statearr_36498_36517[1] = 5);
} else
{var statearr_36499_36518 = state_36494__$1;(statearr_36499_36518[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36495 === 5))
{var state_36494__$1 = state_36494;if(cljs.core.truth_(close_QMARK_))
{var statearr_36500_36519 = state_36494__$1;(statearr_36500_36519[1] = 8);
} else
{var statearr_36501_36520 = state_36494__$1;(statearr_36501_36520[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36495 === 6))
{var inst_36477 = (state_36494[7]);var state_36494__$1 = state_36494;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36494__$1,11,to,inst_36477);
} else
{if((state_val_36495 === 7))
{var inst_36490 = (state_36494[2]);var state_36494__$1 = state_36494;var statearr_36502_36521 = state_36494__$1;(statearr_36502_36521[2] = inst_36490);
(statearr_36502_36521[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36495 === 8))
{var inst_36481 = cljs.core.async.close_BANG_(to);var state_36494__$1 = state_36494;var statearr_36503_36522 = state_36494__$1;(statearr_36503_36522[2] = inst_36481);
(statearr_36503_36522[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36495 === 9))
{var state_36494__$1 = state_36494;var statearr_36504_36523 = state_36494__$1;(statearr_36504_36523[2] = null);
(statearr_36504_36523[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36495 === 10))
{var inst_36484 = (state_36494[2]);var state_36494__$1 = state_36494;var statearr_36505_36524 = state_36494__$1;(statearr_36505_36524[2] = inst_36484);
(statearr_36505_36524[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36495 === 11))
{var inst_36487 = (state_36494[2]);var state_36494__$1 = (function (){var statearr_36506 = state_36494;(statearr_36506[8] = inst_36487);
return statearr_36506;
})();var statearr_36507_36525 = state_36494__$1;(statearr_36507_36525[2] = null);
(statearr_36507_36525[1] = 2);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36511 = [null,null,null,null,null,null,null,null,null];(statearr_36511[0] = state_machine__5548__auto__);
(statearr_36511[1] = 1);
return statearr_36511;
});
var state_machine__5548__auto____1 = (function (state_36494){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36494);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36512){if((e36512 instanceof Object))
{var ex__5551__auto__ = e36512;var statearr_36513_36526 = state_36494;(statearr_36513_36526[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36494);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__36527 = state_36494;
state_36494 = G__36527;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36494){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36514 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36515);
return statearr_36514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
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
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5562__auto___36614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36592){var state_val_36593 = (state_36592[1]);if((state_val_36593 === 1))
{var state_36592__$1 = state_36592;var statearr_36594_36615 = state_36592__$1;(statearr_36594_36615[2] = null);
(statearr_36594_36615[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36593 === 2))
{var state_36592__$1 = state_36592;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36592__$1,4,ch);
} else
{if((state_val_36593 === 3))
{var inst_36590 = (state_36592[2]);var state_36592__$1 = state_36592;return cljs.core.async.impl.ioc_helpers.return_chan(state_36592__$1,inst_36590);
} else
{if((state_val_36593 === 4))
{var inst_36573 = (state_36592[7]);var inst_36573__$1 = (state_36592[2]);var inst_36574 = (inst_36573__$1 == null);var state_36592__$1 = (function (){var statearr_36595 = state_36592;(statearr_36595[7] = inst_36573__$1);
return statearr_36595;
})();if(cljs.core.truth_(inst_36574))
{var statearr_36596_36616 = state_36592__$1;(statearr_36596_36616[1] = 5);
} else
{var statearr_36597_36617 = state_36592__$1;(statearr_36597_36617[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36593 === 5))
{var inst_36576 = cljs.core.async.close_BANG_(tc);var inst_36577 = cljs.core.async.close_BANG_(fc);var state_36592__$1 = (function (){var statearr_36598 = state_36592;(statearr_36598[8] = inst_36576);
return statearr_36598;
})();var statearr_36599_36618 = state_36592__$1;(statearr_36599_36618[2] = inst_36577);
(statearr_36599_36618[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36593 === 6))
{var inst_36573 = (state_36592[7]);var inst_36579 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36573) : p.call(null,inst_36573));var state_36592__$1 = state_36592;if(cljs.core.truth_(inst_36579))
{var statearr_36600_36619 = state_36592__$1;(statearr_36600_36619[1] = 9);
} else
{var statearr_36601_36620 = state_36592__$1;(statearr_36601_36620[1] = 10);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36593 === 7))
{var inst_36588 = (state_36592[2]);var state_36592__$1 = state_36592;var statearr_36602_36621 = state_36592__$1;(statearr_36602_36621[2] = inst_36588);
(statearr_36602_36621[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36593 === 8))
{var inst_36585 = (state_36592[2]);var state_36592__$1 = (function (){var statearr_36603 = state_36592;(statearr_36603[9] = inst_36585);
return statearr_36603;
})();var statearr_36604_36622 = state_36592__$1;(statearr_36604_36622[2] = null);
(statearr_36604_36622[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36593 === 9))
{var state_36592__$1 = state_36592;var statearr_36605_36623 = state_36592__$1;(statearr_36605_36623[2] = tc);
(statearr_36605_36623[1] = 11);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36593 === 10))
{var state_36592__$1 = state_36592;var statearr_36606_36624 = state_36592__$1;(statearr_36606_36624[2] = fc);
(statearr_36606_36624[1] = 11);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36593 === 11))
{var inst_36573 = (state_36592[7]);var inst_36583 = (state_36592[2]);var state_36592__$1 = state_36592;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36592__$1,8,inst_36583,inst_36573);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36610 = [null,null,null,null,null,null,null,null,null,null];(statearr_36610[0] = state_machine__5548__auto__);
(statearr_36610[1] = 1);
return statearr_36610;
});
var state_machine__5548__auto____1 = (function (state_36592){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36592);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36611){if((e36611 instanceof Object))
{var ex__5551__auto__ = e36611;var statearr_36612_36625 = state_36592;(statearr_36612_36625[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36592);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__36626 = state_36592;
state_36592 = G__36626;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36592){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36613 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36614);
return statearr_36613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36673){var state_val_36674 = (state_36673[1]);if((state_val_36674 === 7))
{var inst_36669 = (state_36673[2]);var state_36673__$1 = state_36673;var statearr_36675_36691 = state_36673__$1;(statearr_36675_36691[2] = inst_36669);
(statearr_36675_36691[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36674 === 6))
{var inst_36662 = (state_36673[7]);var inst_36659 = (state_36673[8]);var inst_36666 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36659,inst_36662) : f.call(null,inst_36659,inst_36662));var inst_36659__$1 = inst_36666;var state_36673__$1 = (function (){var statearr_36676 = state_36673;(statearr_36676[8] = inst_36659__$1);
return statearr_36676;
})();var statearr_36677_36692 = state_36673__$1;(statearr_36677_36692[2] = null);
(statearr_36677_36692[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36674 === 5))
{var inst_36659 = (state_36673[8]);var state_36673__$1 = state_36673;var statearr_36678_36693 = state_36673__$1;(statearr_36678_36693[2] = inst_36659);
(statearr_36678_36693[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36674 === 4))
{var inst_36662 = (state_36673[7]);var inst_36662__$1 = (state_36673[2]);var inst_36663 = (inst_36662__$1 == null);var state_36673__$1 = (function (){var statearr_36679 = state_36673;(statearr_36679[7] = inst_36662__$1);
return statearr_36679;
})();if(cljs.core.truth_(inst_36663))
{var statearr_36680_36694 = state_36673__$1;(statearr_36680_36694[1] = 5);
} else
{var statearr_36681_36695 = state_36673__$1;(statearr_36681_36695[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36674 === 3))
{var inst_36671 = (state_36673[2]);var state_36673__$1 = state_36673;return cljs.core.async.impl.ioc_helpers.return_chan(state_36673__$1,inst_36671);
} else
{if((state_val_36674 === 2))
{var state_36673__$1 = state_36673;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36673__$1,4,ch);
} else
{if((state_val_36674 === 1))
{var inst_36659 = init;var state_36673__$1 = (function (){var statearr_36682 = state_36673;(statearr_36682[8] = inst_36659);
return statearr_36682;
})();var statearr_36683_36696 = state_36673__$1;(statearr_36683_36696[2] = null);
(statearr_36683_36696[1] = 2);
return cljs.core.constant$keyword$555;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36687 = [null,null,null,null,null,null,null,null,null];(statearr_36687[0] = state_machine__5548__auto__);
(statearr_36687[1] = 1);
return statearr_36687;
});
var state_machine__5548__auto____1 = (function (state_36673){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36673);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36688){if((e36688 instanceof Object))
{var ex__5551__auto__ = e36688;var statearr_36689_36697 = state_36673;(statearr_36689_36697[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36673);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__36698 = state_36673;
state_36673 = G__36698;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36673){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36690 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36760){var state_val_36761 = (state_36760[1]);if((state_val_36761 === 1))
{var inst_36740 = cljs.core.seq(coll);var inst_36741 = inst_36740;var state_36760__$1 = (function (){var statearr_36762 = state_36760;(statearr_36762[7] = inst_36741);
return statearr_36762;
})();var statearr_36763_36781 = state_36760__$1;(statearr_36763_36781[2] = null);
(statearr_36763_36781[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36761 === 2))
{var inst_36741 = (state_36760[7]);var state_36760__$1 = state_36760;if(cljs.core.truth_(inst_36741))
{var statearr_36764_36782 = state_36760__$1;(statearr_36764_36782[1] = 4);
} else
{var statearr_36765_36783 = state_36760__$1;(statearr_36765_36783[1] = 5);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36761 === 3))
{var inst_36758 = (state_36760[2]);var state_36760__$1 = state_36760;return cljs.core.async.impl.ioc_helpers.return_chan(state_36760__$1,inst_36758);
} else
{if((state_val_36761 === 4))
{var inst_36741 = (state_36760[7]);var inst_36744 = cljs.core.first(inst_36741);var state_36760__$1 = state_36760;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36760__$1,7,ch,inst_36744);
} else
{if((state_val_36761 === 5))
{var state_36760__$1 = state_36760;if(cljs.core.truth_(close_QMARK_))
{var statearr_36766_36784 = state_36760__$1;(statearr_36766_36784[1] = 8);
} else
{var statearr_36767_36785 = state_36760__$1;(statearr_36767_36785[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36761 === 6))
{var inst_36756 = (state_36760[2]);var state_36760__$1 = state_36760;var statearr_36768_36786 = state_36760__$1;(statearr_36768_36786[2] = inst_36756);
(statearr_36768_36786[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36761 === 7))
{var inst_36741 = (state_36760[7]);var inst_36746 = (state_36760[2]);var inst_36747 = cljs.core.next(inst_36741);var inst_36741__$1 = inst_36747;var state_36760__$1 = (function (){var statearr_36769 = state_36760;(statearr_36769[8] = inst_36746);
(statearr_36769[7] = inst_36741__$1);
return statearr_36769;
})();var statearr_36770_36787 = state_36760__$1;(statearr_36770_36787[2] = null);
(statearr_36770_36787[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36761 === 8))
{var inst_36751 = cljs.core.async.close_BANG_(ch);var state_36760__$1 = state_36760;var statearr_36771_36788 = state_36760__$1;(statearr_36771_36788[2] = inst_36751);
(statearr_36771_36788[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36761 === 9))
{var state_36760__$1 = state_36760;var statearr_36772_36789 = state_36760__$1;(statearr_36772_36789[2] = null);
(statearr_36772_36789[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36761 === 10))
{var inst_36754 = (state_36760[2]);var state_36760__$1 = state_36760;var statearr_36773_36790 = state_36760__$1;(statearr_36773_36790[2] = inst_36754);
(statearr_36773_36790[1] = 6);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_36777 = [null,null,null,null,null,null,null,null,null];(statearr_36777[0] = state_machine__5548__auto__);
(statearr_36777[1] = 1);
return statearr_36777;
});
var state_machine__5548__auto____1 = (function (state_36760){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36760);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36778){if((e36778 instanceof Object))
{var ex__5551__auto__ = e36778;var statearr_36779_36791 = state_36760;(statearr_36779_36791[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36760);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36778;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__36792 = state_36760;
state_36760 = G__36792;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36760){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36780 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj36794 = {};return obj36794;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj36796 = {};return obj36796;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t37020 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37020 = (function (cs,ch,mult,meta37021){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37021 = meta37021;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37020.cljs$lang$type = true;
cljs.core.async.t37020.cljs$lang$ctorStr = "cljs.core.async/t37020";
cljs.core.async.t37020.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37020");
});})(cs))
;
cljs.core.async.t37020.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t37020.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t37020.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t37020.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t37020.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37020.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t37020.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37022){var self__ = this;
var _37022__$1 = this;return self__.meta37021;
});})(cs))
;
cljs.core.async.t37020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37022,meta37021__$1){var self__ = this;
var _37022__$1 = this;return (new cljs.core.async.t37020(self__.cs,self__.ch,self__.mult,meta37021__$1));
});})(cs))
;
cljs.core.async.__GT_t37020 = ((function (cs){
return (function __GT_t37020(cs__$1,ch__$1,mult__$1,meta37021){return (new cljs.core.async.t37020(cs__$1,ch__$1,mult__$1,meta37021));
});})(cs))
;
}
return (new cljs.core.async.t37020(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___37243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37157){var state_val_37158 = (state_37157[1]);if((state_val_37158 === 32))
{var inst_37025 = (state_37157[7]);var inst_37101 = (state_37157[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37157,31,Object,null,30);var inst_37108 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37101,inst_37025,done);var state_37157__$1 = state_37157;var statearr_37159_37244 = state_37157__$1;(statearr_37159_37244[2] = inst_37108);
cljs.core.async.impl.ioc_helpers.process_exception(state_37157__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 1))
{var state_37157__$1 = state_37157;var statearr_37160_37245 = state_37157__$1;(statearr_37160_37245[2] = null);
(statearr_37160_37245[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 33))
{var inst_37114 = (state_37157[9]);var inst_37116 = cljs.core.chunked_seq_QMARK_(inst_37114);var state_37157__$1 = state_37157;if(inst_37116)
{var statearr_37161_37246 = state_37157__$1;(statearr_37161_37246[1] = 36);
} else
{var statearr_37162_37247 = state_37157__$1;(statearr_37162_37247[1] = 37);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 2))
{var state_37157__$1 = state_37157;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37157__$1,4,ch);
} else
{if((state_val_37158 === 34))
{var state_37157__$1 = state_37157;var statearr_37163_37248 = state_37157__$1;(statearr_37163_37248[2] = null);
(statearr_37163_37248[1] = 35);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 3))
{var inst_37155 = (state_37157[2]);var state_37157__$1 = state_37157;return cljs.core.async.impl.ioc_helpers.return_chan(state_37157__$1,inst_37155);
} else
{if((state_val_37158 === 35))
{var inst_37139 = (state_37157[2]);var state_37157__$1 = state_37157;var statearr_37164_37249 = state_37157__$1;(statearr_37164_37249[2] = inst_37139);
(statearr_37164_37249[1] = 29);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 4))
{var inst_37025 = (state_37157[7]);var inst_37025__$1 = (state_37157[2]);var inst_37026 = (inst_37025__$1 == null);var state_37157__$1 = (function (){var statearr_37165 = state_37157;(statearr_37165[7] = inst_37025__$1);
return statearr_37165;
})();if(cljs.core.truth_(inst_37026))
{var statearr_37166_37250 = state_37157__$1;(statearr_37166_37250[1] = 5);
} else
{var statearr_37167_37251 = state_37157__$1;(statearr_37167_37251[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 36))
{var inst_37114 = (state_37157[9]);var inst_37118 = cljs.core.chunk_first(inst_37114);var inst_37119 = cljs.core.chunk_rest(inst_37114);var inst_37120 = cljs.core.count(inst_37118);var inst_37093 = inst_37119;var inst_37094 = inst_37118;var inst_37095 = inst_37120;var inst_37096 = 0;var state_37157__$1 = (function (){var statearr_37168 = state_37157;(statearr_37168[10] = inst_37093);
(statearr_37168[11] = inst_37094);
(statearr_37168[12] = inst_37095);
(statearr_37168[13] = inst_37096);
return statearr_37168;
})();var statearr_37169_37252 = state_37157__$1;(statearr_37169_37252[2] = null);
(statearr_37169_37252[1] = 25);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 5))
{var inst_37032 = cljs.core.deref(cs);var inst_37033 = cljs.core.seq(inst_37032);var inst_37034 = inst_37033;var inst_37035 = null;var inst_37036 = 0;var inst_37037 = 0;var state_37157__$1 = (function (){var statearr_37170 = state_37157;(statearr_37170[14] = inst_37036);
(statearr_37170[15] = inst_37037);
(statearr_37170[16] = inst_37034);
(statearr_37170[17] = inst_37035);
return statearr_37170;
})();var statearr_37171_37253 = state_37157__$1;(statearr_37171_37253[2] = null);
(statearr_37171_37253[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 37))
{var inst_37114 = (state_37157[9]);var inst_37123 = cljs.core.first(inst_37114);var state_37157__$1 = (function (){var statearr_37172 = state_37157;(statearr_37172[18] = inst_37123);
return statearr_37172;
})();var statearr_37173_37254 = state_37157__$1;(statearr_37173_37254[2] = null);
(statearr_37173_37254[1] = 41);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 6))
{var inst_37085 = (state_37157[19]);var inst_37084 = cljs.core.deref(cs);var inst_37085__$1 = cljs.core.keys(inst_37084);var inst_37086 = cljs.core.count(inst_37085__$1);var inst_37087 = cljs.core.reset_BANG_(dctr,inst_37086);var inst_37092 = cljs.core.seq(inst_37085__$1);var inst_37093 = inst_37092;var inst_37094 = null;var inst_37095 = 0;var inst_37096 = 0;var state_37157__$1 = (function (){var statearr_37174 = state_37157;(statearr_37174[10] = inst_37093);
(statearr_37174[11] = inst_37094);
(statearr_37174[12] = inst_37095);
(statearr_37174[19] = inst_37085__$1);
(statearr_37174[20] = inst_37087);
(statearr_37174[13] = inst_37096);
return statearr_37174;
})();var statearr_37175_37255 = state_37157__$1;(statearr_37175_37255[2] = null);
(statearr_37175_37255[1] = 25);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 38))
{var inst_37136 = (state_37157[2]);var state_37157__$1 = state_37157;var statearr_37176_37256 = state_37157__$1;(statearr_37176_37256[2] = inst_37136);
(statearr_37176_37256[1] = 35);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 7))
{var inst_37153 = (state_37157[2]);var state_37157__$1 = state_37157;var statearr_37177_37257 = state_37157__$1;(statearr_37177_37257[2] = inst_37153);
(statearr_37177_37257[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 39))
{var inst_37114 = (state_37157[9]);var inst_37132 = (state_37157[2]);var inst_37133 = cljs.core.next(inst_37114);var inst_37093 = inst_37133;var inst_37094 = null;var inst_37095 = 0;var inst_37096 = 0;var state_37157__$1 = (function (){var statearr_37178 = state_37157;(statearr_37178[10] = inst_37093);
(statearr_37178[11] = inst_37094);
(statearr_37178[12] = inst_37095);
(statearr_37178[13] = inst_37096);
(statearr_37178[21] = inst_37132);
return statearr_37178;
})();var statearr_37179_37258 = state_37157__$1;(statearr_37179_37258[2] = null);
(statearr_37179_37258[1] = 25);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 8))
{var inst_37036 = (state_37157[14]);var inst_37037 = (state_37157[15]);var inst_37039 = (inst_37037 < inst_37036);var inst_37040 = inst_37039;var state_37157__$1 = state_37157;if(cljs.core.truth_(inst_37040))
{var statearr_37180_37259 = state_37157__$1;(statearr_37180_37259[1] = 10);
} else
{var statearr_37181_37260 = state_37157__$1;(statearr_37181_37260[1] = 11);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 40))
{var inst_37123 = (state_37157[18]);var inst_37124 = (state_37157[2]);var inst_37125 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37126 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37123);var state_37157__$1 = (function (){var statearr_37182 = state_37157;(statearr_37182[22] = inst_37124);
(statearr_37182[23] = inst_37125);
return statearr_37182;
})();var statearr_37183_37261 = state_37157__$1;(statearr_37183_37261[2] = inst_37126);
cljs.core.async.impl.ioc_helpers.process_exception(state_37157__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 9))
{var inst_37082 = (state_37157[2]);var state_37157__$1 = state_37157;var statearr_37184_37262 = state_37157__$1;(statearr_37184_37262[2] = inst_37082);
(statearr_37184_37262[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 41))
{var inst_37123 = (state_37157[18]);var inst_37025 = (state_37157[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37157,40,Object,null,39);var inst_37130 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37123,inst_37025,done);var state_37157__$1 = state_37157;var statearr_37185_37263 = state_37157__$1;(statearr_37185_37263[2] = inst_37130);
cljs.core.async.impl.ioc_helpers.process_exception(state_37157__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 10))
{var inst_37037 = (state_37157[15]);var inst_37035 = (state_37157[17]);var inst_37043 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37035,inst_37037);var inst_37044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37043,0,null);var inst_37045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37043,1,null);var state_37157__$1 = (function (){var statearr_37186 = state_37157;(statearr_37186[24] = inst_37044);
return statearr_37186;
})();if(cljs.core.truth_(inst_37045))
{var statearr_37187_37264 = state_37157__$1;(statearr_37187_37264[1] = 13);
} else
{var statearr_37188_37265 = state_37157__$1;(statearr_37188_37265[1] = 14);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 42))
{var state_37157__$1 = state_37157;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37157__$1,45,dchan);
} else
{if((state_val_37158 === 11))
{var inst_37034 = (state_37157[16]);var inst_37054 = (state_37157[25]);var inst_37054__$1 = cljs.core.seq(inst_37034);var state_37157__$1 = (function (){var statearr_37189 = state_37157;(statearr_37189[25] = inst_37054__$1);
return statearr_37189;
})();if(inst_37054__$1)
{var statearr_37190_37266 = state_37157__$1;(statearr_37190_37266[1] = 16);
} else
{var statearr_37191_37267 = state_37157__$1;(statearr_37191_37267[1] = 17);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 43))
{var state_37157__$1 = state_37157;var statearr_37192_37268 = state_37157__$1;(statearr_37192_37268[2] = null);
(statearr_37192_37268[1] = 44);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 12))
{var inst_37080 = (state_37157[2]);var state_37157__$1 = state_37157;var statearr_37193_37269 = state_37157__$1;(statearr_37193_37269[2] = inst_37080);
(statearr_37193_37269[1] = 9);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 44))
{var inst_37150 = (state_37157[2]);var state_37157__$1 = (function (){var statearr_37194 = state_37157;(statearr_37194[26] = inst_37150);
return statearr_37194;
})();var statearr_37195_37270 = state_37157__$1;(statearr_37195_37270[2] = null);
(statearr_37195_37270[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 13))
{var inst_37044 = (state_37157[24]);var inst_37047 = cljs.core.async.close_BANG_(inst_37044);var state_37157__$1 = state_37157;var statearr_37196_37271 = state_37157__$1;(statearr_37196_37271[2] = inst_37047);
(statearr_37196_37271[1] = 15);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 45))
{var inst_37147 = (state_37157[2]);var state_37157__$1 = state_37157;var statearr_37200_37272 = state_37157__$1;(statearr_37200_37272[2] = inst_37147);
(statearr_37200_37272[1] = 44);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 14))
{var state_37157__$1 = state_37157;var statearr_37201_37273 = state_37157__$1;(statearr_37201_37273[2] = null);
(statearr_37201_37273[1] = 15);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 15))
{var inst_37036 = (state_37157[14]);var inst_37037 = (state_37157[15]);var inst_37034 = (state_37157[16]);var inst_37035 = (state_37157[17]);var inst_37050 = (state_37157[2]);var inst_37051 = (inst_37037 + 1);var tmp37197 = inst_37036;var tmp37198 = inst_37034;var tmp37199 = inst_37035;var inst_37034__$1 = tmp37198;var inst_37035__$1 = tmp37199;var inst_37036__$1 = tmp37197;var inst_37037__$1 = inst_37051;var state_37157__$1 = (function (){var statearr_37202 = state_37157;(statearr_37202[14] = inst_37036__$1);
(statearr_37202[15] = inst_37037__$1);
(statearr_37202[16] = inst_37034__$1);
(statearr_37202[17] = inst_37035__$1);
(statearr_37202[27] = inst_37050);
return statearr_37202;
})();var statearr_37203_37274 = state_37157__$1;(statearr_37203_37274[2] = null);
(statearr_37203_37274[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 16))
{var inst_37054 = (state_37157[25]);var inst_37056 = cljs.core.chunked_seq_QMARK_(inst_37054);var state_37157__$1 = state_37157;if(inst_37056)
{var statearr_37204_37275 = state_37157__$1;(statearr_37204_37275[1] = 19);
} else
{var statearr_37205_37276 = state_37157__$1;(statearr_37205_37276[1] = 20);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 17))
{var state_37157__$1 = state_37157;var statearr_37206_37277 = state_37157__$1;(statearr_37206_37277[2] = null);
(statearr_37206_37277[1] = 18);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 18))
{var inst_37078 = (state_37157[2]);var state_37157__$1 = state_37157;var statearr_37207_37278 = state_37157__$1;(statearr_37207_37278[2] = inst_37078);
(statearr_37207_37278[1] = 12);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 19))
{var inst_37054 = (state_37157[25]);var inst_37058 = cljs.core.chunk_first(inst_37054);var inst_37059 = cljs.core.chunk_rest(inst_37054);var inst_37060 = cljs.core.count(inst_37058);var inst_37034 = inst_37059;var inst_37035 = inst_37058;var inst_37036 = inst_37060;var inst_37037 = 0;var state_37157__$1 = (function (){var statearr_37208 = state_37157;(statearr_37208[14] = inst_37036);
(statearr_37208[15] = inst_37037);
(statearr_37208[16] = inst_37034);
(statearr_37208[17] = inst_37035);
return statearr_37208;
})();var statearr_37209_37279 = state_37157__$1;(statearr_37209_37279[2] = null);
(statearr_37209_37279[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 20))
{var inst_37054 = (state_37157[25]);var inst_37064 = cljs.core.first(inst_37054);var inst_37065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37064,0,null);var inst_37066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37064,1,null);var state_37157__$1 = (function (){var statearr_37210 = state_37157;(statearr_37210[28] = inst_37065);
return statearr_37210;
})();if(cljs.core.truth_(inst_37066))
{var statearr_37211_37280 = state_37157__$1;(statearr_37211_37280[1] = 22);
} else
{var statearr_37212_37281 = state_37157__$1;(statearr_37212_37281[1] = 23);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 21))
{var inst_37075 = (state_37157[2]);var state_37157__$1 = state_37157;var statearr_37213_37282 = state_37157__$1;(statearr_37213_37282[2] = inst_37075);
(statearr_37213_37282[1] = 18);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 22))
{var inst_37065 = (state_37157[28]);var inst_37068 = cljs.core.async.close_BANG_(inst_37065);var state_37157__$1 = state_37157;var statearr_37214_37283 = state_37157__$1;(statearr_37214_37283[2] = inst_37068);
(statearr_37214_37283[1] = 24);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 23))
{var state_37157__$1 = state_37157;var statearr_37215_37284 = state_37157__$1;(statearr_37215_37284[2] = null);
(statearr_37215_37284[1] = 24);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 24))
{var inst_37054 = (state_37157[25]);var inst_37071 = (state_37157[2]);var inst_37072 = cljs.core.next(inst_37054);var inst_37034 = inst_37072;var inst_37035 = null;var inst_37036 = 0;var inst_37037 = 0;var state_37157__$1 = (function (){var statearr_37216 = state_37157;(statearr_37216[14] = inst_37036);
(statearr_37216[15] = inst_37037);
(statearr_37216[16] = inst_37034);
(statearr_37216[17] = inst_37035);
(statearr_37216[29] = inst_37071);
return statearr_37216;
})();var statearr_37217_37285 = state_37157__$1;(statearr_37217_37285[2] = null);
(statearr_37217_37285[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 25))
{var inst_37095 = (state_37157[12]);var inst_37096 = (state_37157[13]);var inst_37098 = (inst_37096 < inst_37095);var inst_37099 = inst_37098;var state_37157__$1 = state_37157;if(cljs.core.truth_(inst_37099))
{var statearr_37218_37286 = state_37157__$1;(statearr_37218_37286[1] = 27);
} else
{var statearr_37219_37287 = state_37157__$1;(statearr_37219_37287[1] = 28);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 26))
{var inst_37085 = (state_37157[19]);var inst_37143 = (state_37157[2]);var inst_37144 = cljs.core.seq(inst_37085);var state_37157__$1 = (function (){var statearr_37220 = state_37157;(statearr_37220[30] = inst_37143);
return statearr_37220;
})();if(inst_37144)
{var statearr_37221_37288 = state_37157__$1;(statearr_37221_37288[1] = 42);
} else
{var statearr_37222_37289 = state_37157__$1;(statearr_37222_37289[1] = 43);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 27))
{var inst_37094 = (state_37157[11]);var inst_37096 = (state_37157[13]);var inst_37101 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37094,inst_37096);var state_37157__$1 = (function (){var statearr_37223 = state_37157;(statearr_37223[8] = inst_37101);
return statearr_37223;
})();var statearr_37224_37290 = state_37157__$1;(statearr_37224_37290[2] = null);
(statearr_37224_37290[1] = 32);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 28))
{var inst_37114 = (state_37157[9]);var inst_37093 = (state_37157[10]);var inst_37114__$1 = cljs.core.seq(inst_37093);var state_37157__$1 = (function (){var statearr_37228 = state_37157;(statearr_37228[9] = inst_37114__$1);
return statearr_37228;
})();if(inst_37114__$1)
{var statearr_37229_37291 = state_37157__$1;(statearr_37229_37291[1] = 33);
} else
{var statearr_37230_37292 = state_37157__$1;(statearr_37230_37292[1] = 34);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 29))
{var inst_37141 = (state_37157[2]);var state_37157__$1 = state_37157;var statearr_37231_37293 = state_37157__$1;(statearr_37231_37293[2] = inst_37141);
(statearr_37231_37293[1] = 26);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 30))
{var inst_37093 = (state_37157[10]);var inst_37094 = (state_37157[11]);var inst_37095 = (state_37157[12]);var inst_37096 = (state_37157[13]);var inst_37110 = (state_37157[2]);var inst_37111 = (inst_37096 + 1);var tmp37225 = inst_37093;var tmp37226 = inst_37094;var tmp37227 = inst_37095;var inst_37093__$1 = tmp37225;var inst_37094__$1 = tmp37226;var inst_37095__$1 = tmp37227;var inst_37096__$1 = inst_37111;var state_37157__$1 = (function (){var statearr_37232 = state_37157;(statearr_37232[31] = inst_37110);
(statearr_37232[10] = inst_37093__$1);
(statearr_37232[11] = inst_37094__$1);
(statearr_37232[12] = inst_37095__$1);
(statearr_37232[13] = inst_37096__$1);
return statearr_37232;
})();var statearr_37233_37294 = state_37157__$1;(statearr_37233_37294[2] = null);
(statearr_37233_37294[1] = 25);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37158 === 31))
{var inst_37101 = (state_37157[8]);var inst_37102 = (state_37157[2]);var inst_37103 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_37104 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37101);var state_37157__$1 = (function (){var statearr_37234 = state_37157;(statearr_37234[32] = inst_37102);
(statearr_37234[33] = inst_37103);
return statearr_37234;
})();var statearr_37235_37295 = state_37157__$1;(statearr_37235_37295[2] = inst_37104);
cljs.core.async.impl.ioc_helpers.process_exception(state_37157__$1);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37239[0] = state_machine__5548__auto__);
(statearr_37239[1] = 1);
return statearr_37239;
});
var state_machine__5548__auto____1 = (function (state_37157){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37157);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37240){if((e37240 instanceof Object))
{var ex__5551__auto__ = e37240;var statearr_37241_37296 = state_37157;(statearr_37241_37296[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37157);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e37240;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__37297 = state_37157;
state_37157 = G__37297;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37157){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37242 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37243);
return statearr_37242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
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
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj37299 = {};return obj37299;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$562,null,cljs.core.constant$keyword$563,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$564);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$563);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$564,chs);var pauses = pick(cljs.core.constant$keyword$562,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$565,solos,cljs.core.constant$keyword$566,pick(cljs.core.constant$keyword$563,chs),cljs.core.constant$keyword$567,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$562)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t37409 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37409 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta37410){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta37410 = meta37410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37409.cljs$lang$type = true;
cljs.core.async.t37409.cljs$lang$ctorStr = "cljs.core.async/t37409";
cljs.core.async.t37409.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37409");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37409.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t37409.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37409.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37409.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37409.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37409.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37409.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37411){var self__ = this;
var _37411__$1 = this;return self__.meta37410;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37411,meta37410__$1){var self__ = this;
var _37411__$1 = this;return (new cljs.core.async.t37409(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta37410__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t37409 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37409(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37410){return (new cljs.core.async.t37409(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37410));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t37409(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___37518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37476){var state_val_37477 = (state_37476[1]);if((state_val_37477 === 1))
{var inst_37415 = (state_37476[7]);var inst_37415__$1 = calc_state();var inst_37416 = cljs.core.seq_QMARK_(inst_37415__$1);var state_37476__$1 = (function (){var statearr_37478 = state_37476;(statearr_37478[7] = inst_37415__$1);
return statearr_37478;
})();if(inst_37416)
{var statearr_37479_37519 = state_37476__$1;(statearr_37479_37519[1] = 2);
} else
{var statearr_37480_37520 = state_37476__$1;(statearr_37480_37520[1] = 3);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 2))
{var inst_37415 = (state_37476[7]);var inst_37418 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37415);var state_37476__$1 = state_37476;var statearr_37481_37521 = state_37476__$1;(statearr_37481_37521[2] = inst_37418);
(statearr_37481_37521[1] = 4);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 3))
{var inst_37415 = (state_37476[7]);var state_37476__$1 = state_37476;var statearr_37482_37522 = state_37476__$1;(statearr_37482_37522[2] = inst_37415);
(statearr_37482_37522[1] = 4);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 4))
{var inst_37415 = (state_37476[7]);var inst_37421 = (state_37476[2]);var inst_37422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37421,cljs.core.constant$keyword$567);var inst_37423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37421,cljs.core.constant$keyword$566);var inst_37424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37421,cljs.core.constant$keyword$565);var inst_37425 = inst_37415;var state_37476__$1 = (function (){var statearr_37483 = state_37476;(statearr_37483[8] = inst_37425);
(statearr_37483[9] = inst_37424);
(statearr_37483[10] = inst_37423);
(statearr_37483[11] = inst_37422);
return statearr_37483;
})();var statearr_37484_37523 = state_37476__$1;(statearr_37484_37523[2] = null);
(statearr_37484_37523[1] = 5);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 5))
{var inst_37425 = (state_37476[8]);var inst_37428 = cljs.core.seq_QMARK_(inst_37425);var state_37476__$1 = state_37476;if(inst_37428)
{var statearr_37485_37524 = state_37476__$1;(statearr_37485_37524[1] = 7);
} else
{var statearr_37486_37525 = state_37476__$1;(statearr_37486_37525[1] = 8);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 6))
{var inst_37474 = (state_37476[2]);var state_37476__$1 = state_37476;return cljs.core.async.impl.ioc_helpers.return_chan(state_37476__$1,inst_37474);
} else
{if((state_val_37477 === 7))
{var inst_37425 = (state_37476[8]);var inst_37430 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37425);var state_37476__$1 = state_37476;var statearr_37487_37526 = state_37476__$1;(statearr_37487_37526[2] = inst_37430);
(statearr_37487_37526[1] = 9);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 8))
{var inst_37425 = (state_37476[8]);var state_37476__$1 = state_37476;var statearr_37488_37527 = state_37476__$1;(statearr_37488_37527[2] = inst_37425);
(statearr_37488_37527[1] = 9);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 9))
{var inst_37433 = (state_37476[12]);var inst_37433__$1 = (state_37476[2]);var inst_37434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37433__$1,cljs.core.constant$keyword$567);var inst_37435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37433__$1,cljs.core.constant$keyword$566);var inst_37436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37433__$1,cljs.core.constant$keyword$565);var state_37476__$1 = (function (){var statearr_37489 = state_37476;(statearr_37489[12] = inst_37433__$1);
(statearr_37489[13] = inst_37436);
(statearr_37489[14] = inst_37435);
return statearr_37489;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37476__$1,10,inst_37434);
} else
{if((state_val_37477 === 10))
{var inst_37441 = (state_37476[15]);var inst_37440 = (state_37476[16]);var inst_37439 = (state_37476[2]);var inst_37440__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37439,0,null);var inst_37441__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37439,1,null);var inst_37442 = (inst_37440__$1 == null);var inst_37443 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37441__$1,change);var inst_37444 = (inst_37442) || (inst_37443);var state_37476__$1 = (function (){var statearr_37490 = state_37476;(statearr_37490[15] = inst_37441__$1);
(statearr_37490[16] = inst_37440__$1);
return statearr_37490;
})();if(cljs.core.truth_(inst_37444))
{var statearr_37491_37528 = state_37476__$1;(statearr_37491_37528[1] = 11);
} else
{var statearr_37492_37529 = state_37476__$1;(statearr_37492_37529[1] = 12);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 11))
{var inst_37440 = (state_37476[16]);var inst_37446 = (inst_37440 == null);var state_37476__$1 = state_37476;if(cljs.core.truth_(inst_37446))
{var statearr_37493_37530 = state_37476__$1;(statearr_37493_37530[1] = 14);
} else
{var statearr_37494_37531 = state_37476__$1;(statearr_37494_37531[1] = 15);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 12))
{var inst_37441 = (state_37476[15]);var inst_37436 = (state_37476[13]);var inst_37455 = (state_37476[17]);var inst_37455__$1 = (inst_37436.cljs$core$IFn$_invoke$arity$1 ? inst_37436.cljs$core$IFn$_invoke$arity$1(inst_37441) : inst_37436.call(null,inst_37441));var state_37476__$1 = (function (){var statearr_37495 = state_37476;(statearr_37495[17] = inst_37455__$1);
return statearr_37495;
})();if(cljs.core.truth_(inst_37455__$1))
{var statearr_37496_37532 = state_37476__$1;(statearr_37496_37532[1] = 17);
} else
{var statearr_37497_37533 = state_37476__$1;(statearr_37497_37533[1] = 18);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 13))
{var inst_37472 = (state_37476[2]);var state_37476__$1 = state_37476;var statearr_37498_37534 = state_37476__$1;(statearr_37498_37534[2] = inst_37472);
(statearr_37498_37534[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 14))
{var inst_37441 = (state_37476[15]);var inst_37448 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37441);var state_37476__$1 = state_37476;var statearr_37499_37535 = state_37476__$1;(statearr_37499_37535[2] = inst_37448);
(statearr_37499_37535[1] = 16);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 15))
{var state_37476__$1 = state_37476;var statearr_37500_37536 = state_37476__$1;(statearr_37500_37536[2] = null);
(statearr_37500_37536[1] = 16);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 16))
{var inst_37451 = (state_37476[2]);var inst_37452 = calc_state();var inst_37425 = inst_37452;var state_37476__$1 = (function (){var statearr_37501 = state_37476;(statearr_37501[8] = inst_37425);
(statearr_37501[18] = inst_37451);
return statearr_37501;
})();var statearr_37502_37537 = state_37476__$1;(statearr_37502_37537[2] = null);
(statearr_37502_37537[1] = 5);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 17))
{var inst_37455 = (state_37476[17]);var state_37476__$1 = state_37476;var statearr_37503_37538 = state_37476__$1;(statearr_37503_37538[2] = inst_37455);
(statearr_37503_37538[1] = 19);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 18))
{var inst_37441 = (state_37476[15]);var inst_37436 = (state_37476[13]);var inst_37435 = (state_37476[14]);var inst_37458 = cljs.core.empty_QMARK_(inst_37436);var inst_37459 = (inst_37435.cljs$core$IFn$_invoke$arity$1 ? inst_37435.cljs$core$IFn$_invoke$arity$1(inst_37441) : inst_37435.call(null,inst_37441));var inst_37460 = cljs.core.not(inst_37459);var inst_37461 = (inst_37458) && (inst_37460);var state_37476__$1 = state_37476;var statearr_37504_37539 = state_37476__$1;(statearr_37504_37539[2] = inst_37461);
(statearr_37504_37539[1] = 19);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 19))
{var inst_37463 = (state_37476[2]);var state_37476__$1 = state_37476;if(cljs.core.truth_(inst_37463))
{var statearr_37505_37540 = state_37476__$1;(statearr_37505_37540[1] = 20);
} else
{var statearr_37506_37541 = state_37476__$1;(statearr_37506_37541[1] = 21);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 20))
{var inst_37440 = (state_37476[16]);var state_37476__$1 = state_37476;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37476__$1,23,out,inst_37440);
} else
{if((state_val_37477 === 21))
{var state_37476__$1 = state_37476;var statearr_37507_37542 = state_37476__$1;(statearr_37507_37542[2] = null);
(statearr_37507_37542[1] = 22);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 22))
{var inst_37433 = (state_37476[12]);var inst_37469 = (state_37476[2]);var inst_37425 = inst_37433;var state_37476__$1 = (function (){var statearr_37508 = state_37476;(statearr_37508[19] = inst_37469);
(statearr_37508[8] = inst_37425);
return statearr_37508;
})();var statearr_37509_37543 = state_37476__$1;(statearr_37509_37543[2] = null);
(statearr_37509_37543[1] = 5);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37477 === 23))
{var inst_37466 = (state_37476[2]);var state_37476__$1 = state_37476;var statearr_37510_37544 = state_37476__$1;(statearr_37510_37544[2] = inst_37466);
(statearr_37510_37544[1] = 22);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37514[0] = state_machine__5548__auto__);
(statearr_37514[1] = 1);
return statearr_37514;
});
var state_machine__5548__auto____1 = (function (state_37476){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37476);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37515){if((e37515 instanceof Object))
{var ex__5551__auto__ = e37515;var statearr_37516_37545 = state_37476;(statearr_37516_37545[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37476);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e37515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__37546 = state_37476;
state_37476 = G__37546;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37476){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37517 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37518);
return statearr_37517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj37548 = {};return obj37548;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3441__auto__,mults){
return (function (p1__37549_SHARP_){if(cljs.core.truth_((p1__37549_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37549_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37549_SHARP_.call(null,topic))))
{return p1__37549_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37549_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t37674 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37674 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37675){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37675 = meta37675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37674.cljs$lang$type = true;
cljs.core.async.t37674.cljs$lang$ctorStr = "cljs.core.async/t37674";
cljs.core.async.t37674.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37674");
});})(mults,ensure_mult))
;
cljs.core.async.t37674.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t37674.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t37674.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t37674.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t37674.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t37674.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37674.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t37674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37676){var self__ = this;
var _37676__$1 = this;return self__.meta37675;
});})(mults,ensure_mult))
;
cljs.core.async.t37674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37676,meta37675__$1){var self__ = this;
var _37676__$1 = this;return (new cljs.core.async.t37674(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37675__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t37674 = ((function (mults,ensure_mult){
return (function __GT_t37674(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37675){return (new cljs.core.async.t37674(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37675));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t37674(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___37798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37750){var state_val_37751 = (state_37750[1]);if((state_val_37751 === 1))
{var state_37750__$1 = state_37750;var statearr_37752_37799 = state_37750__$1;(statearr_37752_37799[2] = null);
(statearr_37752_37799[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 2))
{var state_37750__$1 = state_37750;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37750__$1,4,ch);
} else
{if((state_val_37751 === 3))
{var inst_37748 = (state_37750[2]);var state_37750__$1 = state_37750;return cljs.core.async.impl.ioc_helpers.return_chan(state_37750__$1,inst_37748);
} else
{if((state_val_37751 === 4))
{var inst_37679 = (state_37750[7]);var inst_37679__$1 = (state_37750[2]);var inst_37680 = (inst_37679__$1 == null);var state_37750__$1 = (function (){var statearr_37753 = state_37750;(statearr_37753[7] = inst_37679__$1);
return statearr_37753;
})();if(cljs.core.truth_(inst_37680))
{var statearr_37754_37800 = state_37750__$1;(statearr_37754_37800[1] = 5);
} else
{var statearr_37755_37801 = state_37750__$1;(statearr_37755_37801[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 5))
{var inst_37686 = cljs.core.deref(mults);var inst_37687 = cljs.core.vals(inst_37686);var inst_37688 = cljs.core.seq(inst_37687);var inst_37689 = inst_37688;var inst_37690 = null;var inst_37691 = 0;var inst_37692 = 0;var state_37750__$1 = (function (){var statearr_37756 = state_37750;(statearr_37756[8] = inst_37689);
(statearr_37756[9] = inst_37691);
(statearr_37756[10] = inst_37690);
(statearr_37756[11] = inst_37692);
return statearr_37756;
})();var statearr_37757_37802 = state_37750__$1;(statearr_37757_37802[2] = null);
(statearr_37757_37802[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 6))
{var inst_37729 = (state_37750[12]);var inst_37679 = (state_37750[7]);var inst_37727 = (state_37750[13]);var inst_37727__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37679) : topic_fn.call(null,inst_37679));var inst_37728 = cljs.core.deref(mults);var inst_37729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37728,inst_37727__$1);var state_37750__$1 = (function (){var statearr_37758 = state_37750;(statearr_37758[12] = inst_37729__$1);
(statearr_37758[13] = inst_37727__$1);
return statearr_37758;
})();if(cljs.core.truth_(inst_37729__$1))
{var statearr_37759_37803 = state_37750__$1;(statearr_37759_37803[1] = 19);
} else
{var statearr_37760_37804 = state_37750__$1;(statearr_37760_37804[1] = 20);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 7))
{var inst_37746 = (state_37750[2]);var state_37750__$1 = state_37750;var statearr_37761_37805 = state_37750__$1;(statearr_37761_37805[2] = inst_37746);
(statearr_37761_37805[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 8))
{var inst_37691 = (state_37750[9]);var inst_37692 = (state_37750[11]);var inst_37694 = (inst_37692 < inst_37691);var inst_37695 = inst_37694;var state_37750__$1 = state_37750;if(cljs.core.truth_(inst_37695))
{var statearr_37765_37806 = state_37750__$1;(statearr_37765_37806[1] = 10);
} else
{var statearr_37766_37807 = state_37750__$1;(statearr_37766_37807[1] = 11);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 9))
{var inst_37725 = (state_37750[2]);var state_37750__$1 = state_37750;var statearr_37767_37808 = state_37750__$1;(statearr_37767_37808[2] = inst_37725);
(statearr_37767_37808[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 10))
{var inst_37689 = (state_37750[8]);var inst_37691 = (state_37750[9]);var inst_37690 = (state_37750[10]);var inst_37692 = (state_37750[11]);var inst_37697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37690,inst_37692);var inst_37698 = cljs.core.async.muxch_STAR_(inst_37697);var inst_37699 = cljs.core.async.close_BANG_(inst_37698);var inst_37700 = (inst_37692 + 1);var tmp37762 = inst_37689;var tmp37763 = inst_37691;var tmp37764 = inst_37690;var inst_37689__$1 = tmp37762;var inst_37690__$1 = tmp37764;var inst_37691__$1 = tmp37763;var inst_37692__$1 = inst_37700;var state_37750__$1 = (function (){var statearr_37768 = state_37750;(statearr_37768[8] = inst_37689__$1);
(statearr_37768[9] = inst_37691__$1);
(statearr_37768[10] = inst_37690__$1);
(statearr_37768[11] = inst_37692__$1);
(statearr_37768[14] = inst_37699);
return statearr_37768;
})();var statearr_37769_37809 = state_37750__$1;(statearr_37769_37809[2] = null);
(statearr_37769_37809[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 11))
{var inst_37689 = (state_37750[8]);var inst_37703 = (state_37750[15]);var inst_37703__$1 = cljs.core.seq(inst_37689);var state_37750__$1 = (function (){var statearr_37770 = state_37750;(statearr_37770[15] = inst_37703__$1);
return statearr_37770;
})();if(inst_37703__$1)
{var statearr_37771_37810 = state_37750__$1;(statearr_37771_37810[1] = 13);
} else
{var statearr_37772_37811 = state_37750__$1;(statearr_37772_37811[1] = 14);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 12))
{var inst_37723 = (state_37750[2]);var state_37750__$1 = state_37750;var statearr_37773_37812 = state_37750__$1;(statearr_37773_37812[2] = inst_37723);
(statearr_37773_37812[1] = 9);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 13))
{var inst_37703 = (state_37750[15]);var inst_37705 = cljs.core.chunked_seq_QMARK_(inst_37703);var state_37750__$1 = state_37750;if(inst_37705)
{var statearr_37774_37813 = state_37750__$1;(statearr_37774_37813[1] = 16);
} else
{var statearr_37775_37814 = state_37750__$1;(statearr_37775_37814[1] = 17);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 14))
{var state_37750__$1 = state_37750;var statearr_37776_37815 = state_37750__$1;(statearr_37776_37815[2] = null);
(statearr_37776_37815[1] = 15);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 15))
{var inst_37721 = (state_37750[2]);var state_37750__$1 = state_37750;var statearr_37777_37816 = state_37750__$1;(statearr_37777_37816[2] = inst_37721);
(statearr_37777_37816[1] = 12);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 16))
{var inst_37703 = (state_37750[15]);var inst_37707 = cljs.core.chunk_first(inst_37703);var inst_37708 = cljs.core.chunk_rest(inst_37703);var inst_37709 = cljs.core.count(inst_37707);var inst_37689 = inst_37708;var inst_37690 = inst_37707;var inst_37691 = inst_37709;var inst_37692 = 0;var state_37750__$1 = (function (){var statearr_37778 = state_37750;(statearr_37778[8] = inst_37689);
(statearr_37778[9] = inst_37691);
(statearr_37778[10] = inst_37690);
(statearr_37778[11] = inst_37692);
return statearr_37778;
})();var statearr_37779_37817 = state_37750__$1;(statearr_37779_37817[2] = null);
(statearr_37779_37817[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 17))
{var inst_37703 = (state_37750[15]);var inst_37712 = cljs.core.first(inst_37703);var inst_37713 = cljs.core.async.muxch_STAR_(inst_37712);var inst_37714 = cljs.core.async.close_BANG_(inst_37713);var inst_37715 = cljs.core.next(inst_37703);var inst_37689 = inst_37715;var inst_37690 = null;var inst_37691 = 0;var inst_37692 = 0;var state_37750__$1 = (function (){var statearr_37780 = state_37750;(statearr_37780[16] = inst_37714);
(statearr_37780[8] = inst_37689);
(statearr_37780[9] = inst_37691);
(statearr_37780[10] = inst_37690);
(statearr_37780[11] = inst_37692);
return statearr_37780;
})();var statearr_37781_37818 = state_37750__$1;(statearr_37781_37818[2] = null);
(statearr_37781_37818[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 18))
{var inst_37718 = (state_37750[2]);var state_37750__$1 = state_37750;var statearr_37782_37819 = state_37750__$1;(statearr_37782_37819[2] = inst_37718);
(statearr_37782_37819[1] = 15);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 19))
{var state_37750__$1 = state_37750;var statearr_37783_37820 = state_37750__$1;(statearr_37783_37820[2] = null);
(statearr_37783_37820[1] = 24);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 20))
{var state_37750__$1 = state_37750;var statearr_37784_37821 = state_37750__$1;(statearr_37784_37821[2] = null);
(statearr_37784_37821[1] = 21);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 21))
{var inst_37743 = (state_37750[2]);var state_37750__$1 = (function (){var statearr_37785 = state_37750;(statearr_37785[17] = inst_37743);
return statearr_37785;
})();var statearr_37786_37822 = state_37750__$1;(statearr_37786_37822[2] = null);
(statearr_37786_37822[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 22))
{var inst_37740 = (state_37750[2]);var state_37750__$1 = state_37750;var statearr_37787_37823 = state_37750__$1;(statearr_37787_37823[2] = inst_37740);
(statearr_37787_37823[1] = 21);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 23))
{var inst_37727 = (state_37750[13]);var inst_37731 = (state_37750[2]);var inst_37732 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37727);var state_37750__$1 = (function (){var statearr_37788 = state_37750;(statearr_37788[18] = inst_37731);
return statearr_37788;
})();var statearr_37789_37824 = state_37750__$1;(statearr_37789_37824[2] = inst_37732);
cljs.core.async.impl.ioc_helpers.process_exception(state_37750__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37751 === 24))
{var inst_37729 = (state_37750[12]);var inst_37679 = (state_37750[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37750,23,Object,null,22);var inst_37736 = cljs.core.async.muxch_STAR_(inst_37729);var state_37750__$1 = state_37750;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37750__$1,25,inst_37736,inst_37679);
} else
{if((state_val_37751 === 25))
{var inst_37738 = (state_37750[2]);var state_37750__$1 = state_37750;var statearr_37790_37825 = state_37750__$1;(statearr_37790_37825[2] = inst_37738);
cljs.core.async.impl.ioc_helpers.process_exception(state_37750__$1);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37794[0] = state_machine__5548__auto__);
(statearr_37794[1] = 1);
return statearr_37794;
});
var state_machine__5548__auto____1 = (function (state_37750){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37750);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37795){if((e37795 instanceof Object))
{var ex__5551__auto__ = e37795;var statearr_37796_37826 = state_37750;(statearr_37796_37826[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37750);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e37795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__37827 = state_37750;
state_37750 = G__37827;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37750){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37797 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37798);
return statearr_37797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
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
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5562__auto___37964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37934){var state_val_37935 = (state_37934[1]);if((state_val_37935 === 1))
{var state_37934__$1 = state_37934;var statearr_37936_37965 = state_37934__$1;(statearr_37936_37965[2] = null);
(statearr_37936_37965[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 2))
{var inst_37897 = cljs.core.reset_BANG_(dctr,cnt);var inst_37898 = 0;var state_37934__$1 = (function (){var statearr_37937 = state_37934;(statearr_37937[7] = inst_37898);
(statearr_37937[8] = inst_37897);
return statearr_37937;
})();var statearr_37938_37966 = state_37934__$1;(statearr_37938_37966[2] = null);
(statearr_37938_37966[1] = 4);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 3))
{var inst_37932 = (state_37934[2]);var state_37934__$1 = state_37934;return cljs.core.async.impl.ioc_helpers.return_chan(state_37934__$1,inst_37932);
} else
{if((state_val_37935 === 4))
{var inst_37898 = (state_37934[7]);var inst_37900 = (inst_37898 < cnt);var state_37934__$1 = state_37934;if(cljs.core.truth_(inst_37900))
{var statearr_37939_37967 = state_37934__$1;(statearr_37939_37967[1] = 6);
} else
{var statearr_37940_37968 = state_37934__$1;(statearr_37940_37968[1] = 7);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 5))
{var inst_37918 = (state_37934[2]);var state_37934__$1 = (function (){var statearr_37941 = state_37934;(statearr_37941[9] = inst_37918);
return statearr_37941;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37934__$1,12,dchan);
} else
{if((state_val_37935 === 6))
{var state_37934__$1 = state_37934;var statearr_37942_37969 = state_37934__$1;(statearr_37942_37969[2] = null);
(statearr_37942_37969[1] = 11);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 7))
{var state_37934__$1 = state_37934;var statearr_37943_37970 = state_37934__$1;(statearr_37943_37970[2] = null);
(statearr_37943_37970[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 8))
{var inst_37916 = (state_37934[2]);var state_37934__$1 = state_37934;var statearr_37944_37971 = state_37934__$1;(statearr_37944_37971[2] = inst_37916);
(statearr_37944_37971[1] = 5);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 9))
{var inst_37898 = (state_37934[7]);var inst_37911 = (state_37934[2]);var inst_37912 = (inst_37898 + 1);var inst_37898__$1 = inst_37912;var state_37934__$1 = (function (){var statearr_37945 = state_37934;(statearr_37945[10] = inst_37911);
(statearr_37945[7] = inst_37898__$1);
return statearr_37945;
})();var statearr_37946_37972 = state_37934__$1;(statearr_37946_37972[2] = null);
(statearr_37946_37972[1] = 4);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 10))
{var inst_37902 = (state_37934[2]);var inst_37903 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_37934__$1 = (function (){var statearr_37947 = state_37934;(statearr_37947[11] = inst_37902);
return statearr_37947;
})();var statearr_37948_37973 = state_37934__$1;(statearr_37948_37973[2] = inst_37903);
cljs.core.async.impl.ioc_helpers.process_exception(state_37934__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 11))
{var inst_37898 = (state_37934[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37934,10,Object,null,9);var inst_37907 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37898) : chs__$1.call(null,inst_37898));var inst_37908 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37898) : done.call(null,inst_37898));var inst_37909 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37907,inst_37908);var state_37934__$1 = state_37934;var statearr_37949_37974 = state_37934__$1;(statearr_37949_37974[2] = inst_37909);
cljs.core.async.impl.ioc_helpers.process_exception(state_37934__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 12))
{var inst_37920 = (state_37934[12]);var inst_37920__$1 = (state_37934[2]);var inst_37921 = cljs.core.some(cljs.core.nil_QMARK_,inst_37920__$1);var state_37934__$1 = (function (){var statearr_37950 = state_37934;(statearr_37950[12] = inst_37920__$1);
return statearr_37950;
})();if(cljs.core.truth_(inst_37921))
{var statearr_37951_37975 = state_37934__$1;(statearr_37951_37975[1] = 13);
} else
{var statearr_37952_37976 = state_37934__$1;(statearr_37952_37976[1] = 14);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 13))
{var inst_37923 = cljs.core.async.close_BANG_(out);var state_37934__$1 = state_37934;var statearr_37953_37977 = state_37934__$1;(statearr_37953_37977[2] = inst_37923);
(statearr_37953_37977[1] = 15);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 14))
{var inst_37920 = (state_37934[12]);var inst_37925 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37920);var state_37934__$1 = state_37934;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37934__$1,16,out,inst_37925);
} else
{if((state_val_37935 === 15))
{var inst_37930 = (state_37934[2]);var state_37934__$1 = state_37934;var statearr_37954_37978 = state_37934__$1;(statearr_37954_37978[2] = inst_37930);
(statearr_37954_37978[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37935 === 16))
{var inst_37927 = (state_37934[2]);var state_37934__$1 = (function (){var statearr_37955 = state_37934;(statearr_37955[13] = inst_37927);
return statearr_37955;
})();var statearr_37956_37979 = state_37934__$1;(statearr_37956_37979[2] = null);
(statearr_37956_37979[1] = 2);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_37960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37960[0] = state_machine__5548__auto__);
(statearr_37960[1] = 1);
return statearr_37960;
});
var state_machine__5548__auto____1 = (function (state_37934){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37934);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37961){if((e37961 instanceof Object))
{var ex__5551__auto__ = e37961;var statearr_37962_37980 = state_37934;(statearr_37962_37980[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37934);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e37961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__37981 = state_37934;
state_37934 = G__37981;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37934){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37963 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37964);
return statearr_37963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
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
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38065){var state_val_38066 = (state_38065[1]);if((state_val_38066 === 1))
{var inst_38036 = cljs.core.vec(chs);var inst_38037 = inst_38036;var state_38065__$1 = (function (){var statearr_38067 = state_38065;(statearr_38067[7] = inst_38037);
return statearr_38067;
})();var statearr_38068_38090 = state_38065__$1;(statearr_38068_38090[2] = null);
(statearr_38068_38090[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38066 === 2))
{var inst_38037 = (state_38065[7]);var inst_38039 = cljs.core.count(inst_38037);var inst_38040 = (inst_38039 > 0);var state_38065__$1 = state_38065;if(cljs.core.truth_(inst_38040))
{var statearr_38069_38091 = state_38065__$1;(statearr_38069_38091[1] = 4);
} else
{var statearr_38070_38092 = state_38065__$1;(statearr_38070_38092[1] = 5);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38066 === 3))
{var inst_38063 = (state_38065[2]);var state_38065__$1 = state_38065;return cljs.core.async.impl.ioc_helpers.return_chan(state_38065__$1,inst_38063);
} else
{if((state_val_38066 === 4))
{var inst_38037 = (state_38065[7]);var state_38065__$1 = state_38065;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_38065__$1,7,inst_38037);
} else
{if((state_val_38066 === 5))
{var inst_38059 = cljs.core.async.close_BANG_(out);var state_38065__$1 = state_38065;var statearr_38071_38093 = state_38065__$1;(statearr_38071_38093[2] = inst_38059);
(statearr_38071_38093[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38066 === 6))
{var inst_38061 = (state_38065[2]);var state_38065__$1 = state_38065;var statearr_38072_38094 = state_38065__$1;(statearr_38072_38094[2] = inst_38061);
(statearr_38072_38094[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38066 === 7))
{var inst_38045 = (state_38065[8]);var inst_38044 = (state_38065[9]);var inst_38044__$1 = (state_38065[2]);var inst_38045__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38044__$1,0,null);var inst_38046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38044__$1,1,null);var inst_38047 = (inst_38045__$1 == null);var state_38065__$1 = (function (){var statearr_38073 = state_38065;(statearr_38073[10] = inst_38046);
(statearr_38073[8] = inst_38045__$1);
(statearr_38073[9] = inst_38044__$1);
return statearr_38073;
})();if(cljs.core.truth_(inst_38047))
{var statearr_38074_38095 = state_38065__$1;(statearr_38074_38095[1] = 8);
} else
{var statearr_38075_38096 = state_38065__$1;(statearr_38075_38096[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38066 === 8))
{var inst_38046 = (state_38065[10]);var inst_38045 = (state_38065[8]);var inst_38044 = (state_38065[9]);var inst_38037 = (state_38065[7]);var inst_38049 = (function (){var c = inst_38046;var v = inst_38045;var vec__38042 = inst_38044;var cs = inst_38037;return ((function (c,v,vec__38042,cs,inst_38046,inst_38045,inst_38044,inst_38037,state_val_38066){
return (function (p1__37982_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37982_SHARP_);
});
;})(c,v,vec__38042,cs,inst_38046,inst_38045,inst_38044,inst_38037,state_val_38066))
})();var inst_38050 = cljs.core.filterv(inst_38049,inst_38037);var inst_38037__$1 = inst_38050;var state_38065__$1 = (function (){var statearr_38076 = state_38065;(statearr_38076[7] = inst_38037__$1);
return statearr_38076;
})();var statearr_38077_38097 = state_38065__$1;(statearr_38077_38097[2] = null);
(statearr_38077_38097[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38066 === 9))
{var inst_38045 = (state_38065[8]);var state_38065__$1 = state_38065;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38065__$1,11,out,inst_38045);
} else
{if((state_val_38066 === 10))
{var inst_38057 = (state_38065[2]);var state_38065__$1 = state_38065;var statearr_38079_38098 = state_38065__$1;(statearr_38079_38098[2] = inst_38057);
(statearr_38079_38098[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38066 === 11))
{var inst_38037 = (state_38065[7]);var inst_38054 = (state_38065[2]);var tmp38078 = inst_38037;var inst_38037__$1 = tmp38078;var state_38065__$1 = (function (){var statearr_38080 = state_38065;(statearr_38080[11] = inst_38054);
(statearr_38080[7] = inst_38037__$1);
return statearr_38080;
})();var statearr_38081_38099 = state_38065__$1;(statearr_38081_38099[2] = null);
(statearr_38081_38099[1] = 2);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38085 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38085[0] = state_machine__5548__auto__);
(statearr_38085[1] = 1);
return statearr_38085;
});
var state_machine__5548__auto____1 = (function (state_38065){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38065);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38086){if((e38086 instanceof Object))
{var ex__5551__auto__ = e38086;var statearr_38087_38100 = state_38065;(statearr_38087_38100[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38065);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e38086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__38101 = state_38065;
state_38065 = G__38101;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38065){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38088 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38089);
return statearr_38088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38171){var state_val_38172 = (state_38171[1]);if((state_val_38172 === 1))
{var inst_38148 = 0;var state_38171__$1 = (function (){var statearr_38173 = state_38171;(statearr_38173[7] = inst_38148);
return statearr_38173;
})();var statearr_38174_38195 = state_38171__$1;(statearr_38174_38195[2] = null);
(statearr_38174_38195[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38172 === 2))
{var inst_38148 = (state_38171[7]);var inst_38150 = (inst_38148 < n);var state_38171__$1 = state_38171;if(cljs.core.truth_(inst_38150))
{var statearr_38175_38196 = state_38171__$1;(statearr_38175_38196[1] = 4);
} else
{var statearr_38176_38197 = state_38171__$1;(statearr_38176_38197[1] = 5);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38172 === 3))
{var inst_38168 = (state_38171[2]);var inst_38169 = cljs.core.async.close_BANG_(out);var state_38171__$1 = (function (){var statearr_38177 = state_38171;(statearr_38177[8] = inst_38168);
return statearr_38177;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38171__$1,inst_38169);
} else
{if((state_val_38172 === 4))
{var state_38171__$1 = state_38171;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38171__$1,7,ch);
} else
{if((state_val_38172 === 5))
{var state_38171__$1 = state_38171;var statearr_38178_38198 = state_38171__$1;(statearr_38178_38198[2] = null);
(statearr_38178_38198[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38172 === 6))
{var inst_38166 = (state_38171[2]);var state_38171__$1 = state_38171;var statearr_38179_38199 = state_38171__$1;(statearr_38179_38199[2] = inst_38166);
(statearr_38179_38199[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38172 === 7))
{var inst_38153 = (state_38171[9]);var inst_38153__$1 = (state_38171[2]);var inst_38154 = (inst_38153__$1 == null);var inst_38155 = cljs.core.not(inst_38154);var state_38171__$1 = (function (){var statearr_38180 = state_38171;(statearr_38180[9] = inst_38153__$1);
return statearr_38180;
})();if(inst_38155)
{var statearr_38181_38200 = state_38171__$1;(statearr_38181_38200[1] = 8);
} else
{var statearr_38182_38201 = state_38171__$1;(statearr_38182_38201[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38172 === 8))
{var inst_38153 = (state_38171[9]);var state_38171__$1 = state_38171;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38171__$1,11,out,inst_38153);
} else
{if((state_val_38172 === 9))
{var state_38171__$1 = state_38171;var statearr_38183_38202 = state_38171__$1;(statearr_38183_38202[2] = null);
(statearr_38183_38202[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38172 === 10))
{var inst_38163 = (state_38171[2]);var state_38171__$1 = state_38171;var statearr_38184_38203 = state_38171__$1;(statearr_38184_38203[2] = inst_38163);
(statearr_38184_38203[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38172 === 11))
{var inst_38148 = (state_38171[7]);var inst_38158 = (state_38171[2]);var inst_38159 = (inst_38148 + 1);var inst_38148__$1 = inst_38159;var state_38171__$1 = (function (){var statearr_38185 = state_38171;(statearr_38185[7] = inst_38148__$1);
(statearr_38185[10] = inst_38158);
return statearr_38185;
})();var statearr_38186_38204 = state_38171__$1;(statearr_38186_38204[2] = null);
(statearr_38186_38204[1] = 2);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38190 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38190[0] = state_machine__5548__auto__);
(statearr_38190[1] = 1);
return statearr_38190;
});
var state_machine__5548__auto____1 = (function (state_38171){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38171);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38191){if((e38191 instanceof Object))
{var ex__5551__auto__ = e38191;var statearr_38192_38205 = state_38171;(statearr_38192_38205[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38171);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e38191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__38206 = state_38171;
state_38171 = G__38206;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38171){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38193 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38194);
return statearr_38193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
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
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38278){var state_val_38279 = (state_38278[1]);if((state_val_38279 === 1))
{var inst_38255 = null;var state_38278__$1 = (function (){var statearr_38280 = state_38278;(statearr_38280[7] = inst_38255);
return statearr_38280;
})();var statearr_38281_38304 = state_38278__$1;(statearr_38281_38304[2] = null);
(statearr_38281_38304[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38279 === 2))
{var state_38278__$1 = state_38278;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38278__$1,4,ch);
} else
{if((state_val_38279 === 3))
{var inst_38275 = (state_38278[2]);var inst_38276 = cljs.core.async.close_BANG_(out);var state_38278__$1 = (function (){var statearr_38282 = state_38278;(statearr_38282[8] = inst_38275);
return statearr_38282;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38278__$1,inst_38276);
} else
{if((state_val_38279 === 4))
{var inst_38258 = (state_38278[9]);var inst_38258__$1 = (state_38278[2]);var inst_38259 = (inst_38258__$1 == null);var inst_38260 = cljs.core.not(inst_38259);var state_38278__$1 = (function (){var statearr_38283 = state_38278;(statearr_38283[9] = inst_38258__$1);
return statearr_38283;
})();if(inst_38260)
{var statearr_38284_38305 = state_38278__$1;(statearr_38284_38305[1] = 5);
} else
{var statearr_38285_38306 = state_38278__$1;(statearr_38285_38306[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38279 === 5))
{var inst_38258 = (state_38278[9]);var inst_38255 = (state_38278[7]);var inst_38262 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38258,inst_38255);var state_38278__$1 = state_38278;if(inst_38262)
{var statearr_38286_38307 = state_38278__$1;(statearr_38286_38307[1] = 8);
} else
{var statearr_38287_38308 = state_38278__$1;(statearr_38287_38308[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38279 === 6))
{var state_38278__$1 = state_38278;var statearr_38289_38309 = state_38278__$1;(statearr_38289_38309[2] = null);
(statearr_38289_38309[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38279 === 7))
{var inst_38273 = (state_38278[2]);var state_38278__$1 = state_38278;var statearr_38290_38310 = state_38278__$1;(statearr_38290_38310[2] = inst_38273);
(statearr_38290_38310[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38279 === 8))
{var inst_38255 = (state_38278[7]);var tmp38288 = inst_38255;var inst_38255__$1 = tmp38288;var state_38278__$1 = (function (){var statearr_38291 = state_38278;(statearr_38291[7] = inst_38255__$1);
return statearr_38291;
})();var statearr_38292_38311 = state_38278__$1;(statearr_38292_38311[2] = null);
(statearr_38292_38311[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38279 === 9))
{var inst_38258 = (state_38278[9]);var state_38278__$1 = state_38278;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38278__$1,11,out,inst_38258);
} else
{if((state_val_38279 === 10))
{var inst_38270 = (state_38278[2]);var state_38278__$1 = state_38278;var statearr_38293_38312 = state_38278__$1;(statearr_38293_38312[2] = inst_38270);
(statearr_38293_38312[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38279 === 11))
{var inst_38258 = (state_38278[9]);var inst_38267 = (state_38278[2]);var inst_38255 = inst_38258;var state_38278__$1 = (function (){var statearr_38294 = state_38278;(statearr_38294[7] = inst_38255);
(statearr_38294[10] = inst_38267);
return statearr_38294;
})();var statearr_38295_38313 = state_38278__$1;(statearr_38295_38313[2] = null);
(statearr_38295_38313[1] = 2);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38299 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38299[0] = state_machine__5548__auto__);
(statearr_38299[1] = 1);
return statearr_38299;
});
var state_machine__5548__auto____1 = (function (state_38278){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38278);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38300){if((e38300 instanceof Object))
{var ex__5551__auto__ = e38300;var statearr_38301_38314 = state_38278;(statearr_38301_38314[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38278);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e38300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__38315 = state_38278;
state_38278 = G__38315;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38278){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38302 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38303);
return statearr_38302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
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
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38420){var state_val_38421 = (state_38420[1]);if((state_val_38421 === 1))
{var inst_38383 = (new Array(n));var inst_38384 = inst_38383;var inst_38385 = 0;var state_38420__$1 = (function (){var statearr_38422 = state_38420;(statearr_38422[7] = inst_38384);
(statearr_38422[8] = inst_38385);
return statearr_38422;
})();var statearr_38423_38451 = state_38420__$1;(statearr_38423_38451[2] = null);
(statearr_38423_38451[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38421 === 2))
{var state_38420__$1 = state_38420;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38420__$1,4,ch);
} else
{if((state_val_38421 === 3))
{var inst_38418 = (state_38420[2]);var state_38420__$1 = state_38420;return cljs.core.async.impl.ioc_helpers.return_chan(state_38420__$1,inst_38418);
} else
{if((state_val_38421 === 4))
{var inst_38388 = (state_38420[9]);var inst_38388__$1 = (state_38420[2]);var inst_38389 = (inst_38388__$1 == null);var inst_38390 = cljs.core.not(inst_38389);var state_38420__$1 = (function (){var statearr_38424 = state_38420;(statearr_38424[9] = inst_38388__$1);
return statearr_38424;
})();if(inst_38390)
{var statearr_38425_38452 = state_38420__$1;(statearr_38425_38452[1] = 5);
} else
{var statearr_38426_38453 = state_38420__$1;(statearr_38426_38453[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38421 === 5))
{var inst_38393 = (state_38420[10]);var inst_38388 = (state_38420[9]);var inst_38384 = (state_38420[7]);var inst_38385 = (state_38420[8]);var inst_38392 = (inst_38384[inst_38385] = inst_38388);var inst_38393__$1 = (inst_38385 + 1);var inst_38394 = (inst_38393__$1 < n);var state_38420__$1 = (function (){var statearr_38427 = state_38420;(statearr_38427[11] = inst_38392);
(statearr_38427[10] = inst_38393__$1);
return statearr_38427;
})();if(cljs.core.truth_(inst_38394))
{var statearr_38428_38454 = state_38420__$1;(statearr_38428_38454[1] = 8);
} else
{var statearr_38429_38455 = state_38420__$1;(statearr_38429_38455[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38421 === 6))
{var inst_38385 = (state_38420[8]);var inst_38406 = (inst_38385 > 0);var state_38420__$1 = state_38420;if(cljs.core.truth_(inst_38406))
{var statearr_38431_38456 = state_38420__$1;(statearr_38431_38456[1] = 12);
} else
{var statearr_38432_38457 = state_38420__$1;(statearr_38432_38457[1] = 13);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38421 === 7))
{var inst_38416 = (state_38420[2]);var state_38420__$1 = state_38420;var statearr_38433_38458 = state_38420__$1;(statearr_38433_38458[2] = inst_38416);
(statearr_38433_38458[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38421 === 8))
{var inst_38393 = (state_38420[10]);var inst_38384 = (state_38420[7]);var tmp38430 = inst_38384;var inst_38384__$1 = tmp38430;var inst_38385 = inst_38393;var state_38420__$1 = (function (){var statearr_38434 = state_38420;(statearr_38434[7] = inst_38384__$1);
(statearr_38434[8] = inst_38385);
return statearr_38434;
})();var statearr_38435_38459 = state_38420__$1;(statearr_38435_38459[2] = null);
(statearr_38435_38459[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38421 === 9))
{var inst_38384 = (state_38420[7]);var inst_38398 = cljs.core.vec(inst_38384);var state_38420__$1 = state_38420;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38420__$1,11,out,inst_38398);
} else
{if((state_val_38421 === 10))
{var inst_38404 = (state_38420[2]);var state_38420__$1 = state_38420;var statearr_38436_38460 = state_38420__$1;(statearr_38436_38460[2] = inst_38404);
(statearr_38436_38460[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38421 === 11))
{var inst_38400 = (state_38420[2]);var inst_38401 = (new Array(n));var inst_38384 = inst_38401;var inst_38385 = 0;var state_38420__$1 = (function (){var statearr_38437 = state_38420;(statearr_38437[12] = inst_38400);
(statearr_38437[7] = inst_38384);
(statearr_38437[8] = inst_38385);
return statearr_38437;
})();var statearr_38438_38461 = state_38420__$1;(statearr_38438_38461[2] = null);
(statearr_38438_38461[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38421 === 12))
{var inst_38384 = (state_38420[7]);var inst_38408 = cljs.core.vec(inst_38384);var state_38420__$1 = state_38420;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38420__$1,15,out,inst_38408);
} else
{if((state_val_38421 === 13))
{var state_38420__$1 = state_38420;var statearr_38439_38462 = state_38420__$1;(statearr_38439_38462[2] = null);
(statearr_38439_38462[1] = 14);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38421 === 14))
{var inst_38413 = (state_38420[2]);var inst_38414 = cljs.core.async.close_BANG_(out);var state_38420__$1 = (function (){var statearr_38440 = state_38420;(statearr_38440[13] = inst_38413);
return statearr_38440;
})();var statearr_38441_38463 = state_38420__$1;(statearr_38441_38463[2] = inst_38414);
(statearr_38441_38463[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38421 === 15))
{var inst_38410 = (state_38420[2]);var state_38420__$1 = state_38420;var statearr_38442_38464 = state_38420__$1;(statearr_38442_38464[2] = inst_38410);
(statearr_38442_38464[1] = 14);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38446[0] = state_machine__5548__auto__);
(statearr_38446[1] = 1);
return statearr_38446;
});
var state_machine__5548__auto____1 = (function (state_38420){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38420);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38447){if((e38447 instanceof Object))
{var ex__5551__auto__ = e38447;var statearr_38448_38465 = state_38420;(statearr_38448_38465[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38420);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e38447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__38466 = state_38420;
state_38420 = G__38466;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38420){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38449 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38450);
return statearr_38449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
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
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38579){var state_val_38580 = (state_38579[1]);if((state_val_38580 === 1))
{var inst_38538 = [];var inst_38539 = inst_38538;var inst_38540 = cljs.core.constant$keyword$568;var state_38579__$1 = (function (){var statearr_38581 = state_38579;(statearr_38581[7] = inst_38540);
(statearr_38581[8] = inst_38539);
return statearr_38581;
})();var statearr_38582_38610 = state_38579__$1;(statearr_38582_38610[2] = null);
(statearr_38582_38610[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38580 === 2))
{var state_38579__$1 = state_38579;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38579__$1,4,ch);
} else
{if((state_val_38580 === 3))
{var inst_38577 = (state_38579[2]);var state_38579__$1 = state_38579;return cljs.core.async.impl.ioc_helpers.return_chan(state_38579__$1,inst_38577);
} else
{if((state_val_38580 === 4))
{var inst_38543 = (state_38579[9]);var inst_38543__$1 = (state_38579[2]);var inst_38544 = (inst_38543__$1 == null);var inst_38545 = cljs.core.not(inst_38544);var state_38579__$1 = (function (){var statearr_38583 = state_38579;(statearr_38583[9] = inst_38543__$1);
return statearr_38583;
})();if(inst_38545)
{var statearr_38584_38611 = state_38579__$1;(statearr_38584_38611[1] = 5);
} else
{var statearr_38585_38612 = state_38579__$1;(statearr_38585_38612[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38580 === 5))
{var inst_38543 = (state_38579[9]);var inst_38540 = (state_38579[7]);var inst_38547 = (state_38579[10]);var inst_38547__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38543) : f.call(null,inst_38543));var inst_38548 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38547__$1,inst_38540);var inst_38549 = cljs.core.keyword_identical_QMARK_(inst_38540,cljs.core.constant$keyword$568);var inst_38550 = (inst_38548) || (inst_38549);var state_38579__$1 = (function (){var statearr_38586 = state_38579;(statearr_38586[10] = inst_38547__$1);
return statearr_38586;
})();if(cljs.core.truth_(inst_38550))
{var statearr_38587_38613 = state_38579__$1;(statearr_38587_38613[1] = 8);
} else
{var statearr_38588_38614 = state_38579__$1;(statearr_38588_38614[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38580 === 6))
{var inst_38539 = (state_38579[8]);var inst_38564 = inst_38539.length;var inst_38565 = (inst_38564 > 0);var state_38579__$1 = state_38579;if(cljs.core.truth_(inst_38565))
{var statearr_38590_38615 = state_38579__$1;(statearr_38590_38615[1] = 12);
} else
{var statearr_38591_38616 = state_38579__$1;(statearr_38591_38616[1] = 13);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38580 === 7))
{var inst_38575 = (state_38579[2]);var state_38579__$1 = state_38579;var statearr_38592_38617 = state_38579__$1;(statearr_38592_38617[2] = inst_38575);
(statearr_38592_38617[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38580 === 8))
{var inst_38543 = (state_38579[9]);var inst_38539 = (state_38579[8]);var inst_38547 = (state_38579[10]);var inst_38552 = inst_38539.push(inst_38543);var tmp38589 = inst_38539;var inst_38539__$1 = tmp38589;var inst_38540 = inst_38547;var state_38579__$1 = (function (){var statearr_38593 = state_38579;(statearr_38593[7] = inst_38540);
(statearr_38593[11] = inst_38552);
(statearr_38593[8] = inst_38539__$1);
return statearr_38593;
})();var statearr_38594_38618 = state_38579__$1;(statearr_38594_38618[2] = null);
(statearr_38594_38618[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38580 === 9))
{var inst_38539 = (state_38579[8]);var inst_38555 = cljs.core.vec(inst_38539);var state_38579__$1 = state_38579;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38579__$1,11,out,inst_38555);
} else
{if((state_val_38580 === 10))
{var inst_38562 = (state_38579[2]);var state_38579__$1 = state_38579;var statearr_38595_38619 = state_38579__$1;(statearr_38595_38619[2] = inst_38562);
(statearr_38595_38619[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38580 === 11))
{var inst_38543 = (state_38579[9]);var inst_38547 = (state_38579[10]);var inst_38557 = (state_38579[2]);var inst_38558 = [];var inst_38559 = inst_38558.push(inst_38543);var inst_38539 = inst_38558;var inst_38540 = inst_38547;var state_38579__$1 = (function (){var statearr_38596 = state_38579;(statearr_38596[12] = inst_38559);
(statearr_38596[7] = inst_38540);
(statearr_38596[13] = inst_38557);
(statearr_38596[8] = inst_38539);
return statearr_38596;
})();var statearr_38597_38620 = state_38579__$1;(statearr_38597_38620[2] = null);
(statearr_38597_38620[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38580 === 12))
{var inst_38539 = (state_38579[8]);var inst_38567 = cljs.core.vec(inst_38539);var state_38579__$1 = state_38579;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38579__$1,15,out,inst_38567);
} else
{if((state_val_38580 === 13))
{var state_38579__$1 = state_38579;var statearr_38598_38621 = state_38579__$1;(statearr_38598_38621[2] = null);
(statearr_38598_38621[1] = 14);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38580 === 14))
{var inst_38572 = (state_38579[2]);var inst_38573 = cljs.core.async.close_BANG_(out);var state_38579__$1 = (function (){var statearr_38599 = state_38579;(statearr_38599[14] = inst_38572);
return statearr_38599;
})();var statearr_38600_38622 = state_38579__$1;(statearr_38600_38622[2] = inst_38573);
(statearr_38600_38622[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38580 === 15))
{var inst_38569 = (state_38579[2]);var state_38579__$1 = state_38579;var statearr_38601_38623 = state_38579__$1;(statearr_38601_38623[2] = inst_38569);
(statearr_38601_38623[1] = 14);
return cljs.core.constant$keyword$555;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_38605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38605[0] = state_machine__5548__auto__);
(statearr_38605[1] = 1);
return statearr_38605;
});
var state_machine__5548__auto____1 = (function (state_38579){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38579);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38606){if((e38606 instanceof Object))
{var ex__5551__auto__ = e38606;var statearr_38607_38624 = state_38579;(statearr_38607_38624[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38579);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e38606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__38625 = state_38579;
state_38579 = G__38625;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38579){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38608 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38609);
return statearr_38608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
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
