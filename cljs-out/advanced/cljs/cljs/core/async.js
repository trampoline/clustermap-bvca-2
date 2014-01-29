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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22915 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22915 = (function (f,fn_handler,meta22916){
this.f = f;
this.fn_handler = fn_handler;
this.meta22916 = meta22916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22915.cljs$lang$type = true;
cljs.core.async.t22915.cljs$lang$ctorStr = "cljs.core.async/t22915";
cljs.core.async.t22915.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22915");
});
cljs.core.async.t22915.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22917){var self__ = this;
var _22917__$1 = this;return self__.meta22916;
});
cljs.core.async.t22915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22917,meta22916__$1){var self__ = this;
var _22917__$1 = this;return (new cljs.core.async.t22915(self__.f,self__.fn_handler,meta22916__$1));
});
cljs.core.async.__GT_t22915 = (function __GT_t22915(f__$1,fn_handler__$1,meta22916){return (new cljs.core.async.t22915(f__$1,fn_handler__$1,meta22916));
});
}
return (new cljs.core.async.t22915(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22919 = buff;if(G__22919)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__22919.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22919.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22919);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22919);
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
{var val_22920 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22920) : fn1.call(null,val_22920));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22920) : fn1.call(null,val_22920));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___22921 = n;var x_22922 = 0;while(true){
if((x_22922 < n__4248__auto___22921))
{(a[x_22922] = 0);
{
var G__22923 = (x_22922 + 1);
x_22922 = G__22923;
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
var G__22924 = (i + 1);
i = G__22924;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t22928 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22928 = (function (flag,alt_flag,meta22929){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22929 = meta22929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22928.cljs$lang$type = true;
cljs.core.async.t22928.cljs$lang$ctorStr = "cljs.core.async/t22928";
cljs.core.async.t22928.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22928");
});
cljs.core.async.t22928.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t22928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t22928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22930){var self__ = this;
var _22930__$1 = this;return self__.meta22929;
});
cljs.core.async.t22928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22930,meta22929__$1){var self__ = this;
var _22930__$1 = this;return (new cljs.core.async.t22928(self__.flag,self__.alt_flag,meta22929__$1));
});
cljs.core.async.__GT_t22928 = (function __GT_t22928(flag__$1,alt_flag__$1,meta22929){return (new cljs.core.async.t22928(flag__$1,alt_flag__$1,meta22929));
});
}
return (new cljs.core.async.t22928(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22934 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22934 = (function (cb,flag,alt_handler,meta22935){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22935 = meta22935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22934.cljs$lang$type = true;
cljs.core.async.t22934.cljs$lang$ctorStr = "cljs.core.async/t22934";
cljs.core.async.t22934.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22934");
});
cljs.core.async.t22934.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t22934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t22934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22936){var self__ = this;
var _22936__$1 = this;return self__.meta22935;
});
cljs.core.async.t22934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22936,meta22935__$1){var self__ = this;
var _22936__$1 = this;return (new cljs.core.async.t22934(self__.cb,self__.flag,self__.alt_handler,meta22935__$1));
});
cljs.core.async.__GT_t22934 = (function __GT_t22934(cb__$1,flag__$1,alt_handler__$1,meta22935){return (new cljs.core.async.t22934(cb__$1,flag__$1,alt_handler__$1,meta22935));
});
}
return (new cljs.core.async.t22934(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22937_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22937_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22937_SHARP_,port], null)));
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
var G__22938 = (i + 1);
i = G__22938;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$184))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$184.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$184], null));
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
var alts_BANG___delegate = function (ports,p__22939){var map__22941 = p__22939;var map__22941__$1 = ((cljs.core.seq_QMARK_(map__22941))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22941):map__22941);var opts = map__22941__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22939 = null;if (arguments.length > 1) {
  p__22939 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22939);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22942){
var ports = cljs.core.first(arglist__22942);
var p__22939 = cljs.core.rest(arglist__22942);
return alts_BANG___delegate(ports,p__22939);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22950 = (function (ch,f,map_LT_,meta22951){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22951 = meta22951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22950.cljs$lang$type = true;
cljs.core.async.t22950.cljs$lang$ctorStr = "cljs.core.async/t22950";
cljs.core.async.t22950.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22950");
});
cljs.core.async.t22950.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22950.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t22950.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22950.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t22953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22953 = (function (fn1,_,meta22951,ch,f,map_LT_,meta22954){
this.fn1 = fn1;
this._ = _;
this.meta22951 = meta22951;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22954 = meta22954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22953.cljs$lang$type = true;
cljs.core.async.t22953.cljs$lang$ctorStr = "cljs.core.async/t22953";
cljs.core.async.t22953.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22953");
});
cljs.core.async.t22953.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t22953.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t22953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__22943_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__22943_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22943_SHARP_) : self__.f.call(null,p1__22943_SHARP_)))) : f1.call(null,(((p1__22943_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22943_SHARP_) : self__.f.call(null,p1__22943_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t22953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22955){var self__ = this;
var _22955__$1 = this;return self__.meta22954;
});
cljs.core.async.t22953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22955,meta22954__$1){var self__ = this;
var _22955__$1 = this;return (new cljs.core.async.t22953(self__.fn1,self__._,self__.meta22951,self__.ch,self__.f,self__.map_LT_,meta22954__$1));
});
cljs.core.async.__GT_t22953 = (function __GT_t22953(fn1__$1,___$2,meta22951__$1,ch__$2,f__$2,map_LT___$2,meta22954){return (new cljs.core.async.t22953(fn1__$1,___$2,meta22951__$1,ch__$2,f__$2,map_LT___$2,meta22954));
});
}
return (new cljs.core.async.t22953(fn1,___$1,self__.meta22951,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t22950.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22950.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22952){var self__ = this;
var _22952__$1 = this;return self__.meta22951;
});
cljs.core.async.t22950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22952,meta22951__$1){var self__ = this;
var _22952__$1 = this;return (new cljs.core.async.t22950(self__.ch,self__.f,self__.map_LT_,meta22951__$1));
});
cljs.core.async.__GT_t22950 = (function __GT_t22950(ch__$1,f__$1,map_LT___$1,meta22951){return (new cljs.core.async.t22950(ch__$1,f__$1,map_LT___$1,meta22951));
});
}
return (new cljs.core.async.t22950(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22959 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22959 = (function (ch,f,map_GT_,meta22960){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22960 = meta22960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22959.cljs$lang$type = true;
cljs.core.async.t22959.cljs$lang$ctorStr = "cljs.core.async/t22959";
cljs.core.async.t22959.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22959");
});
cljs.core.async.t22959.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t22959.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22959.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22961){var self__ = this;
var _22961__$1 = this;return self__.meta22960;
});
cljs.core.async.t22959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22961,meta22960__$1){var self__ = this;
var _22961__$1 = this;return (new cljs.core.async.t22959(self__.ch,self__.f,self__.map_GT_,meta22960__$1));
});
cljs.core.async.__GT_t22959 = (function __GT_t22959(ch__$1,f__$1,map_GT___$1,meta22960){return (new cljs.core.async.t22959(ch__$1,f__$1,map_GT___$1,meta22960));
});
}
return (new cljs.core.async.t22959(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22965 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22965 = (function (ch,p,filter_GT_,meta22966){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22966 = meta22966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22965.cljs$lang$type = true;
cljs.core.async.t22965.cljs$lang$ctorStr = "cljs.core.async/t22965";
cljs.core.async.t22965.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22965");
});
cljs.core.async.t22965.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t22965.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22965.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22967){var self__ = this;
var _22967__$1 = this;return self__.meta22966;
});
cljs.core.async.t22965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22967,meta22966__$1){var self__ = this;
var _22967__$1 = this;return (new cljs.core.async.t22965(self__.ch,self__.p,self__.filter_GT_,meta22966__$1));
});
cljs.core.async.__GT_t22965 = (function __GT_t22965(ch__$1,p__$1,filter_GT___$1,meta22966){return (new cljs.core.async.t22965(ch__$1,p__$1,filter_GT___$1,meta22966));
});
}
return (new cljs.core.async.t22965(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23029){var state_val_23030 = (state_23029[1]);if((state_val_23030 === 1))
{var state_23029__$1 = state_23029;var statearr_23031_23051 = state_23029__$1;(statearr_23031_23051[2] = null);
(statearr_23031_23051[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23030 === 2))
{var state_23029__$1 = state_23029;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23029__$1,4,ch);
} else
{if((state_val_23030 === 3))
{var inst_23027 = (state_23029[2]);var state_23029__$1 = state_23029;return cljs.core.async.impl.ioc_helpers.return_chan(state_23029__$1,inst_23027);
} else
{if((state_val_23030 === 4))
{var inst_23011 = (state_23029[7]);var inst_23011__$1 = (state_23029[2]);var inst_23012 = (inst_23011__$1 == null);var state_23029__$1 = (function (){var statearr_23032 = state_23029;(statearr_23032[7] = inst_23011__$1);
return statearr_23032;
})();if(cljs.core.truth_(inst_23012))
{var statearr_23033_23052 = state_23029__$1;(statearr_23033_23052[1] = 5);
} else
{var statearr_23034_23053 = state_23029__$1;(statearr_23034_23053[1] = 6);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23030 === 5))
{var inst_23014 = cljs.core.async.close_BANG_(out);var state_23029__$1 = state_23029;var statearr_23035_23054 = state_23029__$1;(statearr_23035_23054[2] = inst_23014);
(statearr_23035_23054[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23030 === 6))
{var inst_23011 = (state_23029[7]);var inst_23016 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23011) : p.call(null,inst_23011));var state_23029__$1 = state_23029;if(cljs.core.truth_(inst_23016))
{var statearr_23036_23055 = state_23029__$1;(statearr_23036_23055[1] = 8);
} else
{var statearr_23037_23056 = state_23029__$1;(statearr_23037_23056[1] = 9);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23030 === 7))
{var inst_23025 = (state_23029[2]);var state_23029__$1 = state_23029;var statearr_23038_23057 = state_23029__$1;(statearr_23038_23057[2] = inst_23025);
(statearr_23038_23057[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23030 === 8))
{var inst_23011 = (state_23029[7]);var state_23029__$1 = state_23029;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23029__$1,11,out,inst_23011);
} else
{if((state_val_23030 === 9))
{var state_23029__$1 = state_23029;var statearr_23039_23058 = state_23029__$1;(statearr_23039_23058[2] = null);
(statearr_23039_23058[1] = 10);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23030 === 10))
{var inst_23022 = (state_23029[2]);var state_23029__$1 = (function (){var statearr_23040 = state_23029;(statearr_23040[8] = inst_23022);
return statearr_23040;
})();var statearr_23041_23059 = state_23029__$1;(statearr_23041_23059[2] = null);
(statearr_23041_23059[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23030 === 11))
{var inst_23019 = (state_23029[2]);var state_23029__$1 = state_23029;var statearr_23042_23060 = state_23029__$1;(statearr_23042_23060[2] = inst_23019);
(statearr_23042_23060[1] = 10);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_23046 = [null,null,null,null,null,null,null,null,null];(statearr_23046[0] = state_machine__5507__auto__);
(statearr_23046[1] = 1);
return statearr_23046;
});
var state_machine__5507__auto____1 = (function (state_23029){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23029);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23047){if((e23047 instanceof Object))
{var ex__5510__auto__ = e23047;var statearr_23048_23061 = state_23029;(statearr_23048_23061[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23029);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e23047;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__23062 = state_23029;
state_23029 = G__23062;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23029){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23049 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23050);
return statearr_23049;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23214){var state_val_23215 = (state_23214[1]);if((state_val_23215 === 1))
{var state_23214__$1 = state_23214;var statearr_23216_23253 = state_23214__$1;(statearr_23216_23253[2] = null);
(statearr_23216_23253[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 2))
{var state_23214__$1 = state_23214;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23214__$1,4,in$);
} else
{if((state_val_23215 === 3))
{var inst_23212 = (state_23214[2]);var state_23214__$1 = state_23214;return cljs.core.async.impl.ioc_helpers.return_chan(state_23214__$1,inst_23212);
} else
{if((state_val_23215 === 4))
{var inst_23160 = (state_23214[7]);var inst_23160__$1 = (state_23214[2]);var inst_23161 = (inst_23160__$1 == null);var state_23214__$1 = (function (){var statearr_23217 = state_23214;(statearr_23217[7] = inst_23160__$1);
return statearr_23217;
})();if(cljs.core.truth_(inst_23161))
{var statearr_23218_23254 = state_23214__$1;(statearr_23218_23254[1] = 5);
} else
{var statearr_23219_23255 = state_23214__$1;(statearr_23219_23255[1] = 6);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 5))
{var inst_23163 = cljs.core.async.close_BANG_(out);var state_23214__$1 = state_23214;var statearr_23220_23256 = state_23214__$1;(statearr_23220_23256[2] = inst_23163);
(statearr_23220_23256[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 6))
{var inst_23160 = (state_23214[7]);var inst_23165 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23160) : f.call(null,inst_23160));var inst_23170 = cljs.core.seq(inst_23165);var inst_23171 = inst_23170;var inst_23172 = null;var inst_23173 = 0;var inst_23174 = 0;var state_23214__$1 = (function (){var statearr_23221 = state_23214;(statearr_23221[8] = inst_23174);
(statearr_23221[9] = inst_23171);
(statearr_23221[10] = inst_23173);
(statearr_23221[11] = inst_23172);
return statearr_23221;
})();var statearr_23222_23257 = state_23214__$1;(statearr_23222_23257[2] = null);
(statearr_23222_23257[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 7))
{var inst_23210 = (state_23214[2]);var state_23214__$1 = state_23214;var statearr_23223_23258 = state_23214__$1;(statearr_23223_23258[2] = inst_23210);
(statearr_23223_23258[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 8))
{var inst_23174 = (state_23214[8]);var inst_23173 = (state_23214[10]);var inst_23176 = (inst_23174 < inst_23173);var inst_23177 = inst_23176;var state_23214__$1 = state_23214;if(cljs.core.truth_(inst_23177))
{var statearr_23224_23259 = state_23214__$1;(statearr_23224_23259[1] = 10);
} else
{var statearr_23225_23260 = state_23214__$1;(statearr_23225_23260[1] = 11);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 9))
{var inst_23207 = (state_23214[2]);var state_23214__$1 = (function (){var statearr_23226 = state_23214;(statearr_23226[12] = inst_23207);
return statearr_23226;
})();var statearr_23227_23261 = state_23214__$1;(statearr_23227_23261[2] = null);
(statearr_23227_23261[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 10))
{var inst_23174 = (state_23214[8]);var inst_23172 = (state_23214[11]);var inst_23179 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23172,inst_23174);var state_23214__$1 = state_23214;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23214__$1,13,out,inst_23179);
} else
{if((state_val_23215 === 11))
{var inst_23171 = (state_23214[9]);var inst_23185 = (state_23214[13]);var inst_23185__$1 = cljs.core.seq(inst_23171);var state_23214__$1 = (function (){var statearr_23231 = state_23214;(statearr_23231[13] = inst_23185__$1);
return statearr_23231;
})();if(inst_23185__$1)
{var statearr_23232_23262 = state_23214__$1;(statearr_23232_23262[1] = 14);
} else
{var statearr_23233_23263 = state_23214__$1;(statearr_23233_23263[1] = 15);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 12))
{var inst_23205 = (state_23214[2]);var state_23214__$1 = state_23214;var statearr_23234_23264 = state_23214__$1;(statearr_23234_23264[2] = inst_23205);
(statearr_23234_23264[1] = 9);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 13))
{var inst_23174 = (state_23214[8]);var inst_23171 = (state_23214[9]);var inst_23173 = (state_23214[10]);var inst_23172 = (state_23214[11]);var inst_23181 = (state_23214[2]);var inst_23182 = (inst_23174 + 1);var tmp23228 = inst_23171;var tmp23229 = inst_23173;var tmp23230 = inst_23172;var inst_23171__$1 = tmp23228;var inst_23172__$1 = tmp23230;var inst_23173__$1 = tmp23229;var inst_23174__$1 = inst_23182;var state_23214__$1 = (function (){var statearr_23235 = state_23214;(statearr_23235[8] = inst_23174__$1);
(statearr_23235[9] = inst_23171__$1);
(statearr_23235[10] = inst_23173__$1);
(statearr_23235[11] = inst_23172__$1);
(statearr_23235[14] = inst_23181);
return statearr_23235;
})();var statearr_23236_23265 = state_23214__$1;(statearr_23236_23265[2] = null);
(statearr_23236_23265[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 14))
{var inst_23185 = (state_23214[13]);var inst_23187 = cljs.core.chunked_seq_QMARK_(inst_23185);var state_23214__$1 = state_23214;if(inst_23187)
{var statearr_23237_23266 = state_23214__$1;(statearr_23237_23266[1] = 17);
} else
{var statearr_23238_23267 = state_23214__$1;(statearr_23238_23267[1] = 18);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 15))
{var state_23214__$1 = state_23214;var statearr_23239_23268 = state_23214__$1;(statearr_23239_23268[2] = null);
(statearr_23239_23268[1] = 16);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 16))
{var inst_23203 = (state_23214[2]);var state_23214__$1 = state_23214;var statearr_23240_23269 = state_23214__$1;(statearr_23240_23269[2] = inst_23203);
(statearr_23240_23269[1] = 12);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 17))
{var inst_23185 = (state_23214[13]);var inst_23189 = cljs.core.chunk_first(inst_23185);var inst_23190 = cljs.core.chunk_rest(inst_23185);var inst_23191 = cljs.core.count(inst_23189);var inst_23171 = inst_23190;var inst_23172 = inst_23189;var inst_23173 = inst_23191;var inst_23174 = 0;var state_23214__$1 = (function (){var statearr_23241 = state_23214;(statearr_23241[8] = inst_23174);
(statearr_23241[9] = inst_23171);
(statearr_23241[10] = inst_23173);
(statearr_23241[11] = inst_23172);
return statearr_23241;
})();var statearr_23242_23270 = state_23214__$1;(statearr_23242_23270[2] = null);
(statearr_23242_23270[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 18))
{var inst_23185 = (state_23214[13]);var inst_23194 = cljs.core.first(inst_23185);var state_23214__$1 = state_23214;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23214__$1,20,out,inst_23194);
} else
{if((state_val_23215 === 19))
{var inst_23200 = (state_23214[2]);var state_23214__$1 = state_23214;var statearr_23243_23271 = state_23214__$1;(statearr_23243_23271[2] = inst_23200);
(statearr_23243_23271[1] = 16);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23215 === 20))
{var inst_23185 = (state_23214[13]);var inst_23196 = (state_23214[2]);var inst_23197 = cljs.core.next(inst_23185);var inst_23171 = inst_23197;var inst_23172 = null;var inst_23173 = 0;var inst_23174 = 0;var state_23214__$1 = (function (){var statearr_23244 = state_23214;(statearr_23244[15] = inst_23196);
(statearr_23244[8] = inst_23174);
(statearr_23244[9] = inst_23171);
(statearr_23244[10] = inst_23173);
(statearr_23244[11] = inst_23172);
return statearr_23244;
})();var statearr_23245_23272 = state_23214__$1;(statearr_23245_23272[2] = null);
(statearr_23245_23272[1] = 8);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_23249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23249[0] = state_machine__5507__auto__);
(statearr_23249[1] = 1);
return statearr_23249;
});
var state_machine__5507__auto____1 = (function (state_23214){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23214);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23250){if((e23250 instanceof Object))
{var ex__5510__auto__ = e23250;var statearr_23251_23273 = state_23214;(statearr_23251_23273[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23214);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e23250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__23274 = state_23214;
state_23214 = G__23274;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23214){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23252 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23252;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23334){var state_val_23335 = (state_23334[1]);if((state_val_23335 === 1))
{var state_23334__$1 = state_23334;var statearr_23336_23356 = state_23334__$1;(statearr_23336_23356[2] = null);
(statearr_23336_23356[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23335 === 2))
{var state_23334__$1 = state_23334;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23334__$1,4,from);
} else
{if((state_val_23335 === 3))
{var inst_23332 = (state_23334[2]);var state_23334__$1 = state_23334;return cljs.core.async.impl.ioc_helpers.return_chan(state_23334__$1,inst_23332);
} else
{if((state_val_23335 === 4))
{var inst_23317 = (state_23334[7]);var inst_23317__$1 = (state_23334[2]);var inst_23318 = (inst_23317__$1 == null);var state_23334__$1 = (function (){var statearr_23337 = state_23334;(statearr_23337[7] = inst_23317__$1);
return statearr_23337;
})();if(cljs.core.truth_(inst_23318))
{var statearr_23338_23357 = state_23334__$1;(statearr_23338_23357[1] = 5);
} else
{var statearr_23339_23358 = state_23334__$1;(statearr_23339_23358[1] = 6);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23335 === 5))
{var state_23334__$1 = state_23334;if(cljs.core.truth_(close_QMARK_))
{var statearr_23340_23359 = state_23334__$1;(statearr_23340_23359[1] = 8);
} else
{var statearr_23341_23360 = state_23334__$1;(statearr_23341_23360[1] = 9);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23335 === 6))
{var inst_23317 = (state_23334[7]);var state_23334__$1 = state_23334;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23334__$1,11,to,inst_23317);
} else
{if((state_val_23335 === 7))
{var inst_23330 = (state_23334[2]);var state_23334__$1 = state_23334;var statearr_23342_23361 = state_23334__$1;(statearr_23342_23361[2] = inst_23330);
(statearr_23342_23361[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23335 === 8))
{var inst_23321 = cljs.core.async.close_BANG_(to);var state_23334__$1 = state_23334;var statearr_23343_23362 = state_23334__$1;(statearr_23343_23362[2] = inst_23321);
(statearr_23343_23362[1] = 10);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23335 === 9))
{var state_23334__$1 = state_23334;var statearr_23344_23363 = state_23334__$1;(statearr_23344_23363[2] = null);
(statearr_23344_23363[1] = 10);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23335 === 10))
{var inst_23324 = (state_23334[2]);var state_23334__$1 = state_23334;var statearr_23345_23364 = state_23334__$1;(statearr_23345_23364[2] = inst_23324);
(statearr_23345_23364[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23335 === 11))
{var inst_23327 = (state_23334[2]);var state_23334__$1 = (function (){var statearr_23346 = state_23334;(statearr_23346[8] = inst_23327);
return statearr_23346;
})();var statearr_23347_23365 = state_23334__$1;(statearr_23347_23365[2] = null);
(statearr_23347_23365[1] = 2);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_23351 = [null,null,null,null,null,null,null,null,null];(statearr_23351[0] = state_machine__5507__auto__);
(statearr_23351[1] = 1);
return statearr_23351;
});
var state_machine__5507__auto____1 = (function (state_23334){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23334);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23352){if((e23352 instanceof Object))
{var ex__5510__auto__ = e23352;var statearr_23353_23366 = state_23334;(statearr_23353_23366[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23334);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e23352;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__23367 = state_23334;
state_23334 = G__23367;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23334){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23354 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23355);
return statearr_23354;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23432){var state_val_23433 = (state_23432[1]);if((state_val_23433 === 1))
{var state_23432__$1 = state_23432;var statearr_23434_23455 = state_23432__$1;(statearr_23434_23455[2] = null);
(statearr_23434_23455[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23433 === 2))
{var state_23432__$1 = state_23432;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23432__$1,4,ch);
} else
{if((state_val_23433 === 3))
{var inst_23430 = (state_23432[2]);var state_23432__$1 = state_23432;return cljs.core.async.impl.ioc_helpers.return_chan(state_23432__$1,inst_23430);
} else
{if((state_val_23433 === 4))
{var inst_23413 = (state_23432[7]);var inst_23413__$1 = (state_23432[2]);var inst_23414 = (inst_23413__$1 == null);var state_23432__$1 = (function (){var statearr_23435 = state_23432;(statearr_23435[7] = inst_23413__$1);
return statearr_23435;
})();if(cljs.core.truth_(inst_23414))
{var statearr_23436_23456 = state_23432__$1;(statearr_23436_23456[1] = 5);
} else
{var statearr_23437_23457 = state_23432__$1;(statearr_23437_23457[1] = 6);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23433 === 5))
{var inst_23416 = cljs.core.async.close_BANG_(tc);var inst_23417 = cljs.core.async.close_BANG_(fc);var state_23432__$1 = (function (){var statearr_23438 = state_23432;(statearr_23438[8] = inst_23416);
return statearr_23438;
})();var statearr_23439_23458 = state_23432__$1;(statearr_23439_23458[2] = inst_23417);
(statearr_23439_23458[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23433 === 6))
{var inst_23413 = (state_23432[7]);var inst_23419 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23413) : p.call(null,inst_23413));var state_23432__$1 = state_23432;if(cljs.core.truth_(inst_23419))
{var statearr_23440_23459 = state_23432__$1;(statearr_23440_23459[1] = 9);
} else
{var statearr_23441_23460 = state_23432__$1;(statearr_23441_23460[1] = 10);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23433 === 7))
{var inst_23428 = (state_23432[2]);var state_23432__$1 = state_23432;var statearr_23442_23461 = state_23432__$1;(statearr_23442_23461[2] = inst_23428);
(statearr_23442_23461[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23433 === 8))
{var inst_23425 = (state_23432[2]);var state_23432__$1 = (function (){var statearr_23443 = state_23432;(statearr_23443[9] = inst_23425);
return statearr_23443;
})();var statearr_23444_23462 = state_23432__$1;(statearr_23444_23462[2] = null);
(statearr_23444_23462[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23433 === 9))
{var state_23432__$1 = state_23432;var statearr_23445_23463 = state_23432__$1;(statearr_23445_23463[2] = tc);
(statearr_23445_23463[1] = 11);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23433 === 10))
{var state_23432__$1 = state_23432;var statearr_23446_23464 = state_23432__$1;(statearr_23446_23464[2] = fc);
(statearr_23446_23464[1] = 11);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23433 === 11))
{var inst_23413 = (state_23432[7]);var inst_23423 = (state_23432[2]);var state_23432__$1 = state_23432;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23432__$1,8,inst_23423,inst_23413);
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
var state_machine__5507__auto____0 = (function (){var statearr_23450 = [null,null,null,null,null,null,null,null,null,null];(statearr_23450[0] = state_machine__5507__auto__);
(statearr_23450[1] = 1);
return statearr_23450;
});
var state_machine__5507__auto____1 = (function (state_23432){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23432);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23451){if((e23451 instanceof Object))
{var ex__5510__auto__ = e23451;var statearr_23452_23465 = state_23432;(statearr_23452_23465[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23432);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e23451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__23466 = state_23432;
state_23432 = G__23466;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23432){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23453 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23454);
return statearr_23453;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23513){var state_val_23514 = (state_23513[1]);if((state_val_23514 === 7))
{var inst_23509 = (state_23513[2]);var state_23513__$1 = state_23513;var statearr_23515_23531 = state_23513__$1;(statearr_23515_23531[2] = inst_23509);
(statearr_23515_23531[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23514 === 6))
{var inst_23502 = (state_23513[7]);var inst_23499 = (state_23513[8]);var inst_23506 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23499,inst_23502) : f.call(null,inst_23499,inst_23502));var inst_23499__$1 = inst_23506;var state_23513__$1 = (function (){var statearr_23516 = state_23513;(statearr_23516[8] = inst_23499__$1);
return statearr_23516;
})();var statearr_23517_23532 = state_23513__$1;(statearr_23517_23532[2] = null);
(statearr_23517_23532[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23514 === 5))
{var inst_23499 = (state_23513[8]);var state_23513__$1 = state_23513;var statearr_23518_23533 = state_23513__$1;(statearr_23518_23533[2] = inst_23499);
(statearr_23518_23533[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23514 === 4))
{var inst_23502 = (state_23513[7]);var inst_23502__$1 = (state_23513[2]);var inst_23503 = (inst_23502__$1 == null);var state_23513__$1 = (function (){var statearr_23519 = state_23513;(statearr_23519[7] = inst_23502__$1);
return statearr_23519;
})();if(cljs.core.truth_(inst_23503))
{var statearr_23520_23534 = state_23513__$1;(statearr_23520_23534[1] = 5);
} else
{var statearr_23521_23535 = state_23513__$1;(statearr_23521_23535[1] = 6);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23514 === 3))
{var inst_23511 = (state_23513[2]);var state_23513__$1 = state_23513;return cljs.core.async.impl.ioc_helpers.return_chan(state_23513__$1,inst_23511);
} else
{if((state_val_23514 === 2))
{var state_23513__$1 = state_23513;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23513__$1,4,ch);
} else
{if((state_val_23514 === 1))
{var inst_23499 = init;var state_23513__$1 = (function (){var statearr_23522 = state_23513;(statearr_23522[8] = inst_23499);
return statearr_23522;
})();var statearr_23523_23536 = state_23513__$1;(statearr_23523_23536[2] = null);
(statearr_23523_23536[1] = 2);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_23527 = [null,null,null,null,null,null,null,null,null];(statearr_23527[0] = state_machine__5507__auto__);
(statearr_23527[1] = 1);
return statearr_23527;
});
var state_machine__5507__auto____1 = (function (state_23513){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23513);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23528){if((e23528 instanceof Object))
{var ex__5510__auto__ = e23528;var statearr_23529_23537 = state_23513;(statearr_23529_23537[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23513);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e23528;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__23538 = state_23513;
state_23513 = G__23538;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23513){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23530 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23530;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23600){var state_val_23601 = (state_23600[1]);if((state_val_23601 === 1))
{var inst_23580 = cljs.core.seq(coll);var inst_23581 = inst_23580;var state_23600__$1 = (function (){var statearr_23602 = state_23600;(statearr_23602[7] = inst_23581);
return statearr_23602;
})();var statearr_23603_23621 = state_23600__$1;(statearr_23603_23621[2] = null);
(statearr_23603_23621[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23601 === 2))
{var inst_23581 = (state_23600[7]);var state_23600__$1 = state_23600;if(cljs.core.truth_(inst_23581))
{var statearr_23604_23622 = state_23600__$1;(statearr_23604_23622[1] = 4);
} else
{var statearr_23605_23623 = state_23600__$1;(statearr_23605_23623[1] = 5);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23601 === 3))
{var inst_23598 = (state_23600[2]);var state_23600__$1 = state_23600;return cljs.core.async.impl.ioc_helpers.return_chan(state_23600__$1,inst_23598);
} else
{if((state_val_23601 === 4))
{var inst_23581 = (state_23600[7]);var inst_23584 = cljs.core.first(inst_23581);var state_23600__$1 = state_23600;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23600__$1,7,ch,inst_23584);
} else
{if((state_val_23601 === 5))
{var state_23600__$1 = state_23600;if(cljs.core.truth_(close_QMARK_))
{var statearr_23606_23624 = state_23600__$1;(statearr_23606_23624[1] = 8);
} else
{var statearr_23607_23625 = state_23600__$1;(statearr_23607_23625[1] = 9);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23601 === 6))
{var inst_23596 = (state_23600[2]);var state_23600__$1 = state_23600;var statearr_23608_23626 = state_23600__$1;(statearr_23608_23626[2] = inst_23596);
(statearr_23608_23626[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23601 === 7))
{var inst_23581 = (state_23600[7]);var inst_23586 = (state_23600[2]);var inst_23587 = cljs.core.next(inst_23581);var inst_23581__$1 = inst_23587;var state_23600__$1 = (function (){var statearr_23609 = state_23600;(statearr_23609[8] = inst_23586);
(statearr_23609[7] = inst_23581__$1);
return statearr_23609;
})();var statearr_23610_23627 = state_23600__$1;(statearr_23610_23627[2] = null);
(statearr_23610_23627[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23601 === 8))
{var inst_23591 = cljs.core.async.close_BANG_(ch);var state_23600__$1 = state_23600;var statearr_23611_23628 = state_23600__$1;(statearr_23611_23628[2] = inst_23591);
(statearr_23611_23628[1] = 10);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23601 === 9))
{var state_23600__$1 = state_23600;var statearr_23612_23629 = state_23600__$1;(statearr_23612_23629[2] = null);
(statearr_23612_23629[1] = 10);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23601 === 10))
{var inst_23594 = (state_23600[2]);var state_23600__$1 = state_23600;var statearr_23613_23630 = state_23600__$1;(statearr_23613_23630[2] = inst_23594);
(statearr_23613_23630[1] = 6);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_23617 = [null,null,null,null,null,null,null,null,null];(statearr_23617[0] = state_machine__5507__auto__);
(statearr_23617[1] = 1);
return statearr_23617;
});
var state_machine__5507__auto____1 = (function (state_23600){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23600);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23618){if((e23618 instanceof Object))
{var ex__5510__auto__ = e23618;var statearr_23619_23631 = state_23600;(statearr_23619_23631[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23600);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e23618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__23632 = state_23600;
state_23600 = G__23632;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23600){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23620 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23620;
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
cljs.core.async.Mux = (function (){var obj23634 = {};return obj23634;
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
cljs.core.async.Mult = (function (){var obj23636 = {};return obj23636;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23860 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23860 = (function (cs,ch,mult,meta23861){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23861 = meta23861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23860.cljs$lang$type = true;
cljs.core.async.t23860.cljs$lang$ctorStr = "cljs.core.async/t23860";
cljs.core.async.t23860.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23860");
});})(cs))
;
cljs.core.async.t23860.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23860.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23860.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23860.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23860.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23862){var self__ = this;
var _23862__$1 = this;return self__.meta23861;
});})(cs))
;
cljs.core.async.t23860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23862,meta23861__$1){var self__ = this;
var _23862__$1 = this;return (new cljs.core.async.t23860(self__.cs,self__.ch,self__.mult,meta23861__$1));
});})(cs))
;
cljs.core.async.__GT_t23860 = ((function (cs){
return (function __GT_t23860(cs__$1,ch__$1,mult__$1,meta23861){return (new cljs.core.async.t23860(cs__$1,ch__$1,mult__$1,meta23861));
});})(cs))
;
}
return (new cljs.core.async.t23860(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23997){var state_val_23998 = (state_23997[1]);if((state_val_23998 === 32))
{var inst_23941 = (state_23997[7]);var inst_23865 = (state_23997[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23997,31,Object,null,30);var inst_23948 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23941,inst_23865,done);var state_23997__$1 = state_23997;var statearr_23999_24084 = state_23997__$1;(statearr_23999_24084[2] = inst_23948);
cljs.core.async.impl.ioc_helpers.process_exception(state_23997__$1);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 1))
{var state_23997__$1 = state_23997;var statearr_24000_24085 = state_23997__$1;(statearr_24000_24085[2] = null);
(statearr_24000_24085[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 33))
{var inst_23954 = (state_23997[9]);var inst_23956 = cljs.core.chunked_seq_QMARK_(inst_23954);var state_23997__$1 = state_23997;if(inst_23956)
{var statearr_24001_24086 = state_23997__$1;(statearr_24001_24086[1] = 36);
} else
{var statearr_24002_24087 = state_23997__$1;(statearr_24002_24087[1] = 37);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 2))
{var state_23997__$1 = state_23997;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23997__$1,4,ch);
} else
{if((state_val_23998 === 34))
{var state_23997__$1 = state_23997;var statearr_24003_24088 = state_23997__$1;(statearr_24003_24088[2] = null);
(statearr_24003_24088[1] = 35);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 3))
{var inst_23995 = (state_23997[2]);var state_23997__$1 = state_23997;return cljs.core.async.impl.ioc_helpers.return_chan(state_23997__$1,inst_23995);
} else
{if((state_val_23998 === 35))
{var inst_23979 = (state_23997[2]);var state_23997__$1 = state_23997;var statearr_24004_24089 = state_23997__$1;(statearr_24004_24089[2] = inst_23979);
(statearr_24004_24089[1] = 29);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 4))
{var inst_23865 = (state_23997[8]);var inst_23865__$1 = (state_23997[2]);var inst_23866 = (inst_23865__$1 == null);var state_23997__$1 = (function (){var statearr_24005 = state_23997;(statearr_24005[8] = inst_23865__$1);
return statearr_24005;
})();if(cljs.core.truth_(inst_23866))
{var statearr_24006_24090 = state_23997__$1;(statearr_24006_24090[1] = 5);
} else
{var statearr_24007_24091 = state_23997__$1;(statearr_24007_24091[1] = 6);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 36))
{var inst_23954 = (state_23997[9]);var inst_23958 = cljs.core.chunk_first(inst_23954);var inst_23959 = cljs.core.chunk_rest(inst_23954);var inst_23960 = cljs.core.count(inst_23958);var inst_23933 = inst_23959;var inst_23934 = inst_23958;var inst_23935 = inst_23960;var inst_23936 = 0;var state_23997__$1 = (function (){var statearr_24008 = state_23997;(statearr_24008[10] = inst_23935);
(statearr_24008[11] = inst_23934);
(statearr_24008[12] = inst_23936);
(statearr_24008[13] = inst_23933);
return statearr_24008;
})();var statearr_24009_24092 = state_23997__$1;(statearr_24009_24092[2] = null);
(statearr_24009_24092[1] = 25);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 5))
{var inst_23872 = cljs.core.deref(cs);var inst_23873 = cljs.core.seq(inst_23872);var inst_23874 = inst_23873;var inst_23875 = null;var inst_23876 = 0;var inst_23877 = 0;var state_23997__$1 = (function (){var statearr_24010 = state_23997;(statearr_24010[14] = inst_23875);
(statearr_24010[15] = inst_23876);
(statearr_24010[16] = inst_23877);
(statearr_24010[17] = inst_23874);
return statearr_24010;
})();var statearr_24011_24093 = state_23997__$1;(statearr_24011_24093[2] = null);
(statearr_24011_24093[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 37))
{var inst_23954 = (state_23997[9]);var inst_23963 = cljs.core.first(inst_23954);var state_23997__$1 = (function (){var statearr_24012 = state_23997;(statearr_24012[18] = inst_23963);
return statearr_24012;
})();var statearr_24013_24094 = state_23997__$1;(statearr_24013_24094[2] = null);
(statearr_24013_24094[1] = 41);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 6))
{var inst_23925 = (state_23997[19]);var inst_23924 = cljs.core.deref(cs);var inst_23925__$1 = cljs.core.keys(inst_23924);var inst_23926 = cljs.core.count(inst_23925__$1);var inst_23927 = cljs.core.reset_BANG_(dctr,inst_23926);var inst_23932 = cljs.core.seq(inst_23925__$1);var inst_23933 = inst_23932;var inst_23934 = null;var inst_23935 = 0;var inst_23936 = 0;var state_23997__$1 = (function (){var statearr_24014 = state_23997;(statearr_24014[19] = inst_23925__$1);
(statearr_24014[20] = inst_23927);
(statearr_24014[10] = inst_23935);
(statearr_24014[11] = inst_23934);
(statearr_24014[12] = inst_23936);
(statearr_24014[13] = inst_23933);
return statearr_24014;
})();var statearr_24015_24095 = state_23997__$1;(statearr_24015_24095[2] = null);
(statearr_24015_24095[1] = 25);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 38))
{var inst_23976 = (state_23997[2]);var state_23997__$1 = state_23997;var statearr_24016_24096 = state_23997__$1;(statearr_24016_24096[2] = inst_23976);
(statearr_24016_24096[1] = 35);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 7))
{var inst_23993 = (state_23997[2]);var state_23997__$1 = state_23997;var statearr_24017_24097 = state_23997__$1;(statearr_24017_24097[2] = inst_23993);
(statearr_24017_24097[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 39))
{var inst_23954 = (state_23997[9]);var inst_23972 = (state_23997[2]);var inst_23973 = cljs.core.next(inst_23954);var inst_23933 = inst_23973;var inst_23934 = null;var inst_23935 = 0;var inst_23936 = 0;var state_23997__$1 = (function (){var statearr_24018 = state_23997;(statearr_24018[10] = inst_23935);
(statearr_24018[11] = inst_23934);
(statearr_24018[12] = inst_23936);
(statearr_24018[13] = inst_23933);
(statearr_24018[21] = inst_23972);
return statearr_24018;
})();var statearr_24019_24098 = state_23997__$1;(statearr_24019_24098[2] = null);
(statearr_24019_24098[1] = 25);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 8))
{var inst_23876 = (state_23997[15]);var inst_23877 = (state_23997[16]);var inst_23879 = (inst_23877 < inst_23876);var inst_23880 = inst_23879;var state_23997__$1 = state_23997;if(cljs.core.truth_(inst_23880))
{var statearr_24020_24099 = state_23997__$1;(statearr_24020_24099[1] = 10);
} else
{var statearr_24021_24100 = state_23997__$1;(statearr_24021_24100[1] = 11);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 40))
{var inst_23963 = (state_23997[18]);var inst_23964 = (state_23997[2]);var inst_23965 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23966 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23963);var state_23997__$1 = (function (){var statearr_24022 = state_23997;(statearr_24022[22] = inst_23964);
(statearr_24022[23] = inst_23965);
return statearr_24022;
})();var statearr_24023_24101 = state_23997__$1;(statearr_24023_24101[2] = inst_23966);
cljs.core.async.impl.ioc_helpers.process_exception(state_23997__$1);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 9))
{var inst_23922 = (state_23997[2]);var state_23997__$1 = state_23997;var statearr_24024_24102 = state_23997__$1;(statearr_24024_24102[2] = inst_23922);
(statearr_24024_24102[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 41))
{var inst_23865 = (state_23997[8]);var inst_23963 = (state_23997[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23997,40,Object,null,39);var inst_23970 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23963,inst_23865,done);var state_23997__$1 = state_23997;var statearr_24025_24103 = state_23997__$1;(statearr_24025_24103[2] = inst_23970);
cljs.core.async.impl.ioc_helpers.process_exception(state_23997__$1);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 10))
{var inst_23875 = (state_23997[14]);var inst_23877 = (state_23997[16]);var inst_23883 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23875,inst_23877);var inst_23884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23883,0,null);var inst_23885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23883,1,null);var state_23997__$1 = (function (){var statearr_24026 = state_23997;(statearr_24026[24] = inst_23884);
return statearr_24026;
})();if(cljs.core.truth_(inst_23885))
{var statearr_24027_24104 = state_23997__$1;(statearr_24027_24104[1] = 13);
} else
{var statearr_24028_24105 = state_23997__$1;(statearr_24028_24105[1] = 14);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 42))
{var state_23997__$1 = state_23997;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23997__$1,45,dchan);
} else
{if((state_val_23998 === 11))
{var inst_23874 = (state_23997[17]);var inst_23894 = (state_23997[25]);var inst_23894__$1 = cljs.core.seq(inst_23874);var state_23997__$1 = (function (){var statearr_24029 = state_23997;(statearr_24029[25] = inst_23894__$1);
return statearr_24029;
})();if(inst_23894__$1)
{var statearr_24030_24106 = state_23997__$1;(statearr_24030_24106[1] = 16);
} else
{var statearr_24031_24107 = state_23997__$1;(statearr_24031_24107[1] = 17);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 43))
{var state_23997__$1 = state_23997;var statearr_24032_24108 = state_23997__$1;(statearr_24032_24108[2] = null);
(statearr_24032_24108[1] = 44);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 12))
{var inst_23920 = (state_23997[2]);var state_23997__$1 = state_23997;var statearr_24033_24109 = state_23997__$1;(statearr_24033_24109[2] = inst_23920);
(statearr_24033_24109[1] = 9);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 44))
{var inst_23990 = (state_23997[2]);var state_23997__$1 = (function (){var statearr_24034 = state_23997;(statearr_24034[26] = inst_23990);
return statearr_24034;
})();var statearr_24035_24110 = state_23997__$1;(statearr_24035_24110[2] = null);
(statearr_24035_24110[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 13))
{var inst_23884 = (state_23997[24]);var inst_23887 = cljs.core.async.close_BANG_(inst_23884);var state_23997__$1 = state_23997;var statearr_24036_24111 = state_23997__$1;(statearr_24036_24111[2] = inst_23887);
(statearr_24036_24111[1] = 15);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 45))
{var inst_23987 = (state_23997[2]);var state_23997__$1 = state_23997;var statearr_24040_24112 = state_23997__$1;(statearr_24040_24112[2] = inst_23987);
(statearr_24040_24112[1] = 44);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 14))
{var state_23997__$1 = state_23997;var statearr_24041_24113 = state_23997__$1;(statearr_24041_24113[2] = null);
(statearr_24041_24113[1] = 15);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 15))
{var inst_23875 = (state_23997[14]);var inst_23876 = (state_23997[15]);var inst_23877 = (state_23997[16]);var inst_23874 = (state_23997[17]);var inst_23890 = (state_23997[2]);var inst_23891 = (inst_23877 + 1);var tmp24037 = inst_23875;var tmp24038 = inst_23876;var tmp24039 = inst_23874;var inst_23874__$1 = tmp24039;var inst_23875__$1 = tmp24037;var inst_23876__$1 = tmp24038;var inst_23877__$1 = inst_23891;var state_23997__$1 = (function (){var statearr_24042 = state_23997;(statearr_24042[14] = inst_23875__$1);
(statearr_24042[15] = inst_23876__$1);
(statearr_24042[16] = inst_23877__$1);
(statearr_24042[17] = inst_23874__$1);
(statearr_24042[27] = inst_23890);
return statearr_24042;
})();var statearr_24043_24114 = state_23997__$1;(statearr_24043_24114[2] = null);
(statearr_24043_24114[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 16))
{var inst_23894 = (state_23997[25]);var inst_23896 = cljs.core.chunked_seq_QMARK_(inst_23894);var state_23997__$1 = state_23997;if(inst_23896)
{var statearr_24044_24115 = state_23997__$1;(statearr_24044_24115[1] = 19);
} else
{var statearr_24045_24116 = state_23997__$1;(statearr_24045_24116[1] = 20);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 17))
{var state_23997__$1 = state_23997;var statearr_24046_24117 = state_23997__$1;(statearr_24046_24117[2] = null);
(statearr_24046_24117[1] = 18);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 18))
{var inst_23918 = (state_23997[2]);var state_23997__$1 = state_23997;var statearr_24047_24118 = state_23997__$1;(statearr_24047_24118[2] = inst_23918);
(statearr_24047_24118[1] = 12);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 19))
{var inst_23894 = (state_23997[25]);var inst_23898 = cljs.core.chunk_first(inst_23894);var inst_23899 = cljs.core.chunk_rest(inst_23894);var inst_23900 = cljs.core.count(inst_23898);var inst_23874 = inst_23899;var inst_23875 = inst_23898;var inst_23876 = inst_23900;var inst_23877 = 0;var state_23997__$1 = (function (){var statearr_24048 = state_23997;(statearr_24048[14] = inst_23875);
(statearr_24048[15] = inst_23876);
(statearr_24048[16] = inst_23877);
(statearr_24048[17] = inst_23874);
return statearr_24048;
})();var statearr_24049_24119 = state_23997__$1;(statearr_24049_24119[2] = null);
(statearr_24049_24119[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 20))
{var inst_23894 = (state_23997[25]);var inst_23904 = cljs.core.first(inst_23894);var inst_23905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23904,0,null);var inst_23906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23904,1,null);var state_23997__$1 = (function (){var statearr_24050 = state_23997;(statearr_24050[28] = inst_23905);
return statearr_24050;
})();if(cljs.core.truth_(inst_23906))
{var statearr_24051_24120 = state_23997__$1;(statearr_24051_24120[1] = 22);
} else
{var statearr_24052_24121 = state_23997__$1;(statearr_24052_24121[1] = 23);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 21))
{var inst_23915 = (state_23997[2]);var state_23997__$1 = state_23997;var statearr_24053_24122 = state_23997__$1;(statearr_24053_24122[2] = inst_23915);
(statearr_24053_24122[1] = 18);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 22))
{var inst_23905 = (state_23997[28]);var inst_23908 = cljs.core.async.close_BANG_(inst_23905);var state_23997__$1 = state_23997;var statearr_24054_24123 = state_23997__$1;(statearr_24054_24123[2] = inst_23908);
(statearr_24054_24123[1] = 24);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 23))
{var state_23997__$1 = state_23997;var statearr_24055_24124 = state_23997__$1;(statearr_24055_24124[2] = null);
(statearr_24055_24124[1] = 24);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 24))
{var inst_23894 = (state_23997[25]);var inst_23911 = (state_23997[2]);var inst_23912 = cljs.core.next(inst_23894);var inst_23874 = inst_23912;var inst_23875 = null;var inst_23876 = 0;var inst_23877 = 0;var state_23997__$1 = (function (){var statearr_24056 = state_23997;(statearr_24056[14] = inst_23875);
(statearr_24056[15] = inst_23876);
(statearr_24056[16] = inst_23877);
(statearr_24056[29] = inst_23911);
(statearr_24056[17] = inst_23874);
return statearr_24056;
})();var statearr_24057_24125 = state_23997__$1;(statearr_24057_24125[2] = null);
(statearr_24057_24125[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 25))
{var inst_23935 = (state_23997[10]);var inst_23936 = (state_23997[12]);var inst_23938 = (inst_23936 < inst_23935);var inst_23939 = inst_23938;var state_23997__$1 = state_23997;if(cljs.core.truth_(inst_23939))
{var statearr_24058_24126 = state_23997__$1;(statearr_24058_24126[1] = 27);
} else
{var statearr_24059_24127 = state_23997__$1;(statearr_24059_24127[1] = 28);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 26))
{var inst_23925 = (state_23997[19]);var inst_23983 = (state_23997[2]);var inst_23984 = cljs.core.seq(inst_23925);var state_23997__$1 = (function (){var statearr_24060 = state_23997;(statearr_24060[30] = inst_23983);
return statearr_24060;
})();if(inst_23984)
{var statearr_24061_24128 = state_23997__$1;(statearr_24061_24128[1] = 42);
} else
{var statearr_24062_24129 = state_23997__$1;(statearr_24062_24129[1] = 43);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 27))
{var inst_23934 = (state_23997[11]);var inst_23936 = (state_23997[12]);var inst_23941 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23934,inst_23936);var state_23997__$1 = (function (){var statearr_24063 = state_23997;(statearr_24063[7] = inst_23941);
return statearr_24063;
})();var statearr_24064_24130 = state_23997__$1;(statearr_24064_24130[2] = null);
(statearr_24064_24130[1] = 32);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 28))
{var inst_23954 = (state_23997[9]);var inst_23933 = (state_23997[13]);var inst_23954__$1 = cljs.core.seq(inst_23933);var state_23997__$1 = (function (){var statearr_24068 = state_23997;(statearr_24068[9] = inst_23954__$1);
return statearr_24068;
})();if(inst_23954__$1)
{var statearr_24069_24131 = state_23997__$1;(statearr_24069_24131[1] = 33);
} else
{var statearr_24070_24132 = state_23997__$1;(statearr_24070_24132[1] = 34);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 29))
{var inst_23981 = (state_23997[2]);var state_23997__$1 = state_23997;var statearr_24071_24133 = state_23997__$1;(statearr_24071_24133[2] = inst_23981);
(statearr_24071_24133[1] = 26);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 30))
{var inst_23935 = (state_23997[10]);var inst_23934 = (state_23997[11]);var inst_23936 = (state_23997[12]);var inst_23933 = (state_23997[13]);var inst_23950 = (state_23997[2]);var inst_23951 = (inst_23936 + 1);var tmp24065 = inst_23935;var tmp24066 = inst_23934;var tmp24067 = inst_23933;var inst_23933__$1 = tmp24067;var inst_23934__$1 = tmp24066;var inst_23935__$1 = tmp24065;var inst_23936__$1 = inst_23951;var state_23997__$1 = (function (){var statearr_24072 = state_23997;(statearr_24072[10] = inst_23935__$1);
(statearr_24072[11] = inst_23934__$1);
(statearr_24072[12] = inst_23936__$1);
(statearr_24072[31] = inst_23950);
(statearr_24072[13] = inst_23933__$1);
return statearr_24072;
})();var statearr_24073_24134 = state_23997__$1;(statearr_24073_24134[2] = null);
(statearr_24073_24134[1] = 25);
return cljs.core.constant$keyword$194;
} else
{if((state_val_23998 === 31))
{var inst_23941 = (state_23997[7]);var inst_23942 = (state_23997[2]);var inst_23943 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23941);var state_23997__$1 = (function (){var statearr_24074 = state_23997;(statearr_24074[32] = inst_23942);
(statearr_24074[33] = inst_23943);
return statearr_24074;
})();var statearr_24075_24135 = state_23997__$1;(statearr_24075_24135[2] = inst_23944);
cljs.core.async.impl.ioc_helpers.process_exception(state_23997__$1);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_24079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24079[0] = state_machine__5507__auto__);
(statearr_24079[1] = 1);
return statearr_24079;
});
var state_machine__5507__auto____1 = (function (state_23997){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23997);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24080){if((e24080 instanceof Object))
{var ex__5510__auto__ = e24080;var statearr_24081_24136 = state_23997;(statearr_24081_24136[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23997);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e24080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__24137 = state_23997;
state_23997 = G__24137;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23997){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24082 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24083);
return statearr_24082;
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
cljs.core.async.Mix = (function (){var obj24139 = {};return obj24139;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$201,null,cljs.core.constant$keyword$202,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$203);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$202);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$203,chs);var pauses = pick(cljs.core.constant$keyword$201,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$204,solos,cljs.core.constant$keyword$205,pick(cljs.core.constant$keyword$202,chs),cljs.core.constant$keyword$206,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$201)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24249 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24249 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24250){
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
this.meta24250 = meta24250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24249.cljs$lang$type = true;
cljs.core.async.t24249.cljs$lang$ctorStr = "cljs.core.async/t24249";
cljs.core.async.t24249.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24249");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24249.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24249.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24249.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24249.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24249.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24249.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24249.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24251){var self__ = this;
var _24251__$1 = this;return self__.meta24250;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24251,meta24250__$1){var self__ = this;
var _24251__$1 = this;return (new cljs.core.async.t24249(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24250__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24249 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24249(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24250){return (new cljs.core.async.t24249(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24250));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24249(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24316){var state_val_24317 = (state_24316[1]);if((state_val_24317 === 1))
{var inst_24255 = (state_24316[7]);var inst_24255__$1 = calc_state();var inst_24256 = cljs.core.seq_QMARK_(inst_24255__$1);var state_24316__$1 = (function (){var statearr_24318 = state_24316;(statearr_24318[7] = inst_24255__$1);
return statearr_24318;
})();if(inst_24256)
{var statearr_24319_24359 = state_24316__$1;(statearr_24319_24359[1] = 2);
} else
{var statearr_24320_24360 = state_24316__$1;(statearr_24320_24360[1] = 3);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 2))
{var inst_24255 = (state_24316[7]);var inst_24258 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24255);var state_24316__$1 = state_24316;var statearr_24321_24361 = state_24316__$1;(statearr_24321_24361[2] = inst_24258);
(statearr_24321_24361[1] = 4);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 3))
{var inst_24255 = (state_24316[7]);var state_24316__$1 = state_24316;var statearr_24322_24362 = state_24316__$1;(statearr_24322_24362[2] = inst_24255);
(statearr_24322_24362[1] = 4);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 4))
{var inst_24255 = (state_24316[7]);var inst_24261 = (state_24316[2]);var inst_24262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24261,cljs.core.constant$keyword$206);var inst_24263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24261,cljs.core.constant$keyword$205);var inst_24264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24261,cljs.core.constant$keyword$204);var inst_24265 = inst_24255;var state_24316__$1 = (function (){var statearr_24323 = state_24316;(statearr_24323[8] = inst_24265);
(statearr_24323[9] = inst_24263);
(statearr_24323[10] = inst_24264);
(statearr_24323[11] = inst_24262);
return statearr_24323;
})();var statearr_24324_24363 = state_24316__$1;(statearr_24324_24363[2] = null);
(statearr_24324_24363[1] = 5);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 5))
{var inst_24265 = (state_24316[8]);var inst_24268 = cljs.core.seq_QMARK_(inst_24265);var state_24316__$1 = state_24316;if(inst_24268)
{var statearr_24325_24364 = state_24316__$1;(statearr_24325_24364[1] = 7);
} else
{var statearr_24326_24365 = state_24316__$1;(statearr_24326_24365[1] = 8);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 6))
{var inst_24314 = (state_24316[2]);var state_24316__$1 = state_24316;return cljs.core.async.impl.ioc_helpers.return_chan(state_24316__$1,inst_24314);
} else
{if((state_val_24317 === 7))
{var inst_24265 = (state_24316[8]);var inst_24270 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24265);var state_24316__$1 = state_24316;var statearr_24327_24366 = state_24316__$1;(statearr_24327_24366[2] = inst_24270);
(statearr_24327_24366[1] = 9);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 8))
{var inst_24265 = (state_24316[8]);var state_24316__$1 = state_24316;var statearr_24328_24367 = state_24316__$1;(statearr_24328_24367[2] = inst_24265);
(statearr_24328_24367[1] = 9);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 9))
{var inst_24273 = (state_24316[12]);var inst_24273__$1 = (state_24316[2]);var inst_24274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24273__$1,cljs.core.constant$keyword$206);var inst_24275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24273__$1,cljs.core.constant$keyword$205);var inst_24276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24273__$1,cljs.core.constant$keyword$204);var state_24316__$1 = (function (){var statearr_24329 = state_24316;(statearr_24329[13] = inst_24276);
(statearr_24329[14] = inst_24275);
(statearr_24329[12] = inst_24273__$1);
return statearr_24329;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24316__$1,10,inst_24274);
} else
{if((state_val_24317 === 10))
{var inst_24281 = (state_24316[15]);var inst_24280 = (state_24316[16]);var inst_24279 = (state_24316[2]);var inst_24280__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24279,0,null);var inst_24281__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24279,1,null);var inst_24282 = (inst_24280__$1 == null);var inst_24283 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24281__$1,change);var inst_24284 = (inst_24282) || (inst_24283);var state_24316__$1 = (function (){var statearr_24330 = state_24316;(statearr_24330[15] = inst_24281__$1);
(statearr_24330[16] = inst_24280__$1);
return statearr_24330;
})();if(cljs.core.truth_(inst_24284))
{var statearr_24331_24368 = state_24316__$1;(statearr_24331_24368[1] = 11);
} else
{var statearr_24332_24369 = state_24316__$1;(statearr_24332_24369[1] = 12);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 11))
{var inst_24280 = (state_24316[16]);var inst_24286 = (inst_24280 == null);var state_24316__$1 = state_24316;if(cljs.core.truth_(inst_24286))
{var statearr_24333_24370 = state_24316__$1;(statearr_24333_24370[1] = 14);
} else
{var statearr_24334_24371 = state_24316__$1;(statearr_24334_24371[1] = 15);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 12))
{var inst_24281 = (state_24316[15]);var inst_24295 = (state_24316[17]);var inst_24276 = (state_24316[13]);var inst_24295__$1 = (inst_24276.cljs$core$IFn$_invoke$arity$1 ? inst_24276.cljs$core$IFn$_invoke$arity$1(inst_24281) : inst_24276.call(null,inst_24281));var state_24316__$1 = (function (){var statearr_24335 = state_24316;(statearr_24335[17] = inst_24295__$1);
return statearr_24335;
})();if(cljs.core.truth_(inst_24295__$1))
{var statearr_24336_24372 = state_24316__$1;(statearr_24336_24372[1] = 17);
} else
{var statearr_24337_24373 = state_24316__$1;(statearr_24337_24373[1] = 18);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 13))
{var inst_24312 = (state_24316[2]);var state_24316__$1 = state_24316;var statearr_24338_24374 = state_24316__$1;(statearr_24338_24374[2] = inst_24312);
(statearr_24338_24374[1] = 6);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 14))
{var inst_24281 = (state_24316[15]);var inst_24288 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24281);var state_24316__$1 = state_24316;var statearr_24339_24375 = state_24316__$1;(statearr_24339_24375[2] = inst_24288);
(statearr_24339_24375[1] = 16);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 15))
{var state_24316__$1 = state_24316;var statearr_24340_24376 = state_24316__$1;(statearr_24340_24376[2] = null);
(statearr_24340_24376[1] = 16);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 16))
{var inst_24291 = (state_24316[2]);var inst_24292 = calc_state();var inst_24265 = inst_24292;var state_24316__$1 = (function (){var statearr_24341 = state_24316;(statearr_24341[8] = inst_24265);
(statearr_24341[18] = inst_24291);
return statearr_24341;
})();var statearr_24342_24377 = state_24316__$1;(statearr_24342_24377[2] = null);
(statearr_24342_24377[1] = 5);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 17))
{var inst_24295 = (state_24316[17]);var state_24316__$1 = state_24316;var statearr_24343_24378 = state_24316__$1;(statearr_24343_24378[2] = inst_24295);
(statearr_24343_24378[1] = 19);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 18))
{var inst_24281 = (state_24316[15]);var inst_24276 = (state_24316[13]);var inst_24275 = (state_24316[14]);var inst_24298 = cljs.core.empty_QMARK_(inst_24276);var inst_24299 = (inst_24275.cljs$core$IFn$_invoke$arity$1 ? inst_24275.cljs$core$IFn$_invoke$arity$1(inst_24281) : inst_24275.call(null,inst_24281));var inst_24300 = cljs.core.not(inst_24299);var inst_24301 = (inst_24298) && (inst_24300);var state_24316__$1 = state_24316;var statearr_24344_24379 = state_24316__$1;(statearr_24344_24379[2] = inst_24301);
(statearr_24344_24379[1] = 19);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 19))
{var inst_24303 = (state_24316[2]);var state_24316__$1 = state_24316;if(cljs.core.truth_(inst_24303))
{var statearr_24345_24380 = state_24316__$1;(statearr_24345_24380[1] = 20);
} else
{var statearr_24346_24381 = state_24316__$1;(statearr_24346_24381[1] = 21);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 20))
{var inst_24280 = (state_24316[16]);var state_24316__$1 = state_24316;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24316__$1,23,out,inst_24280);
} else
{if((state_val_24317 === 21))
{var state_24316__$1 = state_24316;var statearr_24347_24382 = state_24316__$1;(statearr_24347_24382[2] = null);
(statearr_24347_24382[1] = 22);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 22))
{var inst_24273 = (state_24316[12]);var inst_24309 = (state_24316[2]);var inst_24265 = inst_24273;var state_24316__$1 = (function (){var statearr_24348 = state_24316;(statearr_24348[19] = inst_24309);
(statearr_24348[8] = inst_24265);
return statearr_24348;
})();var statearr_24349_24383 = state_24316__$1;(statearr_24349_24383[2] = null);
(statearr_24349_24383[1] = 5);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24317 === 23))
{var inst_24306 = (state_24316[2]);var state_24316__$1 = state_24316;var statearr_24350_24384 = state_24316__$1;(statearr_24350_24384[2] = inst_24306);
(statearr_24350_24384[1] = 22);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_24354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24354[0] = state_machine__5507__auto__);
(statearr_24354[1] = 1);
return statearr_24354;
});
var state_machine__5507__auto____1 = (function (state_24316){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24316);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24355){if((e24355 instanceof Object))
{var ex__5510__auto__ = e24355;var statearr_24356_24385 = state_24316;(statearr_24356_24385[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24316);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e24355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__24386 = state_24316;
state_24316 = G__24386;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24316){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24357 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24358);
return statearr_24357;
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
cljs.core.async.Pub = (function (){var obj24388 = {};return obj24388;
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
return (function (p1__24389_SHARP_){if(cljs.core.truth_((p1__24389_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24389_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24389_SHARP_.call(null,topic))))
{return p1__24389_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24389_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24514 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24514 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24515){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24515 = meta24515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24514.cljs$lang$type = true;
cljs.core.async.t24514.cljs$lang$ctorStr = "cljs.core.async/t24514";
cljs.core.async.t24514.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24514");
});})(mults,ensure_mult))
;
cljs.core.async.t24514.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24514.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24514.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24514.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24516){var self__ = this;
var _24516__$1 = this;return self__.meta24515;
});})(mults,ensure_mult))
;
cljs.core.async.t24514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24516,meta24515__$1){var self__ = this;
var _24516__$1 = this;return (new cljs.core.async.t24514(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24515__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24514 = ((function (mults,ensure_mult){
return (function __GT_t24514(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24515){return (new cljs.core.async.t24514(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24515));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24514(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24590){var state_val_24591 = (state_24590[1]);if((state_val_24591 === 1))
{var state_24590__$1 = state_24590;var statearr_24592_24639 = state_24590__$1;(statearr_24592_24639[2] = null);
(statearr_24592_24639[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 2))
{var state_24590__$1 = state_24590;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24590__$1,4,ch);
} else
{if((state_val_24591 === 3))
{var inst_24588 = (state_24590[2]);var state_24590__$1 = state_24590;return cljs.core.async.impl.ioc_helpers.return_chan(state_24590__$1,inst_24588);
} else
{if((state_val_24591 === 4))
{var inst_24519 = (state_24590[7]);var inst_24519__$1 = (state_24590[2]);var inst_24520 = (inst_24519__$1 == null);var state_24590__$1 = (function (){var statearr_24593 = state_24590;(statearr_24593[7] = inst_24519__$1);
return statearr_24593;
})();if(cljs.core.truth_(inst_24520))
{var statearr_24594_24640 = state_24590__$1;(statearr_24594_24640[1] = 5);
} else
{var statearr_24595_24641 = state_24590__$1;(statearr_24595_24641[1] = 6);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 5))
{var inst_24526 = cljs.core.deref(mults);var inst_24527 = cljs.core.vals(inst_24526);var inst_24528 = cljs.core.seq(inst_24527);var inst_24529 = inst_24528;var inst_24530 = null;var inst_24531 = 0;var inst_24532 = 0;var state_24590__$1 = (function (){var statearr_24596 = state_24590;(statearr_24596[8] = inst_24532);
(statearr_24596[9] = inst_24531);
(statearr_24596[10] = inst_24530);
(statearr_24596[11] = inst_24529);
return statearr_24596;
})();var statearr_24597_24642 = state_24590__$1;(statearr_24597_24642[2] = null);
(statearr_24597_24642[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 6))
{var inst_24569 = (state_24590[12]);var inst_24567 = (state_24590[13]);var inst_24519 = (state_24590[7]);var inst_24567__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24519) : topic_fn.call(null,inst_24519));var inst_24568 = cljs.core.deref(mults);var inst_24569__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24568,inst_24567__$1);var state_24590__$1 = (function (){var statearr_24598 = state_24590;(statearr_24598[12] = inst_24569__$1);
(statearr_24598[13] = inst_24567__$1);
return statearr_24598;
})();if(cljs.core.truth_(inst_24569__$1))
{var statearr_24599_24643 = state_24590__$1;(statearr_24599_24643[1] = 19);
} else
{var statearr_24600_24644 = state_24590__$1;(statearr_24600_24644[1] = 20);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 7))
{var inst_24586 = (state_24590[2]);var state_24590__$1 = state_24590;var statearr_24601_24645 = state_24590__$1;(statearr_24601_24645[2] = inst_24586);
(statearr_24601_24645[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 8))
{var inst_24532 = (state_24590[8]);var inst_24531 = (state_24590[9]);var inst_24534 = (inst_24532 < inst_24531);var inst_24535 = inst_24534;var state_24590__$1 = state_24590;if(cljs.core.truth_(inst_24535))
{var statearr_24605_24646 = state_24590__$1;(statearr_24605_24646[1] = 10);
} else
{var statearr_24606_24647 = state_24590__$1;(statearr_24606_24647[1] = 11);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 9))
{var inst_24565 = (state_24590[2]);var state_24590__$1 = state_24590;var statearr_24607_24648 = state_24590__$1;(statearr_24607_24648[2] = inst_24565);
(statearr_24607_24648[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 10))
{var inst_24532 = (state_24590[8]);var inst_24531 = (state_24590[9]);var inst_24530 = (state_24590[10]);var inst_24529 = (state_24590[11]);var inst_24537 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24530,inst_24532);var inst_24538 = cljs.core.async.muxch_STAR_(inst_24537);var inst_24539 = cljs.core.async.close_BANG_(inst_24538);var inst_24540 = (inst_24532 + 1);var tmp24602 = inst_24531;var tmp24603 = inst_24530;var tmp24604 = inst_24529;var inst_24529__$1 = tmp24604;var inst_24530__$1 = tmp24603;var inst_24531__$1 = tmp24602;var inst_24532__$1 = inst_24540;var state_24590__$1 = (function (){var statearr_24608 = state_24590;(statearr_24608[14] = inst_24539);
(statearr_24608[8] = inst_24532__$1);
(statearr_24608[9] = inst_24531__$1);
(statearr_24608[10] = inst_24530__$1);
(statearr_24608[11] = inst_24529__$1);
return statearr_24608;
})();var statearr_24609_24649 = state_24590__$1;(statearr_24609_24649[2] = null);
(statearr_24609_24649[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 11))
{var inst_24529 = (state_24590[11]);var inst_24543 = (state_24590[15]);var inst_24543__$1 = cljs.core.seq(inst_24529);var state_24590__$1 = (function (){var statearr_24610 = state_24590;(statearr_24610[15] = inst_24543__$1);
return statearr_24610;
})();if(inst_24543__$1)
{var statearr_24611_24650 = state_24590__$1;(statearr_24611_24650[1] = 13);
} else
{var statearr_24612_24651 = state_24590__$1;(statearr_24612_24651[1] = 14);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 12))
{var inst_24563 = (state_24590[2]);var state_24590__$1 = state_24590;var statearr_24613_24652 = state_24590__$1;(statearr_24613_24652[2] = inst_24563);
(statearr_24613_24652[1] = 9);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 13))
{var inst_24543 = (state_24590[15]);var inst_24545 = cljs.core.chunked_seq_QMARK_(inst_24543);var state_24590__$1 = state_24590;if(inst_24545)
{var statearr_24614_24653 = state_24590__$1;(statearr_24614_24653[1] = 16);
} else
{var statearr_24615_24654 = state_24590__$1;(statearr_24615_24654[1] = 17);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 14))
{var state_24590__$1 = state_24590;var statearr_24616_24655 = state_24590__$1;(statearr_24616_24655[2] = null);
(statearr_24616_24655[1] = 15);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 15))
{var inst_24561 = (state_24590[2]);var state_24590__$1 = state_24590;var statearr_24617_24656 = state_24590__$1;(statearr_24617_24656[2] = inst_24561);
(statearr_24617_24656[1] = 12);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 16))
{var inst_24543 = (state_24590[15]);var inst_24547 = cljs.core.chunk_first(inst_24543);var inst_24548 = cljs.core.chunk_rest(inst_24543);var inst_24549 = cljs.core.count(inst_24547);var inst_24529 = inst_24548;var inst_24530 = inst_24547;var inst_24531 = inst_24549;var inst_24532 = 0;var state_24590__$1 = (function (){var statearr_24618 = state_24590;(statearr_24618[8] = inst_24532);
(statearr_24618[9] = inst_24531);
(statearr_24618[10] = inst_24530);
(statearr_24618[11] = inst_24529);
return statearr_24618;
})();var statearr_24619_24657 = state_24590__$1;(statearr_24619_24657[2] = null);
(statearr_24619_24657[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 17))
{var inst_24543 = (state_24590[15]);var inst_24552 = cljs.core.first(inst_24543);var inst_24553 = cljs.core.async.muxch_STAR_(inst_24552);var inst_24554 = cljs.core.async.close_BANG_(inst_24553);var inst_24555 = cljs.core.next(inst_24543);var inst_24529 = inst_24555;var inst_24530 = null;var inst_24531 = 0;var inst_24532 = 0;var state_24590__$1 = (function (){var statearr_24620 = state_24590;(statearr_24620[8] = inst_24532);
(statearr_24620[9] = inst_24531);
(statearr_24620[10] = inst_24530);
(statearr_24620[16] = inst_24554);
(statearr_24620[11] = inst_24529);
return statearr_24620;
})();var statearr_24621_24658 = state_24590__$1;(statearr_24621_24658[2] = null);
(statearr_24621_24658[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 18))
{var inst_24558 = (state_24590[2]);var state_24590__$1 = state_24590;var statearr_24622_24659 = state_24590__$1;(statearr_24622_24659[2] = inst_24558);
(statearr_24622_24659[1] = 15);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 19))
{var state_24590__$1 = state_24590;var statearr_24623_24660 = state_24590__$1;(statearr_24623_24660[2] = null);
(statearr_24623_24660[1] = 24);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 20))
{var state_24590__$1 = state_24590;var statearr_24624_24661 = state_24590__$1;(statearr_24624_24661[2] = null);
(statearr_24624_24661[1] = 21);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 21))
{var inst_24583 = (state_24590[2]);var state_24590__$1 = (function (){var statearr_24625 = state_24590;(statearr_24625[17] = inst_24583);
return statearr_24625;
})();var statearr_24626_24662 = state_24590__$1;(statearr_24626_24662[2] = null);
(statearr_24626_24662[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 22))
{var inst_24580 = (state_24590[2]);var state_24590__$1 = state_24590;var statearr_24627_24663 = state_24590__$1;(statearr_24627_24663[2] = inst_24580);
(statearr_24627_24663[1] = 21);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 23))
{var inst_24567 = (state_24590[13]);var inst_24571 = (state_24590[2]);var inst_24572 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24567);var state_24590__$1 = (function (){var statearr_24628 = state_24590;(statearr_24628[18] = inst_24571);
return statearr_24628;
})();var statearr_24629_24664 = state_24590__$1;(statearr_24629_24664[2] = inst_24572);
cljs.core.async.impl.ioc_helpers.process_exception(state_24590__$1);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24591 === 24))
{var inst_24569 = (state_24590[12]);var inst_24519 = (state_24590[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24590,23,Object,null,22);var inst_24576 = cljs.core.async.muxch_STAR_(inst_24569);var state_24590__$1 = state_24590;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24590__$1,25,inst_24576,inst_24519);
} else
{if((state_val_24591 === 25))
{var inst_24578 = (state_24590[2]);var state_24590__$1 = state_24590;var statearr_24630_24665 = state_24590__$1;(statearr_24630_24665[2] = inst_24578);
cljs.core.async.impl.ioc_helpers.process_exception(state_24590__$1);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_24634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24634[0] = state_machine__5507__auto__);
(statearr_24634[1] = 1);
return statearr_24634;
});
var state_machine__5507__auto____1 = (function (state_24590){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24590);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24635){if((e24635 instanceof Object))
{var ex__5510__auto__ = e24635;var statearr_24636_24666 = state_24590;(statearr_24636_24666[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24590);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e24635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__24667 = state_24590;
state_24590 = G__24667;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24590){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24637 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24638);
return statearr_24637;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24774){var state_val_24775 = (state_24774[1]);if((state_val_24775 === 1))
{var state_24774__$1 = state_24774;var statearr_24776_24805 = state_24774__$1;(statearr_24776_24805[2] = null);
(statearr_24776_24805[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 2))
{var inst_24737 = cljs.core.reset_BANG_(dctr,cnt);var inst_24738 = 0;var state_24774__$1 = (function (){var statearr_24777 = state_24774;(statearr_24777[7] = inst_24738);
(statearr_24777[8] = inst_24737);
return statearr_24777;
})();var statearr_24778_24806 = state_24774__$1;(statearr_24778_24806[2] = null);
(statearr_24778_24806[1] = 4);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 3))
{var inst_24772 = (state_24774[2]);var state_24774__$1 = state_24774;return cljs.core.async.impl.ioc_helpers.return_chan(state_24774__$1,inst_24772);
} else
{if((state_val_24775 === 4))
{var inst_24738 = (state_24774[7]);var inst_24740 = (inst_24738 < cnt);var state_24774__$1 = state_24774;if(cljs.core.truth_(inst_24740))
{var statearr_24779_24807 = state_24774__$1;(statearr_24779_24807[1] = 6);
} else
{var statearr_24780_24808 = state_24774__$1;(statearr_24780_24808[1] = 7);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 5))
{var inst_24758 = (state_24774[2]);var state_24774__$1 = (function (){var statearr_24781 = state_24774;(statearr_24781[9] = inst_24758);
return statearr_24781;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24774__$1,12,dchan);
} else
{if((state_val_24775 === 6))
{var state_24774__$1 = state_24774;var statearr_24782_24809 = state_24774__$1;(statearr_24782_24809[2] = null);
(statearr_24782_24809[1] = 11);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 7))
{var state_24774__$1 = state_24774;var statearr_24783_24810 = state_24774__$1;(statearr_24783_24810[2] = null);
(statearr_24783_24810[1] = 8);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 8))
{var inst_24756 = (state_24774[2]);var state_24774__$1 = state_24774;var statearr_24784_24811 = state_24774__$1;(statearr_24784_24811[2] = inst_24756);
(statearr_24784_24811[1] = 5);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 9))
{var inst_24738 = (state_24774[7]);var inst_24751 = (state_24774[2]);var inst_24752 = (inst_24738 + 1);var inst_24738__$1 = inst_24752;var state_24774__$1 = (function (){var statearr_24785 = state_24774;(statearr_24785[7] = inst_24738__$1);
(statearr_24785[10] = inst_24751);
return statearr_24785;
})();var statearr_24786_24812 = state_24774__$1;(statearr_24786_24812[2] = null);
(statearr_24786_24812[1] = 4);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 10))
{var inst_24742 = (state_24774[2]);var inst_24743 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24774__$1 = (function (){var statearr_24787 = state_24774;(statearr_24787[11] = inst_24742);
return statearr_24787;
})();var statearr_24788_24813 = state_24774__$1;(statearr_24788_24813[2] = inst_24743);
cljs.core.async.impl.ioc_helpers.process_exception(state_24774__$1);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 11))
{var inst_24738 = (state_24774[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24774,10,Object,null,9);var inst_24747 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24738) : chs__$1.call(null,inst_24738));var inst_24748 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24738) : done.call(null,inst_24738));var inst_24749 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24747,inst_24748);var state_24774__$1 = state_24774;var statearr_24789_24814 = state_24774__$1;(statearr_24789_24814[2] = inst_24749);
cljs.core.async.impl.ioc_helpers.process_exception(state_24774__$1);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 12))
{var inst_24760 = (state_24774[12]);var inst_24760__$1 = (state_24774[2]);var inst_24761 = cljs.core.some(cljs.core.nil_QMARK_,inst_24760__$1);var state_24774__$1 = (function (){var statearr_24790 = state_24774;(statearr_24790[12] = inst_24760__$1);
return statearr_24790;
})();if(cljs.core.truth_(inst_24761))
{var statearr_24791_24815 = state_24774__$1;(statearr_24791_24815[1] = 13);
} else
{var statearr_24792_24816 = state_24774__$1;(statearr_24792_24816[1] = 14);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 13))
{var inst_24763 = cljs.core.async.close_BANG_(out);var state_24774__$1 = state_24774;var statearr_24793_24817 = state_24774__$1;(statearr_24793_24817[2] = inst_24763);
(statearr_24793_24817[1] = 15);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 14))
{var inst_24760 = (state_24774[12]);var inst_24765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24760);var state_24774__$1 = state_24774;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24774__$1,16,out,inst_24765);
} else
{if((state_val_24775 === 15))
{var inst_24770 = (state_24774[2]);var state_24774__$1 = state_24774;var statearr_24794_24818 = state_24774__$1;(statearr_24794_24818[2] = inst_24770);
(statearr_24794_24818[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24775 === 16))
{var inst_24767 = (state_24774[2]);var state_24774__$1 = (function (){var statearr_24795 = state_24774;(statearr_24795[13] = inst_24767);
return statearr_24795;
})();var statearr_24796_24819 = state_24774__$1;(statearr_24796_24819[2] = null);
(statearr_24796_24819[1] = 2);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_24800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24800[0] = state_machine__5507__auto__);
(statearr_24800[1] = 1);
return statearr_24800;
});
var state_machine__5507__auto____1 = (function (state_24774){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24774);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24801){if((e24801 instanceof Object))
{var ex__5510__auto__ = e24801;var statearr_24802_24820 = state_24774;(statearr_24802_24820[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24774);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e24801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__24821 = state_24774;
state_24774 = G__24821;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24774){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24803 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24804);
return statearr_24803;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24905){var state_val_24906 = (state_24905[1]);if((state_val_24906 === 1))
{var inst_24876 = cljs.core.vec(chs);var inst_24877 = inst_24876;var state_24905__$1 = (function (){var statearr_24907 = state_24905;(statearr_24907[7] = inst_24877);
return statearr_24907;
})();var statearr_24908_24930 = state_24905__$1;(statearr_24908_24930[2] = null);
(statearr_24908_24930[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24906 === 2))
{var inst_24877 = (state_24905[7]);var inst_24879 = cljs.core.count(inst_24877);var inst_24880 = (inst_24879 > 0);var state_24905__$1 = state_24905;if(cljs.core.truth_(inst_24880))
{var statearr_24909_24931 = state_24905__$1;(statearr_24909_24931[1] = 4);
} else
{var statearr_24910_24932 = state_24905__$1;(statearr_24910_24932[1] = 5);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24906 === 3))
{var inst_24903 = (state_24905[2]);var state_24905__$1 = state_24905;return cljs.core.async.impl.ioc_helpers.return_chan(state_24905__$1,inst_24903);
} else
{if((state_val_24906 === 4))
{var inst_24877 = (state_24905[7]);var state_24905__$1 = state_24905;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24905__$1,7,inst_24877);
} else
{if((state_val_24906 === 5))
{var inst_24899 = cljs.core.async.close_BANG_(out);var state_24905__$1 = state_24905;var statearr_24911_24933 = state_24905__$1;(statearr_24911_24933[2] = inst_24899);
(statearr_24911_24933[1] = 6);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24906 === 6))
{var inst_24901 = (state_24905[2]);var state_24905__$1 = state_24905;var statearr_24912_24934 = state_24905__$1;(statearr_24912_24934[2] = inst_24901);
(statearr_24912_24934[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24906 === 7))
{var inst_24885 = (state_24905[8]);var inst_24884 = (state_24905[9]);var inst_24884__$1 = (state_24905[2]);var inst_24885__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24884__$1,0,null);var inst_24886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24884__$1,1,null);var inst_24887 = (inst_24885__$1 == null);var state_24905__$1 = (function (){var statearr_24913 = state_24905;(statearr_24913[10] = inst_24886);
(statearr_24913[8] = inst_24885__$1);
(statearr_24913[9] = inst_24884__$1);
return statearr_24913;
})();if(cljs.core.truth_(inst_24887))
{var statearr_24914_24935 = state_24905__$1;(statearr_24914_24935[1] = 8);
} else
{var statearr_24915_24936 = state_24905__$1;(statearr_24915_24936[1] = 9);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_24906 === 8))
{var inst_24886 = (state_24905[10]);var inst_24885 = (state_24905[8]);var inst_24877 = (state_24905[7]);var inst_24884 = (state_24905[9]);var inst_24889 = (function (){var c = inst_24886;var v = inst_24885;var vec__24882 = inst_24884;var cs = inst_24877;return ((function (c,v,vec__24882,cs,inst_24886,inst_24885,inst_24877,inst_24884,state_val_24906){
return (function (p1__24822_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24822_SHARP_);
});
;})(c,v,vec__24882,cs,inst_24886,inst_24885,inst_24877,inst_24884,state_val_24906))
})();var inst_24890 = cljs.core.filterv(inst_24889,inst_24877);var inst_24877__$1 = inst_24890;var state_24905__$1 = (function (){var statearr_24916 = state_24905;(statearr_24916[7] = inst_24877__$1);
return statearr_24916;
})();var statearr_24917_24937 = state_24905__$1;(statearr_24917_24937[2] = null);
(statearr_24917_24937[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24906 === 9))
{var inst_24885 = (state_24905[8]);var state_24905__$1 = state_24905;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24905__$1,11,out,inst_24885);
} else
{if((state_val_24906 === 10))
{var inst_24897 = (state_24905[2]);var state_24905__$1 = state_24905;var statearr_24919_24938 = state_24905__$1;(statearr_24919_24938[2] = inst_24897);
(statearr_24919_24938[1] = 6);
return cljs.core.constant$keyword$194;
} else
{if((state_val_24906 === 11))
{var inst_24877 = (state_24905[7]);var inst_24894 = (state_24905[2]);var tmp24918 = inst_24877;var inst_24877__$1 = tmp24918;var state_24905__$1 = (function (){var statearr_24920 = state_24905;(statearr_24920[11] = inst_24894);
(statearr_24920[7] = inst_24877__$1);
return statearr_24920;
})();var statearr_24921_24939 = state_24905__$1;(statearr_24921_24939[2] = null);
(statearr_24921_24939[1] = 2);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_24925 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24925[0] = state_machine__5507__auto__);
(statearr_24925[1] = 1);
return statearr_24925;
});
var state_machine__5507__auto____1 = (function (state_24905){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24905);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24926){if((e24926 instanceof Object))
{var ex__5510__auto__ = e24926;var statearr_24927_24940 = state_24905;(statearr_24927_24940[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24905);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e24926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__24941 = state_24905;
state_24905 = G__24941;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24905){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24928 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24929);
return statearr_24928;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25011){var state_val_25012 = (state_25011[1]);if((state_val_25012 === 1))
{var inst_24988 = 0;var state_25011__$1 = (function (){var statearr_25013 = state_25011;(statearr_25013[7] = inst_24988);
return statearr_25013;
})();var statearr_25014_25035 = state_25011__$1;(statearr_25014_25035[2] = null);
(statearr_25014_25035[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25012 === 2))
{var inst_24988 = (state_25011[7]);var inst_24990 = (inst_24988 < n);var state_25011__$1 = state_25011;if(cljs.core.truth_(inst_24990))
{var statearr_25015_25036 = state_25011__$1;(statearr_25015_25036[1] = 4);
} else
{var statearr_25016_25037 = state_25011__$1;(statearr_25016_25037[1] = 5);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_25012 === 3))
{var inst_25008 = (state_25011[2]);var inst_25009 = cljs.core.async.close_BANG_(out);var state_25011__$1 = (function (){var statearr_25017 = state_25011;(statearr_25017[8] = inst_25008);
return statearr_25017;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25011__$1,inst_25009);
} else
{if((state_val_25012 === 4))
{var state_25011__$1 = state_25011;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25011__$1,7,ch);
} else
{if((state_val_25012 === 5))
{var state_25011__$1 = state_25011;var statearr_25018_25038 = state_25011__$1;(statearr_25018_25038[2] = null);
(statearr_25018_25038[1] = 6);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25012 === 6))
{var inst_25006 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25019_25039 = state_25011__$1;(statearr_25019_25039[2] = inst_25006);
(statearr_25019_25039[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25012 === 7))
{var inst_24993 = (state_25011[9]);var inst_24993__$1 = (state_25011[2]);var inst_24994 = (inst_24993__$1 == null);var inst_24995 = cljs.core.not(inst_24994);var state_25011__$1 = (function (){var statearr_25020 = state_25011;(statearr_25020[9] = inst_24993__$1);
return statearr_25020;
})();if(inst_24995)
{var statearr_25021_25040 = state_25011__$1;(statearr_25021_25040[1] = 8);
} else
{var statearr_25022_25041 = state_25011__$1;(statearr_25022_25041[1] = 9);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_25012 === 8))
{var inst_24993 = (state_25011[9]);var state_25011__$1 = state_25011;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25011__$1,11,out,inst_24993);
} else
{if((state_val_25012 === 9))
{var state_25011__$1 = state_25011;var statearr_25023_25042 = state_25011__$1;(statearr_25023_25042[2] = null);
(statearr_25023_25042[1] = 10);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25012 === 10))
{var inst_25003 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25024_25043 = state_25011__$1;(statearr_25024_25043[2] = inst_25003);
(statearr_25024_25043[1] = 6);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25012 === 11))
{var inst_24988 = (state_25011[7]);var inst_24998 = (state_25011[2]);var inst_24999 = (inst_24988 + 1);var inst_24988__$1 = inst_24999;var state_25011__$1 = (function (){var statearr_25025 = state_25011;(statearr_25025[10] = inst_24998);
(statearr_25025[7] = inst_24988__$1);
return statearr_25025;
})();var statearr_25026_25044 = state_25011__$1;(statearr_25026_25044[2] = null);
(statearr_25026_25044[1] = 2);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_25030 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25030[0] = state_machine__5507__auto__);
(statearr_25030[1] = 1);
return statearr_25030;
});
var state_machine__5507__auto____1 = (function (state_25011){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25011);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25031){if((e25031 instanceof Object))
{var ex__5510__auto__ = e25031;var statearr_25032_25045 = state_25011;(statearr_25032_25045[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25011);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e25031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__25046 = state_25011;
state_25011 = G__25046;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25011){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25033 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25034);
return statearr_25033;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25118){var state_val_25119 = (state_25118[1]);if((state_val_25119 === 1))
{var inst_25095 = null;var state_25118__$1 = (function (){var statearr_25120 = state_25118;(statearr_25120[7] = inst_25095);
return statearr_25120;
})();var statearr_25121_25144 = state_25118__$1;(statearr_25121_25144[2] = null);
(statearr_25121_25144[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25119 === 2))
{var state_25118__$1 = state_25118;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25118__$1,4,ch);
} else
{if((state_val_25119 === 3))
{var inst_25115 = (state_25118[2]);var inst_25116 = cljs.core.async.close_BANG_(out);var state_25118__$1 = (function (){var statearr_25122 = state_25118;(statearr_25122[8] = inst_25115);
return statearr_25122;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25118__$1,inst_25116);
} else
{if((state_val_25119 === 4))
{var inst_25098 = (state_25118[9]);var inst_25098__$1 = (state_25118[2]);var inst_25099 = (inst_25098__$1 == null);var inst_25100 = cljs.core.not(inst_25099);var state_25118__$1 = (function (){var statearr_25123 = state_25118;(statearr_25123[9] = inst_25098__$1);
return statearr_25123;
})();if(inst_25100)
{var statearr_25124_25145 = state_25118__$1;(statearr_25124_25145[1] = 5);
} else
{var statearr_25125_25146 = state_25118__$1;(statearr_25125_25146[1] = 6);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_25119 === 5))
{var inst_25095 = (state_25118[7]);var inst_25098 = (state_25118[9]);var inst_25102 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25098,inst_25095);var state_25118__$1 = state_25118;if(inst_25102)
{var statearr_25126_25147 = state_25118__$1;(statearr_25126_25147[1] = 8);
} else
{var statearr_25127_25148 = state_25118__$1;(statearr_25127_25148[1] = 9);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_25119 === 6))
{var state_25118__$1 = state_25118;var statearr_25129_25149 = state_25118__$1;(statearr_25129_25149[2] = null);
(statearr_25129_25149[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25119 === 7))
{var inst_25113 = (state_25118[2]);var state_25118__$1 = state_25118;var statearr_25130_25150 = state_25118__$1;(statearr_25130_25150[2] = inst_25113);
(statearr_25130_25150[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25119 === 8))
{var inst_25095 = (state_25118[7]);var tmp25128 = inst_25095;var inst_25095__$1 = tmp25128;var state_25118__$1 = (function (){var statearr_25131 = state_25118;(statearr_25131[7] = inst_25095__$1);
return statearr_25131;
})();var statearr_25132_25151 = state_25118__$1;(statearr_25132_25151[2] = null);
(statearr_25132_25151[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25119 === 9))
{var inst_25098 = (state_25118[9]);var state_25118__$1 = state_25118;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25118__$1,11,out,inst_25098);
} else
{if((state_val_25119 === 10))
{var inst_25110 = (state_25118[2]);var state_25118__$1 = state_25118;var statearr_25133_25152 = state_25118__$1;(statearr_25133_25152[2] = inst_25110);
(statearr_25133_25152[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25119 === 11))
{var inst_25098 = (state_25118[9]);var inst_25107 = (state_25118[2]);var inst_25095 = inst_25098;var state_25118__$1 = (function (){var statearr_25134 = state_25118;(statearr_25134[7] = inst_25095);
(statearr_25134[10] = inst_25107);
return statearr_25134;
})();var statearr_25135_25153 = state_25118__$1;(statearr_25135_25153[2] = null);
(statearr_25135_25153[1] = 2);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_25139 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25139[0] = state_machine__5507__auto__);
(statearr_25139[1] = 1);
return statearr_25139;
});
var state_machine__5507__auto____1 = (function (state_25118){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25118);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25140){if((e25140 instanceof Object))
{var ex__5510__auto__ = e25140;var statearr_25141_25154 = state_25118;(statearr_25141_25154[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25118);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e25140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__25155 = state_25118;
state_25118 = G__25155;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25118){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25142 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25143);
return statearr_25142;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25260){var state_val_25261 = (state_25260[1]);if((state_val_25261 === 1))
{var inst_25223 = (new Array(n));var inst_25224 = inst_25223;var inst_25225 = 0;var state_25260__$1 = (function (){var statearr_25262 = state_25260;(statearr_25262[7] = inst_25225);
(statearr_25262[8] = inst_25224);
return statearr_25262;
})();var statearr_25263_25291 = state_25260__$1;(statearr_25263_25291[2] = null);
(statearr_25263_25291[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25261 === 2))
{var state_25260__$1 = state_25260;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25260__$1,4,ch);
} else
{if((state_val_25261 === 3))
{var inst_25258 = (state_25260[2]);var state_25260__$1 = state_25260;return cljs.core.async.impl.ioc_helpers.return_chan(state_25260__$1,inst_25258);
} else
{if((state_val_25261 === 4))
{var inst_25228 = (state_25260[9]);var inst_25228__$1 = (state_25260[2]);var inst_25229 = (inst_25228__$1 == null);var inst_25230 = cljs.core.not(inst_25229);var state_25260__$1 = (function (){var statearr_25264 = state_25260;(statearr_25264[9] = inst_25228__$1);
return statearr_25264;
})();if(inst_25230)
{var statearr_25265_25292 = state_25260__$1;(statearr_25265_25292[1] = 5);
} else
{var statearr_25266_25293 = state_25260__$1;(statearr_25266_25293[1] = 6);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_25261 === 5))
{var inst_25225 = (state_25260[7]);var inst_25224 = (state_25260[8]);var inst_25233 = (state_25260[10]);var inst_25228 = (state_25260[9]);var inst_25232 = (inst_25224[inst_25225] = inst_25228);var inst_25233__$1 = (inst_25225 + 1);var inst_25234 = (inst_25233__$1 < n);var state_25260__$1 = (function (){var statearr_25267 = state_25260;(statearr_25267[10] = inst_25233__$1);
(statearr_25267[11] = inst_25232);
return statearr_25267;
})();if(cljs.core.truth_(inst_25234))
{var statearr_25268_25294 = state_25260__$1;(statearr_25268_25294[1] = 8);
} else
{var statearr_25269_25295 = state_25260__$1;(statearr_25269_25295[1] = 9);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_25261 === 6))
{var inst_25225 = (state_25260[7]);var inst_25246 = (inst_25225 > 0);var state_25260__$1 = state_25260;if(cljs.core.truth_(inst_25246))
{var statearr_25271_25296 = state_25260__$1;(statearr_25271_25296[1] = 12);
} else
{var statearr_25272_25297 = state_25260__$1;(statearr_25272_25297[1] = 13);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_25261 === 7))
{var inst_25256 = (state_25260[2]);var state_25260__$1 = state_25260;var statearr_25273_25298 = state_25260__$1;(statearr_25273_25298[2] = inst_25256);
(statearr_25273_25298[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25261 === 8))
{var inst_25224 = (state_25260[8]);var inst_25233 = (state_25260[10]);var tmp25270 = inst_25224;var inst_25224__$1 = tmp25270;var inst_25225 = inst_25233;var state_25260__$1 = (function (){var statearr_25274 = state_25260;(statearr_25274[7] = inst_25225);
(statearr_25274[8] = inst_25224__$1);
return statearr_25274;
})();var statearr_25275_25299 = state_25260__$1;(statearr_25275_25299[2] = null);
(statearr_25275_25299[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25261 === 9))
{var inst_25224 = (state_25260[8]);var inst_25238 = cljs.core.vec(inst_25224);var state_25260__$1 = state_25260;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25260__$1,11,out,inst_25238);
} else
{if((state_val_25261 === 10))
{var inst_25244 = (state_25260[2]);var state_25260__$1 = state_25260;var statearr_25276_25300 = state_25260__$1;(statearr_25276_25300[2] = inst_25244);
(statearr_25276_25300[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25261 === 11))
{var inst_25240 = (state_25260[2]);var inst_25241 = (new Array(n));var inst_25224 = inst_25241;var inst_25225 = 0;var state_25260__$1 = (function (){var statearr_25277 = state_25260;(statearr_25277[7] = inst_25225);
(statearr_25277[8] = inst_25224);
(statearr_25277[12] = inst_25240);
return statearr_25277;
})();var statearr_25278_25301 = state_25260__$1;(statearr_25278_25301[2] = null);
(statearr_25278_25301[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25261 === 12))
{var inst_25224 = (state_25260[8]);var inst_25248 = cljs.core.vec(inst_25224);var state_25260__$1 = state_25260;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25260__$1,15,out,inst_25248);
} else
{if((state_val_25261 === 13))
{var state_25260__$1 = state_25260;var statearr_25279_25302 = state_25260__$1;(statearr_25279_25302[2] = null);
(statearr_25279_25302[1] = 14);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25261 === 14))
{var inst_25253 = (state_25260[2]);var inst_25254 = cljs.core.async.close_BANG_(out);var state_25260__$1 = (function (){var statearr_25280 = state_25260;(statearr_25280[13] = inst_25253);
return statearr_25280;
})();var statearr_25281_25303 = state_25260__$1;(statearr_25281_25303[2] = inst_25254);
(statearr_25281_25303[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25261 === 15))
{var inst_25250 = (state_25260[2]);var state_25260__$1 = state_25260;var statearr_25282_25304 = state_25260__$1;(statearr_25282_25304[2] = inst_25250);
(statearr_25282_25304[1] = 14);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_25286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25286[0] = state_machine__5507__auto__);
(statearr_25286[1] = 1);
return statearr_25286;
});
var state_machine__5507__auto____1 = (function (state_25260){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25260);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25287){if((e25287 instanceof Object))
{var ex__5510__auto__ = e25287;var statearr_25288_25305 = state_25260;(statearr_25288_25305[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25260);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e25287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__25306 = state_25260;
state_25260 = G__25306;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25260){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25289 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25290);
return statearr_25289;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25419){var state_val_25420 = (state_25419[1]);if((state_val_25420 === 1))
{var inst_25378 = [];var inst_25379 = inst_25378;var inst_25380 = cljs.core.constant$keyword$207;var state_25419__$1 = (function (){var statearr_25421 = state_25419;(statearr_25421[7] = inst_25379);
(statearr_25421[8] = inst_25380);
return statearr_25421;
})();var statearr_25422_25450 = state_25419__$1;(statearr_25422_25450[2] = null);
(statearr_25422_25450[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25420 === 2))
{var state_25419__$1 = state_25419;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25419__$1,4,ch);
} else
{if((state_val_25420 === 3))
{var inst_25417 = (state_25419[2]);var state_25419__$1 = state_25419;return cljs.core.async.impl.ioc_helpers.return_chan(state_25419__$1,inst_25417);
} else
{if((state_val_25420 === 4))
{var inst_25383 = (state_25419[9]);var inst_25383__$1 = (state_25419[2]);var inst_25384 = (inst_25383__$1 == null);var inst_25385 = cljs.core.not(inst_25384);var state_25419__$1 = (function (){var statearr_25423 = state_25419;(statearr_25423[9] = inst_25383__$1);
return statearr_25423;
})();if(inst_25385)
{var statearr_25424_25451 = state_25419__$1;(statearr_25424_25451[1] = 5);
} else
{var statearr_25425_25452 = state_25419__$1;(statearr_25425_25452[1] = 6);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_25420 === 5))
{var inst_25387 = (state_25419[10]);var inst_25383 = (state_25419[9]);var inst_25380 = (state_25419[8]);var inst_25387__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25383) : f.call(null,inst_25383));var inst_25388 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25387__$1,inst_25380);var inst_25389 = cljs.core.keyword_identical_QMARK_(inst_25380,cljs.core.constant$keyword$207);var inst_25390 = (inst_25388) || (inst_25389);var state_25419__$1 = (function (){var statearr_25426 = state_25419;(statearr_25426[10] = inst_25387__$1);
return statearr_25426;
})();if(cljs.core.truth_(inst_25390))
{var statearr_25427_25453 = state_25419__$1;(statearr_25427_25453[1] = 8);
} else
{var statearr_25428_25454 = state_25419__$1;(statearr_25428_25454[1] = 9);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_25420 === 6))
{var inst_25379 = (state_25419[7]);var inst_25404 = inst_25379.length;var inst_25405 = (inst_25404 > 0);var state_25419__$1 = state_25419;if(cljs.core.truth_(inst_25405))
{var statearr_25430_25455 = state_25419__$1;(statearr_25430_25455[1] = 12);
} else
{var statearr_25431_25456 = state_25419__$1;(statearr_25431_25456[1] = 13);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_25420 === 7))
{var inst_25415 = (state_25419[2]);var state_25419__$1 = state_25419;var statearr_25432_25457 = state_25419__$1;(statearr_25432_25457[2] = inst_25415);
(statearr_25432_25457[1] = 3);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25420 === 8))
{var inst_25387 = (state_25419[10]);var inst_25379 = (state_25419[7]);var inst_25383 = (state_25419[9]);var inst_25392 = inst_25379.push(inst_25383);var tmp25429 = inst_25379;var inst_25379__$1 = tmp25429;var inst_25380 = inst_25387;var state_25419__$1 = (function (){var statearr_25433 = state_25419;(statearr_25433[7] = inst_25379__$1);
(statearr_25433[8] = inst_25380);
(statearr_25433[11] = inst_25392);
return statearr_25433;
})();var statearr_25434_25458 = state_25419__$1;(statearr_25434_25458[2] = null);
(statearr_25434_25458[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25420 === 9))
{var inst_25379 = (state_25419[7]);var inst_25395 = cljs.core.vec(inst_25379);var state_25419__$1 = state_25419;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25419__$1,11,out,inst_25395);
} else
{if((state_val_25420 === 10))
{var inst_25402 = (state_25419[2]);var state_25419__$1 = state_25419;var statearr_25435_25459 = state_25419__$1;(statearr_25435_25459[2] = inst_25402);
(statearr_25435_25459[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25420 === 11))
{var inst_25387 = (state_25419[10]);var inst_25383 = (state_25419[9]);var inst_25397 = (state_25419[2]);var inst_25398 = [];var inst_25399 = inst_25398.push(inst_25383);var inst_25379 = inst_25398;var inst_25380 = inst_25387;var state_25419__$1 = (function (){var statearr_25436 = state_25419;(statearr_25436[7] = inst_25379);
(statearr_25436[12] = inst_25399);
(statearr_25436[13] = inst_25397);
(statearr_25436[8] = inst_25380);
return statearr_25436;
})();var statearr_25437_25460 = state_25419__$1;(statearr_25437_25460[2] = null);
(statearr_25437_25460[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25420 === 12))
{var inst_25379 = (state_25419[7]);var inst_25407 = cljs.core.vec(inst_25379);var state_25419__$1 = state_25419;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25419__$1,15,out,inst_25407);
} else
{if((state_val_25420 === 13))
{var state_25419__$1 = state_25419;var statearr_25438_25461 = state_25419__$1;(statearr_25438_25461[2] = null);
(statearr_25438_25461[1] = 14);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25420 === 14))
{var inst_25412 = (state_25419[2]);var inst_25413 = cljs.core.async.close_BANG_(out);var state_25419__$1 = (function (){var statearr_25439 = state_25419;(statearr_25439[14] = inst_25412);
return statearr_25439;
})();var statearr_25440_25462 = state_25419__$1;(statearr_25440_25462[2] = inst_25413);
(statearr_25440_25462[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_25420 === 15))
{var inst_25409 = (state_25419[2]);var state_25419__$1 = state_25419;var statearr_25441_25463 = state_25419__$1;(statearr_25441_25463[2] = inst_25409);
(statearr_25441_25463[1] = 14);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_25445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25445[0] = state_machine__5507__auto__);
(statearr_25445[1] = 1);
return statearr_25445;
});
var state_machine__5507__auto____1 = (function (state_25419){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25419);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25446){if((e25446 instanceof Object))
{var ex__5510__auto__ = e25446;var statearr_25447_25464 = state_25419;(statearr_25447_25464[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25419);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e25446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__25465 = state_25419;
state_25419 = G__25465;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25419){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25448 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25449);
return statearr_25448;
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
