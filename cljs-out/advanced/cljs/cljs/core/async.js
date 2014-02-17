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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24061 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24061 = (function (f,fn_handler,meta24062){
this.f = f;
this.fn_handler = fn_handler;
this.meta24062 = meta24062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24061.cljs$lang$type = true;
cljs.core.async.t24061.cljs$lang$ctorStr = "cljs.core.async/t24061";
cljs.core.async.t24061.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24061");
});
cljs.core.async.t24061.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24063){var self__ = this;
var _24063__$1 = this;return self__.meta24062;
});
cljs.core.async.t24061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24063,meta24062__$1){var self__ = this;
var _24063__$1 = this;return (new cljs.core.async.t24061(self__.f,self__.fn_handler,meta24062__$1));
});
cljs.core.async.__GT_t24061 = (function __GT_t24061(f__$1,fn_handler__$1,meta24062){return (new cljs.core.async.t24061(f__$1,fn_handler__$1,meta24062));
});
}
return (new cljs.core.async.t24061(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24065 = buff;if(G__24065)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24065.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24065.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24065);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24065);
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
{var val_24066 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24066) : fn1.call(null,val_24066));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24066) : fn1.call(null,val_24066));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24067 = n;var x_24068 = 0;while(true){
if((x_24068 < n__4248__auto___24067))
{(a[x_24068] = 0);
{
var G__24069 = (x_24068 + 1);
x_24068 = G__24069;
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
var G__24070 = (i + 1);
i = G__24070;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24074 = (function (flag,alt_flag,meta24075){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24075 = meta24075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24074.cljs$lang$type = true;
cljs.core.async.t24074.cljs$lang$ctorStr = "cljs.core.async/t24074";
cljs.core.async.t24074.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24074");
});
cljs.core.async.t24074.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24076){var self__ = this;
var _24076__$1 = this;return self__.meta24075;
});
cljs.core.async.t24074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24076,meta24075__$1){var self__ = this;
var _24076__$1 = this;return (new cljs.core.async.t24074(self__.flag,self__.alt_flag,meta24075__$1));
});
cljs.core.async.__GT_t24074 = (function __GT_t24074(flag__$1,alt_flag__$1,meta24075){return (new cljs.core.async.t24074(flag__$1,alt_flag__$1,meta24075));
});
}
return (new cljs.core.async.t24074(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24080 = (function (cb,flag,alt_handler,meta24081){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24081 = meta24081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24080.cljs$lang$type = true;
cljs.core.async.t24080.cljs$lang$ctorStr = "cljs.core.async/t24080";
cljs.core.async.t24080.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24080");
});
cljs.core.async.t24080.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24082){var self__ = this;
var _24082__$1 = this;return self__.meta24081;
});
cljs.core.async.t24080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24082,meta24081__$1){var self__ = this;
var _24082__$1 = this;return (new cljs.core.async.t24080(self__.cb,self__.flag,self__.alt_handler,meta24081__$1));
});
cljs.core.async.__GT_t24080 = (function __GT_t24080(cb__$1,flag__$1,alt_handler__$1,meta24081){return (new cljs.core.async.t24080(cb__$1,flag__$1,alt_handler__$1,meta24081));
});
}
return (new cljs.core.async.t24080(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24083_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24083_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24083_SHARP_,port], null)));
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
var G__24084 = (i + 1);
i = G__24084;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$225))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$225], null));
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
var alts_BANG___delegate = function (ports,p__24085){var map__24087 = p__24085;var map__24087__$1 = ((cljs.core.seq_QMARK_(map__24087))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24087):map__24087);var opts = map__24087__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24085 = null;if (arguments.length > 1) {
  p__24085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24085);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24088){
var ports = cljs.core.first(arglist__24088);
var p__24085 = cljs.core.rest(arglist__24088);
return alts_BANG___delegate(ports,p__24085);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24096 = (function (ch,f,map_LT_,meta24097){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24097 = meta24097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24096.cljs$lang$type = true;
cljs.core.async.t24096.cljs$lang$ctorStr = "cljs.core.async/t24096";
cljs.core.async.t24096.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24096");
});
cljs.core.async.t24096.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24096.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24099 = (function (fn1,_,meta24097,ch,f,map_LT_,meta24100){
this.fn1 = fn1;
this._ = _;
this.meta24097 = meta24097;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24100 = meta24100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24099.cljs$lang$type = true;
cljs.core.async.t24099.cljs$lang$ctorStr = "cljs.core.async/t24099";
cljs.core.async.t24099.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24099");
});
cljs.core.async.t24099.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24099.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24089_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24089_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24089_SHARP_) : self__.f.call(null,p1__24089_SHARP_)))) : f1.call(null,(((p1__24089_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24089_SHARP_) : self__.f.call(null,p1__24089_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24101){var self__ = this;
var _24101__$1 = this;return self__.meta24100;
});
cljs.core.async.t24099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24101,meta24100__$1){var self__ = this;
var _24101__$1 = this;return (new cljs.core.async.t24099(self__.fn1,self__._,self__.meta24097,self__.ch,self__.f,self__.map_LT_,meta24100__$1));
});
cljs.core.async.__GT_t24099 = (function __GT_t24099(fn1__$1,___$2,meta24097__$1,ch__$2,f__$2,map_LT___$2,meta24100){return (new cljs.core.async.t24099(fn1__$1,___$2,meta24097__$1,ch__$2,f__$2,map_LT___$2,meta24100));
});
}
return (new cljs.core.async.t24099(fn1,___$1,self__.meta24097,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24096.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24098){var self__ = this;
var _24098__$1 = this;return self__.meta24097;
});
cljs.core.async.t24096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24098,meta24097__$1){var self__ = this;
var _24098__$1 = this;return (new cljs.core.async.t24096(self__.ch,self__.f,self__.map_LT_,meta24097__$1));
});
cljs.core.async.__GT_t24096 = (function __GT_t24096(ch__$1,f__$1,map_LT___$1,meta24097){return (new cljs.core.async.t24096(ch__$1,f__$1,map_LT___$1,meta24097));
});
}
return (new cljs.core.async.t24096(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24105 = (function (ch,f,map_GT_,meta24106){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24106 = meta24106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24105.cljs$lang$type = true;
cljs.core.async.t24105.cljs$lang$ctorStr = "cljs.core.async/t24105";
cljs.core.async.t24105.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24105");
});
cljs.core.async.t24105.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24105.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24105.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24105.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24105.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24105.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24107){var self__ = this;
var _24107__$1 = this;return self__.meta24106;
});
cljs.core.async.t24105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24107,meta24106__$1){var self__ = this;
var _24107__$1 = this;return (new cljs.core.async.t24105(self__.ch,self__.f,self__.map_GT_,meta24106__$1));
});
cljs.core.async.__GT_t24105 = (function __GT_t24105(ch__$1,f__$1,map_GT___$1,meta24106){return (new cljs.core.async.t24105(ch__$1,f__$1,map_GT___$1,meta24106));
});
}
return (new cljs.core.async.t24105(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24111 = (function (ch,p,filter_GT_,meta24112){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24112 = meta24112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24111.cljs$lang$type = true;
cljs.core.async.t24111.cljs$lang$ctorStr = "cljs.core.async/t24111";
cljs.core.async.t24111.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24111");
});
cljs.core.async.t24111.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24111.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24111.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24111.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24111.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24111.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24113){var self__ = this;
var _24113__$1 = this;return self__.meta24112;
});
cljs.core.async.t24111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24113,meta24112__$1){var self__ = this;
var _24113__$1 = this;return (new cljs.core.async.t24111(self__.ch,self__.p,self__.filter_GT_,meta24112__$1));
});
cljs.core.async.__GT_t24111 = (function __GT_t24111(ch__$1,p__$1,filter_GT___$1,meta24112){return (new cljs.core.async.t24111(ch__$1,p__$1,filter_GT___$1,meta24112));
});
}
return (new cljs.core.async.t24111(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24175){var state_val_24176 = (state_24175[1]);if((state_val_24176 === 1))
{var state_24175__$1 = state_24175;var statearr_24177_24197 = state_24175__$1;(statearr_24177_24197[2] = null);
(statearr_24177_24197[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24176 === 2))
{var state_24175__$1 = state_24175;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24175__$1,4,ch);
} else
{if((state_val_24176 === 3))
{var inst_24173 = (state_24175[2]);var state_24175__$1 = state_24175;return cljs.core.async.impl.ioc_helpers.return_chan(state_24175__$1,inst_24173);
} else
{if((state_val_24176 === 4))
{var inst_24157 = (state_24175[7]);var inst_24157__$1 = (state_24175[2]);var inst_24158 = (inst_24157__$1 == null);var state_24175__$1 = (function (){var statearr_24178 = state_24175;(statearr_24178[7] = inst_24157__$1);
return statearr_24178;
})();if(cljs.core.truth_(inst_24158))
{var statearr_24179_24198 = state_24175__$1;(statearr_24179_24198[1] = 5);
} else
{var statearr_24180_24199 = state_24175__$1;(statearr_24180_24199[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24176 === 5))
{var inst_24160 = cljs.core.async.close_BANG_(out);var state_24175__$1 = state_24175;var statearr_24181_24200 = state_24175__$1;(statearr_24181_24200[2] = inst_24160);
(statearr_24181_24200[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24176 === 6))
{var inst_24157 = (state_24175[7]);var inst_24162 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24157) : p.call(null,inst_24157));var state_24175__$1 = state_24175;if(cljs.core.truth_(inst_24162))
{var statearr_24182_24201 = state_24175__$1;(statearr_24182_24201[1] = 8);
} else
{var statearr_24183_24202 = state_24175__$1;(statearr_24183_24202[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24176 === 7))
{var inst_24171 = (state_24175[2]);var state_24175__$1 = state_24175;var statearr_24184_24203 = state_24175__$1;(statearr_24184_24203[2] = inst_24171);
(statearr_24184_24203[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24176 === 8))
{var inst_24157 = (state_24175[7]);var state_24175__$1 = state_24175;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24175__$1,11,out,inst_24157);
} else
{if((state_val_24176 === 9))
{var state_24175__$1 = state_24175;var statearr_24185_24204 = state_24175__$1;(statearr_24185_24204[2] = null);
(statearr_24185_24204[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24176 === 10))
{var inst_24168 = (state_24175[2]);var state_24175__$1 = (function (){var statearr_24186 = state_24175;(statearr_24186[8] = inst_24168);
return statearr_24186;
})();var statearr_24187_24205 = state_24175__$1;(statearr_24187_24205[2] = null);
(statearr_24187_24205[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24176 === 11))
{var inst_24165 = (state_24175[2]);var state_24175__$1 = state_24175;var statearr_24188_24206 = state_24175__$1;(statearr_24188_24206[2] = inst_24165);
(statearr_24188_24206[1] = 10);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_24192 = [null,null,null,null,null,null,null,null,null];(statearr_24192[0] = state_machine__5507__auto__);
(statearr_24192[1] = 1);
return statearr_24192;
});
var state_machine__5507__auto____1 = (function (state_24175){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24175);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24193){if((e24193 instanceof Object))
{var ex__5510__auto__ = e24193;var statearr_24194_24207 = state_24175;(statearr_24194_24207[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24175);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24208 = state_24175;
state_24175 = G__24208;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24175){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24195 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24196);
return statearr_24195;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24360){var state_val_24361 = (state_24360[1]);if((state_val_24361 === 1))
{var state_24360__$1 = state_24360;var statearr_24362_24399 = state_24360__$1;(statearr_24362_24399[2] = null);
(statearr_24362_24399[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 2))
{var state_24360__$1 = state_24360;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24360__$1,4,in$);
} else
{if((state_val_24361 === 3))
{var inst_24358 = (state_24360[2]);var state_24360__$1 = state_24360;return cljs.core.async.impl.ioc_helpers.return_chan(state_24360__$1,inst_24358);
} else
{if((state_val_24361 === 4))
{var inst_24306 = (state_24360[7]);var inst_24306__$1 = (state_24360[2]);var inst_24307 = (inst_24306__$1 == null);var state_24360__$1 = (function (){var statearr_24363 = state_24360;(statearr_24363[7] = inst_24306__$1);
return statearr_24363;
})();if(cljs.core.truth_(inst_24307))
{var statearr_24364_24400 = state_24360__$1;(statearr_24364_24400[1] = 5);
} else
{var statearr_24365_24401 = state_24360__$1;(statearr_24365_24401[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 5))
{var inst_24309 = cljs.core.async.close_BANG_(out);var state_24360__$1 = state_24360;var statearr_24366_24402 = state_24360__$1;(statearr_24366_24402[2] = inst_24309);
(statearr_24366_24402[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 6))
{var inst_24306 = (state_24360[7]);var inst_24311 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24306) : f.call(null,inst_24306));var inst_24316 = cljs.core.seq(inst_24311);var inst_24317 = inst_24316;var inst_24318 = null;var inst_24319 = 0;var inst_24320 = 0;var state_24360__$1 = (function (){var statearr_24367 = state_24360;(statearr_24367[8] = inst_24320);
(statearr_24367[9] = inst_24317);
(statearr_24367[10] = inst_24318);
(statearr_24367[11] = inst_24319);
return statearr_24367;
})();var statearr_24368_24403 = state_24360__$1;(statearr_24368_24403[2] = null);
(statearr_24368_24403[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 7))
{var inst_24356 = (state_24360[2]);var state_24360__$1 = state_24360;var statearr_24369_24404 = state_24360__$1;(statearr_24369_24404[2] = inst_24356);
(statearr_24369_24404[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 8))
{var inst_24320 = (state_24360[8]);var inst_24319 = (state_24360[11]);var inst_24322 = (inst_24320 < inst_24319);var inst_24323 = inst_24322;var state_24360__$1 = state_24360;if(cljs.core.truth_(inst_24323))
{var statearr_24370_24405 = state_24360__$1;(statearr_24370_24405[1] = 10);
} else
{var statearr_24371_24406 = state_24360__$1;(statearr_24371_24406[1] = 11);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 9))
{var inst_24353 = (state_24360[2]);var state_24360__$1 = (function (){var statearr_24372 = state_24360;(statearr_24372[12] = inst_24353);
return statearr_24372;
})();var statearr_24373_24407 = state_24360__$1;(statearr_24373_24407[2] = null);
(statearr_24373_24407[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 10))
{var inst_24320 = (state_24360[8]);var inst_24318 = (state_24360[10]);var inst_24325 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24318,inst_24320);var state_24360__$1 = state_24360;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24360__$1,13,out,inst_24325);
} else
{if((state_val_24361 === 11))
{var inst_24331 = (state_24360[13]);var inst_24317 = (state_24360[9]);var inst_24331__$1 = cljs.core.seq(inst_24317);var state_24360__$1 = (function (){var statearr_24377 = state_24360;(statearr_24377[13] = inst_24331__$1);
return statearr_24377;
})();if(inst_24331__$1)
{var statearr_24378_24408 = state_24360__$1;(statearr_24378_24408[1] = 14);
} else
{var statearr_24379_24409 = state_24360__$1;(statearr_24379_24409[1] = 15);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 12))
{var inst_24351 = (state_24360[2]);var state_24360__$1 = state_24360;var statearr_24380_24410 = state_24360__$1;(statearr_24380_24410[2] = inst_24351);
(statearr_24380_24410[1] = 9);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 13))
{var inst_24320 = (state_24360[8]);var inst_24317 = (state_24360[9]);var inst_24318 = (state_24360[10]);var inst_24319 = (state_24360[11]);var inst_24327 = (state_24360[2]);var inst_24328 = (inst_24320 + 1);var tmp24374 = inst_24317;var tmp24375 = inst_24318;var tmp24376 = inst_24319;var inst_24317__$1 = tmp24374;var inst_24318__$1 = tmp24375;var inst_24319__$1 = tmp24376;var inst_24320__$1 = inst_24328;var state_24360__$1 = (function (){var statearr_24381 = state_24360;(statearr_24381[8] = inst_24320__$1);
(statearr_24381[14] = inst_24327);
(statearr_24381[9] = inst_24317__$1);
(statearr_24381[10] = inst_24318__$1);
(statearr_24381[11] = inst_24319__$1);
return statearr_24381;
})();var statearr_24382_24411 = state_24360__$1;(statearr_24382_24411[2] = null);
(statearr_24382_24411[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 14))
{var inst_24331 = (state_24360[13]);var inst_24333 = cljs.core.chunked_seq_QMARK_(inst_24331);var state_24360__$1 = state_24360;if(inst_24333)
{var statearr_24383_24412 = state_24360__$1;(statearr_24383_24412[1] = 17);
} else
{var statearr_24384_24413 = state_24360__$1;(statearr_24384_24413[1] = 18);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 15))
{var state_24360__$1 = state_24360;var statearr_24385_24414 = state_24360__$1;(statearr_24385_24414[2] = null);
(statearr_24385_24414[1] = 16);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 16))
{var inst_24349 = (state_24360[2]);var state_24360__$1 = state_24360;var statearr_24386_24415 = state_24360__$1;(statearr_24386_24415[2] = inst_24349);
(statearr_24386_24415[1] = 12);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 17))
{var inst_24331 = (state_24360[13]);var inst_24335 = cljs.core.chunk_first(inst_24331);var inst_24336 = cljs.core.chunk_rest(inst_24331);var inst_24337 = cljs.core.count(inst_24335);var inst_24317 = inst_24336;var inst_24318 = inst_24335;var inst_24319 = inst_24337;var inst_24320 = 0;var state_24360__$1 = (function (){var statearr_24387 = state_24360;(statearr_24387[8] = inst_24320);
(statearr_24387[9] = inst_24317);
(statearr_24387[10] = inst_24318);
(statearr_24387[11] = inst_24319);
return statearr_24387;
})();var statearr_24388_24416 = state_24360__$1;(statearr_24388_24416[2] = null);
(statearr_24388_24416[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 18))
{var inst_24331 = (state_24360[13]);var inst_24340 = cljs.core.first(inst_24331);var state_24360__$1 = state_24360;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24360__$1,20,out,inst_24340);
} else
{if((state_val_24361 === 19))
{var inst_24346 = (state_24360[2]);var state_24360__$1 = state_24360;var statearr_24389_24417 = state_24360__$1;(statearr_24389_24417[2] = inst_24346);
(statearr_24389_24417[1] = 16);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24361 === 20))
{var inst_24331 = (state_24360[13]);var inst_24342 = (state_24360[2]);var inst_24343 = cljs.core.next(inst_24331);var inst_24317 = inst_24343;var inst_24318 = null;var inst_24319 = 0;var inst_24320 = 0;var state_24360__$1 = (function (){var statearr_24390 = state_24360;(statearr_24390[8] = inst_24320);
(statearr_24390[9] = inst_24317);
(statearr_24390[10] = inst_24318);
(statearr_24390[15] = inst_24342);
(statearr_24390[11] = inst_24319);
return statearr_24390;
})();var statearr_24391_24418 = state_24360__$1;(statearr_24391_24418[2] = null);
(statearr_24391_24418[1] = 8);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_24395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24395[0] = state_machine__5507__auto__);
(statearr_24395[1] = 1);
return statearr_24395;
});
var state_machine__5507__auto____1 = (function (state_24360){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24360);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24396){if((e24396 instanceof Object))
{var ex__5510__auto__ = e24396;var statearr_24397_24419 = state_24360;(statearr_24397_24419[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24360);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24420 = state_24360;
state_24360 = G__24420;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24360){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24398 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24398;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24480){var state_val_24481 = (state_24480[1]);if((state_val_24481 === 1))
{var state_24480__$1 = state_24480;var statearr_24482_24502 = state_24480__$1;(statearr_24482_24502[2] = null);
(statearr_24482_24502[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24481 === 2))
{var state_24480__$1 = state_24480;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24480__$1,4,from);
} else
{if((state_val_24481 === 3))
{var inst_24478 = (state_24480[2]);var state_24480__$1 = state_24480;return cljs.core.async.impl.ioc_helpers.return_chan(state_24480__$1,inst_24478);
} else
{if((state_val_24481 === 4))
{var inst_24463 = (state_24480[7]);var inst_24463__$1 = (state_24480[2]);var inst_24464 = (inst_24463__$1 == null);var state_24480__$1 = (function (){var statearr_24483 = state_24480;(statearr_24483[7] = inst_24463__$1);
return statearr_24483;
})();if(cljs.core.truth_(inst_24464))
{var statearr_24484_24503 = state_24480__$1;(statearr_24484_24503[1] = 5);
} else
{var statearr_24485_24504 = state_24480__$1;(statearr_24485_24504[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24481 === 5))
{var state_24480__$1 = state_24480;if(cljs.core.truth_(close_QMARK_))
{var statearr_24486_24505 = state_24480__$1;(statearr_24486_24505[1] = 8);
} else
{var statearr_24487_24506 = state_24480__$1;(statearr_24487_24506[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24481 === 6))
{var inst_24463 = (state_24480[7]);var state_24480__$1 = state_24480;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24480__$1,11,to,inst_24463);
} else
{if((state_val_24481 === 7))
{var inst_24476 = (state_24480[2]);var state_24480__$1 = state_24480;var statearr_24488_24507 = state_24480__$1;(statearr_24488_24507[2] = inst_24476);
(statearr_24488_24507[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24481 === 8))
{var inst_24467 = cljs.core.async.close_BANG_(to);var state_24480__$1 = state_24480;var statearr_24489_24508 = state_24480__$1;(statearr_24489_24508[2] = inst_24467);
(statearr_24489_24508[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24481 === 9))
{var state_24480__$1 = state_24480;var statearr_24490_24509 = state_24480__$1;(statearr_24490_24509[2] = null);
(statearr_24490_24509[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24481 === 10))
{var inst_24470 = (state_24480[2]);var state_24480__$1 = state_24480;var statearr_24491_24510 = state_24480__$1;(statearr_24491_24510[2] = inst_24470);
(statearr_24491_24510[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24481 === 11))
{var inst_24473 = (state_24480[2]);var state_24480__$1 = (function (){var statearr_24492 = state_24480;(statearr_24492[8] = inst_24473);
return statearr_24492;
})();var statearr_24493_24511 = state_24480__$1;(statearr_24493_24511[2] = null);
(statearr_24493_24511[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_24497 = [null,null,null,null,null,null,null,null,null];(statearr_24497[0] = state_machine__5507__auto__);
(statearr_24497[1] = 1);
return statearr_24497;
});
var state_machine__5507__auto____1 = (function (state_24480){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24480);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24498){if((e24498 instanceof Object))
{var ex__5510__auto__ = e24498;var statearr_24499_24512 = state_24480;(statearr_24499_24512[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24480);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24513 = state_24480;
state_24480 = G__24513;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24480){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24500 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24501);
return statearr_24500;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24578){var state_val_24579 = (state_24578[1]);if((state_val_24579 === 1))
{var state_24578__$1 = state_24578;var statearr_24580_24601 = state_24578__$1;(statearr_24580_24601[2] = null);
(statearr_24580_24601[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24579 === 2))
{var state_24578__$1 = state_24578;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24578__$1,4,ch);
} else
{if((state_val_24579 === 3))
{var inst_24576 = (state_24578[2]);var state_24578__$1 = state_24578;return cljs.core.async.impl.ioc_helpers.return_chan(state_24578__$1,inst_24576);
} else
{if((state_val_24579 === 4))
{var inst_24559 = (state_24578[7]);var inst_24559__$1 = (state_24578[2]);var inst_24560 = (inst_24559__$1 == null);var state_24578__$1 = (function (){var statearr_24581 = state_24578;(statearr_24581[7] = inst_24559__$1);
return statearr_24581;
})();if(cljs.core.truth_(inst_24560))
{var statearr_24582_24602 = state_24578__$1;(statearr_24582_24602[1] = 5);
} else
{var statearr_24583_24603 = state_24578__$1;(statearr_24583_24603[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24579 === 5))
{var inst_24562 = cljs.core.async.close_BANG_(tc);var inst_24563 = cljs.core.async.close_BANG_(fc);var state_24578__$1 = (function (){var statearr_24584 = state_24578;(statearr_24584[8] = inst_24562);
return statearr_24584;
})();var statearr_24585_24604 = state_24578__$1;(statearr_24585_24604[2] = inst_24563);
(statearr_24585_24604[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24579 === 6))
{var inst_24559 = (state_24578[7]);var inst_24565 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24559) : p.call(null,inst_24559));var state_24578__$1 = state_24578;if(cljs.core.truth_(inst_24565))
{var statearr_24586_24605 = state_24578__$1;(statearr_24586_24605[1] = 9);
} else
{var statearr_24587_24606 = state_24578__$1;(statearr_24587_24606[1] = 10);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24579 === 7))
{var inst_24574 = (state_24578[2]);var state_24578__$1 = state_24578;var statearr_24588_24607 = state_24578__$1;(statearr_24588_24607[2] = inst_24574);
(statearr_24588_24607[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24579 === 8))
{var inst_24571 = (state_24578[2]);var state_24578__$1 = (function (){var statearr_24589 = state_24578;(statearr_24589[9] = inst_24571);
return statearr_24589;
})();var statearr_24590_24608 = state_24578__$1;(statearr_24590_24608[2] = null);
(statearr_24590_24608[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24579 === 9))
{var state_24578__$1 = state_24578;var statearr_24591_24609 = state_24578__$1;(statearr_24591_24609[2] = tc);
(statearr_24591_24609[1] = 11);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24579 === 10))
{var state_24578__$1 = state_24578;var statearr_24592_24610 = state_24578__$1;(statearr_24592_24610[2] = fc);
(statearr_24592_24610[1] = 11);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24579 === 11))
{var inst_24559 = (state_24578[7]);var inst_24569 = (state_24578[2]);var state_24578__$1 = state_24578;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24578__$1,8,inst_24569,inst_24559);
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
var state_machine__5507__auto____0 = (function (){var statearr_24596 = [null,null,null,null,null,null,null,null,null,null];(statearr_24596[0] = state_machine__5507__auto__);
(statearr_24596[1] = 1);
return statearr_24596;
});
var state_machine__5507__auto____1 = (function (state_24578){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24578);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24597){if((e24597 instanceof Object))
{var ex__5510__auto__ = e24597;var statearr_24598_24611 = state_24578;(statearr_24598_24611[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24578);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24612 = state_24578;
state_24578 = G__24612;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24578){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24599 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24600);
return statearr_24599;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24659){var state_val_24660 = (state_24659[1]);if((state_val_24660 === 7))
{var inst_24655 = (state_24659[2]);var state_24659__$1 = state_24659;var statearr_24661_24677 = state_24659__$1;(statearr_24661_24677[2] = inst_24655);
(statearr_24661_24677[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24660 === 6))
{var inst_24645 = (state_24659[7]);var inst_24648 = (state_24659[8]);var inst_24652 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24645,inst_24648) : f.call(null,inst_24645,inst_24648));var inst_24645__$1 = inst_24652;var state_24659__$1 = (function (){var statearr_24662 = state_24659;(statearr_24662[7] = inst_24645__$1);
return statearr_24662;
})();var statearr_24663_24678 = state_24659__$1;(statearr_24663_24678[2] = null);
(statearr_24663_24678[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24660 === 5))
{var inst_24645 = (state_24659[7]);var state_24659__$1 = state_24659;var statearr_24664_24679 = state_24659__$1;(statearr_24664_24679[2] = inst_24645);
(statearr_24664_24679[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24660 === 4))
{var inst_24648 = (state_24659[8]);var inst_24648__$1 = (state_24659[2]);var inst_24649 = (inst_24648__$1 == null);var state_24659__$1 = (function (){var statearr_24665 = state_24659;(statearr_24665[8] = inst_24648__$1);
return statearr_24665;
})();if(cljs.core.truth_(inst_24649))
{var statearr_24666_24680 = state_24659__$1;(statearr_24666_24680[1] = 5);
} else
{var statearr_24667_24681 = state_24659__$1;(statearr_24667_24681[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24660 === 3))
{var inst_24657 = (state_24659[2]);var state_24659__$1 = state_24659;return cljs.core.async.impl.ioc_helpers.return_chan(state_24659__$1,inst_24657);
} else
{if((state_val_24660 === 2))
{var state_24659__$1 = state_24659;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24659__$1,4,ch);
} else
{if((state_val_24660 === 1))
{var inst_24645 = init;var state_24659__$1 = (function (){var statearr_24668 = state_24659;(statearr_24668[7] = inst_24645);
return statearr_24668;
})();var statearr_24669_24682 = state_24659__$1;(statearr_24669_24682[2] = null);
(statearr_24669_24682[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_24673 = [null,null,null,null,null,null,null,null,null];(statearr_24673[0] = state_machine__5507__auto__);
(statearr_24673[1] = 1);
return statearr_24673;
});
var state_machine__5507__auto____1 = (function (state_24659){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24659);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24674){if((e24674 instanceof Object))
{var ex__5510__auto__ = e24674;var statearr_24675_24683 = state_24659;(statearr_24675_24683[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24659);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24684 = state_24659;
state_24659 = G__24684;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24659){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24676 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24676;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24746){var state_val_24747 = (state_24746[1]);if((state_val_24747 === 1))
{var inst_24726 = cljs.core.seq(coll);var inst_24727 = inst_24726;var state_24746__$1 = (function (){var statearr_24748 = state_24746;(statearr_24748[7] = inst_24727);
return statearr_24748;
})();var statearr_24749_24767 = state_24746__$1;(statearr_24749_24767[2] = null);
(statearr_24749_24767[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24747 === 2))
{var inst_24727 = (state_24746[7]);var state_24746__$1 = state_24746;if(cljs.core.truth_(inst_24727))
{var statearr_24750_24768 = state_24746__$1;(statearr_24750_24768[1] = 4);
} else
{var statearr_24751_24769 = state_24746__$1;(statearr_24751_24769[1] = 5);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24747 === 3))
{var inst_24744 = (state_24746[2]);var state_24746__$1 = state_24746;return cljs.core.async.impl.ioc_helpers.return_chan(state_24746__$1,inst_24744);
} else
{if((state_val_24747 === 4))
{var inst_24727 = (state_24746[7]);var inst_24730 = cljs.core.first(inst_24727);var state_24746__$1 = state_24746;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24746__$1,7,ch,inst_24730);
} else
{if((state_val_24747 === 5))
{var state_24746__$1 = state_24746;if(cljs.core.truth_(close_QMARK_))
{var statearr_24752_24770 = state_24746__$1;(statearr_24752_24770[1] = 8);
} else
{var statearr_24753_24771 = state_24746__$1;(statearr_24753_24771[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_24747 === 6))
{var inst_24742 = (state_24746[2]);var state_24746__$1 = state_24746;var statearr_24754_24772 = state_24746__$1;(statearr_24754_24772[2] = inst_24742);
(statearr_24754_24772[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24747 === 7))
{var inst_24727 = (state_24746[7]);var inst_24732 = (state_24746[2]);var inst_24733 = cljs.core.next(inst_24727);var inst_24727__$1 = inst_24733;var state_24746__$1 = (function (){var statearr_24755 = state_24746;(statearr_24755[8] = inst_24732);
(statearr_24755[7] = inst_24727__$1);
return statearr_24755;
})();var statearr_24756_24773 = state_24746__$1;(statearr_24756_24773[2] = null);
(statearr_24756_24773[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24747 === 8))
{var inst_24737 = cljs.core.async.close_BANG_(ch);var state_24746__$1 = state_24746;var statearr_24757_24774 = state_24746__$1;(statearr_24757_24774[2] = inst_24737);
(statearr_24757_24774[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24747 === 9))
{var state_24746__$1 = state_24746;var statearr_24758_24775 = state_24746__$1;(statearr_24758_24775[2] = null);
(statearr_24758_24775[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_24747 === 10))
{var inst_24740 = (state_24746[2]);var state_24746__$1 = state_24746;var statearr_24759_24776 = state_24746__$1;(statearr_24759_24776[2] = inst_24740);
(statearr_24759_24776[1] = 6);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_24763 = [null,null,null,null,null,null,null,null,null];(statearr_24763[0] = state_machine__5507__auto__);
(statearr_24763[1] = 1);
return statearr_24763;
});
var state_machine__5507__auto____1 = (function (state_24746){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24746);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24764){if((e24764 instanceof Object))
{var ex__5510__auto__ = e24764;var statearr_24765_24777 = state_24746;(statearr_24765_24777[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24746);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e24764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__24778 = state_24746;
state_24746 = G__24778;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24746){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24766 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24766;
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
cljs.core.async.Mux = (function (){var obj24780 = {};return obj24780;
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
cljs.core.async.Mult = (function (){var obj24782 = {};return obj24782;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25006 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25006 = (function (cs,ch,mult,meta25007){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25007 = meta25007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25006.cljs$lang$type = true;
cljs.core.async.t25006.cljs$lang$ctorStr = "cljs.core.async/t25006";
cljs.core.async.t25006.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25006");
});})(cs))
;
cljs.core.async.t25006.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25006.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25006.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25006.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25006.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25008){var self__ = this;
var _25008__$1 = this;return self__.meta25007;
});})(cs))
;
cljs.core.async.t25006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25008,meta25007__$1){var self__ = this;
var _25008__$1 = this;return (new cljs.core.async.t25006(self__.cs,self__.ch,self__.mult,meta25007__$1));
});})(cs))
;
cljs.core.async.__GT_t25006 = ((function (cs){
return (function __GT_t25006(cs__$1,ch__$1,mult__$1,meta25007){return (new cljs.core.async.t25006(cs__$1,ch__$1,mult__$1,meta25007));
});})(cs))
;
}
return (new cljs.core.async.t25006(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25143){var state_val_25144 = (state_25143[1]);if((state_val_25144 === 32))
{var inst_25011 = (state_25143[7]);var inst_25087 = (state_25143[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25143,31,Object,null,30);var inst_25094 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25087,inst_25011,done);var state_25143__$1 = state_25143;var statearr_25145_25230 = state_25143__$1;(statearr_25145_25230[2] = inst_25094);
cljs.core.async.impl.ioc_helpers.process_exception(state_25143__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 1))
{var state_25143__$1 = state_25143;var statearr_25146_25231 = state_25143__$1;(statearr_25146_25231[2] = null);
(statearr_25146_25231[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 33))
{var inst_25100 = (state_25143[9]);var inst_25102 = cljs.core.chunked_seq_QMARK_(inst_25100);var state_25143__$1 = state_25143;if(inst_25102)
{var statearr_25147_25232 = state_25143__$1;(statearr_25147_25232[1] = 36);
} else
{var statearr_25148_25233 = state_25143__$1;(statearr_25148_25233[1] = 37);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 2))
{var state_25143__$1 = state_25143;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25143__$1,4,ch);
} else
{if((state_val_25144 === 34))
{var state_25143__$1 = state_25143;var statearr_25149_25234 = state_25143__$1;(statearr_25149_25234[2] = null);
(statearr_25149_25234[1] = 35);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 3))
{var inst_25141 = (state_25143[2]);var state_25143__$1 = state_25143;return cljs.core.async.impl.ioc_helpers.return_chan(state_25143__$1,inst_25141);
} else
{if((state_val_25144 === 35))
{var inst_25125 = (state_25143[2]);var state_25143__$1 = state_25143;var statearr_25150_25235 = state_25143__$1;(statearr_25150_25235[2] = inst_25125);
(statearr_25150_25235[1] = 29);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 4))
{var inst_25011 = (state_25143[7]);var inst_25011__$1 = (state_25143[2]);var inst_25012 = (inst_25011__$1 == null);var state_25143__$1 = (function (){var statearr_25151 = state_25143;(statearr_25151[7] = inst_25011__$1);
return statearr_25151;
})();if(cljs.core.truth_(inst_25012))
{var statearr_25152_25236 = state_25143__$1;(statearr_25152_25236[1] = 5);
} else
{var statearr_25153_25237 = state_25143__$1;(statearr_25153_25237[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 36))
{var inst_25100 = (state_25143[9]);var inst_25104 = cljs.core.chunk_first(inst_25100);var inst_25105 = cljs.core.chunk_rest(inst_25100);var inst_25106 = cljs.core.count(inst_25104);var inst_25079 = inst_25105;var inst_25080 = inst_25104;var inst_25081 = inst_25106;var inst_25082 = 0;var state_25143__$1 = (function (){var statearr_25154 = state_25143;(statearr_25154[10] = inst_25080);
(statearr_25154[11] = inst_25081);
(statearr_25154[12] = inst_25082);
(statearr_25154[13] = inst_25079);
return statearr_25154;
})();var statearr_25155_25238 = state_25143__$1;(statearr_25155_25238[2] = null);
(statearr_25155_25238[1] = 25);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 5))
{var inst_25018 = cljs.core.deref(cs);var inst_25019 = cljs.core.seq(inst_25018);var inst_25020 = inst_25019;var inst_25021 = null;var inst_25022 = 0;var inst_25023 = 0;var state_25143__$1 = (function (){var statearr_25156 = state_25143;(statearr_25156[14] = inst_25022);
(statearr_25156[15] = inst_25023);
(statearr_25156[16] = inst_25021);
(statearr_25156[17] = inst_25020);
return statearr_25156;
})();var statearr_25157_25239 = state_25143__$1;(statearr_25157_25239[2] = null);
(statearr_25157_25239[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 37))
{var inst_25100 = (state_25143[9]);var inst_25109 = cljs.core.first(inst_25100);var state_25143__$1 = (function (){var statearr_25158 = state_25143;(statearr_25158[18] = inst_25109);
return statearr_25158;
})();var statearr_25159_25240 = state_25143__$1;(statearr_25159_25240[2] = null);
(statearr_25159_25240[1] = 41);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 6))
{var inst_25071 = (state_25143[19]);var inst_25070 = cljs.core.deref(cs);var inst_25071__$1 = cljs.core.keys(inst_25070);var inst_25072 = cljs.core.count(inst_25071__$1);var inst_25073 = cljs.core.reset_BANG_(dctr,inst_25072);var inst_25078 = cljs.core.seq(inst_25071__$1);var inst_25079 = inst_25078;var inst_25080 = null;var inst_25081 = 0;var inst_25082 = 0;var state_25143__$1 = (function (){var statearr_25160 = state_25143;(statearr_25160[10] = inst_25080);
(statearr_25160[11] = inst_25081);
(statearr_25160[12] = inst_25082);
(statearr_25160[19] = inst_25071__$1);
(statearr_25160[13] = inst_25079);
(statearr_25160[20] = inst_25073);
return statearr_25160;
})();var statearr_25161_25241 = state_25143__$1;(statearr_25161_25241[2] = null);
(statearr_25161_25241[1] = 25);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 38))
{var inst_25122 = (state_25143[2]);var state_25143__$1 = state_25143;var statearr_25162_25242 = state_25143__$1;(statearr_25162_25242[2] = inst_25122);
(statearr_25162_25242[1] = 35);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 7))
{var inst_25139 = (state_25143[2]);var state_25143__$1 = state_25143;var statearr_25163_25243 = state_25143__$1;(statearr_25163_25243[2] = inst_25139);
(statearr_25163_25243[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 39))
{var inst_25100 = (state_25143[9]);var inst_25118 = (state_25143[2]);var inst_25119 = cljs.core.next(inst_25100);var inst_25079 = inst_25119;var inst_25080 = null;var inst_25081 = 0;var inst_25082 = 0;var state_25143__$1 = (function (){var statearr_25164 = state_25143;(statearr_25164[10] = inst_25080);
(statearr_25164[11] = inst_25081);
(statearr_25164[12] = inst_25082);
(statearr_25164[13] = inst_25079);
(statearr_25164[21] = inst_25118);
return statearr_25164;
})();var statearr_25165_25244 = state_25143__$1;(statearr_25165_25244[2] = null);
(statearr_25165_25244[1] = 25);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 8))
{var inst_25022 = (state_25143[14]);var inst_25023 = (state_25143[15]);var inst_25025 = (inst_25023 < inst_25022);var inst_25026 = inst_25025;var state_25143__$1 = state_25143;if(cljs.core.truth_(inst_25026))
{var statearr_25166_25245 = state_25143__$1;(statearr_25166_25245[1] = 10);
} else
{var statearr_25167_25246 = state_25143__$1;(statearr_25167_25246[1] = 11);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 40))
{var inst_25109 = (state_25143[18]);var inst_25110 = (state_25143[2]);var inst_25111 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25112 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25109);var state_25143__$1 = (function (){var statearr_25168 = state_25143;(statearr_25168[22] = inst_25110);
(statearr_25168[23] = inst_25111);
return statearr_25168;
})();var statearr_25169_25247 = state_25143__$1;(statearr_25169_25247[2] = inst_25112);
cljs.core.async.impl.ioc_helpers.process_exception(state_25143__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 9))
{var inst_25068 = (state_25143[2]);var state_25143__$1 = state_25143;var statearr_25170_25248 = state_25143__$1;(statearr_25170_25248[2] = inst_25068);
(statearr_25170_25248[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 41))
{var inst_25011 = (state_25143[7]);var inst_25109 = (state_25143[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25143,40,Object,null,39);var inst_25116 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25109,inst_25011,done);var state_25143__$1 = state_25143;var statearr_25171_25249 = state_25143__$1;(statearr_25171_25249[2] = inst_25116);
cljs.core.async.impl.ioc_helpers.process_exception(state_25143__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 10))
{var inst_25023 = (state_25143[15]);var inst_25021 = (state_25143[16]);var inst_25029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25021,inst_25023);var inst_25030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25029,0,null);var inst_25031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25029,1,null);var state_25143__$1 = (function (){var statearr_25172 = state_25143;(statearr_25172[24] = inst_25030);
return statearr_25172;
})();if(cljs.core.truth_(inst_25031))
{var statearr_25173_25250 = state_25143__$1;(statearr_25173_25250[1] = 13);
} else
{var statearr_25174_25251 = state_25143__$1;(statearr_25174_25251[1] = 14);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 42))
{var state_25143__$1 = state_25143;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25143__$1,45,dchan);
} else
{if((state_val_25144 === 11))
{var inst_25020 = (state_25143[17]);var inst_25040 = (state_25143[25]);var inst_25040__$1 = cljs.core.seq(inst_25020);var state_25143__$1 = (function (){var statearr_25175 = state_25143;(statearr_25175[25] = inst_25040__$1);
return statearr_25175;
})();if(inst_25040__$1)
{var statearr_25176_25252 = state_25143__$1;(statearr_25176_25252[1] = 16);
} else
{var statearr_25177_25253 = state_25143__$1;(statearr_25177_25253[1] = 17);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 43))
{var state_25143__$1 = state_25143;var statearr_25178_25254 = state_25143__$1;(statearr_25178_25254[2] = null);
(statearr_25178_25254[1] = 44);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 12))
{var inst_25066 = (state_25143[2]);var state_25143__$1 = state_25143;var statearr_25179_25255 = state_25143__$1;(statearr_25179_25255[2] = inst_25066);
(statearr_25179_25255[1] = 9);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 44))
{var inst_25136 = (state_25143[2]);var state_25143__$1 = (function (){var statearr_25180 = state_25143;(statearr_25180[26] = inst_25136);
return statearr_25180;
})();var statearr_25181_25256 = state_25143__$1;(statearr_25181_25256[2] = null);
(statearr_25181_25256[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 13))
{var inst_25030 = (state_25143[24]);var inst_25033 = cljs.core.async.close_BANG_(inst_25030);var state_25143__$1 = state_25143;var statearr_25182_25257 = state_25143__$1;(statearr_25182_25257[2] = inst_25033);
(statearr_25182_25257[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 45))
{var inst_25133 = (state_25143[2]);var state_25143__$1 = state_25143;var statearr_25186_25258 = state_25143__$1;(statearr_25186_25258[2] = inst_25133);
(statearr_25186_25258[1] = 44);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 14))
{var state_25143__$1 = state_25143;var statearr_25187_25259 = state_25143__$1;(statearr_25187_25259[2] = null);
(statearr_25187_25259[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 15))
{var inst_25022 = (state_25143[14]);var inst_25023 = (state_25143[15]);var inst_25021 = (state_25143[16]);var inst_25020 = (state_25143[17]);var inst_25036 = (state_25143[2]);var inst_25037 = (inst_25023 + 1);var tmp25183 = inst_25022;var tmp25184 = inst_25021;var tmp25185 = inst_25020;var inst_25020__$1 = tmp25185;var inst_25021__$1 = tmp25184;var inst_25022__$1 = tmp25183;var inst_25023__$1 = inst_25037;var state_25143__$1 = (function (){var statearr_25188 = state_25143;(statearr_25188[14] = inst_25022__$1);
(statearr_25188[15] = inst_25023__$1);
(statearr_25188[16] = inst_25021__$1);
(statearr_25188[17] = inst_25020__$1);
(statearr_25188[27] = inst_25036);
return statearr_25188;
})();var statearr_25189_25260 = state_25143__$1;(statearr_25189_25260[2] = null);
(statearr_25189_25260[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 16))
{var inst_25040 = (state_25143[25]);var inst_25042 = cljs.core.chunked_seq_QMARK_(inst_25040);var state_25143__$1 = state_25143;if(inst_25042)
{var statearr_25190_25261 = state_25143__$1;(statearr_25190_25261[1] = 19);
} else
{var statearr_25191_25262 = state_25143__$1;(statearr_25191_25262[1] = 20);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 17))
{var state_25143__$1 = state_25143;var statearr_25192_25263 = state_25143__$1;(statearr_25192_25263[2] = null);
(statearr_25192_25263[1] = 18);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 18))
{var inst_25064 = (state_25143[2]);var state_25143__$1 = state_25143;var statearr_25193_25264 = state_25143__$1;(statearr_25193_25264[2] = inst_25064);
(statearr_25193_25264[1] = 12);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 19))
{var inst_25040 = (state_25143[25]);var inst_25044 = cljs.core.chunk_first(inst_25040);var inst_25045 = cljs.core.chunk_rest(inst_25040);var inst_25046 = cljs.core.count(inst_25044);var inst_25020 = inst_25045;var inst_25021 = inst_25044;var inst_25022 = inst_25046;var inst_25023 = 0;var state_25143__$1 = (function (){var statearr_25194 = state_25143;(statearr_25194[14] = inst_25022);
(statearr_25194[15] = inst_25023);
(statearr_25194[16] = inst_25021);
(statearr_25194[17] = inst_25020);
return statearr_25194;
})();var statearr_25195_25265 = state_25143__$1;(statearr_25195_25265[2] = null);
(statearr_25195_25265[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 20))
{var inst_25040 = (state_25143[25]);var inst_25050 = cljs.core.first(inst_25040);var inst_25051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25050,0,null);var inst_25052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25050,1,null);var state_25143__$1 = (function (){var statearr_25196 = state_25143;(statearr_25196[28] = inst_25051);
return statearr_25196;
})();if(cljs.core.truth_(inst_25052))
{var statearr_25197_25266 = state_25143__$1;(statearr_25197_25266[1] = 22);
} else
{var statearr_25198_25267 = state_25143__$1;(statearr_25198_25267[1] = 23);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 21))
{var inst_25061 = (state_25143[2]);var state_25143__$1 = state_25143;var statearr_25199_25268 = state_25143__$1;(statearr_25199_25268[2] = inst_25061);
(statearr_25199_25268[1] = 18);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 22))
{var inst_25051 = (state_25143[28]);var inst_25054 = cljs.core.async.close_BANG_(inst_25051);var state_25143__$1 = state_25143;var statearr_25200_25269 = state_25143__$1;(statearr_25200_25269[2] = inst_25054);
(statearr_25200_25269[1] = 24);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 23))
{var state_25143__$1 = state_25143;var statearr_25201_25270 = state_25143__$1;(statearr_25201_25270[2] = null);
(statearr_25201_25270[1] = 24);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 24))
{var inst_25040 = (state_25143[25]);var inst_25057 = (state_25143[2]);var inst_25058 = cljs.core.next(inst_25040);var inst_25020 = inst_25058;var inst_25021 = null;var inst_25022 = 0;var inst_25023 = 0;var state_25143__$1 = (function (){var statearr_25202 = state_25143;(statearr_25202[29] = inst_25057);
(statearr_25202[14] = inst_25022);
(statearr_25202[15] = inst_25023);
(statearr_25202[16] = inst_25021);
(statearr_25202[17] = inst_25020);
return statearr_25202;
})();var statearr_25203_25271 = state_25143__$1;(statearr_25203_25271[2] = null);
(statearr_25203_25271[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 25))
{var inst_25081 = (state_25143[11]);var inst_25082 = (state_25143[12]);var inst_25084 = (inst_25082 < inst_25081);var inst_25085 = inst_25084;var state_25143__$1 = state_25143;if(cljs.core.truth_(inst_25085))
{var statearr_25204_25272 = state_25143__$1;(statearr_25204_25272[1] = 27);
} else
{var statearr_25205_25273 = state_25143__$1;(statearr_25205_25273[1] = 28);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 26))
{var inst_25071 = (state_25143[19]);var inst_25129 = (state_25143[2]);var inst_25130 = cljs.core.seq(inst_25071);var state_25143__$1 = (function (){var statearr_25206 = state_25143;(statearr_25206[30] = inst_25129);
return statearr_25206;
})();if(inst_25130)
{var statearr_25207_25274 = state_25143__$1;(statearr_25207_25274[1] = 42);
} else
{var statearr_25208_25275 = state_25143__$1;(statearr_25208_25275[1] = 43);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 27))
{var inst_25080 = (state_25143[10]);var inst_25082 = (state_25143[12]);var inst_25087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25080,inst_25082);var state_25143__$1 = (function (){var statearr_25209 = state_25143;(statearr_25209[8] = inst_25087);
return statearr_25209;
})();var statearr_25210_25276 = state_25143__$1;(statearr_25210_25276[2] = null);
(statearr_25210_25276[1] = 32);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 28))
{var inst_25100 = (state_25143[9]);var inst_25079 = (state_25143[13]);var inst_25100__$1 = cljs.core.seq(inst_25079);var state_25143__$1 = (function (){var statearr_25214 = state_25143;(statearr_25214[9] = inst_25100__$1);
return statearr_25214;
})();if(inst_25100__$1)
{var statearr_25215_25277 = state_25143__$1;(statearr_25215_25277[1] = 33);
} else
{var statearr_25216_25278 = state_25143__$1;(statearr_25216_25278[1] = 34);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 29))
{var inst_25127 = (state_25143[2]);var state_25143__$1 = state_25143;var statearr_25217_25279 = state_25143__$1;(statearr_25217_25279[2] = inst_25127);
(statearr_25217_25279[1] = 26);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 30))
{var inst_25080 = (state_25143[10]);var inst_25081 = (state_25143[11]);var inst_25082 = (state_25143[12]);var inst_25079 = (state_25143[13]);var inst_25096 = (state_25143[2]);var inst_25097 = (inst_25082 + 1);var tmp25211 = inst_25080;var tmp25212 = inst_25081;var tmp25213 = inst_25079;var inst_25079__$1 = tmp25213;var inst_25080__$1 = tmp25211;var inst_25081__$1 = tmp25212;var inst_25082__$1 = inst_25097;var state_25143__$1 = (function (){var statearr_25218 = state_25143;(statearr_25218[10] = inst_25080__$1);
(statearr_25218[11] = inst_25081__$1);
(statearr_25218[12] = inst_25082__$1);
(statearr_25218[31] = inst_25096);
(statearr_25218[13] = inst_25079__$1);
return statearr_25218;
})();var statearr_25219_25280 = state_25143__$1;(statearr_25219_25280[2] = null);
(statearr_25219_25280[1] = 25);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25144 === 31))
{var inst_25087 = (state_25143[8]);var inst_25088 = (state_25143[2]);var inst_25089 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25090 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25087);var state_25143__$1 = (function (){var statearr_25220 = state_25143;(statearr_25220[32] = inst_25088);
(statearr_25220[33] = inst_25089);
return statearr_25220;
})();var statearr_25221_25281 = state_25143__$1;(statearr_25221_25281[2] = inst_25090);
cljs.core.async.impl.ioc_helpers.process_exception(state_25143__$1);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_25225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25225[0] = state_machine__5507__auto__);
(statearr_25225[1] = 1);
return statearr_25225;
});
var state_machine__5507__auto____1 = (function (state_25143){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25143);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25226){if((e25226 instanceof Object))
{var ex__5510__auto__ = e25226;var statearr_25227_25282 = state_25143;(statearr_25227_25282[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25143);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e25226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__25283 = state_25143;
state_25143 = G__25283;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25143){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25228 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25229);
return statearr_25228;
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
cljs.core.async.Mix = (function (){var obj25285 = {};return obj25285;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,null,cljs.core.constant$keyword$243,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$244);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$243);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$244,chs);var pauses = pick(cljs.core.constant$keyword$242,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$245,solos,cljs.core.constant$keyword$246,pick(cljs.core.constant$keyword$243,chs),cljs.core.constant$keyword$247,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$242)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25395 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25396){
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
this.meta25396 = meta25396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25395.cljs$lang$type = true;
cljs.core.async.t25395.cljs$lang$ctorStr = "cljs.core.async/t25395";
cljs.core.async.t25395.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25395");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25395.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25395.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25395.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25395.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25395.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25395.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25395.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25397){var self__ = this;
var _25397__$1 = this;return self__.meta25396;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25397,meta25396__$1){var self__ = this;
var _25397__$1 = this;return (new cljs.core.async.t25395(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25396__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25395 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25395(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25396){return (new cljs.core.async.t25395(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25396));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25395(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25462){var state_val_25463 = (state_25462[1]);if((state_val_25463 === 1))
{var inst_25401 = (state_25462[7]);var inst_25401__$1 = calc_state();var inst_25402 = cljs.core.seq_QMARK_(inst_25401__$1);var state_25462__$1 = (function (){var statearr_25464 = state_25462;(statearr_25464[7] = inst_25401__$1);
return statearr_25464;
})();if(inst_25402)
{var statearr_25465_25505 = state_25462__$1;(statearr_25465_25505[1] = 2);
} else
{var statearr_25466_25506 = state_25462__$1;(statearr_25466_25506[1] = 3);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 2))
{var inst_25401 = (state_25462[7]);var inst_25404 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25401);var state_25462__$1 = state_25462;var statearr_25467_25507 = state_25462__$1;(statearr_25467_25507[2] = inst_25404);
(statearr_25467_25507[1] = 4);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 3))
{var inst_25401 = (state_25462[7]);var state_25462__$1 = state_25462;var statearr_25468_25508 = state_25462__$1;(statearr_25468_25508[2] = inst_25401);
(statearr_25468_25508[1] = 4);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 4))
{var inst_25401 = (state_25462[7]);var inst_25407 = (state_25462[2]);var inst_25408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25407,cljs.core.constant$keyword$247);var inst_25409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25407,cljs.core.constant$keyword$246);var inst_25410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25407,cljs.core.constant$keyword$245);var inst_25411 = inst_25401;var state_25462__$1 = (function (){var statearr_25469 = state_25462;(statearr_25469[8] = inst_25410);
(statearr_25469[9] = inst_25411);
(statearr_25469[10] = inst_25409);
(statearr_25469[11] = inst_25408);
return statearr_25469;
})();var statearr_25470_25509 = state_25462__$1;(statearr_25470_25509[2] = null);
(statearr_25470_25509[1] = 5);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 5))
{var inst_25411 = (state_25462[9]);var inst_25414 = cljs.core.seq_QMARK_(inst_25411);var state_25462__$1 = state_25462;if(inst_25414)
{var statearr_25471_25510 = state_25462__$1;(statearr_25471_25510[1] = 7);
} else
{var statearr_25472_25511 = state_25462__$1;(statearr_25472_25511[1] = 8);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 6))
{var inst_25460 = (state_25462[2]);var state_25462__$1 = state_25462;return cljs.core.async.impl.ioc_helpers.return_chan(state_25462__$1,inst_25460);
} else
{if((state_val_25463 === 7))
{var inst_25411 = (state_25462[9]);var inst_25416 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25411);var state_25462__$1 = state_25462;var statearr_25473_25512 = state_25462__$1;(statearr_25473_25512[2] = inst_25416);
(statearr_25473_25512[1] = 9);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 8))
{var inst_25411 = (state_25462[9]);var state_25462__$1 = state_25462;var statearr_25474_25513 = state_25462__$1;(statearr_25474_25513[2] = inst_25411);
(statearr_25474_25513[1] = 9);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 9))
{var inst_25419 = (state_25462[12]);var inst_25419__$1 = (state_25462[2]);var inst_25420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25419__$1,cljs.core.constant$keyword$247);var inst_25421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25419__$1,cljs.core.constant$keyword$246);var inst_25422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25419__$1,cljs.core.constant$keyword$245);var state_25462__$1 = (function (){var statearr_25475 = state_25462;(statearr_25475[13] = inst_25422);
(statearr_25475[14] = inst_25421);
(statearr_25475[12] = inst_25419__$1);
return statearr_25475;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25462__$1,10,inst_25420);
} else
{if((state_val_25463 === 10))
{var inst_25426 = (state_25462[15]);var inst_25427 = (state_25462[16]);var inst_25425 = (state_25462[2]);var inst_25426__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25425,0,null);var inst_25427__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25425,1,null);var inst_25428 = (inst_25426__$1 == null);var inst_25429 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25427__$1,change);var inst_25430 = (inst_25428) || (inst_25429);var state_25462__$1 = (function (){var statearr_25476 = state_25462;(statearr_25476[15] = inst_25426__$1);
(statearr_25476[16] = inst_25427__$1);
return statearr_25476;
})();if(cljs.core.truth_(inst_25430))
{var statearr_25477_25514 = state_25462__$1;(statearr_25477_25514[1] = 11);
} else
{var statearr_25478_25515 = state_25462__$1;(statearr_25478_25515[1] = 12);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 11))
{var inst_25426 = (state_25462[15]);var inst_25432 = (inst_25426 == null);var state_25462__$1 = state_25462;if(cljs.core.truth_(inst_25432))
{var statearr_25479_25516 = state_25462__$1;(statearr_25479_25516[1] = 14);
} else
{var statearr_25480_25517 = state_25462__$1;(statearr_25480_25517[1] = 15);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 12))
{var inst_25422 = (state_25462[13]);var inst_25441 = (state_25462[17]);var inst_25427 = (state_25462[16]);var inst_25441__$1 = (inst_25422.cljs$core$IFn$_invoke$arity$1 ? inst_25422.cljs$core$IFn$_invoke$arity$1(inst_25427) : inst_25422.call(null,inst_25427));var state_25462__$1 = (function (){var statearr_25481 = state_25462;(statearr_25481[17] = inst_25441__$1);
return statearr_25481;
})();if(cljs.core.truth_(inst_25441__$1))
{var statearr_25482_25518 = state_25462__$1;(statearr_25482_25518[1] = 17);
} else
{var statearr_25483_25519 = state_25462__$1;(statearr_25483_25519[1] = 18);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 13))
{var inst_25458 = (state_25462[2]);var state_25462__$1 = state_25462;var statearr_25484_25520 = state_25462__$1;(statearr_25484_25520[2] = inst_25458);
(statearr_25484_25520[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 14))
{var inst_25427 = (state_25462[16]);var inst_25434 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25427);var state_25462__$1 = state_25462;var statearr_25485_25521 = state_25462__$1;(statearr_25485_25521[2] = inst_25434);
(statearr_25485_25521[1] = 16);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 15))
{var state_25462__$1 = state_25462;var statearr_25486_25522 = state_25462__$1;(statearr_25486_25522[2] = null);
(statearr_25486_25522[1] = 16);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 16))
{var inst_25437 = (state_25462[2]);var inst_25438 = calc_state();var inst_25411 = inst_25438;var state_25462__$1 = (function (){var statearr_25487 = state_25462;(statearr_25487[9] = inst_25411);
(statearr_25487[18] = inst_25437);
return statearr_25487;
})();var statearr_25488_25523 = state_25462__$1;(statearr_25488_25523[2] = null);
(statearr_25488_25523[1] = 5);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 17))
{var inst_25441 = (state_25462[17]);var state_25462__$1 = state_25462;var statearr_25489_25524 = state_25462__$1;(statearr_25489_25524[2] = inst_25441);
(statearr_25489_25524[1] = 19);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 18))
{var inst_25422 = (state_25462[13]);var inst_25421 = (state_25462[14]);var inst_25427 = (state_25462[16]);var inst_25444 = cljs.core.empty_QMARK_(inst_25422);var inst_25445 = (inst_25421.cljs$core$IFn$_invoke$arity$1 ? inst_25421.cljs$core$IFn$_invoke$arity$1(inst_25427) : inst_25421.call(null,inst_25427));var inst_25446 = cljs.core.not(inst_25445);var inst_25447 = (inst_25444) && (inst_25446);var state_25462__$1 = state_25462;var statearr_25490_25525 = state_25462__$1;(statearr_25490_25525[2] = inst_25447);
(statearr_25490_25525[1] = 19);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 19))
{var inst_25449 = (state_25462[2]);var state_25462__$1 = state_25462;if(cljs.core.truth_(inst_25449))
{var statearr_25491_25526 = state_25462__$1;(statearr_25491_25526[1] = 20);
} else
{var statearr_25492_25527 = state_25462__$1;(statearr_25492_25527[1] = 21);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 20))
{var inst_25426 = (state_25462[15]);var state_25462__$1 = state_25462;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25462__$1,23,out,inst_25426);
} else
{if((state_val_25463 === 21))
{var state_25462__$1 = state_25462;var statearr_25493_25528 = state_25462__$1;(statearr_25493_25528[2] = null);
(statearr_25493_25528[1] = 22);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 22))
{var inst_25419 = (state_25462[12]);var inst_25455 = (state_25462[2]);var inst_25411 = inst_25419;var state_25462__$1 = (function (){var statearr_25494 = state_25462;(statearr_25494[9] = inst_25411);
(statearr_25494[19] = inst_25455);
return statearr_25494;
})();var statearr_25495_25529 = state_25462__$1;(statearr_25495_25529[2] = null);
(statearr_25495_25529[1] = 5);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25463 === 23))
{var inst_25452 = (state_25462[2]);var state_25462__$1 = state_25462;var statearr_25496_25530 = state_25462__$1;(statearr_25496_25530[2] = inst_25452);
(statearr_25496_25530[1] = 22);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_25500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25500[0] = state_machine__5507__auto__);
(statearr_25500[1] = 1);
return statearr_25500;
});
var state_machine__5507__auto____1 = (function (state_25462){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25462);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25501){if((e25501 instanceof Object))
{var ex__5510__auto__ = e25501;var statearr_25502_25531 = state_25462;(statearr_25502_25531[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25462);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e25501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__25532 = state_25462;
state_25462 = G__25532;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25462){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25503 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25504);
return statearr_25503;
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
cljs.core.async.Pub = (function (){var obj25534 = {};return obj25534;
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
return (function (p1__25535_SHARP_){if(cljs.core.truth_((p1__25535_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25535_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25535_SHARP_.call(null,topic))))
{return p1__25535_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25535_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25660 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25660 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25661){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25661 = meta25661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25660.cljs$lang$type = true;
cljs.core.async.t25660.cljs$lang$ctorStr = "cljs.core.async/t25660";
cljs.core.async.t25660.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25660");
});})(mults,ensure_mult))
;
cljs.core.async.t25660.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25660.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25660.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25660.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25660.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25660.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25660.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25662){var self__ = this;
var _25662__$1 = this;return self__.meta25661;
});})(mults,ensure_mult))
;
cljs.core.async.t25660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25662,meta25661__$1){var self__ = this;
var _25662__$1 = this;return (new cljs.core.async.t25660(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25661__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25660 = ((function (mults,ensure_mult){
return (function __GT_t25660(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25661){return (new cljs.core.async.t25660(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25661));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25660(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25736){var state_val_25737 = (state_25736[1]);if((state_val_25737 === 1))
{var state_25736__$1 = state_25736;var statearr_25738_25785 = state_25736__$1;(statearr_25738_25785[2] = null);
(statearr_25738_25785[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 2))
{var state_25736__$1 = state_25736;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25736__$1,4,ch);
} else
{if((state_val_25737 === 3))
{var inst_25734 = (state_25736[2]);var state_25736__$1 = state_25736;return cljs.core.async.impl.ioc_helpers.return_chan(state_25736__$1,inst_25734);
} else
{if((state_val_25737 === 4))
{var inst_25665 = (state_25736[7]);var inst_25665__$1 = (state_25736[2]);var inst_25666 = (inst_25665__$1 == null);var state_25736__$1 = (function (){var statearr_25739 = state_25736;(statearr_25739[7] = inst_25665__$1);
return statearr_25739;
})();if(cljs.core.truth_(inst_25666))
{var statearr_25740_25786 = state_25736__$1;(statearr_25740_25786[1] = 5);
} else
{var statearr_25741_25787 = state_25736__$1;(statearr_25741_25787[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 5))
{var inst_25672 = cljs.core.deref(mults);var inst_25673 = cljs.core.vals(inst_25672);var inst_25674 = cljs.core.seq(inst_25673);var inst_25675 = inst_25674;var inst_25676 = null;var inst_25677 = 0;var inst_25678 = 0;var state_25736__$1 = (function (){var statearr_25742 = state_25736;(statearr_25742[8] = inst_25678);
(statearr_25742[9] = inst_25677);
(statearr_25742[10] = inst_25676);
(statearr_25742[11] = inst_25675);
return statearr_25742;
})();var statearr_25743_25788 = state_25736__$1;(statearr_25743_25788[2] = null);
(statearr_25743_25788[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 6))
{var inst_25665 = (state_25736[7]);var inst_25713 = (state_25736[12]);var inst_25715 = (state_25736[13]);var inst_25713__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25665) : topic_fn.call(null,inst_25665));var inst_25714 = cljs.core.deref(mults);var inst_25715__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25714,inst_25713__$1);var state_25736__$1 = (function (){var statearr_25744 = state_25736;(statearr_25744[12] = inst_25713__$1);
(statearr_25744[13] = inst_25715__$1);
return statearr_25744;
})();if(cljs.core.truth_(inst_25715__$1))
{var statearr_25745_25789 = state_25736__$1;(statearr_25745_25789[1] = 19);
} else
{var statearr_25746_25790 = state_25736__$1;(statearr_25746_25790[1] = 20);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 7))
{var inst_25732 = (state_25736[2]);var state_25736__$1 = state_25736;var statearr_25747_25791 = state_25736__$1;(statearr_25747_25791[2] = inst_25732);
(statearr_25747_25791[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 8))
{var inst_25678 = (state_25736[8]);var inst_25677 = (state_25736[9]);var inst_25680 = (inst_25678 < inst_25677);var inst_25681 = inst_25680;var state_25736__$1 = state_25736;if(cljs.core.truth_(inst_25681))
{var statearr_25751_25792 = state_25736__$1;(statearr_25751_25792[1] = 10);
} else
{var statearr_25752_25793 = state_25736__$1;(statearr_25752_25793[1] = 11);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 9))
{var inst_25711 = (state_25736[2]);var state_25736__$1 = state_25736;var statearr_25753_25794 = state_25736__$1;(statearr_25753_25794[2] = inst_25711);
(statearr_25753_25794[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 10))
{var inst_25678 = (state_25736[8]);var inst_25677 = (state_25736[9]);var inst_25676 = (state_25736[10]);var inst_25675 = (state_25736[11]);var inst_25683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25676,inst_25678);var inst_25684 = cljs.core.async.muxch_STAR_(inst_25683);var inst_25685 = cljs.core.async.close_BANG_(inst_25684);var inst_25686 = (inst_25678 + 1);var tmp25748 = inst_25677;var tmp25749 = inst_25676;var tmp25750 = inst_25675;var inst_25675__$1 = tmp25750;var inst_25676__$1 = tmp25749;var inst_25677__$1 = tmp25748;var inst_25678__$1 = inst_25686;var state_25736__$1 = (function (){var statearr_25754 = state_25736;(statearr_25754[14] = inst_25685);
(statearr_25754[8] = inst_25678__$1);
(statearr_25754[9] = inst_25677__$1);
(statearr_25754[10] = inst_25676__$1);
(statearr_25754[11] = inst_25675__$1);
return statearr_25754;
})();var statearr_25755_25795 = state_25736__$1;(statearr_25755_25795[2] = null);
(statearr_25755_25795[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 11))
{var inst_25689 = (state_25736[15]);var inst_25675 = (state_25736[11]);var inst_25689__$1 = cljs.core.seq(inst_25675);var state_25736__$1 = (function (){var statearr_25756 = state_25736;(statearr_25756[15] = inst_25689__$1);
return statearr_25756;
})();if(inst_25689__$1)
{var statearr_25757_25796 = state_25736__$1;(statearr_25757_25796[1] = 13);
} else
{var statearr_25758_25797 = state_25736__$1;(statearr_25758_25797[1] = 14);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 12))
{var inst_25709 = (state_25736[2]);var state_25736__$1 = state_25736;var statearr_25759_25798 = state_25736__$1;(statearr_25759_25798[2] = inst_25709);
(statearr_25759_25798[1] = 9);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 13))
{var inst_25689 = (state_25736[15]);var inst_25691 = cljs.core.chunked_seq_QMARK_(inst_25689);var state_25736__$1 = state_25736;if(inst_25691)
{var statearr_25760_25799 = state_25736__$1;(statearr_25760_25799[1] = 16);
} else
{var statearr_25761_25800 = state_25736__$1;(statearr_25761_25800[1] = 17);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 14))
{var state_25736__$1 = state_25736;var statearr_25762_25801 = state_25736__$1;(statearr_25762_25801[2] = null);
(statearr_25762_25801[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 15))
{var inst_25707 = (state_25736[2]);var state_25736__$1 = state_25736;var statearr_25763_25802 = state_25736__$1;(statearr_25763_25802[2] = inst_25707);
(statearr_25763_25802[1] = 12);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 16))
{var inst_25689 = (state_25736[15]);var inst_25693 = cljs.core.chunk_first(inst_25689);var inst_25694 = cljs.core.chunk_rest(inst_25689);var inst_25695 = cljs.core.count(inst_25693);var inst_25675 = inst_25694;var inst_25676 = inst_25693;var inst_25677 = inst_25695;var inst_25678 = 0;var state_25736__$1 = (function (){var statearr_25764 = state_25736;(statearr_25764[8] = inst_25678);
(statearr_25764[9] = inst_25677);
(statearr_25764[10] = inst_25676);
(statearr_25764[11] = inst_25675);
return statearr_25764;
})();var statearr_25765_25803 = state_25736__$1;(statearr_25765_25803[2] = null);
(statearr_25765_25803[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 17))
{var inst_25689 = (state_25736[15]);var inst_25698 = cljs.core.first(inst_25689);var inst_25699 = cljs.core.async.muxch_STAR_(inst_25698);var inst_25700 = cljs.core.async.close_BANG_(inst_25699);var inst_25701 = cljs.core.next(inst_25689);var inst_25675 = inst_25701;var inst_25676 = null;var inst_25677 = 0;var inst_25678 = 0;var state_25736__$1 = (function (){var statearr_25766 = state_25736;(statearr_25766[16] = inst_25700);
(statearr_25766[8] = inst_25678);
(statearr_25766[9] = inst_25677);
(statearr_25766[10] = inst_25676);
(statearr_25766[11] = inst_25675);
return statearr_25766;
})();var statearr_25767_25804 = state_25736__$1;(statearr_25767_25804[2] = null);
(statearr_25767_25804[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 18))
{var inst_25704 = (state_25736[2]);var state_25736__$1 = state_25736;var statearr_25768_25805 = state_25736__$1;(statearr_25768_25805[2] = inst_25704);
(statearr_25768_25805[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 19))
{var state_25736__$1 = state_25736;var statearr_25769_25806 = state_25736__$1;(statearr_25769_25806[2] = null);
(statearr_25769_25806[1] = 24);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 20))
{var state_25736__$1 = state_25736;var statearr_25770_25807 = state_25736__$1;(statearr_25770_25807[2] = null);
(statearr_25770_25807[1] = 21);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 21))
{var inst_25729 = (state_25736[2]);var state_25736__$1 = (function (){var statearr_25771 = state_25736;(statearr_25771[17] = inst_25729);
return statearr_25771;
})();var statearr_25772_25808 = state_25736__$1;(statearr_25772_25808[2] = null);
(statearr_25772_25808[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 22))
{var inst_25726 = (state_25736[2]);var state_25736__$1 = state_25736;var statearr_25773_25809 = state_25736__$1;(statearr_25773_25809[2] = inst_25726);
(statearr_25773_25809[1] = 21);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 23))
{var inst_25713 = (state_25736[12]);var inst_25717 = (state_25736[2]);var inst_25718 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25713);var state_25736__$1 = (function (){var statearr_25774 = state_25736;(statearr_25774[18] = inst_25717);
return statearr_25774;
})();var statearr_25775_25810 = state_25736__$1;(statearr_25775_25810[2] = inst_25718);
cljs.core.async.impl.ioc_helpers.process_exception(state_25736__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25737 === 24))
{var inst_25665 = (state_25736[7]);var inst_25715 = (state_25736[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25736,23,Object,null,22);var inst_25722 = cljs.core.async.muxch_STAR_(inst_25715);var state_25736__$1 = state_25736;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25736__$1,25,inst_25722,inst_25665);
} else
{if((state_val_25737 === 25))
{var inst_25724 = (state_25736[2]);var state_25736__$1 = state_25736;var statearr_25776_25811 = state_25736__$1;(statearr_25776_25811[2] = inst_25724);
cljs.core.async.impl.ioc_helpers.process_exception(state_25736__$1);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_25780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25780[0] = state_machine__5507__auto__);
(statearr_25780[1] = 1);
return statearr_25780;
});
var state_machine__5507__auto____1 = (function (state_25736){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25736);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25781){if((e25781 instanceof Object))
{var ex__5510__auto__ = e25781;var statearr_25782_25812 = state_25736;(statearr_25782_25812[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25736);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e25781;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__25813 = state_25736;
state_25736 = G__25813;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25736){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25783 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25784);
return statearr_25783;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25920){var state_val_25921 = (state_25920[1]);if((state_val_25921 === 1))
{var state_25920__$1 = state_25920;var statearr_25922_25951 = state_25920__$1;(statearr_25922_25951[2] = null);
(statearr_25922_25951[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 2))
{var inst_25883 = cljs.core.reset_BANG_(dctr,cnt);var inst_25884 = 0;var state_25920__$1 = (function (){var statearr_25923 = state_25920;(statearr_25923[7] = inst_25884);
(statearr_25923[8] = inst_25883);
return statearr_25923;
})();var statearr_25924_25952 = state_25920__$1;(statearr_25924_25952[2] = null);
(statearr_25924_25952[1] = 4);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 3))
{var inst_25918 = (state_25920[2]);var state_25920__$1 = state_25920;return cljs.core.async.impl.ioc_helpers.return_chan(state_25920__$1,inst_25918);
} else
{if((state_val_25921 === 4))
{var inst_25884 = (state_25920[7]);var inst_25886 = (inst_25884 < cnt);var state_25920__$1 = state_25920;if(cljs.core.truth_(inst_25886))
{var statearr_25925_25953 = state_25920__$1;(statearr_25925_25953[1] = 6);
} else
{var statearr_25926_25954 = state_25920__$1;(statearr_25926_25954[1] = 7);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 5))
{var inst_25904 = (state_25920[2]);var state_25920__$1 = (function (){var statearr_25927 = state_25920;(statearr_25927[9] = inst_25904);
return statearr_25927;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25920__$1,12,dchan);
} else
{if((state_val_25921 === 6))
{var state_25920__$1 = state_25920;var statearr_25928_25955 = state_25920__$1;(statearr_25928_25955[2] = null);
(statearr_25928_25955[1] = 11);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 7))
{var state_25920__$1 = state_25920;var statearr_25929_25956 = state_25920__$1;(statearr_25929_25956[2] = null);
(statearr_25929_25956[1] = 8);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 8))
{var inst_25902 = (state_25920[2]);var state_25920__$1 = state_25920;var statearr_25930_25957 = state_25920__$1;(statearr_25930_25957[2] = inst_25902);
(statearr_25930_25957[1] = 5);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 9))
{var inst_25884 = (state_25920[7]);var inst_25897 = (state_25920[2]);var inst_25898 = (inst_25884 + 1);var inst_25884__$1 = inst_25898;var state_25920__$1 = (function (){var statearr_25931 = state_25920;(statearr_25931[10] = inst_25897);
(statearr_25931[7] = inst_25884__$1);
return statearr_25931;
})();var statearr_25932_25958 = state_25920__$1;(statearr_25932_25958[2] = null);
(statearr_25932_25958[1] = 4);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 10))
{var inst_25888 = (state_25920[2]);var inst_25889 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25920__$1 = (function (){var statearr_25933 = state_25920;(statearr_25933[11] = inst_25888);
return statearr_25933;
})();var statearr_25934_25959 = state_25920__$1;(statearr_25934_25959[2] = inst_25889);
cljs.core.async.impl.ioc_helpers.process_exception(state_25920__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 11))
{var inst_25884 = (state_25920[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25920,10,Object,null,9);var inst_25893 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25884) : chs__$1.call(null,inst_25884));var inst_25894 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25884) : done.call(null,inst_25884));var inst_25895 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25893,inst_25894);var state_25920__$1 = state_25920;var statearr_25935_25960 = state_25920__$1;(statearr_25935_25960[2] = inst_25895);
cljs.core.async.impl.ioc_helpers.process_exception(state_25920__$1);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 12))
{var inst_25906 = (state_25920[12]);var inst_25906__$1 = (state_25920[2]);var inst_25907 = cljs.core.some(cljs.core.nil_QMARK_,inst_25906__$1);var state_25920__$1 = (function (){var statearr_25936 = state_25920;(statearr_25936[12] = inst_25906__$1);
return statearr_25936;
})();if(cljs.core.truth_(inst_25907))
{var statearr_25937_25961 = state_25920__$1;(statearr_25937_25961[1] = 13);
} else
{var statearr_25938_25962 = state_25920__$1;(statearr_25938_25962[1] = 14);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 13))
{var inst_25909 = cljs.core.async.close_BANG_(out);var state_25920__$1 = state_25920;var statearr_25939_25963 = state_25920__$1;(statearr_25939_25963[2] = inst_25909);
(statearr_25939_25963[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 14))
{var inst_25906 = (state_25920[12]);var inst_25911 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25906);var state_25920__$1 = state_25920;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25920__$1,16,out,inst_25911);
} else
{if((state_val_25921 === 15))
{var inst_25916 = (state_25920[2]);var state_25920__$1 = state_25920;var statearr_25940_25964 = state_25920__$1;(statearr_25940_25964[2] = inst_25916);
(statearr_25940_25964[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_25921 === 16))
{var inst_25913 = (state_25920[2]);var state_25920__$1 = (function (){var statearr_25941 = state_25920;(statearr_25941[13] = inst_25913);
return statearr_25941;
})();var statearr_25942_25965 = state_25920__$1;(statearr_25942_25965[2] = null);
(statearr_25942_25965[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_25946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25946[0] = state_machine__5507__auto__);
(statearr_25946[1] = 1);
return statearr_25946;
});
var state_machine__5507__auto____1 = (function (state_25920){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25920);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25947){if((e25947 instanceof Object))
{var ex__5510__auto__ = e25947;var statearr_25948_25966 = state_25920;(statearr_25948_25966[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25920);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e25947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__25967 = state_25920;
state_25920 = G__25967;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25920){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25949 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25950);
return statearr_25949;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26051){var state_val_26052 = (state_26051[1]);if((state_val_26052 === 1))
{var inst_26022 = cljs.core.vec(chs);var inst_26023 = inst_26022;var state_26051__$1 = (function (){var statearr_26053 = state_26051;(statearr_26053[7] = inst_26023);
return statearr_26053;
})();var statearr_26054_26076 = state_26051__$1;(statearr_26054_26076[2] = null);
(statearr_26054_26076[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26052 === 2))
{var inst_26023 = (state_26051[7]);var inst_26025 = cljs.core.count(inst_26023);var inst_26026 = (inst_26025 > 0);var state_26051__$1 = state_26051;if(cljs.core.truth_(inst_26026))
{var statearr_26055_26077 = state_26051__$1;(statearr_26055_26077[1] = 4);
} else
{var statearr_26056_26078 = state_26051__$1;(statearr_26056_26078[1] = 5);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26052 === 3))
{var inst_26049 = (state_26051[2]);var state_26051__$1 = state_26051;return cljs.core.async.impl.ioc_helpers.return_chan(state_26051__$1,inst_26049);
} else
{if((state_val_26052 === 4))
{var inst_26023 = (state_26051[7]);var state_26051__$1 = state_26051;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26051__$1,7,inst_26023);
} else
{if((state_val_26052 === 5))
{var inst_26045 = cljs.core.async.close_BANG_(out);var state_26051__$1 = state_26051;var statearr_26057_26079 = state_26051__$1;(statearr_26057_26079[2] = inst_26045);
(statearr_26057_26079[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26052 === 6))
{var inst_26047 = (state_26051[2]);var state_26051__$1 = state_26051;var statearr_26058_26080 = state_26051__$1;(statearr_26058_26080[2] = inst_26047);
(statearr_26058_26080[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26052 === 7))
{var inst_26031 = (state_26051[8]);var inst_26030 = (state_26051[9]);var inst_26030__$1 = (state_26051[2]);var inst_26031__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26030__$1,0,null);var inst_26032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26030__$1,1,null);var inst_26033 = (inst_26031__$1 == null);var state_26051__$1 = (function (){var statearr_26059 = state_26051;(statearr_26059[8] = inst_26031__$1);
(statearr_26059[9] = inst_26030__$1);
(statearr_26059[10] = inst_26032);
return statearr_26059;
})();if(cljs.core.truth_(inst_26033))
{var statearr_26060_26081 = state_26051__$1;(statearr_26060_26081[1] = 8);
} else
{var statearr_26061_26082 = state_26051__$1;(statearr_26061_26082[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26052 === 8))
{var inst_26023 = (state_26051[7]);var inst_26031 = (state_26051[8]);var inst_26030 = (state_26051[9]);var inst_26032 = (state_26051[10]);var inst_26035 = (function (){var c = inst_26032;var v = inst_26031;var vec__26028 = inst_26030;var cs = inst_26023;return ((function (c,v,vec__26028,cs,inst_26023,inst_26031,inst_26030,inst_26032,state_val_26052){
return (function (p1__25968_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25968_SHARP_);
});
;})(c,v,vec__26028,cs,inst_26023,inst_26031,inst_26030,inst_26032,state_val_26052))
})();var inst_26036 = cljs.core.filterv(inst_26035,inst_26023);var inst_26023__$1 = inst_26036;var state_26051__$1 = (function (){var statearr_26062 = state_26051;(statearr_26062[7] = inst_26023__$1);
return statearr_26062;
})();var statearr_26063_26083 = state_26051__$1;(statearr_26063_26083[2] = null);
(statearr_26063_26083[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26052 === 9))
{var inst_26031 = (state_26051[8]);var state_26051__$1 = state_26051;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26051__$1,11,out,inst_26031);
} else
{if((state_val_26052 === 10))
{var inst_26043 = (state_26051[2]);var state_26051__$1 = state_26051;var statearr_26065_26084 = state_26051__$1;(statearr_26065_26084[2] = inst_26043);
(statearr_26065_26084[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26052 === 11))
{var inst_26023 = (state_26051[7]);var inst_26040 = (state_26051[2]);var tmp26064 = inst_26023;var inst_26023__$1 = tmp26064;var state_26051__$1 = (function (){var statearr_26066 = state_26051;(statearr_26066[7] = inst_26023__$1);
(statearr_26066[11] = inst_26040);
return statearr_26066;
})();var statearr_26067_26085 = state_26051__$1;(statearr_26067_26085[2] = null);
(statearr_26067_26085[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_26071 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26071[0] = state_machine__5507__auto__);
(statearr_26071[1] = 1);
return statearr_26071;
});
var state_machine__5507__auto____1 = (function (state_26051){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26051);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26072){if((e26072 instanceof Object))
{var ex__5510__auto__ = e26072;var statearr_26073_26086 = state_26051;(statearr_26073_26086[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26051);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e26072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__26087 = state_26051;
state_26051 = G__26087;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26051){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26074 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26075);
return statearr_26074;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26157){var state_val_26158 = (state_26157[1]);if((state_val_26158 === 1))
{var inst_26134 = 0;var state_26157__$1 = (function (){var statearr_26159 = state_26157;(statearr_26159[7] = inst_26134);
return statearr_26159;
})();var statearr_26160_26181 = state_26157__$1;(statearr_26160_26181[2] = null);
(statearr_26160_26181[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26158 === 2))
{var inst_26134 = (state_26157[7]);var inst_26136 = (inst_26134 < n);var state_26157__$1 = state_26157;if(cljs.core.truth_(inst_26136))
{var statearr_26161_26182 = state_26157__$1;(statearr_26161_26182[1] = 4);
} else
{var statearr_26162_26183 = state_26157__$1;(statearr_26162_26183[1] = 5);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26158 === 3))
{var inst_26154 = (state_26157[2]);var inst_26155 = cljs.core.async.close_BANG_(out);var state_26157__$1 = (function (){var statearr_26163 = state_26157;(statearr_26163[8] = inst_26154);
return statearr_26163;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26157__$1,inst_26155);
} else
{if((state_val_26158 === 4))
{var state_26157__$1 = state_26157;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26157__$1,7,ch);
} else
{if((state_val_26158 === 5))
{var state_26157__$1 = state_26157;var statearr_26164_26184 = state_26157__$1;(statearr_26164_26184[2] = null);
(statearr_26164_26184[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26158 === 6))
{var inst_26152 = (state_26157[2]);var state_26157__$1 = state_26157;var statearr_26165_26185 = state_26157__$1;(statearr_26165_26185[2] = inst_26152);
(statearr_26165_26185[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26158 === 7))
{var inst_26139 = (state_26157[9]);var inst_26139__$1 = (state_26157[2]);var inst_26140 = (inst_26139__$1 == null);var inst_26141 = cljs.core.not(inst_26140);var state_26157__$1 = (function (){var statearr_26166 = state_26157;(statearr_26166[9] = inst_26139__$1);
return statearr_26166;
})();if(inst_26141)
{var statearr_26167_26186 = state_26157__$1;(statearr_26167_26186[1] = 8);
} else
{var statearr_26168_26187 = state_26157__$1;(statearr_26168_26187[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26158 === 8))
{var inst_26139 = (state_26157[9]);var state_26157__$1 = state_26157;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26157__$1,11,out,inst_26139);
} else
{if((state_val_26158 === 9))
{var state_26157__$1 = state_26157;var statearr_26169_26188 = state_26157__$1;(statearr_26169_26188[2] = null);
(statearr_26169_26188[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26158 === 10))
{var inst_26149 = (state_26157[2]);var state_26157__$1 = state_26157;var statearr_26170_26189 = state_26157__$1;(statearr_26170_26189[2] = inst_26149);
(statearr_26170_26189[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26158 === 11))
{var inst_26134 = (state_26157[7]);var inst_26144 = (state_26157[2]);var inst_26145 = (inst_26134 + 1);var inst_26134__$1 = inst_26145;var state_26157__$1 = (function (){var statearr_26171 = state_26157;(statearr_26171[10] = inst_26144);
(statearr_26171[7] = inst_26134__$1);
return statearr_26171;
})();var statearr_26172_26190 = state_26157__$1;(statearr_26172_26190[2] = null);
(statearr_26172_26190[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_26176 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26176[0] = state_machine__5507__auto__);
(statearr_26176[1] = 1);
return statearr_26176;
});
var state_machine__5507__auto____1 = (function (state_26157){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26157);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26177){if((e26177 instanceof Object))
{var ex__5510__auto__ = e26177;var statearr_26178_26191 = state_26157;(statearr_26178_26191[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26157);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e26177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__26192 = state_26157;
state_26157 = G__26192;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26157){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26179 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26180);
return statearr_26179;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26264){var state_val_26265 = (state_26264[1]);if((state_val_26265 === 1))
{var inst_26241 = null;var state_26264__$1 = (function (){var statearr_26266 = state_26264;(statearr_26266[7] = inst_26241);
return statearr_26266;
})();var statearr_26267_26290 = state_26264__$1;(statearr_26267_26290[2] = null);
(statearr_26267_26290[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26265 === 2))
{var state_26264__$1 = state_26264;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26264__$1,4,ch);
} else
{if((state_val_26265 === 3))
{var inst_26261 = (state_26264[2]);var inst_26262 = cljs.core.async.close_BANG_(out);var state_26264__$1 = (function (){var statearr_26268 = state_26264;(statearr_26268[8] = inst_26261);
return statearr_26268;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26264__$1,inst_26262);
} else
{if((state_val_26265 === 4))
{var inst_26244 = (state_26264[9]);var inst_26244__$1 = (state_26264[2]);var inst_26245 = (inst_26244__$1 == null);var inst_26246 = cljs.core.not(inst_26245);var state_26264__$1 = (function (){var statearr_26269 = state_26264;(statearr_26269[9] = inst_26244__$1);
return statearr_26269;
})();if(inst_26246)
{var statearr_26270_26291 = state_26264__$1;(statearr_26270_26291[1] = 5);
} else
{var statearr_26271_26292 = state_26264__$1;(statearr_26271_26292[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26265 === 5))
{var inst_26244 = (state_26264[9]);var inst_26241 = (state_26264[7]);var inst_26248 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26244,inst_26241);var state_26264__$1 = state_26264;if(inst_26248)
{var statearr_26272_26293 = state_26264__$1;(statearr_26272_26293[1] = 8);
} else
{var statearr_26273_26294 = state_26264__$1;(statearr_26273_26294[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26265 === 6))
{var state_26264__$1 = state_26264;var statearr_26275_26295 = state_26264__$1;(statearr_26275_26295[2] = null);
(statearr_26275_26295[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26265 === 7))
{var inst_26259 = (state_26264[2]);var state_26264__$1 = state_26264;var statearr_26276_26296 = state_26264__$1;(statearr_26276_26296[2] = inst_26259);
(statearr_26276_26296[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26265 === 8))
{var inst_26241 = (state_26264[7]);var tmp26274 = inst_26241;var inst_26241__$1 = tmp26274;var state_26264__$1 = (function (){var statearr_26277 = state_26264;(statearr_26277[7] = inst_26241__$1);
return statearr_26277;
})();var statearr_26278_26297 = state_26264__$1;(statearr_26278_26297[2] = null);
(statearr_26278_26297[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26265 === 9))
{var inst_26244 = (state_26264[9]);var state_26264__$1 = state_26264;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26264__$1,11,out,inst_26244);
} else
{if((state_val_26265 === 10))
{var inst_26256 = (state_26264[2]);var state_26264__$1 = state_26264;var statearr_26279_26298 = state_26264__$1;(statearr_26279_26298[2] = inst_26256);
(statearr_26279_26298[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26265 === 11))
{var inst_26244 = (state_26264[9]);var inst_26253 = (state_26264[2]);var inst_26241 = inst_26244;var state_26264__$1 = (function (){var statearr_26280 = state_26264;(statearr_26280[7] = inst_26241);
(statearr_26280[10] = inst_26253);
return statearr_26280;
})();var statearr_26281_26299 = state_26264__$1;(statearr_26281_26299[2] = null);
(statearr_26281_26299[1] = 2);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_26285 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26285[0] = state_machine__5507__auto__);
(statearr_26285[1] = 1);
return statearr_26285;
});
var state_machine__5507__auto____1 = (function (state_26264){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26264);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26286){if((e26286 instanceof Object))
{var ex__5510__auto__ = e26286;var statearr_26287_26300 = state_26264;(statearr_26287_26300[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26264);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e26286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__26301 = state_26264;
state_26264 = G__26301;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26264){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26288 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26289);
return statearr_26288;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26406){var state_val_26407 = (state_26406[1]);if((state_val_26407 === 1))
{var inst_26369 = (new Array(n));var inst_26370 = inst_26369;var inst_26371 = 0;var state_26406__$1 = (function (){var statearr_26408 = state_26406;(statearr_26408[7] = inst_26370);
(statearr_26408[8] = inst_26371);
return statearr_26408;
})();var statearr_26409_26437 = state_26406__$1;(statearr_26409_26437[2] = null);
(statearr_26409_26437[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26407 === 2))
{var state_26406__$1 = state_26406;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26406__$1,4,ch);
} else
{if((state_val_26407 === 3))
{var inst_26404 = (state_26406[2]);var state_26406__$1 = state_26406;return cljs.core.async.impl.ioc_helpers.return_chan(state_26406__$1,inst_26404);
} else
{if((state_val_26407 === 4))
{var inst_26374 = (state_26406[9]);var inst_26374__$1 = (state_26406[2]);var inst_26375 = (inst_26374__$1 == null);var inst_26376 = cljs.core.not(inst_26375);var state_26406__$1 = (function (){var statearr_26410 = state_26406;(statearr_26410[9] = inst_26374__$1);
return statearr_26410;
})();if(inst_26376)
{var statearr_26411_26438 = state_26406__$1;(statearr_26411_26438[1] = 5);
} else
{var statearr_26412_26439 = state_26406__$1;(statearr_26412_26439[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26407 === 5))
{var inst_26370 = (state_26406[7]);var inst_26379 = (state_26406[10]);var inst_26371 = (state_26406[8]);var inst_26374 = (state_26406[9]);var inst_26378 = (inst_26370[inst_26371] = inst_26374);var inst_26379__$1 = (inst_26371 + 1);var inst_26380 = (inst_26379__$1 < n);var state_26406__$1 = (function (){var statearr_26413 = state_26406;(statearr_26413[10] = inst_26379__$1);
(statearr_26413[11] = inst_26378);
return statearr_26413;
})();if(cljs.core.truth_(inst_26380))
{var statearr_26414_26440 = state_26406__$1;(statearr_26414_26440[1] = 8);
} else
{var statearr_26415_26441 = state_26406__$1;(statearr_26415_26441[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26407 === 6))
{var inst_26371 = (state_26406[8]);var inst_26392 = (inst_26371 > 0);var state_26406__$1 = state_26406;if(cljs.core.truth_(inst_26392))
{var statearr_26417_26442 = state_26406__$1;(statearr_26417_26442[1] = 12);
} else
{var statearr_26418_26443 = state_26406__$1;(statearr_26418_26443[1] = 13);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26407 === 7))
{var inst_26402 = (state_26406[2]);var state_26406__$1 = state_26406;var statearr_26419_26444 = state_26406__$1;(statearr_26419_26444[2] = inst_26402);
(statearr_26419_26444[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26407 === 8))
{var inst_26370 = (state_26406[7]);var inst_26379 = (state_26406[10]);var tmp26416 = inst_26370;var inst_26370__$1 = tmp26416;var inst_26371 = inst_26379;var state_26406__$1 = (function (){var statearr_26420 = state_26406;(statearr_26420[7] = inst_26370__$1);
(statearr_26420[8] = inst_26371);
return statearr_26420;
})();var statearr_26421_26445 = state_26406__$1;(statearr_26421_26445[2] = null);
(statearr_26421_26445[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26407 === 9))
{var inst_26370 = (state_26406[7]);var inst_26384 = cljs.core.vec(inst_26370);var state_26406__$1 = state_26406;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26406__$1,11,out,inst_26384);
} else
{if((state_val_26407 === 10))
{var inst_26390 = (state_26406[2]);var state_26406__$1 = state_26406;var statearr_26422_26446 = state_26406__$1;(statearr_26422_26446[2] = inst_26390);
(statearr_26422_26446[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26407 === 11))
{var inst_26386 = (state_26406[2]);var inst_26387 = (new Array(n));var inst_26370 = inst_26387;var inst_26371 = 0;var state_26406__$1 = (function (){var statearr_26423 = state_26406;(statearr_26423[12] = inst_26386);
(statearr_26423[7] = inst_26370);
(statearr_26423[8] = inst_26371);
return statearr_26423;
})();var statearr_26424_26447 = state_26406__$1;(statearr_26424_26447[2] = null);
(statearr_26424_26447[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26407 === 12))
{var inst_26370 = (state_26406[7]);var inst_26394 = cljs.core.vec(inst_26370);var state_26406__$1 = state_26406;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26406__$1,15,out,inst_26394);
} else
{if((state_val_26407 === 13))
{var state_26406__$1 = state_26406;var statearr_26425_26448 = state_26406__$1;(statearr_26425_26448[2] = null);
(statearr_26425_26448[1] = 14);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26407 === 14))
{var inst_26399 = (state_26406[2]);var inst_26400 = cljs.core.async.close_BANG_(out);var state_26406__$1 = (function (){var statearr_26426 = state_26406;(statearr_26426[13] = inst_26399);
return statearr_26426;
})();var statearr_26427_26449 = state_26406__$1;(statearr_26427_26449[2] = inst_26400);
(statearr_26427_26449[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26407 === 15))
{var inst_26396 = (state_26406[2]);var state_26406__$1 = state_26406;var statearr_26428_26450 = state_26406__$1;(statearr_26428_26450[2] = inst_26396);
(statearr_26428_26450[1] = 14);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_26432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26432[0] = state_machine__5507__auto__);
(statearr_26432[1] = 1);
return statearr_26432;
});
var state_machine__5507__auto____1 = (function (state_26406){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26406);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26433){if((e26433 instanceof Object))
{var ex__5510__auto__ = e26433;var statearr_26434_26451 = state_26406;(statearr_26434_26451[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26406);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e26433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__26452 = state_26406;
state_26406 = G__26452;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26406){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26435 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26436);
return statearr_26435;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26565){var state_val_26566 = (state_26565[1]);if((state_val_26566 === 1))
{var inst_26524 = [];var inst_26525 = inst_26524;var inst_26526 = cljs.core.constant$keyword$248;var state_26565__$1 = (function (){var statearr_26567 = state_26565;(statearr_26567[7] = inst_26526);
(statearr_26567[8] = inst_26525);
return statearr_26567;
})();var statearr_26568_26596 = state_26565__$1;(statearr_26568_26596[2] = null);
(statearr_26568_26596[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26566 === 2))
{var state_26565__$1 = state_26565;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26565__$1,4,ch);
} else
{if((state_val_26566 === 3))
{var inst_26563 = (state_26565[2]);var state_26565__$1 = state_26565;return cljs.core.async.impl.ioc_helpers.return_chan(state_26565__$1,inst_26563);
} else
{if((state_val_26566 === 4))
{var inst_26529 = (state_26565[9]);var inst_26529__$1 = (state_26565[2]);var inst_26530 = (inst_26529__$1 == null);var inst_26531 = cljs.core.not(inst_26530);var state_26565__$1 = (function (){var statearr_26569 = state_26565;(statearr_26569[9] = inst_26529__$1);
return statearr_26569;
})();if(inst_26531)
{var statearr_26570_26597 = state_26565__$1;(statearr_26570_26597[1] = 5);
} else
{var statearr_26571_26598 = state_26565__$1;(statearr_26571_26598[1] = 6);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26566 === 5))
{var inst_26526 = (state_26565[7]);var inst_26529 = (state_26565[9]);var inst_26533 = (state_26565[10]);var inst_26533__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26529) : f.call(null,inst_26529));var inst_26534 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26533__$1,inst_26526);var inst_26535 = cljs.core.keyword_identical_QMARK_(inst_26526,cljs.core.constant$keyword$248);var inst_26536 = (inst_26534) || (inst_26535);var state_26565__$1 = (function (){var statearr_26572 = state_26565;(statearr_26572[10] = inst_26533__$1);
return statearr_26572;
})();if(cljs.core.truth_(inst_26536))
{var statearr_26573_26599 = state_26565__$1;(statearr_26573_26599[1] = 8);
} else
{var statearr_26574_26600 = state_26565__$1;(statearr_26574_26600[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26566 === 6))
{var inst_26525 = (state_26565[8]);var inst_26550 = inst_26525.length;var inst_26551 = (inst_26550 > 0);var state_26565__$1 = state_26565;if(cljs.core.truth_(inst_26551))
{var statearr_26576_26601 = state_26565__$1;(statearr_26576_26601[1] = 12);
} else
{var statearr_26577_26602 = state_26565__$1;(statearr_26577_26602[1] = 13);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_26566 === 7))
{var inst_26561 = (state_26565[2]);var state_26565__$1 = state_26565;var statearr_26578_26603 = state_26565__$1;(statearr_26578_26603[2] = inst_26561);
(statearr_26578_26603[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26566 === 8))
{var inst_26529 = (state_26565[9]);var inst_26533 = (state_26565[10]);var inst_26525 = (state_26565[8]);var inst_26538 = inst_26525.push(inst_26529);var tmp26575 = inst_26525;var inst_26525__$1 = tmp26575;var inst_26526 = inst_26533;var state_26565__$1 = (function (){var statearr_26579 = state_26565;(statearr_26579[11] = inst_26538);
(statearr_26579[7] = inst_26526);
(statearr_26579[8] = inst_26525__$1);
return statearr_26579;
})();var statearr_26580_26604 = state_26565__$1;(statearr_26580_26604[2] = null);
(statearr_26580_26604[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26566 === 9))
{var inst_26525 = (state_26565[8]);var inst_26541 = cljs.core.vec(inst_26525);var state_26565__$1 = state_26565;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26565__$1,11,out,inst_26541);
} else
{if((state_val_26566 === 10))
{var inst_26548 = (state_26565[2]);var state_26565__$1 = state_26565;var statearr_26581_26605 = state_26565__$1;(statearr_26581_26605[2] = inst_26548);
(statearr_26581_26605[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26566 === 11))
{var inst_26529 = (state_26565[9]);var inst_26533 = (state_26565[10]);var inst_26543 = (state_26565[2]);var inst_26544 = [];var inst_26545 = inst_26544.push(inst_26529);var inst_26525 = inst_26544;var inst_26526 = inst_26533;var state_26565__$1 = (function (){var statearr_26582 = state_26565;(statearr_26582[12] = inst_26543);
(statearr_26582[13] = inst_26545);
(statearr_26582[7] = inst_26526);
(statearr_26582[8] = inst_26525);
return statearr_26582;
})();var statearr_26583_26606 = state_26565__$1;(statearr_26583_26606[2] = null);
(statearr_26583_26606[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26566 === 12))
{var inst_26525 = (state_26565[8]);var inst_26553 = cljs.core.vec(inst_26525);var state_26565__$1 = state_26565;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26565__$1,15,out,inst_26553);
} else
{if((state_val_26566 === 13))
{var state_26565__$1 = state_26565;var statearr_26584_26607 = state_26565__$1;(statearr_26584_26607[2] = null);
(statearr_26584_26607[1] = 14);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26566 === 14))
{var inst_26558 = (state_26565[2]);var inst_26559 = cljs.core.async.close_BANG_(out);var state_26565__$1 = (function (){var statearr_26585 = state_26565;(statearr_26585[14] = inst_26558);
return statearr_26585;
})();var statearr_26586_26608 = state_26565__$1;(statearr_26586_26608[2] = inst_26559);
(statearr_26586_26608[1] = 7);
return cljs.core.constant$keyword$235;
} else
{if((state_val_26566 === 15))
{var inst_26555 = (state_26565[2]);var state_26565__$1 = state_26565;var statearr_26587_26609 = state_26565__$1;(statearr_26587_26609[2] = inst_26555);
(statearr_26587_26609[1] = 14);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_26591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26591[0] = state_machine__5507__auto__);
(statearr_26591[1] = 1);
return statearr_26591;
});
var state_machine__5507__auto____1 = (function (state_26565){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26565);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26592){if((e26592 instanceof Object))
{var ex__5510__auto__ = e26592;var statearr_26593_26610 = state_26565;(statearr_26593_26610[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26565);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e26592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__26611 = state_26565;
state_26565 = G__26611;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26565){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26594 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26595);
return statearr_26594;
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
