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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24825 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24825 = (function (f,fn_handler,meta24826){
this.f = f;
this.fn_handler = fn_handler;
this.meta24826 = meta24826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24825.cljs$lang$type = true;
cljs.core.async.t24825.cljs$lang$ctorStr = "cljs.core.async/t24825";
cljs.core.async.t24825.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24825");
});
cljs.core.async.t24825.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24825.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24825.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24827){var self__ = this;
var _24827__$1 = this;return self__.meta24826;
});
cljs.core.async.t24825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24827,meta24826__$1){var self__ = this;
var _24827__$1 = this;return (new cljs.core.async.t24825(self__.f,self__.fn_handler,meta24826__$1));
});
cljs.core.async.__GT_t24825 = (function __GT_t24825(f__$1,fn_handler__$1,meta24826){return (new cljs.core.async.t24825(f__$1,fn_handler__$1,meta24826));
});
}
return (new cljs.core.async.t24825(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24829 = buff;if(G__24829)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24829.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24829.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24829);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24829);
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
{var val_24830 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24830) : fn1.call(null,val_24830));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24830) : fn1.call(null,val_24830));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24831 = n;var x_24832 = 0;while(true){
if((x_24832 < n__4248__auto___24831))
{(a[x_24832] = 0);
{
var G__24833 = (x_24832 + 1);
x_24832 = G__24833;
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
var G__24834 = (i + 1);
i = G__24834;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24838 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24838 = (function (flag,alt_flag,meta24839){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24839 = meta24839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24838.cljs$lang$type = true;
cljs.core.async.t24838.cljs$lang$ctorStr = "cljs.core.async/t24838";
cljs.core.async.t24838.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24838");
});
cljs.core.async.t24838.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24840){var self__ = this;
var _24840__$1 = this;return self__.meta24839;
});
cljs.core.async.t24838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24840,meta24839__$1){var self__ = this;
var _24840__$1 = this;return (new cljs.core.async.t24838(self__.flag,self__.alt_flag,meta24839__$1));
});
cljs.core.async.__GT_t24838 = (function __GT_t24838(flag__$1,alt_flag__$1,meta24839){return (new cljs.core.async.t24838(flag__$1,alt_flag__$1,meta24839));
});
}
return (new cljs.core.async.t24838(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24844 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24844 = (function (cb,flag,alt_handler,meta24845){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24845 = meta24845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24844.cljs$lang$type = true;
cljs.core.async.t24844.cljs$lang$ctorStr = "cljs.core.async/t24844";
cljs.core.async.t24844.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24844");
});
cljs.core.async.t24844.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24846){var self__ = this;
var _24846__$1 = this;return self__.meta24845;
});
cljs.core.async.t24844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24846,meta24845__$1){var self__ = this;
var _24846__$1 = this;return (new cljs.core.async.t24844(self__.cb,self__.flag,self__.alt_handler,meta24845__$1));
});
cljs.core.async.__GT_t24844 = (function __GT_t24844(cb__$1,flag__$1,alt_handler__$1,meta24845){return (new cljs.core.async.t24844(cb__$1,flag__$1,alt_handler__$1,meta24845));
});
}
return (new cljs.core.async.t24844(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24847_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24847_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24847_SHARP_,port], null)));
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
var G__24848 = (i + 1);
i = G__24848;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$262))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$262], null));
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
var alts_BANG___delegate = function (ports,p__24849){var map__24851 = p__24849;var map__24851__$1 = ((cljs.core.seq_QMARK_(map__24851))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24851):map__24851);var opts = map__24851__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24849 = null;if (arguments.length > 1) {
  p__24849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24849);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24852){
var ports = cljs.core.first(arglist__24852);
var p__24849 = cljs.core.rest(arglist__24852);
return alts_BANG___delegate(ports,p__24849);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24860 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24860 = (function (ch,f,map_LT_,meta24861){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24861 = meta24861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24860.cljs$lang$type = true;
cljs.core.async.t24860.cljs$lang$ctorStr = "cljs.core.async/t24860";
cljs.core.async.t24860.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24860");
});
cljs.core.async.t24860.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24860.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24860.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24860.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24863 = (function (fn1,_,meta24861,ch,f,map_LT_,meta24864){
this.fn1 = fn1;
this._ = _;
this.meta24861 = meta24861;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24864 = meta24864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24863.cljs$lang$type = true;
cljs.core.async.t24863.cljs$lang$ctorStr = "cljs.core.async/t24863";
cljs.core.async.t24863.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24863");
});
cljs.core.async.t24863.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24863.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24853_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24853_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24853_SHARP_) : self__.f.call(null,p1__24853_SHARP_)))) : f1.call(null,(((p1__24853_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24853_SHARP_) : self__.f.call(null,p1__24853_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24865){var self__ = this;
var _24865__$1 = this;return self__.meta24864;
});
cljs.core.async.t24863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24865,meta24864__$1){var self__ = this;
var _24865__$1 = this;return (new cljs.core.async.t24863(self__.fn1,self__._,self__.meta24861,self__.ch,self__.f,self__.map_LT_,meta24864__$1));
});
cljs.core.async.__GT_t24863 = (function __GT_t24863(fn1__$1,___$2,meta24861__$1,ch__$2,f__$2,map_LT___$2,meta24864){return (new cljs.core.async.t24863(fn1__$1,___$2,meta24861__$1,ch__$2,f__$2,map_LT___$2,meta24864));
});
}
return (new cljs.core.async.t24863(fn1,___$1,self__.meta24861,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24860.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24860.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24862){var self__ = this;
var _24862__$1 = this;return self__.meta24861;
});
cljs.core.async.t24860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24862,meta24861__$1){var self__ = this;
var _24862__$1 = this;return (new cljs.core.async.t24860(self__.ch,self__.f,self__.map_LT_,meta24861__$1));
});
cljs.core.async.__GT_t24860 = (function __GT_t24860(ch__$1,f__$1,map_LT___$1,meta24861){return (new cljs.core.async.t24860(ch__$1,f__$1,map_LT___$1,meta24861));
});
}
return (new cljs.core.async.t24860(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24869 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24869 = (function (ch,f,map_GT_,meta24870){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24870 = meta24870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24869.cljs$lang$type = true;
cljs.core.async.t24869.cljs$lang$ctorStr = "cljs.core.async/t24869";
cljs.core.async.t24869.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24869");
});
cljs.core.async.t24869.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24869.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24869.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24871){var self__ = this;
var _24871__$1 = this;return self__.meta24870;
});
cljs.core.async.t24869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24871,meta24870__$1){var self__ = this;
var _24871__$1 = this;return (new cljs.core.async.t24869(self__.ch,self__.f,self__.map_GT_,meta24870__$1));
});
cljs.core.async.__GT_t24869 = (function __GT_t24869(ch__$1,f__$1,map_GT___$1,meta24870){return (new cljs.core.async.t24869(ch__$1,f__$1,map_GT___$1,meta24870));
});
}
return (new cljs.core.async.t24869(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24875 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24875 = (function (ch,p,filter_GT_,meta24876){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24876 = meta24876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24875.cljs$lang$type = true;
cljs.core.async.t24875.cljs$lang$ctorStr = "cljs.core.async/t24875";
cljs.core.async.t24875.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24875");
});
cljs.core.async.t24875.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24875.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24875.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24875.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24875.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24875.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24877){var self__ = this;
var _24877__$1 = this;return self__.meta24876;
});
cljs.core.async.t24875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24877,meta24876__$1){var self__ = this;
var _24877__$1 = this;return (new cljs.core.async.t24875(self__.ch,self__.p,self__.filter_GT_,meta24876__$1));
});
cljs.core.async.__GT_t24875 = (function __GT_t24875(ch__$1,p__$1,filter_GT___$1,meta24876){return (new cljs.core.async.t24875(ch__$1,p__$1,filter_GT___$1,meta24876));
});
}
return (new cljs.core.async.t24875(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24939){var state_val_24940 = (state_24939[1]);if((state_val_24940 === 1))
{var state_24939__$1 = state_24939;var statearr_24941_24961 = state_24939__$1;(statearr_24941_24961[2] = null);
(statearr_24941_24961[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_24940 === 2))
{var state_24939__$1 = state_24939;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24939__$1,4,ch);
} else
{if((state_val_24940 === 3))
{var inst_24937 = (state_24939[2]);var state_24939__$1 = state_24939;return cljs.core.async.impl.ioc_helpers.return_chan(state_24939__$1,inst_24937);
} else
{if((state_val_24940 === 4))
{var inst_24921 = (state_24939[7]);var inst_24921__$1 = (state_24939[2]);var inst_24922 = (inst_24921__$1 == null);var state_24939__$1 = (function (){var statearr_24942 = state_24939;(statearr_24942[7] = inst_24921__$1);
return statearr_24942;
})();if(cljs.core.truth_(inst_24922))
{var statearr_24943_24962 = state_24939__$1;(statearr_24943_24962[1] = 5);
} else
{var statearr_24944_24963 = state_24939__$1;(statearr_24944_24963[1] = 6);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_24940 === 5))
{var inst_24924 = cljs.core.async.close_BANG_(out);var state_24939__$1 = state_24939;var statearr_24945_24964 = state_24939__$1;(statearr_24945_24964[2] = inst_24924);
(statearr_24945_24964[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_24940 === 6))
{var inst_24921 = (state_24939[7]);var inst_24926 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24921) : p.call(null,inst_24921));var state_24939__$1 = state_24939;if(cljs.core.truth_(inst_24926))
{var statearr_24946_24965 = state_24939__$1;(statearr_24946_24965[1] = 8);
} else
{var statearr_24947_24966 = state_24939__$1;(statearr_24947_24966[1] = 9);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_24940 === 7))
{var inst_24935 = (state_24939[2]);var state_24939__$1 = state_24939;var statearr_24948_24967 = state_24939__$1;(statearr_24948_24967[2] = inst_24935);
(statearr_24948_24967[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_24940 === 8))
{var inst_24921 = (state_24939[7]);var state_24939__$1 = state_24939;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24939__$1,11,out,inst_24921);
} else
{if((state_val_24940 === 9))
{var state_24939__$1 = state_24939;var statearr_24949_24968 = state_24939__$1;(statearr_24949_24968[2] = null);
(statearr_24949_24968[1] = 10);
return cljs.core.constant$keyword$272;
} else
{if((state_val_24940 === 10))
{var inst_24932 = (state_24939[2]);var state_24939__$1 = (function (){var statearr_24950 = state_24939;(statearr_24950[8] = inst_24932);
return statearr_24950;
})();var statearr_24951_24969 = state_24939__$1;(statearr_24951_24969[2] = null);
(statearr_24951_24969[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_24940 === 11))
{var inst_24929 = (state_24939[2]);var state_24939__$1 = state_24939;var statearr_24952_24970 = state_24939__$1;(statearr_24952_24970[2] = inst_24929);
(statearr_24952_24970[1] = 10);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_24956 = [null,null,null,null,null,null,null,null,null];(statearr_24956[0] = state_machine__5507__auto__);
(statearr_24956[1] = 1);
return statearr_24956;
});
var state_machine__5507__auto____1 = (function (state_24939){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24939);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24957){if((e24957 instanceof Object))
{var ex__5510__auto__ = e24957;var statearr_24958_24971 = state_24939;(statearr_24958_24971[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24939);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e24957;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__24972 = state_24939;
state_24939 = G__24972;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24939){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24959 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24960);
return statearr_24959;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25124){var state_val_25125 = (state_25124[1]);if((state_val_25125 === 1))
{var state_25124__$1 = state_25124;var statearr_25126_25163 = state_25124__$1;(statearr_25126_25163[2] = null);
(statearr_25126_25163[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 2))
{var state_25124__$1 = state_25124;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25124__$1,4,in$);
} else
{if((state_val_25125 === 3))
{var inst_25122 = (state_25124[2]);var state_25124__$1 = state_25124;return cljs.core.async.impl.ioc_helpers.return_chan(state_25124__$1,inst_25122);
} else
{if((state_val_25125 === 4))
{var inst_25070 = (state_25124[7]);var inst_25070__$1 = (state_25124[2]);var inst_25071 = (inst_25070__$1 == null);var state_25124__$1 = (function (){var statearr_25127 = state_25124;(statearr_25127[7] = inst_25070__$1);
return statearr_25127;
})();if(cljs.core.truth_(inst_25071))
{var statearr_25128_25164 = state_25124__$1;(statearr_25128_25164[1] = 5);
} else
{var statearr_25129_25165 = state_25124__$1;(statearr_25129_25165[1] = 6);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 5))
{var inst_25073 = cljs.core.async.close_BANG_(out);var state_25124__$1 = state_25124;var statearr_25130_25166 = state_25124__$1;(statearr_25130_25166[2] = inst_25073);
(statearr_25130_25166[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 6))
{var inst_25070 = (state_25124[7]);var inst_25075 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25070) : f.call(null,inst_25070));var inst_25080 = cljs.core.seq(inst_25075);var inst_25081 = inst_25080;var inst_25082 = null;var inst_25083 = 0;var inst_25084 = 0;var state_25124__$1 = (function (){var statearr_25131 = state_25124;(statearr_25131[8] = inst_25081);
(statearr_25131[9] = inst_25082);
(statearr_25131[10] = inst_25083);
(statearr_25131[11] = inst_25084);
return statearr_25131;
})();var statearr_25132_25167 = state_25124__$1;(statearr_25132_25167[2] = null);
(statearr_25132_25167[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 7))
{var inst_25120 = (state_25124[2]);var state_25124__$1 = state_25124;var statearr_25133_25168 = state_25124__$1;(statearr_25133_25168[2] = inst_25120);
(statearr_25133_25168[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 8))
{var inst_25083 = (state_25124[10]);var inst_25084 = (state_25124[11]);var inst_25086 = (inst_25084 < inst_25083);var inst_25087 = inst_25086;var state_25124__$1 = state_25124;if(cljs.core.truth_(inst_25087))
{var statearr_25134_25169 = state_25124__$1;(statearr_25134_25169[1] = 10);
} else
{var statearr_25135_25170 = state_25124__$1;(statearr_25135_25170[1] = 11);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 9))
{var inst_25117 = (state_25124[2]);var state_25124__$1 = (function (){var statearr_25136 = state_25124;(statearr_25136[12] = inst_25117);
return statearr_25136;
})();var statearr_25137_25171 = state_25124__$1;(statearr_25137_25171[2] = null);
(statearr_25137_25171[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 10))
{var inst_25082 = (state_25124[9]);var inst_25084 = (state_25124[11]);var inst_25089 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25082,inst_25084);var state_25124__$1 = state_25124;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25124__$1,13,out,inst_25089);
} else
{if((state_val_25125 === 11))
{var inst_25081 = (state_25124[8]);var inst_25095 = (state_25124[13]);var inst_25095__$1 = cljs.core.seq(inst_25081);var state_25124__$1 = (function (){var statearr_25141 = state_25124;(statearr_25141[13] = inst_25095__$1);
return statearr_25141;
})();if(inst_25095__$1)
{var statearr_25142_25172 = state_25124__$1;(statearr_25142_25172[1] = 14);
} else
{var statearr_25143_25173 = state_25124__$1;(statearr_25143_25173[1] = 15);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 12))
{var inst_25115 = (state_25124[2]);var state_25124__$1 = state_25124;var statearr_25144_25174 = state_25124__$1;(statearr_25144_25174[2] = inst_25115);
(statearr_25144_25174[1] = 9);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 13))
{var inst_25081 = (state_25124[8]);var inst_25082 = (state_25124[9]);var inst_25083 = (state_25124[10]);var inst_25084 = (state_25124[11]);var inst_25091 = (state_25124[2]);var inst_25092 = (inst_25084 + 1);var tmp25138 = inst_25081;var tmp25139 = inst_25082;var tmp25140 = inst_25083;var inst_25081__$1 = tmp25138;var inst_25082__$1 = tmp25139;var inst_25083__$1 = tmp25140;var inst_25084__$1 = inst_25092;var state_25124__$1 = (function (){var statearr_25145 = state_25124;(statearr_25145[8] = inst_25081__$1);
(statearr_25145[9] = inst_25082__$1);
(statearr_25145[10] = inst_25083__$1);
(statearr_25145[14] = inst_25091);
(statearr_25145[11] = inst_25084__$1);
return statearr_25145;
})();var statearr_25146_25175 = state_25124__$1;(statearr_25146_25175[2] = null);
(statearr_25146_25175[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 14))
{var inst_25095 = (state_25124[13]);var inst_25097 = cljs.core.chunked_seq_QMARK_(inst_25095);var state_25124__$1 = state_25124;if(inst_25097)
{var statearr_25147_25176 = state_25124__$1;(statearr_25147_25176[1] = 17);
} else
{var statearr_25148_25177 = state_25124__$1;(statearr_25148_25177[1] = 18);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 15))
{var state_25124__$1 = state_25124;var statearr_25149_25178 = state_25124__$1;(statearr_25149_25178[2] = null);
(statearr_25149_25178[1] = 16);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 16))
{var inst_25113 = (state_25124[2]);var state_25124__$1 = state_25124;var statearr_25150_25179 = state_25124__$1;(statearr_25150_25179[2] = inst_25113);
(statearr_25150_25179[1] = 12);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 17))
{var inst_25095 = (state_25124[13]);var inst_25099 = cljs.core.chunk_first(inst_25095);var inst_25100 = cljs.core.chunk_rest(inst_25095);var inst_25101 = cljs.core.count(inst_25099);var inst_25081 = inst_25100;var inst_25082 = inst_25099;var inst_25083 = inst_25101;var inst_25084 = 0;var state_25124__$1 = (function (){var statearr_25151 = state_25124;(statearr_25151[8] = inst_25081);
(statearr_25151[9] = inst_25082);
(statearr_25151[10] = inst_25083);
(statearr_25151[11] = inst_25084);
return statearr_25151;
})();var statearr_25152_25180 = state_25124__$1;(statearr_25152_25180[2] = null);
(statearr_25152_25180[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 18))
{var inst_25095 = (state_25124[13]);var inst_25104 = cljs.core.first(inst_25095);var state_25124__$1 = state_25124;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25124__$1,20,out,inst_25104);
} else
{if((state_val_25125 === 19))
{var inst_25110 = (state_25124[2]);var state_25124__$1 = state_25124;var statearr_25153_25181 = state_25124__$1;(statearr_25153_25181[2] = inst_25110);
(statearr_25153_25181[1] = 16);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25125 === 20))
{var inst_25095 = (state_25124[13]);var inst_25106 = (state_25124[2]);var inst_25107 = cljs.core.next(inst_25095);var inst_25081 = inst_25107;var inst_25082 = null;var inst_25083 = 0;var inst_25084 = 0;var state_25124__$1 = (function (){var statearr_25154 = state_25124;(statearr_25154[8] = inst_25081);
(statearr_25154[9] = inst_25082);
(statearr_25154[10] = inst_25083);
(statearr_25154[15] = inst_25106);
(statearr_25154[11] = inst_25084);
return statearr_25154;
})();var statearr_25155_25182 = state_25124__$1;(statearr_25155_25182[2] = null);
(statearr_25155_25182[1] = 8);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_25159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25159[0] = state_machine__5507__auto__);
(statearr_25159[1] = 1);
return statearr_25159;
});
var state_machine__5507__auto____1 = (function (state_25124){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25124);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25160){if((e25160 instanceof Object))
{var ex__5510__auto__ = e25160;var statearr_25161_25183 = state_25124;(statearr_25161_25183[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25124);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e25160;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__25184 = state_25124;
state_25124 = G__25184;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25124){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25162 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_25162;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___25265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25244){var state_val_25245 = (state_25244[1]);if((state_val_25245 === 1))
{var state_25244__$1 = state_25244;var statearr_25246_25266 = state_25244__$1;(statearr_25246_25266[2] = null);
(statearr_25246_25266[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25245 === 2))
{var state_25244__$1 = state_25244;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25244__$1,4,from);
} else
{if((state_val_25245 === 3))
{var inst_25242 = (state_25244[2]);var state_25244__$1 = state_25244;return cljs.core.async.impl.ioc_helpers.return_chan(state_25244__$1,inst_25242);
} else
{if((state_val_25245 === 4))
{var inst_25227 = (state_25244[7]);var inst_25227__$1 = (state_25244[2]);var inst_25228 = (inst_25227__$1 == null);var state_25244__$1 = (function (){var statearr_25247 = state_25244;(statearr_25247[7] = inst_25227__$1);
return statearr_25247;
})();if(cljs.core.truth_(inst_25228))
{var statearr_25248_25267 = state_25244__$1;(statearr_25248_25267[1] = 5);
} else
{var statearr_25249_25268 = state_25244__$1;(statearr_25249_25268[1] = 6);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25245 === 5))
{var state_25244__$1 = state_25244;if(cljs.core.truth_(close_QMARK_))
{var statearr_25250_25269 = state_25244__$1;(statearr_25250_25269[1] = 8);
} else
{var statearr_25251_25270 = state_25244__$1;(statearr_25251_25270[1] = 9);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25245 === 6))
{var inst_25227 = (state_25244[7]);var state_25244__$1 = state_25244;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25244__$1,11,to,inst_25227);
} else
{if((state_val_25245 === 7))
{var inst_25240 = (state_25244[2]);var state_25244__$1 = state_25244;var statearr_25252_25271 = state_25244__$1;(statearr_25252_25271[2] = inst_25240);
(statearr_25252_25271[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25245 === 8))
{var inst_25231 = cljs.core.async.close_BANG_(to);var state_25244__$1 = state_25244;var statearr_25253_25272 = state_25244__$1;(statearr_25253_25272[2] = inst_25231);
(statearr_25253_25272[1] = 10);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25245 === 9))
{var state_25244__$1 = state_25244;var statearr_25254_25273 = state_25244__$1;(statearr_25254_25273[2] = null);
(statearr_25254_25273[1] = 10);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25245 === 10))
{var inst_25234 = (state_25244[2]);var state_25244__$1 = state_25244;var statearr_25255_25274 = state_25244__$1;(statearr_25255_25274[2] = inst_25234);
(statearr_25255_25274[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25245 === 11))
{var inst_25237 = (state_25244[2]);var state_25244__$1 = (function (){var statearr_25256 = state_25244;(statearr_25256[8] = inst_25237);
return statearr_25256;
})();var statearr_25257_25275 = state_25244__$1;(statearr_25257_25275[2] = null);
(statearr_25257_25275[1] = 2);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_25261 = [null,null,null,null,null,null,null,null,null];(statearr_25261[0] = state_machine__5507__auto__);
(statearr_25261[1] = 1);
return statearr_25261;
});
var state_machine__5507__auto____1 = (function (state_25244){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25244);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25262){if((e25262 instanceof Object))
{var ex__5510__auto__ = e25262;var statearr_25263_25276 = state_25244;(statearr_25263_25276[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25244);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e25262;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__25277 = state_25244;
state_25244 = G__25277;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25244){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25264 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25265);
return statearr_25264;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___25364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25342){var state_val_25343 = (state_25342[1]);if((state_val_25343 === 1))
{var state_25342__$1 = state_25342;var statearr_25344_25365 = state_25342__$1;(statearr_25344_25365[2] = null);
(statearr_25344_25365[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25343 === 2))
{var state_25342__$1 = state_25342;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25342__$1,4,ch);
} else
{if((state_val_25343 === 3))
{var inst_25340 = (state_25342[2]);var state_25342__$1 = state_25342;return cljs.core.async.impl.ioc_helpers.return_chan(state_25342__$1,inst_25340);
} else
{if((state_val_25343 === 4))
{var inst_25323 = (state_25342[7]);var inst_25323__$1 = (state_25342[2]);var inst_25324 = (inst_25323__$1 == null);var state_25342__$1 = (function (){var statearr_25345 = state_25342;(statearr_25345[7] = inst_25323__$1);
return statearr_25345;
})();if(cljs.core.truth_(inst_25324))
{var statearr_25346_25366 = state_25342__$1;(statearr_25346_25366[1] = 5);
} else
{var statearr_25347_25367 = state_25342__$1;(statearr_25347_25367[1] = 6);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25343 === 5))
{var inst_25326 = cljs.core.async.close_BANG_(tc);var inst_25327 = cljs.core.async.close_BANG_(fc);var state_25342__$1 = (function (){var statearr_25348 = state_25342;(statearr_25348[8] = inst_25326);
return statearr_25348;
})();var statearr_25349_25368 = state_25342__$1;(statearr_25349_25368[2] = inst_25327);
(statearr_25349_25368[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25343 === 6))
{var inst_25323 = (state_25342[7]);var inst_25329 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25323) : p.call(null,inst_25323));var state_25342__$1 = state_25342;if(cljs.core.truth_(inst_25329))
{var statearr_25350_25369 = state_25342__$1;(statearr_25350_25369[1] = 9);
} else
{var statearr_25351_25370 = state_25342__$1;(statearr_25351_25370[1] = 10);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25343 === 7))
{var inst_25338 = (state_25342[2]);var state_25342__$1 = state_25342;var statearr_25352_25371 = state_25342__$1;(statearr_25352_25371[2] = inst_25338);
(statearr_25352_25371[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25343 === 8))
{var inst_25335 = (state_25342[2]);var state_25342__$1 = (function (){var statearr_25353 = state_25342;(statearr_25353[9] = inst_25335);
return statearr_25353;
})();var statearr_25354_25372 = state_25342__$1;(statearr_25354_25372[2] = null);
(statearr_25354_25372[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25343 === 9))
{var state_25342__$1 = state_25342;var statearr_25355_25373 = state_25342__$1;(statearr_25355_25373[2] = tc);
(statearr_25355_25373[1] = 11);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25343 === 10))
{var state_25342__$1 = state_25342;var statearr_25356_25374 = state_25342__$1;(statearr_25356_25374[2] = fc);
(statearr_25356_25374[1] = 11);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25343 === 11))
{var inst_25323 = (state_25342[7]);var inst_25333 = (state_25342[2]);var state_25342__$1 = state_25342;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25342__$1,8,inst_25333,inst_25323);
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
var state_machine__5507__auto____0 = (function (){var statearr_25360 = [null,null,null,null,null,null,null,null,null,null];(statearr_25360[0] = state_machine__5507__auto__);
(statearr_25360[1] = 1);
return statearr_25360;
});
var state_machine__5507__auto____1 = (function (state_25342){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25342);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25361){if((e25361 instanceof Object))
{var ex__5510__auto__ = e25361;var statearr_25362_25375 = state_25342;(statearr_25362_25375[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25342);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e25361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__25376 = state_25342;
state_25342 = G__25376;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25342){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25363 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25364);
return statearr_25363;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25423){var state_val_25424 = (state_25423[1]);if((state_val_25424 === 7))
{var inst_25419 = (state_25423[2]);var state_25423__$1 = state_25423;var statearr_25425_25441 = state_25423__$1;(statearr_25425_25441[2] = inst_25419);
(statearr_25425_25441[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25424 === 6))
{var inst_25412 = (state_25423[7]);var inst_25409 = (state_25423[8]);var inst_25416 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_25409,inst_25412) : f.call(null,inst_25409,inst_25412));var inst_25409__$1 = inst_25416;var state_25423__$1 = (function (){var statearr_25426 = state_25423;(statearr_25426[8] = inst_25409__$1);
return statearr_25426;
})();var statearr_25427_25442 = state_25423__$1;(statearr_25427_25442[2] = null);
(statearr_25427_25442[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25424 === 5))
{var inst_25409 = (state_25423[8]);var state_25423__$1 = state_25423;var statearr_25428_25443 = state_25423__$1;(statearr_25428_25443[2] = inst_25409);
(statearr_25428_25443[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25424 === 4))
{var inst_25412 = (state_25423[7]);var inst_25412__$1 = (state_25423[2]);var inst_25413 = (inst_25412__$1 == null);var state_25423__$1 = (function (){var statearr_25429 = state_25423;(statearr_25429[7] = inst_25412__$1);
return statearr_25429;
})();if(cljs.core.truth_(inst_25413))
{var statearr_25430_25444 = state_25423__$1;(statearr_25430_25444[1] = 5);
} else
{var statearr_25431_25445 = state_25423__$1;(statearr_25431_25445[1] = 6);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25424 === 3))
{var inst_25421 = (state_25423[2]);var state_25423__$1 = state_25423;return cljs.core.async.impl.ioc_helpers.return_chan(state_25423__$1,inst_25421);
} else
{if((state_val_25424 === 2))
{var state_25423__$1 = state_25423;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25423__$1,4,ch);
} else
{if((state_val_25424 === 1))
{var inst_25409 = init;var state_25423__$1 = (function (){var statearr_25432 = state_25423;(statearr_25432[8] = inst_25409);
return statearr_25432;
})();var statearr_25433_25446 = state_25423__$1;(statearr_25433_25446[2] = null);
(statearr_25433_25446[1] = 2);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_25437 = [null,null,null,null,null,null,null,null,null];(statearr_25437[0] = state_machine__5507__auto__);
(statearr_25437[1] = 1);
return statearr_25437;
});
var state_machine__5507__auto____1 = (function (state_25423){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25423);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25438){if((e25438 instanceof Object))
{var ex__5510__auto__ = e25438;var statearr_25439_25447 = state_25423;(statearr_25439_25447[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25423);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e25438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__25448 = state_25423;
state_25423 = G__25448;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25423){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25440 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_25440;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25510){var state_val_25511 = (state_25510[1]);if((state_val_25511 === 1))
{var inst_25490 = cljs.core.seq(coll);var inst_25491 = inst_25490;var state_25510__$1 = (function (){var statearr_25512 = state_25510;(statearr_25512[7] = inst_25491);
return statearr_25512;
})();var statearr_25513_25531 = state_25510__$1;(statearr_25513_25531[2] = null);
(statearr_25513_25531[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25511 === 2))
{var inst_25491 = (state_25510[7]);var state_25510__$1 = state_25510;if(cljs.core.truth_(inst_25491))
{var statearr_25514_25532 = state_25510__$1;(statearr_25514_25532[1] = 4);
} else
{var statearr_25515_25533 = state_25510__$1;(statearr_25515_25533[1] = 5);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25511 === 3))
{var inst_25508 = (state_25510[2]);var state_25510__$1 = state_25510;return cljs.core.async.impl.ioc_helpers.return_chan(state_25510__$1,inst_25508);
} else
{if((state_val_25511 === 4))
{var inst_25491 = (state_25510[7]);var inst_25494 = cljs.core.first(inst_25491);var state_25510__$1 = state_25510;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25510__$1,7,ch,inst_25494);
} else
{if((state_val_25511 === 5))
{var state_25510__$1 = state_25510;if(cljs.core.truth_(close_QMARK_))
{var statearr_25516_25534 = state_25510__$1;(statearr_25516_25534[1] = 8);
} else
{var statearr_25517_25535 = state_25510__$1;(statearr_25517_25535[1] = 9);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25511 === 6))
{var inst_25506 = (state_25510[2]);var state_25510__$1 = state_25510;var statearr_25518_25536 = state_25510__$1;(statearr_25518_25536[2] = inst_25506);
(statearr_25518_25536[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25511 === 7))
{var inst_25491 = (state_25510[7]);var inst_25496 = (state_25510[2]);var inst_25497 = cljs.core.next(inst_25491);var inst_25491__$1 = inst_25497;var state_25510__$1 = (function (){var statearr_25519 = state_25510;(statearr_25519[8] = inst_25496);
(statearr_25519[7] = inst_25491__$1);
return statearr_25519;
})();var statearr_25520_25537 = state_25510__$1;(statearr_25520_25537[2] = null);
(statearr_25520_25537[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25511 === 8))
{var inst_25501 = cljs.core.async.close_BANG_(ch);var state_25510__$1 = state_25510;var statearr_25521_25538 = state_25510__$1;(statearr_25521_25538[2] = inst_25501);
(statearr_25521_25538[1] = 10);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25511 === 9))
{var state_25510__$1 = state_25510;var statearr_25522_25539 = state_25510__$1;(statearr_25522_25539[2] = null);
(statearr_25522_25539[1] = 10);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25511 === 10))
{var inst_25504 = (state_25510[2]);var state_25510__$1 = state_25510;var statearr_25523_25540 = state_25510__$1;(statearr_25523_25540[2] = inst_25504);
(statearr_25523_25540[1] = 6);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_25527 = [null,null,null,null,null,null,null,null,null];(statearr_25527[0] = state_machine__5507__auto__);
(statearr_25527[1] = 1);
return statearr_25527;
});
var state_machine__5507__auto____1 = (function (state_25510){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25510);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25528){if((e25528 instanceof Object))
{var ex__5510__auto__ = e25528;var statearr_25529_25541 = state_25510;(statearr_25529_25541[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25510);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e25528;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__25542 = state_25510;
state_25510 = G__25542;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25510){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25530 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_25530;
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
cljs.core.async.Mux = (function (){var obj25544 = {};return obj25544;
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
cljs.core.async.Mult = (function (){var obj25546 = {};return obj25546;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25770 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25770 = (function (cs,ch,mult,meta25771){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25771 = meta25771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25770.cljs$lang$type = true;
cljs.core.async.t25770.cljs$lang$ctorStr = "cljs.core.async/t25770";
cljs.core.async.t25770.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25770");
});})(cs))
;
cljs.core.async.t25770.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25770.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25770.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25770.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25770.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25772){var self__ = this;
var _25772__$1 = this;return self__.meta25771;
});})(cs))
;
cljs.core.async.t25770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25772,meta25771__$1){var self__ = this;
var _25772__$1 = this;return (new cljs.core.async.t25770(self__.cs,self__.ch,self__.mult,meta25771__$1));
});})(cs))
;
cljs.core.async.__GT_t25770 = ((function (cs){
return (function __GT_t25770(cs__$1,ch__$1,mult__$1,meta25771){return (new cljs.core.async.t25770(cs__$1,ch__$1,mult__$1,meta25771));
});})(cs))
;
}
return (new cljs.core.async.t25770(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25907){var state_val_25908 = (state_25907[1]);if((state_val_25908 === 32))
{var inst_25775 = (state_25907[7]);var inst_25851 = (state_25907[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25907,31,Object,null,30);var inst_25858 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25851,inst_25775,done);var state_25907__$1 = state_25907;var statearr_25909_25994 = state_25907__$1;(statearr_25909_25994[2] = inst_25858);
cljs.core.async.impl.ioc_helpers.process_exception(state_25907__$1);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 1))
{var state_25907__$1 = state_25907;var statearr_25910_25995 = state_25907__$1;(statearr_25910_25995[2] = null);
(statearr_25910_25995[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 33))
{var inst_25864 = (state_25907[9]);var inst_25866 = cljs.core.chunked_seq_QMARK_(inst_25864);var state_25907__$1 = state_25907;if(inst_25866)
{var statearr_25911_25996 = state_25907__$1;(statearr_25911_25996[1] = 36);
} else
{var statearr_25912_25997 = state_25907__$1;(statearr_25912_25997[1] = 37);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 2))
{var state_25907__$1 = state_25907;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25907__$1,4,ch);
} else
{if((state_val_25908 === 34))
{var state_25907__$1 = state_25907;var statearr_25913_25998 = state_25907__$1;(statearr_25913_25998[2] = null);
(statearr_25913_25998[1] = 35);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 3))
{var inst_25905 = (state_25907[2]);var state_25907__$1 = state_25907;return cljs.core.async.impl.ioc_helpers.return_chan(state_25907__$1,inst_25905);
} else
{if((state_val_25908 === 35))
{var inst_25889 = (state_25907[2]);var state_25907__$1 = state_25907;var statearr_25914_25999 = state_25907__$1;(statearr_25914_25999[2] = inst_25889);
(statearr_25914_25999[1] = 29);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 4))
{var inst_25775 = (state_25907[7]);var inst_25775__$1 = (state_25907[2]);var inst_25776 = (inst_25775__$1 == null);var state_25907__$1 = (function (){var statearr_25915 = state_25907;(statearr_25915[7] = inst_25775__$1);
return statearr_25915;
})();if(cljs.core.truth_(inst_25776))
{var statearr_25916_26000 = state_25907__$1;(statearr_25916_26000[1] = 5);
} else
{var statearr_25917_26001 = state_25907__$1;(statearr_25917_26001[1] = 6);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 36))
{var inst_25864 = (state_25907[9]);var inst_25868 = cljs.core.chunk_first(inst_25864);var inst_25869 = cljs.core.chunk_rest(inst_25864);var inst_25870 = cljs.core.count(inst_25868);var inst_25843 = inst_25869;var inst_25844 = inst_25868;var inst_25845 = inst_25870;var inst_25846 = 0;var state_25907__$1 = (function (){var statearr_25918 = state_25907;(statearr_25918[10] = inst_25844);
(statearr_25918[11] = inst_25845);
(statearr_25918[12] = inst_25846);
(statearr_25918[13] = inst_25843);
return statearr_25918;
})();var statearr_25919_26002 = state_25907__$1;(statearr_25919_26002[2] = null);
(statearr_25919_26002[1] = 25);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 5))
{var inst_25782 = cljs.core.deref(cs);var inst_25783 = cljs.core.seq(inst_25782);var inst_25784 = inst_25783;var inst_25785 = null;var inst_25786 = 0;var inst_25787 = 0;var state_25907__$1 = (function (){var statearr_25920 = state_25907;(statearr_25920[14] = inst_25787);
(statearr_25920[15] = inst_25786);
(statearr_25920[16] = inst_25785);
(statearr_25920[17] = inst_25784);
return statearr_25920;
})();var statearr_25921_26003 = state_25907__$1;(statearr_25921_26003[2] = null);
(statearr_25921_26003[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 37))
{var inst_25864 = (state_25907[9]);var inst_25873 = cljs.core.first(inst_25864);var state_25907__$1 = (function (){var statearr_25922 = state_25907;(statearr_25922[18] = inst_25873);
return statearr_25922;
})();var statearr_25923_26004 = state_25907__$1;(statearr_25923_26004[2] = null);
(statearr_25923_26004[1] = 41);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 6))
{var inst_25835 = (state_25907[19]);var inst_25834 = cljs.core.deref(cs);var inst_25835__$1 = cljs.core.keys(inst_25834);var inst_25836 = cljs.core.count(inst_25835__$1);var inst_25837 = cljs.core.reset_BANG_(dctr,inst_25836);var inst_25842 = cljs.core.seq(inst_25835__$1);var inst_25843 = inst_25842;var inst_25844 = null;var inst_25845 = 0;var inst_25846 = 0;var state_25907__$1 = (function (){var statearr_25924 = state_25907;(statearr_25924[20] = inst_25837);
(statearr_25924[10] = inst_25844);
(statearr_25924[11] = inst_25845);
(statearr_25924[12] = inst_25846);
(statearr_25924[13] = inst_25843);
(statearr_25924[19] = inst_25835__$1);
return statearr_25924;
})();var statearr_25925_26005 = state_25907__$1;(statearr_25925_26005[2] = null);
(statearr_25925_26005[1] = 25);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 38))
{var inst_25886 = (state_25907[2]);var state_25907__$1 = state_25907;var statearr_25926_26006 = state_25907__$1;(statearr_25926_26006[2] = inst_25886);
(statearr_25926_26006[1] = 35);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 7))
{var inst_25903 = (state_25907[2]);var state_25907__$1 = state_25907;var statearr_25927_26007 = state_25907__$1;(statearr_25927_26007[2] = inst_25903);
(statearr_25927_26007[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 39))
{var inst_25864 = (state_25907[9]);var inst_25882 = (state_25907[2]);var inst_25883 = cljs.core.next(inst_25864);var inst_25843 = inst_25883;var inst_25844 = null;var inst_25845 = 0;var inst_25846 = 0;var state_25907__$1 = (function (){var statearr_25928 = state_25907;(statearr_25928[10] = inst_25844);
(statearr_25928[11] = inst_25845);
(statearr_25928[12] = inst_25846);
(statearr_25928[13] = inst_25843);
(statearr_25928[21] = inst_25882);
return statearr_25928;
})();var statearr_25929_26008 = state_25907__$1;(statearr_25929_26008[2] = null);
(statearr_25929_26008[1] = 25);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 8))
{var inst_25787 = (state_25907[14]);var inst_25786 = (state_25907[15]);var inst_25789 = (inst_25787 < inst_25786);var inst_25790 = inst_25789;var state_25907__$1 = state_25907;if(cljs.core.truth_(inst_25790))
{var statearr_25930_26009 = state_25907__$1;(statearr_25930_26009[1] = 10);
} else
{var statearr_25931_26010 = state_25907__$1;(statearr_25931_26010[1] = 11);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 40))
{var inst_25873 = (state_25907[18]);var inst_25874 = (state_25907[2]);var inst_25875 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25876 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25873);var state_25907__$1 = (function (){var statearr_25932 = state_25907;(statearr_25932[22] = inst_25875);
(statearr_25932[23] = inst_25874);
return statearr_25932;
})();var statearr_25933_26011 = state_25907__$1;(statearr_25933_26011[2] = inst_25876);
cljs.core.async.impl.ioc_helpers.process_exception(state_25907__$1);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 9))
{var inst_25832 = (state_25907[2]);var state_25907__$1 = state_25907;var statearr_25934_26012 = state_25907__$1;(statearr_25934_26012[2] = inst_25832);
(statearr_25934_26012[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 41))
{var inst_25775 = (state_25907[7]);var inst_25873 = (state_25907[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25907,40,Object,null,39);var inst_25880 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25873,inst_25775,done);var state_25907__$1 = state_25907;var statearr_25935_26013 = state_25907__$1;(statearr_25935_26013[2] = inst_25880);
cljs.core.async.impl.ioc_helpers.process_exception(state_25907__$1);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 10))
{var inst_25787 = (state_25907[14]);var inst_25785 = (state_25907[16]);var inst_25793 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25785,inst_25787);var inst_25794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25793,0,null);var inst_25795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25793,1,null);var state_25907__$1 = (function (){var statearr_25936 = state_25907;(statearr_25936[24] = inst_25794);
return statearr_25936;
})();if(cljs.core.truth_(inst_25795))
{var statearr_25937_26014 = state_25907__$1;(statearr_25937_26014[1] = 13);
} else
{var statearr_25938_26015 = state_25907__$1;(statearr_25938_26015[1] = 14);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 42))
{var state_25907__$1 = state_25907;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25907__$1,45,dchan);
} else
{if((state_val_25908 === 11))
{var inst_25784 = (state_25907[17]);var inst_25804 = (state_25907[25]);var inst_25804__$1 = cljs.core.seq(inst_25784);var state_25907__$1 = (function (){var statearr_25939 = state_25907;(statearr_25939[25] = inst_25804__$1);
return statearr_25939;
})();if(inst_25804__$1)
{var statearr_25940_26016 = state_25907__$1;(statearr_25940_26016[1] = 16);
} else
{var statearr_25941_26017 = state_25907__$1;(statearr_25941_26017[1] = 17);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 43))
{var state_25907__$1 = state_25907;var statearr_25942_26018 = state_25907__$1;(statearr_25942_26018[2] = null);
(statearr_25942_26018[1] = 44);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 12))
{var inst_25830 = (state_25907[2]);var state_25907__$1 = state_25907;var statearr_25943_26019 = state_25907__$1;(statearr_25943_26019[2] = inst_25830);
(statearr_25943_26019[1] = 9);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 44))
{var inst_25900 = (state_25907[2]);var state_25907__$1 = (function (){var statearr_25944 = state_25907;(statearr_25944[26] = inst_25900);
return statearr_25944;
})();var statearr_25945_26020 = state_25907__$1;(statearr_25945_26020[2] = null);
(statearr_25945_26020[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 13))
{var inst_25794 = (state_25907[24]);var inst_25797 = cljs.core.async.close_BANG_(inst_25794);var state_25907__$1 = state_25907;var statearr_25946_26021 = state_25907__$1;(statearr_25946_26021[2] = inst_25797);
(statearr_25946_26021[1] = 15);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 45))
{var inst_25897 = (state_25907[2]);var state_25907__$1 = state_25907;var statearr_25950_26022 = state_25907__$1;(statearr_25950_26022[2] = inst_25897);
(statearr_25950_26022[1] = 44);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 14))
{var state_25907__$1 = state_25907;var statearr_25951_26023 = state_25907__$1;(statearr_25951_26023[2] = null);
(statearr_25951_26023[1] = 15);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 15))
{var inst_25787 = (state_25907[14]);var inst_25786 = (state_25907[15]);var inst_25785 = (state_25907[16]);var inst_25784 = (state_25907[17]);var inst_25800 = (state_25907[2]);var inst_25801 = (inst_25787 + 1);var tmp25947 = inst_25786;var tmp25948 = inst_25785;var tmp25949 = inst_25784;var inst_25784__$1 = tmp25949;var inst_25785__$1 = tmp25948;var inst_25786__$1 = tmp25947;var inst_25787__$1 = inst_25801;var state_25907__$1 = (function (){var statearr_25952 = state_25907;(statearr_25952[14] = inst_25787__$1);
(statearr_25952[15] = inst_25786__$1);
(statearr_25952[16] = inst_25785__$1);
(statearr_25952[17] = inst_25784__$1);
(statearr_25952[27] = inst_25800);
return statearr_25952;
})();var statearr_25953_26024 = state_25907__$1;(statearr_25953_26024[2] = null);
(statearr_25953_26024[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 16))
{var inst_25804 = (state_25907[25]);var inst_25806 = cljs.core.chunked_seq_QMARK_(inst_25804);var state_25907__$1 = state_25907;if(inst_25806)
{var statearr_25954_26025 = state_25907__$1;(statearr_25954_26025[1] = 19);
} else
{var statearr_25955_26026 = state_25907__$1;(statearr_25955_26026[1] = 20);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 17))
{var state_25907__$1 = state_25907;var statearr_25956_26027 = state_25907__$1;(statearr_25956_26027[2] = null);
(statearr_25956_26027[1] = 18);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 18))
{var inst_25828 = (state_25907[2]);var state_25907__$1 = state_25907;var statearr_25957_26028 = state_25907__$1;(statearr_25957_26028[2] = inst_25828);
(statearr_25957_26028[1] = 12);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 19))
{var inst_25804 = (state_25907[25]);var inst_25808 = cljs.core.chunk_first(inst_25804);var inst_25809 = cljs.core.chunk_rest(inst_25804);var inst_25810 = cljs.core.count(inst_25808);var inst_25784 = inst_25809;var inst_25785 = inst_25808;var inst_25786 = inst_25810;var inst_25787 = 0;var state_25907__$1 = (function (){var statearr_25958 = state_25907;(statearr_25958[14] = inst_25787);
(statearr_25958[15] = inst_25786);
(statearr_25958[16] = inst_25785);
(statearr_25958[17] = inst_25784);
return statearr_25958;
})();var statearr_25959_26029 = state_25907__$1;(statearr_25959_26029[2] = null);
(statearr_25959_26029[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 20))
{var inst_25804 = (state_25907[25]);var inst_25814 = cljs.core.first(inst_25804);var inst_25815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25814,0,null);var inst_25816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25814,1,null);var state_25907__$1 = (function (){var statearr_25960 = state_25907;(statearr_25960[28] = inst_25815);
return statearr_25960;
})();if(cljs.core.truth_(inst_25816))
{var statearr_25961_26030 = state_25907__$1;(statearr_25961_26030[1] = 22);
} else
{var statearr_25962_26031 = state_25907__$1;(statearr_25962_26031[1] = 23);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 21))
{var inst_25825 = (state_25907[2]);var state_25907__$1 = state_25907;var statearr_25963_26032 = state_25907__$1;(statearr_25963_26032[2] = inst_25825);
(statearr_25963_26032[1] = 18);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 22))
{var inst_25815 = (state_25907[28]);var inst_25818 = cljs.core.async.close_BANG_(inst_25815);var state_25907__$1 = state_25907;var statearr_25964_26033 = state_25907__$1;(statearr_25964_26033[2] = inst_25818);
(statearr_25964_26033[1] = 24);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 23))
{var state_25907__$1 = state_25907;var statearr_25965_26034 = state_25907__$1;(statearr_25965_26034[2] = null);
(statearr_25965_26034[1] = 24);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 24))
{var inst_25804 = (state_25907[25]);var inst_25821 = (state_25907[2]);var inst_25822 = cljs.core.next(inst_25804);var inst_25784 = inst_25822;var inst_25785 = null;var inst_25786 = 0;var inst_25787 = 0;var state_25907__$1 = (function (){var statearr_25966 = state_25907;(statearr_25966[29] = inst_25821);
(statearr_25966[14] = inst_25787);
(statearr_25966[15] = inst_25786);
(statearr_25966[16] = inst_25785);
(statearr_25966[17] = inst_25784);
return statearr_25966;
})();var statearr_25967_26035 = state_25907__$1;(statearr_25967_26035[2] = null);
(statearr_25967_26035[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 25))
{var inst_25845 = (state_25907[11]);var inst_25846 = (state_25907[12]);var inst_25848 = (inst_25846 < inst_25845);var inst_25849 = inst_25848;var state_25907__$1 = state_25907;if(cljs.core.truth_(inst_25849))
{var statearr_25968_26036 = state_25907__$1;(statearr_25968_26036[1] = 27);
} else
{var statearr_25969_26037 = state_25907__$1;(statearr_25969_26037[1] = 28);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 26))
{var inst_25835 = (state_25907[19]);var inst_25893 = (state_25907[2]);var inst_25894 = cljs.core.seq(inst_25835);var state_25907__$1 = (function (){var statearr_25970 = state_25907;(statearr_25970[30] = inst_25893);
return statearr_25970;
})();if(inst_25894)
{var statearr_25971_26038 = state_25907__$1;(statearr_25971_26038[1] = 42);
} else
{var statearr_25972_26039 = state_25907__$1;(statearr_25972_26039[1] = 43);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 27))
{var inst_25844 = (state_25907[10]);var inst_25846 = (state_25907[12]);var inst_25851 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25844,inst_25846);var state_25907__$1 = (function (){var statearr_25973 = state_25907;(statearr_25973[8] = inst_25851);
return statearr_25973;
})();var statearr_25974_26040 = state_25907__$1;(statearr_25974_26040[2] = null);
(statearr_25974_26040[1] = 32);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 28))
{var inst_25864 = (state_25907[9]);var inst_25843 = (state_25907[13]);var inst_25864__$1 = cljs.core.seq(inst_25843);var state_25907__$1 = (function (){var statearr_25978 = state_25907;(statearr_25978[9] = inst_25864__$1);
return statearr_25978;
})();if(inst_25864__$1)
{var statearr_25979_26041 = state_25907__$1;(statearr_25979_26041[1] = 33);
} else
{var statearr_25980_26042 = state_25907__$1;(statearr_25980_26042[1] = 34);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 29))
{var inst_25891 = (state_25907[2]);var state_25907__$1 = state_25907;var statearr_25981_26043 = state_25907__$1;(statearr_25981_26043[2] = inst_25891);
(statearr_25981_26043[1] = 26);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 30))
{var inst_25844 = (state_25907[10]);var inst_25845 = (state_25907[11]);var inst_25846 = (state_25907[12]);var inst_25843 = (state_25907[13]);var inst_25860 = (state_25907[2]);var inst_25861 = (inst_25846 + 1);var tmp25975 = inst_25844;var tmp25976 = inst_25845;var tmp25977 = inst_25843;var inst_25843__$1 = tmp25977;var inst_25844__$1 = tmp25975;var inst_25845__$1 = tmp25976;var inst_25846__$1 = inst_25861;var state_25907__$1 = (function (){var statearr_25982 = state_25907;(statearr_25982[31] = inst_25860);
(statearr_25982[10] = inst_25844__$1);
(statearr_25982[11] = inst_25845__$1);
(statearr_25982[12] = inst_25846__$1);
(statearr_25982[13] = inst_25843__$1);
return statearr_25982;
})();var statearr_25983_26044 = state_25907__$1;(statearr_25983_26044[2] = null);
(statearr_25983_26044[1] = 25);
return cljs.core.constant$keyword$272;
} else
{if((state_val_25908 === 31))
{var inst_25851 = (state_25907[8]);var inst_25852 = (state_25907[2]);var inst_25853 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25854 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25851);var state_25907__$1 = (function (){var statearr_25984 = state_25907;(statearr_25984[32] = inst_25853);
(statearr_25984[33] = inst_25852);
return statearr_25984;
})();var statearr_25985_26045 = state_25907__$1;(statearr_25985_26045[2] = inst_25854);
cljs.core.async.impl.ioc_helpers.process_exception(state_25907__$1);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_25989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25989[0] = state_machine__5507__auto__);
(statearr_25989[1] = 1);
return statearr_25989;
});
var state_machine__5507__auto____1 = (function (state_25907){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25907);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25990){if((e25990 instanceof Object))
{var ex__5510__auto__ = e25990;var statearr_25991_26046 = state_25907;(statearr_25991_26046[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25907);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e25990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__26047 = state_25907;
state_25907 = G__26047;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25907){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25992 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25993);
return statearr_25992;
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
cljs.core.async.Mix = (function (){var obj26049 = {};return obj26049;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,null,cljs.core.constant$keyword$280,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$281);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$280);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$281,chs);var pauses = pick(cljs.core.constant$keyword$279,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$282,solos,cljs.core.constant$keyword$283,pick(cljs.core.constant$keyword$280,chs),cljs.core.constant$keyword$284,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$279)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t26159 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26159 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26160){
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
this.meta26160 = meta26160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26159.cljs$lang$type = true;
cljs.core.async.t26159.cljs$lang$ctorStr = "cljs.core.async/t26159";
cljs.core.async.t26159.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t26159");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26159.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26159.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26159.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26159.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26159.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26159.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26159.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26161){var self__ = this;
var _26161__$1 = this;return self__.meta26160;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26161,meta26160__$1){var self__ = this;
var _26161__$1 = this;return (new cljs.core.async.t26159(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26160__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26159 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26159(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26160){return (new cljs.core.async.t26159(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26160));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26159(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___26268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26226){var state_val_26227 = (state_26226[1]);if((state_val_26227 === 1))
{var inst_26165 = (state_26226[7]);var inst_26165__$1 = calc_state();var inst_26166 = cljs.core.seq_QMARK_(inst_26165__$1);var state_26226__$1 = (function (){var statearr_26228 = state_26226;(statearr_26228[7] = inst_26165__$1);
return statearr_26228;
})();if(inst_26166)
{var statearr_26229_26269 = state_26226__$1;(statearr_26229_26269[1] = 2);
} else
{var statearr_26230_26270 = state_26226__$1;(statearr_26230_26270[1] = 3);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 2))
{var inst_26165 = (state_26226[7]);var inst_26168 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26165);var state_26226__$1 = state_26226;var statearr_26231_26271 = state_26226__$1;(statearr_26231_26271[2] = inst_26168);
(statearr_26231_26271[1] = 4);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 3))
{var inst_26165 = (state_26226[7]);var state_26226__$1 = state_26226;var statearr_26232_26272 = state_26226__$1;(statearr_26232_26272[2] = inst_26165);
(statearr_26232_26272[1] = 4);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 4))
{var inst_26165 = (state_26226[7]);var inst_26171 = (state_26226[2]);var inst_26172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26171,cljs.core.constant$keyword$284);var inst_26173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26171,cljs.core.constant$keyword$283);var inst_26174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26171,cljs.core.constant$keyword$282);var inst_26175 = inst_26165;var state_26226__$1 = (function (){var statearr_26233 = state_26226;(statearr_26233[8] = inst_26172);
(statearr_26233[9] = inst_26174);
(statearr_26233[10] = inst_26173);
(statearr_26233[11] = inst_26175);
return statearr_26233;
})();var statearr_26234_26273 = state_26226__$1;(statearr_26234_26273[2] = null);
(statearr_26234_26273[1] = 5);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 5))
{var inst_26175 = (state_26226[11]);var inst_26178 = cljs.core.seq_QMARK_(inst_26175);var state_26226__$1 = state_26226;if(inst_26178)
{var statearr_26235_26274 = state_26226__$1;(statearr_26235_26274[1] = 7);
} else
{var statearr_26236_26275 = state_26226__$1;(statearr_26236_26275[1] = 8);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 6))
{var inst_26224 = (state_26226[2]);var state_26226__$1 = state_26226;return cljs.core.async.impl.ioc_helpers.return_chan(state_26226__$1,inst_26224);
} else
{if((state_val_26227 === 7))
{var inst_26175 = (state_26226[11]);var inst_26180 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26175);var state_26226__$1 = state_26226;var statearr_26237_26276 = state_26226__$1;(statearr_26237_26276[2] = inst_26180);
(statearr_26237_26276[1] = 9);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 8))
{var inst_26175 = (state_26226[11]);var state_26226__$1 = state_26226;var statearr_26238_26277 = state_26226__$1;(statearr_26238_26277[2] = inst_26175);
(statearr_26238_26277[1] = 9);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 9))
{var inst_26183 = (state_26226[12]);var inst_26183__$1 = (state_26226[2]);var inst_26184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26183__$1,cljs.core.constant$keyword$284);var inst_26185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26183__$1,cljs.core.constant$keyword$283);var inst_26186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26183__$1,cljs.core.constant$keyword$282);var state_26226__$1 = (function (){var statearr_26239 = state_26226;(statearr_26239[13] = inst_26185);
(statearr_26239[14] = inst_26186);
(statearr_26239[12] = inst_26183__$1);
return statearr_26239;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26226__$1,10,inst_26184);
} else
{if((state_val_26227 === 10))
{var inst_26190 = (state_26226[15]);var inst_26191 = (state_26226[16]);var inst_26189 = (state_26226[2]);var inst_26190__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26189,0,null);var inst_26191__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26189,1,null);var inst_26192 = (inst_26190__$1 == null);var inst_26193 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26191__$1,change);var inst_26194 = (inst_26192) || (inst_26193);var state_26226__$1 = (function (){var statearr_26240 = state_26226;(statearr_26240[15] = inst_26190__$1);
(statearr_26240[16] = inst_26191__$1);
return statearr_26240;
})();if(cljs.core.truth_(inst_26194))
{var statearr_26241_26278 = state_26226__$1;(statearr_26241_26278[1] = 11);
} else
{var statearr_26242_26279 = state_26226__$1;(statearr_26242_26279[1] = 12);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 11))
{var inst_26190 = (state_26226[15]);var inst_26196 = (inst_26190 == null);var state_26226__$1 = state_26226;if(cljs.core.truth_(inst_26196))
{var statearr_26243_26280 = state_26226__$1;(statearr_26243_26280[1] = 14);
} else
{var statearr_26244_26281 = state_26226__$1;(statearr_26244_26281[1] = 15);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 12))
{var inst_26186 = (state_26226[14]);var inst_26191 = (state_26226[16]);var inst_26205 = (state_26226[17]);var inst_26205__$1 = (inst_26186.cljs$core$IFn$_invoke$arity$1 ? inst_26186.cljs$core$IFn$_invoke$arity$1(inst_26191) : inst_26186.call(null,inst_26191));var state_26226__$1 = (function (){var statearr_26245 = state_26226;(statearr_26245[17] = inst_26205__$1);
return statearr_26245;
})();if(cljs.core.truth_(inst_26205__$1))
{var statearr_26246_26282 = state_26226__$1;(statearr_26246_26282[1] = 17);
} else
{var statearr_26247_26283 = state_26226__$1;(statearr_26247_26283[1] = 18);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 13))
{var inst_26222 = (state_26226[2]);var state_26226__$1 = state_26226;var statearr_26248_26284 = state_26226__$1;(statearr_26248_26284[2] = inst_26222);
(statearr_26248_26284[1] = 6);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 14))
{var inst_26191 = (state_26226[16]);var inst_26198 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26191);var state_26226__$1 = state_26226;var statearr_26249_26285 = state_26226__$1;(statearr_26249_26285[2] = inst_26198);
(statearr_26249_26285[1] = 16);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 15))
{var state_26226__$1 = state_26226;var statearr_26250_26286 = state_26226__$1;(statearr_26250_26286[2] = null);
(statearr_26250_26286[1] = 16);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 16))
{var inst_26201 = (state_26226[2]);var inst_26202 = calc_state();var inst_26175 = inst_26202;var state_26226__$1 = (function (){var statearr_26251 = state_26226;(statearr_26251[18] = inst_26201);
(statearr_26251[11] = inst_26175);
return statearr_26251;
})();var statearr_26252_26287 = state_26226__$1;(statearr_26252_26287[2] = null);
(statearr_26252_26287[1] = 5);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 17))
{var inst_26205 = (state_26226[17]);var state_26226__$1 = state_26226;var statearr_26253_26288 = state_26226__$1;(statearr_26253_26288[2] = inst_26205);
(statearr_26253_26288[1] = 19);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 18))
{var inst_26185 = (state_26226[13]);var inst_26186 = (state_26226[14]);var inst_26191 = (state_26226[16]);var inst_26208 = cljs.core.empty_QMARK_(inst_26186);var inst_26209 = (inst_26185.cljs$core$IFn$_invoke$arity$1 ? inst_26185.cljs$core$IFn$_invoke$arity$1(inst_26191) : inst_26185.call(null,inst_26191));var inst_26210 = cljs.core.not(inst_26209);var inst_26211 = (inst_26208) && (inst_26210);var state_26226__$1 = state_26226;var statearr_26254_26289 = state_26226__$1;(statearr_26254_26289[2] = inst_26211);
(statearr_26254_26289[1] = 19);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 19))
{var inst_26213 = (state_26226[2]);var state_26226__$1 = state_26226;if(cljs.core.truth_(inst_26213))
{var statearr_26255_26290 = state_26226__$1;(statearr_26255_26290[1] = 20);
} else
{var statearr_26256_26291 = state_26226__$1;(statearr_26256_26291[1] = 21);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 20))
{var inst_26190 = (state_26226[15]);var state_26226__$1 = state_26226;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26226__$1,23,out,inst_26190);
} else
{if((state_val_26227 === 21))
{var state_26226__$1 = state_26226;var statearr_26257_26292 = state_26226__$1;(statearr_26257_26292[2] = null);
(statearr_26257_26292[1] = 22);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 22))
{var inst_26183 = (state_26226[12]);var inst_26219 = (state_26226[2]);var inst_26175 = inst_26183;var state_26226__$1 = (function (){var statearr_26258 = state_26226;(statearr_26258[19] = inst_26219);
(statearr_26258[11] = inst_26175);
return statearr_26258;
})();var statearr_26259_26293 = state_26226__$1;(statearr_26259_26293[2] = null);
(statearr_26259_26293[1] = 5);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26227 === 23))
{var inst_26216 = (state_26226[2]);var state_26226__$1 = state_26226;var statearr_26260_26294 = state_26226__$1;(statearr_26260_26294[2] = inst_26216);
(statearr_26260_26294[1] = 22);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_26264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26264[0] = state_machine__5507__auto__);
(statearr_26264[1] = 1);
return statearr_26264;
});
var state_machine__5507__auto____1 = (function (state_26226){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26226);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26265){if((e26265 instanceof Object))
{var ex__5510__auto__ = e26265;var statearr_26266_26295 = state_26226;(statearr_26266_26295[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26226);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e26265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__26296 = state_26226;
state_26226 = G__26296;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26226){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26267 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26268);
return statearr_26267;
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
cljs.core.async.Pub = (function (){var obj26298 = {};return obj26298;
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
return (function (p1__26299_SHARP_){if(cljs.core.truth_((p1__26299_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26299_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__26299_SHARP_.call(null,topic))))
{return p1__26299_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26299_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26424 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26424 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26425){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26425 = meta26425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26424.cljs$lang$type = true;
cljs.core.async.t26424.cljs$lang$ctorStr = "cljs.core.async/t26424";
cljs.core.async.t26424.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t26424");
});})(mults,ensure_mult))
;
cljs.core.async.t26424.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26424.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26424.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26424.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26424.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26424.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26426){var self__ = this;
var _26426__$1 = this;return self__.meta26425;
});})(mults,ensure_mult))
;
cljs.core.async.t26424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26426,meta26425__$1){var self__ = this;
var _26426__$1 = this;return (new cljs.core.async.t26424(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26425__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26424 = ((function (mults,ensure_mult){
return (function __GT_t26424(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26425){return (new cljs.core.async.t26424(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26425));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26424(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___26548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26500){var state_val_26501 = (state_26500[1]);if((state_val_26501 === 1))
{var state_26500__$1 = state_26500;var statearr_26502_26549 = state_26500__$1;(statearr_26502_26549[2] = null);
(statearr_26502_26549[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 2))
{var state_26500__$1 = state_26500;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26500__$1,4,ch);
} else
{if((state_val_26501 === 3))
{var inst_26498 = (state_26500[2]);var state_26500__$1 = state_26500;return cljs.core.async.impl.ioc_helpers.return_chan(state_26500__$1,inst_26498);
} else
{if((state_val_26501 === 4))
{var inst_26429 = (state_26500[7]);var inst_26429__$1 = (state_26500[2]);var inst_26430 = (inst_26429__$1 == null);var state_26500__$1 = (function (){var statearr_26503 = state_26500;(statearr_26503[7] = inst_26429__$1);
return statearr_26503;
})();if(cljs.core.truth_(inst_26430))
{var statearr_26504_26550 = state_26500__$1;(statearr_26504_26550[1] = 5);
} else
{var statearr_26505_26551 = state_26500__$1;(statearr_26505_26551[1] = 6);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 5))
{var inst_26436 = cljs.core.deref(mults);var inst_26437 = cljs.core.vals(inst_26436);var inst_26438 = cljs.core.seq(inst_26437);var inst_26439 = inst_26438;var inst_26440 = null;var inst_26441 = 0;var inst_26442 = 0;var state_26500__$1 = (function (){var statearr_26506 = state_26500;(statearr_26506[8] = inst_26441);
(statearr_26506[9] = inst_26442);
(statearr_26506[10] = inst_26440);
(statearr_26506[11] = inst_26439);
return statearr_26506;
})();var statearr_26507_26552 = state_26500__$1;(statearr_26507_26552[2] = null);
(statearr_26507_26552[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 6))
{var inst_26479 = (state_26500[12]);var inst_26429 = (state_26500[7]);var inst_26477 = (state_26500[13]);var inst_26477__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_26429) : topic_fn.call(null,inst_26429));var inst_26478 = cljs.core.deref(mults);var inst_26479__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26478,inst_26477__$1);var state_26500__$1 = (function (){var statearr_26508 = state_26500;(statearr_26508[12] = inst_26479__$1);
(statearr_26508[13] = inst_26477__$1);
return statearr_26508;
})();if(cljs.core.truth_(inst_26479__$1))
{var statearr_26509_26553 = state_26500__$1;(statearr_26509_26553[1] = 19);
} else
{var statearr_26510_26554 = state_26500__$1;(statearr_26510_26554[1] = 20);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 7))
{var inst_26496 = (state_26500[2]);var state_26500__$1 = state_26500;var statearr_26511_26555 = state_26500__$1;(statearr_26511_26555[2] = inst_26496);
(statearr_26511_26555[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 8))
{var inst_26441 = (state_26500[8]);var inst_26442 = (state_26500[9]);var inst_26444 = (inst_26442 < inst_26441);var inst_26445 = inst_26444;var state_26500__$1 = state_26500;if(cljs.core.truth_(inst_26445))
{var statearr_26515_26556 = state_26500__$1;(statearr_26515_26556[1] = 10);
} else
{var statearr_26516_26557 = state_26500__$1;(statearr_26516_26557[1] = 11);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 9))
{var inst_26475 = (state_26500[2]);var state_26500__$1 = state_26500;var statearr_26517_26558 = state_26500__$1;(statearr_26517_26558[2] = inst_26475);
(statearr_26517_26558[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 10))
{var inst_26441 = (state_26500[8]);var inst_26442 = (state_26500[9]);var inst_26440 = (state_26500[10]);var inst_26439 = (state_26500[11]);var inst_26447 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26440,inst_26442);var inst_26448 = cljs.core.async.muxch_STAR_(inst_26447);var inst_26449 = cljs.core.async.close_BANG_(inst_26448);var inst_26450 = (inst_26442 + 1);var tmp26512 = inst_26441;var tmp26513 = inst_26440;var tmp26514 = inst_26439;var inst_26439__$1 = tmp26514;var inst_26440__$1 = tmp26513;var inst_26441__$1 = tmp26512;var inst_26442__$1 = inst_26450;var state_26500__$1 = (function (){var statearr_26518 = state_26500;(statearr_26518[8] = inst_26441__$1);
(statearr_26518[9] = inst_26442__$1);
(statearr_26518[14] = inst_26449);
(statearr_26518[10] = inst_26440__$1);
(statearr_26518[11] = inst_26439__$1);
return statearr_26518;
})();var statearr_26519_26559 = state_26500__$1;(statearr_26519_26559[2] = null);
(statearr_26519_26559[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 11))
{var inst_26453 = (state_26500[15]);var inst_26439 = (state_26500[11]);var inst_26453__$1 = cljs.core.seq(inst_26439);var state_26500__$1 = (function (){var statearr_26520 = state_26500;(statearr_26520[15] = inst_26453__$1);
return statearr_26520;
})();if(inst_26453__$1)
{var statearr_26521_26560 = state_26500__$1;(statearr_26521_26560[1] = 13);
} else
{var statearr_26522_26561 = state_26500__$1;(statearr_26522_26561[1] = 14);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 12))
{var inst_26473 = (state_26500[2]);var state_26500__$1 = state_26500;var statearr_26523_26562 = state_26500__$1;(statearr_26523_26562[2] = inst_26473);
(statearr_26523_26562[1] = 9);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 13))
{var inst_26453 = (state_26500[15]);var inst_26455 = cljs.core.chunked_seq_QMARK_(inst_26453);var state_26500__$1 = state_26500;if(inst_26455)
{var statearr_26524_26563 = state_26500__$1;(statearr_26524_26563[1] = 16);
} else
{var statearr_26525_26564 = state_26500__$1;(statearr_26525_26564[1] = 17);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 14))
{var state_26500__$1 = state_26500;var statearr_26526_26565 = state_26500__$1;(statearr_26526_26565[2] = null);
(statearr_26526_26565[1] = 15);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 15))
{var inst_26471 = (state_26500[2]);var state_26500__$1 = state_26500;var statearr_26527_26566 = state_26500__$1;(statearr_26527_26566[2] = inst_26471);
(statearr_26527_26566[1] = 12);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 16))
{var inst_26453 = (state_26500[15]);var inst_26457 = cljs.core.chunk_first(inst_26453);var inst_26458 = cljs.core.chunk_rest(inst_26453);var inst_26459 = cljs.core.count(inst_26457);var inst_26439 = inst_26458;var inst_26440 = inst_26457;var inst_26441 = inst_26459;var inst_26442 = 0;var state_26500__$1 = (function (){var statearr_26528 = state_26500;(statearr_26528[8] = inst_26441);
(statearr_26528[9] = inst_26442);
(statearr_26528[10] = inst_26440);
(statearr_26528[11] = inst_26439);
return statearr_26528;
})();var statearr_26529_26567 = state_26500__$1;(statearr_26529_26567[2] = null);
(statearr_26529_26567[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 17))
{var inst_26453 = (state_26500[15]);var inst_26462 = cljs.core.first(inst_26453);var inst_26463 = cljs.core.async.muxch_STAR_(inst_26462);var inst_26464 = cljs.core.async.close_BANG_(inst_26463);var inst_26465 = cljs.core.next(inst_26453);var inst_26439 = inst_26465;var inst_26440 = null;var inst_26441 = 0;var inst_26442 = 0;var state_26500__$1 = (function (){var statearr_26530 = state_26500;(statearr_26530[16] = inst_26464);
(statearr_26530[8] = inst_26441);
(statearr_26530[9] = inst_26442);
(statearr_26530[10] = inst_26440);
(statearr_26530[11] = inst_26439);
return statearr_26530;
})();var statearr_26531_26568 = state_26500__$1;(statearr_26531_26568[2] = null);
(statearr_26531_26568[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 18))
{var inst_26468 = (state_26500[2]);var state_26500__$1 = state_26500;var statearr_26532_26569 = state_26500__$1;(statearr_26532_26569[2] = inst_26468);
(statearr_26532_26569[1] = 15);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 19))
{var state_26500__$1 = state_26500;var statearr_26533_26570 = state_26500__$1;(statearr_26533_26570[2] = null);
(statearr_26533_26570[1] = 24);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 20))
{var state_26500__$1 = state_26500;var statearr_26534_26571 = state_26500__$1;(statearr_26534_26571[2] = null);
(statearr_26534_26571[1] = 21);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 21))
{var inst_26493 = (state_26500[2]);var state_26500__$1 = (function (){var statearr_26535 = state_26500;(statearr_26535[17] = inst_26493);
return statearr_26535;
})();var statearr_26536_26572 = state_26500__$1;(statearr_26536_26572[2] = null);
(statearr_26536_26572[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 22))
{var inst_26490 = (state_26500[2]);var state_26500__$1 = state_26500;var statearr_26537_26573 = state_26500__$1;(statearr_26537_26573[2] = inst_26490);
(statearr_26537_26573[1] = 21);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 23))
{var inst_26477 = (state_26500[13]);var inst_26481 = (state_26500[2]);var inst_26482 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26477);var state_26500__$1 = (function (){var statearr_26538 = state_26500;(statearr_26538[18] = inst_26481);
return statearr_26538;
})();var statearr_26539_26574 = state_26500__$1;(statearr_26539_26574[2] = inst_26482);
cljs.core.async.impl.ioc_helpers.process_exception(state_26500__$1);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26501 === 24))
{var inst_26479 = (state_26500[12]);var inst_26429 = (state_26500[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26500,23,Object,null,22);var inst_26486 = cljs.core.async.muxch_STAR_(inst_26479);var state_26500__$1 = state_26500;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26500__$1,25,inst_26486,inst_26429);
} else
{if((state_val_26501 === 25))
{var inst_26488 = (state_26500[2]);var state_26500__$1 = state_26500;var statearr_26540_26575 = state_26500__$1;(statearr_26540_26575[2] = inst_26488);
cljs.core.async.impl.ioc_helpers.process_exception(state_26500__$1);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_26544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26544[0] = state_machine__5507__auto__);
(statearr_26544[1] = 1);
return statearr_26544;
});
var state_machine__5507__auto____1 = (function (state_26500){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26500);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26545){if((e26545 instanceof Object))
{var ex__5510__auto__ = e26545;var statearr_26546_26576 = state_26500;(statearr_26546_26576[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26500);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e26545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__26577 = state_26500;
state_26500 = G__26577;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26500){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26547 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26548);
return statearr_26547;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___26714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26684){var state_val_26685 = (state_26684[1]);if((state_val_26685 === 1))
{var state_26684__$1 = state_26684;var statearr_26686_26715 = state_26684__$1;(statearr_26686_26715[2] = null);
(statearr_26686_26715[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 2))
{var inst_26647 = cljs.core.reset_BANG_(dctr,cnt);var inst_26648 = 0;var state_26684__$1 = (function (){var statearr_26687 = state_26684;(statearr_26687[7] = inst_26647);
(statearr_26687[8] = inst_26648);
return statearr_26687;
})();var statearr_26688_26716 = state_26684__$1;(statearr_26688_26716[2] = null);
(statearr_26688_26716[1] = 4);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 3))
{var inst_26682 = (state_26684[2]);var state_26684__$1 = state_26684;return cljs.core.async.impl.ioc_helpers.return_chan(state_26684__$1,inst_26682);
} else
{if((state_val_26685 === 4))
{var inst_26648 = (state_26684[8]);var inst_26650 = (inst_26648 < cnt);var state_26684__$1 = state_26684;if(cljs.core.truth_(inst_26650))
{var statearr_26689_26717 = state_26684__$1;(statearr_26689_26717[1] = 6);
} else
{var statearr_26690_26718 = state_26684__$1;(statearr_26690_26718[1] = 7);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 5))
{var inst_26668 = (state_26684[2]);var state_26684__$1 = (function (){var statearr_26691 = state_26684;(statearr_26691[9] = inst_26668);
return statearr_26691;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26684__$1,12,dchan);
} else
{if((state_val_26685 === 6))
{var state_26684__$1 = state_26684;var statearr_26692_26719 = state_26684__$1;(statearr_26692_26719[2] = null);
(statearr_26692_26719[1] = 11);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 7))
{var state_26684__$1 = state_26684;var statearr_26693_26720 = state_26684__$1;(statearr_26693_26720[2] = null);
(statearr_26693_26720[1] = 8);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 8))
{var inst_26666 = (state_26684[2]);var state_26684__$1 = state_26684;var statearr_26694_26721 = state_26684__$1;(statearr_26694_26721[2] = inst_26666);
(statearr_26694_26721[1] = 5);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 9))
{var inst_26648 = (state_26684[8]);var inst_26661 = (state_26684[2]);var inst_26662 = (inst_26648 + 1);var inst_26648__$1 = inst_26662;var state_26684__$1 = (function (){var statearr_26695 = state_26684;(statearr_26695[10] = inst_26661);
(statearr_26695[8] = inst_26648__$1);
return statearr_26695;
})();var statearr_26696_26722 = state_26684__$1;(statearr_26696_26722[2] = null);
(statearr_26696_26722[1] = 4);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 10))
{var inst_26652 = (state_26684[2]);var inst_26653 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26684__$1 = (function (){var statearr_26697 = state_26684;(statearr_26697[11] = inst_26652);
return statearr_26697;
})();var statearr_26698_26723 = state_26684__$1;(statearr_26698_26723[2] = inst_26653);
cljs.core.async.impl.ioc_helpers.process_exception(state_26684__$1);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 11))
{var inst_26648 = (state_26684[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26684,10,Object,null,9);var inst_26657 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26648) : chs__$1.call(null,inst_26648));var inst_26658 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26648) : done.call(null,inst_26648));var inst_26659 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26657,inst_26658);var state_26684__$1 = state_26684;var statearr_26699_26724 = state_26684__$1;(statearr_26699_26724[2] = inst_26659);
cljs.core.async.impl.ioc_helpers.process_exception(state_26684__$1);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 12))
{var inst_26670 = (state_26684[12]);var inst_26670__$1 = (state_26684[2]);var inst_26671 = cljs.core.some(cljs.core.nil_QMARK_,inst_26670__$1);var state_26684__$1 = (function (){var statearr_26700 = state_26684;(statearr_26700[12] = inst_26670__$1);
return statearr_26700;
})();if(cljs.core.truth_(inst_26671))
{var statearr_26701_26725 = state_26684__$1;(statearr_26701_26725[1] = 13);
} else
{var statearr_26702_26726 = state_26684__$1;(statearr_26702_26726[1] = 14);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 13))
{var inst_26673 = cljs.core.async.close_BANG_(out);var state_26684__$1 = state_26684;var statearr_26703_26727 = state_26684__$1;(statearr_26703_26727[2] = inst_26673);
(statearr_26703_26727[1] = 15);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 14))
{var inst_26670 = (state_26684[12]);var inst_26675 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26670);var state_26684__$1 = state_26684;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26684__$1,16,out,inst_26675);
} else
{if((state_val_26685 === 15))
{var inst_26680 = (state_26684[2]);var state_26684__$1 = state_26684;var statearr_26704_26728 = state_26684__$1;(statearr_26704_26728[2] = inst_26680);
(statearr_26704_26728[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26685 === 16))
{var inst_26677 = (state_26684[2]);var state_26684__$1 = (function (){var statearr_26705 = state_26684;(statearr_26705[13] = inst_26677);
return statearr_26705;
})();var statearr_26706_26729 = state_26684__$1;(statearr_26706_26729[2] = null);
(statearr_26706_26729[1] = 2);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_26710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26710[0] = state_machine__5507__auto__);
(statearr_26710[1] = 1);
return statearr_26710;
});
var state_machine__5507__auto____1 = (function (state_26684){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26684);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26711){if((e26711 instanceof Object))
{var ex__5510__auto__ = e26711;var statearr_26712_26730 = state_26684;(statearr_26712_26730[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26684);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e26711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__26731 = state_26684;
state_26684 = G__26731;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26684){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26713 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26714);
return statearr_26713;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26815){var state_val_26816 = (state_26815[1]);if((state_val_26816 === 1))
{var inst_26786 = cljs.core.vec(chs);var inst_26787 = inst_26786;var state_26815__$1 = (function (){var statearr_26817 = state_26815;(statearr_26817[7] = inst_26787);
return statearr_26817;
})();var statearr_26818_26840 = state_26815__$1;(statearr_26818_26840[2] = null);
(statearr_26818_26840[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26816 === 2))
{var inst_26787 = (state_26815[7]);var inst_26789 = cljs.core.count(inst_26787);var inst_26790 = (inst_26789 > 0);var state_26815__$1 = state_26815;if(cljs.core.truth_(inst_26790))
{var statearr_26819_26841 = state_26815__$1;(statearr_26819_26841[1] = 4);
} else
{var statearr_26820_26842 = state_26815__$1;(statearr_26820_26842[1] = 5);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26816 === 3))
{var inst_26813 = (state_26815[2]);var state_26815__$1 = state_26815;return cljs.core.async.impl.ioc_helpers.return_chan(state_26815__$1,inst_26813);
} else
{if((state_val_26816 === 4))
{var inst_26787 = (state_26815[7]);var state_26815__$1 = state_26815;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26815__$1,7,inst_26787);
} else
{if((state_val_26816 === 5))
{var inst_26809 = cljs.core.async.close_BANG_(out);var state_26815__$1 = state_26815;var statearr_26821_26843 = state_26815__$1;(statearr_26821_26843[2] = inst_26809);
(statearr_26821_26843[1] = 6);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26816 === 6))
{var inst_26811 = (state_26815[2]);var state_26815__$1 = state_26815;var statearr_26822_26844 = state_26815__$1;(statearr_26822_26844[2] = inst_26811);
(statearr_26822_26844[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26816 === 7))
{var inst_26795 = (state_26815[8]);var inst_26794 = (state_26815[9]);var inst_26794__$1 = (state_26815[2]);var inst_26795__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26794__$1,0,null);var inst_26796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26794__$1,1,null);var inst_26797 = (inst_26795__$1 == null);var state_26815__$1 = (function (){var statearr_26823 = state_26815;(statearr_26823[8] = inst_26795__$1);
(statearr_26823[10] = inst_26796);
(statearr_26823[9] = inst_26794__$1);
return statearr_26823;
})();if(cljs.core.truth_(inst_26797))
{var statearr_26824_26845 = state_26815__$1;(statearr_26824_26845[1] = 8);
} else
{var statearr_26825_26846 = state_26815__$1;(statearr_26825_26846[1] = 9);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26816 === 8))
{var inst_26795 = (state_26815[8]);var inst_26796 = (state_26815[10]);var inst_26794 = (state_26815[9]);var inst_26787 = (state_26815[7]);var inst_26799 = (function (){var c = inst_26796;var v = inst_26795;var vec__26792 = inst_26794;var cs = inst_26787;return ((function (c,v,vec__26792,cs,inst_26795,inst_26796,inst_26794,inst_26787,state_val_26816){
return (function (p1__26732_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26732_SHARP_);
});
;})(c,v,vec__26792,cs,inst_26795,inst_26796,inst_26794,inst_26787,state_val_26816))
})();var inst_26800 = cljs.core.filterv(inst_26799,inst_26787);var inst_26787__$1 = inst_26800;var state_26815__$1 = (function (){var statearr_26826 = state_26815;(statearr_26826[7] = inst_26787__$1);
return statearr_26826;
})();var statearr_26827_26847 = state_26815__$1;(statearr_26827_26847[2] = null);
(statearr_26827_26847[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26816 === 9))
{var inst_26795 = (state_26815[8]);var state_26815__$1 = state_26815;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26815__$1,11,out,inst_26795);
} else
{if((state_val_26816 === 10))
{var inst_26807 = (state_26815[2]);var state_26815__$1 = state_26815;var statearr_26829_26848 = state_26815__$1;(statearr_26829_26848[2] = inst_26807);
(statearr_26829_26848[1] = 6);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26816 === 11))
{var inst_26787 = (state_26815[7]);var inst_26804 = (state_26815[2]);var tmp26828 = inst_26787;var inst_26787__$1 = tmp26828;var state_26815__$1 = (function (){var statearr_26830 = state_26815;(statearr_26830[7] = inst_26787__$1);
(statearr_26830[11] = inst_26804);
return statearr_26830;
})();var statearr_26831_26849 = state_26815__$1;(statearr_26831_26849[2] = null);
(statearr_26831_26849[1] = 2);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_26835 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26835[0] = state_machine__5507__auto__);
(statearr_26835[1] = 1);
return statearr_26835;
});
var state_machine__5507__auto____1 = (function (state_26815){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26815);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26836){if((e26836 instanceof Object))
{var ex__5510__auto__ = e26836;var statearr_26837_26850 = state_26815;(statearr_26837_26850[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26815);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e26836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__26851 = state_26815;
state_26815 = G__26851;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26815){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26838 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26839);
return statearr_26838;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26921){var state_val_26922 = (state_26921[1]);if((state_val_26922 === 1))
{var inst_26898 = 0;var state_26921__$1 = (function (){var statearr_26923 = state_26921;(statearr_26923[7] = inst_26898);
return statearr_26923;
})();var statearr_26924_26945 = state_26921__$1;(statearr_26924_26945[2] = null);
(statearr_26924_26945[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26922 === 2))
{var inst_26898 = (state_26921[7]);var inst_26900 = (inst_26898 < n);var state_26921__$1 = state_26921;if(cljs.core.truth_(inst_26900))
{var statearr_26925_26946 = state_26921__$1;(statearr_26925_26946[1] = 4);
} else
{var statearr_26926_26947 = state_26921__$1;(statearr_26926_26947[1] = 5);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26922 === 3))
{var inst_26918 = (state_26921[2]);var inst_26919 = cljs.core.async.close_BANG_(out);var state_26921__$1 = (function (){var statearr_26927 = state_26921;(statearr_26927[8] = inst_26918);
return statearr_26927;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26921__$1,inst_26919);
} else
{if((state_val_26922 === 4))
{var state_26921__$1 = state_26921;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26921__$1,7,ch);
} else
{if((state_val_26922 === 5))
{var state_26921__$1 = state_26921;var statearr_26928_26948 = state_26921__$1;(statearr_26928_26948[2] = null);
(statearr_26928_26948[1] = 6);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26922 === 6))
{var inst_26916 = (state_26921[2]);var state_26921__$1 = state_26921;var statearr_26929_26949 = state_26921__$1;(statearr_26929_26949[2] = inst_26916);
(statearr_26929_26949[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26922 === 7))
{var inst_26903 = (state_26921[9]);var inst_26903__$1 = (state_26921[2]);var inst_26904 = (inst_26903__$1 == null);var inst_26905 = cljs.core.not(inst_26904);var state_26921__$1 = (function (){var statearr_26930 = state_26921;(statearr_26930[9] = inst_26903__$1);
return statearr_26930;
})();if(inst_26905)
{var statearr_26931_26950 = state_26921__$1;(statearr_26931_26950[1] = 8);
} else
{var statearr_26932_26951 = state_26921__$1;(statearr_26932_26951[1] = 9);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_26922 === 8))
{var inst_26903 = (state_26921[9]);var state_26921__$1 = state_26921;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26921__$1,11,out,inst_26903);
} else
{if((state_val_26922 === 9))
{var state_26921__$1 = state_26921;var statearr_26933_26952 = state_26921__$1;(statearr_26933_26952[2] = null);
(statearr_26933_26952[1] = 10);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26922 === 10))
{var inst_26913 = (state_26921[2]);var state_26921__$1 = state_26921;var statearr_26934_26953 = state_26921__$1;(statearr_26934_26953[2] = inst_26913);
(statearr_26934_26953[1] = 6);
return cljs.core.constant$keyword$272;
} else
{if((state_val_26922 === 11))
{var inst_26898 = (state_26921[7]);var inst_26908 = (state_26921[2]);var inst_26909 = (inst_26898 + 1);var inst_26898__$1 = inst_26909;var state_26921__$1 = (function (){var statearr_26935 = state_26921;(statearr_26935[7] = inst_26898__$1);
(statearr_26935[10] = inst_26908);
return statearr_26935;
})();var statearr_26936_26954 = state_26921__$1;(statearr_26936_26954[2] = null);
(statearr_26936_26954[1] = 2);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_26940 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26940[0] = state_machine__5507__auto__);
(statearr_26940[1] = 1);
return statearr_26940;
});
var state_machine__5507__auto____1 = (function (state_26921){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26921);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26941){if((e26941 instanceof Object))
{var ex__5510__auto__ = e26941;var statearr_26942_26955 = state_26921;(statearr_26942_26955[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26921);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e26941;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__26956 = state_26921;
state_26921 = G__26956;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26921){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26943 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26944);
return statearr_26943;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___27053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27028){var state_val_27029 = (state_27028[1]);if((state_val_27029 === 1))
{var inst_27005 = null;var state_27028__$1 = (function (){var statearr_27030 = state_27028;(statearr_27030[7] = inst_27005);
return statearr_27030;
})();var statearr_27031_27054 = state_27028__$1;(statearr_27031_27054[2] = null);
(statearr_27031_27054[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27029 === 2))
{var state_27028__$1 = state_27028;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27028__$1,4,ch);
} else
{if((state_val_27029 === 3))
{var inst_27025 = (state_27028[2]);var inst_27026 = cljs.core.async.close_BANG_(out);var state_27028__$1 = (function (){var statearr_27032 = state_27028;(statearr_27032[8] = inst_27025);
return statearr_27032;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_27028__$1,inst_27026);
} else
{if((state_val_27029 === 4))
{var inst_27008 = (state_27028[9]);var inst_27008__$1 = (state_27028[2]);var inst_27009 = (inst_27008__$1 == null);var inst_27010 = cljs.core.not(inst_27009);var state_27028__$1 = (function (){var statearr_27033 = state_27028;(statearr_27033[9] = inst_27008__$1);
return statearr_27033;
})();if(inst_27010)
{var statearr_27034_27055 = state_27028__$1;(statearr_27034_27055[1] = 5);
} else
{var statearr_27035_27056 = state_27028__$1;(statearr_27035_27056[1] = 6);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_27029 === 5))
{var inst_27008 = (state_27028[9]);var inst_27005 = (state_27028[7]);var inst_27012 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27008,inst_27005);var state_27028__$1 = state_27028;if(inst_27012)
{var statearr_27036_27057 = state_27028__$1;(statearr_27036_27057[1] = 8);
} else
{var statearr_27037_27058 = state_27028__$1;(statearr_27037_27058[1] = 9);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_27029 === 6))
{var state_27028__$1 = state_27028;var statearr_27039_27059 = state_27028__$1;(statearr_27039_27059[2] = null);
(statearr_27039_27059[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27029 === 7))
{var inst_27023 = (state_27028[2]);var state_27028__$1 = state_27028;var statearr_27040_27060 = state_27028__$1;(statearr_27040_27060[2] = inst_27023);
(statearr_27040_27060[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27029 === 8))
{var inst_27005 = (state_27028[7]);var tmp27038 = inst_27005;var inst_27005__$1 = tmp27038;var state_27028__$1 = (function (){var statearr_27041 = state_27028;(statearr_27041[7] = inst_27005__$1);
return statearr_27041;
})();var statearr_27042_27061 = state_27028__$1;(statearr_27042_27061[2] = null);
(statearr_27042_27061[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27029 === 9))
{var inst_27008 = (state_27028[9]);var state_27028__$1 = state_27028;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27028__$1,11,out,inst_27008);
} else
{if((state_val_27029 === 10))
{var inst_27020 = (state_27028[2]);var state_27028__$1 = state_27028;var statearr_27043_27062 = state_27028__$1;(statearr_27043_27062[2] = inst_27020);
(statearr_27043_27062[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27029 === 11))
{var inst_27008 = (state_27028[9]);var inst_27017 = (state_27028[2]);var inst_27005 = inst_27008;var state_27028__$1 = (function (){var statearr_27044 = state_27028;(statearr_27044[7] = inst_27005);
(statearr_27044[10] = inst_27017);
return statearr_27044;
})();var statearr_27045_27063 = state_27028__$1;(statearr_27045_27063[2] = null);
(statearr_27045_27063[1] = 2);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_27049 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27049[0] = state_machine__5507__auto__);
(statearr_27049[1] = 1);
return statearr_27049;
});
var state_machine__5507__auto____1 = (function (state_27028){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_27028);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27050){if((e27050 instanceof Object))
{var ex__5510__auto__ = e27050;var statearr_27051_27064 = state_27028;(statearr_27051_27064[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27028);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e27050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__27065 = state_27028;
state_27028 = G__27065;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27028){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27052 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_27052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___27053);
return statearr_27052;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___27200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27170){var state_val_27171 = (state_27170[1]);if((state_val_27171 === 1))
{var inst_27133 = (new Array(n));var inst_27134 = inst_27133;var inst_27135 = 0;var state_27170__$1 = (function (){var statearr_27172 = state_27170;(statearr_27172[7] = inst_27134);
(statearr_27172[8] = inst_27135);
return statearr_27172;
})();var statearr_27173_27201 = state_27170__$1;(statearr_27173_27201[2] = null);
(statearr_27173_27201[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27171 === 2))
{var state_27170__$1 = state_27170;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27170__$1,4,ch);
} else
{if((state_val_27171 === 3))
{var inst_27168 = (state_27170[2]);var state_27170__$1 = state_27170;return cljs.core.async.impl.ioc_helpers.return_chan(state_27170__$1,inst_27168);
} else
{if((state_val_27171 === 4))
{var inst_27138 = (state_27170[9]);var inst_27138__$1 = (state_27170[2]);var inst_27139 = (inst_27138__$1 == null);var inst_27140 = cljs.core.not(inst_27139);var state_27170__$1 = (function (){var statearr_27174 = state_27170;(statearr_27174[9] = inst_27138__$1);
return statearr_27174;
})();if(inst_27140)
{var statearr_27175_27202 = state_27170__$1;(statearr_27175_27202[1] = 5);
} else
{var statearr_27176_27203 = state_27170__$1;(statearr_27176_27203[1] = 6);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_27171 === 5))
{var inst_27134 = (state_27170[7]);var inst_27135 = (state_27170[8]);var inst_27143 = (state_27170[10]);var inst_27138 = (state_27170[9]);var inst_27142 = (inst_27134[inst_27135] = inst_27138);var inst_27143__$1 = (inst_27135 + 1);var inst_27144 = (inst_27143__$1 < n);var state_27170__$1 = (function (){var statearr_27177 = state_27170;(statearr_27177[11] = inst_27142);
(statearr_27177[10] = inst_27143__$1);
return statearr_27177;
})();if(cljs.core.truth_(inst_27144))
{var statearr_27178_27204 = state_27170__$1;(statearr_27178_27204[1] = 8);
} else
{var statearr_27179_27205 = state_27170__$1;(statearr_27179_27205[1] = 9);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_27171 === 6))
{var inst_27135 = (state_27170[8]);var inst_27156 = (inst_27135 > 0);var state_27170__$1 = state_27170;if(cljs.core.truth_(inst_27156))
{var statearr_27181_27206 = state_27170__$1;(statearr_27181_27206[1] = 12);
} else
{var statearr_27182_27207 = state_27170__$1;(statearr_27182_27207[1] = 13);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_27171 === 7))
{var inst_27166 = (state_27170[2]);var state_27170__$1 = state_27170;var statearr_27183_27208 = state_27170__$1;(statearr_27183_27208[2] = inst_27166);
(statearr_27183_27208[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27171 === 8))
{var inst_27134 = (state_27170[7]);var inst_27143 = (state_27170[10]);var tmp27180 = inst_27134;var inst_27134__$1 = tmp27180;var inst_27135 = inst_27143;var state_27170__$1 = (function (){var statearr_27184 = state_27170;(statearr_27184[7] = inst_27134__$1);
(statearr_27184[8] = inst_27135);
return statearr_27184;
})();var statearr_27185_27209 = state_27170__$1;(statearr_27185_27209[2] = null);
(statearr_27185_27209[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27171 === 9))
{var inst_27134 = (state_27170[7]);var inst_27148 = cljs.core.vec(inst_27134);var state_27170__$1 = state_27170;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27170__$1,11,out,inst_27148);
} else
{if((state_val_27171 === 10))
{var inst_27154 = (state_27170[2]);var state_27170__$1 = state_27170;var statearr_27186_27210 = state_27170__$1;(statearr_27186_27210[2] = inst_27154);
(statearr_27186_27210[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27171 === 11))
{var inst_27150 = (state_27170[2]);var inst_27151 = (new Array(n));var inst_27134 = inst_27151;var inst_27135 = 0;var state_27170__$1 = (function (){var statearr_27187 = state_27170;(statearr_27187[7] = inst_27134);
(statearr_27187[8] = inst_27135);
(statearr_27187[12] = inst_27150);
return statearr_27187;
})();var statearr_27188_27211 = state_27170__$1;(statearr_27188_27211[2] = null);
(statearr_27188_27211[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27171 === 12))
{var inst_27134 = (state_27170[7]);var inst_27158 = cljs.core.vec(inst_27134);var state_27170__$1 = state_27170;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27170__$1,15,out,inst_27158);
} else
{if((state_val_27171 === 13))
{var state_27170__$1 = state_27170;var statearr_27189_27212 = state_27170__$1;(statearr_27189_27212[2] = null);
(statearr_27189_27212[1] = 14);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27171 === 14))
{var inst_27163 = (state_27170[2]);var inst_27164 = cljs.core.async.close_BANG_(out);var state_27170__$1 = (function (){var statearr_27190 = state_27170;(statearr_27190[13] = inst_27163);
return statearr_27190;
})();var statearr_27191_27213 = state_27170__$1;(statearr_27191_27213[2] = inst_27164);
(statearr_27191_27213[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27171 === 15))
{var inst_27160 = (state_27170[2]);var state_27170__$1 = state_27170;var statearr_27192_27214 = state_27170__$1;(statearr_27192_27214[2] = inst_27160);
(statearr_27192_27214[1] = 14);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_27196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27196[0] = state_machine__5507__auto__);
(statearr_27196[1] = 1);
return statearr_27196;
});
var state_machine__5507__auto____1 = (function (state_27170){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_27170);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27197){if((e27197 instanceof Object))
{var ex__5510__auto__ = e27197;var statearr_27198_27215 = state_27170;(statearr_27198_27215[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27170);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e27197;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__27216 = state_27170;
state_27170 = G__27216;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27170){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27199 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_27199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___27200);
return statearr_27199;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___27359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27329){var state_val_27330 = (state_27329[1]);if((state_val_27330 === 1))
{var inst_27288 = [];var inst_27289 = inst_27288;var inst_27290 = cljs.core.constant$keyword$285;var state_27329__$1 = (function (){var statearr_27331 = state_27329;(statearr_27331[7] = inst_27290);
(statearr_27331[8] = inst_27289);
return statearr_27331;
})();var statearr_27332_27360 = state_27329__$1;(statearr_27332_27360[2] = null);
(statearr_27332_27360[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27330 === 2))
{var state_27329__$1 = state_27329;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27329__$1,4,ch);
} else
{if((state_val_27330 === 3))
{var inst_27327 = (state_27329[2]);var state_27329__$1 = state_27329;return cljs.core.async.impl.ioc_helpers.return_chan(state_27329__$1,inst_27327);
} else
{if((state_val_27330 === 4))
{var inst_27293 = (state_27329[9]);var inst_27293__$1 = (state_27329[2]);var inst_27294 = (inst_27293__$1 == null);var inst_27295 = cljs.core.not(inst_27294);var state_27329__$1 = (function (){var statearr_27333 = state_27329;(statearr_27333[9] = inst_27293__$1);
return statearr_27333;
})();if(inst_27295)
{var statearr_27334_27361 = state_27329__$1;(statearr_27334_27361[1] = 5);
} else
{var statearr_27335_27362 = state_27329__$1;(statearr_27335_27362[1] = 6);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_27330 === 5))
{var inst_27290 = (state_27329[7]);var inst_27293 = (state_27329[9]);var inst_27297 = (state_27329[10]);var inst_27297__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_27293) : f.call(null,inst_27293));var inst_27298 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27297__$1,inst_27290);var inst_27299 = cljs.core.keyword_identical_QMARK_(inst_27290,cljs.core.constant$keyword$285);var inst_27300 = (inst_27298) || (inst_27299);var state_27329__$1 = (function (){var statearr_27336 = state_27329;(statearr_27336[10] = inst_27297__$1);
return statearr_27336;
})();if(cljs.core.truth_(inst_27300))
{var statearr_27337_27363 = state_27329__$1;(statearr_27337_27363[1] = 8);
} else
{var statearr_27338_27364 = state_27329__$1;(statearr_27338_27364[1] = 9);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_27330 === 6))
{var inst_27289 = (state_27329[8]);var inst_27314 = inst_27289.length;var inst_27315 = (inst_27314 > 0);var state_27329__$1 = state_27329;if(cljs.core.truth_(inst_27315))
{var statearr_27340_27365 = state_27329__$1;(statearr_27340_27365[1] = 12);
} else
{var statearr_27341_27366 = state_27329__$1;(statearr_27341_27366[1] = 13);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_27330 === 7))
{var inst_27325 = (state_27329[2]);var state_27329__$1 = state_27329;var statearr_27342_27367 = state_27329__$1;(statearr_27342_27367[2] = inst_27325);
(statearr_27342_27367[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27330 === 8))
{var inst_27293 = (state_27329[9]);var inst_27289 = (state_27329[8]);var inst_27297 = (state_27329[10]);var inst_27302 = inst_27289.push(inst_27293);var tmp27339 = inst_27289;var inst_27289__$1 = tmp27339;var inst_27290 = inst_27297;var state_27329__$1 = (function (){var statearr_27343 = state_27329;(statearr_27343[7] = inst_27290);
(statearr_27343[8] = inst_27289__$1);
(statearr_27343[11] = inst_27302);
return statearr_27343;
})();var statearr_27344_27368 = state_27329__$1;(statearr_27344_27368[2] = null);
(statearr_27344_27368[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27330 === 9))
{var inst_27289 = (state_27329[8]);var inst_27305 = cljs.core.vec(inst_27289);var state_27329__$1 = state_27329;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27329__$1,11,out,inst_27305);
} else
{if((state_val_27330 === 10))
{var inst_27312 = (state_27329[2]);var state_27329__$1 = state_27329;var statearr_27345_27369 = state_27329__$1;(statearr_27345_27369[2] = inst_27312);
(statearr_27345_27369[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27330 === 11))
{var inst_27293 = (state_27329[9]);var inst_27297 = (state_27329[10]);var inst_27307 = (state_27329[2]);var inst_27308 = [];var inst_27309 = inst_27308.push(inst_27293);var inst_27289 = inst_27308;var inst_27290 = inst_27297;var state_27329__$1 = (function (){var statearr_27346 = state_27329;(statearr_27346[7] = inst_27290);
(statearr_27346[8] = inst_27289);
(statearr_27346[12] = inst_27307);
(statearr_27346[13] = inst_27309);
return statearr_27346;
})();var statearr_27347_27370 = state_27329__$1;(statearr_27347_27370[2] = null);
(statearr_27347_27370[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27330 === 12))
{var inst_27289 = (state_27329[8]);var inst_27317 = cljs.core.vec(inst_27289);var state_27329__$1 = state_27329;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27329__$1,15,out,inst_27317);
} else
{if((state_val_27330 === 13))
{var state_27329__$1 = state_27329;var statearr_27348_27371 = state_27329__$1;(statearr_27348_27371[2] = null);
(statearr_27348_27371[1] = 14);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27330 === 14))
{var inst_27322 = (state_27329[2]);var inst_27323 = cljs.core.async.close_BANG_(out);var state_27329__$1 = (function (){var statearr_27349 = state_27329;(statearr_27349[14] = inst_27322);
return statearr_27349;
})();var statearr_27350_27372 = state_27329__$1;(statearr_27350_27372[2] = inst_27323);
(statearr_27350_27372[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_27330 === 15))
{var inst_27319 = (state_27329[2]);var state_27329__$1 = state_27329;var statearr_27351_27373 = state_27329__$1;(statearr_27351_27373[2] = inst_27319);
(statearr_27351_27373[1] = 14);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_27355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27355[0] = state_machine__5507__auto__);
(statearr_27355[1] = 1);
return statearr_27355;
});
var state_machine__5507__auto____1 = (function (state_27329){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_27329);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27356){if((e27356 instanceof Object))
{var ex__5510__auto__ = e27356;var statearr_27357_27374 = state_27329;(statearr_27357_27374[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27329);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e27356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__27375 = state_27329;
state_27329 = G__27375;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27329){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27358 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_27358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___27359);
return statearr_27358;
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
