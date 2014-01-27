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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22696 = (function (f,fn_handler,meta22697){
this.f = f;
this.fn_handler = fn_handler;
this.meta22697 = meta22697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22696.cljs$lang$type = true;
cljs.core.async.t22696.cljs$lang$ctorStr = "cljs.core.async/t22696";
cljs.core.async.t22696.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22696");
});
cljs.core.async.t22696.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22698){var self__ = this;
var _22698__$1 = this;return self__.meta22697;
});
cljs.core.async.t22696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22698,meta22697__$1){var self__ = this;
var _22698__$1 = this;return (new cljs.core.async.t22696(self__.f,self__.fn_handler,meta22697__$1));
});
cljs.core.async.__GT_t22696 = (function __GT_t22696(f__$1,fn_handler__$1,meta22697){return (new cljs.core.async.t22696(f__$1,fn_handler__$1,meta22697));
});
}
return (new cljs.core.async.t22696(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22700 = buff;if(G__22700)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__22700.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22700.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22700);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22700);
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
{var val_22701 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22701) : fn1.call(null,val_22701));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22701) : fn1.call(null,val_22701));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___22702 = n;var x_22703 = 0;while(true){
if((x_22703 < n__4248__auto___22702))
{(a[x_22703] = 0);
{
var G__22704 = (x_22703 + 1);
x_22703 = G__22704;
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
var G__22705 = (i + 1);
i = G__22705;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t22709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22709 = (function (flag,alt_flag,meta22710){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22710 = meta22710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22709.cljs$lang$type = true;
cljs.core.async.t22709.cljs$lang$ctorStr = "cljs.core.async/t22709";
cljs.core.async.t22709.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22709");
});
cljs.core.async.t22709.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t22709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t22709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22711){var self__ = this;
var _22711__$1 = this;return self__.meta22710;
});
cljs.core.async.t22709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22711,meta22710__$1){var self__ = this;
var _22711__$1 = this;return (new cljs.core.async.t22709(self__.flag,self__.alt_flag,meta22710__$1));
});
cljs.core.async.__GT_t22709 = (function __GT_t22709(flag__$1,alt_flag__$1,meta22710){return (new cljs.core.async.t22709(flag__$1,alt_flag__$1,meta22710));
});
}
return (new cljs.core.async.t22709(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22715 = (function (cb,flag,alt_handler,meta22716){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22716 = meta22716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22715.cljs$lang$type = true;
cljs.core.async.t22715.cljs$lang$ctorStr = "cljs.core.async/t22715";
cljs.core.async.t22715.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22715");
});
cljs.core.async.t22715.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t22715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t22715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22717){var self__ = this;
var _22717__$1 = this;return self__.meta22716;
});
cljs.core.async.t22715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22717,meta22716__$1){var self__ = this;
var _22717__$1 = this;return (new cljs.core.async.t22715(self__.cb,self__.flag,self__.alt_handler,meta22716__$1));
});
cljs.core.async.__GT_t22715 = (function __GT_t22715(cb__$1,flag__$1,alt_handler__$1,meta22716){return (new cljs.core.async.t22715(cb__$1,flag__$1,alt_handler__$1,meta22716));
});
}
return (new cljs.core.async.t22715(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$176.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22718_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22718_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22718_SHARP_,port], null)));
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
var G__22719 = (i + 1);
i = G__22719;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$160))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$160], null));
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
var alts_BANG___delegate = function (ports,p__22720){var map__22722 = p__22720;var map__22722__$1 = ((cljs.core.seq_QMARK_(map__22722))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22722):map__22722);var opts = map__22722__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22720 = null;if (arguments.length > 1) {
  p__22720 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22720);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22723){
var ports = cljs.core.first(arglist__22723);
var p__22720 = cljs.core.rest(arglist__22723);
return alts_BANG___delegate(ports,p__22720);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22731 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22731 = (function (ch,f,map_LT_,meta22732){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22732 = meta22732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22731.cljs$lang$type = true;
cljs.core.async.t22731.cljs$lang$ctorStr = "cljs.core.async/t22731";
cljs.core.async.t22731.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22731");
});
cljs.core.async.t22731.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22731.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t22731.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22731.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t22734 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22734 = (function (fn1,_,meta22732,ch,f,map_LT_,meta22735){
this.fn1 = fn1;
this._ = _;
this.meta22732 = meta22732;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22735 = meta22735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22734.cljs$lang$type = true;
cljs.core.async.t22734.cljs$lang$ctorStr = "cljs.core.async/t22734";
cljs.core.async.t22734.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22734");
});
cljs.core.async.t22734.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t22734.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t22734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__22724_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__22724_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22724_SHARP_) : self__.f.call(null,p1__22724_SHARP_)))) : f1.call(null,(((p1__22724_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22724_SHARP_) : self__.f.call(null,p1__22724_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t22734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22736){var self__ = this;
var _22736__$1 = this;return self__.meta22735;
});
cljs.core.async.t22734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22736,meta22735__$1){var self__ = this;
var _22736__$1 = this;return (new cljs.core.async.t22734(self__.fn1,self__._,self__.meta22732,self__.ch,self__.f,self__.map_LT_,meta22735__$1));
});
cljs.core.async.__GT_t22734 = (function __GT_t22734(fn1__$1,___$2,meta22732__$1,ch__$2,f__$2,map_LT___$2,meta22735){return (new cljs.core.async.t22734(fn1__$1,___$2,meta22732__$1,ch__$2,f__$2,map_LT___$2,meta22735));
});
}
return (new cljs.core.async.t22734(fn1,___$1,self__.meta22732,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t22731.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22731.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22733){var self__ = this;
var _22733__$1 = this;return self__.meta22732;
});
cljs.core.async.t22731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22733,meta22732__$1){var self__ = this;
var _22733__$1 = this;return (new cljs.core.async.t22731(self__.ch,self__.f,self__.map_LT_,meta22732__$1));
});
cljs.core.async.__GT_t22731 = (function __GT_t22731(ch__$1,f__$1,map_LT___$1,meta22732){return (new cljs.core.async.t22731(ch__$1,f__$1,map_LT___$1,meta22732));
});
}
return (new cljs.core.async.t22731(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22740 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22740 = (function (ch,f,map_GT_,meta22741){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22741 = meta22741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22740.cljs$lang$type = true;
cljs.core.async.t22740.cljs$lang$ctorStr = "cljs.core.async/t22740";
cljs.core.async.t22740.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22740");
});
cljs.core.async.t22740.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22740.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t22740.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22740.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22740.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22740.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22742){var self__ = this;
var _22742__$1 = this;return self__.meta22741;
});
cljs.core.async.t22740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22742,meta22741__$1){var self__ = this;
var _22742__$1 = this;return (new cljs.core.async.t22740(self__.ch,self__.f,self__.map_GT_,meta22741__$1));
});
cljs.core.async.__GT_t22740 = (function __GT_t22740(ch__$1,f__$1,map_GT___$1,meta22741){return (new cljs.core.async.t22740(ch__$1,f__$1,map_GT___$1,meta22741));
});
}
return (new cljs.core.async.t22740(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22746 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22746 = (function (ch,p,filter_GT_,meta22747){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22747 = meta22747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22746.cljs$lang$type = true;
cljs.core.async.t22746.cljs$lang$ctorStr = "cljs.core.async/t22746";
cljs.core.async.t22746.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22746");
});
cljs.core.async.t22746.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22746.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t22746.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22746.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22746.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22746.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22748){var self__ = this;
var _22748__$1 = this;return self__.meta22747;
});
cljs.core.async.t22746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22748,meta22747__$1){var self__ = this;
var _22748__$1 = this;return (new cljs.core.async.t22746(self__.ch,self__.p,self__.filter_GT_,meta22747__$1));
});
cljs.core.async.__GT_t22746 = (function __GT_t22746(ch__$1,p__$1,filter_GT___$1,meta22747){return (new cljs.core.async.t22746(ch__$1,p__$1,filter_GT___$1,meta22747));
});
}
return (new cljs.core.async.t22746(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22810){var state_val_22811 = (state_22810[1]);if((state_val_22811 === 1))
{var state_22810__$1 = state_22810;var statearr_22812_22832 = state_22810__$1;(statearr_22812_22832[2] = null);
(statearr_22812_22832[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22811 === 2))
{var state_22810__$1 = state_22810;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22810__$1,4,ch);
} else
{if((state_val_22811 === 3))
{var inst_22808 = (state_22810[2]);var state_22810__$1 = state_22810;return cljs.core.async.impl.ioc_helpers.return_chan(state_22810__$1,inst_22808);
} else
{if((state_val_22811 === 4))
{var inst_22792 = (state_22810[7]);var inst_22792__$1 = (state_22810[2]);var inst_22793 = (inst_22792__$1 == null);var state_22810__$1 = (function (){var statearr_22813 = state_22810;(statearr_22813[7] = inst_22792__$1);
return statearr_22813;
})();if(cljs.core.truth_(inst_22793))
{var statearr_22814_22833 = state_22810__$1;(statearr_22814_22833[1] = 5);
} else
{var statearr_22815_22834 = state_22810__$1;(statearr_22815_22834[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_22811 === 5))
{var inst_22795 = cljs.core.async.close_BANG_(out);var state_22810__$1 = state_22810;var statearr_22816_22835 = state_22810__$1;(statearr_22816_22835[2] = inst_22795);
(statearr_22816_22835[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22811 === 6))
{var inst_22792 = (state_22810[7]);var inst_22797 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22792) : p.call(null,inst_22792));var state_22810__$1 = state_22810;if(cljs.core.truth_(inst_22797))
{var statearr_22817_22836 = state_22810__$1;(statearr_22817_22836[1] = 8);
} else
{var statearr_22818_22837 = state_22810__$1;(statearr_22818_22837[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_22811 === 7))
{var inst_22806 = (state_22810[2]);var state_22810__$1 = state_22810;var statearr_22819_22838 = state_22810__$1;(statearr_22819_22838[2] = inst_22806);
(statearr_22819_22838[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22811 === 8))
{var inst_22792 = (state_22810[7]);var state_22810__$1 = state_22810;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22810__$1,11,out,inst_22792);
} else
{if((state_val_22811 === 9))
{var state_22810__$1 = state_22810;var statearr_22820_22839 = state_22810__$1;(statearr_22820_22839[2] = null);
(statearr_22820_22839[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22811 === 10))
{var inst_22803 = (state_22810[2]);var state_22810__$1 = (function (){var statearr_22821 = state_22810;(statearr_22821[8] = inst_22803);
return statearr_22821;
})();var statearr_22822_22840 = state_22810__$1;(statearr_22822_22840[2] = null);
(statearr_22822_22840[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22811 === 11))
{var inst_22800 = (state_22810[2]);var state_22810__$1 = state_22810;var statearr_22823_22841 = state_22810__$1;(statearr_22823_22841[2] = inst_22800);
(statearr_22823_22841[1] = 10);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_22827 = [null,null,null,null,null,null,null,null,null];(statearr_22827[0] = state_machine__5507__auto__);
(statearr_22827[1] = 1);
return statearr_22827;
});
var state_machine__5507__auto____1 = (function (state_22810){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22810);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22828){if((e22828 instanceof Object))
{var ex__5510__auto__ = e22828;var statearr_22829_22842 = state_22810;(statearr_22829_22842[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22810);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e22828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__22843 = state_22810;
state_22810 = G__22843;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22810){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22830 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22831);
return statearr_22830;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22995){var state_val_22996 = (state_22995[1]);if((state_val_22996 === 1))
{var state_22995__$1 = state_22995;var statearr_22997_23034 = state_22995__$1;(statearr_22997_23034[2] = null);
(statearr_22997_23034[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 2))
{var state_22995__$1 = state_22995;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22995__$1,4,in$);
} else
{if((state_val_22996 === 3))
{var inst_22993 = (state_22995[2]);var state_22995__$1 = state_22995;return cljs.core.async.impl.ioc_helpers.return_chan(state_22995__$1,inst_22993);
} else
{if((state_val_22996 === 4))
{var inst_22941 = (state_22995[7]);var inst_22941__$1 = (state_22995[2]);var inst_22942 = (inst_22941__$1 == null);var state_22995__$1 = (function (){var statearr_22998 = state_22995;(statearr_22998[7] = inst_22941__$1);
return statearr_22998;
})();if(cljs.core.truth_(inst_22942))
{var statearr_22999_23035 = state_22995__$1;(statearr_22999_23035[1] = 5);
} else
{var statearr_23000_23036 = state_22995__$1;(statearr_23000_23036[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 5))
{var inst_22944 = cljs.core.async.close_BANG_(out);var state_22995__$1 = state_22995;var statearr_23001_23037 = state_22995__$1;(statearr_23001_23037[2] = inst_22944);
(statearr_23001_23037[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 6))
{var inst_22941 = (state_22995[7]);var inst_22946 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22941) : f.call(null,inst_22941));var inst_22951 = cljs.core.seq(inst_22946);var inst_22952 = inst_22951;var inst_22953 = null;var inst_22954 = 0;var inst_22955 = 0;var state_22995__$1 = (function (){var statearr_23002 = state_22995;(statearr_23002[8] = inst_22955);
(statearr_23002[9] = inst_22952);
(statearr_23002[10] = inst_22953);
(statearr_23002[11] = inst_22954);
return statearr_23002;
})();var statearr_23003_23038 = state_22995__$1;(statearr_23003_23038[2] = null);
(statearr_23003_23038[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 7))
{var inst_22991 = (state_22995[2]);var state_22995__$1 = state_22995;var statearr_23004_23039 = state_22995__$1;(statearr_23004_23039[2] = inst_22991);
(statearr_23004_23039[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 8))
{var inst_22955 = (state_22995[8]);var inst_22954 = (state_22995[11]);var inst_22957 = (inst_22955 < inst_22954);var inst_22958 = inst_22957;var state_22995__$1 = state_22995;if(cljs.core.truth_(inst_22958))
{var statearr_23005_23040 = state_22995__$1;(statearr_23005_23040[1] = 10);
} else
{var statearr_23006_23041 = state_22995__$1;(statearr_23006_23041[1] = 11);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 9))
{var inst_22988 = (state_22995[2]);var state_22995__$1 = (function (){var statearr_23007 = state_22995;(statearr_23007[12] = inst_22988);
return statearr_23007;
})();var statearr_23008_23042 = state_22995__$1;(statearr_23008_23042[2] = null);
(statearr_23008_23042[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 10))
{var inst_22955 = (state_22995[8]);var inst_22953 = (state_22995[10]);var inst_22960 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22953,inst_22955);var state_22995__$1 = state_22995;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22995__$1,13,out,inst_22960);
} else
{if((state_val_22996 === 11))
{var inst_22966 = (state_22995[13]);var inst_22952 = (state_22995[9]);var inst_22966__$1 = cljs.core.seq(inst_22952);var state_22995__$1 = (function (){var statearr_23012 = state_22995;(statearr_23012[13] = inst_22966__$1);
return statearr_23012;
})();if(inst_22966__$1)
{var statearr_23013_23043 = state_22995__$1;(statearr_23013_23043[1] = 14);
} else
{var statearr_23014_23044 = state_22995__$1;(statearr_23014_23044[1] = 15);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 12))
{var inst_22986 = (state_22995[2]);var state_22995__$1 = state_22995;var statearr_23015_23045 = state_22995__$1;(statearr_23015_23045[2] = inst_22986);
(statearr_23015_23045[1] = 9);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 13))
{var inst_22955 = (state_22995[8]);var inst_22952 = (state_22995[9]);var inst_22953 = (state_22995[10]);var inst_22954 = (state_22995[11]);var inst_22962 = (state_22995[2]);var inst_22963 = (inst_22955 + 1);var tmp23009 = inst_22952;var tmp23010 = inst_22953;var tmp23011 = inst_22954;var inst_22952__$1 = tmp23009;var inst_22953__$1 = tmp23010;var inst_22954__$1 = tmp23011;var inst_22955__$1 = inst_22963;var state_22995__$1 = (function (){var statearr_23016 = state_22995;(statearr_23016[8] = inst_22955__$1);
(statearr_23016[14] = inst_22962);
(statearr_23016[9] = inst_22952__$1);
(statearr_23016[10] = inst_22953__$1);
(statearr_23016[11] = inst_22954__$1);
return statearr_23016;
})();var statearr_23017_23046 = state_22995__$1;(statearr_23017_23046[2] = null);
(statearr_23017_23046[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 14))
{var inst_22966 = (state_22995[13]);var inst_22968 = cljs.core.chunked_seq_QMARK_(inst_22966);var state_22995__$1 = state_22995;if(inst_22968)
{var statearr_23018_23047 = state_22995__$1;(statearr_23018_23047[1] = 17);
} else
{var statearr_23019_23048 = state_22995__$1;(statearr_23019_23048[1] = 18);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 15))
{var state_22995__$1 = state_22995;var statearr_23020_23049 = state_22995__$1;(statearr_23020_23049[2] = null);
(statearr_23020_23049[1] = 16);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 16))
{var inst_22984 = (state_22995[2]);var state_22995__$1 = state_22995;var statearr_23021_23050 = state_22995__$1;(statearr_23021_23050[2] = inst_22984);
(statearr_23021_23050[1] = 12);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 17))
{var inst_22966 = (state_22995[13]);var inst_22970 = cljs.core.chunk_first(inst_22966);var inst_22971 = cljs.core.chunk_rest(inst_22966);var inst_22972 = cljs.core.count(inst_22970);var inst_22952 = inst_22971;var inst_22953 = inst_22970;var inst_22954 = inst_22972;var inst_22955 = 0;var state_22995__$1 = (function (){var statearr_23022 = state_22995;(statearr_23022[8] = inst_22955);
(statearr_23022[9] = inst_22952);
(statearr_23022[10] = inst_22953);
(statearr_23022[11] = inst_22954);
return statearr_23022;
})();var statearr_23023_23051 = state_22995__$1;(statearr_23023_23051[2] = null);
(statearr_23023_23051[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 18))
{var inst_22966 = (state_22995[13]);var inst_22975 = cljs.core.first(inst_22966);var state_22995__$1 = state_22995;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22995__$1,20,out,inst_22975);
} else
{if((state_val_22996 === 19))
{var inst_22981 = (state_22995[2]);var state_22995__$1 = state_22995;var statearr_23024_23052 = state_22995__$1;(statearr_23024_23052[2] = inst_22981);
(statearr_23024_23052[1] = 16);
return cljs.core.constant$keyword$170;
} else
{if((state_val_22996 === 20))
{var inst_22966 = (state_22995[13]);var inst_22977 = (state_22995[2]);var inst_22978 = cljs.core.next(inst_22966);var inst_22952 = inst_22978;var inst_22953 = null;var inst_22954 = 0;var inst_22955 = 0;var state_22995__$1 = (function (){var statearr_23025 = state_22995;(statearr_23025[8] = inst_22955);
(statearr_23025[15] = inst_22977);
(statearr_23025[9] = inst_22952);
(statearr_23025[10] = inst_22953);
(statearr_23025[11] = inst_22954);
return statearr_23025;
})();var statearr_23026_23053 = state_22995__$1;(statearr_23026_23053[2] = null);
(statearr_23026_23053[1] = 8);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_23030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23030[0] = state_machine__5507__auto__);
(statearr_23030[1] = 1);
return statearr_23030;
});
var state_machine__5507__auto____1 = (function (state_22995){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22995);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23031){if((e23031 instanceof Object))
{var ex__5510__auto__ = e23031;var statearr_23032_23054 = state_22995;(statearr_23032_23054[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22995);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23055 = state_22995;
state_22995 = G__23055;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22995){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23033 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23033;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23115){var state_val_23116 = (state_23115[1]);if((state_val_23116 === 1))
{var state_23115__$1 = state_23115;var statearr_23117_23137 = state_23115__$1;(statearr_23117_23137[2] = null);
(statearr_23117_23137[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23116 === 2))
{var state_23115__$1 = state_23115;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23115__$1,4,from);
} else
{if((state_val_23116 === 3))
{var inst_23113 = (state_23115[2]);var state_23115__$1 = state_23115;return cljs.core.async.impl.ioc_helpers.return_chan(state_23115__$1,inst_23113);
} else
{if((state_val_23116 === 4))
{var inst_23098 = (state_23115[7]);var inst_23098__$1 = (state_23115[2]);var inst_23099 = (inst_23098__$1 == null);var state_23115__$1 = (function (){var statearr_23118 = state_23115;(statearr_23118[7] = inst_23098__$1);
return statearr_23118;
})();if(cljs.core.truth_(inst_23099))
{var statearr_23119_23138 = state_23115__$1;(statearr_23119_23138[1] = 5);
} else
{var statearr_23120_23139 = state_23115__$1;(statearr_23120_23139[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23116 === 5))
{var state_23115__$1 = state_23115;if(cljs.core.truth_(close_QMARK_))
{var statearr_23121_23140 = state_23115__$1;(statearr_23121_23140[1] = 8);
} else
{var statearr_23122_23141 = state_23115__$1;(statearr_23122_23141[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23116 === 6))
{var inst_23098 = (state_23115[7]);var state_23115__$1 = state_23115;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23115__$1,11,to,inst_23098);
} else
{if((state_val_23116 === 7))
{var inst_23111 = (state_23115[2]);var state_23115__$1 = state_23115;var statearr_23123_23142 = state_23115__$1;(statearr_23123_23142[2] = inst_23111);
(statearr_23123_23142[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23116 === 8))
{var inst_23102 = cljs.core.async.close_BANG_(to);var state_23115__$1 = state_23115;var statearr_23124_23143 = state_23115__$1;(statearr_23124_23143[2] = inst_23102);
(statearr_23124_23143[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23116 === 9))
{var state_23115__$1 = state_23115;var statearr_23125_23144 = state_23115__$1;(statearr_23125_23144[2] = null);
(statearr_23125_23144[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23116 === 10))
{var inst_23105 = (state_23115[2]);var state_23115__$1 = state_23115;var statearr_23126_23145 = state_23115__$1;(statearr_23126_23145[2] = inst_23105);
(statearr_23126_23145[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23116 === 11))
{var inst_23108 = (state_23115[2]);var state_23115__$1 = (function (){var statearr_23127 = state_23115;(statearr_23127[8] = inst_23108);
return statearr_23127;
})();var statearr_23128_23146 = state_23115__$1;(statearr_23128_23146[2] = null);
(statearr_23128_23146[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_23132 = [null,null,null,null,null,null,null,null,null];(statearr_23132[0] = state_machine__5507__auto__);
(statearr_23132[1] = 1);
return statearr_23132;
});
var state_machine__5507__auto____1 = (function (state_23115){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23115);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23133){if((e23133 instanceof Object))
{var ex__5510__auto__ = e23133;var statearr_23134_23147 = state_23115;(statearr_23134_23147[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23115);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23148 = state_23115;
state_23115 = G__23148;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23115){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23135 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23136);
return statearr_23135;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23213){var state_val_23214 = (state_23213[1]);if((state_val_23214 === 1))
{var state_23213__$1 = state_23213;var statearr_23215_23236 = state_23213__$1;(statearr_23215_23236[2] = null);
(statearr_23215_23236[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23214 === 2))
{var state_23213__$1 = state_23213;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23213__$1,4,ch);
} else
{if((state_val_23214 === 3))
{var inst_23211 = (state_23213[2]);var state_23213__$1 = state_23213;return cljs.core.async.impl.ioc_helpers.return_chan(state_23213__$1,inst_23211);
} else
{if((state_val_23214 === 4))
{var inst_23194 = (state_23213[7]);var inst_23194__$1 = (state_23213[2]);var inst_23195 = (inst_23194__$1 == null);var state_23213__$1 = (function (){var statearr_23216 = state_23213;(statearr_23216[7] = inst_23194__$1);
return statearr_23216;
})();if(cljs.core.truth_(inst_23195))
{var statearr_23217_23237 = state_23213__$1;(statearr_23217_23237[1] = 5);
} else
{var statearr_23218_23238 = state_23213__$1;(statearr_23218_23238[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23214 === 5))
{var inst_23197 = cljs.core.async.close_BANG_(tc);var inst_23198 = cljs.core.async.close_BANG_(fc);var state_23213__$1 = (function (){var statearr_23219 = state_23213;(statearr_23219[8] = inst_23197);
return statearr_23219;
})();var statearr_23220_23239 = state_23213__$1;(statearr_23220_23239[2] = inst_23198);
(statearr_23220_23239[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23214 === 6))
{var inst_23194 = (state_23213[7]);var inst_23200 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23194) : p.call(null,inst_23194));var state_23213__$1 = state_23213;if(cljs.core.truth_(inst_23200))
{var statearr_23221_23240 = state_23213__$1;(statearr_23221_23240[1] = 9);
} else
{var statearr_23222_23241 = state_23213__$1;(statearr_23222_23241[1] = 10);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23214 === 7))
{var inst_23209 = (state_23213[2]);var state_23213__$1 = state_23213;var statearr_23223_23242 = state_23213__$1;(statearr_23223_23242[2] = inst_23209);
(statearr_23223_23242[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23214 === 8))
{var inst_23206 = (state_23213[2]);var state_23213__$1 = (function (){var statearr_23224 = state_23213;(statearr_23224[9] = inst_23206);
return statearr_23224;
})();var statearr_23225_23243 = state_23213__$1;(statearr_23225_23243[2] = null);
(statearr_23225_23243[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23214 === 9))
{var state_23213__$1 = state_23213;var statearr_23226_23244 = state_23213__$1;(statearr_23226_23244[2] = tc);
(statearr_23226_23244[1] = 11);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23214 === 10))
{var state_23213__$1 = state_23213;var statearr_23227_23245 = state_23213__$1;(statearr_23227_23245[2] = fc);
(statearr_23227_23245[1] = 11);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23214 === 11))
{var inst_23194 = (state_23213[7]);var inst_23204 = (state_23213[2]);var state_23213__$1 = state_23213;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23213__$1,8,inst_23204,inst_23194);
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
var state_machine__5507__auto____0 = (function (){var statearr_23231 = [null,null,null,null,null,null,null,null,null,null];(statearr_23231[0] = state_machine__5507__auto__);
(statearr_23231[1] = 1);
return statearr_23231;
});
var state_machine__5507__auto____1 = (function (state_23213){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23213);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23232){if((e23232 instanceof Object))
{var ex__5510__auto__ = e23232;var statearr_23233_23246 = state_23213;(statearr_23233_23246[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23213);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23247 = state_23213;
state_23213 = G__23247;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23213){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23234 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23235);
return statearr_23234;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23294){var state_val_23295 = (state_23294[1]);if((state_val_23295 === 7))
{var inst_23290 = (state_23294[2]);var state_23294__$1 = state_23294;var statearr_23296_23312 = state_23294__$1;(statearr_23296_23312[2] = inst_23290);
(statearr_23296_23312[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23295 === 6))
{var inst_23280 = (state_23294[7]);var inst_23283 = (state_23294[8]);var inst_23287 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23280,inst_23283) : f.call(null,inst_23280,inst_23283));var inst_23280__$1 = inst_23287;var state_23294__$1 = (function (){var statearr_23297 = state_23294;(statearr_23297[7] = inst_23280__$1);
return statearr_23297;
})();var statearr_23298_23313 = state_23294__$1;(statearr_23298_23313[2] = null);
(statearr_23298_23313[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23295 === 5))
{var inst_23280 = (state_23294[7]);var state_23294__$1 = state_23294;var statearr_23299_23314 = state_23294__$1;(statearr_23299_23314[2] = inst_23280);
(statearr_23299_23314[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23295 === 4))
{var inst_23283 = (state_23294[8]);var inst_23283__$1 = (state_23294[2]);var inst_23284 = (inst_23283__$1 == null);var state_23294__$1 = (function (){var statearr_23300 = state_23294;(statearr_23300[8] = inst_23283__$1);
return statearr_23300;
})();if(cljs.core.truth_(inst_23284))
{var statearr_23301_23315 = state_23294__$1;(statearr_23301_23315[1] = 5);
} else
{var statearr_23302_23316 = state_23294__$1;(statearr_23302_23316[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23295 === 3))
{var inst_23292 = (state_23294[2]);var state_23294__$1 = state_23294;return cljs.core.async.impl.ioc_helpers.return_chan(state_23294__$1,inst_23292);
} else
{if((state_val_23295 === 2))
{var state_23294__$1 = state_23294;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23294__$1,4,ch);
} else
{if((state_val_23295 === 1))
{var inst_23280 = init;var state_23294__$1 = (function (){var statearr_23303 = state_23294;(statearr_23303[7] = inst_23280);
return statearr_23303;
})();var statearr_23304_23317 = state_23294__$1;(statearr_23304_23317[2] = null);
(statearr_23304_23317[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_23308 = [null,null,null,null,null,null,null,null,null];(statearr_23308[0] = state_machine__5507__auto__);
(statearr_23308[1] = 1);
return statearr_23308;
});
var state_machine__5507__auto____1 = (function (state_23294){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23294);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23309){if((e23309 instanceof Object))
{var ex__5510__auto__ = e23309;var statearr_23310_23318 = state_23294;(statearr_23310_23318[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23294);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23309;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23319 = state_23294;
state_23294 = G__23319;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23294){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23311 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23311;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23381){var state_val_23382 = (state_23381[1]);if((state_val_23382 === 1))
{var inst_23361 = cljs.core.seq(coll);var inst_23362 = inst_23361;var state_23381__$1 = (function (){var statearr_23383 = state_23381;(statearr_23383[7] = inst_23362);
return statearr_23383;
})();var statearr_23384_23402 = state_23381__$1;(statearr_23384_23402[2] = null);
(statearr_23384_23402[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23382 === 2))
{var inst_23362 = (state_23381[7]);var state_23381__$1 = state_23381;if(cljs.core.truth_(inst_23362))
{var statearr_23385_23403 = state_23381__$1;(statearr_23385_23403[1] = 4);
} else
{var statearr_23386_23404 = state_23381__$1;(statearr_23386_23404[1] = 5);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23382 === 3))
{var inst_23379 = (state_23381[2]);var state_23381__$1 = state_23381;return cljs.core.async.impl.ioc_helpers.return_chan(state_23381__$1,inst_23379);
} else
{if((state_val_23382 === 4))
{var inst_23362 = (state_23381[7]);var inst_23365 = cljs.core.first(inst_23362);var state_23381__$1 = state_23381;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23381__$1,7,ch,inst_23365);
} else
{if((state_val_23382 === 5))
{var state_23381__$1 = state_23381;if(cljs.core.truth_(close_QMARK_))
{var statearr_23387_23405 = state_23381__$1;(statearr_23387_23405[1] = 8);
} else
{var statearr_23388_23406 = state_23381__$1;(statearr_23388_23406[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23382 === 6))
{var inst_23377 = (state_23381[2]);var state_23381__$1 = state_23381;var statearr_23389_23407 = state_23381__$1;(statearr_23389_23407[2] = inst_23377);
(statearr_23389_23407[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23382 === 7))
{var inst_23362 = (state_23381[7]);var inst_23367 = (state_23381[2]);var inst_23368 = cljs.core.next(inst_23362);var inst_23362__$1 = inst_23368;var state_23381__$1 = (function (){var statearr_23390 = state_23381;(statearr_23390[8] = inst_23367);
(statearr_23390[7] = inst_23362__$1);
return statearr_23390;
})();var statearr_23391_23408 = state_23381__$1;(statearr_23391_23408[2] = null);
(statearr_23391_23408[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23382 === 8))
{var inst_23372 = cljs.core.async.close_BANG_(ch);var state_23381__$1 = state_23381;var statearr_23392_23409 = state_23381__$1;(statearr_23392_23409[2] = inst_23372);
(statearr_23392_23409[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23382 === 9))
{var state_23381__$1 = state_23381;var statearr_23393_23410 = state_23381__$1;(statearr_23393_23410[2] = null);
(statearr_23393_23410[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23382 === 10))
{var inst_23375 = (state_23381[2]);var state_23381__$1 = state_23381;var statearr_23394_23411 = state_23381__$1;(statearr_23394_23411[2] = inst_23375);
(statearr_23394_23411[1] = 6);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_23398 = [null,null,null,null,null,null,null,null,null];(statearr_23398[0] = state_machine__5507__auto__);
(statearr_23398[1] = 1);
return statearr_23398;
});
var state_machine__5507__auto____1 = (function (state_23381){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23381);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23399){if((e23399 instanceof Object))
{var ex__5510__auto__ = e23399;var statearr_23400_23412 = state_23381;(statearr_23400_23412[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23381);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23413 = state_23381;
state_23381 = G__23413;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23381){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23401 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23401;
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
cljs.core.async.Mux = (function (){var obj23415 = {};return obj23415;
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
cljs.core.async.Mult = (function (){var obj23417 = {};return obj23417;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23641 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23641 = (function (cs,ch,mult,meta23642){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23642 = meta23642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23641.cljs$lang$type = true;
cljs.core.async.t23641.cljs$lang$ctorStr = "cljs.core.async/t23641";
cljs.core.async.t23641.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23641");
});})(cs))
;
cljs.core.async.t23641.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23641.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23641.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23641.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23641.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23643){var self__ = this;
var _23643__$1 = this;return self__.meta23642;
});})(cs))
;
cljs.core.async.t23641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23643,meta23642__$1){var self__ = this;
var _23643__$1 = this;return (new cljs.core.async.t23641(self__.cs,self__.ch,self__.mult,meta23642__$1));
});})(cs))
;
cljs.core.async.__GT_t23641 = ((function (cs){
return (function __GT_t23641(cs__$1,ch__$1,mult__$1,meta23642){return (new cljs.core.async.t23641(cs__$1,ch__$1,mult__$1,meta23642));
});})(cs))
;
}
return (new cljs.core.async.t23641(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___23864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23778){var state_val_23779 = (state_23778[1]);if((state_val_23779 === 32))
{var inst_23722 = (state_23778[7]);var inst_23646 = (state_23778[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23778,31,Object,null,30);var inst_23729 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23722,inst_23646,done);var state_23778__$1 = state_23778;var statearr_23780_23865 = state_23778__$1;(statearr_23780_23865[2] = inst_23729);
cljs.core.async.impl.ioc_helpers.process_exception(state_23778__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 1))
{var state_23778__$1 = state_23778;var statearr_23781_23866 = state_23778__$1;(statearr_23781_23866[2] = null);
(statearr_23781_23866[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 33))
{var inst_23735 = (state_23778[9]);var inst_23737 = cljs.core.chunked_seq_QMARK_(inst_23735);var state_23778__$1 = state_23778;if(inst_23737)
{var statearr_23782_23867 = state_23778__$1;(statearr_23782_23867[1] = 36);
} else
{var statearr_23783_23868 = state_23778__$1;(statearr_23783_23868[1] = 37);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 2))
{var state_23778__$1 = state_23778;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23778__$1,4,ch);
} else
{if((state_val_23779 === 34))
{var state_23778__$1 = state_23778;var statearr_23784_23869 = state_23778__$1;(statearr_23784_23869[2] = null);
(statearr_23784_23869[1] = 35);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 3))
{var inst_23776 = (state_23778[2]);var state_23778__$1 = state_23778;return cljs.core.async.impl.ioc_helpers.return_chan(state_23778__$1,inst_23776);
} else
{if((state_val_23779 === 35))
{var inst_23760 = (state_23778[2]);var state_23778__$1 = state_23778;var statearr_23785_23870 = state_23778__$1;(statearr_23785_23870[2] = inst_23760);
(statearr_23785_23870[1] = 29);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 4))
{var inst_23646 = (state_23778[8]);var inst_23646__$1 = (state_23778[2]);var inst_23647 = (inst_23646__$1 == null);var state_23778__$1 = (function (){var statearr_23786 = state_23778;(statearr_23786[8] = inst_23646__$1);
return statearr_23786;
})();if(cljs.core.truth_(inst_23647))
{var statearr_23787_23871 = state_23778__$1;(statearr_23787_23871[1] = 5);
} else
{var statearr_23788_23872 = state_23778__$1;(statearr_23788_23872[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 36))
{var inst_23735 = (state_23778[9]);var inst_23739 = cljs.core.chunk_first(inst_23735);var inst_23740 = cljs.core.chunk_rest(inst_23735);var inst_23741 = cljs.core.count(inst_23739);var inst_23714 = inst_23740;var inst_23715 = inst_23739;var inst_23716 = inst_23741;var inst_23717 = 0;var state_23778__$1 = (function (){var statearr_23789 = state_23778;(statearr_23789[10] = inst_23715);
(statearr_23789[11] = inst_23714);
(statearr_23789[12] = inst_23717);
(statearr_23789[13] = inst_23716);
return statearr_23789;
})();var statearr_23790_23873 = state_23778__$1;(statearr_23790_23873[2] = null);
(statearr_23790_23873[1] = 25);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 5))
{var inst_23653 = cljs.core.deref(cs);var inst_23654 = cljs.core.seq(inst_23653);var inst_23655 = inst_23654;var inst_23656 = null;var inst_23657 = 0;var inst_23658 = 0;var state_23778__$1 = (function (){var statearr_23791 = state_23778;(statearr_23791[14] = inst_23655);
(statearr_23791[15] = inst_23656);
(statearr_23791[16] = inst_23657);
(statearr_23791[17] = inst_23658);
return statearr_23791;
})();var statearr_23792_23874 = state_23778__$1;(statearr_23792_23874[2] = null);
(statearr_23792_23874[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 37))
{var inst_23735 = (state_23778[9]);var inst_23744 = cljs.core.first(inst_23735);var state_23778__$1 = (function (){var statearr_23793 = state_23778;(statearr_23793[18] = inst_23744);
return statearr_23793;
})();var statearr_23794_23875 = state_23778__$1;(statearr_23794_23875[2] = null);
(statearr_23794_23875[1] = 41);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 6))
{var inst_23706 = (state_23778[19]);var inst_23705 = cljs.core.deref(cs);var inst_23706__$1 = cljs.core.keys(inst_23705);var inst_23707 = cljs.core.count(inst_23706__$1);var inst_23708 = cljs.core.reset_BANG_(dctr,inst_23707);var inst_23713 = cljs.core.seq(inst_23706__$1);var inst_23714 = inst_23713;var inst_23715 = null;var inst_23716 = 0;var inst_23717 = 0;var state_23778__$1 = (function (){var statearr_23795 = state_23778;(statearr_23795[19] = inst_23706__$1);
(statearr_23795[20] = inst_23708);
(statearr_23795[10] = inst_23715);
(statearr_23795[11] = inst_23714);
(statearr_23795[12] = inst_23717);
(statearr_23795[13] = inst_23716);
return statearr_23795;
})();var statearr_23796_23876 = state_23778__$1;(statearr_23796_23876[2] = null);
(statearr_23796_23876[1] = 25);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 38))
{var inst_23757 = (state_23778[2]);var state_23778__$1 = state_23778;var statearr_23797_23877 = state_23778__$1;(statearr_23797_23877[2] = inst_23757);
(statearr_23797_23877[1] = 35);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 7))
{var inst_23774 = (state_23778[2]);var state_23778__$1 = state_23778;var statearr_23798_23878 = state_23778__$1;(statearr_23798_23878[2] = inst_23774);
(statearr_23798_23878[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 39))
{var inst_23735 = (state_23778[9]);var inst_23753 = (state_23778[2]);var inst_23754 = cljs.core.next(inst_23735);var inst_23714 = inst_23754;var inst_23715 = null;var inst_23716 = 0;var inst_23717 = 0;var state_23778__$1 = (function (){var statearr_23799 = state_23778;(statearr_23799[21] = inst_23753);
(statearr_23799[10] = inst_23715);
(statearr_23799[11] = inst_23714);
(statearr_23799[12] = inst_23717);
(statearr_23799[13] = inst_23716);
return statearr_23799;
})();var statearr_23800_23879 = state_23778__$1;(statearr_23800_23879[2] = null);
(statearr_23800_23879[1] = 25);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 8))
{var inst_23657 = (state_23778[16]);var inst_23658 = (state_23778[17]);var inst_23660 = (inst_23658 < inst_23657);var inst_23661 = inst_23660;var state_23778__$1 = state_23778;if(cljs.core.truth_(inst_23661))
{var statearr_23801_23880 = state_23778__$1;(statearr_23801_23880[1] = 10);
} else
{var statearr_23802_23881 = state_23778__$1;(statearr_23802_23881[1] = 11);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 40))
{var inst_23744 = (state_23778[18]);var inst_23745 = (state_23778[2]);var inst_23746 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23747 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23744);var state_23778__$1 = (function (){var statearr_23803 = state_23778;(statearr_23803[22] = inst_23745);
(statearr_23803[23] = inst_23746);
return statearr_23803;
})();var statearr_23804_23882 = state_23778__$1;(statearr_23804_23882[2] = inst_23747);
cljs.core.async.impl.ioc_helpers.process_exception(state_23778__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 9))
{var inst_23703 = (state_23778[2]);var state_23778__$1 = state_23778;var statearr_23805_23883 = state_23778__$1;(statearr_23805_23883[2] = inst_23703);
(statearr_23805_23883[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 41))
{var inst_23744 = (state_23778[18]);var inst_23646 = (state_23778[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23778,40,Object,null,39);var inst_23751 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23744,inst_23646,done);var state_23778__$1 = state_23778;var statearr_23806_23884 = state_23778__$1;(statearr_23806_23884[2] = inst_23751);
cljs.core.async.impl.ioc_helpers.process_exception(state_23778__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 10))
{var inst_23656 = (state_23778[15]);var inst_23658 = (state_23778[17]);var inst_23664 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23656,inst_23658);var inst_23665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23664,0,null);var inst_23666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23664,1,null);var state_23778__$1 = (function (){var statearr_23807 = state_23778;(statearr_23807[24] = inst_23665);
return statearr_23807;
})();if(cljs.core.truth_(inst_23666))
{var statearr_23808_23885 = state_23778__$1;(statearr_23808_23885[1] = 13);
} else
{var statearr_23809_23886 = state_23778__$1;(statearr_23809_23886[1] = 14);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 42))
{var state_23778__$1 = state_23778;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23778__$1,45,dchan);
} else
{if((state_val_23779 === 11))
{var inst_23675 = (state_23778[25]);var inst_23655 = (state_23778[14]);var inst_23675__$1 = cljs.core.seq(inst_23655);var state_23778__$1 = (function (){var statearr_23810 = state_23778;(statearr_23810[25] = inst_23675__$1);
return statearr_23810;
})();if(inst_23675__$1)
{var statearr_23811_23887 = state_23778__$1;(statearr_23811_23887[1] = 16);
} else
{var statearr_23812_23888 = state_23778__$1;(statearr_23812_23888[1] = 17);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 43))
{var state_23778__$1 = state_23778;var statearr_23813_23889 = state_23778__$1;(statearr_23813_23889[2] = null);
(statearr_23813_23889[1] = 44);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 12))
{var inst_23701 = (state_23778[2]);var state_23778__$1 = state_23778;var statearr_23814_23890 = state_23778__$1;(statearr_23814_23890[2] = inst_23701);
(statearr_23814_23890[1] = 9);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 44))
{var inst_23771 = (state_23778[2]);var state_23778__$1 = (function (){var statearr_23815 = state_23778;(statearr_23815[26] = inst_23771);
return statearr_23815;
})();var statearr_23816_23891 = state_23778__$1;(statearr_23816_23891[2] = null);
(statearr_23816_23891[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 13))
{var inst_23665 = (state_23778[24]);var inst_23668 = cljs.core.async.close_BANG_(inst_23665);var state_23778__$1 = state_23778;var statearr_23817_23892 = state_23778__$1;(statearr_23817_23892[2] = inst_23668);
(statearr_23817_23892[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 45))
{var inst_23768 = (state_23778[2]);var state_23778__$1 = state_23778;var statearr_23821_23893 = state_23778__$1;(statearr_23821_23893[2] = inst_23768);
(statearr_23821_23893[1] = 44);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 14))
{var state_23778__$1 = state_23778;var statearr_23822_23894 = state_23778__$1;(statearr_23822_23894[2] = null);
(statearr_23822_23894[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 15))
{var inst_23655 = (state_23778[14]);var inst_23656 = (state_23778[15]);var inst_23657 = (state_23778[16]);var inst_23658 = (state_23778[17]);var inst_23671 = (state_23778[2]);var inst_23672 = (inst_23658 + 1);var tmp23818 = inst_23655;var tmp23819 = inst_23656;var tmp23820 = inst_23657;var inst_23655__$1 = tmp23818;var inst_23656__$1 = tmp23819;var inst_23657__$1 = tmp23820;var inst_23658__$1 = inst_23672;var state_23778__$1 = (function (){var statearr_23823 = state_23778;(statearr_23823[27] = inst_23671);
(statearr_23823[14] = inst_23655__$1);
(statearr_23823[15] = inst_23656__$1);
(statearr_23823[16] = inst_23657__$1);
(statearr_23823[17] = inst_23658__$1);
return statearr_23823;
})();var statearr_23824_23895 = state_23778__$1;(statearr_23824_23895[2] = null);
(statearr_23824_23895[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 16))
{var inst_23675 = (state_23778[25]);var inst_23677 = cljs.core.chunked_seq_QMARK_(inst_23675);var state_23778__$1 = state_23778;if(inst_23677)
{var statearr_23825_23896 = state_23778__$1;(statearr_23825_23896[1] = 19);
} else
{var statearr_23826_23897 = state_23778__$1;(statearr_23826_23897[1] = 20);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 17))
{var state_23778__$1 = state_23778;var statearr_23827_23898 = state_23778__$1;(statearr_23827_23898[2] = null);
(statearr_23827_23898[1] = 18);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 18))
{var inst_23699 = (state_23778[2]);var state_23778__$1 = state_23778;var statearr_23828_23899 = state_23778__$1;(statearr_23828_23899[2] = inst_23699);
(statearr_23828_23899[1] = 12);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 19))
{var inst_23675 = (state_23778[25]);var inst_23679 = cljs.core.chunk_first(inst_23675);var inst_23680 = cljs.core.chunk_rest(inst_23675);var inst_23681 = cljs.core.count(inst_23679);var inst_23655 = inst_23680;var inst_23656 = inst_23679;var inst_23657 = inst_23681;var inst_23658 = 0;var state_23778__$1 = (function (){var statearr_23829 = state_23778;(statearr_23829[14] = inst_23655);
(statearr_23829[15] = inst_23656);
(statearr_23829[16] = inst_23657);
(statearr_23829[17] = inst_23658);
return statearr_23829;
})();var statearr_23830_23900 = state_23778__$1;(statearr_23830_23900[2] = null);
(statearr_23830_23900[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 20))
{var inst_23675 = (state_23778[25]);var inst_23685 = cljs.core.first(inst_23675);var inst_23686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23685,0,null);var inst_23687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23685,1,null);var state_23778__$1 = (function (){var statearr_23831 = state_23778;(statearr_23831[28] = inst_23686);
return statearr_23831;
})();if(cljs.core.truth_(inst_23687))
{var statearr_23832_23901 = state_23778__$1;(statearr_23832_23901[1] = 22);
} else
{var statearr_23833_23902 = state_23778__$1;(statearr_23833_23902[1] = 23);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 21))
{var inst_23696 = (state_23778[2]);var state_23778__$1 = state_23778;var statearr_23834_23903 = state_23778__$1;(statearr_23834_23903[2] = inst_23696);
(statearr_23834_23903[1] = 18);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 22))
{var inst_23686 = (state_23778[28]);var inst_23689 = cljs.core.async.close_BANG_(inst_23686);var state_23778__$1 = state_23778;var statearr_23835_23904 = state_23778__$1;(statearr_23835_23904[2] = inst_23689);
(statearr_23835_23904[1] = 24);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 23))
{var state_23778__$1 = state_23778;var statearr_23836_23905 = state_23778__$1;(statearr_23836_23905[2] = null);
(statearr_23836_23905[1] = 24);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 24))
{var inst_23675 = (state_23778[25]);var inst_23692 = (state_23778[2]);var inst_23693 = cljs.core.next(inst_23675);var inst_23655 = inst_23693;var inst_23656 = null;var inst_23657 = 0;var inst_23658 = 0;var state_23778__$1 = (function (){var statearr_23837 = state_23778;(statearr_23837[29] = inst_23692);
(statearr_23837[14] = inst_23655);
(statearr_23837[15] = inst_23656);
(statearr_23837[16] = inst_23657);
(statearr_23837[17] = inst_23658);
return statearr_23837;
})();var statearr_23838_23906 = state_23778__$1;(statearr_23838_23906[2] = null);
(statearr_23838_23906[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 25))
{var inst_23717 = (state_23778[12]);var inst_23716 = (state_23778[13]);var inst_23719 = (inst_23717 < inst_23716);var inst_23720 = inst_23719;var state_23778__$1 = state_23778;if(cljs.core.truth_(inst_23720))
{var statearr_23839_23907 = state_23778__$1;(statearr_23839_23907[1] = 27);
} else
{var statearr_23840_23908 = state_23778__$1;(statearr_23840_23908[1] = 28);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 26))
{var inst_23706 = (state_23778[19]);var inst_23764 = (state_23778[2]);var inst_23765 = cljs.core.seq(inst_23706);var state_23778__$1 = (function (){var statearr_23841 = state_23778;(statearr_23841[30] = inst_23764);
return statearr_23841;
})();if(inst_23765)
{var statearr_23842_23909 = state_23778__$1;(statearr_23842_23909[1] = 42);
} else
{var statearr_23843_23910 = state_23778__$1;(statearr_23843_23910[1] = 43);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 27))
{var inst_23715 = (state_23778[10]);var inst_23717 = (state_23778[12]);var inst_23722 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23715,inst_23717);var state_23778__$1 = (function (){var statearr_23844 = state_23778;(statearr_23844[7] = inst_23722);
return statearr_23844;
})();var statearr_23845_23911 = state_23778__$1;(statearr_23845_23911[2] = null);
(statearr_23845_23911[1] = 32);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 28))
{var inst_23735 = (state_23778[9]);var inst_23714 = (state_23778[11]);var inst_23735__$1 = cljs.core.seq(inst_23714);var state_23778__$1 = (function (){var statearr_23849 = state_23778;(statearr_23849[9] = inst_23735__$1);
return statearr_23849;
})();if(inst_23735__$1)
{var statearr_23850_23912 = state_23778__$1;(statearr_23850_23912[1] = 33);
} else
{var statearr_23851_23913 = state_23778__$1;(statearr_23851_23913[1] = 34);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 29))
{var inst_23762 = (state_23778[2]);var state_23778__$1 = state_23778;var statearr_23852_23914 = state_23778__$1;(statearr_23852_23914[2] = inst_23762);
(statearr_23852_23914[1] = 26);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 30))
{var inst_23715 = (state_23778[10]);var inst_23714 = (state_23778[11]);var inst_23717 = (state_23778[12]);var inst_23716 = (state_23778[13]);var inst_23731 = (state_23778[2]);var inst_23732 = (inst_23717 + 1);var tmp23846 = inst_23715;var tmp23847 = inst_23714;var tmp23848 = inst_23716;var inst_23714__$1 = tmp23847;var inst_23715__$1 = tmp23846;var inst_23716__$1 = tmp23848;var inst_23717__$1 = inst_23732;var state_23778__$1 = (function (){var statearr_23853 = state_23778;(statearr_23853[10] = inst_23715__$1);
(statearr_23853[11] = inst_23714__$1);
(statearr_23853[12] = inst_23717__$1);
(statearr_23853[13] = inst_23716__$1);
(statearr_23853[31] = inst_23731);
return statearr_23853;
})();var statearr_23854_23915 = state_23778__$1;(statearr_23854_23915[2] = null);
(statearr_23854_23915[1] = 25);
return cljs.core.constant$keyword$170;
} else
{if((state_val_23779 === 31))
{var inst_23722 = (state_23778[7]);var inst_23723 = (state_23778[2]);var inst_23724 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23725 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23722);var state_23778__$1 = (function (){var statearr_23855 = state_23778;(statearr_23855[32] = inst_23723);
(statearr_23855[33] = inst_23724);
return statearr_23855;
})();var statearr_23856_23916 = state_23778__$1;(statearr_23856_23916[2] = inst_23725);
cljs.core.async.impl.ioc_helpers.process_exception(state_23778__$1);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_23860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23860[0] = state_machine__5507__auto__);
(statearr_23860[1] = 1);
return statearr_23860;
});
var state_machine__5507__auto____1 = (function (state_23778){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23778);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23861){if((e23861 instanceof Object))
{var ex__5510__auto__ = e23861;var statearr_23862_23917 = state_23778;(statearr_23862_23917[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23778);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e23861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__23918 = state_23778;
state_23778 = G__23918;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23778){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23863 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23864);
return statearr_23863;
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
cljs.core.async.Mix = (function (){var obj23920 = {};return obj23920;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$177,null,cljs.core.constant$keyword$178,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$179);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$178);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$179,chs);var pauses = pick(cljs.core.constant$keyword$177,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$180,solos,cljs.core.constant$keyword$181,pick(cljs.core.constant$keyword$178,chs),cljs.core.constant$keyword$182,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$177)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24030 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24030 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24031){
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
this.meta24031 = meta24031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24030.cljs$lang$type = true;
cljs.core.async.t24030.cljs$lang$ctorStr = "cljs.core.async/t24030";
cljs.core.async.t24030.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24030");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24030.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24030.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24030.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24030.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24030.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24030.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24030.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24032){var self__ = this;
var _24032__$1 = this;return self__.meta24031;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24032,meta24031__$1){var self__ = this;
var _24032__$1 = this;return (new cljs.core.async.t24030(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24031__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24030 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24030(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24031){return (new cljs.core.async.t24030(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24031));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24030(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24097){var state_val_24098 = (state_24097[1]);if((state_val_24098 === 1))
{var inst_24036 = (state_24097[7]);var inst_24036__$1 = calc_state();var inst_24037 = cljs.core.seq_QMARK_(inst_24036__$1);var state_24097__$1 = (function (){var statearr_24099 = state_24097;(statearr_24099[7] = inst_24036__$1);
return statearr_24099;
})();if(inst_24037)
{var statearr_24100_24140 = state_24097__$1;(statearr_24100_24140[1] = 2);
} else
{var statearr_24101_24141 = state_24097__$1;(statearr_24101_24141[1] = 3);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 2))
{var inst_24036 = (state_24097[7]);var inst_24039 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24036);var state_24097__$1 = state_24097;var statearr_24102_24142 = state_24097__$1;(statearr_24102_24142[2] = inst_24039);
(statearr_24102_24142[1] = 4);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 3))
{var inst_24036 = (state_24097[7]);var state_24097__$1 = state_24097;var statearr_24103_24143 = state_24097__$1;(statearr_24103_24143[2] = inst_24036);
(statearr_24103_24143[1] = 4);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 4))
{var inst_24036 = (state_24097[7]);var inst_24042 = (state_24097[2]);var inst_24043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24042,cljs.core.constant$keyword$182);var inst_24044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24042,cljs.core.constant$keyword$181);var inst_24045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24042,cljs.core.constant$keyword$180);var inst_24046 = inst_24036;var state_24097__$1 = (function (){var statearr_24104 = state_24097;(statearr_24104[8] = inst_24045);
(statearr_24104[9] = inst_24046);
(statearr_24104[10] = inst_24043);
(statearr_24104[11] = inst_24044);
return statearr_24104;
})();var statearr_24105_24144 = state_24097__$1;(statearr_24105_24144[2] = null);
(statearr_24105_24144[1] = 5);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 5))
{var inst_24046 = (state_24097[9]);var inst_24049 = cljs.core.seq_QMARK_(inst_24046);var state_24097__$1 = state_24097;if(inst_24049)
{var statearr_24106_24145 = state_24097__$1;(statearr_24106_24145[1] = 7);
} else
{var statearr_24107_24146 = state_24097__$1;(statearr_24107_24146[1] = 8);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 6))
{var inst_24095 = (state_24097[2]);var state_24097__$1 = state_24097;return cljs.core.async.impl.ioc_helpers.return_chan(state_24097__$1,inst_24095);
} else
{if((state_val_24098 === 7))
{var inst_24046 = (state_24097[9]);var inst_24051 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24046);var state_24097__$1 = state_24097;var statearr_24108_24147 = state_24097__$1;(statearr_24108_24147[2] = inst_24051);
(statearr_24108_24147[1] = 9);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 8))
{var inst_24046 = (state_24097[9]);var state_24097__$1 = state_24097;var statearr_24109_24148 = state_24097__$1;(statearr_24109_24148[2] = inst_24046);
(statearr_24109_24148[1] = 9);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 9))
{var inst_24054 = (state_24097[12]);var inst_24054__$1 = (state_24097[2]);var inst_24055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24054__$1,cljs.core.constant$keyword$182);var inst_24056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24054__$1,cljs.core.constant$keyword$181);var inst_24057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24054__$1,cljs.core.constant$keyword$180);var state_24097__$1 = (function (){var statearr_24110 = state_24097;(statearr_24110[13] = inst_24056);
(statearr_24110[14] = inst_24057);
(statearr_24110[12] = inst_24054__$1);
return statearr_24110;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24097__$1,10,inst_24055);
} else
{if((state_val_24098 === 10))
{var inst_24062 = (state_24097[15]);var inst_24061 = (state_24097[16]);var inst_24060 = (state_24097[2]);var inst_24061__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24060,0,null);var inst_24062__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24060,1,null);var inst_24063 = (inst_24061__$1 == null);var inst_24064 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24062__$1,change);var inst_24065 = (inst_24063) || (inst_24064);var state_24097__$1 = (function (){var statearr_24111 = state_24097;(statearr_24111[15] = inst_24062__$1);
(statearr_24111[16] = inst_24061__$1);
return statearr_24111;
})();if(cljs.core.truth_(inst_24065))
{var statearr_24112_24149 = state_24097__$1;(statearr_24112_24149[1] = 11);
} else
{var statearr_24113_24150 = state_24097__$1;(statearr_24113_24150[1] = 12);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 11))
{var inst_24061 = (state_24097[16]);var inst_24067 = (inst_24061 == null);var state_24097__$1 = state_24097;if(cljs.core.truth_(inst_24067))
{var statearr_24114_24151 = state_24097__$1;(statearr_24114_24151[1] = 14);
} else
{var statearr_24115_24152 = state_24097__$1;(statearr_24115_24152[1] = 15);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 12))
{var inst_24057 = (state_24097[14]);var inst_24062 = (state_24097[15]);var inst_24076 = (state_24097[17]);var inst_24076__$1 = (inst_24057.cljs$core$IFn$_invoke$arity$1 ? inst_24057.cljs$core$IFn$_invoke$arity$1(inst_24062) : inst_24057.call(null,inst_24062));var state_24097__$1 = (function (){var statearr_24116 = state_24097;(statearr_24116[17] = inst_24076__$1);
return statearr_24116;
})();if(cljs.core.truth_(inst_24076__$1))
{var statearr_24117_24153 = state_24097__$1;(statearr_24117_24153[1] = 17);
} else
{var statearr_24118_24154 = state_24097__$1;(statearr_24118_24154[1] = 18);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 13))
{var inst_24093 = (state_24097[2]);var state_24097__$1 = state_24097;var statearr_24119_24155 = state_24097__$1;(statearr_24119_24155[2] = inst_24093);
(statearr_24119_24155[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 14))
{var inst_24062 = (state_24097[15]);var inst_24069 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24062);var state_24097__$1 = state_24097;var statearr_24120_24156 = state_24097__$1;(statearr_24120_24156[2] = inst_24069);
(statearr_24120_24156[1] = 16);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 15))
{var state_24097__$1 = state_24097;var statearr_24121_24157 = state_24097__$1;(statearr_24121_24157[2] = null);
(statearr_24121_24157[1] = 16);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 16))
{var inst_24072 = (state_24097[2]);var inst_24073 = calc_state();var inst_24046 = inst_24073;var state_24097__$1 = (function (){var statearr_24122 = state_24097;(statearr_24122[9] = inst_24046);
(statearr_24122[18] = inst_24072);
return statearr_24122;
})();var statearr_24123_24158 = state_24097__$1;(statearr_24123_24158[2] = null);
(statearr_24123_24158[1] = 5);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 17))
{var inst_24076 = (state_24097[17]);var state_24097__$1 = state_24097;var statearr_24124_24159 = state_24097__$1;(statearr_24124_24159[2] = inst_24076);
(statearr_24124_24159[1] = 19);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 18))
{var inst_24056 = (state_24097[13]);var inst_24057 = (state_24097[14]);var inst_24062 = (state_24097[15]);var inst_24079 = cljs.core.empty_QMARK_(inst_24057);var inst_24080 = (inst_24056.cljs$core$IFn$_invoke$arity$1 ? inst_24056.cljs$core$IFn$_invoke$arity$1(inst_24062) : inst_24056.call(null,inst_24062));var inst_24081 = cljs.core.not(inst_24080);var inst_24082 = (inst_24079) && (inst_24081);var state_24097__$1 = state_24097;var statearr_24125_24160 = state_24097__$1;(statearr_24125_24160[2] = inst_24082);
(statearr_24125_24160[1] = 19);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 19))
{var inst_24084 = (state_24097[2]);var state_24097__$1 = state_24097;if(cljs.core.truth_(inst_24084))
{var statearr_24126_24161 = state_24097__$1;(statearr_24126_24161[1] = 20);
} else
{var statearr_24127_24162 = state_24097__$1;(statearr_24127_24162[1] = 21);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 20))
{var inst_24061 = (state_24097[16]);var state_24097__$1 = state_24097;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24097__$1,23,out,inst_24061);
} else
{if((state_val_24098 === 21))
{var state_24097__$1 = state_24097;var statearr_24128_24163 = state_24097__$1;(statearr_24128_24163[2] = null);
(statearr_24128_24163[1] = 22);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 22))
{var inst_24054 = (state_24097[12]);var inst_24090 = (state_24097[2]);var inst_24046 = inst_24054;var state_24097__$1 = (function (){var statearr_24129 = state_24097;(statearr_24129[9] = inst_24046);
(statearr_24129[19] = inst_24090);
return statearr_24129;
})();var statearr_24130_24164 = state_24097__$1;(statearr_24130_24164[2] = null);
(statearr_24130_24164[1] = 5);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24098 === 23))
{var inst_24087 = (state_24097[2]);var state_24097__$1 = state_24097;var statearr_24131_24165 = state_24097__$1;(statearr_24131_24165[2] = inst_24087);
(statearr_24131_24165[1] = 22);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24135[0] = state_machine__5507__auto__);
(statearr_24135[1] = 1);
return statearr_24135;
});
var state_machine__5507__auto____1 = (function (state_24097){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24097);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24136){if((e24136 instanceof Object))
{var ex__5510__auto__ = e24136;var statearr_24137_24166 = state_24097;(statearr_24137_24166[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24097);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24167 = state_24097;
state_24097 = G__24167;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24097){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24138 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24139);
return statearr_24138;
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
cljs.core.async.Pub = (function (){var obj24169 = {};return obj24169;
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
return (function (p1__24170_SHARP_){if(cljs.core.truth_((p1__24170_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24170_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24170_SHARP_.call(null,topic))))
{return p1__24170_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24170_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24295 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24295 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24296){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24296 = meta24296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24295.cljs$lang$type = true;
cljs.core.async.t24295.cljs$lang$ctorStr = "cljs.core.async/t24295";
cljs.core.async.t24295.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24295");
});})(mults,ensure_mult))
;
cljs.core.async.t24295.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24295.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24295.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24295.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24297){var self__ = this;
var _24297__$1 = this;return self__.meta24296;
});})(mults,ensure_mult))
;
cljs.core.async.t24295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24297,meta24296__$1){var self__ = this;
var _24297__$1 = this;return (new cljs.core.async.t24295(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24296__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24295 = ((function (mults,ensure_mult){
return (function __GT_t24295(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24296){return (new cljs.core.async.t24295(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24296));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24295(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24371){var state_val_24372 = (state_24371[1]);if((state_val_24372 === 1))
{var state_24371__$1 = state_24371;var statearr_24373_24420 = state_24371__$1;(statearr_24373_24420[2] = null);
(statearr_24373_24420[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 2))
{var state_24371__$1 = state_24371;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24371__$1,4,ch);
} else
{if((state_val_24372 === 3))
{var inst_24369 = (state_24371[2]);var state_24371__$1 = state_24371;return cljs.core.async.impl.ioc_helpers.return_chan(state_24371__$1,inst_24369);
} else
{if((state_val_24372 === 4))
{var inst_24300 = (state_24371[7]);var inst_24300__$1 = (state_24371[2]);var inst_24301 = (inst_24300__$1 == null);var state_24371__$1 = (function (){var statearr_24374 = state_24371;(statearr_24374[7] = inst_24300__$1);
return statearr_24374;
})();if(cljs.core.truth_(inst_24301))
{var statearr_24375_24421 = state_24371__$1;(statearr_24375_24421[1] = 5);
} else
{var statearr_24376_24422 = state_24371__$1;(statearr_24376_24422[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 5))
{var inst_24307 = cljs.core.deref(mults);var inst_24308 = cljs.core.vals(inst_24307);var inst_24309 = cljs.core.seq(inst_24308);var inst_24310 = inst_24309;var inst_24311 = null;var inst_24312 = 0;var inst_24313 = 0;var state_24371__$1 = (function (){var statearr_24377 = state_24371;(statearr_24377[8] = inst_24313);
(statearr_24377[9] = inst_24312);
(statearr_24377[10] = inst_24311);
(statearr_24377[11] = inst_24310);
return statearr_24377;
})();var statearr_24378_24423 = state_24371__$1;(statearr_24378_24423[2] = null);
(statearr_24378_24423[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 6))
{var inst_24348 = (state_24371[12]);var inst_24350 = (state_24371[13]);var inst_24300 = (state_24371[7]);var inst_24348__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24300) : topic_fn.call(null,inst_24300));var inst_24349 = cljs.core.deref(mults);var inst_24350__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24349,inst_24348__$1);var state_24371__$1 = (function (){var statearr_24379 = state_24371;(statearr_24379[12] = inst_24348__$1);
(statearr_24379[13] = inst_24350__$1);
return statearr_24379;
})();if(cljs.core.truth_(inst_24350__$1))
{var statearr_24380_24424 = state_24371__$1;(statearr_24380_24424[1] = 19);
} else
{var statearr_24381_24425 = state_24371__$1;(statearr_24381_24425[1] = 20);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 7))
{var inst_24367 = (state_24371[2]);var state_24371__$1 = state_24371;var statearr_24382_24426 = state_24371__$1;(statearr_24382_24426[2] = inst_24367);
(statearr_24382_24426[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 8))
{var inst_24313 = (state_24371[8]);var inst_24312 = (state_24371[9]);var inst_24315 = (inst_24313 < inst_24312);var inst_24316 = inst_24315;var state_24371__$1 = state_24371;if(cljs.core.truth_(inst_24316))
{var statearr_24386_24427 = state_24371__$1;(statearr_24386_24427[1] = 10);
} else
{var statearr_24387_24428 = state_24371__$1;(statearr_24387_24428[1] = 11);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 9))
{var inst_24346 = (state_24371[2]);var state_24371__$1 = state_24371;var statearr_24388_24429 = state_24371__$1;(statearr_24388_24429[2] = inst_24346);
(statearr_24388_24429[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 10))
{var inst_24313 = (state_24371[8]);var inst_24312 = (state_24371[9]);var inst_24311 = (state_24371[10]);var inst_24310 = (state_24371[11]);var inst_24318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24311,inst_24313);var inst_24319 = cljs.core.async.muxch_STAR_(inst_24318);var inst_24320 = cljs.core.async.close_BANG_(inst_24319);var inst_24321 = (inst_24313 + 1);var tmp24383 = inst_24312;var tmp24384 = inst_24311;var tmp24385 = inst_24310;var inst_24310__$1 = tmp24385;var inst_24311__$1 = tmp24384;var inst_24312__$1 = tmp24383;var inst_24313__$1 = inst_24321;var state_24371__$1 = (function (){var statearr_24389 = state_24371;(statearr_24389[14] = inst_24320);
(statearr_24389[8] = inst_24313__$1);
(statearr_24389[9] = inst_24312__$1);
(statearr_24389[10] = inst_24311__$1);
(statearr_24389[11] = inst_24310__$1);
return statearr_24389;
})();var statearr_24390_24430 = state_24371__$1;(statearr_24390_24430[2] = null);
(statearr_24390_24430[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 11))
{var inst_24324 = (state_24371[15]);var inst_24310 = (state_24371[11]);var inst_24324__$1 = cljs.core.seq(inst_24310);var state_24371__$1 = (function (){var statearr_24391 = state_24371;(statearr_24391[15] = inst_24324__$1);
return statearr_24391;
})();if(inst_24324__$1)
{var statearr_24392_24431 = state_24371__$1;(statearr_24392_24431[1] = 13);
} else
{var statearr_24393_24432 = state_24371__$1;(statearr_24393_24432[1] = 14);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 12))
{var inst_24344 = (state_24371[2]);var state_24371__$1 = state_24371;var statearr_24394_24433 = state_24371__$1;(statearr_24394_24433[2] = inst_24344);
(statearr_24394_24433[1] = 9);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 13))
{var inst_24324 = (state_24371[15]);var inst_24326 = cljs.core.chunked_seq_QMARK_(inst_24324);var state_24371__$1 = state_24371;if(inst_24326)
{var statearr_24395_24434 = state_24371__$1;(statearr_24395_24434[1] = 16);
} else
{var statearr_24396_24435 = state_24371__$1;(statearr_24396_24435[1] = 17);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 14))
{var state_24371__$1 = state_24371;var statearr_24397_24436 = state_24371__$1;(statearr_24397_24436[2] = null);
(statearr_24397_24436[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 15))
{var inst_24342 = (state_24371[2]);var state_24371__$1 = state_24371;var statearr_24398_24437 = state_24371__$1;(statearr_24398_24437[2] = inst_24342);
(statearr_24398_24437[1] = 12);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 16))
{var inst_24324 = (state_24371[15]);var inst_24328 = cljs.core.chunk_first(inst_24324);var inst_24329 = cljs.core.chunk_rest(inst_24324);var inst_24330 = cljs.core.count(inst_24328);var inst_24310 = inst_24329;var inst_24311 = inst_24328;var inst_24312 = inst_24330;var inst_24313 = 0;var state_24371__$1 = (function (){var statearr_24399 = state_24371;(statearr_24399[8] = inst_24313);
(statearr_24399[9] = inst_24312);
(statearr_24399[10] = inst_24311);
(statearr_24399[11] = inst_24310);
return statearr_24399;
})();var statearr_24400_24438 = state_24371__$1;(statearr_24400_24438[2] = null);
(statearr_24400_24438[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 17))
{var inst_24324 = (state_24371[15]);var inst_24333 = cljs.core.first(inst_24324);var inst_24334 = cljs.core.async.muxch_STAR_(inst_24333);var inst_24335 = cljs.core.async.close_BANG_(inst_24334);var inst_24336 = cljs.core.next(inst_24324);var inst_24310 = inst_24336;var inst_24311 = null;var inst_24312 = 0;var inst_24313 = 0;var state_24371__$1 = (function (){var statearr_24401 = state_24371;(statearr_24401[16] = inst_24335);
(statearr_24401[8] = inst_24313);
(statearr_24401[9] = inst_24312);
(statearr_24401[10] = inst_24311);
(statearr_24401[11] = inst_24310);
return statearr_24401;
})();var statearr_24402_24439 = state_24371__$1;(statearr_24402_24439[2] = null);
(statearr_24402_24439[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 18))
{var inst_24339 = (state_24371[2]);var state_24371__$1 = state_24371;var statearr_24403_24440 = state_24371__$1;(statearr_24403_24440[2] = inst_24339);
(statearr_24403_24440[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 19))
{var state_24371__$1 = state_24371;var statearr_24404_24441 = state_24371__$1;(statearr_24404_24441[2] = null);
(statearr_24404_24441[1] = 24);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 20))
{var state_24371__$1 = state_24371;var statearr_24405_24442 = state_24371__$1;(statearr_24405_24442[2] = null);
(statearr_24405_24442[1] = 21);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 21))
{var inst_24364 = (state_24371[2]);var state_24371__$1 = (function (){var statearr_24406 = state_24371;(statearr_24406[17] = inst_24364);
return statearr_24406;
})();var statearr_24407_24443 = state_24371__$1;(statearr_24407_24443[2] = null);
(statearr_24407_24443[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 22))
{var inst_24361 = (state_24371[2]);var state_24371__$1 = state_24371;var statearr_24408_24444 = state_24371__$1;(statearr_24408_24444[2] = inst_24361);
(statearr_24408_24444[1] = 21);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 23))
{var inst_24348 = (state_24371[12]);var inst_24352 = (state_24371[2]);var inst_24353 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24348);var state_24371__$1 = (function (){var statearr_24409 = state_24371;(statearr_24409[18] = inst_24352);
return statearr_24409;
})();var statearr_24410_24445 = state_24371__$1;(statearr_24410_24445[2] = inst_24353);
cljs.core.async.impl.ioc_helpers.process_exception(state_24371__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24372 === 24))
{var inst_24350 = (state_24371[13]);var inst_24300 = (state_24371[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24371,23,Object,null,22);var inst_24357 = cljs.core.async.muxch_STAR_(inst_24350);var state_24371__$1 = state_24371;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24371__$1,25,inst_24357,inst_24300);
} else
{if((state_val_24372 === 25))
{var inst_24359 = (state_24371[2]);var state_24371__$1 = state_24371;var statearr_24411_24446 = state_24371__$1;(statearr_24411_24446[2] = inst_24359);
cljs.core.async.impl.ioc_helpers.process_exception(state_24371__$1);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24415[0] = state_machine__5507__auto__);
(statearr_24415[1] = 1);
return statearr_24415;
});
var state_machine__5507__auto____1 = (function (state_24371){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24371);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24416){if((e24416 instanceof Object))
{var ex__5510__auto__ = e24416;var statearr_24417_24447 = state_24371;(statearr_24417_24447[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24371);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24448 = state_24371;
state_24371 = G__24448;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24371){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24418 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24419);
return statearr_24418;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24555){var state_val_24556 = (state_24555[1]);if((state_val_24556 === 1))
{var state_24555__$1 = state_24555;var statearr_24557_24586 = state_24555__$1;(statearr_24557_24586[2] = null);
(statearr_24557_24586[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 2))
{var inst_24518 = cljs.core.reset_BANG_(dctr,cnt);var inst_24519 = 0;var state_24555__$1 = (function (){var statearr_24558 = state_24555;(statearr_24558[7] = inst_24518);
(statearr_24558[8] = inst_24519);
return statearr_24558;
})();var statearr_24559_24587 = state_24555__$1;(statearr_24559_24587[2] = null);
(statearr_24559_24587[1] = 4);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 3))
{var inst_24553 = (state_24555[2]);var state_24555__$1 = state_24555;return cljs.core.async.impl.ioc_helpers.return_chan(state_24555__$1,inst_24553);
} else
{if((state_val_24556 === 4))
{var inst_24519 = (state_24555[8]);var inst_24521 = (inst_24519 < cnt);var state_24555__$1 = state_24555;if(cljs.core.truth_(inst_24521))
{var statearr_24560_24588 = state_24555__$1;(statearr_24560_24588[1] = 6);
} else
{var statearr_24561_24589 = state_24555__$1;(statearr_24561_24589[1] = 7);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 5))
{var inst_24539 = (state_24555[2]);var state_24555__$1 = (function (){var statearr_24562 = state_24555;(statearr_24562[9] = inst_24539);
return statearr_24562;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24555__$1,12,dchan);
} else
{if((state_val_24556 === 6))
{var state_24555__$1 = state_24555;var statearr_24563_24590 = state_24555__$1;(statearr_24563_24590[2] = null);
(statearr_24563_24590[1] = 11);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 7))
{var state_24555__$1 = state_24555;var statearr_24564_24591 = state_24555__$1;(statearr_24564_24591[2] = null);
(statearr_24564_24591[1] = 8);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 8))
{var inst_24537 = (state_24555[2]);var state_24555__$1 = state_24555;var statearr_24565_24592 = state_24555__$1;(statearr_24565_24592[2] = inst_24537);
(statearr_24565_24592[1] = 5);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 9))
{var inst_24519 = (state_24555[8]);var inst_24532 = (state_24555[2]);var inst_24533 = (inst_24519 + 1);var inst_24519__$1 = inst_24533;var state_24555__$1 = (function (){var statearr_24566 = state_24555;(statearr_24566[10] = inst_24532);
(statearr_24566[8] = inst_24519__$1);
return statearr_24566;
})();var statearr_24567_24593 = state_24555__$1;(statearr_24567_24593[2] = null);
(statearr_24567_24593[1] = 4);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 10))
{var inst_24523 = (state_24555[2]);var inst_24524 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24555__$1 = (function (){var statearr_24568 = state_24555;(statearr_24568[11] = inst_24523);
return statearr_24568;
})();var statearr_24569_24594 = state_24555__$1;(statearr_24569_24594[2] = inst_24524);
cljs.core.async.impl.ioc_helpers.process_exception(state_24555__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 11))
{var inst_24519 = (state_24555[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24555,10,Object,null,9);var inst_24528 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24519) : chs__$1.call(null,inst_24519));var inst_24529 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24519) : done.call(null,inst_24519));var inst_24530 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24528,inst_24529);var state_24555__$1 = state_24555;var statearr_24570_24595 = state_24555__$1;(statearr_24570_24595[2] = inst_24530);
cljs.core.async.impl.ioc_helpers.process_exception(state_24555__$1);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 12))
{var inst_24541 = (state_24555[12]);var inst_24541__$1 = (state_24555[2]);var inst_24542 = cljs.core.some(cljs.core.nil_QMARK_,inst_24541__$1);var state_24555__$1 = (function (){var statearr_24571 = state_24555;(statearr_24571[12] = inst_24541__$1);
return statearr_24571;
})();if(cljs.core.truth_(inst_24542))
{var statearr_24572_24596 = state_24555__$1;(statearr_24572_24596[1] = 13);
} else
{var statearr_24573_24597 = state_24555__$1;(statearr_24573_24597[1] = 14);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 13))
{var inst_24544 = cljs.core.async.close_BANG_(out);var state_24555__$1 = state_24555;var statearr_24574_24598 = state_24555__$1;(statearr_24574_24598[2] = inst_24544);
(statearr_24574_24598[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 14))
{var inst_24541 = (state_24555[12]);var inst_24546 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24541);var state_24555__$1 = state_24555;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24555__$1,16,out,inst_24546);
} else
{if((state_val_24556 === 15))
{var inst_24551 = (state_24555[2]);var state_24555__$1 = state_24555;var statearr_24575_24599 = state_24555__$1;(statearr_24575_24599[2] = inst_24551);
(statearr_24575_24599[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24556 === 16))
{var inst_24548 = (state_24555[2]);var state_24555__$1 = (function (){var statearr_24576 = state_24555;(statearr_24576[13] = inst_24548);
return statearr_24576;
})();var statearr_24577_24600 = state_24555__$1;(statearr_24577_24600[2] = null);
(statearr_24577_24600[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24581[0] = state_machine__5507__auto__);
(statearr_24581[1] = 1);
return statearr_24581;
});
var state_machine__5507__auto____1 = (function (state_24555){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24555);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24582){if((e24582 instanceof Object))
{var ex__5510__auto__ = e24582;var statearr_24583_24601 = state_24555;(statearr_24583_24601[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24555);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24602 = state_24555;
state_24555 = G__24602;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24555){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24584 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24585);
return statearr_24584;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24686){var state_val_24687 = (state_24686[1]);if((state_val_24687 === 1))
{var inst_24657 = cljs.core.vec(chs);var inst_24658 = inst_24657;var state_24686__$1 = (function (){var statearr_24688 = state_24686;(statearr_24688[7] = inst_24658);
return statearr_24688;
})();var statearr_24689_24711 = state_24686__$1;(statearr_24689_24711[2] = null);
(statearr_24689_24711[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24687 === 2))
{var inst_24658 = (state_24686[7]);var inst_24660 = cljs.core.count(inst_24658);var inst_24661 = (inst_24660 > 0);var state_24686__$1 = state_24686;if(cljs.core.truth_(inst_24661))
{var statearr_24690_24712 = state_24686__$1;(statearr_24690_24712[1] = 4);
} else
{var statearr_24691_24713 = state_24686__$1;(statearr_24691_24713[1] = 5);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24687 === 3))
{var inst_24684 = (state_24686[2]);var state_24686__$1 = state_24686;return cljs.core.async.impl.ioc_helpers.return_chan(state_24686__$1,inst_24684);
} else
{if((state_val_24687 === 4))
{var inst_24658 = (state_24686[7]);var state_24686__$1 = state_24686;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24686__$1,7,inst_24658);
} else
{if((state_val_24687 === 5))
{var inst_24680 = cljs.core.async.close_BANG_(out);var state_24686__$1 = state_24686;var statearr_24692_24714 = state_24686__$1;(statearr_24692_24714[2] = inst_24680);
(statearr_24692_24714[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24687 === 6))
{var inst_24682 = (state_24686[2]);var state_24686__$1 = state_24686;var statearr_24693_24715 = state_24686__$1;(statearr_24693_24715[2] = inst_24682);
(statearr_24693_24715[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24687 === 7))
{var inst_24666 = (state_24686[8]);var inst_24665 = (state_24686[9]);var inst_24665__$1 = (state_24686[2]);var inst_24666__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24665__$1,0,null);var inst_24667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24665__$1,1,null);var inst_24668 = (inst_24666__$1 == null);var state_24686__$1 = (function (){var statearr_24694 = state_24686;(statearr_24694[10] = inst_24667);
(statearr_24694[8] = inst_24666__$1);
(statearr_24694[9] = inst_24665__$1);
return statearr_24694;
})();if(cljs.core.truth_(inst_24668))
{var statearr_24695_24716 = state_24686__$1;(statearr_24695_24716[1] = 8);
} else
{var statearr_24696_24717 = state_24686__$1;(statearr_24696_24717[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24687 === 8))
{var inst_24667 = (state_24686[10]);var inst_24666 = (state_24686[8]);var inst_24665 = (state_24686[9]);var inst_24658 = (state_24686[7]);var inst_24670 = (function (){var c = inst_24667;var v = inst_24666;var vec__24663 = inst_24665;var cs = inst_24658;return ((function (c,v,vec__24663,cs,inst_24667,inst_24666,inst_24665,inst_24658,state_val_24687){
return (function (p1__24603_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24603_SHARP_);
});
;})(c,v,vec__24663,cs,inst_24667,inst_24666,inst_24665,inst_24658,state_val_24687))
})();var inst_24671 = cljs.core.filterv(inst_24670,inst_24658);var inst_24658__$1 = inst_24671;var state_24686__$1 = (function (){var statearr_24697 = state_24686;(statearr_24697[7] = inst_24658__$1);
return statearr_24697;
})();var statearr_24698_24718 = state_24686__$1;(statearr_24698_24718[2] = null);
(statearr_24698_24718[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24687 === 9))
{var inst_24666 = (state_24686[8]);var state_24686__$1 = state_24686;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24686__$1,11,out,inst_24666);
} else
{if((state_val_24687 === 10))
{var inst_24678 = (state_24686[2]);var state_24686__$1 = state_24686;var statearr_24700_24719 = state_24686__$1;(statearr_24700_24719[2] = inst_24678);
(statearr_24700_24719[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24687 === 11))
{var inst_24658 = (state_24686[7]);var inst_24675 = (state_24686[2]);var tmp24699 = inst_24658;var inst_24658__$1 = tmp24699;var state_24686__$1 = (function (){var statearr_24701 = state_24686;(statearr_24701[11] = inst_24675);
(statearr_24701[7] = inst_24658__$1);
return statearr_24701;
})();var statearr_24702_24720 = state_24686__$1;(statearr_24702_24720[2] = null);
(statearr_24702_24720[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24706 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24706[0] = state_machine__5507__auto__);
(statearr_24706[1] = 1);
return statearr_24706;
});
var state_machine__5507__auto____1 = (function (state_24686){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24686);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24707){if((e24707 instanceof Object))
{var ex__5510__auto__ = e24707;var statearr_24708_24721 = state_24686;(statearr_24708_24721[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24686);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24722 = state_24686;
state_24686 = G__24722;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24686){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24709 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24710);
return statearr_24709;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24792){var state_val_24793 = (state_24792[1]);if((state_val_24793 === 1))
{var inst_24769 = 0;var state_24792__$1 = (function (){var statearr_24794 = state_24792;(statearr_24794[7] = inst_24769);
return statearr_24794;
})();var statearr_24795_24816 = state_24792__$1;(statearr_24795_24816[2] = null);
(statearr_24795_24816[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24793 === 2))
{var inst_24769 = (state_24792[7]);var inst_24771 = (inst_24769 < n);var state_24792__$1 = state_24792;if(cljs.core.truth_(inst_24771))
{var statearr_24796_24817 = state_24792__$1;(statearr_24796_24817[1] = 4);
} else
{var statearr_24797_24818 = state_24792__$1;(statearr_24797_24818[1] = 5);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24793 === 3))
{var inst_24789 = (state_24792[2]);var inst_24790 = cljs.core.async.close_BANG_(out);var state_24792__$1 = (function (){var statearr_24798 = state_24792;(statearr_24798[8] = inst_24789);
return statearr_24798;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24792__$1,inst_24790);
} else
{if((state_val_24793 === 4))
{var state_24792__$1 = state_24792;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24792__$1,7,ch);
} else
{if((state_val_24793 === 5))
{var state_24792__$1 = state_24792;var statearr_24799_24819 = state_24792__$1;(statearr_24799_24819[2] = null);
(statearr_24799_24819[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24793 === 6))
{var inst_24787 = (state_24792[2]);var state_24792__$1 = state_24792;var statearr_24800_24820 = state_24792__$1;(statearr_24800_24820[2] = inst_24787);
(statearr_24800_24820[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24793 === 7))
{var inst_24774 = (state_24792[9]);var inst_24774__$1 = (state_24792[2]);var inst_24775 = (inst_24774__$1 == null);var inst_24776 = cljs.core.not(inst_24775);var state_24792__$1 = (function (){var statearr_24801 = state_24792;(statearr_24801[9] = inst_24774__$1);
return statearr_24801;
})();if(inst_24776)
{var statearr_24802_24821 = state_24792__$1;(statearr_24802_24821[1] = 8);
} else
{var statearr_24803_24822 = state_24792__$1;(statearr_24803_24822[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24793 === 8))
{var inst_24774 = (state_24792[9]);var state_24792__$1 = state_24792;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24792__$1,11,out,inst_24774);
} else
{if((state_val_24793 === 9))
{var state_24792__$1 = state_24792;var statearr_24804_24823 = state_24792__$1;(statearr_24804_24823[2] = null);
(statearr_24804_24823[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24793 === 10))
{var inst_24784 = (state_24792[2]);var state_24792__$1 = state_24792;var statearr_24805_24824 = state_24792__$1;(statearr_24805_24824[2] = inst_24784);
(statearr_24805_24824[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24793 === 11))
{var inst_24769 = (state_24792[7]);var inst_24779 = (state_24792[2]);var inst_24780 = (inst_24769 + 1);var inst_24769__$1 = inst_24780;var state_24792__$1 = (function (){var statearr_24806 = state_24792;(statearr_24806[7] = inst_24769__$1);
(statearr_24806[10] = inst_24779);
return statearr_24806;
})();var statearr_24807_24825 = state_24792__$1;(statearr_24807_24825[2] = null);
(statearr_24807_24825[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24811 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24811[0] = state_machine__5507__auto__);
(statearr_24811[1] = 1);
return statearr_24811;
});
var state_machine__5507__auto____1 = (function (state_24792){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24792);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24812){if((e24812 instanceof Object))
{var ex__5510__auto__ = e24812;var statearr_24813_24826 = state_24792;(statearr_24813_24826[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24792);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24812;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24827 = state_24792;
state_24792 = G__24827;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24792){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24814 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24815);
return statearr_24814;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24899){var state_val_24900 = (state_24899[1]);if((state_val_24900 === 1))
{var inst_24876 = null;var state_24899__$1 = (function (){var statearr_24901 = state_24899;(statearr_24901[7] = inst_24876);
return statearr_24901;
})();var statearr_24902_24925 = state_24899__$1;(statearr_24902_24925[2] = null);
(statearr_24902_24925[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24900 === 2))
{var state_24899__$1 = state_24899;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24899__$1,4,ch);
} else
{if((state_val_24900 === 3))
{var inst_24896 = (state_24899[2]);var inst_24897 = cljs.core.async.close_BANG_(out);var state_24899__$1 = (function (){var statearr_24903 = state_24899;(statearr_24903[8] = inst_24896);
return statearr_24903;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24899__$1,inst_24897);
} else
{if((state_val_24900 === 4))
{var inst_24879 = (state_24899[9]);var inst_24879__$1 = (state_24899[2]);var inst_24880 = (inst_24879__$1 == null);var inst_24881 = cljs.core.not(inst_24880);var state_24899__$1 = (function (){var statearr_24904 = state_24899;(statearr_24904[9] = inst_24879__$1);
return statearr_24904;
})();if(inst_24881)
{var statearr_24905_24926 = state_24899__$1;(statearr_24905_24926[1] = 5);
} else
{var statearr_24906_24927 = state_24899__$1;(statearr_24906_24927[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24900 === 5))
{var inst_24876 = (state_24899[7]);var inst_24879 = (state_24899[9]);var inst_24883 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24879,inst_24876);var state_24899__$1 = state_24899;if(inst_24883)
{var statearr_24907_24928 = state_24899__$1;(statearr_24907_24928[1] = 8);
} else
{var statearr_24908_24929 = state_24899__$1;(statearr_24908_24929[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_24900 === 6))
{var state_24899__$1 = state_24899;var statearr_24910_24930 = state_24899__$1;(statearr_24910_24930[2] = null);
(statearr_24910_24930[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24900 === 7))
{var inst_24894 = (state_24899[2]);var state_24899__$1 = state_24899;var statearr_24911_24931 = state_24899__$1;(statearr_24911_24931[2] = inst_24894);
(statearr_24911_24931[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24900 === 8))
{var inst_24876 = (state_24899[7]);var tmp24909 = inst_24876;var inst_24876__$1 = tmp24909;var state_24899__$1 = (function (){var statearr_24912 = state_24899;(statearr_24912[7] = inst_24876__$1);
return statearr_24912;
})();var statearr_24913_24932 = state_24899__$1;(statearr_24913_24932[2] = null);
(statearr_24913_24932[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24900 === 9))
{var inst_24879 = (state_24899[9]);var state_24899__$1 = state_24899;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24899__$1,11,out,inst_24879);
} else
{if((state_val_24900 === 10))
{var inst_24891 = (state_24899[2]);var state_24899__$1 = state_24899;var statearr_24914_24933 = state_24899__$1;(statearr_24914_24933[2] = inst_24891);
(statearr_24914_24933[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_24900 === 11))
{var inst_24879 = (state_24899[9]);var inst_24888 = (state_24899[2]);var inst_24876 = inst_24879;var state_24899__$1 = (function (){var statearr_24915 = state_24899;(statearr_24915[10] = inst_24888);
(statearr_24915[7] = inst_24876);
return statearr_24915;
})();var statearr_24916_24934 = state_24899__$1;(statearr_24916_24934[2] = null);
(statearr_24916_24934[1] = 2);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_24920 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24920[0] = state_machine__5507__auto__);
(statearr_24920[1] = 1);
return statearr_24920;
});
var state_machine__5507__auto____1 = (function (state_24899){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24899);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24921){if((e24921 instanceof Object))
{var ex__5510__auto__ = e24921;var statearr_24922_24935 = state_24899;(statearr_24922_24935[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24899);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e24921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__24936 = state_24899;
state_24899 = G__24936;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24899){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24923 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24924);
return statearr_24923;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25041){var state_val_25042 = (state_25041[1]);if((state_val_25042 === 1))
{var inst_25004 = (new Array(n));var inst_25005 = inst_25004;var inst_25006 = 0;var state_25041__$1 = (function (){var statearr_25043 = state_25041;(statearr_25043[7] = inst_25006);
(statearr_25043[8] = inst_25005);
return statearr_25043;
})();var statearr_25044_25072 = state_25041__$1;(statearr_25044_25072[2] = null);
(statearr_25044_25072[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25042 === 2))
{var state_25041__$1 = state_25041;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25041__$1,4,ch);
} else
{if((state_val_25042 === 3))
{var inst_25039 = (state_25041[2]);var state_25041__$1 = state_25041;return cljs.core.async.impl.ioc_helpers.return_chan(state_25041__$1,inst_25039);
} else
{if((state_val_25042 === 4))
{var inst_25009 = (state_25041[9]);var inst_25009__$1 = (state_25041[2]);var inst_25010 = (inst_25009__$1 == null);var inst_25011 = cljs.core.not(inst_25010);var state_25041__$1 = (function (){var statearr_25045 = state_25041;(statearr_25045[9] = inst_25009__$1);
return statearr_25045;
})();if(inst_25011)
{var statearr_25046_25073 = state_25041__$1;(statearr_25046_25073[1] = 5);
} else
{var statearr_25047_25074 = state_25041__$1;(statearr_25047_25074[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25042 === 5))
{var inst_25014 = (state_25041[10]);var inst_25009 = (state_25041[9]);var inst_25006 = (state_25041[7]);var inst_25005 = (state_25041[8]);var inst_25013 = (inst_25005[inst_25006] = inst_25009);var inst_25014__$1 = (inst_25006 + 1);var inst_25015 = (inst_25014__$1 < n);var state_25041__$1 = (function (){var statearr_25048 = state_25041;(statearr_25048[11] = inst_25013);
(statearr_25048[10] = inst_25014__$1);
return statearr_25048;
})();if(cljs.core.truth_(inst_25015))
{var statearr_25049_25075 = state_25041__$1;(statearr_25049_25075[1] = 8);
} else
{var statearr_25050_25076 = state_25041__$1;(statearr_25050_25076[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25042 === 6))
{var inst_25006 = (state_25041[7]);var inst_25027 = (inst_25006 > 0);var state_25041__$1 = state_25041;if(cljs.core.truth_(inst_25027))
{var statearr_25052_25077 = state_25041__$1;(statearr_25052_25077[1] = 12);
} else
{var statearr_25053_25078 = state_25041__$1;(statearr_25053_25078[1] = 13);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25042 === 7))
{var inst_25037 = (state_25041[2]);var state_25041__$1 = state_25041;var statearr_25054_25079 = state_25041__$1;(statearr_25054_25079[2] = inst_25037);
(statearr_25054_25079[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25042 === 8))
{var inst_25014 = (state_25041[10]);var inst_25005 = (state_25041[8]);var tmp25051 = inst_25005;var inst_25005__$1 = tmp25051;var inst_25006 = inst_25014;var state_25041__$1 = (function (){var statearr_25055 = state_25041;(statearr_25055[7] = inst_25006);
(statearr_25055[8] = inst_25005__$1);
return statearr_25055;
})();var statearr_25056_25080 = state_25041__$1;(statearr_25056_25080[2] = null);
(statearr_25056_25080[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25042 === 9))
{var inst_25005 = (state_25041[8]);var inst_25019 = cljs.core.vec(inst_25005);var state_25041__$1 = state_25041;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25041__$1,11,out,inst_25019);
} else
{if((state_val_25042 === 10))
{var inst_25025 = (state_25041[2]);var state_25041__$1 = state_25041;var statearr_25057_25081 = state_25041__$1;(statearr_25057_25081[2] = inst_25025);
(statearr_25057_25081[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25042 === 11))
{var inst_25021 = (state_25041[2]);var inst_25022 = (new Array(n));var inst_25005 = inst_25022;var inst_25006 = 0;var state_25041__$1 = (function (){var statearr_25058 = state_25041;(statearr_25058[12] = inst_25021);
(statearr_25058[7] = inst_25006);
(statearr_25058[8] = inst_25005);
return statearr_25058;
})();var statearr_25059_25082 = state_25041__$1;(statearr_25059_25082[2] = null);
(statearr_25059_25082[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25042 === 12))
{var inst_25005 = (state_25041[8]);var inst_25029 = cljs.core.vec(inst_25005);var state_25041__$1 = state_25041;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25041__$1,15,out,inst_25029);
} else
{if((state_val_25042 === 13))
{var state_25041__$1 = state_25041;var statearr_25060_25083 = state_25041__$1;(statearr_25060_25083[2] = null);
(statearr_25060_25083[1] = 14);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25042 === 14))
{var inst_25034 = (state_25041[2]);var inst_25035 = cljs.core.async.close_BANG_(out);var state_25041__$1 = (function (){var statearr_25061 = state_25041;(statearr_25061[13] = inst_25034);
return statearr_25061;
})();var statearr_25062_25084 = state_25041__$1;(statearr_25062_25084[2] = inst_25035);
(statearr_25062_25084[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25042 === 15))
{var inst_25031 = (state_25041[2]);var state_25041__$1 = state_25041;var statearr_25063_25085 = state_25041__$1;(statearr_25063_25085[2] = inst_25031);
(statearr_25063_25085[1] = 14);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_25067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25067[0] = state_machine__5507__auto__);
(statearr_25067[1] = 1);
return statearr_25067;
});
var state_machine__5507__auto____1 = (function (state_25041){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25041);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25068){if((e25068 instanceof Object))
{var ex__5510__auto__ = e25068;var statearr_25069_25086 = state_25041;(statearr_25069_25086[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25041);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e25068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__25087 = state_25041;
state_25041 = G__25087;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25041){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25070 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25071);
return statearr_25070;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25200){var state_val_25201 = (state_25200[1]);if((state_val_25201 === 1))
{var inst_25159 = [];var inst_25160 = inst_25159;var inst_25161 = cljs.core.constant$keyword$183;var state_25200__$1 = (function (){var statearr_25202 = state_25200;(statearr_25202[7] = inst_25160);
(statearr_25202[8] = inst_25161);
return statearr_25202;
})();var statearr_25203_25231 = state_25200__$1;(statearr_25203_25231[2] = null);
(statearr_25203_25231[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25201 === 2))
{var state_25200__$1 = state_25200;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25200__$1,4,ch);
} else
{if((state_val_25201 === 3))
{var inst_25198 = (state_25200[2]);var state_25200__$1 = state_25200;return cljs.core.async.impl.ioc_helpers.return_chan(state_25200__$1,inst_25198);
} else
{if((state_val_25201 === 4))
{var inst_25164 = (state_25200[9]);var inst_25164__$1 = (state_25200[2]);var inst_25165 = (inst_25164__$1 == null);var inst_25166 = cljs.core.not(inst_25165);var state_25200__$1 = (function (){var statearr_25204 = state_25200;(statearr_25204[9] = inst_25164__$1);
return statearr_25204;
})();if(inst_25166)
{var statearr_25205_25232 = state_25200__$1;(statearr_25205_25232[1] = 5);
} else
{var statearr_25206_25233 = state_25200__$1;(statearr_25206_25233[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25201 === 5))
{var inst_25168 = (state_25200[10]);var inst_25161 = (state_25200[8]);var inst_25164 = (state_25200[9]);var inst_25168__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25164) : f.call(null,inst_25164));var inst_25169 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25168__$1,inst_25161);var inst_25170 = cljs.core.keyword_identical_QMARK_(inst_25161,cljs.core.constant$keyword$183);var inst_25171 = (inst_25169) || (inst_25170);var state_25200__$1 = (function (){var statearr_25207 = state_25200;(statearr_25207[10] = inst_25168__$1);
return statearr_25207;
})();if(cljs.core.truth_(inst_25171))
{var statearr_25208_25234 = state_25200__$1;(statearr_25208_25234[1] = 8);
} else
{var statearr_25209_25235 = state_25200__$1;(statearr_25209_25235[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25201 === 6))
{var inst_25160 = (state_25200[7]);var inst_25185 = inst_25160.length;var inst_25186 = (inst_25185 > 0);var state_25200__$1 = state_25200;if(cljs.core.truth_(inst_25186))
{var statearr_25211_25236 = state_25200__$1;(statearr_25211_25236[1] = 12);
} else
{var statearr_25212_25237 = state_25200__$1;(statearr_25212_25237[1] = 13);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_25201 === 7))
{var inst_25196 = (state_25200[2]);var state_25200__$1 = state_25200;var statearr_25213_25238 = state_25200__$1;(statearr_25213_25238[2] = inst_25196);
(statearr_25213_25238[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25201 === 8))
{var inst_25160 = (state_25200[7]);var inst_25168 = (state_25200[10]);var inst_25164 = (state_25200[9]);var inst_25173 = inst_25160.push(inst_25164);var tmp25210 = inst_25160;var inst_25160__$1 = tmp25210;var inst_25161 = inst_25168;var state_25200__$1 = (function (){var statearr_25214 = state_25200;(statearr_25214[7] = inst_25160__$1);
(statearr_25214[11] = inst_25173);
(statearr_25214[8] = inst_25161);
return statearr_25214;
})();var statearr_25215_25239 = state_25200__$1;(statearr_25215_25239[2] = null);
(statearr_25215_25239[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25201 === 9))
{var inst_25160 = (state_25200[7]);var inst_25176 = cljs.core.vec(inst_25160);var state_25200__$1 = state_25200;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25200__$1,11,out,inst_25176);
} else
{if((state_val_25201 === 10))
{var inst_25183 = (state_25200[2]);var state_25200__$1 = state_25200;var statearr_25216_25240 = state_25200__$1;(statearr_25216_25240[2] = inst_25183);
(statearr_25216_25240[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25201 === 11))
{var inst_25168 = (state_25200[10]);var inst_25164 = (state_25200[9]);var inst_25178 = (state_25200[2]);var inst_25179 = [];var inst_25180 = inst_25179.push(inst_25164);var inst_25160 = inst_25179;var inst_25161 = inst_25168;var state_25200__$1 = (function (){var statearr_25217 = state_25200;(statearr_25217[12] = inst_25178);
(statearr_25217[7] = inst_25160);
(statearr_25217[13] = inst_25180);
(statearr_25217[8] = inst_25161);
return statearr_25217;
})();var statearr_25218_25241 = state_25200__$1;(statearr_25218_25241[2] = null);
(statearr_25218_25241[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25201 === 12))
{var inst_25160 = (state_25200[7]);var inst_25188 = cljs.core.vec(inst_25160);var state_25200__$1 = state_25200;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25200__$1,15,out,inst_25188);
} else
{if((state_val_25201 === 13))
{var state_25200__$1 = state_25200;var statearr_25219_25242 = state_25200__$1;(statearr_25219_25242[2] = null);
(statearr_25219_25242[1] = 14);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25201 === 14))
{var inst_25193 = (state_25200[2]);var inst_25194 = cljs.core.async.close_BANG_(out);var state_25200__$1 = (function (){var statearr_25220 = state_25200;(statearr_25220[14] = inst_25193);
return statearr_25220;
})();var statearr_25221_25243 = state_25200__$1;(statearr_25221_25243[2] = inst_25194);
(statearr_25221_25243[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_25201 === 15))
{var inst_25190 = (state_25200[2]);var state_25200__$1 = state_25200;var statearr_25222_25244 = state_25200__$1;(statearr_25222_25244[2] = inst_25190);
(statearr_25222_25244[1] = 14);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_25226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25226[0] = state_machine__5507__auto__);
(statearr_25226[1] = 1);
return statearr_25226;
});
var state_machine__5507__auto____1 = (function (state_25200){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25200);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25227){if((e25227 instanceof Object))
{var ex__5510__auto__ = e25227;var statearr_25228_25245 = state_25200;(statearr_25228_25245[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25200);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e25227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__25246 = state_25200;
state_25200 = G__25246;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25200){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25229 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25230);
return statearr_25229;
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
