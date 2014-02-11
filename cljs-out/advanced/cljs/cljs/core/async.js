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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23365 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23365 = (function (f,fn_handler,meta23366){
this.f = f;
this.fn_handler = fn_handler;
this.meta23366 = meta23366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23365.cljs$lang$type = true;
cljs.core.async.t23365.cljs$lang$ctorStr = "cljs.core.async/t23365";
cljs.core.async.t23365.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23365");
});
cljs.core.async.t23365.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23367){var self__ = this;
var _23367__$1 = this;return self__.meta23366;
});
cljs.core.async.t23365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23367,meta23366__$1){var self__ = this;
var _23367__$1 = this;return (new cljs.core.async.t23365(self__.f,self__.fn_handler,meta23366__$1));
});
cljs.core.async.__GT_t23365 = (function __GT_t23365(f__$1,fn_handler__$1,meta23366){return (new cljs.core.async.t23365(f__$1,fn_handler__$1,meta23366));
});
}
return (new cljs.core.async.t23365(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23369 = buff;if(G__23369)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23369.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23369.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23369);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23369);
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
{var val_23370 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23370) : fn1.call(null,val_23370));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23370) : fn1.call(null,val_23370));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23371 = n;var x_23372 = 0;while(true){
if((x_23372 < n__4248__auto___23371))
{(a[x_23372] = 0);
{
var G__23373 = (x_23372 + 1);
x_23372 = G__23373;
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
var G__23374 = (i + 1);
i = G__23374;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23378 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23378 = (function (flag,alt_flag,meta23379){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23379 = meta23379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23378.cljs$lang$type = true;
cljs.core.async.t23378.cljs$lang$ctorStr = "cljs.core.async/t23378";
cljs.core.async.t23378.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23378");
});
cljs.core.async.t23378.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23380){var self__ = this;
var _23380__$1 = this;return self__.meta23379;
});
cljs.core.async.t23378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23380,meta23379__$1){var self__ = this;
var _23380__$1 = this;return (new cljs.core.async.t23378(self__.flag,self__.alt_flag,meta23379__$1));
});
cljs.core.async.__GT_t23378 = (function __GT_t23378(flag__$1,alt_flag__$1,meta23379){return (new cljs.core.async.t23378(flag__$1,alt_flag__$1,meta23379));
});
}
return (new cljs.core.async.t23378(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23384 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23384 = (function (cb,flag,alt_handler,meta23385){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23385 = meta23385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23384.cljs$lang$type = true;
cljs.core.async.t23384.cljs$lang$ctorStr = "cljs.core.async/t23384";
cljs.core.async.t23384.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23384");
});
cljs.core.async.t23384.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23386){var self__ = this;
var _23386__$1 = this;return self__.meta23385;
});
cljs.core.async.t23384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23386,meta23385__$1){var self__ = this;
var _23386__$1 = this;return (new cljs.core.async.t23384(self__.cb,self__.flag,self__.alt_handler,meta23385__$1));
});
cljs.core.async.__GT_t23384 = (function __GT_t23384(cb__$1,flag__$1,alt_handler__$1,meta23385){return (new cljs.core.async.t23384(cb__$1,flag__$1,alt_handler__$1,meta23385));
});
}
return (new cljs.core.async.t23384(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23387_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23387_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23387_SHARP_,port], null)));
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
var G__23388 = (i + 1);
i = G__23388;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$206))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$206], null));
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
var alts_BANG___delegate = function (ports,p__23389){var map__23391 = p__23389;var map__23391__$1 = ((cljs.core.seq_QMARK_(map__23391))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23391):map__23391);var opts = map__23391__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23389 = null;if (arguments.length > 1) {
  p__23389 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23389);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23392){
var ports = cljs.core.first(arglist__23392);
var p__23389 = cljs.core.rest(arglist__23392);
return alts_BANG___delegate(ports,p__23389);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23400 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23400 = (function (ch,f,map_LT_,meta23401){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23401 = meta23401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23400.cljs$lang$type = true;
cljs.core.async.t23400.cljs$lang$ctorStr = "cljs.core.async/t23400";
cljs.core.async.t23400.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23400");
});
cljs.core.async.t23400.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23400.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23403 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23403 = (function (fn1,_,meta23401,ch,f,map_LT_,meta23404){
this.fn1 = fn1;
this._ = _;
this.meta23401 = meta23401;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23404 = meta23404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23403.cljs$lang$type = true;
cljs.core.async.t23403.cljs$lang$ctorStr = "cljs.core.async/t23403";
cljs.core.async.t23403.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23403");
});
cljs.core.async.t23403.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23403.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23393_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23393_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23393_SHARP_) : self__.f.call(null,p1__23393_SHARP_)))) : f1.call(null,(((p1__23393_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23393_SHARP_) : self__.f.call(null,p1__23393_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23405){var self__ = this;
var _23405__$1 = this;return self__.meta23404;
});
cljs.core.async.t23403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23405,meta23404__$1){var self__ = this;
var _23405__$1 = this;return (new cljs.core.async.t23403(self__.fn1,self__._,self__.meta23401,self__.ch,self__.f,self__.map_LT_,meta23404__$1));
});
cljs.core.async.__GT_t23403 = (function __GT_t23403(fn1__$1,___$2,meta23401__$1,ch__$2,f__$2,map_LT___$2,meta23404){return (new cljs.core.async.t23403(fn1__$1,___$2,meta23401__$1,ch__$2,f__$2,map_LT___$2,meta23404));
});
}
return (new cljs.core.async.t23403(fn1,___$1,self__.meta23401,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23400.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23402){var self__ = this;
var _23402__$1 = this;return self__.meta23401;
});
cljs.core.async.t23400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23402,meta23401__$1){var self__ = this;
var _23402__$1 = this;return (new cljs.core.async.t23400(self__.ch,self__.f,self__.map_LT_,meta23401__$1));
});
cljs.core.async.__GT_t23400 = (function __GT_t23400(ch__$1,f__$1,map_LT___$1,meta23401){return (new cljs.core.async.t23400(ch__$1,f__$1,map_LT___$1,meta23401));
});
}
return (new cljs.core.async.t23400(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23409 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23409 = (function (ch,f,map_GT_,meta23410){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23410 = meta23410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23409.cljs$lang$type = true;
cljs.core.async.t23409.cljs$lang$ctorStr = "cljs.core.async/t23409";
cljs.core.async.t23409.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23409");
});
cljs.core.async.t23409.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23409.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23409.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23409.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23409.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23409.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23411){var self__ = this;
var _23411__$1 = this;return self__.meta23410;
});
cljs.core.async.t23409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23411,meta23410__$1){var self__ = this;
var _23411__$1 = this;return (new cljs.core.async.t23409(self__.ch,self__.f,self__.map_GT_,meta23410__$1));
});
cljs.core.async.__GT_t23409 = (function __GT_t23409(ch__$1,f__$1,map_GT___$1,meta23410){return (new cljs.core.async.t23409(ch__$1,f__$1,map_GT___$1,meta23410));
});
}
return (new cljs.core.async.t23409(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23415 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23415 = (function (ch,p,filter_GT_,meta23416){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23416 = meta23416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23415.cljs$lang$type = true;
cljs.core.async.t23415.cljs$lang$ctorStr = "cljs.core.async/t23415";
cljs.core.async.t23415.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23415");
});
cljs.core.async.t23415.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23415.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23415.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23415.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23415.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23415.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23417){var self__ = this;
var _23417__$1 = this;return self__.meta23416;
});
cljs.core.async.t23415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23417,meta23416__$1){var self__ = this;
var _23417__$1 = this;return (new cljs.core.async.t23415(self__.ch,self__.p,self__.filter_GT_,meta23416__$1));
});
cljs.core.async.__GT_t23415 = (function __GT_t23415(ch__$1,p__$1,filter_GT___$1,meta23416){return (new cljs.core.async.t23415(ch__$1,p__$1,filter_GT___$1,meta23416));
});
}
return (new cljs.core.async.t23415(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23479){var state_val_23480 = (state_23479[1]);if((state_val_23480 === 1))
{var state_23479__$1 = state_23479;var statearr_23481_23501 = state_23479__$1;(statearr_23481_23501[2] = null);
(statearr_23481_23501[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23480 === 2))
{var state_23479__$1 = state_23479;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23479__$1,4,ch);
} else
{if((state_val_23480 === 3))
{var inst_23477 = (state_23479[2]);var state_23479__$1 = state_23479;return cljs.core.async.impl.ioc_helpers.return_chan(state_23479__$1,inst_23477);
} else
{if((state_val_23480 === 4))
{var inst_23461 = (state_23479[7]);var inst_23461__$1 = (state_23479[2]);var inst_23462 = (inst_23461__$1 == null);var state_23479__$1 = (function (){var statearr_23482 = state_23479;(statearr_23482[7] = inst_23461__$1);
return statearr_23482;
})();if(cljs.core.truth_(inst_23462))
{var statearr_23483_23502 = state_23479__$1;(statearr_23483_23502[1] = 5);
} else
{var statearr_23484_23503 = state_23479__$1;(statearr_23484_23503[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23480 === 5))
{var inst_23464 = cljs.core.async.close_BANG_(out);var state_23479__$1 = state_23479;var statearr_23485_23504 = state_23479__$1;(statearr_23485_23504[2] = inst_23464);
(statearr_23485_23504[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23480 === 6))
{var inst_23461 = (state_23479[7]);var inst_23466 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23461) : p.call(null,inst_23461));var state_23479__$1 = state_23479;if(cljs.core.truth_(inst_23466))
{var statearr_23486_23505 = state_23479__$1;(statearr_23486_23505[1] = 8);
} else
{var statearr_23487_23506 = state_23479__$1;(statearr_23487_23506[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23480 === 7))
{var inst_23475 = (state_23479[2]);var state_23479__$1 = state_23479;var statearr_23488_23507 = state_23479__$1;(statearr_23488_23507[2] = inst_23475);
(statearr_23488_23507[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23480 === 8))
{var inst_23461 = (state_23479[7]);var state_23479__$1 = state_23479;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23479__$1,11,out,inst_23461);
} else
{if((state_val_23480 === 9))
{var state_23479__$1 = state_23479;var statearr_23489_23508 = state_23479__$1;(statearr_23489_23508[2] = null);
(statearr_23489_23508[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23480 === 10))
{var inst_23472 = (state_23479[2]);var state_23479__$1 = (function (){var statearr_23490 = state_23479;(statearr_23490[8] = inst_23472);
return statearr_23490;
})();var statearr_23491_23509 = state_23479__$1;(statearr_23491_23509[2] = null);
(statearr_23491_23509[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23480 === 11))
{var inst_23469 = (state_23479[2]);var state_23479__$1 = state_23479;var statearr_23492_23510 = state_23479__$1;(statearr_23492_23510[2] = inst_23469);
(statearr_23492_23510[1] = 10);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_23496 = [null,null,null,null,null,null,null,null,null];(statearr_23496[0] = state_machine__5507__auto__);
(statearr_23496[1] = 1);
return statearr_23496;
});
var state_machine__5507__auto____1 = (function (state_23479){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23479);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23497){if((e23497 instanceof Object))
{var ex__5510__auto__ = e23497;var statearr_23498_23511 = state_23479;(statearr_23498_23511[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23479);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e23497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__23512 = state_23479;
state_23479 = G__23512;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23479){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23499 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23500);
return statearr_23499;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23664){var state_val_23665 = (state_23664[1]);if((state_val_23665 === 1))
{var state_23664__$1 = state_23664;var statearr_23666_23703 = state_23664__$1;(statearr_23666_23703[2] = null);
(statearr_23666_23703[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 2))
{var state_23664__$1 = state_23664;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23664__$1,4,in$);
} else
{if((state_val_23665 === 3))
{var inst_23662 = (state_23664[2]);var state_23664__$1 = state_23664;return cljs.core.async.impl.ioc_helpers.return_chan(state_23664__$1,inst_23662);
} else
{if((state_val_23665 === 4))
{var inst_23610 = (state_23664[7]);var inst_23610__$1 = (state_23664[2]);var inst_23611 = (inst_23610__$1 == null);var state_23664__$1 = (function (){var statearr_23667 = state_23664;(statearr_23667[7] = inst_23610__$1);
return statearr_23667;
})();if(cljs.core.truth_(inst_23611))
{var statearr_23668_23704 = state_23664__$1;(statearr_23668_23704[1] = 5);
} else
{var statearr_23669_23705 = state_23664__$1;(statearr_23669_23705[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 5))
{var inst_23613 = cljs.core.async.close_BANG_(out);var state_23664__$1 = state_23664;var statearr_23670_23706 = state_23664__$1;(statearr_23670_23706[2] = inst_23613);
(statearr_23670_23706[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 6))
{var inst_23610 = (state_23664[7]);var inst_23615 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23610) : f.call(null,inst_23610));var inst_23620 = cljs.core.seq(inst_23615);var inst_23621 = inst_23620;var inst_23622 = null;var inst_23623 = 0;var inst_23624 = 0;var state_23664__$1 = (function (){var statearr_23671 = state_23664;(statearr_23671[8] = inst_23622);
(statearr_23671[9] = inst_23623);
(statearr_23671[10] = inst_23624);
(statearr_23671[11] = inst_23621);
return statearr_23671;
})();var statearr_23672_23707 = state_23664__$1;(statearr_23672_23707[2] = null);
(statearr_23672_23707[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 7))
{var inst_23660 = (state_23664[2]);var state_23664__$1 = state_23664;var statearr_23673_23708 = state_23664__$1;(statearr_23673_23708[2] = inst_23660);
(statearr_23673_23708[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 8))
{var inst_23623 = (state_23664[9]);var inst_23624 = (state_23664[10]);var inst_23626 = (inst_23624 < inst_23623);var inst_23627 = inst_23626;var state_23664__$1 = state_23664;if(cljs.core.truth_(inst_23627))
{var statearr_23674_23709 = state_23664__$1;(statearr_23674_23709[1] = 10);
} else
{var statearr_23675_23710 = state_23664__$1;(statearr_23675_23710[1] = 11);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 9))
{var inst_23657 = (state_23664[2]);var state_23664__$1 = (function (){var statearr_23676 = state_23664;(statearr_23676[12] = inst_23657);
return statearr_23676;
})();var statearr_23677_23711 = state_23664__$1;(statearr_23677_23711[2] = null);
(statearr_23677_23711[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 10))
{var inst_23622 = (state_23664[8]);var inst_23624 = (state_23664[10]);var inst_23629 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23622,inst_23624);var state_23664__$1 = state_23664;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23664__$1,13,out,inst_23629);
} else
{if((state_val_23665 === 11))
{var inst_23635 = (state_23664[13]);var inst_23621 = (state_23664[11]);var inst_23635__$1 = cljs.core.seq(inst_23621);var state_23664__$1 = (function (){var statearr_23681 = state_23664;(statearr_23681[13] = inst_23635__$1);
return statearr_23681;
})();if(inst_23635__$1)
{var statearr_23682_23712 = state_23664__$1;(statearr_23682_23712[1] = 14);
} else
{var statearr_23683_23713 = state_23664__$1;(statearr_23683_23713[1] = 15);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 12))
{var inst_23655 = (state_23664[2]);var state_23664__$1 = state_23664;var statearr_23684_23714 = state_23664__$1;(statearr_23684_23714[2] = inst_23655);
(statearr_23684_23714[1] = 9);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 13))
{var inst_23622 = (state_23664[8]);var inst_23623 = (state_23664[9]);var inst_23624 = (state_23664[10]);var inst_23621 = (state_23664[11]);var inst_23631 = (state_23664[2]);var inst_23632 = (inst_23624 + 1);var tmp23678 = inst_23622;var tmp23679 = inst_23623;var tmp23680 = inst_23621;var inst_23621__$1 = tmp23680;var inst_23622__$1 = tmp23678;var inst_23623__$1 = tmp23679;var inst_23624__$1 = inst_23632;var state_23664__$1 = (function (){var statearr_23685 = state_23664;(statearr_23685[8] = inst_23622__$1);
(statearr_23685[9] = inst_23623__$1);
(statearr_23685[14] = inst_23631);
(statearr_23685[10] = inst_23624__$1);
(statearr_23685[11] = inst_23621__$1);
return statearr_23685;
})();var statearr_23686_23715 = state_23664__$1;(statearr_23686_23715[2] = null);
(statearr_23686_23715[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 14))
{var inst_23635 = (state_23664[13]);var inst_23637 = cljs.core.chunked_seq_QMARK_(inst_23635);var state_23664__$1 = state_23664;if(inst_23637)
{var statearr_23687_23716 = state_23664__$1;(statearr_23687_23716[1] = 17);
} else
{var statearr_23688_23717 = state_23664__$1;(statearr_23688_23717[1] = 18);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 15))
{var state_23664__$1 = state_23664;var statearr_23689_23718 = state_23664__$1;(statearr_23689_23718[2] = null);
(statearr_23689_23718[1] = 16);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 16))
{var inst_23653 = (state_23664[2]);var state_23664__$1 = state_23664;var statearr_23690_23719 = state_23664__$1;(statearr_23690_23719[2] = inst_23653);
(statearr_23690_23719[1] = 12);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 17))
{var inst_23635 = (state_23664[13]);var inst_23639 = cljs.core.chunk_first(inst_23635);var inst_23640 = cljs.core.chunk_rest(inst_23635);var inst_23641 = cljs.core.count(inst_23639);var inst_23621 = inst_23640;var inst_23622 = inst_23639;var inst_23623 = inst_23641;var inst_23624 = 0;var state_23664__$1 = (function (){var statearr_23691 = state_23664;(statearr_23691[8] = inst_23622);
(statearr_23691[9] = inst_23623);
(statearr_23691[10] = inst_23624);
(statearr_23691[11] = inst_23621);
return statearr_23691;
})();var statearr_23692_23720 = state_23664__$1;(statearr_23692_23720[2] = null);
(statearr_23692_23720[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 18))
{var inst_23635 = (state_23664[13]);var inst_23644 = cljs.core.first(inst_23635);var state_23664__$1 = state_23664;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23664__$1,20,out,inst_23644);
} else
{if((state_val_23665 === 19))
{var inst_23650 = (state_23664[2]);var state_23664__$1 = state_23664;var statearr_23693_23721 = state_23664__$1;(statearr_23693_23721[2] = inst_23650);
(statearr_23693_23721[1] = 16);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23665 === 20))
{var inst_23635 = (state_23664[13]);var inst_23646 = (state_23664[2]);var inst_23647 = cljs.core.next(inst_23635);var inst_23621 = inst_23647;var inst_23622 = null;var inst_23623 = 0;var inst_23624 = 0;var state_23664__$1 = (function (){var statearr_23694 = state_23664;(statearr_23694[8] = inst_23622);
(statearr_23694[9] = inst_23623);
(statearr_23694[10] = inst_23624);
(statearr_23694[11] = inst_23621);
(statearr_23694[15] = inst_23646);
return statearr_23694;
})();var statearr_23695_23722 = state_23664__$1;(statearr_23695_23722[2] = null);
(statearr_23695_23722[1] = 8);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_23699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23699[0] = state_machine__5507__auto__);
(statearr_23699[1] = 1);
return statearr_23699;
});
var state_machine__5507__auto____1 = (function (state_23664){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23664);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23700){if((e23700 instanceof Object))
{var ex__5510__auto__ = e23700;var statearr_23701_23723 = state_23664;(statearr_23701_23723[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23664);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e23700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__23724 = state_23664;
state_23664 = G__23724;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23664){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23702 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23702;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23784){var state_val_23785 = (state_23784[1]);if((state_val_23785 === 1))
{var state_23784__$1 = state_23784;var statearr_23786_23806 = state_23784__$1;(statearr_23786_23806[2] = null);
(statearr_23786_23806[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23785 === 2))
{var state_23784__$1 = state_23784;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23784__$1,4,from);
} else
{if((state_val_23785 === 3))
{var inst_23782 = (state_23784[2]);var state_23784__$1 = state_23784;return cljs.core.async.impl.ioc_helpers.return_chan(state_23784__$1,inst_23782);
} else
{if((state_val_23785 === 4))
{var inst_23767 = (state_23784[7]);var inst_23767__$1 = (state_23784[2]);var inst_23768 = (inst_23767__$1 == null);var state_23784__$1 = (function (){var statearr_23787 = state_23784;(statearr_23787[7] = inst_23767__$1);
return statearr_23787;
})();if(cljs.core.truth_(inst_23768))
{var statearr_23788_23807 = state_23784__$1;(statearr_23788_23807[1] = 5);
} else
{var statearr_23789_23808 = state_23784__$1;(statearr_23789_23808[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23785 === 5))
{var state_23784__$1 = state_23784;if(cljs.core.truth_(close_QMARK_))
{var statearr_23790_23809 = state_23784__$1;(statearr_23790_23809[1] = 8);
} else
{var statearr_23791_23810 = state_23784__$1;(statearr_23791_23810[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23785 === 6))
{var inst_23767 = (state_23784[7]);var state_23784__$1 = state_23784;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23784__$1,11,to,inst_23767);
} else
{if((state_val_23785 === 7))
{var inst_23780 = (state_23784[2]);var state_23784__$1 = state_23784;var statearr_23792_23811 = state_23784__$1;(statearr_23792_23811[2] = inst_23780);
(statearr_23792_23811[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23785 === 8))
{var inst_23771 = cljs.core.async.close_BANG_(to);var state_23784__$1 = state_23784;var statearr_23793_23812 = state_23784__$1;(statearr_23793_23812[2] = inst_23771);
(statearr_23793_23812[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23785 === 9))
{var state_23784__$1 = state_23784;var statearr_23794_23813 = state_23784__$1;(statearr_23794_23813[2] = null);
(statearr_23794_23813[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23785 === 10))
{var inst_23774 = (state_23784[2]);var state_23784__$1 = state_23784;var statearr_23795_23814 = state_23784__$1;(statearr_23795_23814[2] = inst_23774);
(statearr_23795_23814[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23785 === 11))
{var inst_23777 = (state_23784[2]);var state_23784__$1 = (function (){var statearr_23796 = state_23784;(statearr_23796[8] = inst_23777);
return statearr_23796;
})();var statearr_23797_23815 = state_23784__$1;(statearr_23797_23815[2] = null);
(statearr_23797_23815[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_23801 = [null,null,null,null,null,null,null,null,null];(statearr_23801[0] = state_machine__5507__auto__);
(statearr_23801[1] = 1);
return statearr_23801;
});
var state_machine__5507__auto____1 = (function (state_23784){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23784);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23802){if((e23802 instanceof Object))
{var ex__5510__auto__ = e23802;var statearr_23803_23816 = state_23784;(statearr_23803_23816[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23784);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e23802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__23817 = state_23784;
state_23784 = G__23817;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23784){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23804 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23805);
return statearr_23804;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23882){var state_val_23883 = (state_23882[1]);if((state_val_23883 === 1))
{var state_23882__$1 = state_23882;var statearr_23884_23905 = state_23882__$1;(statearr_23884_23905[2] = null);
(statearr_23884_23905[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23883 === 2))
{var state_23882__$1 = state_23882;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23882__$1,4,ch);
} else
{if((state_val_23883 === 3))
{var inst_23880 = (state_23882[2]);var state_23882__$1 = state_23882;return cljs.core.async.impl.ioc_helpers.return_chan(state_23882__$1,inst_23880);
} else
{if((state_val_23883 === 4))
{var inst_23863 = (state_23882[7]);var inst_23863__$1 = (state_23882[2]);var inst_23864 = (inst_23863__$1 == null);var state_23882__$1 = (function (){var statearr_23885 = state_23882;(statearr_23885[7] = inst_23863__$1);
return statearr_23885;
})();if(cljs.core.truth_(inst_23864))
{var statearr_23886_23906 = state_23882__$1;(statearr_23886_23906[1] = 5);
} else
{var statearr_23887_23907 = state_23882__$1;(statearr_23887_23907[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23883 === 5))
{var inst_23866 = cljs.core.async.close_BANG_(tc);var inst_23867 = cljs.core.async.close_BANG_(fc);var state_23882__$1 = (function (){var statearr_23888 = state_23882;(statearr_23888[8] = inst_23866);
return statearr_23888;
})();var statearr_23889_23908 = state_23882__$1;(statearr_23889_23908[2] = inst_23867);
(statearr_23889_23908[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23883 === 6))
{var inst_23863 = (state_23882[7]);var inst_23869 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23863) : p.call(null,inst_23863));var state_23882__$1 = state_23882;if(cljs.core.truth_(inst_23869))
{var statearr_23890_23909 = state_23882__$1;(statearr_23890_23909[1] = 9);
} else
{var statearr_23891_23910 = state_23882__$1;(statearr_23891_23910[1] = 10);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23883 === 7))
{var inst_23878 = (state_23882[2]);var state_23882__$1 = state_23882;var statearr_23892_23911 = state_23882__$1;(statearr_23892_23911[2] = inst_23878);
(statearr_23892_23911[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23883 === 8))
{var inst_23875 = (state_23882[2]);var state_23882__$1 = (function (){var statearr_23893 = state_23882;(statearr_23893[9] = inst_23875);
return statearr_23893;
})();var statearr_23894_23912 = state_23882__$1;(statearr_23894_23912[2] = null);
(statearr_23894_23912[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23883 === 9))
{var state_23882__$1 = state_23882;var statearr_23895_23913 = state_23882__$1;(statearr_23895_23913[2] = tc);
(statearr_23895_23913[1] = 11);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23883 === 10))
{var state_23882__$1 = state_23882;var statearr_23896_23914 = state_23882__$1;(statearr_23896_23914[2] = fc);
(statearr_23896_23914[1] = 11);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23883 === 11))
{var inst_23863 = (state_23882[7]);var inst_23873 = (state_23882[2]);var state_23882__$1 = state_23882;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23882__$1,8,inst_23873,inst_23863);
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
var state_machine__5507__auto____0 = (function (){var statearr_23900 = [null,null,null,null,null,null,null,null,null,null];(statearr_23900[0] = state_machine__5507__auto__);
(statearr_23900[1] = 1);
return statearr_23900;
});
var state_machine__5507__auto____1 = (function (state_23882){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23882);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23901){if((e23901 instanceof Object))
{var ex__5510__auto__ = e23901;var statearr_23902_23915 = state_23882;(statearr_23902_23915[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23882);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e23901;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__23916 = state_23882;
state_23882 = G__23916;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23882){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23903 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23904);
return statearr_23903;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23963){var state_val_23964 = (state_23963[1]);if((state_val_23964 === 7))
{var inst_23959 = (state_23963[2]);var state_23963__$1 = state_23963;var statearr_23965_23981 = state_23963__$1;(statearr_23965_23981[2] = inst_23959);
(statearr_23965_23981[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23964 === 6))
{var inst_23952 = (state_23963[7]);var inst_23949 = (state_23963[8]);var inst_23956 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23949,inst_23952) : f.call(null,inst_23949,inst_23952));var inst_23949__$1 = inst_23956;var state_23963__$1 = (function (){var statearr_23966 = state_23963;(statearr_23966[8] = inst_23949__$1);
return statearr_23966;
})();var statearr_23967_23982 = state_23963__$1;(statearr_23967_23982[2] = null);
(statearr_23967_23982[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23964 === 5))
{var inst_23949 = (state_23963[8]);var state_23963__$1 = state_23963;var statearr_23968_23983 = state_23963__$1;(statearr_23968_23983[2] = inst_23949);
(statearr_23968_23983[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23964 === 4))
{var inst_23952 = (state_23963[7]);var inst_23952__$1 = (state_23963[2]);var inst_23953 = (inst_23952__$1 == null);var state_23963__$1 = (function (){var statearr_23969 = state_23963;(statearr_23969[7] = inst_23952__$1);
return statearr_23969;
})();if(cljs.core.truth_(inst_23953))
{var statearr_23970_23984 = state_23963__$1;(statearr_23970_23984[1] = 5);
} else
{var statearr_23971_23985 = state_23963__$1;(statearr_23971_23985[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23964 === 3))
{var inst_23961 = (state_23963[2]);var state_23963__$1 = state_23963;return cljs.core.async.impl.ioc_helpers.return_chan(state_23963__$1,inst_23961);
} else
{if((state_val_23964 === 2))
{var state_23963__$1 = state_23963;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23963__$1,4,ch);
} else
{if((state_val_23964 === 1))
{var inst_23949 = init;var state_23963__$1 = (function (){var statearr_23972 = state_23963;(statearr_23972[8] = inst_23949);
return statearr_23972;
})();var statearr_23973_23986 = state_23963__$1;(statearr_23973_23986[2] = null);
(statearr_23973_23986[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_23977 = [null,null,null,null,null,null,null,null,null];(statearr_23977[0] = state_machine__5507__auto__);
(statearr_23977[1] = 1);
return statearr_23977;
});
var state_machine__5507__auto____1 = (function (state_23963){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23963);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23978){if((e23978 instanceof Object))
{var ex__5510__auto__ = e23978;var statearr_23979_23987 = state_23963;(statearr_23979_23987[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23963);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e23978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__23988 = state_23963;
state_23963 = G__23988;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23963){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23980 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23980;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24050){var state_val_24051 = (state_24050[1]);if((state_val_24051 === 1))
{var inst_24030 = cljs.core.seq(coll);var inst_24031 = inst_24030;var state_24050__$1 = (function (){var statearr_24052 = state_24050;(statearr_24052[7] = inst_24031);
return statearr_24052;
})();var statearr_24053_24071 = state_24050__$1;(statearr_24053_24071[2] = null);
(statearr_24053_24071[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24051 === 2))
{var inst_24031 = (state_24050[7]);var state_24050__$1 = state_24050;if(cljs.core.truth_(inst_24031))
{var statearr_24054_24072 = state_24050__$1;(statearr_24054_24072[1] = 4);
} else
{var statearr_24055_24073 = state_24050__$1;(statearr_24055_24073[1] = 5);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24051 === 3))
{var inst_24048 = (state_24050[2]);var state_24050__$1 = state_24050;return cljs.core.async.impl.ioc_helpers.return_chan(state_24050__$1,inst_24048);
} else
{if((state_val_24051 === 4))
{var inst_24031 = (state_24050[7]);var inst_24034 = cljs.core.first(inst_24031);var state_24050__$1 = state_24050;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24050__$1,7,ch,inst_24034);
} else
{if((state_val_24051 === 5))
{var state_24050__$1 = state_24050;if(cljs.core.truth_(close_QMARK_))
{var statearr_24056_24074 = state_24050__$1;(statearr_24056_24074[1] = 8);
} else
{var statearr_24057_24075 = state_24050__$1;(statearr_24057_24075[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24051 === 6))
{var inst_24046 = (state_24050[2]);var state_24050__$1 = state_24050;var statearr_24058_24076 = state_24050__$1;(statearr_24058_24076[2] = inst_24046);
(statearr_24058_24076[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24051 === 7))
{var inst_24031 = (state_24050[7]);var inst_24036 = (state_24050[2]);var inst_24037 = cljs.core.next(inst_24031);var inst_24031__$1 = inst_24037;var state_24050__$1 = (function (){var statearr_24059 = state_24050;(statearr_24059[8] = inst_24036);
(statearr_24059[7] = inst_24031__$1);
return statearr_24059;
})();var statearr_24060_24077 = state_24050__$1;(statearr_24060_24077[2] = null);
(statearr_24060_24077[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24051 === 8))
{var inst_24041 = cljs.core.async.close_BANG_(ch);var state_24050__$1 = state_24050;var statearr_24061_24078 = state_24050__$1;(statearr_24061_24078[2] = inst_24041);
(statearr_24061_24078[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24051 === 9))
{var state_24050__$1 = state_24050;var statearr_24062_24079 = state_24050__$1;(statearr_24062_24079[2] = null);
(statearr_24062_24079[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24051 === 10))
{var inst_24044 = (state_24050[2]);var state_24050__$1 = state_24050;var statearr_24063_24080 = state_24050__$1;(statearr_24063_24080[2] = inst_24044);
(statearr_24063_24080[1] = 6);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_24067 = [null,null,null,null,null,null,null,null,null];(statearr_24067[0] = state_machine__5507__auto__);
(statearr_24067[1] = 1);
return statearr_24067;
});
var state_machine__5507__auto____1 = (function (state_24050){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24050);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24068){if((e24068 instanceof Object))
{var ex__5510__auto__ = e24068;var statearr_24069_24081 = state_24050;(statearr_24069_24081[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24050);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e24068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__24082 = state_24050;
state_24050 = G__24082;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24050){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24070 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24070;
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
cljs.core.async.Mux = (function (){var obj24084 = {};return obj24084;
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
cljs.core.async.Mult = (function (){var obj24086 = {};return obj24086;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24310 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24310 = (function (cs,ch,mult,meta24311){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24311 = meta24311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24310.cljs$lang$type = true;
cljs.core.async.t24310.cljs$lang$ctorStr = "cljs.core.async/t24310";
cljs.core.async.t24310.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24310");
});})(cs))
;
cljs.core.async.t24310.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24310.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24310.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24310.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24310.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24312){var self__ = this;
var _24312__$1 = this;return self__.meta24311;
});})(cs))
;
cljs.core.async.t24310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24312,meta24311__$1){var self__ = this;
var _24312__$1 = this;return (new cljs.core.async.t24310(self__.cs,self__.ch,self__.mult,meta24311__$1));
});})(cs))
;
cljs.core.async.__GT_t24310 = ((function (cs){
return (function __GT_t24310(cs__$1,ch__$1,mult__$1,meta24311){return (new cljs.core.async.t24310(cs__$1,ch__$1,mult__$1,meta24311));
});})(cs))
;
}
return (new cljs.core.async.t24310(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24447){var state_val_24448 = (state_24447[1]);if((state_val_24448 === 32))
{var inst_24315 = (state_24447[7]);var inst_24391 = (state_24447[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24447,31,Object,null,30);var inst_24398 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24391,inst_24315,done);var state_24447__$1 = state_24447;var statearr_24449_24534 = state_24447__$1;(statearr_24449_24534[2] = inst_24398);
cljs.core.async.impl.ioc_helpers.process_exception(state_24447__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 1))
{var state_24447__$1 = state_24447;var statearr_24450_24535 = state_24447__$1;(statearr_24450_24535[2] = null);
(statearr_24450_24535[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 33))
{var inst_24404 = (state_24447[9]);var inst_24406 = cljs.core.chunked_seq_QMARK_(inst_24404);var state_24447__$1 = state_24447;if(inst_24406)
{var statearr_24451_24536 = state_24447__$1;(statearr_24451_24536[1] = 36);
} else
{var statearr_24452_24537 = state_24447__$1;(statearr_24452_24537[1] = 37);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 2))
{var state_24447__$1 = state_24447;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24447__$1,4,ch);
} else
{if((state_val_24448 === 34))
{var state_24447__$1 = state_24447;var statearr_24453_24538 = state_24447__$1;(statearr_24453_24538[2] = null);
(statearr_24453_24538[1] = 35);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 3))
{var inst_24445 = (state_24447[2]);var state_24447__$1 = state_24447;return cljs.core.async.impl.ioc_helpers.return_chan(state_24447__$1,inst_24445);
} else
{if((state_val_24448 === 35))
{var inst_24429 = (state_24447[2]);var state_24447__$1 = state_24447;var statearr_24454_24539 = state_24447__$1;(statearr_24454_24539[2] = inst_24429);
(statearr_24454_24539[1] = 29);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 4))
{var inst_24315 = (state_24447[7]);var inst_24315__$1 = (state_24447[2]);var inst_24316 = (inst_24315__$1 == null);var state_24447__$1 = (function (){var statearr_24455 = state_24447;(statearr_24455[7] = inst_24315__$1);
return statearr_24455;
})();if(cljs.core.truth_(inst_24316))
{var statearr_24456_24540 = state_24447__$1;(statearr_24456_24540[1] = 5);
} else
{var statearr_24457_24541 = state_24447__$1;(statearr_24457_24541[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 36))
{var inst_24404 = (state_24447[9]);var inst_24408 = cljs.core.chunk_first(inst_24404);var inst_24409 = cljs.core.chunk_rest(inst_24404);var inst_24410 = cljs.core.count(inst_24408);var inst_24383 = inst_24409;var inst_24384 = inst_24408;var inst_24385 = inst_24410;var inst_24386 = 0;var state_24447__$1 = (function (){var statearr_24458 = state_24447;(statearr_24458[10] = inst_24386);
(statearr_24458[11] = inst_24384);
(statearr_24458[12] = inst_24385);
(statearr_24458[13] = inst_24383);
return statearr_24458;
})();var statearr_24459_24542 = state_24447__$1;(statearr_24459_24542[2] = null);
(statearr_24459_24542[1] = 25);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 5))
{var inst_24322 = cljs.core.deref(cs);var inst_24323 = cljs.core.seq(inst_24322);var inst_24324 = inst_24323;var inst_24325 = null;var inst_24326 = 0;var inst_24327 = 0;var state_24447__$1 = (function (){var statearr_24460 = state_24447;(statearr_24460[14] = inst_24326);
(statearr_24460[15] = inst_24327);
(statearr_24460[16] = inst_24325);
(statearr_24460[17] = inst_24324);
return statearr_24460;
})();var statearr_24461_24543 = state_24447__$1;(statearr_24461_24543[2] = null);
(statearr_24461_24543[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 37))
{var inst_24404 = (state_24447[9]);var inst_24413 = cljs.core.first(inst_24404);var state_24447__$1 = (function (){var statearr_24462 = state_24447;(statearr_24462[18] = inst_24413);
return statearr_24462;
})();var statearr_24463_24544 = state_24447__$1;(statearr_24463_24544[2] = null);
(statearr_24463_24544[1] = 41);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 6))
{var inst_24375 = (state_24447[19]);var inst_24374 = cljs.core.deref(cs);var inst_24375__$1 = cljs.core.keys(inst_24374);var inst_24376 = cljs.core.count(inst_24375__$1);var inst_24377 = cljs.core.reset_BANG_(dctr,inst_24376);var inst_24382 = cljs.core.seq(inst_24375__$1);var inst_24383 = inst_24382;var inst_24384 = null;var inst_24385 = 0;var inst_24386 = 0;var state_24447__$1 = (function (){var statearr_24464 = state_24447;(statearr_24464[20] = inst_24377);
(statearr_24464[19] = inst_24375__$1);
(statearr_24464[10] = inst_24386);
(statearr_24464[11] = inst_24384);
(statearr_24464[12] = inst_24385);
(statearr_24464[13] = inst_24383);
return statearr_24464;
})();var statearr_24465_24545 = state_24447__$1;(statearr_24465_24545[2] = null);
(statearr_24465_24545[1] = 25);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 38))
{var inst_24426 = (state_24447[2]);var state_24447__$1 = state_24447;var statearr_24466_24546 = state_24447__$1;(statearr_24466_24546[2] = inst_24426);
(statearr_24466_24546[1] = 35);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 7))
{var inst_24443 = (state_24447[2]);var state_24447__$1 = state_24447;var statearr_24467_24547 = state_24447__$1;(statearr_24467_24547[2] = inst_24443);
(statearr_24467_24547[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 39))
{var inst_24404 = (state_24447[9]);var inst_24422 = (state_24447[2]);var inst_24423 = cljs.core.next(inst_24404);var inst_24383 = inst_24423;var inst_24384 = null;var inst_24385 = 0;var inst_24386 = 0;var state_24447__$1 = (function (){var statearr_24468 = state_24447;(statearr_24468[10] = inst_24386);
(statearr_24468[11] = inst_24384);
(statearr_24468[12] = inst_24385);
(statearr_24468[13] = inst_24383);
(statearr_24468[21] = inst_24422);
return statearr_24468;
})();var statearr_24469_24548 = state_24447__$1;(statearr_24469_24548[2] = null);
(statearr_24469_24548[1] = 25);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 8))
{var inst_24326 = (state_24447[14]);var inst_24327 = (state_24447[15]);var inst_24329 = (inst_24327 < inst_24326);var inst_24330 = inst_24329;var state_24447__$1 = state_24447;if(cljs.core.truth_(inst_24330))
{var statearr_24470_24549 = state_24447__$1;(statearr_24470_24549[1] = 10);
} else
{var statearr_24471_24550 = state_24447__$1;(statearr_24471_24550[1] = 11);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 40))
{var inst_24413 = (state_24447[18]);var inst_24414 = (state_24447[2]);var inst_24415 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24416 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24413);var state_24447__$1 = (function (){var statearr_24472 = state_24447;(statearr_24472[22] = inst_24414);
(statearr_24472[23] = inst_24415);
return statearr_24472;
})();var statearr_24473_24551 = state_24447__$1;(statearr_24473_24551[2] = inst_24416);
cljs.core.async.impl.ioc_helpers.process_exception(state_24447__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 9))
{var inst_24372 = (state_24447[2]);var state_24447__$1 = state_24447;var statearr_24474_24552 = state_24447__$1;(statearr_24474_24552[2] = inst_24372);
(statearr_24474_24552[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 41))
{var inst_24413 = (state_24447[18]);var inst_24315 = (state_24447[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24447,40,Object,null,39);var inst_24420 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24413,inst_24315,done);var state_24447__$1 = state_24447;var statearr_24475_24553 = state_24447__$1;(statearr_24475_24553[2] = inst_24420);
cljs.core.async.impl.ioc_helpers.process_exception(state_24447__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 10))
{var inst_24327 = (state_24447[15]);var inst_24325 = (state_24447[16]);var inst_24333 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24325,inst_24327);var inst_24334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24333,0,null);var inst_24335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24333,1,null);var state_24447__$1 = (function (){var statearr_24476 = state_24447;(statearr_24476[24] = inst_24334);
return statearr_24476;
})();if(cljs.core.truth_(inst_24335))
{var statearr_24477_24554 = state_24447__$1;(statearr_24477_24554[1] = 13);
} else
{var statearr_24478_24555 = state_24447__$1;(statearr_24478_24555[1] = 14);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 42))
{var state_24447__$1 = state_24447;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24447__$1,45,dchan);
} else
{if((state_val_24448 === 11))
{var inst_24324 = (state_24447[17]);var inst_24344 = (state_24447[25]);var inst_24344__$1 = cljs.core.seq(inst_24324);var state_24447__$1 = (function (){var statearr_24479 = state_24447;(statearr_24479[25] = inst_24344__$1);
return statearr_24479;
})();if(inst_24344__$1)
{var statearr_24480_24556 = state_24447__$1;(statearr_24480_24556[1] = 16);
} else
{var statearr_24481_24557 = state_24447__$1;(statearr_24481_24557[1] = 17);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 43))
{var state_24447__$1 = state_24447;var statearr_24482_24558 = state_24447__$1;(statearr_24482_24558[2] = null);
(statearr_24482_24558[1] = 44);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 12))
{var inst_24370 = (state_24447[2]);var state_24447__$1 = state_24447;var statearr_24483_24559 = state_24447__$1;(statearr_24483_24559[2] = inst_24370);
(statearr_24483_24559[1] = 9);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 44))
{var inst_24440 = (state_24447[2]);var state_24447__$1 = (function (){var statearr_24484 = state_24447;(statearr_24484[26] = inst_24440);
return statearr_24484;
})();var statearr_24485_24560 = state_24447__$1;(statearr_24485_24560[2] = null);
(statearr_24485_24560[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 13))
{var inst_24334 = (state_24447[24]);var inst_24337 = cljs.core.async.close_BANG_(inst_24334);var state_24447__$1 = state_24447;var statearr_24486_24561 = state_24447__$1;(statearr_24486_24561[2] = inst_24337);
(statearr_24486_24561[1] = 15);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 45))
{var inst_24437 = (state_24447[2]);var state_24447__$1 = state_24447;var statearr_24490_24562 = state_24447__$1;(statearr_24490_24562[2] = inst_24437);
(statearr_24490_24562[1] = 44);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 14))
{var state_24447__$1 = state_24447;var statearr_24491_24563 = state_24447__$1;(statearr_24491_24563[2] = null);
(statearr_24491_24563[1] = 15);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 15))
{var inst_24326 = (state_24447[14]);var inst_24327 = (state_24447[15]);var inst_24325 = (state_24447[16]);var inst_24324 = (state_24447[17]);var inst_24340 = (state_24447[2]);var inst_24341 = (inst_24327 + 1);var tmp24487 = inst_24326;var tmp24488 = inst_24325;var tmp24489 = inst_24324;var inst_24324__$1 = tmp24489;var inst_24325__$1 = tmp24488;var inst_24326__$1 = tmp24487;var inst_24327__$1 = inst_24341;var state_24447__$1 = (function (){var statearr_24492 = state_24447;(statearr_24492[14] = inst_24326__$1);
(statearr_24492[15] = inst_24327__$1);
(statearr_24492[16] = inst_24325__$1);
(statearr_24492[17] = inst_24324__$1);
(statearr_24492[27] = inst_24340);
return statearr_24492;
})();var statearr_24493_24564 = state_24447__$1;(statearr_24493_24564[2] = null);
(statearr_24493_24564[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 16))
{var inst_24344 = (state_24447[25]);var inst_24346 = cljs.core.chunked_seq_QMARK_(inst_24344);var state_24447__$1 = state_24447;if(inst_24346)
{var statearr_24494_24565 = state_24447__$1;(statearr_24494_24565[1] = 19);
} else
{var statearr_24495_24566 = state_24447__$1;(statearr_24495_24566[1] = 20);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 17))
{var state_24447__$1 = state_24447;var statearr_24496_24567 = state_24447__$1;(statearr_24496_24567[2] = null);
(statearr_24496_24567[1] = 18);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 18))
{var inst_24368 = (state_24447[2]);var state_24447__$1 = state_24447;var statearr_24497_24568 = state_24447__$1;(statearr_24497_24568[2] = inst_24368);
(statearr_24497_24568[1] = 12);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 19))
{var inst_24344 = (state_24447[25]);var inst_24348 = cljs.core.chunk_first(inst_24344);var inst_24349 = cljs.core.chunk_rest(inst_24344);var inst_24350 = cljs.core.count(inst_24348);var inst_24324 = inst_24349;var inst_24325 = inst_24348;var inst_24326 = inst_24350;var inst_24327 = 0;var state_24447__$1 = (function (){var statearr_24498 = state_24447;(statearr_24498[14] = inst_24326);
(statearr_24498[15] = inst_24327);
(statearr_24498[16] = inst_24325);
(statearr_24498[17] = inst_24324);
return statearr_24498;
})();var statearr_24499_24569 = state_24447__$1;(statearr_24499_24569[2] = null);
(statearr_24499_24569[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 20))
{var inst_24344 = (state_24447[25]);var inst_24354 = cljs.core.first(inst_24344);var inst_24355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24354,0,null);var inst_24356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24354,1,null);var state_24447__$1 = (function (){var statearr_24500 = state_24447;(statearr_24500[28] = inst_24355);
return statearr_24500;
})();if(cljs.core.truth_(inst_24356))
{var statearr_24501_24570 = state_24447__$1;(statearr_24501_24570[1] = 22);
} else
{var statearr_24502_24571 = state_24447__$1;(statearr_24502_24571[1] = 23);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 21))
{var inst_24365 = (state_24447[2]);var state_24447__$1 = state_24447;var statearr_24503_24572 = state_24447__$1;(statearr_24503_24572[2] = inst_24365);
(statearr_24503_24572[1] = 18);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 22))
{var inst_24355 = (state_24447[28]);var inst_24358 = cljs.core.async.close_BANG_(inst_24355);var state_24447__$1 = state_24447;var statearr_24504_24573 = state_24447__$1;(statearr_24504_24573[2] = inst_24358);
(statearr_24504_24573[1] = 24);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 23))
{var state_24447__$1 = state_24447;var statearr_24505_24574 = state_24447__$1;(statearr_24505_24574[2] = null);
(statearr_24505_24574[1] = 24);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 24))
{var inst_24344 = (state_24447[25]);var inst_24361 = (state_24447[2]);var inst_24362 = cljs.core.next(inst_24344);var inst_24324 = inst_24362;var inst_24325 = null;var inst_24326 = 0;var inst_24327 = 0;var state_24447__$1 = (function (){var statearr_24506 = state_24447;(statearr_24506[14] = inst_24326);
(statearr_24506[15] = inst_24327);
(statearr_24506[29] = inst_24361);
(statearr_24506[16] = inst_24325);
(statearr_24506[17] = inst_24324);
return statearr_24506;
})();var statearr_24507_24575 = state_24447__$1;(statearr_24507_24575[2] = null);
(statearr_24507_24575[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 25))
{var inst_24386 = (state_24447[10]);var inst_24385 = (state_24447[12]);var inst_24388 = (inst_24386 < inst_24385);var inst_24389 = inst_24388;var state_24447__$1 = state_24447;if(cljs.core.truth_(inst_24389))
{var statearr_24508_24576 = state_24447__$1;(statearr_24508_24576[1] = 27);
} else
{var statearr_24509_24577 = state_24447__$1;(statearr_24509_24577[1] = 28);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 26))
{var inst_24375 = (state_24447[19]);var inst_24433 = (state_24447[2]);var inst_24434 = cljs.core.seq(inst_24375);var state_24447__$1 = (function (){var statearr_24510 = state_24447;(statearr_24510[30] = inst_24433);
return statearr_24510;
})();if(inst_24434)
{var statearr_24511_24578 = state_24447__$1;(statearr_24511_24578[1] = 42);
} else
{var statearr_24512_24579 = state_24447__$1;(statearr_24512_24579[1] = 43);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 27))
{var inst_24386 = (state_24447[10]);var inst_24384 = (state_24447[11]);var inst_24391 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24384,inst_24386);var state_24447__$1 = (function (){var statearr_24513 = state_24447;(statearr_24513[8] = inst_24391);
return statearr_24513;
})();var statearr_24514_24580 = state_24447__$1;(statearr_24514_24580[2] = null);
(statearr_24514_24580[1] = 32);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 28))
{var inst_24404 = (state_24447[9]);var inst_24383 = (state_24447[13]);var inst_24404__$1 = cljs.core.seq(inst_24383);var state_24447__$1 = (function (){var statearr_24518 = state_24447;(statearr_24518[9] = inst_24404__$1);
return statearr_24518;
})();if(inst_24404__$1)
{var statearr_24519_24581 = state_24447__$1;(statearr_24519_24581[1] = 33);
} else
{var statearr_24520_24582 = state_24447__$1;(statearr_24520_24582[1] = 34);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 29))
{var inst_24431 = (state_24447[2]);var state_24447__$1 = state_24447;var statearr_24521_24583 = state_24447__$1;(statearr_24521_24583[2] = inst_24431);
(statearr_24521_24583[1] = 26);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 30))
{var inst_24386 = (state_24447[10]);var inst_24384 = (state_24447[11]);var inst_24385 = (state_24447[12]);var inst_24383 = (state_24447[13]);var inst_24400 = (state_24447[2]);var inst_24401 = (inst_24386 + 1);var tmp24515 = inst_24384;var tmp24516 = inst_24385;var tmp24517 = inst_24383;var inst_24383__$1 = tmp24517;var inst_24384__$1 = tmp24515;var inst_24385__$1 = tmp24516;var inst_24386__$1 = inst_24401;var state_24447__$1 = (function (){var statearr_24522 = state_24447;(statearr_24522[31] = inst_24400);
(statearr_24522[10] = inst_24386__$1);
(statearr_24522[11] = inst_24384__$1);
(statearr_24522[12] = inst_24385__$1);
(statearr_24522[13] = inst_24383__$1);
return statearr_24522;
})();var statearr_24523_24584 = state_24447__$1;(statearr_24523_24584[2] = null);
(statearr_24523_24584[1] = 25);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24448 === 31))
{var inst_24391 = (state_24447[8]);var inst_24392 = (state_24447[2]);var inst_24393 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24394 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24391);var state_24447__$1 = (function (){var statearr_24524 = state_24447;(statearr_24524[32] = inst_24392);
(statearr_24524[33] = inst_24393);
return statearr_24524;
})();var statearr_24525_24585 = state_24447__$1;(statearr_24525_24585[2] = inst_24394);
cljs.core.async.impl.ioc_helpers.process_exception(state_24447__$1);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_24529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24529[0] = state_machine__5507__auto__);
(statearr_24529[1] = 1);
return statearr_24529;
});
var state_machine__5507__auto____1 = (function (state_24447){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24447);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24530){if((e24530 instanceof Object))
{var ex__5510__auto__ = e24530;var statearr_24531_24586 = state_24447;(statearr_24531_24586[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24447);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e24530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__24587 = state_24447;
state_24447 = G__24587;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24447){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24532 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24533);
return statearr_24532;
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
cljs.core.async.Mix = (function (){var obj24589 = {};return obj24589;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$223,null,cljs.core.constant$keyword$224,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$225);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$224);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$225,chs);var pauses = pick(cljs.core.constant$keyword$223,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$226,solos,cljs.core.constant$keyword$227,pick(cljs.core.constant$keyword$224,chs),cljs.core.constant$keyword$228,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$223)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24699 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24699 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24700){
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
this.meta24700 = meta24700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24699.cljs$lang$type = true;
cljs.core.async.t24699.cljs$lang$ctorStr = "cljs.core.async/t24699";
cljs.core.async.t24699.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24699");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24699.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24699.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24699.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24699.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24699.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24699.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24699.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24701){var self__ = this;
var _24701__$1 = this;return self__.meta24700;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24701,meta24700__$1){var self__ = this;
var _24701__$1 = this;return (new cljs.core.async.t24699(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24700__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24699 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24699(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24700){return (new cljs.core.async.t24699(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24700));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24699(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24766){var state_val_24767 = (state_24766[1]);if((state_val_24767 === 1))
{var inst_24705 = (state_24766[7]);var inst_24705__$1 = calc_state();var inst_24706 = cljs.core.seq_QMARK_(inst_24705__$1);var state_24766__$1 = (function (){var statearr_24768 = state_24766;(statearr_24768[7] = inst_24705__$1);
return statearr_24768;
})();if(inst_24706)
{var statearr_24769_24809 = state_24766__$1;(statearr_24769_24809[1] = 2);
} else
{var statearr_24770_24810 = state_24766__$1;(statearr_24770_24810[1] = 3);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 2))
{var inst_24705 = (state_24766[7]);var inst_24708 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24705);var state_24766__$1 = state_24766;var statearr_24771_24811 = state_24766__$1;(statearr_24771_24811[2] = inst_24708);
(statearr_24771_24811[1] = 4);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 3))
{var inst_24705 = (state_24766[7]);var state_24766__$1 = state_24766;var statearr_24772_24812 = state_24766__$1;(statearr_24772_24812[2] = inst_24705);
(statearr_24772_24812[1] = 4);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 4))
{var inst_24705 = (state_24766[7]);var inst_24711 = (state_24766[2]);var inst_24712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24711,cljs.core.constant$keyword$228);var inst_24713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24711,cljs.core.constant$keyword$227);var inst_24714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24711,cljs.core.constant$keyword$226);var inst_24715 = inst_24705;var state_24766__$1 = (function (){var statearr_24773 = state_24766;(statearr_24773[8] = inst_24712);
(statearr_24773[9] = inst_24713);
(statearr_24773[10] = inst_24714);
(statearr_24773[11] = inst_24715);
return statearr_24773;
})();var statearr_24774_24813 = state_24766__$1;(statearr_24774_24813[2] = null);
(statearr_24774_24813[1] = 5);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 5))
{var inst_24715 = (state_24766[11]);var inst_24718 = cljs.core.seq_QMARK_(inst_24715);var state_24766__$1 = state_24766;if(inst_24718)
{var statearr_24775_24814 = state_24766__$1;(statearr_24775_24814[1] = 7);
} else
{var statearr_24776_24815 = state_24766__$1;(statearr_24776_24815[1] = 8);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 6))
{var inst_24764 = (state_24766[2]);var state_24766__$1 = state_24766;return cljs.core.async.impl.ioc_helpers.return_chan(state_24766__$1,inst_24764);
} else
{if((state_val_24767 === 7))
{var inst_24715 = (state_24766[11]);var inst_24720 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24715);var state_24766__$1 = state_24766;var statearr_24777_24816 = state_24766__$1;(statearr_24777_24816[2] = inst_24720);
(statearr_24777_24816[1] = 9);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 8))
{var inst_24715 = (state_24766[11]);var state_24766__$1 = state_24766;var statearr_24778_24817 = state_24766__$1;(statearr_24778_24817[2] = inst_24715);
(statearr_24778_24817[1] = 9);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 9))
{var inst_24723 = (state_24766[12]);var inst_24723__$1 = (state_24766[2]);var inst_24724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24723__$1,cljs.core.constant$keyword$228);var inst_24725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24723__$1,cljs.core.constant$keyword$227);var inst_24726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24723__$1,cljs.core.constant$keyword$226);var state_24766__$1 = (function (){var statearr_24779 = state_24766;(statearr_24779[12] = inst_24723__$1);
(statearr_24779[13] = inst_24725);
(statearr_24779[14] = inst_24726);
return statearr_24779;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24766__$1,10,inst_24724);
} else
{if((state_val_24767 === 10))
{var inst_24731 = (state_24766[15]);var inst_24730 = (state_24766[16]);var inst_24729 = (state_24766[2]);var inst_24730__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24729,0,null);var inst_24731__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24729,1,null);var inst_24732 = (inst_24730__$1 == null);var inst_24733 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24731__$1,change);var inst_24734 = (inst_24732) || (inst_24733);var state_24766__$1 = (function (){var statearr_24780 = state_24766;(statearr_24780[15] = inst_24731__$1);
(statearr_24780[16] = inst_24730__$1);
return statearr_24780;
})();if(cljs.core.truth_(inst_24734))
{var statearr_24781_24818 = state_24766__$1;(statearr_24781_24818[1] = 11);
} else
{var statearr_24782_24819 = state_24766__$1;(statearr_24782_24819[1] = 12);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 11))
{var inst_24730 = (state_24766[16]);var inst_24736 = (inst_24730 == null);var state_24766__$1 = state_24766;if(cljs.core.truth_(inst_24736))
{var statearr_24783_24820 = state_24766__$1;(statearr_24783_24820[1] = 14);
} else
{var statearr_24784_24821 = state_24766__$1;(statearr_24784_24821[1] = 15);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 12))
{var inst_24731 = (state_24766[15]);var inst_24745 = (state_24766[17]);var inst_24726 = (state_24766[14]);var inst_24745__$1 = (inst_24726.cljs$core$IFn$_invoke$arity$1 ? inst_24726.cljs$core$IFn$_invoke$arity$1(inst_24731) : inst_24726.call(null,inst_24731));var state_24766__$1 = (function (){var statearr_24785 = state_24766;(statearr_24785[17] = inst_24745__$1);
return statearr_24785;
})();if(cljs.core.truth_(inst_24745__$1))
{var statearr_24786_24822 = state_24766__$1;(statearr_24786_24822[1] = 17);
} else
{var statearr_24787_24823 = state_24766__$1;(statearr_24787_24823[1] = 18);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 13))
{var inst_24762 = (state_24766[2]);var state_24766__$1 = state_24766;var statearr_24788_24824 = state_24766__$1;(statearr_24788_24824[2] = inst_24762);
(statearr_24788_24824[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 14))
{var inst_24731 = (state_24766[15]);var inst_24738 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24731);var state_24766__$1 = state_24766;var statearr_24789_24825 = state_24766__$1;(statearr_24789_24825[2] = inst_24738);
(statearr_24789_24825[1] = 16);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 15))
{var state_24766__$1 = state_24766;var statearr_24790_24826 = state_24766__$1;(statearr_24790_24826[2] = null);
(statearr_24790_24826[1] = 16);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 16))
{var inst_24741 = (state_24766[2]);var inst_24742 = calc_state();var inst_24715 = inst_24742;var state_24766__$1 = (function (){var statearr_24791 = state_24766;(statearr_24791[11] = inst_24715);
(statearr_24791[18] = inst_24741);
return statearr_24791;
})();var statearr_24792_24827 = state_24766__$1;(statearr_24792_24827[2] = null);
(statearr_24792_24827[1] = 5);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 17))
{var inst_24745 = (state_24766[17]);var state_24766__$1 = state_24766;var statearr_24793_24828 = state_24766__$1;(statearr_24793_24828[2] = inst_24745);
(statearr_24793_24828[1] = 19);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 18))
{var inst_24731 = (state_24766[15]);var inst_24725 = (state_24766[13]);var inst_24726 = (state_24766[14]);var inst_24748 = cljs.core.empty_QMARK_(inst_24726);var inst_24749 = (inst_24725.cljs$core$IFn$_invoke$arity$1 ? inst_24725.cljs$core$IFn$_invoke$arity$1(inst_24731) : inst_24725.call(null,inst_24731));var inst_24750 = cljs.core.not(inst_24749);var inst_24751 = (inst_24748) && (inst_24750);var state_24766__$1 = state_24766;var statearr_24794_24829 = state_24766__$1;(statearr_24794_24829[2] = inst_24751);
(statearr_24794_24829[1] = 19);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 19))
{var inst_24753 = (state_24766[2]);var state_24766__$1 = state_24766;if(cljs.core.truth_(inst_24753))
{var statearr_24795_24830 = state_24766__$1;(statearr_24795_24830[1] = 20);
} else
{var statearr_24796_24831 = state_24766__$1;(statearr_24796_24831[1] = 21);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 20))
{var inst_24730 = (state_24766[16]);var state_24766__$1 = state_24766;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24766__$1,23,out,inst_24730);
} else
{if((state_val_24767 === 21))
{var state_24766__$1 = state_24766;var statearr_24797_24832 = state_24766__$1;(statearr_24797_24832[2] = null);
(statearr_24797_24832[1] = 22);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 22))
{var inst_24723 = (state_24766[12]);var inst_24759 = (state_24766[2]);var inst_24715 = inst_24723;var state_24766__$1 = (function (){var statearr_24798 = state_24766;(statearr_24798[19] = inst_24759);
(statearr_24798[11] = inst_24715);
return statearr_24798;
})();var statearr_24799_24833 = state_24766__$1;(statearr_24799_24833[2] = null);
(statearr_24799_24833[1] = 5);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24767 === 23))
{var inst_24756 = (state_24766[2]);var state_24766__$1 = state_24766;var statearr_24800_24834 = state_24766__$1;(statearr_24800_24834[2] = inst_24756);
(statearr_24800_24834[1] = 22);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_24804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24804[0] = state_machine__5507__auto__);
(statearr_24804[1] = 1);
return statearr_24804;
});
var state_machine__5507__auto____1 = (function (state_24766){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24766);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24805){if((e24805 instanceof Object))
{var ex__5510__auto__ = e24805;var statearr_24806_24835 = state_24766;(statearr_24806_24835[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24766);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e24805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__24836 = state_24766;
state_24766 = G__24836;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24766){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24807 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24808);
return statearr_24807;
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
cljs.core.async.Pub = (function (){var obj24838 = {};return obj24838;
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
return (function (p1__24839_SHARP_){if(cljs.core.truth_((p1__24839_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24839_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24839_SHARP_.call(null,topic))))
{return p1__24839_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24839_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24964 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24965){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24965 = meta24965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24964.cljs$lang$type = true;
cljs.core.async.t24964.cljs$lang$ctorStr = "cljs.core.async/t24964";
cljs.core.async.t24964.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24964");
});})(mults,ensure_mult))
;
cljs.core.async.t24964.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24964.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24964.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24964.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24964.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24964.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24966){var self__ = this;
var _24966__$1 = this;return self__.meta24965;
});})(mults,ensure_mult))
;
cljs.core.async.t24964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24966,meta24965__$1){var self__ = this;
var _24966__$1 = this;return (new cljs.core.async.t24964(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24965__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24964 = ((function (mults,ensure_mult){
return (function __GT_t24964(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24965){return (new cljs.core.async.t24964(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24965));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24964(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25040){var state_val_25041 = (state_25040[1]);if((state_val_25041 === 1))
{var state_25040__$1 = state_25040;var statearr_25042_25089 = state_25040__$1;(statearr_25042_25089[2] = null);
(statearr_25042_25089[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 2))
{var state_25040__$1 = state_25040;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25040__$1,4,ch);
} else
{if((state_val_25041 === 3))
{var inst_25038 = (state_25040[2]);var state_25040__$1 = state_25040;return cljs.core.async.impl.ioc_helpers.return_chan(state_25040__$1,inst_25038);
} else
{if((state_val_25041 === 4))
{var inst_24969 = (state_25040[7]);var inst_24969__$1 = (state_25040[2]);var inst_24970 = (inst_24969__$1 == null);var state_25040__$1 = (function (){var statearr_25043 = state_25040;(statearr_25043[7] = inst_24969__$1);
return statearr_25043;
})();if(cljs.core.truth_(inst_24970))
{var statearr_25044_25090 = state_25040__$1;(statearr_25044_25090[1] = 5);
} else
{var statearr_25045_25091 = state_25040__$1;(statearr_25045_25091[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 5))
{var inst_24976 = cljs.core.deref(mults);var inst_24977 = cljs.core.vals(inst_24976);var inst_24978 = cljs.core.seq(inst_24977);var inst_24979 = inst_24978;var inst_24980 = null;var inst_24981 = 0;var inst_24982 = 0;var state_25040__$1 = (function (){var statearr_25046 = state_25040;(statearr_25046[8] = inst_24979);
(statearr_25046[9] = inst_24980);
(statearr_25046[10] = inst_24981);
(statearr_25046[11] = inst_24982);
return statearr_25046;
})();var statearr_25047_25092 = state_25040__$1;(statearr_25047_25092[2] = null);
(statearr_25047_25092[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 6))
{var inst_25019 = (state_25040[12]);var inst_25017 = (state_25040[13]);var inst_24969 = (state_25040[7]);var inst_25017__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24969) : topic_fn.call(null,inst_24969));var inst_25018 = cljs.core.deref(mults);var inst_25019__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25018,inst_25017__$1);var state_25040__$1 = (function (){var statearr_25048 = state_25040;(statearr_25048[12] = inst_25019__$1);
(statearr_25048[13] = inst_25017__$1);
return statearr_25048;
})();if(cljs.core.truth_(inst_25019__$1))
{var statearr_25049_25093 = state_25040__$1;(statearr_25049_25093[1] = 19);
} else
{var statearr_25050_25094 = state_25040__$1;(statearr_25050_25094[1] = 20);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 7))
{var inst_25036 = (state_25040[2]);var state_25040__$1 = state_25040;var statearr_25051_25095 = state_25040__$1;(statearr_25051_25095[2] = inst_25036);
(statearr_25051_25095[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 8))
{var inst_24981 = (state_25040[10]);var inst_24982 = (state_25040[11]);var inst_24984 = (inst_24982 < inst_24981);var inst_24985 = inst_24984;var state_25040__$1 = state_25040;if(cljs.core.truth_(inst_24985))
{var statearr_25055_25096 = state_25040__$1;(statearr_25055_25096[1] = 10);
} else
{var statearr_25056_25097 = state_25040__$1;(statearr_25056_25097[1] = 11);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 9))
{var inst_25015 = (state_25040[2]);var state_25040__$1 = state_25040;var statearr_25057_25098 = state_25040__$1;(statearr_25057_25098[2] = inst_25015);
(statearr_25057_25098[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 10))
{var inst_24979 = (state_25040[8]);var inst_24980 = (state_25040[9]);var inst_24981 = (state_25040[10]);var inst_24982 = (state_25040[11]);var inst_24987 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24980,inst_24982);var inst_24988 = cljs.core.async.muxch_STAR_(inst_24987);var inst_24989 = cljs.core.async.close_BANG_(inst_24988);var inst_24990 = (inst_24982 + 1);var tmp25052 = inst_24979;var tmp25053 = inst_24980;var tmp25054 = inst_24981;var inst_24979__$1 = tmp25052;var inst_24980__$1 = tmp25053;var inst_24981__$1 = tmp25054;var inst_24982__$1 = inst_24990;var state_25040__$1 = (function (){var statearr_25058 = state_25040;(statearr_25058[8] = inst_24979__$1);
(statearr_25058[9] = inst_24980__$1);
(statearr_25058[10] = inst_24981__$1);
(statearr_25058[14] = inst_24989);
(statearr_25058[11] = inst_24982__$1);
return statearr_25058;
})();var statearr_25059_25099 = state_25040__$1;(statearr_25059_25099[2] = null);
(statearr_25059_25099[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 11))
{var inst_24979 = (state_25040[8]);var inst_24993 = (state_25040[15]);var inst_24993__$1 = cljs.core.seq(inst_24979);var state_25040__$1 = (function (){var statearr_25060 = state_25040;(statearr_25060[15] = inst_24993__$1);
return statearr_25060;
})();if(inst_24993__$1)
{var statearr_25061_25100 = state_25040__$1;(statearr_25061_25100[1] = 13);
} else
{var statearr_25062_25101 = state_25040__$1;(statearr_25062_25101[1] = 14);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 12))
{var inst_25013 = (state_25040[2]);var state_25040__$1 = state_25040;var statearr_25063_25102 = state_25040__$1;(statearr_25063_25102[2] = inst_25013);
(statearr_25063_25102[1] = 9);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 13))
{var inst_24993 = (state_25040[15]);var inst_24995 = cljs.core.chunked_seq_QMARK_(inst_24993);var state_25040__$1 = state_25040;if(inst_24995)
{var statearr_25064_25103 = state_25040__$1;(statearr_25064_25103[1] = 16);
} else
{var statearr_25065_25104 = state_25040__$1;(statearr_25065_25104[1] = 17);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 14))
{var state_25040__$1 = state_25040;var statearr_25066_25105 = state_25040__$1;(statearr_25066_25105[2] = null);
(statearr_25066_25105[1] = 15);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 15))
{var inst_25011 = (state_25040[2]);var state_25040__$1 = state_25040;var statearr_25067_25106 = state_25040__$1;(statearr_25067_25106[2] = inst_25011);
(statearr_25067_25106[1] = 12);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 16))
{var inst_24993 = (state_25040[15]);var inst_24997 = cljs.core.chunk_first(inst_24993);var inst_24998 = cljs.core.chunk_rest(inst_24993);var inst_24999 = cljs.core.count(inst_24997);var inst_24979 = inst_24998;var inst_24980 = inst_24997;var inst_24981 = inst_24999;var inst_24982 = 0;var state_25040__$1 = (function (){var statearr_25068 = state_25040;(statearr_25068[8] = inst_24979);
(statearr_25068[9] = inst_24980);
(statearr_25068[10] = inst_24981);
(statearr_25068[11] = inst_24982);
return statearr_25068;
})();var statearr_25069_25107 = state_25040__$1;(statearr_25069_25107[2] = null);
(statearr_25069_25107[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 17))
{var inst_24993 = (state_25040[15]);var inst_25002 = cljs.core.first(inst_24993);var inst_25003 = cljs.core.async.muxch_STAR_(inst_25002);var inst_25004 = cljs.core.async.close_BANG_(inst_25003);var inst_25005 = cljs.core.next(inst_24993);var inst_24979 = inst_25005;var inst_24980 = null;var inst_24981 = 0;var inst_24982 = 0;var state_25040__$1 = (function (){var statearr_25070 = state_25040;(statearr_25070[8] = inst_24979);
(statearr_25070[9] = inst_24980);
(statearr_25070[10] = inst_24981);
(statearr_25070[16] = inst_25004);
(statearr_25070[11] = inst_24982);
return statearr_25070;
})();var statearr_25071_25108 = state_25040__$1;(statearr_25071_25108[2] = null);
(statearr_25071_25108[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 18))
{var inst_25008 = (state_25040[2]);var state_25040__$1 = state_25040;var statearr_25072_25109 = state_25040__$1;(statearr_25072_25109[2] = inst_25008);
(statearr_25072_25109[1] = 15);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 19))
{var state_25040__$1 = state_25040;var statearr_25073_25110 = state_25040__$1;(statearr_25073_25110[2] = null);
(statearr_25073_25110[1] = 24);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 20))
{var state_25040__$1 = state_25040;var statearr_25074_25111 = state_25040__$1;(statearr_25074_25111[2] = null);
(statearr_25074_25111[1] = 21);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 21))
{var inst_25033 = (state_25040[2]);var state_25040__$1 = (function (){var statearr_25075 = state_25040;(statearr_25075[17] = inst_25033);
return statearr_25075;
})();var statearr_25076_25112 = state_25040__$1;(statearr_25076_25112[2] = null);
(statearr_25076_25112[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 22))
{var inst_25030 = (state_25040[2]);var state_25040__$1 = state_25040;var statearr_25077_25113 = state_25040__$1;(statearr_25077_25113[2] = inst_25030);
(statearr_25077_25113[1] = 21);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 23))
{var inst_25017 = (state_25040[13]);var inst_25021 = (state_25040[2]);var inst_25022 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25017);var state_25040__$1 = (function (){var statearr_25078 = state_25040;(statearr_25078[18] = inst_25021);
return statearr_25078;
})();var statearr_25079_25114 = state_25040__$1;(statearr_25079_25114[2] = inst_25022);
cljs.core.async.impl.ioc_helpers.process_exception(state_25040__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25041 === 24))
{var inst_25019 = (state_25040[12]);var inst_24969 = (state_25040[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25040,23,Object,null,22);var inst_25026 = cljs.core.async.muxch_STAR_(inst_25019);var state_25040__$1 = state_25040;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25040__$1,25,inst_25026,inst_24969);
} else
{if((state_val_25041 === 25))
{var inst_25028 = (state_25040[2]);var state_25040__$1 = state_25040;var statearr_25080_25115 = state_25040__$1;(statearr_25080_25115[2] = inst_25028);
cljs.core.async.impl.ioc_helpers.process_exception(state_25040__$1);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25084[0] = state_machine__5507__auto__);
(statearr_25084[1] = 1);
return statearr_25084;
});
var state_machine__5507__auto____1 = (function (state_25040){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25040);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25085){if((e25085 instanceof Object))
{var ex__5510__auto__ = e25085;var statearr_25086_25116 = state_25040;(statearr_25086_25116[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25040);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25117 = state_25040;
state_25040 = G__25117;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25040){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25087 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25088);
return statearr_25087;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25224){var state_val_25225 = (state_25224[1]);if((state_val_25225 === 1))
{var state_25224__$1 = state_25224;var statearr_25226_25255 = state_25224__$1;(statearr_25226_25255[2] = null);
(statearr_25226_25255[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 2))
{var inst_25187 = cljs.core.reset_BANG_(dctr,cnt);var inst_25188 = 0;var state_25224__$1 = (function (){var statearr_25227 = state_25224;(statearr_25227[7] = inst_25187);
(statearr_25227[8] = inst_25188);
return statearr_25227;
})();var statearr_25228_25256 = state_25224__$1;(statearr_25228_25256[2] = null);
(statearr_25228_25256[1] = 4);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 3))
{var inst_25222 = (state_25224[2]);var state_25224__$1 = state_25224;return cljs.core.async.impl.ioc_helpers.return_chan(state_25224__$1,inst_25222);
} else
{if((state_val_25225 === 4))
{var inst_25188 = (state_25224[8]);var inst_25190 = (inst_25188 < cnt);var state_25224__$1 = state_25224;if(cljs.core.truth_(inst_25190))
{var statearr_25229_25257 = state_25224__$1;(statearr_25229_25257[1] = 6);
} else
{var statearr_25230_25258 = state_25224__$1;(statearr_25230_25258[1] = 7);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 5))
{var inst_25208 = (state_25224[2]);var state_25224__$1 = (function (){var statearr_25231 = state_25224;(statearr_25231[9] = inst_25208);
return statearr_25231;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25224__$1,12,dchan);
} else
{if((state_val_25225 === 6))
{var state_25224__$1 = state_25224;var statearr_25232_25259 = state_25224__$1;(statearr_25232_25259[2] = null);
(statearr_25232_25259[1] = 11);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 7))
{var state_25224__$1 = state_25224;var statearr_25233_25260 = state_25224__$1;(statearr_25233_25260[2] = null);
(statearr_25233_25260[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 8))
{var inst_25206 = (state_25224[2]);var state_25224__$1 = state_25224;var statearr_25234_25261 = state_25224__$1;(statearr_25234_25261[2] = inst_25206);
(statearr_25234_25261[1] = 5);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 9))
{var inst_25188 = (state_25224[8]);var inst_25201 = (state_25224[2]);var inst_25202 = (inst_25188 + 1);var inst_25188__$1 = inst_25202;var state_25224__$1 = (function (){var statearr_25235 = state_25224;(statearr_25235[8] = inst_25188__$1);
(statearr_25235[10] = inst_25201);
return statearr_25235;
})();var statearr_25236_25262 = state_25224__$1;(statearr_25236_25262[2] = null);
(statearr_25236_25262[1] = 4);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 10))
{var inst_25192 = (state_25224[2]);var inst_25193 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25224__$1 = (function (){var statearr_25237 = state_25224;(statearr_25237[11] = inst_25192);
return statearr_25237;
})();var statearr_25238_25263 = state_25224__$1;(statearr_25238_25263[2] = inst_25193);
cljs.core.async.impl.ioc_helpers.process_exception(state_25224__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 11))
{var inst_25188 = (state_25224[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25224,10,Object,null,9);var inst_25197 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25188) : chs__$1.call(null,inst_25188));var inst_25198 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25188) : done.call(null,inst_25188));var inst_25199 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25197,inst_25198);var state_25224__$1 = state_25224;var statearr_25239_25264 = state_25224__$1;(statearr_25239_25264[2] = inst_25199);
cljs.core.async.impl.ioc_helpers.process_exception(state_25224__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 12))
{var inst_25210 = (state_25224[12]);var inst_25210__$1 = (state_25224[2]);var inst_25211 = cljs.core.some(cljs.core.nil_QMARK_,inst_25210__$1);var state_25224__$1 = (function (){var statearr_25240 = state_25224;(statearr_25240[12] = inst_25210__$1);
return statearr_25240;
})();if(cljs.core.truth_(inst_25211))
{var statearr_25241_25265 = state_25224__$1;(statearr_25241_25265[1] = 13);
} else
{var statearr_25242_25266 = state_25224__$1;(statearr_25242_25266[1] = 14);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 13))
{var inst_25213 = cljs.core.async.close_BANG_(out);var state_25224__$1 = state_25224;var statearr_25243_25267 = state_25224__$1;(statearr_25243_25267[2] = inst_25213);
(statearr_25243_25267[1] = 15);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 14))
{var inst_25210 = (state_25224[12]);var inst_25215 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25210);var state_25224__$1 = state_25224;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25224__$1,16,out,inst_25215);
} else
{if((state_val_25225 === 15))
{var inst_25220 = (state_25224[2]);var state_25224__$1 = state_25224;var statearr_25244_25268 = state_25224__$1;(statearr_25244_25268[2] = inst_25220);
(statearr_25244_25268[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25225 === 16))
{var inst_25217 = (state_25224[2]);var state_25224__$1 = (function (){var statearr_25245 = state_25224;(statearr_25245[13] = inst_25217);
return statearr_25245;
})();var statearr_25246_25269 = state_25224__$1;(statearr_25246_25269[2] = null);
(statearr_25246_25269[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25250[0] = state_machine__5507__auto__);
(statearr_25250[1] = 1);
return statearr_25250;
});
var state_machine__5507__auto____1 = (function (state_25224){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25224);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25251){if((e25251 instanceof Object))
{var ex__5510__auto__ = e25251;var statearr_25252_25270 = state_25224;(statearr_25252_25270[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25224);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25271 = state_25224;
state_25224 = G__25271;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25224){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25253 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25254);
return statearr_25253;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25355){var state_val_25356 = (state_25355[1]);if((state_val_25356 === 1))
{var inst_25326 = cljs.core.vec(chs);var inst_25327 = inst_25326;var state_25355__$1 = (function (){var statearr_25357 = state_25355;(statearr_25357[7] = inst_25327);
return statearr_25357;
})();var statearr_25358_25380 = state_25355__$1;(statearr_25358_25380[2] = null);
(statearr_25358_25380[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25356 === 2))
{var inst_25327 = (state_25355[7]);var inst_25329 = cljs.core.count(inst_25327);var inst_25330 = (inst_25329 > 0);var state_25355__$1 = state_25355;if(cljs.core.truth_(inst_25330))
{var statearr_25359_25381 = state_25355__$1;(statearr_25359_25381[1] = 4);
} else
{var statearr_25360_25382 = state_25355__$1;(statearr_25360_25382[1] = 5);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25356 === 3))
{var inst_25353 = (state_25355[2]);var state_25355__$1 = state_25355;return cljs.core.async.impl.ioc_helpers.return_chan(state_25355__$1,inst_25353);
} else
{if((state_val_25356 === 4))
{var inst_25327 = (state_25355[7]);var state_25355__$1 = state_25355;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25355__$1,7,inst_25327);
} else
{if((state_val_25356 === 5))
{var inst_25349 = cljs.core.async.close_BANG_(out);var state_25355__$1 = state_25355;var statearr_25361_25383 = state_25355__$1;(statearr_25361_25383[2] = inst_25349);
(statearr_25361_25383[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25356 === 6))
{var inst_25351 = (state_25355[2]);var state_25355__$1 = state_25355;var statearr_25362_25384 = state_25355__$1;(statearr_25362_25384[2] = inst_25351);
(statearr_25362_25384[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25356 === 7))
{var inst_25335 = (state_25355[8]);var inst_25334 = (state_25355[9]);var inst_25334__$1 = (state_25355[2]);var inst_25335__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25334__$1,0,null);var inst_25336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25334__$1,1,null);var inst_25337 = (inst_25335__$1 == null);var state_25355__$1 = (function (){var statearr_25363 = state_25355;(statearr_25363[10] = inst_25336);
(statearr_25363[8] = inst_25335__$1);
(statearr_25363[9] = inst_25334__$1);
return statearr_25363;
})();if(cljs.core.truth_(inst_25337))
{var statearr_25364_25385 = state_25355__$1;(statearr_25364_25385[1] = 8);
} else
{var statearr_25365_25386 = state_25355__$1;(statearr_25365_25386[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25356 === 8))
{var inst_25327 = (state_25355[7]);var inst_25336 = (state_25355[10]);var inst_25335 = (state_25355[8]);var inst_25334 = (state_25355[9]);var inst_25339 = (function (){var c = inst_25336;var v = inst_25335;var vec__25332 = inst_25334;var cs = inst_25327;return ((function (c,v,vec__25332,cs,inst_25327,inst_25336,inst_25335,inst_25334,state_val_25356){
return (function (p1__25272_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25272_SHARP_);
});
;})(c,v,vec__25332,cs,inst_25327,inst_25336,inst_25335,inst_25334,state_val_25356))
})();var inst_25340 = cljs.core.filterv(inst_25339,inst_25327);var inst_25327__$1 = inst_25340;var state_25355__$1 = (function (){var statearr_25366 = state_25355;(statearr_25366[7] = inst_25327__$1);
return statearr_25366;
})();var statearr_25367_25387 = state_25355__$1;(statearr_25367_25387[2] = null);
(statearr_25367_25387[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25356 === 9))
{var inst_25335 = (state_25355[8]);var state_25355__$1 = state_25355;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25355__$1,11,out,inst_25335);
} else
{if((state_val_25356 === 10))
{var inst_25347 = (state_25355[2]);var state_25355__$1 = state_25355;var statearr_25369_25388 = state_25355__$1;(statearr_25369_25388[2] = inst_25347);
(statearr_25369_25388[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25356 === 11))
{var inst_25327 = (state_25355[7]);var inst_25344 = (state_25355[2]);var tmp25368 = inst_25327;var inst_25327__$1 = tmp25368;var state_25355__$1 = (function (){var statearr_25370 = state_25355;(statearr_25370[11] = inst_25344);
(statearr_25370[7] = inst_25327__$1);
return statearr_25370;
})();var statearr_25371_25389 = state_25355__$1;(statearr_25371_25389[2] = null);
(statearr_25371_25389[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25375 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25375[0] = state_machine__5507__auto__);
(statearr_25375[1] = 1);
return statearr_25375;
});
var state_machine__5507__auto____1 = (function (state_25355){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25355);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25376){if((e25376 instanceof Object))
{var ex__5510__auto__ = e25376;var statearr_25377_25390 = state_25355;(statearr_25377_25390[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25355);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25391 = state_25355;
state_25355 = G__25391;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25355){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25378 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25379);
return statearr_25378;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25461){var state_val_25462 = (state_25461[1]);if((state_val_25462 === 1))
{var inst_25438 = 0;var state_25461__$1 = (function (){var statearr_25463 = state_25461;(statearr_25463[7] = inst_25438);
return statearr_25463;
})();var statearr_25464_25485 = state_25461__$1;(statearr_25464_25485[2] = null);
(statearr_25464_25485[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25462 === 2))
{var inst_25438 = (state_25461[7]);var inst_25440 = (inst_25438 < n);var state_25461__$1 = state_25461;if(cljs.core.truth_(inst_25440))
{var statearr_25465_25486 = state_25461__$1;(statearr_25465_25486[1] = 4);
} else
{var statearr_25466_25487 = state_25461__$1;(statearr_25466_25487[1] = 5);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25462 === 3))
{var inst_25458 = (state_25461[2]);var inst_25459 = cljs.core.async.close_BANG_(out);var state_25461__$1 = (function (){var statearr_25467 = state_25461;(statearr_25467[8] = inst_25458);
return statearr_25467;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25461__$1,inst_25459);
} else
{if((state_val_25462 === 4))
{var state_25461__$1 = state_25461;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25461__$1,7,ch);
} else
{if((state_val_25462 === 5))
{var state_25461__$1 = state_25461;var statearr_25468_25488 = state_25461__$1;(statearr_25468_25488[2] = null);
(statearr_25468_25488[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25462 === 6))
{var inst_25456 = (state_25461[2]);var state_25461__$1 = state_25461;var statearr_25469_25489 = state_25461__$1;(statearr_25469_25489[2] = inst_25456);
(statearr_25469_25489[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25462 === 7))
{var inst_25443 = (state_25461[9]);var inst_25443__$1 = (state_25461[2]);var inst_25444 = (inst_25443__$1 == null);var inst_25445 = cljs.core.not(inst_25444);var state_25461__$1 = (function (){var statearr_25470 = state_25461;(statearr_25470[9] = inst_25443__$1);
return statearr_25470;
})();if(inst_25445)
{var statearr_25471_25490 = state_25461__$1;(statearr_25471_25490[1] = 8);
} else
{var statearr_25472_25491 = state_25461__$1;(statearr_25472_25491[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25462 === 8))
{var inst_25443 = (state_25461[9]);var state_25461__$1 = state_25461;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25461__$1,11,out,inst_25443);
} else
{if((state_val_25462 === 9))
{var state_25461__$1 = state_25461;var statearr_25473_25492 = state_25461__$1;(statearr_25473_25492[2] = null);
(statearr_25473_25492[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25462 === 10))
{var inst_25453 = (state_25461[2]);var state_25461__$1 = state_25461;var statearr_25474_25493 = state_25461__$1;(statearr_25474_25493[2] = inst_25453);
(statearr_25474_25493[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25462 === 11))
{var inst_25438 = (state_25461[7]);var inst_25448 = (state_25461[2]);var inst_25449 = (inst_25438 + 1);var inst_25438__$1 = inst_25449;var state_25461__$1 = (function (){var statearr_25475 = state_25461;(statearr_25475[10] = inst_25448);
(statearr_25475[7] = inst_25438__$1);
return statearr_25475;
})();var statearr_25476_25494 = state_25461__$1;(statearr_25476_25494[2] = null);
(statearr_25476_25494[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25480 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25480[0] = state_machine__5507__auto__);
(statearr_25480[1] = 1);
return statearr_25480;
});
var state_machine__5507__auto____1 = (function (state_25461){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25461);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25481){if((e25481 instanceof Object))
{var ex__5510__auto__ = e25481;var statearr_25482_25495 = state_25461;(statearr_25482_25495[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25461);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25496 = state_25461;
state_25461 = G__25496;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25461){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25483 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25484);
return statearr_25483;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25568){var state_val_25569 = (state_25568[1]);if((state_val_25569 === 1))
{var inst_25545 = null;var state_25568__$1 = (function (){var statearr_25570 = state_25568;(statearr_25570[7] = inst_25545);
return statearr_25570;
})();var statearr_25571_25594 = state_25568__$1;(statearr_25571_25594[2] = null);
(statearr_25571_25594[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25569 === 2))
{var state_25568__$1 = state_25568;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25568__$1,4,ch);
} else
{if((state_val_25569 === 3))
{var inst_25565 = (state_25568[2]);var inst_25566 = cljs.core.async.close_BANG_(out);var state_25568__$1 = (function (){var statearr_25572 = state_25568;(statearr_25572[8] = inst_25565);
return statearr_25572;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25568__$1,inst_25566);
} else
{if((state_val_25569 === 4))
{var inst_25548 = (state_25568[9]);var inst_25548__$1 = (state_25568[2]);var inst_25549 = (inst_25548__$1 == null);var inst_25550 = cljs.core.not(inst_25549);var state_25568__$1 = (function (){var statearr_25573 = state_25568;(statearr_25573[9] = inst_25548__$1);
return statearr_25573;
})();if(inst_25550)
{var statearr_25574_25595 = state_25568__$1;(statearr_25574_25595[1] = 5);
} else
{var statearr_25575_25596 = state_25568__$1;(statearr_25575_25596[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25569 === 5))
{var inst_25545 = (state_25568[7]);var inst_25548 = (state_25568[9]);var inst_25552 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25548,inst_25545);var state_25568__$1 = state_25568;if(inst_25552)
{var statearr_25576_25597 = state_25568__$1;(statearr_25576_25597[1] = 8);
} else
{var statearr_25577_25598 = state_25568__$1;(statearr_25577_25598[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25569 === 6))
{var state_25568__$1 = state_25568;var statearr_25579_25599 = state_25568__$1;(statearr_25579_25599[2] = null);
(statearr_25579_25599[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25569 === 7))
{var inst_25563 = (state_25568[2]);var state_25568__$1 = state_25568;var statearr_25580_25600 = state_25568__$1;(statearr_25580_25600[2] = inst_25563);
(statearr_25580_25600[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25569 === 8))
{var inst_25545 = (state_25568[7]);var tmp25578 = inst_25545;var inst_25545__$1 = tmp25578;var state_25568__$1 = (function (){var statearr_25581 = state_25568;(statearr_25581[7] = inst_25545__$1);
return statearr_25581;
})();var statearr_25582_25601 = state_25568__$1;(statearr_25582_25601[2] = null);
(statearr_25582_25601[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25569 === 9))
{var inst_25548 = (state_25568[9]);var state_25568__$1 = state_25568;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25568__$1,11,out,inst_25548);
} else
{if((state_val_25569 === 10))
{var inst_25560 = (state_25568[2]);var state_25568__$1 = state_25568;var statearr_25583_25602 = state_25568__$1;(statearr_25583_25602[2] = inst_25560);
(statearr_25583_25602[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25569 === 11))
{var inst_25548 = (state_25568[9]);var inst_25557 = (state_25568[2]);var inst_25545 = inst_25548;var state_25568__$1 = (function (){var statearr_25584 = state_25568;(statearr_25584[7] = inst_25545);
(statearr_25584[10] = inst_25557);
return statearr_25584;
})();var statearr_25585_25603 = state_25568__$1;(statearr_25585_25603[2] = null);
(statearr_25585_25603[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25589 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25589[0] = state_machine__5507__auto__);
(statearr_25589[1] = 1);
return statearr_25589;
});
var state_machine__5507__auto____1 = (function (state_25568){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25568);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25590){if((e25590 instanceof Object))
{var ex__5510__auto__ = e25590;var statearr_25591_25604 = state_25568;(statearr_25591_25604[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25568);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25590;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25605 = state_25568;
state_25568 = G__25605;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25568){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25592 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25593);
return statearr_25592;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25710){var state_val_25711 = (state_25710[1]);if((state_val_25711 === 1))
{var inst_25673 = (new Array(n));var inst_25674 = inst_25673;var inst_25675 = 0;var state_25710__$1 = (function (){var statearr_25712 = state_25710;(statearr_25712[7] = inst_25674);
(statearr_25712[8] = inst_25675);
return statearr_25712;
})();var statearr_25713_25741 = state_25710__$1;(statearr_25713_25741[2] = null);
(statearr_25713_25741[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25711 === 2))
{var state_25710__$1 = state_25710;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25710__$1,4,ch);
} else
{if((state_val_25711 === 3))
{var inst_25708 = (state_25710[2]);var state_25710__$1 = state_25710;return cljs.core.async.impl.ioc_helpers.return_chan(state_25710__$1,inst_25708);
} else
{if((state_val_25711 === 4))
{var inst_25678 = (state_25710[9]);var inst_25678__$1 = (state_25710[2]);var inst_25679 = (inst_25678__$1 == null);var inst_25680 = cljs.core.not(inst_25679);var state_25710__$1 = (function (){var statearr_25714 = state_25710;(statearr_25714[9] = inst_25678__$1);
return statearr_25714;
})();if(inst_25680)
{var statearr_25715_25742 = state_25710__$1;(statearr_25715_25742[1] = 5);
} else
{var statearr_25716_25743 = state_25710__$1;(statearr_25716_25743[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25711 === 5))
{var inst_25674 = (state_25710[7]);var inst_25683 = (state_25710[10]);var inst_25678 = (state_25710[9]);var inst_25675 = (state_25710[8]);var inst_25682 = (inst_25674[inst_25675] = inst_25678);var inst_25683__$1 = (inst_25675 + 1);var inst_25684 = (inst_25683__$1 < n);var state_25710__$1 = (function (){var statearr_25717 = state_25710;(statearr_25717[11] = inst_25682);
(statearr_25717[10] = inst_25683__$1);
return statearr_25717;
})();if(cljs.core.truth_(inst_25684))
{var statearr_25718_25744 = state_25710__$1;(statearr_25718_25744[1] = 8);
} else
{var statearr_25719_25745 = state_25710__$1;(statearr_25719_25745[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25711 === 6))
{var inst_25675 = (state_25710[8]);var inst_25696 = (inst_25675 > 0);var state_25710__$1 = state_25710;if(cljs.core.truth_(inst_25696))
{var statearr_25721_25746 = state_25710__$1;(statearr_25721_25746[1] = 12);
} else
{var statearr_25722_25747 = state_25710__$1;(statearr_25722_25747[1] = 13);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25711 === 7))
{var inst_25706 = (state_25710[2]);var state_25710__$1 = state_25710;var statearr_25723_25748 = state_25710__$1;(statearr_25723_25748[2] = inst_25706);
(statearr_25723_25748[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25711 === 8))
{var inst_25674 = (state_25710[7]);var inst_25683 = (state_25710[10]);var tmp25720 = inst_25674;var inst_25674__$1 = tmp25720;var inst_25675 = inst_25683;var state_25710__$1 = (function (){var statearr_25724 = state_25710;(statearr_25724[7] = inst_25674__$1);
(statearr_25724[8] = inst_25675);
return statearr_25724;
})();var statearr_25725_25749 = state_25710__$1;(statearr_25725_25749[2] = null);
(statearr_25725_25749[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25711 === 9))
{var inst_25674 = (state_25710[7]);var inst_25688 = cljs.core.vec(inst_25674);var state_25710__$1 = state_25710;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25710__$1,11,out,inst_25688);
} else
{if((state_val_25711 === 10))
{var inst_25694 = (state_25710[2]);var state_25710__$1 = state_25710;var statearr_25726_25750 = state_25710__$1;(statearr_25726_25750[2] = inst_25694);
(statearr_25726_25750[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25711 === 11))
{var inst_25690 = (state_25710[2]);var inst_25691 = (new Array(n));var inst_25674 = inst_25691;var inst_25675 = 0;var state_25710__$1 = (function (){var statearr_25727 = state_25710;(statearr_25727[12] = inst_25690);
(statearr_25727[7] = inst_25674);
(statearr_25727[8] = inst_25675);
return statearr_25727;
})();var statearr_25728_25751 = state_25710__$1;(statearr_25728_25751[2] = null);
(statearr_25728_25751[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25711 === 12))
{var inst_25674 = (state_25710[7]);var inst_25698 = cljs.core.vec(inst_25674);var state_25710__$1 = state_25710;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25710__$1,15,out,inst_25698);
} else
{if((state_val_25711 === 13))
{var state_25710__$1 = state_25710;var statearr_25729_25752 = state_25710__$1;(statearr_25729_25752[2] = null);
(statearr_25729_25752[1] = 14);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25711 === 14))
{var inst_25703 = (state_25710[2]);var inst_25704 = cljs.core.async.close_BANG_(out);var state_25710__$1 = (function (){var statearr_25730 = state_25710;(statearr_25730[13] = inst_25703);
return statearr_25730;
})();var statearr_25731_25753 = state_25710__$1;(statearr_25731_25753[2] = inst_25704);
(statearr_25731_25753[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25711 === 15))
{var inst_25700 = (state_25710[2]);var state_25710__$1 = state_25710;var statearr_25732_25754 = state_25710__$1;(statearr_25732_25754[2] = inst_25700);
(statearr_25732_25754[1] = 14);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25736[0] = state_machine__5507__auto__);
(statearr_25736[1] = 1);
return statearr_25736;
});
var state_machine__5507__auto____1 = (function (state_25710){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25710);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25737){if((e25737 instanceof Object))
{var ex__5510__auto__ = e25737;var statearr_25738_25755 = state_25710;(statearr_25738_25755[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25710);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25756 = state_25710;
state_25710 = G__25756;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25710){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25739 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25740);
return statearr_25739;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25869){var state_val_25870 = (state_25869[1]);if((state_val_25870 === 1))
{var inst_25828 = [];var inst_25829 = inst_25828;var inst_25830 = cljs.core.constant$keyword$229;var state_25869__$1 = (function (){var statearr_25871 = state_25869;(statearr_25871[7] = inst_25829);
(statearr_25871[8] = inst_25830);
return statearr_25871;
})();var statearr_25872_25900 = state_25869__$1;(statearr_25872_25900[2] = null);
(statearr_25872_25900[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25870 === 2))
{var state_25869__$1 = state_25869;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25869__$1,4,ch);
} else
{if((state_val_25870 === 3))
{var inst_25867 = (state_25869[2]);var state_25869__$1 = state_25869;return cljs.core.async.impl.ioc_helpers.return_chan(state_25869__$1,inst_25867);
} else
{if((state_val_25870 === 4))
{var inst_25833 = (state_25869[9]);var inst_25833__$1 = (state_25869[2]);var inst_25834 = (inst_25833__$1 == null);var inst_25835 = cljs.core.not(inst_25834);var state_25869__$1 = (function (){var statearr_25873 = state_25869;(statearr_25873[9] = inst_25833__$1);
return statearr_25873;
})();if(inst_25835)
{var statearr_25874_25901 = state_25869__$1;(statearr_25874_25901[1] = 5);
} else
{var statearr_25875_25902 = state_25869__$1;(statearr_25875_25902[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25870 === 5))
{var inst_25837 = (state_25869[10]);var inst_25833 = (state_25869[9]);var inst_25830 = (state_25869[8]);var inst_25837__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25833) : f.call(null,inst_25833));var inst_25838 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25837__$1,inst_25830);var inst_25839 = cljs.core.keyword_identical_QMARK_(inst_25830,cljs.core.constant$keyword$229);var inst_25840 = (inst_25838) || (inst_25839);var state_25869__$1 = (function (){var statearr_25876 = state_25869;(statearr_25876[10] = inst_25837__$1);
return statearr_25876;
})();if(cljs.core.truth_(inst_25840))
{var statearr_25877_25903 = state_25869__$1;(statearr_25877_25903[1] = 8);
} else
{var statearr_25878_25904 = state_25869__$1;(statearr_25878_25904[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25870 === 6))
{var inst_25829 = (state_25869[7]);var inst_25854 = inst_25829.length;var inst_25855 = (inst_25854 > 0);var state_25869__$1 = state_25869;if(cljs.core.truth_(inst_25855))
{var statearr_25880_25905 = state_25869__$1;(statearr_25880_25905[1] = 12);
} else
{var statearr_25881_25906 = state_25869__$1;(statearr_25881_25906[1] = 13);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25870 === 7))
{var inst_25865 = (state_25869[2]);var state_25869__$1 = state_25869;var statearr_25882_25907 = state_25869__$1;(statearr_25882_25907[2] = inst_25865);
(statearr_25882_25907[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25870 === 8))
{var inst_25829 = (state_25869[7]);var inst_25837 = (state_25869[10]);var inst_25833 = (state_25869[9]);var inst_25842 = inst_25829.push(inst_25833);var tmp25879 = inst_25829;var inst_25829__$1 = tmp25879;var inst_25830 = inst_25837;var state_25869__$1 = (function (){var statearr_25883 = state_25869;(statearr_25883[7] = inst_25829__$1);
(statearr_25883[11] = inst_25842);
(statearr_25883[8] = inst_25830);
return statearr_25883;
})();var statearr_25884_25908 = state_25869__$1;(statearr_25884_25908[2] = null);
(statearr_25884_25908[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25870 === 9))
{var inst_25829 = (state_25869[7]);var inst_25845 = cljs.core.vec(inst_25829);var state_25869__$1 = state_25869;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25869__$1,11,out,inst_25845);
} else
{if((state_val_25870 === 10))
{var inst_25852 = (state_25869[2]);var state_25869__$1 = state_25869;var statearr_25885_25909 = state_25869__$1;(statearr_25885_25909[2] = inst_25852);
(statearr_25885_25909[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25870 === 11))
{var inst_25837 = (state_25869[10]);var inst_25833 = (state_25869[9]);var inst_25847 = (state_25869[2]);var inst_25848 = [];var inst_25849 = inst_25848.push(inst_25833);var inst_25829 = inst_25848;var inst_25830 = inst_25837;var state_25869__$1 = (function (){var statearr_25886 = state_25869;(statearr_25886[7] = inst_25829);
(statearr_25886[12] = inst_25847);
(statearr_25886[13] = inst_25849);
(statearr_25886[8] = inst_25830);
return statearr_25886;
})();var statearr_25887_25910 = state_25869__$1;(statearr_25887_25910[2] = null);
(statearr_25887_25910[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25870 === 12))
{var inst_25829 = (state_25869[7]);var inst_25857 = cljs.core.vec(inst_25829);var state_25869__$1 = state_25869;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25869__$1,15,out,inst_25857);
} else
{if((state_val_25870 === 13))
{var state_25869__$1 = state_25869;var statearr_25888_25911 = state_25869__$1;(statearr_25888_25911[2] = null);
(statearr_25888_25911[1] = 14);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25870 === 14))
{var inst_25862 = (state_25869[2]);var inst_25863 = cljs.core.async.close_BANG_(out);var state_25869__$1 = (function (){var statearr_25889 = state_25869;(statearr_25889[14] = inst_25862);
return statearr_25889;
})();var statearr_25890_25912 = state_25869__$1;(statearr_25890_25912[2] = inst_25863);
(statearr_25890_25912[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25870 === 15))
{var inst_25859 = (state_25869[2]);var state_25869__$1 = state_25869;var statearr_25891_25913 = state_25869__$1;(statearr_25891_25913[2] = inst_25859);
(statearr_25891_25913[1] = 14);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25895[0] = state_machine__5507__auto__);
(statearr_25895[1] = 1);
return statearr_25895;
});
var state_machine__5507__auto____1 = (function (state_25869){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25869);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25896){if((e25896 instanceof Object))
{var ex__5510__auto__ = e25896;var statearr_25897_25914 = state_25869;(statearr_25897_25914[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25869);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25896;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25915 = state_25869;
state_25869 = G__25915;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25869){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25898 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25899);
return statearr_25898;
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
