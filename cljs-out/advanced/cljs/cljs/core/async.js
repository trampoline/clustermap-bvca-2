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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23541 = (function (f,fn_handler,meta23542){
this.f = f;
this.fn_handler = fn_handler;
this.meta23542 = meta23542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23541.cljs$lang$type = true;
cljs.core.async.t23541.cljs$lang$ctorStr = "cljs.core.async/t23541";
cljs.core.async.t23541.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23541");
});
cljs.core.async.t23541.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23543){var self__ = this;
var _23543__$1 = this;return self__.meta23542;
});
cljs.core.async.t23541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23543,meta23542__$1){var self__ = this;
var _23543__$1 = this;return (new cljs.core.async.t23541(self__.f,self__.fn_handler,meta23542__$1));
});
cljs.core.async.__GT_t23541 = (function __GT_t23541(f__$1,fn_handler__$1,meta23542){return (new cljs.core.async.t23541(f__$1,fn_handler__$1,meta23542));
});
}
return (new cljs.core.async.t23541(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23545 = buff;if(G__23545)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23545.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23545.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23545);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23545);
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
{var val_23546 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23546) : fn1.call(null,val_23546));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23546) : fn1.call(null,val_23546));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23547 = n;var x_23548 = 0;while(true){
if((x_23548 < n__4248__auto___23547))
{(a[x_23548] = 0);
{
var G__23549 = (x_23548 + 1);
x_23548 = G__23549;
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
var G__23550 = (i + 1);
i = G__23550;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23554 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23554 = (function (flag,alt_flag,meta23555){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23555 = meta23555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23554.cljs$lang$type = true;
cljs.core.async.t23554.cljs$lang$ctorStr = "cljs.core.async/t23554";
cljs.core.async.t23554.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23554");
});
cljs.core.async.t23554.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23556){var self__ = this;
var _23556__$1 = this;return self__.meta23555;
});
cljs.core.async.t23554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23556,meta23555__$1){var self__ = this;
var _23556__$1 = this;return (new cljs.core.async.t23554(self__.flag,self__.alt_flag,meta23555__$1));
});
cljs.core.async.__GT_t23554 = (function __GT_t23554(flag__$1,alt_flag__$1,meta23555){return (new cljs.core.async.t23554(flag__$1,alt_flag__$1,meta23555));
});
}
return (new cljs.core.async.t23554(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23560 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23560 = (function (cb,flag,alt_handler,meta23561){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23561 = meta23561;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23560.cljs$lang$type = true;
cljs.core.async.t23560.cljs$lang$ctorStr = "cljs.core.async/t23560";
cljs.core.async.t23560.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23560");
});
cljs.core.async.t23560.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23562){var self__ = this;
var _23562__$1 = this;return self__.meta23561;
});
cljs.core.async.t23560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23562,meta23561__$1){var self__ = this;
var _23562__$1 = this;return (new cljs.core.async.t23560(self__.cb,self__.flag,self__.alt_handler,meta23561__$1));
});
cljs.core.async.__GT_t23560 = (function __GT_t23560(cb__$1,flag__$1,alt_handler__$1,meta23561){return (new cljs.core.async.t23560(cb__$1,flag__$1,alt_handler__$1,meta23561));
});
}
return (new cljs.core.async.t23560(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23563_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23563_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23563_SHARP_,port], null)));
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
var G__23564 = (i + 1);
i = G__23564;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$214))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$214], null));
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
var alts_BANG___delegate = function (ports,p__23565){var map__23567 = p__23565;var map__23567__$1 = ((cljs.core.seq_QMARK_(map__23567))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23567):map__23567);var opts = map__23567__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23565 = null;if (arguments.length > 1) {
  p__23565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23565);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23568){
var ports = cljs.core.first(arglist__23568);
var p__23565 = cljs.core.rest(arglist__23568);
return alts_BANG___delegate(ports,p__23565);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23576 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23576 = (function (ch,f,map_LT_,meta23577){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23577 = meta23577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23576.cljs$lang$type = true;
cljs.core.async.t23576.cljs$lang$ctorStr = "cljs.core.async/t23576";
cljs.core.async.t23576.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23576");
});
cljs.core.async.t23576.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23576.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23579 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23579 = (function (fn1,_,meta23577,ch,f,map_LT_,meta23580){
this.fn1 = fn1;
this._ = _;
this.meta23577 = meta23577;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23580 = meta23580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23579.cljs$lang$type = true;
cljs.core.async.t23579.cljs$lang$ctorStr = "cljs.core.async/t23579";
cljs.core.async.t23579.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23579");
});
cljs.core.async.t23579.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23579.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23569_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23569_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23569_SHARP_) : self__.f.call(null,p1__23569_SHARP_)))) : f1.call(null,(((p1__23569_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23569_SHARP_) : self__.f.call(null,p1__23569_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23581){var self__ = this;
var _23581__$1 = this;return self__.meta23580;
});
cljs.core.async.t23579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23581,meta23580__$1){var self__ = this;
var _23581__$1 = this;return (new cljs.core.async.t23579(self__.fn1,self__._,self__.meta23577,self__.ch,self__.f,self__.map_LT_,meta23580__$1));
});
cljs.core.async.__GT_t23579 = (function __GT_t23579(fn1__$1,___$2,meta23577__$1,ch__$2,f__$2,map_LT___$2,meta23580){return (new cljs.core.async.t23579(fn1__$1,___$2,meta23577__$1,ch__$2,f__$2,map_LT___$2,meta23580));
});
}
return (new cljs.core.async.t23579(fn1,___$1,self__.meta23577,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23576.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23578){var self__ = this;
var _23578__$1 = this;return self__.meta23577;
});
cljs.core.async.t23576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23578,meta23577__$1){var self__ = this;
var _23578__$1 = this;return (new cljs.core.async.t23576(self__.ch,self__.f,self__.map_LT_,meta23577__$1));
});
cljs.core.async.__GT_t23576 = (function __GT_t23576(ch__$1,f__$1,map_LT___$1,meta23577){return (new cljs.core.async.t23576(ch__$1,f__$1,map_LT___$1,meta23577));
});
}
return (new cljs.core.async.t23576(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23585 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23585 = (function (ch,f,map_GT_,meta23586){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23586 = meta23586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23585.cljs$lang$type = true;
cljs.core.async.t23585.cljs$lang$ctorStr = "cljs.core.async/t23585";
cljs.core.async.t23585.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23585");
});
cljs.core.async.t23585.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23585.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23585.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23587){var self__ = this;
var _23587__$1 = this;return self__.meta23586;
});
cljs.core.async.t23585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23587,meta23586__$1){var self__ = this;
var _23587__$1 = this;return (new cljs.core.async.t23585(self__.ch,self__.f,self__.map_GT_,meta23586__$1));
});
cljs.core.async.__GT_t23585 = (function __GT_t23585(ch__$1,f__$1,map_GT___$1,meta23586){return (new cljs.core.async.t23585(ch__$1,f__$1,map_GT___$1,meta23586));
});
}
return (new cljs.core.async.t23585(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23591 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23591 = (function (ch,p,filter_GT_,meta23592){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23592 = meta23592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23591.cljs$lang$type = true;
cljs.core.async.t23591.cljs$lang$ctorStr = "cljs.core.async/t23591";
cljs.core.async.t23591.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23591");
});
cljs.core.async.t23591.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23591.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23591.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23593){var self__ = this;
var _23593__$1 = this;return self__.meta23592;
});
cljs.core.async.t23591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23593,meta23592__$1){var self__ = this;
var _23593__$1 = this;return (new cljs.core.async.t23591(self__.ch,self__.p,self__.filter_GT_,meta23592__$1));
});
cljs.core.async.__GT_t23591 = (function __GT_t23591(ch__$1,p__$1,filter_GT___$1,meta23592){return (new cljs.core.async.t23591(ch__$1,p__$1,filter_GT___$1,meta23592));
});
}
return (new cljs.core.async.t23591(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23655){var state_val_23656 = (state_23655[1]);if((state_val_23656 === 1))
{var state_23655__$1 = state_23655;var statearr_23657_23677 = state_23655__$1;(statearr_23657_23677[2] = null);
(statearr_23657_23677[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23656 === 2))
{var state_23655__$1 = state_23655;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23655__$1,4,ch);
} else
{if((state_val_23656 === 3))
{var inst_23653 = (state_23655[2]);var state_23655__$1 = state_23655;return cljs.core.async.impl.ioc_helpers.return_chan(state_23655__$1,inst_23653);
} else
{if((state_val_23656 === 4))
{var inst_23637 = (state_23655[7]);var inst_23637__$1 = (state_23655[2]);var inst_23638 = (inst_23637__$1 == null);var state_23655__$1 = (function (){var statearr_23658 = state_23655;(statearr_23658[7] = inst_23637__$1);
return statearr_23658;
})();if(cljs.core.truth_(inst_23638))
{var statearr_23659_23678 = state_23655__$1;(statearr_23659_23678[1] = 5);
} else
{var statearr_23660_23679 = state_23655__$1;(statearr_23660_23679[1] = 6);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_23656 === 5))
{var inst_23640 = cljs.core.async.close_BANG_(out);var state_23655__$1 = state_23655;var statearr_23661_23680 = state_23655__$1;(statearr_23661_23680[2] = inst_23640);
(statearr_23661_23680[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23656 === 6))
{var inst_23637 = (state_23655[7]);var inst_23642 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23637) : p.call(null,inst_23637));var state_23655__$1 = state_23655;if(cljs.core.truth_(inst_23642))
{var statearr_23662_23681 = state_23655__$1;(statearr_23662_23681[1] = 8);
} else
{var statearr_23663_23682 = state_23655__$1;(statearr_23663_23682[1] = 9);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_23656 === 7))
{var inst_23651 = (state_23655[2]);var state_23655__$1 = state_23655;var statearr_23664_23683 = state_23655__$1;(statearr_23664_23683[2] = inst_23651);
(statearr_23664_23683[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23656 === 8))
{var inst_23637 = (state_23655[7]);var state_23655__$1 = state_23655;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23655__$1,11,out,inst_23637);
} else
{if((state_val_23656 === 9))
{var state_23655__$1 = state_23655;var statearr_23665_23684 = state_23655__$1;(statearr_23665_23684[2] = null);
(statearr_23665_23684[1] = 10);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23656 === 10))
{var inst_23648 = (state_23655[2]);var state_23655__$1 = (function (){var statearr_23666 = state_23655;(statearr_23666[8] = inst_23648);
return statearr_23666;
})();var statearr_23667_23685 = state_23655__$1;(statearr_23667_23685[2] = null);
(statearr_23667_23685[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23656 === 11))
{var inst_23645 = (state_23655[2]);var state_23655__$1 = state_23655;var statearr_23668_23686 = state_23655__$1;(statearr_23668_23686[2] = inst_23645);
(statearr_23668_23686[1] = 10);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_23672 = [null,null,null,null,null,null,null,null,null];(statearr_23672[0] = state_machine__5507__auto__);
(statearr_23672[1] = 1);
return statearr_23672;
});
var state_machine__5507__auto____1 = (function (state_23655){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23655);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23673){if((e23673 instanceof Object))
{var ex__5510__auto__ = e23673;var statearr_23674_23687 = state_23655;(statearr_23674_23687[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23655);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e23673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__23688 = state_23655;
state_23655 = G__23688;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23655){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23675 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23676);
return statearr_23675;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23840){var state_val_23841 = (state_23840[1]);if((state_val_23841 === 1))
{var state_23840__$1 = state_23840;var statearr_23842_23879 = state_23840__$1;(statearr_23842_23879[2] = null);
(statearr_23842_23879[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 2))
{var state_23840__$1 = state_23840;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23840__$1,4,in$);
} else
{if((state_val_23841 === 3))
{var inst_23838 = (state_23840[2]);var state_23840__$1 = state_23840;return cljs.core.async.impl.ioc_helpers.return_chan(state_23840__$1,inst_23838);
} else
{if((state_val_23841 === 4))
{var inst_23786 = (state_23840[7]);var inst_23786__$1 = (state_23840[2]);var inst_23787 = (inst_23786__$1 == null);var state_23840__$1 = (function (){var statearr_23843 = state_23840;(statearr_23843[7] = inst_23786__$1);
return statearr_23843;
})();if(cljs.core.truth_(inst_23787))
{var statearr_23844_23880 = state_23840__$1;(statearr_23844_23880[1] = 5);
} else
{var statearr_23845_23881 = state_23840__$1;(statearr_23845_23881[1] = 6);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 5))
{var inst_23789 = cljs.core.async.close_BANG_(out);var state_23840__$1 = state_23840;var statearr_23846_23882 = state_23840__$1;(statearr_23846_23882[2] = inst_23789);
(statearr_23846_23882[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 6))
{var inst_23786 = (state_23840[7]);var inst_23791 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23786) : f.call(null,inst_23786));var inst_23796 = cljs.core.seq(inst_23791);var inst_23797 = inst_23796;var inst_23798 = null;var inst_23799 = 0;var inst_23800 = 0;var state_23840__$1 = (function (){var statearr_23847 = state_23840;(statearr_23847[8] = inst_23798);
(statearr_23847[9] = inst_23799);
(statearr_23847[10] = inst_23797);
(statearr_23847[11] = inst_23800);
return statearr_23847;
})();var statearr_23848_23883 = state_23840__$1;(statearr_23848_23883[2] = null);
(statearr_23848_23883[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 7))
{var inst_23836 = (state_23840[2]);var state_23840__$1 = state_23840;var statearr_23849_23884 = state_23840__$1;(statearr_23849_23884[2] = inst_23836);
(statearr_23849_23884[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 8))
{var inst_23799 = (state_23840[9]);var inst_23800 = (state_23840[11]);var inst_23802 = (inst_23800 < inst_23799);var inst_23803 = inst_23802;var state_23840__$1 = state_23840;if(cljs.core.truth_(inst_23803))
{var statearr_23850_23885 = state_23840__$1;(statearr_23850_23885[1] = 10);
} else
{var statearr_23851_23886 = state_23840__$1;(statearr_23851_23886[1] = 11);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 9))
{var inst_23833 = (state_23840[2]);var state_23840__$1 = (function (){var statearr_23852 = state_23840;(statearr_23852[12] = inst_23833);
return statearr_23852;
})();var statearr_23853_23887 = state_23840__$1;(statearr_23853_23887[2] = null);
(statearr_23853_23887[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 10))
{var inst_23798 = (state_23840[8]);var inst_23800 = (state_23840[11]);var inst_23805 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23798,inst_23800);var state_23840__$1 = state_23840;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23840__$1,13,out,inst_23805);
} else
{if((state_val_23841 === 11))
{var inst_23797 = (state_23840[10]);var inst_23811 = (state_23840[13]);var inst_23811__$1 = cljs.core.seq(inst_23797);var state_23840__$1 = (function (){var statearr_23857 = state_23840;(statearr_23857[13] = inst_23811__$1);
return statearr_23857;
})();if(inst_23811__$1)
{var statearr_23858_23888 = state_23840__$1;(statearr_23858_23888[1] = 14);
} else
{var statearr_23859_23889 = state_23840__$1;(statearr_23859_23889[1] = 15);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 12))
{var inst_23831 = (state_23840[2]);var state_23840__$1 = state_23840;var statearr_23860_23890 = state_23840__$1;(statearr_23860_23890[2] = inst_23831);
(statearr_23860_23890[1] = 9);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 13))
{var inst_23798 = (state_23840[8]);var inst_23799 = (state_23840[9]);var inst_23797 = (state_23840[10]);var inst_23800 = (state_23840[11]);var inst_23807 = (state_23840[2]);var inst_23808 = (inst_23800 + 1);var tmp23854 = inst_23798;var tmp23855 = inst_23799;var tmp23856 = inst_23797;var inst_23797__$1 = tmp23856;var inst_23798__$1 = tmp23854;var inst_23799__$1 = tmp23855;var inst_23800__$1 = inst_23808;var state_23840__$1 = (function (){var statearr_23861 = state_23840;(statearr_23861[8] = inst_23798__$1);
(statearr_23861[9] = inst_23799__$1);
(statearr_23861[14] = inst_23807);
(statearr_23861[10] = inst_23797__$1);
(statearr_23861[11] = inst_23800__$1);
return statearr_23861;
})();var statearr_23862_23891 = state_23840__$1;(statearr_23862_23891[2] = null);
(statearr_23862_23891[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 14))
{var inst_23811 = (state_23840[13]);var inst_23813 = cljs.core.chunked_seq_QMARK_(inst_23811);var state_23840__$1 = state_23840;if(inst_23813)
{var statearr_23863_23892 = state_23840__$1;(statearr_23863_23892[1] = 17);
} else
{var statearr_23864_23893 = state_23840__$1;(statearr_23864_23893[1] = 18);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 15))
{var state_23840__$1 = state_23840;var statearr_23865_23894 = state_23840__$1;(statearr_23865_23894[2] = null);
(statearr_23865_23894[1] = 16);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 16))
{var inst_23829 = (state_23840[2]);var state_23840__$1 = state_23840;var statearr_23866_23895 = state_23840__$1;(statearr_23866_23895[2] = inst_23829);
(statearr_23866_23895[1] = 12);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 17))
{var inst_23811 = (state_23840[13]);var inst_23815 = cljs.core.chunk_first(inst_23811);var inst_23816 = cljs.core.chunk_rest(inst_23811);var inst_23817 = cljs.core.count(inst_23815);var inst_23797 = inst_23816;var inst_23798 = inst_23815;var inst_23799 = inst_23817;var inst_23800 = 0;var state_23840__$1 = (function (){var statearr_23867 = state_23840;(statearr_23867[8] = inst_23798);
(statearr_23867[9] = inst_23799);
(statearr_23867[10] = inst_23797);
(statearr_23867[11] = inst_23800);
return statearr_23867;
})();var statearr_23868_23896 = state_23840__$1;(statearr_23868_23896[2] = null);
(statearr_23868_23896[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 18))
{var inst_23811 = (state_23840[13]);var inst_23820 = cljs.core.first(inst_23811);var state_23840__$1 = state_23840;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23840__$1,20,out,inst_23820);
} else
{if((state_val_23841 === 19))
{var inst_23826 = (state_23840[2]);var state_23840__$1 = state_23840;var statearr_23869_23897 = state_23840__$1;(statearr_23869_23897[2] = inst_23826);
(statearr_23869_23897[1] = 16);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23841 === 20))
{var inst_23811 = (state_23840[13]);var inst_23822 = (state_23840[2]);var inst_23823 = cljs.core.next(inst_23811);var inst_23797 = inst_23823;var inst_23798 = null;var inst_23799 = 0;var inst_23800 = 0;var state_23840__$1 = (function (){var statearr_23870 = state_23840;(statearr_23870[8] = inst_23798);
(statearr_23870[9] = inst_23799);
(statearr_23870[10] = inst_23797);
(statearr_23870[15] = inst_23822);
(statearr_23870[11] = inst_23800);
return statearr_23870;
})();var statearr_23871_23898 = state_23840__$1;(statearr_23871_23898[2] = null);
(statearr_23871_23898[1] = 8);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_23875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23875[0] = state_machine__5507__auto__);
(statearr_23875[1] = 1);
return statearr_23875;
});
var state_machine__5507__auto____1 = (function (state_23840){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23840);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23876){if((e23876 instanceof Object))
{var ex__5510__auto__ = e23876;var statearr_23877_23899 = state_23840;(statearr_23877_23899[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23840);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e23876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__23900 = state_23840;
state_23840 = G__23900;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23840){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23878 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23878;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23960){var state_val_23961 = (state_23960[1]);if((state_val_23961 === 1))
{var state_23960__$1 = state_23960;var statearr_23962_23982 = state_23960__$1;(statearr_23962_23982[2] = null);
(statearr_23962_23982[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23961 === 2))
{var state_23960__$1 = state_23960;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23960__$1,4,from);
} else
{if((state_val_23961 === 3))
{var inst_23958 = (state_23960[2]);var state_23960__$1 = state_23960;return cljs.core.async.impl.ioc_helpers.return_chan(state_23960__$1,inst_23958);
} else
{if((state_val_23961 === 4))
{var inst_23943 = (state_23960[7]);var inst_23943__$1 = (state_23960[2]);var inst_23944 = (inst_23943__$1 == null);var state_23960__$1 = (function (){var statearr_23963 = state_23960;(statearr_23963[7] = inst_23943__$1);
return statearr_23963;
})();if(cljs.core.truth_(inst_23944))
{var statearr_23964_23983 = state_23960__$1;(statearr_23964_23983[1] = 5);
} else
{var statearr_23965_23984 = state_23960__$1;(statearr_23965_23984[1] = 6);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_23961 === 5))
{var state_23960__$1 = state_23960;if(cljs.core.truth_(close_QMARK_))
{var statearr_23966_23985 = state_23960__$1;(statearr_23966_23985[1] = 8);
} else
{var statearr_23967_23986 = state_23960__$1;(statearr_23967_23986[1] = 9);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_23961 === 6))
{var inst_23943 = (state_23960[7]);var state_23960__$1 = state_23960;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23960__$1,11,to,inst_23943);
} else
{if((state_val_23961 === 7))
{var inst_23956 = (state_23960[2]);var state_23960__$1 = state_23960;var statearr_23968_23987 = state_23960__$1;(statearr_23968_23987[2] = inst_23956);
(statearr_23968_23987[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23961 === 8))
{var inst_23947 = cljs.core.async.close_BANG_(to);var state_23960__$1 = state_23960;var statearr_23969_23988 = state_23960__$1;(statearr_23969_23988[2] = inst_23947);
(statearr_23969_23988[1] = 10);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23961 === 9))
{var state_23960__$1 = state_23960;var statearr_23970_23989 = state_23960__$1;(statearr_23970_23989[2] = null);
(statearr_23970_23989[1] = 10);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23961 === 10))
{var inst_23950 = (state_23960[2]);var state_23960__$1 = state_23960;var statearr_23971_23990 = state_23960__$1;(statearr_23971_23990[2] = inst_23950);
(statearr_23971_23990[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_23961 === 11))
{var inst_23953 = (state_23960[2]);var state_23960__$1 = (function (){var statearr_23972 = state_23960;(statearr_23972[8] = inst_23953);
return statearr_23972;
})();var statearr_23973_23991 = state_23960__$1;(statearr_23973_23991[2] = null);
(statearr_23973_23991[1] = 2);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_23977 = [null,null,null,null,null,null,null,null,null];(statearr_23977[0] = state_machine__5507__auto__);
(statearr_23977[1] = 1);
return statearr_23977;
});
var state_machine__5507__auto____1 = (function (state_23960){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23960);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23978){if((e23978 instanceof Object))
{var ex__5510__auto__ = e23978;var statearr_23979_23992 = state_23960;(statearr_23979_23992[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23960);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e23978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__23993 = state_23960;
state_23960 = G__23993;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23960){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23980 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23981);
return statearr_23980;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24058){var state_val_24059 = (state_24058[1]);if((state_val_24059 === 1))
{var state_24058__$1 = state_24058;var statearr_24060_24081 = state_24058__$1;(statearr_24060_24081[2] = null);
(statearr_24060_24081[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24059 === 2))
{var state_24058__$1 = state_24058;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24058__$1,4,ch);
} else
{if((state_val_24059 === 3))
{var inst_24056 = (state_24058[2]);var state_24058__$1 = state_24058;return cljs.core.async.impl.ioc_helpers.return_chan(state_24058__$1,inst_24056);
} else
{if((state_val_24059 === 4))
{var inst_24039 = (state_24058[7]);var inst_24039__$1 = (state_24058[2]);var inst_24040 = (inst_24039__$1 == null);var state_24058__$1 = (function (){var statearr_24061 = state_24058;(statearr_24061[7] = inst_24039__$1);
return statearr_24061;
})();if(cljs.core.truth_(inst_24040))
{var statearr_24062_24082 = state_24058__$1;(statearr_24062_24082[1] = 5);
} else
{var statearr_24063_24083 = state_24058__$1;(statearr_24063_24083[1] = 6);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24059 === 5))
{var inst_24042 = cljs.core.async.close_BANG_(tc);var inst_24043 = cljs.core.async.close_BANG_(fc);var state_24058__$1 = (function (){var statearr_24064 = state_24058;(statearr_24064[8] = inst_24042);
return statearr_24064;
})();var statearr_24065_24084 = state_24058__$1;(statearr_24065_24084[2] = inst_24043);
(statearr_24065_24084[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24059 === 6))
{var inst_24039 = (state_24058[7]);var inst_24045 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24039) : p.call(null,inst_24039));var state_24058__$1 = state_24058;if(cljs.core.truth_(inst_24045))
{var statearr_24066_24085 = state_24058__$1;(statearr_24066_24085[1] = 9);
} else
{var statearr_24067_24086 = state_24058__$1;(statearr_24067_24086[1] = 10);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24059 === 7))
{var inst_24054 = (state_24058[2]);var state_24058__$1 = state_24058;var statearr_24068_24087 = state_24058__$1;(statearr_24068_24087[2] = inst_24054);
(statearr_24068_24087[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24059 === 8))
{var inst_24051 = (state_24058[2]);var state_24058__$1 = (function (){var statearr_24069 = state_24058;(statearr_24069[9] = inst_24051);
return statearr_24069;
})();var statearr_24070_24088 = state_24058__$1;(statearr_24070_24088[2] = null);
(statearr_24070_24088[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24059 === 9))
{var state_24058__$1 = state_24058;var statearr_24071_24089 = state_24058__$1;(statearr_24071_24089[2] = tc);
(statearr_24071_24089[1] = 11);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24059 === 10))
{var state_24058__$1 = state_24058;var statearr_24072_24090 = state_24058__$1;(statearr_24072_24090[2] = fc);
(statearr_24072_24090[1] = 11);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24059 === 11))
{var inst_24039 = (state_24058[7]);var inst_24049 = (state_24058[2]);var state_24058__$1 = state_24058;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24058__$1,8,inst_24049,inst_24039);
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
var state_machine__5507__auto____0 = (function (){var statearr_24076 = [null,null,null,null,null,null,null,null,null,null];(statearr_24076[0] = state_machine__5507__auto__);
(statearr_24076[1] = 1);
return statearr_24076;
});
var state_machine__5507__auto____1 = (function (state_24058){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24058);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24077){if((e24077 instanceof Object))
{var ex__5510__auto__ = e24077;var statearr_24078_24091 = state_24058;(statearr_24078_24091[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24058);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e24077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__24092 = state_24058;
state_24058 = G__24092;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24058){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24079 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24080);
return statearr_24079;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24139){var state_val_24140 = (state_24139[1]);if((state_val_24140 === 7))
{var inst_24135 = (state_24139[2]);var state_24139__$1 = state_24139;var statearr_24141_24157 = state_24139__$1;(statearr_24141_24157[2] = inst_24135);
(statearr_24141_24157[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24140 === 6))
{var inst_24128 = (state_24139[7]);var inst_24125 = (state_24139[8]);var inst_24132 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24125,inst_24128) : f.call(null,inst_24125,inst_24128));var inst_24125__$1 = inst_24132;var state_24139__$1 = (function (){var statearr_24142 = state_24139;(statearr_24142[8] = inst_24125__$1);
return statearr_24142;
})();var statearr_24143_24158 = state_24139__$1;(statearr_24143_24158[2] = null);
(statearr_24143_24158[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24140 === 5))
{var inst_24125 = (state_24139[8]);var state_24139__$1 = state_24139;var statearr_24144_24159 = state_24139__$1;(statearr_24144_24159[2] = inst_24125);
(statearr_24144_24159[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24140 === 4))
{var inst_24128 = (state_24139[7]);var inst_24128__$1 = (state_24139[2]);var inst_24129 = (inst_24128__$1 == null);var state_24139__$1 = (function (){var statearr_24145 = state_24139;(statearr_24145[7] = inst_24128__$1);
return statearr_24145;
})();if(cljs.core.truth_(inst_24129))
{var statearr_24146_24160 = state_24139__$1;(statearr_24146_24160[1] = 5);
} else
{var statearr_24147_24161 = state_24139__$1;(statearr_24147_24161[1] = 6);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24140 === 3))
{var inst_24137 = (state_24139[2]);var state_24139__$1 = state_24139;return cljs.core.async.impl.ioc_helpers.return_chan(state_24139__$1,inst_24137);
} else
{if((state_val_24140 === 2))
{var state_24139__$1 = state_24139;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24139__$1,4,ch);
} else
{if((state_val_24140 === 1))
{var inst_24125 = init;var state_24139__$1 = (function (){var statearr_24148 = state_24139;(statearr_24148[8] = inst_24125);
return statearr_24148;
})();var statearr_24149_24162 = state_24139__$1;(statearr_24149_24162[2] = null);
(statearr_24149_24162[1] = 2);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_24153 = [null,null,null,null,null,null,null,null,null];(statearr_24153[0] = state_machine__5507__auto__);
(statearr_24153[1] = 1);
return statearr_24153;
});
var state_machine__5507__auto____1 = (function (state_24139){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24139);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24154){if((e24154 instanceof Object))
{var ex__5510__auto__ = e24154;var statearr_24155_24163 = state_24139;(statearr_24155_24163[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24139);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e24154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__24164 = state_24139;
state_24139 = G__24164;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24139){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24156 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24156;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24226){var state_val_24227 = (state_24226[1]);if((state_val_24227 === 1))
{var inst_24206 = cljs.core.seq(coll);var inst_24207 = inst_24206;var state_24226__$1 = (function (){var statearr_24228 = state_24226;(statearr_24228[7] = inst_24207);
return statearr_24228;
})();var statearr_24229_24247 = state_24226__$1;(statearr_24229_24247[2] = null);
(statearr_24229_24247[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24227 === 2))
{var inst_24207 = (state_24226[7]);var state_24226__$1 = state_24226;if(cljs.core.truth_(inst_24207))
{var statearr_24230_24248 = state_24226__$1;(statearr_24230_24248[1] = 4);
} else
{var statearr_24231_24249 = state_24226__$1;(statearr_24231_24249[1] = 5);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24227 === 3))
{var inst_24224 = (state_24226[2]);var state_24226__$1 = state_24226;return cljs.core.async.impl.ioc_helpers.return_chan(state_24226__$1,inst_24224);
} else
{if((state_val_24227 === 4))
{var inst_24207 = (state_24226[7]);var inst_24210 = cljs.core.first(inst_24207);var state_24226__$1 = state_24226;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24226__$1,7,ch,inst_24210);
} else
{if((state_val_24227 === 5))
{var state_24226__$1 = state_24226;if(cljs.core.truth_(close_QMARK_))
{var statearr_24232_24250 = state_24226__$1;(statearr_24232_24250[1] = 8);
} else
{var statearr_24233_24251 = state_24226__$1;(statearr_24233_24251[1] = 9);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24227 === 6))
{var inst_24222 = (state_24226[2]);var state_24226__$1 = state_24226;var statearr_24234_24252 = state_24226__$1;(statearr_24234_24252[2] = inst_24222);
(statearr_24234_24252[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24227 === 7))
{var inst_24207 = (state_24226[7]);var inst_24212 = (state_24226[2]);var inst_24213 = cljs.core.next(inst_24207);var inst_24207__$1 = inst_24213;var state_24226__$1 = (function (){var statearr_24235 = state_24226;(statearr_24235[7] = inst_24207__$1);
(statearr_24235[8] = inst_24212);
return statearr_24235;
})();var statearr_24236_24253 = state_24226__$1;(statearr_24236_24253[2] = null);
(statearr_24236_24253[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24227 === 8))
{var inst_24217 = cljs.core.async.close_BANG_(ch);var state_24226__$1 = state_24226;var statearr_24237_24254 = state_24226__$1;(statearr_24237_24254[2] = inst_24217);
(statearr_24237_24254[1] = 10);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24227 === 9))
{var state_24226__$1 = state_24226;var statearr_24238_24255 = state_24226__$1;(statearr_24238_24255[2] = null);
(statearr_24238_24255[1] = 10);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24227 === 10))
{var inst_24220 = (state_24226[2]);var state_24226__$1 = state_24226;var statearr_24239_24256 = state_24226__$1;(statearr_24239_24256[2] = inst_24220);
(statearr_24239_24256[1] = 6);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_24243 = [null,null,null,null,null,null,null,null,null];(statearr_24243[0] = state_machine__5507__auto__);
(statearr_24243[1] = 1);
return statearr_24243;
});
var state_machine__5507__auto____1 = (function (state_24226){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24226);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24244){if((e24244 instanceof Object))
{var ex__5510__auto__ = e24244;var statearr_24245_24257 = state_24226;(statearr_24245_24257[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24226);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e24244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__24258 = state_24226;
state_24226 = G__24258;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24226){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24246 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24246;
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
cljs.core.async.Mux = (function (){var obj24260 = {};return obj24260;
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
cljs.core.async.Mult = (function (){var obj24262 = {};return obj24262;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24486 = (function (cs,ch,mult,meta24487){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24487 = meta24487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24486.cljs$lang$type = true;
cljs.core.async.t24486.cljs$lang$ctorStr = "cljs.core.async/t24486";
cljs.core.async.t24486.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24486");
});})(cs))
;
cljs.core.async.t24486.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24486.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24486.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24486.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24486.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24488){var self__ = this;
var _24488__$1 = this;return self__.meta24487;
});})(cs))
;
cljs.core.async.t24486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24488,meta24487__$1){var self__ = this;
var _24488__$1 = this;return (new cljs.core.async.t24486(self__.cs,self__.ch,self__.mult,meta24487__$1));
});})(cs))
;
cljs.core.async.__GT_t24486 = ((function (cs){
return (function __GT_t24486(cs__$1,ch__$1,mult__$1,meta24487){return (new cljs.core.async.t24486(cs__$1,ch__$1,mult__$1,meta24487));
});})(cs))
;
}
return (new cljs.core.async.t24486(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24623){var state_val_24624 = (state_24623[1]);if((state_val_24624 === 32))
{var inst_24567 = (state_24623[7]);var inst_24491 = (state_24623[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24623,31,Object,null,30);var inst_24574 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24567,inst_24491,done);var state_24623__$1 = state_24623;var statearr_24625_24710 = state_24623__$1;(statearr_24625_24710[2] = inst_24574);
cljs.core.async.impl.ioc_helpers.process_exception(state_24623__$1);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 1))
{var state_24623__$1 = state_24623;var statearr_24626_24711 = state_24623__$1;(statearr_24626_24711[2] = null);
(statearr_24626_24711[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 33))
{var inst_24580 = (state_24623[9]);var inst_24582 = cljs.core.chunked_seq_QMARK_(inst_24580);var state_24623__$1 = state_24623;if(inst_24582)
{var statearr_24627_24712 = state_24623__$1;(statearr_24627_24712[1] = 36);
} else
{var statearr_24628_24713 = state_24623__$1;(statearr_24628_24713[1] = 37);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 2))
{var state_24623__$1 = state_24623;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24623__$1,4,ch);
} else
{if((state_val_24624 === 34))
{var state_24623__$1 = state_24623;var statearr_24629_24714 = state_24623__$1;(statearr_24629_24714[2] = null);
(statearr_24629_24714[1] = 35);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 3))
{var inst_24621 = (state_24623[2]);var state_24623__$1 = state_24623;return cljs.core.async.impl.ioc_helpers.return_chan(state_24623__$1,inst_24621);
} else
{if((state_val_24624 === 35))
{var inst_24605 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24630_24715 = state_24623__$1;(statearr_24630_24715[2] = inst_24605);
(statearr_24630_24715[1] = 29);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 4))
{var inst_24491 = (state_24623[8]);var inst_24491__$1 = (state_24623[2]);var inst_24492 = (inst_24491__$1 == null);var state_24623__$1 = (function (){var statearr_24631 = state_24623;(statearr_24631[8] = inst_24491__$1);
return statearr_24631;
})();if(cljs.core.truth_(inst_24492))
{var statearr_24632_24716 = state_24623__$1;(statearr_24632_24716[1] = 5);
} else
{var statearr_24633_24717 = state_24623__$1;(statearr_24633_24717[1] = 6);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 36))
{var inst_24580 = (state_24623[9]);var inst_24584 = cljs.core.chunk_first(inst_24580);var inst_24585 = cljs.core.chunk_rest(inst_24580);var inst_24586 = cljs.core.count(inst_24584);var inst_24559 = inst_24585;var inst_24560 = inst_24584;var inst_24561 = inst_24586;var inst_24562 = 0;var state_24623__$1 = (function (){var statearr_24634 = state_24623;(statearr_24634[10] = inst_24562);
(statearr_24634[11] = inst_24560);
(statearr_24634[12] = inst_24561);
(statearr_24634[13] = inst_24559);
return statearr_24634;
})();var statearr_24635_24718 = state_24623__$1;(statearr_24635_24718[2] = null);
(statearr_24635_24718[1] = 25);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 5))
{var inst_24498 = cljs.core.deref(cs);var inst_24499 = cljs.core.seq(inst_24498);var inst_24500 = inst_24499;var inst_24501 = null;var inst_24502 = 0;var inst_24503 = 0;var state_24623__$1 = (function (){var statearr_24636 = state_24623;(statearr_24636[14] = inst_24502);
(statearr_24636[15] = inst_24503);
(statearr_24636[16] = inst_24501);
(statearr_24636[17] = inst_24500);
return statearr_24636;
})();var statearr_24637_24719 = state_24623__$1;(statearr_24637_24719[2] = null);
(statearr_24637_24719[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 37))
{var inst_24580 = (state_24623[9]);var inst_24589 = cljs.core.first(inst_24580);var state_24623__$1 = (function (){var statearr_24638 = state_24623;(statearr_24638[18] = inst_24589);
return statearr_24638;
})();var statearr_24639_24720 = state_24623__$1;(statearr_24639_24720[2] = null);
(statearr_24639_24720[1] = 41);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 6))
{var inst_24551 = (state_24623[19]);var inst_24550 = cljs.core.deref(cs);var inst_24551__$1 = cljs.core.keys(inst_24550);var inst_24552 = cljs.core.count(inst_24551__$1);var inst_24553 = cljs.core.reset_BANG_(dctr,inst_24552);var inst_24558 = cljs.core.seq(inst_24551__$1);var inst_24559 = inst_24558;var inst_24560 = null;var inst_24561 = 0;var inst_24562 = 0;var state_24623__$1 = (function (){var statearr_24640 = state_24623;(statearr_24640[10] = inst_24562);
(statearr_24640[11] = inst_24560);
(statearr_24640[12] = inst_24561);
(statearr_24640[13] = inst_24559);
(statearr_24640[20] = inst_24553);
(statearr_24640[19] = inst_24551__$1);
return statearr_24640;
})();var statearr_24641_24721 = state_24623__$1;(statearr_24641_24721[2] = null);
(statearr_24641_24721[1] = 25);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 38))
{var inst_24602 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24642_24722 = state_24623__$1;(statearr_24642_24722[2] = inst_24602);
(statearr_24642_24722[1] = 35);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 7))
{var inst_24619 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24643_24723 = state_24623__$1;(statearr_24643_24723[2] = inst_24619);
(statearr_24643_24723[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 39))
{var inst_24580 = (state_24623[9]);var inst_24598 = (state_24623[2]);var inst_24599 = cljs.core.next(inst_24580);var inst_24559 = inst_24599;var inst_24560 = null;var inst_24561 = 0;var inst_24562 = 0;var state_24623__$1 = (function (){var statearr_24644 = state_24623;(statearr_24644[10] = inst_24562);
(statearr_24644[11] = inst_24560);
(statearr_24644[12] = inst_24561);
(statearr_24644[13] = inst_24559);
(statearr_24644[21] = inst_24598);
return statearr_24644;
})();var statearr_24645_24724 = state_24623__$1;(statearr_24645_24724[2] = null);
(statearr_24645_24724[1] = 25);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 8))
{var inst_24502 = (state_24623[14]);var inst_24503 = (state_24623[15]);var inst_24505 = (inst_24503 < inst_24502);var inst_24506 = inst_24505;var state_24623__$1 = state_24623;if(cljs.core.truth_(inst_24506))
{var statearr_24646_24725 = state_24623__$1;(statearr_24646_24725[1] = 10);
} else
{var statearr_24647_24726 = state_24623__$1;(statearr_24647_24726[1] = 11);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 40))
{var inst_24589 = (state_24623[18]);var inst_24590 = (state_24623[2]);var inst_24591 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24592 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24589);var state_24623__$1 = (function (){var statearr_24648 = state_24623;(statearr_24648[22] = inst_24590);
(statearr_24648[23] = inst_24591);
return statearr_24648;
})();var statearr_24649_24727 = state_24623__$1;(statearr_24649_24727[2] = inst_24592);
cljs.core.async.impl.ioc_helpers.process_exception(state_24623__$1);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 9))
{var inst_24548 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24650_24728 = state_24623__$1;(statearr_24650_24728[2] = inst_24548);
(statearr_24650_24728[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 41))
{var inst_24491 = (state_24623[8]);var inst_24589 = (state_24623[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24623,40,Object,null,39);var inst_24596 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24589,inst_24491,done);var state_24623__$1 = state_24623;var statearr_24651_24729 = state_24623__$1;(statearr_24651_24729[2] = inst_24596);
cljs.core.async.impl.ioc_helpers.process_exception(state_24623__$1);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 10))
{var inst_24503 = (state_24623[15]);var inst_24501 = (state_24623[16]);var inst_24509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24501,inst_24503);var inst_24510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24509,0,null);var inst_24511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24509,1,null);var state_24623__$1 = (function (){var statearr_24652 = state_24623;(statearr_24652[24] = inst_24510);
return statearr_24652;
})();if(cljs.core.truth_(inst_24511))
{var statearr_24653_24730 = state_24623__$1;(statearr_24653_24730[1] = 13);
} else
{var statearr_24654_24731 = state_24623__$1;(statearr_24654_24731[1] = 14);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 42))
{var state_24623__$1 = state_24623;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24623__$1,45,dchan);
} else
{if((state_val_24624 === 11))
{var inst_24520 = (state_24623[25]);var inst_24500 = (state_24623[17]);var inst_24520__$1 = cljs.core.seq(inst_24500);var state_24623__$1 = (function (){var statearr_24655 = state_24623;(statearr_24655[25] = inst_24520__$1);
return statearr_24655;
})();if(inst_24520__$1)
{var statearr_24656_24732 = state_24623__$1;(statearr_24656_24732[1] = 16);
} else
{var statearr_24657_24733 = state_24623__$1;(statearr_24657_24733[1] = 17);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 43))
{var state_24623__$1 = state_24623;var statearr_24658_24734 = state_24623__$1;(statearr_24658_24734[2] = null);
(statearr_24658_24734[1] = 44);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 12))
{var inst_24546 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24659_24735 = state_24623__$1;(statearr_24659_24735[2] = inst_24546);
(statearr_24659_24735[1] = 9);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 44))
{var inst_24616 = (state_24623[2]);var state_24623__$1 = (function (){var statearr_24660 = state_24623;(statearr_24660[26] = inst_24616);
return statearr_24660;
})();var statearr_24661_24736 = state_24623__$1;(statearr_24661_24736[2] = null);
(statearr_24661_24736[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 13))
{var inst_24510 = (state_24623[24]);var inst_24513 = cljs.core.async.close_BANG_(inst_24510);var state_24623__$1 = state_24623;var statearr_24662_24737 = state_24623__$1;(statearr_24662_24737[2] = inst_24513);
(statearr_24662_24737[1] = 15);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 45))
{var inst_24613 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24666_24738 = state_24623__$1;(statearr_24666_24738[2] = inst_24613);
(statearr_24666_24738[1] = 44);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 14))
{var state_24623__$1 = state_24623;var statearr_24667_24739 = state_24623__$1;(statearr_24667_24739[2] = null);
(statearr_24667_24739[1] = 15);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 15))
{var inst_24502 = (state_24623[14]);var inst_24503 = (state_24623[15]);var inst_24501 = (state_24623[16]);var inst_24500 = (state_24623[17]);var inst_24516 = (state_24623[2]);var inst_24517 = (inst_24503 + 1);var tmp24663 = inst_24502;var tmp24664 = inst_24501;var tmp24665 = inst_24500;var inst_24500__$1 = tmp24665;var inst_24501__$1 = tmp24664;var inst_24502__$1 = tmp24663;var inst_24503__$1 = inst_24517;var state_24623__$1 = (function (){var statearr_24668 = state_24623;(statearr_24668[27] = inst_24516);
(statearr_24668[14] = inst_24502__$1);
(statearr_24668[15] = inst_24503__$1);
(statearr_24668[16] = inst_24501__$1);
(statearr_24668[17] = inst_24500__$1);
return statearr_24668;
})();var statearr_24669_24740 = state_24623__$1;(statearr_24669_24740[2] = null);
(statearr_24669_24740[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 16))
{var inst_24520 = (state_24623[25]);var inst_24522 = cljs.core.chunked_seq_QMARK_(inst_24520);var state_24623__$1 = state_24623;if(inst_24522)
{var statearr_24670_24741 = state_24623__$1;(statearr_24670_24741[1] = 19);
} else
{var statearr_24671_24742 = state_24623__$1;(statearr_24671_24742[1] = 20);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 17))
{var state_24623__$1 = state_24623;var statearr_24672_24743 = state_24623__$1;(statearr_24672_24743[2] = null);
(statearr_24672_24743[1] = 18);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 18))
{var inst_24544 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24673_24744 = state_24623__$1;(statearr_24673_24744[2] = inst_24544);
(statearr_24673_24744[1] = 12);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 19))
{var inst_24520 = (state_24623[25]);var inst_24524 = cljs.core.chunk_first(inst_24520);var inst_24525 = cljs.core.chunk_rest(inst_24520);var inst_24526 = cljs.core.count(inst_24524);var inst_24500 = inst_24525;var inst_24501 = inst_24524;var inst_24502 = inst_24526;var inst_24503 = 0;var state_24623__$1 = (function (){var statearr_24674 = state_24623;(statearr_24674[14] = inst_24502);
(statearr_24674[15] = inst_24503);
(statearr_24674[16] = inst_24501);
(statearr_24674[17] = inst_24500);
return statearr_24674;
})();var statearr_24675_24745 = state_24623__$1;(statearr_24675_24745[2] = null);
(statearr_24675_24745[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 20))
{var inst_24520 = (state_24623[25]);var inst_24530 = cljs.core.first(inst_24520);var inst_24531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24530,0,null);var inst_24532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24530,1,null);var state_24623__$1 = (function (){var statearr_24676 = state_24623;(statearr_24676[28] = inst_24531);
return statearr_24676;
})();if(cljs.core.truth_(inst_24532))
{var statearr_24677_24746 = state_24623__$1;(statearr_24677_24746[1] = 22);
} else
{var statearr_24678_24747 = state_24623__$1;(statearr_24678_24747[1] = 23);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 21))
{var inst_24541 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24679_24748 = state_24623__$1;(statearr_24679_24748[2] = inst_24541);
(statearr_24679_24748[1] = 18);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 22))
{var inst_24531 = (state_24623[28]);var inst_24534 = cljs.core.async.close_BANG_(inst_24531);var state_24623__$1 = state_24623;var statearr_24680_24749 = state_24623__$1;(statearr_24680_24749[2] = inst_24534);
(statearr_24680_24749[1] = 24);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 23))
{var state_24623__$1 = state_24623;var statearr_24681_24750 = state_24623__$1;(statearr_24681_24750[2] = null);
(statearr_24681_24750[1] = 24);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 24))
{var inst_24520 = (state_24623[25]);var inst_24537 = (state_24623[2]);var inst_24538 = cljs.core.next(inst_24520);var inst_24500 = inst_24538;var inst_24501 = null;var inst_24502 = 0;var inst_24503 = 0;var state_24623__$1 = (function (){var statearr_24682 = state_24623;(statearr_24682[14] = inst_24502);
(statearr_24682[15] = inst_24503);
(statearr_24682[16] = inst_24501);
(statearr_24682[17] = inst_24500);
(statearr_24682[29] = inst_24537);
return statearr_24682;
})();var statearr_24683_24751 = state_24623__$1;(statearr_24683_24751[2] = null);
(statearr_24683_24751[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 25))
{var inst_24562 = (state_24623[10]);var inst_24561 = (state_24623[12]);var inst_24564 = (inst_24562 < inst_24561);var inst_24565 = inst_24564;var state_24623__$1 = state_24623;if(cljs.core.truth_(inst_24565))
{var statearr_24684_24752 = state_24623__$1;(statearr_24684_24752[1] = 27);
} else
{var statearr_24685_24753 = state_24623__$1;(statearr_24685_24753[1] = 28);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 26))
{var inst_24551 = (state_24623[19]);var inst_24609 = (state_24623[2]);var inst_24610 = cljs.core.seq(inst_24551);var state_24623__$1 = (function (){var statearr_24686 = state_24623;(statearr_24686[30] = inst_24609);
return statearr_24686;
})();if(inst_24610)
{var statearr_24687_24754 = state_24623__$1;(statearr_24687_24754[1] = 42);
} else
{var statearr_24688_24755 = state_24623__$1;(statearr_24688_24755[1] = 43);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 27))
{var inst_24562 = (state_24623[10]);var inst_24560 = (state_24623[11]);var inst_24567 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24560,inst_24562);var state_24623__$1 = (function (){var statearr_24689 = state_24623;(statearr_24689[7] = inst_24567);
return statearr_24689;
})();var statearr_24690_24756 = state_24623__$1;(statearr_24690_24756[2] = null);
(statearr_24690_24756[1] = 32);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 28))
{var inst_24559 = (state_24623[13]);var inst_24580 = (state_24623[9]);var inst_24580__$1 = cljs.core.seq(inst_24559);var state_24623__$1 = (function (){var statearr_24694 = state_24623;(statearr_24694[9] = inst_24580__$1);
return statearr_24694;
})();if(inst_24580__$1)
{var statearr_24695_24757 = state_24623__$1;(statearr_24695_24757[1] = 33);
} else
{var statearr_24696_24758 = state_24623__$1;(statearr_24696_24758[1] = 34);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 29))
{var inst_24607 = (state_24623[2]);var state_24623__$1 = state_24623;var statearr_24697_24759 = state_24623__$1;(statearr_24697_24759[2] = inst_24607);
(statearr_24697_24759[1] = 26);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 30))
{var inst_24562 = (state_24623[10]);var inst_24560 = (state_24623[11]);var inst_24561 = (state_24623[12]);var inst_24559 = (state_24623[13]);var inst_24576 = (state_24623[2]);var inst_24577 = (inst_24562 + 1);var tmp24691 = inst_24560;var tmp24692 = inst_24561;var tmp24693 = inst_24559;var inst_24559__$1 = tmp24693;var inst_24560__$1 = tmp24691;var inst_24561__$1 = tmp24692;var inst_24562__$1 = inst_24577;var state_24623__$1 = (function (){var statearr_24698 = state_24623;(statearr_24698[10] = inst_24562__$1);
(statearr_24698[11] = inst_24560__$1);
(statearr_24698[12] = inst_24561__$1);
(statearr_24698[31] = inst_24576);
(statearr_24698[13] = inst_24559__$1);
return statearr_24698;
})();var statearr_24699_24760 = state_24623__$1;(statearr_24699_24760[2] = null);
(statearr_24699_24760[1] = 25);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24624 === 31))
{var inst_24567 = (state_24623[7]);var inst_24568 = (state_24623[2]);var inst_24569 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24570 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24567);var state_24623__$1 = (function (){var statearr_24700 = state_24623;(statearr_24700[32] = inst_24568);
(statearr_24700[33] = inst_24569);
return statearr_24700;
})();var statearr_24701_24761 = state_24623__$1;(statearr_24701_24761[2] = inst_24570);
cljs.core.async.impl.ioc_helpers.process_exception(state_24623__$1);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_24705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24705[0] = state_machine__5507__auto__);
(statearr_24705[1] = 1);
return statearr_24705;
});
var state_machine__5507__auto____1 = (function (state_24623){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24623);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24706){if((e24706 instanceof Object))
{var ex__5510__auto__ = e24706;var statearr_24707_24762 = state_24623;(statearr_24707_24762[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24623);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e24706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__24763 = state_24623;
state_24623 = G__24763;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24623){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24708 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24709);
return statearr_24708;
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
cljs.core.async.Mix = (function (){var obj24765 = {};return obj24765;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$231,null,cljs.core.constant$keyword$232,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$233);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$233,chs);var pauses = pick(cljs.core.constant$keyword$231,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$234,solos,cljs.core.constant$keyword$235,pick(cljs.core.constant$keyword$232,chs),cljs.core.constant$keyword$236,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$231)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24875 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24875 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24876){
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
this.meta24876 = meta24876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24875.cljs$lang$type = true;
cljs.core.async.t24875.cljs$lang$ctorStr = "cljs.core.async/t24875";
cljs.core.async.t24875.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24875");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24875.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24875.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24875.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24875.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24875.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24875.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24875.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24877){var self__ = this;
var _24877__$1 = this;return self__.meta24876;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24877,meta24876__$1){var self__ = this;
var _24877__$1 = this;return (new cljs.core.async.t24875(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24876__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24875 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24875(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24876){return (new cljs.core.async.t24875(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24876));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24875(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24942){var state_val_24943 = (state_24942[1]);if((state_val_24943 === 1))
{var inst_24881 = (state_24942[7]);var inst_24881__$1 = calc_state();var inst_24882 = cljs.core.seq_QMARK_(inst_24881__$1);var state_24942__$1 = (function (){var statearr_24944 = state_24942;(statearr_24944[7] = inst_24881__$1);
return statearr_24944;
})();if(inst_24882)
{var statearr_24945_24985 = state_24942__$1;(statearr_24945_24985[1] = 2);
} else
{var statearr_24946_24986 = state_24942__$1;(statearr_24946_24986[1] = 3);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 2))
{var inst_24881 = (state_24942[7]);var inst_24884 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24881);var state_24942__$1 = state_24942;var statearr_24947_24987 = state_24942__$1;(statearr_24947_24987[2] = inst_24884);
(statearr_24947_24987[1] = 4);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 3))
{var inst_24881 = (state_24942[7]);var state_24942__$1 = state_24942;var statearr_24948_24988 = state_24942__$1;(statearr_24948_24988[2] = inst_24881);
(statearr_24948_24988[1] = 4);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 4))
{var inst_24881 = (state_24942[7]);var inst_24887 = (state_24942[2]);var inst_24888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24887,cljs.core.constant$keyword$236);var inst_24889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24887,cljs.core.constant$keyword$235);var inst_24890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24887,cljs.core.constant$keyword$234);var inst_24891 = inst_24881;var state_24942__$1 = (function (){var statearr_24949 = state_24942;(statearr_24949[8] = inst_24888);
(statearr_24949[9] = inst_24889);
(statearr_24949[10] = inst_24890);
(statearr_24949[11] = inst_24891);
return statearr_24949;
})();var statearr_24950_24989 = state_24942__$1;(statearr_24950_24989[2] = null);
(statearr_24950_24989[1] = 5);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 5))
{var inst_24891 = (state_24942[11]);var inst_24894 = cljs.core.seq_QMARK_(inst_24891);var state_24942__$1 = state_24942;if(inst_24894)
{var statearr_24951_24990 = state_24942__$1;(statearr_24951_24990[1] = 7);
} else
{var statearr_24952_24991 = state_24942__$1;(statearr_24952_24991[1] = 8);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 6))
{var inst_24940 = (state_24942[2]);var state_24942__$1 = state_24942;return cljs.core.async.impl.ioc_helpers.return_chan(state_24942__$1,inst_24940);
} else
{if((state_val_24943 === 7))
{var inst_24891 = (state_24942[11]);var inst_24896 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24891);var state_24942__$1 = state_24942;var statearr_24953_24992 = state_24942__$1;(statearr_24953_24992[2] = inst_24896);
(statearr_24953_24992[1] = 9);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 8))
{var inst_24891 = (state_24942[11]);var state_24942__$1 = state_24942;var statearr_24954_24993 = state_24942__$1;(statearr_24954_24993[2] = inst_24891);
(statearr_24954_24993[1] = 9);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 9))
{var inst_24899 = (state_24942[12]);var inst_24899__$1 = (state_24942[2]);var inst_24900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24899__$1,cljs.core.constant$keyword$236);var inst_24901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24899__$1,cljs.core.constant$keyword$235);var inst_24902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24899__$1,cljs.core.constant$keyword$234);var state_24942__$1 = (function (){var statearr_24955 = state_24942;(statearr_24955[13] = inst_24902);
(statearr_24955[14] = inst_24901);
(statearr_24955[12] = inst_24899__$1);
return statearr_24955;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24942__$1,10,inst_24900);
} else
{if((state_val_24943 === 10))
{var inst_24906 = (state_24942[15]);var inst_24907 = (state_24942[16]);var inst_24905 = (state_24942[2]);var inst_24906__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24905,0,null);var inst_24907__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24905,1,null);var inst_24908 = (inst_24906__$1 == null);var inst_24909 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24907__$1,change);var inst_24910 = (inst_24908) || (inst_24909);var state_24942__$1 = (function (){var statearr_24956 = state_24942;(statearr_24956[15] = inst_24906__$1);
(statearr_24956[16] = inst_24907__$1);
return statearr_24956;
})();if(cljs.core.truth_(inst_24910))
{var statearr_24957_24994 = state_24942__$1;(statearr_24957_24994[1] = 11);
} else
{var statearr_24958_24995 = state_24942__$1;(statearr_24958_24995[1] = 12);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 11))
{var inst_24906 = (state_24942[15]);var inst_24912 = (inst_24906 == null);var state_24942__$1 = state_24942;if(cljs.core.truth_(inst_24912))
{var statearr_24959_24996 = state_24942__$1;(statearr_24959_24996[1] = 14);
} else
{var statearr_24960_24997 = state_24942__$1;(statearr_24960_24997[1] = 15);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 12))
{var inst_24921 = (state_24942[17]);var inst_24902 = (state_24942[13]);var inst_24907 = (state_24942[16]);var inst_24921__$1 = (inst_24902.cljs$core$IFn$_invoke$arity$1 ? inst_24902.cljs$core$IFn$_invoke$arity$1(inst_24907) : inst_24902.call(null,inst_24907));var state_24942__$1 = (function (){var statearr_24961 = state_24942;(statearr_24961[17] = inst_24921__$1);
return statearr_24961;
})();if(cljs.core.truth_(inst_24921__$1))
{var statearr_24962_24998 = state_24942__$1;(statearr_24962_24998[1] = 17);
} else
{var statearr_24963_24999 = state_24942__$1;(statearr_24963_24999[1] = 18);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 13))
{var inst_24938 = (state_24942[2]);var state_24942__$1 = state_24942;var statearr_24964_25000 = state_24942__$1;(statearr_24964_25000[2] = inst_24938);
(statearr_24964_25000[1] = 6);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 14))
{var inst_24907 = (state_24942[16]);var inst_24914 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24907);var state_24942__$1 = state_24942;var statearr_24965_25001 = state_24942__$1;(statearr_24965_25001[2] = inst_24914);
(statearr_24965_25001[1] = 16);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 15))
{var state_24942__$1 = state_24942;var statearr_24966_25002 = state_24942__$1;(statearr_24966_25002[2] = null);
(statearr_24966_25002[1] = 16);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 16))
{var inst_24917 = (state_24942[2]);var inst_24918 = calc_state();var inst_24891 = inst_24918;var state_24942__$1 = (function (){var statearr_24967 = state_24942;(statearr_24967[11] = inst_24891);
(statearr_24967[18] = inst_24917);
return statearr_24967;
})();var statearr_24968_25003 = state_24942__$1;(statearr_24968_25003[2] = null);
(statearr_24968_25003[1] = 5);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 17))
{var inst_24921 = (state_24942[17]);var state_24942__$1 = state_24942;var statearr_24969_25004 = state_24942__$1;(statearr_24969_25004[2] = inst_24921);
(statearr_24969_25004[1] = 19);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 18))
{var inst_24902 = (state_24942[13]);var inst_24907 = (state_24942[16]);var inst_24901 = (state_24942[14]);var inst_24924 = cljs.core.empty_QMARK_(inst_24902);var inst_24925 = (inst_24901.cljs$core$IFn$_invoke$arity$1 ? inst_24901.cljs$core$IFn$_invoke$arity$1(inst_24907) : inst_24901.call(null,inst_24907));var inst_24926 = cljs.core.not(inst_24925);var inst_24927 = (inst_24924) && (inst_24926);var state_24942__$1 = state_24942;var statearr_24970_25005 = state_24942__$1;(statearr_24970_25005[2] = inst_24927);
(statearr_24970_25005[1] = 19);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 19))
{var inst_24929 = (state_24942[2]);var state_24942__$1 = state_24942;if(cljs.core.truth_(inst_24929))
{var statearr_24971_25006 = state_24942__$1;(statearr_24971_25006[1] = 20);
} else
{var statearr_24972_25007 = state_24942__$1;(statearr_24972_25007[1] = 21);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 20))
{var inst_24906 = (state_24942[15]);var state_24942__$1 = state_24942;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24942__$1,23,out,inst_24906);
} else
{if((state_val_24943 === 21))
{var state_24942__$1 = state_24942;var statearr_24973_25008 = state_24942__$1;(statearr_24973_25008[2] = null);
(statearr_24973_25008[1] = 22);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 22))
{var inst_24899 = (state_24942[12]);var inst_24935 = (state_24942[2]);var inst_24891 = inst_24899;var state_24942__$1 = (function (){var statearr_24974 = state_24942;(statearr_24974[19] = inst_24935);
(statearr_24974[11] = inst_24891);
return statearr_24974;
})();var statearr_24975_25009 = state_24942__$1;(statearr_24975_25009[2] = null);
(statearr_24975_25009[1] = 5);
return cljs.core.constant$keyword$224;
} else
{if((state_val_24943 === 23))
{var inst_24932 = (state_24942[2]);var state_24942__$1 = state_24942;var statearr_24976_25010 = state_24942__$1;(statearr_24976_25010[2] = inst_24932);
(statearr_24976_25010[1] = 22);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_24980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24980[0] = state_machine__5507__auto__);
(statearr_24980[1] = 1);
return statearr_24980;
});
var state_machine__5507__auto____1 = (function (state_24942){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24942);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24981){if((e24981 instanceof Object))
{var ex__5510__auto__ = e24981;var statearr_24982_25011 = state_24942;(statearr_24982_25011[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24942);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e24981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__25012 = state_24942;
state_24942 = G__25012;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24942){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24983 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24984);
return statearr_24983;
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
cljs.core.async.Pub = (function (){var obj25014 = {};return obj25014;
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
return (function (p1__25015_SHARP_){if(cljs.core.truth_((p1__25015_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25015_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25015_SHARP_.call(null,topic))))
{return p1__25015_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25015_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25140 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25141){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25141 = meta25141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25140.cljs$lang$type = true;
cljs.core.async.t25140.cljs$lang$ctorStr = "cljs.core.async/t25140";
cljs.core.async.t25140.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25140");
});})(mults,ensure_mult))
;
cljs.core.async.t25140.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25140.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25140.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25140.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25140.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25140.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25142){var self__ = this;
var _25142__$1 = this;return self__.meta25141;
});})(mults,ensure_mult))
;
cljs.core.async.t25140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25142,meta25141__$1){var self__ = this;
var _25142__$1 = this;return (new cljs.core.async.t25140(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25141__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25140 = ((function (mults,ensure_mult){
return (function __GT_t25140(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25141){return (new cljs.core.async.t25140(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25141));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25140(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25216){var state_val_25217 = (state_25216[1]);if((state_val_25217 === 1))
{var state_25216__$1 = state_25216;var statearr_25218_25265 = state_25216__$1;(statearr_25218_25265[2] = null);
(statearr_25218_25265[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 2))
{var state_25216__$1 = state_25216;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25216__$1,4,ch);
} else
{if((state_val_25217 === 3))
{var inst_25214 = (state_25216[2]);var state_25216__$1 = state_25216;return cljs.core.async.impl.ioc_helpers.return_chan(state_25216__$1,inst_25214);
} else
{if((state_val_25217 === 4))
{var inst_25145 = (state_25216[7]);var inst_25145__$1 = (state_25216[2]);var inst_25146 = (inst_25145__$1 == null);var state_25216__$1 = (function (){var statearr_25219 = state_25216;(statearr_25219[7] = inst_25145__$1);
return statearr_25219;
})();if(cljs.core.truth_(inst_25146))
{var statearr_25220_25266 = state_25216__$1;(statearr_25220_25266[1] = 5);
} else
{var statearr_25221_25267 = state_25216__$1;(statearr_25221_25267[1] = 6);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 5))
{var inst_25152 = cljs.core.deref(mults);var inst_25153 = cljs.core.vals(inst_25152);var inst_25154 = cljs.core.seq(inst_25153);var inst_25155 = inst_25154;var inst_25156 = null;var inst_25157 = 0;var inst_25158 = 0;var state_25216__$1 = (function (){var statearr_25222 = state_25216;(statearr_25222[8] = inst_25156);
(statearr_25222[9] = inst_25157);
(statearr_25222[10] = inst_25155);
(statearr_25222[11] = inst_25158);
return statearr_25222;
})();var statearr_25223_25268 = state_25216__$1;(statearr_25223_25268[2] = null);
(statearr_25223_25268[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 6))
{var inst_25145 = (state_25216[7]);var inst_25193 = (state_25216[12]);var inst_25195 = (state_25216[13]);var inst_25193__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25145) : topic_fn.call(null,inst_25145));var inst_25194 = cljs.core.deref(mults);var inst_25195__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25194,inst_25193__$1);var state_25216__$1 = (function (){var statearr_25224 = state_25216;(statearr_25224[12] = inst_25193__$1);
(statearr_25224[13] = inst_25195__$1);
return statearr_25224;
})();if(cljs.core.truth_(inst_25195__$1))
{var statearr_25225_25269 = state_25216__$1;(statearr_25225_25269[1] = 19);
} else
{var statearr_25226_25270 = state_25216__$1;(statearr_25226_25270[1] = 20);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 7))
{var inst_25212 = (state_25216[2]);var state_25216__$1 = state_25216;var statearr_25227_25271 = state_25216__$1;(statearr_25227_25271[2] = inst_25212);
(statearr_25227_25271[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 8))
{var inst_25157 = (state_25216[9]);var inst_25158 = (state_25216[11]);var inst_25160 = (inst_25158 < inst_25157);var inst_25161 = inst_25160;var state_25216__$1 = state_25216;if(cljs.core.truth_(inst_25161))
{var statearr_25231_25272 = state_25216__$1;(statearr_25231_25272[1] = 10);
} else
{var statearr_25232_25273 = state_25216__$1;(statearr_25232_25273[1] = 11);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 9))
{var inst_25191 = (state_25216[2]);var state_25216__$1 = state_25216;var statearr_25233_25274 = state_25216__$1;(statearr_25233_25274[2] = inst_25191);
(statearr_25233_25274[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 10))
{var inst_25156 = (state_25216[8]);var inst_25157 = (state_25216[9]);var inst_25155 = (state_25216[10]);var inst_25158 = (state_25216[11]);var inst_25163 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25156,inst_25158);var inst_25164 = cljs.core.async.muxch_STAR_(inst_25163);var inst_25165 = cljs.core.async.close_BANG_(inst_25164);var inst_25166 = (inst_25158 + 1);var tmp25228 = inst_25156;var tmp25229 = inst_25157;var tmp25230 = inst_25155;var inst_25155__$1 = tmp25230;var inst_25156__$1 = tmp25228;var inst_25157__$1 = tmp25229;var inst_25158__$1 = inst_25166;var state_25216__$1 = (function (){var statearr_25234 = state_25216;(statearr_25234[8] = inst_25156__$1);
(statearr_25234[9] = inst_25157__$1);
(statearr_25234[10] = inst_25155__$1);
(statearr_25234[14] = inst_25165);
(statearr_25234[11] = inst_25158__$1);
return statearr_25234;
})();var statearr_25235_25275 = state_25216__$1;(statearr_25235_25275[2] = null);
(statearr_25235_25275[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 11))
{var inst_25155 = (state_25216[10]);var inst_25169 = (state_25216[15]);var inst_25169__$1 = cljs.core.seq(inst_25155);var state_25216__$1 = (function (){var statearr_25236 = state_25216;(statearr_25236[15] = inst_25169__$1);
return statearr_25236;
})();if(inst_25169__$1)
{var statearr_25237_25276 = state_25216__$1;(statearr_25237_25276[1] = 13);
} else
{var statearr_25238_25277 = state_25216__$1;(statearr_25238_25277[1] = 14);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 12))
{var inst_25189 = (state_25216[2]);var state_25216__$1 = state_25216;var statearr_25239_25278 = state_25216__$1;(statearr_25239_25278[2] = inst_25189);
(statearr_25239_25278[1] = 9);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 13))
{var inst_25169 = (state_25216[15]);var inst_25171 = cljs.core.chunked_seq_QMARK_(inst_25169);var state_25216__$1 = state_25216;if(inst_25171)
{var statearr_25240_25279 = state_25216__$1;(statearr_25240_25279[1] = 16);
} else
{var statearr_25241_25280 = state_25216__$1;(statearr_25241_25280[1] = 17);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 14))
{var state_25216__$1 = state_25216;var statearr_25242_25281 = state_25216__$1;(statearr_25242_25281[2] = null);
(statearr_25242_25281[1] = 15);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 15))
{var inst_25187 = (state_25216[2]);var state_25216__$1 = state_25216;var statearr_25243_25282 = state_25216__$1;(statearr_25243_25282[2] = inst_25187);
(statearr_25243_25282[1] = 12);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 16))
{var inst_25169 = (state_25216[15]);var inst_25173 = cljs.core.chunk_first(inst_25169);var inst_25174 = cljs.core.chunk_rest(inst_25169);var inst_25175 = cljs.core.count(inst_25173);var inst_25155 = inst_25174;var inst_25156 = inst_25173;var inst_25157 = inst_25175;var inst_25158 = 0;var state_25216__$1 = (function (){var statearr_25244 = state_25216;(statearr_25244[8] = inst_25156);
(statearr_25244[9] = inst_25157);
(statearr_25244[10] = inst_25155);
(statearr_25244[11] = inst_25158);
return statearr_25244;
})();var statearr_25245_25283 = state_25216__$1;(statearr_25245_25283[2] = null);
(statearr_25245_25283[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 17))
{var inst_25169 = (state_25216[15]);var inst_25178 = cljs.core.first(inst_25169);var inst_25179 = cljs.core.async.muxch_STAR_(inst_25178);var inst_25180 = cljs.core.async.close_BANG_(inst_25179);var inst_25181 = cljs.core.next(inst_25169);var inst_25155 = inst_25181;var inst_25156 = null;var inst_25157 = 0;var inst_25158 = 0;var state_25216__$1 = (function (){var statearr_25246 = state_25216;(statearr_25246[8] = inst_25156);
(statearr_25246[9] = inst_25157);
(statearr_25246[16] = inst_25180);
(statearr_25246[10] = inst_25155);
(statearr_25246[11] = inst_25158);
return statearr_25246;
})();var statearr_25247_25284 = state_25216__$1;(statearr_25247_25284[2] = null);
(statearr_25247_25284[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 18))
{var inst_25184 = (state_25216[2]);var state_25216__$1 = state_25216;var statearr_25248_25285 = state_25216__$1;(statearr_25248_25285[2] = inst_25184);
(statearr_25248_25285[1] = 15);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 19))
{var state_25216__$1 = state_25216;var statearr_25249_25286 = state_25216__$1;(statearr_25249_25286[2] = null);
(statearr_25249_25286[1] = 24);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 20))
{var state_25216__$1 = state_25216;var statearr_25250_25287 = state_25216__$1;(statearr_25250_25287[2] = null);
(statearr_25250_25287[1] = 21);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 21))
{var inst_25209 = (state_25216[2]);var state_25216__$1 = (function (){var statearr_25251 = state_25216;(statearr_25251[17] = inst_25209);
return statearr_25251;
})();var statearr_25252_25288 = state_25216__$1;(statearr_25252_25288[2] = null);
(statearr_25252_25288[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 22))
{var inst_25206 = (state_25216[2]);var state_25216__$1 = state_25216;var statearr_25253_25289 = state_25216__$1;(statearr_25253_25289[2] = inst_25206);
(statearr_25253_25289[1] = 21);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 23))
{var inst_25193 = (state_25216[12]);var inst_25197 = (state_25216[2]);var inst_25198 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25193);var state_25216__$1 = (function (){var statearr_25254 = state_25216;(statearr_25254[18] = inst_25197);
return statearr_25254;
})();var statearr_25255_25290 = state_25216__$1;(statearr_25255_25290[2] = inst_25198);
cljs.core.async.impl.ioc_helpers.process_exception(state_25216__$1);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25217 === 24))
{var inst_25145 = (state_25216[7]);var inst_25195 = (state_25216[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25216,23,Object,null,22);var inst_25202 = cljs.core.async.muxch_STAR_(inst_25195);var state_25216__$1 = state_25216;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25216__$1,25,inst_25202,inst_25145);
} else
{if((state_val_25217 === 25))
{var inst_25204 = (state_25216[2]);var state_25216__$1 = state_25216;var statearr_25256_25291 = state_25216__$1;(statearr_25256_25291[2] = inst_25204);
cljs.core.async.impl.ioc_helpers.process_exception(state_25216__$1);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_25260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25260[0] = state_machine__5507__auto__);
(statearr_25260[1] = 1);
return statearr_25260;
});
var state_machine__5507__auto____1 = (function (state_25216){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25216);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25261){if((e25261 instanceof Object))
{var ex__5510__auto__ = e25261;var statearr_25262_25292 = state_25216;(statearr_25262_25292[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25216);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e25261;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__25293 = state_25216;
state_25216 = G__25293;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25216){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25263 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25264);
return statearr_25263;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25400){var state_val_25401 = (state_25400[1]);if((state_val_25401 === 1))
{var state_25400__$1 = state_25400;var statearr_25402_25431 = state_25400__$1;(statearr_25402_25431[2] = null);
(statearr_25402_25431[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 2))
{var inst_25363 = cljs.core.reset_BANG_(dctr,cnt);var inst_25364 = 0;var state_25400__$1 = (function (){var statearr_25403 = state_25400;(statearr_25403[7] = inst_25363);
(statearr_25403[8] = inst_25364);
return statearr_25403;
})();var statearr_25404_25432 = state_25400__$1;(statearr_25404_25432[2] = null);
(statearr_25404_25432[1] = 4);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 3))
{var inst_25398 = (state_25400[2]);var state_25400__$1 = state_25400;return cljs.core.async.impl.ioc_helpers.return_chan(state_25400__$1,inst_25398);
} else
{if((state_val_25401 === 4))
{var inst_25364 = (state_25400[8]);var inst_25366 = (inst_25364 < cnt);var state_25400__$1 = state_25400;if(cljs.core.truth_(inst_25366))
{var statearr_25405_25433 = state_25400__$1;(statearr_25405_25433[1] = 6);
} else
{var statearr_25406_25434 = state_25400__$1;(statearr_25406_25434[1] = 7);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 5))
{var inst_25384 = (state_25400[2]);var state_25400__$1 = (function (){var statearr_25407 = state_25400;(statearr_25407[9] = inst_25384);
return statearr_25407;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25400__$1,12,dchan);
} else
{if((state_val_25401 === 6))
{var state_25400__$1 = state_25400;var statearr_25408_25435 = state_25400__$1;(statearr_25408_25435[2] = null);
(statearr_25408_25435[1] = 11);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 7))
{var state_25400__$1 = state_25400;var statearr_25409_25436 = state_25400__$1;(statearr_25409_25436[2] = null);
(statearr_25409_25436[1] = 8);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 8))
{var inst_25382 = (state_25400[2]);var state_25400__$1 = state_25400;var statearr_25410_25437 = state_25400__$1;(statearr_25410_25437[2] = inst_25382);
(statearr_25410_25437[1] = 5);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 9))
{var inst_25364 = (state_25400[8]);var inst_25377 = (state_25400[2]);var inst_25378 = (inst_25364 + 1);var inst_25364__$1 = inst_25378;var state_25400__$1 = (function (){var statearr_25411 = state_25400;(statearr_25411[10] = inst_25377);
(statearr_25411[8] = inst_25364__$1);
return statearr_25411;
})();var statearr_25412_25438 = state_25400__$1;(statearr_25412_25438[2] = null);
(statearr_25412_25438[1] = 4);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 10))
{var inst_25368 = (state_25400[2]);var inst_25369 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25400__$1 = (function (){var statearr_25413 = state_25400;(statearr_25413[11] = inst_25368);
return statearr_25413;
})();var statearr_25414_25439 = state_25400__$1;(statearr_25414_25439[2] = inst_25369);
cljs.core.async.impl.ioc_helpers.process_exception(state_25400__$1);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 11))
{var inst_25364 = (state_25400[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25400,10,Object,null,9);var inst_25373 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25364) : chs__$1.call(null,inst_25364));var inst_25374 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25364) : done.call(null,inst_25364));var inst_25375 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25373,inst_25374);var state_25400__$1 = state_25400;var statearr_25415_25440 = state_25400__$1;(statearr_25415_25440[2] = inst_25375);
cljs.core.async.impl.ioc_helpers.process_exception(state_25400__$1);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 12))
{var inst_25386 = (state_25400[12]);var inst_25386__$1 = (state_25400[2]);var inst_25387 = cljs.core.some(cljs.core.nil_QMARK_,inst_25386__$1);var state_25400__$1 = (function (){var statearr_25416 = state_25400;(statearr_25416[12] = inst_25386__$1);
return statearr_25416;
})();if(cljs.core.truth_(inst_25387))
{var statearr_25417_25441 = state_25400__$1;(statearr_25417_25441[1] = 13);
} else
{var statearr_25418_25442 = state_25400__$1;(statearr_25418_25442[1] = 14);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 13))
{var inst_25389 = cljs.core.async.close_BANG_(out);var state_25400__$1 = state_25400;var statearr_25419_25443 = state_25400__$1;(statearr_25419_25443[2] = inst_25389);
(statearr_25419_25443[1] = 15);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 14))
{var inst_25386 = (state_25400[12]);var inst_25391 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25386);var state_25400__$1 = state_25400;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25400__$1,16,out,inst_25391);
} else
{if((state_val_25401 === 15))
{var inst_25396 = (state_25400[2]);var state_25400__$1 = state_25400;var statearr_25420_25444 = state_25400__$1;(statearr_25420_25444[2] = inst_25396);
(statearr_25420_25444[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25401 === 16))
{var inst_25393 = (state_25400[2]);var state_25400__$1 = (function (){var statearr_25421 = state_25400;(statearr_25421[13] = inst_25393);
return statearr_25421;
})();var statearr_25422_25445 = state_25400__$1;(statearr_25422_25445[2] = null);
(statearr_25422_25445[1] = 2);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_25426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25426[0] = state_machine__5507__auto__);
(statearr_25426[1] = 1);
return statearr_25426;
});
var state_machine__5507__auto____1 = (function (state_25400){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25400);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25427){if((e25427 instanceof Object))
{var ex__5510__auto__ = e25427;var statearr_25428_25446 = state_25400;(statearr_25428_25446[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25400);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e25427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__25447 = state_25400;
state_25400 = G__25447;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25400){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25429 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25430);
return statearr_25429;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25531){var state_val_25532 = (state_25531[1]);if((state_val_25532 === 1))
{var inst_25502 = cljs.core.vec(chs);var inst_25503 = inst_25502;var state_25531__$1 = (function (){var statearr_25533 = state_25531;(statearr_25533[7] = inst_25503);
return statearr_25533;
})();var statearr_25534_25556 = state_25531__$1;(statearr_25534_25556[2] = null);
(statearr_25534_25556[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25532 === 2))
{var inst_25503 = (state_25531[7]);var inst_25505 = cljs.core.count(inst_25503);var inst_25506 = (inst_25505 > 0);var state_25531__$1 = state_25531;if(cljs.core.truth_(inst_25506))
{var statearr_25535_25557 = state_25531__$1;(statearr_25535_25557[1] = 4);
} else
{var statearr_25536_25558 = state_25531__$1;(statearr_25536_25558[1] = 5);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25532 === 3))
{var inst_25529 = (state_25531[2]);var state_25531__$1 = state_25531;return cljs.core.async.impl.ioc_helpers.return_chan(state_25531__$1,inst_25529);
} else
{if((state_val_25532 === 4))
{var inst_25503 = (state_25531[7]);var state_25531__$1 = state_25531;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25531__$1,7,inst_25503);
} else
{if((state_val_25532 === 5))
{var inst_25525 = cljs.core.async.close_BANG_(out);var state_25531__$1 = state_25531;var statearr_25537_25559 = state_25531__$1;(statearr_25537_25559[2] = inst_25525);
(statearr_25537_25559[1] = 6);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25532 === 6))
{var inst_25527 = (state_25531[2]);var state_25531__$1 = state_25531;var statearr_25538_25560 = state_25531__$1;(statearr_25538_25560[2] = inst_25527);
(statearr_25538_25560[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25532 === 7))
{var inst_25511 = (state_25531[8]);var inst_25510 = (state_25531[9]);var inst_25510__$1 = (state_25531[2]);var inst_25511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25510__$1,0,null);var inst_25512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25510__$1,1,null);var inst_25513 = (inst_25511__$1 == null);var state_25531__$1 = (function (){var statearr_25539 = state_25531;(statearr_25539[10] = inst_25512);
(statearr_25539[8] = inst_25511__$1);
(statearr_25539[9] = inst_25510__$1);
return statearr_25539;
})();if(cljs.core.truth_(inst_25513))
{var statearr_25540_25561 = state_25531__$1;(statearr_25540_25561[1] = 8);
} else
{var statearr_25541_25562 = state_25531__$1;(statearr_25541_25562[1] = 9);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25532 === 8))
{var inst_25503 = (state_25531[7]);var inst_25512 = (state_25531[10]);var inst_25511 = (state_25531[8]);var inst_25510 = (state_25531[9]);var inst_25515 = (function (){var c = inst_25512;var v = inst_25511;var vec__25508 = inst_25510;var cs = inst_25503;return ((function (c,v,vec__25508,cs,inst_25503,inst_25512,inst_25511,inst_25510,state_val_25532){
return (function (p1__25448_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25448_SHARP_);
});
;})(c,v,vec__25508,cs,inst_25503,inst_25512,inst_25511,inst_25510,state_val_25532))
})();var inst_25516 = cljs.core.filterv(inst_25515,inst_25503);var inst_25503__$1 = inst_25516;var state_25531__$1 = (function (){var statearr_25542 = state_25531;(statearr_25542[7] = inst_25503__$1);
return statearr_25542;
})();var statearr_25543_25563 = state_25531__$1;(statearr_25543_25563[2] = null);
(statearr_25543_25563[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25532 === 9))
{var inst_25511 = (state_25531[8]);var state_25531__$1 = state_25531;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25531__$1,11,out,inst_25511);
} else
{if((state_val_25532 === 10))
{var inst_25523 = (state_25531[2]);var state_25531__$1 = state_25531;var statearr_25545_25564 = state_25531__$1;(statearr_25545_25564[2] = inst_25523);
(statearr_25545_25564[1] = 6);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25532 === 11))
{var inst_25503 = (state_25531[7]);var inst_25520 = (state_25531[2]);var tmp25544 = inst_25503;var inst_25503__$1 = tmp25544;var state_25531__$1 = (function (){var statearr_25546 = state_25531;(statearr_25546[11] = inst_25520);
(statearr_25546[7] = inst_25503__$1);
return statearr_25546;
})();var statearr_25547_25565 = state_25531__$1;(statearr_25547_25565[2] = null);
(statearr_25547_25565[1] = 2);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_25551 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25551[0] = state_machine__5507__auto__);
(statearr_25551[1] = 1);
return statearr_25551;
});
var state_machine__5507__auto____1 = (function (state_25531){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25531);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25552){if((e25552 instanceof Object))
{var ex__5510__auto__ = e25552;var statearr_25553_25566 = state_25531;(statearr_25553_25566[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25531);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e25552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__25567 = state_25531;
state_25531 = G__25567;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25531){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25554 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25555);
return statearr_25554;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25637){var state_val_25638 = (state_25637[1]);if((state_val_25638 === 1))
{var inst_25614 = 0;var state_25637__$1 = (function (){var statearr_25639 = state_25637;(statearr_25639[7] = inst_25614);
return statearr_25639;
})();var statearr_25640_25661 = state_25637__$1;(statearr_25640_25661[2] = null);
(statearr_25640_25661[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25638 === 2))
{var inst_25614 = (state_25637[7]);var inst_25616 = (inst_25614 < n);var state_25637__$1 = state_25637;if(cljs.core.truth_(inst_25616))
{var statearr_25641_25662 = state_25637__$1;(statearr_25641_25662[1] = 4);
} else
{var statearr_25642_25663 = state_25637__$1;(statearr_25642_25663[1] = 5);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25638 === 3))
{var inst_25634 = (state_25637[2]);var inst_25635 = cljs.core.async.close_BANG_(out);var state_25637__$1 = (function (){var statearr_25643 = state_25637;(statearr_25643[8] = inst_25634);
return statearr_25643;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25637__$1,inst_25635);
} else
{if((state_val_25638 === 4))
{var state_25637__$1 = state_25637;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25637__$1,7,ch);
} else
{if((state_val_25638 === 5))
{var state_25637__$1 = state_25637;var statearr_25644_25664 = state_25637__$1;(statearr_25644_25664[2] = null);
(statearr_25644_25664[1] = 6);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25638 === 6))
{var inst_25632 = (state_25637[2]);var state_25637__$1 = state_25637;var statearr_25645_25665 = state_25637__$1;(statearr_25645_25665[2] = inst_25632);
(statearr_25645_25665[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25638 === 7))
{var inst_25619 = (state_25637[9]);var inst_25619__$1 = (state_25637[2]);var inst_25620 = (inst_25619__$1 == null);var inst_25621 = cljs.core.not(inst_25620);var state_25637__$1 = (function (){var statearr_25646 = state_25637;(statearr_25646[9] = inst_25619__$1);
return statearr_25646;
})();if(inst_25621)
{var statearr_25647_25666 = state_25637__$1;(statearr_25647_25666[1] = 8);
} else
{var statearr_25648_25667 = state_25637__$1;(statearr_25648_25667[1] = 9);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25638 === 8))
{var inst_25619 = (state_25637[9]);var state_25637__$1 = state_25637;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25637__$1,11,out,inst_25619);
} else
{if((state_val_25638 === 9))
{var state_25637__$1 = state_25637;var statearr_25649_25668 = state_25637__$1;(statearr_25649_25668[2] = null);
(statearr_25649_25668[1] = 10);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25638 === 10))
{var inst_25629 = (state_25637[2]);var state_25637__$1 = state_25637;var statearr_25650_25669 = state_25637__$1;(statearr_25650_25669[2] = inst_25629);
(statearr_25650_25669[1] = 6);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25638 === 11))
{var inst_25614 = (state_25637[7]);var inst_25624 = (state_25637[2]);var inst_25625 = (inst_25614 + 1);var inst_25614__$1 = inst_25625;var state_25637__$1 = (function (){var statearr_25651 = state_25637;(statearr_25651[7] = inst_25614__$1);
(statearr_25651[10] = inst_25624);
return statearr_25651;
})();var statearr_25652_25670 = state_25637__$1;(statearr_25652_25670[2] = null);
(statearr_25652_25670[1] = 2);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_25656 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25656[0] = state_machine__5507__auto__);
(statearr_25656[1] = 1);
return statearr_25656;
});
var state_machine__5507__auto____1 = (function (state_25637){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25637);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25657){if((e25657 instanceof Object))
{var ex__5510__auto__ = e25657;var statearr_25658_25671 = state_25637;(statearr_25658_25671[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25637);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e25657;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__25672 = state_25637;
state_25637 = G__25672;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25637){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25659 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25660);
return statearr_25659;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25744){var state_val_25745 = (state_25744[1]);if((state_val_25745 === 1))
{var inst_25721 = null;var state_25744__$1 = (function (){var statearr_25746 = state_25744;(statearr_25746[7] = inst_25721);
return statearr_25746;
})();var statearr_25747_25770 = state_25744__$1;(statearr_25747_25770[2] = null);
(statearr_25747_25770[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25745 === 2))
{var state_25744__$1 = state_25744;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25744__$1,4,ch);
} else
{if((state_val_25745 === 3))
{var inst_25741 = (state_25744[2]);var inst_25742 = cljs.core.async.close_BANG_(out);var state_25744__$1 = (function (){var statearr_25748 = state_25744;(statearr_25748[8] = inst_25741);
return statearr_25748;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25744__$1,inst_25742);
} else
{if((state_val_25745 === 4))
{var inst_25724 = (state_25744[9]);var inst_25724__$1 = (state_25744[2]);var inst_25725 = (inst_25724__$1 == null);var inst_25726 = cljs.core.not(inst_25725);var state_25744__$1 = (function (){var statearr_25749 = state_25744;(statearr_25749[9] = inst_25724__$1);
return statearr_25749;
})();if(inst_25726)
{var statearr_25750_25771 = state_25744__$1;(statearr_25750_25771[1] = 5);
} else
{var statearr_25751_25772 = state_25744__$1;(statearr_25751_25772[1] = 6);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25745 === 5))
{var inst_25724 = (state_25744[9]);var inst_25721 = (state_25744[7]);var inst_25728 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25724,inst_25721);var state_25744__$1 = state_25744;if(inst_25728)
{var statearr_25752_25773 = state_25744__$1;(statearr_25752_25773[1] = 8);
} else
{var statearr_25753_25774 = state_25744__$1;(statearr_25753_25774[1] = 9);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25745 === 6))
{var state_25744__$1 = state_25744;var statearr_25755_25775 = state_25744__$1;(statearr_25755_25775[2] = null);
(statearr_25755_25775[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25745 === 7))
{var inst_25739 = (state_25744[2]);var state_25744__$1 = state_25744;var statearr_25756_25776 = state_25744__$1;(statearr_25756_25776[2] = inst_25739);
(statearr_25756_25776[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25745 === 8))
{var inst_25721 = (state_25744[7]);var tmp25754 = inst_25721;var inst_25721__$1 = tmp25754;var state_25744__$1 = (function (){var statearr_25757 = state_25744;(statearr_25757[7] = inst_25721__$1);
return statearr_25757;
})();var statearr_25758_25777 = state_25744__$1;(statearr_25758_25777[2] = null);
(statearr_25758_25777[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25745 === 9))
{var inst_25724 = (state_25744[9]);var state_25744__$1 = state_25744;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25744__$1,11,out,inst_25724);
} else
{if((state_val_25745 === 10))
{var inst_25736 = (state_25744[2]);var state_25744__$1 = state_25744;var statearr_25759_25778 = state_25744__$1;(statearr_25759_25778[2] = inst_25736);
(statearr_25759_25778[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25745 === 11))
{var inst_25724 = (state_25744[9]);var inst_25733 = (state_25744[2]);var inst_25721 = inst_25724;var state_25744__$1 = (function (){var statearr_25760 = state_25744;(statearr_25760[10] = inst_25733);
(statearr_25760[7] = inst_25721);
return statearr_25760;
})();var statearr_25761_25779 = state_25744__$1;(statearr_25761_25779[2] = null);
(statearr_25761_25779[1] = 2);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_25765 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25765[0] = state_machine__5507__auto__);
(statearr_25765[1] = 1);
return statearr_25765;
});
var state_machine__5507__auto____1 = (function (state_25744){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25744);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25766){if((e25766 instanceof Object))
{var ex__5510__auto__ = e25766;var statearr_25767_25780 = state_25744;(statearr_25767_25780[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25744);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e25766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__25781 = state_25744;
state_25744 = G__25781;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25744){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25768 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25769);
return statearr_25768;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25886){var state_val_25887 = (state_25886[1]);if((state_val_25887 === 1))
{var inst_25849 = (new Array(n));var inst_25850 = inst_25849;var inst_25851 = 0;var state_25886__$1 = (function (){var statearr_25888 = state_25886;(statearr_25888[7] = inst_25850);
(statearr_25888[8] = inst_25851);
return statearr_25888;
})();var statearr_25889_25917 = state_25886__$1;(statearr_25889_25917[2] = null);
(statearr_25889_25917[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25887 === 2))
{var state_25886__$1 = state_25886;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25886__$1,4,ch);
} else
{if((state_val_25887 === 3))
{var inst_25884 = (state_25886[2]);var state_25886__$1 = state_25886;return cljs.core.async.impl.ioc_helpers.return_chan(state_25886__$1,inst_25884);
} else
{if((state_val_25887 === 4))
{var inst_25854 = (state_25886[9]);var inst_25854__$1 = (state_25886[2]);var inst_25855 = (inst_25854__$1 == null);var inst_25856 = cljs.core.not(inst_25855);var state_25886__$1 = (function (){var statearr_25890 = state_25886;(statearr_25890[9] = inst_25854__$1);
return statearr_25890;
})();if(inst_25856)
{var statearr_25891_25918 = state_25886__$1;(statearr_25891_25918[1] = 5);
} else
{var statearr_25892_25919 = state_25886__$1;(statearr_25892_25919[1] = 6);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25887 === 5))
{var inst_25850 = (state_25886[7]);var inst_25854 = (state_25886[9]);var inst_25851 = (state_25886[8]);var inst_25859 = (state_25886[10]);var inst_25858 = (inst_25850[inst_25851] = inst_25854);var inst_25859__$1 = (inst_25851 + 1);var inst_25860 = (inst_25859__$1 < n);var state_25886__$1 = (function (){var statearr_25893 = state_25886;(statearr_25893[11] = inst_25858);
(statearr_25893[10] = inst_25859__$1);
return statearr_25893;
})();if(cljs.core.truth_(inst_25860))
{var statearr_25894_25920 = state_25886__$1;(statearr_25894_25920[1] = 8);
} else
{var statearr_25895_25921 = state_25886__$1;(statearr_25895_25921[1] = 9);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25887 === 6))
{var inst_25851 = (state_25886[8]);var inst_25872 = (inst_25851 > 0);var state_25886__$1 = state_25886;if(cljs.core.truth_(inst_25872))
{var statearr_25897_25922 = state_25886__$1;(statearr_25897_25922[1] = 12);
} else
{var statearr_25898_25923 = state_25886__$1;(statearr_25898_25923[1] = 13);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_25887 === 7))
{var inst_25882 = (state_25886[2]);var state_25886__$1 = state_25886;var statearr_25899_25924 = state_25886__$1;(statearr_25899_25924[2] = inst_25882);
(statearr_25899_25924[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25887 === 8))
{var inst_25850 = (state_25886[7]);var inst_25859 = (state_25886[10]);var tmp25896 = inst_25850;var inst_25850__$1 = tmp25896;var inst_25851 = inst_25859;var state_25886__$1 = (function (){var statearr_25900 = state_25886;(statearr_25900[7] = inst_25850__$1);
(statearr_25900[8] = inst_25851);
return statearr_25900;
})();var statearr_25901_25925 = state_25886__$1;(statearr_25901_25925[2] = null);
(statearr_25901_25925[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25887 === 9))
{var inst_25850 = (state_25886[7]);var inst_25864 = cljs.core.vec(inst_25850);var state_25886__$1 = state_25886;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25886__$1,11,out,inst_25864);
} else
{if((state_val_25887 === 10))
{var inst_25870 = (state_25886[2]);var state_25886__$1 = state_25886;var statearr_25902_25926 = state_25886__$1;(statearr_25902_25926[2] = inst_25870);
(statearr_25902_25926[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25887 === 11))
{var inst_25866 = (state_25886[2]);var inst_25867 = (new Array(n));var inst_25850 = inst_25867;var inst_25851 = 0;var state_25886__$1 = (function (){var statearr_25903 = state_25886;(statearr_25903[7] = inst_25850);
(statearr_25903[8] = inst_25851);
(statearr_25903[12] = inst_25866);
return statearr_25903;
})();var statearr_25904_25927 = state_25886__$1;(statearr_25904_25927[2] = null);
(statearr_25904_25927[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25887 === 12))
{var inst_25850 = (state_25886[7]);var inst_25874 = cljs.core.vec(inst_25850);var state_25886__$1 = state_25886;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25886__$1,15,out,inst_25874);
} else
{if((state_val_25887 === 13))
{var state_25886__$1 = state_25886;var statearr_25905_25928 = state_25886__$1;(statearr_25905_25928[2] = null);
(statearr_25905_25928[1] = 14);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25887 === 14))
{var inst_25879 = (state_25886[2]);var inst_25880 = cljs.core.async.close_BANG_(out);var state_25886__$1 = (function (){var statearr_25906 = state_25886;(statearr_25906[13] = inst_25879);
return statearr_25906;
})();var statearr_25907_25929 = state_25886__$1;(statearr_25907_25929[2] = inst_25880);
(statearr_25907_25929[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_25887 === 15))
{var inst_25876 = (state_25886[2]);var state_25886__$1 = state_25886;var statearr_25908_25930 = state_25886__$1;(statearr_25908_25930[2] = inst_25876);
(statearr_25908_25930[1] = 14);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_25912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25912[0] = state_machine__5507__auto__);
(statearr_25912[1] = 1);
return statearr_25912;
});
var state_machine__5507__auto____1 = (function (state_25886){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25886);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25913){if((e25913 instanceof Object))
{var ex__5510__auto__ = e25913;var statearr_25914_25931 = state_25886;(statearr_25914_25931[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25886);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e25913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__25932 = state_25886;
state_25886 = G__25932;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25886){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25915 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25916);
return statearr_25915;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26045){var state_val_26046 = (state_26045[1]);if((state_val_26046 === 1))
{var inst_26004 = [];var inst_26005 = inst_26004;var inst_26006 = cljs.core.constant$keyword$237;var state_26045__$1 = (function (){var statearr_26047 = state_26045;(statearr_26047[7] = inst_26006);
(statearr_26047[8] = inst_26005);
return statearr_26047;
})();var statearr_26048_26076 = state_26045__$1;(statearr_26048_26076[2] = null);
(statearr_26048_26076[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_26046 === 2))
{var state_26045__$1 = state_26045;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26045__$1,4,ch);
} else
{if((state_val_26046 === 3))
{var inst_26043 = (state_26045[2]);var state_26045__$1 = state_26045;return cljs.core.async.impl.ioc_helpers.return_chan(state_26045__$1,inst_26043);
} else
{if((state_val_26046 === 4))
{var inst_26009 = (state_26045[9]);var inst_26009__$1 = (state_26045[2]);var inst_26010 = (inst_26009__$1 == null);var inst_26011 = cljs.core.not(inst_26010);var state_26045__$1 = (function (){var statearr_26049 = state_26045;(statearr_26049[9] = inst_26009__$1);
return statearr_26049;
})();if(inst_26011)
{var statearr_26050_26077 = state_26045__$1;(statearr_26050_26077[1] = 5);
} else
{var statearr_26051_26078 = state_26045__$1;(statearr_26051_26078[1] = 6);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_26046 === 5))
{var inst_26009 = (state_26045[9]);var inst_26013 = (state_26045[10]);var inst_26006 = (state_26045[7]);var inst_26013__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26009) : f.call(null,inst_26009));var inst_26014 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26013__$1,inst_26006);var inst_26015 = cljs.core.keyword_identical_QMARK_(inst_26006,cljs.core.constant$keyword$237);var inst_26016 = (inst_26014) || (inst_26015);var state_26045__$1 = (function (){var statearr_26052 = state_26045;(statearr_26052[10] = inst_26013__$1);
return statearr_26052;
})();if(cljs.core.truth_(inst_26016))
{var statearr_26053_26079 = state_26045__$1;(statearr_26053_26079[1] = 8);
} else
{var statearr_26054_26080 = state_26045__$1;(statearr_26054_26080[1] = 9);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_26046 === 6))
{var inst_26005 = (state_26045[8]);var inst_26030 = inst_26005.length;var inst_26031 = (inst_26030 > 0);var state_26045__$1 = state_26045;if(cljs.core.truth_(inst_26031))
{var statearr_26056_26081 = state_26045__$1;(statearr_26056_26081[1] = 12);
} else
{var statearr_26057_26082 = state_26045__$1;(statearr_26057_26082[1] = 13);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_26046 === 7))
{var inst_26041 = (state_26045[2]);var state_26045__$1 = state_26045;var statearr_26058_26083 = state_26045__$1;(statearr_26058_26083[2] = inst_26041);
(statearr_26058_26083[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_26046 === 8))
{var inst_26009 = (state_26045[9]);var inst_26013 = (state_26045[10]);var inst_26005 = (state_26045[8]);var inst_26018 = inst_26005.push(inst_26009);var tmp26055 = inst_26005;var inst_26005__$1 = tmp26055;var inst_26006 = inst_26013;var state_26045__$1 = (function (){var statearr_26059 = state_26045;(statearr_26059[11] = inst_26018);
(statearr_26059[7] = inst_26006);
(statearr_26059[8] = inst_26005__$1);
return statearr_26059;
})();var statearr_26060_26084 = state_26045__$1;(statearr_26060_26084[2] = null);
(statearr_26060_26084[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_26046 === 9))
{var inst_26005 = (state_26045[8]);var inst_26021 = cljs.core.vec(inst_26005);var state_26045__$1 = state_26045;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26045__$1,11,out,inst_26021);
} else
{if((state_val_26046 === 10))
{var inst_26028 = (state_26045[2]);var state_26045__$1 = state_26045;var statearr_26061_26085 = state_26045__$1;(statearr_26061_26085[2] = inst_26028);
(statearr_26061_26085[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_26046 === 11))
{var inst_26009 = (state_26045[9]);var inst_26013 = (state_26045[10]);var inst_26023 = (state_26045[2]);var inst_26024 = [];var inst_26025 = inst_26024.push(inst_26009);var inst_26005 = inst_26024;var inst_26006 = inst_26013;var state_26045__$1 = (function (){var statearr_26062 = state_26045;(statearr_26062[12] = inst_26025);
(statearr_26062[13] = inst_26023);
(statearr_26062[7] = inst_26006);
(statearr_26062[8] = inst_26005);
return statearr_26062;
})();var statearr_26063_26086 = state_26045__$1;(statearr_26063_26086[2] = null);
(statearr_26063_26086[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_26046 === 12))
{var inst_26005 = (state_26045[8]);var inst_26033 = cljs.core.vec(inst_26005);var state_26045__$1 = state_26045;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26045__$1,15,out,inst_26033);
} else
{if((state_val_26046 === 13))
{var state_26045__$1 = state_26045;var statearr_26064_26087 = state_26045__$1;(statearr_26064_26087[2] = null);
(statearr_26064_26087[1] = 14);
return cljs.core.constant$keyword$224;
} else
{if((state_val_26046 === 14))
{var inst_26038 = (state_26045[2]);var inst_26039 = cljs.core.async.close_BANG_(out);var state_26045__$1 = (function (){var statearr_26065 = state_26045;(statearr_26065[14] = inst_26038);
return statearr_26065;
})();var statearr_26066_26088 = state_26045__$1;(statearr_26066_26088[2] = inst_26039);
(statearr_26066_26088[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_26046 === 15))
{var inst_26035 = (state_26045[2]);var state_26045__$1 = state_26045;var statearr_26067_26089 = state_26045__$1;(statearr_26067_26089[2] = inst_26035);
(statearr_26067_26089[1] = 14);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_26071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26071[0] = state_machine__5507__auto__);
(statearr_26071[1] = 1);
return statearr_26071;
});
var state_machine__5507__auto____1 = (function (state_26045){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26045);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26072){if((e26072 instanceof Object))
{var ex__5510__auto__ = e26072;var statearr_26073_26090 = state_26045;(statearr_26073_26090[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26045);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e26072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__26091 = state_26045;
state_26045 = G__26091;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26045){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26074 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26075);
return statearr_26074;
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
