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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23297 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23297 = (function (f,fn_handler,meta23298){
this.f = f;
this.fn_handler = fn_handler;
this.meta23298 = meta23298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23297.cljs$lang$type = true;
cljs.core.async.t23297.cljs$lang$ctorStr = "cljs.core.async/t23297";
cljs.core.async.t23297.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23297");
});
cljs.core.async.t23297.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23299){var self__ = this;
var _23299__$1 = this;return self__.meta23298;
});
cljs.core.async.t23297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23299,meta23298__$1){var self__ = this;
var _23299__$1 = this;return (new cljs.core.async.t23297(self__.f,self__.fn_handler,meta23298__$1));
});
cljs.core.async.__GT_t23297 = (function __GT_t23297(f__$1,fn_handler__$1,meta23298){return (new cljs.core.async.t23297(f__$1,fn_handler__$1,meta23298));
});
}
return (new cljs.core.async.t23297(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23301 = buff;if(G__23301)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23301.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23301.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23301);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23301);
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
{var val_23302 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23302) : fn1.call(null,val_23302));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23302) : fn1.call(null,val_23302));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23303 = n;var x_23304 = 0;while(true){
if((x_23304 < n__4248__auto___23303))
{(a[x_23304] = 0);
{
var G__23305 = (x_23304 + 1);
x_23304 = G__23305;
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
var G__23306 = (i + 1);
i = G__23306;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23310 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23310 = (function (flag,alt_flag,meta23311){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23311 = meta23311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23310.cljs$lang$type = true;
cljs.core.async.t23310.cljs$lang$ctorStr = "cljs.core.async/t23310";
cljs.core.async.t23310.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23310");
});
cljs.core.async.t23310.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23312){var self__ = this;
var _23312__$1 = this;return self__.meta23311;
});
cljs.core.async.t23310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23312,meta23311__$1){var self__ = this;
var _23312__$1 = this;return (new cljs.core.async.t23310(self__.flag,self__.alt_flag,meta23311__$1));
});
cljs.core.async.__GT_t23310 = (function __GT_t23310(flag__$1,alt_flag__$1,meta23311){return (new cljs.core.async.t23310(flag__$1,alt_flag__$1,meta23311));
});
}
return (new cljs.core.async.t23310(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23316 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23316 = (function (cb,flag,alt_handler,meta23317){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23317 = meta23317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23316.cljs$lang$type = true;
cljs.core.async.t23316.cljs$lang$ctorStr = "cljs.core.async/t23316";
cljs.core.async.t23316.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23316");
});
cljs.core.async.t23316.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23318){var self__ = this;
var _23318__$1 = this;return self__.meta23317;
});
cljs.core.async.t23316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23318,meta23317__$1){var self__ = this;
var _23318__$1 = this;return (new cljs.core.async.t23316(self__.cb,self__.flag,self__.alt_handler,meta23317__$1));
});
cljs.core.async.__GT_t23316 = (function __GT_t23316(cb__$1,flag__$1,alt_handler__$1,meta23317){return (new cljs.core.async.t23316(cb__$1,flag__$1,alt_handler__$1,meta23317));
});
}
return (new cljs.core.async.t23316(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23319_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23319_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23319_SHARP_,port], null)));
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
var G__23320 = (i + 1);
i = G__23320;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$200))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$200], null));
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
var alts_BANG___delegate = function (ports,p__23321){var map__23323 = p__23321;var map__23323__$1 = ((cljs.core.seq_QMARK_(map__23323))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23323):map__23323);var opts = map__23323__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23321 = null;if (arguments.length > 1) {
  p__23321 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23321);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23324){
var ports = cljs.core.first(arglist__23324);
var p__23321 = cljs.core.rest(arglist__23324);
return alts_BANG___delegate(ports,p__23321);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23332 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23332 = (function (ch,f,map_LT_,meta23333){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23333 = meta23333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23332.cljs$lang$type = true;
cljs.core.async.t23332.cljs$lang$ctorStr = "cljs.core.async/t23332";
cljs.core.async.t23332.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23332");
});
cljs.core.async.t23332.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23332.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23335 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23335 = (function (fn1,_,meta23333,ch,f,map_LT_,meta23336){
this.fn1 = fn1;
this._ = _;
this.meta23333 = meta23333;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23336 = meta23336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23335.cljs$lang$type = true;
cljs.core.async.t23335.cljs$lang$ctorStr = "cljs.core.async/t23335";
cljs.core.async.t23335.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23335");
});
cljs.core.async.t23335.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23335.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23325_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23325_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23325_SHARP_) : self__.f.call(null,p1__23325_SHARP_)))) : f1.call(null,(((p1__23325_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23325_SHARP_) : self__.f.call(null,p1__23325_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23337){var self__ = this;
var _23337__$1 = this;return self__.meta23336;
});
cljs.core.async.t23335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23337,meta23336__$1){var self__ = this;
var _23337__$1 = this;return (new cljs.core.async.t23335(self__.fn1,self__._,self__.meta23333,self__.ch,self__.f,self__.map_LT_,meta23336__$1));
});
cljs.core.async.__GT_t23335 = (function __GT_t23335(fn1__$1,___$2,meta23333__$1,ch__$2,f__$2,map_LT___$2,meta23336){return (new cljs.core.async.t23335(fn1__$1,___$2,meta23333__$1,ch__$2,f__$2,map_LT___$2,meta23336));
});
}
return (new cljs.core.async.t23335(fn1,___$1,self__.meta23333,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23332.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23334){var self__ = this;
var _23334__$1 = this;return self__.meta23333;
});
cljs.core.async.t23332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23334,meta23333__$1){var self__ = this;
var _23334__$1 = this;return (new cljs.core.async.t23332(self__.ch,self__.f,self__.map_LT_,meta23333__$1));
});
cljs.core.async.__GT_t23332 = (function __GT_t23332(ch__$1,f__$1,map_LT___$1,meta23333){return (new cljs.core.async.t23332(ch__$1,f__$1,map_LT___$1,meta23333));
});
}
return (new cljs.core.async.t23332(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23341 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23341 = (function (ch,f,map_GT_,meta23342){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23342 = meta23342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23341.cljs$lang$type = true;
cljs.core.async.t23341.cljs$lang$ctorStr = "cljs.core.async/t23341";
cljs.core.async.t23341.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23341");
});
cljs.core.async.t23341.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23341.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23341.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23343){var self__ = this;
var _23343__$1 = this;return self__.meta23342;
});
cljs.core.async.t23341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23343,meta23342__$1){var self__ = this;
var _23343__$1 = this;return (new cljs.core.async.t23341(self__.ch,self__.f,self__.map_GT_,meta23342__$1));
});
cljs.core.async.__GT_t23341 = (function __GT_t23341(ch__$1,f__$1,map_GT___$1,meta23342){return (new cljs.core.async.t23341(ch__$1,f__$1,map_GT___$1,meta23342));
});
}
return (new cljs.core.async.t23341(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23347 = (function (ch,p,filter_GT_,meta23348){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23348 = meta23348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23347.cljs$lang$type = true;
cljs.core.async.t23347.cljs$lang$ctorStr = "cljs.core.async/t23347";
cljs.core.async.t23347.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23347");
});
cljs.core.async.t23347.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23347.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23347.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23349){var self__ = this;
var _23349__$1 = this;return self__.meta23348;
});
cljs.core.async.t23347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23349,meta23348__$1){var self__ = this;
var _23349__$1 = this;return (new cljs.core.async.t23347(self__.ch,self__.p,self__.filter_GT_,meta23348__$1));
});
cljs.core.async.__GT_t23347 = (function __GT_t23347(ch__$1,p__$1,filter_GT___$1,meta23348){return (new cljs.core.async.t23347(ch__$1,p__$1,filter_GT___$1,meta23348));
});
}
return (new cljs.core.async.t23347(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23411){var state_val_23412 = (state_23411[1]);if((state_val_23412 === 1))
{var state_23411__$1 = state_23411;var statearr_23413_23433 = state_23411__$1;(statearr_23413_23433[2] = null);
(statearr_23413_23433[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23412 === 2))
{var state_23411__$1 = state_23411;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23411__$1,4,ch);
} else
{if((state_val_23412 === 3))
{var inst_23409 = (state_23411[2]);var state_23411__$1 = state_23411;return cljs.core.async.impl.ioc_helpers.return_chan(state_23411__$1,inst_23409);
} else
{if((state_val_23412 === 4))
{var inst_23393 = (state_23411[7]);var inst_23393__$1 = (state_23411[2]);var inst_23394 = (inst_23393__$1 == null);var state_23411__$1 = (function (){var statearr_23414 = state_23411;(statearr_23414[7] = inst_23393__$1);
return statearr_23414;
})();if(cljs.core.truth_(inst_23394))
{var statearr_23415_23434 = state_23411__$1;(statearr_23415_23434[1] = 5);
} else
{var statearr_23416_23435 = state_23411__$1;(statearr_23416_23435[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23412 === 5))
{var inst_23396 = cljs.core.async.close_BANG_(out);var state_23411__$1 = state_23411;var statearr_23417_23436 = state_23411__$1;(statearr_23417_23436[2] = inst_23396);
(statearr_23417_23436[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23412 === 6))
{var inst_23393 = (state_23411[7]);var inst_23398 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23393) : p.call(null,inst_23393));var state_23411__$1 = state_23411;if(cljs.core.truth_(inst_23398))
{var statearr_23418_23437 = state_23411__$1;(statearr_23418_23437[1] = 8);
} else
{var statearr_23419_23438 = state_23411__$1;(statearr_23419_23438[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23412 === 7))
{var inst_23407 = (state_23411[2]);var state_23411__$1 = state_23411;var statearr_23420_23439 = state_23411__$1;(statearr_23420_23439[2] = inst_23407);
(statearr_23420_23439[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23412 === 8))
{var inst_23393 = (state_23411[7]);var state_23411__$1 = state_23411;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23411__$1,11,out,inst_23393);
} else
{if((state_val_23412 === 9))
{var state_23411__$1 = state_23411;var statearr_23421_23440 = state_23411__$1;(statearr_23421_23440[2] = null);
(statearr_23421_23440[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23412 === 10))
{var inst_23404 = (state_23411[2]);var state_23411__$1 = (function (){var statearr_23422 = state_23411;(statearr_23422[8] = inst_23404);
return statearr_23422;
})();var statearr_23423_23441 = state_23411__$1;(statearr_23423_23441[2] = null);
(statearr_23423_23441[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23412 === 11))
{var inst_23401 = (state_23411[2]);var state_23411__$1 = state_23411;var statearr_23424_23442 = state_23411__$1;(statearr_23424_23442[2] = inst_23401);
(statearr_23424_23442[1] = 10);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_23428 = [null,null,null,null,null,null,null,null,null];(statearr_23428[0] = state_machine__5507__auto__);
(statearr_23428[1] = 1);
return statearr_23428;
});
var state_machine__5507__auto____1 = (function (state_23411){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23411);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23429){if((e23429 instanceof Object))
{var ex__5510__auto__ = e23429;var statearr_23430_23443 = state_23411;(statearr_23430_23443[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23411);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e23429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__23444 = state_23411;
state_23411 = G__23444;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23411){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23431 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23432);
return statearr_23431;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23596){var state_val_23597 = (state_23596[1]);if((state_val_23597 === 1))
{var state_23596__$1 = state_23596;var statearr_23598_23635 = state_23596__$1;(statearr_23598_23635[2] = null);
(statearr_23598_23635[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 2))
{var state_23596__$1 = state_23596;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23596__$1,4,in$);
} else
{if((state_val_23597 === 3))
{var inst_23594 = (state_23596[2]);var state_23596__$1 = state_23596;return cljs.core.async.impl.ioc_helpers.return_chan(state_23596__$1,inst_23594);
} else
{if((state_val_23597 === 4))
{var inst_23542 = (state_23596[7]);var inst_23542__$1 = (state_23596[2]);var inst_23543 = (inst_23542__$1 == null);var state_23596__$1 = (function (){var statearr_23599 = state_23596;(statearr_23599[7] = inst_23542__$1);
return statearr_23599;
})();if(cljs.core.truth_(inst_23543))
{var statearr_23600_23636 = state_23596__$1;(statearr_23600_23636[1] = 5);
} else
{var statearr_23601_23637 = state_23596__$1;(statearr_23601_23637[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 5))
{var inst_23545 = cljs.core.async.close_BANG_(out);var state_23596__$1 = state_23596;var statearr_23602_23638 = state_23596__$1;(statearr_23602_23638[2] = inst_23545);
(statearr_23602_23638[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 6))
{var inst_23542 = (state_23596[7]);var inst_23547 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23542) : f.call(null,inst_23542));var inst_23552 = cljs.core.seq(inst_23547);var inst_23553 = inst_23552;var inst_23554 = null;var inst_23555 = 0;var inst_23556 = 0;var state_23596__$1 = (function (){var statearr_23603 = state_23596;(statearr_23603[8] = inst_23556);
(statearr_23603[9] = inst_23555);
(statearr_23603[10] = inst_23554);
(statearr_23603[11] = inst_23553);
return statearr_23603;
})();var statearr_23604_23639 = state_23596__$1;(statearr_23604_23639[2] = null);
(statearr_23604_23639[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 7))
{var inst_23592 = (state_23596[2]);var state_23596__$1 = state_23596;var statearr_23605_23640 = state_23596__$1;(statearr_23605_23640[2] = inst_23592);
(statearr_23605_23640[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 8))
{var inst_23556 = (state_23596[8]);var inst_23555 = (state_23596[9]);var inst_23558 = (inst_23556 < inst_23555);var inst_23559 = inst_23558;var state_23596__$1 = state_23596;if(cljs.core.truth_(inst_23559))
{var statearr_23606_23641 = state_23596__$1;(statearr_23606_23641[1] = 10);
} else
{var statearr_23607_23642 = state_23596__$1;(statearr_23607_23642[1] = 11);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 9))
{var inst_23589 = (state_23596[2]);var state_23596__$1 = (function (){var statearr_23608 = state_23596;(statearr_23608[12] = inst_23589);
return statearr_23608;
})();var statearr_23609_23643 = state_23596__$1;(statearr_23609_23643[2] = null);
(statearr_23609_23643[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 10))
{var inst_23556 = (state_23596[8]);var inst_23554 = (state_23596[10]);var inst_23561 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23554,inst_23556);var state_23596__$1 = state_23596;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23596__$1,13,out,inst_23561);
} else
{if((state_val_23597 === 11))
{var inst_23553 = (state_23596[11]);var inst_23567 = (state_23596[13]);var inst_23567__$1 = cljs.core.seq(inst_23553);var state_23596__$1 = (function (){var statearr_23613 = state_23596;(statearr_23613[13] = inst_23567__$1);
return statearr_23613;
})();if(inst_23567__$1)
{var statearr_23614_23644 = state_23596__$1;(statearr_23614_23644[1] = 14);
} else
{var statearr_23615_23645 = state_23596__$1;(statearr_23615_23645[1] = 15);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 12))
{var inst_23587 = (state_23596[2]);var state_23596__$1 = state_23596;var statearr_23616_23646 = state_23596__$1;(statearr_23616_23646[2] = inst_23587);
(statearr_23616_23646[1] = 9);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 13))
{var inst_23556 = (state_23596[8]);var inst_23555 = (state_23596[9]);var inst_23554 = (state_23596[10]);var inst_23553 = (state_23596[11]);var inst_23563 = (state_23596[2]);var inst_23564 = (inst_23556 + 1);var tmp23610 = inst_23555;var tmp23611 = inst_23554;var tmp23612 = inst_23553;var inst_23553__$1 = tmp23612;var inst_23554__$1 = tmp23611;var inst_23555__$1 = tmp23610;var inst_23556__$1 = inst_23564;var state_23596__$1 = (function (){var statearr_23617 = state_23596;(statearr_23617[8] = inst_23556__$1);
(statearr_23617[14] = inst_23563);
(statearr_23617[9] = inst_23555__$1);
(statearr_23617[10] = inst_23554__$1);
(statearr_23617[11] = inst_23553__$1);
return statearr_23617;
})();var statearr_23618_23647 = state_23596__$1;(statearr_23618_23647[2] = null);
(statearr_23618_23647[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 14))
{var inst_23567 = (state_23596[13]);var inst_23569 = cljs.core.chunked_seq_QMARK_(inst_23567);var state_23596__$1 = state_23596;if(inst_23569)
{var statearr_23619_23648 = state_23596__$1;(statearr_23619_23648[1] = 17);
} else
{var statearr_23620_23649 = state_23596__$1;(statearr_23620_23649[1] = 18);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 15))
{var state_23596__$1 = state_23596;var statearr_23621_23650 = state_23596__$1;(statearr_23621_23650[2] = null);
(statearr_23621_23650[1] = 16);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 16))
{var inst_23585 = (state_23596[2]);var state_23596__$1 = state_23596;var statearr_23622_23651 = state_23596__$1;(statearr_23622_23651[2] = inst_23585);
(statearr_23622_23651[1] = 12);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 17))
{var inst_23567 = (state_23596[13]);var inst_23571 = cljs.core.chunk_first(inst_23567);var inst_23572 = cljs.core.chunk_rest(inst_23567);var inst_23573 = cljs.core.count(inst_23571);var inst_23553 = inst_23572;var inst_23554 = inst_23571;var inst_23555 = inst_23573;var inst_23556 = 0;var state_23596__$1 = (function (){var statearr_23623 = state_23596;(statearr_23623[8] = inst_23556);
(statearr_23623[9] = inst_23555);
(statearr_23623[10] = inst_23554);
(statearr_23623[11] = inst_23553);
return statearr_23623;
})();var statearr_23624_23652 = state_23596__$1;(statearr_23624_23652[2] = null);
(statearr_23624_23652[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 18))
{var inst_23567 = (state_23596[13]);var inst_23576 = cljs.core.first(inst_23567);var state_23596__$1 = state_23596;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23596__$1,20,out,inst_23576);
} else
{if((state_val_23597 === 19))
{var inst_23582 = (state_23596[2]);var state_23596__$1 = state_23596;var statearr_23625_23653 = state_23596__$1;(statearr_23625_23653[2] = inst_23582);
(statearr_23625_23653[1] = 16);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23597 === 20))
{var inst_23567 = (state_23596[13]);var inst_23578 = (state_23596[2]);var inst_23579 = cljs.core.next(inst_23567);var inst_23553 = inst_23579;var inst_23554 = null;var inst_23555 = 0;var inst_23556 = 0;var state_23596__$1 = (function (){var statearr_23626 = state_23596;(statearr_23626[8] = inst_23556);
(statearr_23626[9] = inst_23555);
(statearr_23626[10] = inst_23554);
(statearr_23626[11] = inst_23553);
(statearr_23626[15] = inst_23578);
return statearr_23626;
})();var statearr_23627_23654 = state_23596__$1;(statearr_23627_23654[2] = null);
(statearr_23627_23654[1] = 8);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_23631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23631[0] = state_machine__5507__auto__);
(statearr_23631[1] = 1);
return statearr_23631;
});
var state_machine__5507__auto____1 = (function (state_23596){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23596);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23632){if((e23632 instanceof Object))
{var ex__5510__auto__ = e23632;var statearr_23633_23655 = state_23596;(statearr_23633_23655[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23596);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e23632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__23656 = state_23596;
state_23596 = G__23656;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23596){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23634 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23634;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23716){var state_val_23717 = (state_23716[1]);if((state_val_23717 === 1))
{var state_23716__$1 = state_23716;var statearr_23718_23738 = state_23716__$1;(statearr_23718_23738[2] = null);
(statearr_23718_23738[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23717 === 2))
{var state_23716__$1 = state_23716;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23716__$1,4,from);
} else
{if((state_val_23717 === 3))
{var inst_23714 = (state_23716[2]);var state_23716__$1 = state_23716;return cljs.core.async.impl.ioc_helpers.return_chan(state_23716__$1,inst_23714);
} else
{if((state_val_23717 === 4))
{var inst_23699 = (state_23716[7]);var inst_23699__$1 = (state_23716[2]);var inst_23700 = (inst_23699__$1 == null);var state_23716__$1 = (function (){var statearr_23719 = state_23716;(statearr_23719[7] = inst_23699__$1);
return statearr_23719;
})();if(cljs.core.truth_(inst_23700))
{var statearr_23720_23739 = state_23716__$1;(statearr_23720_23739[1] = 5);
} else
{var statearr_23721_23740 = state_23716__$1;(statearr_23721_23740[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23717 === 5))
{var state_23716__$1 = state_23716;if(cljs.core.truth_(close_QMARK_))
{var statearr_23722_23741 = state_23716__$1;(statearr_23722_23741[1] = 8);
} else
{var statearr_23723_23742 = state_23716__$1;(statearr_23723_23742[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23717 === 6))
{var inst_23699 = (state_23716[7]);var state_23716__$1 = state_23716;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23716__$1,11,to,inst_23699);
} else
{if((state_val_23717 === 7))
{var inst_23712 = (state_23716[2]);var state_23716__$1 = state_23716;var statearr_23724_23743 = state_23716__$1;(statearr_23724_23743[2] = inst_23712);
(statearr_23724_23743[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23717 === 8))
{var inst_23703 = cljs.core.async.close_BANG_(to);var state_23716__$1 = state_23716;var statearr_23725_23744 = state_23716__$1;(statearr_23725_23744[2] = inst_23703);
(statearr_23725_23744[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23717 === 9))
{var state_23716__$1 = state_23716;var statearr_23726_23745 = state_23716__$1;(statearr_23726_23745[2] = null);
(statearr_23726_23745[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23717 === 10))
{var inst_23706 = (state_23716[2]);var state_23716__$1 = state_23716;var statearr_23727_23746 = state_23716__$1;(statearr_23727_23746[2] = inst_23706);
(statearr_23727_23746[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23717 === 11))
{var inst_23709 = (state_23716[2]);var state_23716__$1 = (function (){var statearr_23728 = state_23716;(statearr_23728[8] = inst_23709);
return statearr_23728;
})();var statearr_23729_23747 = state_23716__$1;(statearr_23729_23747[2] = null);
(statearr_23729_23747[1] = 2);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_23733 = [null,null,null,null,null,null,null,null,null];(statearr_23733[0] = state_machine__5507__auto__);
(statearr_23733[1] = 1);
return statearr_23733;
});
var state_machine__5507__auto____1 = (function (state_23716){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23716);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23734){if((e23734 instanceof Object))
{var ex__5510__auto__ = e23734;var statearr_23735_23748 = state_23716;(statearr_23735_23748[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23716);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e23734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__23749 = state_23716;
state_23716 = G__23749;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23716){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23736 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23737);
return statearr_23736;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23814){var state_val_23815 = (state_23814[1]);if((state_val_23815 === 1))
{var state_23814__$1 = state_23814;var statearr_23816_23837 = state_23814__$1;(statearr_23816_23837[2] = null);
(statearr_23816_23837[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23815 === 2))
{var state_23814__$1 = state_23814;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23814__$1,4,ch);
} else
{if((state_val_23815 === 3))
{var inst_23812 = (state_23814[2]);var state_23814__$1 = state_23814;return cljs.core.async.impl.ioc_helpers.return_chan(state_23814__$1,inst_23812);
} else
{if((state_val_23815 === 4))
{var inst_23795 = (state_23814[7]);var inst_23795__$1 = (state_23814[2]);var inst_23796 = (inst_23795__$1 == null);var state_23814__$1 = (function (){var statearr_23817 = state_23814;(statearr_23817[7] = inst_23795__$1);
return statearr_23817;
})();if(cljs.core.truth_(inst_23796))
{var statearr_23818_23838 = state_23814__$1;(statearr_23818_23838[1] = 5);
} else
{var statearr_23819_23839 = state_23814__$1;(statearr_23819_23839[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23815 === 5))
{var inst_23798 = cljs.core.async.close_BANG_(tc);var inst_23799 = cljs.core.async.close_BANG_(fc);var state_23814__$1 = (function (){var statearr_23820 = state_23814;(statearr_23820[8] = inst_23798);
return statearr_23820;
})();var statearr_23821_23840 = state_23814__$1;(statearr_23821_23840[2] = inst_23799);
(statearr_23821_23840[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23815 === 6))
{var inst_23795 = (state_23814[7]);var inst_23801 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23795) : p.call(null,inst_23795));var state_23814__$1 = state_23814;if(cljs.core.truth_(inst_23801))
{var statearr_23822_23841 = state_23814__$1;(statearr_23822_23841[1] = 9);
} else
{var statearr_23823_23842 = state_23814__$1;(statearr_23823_23842[1] = 10);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23815 === 7))
{var inst_23810 = (state_23814[2]);var state_23814__$1 = state_23814;var statearr_23824_23843 = state_23814__$1;(statearr_23824_23843[2] = inst_23810);
(statearr_23824_23843[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23815 === 8))
{var inst_23807 = (state_23814[2]);var state_23814__$1 = (function (){var statearr_23825 = state_23814;(statearr_23825[9] = inst_23807);
return statearr_23825;
})();var statearr_23826_23844 = state_23814__$1;(statearr_23826_23844[2] = null);
(statearr_23826_23844[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23815 === 9))
{var state_23814__$1 = state_23814;var statearr_23827_23845 = state_23814__$1;(statearr_23827_23845[2] = tc);
(statearr_23827_23845[1] = 11);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23815 === 10))
{var state_23814__$1 = state_23814;var statearr_23828_23846 = state_23814__$1;(statearr_23828_23846[2] = fc);
(statearr_23828_23846[1] = 11);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23815 === 11))
{var inst_23795 = (state_23814[7]);var inst_23805 = (state_23814[2]);var state_23814__$1 = state_23814;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23814__$1,8,inst_23805,inst_23795);
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
var state_machine__5507__auto____0 = (function (){var statearr_23832 = [null,null,null,null,null,null,null,null,null,null];(statearr_23832[0] = state_machine__5507__auto__);
(statearr_23832[1] = 1);
return statearr_23832;
});
var state_machine__5507__auto____1 = (function (state_23814){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23814);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23833){if((e23833 instanceof Object))
{var ex__5510__auto__ = e23833;var statearr_23834_23847 = state_23814;(statearr_23834_23847[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23814);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e23833;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__23848 = state_23814;
state_23814 = G__23848;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23814){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23835 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23836);
return statearr_23835;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23895){var state_val_23896 = (state_23895[1]);if((state_val_23896 === 7))
{var inst_23891 = (state_23895[2]);var state_23895__$1 = state_23895;var statearr_23897_23913 = state_23895__$1;(statearr_23897_23913[2] = inst_23891);
(statearr_23897_23913[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23896 === 6))
{var inst_23884 = (state_23895[7]);var inst_23881 = (state_23895[8]);var inst_23888 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23881,inst_23884) : f.call(null,inst_23881,inst_23884));var inst_23881__$1 = inst_23888;var state_23895__$1 = (function (){var statearr_23898 = state_23895;(statearr_23898[8] = inst_23881__$1);
return statearr_23898;
})();var statearr_23899_23914 = state_23895__$1;(statearr_23899_23914[2] = null);
(statearr_23899_23914[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23896 === 5))
{var inst_23881 = (state_23895[8]);var state_23895__$1 = state_23895;var statearr_23900_23915 = state_23895__$1;(statearr_23900_23915[2] = inst_23881);
(statearr_23900_23915[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23896 === 4))
{var inst_23884 = (state_23895[7]);var inst_23884__$1 = (state_23895[2]);var inst_23885 = (inst_23884__$1 == null);var state_23895__$1 = (function (){var statearr_23901 = state_23895;(statearr_23901[7] = inst_23884__$1);
return statearr_23901;
})();if(cljs.core.truth_(inst_23885))
{var statearr_23902_23916 = state_23895__$1;(statearr_23902_23916[1] = 5);
} else
{var statearr_23903_23917 = state_23895__$1;(statearr_23903_23917[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23896 === 3))
{var inst_23893 = (state_23895[2]);var state_23895__$1 = state_23895;return cljs.core.async.impl.ioc_helpers.return_chan(state_23895__$1,inst_23893);
} else
{if((state_val_23896 === 2))
{var state_23895__$1 = state_23895;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23895__$1,4,ch);
} else
{if((state_val_23896 === 1))
{var inst_23881 = init;var state_23895__$1 = (function (){var statearr_23904 = state_23895;(statearr_23904[8] = inst_23881);
return statearr_23904;
})();var statearr_23905_23918 = state_23895__$1;(statearr_23905_23918[2] = null);
(statearr_23905_23918[1] = 2);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_23909 = [null,null,null,null,null,null,null,null,null];(statearr_23909[0] = state_machine__5507__auto__);
(statearr_23909[1] = 1);
return statearr_23909;
});
var state_machine__5507__auto____1 = (function (state_23895){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23895);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23910){if((e23910 instanceof Object))
{var ex__5510__auto__ = e23910;var statearr_23911_23919 = state_23895;(statearr_23911_23919[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23895);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e23910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__23920 = state_23895;
state_23895 = G__23920;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23895){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23912 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23912;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23982){var state_val_23983 = (state_23982[1]);if((state_val_23983 === 1))
{var inst_23962 = cljs.core.seq(coll);var inst_23963 = inst_23962;var state_23982__$1 = (function (){var statearr_23984 = state_23982;(statearr_23984[7] = inst_23963);
return statearr_23984;
})();var statearr_23985_24003 = state_23982__$1;(statearr_23985_24003[2] = null);
(statearr_23985_24003[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23983 === 2))
{var inst_23963 = (state_23982[7]);var state_23982__$1 = state_23982;if(cljs.core.truth_(inst_23963))
{var statearr_23986_24004 = state_23982__$1;(statearr_23986_24004[1] = 4);
} else
{var statearr_23987_24005 = state_23982__$1;(statearr_23987_24005[1] = 5);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23983 === 3))
{var inst_23980 = (state_23982[2]);var state_23982__$1 = state_23982;return cljs.core.async.impl.ioc_helpers.return_chan(state_23982__$1,inst_23980);
} else
{if((state_val_23983 === 4))
{var inst_23963 = (state_23982[7]);var inst_23966 = cljs.core.first(inst_23963);var state_23982__$1 = state_23982;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23982__$1,7,ch,inst_23966);
} else
{if((state_val_23983 === 5))
{var state_23982__$1 = state_23982;if(cljs.core.truth_(close_QMARK_))
{var statearr_23988_24006 = state_23982__$1;(statearr_23988_24006[1] = 8);
} else
{var statearr_23989_24007 = state_23982__$1;(statearr_23989_24007[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_23983 === 6))
{var inst_23978 = (state_23982[2]);var state_23982__$1 = state_23982;var statearr_23990_24008 = state_23982__$1;(statearr_23990_24008[2] = inst_23978);
(statearr_23990_24008[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23983 === 7))
{var inst_23963 = (state_23982[7]);var inst_23968 = (state_23982[2]);var inst_23969 = cljs.core.next(inst_23963);var inst_23963__$1 = inst_23969;var state_23982__$1 = (function (){var statearr_23991 = state_23982;(statearr_23991[8] = inst_23968);
(statearr_23991[7] = inst_23963__$1);
return statearr_23991;
})();var statearr_23992_24009 = state_23982__$1;(statearr_23992_24009[2] = null);
(statearr_23992_24009[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23983 === 8))
{var inst_23973 = cljs.core.async.close_BANG_(ch);var state_23982__$1 = state_23982;var statearr_23993_24010 = state_23982__$1;(statearr_23993_24010[2] = inst_23973);
(statearr_23993_24010[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23983 === 9))
{var state_23982__$1 = state_23982;var statearr_23994_24011 = state_23982__$1;(statearr_23994_24011[2] = null);
(statearr_23994_24011[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_23983 === 10))
{var inst_23976 = (state_23982[2]);var state_23982__$1 = state_23982;var statearr_23995_24012 = state_23982__$1;(statearr_23995_24012[2] = inst_23976);
(statearr_23995_24012[1] = 6);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_23999 = [null,null,null,null,null,null,null,null,null];(statearr_23999[0] = state_machine__5507__auto__);
(statearr_23999[1] = 1);
return statearr_23999;
});
var state_machine__5507__auto____1 = (function (state_23982){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23982);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24000){if((e24000 instanceof Object))
{var ex__5510__auto__ = e24000;var statearr_24001_24013 = state_23982;(statearr_24001_24013[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23982);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e24000;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__24014 = state_23982;
state_23982 = G__24014;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23982){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24002 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24002;
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
cljs.core.async.Mux = (function (){var obj24016 = {};return obj24016;
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
cljs.core.async.Mult = (function (){var obj24018 = {};return obj24018;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24242 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24242 = (function (cs,ch,mult,meta24243){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24243 = meta24243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24242.cljs$lang$type = true;
cljs.core.async.t24242.cljs$lang$ctorStr = "cljs.core.async/t24242";
cljs.core.async.t24242.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24242");
});})(cs))
;
cljs.core.async.t24242.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24242.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24242.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24242.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24242.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24242.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24244){var self__ = this;
var _24244__$1 = this;return self__.meta24243;
});})(cs))
;
cljs.core.async.t24242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24244,meta24243__$1){var self__ = this;
var _24244__$1 = this;return (new cljs.core.async.t24242(self__.cs,self__.ch,self__.mult,meta24243__$1));
});})(cs))
;
cljs.core.async.__GT_t24242 = ((function (cs){
return (function __GT_t24242(cs__$1,ch__$1,mult__$1,meta24243){return (new cljs.core.async.t24242(cs__$1,ch__$1,mult__$1,meta24243));
});})(cs))
;
}
return (new cljs.core.async.t24242(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24379){var state_val_24380 = (state_24379[1]);if((state_val_24380 === 32))
{var inst_24247 = (state_24379[7]);var inst_24323 = (state_24379[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24379,31,Object,null,30);var inst_24330 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24323,inst_24247,done);var state_24379__$1 = state_24379;var statearr_24381_24466 = state_24379__$1;(statearr_24381_24466[2] = inst_24330);
cljs.core.async.impl.ioc_helpers.process_exception(state_24379__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 1))
{var state_24379__$1 = state_24379;var statearr_24382_24467 = state_24379__$1;(statearr_24382_24467[2] = null);
(statearr_24382_24467[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 33))
{var inst_24336 = (state_24379[9]);var inst_24338 = cljs.core.chunked_seq_QMARK_(inst_24336);var state_24379__$1 = state_24379;if(inst_24338)
{var statearr_24383_24468 = state_24379__$1;(statearr_24383_24468[1] = 36);
} else
{var statearr_24384_24469 = state_24379__$1;(statearr_24384_24469[1] = 37);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 2))
{var state_24379__$1 = state_24379;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24379__$1,4,ch);
} else
{if((state_val_24380 === 34))
{var state_24379__$1 = state_24379;var statearr_24385_24470 = state_24379__$1;(statearr_24385_24470[2] = null);
(statearr_24385_24470[1] = 35);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 3))
{var inst_24377 = (state_24379[2]);var state_24379__$1 = state_24379;return cljs.core.async.impl.ioc_helpers.return_chan(state_24379__$1,inst_24377);
} else
{if((state_val_24380 === 35))
{var inst_24361 = (state_24379[2]);var state_24379__$1 = state_24379;var statearr_24386_24471 = state_24379__$1;(statearr_24386_24471[2] = inst_24361);
(statearr_24386_24471[1] = 29);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 4))
{var inst_24247 = (state_24379[7]);var inst_24247__$1 = (state_24379[2]);var inst_24248 = (inst_24247__$1 == null);var state_24379__$1 = (function (){var statearr_24387 = state_24379;(statearr_24387[7] = inst_24247__$1);
return statearr_24387;
})();if(cljs.core.truth_(inst_24248))
{var statearr_24388_24472 = state_24379__$1;(statearr_24388_24472[1] = 5);
} else
{var statearr_24389_24473 = state_24379__$1;(statearr_24389_24473[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 36))
{var inst_24336 = (state_24379[9]);var inst_24340 = cljs.core.chunk_first(inst_24336);var inst_24341 = cljs.core.chunk_rest(inst_24336);var inst_24342 = cljs.core.count(inst_24340);var inst_24315 = inst_24341;var inst_24316 = inst_24340;var inst_24317 = inst_24342;var inst_24318 = 0;var state_24379__$1 = (function (){var statearr_24390 = state_24379;(statearr_24390[10] = inst_24315);
(statearr_24390[11] = inst_24316);
(statearr_24390[12] = inst_24317);
(statearr_24390[13] = inst_24318);
return statearr_24390;
})();var statearr_24391_24474 = state_24379__$1;(statearr_24391_24474[2] = null);
(statearr_24391_24474[1] = 25);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 5))
{var inst_24254 = cljs.core.deref(cs);var inst_24255 = cljs.core.seq(inst_24254);var inst_24256 = inst_24255;var inst_24257 = null;var inst_24258 = 0;var inst_24259 = 0;var state_24379__$1 = (function (){var statearr_24392 = state_24379;(statearr_24392[14] = inst_24259);
(statearr_24392[15] = inst_24258);
(statearr_24392[16] = inst_24257);
(statearr_24392[17] = inst_24256);
return statearr_24392;
})();var statearr_24393_24475 = state_24379__$1;(statearr_24393_24475[2] = null);
(statearr_24393_24475[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 37))
{var inst_24336 = (state_24379[9]);var inst_24345 = cljs.core.first(inst_24336);var state_24379__$1 = (function (){var statearr_24394 = state_24379;(statearr_24394[18] = inst_24345);
return statearr_24394;
})();var statearr_24395_24476 = state_24379__$1;(statearr_24395_24476[2] = null);
(statearr_24395_24476[1] = 41);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 6))
{var inst_24307 = (state_24379[19]);var inst_24306 = cljs.core.deref(cs);var inst_24307__$1 = cljs.core.keys(inst_24306);var inst_24308 = cljs.core.count(inst_24307__$1);var inst_24309 = cljs.core.reset_BANG_(dctr,inst_24308);var inst_24314 = cljs.core.seq(inst_24307__$1);var inst_24315 = inst_24314;var inst_24316 = null;var inst_24317 = 0;var inst_24318 = 0;var state_24379__$1 = (function (){var statearr_24396 = state_24379;(statearr_24396[20] = inst_24309);
(statearr_24396[10] = inst_24315);
(statearr_24396[11] = inst_24316);
(statearr_24396[12] = inst_24317);
(statearr_24396[13] = inst_24318);
(statearr_24396[19] = inst_24307__$1);
return statearr_24396;
})();var statearr_24397_24477 = state_24379__$1;(statearr_24397_24477[2] = null);
(statearr_24397_24477[1] = 25);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 38))
{var inst_24358 = (state_24379[2]);var state_24379__$1 = state_24379;var statearr_24398_24478 = state_24379__$1;(statearr_24398_24478[2] = inst_24358);
(statearr_24398_24478[1] = 35);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 7))
{var inst_24375 = (state_24379[2]);var state_24379__$1 = state_24379;var statearr_24399_24479 = state_24379__$1;(statearr_24399_24479[2] = inst_24375);
(statearr_24399_24479[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 39))
{var inst_24336 = (state_24379[9]);var inst_24354 = (state_24379[2]);var inst_24355 = cljs.core.next(inst_24336);var inst_24315 = inst_24355;var inst_24316 = null;var inst_24317 = 0;var inst_24318 = 0;var state_24379__$1 = (function (){var statearr_24400 = state_24379;(statearr_24400[10] = inst_24315);
(statearr_24400[11] = inst_24316);
(statearr_24400[12] = inst_24317);
(statearr_24400[13] = inst_24318);
(statearr_24400[21] = inst_24354);
return statearr_24400;
})();var statearr_24401_24480 = state_24379__$1;(statearr_24401_24480[2] = null);
(statearr_24401_24480[1] = 25);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 8))
{var inst_24259 = (state_24379[14]);var inst_24258 = (state_24379[15]);var inst_24261 = (inst_24259 < inst_24258);var inst_24262 = inst_24261;var state_24379__$1 = state_24379;if(cljs.core.truth_(inst_24262))
{var statearr_24402_24481 = state_24379__$1;(statearr_24402_24481[1] = 10);
} else
{var statearr_24403_24482 = state_24379__$1;(statearr_24403_24482[1] = 11);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 40))
{var inst_24345 = (state_24379[18]);var inst_24346 = (state_24379[2]);var inst_24347 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24348 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24345);var state_24379__$1 = (function (){var statearr_24404 = state_24379;(statearr_24404[22] = inst_24347);
(statearr_24404[23] = inst_24346);
return statearr_24404;
})();var statearr_24405_24483 = state_24379__$1;(statearr_24405_24483[2] = inst_24348);
cljs.core.async.impl.ioc_helpers.process_exception(state_24379__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 9))
{var inst_24304 = (state_24379[2]);var state_24379__$1 = state_24379;var statearr_24406_24484 = state_24379__$1;(statearr_24406_24484[2] = inst_24304);
(statearr_24406_24484[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 41))
{var inst_24247 = (state_24379[7]);var inst_24345 = (state_24379[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24379,40,Object,null,39);var inst_24352 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24345,inst_24247,done);var state_24379__$1 = state_24379;var statearr_24407_24485 = state_24379__$1;(statearr_24407_24485[2] = inst_24352);
cljs.core.async.impl.ioc_helpers.process_exception(state_24379__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 10))
{var inst_24259 = (state_24379[14]);var inst_24257 = (state_24379[16]);var inst_24265 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24257,inst_24259);var inst_24266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24265,0,null);var inst_24267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24265,1,null);var state_24379__$1 = (function (){var statearr_24408 = state_24379;(statearr_24408[24] = inst_24266);
return statearr_24408;
})();if(cljs.core.truth_(inst_24267))
{var statearr_24409_24486 = state_24379__$1;(statearr_24409_24486[1] = 13);
} else
{var statearr_24410_24487 = state_24379__$1;(statearr_24410_24487[1] = 14);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 42))
{var state_24379__$1 = state_24379;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24379__$1,45,dchan);
} else
{if((state_val_24380 === 11))
{var inst_24256 = (state_24379[17]);var inst_24276 = (state_24379[25]);var inst_24276__$1 = cljs.core.seq(inst_24256);var state_24379__$1 = (function (){var statearr_24411 = state_24379;(statearr_24411[25] = inst_24276__$1);
return statearr_24411;
})();if(inst_24276__$1)
{var statearr_24412_24488 = state_24379__$1;(statearr_24412_24488[1] = 16);
} else
{var statearr_24413_24489 = state_24379__$1;(statearr_24413_24489[1] = 17);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 43))
{var state_24379__$1 = state_24379;var statearr_24414_24490 = state_24379__$1;(statearr_24414_24490[2] = null);
(statearr_24414_24490[1] = 44);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 12))
{var inst_24302 = (state_24379[2]);var state_24379__$1 = state_24379;var statearr_24415_24491 = state_24379__$1;(statearr_24415_24491[2] = inst_24302);
(statearr_24415_24491[1] = 9);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 44))
{var inst_24372 = (state_24379[2]);var state_24379__$1 = (function (){var statearr_24416 = state_24379;(statearr_24416[26] = inst_24372);
return statearr_24416;
})();var statearr_24417_24492 = state_24379__$1;(statearr_24417_24492[2] = null);
(statearr_24417_24492[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 13))
{var inst_24266 = (state_24379[24]);var inst_24269 = cljs.core.async.close_BANG_(inst_24266);var state_24379__$1 = state_24379;var statearr_24418_24493 = state_24379__$1;(statearr_24418_24493[2] = inst_24269);
(statearr_24418_24493[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 45))
{var inst_24369 = (state_24379[2]);var state_24379__$1 = state_24379;var statearr_24422_24494 = state_24379__$1;(statearr_24422_24494[2] = inst_24369);
(statearr_24422_24494[1] = 44);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 14))
{var state_24379__$1 = state_24379;var statearr_24423_24495 = state_24379__$1;(statearr_24423_24495[2] = null);
(statearr_24423_24495[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 15))
{var inst_24259 = (state_24379[14]);var inst_24258 = (state_24379[15]);var inst_24257 = (state_24379[16]);var inst_24256 = (state_24379[17]);var inst_24272 = (state_24379[2]);var inst_24273 = (inst_24259 + 1);var tmp24419 = inst_24258;var tmp24420 = inst_24257;var tmp24421 = inst_24256;var inst_24256__$1 = tmp24421;var inst_24257__$1 = tmp24420;var inst_24258__$1 = tmp24419;var inst_24259__$1 = inst_24273;var state_24379__$1 = (function (){var statearr_24424 = state_24379;(statearr_24424[14] = inst_24259__$1);
(statearr_24424[15] = inst_24258__$1);
(statearr_24424[16] = inst_24257__$1);
(statearr_24424[17] = inst_24256__$1);
(statearr_24424[27] = inst_24272);
return statearr_24424;
})();var statearr_24425_24496 = state_24379__$1;(statearr_24425_24496[2] = null);
(statearr_24425_24496[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 16))
{var inst_24276 = (state_24379[25]);var inst_24278 = cljs.core.chunked_seq_QMARK_(inst_24276);var state_24379__$1 = state_24379;if(inst_24278)
{var statearr_24426_24497 = state_24379__$1;(statearr_24426_24497[1] = 19);
} else
{var statearr_24427_24498 = state_24379__$1;(statearr_24427_24498[1] = 20);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 17))
{var state_24379__$1 = state_24379;var statearr_24428_24499 = state_24379__$1;(statearr_24428_24499[2] = null);
(statearr_24428_24499[1] = 18);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 18))
{var inst_24300 = (state_24379[2]);var state_24379__$1 = state_24379;var statearr_24429_24500 = state_24379__$1;(statearr_24429_24500[2] = inst_24300);
(statearr_24429_24500[1] = 12);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 19))
{var inst_24276 = (state_24379[25]);var inst_24280 = cljs.core.chunk_first(inst_24276);var inst_24281 = cljs.core.chunk_rest(inst_24276);var inst_24282 = cljs.core.count(inst_24280);var inst_24256 = inst_24281;var inst_24257 = inst_24280;var inst_24258 = inst_24282;var inst_24259 = 0;var state_24379__$1 = (function (){var statearr_24430 = state_24379;(statearr_24430[14] = inst_24259);
(statearr_24430[15] = inst_24258);
(statearr_24430[16] = inst_24257);
(statearr_24430[17] = inst_24256);
return statearr_24430;
})();var statearr_24431_24501 = state_24379__$1;(statearr_24431_24501[2] = null);
(statearr_24431_24501[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 20))
{var inst_24276 = (state_24379[25]);var inst_24286 = cljs.core.first(inst_24276);var inst_24287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24286,0,null);var inst_24288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24286,1,null);var state_24379__$1 = (function (){var statearr_24432 = state_24379;(statearr_24432[28] = inst_24287);
return statearr_24432;
})();if(cljs.core.truth_(inst_24288))
{var statearr_24433_24502 = state_24379__$1;(statearr_24433_24502[1] = 22);
} else
{var statearr_24434_24503 = state_24379__$1;(statearr_24434_24503[1] = 23);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 21))
{var inst_24297 = (state_24379[2]);var state_24379__$1 = state_24379;var statearr_24435_24504 = state_24379__$1;(statearr_24435_24504[2] = inst_24297);
(statearr_24435_24504[1] = 18);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 22))
{var inst_24287 = (state_24379[28]);var inst_24290 = cljs.core.async.close_BANG_(inst_24287);var state_24379__$1 = state_24379;var statearr_24436_24505 = state_24379__$1;(statearr_24436_24505[2] = inst_24290);
(statearr_24436_24505[1] = 24);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 23))
{var state_24379__$1 = state_24379;var statearr_24437_24506 = state_24379__$1;(statearr_24437_24506[2] = null);
(statearr_24437_24506[1] = 24);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 24))
{var inst_24276 = (state_24379[25]);var inst_24293 = (state_24379[2]);var inst_24294 = cljs.core.next(inst_24276);var inst_24256 = inst_24294;var inst_24257 = null;var inst_24258 = 0;var inst_24259 = 0;var state_24379__$1 = (function (){var statearr_24438 = state_24379;(statearr_24438[14] = inst_24259);
(statearr_24438[15] = inst_24258);
(statearr_24438[16] = inst_24257);
(statearr_24438[17] = inst_24256);
(statearr_24438[29] = inst_24293);
return statearr_24438;
})();var statearr_24439_24507 = state_24379__$1;(statearr_24439_24507[2] = null);
(statearr_24439_24507[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 25))
{var inst_24317 = (state_24379[12]);var inst_24318 = (state_24379[13]);var inst_24320 = (inst_24318 < inst_24317);var inst_24321 = inst_24320;var state_24379__$1 = state_24379;if(cljs.core.truth_(inst_24321))
{var statearr_24440_24508 = state_24379__$1;(statearr_24440_24508[1] = 27);
} else
{var statearr_24441_24509 = state_24379__$1;(statearr_24441_24509[1] = 28);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 26))
{var inst_24307 = (state_24379[19]);var inst_24365 = (state_24379[2]);var inst_24366 = cljs.core.seq(inst_24307);var state_24379__$1 = (function (){var statearr_24442 = state_24379;(statearr_24442[30] = inst_24365);
return statearr_24442;
})();if(inst_24366)
{var statearr_24443_24510 = state_24379__$1;(statearr_24443_24510[1] = 42);
} else
{var statearr_24444_24511 = state_24379__$1;(statearr_24444_24511[1] = 43);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 27))
{var inst_24316 = (state_24379[11]);var inst_24318 = (state_24379[13]);var inst_24323 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24316,inst_24318);var state_24379__$1 = (function (){var statearr_24445 = state_24379;(statearr_24445[8] = inst_24323);
return statearr_24445;
})();var statearr_24446_24512 = state_24379__$1;(statearr_24446_24512[2] = null);
(statearr_24446_24512[1] = 32);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 28))
{var inst_24336 = (state_24379[9]);var inst_24315 = (state_24379[10]);var inst_24336__$1 = cljs.core.seq(inst_24315);var state_24379__$1 = (function (){var statearr_24450 = state_24379;(statearr_24450[9] = inst_24336__$1);
return statearr_24450;
})();if(inst_24336__$1)
{var statearr_24451_24513 = state_24379__$1;(statearr_24451_24513[1] = 33);
} else
{var statearr_24452_24514 = state_24379__$1;(statearr_24452_24514[1] = 34);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 29))
{var inst_24363 = (state_24379[2]);var state_24379__$1 = state_24379;var statearr_24453_24515 = state_24379__$1;(statearr_24453_24515[2] = inst_24363);
(statearr_24453_24515[1] = 26);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 30))
{var inst_24315 = (state_24379[10]);var inst_24316 = (state_24379[11]);var inst_24317 = (state_24379[12]);var inst_24318 = (state_24379[13]);var inst_24332 = (state_24379[2]);var inst_24333 = (inst_24318 + 1);var tmp24447 = inst_24315;var tmp24448 = inst_24316;var tmp24449 = inst_24317;var inst_24315__$1 = tmp24447;var inst_24316__$1 = tmp24448;var inst_24317__$1 = tmp24449;var inst_24318__$1 = inst_24333;var state_24379__$1 = (function (){var statearr_24454 = state_24379;(statearr_24454[31] = inst_24332);
(statearr_24454[10] = inst_24315__$1);
(statearr_24454[11] = inst_24316__$1);
(statearr_24454[12] = inst_24317__$1);
(statearr_24454[13] = inst_24318__$1);
return statearr_24454;
})();var statearr_24455_24516 = state_24379__$1;(statearr_24455_24516[2] = null);
(statearr_24455_24516[1] = 25);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24380 === 31))
{var inst_24323 = (state_24379[8]);var inst_24324 = (state_24379[2]);var inst_24325 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24326 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24323);var state_24379__$1 = (function (){var statearr_24456 = state_24379;(statearr_24456[32] = inst_24325);
(statearr_24456[33] = inst_24324);
return statearr_24456;
})();var statearr_24457_24517 = state_24379__$1;(statearr_24457_24517[2] = inst_24326);
cljs.core.async.impl.ioc_helpers.process_exception(state_24379__$1);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_24461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24461[0] = state_machine__5507__auto__);
(statearr_24461[1] = 1);
return statearr_24461;
});
var state_machine__5507__auto____1 = (function (state_24379){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24379);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24462){if((e24462 instanceof Object))
{var ex__5510__auto__ = e24462;var statearr_24463_24518 = state_24379;(statearr_24463_24518[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24379);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e24462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__24519 = state_24379;
state_24379 = G__24519;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24379){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24464 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24465);
return statearr_24464;
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
cljs.core.async.Mix = (function (){var obj24521 = {};return obj24521;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$217,null,cljs.core.constant$keyword$218,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$219);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$218);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$219,chs);var pauses = pick(cljs.core.constant$keyword$217,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$220,solos,cljs.core.constant$keyword$221,pick(cljs.core.constant$keyword$218,chs),cljs.core.constant$keyword$222,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$217)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24631 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24632){
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
this.meta24632 = meta24632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24631.cljs$lang$type = true;
cljs.core.async.t24631.cljs$lang$ctorStr = "cljs.core.async/t24631";
cljs.core.async.t24631.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24631");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24631.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24631.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24631.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24631.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24631.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24631.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24631.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24631.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24633){var self__ = this;
var _24633__$1 = this;return self__.meta24632;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24633,meta24632__$1){var self__ = this;
var _24633__$1 = this;return (new cljs.core.async.t24631(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24632__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24631 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24631(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24632){return (new cljs.core.async.t24631(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24632));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24631(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24698){var state_val_24699 = (state_24698[1]);if((state_val_24699 === 1))
{var inst_24637 = (state_24698[7]);var inst_24637__$1 = calc_state();var inst_24638 = cljs.core.seq_QMARK_(inst_24637__$1);var state_24698__$1 = (function (){var statearr_24700 = state_24698;(statearr_24700[7] = inst_24637__$1);
return statearr_24700;
})();if(inst_24638)
{var statearr_24701_24741 = state_24698__$1;(statearr_24701_24741[1] = 2);
} else
{var statearr_24702_24742 = state_24698__$1;(statearr_24702_24742[1] = 3);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 2))
{var inst_24637 = (state_24698[7]);var inst_24640 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24637);var state_24698__$1 = state_24698;var statearr_24703_24743 = state_24698__$1;(statearr_24703_24743[2] = inst_24640);
(statearr_24703_24743[1] = 4);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 3))
{var inst_24637 = (state_24698[7]);var state_24698__$1 = state_24698;var statearr_24704_24744 = state_24698__$1;(statearr_24704_24744[2] = inst_24637);
(statearr_24704_24744[1] = 4);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 4))
{var inst_24637 = (state_24698[7]);var inst_24643 = (state_24698[2]);var inst_24644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24643,cljs.core.constant$keyword$222);var inst_24645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24643,cljs.core.constant$keyword$221);var inst_24646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24643,cljs.core.constant$keyword$220);var inst_24647 = inst_24637;var state_24698__$1 = (function (){var statearr_24705 = state_24698;(statearr_24705[8] = inst_24645);
(statearr_24705[9] = inst_24646);
(statearr_24705[10] = inst_24647);
(statearr_24705[11] = inst_24644);
return statearr_24705;
})();var statearr_24706_24745 = state_24698__$1;(statearr_24706_24745[2] = null);
(statearr_24706_24745[1] = 5);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 5))
{var inst_24647 = (state_24698[10]);var inst_24650 = cljs.core.seq_QMARK_(inst_24647);var state_24698__$1 = state_24698;if(inst_24650)
{var statearr_24707_24746 = state_24698__$1;(statearr_24707_24746[1] = 7);
} else
{var statearr_24708_24747 = state_24698__$1;(statearr_24708_24747[1] = 8);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 6))
{var inst_24696 = (state_24698[2]);var state_24698__$1 = state_24698;return cljs.core.async.impl.ioc_helpers.return_chan(state_24698__$1,inst_24696);
} else
{if((state_val_24699 === 7))
{var inst_24647 = (state_24698[10]);var inst_24652 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24647);var state_24698__$1 = state_24698;var statearr_24709_24748 = state_24698__$1;(statearr_24709_24748[2] = inst_24652);
(statearr_24709_24748[1] = 9);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 8))
{var inst_24647 = (state_24698[10]);var state_24698__$1 = state_24698;var statearr_24710_24749 = state_24698__$1;(statearr_24710_24749[2] = inst_24647);
(statearr_24710_24749[1] = 9);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 9))
{var inst_24655 = (state_24698[12]);var inst_24655__$1 = (state_24698[2]);var inst_24656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24655__$1,cljs.core.constant$keyword$222);var inst_24657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24655__$1,cljs.core.constant$keyword$221);var inst_24658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24655__$1,cljs.core.constant$keyword$220);var state_24698__$1 = (function (){var statearr_24711 = state_24698;(statearr_24711[12] = inst_24655__$1);
(statearr_24711[13] = inst_24657);
(statearr_24711[14] = inst_24658);
return statearr_24711;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24698__$1,10,inst_24656);
} else
{if((state_val_24699 === 10))
{var inst_24662 = (state_24698[15]);var inst_24663 = (state_24698[16]);var inst_24661 = (state_24698[2]);var inst_24662__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24661,0,null);var inst_24663__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24661,1,null);var inst_24664 = (inst_24662__$1 == null);var inst_24665 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24663__$1,change);var inst_24666 = (inst_24664) || (inst_24665);var state_24698__$1 = (function (){var statearr_24712 = state_24698;(statearr_24712[15] = inst_24662__$1);
(statearr_24712[16] = inst_24663__$1);
return statearr_24712;
})();if(cljs.core.truth_(inst_24666))
{var statearr_24713_24750 = state_24698__$1;(statearr_24713_24750[1] = 11);
} else
{var statearr_24714_24751 = state_24698__$1;(statearr_24714_24751[1] = 12);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 11))
{var inst_24662 = (state_24698[15]);var inst_24668 = (inst_24662 == null);var state_24698__$1 = state_24698;if(cljs.core.truth_(inst_24668))
{var statearr_24715_24752 = state_24698__$1;(statearr_24715_24752[1] = 14);
} else
{var statearr_24716_24753 = state_24698__$1;(statearr_24716_24753[1] = 15);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 12))
{var inst_24677 = (state_24698[17]);var inst_24658 = (state_24698[14]);var inst_24663 = (state_24698[16]);var inst_24677__$1 = (inst_24658.cljs$core$IFn$_invoke$arity$1 ? inst_24658.cljs$core$IFn$_invoke$arity$1(inst_24663) : inst_24658.call(null,inst_24663));var state_24698__$1 = (function (){var statearr_24717 = state_24698;(statearr_24717[17] = inst_24677__$1);
return statearr_24717;
})();if(cljs.core.truth_(inst_24677__$1))
{var statearr_24718_24754 = state_24698__$1;(statearr_24718_24754[1] = 17);
} else
{var statearr_24719_24755 = state_24698__$1;(statearr_24719_24755[1] = 18);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 13))
{var inst_24694 = (state_24698[2]);var state_24698__$1 = state_24698;var statearr_24720_24756 = state_24698__$1;(statearr_24720_24756[2] = inst_24694);
(statearr_24720_24756[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 14))
{var inst_24663 = (state_24698[16]);var inst_24670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24663);var state_24698__$1 = state_24698;var statearr_24721_24757 = state_24698__$1;(statearr_24721_24757[2] = inst_24670);
(statearr_24721_24757[1] = 16);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 15))
{var state_24698__$1 = state_24698;var statearr_24722_24758 = state_24698__$1;(statearr_24722_24758[2] = null);
(statearr_24722_24758[1] = 16);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 16))
{var inst_24673 = (state_24698[2]);var inst_24674 = calc_state();var inst_24647 = inst_24674;var state_24698__$1 = (function (){var statearr_24723 = state_24698;(statearr_24723[10] = inst_24647);
(statearr_24723[18] = inst_24673);
return statearr_24723;
})();var statearr_24724_24759 = state_24698__$1;(statearr_24724_24759[2] = null);
(statearr_24724_24759[1] = 5);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 17))
{var inst_24677 = (state_24698[17]);var state_24698__$1 = state_24698;var statearr_24725_24760 = state_24698__$1;(statearr_24725_24760[2] = inst_24677);
(statearr_24725_24760[1] = 19);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 18))
{var inst_24657 = (state_24698[13]);var inst_24658 = (state_24698[14]);var inst_24663 = (state_24698[16]);var inst_24680 = cljs.core.empty_QMARK_(inst_24658);var inst_24681 = (inst_24657.cljs$core$IFn$_invoke$arity$1 ? inst_24657.cljs$core$IFn$_invoke$arity$1(inst_24663) : inst_24657.call(null,inst_24663));var inst_24682 = cljs.core.not(inst_24681);var inst_24683 = (inst_24680) && (inst_24682);var state_24698__$1 = state_24698;var statearr_24726_24761 = state_24698__$1;(statearr_24726_24761[2] = inst_24683);
(statearr_24726_24761[1] = 19);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 19))
{var inst_24685 = (state_24698[2]);var state_24698__$1 = state_24698;if(cljs.core.truth_(inst_24685))
{var statearr_24727_24762 = state_24698__$1;(statearr_24727_24762[1] = 20);
} else
{var statearr_24728_24763 = state_24698__$1;(statearr_24728_24763[1] = 21);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 20))
{var inst_24662 = (state_24698[15]);var state_24698__$1 = state_24698;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24698__$1,23,out,inst_24662);
} else
{if((state_val_24699 === 21))
{var state_24698__$1 = state_24698;var statearr_24729_24764 = state_24698__$1;(statearr_24729_24764[2] = null);
(statearr_24729_24764[1] = 22);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 22))
{var inst_24655 = (state_24698[12]);var inst_24691 = (state_24698[2]);var inst_24647 = inst_24655;var state_24698__$1 = (function (){var statearr_24730 = state_24698;(statearr_24730[10] = inst_24647);
(statearr_24730[19] = inst_24691);
return statearr_24730;
})();var statearr_24731_24765 = state_24698__$1;(statearr_24731_24765[2] = null);
(statearr_24731_24765[1] = 5);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24699 === 23))
{var inst_24688 = (state_24698[2]);var state_24698__$1 = state_24698;var statearr_24732_24766 = state_24698__$1;(statearr_24732_24766[2] = inst_24688);
(statearr_24732_24766[1] = 22);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_24736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24736[0] = state_machine__5507__auto__);
(statearr_24736[1] = 1);
return statearr_24736;
});
var state_machine__5507__auto____1 = (function (state_24698){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24698);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24737){if((e24737 instanceof Object))
{var ex__5510__auto__ = e24737;var statearr_24738_24767 = state_24698;(statearr_24738_24767[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24698);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e24737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__24768 = state_24698;
state_24698 = G__24768;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24698){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24739 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24740);
return statearr_24739;
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
cljs.core.async.Pub = (function (){var obj24770 = {};return obj24770;
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
return (function (p1__24771_SHARP_){if(cljs.core.truth_((p1__24771_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24771_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24771_SHARP_.call(null,topic))))
{return p1__24771_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24771_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24896 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24896 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24897){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24897 = meta24897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24896.cljs$lang$type = true;
cljs.core.async.t24896.cljs$lang$ctorStr = "cljs.core.async/t24896";
cljs.core.async.t24896.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24896");
});})(mults,ensure_mult))
;
cljs.core.async.t24896.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24896.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24896.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24896.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24896.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24896.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24896.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24898){var self__ = this;
var _24898__$1 = this;return self__.meta24897;
});})(mults,ensure_mult))
;
cljs.core.async.t24896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24898,meta24897__$1){var self__ = this;
var _24898__$1 = this;return (new cljs.core.async.t24896(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24897__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24896 = ((function (mults,ensure_mult){
return (function __GT_t24896(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24897){return (new cljs.core.async.t24896(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24897));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24896(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24972){var state_val_24973 = (state_24972[1]);if((state_val_24973 === 1))
{var state_24972__$1 = state_24972;var statearr_24974_25021 = state_24972__$1;(statearr_24974_25021[2] = null);
(statearr_24974_25021[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 2))
{var state_24972__$1 = state_24972;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24972__$1,4,ch);
} else
{if((state_val_24973 === 3))
{var inst_24970 = (state_24972[2]);var state_24972__$1 = state_24972;return cljs.core.async.impl.ioc_helpers.return_chan(state_24972__$1,inst_24970);
} else
{if((state_val_24973 === 4))
{var inst_24901 = (state_24972[7]);var inst_24901__$1 = (state_24972[2]);var inst_24902 = (inst_24901__$1 == null);var state_24972__$1 = (function (){var statearr_24975 = state_24972;(statearr_24975[7] = inst_24901__$1);
return statearr_24975;
})();if(cljs.core.truth_(inst_24902))
{var statearr_24976_25022 = state_24972__$1;(statearr_24976_25022[1] = 5);
} else
{var statearr_24977_25023 = state_24972__$1;(statearr_24977_25023[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 5))
{var inst_24908 = cljs.core.deref(mults);var inst_24909 = cljs.core.vals(inst_24908);var inst_24910 = cljs.core.seq(inst_24909);var inst_24911 = inst_24910;var inst_24912 = null;var inst_24913 = 0;var inst_24914 = 0;var state_24972__$1 = (function (){var statearr_24978 = state_24972;(statearr_24978[8] = inst_24911);
(statearr_24978[9] = inst_24912);
(statearr_24978[10] = inst_24914);
(statearr_24978[11] = inst_24913);
return statearr_24978;
})();var statearr_24979_25024 = state_24972__$1;(statearr_24979_25024[2] = null);
(statearr_24979_25024[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 6))
{var inst_24949 = (state_24972[12]);var inst_24951 = (state_24972[13]);var inst_24901 = (state_24972[7]);var inst_24949__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24901) : topic_fn.call(null,inst_24901));var inst_24950 = cljs.core.deref(mults);var inst_24951__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24950,inst_24949__$1);var state_24972__$1 = (function (){var statearr_24980 = state_24972;(statearr_24980[12] = inst_24949__$1);
(statearr_24980[13] = inst_24951__$1);
return statearr_24980;
})();if(cljs.core.truth_(inst_24951__$1))
{var statearr_24981_25025 = state_24972__$1;(statearr_24981_25025[1] = 19);
} else
{var statearr_24982_25026 = state_24972__$1;(statearr_24982_25026[1] = 20);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 7))
{var inst_24968 = (state_24972[2]);var state_24972__$1 = state_24972;var statearr_24983_25027 = state_24972__$1;(statearr_24983_25027[2] = inst_24968);
(statearr_24983_25027[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 8))
{var inst_24914 = (state_24972[10]);var inst_24913 = (state_24972[11]);var inst_24916 = (inst_24914 < inst_24913);var inst_24917 = inst_24916;var state_24972__$1 = state_24972;if(cljs.core.truth_(inst_24917))
{var statearr_24987_25028 = state_24972__$1;(statearr_24987_25028[1] = 10);
} else
{var statearr_24988_25029 = state_24972__$1;(statearr_24988_25029[1] = 11);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 9))
{var inst_24947 = (state_24972[2]);var state_24972__$1 = state_24972;var statearr_24989_25030 = state_24972__$1;(statearr_24989_25030[2] = inst_24947);
(statearr_24989_25030[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 10))
{var inst_24911 = (state_24972[8]);var inst_24912 = (state_24972[9]);var inst_24914 = (state_24972[10]);var inst_24913 = (state_24972[11]);var inst_24919 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24912,inst_24914);var inst_24920 = cljs.core.async.muxch_STAR_(inst_24919);var inst_24921 = cljs.core.async.close_BANG_(inst_24920);var inst_24922 = (inst_24914 + 1);var tmp24984 = inst_24911;var tmp24985 = inst_24912;var tmp24986 = inst_24913;var inst_24911__$1 = tmp24984;var inst_24912__$1 = tmp24985;var inst_24913__$1 = tmp24986;var inst_24914__$1 = inst_24922;var state_24972__$1 = (function (){var statearr_24990 = state_24972;(statearr_24990[14] = inst_24921);
(statearr_24990[8] = inst_24911__$1);
(statearr_24990[9] = inst_24912__$1);
(statearr_24990[10] = inst_24914__$1);
(statearr_24990[11] = inst_24913__$1);
return statearr_24990;
})();var statearr_24991_25031 = state_24972__$1;(statearr_24991_25031[2] = null);
(statearr_24991_25031[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 11))
{var inst_24911 = (state_24972[8]);var inst_24925 = (state_24972[15]);var inst_24925__$1 = cljs.core.seq(inst_24911);var state_24972__$1 = (function (){var statearr_24992 = state_24972;(statearr_24992[15] = inst_24925__$1);
return statearr_24992;
})();if(inst_24925__$1)
{var statearr_24993_25032 = state_24972__$1;(statearr_24993_25032[1] = 13);
} else
{var statearr_24994_25033 = state_24972__$1;(statearr_24994_25033[1] = 14);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 12))
{var inst_24945 = (state_24972[2]);var state_24972__$1 = state_24972;var statearr_24995_25034 = state_24972__$1;(statearr_24995_25034[2] = inst_24945);
(statearr_24995_25034[1] = 9);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 13))
{var inst_24925 = (state_24972[15]);var inst_24927 = cljs.core.chunked_seq_QMARK_(inst_24925);var state_24972__$1 = state_24972;if(inst_24927)
{var statearr_24996_25035 = state_24972__$1;(statearr_24996_25035[1] = 16);
} else
{var statearr_24997_25036 = state_24972__$1;(statearr_24997_25036[1] = 17);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 14))
{var state_24972__$1 = state_24972;var statearr_24998_25037 = state_24972__$1;(statearr_24998_25037[2] = null);
(statearr_24998_25037[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 15))
{var inst_24943 = (state_24972[2]);var state_24972__$1 = state_24972;var statearr_24999_25038 = state_24972__$1;(statearr_24999_25038[2] = inst_24943);
(statearr_24999_25038[1] = 12);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 16))
{var inst_24925 = (state_24972[15]);var inst_24929 = cljs.core.chunk_first(inst_24925);var inst_24930 = cljs.core.chunk_rest(inst_24925);var inst_24931 = cljs.core.count(inst_24929);var inst_24911 = inst_24930;var inst_24912 = inst_24929;var inst_24913 = inst_24931;var inst_24914 = 0;var state_24972__$1 = (function (){var statearr_25000 = state_24972;(statearr_25000[8] = inst_24911);
(statearr_25000[9] = inst_24912);
(statearr_25000[10] = inst_24914);
(statearr_25000[11] = inst_24913);
return statearr_25000;
})();var statearr_25001_25039 = state_24972__$1;(statearr_25001_25039[2] = null);
(statearr_25001_25039[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 17))
{var inst_24925 = (state_24972[15]);var inst_24934 = cljs.core.first(inst_24925);var inst_24935 = cljs.core.async.muxch_STAR_(inst_24934);var inst_24936 = cljs.core.async.close_BANG_(inst_24935);var inst_24937 = cljs.core.next(inst_24925);var inst_24911 = inst_24937;var inst_24912 = null;var inst_24913 = 0;var inst_24914 = 0;var state_24972__$1 = (function (){var statearr_25002 = state_24972;(statearr_25002[16] = inst_24936);
(statearr_25002[8] = inst_24911);
(statearr_25002[9] = inst_24912);
(statearr_25002[10] = inst_24914);
(statearr_25002[11] = inst_24913);
return statearr_25002;
})();var statearr_25003_25040 = state_24972__$1;(statearr_25003_25040[2] = null);
(statearr_25003_25040[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 18))
{var inst_24940 = (state_24972[2]);var state_24972__$1 = state_24972;var statearr_25004_25041 = state_24972__$1;(statearr_25004_25041[2] = inst_24940);
(statearr_25004_25041[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 19))
{var state_24972__$1 = state_24972;var statearr_25005_25042 = state_24972__$1;(statearr_25005_25042[2] = null);
(statearr_25005_25042[1] = 24);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 20))
{var state_24972__$1 = state_24972;var statearr_25006_25043 = state_24972__$1;(statearr_25006_25043[2] = null);
(statearr_25006_25043[1] = 21);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 21))
{var inst_24965 = (state_24972[2]);var state_24972__$1 = (function (){var statearr_25007 = state_24972;(statearr_25007[17] = inst_24965);
return statearr_25007;
})();var statearr_25008_25044 = state_24972__$1;(statearr_25008_25044[2] = null);
(statearr_25008_25044[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 22))
{var inst_24962 = (state_24972[2]);var state_24972__$1 = state_24972;var statearr_25009_25045 = state_24972__$1;(statearr_25009_25045[2] = inst_24962);
(statearr_25009_25045[1] = 21);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 23))
{var inst_24949 = (state_24972[12]);var inst_24953 = (state_24972[2]);var inst_24954 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24949);var state_24972__$1 = (function (){var statearr_25010 = state_24972;(statearr_25010[18] = inst_24953);
return statearr_25010;
})();var statearr_25011_25046 = state_24972__$1;(statearr_25011_25046[2] = inst_24954);
cljs.core.async.impl.ioc_helpers.process_exception(state_24972__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_24973 === 24))
{var inst_24951 = (state_24972[13]);var inst_24901 = (state_24972[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24972,23,Object,null,22);var inst_24958 = cljs.core.async.muxch_STAR_(inst_24951);var state_24972__$1 = state_24972;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24972__$1,25,inst_24958,inst_24901);
} else
{if((state_val_24973 === 25))
{var inst_24960 = (state_24972[2]);var state_24972__$1 = state_24972;var statearr_25012_25047 = state_24972__$1;(statearr_25012_25047[2] = inst_24960);
cljs.core.async.impl.ioc_helpers.process_exception(state_24972__$1);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_25016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25016[0] = state_machine__5507__auto__);
(statearr_25016[1] = 1);
return statearr_25016;
});
var state_machine__5507__auto____1 = (function (state_24972){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24972);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25017){if((e25017 instanceof Object))
{var ex__5510__auto__ = e25017;var statearr_25018_25048 = state_24972;(statearr_25018_25048[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24972);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25049 = state_24972;
state_24972 = G__25049;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24972){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25019 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25020);
return statearr_25019;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25156){var state_val_25157 = (state_25156[1]);if((state_val_25157 === 1))
{var state_25156__$1 = state_25156;var statearr_25158_25187 = state_25156__$1;(statearr_25158_25187[2] = null);
(statearr_25158_25187[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 2))
{var inst_25119 = cljs.core.reset_BANG_(dctr,cnt);var inst_25120 = 0;var state_25156__$1 = (function (){var statearr_25159 = state_25156;(statearr_25159[7] = inst_25119);
(statearr_25159[8] = inst_25120);
return statearr_25159;
})();var statearr_25160_25188 = state_25156__$1;(statearr_25160_25188[2] = null);
(statearr_25160_25188[1] = 4);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 3))
{var inst_25154 = (state_25156[2]);var state_25156__$1 = state_25156;return cljs.core.async.impl.ioc_helpers.return_chan(state_25156__$1,inst_25154);
} else
{if((state_val_25157 === 4))
{var inst_25120 = (state_25156[8]);var inst_25122 = (inst_25120 < cnt);var state_25156__$1 = state_25156;if(cljs.core.truth_(inst_25122))
{var statearr_25161_25189 = state_25156__$1;(statearr_25161_25189[1] = 6);
} else
{var statearr_25162_25190 = state_25156__$1;(statearr_25162_25190[1] = 7);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 5))
{var inst_25140 = (state_25156[2]);var state_25156__$1 = (function (){var statearr_25163 = state_25156;(statearr_25163[9] = inst_25140);
return statearr_25163;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25156__$1,12,dchan);
} else
{if((state_val_25157 === 6))
{var state_25156__$1 = state_25156;var statearr_25164_25191 = state_25156__$1;(statearr_25164_25191[2] = null);
(statearr_25164_25191[1] = 11);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 7))
{var state_25156__$1 = state_25156;var statearr_25165_25192 = state_25156__$1;(statearr_25165_25192[2] = null);
(statearr_25165_25192[1] = 8);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 8))
{var inst_25138 = (state_25156[2]);var state_25156__$1 = state_25156;var statearr_25166_25193 = state_25156__$1;(statearr_25166_25193[2] = inst_25138);
(statearr_25166_25193[1] = 5);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 9))
{var inst_25120 = (state_25156[8]);var inst_25133 = (state_25156[2]);var inst_25134 = (inst_25120 + 1);var inst_25120__$1 = inst_25134;var state_25156__$1 = (function (){var statearr_25167 = state_25156;(statearr_25167[10] = inst_25133);
(statearr_25167[8] = inst_25120__$1);
return statearr_25167;
})();var statearr_25168_25194 = state_25156__$1;(statearr_25168_25194[2] = null);
(statearr_25168_25194[1] = 4);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 10))
{var inst_25124 = (state_25156[2]);var inst_25125 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25156__$1 = (function (){var statearr_25169 = state_25156;(statearr_25169[11] = inst_25124);
return statearr_25169;
})();var statearr_25170_25195 = state_25156__$1;(statearr_25170_25195[2] = inst_25125);
cljs.core.async.impl.ioc_helpers.process_exception(state_25156__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 11))
{var inst_25120 = (state_25156[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25156,10,Object,null,9);var inst_25129 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25120) : chs__$1.call(null,inst_25120));var inst_25130 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25120) : done.call(null,inst_25120));var inst_25131 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25129,inst_25130);var state_25156__$1 = state_25156;var statearr_25171_25196 = state_25156__$1;(statearr_25171_25196[2] = inst_25131);
cljs.core.async.impl.ioc_helpers.process_exception(state_25156__$1);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 12))
{var inst_25142 = (state_25156[12]);var inst_25142__$1 = (state_25156[2]);var inst_25143 = cljs.core.some(cljs.core.nil_QMARK_,inst_25142__$1);var state_25156__$1 = (function (){var statearr_25172 = state_25156;(statearr_25172[12] = inst_25142__$1);
return statearr_25172;
})();if(cljs.core.truth_(inst_25143))
{var statearr_25173_25197 = state_25156__$1;(statearr_25173_25197[1] = 13);
} else
{var statearr_25174_25198 = state_25156__$1;(statearr_25174_25198[1] = 14);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 13))
{var inst_25145 = cljs.core.async.close_BANG_(out);var state_25156__$1 = state_25156;var statearr_25175_25199 = state_25156__$1;(statearr_25175_25199[2] = inst_25145);
(statearr_25175_25199[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 14))
{var inst_25142 = (state_25156[12]);var inst_25147 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25142);var state_25156__$1 = state_25156;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25156__$1,16,out,inst_25147);
} else
{if((state_val_25157 === 15))
{var inst_25152 = (state_25156[2]);var state_25156__$1 = state_25156;var statearr_25176_25200 = state_25156__$1;(statearr_25176_25200[2] = inst_25152);
(statearr_25176_25200[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25157 === 16))
{var inst_25149 = (state_25156[2]);var state_25156__$1 = (function (){var statearr_25177 = state_25156;(statearr_25177[13] = inst_25149);
return statearr_25177;
})();var statearr_25178_25201 = state_25156__$1;(statearr_25178_25201[2] = null);
(statearr_25178_25201[1] = 2);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_25182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25182[0] = state_machine__5507__auto__);
(statearr_25182[1] = 1);
return statearr_25182;
});
var state_machine__5507__auto____1 = (function (state_25156){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25156);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25183){if((e25183 instanceof Object))
{var ex__5510__auto__ = e25183;var statearr_25184_25202 = state_25156;(statearr_25184_25202[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25156);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25183;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25203 = state_25156;
state_25156 = G__25203;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25156){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25185 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25186);
return statearr_25185;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25287){var state_val_25288 = (state_25287[1]);if((state_val_25288 === 1))
{var inst_25258 = cljs.core.vec(chs);var inst_25259 = inst_25258;var state_25287__$1 = (function (){var statearr_25289 = state_25287;(statearr_25289[7] = inst_25259);
return statearr_25289;
})();var statearr_25290_25312 = state_25287__$1;(statearr_25290_25312[2] = null);
(statearr_25290_25312[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25288 === 2))
{var inst_25259 = (state_25287[7]);var inst_25261 = cljs.core.count(inst_25259);var inst_25262 = (inst_25261 > 0);var state_25287__$1 = state_25287;if(cljs.core.truth_(inst_25262))
{var statearr_25291_25313 = state_25287__$1;(statearr_25291_25313[1] = 4);
} else
{var statearr_25292_25314 = state_25287__$1;(statearr_25292_25314[1] = 5);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25288 === 3))
{var inst_25285 = (state_25287[2]);var state_25287__$1 = state_25287;return cljs.core.async.impl.ioc_helpers.return_chan(state_25287__$1,inst_25285);
} else
{if((state_val_25288 === 4))
{var inst_25259 = (state_25287[7]);var state_25287__$1 = state_25287;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25287__$1,7,inst_25259);
} else
{if((state_val_25288 === 5))
{var inst_25281 = cljs.core.async.close_BANG_(out);var state_25287__$1 = state_25287;var statearr_25293_25315 = state_25287__$1;(statearr_25293_25315[2] = inst_25281);
(statearr_25293_25315[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25288 === 6))
{var inst_25283 = (state_25287[2]);var state_25287__$1 = state_25287;var statearr_25294_25316 = state_25287__$1;(statearr_25294_25316[2] = inst_25283);
(statearr_25294_25316[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25288 === 7))
{var inst_25266 = (state_25287[8]);var inst_25267 = (state_25287[9]);var inst_25266__$1 = (state_25287[2]);var inst_25267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25266__$1,0,null);var inst_25268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25266__$1,1,null);var inst_25269 = (inst_25267__$1 == null);var state_25287__$1 = (function (){var statearr_25295 = state_25287;(statearr_25295[10] = inst_25268);
(statearr_25295[8] = inst_25266__$1);
(statearr_25295[9] = inst_25267__$1);
return statearr_25295;
})();if(cljs.core.truth_(inst_25269))
{var statearr_25296_25317 = state_25287__$1;(statearr_25296_25317[1] = 8);
} else
{var statearr_25297_25318 = state_25287__$1;(statearr_25297_25318[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25288 === 8))
{var inst_25268 = (state_25287[10]);var inst_25266 = (state_25287[8]);var inst_25267 = (state_25287[9]);var inst_25259 = (state_25287[7]);var inst_25271 = (function (){var c = inst_25268;var v = inst_25267;var vec__25264 = inst_25266;var cs = inst_25259;return ((function (c,v,vec__25264,cs,inst_25268,inst_25266,inst_25267,inst_25259,state_val_25288){
return (function (p1__25204_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25204_SHARP_);
});
;})(c,v,vec__25264,cs,inst_25268,inst_25266,inst_25267,inst_25259,state_val_25288))
})();var inst_25272 = cljs.core.filterv(inst_25271,inst_25259);var inst_25259__$1 = inst_25272;var state_25287__$1 = (function (){var statearr_25298 = state_25287;(statearr_25298[7] = inst_25259__$1);
return statearr_25298;
})();var statearr_25299_25319 = state_25287__$1;(statearr_25299_25319[2] = null);
(statearr_25299_25319[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25288 === 9))
{var inst_25267 = (state_25287[9]);var state_25287__$1 = state_25287;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25287__$1,11,out,inst_25267);
} else
{if((state_val_25288 === 10))
{var inst_25279 = (state_25287[2]);var state_25287__$1 = state_25287;var statearr_25301_25320 = state_25287__$1;(statearr_25301_25320[2] = inst_25279);
(statearr_25301_25320[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25288 === 11))
{var inst_25259 = (state_25287[7]);var inst_25276 = (state_25287[2]);var tmp25300 = inst_25259;var inst_25259__$1 = tmp25300;var state_25287__$1 = (function (){var statearr_25302 = state_25287;(statearr_25302[7] = inst_25259__$1);
(statearr_25302[11] = inst_25276);
return statearr_25302;
})();var statearr_25303_25321 = state_25287__$1;(statearr_25303_25321[2] = null);
(statearr_25303_25321[1] = 2);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_25307 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25307[0] = state_machine__5507__auto__);
(statearr_25307[1] = 1);
return statearr_25307;
});
var state_machine__5507__auto____1 = (function (state_25287){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25287);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25308){if((e25308 instanceof Object))
{var ex__5510__auto__ = e25308;var statearr_25309_25322 = state_25287;(statearr_25309_25322[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25287);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25323 = state_25287;
state_25287 = G__25323;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25287){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25310 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25311);
return statearr_25310;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25393){var state_val_25394 = (state_25393[1]);if((state_val_25394 === 1))
{var inst_25370 = 0;var state_25393__$1 = (function (){var statearr_25395 = state_25393;(statearr_25395[7] = inst_25370);
return statearr_25395;
})();var statearr_25396_25417 = state_25393__$1;(statearr_25396_25417[2] = null);
(statearr_25396_25417[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25394 === 2))
{var inst_25370 = (state_25393[7]);var inst_25372 = (inst_25370 < n);var state_25393__$1 = state_25393;if(cljs.core.truth_(inst_25372))
{var statearr_25397_25418 = state_25393__$1;(statearr_25397_25418[1] = 4);
} else
{var statearr_25398_25419 = state_25393__$1;(statearr_25398_25419[1] = 5);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25394 === 3))
{var inst_25390 = (state_25393[2]);var inst_25391 = cljs.core.async.close_BANG_(out);var state_25393__$1 = (function (){var statearr_25399 = state_25393;(statearr_25399[8] = inst_25390);
return statearr_25399;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25393__$1,inst_25391);
} else
{if((state_val_25394 === 4))
{var state_25393__$1 = state_25393;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25393__$1,7,ch);
} else
{if((state_val_25394 === 5))
{var state_25393__$1 = state_25393;var statearr_25400_25420 = state_25393__$1;(statearr_25400_25420[2] = null);
(statearr_25400_25420[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25394 === 6))
{var inst_25388 = (state_25393[2]);var state_25393__$1 = state_25393;var statearr_25401_25421 = state_25393__$1;(statearr_25401_25421[2] = inst_25388);
(statearr_25401_25421[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25394 === 7))
{var inst_25375 = (state_25393[9]);var inst_25375__$1 = (state_25393[2]);var inst_25376 = (inst_25375__$1 == null);var inst_25377 = cljs.core.not(inst_25376);var state_25393__$1 = (function (){var statearr_25402 = state_25393;(statearr_25402[9] = inst_25375__$1);
return statearr_25402;
})();if(inst_25377)
{var statearr_25403_25422 = state_25393__$1;(statearr_25403_25422[1] = 8);
} else
{var statearr_25404_25423 = state_25393__$1;(statearr_25404_25423[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25394 === 8))
{var inst_25375 = (state_25393[9]);var state_25393__$1 = state_25393;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25393__$1,11,out,inst_25375);
} else
{if((state_val_25394 === 9))
{var state_25393__$1 = state_25393;var statearr_25405_25424 = state_25393__$1;(statearr_25405_25424[2] = null);
(statearr_25405_25424[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25394 === 10))
{var inst_25385 = (state_25393[2]);var state_25393__$1 = state_25393;var statearr_25406_25425 = state_25393__$1;(statearr_25406_25425[2] = inst_25385);
(statearr_25406_25425[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25394 === 11))
{var inst_25370 = (state_25393[7]);var inst_25380 = (state_25393[2]);var inst_25381 = (inst_25370 + 1);var inst_25370__$1 = inst_25381;var state_25393__$1 = (function (){var statearr_25407 = state_25393;(statearr_25407[7] = inst_25370__$1);
(statearr_25407[10] = inst_25380);
return statearr_25407;
})();var statearr_25408_25426 = state_25393__$1;(statearr_25408_25426[2] = null);
(statearr_25408_25426[1] = 2);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_25412 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25412[0] = state_machine__5507__auto__);
(statearr_25412[1] = 1);
return statearr_25412;
});
var state_machine__5507__auto____1 = (function (state_25393){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25393);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25413){if((e25413 instanceof Object))
{var ex__5510__auto__ = e25413;var statearr_25414_25427 = state_25393;(statearr_25414_25427[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25393);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25428 = state_25393;
state_25393 = G__25428;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25393){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25415 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25416);
return statearr_25415;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25500){var state_val_25501 = (state_25500[1]);if((state_val_25501 === 1))
{var inst_25477 = null;var state_25500__$1 = (function (){var statearr_25502 = state_25500;(statearr_25502[7] = inst_25477);
return statearr_25502;
})();var statearr_25503_25526 = state_25500__$1;(statearr_25503_25526[2] = null);
(statearr_25503_25526[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25501 === 2))
{var state_25500__$1 = state_25500;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25500__$1,4,ch);
} else
{if((state_val_25501 === 3))
{var inst_25497 = (state_25500[2]);var inst_25498 = cljs.core.async.close_BANG_(out);var state_25500__$1 = (function (){var statearr_25504 = state_25500;(statearr_25504[8] = inst_25497);
return statearr_25504;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25500__$1,inst_25498);
} else
{if((state_val_25501 === 4))
{var inst_25480 = (state_25500[9]);var inst_25480__$1 = (state_25500[2]);var inst_25481 = (inst_25480__$1 == null);var inst_25482 = cljs.core.not(inst_25481);var state_25500__$1 = (function (){var statearr_25505 = state_25500;(statearr_25505[9] = inst_25480__$1);
return statearr_25505;
})();if(inst_25482)
{var statearr_25506_25527 = state_25500__$1;(statearr_25506_25527[1] = 5);
} else
{var statearr_25507_25528 = state_25500__$1;(statearr_25507_25528[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25501 === 5))
{var inst_25480 = (state_25500[9]);var inst_25477 = (state_25500[7]);var inst_25484 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25480,inst_25477);var state_25500__$1 = state_25500;if(inst_25484)
{var statearr_25508_25529 = state_25500__$1;(statearr_25508_25529[1] = 8);
} else
{var statearr_25509_25530 = state_25500__$1;(statearr_25509_25530[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25501 === 6))
{var state_25500__$1 = state_25500;var statearr_25511_25531 = state_25500__$1;(statearr_25511_25531[2] = null);
(statearr_25511_25531[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25501 === 7))
{var inst_25495 = (state_25500[2]);var state_25500__$1 = state_25500;var statearr_25512_25532 = state_25500__$1;(statearr_25512_25532[2] = inst_25495);
(statearr_25512_25532[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25501 === 8))
{var inst_25477 = (state_25500[7]);var tmp25510 = inst_25477;var inst_25477__$1 = tmp25510;var state_25500__$1 = (function (){var statearr_25513 = state_25500;(statearr_25513[7] = inst_25477__$1);
return statearr_25513;
})();var statearr_25514_25533 = state_25500__$1;(statearr_25514_25533[2] = null);
(statearr_25514_25533[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25501 === 9))
{var inst_25480 = (state_25500[9]);var state_25500__$1 = state_25500;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25500__$1,11,out,inst_25480);
} else
{if((state_val_25501 === 10))
{var inst_25492 = (state_25500[2]);var state_25500__$1 = state_25500;var statearr_25515_25534 = state_25500__$1;(statearr_25515_25534[2] = inst_25492);
(statearr_25515_25534[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25501 === 11))
{var inst_25480 = (state_25500[9]);var inst_25489 = (state_25500[2]);var inst_25477 = inst_25480;var state_25500__$1 = (function (){var statearr_25516 = state_25500;(statearr_25516[10] = inst_25489);
(statearr_25516[7] = inst_25477);
return statearr_25516;
})();var statearr_25517_25535 = state_25500__$1;(statearr_25517_25535[2] = null);
(statearr_25517_25535[1] = 2);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_25521 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25521[0] = state_machine__5507__auto__);
(statearr_25521[1] = 1);
return statearr_25521;
});
var state_machine__5507__auto____1 = (function (state_25500){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25500);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25522){if((e25522 instanceof Object))
{var ex__5510__auto__ = e25522;var statearr_25523_25536 = state_25500;(statearr_25523_25536[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25500);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25537 = state_25500;
state_25500 = G__25537;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25500){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25524 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25525);
return statearr_25524;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25642){var state_val_25643 = (state_25642[1]);if((state_val_25643 === 1))
{var inst_25605 = (new Array(n));var inst_25606 = inst_25605;var inst_25607 = 0;var state_25642__$1 = (function (){var statearr_25644 = state_25642;(statearr_25644[7] = inst_25607);
(statearr_25644[8] = inst_25606);
return statearr_25644;
})();var statearr_25645_25673 = state_25642__$1;(statearr_25645_25673[2] = null);
(statearr_25645_25673[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25643 === 2))
{var state_25642__$1 = state_25642;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25642__$1,4,ch);
} else
{if((state_val_25643 === 3))
{var inst_25640 = (state_25642[2]);var state_25642__$1 = state_25642;return cljs.core.async.impl.ioc_helpers.return_chan(state_25642__$1,inst_25640);
} else
{if((state_val_25643 === 4))
{var inst_25610 = (state_25642[9]);var inst_25610__$1 = (state_25642[2]);var inst_25611 = (inst_25610__$1 == null);var inst_25612 = cljs.core.not(inst_25611);var state_25642__$1 = (function (){var statearr_25646 = state_25642;(statearr_25646[9] = inst_25610__$1);
return statearr_25646;
})();if(inst_25612)
{var statearr_25647_25674 = state_25642__$1;(statearr_25647_25674[1] = 5);
} else
{var statearr_25648_25675 = state_25642__$1;(statearr_25648_25675[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25643 === 5))
{var inst_25615 = (state_25642[10]);var inst_25610 = (state_25642[9]);var inst_25607 = (state_25642[7]);var inst_25606 = (state_25642[8]);var inst_25614 = (inst_25606[inst_25607] = inst_25610);var inst_25615__$1 = (inst_25607 + 1);var inst_25616 = (inst_25615__$1 < n);var state_25642__$1 = (function (){var statearr_25649 = state_25642;(statearr_25649[11] = inst_25614);
(statearr_25649[10] = inst_25615__$1);
return statearr_25649;
})();if(cljs.core.truth_(inst_25616))
{var statearr_25650_25676 = state_25642__$1;(statearr_25650_25676[1] = 8);
} else
{var statearr_25651_25677 = state_25642__$1;(statearr_25651_25677[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25643 === 6))
{var inst_25607 = (state_25642[7]);var inst_25628 = (inst_25607 > 0);var state_25642__$1 = state_25642;if(cljs.core.truth_(inst_25628))
{var statearr_25653_25678 = state_25642__$1;(statearr_25653_25678[1] = 12);
} else
{var statearr_25654_25679 = state_25642__$1;(statearr_25654_25679[1] = 13);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25643 === 7))
{var inst_25638 = (state_25642[2]);var state_25642__$1 = state_25642;var statearr_25655_25680 = state_25642__$1;(statearr_25655_25680[2] = inst_25638);
(statearr_25655_25680[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25643 === 8))
{var inst_25615 = (state_25642[10]);var inst_25606 = (state_25642[8]);var tmp25652 = inst_25606;var inst_25606__$1 = tmp25652;var inst_25607 = inst_25615;var state_25642__$1 = (function (){var statearr_25656 = state_25642;(statearr_25656[7] = inst_25607);
(statearr_25656[8] = inst_25606__$1);
return statearr_25656;
})();var statearr_25657_25681 = state_25642__$1;(statearr_25657_25681[2] = null);
(statearr_25657_25681[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25643 === 9))
{var inst_25606 = (state_25642[8]);var inst_25620 = cljs.core.vec(inst_25606);var state_25642__$1 = state_25642;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25642__$1,11,out,inst_25620);
} else
{if((state_val_25643 === 10))
{var inst_25626 = (state_25642[2]);var state_25642__$1 = state_25642;var statearr_25658_25682 = state_25642__$1;(statearr_25658_25682[2] = inst_25626);
(statearr_25658_25682[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25643 === 11))
{var inst_25622 = (state_25642[2]);var inst_25623 = (new Array(n));var inst_25606 = inst_25623;var inst_25607 = 0;var state_25642__$1 = (function (){var statearr_25659 = state_25642;(statearr_25659[12] = inst_25622);
(statearr_25659[7] = inst_25607);
(statearr_25659[8] = inst_25606);
return statearr_25659;
})();var statearr_25660_25683 = state_25642__$1;(statearr_25660_25683[2] = null);
(statearr_25660_25683[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25643 === 12))
{var inst_25606 = (state_25642[8]);var inst_25630 = cljs.core.vec(inst_25606);var state_25642__$1 = state_25642;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25642__$1,15,out,inst_25630);
} else
{if((state_val_25643 === 13))
{var state_25642__$1 = state_25642;var statearr_25661_25684 = state_25642__$1;(statearr_25661_25684[2] = null);
(statearr_25661_25684[1] = 14);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25643 === 14))
{var inst_25635 = (state_25642[2]);var inst_25636 = cljs.core.async.close_BANG_(out);var state_25642__$1 = (function (){var statearr_25662 = state_25642;(statearr_25662[13] = inst_25635);
return statearr_25662;
})();var statearr_25663_25685 = state_25642__$1;(statearr_25663_25685[2] = inst_25636);
(statearr_25663_25685[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25643 === 15))
{var inst_25632 = (state_25642[2]);var state_25642__$1 = state_25642;var statearr_25664_25686 = state_25642__$1;(statearr_25664_25686[2] = inst_25632);
(statearr_25664_25686[1] = 14);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_25668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25668[0] = state_machine__5507__auto__);
(statearr_25668[1] = 1);
return statearr_25668;
});
var state_machine__5507__auto____1 = (function (state_25642){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25642);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25669){if((e25669 instanceof Object))
{var ex__5510__auto__ = e25669;var statearr_25670_25687 = state_25642;(statearr_25670_25687[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25642);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25688 = state_25642;
state_25642 = G__25688;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25642){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25671 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25672);
return statearr_25671;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25801){var state_val_25802 = (state_25801[1]);if((state_val_25802 === 1))
{var inst_25760 = [];var inst_25761 = inst_25760;var inst_25762 = cljs.core.constant$keyword$223;var state_25801__$1 = (function (){var statearr_25803 = state_25801;(statearr_25803[7] = inst_25761);
(statearr_25803[8] = inst_25762);
return statearr_25803;
})();var statearr_25804_25832 = state_25801__$1;(statearr_25804_25832[2] = null);
(statearr_25804_25832[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25802 === 2))
{var state_25801__$1 = state_25801;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25801__$1,4,ch);
} else
{if((state_val_25802 === 3))
{var inst_25799 = (state_25801[2]);var state_25801__$1 = state_25801;return cljs.core.async.impl.ioc_helpers.return_chan(state_25801__$1,inst_25799);
} else
{if((state_val_25802 === 4))
{var inst_25765 = (state_25801[9]);var inst_25765__$1 = (state_25801[2]);var inst_25766 = (inst_25765__$1 == null);var inst_25767 = cljs.core.not(inst_25766);var state_25801__$1 = (function (){var statearr_25805 = state_25801;(statearr_25805[9] = inst_25765__$1);
return statearr_25805;
})();if(inst_25767)
{var statearr_25806_25833 = state_25801__$1;(statearr_25806_25833[1] = 5);
} else
{var statearr_25807_25834 = state_25801__$1;(statearr_25807_25834[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25802 === 5))
{var inst_25769 = (state_25801[10]);var inst_25765 = (state_25801[9]);var inst_25762 = (state_25801[8]);var inst_25769__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25765) : f.call(null,inst_25765));var inst_25770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25769__$1,inst_25762);var inst_25771 = cljs.core.keyword_identical_QMARK_(inst_25762,cljs.core.constant$keyword$223);var inst_25772 = (inst_25770) || (inst_25771);var state_25801__$1 = (function (){var statearr_25808 = state_25801;(statearr_25808[10] = inst_25769__$1);
return statearr_25808;
})();if(cljs.core.truth_(inst_25772))
{var statearr_25809_25835 = state_25801__$1;(statearr_25809_25835[1] = 8);
} else
{var statearr_25810_25836 = state_25801__$1;(statearr_25810_25836[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25802 === 6))
{var inst_25761 = (state_25801[7]);var inst_25786 = inst_25761.length;var inst_25787 = (inst_25786 > 0);var state_25801__$1 = state_25801;if(cljs.core.truth_(inst_25787))
{var statearr_25812_25837 = state_25801__$1;(statearr_25812_25837[1] = 12);
} else
{var statearr_25813_25838 = state_25801__$1;(statearr_25813_25838[1] = 13);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_25802 === 7))
{var inst_25797 = (state_25801[2]);var state_25801__$1 = state_25801;var statearr_25814_25839 = state_25801__$1;(statearr_25814_25839[2] = inst_25797);
(statearr_25814_25839[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25802 === 8))
{var inst_25769 = (state_25801[10]);var inst_25765 = (state_25801[9]);var inst_25761 = (state_25801[7]);var inst_25774 = inst_25761.push(inst_25765);var tmp25811 = inst_25761;var inst_25761__$1 = tmp25811;var inst_25762 = inst_25769;var state_25801__$1 = (function (){var statearr_25815 = state_25801;(statearr_25815[11] = inst_25774);
(statearr_25815[7] = inst_25761__$1);
(statearr_25815[8] = inst_25762);
return statearr_25815;
})();var statearr_25816_25840 = state_25801__$1;(statearr_25816_25840[2] = null);
(statearr_25816_25840[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25802 === 9))
{var inst_25761 = (state_25801[7]);var inst_25777 = cljs.core.vec(inst_25761);var state_25801__$1 = state_25801;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25801__$1,11,out,inst_25777);
} else
{if((state_val_25802 === 10))
{var inst_25784 = (state_25801[2]);var state_25801__$1 = state_25801;var statearr_25817_25841 = state_25801__$1;(statearr_25817_25841[2] = inst_25784);
(statearr_25817_25841[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25802 === 11))
{var inst_25769 = (state_25801[10]);var inst_25765 = (state_25801[9]);var inst_25779 = (state_25801[2]);var inst_25780 = [];var inst_25781 = inst_25780.push(inst_25765);var inst_25761 = inst_25780;var inst_25762 = inst_25769;var state_25801__$1 = (function (){var statearr_25818 = state_25801;(statearr_25818[12] = inst_25779);
(statearr_25818[13] = inst_25781);
(statearr_25818[7] = inst_25761);
(statearr_25818[8] = inst_25762);
return statearr_25818;
})();var statearr_25819_25842 = state_25801__$1;(statearr_25819_25842[2] = null);
(statearr_25819_25842[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25802 === 12))
{var inst_25761 = (state_25801[7]);var inst_25789 = cljs.core.vec(inst_25761);var state_25801__$1 = state_25801;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25801__$1,15,out,inst_25789);
} else
{if((state_val_25802 === 13))
{var state_25801__$1 = state_25801;var statearr_25820_25843 = state_25801__$1;(statearr_25820_25843[2] = null);
(statearr_25820_25843[1] = 14);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25802 === 14))
{var inst_25794 = (state_25801[2]);var inst_25795 = cljs.core.async.close_BANG_(out);var state_25801__$1 = (function (){var statearr_25821 = state_25801;(statearr_25821[14] = inst_25794);
return statearr_25821;
})();var statearr_25822_25844 = state_25801__$1;(statearr_25822_25844[2] = inst_25795);
(statearr_25822_25844[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_25802 === 15))
{var inst_25791 = (state_25801[2]);var state_25801__$1 = state_25801;var statearr_25823_25845 = state_25801__$1;(statearr_25823_25845[2] = inst_25791);
(statearr_25823_25845[1] = 14);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_25827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25827[0] = state_machine__5507__auto__);
(statearr_25827[1] = 1);
return statearr_25827;
});
var state_machine__5507__auto____1 = (function (state_25801){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25801);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25828){if((e25828 instanceof Object))
{var ex__5510__auto__ = e25828;var statearr_25829_25846 = state_25801;(statearr_25829_25846[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25801);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e25828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__25847 = state_25801;
state_25801 = G__25847;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25801){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25830 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25831);
return statearr_25830;
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
