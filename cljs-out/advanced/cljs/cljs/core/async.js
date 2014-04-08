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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t35823 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35823 = (function (f,fn_handler,meta35824){
this.f = f;
this.fn_handler = fn_handler;
this.meta35824 = meta35824;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35823.cljs$lang$type = true;
cljs.core.async.t35823.cljs$lang$ctorStr = "cljs.core.async/t35823";
cljs.core.async.t35823.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35823");
});
cljs.core.async.t35823.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t35823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t35823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35825){var self__ = this;
var _35825__$1 = this;return self__.meta35824;
});
cljs.core.async.t35823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35825,meta35824__$1){var self__ = this;
var _35825__$1 = this;return (new cljs.core.async.t35823(self__.f,self__.fn_handler,meta35824__$1));
});
cljs.core.async.__GT_t35823 = (function __GT_t35823(f__$1,fn_handler__$1,meta35824){return (new cljs.core.async.t35823(f__$1,fn_handler__$1,meta35824));
});
}
return (new cljs.core.async.t35823(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__35827 = buff;if(G__35827)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__35827.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__35827.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__35827);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__35827);
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
{var val_35828 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35828) : fn1.call(null,val_35828));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35828) : fn1.call(null,val_35828));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___35829 = n;var x_35830 = 0;while(true){
if((x_35830 < n__4289__auto___35829))
{(a[x_35830] = 0);
{
var G__35831 = (x_35830 + 1);
x_35830 = G__35831;
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
var G__35832 = (i + 1);
i = G__35832;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t35836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35836 = (function (flag,alt_flag,meta35837){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta35837 = meta35837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35836.cljs$lang$type = true;
cljs.core.async.t35836.cljs$lang$ctorStr = "cljs.core.async/t35836";
cljs.core.async.t35836.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35836");
});
cljs.core.async.t35836.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t35836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t35836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35838){var self__ = this;
var _35838__$1 = this;return self__.meta35837;
});
cljs.core.async.t35836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35838,meta35837__$1){var self__ = this;
var _35838__$1 = this;return (new cljs.core.async.t35836(self__.flag,self__.alt_flag,meta35837__$1));
});
cljs.core.async.__GT_t35836 = (function __GT_t35836(flag__$1,alt_flag__$1,meta35837){return (new cljs.core.async.t35836(flag__$1,alt_flag__$1,meta35837));
});
}
return (new cljs.core.async.t35836(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t35842 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35842 = (function (cb,flag,alt_handler,meta35843){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta35843 = meta35843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35842.cljs$lang$type = true;
cljs.core.async.t35842.cljs$lang$ctorStr = "cljs.core.async/t35842";
cljs.core.async.t35842.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35842");
});
cljs.core.async.t35842.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t35842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t35842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35844){var self__ = this;
var _35844__$1 = this;return self__.meta35843;
});
cljs.core.async.t35842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35844,meta35843__$1){var self__ = this;
var _35844__$1 = this;return (new cljs.core.async.t35842(self__.cb,self__.flag,self__.alt_handler,meta35843__$1));
});
cljs.core.async.__GT_t35842 = (function __GT_t35842(cb__$1,flag__$1,alt_handler__$1,meta35843){return (new cljs.core.async.t35842(cb__$1,flag__$1,alt_handler__$1,meta35843));
});
}
return (new cljs.core.async.t35842(cb,flag,alt_handler,null));
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
return (function (p1__35845_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35845_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35845_SHARP_,port], null)));
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
var G__35846 = (i + 1);
i = G__35846;
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
var alts_BANG___delegate = function (ports,p__35847){var map__35849 = p__35847;var map__35849__$1 = ((cljs.core.seq_QMARK_(map__35849))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35849):map__35849);var opts = map__35849__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__35847 = null;if (arguments.length > 1) {
  p__35847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__35847);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__35850){
var ports = cljs.core.first(arglist__35850);
var p__35847 = cljs.core.rest(arglist__35850);
return alts_BANG___delegate(ports,p__35847);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t35858 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35858 = (function (ch,f,map_LT_,meta35859){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35859 = meta35859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35858.cljs$lang$type = true;
cljs.core.async.t35858.cljs$lang$ctorStr = "cljs.core.async/t35858";
cljs.core.async.t35858.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35858");
});
cljs.core.async.t35858.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t35858.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t35861 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35861 = (function (fn1,_,meta35859,ch,f,map_LT_,meta35862){
this.fn1 = fn1;
this._ = _;
this.meta35859 = meta35859;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35862 = meta35862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35861.cljs$lang$type = true;
cljs.core.async.t35861.cljs$lang$ctorStr = "cljs.core.async/t35861";
cljs.core.async.t35861.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35861");
});
cljs.core.async.t35861.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t35861.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t35861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__35851_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__35851_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35851_SHARP_) : self__.f.call(null,p1__35851_SHARP_)))) : f1.call(null,(((p1__35851_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35851_SHARP_) : self__.f.call(null,p1__35851_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t35861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35863){var self__ = this;
var _35863__$1 = this;return self__.meta35862;
});
cljs.core.async.t35861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35863,meta35862__$1){var self__ = this;
var _35863__$1 = this;return (new cljs.core.async.t35861(self__.fn1,self__._,self__.meta35859,self__.ch,self__.f,self__.map_LT_,meta35862__$1));
});
cljs.core.async.__GT_t35861 = (function __GT_t35861(fn1__$1,___$2,meta35859__$1,ch__$2,f__$2,map_LT___$2,meta35862){return (new cljs.core.async.t35861(fn1__$1,___$2,meta35859__$1,ch__$2,f__$2,map_LT___$2,meta35862));
});
}
return (new cljs.core.async.t35861(fn1,___$1,self__.meta35859,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t35858.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t35858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35860){var self__ = this;
var _35860__$1 = this;return self__.meta35859;
});
cljs.core.async.t35858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35860,meta35859__$1){var self__ = this;
var _35860__$1 = this;return (new cljs.core.async.t35858(self__.ch,self__.f,self__.map_LT_,meta35859__$1));
});
cljs.core.async.__GT_t35858 = (function __GT_t35858(ch__$1,f__$1,map_LT___$1,meta35859){return (new cljs.core.async.t35858(ch__$1,f__$1,map_LT___$1,meta35859));
});
}
return (new cljs.core.async.t35858(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t35867 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35867 = (function (ch,f,map_GT_,meta35868){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta35868 = meta35868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35867.cljs$lang$type = true;
cljs.core.async.t35867.cljs$lang$ctorStr = "cljs.core.async/t35867";
cljs.core.async.t35867.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35867");
});
cljs.core.async.t35867.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35867.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t35867.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35867.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t35867.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35867.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t35867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35869){var self__ = this;
var _35869__$1 = this;return self__.meta35868;
});
cljs.core.async.t35867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35869,meta35868__$1){var self__ = this;
var _35869__$1 = this;return (new cljs.core.async.t35867(self__.ch,self__.f,self__.map_GT_,meta35868__$1));
});
cljs.core.async.__GT_t35867 = (function __GT_t35867(ch__$1,f__$1,map_GT___$1,meta35868){return (new cljs.core.async.t35867(ch__$1,f__$1,map_GT___$1,meta35868));
});
}
return (new cljs.core.async.t35867(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t35873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35873 = (function (ch,p,filter_GT_,meta35874){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta35874 = meta35874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35873.cljs$lang$type = true;
cljs.core.async.t35873.cljs$lang$ctorStr = "cljs.core.async/t35873";
cljs.core.async.t35873.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t35873");
});
cljs.core.async.t35873.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35873.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t35873.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35873.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t35873.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35873.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t35873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35875){var self__ = this;
var _35875__$1 = this;return self__.meta35874;
});
cljs.core.async.t35873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35875,meta35874__$1){var self__ = this;
var _35875__$1 = this;return (new cljs.core.async.t35873(self__.ch,self__.p,self__.filter_GT_,meta35874__$1));
});
cljs.core.async.__GT_t35873 = (function __GT_t35873(ch__$1,p__$1,filter_GT___$1,meta35874){return (new cljs.core.async.t35873(ch__$1,p__$1,filter_GT___$1,meta35874));
});
}
return (new cljs.core.async.t35873(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___35958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_35937){var state_val_35938 = (state_35937[1]);if((state_val_35938 === 1))
{var state_35937__$1 = state_35937;var statearr_35939_35959 = state_35937__$1;(statearr_35939_35959[2] = null);
(statearr_35939_35959[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_35938 === 2))
{var state_35937__$1 = state_35937;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35937__$1,4,ch);
} else
{if((state_val_35938 === 3))
{var inst_35935 = (state_35937[2]);var state_35937__$1 = state_35937;return cljs.core.async.impl.ioc_helpers.return_chan(state_35937__$1,inst_35935);
} else
{if((state_val_35938 === 4))
{var inst_35919 = (state_35937[7]);var inst_35919__$1 = (state_35937[2]);var inst_35920 = (inst_35919__$1 == null);var state_35937__$1 = (function (){var statearr_35940 = state_35937;(statearr_35940[7] = inst_35919__$1);
return statearr_35940;
})();if(cljs.core.truth_(inst_35920))
{var statearr_35941_35960 = state_35937__$1;(statearr_35941_35960[1] = 5);
} else
{var statearr_35942_35961 = state_35937__$1;(statearr_35942_35961[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_35938 === 5))
{var inst_35922 = cljs.core.async.close_BANG_(out);var state_35937__$1 = state_35937;var statearr_35943_35962 = state_35937__$1;(statearr_35943_35962[2] = inst_35922);
(statearr_35943_35962[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_35938 === 6))
{var inst_35919 = (state_35937[7]);var inst_35924 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35919) : p.call(null,inst_35919));var state_35937__$1 = state_35937;if(cljs.core.truth_(inst_35924))
{var statearr_35944_35963 = state_35937__$1;(statearr_35944_35963[1] = 8);
} else
{var statearr_35945_35964 = state_35937__$1;(statearr_35945_35964[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_35938 === 7))
{var inst_35933 = (state_35937[2]);var state_35937__$1 = state_35937;var statearr_35946_35965 = state_35937__$1;(statearr_35946_35965[2] = inst_35933);
(statearr_35946_35965[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_35938 === 8))
{var inst_35919 = (state_35937[7]);var state_35937__$1 = state_35937;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35937__$1,11,out,inst_35919);
} else
{if((state_val_35938 === 9))
{var state_35937__$1 = state_35937;var statearr_35947_35966 = state_35937__$1;(statearr_35947_35966[2] = null);
(statearr_35947_35966[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_35938 === 10))
{var inst_35930 = (state_35937[2]);var state_35937__$1 = (function (){var statearr_35948 = state_35937;(statearr_35948[8] = inst_35930);
return statearr_35948;
})();var statearr_35949_35967 = state_35937__$1;(statearr_35949_35967[2] = null);
(statearr_35949_35967[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_35938 === 11))
{var inst_35927 = (state_35937[2]);var state_35937__$1 = state_35937;var statearr_35950_35968 = state_35937__$1;(statearr_35950_35968[2] = inst_35927);
(statearr_35950_35968[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_35954 = [null,null,null,null,null,null,null,null,null];(statearr_35954[0] = state_machine__5548__auto__);
(statearr_35954[1] = 1);
return statearr_35954;
});
var state_machine__5548__auto____1 = (function (state_35937){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_35937);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e35955){if((e35955 instanceof Object))
{var ex__5551__auto__ = e35955;var statearr_35956_35969 = state_35937;(statearr_35956_35969[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35937);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e35955;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__35970 = state_35937;
state_35937 = G__35970;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_35937){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_35937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_35957 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_35957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___35958);
return statearr_35957;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36122){var state_val_36123 = (state_36122[1]);if((state_val_36123 === 1))
{var state_36122__$1 = state_36122;var statearr_36124_36161 = state_36122__$1;(statearr_36124_36161[2] = null);
(statearr_36124_36161[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 2))
{var state_36122__$1 = state_36122;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36122__$1,4,in$);
} else
{if((state_val_36123 === 3))
{var inst_36120 = (state_36122[2]);var state_36122__$1 = state_36122;return cljs.core.async.impl.ioc_helpers.return_chan(state_36122__$1,inst_36120);
} else
{if((state_val_36123 === 4))
{var inst_36068 = (state_36122[7]);var inst_36068__$1 = (state_36122[2]);var inst_36069 = (inst_36068__$1 == null);var state_36122__$1 = (function (){var statearr_36125 = state_36122;(statearr_36125[7] = inst_36068__$1);
return statearr_36125;
})();if(cljs.core.truth_(inst_36069))
{var statearr_36126_36162 = state_36122__$1;(statearr_36126_36162[1] = 5);
} else
{var statearr_36127_36163 = state_36122__$1;(statearr_36127_36163[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 5))
{var inst_36071 = cljs.core.async.close_BANG_(out);var state_36122__$1 = state_36122;var statearr_36128_36164 = state_36122__$1;(statearr_36128_36164[2] = inst_36071);
(statearr_36128_36164[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 6))
{var inst_36068 = (state_36122[7]);var inst_36073 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36068) : f.call(null,inst_36068));var inst_36078 = cljs.core.seq(inst_36073);var inst_36079 = inst_36078;var inst_36080 = null;var inst_36081 = 0;var inst_36082 = 0;var state_36122__$1 = (function (){var statearr_36129 = state_36122;(statearr_36129[8] = inst_36079);
(statearr_36129[9] = inst_36080);
(statearr_36129[10] = inst_36081);
(statearr_36129[11] = inst_36082);
return statearr_36129;
})();var statearr_36130_36165 = state_36122__$1;(statearr_36130_36165[2] = null);
(statearr_36130_36165[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 7))
{var inst_36118 = (state_36122[2]);var state_36122__$1 = state_36122;var statearr_36131_36166 = state_36122__$1;(statearr_36131_36166[2] = inst_36118);
(statearr_36131_36166[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 8))
{var inst_36081 = (state_36122[10]);var inst_36082 = (state_36122[11]);var inst_36084 = (inst_36082 < inst_36081);var inst_36085 = inst_36084;var state_36122__$1 = state_36122;if(cljs.core.truth_(inst_36085))
{var statearr_36132_36167 = state_36122__$1;(statearr_36132_36167[1] = 10);
} else
{var statearr_36133_36168 = state_36122__$1;(statearr_36133_36168[1] = 11);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 9))
{var inst_36115 = (state_36122[2]);var state_36122__$1 = (function (){var statearr_36134 = state_36122;(statearr_36134[12] = inst_36115);
return statearr_36134;
})();var statearr_36135_36169 = state_36122__$1;(statearr_36135_36169[2] = null);
(statearr_36135_36169[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 10))
{var inst_36080 = (state_36122[9]);var inst_36082 = (state_36122[11]);var inst_36087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36080,inst_36082);var state_36122__$1 = state_36122;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36122__$1,13,out,inst_36087);
} else
{if((state_val_36123 === 11))
{var inst_36093 = (state_36122[13]);var inst_36079 = (state_36122[8]);var inst_36093__$1 = cljs.core.seq(inst_36079);var state_36122__$1 = (function (){var statearr_36139 = state_36122;(statearr_36139[13] = inst_36093__$1);
return statearr_36139;
})();if(inst_36093__$1)
{var statearr_36140_36170 = state_36122__$1;(statearr_36140_36170[1] = 14);
} else
{var statearr_36141_36171 = state_36122__$1;(statearr_36141_36171[1] = 15);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 12))
{var inst_36113 = (state_36122[2]);var state_36122__$1 = state_36122;var statearr_36142_36172 = state_36122__$1;(statearr_36142_36172[2] = inst_36113);
(statearr_36142_36172[1] = 9);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 13))
{var inst_36079 = (state_36122[8]);var inst_36080 = (state_36122[9]);var inst_36081 = (state_36122[10]);var inst_36082 = (state_36122[11]);var inst_36089 = (state_36122[2]);var inst_36090 = (inst_36082 + 1);var tmp36136 = inst_36079;var tmp36137 = inst_36080;var tmp36138 = inst_36081;var inst_36079__$1 = tmp36136;var inst_36080__$1 = tmp36137;var inst_36081__$1 = tmp36138;var inst_36082__$1 = inst_36090;var state_36122__$1 = (function (){var statearr_36143 = state_36122;(statearr_36143[8] = inst_36079__$1);
(statearr_36143[9] = inst_36080__$1);
(statearr_36143[10] = inst_36081__$1);
(statearr_36143[11] = inst_36082__$1);
(statearr_36143[14] = inst_36089);
return statearr_36143;
})();var statearr_36144_36173 = state_36122__$1;(statearr_36144_36173[2] = null);
(statearr_36144_36173[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 14))
{var inst_36093 = (state_36122[13]);var inst_36095 = cljs.core.chunked_seq_QMARK_(inst_36093);var state_36122__$1 = state_36122;if(inst_36095)
{var statearr_36145_36174 = state_36122__$1;(statearr_36145_36174[1] = 17);
} else
{var statearr_36146_36175 = state_36122__$1;(statearr_36146_36175[1] = 18);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 15))
{var state_36122__$1 = state_36122;var statearr_36147_36176 = state_36122__$1;(statearr_36147_36176[2] = null);
(statearr_36147_36176[1] = 16);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 16))
{var inst_36111 = (state_36122[2]);var state_36122__$1 = state_36122;var statearr_36148_36177 = state_36122__$1;(statearr_36148_36177[2] = inst_36111);
(statearr_36148_36177[1] = 12);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 17))
{var inst_36093 = (state_36122[13]);var inst_36097 = cljs.core.chunk_first(inst_36093);var inst_36098 = cljs.core.chunk_rest(inst_36093);var inst_36099 = cljs.core.count(inst_36097);var inst_36079 = inst_36098;var inst_36080 = inst_36097;var inst_36081 = inst_36099;var inst_36082 = 0;var state_36122__$1 = (function (){var statearr_36149 = state_36122;(statearr_36149[8] = inst_36079);
(statearr_36149[9] = inst_36080);
(statearr_36149[10] = inst_36081);
(statearr_36149[11] = inst_36082);
return statearr_36149;
})();var statearr_36150_36178 = state_36122__$1;(statearr_36150_36178[2] = null);
(statearr_36150_36178[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 18))
{var inst_36093 = (state_36122[13]);var inst_36102 = cljs.core.first(inst_36093);var state_36122__$1 = state_36122;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36122__$1,20,out,inst_36102);
} else
{if((state_val_36123 === 19))
{var inst_36108 = (state_36122[2]);var state_36122__$1 = state_36122;var statearr_36151_36179 = state_36122__$1;(statearr_36151_36179[2] = inst_36108);
(statearr_36151_36179[1] = 16);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36123 === 20))
{var inst_36093 = (state_36122[13]);var inst_36104 = (state_36122[2]);var inst_36105 = cljs.core.next(inst_36093);var inst_36079 = inst_36105;var inst_36080 = null;var inst_36081 = 0;var inst_36082 = 0;var state_36122__$1 = (function (){var statearr_36152 = state_36122;(statearr_36152[8] = inst_36079);
(statearr_36152[9] = inst_36080);
(statearr_36152[10] = inst_36081);
(statearr_36152[11] = inst_36082);
(statearr_36152[15] = inst_36104);
return statearr_36152;
})();var statearr_36153_36180 = state_36122__$1;(statearr_36153_36180[2] = null);
(statearr_36153_36180[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_36157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36157[0] = state_machine__5548__auto__);
(statearr_36157[1] = 1);
return statearr_36157;
});
var state_machine__5548__auto____1 = (function (state_36122){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36122);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36158){if((e36158 instanceof Object))
{var ex__5551__auto__ = e36158;var statearr_36159_36181 = state_36122;(statearr_36159_36181[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36122);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__36182 = state_36122;
state_36122 = G__36182;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36122){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36160 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36160;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___36263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36242){var state_val_36243 = (state_36242[1]);if((state_val_36243 === 1))
{var state_36242__$1 = state_36242;var statearr_36244_36264 = state_36242__$1;(statearr_36244_36264[2] = null);
(statearr_36244_36264[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36243 === 2))
{var state_36242__$1 = state_36242;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36242__$1,4,from);
} else
{if((state_val_36243 === 3))
{var inst_36240 = (state_36242[2]);var state_36242__$1 = state_36242;return cljs.core.async.impl.ioc_helpers.return_chan(state_36242__$1,inst_36240);
} else
{if((state_val_36243 === 4))
{var inst_36225 = (state_36242[7]);var inst_36225__$1 = (state_36242[2]);var inst_36226 = (inst_36225__$1 == null);var state_36242__$1 = (function (){var statearr_36245 = state_36242;(statearr_36245[7] = inst_36225__$1);
return statearr_36245;
})();if(cljs.core.truth_(inst_36226))
{var statearr_36246_36265 = state_36242__$1;(statearr_36246_36265[1] = 5);
} else
{var statearr_36247_36266 = state_36242__$1;(statearr_36247_36266[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36243 === 5))
{var state_36242__$1 = state_36242;if(cljs.core.truth_(close_QMARK_))
{var statearr_36248_36267 = state_36242__$1;(statearr_36248_36267[1] = 8);
} else
{var statearr_36249_36268 = state_36242__$1;(statearr_36249_36268[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36243 === 6))
{var inst_36225 = (state_36242[7]);var state_36242__$1 = state_36242;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36242__$1,11,to,inst_36225);
} else
{if((state_val_36243 === 7))
{var inst_36238 = (state_36242[2]);var state_36242__$1 = state_36242;var statearr_36250_36269 = state_36242__$1;(statearr_36250_36269[2] = inst_36238);
(statearr_36250_36269[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36243 === 8))
{var inst_36229 = cljs.core.async.close_BANG_(to);var state_36242__$1 = state_36242;var statearr_36251_36270 = state_36242__$1;(statearr_36251_36270[2] = inst_36229);
(statearr_36251_36270[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36243 === 9))
{var state_36242__$1 = state_36242;var statearr_36252_36271 = state_36242__$1;(statearr_36252_36271[2] = null);
(statearr_36252_36271[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36243 === 10))
{var inst_36232 = (state_36242[2]);var state_36242__$1 = state_36242;var statearr_36253_36272 = state_36242__$1;(statearr_36253_36272[2] = inst_36232);
(statearr_36253_36272[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36243 === 11))
{var inst_36235 = (state_36242[2]);var state_36242__$1 = (function (){var statearr_36254 = state_36242;(statearr_36254[8] = inst_36235);
return statearr_36254;
})();var statearr_36255_36273 = state_36242__$1;(statearr_36255_36273[2] = null);
(statearr_36255_36273[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_36259 = [null,null,null,null,null,null,null,null,null];(statearr_36259[0] = state_machine__5548__auto__);
(statearr_36259[1] = 1);
return statearr_36259;
});
var state_machine__5548__auto____1 = (function (state_36242){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36242);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36260){if((e36260 instanceof Object))
{var ex__5551__auto__ = e36260;var statearr_36261_36274 = state_36242;(statearr_36261_36274[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36242);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36260;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__36275 = state_36242;
state_36242 = G__36275;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36242){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36262 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36263);
return statearr_36262;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5562__auto___36362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36340){var state_val_36341 = (state_36340[1]);if((state_val_36341 === 1))
{var state_36340__$1 = state_36340;var statearr_36342_36363 = state_36340__$1;(statearr_36342_36363[2] = null);
(statearr_36342_36363[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36341 === 2))
{var state_36340__$1 = state_36340;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36340__$1,4,ch);
} else
{if((state_val_36341 === 3))
{var inst_36338 = (state_36340[2]);var state_36340__$1 = state_36340;return cljs.core.async.impl.ioc_helpers.return_chan(state_36340__$1,inst_36338);
} else
{if((state_val_36341 === 4))
{var inst_36321 = (state_36340[7]);var inst_36321__$1 = (state_36340[2]);var inst_36322 = (inst_36321__$1 == null);var state_36340__$1 = (function (){var statearr_36343 = state_36340;(statearr_36343[7] = inst_36321__$1);
return statearr_36343;
})();if(cljs.core.truth_(inst_36322))
{var statearr_36344_36364 = state_36340__$1;(statearr_36344_36364[1] = 5);
} else
{var statearr_36345_36365 = state_36340__$1;(statearr_36345_36365[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36341 === 5))
{var inst_36324 = cljs.core.async.close_BANG_(tc);var inst_36325 = cljs.core.async.close_BANG_(fc);var state_36340__$1 = (function (){var statearr_36346 = state_36340;(statearr_36346[8] = inst_36324);
return statearr_36346;
})();var statearr_36347_36366 = state_36340__$1;(statearr_36347_36366[2] = inst_36325);
(statearr_36347_36366[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36341 === 6))
{var inst_36321 = (state_36340[7]);var inst_36327 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36321) : p.call(null,inst_36321));var state_36340__$1 = state_36340;if(cljs.core.truth_(inst_36327))
{var statearr_36348_36367 = state_36340__$1;(statearr_36348_36367[1] = 9);
} else
{var statearr_36349_36368 = state_36340__$1;(statearr_36349_36368[1] = 10);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36341 === 7))
{var inst_36336 = (state_36340[2]);var state_36340__$1 = state_36340;var statearr_36350_36369 = state_36340__$1;(statearr_36350_36369[2] = inst_36336);
(statearr_36350_36369[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36341 === 8))
{var inst_36333 = (state_36340[2]);var state_36340__$1 = (function (){var statearr_36351 = state_36340;(statearr_36351[9] = inst_36333);
return statearr_36351;
})();var statearr_36352_36370 = state_36340__$1;(statearr_36352_36370[2] = null);
(statearr_36352_36370[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36341 === 9))
{var state_36340__$1 = state_36340;var statearr_36353_36371 = state_36340__$1;(statearr_36353_36371[2] = tc);
(statearr_36353_36371[1] = 11);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36341 === 10))
{var state_36340__$1 = state_36340;var statearr_36354_36372 = state_36340__$1;(statearr_36354_36372[2] = fc);
(statearr_36354_36372[1] = 11);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36341 === 11))
{var inst_36321 = (state_36340[7]);var inst_36331 = (state_36340[2]);var state_36340__$1 = state_36340;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36340__$1,8,inst_36331,inst_36321);
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
var state_machine__5548__auto____0 = (function (){var statearr_36358 = [null,null,null,null,null,null,null,null,null,null];(statearr_36358[0] = state_machine__5548__auto__);
(statearr_36358[1] = 1);
return statearr_36358;
});
var state_machine__5548__auto____1 = (function (state_36340){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36340);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36359){if((e36359 instanceof Object))
{var ex__5551__auto__ = e36359;var statearr_36360_36373 = state_36340;(statearr_36360_36373[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36340);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__36374 = state_36340;
state_36340 = G__36374;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36340){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36361 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36362);
return statearr_36361;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36421){var state_val_36422 = (state_36421[1]);if((state_val_36422 === 7))
{var inst_36417 = (state_36421[2]);var state_36421__$1 = state_36421;var statearr_36423_36439 = state_36421__$1;(statearr_36423_36439[2] = inst_36417);
(statearr_36423_36439[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36422 === 6))
{var inst_36407 = (state_36421[7]);var inst_36410 = (state_36421[8]);var inst_36414 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36407,inst_36410) : f.call(null,inst_36407,inst_36410));var inst_36407__$1 = inst_36414;var state_36421__$1 = (function (){var statearr_36424 = state_36421;(statearr_36424[7] = inst_36407__$1);
return statearr_36424;
})();var statearr_36425_36440 = state_36421__$1;(statearr_36425_36440[2] = null);
(statearr_36425_36440[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36422 === 5))
{var inst_36407 = (state_36421[7]);var state_36421__$1 = state_36421;var statearr_36426_36441 = state_36421__$1;(statearr_36426_36441[2] = inst_36407);
(statearr_36426_36441[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36422 === 4))
{var inst_36410 = (state_36421[8]);var inst_36410__$1 = (state_36421[2]);var inst_36411 = (inst_36410__$1 == null);var state_36421__$1 = (function (){var statearr_36427 = state_36421;(statearr_36427[8] = inst_36410__$1);
return statearr_36427;
})();if(cljs.core.truth_(inst_36411))
{var statearr_36428_36442 = state_36421__$1;(statearr_36428_36442[1] = 5);
} else
{var statearr_36429_36443 = state_36421__$1;(statearr_36429_36443[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36422 === 3))
{var inst_36419 = (state_36421[2]);var state_36421__$1 = state_36421;return cljs.core.async.impl.ioc_helpers.return_chan(state_36421__$1,inst_36419);
} else
{if((state_val_36422 === 2))
{var state_36421__$1 = state_36421;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36421__$1,4,ch);
} else
{if((state_val_36422 === 1))
{var inst_36407 = init;var state_36421__$1 = (function (){var statearr_36430 = state_36421;(statearr_36430[7] = inst_36407);
return statearr_36430;
})();var statearr_36431_36444 = state_36421__$1;(statearr_36431_36444[2] = null);
(statearr_36431_36444[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_36435 = [null,null,null,null,null,null,null,null,null];(statearr_36435[0] = state_machine__5548__auto__);
(statearr_36435[1] = 1);
return statearr_36435;
});
var state_machine__5548__auto____1 = (function (state_36421){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36421);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36436){if((e36436 instanceof Object))
{var ex__5551__auto__ = e36436;var statearr_36437_36445 = state_36421;(statearr_36437_36445[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36421);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__36446 = state_36421;
state_36421 = G__36446;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36421){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36438 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36438;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36508){var state_val_36509 = (state_36508[1]);if((state_val_36509 === 1))
{var inst_36488 = cljs.core.seq(coll);var inst_36489 = inst_36488;var state_36508__$1 = (function (){var statearr_36510 = state_36508;(statearr_36510[7] = inst_36489);
return statearr_36510;
})();var statearr_36511_36529 = state_36508__$1;(statearr_36511_36529[2] = null);
(statearr_36511_36529[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36509 === 2))
{var inst_36489 = (state_36508[7]);var state_36508__$1 = state_36508;if(cljs.core.truth_(inst_36489))
{var statearr_36512_36530 = state_36508__$1;(statearr_36512_36530[1] = 4);
} else
{var statearr_36513_36531 = state_36508__$1;(statearr_36513_36531[1] = 5);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36509 === 3))
{var inst_36506 = (state_36508[2]);var state_36508__$1 = state_36508;return cljs.core.async.impl.ioc_helpers.return_chan(state_36508__$1,inst_36506);
} else
{if((state_val_36509 === 4))
{var inst_36489 = (state_36508[7]);var inst_36492 = cljs.core.first(inst_36489);var state_36508__$1 = state_36508;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36508__$1,7,ch,inst_36492);
} else
{if((state_val_36509 === 5))
{var state_36508__$1 = state_36508;if(cljs.core.truth_(close_QMARK_))
{var statearr_36514_36532 = state_36508__$1;(statearr_36514_36532[1] = 8);
} else
{var statearr_36515_36533 = state_36508__$1;(statearr_36515_36533[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36509 === 6))
{var inst_36504 = (state_36508[2]);var state_36508__$1 = state_36508;var statearr_36516_36534 = state_36508__$1;(statearr_36516_36534[2] = inst_36504);
(statearr_36516_36534[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36509 === 7))
{var inst_36489 = (state_36508[7]);var inst_36494 = (state_36508[2]);var inst_36495 = cljs.core.next(inst_36489);var inst_36489__$1 = inst_36495;var state_36508__$1 = (function (){var statearr_36517 = state_36508;(statearr_36517[7] = inst_36489__$1);
(statearr_36517[8] = inst_36494);
return statearr_36517;
})();var statearr_36518_36535 = state_36508__$1;(statearr_36518_36535[2] = null);
(statearr_36518_36535[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36509 === 8))
{var inst_36499 = cljs.core.async.close_BANG_(ch);var state_36508__$1 = state_36508;var statearr_36519_36536 = state_36508__$1;(statearr_36519_36536[2] = inst_36499);
(statearr_36519_36536[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36509 === 9))
{var state_36508__$1 = state_36508;var statearr_36520_36537 = state_36508__$1;(statearr_36520_36537[2] = null);
(statearr_36520_36537[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36509 === 10))
{var inst_36502 = (state_36508[2]);var state_36508__$1 = state_36508;var statearr_36521_36538 = state_36508__$1;(statearr_36521_36538[2] = inst_36502);
(statearr_36521_36538[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_36525 = [null,null,null,null,null,null,null,null,null];(statearr_36525[0] = state_machine__5548__auto__);
(statearr_36525[1] = 1);
return statearr_36525;
});
var state_machine__5548__auto____1 = (function (state_36508){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36508);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36526){if((e36526 instanceof Object))
{var ex__5551__auto__ = e36526;var statearr_36527_36539 = state_36508;(statearr_36527_36539[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36508);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__36540 = state_36508;
state_36508 = G__36540;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36508){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36528 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_36528;
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
cljs.core.async.Mux = (function (){var obj36542 = {};return obj36542;
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
cljs.core.async.Mult = (function (){var obj36544 = {};return obj36544;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t36768 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36768 = (function (cs,ch,mult,meta36769){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta36769 = meta36769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36768.cljs$lang$type = true;
cljs.core.async.t36768.cljs$lang$ctorStr = "cljs.core.async/t36768";
cljs.core.async.t36768.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t36768");
});})(cs))
;
cljs.core.async.t36768.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t36768.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t36768.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t36768.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t36768.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t36768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36770){var self__ = this;
var _36770__$1 = this;return self__.meta36769;
});})(cs))
;
cljs.core.async.t36768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36770,meta36769__$1){var self__ = this;
var _36770__$1 = this;return (new cljs.core.async.t36768(self__.cs,self__.ch,self__.mult,meta36769__$1));
});})(cs))
;
cljs.core.async.__GT_t36768 = ((function (cs){
return (function __GT_t36768(cs__$1,ch__$1,mult__$1,meta36769){return (new cljs.core.async.t36768(cs__$1,ch__$1,mult__$1,meta36769));
});})(cs))
;
}
return (new cljs.core.async.t36768(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___36991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_36905){var state_val_36906 = (state_36905[1]);if((state_val_36906 === 32))
{var inst_36849 = (state_36905[7]);var inst_36773 = (state_36905[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36905,31,Object,null,30);var inst_36856 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36849,inst_36773,done);var state_36905__$1 = state_36905;var statearr_36907_36992 = state_36905__$1;(statearr_36907_36992[2] = inst_36856);
cljs.core.async.impl.ioc_helpers.process_exception(state_36905__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 1))
{var state_36905__$1 = state_36905;var statearr_36908_36993 = state_36905__$1;(statearr_36908_36993[2] = null);
(statearr_36908_36993[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 33))
{var inst_36862 = (state_36905[9]);var inst_36864 = cljs.core.chunked_seq_QMARK_(inst_36862);var state_36905__$1 = state_36905;if(inst_36864)
{var statearr_36909_36994 = state_36905__$1;(statearr_36909_36994[1] = 36);
} else
{var statearr_36910_36995 = state_36905__$1;(statearr_36910_36995[1] = 37);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 2))
{var state_36905__$1 = state_36905;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36905__$1,4,ch);
} else
{if((state_val_36906 === 34))
{var state_36905__$1 = state_36905;var statearr_36911_36996 = state_36905__$1;(statearr_36911_36996[2] = null);
(statearr_36911_36996[1] = 35);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 3))
{var inst_36903 = (state_36905[2]);var state_36905__$1 = state_36905;return cljs.core.async.impl.ioc_helpers.return_chan(state_36905__$1,inst_36903);
} else
{if((state_val_36906 === 35))
{var inst_36887 = (state_36905[2]);var state_36905__$1 = state_36905;var statearr_36912_36997 = state_36905__$1;(statearr_36912_36997[2] = inst_36887);
(statearr_36912_36997[1] = 29);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 4))
{var inst_36773 = (state_36905[8]);var inst_36773__$1 = (state_36905[2]);var inst_36774 = (inst_36773__$1 == null);var state_36905__$1 = (function (){var statearr_36913 = state_36905;(statearr_36913[8] = inst_36773__$1);
return statearr_36913;
})();if(cljs.core.truth_(inst_36774))
{var statearr_36914_36998 = state_36905__$1;(statearr_36914_36998[1] = 5);
} else
{var statearr_36915_36999 = state_36905__$1;(statearr_36915_36999[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 36))
{var inst_36862 = (state_36905[9]);var inst_36866 = cljs.core.chunk_first(inst_36862);var inst_36867 = cljs.core.chunk_rest(inst_36862);var inst_36868 = cljs.core.count(inst_36866);var inst_36841 = inst_36867;var inst_36842 = inst_36866;var inst_36843 = inst_36868;var inst_36844 = 0;var state_36905__$1 = (function (){var statearr_36916 = state_36905;(statearr_36916[10] = inst_36844);
(statearr_36916[11] = inst_36843);
(statearr_36916[12] = inst_36842);
(statearr_36916[13] = inst_36841);
return statearr_36916;
})();var statearr_36917_37000 = state_36905__$1;(statearr_36917_37000[2] = null);
(statearr_36917_37000[1] = 25);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 5))
{var inst_36780 = cljs.core.deref(cs);var inst_36781 = cljs.core.seq(inst_36780);var inst_36782 = inst_36781;var inst_36783 = null;var inst_36784 = 0;var inst_36785 = 0;var state_36905__$1 = (function (){var statearr_36918 = state_36905;(statearr_36918[14] = inst_36783);
(statearr_36918[15] = inst_36784);
(statearr_36918[16] = inst_36782);
(statearr_36918[17] = inst_36785);
return statearr_36918;
})();var statearr_36919_37001 = state_36905__$1;(statearr_36919_37001[2] = null);
(statearr_36919_37001[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 37))
{var inst_36862 = (state_36905[9]);var inst_36871 = cljs.core.first(inst_36862);var state_36905__$1 = (function (){var statearr_36920 = state_36905;(statearr_36920[18] = inst_36871);
return statearr_36920;
})();var statearr_36921_37002 = state_36905__$1;(statearr_36921_37002[2] = null);
(statearr_36921_37002[1] = 41);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 6))
{var inst_36833 = (state_36905[19]);var inst_36832 = cljs.core.deref(cs);var inst_36833__$1 = cljs.core.keys(inst_36832);var inst_36834 = cljs.core.count(inst_36833__$1);var inst_36835 = cljs.core.reset_BANG_(dctr,inst_36834);var inst_36840 = cljs.core.seq(inst_36833__$1);var inst_36841 = inst_36840;var inst_36842 = null;var inst_36843 = 0;var inst_36844 = 0;var state_36905__$1 = (function (){var statearr_36922 = state_36905;(statearr_36922[10] = inst_36844);
(statearr_36922[11] = inst_36843);
(statearr_36922[19] = inst_36833__$1);
(statearr_36922[12] = inst_36842);
(statearr_36922[13] = inst_36841);
(statearr_36922[20] = inst_36835);
return statearr_36922;
})();var statearr_36923_37003 = state_36905__$1;(statearr_36923_37003[2] = null);
(statearr_36923_37003[1] = 25);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 38))
{var inst_36884 = (state_36905[2]);var state_36905__$1 = state_36905;var statearr_36924_37004 = state_36905__$1;(statearr_36924_37004[2] = inst_36884);
(statearr_36924_37004[1] = 35);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 7))
{var inst_36901 = (state_36905[2]);var state_36905__$1 = state_36905;var statearr_36925_37005 = state_36905__$1;(statearr_36925_37005[2] = inst_36901);
(statearr_36925_37005[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 39))
{var inst_36862 = (state_36905[9]);var inst_36880 = (state_36905[2]);var inst_36881 = cljs.core.next(inst_36862);var inst_36841 = inst_36881;var inst_36842 = null;var inst_36843 = 0;var inst_36844 = 0;var state_36905__$1 = (function (){var statearr_36926 = state_36905;(statearr_36926[21] = inst_36880);
(statearr_36926[10] = inst_36844);
(statearr_36926[11] = inst_36843);
(statearr_36926[12] = inst_36842);
(statearr_36926[13] = inst_36841);
return statearr_36926;
})();var statearr_36927_37006 = state_36905__$1;(statearr_36927_37006[2] = null);
(statearr_36927_37006[1] = 25);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 8))
{var inst_36784 = (state_36905[15]);var inst_36785 = (state_36905[17]);var inst_36787 = (inst_36785 < inst_36784);var inst_36788 = inst_36787;var state_36905__$1 = state_36905;if(cljs.core.truth_(inst_36788))
{var statearr_36928_37007 = state_36905__$1;(statearr_36928_37007[1] = 10);
} else
{var statearr_36929_37008 = state_36905__$1;(statearr_36929_37008[1] = 11);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 40))
{var inst_36871 = (state_36905[18]);var inst_36872 = (state_36905[2]);var inst_36873 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_36874 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36871);var state_36905__$1 = (function (){var statearr_36930 = state_36905;(statearr_36930[22] = inst_36873);
(statearr_36930[23] = inst_36872);
return statearr_36930;
})();var statearr_36931_37009 = state_36905__$1;(statearr_36931_37009[2] = inst_36874);
cljs.core.async.impl.ioc_helpers.process_exception(state_36905__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 9))
{var inst_36830 = (state_36905[2]);var state_36905__$1 = state_36905;var statearr_36932_37010 = state_36905__$1;(statearr_36932_37010[2] = inst_36830);
(statearr_36932_37010[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 41))
{var inst_36871 = (state_36905[18]);var inst_36773 = (state_36905[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36905,40,Object,null,39);var inst_36878 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36871,inst_36773,done);var state_36905__$1 = state_36905;var statearr_36933_37011 = state_36905__$1;(statearr_36933_37011[2] = inst_36878);
cljs.core.async.impl.ioc_helpers.process_exception(state_36905__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 10))
{var inst_36783 = (state_36905[14]);var inst_36785 = (state_36905[17]);var inst_36791 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36783,inst_36785);var inst_36792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36791,0,null);var inst_36793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36791,1,null);var state_36905__$1 = (function (){var statearr_36934 = state_36905;(statearr_36934[24] = inst_36792);
return statearr_36934;
})();if(cljs.core.truth_(inst_36793))
{var statearr_36935_37012 = state_36905__$1;(statearr_36935_37012[1] = 13);
} else
{var statearr_36936_37013 = state_36905__$1;(statearr_36936_37013[1] = 14);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 42))
{var state_36905__$1 = state_36905;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36905__$1,45,dchan);
} else
{if((state_val_36906 === 11))
{var inst_36782 = (state_36905[16]);var inst_36802 = (state_36905[25]);var inst_36802__$1 = cljs.core.seq(inst_36782);var state_36905__$1 = (function (){var statearr_36937 = state_36905;(statearr_36937[25] = inst_36802__$1);
return statearr_36937;
})();if(inst_36802__$1)
{var statearr_36938_37014 = state_36905__$1;(statearr_36938_37014[1] = 16);
} else
{var statearr_36939_37015 = state_36905__$1;(statearr_36939_37015[1] = 17);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 43))
{var state_36905__$1 = state_36905;var statearr_36940_37016 = state_36905__$1;(statearr_36940_37016[2] = null);
(statearr_36940_37016[1] = 44);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 12))
{var inst_36828 = (state_36905[2]);var state_36905__$1 = state_36905;var statearr_36941_37017 = state_36905__$1;(statearr_36941_37017[2] = inst_36828);
(statearr_36941_37017[1] = 9);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 44))
{var inst_36898 = (state_36905[2]);var state_36905__$1 = (function (){var statearr_36942 = state_36905;(statearr_36942[26] = inst_36898);
return statearr_36942;
})();var statearr_36943_37018 = state_36905__$1;(statearr_36943_37018[2] = null);
(statearr_36943_37018[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 13))
{var inst_36792 = (state_36905[24]);var inst_36795 = cljs.core.async.close_BANG_(inst_36792);var state_36905__$1 = state_36905;var statearr_36944_37019 = state_36905__$1;(statearr_36944_37019[2] = inst_36795);
(statearr_36944_37019[1] = 15);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 45))
{var inst_36895 = (state_36905[2]);var state_36905__$1 = state_36905;var statearr_36948_37020 = state_36905__$1;(statearr_36948_37020[2] = inst_36895);
(statearr_36948_37020[1] = 44);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 14))
{var state_36905__$1 = state_36905;var statearr_36949_37021 = state_36905__$1;(statearr_36949_37021[2] = null);
(statearr_36949_37021[1] = 15);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 15))
{var inst_36783 = (state_36905[14]);var inst_36784 = (state_36905[15]);var inst_36782 = (state_36905[16]);var inst_36785 = (state_36905[17]);var inst_36798 = (state_36905[2]);var inst_36799 = (inst_36785 + 1);var tmp36945 = inst_36783;var tmp36946 = inst_36784;var tmp36947 = inst_36782;var inst_36782__$1 = tmp36947;var inst_36783__$1 = tmp36945;var inst_36784__$1 = tmp36946;var inst_36785__$1 = inst_36799;var state_36905__$1 = (function (){var statearr_36950 = state_36905;(statearr_36950[14] = inst_36783__$1);
(statearr_36950[15] = inst_36784__$1);
(statearr_36950[16] = inst_36782__$1);
(statearr_36950[27] = inst_36798);
(statearr_36950[17] = inst_36785__$1);
return statearr_36950;
})();var statearr_36951_37022 = state_36905__$1;(statearr_36951_37022[2] = null);
(statearr_36951_37022[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 16))
{var inst_36802 = (state_36905[25]);var inst_36804 = cljs.core.chunked_seq_QMARK_(inst_36802);var state_36905__$1 = state_36905;if(inst_36804)
{var statearr_36952_37023 = state_36905__$1;(statearr_36952_37023[1] = 19);
} else
{var statearr_36953_37024 = state_36905__$1;(statearr_36953_37024[1] = 20);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 17))
{var state_36905__$1 = state_36905;var statearr_36954_37025 = state_36905__$1;(statearr_36954_37025[2] = null);
(statearr_36954_37025[1] = 18);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 18))
{var inst_36826 = (state_36905[2]);var state_36905__$1 = state_36905;var statearr_36955_37026 = state_36905__$1;(statearr_36955_37026[2] = inst_36826);
(statearr_36955_37026[1] = 12);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 19))
{var inst_36802 = (state_36905[25]);var inst_36806 = cljs.core.chunk_first(inst_36802);var inst_36807 = cljs.core.chunk_rest(inst_36802);var inst_36808 = cljs.core.count(inst_36806);var inst_36782 = inst_36807;var inst_36783 = inst_36806;var inst_36784 = inst_36808;var inst_36785 = 0;var state_36905__$1 = (function (){var statearr_36956 = state_36905;(statearr_36956[14] = inst_36783);
(statearr_36956[15] = inst_36784);
(statearr_36956[16] = inst_36782);
(statearr_36956[17] = inst_36785);
return statearr_36956;
})();var statearr_36957_37027 = state_36905__$1;(statearr_36957_37027[2] = null);
(statearr_36957_37027[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 20))
{var inst_36802 = (state_36905[25]);var inst_36812 = cljs.core.first(inst_36802);var inst_36813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36812,0,null);var inst_36814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36812,1,null);var state_36905__$1 = (function (){var statearr_36958 = state_36905;(statearr_36958[28] = inst_36813);
return statearr_36958;
})();if(cljs.core.truth_(inst_36814))
{var statearr_36959_37028 = state_36905__$1;(statearr_36959_37028[1] = 22);
} else
{var statearr_36960_37029 = state_36905__$1;(statearr_36960_37029[1] = 23);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 21))
{var inst_36823 = (state_36905[2]);var state_36905__$1 = state_36905;var statearr_36961_37030 = state_36905__$1;(statearr_36961_37030[2] = inst_36823);
(statearr_36961_37030[1] = 18);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 22))
{var inst_36813 = (state_36905[28]);var inst_36816 = cljs.core.async.close_BANG_(inst_36813);var state_36905__$1 = state_36905;var statearr_36962_37031 = state_36905__$1;(statearr_36962_37031[2] = inst_36816);
(statearr_36962_37031[1] = 24);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 23))
{var state_36905__$1 = state_36905;var statearr_36963_37032 = state_36905__$1;(statearr_36963_37032[2] = null);
(statearr_36963_37032[1] = 24);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 24))
{var inst_36802 = (state_36905[25]);var inst_36819 = (state_36905[2]);var inst_36820 = cljs.core.next(inst_36802);var inst_36782 = inst_36820;var inst_36783 = null;var inst_36784 = 0;var inst_36785 = 0;var state_36905__$1 = (function (){var statearr_36964 = state_36905;(statearr_36964[14] = inst_36783);
(statearr_36964[15] = inst_36784);
(statearr_36964[16] = inst_36782);
(statearr_36964[17] = inst_36785);
(statearr_36964[29] = inst_36819);
return statearr_36964;
})();var statearr_36965_37033 = state_36905__$1;(statearr_36965_37033[2] = null);
(statearr_36965_37033[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 25))
{var inst_36844 = (state_36905[10]);var inst_36843 = (state_36905[11]);var inst_36846 = (inst_36844 < inst_36843);var inst_36847 = inst_36846;var state_36905__$1 = state_36905;if(cljs.core.truth_(inst_36847))
{var statearr_36966_37034 = state_36905__$1;(statearr_36966_37034[1] = 27);
} else
{var statearr_36967_37035 = state_36905__$1;(statearr_36967_37035[1] = 28);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 26))
{var inst_36833 = (state_36905[19]);var inst_36891 = (state_36905[2]);var inst_36892 = cljs.core.seq(inst_36833);var state_36905__$1 = (function (){var statearr_36968 = state_36905;(statearr_36968[30] = inst_36891);
return statearr_36968;
})();if(inst_36892)
{var statearr_36969_37036 = state_36905__$1;(statearr_36969_37036[1] = 42);
} else
{var statearr_36970_37037 = state_36905__$1;(statearr_36970_37037[1] = 43);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 27))
{var inst_36844 = (state_36905[10]);var inst_36842 = (state_36905[12]);var inst_36849 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36842,inst_36844);var state_36905__$1 = (function (){var statearr_36971 = state_36905;(statearr_36971[7] = inst_36849);
return statearr_36971;
})();var statearr_36972_37038 = state_36905__$1;(statearr_36972_37038[2] = null);
(statearr_36972_37038[1] = 32);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 28))
{var inst_36862 = (state_36905[9]);var inst_36841 = (state_36905[13]);var inst_36862__$1 = cljs.core.seq(inst_36841);var state_36905__$1 = (function (){var statearr_36976 = state_36905;(statearr_36976[9] = inst_36862__$1);
return statearr_36976;
})();if(inst_36862__$1)
{var statearr_36977_37039 = state_36905__$1;(statearr_36977_37039[1] = 33);
} else
{var statearr_36978_37040 = state_36905__$1;(statearr_36978_37040[1] = 34);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 29))
{var inst_36889 = (state_36905[2]);var state_36905__$1 = state_36905;var statearr_36979_37041 = state_36905__$1;(statearr_36979_37041[2] = inst_36889);
(statearr_36979_37041[1] = 26);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 30))
{var inst_36844 = (state_36905[10]);var inst_36843 = (state_36905[11]);var inst_36842 = (state_36905[12]);var inst_36841 = (state_36905[13]);var inst_36858 = (state_36905[2]);var inst_36859 = (inst_36844 + 1);var tmp36973 = inst_36843;var tmp36974 = inst_36842;var tmp36975 = inst_36841;var inst_36841__$1 = tmp36975;var inst_36842__$1 = tmp36974;var inst_36843__$1 = tmp36973;var inst_36844__$1 = inst_36859;var state_36905__$1 = (function (){var statearr_36980 = state_36905;(statearr_36980[31] = inst_36858);
(statearr_36980[10] = inst_36844__$1);
(statearr_36980[11] = inst_36843__$1);
(statearr_36980[12] = inst_36842__$1);
(statearr_36980[13] = inst_36841__$1);
return statearr_36980;
})();var statearr_36981_37042 = state_36905__$1;(statearr_36981_37042[2] = null);
(statearr_36981_37042[1] = 25);
return cljs.core.constant$keyword$555;
} else
{if((state_val_36906 === 31))
{var inst_36849 = (state_36905[7]);var inst_36850 = (state_36905[2]);var inst_36851 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_36852 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36849);var state_36905__$1 = (function (){var statearr_36982 = state_36905;(statearr_36982[32] = inst_36851);
(statearr_36982[33] = inst_36850);
return statearr_36982;
})();var statearr_36983_37043 = state_36905__$1;(statearr_36983_37043[2] = inst_36852);
cljs.core.async.impl.ioc_helpers.process_exception(state_36905__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_36987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36987[0] = state_machine__5548__auto__);
(statearr_36987[1] = 1);
return statearr_36987;
});
var state_machine__5548__auto____1 = (function (state_36905){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_36905);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e36988){if((e36988 instanceof Object))
{var ex__5551__auto__ = e36988;var statearr_36989_37044 = state_36905;(statearr_36989_37044[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36905);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e36988;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__37045 = state_36905;
state_36905 = G__37045;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_36905){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_36905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_36990 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_36990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___36991);
return statearr_36990;
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
cljs.core.async.Mix = (function (){var obj37047 = {};return obj37047;
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
;var m = (function (){if(typeof cljs.core.async.t37157 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37157 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta37158){
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
this.meta37158 = meta37158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37157.cljs$lang$type = true;
cljs.core.async.t37157.cljs$lang$ctorStr = "cljs.core.async/t37157";
cljs.core.async.t37157.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37157");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37157.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t37157.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37157.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37157.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37157.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37157.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37157.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37159){var self__ = this;
var _37159__$1 = this;return self__.meta37158;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t37157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37159,meta37158__$1){var self__ = this;
var _37159__$1 = this;return (new cljs.core.async.t37157(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta37158__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t37157 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37157(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37158){return (new cljs.core.async.t37157(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta37158));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t37157(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___37266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37224){var state_val_37225 = (state_37224[1]);if((state_val_37225 === 1))
{var inst_37163 = (state_37224[7]);var inst_37163__$1 = calc_state();var inst_37164 = cljs.core.seq_QMARK_(inst_37163__$1);var state_37224__$1 = (function (){var statearr_37226 = state_37224;(statearr_37226[7] = inst_37163__$1);
return statearr_37226;
})();if(inst_37164)
{var statearr_37227_37267 = state_37224__$1;(statearr_37227_37267[1] = 2);
} else
{var statearr_37228_37268 = state_37224__$1;(statearr_37228_37268[1] = 3);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 2))
{var inst_37163 = (state_37224[7]);var inst_37166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37163);var state_37224__$1 = state_37224;var statearr_37229_37269 = state_37224__$1;(statearr_37229_37269[2] = inst_37166);
(statearr_37229_37269[1] = 4);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 3))
{var inst_37163 = (state_37224[7]);var state_37224__$1 = state_37224;var statearr_37230_37270 = state_37224__$1;(statearr_37230_37270[2] = inst_37163);
(statearr_37230_37270[1] = 4);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 4))
{var inst_37163 = (state_37224[7]);var inst_37169 = (state_37224[2]);var inst_37170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37169,cljs.core.constant$keyword$567);var inst_37171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37169,cljs.core.constant$keyword$566);var inst_37172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37169,cljs.core.constant$keyword$565);var inst_37173 = inst_37163;var state_37224__$1 = (function (){var statearr_37231 = state_37224;(statearr_37231[8] = inst_37170);
(statearr_37231[9] = inst_37171);
(statearr_37231[10] = inst_37172);
(statearr_37231[11] = inst_37173);
return statearr_37231;
})();var statearr_37232_37271 = state_37224__$1;(statearr_37232_37271[2] = null);
(statearr_37232_37271[1] = 5);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 5))
{var inst_37173 = (state_37224[11]);var inst_37176 = cljs.core.seq_QMARK_(inst_37173);var state_37224__$1 = state_37224;if(inst_37176)
{var statearr_37233_37272 = state_37224__$1;(statearr_37233_37272[1] = 7);
} else
{var statearr_37234_37273 = state_37224__$1;(statearr_37234_37273[1] = 8);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 6))
{var inst_37222 = (state_37224[2]);var state_37224__$1 = state_37224;return cljs.core.async.impl.ioc_helpers.return_chan(state_37224__$1,inst_37222);
} else
{if((state_val_37225 === 7))
{var inst_37173 = (state_37224[11]);var inst_37178 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37173);var state_37224__$1 = state_37224;var statearr_37235_37274 = state_37224__$1;(statearr_37235_37274[2] = inst_37178);
(statearr_37235_37274[1] = 9);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 8))
{var inst_37173 = (state_37224[11]);var state_37224__$1 = state_37224;var statearr_37236_37275 = state_37224__$1;(statearr_37236_37275[2] = inst_37173);
(statearr_37236_37275[1] = 9);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 9))
{var inst_37181 = (state_37224[12]);var inst_37181__$1 = (state_37224[2]);var inst_37182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37181__$1,cljs.core.constant$keyword$567);var inst_37183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37181__$1,cljs.core.constant$keyword$566);var inst_37184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37181__$1,cljs.core.constant$keyword$565);var state_37224__$1 = (function (){var statearr_37237 = state_37224;(statearr_37237[12] = inst_37181__$1);
(statearr_37237[13] = inst_37183);
(statearr_37237[14] = inst_37184);
return statearr_37237;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37224__$1,10,inst_37182);
} else
{if((state_val_37225 === 10))
{var inst_37188 = (state_37224[15]);var inst_37189 = (state_37224[16]);var inst_37187 = (state_37224[2]);var inst_37188__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37187,0,null);var inst_37189__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37187,1,null);var inst_37190 = (inst_37188__$1 == null);var inst_37191 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37189__$1,change);var inst_37192 = (inst_37190) || (inst_37191);var state_37224__$1 = (function (){var statearr_37238 = state_37224;(statearr_37238[15] = inst_37188__$1);
(statearr_37238[16] = inst_37189__$1);
return statearr_37238;
})();if(cljs.core.truth_(inst_37192))
{var statearr_37239_37276 = state_37224__$1;(statearr_37239_37276[1] = 11);
} else
{var statearr_37240_37277 = state_37224__$1;(statearr_37240_37277[1] = 12);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 11))
{var inst_37188 = (state_37224[15]);var inst_37194 = (inst_37188 == null);var state_37224__$1 = state_37224;if(cljs.core.truth_(inst_37194))
{var statearr_37241_37278 = state_37224__$1;(statearr_37241_37278[1] = 14);
} else
{var statearr_37242_37279 = state_37224__$1;(statearr_37242_37279[1] = 15);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 12))
{var inst_37203 = (state_37224[17]);var inst_37189 = (state_37224[16]);var inst_37184 = (state_37224[14]);var inst_37203__$1 = (inst_37184.cljs$core$IFn$_invoke$arity$1 ? inst_37184.cljs$core$IFn$_invoke$arity$1(inst_37189) : inst_37184.call(null,inst_37189));var state_37224__$1 = (function (){var statearr_37243 = state_37224;(statearr_37243[17] = inst_37203__$1);
return statearr_37243;
})();if(cljs.core.truth_(inst_37203__$1))
{var statearr_37244_37280 = state_37224__$1;(statearr_37244_37280[1] = 17);
} else
{var statearr_37245_37281 = state_37224__$1;(statearr_37245_37281[1] = 18);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 13))
{var inst_37220 = (state_37224[2]);var state_37224__$1 = state_37224;var statearr_37246_37282 = state_37224__$1;(statearr_37246_37282[2] = inst_37220);
(statearr_37246_37282[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 14))
{var inst_37189 = (state_37224[16]);var inst_37196 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37189);var state_37224__$1 = state_37224;var statearr_37247_37283 = state_37224__$1;(statearr_37247_37283[2] = inst_37196);
(statearr_37247_37283[1] = 16);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 15))
{var state_37224__$1 = state_37224;var statearr_37248_37284 = state_37224__$1;(statearr_37248_37284[2] = null);
(statearr_37248_37284[1] = 16);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 16))
{var inst_37199 = (state_37224[2]);var inst_37200 = calc_state();var inst_37173 = inst_37200;var state_37224__$1 = (function (){var statearr_37249 = state_37224;(statearr_37249[18] = inst_37199);
(statearr_37249[11] = inst_37173);
return statearr_37249;
})();var statearr_37250_37285 = state_37224__$1;(statearr_37250_37285[2] = null);
(statearr_37250_37285[1] = 5);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 17))
{var inst_37203 = (state_37224[17]);var state_37224__$1 = state_37224;var statearr_37251_37286 = state_37224__$1;(statearr_37251_37286[2] = inst_37203);
(statearr_37251_37286[1] = 19);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 18))
{var inst_37183 = (state_37224[13]);var inst_37189 = (state_37224[16]);var inst_37184 = (state_37224[14]);var inst_37206 = cljs.core.empty_QMARK_(inst_37184);var inst_37207 = (inst_37183.cljs$core$IFn$_invoke$arity$1 ? inst_37183.cljs$core$IFn$_invoke$arity$1(inst_37189) : inst_37183.call(null,inst_37189));var inst_37208 = cljs.core.not(inst_37207);var inst_37209 = (inst_37206) && (inst_37208);var state_37224__$1 = state_37224;var statearr_37252_37287 = state_37224__$1;(statearr_37252_37287[2] = inst_37209);
(statearr_37252_37287[1] = 19);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 19))
{var inst_37211 = (state_37224[2]);var state_37224__$1 = state_37224;if(cljs.core.truth_(inst_37211))
{var statearr_37253_37288 = state_37224__$1;(statearr_37253_37288[1] = 20);
} else
{var statearr_37254_37289 = state_37224__$1;(statearr_37254_37289[1] = 21);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 20))
{var inst_37188 = (state_37224[15]);var state_37224__$1 = state_37224;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37224__$1,23,out,inst_37188);
} else
{if((state_val_37225 === 21))
{var state_37224__$1 = state_37224;var statearr_37255_37290 = state_37224__$1;(statearr_37255_37290[2] = null);
(statearr_37255_37290[1] = 22);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 22))
{var inst_37181 = (state_37224[12]);var inst_37217 = (state_37224[2]);var inst_37173 = inst_37181;var state_37224__$1 = (function (){var statearr_37256 = state_37224;(statearr_37256[11] = inst_37173);
(statearr_37256[19] = inst_37217);
return statearr_37256;
})();var statearr_37257_37291 = state_37224__$1;(statearr_37257_37291[2] = null);
(statearr_37257_37291[1] = 5);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37225 === 23))
{var inst_37214 = (state_37224[2]);var state_37224__$1 = state_37224;var statearr_37258_37292 = state_37224__$1;(statearr_37258_37292[2] = inst_37214);
(statearr_37258_37292[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_37262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37262[0] = state_machine__5548__auto__);
(statearr_37262[1] = 1);
return statearr_37262;
});
var state_machine__5548__auto____1 = (function (state_37224){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37224);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37263){if((e37263 instanceof Object))
{var ex__5551__auto__ = e37263;var statearr_37264_37293 = state_37224;(statearr_37264_37293[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37224);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e37263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__37294 = state_37224;
state_37224 = G__37294;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37224){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37265 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37266);
return statearr_37265;
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
cljs.core.async.Pub = (function (){var obj37296 = {};return obj37296;
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
return (function (p1__37297_SHARP_){if(cljs.core.truth_((p1__37297_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37297_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37297_SHARP_.call(null,topic))))
{return p1__37297_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37297_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t37422 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37422 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37423){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37423 = meta37423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37422.cljs$lang$type = true;
cljs.core.async.t37422.cljs$lang$ctorStr = "cljs.core.async/t37422";
cljs.core.async.t37422.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async/t37422");
});})(mults,ensure_mult))
;
cljs.core.async.t37422.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t37422.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t37422.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t37422.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t37422.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t37422.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t37422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37424){var self__ = this;
var _37424__$1 = this;return self__.meta37423;
});})(mults,ensure_mult))
;
cljs.core.async.t37422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37424,meta37423__$1){var self__ = this;
var _37424__$1 = this;return (new cljs.core.async.t37422(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37423__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t37422 = ((function (mults,ensure_mult){
return (function __GT_t37422(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37423){return (new cljs.core.async.t37422(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37423));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t37422(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___37546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37498){var state_val_37499 = (state_37498[1]);if((state_val_37499 === 1))
{var state_37498__$1 = state_37498;var statearr_37500_37547 = state_37498__$1;(statearr_37500_37547[2] = null);
(statearr_37500_37547[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 2))
{var state_37498__$1 = state_37498;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37498__$1,4,ch);
} else
{if((state_val_37499 === 3))
{var inst_37496 = (state_37498[2]);var state_37498__$1 = state_37498;return cljs.core.async.impl.ioc_helpers.return_chan(state_37498__$1,inst_37496);
} else
{if((state_val_37499 === 4))
{var inst_37427 = (state_37498[7]);var inst_37427__$1 = (state_37498[2]);var inst_37428 = (inst_37427__$1 == null);var state_37498__$1 = (function (){var statearr_37501 = state_37498;(statearr_37501[7] = inst_37427__$1);
return statearr_37501;
})();if(cljs.core.truth_(inst_37428))
{var statearr_37502_37548 = state_37498__$1;(statearr_37502_37548[1] = 5);
} else
{var statearr_37503_37549 = state_37498__$1;(statearr_37503_37549[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 5))
{var inst_37434 = cljs.core.deref(mults);var inst_37435 = cljs.core.vals(inst_37434);var inst_37436 = cljs.core.seq(inst_37435);var inst_37437 = inst_37436;var inst_37438 = null;var inst_37439 = 0;var inst_37440 = 0;var state_37498__$1 = (function (){var statearr_37504 = state_37498;(statearr_37504[8] = inst_37438);
(statearr_37504[9] = inst_37439);
(statearr_37504[10] = inst_37437);
(statearr_37504[11] = inst_37440);
return statearr_37504;
})();var statearr_37505_37550 = state_37498__$1;(statearr_37505_37550[2] = null);
(statearr_37505_37550[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 6))
{var inst_37477 = (state_37498[12]);var inst_37475 = (state_37498[13]);var inst_37427 = (state_37498[7]);var inst_37475__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37427) : topic_fn.call(null,inst_37427));var inst_37476 = cljs.core.deref(mults);var inst_37477__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37476,inst_37475__$1);var state_37498__$1 = (function (){var statearr_37506 = state_37498;(statearr_37506[12] = inst_37477__$1);
(statearr_37506[13] = inst_37475__$1);
return statearr_37506;
})();if(cljs.core.truth_(inst_37477__$1))
{var statearr_37507_37551 = state_37498__$1;(statearr_37507_37551[1] = 19);
} else
{var statearr_37508_37552 = state_37498__$1;(statearr_37508_37552[1] = 20);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 7))
{var inst_37494 = (state_37498[2]);var state_37498__$1 = state_37498;var statearr_37509_37553 = state_37498__$1;(statearr_37509_37553[2] = inst_37494);
(statearr_37509_37553[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 8))
{var inst_37439 = (state_37498[9]);var inst_37440 = (state_37498[11]);var inst_37442 = (inst_37440 < inst_37439);var inst_37443 = inst_37442;var state_37498__$1 = state_37498;if(cljs.core.truth_(inst_37443))
{var statearr_37513_37554 = state_37498__$1;(statearr_37513_37554[1] = 10);
} else
{var statearr_37514_37555 = state_37498__$1;(statearr_37514_37555[1] = 11);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 9))
{var inst_37473 = (state_37498[2]);var state_37498__$1 = state_37498;var statearr_37515_37556 = state_37498__$1;(statearr_37515_37556[2] = inst_37473);
(statearr_37515_37556[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 10))
{var inst_37438 = (state_37498[8]);var inst_37439 = (state_37498[9]);var inst_37437 = (state_37498[10]);var inst_37440 = (state_37498[11]);var inst_37445 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37438,inst_37440);var inst_37446 = cljs.core.async.muxch_STAR_(inst_37445);var inst_37447 = cljs.core.async.close_BANG_(inst_37446);var inst_37448 = (inst_37440 + 1);var tmp37510 = inst_37438;var tmp37511 = inst_37439;var tmp37512 = inst_37437;var inst_37437__$1 = tmp37512;var inst_37438__$1 = tmp37510;var inst_37439__$1 = tmp37511;var inst_37440__$1 = inst_37448;var state_37498__$1 = (function (){var statearr_37516 = state_37498;(statearr_37516[8] = inst_37438__$1);
(statearr_37516[14] = inst_37447);
(statearr_37516[9] = inst_37439__$1);
(statearr_37516[10] = inst_37437__$1);
(statearr_37516[11] = inst_37440__$1);
return statearr_37516;
})();var statearr_37517_37557 = state_37498__$1;(statearr_37517_37557[2] = null);
(statearr_37517_37557[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 11))
{var inst_37437 = (state_37498[10]);var inst_37451 = (state_37498[15]);var inst_37451__$1 = cljs.core.seq(inst_37437);var state_37498__$1 = (function (){var statearr_37518 = state_37498;(statearr_37518[15] = inst_37451__$1);
return statearr_37518;
})();if(inst_37451__$1)
{var statearr_37519_37558 = state_37498__$1;(statearr_37519_37558[1] = 13);
} else
{var statearr_37520_37559 = state_37498__$1;(statearr_37520_37559[1] = 14);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 12))
{var inst_37471 = (state_37498[2]);var state_37498__$1 = state_37498;var statearr_37521_37560 = state_37498__$1;(statearr_37521_37560[2] = inst_37471);
(statearr_37521_37560[1] = 9);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 13))
{var inst_37451 = (state_37498[15]);var inst_37453 = cljs.core.chunked_seq_QMARK_(inst_37451);var state_37498__$1 = state_37498;if(inst_37453)
{var statearr_37522_37561 = state_37498__$1;(statearr_37522_37561[1] = 16);
} else
{var statearr_37523_37562 = state_37498__$1;(statearr_37523_37562[1] = 17);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 14))
{var state_37498__$1 = state_37498;var statearr_37524_37563 = state_37498__$1;(statearr_37524_37563[2] = null);
(statearr_37524_37563[1] = 15);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 15))
{var inst_37469 = (state_37498[2]);var state_37498__$1 = state_37498;var statearr_37525_37564 = state_37498__$1;(statearr_37525_37564[2] = inst_37469);
(statearr_37525_37564[1] = 12);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 16))
{var inst_37451 = (state_37498[15]);var inst_37455 = cljs.core.chunk_first(inst_37451);var inst_37456 = cljs.core.chunk_rest(inst_37451);var inst_37457 = cljs.core.count(inst_37455);var inst_37437 = inst_37456;var inst_37438 = inst_37455;var inst_37439 = inst_37457;var inst_37440 = 0;var state_37498__$1 = (function (){var statearr_37526 = state_37498;(statearr_37526[8] = inst_37438);
(statearr_37526[9] = inst_37439);
(statearr_37526[10] = inst_37437);
(statearr_37526[11] = inst_37440);
return statearr_37526;
})();var statearr_37527_37565 = state_37498__$1;(statearr_37527_37565[2] = null);
(statearr_37527_37565[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 17))
{var inst_37451 = (state_37498[15]);var inst_37460 = cljs.core.first(inst_37451);var inst_37461 = cljs.core.async.muxch_STAR_(inst_37460);var inst_37462 = cljs.core.async.close_BANG_(inst_37461);var inst_37463 = cljs.core.next(inst_37451);var inst_37437 = inst_37463;var inst_37438 = null;var inst_37439 = 0;var inst_37440 = 0;var state_37498__$1 = (function (){var statearr_37528 = state_37498;(statearr_37528[8] = inst_37438);
(statearr_37528[9] = inst_37439);
(statearr_37528[10] = inst_37437);
(statearr_37528[11] = inst_37440);
(statearr_37528[16] = inst_37462);
return statearr_37528;
})();var statearr_37529_37566 = state_37498__$1;(statearr_37529_37566[2] = null);
(statearr_37529_37566[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 18))
{var inst_37466 = (state_37498[2]);var state_37498__$1 = state_37498;var statearr_37530_37567 = state_37498__$1;(statearr_37530_37567[2] = inst_37466);
(statearr_37530_37567[1] = 15);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 19))
{var state_37498__$1 = state_37498;var statearr_37531_37568 = state_37498__$1;(statearr_37531_37568[2] = null);
(statearr_37531_37568[1] = 24);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 20))
{var state_37498__$1 = state_37498;var statearr_37532_37569 = state_37498__$1;(statearr_37532_37569[2] = null);
(statearr_37532_37569[1] = 21);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 21))
{var inst_37491 = (state_37498[2]);var state_37498__$1 = (function (){var statearr_37533 = state_37498;(statearr_37533[17] = inst_37491);
return statearr_37533;
})();var statearr_37534_37570 = state_37498__$1;(statearr_37534_37570[2] = null);
(statearr_37534_37570[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 22))
{var inst_37488 = (state_37498[2]);var state_37498__$1 = state_37498;var statearr_37535_37571 = state_37498__$1;(statearr_37535_37571[2] = inst_37488);
(statearr_37535_37571[1] = 21);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 23))
{var inst_37475 = (state_37498[13]);var inst_37479 = (state_37498[2]);var inst_37480 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37475);var state_37498__$1 = (function (){var statearr_37536 = state_37498;(statearr_37536[18] = inst_37479);
return statearr_37536;
})();var statearr_37537_37572 = state_37498__$1;(statearr_37537_37572[2] = inst_37480);
cljs.core.async.impl.ioc_helpers.process_exception(state_37498__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37499 === 24))
{var inst_37477 = (state_37498[12]);var inst_37427 = (state_37498[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37498,23,Object,null,22);var inst_37484 = cljs.core.async.muxch_STAR_(inst_37477);var state_37498__$1 = state_37498;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37498__$1,25,inst_37484,inst_37427);
} else
{if((state_val_37499 === 25))
{var inst_37486 = (state_37498[2]);var state_37498__$1 = state_37498;var statearr_37538_37573 = state_37498__$1;(statearr_37538_37573[2] = inst_37486);
cljs.core.async.impl.ioc_helpers.process_exception(state_37498__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_37542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37542[0] = state_machine__5548__auto__);
(statearr_37542[1] = 1);
return statearr_37542;
});
var state_machine__5548__auto____1 = (function (state_37498){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37498);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37543){if((e37543 instanceof Object))
{var ex__5551__auto__ = e37543;var statearr_37544_37574 = state_37498;(statearr_37544_37574[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37498);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e37543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__37575 = state_37498;
state_37498 = G__37575;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37498){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37545 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37546);
return statearr_37545;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5562__auto___37712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37682){var state_val_37683 = (state_37682[1]);if((state_val_37683 === 1))
{var state_37682__$1 = state_37682;var statearr_37684_37713 = state_37682__$1;(statearr_37684_37713[2] = null);
(statearr_37684_37713[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 2))
{var inst_37645 = cljs.core.reset_BANG_(dctr,cnt);var inst_37646 = 0;var state_37682__$1 = (function (){var statearr_37685 = state_37682;(statearr_37685[7] = inst_37646);
(statearr_37685[8] = inst_37645);
return statearr_37685;
})();var statearr_37686_37714 = state_37682__$1;(statearr_37686_37714[2] = null);
(statearr_37686_37714[1] = 4);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 3))
{var inst_37680 = (state_37682[2]);var state_37682__$1 = state_37682;return cljs.core.async.impl.ioc_helpers.return_chan(state_37682__$1,inst_37680);
} else
{if((state_val_37683 === 4))
{var inst_37646 = (state_37682[7]);var inst_37648 = (inst_37646 < cnt);var state_37682__$1 = state_37682;if(cljs.core.truth_(inst_37648))
{var statearr_37687_37715 = state_37682__$1;(statearr_37687_37715[1] = 6);
} else
{var statearr_37688_37716 = state_37682__$1;(statearr_37688_37716[1] = 7);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 5))
{var inst_37666 = (state_37682[2]);var state_37682__$1 = (function (){var statearr_37689 = state_37682;(statearr_37689[9] = inst_37666);
return statearr_37689;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37682__$1,12,dchan);
} else
{if((state_val_37683 === 6))
{var state_37682__$1 = state_37682;var statearr_37690_37717 = state_37682__$1;(statearr_37690_37717[2] = null);
(statearr_37690_37717[1] = 11);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 7))
{var state_37682__$1 = state_37682;var statearr_37691_37718 = state_37682__$1;(statearr_37691_37718[2] = null);
(statearr_37691_37718[1] = 8);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 8))
{var inst_37664 = (state_37682[2]);var state_37682__$1 = state_37682;var statearr_37692_37719 = state_37682__$1;(statearr_37692_37719[2] = inst_37664);
(statearr_37692_37719[1] = 5);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 9))
{var inst_37646 = (state_37682[7]);var inst_37659 = (state_37682[2]);var inst_37660 = (inst_37646 + 1);var inst_37646__$1 = inst_37660;var state_37682__$1 = (function (){var statearr_37693 = state_37682;(statearr_37693[7] = inst_37646__$1);
(statearr_37693[10] = inst_37659);
return statearr_37693;
})();var statearr_37694_37720 = state_37682__$1;(statearr_37694_37720[2] = null);
(statearr_37694_37720[1] = 4);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 10))
{var inst_37650 = (state_37682[2]);var inst_37651 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_37682__$1 = (function (){var statearr_37695 = state_37682;(statearr_37695[11] = inst_37650);
return statearr_37695;
})();var statearr_37696_37721 = state_37682__$1;(statearr_37696_37721[2] = inst_37651);
cljs.core.async.impl.ioc_helpers.process_exception(state_37682__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 11))
{var inst_37646 = (state_37682[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37682,10,Object,null,9);var inst_37655 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37646) : chs__$1.call(null,inst_37646));var inst_37656 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37646) : done.call(null,inst_37646));var inst_37657 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37655,inst_37656);var state_37682__$1 = state_37682;var statearr_37697_37722 = state_37682__$1;(statearr_37697_37722[2] = inst_37657);
cljs.core.async.impl.ioc_helpers.process_exception(state_37682__$1);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 12))
{var inst_37668 = (state_37682[12]);var inst_37668__$1 = (state_37682[2]);var inst_37669 = cljs.core.some(cljs.core.nil_QMARK_,inst_37668__$1);var state_37682__$1 = (function (){var statearr_37698 = state_37682;(statearr_37698[12] = inst_37668__$1);
return statearr_37698;
})();if(cljs.core.truth_(inst_37669))
{var statearr_37699_37723 = state_37682__$1;(statearr_37699_37723[1] = 13);
} else
{var statearr_37700_37724 = state_37682__$1;(statearr_37700_37724[1] = 14);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 13))
{var inst_37671 = cljs.core.async.close_BANG_(out);var state_37682__$1 = state_37682;var statearr_37701_37725 = state_37682__$1;(statearr_37701_37725[2] = inst_37671);
(statearr_37701_37725[1] = 15);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 14))
{var inst_37668 = (state_37682[12]);var inst_37673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37668);var state_37682__$1 = state_37682;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37682__$1,16,out,inst_37673);
} else
{if((state_val_37683 === 15))
{var inst_37678 = (state_37682[2]);var state_37682__$1 = state_37682;var statearr_37702_37726 = state_37682__$1;(statearr_37702_37726[2] = inst_37678);
(statearr_37702_37726[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37683 === 16))
{var inst_37675 = (state_37682[2]);var state_37682__$1 = (function (){var statearr_37703 = state_37682;(statearr_37703[13] = inst_37675);
return statearr_37703;
})();var statearr_37704_37727 = state_37682__$1;(statearr_37704_37727[2] = null);
(statearr_37704_37727[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_37708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37708[0] = state_machine__5548__auto__);
(statearr_37708[1] = 1);
return statearr_37708;
});
var state_machine__5548__auto____1 = (function (state_37682){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37682);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37709){if((e37709 instanceof Object))
{var ex__5551__auto__ = e37709;var statearr_37710_37728 = state_37682;(statearr_37710_37728[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37682);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e37709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__37729 = state_37682;
state_37682 = G__37729;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37682){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37711 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37712);
return statearr_37711;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___37837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37813){var state_val_37814 = (state_37813[1]);if((state_val_37814 === 1))
{var inst_37784 = cljs.core.vec(chs);var inst_37785 = inst_37784;var state_37813__$1 = (function (){var statearr_37815 = state_37813;(statearr_37815[7] = inst_37785);
return statearr_37815;
})();var statearr_37816_37838 = state_37813__$1;(statearr_37816_37838[2] = null);
(statearr_37816_37838[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37814 === 2))
{var inst_37785 = (state_37813[7]);var inst_37787 = cljs.core.count(inst_37785);var inst_37788 = (inst_37787 > 0);var state_37813__$1 = state_37813;if(cljs.core.truth_(inst_37788))
{var statearr_37817_37839 = state_37813__$1;(statearr_37817_37839[1] = 4);
} else
{var statearr_37818_37840 = state_37813__$1;(statearr_37818_37840[1] = 5);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37814 === 3))
{var inst_37811 = (state_37813[2]);var state_37813__$1 = state_37813;return cljs.core.async.impl.ioc_helpers.return_chan(state_37813__$1,inst_37811);
} else
{if((state_val_37814 === 4))
{var inst_37785 = (state_37813[7]);var state_37813__$1 = state_37813;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_37813__$1,7,inst_37785);
} else
{if((state_val_37814 === 5))
{var inst_37807 = cljs.core.async.close_BANG_(out);var state_37813__$1 = state_37813;var statearr_37819_37841 = state_37813__$1;(statearr_37819_37841[2] = inst_37807);
(statearr_37819_37841[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37814 === 6))
{var inst_37809 = (state_37813[2]);var state_37813__$1 = state_37813;var statearr_37820_37842 = state_37813__$1;(statearr_37820_37842[2] = inst_37809);
(statearr_37820_37842[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37814 === 7))
{var inst_37793 = (state_37813[8]);var inst_37792 = (state_37813[9]);var inst_37792__$1 = (state_37813[2]);var inst_37793__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37792__$1,0,null);var inst_37794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37792__$1,1,null);var inst_37795 = (inst_37793__$1 == null);var state_37813__$1 = (function (){var statearr_37821 = state_37813;(statearr_37821[8] = inst_37793__$1);
(statearr_37821[10] = inst_37794);
(statearr_37821[9] = inst_37792__$1);
return statearr_37821;
})();if(cljs.core.truth_(inst_37795))
{var statearr_37822_37843 = state_37813__$1;(statearr_37822_37843[1] = 8);
} else
{var statearr_37823_37844 = state_37813__$1;(statearr_37823_37844[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37814 === 8))
{var inst_37793 = (state_37813[8]);var inst_37794 = (state_37813[10]);var inst_37792 = (state_37813[9]);var inst_37785 = (state_37813[7]);var inst_37797 = (function (){var c = inst_37794;var v = inst_37793;var vec__37790 = inst_37792;var cs = inst_37785;return ((function (c,v,vec__37790,cs,inst_37793,inst_37794,inst_37792,inst_37785,state_val_37814){
return (function (p1__37730_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37730_SHARP_);
});
;})(c,v,vec__37790,cs,inst_37793,inst_37794,inst_37792,inst_37785,state_val_37814))
})();var inst_37798 = cljs.core.filterv(inst_37797,inst_37785);var inst_37785__$1 = inst_37798;var state_37813__$1 = (function (){var statearr_37824 = state_37813;(statearr_37824[7] = inst_37785__$1);
return statearr_37824;
})();var statearr_37825_37845 = state_37813__$1;(statearr_37825_37845[2] = null);
(statearr_37825_37845[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37814 === 9))
{var inst_37793 = (state_37813[8]);var state_37813__$1 = state_37813;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37813__$1,11,out,inst_37793);
} else
{if((state_val_37814 === 10))
{var inst_37805 = (state_37813[2]);var state_37813__$1 = state_37813;var statearr_37827_37846 = state_37813__$1;(statearr_37827_37846[2] = inst_37805);
(statearr_37827_37846[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37814 === 11))
{var inst_37785 = (state_37813[7]);var inst_37802 = (state_37813[2]);var tmp37826 = inst_37785;var inst_37785__$1 = tmp37826;var state_37813__$1 = (function (){var statearr_37828 = state_37813;(statearr_37828[7] = inst_37785__$1);
(statearr_37828[11] = inst_37802);
return statearr_37828;
})();var statearr_37829_37847 = state_37813__$1;(statearr_37829_37847[2] = null);
(statearr_37829_37847[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_37833 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37833[0] = state_machine__5548__auto__);
(statearr_37833[1] = 1);
return statearr_37833;
});
var state_machine__5548__auto____1 = (function (state_37813){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37813);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37834){if((e37834 instanceof Object))
{var ex__5551__auto__ = e37834;var statearr_37835_37848 = state_37813;(statearr_37835_37848[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37813);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e37834;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__37849 = state_37813;
state_37813 = G__37849;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37813){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37836 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37837);
return statearr_37836;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___37942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_37919){var state_val_37920 = (state_37919[1]);if((state_val_37920 === 1))
{var inst_37896 = 0;var state_37919__$1 = (function (){var statearr_37921 = state_37919;(statearr_37921[7] = inst_37896);
return statearr_37921;
})();var statearr_37922_37943 = state_37919__$1;(statearr_37922_37943[2] = null);
(statearr_37922_37943[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37920 === 2))
{var inst_37896 = (state_37919[7]);var inst_37898 = (inst_37896 < n);var state_37919__$1 = state_37919;if(cljs.core.truth_(inst_37898))
{var statearr_37923_37944 = state_37919__$1;(statearr_37923_37944[1] = 4);
} else
{var statearr_37924_37945 = state_37919__$1;(statearr_37924_37945[1] = 5);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37920 === 3))
{var inst_37916 = (state_37919[2]);var inst_37917 = cljs.core.async.close_BANG_(out);var state_37919__$1 = (function (){var statearr_37925 = state_37919;(statearr_37925[8] = inst_37916);
return statearr_37925;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_37919__$1,inst_37917);
} else
{if((state_val_37920 === 4))
{var state_37919__$1 = state_37919;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37919__$1,7,ch);
} else
{if((state_val_37920 === 5))
{var state_37919__$1 = state_37919;var statearr_37926_37946 = state_37919__$1;(statearr_37926_37946[2] = null);
(statearr_37926_37946[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37920 === 6))
{var inst_37914 = (state_37919[2]);var state_37919__$1 = state_37919;var statearr_37927_37947 = state_37919__$1;(statearr_37927_37947[2] = inst_37914);
(statearr_37927_37947[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37920 === 7))
{var inst_37901 = (state_37919[9]);var inst_37901__$1 = (state_37919[2]);var inst_37902 = (inst_37901__$1 == null);var inst_37903 = cljs.core.not(inst_37902);var state_37919__$1 = (function (){var statearr_37928 = state_37919;(statearr_37928[9] = inst_37901__$1);
return statearr_37928;
})();if(inst_37903)
{var statearr_37929_37948 = state_37919__$1;(statearr_37929_37948[1] = 8);
} else
{var statearr_37930_37949 = state_37919__$1;(statearr_37930_37949[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_37920 === 8))
{var inst_37901 = (state_37919[9]);var state_37919__$1 = state_37919;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37919__$1,11,out,inst_37901);
} else
{if((state_val_37920 === 9))
{var state_37919__$1 = state_37919;var statearr_37931_37950 = state_37919__$1;(statearr_37931_37950[2] = null);
(statearr_37931_37950[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37920 === 10))
{var inst_37911 = (state_37919[2]);var state_37919__$1 = state_37919;var statearr_37932_37951 = state_37919__$1;(statearr_37932_37951[2] = inst_37911);
(statearr_37932_37951[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_37920 === 11))
{var inst_37896 = (state_37919[7]);var inst_37906 = (state_37919[2]);var inst_37907 = (inst_37896 + 1);var inst_37896__$1 = inst_37907;var state_37919__$1 = (function (){var statearr_37933 = state_37919;(statearr_37933[10] = inst_37906);
(statearr_37933[7] = inst_37896__$1);
return statearr_37933;
})();var statearr_37934_37952 = state_37919__$1;(statearr_37934_37952[2] = null);
(statearr_37934_37952[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_37938 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37938[0] = state_machine__5548__auto__);
(statearr_37938[1] = 1);
return statearr_37938;
});
var state_machine__5548__auto____1 = (function (state_37919){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_37919);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e37939){if((e37939 instanceof Object))
{var ex__5551__auto__ = e37939;var statearr_37940_37953 = state_37919;(statearr_37940_37953[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37919);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e37939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__37954 = state_37919;
state_37919 = G__37954;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_37919){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_37919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_37941 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_37941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___37942);
return statearr_37941;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38026){var state_val_38027 = (state_38026[1]);if((state_val_38027 === 1))
{var inst_38003 = null;var state_38026__$1 = (function (){var statearr_38028 = state_38026;(statearr_38028[7] = inst_38003);
return statearr_38028;
})();var statearr_38029_38052 = state_38026__$1;(statearr_38029_38052[2] = null);
(statearr_38029_38052[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38027 === 2))
{var state_38026__$1 = state_38026;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38026__$1,4,ch);
} else
{if((state_val_38027 === 3))
{var inst_38023 = (state_38026[2]);var inst_38024 = cljs.core.async.close_BANG_(out);var state_38026__$1 = (function (){var statearr_38030 = state_38026;(statearr_38030[8] = inst_38023);
return statearr_38030;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38026__$1,inst_38024);
} else
{if((state_val_38027 === 4))
{var inst_38006 = (state_38026[9]);var inst_38006__$1 = (state_38026[2]);var inst_38007 = (inst_38006__$1 == null);var inst_38008 = cljs.core.not(inst_38007);var state_38026__$1 = (function (){var statearr_38031 = state_38026;(statearr_38031[9] = inst_38006__$1);
return statearr_38031;
})();if(inst_38008)
{var statearr_38032_38053 = state_38026__$1;(statearr_38032_38053[1] = 5);
} else
{var statearr_38033_38054 = state_38026__$1;(statearr_38033_38054[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38027 === 5))
{var inst_38003 = (state_38026[7]);var inst_38006 = (state_38026[9]);var inst_38010 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38006,inst_38003);var state_38026__$1 = state_38026;if(inst_38010)
{var statearr_38034_38055 = state_38026__$1;(statearr_38034_38055[1] = 8);
} else
{var statearr_38035_38056 = state_38026__$1;(statearr_38035_38056[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38027 === 6))
{var state_38026__$1 = state_38026;var statearr_38037_38057 = state_38026__$1;(statearr_38037_38057[2] = null);
(statearr_38037_38057[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38027 === 7))
{var inst_38021 = (state_38026[2]);var state_38026__$1 = state_38026;var statearr_38038_38058 = state_38026__$1;(statearr_38038_38058[2] = inst_38021);
(statearr_38038_38058[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38027 === 8))
{var inst_38003 = (state_38026[7]);var tmp38036 = inst_38003;var inst_38003__$1 = tmp38036;var state_38026__$1 = (function (){var statearr_38039 = state_38026;(statearr_38039[7] = inst_38003__$1);
return statearr_38039;
})();var statearr_38040_38059 = state_38026__$1;(statearr_38040_38059[2] = null);
(statearr_38040_38059[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38027 === 9))
{var inst_38006 = (state_38026[9]);var state_38026__$1 = state_38026;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38026__$1,11,out,inst_38006);
} else
{if((state_val_38027 === 10))
{var inst_38018 = (state_38026[2]);var state_38026__$1 = state_38026;var statearr_38041_38060 = state_38026__$1;(statearr_38041_38060[2] = inst_38018);
(statearr_38041_38060[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38027 === 11))
{var inst_38006 = (state_38026[9]);var inst_38015 = (state_38026[2]);var inst_38003 = inst_38006;var state_38026__$1 = (function (){var statearr_38042 = state_38026;(statearr_38042[7] = inst_38003);
(statearr_38042[10] = inst_38015);
return statearr_38042;
})();var statearr_38043_38061 = state_38026__$1;(statearr_38043_38061[2] = null);
(statearr_38043_38061[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_38047 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38047[0] = state_machine__5548__auto__);
(statearr_38047[1] = 1);
return statearr_38047;
});
var state_machine__5548__auto____1 = (function (state_38026){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38026);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38048){if((e38048 instanceof Object))
{var ex__5551__auto__ = e38048;var statearr_38049_38062 = state_38026;(statearr_38049_38062[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38026);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e38048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__38063 = state_38026;
state_38026 = G__38063;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38026){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38050 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38051);
return statearr_38050;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38168){var state_val_38169 = (state_38168[1]);if((state_val_38169 === 1))
{var inst_38131 = (new Array(n));var inst_38132 = inst_38131;var inst_38133 = 0;var state_38168__$1 = (function (){var statearr_38170 = state_38168;(statearr_38170[7] = inst_38133);
(statearr_38170[8] = inst_38132);
return statearr_38170;
})();var statearr_38171_38199 = state_38168__$1;(statearr_38171_38199[2] = null);
(statearr_38171_38199[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38169 === 2))
{var state_38168__$1 = state_38168;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38168__$1,4,ch);
} else
{if((state_val_38169 === 3))
{var inst_38166 = (state_38168[2]);var state_38168__$1 = state_38168;return cljs.core.async.impl.ioc_helpers.return_chan(state_38168__$1,inst_38166);
} else
{if((state_val_38169 === 4))
{var inst_38136 = (state_38168[9]);var inst_38136__$1 = (state_38168[2]);var inst_38137 = (inst_38136__$1 == null);var inst_38138 = cljs.core.not(inst_38137);var state_38168__$1 = (function (){var statearr_38172 = state_38168;(statearr_38172[9] = inst_38136__$1);
return statearr_38172;
})();if(inst_38138)
{var statearr_38173_38200 = state_38168__$1;(statearr_38173_38200[1] = 5);
} else
{var statearr_38174_38201 = state_38168__$1;(statearr_38174_38201[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38169 === 5))
{var inst_38136 = (state_38168[9]);var inst_38133 = (state_38168[7]);var inst_38132 = (state_38168[8]);var inst_38141 = (state_38168[10]);var inst_38140 = (inst_38132[inst_38133] = inst_38136);var inst_38141__$1 = (inst_38133 + 1);var inst_38142 = (inst_38141__$1 < n);var state_38168__$1 = (function (){var statearr_38175 = state_38168;(statearr_38175[11] = inst_38140);
(statearr_38175[10] = inst_38141__$1);
return statearr_38175;
})();if(cljs.core.truth_(inst_38142))
{var statearr_38176_38202 = state_38168__$1;(statearr_38176_38202[1] = 8);
} else
{var statearr_38177_38203 = state_38168__$1;(statearr_38177_38203[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38169 === 6))
{var inst_38133 = (state_38168[7]);var inst_38154 = (inst_38133 > 0);var state_38168__$1 = state_38168;if(cljs.core.truth_(inst_38154))
{var statearr_38179_38204 = state_38168__$1;(statearr_38179_38204[1] = 12);
} else
{var statearr_38180_38205 = state_38168__$1;(statearr_38180_38205[1] = 13);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38169 === 7))
{var inst_38164 = (state_38168[2]);var state_38168__$1 = state_38168;var statearr_38181_38206 = state_38168__$1;(statearr_38181_38206[2] = inst_38164);
(statearr_38181_38206[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38169 === 8))
{var inst_38132 = (state_38168[8]);var inst_38141 = (state_38168[10]);var tmp38178 = inst_38132;var inst_38132__$1 = tmp38178;var inst_38133 = inst_38141;var state_38168__$1 = (function (){var statearr_38182 = state_38168;(statearr_38182[7] = inst_38133);
(statearr_38182[8] = inst_38132__$1);
return statearr_38182;
})();var statearr_38183_38207 = state_38168__$1;(statearr_38183_38207[2] = null);
(statearr_38183_38207[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38169 === 9))
{var inst_38132 = (state_38168[8]);var inst_38146 = cljs.core.vec(inst_38132);var state_38168__$1 = state_38168;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38168__$1,11,out,inst_38146);
} else
{if((state_val_38169 === 10))
{var inst_38152 = (state_38168[2]);var state_38168__$1 = state_38168;var statearr_38184_38208 = state_38168__$1;(statearr_38184_38208[2] = inst_38152);
(statearr_38184_38208[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38169 === 11))
{var inst_38148 = (state_38168[2]);var inst_38149 = (new Array(n));var inst_38132 = inst_38149;var inst_38133 = 0;var state_38168__$1 = (function (){var statearr_38185 = state_38168;(statearr_38185[7] = inst_38133);
(statearr_38185[8] = inst_38132);
(statearr_38185[12] = inst_38148);
return statearr_38185;
})();var statearr_38186_38209 = state_38168__$1;(statearr_38186_38209[2] = null);
(statearr_38186_38209[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38169 === 12))
{var inst_38132 = (state_38168[8]);var inst_38156 = cljs.core.vec(inst_38132);var state_38168__$1 = state_38168;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38168__$1,15,out,inst_38156);
} else
{if((state_val_38169 === 13))
{var state_38168__$1 = state_38168;var statearr_38187_38210 = state_38168__$1;(statearr_38187_38210[2] = null);
(statearr_38187_38210[1] = 14);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38169 === 14))
{var inst_38161 = (state_38168[2]);var inst_38162 = cljs.core.async.close_BANG_(out);var state_38168__$1 = (function (){var statearr_38188 = state_38168;(statearr_38188[13] = inst_38161);
return statearr_38188;
})();var statearr_38189_38211 = state_38168__$1;(statearr_38189_38211[2] = inst_38162);
(statearr_38189_38211[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38169 === 15))
{var inst_38158 = (state_38168[2]);var state_38168__$1 = state_38168;var statearr_38190_38212 = state_38168__$1;(statearr_38190_38212[2] = inst_38158);
(statearr_38190_38212[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_38194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38194[0] = state_machine__5548__auto__);
(statearr_38194[1] = 1);
return statearr_38194;
});
var state_machine__5548__auto____1 = (function (state_38168){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38168);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38195){if((e38195 instanceof Object))
{var ex__5551__auto__ = e38195;var statearr_38196_38213 = state_38168;(statearr_38196_38213[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38168);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e38195;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__38214 = state_38168;
state_38168 = G__38214;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38168){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38197 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38198);
return statearr_38197;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5562__auto___38357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_38327){var state_val_38328 = (state_38327[1]);if((state_val_38328 === 1))
{var inst_38286 = [];var inst_38287 = inst_38286;var inst_38288 = cljs.core.constant$keyword$568;var state_38327__$1 = (function (){var statearr_38329 = state_38327;(statearr_38329[7] = inst_38288);
(statearr_38329[8] = inst_38287);
return statearr_38329;
})();var statearr_38330_38358 = state_38327__$1;(statearr_38330_38358[2] = null);
(statearr_38330_38358[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38328 === 2))
{var state_38327__$1 = state_38327;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38327__$1,4,ch);
} else
{if((state_val_38328 === 3))
{var inst_38325 = (state_38327[2]);var state_38327__$1 = state_38327;return cljs.core.async.impl.ioc_helpers.return_chan(state_38327__$1,inst_38325);
} else
{if((state_val_38328 === 4))
{var inst_38291 = (state_38327[9]);var inst_38291__$1 = (state_38327[2]);var inst_38292 = (inst_38291__$1 == null);var inst_38293 = cljs.core.not(inst_38292);var state_38327__$1 = (function (){var statearr_38331 = state_38327;(statearr_38331[9] = inst_38291__$1);
return statearr_38331;
})();if(inst_38293)
{var statearr_38332_38359 = state_38327__$1;(statearr_38332_38359[1] = 5);
} else
{var statearr_38333_38360 = state_38327__$1;(statearr_38333_38360[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38328 === 5))
{var inst_38288 = (state_38327[7]);var inst_38295 = (state_38327[10]);var inst_38291 = (state_38327[9]);var inst_38295__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38291) : f.call(null,inst_38291));var inst_38296 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38295__$1,inst_38288);var inst_38297 = cljs.core.keyword_identical_QMARK_(inst_38288,cljs.core.constant$keyword$568);var inst_38298 = (inst_38296) || (inst_38297);var state_38327__$1 = (function (){var statearr_38334 = state_38327;(statearr_38334[10] = inst_38295__$1);
return statearr_38334;
})();if(cljs.core.truth_(inst_38298))
{var statearr_38335_38361 = state_38327__$1;(statearr_38335_38361[1] = 8);
} else
{var statearr_38336_38362 = state_38327__$1;(statearr_38336_38362[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38328 === 6))
{var inst_38287 = (state_38327[8]);var inst_38312 = inst_38287.length;var inst_38313 = (inst_38312 > 0);var state_38327__$1 = state_38327;if(cljs.core.truth_(inst_38313))
{var statearr_38338_38363 = state_38327__$1;(statearr_38338_38363[1] = 12);
} else
{var statearr_38339_38364 = state_38327__$1;(statearr_38339_38364[1] = 13);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_38328 === 7))
{var inst_38323 = (state_38327[2]);var state_38327__$1 = state_38327;var statearr_38340_38365 = state_38327__$1;(statearr_38340_38365[2] = inst_38323);
(statearr_38340_38365[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38328 === 8))
{var inst_38287 = (state_38327[8]);var inst_38295 = (state_38327[10]);var inst_38291 = (state_38327[9]);var inst_38300 = inst_38287.push(inst_38291);var tmp38337 = inst_38287;var inst_38287__$1 = tmp38337;var inst_38288 = inst_38295;var state_38327__$1 = (function (){var statearr_38341 = state_38327;(statearr_38341[7] = inst_38288);
(statearr_38341[8] = inst_38287__$1);
(statearr_38341[11] = inst_38300);
return statearr_38341;
})();var statearr_38342_38366 = state_38327__$1;(statearr_38342_38366[2] = null);
(statearr_38342_38366[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38328 === 9))
{var inst_38287 = (state_38327[8]);var inst_38303 = cljs.core.vec(inst_38287);var state_38327__$1 = state_38327;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38327__$1,11,out,inst_38303);
} else
{if((state_val_38328 === 10))
{var inst_38310 = (state_38327[2]);var state_38327__$1 = state_38327;var statearr_38343_38367 = state_38327__$1;(statearr_38343_38367[2] = inst_38310);
(statearr_38343_38367[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38328 === 11))
{var inst_38295 = (state_38327[10]);var inst_38291 = (state_38327[9]);var inst_38305 = (state_38327[2]);var inst_38306 = [];var inst_38307 = inst_38306.push(inst_38291);var inst_38287 = inst_38306;var inst_38288 = inst_38295;var state_38327__$1 = (function (){var statearr_38344 = state_38327;(statearr_38344[7] = inst_38288);
(statearr_38344[8] = inst_38287);
(statearr_38344[12] = inst_38307);
(statearr_38344[13] = inst_38305);
return statearr_38344;
})();var statearr_38345_38368 = state_38327__$1;(statearr_38345_38368[2] = null);
(statearr_38345_38368[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38328 === 12))
{var inst_38287 = (state_38327[8]);var inst_38315 = cljs.core.vec(inst_38287);var state_38327__$1 = state_38327;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38327__$1,15,out,inst_38315);
} else
{if((state_val_38328 === 13))
{var state_38327__$1 = state_38327;var statearr_38346_38369 = state_38327__$1;(statearr_38346_38369[2] = null);
(statearr_38346_38369[1] = 14);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38328 === 14))
{var inst_38320 = (state_38327[2]);var inst_38321 = cljs.core.async.close_BANG_(out);var state_38327__$1 = (function (){var statearr_38347 = state_38327;(statearr_38347[14] = inst_38320);
return statearr_38347;
})();var statearr_38348_38370 = state_38327__$1;(statearr_38348_38370[2] = inst_38321);
(statearr_38348_38370[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_38328 === 15))
{var inst_38317 = (state_38327[2]);var state_38327__$1 = state_38327;var statearr_38349_38371 = state_38327__$1;(statearr_38349_38371[2] = inst_38317);
(statearr_38349_38371[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_38353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38353[0] = state_machine__5548__auto__);
(statearr_38353[1] = 1);
return statearr_38353;
});
var state_machine__5548__auto____1 = (function (state_38327){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_38327);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e38354){if((e38354 instanceof Object))
{var ex__5551__auto__ = e38354;var statearr_38355_38372 = state_38327;(statearr_38355_38372[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38327);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e38354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__38373 = state_38327;
state_38327 = G__38373;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_38327){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_38327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_38356 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_38356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___38357);
return statearr_38356;
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
