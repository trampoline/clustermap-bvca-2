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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t40649 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40649 = (function (f,fn_handler,meta40650){
this.f = f;
this.fn_handler = fn_handler;
this.meta40650 = meta40650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40649.cljs$lang$type = true;
cljs.core.async.t40649.cljs$lang$ctorStr = "cljs.core.async/t40649";
cljs.core.async.t40649.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40649");
});
cljs.core.async.t40649.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40649.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t40649.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t40649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40651){var self__ = this;
var _40651__$1 = this;return self__.meta40650;
});
cljs.core.async.t40649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40651,meta40650__$1){var self__ = this;
var _40651__$1 = this;return (new cljs.core.async.t40649(self__.f,self__.fn_handler,meta40650__$1));
});
cljs.core.async.__GT_t40649 = (function __GT_t40649(f__$1,fn_handler__$1,meta40650){return (new cljs.core.async.t40649(f__$1,fn_handler__$1,meta40650));
});
}
return (new cljs.core.async.t40649(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__40653 = buff;if(G__40653)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__40653.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__40653.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40653);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40653);
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
{var val_40654 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40654) : fn1.call(null,val_40654));
} else
{cljs.core.async.impl.dispatch.run(((function (val_40654,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40654) : fn1.call(null,val_40654));
});})(val_40654,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___40655 = n;var x_40656 = (0);while(true){
if((x_40656 < n__4414__auto___40655))
{(a[x_40656] = (0));
{
var G__40657 = (x_40656 + (1));
x_40656 = G__40657;
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
var G__40658 = (i + (1));
i = G__40658;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));if(typeof cljs.core.async.t40662 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40662 = (function (flag,alt_flag,meta40663){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta40663 = meta40663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40662.cljs$lang$type = true;
cljs.core.async.t40662.cljs$lang$ctorStr = "cljs.core.async/t40662";
cljs.core.async.t40662.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40662");
});})(flag))
;
cljs.core.async.t40662.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;
cljs.core.async.t40662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));
return true;
});})(flag))
;
cljs.core.async.t40662.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40664){var self__ = this;
var _40664__$1 = this;return self__.meta40663;
});})(flag))
;
cljs.core.async.t40662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40664,meta40663__$1){var self__ = this;
var _40664__$1 = this;return (new cljs.core.async.t40662(self__.flag,self__.alt_flag,meta40663__$1));
});})(flag))
;
cljs.core.async.__GT_t40662 = ((function (flag){
return (function __GT_t40662(flag__$1,alt_flag__$1,meta40663){return (new cljs.core.async.t40662(flag__$1,alt_flag__$1,meta40663));
});})(flag))
;
}
return (new cljs.core.async.t40662(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t40668 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40668 = (function (cb,flag,alt_handler,meta40669){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta40669 = meta40669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40668.cljs$lang$type = true;
cljs.core.async.t40668.cljs$lang$ctorStr = "cljs.core.async/t40668";
cljs.core.async.t40668.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40668");
});
cljs.core.async.t40668.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t40668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t40668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40670){var self__ = this;
var _40670__$1 = this;return self__.meta40669;
});
cljs.core.async.t40668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40670,meta40669__$1){var self__ = this;
var _40670__$1 = this;return (new cljs.core.async.t40668(self__.cb,self__.flag,self__.alt_handler,meta40669__$1));
});
cljs.core.async.__GT_t40668 = (function __GT_t40668(cb__$1,flag__$1,alt_handler__$1,meta40669){return (new cljs.core.async.t40668(cb__$1,flag__$1,alt_handler__$1,meta40669));
});
}
return (new cljs.core.async.t40668(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$850.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40671_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40671_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40671_SHARP_,port], null)));
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
var G__40672 = (i + (1));
i = G__40672;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$835))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3546__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$835], null));
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
var alts_BANG___delegate = function (ports,p__40673){var map__40675 = p__40673;var map__40675__$1 = ((cljs.core.seq_QMARK_(map__40675))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40675):map__40675);var opts = map__40675__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__40673 = null;if (arguments.length > 1) {
  p__40673 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__40673);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__40676){
var ports = cljs.core.first(arglist__40676);
var p__40673 = cljs.core.rest(arglist__40676);
return alts_BANG___delegate(ports,p__40673);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t40684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40684 = (function (ch,f,map_LT_,meta40685){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40685 = meta40685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40684.cljs$lang$type = true;
cljs.core.async.t40684.cljs$lang$ctorStr = "cljs.core.async/t40684";
cljs.core.async.t40684.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40684");
});
cljs.core.async.t40684.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t40684.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t40687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40687 = (function (fn1,_,meta40685,ch,f,map_LT_,meta40688){
this.fn1 = fn1;
this._ = _;
this.meta40685 = meta40685;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40688 = meta40688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40687.cljs$lang$type = true;
cljs.core.async.t40687.cljs$lang$ctorStr = "cljs.core.async/t40687";
cljs.core.async.t40687.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40687");
});})(___$1))
;
cljs.core.async.t40687.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t40687.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t40687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__40677_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__40677_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40677_SHARP_) : self__.f.call(null,p1__40677_SHARP_)))) : f1.call(null,(((p1__40677_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40677_SHARP_) : self__.f.call(null,p1__40677_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t40687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40689){var self__ = this;
var _40689__$1 = this;return self__.meta40688;
});})(___$1))
;
cljs.core.async.t40687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40689,meta40688__$1){var self__ = this;
var _40689__$1 = this;return (new cljs.core.async.t40687(self__.fn1,self__._,self__.meta40685,self__.ch,self__.f,self__.map_LT_,meta40688__$1));
});})(___$1))
;
cljs.core.async.__GT_t40687 = ((function (___$1){
return (function __GT_t40687(fn1__$1,___$2,meta40685__$1,ch__$2,f__$2,map_LT___$2,meta40688){return (new cljs.core.async.t40687(fn1__$1,___$2,meta40685__$1,ch__$2,f__$2,map_LT___$2,meta40688));
});})(___$1))
;
}
return (new cljs.core.async.t40687(fn1,___$1,self__.meta40685,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t40684.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40686){var self__ = this;
var _40686__$1 = this;return self__.meta40685;
});
cljs.core.async.t40684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40686,meta40685__$1){var self__ = this;
var _40686__$1 = this;return (new cljs.core.async.t40684(self__.ch,self__.f,self__.map_LT_,meta40685__$1));
});
cljs.core.async.__GT_t40684 = (function __GT_t40684(ch__$1,f__$1,map_LT___$1,meta40685){return (new cljs.core.async.t40684(ch__$1,f__$1,map_LT___$1,meta40685));
});
}
return (new cljs.core.async.t40684(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t40693 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40693 = (function (ch,f,map_GT_,meta40694){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta40694 = meta40694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40693.cljs$lang$type = true;
cljs.core.async.t40693.cljs$lang$ctorStr = "cljs.core.async/t40693";
cljs.core.async.t40693.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40693");
});
cljs.core.async.t40693.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t40693.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t40693.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40695){var self__ = this;
var _40695__$1 = this;return self__.meta40694;
});
cljs.core.async.t40693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40695,meta40694__$1){var self__ = this;
var _40695__$1 = this;return (new cljs.core.async.t40693(self__.ch,self__.f,self__.map_GT_,meta40694__$1));
});
cljs.core.async.__GT_t40693 = (function __GT_t40693(ch__$1,f__$1,map_GT___$1,meta40694){return (new cljs.core.async.t40693(ch__$1,f__$1,map_GT___$1,meta40694));
});
}
return (new cljs.core.async.t40693(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t40699 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40699 = (function (ch,p,filter_GT_,meta40700){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta40700 = meta40700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40699.cljs$lang$type = true;
cljs.core.async.t40699.cljs$lang$ctorStr = "cljs.core.async/t40699";
cljs.core.async.t40699.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40699");
});
cljs.core.async.t40699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t40699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t40699.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40701){var self__ = this;
var _40701__$1 = this;return self__.meta40700;
});
cljs.core.async.t40699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40701,meta40700__$1){var self__ = this;
var _40701__$1 = this;return (new cljs.core.async.t40699(self__.ch,self__.p,self__.filter_GT_,meta40700__$1));
});
cljs.core.async.__GT_t40699 = (function __GT_t40699(ch__$1,p__$1,filter_GT___$1,meta40700){return (new cljs.core.async.t40699(ch__$1,p__$1,filter_GT___$1,meta40700));
});
}
return (new cljs.core.async.t40699(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___40784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___40784,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___40784,out){
return (function (state_40763){var state_val_40764 = (state_40763[(1)]);if((state_val_40764 === (7)))
{var inst_40759 = (state_40763[(2)]);var state_40763__$1 = state_40763;var statearr_40765_40785 = state_40763__$1;(statearr_40765_40785[(2)] = inst_40759);
(statearr_40765_40785[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40764 === (1)))
{var state_40763__$1 = state_40763;var statearr_40766_40786 = state_40763__$1;(statearr_40766_40786[(2)] = null);
(statearr_40766_40786[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40764 === (4)))
{var inst_40745 = (state_40763[(7)]);var inst_40745__$1 = (state_40763[(2)]);var inst_40746 = (inst_40745__$1 == null);var state_40763__$1 = (function (){var statearr_40767 = state_40763;(statearr_40767[(7)] = inst_40745__$1);
return statearr_40767;
})();if(cljs.core.truth_(inst_40746))
{var statearr_40768_40787 = state_40763__$1;(statearr_40768_40787[(1)] = (5));
} else
{var statearr_40769_40788 = state_40763__$1;(statearr_40769_40788[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_40764 === (6)))
{var inst_40745 = (state_40763[(7)]);var inst_40750 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40745) : p.call(null,inst_40745));var state_40763__$1 = state_40763;if(cljs.core.truth_(inst_40750))
{var statearr_40770_40789 = state_40763__$1;(statearr_40770_40789[(1)] = (8));
} else
{var statearr_40771_40790 = state_40763__$1;(statearr_40771_40790[(1)] = (9));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_40764 === (3)))
{var inst_40761 = (state_40763[(2)]);var state_40763__$1 = state_40763;return cljs.core.async.impl.ioc_helpers.return_chan(state_40763__$1,inst_40761);
} else
{if((state_val_40764 === (2)))
{var state_40763__$1 = state_40763;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40763__$1,(4),ch);
} else
{if((state_val_40764 === (11)))
{var inst_40753 = (state_40763[(2)]);var state_40763__$1 = state_40763;var statearr_40772_40791 = state_40763__$1;(statearr_40772_40791[(2)] = inst_40753);
(statearr_40772_40791[(1)] = (10));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40764 === (9)))
{var state_40763__$1 = state_40763;var statearr_40773_40792 = state_40763__$1;(statearr_40773_40792[(2)] = null);
(statearr_40773_40792[(1)] = (10));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40764 === (5)))
{var inst_40748 = cljs.core.async.close_BANG_(out);var state_40763__$1 = state_40763;var statearr_40774_40793 = state_40763__$1;(statearr_40774_40793[(2)] = inst_40748);
(statearr_40774_40793[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40764 === (10)))
{var inst_40756 = (state_40763[(2)]);var state_40763__$1 = (function (){var statearr_40775 = state_40763;(statearr_40775[(8)] = inst_40756);
return statearr_40775;
})();var statearr_40776_40794 = state_40763__$1;(statearr_40776_40794[(2)] = null);
(statearr_40776_40794[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40764 === (8)))
{var inst_40745 = (state_40763[(7)]);var state_40763__$1 = state_40763;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40763__$1,(11),out,inst_40745);
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
});})(c__5708__auto___40784,out))
;return ((function (switch__5693__auto__,c__5708__auto___40784,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_40780 = [null,null,null,null,null,null,null,null,null];(statearr_40780[(0)] = state_machine__5694__auto__);
(statearr_40780[(1)] = (1));
return statearr_40780;
});
var state_machine__5694__auto____1 = (function (state_40763){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_40763);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e40781){if((e40781 instanceof Object))
{var ex__5697__auto__ = e40781;var statearr_40782_40795 = state_40763;(statearr_40782_40795[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40763);
return cljs.core.constant$keyword$844;
} else
{throw e40781;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__40796 = state_40763;
state_40763 = G__40796;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_40763){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_40763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___40784,out))
})();var state__5710__auto__ = (function (){var statearr_40783 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_40783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___40784);
return statearr_40783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___40784,out))
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
return (function (state_40948){var state_val_40949 = (state_40948[(1)]);if((state_val_40949 === (7)))
{var inst_40944 = (state_40948[(2)]);var state_40948__$1 = state_40948;var statearr_40950_40987 = state_40948__$1;(statearr_40950_40987[(2)] = inst_40944);
(statearr_40950_40987[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (20)))
{var inst_40919 = (state_40948[(7)]);var inst_40930 = (state_40948[(2)]);var inst_40931 = cljs.core.next(inst_40919);var inst_40905 = inst_40931;var inst_40906 = null;var inst_40907 = (0);var inst_40908 = (0);var state_40948__$1 = (function (){var statearr_40951 = state_40948;(statearr_40951[(8)] = inst_40907);
(statearr_40951[(9)] = inst_40906);
(statearr_40951[(10)] = inst_40905);
(statearr_40951[(11)] = inst_40908);
(statearr_40951[(12)] = inst_40930);
return statearr_40951;
})();var statearr_40952_40988 = state_40948__$1;(statearr_40952_40988[(2)] = null);
(statearr_40952_40988[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (1)))
{var state_40948__$1 = state_40948;var statearr_40953_40989 = state_40948__$1;(statearr_40953_40989[(2)] = null);
(statearr_40953_40989[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (4)))
{var inst_40894 = (state_40948[(13)]);var inst_40894__$1 = (state_40948[(2)]);var inst_40895 = (inst_40894__$1 == null);var state_40948__$1 = (function (){var statearr_40957 = state_40948;(statearr_40957[(13)] = inst_40894__$1);
return statearr_40957;
})();if(cljs.core.truth_(inst_40895))
{var statearr_40958_40990 = state_40948__$1;(statearr_40958_40990[(1)] = (5));
} else
{var statearr_40959_40991 = state_40948__$1;(statearr_40959_40991[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (15)))
{var state_40948__$1 = state_40948;var statearr_40960_40992 = state_40948__$1;(statearr_40960_40992[(2)] = null);
(statearr_40960_40992[(1)] = (16));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (13)))
{var inst_40907 = (state_40948[(8)]);var inst_40906 = (state_40948[(9)]);var inst_40905 = (state_40948[(10)]);var inst_40908 = (state_40948[(11)]);var inst_40915 = (state_40948[(2)]);var inst_40916 = (inst_40908 + (1));var tmp40954 = inst_40907;var tmp40955 = inst_40906;var tmp40956 = inst_40905;var inst_40905__$1 = tmp40956;var inst_40906__$1 = tmp40955;var inst_40907__$1 = tmp40954;var inst_40908__$1 = inst_40916;var state_40948__$1 = (function (){var statearr_40961 = state_40948;(statearr_40961[(8)] = inst_40907__$1);
(statearr_40961[(9)] = inst_40906__$1);
(statearr_40961[(14)] = inst_40915);
(statearr_40961[(10)] = inst_40905__$1);
(statearr_40961[(11)] = inst_40908__$1);
return statearr_40961;
})();var statearr_40962_40993 = state_40948__$1;(statearr_40962_40993[(2)] = null);
(statearr_40962_40993[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (6)))
{var inst_40894 = (state_40948[(13)]);var inst_40899 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40894) : f.call(null,inst_40894));var inst_40904 = cljs.core.seq(inst_40899);var inst_40905 = inst_40904;var inst_40906 = null;var inst_40907 = (0);var inst_40908 = (0);var state_40948__$1 = (function (){var statearr_40963 = state_40948;(statearr_40963[(8)] = inst_40907);
(statearr_40963[(9)] = inst_40906);
(statearr_40963[(10)] = inst_40905);
(statearr_40963[(11)] = inst_40908);
return statearr_40963;
})();var statearr_40964_40994 = state_40948__$1;(statearr_40964_40994[(2)] = null);
(statearr_40964_40994[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (17)))
{var inst_40919 = (state_40948[(7)]);var inst_40923 = cljs.core.chunk_first(inst_40919);var inst_40924 = cljs.core.chunk_rest(inst_40919);var inst_40925 = cljs.core.count(inst_40923);var inst_40905 = inst_40924;var inst_40906 = inst_40923;var inst_40907 = inst_40925;var inst_40908 = (0);var state_40948__$1 = (function (){var statearr_40965 = state_40948;(statearr_40965[(8)] = inst_40907);
(statearr_40965[(9)] = inst_40906);
(statearr_40965[(10)] = inst_40905);
(statearr_40965[(11)] = inst_40908);
return statearr_40965;
})();var statearr_40966_40995 = state_40948__$1;(statearr_40966_40995[(2)] = null);
(statearr_40966_40995[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (3)))
{var inst_40946 = (state_40948[(2)]);var state_40948__$1 = state_40948;return cljs.core.async.impl.ioc_helpers.return_chan(state_40948__$1,inst_40946);
} else
{if((state_val_40949 === (12)))
{var inst_40939 = (state_40948[(2)]);var state_40948__$1 = state_40948;var statearr_40967_40996 = state_40948__$1;(statearr_40967_40996[(2)] = inst_40939);
(statearr_40967_40996[(1)] = (9));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (2)))
{var state_40948__$1 = state_40948;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40948__$1,(4),in$);
} else
{if((state_val_40949 === (19)))
{var inst_40934 = (state_40948[(2)]);var state_40948__$1 = state_40948;var statearr_40968_40997 = state_40948__$1;(statearr_40968_40997[(2)] = inst_40934);
(statearr_40968_40997[(1)] = (16));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (11)))
{var inst_40919 = (state_40948[(7)]);var inst_40905 = (state_40948[(10)]);var inst_40919__$1 = cljs.core.seq(inst_40905);var state_40948__$1 = (function (){var statearr_40969 = state_40948;(statearr_40969[(7)] = inst_40919__$1);
return statearr_40969;
})();if(inst_40919__$1)
{var statearr_40970_40998 = state_40948__$1;(statearr_40970_40998[(1)] = (14));
} else
{var statearr_40971_40999 = state_40948__$1;(statearr_40971_40999[(1)] = (15));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (9)))
{var inst_40941 = (state_40948[(2)]);var state_40948__$1 = (function (){var statearr_40972 = state_40948;(statearr_40972[(15)] = inst_40941);
return statearr_40972;
})();var statearr_40973_41000 = state_40948__$1;(statearr_40973_41000[(2)] = null);
(statearr_40973_41000[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (5)))
{var inst_40897 = cljs.core.async.close_BANG_(out);var state_40948__$1 = state_40948;var statearr_40974_41001 = state_40948__$1;(statearr_40974_41001[(2)] = inst_40897);
(statearr_40974_41001[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (14)))
{var inst_40919 = (state_40948[(7)]);var inst_40921 = cljs.core.chunked_seq_QMARK_(inst_40919);var state_40948__$1 = state_40948;if(inst_40921)
{var statearr_40975_41002 = state_40948__$1;(statearr_40975_41002[(1)] = (17));
} else
{var statearr_40976_41003 = state_40948__$1;(statearr_40976_41003[(1)] = (18));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (16)))
{var inst_40937 = (state_40948[(2)]);var state_40948__$1 = state_40948;var statearr_40977_41004 = state_40948__$1;(statearr_40977_41004[(2)] = inst_40937);
(statearr_40977_41004[(1)] = (12));
return cljs.core.constant$keyword$844;
} else
{if((state_val_40949 === (10)))
{var inst_40906 = (state_40948[(9)]);var inst_40908 = (state_40948[(11)]);var inst_40913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40906,inst_40908);var state_40948__$1 = state_40948;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40948__$1,(13),out,inst_40913);
} else
{if((state_val_40949 === (18)))
{var inst_40919 = (state_40948[(7)]);var inst_40928 = cljs.core.first(inst_40919);var state_40948__$1 = state_40948;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40948__$1,(20),out,inst_40928);
} else
{if((state_val_40949 === (8)))
{var inst_40907 = (state_40948[(8)]);var inst_40908 = (state_40948[(11)]);var inst_40910 = (inst_40908 < inst_40907);var inst_40911 = inst_40910;var state_40948__$1 = state_40948;if(cljs.core.truth_(inst_40911))
{var statearr_40978_41005 = state_40948__$1;(statearr_40978_41005[(1)] = (10));
} else
{var statearr_40979_41006 = state_40948__$1;(statearr_40979_41006[(1)] = (11));
}
return cljs.core.constant$keyword$844;
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
var state_machine__5694__auto____0 = (function (){var statearr_40983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40983[(0)] = state_machine__5694__auto__);
(statearr_40983[(1)] = (1));
return statearr_40983;
});
var state_machine__5694__auto____1 = (function (state_40948){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_40948);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e40984){if((e40984 instanceof Object))
{var ex__5697__auto__ = e40984;var statearr_40985_41007 = state_40948;(statearr_40985_41007[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40948);
return cljs.core.constant$keyword$844;
} else
{throw e40984;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__41008 = state_40948;
state_40948 = G__41008;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_40948){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_40948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_40986 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_40986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_40986;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___41089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___41089){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___41089){
return (function (state_41068){var state_val_41069 = (state_41068[(1)]);if((state_val_41069 === (7)))
{var inst_41064 = (state_41068[(2)]);var state_41068__$1 = state_41068;var statearr_41070_41090 = state_41068__$1;(statearr_41070_41090[(2)] = inst_41064);
(statearr_41070_41090[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41069 === (1)))
{var state_41068__$1 = state_41068;var statearr_41071_41091 = state_41068__$1;(statearr_41071_41091[(2)] = null);
(statearr_41071_41091[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41069 === (4)))
{var inst_41051 = (state_41068[(7)]);var inst_41051__$1 = (state_41068[(2)]);var inst_41052 = (inst_41051__$1 == null);var state_41068__$1 = (function (){var statearr_41072 = state_41068;(statearr_41072[(7)] = inst_41051__$1);
return statearr_41072;
})();if(cljs.core.truth_(inst_41052))
{var statearr_41073_41092 = state_41068__$1;(statearr_41073_41092[(1)] = (5));
} else
{var statearr_41074_41093 = state_41068__$1;(statearr_41074_41093[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41069 === (6)))
{var inst_41051 = (state_41068[(7)]);var state_41068__$1 = state_41068;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41068__$1,(11),to,inst_41051);
} else
{if((state_val_41069 === (3)))
{var inst_41066 = (state_41068[(2)]);var state_41068__$1 = state_41068;return cljs.core.async.impl.ioc_helpers.return_chan(state_41068__$1,inst_41066);
} else
{if((state_val_41069 === (2)))
{var state_41068__$1 = state_41068;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41068__$1,(4),from);
} else
{if((state_val_41069 === (11)))
{var inst_41061 = (state_41068[(2)]);var state_41068__$1 = (function (){var statearr_41075 = state_41068;(statearr_41075[(8)] = inst_41061);
return statearr_41075;
})();var statearr_41076_41094 = state_41068__$1;(statearr_41076_41094[(2)] = null);
(statearr_41076_41094[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41069 === (9)))
{var state_41068__$1 = state_41068;var statearr_41077_41095 = state_41068__$1;(statearr_41077_41095[(2)] = null);
(statearr_41077_41095[(1)] = (10));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41069 === (5)))
{var state_41068__$1 = state_41068;if(cljs.core.truth_(close_QMARK_))
{var statearr_41078_41096 = state_41068__$1;(statearr_41078_41096[(1)] = (8));
} else
{var statearr_41079_41097 = state_41068__$1;(statearr_41079_41097[(1)] = (9));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41069 === (10)))
{var inst_41058 = (state_41068[(2)]);var state_41068__$1 = state_41068;var statearr_41080_41098 = state_41068__$1;(statearr_41080_41098[(2)] = inst_41058);
(statearr_41080_41098[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41069 === (8)))
{var inst_41055 = cljs.core.async.close_BANG_(to);var state_41068__$1 = state_41068;var statearr_41081_41099 = state_41068__$1;(statearr_41081_41099[(2)] = inst_41055);
(statearr_41081_41099[(1)] = (10));
return cljs.core.constant$keyword$844;
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
});})(c__5708__auto___41089))
;return ((function (switch__5693__auto__,c__5708__auto___41089){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_41085 = [null,null,null,null,null,null,null,null,null];(statearr_41085[(0)] = state_machine__5694__auto__);
(statearr_41085[(1)] = (1));
return statearr_41085;
});
var state_machine__5694__auto____1 = (function (state_41068){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41068);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41086){if((e41086 instanceof Object))
{var ex__5697__auto__ = e41086;var statearr_41087_41100 = state_41068;(statearr_41087_41100[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41068);
return cljs.core.constant$keyword$844;
} else
{throw e41086;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__41101 = state_41068;
state_41068 = G__41101;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41068){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___41089))
})();var state__5710__auto__ = (function (){var statearr_41088 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___41089);
return statearr_41088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___41089))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5708__auto___41188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___41188,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___41188,tc,fc){
return (function (state_41166){var state_val_41167 = (state_41166[(1)]);if((state_val_41167 === (7)))
{var inst_41162 = (state_41166[(2)]);var state_41166__$1 = state_41166;var statearr_41168_41189 = state_41166__$1;(statearr_41168_41189[(2)] = inst_41162);
(statearr_41168_41189[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41167 === (1)))
{var state_41166__$1 = state_41166;var statearr_41169_41190 = state_41166__$1;(statearr_41169_41190[(2)] = null);
(statearr_41169_41190[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41167 === (4)))
{var inst_41147 = (state_41166[(7)]);var inst_41147__$1 = (state_41166[(2)]);var inst_41148 = (inst_41147__$1 == null);var state_41166__$1 = (function (){var statearr_41170 = state_41166;(statearr_41170[(7)] = inst_41147__$1);
return statearr_41170;
})();if(cljs.core.truth_(inst_41148))
{var statearr_41171_41191 = state_41166__$1;(statearr_41171_41191[(1)] = (5));
} else
{var statearr_41172_41192 = state_41166__$1;(statearr_41172_41192[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41167 === (6)))
{var inst_41147 = (state_41166[(7)]);var inst_41153 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41147) : p.call(null,inst_41147));var state_41166__$1 = state_41166;if(cljs.core.truth_(inst_41153))
{var statearr_41173_41193 = state_41166__$1;(statearr_41173_41193[(1)] = (9));
} else
{var statearr_41174_41194 = state_41166__$1;(statearr_41174_41194[(1)] = (10));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41167 === (3)))
{var inst_41164 = (state_41166[(2)]);var state_41166__$1 = state_41166;return cljs.core.async.impl.ioc_helpers.return_chan(state_41166__$1,inst_41164);
} else
{if((state_val_41167 === (2)))
{var state_41166__$1 = state_41166;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41166__$1,(4),ch);
} else
{if((state_val_41167 === (11)))
{var inst_41147 = (state_41166[(7)]);var inst_41157 = (state_41166[(2)]);var state_41166__$1 = state_41166;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41166__$1,(8),inst_41157,inst_41147);
} else
{if((state_val_41167 === (9)))
{var state_41166__$1 = state_41166;var statearr_41175_41195 = state_41166__$1;(statearr_41175_41195[(2)] = tc);
(statearr_41175_41195[(1)] = (11));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41167 === (5)))
{var inst_41150 = cljs.core.async.close_BANG_(tc);var inst_41151 = cljs.core.async.close_BANG_(fc);var state_41166__$1 = (function (){var statearr_41176 = state_41166;(statearr_41176[(8)] = inst_41150);
return statearr_41176;
})();var statearr_41177_41196 = state_41166__$1;(statearr_41177_41196[(2)] = inst_41151);
(statearr_41177_41196[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41167 === (10)))
{var state_41166__$1 = state_41166;var statearr_41178_41197 = state_41166__$1;(statearr_41178_41197[(2)] = fc);
(statearr_41178_41197[(1)] = (11));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41167 === (8)))
{var inst_41159 = (state_41166[(2)]);var state_41166__$1 = (function (){var statearr_41179 = state_41166;(statearr_41179[(9)] = inst_41159);
return statearr_41179;
})();var statearr_41180_41198 = state_41166__$1;(statearr_41180_41198[(2)] = null);
(statearr_41180_41198[(1)] = (2));
return cljs.core.constant$keyword$844;
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
});})(c__5708__auto___41188,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___41188,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_41184 = [null,null,null,null,null,null,null,null,null,null];(statearr_41184[(0)] = state_machine__5694__auto__);
(statearr_41184[(1)] = (1));
return statearr_41184;
});
var state_machine__5694__auto____1 = (function (state_41166){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41166);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41185){if((e41185 instanceof Object))
{var ex__5697__auto__ = e41185;var statearr_41186_41199 = state_41166;(statearr_41186_41199[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41166);
return cljs.core.constant$keyword$844;
} else
{throw e41185;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__41200 = state_41166;
state_41166 = G__41200;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41166){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___41188,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_41187 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___41188);
return statearr_41187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___41188,tc,fc))
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
return (function (state_41247){var state_val_41248 = (state_41247[(1)]);if((state_val_41248 === (7)))
{var inst_41243 = (state_41247[(2)]);var state_41247__$1 = state_41247;var statearr_41249_41265 = state_41247__$1;(statearr_41249_41265[(2)] = inst_41243);
(statearr_41249_41265[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41248 === (6)))
{var inst_41236 = (state_41247[(7)]);var inst_41233 = (state_41247[(8)]);var inst_41240 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41233,inst_41236) : f.call(null,inst_41233,inst_41236));var inst_41233__$1 = inst_41240;var state_41247__$1 = (function (){var statearr_41250 = state_41247;(statearr_41250[(8)] = inst_41233__$1);
return statearr_41250;
})();var statearr_41251_41266 = state_41247__$1;(statearr_41251_41266[(2)] = null);
(statearr_41251_41266[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41248 === (5)))
{var inst_41233 = (state_41247[(8)]);var state_41247__$1 = state_41247;var statearr_41252_41267 = state_41247__$1;(statearr_41252_41267[(2)] = inst_41233);
(statearr_41252_41267[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41248 === (4)))
{var inst_41236 = (state_41247[(7)]);var inst_41236__$1 = (state_41247[(2)]);var inst_41237 = (inst_41236__$1 == null);var state_41247__$1 = (function (){var statearr_41253 = state_41247;(statearr_41253[(7)] = inst_41236__$1);
return statearr_41253;
})();if(cljs.core.truth_(inst_41237))
{var statearr_41254_41268 = state_41247__$1;(statearr_41254_41268[(1)] = (5));
} else
{var statearr_41255_41269 = state_41247__$1;(statearr_41255_41269[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41248 === (3)))
{var inst_41245 = (state_41247[(2)]);var state_41247__$1 = state_41247;return cljs.core.async.impl.ioc_helpers.return_chan(state_41247__$1,inst_41245);
} else
{if((state_val_41248 === (2)))
{var state_41247__$1 = state_41247;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41247__$1,(4),ch);
} else
{if((state_val_41248 === (1)))
{var inst_41233 = init;var state_41247__$1 = (function (){var statearr_41256 = state_41247;(statearr_41256[(8)] = inst_41233);
return statearr_41256;
})();var statearr_41257_41270 = state_41247__$1;(statearr_41257_41270[(2)] = null);
(statearr_41257_41270[(1)] = (2));
return cljs.core.constant$keyword$844;
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
var state_machine__5694__auto____0 = (function (){var statearr_41261 = [null,null,null,null,null,null,null,null,null];(statearr_41261[(0)] = state_machine__5694__auto__);
(statearr_41261[(1)] = (1));
return statearr_41261;
});
var state_machine__5694__auto____1 = (function (state_41247){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41247);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41262){if((e41262 instanceof Object))
{var ex__5697__auto__ = e41262;var statearr_41263_41271 = state_41247;(statearr_41263_41271[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41247);
return cljs.core.constant$keyword$844;
} else
{throw e41262;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__41272 = state_41247;
state_41247 = G__41272;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41247){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_41264 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_41264;
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
return (function (state_41334){var state_val_41335 = (state_41334[(1)]);if((state_val_41335 === (7)))
{var inst_41315 = (state_41334[(7)]);var inst_41320 = (state_41334[(2)]);var inst_41321 = cljs.core.next(inst_41315);var inst_41315__$1 = inst_41321;var state_41334__$1 = (function (){var statearr_41336 = state_41334;(statearr_41336[(7)] = inst_41315__$1);
(statearr_41336[(8)] = inst_41320);
return statearr_41336;
})();var statearr_41337_41355 = state_41334__$1;(statearr_41337_41355[(2)] = null);
(statearr_41337_41355[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41335 === (1)))
{var inst_41314 = cljs.core.seq(coll);var inst_41315 = inst_41314;var state_41334__$1 = (function (){var statearr_41338 = state_41334;(statearr_41338[(7)] = inst_41315);
return statearr_41338;
})();var statearr_41339_41356 = state_41334__$1;(statearr_41339_41356[(2)] = null);
(statearr_41339_41356[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41335 === (4)))
{var inst_41315 = (state_41334[(7)]);var inst_41318 = cljs.core.first(inst_41315);var state_41334__$1 = state_41334;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41334__$1,(7),ch,inst_41318);
} else
{if((state_val_41335 === (6)))
{var inst_41330 = (state_41334[(2)]);var state_41334__$1 = state_41334;var statearr_41340_41357 = state_41334__$1;(statearr_41340_41357[(2)] = inst_41330);
(statearr_41340_41357[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41335 === (3)))
{var inst_41332 = (state_41334[(2)]);var state_41334__$1 = state_41334;return cljs.core.async.impl.ioc_helpers.return_chan(state_41334__$1,inst_41332);
} else
{if((state_val_41335 === (2)))
{var inst_41315 = (state_41334[(7)]);var state_41334__$1 = state_41334;if(cljs.core.truth_(inst_41315))
{var statearr_41341_41358 = state_41334__$1;(statearr_41341_41358[(1)] = (4));
} else
{var statearr_41342_41359 = state_41334__$1;(statearr_41342_41359[(1)] = (5));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41335 === (9)))
{var state_41334__$1 = state_41334;var statearr_41343_41360 = state_41334__$1;(statearr_41343_41360[(2)] = null);
(statearr_41343_41360[(1)] = (10));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41335 === (5)))
{var state_41334__$1 = state_41334;if(cljs.core.truth_(close_QMARK_))
{var statearr_41344_41361 = state_41334__$1;(statearr_41344_41361[(1)] = (8));
} else
{var statearr_41345_41362 = state_41334__$1;(statearr_41345_41362[(1)] = (9));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41335 === (10)))
{var inst_41328 = (state_41334[(2)]);var state_41334__$1 = state_41334;var statearr_41346_41363 = state_41334__$1;(statearr_41346_41363[(2)] = inst_41328);
(statearr_41346_41363[(1)] = (6));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41335 === (8)))
{var inst_41325 = cljs.core.async.close_BANG_(ch);var state_41334__$1 = state_41334;var statearr_41347_41364 = state_41334__$1;(statearr_41347_41364[(2)] = inst_41325);
(statearr_41347_41364[(1)] = (10));
return cljs.core.constant$keyword$844;
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
var state_machine__5694__auto____0 = (function (){var statearr_41351 = [null,null,null,null,null,null,null,null,null];(statearr_41351[(0)] = state_machine__5694__auto__);
(statearr_41351[(1)] = (1));
return statearr_41351;
});
var state_machine__5694__auto____1 = (function (state_41334){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41334);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41352){if((e41352 instanceof Object))
{var ex__5697__auto__ = e41352;var statearr_41353_41365 = state_41334;(statearr_41353_41365[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41334);
return cljs.core.constant$keyword$844;
} else
{throw e41352;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__41366 = state_41334;
state_41334 = G__41366;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41334){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_41354 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_41354;
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
cljs.core.async.Mux = (function (){var obj41368 = {};return obj41368;
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
cljs.core.async.Mult = (function (){var obj41370 = {};return obj41370;
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
cljs.core.async.mult = (function mult(ch){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var m = (function (){if(typeof cljs.core.async.t41594 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41594 = (function (cs,ch,mult,meta41595){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta41595 = meta41595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41594.cljs$lang$type = true;
cljs.core.async.t41594.cljs$lang$ctorStr = "cljs.core.async/t41594";
cljs.core.async.t41594.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t41594");
});})(cs))
;
cljs.core.async.t41594.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t41594.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t41594.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t41594.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return null;
});})(cs))
;
cljs.core.async.t41594.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t41594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41596){var self__ = this;
var _41596__$1 = this;return self__.meta41595;
});})(cs))
;
cljs.core.async.t41594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41596,meta41595__$1){var self__ = this;
var _41596__$1 = this;return (new cljs.core.async.t41594(self__.cs,self__.ch,self__.mult,meta41595__$1));
});})(cs))
;
cljs.core.async.__GT_t41594 = ((function (cs){
return (function __GT_t41594(cs__$1,ch__$1,mult__$1,meta41595){return (new cljs.core.async.t41594(cs__$1,ch__$1,mult__$1,meta41595));
});})(cs))
;
}
return (new cljs.core.async.t41594(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___41817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___41817,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___41817,cs,m,dchan,dctr,done){
return (function (state_41731){var state_val_41732 = (state_41731[(1)]);if((state_val_41732 === (7)))
{var inst_41727 = (state_41731[(2)]);var state_41731__$1 = state_41731;var statearr_41733_41818 = state_41731__$1;(statearr_41733_41818[(2)] = inst_41727);
(statearr_41733_41818[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (20)))
{var inst_41628 = (state_41731[(7)]);var inst_41638 = cljs.core.first(inst_41628);var inst_41639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41638,(0),null);var inst_41640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41638,(1),null);var state_41731__$1 = (function (){var statearr_41734 = state_41731;(statearr_41734[(8)] = inst_41639);
return statearr_41734;
})();if(cljs.core.truth_(inst_41640))
{var statearr_41735_41819 = state_41731__$1;(statearr_41735_41819[(1)] = (22));
} else
{var statearr_41736_41820 = state_41731__$1;(statearr_41736_41820[(1)] = (23));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (27)))
{var inst_41668 = (state_41731[(9)]);var inst_41670 = (state_41731[(10)]);var inst_41675 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41668,inst_41670);var state_41731__$1 = (function (){var statearr_41737 = state_41731;(statearr_41737[(11)] = inst_41675);
return statearr_41737;
})();var statearr_41738_41821 = state_41731__$1;(statearr_41738_41821[(2)] = null);
(statearr_41738_41821[(1)] = (32));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (1)))
{var state_41731__$1 = state_41731;var statearr_41739_41822 = state_41731__$1;(statearr_41739_41822[(2)] = null);
(statearr_41739_41822[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (24)))
{var inst_41628 = (state_41731[(7)]);var inst_41645 = (state_41731[(2)]);var inst_41646 = cljs.core.next(inst_41628);var inst_41608 = inst_41646;var inst_41609 = null;var inst_41610 = (0);var inst_41611 = (0);var state_41731__$1 = (function (){var statearr_41740 = state_41731;(statearr_41740[(12)] = inst_41645);
(statearr_41740[(13)] = inst_41609);
(statearr_41740[(14)] = inst_41608);
(statearr_41740[(15)] = inst_41610);
(statearr_41740[(16)] = inst_41611);
return statearr_41740;
})();var statearr_41741_41823 = state_41731__$1;(statearr_41741_41823[(2)] = null);
(statearr_41741_41823[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (39)))
{var inst_41688 = (state_41731[(17)]);var inst_41706 = (state_41731[(2)]);var inst_41707 = cljs.core.next(inst_41688);var inst_41667 = inst_41707;var inst_41668 = null;var inst_41669 = (0);var inst_41670 = (0);var state_41731__$1 = (function (){var statearr_41745 = state_41731;(statearr_41745[(18)] = inst_41706);
(statearr_41745[(9)] = inst_41668);
(statearr_41745[(19)] = inst_41667);
(statearr_41745[(20)] = inst_41669);
(statearr_41745[(10)] = inst_41670);
return statearr_41745;
})();var statearr_41746_41824 = state_41731__$1;(statearr_41746_41824[(2)] = null);
(statearr_41746_41824[(1)] = (25));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (4)))
{var inst_41599 = (state_41731[(21)]);var inst_41599__$1 = (state_41731[(2)]);var inst_41600 = (inst_41599__$1 == null);var state_41731__$1 = (function (){var statearr_41747 = state_41731;(statearr_41747[(21)] = inst_41599__$1);
return statearr_41747;
})();if(cljs.core.truth_(inst_41600))
{var statearr_41748_41825 = state_41731__$1;(statearr_41748_41825[(1)] = (5));
} else
{var statearr_41749_41826 = state_41731__$1;(statearr_41749_41826[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (15)))
{var inst_41609 = (state_41731[(13)]);var inst_41608 = (state_41731[(14)]);var inst_41610 = (state_41731[(15)]);var inst_41611 = (state_41731[(16)]);var inst_41624 = (state_41731[(2)]);var inst_41625 = (inst_41611 + (1));var tmp41742 = inst_41609;var tmp41743 = inst_41608;var tmp41744 = inst_41610;var inst_41608__$1 = tmp41743;var inst_41609__$1 = tmp41742;var inst_41610__$1 = tmp41744;var inst_41611__$1 = inst_41625;var state_41731__$1 = (function (){var statearr_41750 = state_41731;(statearr_41750[(13)] = inst_41609__$1);
(statearr_41750[(14)] = inst_41608__$1);
(statearr_41750[(15)] = inst_41610__$1);
(statearr_41750[(16)] = inst_41611__$1);
(statearr_41750[(22)] = inst_41624);
return statearr_41750;
})();var statearr_41751_41827 = state_41731__$1;(statearr_41751_41827[(2)] = null);
(statearr_41751_41827[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (21)))
{var inst_41649 = (state_41731[(2)]);var state_41731__$1 = state_41731;var statearr_41752_41828 = state_41731__$1;(statearr_41752_41828[(2)] = inst_41649);
(statearr_41752_41828[(1)] = (18));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (31)))
{var inst_41675 = (state_41731[(11)]);var inst_41676 = (state_41731[(2)]);var inst_41677 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_41678 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41675);var state_41731__$1 = (function (){var statearr_41753 = state_41731;(statearr_41753[(23)] = inst_41676);
(statearr_41753[(24)] = inst_41677);
return statearr_41753;
})();var statearr_41754_41829 = state_41731__$1;(statearr_41754_41829[(2)] = inst_41678);
cljs.core.async.impl.ioc_helpers.process_exception(state_41731__$1);
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (32)))
{var inst_41599 = (state_41731[(21)]);var inst_41675 = (state_41731[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41731,(31),Object,null,(30));var inst_41682 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41675,inst_41599,done);var state_41731__$1 = state_41731;var statearr_41755_41830 = state_41731__$1;(statearr_41755_41830[(2)] = inst_41682);
cljs.core.async.impl.ioc_helpers.process_exception(state_41731__$1);
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (40)))
{var inst_41697 = (state_41731[(25)]);var inst_41698 = (state_41731[(2)]);var inst_41699 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_41700 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41697);var state_41731__$1 = (function (){var statearr_41756 = state_41731;(statearr_41756[(26)] = inst_41699);
(statearr_41756[(27)] = inst_41698);
return statearr_41756;
})();var statearr_41757_41831 = state_41731__$1;(statearr_41757_41831[(2)] = inst_41700);
cljs.core.async.impl.ioc_helpers.process_exception(state_41731__$1);
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (33)))
{var inst_41688 = (state_41731[(17)]);var inst_41690 = cljs.core.chunked_seq_QMARK_(inst_41688);var state_41731__$1 = state_41731;if(inst_41690)
{var statearr_41758_41832 = state_41731__$1;(statearr_41758_41832[(1)] = (36));
} else
{var statearr_41759_41833 = state_41731__$1;(statearr_41759_41833[(1)] = (37));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (13)))
{var inst_41618 = (state_41731[(28)]);var inst_41621 = cljs.core.async.close_BANG_(inst_41618);var state_41731__$1 = state_41731;var statearr_41760_41834 = state_41731__$1;(statearr_41760_41834[(2)] = inst_41621);
(statearr_41760_41834[(1)] = (15));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (22)))
{var inst_41639 = (state_41731[(8)]);var inst_41642 = cljs.core.async.close_BANG_(inst_41639);var state_41731__$1 = state_41731;var statearr_41761_41835 = state_41731__$1;(statearr_41761_41835[(2)] = inst_41642);
(statearr_41761_41835[(1)] = (24));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (36)))
{var inst_41688 = (state_41731[(17)]);var inst_41692 = cljs.core.chunk_first(inst_41688);var inst_41693 = cljs.core.chunk_rest(inst_41688);var inst_41694 = cljs.core.count(inst_41692);var inst_41667 = inst_41693;var inst_41668 = inst_41692;var inst_41669 = inst_41694;var inst_41670 = (0);var state_41731__$1 = (function (){var statearr_41762 = state_41731;(statearr_41762[(9)] = inst_41668);
(statearr_41762[(19)] = inst_41667);
(statearr_41762[(20)] = inst_41669);
(statearr_41762[(10)] = inst_41670);
return statearr_41762;
})();var statearr_41763_41836 = state_41731__$1;(statearr_41763_41836[(2)] = null);
(statearr_41763_41836[(1)] = (25));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (41)))
{var inst_41697 = (state_41731[(25)]);var inst_41599 = (state_41731[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41731,(40),Object,null,(39));var inst_41704 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41697,inst_41599,done);var state_41731__$1 = state_41731;var statearr_41764_41837 = state_41731__$1;(statearr_41764_41837[(2)] = inst_41704);
cljs.core.async.impl.ioc_helpers.process_exception(state_41731__$1);
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (43)))
{var state_41731__$1 = state_41731;var statearr_41765_41838 = state_41731__$1;(statearr_41765_41838[(2)] = null);
(statearr_41765_41838[(1)] = (44));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (29)))
{var inst_41715 = (state_41731[(2)]);var state_41731__$1 = state_41731;var statearr_41766_41839 = state_41731__$1;(statearr_41766_41839[(2)] = inst_41715);
(statearr_41766_41839[(1)] = (26));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (44)))
{var inst_41724 = (state_41731[(2)]);var state_41731__$1 = (function (){var statearr_41767 = state_41731;(statearr_41767[(29)] = inst_41724);
return statearr_41767;
})();var statearr_41768_41840 = state_41731__$1;(statearr_41768_41840[(2)] = null);
(statearr_41768_41840[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (6)))
{var inst_41659 = (state_41731[(30)]);var inst_41658 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_41659__$1 = cljs.core.keys(inst_41658);var inst_41660 = cljs.core.count(inst_41659__$1);var inst_41661 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_41660) : cljs.core.reset_BANG_.call(null,dctr,inst_41660));var inst_41666 = cljs.core.seq(inst_41659__$1);var inst_41667 = inst_41666;var inst_41668 = null;var inst_41669 = (0);var inst_41670 = (0);var state_41731__$1 = (function (){var statearr_41769 = state_41731;(statearr_41769[(9)] = inst_41668);
(statearr_41769[(19)] = inst_41667);
(statearr_41769[(20)] = inst_41669);
(statearr_41769[(31)] = inst_41661);
(statearr_41769[(30)] = inst_41659__$1);
(statearr_41769[(10)] = inst_41670);
return statearr_41769;
})();var statearr_41770_41841 = state_41731__$1;(statearr_41770_41841[(2)] = null);
(statearr_41770_41841[(1)] = (25));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (28)))
{var inst_41688 = (state_41731[(17)]);var inst_41667 = (state_41731[(19)]);var inst_41688__$1 = cljs.core.seq(inst_41667);var state_41731__$1 = (function (){var statearr_41771 = state_41731;(statearr_41771[(17)] = inst_41688__$1);
return statearr_41771;
})();if(inst_41688__$1)
{var statearr_41772_41842 = state_41731__$1;(statearr_41772_41842[(1)] = (33));
} else
{var statearr_41773_41843 = state_41731__$1;(statearr_41773_41843[(1)] = (34));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (25)))
{var inst_41669 = (state_41731[(20)]);var inst_41670 = (state_41731[(10)]);var inst_41672 = (inst_41670 < inst_41669);var inst_41673 = inst_41672;var state_41731__$1 = state_41731;if(cljs.core.truth_(inst_41673))
{var statearr_41774_41844 = state_41731__$1;(statearr_41774_41844[(1)] = (27));
} else
{var statearr_41775_41845 = state_41731__$1;(statearr_41775_41845[(1)] = (28));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (34)))
{var state_41731__$1 = state_41731;var statearr_41776_41846 = state_41731__$1;(statearr_41776_41846[(2)] = null);
(statearr_41776_41846[(1)] = (35));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (17)))
{var state_41731__$1 = state_41731;var statearr_41777_41847 = state_41731__$1;(statearr_41777_41847[(2)] = null);
(statearr_41777_41847[(1)] = (18));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (3)))
{var inst_41729 = (state_41731[(2)]);var state_41731__$1 = state_41731;return cljs.core.async.impl.ioc_helpers.return_chan(state_41731__$1,inst_41729);
} else
{if((state_val_41732 === (12)))
{var inst_41654 = (state_41731[(2)]);var state_41731__$1 = state_41731;var statearr_41778_41848 = state_41731__$1;(statearr_41778_41848[(2)] = inst_41654);
(statearr_41778_41848[(1)] = (9));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (2)))
{var state_41731__$1 = state_41731;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41731__$1,(4),ch);
} else
{if((state_val_41732 === (23)))
{var state_41731__$1 = state_41731;var statearr_41779_41849 = state_41731__$1;(statearr_41779_41849[(2)] = null);
(statearr_41779_41849[(1)] = (24));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (35)))
{var inst_41713 = (state_41731[(2)]);var state_41731__$1 = state_41731;var statearr_41780_41850 = state_41731__$1;(statearr_41780_41850[(2)] = inst_41713);
(statearr_41780_41850[(1)] = (29));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (19)))
{var inst_41628 = (state_41731[(7)]);var inst_41632 = cljs.core.chunk_first(inst_41628);var inst_41633 = cljs.core.chunk_rest(inst_41628);var inst_41634 = cljs.core.count(inst_41632);var inst_41608 = inst_41633;var inst_41609 = inst_41632;var inst_41610 = inst_41634;var inst_41611 = (0);var state_41731__$1 = (function (){var statearr_41781 = state_41731;(statearr_41781[(13)] = inst_41609);
(statearr_41781[(14)] = inst_41608);
(statearr_41781[(15)] = inst_41610);
(statearr_41781[(16)] = inst_41611);
return statearr_41781;
})();var statearr_41782_41851 = state_41731__$1;(statearr_41782_41851[(2)] = null);
(statearr_41782_41851[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (11)))
{var inst_41628 = (state_41731[(7)]);var inst_41608 = (state_41731[(14)]);var inst_41628__$1 = cljs.core.seq(inst_41608);var state_41731__$1 = (function (){var statearr_41783 = state_41731;(statearr_41783[(7)] = inst_41628__$1);
return statearr_41783;
})();if(inst_41628__$1)
{var statearr_41784_41852 = state_41731__$1;(statearr_41784_41852[(1)] = (16));
} else
{var statearr_41785_41853 = state_41731__$1;(statearr_41785_41853[(1)] = (17));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (9)))
{var inst_41656 = (state_41731[(2)]);var state_41731__$1 = state_41731;var statearr_41786_41854 = state_41731__$1;(statearr_41786_41854[(2)] = inst_41656);
(statearr_41786_41854[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (5)))
{var inst_41606 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_41607 = cljs.core.seq(inst_41606);var inst_41608 = inst_41607;var inst_41609 = null;var inst_41610 = (0);var inst_41611 = (0);var state_41731__$1 = (function (){var statearr_41787 = state_41731;(statearr_41787[(13)] = inst_41609);
(statearr_41787[(14)] = inst_41608);
(statearr_41787[(15)] = inst_41610);
(statearr_41787[(16)] = inst_41611);
return statearr_41787;
})();var statearr_41788_41855 = state_41731__$1;(statearr_41788_41855[(2)] = null);
(statearr_41788_41855[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (14)))
{var state_41731__$1 = state_41731;var statearr_41789_41856 = state_41731__$1;(statearr_41789_41856[(2)] = null);
(statearr_41789_41856[(1)] = (15));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (45)))
{var inst_41721 = (state_41731[(2)]);var state_41731__$1 = state_41731;var statearr_41790_41857 = state_41731__$1;(statearr_41790_41857[(2)] = inst_41721);
(statearr_41790_41857[(1)] = (44));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (26)))
{var inst_41659 = (state_41731[(30)]);var inst_41717 = (state_41731[(2)]);var inst_41718 = cljs.core.seq(inst_41659);var state_41731__$1 = (function (){var statearr_41791 = state_41731;(statearr_41791[(32)] = inst_41717);
return statearr_41791;
})();if(inst_41718)
{var statearr_41792_41858 = state_41731__$1;(statearr_41792_41858[(1)] = (42));
} else
{var statearr_41793_41859 = state_41731__$1;(statearr_41793_41859[(1)] = (43));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (16)))
{var inst_41628 = (state_41731[(7)]);var inst_41630 = cljs.core.chunked_seq_QMARK_(inst_41628);var state_41731__$1 = state_41731;if(inst_41630)
{var statearr_41797_41860 = state_41731__$1;(statearr_41797_41860[(1)] = (19));
} else
{var statearr_41798_41861 = state_41731__$1;(statearr_41798_41861[(1)] = (20));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (38)))
{var inst_41710 = (state_41731[(2)]);var state_41731__$1 = state_41731;var statearr_41799_41862 = state_41731__$1;(statearr_41799_41862[(2)] = inst_41710);
(statearr_41799_41862[(1)] = (35));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (30)))
{var inst_41668 = (state_41731[(9)]);var inst_41667 = (state_41731[(19)]);var inst_41669 = (state_41731[(20)]);var inst_41670 = (state_41731[(10)]);var inst_41684 = (state_41731[(2)]);var inst_41685 = (inst_41670 + (1));var tmp41794 = inst_41668;var tmp41795 = inst_41667;var tmp41796 = inst_41669;var inst_41667__$1 = tmp41795;var inst_41668__$1 = tmp41794;var inst_41669__$1 = tmp41796;var inst_41670__$1 = inst_41685;var state_41731__$1 = (function (){var statearr_41800 = state_41731;(statearr_41800[(33)] = inst_41684);
(statearr_41800[(9)] = inst_41668__$1);
(statearr_41800[(19)] = inst_41667__$1);
(statearr_41800[(20)] = inst_41669__$1);
(statearr_41800[(10)] = inst_41670__$1);
return statearr_41800;
})();var statearr_41801_41863 = state_41731__$1;(statearr_41801_41863[(2)] = null);
(statearr_41801_41863[(1)] = (25));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (10)))
{var inst_41609 = (state_41731[(13)]);var inst_41611 = (state_41731[(16)]);var inst_41617 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41609,inst_41611);var inst_41618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41617,(0),null);var inst_41619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41617,(1),null);var state_41731__$1 = (function (){var statearr_41802 = state_41731;(statearr_41802[(28)] = inst_41618);
return statearr_41802;
})();if(cljs.core.truth_(inst_41619))
{var statearr_41803_41864 = state_41731__$1;(statearr_41803_41864[(1)] = (13));
} else
{var statearr_41804_41865 = state_41731__$1;(statearr_41804_41865[(1)] = (14));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (18)))
{var inst_41652 = (state_41731[(2)]);var state_41731__$1 = state_41731;var statearr_41805_41866 = state_41731__$1;(statearr_41805_41866[(2)] = inst_41652);
(statearr_41805_41866[(1)] = (12));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (42)))
{var state_41731__$1 = state_41731;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41731__$1,(45),dchan);
} else
{if((state_val_41732 === (37)))
{var inst_41688 = (state_41731[(17)]);var inst_41697 = cljs.core.first(inst_41688);var state_41731__$1 = (function (){var statearr_41806 = state_41731;(statearr_41806[(25)] = inst_41697);
return statearr_41806;
})();var statearr_41807_41867 = state_41731__$1;(statearr_41807_41867[(2)] = null);
(statearr_41807_41867[(1)] = (41));
return cljs.core.constant$keyword$844;
} else
{if((state_val_41732 === (8)))
{var inst_41610 = (state_41731[(15)]);var inst_41611 = (state_41731[(16)]);var inst_41613 = (inst_41611 < inst_41610);var inst_41614 = inst_41613;var state_41731__$1 = state_41731;if(cljs.core.truth_(inst_41614))
{var statearr_41808_41868 = state_41731__$1;(statearr_41808_41868[(1)] = (10));
} else
{var statearr_41809_41869 = state_41731__$1;(statearr_41809_41869[(1)] = (11));
}
return cljs.core.constant$keyword$844;
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
});})(c__5708__auto___41817,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___41817,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_41813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41813[(0)] = state_machine__5694__auto__);
(statearr_41813[(1)] = (1));
return statearr_41813;
});
var state_machine__5694__auto____1 = (function (state_41731){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41731);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41814){if((e41814 instanceof Object))
{var ex__5697__auto__ = e41814;var statearr_41815_41870 = state_41731;(statearr_41815_41870[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41731);
return cljs.core.constant$keyword$844;
} else
{throw e41814;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__41871 = state_41731;
state_41731 = G__41871;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41731){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___41817,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_41816 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___41817);
return statearr_41816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___41817,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj41873 = {};return obj41873;
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
cljs.core.async.mix = (function mix(out){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$851,null,cljs.core.constant$keyword$852,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$853);var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$852) : cljs.core.atom.call(null,cljs.core.constant$keyword$852));var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));var solos = pick(cljs.core.constant$keyword$853,chs);var pauses = pick(cljs.core.constant$keyword$851,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$854,solos,cljs.core.constant$keyword$855,pick(cljs.core.constant$keyword$852,chs),cljs.core.constant$keyword$856,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$851)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t41983 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41983 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41984){
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
this.meta41984 = meta41984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41983.cljs$lang$type = true;
cljs.core.async.t41983.cljs$lang$ctorStr = "cljs.core.async/t41983";
cljs.core.async.t41983.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t41983");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41983.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t41983.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41983.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41983.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41983.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41983.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41983.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41983.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41985){var self__ = this;
var _41985__$1 = this;return self__.meta41984;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41985,meta41984__$1){var self__ = this;
var _41985__$1 = this;return (new cljs.core.async.t41983(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41984__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t41983 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t41983(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41984){return (new cljs.core.async.t41983(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41984));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t41983(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___42092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42050){var state_val_42051 = (state_42050[(1)]);if((state_val_42051 === (7)))
{var inst_41999 = (state_42050[(7)]);var inst_42004 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41999);var state_42050__$1 = state_42050;var statearr_42052_42093 = state_42050__$1;(statearr_42052_42093[(2)] = inst_42004);
(statearr_42052_42093[(1)] = (9));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (20)))
{var inst_42014 = (state_42050[(8)]);var state_42050__$1 = state_42050;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42050__$1,(23),out,inst_42014);
} else
{if((state_val_42051 === (1)))
{var inst_41989 = (state_42050[(9)]);var inst_41989__$1 = calc_state();var inst_41990 = cljs.core.seq_QMARK_(inst_41989__$1);var state_42050__$1 = (function (){var statearr_42053 = state_42050;(statearr_42053[(9)] = inst_41989__$1);
return statearr_42053;
})();if(inst_41990)
{var statearr_42054_42094 = state_42050__$1;(statearr_42054_42094[(1)] = (2));
} else
{var statearr_42055_42095 = state_42050__$1;(statearr_42055_42095[(1)] = (3));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (4)))
{var inst_41989 = (state_42050[(9)]);var inst_41995 = (state_42050[(2)]);var inst_41996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41995,cljs.core.constant$keyword$856);var inst_41997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41995,cljs.core.constant$keyword$855);var inst_41998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41995,cljs.core.constant$keyword$854);var inst_41999 = inst_41989;var state_42050__$1 = (function (){var statearr_42056 = state_42050;(statearr_42056[(10)] = inst_41996);
(statearr_42056[(11)] = inst_41997);
(statearr_42056[(7)] = inst_41999);
(statearr_42056[(12)] = inst_41998);
return statearr_42056;
})();var statearr_42057_42096 = state_42050__$1;(statearr_42057_42096[(2)] = null);
(statearr_42057_42096[(1)] = (5));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (15)))
{var state_42050__$1 = state_42050;var statearr_42058_42097 = state_42050__$1;(statearr_42058_42097[(2)] = null);
(statearr_42058_42097[(1)] = (16));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (21)))
{var state_42050__$1 = state_42050;var statearr_42059_42098 = state_42050__$1;(statearr_42059_42098[(2)] = null);
(statearr_42059_42098[(1)] = (22));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (13)))
{var inst_42046 = (state_42050[(2)]);var state_42050__$1 = state_42050;var statearr_42060_42099 = state_42050__$1;(statearr_42060_42099[(2)] = inst_42046);
(statearr_42060_42099[(1)] = (6));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (22)))
{var inst_42007 = (state_42050[(13)]);var inst_42043 = (state_42050[(2)]);var inst_41999 = inst_42007;var state_42050__$1 = (function (){var statearr_42061 = state_42050;(statearr_42061[(7)] = inst_41999);
(statearr_42061[(14)] = inst_42043);
return statearr_42061;
})();var statearr_42062_42100 = state_42050__$1;(statearr_42062_42100[(2)] = null);
(statearr_42062_42100[(1)] = (5));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (6)))
{var inst_42048 = (state_42050[(2)]);var state_42050__$1 = state_42050;return cljs.core.async.impl.ioc_helpers.return_chan(state_42050__$1,inst_42048);
} else
{if((state_val_42051 === (17)))
{var inst_42029 = (state_42050[(15)]);var state_42050__$1 = state_42050;var statearr_42063_42101 = state_42050__$1;(statearr_42063_42101[(2)] = inst_42029);
(statearr_42063_42101[(1)] = (19));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (3)))
{var inst_41989 = (state_42050[(9)]);var state_42050__$1 = state_42050;var statearr_42064_42102 = state_42050__$1;(statearr_42064_42102[(2)] = inst_41989);
(statearr_42064_42102[(1)] = (4));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (12)))
{var inst_42029 = (state_42050[(15)]);var inst_42010 = (state_42050[(16)]);var inst_42015 = (state_42050[(17)]);var inst_42029__$1 = (inst_42010.cljs$core$IFn$_invoke$arity$1 ? inst_42010.cljs$core$IFn$_invoke$arity$1(inst_42015) : inst_42010.call(null,inst_42015));var state_42050__$1 = (function (){var statearr_42065 = state_42050;(statearr_42065[(15)] = inst_42029__$1);
return statearr_42065;
})();if(cljs.core.truth_(inst_42029__$1))
{var statearr_42066_42103 = state_42050__$1;(statearr_42066_42103[(1)] = (17));
} else
{var statearr_42067_42104 = state_42050__$1;(statearr_42067_42104[(1)] = (18));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (2)))
{var inst_41989 = (state_42050[(9)]);var inst_41992 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41989);var state_42050__$1 = state_42050;var statearr_42068_42105 = state_42050__$1;(statearr_42068_42105[(2)] = inst_41992);
(statearr_42068_42105[(1)] = (4));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (23)))
{var inst_42040 = (state_42050[(2)]);var state_42050__$1 = state_42050;var statearr_42069_42106 = state_42050__$1;(statearr_42069_42106[(2)] = inst_42040);
(statearr_42069_42106[(1)] = (22));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (19)))
{var inst_42037 = (state_42050[(2)]);var state_42050__$1 = state_42050;if(cljs.core.truth_(inst_42037))
{var statearr_42070_42107 = state_42050__$1;(statearr_42070_42107[(1)] = (20));
} else
{var statearr_42071_42108 = state_42050__$1;(statearr_42071_42108[(1)] = (21));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (11)))
{var inst_42014 = (state_42050[(8)]);var inst_42020 = (inst_42014 == null);var state_42050__$1 = state_42050;if(cljs.core.truth_(inst_42020))
{var statearr_42072_42109 = state_42050__$1;(statearr_42072_42109[(1)] = (14));
} else
{var statearr_42073_42110 = state_42050__$1;(statearr_42073_42110[(1)] = (15));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (9)))
{var inst_42007 = (state_42050[(13)]);var inst_42007__$1 = (state_42050[(2)]);var inst_42008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42007__$1,cljs.core.constant$keyword$856);var inst_42009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42007__$1,cljs.core.constant$keyword$855);var inst_42010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42007__$1,cljs.core.constant$keyword$854);var state_42050__$1 = (function (){var statearr_42074 = state_42050;(statearr_42074[(13)] = inst_42007__$1);
(statearr_42074[(18)] = inst_42009);
(statearr_42074[(16)] = inst_42010);
return statearr_42074;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_42050__$1,(10),inst_42008);
} else
{if((state_val_42051 === (5)))
{var inst_41999 = (state_42050[(7)]);var inst_42002 = cljs.core.seq_QMARK_(inst_41999);var state_42050__$1 = state_42050;if(inst_42002)
{var statearr_42075_42111 = state_42050__$1;(statearr_42075_42111[(1)] = (7));
} else
{var statearr_42076_42112 = state_42050__$1;(statearr_42076_42112[(1)] = (8));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (14)))
{var inst_42015 = (state_42050[(17)]);var inst_42022 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42015);var state_42050__$1 = state_42050;var statearr_42077_42113 = state_42050__$1;(statearr_42077_42113[(2)] = inst_42022);
(statearr_42077_42113[(1)] = (16));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (16)))
{var inst_42025 = (state_42050[(2)]);var inst_42026 = calc_state();var inst_41999 = inst_42026;var state_42050__$1 = (function (){var statearr_42078 = state_42050;(statearr_42078[(7)] = inst_41999);
(statearr_42078[(19)] = inst_42025);
return statearr_42078;
})();var statearr_42079_42114 = state_42050__$1;(statearr_42079_42114[(2)] = null);
(statearr_42079_42114[(1)] = (5));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (10)))
{var inst_42014 = (state_42050[(8)]);var inst_42015 = (state_42050[(17)]);var inst_42013 = (state_42050[(2)]);var inst_42014__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42013,(0),null);var inst_42015__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42013,(1),null);var inst_42016 = (inst_42014__$1 == null);var inst_42017 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42015__$1,change);var inst_42018 = (inst_42016) || (inst_42017);var state_42050__$1 = (function (){var statearr_42080 = state_42050;(statearr_42080[(8)] = inst_42014__$1);
(statearr_42080[(17)] = inst_42015__$1);
return statearr_42080;
})();if(cljs.core.truth_(inst_42018))
{var statearr_42081_42115 = state_42050__$1;(statearr_42081_42115[(1)] = (11));
} else
{var statearr_42082_42116 = state_42050__$1;(statearr_42082_42116[(1)] = (12));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (18)))
{var inst_42009 = (state_42050[(18)]);var inst_42010 = (state_42050[(16)]);var inst_42015 = (state_42050[(17)]);var inst_42032 = cljs.core.empty_QMARK_(inst_42010);var inst_42033 = (inst_42009.cljs$core$IFn$_invoke$arity$1 ? inst_42009.cljs$core$IFn$_invoke$arity$1(inst_42015) : inst_42009.call(null,inst_42015));var inst_42034 = cljs.core.not(inst_42033);var inst_42035 = (inst_42032) && (inst_42034);var state_42050__$1 = state_42050;var statearr_42083_42117 = state_42050__$1;(statearr_42083_42117[(2)] = inst_42035);
(statearr_42083_42117[(1)] = (19));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42051 === (8)))
{var inst_41999 = (state_42050[(7)]);var state_42050__$1 = state_42050;var statearr_42084_42118 = state_42050__$1;(statearr_42084_42118[(2)] = inst_41999);
(statearr_42084_42118[(1)] = (9));
return cljs.core.constant$keyword$844;
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
});})(c__5708__auto___42092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___42092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42088[(0)] = state_machine__5694__auto__);
(statearr_42088[(1)] = (1));
return statearr_42088;
});
var state_machine__5694__auto____1 = (function (state_42050){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42050);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42089){if((e42089 instanceof Object))
{var ex__5697__auto__ = e42089;var statearr_42090_42119 = state_42050;(statearr_42090_42119[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42050);
return cljs.core.constant$keyword$844;
} else
{throw e42089;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__42120 = state_42050;
state_42050 = G__42120;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42050){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_42091 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42092);
return statearr_42091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42092,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj42122 = {};return obj42122;
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
return (function (p1__42123_SHARP_){if(cljs.core.truth_((p1__42123_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42123_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42123_SHARP_.call(null,topic))))
{return p1__42123_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42123_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t42248 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42248 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42249){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42249 = meta42249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42248.cljs$lang$type = true;
cljs.core.async.t42248.cljs$lang$ctorStr = "cljs.core.async/t42248";
cljs.core.async.t42248.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t42248");
});})(mults,ensure_mult))
;
cljs.core.async.t42248.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t42248.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t42248.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t42248.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.mults,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY));
});})(mults,ensure_mult))
;
cljs.core.async.t42248.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t42248.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t42248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42250){var self__ = this;
var _42250__$1 = this;return self__.meta42249;
});})(mults,ensure_mult))
;
cljs.core.async.t42248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42250,meta42249__$1){var self__ = this;
var _42250__$1 = this;return (new cljs.core.async.t42248(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42249__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t42248 = ((function (mults,ensure_mult){
return (function __GT_t42248(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42249){return (new cljs.core.async.t42248(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42249));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t42248(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___42372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42372,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42372,mults,ensure_mult,p){
return (function (state_42324){var state_val_42325 = (state_42324[(1)]);if((state_val_42325 === (7)))
{var inst_42320 = (state_42324[(2)]);var state_42324__$1 = state_42324;var statearr_42326_42373 = state_42324__$1;(statearr_42326_42373[(2)] = inst_42320);
(statearr_42326_42373[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (20)))
{var state_42324__$1 = state_42324;var statearr_42327_42374 = state_42324__$1;(statearr_42327_42374[(2)] = null);
(statearr_42327_42374[(1)] = (21));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (1)))
{var state_42324__$1 = state_42324;var statearr_42328_42375 = state_42324__$1;(statearr_42328_42375[(2)] = null);
(statearr_42328_42375[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (24)))
{var inst_42253 = (state_42324[(7)]);var inst_42303 = (state_42324[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42324,(23),Object,null,(22));var inst_42310 = cljs.core.async.muxch_STAR_(inst_42303);var state_42324__$1 = state_42324;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42324__$1,(25),inst_42310,inst_42253);
} else
{if((state_val_42325 === (4)))
{var inst_42253 = (state_42324[(7)]);var inst_42253__$1 = (state_42324[(2)]);var inst_42254 = (inst_42253__$1 == null);var state_42324__$1 = (function (){var statearr_42329 = state_42324;(statearr_42329[(7)] = inst_42253__$1);
return statearr_42329;
})();if(cljs.core.truth_(inst_42254))
{var statearr_42330_42376 = state_42324__$1;(statearr_42330_42376[(1)] = (5));
} else
{var statearr_42331_42377 = state_42324__$1;(statearr_42331_42377[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (15)))
{var inst_42295 = (state_42324[(2)]);var state_42324__$1 = state_42324;var statearr_42332_42378 = state_42324__$1;(statearr_42332_42378[(2)] = inst_42295);
(statearr_42332_42378[(1)] = (12));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (21)))
{var inst_42317 = (state_42324[(2)]);var state_42324__$1 = (function (){var statearr_42333 = state_42324;(statearr_42333[(9)] = inst_42317);
return statearr_42333;
})();var statearr_42334_42379 = state_42324__$1;(statearr_42334_42379[(2)] = null);
(statearr_42334_42379[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (13)))
{var inst_42277 = (state_42324[(10)]);var inst_42279 = cljs.core.chunked_seq_QMARK_(inst_42277);var state_42324__$1 = state_42324;if(inst_42279)
{var statearr_42335_42380 = state_42324__$1;(statearr_42335_42380[(1)] = (16));
} else
{var statearr_42336_42381 = state_42324__$1;(statearr_42336_42381[(1)] = (17));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (22)))
{var inst_42314 = (state_42324[(2)]);var state_42324__$1 = state_42324;var statearr_42337_42382 = state_42324__$1;(statearr_42337_42382[(2)] = inst_42314);
(statearr_42337_42382[(1)] = (21));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (6)))
{var inst_42253 = (state_42324[(7)]);var inst_42301 = (state_42324[(11)]);var inst_42303 = (state_42324[(8)]);var inst_42301__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42253) : topic_fn.call(null,inst_42253));var inst_42302 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_42303__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42302,inst_42301__$1);var state_42324__$1 = (function (){var statearr_42338 = state_42324;(statearr_42338[(11)] = inst_42301__$1);
(statearr_42338[(8)] = inst_42303__$1);
return statearr_42338;
})();if(cljs.core.truth_(inst_42303__$1))
{var statearr_42339_42383 = state_42324__$1;(statearr_42339_42383[(1)] = (19));
} else
{var statearr_42340_42384 = state_42324__$1;(statearr_42340_42384[(1)] = (20));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (25)))
{var inst_42312 = (state_42324[(2)]);var state_42324__$1 = state_42324;var statearr_42341_42385 = state_42324__$1;(statearr_42341_42385[(2)] = inst_42312);
cljs.core.async.impl.ioc_helpers.process_exception(state_42324__$1);
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (17)))
{var inst_42277 = (state_42324[(10)]);var inst_42286 = cljs.core.first(inst_42277);var inst_42287 = cljs.core.async.muxch_STAR_(inst_42286);var inst_42288 = cljs.core.async.close_BANG_(inst_42287);var inst_42289 = cljs.core.next(inst_42277);var inst_42263 = inst_42289;var inst_42264 = null;var inst_42265 = (0);var inst_42266 = (0);var state_42324__$1 = (function (){var statearr_42342 = state_42324;(statearr_42342[(12)] = inst_42265);
(statearr_42342[(13)] = inst_42266);
(statearr_42342[(14)] = inst_42264);
(statearr_42342[(15)] = inst_42288);
(statearr_42342[(16)] = inst_42263);
return statearr_42342;
})();var statearr_42343_42386 = state_42324__$1;(statearr_42343_42386[(2)] = null);
(statearr_42343_42386[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (3)))
{var inst_42322 = (state_42324[(2)]);var state_42324__$1 = state_42324;return cljs.core.async.impl.ioc_helpers.return_chan(state_42324__$1,inst_42322);
} else
{if((state_val_42325 === (12)))
{var inst_42297 = (state_42324[(2)]);var state_42324__$1 = state_42324;var statearr_42344_42387 = state_42324__$1;(statearr_42344_42387[(2)] = inst_42297);
(statearr_42344_42387[(1)] = (9));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (2)))
{var state_42324__$1 = state_42324;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42324__$1,(4),ch);
} else
{if((state_val_42325 === (23)))
{var inst_42301 = (state_42324[(11)]);var inst_42305 = (state_42324[(2)]);var inst_42306 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42301);var state_42324__$1 = (function (){var statearr_42345 = state_42324;(statearr_42345[(17)] = inst_42305);
return statearr_42345;
})();var statearr_42346_42388 = state_42324__$1;(statearr_42346_42388[(2)] = inst_42306);
cljs.core.async.impl.ioc_helpers.process_exception(state_42324__$1);
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (19)))
{var state_42324__$1 = state_42324;var statearr_42347_42389 = state_42324__$1;(statearr_42347_42389[(2)] = null);
(statearr_42347_42389[(1)] = (24));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (11)))
{var inst_42277 = (state_42324[(10)]);var inst_42263 = (state_42324[(16)]);var inst_42277__$1 = cljs.core.seq(inst_42263);var state_42324__$1 = (function (){var statearr_42348 = state_42324;(statearr_42348[(10)] = inst_42277__$1);
return statearr_42348;
})();if(inst_42277__$1)
{var statearr_42349_42390 = state_42324__$1;(statearr_42349_42390[(1)] = (13));
} else
{var statearr_42350_42391 = state_42324__$1;(statearr_42350_42391[(1)] = (14));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (9)))
{var inst_42299 = (state_42324[(2)]);var state_42324__$1 = state_42324;var statearr_42351_42392 = state_42324__$1;(statearr_42351_42392[(2)] = inst_42299);
(statearr_42351_42392[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (5)))
{var inst_42260 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_42261 = cljs.core.vals(inst_42260);var inst_42262 = cljs.core.seq(inst_42261);var inst_42263 = inst_42262;var inst_42264 = null;var inst_42265 = (0);var inst_42266 = (0);var state_42324__$1 = (function (){var statearr_42352 = state_42324;(statearr_42352[(12)] = inst_42265);
(statearr_42352[(13)] = inst_42266);
(statearr_42352[(14)] = inst_42264);
(statearr_42352[(16)] = inst_42263);
return statearr_42352;
})();var statearr_42353_42393 = state_42324__$1;(statearr_42353_42393[(2)] = null);
(statearr_42353_42393[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (14)))
{var state_42324__$1 = state_42324;var statearr_42357_42394 = state_42324__$1;(statearr_42357_42394[(2)] = null);
(statearr_42357_42394[(1)] = (15));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (16)))
{var inst_42277 = (state_42324[(10)]);var inst_42281 = cljs.core.chunk_first(inst_42277);var inst_42282 = cljs.core.chunk_rest(inst_42277);var inst_42283 = cljs.core.count(inst_42281);var inst_42263 = inst_42282;var inst_42264 = inst_42281;var inst_42265 = inst_42283;var inst_42266 = (0);var state_42324__$1 = (function (){var statearr_42358 = state_42324;(statearr_42358[(12)] = inst_42265);
(statearr_42358[(13)] = inst_42266);
(statearr_42358[(14)] = inst_42264);
(statearr_42358[(16)] = inst_42263);
return statearr_42358;
})();var statearr_42359_42395 = state_42324__$1;(statearr_42359_42395[(2)] = null);
(statearr_42359_42395[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (10)))
{var inst_42265 = (state_42324[(12)]);var inst_42266 = (state_42324[(13)]);var inst_42264 = (state_42324[(14)]);var inst_42263 = (state_42324[(16)]);var inst_42271 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42264,inst_42266);var inst_42272 = cljs.core.async.muxch_STAR_(inst_42271);var inst_42273 = cljs.core.async.close_BANG_(inst_42272);var inst_42274 = (inst_42266 + (1));var tmp42354 = inst_42265;var tmp42355 = inst_42264;var tmp42356 = inst_42263;var inst_42263__$1 = tmp42356;var inst_42264__$1 = tmp42355;var inst_42265__$1 = tmp42354;var inst_42266__$1 = inst_42274;var state_42324__$1 = (function (){var statearr_42360 = state_42324;(statearr_42360[(12)] = inst_42265__$1);
(statearr_42360[(13)] = inst_42266__$1);
(statearr_42360[(14)] = inst_42264__$1);
(statearr_42360[(16)] = inst_42263__$1);
(statearr_42360[(18)] = inst_42273);
return statearr_42360;
})();var statearr_42361_42396 = state_42324__$1;(statearr_42361_42396[(2)] = null);
(statearr_42361_42396[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (18)))
{var inst_42292 = (state_42324[(2)]);var state_42324__$1 = state_42324;var statearr_42362_42397 = state_42324__$1;(statearr_42362_42397[(2)] = inst_42292);
(statearr_42362_42397[(1)] = (15));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42325 === (8)))
{var inst_42265 = (state_42324[(12)]);var inst_42266 = (state_42324[(13)]);var inst_42268 = (inst_42266 < inst_42265);var inst_42269 = inst_42268;var state_42324__$1 = state_42324;if(cljs.core.truth_(inst_42269))
{var statearr_42363_42398 = state_42324__$1;(statearr_42363_42398[(1)] = (10));
} else
{var statearr_42364_42399 = state_42324__$1;(statearr_42364_42399[(1)] = (11));
}
return cljs.core.constant$keyword$844;
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
});})(c__5708__auto___42372,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___42372,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42368[(0)] = state_machine__5694__auto__);
(statearr_42368[(1)] = (1));
return statearr_42368;
});
var state_machine__5694__auto____1 = (function (state_42324){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42324);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42369){if((e42369 instanceof Object))
{var ex__5697__auto__ = e42369;var statearr_42370_42400 = state_42324;(statearr_42370_42400[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42324);
return cljs.core.constant$keyword$844;
} else
{throw e42369;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__42401 = state_42324;
state_42324 = G__42401;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42324){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42372,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_42371 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42372);
return statearr_42371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42372,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5708__auto___42538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42538,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42538,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42508){var state_val_42509 = (state_42508[(1)]);if((state_val_42509 === (7)))
{var state_42508__$1 = state_42508;var statearr_42510_42539 = state_42508__$1;(statearr_42510_42539[(2)] = null);
(statearr_42510_42539[(1)] = (8));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (1)))
{var state_42508__$1 = state_42508;var statearr_42511_42540 = state_42508__$1;(statearr_42511_42540[(2)] = null);
(statearr_42511_42540[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (4)))
{var inst_42472 = (state_42508[(7)]);var inst_42474 = (inst_42472 < cnt);var state_42508__$1 = state_42508;if(cljs.core.truth_(inst_42474))
{var statearr_42512_42541 = state_42508__$1;(statearr_42512_42541[(1)] = (6));
} else
{var statearr_42513_42542 = state_42508__$1;(statearr_42513_42542[(1)] = (7));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (15)))
{var inst_42504 = (state_42508[(2)]);var state_42508__$1 = state_42508;var statearr_42514_42543 = state_42508__$1;(statearr_42514_42543[(2)] = inst_42504);
(statearr_42514_42543[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (13)))
{var inst_42497 = cljs.core.async.close_BANG_(out);var state_42508__$1 = state_42508;var statearr_42515_42544 = state_42508__$1;(statearr_42515_42544[(2)] = inst_42497);
(statearr_42515_42544[(1)] = (15));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (6)))
{var state_42508__$1 = state_42508;var statearr_42516_42545 = state_42508__$1;(statearr_42516_42545[(2)] = null);
(statearr_42516_42545[(1)] = (11));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (3)))
{var inst_42506 = (state_42508[(2)]);var state_42508__$1 = state_42508;return cljs.core.async.impl.ioc_helpers.return_chan(state_42508__$1,inst_42506);
} else
{if((state_val_42509 === (12)))
{var inst_42494 = (state_42508[(8)]);var inst_42494__$1 = (state_42508[(2)]);var inst_42495 = cljs.core.some(cljs.core.nil_QMARK_,inst_42494__$1);var state_42508__$1 = (function (){var statearr_42517 = state_42508;(statearr_42517[(8)] = inst_42494__$1);
return statearr_42517;
})();if(cljs.core.truth_(inst_42495))
{var statearr_42518_42546 = state_42508__$1;(statearr_42518_42546[(1)] = (13));
} else
{var statearr_42519_42547 = state_42508__$1;(statearr_42519_42547[(1)] = (14));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (2)))
{var inst_42471 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));var inst_42472 = (0);var state_42508__$1 = (function (){var statearr_42520 = state_42508;(statearr_42520[(7)] = inst_42472);
(statearr_42520[(9)] = inst_42471);
return statearr_42520;
})();var statearr_42521_42548 = state_42508__$1;(statearr_42521_42548[(2)] = null);
(statearr_42521_42548[(1)] = (4));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (11)))
{var inst_42472 = (state_42508[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42508,(10),Object,null,(9));var inst_42481 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42472) : chs__$1.call(null,inst_42472));var inst_42482 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42472) : done.call(null,inst_42472));var inst_42483 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42481,inst_42482);var state_42508__$1 = state_42508;var statearr_42522_42549 = state_42508__$1;(statearr_42522_42549[(2)] = inst_42483);
cljs.core.async.impl.ioc_helpers.process_exception(state_42508__$1);
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (9)))
{var inst_42472 = (state_42508[(7)]);var inst_42485 = (state_42508[(2)]);var inst_42486 = (inst_42472 + (1));var inst_42472__$1 = inst_42486;var state_42508__$1 = (function (){var statearr_42523 = state_42508;(statearr_42523[(7)] = inst_42472__$1);
(statearr_42523[(10)] = inst_42485);
return statearr_42523;
})();var statearr_42524_42550 = state_42508__$1;(statearr_42524_42550[(2)] = null);
(statearr_42524_42550[(1)] = (4));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (5)))
{var inst_42492 = (state_42508[(2)]);var state_42508__$1 = (function (){var statearr_42525 = state_42508;(statearr_42525[(11)] = inst_42492);
return statearr_42525;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42508__$1,(12),dchan);
} else
{if((state_val_42509 === (14)))
{var inst_42494 = (state_42508[(8)]);var inst_42499 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42494);var state_42508__$1 = state_42508;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42508__$1,(16),out,inst_42499);
} else
{if((state_val_42509 === (16)))
{var inst_42501 = (state_42508[(2)]);var state_42508__$1 = (function (){var statearr_42526 = state_42508;(statearr_42526[(12)] = inst_42501);
return statearr_42526;
})();var statearr_42527_42551 = state_42508__$1;(statearr_42527_42551[(2)] = null);
(statearr_42527_42551[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (10)))
{var inst_42476 = (state_42508[(2)]);var inst_42477 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_42508__$1 = (function (){var statearr_42528 = state_42508;(statearr_42528[(13)] = inst_42476);
return statearr_42528;
})();var statearr_42529_42552 = state_42508__$1;(statearr_42529_42552[(2)] = inst_42477);
cljs.core.async.impl.ioc_helpers.process_exception(state_42508__$1);
return cljs.core.constant$keyword$844;
} else
{if((state_val_42509 === (8)))
{var inst_42490 = (state_42508[(2)]);var state_42508__$1 = state_42508;var statearr_42530_42553 = state_42508__$1;(statearr_42530_42553[(2)] = inst_42490);
(statearr_42530_42553[(1)] = (5));
return cljs.core.constant$keyword$844;
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
});})(c__5708__auto___42538,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___42538,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42534[(0)] = state_machine__5694__auto__);
(statearr_42534[(1)] = (1));
return statearr_42534;
});
var state_machine__5694__auto____1 = (function (state_42508){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42508);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42535){if((e42535 instanceof Object))
{var ex__5697__auto__ = e42535;var statearr_42536_42554 = state_42508;(statearr_42536_42554[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42508);
return cljs.core.constant$keyword$844;
} else
{throw e42535;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__42555 = state_42508;
state_42508 = G__42555;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42508){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42538,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_42537 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42538);
return statearr_42537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42538,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___42663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42663,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42663,out){
return (function (state_42639){var state_val_42640 = (state_42639[(1)]);if((state_val_42640 === (7)))
{var inst_42618 = (state_42639[(7)]);var inst_42619 = (state_42639[(8)]);var inst_42618__$1 = (state_42639[(2)]);var inst_42619__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42618__$1,(0),null);var inst_42620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42618__$1,(1),null);var inst_42621 = (inst_42619__$1 == null);var state_42639__$1 = (function (){var statearr_42641 = state_42639;(statearr_42641[(7)] = inst_42618__$1);
(statearr_42641[(9)] = inst_42620);
(statearr_42641[(8)] = inst_42619__$1);
return statearr_42641;
})();if(cljs.core.truth_(inst_42621))
{var statearr_42642_42664 = state_42639__$1;(statearr_42642_42664[(1)] = (8));
} else
{var statearr_42643_42665 = state_42639__$1;(statearr_42643_42665[(1)] = (9));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42640 === (1)))
{var inst_42610 = cljs.core.vec(chs);var inst_42611 = inst_42610;var state_42639__$1 = (function (){var statearr_42644 = state_42639;(statearr_42644[(10)] = inst_42611);
return statearr_42644;
})();var statearr_42645_42666 = state_42639__$1;(statearr_42645_42666[(2)] = null);
(statearr_42645_42666[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42640 === (4)))
{var inst_42611 = (state_42639[(10)]);var state_42639__$1 = state_42639;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_42639__$1,(7),inst_42611);
} else
{if((state_val_42640 === (6)))
{var inst_42635 = (state_42639[(2)]);var state_42639__$1 = state_42639;var statearr_42646_42667 = state_42639__$1;(statearr_42646_42667[(2)] = inst_42635);
(statearr_42646_42667[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42640 === (3)))
{var inst_42637 = (state_42639[(2)]);var state_42639__$1 = state_42639;return cljs.core.async.impl.ioc_helpers.return_chan(state_42639__$1,inst_42637);
} else
{if((state_val_42640 === (2)))
{var inst_42611 = (state_42639[(10)]);var inst_42613 = cljs.core.count(inst_42611);var inst_42614 = (inst_42613 > (0));var state_42639__$1 = state_42639;if(cljs.core.truth_(inst_42614))
{var statearr_42648_42668 = state_42639__$1;(statearr_42648_42668[(1)] = (4));
} else
{var statearr_42649_42669 = state_42639__$1;(statearr_42649_42669[(1)] = (5));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42640 === (11)))
{var inst_42611 = (state_42639[(10)]);var inst_42628 = (state_42639[(2)]);var tmp42647 = inst_42611;var inst_42611__$1 = tmp42647;var state_42639__$1 = (function (){var statearr_42650 = state_42639;(statearr_42650[(11)] = inst_42628);
(statearr_42650[(10)] = inst_42611__$1);
return statearr_42650;
})();var statearr_42651_42670 = state_42639__$1;(statearr_42651_42670[(2)] = null);
(statearr_42651_42670[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42640 === (9)))
{var inst_42619 = (state_42639[(8)]);var state_42639__$1 = state_42639;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42639__$1,(11),out,inst_42619);
} else
{if((state_val_42640 === (5)))
{var inst_42633 = cljs.core.async.close_BANG_(out);var state_42639__$1 = state_42639;var statearr_42652_42671 = state_42639__$1;(statearr_42652_42671[(2)] = inst_42633);
(statearr_42652_42671[(1)] = (6));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42640 === (10)))
{var inst_42631 = (state_42639[(2)]);var state_42639__$1 = state_42639;var statearr_42653_42672 = state_42639__$1;(statearr_42653_42672[(2)] = inst_42631);
(statearr_42653_42672[(1)] = (6));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42640 === (8)))
{var inst_42618 = (state_42639[(7)]);var inst_42620 = (state_42639[(9)]);var inst_42619 = (state_42639[(8)]);var inst_42611 = (state_42639[(10)]);var inst_42623 = (function (){var c = inst_42620;var v = inst_42619;var vec__42616 = inst_42618;var cs = inst_42611;return ((function (c,v,vec__42616,cs,inst_42618,inst_42620,inst_42619,inst_42611,state_val_42640,c__5708__auto___42663,out){
return (function (p1__42556_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42556_SHARP_);
});
;})(c,v,vec__42616,cs,inst_42618,inst_42620,inst_42619,inst_42611,state_val_42640,c__5708__auto___42663,out))
})();var inst_42624 = cljs.core.filterv(inst_42623,inst_42611);var inst_42611__$1 = inst_42624;var state_42639__$1 = (function (){var statearr_42654 = state_42639;(statearr_42654[(10)] = inst_42611__$1);
return statearr_42654;
})();var statearr_42655_42673 = state_42639__$1;(statearr_42655_42673[(2)] = null);
(statearr_42655_42673[(1)] = (2));
return cljs.core.constant$keyword$844;
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
});})(c__5708__auto___42663,out))
;return ((function (switch__5693__auto__,c__5708__auto___42663,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42659 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42659[(0)] = state_machine__5694__auto__);
(statearr_42659[(1)] = (1));
return statearr_42659;
});
var state_machine__5694__auto____1 = (function (state_42639){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42639);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42660){if((e42660 instanceof Object))
{var ex__5697__auto__ = e42660;var statearr_42661_42674 = state_42639;(statearr_42661_42674[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42639);
return cljs.core.constant$keyword$844;
} else
{throw e42660;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__42675 = state_42639;
state_42639 = G__42675;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42639){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42663,out))
})();var state__5710__auto__ = (function (){var statearr_42662 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42663);
return statearr_42662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42663,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___42768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42768,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42768,out){
return (function (state_42745){var state_val_42746 = (state_42745[(1)]);if((state_val_42746 === (7)))
{var inst_42727 = (state_42745[(7)]);var inst_42727__$1 = (state_42745[(2)]);var inst_42728 = (inst_42727__$1 == null);var inst_42729 = cljs.core.not(inst_42728);var state_42745__$1 = (function (){var statearr_42747 = state_42745;(statearr_42747[(7)] = inst_42727__$1);
return statearr_42747;
})();if(inst_42729)
{var statearr_42748_42769 = state_42745__$1;(statearr_42748_42769[(1)] = (8));
} else
{var statearr_42749_42770 = state_42745__$1;(statearr_42749_42770[(1)] = (9));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42746 === (1)))
{var inst_42722 = (0);var state_42745__$1 = (function (){var statearr_42750 = state_42745;(statearr_42750[(8)] = inst_42722);
return statearr_42750;
})();var statearr_42751_42771 = state_42745__$1;(statearr_42751_42771[(2)] = null);
(statearr_42751_42771[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42746 === (4)))
{var state_42745__$1 = state_42745;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42745__$1,(7),ch);
} else
{if((state_val_42746 === (6)))
{var inst_42740 = (state_42745[(2)]);var state_42745__$1 = state_42745;var statearr_42752_42772 = state_42745__$1;(statearr_42752_42772[(2)] = inst_42740);
(statearr_42752_42772[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42746 === (3)))
{var inst_42742 = (state_42745[(2)]);var inst_42743 = cljs.core.async.close_BANG_(out);var state_42745__$1 = (function (){var statearr_42753 = state_42745;(statearr_42753[(9)] = inst_42742);
return statearr_42753;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_42745__$1,inst_42743);
} else
{if((state_val_42746 === (2)))
{var inst_42722 = (state_42745[(8)]);var inst_42724 = (inst_42722 < n);var state_42745__$1 = state_42745;if(cljs.core.truth_(inst_42724))
{var statearr_42754_42773 = state_42745__$1;(statearr_42754_42773[(1)] = (4));
} else
{var statearr_42755_42774 = state_42745__$1;(statearr_42755_42774[(1)] = (5));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42746 === (11)))
{var inst_42722 = (state_42745[(8)]);var inst_42732 = (state_42745[(2)]);var inst_42733 = (inst_42722 + (1));var inst_42722__$1 = inst_42733;var state_42745__$1 = (function (){var statearr_42756 = state_42745;(statearr_42756[(8)] = inst_42722__$1);
(statearr_42756[(10)] = inst_42732);
return statearr_42756;
})();var statearr_42757_42775 = state_42745__$1;(statearr_42757_42775[(2)] = null);
(statearr_42757_42775[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42746 === (9)))
{var state_42745__$1 = state_42745;var statearr_42758_42776 = state_42745__$1;(statearr_42758_42776[(2)] = null);
(statearr_42758_42776[(1)] = (10));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42746 === (5)))
{var state_42745__$1 = state_42745;var statearr_42759_42777 = state_42745__$1;(statearr_42759_42777[(2)] = null);
(statearr_42759_42777[(1)] = (6));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42746 === (10)))
{var inst_42737 = (state_42745[(2)]);var state_42745__$1 = state_42745;var statearr_42760_42778 = state_42745__$1;(statearr_42760_42778[(2)] = inst_42737);
(statearr_42760_42778[(1)] = (6));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42746 === (8)))
{var inst_42727 = (state_42745[(7)]);var state_42745__$1 = state_42745;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42745__$1,(11),out,inst_42727);
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
});})(c__5708__auto___42768,out))
;return ((function (switch__5693__auto__,c__5708__auto___42768,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42764 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_42764[(0)] = state_machine__5694__auto__);
(statearr_42764[(1)] = (1));
return statearr_42764;
});
var state_machine__5694__auto____1 = (function (state_42745){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42745);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42765){if((e42765 instanceof Object))
{var ex__5697__auto__ = e42765;var statearr_42766_42779 = state_42745;(statearr_42766_42779[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42745);
return cljs.core.constant$keyword$844;
} else
{throw e42765;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__42780 = state_42745;
state_42745 = G__42780;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42745){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42768,out))
})();var state__5710__auto__ = (function (){var statearr_42767 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42768);
return statearr_42767;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42768,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___42877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42877,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42877,out){
return (function (state_42852){var state_val_42853 = (state_42852[(1)]);if((state_val_42853 === (7)))
{var inst_42847 = (state_42852[(2)]);var state_42852__$1 = state_42852;var statearr_42854_42878 = state_42852__$1;(statearr_42854_42878[(2)] = inst_42847);
(statearr_42854_42878[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42853 === (1)))
{var inst_42829 = null;var state_42852__$1 = (function (){var statearr_42855 = state_42852;(statearr_42855[(7)] = inst_42829);
return statearr_42855;
})();var statearr_42856_42879 = state_42852__$1;(statearr_42856_42879[(2)] = null);
(statearr_42856_42879[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42853 === (4)))
{var inst_42832 = (state_42852[(8)]);var inst_42832__$1 = (state_42852[(2)]);var inst_42833 = (inst_42832__$1 == null);var inst_42834 = cljs.core.not(inst_42833);var state_42852__$1 = (function (){var statearr_42857 = state_42852;(statearr_42857[(8)] = inst_42832__$1);
return statearr_42857;
})();if(inst_42834)
{var statearr_42858_42880 = state_42852__$1;(statearr_42858_42880[(1)] = (5));
} else
{var statearr_42859_42881 = state_42852__$1;(statearr_42859_42881[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42853 === (6)))
{var state_42852__$1 = state_42852;var statearr_42860_42882 = state_42852__$1;(statearr_42860_42882[(2)] = null);
(statearr_42860_42882[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42853 === (3)))
{var inst_42849 = (state_42852[(2)]);var inst_42850 = cljs.core.async.close_BANG_(out);var state_42852__$1 = (function (){var statearr_42861 = state_42852;(statearr_42861[(9)] = inst_42849);
return statearr_42861;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_42852__$1,inst_42850);
} else
{if((state_val_42853 === (2)))
{var state_42852__$1 = state_42852;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42852__$1,(4),ch);
} else
{if((state_val_42853 === (11)))
{var inst_42832 = (state_42852[(8)]);var inst_42841 = (state_42852[(2)]);var inst_42829 = inst_42832;var state_42852__$1 = (function (){var statearr_42862 = state_42852;(statearr_42862[(10)] = inst_42841);
(statearr_42862[(7)] = inst_42829);
return statearr_42862;
})();var statearr_42863_42883 = state_42852__$1;(statearr_42863_42883[(2)] = null);
(statearr_42863_42883[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42853 === (9)))
{var inst_42832 = (state_42852[(8)]);var state_42852__$1 = state_42852;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42852__$1,(11),out,inst_42832);
} else
{if((state_val_42853 === (5)))
{var inst_42832 = (state_42852[(8)]);var inst_42829 = (state_42852[(7)]);var inst_42836 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42832,inst_42829);var state_42852__$1 = state_42852;if(inst_42836)
{var statearr_42865_42884 = state_42852__$1;(statearr_42865_42884[(1)] = (8));
} else
{var statearr_42866_42885 = state_42852__$1;(statearr_42866_42885[(1)] = (9));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42853 === (10)))
{var inst_42844 = (state_42852[(2)]);var state_42852__$1 = state_42852;var statearr_42867_42886 = state_42852__$1;(statearr_42867_42886[(2)] = inst_42844);
(statearr_42867_42886[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42853 === (8)))
{var inst_42829 = (state_42852[(7)]);var tmp42864 = inst_42829;var inst_42829__$1 = tmp42864;var state_42852__$1 = (function (){var statearr_42868 = state_42852;(statearr_42868[(7)] = inst_42829__$1);
return statearr_42868;
})();var statearr_42869_42887 = state_42852__$1;(statearr_42869_42887[(2)] = null);
(statearr_42869_42887[(1)] = (2));
return cljs.core.constant$keyword$844;
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
});})(c__5708__auto___42877,out))
;return ((function (switch__5693__auto__,c__5708__auto___42877,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42873 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_42873[(0)] = state_machine__5694__auto__);
(statearr_42873[(1)] = (1));
return statearr_42873;
});
var state_machine__5694__auto____1 = (function (state_42852){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42852);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42874){if((e42874 instanceof Object))
{var ex__5697__auto__ = e42874;var statearr_42875_42888 = state_42852;(statearr_42875_42888[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42852);
return cljs.core.constant$keyword$844;
} else
{throw e42874;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__42889 = state_42852;
state_42852 = G__42889;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42852){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42877,out))
})();var state__5710__auto__ = (function (){var statearr_42876 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42877);
return statearr_42876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42877,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___43024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43024,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43024,out){
return (function (state_42994){var state_val_42995 = (state_42994[(1)]);if((state_val_42995 === (7)))
{var inst_42990 = (state_42994[(2)]);var state_42994__$1 = state_42994;var statearr_42996_43025 = state_42994__$1;(statearr_42996_43025[(2)] = inst_42990);
(statearr_42996_43025[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42995 === (1)))
{var inst_42957 = (new Array(n));var inst_42958 = inst_42957;var inst_42959 = (0);var state_42994__$1 = (function (){var statearr_42997 = state_42994;(statearr_42997[(7)] = inst_42959);
(statearr_42997[(8)] = inst_42958);
return statearr_42997;
})();var statearr_42998_43026 = state_42994__$1;(statearr_42998_43026[(2)] = null);
(statearr_42998_43026[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42995 === (4)))
{var inst_42962 = (state_42994[(9)]);var inst_42962__$1 = (state_42994[(2)]);var inst_42963 = (inst_42962__$1 == null);var inst_42964 = cljs.core.not(inst_42963);var state_42994__$1 = (function (){var statearr_42999 = state_42994;(statearr_42999[(9)] = inst_42962__$1);
return statearr_42999;
})();if(inst_42964)
{var statearr_43000_43027 = state_42994__$1;(statearr_43000_43027[(1)] = (5));
} else
{var statearr_43001_43028 = state_42994__$1;(statearr_43001_43028[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42995 === (15)))
{var inst_42984 = (state_42994[(2)]);var state_42994__$1 = state_42994;var statearr_43002_43029 = state_42994__$1;(statearr_43002_43029[(2)] = inst_42984);
(statearr_43002_43029[(1)] = (14));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42995 === (13)))
{var state_42994__$1 = state_42994;var statearr_43003_43030 = state_42994__$1;(statearr_43003_43030[(2)] = null);
(statearr_43003_43030[(1)] = (14));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42995 === (6)))
{var inst_42959 = (state_42994[(7)]);var inst_42980 = (inst_42959 > (0));var state_42994__$1 = state_42994;if(cljs.core.truth_(inst_42980))
{var statearr_43004_43031 = state_42994__$1;(statearr_43004_43031[(1)] = (12));
} else
{var statearr_43005_43032 = state_42994__$1;(statearr_43005_43032[(1)] = (13));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42995 === (3)))
{var inst_42992 = (state_42994[(2)]);var state_42994__$1 = state_42994;return cljs.core.async.impl.ioc_helpers.return_chan(state_42994__$1,inst_42992);
} else
{if((state_val_42995 === (12)))
{var inst_42958 = (state_42994[(8)]);var inst_42982 = cljs.core.vec(inst_42958);var state_42994__$1 = state_42994;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42994__$1,(15),out,inst_42982);
} else
{if((state_val_42995 === (2)))
{var state_42994__$1 = state_42994;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42994__$1,(4),ch);
} else
{if((state_val_42995 === (11)))
{var inst_42974 = (state_42994[(2)]);var inst_42975 = (new Array(n));var inst_42958 = inst_42975;var inst_42959 = (0);var state_42994__$1 = (function (){var statearr_43006 = state_42994;(statearr_43006[(7)] = inst_42959);
(statearr_43006[(8)] = inst_42958);
(statearr_43006[(10)] = inst_42974);
return statearr_43006;
})();var statearr_43007_43033 = state_42994__$1;(statearr_43007_43033[(2)] = null);
(statearr_43007_43033[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42995 === (9)))
{var inst_42958 = (state_42994[(8)]);var inst_42972 = cljs.core.vec(inst_42958);var state_42994__$1 = state_42994;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42994__$1,(11),out,inst_42972);
} else
{if((state_val_42995 === (5)))
{var inst_42959 = (state_42994[(7)]);var inst_42962 = (state_42994[(9)]);var inst_42958 = (state_42994[(8)]);var inst_42967 = (state_42994[(11)]);var inst_42966 = (inst_42958[inst_42959] = inst_42962);var inst_42967__$1 = (inst_42959 + (1));var inst_42968 = (inst_42967__$1 < n);var state_42994__$1 = (function (){var statearr_43008 = state_42994;(statearr_43008[(11)] = inst_42967__$1);
(statearr_43008[(12)] = inst_42966);
return statearr_43008;
})();if(cljs.core.truth_(inst_42968))
{var statearr_43009_43034 = state_42994__$1;(statearr_43009_43034[(1)] = (8));
} else
{var statearr_43010_43035 = state_42994__$1;(statearr_43010_43035[(1)] = (9));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_42995 === (14)))
{var inst_42987 = (state_42994[(2)]);var inst_42988 = cljs.core.async.close_BANG_(out);var state_42994__$1 = (function (){var statearr_43012 = state_42994;(statearr_43012[(13)] = inst_42987);
return statearr_43012;
})();var statearr_43013_43036 = state_42994__$1;(statearr_43013_43036[(2)] = inst_42988);
(statearr_43013_43036[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42995 === (10)))
{var inst_42978 = (state_42994[(2)]);var state_42994__$1 = state_42994;var statearr_43014_43037 = state_42994__$1;(statearr_43014_43037[(2)] = inst_42978);
(statearr_43014_43037[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_42995 === (8)))
{var inst_42958 = (state_42994[(8)]);var inst_42967 = (state_42994[(11)]);var tmp43011 = inst_42958;var inst_42958__$1 = tmp43011;var inst_42959 = inst_42967;var state_42994__$1 = (function (){var statearr_43015 = state_42994;(statearr_43015[(7)] = inst_42959);
(statearr_43015[(8)] = inst_42958__$1);
return statearr_43015;
})();var statearr_43016_43038 = state_42994__$1;(statearr_43016_43038[(2)] = null);
(statearr_43016_43038[(1)] = (2));
return cljs.core.constant$keyword$844;
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
});})(c__5708__auto___43024,out))
;return ((function (switch__5693__auto__,c__5708__auto___43024,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43020[(0)] = state_machine__5694__auto__);
(statearr_43020[(1)] = (1));
return statearr_43020;
});
var state_machine__5694__auto____1 = (function (state_42994){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42994);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43021){if((e43021 instanceof Object))
{var ex__5697__auto__ = e43021;var statearr_43022_43039 = state_42994;(statearr_43022_43039[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42994);
return cljs.core.constant$keyword$844;
} else
{throw e43021;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__43040 = state_42994;
state_42994 = G__43040;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42994){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43024,out))
})();var state__5710__auto__ = (function (){var statearr_43023 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43024);
return statearr_43023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43024,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___43183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43183,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43183,out){
return (function (state_43153){var state_val_43154 = (state_43153[(1)]);if((state_val_43154 === (7)))
{var inst_43149 = (state_43153[(2)]);var state_43153__$1 = state_43153;var statearr_43155_43184 = state_43153__$1;(statearr_43155_43184[(2)] = inst_43149);
(statearr_43155_43184[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_43154 === (1)))
{var inst_43112 = [];var inst_43113 = inst_43112;var inst_43114 = cljs.core.constant$keyword$857;var state_43153__$1 = (function (){var statearr_43156 = state_43153;(statearr_43156[(7)] = inst_43113);
(statearr_43156[(8)] = inst_43114);
return statearr_43156;
})();var statearr_43157_43185 = state_43153__$1;(statearr_43157_43185[(2)] = null);
(statearr_43157_43185[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_43154 === (4)))
{var inst_43117 = (state_43153[(9)]);var inst_43117__$1 = (state_43153[(2)]);var inst_43118 = (inst_43117__$1 == null);var inst_43119 = cljs.core.not(inst_43118);var state_43153__$1 = (function (){var statearr_43158 = state_43153;(statearr_43158[(9)] = inst_43117__$1);
return statearr_43158;
})();if(inst_43119)
{var statearr_43159_43186 = state_43153__$1;(statearr_43159_43186[(1)] = (5));
} else
{var statearr_43160_43187 = state_43153__$1;(statearr_43160_43187[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_43154 === (15)))
{var inst_43143 = (state_43153[(2)]);var state_43153__$1 = state_43153;var statearr_43161_43188 = state_43153__$1;(statearr_43161_43188[(2)] = inst_43143);
(statearr_43161_43188[(1)] = (14));
return cljs.core.constant$keyword$844;
} else
{if((state_val_43154 === (13)))
{var state_43153__$1 = state_43153;var statearr_43162_43189 = state_43153__$1;(statearr_43162_43189[(2)] = null);
(statearr_43162_43189[(1)] = (14));
return cljs.core.constant$keyword$844;
} else
{if((state_val_43154 === (6)))
{var inst_43113 = (state_43153[(7)]);var inst_43138 = inst_43113.length;var inst_43139 = (inst_43138 > (0));var state_43153__$1 = state_43153;if(cljs.core.truth_(inst_43139))
{var statearr_43163_43190 = state_43153__$1;(statearr_43163_43190[(1)] = (12));
} else
{var statearr_43164_43191 = state_43153__$1;(statearr_43164_43191[(1)] = (13));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_43154 === (3)))
{var inst_43151 = (state_43153[(2)]);var state_43153__$1 = state_43153;return cljs.core.async.impl.ioc_helpers.return_chan(state_43153__$1,inst_43151);
} else
{if((state_val_43154 === (12)))
{var inst_43113 = (state_43153[(7)]);var inst_43141 = cljs.core.vec(inst_43113);var state_43153__$1 = state_43153;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43153__$1,(15),out,inst_43141);
} else
{if((state_val_43154 === (2)))
{var state_43153__$1 = state_43153;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43153__$1,(4),ch);
} else
{if((state_val_43154 === (11)))
{var inst_43117 = (state_43153[(9)]);var inst_43121 = (state_43153[(10)]);var inst_43131 = (state_43153[(2)]);var inst_43132 = [];var inst_43133 = inst_43132.push(inst_43117);var inst_43113 = inst_43132;var inst_43114 = inst_43121;var state_43153__$1 = (function (){var statearr_43165 = state_43153;(statearr_43165[(11)] = inst_43131);
(statearr_43165[(7)] = inst_43113);
(statearr_43165[(12)] = inst_43133);
(statearr_43165[(8)] = inst_43114);
return statearr_43165;
})();var statearr_43166_43192 = state_43153__$1;(statearr_43166_43192[(2)] = null);
(statearr_43166_43192[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_43154 === (9)))
{var inst_43113 = (state_43153[(7)]);var inst_43129 = cljs.core.vec(inst_43113);var state_43153__$1 = state_43153;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43153__$1,(11),out,inst_43129);
} else
{if((state_val_43154 === (5)))
{var inst_43117 = (state_43153[(9)]);var inst_43114 = (state_43153[(8)]);var inst_43121 = (state_43153[(10)]);var inst_43121__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43117) : f.call(null,inst_43117));var inst_43122 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43121__$1,inst_43114);var inst_43123 = cljs.core.keyword_identical_QMARK_(inst_43114,cljs.core.constant$keyword$857);var inst_43124 = (inst_43122) || (inst_43123);var state_43153__$1 = (function (){var statearr_43167 = state_43153;(statearr_43167[(10)] = inst_43121__$1);
return statearr_43167;
})();if(cljs.core.truth_(inst_43124))
{var statearr_43168_43193 = state_43153__$1;(statearr_43168_43193[(1)] = (8));
} else
{var statearr_43169_43194 = state_43153__$1;(statearr_43169_43194[(1)] = (9));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_43154 === (14)))
{var inst_43146 = (state_43153[(2)]);var inst_43147 = cljs.core.async.close_BANG_(out);var state_43153__$1 = (function (){var statearr_43171 = state_43153;(statearr_43171[(13)] = inst_43146);
return statearr_43171;
})();var statearr_43172_43195 = state_43153__$1;(statearr_43172_43195[(2)] = inst_43147);
(statearr_43172_43195[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_43154 === (10)))
{var inst_43136 = (state_43153[(2)]);var state_43153__$1 = state_43153;var statearr_43173_43196 = state_43153__$1;(statearr_43173_43196[(2)] = inst_43136);
(statearr_43173_43196[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_43154 === (8)))
{var inst_43117 = (state_43153[(9)]);var inst_43113 = (state_43153[(7)]);var inst_43121 = (state_43153[(10)]);var inst_43126 = inst_43113.push(inst_43117);var tmp43170 = inst_43113;var inst_43113__$1 = tmp43170;var inst_43114 = inst_43121;var state_43153__$1 = (function (){var statearr_43174 = state_43153;(statearr_43174[(14)] = inst_43126);
(statearr_43174[(7)] = inst_43113__$1);
(statearr_43174[(8)] = inst_43114);
return statearr_43174;
})();var statearr_43175_43197 = state_43153__$1;(statearr_43175_43197[(2)] = null);
(statearr_43175_43197[(1)] = (2));
return cljs.core.constant$keyword$844;
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
});})(c__5708__auto___43183,out))
;return ((function (switch__5693__auto__,c__5708__auto___43183,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43179[(0)] = state_machine__5694__auto__);
(statearr_43179[(1)] = (1));
return statearr_43179;
});
var state_machine__5694__auto____1 = (function (state_43153){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43153);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43180){if((e43180 instanceof Object))
{var ex__5697__auto__ = e43180;var statearr_43181_43198 = state_43153;(statearr_43181_43198[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43153);
return cljs.core.constant$keyword$844;
} else
{throw e43180;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__43199 = state_43153;
state_43153 = G__43199;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43153){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43183,out))
})();var state__5710__auto__ = (function (){var statearr_43182 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43183);
return statearr_43182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43183,out))
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
