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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20757 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20757 = (function (f,fn_handler,meta20758){
this.f = f;
this.fn_handler = fn_handler;
this.meta20758 = meta20758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20757.cljs$lang$type = true;
cljs.core.async.t20757.cljs$lang$ctorStr = "cljs.core.async/t20757";
cljs.core.async.t20757.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20757");
});
cljs.core.async.t20757.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20759){var self__ = this;
var _20759__$1 = this;return self__.meta20758;
});
cljs.core.async.t20757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20759,meta20758__$1){var self__ = this;
var _20759__$1 = this;return (new cljs.core.async.t20757(self__.f,self__.fn_handler,meta20758__$1));
});
cljs.core.async.__GT_t20757 = (function __GT_t20757(f__$1,fn_handler__$1,meta20758){return (new cljs.core.async.t20757(f__$1,fn_handler__$1,meta20758));
});
}
return (new cljs.core.async.t20757(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20761 = buff;if(G__20761)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__20761.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20761.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20761);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20761);
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
{var val_20762 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20762) : fn1.call(null,val_20762));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20762) : fn1.call(null,val_20762));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___20763 = n;var x_20764 = 0;while(true){
if((x_20764 < n__4248__auto___20763))
{(a[x_20764] = 0);
{
var G__20765 = (x_20764 + 1);
x_20764 = G__20765;
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
var G__20766 = (i + 1);
i = G__20766;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t20770 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20770 = (function (flag,alt_flag,meta20771){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20771 = meta20771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20770.cljs$lang$type = true;
cljs.core.async.t20770.cljs$lang$ctorStr = "cljs.core.async/t20770";
cljs.core.async.t20770.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20770");
});
cljs.core.async.t20770.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t20770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t20770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20772){var self__ = this;
var _20772__$1 = this;return self__.meta20771;
});
cljs.core.async.t20770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20772,meta20771__$1){var self__ = this;
var _20772__$1 = this;return (new cljs.core.async.t20770(self__.flag,self__.alt_flag,meta20771__$1));
});
cljs.core.async.__GT_t20770 = (function __GT_t20770(flag__$1,alt_flag__$1,meta20771){return (new cljs.core.async.t20770(flag__$1,alt_flag__$1,meta20771));
});
}
return (new cljs.core.async.t20770(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20776 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20776 = (function (cb,flag,alt_handler,meta20777){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20777 = meta20777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20776.cljs$lang$type = true;
cljs.core.async.t20776.cljs$lang$ctorStr = "cljs.core.async/t20776";
cljs.core.async.t20776.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20776");
});
cljs.core.async.t20776.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20776.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t20776.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t20776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20778){var self__ = this;
var _20778__$1 = this;return self__.meta20777;
});
cljs.core.async.t20776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20778,meta20777__$1){var self__ = this;
var _20778__$1 = this;return (new cljs.core.async.t20776(self__.cb,self__.flag,self__.alt_handler,meta20777__$1));
});
cljs.core.async.__GT_t20776 = (function __GT_t20776(cb__$1,flag__$1,alt_handler__$1,meta20777){return (new cljs.core.async.t20776(cb__$1,flag__$1,alt_handler__$1,meta20777));
});
}
return (new cljs.core.async.t20776(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20779_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20779_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20779_SHARP_,port], null)));
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
var G__20780 = (i + 1);
i = G__20780;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$113))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$113], null));
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
var alts_BANG___delegate = function (ports,p__20781){var map__20783 = p__20781;var map__20783__$1 = ((cljs.core.seq_QMARK_(map__20783))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20783):map__20783);var opts = map__20783__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__20781 = null;if (arguments.length > 1) {
  p__20781 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20781);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20784){
var ports = cljs.core.first(arglist__20784);
var p__20781 = cljs.core.rest(arglist__20784);
return alts_BANG___delegate(ports,p__20781);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20792 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20792 = (function (ch,f,map_LT_,meta20793){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20793 = meta20793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20792.cljs$lang$type = true;
cljs.core.async.t20792.cljs$lang$ctorStr = "cljs.core.async/t20792";
cljs.core.async.t20792.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20792");
});
cljs.core.async.t20792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t20792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t20795 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20795 = (function (fn1,_,meta20793,ch,f,map_LT_,meta20796){
this.fn1 = fn1;
this._ = _;
this.meta20793 = meta20793;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20796 = meta20796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20795.cljs$lang$type = true;
cljs.core.async.t20795.cljs$lang$ctorStr = "cljs.core.async/t20795";
cljs.core.async.t20795.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20795");
});
cljs.core.async.t20795.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t20795.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t20795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__20785_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__20785_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20785_SHARP_) : self__.f.call(null,p1__20785_SHARP_)))) : f1.call(null,(((p1__20785_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20785_SHARP_) : self__.f.call(null,p1__20785_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t20795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20797){var self__ = this;
var _20797__$1 = this;return self__.meta20796;
});
cljs.core.async.t20795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20797,meta20796__$1){var self__ = this;
var _20797__$1 = this;return (new cljs.core.async.t20795(self__.fn1,self__._,self__.meta20793,self__.ch,self__.f,self__.map_LT_,meta20796__$1));
});
cljs.core.async.__GT_t20795 = (function __GT_t20795(fn1__$1,___$2,meta20793__$1,ch__$2,f__$2,map_LT___$2,meta20796){return (new cljs.core.async.t20795(fn1__$1,___$2,meta20793__$1,ch__$2,f__$2,map_LT___$2,meta20796));
});
}
return (new cljs.core.async.t20795(fn1,___$1,self__.meta20793,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t20792.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20794){var self__ = this;
var _20794__$1 = this;return self__.meta20793;
});
cljs.core.async.t20792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20794,meta20793__$1){var self__ = this;
var _20794__$1 = this;return (new cljs.core.async.t20792(self__.ch,self__.f,self__.map_LT_,meta20793__$1));
});
cljs.core.async.__GT_t20792 = (function __GT_t20792(ch__$1,f__$1,map_LT___$1,meta20793){return (new cljs.core.async.t20792(ch__$1,f__$1,map_LT___$1,meta20793));
});
}
return (new cljs.core.async.t20792(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20801 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20801 = (function (ch,f,map_GT_,meta20802){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20802 = meta20802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20801.cljs$lang$type = true;
cljs.core.async.t20801.cljs$lang$ctorStr = "cljs.core.async/t20801";
cljs.core.async.t20801.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20801");
});
cljs.core.async.t20801.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t20801.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20801.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20803){var self__ = this;
var _20803__$1 = this;return self__.meta20802;
});
cljs.core.async.t20801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20803,meta20802__$1){var self__ = this;
var _20803__$1 = this;return (new cljs.core.async.t20801(self__.ch,self__.f,self__.map_GT_,meta20802__$1));
});
cljs.core.async.__GT_t20801 = (function __GT_t20801(ch__$1,f__$1,map_GT___$1,meta20802){return (new cljs.core.async.t20801(ch__$1,f__$1,map_GT___$1,meta20802));
});
}
return (new cljs.core.async.t20801(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20807 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20807 = (function (ch,p,filter_GT_,meta20808){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20808 = meta20808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20807.cljs$lang$type = true;
cljs.core.async.t20807.cljs$lang$ctorStr = "cljs.core.async/t20807";
cljs.core.async.t20807.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t20807");
});
cljs.core.async.t20807.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t20807.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20807.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20809){var self__ = this;
var _20809__$1 = this;return self__.meta20808;
});
cljs.core.async.t20807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20809,meta20808__$1){var self__ = this;
var _20809__$1 = this;return (new cljs.core.async.t20807(self__.ch,self__.p,self__.filter_GT_,meta20808__$1));
});
cljs.core.async.__GT_t20807 = (function __GT_t20807(ch__$1,p__$1,filter_GT___$1,meta20808){return (new cljs.core.async.t20807(ch__$1,p__$1,filter_GT___$1,meta20808));
});
}
return (new cljs.core.async.t20807(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___20892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20871){var state_val_20872 = (state_20871[1]);if((state_val_20872 === 1))
{var state_20871__$1 = state_20871;var statearr_20873_20893 = state_20871__$1;(statearr_20873_20893[2] = null);
(statearr_20873_20893[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_20872 === 2))
{var state_20871__$1 = state_20871;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20871__$1,4,ch);
} else
{if((state_val_20872 === 3))
{var inst_20869 = (state_20871[2]);var state_20871__$1 = state_20871;return cljs.core.async.impl.ioc_helpers.return_chan(state_20871__$1,inst_20869);
} else
{if((state_val_20872 === 4))
{var inst_20853 = (state_20871[7]);var inst_20853__$1 = (state_20871[2]);var inst_20854 = (inst_20853__$1 == null);var state_20871__$1 = (function (){var statearr_20874 = state_20871;(statearr_20874[7] = inst_20853__$1);
return statearr_20874;
})();if(cljs.core.truth_(inst_20854))
{var statearr_20875_20894 = state_20871__$1;(statearr_20875_20894[1] = 5);
} else
{var statearr_20876_20895 = state_20871__$1;(statearr_20876_20895[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_20872 === 5))
{var inst_20856 = cljs.core.async.close_BANG_(out);var state_20871__$1 = state_20871;var statearr_20877_20896 = state_20871__$1;(statearr_20877_20896[2] = inst_20856);
(statearr_20877_20896[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_20872 === 6))
{var inst_20853 = (state_20871[7]);var inst_20858 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20853) : p.call(null,inst_20853));var state_20871__$1 = state_20871;if(cljs.core.truth_(inst_20858))
{var statearr_20878_20897 = state_20871__$1;(statearr_20878_20897[1] = 8);
} else
{var statearr_20879_20898 = state_20871__$1;(statearr_20879_20898[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_20872 === 7))
{var inst_20867 = (state_20871[2]);var state_20871__$1 = state_20871;var statearr_20880_20899 = state_20871__$1;(statearr_20880_20899[2] = inst_20867);
(statearr_20880_20899[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_20872 === 8))
{var inst_20853 = (state_20871[7]);var state_20871__$1 = state_20871;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20871__$1,11,out,inst_20853);
} else
{if((state_val_20872 === 9))
{var state_20871__$1 = state_20871;var statearr_20881_20900 = state_20871__$1;(statearr_20881_20900[2] = null);
(statearr_20881_20900[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_20872 === 10))
{var inst_20864 = (state_20871[2]);var state_20871__$1 = (function (){var statearr_20882 = state_20871;(statearr_20882[8] = inst_20864);
return statearr_20882;
})();var statearr_20883_20901 = state_20871__$1;(statearr_20883_20901[2] = null);
(statearr_20883_20901[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_20872 === 11))
{var inst_20861 = (state_20871[2]);var state_20871__$1 = state_20871;var statearr_20884_20902 = state_20871__$1;(statearr_20884_20902[2] = inst_20861);
(statearr_20884_20902[1] = 10);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_20888 = [null,null,null,null,null,null,null,null,null];(statearr_20888[0] = state_machine__5507__auto__);
(statearr_20888[1] = 1);
return statearr_20888;
});
var state_machine__5507__auto____1 = (function (state_20871){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20871);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20889){if((e20889 instanceof Object))
{var ex__5510__auto__ = e20889;var statearr_20890_20903 = state_20871;(statearr_20890_20903[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20871);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e20889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__20904 = state_20871;
state_20871 = G__20904;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20871){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20891 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20892);
return statearr_20891;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21056){var state_val_21057 = (state_21056[1]);if((state_val_21057 === 1))
{var state_21056__$1 = state_21056;var statearr_21058_21095 = state_21056__$1;(statearr_21058_21095[2] = null);
(statearr_21058_21095[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 2))
{var state_21056__$1 = state_21056;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21056__$1,4,in$);
} else
{if((state_val_21057 === 3))
{var inst_21054 = (state_21056[2]);var state_21056__$1 = state_21056;return cljs.core.async.impl.ioc_helpers.return_chan(state_21056__$1,inst_21054);
} else
{if((state_val_21057 === 4))
{var inst_21002 = (state_21056[7]);var inst_21002__$1 = (state_21056[2]);var inst_21003 = (inst_21002__$1 == null);var state_21056__$1 = (function (){var statearr_21059 = state_21056;(statearr_21059[7] = inst_21002__$1);
return statearr_21059;
})();if(cljs.core.truth_(inst_21003))
{var statearr_21060_21096 = state_21056__$1;(statearr_21060_21096[1] = 5);
} else
{var statearr_21061_21097 = state_21056__$1;(statearr_21061_21097[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 5))
{var inst_21005 = cljs.core.async.close_BANG_(out);var state_21056__$1 = state_21056;var statearr_21062_21098 = state_21056__$1;(statearr_21062_21098[2] = inst_21005);
(statearr_21062_21098[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 6))
{var inst_21002 = (state_21056[7]);var inst_21007 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21002) : f.call(null,inst_21002));var inst_21012 = cljs.core.seq(inst_21007);var inst_21013 = inst_21012;var inst_21014 = null;var inst_21015 = 0;var inst_21016 = 0;var state_21056__$1 = (function (){var statearr_21063 = state_21056;(statearr_21063[8] = inst_21015);
(statearr_21063[9] = inst_21016);
(statearr_21063[10] = inst_21014);
(statearr_21063[11] = inst_21013);
return statearr_21063;
})();var statearr_21064_21099 = state_21056__$1;(statearr_21064_21099[2] = null);
(statearr_21064_21099[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 7))
{var inst_21052 = (state_21056[2]);var state_21056__$1 = state_21056;var statearr_21065_21100 = state_21056__$1;(statearr_21065_21100[2] = inst_21052);
(statearr_21065_21100[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 8))
{var inst_21015 = (state_21056[8]);var inst_21016 = (state_21056[9]);var inst_21018 = (inst_21016 < inst_21015);var inst_21019 = inst_21018;var state_21056__$1 = state_21056;if(cljs.core.truth_(inst_21019))
{var statearr_21066_21101 = state_21056__$1;(statearr_21066_21101[1] = 10);
} else
{var statearr_21067_21102 = state_21056__$1;(statearr_21067_21102[1] = 11);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 9))
{var inst_21049 = (state_21056[2]);var state_21056__$1 = (function (){var statearr_21068 = state_21056;(statearr_21068[12] = inst_21049);
return statearr_21068;
})();var statearr_21069_21103 = state_21056__$1;(statearr_21069_21103[2] = null);
(statearr_21069_21103[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 10))
{var inst_21016 = (state_21056[9]);var inst_21014 = (state_21056[10]);var inst_21021 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21014,inst_21016);var state_21056__$1 = state_21056;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21056__$1,13,out,inst_21021);
} else
{if((state_val_21057 === 11))
{var inst_21013 = (state_21056[11]);var inst_21027 = (state_21056[13]);var inst_21027__$1 = cljs.core.seq(inst_21013);var state_21056__$1 = (function (){var statearr_21073 = state_21056;(statearr_21073[13] = inst_21027__$1);
return statearr_21073;
})();if(inst_21027__$1)
{var statearr_21074_21104 = state_21056__$1;(statearr_21074_21104[1] = 14);
} else
{var statearr_21075_21105 = state_21056__$1;(statearr_21075_21105[1] = 15);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 12))
{var inst_21047 = (state_21056[2]);var state_21056__$1 = state_21056;var statearr_21076_21106 = state_21056__$1;(statearr_21076_21106[2] = inst_21047);
(statearr_21076_21106[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 13))
{var inst_21015 = (state_21056[8]);var inst_21016 = (state_21056[9]);var inst_21014 = (state_21056[10]);var inst_21013 = (state_21056[11]);var inst_21023 = (state_21056[2]);var inst_21024 = (inst_21016 + 1);var tmp21070 = inst_21015;var tmp21071 = inst_21014;var tmp21072 = inst_21013;var inst_21013__$1 = tmp21072;var inst_21014__$1 = tmp21071;var inst_21015__$1 = tmp21070;var inst_21016__$1 = inst_21024;var state_21056__$1 = (function (){var statearr_21077 = state_21056;(statearr_21077[8] = inst_21015__$1);
(statearr_21077[9] = inst_21016__$1);
(statearr_21077[14] = inst_21023);
(statearr_21077[10] = inst_21014__$1);
(statearr_21077[11] = inst_21013__$1);
return statearr_21077;
})();var statearr_21078_21107 = state_21056__$1;(statearr_21078_21107[2] = null);
(statearr_21078_21107[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 14))
{var inst_21027 = (state_21056[13]);var inst_21029 = cljs.core.chunked_seq_QMARK_(inst_21027);var state_21056__$1 = state_21056;if(inst_21029)
{var statearr_21079_21108 = state_21056__$1;(statearr_21079_21108[1] = 17);
} else
{var statearr_21080_21109 = state_21056__$1;(statearr_21080_21109[1] = 18);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 15))
{var state_21056__$1 = state_21056;var statearr_21081_21110 = state_21056__$1;(statearr_21081_21110[2] = null);
(statearr_21081_21110[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 16))
{var inst_21045 = (state_21056[2]);var state_21056__$1 = state_21056;var statearr_21082_21111 = state_21056__$1;(statearr_21082_21111[2] = inst_21045);
(statearr_21082_21111[1] = 12);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 17))
{var inst_21027 = (state_21056[13]);var inst_21031 = cljs.core.chunk_first(inst_21027);var inst_21032 = cljs.core.chunk_rest(inst_21027);var inst_21033 = cljs.core.count(inst_21031);var inst_21013 = inst_21032;var inst_21014 = inst_21031;var inst_21015 = inst_21033;var inst_21016 = 0;var state_21056__$1 = (function (){var statearr_21083 = state_21056;(statearr_21083[8] = inst_21015);
(statearr_21083[9] = inst_21016);
(statearr_21083[10] = inst_21014);
(statearr_21083[11] = inst_21013);
return statearr_21083;
})();var statearr_21084_21112 = state_21056__$1;(statearr_21084_21112[2] = null);
(statearr_21084_21112[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 18))
{var inst_21027 = (state_21056[13]);var inst_21036 = cljs.core.first(inst_21027);var state_21056__$1 = state_21056;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21056__$1,20,out,inst_21036);
} else
{if((state_val_21057 === 19))
{var inst_21042 = (state_21056[2]);var state_21056__$1 = state_21056;var statearr_21085_21113 = state_21056__$1;(statearr_21085_21113[2] = inst_21042);
(statearr_21085_21113[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21057 === 20))
{var inst_21027 = (state_21056[13]);var inst_21038 = (state_21056[2]);var inst_21039 = cljs.core.next(inst_21027);var inst_21013 = inst_21039;var inst_21014 = null;var inst_21015 = 0;var inst_21016 = 0;var state_21056__$1 = (function (){var statearr_21086 = state_21056;(statearr_21086[8] = inst_21015);
(statearr_21086[9] = inst_21016);
(statearr_21086[10] = inst_21014);
(statearr_21086[11] = inst_21013);
(statearr_21086[15] = inst_21038);
return statearr_21086;
})();var statearr_21087_21114 = state_21056__$1;(statearr_21087_21114[2] = null);
(statearr_21087_21114[1] = 8);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21091[0] = state_machine__5507__auto__);
(statearr_21091[1] = 1);
return statearr_21091;
});
var state_machine__5507__auto____1 = (function (state_21056){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21056);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21092){if((e21092 instanceof Object))
{var ex__5510__auto__ = e21092;var statearr_21093_21115 = state_21056;(statearr_21093_21115[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21056);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21116 = state_21056;
state_21056 = G__21116;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21056){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21094 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21094;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___21197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21176){var state_val_21177 = (state_21176[1]);if((state_val_21177 === 1))
{var state_21176__$1 = state_21176;var statearr_21178_21198 = state_21176__$1;(statearr_21178_21198[2] = null);
(statearr_21178_21198[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21177 === 2))
{var state_21176__$1 = state_21176;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21176__$1,4,from);
} else
{if((state_val_21177 === 3))
{var inst_21174 = (state_21176[2]);var state_21176__$1 = state_21176;return cljs.core.async.impl.ioc_helpers.return_chan(state_21176__$1,inst_21174);
} else
{if((state_val_21177 === 4))
{var inst_21159 = (state_21176[7]);var inst_21159__$1 = (state_21176[2]);var inst_21160 = (inst_21159__$1 == null);var state_21176__$1 = (function (){var statearr_21179 = state_21176;(statearr_21179[7] = inst_21159__$1);
return statearr_21179;
})();if(cljs.core.truth_(inst_21160))
{var statearr_21180_21199 = state_21176__$1;(statearr_21180_21199[1] = 5);
} else
{var statearr_21181_21200 = state_21176__$1;(statearr_21181_21200[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21177 === 5))
{var state_21176__$1 = state_21176;if(cljs.core.truth_(close_QMARK_))
{var statearr_21182_21201 = state_21176__$1;(statearr_21182_21201[1] = 8);
} else
{var statearr_21183_21202 = state_21176__$1;(statearr_21183_21202[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21177 === 6))
{var inst_21159 = (state_21176[7]);var state_21176__$1 = state_21176;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21176__$1,11,to,inst_21159);
} else
{if((state_val_21177 === 7))
{var inst_21172 = (state_21176[2]);var state_21176__$1 = state_21176;var statearr_21184_21203 = state_21176__$1;(statearr_21184_21203[2] = inst_21172);
(statearr_21184_21203[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21177 === 8))
{var inst_21163 = cljs.core.async.close_BANG_(to);var state_21176__$1 = state_21176;var statearr_21185_21204 = state_21176__$1;(statearr_21185_21204[2] = inst_21163);
(statearr_21185_21204[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21177 === 9))
{var state_21176__$1 = state_21176;var statearr_21186_21205 = state_21176__$1;(statearr_21186_21205[2] = null);
(statearr_21186_21205[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21177 === 10))
{var inst_21166 = (state_21176[2]);var state_21176__$1 = state_21176;var statearr_21187_21206 = state_21176__$1;(statearr_21187_21206[2] = inst_21166);
(statearr_21187_21206[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21177 === 11))
{var inst_21169 = (state_21176[2]);var state_21176__$1 = (function (){var statearr_21188 = state_21176;(statearr_21188[8] = inst_21169);
return statearr_21188;
})();var statearr_21189_21207 = state_21176__$1;(statearr_21189_21207[2] = null);
(statearr_21189_21207[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21193 = [null,null,null,null,null,null,null,null,null];(statearr_21193[0] = state_machine__5507__auto__);
(statearr_21193[1] = 1);
return statearr_21193;
});
var state_machine__5507__auto____1 = (function (state_21176){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21176);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21194){if((e21194 instanceof Object))
{var ex__5510__auto__ = e21194;var statearr_21195_21208 = state_21176;(statearr_21195_21208[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21176);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21194;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21209 = state_21176;
state_21176 = G__21209;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21176){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21196 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21197);
return statearr_21196;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___21296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21274){var state_val_21275 = (state_21274[1]);if((state_val_21275 === 1))
{var state_21274__$1 = state_21274;var statearr_21276_21297 = state_21274__$1;(statearr_21276_21297[2] = null);
(statearr_21276_21297[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21275 === 2))
{var state_21274__$1 = state_21274;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21274__$1,4,ch);
} else
{if((state_val_21275 === 3))
{var inst_21272 = (state_21274[2]);var state_21274__$1 = state_21274;return cljs.core.async.impl.ioc_helpers.return_chan(state_21274__$1,inst_21272);
} else
{if((state_val_21275 === 4))
{var inst_21255 = (state_21274[7]);var inst_21255__$1 = (state_21274[2]);var inst_21256 = (inst_21255__$1 == null);var state_21274__$1 = (function (){var statearr_21277 = state_21274;(statearr_21277[7] = inst_21255__$1);
return statearr_21277;
})();if(cljs.core.truth_(inst_21256))
{var statearr_21278_21298 = state_21274__$1;(statearr_21278_21298[1] = 5);
} else
{var statearr_21279_21299 = state_21274__$1;(statearr_21279_21299[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21275 === 5))
{var inst_21258 = cljs.core.async.close_BANG_(tc);var inst_21259 = cljs.core.async.close_BANG_(fc);var state_21274__$1 = (function (){var statearr_21280 = state_21274;(statearr_21280[8] = inst_21258);
return statearr_21280;
})();var statearr_21281_21300 = state_21274__$1;(statearr_21281_21300[2] = inst_21259);
(statearr_21281_21300[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21275 === 6))
{var inst_21255 = (state_21274[7]);var inst_21261 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21255) : p.call(null,inst_21255));var state_21274__$1 = state_21274;if(cljs.core.truth_(inst_21261))
{var statearr_21282_21301 = state_21274__$1;(statearr_21282_21301[1] = 9);
} else
{var statearr_21283_21302 = state_21274__$1;(statearr_21283_21302[1] = 10);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21275 === 7))
{var inst_21270 = (state_21274[2]);var state_21274__$1 = state_21274;var statearr_21284_21303 = state_21274__$1;(statearr_21284_21303[2] = inst_21270);
(statearr_21284_21303[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21275 === 8))
{var inst_21267 = (state_21274[2]);var state_21274__$1 = (function (){var statearr_21285 = state_21274;(statearr_21285[9] = inst_21267);
return statearr_21285;
})();var statearr_21286_21304 = state_21274__$1;(statearr_21286_21304[2] = null);
(statearr_21286_21304[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21275 === 9))
{var state_21274__$1 = state_21274;var statearr_21287_21305 = state_21274__$1;(statearr_21287_21305[2] = tc);
(statearr_21287_21305[1] = 11);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21275 === 10))
{var state_21274__$1 = state_21274;var statearr_21288_21306 = state_21274__$1;(statearr_21288_21306[2] = fc);
(statearr_21288_21306[1] = 11);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21275 === 11))
{var inst_21255 = (state_21274[7]);var inst_21265 = (state_21274[2]);var state_21274__$1 = state_21274;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21274__$1,8,inst_21265,inst_21255);
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
var state_machine__5507__auto____0 = (function (){var statearr_21292 = [null,null,null,null,null,null,null,null,null,null];(statearr_21292[0] = state_machine__5507__auto__);
(statearr_21292[1] = 1);
return statearr_21292;
});
var state_machine__5507__auto____1 = (function (state_21274){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21274);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21293){if((e21293 instanceof Object))
{var ex__5510__auto__ = e21293;var statearr_21294_21307 = state_21274;(statearr_21294_21307[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21274);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21308 = state_21274;
state_21274 = G__21308;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21274){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21295 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21296);
return statearr_21295;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21355){var state_val_21356 = (state_21355[1]);if((state_val_21356 === 7))
{var inst_21351 = (state_21355[2]);var state_21355__$1 = state_21355;var statearr_21357_21373 = state_21355__$1;(statearr_21357_21373[2] = inst_21351);
(statearr_21357_21373[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21356 === 6))
{var inst_21344 = (state_21355[7]);var inst_21341 = (state_21355[8]);var inst_21348 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21341,inst_21344) : f.call(null,inst_21341,inst_21344));var inst_21341__$1 = inst_21348;var state_21355__$1 = (function (){var statearr_21358 = state_21355;(statearr_21358[8] = inst_21341__$1);
return statearr_21358;
})();var statearr_21359_21374 = state_21355__$1;(statearr_21359_21374[2] = null);
(statearr_21359_21374[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21356 === 5))
{var inst_21341 = (state_21355[8]);var state_21355__$1 = state_21355;var statearr_21360_21375 = state_21355__$1;(statearr_21360_21375[2] = inst_21341);
(statearr_21360_21375[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21356 === 4))
{var inst_21344 = (state_21355[7]);var inst_21344__$1 = (state_21355[2]);var inst_21345 = (inst_21344__$1 == null);var state_21355__$1 = (function (){var statearr_21361 = state_21355;(statearr_21361[7] = inst_21344__$1);
return statearr_21361;
})();if(cljs.core.truth_(inst_21345))
{var statearr_21362_21376 = state_21355__$1;(statearr_21362_21376[1] = 5);
} else
{var statearr_21363_21377 = state_21355__$1;(statearr_21363_21377[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21356 === 3))
{var inst_21353 = (state_21355[2]);var state_21355__$1 = state_21355;return cljs.core.async.impl.ioc_helpers.return_chan(state_21355__$1,inst_21353);
} else
{if((state_val_21356 === 2))
{var state_21355__$1 = state_21355;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21355__$1,4,ch);
} else
{if((state_val_21356 === 1))
{var inst_21341 = init;var state_21355__$1 = (function (){var statearr_21364 = state_21355;(statearr_21364[8] = inst_21341);
return statearr_21364;
})();var statearr_21365_21378 = state_21355__$1;(statearr_21365_21378[2] = null);
(statearr_21365_21378[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21369 = [null,null,null,null,null,null,null,null,null];(statearr_21369[0] = state_machine__5507__auto__);
(statearr_21369[1] = 1);
return statearr_21369;
});
var state_machine__5507__auto____1 = (function (state_21355){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21355);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21370){if((e21370 instanceof Object))
{var ex__5510__auto__ = e21370;var statearr_21371_21379 = state_21355;(statearr_21371_21379[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21355);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21370;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21380 = state_21355;
state_21355 = G__21380;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21355){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21372 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21372;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21442){var state_val_21443 = (state_21442[1]);if((state_val_21443 === 1))
{var inst_21422 = cljs.core.seq(coll);var inst_21423 = inst_21422;var state_21442__$1 = (function (){var statearr_21444 = state_21442;(statearr_21444[7] = inst_21423);
return statearr_21444;
})();var statearr_21445_21463 = state_21442__$1;(statearr_21445_21463[2] = null);
(statearr_21445_21463[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21443 === 2))
{var inst_21423 = (state_21442[7]);var state_21442__$1 = state_21442;if(cljs.core.truth_(inst_21423))
{var statearr_21446_21464 = state_21442__$1;(statearr_21446_21464[1] = 4);
} else
{var statearr_21447_21465 = state_21442__$1;(statearr_21447_21465[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21443 === 3))
{var inst_21440 = (state_21442[2]);var state_21442__$1 = state_21442;return cljs.core.async.impl.ioc_helpers.return_chan(state_21442__$1,inst_21440);
} else
{if((state_val_21443 === 4))
{var inst_21423 = (state_21442[7]);var inst_21426 = cljs.core.first(inst_21423);var state_21442__$1 = state_21442;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21442__$1,7,ch,inst_21426);
} else
{if((state_val_21443 === 5))
{var state_21442__$1 = state_21442;if(cljs.core.truth_(close_QMARK_))
{var statearr_21448_21466 = state_21442__$1;(statearr_21448_21466[1] = 8);
} else
{var statearr_21449_21467 = state_21442__$1;(statearr_21449_21467[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21443 === 6))
{var inst_21438 = (state_21442[2]);var state_21442__$1 = state_21442;var statearr_21450_21468 = state_21442__$1;(statearr_21450_21468[2] = inst_21438);
(statearr_21450_21468[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21443 === 7))
{var inst_21423 = (state_21442[7]);var inst_21428 = (state_21442[2]);var inst_21429 = cljs.core.next(inst_21423);var inst_21423__$1 = inst_21429;var state_21442__$1 = (function (){var statearr_21451 = state_21442;(statearr_21451[8] = inst_21428);
(statearr_21451[7] = inst_21423__$1);
return statearr_21451;
})();var statearr_21452_21469 = state_21442__$1;(statearr_21452_21469[2] = null);
(statearr_21452_21469[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21443 === 8))
{var inst_21433 = cljs.core.async.close_BANG_(ch);var state_21442__$1 = state_21442;var statearr_21453_21470 = state_21442__$1;(statearr_21453_21470[2] = inst_21433);
(statearr_21453_21470[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21443 === 9))
{var state_21442__$1 = state_21442;var statearr_21454_21471 = state_21442__$1;(statearr_21454_21471[2] = null);
(statearr_21454_21471[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21443 === 10))
{var inst_21436 = (state_21442[2]);var state_21442__$1 = state_21442;var statearr_21455_21472 = state_21442__$1;(statearr_21455_21472[2] = inst_21436);
(statearr_21455_21472[1] = 6);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21459 = [null,null,null,null,null,null,null,null,null];(statearr_21459[0] = state_machine__5507__auto__);
(statearr_21459[1] = 1);
return statearr_21459;
});
var state_machine__5507__auto____1 = (function (state_21442){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21442);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21460){if((e21460 instanceof Object))
{var ex__5510__auto__ = e21460;var statearr_21461_21473 = state_21442;(statearr_21461_21473[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21442);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21474 = state_21442;
state_21442 = G__21474;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21442){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21462 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21462;
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
cljs.core.async.Mux = (function (){var obj21476 = {};return obj21476;
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
cljs.core.async.Mult = (function (){var obj21478 = {};return obj21478;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21702 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21702 = (function (cs,ch,mult,meta21703){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21703 = meta21703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21702.cljs$lang$type = true;
cljs.core.async.t21702.cljs$lang$ctorStr = "cljs.core.async/t21702";
cljs.core.async.t21702.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21702");
});})(cs))
;
cljs.core.async.t21702.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21702.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21702.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21702.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21702.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21704){var self__ = this;
var _21704__$1 = this;return self__.meta21703;
});})(cs))
;
cljs.core.async.t21702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21704,meta21703__$1){var self__ = this;
var _21704__$1 = this;return (new cljs.core.async.t21702(self__.cs,self__.ch,self__.mult,meta21703__$1));
});})(cs))
;
cljs.core.async.__GT_t21702 = ((function (cs){
return (function __GT_t21702(cs__$1,ch__$1,mult__$1,meta21703){return (new cljs.core.async.t21702(cs__$1,ch__$1,mult__$1,meta21703));
});})(cs))
;
}
return (new cljs.core.async.t21702(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___21925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21839){var state_val_21840 = (state_21839[1]);if((state_val_21840 === 32))
{var inst_21707 = (state_21839[7]);var inst_21783 = (state_21839[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21839,31,Object,null,30);var inst_21790 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21783,inst_21707,done);var state_21839__$1 = state_21839;var statearr_21841_21926 = state_21839__$1;(statearr_21841_21926[2] = inst_21790);
cljs.core.async.impl.ioc_helpers.process_exception(state_21839__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 1))
{var state_21839__$1 = state_21839;var statearr_21842_21927 = state_21839__$1;(statearr_21842_21927[2] = null);
(statearr_21842_21927[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 33))
{var inst_21796 = (state_21839[9]);var inst_21798 = cljs.core.chunked_seq_QMARK_(inst_21796);var state_21839__$1 = state_21839;if(inst_21798)
{var statearr_21843_21928 = state_21839__$1;(statearr_21843_21928[1] = 36);
} else
{var statearr_21844_21929 = state_21839__$1;(statearr_21844_21929[1] = 37);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 2))
{var state_21839__$1 = state_21839;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21839__$1,4,ch);
} else
{if((state_val_21840 === 34))
{var state_21839__$1 = state_21839;var statearr_21845_21930 = state_21839__$1;(statearr_21845_21930[2] = null);
(statearr_21845_21930[1] = 35);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 3))
{var inst_21837 = (state_21839[2]);var state_21839__$1 = state_21839;return cljs.core.async.impl.ioc_helpers.return_chan(state_21839__$1,inst_21837);
} else
{if((state_val_21840 === 35))
{var inst_21821 = (state_21839[2]);var state_21839__$1 = state_21839;var statearr_21846_21931 = state_21839__$1;(statearr_21846_21931[2] = inst_21821);
(statearr_21846_21931[1] = 29);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 4))
{var inst_21707 = (state_21839[7]);var inst_21707__$1 = (state_21839[2]);var inst_21708 = (inst_21707__$1 == null);var state_21839__$1 = (function (){var statearr_21847 = state_21839;(statearr_21847[7] = inst_21707__$1);
return statearr_21847;
})();if(cljs.core.truth_(inst_21708))
{var statearr_21848_21932 = state_21839__$1;(statearr_21848_21932[1] = 5);
} else
{var statearr_21849_21933 = state_21839__$1;(statearr_21849_21933[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 36))
{var inst_21796 = (state_21839[9]);var inst_21800 = cljs.core.chunk_first(inst_21796);var inst_21801 = cljs.core.chunk_rest(inst_21796);var inst_21802 = cljs.core.count(inst_21800);var inst_21775 = inst_21801;var inst_21776 = inst_21800;var inst_21777 = inst_21802;var inst_21778 = 0;var state_21839__$1 = (function (){var statearr_21850 = state_21839;(statearr_21850[10] = inst_21775);
(statearr_21850[11] = inst_21776);
(statearr_21850[12] = inst_21777);
(statearr_21850[13] = inst_21778);
return statearr_21850;
})();var statearr_21851_21934 = state_21839__$1;(statearr_21851_21934[2] = null);
(statearr_21851_21934[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 5))
{var inst_21714 = cljs.core.deref(cs);var inst_21715 = cljs.core.seq(inst_21714);var inst_21716 = inst_21715;var inst_21717 = null;var inst_21718 = 0;var inst_21719 = 0;var state_21839__$1 = (function (){var statearr_21852 = state_21839;(statearr_21852[14] = inst_21718);
(statearr_21852[15] = inst_21719);
(statearr_21852[16] = inst_21716);
(statearr_21852[17] = inst_21717);
return statearr_21852;
})();var statearr_21853_21935 = state_21839__$1;(statearr_21853_21935[2] = null);
(statearr_21853_21935[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 37))
{var inst_21796 = (state_21839[9]);var inst_21805 = cljs.core.first(inst_21796);var state_21839__$1 = (function (){var statearr_21854 = state_21839;(statearr_21854[18] = inst_21805);
return statearr_21854;
})();var statearr_21855_21936 = state_21839__$1;(statearr_21855_21936[2] = null);
(statearr_21855_21936[1] = 41);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 6))
{var inst_21767 = (state_21839[19]);var inst_21766 = cljs.core.deref(cs);var inst_21767__$1 = cljs.core.keys(inst_21766);var inst_21768 = cljs.core.count(inst_21767__$1);var inst_21769 = cljs.core.reset_BANG_(dctr,inst_21768);var inst_21774 = cljs.core.seq(inst_21767__$1);var inst_21775 = inst_21774;var inst_21776 = null;var inst_21777 = 0;var inst_21778 = 0;var state_21839__$1 = (function (){var statearr_21856 = state_21839;(statearr_21856[10] = inst_21775);
(statearr_21856[11] = inst_21776);
(statearr_21856[12] = inst_21777);
(statearr_21856[19] = inst_21767__$1);
(statearr_21856[20] = inst_21769);
(statearr_21856[13] = inst_21778);
return statearr_21856;
})();var statearr_21857_21937 = state_21839__$1;(statearr_21857_21937[2] = null);
(statearr_21857_21937[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 38))
{var inst_21818 = (state_21839[2]);var state_21839__$1 = state_21839;var statearr_21858_21938 = state_21839__$1;(statearr_21858_21938[2] = inst_21818);
(statearr_21858_21938[1] = 35);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 7))
{var inst_21835 = (state_21839[2]);var state_21839__$1 = state_21839;var statearr_21859_21939 = state_21839__$1;(statearr_21859_21939[2] = inst_21835);
(statearr_21859_21939[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 39))
{var inst_21796 = (state_21839[9]);var inst_21814 = (state_21839[2]);var inst_21815 = cljs.core.next(inst_21796);var inst_21775 = inst_21815;var inst_21776 = null;var inst_21777 = 0;var inst_21778 = 0;var state_21839__$1 = (function (){var statearr_21860 = state_21839;(statearr_21860[10] = inst_21775);
(statearr_21860[11] = inst_21776);
(statearr_21860[12] = inst_21777);
(statearr_21860[13] = inst_21778);
(statearr_21860[21] = inst_21814);
return statearr_21860;
})();var statearr_21861_21940 = state_21839__$1;(statearr_21861_21940[2] = null);
(statearr_21861_21940[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 8))
{var inst_21718 = (state_21839[14]);var inst_21719 = (state_21839[15]);var inst_21721 = (inst_21719 < inst_21718);var inst_21722 = inst_21721;var state_21839__$1 = state_21839;if(cljs.core.truth_(inst_21722))
{var statearr_21862_21941 = state_21839__$1;(statearr_21862_21941[1] = 10);
} else
{var statearr_21863_21942 = state_21839__$1;(statearr_21863_21942[1] = 11);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 40))
{var inst_21805 = (state_21839[18]);var inst_21806 = (state_21839[2]);var inst_21807 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21808 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21805);var state_21839__$1 = (function (){var statearr_21864 = state_21839;(statearr_21864[22] = inst_21806);
(statearr_21864[23] = inst_21807);
return statearr_21864;
})();var statearr_21865_21943 = state_21839__$1;(statearr_21865_21943[2] = inst_21808);
cljs.core.async.impl.ioc_helpers.process_exception(state_21839__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 9))
{var inst_21764 = (state_21839[2]);var state_21839__$1 = state_21839;var statearr_21866_21944 = state_21839__$1;(statearr_21866_21944[2] = inst_21764);
(statearr_21866_21944[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 41))
{var inst_21707 = (state_21839[7]);var inst_21805 = (state_21839[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21839,40,Object,null,39);var inst_21812 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21805,inst_21707,done);var state_21839__$1 = state_21839;var statearr_21867_21945 = state_21839__$1;(statearr_21867_21945[2] = inst_21812);
cljs.core.async.impl.ioc_helpers.process_exception(state_21839__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 10))
{var inst_21719 = (state_21839[15]);var inst_21717 = (state_21839[17]);var inst_21725 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21717,inst_21719);var inst_21726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21725,0,null);var inst_21727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21725,1,null);var state_21839__$1 = (function (){var statearr_21868 = state_21839;(statearr_21868[24] = inst_21726);
return statearr_21868;
})();if(cljs.core.truth_(inst_21727))
{var statearr_21869_21946 = state_21839__$1;(statearr_21869_21946[1] = 13);
} else
{var statearr_21870_21947 = state_21839__$1;(statearr_21870_21947[1] = 14);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 42))
{var state_21839__$1 = state_21839;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21839__$1,45,dchan);
} else
{if((state_val_21840 === 11))
{var inst_21716 = (state_21839[16]);var inst_21736 = (state_21839[25]);var inst_21736__$1 = cljs.core.seq(inst_21716);var state_21839__$1 = (function (){var statearr_21871 = state_21839;(statearr_21871[25] = inst_21736__$1);
return statearr_21871;
})();if(inst_21736__$1)
{var statearr_21872_21948 = state_21839__$1;(statearr_21872_21948[1] = 16);
} else
{var statearr_21873_21949 = state_21839__$1;(statearr_21873_21949[1] = 17);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 43))
{var state_21839__$1 = state_21839;var statearr_21874_21950 = state_21839__$1;(statearr_21874_21950[2] = null);
(statearr_21874_21950[1] = 44);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 12))
{var inst_21762 = (state_21839[2]);var state_21839__$1 = state_21839;var statearr_21875_21951 = state_21839__$1;(statearr_21875_21951[2] = inst_21762);
(statearr_21875_21951[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 44))
{var inst_21832 = (state_21839[2]);var state_21839__$1 = (function (){var statearr_21876 = state_21839;(statearr_21876[26] = inst_21832);
return statearr_21876;
})();var statearr_21877_21952 = state_21839__$1;(statearr_21877_21952[2] = null);
(statearr_21877_21952[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 13))
{var inst_21726 = (state_21839[24]);var inst_21729 = cljs.core.async.close_BANG_(inst_21726);var state_21839__$1 = state_21839;var statearr_21878_21953 = state_21839__$1;(statearr_21878_21953[2] = inst_21729);
(statearr_21878_21953[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 45))
{var inst_21829 = (state_21839[2]);var state_21839__$1 = state_21839;var statearr_21882_21954 = state_21839__$1;(statearr_21882_21954[2] = inst_21829);
(statearr_21882_21954[1] = 44);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 14))
{var state_21839__$1 = state_21839;var statearr_21883_21955 = state_21839__$1;(statearr_21883_21955[2] = null);
(statearr_21883_21955[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 15))
{var inst_21718 = (state_21839[14]);var inst_21719 = (state_21839[15]);var inst_21716 = (state_21839[16]);var inst_21717 = (state_21839[17]);var inst_21732 = (state_21839[2]);var inst_21733 = (inst_21719 + 1);var tmp21879 = inst_21718;var tmp21880 = inst_21716;var tmp21881 = inst_21717;var inst_21716__$1 = tmp21880;var inst_21717__$1 = tmp21881;var inst_21718__$1 = tmp21879;var inst_21719__$1 = inst_21733;var state_21839__$1 = (function (){var statearr_21884 = state_21839;(statearr_21884[27] = inst_21732);
(statearr_21884[14] = inst_21718__$1);
(statearr_21884[15] = inst_21719__$1);
(statearr_21884[16] = inst_21716__$1);
(statearr_21884[17] = inst_21717__$1);
return statearr_21884;
})();var statearr_21885_21956 = state_21839__$1;(statearr_21885_21956[2] = null);
(statearr_21885_21956[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 16))
{var inst_21736 = (state_21839[25]);var inst_21738 = cljs.core.chunked_seq_QMARK_(inst_21736);var state_21839__$1 = state_21839;if(inst_21738)
{var statearr_21886_21957 = state_21839__$1;(statearr_21886_21957[1] = 19);
} else
{var statearr_21887_21958 = state_21839__$1;(statearr_21887_21958[1] = 20);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 17))
{var state_21839__$1 = state_21839;var statearr_21888_21959 = state_21839__$1;(statearr_21888_21959[2] = null);
(statearr_21888_21959[1] = 18);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 18))
{var inst_21760 = (state_21839[2]);var state_21839__$1 = state_21839;var statearr_21889_21960 = state_21839__$1;(statearr_21889_21960[2] = inst_21760);
(statearr_21889_21960[1] = 12);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 19))
{var inst_21736 = (state_21839[25]);var inst_21740 = cljs.core.chunk_first(inst_21736);var inst_21741 = cljs.core.chunk_rest(inst_21736);var inst_21742 = cljs.core.count(inst_21740);var inst_21716 = inst_21741;var inst_21717 = inst_21740;var inst_21718 = inst_21742;var inst_21719 = 0;var state_21839__$1 = (function (){var statearr_21890 = state_21839;(statearr_21890[14] = inst_21718);
(statearr_21890[15] = inst_21719);
(statearr_21890[16] = inst_21716);
(statearr_21890[17] = inst_21717);
return statearr_21890;
})();var statearr_21891_21961 = state_21839__$1;(statearr_21891_21961[2] = null);
(statearr_21891_21961[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 20))
{var inst_21736 = (state_21839[25]);var inst_21746 = cljs.core.first(inst_21736);var inst_21747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21746,0,null);var inst_21748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21746,1,null);var state_21839__$1 = (function (){var statearr_21892 = state_21839;(statearr_21892[28] = inst_21747);
return statearr_21892;
})();if(cljs.core.truth_(inst_21748))
{var statearr_21893_21962 = state_21839__$1;(statearr_21893_21962[1] = 22);
} else
{var statearr_21894_21963 = state_21839__$1;(statearr_21894_21963[1] = 23);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 21))
{var inst_21757 = (state_21839[2]);var state_21839__$1 = state_21839;var statearr_21895_21964 = state_21839__$1;(statearr_21895_21964[2] = inst_21757);
(statearr_21895_21964[1] = 18);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 22))
{var inst_21747 = (state_21839[28]);var inst_21750 = cljs.core.async.close_BANG_(inst_21747);var state_21839__$1 = state_21839;var statearr_21896_21965 = state_21839__$1;(statearr_21896_21965[2] = inst_21750);
(statearr_21896_21965[1] = 24);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 23))
{var state_21839__$1 = state_21839;var statearr_21897_21966 = state_21839__$1;(statearr_21897_21966[2] = null);
(statearr_21897_21966[1] = 24);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 24))
{var inst_21736 = (state_21839[25]);var inst_21753 = (state_21839[2]);var inst_21754 = cljs.core.next(inst_21736);var inst_21716 = inst_21754;var inst_21717 = null;var inst_21718 = 0;var inst_21719 = 0;var state_21839__$1 = (function (){var statearr_21898 = state_21839;(statearr_21898[14] = inst_21718);
(statearr_21898[15] = inst_21719);
(statearr_21898[16] = inst_21716);
(statearr_21898[17] = inst_21717);
(statearr_21898[29] = inst_21753);
return statearr_21898;
})();var statearr_21899_21967 = state_21839__$1;(statearr_21899_21967[2] = null);
(statearr_21899_21967[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 25))
{var inst_21777 = (state_21839[12]);var inst_21778 = (state_21839[13]);var inst_21780 = (inst_21778 < inst_21777);var inst_21781 = inst_21780;var state_21839__$1 = state_21839;if(cljs.core.truth_(inst_21781))
{var statearr_21900_21968 = state_21839__$1;(statearr_21900_21968[1] = 27);
} else
{var statearr_21901_21969 = state_21839__$1;(statearr_21901_21969[1] = 28);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 26))
{var inst_21767 = (state_21839[19]);var inst_21825 = (state_21839[2]);var inst_21826 = cljs.core.seq(inst_21767);var state_21839__$1 = (function (){var statearr_21902 = state_21839;(statearr_21902[30] = inst_21825);
return statearr_21902;
})();if(inst_21826)
{var statearr_21903_21970 = state_21839__$1;(statearr_21903_21970[1] = 42);
} else
{var statearr_21904_21971 = state_21839__$1;(statearr_21904_21971[1] = 43);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 27))
{var inst_21776 = (state_21839[11]);var inst_21778 = (state_21839[13]);var inst_21783 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21776,inst_21778);var state_21839__$1 = (function (){var statearr_21905 = state_21839;(statearr_21905[8] = inst_21783);
return statearr_21905;
})();var statearr_21906_21972 = state_21839__$1;(statearr_21906_21972[2] = null);
(statearr_21906_21972[1] = 32);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 28))
{var inst_21775 = (state_21839[10]);var inst_21796 = (state_21839[9]);var inst_21796__$1 = cljs.core.seq(inst_21775);var state_21839__$1 = (function (){var statearr_21910 = state_21839;(statearr_21910[9] = inst_21796__$1);
return statearr_21910;
})();if(inst_21796__$1)
{var statearr_21911_21973 = state_21839__$1;(statearr_21911_21973[1] = 33);
} else
{var statearr_21912_21974 = state_21839__$1;(statearr_21912_21974[1] = 34);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 29))
{var inst_21823 = (state_21839[2]);var state_21839__$1 = state_21839;var statearr_21913_21975 = state_21839__$1;(statearr_21913_21975[2] = inst_21823);
(statearr_21913_21975[1] = 26);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 30))
{var inst_21775 = (state_21839[10]);var inst_21776 = (state_21839[11]);var inst_21777 = (state_21839[12]);var inst_21778 = (state_21839[13]);var inst_21792 = (state_21839[2]);var inst_21793 = (inst_21778 + 1);var tmp21907 = inst_21775;var tmp21908 = inst_21776;var tmp21909 = inst_21777;var inst_21775__$1 = tmp21907;var inst_21776__$1 = tmp21908;var inst_21777__$1 = tmp21909;var inst_21778__$1 = inst_21793;var state_21839__$1 = (function (){var statearr_21914 = state_21839;(statearr_21914[10] = inst_21775__$1);
(statearr_21914[11] = inst_21776__$1);
(statearr_21914[12] = inst_21777__$1);
(statearr_21914[13] = inst_21778__$1);
(statearr_21914[31] = inst_21792);
return statearr_21914;
})();var statearr_21915_21976 = state_21839__$1;(statearr_21915_21976[2] = null);
(statearr_21915_21976[1] = 25);
return cljs.core.constant$keyword$123;
} else
{if((state_val_21840 === 31))
{var inst_21783 = (state_21839[8]);var inst_21784 = (state_21839[2]);var inst_21785 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21786 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21783);var state_21839__$1 = (function (){var statearr_21916 = state_21839;(statearr_21916[32] = inst_21784);
(statearr_21916[33] = inst_21785);
return statearr_21916;
})();var statearr_21917_21977 = state_21839__$1;(statearr_21917_21977[2] = inst_21786);
cljs.core.async.impl.ioc_helpers.process_exception(state_21839__$1);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_21921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21921[0] = state_machine__5507__auto__);
(statearr_21921[1] = 1);
return statearr_21921;
});
var state_machine__5507__auto____1 = (function (state_21839){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21839);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21922){if((e21922 instanceof Object))
{var ex__5510__auto__ = e21922;var statearr_21923_21978 = state_21839;(statearr_21923_21978[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21839);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e21922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__21979 = state_21839;
state_21839 = G__21979;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21839){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21924 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21925);
return statearr_21924;
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
cljs.core.async.Mix = (function (){var obj21981 = {};return obj21981;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,null,cljs.core.constant$keyword$131,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$132);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$131);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$132,chs);var pauses = pick(cljs.core.constant$keyword$130,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$133,solos,cljs.core.constant$keyword$134,pick(cljs.core.constant$keyword$131,chs),cljs.core.constant$keyword$135,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$130)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t22091 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22091 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22092){
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
this.meta22092 = meta22092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22091.cljs$lang$type = true;
cljs.core.async.t22091.cljs$lang$ctorStr = "cljs.core.async/t22091";
cljs.core.async.t22091.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22091");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22091.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22091.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22091.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22091.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22091.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22091.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22091.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22093){var self__ = this;
var _22093__$1 = this;return self__.meta22092;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22093,meta22092__$1){var self__ = this;
var _22093__$1 = this;return (new cljs.core.async.t22091(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22092__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22091 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22091(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22092){return (new cljs.core.async.t22091(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22092));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22091(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___22200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22158){var state_val_22159 = (state_22158[1]);if((state_val_22159 === 1))
{var inst_22097 = (state_22158[7]);var inst_22097__$1 = calc_state();var inst_22098 = cljs.core.seq_QMARK_(inst_22097__$1);var state_22158__$1 = (function (){var statearr_22160 = state_22158;(statearr_22160[7] = inst_22097__$1);
return statearr_22160;
})();if(inst_22098)
{var statearr_22161_22201 = state_22158__$1;(statearr_22161_22201[1] = 2);
} else
{var statearr_22162_22202 = state_22158__$1;(statearr_22162_22202[1] = 3);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 2))
{var inst_22097 = (state_22158[7]);var inst_22100 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22097);var state_22158__$1 = state_22158;var statearr_22163_22203 = state_22158__$1;(statearr_22163_22203[2] = inst_22100);
(statearr_22163_22203[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 3))
{var inst_22097 = (state_22158[7]);var state_22158__$1 = state_22158;var statearr_22164_22204 = state_22158__$1;(statearr_22164_22204[2] = inst_22097);
(statearr_22164_22204[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 4))
{var inst_22097 = (state_22158[7]);var inst_22103 = (state_22158[2]);var inst_22104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22103,cljs.core.constant$keyword$135);var inst_22105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22103,cljs.core.constant$keyword$134);var inst_22106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22103,cljs.core.constant$keyword$133);var inst_22107 = inst_22097;var state_22158__$1 = (function (){var statearr_22165 = state_22158;(statearr_22165[8] = inst_22104);
(statearr_22165[9] = inst_22105);
(statearr_22165[10] = inst_22106);
(statearr_22165[11] = inst_22107);
return statearr_22165;
})();var statearr_22166_22205 = state_22158__$1;(statearr_22166_22205[2] = null);
(statearr_22166_22205[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 5))
{var inst_22107 = (state_22158[11]);var inst_22110 = cljs.core.seq_QMARK_(inst_22107);var state_22158__$1 = state_22158;if(inst_22110)
{var statearr_22167_22206 = state_22158__$1;(statearr_22167_22206[1] = 7);
} else
{var statearr_22168_22207 = state_22158__$1;(statearr_22168_22207[1] = 8);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 6))
{var inst_22156 = (state_22158[2]);var state_22158__$1 = state_22158;return cljs.core.async.impl.ioc_helpers.return_chan(state_22158__$1,inst_22156);
} else
{if((state_val_22159 === 7))
{var inst_22107 = (state_22158[11]);var inst_22112 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22107);var state_22158__$1 = state_22158;var statearr_22169_22208 = state_22158__$1;(statearr_22169_22208[2] = inst_22112);
(statearr_22169_22208[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 8))
{var inst_22107 = (state_22158[11]);var state_22158__$1 = state_22158;var statearr_22170_22209 = state_22158__$1;(statearr_22170_22209[2] = inst_22107);
(statearr_22170_22209[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 9))
{var inst_22115 = (state_22158[12]);var inst_22115__$1 = (state_22158[2]);var inst_22116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22115__$1,cljs.core.constant$keyword$135);var inst_22117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22115__$1,cljs.core.constant$keyword$134);var inst_22118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22115__$1,cljs.core.constant$keyword$133);var state_22158__$1 = (function (){var statearr_22171 = state_22158;(statearr_22171[12] = inst_22115__$1);
(statearr_22171[13] = inst_22117);
(statearr_22171[14] = inst_22118);
return statearr_22171;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22158__$1,10,inst_22116);
} else
{if((state_val_22159 === 10))
{var inst_22123 = (state_22158[15]);var inst_22122 = (state_22158[16]);var inst_22121 = (state_22158[2]);var inst_22122__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22121,0,null);var inst_22123__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22121,1,null);var inst_22124 = (inst_22122__$1 == null);var inst_22125 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22123__$1,change);var inst_22126 = (inst_22124) || (inst_22125);var state_22158__$1 = (function (){var statearr_22172 = state_22158;(statearr_22172[15] = inst_22123__$1);
(statearr_22172[16] = inst_22122__$1);
return statearr_22172;
})();if(cljs.core.truth_(inst_22126))
{var statearr_22173_22210 = state_22158__$1;(statearr_22173_22210[1] = 11);
} else
{var statearr_22174_22211 = state_22158__$1;(statearr_22174_22211[1] = 12);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 11))
{var inst_22122 = (state_22158[16]);var inst_22128 = (inst_22122 == null);var state_22158__$1 = state_22158;if(cljs.core.truth_(inst_22128))
{var statearr_22175_22212 = state_22158__$1;(statearr_22175_22212[1] = 14);
} else
{var statearr_22176_22213 = state_22158__$1;(statearr_22176_22213[1] = 15);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 12))
{var inst_22137 = (state_22158[17]);var inst_22123 = (state_22158[15]);var inst_22118 = (state_22158[14]);var inst_22137__$1 = (inst_22118.cljs$core$IFn$_invoke$arity$1 ? inst_22118.cljs$core$IFn$_invoke$arity$1(inst_22123) : inst_22118.call(null,inst_22123));var state_22158__$1 = (function (){var statearr_22177 = state_22158;(statearr_22177[17] = inst_22137__$1);
return statearr_22177;
})();if(cljs.core.truth_(inst_22137__$1))
{var statearr_22178_22214 = state_22158__$1;(statearr_22178_22214[1] = 17);
} else
{var statearr_22179_22215 = state_22158__$1;(statearr_22179_22215[1] = 18);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 13))
{var inst_22154 = (state_22158[2]);var state_22158__$1 = state_22158;var statearr_22180_22216 = state_22158__$1;(statearr_22180_22216[2] = inst_22154);
(statearr_22180_22216[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 14))
{var inst_22123 = (state_22158[15]);var inst_22130 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22123);var state_22158__$1 = state_22158;var statearr_22181_22217 = state_22158__$1;(statearr_22181_22217[2] = inst_22130);
(statearr_22181_22217[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 15))
{var state_22158__$1 = state_22158;var statearr_22182_22218 = state_22158__$1;(statearr_22182_22218[2] = null);
(statearr_22182_22218[1] = 16);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 16))
{var inst_22133 = (state_22158[2]);var inst_22134 = calc_state();var inst_22107 = inst_22134;var state_22158__$1 = (function (){var statearr_22183 = state_22158;(statearr_22183[11] = inst_22107);
(statearr_22183[18] = inst_22133);
return statearr_22183;
})();var statearr_22184_22219 = state_22158__$1;(statearr_22184_22219[2] = null);
(statearr_22184_22219[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 17))
{var inst_22137 = (state_22158[17]);var state_22158__$1 = state_22158;var statearr_22185_22220 = state_22158__$1;(statearr_22185_22220[2] = inst_22137);
(statearr_22185_22220[1] = 19);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 18))
{var inst_22117 = (state_22158[13]);var inst_22123 = (state_22158[15]);var inst_22118 = (state_22158[14]);var inst_22140 = cljs.core.empty_QMARK_(inst_22118);var inst_22141 = (inst_22117.cljs$core$IFn$_invoke$arity$1 ? inst_22117.cljs$core$IFn$_invoke$arity$1(inst_22123) : inst_22117.call(null,inst_22123));var inst_22142 = cljs.core.not(inst_22141);var inst_22143 = (inst_22140) && (inst_22142);var state_22158__$1 = state_22158;var statearr_22186_22221 = state_22158__$1;(statearr_22186_22221[2] = inst_22143);
(statearr_22186_22221[1] = 19);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 19))
{var inst_22145 = (state_22158[2]);var state_22158__$1 = state_22158;if(cljs.core.truth_(inst_22145))
{var statearr_22187_22222 = state_22158__$1;(statearr_22187_22222[1] = 20);
} else
{var statearr_22188_22223 = state_22158__$1;(statearr_22188_22223[1] = 21);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 20))
{var inst_22122 = (state_22158[16]);var state_22158__$1 = state_22158;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22158__$1,23,out,inst_22122);
} else
{if((state_val_22159 === 21))
{var state_22158__$1 = state_22158;var statearr_22189_22224 = state_22158__$1;(statearr_22189_22224[2] = null);
(statearr_22189_22224[1] = 22);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 22))
{var inst_22115 = (state_22158[12]);var inst_22151 = (state_22158[2]);var inst_22107 = inst_22115;var state_22158__$1 = (function (){var statearr_22190 = state_22158;(statearr_22190[11] = inst_22107);
(statearr_22190[19] = inst_22151);
return statearr_22190;
})();var statearr_22191_22225 = state_22158__$1;(statearr_22191_22225[2] = null);
(statearr_22191_22225[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22159 === 23))
{var inst_22148 = (state_22158[2]);var state_22158__$1 = state_22158;var statearr_22192_22226 = state_22158__$1;(statearr_22192_22226[2] = inst_22148);
(statearr_22192_22226[1] = 22);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22196[0] = state_machine__5507__auto__);
(statearr_22196[1] = 1);
return statearr_22196;
});
var state_machine__5507__auto____1 = (function (state_22158){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22158);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22197){if((e22197 instanceof Object))
{var ex__5510__auto__ = e22197;var statearr_22198_22227 = state_22158;(statearr_22198_22227[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22158);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22197;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22228 = state_22158;
state_22158 = G__22228;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22158){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22199 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22200);
return statearr_22199;
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
cljs.core.async.Pub = (function (){var obj22230 = {};return obj22230;
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
return (function (p1__22231_SHARP_){if(cljs.core.truth_((p1__22231_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22231_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__22231_SHARP_.call(null,topic))))
{return p1__22231_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22231_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22356 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22356 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22357){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22357 = meta22357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22356.cljs$lang$type = true;
cljs.core.async.t22356.cljs$lang$ctorStr = "cljs.core.async/t22356";
cljs.core.async.t22356.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22356");
});})(mults,ensure_mult))
;
cljs.core.async.t22356.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22356.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22356.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22356.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22358){var self__ = this;
var _22358__$1 = this;return self__.meta22357;
});})(mults,ensure_mult))
;
cljs.core.async.t22356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22358,meta22357__$1){var self__ = this;
var _22358__$1 = this;return (new cljs.core.async.t22356(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22357__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22356 = ((function (mults,ensure_mult){
return (function __GT_t22356(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22357){return (new cljs.core.async.t22356(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22357));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22356(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___22480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22432){var state_val_22433 = (state_22432[1]);if((state_val_22433 === 1))
{var state_22432__$1 = state_22432;var statearr_22434_22481 = state_22432__$1;(statearr_22434_22481[2] = null);
(statearr_22434_22481[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 2))
{var state_22432__$1 = state_22432;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22432__$1,4,ch);
} else
{if((state_val_22433 === 3))
{var inst_22430 = (state_22432[2]);var state_22432__$1 = state_22432;return cljs.core.async.impl.ioc_helpers.return_chan(state_22432__$1,inst_22430);
} else
{if((state_val_22433 === 4))
{var inst_22361 = (state_22432[7]);var inst_22361__$1 = (state_22432[2]);var inst_22362 = (inst_22361__$1 == null);var state_22432__$1 = (function (){var statearr_22435 = state_22432;(statearr_22435[7] = inst_22361__$1);
return statearr_22435;
})();if(cljs.core.truth_(inst_22362))
{var statearr_22436_22482 = state_22432__$1;(statearr_22436_22482[1] = 5);
} else
{var statearr_22437_22483 = state_22432__$1;(statearr_22437_22483[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 5))
{var inst_22368 = cljs.core.deref(mults);var inst_22369 = cljs.core.vals(inst_22368);var inst_22370 = cljs.core.seq(inst_22369);var inst_22371 = inst_22370;var inst_22372 = null;var inst_22373 = 0;var inst_22374 = 0;var state_22432__$1 = (function (){var statearr_22438 = state_22432;(statearr_22438[8] = inst_22373);
(statearr_22438[9] = inst_22374);
(statearr_22438[10] = inst_22371);
(statearr_22438[11] = inst_22372);
return statearr_22438;
})();var statearr_22439_22484 = state_22432__$1;(statearr_22439_22484[2] = null);
(statearr_22439_22484[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 6))
{var inst_22409 = (state_22432[12]);var inst_22361 = (state_22432[7]);var inst_22411 = (state_22432[13]);var inst_22409__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22361) : topic_fn.call(null,inst_22361));var inst_22410 = cljs.core.deref(mults);var inst_22411__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22410,inst_22409__$1);var state_22432__$1 = (function (){var statearr_22440 = state_22432;(statearr_22440[12] = inst_22409__$1);
(statearr_22440[13] = inst_22411__$1);
return statearr_22440;
})();if(cljs.core.truth_(inst_22411__$1))
{var statearr_22441_22485 = state_22432__$1;(statearr_22441_22485[1] = 19);
} else
{var statearr_22442_22486 = state_22432__$1;(statearr_22442_22486[1] = 20);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 7))
{var inst_22428 = (state_22432[2]);var state_22432__$1 = state_22432;var statearr_22443_22487 = state_22432__$1;(statearr_22443_22487[2] = inst_22428);
(statearr_22443_22487[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 8))
{var inst_22373 = (state_22432[8]);var inst_22374 = (state_22432[9]);var inst_22376 = (inst_22374 < inst_22373);var inst_22377 = inst_22376;var state_22432__$1 = state_22432;if(cljs.core.truth_(inst_22377))
{var statearr_22447_22488 = state_22432__$1;(statearr_22447_22488[1] = 10);
} else
{var statearr_22448_22489 = state_22432__$1;(statearr_22448_22489[1] = 11);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 9))
{var inst_22407 = (state_22432[2]);var state_22432__$1 = state_22432;var statearr_22449_22490 = state_22432__$1;(statearr_22449_22490[2] = inst_22407);
(statearr_22449_22490[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 10))
{var inst_22373 = (state_22432[8]);var inst_22374 = (state_22432[9]);var inst_22371 = (state_22432[10]);var inst_22372 = (state_22432[11]);var inst_22379 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22372,inst_22374);var inst_22380 = cljs.core.async.muxch_STAR_(inst_22379);var inst_22381 = cljs.core.async.close_BANG_(inst_22380);var inst_22382 = (inst_22374 + 1);var tmp22444 = inst_22373;var tmp22445 = inst_22371;var tmp22446 = inst_22372;var inst_22371__$1 = tmp22445;var inst_22372__$1 = tmp22446;var inst_22373__$1 = tmp22444;var inst_22374__$1 = inst_22382;var state_22432__$1 = (function (){var statearr_22450 = state_22432;(statearr_22450[14] = inst_22381);
(statearr_22450[8] = inst_22373__$1);
(statearr_22450[9] = inst_22374__$1);
(statearr_22450[10] = inst_22371__$1);
(statearr_22450[11] = inst_22372__$1);
return statearr_22450;
})();var statearr_22451_22491 = state_22432__$1;(statearr_22451_22491[2] = null);
(statearr_22451_22491[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 11))
{var inst_22385 = (state_22432[15]);var inst_22371 = (state_22432[10]);var inst_22385__$1 = cljs.core.seq(inst_22371);var state_22432__$1 = (function (){var statearr_22452 = state_22432;(statearr_22452[15] = inst_22385__$1);
return statearr_22452;
})();if(inst_22385__$1)
{var statearr_22453_22492 = state_22432__$1;(statearr_22453_22492[1] = 13);
} else
{var statearr_22454_22493 = state_22432__$1;(statearr_22454_22493[1] = 14);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 12))
{var inst_22405 = (state_22432[2]);var state_22432__$1 = state_22432;var statearr_22455_22494 = state_22432__$1;(statearr_22455_22494[2] = inst_22405);
(statearr_22455_22494[1] = 9);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 13))
{var inst_22385 = (state_22432[15]);var inst_22387 = cljs.core.chunked_seq_QMARK_(inst_22385);var state_22432__$1 = state_22432;if(inst_22387)
{var statearr_22456_22495 = state_22432__$1;(statearr_22456_22495[1] = 16);
} else
{var statearr_22457_22496 = state_22432__$1;(statearr_22457_22496[1] = 17);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 14))
{var state_22432__$1 = state_22432;var statearr_22458_22497 = state_22432__$1;(statearr_22458_22497[2] = null);
(statearr_22458_22497[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 15))
{var inst_22403 = (state_22432[2]);var state_22432__$1 = state_22432;var statearr_22459_22498 = state_22432__$1;(statearr_22459_22498[2] = inst_22403);
(statearr_22459_22498[1] = 12);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 16))
{var inst_22385 = (state_22432[15]);var inst_22389 = cljs.core.chunk_first(inst_22385);var inst_22390 = cljs.core.chunk_rest(inst_22385);var inst_22391 = cljs.core.count(inst_22389);var inst_22371 = inst_22390;var inst_22372 = inst_22389;var inst_22373 = inst_22391;var inst_22374 = 0;var state_22432__$1 = (function (){var statearr_22460 = state_22432;(statearr_22460[8] = inst_22373);
(statearr_22460[9] = inst_22374);
(statearr_22460[10] = inst_22371);
(statearr_22460[11] = inst_22372);
return statearr_22460;
})();var statearr_22461_22499 = state_22432__$1;(statearr_22461_22499[2] = null);
(statearr_22461_22499[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 17))
{var inst_22385 = (state_22432[15]);var inst_22394 = cljs.core.first(inst_22385);var inst_22395 = cljs.core.async.muxch_STAR_(inst_22394);var inst_22396 = cljs.core.async.close_BANG_(inst_22395);var inst_22397 = cljs.core.next(inst_22385);var inst_22371 = inst_22397;var inst_22372 = null;var inst_22373 = 0;var inst_22374 = 0;var state_22432__$1 = (function (){var statearr_22462 = state_22432;(statearr_22462[16] = inst_22396);
(statearr_22462[8] = inst_22373);
(statearr_22462[9] = inst_22374);
(statearr_22462[10] = inst_22371);
(statearr_22462[11] = inst_22372);
return statearr_22462;
})();var statearr_22463_22500 = state_22432__$1;(statearr_22463_22500[2] = null);
(statearr_22463_22500[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 18))
{var inst_22400 = (state_22432[2]);var state_22432__$1 = state_22432;var statearr_22464_22501 = state_22432__$1;(statearr_22464_22501[2] = inst_22400);
(statearr_22464_22501[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 19))
{var state_22432__$1 = state_22432;var statearr_22465_22502 = state_22432__$1;(statearr_22465_22502[2] = null);
(statearr_22465_22502[1] = 24);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 20))
{var state_22432__$1 = state_22432;var statearr_22466_22503 = state_22432__$1;(statearr_22466_22503[2] = null);
(statearr_22466_22503[1] = 21);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 21))
{var inst_22425 = (state_22432[2]);var state_22432__$1 = (function (){var statearr_22467 = state_22432;(statearr_22467[17] = inst_22425);
return statearr_22467;
})();var statearr_22468_22504 = state_22432__$1;(statearr_22468_22504[2] = null);
(statearr_22468_22504[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 22))
{var inst_22422 = (state_22432[2]);var state_22432__$1 = state_22432;var statearr_22469_22505 = state_22432__$1;(statearr_22469_22505[2] = inst_22422);
(statearr_22469_22505[1] = 21);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 23))
{var inst_22409 = (state_22432[12]);var inst_22413 = (state_22432[2]);var inst_22414 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22409);var state_22432__$1 = (function (){var statearr_22470 = state_22432;(statearr_22470[18] = inst_22413);
return statearr_22470;
})();var statearr_22471_22506 = state_22432__$1;(statearr_22471_22506[2] = inst_22414);
cljs.core.async.impl.ioc_helpers.process_exception(state_22432__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22433 === 24))
{var inst_22361 = (state_22432[7]);var inst_22411 = (state_22432[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22432,23,Object,null,22);var inst_22418 = cljs.core.async.muxch_STAR_(inst_22411);var state_22432__$1 = state_22432;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22432__$1,25,inst_22418,inst_22361);
} else
{if((state_val_22433 === 25))
{var inst_22420 = (state_22432[2]);var state_22432__$1 = state_22432;var statearr_22472_22507 = state_22432__$1;(statearr_22472_22507[2] = inst_22420);
cljs.core.async.impl.ioc_helpers.process_exception(state_22432__$1);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22476[0] = state_machine__5507__auto__);
(statearr_22476[1] = 1);
return statearr_22476;
});
var state_machine__5507__auto____1 = (function (state_22432){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22432);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22477){if((e22477 instanceof Object))
{var ex__5510__auto__ = e22477;var statearr_22478_22508 = state_22432;(statearr_22478_22508[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22432);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22477;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22509 = state_22432;
state_22432 = G__22509;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22432){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22479 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22480);
return statearr_22479;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___22646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22616){var state_val_22617 = (state_22616[1]);if((state_val_22617 === 1))
{var state_22616__$1 = state_22616;var statearr_22618_22647 = state_22616__$1;(statearr_22618_22647[2] = null);
(statearr_22618_22647[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 2))
{var inst_22579 = cljs.core.reset_BANG_(dctr,cnt);var inst_22580 = 0;var state_22616__$1 = (function (){var statearr_22619 = state_22616;(statearr_22619[7] = inst_22580);
(statearr_22619[8] = inst_22579);
return statearr_22619;
})();var statearr_22620_22648 = state_22616__$1;(statearr_22620_22648[2] = null);
(statearr_22620_22648[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 3))
{var inst_22614 = (state_22616[2]);var state_22616__$1 = state_22616;return cljs.core.async.impl.ioc_helpers.return_chan(state_22616__$1,inst_22614);
} else
{if((state_val_22617 === 4))
{var inst_22580 = (state_22616[7]);var inst_22582 = (inst_22580 < cnt);var state_22616__$1 = state_22616;if(cljs.core.truth_(inst_22582))
{var statearr_22621_22649 = state_22616__$1;(statearr_22621_22649[1] = 6);
} else
{var statearr_22622_22650 = state_22616__$1;(statearr_22622_22650[1] = 7);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 5))
{var inst_22600 = (state_22616[2]);var state_22616__$1 = (function (){var statearr_22623 = state_22616;(statearr_22623[9] = inst_22600);
return statearr_22623;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22616__$1,12,dchan);
} else
{if((state_val_22617 === 6))
{var state_22616__$1 = state_22616;var statearr_22624_22651 = state_22616__$1;(statearr_22624_22651[2] = null);
(statearr_22624_22651[1] = 11);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 7))
{var state_22616__$1 = state_22616;var statearr_22625_22652 = state_22616__$1;(statearr_22625_22652[2] = null);
(statearr_22625_22652[1] = 8);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 8))
{var inst_22598 = (state_22616[2]);var state_22616__$1 = state_22616;var statearr_22626_22653 = state_22616__$1;(statearr_22626_22653[2] = inst_22598);
(statearr_22626_22653[1] = 5);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 9))
{var inst_22580 = (state_22616[7]);var inst_22593 = (state_22616[2]);var inst_22594 = (inst_22580 + 1);var inst_22580__$1 = inst_22594;var state_22616__$1 = (function (){var statearr_22627 = state_22616;(statearr_22627[7] = inst_22580__$1);
(statearr_22627[10] = inst_22593);
return statearr_22627;
})();var statearr_22628_22654 = state_22616__$1;(statearr_22628_22654[2] = null);
(statearr_22628_22654[1] = 4);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 10))
{var inst_22584 = (state_22616[2]);var inst_22585 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_22616__$1 = (function (){var statearr_22629 = state_22616;(statearr_22629[11] = inst_22584);
return statearr_22629;
})();var statearr_22630_22655 = state_22616__$1;(statearr_22630_22655[2] = inst_22585);
cljs.core.async.impl.ioc_helpers.process_exception(state_22616__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 11))
{var inst_22580 = (state_22616[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22616,10,Object,null,9);var inst_22589 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22580) : chs__$1.call(null,inst_22580));var inst_22590 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22580) : done.call(null,inst_22580));var inst_22591 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22589,inst_22590);var state_22616__$1 = state_22616;var statearr_22631_22656 = state_22616__$1;(statearr_22631_22656[2] = inst_22591);
cljs.core.async.impl.ioc_helpers.process_exception(state_22616__$1);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 12))
{var inst_22602 = (state_22616[12]);var inst_22602__$1 = (state_22616[2]);var inst_22603 = cljs.core.some(cljs.core.nil_QMARK_,inst_22602__$1);var state_22616__$1 = (function (){var statearr_22632 = state_22616;(statearr_22632[12] = inst_22602__$1);
return statearr_22632;
})();if(cljs.core.truth_(inst_22603))
{var statearr_22633_22657 = state_22616__$1;(statearr_22633_22657[1] = 13);
} else
{var statearr_22634_22658 = state_22616__$1;(statearr_22634_22658[1] = 14);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 13))
{var inst_22605 = cljs.core.async.close_BANG_(out);var state_22616__$1 = state_22616;var statearr_22635_22659 = state_22616__$1;(statearr_22635_22659[2] = inst_22605);
(statearr_22635_22659[1] = 15);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 14))
{var inst_22602 = (state_22616[12]);var inst_22607 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22602);var state_22616__$1 = state_22616;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22616__$1,16,out,inst_22607);
} else
{if((state_val_22617 === 15))
{var inst_22612 = (state_22616[2]);var state_22616__$1 = state_22616;var statearr_22636_22660 = state_22616__$1;(statearr_22636_22660[2] = inst_22612);
(statearr_22636_22660[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22617 === 16))
{var inst_22609 = (state_22616[2]);var state_22616__$1 = (function (){var statearr_22637 = state_22616;(statearr_22637[13] = inst_22609);
return statearr_22637;
})();var statearr_22638_22661 = state_22616__$1;(statearr_22638_22661[2] = null);
(statearr_22638_22661[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22642[0] = state_machine__5507__auto__);
(statearr_22642[1] = 1);
return statearr_22642;
});
var state_machine__5507__auto____1 = (function (state_22616){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22616);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22643){if((e22643 instanceof Object))
{var ex__5510__auto__ = e22643;var statearr_22644_22662 = state_22616;(statearr_22644_22662[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22616);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22663 = state_22616;
state_22616 = G__22663;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22616){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22645 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22646);
return statearr_22645;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22747){var state_val_22748 = (state_22747[1]);if((state_val_22748 === 1))
{var inst_22718 = cljs.core.vec(chs);var inst_22719 = inst_22718;var state_22747__$1 = (function (){var statearr_22749 = state_22747;(statearr_22749[7] = inst_22719);
return statearr_22749;
})();var statearr_22750_22772 = state_22747__$1;(statearr_22750_22772[2] = null);
(statearr_22750_22772[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22748 === 2))
{var inst_22719 = (state_22747[7]);var inst_22721 = cljs.core.count(inst_22719);var inst_22722 = (inst_22721 > 0);var state_22747__$1 = state_22747;if(cljs.core.truth_(inst_22722))
{var statearr_22751_22773 = state_22747__$1;(statearr_22751_22773[1] = 4);
} else
{var statearr_22752_22774 = state_22747__$1;(statearr_22752_22774[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22748 === 3))
{var inst_22745 = (state_22747[2]);var state_22747__$1 = state_22747;return cljs.core.async.impl.ioc_helpers.return_chan(state_22747__$1,inst_22745);
} else
{if((state_val_22748 === 4))
{var inst_22719 = (state_22747[7]);var state_22747__$1 = state_22747;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22747__$1,7,inst_22719);
} else
{if((state_val_22748 === 5))
{var inst_22741 = cljs.core.async.close_BANG_(out);var state_22747__$1 = state_22747;var statearr_22753_22775 = state_22747__$1;(statearr_22753_22775[2] = inst_22741);
(statearr_22753_22775[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22748 === 6))
{var inst_22743 = (state_22747[2]);var state_22747__$1 = state_22747;var statearr_22754_22776 = state_22747__$1;(statearr_22754_22776[2] = inst_22743);
(statearr_22754_22776[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22748 === 7))
{var inst_22727 = (state_22747[8]);var inst_22726 = (state_22747[9]);var inst_22726__$1 = (state_22747[2]);var inst_22727__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22726__$1,0,null);var inst_22728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22726__$1,1,null);var inst_22729 = (inst_22727__$1 == null);var state_22747__$1 = (function (){var statearr_22755 = state_22747;(statearr_22755[8] = inst_22727__$1);
(statearr_22755[9] = inst_22726__$1);
(statearr_22755[10] = inst_22728);
return statearr_22755;
})();if(cljs.core.truth_(inst_22729))
{var statearr_22756_22777 = state_22747__$1;(statearr_22756_22777[1] = 8);
} else
{var statearr_22757_22778 = state_22747__$1;(statearr_22757_22778[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22748 === 8))
{var inst_22719 = (state_22747[7]);var inst_22727 = (state_22747[8]);var inst_22726 = (state_22747[9]);var inst_22728 = (state_22747[10]);var inst_22731 = (function (){var c = inst_22728;var v = inst_22727;var vec__22724 = inst_22726;var cs = inst_22719;return ((function (c,v,vec__22724,cs,inst_22719,inst_22727,inst_22726,inst_22728,state_val_22748){
return (function (p1__22664_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22664_SHARP_);
});
;})(c,v,vec__22724,cs,inst_22719,inst_22727,inst_22726,inst_22728,state_val_22748))
})();var inst_22732 = cljs.core.filterv(inst_22731,inst_22719);var inst_22719__$1 = inst_22732;var state_22747__$1 = (function (){var statearr_22758 = state_22747;(statearr_22758[7] = inst_22719__$1);
return statearr_22758;
})();var statearr_22759_22779 = state_22747__$1;(statearr_22759_22779[2] = null);
(statearr_22759_22779[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22748 === 9))
{var inst_22727 = (state_22747[8]);var state_22747__$1 = state_22747;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22747__$1,11,out,inst_22727);
} else
{if((state_val_22748 === 10))
{var inst_22739 = (state_22747[2]);var state_22747__$1 = state_22747;var statearr_22761_22780 = state_22747__$1;(statearr_22761_22780[2] = inst_22739);
(statearr_22761_22780[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22748 === 11))
{var inst_22719 = (state_22747[7]);var inst_22736 = (state_22747[2]);var tmp22760 = inst_22719;var inst_22719__$1 = tmp22760;var state_22747__$1 = (function (){var statearr_22762 = state_22747;(statearr_22762[7] = inst_22719__$1);
(statearr_22762[11] = inst_22736);
return statearr_22762;
})();var statearr_22763_22781 = state_22747__$1;(statearr_22763_22781[2] = null);
(statearr_22763_22781[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22767 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22767[0] = state_machine__5507__auto__);
(statearr_22767[1] = 1);
return statearr_22767;
});
var state_machine__5507__auto____1 = (function (state_22747){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22747);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22768){if((e22768 instanceof Object))
{var ex__5510__auto__ = e22768;var statearr_22769_22782 = state_22747;(statearr_22769_22782[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22747);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22783 = state_22747;
state_22747 = G__22783;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22747){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22770 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22771);
return statearr_22770;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22853){var state_val_22854 = (state_22853[1]);if((state_val_22854 === 1))
{var inst_22830 = 0;var state_22853__$1 = (function (){var statearr_22855 = state_22853;(statearr_22855[7] = inst_22830);
return statearr_22855;
})();var statearr_22856_22877 = state_22853__$1;(statearr_22856_22877[2] = null);
(statearr_22856_22877[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22854 === 2))
{var inst_22830 = (state_22853[7]);var inst_22832 = (inst_22830 < n);var state_22853__$1 = state_22853;if(cljs.core.truth_(inst_22832))
{var statearr_22857_22878 = state_22853__$1;(statearr_22857_22878[1] = 4);
} else
{var statearr_22858_22879 = state_22853__$1;(statearr_22858_22879[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22854 === 3))
{var inst_22850 = (state_22853[2]);var inst_22851 = cljs.core.async.close_BANG_(out);var state_22853__$1 = (function (){var statearr_22859 = state_22853;(statearr_22859[8] = inst_22850);
return statearr_22859;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22853__$1,inst_22851);
} else
{if((state_val_22854 === 4))
{var state_22853__$1 = state_22853;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22853__$1,7,ch);
} else
{if((state_val_22854 === 5))
{var state_22853__$1 = state_22853;var statearr_22860_22880 = state_22853__$1;(statearr_22860_22880[2] = null);
(statearr_22860_22880[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22854 === 6))
{var inst_22848 = (state_22853[2]);var state_22853__$1 = state_22853;var statearr_22861_22881 = state_22853__$1;(statearr_22861_22881[2] = inst_22848);
(statearr_22861_22881[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22854 === 7))
{var inst_22835 = (state_22853[9]);var inst_22835__$1 = (state_22853[2]);var inst_22836 = (inst_22835__$1 == null);var inst_22837 = cljs.core.not(inst_22836);var state_22853__$1 = (function (){var statearr_22862 = state_22853;(statearr_22862[9] = inst_22835__$1);
return statearr_22862;
})();if(inst_22837)
{var statearr_22863_22882 = state_22853__$1;(statearr_22863_22882[1] = 8);
} else
{var statearr_22864_22883 = state_22853__$1;(statearr_22864_22883[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22854 === 8))
{var inst_22835 = (state_22853[9]);var state_22853__$1 = state_22853;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22853__$1,11,out,inst_22835);
} else
{if((state_val_22854 === 9))
{var state_22853__$1 = state_22853;var statearr_22865_22884 = state_22853__$1;(statearr_22865_22884[2] = null);
(statearr_22865_22884[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22854 === 10))
{var inst_22845 = (state_22853[2]);var state_22853__$1 = state_22853;var statearr_22866_22885 = state_22853__$1;(statearr_22866_22885[2] = inst_22845);
(statearr_22866_22885[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22854 === 11))
{var inst_22830 = (state_22853[7]);var inst_22840 = (state_22853[2]);var inst_22841 = (inst_22830 + 1);var inst_22830__$1 = inst_22841;var state_22853__$1 = (function (){var statearr_22867 = state_22853;(statearr_22867[10] = inst_22840);
(statearr_22867[7] = inst_22830__$1);
return statearr_22867;
})();var statearr_22868_22886 = state_22853__$1;(statearr_22868_22886[2] = null);
(statearr_22868_22886[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22872 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22872[0] = state_machine__5507__auto__);
(statearr_22872[1] = 1);
return statearr_22872;
});
var state_machine__5507__auto____1 = (function (state_22853){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22853);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22873){if((e22873 instanceof Object))
{var ex__5510__auto__ = e22873;var statearr_22874_22887 = state_22853;(statearr_22874_22887[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22853);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22888 = state_22853;
state_22853 = G__22888;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22853){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22875 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22876);
return statearr_22875;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22960){var state_val_22961 = (state_22960[1]);if((state_val_22961 === 1))
{var inst_22937 = null;var state_22960__$1 = (function (){var statearr_22962 = state_22960;(statearr_22962[7] = inst_22937);
return statearr_22962;
})();var statearr_22963_22986 = state_22960__$1;(statearr_22963_22986[2] = null);
(statearr_22963_22986[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22961 === 2))
{var state_22960__$1 = state_22960;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22960__$1,4,ch);
} else
{if((state_val_22961 === 3))
{var inst_22957 = (state_22960[2]);var inst_22958 = cljs.core.async.close_BANG_(out);var state_22960__$1 = (function (){var statearr_22964 = state_22960;(statearr_22964[8] = inst_22957);
return statearr_22964;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22960__$1,inst_22958);
} else
{if((state_val_22961 === 4))
{var inst_22940 = (state_22960[9]);var inst_22940__$1 = (state_22960[2]);var inst_22941 = (inst_22940__$1 == null);var inst_22942 = cljs.core.not(inst_22941);var state_22960__$1 = (function (){var statearr_22965 = state_22960;(statearr_22965[9] = inst_22940__$1);
return statearr_22965;
})();if(inst_22942)
{var statearr_22966_22987 = state_22960__$1;(statearr_22966_22987[1] = 5);
} else
{var statearr_22967_22988 = state_22960__$1;(statearr_22967_22988[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22961 === 5))
{var inst_22940 = (state_22960[9]);var inst_22937 = (state_22960[7]);var inst_22944 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22940,inst_22937);var state_22960__$1 = state_22960;if(inst_22944)
{var statearr_22968_22989 = state_22960__$1;(statearr_22968_22989[1] = 8);
} else
{var statearr_22969_22990 = state_22960__$1;(statearr_22969_22990[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_22961 === 6))
{var state_22960__$1 = state_22960;var statearr_22971_22991 = state_22960__$1;(statearr_22971_22991[2] = null);
(statearr_22971_22991[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22961 === 7))
{var inst_22955 = (state_22960[2]);var state_22960__$1 = state_22960;var statearr_22972_22992 = state_22960__$1;(statearr_22972_22992[2] = inst_22955);
(statearr_22972_22992[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22961 === 8))
{var inst_22937 = (state_22960[7]);var tmp22970 = inst_22937;var inst_22937__$1 = tmp22970;var state_22960__$1 = (function (){var statearr_22973 = state_22960;(statearr_22973[7] = inst_22937__$1);
return statearr_22973;
})();var statearr_22974_22993 = state_22960__$1;(statearr_22974_22993[2] = null);
(statearr_22974_22993[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22961 === 9))
{var inst_22940 = (state_22960[9]);var state_22960__$1 = state_22960;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22960__$1,11,out,inst_22940);
} else
{if((state_val_22961 === 10))
{var inst_22952 = (state_22960[2]);var state_22960__$1 = state_22960;var statearr_22975_22994 = state_22960__$1;(statearr_22975_22994[2] = inst_22952);
(statearr_22975_22994[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_22961 === 11))
{var inst_22940 = (state_22960[9]);var inst_22949 = (state_22960[2]);var inst_22937 = inst_22940;var state_22960__$1 = (function (){var statearr_22976 = state_22960;(statearr_22976[7] = inst_22937);
(statearr_22976[10] = inst_22949);
return statearr_22976;
})();var statearr_22977_22995 = state_22960__$1;(statearr_22977_22995[2] = null);
(statearr_22977_22995[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_22981 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22981[0] = state_machine__5507__auto__);
(statearr_22981[1] = 1);
return statearr_22981;
});
var state_machine__5507__auto____1 = (function (state_22960){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22960);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22982){if((e22982 instanceof Object))
{var ex__5510__auto__ = e22982;var statearr_22983_22996 = state_22960;(statearr_22983_22996[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22960);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e22982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__22997 = state_22960;
state_22960 = G__22997;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22960){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22984 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22985);
return statearr_22984;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23102){var state_val_23103 = (state_23102[1]);if((state_val_23103 === 1))
{var inst_23065 = (new Array(n));var inst_23066 = inst_23065;var inst_23067 = 0;var state_23102__$1 = (function (){var statearr_23104 = state_23102;(statearr_23104[7] = inst_23066);
(statearr_23104[8] = inst_23067);
return statearr_23104;
})();var statearr_23105_23133 = state_23102__$1;(statearr_23105_23133[2] = null);
(statearr_23105_23133[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23103 === 2))
{var state_23102__$1 = state_23102;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23102__$1,4,ch);
} else
{if((state_val_23103 === 3))
{var inst_23100 = (state_23102[2]);var state_23102__$1 = state_23102;return cljs.core.async.impl.ioc_helpers.return_chan(state_23102__$1,inst_23100);
} else
{if((state_val_23103 === 4))
{var inst_23070 = (state_23102[9]);var inst_23070__$1 = (state_23102[2]);var inst_23071 = (inst_23070__$1 == null);var inst_23072 = cljs.core.not(inst_23071);var state_23102__$1 = (function (){var statearr_23106 = state_23102;(statearr_23106[9] = inst_23070__$1);
return statearr_23106;
})();if(inst_23072)
{var statearr_23107_23134 = state_23102__$1;(statearr_23107_23134[1] = 5);
} else
{var statearr_23108_23135 = state_23102__$1;(statearr_23108_23135[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23103 === 5))
{var inst_23075 = (state_23102[10]);var inst_23066 = (state_23102[7]);var inst_23067 = (state_23102[8]);var inst_23070 = (state_23102[9]);var inst_23074 = (inst_23066[inst_23067] = inst_23070);var inst_23075__$1 = (inst_23067 + 1);var inst_23076 = (inst_23075__$1 < n);var state_23102__$1 = (function (){var statearr_23109 = state_23102;(statearr_23109[10] = inst_23075__$1);
(statearr_23109[11] = inst_23074);
return statearr_23109;
})();if(cljs.core.truth_(inst_23076))
{var statearr_23110_23136 = state_23102__$1;(statearr_23110_23136[1] = 8);
} else
{var statearr_23111_23137 = state_23102__$1;(statearr_23111_23137[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23103 === 6))
{var inst_23067 = (state_23102[8]);var inst_23088 = (inst_23067 > 0);var state_23102__$1 = state_23102;if(cljs.core.truth_(inst_23088))
{var statearr_23113_23138 = state_23102__$1;(statearr_23113_23138[1] = 12);
} else
{var statearr_23114_23139 = state_23102__$1;(statearr_23114_23139[1] = 13);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23103 === 7))
{var inst_23098 = (state_23102[2]);var state_23102__$1 = state_23102;var statearr_23115_23140 = state_23102__$1;(statearr_23115_23140[2] = inst_23098);
(statearr_23115_23140[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23103 === 8))
{var inst_23075 = (state_23102[10]);var inst_23066 = (state_23102[7]);var tmp23112 = inst_23066;var inst_23066__$1 = tmp23112;var inst_23067 = inst_23075;var state_23102__$1 = (function (){var statearr_23116 = state_23102;(statearr_23116[7] = inst_23066__$1);
(statearr_23116[8] = inst_23067);
return statearr_23116;
})();var statearr_23117_23141 = state_23102__$1;(statearr_23117_23141[2] = null);
(statearr_23117_23141[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23103 === 9))
{var inst_23066 = (state_23102[7]);var inst_23080 = cljs.core.vec(inst_23066);var state_23102__$1 = state_23102;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23102__$1,11,out,inst_23080);
} else
{if((state_val_23103 === 10))
{var inst_23086 = (state_23102[2]);var state_23102__$1 = state_23102;var statearr_23118_23142 = state_23102__$1;(statearr_23118_23142[2] = inst_23086);
(statearr_23118_23142[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23103 === 11))
{var inst_23082 = (state_23102[2]);var inst_23083 = (new Array(n));var inst_23066 = inst_23083;var inst_23067 = 0;var state_23102__$1 = (function (){var statearr_23119 = state_23102;(statearr_23119[12] = inst_23082);
(statearr_23119[7] = inst_23066);
(statearr_23119[8] = inst_23067);
return statearr_23119;
})();var statearr_23120_23143 = state_23102__$1;(statearr_23120_23143[2] = null);
(statearr_23120_23143[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23103 === 12))
{var inst_23066 = (state_23102[7]);var inst_23090 = cljs.core.vec(inst_23066);var state_23102__$1 = state_23102;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23102__$1,15,out,inst_23090);
} else
{if((state_val_23103 === 13))
{var state_23102__$1 = state_23102;var statearr_23121_23144 = state_23102__$1;(statearr_23121_23144[2] = null);
(statearr_23121_23144[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23103 === 14))
{var inst_23095 = (state_23102[2]);var inst_23096 = cljs.core.async.close_BANG_(out);var state_23102__$1 = (function (){var statearr_23122 = state_23102;(statearr_23122[13] = inst_23095);
return statearr_23122;
})();var statearr_23123_23145 = state_23102__$1;(statearr_23123_23145[2] = inst_23096);
(statearr_23123_23145[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23103 === 15))
{var inst_23092 = (state_23102[2]);var state_23102__$1 = state_23102;var statearr_23124_23146 = state_23102__$1;(statearr_23124_23146[2] = inst_23092);
(statearr_23124_23146[1] = 14);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_23128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23128[0] = state_machine__5507__auto__);
(statearr_23128[1] = 1);
return statearr_23128;
});
var state_machine__5507__auto____1 = (function (state_23102){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23102);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23129){if((e23129 instanceof Object))
{var ex__5510__auto__ = e23129;var statearr_23130_23147 = state_23102;(statearr_23130_23147[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23102);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e23129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__23148 = state_23102;
state_23102 = G__23148;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23102){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23131 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23132);
return statearr_23131;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23261){var state_val_23262 = (state_23261[1]);if((state_val_23262 === 1))
{var inst_23220 = [];var inst_23221 = inst_23220;var inst_23222 = cljs.core.constant$keyword$136;var state_23261__$1 = (function (){var statearr_23263 = state_23261;(statearr_23263[7] = inst_23222);
(statearr_23263[8] = inst_23221);
return statearr_23263;
})();var statearr_23264_23292 = state_23261__$1;(statearr_23264_23292[2] = null);
(statearr_23264_23292[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23262 === 2))
{var state_23261__$1 = state_23261;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23261__$1,4,ch);
} else
{if((state_val_23262 === 3))
{var inst_23259 = (state_23261[2]);var state_23261__$1 = state_23261;return cljs.core.async.impl.ioc_helpers.return_chan(state_23261__$1,inst_23259);
} else
{if((state_val_23262 === 4))
{var inst_23225 = (state_23261[9]);var inst_23225__$1 = (state_23261[2]);var inst_23226 = (inst_23225__$1 == null);var inst_23227 = cljs.core.not(inst_23226);var state_23261__$1 = (function (){var statearr_23265 = state_23261;(statearr_23265[9] = inst_23225__$1);
return statearr_23265;
})();if(inst_23227)
{var statearr_23266_23293 = state_23261__$1;(statearr_23266_23293[1] = 5);
} else
{var statearr_23267_23294 = state_23261__$1;(statearr_23267_23294[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23262 === 5))
{var inst_23229 = (state_23261[10]);var inst_23225 = (state_23261[9]);var inst_23222 = (state_23261[7]);var inst_23229__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23225) : f.call(null,inst_23225));var inst_23230 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23229__$1,inst_23222);var inst_23231 = cljs.core.keyword_identical_QMARK_(inst_23222,cljs.core.constant$keyword$136);var inst_23232 = (inst_23230) || (inst_23231);var state_23261__$1 = (function (){var statearr_23268 = state_23261;(statearr_23268[10] = inst_23229__$1);
return statearr_23268;
})();if(cljs.core.truth_(inst_23232))
{var statearr_23269_23295 = state_23261__$1;(statearr_23269_23295[1] = 8);
} else
{var statearr_23270_23296 = state_23261__$1;(statearr_23270_23296[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23262 === 6))
{var inst_23221 = (state_23261[8]);var inst_23246 = inst_23221.length;var inst_23247 = (inst_23246 > 0);var state_23261__$1 = state_23261;if(cljs.core.truth_(inst_23247))
{var statearr_23272_23297 = state_23261__$1;(statearr_23272_23297[1] = 12);
} else
{var statearr_23273_23298 = state_23261__$1;(statearr_23273_23298[1] = 13);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_23262 === 7))
{var inst_23257 = (state_23261[2]);var state_23261__$1 = state_23261;var statearr_23274_23299 = state_23261__$1;(statearr_23274_23299[2] = inst_23257);
(statearr_23274_23299[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23262 === 8))
{var inst_23229 = (state_23261[10]);var inst_23225 = (state_23261[9]);var inst_23221 = (state_23261[8]);var inst_23234 = inst_23221.push(inst_23225);var tmp23271 = inst_23221;var inst_23221__$1 = tmp23271;var inst_23222 = inst_23229;var state_23261__$1 = (function (){var statearr_23275 = state_23261;(statearr_23275[11] = inst_23234);
(statearr_23275[7] = inst_23222);
(statearr_23275[8] = inst_23221__$1);
return statearr_23275;
})();var statearr_23276_23300 = state_23261__$1;(statearr_23276_23300[2] = null);
(statearr_23276_23300[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23262 === 9))
{var inst_23221 = (state_23261[8]);var inst_23237 = cljs.core.vec(inst_23221);var state_23261__$1 = state_23261;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23261__$1,11,out,inst_23237);
} else
{if((state_val_23262 === 10))
{var inst_23244 = (state_23261[2]);var state_23261__$1 = state_23261;var statearr_23277_23301 = state_23261__$1;(statearr_23277_23301[2] = inst_23244);
(statearr_23277_23301[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23262 === 11))
{var inst_23229 = (state_23261[10]);var inst_23225 = (state_23261[9]);var inst_23239 = (state_23261[2]);var inst_23240 = [];var inst_23241 = inst_23240.push(inst_23225);var inst_23221 = inst_23240;var inst_23222 = inst_23229;var state_23261__$1 = (function (){var statearr_23278 = state_23261;(statearr_23278[12] = inst_23239);
(statearr_23278[13] = inst_23241);
(statearr_23278[7] = inst_23222);
(statearr_23278[8] = inst_23221);
return statearr_23278;
})();var statearr_23279_23302 = state_23261__$1;(statearr_23279_23302[2] = null);
(statearr_23279_23302[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23262 === 12))
{var inst_23221 = (state_23261[8]);var inst_23249 = cljs.core.vec(inst_23221);var state_23261__$1 = state_23261;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23261__$1,15,out,inst_23249);
} else
{if((state_val_23262 === 13))
{var state_23261__$1 = state_23261;var statearr_23280_23303 = state_23261__$1;(statearr_23280_23303[2] = null);
(statearr_23280_23303[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23262 === 14))
{var inst_23254 = (state_23261[2]);var inst_23255 = cljs.core.async.close_BANG_(out);var state_23261__$1 = (function (){var statearr_23281 = state_23261;(statearr_23281[14] = inst_23254);
return statearr_23281;
})();var statearr_23282_23304 = state_23261__$1;(statearr_23282_23304[2] = inst_23255);
(statearr_23282_23304[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_23262 === 15))
{var inst_23251 = (state_23261[2]);var state_23261__$1 = state_23261;var statearr_23283_23305 = state_23261__$1;(statearr_23283_23305[2] = inst_23251);
(statearr_23283_23305[1] = 14);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_23287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23287[0] = state_machine__5507__auto__);
(statearr_23287[1] = 1);
return statearr_23287;
});
var state_machine__5507__auto____1 = (function (state_23261){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23261);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23288){if((e23288 instanceof Object))
{var ex__5510__auto__ = e23288;var statearr_23289_23306 = state_23261;(statearr_23289_23306[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23261);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e23288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__23307 = state_23261;
state_23261 = G__23307;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23261){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23290 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23291);
return statearr_23290;
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
