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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23393 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23393 = (function (f,fn_handler,meta23394){
this.f = f;
this.fn_handler = fn_handler;
this.meta23394 = meta23394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23393.cljs$lang$type = true;
cljs.core.async.t23393.cljs$lang$ctorStr = "cljs.core.async/t23393";
cljs.core.async.t23393.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23393");
});
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23395){var self__ = this;
var _23395__$1 = this;return self__.meta23394;
});
cljs.core.async.t23393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23395,meta23394__$1){var self__ = this;
var _23395__$1 = this;return (new cljs.core.async.t23393(self__.f,self__.fn_handler,meta23394__$1));
});
cljs.core.async.__GT_t23393 = (function __GT_t23393(f__$1,fn_handler__$1,meta23394){return (new cljs.core.async.t23393(f__$1,fn_handler__$1,meta23394));
});
}
return (new cljs.core.async.t23393(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23397 = buff;if(G__23397)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23397.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23397.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23397);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23397);
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
{var val_23398 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23398) : fn1.call(null,val_23398));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23398) : fn1.call(null,val_23398));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23399 = n;var x_23400 = 0;while(true){
if((x_23400 < n__4248__auto___23399))
{(a[x_23400] = 0);
{
var G__23401 = (x_23400 + 1);
x_23400 = G__23401;
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
var G__23402 = (i + 1);
i = G__23402;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23406 = (function (flag,alt_flag,meta23407){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23407 = meta23407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23406.cljs$lang$type = true;
cljs.core.async.t23406.cljs$lang$ctorStr = "cljs.core.async/t23406";
cljs.core.async.t23406.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23406");
});
cljs.core.async.t23406.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23408){var self__ = this;
var _23408__$1 = this;return self__.meta23407;
});
cljs.core.async.t23406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23408,meta23407__$1){var self__ = this;
var _23408__$1 = this;return (new cljs.core.async.t23406(self__.flag,self__.alt_flag,meta23407__$1));
});
cljs.core.async.__GT_t23406 = (function __GT_t23406(flag__$1,alt_flag__$1,meta23407){return (new cljs.core.async.t23406(flag__$1,alt_flag__$1,meta23407));
});
}
return (new cljs.core.async.t23406(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23412 = (function (cb,flag,alt_handler,meta23413){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23413 = meta23413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23412.cljs$lang$type = true;
cljs.core.async.t23412.cljs$lang$ctorStr = "cljs.core.async/t23412";
cljs.core.async.t23412.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23412");
});
cljs.core.async.t23412.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23414){var self__ = this;
var _23414__$1 = this;return self__.meta23413;
});
cljs.core.async.t23412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23414,meta23413__$1){var self__ = this;
var _23414__$1 = this;return (new cljs.core.async.t23412(self__.cb,self__.flag,self__.alt_handler,meta23413__$1));
});
cljs.core.async.__GT_t23412 = (function __GT_t23412(cb__$1,flag__$1,alt_handler__$1,meta23413){return (new cljs.core.async.t23412(cb__$1,flag__$1,alt_handler__$1,meta23413));
});
}
return (new cljs.core.async.t23412(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$227.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23415_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23415_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23415_SHARP_,port], null)));
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
var G__23416 = (i + 1);
i = G__23416;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$211))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$211], null));
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
var alts_BANG___delegate = function (ports,p__23417){var map__23419 = p__23417;var map__23419__$1 = ((cljs.core.seq_QMARK_(map__23419))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23419):map__23419);var opts = map__23419__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23417 = null;if (arguments.length > 1) {
  p__23417 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23417);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23420){
var ports = cljs.core.first(arglist__23420);
var p__23417 = cljs.core.rest(arglist__23420);
return alts_BANG___delegate(ports,p__23417);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23428 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23428 = (function (ch,f,map_LT_,meta23429){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23429 = meta23429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23428.cljs$lang$type = true;
cljs.core.async.t23428.cljs$lang$ctorStr = "cljs.core.async/t23428";
cljs.core.async.t23428.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23428");
});
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23431 = (function (fn1,_,meta23429,ch,f,map_LT_,meta23432){
this.fn1 = fn1;
this._ = _;
this.meta23429 = meta23429;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23432 = meta23432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23431.cljs$lang$type = true;
cljs.core.async.t23431.cljs$lang$ctorStr = "cljs.core.async/t23431";
cljs.core.async.t23431.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23431");
});
cljs.core.async.t23431.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23431.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23421_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23421_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23421_SHARP_) : self__.f.call(null,p1__23421_SHARP_)))) : f1.call(null,(((p1__23421_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23421_SHARP_) : self__.f.call(null,p1__23421_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23433){var self__ = this;
var _23433__$1 = this;return self__.meta23432;
});
cljs.core.async.t23431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23433,meta23432__$1){var self__ = this;
var _23433__$1 = this;return (new cljs.core.async.t23431(self__.fn1,self__._,self__.meta23429,self__.ch,self__.f,self__.map_LT_,meta23432__$1));
});
cljs.core.async.__GT_t23431 = (function __GT_t23431(fn1__$1,___$2,meta23429__$1,ch__$2,f__$2,map_LT___$2,meta23432){return (new cljs.core.async.t23431(fn1__$1,___$2,meta23429__$1,ch__$2,f__$2,map_LT___$2,meta23432));
});
}
return (new cljs.core.async.t23431(fn1,___$1,self__.meta23429,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23430){var self__ = this;
var _23430__$1 = this;return self__.meta23429;
});
cljs.core.async.t23428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23430,meta23429__$1){var self__ = this;
var _23430__$1 = this;return (new cljs.core.async.t23428(self__.ch,self__.f,self__.map_LT_,meta23429__$1));
});
cljs.core.async.__GT_t23428 = (function __GT_t23428(ch__$1,f__$1,map_LT___$1,meta23429){return (new cljs.core.async.t23428(ch__$1,f__$1,map_LT___$1,meta23429));
});
}
return (new cljs.core.async.t23428(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23437 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23437 = (function (ch,f,map_GT_,meta23438){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23438 = meta23438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23437.cljs$lang$type = true;
cljs.core.async.t23437.cljs$lang$ctorStr = "cljs.core.async/t23437";
cljs.core.async.t23437.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23437");
});
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23439){var self__ = this;
var _23439__$1 = this;return self__.meta23438;
});
cljs.core.async.t23437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23439,meta23438__$1){var self__ = this;
var _23439__$1 = this;return (new cljs.core.async.t23437(self__.ch,self__.f,self__.map_GT_,meta23438__$1));
});
cljs.core.async.__GT_t23437 = (function __GT_t23437(ch__$1,f__$1,map_GT___$1,meta23438){return (new cljs.core.async.t23437(ch__$1,f__$1,map_GT___$1,meta23438));
});
}
return (new cljs.core.async.t23437(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23443 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23443 = (function (ch,p,filter_GT_,meta23444){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23444 = meta23444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23443.cljs$lang$type = true;
cljs.core.async.t23443.cljs$lang$ctorStr = "cljs.core.async/t23443";
cljs.core.async.t23443.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23443");
});
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23445){var self__ = this;
var _23445__$1 = this;return self__.meta23444;
});
cljs.core.async.t23443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23445,meta23444__$1){var self__ = this;
var _23445__$1 = this;return (new cljs.core.async.t23443(self__.ch,self__.p,self__.filter_GT_,meta23444__$1));
});
cljs.core.async.__GT_t23443 = (function __GT_t23443(ch__$1,p__$1,filter_GT___$1,meta23444){return (new cljs.core.async.t23443(ch__$1,p__$1,filter_GT___$1,meta23444));
});
}
return (new cljs.core.async.t23443(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23507){var state_val_23508 = (state_23507[1]);if((state_val_23508 === 1))
{var state_23507__$1 = state_23507;var statearr_23509_23529 = state_23507__$1;(statearr_23509_23529[2] = null);
(statearr_23509_23529[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23508 === 2))
{var state_23507__$1 = state_23507;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23507__$1,4,ch);
} else
{if((state_val_23508 === 3))
{var inst_23505 = (state_23507[2]);var state_23507__$1 = state_23507;return cljs.core.async.impl.ioc_helpers.return_chan(state_23507__$1,inst_23505);
} else
{if((state_val_23508 === 4))
{var inst_23489 = (state_23507[7]);var inst_23489__$1 = (state_23507[2]);var inst_23490 = (inst_23489__$1 == null);var state_23507__$1 = (function (){var statearr_23510 = state_23507;(statearr_23510[7] = inst_23489__$1);
return statearr_23510;
})();if(cljs.core.truth_(inst_23490))
{var statearr_23511_23530 = state_23507__$1;(statearr_23511_23530[1] = 5);
} else
{var statearr_23512_23531 = state_23507__$1;(statearr_23512_23531[1] = 6);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_23508 === 5))
{var inst_23492 = cljs.core.async.close_BANG_(out);var state_23507__$1 = state_23507;var statearr_23513_23532 = state_23507__$1;(statearr_23513_23532[2] = inst_23492);
(statearr_23513_23532[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23508 === 6))
{var inst_23489 = (state_23507[7]);var inst_23494 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23489) : p.call(null,inst_23489));var state_23507__$1 = state_23507;if(cljs.core.truth_(inst_23494))
{var statearr_23514_23533 = state_23507__$1;(statearr_23514_23533[1] = 8);
} else
{var statearr_23515_23534 = state_23507__$1;(statearr_23515_23534[1] = 9);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_23508 === 7))
{var inst_23503 = (state_23507[2]);var state_23507__$1 = state_23507;var statearr_23516_23535 = state_23507__$1;(statearr_23516_23535[2] = inst_23503);
(statearr_23516_23535[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23508 === 8))
{var inst_23489 = (state_23507[7]);var state_23507__$1 = state_23507;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23507__$1,11,out,inst_23489);
} else
{if((state_val_23508 === 9))
{var state_23507__$1 = state_23507;var statearr_23517_23536 = state_23507__$1;(statearr_23517_23536[2] = null);
(statearr_23517_23536[1] = 10);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23508 === 10))
{var inst_23500 = (state_23507[2]);var state_23507__$1 = (function (){var statearr_23518 = state_23507;(statearr_23518[8] = inst_23500);
return statearr_23518;
})();var statearr_23519_23537 = state_23507__$1;(statearr_23519_23537[2] = null);
(statearr_23519_23537[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23508 === 11))
{var inst_23497 = (state_23507[2]);var state_23507__$1 = state_23507;var statearr_23520_23538 = state_23507__$1;(statearr_23520_23538[2] = inst_23497);
(statearr_23520_23538[1] = 10);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_23524 = [null,null,null,null,null,null,null,null,null];(statearr_23524[0] = state_machine__5507__auto__);
(statearr_23524[1] = 1);
return statearr_23524;
});
var state_machine__5507__auto____1 = (function (state_23507){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23507);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23525){if((e23525 instanceof Object))
{var ex__5510__auto__ = e23525;var statearr_23526_23539 = state_23507;(statearr_23526_23539[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23507);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e23525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__23540 = state_23507;
state_23507 = G__23540;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23507){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23527 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23528);
return statearr_23527;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23692){var state_val_23693 = (state_23692[1]);if((state_val_23693 === 1))
{var state_23692__$1 = state_23692;var statearr_23694_23731 = state_23692__$1;(statearr_23694_23731[2] = null);
(statearr_23694_23731[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 2))
{var state_23692__$1 = state_23692;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23692__$1,4,in$);
} else
{if((state_val_23693 === 3))
{var inst_23690 = (state_23692[2]);var state_23692__$1 = state_23692;return cljs.core.async.impl.ioc_helpers.return_chan(state_23692__$1,inst_23690);
} else
{if((state_val_23693 === 4))
{var inst_23638 = (state_23692[7]);var inst_23638__$1 = (state_23692[2]);var inst_23639 = (inst_23638__$1 == null);var state_23692__$1 = (function (){var statearr_23695 = state_23692;(statearr_23695[7] = inst_23638__$1);
return statearr_23695;
})();if(cljs.core.truth_(inst_23639))
{var statearr_23696_23732 = state_23692__$1;(statearr_23696_23732[1] = 5);
} else
{var statearr_23697_23733 = state_23692__$1;(statearr_23697_23733[1] = 6);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 5))
{var inst_23641 = cljs.core.async.close_BANG_(out);var state_23692__$1 = state_23692;var statearr_23698_23734 = state_23692__$1;(statearr_23698_23734[2] = inst_23641);
(statearr_23698_23734[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 6))
{var inst_23638 = (state_23692[7]);var inst_23643 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23638) : f.call(null,inst_23638));var inst_23648 = cljs.core.seq(inst_23643);var inst_23649 = inst_23648;var inst_23650 = null;var inst_23651 = 0;var inst_23652 = 0;var state_23692__$1 = (function (){var statearr_23699 = state_23692;(statearr_23699[8] = inst_23649);
(statearr_23699[9] = inst_23650);
(statearr_23699[10] = inst_23652);
(statearr_23699[11] = inst_23651);
return statearr_23699;
})();var statearr_23700_23735 = state_23692__$1;(statearr_23700_23735[2] = null);
(statearr_23700_23735[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 7))
{var inst_23688 = (state_23692[2]);var state_23692__$1 = state_23692;var statearr_23701_23736 = state_23692__$1;(statearr_23701_23736[2] = inst_23688);
(statearr_23701_23736[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 8))
{var inst_23652 = (state_23692[10]);var inst_23651 = (state_23692[11]);var inst_23654 = (inst_23652 < inst_23651);var inst_23655 = inst_23654;var state_23692__$1 = state_23692;if(cljs.core.truth_(inst_23655))
{var statearr_23702_23737 = state_23692__$1;(statearr_23702_23737[1] = 10);
} else
{var statearr_23703_23738 = state_23692__$1;(statearr_23703_23738[1] = 11);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 9))
{var inst_23685 = (state_23692[2]);var state_23692__$1 = (function (){var statearr_23704 = state_23692;(statearr_23704[12] = inst_23685);
return statearr_23704;
})();var statearr_23705_23739 = state_23692__$1;(statearr_23705_23739[2] = null);
(statearr_23705_23739[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 10))
{var inst_23650 = (state_23692[9]);var inst_23652 = (state_23692[10]);var inst_23657 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23650,inst_23652);var state_23692__$1 = state_23692;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23692__$1,13,out,inst_23657);
} else
{if((state_val_23693 === 11))
{var inst_23649 = (state_23692[8]);var inst_23663 = (state_23692[13]);var inst_23663__$1 = cljs.core.seq(inst_23649);var state_23692__$1 = (function (){var statearr_23709 = state_23692;(statearr_23709[13] = inst_23663__$1);
return statearr_23709;
})();if(inst_23663__$1)
{var statearr_23710_23740 = state_23692__$1;(statearr_23710_23740[1] = 14);
} else
{var statearr_23711_23741 = state_23692__$1;(statearr_23711_23741[1] = 15);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 12))
{var inst_23683 = (state_23692[2]);var state_23692__$1 = state_23692;var statearr_23712_23742 = state_23692__$1;(statearr_23712_23742[2] = inst_23683);
(statearr_23712_23742[1] = 9);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 13))
{var inst_23649 = (state_23692[8]);var inst_23650 = (state_23692[9]);var inst_23652 = (state_23692[10]);var inst_23651 = (state_23692[11]);var inst_23659 = (state_23692[2]);var inst_23660 = (inst_23652 + 1);var tmp23706 = inst_23649;var tmp23707 = inst_23650;var tmp23708 = inst_23651;var inst_23649__$1 = tmp23706;var inst_23650__$1 = tmp23707;var inst_23651__$1 = tmp23708;var inst_23652__$1 = inst_23660;var state_23692__$1 = (function (){var statearr_23713 = state_23692;(statearr_23713[8] = inst_23649__$1);
(statearr_23713[14] = inst_23659);
(statearr_23713[9] = inst_23650__$1);
(statearr_23713[10] = inst_23652__$1);
(statearr_23713[11] = inst_23651__$1);
return statearr_23713;
})();var statearr_23714_23743 = state_23692__$1;(statearr_23714_23743[2] = null);
(statearr_23714_23743[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 14))
{var inst_23663 = (state_23692[13]);var inst_23665 = cljs.core.chunked_seq_QMARK_(inst_23663);var state_23692__$1 = state_23692;if(inst_23665)
{var statearr_23715_23744 = state_23692__$1;(statearr_23715_23744[1] = 17);
} else
{var statearr_23716_23745 = state_23692__$1;(statearr_23716_23745[1] = 18);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 15))
{var state_23692__$1 = state_23692;var statearr_23717_23746 = state_23692__$1;(statearr_23717_23746[2] = null);
(statearr_23717_23746[1] = 16);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 16))
{var inst_23681 = (state_23692[2]);var state_23692__$1 = state_23692;var statearr_23718_23747 = state_23692__$1;(statearr_23718_23747[2] = inst_23681);
(statearr_23718_23747[1] = 12);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 17))
{var inst_23663 = (state_23692[13]);var inst_23667 = cljs.core.chunk_first(inst_23663);var inst_23668 = cljs.core.chunk_rest(inst_23663);var inst_23669 = cljs.core.count(inst_23667);var inst_23649 = inst_23668;var inst_23650 = inst_23667;var inst_23651 = inst_23669;var inst_23652 = 0;var state_23692__$1 = (function (){var statearr_23719 = state_23692;(statearr_23719[8] = inst_23649);
(statearr_23719[9] = inst_23650);
(statearr_23719[10] = inst_23652);
(statearr_23719[11] = inst_23651);
return statearr_23719;
})();var statearr_23720_23748 = state_23692__$1;(statearr_23720_23748[2] = null);
(statearr_23720_23748[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 18))
{var inst_23663 = (state_23692[13]);var inst_23672 = cljs.core.first(inst_23663);var state_23692__$1 = state_23692;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23692__$1,20,out,inst_23672);
} else
{if((state_val_23693 === 19))
{var inst_23678 = (state_23692[2]);var state_23692__$1 = state_23692;var statearr_23721_23749 = state_23692__$1;(statearr_23721_23749[2] = inst_23678);
(statearr_23721_23749[1] = 16);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23693 === 20))
{var inst_23663 = (state_23692[13]);var inst_23674 = (state_23692[2]);var inst_23675 = cljs.core.next(inst_23663);var inst_23649 = inst_23675;var inst_23650 = null;var inst_23651 = 0;var inst_23652 = 0;var state_23692__$1 = (function (){var statearr_23722 = state_23692;(statearr_23722[8] = inst_23649);
(statearr_23722[15] = inst_23674);
(statearr_23722[9] = inst_23650);
(statearr_23722[10] = inst_23652);
(statearr_23722[11] = inst_23651);
return statearr_23722;
})();var statearr_23723_23750 = state_23692__$1;(statearr_23723_23750[2] = null);
(statearr_23723_23750[1] = 8);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_23727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23727[0] = state_machine__5507__auto__);
(statearr_23727[1] = 1);
return statearr_23727;
});
var state_machine__5507__auto____1 = (function (state_23692){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23692);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23728){if((e23728 instanceof Object))
{var ex__5510__auto__ = e23728;var statearr_23729_23751 = state_23692;(statearr_23729_23751[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23692);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e23728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__23752 = state_23692;
state_23692 = G__23752;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23692){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23730 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23730;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23812){var state_val_23813 = (state_23812[1]);if((state_val_23813 === 1))
{var state_23812__$1 = state_23812;var statearr_23814_23834 = state_23812__$1;(statearr_23814_23834[2] = null);
(statearr_23814_23834[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23813 === 2))
{var state_23812__$1 = state_23812;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23812__$1,4,from);
} else
{if((state_val_23813 === 3))
{var inst_23810 = (state_23812[2]);var state_23812__$1 = state_23812;return cljs.core.async.impl.ioc_helpers.return_chan(state_23812__$1,inst_23810);
} else
{if((state_val_23813 === 4))
{var inst_23795 = (state_23812[7]);var inst_23795__$1 = (state_23812[2]);var inst_23796 = (inst_23795__$1 == null);var state_23812__$1 = (function (){var statearr_23815 = state_23812;(statearr_23815[7] = inst_23795__$1);
return statearr_23815;
})();if(cljs.core.truth_(inst_23796))
{var statearr_23816_23835 = state_23812__$1;(statearr_23816_23835[1] = 5);
} else
{var statearr_23817_23836 = state_23812__$1;(statearr_23817_23836[1] = 6);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_23813 === 5))
{var state_23812__$1 = state_23812;if(cljs.core.truth_(close_QMARK_))
{var statearr_23818_23837 = state_23812__$1;(statearr_23818_23837[1] = 8);
} else
{var statearr_23819_23838 = state_23812__$1;(statearr_23819_23838[1] = 9);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_23813 === 6))
{var inst_23795 = (state_23812[7]);var state_23812__$1 = state_23812;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23812__$1,11,to,inst_23795);
} else
{if((state_val_23813 === 7))
{var inst_23808 = (state_23812[2]);var state_23812__$1 = state_23812;var statearr_23820_23839 = state_23812__$1;(statearr_23820_23839[2] = inst_23808);
(statearr_23820_23839[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23813 === 8))
{var inst_23799 = cljs.core.async.close_BANG_(to);var state_23812__$1 = state_23812;var statearr_23821_23840 = state_23812__$1;(statearr_23821_23840[2] = inst_23799);
(statearr_23821_23840[1] = 10);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23813 === 9))
{var state_23812__$1 = state_23812;var statearr_23822_23841 = state_23812__$1;(statearr_23822_23841[2] = null);
(statearr_23822_23841[1] = 10);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23813 === 10))
{var inst_23802 = (state_23812[2]);var state_23812__$1 = state_23812;var statearr_23823_23842 = state_23812__$1;(statearr_23823_23842[2] = inst_23802);
(statearr_23823_23842[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23813 === 11))
{var inst_23805 = (state_23812[2]);var state_23812__$1 = (function (){var statearr_23824 = state_23812;(statearr_23824[8] = inst_23805);
return statearr_23824;
})();var statearr_23825_23843 = state_23812__$1;(statearr_23825_23843[2] = null);
(statearr_23825_23843[1] = 2);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_23829 = [null,null,null,null,null,null,null,null,null];(statearr_23829[0] = state_machine__5507__auto__);
(statearr_23829[1] = 1);
return statearr_23829;
});
var state_machine__5507__auto____1 = (function (state_23812){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23812);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23830){if((e23830 instanceof Object))
{var ex__5510__auto__ = e23830;var statearr_23831_23844 = state_23812;(statearr_23831_23844[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23812);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e23830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__23845 = state_23812;
state_23812 = G__23845;
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
})();var state__5523__auto__ = (function (){var statearr_23832 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23833);
return statearr_23832;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23910){var state_val_23911 = (state_23910[1]);if((state_val_23911 === 1))
{var state_23910__$1 = state_23910;var statearr_23912_23933 = state_23910__$1;(statearr_23912_23933[2] = null);
(statearr_23912_23933[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23911 === 2))
{var state_23910__$1 = state_23910;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23910__$1,4,ch);
} else
{if((state_val_23911 === 3))
{var inst_23908 = (state_23910[2]);var state_23910__$1 = state_23910;return cljs.core.async.impl.ioc_helpers.return_chan(state_23910__$1,inst_23908);
} else
{if((state_val_23911 === 4))
{var inst_23891 = (state_23910[7]);var inst_23891__$1 = (state_23910[2]);var inst_23892 = (inst_23891__$1 == null);var state_23910__$1 = (function (){var statearr_23913 = state_23910;(statearr_23913[7] = inst_23891__$1);
return statearr_23913;
})();if(cljs.core.truth_(inst_23892))
{var statearr_23914_23934 = state_23910__$1;(statearr_23914_23934[1] = 5);
} else
{var statearr_23915_23935 = state_23910__$1;(statearr_23915_23935[1] = 6);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_23911 === 5))
{var inst_23894 = cljs.core.async.close_BANG_(tc);var inst_23895 = cljs.core.async.close_BANG_(fc);var state_23910__$1 = (function (){var statearr_23916 = state_23910;(statearr_23916[8] = inst_23894);
return statearr_23916;
})();var statearr_23917_23936 = state_23910__$1;(statearr_23917_23936[2] = inst_23895);
(statearr_23917_23936[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23911 === 6))
{var inst_23891 = (state_23910[7]);var inst_23897 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23891) : p.call(null,inst_23891));var state_23910__$1 = state_23910;if(cljs.core.truth_(inst_23897))
{var statearr_23918_23937 = state_23910__$1;(statearr_23918_23937[1] = 9);
} else
{var statearr_23919_23938 = state_23910__$1;(statearr_23919_23938[1] = 10);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_23911 === 7))
{var inst_23906 = (state_23910[2]);var state_23910__$1 = state_23910;var statearr_23920_23939 = state_23910__$1;(statearr_23920_23939[2] = inst_23906);
(statearr_23920_23939[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23911 === 8))
{var inst_23903 = (state_23910[2]);var state_23910__$1 = (function (){var statearr_23921 = state_23910;(statearr_23921[9] = inst_23903);
return statearr_23921;
})();var statearr_23922_23940 = state_23910__$1;(statearr_23922_23940[2] = null);
(statearr_23922_23940[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23911 === 9))
{var state_23910__$1 = state_23910;var statearr_23923_23941 = state_23910__$1;(statearr_23923_23941[2] = tc);
(statearr_23923_23941[1] = 11);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23911 === 10))
{var state_23910__$1 = state_23910;var statearr_23924_23942 = state_23910__$1;(statearr_23924_23942[2] = fc);
(statearr_23924_23942[1] = 11);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23911 === 11))
{var inst_23891 = (state_23910[7]);var inst_23901 = (state_23910[2]);var state_23910__$1 = state_23910;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23910__$1,8,inst_23901,inst_23891);
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
var state_machine__5507__auto____0 = (function (){var statearr_23928 = [null,null,null,null,null,null,null,null,null,null];(statearr_23928[0] = state_machine__5507__auto__);
(statearr_23928[1] = 1);
return statearr_23928;
});
var state_machine__5507__auto____1 = (function (state_23910){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23910);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23929){if((e23929 instanceof Object))
{var ex__5510__auto__ = e23929;var statearr_23930_23943 = state_23910;(statearr_23930_23943[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23910);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e23929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__23944 = state_23910;
state_23910 = G__23944;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23910){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23931 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23932);
return statearr_23931;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23991){var state_val_23992 = (state_23991[1]);if((state_val_23992 === 7))
{var inst_23987 = (state_23991[2]);var state_23991__$1 = state_23991;var statearr_23993_24009 = state_23991__$1;(statearr_23993_24009[2] = inst_23987);
(statearr_23993_24009[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23992 === 6))
{var inst_23977 = (state_23991[7]);var inst_23980 = (state_23991[8]);var inst_23984 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23977,inst_23980) : f.call(null,inst_23977,inst_23980));var inst_23977__$1 = inst_23984;var state_23991__$1 = (function (){var statearr_23994 = state_23991;(statearr_23994[7] = inst_23977__$1);
return statearr_23994;
})();var statearr_23995_24010 = state_23991__$1;(statearr_23995_24010[2] = null);
(statearr_23995_24010[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23992 === 5))
{var inst_23977 = (state_23991[7]);var state_23991__$1 = state_23991;var statearr_23996_24011 = state_23991__$1;(statearr_23996_24011[2] = inst_23977);
(statearr_23996_24011[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_23992 === 4))
{var inst_23980 = (state_23991[8]);var inst_23980__$1 = (state_23991[2]);var inst_23981 = (inst_23980__$1 == null);var state_23991__$1 = (function (){var statearr_23997 = state_23991;(statearr_23997[8] = inst_23980__$1);
return statearr_23997;
})();if(cljs.core.truth_(inst_23981))
{var statearr_23998_24012 = state_23991__$1;(statearr_23998_24012[1] = 5);
} else
{var statearr_23999_24013 = state_23991__$1;(statearr_23999_24013[1] = 6);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_23992 === 3))
{var inst_23989 = (state_23991[2]);var state_23991__$1 = state_23991;return cljs.core.async.impl.ioc_helpers.return_chan(state_23991__$1,inst_23989);
} else
{if((state_val_23992 === 2))
{var state_23991__$1 = state_23991;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23991__$1,4,ch);
} else
{if((state_val_23992 === 1))
{var inst_23977 = init;var state_23991__$1 = (function (){var statearr_24000 = state_23991;(statearr_24000[7] = inst_23977);
return statearr_24000;
})();var statearr_24001_24014 = state_23991__$1;(statearr_24001_24014[2] = null);
(statearr_24001_24014[1] = 2);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_24005 = [null,null,null,null,null,null,null,null,null];(statearr_24005[0] = state_machine__5507__auto__);
(statearr_24005[1] = 1);
return statearr_24005;
});
var state_machine__5507__auto____1 = (function (state_23991){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23991);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24006){if((e24006 instanceof Object))
{var ex__5510__auto__ = e24006;var statearr_24007_24015 = state_23991;(statearr_24007_24015[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23991);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e24006;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__24016 = state_23991;
state_23991 = G__24016;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23991){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24008 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24008;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24078){var state_val_24079 = (state_24078[1]);if((state_val_24079 === 1))
{var inst_24058 = cljs.core.seq(coll);var inst_24059 = inst_24058;var state_24078__$1 = (function (){var statearr_24080 = state_24078;(statearr_24080[7] = inst_24059);
return statearr_24080;
})();var statearr_24081_24099 = state_24078__$1;(statearr_24081_24099[2] = null);
(statearr_24081_24099[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24079 === 2))
{var inst_24059 = (state_24078[7]);var state_24078__$1 = state_24078;if(cljs.core.truth_(inst_24059))
{var statearr_24082_24100 = state_24078__$1;(statearr_24082_24100[1] = 4);
} else
{var statearr_24083_24101 = state_24078__$1;(statearr_24083_24101[1] = 5);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24079 === 3))
{var inst_24076 = (state_24078[2]);var state_24078__$1 = state_24078;return cljs.core.async.impl.ioc_helpers.return_chan(state_24078__$1,inst_24076);
} else
{if((state_val_24079 === 4))
{var inst_24059 = (state_24078[7]);var inst_24062 = cljs.core.first(inst_24059);var state_24078__$1 = state_24078;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24078__$1,7,ch,inst_24062);
} else
{if((state_val_24079 === 5))
{var state_24078__$1 = state_24078;if(cljs.core.truth_(close_QMARK_))
{var statearr_24084_24102 = state_24078__$1;(statearr_24084_24102[1] = 8);
} else
{var statearr_24085_24103 = state_24078__$1;(statearr_24085_24103[1] = 9);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24079 === 6))
{var inst_24074 = (state_24078[2]);var state_24078__$1 = state_24078;var statearr_24086_24104 = state_24078__$1;(statearr_24086_24104[2] = inst_24074);
(statearr_24086_24104[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24079 === 7))
{var inst_24059 = (state_24078[7]);var inst_24064 = (state_24078[2]);var inst_24065 = cljs.core.next(inst_24059);var inst_24059__$1 = inst_24065;var state_24078__$1 = (function (){var statearr_24087 = state_24078;(statearr_24087[7] = inst_24059__$1);
(statearr_24087[8] = inst_24064);
return statearr_24087;
})();var statearr_24088_24105 = state_24078__$1;(statearr_24088_24105[2] = null);
(statearr_24088_24105[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24079 === 8))
{var inst_24069 = cljs.core.async.close_BANG_(ch);var state_24078__$1 = state_24078;var statearr_24089_24106 = state_24078__$1;(statearr_24089_24106[2] = inst_24069);
(statearr_24089_24106[1] = 10);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24079 === 9))
{var state_24078__$1 = state_24078;var statearr_24090_24107 = state_24078__$1;(statearr_24090_24107[2] = null);
(statearr_24090_24107[1] = 10);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24079 === 10))
{var inst_24072 = (state_24078[2]);var state_24078__$1 = state_24078;var statearr_24091_24108 = state_24078__$1;(statearr_24091_24108[2] = inst_24072);
(statearr_24091_24108[1] = 6);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_24095 = [null,null,null,null,null,null,null,null,null];(statearr_24095[0] = state_machine__5507__auto__);
(statearr_24095[1] = 1);
return statearr_24095;
});
var state_machine__5507__auto____1 = (function (state_24078){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24078);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24096){if((e24096 instanceof Object))
{var ex__5510__auto__ = e24096;var statearr_24097_24109 = state_24078;(statearr_24097_24109[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24078);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e24096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__24110 = state_24078;
state_24078 = G__24110;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24078){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24098 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24098;
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
cljs.core.async.Mux = (function (){var obj24112 = {};return obj24112;
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
cljs.core.async.Mult = (function (){var obj24114 = {};return obj24114;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24338 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24338 = (function (cs,ch,mult,meta24339){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24339 = meta24339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24338.cljs$lang$type = true;
cljs.core.async.t24338.cljs$lang$ctorStr = "cljs.core.async/t24338";
cljs.core.async.t24338.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24338");
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24338.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24338.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24340){var self__ = this;
var _24340__$1 = this;return self__.meta24339;
});})(cs))
;
cljs.core.async.t24338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24340,meta24339__$1){var self__ = this;
var _24340__$1 = this;return (new cljs.core.async.t24338(self__.cs,self__.ch,self__.mult,meta24339__$1));
});})(cs))
;
cljs.core.async.__GT_t24338 = ((function (cs){
return (function __GT_t24338(cs__$1,ch__$1,mult__$1,meta24339){return (new cljs.core.async.t24338(cs__$1,ch__$1,mult__$1,meta24339));
});})(cs))
;
}
return (new cljs.core.async.t24338(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24475){var state_val_24476 = (state_24475[1]);if((state_val_24476 === 32))
{var inst_24419 = (state_24475[7]);var inst_24343 = (state_24475[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24475,31,Object,null,30);var inst_24426 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24419,inst_24343,done);var state_24475__$1 = state_24475;var statearr_24477_24562 = state_24475__$1;(statearr_24477_24562[2] = inst_24426);
cljs.core.async.impl.ioc_helpers.process_exception(state_24475__$1);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 1))
{var state_24475__$1 = state_24475;var statearr_24478_24563 = state_24475__$1;(statearr_24478_24563[2] = null);
(statearr_24478_24563[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 33))
{var inst_24432 = (state_24475[9]);var inst_24434 = cljs.core.chunked_seq_QMARK_(inst_24432);var state_24475__$1 = state_24475;if(inst_24434)
{var statearr_24479_24564 = state_24475__$1;(statearr_24479_24564[1] = 36);
} else
{var statearr_24480_24565 = state_24475__$1;(statearr_24480_24565[1] = 37);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 2))
{var state_24475__$1 = state_24475;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24475__$1,4,ch);
} else
{if((state_val_24476 === 34))
{var state_24475__$1 = state_24475;var statearr_24481_24566 = state_24475__$1;(statearr_24481_24566[2] = null);
(statearr_24481_24566[1] = 35);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 3))
{var inst_24473 = (state_24475[2]);var state_24475__$1 = state_24475;return cljs.core.async.impl.ioc_helpers.return_chan(state_24475__$1,inst_24473);
} else
{if((state_val_24476 === 35))
{var inst_24457 = (state_24475[2]);var state_24475__$1 = state_24475;var statearr_24482_24567 = state_24475__$1;(statearr_24482_24567[2] = inst_24457);
(statearr_24482_24567[1] = 29);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 4))
{var inst_24343 = (state_24475[8]);var inst_24343__$1 = (state_24475[2]);var inst_24344 = (inst_24343__$1 == null);var state_24475__$1 = (function (){var statearr_24483 = state_24475;(statearr_24483[8] = inst_24343__$1);
return statearr_24483;
})();if(cljs.core.truth_(inst_24344))
{var statearr_24484_24568 = state_24475__$1;(statearr_24484_24568[1] = 5);
} else
{var statearr_24485_24569 = state_24475__$1;(statearr_24485_24569[1] = 6);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 36))
{var inst_24432 = (state_24475[9]);var inst_24436 = cljs.core.chunk_first(inst_24432);var inst_24437 = cljs.core.chunk_rest(inst_24432);var inst_24438 = cljs.core.count(inst_24436);var inst_24411 = inst_24437;var inst_24412 = inst_24436;var inst_24413 = inst_24438;var inst_24414 = 0;var state_24475__$1 = (function (){var statearr_24486 = state_24475;(statearr_24486[10] = inst_24413);
(statearr_24486[11] = inst_24412);
(statearr_24486[12] = inst_24411);
(statearr_24486[13] = inst_24414);
return statearr_24486;
})();var statearr_24487_24570 = state_24475__$1;(statearr_24487_24570[2] = null);
(statearr_24487_24570[1] = 25);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 5))
{var inst_24350 = cljs.core.deref(cs);var inst_24351 = cljs.core.seq(inst_24350);var inst_24352 = inst_24351;var inst_24353 = null;var inst_24354 = 0;var inst_24355 = 0;var state_24475__$1 = (function (){var statearr_24488 = state_24475;(statearr_24488[14] = inst_24355);
(statearr_24488[15] = inst_24353);
(statearr_24488[16] = inst_24354);
(statearr_24488[17] = inst_24352);
return statearr_24488;
})();var statearr_24489_24571 = state_24475__$1;(statearr_24489_24571[2] = null);
(statearr_24489_24571[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 37))
{var inst_24432 = (state_24475[9]);var inst_24441 = cljs.core.first(inst_24432);var state_24475__$1 = (function (){var statearr_24490 = state_24475;(statearr_24490[18] = inst_24441);
return statearr_24490;
})();var statearr_24491_24572 = state_24475__$1;(statearr_24491_24572[2] = null);
(statearr_24491_24572[1] = 41);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 6))
{var inst_24403 = (state_24475[19]);var inst_24402 = cljs.core.deref(cs);var inst_24403__$1 = cljs.core.keys(inst_24402);var inst_24404 = cljs.core.count(inst_24403__$1);var inst_24405 = cljs.core.reset_BANG_(dctr,inst_24404);var inst_24410 = cljs.core.seq(inst_24403__$1);var inst_24411 = inst_24410;var inst_24412 = null;var inst_24413 = 0;var inst_24414 = 0;var state_24475__$1 = (function (){var statearr_24492 = state_24475;(statearr_24492[10] = inst_24413);
(statearr_24492[19] = inst_24403__$1);
(statearr_24492[11] = inst_24412);
(statearr_24492[12] = inst_24411);
(statearr_24492[20] = inst_24405);
(statearr_24492[13] = inst_24414);
return statearr_24492;
})();var statearr_24493_24573 = state_24475__$1;(statearr_24493_24573[2] = null);
(statearr_24493_24573[1] = 25);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 38))
{var inst_24454 = (state_24475[2]);var state_24475__$1 = state_24475;var statearr_24494_24574 = state_24475__$1;(statearr_24494_24574[2] = inst_24454);
(statearr_24494_24574[1] = 35);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 7))
{var inst_24471 = (state_24475[2]);var state_24475__$1 = state_24475;var statearr_24495_24575 = state_24475__$1;(statearr_24495_24575[2] = inst_24471);
(statearr_24495_24575[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 39))
{var inst_24432 = (state_24475[9]);var inst_24450 = (state_24475[2]);var inst_24451 = cljs.core.next(inst_24432);var inst_24411 = inst_24451;var inst_24412 = null;var inst_24413 = 0;var inst_24414 = 0;var state_24475__$1 = (function (){var statearr_24496 = state_24475;(statearr_24496[10] = inst_24413);
(statearr_24496[11] = inst_24412);
(statearr_24496[12] = inst_24411);
(statearr_24496[21] = inst_24450);
(statearr_24496[13] = inst_24414);
return statearr_24496;
})();var statearr_24497_24576 = state_24475__$1;(statearr_24497_24576[2] = null);
(statearr_24497_24576[1] = 25);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 8))
{var inst_24355 = (state_24475[14]);var inst_24354 = (state_24475[16]);var inst_24357 = (inst_24355 < inst_24354);var inst_24358 = inst_24357;var state_24475__$1 = state_24475;if(cljs.core.truth_(inst_24358))
{var statearr_24498_24577 = state_24475__$1;(statearr_24498_24577[1] = 10);
} else
{var statearr_24499_24578 = state_24475__$1;(statearr_24499_24578[1] = 11);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 40))
{var inst_24441 = (state_24475[18]);var inst_24442 = (state_24475[2]);var inst_24443 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24444 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24441);var state_24475__$1 = (function (){var statearr_24500 = state_24475;(statearr_24500[22] = inst_24442);
(statearr_24500[23] = inst_24443);
return statearr_24500;
})();var statearr_24501_24579 = state_24475__$1;(statearr_24501_24579[2] = inst_24444);
cljs.core.async.impl.ioc_helpers.process_exception(state_24475__$1);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 9))
{var inst_24400 = (state_24475[2]);var state_24475__$1 = state_24475;var statearr_24502_24580 = state_24475__$1;(statearr_24502_24580[2] = inst_24400);
(statearr_24502_24580[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 41))
{var inst_24441 = (state_24475[18]);var inst_24343 = (state_24475[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24475,40,Object,null,39);var inst_24448 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24441,inst_24343,done);var state_24475__$1 = state_24475;var statearr_24503_24581 = state_24475__$1;(statearr_24503_24581[2] = inst_24448);
cljs.core.async.impl.ioc_helpers.process_exception(state_24475__$1);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 10))
{var inst_24355 = (state_24475[14]);var inst_24353 = (state_24475[15]);var inst_24361 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24353,inst_24355);var inst_24362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24361,0,null);var inst_24363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24361,1,null);var state_24475__$1 = (function (){var statearr_24504 = state_24475;(statearr_24504[24] = inst_24362);
return statearr_24504;
})();if(cljs.core.truth_(inst_24363))
{var statearr_24505_24582 = state_24475__$1;(statearr_24505_24582[1] = 13);
} else
{var statearr_24506_24583 = state_24475__$1;(statearr_24506_24583[1] = 14);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 42))
{var state_24475__$1 = state_24475;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24475__$1,45,dchan);
} else
{if((state_val_24476 === 11))
{var inst_24372 = (state_24475[25]);var inst_24352 = (state_24475[17]);var inst_24372__$1 = cljs.core.seq(inst_24352);var state_24475__$1 = (function (){var statearr_24507 = state_24475;(statearr_24507[25] = inst_24372__$1);
return statearr_24507;
})();if(inst_24372__$1)
{var statearr_24508_24584 = state_24475__$1;(statearr_24508_24584[1] = 16);
} else
{var statearr_24509_24585 = state_24475__$1;(statearr_24509_24585[1] = 17);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 43))
{var state_24475__$1 = state_24475;var statearr_24510_24586 = state_24475__$1;(statearr_24510_24586[2] = null);
(statearr_24510_24586[1] = 44);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 12))
{var inst_24398 = (state_24475[2]);var state_24475__$1 = state_24475;var statearr_24511_24587 = state_24475__$1;(statearr_24511_24587[2] = inst_24398);
(statearr_24511_24587[1] = 9);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 44))
{var inst_24468 = (state_24475[2]);var state_24475__$1 = (function (){var statearr_24512 = state_24475;(statearr_24512[26] = inst_24468);
return statearr_24512;
})();var statearr_24513_24588 = state_24475__$1;(statearr_24513_24588[2] = null);
(statearr_24513_24588[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 13))
{var inst_24362 = (state_24475[24]);var inst_24365 = cljs.core.async.close_BANG_(inst_24362);var state_24475__$1 = state_24475;var statearr_24514_24589 = state_24475__$1;(statearr_24514_24589[2] = inst_24365);
(statearr_24514_24589[1] = 15);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 45))
{var inst_24465 = (state_24475[2]);var state_24475__$1 = state_24475;var statearr_24518_24590 = state_24475__$1;(statearr_24518_24590[2] = inst_24465);
(statearr_24518_24590[1] = 44);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 14))
{var state_24475__$1 = state_24475;var statearr_24519_24591 = state_24475__$1;(statearr_24519_24591[2] = null);
(statearr_24519_24591[1] = 15);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 15))
{var inst_24355 = (state_24475[14]);var inst_24353 = (state_24475[15]);var inst_24354 = (state_24475[16]);var inst_24352 = (state_24475[17]);var inst_24368 = (state_24475[2]);var inst_24369 = (inst_24355 + 1);var tmp24515 = inst_24353;var tmp24516 = inst_24354;var tmp24517 = inst_24352;var inst_24352__$1 = tmp24517;var inst_24353__$1 = tmp24515;var inst_24354__$1 = tmp24516;var inst_24355__$1 = inst_24369;var state_24475__$1 = (function (){var statearr_24520 = state_24475;(statearr_24520[27] = inst_24368);
(statearr_24520[14] = inst_24355__$1);
(statearr_24520[15] = inst_24353__$1);
(statearr_24520[16] = inst_24354__$1);
(statearr_24520[17] = inst_24352__$1);
return statearr_24520;
})();var statearr_24521_24592 = state_24475__$1;(statearr_24521_24592[2] = null);
(statearr_24521_24592[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 16))
{var inst_24372 = (state_24475[25]);var inst_24374 = cljs.core.chunked_seq_QMARK_(inst_24372);var state_24475__$1 = state_24475;if(inst_24374)
{var statearr_24522_24593 = state_24475__$1;(statearr_24522_24593[1] = 19);
} else
{var statearr_24523_24594 = state_24475__$1;(statearr_24523_24594[1] = 20);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 17))
{var state_24475__$1 = state_24475;var statearr_24524_24595 = state_24475__$1;(statearr_24524_24595[2] = null);
(statearr_24524_24595[1] = 18);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 18))
{var inst_24396 = (state_24475[2]);var state_24475__$1 = state_24475;var statearr_24525_24596 = state_24475__$1;(statearr_24525_24596[2] = inst_24396);
(statearr_24525_24596[1] = 12);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 19))
{var inst_24372 = (state_24475[25]);var inst_24376 = cljs.core.chunk_first(inst_24372);var inst_24377 = cljs.core.chunk_rest(inst_24372);var inst_24378 = cljs.core.count(inst_24376);var inst_24352 = inst_24377;var inst_24353 = inst_24376;var inst_24354 = inst_24378;var inst_24355 = 0;var state_24475__$1 = (function (){var statearr_24526 = state_24475;(statearr_24526[14] = inst_24355);
(statearr_24526[15] = inst_24353);
(statearr_24526[16] = inst_24354);
(statearr_24526[17] = inst_24352);
return statearr_24526;
})();var statearr_24527_24597 = state_24475__$1;(statearr_24527_24597[2] = null);
(statearr_24527_24597[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 20))
{var inst_24372 = (state_24475[25]);var inst_24382 = cljs.core.first(inst_24372);var inst_24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24382,0,null);var inst_24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24382,1,null);var state_24475__$1 = (function (){var statearr_24528 = state_24475;(statearr_24528[28] = inst_24383);
return statearr_24528;
})();if(cljs.core.truth_(inst_24384))
{var statearr_24529_24598 = state_24475__$1;(statearr_24529_24598[1] = 22);
} else
{var statearr_24530_24599 = state_24475__$1;(statearr_24530_24599[1] = 23);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 21))
{var inst_24393 = (state_24475[2]);var state_24475__$1 = state_24475;var statearr_24531_24600 = state_24475__$1;(statearr_24531_24600[2] = inst_24393);
(statearr_24531_24600[1] = 18);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 22))
{var inst_24383 = (state_24475[28]);var inst_24386 = cljs.core.async.close_BANG_(inst_24383);var state_24475__$1 = state_24475;var statearr_24532_24601 = state_24475__$1;(statearr_24532_24601[2] = inst_24386);
(statearr_24532_24601[1] = 24);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 23))
{var state_24475__$1 = state_24475;var statearr_24533_24602 = state_24475__$1;(statearr_24533_24602[2] = null);
(statearr_24533_24602[1] = 24);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 24))
{var inst_24372 = (state_24475[25]);var inst_24389 = (state_24475[2]);var inst_24390 = cljs.core.next(inst_24372);var inst_24352 = inst_24390;var inst_24353 = null;var inst_24354 = 0;var inst_24355 = 0;var state_24475__$1 = (function (){var statearr_24534 = state_24475;(statearr_24534[14] = inst_24355);
(statearr_24534[15] = inst_24353);
(statearr_24534[16] = inst_24354);
(statearr_24534[17] = inst_24352);
(statearr_24534[29] = inst_24389);
return statearr_24534;
})();var statearr_24535_24603 = state_24475__$1;(statearr_24535_24603[2] = null);
(statearr_24535_24603[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 25))
{var inst_24413 = (state_24475[10]);var inst_24414 = (state_24475[13]);var inst_24416 = (inst_24414 < inst_24413);var inst_24417 = inst_24416;var state_24475__$1 = state_24475;if(cljs.core.truth_(inst_24417))
{var statearr_24536_24604 = state_24475__$1;(statearr_24536_24604[1] = 27);
} else
{var statearr_24537_24605 = state_24475__$1;(statearr_24537_24605[1] = 28);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 26))
{var inst_24403 = (state_24475[19]);var inst_24461 = (state_24475[2]);var inst_24462 = cljs.core.seq(inst_24403);var state_24475__$1 = (function (){var statearr_24538 = state_24475;(statearr_24538[30] = inst_24461);
return statearr_24538;
})();if(inst_24462)
{var statearr_24539_24606 = state_24475__$1;(statearr_24539_24606[1] = 42);
} else
{var statearr_24540_24607 = state_24475__$1;(statearr_24540_24607[1] = 43);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 27))
{var inst_24412 = (state_24475[11]);var inst_24414 = (state_24475[13]);var inst_24419 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24412,inst_24414);var state_24475__$1 = (function (){var statearr_24541 = state_24475;(statearr_24541[7] = inst_24419);
return statearr_24541;
})();var statearr_24542_24608 = state_24475__$1;(statearr_24542_24608[2] = null);
(statearr_24542_24608[1] = 32);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 28))
{var inst_24411 = (state_24475[12]);var inst_24432 = (state_24475[9]);var inst_24432__$1 = cljs.core.seq(inst_24411);var state_24475__$1 = (function (){var statearr_24546 = state_24475;(statearr_24546[9] = inst_24432__$1);
return statearr_24546;
})();if(inst_24432__$1)
{var statearr_24547_24609 = state_24475__$1;(statearr_24547_24609[1] = 33);
} else
{var statearr_24548_24610 = state_24475__$1;(statearr_24548_24610[1] = 34);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 29))
{var inst_24459 = (state_24475[2]);var state_24475__$1 = state_24475;var statearr_24549_24611 = state_24475__$1;(statearr_24549_24611[2] = inst_24459);
(statearr_24549_24611[1] = 26);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 30))
{var inst_24413 = (state_24475[10]);var inst_24412 = (state_24475[11]);var inst_24411 = (state_24475[12]);var inst_24414 = (state_24475[13]);var inst_24428 = (state_24475[2]);var inst_24429 = (inst_24414 + 1);var tmp24543 = inst_24413;var tmp24544 = inst_24412;var tmp24545 = inst_24411;var inst_24411__$1 = tmp24545;var inst_24412__$1 = tmp24544;var inst_24413__$1 = tmp24543;var inst_24414__$1 = inst_24429;var state_24475__$1 = (function (){var statearr_24550 = state_24475;(statearr_24550[10] = inst_24413__$1);
(statearr_24550[11] = inst_24412__$1);
(statearr_24550[12] = inst_24411__$1);
(statearr_24550[31] = inst_24428);
(statearr_24550[13] = inst_24414__$1);
return statearr_24550;
})();var statearr_24551_24612 = state_24475__$1;(statearr_24551_24612[2] = null);
(statearr_24551_24612[1] = 25);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24476 === 31))
{var inst_24419 = (state_24475[7]);var inst_24420 = (state_24475[2]);var inst_24421 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24422 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24419);var state_24475__$1 = (function (){var statearr_24552 = state_24475;(statearr_24552[32] = inst_24420);
(statearr_24552[33] = inst_24421);
return statearr_24552;
})();var statearr_24553_24613 = state_24475__$1;(statearr_24553_24613[2] = inst_24422);
cljs.core.async.impl.ioc_helpers.process_exception(state_24475__$1);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_24557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24557[0] = state_machine__5507__auto__);
(statearr_24557[1] = 1);
return statearr_24557;
});
var state_machine__5507__auto____1 = (function (state_24475){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24475);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24558){if((e24558 instanceof Object))
{var ex__5510__auto__ = e24558;var statearr_24559_24614 = state_24475;(statearr_24559_24614[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24475);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e24558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__24615 = state_24475;
state_24475 = G__24615;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24475){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24560 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24561);
return statearr_24560;
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
cljs.core.async.Mix = (function (){var obj24617 = {};return obj24617;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,null,cljs.core.constant$keyword$229,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$230);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$229);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$230,chs);var pauses = pick(cljs.core.constant$keyword$228,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$231,solos,cljs.core.constant$keyword$232,pick(cljs.core.constant$keyword$229,chs),cljs.core.constant$keyword$233,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$228)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24727 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24728){
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
this.meta24728 = meta24728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24727.cljs$lang$type = true;
cljs.core.async.t24727.cljs$lang$ctorStr = "cljs.core.async/t24727";
cljs.core.async.t24727.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24727");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24727.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24729){var self__ = this;
var _24729__$1 = this;return self__.meta24728;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24729,meta24728__$1){var self__ = this;
var _24729__$1 = this;return (new cljs.core.async.t24727(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24728__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24727 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24727(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24728){return (new cljs.core.async.t24727(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24728));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24727(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24794){var state_val_24795 = (state_24794[1]);if((state_val_24795 === 1))
{var inst_24733 = (state_24794[7]);var inst_24733__$1 = calc_state();var inst_24734 = cljs.core.seq_QMARK_(inst_24733__$1);var state_24794__$1 = (function (){var statearr_24796 = state_24794;(statearr_24796[7] = inst_24733__$1);
return statearr_24796;
})();if(inst_24734)
{var statearr_24797_24837 = state_24794__$1;(statearr_24797_24837[1] = 2);
} else
{var statearr_24798_24838 = state_24794__$1;(statearr_24798_24838[1] = 3);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 2))
{var inst_24733 = (state_24794[7]);var inst_24736 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24733);var state_24794__$1 = state_24794;var statearr_24799_24839 = state_24794__$1;(statearr_24799_24839[2] = inst_24736);
(statearr_24799_24839[1] = 4);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 3))
{var inst_24733 = (state_24794[7]);var state_24794__$1 = state_24794;var statearr_24800_24840 = state_24794__$1;(statearr_24800_24840[2] = inst_24733);
(statearr_24800_24840[1] = 4);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 4))
{var inst_24733 = (state_24794[7]);var inst_24739 = (state_24794[2]);var inst_24740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24739,cljs.core.constant$keyword$233);var inst_24741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24739,cljs.core.constant$keyword$232);var inst_24742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24739,cljs.core.constant$keyword$231);var inst_24743 = inst_24733;var state_24794__$1 = (function (){var statearr_24801 = state_24794;(statearr_24801[8] = inst_24743);
(statearr_24801[9] = inst_24742);
(statearr_24801[10] = inst_24741);
(statearr_24801[11] = inst_24740);
return statearr_24801;
})();var statearr_24802_24841 = state_24794__$1;(statearr_24802_24841[2] = null);
(statearr_24802_24841[1] = 5);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 5))
{var inst_24743 = (state_24794[8]);var inst_24746 = cljs.core.seq_QMARK_(inst_24743);var state_24794__$1 = state_24794;if(inst_24746)
{var statearr_24803_24842 = state_24794__$1;(statearr_24803_24842[1] = 7);
} else
{var statearr_24804_24843 = state_24794__$1;(statearr_24804_24843[1] = 8);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 6))
{var inst_24792 = (state_24794[2]);var state_24794__$1 = state_24794;return cljs.core.async.impl.ioc_helpers.return_chan(state_24794__$1,inst_24792);
} else
{if((state_val_24795 === 7))
{var inst_24743 = (state_24794[8]);var inst_24748 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24743);var state_24794__$1 = state_24794;var statearr_24805_24844 = state_24794__$1;(statearr_24805_24844[2] = inst_24748);
(statearr_24805_24844[1] = 9);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 8))
{var inst_24743 = (state_24794[8]);var state_24794__$1 = state_24794;var statearr_24806_24845 = state_24794__$1;(statearr_24806_24845[2] = inst_24743);
(statearr_24806_24845[1] = 9);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 9))
{var inst_24751 = (state_24794[12]);var inst_24751__$1 = (state_24794[2]);var inst_24752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24751__$1,cljs.core.constant$keyword$233);var inst_24753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24751__$1,cljs.core.constant$keyword$232);var inst_24754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24751__$1,cljs.core.constant$keyword$231);var state_24794__$1 = (function (){var statearr_24807 = state_24794;(statearr_24807[13] = inst_24754);
(statearr_24807[14] = inst_24753);
(statearr_24807[12] = inst_24751__$1);
return statearr_24807;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24794__$1,10,inst_24752);
} else
{if((state_val_24795 === 10))
{var inst_24758 = (state_24794[15]);var inst_24759 = (state_24794[16]);var inst_24757 = (state_24794[2]);var inst_24758__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24757,0,null);var inst_24759__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24757,1,null);var inst_24760 = (inst_24758__$1 == null);var inst_24761 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24759__$1,change);var inst_24762 = (inst_24760) || (inst_24761);var state_24794__$1 = (function (){var statearr_24808 = state_24794;(statearr_24808[15] = inst_24758__$1);
(statearr_24808[16] = inst_24759__$1);
return statearr_24808;
})();if(cljs.core.truth_(inst_24762))
{var statearr_24809_24846 = state_24794__$1;(statearr_24809_24846[1] = 11);
} else
{var statearr_24810_24847 = state_24794__$1;(statearr_24810_24847[1] = 12);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 11))
{var inst_24758 = (state_24794[15]);var inst_24764 = (inst_24758 == null);var state_24794__$1 = state_24794;if(cljs.core.truth_(inst_24764))
{var statearr_24811_24848 = state_24794__$1;(statearr_24811_24848[1] = 14);
} else
{var statearr_24812_24849 = state_24794__$1;(statearr_24812_24849[1] = 15);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 12))
{var inst_24773 = (state_24794[17]);var inst_24759 = (state_24794[16]);var inst_24754 = (state_24794[13]);var inst_24773__$1 = (inst_24754.cljs$core$IFn$_invoke$arity$1 ? inst_24754.cljs$core$IFn$_invoke$arity$1(inst_24759) : inst_24754.call(null,inst_24759));var state_24794__$1 = (function (){var statearr_24813 = state_24794;(statearr_24813[17] = inst_24773__$1);
return statearr_24813;
})();if(cljs.core.truth_(inst_24773__$1))
{var statearr_24814_24850 = state_24794__$1;(statearr_24814_24850[1] = 17);
} else
{var statearr_24815_24851 = state_24794__$1;(statearr_24815_24851[1] = 18);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 13))
{var inst_24790 = (state_24794[2]);var state_24794__$1 = state_24794;var statearr_24816_24852 = state_24794__$1;(statearr_24816_24852[2] = inst_24790);
(statearr_24816_24852[1] = 6);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 14))
{var inst_24759 = (state_24794[16]);var inst_24766 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24759);var state_24794__$1 = state_24794;var statearr_24817_24853 = state_24794__$1;(statearr_24817_24853[2] = inst_24766);
(statearr_24817_24853[1] = 16);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 15))
{var state_24794__$1 = state_24794;var statearr_24818_24854 = state_24794__$1;(statearr_24818_24854[2] = null);
(statearr_24818_24854[1] = 16);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 16))
{var inst_24769 = (state_24794[2]);var inst_24770 = calc_state();var inst_24743 = inst_24770;var state_24794__$1 = (function (){var statearr_24819 = state_24794;(statearr_24819[18] = inst_24769);
(statearr_24819[8] = inst_24743);
return statearr_24819;
})();var statearr_24820_24855 = state_24794__$1;(statearr_24820_24855[2] = null);
(statearr_24820_24855[1] = 5);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 17))
{var inst_24773 = (state_24794[17]);var state_24794__$1 = state_24794;var statearr_24821_24856 = state_24794__$1;(statearr_24821_24856[2] = inst_24773);
(statearr_24821_24856[1] = 19);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 18))
{var inst_24759 = (state_24794[16]);var inst_24754 = (state_24794[13]);var inst_24753 = (state_24794[14]);var inst_24776 = cljs.core.empty_QMARK_(inst_24754);var inst_24777 = (inst_24753.cljs$core$IFn$_invoke$arity$1 ? inst_24753.cljs$core$IFn$_invoke$arity$1(inst_24759) : inst_24753.call(null,inst_24759));var inst_24778 = cljs.core.not(inst_24777);var inst_24779 = (inst_24776) && (inst_24778);var state_24794__$1 = state_24794;var statearr_24822_24857 = state_24794__$1;(statearr_24822_24857[2] = inst_24779);
(statearr_24822_24857[1] = 19);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 19))
{var inst_24781 = (state_24794[2]);var state_24794__$1 = state_24794;if(cljs.core.truth_(inst_24781))
{var statearr_24823_24858 = state_24794__$1;(statearr_24823_24858[1] = 20);
} else
{var statearr_24824_24859 = state_24794__$1;(statearr_24824_24859[1] = 21);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 20))
{var inst_24758 = (state_24794[15]);var state_24794__$1 = state_24794;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24794__$1,23,out,inst_24758);
} else
{if((state_val_24795 === 21))
{var state_24794__$1 = state_24794;var statearr_24825_24860 = state_24794__$1;(statearr_24825_24860[2] = null);
(statearr_24825_24860[1] = 22);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 22))
{var inst_24751 = (state_24794[12]);var inst_24787 = (state_24794[2]);var inst_24743 = inst_24751;var state_24794__$1 = (function (){var statearr_24826 = state_24794;(statearr_24826[19] = inst_24787);
(statearr_24826[8] = inst_24743);
return statearr_24826;
})();var statearr_24827_24861 = state_24794__$1;(statearr_24827_24861[2] = null);
(statearr_24827_24861[1] = 5);
return cljs.core.constant$keyword$221;
} else
{if((state_val_24795 === 23))
{var inst_24784 = (state_24794[2]);var state_24794__$1 = state_24794;var statearr_24828_24862 = state_24794__$1;(statearr_24828_24862[2] = inst_24784);
(statearr_24828_24862[1] = 22);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_24832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24832[0] = state_machine__5507__auto__);
(statearr_24832[1] = 1);
return statearr_24832;
});
var state_machine__5507__auto____1 = (function (state_24794){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24794);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24833){if((e24833 instanceof Object))
{var ex__5510__auto__ = e24833;var statearr_24834_24863 = state_24794;(statearr_24834_24863[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24794);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e24833;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__24864 = state_24794;
state_24794 = G__24864;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24794){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24835 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24836);
return statearr_24835;
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
cljs.core.async.Pub = (function (){var obj24866 = {};return obj24866;
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
return (function (p1__24867_SHARP_){if(cljs.core.truth_((p1__24867_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24867_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24867_SHARP_.call(null,topic))))
{return p1__24867_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24867_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24992 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24992 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24993){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24993 = meta24993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24992.cljs$lang$type = true;
cljs.core.async.t24992.cljs$lang$ctorStr = "cljs.core.async/t24992";
cljs.core.async.t24992.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24992");
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24992.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24992.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24994){var self__ = this;
var _24994__$1 = this;return self__.meta24993;
});})(mults,ensure_mult))
;
cljs.core.async.t24992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24994,meta24993__$1){var self__ = this;
var _24994__$1 = this;return (new cljs.core.async.t24992(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24993__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24992 = ((function (mults,ensure_mult){
return (function __GT_t24992(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24993){return (new cljs.core.async.t24992(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24993));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24992(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25068){var state_val_25069 = (state_25068[1]);if((state_val_25069 === 1))
{var state_25068__$1 = state_25068;var statearr_25070_25117 = state_25068__$1;(statearr_25070_25117[2] = null);
(statearr_25070_25117[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 2))
{var state_25068__$1 = state_25068;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25068__$1,4,ch);
} else
{if((state_val_25069 === 3))
{var inst_25066 = (state_25068[2]);var state_25068__$1 = state_25068;return cljs.core.async.impl.ioc_helpers.return_chan(state_25068__$1,inst_25066);
} else
{if((state_val_25069 === 4))
{var inst_24997 = (state_25068[7]);var inst_24997__$1 = (state_25068[2]);var inst_24998 = (inst_24997__$1 == null);var state_25068__$1 = (function (){var statearr_25071 = state_25068;(statearr_25071[7] = inst_24997__$1);
return statearr_25071;
})();if(cljs.core.truth_(inst_24998))
{var statearr_25072_25118 = state_25068__$1;(statearr_25072_25118[1] = 5);
} else
{var statearr_25073_25119 = state_25068__$1;(statearr_25073_25119[1] = 6);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 5))
{var inst_25004 = cljs.core.deref(mults);var inst_25005 = cljs.core.vals(inst_25004);var inst_25006 = cljs.core.seq(inst_25005);var inst_25007 = inst_25006;var inst_25008 = null;var inst_25009 = 0;var inst_25010 = 0;var state_25068__$1 = (function (){var statearr_25074 = state_25068;(statearr_25074[8] = inst_25010);
(statearr_25074[9] = inst_25008);
(statearr_25074[10] = inst_25009);
(statearr_25074[11] = inst_25007);
return statearr_25074;
})();var statearr_25075_25120 = state_25068__$1;(statearr_25075_25120[2] = null);
(statearr_25075_25120[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 6))
{var inst_24997 = (state_25068[7]);var inst_25047 = (state_25068[12]);var inst_25045 = (state_25068[13]);var inst_25045__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24997) : topic_fn.call(null,inst_24997));var inst_25046 = cljs.core.deref(mults);var inst_25047__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25046,inst_25045__$1);var state_25068__$1 = (function (){var statearr_25076 = state_25068;(statearr_25076[12] = inst_25047__$1);
(statearr_25076[13] = inst_25045__$1);
return statearr_25076;
})();if(cljs.core.truth_(inst_25047__$1))
{var statearr_25077_25121 = state_25068__$1;(statearr_25077_25121[1] = 19);
} else
{var statearr_25078_25122 = state_25068__$1;(statearr_25078_25122[1] = 20);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 7))
{var inst_25064 = (state_25068[2]);var state_25068__$1 = state_25068;var statearr_25079_25123 = state_25068__$1;(statearr_25079_25123[2] = inst_25064);
(statearr_25079_25123[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 8))
{var inst_25010 = (state_25068[8]);var inst_25009 = (state_25068[10]);var inst_25012 = (inst_25010 < inst_25009);var inst_25013 = inst_25012;var state_25068__$1 = state_25068;if(cljs.core.truth_(inst_25013))
{var statearr_25083_25124 = state_25068__$1;(statearr_25083_25124[1] = 10);
} else
{var statearr_25084_25125 = state_25068__$1;(statearr_25084_25125[1] = 11);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 9))
{var inst_25043 = (state_25068[2]);var state_25068__$1 = state_25068;var statearr_25085_25126 = state_25068__$1;(statearr_25085_25126[2] = inst_25043);
(statearr_25085_25126[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 10))
{var inst_25010 = (state_25068[8]);var inst_25008 = (state_25068[9]);var inst_25009 = (state_25068[10]);var inst_25007 = (state_25068[11]);var inst_25015 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25008,inst_25010);var inst_25016 = cljs.core.async.muxch_STAR_(inst_25015);var inst_25017 = cljs.core.async.close_BANG_(inst_25016);var inst_25018 = (inst_25010 + 1);var tmp25080 = inst_25008;var tmp25081 = inst_25009;var tmp25082 = inst_25007;var inst_25007__$1 = tmp25082;var inst_25008__$1 = tmp25080;var inst_25009__$1 = tmp25081;var inst_25010__$1 = inst_25018;var state_25068__$1 = (function (){var statearr_25086 = state_25068;(statearr_25086[8] = inst_25010__$1);
(statearr_25086[9] = inst_25008__$1);
(statearr_25086[14] = inst_25017);
(statearr_25086[10] = inst_25009__$1);
(statearr_25086[11] = inst_25007__$1);
return statearr_25086;
})();var statearr_25087_25127 = state_25068__$1;(statearr_25087_25127[2] = null);
(statearr_25087_25127[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 11))
{var inst_25021 = (state_25068[15]);var inst_25007 = (state_25068[11]);var inst_25021__$1 = cljs.core.seq(inst_25007);var state_25068__$1 = (function (){var statearr_25088 = state_25068;(statearr_25088[15] = inst_25021__$1);
return statearr_25088;
})();if(inst_25021__$1)
{var statearr_25089_25128 = state_25068__$1;(statearr_25089_25128[1] = 13);
} else
{var statearr_25090_25129 = state_25068__$1;(statearr_25090_25129[1] = 14);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 12))
{var inst_25041 = (state_25068[2]);var state_25068__$1 = state_25068;var statearr_25091_25130 = state_25068__$1;(statearr_25091_25130[2] = inst_25041);
(statearr_25091_25130[1] = 9);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 13))
{var inst_25021 = (state_25068[15]);var inst_25023 = cljs.core.chunked_seq_QMARK_(inst_25021);var state_25068__$1 = state_25068;if(inst_25023)
{var statearr_25092_25131 = state_25068__$1;(statearr_25092_25131[1] = 16);
} else
{var statearr_25093_25132 = state_25068__$1;(statearr_25093_25132[1] = 17);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 14))
{var state_25068__$1 = state_25068;var statearr_25094_25133 = state_25068__$1;(statearr_25094_25133[2] = null);
(statearr_25094_25133[1] = 15);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 15))
{var inst_25039 = (state_25068[2]);var state_25068__$1 = state_25068;var statearr_25095_25134 = state_25068__$1;(statearr_25095_25134[2] = inst_25039);
(statearr_25095_25134[1] = 12);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 16))
{var inst_25021 = (state_25068[15]);var inst_25025 = cljs.core.chunk_first(inst_25021);var inst_25026 = cljs.core.chunk_rest(inst_25021);var inst_25027 = cljs.core.count(inst_25025);var inst_25007 = inst_25026;var inst_25008 = inst_25025;var inst_25009 = inst_25027;var inst_25010 = 0;var state_25068__$1 = (function (){var statearr_25096 = state_25068;(statearr_25096[8] = inst_25010);
(statearr_25096[9] = inst_25008);
(statearr_25096[10] = inst_25009);
(statearr_25096[11] = inst_25007);
return statearr_25096;
})();var statearr_25097_25135 = state_25068__$1;(statearr_25097_25135[2] = null);
(statearr_25097_25135[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 17))
{var inst_25021 = (state_25068[15]);var inst_25030 = cljs.core.first(inst_25021);var inst_25031 = cljs.core.async.muxch_STAR_(inst_25030);var inst_25032 = cljs.core.async.close_BANG_(inst_25031);var inst_25033 = cljs.core.next(inst_25021);var inst_25007 = inst_25033;var inst_25008 = null;var inst_25009 = 0;var inst_25010 = 0;var state_25068__$1 = (function (){var statearr_25098 = state_25068;(statearr_25098[8] = inst_25010);
(statearr_25098[9] = inst_25008);
(statearr_25098[10] = inst_25009);
(statearr_25098[11] = inst_25007);
(statearr_25098[16] = inst_25032);
return statearr_25098;
})();var statearr_25099_25136 = state_25068__$1;(statearr_25099_25136[2] = null);
(statearr_25099_25136[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 18))
{var inst_25036 = (state_25068[2]);var state_25068__$1 = state_25068;var statearr_25100_25137 = state_25068__$1;(statearr_25100_25137[2] = inst_25036);
(statearr_25100_25137[1] = 15);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 19))
{var state_25068__$1 = state_25068;var statearr_25101_25138 = state_25068__$1;(statearr_25101_25138[2] = null);
(statearr_25101_25138[1] = 24);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 20))
{var state_25068__$1 = state_25068;var statearr_25102_25139 = state_25068__$1;(statearr_25102_25139[2] = null);
(statearr_25102_25139[1] = 21);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 21))
{var inst_25061 = (state_25068[2]);var state_25068__$1 = (function (){var statearr_25103 = state_25068;(statearr_25103[17] = inst_25061);
return statearr_25103;
})();var statearr_25104_25140 = state_25068__$1;(statearr_25104_25140[2] = null);
(statearr_25104_25140[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 22))
{var inst_25058 = (state_25068[2]);var state_25068__$1 = state_25068;var statearr_25105_25141 = state_25068__$1;(statearr_25105_25141[2] = inst_25058);
(statearr_25105_25141[1] = 21);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 23))
{var inst_25045 = (state_25068[13]);var inst_25049 = (state_25068[2]);var inst_25050 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25045);var state_25068__$1 = (function (){var statearr_25106 = state_25068;(statearr_25106[18] = inst_25049);
return statearr_25106;
})();var statearr_25107_25142 = state_25068__$1;(statearr_25107_25142[2] = inst_25050);
cljs.core.async.impl.ioc_helpers.process_exception(state_25068__$1);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25069 === 24))
{var inst_24997 = (state_25068[7]);var inst_25047 = (state_25068[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25068,23,Object,null,22);var inst_25054 = cljs.core.async.muxch_STAR_(inst_25047);var state_25068__$1 = state_25068;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25068__$1,25,inst_25054,inst_24997);
} else
{if((state_val_25069 === 25))
{var inst_25056 = (state_25068[2]);var state_25068__$1 = state_25068;var statearr_25108_25143 = state_25068__$1;(statearr_25108_25143[2] = inst_25056);
cljs.core.async.impl.ioc_helpers.process_exception(state_25068__$1);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_25112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25112[0] = state_machine__5507__auto__);
(statearr_25112[1] = 1);
return statearr_25112;
});
var state_machine__5507__auto____1 = (function (state_25068){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25068);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25113){if((e25113 instanceof Object))
{var ex__5510__auto__ = e25113;var statearr_25114_25144 = state_25068;(statearr_25114_25144[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25068);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e25113;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__25145 = state_25068;
state_25068 = G__25145;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25068){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25115 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25116);
return statearr_25115;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25252){var state_val_25253 = (state_25252[1]);if((state_val_25253 === 1))
{var state_25252__$1 = state_25252;var statearr_25254_25283 = state_25252__$1;(statearr_25254_25283[2] = null);
(statearr_25254_25283[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 2))
{var inst_25215 = cljs.core.reset_BANG_(dctr,cnt);var inst_25216 = 0;var state_25252__$1 = (function (){var statearr_25255 = state_25252;(statearr_25255[7] = inst_25216);
(statearr_25255[8] = inst_25215);
return statearr_25255;
})();var statearr_25256_25284 = state_25252__$1;(statearr_25256_25284[2] = null);
(statearr_25256_25284[1] = 4);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 3))
{var inst_25250 = (state_25252[2]);var state_25252__$1 = state_25252;return cljs.core.async.impl.ioc_helpers.return_chan(state_25252__$1,inst_25250);
} else
{if((state_val_25253 === 4))
{var inst_25216 = (state_25252[7]);var inst_25218 = (inst_25216 < cnt);var state_25252__$1 = state_25252;if(cljs.core.truth_(inst_25218))
{var statearr_25257_25285 = state_25252__$1;(statearr_25257_25285[1] = 6);
} else
{var statearr_25258_25286 = state_25252__$1;(statearr_25258_25286[1] = 7);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 5))
{var inst_25236 = (state_25252[2]);var state_25252__$1 = (function (){var statearr_25259 = state_25252;(statearr_25259[9] = inst_25236);
return statearr_25259;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25252__$1,12,dchan);
} else
{if((state_val_25253 === 6))
{var state_25252__$1 = state_25252;var statearr_25260_25287 = state_25252__$1;(statearr_25260_25287[2] = null);
(statearr_25260_25287[1] = 11);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 7))
{var state_25252__$1 = state_25252;var statearr_25261_25288 = state_25252__$1;(statearr_25261_25288[2] = null);
(statearr_25261_25288[1] = 8);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 8))
{var inst_25234 = (state_25252[2]);var state_25252__$1 = state_25252;var statearr_25262_25289 = state_25252__$1;(statearr_25262_25289[2] = inst_25234);
(statearr_25262_25289[1] = 5);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 9))
{var inst_25216 = (state_25252[7]);var inst_25229 = (state_25252[2]);var inst_25230 = (inst_25216 + 1);var inst_25216__$1 = inst_25230;var state_25252__$1 = (function (){var statearr_25263 = state_25252;(statearr_25263[7] = inst_25216__$1);
(statearr_25263[10] = inst_25229);
return statearr_25263;
})();var statearr_25264_25290 = state_25252__$1;(statearr_25264_25290[2] = null);
(statearr_25264_25290[1] = 4);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 10))
{var inst_25220 = (state_25252[2]);var inst_25221 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25252__$1 = (function (){var statearr_25265 = state_25252;(statearr_25265[11] = inst_25220);
return statearr_25265;
})();var statearr_25266_25291 = state_25252__$1;(statearr_25266_25291[2] = inst_25221);
cljs.core.async.impl.ioc_helpers.process_exception(state_25252__$1);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 11))
{var inst_25216 = (state_25252[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25252,10,Object,null,9);var inst_25225 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25216) : chs__$1.call(null,inst_25216));var inst_25226 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25216) : done.call(null,inst_25216));var inst_25227 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25225,inst_25226);var state_25252__$1 = state_25252;var statearr_25267_25292 = state_25252__$1;(statearr_25267_25292[2] = inst_25227);
cljs.core.async.impl.ioc_helpers.process_exception(state_25252__$1);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 12))
{var inst_25238 = (state_25252[12]);var inst_25238__$1 = (state_25252[2]);var inst_25239 = cljs.core.some(cljs.core.nil_QMARK_,inst_25238__$1);var state_25252__$1 = (function (){var statearr_25268 = state_25252;(statearr_25268[12] = inst_25238__$1);
return statearr_25268;
})();if(cljs.core.truth_(inst_25239))
{var statearr_25269_25293 = state_25252__$1;(statearr_25269_25293[1] = 13);
} else
{var statearr_25270_25294 = state_25252__$1;(statearr_25270_25294[1] = 14);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 13))
{var inst_25241 = cljs.core.async.close_BANG_(out);var state_25252__$1 = state_25252;var statearr_25271_25295 = state_25252__$1;(statearr_25271_25295[2] = inst_25241);
(statearr_25271_25295[1] = 15);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 14))
{var inst_25238 = (state_25252[12]);var inst_25243 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25238);var state_25252__$1 = state_25252;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25252__$1,16,out,inst_25243);
} else
{if((state_val_25253 === 15))
{var inst_25248 = (state_25252[2]);var state_25252__$1 = state_25252;var statearr_25272_25296 = state_25252__$1;(statearr_25272_25296[2] = inst_25248);
(statearr_25272_25296[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25253 === 16))
{var inst_25245 = (state_25252[2]);var state_25252__$1 = (function (){var statearr_25273 = state_25252;(statearr_25273[13] = inst_25245);
return statearr_25273;
})();var statearr_25274_25297 = state_25252__$1;(statearr_25274_25297[2] = null);
(statearr_25274_25297[1] = 2);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_25278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25278[0] = state_machine__5507__auto__);
(statearr_25278[1] = 1);
return statearr_25278;
});
var state_machine__5507__auto____1 = (function (state_25252){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25252);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25279){if((e25279 instanceof Object))
{var ex__5510__auto__ = e25279;var statearr_25280_25298 = state_25252;(statearr_25280_25298[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25252);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e25279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__25299 = state_25252;
state_25252 = G__25299;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25252){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25281 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25282);
return statearr_25281;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25383){var state_val_25384 = (state_25383[1]);if((state_val_25384 === 1))
{var inst_25354 = cljs.core.vec(chs);var inst_25355 = inst_25354;var state_25383__$1 = (function (){var statearr_25385 = state_25383;(statearr_25385[7] = inst_25355);
return statearr_25385;
})();var statearr_25386_25408 = state_25383__$1;(statearr_25386_25408[2] = null);
(statearr_25386_25408[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25384 === 2))
{var inst_25355 = (state_25383[7]);var inst_25357 = cljs.core.count(inst_25355);var inst_25358 = (inst_25357 > 0);var state_25383__$1 = state_25383;if(cljs.core.truth_(inst_25358))
{var statearr_25387_25409 = state_25383__$1;(statearr_25387_25409[1] = 4);
} else
{var statearr_25388_25410 = state_25383__$1;(statearr_25388_25410[1] = 5);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25384 === 3))
{var inst_25381 = (state_25383[2]);var state_25383__$1 = state_25383;return cljs.core.async.impl.ioc_helpers.return_chan(state_25383__$1,inst_25381);
} else
{if((state_val_25384 === 4))
{var inst_25355 = (state_25383[7]);var state_25383__$1 = state_25383;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25383__$1,7,inst_25355);
} else
{if((state_val_25384 === 5))
{var inst_25377 = cljs.core.async.close_BANG_(out);var state_25383__$1 = state_25383;var statearr_25389_25411 = state_25383__$1;(statearr_25389_25411[2] = inst_25377);
(statearr_25389_25411[1] = 6);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25384 === 6))
{var inst_25379 = (state_25383[2]);var state_25383__$1 = state_25383;var statearr_25390_25412 = state_25383__$1;(statearr_25390_25412[2] = inst_25379);
(statearr_25390_25412[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25384 === 7))
{var inst_25363 = (state_25383[8]);var inst_25362 = (state_25383[9]);var inst_25362__$1 = (state_25383[2]);var inst_25363__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25362__$1,0,null);var inst_25364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25362__$1,1,null);var inst_25365 = (inst_25363__$1 == null);var state_25383__$1 = (function (){var statearr_25391 = state_25383;(statearr_25391[8] = inst_25363__$1);
(statearr_25391[10] = inst_25364);
(statearr_25391[9] = inst_25362__$1);
return statearr_25391;
})();if(cljs.core.truth_(inst_25365))
{var statearr_25392_25413 = state_25383__$1;(statearr_25392_25413[1] = 8);
} else
{var statearr_25393_25414 = state_25383__$1;(statearr_25393_25414[1] = 9);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25384 === 8))
{var inst_25355 = (state_25383[7]);var inst_25363 = (state_25383[8]);var inst_25364 = (state_25383[10]);var inst_25362 = (state_25383[9]);var inst_25367 = (function (){var c = inst_25364;var v = inst_25363;var vec__25360 = inst_25362;var cs = inst_25355;return ((function (c,v,vec__25360,cs,inst_25355,inst_25363,inst_25364,inst_25362,state_val_25384){
return (function (p1__25300_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25300_SHARP_);
});
;})(c,v,vec__25360,cs,inst_25355,inst_25363,inst_25364,inst_25362,state_val_25384))
})();var inst_25368 = cljs.core.filterv(inst_25367,inst_25355);var inst_25355__$1 = inst_25368;var state_25383__$1 = (function (){var statearr_25394 = state_25383;(statearr_25394[7] = inst_25355__$1);
return statearr_25394;
})();var statearr_25395_25415 = state_25383__$1;(statearr_25395_25415[2] = null);
(statearr_25395_25415[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25384 === 9))
{var inst_25363 = (state_25383[8]);var state_25383__$1 = state_25383;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25383__$1,11,out,inst_25363);
} else
{if((state_val_25384 === 10))
{var inst_25375 = (state_25383[2]);var state_25383__$1 = state_25383;var statearr_25397_25416 = state_25383__$1;(statearr_25397_25416[2] = inst_25375);
(statearr_25397_25416[1] = 6);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25384 === 11))
{var inst_25355 = (state_25383[7]);var inst_25372 = (state_25383[2]);var tmp25396 = inst_25355;var inst_25355__$1 = tmp25396;var state_25383__$1 = (function (){var statearr_25398 = state_25383;(statearr_25398[11] = inst_25372);
(statearr_25398[7] = inst_25355__$1);
return statearr_25398;
})();var statearr_25399_25417 = state_25383__$1;(statearr_25399_25417[2] = null);
(statearr_25399_25417[1] = 2);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_25403 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25403[0] = state_machine__5507__auto__);
(statearr_25403[1] = 1);
return statearr_25403;
});
var state_machine__5507__auto____1 = (function (state_25383){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25383);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25404){if((e25404 instanceof Object))
{var ex__5510__auto__ = e25404;var statearr_25405_25418 = state_25383;(statearr_25405_25418[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25383);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e25404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__25419 = state_25383;
state_25383 = G__25419;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25383){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25406 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25407);
return statearr_25406;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25489){var state_val_25490 = (state_25489[1]);if((state_val_25490 === 1))
{var inst_25466 = 0;var state_25489__$1 = (function (){var statearr_25491 = state_25489;(statearr_25491[7] = inst_25466);
return statearr_25491;
})();var statearr_25492_25513 = state_25489__$1;(statearr_25492_25513[2] = null);
(statearr_25492_25513[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25490 === 2))
{var inst_25466 = (state_25489[7]);var inst_25468 = (inst_25466 < n);var state_25489__$1 = state_25489;if(cljs.core.truth_(inst_25468))
{var statearr_25493_25514 = state_25489__$1;(statearr_25493_25514[1] = 4);
} else
{var statearr_25494_25515 = state_25489__$1;(statearr_25494_25515[1] = 5);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25490 === 3))
{var inst_25486 = (state_25489[2]);var inst_25487 = cljs.core.async.close_BANG_(out);var state_25489__$1 = (function (){var statearr_25495 = state_25489;(statearr_25495[8] = inst_25486);
return statearr_25495;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25489__$1,inst_25487);
} else
{if((state_val_25490 === 4))
{var state_25489__$1 = state_25489;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25489__$1,7,ch);
} else
{if((state_val_25490 === 5))
{var state_25489__$1 = state_25489;var statearr_25496_25516 = state_25489__$1;(statearr_25496_25516[2] = null);
(statearr_25496_25516[1] = 6);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25490 === 6))
{var inst_25484 = (state_25489[2]);var state_25489__$1 = state_25489;var statearr_25497_25517 = state_25489__$1;(statearr_25497_25517[2] = inst_25484);
(statearr_25497_25517[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25490 === 7))
{var inst_25471 = (state_25489[9]);var inst_25471__$1 = (state_25489[2]);var inst_25472 = (inst_25471__$1 == null);var inst_25473 = cljs.core.not(inst_25472);var state_25489__$1 = (function (){var statearr_25498 = state_25489;(statearr_25498[9] = inst_25471__$1);
return statearr_25498;
})();if(inst_25473)
{var statearr_25499_25518 = state_25489__$1;(statearr_25499_25518[1] = 8);
} else
{var statearr_25500_25519 = state_25489__$1;(statearr_25500_25519[1] = 9);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25490 === 8))
{var inst_25471 = (state_25489[9]);var state_25489__$1 = state_25489;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25489__$1,11,out,inst_25471);
} else
{if((state_val_25490 === 9))
{var state_25489__$1 = state_25489;var statearr_25501_25520 = state_25489__$1;(statearr_25501_25520[2] = null);
(statearr_25501_25520[1] = 10);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25490 === 10))
{var inst_25481 = (state_25489[2]);var state_25489__$1 = state_25489;var statearr_25502_25521 = state_25489__$1;(statearr_25502_25521[2] = inst_25481);
(statearr_25502_25521[1] = 6);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25490 === 11))
{var inst_25466 = (state_25489[7]);var inst_25476 = (state_25489[2]);var inst_25477 = (inst_25466 + 1);var inst_25466__$1 = inst_25477;var state_25489__$1 = (function (){var statearr_25503 = state_25489;(statearr_25503[7] = inst_25466__$1);
(statearr_25503[10] = inst_25476);
return statearr_25503;
})();var statearr_25504_25522 = state_25489__$1;(statearr_25504_25522[2] = null);
(statearr_25504_25522[1] = 2);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_25508 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25508[0] = state_machine__5507__auto__);
(statearr_25508[1] = 1);
return statearr_25508;
});
var state_machine__5507__auto____1 = (function (state_25489){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25489);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25509){if((e25509 instanceof Object))
{var ex__5510__auto__ = e25509;var statearr_25510_25523 = state_25489;(statearr_25510_25523[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25489);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e25509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__25524 = state_25489;
state_25489 = G__25524;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25489){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25511 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25512);
return statearr_25511;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25596){var state_val_25597 = (state_25596[1]);if((state_val_25597 === 1))
{var inst_25573 = null;var state_25596__$1 = (function (){var statearr_25598 = state_25596;(statearr_25598[7] = inst_25573);
return statearr_25598;
})();var statearr_25599_25622 = state_25596__$1;(statearr_25599_25622[2] = null);
(statearr_25599_25622[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25597 === 2))
{var state_25596__$1 = state_25596;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25596__$1,4,ch);
} else
{if((state_val_25597 === 3))
{var inst_25593 = (state_25596[2]);var inst_25594 = cljs.core.async.close_BANG_(out);var state_25596__$1 = (function (){var statearr_25600 = state_25596;(statearr_25600[8] = inst_25593);
return statearr_25600;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25596__$1,inst_25594);
} else
{if((state_val_25597 === 4))
{var inst_25576 = (state_25596[9]);var inst_25576__$1 = (state_25596[2]);var inst_25577 = (inst_25576__$1 == null);var inst_25578 = cljs.core.not(inst_25577);var state_25596__$1 = (function (){var statearr_25601 = state_25596;(statearr_25601[9] = inst_25576__$1);
return statearr_25601;
})();if(inst_25578)
{var statearr_25602_25623 = state_25596__$1;(statearr_25602_25623[1] = 5);
} else
{var statearr_25603_25624 = state_25596__$1;(statearr_25603_25624[1] = 6);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25597 === 5))
{var inst_25573 = (state_25596[7]);var inst_25576 = (state_25596[9]);var inst_25580 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25576,inst_25573);var state_25596__$1 = state_25596;if(inst_25580)
{var statearr_25604_25625 = state_25596__$1;(statearr_25604_25625[1] = 8);
} else
{var statearr_25605_25626 = state_25596__$1;(statearr_25605_25626[1] = 9);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25597 === 6))
{var state_25596__$1 = state_25596;var statearr_25607_25627 = state_25596__$1;(statearr_25607_25627[2] = null);
(statearr_25607_25627[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25597 === 7))
{var inst_25591 = (state_25596[2]);var state_25596__$1 = state_25596;var statearr_25608_25628 = state_25596__$1;(statearr_25608_25628[2] = inst_25591);
(statearr_25608_25628[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25597 === 8))
{var inst_25573 = (state_25596[7]);var tmp25606 = inst_25573;var inst_25573__$1 = tmp25606;var state_25596__$1 = (function (){var statearr_25609 = state_25596;(statearr_25609[7] = inst_25573__$1);
return statearr_25609;
})();var statearr_25610_25629 = state_25596__$1;(statearr_25610_25629[2] = null);
(statearr_25610_25629[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25597 === 9))
{var inst_25576 = (state_25596[9]);var state_25596__$1 = state_25596;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25596__$1,11,out,inst_25576);
} else
{if((state_val_25597 === 10))
{var inst_25588 = (state_25596[2]);var state_25596__$1 = state_25596;var statearr_25611_25630 = state_25596__$1;(statearr_25611_25630[2] = inst_25588);
(statearr_25611_25630[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25597 === 11))
{var inst_25576 = (state_25596[9]);var inst_25585 = (state_25596[2]);var inst_25573 = inst_25576;var state_25596__$1 = (function (){var statearr_25612 = state_25596;(statearr_25612[7] = inst_25573);
(statearr_25612[10] = inst_25585);
return statearr_25612;
})();var statearr_25613_25631 = state_25596__$1;(statearr_25613_25631[2] = null);
(statearr_25613_25631[1] = 2);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_25617 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25617[0] = state_machine__5507__auto__);
(statearr_25617[1] = 1);
return statearr_25617;
});
var state_machine__5507__auto____1 = (function (state_25596){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25596);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25618){if((e25618 instanceof Object))
{var ex__5510__auto__ = e25618;var statearr_25619_25632 = state_25596;(statearr_25619_25632[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25596);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e25618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__25633 = state_25596;
state_25596 = G__25633;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25596){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25620 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25621);
return statearr_25620;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25738){var state_val_25739 = (state_25738[1]);if((state_val_25739 === 1))
{var inst_25701 = (new Array(n));var inst_25702 = inst_25701;var inst_25703 = 0;var state_25738__$1 = (function (){var statearr_25740 = state_25738;(statearr_25740[7] = inst_25702);
(statearr_25740[8] = inst_25703);
return statearr_25740;
})();var statearr_25741_25769 = state_25738__$1;(statearr_25741_25769[2] = null);
(statearr_25741_25769[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25739 === 2))
{var state_25738__$1 = state_25738;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25738__$1,4,ch);
} else
{if((state_val_25739 === 3))
{var inst_25736 = (state_25738[2]);var state_25738__$1 = state_25738;return cljs.core.async.impl.ioc_helpers.return_chan(state_25738__$1,inst_25736);
} else
{if((state_val_25739 === 4))
{var inst_25706 = (state_25738[9]);var inst_25706__$1 = (state_25738[2]);var inst_25707 = (inst_25706__$1 == null);var inst_25708 = cljs.core.not(inst_25707);var state_25738__$1 = (function (){var statearr_25742 = state_25738;(statearr_25742[9] = inst_25706__$1);
return statearr_25742;
})();if(inst_25708)
{var statearr_25743_25770 = state_25738__$1;(statearr_25743_25770[1] = 5);
} else
{var statearr_25744_25771 = state_25738__$1;(statearr_25744_25771[1] = 6);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25739 === 5))
{var inst_25706 = (state_25738[9]);var inst_25711 = (state_25738[10]);var inst_25702 = (state_25738[7]);var inst_25703 = (state_25738[8]);var inst_25710 = (inst_25702[inst_25703] = inst_25706);var inst_25711__$1 = (inst_25703 + 1);var inst_25712 = (inst_25711__$1 < n);var state_25738__$1 = (function (){var statearr_25745 = state_25738;(statearr_25745[10] = inst_25711__$1);
(statearr_25745[11] = inst_25710);
return statearr_25745;
})();if(cljs.core.truth_(inst_25712))
{var statearr_25746_25772 = state_25738__$1;(statearr_25746_25772[1] = 8);
} else
{var statearr_25747_25773 = state_25738__$1;(statearr_25747_25773[1] = 9);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25739 === 6))
{var inst_25703 = (state_25738[8]);var inst_25724 = (inst_25703 > 0);var state_25738__$1 = state_25738;if(cljs.core.truth_(inst_25724))
{var statearr_25749_25774 = state_25738__$1;(statearr_25749_25774[1] = 12);
} else
{var statearr_25750_25775 = state_25738__$1;(statearr_25750_25775[1] = 13);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25739 === 7))
{var inst_25734 = (state_25738[2]);var state_25738__$1 = state_25738;var statearr_25751_25776 = state_25738__$1;(statearr_25751_25776[2] = inst_25734);
(statearr_25751_25776[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25739 === 8))
{var inst_25711 = (state_25738[10]);var inst_25702 = (state_25738[7]);var tmp25748 = inst_25702;var inst_25702__$1 = tmp25748;var inst_25703 = inst_25711;var state_25738__$1 = (function (){var statearr_25752 = state_25738;(statearr_25752[7] = inst_25702__$1);
(statearr_25752[8] = inst_25703);
return statearr_25752;
})();var statearr_25753_25777 = state_25738__$1;(statearr_25753_25777[2] = null);
(statearr_25753_25777[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25739 === 9))
{var inst_25702 = (state_25738[7]);var inst_25716 = cljs.core.vec(inst_25702);var state_25738__$1 = state_25738;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25738__$1,11,out,inst_25716);
} else
{if((state_val_25739 === 10))
{var inst_25722 = (state_25738[2]);var state_25738__$1 = state_25738;var statearr_25754_25778 = state_25738__$1;(statearr_25754_25778[2] = inst_25722);
(statearr_25754_25778[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25739 === 11))
{var inst_25718 = (state_25738[2]);var inst_25719 = (new Array(n));var inst_25702 = inst_25719;var inst_25703 = 0;var state_25738__$1 = (function (){var statearr_25755 = state_25738;(statearr_25755[12] = inst_25718);
(statearr_25755[7] = inst_25702);
(statearr_25755[8] = inst_25703);
return statearr_25755;
})();var statearr_25756_25779 = state_25738__$1;(statearr_25756_25779[2] = null);
(statearr_25756_25779[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25739 === 12))
{var inst_25702 = (state_25738[7]);var inst_25726 = cljs.core.vec(inst_25702);var state_25738__$1 = state_25738;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25738__$1,15,out,inst_25726);
} else
{if((state_val_25739 === 13))
{var state_25738__$1 = state_25738;var statearr_25757_25780 = state_25738__$1;(statearr_25757_25780[2] = null);
(statearr_25757_25780[1] = 14);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25739 === 14))
{var inst_25731 = (state_25738[2]);var inst_25732 = cljs.core.async.close_BANG_(out);var state_25738__$1 = (function (){var statearr_25758 = state_25738;(statearr_25758[13] = inst_25731);
return statearr_25758;
})();var statearr_25759_25781 = state_25738__$1;(statearr_25759_25781[2] = inst_25732);
(statearr_25759_25781[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25739 === 15))
{var inst_25728 = (state_25738[2]);var state_25738__$1 = state_25738;var statearr_25760_25782 = state_25738__$1;(statearr_25760_25782[2] = inst_25728);
(statearr_25760_25782[1] = 14);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_25764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25764[0] = state_machine__5507__auto__);
(statearr_25764[1] = 1);
return statearr_25764;
});
var state_machine__5507__auto____1 = (function (state_25738){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25738);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25765){if((e25765 instanceof Object))
{var ex__5510__auto__ = e25765;var statearr_25766_25783 = state_25738;(statearr_25766_25783[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25738);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e25765;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__25784 = state_25738;
state_25738 = G__25784;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25738){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25767 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25768);
return statearr_25767;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25897){var state_val_25898 = (state_25897[1]);if((state_val_25898 === 1))
{var inst_25856 = [];var inst_25857 = inst_25856;var inst_25858 = cljs.core.constant$keyword$234;var state_25897__$1 = (function (){var statearr_25899 = state_25897;(statearr_25899[7] = inst_25857);
(statearr_25899[8] = inst_25858);
return statearr_25899;
})();var statearr_25900_25928 = state_25897__$1;(statearr_25900_25928[2] = null);
(statearr_25900_25928[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25898 === 2))
{var state_25897__$1 = state_25897;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25897__$1,4,ch);
} else
{if((state_val_25898 === 3))
{var inst_25895 = (state_25897[2]);var state_25897__$1 = state_25897;return cljs.core.async.impl.ioc_helpers.return_chan(state_25897__$1,inst_25895);
} else
{if((state_val_25898 === 4))
{var inst_25861 = (state_25897[9]);var inst_25861__$1 = (state_25897[2]);var inst_25862 = (inst_25861__$1 == null);var inst_25863 = cljs.core.not(inst_25862);var state_25897__$1 = (function (){var statearr_25901 = state_25897;(statearr_25901[9] = inst_25861__$1);
return statearr_25901;
})();if(inst_25863)
{var statearr_25902_25929 = state_25897__$1;(statearr_25902_25929[1] = 5);
} else
{var statearr_25903_25930 = state_25897__$1;(statearr_25903_25930[1] = 6);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25898 === 5))
{var inst_25865 = (state_25897[10]);var inst_25858 = (state_25897[8]);var inst_25861 = (state_25897[9]);var inst_25865__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25861) : f.call(null,inst_25861));var inst_25866 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25865__$1,inst_25858);var inst_25867 = cljs.core.keyword_identical_QMARK_(inst_25858,cljs.core.constant$keyword$234);var inst_25868 = (inst_25866) || (inst_25867);var state_25897__$1 = (function (){var statearr_25904 = state_25897;(statearr_25904[10] = inst_25865__$1);
return statearr_25904;
})();if(cljs.core.truth_(inst_25868))
{var statearr_25905_25931 = state_25897__$1;(statearr_25905_25931[1] = 8);
} else
{var statearr_25906_25932 = state_25897__$1;(statearr_25906_25932[1] = 9);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25898 === 6))
{var inst_25857 = (state_25897[7]);var inst_25882 = inst_25857.length;var inst_25883 = (inst_25882 > 0);var state_25897__$1 = state_25897;if(cljs.core.truth_(inst_25883))
{var statearr_25908_25933 = state_25897__$1;(statearr_25908_25933[1] = 12);
} else
{var statearr_25909_25934 = state_25897__$1;(statearr_25909_25934[1] = 13);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_25898 === 7))
{var inst_25893 = (state_25897[2]);var state_25897__$1 = state_25897;var statearr_25910_25935 = state_25897__$1;(statearr_25910_25935[2] = inst_25893);
(statearr_25910_25935[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25898 === 8))
{var inst_25865 = (state_25897[10]);var inst_25857 = (state_25897[7]);var inst_25861 = (state_25897[9]);var inst_25870 = inst_25857.push(inst_25861);var tmp25907 = inst_25857;var inst_25857__$1 = tmp25907;var inst_25858 = inst_25865;var state_25897__$1 = (function (){var statearr_25911 = state_25897;(statearr_25911[7] = inst_25857__$1);
(statearr_25911[8] = inst_25858);
(statearr_25911[11] = inst_25870);
return statearr_25911;
})();var statearr_25912_25936 = state_25897__$1;(statearr_25912_25936[2] = null);
(statearr_25912_25936[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25898 === 9))
{var inst_25857 = (state_25897[7]);var inst_25873 = cljs.core.vec(inst_25857);var state_25897__$1 = state_25897;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25897__$1,11,out,inst_25873);
} else
{if((state_val_25898 === 10))
{var inst_25880 = (state_25897[2]);var state_25897__$1 = state_25897;var statearr_25913_25937 = state_25897__$1;(statearr_25913_25937[2] = inst_25880);
(statearr_25913_25937[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25898 === 11))
{var inst_25865 = (state_25897[10]);var inst_25861 = (state_25897[9]);var inst_25875 = (state_25897[2]);var inst_25876 = [];var inst_25877 = inst_25876.push(inst_25861);var inst_25857 = inst_25876;var inst_25858 = inst_25865;var state_25897__$1 = (function (){var statearr_25914 = state_25897;(statearr_25914[7] = inst_25857);
(statearr_25914[8] = inst_25858);
(statearr_25914[12] = inst_25877);
(statearr_25914[13] = inst_25875);
return statearr_25914;
})();var statearr_25915_25938 = state_25897__$1;(statearr_25915_25938[2] = null);
(statearr_25915_25938[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25898 === 12))
{var inst_25857 = (state_25897[7]);var inst_25885 = cljs.core.vec(inst_25857);var state_25897__$1 = state_25897;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25897__$1,15,out,inst_25885);
} else
{if((state_val_25898 === 13))
{var state_25897__$1 = state_25897;var statearr_25916_25939 = state_25897__$1;(statearr_25916_25939[2] = null);
(statearr_25916_25939[1] = 14);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25898 === 14))
{var inst_25890 = (state_25897[2]);var inst_25891 = cljs.core.async.close_BANG_(out);var state_25897__$1 = (function (){var statearr_25917 = state_25897;(statearr_25917[14] = inst_25890);
return statearr_25917;
})();var statearr_25918_25940 = state_25897__$1;(statearr_25918_25940[2] = inst_25891);
(statearr_25918_25940[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_25898 === 15))
{var inst_25887 = (state_25897[2]);var state_25897__$1 = state_25897;var statearr_25919_25941 = state_25897__$1;(statearr_25919_25941[2] = inst_25887);
(statearr_25919_25941[1] = 14);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_25923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25923[0] = state_machine__5507__auto__);
(statearr_25923[1] = 1);
return statearr_25923;
});
var state_machine__5507__auto____1 = (function (state_25897){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25897);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25924){if((e25924 instanceof Object))
{var ex__5510__auto__ = e25924;var statearr_25925_25942 = state_25897;(statearr_25925_25942[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25897);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e25924;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__25943 = state_25897;
state_25897 = G__25943;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25897){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25926 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25927);
return statearr_25926;
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
