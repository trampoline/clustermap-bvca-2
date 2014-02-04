// Compiled by ClojureScript 0.0-2138
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23295 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23295 = (function (f,fn_handler,meta23296){
this.f = f;
this.fn_handler = fn_handler;
this.meta23296 = meta23296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23295.cljs$lang$type = true;
cljs.core.async.t23295.cljs$lang$ctorStr = "cljs.core.async/t23295";
cljs.core.async.t23295.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23295");
});
cljs.core.async.t23295.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23297){var self__ = this;
var _23297__$1 = this;return self__.meta23296;
});
cljs.core.async.t23295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23297,meta23296__$1){var self__ = this;
var _23297__$1 = this;return (new cljs.core.async.t23295(self__.f,self__.fn_handler,meta23296__$1));
});
cljs.core.async.__GT_t23295 = (function __GT_t23295(f__$1,fn_handler__$1,meta23296){return (new cljs.core.async.t23295(f__$1,fn_handler__$1,meta23296));
});
}
return (new cljs.core.async.t23295(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23299 = buff;if(G__23299)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23299.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23299.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23299);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23299);
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
{var val_23300 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23300) : fn1.call(null,val_23300));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23300) : fn1.call(null,val_23300));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23301 = n;var x_23302 = 0;while(true){
if((x_23302 < n__4248__auto___23301))
{(a[x_23302] = 0);
{
var G__23303 = (x_23302 + 1);
x_23302 = G__23303;
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
var G__23304 = (i + 1);
i = G__23304;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23308 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23308 = (function (flag,alt_flag,meta23309){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23309 = meta23309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23308.cljs$lang$type = true;
cljs.core.async.t23308.cljs$lang$ctorStr = "cljs.core.async/t23308";
cljs.core.async.t23308.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23308");
});
cljs.core.async.t23308.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23310){var self__ = this;
var _23310__$1 = this;return self__.meta23309;
});
cljs.core.async.t23308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23310,meta23309__$1){var self__ = this;
var _23310__$1 = this;return (new cljs.core.async.t23308(self__.flag,self__.alt_flag,meta23309__$1));
});
cljs.core.async.__GT_t23308 = (function __GT_t23308(flag__$1,alt_flag__$1,meta23309){return (new cljs.core.async.t23308(flag__$1,alt_flag__$1,meta23309));
});
}
return (new cljs.core.async.t23308(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23314 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23314 = (function (cb,flag,alt_handler,meta23315){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23315 = meta23315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23314.cljs$lang$type = true;
cljs.core.async.t23314.cljs$lang$ctorStr = "cljs.core.async/t23314";
cljs.core.async.t23314.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23314");
});
cljs.core.async.t23314.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23316){var self__ = this;
var _23316__$1 = this;return self__.meta23315;
});
cljs.core.async.t23314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23316,meta23315__$1){var self__ = this;
var _23316__$1 = this;return (new cljs.core.async.t23314(self__.cb,self__.flag,self__.alt_handler,meta23315__$1));
});
cljs.core.async.__GT_t23314 = (function __GT_t23314(cb__$1,flag__$1,alt_handler__$1,meta23315){return (new cljs.core.async.t23314(cb__$1,flag__$1,alt_handler__$1,meta23315));
});
}
return (new cljs.core.async.t23314(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23317_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23317_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23317_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23318 = (i + 1);
i = G__23318;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$199))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$199], null));
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
var alts_BANG___delegate = function (ports,p__23319){var map__23321 = p__23319;var map__23321__$1 = ((cljs.core.seq_QMARK_(map__23321))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23321):map__23321);var opts = map__23321__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23319 = null;if (arguments.length > 1) {
  p__23319 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23319);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23322){
var ports = cljs.core.first(arglist__23322);
var p__23319 = cljs.core.rest(arglist__23322);
return alts_BANG___delegate(ports,p__23319);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23330 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23330 = (function (ch,f,map_LT_,meta23331){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23331 = meta23331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23330.cljs$lang$type = true;
cljs.core.async.t23330.cljs$lang$ctorStr = "cljs.core.async/t23330";
cljs.core.async.t23330.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23330");
});
cljs.core.async.t23330.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23330.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23333 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23333 = (function (fn1,_,meta23331,ch,f,map_LT_,meta23334){
this.fn1 = fn1;
this._ = _;
this.meta23331 = meta23331;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23334 = meta23334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23333.cljs$lang$type = true;
cljs.core.async.t23333.cljs$lang$ctorStr = "cljs.core.async/t23333";
cljs.core.async.t23333.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23333");
});
cljs.core.async.t23333.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23333.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23323_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23323_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23323_SHARP_) : self__.f.call(null,p1__23323_SHARP_)))) : f1.call(null,(((p1__23323_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23323_SHARP_) : self__.f.call(null,p1__23323_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23335){var self__ = this;
var _23335__$1 = this;return self__.meta23334;
});
cljs.core.async.t23333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23335,meta23334__$1){var self__ = this;
var _23335__$1 = this;return (new cljs.core.async.t23333(self__.fn1,self__._,self__.meta23331,self__.ch,self__.f,self__.map_LT_,meta23334__$1));
});
cljs.core.async.__GT_t23333 = (function __GT_t23333(fn1__$1,___$2,meta23331__$1,ch__$2,f__$2,map_LT___$2,meta23334){return (new cljs.core.async.t23333(fn1__$1,___$2,meta23331__$1,ch__$2,f__$2,map_LT___$2,meta23334));
});
}
return (new cljs.core.async.t23333(fn1,___$1,self__.meta23331,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t23330.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23332){var self__ = this;
var _23332__$1 = this;return self__.meta23331;
});
cljs.core.async.t23330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23332,meta23331__$1){var self__ = this;
var _23332__$1 = this;return (new cljs.core.async.t23330(self__.ch,self__.f,self__.map_LT_,meta23331__$1));
});
cljs.core.async.__GT_t23330 = (function __GT_t23330(ch__$1,f__$1,map_LT___$1,meta23331){return (new cljs.core.async.t23330(ch__$1,f__$1,map_LT___$1,meta23331));
});
}
return (new cljs.core.async.t23330(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23339 = (function (ch,f,map_GT_,meta23340){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23340 = meta23340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23339.cljs$lang$type = true;
cljs.core.async.t23339.cljs$lang$ctorStr = "cljs.core.async/t23339";
cljs.core.async.t23339.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23339");
});
cljs.core.async.t23339.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23339.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23339.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23341){var self__ = this;
var _23341__$1 = this;return self__.meta23340;
});
cljs.core.async.t23339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23341,meta23340__$1){var self__ = this;
var _23341__$1 = this;return (new cljs.core.async.t23339(self__.ch,self__.f,self__.map_GT_,meta23340__$1));
});
cljs.core.async.__GT_t23339 = (function __GT_t23339(ch__$1,f__$1,map_GT___$1,meta23340){return (new cljs.core.async.t23339(ch__$1,f__$1,map_GT___$1,meta23340));
});
}
return (new cljs.core.async.t23339(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23345 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23345 = (function (ch,p,filter_GT_,meta23346){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23346 = meta23346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23345.cljs$lang$type = true;
cljs.core.async.t23345.cljs$lang$ctorStr = "cljs.core.async/t23345";
cljs.core.async.t23345.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23345");
});
cljs.core.async.t23345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23345.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23345.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23347){var self__ = this;
var _23347__$1 = this;return self__.meta23346;
});
cljs.core.async.t23345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23347,meta23346__$1){var self__ = this;
var _23347__$1 = this;return (new cljs.core.async.t23345(self__.ch,self__.p,self__.filter_GT_,meta23346__$1));
});
cljs.core.async.__GT_t23345 = (function __GT_t23345(ch__$1,p__$1,filter_GT___$1,meta23346){return (new cljs.core.async.t23345(ch__$1,p__$1,filter_GT___$1,meta23346));
});
}
return (new cljs.core.async.t23345(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23409){var state_val_23410 = (state_23409[1]);if((state_val_23410 === 1))
{var state_23409__$1 = state_23409;var statearr_23411_23431 = state_23409__$1;(statearr_23411_23431[2] = null);
(statearr_23411_23431[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23410 === 2))
{var state_23409__$1 = state_23409;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23409__$1,4,ch);
} else
{if((state_val_23410 === 3))
{var inst_23407 = (state_23409[2]);var state_23409__$1 = state_23409;return cljs.core.async.impl.ioc_helpers.return_chan(state_23409__$1,inst_23407);
} else
{if((state_val_23410 === 4))
{var inst_23391 = (state_23409[7]);var inst_23391__$1 = (state_23409[2]);var inst_23392 = (inst_23391__$1 == null);var state_23409__$1 = (function (){var statearr_23412 = state_23409;(statearr_23412[7] = inst_23391__$1);
return statearr_23412;
})();if(cljs.core.truth_(inst_23392))
{var statearr_23413_23432 = state_23409__$1;(statearr_23413_23432[1] = 5);
} else
{var statearr_23414_23433 = state_23409__$1;(statearr_23414_23433[1] = 6);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23410 === 5))
{var inst_23394 = cljs.core.async.close_BANG_(out);var state_23409__$1 = state_23409;var statearr_23415_23434 = state_23409__$1;(statearr_23415_23434[2] = inst_23394);
(statearr_23415_23434[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23410 === 6))
{var inst_23391 = (state_23409[7]);var inst_23396 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23391) : p.call(null,inst_23391));var state_23409__$1 = state_23409;if(cljs.core.truth_(inst_23396))
{var statearr_23416_23435 = state_23409__$1;(statearr_23416_23435[1] = 8);
} else
{var statearr_23417_23436 = state_23409__$1;(statearr_23417_23436[1] = 9);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23410 === 7))
{var inst_23405 = (state_23409[2]);var state_23409__$1 = state_23409;var statearr_23418_23437 = state_23409__$1;(statearr_23418_23437[2] = inst_23405);
(statearr_23418_23437[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23410 === 8))
{var inst_23391 = (state_23409[7]);var state_23409__$1 = state_23409;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23409__$1,11,out,inst_23391);
} else
{if((state_val_23410 === 9))
{var state_23409__$1 = state_23409;var statearr_23419_23438 = state_23409__$1;(statearr_23419_23438[2] = null);
(statearr_23419_23438[1] = 10);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23410 === 10))
{var inst_23402 = (state_23409[2]);var state_23409__$1 = (function (){var statearr_23420 = state_23409;(statearr_23420[8] = inst_23402);
return statearr_23420;
})();var statearr_23421_23439 = state_23409__$1;(statearr_23421_23439[2] = null);
(statearr_23421_23439[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23410 === 11))
{var inst_23399 = (state_23409[2]);var state_23409__$1 = state_23409;var statearr_23422_23440 = state_23409__$1;(statearr_23422_23440[2] = inst_23399);
(statearr_23422_23440[1] = 10);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23426 = [null,null,null,null,null,null,null,null,null];(statearr_23426[0] = state_machine__5507__auto__);
(statearr_23426[1] = 1);
return statearr_23426;
});
var state_machine__5507__auto____1 = (function (state_23409){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23409);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23427){if((e23427 instanceof Object))
{var ex__5510__auto__ = e23427;var statearr_23428_23441 = state_23409;(statearr_23428_23441[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23409);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e23427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__23442 = state_23409;
state_23409 = G__23442;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23409){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23429 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23430);
return statearr_23429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23594){var state_val_23595 = (state_23594[1]);if((state_val_23595 === 1))
{var state_23594__$1 = state_23594;var statearr_23596_23633 = state_23594__$1;(statearr_23596_23633[2] = null);
(statearr_23596_23633[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 2))
{var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23594__$1,4,in$);
} else
{if((state_val_23595 === 3))
{var inst_23592 = (state_23594[2]);var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.return_chan(state_23594__$1,inst_23592);
} else
{if((state_val_23595 === 4))
{var inst_23540 = (state_23594[7]);var inst_23540__$1 = (state_23594[2]);var inst_23541 = (inst_23540__$1 == null);var state_23594__$1 = (function (){var statearr_23597 = state_23594;(statearr_23597[7] = inst_23540__$1);
return statearr_23597;
})();if(cljs.core.truth_(inst_23541))
{var statearr_23598_23634 = state_23594__$1;(statearr_23598_23634[1] = 5);
} else
{var statearr_23599_23635 = state_23594__$1;(statearr_23599_23635[1] = 6);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 5))
{var inst_23543 = cljs.core.async.close_BANG_(out);var state_23594__$1 = state_23594;var statearr_23600_23636 = state_23594__$1;(statearr_23600_23636[2] = inst_23543);
(statearr_23600_23636[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 6))
{var inst_23540 = (state_23594[7]);var inst_23545 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23540) : f.call(null,inst_23540));var inst_23550 = cljs.core.seq(inst_23545);var inst_23551 = inst_23550;var inst_23552 = null;var inst_23553 = 0;var inst_23554 = 0;var state_23594__$1 = (function (){var statearr_23601 = state_23594;(statearr_23601[8] = inst_23551);
(statearr_23601[9] = inst_23554);
(statearr_23601[10] = inst_23553);
(statearr_23601[11] = inst_23552);
return statearr_23601;
})();var statearr_23602_23637 = state_23594__$1;(statearr_23602_23637[2] = null);
(statearr_23602_23637[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 7))
{var inst_23590 = (state_23594[2]);var state_23594__$1 = state_23594;var statearr_23603_23638 = state_23594__$1;(statearr_23603_23638[2] = inst_23590);
(statearr_23603_23638[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 8))
{var inst_23554 = (state_23594[9]);var inst_23553 = (state_23594[10]);var inst_23556 = (inst_23554 < inst_23553);var inst_23557 = inst_23556;var state_23594__$1 = state_23594;if(cljs.core.truth_(inst_23557))
{var statearr_23604_23639 = state_23594__$1;(statearr_23604_23639[1] = 10);
} else
{var statearr_23605_23640 = state_23594__$1;(statearr_23605_23640[1] = 11);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 9))
{var inst_23587 = (state_23594[2]);var state_23594__$1 = (function (){var statearr_23606 = state_23594;(statearr_23606[12] = inst_23587);
return statearr_23606;
})();var statearr_23607_23641 = state_23594__$1;(statearr_23607_23641[2] = null);
(statearr_23607_23641[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 10))
{var inst_23554 = (state_23594[9]);var inst_23552 = (state_23594[11]);var inst_23559 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23552,inst_23554);var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23594__$1,13,out,inst_23559);
} else
{if((state_val_23595 === 11))
{var inst_23551 = (state_23594[8]);var inst_23565 = (state_23594[13]);var inst_23565__$1 = cljs.core.seq(inst_23551);var state_23594__$1 = (function (){var statearr_23611 = state_23594;(statearr_23611[13] = inst_23565__$1);
return statearr_23611;
})();if(inst_23565__$1)
{var statearr_23612_23642 = state_23594__$1;(statearr_23612_23642[1] = 14);
} else
{var statearr_23613_23643 = state_23594__$1;(statearr_23613_23643[1] = 15);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 12))
{var inst_23585 = (state_23594[2]);var state_23594__$1 = state_23594;var statearr_23614_23644 = state_23594__$1;(statearr_23614_23644[2] = inst_23585);
(statearr_23614_23644[1] = 9);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 13))
{var inst_23551 = (state_23594[8]);var inst_23554 = (state_23594[9]);var inst_23553 = (state_23594[10]);var inst_23552 = (state_23594[11]);var inst_23561 = (state_23594[2]);var inst_23562 = (inst_23554 + 1);var tmp23608 = inst_23551;var tmp23609 = inst_23553;var tmp23610 = inst_23552;var inst_23551__$1 = tmp23608;var inst_23552__$1 = tmp23610;var inst_23553__$1 = tmp23609;var inst_23554__$1 = inst_23562;var state_23594__$1 = (function (){var statearr_23615 = state_23594;(statearr_23615[8] = inst_23551__$1);
(statearr_23615[14] = inst_23561);
(statearr_23615[9] = inst_23554__$1);
(statearr_23615[10] = inst_23553__$1);
(statearr_23615[11] = inst_23552__$1);
return statearr_23615;
})();var statearr_23616_23645 = state_23594__$1;(statearr_23616_23645[2] = null);
(statearr_23616_23645[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 14))
{var inst_23565 = (state_23594[13]);var inst_23567 = cljs.core.chunked_seq_QMARK_(inst_23565);var state_23594__$1 = state_23594;if(inst_23567)
{var statearr_23617_23646 = state_23594__$1;(statearr_23617_23646[1] = 17);
} else
{var statearr_23618_23647 = state_23594__$1;(statearr_23618_23647[1] = 18);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 15))
{var state_23594__$1 = state_23594;var statearr_23619_23648 = state_23594__$1;(statearr_23619_23648[2] = null);
(statearr_23619_23648[1] = 16);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 16))
{var inst_23583 = (state_23594[2]);var state_23594__$1 = state_23594;var statearr_23620_23649 = state_23594__$1;(statearr_23620_23649[2] = inst_23583);
(statearr_23620_23649[1] = 12);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 17))
{var inst_23565 = (state_23594[13]);var inst_23569 = cljs.core.chunk_first(inst_23565);var inst_23570 = cljs.core.chunk_rest(inst_23565);var inst_23571 = cljs.core.count(inst_23569);var inst_23551 = inst_23570;var inst_23552 = inst_23569;var inst_23553 = inst_23571;var inst_23554 = 0;var state_23594__$1 = (function (){var statearr_23621 = state_23594;(statearr_23621[8] = inst_23551);
(statearr_23621[9] = inst_23554);
(statearr_23621[10] = inst_23553);
(statearr_23621[11] = inst_23552);
return statearr_23621;
})();var statearr_23622_23650 = state_23594__$1;(statearr_23622_23650[2] = null);
(statearr_23622_23650[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 18))
{var inst_23565 = (state_23594[13]);var inst_23574 = cljs.core.first(inst_23565);var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23594__$1,20,out,inst_23574);
} else
{if((state_val_23595 === 19))
{var inst_23580 = (state_23594[2]);var state_23594__$1 = state_23594;var statearr_23623_23651 = state_23594__$1;(statearr_23623_23651[2] = inst_23580);
(statearr_23623_23651[1] = 16);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23595 === 20))
{var inst_23565 = (state_23594[13]);var inst_23576 = (state_23594[2]);var inst_23577 = cljs.core.next(inst_23565);var inst_23551 = inst_23577;var inst_23552 = null;var inst_23553 = 0;var inst_23554 = 0;var state_23594__$1 = (function (){var statearr_23624 = state_23594;(statearr_23624[8] = inst_23551);
(statearr_23624[9] = inst_23554);
(statearr_23624[10] = inst_23553);
(statearr_23624[11] = inst_23552);
(statearr_23624[15] = inst_23576);
return statearr_23624;
})();var statearr_23625_23652 = state_23594__$1;(statearr_23625_23652[2] = null);
(statearr_23625_23652[1] = 8);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23629[0] = state_machine__5507__auto__);
(statearr_23629[1] = 1);
return statearr_23629;
});
var state_machine__5507__auto____1 = (function (state_23594){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23594);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23630){if((e23630 instanceof Object))
{var ex__5510__auto__ = e23630;var statearr_23631_23653 = state_23594;(statearr_23631_23653[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23594);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e23630;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__23654 = state_23594;
state_23594 = G__23654;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23594){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23632 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23632;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23714){var state_val_23715 = (state_23714[1]);if((state_val_23715 === 1))
{var state_23714__$1 = state_23714;var statearr_23716_23736 = state_23714__$1;(statearr_23716_23736[2] = null);
(statearr_23716_23736[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23715 === 2))
{var state_23714__$1 = state_23714;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23714__$1,4,from);
} else
{if((state_val_23715 === 3))
{var inst_23712 = (state_23714[2]);var state_23714__$1 = state_23714;return cljs.core.async.impl.ioc_helpers.return_chan(state_23714__$1,inst_23712);
} else
{if((state_val_23715 === 4))
{var inst_23697 = (state_23714[7]);var inst_23697__$1 = (state_23714[2]);var inst_23698 = (inst_23697__$1 == null);var state_23714__$1 = (function (){var statearr_23717 = state_23714;(statearr_23717[7] = inst_23697__$1);
return statearr_23717;
})();if(cljs.core.truth_(inst_23698))
{var statearr_23718_23737 = state_23714__$1;(statearr_23718_23737[1] = 5);
} else
{var statearr_23719_23738 = state_23714__$1;(statearr_23719_23738[1] = 6);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23715 === 5))
{var state_23714__$1 = state_23714;if(cljs.core.truth_(close_QMARK_))
{var statearr_23720_23739 = state_23714__$1;(statearr_23720_23739[1] = 8);
} else
{var statearr_23721_23740 = state_23714__$1;(statearr_23721_23740[1] = 9);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23715 === 6))
{var inst_23697 = (state_23714[7]);var state_23714__$1 = state_23714;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23714__$1,11,to,inst_23697);
} else
{if((state_val_23715 === 7))
{var inst_23710 = (state_23714[2]);var state_23714__$1 = state_23714;var statearr_23722_23741 = state_23714__$1;(statearr_23722_23741[2] = inst_23710);
(statearr_23722_23741[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23715 === 8))
{var inst_23701 = cljs.core.async.close_BANG_(to);var state_23714__$1 = state_23714;var statearr_23723_23742 = state_23714__$1;(statearr_23723_23742[2] = inst_23701);
(statearr_23723_23742[1] = 10);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23715 === 9))
{var state_23714__$1 = state_23714;var statearr_23724_23743 = state_23714__$1;(statearr_23724_23743[2] = null);
(statearr_23724_23743[1] = 10);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23715 === 10))
{var inst_23704 = (state_23714[2]);var state_23714__$1 = state_23714;var statearr_23725_23744 = state_23714__$1;(statearr_23725_23744[2] = inst_23704);
(statearr_23725_23744[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23715 === 11))
{var inst_23707 = (state_23714[2]);var state_23714__$1 = (function (){var statearr_23726 = state_23714;(statearr_23726[8] = inst_23707);
return statearr_23726;
})();var statearr_23727_23745 = state_23714__$1;(statearr_23727_23745[2] = null);
(statearr_23727_23745[1] = 2);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23731 = [null,null,null,null,null,null,null,null,null];(statearr_23731[0] = state_machine__5507__auto__);
(statearr_23731[1] = 1);
return statearr_23731;
});
var state_machine__5507__auto____1 = (function (state_23714){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23714);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23732){if((e23732 instanceof Object))
{var ex__5510__auto__ = e23732;var statearr_23733_23746 = state_23714;(statearr_23733_23746[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23714);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e23732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__23747 = state_23714;
state_23714 = G__23747;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23714){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23734 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23735);
return statearr_23734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23812){var state_val_23813 = (state_23812[1]);if((state_val_23813 === 1))
{var state_23812__$1 = state_23812;var statearr_23814_23835 = state_23812__$1;(statearr_23814_23835[2] = null);
(statearr_23814_23835[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23813 === 2))
{var state_23812__$1 = state_23812;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23812__$1,4,ch);
} else
{if((state_val_23813 === 3))
{var inst_23810 = (state_23812[2]);var state_23812__$1 = state_23812;return cljs.core.async.impl.ioc_helpers.return_chan(state_23812__$1,inst_23810);
} else
{if((state_val_23813 === 4))
{var inst_23793 = (state_23812[7]);var inst_23793__$1 = (state_23812[2]);var inst_23794 = (inst_23793__$1 == null);var state_23812__$1 = (function (){var statearr_23815 = state_23812;(statearr_23815[7] = inst_23793__$1);
return statearr_23815;
})();if(cljs.core.truth_(inst_23794))
{var statearr_23816_23836 = state_23812__$1;(statearr_23816_23836[1] = 5);
} else
{var statearr_23817_23837 = state_23812__$1;(statearr_23817_23837[1] = 6);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23813 === 5))
{var inst_23796 = cljs.core.async.close_BANG_(tc);var inst_23797 = cljs.core.async.close_BANG_(fc);var state_23812__$1 = (function (){var statearr_23818 = state_23812;(statearr_23818[8] = inst_23796);
return statearr_23818;
})();var statearr_23819_23838 = state_23812__$1;(statearr_23819_23838[2] = inst_23797);
(statearr_23819_23838[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23813 === 6))
{var inst_23793 = (state_23812[7]);var inst_23799 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23793) : p.call(null,inst_23793));var state_23812__$1 = state_23812;if(cljs.core.truth_(inst_23799))
{var statearr_23820_23839 = state_23812__$1;(statearr_23820_23839[1] = 9);
} else
{var statearr_23821_23840 = state_23812__$1;(statearr_23821_23840[1] = 10);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23813 === 7))
{var inst_23808 = (state_23812[2]);var state_23812__$1 = state_23812;var statearr_23822_23841 = state_23812__$1;(statearr_23822_23841[2] = inst_23808);
(statearr_23822_23841[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23813 === 8))
{var inst_23805 = (state_23812[2]);var state_23812__$1 = (function (){var statearr_23823 = state_23812;(statearr_23823[9] = inst_23805);
return statearr_23823;
})();var statearr_23824_23842 = state_23812__$1;(statearr_23824_23842[2] = null);
(statearr_23824_23842[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23813 === 9))
{var state_23812__$1 = state_23812;var statearr_23825_23843 = state_23812__$1;(statearr_23825_23843[2] = tc);
(statearr_23825_23843[1] = 11);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23813 === 10))
{var state_23812__$1 = state_23812;var statearr_23826_23844 = state_23812__$1;(statearr_23826_23844[2] = fc);
(statearr_23826_23844[1] = 11);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23813 === 11))
{var inst_23793 = (state_23812[7]);var inst_23803 = (state_23812[2]);var state_23812__$1 = state_23812;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23812__$1,8,inst_23803,inst_23793);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23830 = [null,null,null,null,null,null,null,null,null,null];(statearr_23830[0] = state_machine__5507__auto__);
(statearr_23830[1] = 1);
return statearr_23830;
});
var state_machine__5507__auto____1 = (function (state_23812){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23812);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23831){if((e23831 instanceof Object))
{var ex__5510__auto__ = e23831;var statearr_23832_23845 = state_23812;(statearr_23832_23845[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23812);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e23831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__23846 = state_23812;
state_23812 = G__23846;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23812){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23833 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23834);
return statearr_23833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23893){var state_val_23894 = (state_23893[1]);if((state_val_23894 === 7))
{var inst_23889 = (state_23893[2]);var state_23893__$1 = state_23893;var statearr_23895_23911 = state_23893__$1;(statearr_23895_23911[2] = inst_23889);
(statearr_23895_23911[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23894 === 6))
{var inst_23882 = (state_23893[7]);var inst_23879 = (state_23893[8]);var inst_23886 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23879,inst_23882) : f.call(null,inst_23879,inst_23882));var inst_23879__$1 = inst_23886;var state_23893__$1 = (function (){var statearr_23896 = state_23893;(statearr_23896[8] = inst_23879__$1);
return statearr_23896;
})();var statearr_23897_23912 = state_23893__$1;(statearr_23897_23912[2] = null);
(statearr_23897_23912[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23894 === 5))
{var inst_23879 = (state_23893[8]);var state_23893__$1 = state_23893;var statearr_23898_23913 = state_23893__$1;(statearr_23898_23913[2] = inst_23879);
(statearr_23898_23913[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23894 === 4))
{var inst_23882 = (state_23893[7]);var inst_23882__$1 = (state_23893[2]);var inst_23883 = (inst_23882__$1 == null);var state_23893__$1 = (function (){var statearr_23899 = state_23893;(statearr_23899[7] = inst_23882__$1);
return statearr_23899;
})();if(cljs.core.truth_(inst_23883))
{var statearr_23900_23914 = state_23893__$1;(statearr_23900_23914[1] = 5);
} else
{var statearr_23901_23915 = state_23893__$1;(statearr_23901_23915[1] = 6);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23894 === 3))
{var inst_23891 = (state_23893[2]);var state_23893__$1 = state_23893;return cljs.core.async.impl.ioc_helpers.return_chan(state_23893__$1,inst_23891);
} else
{if((state_val_23894 === 2))
{var state_23893__$1 = state_23893;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23893__$1,4,ch);
} else
{if((state_val_23894 === 1))
{var inst_23879 = init;var state_23893__$1 = (function (){var statearr_23902 = state_23893;(statearr_23902[8] = inst_23879);
return statearr_23902;
})();var statearr_23903_23916 = state_23893__$1;(statearr_23903_23916[2] = null);
(statearr_23903_23916[1] = 2);
return cljs.core.constant$keyword$209;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23907 = [null,null,null,null,null,null,null,null,null];(statearr_23907[0] = state_machine__5507__auto__);
(statearr_23907[1] = 1);
return statearr_23907;
});
var state_machine__5507__auto____1 = (function (state_23893){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23893);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23908){if((e23908 instanceof Object))
{var ex__5510__auto__ = e23908;var statearr_23909_23917 = state_23893;(statearr_23909_23917[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23893);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e23908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__23918 = state_23893;
state_23893 = G__23918;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23893){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23910 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23980){var state_val_23981 = (state_23980[1]);if((state_val_23981 === 1))
{var inst_23960 = cljs.core.seq(coll);var inst_23961 = inst_23960;var state_23980__$1 = (function (){var statearr_23982 = state_23980;(statearr_23982[7] = inst_23961);
return statearr_23982;
})();var statearr_23983_24001 = state_23980__$1;(statearr_23983_24001[2] = null);
(statearr_23983_24001[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23981 === 2))
{var inst_23961 = (state_23980[7]);var state_23980__$1 = state_23980;if(cljs.core.truth_(inst_23961))
{var statearr_23984_24002 = state_23980__$1;(statearr_23984_24002[1] = 4);
} else
{var statearr_23985_24003 = state_23980__$1;(statearr_23985_24003[1] = 5);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23981 === 3))
{var inst_23978 = (state_23980[2]);var state_23980__$1 = state_23980;return cljs.core.async.impl.ioc_helpers.return_chan(state_23980__$1,inst_23978);
} else
{if((state_val_23981 === 4))
{var inst_23961 = (state_23980[7]);var inst_23964 = cljs.core.first(inst_23961);var state_23980__$1 = state_23980;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23980__$1,7,ch,inst_23964);
} else
{if((state_val_23981 === 5))
{var state_23980__$1 = state_23980;if(cljs.core.truth_(close_QMARK_))
{var statearr_23986_24004 = state_23980__$1;(statearr_23986_24004[1] = 8);
} else
{var statearr_23987_24005 = state_23980__$1;(statearr_23987_24005[1] = 9);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_23981 === 6))
{var inst_23976 = (state_23980[2]);var state_23980__$1 = state_23980;var statearr_23988_24006 = state_23980__$1;(statearr_23988_24006[2] = inst_23976);
(statearr_23988_24006[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23981 === 7))
{var inst_23961 = (state_23980[7]);var inst_23966 = (state_23980[2]);var inst_23967 = cljs.core.next(inst_23961);var inst_23961__$1 = inst_23967;var state_23980__$1 = (function (){var statearr_23989 = state_23980;(statearr_23989[7] = inst_23961__$1);
(statearr_23989[8] = inst_23966);
return statearr_23989;
})();var statearr_23990_24007 = state_23980__$1;(statearr_23990_24007[2] = null);
(statearr_23990_24007[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23981 === 8))
{var inst_23971 = cljs.core.async.close_BANG_(ch);var state_23980__$1 = state_23980;var statearr_23991_24008 = state_23980__$1;(statearr_23991_24008[2] = inst_23971);
(statearr_23991_24008[1] = 10);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23981 === 9))
{var state_23980__$1 = state_23980;var statearr_23992_24009 = state_23980__$1;(statearr_23992_24009[2] = null);
(statearr_23992_24009[1] = 10);
return cljs.core.constant$keyword$209;
} else
{if((state_val_23981 === 10))
{var inst_23974 = (state_23980[2]);var state_23980__$1 = state_23980;var statearr_23993_24010 = state_23980__$1;(statearr_23993_24010[2] = inst_23974);
(statearr_23993_24010[1] = 6);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23997 = [null,null,null,null,null,null,null,null,null];(statearr_23997[0] = state_machine__5507__auto__);
(statearr_23997[1] = 1);
return statearr_23997;
});
var state_machine__5507__auto____1 = (function (state_23980){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23980);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23998){if((e23998 instanceof Object))
{var ex__5510__auto__ = e23998;var statearr_23999_24011 = state_23980;(statearr_23999_24011[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23980);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e23998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__24012 = state_23980;
state_23980 = G__24012;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23980){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24000 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
cljs.core.async.Mux = (function (){var obj24014 = {};return obj24014;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24016 = {};return obj24016;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24240 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24240 = (function (cs,ch,mult,meta24241){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24241 = meta24241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24240.cljs$lang$type = true;
cljs.core.async.t24240.cljs$lang$ctorStr = "cljs.core.async/t24240";
cljs.core.async.t24240.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24240");
});})(cs))
;
cljs.core.async.t24240.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24240.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24240.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24240.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24240.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24240.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24242){var self__ = this;
var _24242__$1 = this;return self__.meta24241;
});})(cs))
;
cljs.core.async.t24240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24242,meta24241__$1){var self__ = this;
var _24242__$1 = this;return (new cljs.core.async.t24240(self__.cs,self__.ch,self__.mult,meta24241__$1));
});})(cs))
;
cljs.core.async.__GT_t24240 = ((function (cs){
return (function __GT_t24240(cs__$1,ch__$1,mult__$1,meta24241){return (new cljs.core.async.t24240(cs__$1,ch__$1,mult__$1,meta24241));
});})(cs))
;
}
return (new cljs.core.async.t24240(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24377){var state_val_24378 = (state_24377[1]);if((state_val_24378 === 32))
{var inst_24321 = (state_24377[7]);var inst_24245 = (state_24377[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24377,31,Object,null,30);var inst_24328 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24321,inst_24245,done);var state_24377__$1 = state_24377;var statearr_24379_24464 = state_24377__$1;(statearr_24379_24464[2] = inst_24328);
cljs.core.async.impl.ioc_helpers.process_exception(state_24377__$1);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 1))
{var state_24377__$1 = state_24377;var statearr_24380_24465 = state_24377__$1;(statearr_24380_24465[2] = null);
(statearr_24380_24465[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 33))
{var inst_24334 = (state_24377[9]);var inst_24336 = cljs.core.chunked_seq_QMARK_(inst_24334);var state_24377__$1 = state_24377;if(inst_24336)
{var statearr_24381_24466 = state_24377__$1;(statearr_24381_24466[1] = 36);
} else
{var statearr_24382_24467 = state_24377__$1;(statearr_24382_24467[1] = 37);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 2))
{var state_24377__$1 = state_24377;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24377__$1,4,ch);
} else
{if((state_val_24378 === 34))
{var state_24377__$1 = state_24377;var statearr_24383_24468 = state_24377__$1;(statearr_24383_24468[2] = null);
(statearr_24383_24468[1] = 35);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 3))
{var inst_24375 = (state_24377[2]);var state_24377__$1 = state_24377;return cljs.core.async.impl.ioc_helpers.return_chan(state_24377__$1,inst_24375);
} else
{if((state_val_24378 === 35))
{var inst_24359 = (state_24377[2]);var state_24377__$1 = state_24377;var statearr_24384_24469 = state_24377__$1;(statearr_24384_24469[2] = inst_24359);
(statearr_24384_24469[1] = 29);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 4))
{var inst_24245 = (state_24377[8]);var inst_24245__$1 = (state_24377[2]);var inst_24246 = (inst_24245__$1 == null);var state_24377__$1 = (function (){var statearr_24385 = state_24377;(statearr_24385[8] = inst_24245__$1);
return statearr_24385;
})();if(cljs.core.truth_(inst_24246))
{var statearr_24386_24470 = state_24377__$1;(statearr_24386_24470[1] = 5);
} else
{var statearr_24387_24471 = state_24377__$1;(statearr_24387_24471[1] = 6);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 36))
{var inst_24334 = (state_24377[9]);var inst_24338 = cljs.core.chunk_first(inst_24334);var inst_24339 = cljs.core.chunk_rest(inst_24334);var inst_24340 = cljs.core.count(inst_24338);var inst_24313 = inst_24339;var inst_24314 = inst_24338;var inst_24315 = inst_24340;var inst_24316 = 0;var state_24377__$1 = (function (){var statearr_24388 = state_24377;(statearr_24388[10] = inst_24315);
(statearr_24388[11] = inst_24316);
(statearr_24388[12] = inst_24314);
(statearr_24388[13] = inst_24313);
return statearr_24388;
})();var statearr_24389_24472 = state_24377__$1;(statearr_24389_24472[2] = null);
(statearr_24389_24472[1] = 25);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 5))
{var inst_24252 = cljs.core.deref(cs);var inst_24253 = cljs.core.seq(inst_24252);var inst_24254 = inst_24253;var inst_24255 = null;var inst_24256 = 0;var inst_24257 = 0;var state_24377__$1 = (function (){var statearr_24390 = state_24377;(statearr_24390[14] = inst_24257);
(statearr_24390[15] = inst_24256);
(statearr_24390[16] = inst_24254);
(statearr_24390[17] = inst_24255);
return statearr_24390;
})();var statearr_24391_24473 = state_24377__$1;(statearr_24391_24473[2] = null);
(statearr_24391_24473[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 37))
{var inst_24334 = (state_24377[9]);var inst_24343 = cljs.core.first(inst_24334);var state_24377__$1 = (function (){var statearr_24392 = state_24377;(statearr_24392[18] = inst_24343);
return statearr_24392;
})();var statearr_24393_24474 = state_24377__$1;(statearr_24393_24474[2] = null);
(statearr_24393_24474[1] = 41);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 6))
{var inst_24305 = (state_24377[19]);var inst_24304 = cljs.core.deref(cs);var inst_24305__$1 = cljs.core.keys(inst_24304);var inst_24306 = cljs.core.count(inst_24305__$1);var inst_24307 = cljs.core.reset_BANG_(dctr,inst_24306);var inst_24312 = cljs.core.seq(inst_24305__$1);var inst_24313 = inst_24312;var inst_24314 = null;var inst_24315 = 0;var inst_24316 = 0;var state_24377__$1 = (function (){var statearr_24394 = state_24377;(statearr_24394[10] = inst_24315);
(statearr_24394[11] = inst_24316);
(statearr_24394[12] = inst_24314);
(statearr_24394[19] = inst_24305__$1);
(statearr_24394[13] = inst_24313);
(statearr_24394[20] = inst_24307);
return statearr_24394;
})();var statearr_24395_24475 = state_24377__$1;(statearr_24395_24475[2] = null);
(statearr_24395_24475[1] = 25);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 38))
{var inst_24356 = (state_24377[2]);var state_24377__$1 = state_24377;var statearr_24396_24476 = state_24377__$1;(statearr_24396_24476[2] = inst_24356);
(statearr_24396_24476[1] = 35);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 7))
{var inst_24373 = (state_24377[2]);var state_24377__$1 = state_24377;var statearr_24397_24477 = state_24377__$1;(statearr_24397_24477[2] = inst_24373);
(statearr_24397_24477[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 39))
{var inst_24334 = (state_24377[9]);var inst_24352 = (state_24377[2]);var inst_24353 = cljs.core.next(inst_24334);var inst_24313 = inst_24353;var inst_24314 = null;var inst_24315 = 0;var inst_24316 = 0;var state_24377__$1 = (function (){var statearr_24398 = state_24377;(statearr_24398[10] = inst_24315);
(statearr_24398[11] = inst_24316);
(statearr_24398[12] = inst_24314);
(statearr_24398[13] = inst_24313);
(statearr_24398[21] = inst_24352);
return statearr_24398;
})();var statearr_24399_24478 = state_24377__$1;(statearr_24399_24478[2] = null);
(statearr_24399_24478[1] = 25);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 8))
{var inst_24257 = (state_24377[14]);var inst_24256 = (state_24377[15]);var inst_24259 = (inst_24257 < inst_24256);var inst_24260 = inst_24259;var state_24377__$1 = state_24377;if(cljs.core.truth_(inst_24260))
{var statearr_24400_24479 = state_24377__$1;(statearr_24400_24479[1] = 10);
} else
{var statearr_24401_24480 = state_24377__$1;(statearr_24401_24480[1] = 11);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 40))
{var inst_24343 = (state_24377[18]);var inst_24344 = (state_24377[2]);var inst_24345 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24346 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24343);var state_24377__$1 = (function (){var statearr_24402 = state_24377;(statearr_24402[22] = inst_24345);
(statearr_24402[23] = inst_24344);
return statearr_24402;
})();var statearr_24403_24481 = state_24377__$1;(statearr_24403_24481[2] = inst_24346);
cljs.core.async.impl.ioc_helpers.process_exception(state_24377__$1);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 9))
{var inst_24302 = (state_24377[2]);var state_24377__$1 = state_24377;var statearr_24404_24482 = state_24377__$1;(statearr_24404_24482[2] = inst_24302);
(statearr_24404_24482[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 41))
{var inst_24245 = (state_24377[8]);var inst_24343 = (state_24377[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24377,40,Object,null,39);var inst_24350 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24343,inst_24245,done);var state_24377__$1 = state_24377;var statearr_24405_24483 = state_24377__$1;(statearr_24405_24483[2] = inst_24350);
cljs.core.async.impl.ioc_helpers.process_exception(state_24377__$1);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 10))
{var inst_24257 = (state_24377[14]);var inst_24255 = (state_24377[17]);var inst_24263 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24255,inst_24257);var inst_24264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24263,0,null);var inst_24265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24263,1,null);var state_24377__$1 = (function (){var statearr_24406 = state_24377;(statearr_24406[24] = inst_24264);
return statearr_24406;
})();if(cljs.core.truth_(inst_24265))
{var statearr_24407_24484 = state_24377__$1;(statearr_24407_24484[1] = 13);
} else
{var statearr_24408_24485 = state_24377__$1;(statearr_24408_24485[1] = 14);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 42))
{var state_24377__$1 = state_24377;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24377__$1,45,dchan);
} else
{if((state_val_24378 === 11))
{var inst_24254 = (state_24377[16]);var inst_24274 = (state_24377[25]);var inst_24274__$1 = cljs.core.seq(inst_24254);var state_24377__$1 = (function (){var statearr_24409 = state_24377;(statearr_24409[25] = inst_24274__$1);
return statearr_24409;
})();if(inst_24274__$1)
{var statearr_24410_24486 = state_24377__$1;(statearr_24410_24486[1] = 16);
} else
{var statearr_24411_24487 = state_24377__$1;(statearr_24411_24487[1] = 17);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 43))
{var state_24377__$1 = state_24377;var statearr_24412_24488 = state_24377__$1;(statearr_24412_24488[2] = null);
(statearr_24412_24488[1] = 44);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 12))
{var inst_24300 = (state_24377[2]);var state_24377__$1 = state_24377;var statearr_24413_24489 = state_24377__$1;(statearr_24413_24489[2] = inst_24300);
(statearr_24413_24489[1] = 9);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 44))
{var inst_24370 = (state_24377[2]);var state_24377__$1 = (function (){var statearr_24414 = state_24377;(statearr_24414[26] = inst_24370);
return statearr_24414;
})();var statearr_24415_24490 = state_24377__$1;(statearr_24415_24490[2] = null);
(statearr_24415_24490[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 13))
{var inst_24264 = (state_24377[24]);var inst_24267 = cljs.core.async.close_BANG_(inst_24264);var state_24377__$1 = state_24377;var statearr_24416_24491 = state_24377__$1;(statearr_24416_24491[2] = inst_24267);
(statearr_24416_24491[1] = 15);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 45))
{var inst_24367 = (state_24377[2]);var state_24377__$1 = state_24377;var statearr_24420_24492 = state_24377__$1;(statearr_24420_24492[2] = inst_24367);
(statearr_24420_24492[1] = 44);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 14))
{var state_24377__$1 = state_24377;var statearr_24421_24493 = state_24377__$1;(statearr_24421_24493[2] = null);
(statearr_24421_24493[1] = 15);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 15))
{var inst_24257 = (state_24377[14]);var inst_24256 = (state_24377[15]);var inst_24254 = (state_24377[16]);var inst_24255 = (state_24377[17]);var inst_24270 = (state_24377[2]);var inst_24271 = (inst_24257 + 1);var tmp24417 = inst_24256;var tmp24418 = inst_24254;var tmp24419 = inst_24255;var inst_24254__$1 = tmp24418;var inst_24255__$1 = tmp24419;var inst_24256__$1 = tmp24417;var inst_24257__$1 = inst_24271;var state_24377__$1 = (function (){var statearr_24422 = state_24377;(statearr_24422[14] = inst_24257__$1);
(statearr_24422[15] = inst_24256__$1);
(statearr_24422[16] = inst_24254__$1);
(statearr_24422[17] = inst_24255__$1);
(statearr_24422[27] = inst_24270);
return statearr_24422;
})();var statearr_24423_24494 = state_24377__$1;(statearr_24423_24494[2] = null);
(statearr_24423_24494[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 16))
{var inst_24274 = (state_24377[25]);var inst_24276 = cljs.core.chunked_seq_QMARK_(inst_24274);var state_24377__$1 = state_24377;if(inst_24276)
{var statearr_24424_24495 = state_24377__$1;(statearr_24424_24495[1] = 19);
} else
{var statearr_24425_24496 = state_24377__$1;(statearr_24425_24496[1] = 20);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 17))
{var state_24377__$1 = state_24377;var statearr_24426_24497 = state_24377__$1;(statearr_24426_24497[2] = null);
(statearr_24426_24497[1] = 18);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 18))
{var inst_24298 = (state_24377[2]);var state_24377__$1 = state_24377;var statearr_24427_24498 = state_24377__$1;(statearr_24427_24498[2] = inst_24298);
(statearr_24427_24498[1] = 12);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 19))
{var inst_24274 = (state_24377[25]);var inst_24278 = cljs.core.chunk_first(inst_24274);var inst_24279 = cljs.core.chunk_rest(inst_24274);var inst_24280 = cljs.core.count(inst_24278);var inst_24254 = inst_24279;var inst_24255 = inst_24278;var inst_24256 = inst_24280;var inst_24257 = 0;var state_24377__$1 = (function (){var statearr_24428 = state_24377;(statearr_24428[14] = inst_24257);
(statearr_24428[15] = inst_24256);
(statearr_24428[16] = inst_24254);
(statearr_24428[17] = inst_24255);
return statearr_24428;
})();var statearr_24429_24499 = state_24377__$1;(statearr_24429_24499[2] = null);
(statearr_24429_24499[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 20))
{var inst_24274 = (state_24377[25]);var inst_24284 = cljs.core.first(inst_24274);var inst_24285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24284,0,null);var inst_24286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24284,1,null);var state_24377__$1 = (function (){var statearr_24430 = state_24377;(statearr_24430[28] = inst_24285);
return statearr_24430;
})();if(cljs.core.truth_(inst_24286))
{var statearr_24431_24500 = state_24377__$1;(statearr_24431_24500[1] = 22);
} else
{var statearr_24432_24501 = state_24377__$1;(statearr_24432_24501[1] = 23);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 21))
{var inst_24295 = (state_24377[2]);var state_24377__$1 = state_24377;var statearr_24433_24502 = state_24377__$1;(statearr_24433_24502[2] = inst_24295);
(statearr_24433_24502[1] = 18);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 22))
{var inst_24285 = (state_24377[28]);var inst_24288 = cljs.core.async.close_BANG_(inst_24285);var state_24377__$1 = state_24377;var statearr_24434_24503 = state_24377__$1;(statearr_24434_24503[2] = inst_24288);
(statearr_24434_24503[1] = 24);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 23))
{var state_24377__$1 = state_24377;var statearr_24435_24504 = state_24377__$1;(statearr_24435_24504[2] = null);
(statearr_24435_24504[1] = 24);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 24))
{var inst_24274 = (state_24377[25]);var inst_24291 = (state_24377[2]);var inst_24292 = cljs.core.next(inst_24274);var inst_24254 = inst_24292;var inst_24255 = null;var inst_24256 = 0;var inst_24257 = 0;var state_24377__$1 = (function (){var statearr_24436 = state_24377;(statearr_24436[14] = inst_24257);
(statearr_24436[15] = inst_24256);
(statearr_24436[16] = inst_24254);
(statearr_24436[17] = inst_24255);
(statearr_24436[29] = inst_24291);
return statearr_24436;
})();var statearr_24437_24505 = state_24377__$1;(statearr_24437_24505[2] = null);
(statearr_24437_24505[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 25))
{var inst_24315 = (state_24377[10]);var inst_24316 = (state_24377[11]);var inst_24318 = (inst_24316 < inst_24315);var inst_24319 = inst_24318;var state_24377__$1 = state_24377;if(cljs.core.truth_(inst_24319))
{var statearr_24438_24506 = state_24377__$1;(statearr_24438_24506[1] = 27);
} else
{var statearr_24439_24507 = state_24377__$1;(statearr_24439_24507[1] = 28);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 26))
{var inst_24305 = (state_24377[19]);var inst_24363 = (state_24377[2]);var inst_24364 = cljs.core.seq(inst_24305);var state_24377__$1 = (function (){var statearr_24440 = state_24377;(statearr_24440[30] = inst_24363);
return statearr_24440;
})();if(inst_24364)
{var statearr_24441_24508 = state_24377__$1;(statearr_24441_24508[1] = 42);
} else
{var statearr_24442_24509 = state_24377__$1;(statearr_24442_24509[1] = 43);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 27))
{var inst_24316 = (state_24377[11]);var inst_24314 = (state_24377[12]);var inst_24321 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24314,inst_24316);var state_24377__$1 = (function (){var statearr_24443 = state_24377;(statearr_24443[7] = inst_24321);
return statearr_24443;
})();var statearr_24444_24510 = state_24377__$1;(statearr_24444_24510[2] = null);
(statearr_24444_24510[1] = 32);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 28))
{var inst_24334 = (state_24377[9]);var inst_24313 = (state_24377[13]);var inst_24334__$1 = cljs.core.seq(inst_24313);var state_24377__$1 = (function (){var statearr_24448 = state_24377;(statearr_24448[9] = inst_24334__$1);
return statearr_24448;
})();if(inst_24334__$1)
{var statearr_24449_24511 = state_24377__$1;(statearr_24449_24511[1] = 33);
} else
{var statearr_24450_24512 = state_24377__$1;(statearr_24450_24512[1] = 34);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 29))
{var inst_24361 = (state_24377[2]);var state_24377__$1 = state_24377;var statearr_24451_24513 = state_24377__$1;(statearr_24451_24513[2] = inst_24361);
(statearr_24451_24513[1] = 26);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 30))
{var inst_24315 = (state_24377[10]);var inst_24316 = (state_24377[11]);var inst_24314 = (state_24377[12]);var inst_24313 = (state_24377[13]);var inst_24330 = (state_24377[2]);var inst_24331 = (inst_24316 + 1);var tmp24445 = inst_24315;var tmp24446 = inst_24314;var tmp24447 = inst_24313;var inst_24313__$1 = tmp24447;var inst_24314__$1 = tmp24446;var inst_24315__$1 = tmp24445;var inst_24316__$1 = inst_24331;var state_24377__$1 = (function (){var statearr_24452 = state_24377;(statearr_24452[31] = inst_24330);
(statearr_24452[10] = inst_24315__$1);
(statearr_24452[11] = inst_24316__$1);
(statearr_24452[12] = inst_24314__$1);
(statearr_24452[13] = inst_24313__$1);
return statearr_24452;
})();var statearr_24453_24514 = state_24377__$1;(statearr_24453_24514[2] = null);
(statearr_24453_24514[1] = 25);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24378 === 31))
{var inst_24321 = (state_24377[7]);var inst_24322 = (state_24377[2]);var inst_24323 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24324 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24321);var state_24377__$1 = (function (){var statearr_24454 = state_24377;(statearr_24454[32] = inst_24323);
(statearr_24454[33] = inst_24322);
return statearr_24454;
})();var statearr_24455_24515 = state_24377__$1;(statearr_24455_24515[2] = inst_24324);
cljs.core.async.impl.ioc_helpers.process_exception(state_24377__$1);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24459[0] = state_machine__5507__auto__);
(statearr_24459[1] = 1);
return statearr_24459;
});
var state_machine__5507__auto____1 = (function (state_24377){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24377);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24460){if((e24460 instanceof Object))
{var ex__5510__auto__ = e24460;var statearr_24461_24516 = state_24377;(statearr_24461_24516[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24377);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e24460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__24517 = state_24377;
state_24377 = G__24517;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24377){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24462 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24463);
return statearr_24462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
cljs.core.async.Mix = (function (){var obj24519 = {};return obj24519;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$216,null,cljs.core.constant$keyword$217,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$218);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$217);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$218,chs);var pauses = pick(cljs.core.constant$keyword$216,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$219,solos,cljs.core.constant$keyword$220,pick(cljs.core.constant$keyword$217,chs),cljs.core.constant$keyword$221,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$216)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24629 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24629 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24630){
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
this.meta24630 = meta24630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24629.cljs$lang$type = true;
cljs.core.async.t24629.cljs$lang$ctorStr = "cljs.core.async/t24629";
cljs.core.async.t24629.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24629");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24629.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24629.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24629.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24629.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24629.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24629.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24629.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24629.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24631){var self__ = this;
var _24631__$1 = this;return self__.meta24630;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24631,meta24630__$1){var self__ = this;
var _24631__$1 = this;return (new cljs.core.async.t24629(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24630__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24629 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24629(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24630){return (new cljs.core.async.t24629(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24630));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24629(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24696){var state_val_24697 = (state_24696[1]);if((state_val_24697 === 1))
{var inst_24635 = (state_24696[7]);var inst_24635__$1 = calc_state();var inst_24636 = cljs.core.seq_QMARK_(inst_24635__$1);var state_24696__$1 = (function (){var statearr_24698 = state_24696;(statearr_24698[7] = inst_24635__$1);
return statearr_24698;
})();if(inst_24636)
{var statearr_24699_24739 = state_24696__$1;(statearr_24699_24739[1] = 2);
} else
{var statearr_24700_24740 = state_24696__$1;(statearr_24700_24740[1] = 3);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 2))
{var inst_24635 = (state_24696[7]);var inst_24638 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24635);var state_24696__$1 = state_24696;var statearr_24701_24741 = state_24696__$1;(statearr_24701_24741[2] = inst_24638);
(statearr_24701_24741[1] = 4);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 3))
{var inst_24635 = (state_24696[7]);var state_24696__$1 = state_24696;var statearr_24702_24742 = state_24696__$1;(statearr_24702_24742[2] = inst_24635);
(statearr_24702_24742[1] = 4);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 4))
{var inst_24635 = (state_24696[7]);var inst_24641 = (state_24696[2]);var inst_24642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24641,cljs.core.constant$keyword$221);var inst_24643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24641,cljs.core.constant$keyword$220);var inst_24644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24641,cljs.core.constant$keyword$219);var inst_24645 = inst_24635;var state_24696__$1 = (function (){var statearr_24703 = state_24696;(statearr_24703[8] = inst_24645);
(statearr_24703[9] = inst_24644);
(statearr_24703[10] = inst_24643);
(statearr_24703[11] = inst_24642);
return statearr_24703;
})();var statearr_24704_24743 = state_24696__$1;(statearr_24704_24743[2] = null);
(statearr_24704_24743[1] = 5);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 5))
{var inst_24645 = (state_24696[8]);var inst_24648 = cljs.core.seq_QMARK_(inst_24645);var state_24696__$1 = state_24696;if(inst_24648)
{var statearr_24705_24744 = state_24696__$1;(statearr_24705_24744[1] = 7);
} else
{var statearr_24706_24745 = state_24696__$1;(statearr_24706_24745[1] = 8);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 6))
{var inst_24694 = (state_24696[2]);var state_24696__$1 = state_24696;return cljs.core.async.impl.ioc_helpers.return_chan(state_24696__$1,inst_24694);
} else
{if((state_val_24697 === 7))
{var inst_24645 = (state_24696[8]);var inst_24650 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24645);var state_24696__$1 = state_24696;var statearr_24707_24746 = state_24696__$1;(statearr_24707_24746[2] = inst_24650);
(statearr_24707_24746[1] = 9);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 8))
{var inst_24645 = (state_24696[8]);var state_24696__$1 = state_24696;var statearr_24708_24747 = state_24696__$1;(statearr_24708_24747[2] = inst_24645);
(statearr_24708_24747[1] = 9);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 9))
{var inst_24653 = (state_24696[12]);var inst_24653__$1 = (state_24696[2]);var inst_24654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24653__$1,cljs.core.constant$keyword$221);var inst_24655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24653__$1,cljs.core.constant$keyword$220);var inst_24656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24653__$1,cljs.core.constant$keyword$219);var state_24696__$1 = (function (){var statearr_24709 = state_24696;(statearr_24709[13] = inst_24655);
(statearr_24709[12] = inst_24653__$1);
(statearr_24709[14] = inst_24656);
return statearr_24709;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24696__$1,10,inst_24654);
} else
{if((state_val_24697 === 10))
{var inst_24661 = (state_24696[15]);var inst_24660 = (state_24696[16]);var inst_24659 = (state_24696[2]);var inst_24660__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24659,0,null);var inst_24661__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24659,1,null);var inst_24662 = (inst_24660__$1 == null);var inst_24663 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24661__$1,change);var inst_24664 = (inst_24662) || (inst_24663);var state_24696__$1 = (function (){var statearr_24710 = state_24696;(statearr_24710[15] = inst_24661__$1);
(statearr_24710[16] = inst_24660__$1);
return statearr_24710;
})();if(cljs.core.truth_(inst_24664))
{var statearr_24711_24748 = state_24696__$1;(statearr_24711_24748[1] = 11);
} else
{var statearr_24712_24749 = state_24696__$1;(statearr_24712_24749[1] = 12);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 11))
{var inst_24660 = (state_24696[16]);var inst_24666 = (inst_24660 == null);var state_24696__$1 = state_24696;if(cljs.core.truth_(inst_24666))
{var statearr_24713_24750 = state_24696__$1;(statearr_24713_24750[1] = 14);
} else
{var statearr_24714_24751 = state_24696__$1;(statearr_24714_24751[1] = 15);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 12))
{var inst_24661 = (state_24696[15]);var inst_24675 = (state_24696[17]);var inst_24656 = (state_24696[14]);var inst_24675__$1 = (inst_24656.cljs$core$IFn$_invoke$arity$1 ? inst_24656.cljs$core$IFn$_invoke$arity$1(inst_24661) : inst_24656.call(null,inst_24661));var state_24696__$1 = (function (){var statearr_24715 = state_24696;(statearr_24715[17] = inst_24675__$1);
return statearr_24715;
})();if(cljs.core.truth_(inst_24675__$1))
{var statearr_24716_24752 = state_24696__$1;(statearr_24716_24752[1] = 17);
} else
{var statearr_24717_24753 = state_24696__$1;(statearr_24717_24753[1] = 18);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 13))
{var inst_24692 = (state_24696[2]);var state_24696__$1 = state_24696;var statearr_24718_24754 = state_24696__$1;(statearr_24718_24754[2] = inst_24692);
(statearr_24718_24754[1] = 6);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 14))
{var inst_24661 = (state_24696[15]);var inst_24668 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24661);var state_24696__$1 = state_24696;var statearr_24719_24755 = state_24696__$1;(statearr_24719_24755[2] = inst_24668);
(statearr_24719_24755[1] = 16);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 15))
{var state_24696__$1 = state_24696;var statearr_24720_24756 = state_24696__$1;(statearr_24720_24756[2] = null);
(statearr_24720_24756[1] = 16);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 16))
{var inst_24671 = (state_24696[2]);var inst_24672 = calc_state();var inst_24645 = inst_24672;var state_24696__$1 = (function (){var statearr_24721 = state_24696;(statearr_24721[8] = inst_24645);
(statearr_24721[18] = inst_24671);
return statearr_24721;
})();var statearr_24722_24757 = state_24696__$1;(statearr_24722_24757[2] = null);
(statearr_24722_24757[1] = 5);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 17))
{var inst_24675 = (state_24696[17]);var state_24696__$1 = state_24696;var statearr_24723_24758 = state_24696__$1;(statearr_24723_24758[2] = inst_24675);
(statearr_24723_24758[1] = 19);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 18))
{var inst_24655 = (state_24696[13]);var inst_24661 = (state_24696[15]);var inst_24656 = (state_24696[14]);var inst_24678 = cljs.core.empty_QMARK_(inst_24656);var inst_24679 = (inst_24655.cljs$core$IFn$_invoke$arity$1 ? inst_24655.cljs$core$IFn$_invoke$arity$1(inst_24661) : inst_24655.call(null,inst_24661));var inst_24680 = cljs.core.not(inst_24679);var inst_24681 = (inst_24678) && (inst_24680);var state_24696__$1 = state_24696;var statearr_24724_24759 = state_24696__$1;(statearr_24724_24759[2] = inst_24681);
(statearr_24724_24759[1] = 19);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 19))
{var inst_24683 = (state_24696[2]);var state_24696__$1 = state_24696;if(cljs.core.truth_(inst_24683))
{var statearr_24725_24760 = state_24696__$1;(statearr_24725_24760[1] = 20);
} else
{var statearr_24726_24761 = state_24696__$1;(statearr_24726_24761[1] = 21);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 20))
{var inst_24660 = (state_24696[16]);var state_24696__$1 = state_24696;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24696__$1,23,out,inst_24660);
} else
{if((state_val_24697 === 21))
{var state_24696__$1 = state_24696;var statearr_24727_24762 = state_24696__$1;(statearr_24727_24762[2] = null);
(statearr_24727_24762[1] = 22);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 22))
{var inst_24653 = (state_24696[12]);var inst_24689 = (state_24696[2]);var inst_24645 = inst_24653;var state_24696__$1 = (function (){var statearr_24728 = state_24696;(statearr_24728[19] = inst_24689);
(statearr_24728[8] = inst_24645);
return statearr_24728;
})();var statearr_24729_24763 = state_24696__$1;(statearr_24729_24763[2] = null);
(statearr_24729_24763[1] = 5);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24697 === 23))
{var inst_24686 = (state_24696[2]);var state_24696__$1 = state_24696;var statearr_24730_24764 = state_24696__$1;(statearr_24730_24764[2] = inst_24686);
(statearr_24730_24764[1] = 22);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24734[0] = state_machine__5507__auto__);
(statearr_24734[1] = 1);
return statearr_24734;
});
var state_machine__5507__auto____1 = (function (state_24696){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24696);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24735){if((e24735 instanceof Object))
{var ex__5510__auto__ = e24735;var statearr_24736_24765 = state_24696;(statearr_24736_24765[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24696);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e24735;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__24766 = state_24696;
state_24696 = G__24766;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24696){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24737 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24738);
return statearr_24737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
cljs.core.async.Pub = (function (){var obj24768 = {};return obj24768;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
return (function (topic){var or__3406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3406__auto__,mults){
return (function (p1__24769_SHARP_){if(cljs.core.truth_((p1__24769_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24769_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24769_SHARP_.call(null,topic))))
{return p1__24769_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24769_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24894 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24894 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24895){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24895 = meta24895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24894.cljs$lang$type = true;
cljs.core.async.t24894.cljs$lang$ctorStr = "cljs.core.async/t24894";
cljs.core.async.t24894.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24894");
});})(mults,ensure_mult))
;
cljs.core.async.t24894.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24894.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24894.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24894.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24896){var self__ = this;
var _24896__$1 = this;return self__.meta24895;
});})(mults,ensure_mult))
;
cljs.core.async.t24894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24896,meta24895__$1){var self__ = this;
var _24896__$1 = this;return (new cljs.core.async.t24894(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24895__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24894 = ((function (mults,ensure_mult){
return (function __GT_t24894(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24895){return (new cljs.core.async.t24894(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24895));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24894(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24970){var state_val_24971 = (state_24970[1]);if((state_val_24971 === 1))
{var state_24970__$1 = state_24970;var statearr_24972_25019 = state_24970__$1;(statearr_24972_25019[2] = null);
(statearr_24972_25019[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 2))
{var state_24970__$1 = state_24970;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24970__$1,4,ch);
} else
{if((state_val_24971 === 3))
{var inst_24968 = (state_24970[2]);var state_24970__$1 = state_24970;return cljs.core.async.impl.ioc_helpers.return_chan(state_24970__$1,inst_24968);
} else
{if((state_val_24971 === 4))
{var inst_24899 = (state_24970[7]);var inst_24899__$1 = (state_24970[2]);var inst_24900 = (inst_24899__$1 == null);var state_24970__$1 = (function (){var statearr_24973 = state_24970;(statearr_24973[7] = inst_24899__$1);
return statearr_24973;
})();if(cljs.core.truth_(inst_24900))
{var statearr_24974_25020 = state_24970__$1;(statearr_24974_25020[1] = 5);
} else
{var statearr_24975_25021 = state_24970__$1;(statearr_24975_25021[1] = 6);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 5))
{var inst_24906 = cljs.core.deref(mults);var inst_24907 = cljs.core.vals(inst_24906);var inst_24908 = cljs.core.seq(inst_24907);var inst_24909 = inst_24908;var inst_24910 = null;var inst_24911 = 0;var inst_24912 = 0;var state_24970__$1 = (function (){var statearr_24976 = state_24970;(statearr_24976[8] = inst_24910);
(statearr_24976[9] = inst_24909);
(statearr_24976[10] = inst_24911);
(statearr_24976[11] = inst_24912);
return statearr_24976;
})();var statearr_24977_25022 = state_24970__$1;(statearr_24977_25022[2] = null);
(statearr_24977_25022[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 6))
{var inst_24947 = (state_24970[12]);var inst_24949 = (state_24970[13]);var inst_24899 = (state_24970[7]);var inst_24947__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24899) : topic_fn.call(null,inst_24899));var inst_24948 = cljs.core.deref(mults);var inst_24949__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24948,inst_24947__$1);var state_24970__$1 = (function (){var statearr_24978 = state_24970;(statearr_24978[12] = inst_24947__$1);
(statearr_24978[13] = inst_24949__$1);
return statearr_24978;
})();if(cljs.core.truth_(inst_24949__$1))
{var statearr_24979_25023 = state_24970__$1;(statearr_24979_25023[1] = 19);
} else
{var statearr_24980_25024 = state_24970__$1;(statearr_24980_25024[1] = 20);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 7))
{var inst_24966 = (state_24970[2]);var state_24970__$1 = state_24970;var statearr_24981_25025 = state_24970__$1;(statearr_24981_25025[2] = inst_24966);
(statearr_24981_25025[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 8))
{var inst_24911 = (state_24970[10]);var inst_24912 = (state_24970[11]);var inst_24914 = (inst_24912 < inst_24911);var inst_24915 = inst_24914;var state_24970__$1 = state_24970;if(cljs.core.truth_(inst_24915))
{var statearr_24985_25026 = state_24970__$1;(statearr_24985_25026[1] = 10);
} else
{var statearr_24986_25027 = state_24970__$1;(statearr_24986_25027[1] = 11);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 9))
{var inst_24945 = (state_24970[2]);var state_24970__$1 = state_24970;var statearr_24987_25028 = state_24970__$1;(statearr_24987_25028[2] = inst_24945);
(statearr_24987_25028[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 10))
{var inst_24910 = (state_24970[8]);var inst_24909 = (state_24970[9]);var inst_24911 = (state_24970[10]);var inst_24912 = (state_24970[11]);var inst_24917 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24910,inst_24912);var inst_24918 = cljs.core.async.muxch_STAR_(inst_24917);var inst_24919 = cljs.core.async.close_BANG_(inst_24918);var inst_24920 = (inst_24912 + 1);var tmp24982 = inst_24910;var tmp24983 = inst_24909;var tmp24984 = inst_24911;var inst_24909__$1 = tmp24983;var inst_24910__$1 = tmp24982;var inst_24911__$1 = tmp24984;var inst_24912__$1 = inst_24920;var state_24970__$1 = (function (){var statearr_24988 = state_24970;(statearr_24988[8] = inst_24910__$1);
(statearr_24988[9] = inst_24909__$1);
(statearr_24988[10] = inst_24911__$1);
(statearr_24988[11] = inst_24912__$1);
(statearr_24988[14] = inst_24919);
return statearr_24988;
})();var statearr_24989_25029 = state_24970__$1;(statearr_24989_25029[2] = null);
(statearr_24989_25029[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 11))
{var inst_24923 = (state_24970[15]);var inst_24909 = (state_24970[9]);var inst_24923__$1 = cljs.core.seq(inst_24909);var state_24970__$1 = (function (){var statearr_24990 = state_24970;(statearr_24990[15] = inst_24923__$1);
return statearr_24990;
})();if(inst_24923__$1)
{var statearr_24991_25030 = state_24970__$1;(statearr_24991_25030[1] = 13);
} else
{var statearr_24992_25031 = state_24970__$1;(statearr_24992_25031[1] = 14);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 12))
{var inst_24943 = (state_24970[2]);var state_24970__$1 = state_24970;var statearr_24993_25032 = state_24970__$1;(statearr_24993_25032[2] = inst_24943);
(statearr_24993_25032[1] = 9);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 13))
{var inst_24923 = (state_24970[15]);var inst_24925 = cljs.core.chunked_seq_QMARK_(inst_24923);var state_24970__$1 = state_24970;if(inst_24925)
{var statearr_24994_25033 = state_24970__$1;(statearr_24994_25033[1] = 16);
} else
{var statearr_24995_25034 = state_24970__$1;(statearr_24995_25034[1] = 17);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 14))
{var state_24970__$1 = state_24970;var statearr_24996_25035 = state_24970__$1;(statearr_24996_25035[2] = null);
(statearr_24996_25035[1] = 15);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 15))
{var inst_24941 = (state_24970[2]);var state_24970__$1 = state_24970;var statearr_24997_25036 = state_24970__$1;(statearr_24997_25036[2] = inst_24941);
(statearr_24997_25036[1] = 12);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 16))
{var inst_24923 = (state_24970[15]);var inst_24927 = cljs.core.chunk_first(inst_24923);var inst_24928 = cljs.core.chunk_rest(inst_24923);var inst_24929 = cljs.core.count(inst_24927);var inst_24909 = inst_24928;var inst_24910 = inst_24927;var inst_24911 = inst_24929;var inst_24912 = 0;var state_24970__$1 = (function (){var statearr_24998 = state_24970;(statearr_24998[8] = inst_24910);
(statearr_24998[9] = inst_24909);
(statearr_24998[10] = inst_24911);
(statearr_24998[11] = inst_24912);
return statearr_24998;
})();var statearr_24999_25037 = state_24970__$1;(statearr_24999_25037[2] = null);
(statearr_24999_25037[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 17))
{var inst_24923 = (state_24970[15]);var inst_24932 = cljs.core.first(inst_24923);var inst_24933 = cljs.core.async.muxch_STAR_(inst_24932);var inst_24934 = cljs.core.async.close_BANG_(inst_24933);var inst_24935 = cljs.core.next(inst_24923);var inst_24909 = inst_24935;var inst_24910 = null;var inst_24911 = 0;var inst_24912 = 0;var state_24970__$1 = (function (){var statearr_25000 = state_24970;(statearr_25000[8] = inst_24910);
(statearr_25000[9] = inst_24909);
(statearr_25000[10] = inst_24911);
(statearr_25000[11] = inst_24912);
(statearr_25000[16] = inst_24934);
return statearr_25000;
})();var statearr_25001_25038 = state_24970__$1;(statearr_25001_25038[2] = null);
(statearr_25001_25038[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 18))
{var inst_24938 = (state_24970[2]);var state_24970__$1 = state_24970;var statearr_25002_25039 = state_24970__$1;(statearr_25002_25039[2] = inst_24938);
(statearr_25002_25039[1] = 15);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 19))
{var state_24970__$1 = state_24970;var statearr_25003_25040 = state_24970__$1;(statearr_25003_25040[2] = null);
(statearr_25003_25040[1] = 24);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 20))
{var state_24970__$1 = state_24970;var statearr_25004_25041 = state_24970__$1;(statearr_25004_25041[2] = null);
(statearr_25004_25041[1] = 21);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 21))
{var inst_24963 = (state_24970[2]);var state_24970__$1 = (function (){var statearr_25005 = state_24970;(statearr_25005[17] = inst_24963);
return statearr_25005;
})();var statearr_25006_25042 = state_24970__$1;(statearr_25006_25042[2] = null);
(statearr_25006_25042[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 22))
{var inst_24960 = (state_24970[2]);var state_24970__$1 = state_24970;var statearr_25007_25043 = state_24970__$1;(statearr_25007_25043[2] = inst_24960);
(statearr_25007_25043[1] = 21);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 23))
{var inst_24947 = (state_24970[12]);var inst_24951 = (state_24970[2]);var inst_24952 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24947);var state_24970__$1 = (function (){var statearr_25008 = state_24970;(statearr_25008[18] = inst_24951);
return statearr_25008;
})();var statearr_25009_25044 = state_24970__$1;(statearr_25009_25044[2] = inst_24952);
cljs.core.async.impl.ioc_helpers.process_exception(state_24970__$1);
return cljs.core.constant$keyword$209;
} else
{if((state_val_24971 === 24))
{var inst_24949 = (state_24970[13]);var inst_24899 = (state_24970[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24970,23,Object,null,22);var inst_24956 = cljs.core.async.muxch_STAR_(inst_24949);var state_24970__$1 = state_24970;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24970__$1,25,inst_24956,inst_24899);
} else
{if((state_val_24971 === 25))
{var inst_24958 = (state_24970[2]);var state_24970__$1 = state_24970;var statearr_25010_25045 = state_24970__$1;(statearr_25010_25045[2] = inst_24958);
cljs.core.async.impl.ioc_helpers.process_exception(state_24970__$1);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25014[0] = state_machine__5507__auto__);
(statearr_25014[1] = 1);
return statearr_25014;
});
var state_machine__5507__auto____1 = (function (state_24970){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24970);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25015){if((e25015 instanceof Object))
{var ex__5510__auto__ = e25015;var statearr_25016_25046 = state_24970;(statearr_25016_25046[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24970);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e25015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__25047 = state_24970;
state_24970 = G__25047;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24970){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25017 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25018);
return statearr_25017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25154){var state_val_25155 = (state_25154[1]);if((state_val_25155 === 1))
{var state_25154__$1 = state_25154;var statearr_25156_25185 = state_25154__$1;(statearr_25156_25185[2] = null);
(statearr_25156_25185[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 2))
{var inst_25117 = cljs.core.reset_BANG_(dctr,cnt);var inst_25118 = 0;var state_25154__$1 = (function (){var statearr_25157 = state_25154;(statearr_25157[7] = inst_25118);
(statearr_25157[8] = inst_25117);
return statearr_25157;
})();var statearr_25158_25186 = state_25154__$1;(statearr_25158_25186[2] = null);
(statearr_25158_25186[1] = 4);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 3))
{var inst_25152 = (state_25154[2]);var state_25154__$1 = state_25154;return cljs.core.async.impl.ioc_helpers.return_chan(state_25154__$1,inst_25152);
} else
{if((state_val_25155 === 4))
{var inst_25118 = (state_25154[7]);var inst_25120 = (inst_25118 < cnt);var state_25154__$1 = state_25154;if(cljs.core.truth_(inst_25120))
{var statearr_25159_25187 = state_25154__$1;(statearr_25159_25187[1] = 6);
} else
{var statearr_25160_25188 = state_25154__$1;(statearr_25160_25188[1] = 7);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 5))
{var inst_25138 = (state_25154[2]);var state_25154__$1 = (function (){var statearr_25161 = state_25154;(statearr_25161[9] = inst_25138);
return statearr_25161;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25154__$1,12,dchan);
} else
{if((state_val_25155 === 6))
{var state_25154__$1 = state_25154;var statearr_25162_25189 = state_25154__$1;(statearr_25162_25189[2] = null);
(statearr_25162_25189[1] = 11);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 7))
{var state_25154__$1 = state_25154;var statearr_25163_25190 = state_25154__$1;(statearr_25163_25190[2] = null);
(statearr_25163_25190[1] = 8);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 8))
{var inst_25136 = (state_25154[2]);var state_25154__$1 = state_25154;var statearr_25164_25191 = state_25154__$1;(statearr_25164_25191[2] = inst_25136);
(statearr_25164_25191[1] = 5);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 9))
{var inst_25118 = (state_25154[7]);var inst_25131 = (state_25154[2]);var inst_25132 = (inst_25118 + 1);var inst_25118__$1 = inst_25132;var state_25154__$1 = (function (){var statearr_25165 = state_25154;(statearr_25165[10] = inst_25131);
(statearr_25165[7] = inst_25118__$1);
return statearr_25165;
})();var statearr_25166_25192 = state_25154__$1;(statearr_25166_25192[2] = null);
(statearr_25166_25192[1] = 4);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 10))
{var inst_25122 = (state_25154[2]);var inst_25123 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25154__$1 = (function (){var statearr_25167 = state_25154;(statearr_25167[11] = inst_25122);
return statearr_25167;
})();var statearr_25168_25193 = state_25154__$1;(statearr_25168_25193[2] = inst_25123);
cljs.core.async.impl.ioc_helpers.process_exception(state_25154__$1);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 11))
{var inst_25118 = (state_25154[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25154,10,Object,null,9);var inst_25127 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25118) : chs__$1.call(null,inst_25118));var inst_25128 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25118) : done.call(null,inst_25118));var inst_25129 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25127,inst_25128);var state_25154__$1 = state_25154;var statearr_25169_25194 = state_25154__$1;(statearr_25169_25194[2] = inst_25129);
cljs.core.async.impl.ioc_helpers.process_exception(state_25154__$1);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 12))
{var inst_25140 = (state_25154[12]);var inst_25140__$1 = (state_25154[2]);var inst_25141 = cljs.core.some(cljs.core.nil_QMARK_,inst_25140__$1);var state_25154__$1 = (function (){var statearr_25170 = state_25154;(statearr_25170[12] = inst_25140__$1);
return statearr_25170;
})();if(cljs.core.truth_(inst_25141))
{var statearr_25171_25195 = state_25154__$1;(statearr_25171_25195[1] = 13);
} else
{var statearr_25172_25196 = state_25154__$1;(statearr_25172_25196[1] = 14);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 13))
{var inst_25143 = cljs.core.async.close_BANG_(out);var state_25154__$1 = state_25154;var statearr_25173_25197 = state_25154__$1;(statearr_25173_25197[2] = inst_25143);
(statearr_25173_25197[1] = 15);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 14))
{var inst_25140 = (state_25154[12]);var inst_25145 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25140);var state_25154__$1 = state_25154;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25154__$1,16,out,inst_25145);
} else
{if((state_val_25155 === 15))
{var inst_25150 = (state_25154[2]);var state_25154__$1 = state_25154;var statearr_25174_25198 = state_25154__$1;(statearr_25174_25198[2] = inst_25150);
(statearr_25174_25198[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25155 === 16))
{var inst_25147 = (state_25154[2]);var state_25154__$1 = (function (){var statearr_25175 = state_25154;(statearr_25175[13] = inst_25147);
return statearr_25175;
})();var statearr_25176_25199 = state_25154__$1;(statearr_25176_25199[2] = null);
(statearr_25176_25199[1] = 2);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25180[0] = state_machine__5507__auto__);
(statearr_25180[1] = 1);
return statearr_25180;
});
var state_machine__5507__auto____1 = (function (state_25154){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25154);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25181){if((e25181 instanceof Object))
{var ex__5510__auto__ = e25181;var statearr_25182_25200 = state_25154;(statearr_25182_25200[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25154);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e25181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__25201 = state_25154;
state_25154 = G__25201;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25154){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25183 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25184);
return statearr_25183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25285){var state_val_25286 = (state_25285[1]);if((state_val_25286 === 1))
{var inst_25256 = cljs.core.vec(chs);var inst_25257 = inst_25256;var state_25285__$1 = (function (){var statearr_25287 = state_25285;(statearr_25287[7] = inst_25257);
return statearr_25287;
})();var statearr_25288_25310 = state_25285__$1;(statearr_25288_25310[2] = null);
(statearr_25288_25310[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25286 === 2))
{var inst_25257 = (state_25285[7]);var inst_25259 = cljs.core.count(inst_25257);var inst_25260 = (inst_25259 > 0);var state_25285__$1 = state_25285;if(cljs.core.truth_(inst_25260))
{var statearr_25289_25311 = state_25285__$1;(statearr_25289_25311[1] = 4);
} else
{var statearr_25290_25312 = state_25285__$1;(statearr_25290_25312[1] = 5);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25286 === 3))
{var inst_25283 = (state_25285[2]);var state_25285__$1 = state_25285;return cljs.core.async.impl.ioc_helpers.return_chan(state_25285__$1,inst_25283);
} else
{if((state_val_25286 === 4))
{var inst_25257 = (state_25285[7]);var state_25285__$1 = state_25285;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25285__$1,7,inst_25257);
} else
{if((state_val_25286 === 5))
{var inst_25279 = cljs.core.async.close_BANG_(out);var state_25285__$1 = state_25285;var statearr_25291_25313 = state_25285__$1;(statearr_25291_25313[2] = inst_25279);
(statearr_25291_25313[1] = 6);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25286 === 6))
{var inst_25281 = (state_25285[2]);var state_25285__$1 = state_25285;var statearr_25292_25314 = state_25285__$1;(statearr_25292_25314[2] = inst_25281);
(statearr_25292_25314[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25286 === 7))
{var inst_25264 = (state_25285[8]);var inst_25265 = (state_25285[9]);var inst_25264__$1 = (state_25285[2]);var inst_25265__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25264__$1,0,null);var inst_25266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25264__$1,1,null);var inst_25267 = (inst_25265__$1 == null);var state_25285__$1 = (function (){var statearr_25293 = state_25285;(statearr_25293[10] = inst_25266);
(statearr_25293[8] = inst_25264__$1);
(statearr_25293[9] = inst_25265__$1);
return statearr_25293;
})();if(cljs.core.truth_(inst_25267))
{var statearr_25294_25315 = state_25285__$1;(statearr_25294_25315[1] = 8);
} else
{var statearr_25295_25316 = state_25285__$1;(statearr_25295_25316[1] = 9);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25286 === 8))
{var inst_25266 = (state_25285[10]);var inst_25264 = (state_25285[8]);var inst_25265 = (state_25285[9]);var inst_25257 = (state_25285[7]);var inst_25269 = (function (){var c = inst_25266;var v = inst_25265;var vec__25262 = inst_25264;var cs = inst_25257;return ((function (c,v,vec__25262,cs,inst_25266,inst_25264,inst_25265,inst_25257,state_val_25286){
return (function (p1__25202_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25202_SHARP_);
});
;})(c,v,vec__25262,cs,inst_25266,inst_25264,inst_25265,inst_25257,state_val_25286))
})();var inst_25270 = cljs.core.filterv(inst_25269,inst_25257);var inst_25257__$1 = inst_25270;var state_25285__$1 = (function (){var statearr_25296 = state_25285;(statearr_25296[7] = inst_25257__$1);
return statearr_25296;
})();var statearr_25297_25317 = state_25285__$1;(statearr_25297_25317[2] = null);
(statearr_25297_25317[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25286 === 9))
{var inst_25265 = (state_25285[9]);var state_25285__$1 = state_25285;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25285__$1,11,out,inst_25265);
} else
{if((state_val_25286 === 10))
{var inst_25277 = (state_25285[2]);var state_25285__$1 = state_25285;var statearr_25299_25318 = state_25285__$1;(statearr_25299_25318[2] = inst_25277);
(statearr_25299_25318[1] = 6);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25286 === 11))
{var inst_25257 = (state_25285[7]);var inst_25274 = (state_25285[2]);var tmp25298 = inst_25257;var inst_25257__$1 = tmp25298;var state_25285__$1 = (function (){var statearr_25300 = state_25285;(statearr_25300[7] = inst_25257__$1);
(statearr_25300[11] = inst_25274);
return statearr_25300;
})();var statearr_25301_25319 = state_25285__$1;(statearr_25301_25319[2] = null);
(statearr_25301_25319[1] = 2);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25305 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25305[0] = state_machine__5507__auto__);
(statearr_25305[1] = 1);
return statearr_25305;
});
var state_machine__5507__auto____1 = (function (state_25285){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25285);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25306){if((e25306 instanceof Object))
{var ex__5510__auto__ = e25306;var statearr_25307_25320 = state_25285;(statearr_25307_25320[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25285);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e25306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__25321 = state_25285;
state_25285 = G__25321;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25285){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25308 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25309);
return statearr_25308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25391){var state_val_25392 = (state_25391[1]);if((state_val_25392 === 1))
{var inst_25368 = 0;var state_25391__$1 = (function (){var statearr_25393 = state_25391;(statearr_25393[7] = inst_25368);
return statearr_25393;
})();var statearr_25394_25415 = state_25391__$1;(statearr_25394_25415[2] = null);
(statearr_25394_25415[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25392 === 2))
{var inst_25368 = (state_25391[7]);var inst_25370 = (inst_25368 < n);var state_25391__$1 = state_25391;if(cljs.core.truth_(inst_25370))
{var statearr_25395_25416 = state_25391__$1;(statearr_25395_25416[1] = 4);
} else
{var statearr_25396_25417 = state_25391__$1;(statearr_25396_25417[1] = 5);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25392 === 3))
{var inst_25388 = (state_25391[2]);var inst_25389 = cljs.core.async.close_BANG_(out);var state_25391__$1 = (function (){var statearr_25397 = state_25391;(statearr_25397[8] = inst_25388);
return statearr_25397;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25391__$1,inst_25389);
} else
{if((state_val_25392 === 4))
{var state_25391__$1 = state_25391;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25391__$1,7,ch);
} else
{if((state_val_25392 === 5))
{var state_25391__$1 = state_25391;var statearr_25398_25418 = state_25391__$1;(statearr_25398_25418[2] = null);
(statearr_25398_25418[1] = 6);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25392 === 6))
{var inst_25386 = (state_25391[2]);var state_25391__$1 = state_25391;var statearr_25399_25419 = state_25391__$1;(statearr_25399_25419[2] = inst_25386);
(statearr_25399_25419[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25392 === 7))
{var inst_25373 = (state_25391[9]);var inst_25373__$1 = (state_25391[2]);var inst_25374 = (inst_25373__$1 == null);var inst_25375 = cljs.core.not(inst_25374);var state_25391__$1 = (function (){var statearr_25400 = state_25391;(statearr_25400[9] = inst_25373__$1);
return statearr_25400;
})();if(inst_25375)
{var statearr_25401_25420 = state_25391__$1;(statearr_25401_25420[1] = 8);
} else
{var statearr_25402_25421 = state_25391__$1;(statearr_25402_25421[1] = 9);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25392 === 8))
{var inst_25373 = (state_25391[9]);var state_25391__$1 = state_25391;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25391__$1,11,out,inst_25373);
} else
{if((state_val_25392 === 9))
{var state_25391__$1 = state_25391;var statearr_25403_25422 = state_25391__$1;(statearr_25403_25422[2] = null);
(statearr_25403_25422[1] = 10);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25392 === 10))
{var inst_25383 = (state_25391[2]);var state_25391__$1 = state_25391;var statearr_25404_25423 = state_25391__$1;(statearr_25404_25423[2] = inst_25383);
(statearr_25404_25423[1] = 6);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25392 === 11))
{var inst_25368 = (state_25391[7]);var inst_25378 = (state_25391[2]);var inst_25379 = (inst_25368 + 1);var inst_25368__$1 = inst_25379;var state_25391__$1 = (function (){var statearr_25405 = state_25391;(statearr_25405[10] = inst_25378);
(statearr_25405[7] = inst_25368__$1);
return statearr_25405;
})();var statearr_25406_25424 = state_25391__$1;(statearr_25406_25424[2] = null);
(statearr_25406_25424[1] = 2);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25410 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25410[0] = state_machine__5507__auto__);
(statearr_25410[1] = 1);
return statearr_25410;
});
var state_machine__5507__auto____1 = (function (state_25391){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25391);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25411){if((e25411 instanceof Object))
{var ex__5510__auto__ = e25411;var statearr_25412_25425 = state_25391;(statearr_25412_25425[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25391);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e25411;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__25426 = state_25391;
state_25391 = G__25426;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25391){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25413 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25414);
return statearr_25413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25498){var state_val_25499 = (state_25498[1]);if((state_val_25499 === 1))
{var inst_25475 = null;var state_25498__$1 = (function (){var statearr_25500 = state_25498;(statearr_25500[7] = inst_25475);
return statearr_25500;
})();var statearr_25501_25524 = state_25498__$1;(statearr_25501_25524[2] = null);
(statearr_25501_25524[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25499 === 2))
{var state_25498__$1 = state_25498;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25498__$1,4,ch);
} else
{if((state_val_25499 === 3))
{var inst_25495 = (state_25498[2]);var inst_25496 = cljs.core.async.close_BANG_(out);var state_25498__$1 = (function (){var statearr_25502 = state_25498;(statearr_25502[8] = inst_25495);
return statearr_25502;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25498__$1,inst_25496);
} else
{if((state_val_25499 === 4))
{var inst_25478 = (state_25498[9]);var inst_25478__$1 = (state_25498[2]);var inst_25479 = (inst_25478__$1 == null);var inst_25480 = cljs.core.not(inst_25479);var state_25498__$1 = (function (){var statearr_25503 = state_25498;(statearr_25503[9] = inst_25478__$1);
return statearr_25503;
})();if(inst_25480)
{var statearr_25504_25525 = state_25498__$1;(statearr_25504_25525[1] = 5);
} else
{var statearr_25505_25526 = state_25498__$1;(statearr_25505_25526[1] = 6);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25499 === 5))
{var inst_25475 = (state_25498[7]);var inst_25478 = (state_25498[9]);var inst_25482 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25478,inst_25475);var state_25498__$1 = state_25498;if(inst_25482)
{var statearr_25506_25527 = state_25498__$1;(statearr_25506_25527[1] = 8);
} else
{var statearr_25507_25528 = state_25498__$1;(statearr_25507_25528[1] = 9);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25499 === 6))
{var state_25498__$1 = state_25498;var statearr_25509_25529 = state_25498__$1;(statearr_25509_25529[2] = null);
(statearr_25509_25529[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25499 === 7))
{var inst_25493 = (state_25498[2]);var state_25498__$1 = state_25498;var statearr_25510_25530 = state_25498__$1;(statearr_25510_25530[2] = inst_25493);
(statearr_25510_25530[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25499 === 8))
{var inst_25475 = (state_25498[7]);var tmp25508 = inst_25475;var inst_25475__$1 = tmp25508;var state_25498__$1 = (function (){var statearr_25511 = state_25498;(statearr_25511[7] = inst_25475__$1);
return statearr_25511;
})();var statearr_25512_25531 = state_25498__$1;(statearr_25512_25531[2] = null);
(statearr_25512_25531[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25499 === 9))
{var inst_25478 = (state_25498[9]);var state_25498__$1 = state_25498;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25498__$1,11,out,inst_25478);
} else
{if((state_val_25499 === 10))
{var inst_25490 = (state_25498[2]);var state_25498__$1 = state_25498;var statearr_25513_25532 = state_25498__$1;(statearr_25513_25532[2] = inst_25490);
(statearr_25513_25532[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25499 === 11))
{var inst_25478 = (state_25498[9]);var inst_25487 = (state_25498[2]);var inst_25475 = inst_25478;var state_25498__$1 = (function (){var statearr_25514 = state_25498;(statearr_25514[7] = inst_25475);
(statearr_25514[10] = inst_25487);
return statearr_25514;
})();var statearr_25515_25533 = state_25498__$1;(statearr_25515_25533[2] = null);
(statearr_25515_25533[1] = 2);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25519 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25519[0] = state_machine__5507__auto__);
(statearr_25519[1] = 1);
return statearr_25519;
});
var state_machine__5507__auto____1 = (function (state_25498){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25498);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25520){if((e25520 instanceof Object))
{var ex__5510__auto__ = e25520;var statearr_25521_25534 = state_25498;(statearr_25521_25534[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25498);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e25520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__25535 = state_25498;
state_25498 = G__25535;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25498){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25522 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25523);
return statearr_25522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25640){var state_val_25641 = (state_25640[1]);if((state_val_25641 === 1))
{var inst_25603 = (new Array(n));var inst_25604 = inst_25603;var inst_25605 = 0;var state_25640__$1 = (function (){var statearr_25642 = state_25640;(statearr_25642[7] = inst_25604);
(statearr_25642[8] = inst_25605);
return statearr_25642;
})();var statearr_25643_25671 = state_25640__$1;(statearr_25643_25671[2] = null);
(statearr_25643_25671[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25641 === 2))
{var state_25640__$1 = state_25640;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25640__$1,4,ch);
} else
{if((state_val_25641 === 3))
{var inst_25638 = (state_25640[2]);var state_25640__$1 = state_25640;return cljs.core.async.impl.ioc_helpers.return_chan(state_25640__$1,inst_25638);
} else
{if((state_val_25641 === 4))
{var inst_25608 = (state_25640[9]);var inst_25608__$1 = (state_25640[2]);var inst_25609 = (inst_25608__$1 == null);var inst_25610 = cljs.core.not(inst_25609);var state_25640__$1 = (function (){var statearr_25644 = state_25640;(statearr_25644[9] = inst_25608__$1);
return statearr_25644;
})();if(inst_25610)
{var statearr_25645_25672 = state_25640__$1;(statearr_25645_25672[1] = 5);
} else
{var statearr_25646_25673 = state_25640__$1;(statearr_25646_25673[1] = 6);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25641 === 5))
{var inst_25613 = (state_25640[10]);var inst_25604 = (state_25640[7]);var inst_25605 = (state_25640[8]);var inst_25608 = (state_25640[9]);var inst_25612 = (inst_25604[inst_25605] = inst_25608);var inst_25613__$1 = (inst_25605 + 1);var inst_25614 = (inst_25613__$1 < n);var state_25640__$1 = (function (){var statearr_25647 = state_25640;(statearr_25647[10] = inst_25613__$1);
(statearr_25647[11] = inst_25612);
return statearr_25647;
})();if(cljs.core.truth_(inst_25614))
{var statearr_25648_25674 = state_25640__$1;(statearr_25648_25674[1] = 8);
} else
{var statearr_25649_25675 = state_25640__$1;(statearr_25649_25675[1] = 9);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25641 === 6))
{var inst_25605 = (state_25640[8]);var inst_25626 = (inst_25605 > 0);var state_25640__$1 = state_25640;if(cljs.core.truth_(inst_25626))
{var statearr_25651_25676 = state_25640__$1;(statearr_25651_25676[1] = 12);
} else
{var statearr_25652_25677 = state_25640__$1;(statearr_25652_25677[1] = 13);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25641 === 7))
{var inst_25636 = (state_25640[2]);var state_25640__$1 = state_25640;var statearr_25653_25678 = state_25640__$1;(statearr_25653_25678[2] = inst_25636);
(statearr_25653_25678[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25641 === 8))
{var inst_25613 = (state_25640[10]);var inst_25604 = (state_25640[7]);var tmp25650 = inst_25604;var inst_25604__$1 = tmp25650;var inst_25605 = inst_25613;var state_25640__$1 = (function (){var statearr_25654 = state_25640;(statearr_25654[7] = inst_25604__$1);
(statearr_25654[8] = inst_25605);
return statearr_25654;
})();var statearr_25655_25679 = state_25640__$1;(statearr_25655_25679[2] = null);
(statearr_25655_25679[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25641 === 9))
{var inst_25604 = (state_25640[7]);var inst_25618 = cljs.core.vec(inst_25604);var state_25640__$1 = state_25640;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25640__$1,11,out,inst_25618);
} else
{if((state_val_25641 === 10))
{var inst_25624 = (state_25640[2]);var state_25640__$1 = state_25640;var statearr_25656_25680 = state_25640__$1;(statearr_25656_25680[2] = inst_25624);
(statearr_25656_25680[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25641 === 11))
{var inst_25620 = (state_25640[2]);var inst_25621 = (new Array(n));var inst_25604 = inst_25621;var inst_25605 = 0;var state_25640__$1 = (function (){var statearr_25657 = state_25640;(statearr_25657[12] = inst_25620);
(statearr_25657[7] = inst_25604);
(statearr_25657[8] = inst_25605);
return statearr_25657;
})();var statearr_25658_25681 = state_25640__$1;(statearr_25658_25681[2] = null);
(statearr_25658_25681[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25641 === 12))
{var inst_25604 = (state_25640[7]);var inst_25628 = cljs.core.vec(inst_25604);var state_25640__$1 = state_25640;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25640__$1,15,out,inst_25628);
} else
{if((state_val_25641 === 13))
{var state_25640__$1 = state_25640;var statearr_25659_25682 = state_25640__$1;(statearr_25659_25682[2] = null);
(statearr_25659_25682[1] = 14);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25641 === 14))
{var inst_25633 = (state_25640[2]);var inst_25634 = cljs.core.async.close_BANG_(out);var state_25640__$1 = (function (){var statearr_25660 = state_25640;(statearr_25660[13] = inst_25633);
return statearr_25660;
})();var statearr_25661_25683 = state_25640__$1;(statearr_25661_25683[2] = inst_25634);
(statearr_25661_25683[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25641 === 15))
{var inst_25630 = (state_25640[2]);var state_25640__$1 = state_25640;var statearr_25662_25684 = state_25640__$1;(statearr_25662_25684[2] = inst_25630);
(statearr_25662_25684[1] = 14);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25666[0] = state_machine__5507__auto__);
(statearr_25666[1] = 1);
return statearr_25666;
});
var state_machine__5507__auto____1 = (function (state_25640){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25640);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25667){if((e25667 instanceof Object))
{var ex__5510__auto__ = e25667;var statearr_25668_25685 = state_25640;(statearr_25668_25685[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25640);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e25667;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__25686 = state_25640;
state_25640 = G__25686;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25640){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25669 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25670);
return statearr_25669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25799){var state_val_25800 = (state_25799[1]);if((state_val_25800 === 1))
{var inst_25758 = [];var inst_25759 = inst_25758;var inst_25760 = cljs.core.constant$keyword$222;var state_25799__$1 = (function (){var statearr_25801 = state_25799;(statearr_25801[7] = inst_25759);
(statearr_25801[8] = inst_25760);
return statearr_25801;
})();var statearr_25802_25830 = state_25799__$1;(statearr_25802_25830[2] = null);
(statearr_25802_25830[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25800 === 2))
{var state_25799__$1 = state_25799;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25799__$1,4,ch);
} else
{if((state_val_25800 === 3))
{var inst_25797 = (state_25799[2]);var state_25799__$1 = state_25799;return cljs.core.async.impl.ioc_helpers.return_chan(state_25799__$1,inst_25797);
} else
{if((state_val_25800 === 4))
{var inst_25763 = (state_25799[9]);var inst_25763__$1 = (state_25799[2]);var inst_25764 = (inst_25763__$1 == null);var inst_25765 = cljs.core.not(inst_25764);var state_25799__$1 = (function (){var statearr_25803 = state_25799;(statearr_25803[9] = inst_25763__$1);
return statearr_25803;
})();if(inst_25765)
{var statearr_25804_25831 = state_25799__$1;(statearr_25804_25831[1] = 5);
} else
{var statearr_25805_25832 = state_25799__$1;(statearr_25805_25832[1] = 6);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25800 === 5))
{var inst_25767 = (state_25799[10]);var inst_25763 = (state_25799[9]);var inst_25760 = (state_25799[8]);var inst_25767__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25763) : f.call(null,inst_25763));var inst_25768 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25767__$1,inst_25760);var inst_25769 = cljs.core.keyword_identical_QMARK_(inst_25760,cljs.core.constant$keyword$222);var inst_25770 = (inst_25768) || (inst_25769);var state_25799__$1 = (function (){var statearr_25806 = state_25799;(statearr_25806[10] = inst_25767__$1);
return statearr_25806;
})();if(cljs.core.truth_(inst_25770))
{var statearr_25807_25833 = state_25799__$1;(statearr_25807_25833[1] = 8);
} else
{var statearr_25808_25834 = state_25799__$1;(statearr_25808_25834[1] = 9);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25800 === 6))
{var inst_25759 = (state_25799[7]);var inst_25784 = inst_25759.length;var inst_25785 = (inst_25784 > 0);var state_25799__$1 = state_25799;if(cljs.core.truth_(inst_25785))
{var statearr_25810_25835 = state_25799__$1;(statearr_25810_25835[1] = 12);
} else
{var statearr_25811_25836 = state_25799__$1;(statearr_25811_25836[1] = 13);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_25800 === 7))
{var inst_25795 = (state_25799[2]);var state_25799__$1 = state_25799;var statearr_25812_25837 = state_25799__$1;(statearr_25812_25837[2] = inst_25795);
(statearr_25812_25837[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25800 === 8))
{var inst_25767 = (state_25799[10]);var inst_25759 = (state_25799[7]);var inst_25763 = (state_25799[9]);var inst_25772 = inst_25759.push(inst_25763);var tmp25809 = inst_25759;var inst_25759__$1 = tmp25809;var inst_25760 = inst_25767;var state_25799__$1 = (function (){var statearr_25813 = state_25799;(statearr_25813[11] = inst_25772);
(statearr_25813[7] = inst_25759__$1);
(statearr_25813[8] = inst_25760);
return statearr_25813;
})();var statearr_25814_25838 = state_25799__$1;(statearr_25814_25838[2] = null);
(statearr_25814_25838[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25800 === 9))
{var inst_25759 = (state_25799[7]);var inst_25775 = cljs.core.vec(inst_25759);var state_25799__$1 = state_25799;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25799__$1,11,out,inst_25775);
} else
{if((state_val_25800 === 10))
{var inst_25782 = (state_25799[2]);var state_25799__$1 = state_25799;var statearr_25815_25839 = state_25799__$1;(statearr_25815_25839[2] = inst_25782);
(statearr_25815_25839[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25800 === 11))
{var inst_25767 = (state_25799[10]);var inst_25763 = (state_25799[9]);var inst_25777 = (state_25799[2]);var inst_25778 = [];var inst_25779 = inst_25778.push(inst_25763);var inst_25759 = inst_25778;var inst_25760 = inst_25767;var state_25799__$1 = (function (){var statearr_25816 = state_25799;(statearr_25816[12] = inst_25779);
(statearr_25816[13] = inst_25777);
(statearr_25816[7] = inst_25759);
(statearr_25816[8] = inst_25760);
return statearr_25816;
})();var statearr_25817_25840 = state_25799__$1;(statearr_25817_25840[2] = null);
(statearr_25817_25840[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25800 === 12))
{var inst_25759 = (state_25799[7]);var inst_25787 = cljs.core.vec(inst_25759);var state_25799__$1 = state_25799;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25799__$1,15,out,inst_25787);
} else
{if((state_val_25800 === 13))
{var state_25799__$1 = state_25799;var statearr_25818_25841 = state_25799__$1;(statearr_25818_25841[2] = null);
(statearr_25818_25841[1] = 14);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25800 === 14))
{var inst_25792 = (state_25799[2]);var inst_25793 = cljs.core.async.close_BANG_(out);var state_25799__$1 = (function (){var statearr_25819 = state_25799;(statearr_25819[14] = inst_25792);
return statearr_25819;
})();var statearr_25820_25842 = state_25799__$1;(statearr_25820_25842[2] = inst_25793);
(statearr_25820_25842[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_25800 === 15))
{var inst_25789 = (state_25799[2]);var state_25799__$1 = state_25799;var statearr_25821_25843 = state_25799__$1;(statearr_25821_25843[2] = inst_25789);
(statearr_25821_25843[1] = 14);
return cljs.core.constant$keyword$209;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25825[0] = state_machine__5507__auto__);
(statearr_25825[1] = 1);
return statearr_25825;
});
var state_machine__5507__auto____1 = (function (state_25799){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25799);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25826){if((e25826 instanceof Object))
{var ex__5510__auto__ = e25826;var statearr_25827_25844 = state_25799;(statearr_25827_25844[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25799);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e25826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__25845 = state_25799;
state_25799 = G__25845;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25799){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25828 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25829);
return statearr_25828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
