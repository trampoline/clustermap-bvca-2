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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21919 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21919 = (function (f,fn_handler,meta21920){
this.f = f;
this.fn_handler = fn_handler;
this.meta21920 = meta21920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21919.cljs$lang$type = true;
cljs.core.async.t21919.cljs$lang$ctorStr = "cljs.core.async/t21919";
cljs.core.async.t21919.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21919");
});
cljs.core.async.t21919.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21921){var self__ = this;
var _21921__$1 = this;return self__.meta21920;
});
cljs.core.async.t21919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21921,meta21920__$1){var self__ = this;
var _21921__$1 = this;return (new cljs.core.async.t21919(self__.f,self__.fn_handler,meta21920__$1));
});
cljs.core.async.__GT_t21919 = (function __GT_t21919(f__$1,fn_handler__$1,meta21920){return (new cljs.core.async.t21919(f__$1,fn_handler__$1,meta21920));
});
}
return (new cljs.core.async.t21919(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21923 = buff;if(G__21923)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__21923.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21923.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21923);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21923);
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
{var val_21924 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21924) : fn1.call(null,val_21924));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21924) : fn1.call(null,val_21924));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___21925 = n;var x_21926 = 0;while(true){
if((x_21926 < n__4248__auto___21925))
{(a[x_21926] = 0);
{
var G__21927 = (x_21926 + 1);
x_21926 = G__21927;
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
var G__21928 = (i + 1);
i = G__21928;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t21932 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21932 = (function (flag,alt_flag,meta21933){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21933 = meta21933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21932.cljs$lang$type = true;
cljs.core.async.t21932.cljs$lang$ctorStr = "cljs.core.async/t21932";
cljs.core.async.t21932.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21932");
});
cljs.core.async.t21932.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t21932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t21932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21934){var self__ = this;
var _21934__$1 = this;return self__.meta21933;
});
cljs.core.async.t21932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21934,meta21933__$1){var self__ = this;
var _21934__$1 = this;return (new cljs.core.async.t21932(self__.flag,self__.alt_flag,meta21933__$1));
});
cljs.core.async.__GT_t21932 = (function __GT_t21932(flag__$1,alt_flag__$1,meta21933){return (new cljs.core.async.t21932(flag__$1,alt_flag__$1,meta21933));
});
}
return (new cljs.core.async.t21932(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21938 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21938 = (function (cb,flag,alt_handler,meta21939){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21939 = meta21939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21938.cljs$lang$type = true;
cljs.core.async.t21938.cljs$lang$ctorStr = "cljs.core.async/t21938";
cljs.core.async.t21938.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21938");
});
cljs.core.async.t21938.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t21938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t21938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21940){var self__ = this;
var _21940__$1 = this;return self__.meta21939;
});
cljs.core.async.t21938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21940,meta21939__$1){var self__ = this;
var _21940__$1 = this;return (new cljs.core.async.t21938(self__.cb,self__.flag,self__.alt_handler,meta21939__$1));
});
cljs.core.async.__GT_t21938 = (function __GT_t21938(cb__$1,flag__$1,alt_handler__$1,meta21939){return (new cljs.core.async.t21938(cb__$1,flag__$1,alt_handler__$1,meta21939));
});
}
return (new cljs.core.async.t21938(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21941_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21941_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21941_SHARP_,port], null)));
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
var G__21942 = (i + 1);
i = G__21942;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$116))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$116], null));
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
var alts_BANG___delegate = function (ports,p__21943){var map__21945 = p__21943;var map__21945__$1 = ((cljs.core.seq_QMARK_(map__21945))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21945):map__21945);var opts = map__21945__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21943 = null;if (arguments.length > 1) {
  p__21943 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21943);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21946){
var ports = cljs.core.first(arglist__21946);
var p__21943 = cljs.core.rest(arglist__21946);
return alts_BANG___delegate(ports,p__21943);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21954 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21954 = (function (ch,f,map_LT_,meta21955){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21955 = meta21955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21954.cljs$lang$type = true;
cljs.core.async.t21954.cljs$lang$ctorStr = "cljs.core.async/t21954";
cljs.core.async.t21954.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21954");
});
cljs.core.async.t21954.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t21954.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t21957 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21957 = (function (fn1,_,meta21955,ch,f,map_LT_,meta21958){
this.fn1 = fn1;
this._ = _;
this.meta21955 = meta21955;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21958 = meta21958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21957.cljs$lang$type = true;
cljs.core.async.t21957.cljs$lang$ctorStr = "cljs.core.async/t21957";
cljs.core.async.t21957.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21957");
});
cljs.core.async.t21957.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t21957.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t21957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__21947_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__21947_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__21947_SHARP_) : self__.f.call(null,p1__21947_SHARP_)))) : f1.call(null,(((p1__21947_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__21947_SHARP_) : self__.f.call(null,p1__21947_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t21957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21959){var self__ = this;
var _21959__$1 = this;return self__.meta21958;
});
cljs.core.async.t21957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21959,meta21958__$1){var self__ = this;
var _21959__$1 = this;return (new cljs.core.async.t21957(self__.fn1,self__._,self__.meta21955,self__.ch,self__.f,self__.map_LT_,meta21958__$1));
});
cljs.core.async.__GT_t21957 = (function __GT_t21957(fn1__$1,___$2,meta21955__$1,ch__$2,f__$2,map_LT___$2,meta21958){return (new cljs.core.async.t21957(fn1__$1,___$2,meta21955__$1,ch__$2,f__$2,map_LT___$2,meta21958));
});
}
return (new cljs.core.async.t21957(fn1,___$1,self__.meta21955,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t21954.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t21954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21956){var self__ = this;
var _21956__$1 = this;return self__.meta21955;
});
cljs.core.async.t21954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21956,meta21955__$1){var self__ = this;
var _21956__$1 = this;return (new cljs.core.async.t21954(self__.ch,self__.f,self__.map_LT_,meta21955__$1));
});
cljs.core.async.__GT_t21954 = (function __GT_t21954(ch__$1,f__$1,map_LT___$1,meta21955){return (new cljs.core.async.t21954(ch__$1,f__$1,map_LT___$1,meta21955));
});
}
return (new cljs.core.async.t21954(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21963 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21963 = (function (ch,f,map_GT_,meta21964){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21964 = meta21964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21963.cljs$lang$type = true;
cljs.core.async.t21963.cljs$lang$ctorStr = "cljs.core.async/t21963";
cljs.core.async.t21963.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21963");
});
cljs.core.async.t21963.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t21963.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t21963.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t21963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21965){var self__ = this;
var _21965__$1 = this;return self__.meta21964;
});
cljs.core.async.t21963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21965,meta21964__$1){var self__ = this;
var _21965__$1 = this;return (new cljs.core.async.t21963(self__.ch,self__.f,self__.map_GT_,meta21964__$1));
});
cljs.core.async.__GT_t21963 = (function __GT_t21963(ch__$1,f__$1,map_GT___$1,meta21964){return (new cljs.core.async.t21963(ch__$1,f__$1,map_GT___$1,meta21964));
});
}
return (new cljs.core.async.t21963(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21969 = (function (ch,p,filter_GT_,meta21970){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21970 = meta21970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21969.cljs$lang$type = true;
cljs.core.async.t21969.cljs$lang$ctorStr = "cljs.core.async/t21969";
cljs.core.async.t21969.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21969");
});
cljs.core.async.t21969.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t21969.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t21969.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t21969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21971){var self__ = this;
var _21971__$1 = this;return self__.meta21970;
});
cljs.core.async.t21969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21971,meta21970__$1){var self__ = this;
var _21971__$1 = this;return (new cljs.core.async.t21969(self__.ch,self__.p,self__.filter_GT_,meta21970__$1));
});
cljs.core.async.__GT_t21969 = (function __GT_t21969(ch__$1,p__$1,filter_GT___$1,meta21970){return (new cljs.core.async.t21969(ch__$1,p__$1,filter_GT___$1,meta21970));
});
}
return (new cljs.core.async.t21969(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22033){var state_val_22034 = (state_22033[1]);if((state_val_22034 === 1))
{var state_22033__$1 = state_22033;var statearr_22035_22055 = state_22033__$1;(statearr_22035_22055[2] = null);
(statearr_22035_22055[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22034 === 2))
{var state_22033__$1 = state_22033;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22033__$1,4,ch);
} else
{if((state_val_22034 === 3))
{var inst_22031 = (state_22033[2]);var state_22033__$1 = state_22033;return cljs.core.async.impl.ioc_helpers.return_chan(state_22033__$1,inst_22031);
} else
{if((state_val_22034 === 4))
{var inst_22015 = (state_22033[7]);var inst_22015__$1 = (state_22033[2]);var inst_22016 = (inst_22015__$1 == null);var state_22033__$1 = (function (){var statearr_22036 = state_22033;(statearr_22036[7] = inst_22015__$1);
return statearr_22036;
})();if(cljs.core.truth_(inst_22016))
{var statearr_22037_22056 = state_22033__$1;(statearr_22037_22056[1] = 5);
} else
{var statearr_22038_22057 = state_22033__$1;(statearr_22038_22057[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22034 === 5))
{var inst_22018 = cljs.core.async.close_BANG_(out);var state_22033__$1 = state_22033;var statearr_22039_22058 = state_22033__$1;(statearr_22039_22058[2] = inst_22018);
(statearr_22039_22058[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22034 === 6))
{var inst_22015 = (state_22033[7]);var inst_22020 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22015) : p.call(null,inst_22015));var state_22033__$1 = state_22033;if(cljs.core.truth_(inst_22020))
{var statearr_22040_22059 = state_22033__$1;(statearr_22040_22059[1] = 8);
} else
{var statearr_22041_22060 = state_22033__$1;(statearr_22041_22060[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22034 === 7))
{var inst_22029 = (state_22033[2]);var state_22033__$1 = state_22033;var statearr_22042_22061 = state_22033__$1;(statearr_22042_22061[2] = inst_22029);
(statearr_22042_22061[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22034 === 8))
{var inst_22015 = (state_22033[7]);var state_22033__$1 = state_22033;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22033__$1,11,out,inst_22015);
} else
{if((state_val_22034 === 9))
{var state_22033__$1 = state_22033;var statearr_22043_22062 = state_22033__$1;(statearr_22043_22062[2] = null);
(statearr_22043_22062[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22034 === 10))
{var inst_22026 = (state_22033[2]);var state_22033__$1 = (function (){var statearr_22044 = state_22033;(statearr_22044[8] = inst_22026);
return statearr_22044;
})();var statearr_22045_22063 = state_22033__$1;(statearr_22045_22063[2] = null);
(statearr_22045_22063[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22034 === 11))
{var inst_22023 = (state_22033[2]);var state_22033__$1 = state_22033;var statearr_22046_22064 = state_22033__$1;(statearr_22046_22064[2] = inst_22023);
(statearr_22046_22064[1] = 10);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_22050 = [null,null,null,null,null,null,null,null,null];(statearr_22050[0] = state_machine__5507__auto__);
(statearr_22050[1] = 1);
return statearr_22050;
});
var state_machine__5507__auto____1 = (function (state_22033){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22033);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22051){if((e22051 instanceof Object))
{var ex__5510__auto__ = e22051;var statearr_22052_22065 = state_22033;(statearr_22052_22065[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22033);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22051;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22066 = state_22033;
state_22033 = G__22066;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22033){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22053 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22054);
return statearr_22053;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22218){var state_val_22219 = (state_22218[1]);if((state_val_22219 === 1))
{var state_22218__$1 = state_22218;var statearr_22220_22257 = state_22218__$1;(statearr_22220_22257[2] = null);
(statearr_22220_22257[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 2))
{var state_22218__$1 = state_22218;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22218__$1,4,in$);
} else
{if((state_val_22219 === 3))
{var inst_22216 = (state_22218[2]);var state_22218__$1 = state_22218;return cljs.core.async.impl.ioc_helpers.return_chan(state_22218__$1,inst_22216);
} else
{if((state_val_22219 === 4))
{var inst_22164 = (state_22218[7]);var inst_22164__$1 = (state_22218[2]);var inst_22165 = (inst_22164__$1 == null);var state_22218__$1 = (function (){var statearr_22221 = state_22218;(statearr_22221[7] = inst_22164__$1);
return statearr_22221;
})();if(cljs.core.truth_(inst_22165))
{var statearr_22222_22258 = state_22218__$1;(statearr_22222_22258[1] = 5);
} else
{var statearr_22223_22259 = state_22218__$1;(statearr_22223_22259[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 5))
{var inst_22167 = cljs.core.async.close_BANG_(out);var state_22218__$1 = state_22218;var statearr_22224_22260 = state_22218__$1;(statearr_22224_22260[2] = inst_22167);
(statearr_22224_22260[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 6))
{var inst_22164 = (state_22218[7]);var inst_22169 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22164) : f.call(null,inst_22164));var inst_22174 = cljs.core.seq(inst_22169);var inst_22175 = inst_22174;var inst_22176 = null;var inst_22177 = 0;var inst_22178 = 0;var state_22218__$1 = (function (){var statearr_22225 = state_22218;(statearr_22225[8] = inst_22178);
(statearr_22225[9] = inst_22177);
(statearr_22225[10] = inst_22175);
(statearr_22225[11] = inst_22176);
return statearr_22225;
})();var statearr_22226_22261 = state_22218__$1;(statearr_22226_22261[2] = null);
(statearr_22226_22261[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 7))
{var inst_22214 = (state_22218[2]);var state_22218__$1 = state_22218;var statearr_22227_22262 = state_22218__$1;(statearr_22227_22262[2] = inst_22214);
(statearr_22227_22262[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 8))
{var inst_22178 = (state_22218[8]);var inst_22177 = (state_22218[9]);var inst_22180 = (inst_22178 < inst_22177);var inst_22181 = inst_22180;var state_22218__$1 = state_22218;if(cljs.core.truth_(inst_22181))
{var statearr_22228_22263 = state_22218__$1;(statearr_22228_22263[1] = 10);
} else
{var statearr_22229_22264 = state_22218__$1;(statearr_22229_22264[1] = 11);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 9))
{var inst_22211 = (state_22218[2]);var state_22218__$1 = (function (){var statearr_22230 = state_22218;(statearr_22230[12] = inst_22211);
return statearr_22230;
})();var statearr_22231_22265 = state_22218__$1;(statearr_22231_22265[2] = null);
(statearr_22231_22265[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 10))
{var inst_22178 = (state_22218[8]);var inst_22176 = (state_22218[11]);var inst_22183 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22176,inst_22178);var state_22218__$1 = state_22218;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22218__$1,13,out,inst_22183);
} else
{if((state_val_22219 === 11))
{var inst_22189 = (state_22218[13]);var inst_22175 = (state_22218[10]);var inst_22189__$1 = cljs.core.seq(inst_22175);var state_22218__$1 = (function (){var statearr_22235 = state_22218;(statearr_22235[13] = inst_22189__$1);
return statearr_22235;
})();if(inst_22189__$1)
{var statearr_22236_22266 = state_22218__$1;(statearr_22236_22266[1] = 14);
} else
{var statearr_22237_22267 = state_22218__$1;(statearr_22237_22267[1] = 15);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 12))
{var inst_22209 = (state_22218[2]);var state_22218__$1 = state_22218;var statearr_22238_22268 = state_22218__$1;(statearr_22238_22268[2] = inst_22209);
(statearr_22238_22268[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 13))
{var inst_22178 = (state_22218[8]);var inst_22177 = (state_22218[9]);var inst_22175 = (state_22218[10]);var inst_22176 = (state_22218[11]);var inst_22185 = (state_22218[2]);var inst_22186 = (inst_22178 + 1);var tmp22232 = inst_22177;var tmp22233 = inst_22175;var tmp22234 = inst_22176;var inst_22175__$1 = tmp22233;var inst_22176__$1 = tmp22234;var inst_22177__$1 = tmp22232;var inst_22178__$1 = inst_22186;var state_22218__$1 = (function (){var statearr_22239 = state_22218;(statearr_22239[14] = inst_22185);
(statearr_22239[8] = inst_22178__$1);
(statearr_22239[9] = inst_22177__$1);
(statearr_22239[10] = inst_22175__$1);
(statearr_22239[11] = inst_22176__$1);
return statearr_22239;
})();var statearr_22240_22269 = state_22218__$1;(statearr_22240_22269[2] = null);
(statearr_22240_22269[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 14))
{var inst_22189 = (state_22218[13]);var inst_22191 = cljs.core.chunked_seq_QMARK_(inst_22189);var state_22218__$1 = state_22218;if(inst_22191)
{var statearr_22241_22270 = state_22218__$1;(statearr_22241_22270[1] = 17);
} else
{var statearr_22242_22271 = state_22218__$1;(statearr_22242_22271[1] = 18);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 15))
{var state_22218__$1 = state_22218;var statearr_22243_22272 = state_22218__$1;(statearr_22243_22272[2] = null);
(statearr_22243_22272[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 16))
{var inst_22207 = (state_22218[2]);var state_22218__$1 = state_22218;var statearr_22244_22273 = state_22218__$1;(statearr_22244_22273[2] = inst_22207);
(statearr_22244_22273[1] = 12);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 17))
{var inst_22189 = (state_22218[13]);var inst_22193 = cljs.core.chunk_first(inst_22189);var inst_22194 = cljs.core.chunk_rest(inst_22189);var inst_22195 = cljs.core.count(inst_22193);var inst_22175 = inst_22194;var inst_22176 = inst_22193;var inst_22177 = inst_22195;var inst_22178 = 0;var state_22218__$1 = (function (){var statearr_22245 = state_22218;(statearr_22245[8] = inst_22178);
(statearr_22245[9] = inst_22177);
(statearr_22245[10] = inst_22175);
(statearr_22245[11] = inst_22176);
return statearr_22245;
})();var statearr_22246_22274 = state_22218__$1;(statearr_22246_22274[2] = null);
(statearr_22246_22274[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 18))
{var inst_22189 = (state_22218[13]);var inst_22198 = cljs.core.first(inst_22189);var state_22218__$1 = state_22218;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22218__$1,20,out,inst_22198);
} else
{if((state_val_22219 === 19))
{var inst_22204 = (state_22218[2]);var state_22218__$1 = state_22218;var statearr_22247_22275 = state_22218__$1;(statearr_22247_22275[2] = inst_22204);
(statearr_22247_22275[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22219 === 20))
{var inst_22189 = (state_22218[13]);var inst_22200 = (state_22218[2]);var inst_22201 = cljs.core.next(inst_22189);var inst_22175 = inst_22201;var inst_22176 = null;var inst_22177 = 0;var inst_22178 = 0;var state_22218__$1 = (function (){var statearr_22248 = state_22218;(statearr_22248[8] = inst_22178);
(statearr_22248[9] = inst_22177);
(statearr_22248[10] = inst_22175);
(statearr_22248[11] = inst_22176);
(statearr_22248[15] = inst_22200);
return statearr_22248;
})();var statearr_22249_22276 = state_22218__$1;(statearr_22249_22276[2] = null);
(statearr_22249_22276[1] = 8);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_22253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22253[0] = state_machine__5507__auto__);
(statearr_22253[1] = 1);
return statearr_22253;
});
var state_machine__5507__auto____1 = (function (state_22218){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22218);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22254){if((e22254 instanceof Object))
{var ex__5510__auto__ = e22254;var statearr_22255_22277 = state_22218;(statearr_22255_22277[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22218);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22278 = state_22218;
state_22218 = G__22278;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22218){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22256 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22256;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___22359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22338){var state_val_22339 = (state_22338[1]);if((state_val_22339 === 1))
{var state_22338__$1 = state_22338;var statearr_22340_22360 = state_22338__$1;(statearr_22340_22360[2] = null);
(statearr_22340_22360[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22339 === 2))
{var state_22338__$1 = state_22338;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22338__$1,4,from);
} else
{if((state_val_22339 === 3))
{var inst_22336 = (state_22338[2]);var state_22338__$1 = state_22338;return cljs.core.async.impl.ioc_helpers.return_chan(state_22338__$1,inst_22336);
} else
{if((state_val_22339 === 4))
{var inst_22321 = (state_22338[7]);var inst_22321__$1 = (state_22338[2]);var inst_22322 = (inst_22321__$1 == null);var state_22338__$1 = (function (){var statearr_22341 = state_22338;(statearr_22341[7] = inst_22321__$1);
return statearr_22341;
})();if(cljs.core.truth_(inst_22322))
{var statearr_22342_22361 = state_22338__$1;(statearr_22342_22361[1] = 5);
} else
{var statearr_22343_22362 = state_22338__$1;(statearr_22343_22362[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22339 === 5))
{var state_22338__$1 = state_22338;if(cljs.core.truth_(close_QMARK_))
{var statearr_22344_22363 = state_22338__$1;(statearr_22344_22363[1] = 8);
} else
{var statearr_22345_22364 = state_22338__$1;(statearr_22345_22364[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22339 === 6))
{var inst_22321 = (state_22338[7]);var state_22338__$1 = state_22338;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22338__$1,11,to,inst_22321);
} else
{if((state_val_22339 === 7))
{var inst_22334 = (state_22338[2]);var state_22338__$1 = state_22338;var statearr_22346_22365 = state_22338__$1;(statearr_22346_22365[2] = inst_22334);
(statearr_22346_22365[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22339 === 8))
{var inst_22325 = cljs.core.async.close_BANG_(to);var state_22338__$1 = state_22338;var statearr_22347_22366 = state_22338__$1;(statearr_22347_22366[2] = inst_22325);
(statearr_22347_22366[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22339 === 9))
{var state_22338__$1 = state_22338;var statearr_22348_22367 = state_22338__$1;(statearr_22348_22367[2] = null);
(statearr_22348_22367[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22339 === 10))
{var inst_22328 = (state_22338[2]);var state_22338__$1 = state_22338;var statearr_22349_22368 = state_22338__$1;(statearr_22349_22368[2] = inst_22328);
(statearr_22349_22368[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22339 === 11))
{var inst_22331 = (state_22338[2]);var state_22338__$1 = (function (){var statearr_22350 = state_22338;(statearr_22350[8] = inst_22331);
return statearr_22350;
})();var statearr_22351_22369 = state_22338__$1;(statearr_22351_22369[2] = null);
(statearr_22351_22369[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_22355 = [null,null,null,null,null,null,null,null,null];(statearr_22355[0] = state_machine__5507__auto__);
(statearr_22355[1] = 1);
return statearr_22355;
});
var state_machine__5507__auto____1 = (function (state_22338){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22338);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22356){if((e22356 instanceof Object))
{var ex__5510__auto__ = e22356;var statearr_22357_22370 = state_22338;(statearr_22357_22370[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22338);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22371 = state_22338;
state_22338 = G__22371;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22338){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22358 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22359);
return statearr_22358;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___22458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22436){var state_val_22437 = (state_22436[1]);if((state_val_22437 === 1))
{var state_22436__$1 = state_22436;var statearr_22438_22459 = state_22436__$1;(statearr_22438_22459[2] = null);
(statearr_22438_22459[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22437 === 2))
{var state_22436__$1 = state_22436;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22436__$1,4,ch);
} else
{if((state_val_22437 === 3))
{var inst_22434 = (state_22436[2]);var state_22436__$1 = state_22436;return cljs.core.async.impl.ioc_helpers.return_chan(state_22436__$1,inst_22434);
} else
{if((state_val_22437 === 4))
{var inst_22417 = (state_22436[7]);var inst_22417__$1 = (state_22436[2]);var inst_22418 = (inst_22417__$1 == null);var state_22436__$1 = (function (){var statearr_22439 = state_22436;(statearr_22439[7] = inst_22417__$1);
return statearr_22439;
})();if(cljs.core.truth_(inst_22418))
{var statearr_22440_22460 = state_22436__$1;(statearr_22440_22460[1] = 5);
} else
{var statearr_22441_22461 = state_22436__$1;(statearr_22441_22461[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22437 === 5))
{var inst_22420 = cljs.core.async.close_BANG_(tc);var inst_22421 = cljs.core.async.close_BANG_(fc);var state_22436__$1 = (function (){var statearr_22442 = state_22436;(statearr_22442[8] = inst_22420);
return statearr_22442;
})();var statearr_22443_22462 = state_22436__$1;(statearr_22443_22462[2] = inst_22421);
(statearr_22443_22462[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22437 === 6))
{var inst_22417 = (state_22436[7]);var inst_22423 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22417) : p.call(null,inst_22417));var state_22436__$1 = state_22436;if(cljs.core.truth_(inst_22423))
{var statearr_22444_22463 = state_22436__$1;(statearr_22444_22463[1] = 9);
} else
{var statearr_22445_22464 = state_22436__$1;(statearr_22445_22464[1] = 10);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22437 === 7))
{var inst_22432 = (state_22436[2]);var state_22436__$1 = state_22436;var statearr_22446_22465 = state_22436__$1;(statearr_22446_22465[2] = inst_22432);
(statearr_22446_22465[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22437 === 8))
{var inst_22429 = (state_22436[2]);var state_22436__$1 = (function (){var statearr_22447 = state_22436;(statearr_22447[9] = inst_22429);
return statearr_22447;
})();var statearr_22448_22466 = state_22436__$1;(statearr_22448_22466[2] = null);
(statearr_22448_22466[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22437 === 9))
{var state_22436__$1 = state_22436;var statearr_22449_22467 = state_22436__$1;(statearr_22449_22467[2] = tc);
(statearr_22449_22467[1] = 11);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22437 === 10))
{var state_22436__$1 = state_22436;var statearr_22450_22468 = state_22436__$1;(statearr_22450_22468[2] = fc);
(statearr_22450_22468[1] = 11);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22437 === 11))
{var inst_22417 = (state_22436[7]);var inst_22427 = (state_22436[2]);var state_22436__$1 = state_22436;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22436__$1,8,inst_22427,inst_22417);
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
var state_machine__5507__auto____0 = (function (){var statearr_22454 = [null,null,null,null,null,null,null,null,null,null];(statearr_22454[0] = state_machine__5507__auto__);
(statearr_22454[1] = 1);
return statearr_22454;
});
var state_machine__5507__auto____1 = (function (state_22436){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22436);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22455){if((e22455 instanceof Object))
{var ex__5510__auto__ = e22455;var statearr_22456_22469 = state_22436;(statearr_22456_22469[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22436);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22470 = state_22436;
state_22436 = G__22470;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22436){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22457 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22458);
return statearr_22457;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22517){var state_val_22518 = (state_22517[1]);if((state_val_22518 === 7))
{var inst_22513 = (state_22517[2]);var state_22517__$1 = state_22517;var statearr_22519_22535 = state_22517__$1;(statearr_22519_22535[2] = inst_22513);
(statearr_22519_22535[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22518 === 6))
{var inst_22503 = (state_22517[7]);var inst_22506 = (state_22517[8]);var inst_22510 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22503,inst_22506) : f.call(null,inst_22503,inst_22506));var inst_22503__$1 = inst_22510;var state_22517__$1 = (function (){var statearr_22520 = state_22517;(statearr_22520[7] = inst_22503__$1);
return statearr_22520;
})();var statearr_22521_22536 = state_22517__$1;(statearr_22521_22536[2] = null);
(statearr_22521_22536[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22518 === 5))
{var inst_22503 = (state_22517[7]);var state_22517__$1 = state_22517;var statearr_22522_22537 = state_22517__$1;(statearr_22522_22537[2] = inst_22503);
(statearr_22522_22537[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22518 === 4))
{var inst_22506 = (state_22517[8]);var inst_22506__$1 = (state_22517[2]);var inst_22507 = (inst_22506__$1 == null);var state_22517__$1 = (function (){var statearr_22523 = state_22517;(statearr_22523[8] = inst_22506__$1);
return statearr_22523;
})();if(cljs.core.truth_(inst_22507))
{var statearr_22524_22538 = state_22517__$1;(statearr_22524_22538[1] = 5);
} else
{var statearr_22525_22539 = state_22517__$1;(statearr_22525_22539[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22518 === 3))
{var inst_22515 = (state_22517[2]);var state_22517__$1 = state_22517;return cljs.core.async.impl.ioc_helpers.return_chan(state_22517__$1,inst_22515);
} else
{if((state_val_22518 === 2))
{var state_22517__$1 = state_22517;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22517__$1,4,ch);
} else
{if((state_val_22518 === 1))
{var inst_22503 = init;var state_22517__$1 = (function (){var statearr_22526 = state_22517;(statearr_22526[7] = inst_22503);
return statearr_22526;
})();var statearr_22527_22540 = state_22517__$1;(statearr_22527_22540[2] = null);
(statearr_22527_22540[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_22531 = [null,null,null,null,null,null,null,null,null];(statearr_22531[0] = state_machine__5507__auto__);
(statearr_22531[1] = 1);
return statearr_22531;
});
var state_machine__5507__auto____1 = (function (state_22517){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22517);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22532){if((e22532 instanceof Object))
{var ex__5510__auto__ = e22532;var statearr_22533_22541 = state_22517;(statearr_22533_22541[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22517);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22542 = state_22517;
state_22517 = G__22542;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22517){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22534 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22534;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22604){var state_val_22605 = (state_22604[1]);if((state_val_22605 === 1))
{var inst_22584 = cljs.core.seq(coll);var inst_22585 = inst_22584;var state_22604__$1 = (function (){var statearr_22606 = state_22604;(statearr_22606[7] = inst_22585);
return statearr_22606;
})();var statearr_22607_22625 = state_22604__$1;(statearr_22607_22625[2] = null);
(statearr_22607_22625[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22605 === 2))
{var inst_22585 = (state_22604[7]);var state_22604__$1 = state_22604;if(cljs.core.truth_(inst_22585))
{var statearr_22608_22626 = state_22604__$1;(statearr_22608_22626[1] = 4);
} else
{var statearr_22609_22627 = state_22604__$1;(statearr_22609_22627[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22605 === 3))
{var inst_22602 = (state_22604[2]);var state_22604__$1 = state_22604;return cljs.core.async.impl.ioc_helpers.return_chan(state_22604__$1,inst_22602);
} else
{if((state_val_22605 === 4))
{var inst_22585 = (state_22604[7]);var inst_22588 = cljs.core.first(inst_22585);var state_22604__$1 = state_22604;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22604__$1,7,ch,inst_22588);
} else
{if((state_val_22605 === 5))
{var state_22604__$1 = state_22604;if(cljs.core.truth_(close_QMARK_))
{var statearr_22610_22628 = state_22604__$1;(statearr_22610_22628[1] = 8);
} else
{var statearr_22611_22629 = state_22604__$1;(statearr_22611_22629[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22605 === 6))
{var inst_22600 = (state_22604[2]);var state_22604__$1 = state_22604;var statearr_22612_22630 = state_22604__$1;(statearr_22612_22630[2] = inst_22600);
(statearr_22612_22630[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22605 === 7))
{var inst_22585 = (state_22604[7]);var inst_22590 = (state_22604[2]);var inst_22591 = cljs.core.next(inst_22585);var inst_22585__$1 = inst_22591;var state_22604__$1 = (function (){var statearr_22613 = state_22604;(statearr_22613[8] = inst_22590);
(statearr_22613[7] = inst_22585__$1);
return statearr_22613;
})();var statearr_22614_22631 = state_22604__$1;(statearr_22614_22631[2] = null);
(statearr_22614_22631[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22605 === 8))
{var inst_22595 = cljs.core.async.close_BANG_(ch);var state_22604__$1 = state_22604;var statearr_22615_22632 = state_22604__$1;(statearr_22615_22632[2] = inst_22595);
(statearr_22615_22632[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22605 === 9))
{var state_22604__$1 = state_22604;var statearr_22616_22633 = state_22604__$1;(statearr_22616_22633[2] = null);
(statearr_22616_22633[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22605 === 10))
{var inst_22598 = (state_22604[2]);var state_22604__$1 = state_22604;var statearr_22617_22634 = state_22604__$1;(statearr_22617_22634[2] = inst_22598);
(statearr_22617_22634[1] = 6);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_22621 = [null,null,null,null,null,null,null,null,null];(statearr_22621[0] = state_machine__5507__auto__);
(statearr_22621[1] = 1);
return statearr_22621;
});
var state_machine__5507__auto____1 = (function (state_22604){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22604);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22622){if((e22622 instanceof Object))
{var ex__5510__auto__ = e22622;var statearr_22623_22635 = state_22604;(statearr_22623_22635[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22604);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22636 = state_22604;
state_22604 = G__22636;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22604){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22624 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22624;
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
cljs.core.async.Mux = (function (){var obj22638 = {};return obj22638;
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
cljs.core.async.Mult = (function (){var obj22640 = {};return obj22640;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22864 = (function (cs,ch,mult,meta22865){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22865 = meta22865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22864.cljs$lang$type = true;
cljs.core.async.t22864.cljs$lang$ctorStr = "cljs.core.async/t22864";
cljs.core.async.t22864.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22864");
});})(cs))
;
cljs.core.async.t22864.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22864.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22864.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22864.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22864.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22866){var self__ = this;
var _22866__$1 = this;return self__.meta22865;
});})(cs))
;
cljs.core.async.t22864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22866,meta22865__$1){var self__ = this;
var _22866__$1 = this;return (new cljs.core.async.t22864(self__.cs,self__.ch,self__.mult,meta22865__$1));
});})(cs))
;
cljs.core.async.__GT_t22864 = ((function (cs){
return (function __GT_t22864(cs__$1,ch__$1,mult__$1,meta22865){return (new cljs.core.async.t22864(cs__$1,ch__$1,mult__$1,meta22865));
});})(cs))
;
}
return (new cljs.core.async.t22864(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___23087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23001){var state_val_23002 = (state_23001[1]);if((state_val_23002 === 32))
{var inst_22945 = (state_23001[7]);var inst_22869 = (state_23001[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23001,31,Object,null,30);var inst_22952 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22945,inst_22869,done);var state_23001__$1 = state_23001;var statearr_23003_23088 = state_23001__$1;(statearr_23003_23088[2] = inst_22952);
cljs.core.async.impl.ioc_helpers.process_exception(state_23001__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 1))
{var state_23001__$1 = state_23001;var statearr_23004_23089 = state_23001__$1;(statearr_23004_23089[2] = null);
(statearr_23004_23089[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 33))
{var inst_22958 = (state_23001[9]);var inst_22960 = cljs.core.chunked_seq_QMARK_(inst_22958);var state_23001__$1 = state_23001;if(inst_22960)
{var statearr_23005_23090 = state_23001__$1;(statearr_23005_23090[1] = 36);
} else
{var statearr_23006_23091 = state_23001__$1;(statearr_23006_23091[1] = 37);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 2))
{var state_23001__$1 = state_23001;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23001__$1,4,ch);
} else
{if((state_val_23002 === 34))
{var state_23001__$1 = state_23001;var statearr_23007_23092 = state_23001__$1;(statearr_23007_23092[2] = null);
(statearr_23007_23092[1] = 35);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 3))
{var inst_22999 = (state_23001[2]);var state_23001__$1 = state_23001;return cljs.core.async.impl.ioc_helpers.return_chan(state_23001__$1,inst_22999);
} else
{if((state_val_23002 === 35))
{var inst_22983 = (state_23001[2]);var state_23001__$1 = state_23001;var statearr_23008_23093 = state_23001__$1;(statearr_23008_23093[2] = inst_22983);
(statearr_23008_23093[1] = 29);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 4))
{var inst_22869 = (state_23001[8]);var inst_22869__$1 = (state_23001[2]);var inst_22870 = (inst_22869__$1 == null);var state_23001__$1 = (function (){var statearr_23009 = state_23001;(statearr_23009[8] = inst_22869__$1);
return statearr_23009;
})();if(cljs.core.truth_(inst_22870))
{var statearr_23010_23094 = state_23001__$1;(statearr_23010_23094[1] = 5);
} else
{var statearr_23011_23095 = state_23001__$1;(statearr_23011_23095[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 36))
{var inst_22958 = (state_23001[9]);var inst_22962 = cljs.core.chunk_first(inst_22958);var inst_22963 = cljs.core.chunk_rest(inst_22958);var inst_22964 = cljs.core.count(inst_22962);var inst_22937 = inst_22963;var inst_22938 = inst_22962;var inst_22939 = inst_22964;var inst_22940 = 0;var state_23001__$1 = (function (){var statearr_23012 = state_23001;(statearr_23012[10] = inst_22940);
(statearr_23012[11] = inst_22939);
(statearr_23012[12] = inst_22937);
(statearr_23012[13] = inst_22938);
return statearr_23012;
})();var statearr_23013_23096 = state_23001__$1;(statearr_23013_23096[2] = null);
(statearr_23013_23096[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 5))
{var inst_22876 = cljs.core.deref(cs);var inst_22877 = cljs.core.seq(inst_22876);var inst_22878 = inst_22877;var inst_22879 = null;var inst_22880 = 0;var inst_22881 = 0;var state_23001__$1 = (function (){var statearr_23014 = state_23001;(statearr_23014[14] = inst_22879);
(statearr_23014[15] = inst_22878);
(statearr_23014[16] = inst_22880);
(statearr_23014[17] = inst_22881);
return statearr_23014;
})();var statearr_23015_23097 = state_23001__$1;(statearr_23015_23097[2] = null);
(statearr_23015_23097[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 37))
{var inst_22958 = (state_23001[9]);var inst_22967 = cljs.core.first(inst_22958);var state_23001__$1 = (function (){var statearr_23016 = state_23001;(statearr_23016[18] = inst_22967);
return statearr_23016;
})();var statearr_23017_23098 = state_23001__$1;(statearr_23017_23098[2] = null);
(statearr_23017_23098[1] = 41);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 6))
{var inst_22929 = (state_23001[19]);var inst_22928 = cljs.core.deref(cs);var inst_22929__$1 = cljs.core.keys(inst_22928);var inst_22930 = cljs.core.count(inst_22929__$1);var inst_22931 = cljs.core.reset_BANG_(dctr,inst_22930);var inst_22936 = cljs.core.seq(inst_22929__$1);var inst_22937 = inst_22936;var inst_22938 = null;var inst_22939 = 0;var inst_22940 = 0;var state_23001__$1 = (function (){var statearr_23018 = state_23001;(statearr_23018[10] = inst_22940);
(statearr_23018[19] = inst_22929__$1);
(statearr_23018[20] = inst_22931);
(statearr_23018[11] = inst_22939);
(statearr_23018[12] = inst_22937);
(statearr_23018[13] = inst_22938);
return statearr_23018;
})();var statearr_23019_23099 = state_23001__$1;(statearr_23019_23099[2] = null);
(statearr_23019_23099[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 38))
{var inst_22980 = (state_23001[2]);var state_23001__$1 = state_23001;var statearr_23020_23100 = state_23001__$1;(statearr_23020_23100[2] = inst_22980);
(statearr_23020_23100[1] = 35);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 7))
{var inst_22997 = (state_23001[2]);var state_23001__$1 = state_23001;var statearr_23021_23101 = state_23001__$1;(statearr_23021_23101[2] = inst_22997);
(statearr_23021_23101[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 39))
{var inst_22958 = (state_23001[9]);var inst_22976 = (state_23001[2]);var inst_22977 = cljs.core.next(inst_22958);var inst_22937 = inst_22977;var inst_22938 = null;var inst_22939 = 0;var inst_22940 = 0;var state_23001__$1 = (function (){var statearr_23022 = state_23001;(statearr_23022[10] = inst_22940);
(statearr_23022[21] = inst_22976);
(statearr_23022[11] = inst_22939);
(statearr_23022[12] = inst_22937);
(statearr_23022[13] = inst_22938);
return statearr_23022;
})();var statearr_23023_23102 = state_23001__$1;(statearr_23023_23102[2] = null);
(statearr_23023_23102[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 8))
{var inst_22880 = (state_23001[16]);var inst_22881 = (state_23001[17]);var inst_22883 = (inst_22881 < inst_22880);var inst_22884 = inst_22883;var state_23001__$1 = state_23001;if(cljs.core.truth_(inst_22884))
{var statearr_23024_23103 = state_23001__$1;(statearr_23024_23103[1] = 10);
} else
{var statearr_23025_23104 = state_23001__$1;(statearr_23025_23104[1] = 11);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 40))
{var inst_22967 = (state_23001[18]);var inst_22968 = (state_23001[2]);var inst_22969 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_22970 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22967);var state_23001__$1 = (function (){var statearr_23026 = state_23001;(statearr_23026[22] = inst_22969);
(statearr_23026[23] = inst_22968);
return statearr_23026;
})();var statearr_23027_23105 = state_23001__$1;(statearr_23027_23105[2] = inst_22970);
cljs.core.async.impl.ioc_helpers.process_exception(state_23001__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 9))
{var inst_22926 = (state_23001[2]);var state_23001__$1 = state_23001;var statearr_23028_23106 = state_23001__$1;(statearr_23028_23106[2] = inst_22926);
(statearr_23028_23106[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 41))
{var inst_22967 = (state_23001[18]);var inst_22869 = (state_23001[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23001,40,Object,null,39);var inst_22974 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22967,inst_22869,done);var state_23001__$1 = state_23001;var statearr_23029_23107 = state_23001__$1;(statearr_23029_23107[2] = inst_22974);
cljs.core.async.impl.ioc_helpers.process_exception(state_23001__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 10))
{var inst_22879 = (state_23001[14]);var inst_22881 = (state_23001[17]);var inst_22887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22879,inst_22881);var inst_22888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22887,0,null);var inst_22889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22887,1,null);var state_23001__$1 = (function (){var statearr_23030 = state_23001;(statearr_23030[24] = inst_22888);
return statearr_23030;
})();if(cljs.core.truth_(inst_22889))
{var statearr_23031_23108 = state_23001__$1;(statearr_23031_23108[1] = 13);
} else
{var statearr_23032_23109 = state_23001__$1;(statearr_23032_23109[1] = 14);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 42))
{var state_23001__$1 = state_23001;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23001__$1,45,dchan);
} else
{if((state_val_23002 === 11))
{var inst_22878 = (state_23001[15]);var inst_22898 = (state_23001[25]);var inst_22898__$1 = cljs.core.seq(inst_22878);var state_23001__$1 = (function (){var statearr_23033 = state_23001;(statearr_23033[25] = inst_22898__$1);
return statearr_23033;
})();if(inst_22898__$1)
{var statearr_23034_23110 = state_23001__$1;(statearr_23034_23110[1] = 16);
} else
{var statearr_23035_23111 = state_23001__$1;(statearr_23035_23111[1] = 17);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 43))
{var state_23001__$1 = state_23001;var statearr_23036_23112 = state_23001__$1;(statearr_23036_23112[2] = null);
(statearr_23036_23112[1] = 44);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 12))
{var inst_22924 = (state_23001[2]);var state_23001__$1 = state_23001;var statearr_23037_23113 = state_23001__$1;(statearr_23037_23113[2] = inst_22924);
(statearr_23037_23113[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 44))
{var inst_22994 = (state_23001[2]);var state_23001__$1 = (function (){var statearr_23038 = state_23001;(statearr_23038[26] = inst_22994);
return statearr_23038;
})();var statearr_23039_23114 = state_23001__$1;(statearr_23039_23114[2] = null);
(statearr_23039_23114[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 13))
{var inst_22888 = (state_23001[24]);var inst_22891 = cljs.core.async.close_BANG_(inst_22888);var state_23001__$1 = state_23001;var statearr_23040_23115 = state_23001__$1;(statearr_23040_23115[2] = inst_22891);
(statearr_23040_23115[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 45))
{var inst_22991 = (state_23001[2]);var state_23001__$1 = state_23001;var statearr_23044_23116 = state_23001__$1;(statearr_23044_23116[2] = inst_22991);
(statearr_23044_23116[1] = 44);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 14))
{var state_23001__$1 = state_23001;var statearr_23045_23117 = state_23001__$1;(statearr_23045_23117[2] = null);
(statearr_23045_23117[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 15))
{var inst_22879 = (state_23001[14]);var inst_22878 = (state_23001[15]);var inst_22880 = (state_23001[16]);var inst_22881 = (state_23001[17]);var inst_22894 = (state_23001[2]);var inst_22895 = (inst_22881 + 1);var tmp23041 = inst_22879;var tmp23042 = inst_22878;var tmp23043 = inst_22880;var inst_22878__$1 = tmp23042;var inst_22879__$1 = tmp23041;var inst_22880__$1 = tmp23043;var inst_22881__$1 = inst_22895;var state_23001__$1 = (function (){var statearr_23046 = state_23001;(statearr_23046[14] = inst_22879__$1);
(statearr_23046[15] = inst_22878__$1);
(statearr_23046[16] = inst_22880__$1);
(statearr_23046[27] = inst_22894);
(statearr_23046[17] = inst_22881__$1);
return statearr_23046;
})();var statearr_23047_23118 = state_23001__$1;(statearr_23047_23118[2] = null);
(statearr_23047_23118[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 16))
{var inst_22898 = (state_23001[25]);var inst_22900 = cljs.core.chunked_seq_QMARK_(inst_22898);var state_23001__$1 = state_23001;if(inst_22900)
{var statearr_23048_23119 = state_23001__$1;(statearr_23048_23119[1] = 19);
} else
{var statearr_23049_23120 = state_23001__$1;(statearr_23049_23120[1] = 20);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 17))
{var state_23001__$1 = state_23001;var statearr_23050_23121 = state_23001__$1;(statearr_23050_23121[2] = null);
(statearr_23050_23121[1] = 18);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 18))
{var inst_22922 = (state_23001[2]);var state_23001__$1 = state_23001;var statearr_23051_23122 = state_23001__$1;(statearr_23051_23122[2] = inst_22922);
(statearr_23051_23122[1] = 12);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 19))
{var inst_22898 = (state_23001[25]);var inst_22902 = cljs.core.chunk_first(inst_22898);var inst_22903 = cljs.core.chunk_rest(inst_22898);var inst_22904 = cljs.core.count(inst_22902);var inst_22878 = inst_22903;var inst_22879 = inst_22902;var inst_22880 = inst_22904;var inst_22881 = 0;var state_23001__$1 = (function (){var statearr_23052 = state_23001;(statearr_23052[14] = inst_22879);
(statearr_23052[15] = inst_22878);
(statearr_23052[16] = inst_22880);
(statearr_23052[17] = inst_22881);
return statearr_23052;
})();var statearr_23053_23123 = state_23001__$1;(statearr_23053_23123[2] = null);
(statearr_23053_23123[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 20))
{var inst_22898 = (state_23001[25]);var inst_22908 = cljs.core.first(inst_22898);var inst_22909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22908,0,null);var inst_22910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22908,1,null);var state_23001__$1 = (function (){var statearr_23054 = state_23001;(statearr_23054[28] = inst_22909);
return statearr_23054;
})();if(cljs.core.truth_(inst_22910))
{var statearr_23055_23124 = state_23001__$1;(statearr_23055_23124[1] = 22);
} else
{var statearr_23056_23125 = state_23001__$1;(statearr_23056_23125[1] = 23);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 21))
{var inst_22919 = (state_23001[2]);var state_23001__$1 = state_23001;var statearr_23057_23126 = state_23001__$1;(statearr_23057_23126[2] = inst_22919);
(statearr_23057_23126[1] = 18);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 22))
{var inst_22909 = (state_23001[28]);var inst_22912 = cljs.core.async.close_BANG_(inst_22909);var state_23001__$1 = state_23001;var statearr_23058_23127 = state_23001__$1;(statearr_23058_23127[2] = inst_22912);
(statearr_23058_23127[1] = 24);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 23))
{var state_23001__$1 = state_23001;var statearr_23059_23128 = state_23001__$1;(statearr_23059_23128[2] = null);
(statearr_23059_23128[1] = 24);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 24))
{var inst_22898 = (state_23001[25]);var inst_22915 = (state_23001[2]);var inst_22916 = cljs.core.next(inst_22898);var inst_22878 = inst_22916;var inst_22879 = null;var inst_22880 = 0;var inst_22881 = 0;var state_23001__$1 = (function (){var statearr_23060 = state_23001;(statearr_23060[14] = inst_22879);
(statearr_23060[15] = inst_22878);
(statearr_23060[29] = inst_22915);
(statearr_23060[16] = inst_22880);
(statearr_23060[17] = inst_22881);
return statearr_23060;
})();var statearr_23061_23129 = state_23001__$1;(statearr_23061_23129[2] = null);
(statearr_23061_23129[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 25))
{var inst_22940 = (state_23001[10]);var inst_22939 = (state_23001[11]);var inst_22942 = (inst_22940 < inst_22939);var inst_22943 = inst_22942;var state_23001__$1 = state_23001;if(cljs.core.truth_(inst_22943))
{var statearr_23062_23130 = state_23001__$1;(statearr_23062_23130[1] = 27);
} else
{var statearr_23063_23131 = state_23001__$1;(statearr_23063_23131[1] = 28);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 26))
{var inst_22929 = (state_23001[19]);var inst_22987 = (state_23001[2]);var inst_22988 = cljs.core.seq(inst_22929);var state_23001__$1 = (function (){var statearr_23064 = state_23001;(statearr_23064[30] = inst_22987);
return statearr_23064;
})();if(inst_22988)
{var statearr_23065_23132 = state_23001__$1;(statearr_23065_23132[1] = 42);
} else
{var statearr_23066_23133 = state_23001__$1;(statearr_23066_23133[1] = 43);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 27))
{var inst_22940 = (state_23001[10]);var inst_22938 = (state_23001[13]);var inst_22945 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22938,inst_22940);var state_23001__$1 = (function (){var statearr_23067 = state_23001;(statearr_23067[7] = inst_22945);
return statearr_23067;
})();var statearr_23068_23134 = state_23001__$1;(statearr_23068_23134[2] = null);
(statearr_23068_23134[1] = 32);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 28))
{var inst_22958 = (state_23001[9]);var inst_22937 = (state_23001[12]);var inst_22958__$1 = cljs.core.seq(inst_22937);var state_23001__$1 = (function (){var statearr_23072 = state_23001;(statearr_23072[9] = inst_22958__$1);
return statearr_23072;
})();if(inst_22958__$1)
{var statearr_23073_23135 = state_23001__$1;(statearr_23073_23135[1] = 33);
} else
{var statearr_23074_23136 = state_23001__$1;(statearr_23074_23136[1] = 34);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 29))
{var inst_22985 = (state_23001[2]);var state_23001__$1 = state_23001;var statearr_23075_23137 = state_23001__$1;(statearr_23075_23137[2] = inst_22985);
(statearr_23075_23137[1] = 26);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 30))
{var inst_22940 = (state_23001[10]);var inst_22939 = (state_23001[11]);var inst_22937 = (state_23001[12]);var inst_22938 = (state_23001[13]);var inst_22954 = (state_23001[2]);var inst_22955 = (inst_22940 + 1);var tmp23069 = inst_22939;var tmp23070 = inst_22937;var tmp23071 = inst_22938;var inst_22937__$1 = tmp23070;var inst_22938__$1 = tmp23071;var inst_22939__$1 = tmp23069;var inst_22940__$1 = inst_22955;var state_23001__$1 = (function (){var statearr_23076 = state_23001;(statearr_23076[10] = inst_22940__$1);
(statearr_23076[11] = inst_22939__$1);
(statearr_23076[12] = inst_22937__$1);
(statearr_23076[13] = inst_22938__$1);
(statearr_23076[31] = inst_22954);
return statearr_23076;
})();var statearr_23077_23138 = state_23001__$1;(statearr_23077_23138[2] = null);
(statearr_23077_23138[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23002 === 31))
{var inst_22945 = (state_23001[7]);var inst_22946 = (state_23001[2]);var inst_22947 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_22948 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22945);var state_23001__$1 = (function (){var statearr_23078 = state_23001;(statearr_23078[32] = inst_22947);
(statearr_23078[33] = inst_22946);
return statearr_23078;
})();var statearr_23079_23139 = state_23001__$1;(statearr_23079_23139[2] = inst_22948);
cljs.core.async.impl.ioc_helpers.process_exception(state_23001__$1);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_23083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23083[0] = state_machine__5507__auto__);
(statearr_23083[1] = 1);
return statearr_23083;
});
var state_machine__5507__auto____1 = (function (state_23001){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23001);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23084){if((e23084 instanceof Object))
{var ex__5510__auto__ = e23084;var statearr_23085_23140 = state_23001;(statearr_23085_23140[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23001);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23141 = state_23001;
state_23001 = G__23141;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23001){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23086 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23087);
return statearr_23086;
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
cljs.core.async.Mix = (function (){var obj23143 = {};return obj23143;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$133,null,cljs.core.constant$keyword$134,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$135);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$134);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$135,chs);var pauses = pick(cljs.core.constant$keyword$133,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$136,solos,cljs.core.constant$keyword$137,pick(cljs.core.constant$keyword$134,chs),cljs.core.constant$keyword$138,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$133)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t23253 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23253 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta23254){
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
this.meta23254 = meta23254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23253.cljs$lang$type = true;
cljs.core.async.t23253.cljs$lang$ctorStr = "cljs.core.async/t23253";
cljs.core.async.t23253.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23253");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23253.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23253.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23253.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23253.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23253.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23253.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23253.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23255){var self__ = this;
var _23255__$1 = this;return self__.meta23254;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23255,meta23254__$1){var self__ = this;
var _23255__$1 = this;return (new cljs.core.async.t23253(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta23254__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23253 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23253(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23254){return (new cljs.core.async.t23253(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23254));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23253(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___23362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23320){var state_val_23321 = (state_23320[1]);if((state_val_23321 === 1))
{var inst_23259 = (state_23320[7]);var inst_23259__$1 = calc_state();var inst_23260 = cljs.core.seq_QMARK_(inst_23259__$1);var state_23320__$1 = (function (){var statearr_23322 = state_23320;(statearr_23322[7] = inst_23259__$1);
return statearr_23322;
})();if(inst_23260)
{var statearr_23323_23363 = state_23320__$1;(statearr_23323_23363[1] = 2);
} else
{var statearr_23324_23364 = state_23320__$1;(statearr_23324_23364[1] = 3);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 2))
{var inst_23259 = (state_23320[7]);var inst_23262 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23259);var state_23320__$1 = state_23320;var statearr_23325_23365 = state_23320__$1;(statearr_23325_23365[2] = inst_23262);
(statearr_23325_23365[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 3))
{var inst_23259 = (state_23320[7]);var state_23320__$1 = state_23320;var statearr_23326_23366 = state_23320__$1;(statearr_23326_23366[2] = inst_23259);
(statearr_23326_23366[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 4))
{var inst_23259 = (state_23320[7]);var inst_23265 = (state_23320[2]);var inst_23266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23265,cljs.core.constant$keyword$138);var inst_23267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23265,cljs.core.constant$keyword$137);var inst_23268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23265,cljs.core.constant$keyword$136);var inst_23269 = inst_23259;var state_23320__$1 = (function (){var statearr_23327 = state_23320;(statearr_23327[8] = inst_23269);
(statearr_23327[9] = inst_23268);
(statearr_23327[10] = inst_23267);
(statearr_23327[11] = inst_23266);
return statearr_23327;
})();var statearr_23328_23367 = state_23320__$1;(statearr_23328_23367[2] = null);
(statearr_23328_23367[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 5))
{var inst_23269 = (state_23320[8]);var inst_23272 = cljs.core.seq_QMARK_(inst_23269);var state_23320__$1 = state_23320;if(inst_23272)
{var statearr_23329_23368 = state_23320__$1;(statearr_23329_23368[1] = 7);
} else
{var statearr_23330_23369 = state_23320__$1;(statearr_23330_23369[1] = 8);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 6))
{var inst_23318 = (state_23320[2]);var state_23320__$1 = state_23320;return cljs.core.async.impl.ioc_helpers.return_chan(state_23320__$1,inst_23318);
} else
{if((state_val_23321 === 7))
{var inst_23269 = (state_23320[8]);var inst_23274 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23269);var state_23320__$1 = state_23320;var statearr_23331_23370 = state_23320__$1;(statearr_23331_23370[2] = inst_23274);
(statearr_23331_23370[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 8))
{var inst_23269 = (state_23320[8]);var state_23320__$1 = state_23320;var statearr_23332_23371 = state_23320__$1;(statearr_23332_23371[2] = inst_23269);
(statearr_23332_23371[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 9))
{var inst_23277 = (state_23320[12]);var inst_23277__$1 = (state_23320[2]);var inst_23278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23277__$1,cljs.core.constant$keyword$138);var inst_23279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23277__$1,cljs.core.constant$keyword$137);var inst_23280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23277__$1,cljs.core.constant$keyword$136);var state_23320__$1 = (function (){var statearr_23333 = state_23320;(statearr_23333[13] = inst_23279);
(statearr_23333[14] = inst_23280);
(statearr_23333[12] = inst_23277__$1);
return statearr_23333;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_23320__$1,10,inst_23278);
} else
{if((state_val_23321 === 10))
{var inst_23284 = (state_23320[15]);var inst_23285 = (state_23320[16]);var inst_23283 = (state_23320[2]);var inst_23284__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23283,0,null);var inst_23285__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23283,1,null);var inst_23286 = (inst_23284__$1 == null);var inst_23287 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23285__$1,change);var inst_23288 = (inst_23286) || (inst_23287);var state_23320__$1 = (function (){var statearr_23334 = state_23320;(statearr_23334[15] = inst_23284__$1);
(statearr_23334[16] = inst_23285__$1);
return statearr_23334;
})();if(cljs.core.truth_(inst_23288))
{var statearr_23335_23372 = state_23320__$1;(statearr_23335_23372[1] = 11);
} else
{var statearr_23336_23373 = state_23320__$1;(statearr_23336_23373[1] = 12);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 11))
{var inst_23284 = (state_23320[15]);var inst_23290 = (inst_23284 == null);var state_23320__$1 = state_23320;if(cljs.core.truth_(inst_23290))
{var statearr_23337_23374 = state_23320__$1;(statearr_23337_23374[1] = 14);
} else
{var statearr_23338_23375 = state_23320__$1;(statearr_23338_23375[1] = 15);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 12))
{var inst_23285 = (state_23320[16]);var inst_23280 = (state_23320[14]);var inst_23299 = (state_23320[17]);var inst_23299__$1 = (inst_23280.cljs$core$IFn$_invoke$arity$1 ? inst_23280.cljs$core$IFn$_invoke$arity$1(inst_23285) : inst_23280.call(null,inst_23285));var state_23320__$1 = (function (){var statearr_23339 = state_23320;(statearr_23339[17] = inst_23299__$1);
return statearr_23339;
})();if(cljs.core.truth_(inst_23299__$1))
{var statearr_23340_23376 = state_23320__$1;(statearr_23340_23376[1] = 17);
} else
{var statearr_23341_23377 = state_23320__$1;(statearr_23341_23377[1] = 18);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 13))
{var inst_23316 = (state_23320[2]);var state_23320__$1 = state_23320;var statearr_23342_23378 = state_23320__$1;(statearr_23342_23378[2] = inst_23316);
(statearr_23342_23378[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 14))
{var inst_23285 = (state_23320[16]);var inst_23292 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23285);var state_23320__$1 = state_23320;var statearr_23343_23379 = state_23320__$1;(statearr_23343_23379[2] = inst_23292);
(statearr_23343_23379[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 15))
{var state_23320__$1 = state_23320;var statearr_23344_23380 = state_23320__$1;(statearr_23344_23380[2] = null);
(statearr_23344_23380[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 16))
{var inst_23295 = (state_23320[2]);var inst_23296 = calc_state();var inst_23269 = inst_23296;var state_23320__$1 = (function (){var statearr_23345 = state_23320;(statearr_23345[18] = inst_23295);
(statearr_23345[8] = inst_23269);
return statearr_23345;
})();var statearr_23346_23381 = state_23320__$1;(statearr_23346_23381[2] = null);
(statearr_23346_23381[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 17))
{var inst_23299 = (state_23320[17]);var state_23320__$1 = state_23320;var statearr_23347_23382 = state_23320__$1;(statearr_23347_23382[2] = inst_23299);
(statearr_23347_23382[1] = 19);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 18))
{var inst_23285 = (state_23320[16]);var inst_23279 = (state_23320[13]);var inst_23280 = (state_23320[14]);var inst_23302 = cljs.core.empty_QMARK_(inst_23280);var inst_23303 = (inst_23279.cljs$core$IFn$_invoke$arity$1 ? inst_23279.cljs$core$IFn$_invoke$arity$1(inst_23285) : inst_23279.call(null,inst_23285));var inst_23304 = cljs.core.not(inst_23303);var inst_23305 = (inst_23302) && (inst_23304);var state_23320__$1 = state_23320;var statearr_23348_23383 = state_23320__$1;(statearr_23348_23383[2] = inst_23305);
(statearr_23348_23383[1] = 19);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 19))
{var inst_23307 = (state_23320[2]);var state_23320__$1 = state_23320;if(cljs.core.truth_(inst_23307))
{var statearr_23349_23384 = state_23320__$1;(statearr_23349_23384[1] = 20);
} else
{var statearr_23350_23385 = state_23320__$1;(statearr_23350_23385[1] = 21);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 20))
{var inst_23284 = (state_23320[15]);var state_23320__$1 = state_23320;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23320__$1,23,out,inst_23284);
} else
{if((state_val_23321 === 21))
{var state_23320__$1 = state_23320;var statearr_23351_23386 = state_23320__$1;(statearr_23351_23386[2] = null);
(statearr_23351_23386[1] = 22);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 22))
{var inst_23277 = (state_23320[12]);var inst_23313 = (state_23320[2]);var inst_23269 = inst_23277;var state_23320__$1 = (function (){var statearr_23352 = state_23320;(statearr_23352[19] = inst_23313);
(statearr_23352[8] = inst_23269);
return statearr_23352;
})();var statearr_23353_23387 = state_23320__$1;(statearr_23353_23387[2] = null);
(statearr_23353_23387[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23321 === 23))
{var inst_23310 = (state_23320[2]);var state_23320__$1 = state_23320;var statearr_23354_23388 = state_23320__$1;(statearr_23354_23388[2] = inst_23310);
(statearr_23354_23388[1] = 22);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_23358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23358[0] = state_machine__5507__auto__);
(statearr_23358[1] = 1);
return statearr_23358;
});
var state_machine__5507__auto____1 = (function (state_23320){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23320);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23359){if((e23359 instanceof Object))
{var ex__5510__auto__ = e23359;var statearr_23360_23389 = state_23320;(statearr_23360_23389[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23320);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23390 = state_23320;
state_23320 = G__23390;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23320){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23361 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23362);
return statearr_23361;
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
cljs.core.async.Pub = (function (){var obj23392 = {};return obj23392;
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
return (function (p1__23393_SHARP_){if(cljs.core.truth_((p1__23393_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23393_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23393_SHARP_.call(null,topic))))
{return p1__23393_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23393_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23518 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23518 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23519){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23519 = meta23519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23518.cljs$lang$type = true;
cljs.core.async.t23518.cljs$lang$ctorStr = "cljs.core.async/t23518";
cljs.core.async.t23518.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23518");
});})(mults,ensure_mult))
;
cljs.core.async.t23518.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23518.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23518.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23518.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23520){var self__ = this;
var _23520__$1 = this;return self__.meta23519;
});})(mults,ensure_mult))
;
cljs.core.async.t23518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23520,meta23519__$1){var self__ = this;
var _23520__$1 = this;return (new cljs.core.async.t23518(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23519__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23518 = ((function (mults,ensure_mult){
return (function __GT_t23518(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23519){return (new cljs.core.async.t23518(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23519));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23518(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___23642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23594){var state_val_23595 = (state_23594[1]);if((state_val_23595 === 1))
{var state_23594__$1 = state_23594;var statearr_23596_23643 = state_23594__$1;(statearr_23596_23643[2] = null);
(statearr_23596_23643[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 2))
{var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23594__$1,4,ch);
} else
{if((state_val_23595 === 3))
{var inst_23592 = (state_23594[2]);var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.return_chan(state_23594__$1,inst_23592);
} else
{if((state_val_23595 === 4))
{var inst_23523 = (state_23594[7]);var inst_23523__$1 = (state_23594[2]);var inst_23524 = (inst_23523__$1 == null);var state_23594__$1 = (function (){var statearr_23597 = state_23594;(statearr_23597[7] = inst_23523__$1);
return statearr_23597;
})();if(cljs.core.truth_(inst_23524))
{var statearr_23598_23644 = state_23594__$1;(statearr_23598_23644[1] = 5);
} else
{var statearr_23599_23645 = state_23594__$1;(statearr_23599_23645[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 5))
{var inst_23530 = cljs.core.deref(mults);var inst_23531 = cljs.core.vals(inst_23530);var inst_23532 = cljs.core.seq(inst_23531);var inst_23533 = inst_23532;var inst_23534 = null;var inst_23535 = 0;var inst_23536 = 0;var state_23594__$1 = (function (){var statearr_23600 = state_23594;(statearr_23600[8] = inst_23534);
(statearr_23600[9] = inst_23535);
(statearr_23600[10] = inst_23536);
(statearr_23600[11] = inst_23533);
return statearr_23600;
})();var statearr_23601_23646 = state_23594__$1;(statearr_23601_23646[2] = null);
(statearr_23601_23646[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 6))
{var inst_23573 = (state_23594[12]);var inst_23571 = (state_23594[13]);var inst_23523 = (state_23594[7]);var inst_23571__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23523) : topic_fn.call(null,inst_23523));var inst_23572 = cljs.core.deref(mults);var inst_23573__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23572,inst_23571__$1);var state_23594__$1 = (function (){var statearr_23602 = state_23594;(statearr_23602[12] = inst_23573__$1);
(statearr_23602[13] = inst_23571__$1);
return statearr_23602;
})();if(cljs.core.truth_(inst_23573__$1))
{var statearr_23603_23647 = state_23594__$1;(statearr_23603_23647[1] = 19);
} else
{var statearr_23604_23648 = state_23594__$1;(statearr_23604_23648[1] = 20);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 7))
{var inst_23590 = (state_23594[2]);var state_23594__$1 = state_23594;var statearr_23605_23649 = state_23594__$1;(statearr_23605_23649[2] = inst_23590);
(statearr_23605_23649[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 8))
{var inst_23535 = (state_23594[9]);var inst_23536 = (state_23594[10]);var inst_23538 = (inst_23536 < inst_23535);var inst_23539 = inst_23538;var state_23594__$1 = state_23594;if(cljs.core.truth_(inst_23539))
{var statearr_23609_23650 = state_23594__$1;(statearr_23609_23650[1] = 10);
} else
{var statearr_23610_23651 = state_23594__$1;(statearr_23610_23651[1] = 11);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 9))
{var inst_23569 = (state_23594[2]);var state_23594__$1 = state_23594;var statearr_23611_23652 = state_23594__$1;(statearr_23611_23652[2] = inst_23569);
(statearr_23611_23652[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 10))
{var inst_23534 = (state_23594[8]);var inst_23535 = (state_23594[9]);var inst_23536 = (state_23594[10]);var inst_23533 = (state_23594[11]);var inst_23541 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23534,inst_23536);var inst_23542 = cljs.core.async.muxch_STAR_(inst_23541);var inst_23543 = cljs.core.async.close_BANG_(inst_23542);var inst_23544 = (inst_23536 + 1);var tmp23606 = inst_23534;var tmp23607 = inst_23535;var tmp23608 = inst_23533;var inst_23533__$1 = tmp23608;var inst_23534__$1 = tmp23606;var inst_23535__$1 = tmp23607;var inst_23536__$1 = inst_23544;var state_23594__$1 = (function (){var statearr_23612 = state_23594;(statearr_23612[8] = inst_23534__$1);
(statearr_23612[14] = inst_23543);
(statearr_23612[9] = inst_23535__$1);
(statearr_23612[10] = inst_23536__$1);
(statearr_23612[11] = inst_23533__$1);
return statearr_23612;
})();var statearr_23613_23653 = state_23594__$1;(statearr_23613_23653[2] = null);
(statearr_23613_23653[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 11))
{var inst_23547 = (state_23594[15]);var inst_23533 = (state_23594[11]);var inst_23547__$1 = cljs.core.seq(inst_23533);var state_23594__$1 = (function (){var statearr_23614 = state_23594;(statearr_23614[15] = inst_23547__$1);
return statearr_23614;
})();if(inst_23547__$1)
{var statearr_23615_23654 = state_23594__$1;(statearr_23615_23654[1] = 13);
} else
{var statearr_23616_23655 = state_23594__$1;(statearr_23616_23655[1] = 14);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 12))
{var inst_23567 = (state_23594[2]);var state_23594__$1 = state_23594;var statearr_23617_23656 = state_23594__$1;(statearr_23617_23656[2] = inst_23567);
(statearr_23617_23656[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 13))
{var inst_23547 = (state_23594[15]);var inst_23549 = cljs.core.chunked_seq_QMARK_(inst_23547);var state_23594__$1 = state_23594;if(inst_23549)
{var statearr_23618_23657 = state_23594__$1;(statearr_23618_23657[1] = 16);
} else
{var statearr_23619_23658 = state_23594__$1;(statearr_23619_23658[1] = 17);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 14))
{var state_23594__$1 = state_23594;var statearr_23620_23659 = state_23594__$1;(statearr_23620_23659[2] = null);
(statearr_23620_23659[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 15))
{var inst_23565 = (state_23594[2]);var state_23594__$1 = state_23594;var statearr_23621_23660 = state_23594__$1;(statearr_23621_23660[2] = inst_23565);
(statearr_23621_23660[1] = 12);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 16))
{var inst_23547 = (state_23594[15]);var inst_23551 = cljs.core.chunk_first(inst_23547);var inst_23552 = cljs.core.chunk_rest(inst_23547);var inst_23553 = cljs.core.count(inst_23551);var inst_23533 = inst_23552;var inst_23534 = inst_23551;var inst_23535 = inst_23553;var inst_23536 = 0;var state_23594__$1 = (function (){var statearr_23622 = state_23594;(statearr_23622[8] = inst_23534);
(statearr_23622[9] = inst_23535);
(statearr_23622[10] = inst_23536);
(statearr_23622[11] = inst_23533);
return statearr_23622;
})();var statearr_23623_23661 = state_23594__$1;(statearr_23623_23661[2] = null);
(statearr_23623_23661[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 17))
{var inst_23547 = (state_23594[15]);var inst_23556 = cljs.core.first(inst_23547);var inst_23557 = cljs.core.async.muxch_STAR_(inst_23556);var inst_23558 = cljs.core.async.close_BANG_(inst_23557);var inst_23559 = cljs.core.next(inst_23547);var inst_23533 = inst_23559;var inst_23534 = null;var inst_23535 = 0;var inst_23536 = 0;var state_23594__$1 = (function (){var statearr_23624 = state_23594;(statearr_23624[16] = inst_23558);
(statearr_23624[8] = inst_23534);
(statearr_23624[9] = inst_23535);
(statearr_23624[10] = inst_23536);
(statearr_23624[11] = inst_23533);
return statearr_23624;
})();var statearr_23625_23662 = state_23594__$1;(statearr_23625_23662[2] = null);
(statearr_23625_23662[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 18))
{var inst_23562 = (state_23594[2]);var state_23594__$1 = state_23594;var statearr_23626_23663 = state_23594__$1;(statearr_23626_23663[2] = inst_23562);
(statearr_23626_23663[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 19))
{var state_23594__$1 = state_23594;var statearr_23627_23664 = state_23594__$1;(statearr_23627_23664[2] = null);
(statearr_23627_23664[1] = 24);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 20))
{var state_23594__$1 = state_23594;var statearr_23628_23665 = state_23594__$1;(statearr_23628_23665[2] = null);
(statearr_23628_23665[1] = 21);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 21))
{var inst_23587 = (state_23594[2]);var state_23594__$1 = (function (){var statearr_23629 = state_23594;(statearr_23629[17] = inst_23587);
return statearr_23629;
})();var statearr_23630_23666 = state_23594__$1;(statearr_23630_23666[2] = null);
(statearr_23630_23666[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 22))
{var inst_23584 = (state_23594[2]);var state_23594__$1 = state_23594;var statearr_23631_23667 = state_23594__$1;(statearr_23631_23667[2] = inst_23584);
(statearr_23631_23667[1] = 21);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 23))
{var inst_23571 = (state_23594[13]);var inst_23575 = (state_23594[2]);var inst_23576 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23571);var state_23594__$1 = (function (){var statearr_23632 = state_23594;(statearr_23632[18] = inst_23575);
return statearr_23632;
})();var statearr_23633_23668 = state_23594__$1;(statearr_23633_23668[2] = inst_23576);
cljs.core.async.impl.ioc_helpers.process_exception(state_23594__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23595 === 24))
{var inst_23573 = (state_23594[12]);var inst_23523 = (state_23594[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23594,23,Object,null,22);var inst_23580 = cljs.core.async.muxch_STAR_(inst_23573);var state_23594__$1 = state_23594;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23594__$1,25,inst_23580,inst_23523);
} else
{if((state_val_23595 === 25))
{var inst_23582 = (state_23594[2]);var state_23594__$1 = state_23594;var statearr_23634_23669 = state_23594__$1;(statearr_23634_23669[2] = inst_23582);
cljs.core.async.impl.ioc_helpers.process_exception(state_23594__$1);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_23638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23638[0] = state_machine__5507__auto__);
(statearr_23638[1] = 1);
return statearr_23638;
});
var state_machine__5507__auto____1 = (function (state_23594){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23594);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23639){if((e23639 instanceof Object))
{var ex__5510__auto__ = e23639;var statearr_23640_23670 = state_23594;(statearr_23640_23670[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23594);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23671 = state_23594;
state_23594 = G__23671;
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
})();var state__5523__auto__ = (function (){var statearr_23641 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23642);
return statearr_23641;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___23808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23778){var state_val_23779 = (state_23778[1]);if((state_val_23779 === 1))
{var state_23778__$1 = state_23778;var statearr_23780_23809 = state_23778__$1;(statearr_23780_23809[2] = null);
(statearr_23780_23809[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 2))
{var inst_23741 = cljs.core.reset_BANG_(dctr,cnt);var inst_23742 = 0;var state_23778__$1 = (function (){var statearr_23781 = state_23778;(statearr_23781[7] = inst_23742);
(statearr_23781[8] = inst_23741);
return statearr_23781;
})();var statearr_23782_23810 = state_23778__$1;(statearr_23782_23810[2] = null);
(statearr_23782_23810[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 3))
{var inst_23776 = (state_23778[2]);var state_23778__$1 = state_23778;return cljs.core.async.impl.ioc_helpers.return_chan(state_23778__$1,inst_23776);
} else
{if((state_val_23779 === 4))
{var inst_23742 = (state_23778[7]);var inst_23744 = (inst_23742 < cnt);var state_23778__$1 = state_23778;if(cljs.core.truth_(inst_23744))
{var statearr_23783_23811 = state_23778__$1;(statearr_23783_23811[1] = 6);
} else
{var statearr_23784_23812 = state_23778__$1;(statearr_23784_23812[1] = 7);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 5))
{var inst_23762 = (state_23778[2]);var state_23778__$1 = (function (){var statearr_23785 = state_23778;(statearr_23785[9] = inst_23762);
return statearr_23785;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23778__$1,12,dchan);
} else
{if((state_val_23779 === 6))
{var state_23778__$1 = state_23778;var statearr_23786_23813 = state_23778__$1;(statearr_23786_23813[2] = null);
(statearr_23786_23813[1] = 11);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 7))
{var state_23778__$1 = state_23778;var statearr_23787_23814 = state_23778__$1;(statearr_23787_23814[2] = null);
(statearr_23787_23814[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 8))
{var inst_23760 = (state_23778[2]);var state_23778__$1 = state_23778;var statearr_23788_23815 = state_23778__$1;(statearr_23788_23815[2] = inst_23760);
(statearr_23788_23815[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 9))
{var inst_23742 = (state_23778[7]);var inst_23755 = (state_23778[2]);var inst_23756 = (inst_23742 + 1);var inst_23742__$1 = inst_23756;var state_23778__$1 = (function (){var statearr_23789 = state_23778;(statearr_23789[10] = inst_23755);
(statearr_23789[7] = inst_23742__$1);
return statearr_23789;
})();var statearr_23790_23816 = state_23778__$1;(statearr_23790_23816[2] = null);
(statearr_23790_23816[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 10))
{var inst_23746 = (state_23778[2]);var inst_23747 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_23778__$1 = (function (){var statearr_23791 = state_23778;(statearr_23791[11] = inst_23746);
return statearr_23791;
})();var statearr_23792_23817 = state_23778__$1;(statearr_23792_23817[2] = inst_23747);
cljs.core.async.impl.ioc_helpers.process_exception(state_23778__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 11))
{var inst_23742 = (state_23778[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23778,10,Object,null,9);var inst_23751 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_23742) : chs__$1.call(null,inst_23742));var inst_23752 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_23742) : done.call(null,inst_23742));var inst_23753 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23751,inst_23752);var state_23778__$1 = state_23778;var statearr_23793_23818 = state_23778__$1;(statearr_23793_23818[2] = inst_23753);
cljs.core.async.impl.ioc_helpers.process_exception(state_23778__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 12))
{var inst_23764 = (state_23778[12]);var inst_23764__$1 = (state_23778[2]);var inst_23765 = cljs.core.some(cljs.core.nil_QMARK_,inst_23764__$1);var state_23778__$1 = (function (){var statearr_23794 = state_23778;(statearr_23794[12] = inst_23764__$1);
return statearr_23794;
})();if(cljs.core.truth_(inst_23765))
{var statearr_23795_23819 = state_23778__$1;(statearr_23795_23819[1] = 13);
} else
{var statearr_23796_23820 = state_23778__$1;(statearr_23796_23820[1] = 14);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 13))
{var inst_23767 = cljs.core.async.close_BANG_(out);var state_23778__$1 = state_23778;var statearr_23797_23821 = state_23778__$1;(statearr_23797_23821[2] = inst_23767);
(statearr_23797_23821[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 14))
{var inst_23764 = (state_23778[12]);var inst_23769 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23764);var state_23778__$1 = state_23778;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23778__$1,16,out,inst_23769);
} else
{if((state_val_23779 === 15))
{var inst_23774 = (state_23778[2]);var state_23778__$1 = state_23778;var statearr_23798_23822 = state_23778__$1;(statearr_23798_23822[2] = inst_23774);
(statearr_23798_23822[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23779 === 16))
{var inst_23771 = (state_23778[2]);var state_23778__$1 = (function (){var statearr_23799 = state_23778;(statearr_23799[13] = inst_23771);
return statearr_23799;
})();var statearr_23800_23823 = state_23778__$1;(statearr_23800_23823[2] = null);
(statearr_23800_23823[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_23804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23804[0] = state_machine__5507__auto__);
(statearr_23804[1] = 1);
return statearr_23804;
});
var state_machine__5507__auto____1 = (function (state_23778){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23778);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23805){if((e23805 instanceof Object))
{var ex__5510__auto__ = e23805;var statearr_23806_23824 = state_23778;(statearr_23806_23824[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23778);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23825 = state_23778;
state_23778 = G__23825;
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
})();var state__5523__auto__ = (function (){var statearr_23807 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23808);
return statearr_23807;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23909){var state_val_23910 = (state_23909[1]);if((state_val_23910 === 1))
{var inst_23880 = cljs.core.vec(chs);var inst_23881 = inst_23880;var state_23909__$1 = (function (){var statearr_23911 = state_23909;(statearr_23911[7] = inst_23881);
return statearr_23911;
})();var statearr_23912_23934 = state_23909__$1;(statearr_23912_23934[2] = null);
(statearr_23912_23934[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23910 === 2))
{var inst_23881 = (state_23909[7]);var inst_23883 = cljs.core.count(inst_23881);var inst_23884 = (inst_23883 > 0);var state_23909__$1 = state_23909;if(cljs.core.truth_(inst_23884))
{var statearr_23913_23935 = state_23909__$1;(statearr_23913_23935[1] = 4);
} else
{var statearr_23914_23936 = state_23909__$1;(statearr_23914_23936[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23910 === 3))
{var inst_23907 = (state_23909[2]);var state_23909__$1 = state_23909;return cljs.core.async.impl.ioc_helpers.return_chan(state_23909__$1,inst_23907);
} else
{if((state_val_23910 === 4))
{var inst_23881 = (state_23909[7]);var state_23909__$1 = state_23909;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_23909__$1,7,inst_23881);
} else
{if((state_val_23910 === 5))
{var inst_23903 = cljs.core.async.close_BANG_(out);var state_23909__$1 = state_23909;var statearr_23915_23937 = state_23909__$1;(statearr_23915_23937[2] = inst_23903);
(statearr_23915_23937[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23910 === 6))
{var inst_23905 = (state_23909[2]);var state_23909__$1 = state_23909;var statearr_23916_23938 = state_23909__$1;(statearr_23916_23938[2] = inst_23905);
(statearr_23916_23938[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23910 === 7))
{var inst_23888 = (state_23909[8]);var inst_23889 = (state_23909[9]);var inst_23888__$1 = (state_23909[2]);var inst_23889__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23888__$1,0,null);var inst_23890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23888__$1,1,null);var inst_23891 = (inst_23889__$1 == null);var state_23909__$1 = (function (){var statearr_23917 = state_23909;(statearr_23917[10] = inst_23890);
(statearr_23917[8] = inst_23888__$1);
(statearr_23917[9] = inst_23889__$1);
return statearr_23917;
})();if(cljs.core.truth_(inst_23891))
{var statearr_23918_23939 = state_23909__$1;(statearr_23918_23939[1] = 8);
} else
{var statearr_23919_23940 = state_23909__$1;(statearr_23919_23940[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23910 === 8))
{var inst_23881 = (state_23909[7]);var inst_23890 = (state_23909[10]);var inst_23888 = (state_23909[8]);var inst_23889 = (state_23909[9]);var inst_23893 = (function (){var c = inst_23890;var v = inst_23889;var vec__23886 = inst_23888;var cs = inst_23881;return ((function (c,v,vec__23886,cs,inst_23881,inst_23890,inst_23888,inst_23889,state_val_23910){
return (function (p1__23826_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23826_SHARP_);
});
;})(c,v,vec__23886,cs,inst_23881,inst_23890,inst_23888,inst_23889,state_val_23910))
})();var inst_23894 = cljs.core.filterv(inst_23893,inst_23881);var inst_23881__$1 = inst_23894;var state_23909__$1 = (function (){var statearr_23920 = state_23909;(statearr_23920[7] = inst_23881__$1);
return statearr_23920;
})();var statearr_23921_23941 = state_23909__$1;(statearr_23921_23941[2] = null);
(statearr_23921_23941[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23910 === 9))
{var inst_23889 = (state_23909[9]);var state_23909__$1 = state_23909;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23909__$1,11,out,inst_23889);
} else
{if((state_val_23910 === 10))
{var inst_23901 = (state_23909[2]);var state_23909__$1 = state_23909;var statearr_23923_23942 = state_23909__$1;(statearr_23923_23942[2] = inst_23901);
(statearr_23923_23942[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23910 === 11))
{var inst_23881 = (state_23909[7]);var inst_23898 = (state_23909[2]);var tmp23922 = inst_23881;var inst_23881__$1 = tmp23922;var state_23909__$1 = (function (){var statearr_23924 = state_23909;(statearr_23924[7] = inst_23881__$1);
(statearr_23924[11] = inst_23898);
return statearr_23924;
})();var statearr_23925_23943 = state_23909__$1;(statearr_23925_23943[2] = null);
(statearr_23925_23943[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_23929 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23929[0] = state_machine__5507__auto__);
(statearr_23929[1] = 1);
return statearr_23929;
});
var state_machine__5507__auto____1 = (function (state_23909){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23909);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23930){if((e23930 instanceof Object))
{var ex__5510__auto__ = e23930;var statearr_23931_23944 = state_23909;(statearr_23931_23944[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23909);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23945 = state_23909;
state_23909 = G__23945;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23909){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23932 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23933);
return statearr_23932;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24015){var state_val_24016 = (state_24015[1]);if((state_val_24016 === 1))
{var inst_23992 = 0;var state_24015__$1 = (function (){var statearr_24017 = state_24015;(statearr_24017[7] = inst_23992);
return statearr_24017;
})();var statearr_24018_24039 = state_24015__$1;(statearr_24018_24039[2] = null);
(statearr_24018_24039[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24016 === 2))
{var inst_23992 = (state_24015[7]);var inst_23994 = (inst_23992 < n);var state_24015__$1 = state_24015;if(cljs.core.truth_(inst_23994))
{var statearr_24019_24040 = state_24015__$1;(statearr_24019_24040[1] = 4);
} else
{var statearr_24020_24041 = state_24015__$1;(statearr_24020_24041[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24016 === 3))
{var inst_24012 = (state_24015[2]);var inst_24013 = cljs.core.async.close_BANG_(out);var state_24015__$1 = (function (){var statearr_24021 = state_24015;(statearr_24021[8] = inst_24012);
return statearr_24021;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24015__$1,inst_24013);
} else
{if((state_val_24016 === 4))
{var state_24015__$1 = state_24015;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24015__$1,7,ch);
} else
{if((state_val_24016 === 5))
{var state_24015__$1 = state_24015;var statearr_24022_24042 = state_24015__$1;(statearr_24022_24042[2] = null);
(statearr_24022_24042[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24016 === 6))
{var inst_24010 = (state_24015[2]);var state_24015__$1 = state_24015;var statearr_24023_24043 = state_24015__$1;(statearr_24023_24043[2] = inst_24010);
(statearr_24023_24043[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24016 === 7))
{var inst_23997 = (state_24015[9]);var inst_23997__$1 = (state_24015[2]);var inst_23998 = (inst_23997__$1 == null);var inst_23999 = cljs.core.not(inst_23998);var state_24015__$1 = (function (){var statearr_24024 = state_24015;(statearr_24024[9] = inst_23997__$1);
return statearr_24024;
})();if(inst_23999)
{var statearr_24025_24044 = state_24015__$1;(statearr_24025_24044[1] = 8);
} else
{var statearr_24026_24045 = state_24015__$1;(statearr_24026_24045[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24016 === 8))
{var inst_23997 = (state_24015[9]);var state_24015__$1 = state_24015;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24015__$1,11,out,inst_23997);
} else
{if((state_val_24016 === 9))
{var state_24015__$1 = state_24015;var statearr_24027_24046 = state_24015__$1;(statearr_24027_24046[2] = null);
(statearr_24027_24046[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24016 === 10))
{var inst_24007 = (state_24015[2]);var state_24015__$1 = state_24015;var statearr_24028_24047 = state_24015__$1;(statearr_24028_24047[2] = inst_24007);
(statearr_24028_24047[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24016 === 11))
{var inst_23992 = (state_24015[7]);var inst_24002 = (state_24015[2]);var inst_24003 = (inst_23992 + 1);var inst_23992__$1 = inst_24003;var state_24015__$1 = (function (){var statearr_24029 = state_24015;(statearr_24029[10] = inst_24002);
(statearr_24029[7] = inst_23992__$1);
return statearr_24029;
})();var statearr_24030_24048 = state_24015__$1;(statearr_24030_24048[2] = null);
(statearr_24030_24048[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_24034 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24034[0] = state_machine__5507__auto__);
(statearr_24034[1] = 1);
return statearr_24034;
});
var state_machine__5507__auto____1 = (function (state_24015){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24015);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24035){if((e24035 instanceof Object))
{var ex__5510__auto__ = e24035;var statearr_24036_24049 = state_24015;(statearr_24036_24049[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24015);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e24035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__24050 = state_24015;
state_24015 = G__24050;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24015){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24015);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24122){var state_val_24123 = (state_24122[1]);if((state_val_24123 === 1))
{var inst_24099 = null;var state_24122__$1 = (function (){var statearr_24124 = state_24122;(statearr_24124[7] = inst_24099);
return statearr_24124;
})();var statearr_24125_24148 = state_24122__$1;(statearr_24125_24148[2] = null);
(statearr_24125_24148[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24123 === 2))
{var state_24122__$1 = state_24122;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24122__$1,4,ch);
} else
{if((state_val_24123 === 3))
{var inst_24119 = (state_24122[2]);var inst_24120 = cljs.core.async.close_BANG_(out);var state_24122__$1 = (function (){var statearr_24126 = state_24122;(statearr_24126[8] = inst_24119);
return statearr_24126;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24122__$1,inst_24120);
} else
{if((state_val_24123 === 4))
{var inst_24102 = (state_24122[9]);var inst_24102__$1 = (state_24122[2]);var inst_24103 = (inst_24102__$1 == null);var inst_24104 = cljs.core.not(inst_24103);var state_24122__$1 = (function (){var statearr_24127 = state_24122;(statearr_24127[9] = inst_24102__$1);
return statearr_24127;
})();if(inst_24104)
{var statearr_24128_24149 = state_24122__$1;(statearr_24128_24149[1] = 5);
} else
{var statearr_24129_24150 = state_24122__$1;(statearr_24129_24150[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24123 === 5))
{var inst_24099 = (state_24122[7]);var inst_24102 = (state_24122[9]);var inst_24106 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24102,inst_24099);var state_24122__$1 = state_24122;if(inst_24106)
{var statearr_24130_24151 = state_24122__$1;(statearr_24130_24151[1] = 8);
} else
{var statearr_24131_24152 = state_24122__$1;(statearr_24131_24152[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24123 === 6))
{var state_24122__$1 = state_24122;var statearr_24133_24153 = state_24122__$1;(statearr_24133_24153[2] = null);
(statearr_24133_24153[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24123 === 7))
{var inst_24117 = (state_24122[2]);var state_24122__$1 = state_24122;var statearr_24134_24154 = state_24122__$1;(statearr_24134_24154[2] = inst_24117);
(statearr_24134_24154[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24123 === 8))
{var inst_24099 = (state_24122[7]);var tmp24132 = inst_24099;var inst_24099__$1 = tmp24132;var state_24122__$1 = (function (){var statearr_24135 = state_24122;(statearr_24135[7] = inst_24099__$1);
return statearr_24135;
})();var statearr_24136_24155 = state_24122__$1;(statearr_24136_24155[2] = null);
(statearr_24136_24155[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24123 === 9))
{var inst_24102 = (state_24122[9]);var state_24122__$1 = state_24122;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24122__$1,11,out,inst_24102);
} else
{if((state_val_24123 === 10))
{var inst_24114 = (state_24122[2]);var state_24122__$1 = state_24122;var statearr_24137_24156 = state_24122__$1;(statearr_24137_24156[2] = inst_24114);
(statearr_24137_24156[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24123 === 11))
{var inst_24102 = (state_24122[9]);var inst_24111 = (state_24122[2]);var inst_24099 = inst_24102;var state_24122__$1 = (function (){var statearr_24138 = state_24122;(statearr_24138[7] = inst_24099);
(statearr_24138[10] = inst_24111);
return statearr_24138;
})();var statearr_24139_24157 = state_24122__$1;(statearr_24139_24157[2] = null);
(statearr_24139_24157[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_24143 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24143[0] = state_machine__5507__auto__);
(statearr_24143[1] = 1);
return statearr_24143;
});
var state_machine__5507__auto____1 = (function (state_24122){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24122);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24144){if((e24144 instanceof Object))
{var ex__5510__auto__ = e24144;var statearr_24145_24158 = state_24122;(statearr_24145_24158[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24122);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e24144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__24159 = state_24122;
state_24122 = G__24159;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24122){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24146 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24147);
return statearr_24146;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24264){var state_val_24265 = (state_24264[1]);if((state_val_24265 === 1))
{var inst_24227 = (new Array(n));var inst_24228 = inst_24227;var inst_24229 = 0;var state_24264__$1 = (function (){var statearr_24266 = state_24264;(statearr_24266[7] = inst_24228);
(statearr_24266[8] = inst_24229);
return statearr_24266;
})();var statearr_24267_24295 = state_24264__$1;(statearr_24267_24295[2] = null);
(statearr_24267_24295[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24265 === 2))
{var state_24264__$1 = state_24264;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24264__$1,4,ch);
} else
{if((state_val_24265 === 3))
{var inst_24262 = (state_24264[2]);var state_24264__$1 = state_24264;return cljs.core.async.impl.ioc_helpers.return_chan(state_24264__$1,inst_24262);
} else
{if((state_val_24265 === 4))
{var inst_24232 = (state_24264[9]);var inst_24232__$1 = (state_24264[2]);var inst_24233 = (inst_24232__$1 == null);var inst_24234 = cljs.core.not(inst_24233);var state_24264__$1 = (function (){var statearr_24268 = state_24264;(statearr_24268[9] = inst_24232__$1);
return statearr_24268;
})();if(inst_24234)
{var statearr_24269_24296 = state_24264__$1;(statearr_24269_24296[1] = 5);
} else
{var statearr_24270_24297 = state_24264__$1;(statearr_24270_24297[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24265 === 5))
{var inst_24237 = (state_24264[10]);var inst_24228 = (state_24264[7]);var inst_24229 = (state_24264[8]);var inst_24232 = (state_24264[9]);var inst_24236 = (inst_24228[inst_24229] = inst_24232);var inst_24237__$1 = (inst_24229 + 1);var inst_24238 = (inst_24237__$1 < n);var state_24264__$1 = (function (){var statearr_24271 = state_24264;(statearr_24271[10] = inst_24237__$1);
(statearr_24271[11] = inst_24236);
return statearr_24271;
})();if(cljs.core.truth_(inst_24238))
{var statearr_24272_24298 = state_24264__$1;(statearr_24272_24298[1] = 8);
} else
{var statearr_24273_24299 = state_24264__$1;(statearr_24273_24299[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24265 === 6))
{var inst_24229 = (state_24264[8]);var inst_24250 = (inst_24229 > 0);var state_24264__$1 = state_24264;if(cljs.core.truth_(inst_24250))
{var statearr_24275_24300 = state_24264__$1;(statearr_24275_24300[1] = 12);
} else
{var statearr_24276_24301 = state_24264__$1;(statearr_24276_24301[1] = 13);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24265 === 7))
{var inst_24260 = (state_24264[2]);var state_24264__$1 = state_24264;var statearr_24277_24302 = state_24264__$1;(statearr_24277_24302[2] = inst_24260);
(statearr_24277_24302[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24265 === 8))
{var inst_24237 = (state_24264[10]);var inst_24228 = (state_24264[7]);var tmp24274 = inst_24228;var inst_24228__$1 = tmp24274;var inst_24229 = inst_24237;var state_24264__$1 = (function (){var statearr_24278 = state_24264;(statearr_24278[7] = inst_24228__$1);
(statearr_24278[8] = inst_24229);
return statearr_24278;
})();var statearr_24279_24303 = state_24264__$1;(statearr_24279_24303[2] = null);
(statearr_24279_24303[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24265 === 9))
{var inst_24228 = (state_24264[7]);var inst_24242 = cljs.core.vec(inst_24228);var state_24264__$1 = state_24264;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24264__$1,11,out,inst_24242);
} else
{if((state_val_24265 === 10))
{var inst_24248 = (state_24264[2]);var state_24264__$1 = state_24264;var statearr_24280_24304 = state_24264__$1;(statearr_24280_24304[2] = inst_24248);
(statearr_24280_24304[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24265 === 11))
{var inst_24244 = (state_24264[2]);var inst_24245 = (new Array(n));var inst_24228 = inst_24245;var inst_24229 = 0;var state_24264__$1 = (function (){var statearr_24281 = state_24264;(statearr_24281[12] = inst_24244);
(statearr_24281[7] = inst_24228);
(statearr_24281[8] = inst_24229);
return statearr_24281;
})();var statearr_24282_24305 = state_24264__$1;(statearr_24282_24305[2] = null);
(statearr_24282_24305[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24265 === 12))
{var inst_24228 = (state_24264[7]);var inst_24252 = cljs.core.vec(inst_24228);var state_24264__$1 = state_24264;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24264__$1,15,out,inst_24252);
} else
{if((state_val_24265 === 13))
{var state_24264__$1 = state_24264;var statearr_24283_24306 = state_24264__$1;(statearr_24283_24306[2] = null);
(statearr_24283_24306[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24265 === 14))
{var inst_24257 = (state_24264[2]);var inst_24258 = cljs.core.async.close_BANG_(out);var state_24264__$1 = (function (){var statearr_24284 = state_24264;(statearr_24284[13] = inst_24257);
return statearr_24284;
})();var statearr_24285_24307 = state_24264__$1;(statearr_24285_24307[2] = inst_24258);
(statearr_24285_24307[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24265 === 15))
{var inst_24254 = (state_24264[2]);var state_24264__$1 = state_24264;var statearr_24286_24308 = state_24264__$1;(statearr_24286_24308[2] = inst_24254);
(statearr_24286_24308[1] = 14);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_24290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24290[0] = state_machine__5507__auto__);
(statearr_24290[1] = 1);
return statearr_24290;
});
var state_machine__5507__auto____1 = (function (state_24264){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24264);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24291){if((e24291 instanceof Object))
{var ex__5510__auto__ = e24291;var statearr_24292_24309 = state_24264;(statearr_24292_24309[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24264);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e24291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__24310 = state_24264;
state_24264 = G__24310;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24264){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24293 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24294);
return statearr_24293;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24423){var state_val_24424 = (state_24423[1]);if((state_val_24424 === 1))
{var inst_24382 = [];var inst_24383 = inst_24382;var inst_24384 = cljs.core.constant$keyword$139;var state_24423__$1 = (function (){var statearr_24425 = state_24423;(statearr_24425[7] = inst_24384);
(statearr_24425[8] = inst_24383);
return statearr_24425;
})();var statearr_24426_24454 = state_24423__$1;(statearr_24426_24454[2] = null);
(statearr_24426_24454[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24424 === 2))
{var state_24423__$1 = state_24423;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24423__$1,4,ch);
} else
{if((state_val_24424 === 3))
{var inst_24421 = (state_24423[2]);var state_24423__$1 = state_24423;return cljs.core.async.impl.ioc_helpers.return_chan(state_24423__$1,inst_24421);
} else
{if((state_val_24424 === 4))
{var inst_24387 = (state_24423[9]);var inst_24387__$1 = (state_24423[2]);var inst_24388 = (inst_24387__$1 == null);var inst_24389 = cljs.core.not(inst_24388);var state_24423__$1 = (function (){var statearr_24427 = state_24423;(statearr_24427[9] = inst_24387__$1);
return statearr_24427;
})();if(inst_24389)
{var statearr_24428_24455 = state_24423__$1;(statearr_24428_24455[1] = 5);
} else
{var statearr_24429_24456 = state_24423__$1;(statearr_24429_24456[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24424 === 5))
{var inst_24387 = (state_24423[9]);var inst_24384 = (state_24423[7]);var inst_24391 = (state_24423[10]);var inst_24391__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24387) : f.call(null,inst_24387));var inst_24392 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24391__$1,inst_24384);var inst_24393 = cljs.core.keyword_identical_QMARK_(inst_24384,cljs.core.constant$keyword$139);var inst_24394 = (inst_24392) || (inst_24393);var state_24423__$1 = (function (){var statearr_24430 = state_24423;(statearr_24430[10] = inst_24391__$1);
return statearr_24430;
})();if(cljs.core.truth_(inst_24394))
{var statearr_24431_24457 = state_24423__$1;(statearr_24431_24457[1] = 8);
} else
{var statearr_24432_24458 = state_24423__$1;(statearr_24432_24458[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24424 === 6))
{var inst_24383 = (state_24423[8]);var inst_24408 = inst_24383.length;var inst_24409 = (inst_24408 > 0);var state_24423__$1 = state_24423;if(cljs.core.truth_(inst_24409))
{var statearr_24434_24459 = state_24423__$1;(statearr_24434_24459[1] = 12);
} else
{var statearr_24435_24460 = state_24423__$1;(statearr_24435_24460[1] = 13);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24424 === 7))
{var inst_24419 = (state_24423[2]);var state_24423__$1 = state_24423;var statearr_24436_24461 = state_24423__$1;(statearr_24436_24461[2] = inst_24419);
(statearr_24436_24461[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24424 === 8))
{var inst_24387 = (state_24423[9]);var inst_24383 = (state_24423[8]);var inst_24391 = (state_24423[10]);var inst_24396 = inst_24383.push(inst_24387);var tmp24433 = inst_24383;var inst_24383__$1 = tmp24433;var inst_24384 = inst_24391;var state_24423__$1 = (function (){var statearr_24437 = state_24423;(statearr_24437[7] = inst_24384);
(statearr_24437[8] = inst_24383__$1);
(statearr_24437[11] = inst_24396);
return statearr_24437;
})();var statearr_24438_24462 = state_24423__$1;(statearr_24438_24462[2] = null);
(statearr_24438_24462[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24424 === 9))
{var inst_24383 = (state_24423[8]);var inst_24399 = cljs.core.vec(inst_24383);var state_24423__$1 = state_24423;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24423__$1,11,out,inst_24399);
} else
{if((state_val_24424 === 10))
{var inst_24406 = (state_24423[2]);var state_24423__$1 = state_24423;var statearr_24439_24463 = state_24423__$1;(statearr_24439_24463[2] = inst_24406);
(statearr_24439_24463[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24424 === 11))
{var inst_24387 = (state_24423[9]);var inst_24391 = (state_24423[10]);var inst_24401 = (state_24423[2]);var inst_24402 = [];var inst_24403 = inst_24402.push(inst_24387);var inst_24383 = inst_24402;var inst_24384 = inst_24391;var state_24423__$1 = (function (){var statearr_24440 = state_24423;(statearr_24440[12] = inst_24403);
(statearr_24440[13] = inst_24401);
(statearr_24440[7] = inst_24384);
(statearr_24440[8] = inst_24383);
return statearr_24440;
})();var statearr_24441_24464 = state_24423__$1;(statearr_24441_24464[2] = null);
(statearr_24441_24464[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24424 === 12))
{var inst_24383 = (state_24423[8]);var inst_24411 = cljs.core.vec(inst_24383);var state_24423__$1 = state_24423;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24423__$1,15,out,inst_24411);
} else
{if((state_val_24424 === 13))
{var state_24423__$1 = state_24423;var statearr_24442_24465 = state_24423__$1;(statearr_24442_24465[2] = null);
(statearr_24442_24465[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24424 === 14))
{var inst_24416 = (state_24423[2]);var inst_24417 = cljs.core.async.close_BANG_(out);var state_24423__$1 = (function (){var statearr_24443 = state_24423;(statearr_24443[14] = inst_24416);
return statearr_24443;
})();var statearr_24444_24466 = state_24423__$1;(statearr_24444_24466[2] = inst_24417);
(statearr_24444_24466[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24424 === 15))
{var inst_24413 = (state_24423[2]);var state_24423__$1 = state_24423;var statearr_24445_24467 = state_24423__$1;(statearr_24445_24467[2] = inst_24413);
(statearr_24445_24467[1] = 14);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_24449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24449[0] = state_machine__5507__auto__);
(statearr_24449[1] = 1);
return statearr_24449;
});
var state_machine__5507__auto____1 = (function (state_24423){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24423);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24450){if((e24450 instanceof Object))
{var ex__5510__auto__ = e24450;var statearr_24451_24468 = state_24423;(statearr_24451_24468[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24423);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e24450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__24469 = state_24423;
state_24423 = G__24469;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24423){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24452 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24453);
return statearr_24452;
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
