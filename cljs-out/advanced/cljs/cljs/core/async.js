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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20887 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20887 = (function (f,fn_handler,meta20888){
this.f = f;
this.fn_handler = fn_handler;
this.meta20888 = meta20888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20887.cljs$lang$type = true;
cljs.core.async.t20887.cljs$lang$ctorStr = "cljs.core.async/t20887";
cljs.core.async.t20887.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20887");
});
cljs.core.async.t20887.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20887.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20887.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20889){var self__ = this;
var _20889__$1 = this;return self__.meta20888;
});
cljs.core.async.t20887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20889,meta20888__$1){var self__ = this;
var _20889__$1 = this;return (new cljs.core.async.t20887(self__.f,self__.fn_handler,meta20888__$1));
});
cljs.core.async.__GT_t20887 = (function __GT_t20887(f__$1,fn_handler__$1,meta20888){return (new cljs.core.async.t20887(f__$1,fn_handler__$1,meta20888));
});
}
return (new cljs.core.async.t20887(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20891 = buff;if(G__20891)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__20891.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20891.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20891);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20891);
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
{var val_20892 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20892) : fn1.call(null,val_20892));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20892) : fn1.call(null,val_20892));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___20893 = n;var x_20894 = 0;while(true){
if((x_20894 < n__4248__auto___20893))
{(a[x_20894] = 0);
{
var G__20895 = (x_20894 + 1);
x_20894 = G__20895;
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
var G__20896 = (i + 1);
i = G__20896;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t20900 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20900 = (function (flag,alt_flag,meta20901){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20901 = meta20901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20900.cljs$lang$type = true;
cljs.core.async.t20900.cljs$lang$ctorStr = "cljs.core.async/t20900";
cljs.core.async.t20900.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20900");
});
cljs.core.async.t20900.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t20900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t20900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20902){var self__ = this;
var _20902__$1 = this;return self__.meta20901;
});
cljs.core.async.t20900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20902,meta20901__$1){var self__ = this;
var _20902__$1 = this;return (new cljs.core.async.t20900(self__.flag,self__.alt_flag,meta20901__$1));
});
cljs.core.async.__GT_t20900 = (function __GT_t20900(flag__$1,alt_flag__$1,meta20901){return (new cljs.core.async.t20900(flag__$1,alt_flag__$1,meta20901));
});
}
return (new cljs.core.async.t20900(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20906 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20906 = (function (cb,flag,alt_handler,meta20907){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20907 = meta20907;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20906.cljs$lang$type = true;
cljs.core.async.t20906.cljs$lang$ctorStr = "cljs.core.async/t20906";
cljs.core.async.t20906.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20906");
});
cljs.core.async.t20906.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t20906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t20906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20908){var self__ = this;
var _20908__$1 = this;return self__.meta20907;
});
cljs.core.async.t20906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20908,meta20907__$1){var self__ = this;
var _20908__$1 = this;return (new cljs.core.async.t20906(self__.cb,self__.flag,self__.alt_handler,meta20907__$1));
});
cljs.core.async.__GT_t20906 = (function __GT_t20906(cb__$1,flag__$1,alt_handler__$1,meta20907){return (new cljs.core.async.t20906(cb__$1,flag__$1,alt_handler__$1,meta20907));
});
}
return (new cljs.core.async.t20906(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20909_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20909_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20909_SHARP_,port], null)));
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
var G__20910 = (i + 1);
i = G__20910;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$110))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$110], null));
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
var alts_BANG___delegate = function (ports,p__20911){var map__20913 = p__20911;var map__20913__$1 = ((cljs.core.seq_QMARK_(map__20913))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20913):map__20913);var opts = map__20913__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__20911 = null;if (arguments.length > 1) {
  p__20911 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20911);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20914){
var ports = cljs.core.first(arglist__20914);
var p__20911 = cljs.core.rest(arglist__20914);
return alts_BANG___delegate(ports,p__20911);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20922 = (function (ch,f,map_LT_,meta20923){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20923 = meta20923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20922.cljs$lang$type = true;
cljs.core.async.t20922.cljs$lang$ctorStr = "cljs.core.async/t20922";
cljs.core.async.t20922.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20922");
});
cljs.core.async.t20922.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t20922.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t20925 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20925 = (function (fn1,_,meta20923,ch,f,map_LT_,meta20926){
this.fn1 = fn1;
this._ = _;
this.meta20923 = meta20923;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20926 = meta20926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20925.cljs$lang$type = true;
cljs.core.async.t20925.cljs$lang$ctorStr = "cljs.core.async/t20925";
cljs.core.async.t20925.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20925");
});
cljs.core.async.t20925.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t20925.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t20925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__20915_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__20915_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20915_SHARP_) : self__.f.call(null,p1__20915_SHARP_)))) : f1.call(null,(((p1__20915_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20915_SHARP_) : self__.f.call(null,p1__20915_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t20925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20927){var self__ = this;
var _20927__$1 = this;return self__.meta20926;
});
cljs.core.async.t20925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20927,meta20926__$1){var self__ = this;
var _20927__$1 = this;return (new cljs.core.async.t20925(self__.fn1,self__._,self__.meta20923,self__.ch,self__.f,self__.map_LT_,meta20926__$1));
});
cljs.core.async.__GT_t20925 = (function __GT_t20925(fn1__$1,___$2,meta20923__$1,ch__$2,f__$2,map_LT___$2,meta20926){return (new cljs.core.async.t20925(fn1__$1,___$2,meta20923__$1,ch__$2,f__$2,map_LT___$2,meta20926));
});
}
return (new cljs.core.async.t20925(fn1,___$1,self__.meta20923,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t20922.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20924){var self__ = this;
var _20924__$1 = this;return self__.meta20923;
});
cljs.core.async.t20922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20924,meta20923__$1){var self__ = this;
var _20924__$1 = this;return (new cljs.core.async.t20922(self__.ch,self__.f,self__.map_LT_,meta20923__$1));
});
cljs.core.async.__GT_t20922 = (function __GT_t20922(ch__$1,f__$1,map_LT___$1,meta20923){return (new cljs.core.async.t20922(ch__$1,f__$1,map_LT___$1,meta20923));
});
}
return (new cljs.core.async.t20922(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20931 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20931 = (function (ch,f,map_GT_,meta20932){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20932 = meta20932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20931.cljs$lang$type = true;
cljs.core.async.t20931.cljs$lang$ctorStr = "cljs.core.async/t20931";
cljs.core.async.t20931.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20931");
});
cljs.core.async.t20931.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t20931.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20931.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20933){var self__ = this;
var _20933__$1 = this;return self__.meta20932;
});
cljs.core.async.t20931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20933,meta20932__$1){var self__ = this;
var _20933__$1 = this;return (new cljs.core.async.t20931(self__.ch,self__.f,self__.map_GT_,meta20932__$1));
});
cljs.core.async.__GT_t20931 = (function __GT_t20931(ch__$1,f__$1,map_GT___$1,meta20932){return (new cljs.core.async.t20931(ch__$1,f__$1,map_GT___$1,meta20932));
});
}
return (new cljs.core.async.t20931(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20937 = (function (ch,p,filter_GT_,meta20938){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20938 = meta20938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20937.cljs$lang$type = true;
cljs.core.async.t20937.cljs$lang$ctorStr = "cljs.core.async/t20937";
cljs.core.async.t20937.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20937");
});
cljs.core.async.t20937.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t20937.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20937.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20939){var self__ = this;
var _20939__$1 = this;return self__.meta20938;
});
cljs.core.async.t20937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20939,meta20938__$1){var self__ = this;
var _20939__$1 = this;return (new cljs.core.async.t20937(self__.ch,self__.p,self__.filter_GT_,meta20938__$1));
});
cljs.core.async.__GT_t20937 = (function __GT_t20937(ch__$1,p__$1,filter_GT___$1,meta20938){return (new cljs.core.async.t20937(ch__$1,p__$1,filter_GT___$1,meta20938));
});
}
return (new cljs.core.async.t20937(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___21022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21001){var state_val_21002 = (state_21001[1]);if((state_val_21002 === 1))
{var state_21001__$1 = state_21001;var statearr_21003_21023 = state_21001__$1;(statearr_21003_21023[2] = null);
(statearr_21003_21023[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21002 === 2))
{var state_21001__$1 = state_21001;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21001__$1,4,ch);
} else
{if((state_val_21002 === 3))
{var inst_20999 = (state_21001[2]);var state_21001__$1 = state_21001;return cljs.core.async.impl.ioc_helpers.return_chan(state_21001__$1,inst_20999);
} else
{if((state_val_21002 === 4))
{var inst_20983 = (state_21001[7]);var inst_20983__$1 = (state_21001[2]);var inst_20984 = (inst_20983__$1 == null);var state_21001__$1 = (function (){var statearr_21004 = state_21001;(statearr_21004[7] = inst_20983__$1);
return statearr_21004;
})();if(cljs.core.truth_(inst_20984))
{var statearr_21005_21024 = state_21001__$1;(statearr_21005_21024[1] = 5);
} else
{var statearr_21006_21025 = state_21001__$1;(statearr_21006_21025[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21002 === 5))
{var inst_20986 = cljs.core.async.close_BANG_(out);var state_21001__$1 = state_21001;var statearr_21007_21026 = state_21001__$1;(statearr_21007_21026[2] = inst_20986);
(statearr_21007_21026[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21002 === 6))
{var inst_20983 = (state_21001[7]);var inst_20988 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20983) : p.call(null,inst_20983));var state_21001__$1 = state_21001;if(cljs.core.truth_(inst_20988))
{var statearr_21008_21027 = state_21001__$1;(statearr_21008_21027[1] = 8);
} else
{var statearr_21009_21028 = state_21001__$1;(statearr_21009_21028[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21002 === 7))
{var inst_20997 = (state_21001[2]);var state_21001__$1 = state_21001;var statearr_21010_21029 = state_21001__$1;(statearr_21010_21029[2] = inst_20997);
(statearr_21010_21029[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21002 === 8))
{var inst_20983 = (state_21001[7]);var state_21001__$1 = state_21001;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21001__$1,11,out,inst_20983);
} else
{if((state_val_21002 === 9))
{var state_21001__$1 = state_21001;var statearr_21011_21030 = state_21001__$1;(statearr_21011_21030[2] = null);
(statearr_21011_21030[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21002 === 10))
{var inst_20994 = (state_21001[2]);var state_21001__$1 = (function (){var statearr_21012 = state_21001;(statearr_21012[8] = inst_20994);
return statearr_21012;
})();var statearr_21013_21031 = state_21001__$1;(statearr_21013_21031[2] = null);
(statearr_21013_21031[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21002 === 11))
{var inst_20991 = (state_21001[2]);var state_21001__$1 = state_21001;var statearr_21014_21032 = state_21001__$1;(statearr_21014_21032[2] = inst_20991);
(statearr_21014_21032[1] = 10);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_21018 = [null,null,null,null,null,null,null,null,null];(statearr_21018[0] = state_machine__5507__auto__);
(statearr_21018[1] = 1);
return statearr_21018;
});
var state_machine__5507__auto____1 = (function (state_21001){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21001);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21019){if((e21019 instanceof Object))
{var ex__5510__auto__ = e21019;var statearr_21020_21033 = state_21001;(statearr_21020_21033[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21001);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e21019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21034 = state_21001;
state_21001 = G__21034;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21001){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21021 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21022);
return statearr_21021;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21186){var state_val_21187 = (state_21186[1]);if((state_val_21187 === 1))
{var state_21186__$1 = state_21186;var statearr_21188_21225 = state_21186__$1;(statearr_21188_21225[2] = null);
(statearr_21188_21225[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 2))
{var state_21186__$1 = state_21186;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21186__$1,4,in$);
} else
{if((state_val_21187 === 3))
{var inst_21184 = (state_21186[2]);var state_21186__$1 = state_21186;return cljs.core.async.impl.ioc_helpers.return_chan(state_21186__$1,inst_21184);
} else
{if((state_val_21187 === 4))
{var inst_21132 = (state_21186[7]);var inst_21132__$1 = (state_21186[2]);var inst_21133 = (inst_21132__$1 == null);var state_21186__$1 = (function (){var statearr_21189 = state_21186;(statearr_21189[7] = inst_21132__$1);
return statearr_21189;
})();if(cljs.core.truth_(inst_21133))
{var statearr_21190_21226 = state_21186__$1;(statearr_21190_21226[1] = 5);
} else
{var statearr_21191_21227 = state_21186__$1;(statearr_21191_21227[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 5))
{var inst_21135 = cljs.core.async.close_BANG_(out);var state_21186__$1 = state_21186;var statearr_21192_21228 = state_21186__$1;(statearr_21192_21228[2] = inst_21135);
(statearr_21192_21228[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 6))
{var inst_21132 = (state_21186[7]);var inst_21137 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21132) : f.call(null,inst_21132));var inst_21142 = cljs.core.seq(inst_21137);var inst_21143 = inst_21142;var inst_21144 = null;var inst_21145 = 0;var inst_21146 = 0;var state_21186__$1 = (function (){var statearr_21193 = state_21186;(statearr_21193[8] = inst_21146);
(statearr_21193[9] = inst_21145);
(statearr_21193[10] = inst_21144);
(statearr_21193[11] = inst_21143);
return statearr_21193;
})();var statearr_21194_21229 = state_21186__$1;(statearr_21194_21229[2] = null);
(statearr_21194_21229[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 7))
{var inst_21182 = (state_21186[2]);var state_21186__$1 = state_21186;var statearr_21195_21230 = state_21186__$1;(statearr_21195_21230[2] = inst_21182);
(statearr_21195_21230[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 8))
{var inst_21146 = (state_21186[8]);var inst_21145 = (state_21186[9]);var inst_21148 = (inst_21146 < inst_21145);var inst_21149 = inst_21148;var state_21186__$1 = state_21186;if(cljs.core.truth_(inst_21149))
{var statearr_21196_21231 = state_21186__$1;(statearr_21196_21231[1] = 10);
} else
{var statearr_21197_21232 = state_21186__$1;(statearr_21197_21232[1] = 11);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 9))
{var inst_21179 = (state_21186[2]);var state_21186__$1 = (function (){var statearr_21198 = state_21186;(statearr_21198[12] = inst_21179);
return statearr_21198;
})();var statearr_21199_21233 = state_21186__$1;(statearr_21199_21233[2] = null);
(statearr_21199_21233[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 10))
{var inst_21146 = (state_21186[8]);var inst_21144 = (state_21186[10]);var inst_21151 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21144,inst_21146);var state_21186__$1 = state_21186;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21186__$1,13,out,inst_21151);
} else
{if((state_val_21187 === 11))
{var inst_21143 = (state_21186[11]);var inst_21157 = (state_21186[13]);var inst_21157__$1 = cljs.core.seq(inst_21143);var state_21186__$1 = (function (){var statearr_21203 = state_21186;(statearr_21203[13] = inst_21157__$1);
return statearr_21203;
})();if(inst_21157__$1)
{var statearr_21204_21234 = state_21186__$1;(statearr_21204_21234[1] = 14);
} else
{var statearr_21205_21235 = state_21186__$1;(statearr_21205_21235[1] = 15);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 12))
{var inst_21177 = (state_21186[2]);var state_21186__$1 = state_21186;var statearr_21206_21236 = state_21186__$1;(statearr_21206_21236[2] = inst_21177);
(statearr_21206_21236[1] = 9);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 13))
{var inst_21146 = (state_21186[8]);var inst_21145 = (state_21186[9]);var inst_21144 = (state_21186[10]);var inst_21143 = (state_21186[11]);var inst_21153 = (state_21186[2]);var inst_21154 = (inst_21146 + 1);var tmp21200 = inst_21145;var tmp21201 = inst_21144;var tmp21202 = inst_21143;var inst_21143__$1 = tmp21202;var inst_21144__$1 = tmp21201;var inst_21145__$1 = tmp21200;var inst_21146__$1 = inst_21154;var state_21186__$1 = (function (){var statearr_21207 = state_21186;(statearr_21207[8] = inst_21146__$1);
(statearr_21207[9] = inst_21145__$1);
(statearr_21207[10] = inst_21144__$1);
(statearr_21207[11] = inst_21143__$1);
(statearr_21207[14] = inst_21153);
return statearr_21207;
})();var statearr_21208_21237 = state_21186__$1;(statearr_21208_21237[2] = null);
(statearr_21208_21237[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 14))
{var inst_21157 = (state_21186[13]);var inst_21159 = cljs.core.chunked_seq_QMARK_(inst_21157);var state_21186__$1 = state_21186;if(inst_21159)
{var statearr_21209_21238 = state_21186__$1;(statearr_21209_21238[1] = 17);
} else
{var statearr_21210_21239 = state_21186__$1;(statearr_21210_21239[1] = 18);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 15))
{var state_21186__$1 = state_21186;var statearr_21211_21240 = state_21186__$1;(statearr_21211_21240[2] = null);
(statearr_21211_21240[1] = 16);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 16))
{var inst_21175 = (state_21186[2]);var state_21186__$1 = state_21186;var statearr_21212_21241 = state_21186__$1;(statearr_21212_21241[2] = inst_21175);
(statearr_21212_21241[1] = 12);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 17))
{var inst_21157 = (state_21186[13]);var inst_21161 = cljs.core.chunk_first(inst_21157);var inst_21162 = cljs.core.chunk_rest(inst_21157);var inst_21163 = cljs.core.count(inst_21161);var inst_21143 = inst_21162;var inst_21144 = inst_21161;var inst_21145 = inst_21163;var inst_21146 = 0;var state_21186__$1 = (function (){var statearr_21213 = state_21186;(statearr_21213[8] = inst_21146);
(statearr_21213[9] = inst_21145);
(statearr_21213[10] = inst_21144);
(statearr_21213[11] = inst_21143);
return statearr_21213;
})();var statearr_21214_21242 = state_21186__$1;(statearr_21214_21242[2] = null);
(statearr_21214_21242[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 18))
{var inst_21157 = (state_21186[13]);var inst_21166 = cljs.core.first(inst_21157);var state_21186__$1 = state_21186;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21186__$1,20,out,inst_21166);
} else
{if((state_val_21187 === 19))
{var inst_21172 = (state_21186[2]);var state_21186__$1 = state_21186;var statearr_21215_21243 = state_21186__$1;(statearr_21215_21243[2] = inst_21172);
(statearr_21215_21243[1] = 16);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21187 === 20))
{var inst_21157 = (state_21186[13]);var inst_21168 = (state_21186[2]);var inst_21169 = cljs.core.next(inst_21157);var inst_21143 = inst_21169;var inst_21144 = null;var inst_21145 = 0;var inst_21146 = 0;var state_21186__$1 = (function (){var statearr_21216 = state_21186;(statearr_21216[8] = inst_21146);
(statearr_21216[9] = inst_21145);
(statearr_21216[10] = inst_21144);
(statearr_21216[11] = inst_21143);
(statearr_21216[15] = inst_21168);
return statearr_21216;
})();var statearr_21217_21244 = state_21186__$1;(statearr_21217_21244[2] = null);
(statearr_21217_21244[1] = 8);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_21221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21221[0] = state_machine__5507__auto__);
(statearr_21221[1] = 1);
return statearr_21221;
});
var state_machine__5507__auto____1 = (function (state_21186){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21186);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21222){if((e21222 instanceof Object))
{var ex__5510__auto__ = e21222;var statearr_21223_21245 = state_21186;(statearr_21223_21245[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21186);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e21222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21246 = state_21186;
state_21186 = G__21246;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21186){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21224 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21224;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___21327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21306){var state_val_21307 = (state_21306[1]);if((state_val_21307 === 1))
{var state_21306__$1 = state_21306;var statearr_21308_21328 = state_21306__$1;(statearr_21308_21328[2] = null);
(statearr_21308_21328[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21307 === 2))
{var state_21306__$1 = state_21306;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21306__$1,4,from);
} else
{if((state_val_21307 === 3))
{var inst_21304 = (state_21306[2]);var state_21306__$1 = state_21306;return cljs.core.async.impl.ioc_helpers.return_chan(state_21306__$1,inst_21304);
} else
{if((state_val_21307 === 4))
{var inst_21289 = (state_21306[7]);var inst_21289__$1 = (state_21306[2]);var inst_21290 = (inst_21289__$1 == null);var state_21306__$1 = (function (){var statearr_21309 = state_21306;(statearr_21309[7] = inst_21289__$1);
return statearr_21309;
})();if(cljs.core.truth_(inst_21290))
{var statearr_21310_21329 = state_21306__$1;(statearr_21310_21329[1] = 5);
} else
{var statearr_21311_21330 = state_21306__$1;(statearr_21311_21330[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21307 === 5))
{var state_21306__$1 = state_21306;if(cljs.core.truth_(close_QMARK_))
{var statearr_21312_21331 = state_21306__$1;(statearr_21312_21331[1] = 8);
} else
{var statearr_21313_21332 = state_21306__$1;(statearr_21313_21332[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21307 === 6))
{var inst_21289 = (state_21306[7]);var state_21306__$1 = state_21306;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21306__$1,11,to,inst_21289);
} else
{if((state_val_21307 === 7))
{var inst_21302 = (state_21306[2]);var state_21306__$1 = state_21306;var statearr_21314_21333 = state_21306__$1;(statearr_21314_21333[2] = inst_21302);
(statearr_21314_21333[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21307 === 8))
{var inst_21293 = cljs.core.async.close_BANG_(to);var state_21306__$1 = state_21306;var statearr_21315_21334 = state_21306__$1;(statearr_21315_21334[2] = inst_21293);
(statearr_21315_21334[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21307 === 9))
{var state_21306__$1 = state_21306;var statearr_21316_21335 = state_21306__$1;(statearr_21316_21335[2] = null);
(statearr_21316_21335[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21307 === 10))
{var inst_21296 = (state_21306[2]);var state_21306__$1 = state_21306;var statearr_21317_21336 = state_21306__$1;(statearr_21317_21336[2] = inst_21296);
(statearr_21317_21336[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21307 === 11))
{var inst_21299 = (state_21306[2]);var state_21306__$1 = (function (){var statearr_21318 = state_21306;(statearr_21318[8] = inst_21299);
return statearr_21318;
})();var statearr_21319_21337 = state_21306__$1;(statearr_21319_21337[2] = null);
(statearr_21319_21337[1] = 2);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_21323 = [null,null,null,null,null,null,null,null,null];(statearr_21323[0] = state_machine__5507__auto__);
(statearr_21323[1] = 1);
return statearr_21323;
});
var state_machine__5507__auto____1 = (function (state_21306){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21306);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21324){if((e21324 instanceof Object))
{var ex__5510__auto__ = e21324;var statearr_21325_21338 = state_21306;(statearr_21325_21338[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21306);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e21324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21339 = state_21306;
state_21306 = G__21339;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21306){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21326 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21327);
return statearr_21326;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___21426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21404){var state_val_21405 = (state_21404[1]);if((state_val_21405 === 1))
{var state_21404__$1 = state_21404;var statearr_21406_21427 = state_21404__$1;(statearr_21406_21427[2] = null);
(statearr_21406_21427[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21405 === 2))
{var state_21404__$1 = state_21404;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21404__$1,4,ch);
} else
{if((state_val_21405 === 3))
{var inst_21402 = (state_21404[2]);var state_21404__$1 = state_21404;return cljs.core.async.impl.ioc_helpers.return_chan(state_21404__$1,inst_21402);
} else
{if((state_val_21405 === 4))
{var inst_21385 = (state_21404[7]);var inst_21385__$1 = (state_21404[2]);var inst_21386 = (inst_21385__$1 == null);var state_21404__$1 = (function (){var statearr_21407 = state_21404;(statearr_21407[7] = inst_21385__$1);
return statearr_21407;
})();if(cljs.core.truth_(inst_21386))
{var statearr_21408_21428 = state_21404__$1;(statearr_21408_21428[1] = 5);
} else
{var statearr_21409_21429 = state_21404__$1;(statearr_21409_21429[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21405 === 5))
{var inst_21388 = cljs.core.async.close_BANG_(tc);var inst_21389 = cljs.core.async.close_BANG_(fc);var state_21404__$1 = (function (){var statearr_21410 = state_21404;(statearr_21410[8] = inst_21388);
return statearr_21410;
})();var statearr_21411_21430 = state_21404__$1;(statearr_21411_21430[2] = inst_21389);
(statearr_21411_21430[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21405 === 6))
{var inst_21385 = (state_21404[7]);var inst_21391 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21385) : p.call(null,inst_21385));var state_21404__$1 = state_21404;if(cljs.core.truth_(inst_21391))
{var statearr_21412_21431 = state_21404__$1;(statearr_21412_21431[1] = 9);
} else
{var statearr_21413_21432 = state_21404__$1;(statearr_21413_21432[1] = 10);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21405 === 7))
{var inst_21400 = (state_21404[2]);var state_21404__$1 = state_21404;var statearr_21414_21433 = state_21404__$1;(statearr_21414_21433[2] = inst_21400);
(statearr_21414_21433[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21405 === 8))
{var inst_21397 = (state_21404[2]);var state_21404__$1 = (function (){var statearr_21415 = state_21404;(statearr_21415[9] = inst_21397);
return statearr_21415;
})();var statearr_21416_21434 = state_21404__$1;(statearr_21416_21434[2] = null);
(statearr_21416_21434[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21405 === 9))
{var state_21404__$1 = state_21404;var statearr_21417_21435 = state_21404__$1;(statearr_21417_21435[2] = tc);
(statearr_21417_21435[1] = 11);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21405 === 10))
{var state_21404__$1 = state_21404;var statearr_21418_21436 = state_21404__$1;(statearr_21418_21436[2] = fc);
(statearr_21418_21436[1] = 11);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21405 === 11))
{var inst_21385 = (state_21404[7]);var inst_21395 = (state_21404[2]);var state_21404__$1 = state_21404;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21404__$1,8,inst_21395,inst_21385);
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
var state_machine__5507__auto____0 = (function (){var statearr_21422 = [null,null,null,null,null,null,null,null,null,null];(statearr_21422[0] = state_machine__5507__auto__);
(statearr_21422[1] = 1);
return statearr_21422;
});
var state_machine__5507__auto____1 = (function (state_21404){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21404);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21423){if((e21423 instanceof Object))
{var ex__5510__auto__ = e21423;var statearr_21424_21437 = state_21404;(statearr_21424_21437[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21404);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e21423;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21438 = state_21404;
state_21404 = G__21438;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21404){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21425 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21426);
return statearr_21425;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21485){var state_val_21486 = (state_21485[1]);if((state_val_21486 === 7))
{var inst_21481 = (state_21485[2]);var state_21485__$1 = state_21485;var statearr_21487_21503 = state_21485__$1;(statearr_21487_21503[2] = inst_21481);
(statearr_21487_21503[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21486 === 6))
{var inst_21471 = (state_21485[7]);var inst_21474 = (state_21485[8]);var inst_21478 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21471,inst_21474) : f.call(null,inst_21471,inst_21474));var inst_21471__$1 = inst_21478;var state_21485__$1 = (function (){var statearr_21488 = state_21485;(statearr_21488[7] = inst_21471__$1);
return statearr_21488;
})();var statearr_21489_21504 = state_21485__$1;(statearr_21489_21504[2] = null);
(statearr_21489_21504[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21486 === 5))
{var inst_21471 = (state_21485[7]);var state_21485__$1 = state_21485;var statearr_21490_21505 = state_21485__$1;(statearr_21490_21505[2] = inst_21471);
(statearr_21490_21505[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21486 === 4))
{var inst_21474 = (state_21485[8]);var inst_21474__$1 = (state_21485[2]);var inst_21475 = (inst_21474__$1 == null);var state_21485__$1 = (function (){var statearr_21491 = state_21485;(statearr_21491[8] = inst_21474__$1);
return statearr_21491;
})();if(cljs.core.truth_(inst_21475))
{var statearr_21492_21506 = state_21485__$1;(statearr_21492_21506[1] = 5);
} else
{var statearr_21493_21507 = state_21485__$1;(statearr_21493_21507[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21486 === 3))
{var inst_21483 = (state_21485[2]);var state_21485__$1 = state_21485;return cljs.core.async.impl.ioc_helpers.return_chan(state_21485__$1,inst_21483);
} else
{if((state_val_21486 === 2))
{var state_21485__$1 = state_21485;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21485__$1,4,ch);
} else
{if((state_val_21486 === 1))
{var inst_21471 = init;var state_21485__$1 = (function (){var statearr_21494 = state_21485;(statearr_21494[7] = inst_21471);
return statearr_21494;
})();var statearr_21495_21508 = state_21485__$1;(statearr_21495_21508[2] = null);
(statearr_21495_21508[1] = 2);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_21499 = [null,null,null,null,null,null,null,null,null];(statearr_21499[0] = state_machine__5507__auto__);
(statearr_21499[1] = 1);
return statearr_21499;
});
var state_machine__5507__auto____1 = (function (state_21485){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21485);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21500){if((e21500 instanceof Object))
{var ex__5510__auto__ = e21500;var statearr_21501_21509 = state_21485;(statearr_21501_21509[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21485);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e21500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21510 = state_21485;
state_21485 = G__21510;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21485){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21502 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21502;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21572){var state_val_21573 = (state_21572[1]);if((state_val_21573 === 1))
{var inst_21552 = cljs.core.seq(coll);var inst_21553 = inst_21552;var state_21572__$1 = (function (){var statearr_21574 = state_21572;(statearr_21574[7] = inst_21553);
return statearr_21574;
})();var statearr_21575_21593 = state_21572__$1;(statearr_21575_21593[2] = null);
(statearr_21575_21593[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21573 === 2))
{var inst_21553 = (state_21572[7]);var state_21572__$1 = state_21572;if(cljs.core.truth_(inst_21553))
{var statearr_21576_21594 = state_21572__$1;(statearr_21576_21594[1] = 4);
} else
{var statearr_21577_21595 = state_21572__$1;(statearr_21577_21595[1] = 5);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21573 === 3))
{var inst_21570 = (state_21572[2]);var state_21572__$1 = state_21572;return cljs.core.async.impl.ioc_helpers.return_chan(state_21572__$1,inst_21570);
} else
{if((state_val_21573 === 4))
{var inst_21553 = (state_21572[7]);var inst_21556 = cljs.core.first(inst_21553);var state_21572__$1 = state_21572;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21572__$1,7,ch,inst_21556);
} else
{if((state_val_21573 === 5))
{var state_21572__$1 = state_21572;if(cljs.core.truth_(close_QMARK_))
{var statearr_21578_21596 = state_21572__$1;(statearr_21578_21596[1] = 8);
} else
{var statearr_21579_21597 = state_21572__$1;(statearr_21579_21597[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21573 === 6))
{var inst_21568 = (state_21572[2]);var state_21572__$1 = state_21572;var statearr_21580_21598 = state_21572__$1;(statearr_21580_21598[2] = inst_21568);
(statearr_21580_21598[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21573 === 7))
{var inst_21553 = (state_21572[7]);var inst_21558 = (state_21572[2]);var inst_21559 = cljs.core.next(inst_21553);var inst_21553__$1 = inst_21559;var state_21572__$1 = (function (){var statearr_21581 = state_21572;(statearr_21581[8] = inst_21558);
(statearr_21581[7] = inst_21553__$1);
return statearr_21581;
})();var statearr_21582_21599 = state_21572__$1;(statearr_21582_21599[2] = null);
(statearr_21582_21599[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21573 === 8))
{var inst_21563 = cljs.core.async.close_BANG_(ch);var state_21572__$1 = state_21572;var statearr_21583_21600 = state_21572__$1;(statearr_21583_21600[2] = inst_21563);
(statearr_21583_21600[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21573 === 9))
{var state_21572__$1 = state_21572;var statearr_21584_21601 = state_21572__$1;(statearr_21584_21601[2] = null);
(statearr_21584_21601[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21573 === 10))
{var inst_21566 = (state_21572[2]);var state_21572__$1 = state_21572;var statearr_21585_21602 = state_21572__$1;(statearr_21585_21602[2] = inst_21566);
(statearr_21585_21602[1] = 6);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_21589 = [null,null,null,null,null,null,null,null,null];(statearr_21589[0] = state_machine__5507__auto__);
(statearr_21589[1] = 1);
return statearr_21589;
});
var state_machine__5507__auto____1 = (function (state_21572){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21572);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21590){if((e21590 instanceof Object))
{var ex__5510__auto__ = e21590;var statearr_21591_21603 = state_21572;(statearr_21591_21603[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21572);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e21590;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__21604 = state_21572;
state_21572 = G__21604;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21572){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21592 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21592;
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
cljs.core.async.Mux = (function (){var obj21606 = {};return obj21606;
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
cljs.core.async.Mult = (function (){var obj21608 = {};return obj21608;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21832 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21832 = (function (cs,ch,mult,meta21833){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21833 = meta21833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21832.cljs$lang$type = true;
cljs.core.async.t21832.cljs$lang$ctorStr = "cljs.core.async/t21832";
cljs.core.async.t21832.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21832");
});})(cs))
;
cljs.core.async.t21832.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21832.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21832.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21832.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21832.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21832.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21832.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21834){var self__ = this;
var _21834__$1 = this;return self__.meta21833;
});})(cs))
;
cljs.core.async.t21832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21834,meta21833__$1){var self__ = this;
var _21834__$1 = this;return (new cljs.core.async.t21832(self__.cs,self__.ch,self__.mult,meta21833__$1));
});})(cs))
;
cljs.core.async.__GT_t21832 = ((function (cs){
return (function __GT_t21832(cs__$1,ch__$1,mult__$1,meta21833){return (new cljs.core.async.t21832(cs__$1,ch__$1,mult__$1,meta21833));
});})(cs))
;
}
return (new cljs.core.async.t21832(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___22055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21969){var state_val_21970 = (state_21969[1]);if((state_val_21970 === 32))
{var inst_21913 = (state_21969[7]);var inst_21837 = (state_21969[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21969,31,Object,null,30);var inst_21920 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21913,inst_21837,done);var state_21969__$1 = state_21969;var statearr_21971_22056 = state_21969__$1;(statearr_21971_22056[2] = inst_21920);
cljs.core.async.impl.ioc_helpers.process_exception(state_21969__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 1))
{var state_21969__$1 = state_21969;var statearr_21972_22057 = state_21969__$1;(statearr_21972_22057[2] = null);
(statearr_21972_22057[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 33))
{var inst_21926 = (state_21969[9]);var inst_21928 = cljs.core.chunked_seq_QMARK_(inst_21926);var state_21969__$1 = state_21969;if(inst_21928)
{var statearr_21973_22058 = state_21969__$1;(statearr_21973_22058[1] = 36);
} else
{var statearr_21974_22059 = state_21969__$1;(statearr_21974_22059[1] = 37);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 2))
{var state_21969__$1 = state_21969;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21969__$1,4,ch);
} else
{if((state_val_21970 === 34))
{var state_21969__$1 = state_21969;var statearr_21975_22060 = state_21969__$1;(statearr_21975_22060[2] = null);
(statearr_21975_22060[1] = 35);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 3))
{var inst_21967 = (state_21969[2]);var state_21969__$1 = state_21969;return cljs.core.async.impl.ioc_helpers.return_chan(state_21969__$1,inst_21967);
} else
{if((state_val_21970 === 35))
{var inst_21951 = (state_21969[2]);var state_21969__$1 = state_21969;var statearr_21976_22061 = state_21969__$1;(statearr_21976_22061[2] = inst_21951);
(statearr_21976_22061[1] = 29);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 4))
{var inst_21837 = (state_21969[8]);var inst_21837__$1 = (state_21969[2]);var inst_21838 = (inst_21837__$1 == null);var state_21969__$1 = (function (){var statearr_21977 = state_21969;(statearr_21977[8] = inst_21837__$1);
return statearr_21977;
})();if(cljs.core.truth_(inst_21838))
{var statearr_21978_22062 = state_21969__$1;(statearr_21978_22062[1] = 5);
} else
{var statearr_21979_22063 = state_21969__$1;(statearr_21979_22063[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 36))
{var inst_21926 = (state_21969[9]);var inst_21930 = cljs.core.chunk_first(inst_21926);var inst_21931 = cljs.core.chunk_rest(inst_21926);var inst_21932 = cljs.core.count(inst_21930);var inst_21905 = inst_21931;var inst_21906 = inst_21930;var inst_21907 = inst_21932;var inst_21908 = 0;var state_21969__$1 = (function (){var statearr_21980 = state_21969;(statearr_21980[10] = inst_21905);
(statearr_21980[11] = inst_21906);
(statearr_21980[12] = inst_21908);
(statearr_21980[13] = inst_21907);
return statearr_21980;
})();var statearr_21981_22064 = state_21969__$1;(statearr_21981_22064[2] = null);
(statearr_21981_22064[1] = 25);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 5))
{var inst_21844 = cljs.core.deref(cs);var inst_21845 = cljs.core.seq(inst_21844);var inst_21846 = inst_21845;var inst_21847 = null;var inst_21848 = 0;var inst_21849 = 0;var state_21969__$1 = (function (){var statearr_21982 = state_21969;(statearr_21982[14] = inst_21847);
(statearr_21982[15] = inst_21846);
(statearr_21982[16] = inst_21848);
(statearr_21982[17] = inst_21849);
return statearr_21982;
})();var statearr_21983_22065 = state_21969__$1;(statearr_21983_22065[2] = null);
(statearr_21983_22065[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 37))
{var inst_21926 = (state_21969[9]);var inst_21935 = cljs.core.first(inst_21926);var state_21969__$1 = (function (){var statearr_21984 = state_21969;(statearr_21984[18] = inst_21935);
return statearr_21984;
})();var statearr_21985_22066 = state_21969__$1;(statearr_21985_22066[2] = null);
(statearr_21985_22066[1] = 41);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 6))
{var inst_21897 = (state_21969[19]);var inst_21896 = cljs.core.deref(cs);var inst_21897__$1 = cljs.core.keys(inst_21896);var inst_21898 = cljs.core.count(inst_21897__$1);var inst_21899 = cljs.core.reset_BANG_(dctr,inst_21898);var inst_21904 = cljs.core.seq(inst_21897__$1);var inst_21905 = inst_21904;var inst_21906 = null;var inst_21907 = 0;var inst_21908 = 0;var state_21969__$1 = (function (){var statearr_21986 = state_21969;(statearr_21986[10] = inst_21905);
(statearr_21986[11] = inst_21906);
(statearr_21986[19] = inst_21897__$1);
(statearr_21986[12] = inst_21908);
(statearr_21986[13] = inst_21907);
(statearr_21986[20] = inst_21899);
return statearr_21986;
})();var statearr_21987_22067 = state_21969__$1;(statearr_21987_22067[2] = null);
(statearr_21987_22067[1] = 25);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 38))
{var inst_21948 = (state_21969[2]);var state_21969__$1 = state_21969;var statearr_21988_22068 = state_21969__$1;(statearr_21988_22068[2] = inst_21948);
(statearr_21988_22068[1] = 35);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 7))
{var inst_21965 = (state_21969[2]);var state_21969__$1 = state_21969;var statearr_21989_22069 = state_21969__$1;(statearr_21989_22069[2] = inst_21965);
(statearr_21989_22069[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 39))
{var inst_21926 = (state_21969[9]);var inst_21944 = (state_21969[2]);var inst_21945 = cljs.core.next(inst_21926);var inst_21905 = inst_21945;var inst_21906 = null;var inst_21907 = 0;var inst_21908 = 0;var state_21969__$1 = (function (){var statearr_21990 = state_21969;(statearr_21990[21] = inst_21944);
(statearr_21990[10] = inst_21905);
(statearr_21990[11] = inst_21906);
(statearr_21990[12] = inst_21908);
(statearr_21990[13] = inst_21907);
return statearr_21990;
})();var statearr_21991_22070 = state_21969__$1;(statearr_21991_22070[2] = null);
(statearr_21991_22070[1] = 25);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 8))
{var inst_21848 = (state_21969[16]);var inst_21849 = (state_21969[17]);var inst_21851 = (inst_21849 < inst_21848);var inst_21852 = inst_21851;var state_21969__$1 = state_21969;if(cljs.core.truth_(inst_21852))
{var statearr_21992_22071 = state_21969__$1;(statearr_21992_22071[1] = 10);
} else
{var statearr_21993_22072 = state_21969__$1;(statearr_21993_22072[1] = 11);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 40))
{var inst_21935 = (state_21969[18]);var inst_21936 = (state_21969[2]);var inst_21937 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21938 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21935);var state_21969__$1 = (function (){var statearr_21994 = state_21969;(statearr_21994[22] = inst_21936);
(statearr_21994[23] = inst_21937);
return statearr_21994;
})();var statearr_21995_22073 = state_21969__$1;(statearr_21995_22073[2] = inst_21938);
cljs.core.async.impl.ioc_helpers.process_exception(state_21969__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 9))
{var inst_21894 = (state_21969[2]);var state_21969__$1 = state_21969;var statearr_21996_22074 = state_21969__$1;(statearr_21996_22074[2] = inst_21894);
(statearr_21996_22074[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 41))
{var inst_21837 = (state_21969[8]);var inst_21935 = (state_21969[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21969,40,Object,null,39);var inst_21942 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21935,inst_21837,done);var state_21969__$1 = state_21969;var statearr_21997_22075 = state_21969__$1;(statearr_21997_22075[2] = inst_21942);
cljs.core.async.impl.ioc_helpers.process_exception(state_21969__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 10))
{var inst_21847 = (state_21969[14]);var inst_21849 = (state_21969[17]);var inst_21855 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21847,inst_21849);var inst_21856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21855,0,null);var inst_21857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21855,1,null);var state_21969__$1 = (function (){var statearr_21998 = state_21969;(statearr_21998[24] = inst_21856);
return statearr_21998;
})();if(cljs.core.truth_(inst_21857))
{var statearr_21999_22076 = state_21969__$1;(statearr_21999_22076[1] = 13);
} else
{var statearr_22000_22077 = state_21969__$1;(statearr_22000_22077[1] = 14);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 42))
{var state_21969__$1 = state_21969;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21969__$1,45,dchan);
} else
{if((state_val_21970 === 11))
{var inst_21866 = (state_21969[25]);var inst_21846 = (state_21969[15]);var inst_21866__$1 = cljs.core.seq(inst_21846);var state_21969__$1 = (function (){var statearr_22001 = state_21969;(statearr_22001[25] = inst_21866__$1);
return statearr_22001;
})();if(inst_21866__$1)
{var statearr_22002_22078 = state_21969__$1;(statearr_22002_22078[1] = 16);
} else
{var statearr_22003_22079 = state_21969__$1;(statearr_22003_22079[1] = 17);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 43))
{var state_21969__$1 = state_21969;var statearr_22004_22080 = state_21969__$1;(statearr_22004_22080[2] = null);
(statearr_22004_22080[1] = 44);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 12))
{var inst_21892 = (state_21969[2]);var state_21969__$1 = state_21969;var statearr_22005_22081 = state_21969__$1;(statearr_22005_22081[2] = inst_21892);
(statearr_22005_22081[1] = 9);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 44))
{var inst_21962 = (state_21969[2]);var state_21969__$1 = (function (){var statearr_22006 = state_21969;(statearr_22006[26] = inst_21962);
return statearr_22006;
})();var statearr_22007_22082 = state_21969__$1;(statearr_22007_22082[2] = null);
(statearr_22007_22082[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 13))
{var inst_21856 = (state_21969[24]);var inst_21859 = cljs.core.async.close_BANG_(inst_21856);var state_21969__$1 = state_21969;var statearr_22008_22083 = state_21969__$1;(statearr_22008_22083[2] = inst_21859);
(statearr_22008_22083[1] = 15);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 45))
{var inst_21959 = (state_21969[2]);var state_21969__$1 = state_21969;var statearr_22012_22084 = state_21969__$1;(statearr_22012_22084[2] = inst_21959);
(statearr_22012_22084[1] = 44);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 14))
{var state_21969__$1 = state_21969;var statearr_22013_22085 = state_21969__$1;(statearr_22013_22085[2] = null);
(statearr_22013_22085[1] = 15);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 15))
{var inst_21847 = (state_21969[14]);var inst_21846 = (state_21969[15]);var inst_21848 = (state_21969[16]);var inst_21849 = (state_21969[17]);var inst_21862 = (state_21969[2]);var inst_21863 = (inst_21849 + 1);var tmp22009 = inst_21847;var tmp22010 = inst_21846;var tmp22011 = inst_21848;var inst_21846__$1 = tmp22010;var inst_21847__$1 = tmp22009;var inst_21848__$1 = tmp22011;var inst_21849__$1 = inst_21863;var state_21969__$1 = (function (){var statearr_22014 = state_21969;(statearr_22014[14] = inst_21847__$1);
(statearr_22014[15] = inst_21846__$1);
(statearr_22014[16] = inst_21848__$1);
(statearr_22014[17] = inst_21849__$1);
(statearr_22014[27] = inst_21862);
return statearr_22014;
})();var statearr_22015_22086 = state_21969__$1;(statearr_22015_22086[2] = null);
(statearr_22015_22086[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 16))
{var inst_21866 = (state_21969[25]);var inst_21868 = cljs.core.chunked_seq_QMARK_(inst_21866);var state_21969__$1 = state_21969;if(inst_21868)
{var statearr_22016_22087 = state_21969__$1;(statearr_22016_22087[1] = 19);
} else
{var statearr_22017_22088 = state_21969__$1;(statearr_22017_22088[1] = 20);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 17))
{var state_21969__$1 = state_21969;var statearr_22018_22089 = state_21969__$1;(statearr_22018_22089[2] = null);
(statearr_22018_22089[1] = 18);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 18))
{var inst_21890 = (state_21969[2]);var state_21969__$1 = state_21969;var statearr_22019_22090 = state_21969__$1;(statearr_22019_22090[2] = inst_21890);
(statearr_22019_22090[1] = 12);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 19))
{var inst_21866 = (state_21969[25]);var inst_21870 = cljs.core.chunk_first(inst_21866);var inst_21871 = cljs.core.chunk_rest(inst_21866);var inst_21872 = cljs.core.count(inst_21870);var inst_21846 = inst_21871;var inst_21847 = inst_21870;var inst_21848 = inst_21872;var inst_21849 = 0;var state_21969__$1 = (function (){var statearr_22020 = state_21969;(statearr_22020[14] = inst_21847);
(statearr_22020[15] = inst_21846);
(statearr_22020[16] = inst_21848);
(statearr_22020[17] = inst_21849);
return statearr_22020;
})();var statearr_22021_22091 = state_21969__$1;(statearr_22021_22091[2] = null);
(statearr_22021_22091[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 20))
{var inst_21866 = (state_21969[25]);var inst_21876 = cljs.core.first(inst_21866);var inst_21877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21876,0,null);var inst_21878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21876,1,null);var state_21969__$1 = (function (){var statearr_22022 = state_21969;(statearr_22022[28] = inst_21877);
return statearr_22022;
})();if(cljs.core.truth_(inst_21878))
{var statearr_22023_22092 = state_21969__$1;(statearr_22023_22092[1] = 22);
} else
{var statearr_22024_22093 = state_21969__$1;(statearr_22024_22093[1] = 23);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 21))
{var inst_21887 = (state_21969[2]);var state_21969__$1 = state_21969;var statearr_22025_22094 = state_21969__$1;(statearr_22025_22094[2] = inst_21887);
(statearr_22025_22094[1] = 18);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 22))
{var inst_21877 = (state_21969[28]);var inst_21880 = cljs.core.async.close_BANG_(inst_21877);var state_21969__$1 = state_21969;var statearr_22026_22095 = state_21969__$1;(statearr_22026_22095[2] = inst_21880);
(statearr_22026_22095[1] = 24);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 23))
{var state_21969__$1 = state_21969;var statearr_22027_22096 = state_21969__$1;(statearr_22027_22096[2] = null);
(statearr_22027_22096[1] = 24);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 24))
{var inst_21866 = (state_21969[25]);var inst_21883 = (state_21969[2]);var inst_21884 = cljs.core.next(inst_21866);var inst_21846 = inst_21884;var inst_21847 = null;var inst_21848 = 0;var inst_21849 = 0;var state_21969__$1 = (function (){var statearr_22028 = state_21969;(statearr_22028[14] = inst_21847);
(statearr_22028[15] = inst_21846);
(statearr_22028[29] = inst_21883);
(statearr_22028[16] = inst_21848);
(statearr_22028[17] = inst_21849);
return statearr_22028;
})();var statearr_22029_22097 = state_21969__$1;(statearr_22029_22097[2] = null);
(statearr_22029_22097[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 25))
{var inst_21908 = (state_21969[12]);var inst_21907 = (state_21969[13]);var inst_21910 = (inst_21908 < inst_21907);var inst_21911 = inst_21910;var state_21969__$1 = state_21969;if(cljs.core.truth_(inst_21911))
{var statearr_22030_22098 = state_21969__$1;(statearr_22030_22098[1] = 27);
} else
{var statearr_22031_22099 = state_21969__$1;(statearr_22031_22099[1] = 28);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 26))
{var inst_21897 = (state_21969[19]);var inst_21955 = (state_21969[2]);var inst_21956 = cljs.core.seq(inst_21897);var state_21969__$1 = (function (){var statearr_22032 = state_21969;(statearr_22032[30] = inst_21955);
return statearr_22032;
})();if(inst_21956)
{var statearr_22033_22100 = state_21969__$1;(statearr_22033_22100[1] = 42);
} else
{var statearr_22034_22101 = state_21969__$1;(statearr_22034_22101[1] = 43);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 27))
{var inst_21906 = (state_21969[11]);var inst_21908 = (state_21969[12]);var inst_21913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21906,inst_21908);var state_21969__$1 = (function (){var statearr_22035 = state_21969;(statearr_22035[7] = inst_21913);
return statearr_22035;
})();var statearr_22036_22102 = state_21969__$1;(statearr_22036_22102[2] = null);
(statearr_22036_22102[1] = 32);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 28))
{var inst_21905 = (state_21969[10]);var inst_21926 = (state_21969[9]);var inst_21926__$1 = cljs.core.seq(inst_21905);var state_21969__$1 = (function (){var statearr_22040 = state_21969;(statearr_22040[9] = inst_21926__$1);
return statearr_22040;
})();if(inst_21926__$1)
{var statearr_22041_22103 = state_21969__$1;(statearr_22041_22103[1] = 33);
} else
{var statearr_22042_22104 = state_21969__$1;(statearr_22042_22104[1] = 34);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 29))
{var inst_21953 = (state_21969[2]);var state_21969__$1 = state_21969;var statearr_22043_22105 = state_21969__$1;(statearr_22043_22105[2] = inst_21953);
(statearr_22043_22105[1] = 26);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 30))
{var inst_21905 = (state_21969[10]);var inst_21906 = (state_21969[11]);var inst_21908 = (state_21969[12]);var inst_21907 = (state_21969[13]);var inst_21922 = (state_21969[2]);var inst_21923 = (inst_21908 + 1);var tmp22037 = inst_21905;var tmp22038 = inst_21906;var tmp22039 = inst_21907;var inst_21905__$1 = tmp22037;var inst_21906__$1 = tmp22038;var inst_21907__$1 = tmp22039;var inst_21908__$1 = inst_21923;var state_21969__$1 = (function (){var statearr_22044 = state_21969;(statearr_22044[10] = inst_21905__$1);
(statearr_22044[11] = inst_21906__$1);
(statearr_22044[12] = inst_21908__$1);
(statearr_22044[13] = inst_21907__$1);
(statearr_22044[31] = inst_21922);
return statearr_22044;
})();var statearr_22045_22106 = state_21969__$1;(statearr_22045_22106[2] = null);
(statearr_22045_22106[1] = 25);
return cljs.core.constant$keyword$120;
} else
{if((state_val_21970 === 31))
{var inst_21913 = (state_21969[7]);var inst_21914 = (state_21969[2]);var inst_21915 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21916 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21913);var state_21969__$1 = (function (){var statearr_22046 = state_21969;(statearr_22046[32] = inst_21914);
(statearr_22046[33] = inst_21915);
return statearr_22046;
})();var statearr_22047_22107 = state_21969__$1;(statearr_22047_22107[2] = inst_21916);
cljs.core.async.impl.ioc_helpers.process_exception(state_21969__$1);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_22051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22051[0] = state_machine__5507__auto__);
(statearr_22051[1] = 1);
return statearr_22051;
});
var state_machine__5507__auto____1 = (function (state_21969){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21969);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22052){if((e22052 instanceof Object))
{var ex__5510__auto__ = e22052;var statearr_22053_22108 = state_21969;(statearr_22053_22108[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21969);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e22052;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__22109 = state_21969;
state_21969 = G__22109;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21969){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22054 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22055);
return statearr_22054;
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
cljs.core.async.Mix = (function (){var obj22111 = {};return obj22111;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$127,null,cljs.core.constant$keyword$128,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$129);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$128);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$129,chs);var pauses = pick(cljs.core.constant$keyword$127,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$130,solos,cljs.core.constant$keyword$131,pick(cljs.core.constant$keyword$128,chs),cljs.core.constant$keyword$132,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$127)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t22221 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22221 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22222){
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
this.meta22222 = meta22222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22221.cljs$lang$type = true;
cljs.core.async.t22221.cljs$lang$ctorStr = "cljs.core.async/t22221";
cljs.core.async.t22221.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22221");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22221.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22221.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22221.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22221.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22221.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22221.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22221.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22223){var self__ = this;
var _22223__$1 = this;return self__.meta22222;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22223,meta22222__$1){var self__ = this;
var _22223__$1 = this;return (new cljs.core.async.t22221(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22222__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22221 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22221(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22222){return (new cljs.core.async.t22221(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22222));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22221(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___22330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22288){var state_val_22289 = (state_22288[1]);if((state_val_22289 === 1))
{var inst_22227 = (state_22288[7]);var inst_22227__$1 = calc_state();var inst_22228 = cljs.core.seq_QMARK_(inst_22227__$1);var state_22288__$1 = (function (){var statearr_22290 = state_22288;(statearr_22290[7] = inst_22227__$1);
return statearr_22290;
})();if(inst_22228)
{var statearr_22291_22331 = state_22288__$1;(statearr_22291_22331[1] = 2);
} else
{var statearr_22292_22332 = state_22288__$1;(statearr_22292_22332[1] = 3);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 2))
{var inst_22227 = (state_22288[7]);var inst_22230 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22227);var state_22288__$1 = state_22288;var statearr_22293_22333 = state_22288__$1;(statearr_22293_22333[2] = inst_22230);
(statearr_22293_22333[1] = 4);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 3))
{var inst_22227 = (state_22288[7]);var state_22288__$1 = state_22288;var statearr_22294_22334 = state_22288__$1;(statearr_22294_22334[2] = inst_22227);
(statearr_22294_22334[1] = 4);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 4))
{var inst_22227 = (state_22288[7]);var inst_22233 = (state_22288[2]);var inst_22234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22233,cljs.core.constant$keyword$132);var inst_22235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22233,cljs.core.constant$keyword$131);var inst_22236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22233,cljs.core.constant$keyword$130);var inst_22237 = inst_22227;var state_22288__$1 = (function (){var statearr_22295 = state_22288;(statearr_22295[8] = inst_22235);
(statearr_22295[9] = inst_22234);
(statearr_22295[10] = inst_22236);
(statearr_22295[11] = inst_22237);
return statearr_22295;
})();var statearr_22296_22335 = state_22288__$1;(statearr_22296_22335[2] = null);
(statearr_22296_22335[1] = 5);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 5))
{var inst_22237 = (state_22288[11]);var inst_22240 = cljs.core.seq_QMARK_(inst_22237);var state_22288__$1 = state_22288;if(inst_22240)
{var statearr_22297_22336 = state_22288__$1;(statearr_22297_22336[1] = 7);
} else
{var statearr_22298_22337 = state_22288__$1;(statearr_22298_22337[1] = 8);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 6))
{var inst_22286 = (state_22288[2]);var state_22288__$1 = state_22288;return cljs.core.async.impl.ioc_helpers.return_chan(state_22288__$1,inst_22286);
} else
{if((state_val_22289 === 7))
{var inst_22237 = (state_22288[11]);var inst_22242 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22237);var state_22288__$1 = state_22288;var statearr_22299_22338 = state_22288__$1;(statearr_22299_22338[2] = inst_22242);
(statearr_22299_22338[1] = 9);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 8))
{var inst_22237 = (state_22288[11]);var state_22288__$1 = state_22288;var statearr_22300_22339 = state_22288__$1;(statearr_22300_22339[2] = inst_22237);
(statearr_22300_22339[1] = 9);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 9))
{var inst_22245 = (state_22288[12]);var inst_22245__$1 = (state_22288[2]);var inst_22246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22245__$1,cljs.core.constant$keyword$132);var inst_22247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22245__$1,cljs.core.constant$keyword$131);var inst_22248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22245__$1,cljs.core.constant$keyword$130);var state_22288__$1 = (function (){var statearr_22301 = state_22288;(statearr_22301[13] = inst_22247);
(statearr_22301[14] = inst_22248);
(statearr_22301[12] = inst_22245__$1);
return statearr_22301;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22288__$1,10,inst_22246);
} else
{if((state_val_22289 === 10))
{var inst_22252 = (state_22288[15]);var inst_22253 = (state_22288[16]);var inst_22251 = (state_22288[2]);var inst_22252__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22251,0,null);var inst_22253__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22251,1,null);var inst_22254 = (inst_22252__$1 == null);var inst_22255 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22253__$1,change);var inst_22256 = (inst_22254) || (inst_22255);var state_22288__$1 = (function (){var statearr_22302 = state_22288;(statearr_22302[15] = inst_22252__$1);
(statearr_22302[16] = inst_22253__$1);
return statearr_22302;
})();if(cljs.core.truth_(inst_22256))
{var statearr_22303_22340 = state_22288__$1;(statearr_22303_22340[1] = 11);
} else
{var statearr_22304_22341 = state_22288__$1;(statearr_22304_22341[1] = 12);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 11))
{var inst_22252 = (state_22288[15]);var inst_22258 = (inst_22252 == null);var state_22288__$1 = state_22288;if(cljs.core.truth_(inst_22258))
{var statearr_22305_22342 = state_22288__$1;(statearr_22305_22342[1] = 14);
} else
{var statearr_22306_22343 = state_22288__$1;(statearr_22306_22343[1] = 15);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 12))
{var inst_22267 = (state_22288[17]);var inst_22248 = (state_22288[14]);var inst_22253 = (state_22288[16]);var inst_22267__$1 = (inst_22248.cljs$core$IFn$_invoke$arity$1 ? inst_22248.cljs$core$IFn$_invoke$arity$1(inst_22253) : inst_22248.call(null,inst_22253));var state_22288__$1 = (function (){var statearr_22307 = state_22288;(statearr_22307[17] = inst_22267__$1);
return statearr_22307;
})();if(cljs.core.truth_(inst_22267__$1))
{var statearr_22308_22344 = state_22288__$1;(statearr_22308_22344[1] = 17);
} else
{var statearr_22309_22345 = state_22288__$1;(statearr_22309_22345[1] = 18);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 13))
{var inst_22284 = (state_22288[2]);var state_22288__$1 = state_22288;var statearr_22310_22346 = state_22288__$1;(statearr_22310_22346[2] = inst_22284);
(statearr_22310_22346[1] = 6);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 14))
{var inst_22253 = (state_22288[16]);var inst_22260 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22253);var state_22288__$1 = state_22288;var statearr_22311_22347 = state_22288__$1;(statearr_22311_22347[2] = inst_22260);
(statearr_22311_22347[1] = 16);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 15))
{var state_22288__$1 = state_22288;var statearr_22312_22348 = state_22288__$1;(statearr_22312_22348[2] = null);
(statearr_22312_22348[1] = 16);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 16))
{var inst_22263 = (state_22288[2]);var inst_22264 = calc_state();var inst_22237 = inst_22264;var state_22288__$1 = (function (){var statearr_22313 = state_22288;(statearr_22313[18] = inst_22263);
(statearr_22313[11] = inst_22237);
return statearr_22313;
})();var statearr_22314_22349 = state_22288__$1;(statearr_22314_22349[2] = null);
(statearr_22314_22349[1] = 5);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 17))
{var inst_22267 = (state_22288[17]);var state_22288__$1 = state_22288;var statearr_22315_22350 = state_22288__$1;(statearr_22315_22350[2] = inst_22267);
(statearr_22315_22350[1] = 19);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 18))
{var inst_22247 = (state_22288[13]);var inst_22248 = (state_22288[14]);var inst_22253 = (state_22288[16]);var inst_22270 = cljs.core.empty_QMARK_(inst_22248);var inst_22271 = (inst_22247.cljs$core$IFn$_invoke$arity$1 ? inst_22247.cljs$core$IFn$_invoke$arity$1(inst_22253) : inst_22247.call(null,inst_22253));var inst_22272 = cljs.core.not(inst_22271);var inst_22273 = (inst_22270) && (inst_22272);var state_22288__$1 = state_22288;var statearr_22316_22351 = state_22288__$1;(statearr_22316_22351[2] = inst_22273);
(statearr_22316_22351[1] = 19);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 19))
{var inst_22275 = (state_22288[2]);var state_22288__$1 = state_22288;if(cljs.core.truth_(inst_22275))
{var statearr_22317_22352 = state_22288__$1;(statearr_22317_22352[1] = 20);
} else
{var statearr_22318_22353 = state_22288__$1;(statearr_22318_22353[1] = 21);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 20))
{var inst_22252 = (state_22288[15]);var state_22288__$1 = state_22288;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22288__$1,23,out,inst_22252);
} else
{if((state_val_22289 === 21))
{var state_22288__$1 = state_22288;var statearr_22319_22354 = state_22288__$1;(statearr_22319_22354[2] = null);
(statearr_22319_22354[1] = 22);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 22))
{var inst_22245 = (state_22288[12]);var inst_22281 = (state_22288[2]);var inst_22237 = inst_22245;var state_22288__$1 = (function (){var statearr_22320 = state_22288;(statearr_22320[19] = inst_22281);
(statearr_22320[11] = inst_22237);
return statearr_22320;
})();var statearr_22321_22355 = state_22288__$1;(statearr_22321_22355[2] = null);
(statearr_22321_22355[1] = 5);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22289 === 23))
{var inst_22278 = (state_22288[2]);var state_22288__$1 = state_22288;var statearr_22322_22356 = state_22288__$1;(statearr_22322_22356[2] = inst_22278);
(statearr_22322_22356[1] = 22);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_22326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22326[0] = state_machine__5507__auto__);
(statearr_22326[1] = 1);
return statearr_22326;
});
var state_machine__5507__auto____1 = (function (state_22288){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22288);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22327){if((e22327 instanceof Object))
{var ex__5510__auto__ = e22327;var statearr_22328_22357 = state_22288;(statearr_22328_22357[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22288);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e22327;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__22358 = state_22288;
state_22288 = G__22358;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22288){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22329 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22330);
return statearr_22329;
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
cljs.core.async.Pub = (function (){var obj22360 = {};return obj22360;
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
return (function (p1__22361_SHARP_){if(cljs.core.truth_((p1__22361_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22361_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__22361_SHARP_.call(null,topic))))
{return p1__22361_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22361_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22486 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22487){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22487 = meta22487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22486.cljs$lang$type = true;
cljs.core.async.t22486.cljs$lang$ctorStr = "cljs.core.async/t22486";
cljs.core.async.t22486.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22486");
});})(mults,ensure_mult))
;
cljs.core.async.t22486.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22486.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22486.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22486.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22488){var self__ = this;
var _22488__$1 = this;return self__.meta22487;
});})(mults,ensure_mult))
;
cljs.core.async.t22486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22488,meta22487__$1){var self__ = this;
var _22488__$1 = this;return (new cljs.core.async.t22486(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22487__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22486 = ((function (mults,ensure_mult){
return (function __GT_t22486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22487){return (new cljs.core.async.t22486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22487));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22486(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___22610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22562){var state_val_22563 = (state_22562[1]);if((state_val_22563 === 1))
{var state_22562__$1 = state_22562;var statearr_22564_22611 = state_22562__$1;(statearr_22564_22611[2] = null);
(statearr_22564_22611[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 2))
{var state_22562__$1 = state_22562;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22562__$1,4,ch);
} else
{if((state_val_22563 === 3))
{var inst_22560 = (state_22562[2]);var state_22562__$1 = state_22562;return cljs.core.async.impl.ioc_helpers.return_chan(state_22562__$1,inst_22560);
} else
{if((state_val_22563 === 4))
{var inst_22491 = (state_22562[7]);var inst_22491__$1 = (state_22562[2]);var inst_22492 = (inst_22491__$1 == null);var state_22562__$1 = (function (){var statearr_22565 = state_22562;(statearr_22565[7] = inst_22491__$1);
return statearr_22565;
})();if(cljs.core.truth_(inst_22492))
{var statearr_22566_22612 = state_22562__$1;(statearr_22566_22612[1] = 5);
} else
{var statearr_22567_22613 = state_22562__$1;(statearr_22567_22613[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 5))
{var inst_22498 = cljs.core.deref(mults);var inst_22499 = cljs.core.vals(inst_22498);var inst_22500 = cljs.core.seq(inst_22499);var inst_22501 = inst_22500;var inst_22502 = null;var inst_22503 = 0;var inst_22504 = 0;var state_22562__$1 = (function (){var statearr_22568 = state_22562;(statearr_22568[8] = inst_22501);
(statearr_22568[9] = inst_22502);
(statearr_22568[10] = inst_22503);
(statearr_22568[11] = inst_22504);
return statearr_22568;
})();var statearr_22569_22614 = state_22562__$1;(statearr_22569_22614[2] = null);
(statearr_22569_22614[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 6))
{var inst_22541 = (state_22562[12]);var inst_22539 = (state_22562[13]);var inst_22491 = (state_22562[7]);var inst_22539__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22491) : topic_fn.call(null,inst_22491));var inst_22540 = cljs.core.deref(mults);var inst_22541__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22540,inst_22539__$1);var state_22562__$1 = (function (){var statearr_22570 = state_22562;(statearr_22570[12] = inst_22541__$1);
(statearr_22570[13] = inst_22539__$1);
return statearr_22570;
})();if(cljs.core.truth_(inst_22541__$1))
{var statearr_22571_22615 = state_22562__$1;(statearr_22571_22615[1] = 19);
} else
{var statearr_22572_22616 = state_22562__$1;(statearr_22572_22616[1] = 20);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 7))
{var inst_22558 = (state_22562[2]);var state_22562__$1 = state_22562;var statearr_22573_22617 = state_22562__$1;(statearr_22573_22617[2] = inst_22558);
(statearr_22573_22617[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 8))
{var inst_22503 = (state_22562[10]);var inst_22504 = (state_22562[11]);var inst_22506 = (inst_22504 < inst_22503);var inst_22507 = inst_22506;var state_22562__$1 = state_22562;if(cljs.core.truth_(inst_22507))
{var statearr_22577_22618 = state_22562__$1;(statearr_22577_22618[1] = 10);
} else
{var statearr_22578_22619 = state_22562__$1;(statearr_22578_22619[1] = 11);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 9))
{var inst_22537 = (state_22562[2]);var state_22562__$1 = state_22562;var statearr_22579_22620 = state_22562__$1;(statearr_22579_22620[2] = inst_22537);
(statearr_22579_22620[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 10))
{var inst_22501 = (state_22562[8]);var inst_22502 = (state_22562[9]);var inst_22503 = (state_22562[10]);var inst_22504 = (state_22562[11]);var inst_22509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22502,inst_22504);var inst_22510 = cljs.core.async.muxch_STAR_(inst_22509);var inst_22511 = cljs.core.async.close_BANG_(inst_22510);var inst_22512 = (inst_22504 + 1);var tmp22574 = inst_22501;var tmp22575 = inst_22502;var tmp22576 = inst_22503;var inst_22501__$1 = tmp22574;var inst_22502__$1 = tmp22575;var inst_22503__$1 = tmp22576;var inst_22504__$1 = inst_22512;var state_22562__$1 = (function (){var statearr_22580 = state_22562;(statearr_22580[8] = inst_22501__$1);
(statearr_22580[9] = inst_22502__$1);
(statearr_22580[10] = inst_22503__$1);
(statearr_22580[11] = inst_22504__$1);
(statearr_22580[14] = inst_22511);
return statearr_22580;
})();var statearr_22581_22621 = state_22562__$1;(statearr_22581_22621[2] = null);
(statearr_22581_22621[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 11))
{var inst_22515 = (state_22562[15]);var inst_22501 = (state_22562[8]);var inst_22515__$1 = cljs.core.seq(inst_22501);var state_22562__$1 = (function (){var statearr_22582 = state_22562;(statearr_22582[15] = inst_22515__$1);
return statearr_22582;
})();if(inst_22515__$1)
{var statearr_22583_22622 = state_22562__$1;(statearr_22583_22622[1] = 13);
} else
{var statearr_22584_22623 = state_22562__$1;(statearr_22584_22623[1] = 14);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 12))
{var inst_22535 = (state_22562[2]);var state_22562__$1 = state_22562;var statearr_22585_22624 = state_22562__$1;(statearr_22585_22624[2] = inst_22535);
(statearr_22585_22624[1] = 9);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 13))
{var inst_22515 = (state_22562[15]);var inst_22517 = cljs.core.chunked_seq_QMARK_(inst_22515);var state_22562__$1 = state_22562;if(inst_22517)
{var statearr_22586_22625 = state_22562__$1;(statearr_22586_22625[1] = 16);
} else
{var statearr_22587_22626 = state_22562__$1;(statearr_22587_22626[1] = 17);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 14))
{var state_22562__$1 = state_22562;var statearr_22588_22627 = state_22562__$1;(statearr_22588_22627[2] = null);
(statearr_22588_22627[1] = 15);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 15))
{var inst_22533 = (state_22562[2]);var state_22562__$1 = state_22562;var statearr_22589_22628 = state_22562__$1;(statearr_22589_22628[2] = inst_22533);
(statearr_22589_22628[1] = 12);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 16))
{var inst_22515 = (state_22562[15]);var inst_22519 = cljs.core.chunk_first(inst_22515);var inst_22520 = cljs.core.chunk_rest(inst_22515);var inst_22521 = cljs.core.count(inst_22519);var inst_22501 = inst_22520;var inst_22502 = inst_22519;var inst_22503 = inst_22521;var inst_22504 = 0;var state_22562__$1 = (function (){var statearr_22590 = state_22562;(statearr_22590[8] = inst_22501);
(statearr_22590[9] = inst_22502);
(statearr_22590[10] = inst_22503);
(statearr_22590[11] = inst_22504);
return statearr_22590;
})();var statearr_22591_22629 = state_22562__$1;(statearr_22591_22629[2] = null);
(statearr_22591_22629[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 17))
{var inst_22515 = (state_22562[15]);var inst_22524 = cljs.core.first(inst_22515);var inst_22525 = cljs.core.async.muxch_STAR_(inst_22524);var inst_22526 = cljs.core.async.close_BANG_(inst_22525);var inst_22527 = cljs.core.next(inst_22515);var inst_22501 = inst_22527;var inst_22502 = null;var inst_22503 = 0;var inst_22504 = 0;var state_22562__$1 = (function (){var statearr_22592 = state_22562;(statearr_22592[8] = inst_22501);
(statearr_22592[9] = inst_22502);
(statearr_22592[10] = inst_22503);
(statearr_22592[16] = inst_22526);
(statearr_22592[11] = inst_22504);
return statearr_22592;
})();var statearr_22593_22630 = state_22562__$1;(statearr_22593_22630[2] = null);
(statearr_22593_22630[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 18))
{var inst_22530 = (state_22562[2]);var state_22562__$1 = state_22562;var statearr_22594_22631 = state_22562__$1;(statearr_22594_22631[2] = inst_22530);
(statearr_22594_22631[1] = 15);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 19))
{var state_22562__$1 = state_22562;var statearr_22595_22632 = state_22562__$1;(statearr_22595_22632[2] = null);
(statearr_22595_22632[1] = 24);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 20))
{var state_22562__$1 = state_22562;var statearr_22596_22633 = state_22562__$1;(statearr_22596_22633[2] = null);
(statearr_22596_22633[1] = 21);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 21))
{var inst_22555 = (state_22562[2]);var state_22562__$1 = (function (){var statearr_22597 = state_22562;(statearr_22597[17] = inst_22555);
return statearr_22597;
})();var statearr_22598_22634 = state_22562__$1;(statearr_22598_22634[2] = null);
(statearr_22598_22634[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 22))
{var inst_22552 = (state_22562[2]);var state_22562__$1 = state_22562;var statearr_22599_22635 = state_22562__$1;(statearr_22599_22635[2] = inst_22552);
(statearr_22599_22635[1] = 21);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 23))
{var inst_22539 = (state_22562[13]);var inst_22543 = (state_22562[2]);var inst_22544 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22539);var state_22562__$1 = (function (){var statearr_22600 = state_22562;(statearr_22600[18] = inst_22543);
return statearr_22600;
})();var statearr_22601_22636 = state_22562__$1;(statearr_22601_22636[2] = inst_22544);
cljs.core.async.impl.ioc_helpers.process_exception(state_22562__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22563 === 24))
{var inst_22541 = (state_22562[12]);var inst_22491 = (state_22562[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22562,23,Object,null,22);var inst_22548 = cljs.core.async.muxch_STAR_(inst_22541);var state_22562__$1 = state_22562;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22562__$1,25,inst_22548,inst_22491);
} else
{if((state_val_22563 === 25))
{var inst_22550 = (state_22562[2]);var state_22562__$1 = state_22562;var statearr_22602_22637 = state_22562__$1;(statearr_22602_22637[2] = inst_22550);
cljs.core.async.impl.ioc_helpers.process_exception(state_22562__$1);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_22606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22606[0] = state_machine__5507__auto__);
(statearr_22606[1] = 1);
return statearr_22606;
});
var state_machine__5507__auto____1 = (function (state_22562){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22562);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22607){if((e22607 instanceof Object))
{var ex__5510__auto__ = e22607;var statearr_22608_22638 = state_22562;(statearr_22608_22638[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22562);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e22607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__22639 = state_22562;
state_22562 = G__22639;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22562){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22609 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22610);
return statearr_22609;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___22776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22746){var state_val_22747 = (state_22746[1]);if((state_val_22747 === 1))
{var state_22746__$1 = state_22746;var statearr_22748_22777 = state_22746__$1;(statearr_22748_22777[2] = null);
(statearr_22748_22777[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 2))
{var inst_22709 = cljs.core.reset_BANG_(dctr,cnt);var inst_22710 = 0;var state_22746__$1 = (function (){var statearr_22749 = state_22746;(statearr_22749[7] = inst_22710);
(statearr_22749[8] = inst_22709);
return statearr_22749;
})();var statearr_22750_22778 = state_22746__$1;(statearr_22750_22778[2] = null);
(statearr_22750_22778[1] = 4);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 3))
{var inst_22744 = (state_22746[2]);var state_22746__$1 = state_22746;return cljs.core.async.impl.ioc_helpers.return_chan(state_22746__$1,inst_22744);
} else
{if((state_val_22747 === 4))
{var inst_22710 = (state_22746[7]);var inst_22712 = (inst_22710 < cnt);var state_22746__$1 = state_22746;if(cljs.core.truth_(inst_22712))
{var statearr_22751_22779 = state_22746__$1;(statearr_22751_22779[1] = 6);
} else
{var statearr_22752_22780 = state_22746__$1;(statearr_22752_22780[1] = 7);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 5))
{var inst_22730 = (state_22746[2]);var state_22746__$1 = (function (){var statearr_22753 = state_22746;(statearr_22753[9] = inst_22730);
return statearr_22753;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22746__$1,12,dchan);
} else
{if((state_val_22747 === 6))
{var state_22746__$1 = state_22746;var statearr_22754_22781 = state_22746__$1;(statearr_22754_22781[2] = null);
(statearr_22754_22781[1] = 11);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 7))
{var state_22746__$1 = state_22746;var statearr_22755_22782 = state_22746__$1;(statearr_22755_22782[2] = null);
(statearr_22755_22782[1] = 8);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 8))
{var inst_22728 = (state_22746[2]);var state_22746__$1 = state_22746;var statearr_22756_22783 = state_22746__$1;(statearr_22756_22783[2] = inst_22728);
(statearr_22756_22783[1] = 5);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 9))
{var inst_22710 = (state_22746[7]);var inst_22723 = (state_22746[2]);var inst_22724 = (inst_22710 + 1);var inst_22710__$1 = inst_22724;var state_22746__$1 = (function (){var statearr_22757 = state_22746;(statearr_22757[10] = inst_22723);
(statearr_22757[7] = inst_22710__$1);
return statearr_22757;
})();var statearr_22758_22784 = state_22746__$1;(statearr_22758_22784[2] = null);
(statearr_22758_22784[1] = 4);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 10))
{var inst_22714 = (state_22746[2]);var inst_22715 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_22746__$1 = (function (){var statearr_22759 = state_22746;(statearr_22759[11] = inst_22714);
return statearr_22759;
})();var statearr_22760_22785 = state_22746__$1;(statearr_22760_22785[2] = inst_22715);
cljs.core.async.impl.ioc_helpers.process_exception(state_22746__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 11))
{var inst_22710 = (state_22746[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22746,10,Object,null,9);var inst_22719 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22710) : chs__$1.call(null,inst_22710));var inst_22720 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22710) : done.call(null,inst_22710));var inst_22721 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22719,inst_22720);var state_22746__$1 = state_22746;var statearr_22761_22786 = state_22746__$1;(statearr_22761_22786[2] = inst_22721);
cljs.core.async.impl.ioc_helpers.process_exception(state_22746__$1);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 12))
{var inst_22732 = (state_22746[12]);var inst_22732__$1 = (state_22746[2]);var inst_22733 = cljs.core.some(cljs.core.nil_QMARK_,inst_22732__$1);var state_22746__$1 = (function (){var statearr_22762 = state_22746;(statearr_22762[12] = inst_22732__$1);
return statearr_22762;
})();if(cljs.core.truth_(inst_22733))
{var statearr_22763_22787 = state_22746__$1;(statearr_22763_22787[1] = 13);
} else
{var statearr_22764_22788 = state_22746__$1;(statearr_22764_22788[1] = 14);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 13))
{var inst_22735 = cljs.core.async.close_BANG_(out);var state_22746__$1 = state_22746;var statearr_22765_22789 = state_22746__$1;(statearr_22765_22789[2] = inst_22735);
(statearr_22765_22789[1] = 15);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 14))
{var inst_22732 = (state_22746[12]);var inst_22737 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22732);var state_22746__$1 = state_22746;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22746__$1,16,out,inst_22737);
} else
{if((state_val_22747 === 15))
{var inst_22742 = (state_22746[2]);var state_22746__$1 = state_22746;var statearr_22766_22790 = state_22746__$1;(statearr_22766_22790[2] = inst_22742);
(statearr_22766_22790[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22747 === 16))
{var inst_22739 = (state_22746[2]);var state_22746__$1 = (function (){var statearr_22767 = state_22746;(statearr_22767[13] = inst_22739);
return statearr_22767;
})();var statearr_22768_22791 = state_22746__$1;(statearr_22768_22791[2] = null);
(statearr_22768_22791[1] = 2);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_22772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22772[0] = state_machine__5507__auto__);
(statearr_22772[1] = 1);
return statearr_22772;
});
var state_machine__5507__auto____1 = (function (state_22746){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22746);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22773){if((e22773 instanceof Object))
{var ex__5510__auto__ = e22773;var statearr_22774_22792 = state_22746;(statearr_22774_22792[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22746);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e22773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__22793 = state_22746;
state_22746 = G__22793;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22746){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22775 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22776);
return statearr_22775;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22877){var state_val_22878 = (state_22877[1]);if((state_val_22878 === 1))
{var inst_22848 = cljs.core.vec(chs);var inst_22849 = inst_22848;var state_22877__$1 = (function (){var statearr_22879 = state_22877;(statearr_22879[7] = inst_22849);
return statearr_22879;
})();var statearr_22880_22902 = state_22877__$1;(statearr_22880_22902[2] = null);
(statearr_22880_22902[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22878 === 2))
{var inst_22849 = (state_22877[7]);var inst_22851 = cljs.core.count(inst_22849);var inst_22852 = (inst_22851 > 0);var state_22877__$1 = state_22877;if(cljs.core.truth_(inst_22852))
{var statearr_22881_22903 = state_22877__$1;(statearr_22881_22903[1] = 4);
} else
{var statearr_22882_22904 = state_22877__$1;(statearr_22882_22904[1] = 5);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22878 === 3))
{var inst_22875 = (state_22877[2]);var state_22877__$1 = state_22877;return cljs.core.async.impl.ioc_helpers.return_chan(state_22877__$1,inst_22875);
} else
{if((state_val_22878 === 4))
{var inst_22849 = (state_22877[7]);var state_22877__$1 = state_22877;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22877__$1,7,inst_22849);
} else
{if((state_val_22878 === 5))
{var inst_22871 = cljs.core.async.close_BANG_(out);var state_22877__$1 = state_22877;var statearr_22883_22905 = state_22877__$1;(statearr_22883_22905[2] = inst_22871);
(statearr_22883_22905[1] = 6);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22878 === 6))
{var inst_22873 = (state_22877[2]);var state_22877__$1 = state_22877;var statearr_22884_22906 = state_22877__$1;(statearr_22884_22906[2] = inst_22873);
(statearr_22884_22906[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22878 === 7))
{var inst_22857 = (state_22877[8]);var inst_22856 = (state_22877[9]);var inst_22856__$1 = (state_22877[2]);var inst_22857__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22856__$1,0,null);var inst_22858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22856__$1,1,null);var inst_22859 = (inst_22857__$1 == null);var state_22877__$1 = (function (){var statearr_22885 = state_22877;(statearr_22885[8] = inst_22857__$1);
(statearr_22885[9] = inst_22856__$1);
(statearr_22885[10] = inst_22858);
return statearr_22885;
})();if(cljs.core.truth_(inst_22859))
{var statearr_22886_22907 = state_22877__$1;(statearr_22886_22907[1] = 8);
} else
{var statearr_22887_22908 = state_22877__$1;(statearr_22887_22908[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22878 === 8))
{var inst_22849 = (state_22877[7]);var inst_22857 = (state_22877[8]);var inst_22856 = (state_22877[9]);var inst_22858 = (state_22877[10]);var inst_22861 = (function (){var c = inst_22858;var v = inst_22857;var vec__22854 = inst_22856;var cs = inst_22849;return ((function (c,v,vec__22854,cs,inst_22849,inst_22857,inst_22856,inst_22858,state_val_22878){
return (function (p1__22794_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22794_SHARP_);
});
;})(c,v,vec__22854,cs,inst_22849,inst_22857,inst_22856,inst_22858,state_val_22878))
})();var inst_22862 = cljs.core.filterv(inst_22861,inst_22849);var inst_22849__$1 = inst_22862;var state_22877__$1 = (function (){var statearr_22888 = state_22877;(statearr_22888[7] = inst_22849__$1);
return statearr_22888;
})();var statearr_22889_22909 = state_22877__$1;(statearr_22889_22909[2] = null);
(statearr_22889_22909[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22878 === 9))
{var inst_22857 = (state_22877[8]);var state_22877__$1 = state_22877;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22877__$1,11,out,inst_22857);
} else
{if((state_val_22878 === 10))
{var inst_22869 = (state_22877[2]);var state_22877__$1 = state_22877;var statearr_22891_22910 = state_22877__$1;(statearr_22891_22910[2] = inst_22869);
(statearr_22891_22910[1] = 6);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22878 === 11))
{var inst_22849 = (state_22877[7]);var inst_22866 = (state_22877[2]);var tmp22890 = inst_22849;var inst_22849__$1 = tmp22890;var state_22877__$1 = (function (){var statearr_22892 = state_22877;(statearr_22892[11] = inst_22866);
(statearr_22892[7] = inst_22849__$1);
return statearr_22892;
})();var statearr_22893_22911 = state_22877__$1;(statearr_22893_22911[2] = null);
(statearr_22893_22911[1] = 2);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_22897 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22897[0] = state_machine__5507__auto__);
(statearr_22897[1] = 1);
return statearr_22897;
});
var state_machine__5507__auto____1 = (function (state_22877){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22877);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22898){if((e22898 instanceof Object))
{var ex__5510__auto__ = e22898;var statearr_22899_22912 = state_22877;(statearr_22899_22912[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22877);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e22898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__22913 = state_22877;
state_22877 = G__22913;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22877){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22900 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22901);
return statearr_22900;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22983){var state_val_22984 = (state_22983[1]);if((state_val_22984 === 1))
{var inst_22960 = 0;var state_22983__$1 = (function (){var statearr_22985 = state_22983;(statearr_22985[7] = inst_22960);
return statearr_22985;
})();var statearr_22986_23007 = state_22983__$1;(statearr_22986_23007[2] = null);
(statearr_22986_23007[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22984 === 2))
{var inst_22960 = (state_22983[7]);var inst_22962 = (inst_22960 < n);var state_22983__$1 = state_22983;if(cljs.core.truth_(inst_22962))
{var statearr_22987_23008 = state_22983__$1;(statearr_22987_23008[1] = 4);
} else
{var statearr_22988_23009 = state_22983__$1;(statearr_22988_23009[1] = 5);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22984 === 3))
{var inst_22980 = (state_22983[2]);var inst_22981 = cljs.core.async.close_BANG_(out);var state_22983__$1 = (function (){var statearr_22989 = state_22983;(statearr_22989[8] = inst_22980);
return statearr_22989;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22983__$1,inst_22981);
} else
{if((state_val_22984 === 4))
{var state_22983__$1 = state_22983;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22983__$1,7,ch);
} else
{if((state_val_22984 === 5))
{var state_22983__$1 = state_22983;var statearr_22990_23010 = state_22983__$1;(statearr_22990_23010[2] = null);
(statearr_22990_23010[1] = 6);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22984 === 6))
{var inst_22978 = (state_22983[2]);var state_22983__$1 = state_22983;var statearr_22991_23011 = state_22983__$1;(statearr_22991_23011[2] = inst_22978);
(statearr_22991_23011[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22984 === 7))
{var inst_22965 = (state_22983[9]);var inst_22965__$1 = (state_22983[2]);var inst_22966 = (inst_22965__$1 == null);var inst_22967 = cljs.core.not(inst_22966);var state_22983__$1 = (function (){var statearr_22992 = state_22983;(statearr_22992[9] = inst_22965__$1);
return statearr_22992;
})();if(inst_22967)
{var statearr_22993_23012 = state_22983__$1;(statearr_22993_23012[1] = 8);
} else
{var statearr_22994_23013 = state_22983__$1;(statearr_22994_23013[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_22984 === 8))
{var inst_22965 = (state_22983[9]);var state_22983__$1 = state_22983;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22983__$1,11,out,inst_22965);
} else
{if((state_val_22984 === 9))
{var state_22983__$1 = state_22983;var statearr_22995_23014 = state_22983__$1;(statearr_22995_23014[2] = null);
(statearr_22995_23014[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22984 === 10))
{var inst_22975 = (state_22983[2]);var state_22983__$1 = state_22983;var statearr_22996_23015 = state_22983__$1;(statearr_22996_23015[2] = inst_22975);
(statearr_22996_23015[1] = 6);
return cljs.core.constant$keyword$120;
} else
{if((state_val_22984 === 11))
{var inst_22960 = (state_22983[7]);var inst_22970 = (state_22983[2]);var inst_22971 = (inst_22960 + 1);var inst_22960__$1 = inst_22971;var state_22983__$1 = (function (){var statearr_22997 = state_22983;(statearr_22997[10] = inst_22970);
(statearr_22997[7] = inst_22960__$1);
return statearr_22997;
})();var statearr_22998_23016 = state_22983__$1;(statearr_22998_23016[2] = null);
(statearr_22998_23016[1] = 2);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_23002 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23002[0] = state_machine__5507__auto__);
(statearr_23002[1] = 1);
return statearr_23002;
});
var state_machine__5507__auto____1 = (function (state_22983){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22983);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23003){if((e23003 instanceof Object))
{var ex__5510__auto__ = e23003;var statearr_23004_23017 = state_22983;(statearr_23004_23017[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22983);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e23003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__23018 = state_22983;
state_22983 = G__23018;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22983){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23005 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23006);
return statearr_23005;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23090){var state_val_23091 = (state_23090[1]);if((state_val_23091 === 1))
{var inst_23067 = null;var state_23090__$1 = (function (){var statearr_23092 = state_23090;(statearr_23092[7] = inst_23067);
return statearr_23092;
})();var statearr_23093_23116 = state_23090__$1;(statearr_23093_23116[2] = null);
(statearr_23093_23116[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23091 === 2))
{var state_23090__$1 = state_23090;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23090__$1,4,ch);
} else
{if((state_val_23091 === 3))
{var inst_23087 = (state_23090[2]);var inst_23088 = cljs.core.async.close_BANG_(out);var state_23090__$1 = (function (){var statearr_23094 = state_23090;(statearr_23094[8] = inst_23087);
return statearr_23094;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23090__$1,inst_23088);
} else
{if((state_val_23091 === 4))
{var inst_23070 = (state_23090[9]);var inst_23070__$1 = (state_23090[2]);var inst_23071 = (inst_23070__$1 == null);var inst_23072 = cljs.core.not(inst_23071);var state_23090__$1 = (function (){var statearr_23095 = state_23090;(statearr_23095[9] = inst_23070__$1);
return statearr_23095;
})();if(inst_23072)
{var statearr_23096_23117 = state_23090__$1;(statearr_23096_23117[1] = 5);
} else
{var statearr_23097_23118 = state_23090__$1;(statearr_23097_23118[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23091 === 5))
{var inst_23067 = (state_23090[7]);var inst_23070 = (state_23090[9]);var inst_23074 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23070,inst_23067);var state_23090__$1 = state_23090;if(inst_23074)
{var statearr_23098_23119 = state_23090__$1;(statearr_23098_23119[1] = 8);
} else
{var statearr_23099_23120 = state_23090__$1;(statearr_23099_23120[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23091 === 6))
{var state_23090__$1 = state_23090;var statearr_23101_23121 = state_23090__$1;(statearr_23101_23121[2] = null);
(statearr_23101_23121[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23091 === 7))
{var inst_23085 = (state_23090[2]);var state_23090__$1 = state_23090;var statearr_23102_23122 = state_23090__$1;(statearr_23102_23122[2] = inst_23085);
(statearr_23102_23122[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23091 === 8))
{var inst_23067 = (state_23090[7]);var tmp23100 = inst_23067;var inst_23067__$1 = tmp23100;var state_23090__$1 = (function (){var statearr_23103 = state_23090;(statearr_23103[7] = inst_23067__$1);
return statearr_23103;
})();var statearr_23104_23123 = state_23090__$1;(statearr_23104_23123[2] = null);
(statearr_23104_23123[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23091 === 9))
{var inst_23070 = (state_23090[9]);var state_23090__$1 = state_23090;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23090__$1,11,out,inst_23070);
} else
{if((state_val_23091 === 10))
{var inst_23082 = (state_23090[2]);var state_23090__$1 = state_23090;var statearr_23105_23124 = state_23090__$1;(statearr_23105_23124[2] = inst_23082);
(statearr_23105_23124[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23091 === 11))
{var inst_23070 = (state_23090[9]);var inst_23079 = (state_23090[2]);var inst_23067 = inst_23070;var state_23090__$1 = (function (){var statearr_23106 = state_23090;(statearr_23106[10] = inst_23079);
(statearr_23106[7] = inst_23067);
return statearr_23106;
})();var statearr_23107_23125 = state_23090__$1;(statearr_23107_23125[2] = null);
(statearr_23107_23125[1] = 2);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_23111 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23111[0] = state_machine__5507__auto__);
(statearr_23111[1] = 1);
return statearr_23111;
});
var state_machine__5507__auto____1 = (function (state_23090){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23090);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23112){if((e23112 instanceof Object))
{var ex__5510__auto__ = e23112;var statearr_23113_23126 = state_23090;(statearr_23113_23126[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23090);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e23112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__23127 = state_23090;
state_23090 = G__23127;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23090){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23114 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23115);
return statearr_23114;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23232){var state_val_23233 = (state_23232[1]);if((state_val_23233 === 1))
{var inst_23195 = (new Array(n));var inst_23196 = inst_23195;var inst_23197 = 0;var state_23232__$1 = (function (){var statearr_23234 = state_23232;(statearr_23234[7] = inst_23196);
(statearr_23234[8] = inst_23197);
return statearr_23234;
})();var statearr_23235_23263 = state_23232__$1;(statearr_23235_23263[2] = null);
(statearr_23235_23263[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23233 === 2))
{var state_23232__$1 = state_23232;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23232__$1,4,ch);
} else
{if((state_val_23233 === 3))
{var inst_23230 = (state_23232[2]);var state_23232__$1 = state_23232;return cljs.core.async.impl.ioc_helpers.return_chan(state_23232__$1,inst_23230);
} else
{if((state_val_23233 === 4))
{var inst_23200 = (state_23232[9]);var inst_23200__$1 = (state_23232[2]);var inst_23201 = (inst_23200__$1 == null);var inst_23202 = cljs.core.not(inst_23201);var state_23232__$1 = (function (){var statearr_23236 = state_23232;(statearr_23236[9] = inst_23200__$1);
return statearr_23236;
})();if(inst_23202)
{var statearr_23237_23264 = state_23232__$1;(statearr_23237_23264[1] = 5);
} else
{var statearr_23238_23265 = state_23232__$1;(statearr_23238_23265[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23233 === 5))
{var inst_23196 = (state_23232[7]);var inst_23197 = (state_23232[8]);var inst_23200 = (state_23232[9]);var inst_23205 = (state_23232[10]);var inst_23204 = (inst_23196[inst_23197] = inst_23200);var inst_23205__$1 = (inst_23197 + 1);var inst_23206 = (inst_23205__$1 < n);var state_23232__$1 = (function (){var statearr_23239 = state_23232;(statearr_23239[11] = inst_23204);
(statearr_23239[10] = inst_23205__$1);
return statearr_23239;
})();if(cljs.core.truth_(inst_23206))
{var statearr_23240_23266 = state_23232__$1;(statearr_23240_23266[1] = 8);
} else
{var statearr_23241_23267 = state_23232__$1;(statearr_23241_23267[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23233 === 6))
{var inst_23197 = (state_23232[8]);var inst_23218 = (inst_23197 > 0);var state_23232__$1 = state_23232;if(cljs.core.truth_(inst_23218))
{var statearr_23243_23268 = state_23232__$1;(statearr_23243_23268[1] = 12);
} else
{var statearr_23244_23269 = state_23232__$1;(statearr_23244_23269[1] = 13);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23233 === 7))
{var inst_23228 = (state_23232[2]);var state_23232__$1 = state_23232;var statearr_23245_23270 = state_23232__$1;(statearr_23245_23270[2] = inst_23228);
(statearr_23245_23270[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23233 === 8))
{var inst_23196 = (state_23232[7]);var inst_23205 = (state_23232[10]);var tmp23242 = inst_23196;var inst_23196__$1 = tmp23242;var inst_23197 = inst_23205;var state_23232__$1 = (function (){var statearr_23246 = state_23232;(statearr_23246[7] = inst_23196__$1);
(statearr_23246[8] = inst_23197);
return statearr_23246;
})();var statearr_23247_23271 = state_23232__$1;(statearr_23247_23271[2] = null);
(statearr_23247_23271[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23233 === 9))
{var inst_23196 = (state_23232[7]);var inst_23210 = cljs.core.vec(inst_23196);var state_23232__$1 = state_23232;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23232__$1,11,out,inst_23210);
} else
{if((state_val_23233 === 10))
{var inst_23216 = (state_23232[2]);var state_23232__$1 = state_23232;var statearr_23248_23272 = state_23232__$1;(statearr_23248_23272[2] = inst_23216);
(statearr_23248_23272[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23233 === 11))
{var inst_23212 = (state_23232[2]);var inst_23213 = (new Array(n));var inst_23196 = inst_23213;var inst_23197 = 0;var state_23232__$1 = (function (){var statearr_23249 = state_23232;(statearr_23249[7] = inst_23196);
(statearr_23249[8] = inst_23197);
(statearr_23249[12] = inst_23212);
return statearr_23249;
})();var statearr_23250_23273 = state_23232__$1;(statearr_23250_23273[2] = null);
(statearr_23250_23273[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23233 === 12))
{var inst_23196 = (state_23232[7]);var inst_23220 = cljs.core.vec(inst_23196);var state_23232__$1 = state_23232;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23232__$1,15,out,inst_23220);
} else
{if((state_val_23233 === 13))
{var state_23232__$1 = state_23232;var statearr_23251_23274 = state_23232__$1;(statearr_23251_23274[2] = null);
(statearr_23251_23274[1] = 14);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23233 === 14))
{var inst_23225 = (state_23232[2]);var inst_23226 = cljs.core.async.close_BANG_(out);var state_23232__$1 = (function (){var statearr_23252 = state_23232;(statearr_23252[13] = inst_23225);
return statearr_23252;
})();var statearr_23253_23275 = state_23232__$1;(statearr_23253_23275[2] = inst_23226);
(statearr_23253_23275[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23233 === 15))
{var inst_23222 = (state_23232[2]);var state_23232__$1 = state_23232;var statearr_23254_23276 = state_23232__$1;(statearr_23254_23276[2] = inst_23222);
(statearr_23254_23276[1] = 14);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_23258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23258[0] = state_machine__5507__auto__);
(statearr_23258[1] = 1);
return statearr_23258;
});
var state_machine__5507__auto____1 = (function (state_23232){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23232);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23259){if((e23259 instanceof Object))
{var ex__5510__auto__ = e23259;var statearr_23260_23277 = state_23232;(statearr_23260_23277[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23232);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e23259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__23278 = state_23232;
state_23232 = G__23278;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23232){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23261 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23262);
return statearr_23261;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23391){var state_val_23392 = (state_23391[1]);if((state_val_23392 === 1))
{var inst_23350 = [];var inst_23351 = inst_23350;var inst_23352 = cljs.core.constant$keyword$133;var state_23391__$1 = (function (){var statearr_23393 = state_23391;(statearr_23393[7] = inst_23352);
(statearr_23393[8] = inst_23351);
return statearr_23393;
})();var statearr_23394_23422 = state_23391__$1;(statearr_23394_23422[2] = null);
(statearr_23394_23422[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23392 === 2))
{var state_23391__$1 = state_23391;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23391__$1,4,ch);
} else
{if((state_val_23392 === 3))
{var inst_23389 = (state_23391[2]);var state_23391__$1 = state_23391;return cljs.core.async.impl.ioc_helpers.return_chan(state_23391__$1,inst_23389);
} else
{if((state_val_23392 === 4))
{var inst_23355 = (state_23391[9]);var inst_23355__$1 = (state_23391[2]);var inst_23356 = (inst_23355__$1 == null);var inst_23357 = cljs.core.not(inst_23356);var state_23391__$1 = (function (){var statearr_23395 = state_23391;(statearr_23395[9] = inst_23355__$1);
return statearr_23395;
})();if(inst_23357)
{var statearr_23396_23423 = state_23391__$1;(statearr_23396_23423[1] = 5);
} else
{var statearr_23397_23424 = state_23391__$1;(statearr_23397_23424[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23392 === 5))
{var inst_23352 = (state_23391[7]);var inst_23359 = (state_23391[10]);var inst_23355 = (state_23391[9]);var inst_23359__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23355) : f.call(null,inst_23355));var inst_23360 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23359__$1,inst_23352);var inst_23361 = cljs.core.keyword_identical_QMARK_(inst_23352,cljs.core.constant$keyword$133);var inst_23362 = (inst_23360) || (inst_23361);var state_23391__$1 = (function (){var statearr_23398 = state_23391;(statearr_23398[10] = inst_23359__$1);
return statearr_23398;
})();if(cljs.core.truth_(inst_23362))
{var statearr_23399_23425 = state_23391__$1;(statearr_23399_23425[1] = 8);
} else
{var statearr_23400_23426 = state_23391__$1;(statearr_23400_23426[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23392 === 6))
{var inst_23351 = (state_23391[8]);var inst_23376 = inst_23351.length;var inst_23377 = (inst_23376 > 0);var state_23391__$1 = state_23391;if(cljs.core.truth_(inst_23377))
{var statearr_23402_23427 = state_23391__$1;(statearr_23402_23427[1] = 12);
} else
{var statearr_23403_23428 = state_23391__$1;(statearr_23403_23428[1] = 13);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_23392 === 7))
{var inst_23387 = (state_23391[2]);var state_23391__$1 = state_23391;var statearr_23404_23429 = state_23391__$1;(statearr_23404_23429[2] = inst_23387);
(statearr_23404_23429[1] = 3);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23392 === 8))
{var inst_23351 = (state_23391[8]);var inst_23359 = (state_23391[10]);var inst_23355 = (state_23391[9]);var inst_23364 = inst_23351.push(inst_23355);var tmp23401 = inst_23351;var inst_23351__$1 = tmp23401;var inst_23352 = inst_23359;var state_23391__$1 = (function (){var statearr_23405 = state_23391;(statearr_23405[7] = inst_23352);
(statearr_23405[8] = inst_23351__$1);
(statearr_23405[11] = inst_23364);
return statearr_23405;
})();var statearr_23406_23430 = state_23391__$1;(statearr_23406_23430[2] = null);
(statearr_23406_23430[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23392 === 9))
{var inst_23351 = (state_23391[8]);var inst_23367 = cljs.core.vec(inst_23351);var state_23391__$1 = state_23391;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23391__$1,11,out,inst_23367);
} else
{if((state_val_23392 === 10))
{var inst_23374 = (state_23391[2]);var state_23391__$1 = state_23391;var statearr_23407_23431 = state_23391__$1;(statearr_23407_23431[2] = inst_23374);
(statearr_23407_23431[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23392 === 11))
{var inst_23359 = (state_23391[10]);var inst_23355 = (state_23391[9]);var inst_23369 = (state_23391[2]);var inst_23370 = [];var inst_23371 = inst_23370.push(inst_23355);var inst_23351 = inst_23370;var inst_23352 = inst_23359;var state_23391__$1 = (function (){var statearr_23408 = state_23391;(statearr_23408[7] = inst_23352);
(statearr_23408[8] = inst_23351);
(statearr_23408[12] = inst_23371);
(statearr_23408[13] = inst_23369);
return statearr_23408;
})();var statearr_23409_23432 = state_23391__$1;(statearr_23409_23432[2] = null);
(statearr_23409_23432[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23392 === 12))
{var inst_23351 = (state_23391[8]);var inst_23379 = cljs.core.vec(inst_23351);var state_23391__$1 = state_23391;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23391__$1,15,out,inst_23379);
} else
{if((state_val_23392 === 13))
{var state_23391__$1 = state_23391;var statearr_23410_23433 = state_23391__$1;(statearr_23410_23433[2] = null);
(statearr_23410_23433[1] = 14);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23392 === 14))
{var inst_23384 = (state_23391[2]);var inst_23385 = cljs.core.async.close_BANG_(out);var state_23391__$1 = (function (){var statearr_23411 = state_23391;(statearr_23411[14] = inst_23384);
return statearr_23411;
})();var statearr_23412_23434 = state_23391__$1;(statearr_23412_23434[2] = inst_23385);
(statearr_23412_23434[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_23392 === 15))
{var inst_23381 = (state_23391[2]);var state_23391__$1 = state_23391;var statearr_23413_23435 = state_23391__$1;(statearr_23413_23435[2] = inst_23381);
(statearr_23413_23435[1] = 14);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_23417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23417[0] = state_machine__5507__auto__);
(statearr_23417[1] = 1);
return statearr_23417;
});
var state_machine__5507__auto____1 = (function (state_23391){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23391);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23418){if((e23418 instanceof Object))
{var ex__5510__auto__ = e23418;var statearr_23419_23436 = state_23391;(statearr_23419_23436[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23391);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e23418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__23437 = state_23391;
state_23391 = G__23437;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23391){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23420 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23421);
return statearr_23420;
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
