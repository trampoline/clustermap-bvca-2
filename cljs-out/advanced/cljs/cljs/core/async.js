// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t49186 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49186 = (function (f,fn_handler,meta49187){
this.f = f;
this.fn_handler = fn_handler;
this.meta49187 = meta49187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49186.cljs$lang$type = true;
cljs.core.async.t49186.cljs$lang$ctorStr = "cljs.core.async/t49186";
cljs.core.async.t49186.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49186");
});
cljs.core.async.t49186.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t49186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t49186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49188){var self__ = this;
var _49188__$1 = this;return self__.meta49187;
});
cljs.core.async.t49186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49188,meta49187__$1){var self__ = this;
var _49188__$1 = this;return (new cljs.core.async.t49186(self__.f,self__.fn_handler,meta49187__$1));
});
cljs.core.async.__GT_t49186 = (function __GT_t49186(f__$1,fn_handler__$1,meta49187){return (new cljs.core.async.t49186(f__$1,fn_handler__$1,meta49187));
});
}
return (new cljs.core.async.t49186(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__49190 = buff;if(G__49190)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__49190.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__49190.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__49190);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__49190);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

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
{var val_49191 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49191) : fn1.call(null,val_49191));
} else
{cljs.core.async.impl.dispatch.run(((function (val_49191,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49191) : fn1.call(null,val_49191));
});})(val_49191,ret))
);
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3546__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___49192 = n;var x_49193 = (0);while(true){
if((x_49193 < n__4414__auto___49192))
{(a[x_49193] = (0));
{
var G__49194 = (x_49193 + (1));
x_49193 = G__49194;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__49195 = (i + (1));
i = G__49195;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));if(typeof cljs.core.async.t49199 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49199 = (function (flag,alt_flag,meta49200){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta49200 = meta49200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49199.cljs$lang$type = true;
cljs.core.async.t49199.cljs$lang$ctorStr = "cljs.core.async/t49199";
cljs.core.async.t49199.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49199");
});})(flag))
;
cljs.core.async.t49199.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;
cljs.core.async.t49199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));
return true;
});})(flag))
;
cljs.core.async.t49199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_49201){var self__ = this;
var _49201__$1 = this;return self__.meta49200;
});})(flag))
;
cljs.core.async.t49199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_49201,meta49200__$1){var self__ = this;
var _49201__$1 = this;return (new cljs.core.async.t49199(self__.flag,self__.alt_flag,meta49200__$1));
});})(flag))
;
cljs.core.async.__GT_t49199 = ((function (flag){
return (function __GT_t49199(flag__$1,alt_flag__$1,meta49200){return (new cljs.core.async.t49199(flag__$1,alt_flag__$1,meta49200));
});})(flag))
;
}
return (new cljs.core.async.t49199(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t49205 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49205 = (function (cb,flag,alt_handler,meta49206){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta49206 = meta49206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49205.cljs$lang$type = true;
cljs.core.async.t49205.cljs$lang$ctorStr = "cljs.core.async/t49205";
cljs.core.async.t49205.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49205");
});
cljs.core.async.t49205.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t49205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t49205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49207){var self__ = this;
var _49207__$1 = this;return self__.meta49206;
});
cljs.core.async.t49205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49207,meta49206__$1){var self__ = this;
var _49207__$1 = this;return (new cljs.core.async.t49205(self__.cb,self__.flag,self__.alt_handler,meta49206__$1));
});
cljs.core.async.__GT_t49205 = (function __GT_t49205(cb__$1,flag__$1,alt_handler__$1,meta49206){return (new cljs.core.async.t49205(cb__$1,flag__$1,alt_handler__$1,meta49206));
});
}
return (new cljs.core.async.t49205(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$1100.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49208_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49208_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49208_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__49209 = (i + (1));
i = G__49209;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3558__auto__ = ret;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$1085))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3546__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1085.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$1085], null));
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
var alts_BANG___delegate = function (ports,p__49210){var map__49212 = p__49210;var map__49212__$1 = ((cljs.core.seq_QMARK_(map__49212))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49212):map__49212);var opts = map__49212__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__49210 = null;if (arguments.length > 1) {
  p__49210 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__49210);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__49213){
var ports = cljs.core.first(arglist__49213);
var p__49210 = cljs.core.rest(arglist__49213);
return alts_BANG___delegate(ports,p__49210);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t49221 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49221 = (function (ch,f,map_LT_,meta49222){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta49222 = meta49222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49221.cljs$lang$type = true;
cljs.core.async.t49221.cljs$lang$ctorStr = "cljs.core.async/t49221";
cljs.core.async.t49221.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49221");
});
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t49224 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49224 = (function (fn1,_,meta49222,ch,f,map_LT_,meta49225){
this.fn1 = fn1;
this._ = _;
this.meta49222 = meta49222;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta49225 = meta49225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49224.cljs$lang$type = true;
cljs.core.async.t49224.cljs$lang$ctorStr = "cljs.core.async/t49224";
cljs.core.async.t49224.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49224");
});})(___$1))
;
cljs.core.async.t49224.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t49224.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t49224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__49214_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__49214_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49214_SHARP_) : self__.f.call(null,p1__49214_SHARP_)))) : f1.call(null,(((p1__49214_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49214_SHARP_) : self__.f.call(null,p1__49214_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t49224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49226){var self__ = this;
var _49226__$1 = this;return self__.meta49225;
});})(___$1))
;
cljs.core.async.t49224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49226,meta49225__$1){var self__ = this;
var _49226__$1 = this;return (new cljs.core.async.t49224(self__.fn1,self__._,self__.meta49222,self__.ch,self__.f,self__.map_LT_,meta49225__$1));
});})(___$1))
;
cljs.core.async.__GT_t49224 = ((function (___$1){
return (function __GT_t49224(fn1__$1,___$2,meta49222__$1,ch__$2,f__$2,map_LT___$2,meta49225){return (new cljs.core.async.t49224(fn1__$1,___$2,meta49222__$1,ch__$2,f__$2,map_LT___$2,meta49225));
});})(___$1))
;
}
return (new cljs.core.async.t49224(fn1,___$1,self__.meta49222,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret))) : self__.f.call(null,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)))));
} else
{return ret;
}
});
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t49221.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t49221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49223){var self__ = this;
var _49223__$1 = this;return self__.meta49222;
});
cljs.core.async.t49221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49223,meta49222__$1){var self__ = this;
var _49223__$1 = this;return (new cljs.core.async.t49221(self__.ch,self__.f,self__.map_LT_,meta49222__$1));
});
cljs.core.async.__GT_t49221 = (function __GT_t49221(ch__$1,f__$1,map_LT___$1,meta49222){return (new cljs.core.async.t49221(ch__$1,f__$1,map_LT___$1,meta49222));
});
}
return (new cljs.core.async.t49221(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t49230 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49230 = (function (ch,f,map_GT_,meta49231){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta49231 = meta49231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49230.cljs$lang$type = true;
cljs.core.async.t49230.cljs$lang$ctorStr = "cljs.core.async/t49230";
cljs.core.async.t49230.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49230");
});
cljs.core.async.t49230.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t49230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t49230.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t49230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t49230.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t49230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t49230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49232){var self__ = this;
var _49232__$1 = this;return self__.meta49231;
});
cljs.core.async.t49230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49232,meta49231__$1){var self__ = this;
var _49232__$1 = this;return (new cljs.core.async.t49230(self__.ch,self__.f,self__.map_GT_,meta49231__$1));
});
cljs.core.async.__GT_t49230 = (function __GT_t49230(ch__$1,f__$1,map_GT___$1,meta49231){return (new cljs.core.async.t49230(ch__$1,f__$1,map_GT___$1,meta49231));
});
}
return (new cljs.core.async.t49230(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t49236 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49236 = (function (ch,p,filter_GT_,meta49237){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta49237 = meta49237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49236.cljs$lang$type = true;
cljs.core.async.t49236.cljs$lang$ctorStr = "cljs.core.async/t49236";
cljs.core.async.t49236.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49236");
});
cljs.core.async.t49236.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t49236.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t49236.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t49236.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t49236.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t49236.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t49236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49238){var self__ = this;
var _49238__$1 = this;return self__.meta49237;
});
cljs.core.async.t49236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49238,meta49237__$1){var self__ = this;
var _49238__$1 = this;return (new cljs.core.async.t49236(self__.ch,self__.p,self__.filter_GT_,meta49237__$1));
});
cljs.core.async.__GT_t49236 = (function __GT_t49236(ch__$1,p__$1,filter_GT___$1,meta49237){return (new cljs.core.async.t49236(ch__$1,p__$1,filter_GT___$1,meta49237));
});
}
return (new cljs.core.async.t49236(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___49321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___49321,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49321,out){
return (function (state_49300){var state_val_49301 = (state_49300[(1)]);if((state_val_49301 === (7)))
{var inst_49296 = (state_49300[(2)]);var state_49300__$1 = state_49300;var statearr_49302_49322 = state_49300__$1;(statearr_49302_49322[(2)] = inst_49296);
(statearr_49302_49322[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49301 === (1)))
{var state_49300__$1 = state_49300;var statearr_49303_49323 = state_49300__$1;(statearr_49303_49323[(2)] = null);
(statearr_49303_49323[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49301 === (4)))
{var inst_49282 = (state_49300[(7)]);var inst_49282__$1 = (state_49300[(2)]);var inst_49283 = (inst_49282__$1 == null);var state_49300__$1 = (function (){var statearr_49304 = state_49300;(statearr_49304[(7)] = inst_49282__$1);
return statearr_49304;
})();if(cljs.core.truth_(inst_49283))
{var statearr_49305_49324 = state_49300__$1;(statearr_49305_49324[(1)] = (5));
} else
{var statearr_49306_49325 = state_49300__$1;(statearr_49306_49325[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49301 === (6)))
{var inst_49282 = (state_49300[(7)]);var inst_49287 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49282) : p.call(null,inst_49282));var state_49300__$1 = state_49300;if(cljs.core.truth_(inst_49287))
{var statearr_49307_49326 = state_49300__$1;(statearr_49307_49326[(1)] = (8));
} else
{var statearr_49308_49327 = state_49300__$1;(statearr_49308_49327[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49301 === (3)))
{var inst_49298 = (state_49300[(2)]);var state_49300__$1 = state_49300;return cljs.core.async.impl.ioc_helpers.return_chan(state_49300__$1,inst_49298);
} else
{if((state_val_49301 === (2)))
{var state_49300__$1 = state_49300;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49300__$1,(4),ch);
} else
{if((state_val_49301 === (11)))
{var inst_49290 = (state_49300[(2)]);var state_49300__$1 = state_49300;var statearr_49309_49328 = state_49300__$1;(statearr_49309_49328[(2)] = inst_49290);
(statearr_49309_49328[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49301 === (9)))
{var state_49300__$1 = state_49300;var statearr_49310_49329 = state_49300__$1;(statearr_49310_49329[(2)] = null);
(statearr_49310_49329[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49301 === (5)))
{var inst_49285 = cljs.core.async.close_BANG_(out);var state_49300__$1 = state_49300;var statearr_49311_49330 = state_49300__$1;(statearr_49311_49330[(2)] = inst_49285);
(statearr_49311_49330[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49301 === (10)))
{var inst_49293 = (state_49300[(2)]);var state_49300__$1 = (function (){var statearr_49312 = state_49300;(statearr_49312[(8)] = inst_49293);
return statearr_49312;
})();var statearr_49313_49331 = state_49300__$1;(statearr_49313_49331[(2)] = null);
(statearr_49313_49331[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49301 === (8)))
{var inst_49282 = (state_49300[(7)]);var state_49300__$1 = state_49300;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49300__$1,(11),out,inst_49282);
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
});})(c__5708__auto___49321,out))
;return ((function (switch__5693__auto__,c__5708__auto___49321,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49317 = [null,null,null,null,null,null,null,null,null];(statearr_49317[(0)] = state_machine__5694__auto__);
(statearr_49317[(1)] = (1));
return statearr_49317;
});
var state_machine__5694__auto____1 = (function (state_49300){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49300);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49318){if((e49318 instanceof Object))
{var ex__5697__auto__ = e49318;var statearr_49319_49332 = state_49300;(statearr_49319_49332[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49300);
return cljs.core.constant$keyword$1094;
} else
{throw e49318;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49333 = state_49300;
state_49300 = G__49333;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49300){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49321,out))
})();var state__5710__auto__ = (function (){var statearr_49320 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49321);
return statearr_49320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___49321,out))
);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_49485){var state_val_49486 = (state_49485[(1)]);if((state_val_49486 === (7)))
{var inst_49481 = (state_49485[(2)]);var state_49485__$1 = state_49485;var statearr_49487_49524 = state_49485__$1;(statearr_49487_49524[(2)] = inst_49481);
(statearr_49487_49524[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (20)))
{var inst_49456 = (state_49485[(7)]);var inst_49467 = (state_49485[(2)]);var inst_49468 = cljs.core.next(inst_49456);var inst_49442 = inst_49468;var inst_49443 = null;var inst_49444 = (0);var inst_49445 = (0);var state_49485__$1 = (function (){var statearr_49488 = state_49485;(statearr_49488[(8)] = inst_49445);
(statearr_49488[(9)] = inst_49444);
(statearr_49488[(10)] = inst_49467);
(statearr_49488[(11)] = inst_49443);
(statearr_49488[(12)] = inst_49442);
return statearr_49488;
})();var statearr_49489_49525 = state_49485__$1;(statearr_49489_49525[(2)] = null);
(statearr_49489_49525[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (1)))
{var state_49485__$1 = state_49485;var statearr_49490_49526 = state_49485__$1;(statearr_49490_49526[(2)] = null);
(statearr_49490_49526[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (4)))
{var inst_49431 = (state_49485[(13)]);var inst_49431__$1 = (state_49485[(2)]);var inst_49432 = (inst_49431__$1 == null);var state_49485__$1 = (function (){var statearr_49494 = state_49485;(statearr_49494[(13)] = inst_49431__$1);
return statearr_49494;
})();if(cljs.core.truth_(inst_49432))
{var statearr_49495_49527 = state_49485__$1;(statearr_49495_49527[(1)] = (5));
} else
{var statearr_49496_49528 = state_49485__$1;(statearr_49496_49528[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (15)))
{var state_49485__$1 = state_49485;var statearr_49497_49529 = state_49485__$1;(statearr_49497_49529[(2)] = null);
(statearr_49497_49529[(1)] = (16));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (13)))
{var inst_49445 = (state_49485[(8)]);var inst_49444 = (state_49485[(9)]);var inst_49443 = (state_49485[(11)]);var inst_49442 = (state_49485[(12)]);var inst_49452 = (state_49485[(2)]);var inst_49453 = (inst_49445 + (1));var tmp49491 = inst_49444;var tmp49492 = inst_49443;var tmp49493 = inst_49442;var inst_49442__$1 = tmp49493;var inst_49443__$1 = tmp49492;var inst_49444__$1 = tmp49491;var inst_49445__$1 = inst_49453;var state_49485__$1 = (function (){var statearr_49498 = state_49485;(statearr_49498[(8)] = inst_49445__$1);
(statearr_49498[(9)] = inst_49444__$1);
(statearr_49498[(11)] = inst_49443__$1);
(statearr_49498[(14)] = inst_49452);
(statearr_49498[(12)] = inst_49442__$1);
return statearr_49498;
})();var statearr_49499_49530 = state_49485__$1;(statearr_49499_49530[(2)] = null);
(statearr_49499_49530[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (6)))
{var inst_49431 = (state_49485[(13)]);var inst_49436 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49431) : f.call(null,inst_49431));var inst_49441 = cljs.core.seq(inst_49436);var inst_49442 = inst_49441;var inst_49443 = null;var inst_49444 = (0);var inst_49445 = (0);var state_49485__$1 = (function (){var statearr_49500 = state_49485;(statearr_49500[(8)] = inst_49445);
(statearr_49500[(9)] = inst_49444);
(statearr_49500[(11)] = inst_49443);
(statearr_49500[(12)] = inst_49442);
return statearr_49500;
})();var statearr_49501_49531 = state_49485__$1;(statearr_49501_49531[(2)] = null);
(statearr_49501_49531[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (17)))
{var inst_49456 = (state_49485[(7)]);var inst_49460 = cljs.core.chunk_first(inst_49456);var inst_49461 = cljs.core.chunk_rest(inst_49456);var inst_49462 = cljs.core.count(inst_49460);var inst_49442 = inst_49461;var inst_49443 = inst_49460;var inst_49444 = inst_49462;var inst_49445 = (0);var state_49485__$1 = (function (){var statearr_49502 = state_49485;(statearr_49502[(8)] = inst_49445);
(statearr_49502[(9)] = inst_49444);
(statearr_49502[(11)] = inst_49443);
(statearr_49502[(12)] = inst_49442);
return statearr_49502;
})();var statearr_49503_49532 = state_49485__$1;(statearr_49503_49532[(2)] = null);
(statearr_49503_49532[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (3)))
{var inst_49483 = (state_49485[(2)]);var state_49485__$1 = state_49485;return cljs.core.async.impl.ioc_helpers.return_chan(state_49485__$1,inst_49483);
} else
{if((state_val_49486 === (12)))
{var inst_49476 = (state_49485[(2)]);var state_49485__$1 = state_49485;var statearr_49504_49533 = state_49485__$1;(statearr_49504_49533[(2)] = inst_49476);
(statearr_49504_49533[(1)] = (9));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (2)))
{var state_49485__$1 = state_49485;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49485__$1,(4),in$);
} else
{if((state_val_49486 === (19)))
{var inst_49471 = (state_49485[(2)]);var state_49485__$1 = state_49485;var statearr_49505_49534 = state_49485__$1;(statearr_49505_49534[(2)] = inst_49471);
(statearr_49505_49534[(1)] = (16));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (11)))
{var inst_49442 = (state_49485[(12)]);var inst_49456 = (state_49485[(7)]);var inst_49456__$1 = cljs.core.seq(inst_49442);var state_49485__$1 = (function (){var statearr_49506 = state_49485;(statearr_49506[(7)] = inst_49456__$1);
return statearr_49506;
})();if(inst_49456__$1)
{var statearr_49507_49535 = state_49485__$1;(statearr_49507_49535[(1)] = (14));
} else
{var statearr_49508_49536 = state_49485__$1;(statearr_49508_49536[(1)] = (15));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (9)))
{var inst_49478 = (state_49485[(2)]);var state_49485__$1 = (function (){var statearr_49509 = state_49485;(statearr_49509[(15)] = inst_49478);
return statearr_49509;
})();var statearr_49510_49537 = state_49485__$1;(statearr_49510_49537[(2)] = null);
(statearr_49510_49537[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (5)))
{var inst_49434 = cljs.core.async.close_BANG_(out);var state_49485__$1 = state_49485;var statearr_49511_49538 = state_49485__$1;(statearr_49511_49538[(2)] = inst_49434);
(statearr_49511_49538[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (14)))
{var inst_49456 = (state_49485[(7)]);var inst_49458 = cljs.core.chunked_seq_QMARK_(inst_49456);var state_49485__$1 = state_49485;if(inst_49458)
{var statearr_49512_49539 = state_49485__$1;(statearr_49512_49539[(1)] = (17));
} else
{var statearr_49513_49540 = state_49485__$1;(statearr_49513_49540[(1)] = (18));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (16)))
{var inst_49474 = (state_49485[(2)]);var state_49485__$1 = state_49485;var statearr_49514_49541 = state_49485__$1;(statearr_49514_49541[(2)] = inst_49474);
(statearr_49514_49541[(1)] = (12));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49486 === (10)))
{var inst_49445 = (state_49485[(8)]);var inst_49443 = (state_49485[(11)]);var inst_49450 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49443,inst_49445);var state_49485__$1 = state_49485;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49485__$1,(13),out,inst_49450);
} else
{if((state_val_49486 === (18)))
{var inst_49456 = (state_49485[(7)]);var inst_49465 = cljs.core.first(inst_49456);var state_49485__$1 = state_49485;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49485__$1,(20),out,inst_49465);
} else
{if((state_val_49486 === (8)))
{var inst_49445 = (state_49485[(8)]);var inst_49444 = (state_49485[(9)]);var inst_49447 = (inst_49445 < inst_49444);var inst_49448 = inst_49447;var state_49485__$1 = state_49485;if(cljs.core.truth_(inst_49448))
{var statearr_49515_49542 = state_49485__$1;(statearr_49515_49542[(1)] = (10));
} else
{var statearr_49516_49543 = state_49485__$1;(statearr_49516_49543[(1)] = (11));
}
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49520[(0)] = state_machine__5694__auto__);
(statearr_49520[(1)] = (1));
return statearr_49520;
});
var state_machine__5694__auto____1 = (function (state_49485){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49485);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49521){if((e49521 instanceof Object))
{var ex__5697__auto__ = e49521;var statearr_49522_49544 = state_49485;(statearr_49522_49544[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49485);
return cljs.core.constant$keyword$1094;
} else
{throw e49521;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49545 = state_49485;
state_49485 = G__49545;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49485){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_49523 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___49626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___49626){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49626){
return (function (state_49605){var state_val_49606 = (state_49605[(1)]);if((state_val_49606 === (7)))
{var inst_49601 = (state_49605[(2)]);var state_49605__$1 = state_49605;var statearr_49607_49627 = state_49605__$1;(statearr_49607_49627[(2)] = inst_49601);
(statearr_49607_49627[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49606 === (1)))
{var state_49605__$1 = state_49605;var statearr_49608_49628 = state_49605__$1;(statearr_49608_49628[(2)] = null);
(statearr_49608_49628[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49606 === (4)))
{var inst_49588 = (state_49605[(7)]);var inst_49588__$1 = (state_49605[(2)]);var inst_49589 = (inst_49588__$1 == null);var state_49605__$1 = (function (){var statearr_49609 = state_49605;(statearr_49609[(7)] = inst_49588__$1);
return statearr_49609;
})();if(cljs.core.truth_(inst_49589))
{var statearr_49610_49629 = state_49605__$1;(statearr_49610_49629[(1)] = (5));
} else
{var statearr_49611_49630 = state_49605__$1;(statearr_49611_49630[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49606 === (6)))
{var inst_49588 = (state_49605[(7)]);var state_49605__$1 = state_49605;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49605__$1,(11),to,inst_49588);
} else
{if((state_val_49606 === (3)))
{var inst_49603 = (state_49605[(2)]);var state_49605__$1 = state_49605;return cljs.core.async.impl.ioc_helpers.return_chan(state_49605__$1,inst_49603);
} else
{if((state_val_49606 === (2)))
{var state_49605__$1 = state_49605;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49605__$1,(4),from);
} else
{if((state_val_49606 === (11)))
{var inst_49598 = (state_49605[(2)]);var state_49605__$1 = (function (){var statearr_49612 = state_49605;(statearr_49612[(8)] = inst_49598);
return statearr_49612;
})();var statearr_49613_49631 = state_49605__$1;(statearr_49613_49631[(2)] = null);
(statearr_49613_49631[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49606 === (9)))
{var state_49605__$1 = state_49605;var statearr_49614_49632 = state_49605__$1;(statearr_49614_49632[(2)] = null);
(statearr_49614_49632[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49606 === (5)))
{var state_49605__$1 = state_49605;if(cljs.core.truth_(close_QMARK_))
{var statearr_49615_49633 = state_49605__$1;(statearr_49615_49633[(1)] = (8));
} else
{var statearr_49616_49634 = state_49605__$1;(statearr_49616_49634[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49606 === (10)))
{var inst_49595 = (state_49605[(2)]);var state_49605__$1 = state_49605;var statearr_49617_49635 = state_49605__$1;(statearr_49617_49635[(2)] = inst_49595);
(statearr_49617_49635[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49606 === (8)))
{var inst_49592 = cljs.core.async.close_BANG_(to);var state_49605__$1 = state_49605;var statearr_49618_49636 = state_49605__$1;(statearr_49618_49636[(2)] = inst_49592);
(statearr_49618_49636[(1)] = (10));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___49626))
;return ((function (switch__5693__auto__,c__5708__auto___49626){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49622 = [null,null,null,null,null,null,null,null,null];(statearr_49622[(0)] = state_machine__5694__auto__);
(statearr_49622[(1)] = (1));
return statearr_49622;
});
var state_machine__5694__auto____1 = (function (state_49605){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49605);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49623){if((e49623 instanceof Object))
{var ex__5697__auto__ = e49623;var statearr_49624_49637 = state_49605;(statearr_49624_49637[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49605);
return cljs.core.constant$keyword$1094;
} else
{throw e49623;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49638 = state_49605;
state_49605 = G__49638;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49605){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49626))
})();var state__5710__auto__ = (function (){var statearr_49625 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49626);
return statearr_49625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___49626))
);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5708__auto___49725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___49725,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49725,tc,fc){
return (function (state_49703){var state_val_49704 = (state_49703[(1)]);if((state_val_49704 === (7)))
{var inst_49699 = (state_49703[(2)]);var state_49703__$1 = state_49703;var statearr_49705_49726 = state_49703__$1;(statearr_49705_49726[(2)] = inst_49699);
(statearr_49705_49726[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49704 === (1)))
{var state_49703__$1 = state_49703;var statearr_49706_49727 = state_49703__$1;(statearr_49706_49727[(2)] = null);
(statearr_49706_49727[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49704 === (4)))
{var inst_49684 = (state_49703[(7)]);var inst_49684__$1 = (state_49703[(2)]);var inst_49685 = (inst_49684__$1 == null);var state_49703__$1 = (function (){var statearr_49707 = state_49703;(statearr_49707[(7)] = inst_49684__$1);
return statearr_49707;
})();if(cljs.core.truth_(inst_49685))
{var statearr_49708_49728 = state_49703__$1;(statearr_49708_49728[(1)] = (5));
} else
{var statearr_49709_49729 = state_49703__$1;(statearr_49709_49729[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49704 === (6)))
{var inst_49684 = (state_49703[(7)]);var inst_49690 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49684) : p.call(null,inst_49684));var state_49703__$1 = state_49703;if(cljs.core.truth_(inst_49690))
{var statearr_49710_49730 = state_49703__$1;(statearr_49710_49730[(1)] = (9));
} else
{var statearr_49711_49731 = state_49703__$1;(statearr_49711_49731[(1)] = (10));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49704 === (3)))
{var inst_49701 = (state_49703[(2)]);var state_49703__$1 = state_49703;return cljs.core.async.impl.ioc_helpers.return_chan(state_49703__$1,inst_49701);
} else
{if((state_val_49704 === (2)))
{var state_49703__$1 = state_49703;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49703__$1,(4),ch);
} else
{if((state_val_49704 === (11)))
{var inst_49684 = (state_49703[(7)]);var inst_49694 = (state_49703[(2)]);var state_49703__$1 = state_49703;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49703__$1,(8),inst_49694,inst_49684);
} else
{if((state_val_49704 === (9)))
{var state_49703__$1 = state_49703;var statearr_49712_49732 = state_49703__$1;(statearr_49712_49732[(2)] = tc);
(statearr_49712_49732[(1)] = (11));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49704 === (5)))
{var inst_49687 = cljs.core.async.close_BANG_(tc);var inst_49688 = cljs.core.async.close_BANG_(fc);var state_49703__$1 = (function (){var statearr_49713 = state_49703;(statearr_49713[(8)] = inst_49687);
return statearr_49713;
})();var statearr_49714_49733 = state_49703__$1;(statearr_49714_49733[(2)] = inst_49688);
(statearr_49714_49733[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49704 === (10)))
{var state_49703__$1 = state_49703;var statearr_49715_49734 = state_49703__$1;(statearr_49715_49734[(2)] = fc);
(statearr_49715_49734[(1)] = (11));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49704 === (8)))
{var inst_49696 = (state_49703[(2)]);var state_49703__$1 = (function (){var statearr_49716 = state_49703;(statearr_49716[(9)] = inst_49696);
return statearr_49716;
})();var statearr_49717_49735 = state_49703__$1;(statearr_49717_49735[(2)] = null);
(statearr_49717_49735[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___49725,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___49725,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49721 = [null,null,null,null,null,null,null,null,null,null];(statearr_49721[(0)] = state_machine__5694__auto__);
(statearr_49721[(1)] = (1));
return statearr_49721;
});
var state_machine__5694__auto____1 = (function (state_49703){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49703);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49722){if((e49722 instanceof Object))
{var ex__5697__auto__ = e49722;var statearr_49723_49736 = state_49703;(statearr_49723_49736[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49703);
return cljs.core.constant$keyword$1094;
} else
{throw e49722;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49737 = state_49703;
state_49703 = G__49737;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49703){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49725,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_49724 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49725);
return statearr_49724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___49725,tc,fc))
);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_49784){var state_val_49785 = (state_49784[(1)]);if((state_val_49785 === (7)))
{var inst_49780 = (state_49784[(2)]);var state_49784__$1 = state_49784;var statearr_49786_49802 = state_49784__$1;(statearr_49786_49802[(2)] = inst_49780);
(statearr_49786_49802[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49785 === (6)))
{var inst_49773 = (state_49784[(7)]);var inst_49770 = (state_49784[(8)]);var inst_49777 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49770,inst_49773) : f.call(null,inst_49770,inst_49773));var inst_49770__$1 = inst_49777;var state_49784__$1 = (function (){var statearr_49787 = state_49784;(statearr_49787[(8)] = inst_49770__$1);
return statearr_49787;
})();var statearr_49788_49803 = state_49784__$1;(statearr_49788_49803[(2)] = null);
(statearr_49788_49803[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49785 === (5)))
{var inst_49770 = (state_49784[(8)]);var state_49784__$1 = state_49784;var statearr_49789_49804 = state_49784__$1;(statearr_49789_49804[(2)] = inst_49770);
(statearr_49789_49804[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49785 === (4)))
{var inst_49773 = (state_49784[(7)]);var inst_49773__$1 = (state_49784[(2)]);var inst_49774 = (inst_49773__$1 == null);var state_49784__$1 = (function (){var statearr_49790 = state_49784;(statearr_49790[(7)] = inst_49773__$1);
return statearr_49790;
})();if(cljs.core.truth_(inst_49774))
{var statearr_49791_49805 = state_49784__$1;(statearr_49791_49805[(1)] = (5));
} else
{var statearr_49792_49806 = state_49784__$1;(statearr_49792_49806[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49785 === (3)))
{var inst_49782 = (state_49784[(2)]);var state_49784__$1 = state_49784;return cljs.core.async.impl.ioc_helpers.return_chan(state_49784__$1,inst_49782);
} else
{if((state_val_49785 === (2)))
{var state_49784__$1 = state_49784;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49784__$1,(4),ch);
} else
{if((state_val_49785 === (1)))
{var inst_49770 = init;var state_49784__$1 = (function (){var statearr_49793 = state_49784;(statearr_49793[(8)] = inst_49770);
return statearr_49793;
})();var statearr_49794_49807 = state_49784__$1;(statearr_49794_49807[(2)] = null);
(statearr_49794_49807[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49798 = [null,null,null,null,null,null,null,null,null];(statearr_49798[(0)] = state_machine__5694__auto__);
(statearr_49798[(1)] = (1));
return statearr_49798;
});
var state_machine__5694__auto____1 = (function (state_49784){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49784);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49799){if((e49799 instanceof Object))
{var ex__5697__auto__ = e49799;var statearr_49800_49808 = state_49784;(statearr_49800_49808[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49784);
return cljs.core.constant$keyword$1094;
} else
{throw e49799;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49809 = state_49784;
state_49784 = G__49809;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49784){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_49801 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_49871){var state_val_49872 = (state_49871[(1)]);if((state_val_49872 === (7)))
{var inst_49852 = (state_49871[(7)]);var inst_49857 = (state_49871[(2)]);var inst_49858 = cljs.core.next(inst_49852);var inst_49852__$1 = inst_49858;var state_49871__$1 = (function (){var statearr_49873 = state_49871;(statearr_49873[(8)] = inst_49857);
(statearr_49873[(7)] = inst_49852__$1);
return statearr_49873;
})();var statearr_49874_49892 = state_49871__$1;(statearr_49874_49892[(2)] = null);
(statearr_49874_49892[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49872 === (1)))
{var inst_49851 = cljs.core.seq(coll);var inst_49852 = inst_49851;var state_49871__$1 = (function (){var statearr_49875 = state_49871;(statearr_49875[(7)] = inst_49852);
return statearr_49875;
})();var statearr_49876_49893 = state_49871__$1;(statearr_49876_49893[(2)] = null);
(statearr_49876_49893[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49872 === (4)))
{var inst_49852 = (state_49871[(7)]);var inst_49855 = cljs.core.first(inst_49852);var state_49871__$1 = state_49871;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49871__$1,(7),ch,inst_49855);
} else
{if((state_val_49872 === (6)))
{var inst_49867 = (state_49871[(2)]);var state_49871__$1 = state_49871;var statearr_49877_49894 = state_49871__$1;(statearr_49877_49894[(2)] = inst_49867);
(statearr_49877_49894[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49872 === (3)))
{var inst_49869 = (state_49871[(2)]);var state_49871__$1 = state_49871;return cljs.core.async.impl.ioc_helpers.return_chan(state_49871__$1,inst_49869);
} else
{if((state_val_49872 === (2)))
{var inst_49852 = (state_49871[(7)]);var state_49871__$1 = state_49871;if(cljs.core.truth_(inst_49852))
{var statearr_49878_49895 = state_49871__$1;(statearr_49878_49895[(1)] = (4));
} else
{var statearr_49879_49896 = state_49871__$1;(statearr_49879_49896[(1)] = (5));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49872 === (9)))
{var state_49871__$1 = state_49871;var statearr_49880_49897 = state_49871__$1;(statearr_49880_49897[(2)] = null);
(statearr_49880_49897[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49872 === (5)))
{var state_49871__$1 = state_49871;if(cljs.core.truth_(close_QMARK_))
{var statearr_49881_49898 = state_49871__$1;(statearr_49881_49898[(1)] = (8));
} else
{var statearr_49882_49899 = state_49871__$1;(statearr_49882_49899[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49872 === (10)))
{var inst_49865 = (state_49871[(2)]);var state_49871__$1 = state_49871;var statearr_49883_49900 = state_49871__$1;(statearr_49883_49900[(2)] = inst_49865);
(statearr_49883_49900[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_49872 === (8)))
{var inst_49862 = cljs.core.async.close_BANG_(ch);var state_49871__$1 = state_49871;var statearr_49884_49901 = state_49871__$1;(statearr_49884_49901[(2)] = inst_49862);
(statearr_49884_49901[(1)] = (10));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49888 = [null,null,null,null,null,null,null,null,null];(statearr_49888[(0)] = state_machine__5694__auto__);
(statearr_49888[(1)] = (1));
return statearr_49888;
});
var state_machine__5694__auto____1 = (function (state_49871){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49871);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49889){if((e49889 instanceof Object))
{var ex__5697__auto__ = e49889;var statearr_49890_49902 = state_49871;(statearr_49890_49902[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49871);
return cljs.core.constant$keyword$1094;
} else
{throw e49889;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__49903 = state_49871;
state_49871 = G__49903;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49871){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_49891 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj49905 = {};return obj49905;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3546__auto__ = _;if(and__3546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4185__auto__ = (((_ == null))?null:_);return (function (){var or__3558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj49907 = {};return obj49907;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var m = (function (){if(typeof cljs.core.async.t50131 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50131 = (function (cs,ch,mult,meta50132){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta50132 = meta50132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50131.cljs$lang$type = true;
cljs.core.async.t50131.cljs$lang$ctorStr = "cljs.core.async/t50131";
cljs.core.async.t50131.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t50131");
});})(cs))
;
cljs.core.async.t50131.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t50131.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t50131.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t50131.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return null;
});})(cs))
;
cljs.core.async.t50131.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t50131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_50133){var self__ = this;
var _50133__$1 = this;return self__.meta50132;
});})(cs))
;
cljs.core.async.t50131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_50133,meta50132__$1){var self__ = this;
var _50133__$1 = this;return (new cljs.core.async.t50131(self__.cs,self__.ch,self__.mult,meta50132__$1));
});})(cs))
;
cljs.core.async.__GT_t50131 = ((function (cs){
return (function __GT_t50131(cs__$1,ch__$1,mult__$1,meta50132){return (new cljs.core.async.t50131(cs__$1,ch__$1,mult__$1,meta50132));
});})(cs))
;
}
return (new cljs.core.async.t50131(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___50354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50354,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50354,cs,m,dchan,dctr,done){
return (function (state_50268){var state_val_50269 = (state_50268[(1)]);if((state_val_50269 === (7)))
{var inst_50264 = (state_50268[(2)]);var state_50268__$1 = state_50268;var statearr_50270_50355 = state_50268__$1;(statearr_50270_50355[(2)] = inst_50264);
(statearr_50270_50355[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (20)))
{var inst_50165 = (state_50268[(7)]);var inst_50175 = cljs.core.first(inst_50165);var inst_50176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50175,(0),null);var inst_50177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50175,(1),null);var state_50268__$1 = (function (){var statearr_50271 = state_50268;(statearr_50271[(8)] = inst_50176);
return statearr_50271;
})();if(cljs.core.truth_(inst_50177))
{var statearr_50272_50356 = state_50268__$1;(statearr_50272_50356[(1)] = (22));
} else
{var statearr_50273_50357 = state_50268__$1;(statearr_50273_50357[(1)] = (23));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (27)))
{var inst_50205 = (state_50268[(9)]);var inst_50207 = (state_50268[(10)]);var inst_50212 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50205,inst_50207);var state_50268__$1 = (function (){var statearr_50274 = state_50268;(statearr_50274[(11)] = inst_50212);
return statearr_50274;
})();var statearr_50275_50358 = state_50268__$1;(statearr_50275_50358[(2)] = null);
(statearr_50275_50358[(1)] = (32));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (1)))
{var state_50268__$1 = state_50268;var statearr_50276_50359 = state_50268__$1;(statearr_50276_50359[(2)] = null);
(statearr_50276_50359[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (24)))
{var inst_50165 = (state_50268[(7)]);var inst_50182 = (state_50268[(2)]);var inst_50183 = cljs.core.next(inst_50165);var inst_50145 = inst_50183;var inst_50146 = null;var inst_50147 = (0);var inst_50148 = (0);var state_50268__$1 = (function (){var statearr_50277 = state_50268;(statearr_50277[(12)] = inst_50146);
(statearr_50277[(13)] = inst_50148);
(statearr_50277[(14)] = inst_50182);
(statearr_50277[(15)] = inst_50145);
(statearr_50277[(16)] = inst_50147);
return statearr_50277;
})();var statearr_50278_50360 = state_50268__$1;(statearr_50278_50360[(2)] = null);
(statearr_50278_50360[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (39)))
{var inst_50225 = (state_50268[(17)]);var inst_50243 = (state_50268[(2)]);var inst_50244 = cljs.core.next(inst_50225);var inst_50204 = inst_50244;var inst_50205 = null;var inst_50206 = (0);var inst_50207 = (0);var state_50268__$1 = (function (){var statearr_50282 = state_50268;(statearr_50282[(18)] = inst_50243);
(statearr_50282[(19)] = inst_50206);
(statearr_50282[(9)] = inst_50205);
(statearr_50282[(10)] = inst_50207);
(statearr_50282[(20)] = inst_50204);
return statearr_50282;
})();var statearr_50283_50361 = state_50268__$1;(statearr_50283_50361[(2)] = null);
(statearr_50283_50361[(1)] = (25));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (4)))
{var inst_50136 = (state_50268[(21)]);var inst_50136__$1 = (state_50268[(2)]);var inst_50137 = (inst_50136__$1 == null);var state_50268__$1 = (function (){var statearr_50284 = state_50268;(statearr_50284[(21)] = inst_50136__$1);
return statearr_50284;
})();if(cljs.core.truth_(inst_50137))
{var statearr_50285_50362 = state_50268__$1;(statearr_50285_50362[(1)] = (5));
} else
{var statearr_50286_50363 = state_50268__$1;(statearr_50286_50363[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (15)))
{var inst_50146 = (state_50268[(12)]);var inst_50148 = (state_50268[(13)]);var inst_50145 = (state_50268[(15)]);var inst_50147 = (state_50268[(16)]);var inst_50161 = (state_50268[(2)]);var inst_50162 = (inst_50148 + (1));var tmp50279 = inst_50146;var tmp50280 = inst_50145;var tmp50281 = inst_50147;var inst_50145__$1 = tmp50280;var inst_50146__$1 = tmp50279;var inst_50147__$1 = tmp50281;var inst_50148__$1 = inst_50162;var state_50268__$1 = (function (){var statearr_50287 = state_50268;(statearr_50287[(12)] = inst_50146__$1);
(statearr_50287[(13)] = inst_50148__$1);
(statearr_50287[(22)] = inst_50161);
(statearr_50287[(15)] = inst_50145__$1);
(statearr_50287[(16)] = inst_50147__$1);
return statearr_50287;
})();var statearr_50288_50364 = state_50268__$1;(statearr_50288_50364[(2)] = null);
(statearr_50288_50364[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (21)))
{var inst_50186 = (state_50268[(2)]);var state_50268__$1 = state_50268;var statearr_50289_50365 = state_50268__$1;(statearr_50289_50365[(2)] = inst_50186);
(statearr_50289_50365[(1)] = (18));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (31)))
{var inst_50212 = (state_50268[(11)]);var inst_50213 = (state_50268[(2)]);var inst_50214 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_50215 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50212);var state_50268__$1 = (function (){var statearr_50290 = state_50268;(statearr_50290[(23)] = inst_50214);
(statearr_50290[(24)] = inst_50213);
return statearr_50290;
})();var statearr_50291_50366 = state_50268__$1;(statearr_50291_50366[(2)] = inst_50215);
cljs.core.async.impl.ioc_helpers.process_exception(state_50268__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (32)))
{var inst_50136 = (state_50268[(21)]);var inst_50212 = (state_50268[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50268,(31),Object,null,(30));var inst_50219 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50212,inst_50136,done);var state_50268__$1 = state_50268;var statearr_50292_50367 = state_50268__$1;(statearr_50292_50367[(2)] = inst_50219);
cljs.core.async.impl.ioc_helpers.process_exception(state_50268__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (40)))
{var inst_50234 = (state_50268[(25)]);var inst_50235 = (state_50268[(2)]);var inst_50236 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_50237 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50234);var state_50268__$1 = (function (){var statearr_50293 = state_50268;(statearr_50293[(26)] = inst_50236);
(statearr_50293[(27)] = inst_50235);
return statearr_50293;
})();var statearr_50294_50368 = state_50268__$1;(statearr_50294_50368[(2)] = inst_50237);
cljs.core.async.impl.ioc_helpers.process_exception(state_50268__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (33)))
{var inst_50225 = (state_50268[(17)]);var inst_50227 = cljs.core.chunked_seq_QMARK_(inst_50225);var state_50268__$1 = state_50268;if(inst_50227)
{var statearr_50295_50369 = state_50268__$1;(statearr_50295_50369[(1)] = (36));
} else
{var statearr_50296_50370 = state_50268__$1;(statearr_50296_50370[(1)] = (37));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (13)))
{var inst_50155 = (state_50268[(28)]);var inst_50158 = cljs.core.async.close_BANG_(inst_50155);var state_50268__$1 = state_50268;var statearr_50297_50371 = state_50268__$1;(statearr_50297_50371[(2)] = inst_50158);
(statearr_50297_50371[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (22)))
{var inst_50176 = (state_50268[(8)]);var inst_50179 = cljs.core.async.close_BANG_(inst_50176);var state_50268__$1 = state_50268;var statearr_50298_50372 = state_50268__$1;(statearr_50298_50372[(2)] = inst_50179);
(statearr_50298_50372[(1)] = (24));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (36)))
{var inst_50225 = (state_50268[(17)]);var inst_50229 = cljs.core.chunk_first(inst_50225);var inst_50230 = cljs.core.chunk_rest(inst_50225);var inst_50231 = cljs.core.count(inst_50229);var inst_50204 = inst_50230;var inst_50205 = inst_50229;var inst_50206 = inst_50231;var inst_50207 = (0);var state_50268__$1 = (function (){var statearr_50299 = state_50268;(statearr_50299[(19)] = inst_50206);
(statearr_50299[(9)] = inst_50205);
(statearr_50299[(10)] = inst_50207);
(statearr_50299[(20)] = inst_50204);
return statearr_50299;
})();var statearr_50300_50373 = state_50268__$1;(statearr_50300_50373[(2)] = null);
(statearr_50300_50373[(1)] = (25));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (41)))
{var inst_50136 = (state_50268[(21)]);var inst_50234 = (state_50268[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50268,(40),Object,null,(39));var inst_50241 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50234,inst_50136,done);var state_50268__$1 = state_50268;var statearr_50301_50374 = state_50268__$1;(statearr_50301_50374[(2)] = inst_50241);
cljs.core.async.impl.ioc_helpers.process_exception(state_50268__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (43)))
{var state_50268__$1 = state_50268;var statearr_50302_50375 = state_50268__$1;(statearr_50302_50375[(2)] = null);
(statearr_50302_50375[(1)] = (44));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (29)))
{var inst_50252 = (state_50268[(2)]);var state_50268__$1 = state_50268;var statearr_50303_50376 = state_50268__$1;(statearr_50303_50376[(2)] = inst_50252);
(statearr_50303_50376[(1)] = (26));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (44)))
{var inst_50261 = (state_50268[(2)]);var state_50268__$1 = (function (){var statearr_50304 = state_50268;(statearr_50304[(29)] = inst_50261);
return statearr_50304;
})();var statearr_50305_50377 = state_50268__$1;(statearr_50305_50377[(2)] = null);
(statearr_50305_50377[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (6)))
{var inst_50196 = (state_50268[(30)]);var inst_50195 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_50196__$1 = cljs.core.keys(inst_50195);var inst_50197 = cljs.core.count(inst_50196__$1);var inst_50198 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_50197) : cljs.core.reset_BANG_.call(null,dctr,inst_50197));var inst_50203 = cljs.core.seq(inst_50196__$1);var inst_50204 = inst_50203;var inst_50205 = null;var inst_50206 = (0);var inst_50207 = (0);var state_50268__$1 = (function (){var statearr_50306 = state_50268;(statearr_50306[(31)] = inst_50198);
(statearr_50306[(19)] = inst_50206);
(statearr_50306[(30)] = inst_50196__$1);
(statearr_50306[(9)] = inst_50205);
(statearr_50306[(10)] = inst_50207);
(statearr_50306[(20)] = inst_50204);
return statearr_50306;
})();var statearr_50307_50378 = state_50268__$1;(statearr_50307_50378[(2)] = null);
(statearr_50307_50378[(1)] = (25));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (28)))
{var inst_50225 = (state_50268[(17)]);var inst_50204 = (state_50268[(20)]);var inst_50225__$1 = cljs.core.seq(inst_50204);var state_50268__$1 = (function (){var statearr_50308 = state_50268;(statearr_50308[(17)] = inst_50225__$1);
return statearr_50308;
})();if(inst_50225__$1)
{var statearr_50309_50379 = state_50268__$1;(statearr_50309_50379[(1)] = (33));
} else
{var statearr_50310_50380 = state_50268__$1;(statearr_50310_50380[(1)] = (34));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (25)))
{var inst_50206 = (state_50268[(19)]);var inst_50207 = (state_50268[(10)]);var inst_50209 = (inst_50207 < inst_50206);var inst_50210 = inst_50209;var state_50268__$1 = state_50268;if(cljs.core.truth_(inst_50210))
{var statearr_50311_50381 = state_50268__$1;(statearr_50311_50381[(1)] = (27));
} else
{var statearr_50312_50382 = state_50268__$1;(statearr_50312_50382[(1)] = (28));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (34)))
{var state_50268__$1 = state_50268;var statearr_50313_50383 = state_50268__$1;(statearr_50313_50383[(2)] = null);
(statearr_50313_50383[(1)] = (35));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (17)))
{var state_50268__$1 = state_50268;var statearr_50314_50384 = state_50268__$1;(statearr_50314_50384[(2)] = null);
(statearr_50314_50384[(1)] = (18));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (3)))
{var inst_50266 = (state_50268[(2)]);var state_50268__$1 = state_50268;return cljs.core.async.impl.ioc_helpers.return_chan(state_50268__$1,inst_50266);
} else
{if((state_val_50269 === (12)))
{var inst_50191 = (state_50268[(2)]);var state_50268__$1 = state_50268;var statearr_50315_50385 = state_50268__$1;(statearr_50315_50385[(2)] = inst_50191);
(statearr_50315_50385[(1)] = (9));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (2)))
{var state_50268__$1 = state_50268;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50268__$1,(4),ch);
} else
{if((state_val_50269 === (23)))
{var state_50268__$1 = state_50268;var statearr_50316_50386 = state_50268__$1;(statearr_50316_50386[(2)] = null);
(statearr_50316_50386[(1)] = (24));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (35)))
{var inst_50250 = (state_50268[(2)]);var state_50268__$1 = state_50268;var statearr_50317_50387 = state_50268__$1;(statearr_50317_50387[(2)] = inst_50250);
(statearr_50317_50387[(1)] = (29));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (19)))
{var inst_50165 = (state_50268[(7)]);var inst_50169 = cljs.core.chunk_first(inst_50165);var inst_50170 = cljs.core.chunk_rest(inst_50165);var inst_50171 = cljs.core.count(inst_50169);var inst_50145 = inst_50170;var inst_50146 = inst_50169;var inst_50147 = inst_50171;var inst_50148 = (0);var state_50268__$1 = (function (){var statearr_50318 = state_50268;(statearr_50318[(12)] = inst_50146);
(statearr_50318[(13)] = inst_50148);
(statearr_50318[(15)] = inst_50145);
(statearr_50318[(16)] = inst_50147);
return statearr_50318;
})();var statearr_50319_50388 = state_50268__$1;(statearr_50319_50388[(2)] = null);
(statearr_50319_50388[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (11)))
{var inst_50165 = (state_50268[(7)]);var inst_50145 = (state_50268[(15)]);var inst_50165__$1 = cljs.core.seq(inst_50145);var state_50268__$1 = (function (){var statearr_50320 = state_50268;(statearr_50320[(7)] = inst_50165__$1);
return statearr_50320;
})();if(inst_50165__$1)
{var statearr_50321_50389 = state_50268__$1;(statearr_50321_50389[(1)] = (16));
} else
{var statearr_50322_50390 = state_50268__$1;(statearr_50322_50390[(1)] = (17));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (9)))
{var inst_50193 = (state_50268[(2)]);var state_50268__$1 = state_50268;var statearr_50323_50391 = state_50268__$1;(statearr_50323_50391[(2)] = inst_50193);
(statearr_50323_50391[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (5)))
{var inst_50143 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_50144 = cljs.core.seq(inst_50143);var inst_50145 = inst_50144;var inst_50146 = null;var inst_50147 = (0);var inst_50148 = (0);var state_50268__$1 = (function (){var statearr_50324 = state_50268;(statearr_50324[(12)] = inst_50146);
(statearr_50324[(13)] = inst_50148);
(statearr_50324[(15)] = inst_50145);
(statearr_50324[(16)] = inst_50147);
return statearr_50324;
})();var statearr_50325_50392 = state_50268__$1;(statearr_50325_50392[(2)] = null);
(statearr_50325_50392[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (14)))
{var state_50268__$1 = state_50268;var statearr_50326_50393 = state_50268__$1;(statearr_50326_50393[(2)] = null);
(statearr_50326_50393[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (45)))
{var inst_50258 = (state_50268[(2)]);var state_50268__$1 = state_50268;var statearr_50327_50394 = state_50268__$1;(statearr_50327_50394[(2)] = inst_50258);
(statearr_50327_50394[(1)] = (44));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (26)))
{var inst_50196 = (state_50268[(30)]);var inst_50254 = (state_50268[(2)]);var inst_50255 = cljs.core.seq(inst_50196);var state_50268__$1 = (function (){var statearr_50328 = state_50268;(statearr_50328[(32)] = inst_50254);
return statearr_50328;
})();if(inst_50255)
{var statearr_50329_50395 = state_50268__$1;(statearr_50329_50395[(1)] = (42));
} else
{var statearr_50330_50396 = state_50268__$1;(statearr_50330_50396[(1)] = (43));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (16)))
{var inst_50165 = (state_50268[(7)]);var inst_50167 = cljs.core.chunked_seq_QMARK_(inst_50165);var state_50268__$1 = state_50268;if(inst_50167)
{var statearr_50334_50397 = state_50268__$1;(statearr_50334_50397[(1)] = (19));
} else
{var statearr_50335_50398 = state_50268__$1;(statearr_50335_50398[(1)] = (20));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (38)))
{var inst_50247 = (state_50268[(2)]);var state_50268__$1 = state_50268;var statearr_50336_50399 = state_50268__$1;(statearr_50336_50399[(2)] = inst_50247);
(statearr_50336_50399[(1)] = (35));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (30)))
{var inst_50206 = (state_50268[(19)]);var inst_50205 = (state_50268[(9)]);var inst_50207 = (state_50268[(10)]);var inst_50204 = (state_50268[(20)]);var inst_50221 = (state_50268[(2)]);var inst_50222 = (inst_50207 + (1));var tmp50331 = inst_50206;var tmp50332 = inst_50205;var tmp50333 = inst_50204;var inst_50204__$1 = tmp50333;var inst_50205__$1 = tmp50332;var inst_50206__$1 = tmp50331;var inst_50207__$1 = inst_50222;var state_50268__$1 = (function (){var statearr_50337 = state_50268;(statearr_50337[(19)] = inst_50206__$1);
(statearr_50337[(33)] = inst_50221);
(statearr_50337[(9)] = inst_50205__$1);
(statearr_50337[(10)] = inst_50207__$1);
(statearr_50337[(20)] = inst_50204__$1);
return statearr_50337;
})();var statearr_50338_50400 = state_50268__$1;(statearr_50338_50400[(2)] = null);
(statearr_50338_50400[(1)] = (25));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (10)))
{var inst_50146 = (state_50268[(12)]);var inst_50148 = (state_50268[(13)]);var inst_50154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50146,inst_50148);var inst_50155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50154,(0),null);var inst_50156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50154,(1),null);var state_50268__$1 = (function (){var statearr_50339 = state_50268;(statearr_50339[(28)] = inst_50155);
return statearr_50339;
})();if(cljs.core.truth_(inst_50156))
{var statearr_50340_50401 = state_50268__$1;(statearr_50340_50401[(1)] = (13));
} else
{var statearr_50341_50402 = state_50268__$1;(statearr_50341_50402[(1)] = (14));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (18)))
{var inst_50189 = (state_50268[(2)]);var state_50268__$1 = state_50268;var statearr_50342_50403 = state_50268__$1;(statearr_50342_50403[(2)] = inst_50189);
(statearr_50342_50403[(1)] = (12));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (42)))
{var state_50268__$1 = state_50268;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50268__$1,(45),dchan);
} else
{if((state_val_50269 === (37)))
{var inst_50225 = (state_50268[(17)]);var inst_50234 = cljs.core.first(inst_50225);var state_50268__$1 = (function (){var statearr_50343 = state_50268;(statearr_50343[(25)] = inst_50234);
return statearr_50343;
})();var statearr_50344_50404 = state_50268__$1;(statearr_50344_50404[(2)] = null);
(statearr_50344_50404[(1)] = (41));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50269 === (8)))
{var inst_50148 = (state_50268[(13)]);var inst_50147 = (state_50268[(16)]);var inst_50150 = (inst_50148 < inst_50147);var inst_50151 = inst_50150;var state_50268__$1 = state_50268;if(cljs.core.truth_(inst_50151))
{var statearr_50345_50405 = state_50268__$1;(statearr_50345_50405[(1)] = (10));
} else
{var statearr_50346_50406 = state_50268__$1;(statearr_50346_50406[(1)] = (11));
}
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___50354,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___50354,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50350[(0)] = state_machine__5694__auto__);
(statearr_50350[(1)] = (1));
return statearr_50350;
});
var state_machine__5694__auto____1 = (function (state_50268){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50268);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50351){if((e50351 instanceof Object))
{var ex__5697__auto__ = e50351;var statearr_50352_50407 = state_50268;(statearr_50352_50407[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50268);
return cljs.core.constant$keyword$1094;
} else
{throw e50351;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__50408 = state_50268;
state_50268 = G__50408;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50268){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50354,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_50353 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50354);
return statearr_50353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50354,cs,m,dchan,dctr,done))
);
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
cljs.core.async.Mix = (function (){var obj50410 = {};return obj50410;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1101,null,cljs.core.constant$keyword$1102,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$1103);var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1102) : cljs.core.atom.call(null,cljs.core.constant$keyword$1102));var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));var solos = pick(cljs.core.constant$keyword$1103,chs);var pauses = pick(cljs.core.constant$keyword$1101,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1104,solos,cljs.core.constant$keyword$1105,pick(cljs.core.constant$keyword$1102,chs),cljs.core.constant$keyword$1106,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$1101)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t50520 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50520 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50521){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50521 = meta50521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50520.cljs$lang$type = true;
cljs.core.async.t50520.cljs$lang$ctorStr = "cljs.core.async/t50520";
cljs.core.async.t50520.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t50520");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50520.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t50520.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50520.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50520.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50520.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50520.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50520.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50520.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50522){var self__ = this;
var _50522__$1 = this;return self__.meta50521;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50522,meta50521__$1){var self__ = this;
var _50522__$1 = this;return (new cljs.core.async.t50520(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50521__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t50520 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t50520(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50521){return (new cljs.core.async.t50520(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50521));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t50520(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___50629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50587){var state_val_50588 = (state_50587[(1)]);if((state_val_50588 === (7)))
{var inst_50536 = (state_50587[(7)]);var inst_50541 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50536);var state_50587__$1 = state_50587;var statearr_50589_50630 = state_50587__$1;(statearr_50589_50630[(2)] = inst_50541);
(statearr_50589_50630[(1)] = (9));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (20)))
{var inst_50551 = (state_50587[(8)]);var state_50587__$1 = state_50587;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50587__$1,(23),out,inst_50551);
} else
{if((state_val_50588 === (1)))
{var inst_50526 = (state_50587[(9)]);var inst_50526__$1 = calc_state();var inst_50527 = cljs.core.seq_QMARK_(inst_50526__$1);var state_50587__$1 = (function (){var statearr_50590 = state_50587;(statearr_50590[(9)] = inst_50526__$1);
return statearr_50590;
})();if(inst_50527)
{var statearr_50591_50631 = state_50587__$1;(statearr_50591_50631[(1)] = (2));
} else
{var statearr_50592_50632 = state_50587__$1;(statearr_50592_50632[(1)] = (3));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (4)))
{var inst_50526 = (state_50587[(9)]);var inst_50532 = (state_50587[(2)]);var inst_50533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50532,cljs.core.constant$keyword$1106);var inst_50534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50532,cljs.core.constant$keyword$1105);var inst_50535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50532,cljs.core.constant$keyword$1104);var inst_50536 = inst_50526;var state_50587__$1 = (function (){var statearr_50593 = state_50587;(statearr_50593[(10)] = inst_50534);
(statearr_50593[(7)] = inst_50536);
(statearr_50593[(11)] = inst_50535);
(statearr_50593[(12)] = inst_50533);
return statearr_50593;
})();var statearr_50594_50633 = state_50587__$1;(statearr_50594_50633[(2)] = null);
(statearr_50594_50633[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (15)))
{var state_50587__$1 = state_50587;var statearr_50595_50634 = state_50587__$1;(statearr_50595_50634[(2)] = null);
(statearr_50595_50634[(1)] = (16));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (21)))
{var state_50587__$1 = state_50587;var statearr_50596_50635 = state_50587__$1;(statearr_50596_50635[(2)] = null);
(statearr_50596_50635[(1)] = (22));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (13)))
{var inst_50583 = (state_50587[(2)]);var state_50587__$1 = state_50587;var statearr_50597_50636 = state_50587__$1;(statearr_50597_50636[(2)] = inst_50583);
(statearr_50597_50636[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (22)))
{var inst_50544 = (state_50587[(13)]);var inst_50580 = (state_50587[(2)]);var inst_50536 = inst_50544;var state_50587__$1 = (function (){var statearr_50598 = state_50587;(statearr_50598[(7)] = inst_50536);
(statearr_50598[(14)] = inst_50580);
return statearr_50598;
})();var statearr_50599_50637 = state_50587__$1;(statearr_50599_50637[(2)] = null);
(statearr_50599_50637[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (6)))
{var inst_50585 = (state_50587[(2)]);var state_50587__$1 = state_50587;return cljs.core.async.impl.ioc_helpers.return_chan(state_50587__$1,inst_50585);
} else
{if((state_val_50588 === (17)))
{var inst_50566 = (state_50587[(15)]);var state_50587__$1 = state_50587;var statearr_50600_50638 = state_50587__$1;(statearr_50600_50638[(2)] = inst_50566);
(statearr_50600_50638[(1)] = (19));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (3)))
{var inst_50526 = (state_50587[(9)]);var state_50587__$1 = state_50587;var statearr_50601_50639 = state_50587__$1;(statearr_50601_50639[(2)] = inst_50526);
(statearr_50601_50639[(1)] = (4));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (12)))
{var inst_50552 = (state_50587[(16)]);var inst_50547 = (state_50587[(17)]);var inst_50566 = (state_50587[(15)]);var inst_50566__$1 = (inst_50547.cljs$core$IFn$_invoke$arity$1 ? inst_50547.cljs$core$IFn$_invoke$arity$1(inst_50552) : inst_50547.call(null,inst_50552));var state_50587__$1 = (function (){var statearr_50602 = state_50587;(statearr_50602[(15)] = inst_50566__$1);
return statearr_50602;
})();if(cljs.core.truth_(inst_50566__$1))
{var statearr_50603_50640 = state_50587__$1;(statearr_50603_50640[(1)] = (17));
} else
{var statearr_50604_50641 = state_50587__$1;(statearr_50604_50641[(1)] = (18));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (2)))
{var inst_50526 = (state_50587[(9)]);var inst_50529 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50526);var state_50587__$1 = state_50587;var statearr_50605_50642 = state_50587__$1;(statearr_50605_50642[(2)] = inst_50529);
(statearr_50605_50642[(1)] = (4));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (23)))
{var inst_50577 = (state_50587[(2)]);var state_50587__$1 = state_50587;var statearr_50606_50643 = state_50587__$1;(statearr_50606_50643[(2)] = inst_50577);
(statearr_50606_50643[(1)] = (22));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (19)))
{var inst_50574 = (state_50587[(2)]);var state_50587__$1 = state_50587;if(cljs.core.truth_(inst_50574))
{var statearr_50607_50644 = state_50587__$1;(statearr_50607_50644[(1)] = (20));
} else
{var statearr_50608_50645 = state_50587__$1;(statearr_50608_50645[(1)] = (21));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (11)))
{var inst_50551 = (state_50587[(8)]);var inst_50557 = (inst_50551 == null);var state_50587__$1 = state_50587;if(cljs.core.truth_(inst_50557))
{var statearr_50609_50646 = state_50587__$1;(statearr_50609_50646[(1)] = (14));
} else
{var statearr_50610_50647 = state_50587__$1;(statearr_50610_50647[(1)] = (15));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (9)))
{var inst_50544 = (state_50587[(13)]);var inst_50544__$1 = (state_50587[(2)]);var inst_50545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50544__$1,cljs.core.constant$keyword$1106);var inst_50546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50544__$1,cljs.core.constant$keyword$1105);var inst_50547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50544__$1,cljs.core.constant$keyword$1104);var state_50587__$1 = (function (){var statearr_50611 = state_50587;(statearr_50611[(13)] = inst_50544__$1);
(statearr_50611[(17)] = inst_50547);
(statearr_50611[(18)] = inst_50546);
return statearr_50611;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_50587__$1,(10),inst_50545);
} else
{if((state_val_50588 === (5)))
{var inst_50536 = (state_50587[(7)]);var inst_50539 = cljs.core.seq_QMARK_(inst_50536);var state_50587__$1 = state_50587;if(inst_50539)
{var statearr_50612_50648 = state_50587__$1;(statearr_50612_50648[(1)] = (7));
} else
{var statearr_50613_50649 = state_50587__$1;(statearr_50613_50649[(1)] = (8));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (14)))
{var inst_50552 = (state_50587[(16)]);var inst_50559 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50552);var state_50587__$1 = state_50587;var statearr_50614_50650 = state_50587__$1;(statearr_50614_50650[(2)] = inst_50559);
(statearr_50614_50650[(1)] = (16));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (16)))
{var inst_50562 = (state_50587[(2)]);var inst_50563 = calc_state();var inst_50536 = inst_50563;var state_50587__$1 = (function (){var statearr_50615 = state_50587;(statearr_50615[(19)] = inst_50562);
(statearr_50615[(7)] = inst_50536);
return statearr_50615;
})();var statearr_50616_50651 = state_50587__$1;(statearr_50616_50651[(2)] = null);
(statearr_50616_50651[(1)] = (5));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (10)))
{var inst_50551 = (state_50587[(8)]);var inst_50552 = (state_50587[(16)]);var inst_50550 = (state_50587[(2)]);var inst_50551__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50550,(0),null);var inst_50552__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50550,(1),null);var inst_50553 = (inst_50551__$1 == null);var inst_50554 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50552__$1,change);var inst_50555 = (inst_50553) || (inst_50554);var state_50587__$1 = (function (){var statearr_50617 = state_50587;(statearr_50617[(8)] = inst_50551__$1);
(statearr_50617[(16)] = inst_50552__$1);
return statearr_50617;
})();if(cljs.core.truth_(inst_50555))
{var statearr_50618_50652 = state_50587__$1;(statearr_50618_50652[(1)] = (11));
} else
{var statearr_50619_50653 = state_50587__$1;(statearr_50619_50653[(1)] = (12));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (18)))
{var inst_50552 = (state_50587[(16)]);var inst_50547 = (state_50587[(17)]);var inst_50546 = (state_50587[(18)]);var inst_50569 = cljs.core.empty_QMARK_(inst_50547);var inst_50570 = (inst_50546.cljs$core$IFn$_invoke$arity$1 ? inst_50546.cljs$core$IFn$_invoke$arity$1(inst_50552) : inst_50546.call(null,inst_50552));var inst_50571 = cljs.core.not(inst_50570);var inst_50572 = (inst_50569) && (inst_50571);var state_50587__$1 = state_50587;var statearr_50620_50654 = state_50587__$1;(statearr_50620_50654[(2)] = inst_50572);
(statearr_50620_50654[(1)] = (19));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50588 === (8)))
{var inst_50536 = (state_50587[(7)]);var state_50587__$1 = state_50587;var statearr_50621_50655 = state_50587__$1;(statearr_50621_50655[(2)] = inst_50536);
(statearr_50621_50655[(1)] = (9));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___50629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___50629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50625[(0)] = state_machine__5694__auto__);
(statearr_50625[(1)] = (1));
return statearr_50625;
});
var state_machine__5694__auto____1 = (function (state_50587){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50587);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50626){if((e50626 instanceof Object))
{var ex__5697__auto__ = e50626;var statearr_50627_50656 = state_50587;(statearr_50627_50656[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50587);
return cljs.core.constant$keyword$1094;
} else
{throw e50626;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__50657 = state_50587;
state_50587 = G__50657;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50587){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_50628 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50629);
return statearr_50628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
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
cljs.core.async.Pub = (function (){var obj50659 = {};return obj50659;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var ensure_mult = ((function (mults){
return (function (topic){var or__3558__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3558__auto__,mults){
return (function (p1__50660_SHARP_){if(cljs.core.truth_((p1__50660_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50660_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__50660_SHARP_.call(null,topic))))
{return p1__50660_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50660_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t50785 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50785 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta50786){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta50786 = meta50786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50785.cljs$lang$type = true;
cljs.core.async.t50785.cljs$lang$ctorStr = "cljs.core.async/t50785";
cljs.core.async.t50785.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t50785");
});})(mults,ensure_mult))
;
cljs.core.async.t50785.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t50785.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t50785.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t50785.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.mults,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY));
});})(mults,ensure_mult))
;
cljs.core.async.t50785.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t50785.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t50785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50787){var self__ = this;
var _50787__$1 = this;return self__.meta50786;
});})(mults,ensure_mult))
;
cljs.core.async.t50785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50787,meta50786__$1){var self__ = this;
var _50787__$1 = this;return (new cljs.core.async.t50785(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta50786__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t50785 = ((function (mults,ensure_mult){
return (function __GT_t50785(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50786){return (new cljs.core.async.t50785(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50786));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t50785(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___50909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50909,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50909,mults,ensure_mult,p){
return (function (state_50861){var state_val_50862 = (state_50861[(1)]);if((state_val_50862 === (7)))
{var inst_50857 = (state_50861[(2)]);var state_50861__$1 = state_50861;var statearr_50863_50910 = state_50861__$1;(statearr_50863_50910[(2)] = inst_50857);
(statearr_50863_50910[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (20)))
{var state_50861__$1 = state_50861;var statearr_50864_50911 = state_50861__$1;(statearr_50864_50911[(2)] = null);
(statearr_50864_50911[(1)] = (21));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (1)))
{var state_50861__$1 = state_50861;var statearr_50865_50912 = state_50861__$1;(statearr_50865_50912[(2)] = null);
(statearr_50865_50912[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (24)))
{var inst_50790 = (state_50861[(7)]);var inst_50840 = (state_50861[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50861,(23),Object,null,(22));var inst_50847 = cljs.core.async.muxch_STAR_(inst_50840);var state_50861__$1 = state_50861;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50861__$1,(25),inst_50847,inst_50790);
} else
{if((state_val_50862 === (4)))
{var inst_50790 = (state_50861[(7)]);var inst_50790__$1 = (state_50861[(2)]);var inst_50791 = (inst_50790__$1 == null);var state_50861__$1 = (function (){var statearr_50866 = state_50861;(statearr_50866[(7)] = inst_50790__$1);
return statearr_50866;
})();if(cljs.core.truth_(inst_50791))
{var statearr_50867_50913 = state_50861__$1;(statearr_50867_50913[(1)] = (5));
} else
{var statearr_50868_50914 = state_50861__$1;(statearr_50868_50914[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (15)))
{var inst_50832 = (state_50861[(2)]);var state_50861__$1 = state_50861;var statearr_50869_50915 = state_50861__$1;(statearr_50869_50915[(2)] = inst_50832);
(statearr_50869_50915[(1)] = (12));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (21)))
{var inst_50854 = (state_50861[(2)]);var state_50861__$1 = (function (){var statearr_50870 = state_50861;(statearr_50870[(9)] = inst_50854);
return statearr_50870;
})();var statearr_50871_50916 = state_50861__$1;(statearr_50871_50916[(2)] = null);
(statearr_50871_50916[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (13)))
{var inst_50814 = (state_50861[(10)]);var inst_50816 = cljs.core.chunked_seq_QMARK_(inst_50814);var state_50861__$1 = state_50861;if(inst_50816)
{var statearr_50872_50917 = state_50861__$1;(statearr_50872_50917[(1)] = (16));
} else
{var statearr_50873_50918 = state_50861__$1;(statearr_50873_50918[(1)] = (17));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (22)))
{var inst_50851 = (state_50861[(2)]);var state_50861__$1 = state_50861;var statearr_50874_50919 = state_50861__$1;(statearr_50874_50919[(2)] = inst_50851);
(statearr_50874_50919[(1)] = (21));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (6)))
{var inst_50838 = (state_50861[(11)]);var inst_50790 = (state_50861[(7)]);var inst_50840 = (state_50861[(8)]);var inst_50838__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_50790) : topic_fn.call(null,inst_50790));var inst_50839 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_50840__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50839,inst_50838__$1);var state_50861__$1 = (function (){var statearr_50875 = state_50861;(statearr_50875[(11)] = inst_50838__$1);
(statearr_50875[(8)] = inst_50840__$1);
return statearr_50875;
})();if(cljs.core.truth_(inst_50840__$1))
{var statearr_50876_50920 = state_50861__$1;(statearr_50876_50920[(1)] = (19));
} else
{var statearr_50877_50921 = state_50861__$1;(statearr_50877_50921[(1)] = (20));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (25)))
{var inst_50849 = (state_50861[(2)]);var state_50861__$1 = state_50861;var statearr_50878_50922 = state_50861__$1;(statearr_50878_50922[(2)] = inst_50849);
cljs.core.async.impl.ioc_helpers.process_exception(state_50861__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (17)))
{var inst_50814 = (state_50861[(10)]);var inst_50823 = cljs.core.first(inst_50814);var inst_50824 = cljs.core.async.muxch_STAR_(inst_50823);var inst_50825 = cljs.core.async.close_BANG_(inst_50824);var inst_50826 = cljs.core.next(inst_50814);var inst_50800 = inst_50826;var inst_50801 = null;var inst_50802 = (0);var inst_50803 = (0);var state_50861__$1 = (function (){var statearr_50879 = state_50861;(statearr_50879[(12)] = inst_50800);
(statearr_50879[(13)] = inst_50802);
(statearr_50879[(14)] = inst_50801);
(statearr_50879[(15)] = inst_50825);
(statearr_50879[(16)] = inst_50803);
return statearr_50879;
})();var statearr_50880_50923 = state_50861__$1;(statearr_50880_50923[(2)] = null);
(statearr_50880_50923[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (3)))
{var inst_50859 = (state_50861[(2)]);var state_50861__$1 = state_50861;return cljs.core.async.impl.ioc_helpers.return_chan(state_50861__$1,inst_50859);
} else
{if((state_val_50862 === (12)))
{var inst_50834 = (state_50861[(2)]);var state_50861__$1 = state_50861;var statearr_50881_50924 = state_50861__$1;(statearr_50881_50924[(2)] = inst_50834);
(statearr_50881_50924[(1)] = (9));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (2)))
{var state_50861__$1 = state_50861;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50861__$1,(4),ch);
} else
{if((state_val_50862 === (23)))
{var inst_50838 = (state_50861[(11)]);var inst_50842 = (state_50861[(2)]);var inst_50843 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50838);var state_50861__$1 = (function (){var statearr_50882 = state_50861;(statearr_50882[(17)] = inst_50842);
return statearr_50882;
})();var statearr_50883_50925 = state_50861__$1;(statearr_50883_50925[(2)] = inst_50843);
cljs.core.async.impl.ioc_helpers.process_exception(state_50861__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (19)))
{var state_50861__$1 = state_50861;var statearr_50884_50926 = state_50861__$1;(statearr_50884_50926[(2)] = null);
(statearr_50884_50926[(1)] = (24));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (11)))
{var inst_50800 = (state_50861[(12)]);var inst_50814 = (state_50861[(10)]);var inst_50814__$1 = cljs.core.seq(inst_50800);var state_50861__$1 = (function (){var statearr_50885 = state_50861;(statearr_50885[(10)] = inst_50814__$1);
return statearr_50885;
})();if(inst_50814__$1)
{var statearr_50886_50927 = state_50861__$1;(statearr_50886_50927[(1)] = (13));
} else
{var statearr_50887_50928 = state_50861__$1;(statearr_50887_50928[(1)] = (14));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (9)))
{var inst_50836 = (state_50861[(2)]);var state_50861__$1 = state_50861;var statearr_50888_50929 = state_50861__$1;(statearr_50888_50929[(2)] = inst_50836);
(statearr_50888_50929[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (5)))
{var inst_50797 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_50798 = cljs.core.vals(inst_50797);var inst_50799 = cljs.core.seq(inst_50798);var inst_50800 = inst_50799;var inst_50801 = null;var inst_50802 = (0);var inst_50803 = (0);var state_50861__$1 = (function (){var statearr_50889 = state_50861;(statearr_50889[(12)] = inst_50800);
(statearr_50889[(13)] = inst_50802);
(statearr_50889[(14)] = inst_50801);
(statearr_50889[(16)] = inst_50803);
return statearr_50889;
})();var statearr_50890_50930 = state_50861__$1;(statearr_50890_50930[(2)] = null);
(statearr_50890_50930[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (14)))
{var state_50861__$1 = state_50861;var statearr_50894_50931 = state_50861__$1;(statearr_50894_50931[(2)] = null);
(statearr_50894_50931[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (16)))
{var inst_50814 = (state_50861[(10)]);var inst_50818 = cljs.core.chunk_first(inst_50814);var inst_50819 = cljs.core.chunk_rest(inst_50814);var inst_50820 = cljs.core.count(inst_50818);var inst_50800 = inst_50819;var inst_50801 = inst_50818;var inst_50802 = inst_50820;var inst_50803 = (0);var state_50861__$1 = (function (){var statearr_50895 = state_50861;(statearr_50895[(12)] = inst_50800);
(statearr_50895[(13)] = inst_50802);
(statearr_50895[(14)] = inst_50801);
(statearr_50895[(16)] = inst_50803);
return statearr_50895;
})();var statearr_50896_50932 = state_50861__$1;(statearr_50896_50932[(2)] = null);
(statearr_50896_50932[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (10)))
{var inst_50800 = (state_50861[(12)]);var inst_50802 = (state_50861[(13)]);var inst_50801 = (state_50861[(14)]);var inst_50803 = (state_50861[(16)]);var inst_50808 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50801,inst_50803);var inst_50809 = cljs.core.async.muxch_STAR_(inst_50808);var inst_50810 = cljs.core.async.close_BANG_(inst_50809);var inst_50811 = (inst_50803 + (1));var tmp50891 = inst_50800;var tmp50892 = inst_50802;var tmp50893 = inst_50801;var inst_50800__$1 = tmp50891;var inst_50801__$1 = tmp50893;var inst_50802__$1 = tmp50892;var inst_50803__$1 = inst_50811;var state_50861__$1 = (function (){var statearr_50897 = state_50861;(statearr_50897[(12)] = inst_50800__$1);
(statearr_50897[(13)] = inst_50802__$1);
(statearr_50897[(14)] = inst_50801__$1);
(statearr_50897[(18)] = inst_50810);
(statearr_50897[(16)] = inst_50803__$1);
return statearr_50897;
})();var statearr_50898_50933 = state_50861__$1;(statearr_50898_50933[(2)] = null);
(statearr_50898_50933[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (18)))
{var inst_50829 = (state_50861[(2)]);var state_50861__$1 = state_50861;var statearr_50899_50934 = state_50861__$1;(statearr_50899_50934[(2)] = inst_50829);
(statearr_50899_50934[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_50862 === (8)))
{var inst_50802 = (state_50861[(13)]);var inst_50803 = (state_50861[(16)]);var inst_50805 = (inst_50803 < inst_50802);var inst_50806 = inst_50805;var state_50861__$1 = state_50861;if(cljs.core.truth_(inst_50806))
{var statearr_50900_50935 = state_50861__$1;(statearr_50900_50935[(1)] = (10));
} else
{var statearr_50901_50936 = state_50861__$1;(statearr_50901_50936[(1)] = (11));
}
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___50909,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___50909,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50905[(0)] = state_machine__5694__auto__);
(statearr_50905[(1)] = (1));
return statearr_50905;
});
var state_machine__5694__auto____1 = (function (state_50861){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50861);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50906){if((e50906 instanceof Object))
{var ex__5697__auto__ = e50906;var statearr_50907_50937 = state_50861;(statearr_50907_50937[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50861);
return cljs.core.constant$keyword$1094;
} else
{throw e50906;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__50938 = state_50861;
state_50861 = G__50938;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50861){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50909,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_50908 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50909);
return statearr_50908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50909,mults,ensure_mult,p))
);
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5708__auto___51075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51075,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51075,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_51045){var state_val_51046 = (state_51045[(1)]);if((state_val_51046 === (7)))
{var state_51045__$1 = state_51045;var statearr_51047_51076 = state_51045__$1;(statearr_51047_51076[(2)] = null);
(statearr_51047_51076[(1)] = (8));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (1)))
{var state_51045__$1 = state_51045;var statearr_51048_51077 = state_51045__$1;(statearr_51048_51077[(2)] = null);
(statearr_51048_51077[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (4)))
{var inst_51009 = (state_51045[(7)]);var inst_51011 = (inst_51009 < cnt);var state_51045__$1 = state_51045;if(cljs.core.truth_(inst_51011))
{var statearr_51049_51078 = state_51045__$1;(statearr_51049_51078[(1)] = (6));
} else
{var statearr_51050_51079 = state_51045__$1;(statearr_51050_51079[(1)] = (7));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (15)))
{var inst_51041 = (state_51045[(2)]);var state_51045__$1 = state_51045;var statearr_51051_51080 = state_51045__$1;(statearr_51051_51080[(2)] = inst_51041);
(statearr_51051_51080[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (13)))
{var inst_51034 = cljs.core.async.close_BANG_(out);var state_51045__$1 = state_51045;var statearr_51052_51081 = state_51045__$1;(statearr_51052_51081[(2)] = inst_51034);
(statearr_51052_51081[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (6)))
{var state_51045__$1 = state_51045;var statearr_51053_51082 = state_51045__$1;(statearr_51053_51082[(2)] = null);
(statearr_51053_51082[(1)] = (11));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (3)))
{var inst_51043 = (state_51045[(2)]);var state_51045__$1 = state_51045;return cljs.core.async.impl.ioc_helpers.return_chan(state_51045__$1,inst_51043);
} else
{if((state_val_51046 === (12)))
{var inst_51031 = (state_51045[(8)]);var inst_51031__$1 = (state_51045[(2)]);var inst_51032 = cljs.core.some(cljs.core.nil_QMARK_,inst_51031__$1);var state_51045__$1 = (function (){var statearr_51054 = state_51045;(statearr_51054[(8)] = inst_51031__$1);
return statearr_51054;
})();if(cljs.core.truth_(inst_51032))
{var statearr_51055_51083 = state_51045__$1;(statearr_51055_51083[(1)] = (13));
} else
{var statearr_51056_51084 = state_51045__$1;(statearr_51056_51084[(1)] = (14));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (2)))
{var inst_51008 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));var inst_51009 = (0);var state_51045__$1 = (function (){var statearr_51057 = state_51045;(statearr_51057[(9)] = inst_51008);
(statearr_51057[(7)] = inst_51009);
return statearr_51057;
})();var statearr_51058_51085 = state_51045__$1;(statearr_51058_51085[(2)] = null);
(statearr_51058_51085[(1)] = (4));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (11)))
{var inst_51009 = (state_51045[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51045,(10),Object,null,(9));var inst_51018 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51009) : chs__$1.call(null,inst_51009));var inst_51019 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51009) : done.call(null,inst_51009));var inst_51020 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51018,inst_51019);var state_51045__$1 = state_51045;var statearr_51059_51086 = state_51045__$1;(statearr_51059_51086[(2)] = inst_51020);
cljs.core.async.impl.ioc_helpers.process_exception(state_51045__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (9)))
{var inst_51009 = (state_51045[(7)]);var inst_51022 = (state_51045[(2)]);var inst_51023 = (inst_51009 + (1));var inst_51009__$1 = inst_51023;var state_51045__$1 = (function (){var statearr_51060 = state_51045;(statearr_51060[(10)] = inst_51022);
(statearr_51060[(7)] = inst_51009__$1);
return statearr_51060;
})();var statearr_51061_51087 = state_51045__$1;(statearr_51061_51087[(2)] = null);
(statearr_51061_51087[(1)] = (4));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (5)))
{var inst_51029 = (state_51045[(2)]);var state_51045__$1 = (function (){var statearr_51062 = state_51045;(statearr_51062[(11)] = inst_51029);
return statearr_51062;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51045__$1,(12),dchan);
} else
{if((state_val_51046 === (14)))
{var inst_51031 = (state_51045[(8)]);var inst_51036 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51031);var state_51045__$1 = state_51045;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51045__$1,(16),out,inst_51036);
} else
{if((state_val_51046 === (16)))
{var inst_51038 = (state_51045[(2)]);var state_51045__$1 = (function (){var statearr_51063 = state_51045;(statearr_51063[(12)] = inst_51038);
return statearr_51063;
})();var statearr_51064_51088 = state_51045__$1;(statearr_51064_51088[(2)] = null);
(statearr_51064_51088[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (10)))
{var inst_51013 = (state_51045[(2)]);var inst_51014 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_51045__$1 = (function (){var statearr_51065 = state_51045;(statearr_51065[(13)] = inst_51013);
return statearr_51065;
})();var statearr_51066_51089 = state_51045__$1;(statearr_51066_51089[(2)] = inst_51014);
cljs.core.async.impl.ioc_helpers.process_exception(state_51045__$1);
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51046 === (8)))
{var inst_51027 = (state_51045[(2)]);var state_51045__$1 = state_51045;var statearr_51067_51090 = state_51045__$1;(statearr_51067_51090[(2)] = inst_51027);
(statearr_51067_51090[(1)] = (5));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___51075,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___51075,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51071[(0)] = state_machine__5694__auto__);
(statearr_51071[(1)] = (1));
return statearr_51071;
});
var state_machine__5694__auto____1 = (function (state_51045){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51045);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51072){if((e51072 instanceof Object))
{var ex__5697__auto__ = e51072;var statearr_51073_51091 = state_51045;(statearr_51073_51091[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51045);
return cljs.core.constant$keyword$1094;
} else
{throw e51072;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51092 = state_51045;
state_51045 = G__51092;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51045){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51075,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_51074 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51075);
return statearr_51074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51075,chs__$1,out,cnt,rets,dchan,dctr,done))
);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51200,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51200,out){
return (function (state_51176){var state_val_51177 = (state_51176[(1)]);if((state_val_51177 === (7)))
{var inst_51155 = (state_51176[(7)]);var inst_51156 = (state_51176[(8)]);var inst_51155__$1 = (state_51176[(2)]);var inst_51156__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51155__$1,(0),null);var inst_51157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51155__$1,(1),null);var inst_51158 = (inst_51156__$1 == null);var state_51176__$1 = (function (){var statearr_51178 = state_51176;(statearr_51178[(9)] = inst_51157);
(statearr_51178[(7)] = inst_51155__$1);
(statearr_51178[(8)] = inst_51156__$1);
return statearr_51178;
})();if(cljs.core.truth_(inst_51158))
{var statearr_51179_51201 = state_51176__$1;(statearr_51179_51201[(1)] = (8));
} else
{var statearr_51180_51202 = state_51176__$1;(statearr_51180_51202[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51177 === (1)))
{var inst_51147 = cljs.core.vec(chs);var inst_51148 = inst_51147;var state_51176__$1 = (function (){var statearr_51181 = state_51176;(statearr_51181[(10)] = inst_51148);
return statearr_51181;
})();var statearr_51182_51203 = state_51176__$1;(statearr_51182_51203[(2)] = null);
(statearr_51182_51203[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51177 === (4)))
{var inst_51148 = (state_51176[(10)]);var state_51176__$1 = state_51176;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_51176__$1,(7),inst_51148);
} else
{if((state_val_51177 === (6)))
{var inst_51172 = (state_51176[(2)]);var state_51176__$1 = state_51176;var statearr_51183_51204 = state_51176__$1;(statearr_51183_51204[(2)] = inst_51172);
(statearr_51183_51204[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51177 === (3)))
{var inst_51174 = (state_51176[(2)]);var state_51176__$1 = state_51176;return cljs.core.async.impl.ioc_helpers.return_chan(state_51176__$1,inst_51174);
} else
{if((state_val_51177 === (2)))
{var inst_51148 = (state_51176[(10)]);var inst_51150 = cljs.core.count(inst_51148);var inst_51151 = (inst_51150 > (0));var state_51176__$1 = state_51176;if(cljs.core.truth_(inst_51151))
{var statearr_51185_51205 = state_51176__$1;(statearr_51185_51205[(1)] = (4));
} else
{var statearr_51186_51206 = state_51176__$1;(statearr_51186_51206[(1)] = (5));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51177 === (11)))
{var inst_51148 = (state_51176[(10)]);var inst_51165 = (state_51176[(2)]);var tmp51184 = inst_51148;var inst_51148__$1 = tmp51184;var state_51176__$1 = (function (){var statearr_51187 = state_51176;(statearr_51187[(10)] = inst_51148__$1);
(statearr_51187[(11)] = inst_51165);
return statearr_51187;
})();var statearr_51188_51207 = state_51176__$1;(statearr_51188_51207[(2)] = null);
(statearr_51188_51207[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51177 === (9)))
{var inst_51156 = (state_51176[(8)]);var state_51176__$1 = state_51176;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51176__$1,(11),out,inst_51156);
} else
{if((state_val_51177 === (5)))
{var inst_51170 = cljs.core.async.close_BANG_(out);var state_51176__$1 = state_51176;var statearr_51189_51208 = state_51176__$1;(statearr_51189_51208[(2)] = inst_51170);
(statearr_51189_51208[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51177 === (10)))
{var inst_51168 = (state_51176[(2)]);var state_51176__$1 = state_51176;var statearr_51190_51209 = state_51176__$1;(statearr_51190_51209[(2)] = inst_51168);
(statearr_51190_51209[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51177 === (8)))
{var inst_51148 = (state_51176[(10)]);var inst_51157 = (state_51176[(9)]);var inst_51155 = (state_51176[(7)]);var inst_51156 = (state_51176[(8)]);var inst_51160 = (function (){var c = inst_51157;var v = inst_51156;var vec__51153 = inst_51155;var cs = inst_51148;return ((function (c,v,vec__51153,cs,inst_51148,inst_51157,inst_51155,inst_51156,state_val_51177,c__5708__auto___51200,out){
return (function (p1__51093_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51093_SHARP_);
});
;})(c,v,vec__51153,cs,inst_51148,inst_51157,inst_51155,inst_51156,state_val_51177,c__5708__auto___51200,out))
})();var inst_51161 = cljs.core.filterv(inst_51160,inst_51148);var inst_51148__$1 = inst_51161;var state_51176__$1 = (function (){var statearr_51191 = state_51176;(statearr_51191[(10)] = inst_51148__$1);
return statearr_51191;
})();var statearr_51192_51210 = state_51176__$1;(statearr_51192_51210[(2)] = null);
(statearr_51192_51210[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___51200,out))
;return ((function (switch__5693__auto__,c__5708__auto___51200,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51196 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51196[(0)] = state_machine__5694__auto__);
(statearr_51196[(1)] = (1));
return statearr_51196;
});
var state_machine__5694__auto____1 = (function (state_51176){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51176);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51197){if((e51197 instanceof Object))
{var ex__5697__auto__ = e51197;var statearr_51198_51211 = state_51176;(statearr_51198_51211[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51176);
return cljs.core.constant$keyword$1094;
} else
{throw e51197;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51212 = state_51176;
state_51176 = G__51212;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51176){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51200,out))
})();var state__5710__auto__ = (function (){var statearr_51199 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51200);
return statearr_51199;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51200,out))
);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51305,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51305,out){
return (function (state_51282){var state_val_51283 = (state_51282[(1)]);if((state_val_51283 === (7)))
{var inst_51264 = (state_51282[(7)]);var inst_51264__$1 = (state_51282[(2)]);var inst_51265 = (inst_51264__$1 == null);var inst_51266 = cljs.core.not(inst_51265);var state_51282__$1 = (function (){var statearr_51284 = state_51282;(statearr_51284[(7)] = inst_51264__$1);
return statearr_51284;
})();if(inst_51266)
{var statearr_51285_51306 = state_51282__$1;(statearr_51285_51306[(1)] = (8));
} else
{var statearr_51286_51307 = state_51282__$1;(statearr_51286_51307[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51283 === (1)))
{var inst_51259 = (0);var state_51282__$1 = (function (){var statearr_51287 = state_51282;(statearr_51287[(8)] = inst_51259);
return statearr_51287;
})();var statearr_51288_51308 = state_51282__$1;(statearr_51288_51308[(2)] = null);
(statearr_51288_51308[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51283 === (4)))
{var state_51282__$1 = state_51282;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51282__$1,(7),ch);
} else
{if((state_val_51283 === (6)))
{var inst_51277 = (state_51282[(2)]);var state_51282__$1 = state_51282;var statearr_51289_51309 = state_51282__$1;(statearr_51289_51309[(2)] = inst_51277);
(statearr_51289_51309[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51283 === (3)))
{var inst_51279 = (state_51282[(2)]);var inst_51280 = cljs.core.async.close_BANG_(out);var state_51282__$1 = (function (){var statearr_51290 = state_51282;(statearr_51290[(9)] = inst_51279);
return statearr_51290;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51282__$1,inst_51280);
} else
{if((state_val_51283 === (2)))
{var inst_51259 = (state_51282[(8)]);var inst_51261 = (inst_51259 < n);var state_51282__$1 = state_51282;if(cljs.core.truth_(inst_51261))
{var statearr_51291_51310 = state_51282__$1;(statearr_51291_51310[(1)] = (4));
} else
{var statearr_51292_51311 = state_51282__$1;(statearr_51292_51311[(1)] = (5));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51283 === (11)))
{var inst_51259 = (state_51282[(8)]);var inst_51269 = (state_51282[(2)]);var inst_51270 = (inst_51259 + (1));var inst_51259__$1 = inst_51270;var state_51282__$1 = (function (){var statearr_51293 = state_51282;(statearr_51293[(8)] = inst_51259__$1);
(statearr_51293[(10)] = inst_51269);
return statearr_51293;
})();var statearr_51294_51312 = state_51282__$1;(statearr_51294_51312[(2)] = null);
(statearr_51294_51312[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51283 === (9)))
{var state_51282__$1 = state_51282;var statearr_51295_51313 = state_51282__$1;(statearr_51295_51313[(2)] = null);
(statearr_51295_51313[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51283 === (5)))
{var state_51282__$1 = state_51282;var statearr_51296_51314 = state_51282__$1;(statearr_51296_51314[(2)] = null);
(statearr_51296_51314[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51283 === (10)))
{var inst_51274 = (state_51282[(2)]);var state_51282__$1 = state_51282;var statearr_51297_51315 = state_51282__$1;(statearr_51297_51315[(2)] = inst_51274);
(statearr_51297_51315[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51283 === (8)))
{var inst_51264 = (state_51282[(7)]);var state_51282__$1 = state_51282;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51282__$1,(11),out,inst_51264);
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
});})(c__5708__auto___51305,out))
;return ((function (switch__5693__auto__,c__5708__auto___51305,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51301 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_51301[(0)] = state_machine__5694__auto__);
(statearr_51301[(1)] = (1));
return statearr_51301;
});
var state_machine__5694__auto____1 = (function (state_51282){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51282);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51302){if((e51302 instanceof Object))
{var ex__5697__auto__ = e51302;var statearr_51303_51316 = state_51282;(statearr_51303_51316[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51282);
return cljs.core.constant$keyword$1094;
} else
{throw e51302;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51317 = state_51282;
state_51282 = G__51317;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51282){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51305,out))
})();var state__5710__auto__ = (function (){var statearr_51304 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51305);
return statearr_51304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51305,out))
);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51414,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51414,out){
return (function (state_51389){var state_val_51390 = (state_51389[(1)]);if((state_val_51390 === (7)))
{var inst_51384 = (state_51389[(2)]);var state_51389__$1 = state_51389;var statearr_51391_51415 = state_51389__$1;(statearr_51391_51415[(2)] = inst_51384);
(statearr_51391_51415[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51390 === (1)))
{var inst_51366 = null;var state_51389__$1 = (function (){var statearr_51392 = state_51389;(statearr_51392[(7)] = inst_51366);
return statearr_51392;
})();var statearr_51393_51416 = state_51389__$1;(statearr_51393_51416[(2)] = null);
(statearr_51393_51416[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51390 === (4)))
{var inst_51369 = (state_51389[(8)]);var inst_51369__$1 = (state_51389[(2)]);var inst_51370 = (inst_51369__$1 == null);var inst_51371 = cljs.core.not(inst_51370);var state_51389__$1 = (function (){var statearr_51394 = state_51389;(statearr_51394[(8)] = inst_51369__$1);
return statearr_51394;
})();if(inst_51371)
{var statearr_51395_51417 = state_51389__$1;(statearr_51395_51417[(1)] = (5));
} else
{var statearr_51396_51418 = state_51389__$1;(statearr_51396_51418[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51390 === (6)))
{var state_51389__$1 = state_51389;var statearr_51397_51419 = state_51389__$1;(statearr_51397_51419[(2)] = null);
(statearr_51397_51419[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51390 === (3)))
{var inst_51386 = (state_51389[(2)]);var inst_51387 = cljs.core.async.close_BANG_(out);var state_51389__$1 = (function (){var statearr_51398 = state_51389;(statearr_51398[(9)] = inst_51386);
return statearr_51398;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51389__$1,inst_51387);
} else
{if((state_val_51390 === (2)))
{var state_51389__$1 = state_51389;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51389__$1,(4),ch);
} else
{if((state_val_51390 === (11)))
{var inst_51369 = (state_51389[(8)]);var inst_51378 = (state_51389[(2)]);var inst_51366 = inst_51369;var state_51389__$1 = (function (){var statearr_51399 = state_51389;(statearr_51399[(10)] = inst_51378);
(statearr_51399[(7)] = inst_51366);
return statearr_51399;
})();var statearr_51400_51420 = state_51389__$1;(statearr_51400_51420[(2)] = null);
(statearr_51400_51420[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51390 === (9)))
{var inst_51369 = (state_51389[(8)]);var state_51389__$1 = state_51389;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51389__$1,(11),out,inst_51369);
} else
{if((state_val_51390 === (5)))
{var inst_51369 = (state_51389[(8)]);var inst_51366 = (state_51389[(7)]);var inst_51373 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51369,inst_51366);var state_51389__$1 = state_51389;if(inst_51373)
{var statearr_51402_51421 = state_51389__$1;(statearr_51402_51421[(1)] = (8));
} else
{var statearr_51403_51422 = state_51389__$1;(statearr_51403_51422[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51390 === (10)))
{var inst_51381 = (state_51389[(2)]);var state_51389__$1 = state_51389;var statearr_51404_51423 = state_51389__$1;(statearr_51404_51423[(2)] = inst_51381);
(statearr_51404_51423[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51390 === (8)))
{var inst_51366 = (state_51389[(7)]);var tmp51401 = inst_51366;var inst_51366__$1 = tmp51401;var state_51389__$1 = (function (){var statearr_51405 = state_51389;(statearr_51405[(7)] = inst_51366__$1);
return statearr_51405;
})();var statearr_51406_51424 = state_51389__$1;(statearr_51406_51424[(2)] = null);
(statearr_51406_51424[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___51414,out))
;return ((function (switch__5693__auto__,c__5708__auto___51414,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51410 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_51410[(0)] = state_machine__5694__auto__);
(statearr_51410[(1)] = (1));
return statearr_51410;
});
var state_machine__5694__auto____1 = (function (state_51389){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51389);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51411){if((e51411 instanceof Object))
{var ex__5697__auto__ = e51411;var statearr_51412_51425 = state_51389;(statearr_51412_51425[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51389);
return cljs.core.constant$keyword$1094;
} else
{throw e51411;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51426 = state_51389;
state_51389 = G__51426;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51389){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51414,out))
})();var state__5710__auto__ = (function (){var statearr_51413 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51414);
return statearr_51413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51414,out))
);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51561,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51561,out){
return (function (state_51531){var state_val_51532 = (state_51531[(1)]);if((state_val_51532 === (7)))
{var inst_51527 = (state_51531[(2)]);var state_51531__$1 = state_51531;var statearr_51533_51562 = state_51531__$1;(statearr_51533_51562[(2)] = inst_51527);
(statearr_51533_51562[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51532 === (1)))
{var inst_51494 = (new Array(n));var inst_51495 = inst_51494;var inst_51496 = (0);var state_51531__$1 = (function (){var statearr_51534 = state_51531;(statearr_51534[(7)] = inst_51496);
(statearr_51534[(8)] = inst_51495);
return statearr_51534;
})();var statearr_51535_51563 = state_51531__$1;(statearr_51535_51563[(2)] = null);
(statearr_51535_51563[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51532 === (4)))
{var inst_51499 = (state_51531[(9)]);var inst_51499__$1 = (state_51531[(2)]);var inst_51500 = (inst_51499__$1 == null);var inst_51501 = cljs.core.not(inst_51500);var state_51531__$1 = (function (){var statearr_51536 = state_51531;(statearr_51536[(9)] = inst_51499__$1);
return statearr_51536;
})();if(inst_51501)
{var statearr_51537_51564 = state_51531__$1;(statearr_51537_51564[(1)] = (5));
} else
{var statearr_51538_51565 = state_51531__$1;(statearr_51538_51565[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51532 === (15)))
{var inst_51521 = (state_51531[(2)]);var state_51531__$1 = state_51531;var statearr_51539_51566 = state_51531__$1;(statearr_51539_51566[(2)] = inst_51521);
(statearr_51539_51566[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51532 === (13)))
{var state_51531__$1 = state_51531;var statearr_51540_51567 = state_51531__$1;(statearr_51540_51567[(2)] = null);
(statearr_51540_51567[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51532 === (6)))
{var inst_51496 = (state_51531[(7)]);var inst_51517 = (inst_51496 > (0));var state_51531__$1 = state_51531;if(cljs.core.truth_(inst_51517))
{var statearr_51541_51568 = state_51531__$1;(statearr_51541_51568[(1)] = (12));
} else
{var statearr_51542_51569 = state_51531__$1;(statearr_51542_51569[(1)] = (13));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51532 === (3)))
{var inst_51529 = (state_51531[(2)]);var state_51531__$1 = state_51531;return cljs.core.async.impl.ioc_helpers.return_chan(state_51531__$1,inst_51529);
} else
{if((state_val_51532 === (12)))
{var inst_51495 = (state_51531[(8)]);var inst_51519 = cljs.core.vec(inst_51495);var state_51531__$1 = state_51531;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51531__$1,(15),out,inst_51519);
} else
{if((state_val_51532 === (2)))
{var state_51531__$1 = state_51531;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51531__$1,(4),ch);
} else
{if((state_val_51532 === (11)))
{var inst_51511 = (state_51531[(2)]);var inst_51512 = (new Array(n));var inst_51495 = inst_51512;var inst_51496 = (0);var state_51531__$1 = (function (){var statearr_51543 = state_51531;(statearr_51543[(7)] = inst_51496);
(statearr_51543[(10)] = inst_51511);
(statearr_51543[(8)] = inst_51495);
return statearr_51543;
})();var statearr_51544_51570 = state_51531__$1;(statearr_51544_51570[(2)] = null);
(statearr_51544_51570[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51532 === (9)))
{var inst_51495 = (state_51531[(8)]);var inst_51509 = cljs.core.vec(inst_51495);var state_51531__$1 = state_51531;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51531__$1,(11),out,inst_51509);
} else
{if((state_val_51532 === (5)))
{var inst_51496 = (state_51531[(7)]);var inst_51499 = (state_51531[(9)]);var inst_51495 = (state_51531[(8)]);var inst_51504 = (state_51531[(11)]);var inst_51503 = (inst_51495[inst_51496] = inst_51499);var inst_51504__$1 = (inst_51496 + (1));var inst_51505 = (inst_51504__$1 < n);var state_51531__$1 = (function (){var statearr_51545 = state_51531;(statearr_51545[(12)] = inst_51503);
(statearr_51545[(11)] = inst_51504__$1);
return statearr_51545;
})();if(cljs.core.truth_(inst_51505))
{var statearr_51546_51571 = state_51531__$1;(statearr_51546_51571[(1)] = (8));
} else
{var statearr_51547_51572 = state_51531__$1;(statearr_51547_51572[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51532 === (14)))
{var inst_51524 = (state_51531[(2)]);var inst_51525 = cljs.core.async.close_BANG_(out);var state_51531__$1 = (function (){var statearr_51549 = state_51531;(statearr_51549[(13)] = inst_51524);
return statearr_51549;
})();var statearr_51550_51573 = state_51531__$1;(statearr_51550_51573[(2)] = inst_51525);
(statearr_51550_51573[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51532 === (10)))
{var inst_51515 = (state_51531[(2)]);var state_51531__$1 = state_51531;var statearr_51551_51574 = state_51531__$1;(statearr_51551_51574[(2)] = inst_51515);
(statearr_51551_51574[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51532 === (8)))
{var inst_51495 = (state_51531[(8)]);var inst_51504 = (state_51531[(11)]);var tmp51548 = inst_51495;var inst_51495__$1 = tmp51548;var inst_51496 = inst_51504;var state_51531__$1 = (function (){var statearr_51552 = state_51531;(statearr_51552[(7)] = inst_51496);
(statearr_51552[(8)] = inst_51495__$1);
return statearr_51552;
})();var statearr_51553_51575 = state_51531__$1;(statearr_51553_51575[(2)] = null);
(statearr_51553_51575[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___51561,out))
;return ((function (switch__5693__auto__,c__5708__auto___51561,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51557[(0)] = state_machine__5694__auto__);
(statearr_51557[(1)] = (1));
return statearr_51557;
});
var state_machine__5694__auto____1 = (function (state_51531){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51531);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51558){if((e51558 instanceof Object))
{var ex__5697__auto__ = e51558;var statearr_51559_51576 = state_51531;(statearr_51559_51576[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51531);
return cljs.core.constant$keyword$1094;
} else
{throw e51558;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51577 = state_51531;
state_51531 = G__51577;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51531){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51561,out))
})();var state__5710__auto__ = (function (){var statearr_51560 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51561);
return statearr_51560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51561,out))
);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51720,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51720,out){
return (function (state_51690){var state_val_51691 = (state_51690[(1)]);if((state_val_51691 === (7)))
{var inst_51686 = (state_51690[(2)]);var state_51690__$1 = state_51690;var statearr_51692_51721 = state_51690__$1;(statearr_51692_51721[(2)] = inst_51686);
(statearr_51692_51721[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51691 === (1)))
{var inst_51649 = [];var inst_51650 = inst_51649;var inst_51651 = cljs.core.constant$keyword$1107;var state_51690__$1 = (function (){var statearr_51693 = state_51690;(statearr_51693[(7)] = inst_51651);
(statearr_51693[(8)] = inst_51650);
return statearr_51693;
})();var statearr_51694_51722 = state_51690__$1;(statearr_51694_51722[(2)] = null);
(statearr_51694_51722[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51691 === (4)))
{var inst_51654 = (state_51690[(9)]);var inst_51654__$1 = (state_51690[(2)]);var inst_51655 = (inst_51654__$1 == null);var inst_51656 = cljs.core.not(inst_51655);var state_51690__$1 = (function (){var statearr_51695 = state_51690;(statearr_51695[(9)] = inst_51654__$1);
return statearr_51695;
})();if(inst_51656)
{var statearr_51696_51723 = state_51690__$1;(statearr_51696_51723[(1)] = (5));
} else
{var statearr_51697_51724 = state_51690__$1;(statearr_51697_51724[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51691 === (15)))
{var inst_51680 = (state_51690[(2)]);var state_51690__$1 = state_51690;var statearr_51698_51725 = state_51690__$1;(statearr_51698_51725[(2)] = inst_51680);
(statearr_51698_51725[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51691 === (13)))
{var state_51690__$1 = state_51690;var statearr_51699_51726 = state_51690__$1;(statearr_51699_51726[(2)] = null);
(statearr_51699_51726[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51691 === (6)))
{var inst_51650 = (state_51690[(8)]);var inst_51675 = inst_51650.length;var inst_51676 = (inst_51675 > (0));var state_51690__$1 = state_51690;if(cljs.core.truth_(inst_51676))
{var statearr_51700_51727 = state_51690__$1;(statearr_51700_51727[(1)] = (12));
} else
{var statearr_51701_51728 = state_51690__$1;(statearr_51701_51728[(1)] = (13));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51691 === (3)))
{var inst_51688 = (state_51690[(2)]);var state_51690__$1 = state_51690;return cljs.core.async.impl.ioc_helpers.return_chan(state_51690__$1,inst_51688);
} else
{if((state_val_51691 === (12)))
{var inst_51650 = (state_51690[(8)]);var inst_51678 = cljs.core.vec(inst_51650);var state_51690__$1 = state_51690;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51690__$1,(15),out,inst_51678);
} else
{if((state_val_51691 === (2)))
{var state_51690__$1 = state_51690;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51690__$1,(4),ch);
} else
{if((state_val_51691 === (11)))
{var inst_51658 = (state_51690[(10)]);var inst_51654 = (state_51690[(9)]);var inst_51668 = (state_51690[(2)]);var inst_51669 = [];var inst_51670 = inst_51669.push(inst_51654);var inst_51650 = inst_51669;var inst_51651 = inst_51658;var state_51690__$1 = (function (){var statearr_51702 = state_51690;(statearr_51702[(7)] = inst_51651);
(statearr_51702[(11)] = inst_51670);
(statearr_51702[(8)] = inst_51650);
(statearr_51702[(12)] = inst_51668);
return statearr_51702;
})();var statearr_51703_51729 = state_51690__$1;(statearr_51703_51729[(2)] = null);
(statearr_51703_51729[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51691 === (9)))
{var inst_51650 = (state_51690[(8)]);var inst_51666 = cljs.core.vec(inst_51650);var state_51690__$1 = state_51690;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51690__$1,(11),out,inst_51666);
} else
{if((state_val_51691 === (5)))
{var inst_51651 = (state_51690[(7)]);var inst_51658 = (state_51690[(10)]);var inst_51654 = (state_51690[(9)]);var inst_51658__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51654) : f.call(null,inst_51654));var inst_51659 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51658__$1,inst_51651);var inst_51660 = cljs.core.keyword_identical_QMARK_(inst_51651,cljs.core.constant$keyword$1107);var inst_51661 = (inst_51659) || (inst_51660);var state_51690__$1 = (function (){var statearr_51704 = state_51690;(statearr_51704[(10)] = inst_51658__$1);
return statearr_51704;
})();if(cljs.core.truth_(inst_51661))
{var statearr_51705_51730 = state_51690__$1;(statearr_51705_51730[(1)] = (8));
} else
{var statearr_51706_51731 = state_51690__$1;(statearr_51706_51731[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51691 === (14)))
{var inst_51683 = (state_51690[(2)]);var inst_51684 = cljs.core.async.close_BANG_(out);var state_51690__$1 = (function (){var statearr_51708 = state_51690;(statearr_51708[(13)] = inst_51683);
return statearr_51708;
})();var statearr_51709_51732 = state_51690__$1;(statearr_51709_51732[(2)] = inst_51684);
(statearr_51709_51732[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51691 === (10)))
{var inst_51673 = (state_51690[(2)]);var state_51690__$1 = state_51690;var statearr_51710_51733 = state_51690__$1;(statearr_51710_51733[(2)] = inst_51673);
(statearr_51710_51733[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_51691 === (8)))
{var inst_51658 = (state_51690[(10)]);var inst_51654 = (state_51690[(9)]);var inst_51650 = (state_51690[(8)]);var inst_51663 = inst_51650.push(inst_51654);var tmp51707 = inst_51650;var inst_51650__$1 = tmp51707;var inst_51651 = inst_51658;var state_51690__$1 = (function (){var statearr_51711 = state_51690;(statearr_51711[(7)] = inst_51651);
(statearr_51711[(14)] = inst_51663);
(statearr_51711[(8)] = inst_51650__$1);
return statearr_51711;
})();var statearr_51712_51734 = state_51690__$1;(statearr_51712_51734[(2)] = null);
(statearr_51712_51734[(1)] = (2));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto___51720,out))
;return ((function (switch__5693__auto__,c__5708__auto___51720,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51716[(0)] = state_machine__5694__auto__);
(statearr_51716[(1)] = (1));
return statearr_51716;
});
var state_machine__5694__auto____1 = (function (state_51690){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51690);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51717){if((e51717 instanceof Object))
{var ex__5697__auto__ = e51717;var statearr_51718_51735 = state_51690;(statearr_51718_51735[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51690);
return cljs.core.constant$keyword$1094;
} else
{throw e51717;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__51736 = state_51690;
state_51690 = G__51736;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51690){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51720,out))
})();var state__5710__auto__ = (function (){var statearr_51719 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51720);
return statearr_51719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51720,out))
);
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
