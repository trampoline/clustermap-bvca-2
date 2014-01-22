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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22024 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22024 = (function (f,fn_handler,meta22025){
this.f = f;
this.fn_handler = fn_handler;
this.meta22025 = meta22025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22024.cljs$lang$type = true;
cljs.core.async.t22024.cljs$lang$ctorStr = "cljs.core.async/t22024";
cljs.core.async.t22024.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22024");
});
cljs.core.async.t22024.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22026){var self__ = this;
var _22026__$1 = this;return self__.meta22025;
});
cljs.core.async.t22024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22026,meta22025__$1){var self__ = this;
var _22026__$1 = this;return (new cljs.core.async.t22024(self__.f,self__.fn_handler,meta22025__$1));
});
cljs.core.async.__GT_t22024 = (function __GT_t22024(f__$1,fn_handler__$1,meta22025){return (new cljs.core.async.t22024(f__$1,fn_handler__$1,meta22025));
});
}
return (new cljs.core.async.t22024(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22028 = buff;if(G__22028)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__22028.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22028.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22028);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22028);
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
{var val_22029 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22029) : fn1.call(null,val_22029));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22029) : fn1.call(null,val_22029));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___22030 = n;var x_22031 = 0;while(true){
if((x_22031 < n__4248__auto___22030))
{(a[x_22031] = 0);
{
var G__22032 = (x_22031 + 1);
x_22031 = G__22032;
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
var G__22033 = (i + 1);
i = G__22033;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t22037 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22037 = (function (flag,alt_flag,meta22038){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22038 = meta22038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22037.cljs$lang$type = true;
cljs.core.async.t22037.cljs$lang$ctorStr = "cljs.core.async/t22037";
cljs.core.async.t22037.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22037");
});
cljs.core.async.t22037.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t22037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t22037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22039){var self__ = this;
var _22039__$1 = this;return self__.meta22038;
});
cljs.core.async.t22037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22039,meta22038__$1){var self__ = this;
var _22039__$1 = this;return (new cljs.core.async.t22037(self__.flag,self__.alt_flag,meta22038__$1));
});
cljs.core.async.__GT_t22037 = (function __GT_t22037(flag__$1,alt_flag__$1,meta22038){return (new cljs.core.async.t22037(flag__$1,alt_flag__$1,meta22038));
});
}
return (new cljs.core.async.t22037(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22043 = (function (cb,flag,alt_handler,meta22044){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22044 = meta22044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22043.cljs$lang$type = true;
cljs.core.async.t22043.cljs$lang$ctorStr = "cljs.core.async/t22043";
cljs.core.async.t22043.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22043");
});
cljs.core.async.t22043.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t22043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t22043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22045){var self__ = this;
var _22045__$1 = this;return self__.meta22044;
});
cljs.core.async.t22043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22045,meta22044__$1){var self__ = this;
var _22045__$1 = this;return (new cljs.core.async.t22043(self__.cb,self__.flag,self__.alt_handler,meta22044__$1));
});
cljs.core.async.__GT_t22043 = (function __GT_t22043(cb__$1,flag__$1,alt_handler__$1,meta22044){return (new cljs.core.async.t22043(cb__$1,flag__$1,alt_handler__$1,meta22044));
});
}
return (new cljs.core.async.t22043(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22046_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22046_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22046_SHARP_,port], null)));
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
var G__22047 = (i + 1);
i = G__22047;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$125))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$125], null));
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
var alts_BANG___delegate = function (ports,p__22048){var map__22050 = p__22048;var map__22050__$1 = ((cljs.core.seq_QMARK_(map__22050))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22050):map__22050);var opts = map__22050__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22048 = null;if (arguments.length > 1) {
  p__22048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22048);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22051){
var ports = cljs.core.first(arglist__22051);
var p__22048 = cljs.core.rest(arglist__22051);
return alts_BANG___delegate(ports,p__22048);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22059 = (function (ch,f,map_LT_,meta22060){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22060 = meta22060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22059.cljs$lang$type = true;
cljs.core.async.t22059.cljs$lang$ctorStr = "cljs.core.async/t22059";
cljs.core.async.t22059.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22059");
});
cljs.core.async.t22059.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t22059.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t22062 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22062 = (function (fn1,_,meta22060,ch,f,map_LT_,meta22063){
this.fn1 = fn1;
this._ = _;
this.meta22060 = meta22060;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22063 = meta22063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22062.cljs$lang$type = true;
cljs.core.async.t22062.cljs$lang$ctorStr = "cljs.core.async/t22062";
cljs.core.async.t22062.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22062");
});
cljs.core.async.t22062.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t22062.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t22062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__22052_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__22052_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22052_SHARP_) : self__.f.call(null,p1__22052_SHARP_)))) : f1.call(null,(((p1__22052_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22052_SHARP_) : self__.f.call(null,p1__22052_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t22062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22064){var self__ = this;
var _22064__$1 = this;return self__.meta22063;
});
cljs.core.async.t22062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22064,meta22063__$1){var self__ = this;
var _22064__$1 = this;return (new cljs.core.async.t22062(self__.fn1,self__._,self__.meta22060,self__.ch,self__.f,self__.map_LT_,meta22063__$1));
});
cljs.core.async.__GT_t22062 = (function __GT_t22062(fn1__$1,___$2,meta22060__$1,ch__$2,f__$2,map_LT___$2,meta22063){return (new cljs.core.async.t22062(fn1__$1,___$2,meta22060__$1,ch__$2,f__$2,map_LT___$2,meta22063));
});
}
return (new cljs.core.async.t22062(fn1,___$1,self__.meta22060,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t22059.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22061){var self__ = this;
var _22061__$1 = this;return self__.meta22060;
});
cljs.core.async.t22059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22061,meta22060__$1){var self__ = this;
var _22061__$1 = this;return (new cljs.core.async.t22059(self__.ch,self__.f,self__.map_LT_,meta22060__$1));
});
cljs.core.async.__GT_t22059 = (function __GT_t22059(ch__$1,f__$1,map_LT___$1,meta22060){return (new cljs.core.async.t22059(ch__$1,f__$1,map_LT___$1,meta22060));
});
}
return (new cljs.core.async.t22059(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22068 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22068 = (function (ch,f,map_GT_,meta22069){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22069 = meta22069;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22068.cljs$lang$type = true;
cljs.core.async.t22068.cljs$lang$ctorStr = "cljs.core.async/t22068";
cljs.core.async.t22068.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22068");
});
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22070){var self__ = this;
var _22070__$1 = this;return self__.meta22069;
});
cljs.core.async.t22068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22070,meta22069__$1){var self__ = this;
var _22070__$1 = this;return (new cljs.core.async.t22068(self__.ch,self__.f,self__.map_GT_,meta22069__$1));
});
cljs.core.async.__GT_t22068 = (function __GT_t22068(ch__$1,f__$1,map_GT___$1,meta22069){return (new cljs.core.async.t22068(ch__$1,f__$1,map_GT___$1,meta22069));
});
}
return (new cljs.core.async.t22068(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22074 = (function (ch,p,filter_GT_,meta22075){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22075 = meta22075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22074.cljs$lang$type = true;
cljs.core.async.t22074.cljs$lang$ctorStr = "cljs.core.async/t22074";
cljs.core.async.t22074.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22074");
});
cljs.core.async.t22074.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22074.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t22074.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22074.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22074.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22074.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22076){var self__ = this;
var _22076__$1 = this;return self__.meta22075;
});
cljs.core.async.t22074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22076,meta22075__$1){var self__ = this;
var _22076__$1 = this;return (new cljs.core.async.t22074(self__.ch,self__.p,self__.filter_GT_,meta22075__$1));
});
cljs.core.async.__GT_t22074 = (function __GT_t22074(ch__$1,p__$1,filter_GT___$1,meta22075){return (new cljs.core.async.t22074(ch__$1,p__$1,filter_GT___$1,meta22075));
});
}
return (new cljs.core.async.t22074(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22138){var state_val_22139 = (state_22138[1]);if((state_val_22139 === 1))
{var state_22138__$1 = state_22138;var statearr_22140_22160 = state_22138__$1;(statearr_22140_22160[2] = null);
(statearr_22140_22160[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22139 === 2))
{var state_22138__$1 = state_22138;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22138__$1,4,ch);
} else
{if((state_val_22139 === 3))
{var inst_22136 = (state_22138[2]);var state_22138__$1 = state_22138;return cljs.core.async.impl.ioc_helpers.return_chan(state_22138__$1,inst_22136);
} else
{if((state_val_22139 === 4))
{var inst_22120 = (state_22138[7]);var inst_22120__$1 = (state_22138[2]);var inst_22121 = (inst_22120__$1 == null);var state_22138__$1 = (function (){var statearr_22141 = state_22138;(statearr_22141[7] = inst_22120__$1);
return statearr_22141;
})();if(cljs.core.truth_(inst_22121))
{var statearr_22142_22161 = state_22138__$1;(statearr_22142_22161[1] = 5);
} else
{var statearr_22143_22162 = state_22138__$1;(statearr_22143_22162[1] = 6);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22139 === 5))
{var inst_22123 = cljs.core.async.close_BANG_(out);var state_22138__$1 = state_22138;var statearr_22144_22163 = state_22138__$1;(statearr_22144_22163[2] = inst_22123);
(statearr_22144_22163[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22139 === 6))
{var inst_22120 = (state_22138[7]);var inst_22125 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22120) : p.call(null,inst_22120));var state_22138__$1 = state_22138;if(cljs.core.truth_(inst_22125))
{var statearr_22145_22164 = state_22138__$1;(statearr_22145_22164[1] = 8);
} else
{var statearr_22146_22165 = state_22138__$1;(statearr_22146_22165[1] = 9);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22139 === 7))
{var inst_22134 = (state_22138[2]);var state_22138__$1 = state_22138;var statearr_22147_22166 = state_22138__$1;(statearr_22147_22166[2] = inst_22134);
(statearr_22147_22166[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22139 === 8))
{var inst_22120 = (state_22138[7]);var state_22138__$1 = state_22138;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22138__$1,11,out,inst_22120);
} else
{if((state_val_22139 === 9))
{var state_22138__$1 = state_22138;var statearr_22148_22167 = state_22138__$1;(statearr_22148_22167[2] = null);
(statearr_22148_22167[1] = 10);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22139 === 10))
{var inst_22131 = (state_22138[2]);var state_22138__$1 = (function (){var statearr_22149 = state_22138;(statearr_22149[8] = inst_22131);
return statearr_22149;
})();var statearr_22150_22168 = state_22138__$1;(statearr_22150_22168[2] = null);
(statearr_22150_22168[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22139 === 11))
{var inst_22128 = (state_22138[2]);var state_22138__$1 = state_22138;var statearr_22151_22169 = state_22138__$1;(statearr_22151_22169[2] = inst_22128);
(statearr_22151_22169[1] = 10);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_22155 = [null,null,null,null,null,null,null,null,null];(statearr_22155[0] = state_machine__5507__auto__);
(statearr_22155[1] = 1);
return statearr_22155;
});
var state_machine__5507__auto____1 = (function (state_22138){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22138);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22156){if((e22156 instanceof Object))
{var ex__5510__auto__ = e22156;var statearr_22157_22170 = state_22138;(statearr_22157_22170[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22138);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e22156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__22171 = state_22138;
state_22138 = G__22171;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22138){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22158 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22159);
return statearr_22158;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22323){var state_val_22324 = (state_22323[1]);if((state_val_22324 === 1))
{var state_22323__$1 = state_22323;var statearr_22325_22362 = state_22323__$1;(statearr_22325_22362[2] = null);
(statearr_22325_22362[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 2))
{var state_22323__$1 = state_22323;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22323__$1,4,in$);
} else
{if((state_val_22324 === 3))
{var inst_22321 = (state_22323[2]);var state_22323__$1 = state_22323;return cljs.core.async.impl.ioc_helpers.return_chan(state_22323__$1,inst_22321);
} else
{if((state_val_22324 === 4))
{var inst_22269 = (state_22323[7]);var inst_22269__$1 = (state_22323[2]);var inst_22270 = (inst_22269__$1 == null);var state_22323__$1 = (function (){var statearr_22326 = state_22323;(statearr_22326[7] = inst_22269__$1);
return statearr_22326;
})();if(cljs.core.truth_(inst_22270))
{var statearr_22327_22363 = state_22323__$1;(statearr_22327_22363[1] = 5);
} else
{var statearr_22328_22364 = state_22323__$1;(statearr_22328_22364[1] = 6);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 5))
{var inst_22272 = cljs.core.async.close_BANG_(out);var state_22323__$1 = state_22323;var statearr_22329_22365 = state_22323__$1;(statearr_22329_22365[2] = inst_22272);
(statearr_22329_22365[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 6))
{var inst_22269 = (state_22323[7]);var inst_22274 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22269) : f.call(null,inst_22269));var inst_22279 = cljs.core.seq(inst_22274);var inst_22280 = inst_22279;var inst_22281 = null;var inst_22282 = 0;var inst_22283 = 0;var state_22323__$1 = (function (){var statearr_22330 = state_22323;(statearr_22330[8] = inst_22283);
(statearr_22330[9] = inst_22280);
(statearr_22330[10] = inst_22282);
(statearr_22330[11] = inst_22281);
return statearr_22330;
})();var statearr_22331_22366 = state_22323__$1;(statearr_22331_22366[2] = null);
(statearr_22331_22366[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 7))
{var inst_22319 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22332_22367 = state_22323__$1;(statearr_22332_22367[2] = inst_22319);
(statearr_22332_22367[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 8))
{var inst_22283 = (state_22323[8]);var inst_22282 = (state_22323[10]);var inst_22285 = (inst_22283 < inst_22282);var inst_22286 = inst_22285;var state_22323__$1 = state_22323;if(cljs.core.truth_(inst_22286))
{var statearr_22333_22368 = state_22323__$1;(statearr_22333_22368[1] = 10);
} else
{var statearr_22334_22369 = state_22323__$1;(statearr_22334_22369[1] = 11);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 9))
{var inst_22316 = (state_22323[2]);var state_22323__$1 = (function (){var statearr_22335 = state_22323;(statearr_22335[12] = inst_22316);
return statearr_22335;
})();var statearr_22336_22370 = state_22323__$1;(statearr_22336_22370[2] = null);
(statearr_22336_22370[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 10))
{var inst_22283 = (state_22323[8]);var inst_22281 = (state_22323[11]);var inst_22288 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22281,inst_22283);var state_22323__$1 = state_22323;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22323__$1,13,out,inst_22288);
} else
{if((state_val_22324 === 11))
{var inst_22280 = (state_22323[9]);var inst_22294 = (state_22323[13]);var inst_22294__$1 = cljs.core.seq(inst_22280);var state_22323__$1 = (function (){var statearr_22340 = state_22323;(statearr_22340[13] = inst_22294__$1);
return statearr_22340;
})();if(inst_22294__$1)
{var statearr_22341_22371 = state_22323__$1;(statearr_22341_22371[1] = 14);
} else
{var statearr_22342_22372 = state_22323__$1;(statearr_22342_22372[1] = 15);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 12))
{var inst_22314 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22343_22373 = state_22323__$1;(statearr_22343_22373[2] = inst_22314);
(statearr_22343_22373[1] = 9);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 13))
{var inst_22283 = (state_22323[8]);var inst_22280 = (state_22323[9]);var inst_22282 = (state_22323[10]);var inst_22281 = (state_22323[11]);var inst_22290 = (state_22323[2]);var inst_22291 = (inst_22283 + 1);var tmp22337 = inst_22280;var tmp22338 = inst_22282;var tmp22339 = inst_22281;var inst_22280__$1 = tmp22337;var inst_22281__$1 = tmp22339;var inst_22282__$1 = tmp22338;var inst_22283__$1 = inst_22291;var state_22323__$1 = (function (){var statearr_22344 = state_22323;(statearr_22344[8] = inst_22283__$1);
(statearr_22344[9] = inst_22280__$1);
(statearr_22344[10] = inst_22282__$1);
(statearr_22344[11] = inst_22281__$1);
(statearr_22344[14] = inst_22290);
return statearr_22344;
})();var statearr_22345_22374 = state_22323__$1;(statearr_22345_22374[2] = null);
(statearr_22345_22374[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 14))
{var inst_22294 = (state_22323[13]);var inst_22296 = cljs.core.chunked_seq_QMARK_(inst_22294);var state_22323__$1 = state_22323;if(inst_22296)
{var statearr_22346_22375 = state_22323__$1;(statearr_22346_22375[1] = 17);
} else
{var statearr_22347_22376 = state_22323__$1;(statearr_22347_22376[1] = 18);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 15))
{var state_22323__$1 = state_22323;var statearr_22348_22377 = state_22323__$1;(statearr_22348_22377[2] = null);
(statearr_22348_22377[1] = 16);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 16))
{var inst_22312 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22349_22378 = state_22323__$1;(statearr_22349_22378[2] = inst_22312);
(statearr_22349_22378[1] = 12);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 17))
{var inst_22294 = (state_22323[13]);var inst_22298 = cljs.core.chunk_first(inst_22294);var inst_22299 = cljs.core.chunk_rest(inst_22294);var inst_22300 = cljs.core.count(inst_22298);var inst_22280 = inst_22299;var inst_22281 = inst_22298;var inst_22282 = inst_22300;var inst_22283 = 0;var state_22323__$1 = (function (){var statearr_22350 = state_22323;(statearr_22350[8] = inst_22283);
(statearr_22350[9] = inst_22280);
(statearr_22350[10] = inst_22282);
(statearr_22350[11] = inst_22281);
return statearr_22350;
})();var statearr_22351_22379 = state_22323__$1;(statearr_22351_22379[2] = null);
(statearr_22351_22379[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 18))
{var inst_22294 = (state_22323[13]);var inst_22303 = cljs.core.first(inst_22294);var state_22323__$1 = state_22323;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22323__$1,20,out,inst_22303);
} else
{if((state_val_22324 === 19))
{var inst_22309 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22352_22380 = state_22323__$1;(statearr_22352_22380[2] = inst_22309);
(statearr_22352_22380[1] = 16);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22324 === 20))
{var inst_22294 = (state_22323[13]);var inst_22305 = (state_22323[2]);var inst_22306 = cljs.core.next(inst_22294);var inst_22280 = inst_22306;var inst_22281 = null;var inst_22282 = 0;var inst_22283 = 0;var state_22323__$1 = (function (){var statearr_22353 = state_22323;(statearr_22353[15] = inst_22305);
(statearr_22353[8] = inst_22283);
(statearr_22353[9] = inst_22280);
(statearr_22353[10] = inst_22282);
(statearr_22353[11] = inst_22281);
return statearr_22353;
})();var statearr_22354_22381 = state_22323__$1;(statearr_22354_22381[2] = null);
(statearr_22354_22381[1] = 8);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_22358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22358[0] = state_machine__5507__auto__);
(statearr_22358[1] = 1);
return statearr_22358;
});
var state_machine__5507__auto____1 = (function (state_22323){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22323);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22359){if((e22359 instanceof Object))
{var ex__5510__auto__ = e22359;var statearr_22360_22382 = state_22323;(statearr_22360_22382[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22323);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e22359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__22383 = state_22323;
state_22323 = G__22383;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22323){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22361 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22361;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___22464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22443){var state_val_22444 = (state_22443[1]);if((state_val_22444 === 1))
{var state_22443__$1 = state_22443;var statearr_22445_22465 = state_22443__$1;(statearr_22445_22465[2] = null);
(statearr_22445_22465[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22444 === 2))
{var state_22443__$1 = state_22443;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22443__$1,4,from);
} else
{if((state_val_22444 === 3))
{var inst_22441 = (state_22443[2]);var state_22443__$1 = state_22443;return cljs.core.async.impl.ioc_helpers.return_chan(state_22443__$1,inst_22441);
} else
{if((state_val_22444 === 4))
{var inst_22426 = (state_22443[7]);var inst_22426__$1 = (state_22443[2]);var inst_22427 = (inst_22426__$1 == null);var state_22443__$1 = (function (){var statearr_22446 = state_22443;(statearr_22446[7] = inst_22426__$1);
return statearr_22446;
})();if(cljs.core.truth_(inst_22427))
{var statearr_22447_22466 = state_22443__$1;(statearr_22447_22466[1] = 5);
} else
{var statearr_22448_22467 = state_22443__$1;(statearr_22448_22467[1] = 6);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22444 === 5))
{var state_22443__$1 = state_22443;if(cljs.core.truth_(close_QMARK_))
{var statearr_22449_22468 = state_22443__$1;(statearr_22449_22468[1] = 8);
} else
{var statearr_22450_22469 = state_22443__$1;(statearr_22450_22469[1] = 9);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22444 === 6))
{var inst_22426 = (state_22443[7]);var state_22443__$1 = state_22443;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22443__$1,11,to,inst_22426);
} else
{if((state_val_22444 === 7))
{var inst_22439 = (state_22443[2]);var state_22443__$1 = state_22443;var statearr_22451_22470 = state_22443__$1;(statearr_22451_22470[2] = inst_22439);
(statearr_22451_22470[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22444 === 8))
{var inst_22430 = cljs.core.async.close_BANG_(to);var state_22443__$1 = state_22443;var statearr_22452_22471 = state_22443__$1;(statearr_22452_22471[2] = inst_22430);
(statearr_22452_22471[1] = 10);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22444 === 9))
{var state_22443__$1 = state_22443;var statearr_22453_22472 = state_22443__$1;(statearr_22453_22472[2] = null);
(statearr_22453_22472[1] = 10);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22444 === 10))
{var inst_22433 = (state_22443[2]);var state_22443__$1 = state_22443;var statearr_22454_22473 = state_22443__$1;(statearr_22454_22473[2] = inst_22433);
(statearr_22454_22473[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22444 === 11))
{var inst_22436 = (state_22443[2]);var state_22443__$1 = (function (){var statearr_22455 = state_22443;(statearr_22455[8] = inst_22436);
return statearr_22455;
})();var statearr_22456_22474 = state_22443__$1;(statearr_22456_22474[2] = null);
(statearr_22456_22474[1] = 2);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_22460 = [null,null,null,null,null,null,null,null,null];(statearr_22460[0] = state_machine__5507__auto__);
(statearr_22460[1] = 1);
return statearr_22460;
});
var state_machine__5507__auto____1 = (function (state_22443){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22443);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22461){if((e22461 instanceof Object))
{var ex__5510__auto__ = e22461;var statearr_22462_22475 = state_22443;(statearr_22462_22475[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22443);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e22461;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__22476 = state_22443;
state_22443 = G__22476;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22443){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22463 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22464);
return statearr_22463;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___22563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22541){var state_val_22542 = (state_22541[1]);if((state_val_22542 === 1))
{var state_22541__$1 = state_22541;var statearr_22543_22564 = state_22541__$1;(statearr_22543_22564[2] = null);
(statearr_22543_22564[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22542 === 2))
{var state_22541__$1 = state_22541;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22541__$1,4,ch);
} else
{if((state_val_22542 === 3))
{var inst_22539 = (state_22541[2]);var state_22541__$1 = state_22541;return cljs.core.async.impl.ioc_helpers.return_chan(state_22541__$1,inst_22539);
} else
{if((state_val_22542 === 4))
{var inst_22522 = (state_22541[7]);var inst_22522__$1 = (state_22541[2]);var inst_22523 = (inst_22522__$1 == null);var state_22541__$1 = (function (){var statearr_22544 = state_22541;(statearr_22544[7] = inst_22522__$1);
return statearr_22544;
})();if(cljs.core.truth_(inst_22523))
{var statearr_22545_22565 = state_22541__$1;(statearr_22545_22565[1] = 5);
} else
{var statearr_22546_22566 = state_22541__$1;(statearr_22546_22566[1] = 6);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22542 === 5))
{var inst_22525 = cljs.core.async.close_BANG_(tc);var inst_22526 = cljs.core.async.close_BANG_(fc);var state_22541__$1 = (function (){var statearr_22547 = state_22541;(statearr_22547[8] = inst_22525);
return statearr_22547;
})();var statearr_22548_22567 = state_22541__$1;(statearr_22548_22567[2] = inst_22526);
(statearr_22548_22567[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22542 === 6))
{var inst_22522 = (state_22541[7]);var inst_22528 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22522) : p.call(null,inst_22522));var state_22541__$1 = state_22541;if(cljs.core.truth_(inst_22528))
{var statearr_22549_22568 = state_22541__$1;(statearr_22549_22568[1] = 9);
} else
{var statearr_22550_22569 = state_22541__$1;(statearr_22550_22569[1] = 10);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22542 === 7))
{var inst_22537 = (state_22541[2]);var state_22541__$1 = state_22541;var statearr_22551_22570 = state_22541__$1;(statearr_22551_22570[2] = inst_22537);
(statearr_22551_22570[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22542 === 8))
{var inst_22534 = (state_22541[2]);var state_22541__$1 = (function (){var statearr_22552 = state_22541;(statearr_22552[9] = inst_22534);
return statearr_22552;
})();var statearr_22553_22571 = state_22541__$1;(statearr_22553_22571[2] = null);
(statearr_22553_22571[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22542 === 9))
{var state_22541__$1 = state_22541;var statearr_22554_22572 = state_22541__$1;(statearr_22554_22572[2] = tc);
(statearr_22554_22572[1] = 11);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22542 === 10))
{var state_22541__$1 = state_22541;var statearr_22555_22573 = state_22541__$1;(statearr_22555_22573[2] = fc);
(statearr_22555_22573[1] = 11);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22542 === 11))
{var inst_22522 = (state_22541[7]);var inst_22532 = (state_22541[2]);var state_22541__$1 = state_22541;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22541__$1,8,inst_22532,inst_22522);
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
var state_machine__5507__auto____0 = (function (){var statearr_22559 = [null,null,null,null,null,null,null,null,null,null];(statearr_22559[0] = state_machine__5507__auto__);
(statearr_22559[1] = 1);
return statearr_22559;
});
var state_machine__5507__auto____1 = (function (state_22541){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22541);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22560){if((e22560 instanceof Object))
{var ex__5510__auto__ = e22560;var statearr_22561_22574 = state_22541;(statearr_22561_22574[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22541);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e22560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__22575 = state_22541;
state_22541 = G__22575;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22541){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22562 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22563);
return statearr_22562;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22622){var state_val_22623 = (state_22622[1]);if((state_val_22623 === 7))
{var inst_22618 = (state_22622[2]);var state_22622__$1 = state_22622;var statearr_22624_22640 = state_22622__$1;(statearr_22624_22640[2] = inst_22618);
(statearr_22624_22640[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22623 === 6))
{var inst_22611 = (state_22622[7]);var inst_22608 = (state_22622[8]);var inst_22615 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22608,inst_22611) : f.call(null,inst_22608,inst_22611));var inst_22608__$1 = inst_22615;var state_22622__$1 = (function (){var statearr_22625 = state_22622;(statearr_22625[8] = inst_22608__$1);
return statearr_22625;
})();var statearr_22626_22641 = state_22622__$1;(statearr_22626_22641[2] = null);
(statearr_22626_22641[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22623 === 5))
{var inst_22608 = (state_22622[8]);var state_22622__$1 = state_22622;var statearr_22627_22642 = state_22622__$1;(statearr_22627_22642[2] = inst_22608);
(statearr_22627_22642[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22623 === 4))
{var inst_22611 = (state_22622[7]);var inst_22611__$1 = (state_22622[2]);var inst_22612 = (inst_22611__$1 == null);var state_22622__$1 = (function (){var statearr_22628 = state_22622;(statearr_22628[7] = inst_22611__$1);
return statearr_22628;
})();if(cljs.core.truth_(inst_22612))
{var statearr_22629_22643 = state_22622__$1;(statearr_22629_22643[1] = 5);
} else
{var statearr_22630_22644 = state_22622__$1;(statearr_22630_22644[1] = 6);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22623 === 3))
{var inst_22620 = (state_22622[2]);var state_22622__$1 = state_22622;return cljs.core.async.impl.ioc_helpers.return_chan(state_22622__$1,inst_22620);
} else
{if((state_val_22623 === 2))
{var state_22622__$1 = state_22622;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22622__$1,4,ch);
} else
{if((state_val_22623 === 1))
{var inst_22608 = init;var state_22622__$1 = (function (){var statearr_22631 = state_22622;(statearr_22631[8] = inst_22608);
return statearr_22631;
})();var statearr_22632_22645 = state_22622__$1;(statearr_22632_22645[2] = null);
(statearr_22632_22645[1] = 2);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_22636 = [null,null,null,null,null,null,null,null,null];(statearr_22636[0] = state_machine__5507__auto__);
(statearr_22636[1] = 1);
return statearr_22636;
});
var state_machine__5507__auto____1 = (function (state_22622){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22622);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22637){if((e22637 instanceof Object))
{var ex__5510__auto__ = e22637;var statearr_22638_22646 = state_22622;(statearr_22638_22646[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22622);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e22637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__22647 = state_22622;
state_22622 = G__22647;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22622){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22639 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22639;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22709){var state_val_22710 = (state_22709[1]);if((state_val_22710 === 1))
{var inst_22689 = cljs.core.seq(coll);var inst_22690 = inst_22689;var state_22709__$1 = (function (){var statearr_22711 = state_22709;(statearr_22711[7] = inst_22690);
return statearr_22711;
})();var statearr_22712_22730 = state_22709__$1;(statearr_22712_22730[2] = null);
(statearr_22712_22730[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22710 === 2))
{var inst_22690 = (state_22709[7]);var state_22709__$1 = state_22709;if(cljs.core.truth_(inst_22690))
{var statearr_22713_22731 = state_22709__$1;(statearr_22713_22731[1] = 4);
} else
{var statearr_22714_22732 = state_22709__$1;(statearr_22714_22732[1] = 5);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22710 === 3))
{var inst_22707 = (state_22709[2]);var state_22709__$1 = state_22709;return cljs.core.async.impl.ioc_helpers.return_chan(state_22709__$1,inst_22707);
} else
{if((state_val_22710 === 4))
{var inst_22690 = (state_22709[7]);var inst_22693 = cljs.core.first(inst_22690);var state_22709__$1 = state_22709;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22709__$1,7,ch,inst_22693);
} else
{if((state_val_22710 === 5))
{var state_22709__$1 = state_22709;if(cljs.core.truth_(close_QMARK_))
{var statearr_22715_22733 = state_22709__$1;(statearr_22715_22733[1] = 8);
} else
{var statearr_22716_22734 = state_22709__$1;(statearr_22716_22734[1] = 9);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_22710 === 6))
{var inst_22705 = (state_22709[2]);var state_22709__$1 = state_22709;var statearr_22717_22735 = state_22709__$1;(statearr_22717_22735[2] = inst_22705);
(statearr_22717_22735[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22710 === 7))
{var inst_22690 = (state_22709[7]);var inst_22695 = (state_22709[2]);var inst_22696 = cljs.core.next(inst_22690);var inst_22690__$1 = inst_22696;var state_22709__$1 = (function (){var statearr_22718 = state_22709;(statearr_22718[8] = inst_22695);
(statearr_22718[7] = inst_22690__$1);
return statearr_22718;
})();var statearr_22719_22736 = state_22709__$1;(statearr_22719_22736[2] = null);
(statearr_22719_22736[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22710 === 8))
{var inst_22700 = cljs.core.async.close_BANG_(ch);var state_22709__$1 = state_22709;var statearr_22720_22737 = state_22709__$1;(statearr_22720_22737[2] = inst_22700);
(statearr_22720_22737[1] = 10);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22710 === 9))
{var state_22709__$1 = state_22709;var statearr_22721_22738 = state_22709__$1;(statearr_22721_22738[2] = null);
(statearr_22721_22738[1] = 10);
return cljs.core.constant$keyword$135;
} else
{if((state_val_22710 === 10))
{var inst_22703 = (state_22709[2]);var state_22709__$1 = state_22709;var statearr_22722_22739 = state_22709__$1;(statearr_22722_22739[2] = inst_22703);
(statearr_22722_22739[1] = 6);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_22726 = [null,null,null,null,null,null,null,null,null];(statearr_22726[0] = state_machine__5507__auto__);
(statearr_22726[1] = 1);
return statearr_22726;
});
var state_machine__5507__auto____1 = (function (state_22709){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22709);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22727){if((e22727 instanceof Object))
{var ex__5510__auto__ = e22727;var statearr_22728_22740 = state_22709;(statearr_22728_22740[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22709);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e22727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__22741 = state_22709;
state_22709 = G__22741;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22709){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22729 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22729;
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
cljs.core.async.Mux = (function (){var obj22743 = {};return obj22743;
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
cljs.core.async.Mult = (function (){var obj22745 = {};return obj22745;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22969 = (function (cs,ch,mult,meta22970){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22970 = meta22970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22969.cljs$lang$type = true;
cljs.core.async.t22969.cljs$lang$ctorStr = "cljs.core.async/t22969";
cljs.core.async.t22969.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22969");
});})(cs))
;
cljs.core.async.t22969.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22969.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22969.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22969.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22969.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22971){var self__ = this;
var _22971__$1 = this;return self__.meta22970;
});})(cs))
;
cljs.core.async.t22969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22971,meta22970__$1){var self__ = this;
var _22971__$1 = this;return (new cljs.core.async.t22969(self__.cs,self__.ch,self__.mult,meta22970__$1));
});})(cs))
;
cljs.core.async.__GT_t22969 = ((function (cs){
return (function __GT_t22969(cs__$1,ch__$1,mult__$1,meta22970){return (new cljs.core.async.t22969(cs__$1,ch__$1,mult__$1,meta22970));
});})(cs))
;
}
return (new cljs.core.async.t22969(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___23192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23106){var state_val_23107 = (state_23106[1]);if((state_val_23107 === 32))
{var inst_22974 = (state_23106[7]);var inst_23050 = (state_23106[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23106,31,Object,null,30);var inst_23057 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23050,inst_22974,done);var state_23106__$1 = state_23106;var statearr_23108_23193 = state_23106__$1;(statearr_23108_23193[2] = inst_23057);
cljs.core.async.impl.ioc_helpers.process_exception(state_23106__$1);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 1))
{var state_23106__$1 = state_23106;var statearr_23109_23194 = state_23106__$1;(statearr_23109_23194[2] = null);
(statearr_23109_23194[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 33))
{var inst_23063 = (state_23106[9]);var inst_23065 = cljs.core.chunked_seq_QMARK_(inst_23063);var state_23106__$1 = state_23106;if(inst_23065)
{var statearr_23110_23195 = state_23106__$1;(statearr_23110_23195[1] = 36);
} else
{var statearr_23111_23196 = state_23106__$1;(statearr_23111_23196[1] = 37);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 2))
{var state_23106__$1 = state_23106;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23106__$1,4,ch);
} else
{if((state_val_23107 === 34))
{var state_23106__$1 = state_23106;var statearr_23112_23197 = state_23106__$1;(statearr_23112_23197[2] = null);
(statearr_23112_23197[1] = 35);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 3))
{var inst_23104 = (state_23106[2]);var state_23106__$1 = state_23106;return cljs.core.async.impl.ioc_helpers.return_chan(state_23106__$1,inst_23104);
} else
{if((state_val_23107 === 35))
{var inst_23088 = (state_23106[2]);var state_23106__$1 = state_23106;var statearr_23113_23198 = state_23106__$1;(statearr_23113_23198[2] = inst_23088);
(statearr_23113_23198[1] = 29);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 4))
{var inst_22974 = (state_23106[7]);var inst_22974__$1 = (state_23106[2]);var inst_22975 = (inst_22974__$1 == null);var state_23106__$1 = (function (){var statearr_23114 = state_23106;(statearr_23114[7] = inst_22974__$1);
return statearr_23114;
})();if(cljs.core.truth_(inst_22975))
{var statearr_23115_23199 = state_23106__$1;(statearr_23115_23199[1] = 5);
} else
{var statearr_23116_23200 = state_23106__$1;(statearr_23116_23200[1] = 6);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 36))
{var inst_23063 = (state_23106[9]);var inst_23067 = cljs.core.chunk_first(inst_23063);var inst_23068 = cljs.core.chunk_rest(inst_23063);var inst_23069 = cljs.core.count(inst_23067);var inst_23042 = inst_23068;var inst_23043 = inst_23067;var inst_23044 = inst_23069;var inst_23045 = 0;var state_23106__$1 = (function (){var statearr_23117 = state_23106;(statearr_23117[10] = inst_23044);
(statearr_23117[11] = inst_23045);
(statearr_23117[12] = inst_23042);
(statearr_23117[13] = inst_23043);
return statearr_23117;
})();var statearr_23118_23201 = state_23106__$1;(statearr_23118_23201[2] = null);
(statearr_23118_23201[1] = 25);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 5))
{var inst_22981 = cljs.core.deref(cs);var inst_22982 = cljs.core.seq(inst_22981);var inst_22983 = inst_22982;var inst_22984 = null;var inst_22985 = 0;var inst_22986 = 0;var state_23106__$1 = (function (){var statearr_23119 = state_23106;(statearr_23119[14] = inst_22984);
(statearr_23119[15] = inst_22985);
(statearr_23119[16] = inst_22986);
(statearr_23119[17] = inst_22983);
return statearr_23119;
})();var statearr_23120_23202 = state_23106__$1;(statearr_23120_23202[2] = null);
(statearr_23120_23202[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 37))
{var inst_23063 = (state_23106[9]);var inst_23072 = cljs.core.first(inst_23063);var state_23106__$1 = (function (){var statearr_23121 = state_23106;(statearr_23121[18] = inst_23072);
return statearr_23121;
})();var statearr_23122_23203 = state_23106__$1;(statearr_23122_23203[2] = null);
(statearr_23122_23203[1] = 41);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 6))
{var inst_23034 = (state_23106[19]);var inst_23033 = cljs.core.deref(cs);var inst_23034__$1 = cljs.core.keys(inst_23033);var inst_23035 = cljs.core.count(inst_23034__$1);var inst_23036 = cljs.core.reset_BANG_(dctr,inst_23035);var inst_23041 = cljs.core.seq(inst_23034__$1);var inst_23042 = inst_23041;var inst_23043 = null;var inst_23044 = 0;var inst_23045 = 0;var state_23106__$1 = (function (){var statearr_23123 = state_23106;(statearr_23123[19] = inst_23034__$1);
(statearr_23123[10] = inst_23044);
(statearr_23123[11] = inst_23045);
(statearr_23123[12] = inst_23042);
(statearr_23123[13] = inst_23043);
(statearr_23123[20] = inst_23036);
return statearr_23123;
})();var statearr_23124_23204 = state_23106__$1;(statearr_23124_23204[2] = null);
(statearr_23124_23204[1] = 25);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 38))
{var inst_23085 = (state_23106[2]);var state_23106__$1 = state_23106;var statearr_23125_23205 = state_23106__$1;(statearr_23125_23205[2] = inst_23085);
(statearr_23125_23205[1] = 35);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 7))
{var inst_23102 = (state_23106[2]);var state_23106__$1 = state_23106;var statearr_23126_23206 = state_23106__$1;(statearr_23126_23206[2] = inst_23102);
(statearr_23126_23206[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 39))
{var inst_23063 = (state_23106[9]);var inst_23081 = (state_23106[2]);var inst_23082 = cljs.core.next(inst_23063);var inst_23042 = inst_23082;var inst_23043 = null;var inst_23044 = 0;var inst_23045 = 0;var state_23106__$1 = (function (){var statearr_23127 = state_23106;(statearr_23127[10] = inst_23044);
(statearr_23127[11] = inst_23045);
(statearr_23127[12] = inst_23042);
(statearr_23127[13] = inst_23043);
(statearr_23127[21] = inst_23081);
return statearr_23127;
})();var statearr_23128_23207 = state_23106__$1;(statearr_23128_23207[2] = null);
(statearr_23128_23207[1] = 25);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 8))
{var inst_22985 = (state_23106[15]);var inst_22986 = (state_23106[16]);var inst_22988 = (inst_22986 < inst_22985);var inst_22989 = inst_22988;var state_23106__$1 = state_23106;if(cljs.core.truth_(inst_22989))
{var statearr_23129_23208 = state_23106__$1;(statearr_23129_23208[1] = 10);
} else
{var statearr_23130_23209 = state_23106__$1;(statearr_23130_23209[1] = 11);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 40))
{var inst_23072 = (state_23106[18]);var inst_23073 = (state_23106[2]);var inst_23074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23075 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23072);var state_23106__$1 = (function (){var statearr_23131 = state_23106;(statearr_23131[22] = inst_23074);
(statearr_23131[23] = inst_23073);
return statearr_23131;
})();var statearr_23132_23210 = state_23106__$1;(statearr_23132_23210[2] = inst_23075);
cljs.core.async.impl.ioc_helpers.process_exception(state_23106__$1);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 9))
{var inst_23031 = (state_23106[2]);var state_23106__$1 = state_23106;var statearr_23133_23211 = state_23106__$1;(statearr_23133_23211[2] = inst_23031);
(statearr_23133_23211[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 41))
{var inst_23072 = (state_23106[18]);var inst_22974 = (state_23106[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23106,40,Object,null,39);var inst_23079 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23072,inst_22974,done);var state_23106__$1 = state_23106;var statearr_23134_23212 = state_23106__$1;(statearr_23134_23212[2] = inst_23079);
cljs.core.async.impl.ioc_helpers.process_exception(state_23106__$1);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 10))
{var inst_22984 = (state_23106[14]);var inst_22986 = (state_23106[16]);var inst_22992 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22984,inst_22986);var inst_22993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22992,0,null);var inst_22994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22992,1,null);var state_23106__$1 = (function (){var statearr_23135 = state_23106;(statearr_23135[24] = inst_22993);
return statearr_23135;
})();if(cljs.core.truth_(inst_22994))
{var statearr_23136_23213 = state_23106__$1;(statearr_23136_23213[1] = 13);
} else
{var statearr_23137_23214 = state_23106__$1;(statearr_23137_23214[1] = 14);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 42))
{var state_23106__$1 = state_23106;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23106__$1,45,dchan);
} else
{if((state_val_23107 === 11))
{var inst_23003 = (state_23106[25]);var inst_22983 = (state_23106[17]);var inst_23003__$1 = cljs.core.seq(inst_22983);var state_23106__$1 = (function (){var statearr_23138 = state_23106;(statearr_23138[25] = inst_23003__$1);
return statearr_23138;
})();if(inst_23003__$1)
{var statearr_23139_23215 = state_23106__$1;(statearr_23139_23215[1] = 16);
} else
{var statearr_23140_23216 = state_23106__$1;(statearr_23140_23216[1] = 17);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 43))
{var state_23106__$1 = state_23106;var statearr_23141_23217 = state_23106__$1;(statearr_23141_23217[2] = null);
(statearr_23141_23217[1] = 44);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 12))
{var inst_23029 = (state_23106[2]);var state_23106__$1 = state_23106;var statearr_23142_23218 = state_23106__$1;(statearr_23142_23218[2] = inst_23029);
(statearr_23142_23218[1] = 9);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 44))
{var inst_23099 = (state_23106[2]);var state_23106__$1 = (function (){var statearr_23143 = state_23106;(statearr_23143[26] = inst_23099);
return statearr_23143;
})();var statearr_23144_23219 = state_23106__$1;(statearr_23144_23219[2] = null);
(statearr_23144_23219[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 13))
{var inst_22993 = (state_23106[24]);var inst_22996 = cljs.core.async.close_BANG_(inst_22993);var state_23106__$1 = state_23106;var statearr_23145_23220 = state_23106__$1;(statearr_23145_23220[2] = inst_22996);
(statearr_23145_23220[1] = 15);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 45))
{var inst_23096 = (state_23106[2]);var state_23106__$1 = state_23106;var statearr_23149_23221 = state_23106__$1;(statearr_23149_23221[2] = inst_23096);
(statearr_23149_23221[1] = 44);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 14))
{var state_23106__$1 = state_23106;var statearr_23150_23222 = state_23106__$1;(statearr_23150_23222[2] = null);
(statearr_23150_23222[1] = 15);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 15))
{var inst_22984 = (state_23106[14]);var inst_22985 = (state_23106[15]);var inst_22986 = (state_23106[16]);var inst_22983 = (state_23106[17]);var inst_22999 = (state_23106[2]);var inst_23000 = (inst_22986 + 1);var tmp23146 = inst_22984;var tmp23147 = inst_22985;var tmp23148 = inst_22983;var inst_22983__$1 = tmp23148;var inst_22984__$1 = tmp23146;var inst_22985__$1 = tmp23147;var inst_22986__$1 = inst_23000;var state_23106__$1 = (function (){var statearr_23151 = state_23106;(statearr_23151[27] = inst_22999);
(statearr_23151[14] = inst_22984__$1);
(statearr_23151[15] = inst_22985__$1);
(statearr_23151[16] = inst_22986__$1);
(statearr_23151[17] = inst_22983__$1);
return statearr_23151;
})();var statearr_23152_23223 = state_23106__$1;(statearr_23152_23223[2] = null);
(statearr_23152_23223[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 16))
{var inst_23003 = (state_23106[25]);var inst_23005 = cljs.core.chunked_seq_QMARK_(inst_23003);var state_23106__$1 = state_23106;if(inst_23005)
{var statearr_23153_23224 = state_23106__$1;(statearr_23153_23224[1] = 19);
} else
{var statearr_23154_23225 = state_23106__$1;(statearr_23154_23225[1] = 20);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 17))
{var state_23106__$1 = state_23106;var statearr_23155_23226 = state_23106__$1;(statearr_23155_23226[2] = null);
(statearr_23155_23226[1] = 18);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 18))
{var inst_23027 = (state_23106[2]);var state_23106__$1 = state_23106;var statearr_23156_23227 = state_23106__$1;(statearr_23156_23227[2] = inst_23027);
(statearr_23156_23227[1] = 12);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 19))
{var inst_23003 = (state_23106[25]);var inst_23007 = cljs.core.chunk_first(inst_23003);var inst_23008 = cljs.core.chunk_rest(inst_23003);var inst_23009 = cljs.core.count(inst_23007);var inst_22983 = inst_23008;var inst_22984 = inst_23007;var inst_22985 = inst_23009;var inst_22986 = 0;var state_23106__$1 = (function (){var statearr_23157 = state_23106;(statearr_23157[14] = inst_22984);
(statearr_23157[15] = inst_22985);
(statearr_23157[16] = inst_22986);
(statearr_23157[17] = inst_22983);
return statearr_23157;
})();var statearr_23158_23228 = state_23106__$1;(statearr_23158_23228[2] = null);
(statearr_23158_23228[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 20))
{var inst_23003 = (state_23106[25]);var inst_23013 = cljs.core.first(inst_23003);var inst_23014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23013,0,null);var inst_23015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23013,1,null);var state_23106__$1 = (function (){var statearr_23159 = state_23106;(statearr_23159[28] = inst_23014);
return statearr_23159;
})();if(cljs.core.truth_(inst_23015))
{var statearr_23160_23229 = state_23106__$1;(statearr_23160_23229[1] = 22);
} else
{var statearr_23161_23230 = state_23106__$1;(statearr_23161_23230[1] = 23);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 21))
{var inst_23024 = (state_23106[2]);var state_23106__$1 = state_23106;var statearr_23162_23231 = state_23106__$1;(statearr_23162_23231[2] = inst_23024);
(statearr_23162_23231[1] = 18);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 22))
{var inst_23014 = (state_23106[28]);var inst_23017 = cljs.core.async.close_BANG_(inst_23014);var state_23106__$1 = state_23106;var statearr_23163_23232 = state_23106__$1;(statearr_23163_23232[2] = inst_23017);
(statearr_23163_23232[1] = 24);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 23))
{var state_23106__$1 = state_23106;var statearr_23164_23233 = state_23106__$1;(statearr_23164_23233[2] = null);
(statearr_23164_23233[1] = 24);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 24))
{var inst_23003 = (state_23106[25]);var inst_23020 = (state_23106[2]);var inst_23021 = cljs.core.next(inst_23003);var inst_22983 = inst_23021;var inst_22984 = null;var inst_22985 = 0;var inst_22986 = 0;var state_23106__$1 = (function (){var statearr_23165 = state_23106;(statearr_23165[14] = inst_22984);
(statearr_23165[15] = inst_22985);
(statearr_23165[16] = inst_22986);
(statearr_23165[17] = inst_22983);
(statearr_23165[29] = inst_23020);
return statearr_23165;
})();var statearr_23166_23234 = state_23106__$1;(statearr_23166_23234[2] = null);
(statearr_23166_23234[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 25))
{var inst_23044 = (state_23106[10]);var inst_23045 = (state_23106[11]);var inst_23047 = (inst_23045 < inst_23044);var inst_23048 = inst_23047;var state_23106__$1 = state_23106;if(cljs.core.truth_(inst_23048))
{var statearr_23167_23235 = state_23106__$1;(statearr_23167_23235[1] = 27);
} else
{var statearr_23168_23236 = state_23106__$1;(statearr_23168_23236[1] = 28);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 26))
{var inst_23034 = (state_23106[19]);var inst_23092 = (state_23106[2]);var inst_23093 = cljs.core.seq(inst_23034);var state_23106__$1 = (function (){var statearr_23169 = state_23106;(statearr_23169[30] = inst_23092);
return statearr_23169;
})();if(inst_23093)
{var statearr_23170_23237 = state_23106__$1;(statearr_23170_23237[1] = 42);
} else
{var statearr_23171_23238 = state_23106__$1;(statearr_23171_23238[1] = 43);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 27))
{var inst_23045 = (state_23106[11]);var inst_23043 = (state_23106[13]);var inst_23050 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23043,inst_23045);var state_23106__$1 = (function (){var statearr_23172 = state_23106;(statearr_23172[8] = inst_23050);
return statearr_23172;
})();var statearr_23173_23239 = state_23106__$1;(statearr_23173_23239[2] = null);
(statearr_23173_23239[1] = 32);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 28))
{var inst_23042 = (state_23106[12]);var inst_23063 = (state_23106[9]);var inst_23063__$1 = cljs.core.seq(inst_23042);var state_23106__$1 = (function (){var statearr_23177 = state_23106;(statearr_23177[9] = inst_23063__$1);
return statearr_23177;
})();if(inst_23063__$1)
{var statearr_23178_23240 = state_23106__$1;(statearr_23178_23240[1] = 33);
} else
{var statearr_23179_23241 = state_23106__$1;(statearr_23179_23241[1] = 34);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 29))
{var inst_23090 = (state_23106[2]);var state_23106__$1 = state_23106;var statearr_23180_23242 = state_23106__$1;(statearr_23180_23242[2] = inst_23090);
(statearr_23180_23242[1] = 26);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 30))
{var inst_23044 = (state_23106[10]);var inst_23045 = (state_23106[11]);var inst_23042 = (state_23106[12]);var inst_23043 = (state_23106[13]);var inst_23059 = (state_23106[2]);var inst_23060 = (inst_23045 + 1);var tmp23174 = inst_23044;var tmp23175 = inst_23042;var tmp23176 = inst_23043;var inst_23042__$1 = tmp23175;var inst_23043__$1 = tmp23176;var inst_23044__$1 = tmp23174;var inst_23045__$1 = inst_23060;var state_23106__$1 = (function (){var statearr_23181 = state_23106;(statearr_23181[10] = inst_23044__$1);
(statearr_23181[11] = inst_23045__$1);
(statearr_23181[12] = inst_23042__$1);
(statearr_23181[13] = inst_23043__$1);
(statearr_23181[31] = inst_23059);
return statearr_23181;
})();var statearr_23182_23243 = state_23106__$1;(statearr_23182_23243[2] = null);
(statearr_23182_23243[1] = 25);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23107 === 31))
{var inst_23050 = (state_23106[8]);var inst_23051 = (state_23106[2]);var inst_23052 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23053 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23050);var state_23106__$1 = (function (){var statearr_23183 = state_23106;(statearr_23183[32] = inst_23052);
(statearr_23183[33] = inst_23051);
return statearr_23183;
})();var statearr_23184_23244 = state_23106__$1;(statearr_23184_23244[2] = inst_23053);
cljs.core.async.impl.ioc_helpers.process_exception(state_23106__$1);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_23188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23188[0] = state_machine__5507__auto__);
(statearr_23188[1] = 1);
return statearr_23188;
});
var state_machine__5507__auto____1 = (function (state_23106){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23106);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23189){if((e23189 instanceof Object))
{var ex__5510__auto__ = e23189;var statearr_23190_23245 = state_23106;(statearr_23190_23245[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23106);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e23189;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__23246 = state_23106;
state_23106 = G__23246;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23106){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23191 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23192);
return statearr_23191;
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
cljs.core.async.Mix = (function (){var obj23248 = {};return obj23248;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,null,cljs.core.constant$keyword$143,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$144);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$143);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$144,chs);var pauses = pick(cljs.core.constant$keyword$142,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$145,solos,cljs.core.constant$keyword$146,pick(cljs.core.constant$keyword$143,chs),cljs.core.constant$keyword$147,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$142)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t23358 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23358 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta23359){
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
this.meta23359 = meta23359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23358.cljs$lang$type = true;
cljs.core.async.t23358.cljs$lang$ctorStr = "cljs.core.async/t23358";
cljs.core.async.t23358.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23358");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23358.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23358.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23358.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23358.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23358.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23358.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23358.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23360){var self__ = this;
var _23360__$1 = this;return self__.meta23359;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23360,meta23359__$1){var self__ = this;
var _23360__$1 = this;return (new cljs.core.async.t23358(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta23359__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23358 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23358(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23359){return (new cljs.core.async.t23358(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23359));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23358(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___23467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23425){var state_val_23426 = (state_23425[1]);if((state_val_23426 === 1))
{var inst_23364 = (state_23425[7]);var inst_23364__$1 = calc_state();var inst_23365 = cljs.core.seq_QMARK_(inst_23364__$1);var state_23425__$1 = (function (){var statearr_23427 = state_23425;(statearr_23427[7] = inst_23364__$1);
return statearr_23427;
})();if(inst_23365)
{var statearr_23428_23468 = state_23425__$1;(statearr_23428_23468[1] = 2);
} else
{var statearr_23429_23469 = state_23425__$1;(statearr_23429_23469[1] = 3);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 2))
{var inst_23364 = (state_23425[7]);var inst_23367 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23364);var state_23425__$1 = state_23425;var statearr_23430_23470 = state_23425__$1;(statearr_23430_23470[2] = inst_23367);
(statearr_23430_23470[1] = 4);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 3))
{var inst_23364 = (state_23425[7]);var state_23425__$1 = state_23425;var statearr_23431_23471 = state_23425__$1;(statearr_23431_23471[2] = inst_23364);
(statearr_23431_23471[1] = 4);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 4))
{var inst_23364 = (state_23425[7]);var inst_23370 = (state_23425[2]);var inst_23371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23370,cljs.core.constant$keyword$147);var inst_23372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23370,cljs.core.constant$keyword$146);var inst_23373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23370,cljs.core.constant$keyword$145);var inst_23374 = inst_23364;var state_23425__$1 = (function (){var statearr_23432 = state_23425;(statearr_23432[8] = inst_23374);
(statearr_23432[9] = inst_23372);
(statearr_23432[10] = inst_23373);
(statearr_23432[11] = inst_23371);
return statearr_23432;
})();var statearr_23433_23472 = state_23425__$1;(statearr_23433_23472[2] = null);
(statearr_23433_23472[1] = 5);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 5))
{var inst_23374 = (state_23425[8]);var inst_23377 = cljs.core.seq_QMARK_(inst_23374);var state_23425__$1 = state_23425;if(inst_23377)
{var statearr_23434_23473 = state_23425__$1;(statearr_23434_23473[1] = 7);
} else
{var statearr_23435_23474 = state_23425__$1;(statearr_23435_23474[1] = 8);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 6))
{var inst_23423 = (state_23425[2]);var state_23425__$1 = state_23425;return cljs.core.async.impl.ioc_helpers.return_chan(state_23425__$1,inst_23423);
} else
{if((state_val_23426 === 7))
{var inst_23374 = (state_23425[8]);var inst_23379 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23374);var state_23425__$1 = state_23425;var statearr_23436_23475 = state_23425__$1;(statearr_23436_23475[2] = inst_23379);
(statearr_23436_23475[1] = 9);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 8))
{var inst_23374 = (state_23425[8]);var state_23425__$1 = state_23425;var statearr_23437_23476 = state_23425__$1;(statearr_23437_23476[2] = inst_23374);
(statearr_23437_23476[1] = 9);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 9))
{var inst_23382 = (state_23425[12]);var inst_23382__$1 = (state_23425[2]);var inst_23383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23382__$1,cljs.core.constant$keyword$147);var inst_23384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23382__$1,cljs.core.constant$keyword$146);var inst_23385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23382__$1,cljs.core.constant$keyword$145);var state_23425__$1 = (function (){var statearr_23438 = state_23425;(statearr_23438[13] = inst_23385);
(statearr_23438[14] = inst_23384);
(statearr_23438[12] = inst_23382__$1);
return statearr_23438;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_23425__$1,10,inst_23383);
} else
{if((state_val_23426 === 10))
{var inst_23390 = (state_23425[15]);var inst_23389 = (state_23425[16]);var inst_23388 = (state_23425[2]);var inst_23389__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23388,0,null);var inst_23390__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23388,1,null);var inst_23391 = (inst_23389__$1 == null);var inst_23392 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23390__$1,change);var inst_23393 = (inst_23391) || (inst_23392);var state_23425__$1 = (function (){var statearr_23439 = state_23425;(statearr_23439[15] = inst_23390__$1);
(statearr_23439[16] = inst_23389__$1);
return statearr_23439;
})();if(cljs.core.truth_(inst_23393))
{var statearr_23440_23477 = state_23425__$1;(statearr_23440_23477[1] = 11);
} else
{var statearr_23441_23478 = state_23425__$1;(statearr_23441_23478[1] = 12);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 11))
{var inst_23389 = (state_23425[16]);var inst_23395 = (inst_23389 == null);var state_23425__$1 = state_23425;if(cljs.core.truth_(inst_23395))
{var statearr_23442_23479 = state_23425__$1;(statearr_23442_23479[1] = 14);
} else
{var statearr_23443_23480 = state_23425__$1;(statearr_23443_23480[1] = 15);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 12))
{var inst_23390 = (state_23425[15]);var inst_23385 = (state_23425[13]);var inst_23404 = (state_23425[17]);var inst_23404__$1 = (inst_23385.cljs$core$IFn$_invoke$arity$1 ? inst_23385.cljs$core$IFn$_invoke$arity$1(inst_23390) : inst_23385.call(null,inst_23390));var state_23425__$1 = (function (){var statearr_23444 = state_23425;(statearr_23444[17] = inst_23404__$1);
return statearr_23444;
})();if(cljs.core.truth_(inst_23404__$1))
{var statearr_23445_23481 = state_23425__$1;(statearr_23445_23481[1] = 17);
} else
{var statearr_23446_23482 = state_23425__$1;(statearr_23446_23482[1] = 18);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 13))
{var inst_23421 = (state_23425[2]);var state_23425__$1 = state_23425;var statearr_23447_23483 = state_23425__$1;(statearr_23447_23483[2] = inst_23421);
(statearr_23447_23483[1] = 6);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 14))
{var inst_23390 = (state_23425[15]);var inst_23397 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23390);var state_23425__$1 = state_23425;var statearr_23448_23484 = state_23425__$1;(statearr_23448_23484[2] = inst_23397);
(statearr_23448_23484[1] = 16);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 15))
{var state_23425__$1 = state_23425;var statearr_23449_23485 = state_23425__$1;(statearr_23449_23485[2] = null);
(statearr_23449_23485[1] = 16);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 16))
{var inst_23400 = (state_23425[2]);var inst_23401 = calc_state();var inst_23374 = inst_23401;var state_23425__$1 = (function (){var statearr_23450 = state_23425;(statearr_23450[18] = inst_23400);
(statearr_23450[8] = inst_23374);
return statearr_23450;
})();var statearr_23451_23486 = state_23425__$1;(statearr_23451_23486[2] = null);
(statearr_23451_23486[1] = 5);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 17))
{var inst_23404 = (state_23425[17]);var state_23425__$1 = state_23425;var statearr_23452_23487 = state_23425__$1;(statearr_23452_23487[2] = inst_23404);
(statearr_23452_23487[1] = 19);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 18))
{var inst_23390 = (state_23425[15]);var inst_23385 = (state_23425[13]);var inst_23384 = (state_23425[14]);var inst_23407 = cljs.core.empty_QMARK_(inst_23385);var inst_23408 = (inst_23384.cljs$core$IFn$_invoke$arity$1 ? inst_23384.cljs$core$IFn$_invoke$arity$1(inst_23390) : inst_23384.call(null,inst_23390));var inst_23409 = cljs.core.not(inst_23408);var inst_23410 = (inst_23407) && (inst_23409);var state_23425__$1 = state_23425;var statearr_23453_23488 = state_23425__$1;(statearr_23453_23488[2] = inst_23410);
(statearr_23453_23488[1] = 19);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 19))
{var inst_23412 = (state_23425[2]);var state_23425__$1 = state_23425;if(cljs.core.truth_(inst_23412))
{var statearr_23454_23489 = state_23425__$1;(statearr_23454_23489[1] = 20);
} else
{var statearr_23455_23490 = state_23425__$1;(statearr_23455_23490[1] = 21);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 20))
{var inst_23389 = (state_23425[16]);var state_23425__$1 = state_23425;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23425__$1,23,out,inst_23389);
} else
{if((state_val_23426 === 21))
{var state_23425__$1 = state_23425;var statearr_23456_23491 = state_23425__$1;(statearr_23456_23491[2] = null);
(statearr_23456_23491[1] = 22);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 22))
{var inst_23382 = (state_23425[12]);var inst_23418 = (state_23425[2]);var inst_23374 = inst_23382;var state_23425__$1 = (function (){var statearr_23457 = state_23425;(statearr_23457[19] = inst_23418);
(statearr_23457[8] = inst_23374);
return statearr_23457;
})();var statearr_23458_23492 = state_23425__$1;(statearr_23458_23492[2] = null);
(statearr_23458_23492[1] = 5);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23426 === 23))
{var inst_23415 = (state_23425[2]);var state_23425__$1 = state_23425;var statearr_23459_23493 = state_23425__$1;(statearr_23459_23493[2] = inst_23415);
(statearr_23459_23493[1] = 22);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_23463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23463[0] = state_machine__5507__auto__);
(statearr_23463[1] = 1);
return statearr_23463;
});
var state_machine__5507__auto____1 = (function (state_23425){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23425);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23464){if((e23464 instanceof Object))
{var ex__5510__auto__ = e23464;var statearr_23465_23494 = state_23425;(statearr_23465_23494[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23425);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e23464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__23495 = state_23425;
state_23425 = G__23495;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23425){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23466 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23467);
return statearr_23466;
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
cljs.core.async.Pub = (function (){var obj23497 = {};return obj23497;
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
return (function (p1__23498_SHARP_){if(cljs.core.truth_((p1__23498_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23498_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23498_SHARP_.call(null,topic))))
{return p1__23498_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23498_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23623 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23623 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23624){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23624 = meta23624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23623.cljs$lang$type = true;
cljs.core.async.t23623.cljs$lang$ctorStr = "cljs.core.async/t23623";
cljs.core.async.t23623.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23623");
});})(mults,ensure_mult))
;
cljs.core.async.t23623.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23623.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23623.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23623.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23623.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23623.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23625){var self__ = this;
var _23625__$1 = this;return self__.meta23624;
});})(mults,ensure_mult))
;
cljs.core.async.t23623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23625,meta23624__$1){var self__ = this;
var _23625__$1 = this;return (new cljs.core.async.t23623(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23624__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23623 = ((function (mults,ensure_mult){
return (function __GT_t23623(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23624){return (new cljs.core.async.t23623(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23624));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23623(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___23747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23699){var state_val_23700 = (state_23699[1]);if((state_val_23700 === 1))
{var state_23699__$1 = state_23699;var statearr_23701_23748 = state_23699__$1;(statearr_23701_23748[2] = null);
(statearr_23701_23748[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 2))
{var state_23699__$1 = state_23699;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23699__$1,4,ch);
} else
{if((state_val_23700 === 3))
{var inst_23697 = (state_23699[2]);var state_23699__$1 = state_23699;return cljs.core.async.impl.ioc_helpers.return_chan(state_23699__$1,inst_23697);
} else
{if((state_val_23700 === 4))
{var inst_23628 = (state_23699[7]);var inst_23628__$1 = (state_23699[2]);var inst_23629 = (inst_23628__$1 == null);var state_23699__$1 = (function (){var statearr_23702 = state_23699;(statearr_23702[7] = inst_23628__$1);
return statearr_23702;
})();if(cljs.core.truth_(inst_23629))
{var statearr_23703_23749 = state_23699__$1;(statearr_23703_23749[1] = 5);
} else
{var statearr_23704_23750 = state_23699__$1;(statearr_23704_23750[1] = 6);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 5))
{var inst_23635 = cljs.core.deref(mults);var inst_23636 = cljs.core.vals(inst_23635);var inst_23637 = cljs.core.seq(inst_23636);var inst_23638 = inst_23637;var inst_23639 = null;var inst_23640 = 0;var inst_23641 = 0;var state_23699__$1 = (function (){var statearr_23705 = state_23699;(statearr_23705[8] = inst_23641);
(statearr_23705[9] = inst_23640);
(statearr_23705[10] = inst_23638);
(statearr_23705[11] = inst_23639);
return statearr_23705;
})();var statearr_23706_23751 = state_23699__$1;(statearr_23706_23751[2] = null);
(statearr_23706_23751[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 6))
{var inst_23678 = (state_23699[12]);var inst_23676 = (state_23699[13]);var inst_23628 = (state_23699[7]);var inst_23676__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23628) : topic_fn.call(null,inst_23628));var inst_23677 = cljs.core.deref(mults);var inst_23678__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23677,inst_23676__$1);var state_23699__$1 = (function (){var statearr_23707 = state_23699;(statearr_23707[12] = inst_23678__$1);
(statearr_23707[13] = inst_23676__$1);
return statearr_23707;
})();if(cljs.core.truth_(inst_23678__$1))
{var statearr_23708_23752 = state_23699__$1;(statearr_23708_23752[1] = 19);
} else
{var statearr_23709_23753 = state_23699__$1;(statearr_23709_23753[1] = 20);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 7))
{var inst_23695 = (state_23699[2]);var state_23699__$1 = state_23699;var statearr_23710_23754 = state_23699__$1;(statearr_23710_23754[2] = inst_23695);
(statearr_23710_23754[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 8))
{var inst_23641 = (state_23699[8]);var inst_23640 = (state_23699[9]);var inst_23643 = (inst_23641 < inst_23640);var inst_23644 = inst_23643;var state_23699__$1 = state_23699;if(cljs.core.truth_(inst_23644))
{var statearr_23714_23755 = state_23699__$1;(statearr_23714_23755[1] = 10);
} else
{var statearr_23715_23756 = state_23699__$1;(statearr_23715_23756[1] = 11);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 9))
{var inst_23674 = (state_23699[2]);var state_23699__$1 = state_23699;var statearr_23716_23757 = state_23699__$1;(statearr_23716_23757[2] = inst_23674);
(statearr_23716_23757[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 10))
{var inst_23641 = (state_23699[8]);var inst_23640 = (state_23699[9]);var inst_23638 = (state_23699[10]);var inst_23639 = (state_23699[11]);var inst_23646 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23639,inst_23641);var inst_23647 = cljs.core.async.muxch_STAR_(inst_23646);var inst_23648 = cljs.core.async.close_BANG_(inst_23647);var inst_23649 = (inst_23641 + 1);var tmp23711 = inst_23640;var tmp23712 = inst_23638;var tmp23713 = inst_23639;var inst_23638__$1 = tmp23712;var inst_23639__$1 = tmp23713;var inst_23640__$1 = tmp23711;var inst_23641__$1 = inst_23649;var state_23699__$1 = (function (){var statearr_23717 = state_23699;(statearr_23717[14] = inst_23648);
(statearr_23717[8] = inst_23641__$1);
(statearr_23717[9] = inst_23640__$1);
(statearr_23717[10] = inst_23638__$1);
(statearr_23717[11] = inst_23639__$1);
return statearr_23717;
})();var statearr_23718_23758 = state_23699__$1;(statearr_23718_23758[2] = null);
(statearr_23718_23758[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 11))
{var inst_23638 = (state_23699[10]);var inst_23652 = (state_23699[15]);var inst_23652__$1 = cljs.core.seq(inst_23638);var state_23699__$1 = (function (){var statearr_23719 = state_23699;(statearr_23719[15] = inst_23652__$1);
return statearr_23719;
})();if(inst_23652__$1)
{var statearr_23720_23759 = state_23699__$1;(statearr_23720_23759[1] = 13);
} else
{var statearr_23721_23760 = state_23699__$1;(statearr_23721_23760[1] = 14);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 12))
{var inst_23672 = (state_23699[2]);var state_23699__$1 = state_23699;var statearr_23722_23761 = state_23699__$1;(statearr_23722_23761[2] = inst_23672);
(statearr_23722_23761[1] = 9);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 13))
{var inst_23652 = (state_23699[15]);var inst_23654 = cljs.core.chunked_seq_QMARK_(inst_23652);var state_23699__$1 = state_23699;if(inst_23654)
{var statearr_23723_23762 = state_23699__$1;(statearr_23723_23762[1] = 16);
} else
{var statearr_23724_23763 = state_23699__$1;(statearr_23724_23763[1] = 17);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 14))
{var state_23699__$1 = state_23699;var statearr_23725_23764 = state_23699__$1;(statearr_23725_23764[2] = null);
(statearr_23725_23764[1] = 15);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 15))
{var inst_23670 = (state_23699[2]);var state_23699__$1 = state_23699;var statearr_23726_23765 = state_23699__$1;(statearr_23726_23765[2] = inst_23670);
(statearr_23726_23765[1] = 12);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 16))
{var inst_23652 = (state_23699[15]);var inst_23656 = cljs.core.chunk_first(inst_23652);var inst_23657 = cljs.core.chunk_rest(inst_23652);var inst_23658 = cljs.core.count(inst_23656);var inst_23638 = inst_23657;var inst_23639 = inst_23656;var inst_23640 = inst_23658;var inst_23641 = 0;var state_23699__$1 = (function (){var statearr_23727 = state_23699;(statearr_23727[8] = inst_23641);
(statearr_23727[9] = inst_23640);
(statearr_23727[10] = inst_23638);
(statearr_23727[11] = inst_23639);
return statearr_23727;
})();var statearr_23728_23766 = state_23699__$1;(statearr_23728_23766[2] = null);
(statearr_23728_23766[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 17))
{var inst_23652 = (state_23699[15]);var inst_23661 = cljs.core.first(inst_23652);var inst_23662 = cljs.core.async.muxch_STAR_(inst_23661);var inst_23663 = cljs.core.async.close_BANG_(inst_23662);var inst_23664 = cljs.core.next(inst_23652);var inst_23638 = inst_23664;var inst_23639 = null;var inst_23640 = 0;var inst_23641 = 0;var state_23699__$1 = (function (){var statearr_23729 = state_23699;(statearr_23729[8] = inst_23641);
(statearr_23729[9] = inst_23640);
(statearr_23729[16] = inst_23663);
(statearr_23729[10] = inst_23638);
(statearr_23729[11] = inst_23639);
return statearr_23729;
})();var statearr_23730_23767 = state_23699__$1;(statearr_23730_23767[2] = null);
(statearr_23730_23767[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 18))
{var inst_23667 = (state_23699[2]);var state_23699__$1 = state_23699;var statearr_23731_23768 = state_23699__$1;(statearr_23731_23768[2] = inst_23667);
(statearr_23731_23768[1] = 15);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 19))
{var state_23699__$1 = state_23699;var statearr_23732_23769 = state_23699__$1;(statearr_23732_23769[2] = null);
(statearr_23732_23769[1] = 24);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 20))
{var state_23699__$1 = state_23699;var statearr_23733_23770 = state_23699__$1;(statearr_23733_23770[2] = null);
(statearr_23733_23770[1] = 21);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 21))
{var inst_23692 = (state_23699[2]);var state_23699__$1 = (function (){var statearr_23734 = state_23699;(statearr_23734[17] = inst_23692);
return statearr_23734;
})();var statearr_23735_23771 = state_23699__$1;(statearr_23735_23771[2] = null);
(statearr_23735_23771[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 22))
{var inst_23689 = (state_23699[2]);var state_23699__$1 = state_23699;var statearr_23736_23772 = state_23699__$1;(statearr_23736_23772[2] = inst_23689);
(statearr_23736_23772[1] = 21);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 23))
{var inst_23676 = (state_23699[13]);var inst_23680 = (state_23699[2]);var inst_23681 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23676);var state_23699__$1 = (function (){var statearr_23737 = state_23699;(statearr_23737[18] = inst_23680);
return statearr_23737;
})();var statearr_23738_23773 = state_23699__$1;(statearr_23738_23773[2] = inst_23681);
cljs.core.async.impl.ioc_helpers.process_exception(state_23699__$1);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23700 === 24))
{var inst_23678 = (state_23699[12]);var inst_23628 = (state_23699[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23699,23,Object,null,22);var inst_23685 = cljs.core.async.muxch_STAR_(inst_23678);var state_23699__$1 = state_23699;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23699__$1,25,inst_23685,inst_23628);
} else
{if((state_val_23700 === 25))
{var inst_23687 = (state_23699[2]);var state_23699__$1 = state_23699;var statearr_23739_23774 = state_23699__$1;(statearr_23739_23774[2] = inst_23687);
cljs.core.async.impl.ioc_helpers.process_exception(state_23699__$1);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_23743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23743[0] = state_machine__5507__auto__);
(statearr_23743[1] = 1);
return statearr_23743;
});
var state_machine__5507__auto____1 = (function (state_23699){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23699);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23744){if((e23744 instanceof Object))
{var ex__5510__auto__ = e23744;var statearr_23745_23775 = state_23699;(statearr_23745_23775[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23699);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e23744;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__23776 = state_23699;
state_23699 = G__23776;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23699){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23746 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23747);
return statearr_23746;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___23913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23883){var state_val_23884 = (state_23883[1]);if((state_val_23884 === 1))
{var state_23883__$1 = state_23883;var statearr_23885_23914 = state_23883__$1;(statearr_23885_23914[2] = null);
(statearr_23885_23914[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 2))
{var inst_23846 = cljs.core.reset_BANG_(dctr,cnt);var inst_23847 = 0;var state_23883__$1 = (function (){var statearr_23886 = state_23883;(statearr_23886[7] = inst_23847);
(statearr_23886[8] = inst_23846);
return statearr_23886;
})();var statearr_23887_23915 = state_23883__$1;(statearr_23887_23915[2] = null);
(statearr_23887_23915[1] = 4);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 3))
{var inst_23881 = (state_23883[2]);var state_23883__$1 = state_23883;return cljs.core.async.impl.ioc_helpers.return_chan(state_23883__$1,inst_23881);
} else
{if((state_val_23884 === 4))
{var inst_23847 = (state_23883[7]);var inst_23849 = (inst_23847 < cnt);var state_23883__$1 = state_23883;if(cljs.core.truth_(inst_23849))
{var statearr_23888_23916 = state_23883__$1;(statearr_23888_23916[1] = 6);
} else
{var statearr_23889_23917 = state_23883__$1;(statearr_23889_23917[1] = 7);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 5))
{var inst_23867 = (state_23883[2]);var state_23883__$1 = (function (){var statearr_23890 = state_23883;(statearr_23890[9] = inst_23867);
return statearr_23890;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23883__$1,12,dchan);
} else
{if((state_val_23884 === 6))
{var state_23883__$1 = state_23883;var statearr_23891_23918 = state_23883__$1;(statearr_23891_23918[2] = null);
(statearr_23891_23918[1] = 11);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 7))
{var state_23883__$1 = state_23883;var statearr_23892_23919 = state_23883__$1;(statearr_23892_23919[2] = null);
(statearr_23892_23919[1] = 8);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 8))
{var inst_23865 = (state_23883[2]);var state_23883__$1 = state_23883;var statearr_23893_23920 = state_23883__$1;(statearr_23893_23920[2] = inst_23865);
(statearr_23893_23920[1] = 5);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 9))
{var inst_23847 = (state_23883[7]);var inst_23860 = (state_23883[2]);var inst_23861 = (inst_23847 + 1);var inst_23847__$1 = inst_23861;var state_23883__$1 = (function (){var statearr_23894 = state_23883;(statearr_23894[7] = inst_23847__$1);
(statearr_23894[10] = inst_23860);
return statearr_23894;
})();var statearr_23895_23921 = state_23883__$1;(statearr_23895_23921[2] = null);
(statearr_23895_23921[1] = 4);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 10))
{var inst_23851 = (state_23883[2]);var inst_23852 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_23883__$1 = (function (){var statearr_23896 = state_23883;(statearr_23896[11] = inst_23851);
return statearr_23896;
})();var statearr_23897_23922 = state_23883__$1;(statearr_23897_23922[2] = inst_23852);
cljs.core.async.impl.ioc_helpers.process_exception(state_23883__$1);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 11))
{var inst_23847 = (state_23883[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23883,10,Object,null,9);var inst_23856 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_23847) : chs__$1.call(null,inst_23847));var inst_23857 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_23847) : done.call(null,inst_23847));var inst_23858 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23856,inst_23857);var state_23883__$1 = state_23883;var statearr_23898_23923 = state_23883__$1;(statearr_23898_23923[2] = inst_23858);
cljs.core.async.impl.ioc_helpers.process_exception(state_23883__$1);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 12))
{var inst_23869 = (state_23883[12]);var inst_23869__$1 = (state_23883[2]);var inst_23870 = cljs.core.some(cljs.core.nil_QMARK_,inst_23869__$1);var state_23883__$1 = (function (){var statearr_23899 = state_23883;(statearr_23899[12] = inst_23869__$1);
return statearr_23899;
})();if(cljs.core.truth_(inst_23870))
{var statearr_23900_23924 = state_23883__$1;(statearr_23900_23924[1] = 13);
} else
{var statearr_23901_23925 = state_23883__$1;(statearr_23901_23925[1] = 14);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 13))
{var inst_23872 = cljs.core.async.close_BANG_(out);var state_23883__$1 = state_23883;var statearr_23902_23926 = state_23883__$1;(statearr_23902_23926[2] = inst_23872);
(statearr_23902_23926[1] = 15);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 14))
{var inst_23869 = (state_23883[12]);var inst_23874 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23869);var state_23883__$1 = state_23883;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23883__$1,16,out,inst_23874);
} else
{if((state_val_23884 === 15))
{var inst_23879 = (state_23883[2]);var state_23883__$1 = state_23883;var statearr_23903_23927 = state_23883__$1;(statearr_23903_23927[2] = inst_23879);
(statearr_23903_23927[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_23884 === 16))
{var inst_23876 = (state_23883[2]);var state_23883__$1 = (function (){var statearr_23904 = state_23883;(statearr_23904[13] = inst_23876);
return statearr_23904;
})();var statearr_23905_23928 = state_23883__$1;(statearr_23905_23928[2] = null);
(statearr_23905_23928[1] = 2);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_23909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23909[0] = state_machine__5507__auto__);
(statearr_23909[1] = 1);
return statearr_23909;
});
var state_machine__5507__auto____1 = (function (state_23883){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23883);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23910){if((e23910 instanceof Object))
{var ex__5510__auto__ = e23910;var statearr_23911_23929 = state_23883;(statearr_23911_23929[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23883);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e23910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__23930 = state_23883;
state_23883 = G__23930;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23883){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23912 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23913);
return statearr_23912;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24014){var state_val_24015 = (state_24014[1]);if((state_val_24015 === 1))
{var inst_23985 = cljs.core.vec(chs);var inst_23986 = inst_23985;var state_24014__$1 = (function (){var statearr_24016 = state_24014;(statearr_24016[7] = inst_23986);
return statearr_24016;
})();var statearr_24017_24039 = state_24014__$1;(statearr_24017_24039[2] = null);
(statearr_24017_24039[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24015 === 2))
{var inst_23986 = (state_24014[7]);var inst_23988 = cljs.core.count(inst_23986);var inst_23989 = (inst_23988 > 0);var state_24014__$1 = state_24014;if(cljs.core.truth_(inst_23989))
{var statearr_24018_24040 = state_24014__$1;(statearr_24018_24040[1] = 4);
} else
{var statearr_24019_24041 = state_24014__$1;(statearr_24019_24041[1] = 5);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24015 === 3))
{var inst_24012 = (state_24014[2]);var state_24014__$1 = state_24014;return cljs.core.async.impl.ioc_helpers.return_chan(state_24014__$1,inst_24012);
} else
{if((state_val_24015 === 4))
{var inst_23986 = (state_24014[7]);var state_24014__$1 = state_24014;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24014__$1,7,inst_23986);
} else
{if((state_val_24015 === 5))
{var inst_24008 = cljs.core.async.close_BANG_(out);var state_24014__$1 = state_24014;var statearr_24020_24042 = state_24014__$1;(statearr_24020_24042[2] = inst_24008);
(statearr_24020_24042[1] = 6);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24015 === 6))
{var inst_24010 = (state_24014[2]);var state_24014__$1 = state_24014;var statearr_24021_24043 = state_24014__$1;(statearr_24021_24043[2] = inst_24010);
(statearr_24021_24043[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24015 === 7))
{var inst_23994 = (state_24014[8]);var inst_23993 = (state_24014[9]);var inst_23993__$1 = (state_24014[2]);var inst_23994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23993__$1,0,null);var inst_23995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23993__$1,1,null);var inst_23996 = (inst_23994__$1 == null);var state_24014__$1 = (function (){var statearr_24022 = state_24014;(statearr_24022[10] = inst_23995);
(statearr_24022[8] = inst_23994__$1);
(statearr_24022[9] = inst_23993__$1);
return statearr_24022;
})();if(cljs.core.truth_(inst_23996))
{var statearr_24023_24044 = state_24014__$1;(statearr_24023_24044[1] = 8);
} else
{var statearr_24024_24045 = state_24014__$1;(statearr_24024_24045[1] = 9);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24015 === 8))
{var inst_23995 = (state_24014[10]);var inst_23986 = (state_24014[7]);var inst_23994 = (state_24014[8]);var inst_23993 = (state_24014[9]);var inst_23998 = (function (){var c = inst_23995;var v = inst_23994;var vec__23991 = inst_23993;var cs = inst_23986;return ((function (c,v,vec__23991,cs,inst_23995,inst_23986,inst_23994,inst_23993,state_val_24015){
return (function (p1__23931_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23931_SHARP_);
});
;})(c,v,vec__23991,cs,inst_23995,inst_23986,inst_23994,inst_23993,state_val_24015))
})();var inst_23999 = cljs.core.filterv(inst_23998,inst_23986);var inst_23986__$1 = inst_23999;var state_24014__$1 = (function (){var statearr_24025 = state_24014;(statearr_24025[7] = inst_23986__$1);
return statearr_24025;
})();var statearr_24026_24046 = state_24014__$1;(statearr_24026_24046[2] = null);
(statearr_24026_24046[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24015 === 9))
{var inst_23994 = (state_24014[8]);var state_24014__$1 = state_24014;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24014__$1,11,out,inst_23994);
} else
{if((state_val_24015 === 10))
{var inst_24006 = (state_24014[2]);var state_24014__$1 = state_24014;var statearr_24028_24047 = state_24014__$1;(statearr_24028_24047[2] = inst_24006);
(statearr_24028_24047[1] = 6);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24015 === 11))
{var inst_23986 = (state_24014[7]);var inst_24003 = (state_24014[2]);var tmp24027 = inst_23986;var inst_23986__$1 = tmp24027;var state_24014__$1 = (function (){var statearr_24029 = state_24014;(statearr_24029[7] = inst_23986__$1);
(statearr_24029[11] = inst_24003);
return statearr_24029;
})();var statearr_24030_24048 = state_24014__$1;(statearr_24030_24048[2] = null);
(statearr_24030_24048[1] = 2);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_24034 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24034[0] = state_machine__5507__auto__);
(statearr_24034[1] = 1);
return statearr_24034;
});
var state_machine__5507__auto____1 = (function (state_24014){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24014);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24035){if((e24035 instanceof Object))
{var ex__5510__auto__ = e24035;var statearr_24036_24049 = state_24014;(statearr_24036_24049[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24014);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e24035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__24050 = state_24014;
state_24014 = G__24050;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24014){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24037 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24038);
return statearr_24037;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24120){var state_val_24121 = (state_24120[1]);if((state_val_24121 === 1))
{var inst_24097 = 0;var state_24120__$1 = (function (){var statearr_24122 = state_24120;(statearr_24122[7] = inst_24097);
return statearr_24122;
})();var statearr_24123_24144 = state_24120__$1;(statearr_24123_24144[2] = null);
(statearr_24123_24144[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24121 === 2))
{var inst_24097 = (state_24120[7]);var inst_24099 = (inst_24097 < n);var state_24120__$1 = state_24120;if(cljs.core.truth_(inst_24099))
{var statearr_24124_24145 = state_24120__$1;(statearr_24124_24145[1] = 4);
} else
{var statearr_24125_24146 = state_24120__$1;(statearr_24125_24146[1] = 5);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24121 === 3))
{var inst_24117 = (state_24120[2]);var inst_24118 = cljs.core.async.close_BANG_(out);var state_24120__$1 = (function (){var statearr_24126 = state_24120;(statearr_24126[8] = inst_24117);
return statearr_24126;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24120__$1,inst_24118);
} else
{if((state_val_24121 === 4))
{var state_24120__$1 = state_24120;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24120__$1,7,ch);
} else
{if((state_val_24121 === 5))
{var state_24120__$1 = state_24120;var statearr_24127_24147 = state_24120__$1;(statearr_24127_24147[2] = null);
(statearr_24127_24147[1] = 6);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24121 === 6))
{var inst_24115 = (state_24120[2]);var state_24120__$1 = state_24120;var statearr_24128_24148 = state_24120__$1;(statearr_24128_24148[2] = inst_24115);
(statearr_24128_24148[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24121 === 7))
{var inst_24102 = (state_24120[9]);var inst_24102__$1 = (state_24120[2]);var inst_24103 = (inst_24102__$1 == null);var inst_24104 = cljs.core.not(inst_24103);var state_24120__$1 = (function (){var statearr_24129 = state_24120;(statearr_24129[9] = inst_24102__$1);
return statearr_24129;
})();if(inst_24104)
{var statearr_24130_24149 = state_24120__$1;(statearr_24130_24149[1] = 8);
} else
{var statearr_24131_24150 = state_24120__$1;(statearr_24131_24150[1] = 9);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24121 === 8))
{var inst_24102 = (state_24120[9]);var state_24120__$1 = state_24120;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24120__$1,11,out,inst_24102);
} else
{if((state_val_24121 === 9))
{var state_24120__$1 = state_24120;var statearr_24132_24151 = state_24120__$1;(statearr_24132_24151[2] = null);
(statearr_24132_24151[1] = 10);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24121 === 10))
{var inst_24112 = (state_24120[2]);var state_24120__$1 = state_24120;var statearr_24133_24152 = state_24120__$1;(statearr_24133_24152[2] = inst_24112);
(statearr_24133_24152[1] = 6);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24121 === 11))
{var inst_24097 = (state_24120[7]);var inst_24107 = (state_24120[2]);var inst_24108 = (inst_24097 + 1);var inst_24097__$1 = inst_24108;var state_24120__$1 = (function (){var statearr_24134 = state_24120;(statearr_24134[7] = inst_24097__$1);
(statearr_24134[10] = inst_24107);
return statearr_24134;
})();var statearr_24135_24153 = state_24120__$1;(statearr_24135_24153[2] = null);
(statearr_24135_24153[1] = 2);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_24139 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24139[0] = state_machine__5507__auto__);
(statearr_24139[1] = 1);
return statearr_24139;
});
var state_machine__5507__auto____1 = (function (state_24120){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24120);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24140){if((e24140 instanceof Object))
{var ex__5510__auto__ = e24140;var statearr_24141_24154 = state_24120;(statearr_24141_24154[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24120);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e24140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__24155 = state_24120;
state_24120 = G__24155;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24120){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24142 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24143);
return statearr_24142;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24227){var state_val_24228 = (state_24227[1]);if((state_val_24228 === 1))
{var inst_24204 = null;var state_24227__$1 = (function (){var statearr_24229 = state_24227;(statearr_24229[7] = inst_24204);
return statearr_24229;
})();var statearr_24230_24253 = state_24227__$1;(statearr_24230_24253[2] = null);
(statearr_24230_24253[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24228 === 2))
{var state_24227__$1 = state_24227;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24227__$1,4,ch);
} else
{if((state_val_24228 === 3))
{var inst_24224 = (state_24227[2]);var inst_24225 = cljs.core.async.close_BANG_(out);var state_24227__$1 = (function (){var statearr_24231 = state_24227;(statearr_24231[8] = inst_24224);
return statearr_24231;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24227__$1,inst_24225);
} else
{if((state_val_24228 === 4))
{var inst_24207 = (state_24227[9]);var inst_24207__$1 = (state_24227[2]);var inst_24208 = (inst_24207__$1 == null);var inst_24209 = cljs.core.not(inst_24208);var state_24227__$1 = (function (){var statearr_24232 = state_24227;(statearr_24232[9] = inst_24207__$1);
return statearr_24232;
})();if(inst_24209)
{var statearr_24233_24254 = state_24227__$1;(statearr_24233_24254[1] = 5);
} else
{var statearr_24234_24255 = state_24227__$1;(statearr_24234_24255[1] = 6);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24228 === 5))
{var inst_24207 = (state_24227[9]);var inst_24204 = (state_24227[7]);var inst_24211 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24207,inst_24204);var state_24227__$1 = state_24227;if(inst_24211)
{var statearr_24235_24256 = state_24227__$1;(statearr_24235_24256[1] = 8);
} else
{var statearr_24236_24257 = state_24227__$1;(statearr_24236_24257[1] = 9);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24228 === 6))
{var state_24227__$1 = state_24227;var statearr_24238_24258 = state_24227__$1;(statearr_24238_24258[2] = null);
(statearr_24238_24258[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24228 === 7))
{var inst_24222 = (state_24227[2]);var state_24227__$1 = state_24227;var statearr_24239_24259 = state_24227__$1;(statearr_24239_24259[2] = inst_24222);
(statearr_24239_24259[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24228 === 8))
{var inst_24204 = (state_24227[7]);var tmp24237 = inst_24204;var inst_24204__$1 = tmp24237;var state_24227__$1 = (function (){var statearr_24240 = state_24227;(statearr_24240[7] = inst_24204__$1);
return statearr_24240;
})();var statearr_24241_24260 = state_24227__$1;(statearr_24241_24260[2] = null);
(statearr_24241_24260[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24228 === 9))
{var inst_24207 = (state_24227[9]);var state_24227__$1 = state_24227;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24227__$1,11,out,inst_24207);
} else
{if((state_val_24228 === 10))
{var inst_24219 = (state_24227[2]);var state_24227__$1 = state_24227;var statearr_24242_24261 = state_24227__$1;(statearr_24242_24261[2] = inst_24219);
(statearr_24242_24261[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24228 === 11))
{var inst_24207 = (state_24227[9]);var inst_24216 = (state_24227[2]);var inst_24204 = inst_24207;var state_24227__$1 = (function (){var statearr_24243 = state_24227;(statearr_24243[7] = inst_24204);
(statearr_24243[10] = inst_24216);
return statearr_24243;
})();var statearr_24244_24262 = state_24227__$1;(statearr_24244_24262[2] = null);
(statearr_24244_24262[1] = 2);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_24248 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24248[0] = state_machine__5507__auto__);
(statearr_24248[1] = 1);
return statearr_24248;
});
var state_machine__5507__auto____1 = (function (state_24227){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24227);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24249){if((e24249 instanceof Object))
{var ex__5510__auto__ = e24249;var statearr_24250_24263 = state_24227;(statearr_24250_24263[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24227);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e24249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__24264 = state_24227;
state_24227 = G__24264;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24227){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24251 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24252);
return statearr_24251;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24369){var state_val_24370 = (state_24369[1]);if((state_val_24370 === 1))
{var inst_24332 = (new Array(n));var inst_24333 = inst_24332;var inst_24334 = 0;var state_24369__$1 = (function (){var statearr_24371 = state_24369;(statearr_24371[7] = inst_24334);
(statearr_24371[8] = inst_24333);
return statearr_24371;
})();var statearr_24372_24400 = state_24369__$1;(statearr_24372_24400[2] = null);
(statearr_24372_24400[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24370 === 2))
{var state_24369__$1 = state_24369;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24369__$1,4,ch);
} else
{if((state_val_24370 === 3))
{var inst_24367 = (state_24369[2]);var state_24369__$1 = state_24369;return cljs.core.async.impl.ioc_helpers.return_chan(state_24369__$1,inst_24367);
} else
{if((state_val_24370 === 4))
{var inst_24337 = (state_24369[9]);var inst_24337__$1 = (state_24369[2]);var inst_24338 = (inst_24337__$1 == null);var inst_24339 = cljs.core.not(inst_24338);var state_24369__$1 = (function (){var statearr_24373 = state_24369;(statearr_24373[9] = inst_24337__$1);
return statearr_24373;
})();if(inst_24339)
{var statearr_24374_24401 = state_24369__$1;(statearr_24374_24401[1] = 5);
} else
{var statearr_24375_24402 = state_24369__$1;(statearr_24375_24402[1] = 6);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24370 === 5))
{var inst_24334 = (state_24369[7]);var inst_24333 = (state_24369[8]);var inst_24342 = (state_24369[10]);var inst_24337 = (state_24369[9]);var inst_24341 = (inst_24333[inst_24334] = inst_24337);var inst_24342__$1 = (inst_24334 + 1);var inst_24343 = (inst_24342__$1 < n);var state_24369__$1 = (function (){var statearr_24376 = state_24369;(statearr_24376[10] = inst_24342__$1);
(statearr_24376[11] = inst_24341);
return statearr_24376;
})();if(cljs.core.truth_(inst_24343))
{var statearr_24377_24403 = state_24369__$1;(statearr_24377_24403[1] = 8);
} else
{var statearr_24378_24404 = state_24369__$1;(statearr_24378_24404[1] = 9);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24370 === 6))
{var inst_24334 = (state_24369[7]);var inst_24355 = (inst_24334 > 0);var state_24369__$1 = state_24369;if(cljs.core.truth_(inst_24355))
{var statearr_24380_24405 = state_24369__$1;(statearr_24380_24405[1] = 12);
} else
{var statearr_24381_24406 = state_24369__$1;(statearr_24381_24406[1] = 13);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24370 === 7))
{var inst_24365 = (state_24369[2]);var state_24369__$1 = state_24369;var statearr_24382_24407 = state_24369__$1;(statearr_24382_24407[2] = inst_24365);
(statearr_24382_24407[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24370 === 8))
{var inst_24333 = (state_24369[8]);var inst_24342 = (state_24369[10]);var tmp24379 = inst_24333;var inst_24333__$1 = tmp24379;var inst_24334 = inst_24342;var state_24369__$1 = (function (){var statearr_24383 = state_24369;(statearr_24383[7] = inst_24334);
(statearr_24383[8] = inst_24333__$1);
return statearr_24383;
})();var statearr_24384_24408 = state_24369__$1;(statearr_24384_24408[2] = null);
(statearr_24384_24408[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24370 === 9))
{var inst_24333 = (state_24369[8]);var inst_24347 = cljs.core.vec(inst_24333);var state_24369__$1 = state_24369;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24369__$1,11,out,inst_24347);
} else
{if((state_val_24370 === 10))
{var inst_24353 = (state_24369[2]);var state_24369__$1 = state_24369;var statearr_24385_24409 = state_24369__$1;(statearr_24385_24409[2] = inst_24353);
(statearr_24385_24409[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24370 === 11))
{var inst_24349 = (state_24369[2]);var inst_24350 = (new Array(n));var inst_24333 = inst_24350;var inst_24334 = 0;var state_24369__$1 = (function (){var statearr_24386 = state_24369;(statearr_24386[7] = inst_24334);
(statearr_24386[8] = inst_24333);
(statearr_24386[12] = inst_24349);
return statearr_24386;
})();var statearr_24387_24410 = state_24369__$1;(statearr_24387_24410[2] = null);
(statearr_24387_24410[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24370 === 12))
{var inst_24333 = (state_24369[8]);var inst_24357 = cljs.core.vec(inst_24333);var state_24369__$1 = state_24369;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24369__$1,15,out,inst_24357);
} else
{if((state_val_24370 === 13))
{var state_24369__$1 = state_24369;var statearr_24388_24411 = state_24369__$1;(statearr_24388_24411[2] = null);
(statearr_24388_24411[1] = 14);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24370 === 14))
{var inst_24362 = (state_24369[2]);var inst_24363 = cljs.core.async.close_BANG_(out);var state_24369__$1 = (function (){var statearr_24389 = state_24369;(statearr_24389[13] = inst_24362);
return statearr_24389;
})();var statearr_24390_24412 = state_24369__$1;(statearr_24390_24412[2] = inst_24363);
(statearr_24390_24412[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24370 === 15))
{var inst_24359 = (state_24369[2]);var state_24369__$1 = state_24369;var statearr_24391_24413 = state_24369__$1;(statearr_24391_24413[2] = inst_24359);
(statearr_24391_24413[1] = 14);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_24395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24395[0] = state_machine__5507__auto__);
(statearr_24395[1] = 1);
return statearr_24395;
});
var state_machine__5507__auto____1 = (function (state_24369){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24369);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24396){if((e24396 instanceof Object))
{var ex__5510__auto__ = e24396;var statearr_24397_24414 = state_24369;(statearr_24397_24414[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24369);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e24396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__24415 = state_24369;
state_24369 = G__24415;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24369){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24398 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24399);
return statearr_24398;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24528){var state_val_24529 = (state_24528[1]);if((state_val_24529 === 1))
{var inst_24487 = [];var inst_24488 = inst_24487;var inst_24489 = cljs.core.constant$keyword$148;var state_24528__$1 = (function (){var statearr_24530 = state_24528;(statearr_24530[7] = inst_24489);
(statearr_24530[8] = inst_24488);
return statearr_24530;
})();var statearr_24531_24559 = state_24528__$1;(statearr_24531_24559[2] = null);
(statearr_24531_24559[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24529 === 2))
{var state_24528__$1 = state_24528;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24528__$1,4,ch);
} else
{if((state_val_24529 === 3))
{var inst_24526 = (state_24528[2]);var state_24528__$1 = state_24528;return cljs.core.async.impl.ioc_helpers.return_chan(state_24528__$1,inst_24526);
} else
{if((state_val_24529 === 4))
{var inst_24492 = (state_24528[9]);var inst_24492__$1 = (state_24528[2]);var inst_24493 = (inst_24492__$1 == null);var inst_24494 = cljs.core.not(inst_24493);var state_24528__$1 = (function (){var statearr_24532 = state_24528;(statearr_24532[9] = inst_24492__$1);
return statearr_24532;
})();if(inst_24494)
{var statearr_24533_24560 = state_24528__$1;(statearr_24533_24560[1] = 5);
} else
{var statearr_24534_24561 = state_24528__$1;(statearr_24534_24561[1] = 6);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24529 === 5))
{var inst_24496 = (state_24528[10]);var inst_24489 = (state_24528[7]);var inst_24492 = (state_24528[9]);var inst_24496__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24492) : f.call(null,inst_24492));var inst_24497 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24496__$1,inst_24489);var inst_24498 = cljs.core.keyword_identical_QMARK_(inst_24489,cljs.core.constant$keyword$148);var inst_24499 = (inst_24497) || (inst_24498);var state_24528__$1 = (function (){var statearr_24535 = state_24528;(statearr_24535[10] = inst_24496__$1);
return statearr_24535;
})();if(cljs.core.truth_(inst_24499))
{var statearr_24536_24562 = state_24528__$1;(statearr_24536_24562[1] = 8);
} else
{var statearr_24537_24563 = state_24528__$1;(statearr_24537_24563[1] = 9);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24529 === 6))
{var inst_24488 = (state_24528[8]);var inst_24513 = inst_24488.length;var inst_24514 = (inst_24513 > 0);var state_24528__$1 = state_24528;if(cljs.core.truth_(inst_24514))
{var statearr_24539_24564 = state_24528__$1;(statearr_24539_24564[1] = 12);
} else
{var statearr_24540_24565 = state_24528__$1;(statearr_24540_24565[1] = 13);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_24529 === 7))
{var inst_24524 = (state_24528[2]);var state_24528__$1 = state_24528;var statearr_24541_24566 = state_24528__$1;(statearr_24541_24566[2] = inst_24524);
(statearr_24541_24566[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24529 === 8))
{var inst_24496 = (state_24528[10]);var inst_24488 = (state_24528[8]);var inst_24492 = (state_24528[9]);var inst_24501 = inst_24488.push(inst_24492);var tmp24538 = inst_24488;var inst_24488__$1 = tmp24538;var inst_24489 = inst_24496;var state_24528__$1 = (function (){var statearr_24542 = state_24528;(statearr_24542[7] = inst_24489);
(statearr_24542[8] = inst_24488__$1);
(statearr_24542[11] = inst_24501);
return statearr_24542;
})();var statearr_24543_24567 = state_24528__$1;(statearr_24543_24567[2] = null);
(statearr_24543_24567[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24529 === 9))
{var inst_24488 = (state_24528[8]);var inst_24504 = cljs.core.vec(inst_24488);var state_24528__$1 = state_24528;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24528__$1,11,out,inst_24504);
} else
{if((state_val_24529 === 10))
{var inst_24511 = (state_24528[2]);var state_24528__$1 = state_24528;var statearr_24544_24568 = state_24528__$1;(statearr_24544_24568[2] = inst_24511);
(statearr_24544_24568[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24529 === 11))
{var inst_24496 = (state_24528[10]);var inst_24492 = (state_24528[9]);var inst_24506 = (state_24528[2]);var inst_24507 = [];var inst_24508 = inst_24507.push(inst_24492);var inst_24488 = inst_24507;var inst_24489 = inst_24496;var state_24528__$1 = (function (){var statearr_24545 = state_24528;(statearr_24545[12] = inst_24506);
(statearr_24545[13] = inst_24508);
(statearr_24545[7] = inst_24489);
(statearr_24545[8] = inst_24488);
return statearr_24545;
})();var statearr_24546_24569 = state_24528__$1;(statearr_24546_24569[2] = null);
(statearr_24546_24569[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24529 === 12))
{var inst_24488 = (state_24528[8]);var inst_24516 = cljs.core.vec(inst_24488);var state_24528__$1 = state_24528;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24528__$1,15,out,inst_24516);
} else
{if((state_val_24529 === 13))
{var state_24528__$1 = state_24528;var statearr_24547_24570 = state_24528__$1;(statearr_24547_24570[2] = null);
(statearr_24547_24570[1] = 14);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24529 === 14))
{var inst_24521 = (state_24528[2]);var inst_24522 = cljs.core.async.close_BANG_(out);var state_24528__$1 = (function (){var statearr_24548 = state_24528;(statearr_24548[14] = inst_24521);
return statearr_24548;
})();var statearr_24549_24571 = state_24528__$1;(statearr_24549_24571[2] = inst_24522);
(statearr_24549_24571[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_24529 === 15))
{var inst_24518 = (state_24528[2]);var state_24528__$1 = state_24528;var statearr_24550_24572 = state_24528__$1;(statearr_24550_24572[2] = inst_24518);
(statearr_24550_24572[1] = 14);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_24554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24554[0] = state_machine__5507__auto__);
(statearr_24554[1] = 1);
return statearr_24554;
});
var state_machine__5507__auto____1 = (function (state_24528){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24528);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24555){if((e24555 instanceof Object))
{var ex__5510__auto__ = e24555;var statearr_24556_24573 = state_24528;(statearr_24556_24573[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24528);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e24555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__24574 = state_24528;
state_24528 = G__24574;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24528){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24557 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24558);
return statearr_24557;
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
