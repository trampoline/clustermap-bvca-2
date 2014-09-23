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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t40577 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40577 = (function (f,fn_handler,meta40578){
this.f = f;
this.fn_handler = fn_handler;
this.meta40578 = meta40578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40577.cljs$lang$type = true;
cljs.core.async.t40577.cljs$lang$ctorStr = "cljs.core.async/t40577";
cljs.core.async.t40577.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40577");
});
cljs.core.async.t40577.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t40577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t40577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40579){var self__ = this;
var _40579__$1 = this;return self__.meta40578;
});
cljs.core.async.t40577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40579,meta40578__$1){var self__ = this;
var _40579__$1 = this;return (new cljs.core.async.t40577(self__.f,self__.fn_handler,meta40578__$1));
});
cljs.core.async.__GT_t40577 = (function __GT_t40577(f__$1,fn_handler__$1,meta40578){return (new cljs.core.async.t40577(f__$1,fn_handler__$1,meta40578));
});
}
return (new cljs.core.async.t40577(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__40581 = buff;if(G__40581)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__40581.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__40581.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40581);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40581);
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
{var val_40582 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40582) : fn1.call(null,val_40582));
} else
{cljs.core.async.impl.dispatch.run(((function (val_40582,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40582) : fn1.call(null,val_40582));
});})(val_40582,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___40583 = n;var x_40584 = (0);while(true){
if((x_40584 < n__4414__auto___40583))
{(a[x_40584] = (0));
{
var G__40585 = (x_40584 + (1));
x_40584 = G__40585;
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
var G__40586 = (i + (1));
i = G__40586;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));if(typeof cljs.core.async.t40590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40590 = (function (flag,alt_flag,meta40591){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta40591 = meta40591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40590.cljs$lang$type = true;
cljs.core.async.t40590.cljs$lang$ctorStr = "cljs.core.async/t40590";
cljs.core.async.t40590.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40590");
});})(flag))
;
cljs.core.async.t40590.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;
cljs.core.async.t40590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));
return true;
});})(flag))
;
cljs.core.async.t40590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40592){var self__ = this;
var _40592__$1 = this;return self__.meta40591;
});})(flag))
;
cljs.core.async.t40590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40592,meta40591__$1){var self__ = this;
var _40592__$1 = this;return (new cljs.core.async.t40590(self__.flag,self__.alt_flag,meta40591__$1));
});})(flag))
;
cljs.core.async.__GT_t40590 = ((function (flag){
return (function __GT_t40590(flag__$1,alt_flag__$1,meta40591){return (new cljs.core.async.t40590(flag__$1,alt_flag__$1,meta40591));
});})(flag))
;
}
return (new cljs.core.async.t40590(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t40596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40596 = (function (cb,flag,alt_handler,meta40597){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta40597 = meta40597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40596.cljs$lang$type = true;
cljs.core.async.t40596.cljs$lang$ctorStr = "cljs.core.async/t40596";
cljs.core.async.t40596.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40596");
});
cljs.core.async.t40596.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t40596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t40596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40598){var self__ = this;
var _40598__$1 = this;return self__.meta40597;
});
cljs.core.async.t40596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40598,meta40597__$1){var self__ = this;
var _40598__$1 = this;return (new cljs.core.async.t40596(self__.cb,self__.flag,self__.alt_handler,meta40597__$1));
});
cljs.core.async.__GT_t40596 = (function __GT_t40596(cb__$1,flag__$1,alt_handler__$1,meta40597){return (new cljs.core.async.t40596(cb__$1,flag__$1,alt_handler__$1,meta40597));
});
}
return (new cljs.core.async.t40596(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$842.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40599_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40599_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40599_SHARP_,port], null)));
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
var G__40600 = (i + (1));
i = G__40600;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$827))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3546__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$827], null));
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
var alts_BANG___delegate = function (ports,p__40601){var map__40603 = p__40601;var map__40603__$1 = ((cljs.core.seq_QMARK_(map__40603))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40603):map__40603);var opts = map__40603__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__40601 = null;if (arguments.length > 1) {
  p__40601 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__40601);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__40604){
var ports = cljs.core.first(arglist__40604);
var p__40601 = cljs.core.rest(arglist__40604);
return alts_BANG___delegate(ports,p__40601);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t40612 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40612 = (function (ch,f,map_LT_,meta40613){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40613 = meta40613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40612.cljs$lang$type = true;
cljs.core.async.t40612.cljs$lang$ctorStr = "cljs.core.async/t40612";
cljs.core.async.t40612.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40612");
});
cljs.core.async.t40612.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t40612.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t40615 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40615 = (function (fn1,_,meta40613,ch,f,map_LT_,meta40616){
this.fn1 = fn1;
this._ = _;
this.meta40613 = meta40613;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40616 = meta40616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40615.cljs$lang$type = true;
cljs.core.async.t40615.cljs$lang$ctorStr = "cljs.core.async/t40615";
cljs.core.async.t40615.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40615");
});})(___$1))
;
cljs.core.async.t40615.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t40615.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t40615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__40605_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__40605_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40605_SHARP_) : self__.f.call(null,p1__40605_SHARP_)))) : f1.call(null,(((p1__40605_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40605_SHARP_) : self__.f.call(null,p1__40605_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t40615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40617){var self__ = this;
var _40617__$1 = this;return self__.meta40616;
});})(___$1))
;
cljs.core.async.t40615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40617,meta40616__$1){var self__ = this;
var _40617__$1 = this;return (new cljs.core.async.t40615(self__.fn1,self__._,self__.meta40613,self__.ch,self__.f,self__.map_LT_,meta40616__$1));
});})(___$1))
;
cljs.core.async.__GT_t40615 = ((function (___$1){
return (function __GT_t40615(fn1__$1,___$2,meta40613__$1,ch__$2,f__$2,map_LT___$2,meta40616){return (new cljs.core.async.t40615(fn1__$1,___$2,meta40613__$1,ch__$2,f__$2,map_LT___$2,meta40616));
});})(___$1))
;
}
return (new cljs.core.async.t40615(fn1,___$1,self__.meta40613,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t40612.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40614){var self__ = this;
var _40614__$1 = this;return self__.meta40613;
});
cljs.core.async.t40612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40614,meta40613__$1){var self__ = this;
var _40614__$1 = this;return (new cljs.core.async.t40612(self__.ch,self__.f,self__.map_LT_,meta40613__$1));
});
cljs.core.async.__GT_t40612 = (function __GT_t40612(ch__$1,f__$1,map_LT___$1,meta40613){return (new cljs.core.async.t40612(ch__$1,f__$1,map_LT___$1,meta40613));
});
}
return (new cljs.core.async.t40612(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t40621 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40621 = (function (ch,f,map_GT_,meta40622){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta40622 = meta40622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40621.cljs$lang$type = true;
cljs.core.async.t40621.cljs$lang$ctorStr = "cljs.core.async/t40621";
cljs.core.async.t40621.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40621");
});
cljs.core.async.t40621.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t40621.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t40621.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40623){var self__ = this;
var _40623__$1 = this;return self__.meta40622;
});
cljs.core.async.t40621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40623,meta40622__$1){var self__ = this;
var _40623__$1 = this;return (new cljs.core.async.t40621(self__.ch,self__.f,self__.map_GT_,meta40622__$1));
});
cljs.core.async.__GT_t40621 = (function __GT_t40621(ch__$1,f__$1,map_GT___$1,meta40622){return (new cljs.core.async.t40621(ch__$1,f__$1,map_GT___$1,meta40622));
});
}
return (new cljs.core.async.t40621(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t40627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40627 = (function (ch,p,filter_GT_,meta40628){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta40628 = meta40628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40627.cljs$lang$type = true;
cljs.core.async.t40627.cljs$lang$ctorStr = "cljs.core.async/t40627";
cljs.core.async.t40627.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t40627");
});
cljs.core.async.t40627.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t40627.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t40627.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40629){var self__ = this;
var _40629__$1 = this;return self__.meta40628;
});
cljs.core.async.t40627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40629,meta40628__$1){var self__ = this;
var _40629__$1 = this;return (new cljs.core.async.t40627(self__.ch,self__.p,self__.filter_GT_,meta40628__$1));
});
cljs.core.async.__GT_t40627 = (function __GT_t40627(ch__$1,p__$1,filter_GT___$1,meta40628){return (new cljs.core.async.t40627(ch__$1,p__$1,filter_GT___$1,meta40628));
});
}
return (new cljs.core.async.t40627(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___40712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___40712,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___40712,out){
return (function (state_40691){var state_val_40692 = (state_40691[(1)]);if((state_val_40692 === (7)))
{var inst_40687 = (state_40691[(2)]);var state_40691__$1 = state_40691;var statearr_40693_40713 = state_40691__$1;(statearr_40693_40713[(2)] = inst_40687);
(statearr_40693_40713[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40692 === (1)))
{var state_40691__$1 = state_40691;var statearr_40694_40714 = state_40691__$1;(statearr_40694_40714[(2)] = null);
(statearr_40694_40714[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40692 === (4)))
{var inst_40673 = (state_40691[(7)]);var inst_40673__$1 = (state_40691[(2)]);var inst_40674 = (inst_40673__$1 == null);var state_40691__$1 = (function (){var statearr_40695 = state_40691;(statearr_40695[(7)] = inst_40673__$1);
return statearr_40695;
})();if(cljs.core.truth_(inst_40674))
{var statearr_40696_40715 = state_40691__$1;(statearr_40696_40715[(1)] = (5));
} else
{var statearr_40697_40716 = state_40691__$1;(statearr_40697_40716[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_40692 === (6)))
{var inst_40673 = (state_40691[(7)]);var inst_40678 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40673) : p.call(null,inst_40673));var state_40691__$1 = state_40691;if(cljs.core.truth_(inst_40678))
{var statearr_40698_40717 = state_40691__$1;(statearr_40698_40717[(1)] = (8));
} else
{var statearr_40699_40718 = state_40691__$1;(statearr_40699_40718[(1)] = (9));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_40692 === (3)))
{var inst_40689 = (state_40691[(2)]);var state_40691__$1 = state_40691;return cljs.core.async.impl.ioc_helpers.return_chan(state_40691__$1,inst_40689);
} else
{if((state_val_40692 === (2)))
{var state_40691__$1 = state_40691;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40691__$1,(4),ch);
} else
{if((state_val_40692 === (11)))
{var inst_40681 = (state_40691[(2)]);var state_40691__$1 = state_40691;var statearr_40700_40719 = state_40691__$1;(statearr_40700_40719[(2)] = inst_40681);
(statearr_40700_40719[(1)] = (10));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40692 === (9)))
{var state_40691__$1 = state_40691;var statearr_40701_40720 = state_40691__$1;(statearr_40701_40720[(2)] = null);
(statearr_40701_40720[(1)] = (10));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40692 === (5)))
{var inst_40676 = cljs.core.async.close_BANG_(out);var state_40691__$1 = state_40691;var statearr_40702_40721 = state_40691__$1;(statearr_40702_40721[(2)] = inst_40676);
(statearr_40702_40721[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40692 === (10)))
{var inst_40684 = (state_40691[(2)]);var state_40691__$1 = (function (){var statearr_40703 = state_40691;(statearr_40703[(8)] = inst_40684);
return statearr_40703;
})();var statearr_40704_40722 = state_40691__$1;(statearr_40704_40722[(2)] = null);
(statearr_40704_40722[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40692 === (8)))
{var inst_40673 = (state_40691[(7)]);var state_40691__$1 = state_40691;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40691__$1,(11),out,inst_40673);
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
});})(c__5708__auto___40712,out))
;return ((function (switch__5693__auto__,c__5708__auto___40712,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_40708 = [null,null,null,null,null,null,null,null,null];(statearr_40708[(0)] = state_machine__5694__auto__);
(statearr_40708[(1)] = (1));
return statearr_40708;
});
var state_machine__5694__auto____1 = (function (state_40691){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_40691);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e40709){if((e40709 instanceof Object))
{var ex__5697__auto__ = e40709;var statearr_40710_40723 = state_40691;(statearr_40710_40723[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40691);
return cljs.core.constant$keyword$836;
} else
{throw e40709;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__40724 = state_40691;
state_40691 = G__40724;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_40691){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_40691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___40712,out))
})();var state__5710__auto__ = (function (){var statearr_40711 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_40711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___40712);
return statearr_40711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___40712,out))
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
return (function (state_40876){var state_val_40877 = (state_40876[(1)]);if((state_val_40877 === (7)))
{var inst_40872 = (state_40876[(2)]);var state_40876__$1 = state_40876;var statearr_40878_40915 = state_40876__$1;(statearr_40878_40915[(2)] = inst_40872);
(statearr_40878_40915[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (20)))
{var inst_40847 = (state_40876[(7)]);var inst_40858 = (state_40876[(2)]);var inst_40859 = cljs.core.next(inst_40847);var inst_40833 = inst_40859;var inst_40834 = null;var inst_40835 = (0);var inst_40836 = (0);var state_40876__$1 = (function (){var statearr_40879 = state_40876;(statearr_40879[(8)] = inst_40858);
(statearr_40879[(9)] = inst_40833);
(statearr_40879[(10)] = inst_40835);
(statearr_40879[(11)] = inst_40834);
(statearr_40879[(12)] = inst_40836);
return statearr_40879;
})();var statearr_40880_40916 = state_40876__$1;(statearr_40880_40916[(2)] = null);
(statearr_40880_40916[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (1)))
{var state_40876__$1 = state_40876;var statearr_40881_40917 = state_40876__$1;(statearr_40881_40917[(2)] = null);
(statearr_40881_40917[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (4)))
{var inst_40822 = (state_40876[(13)]);var inst_40822__$1 = (state_40876[(2)]);var inst_40823 = (inst_40822__$1 == null);var state_40876__$1 = (function (){var statearr_40885 = state_40876;(statearr_40885[(13)] = inst_40822__$1);
return statearr_40885;
})();if(cljs.core.truth_(inst_40823))
{var statearr_40886_40918 = state_40876__$1;(statearr_40886_40918[(1)] = (5));
} else
{var statearr_40887_40919 = state_40876__$1;(statearr_40887_40919[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (15)))
{var state_40876__$1 = state_40876;var statearr_40888_40920 = state_40876__$1;(statearr_40888_40920[(2)] = null);
(statearr_40888_40920[(1)] = (16));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (13)))
{var inst_40833 = (state_40876[(9)]);var inst_40835 = (state_40876[(10)]);var inst_40834 = (state_40876[(11)]);var inst_40836 = (state_40876[(12)]);var inst_40843 = (state_40876[(2)]);var inst_40844 = (inst_40836 + (1));var tmp40882 = inst_40833;var tmp40883 = inst_40835;var tmp40884 = inst_40834;var inst_40833__$1 = tmp40882;var inst_40834__$1 = tmp40884;var inst_40835__$1 = tmp40883;var inst_40836__$1 = inst_40844;var state_40876__$1 = (function (){var statearr_40889 = state_40876;(statearr_40889[(9)] = inst_40833__$1);
(statearr_40889[(10)] = inst_40835__$1);
(statearr_40889[(11)] = inst_40834__$1);
(statearr_40889[(12)] = inst_40836__$1);
(statearr_40889[(14)] = inst_40843);
return statearr_40889;
})();var statearr_40890_40921 = state_40876__$1;(statearr_40890_40921[(2)] = null);
(statearr_40890_40921[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (6)))
{var inst_40822 = (state_40876[(13)]);var inst_40827 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40822) : f.call(null,inst_40822));var inst_40832 = cljs.core.seq(inst_40827);var inst_40833 = inst_40832;var inst_40834 = null;var inst_40835 = (0);var inst_40836 = (0);var state_40876__$1 = (function (){var statearr_40891 = state_40876;(statearr_40891[(9)] = inst_40833);
(statearr_40891[(10)] = inst_40835);
(statearr_40891[(11)] = inst_40834);
(statearr_40891[(12)] = inst_40836);
return statearr_40891;
})();var statearr_40892_40922 = state_40876__$1;(statearr_40892_40922[(2)] = null);
(statearr_40892_40922[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (17)))
{var inst_40847 = (state_40876[(7)]);var inst_40851 = cljs.core.chunk_first(inst_40847);var inst_40852 = cljs.core.chunk_rest(inst_40847);var inst_40853 = cljs.core.count(inst_40851);var inst_40833 = inst_40852;var inst_40834 = inst_40851;var inst_40835 = inst_40853;var inst_40836 = (0);var state_40876__$1 = (function (){var statearr_40893 = state_40876;(statearr_40893[(9)] = inst_40833);
(statearr_40893[(10)] = inst_40835);
(statearr_40893[(11)] = inst_40834);
(statearr_40893[(12)] = inst_40836);
return statearr_40893;
})();var statearr_40894_40923 = state_40876__$1;(statearr_40894_40923[(2)] = null);
(statearr_40894_40923[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (3)))
{var inst_40874 = (state_40876[(2)]);var state_40876__$1 = state_40876;return cljs.core.async.impl.ioc_helpers.return_chan(state_40876__$1,inst_40874);
} else
{if((state_val_40877 === (12)))
{var inst_40867 = (state_40876[(2)]);var state_40876__$1 = state_40876;var statearr_40895_40924 = state_40876__$1;(statearr_40895_40924[(2)] = inst_40867);
(statearr_40895_40924[(1)] = (9));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (2)))
{var state_40876__$1 = state_40876;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40876__$1,(4),in$);
} else
{if((state_val_40877 === (19)))
{var inst_40862 = (state_40876[(2)]);var state_40876__$1 = state_40876;var statearr_40896_40925 = state_40876__$1;(statearr_40896_40925[(2)] = inst_40862);
(statearr_40896_40925[(1)] = (16));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (11)))
{var inst_40833 = (state_40876[(9)]);var inst_40847 = (state_40876[(7)]);var inst_40847__$1 = cljs.core.seq(inst_40833);var state_40876__$1 = (function (){var statearr_40897 = state_40876;(statearr_40897[(7)] = inst_40847__$1);
return statearr_40897;
})();if(inst_40847__$1)
{var statearr_40898_40926 = state_40876__$1;(statearr_40898_40926[(1)] = (14));
} else
{var statearr_40899_40927 = state_40876__$1;(statearr_40899_40927[(1)] = (15));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (9)))
{var inst_40869 = (state_40876[(2)]);var state_40876__$1 = (function (){var statearr_40900 = state_40876;(statearr_40900[(15)] = inst_40869);
return statearr_40900;
})();var statearr_40901_40928 = state_40876__$1;(statearr_40901_40928[(2)] = null);
(statearr_40901_40928[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (5)))
{var inst_40825 = cljs.core.async.close_BANG_(out);var state_40876__$1 = state_40876;var statearr_40902_40929 = state_40876__$1;(statearr_40902_40929[(2)] = inst_40825);
(statearr_40902_40929[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (14)))
{var inst_40847 = (state_40876[(7)]);var inst_40849 = cljs.core.chunked_seq_QMARK_(inst_40847);var state_40876__$1 = state_40876;if(inst_40849)
{var statearr_40903_40930 = state_40876__$1;(statearr_40903_40930[(1)] = (17));
} else
{var statearr_40904_40931 = state_40876__$1;(statearr_40904_40931[(1)] = (18));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (16)))
{var inst_40865 = (state_40876[(2)]);var state_40876__$1 = state_40876;var statearr_40905_40932 = state_40876__$1;(statearr_40905_40932[(2)] = inst_40865);
(statearr_40905_40932[(1)] = (12));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40877 === (10)))
{var inst_40834 = (state_40876[(11)]);var inst_40836 = (state_40876[(12)]);var inst_40841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40834,inst_40836);var state_40876__$1 = state_40876;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40876__$1,(13),out,inst_40841);
} else
{if((state_val_40877 === (18)))
{var inst_40847 = (state_40876[(7)]);var inst_40856 = cljs.core.first(inst_40847);var state_40876__$1 = state_40876;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40876__$1,(20),out,inst_40856);
} else
{if((state_val_40877 === (8)))
{var inst_40835 = (state_40876[(10)]);var inst_40836 = (state_40876[(12)]);var inst_40838 = (inst_40836 < inst_40835);var inst_40839 = inst_40838;var state_40876__$1 = state_40876;if(cljs.core.truth_(inst_40839))
{var statearr_40906_40933 = state_40876__$1;(statearr_40906_40933[(1)] = (10));
} else
{var statearr_40907_40934 = state_40876__$1;(statearr_40907_40934[(1)] = (11));
}
return cljs.core.constant$keyword$836;
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
var state_machine__5694__auto____0 = (function (){var statearr_40911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40911[(0)] = state_machine__5694__auto__);
(statearr_40911[(1)] = (1));
return statearr_40911;
});
var state_machine__5694__auto____1 = (function (state_40876){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_40876);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e40912){if((e40912 instanceof Object))
{var ex__5697__auto__ = e40912;var statearr_40913_40935 = state_40876;(statearr_40913_40935[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40876);
return cljs.core.constant$keyword$836;
} else
{throw e40912;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__40936 = state_40876;
state_40876 = G__40936;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_40876){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_40876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_40914 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_40914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_40914;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___41017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___41017){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___41017){
return (function (state_40996){var state_val_40997 = (state_40996[(1)]);if((state_val_40997 === (7)))
{var inst_40992 = (state_40996[(2)]);var state_40996__$1 = state_40996;var statearr_40998_41018 = state_40996__$1;(statearr_40998_41018[(2)] = inst_40992);
(statearr_40998_41018[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40997 === (1)))
{var state_40996__$1 = state_40996;var statearr_40999_41019 = state_40996__$1;(statearr_40999_41019[(2)] = null);
(statearr_40999_41019[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40997 === (4)))
{var inst_40979 = (state_40996[(7)]);var inst_40979__$1 = (state_40996[(2)]);var inst_40980 = (inst_40979__$1 == null);var state_40996__$1 = (function (){var statearr_41000 = state_40996;(statearr_41000[(7)] = inst_40979__$1);
return statearr_41000;
})();if(cljs.core.truth_(inst_40980))
{var statearr_41001_41020 = state_40996__$1;(statearr_41001_41020[(1)] = (5));
} else
{var statearr_41002_41021 = state_40996__$1;(statearr_41002_41021[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_40997 === (6)))
{var inst_40979 = (state_40996[(7)]);var state_40996__$1 = state_40996;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40996__$1,(11),to,inst_40979);
} else
{if((state_val_40997 === (3)))
{var inst_40994 = (state_40996[(2)]);var state_40996__$1 = state_40996;return cljs.core.async.impl.ioc_helpers.return_chan(state_40996__$1,inst_40994);
} else
{if((state_val_40997 === (2)))
{var state_40996__$1 = state_40996;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40996__$1,(4),from);
} else
{if((state_val_40997 === (11)))
{var inst_40989 = (state_40996[(2)]);var state_40996__$1 = (function (){var statearr_41003 = state_40996;(statearr_41003[(8)] = inst_40989);
return statearr_41003;
})();var statearr_41004_41022 = state_40996__$1;(statearr_41004_41022[(2)] = null);
(statearr_41004_41022[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40997 === (9)))
{var state_40996__$1 = state_40996;var statearr_41005_41023 = state_40996__$1;(statearr_41005_41023[(2)] = null);
(statearr_41005_41023[(1)] = (10));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40997 === (5)))
{var state_40996__$1 = state_40996;if(cljs.core.truth_(close_QMARK_))
{var statearr_41006_41024 = state_40996__$1;(statearr_41006_41024[(1)] = (8));
} else
{var statearr_41007_41025 = state_40996__$1;(statearr_41007_41025[(1)] = (9));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_40997 === (10)))
{var inst_40986 = (state_40996[(2)]);var state_40996__$1 = state_40996;var statearr_41008_41026 = state_40996__$1;(statearr_41008_41026[(2)] = inst_40986);
(statearr_41008_41026[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_40997 === (8)))
{var inst_40983 = cljs.core.async.close_BANG_(to);var state_40996__$1 = state_40996;var statearr_41009_41027 = state_40996__$1;(statearr_41009_41027[(2)] = inst_40983);
(statearr_41009_41027[(1)] = (10));
return cljs.core.constant$keyword$836;
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
});})(c__5708__auto___41017))
;return ((function (switch__5693__auto__,c__5708__auto___41017){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_41013 = [null,null,null,null,null,null,null,null,null];(statearr_41013[(0)] = state_machine__5694__auto__);
(statearr_41013[(1)] = (1));
return statearr_41013;
});
var state_machine__5694__auto____1 = (function (state_40996){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_40996);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41014){if((e41014 instanceof Object))
{var ex__5697__auto__ = e41014;var statearr_41015_41028 = state_40996;(statearr_41015_41028[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40996);
return cljs.core.constant$keyword$836;
} else
{throw e41014;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__41029 = state_40996;
state_40996 = G__41029;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_40996){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_40996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___41017))
})();var state__5710__auto__ = (function (){var statearr_41016 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___41017);
return statearr_41016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___41017))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5708__auto___41116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___41116,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___41116,tc,fc){
return (function (state_41094){var state_val_41095 = (state_41094[(1)]);if((state_val_41095 === (7)))
{var inst_41090 = (state_41094[(2)]);var state_41094__$1 = state_41094;var statearr_41096_41117 = state_41094__$1;(statearr_41096_41117[(2)] = inst_41090);
(statearr_41096_41117[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41095 === (1)))
{var state_41094__$1 = state_41094;var statearr_41097_41118 = state_41094__$1;(statearr_41097_41118[(2)] = null);
(statearr_41097_41118[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41095 === (4)))
{var inst_41075 = (state_41094[(7)]);var inst_41075__$1 = (state_41094[(2)]);var inst_41076 = (inst_41075__$1 == null);var state_41094__$1 = (function (){var statearr_41098 = state_41094;(statearr_41098[(7)] = inst_41075__$1);
return statearr_41098;
})();if(cljs.core.truth_(inst_41076))
{var statearr_41099_41119 = state_41094__$1;(statearr_41099_41119[(1)] = (5));
} else
{var statearr_41100_41120 = state_41094__$1;(statearr_41100_41120[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41095 === (6)))
{var inst_41075 = (state_41094[(7)]);var inst_41081 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41075) : p.call(null,inst_41075));var state_41094__$1 = state_41094;if(cljs.core.truth_(inst_41081))
{var statearr_41101_41121 = state_41094__$1;(statearr_41101_41121[(1)] = (9));
} else
{var statearr_41102_41122 = state_41094__$1;(statearr_41102_41122[(1)] = (10));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41095 === (3)))
{var inst_41092 = (state_41094[(2)]);var state_41094__$1 = state_41094;return cljs.core.async.impl.ioc_helpers.return_chan(state_41094__$1,inst_41092);
} else
{if((state_val_41095 === (2)))
{var state_41094__$1 = state_41094;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41094__$1,(4),ch);
} else
{if((state_val_41095 === (11)))
{var inst_41075 = (state_41094[(7)]);var inst_41085 = (state_41094[(2)]);var state_41094__$1 = state_41094;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41094__$1,(8),inst_41085,inst_41075);
} else
{if((state_val_41095 === (9)))
{var state_41094__$1 = state_41094;var statearr_41103_41123 = state_41094__$1;(statearr_41103_41123[(2)] = tc);
(statearr_41103_41123[(1)] = (11));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41095 === (5)))
{var inst_41078 = cljs.core.async.close_BANG_(tc);var inst_41079 = cljs.core.async.close_BANG_(fc);var state_41094__$1 = (function (){var statearr_41104 = state_41094;(statearr_41104[(8)] = inst_41078);
return statearr_41104;
})();var statearr_41105_41124 = state_41094__$1;(statearr_41105_41124[(2)] = inst_41079);
(statearr_41105_41124[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41095 === (10)))
{var state_41094__$1 = state_41094;var statearr_41106_41125 = state_41094__$1;(statearr_41106_41125[(2)] = fc);
(statearr_41106_41125[(1)] = (11));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41095 === (8)))
{var inst_41087 = (state_41094[(2)]);var state_41094__$1 = (function (){var statearr_41107 = state_41094;(statearr_41107[(9)] = inst_41087);
return statearr_41107;
})();var statearr_41108_41126 = state_41094__$1;(statearr_41108_41126[(2)] = null);
(statearr_41108_41126[(1)] = (2));
return cljs.core.constant$keyword$836;
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
});})(c__5708__auto___41116,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___41116,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_41112 = [null,null,null,null,null,null,null,null,null,null];(statearr_41112[(0)] = state_machine__5694__auto__);
(statearr_41112[(1)] = (1));
return statearr_41112;
});
var state_machine__5694__auto____1 = (function (state_41094){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41094);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41113){if((e41113 instanceof Object))
{var ex__5697__auto__ = e41113;var statearr_41114_41127 = state_41094;(statearr_41114_41127[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41094);
return cljs.core.constant$keyword$836;
} else
{throw e41113;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__41128 = state_41094;
state_41094 = G__41128;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41094){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___41116,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_41115 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___41116);
return statearr_41115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___41116,tc,fc))
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
return (function (state_41175){var state_val_41176 = (state_41175[(1)]);if((state_val_41176 === (7)))
{var inst_41171 = (state_41175[(2)]);var state_41175__$1 = state_41175;var statearr_41177_41193 = state_41175__$1;(statearr_41177_41193[(2)] = inst_41171);
(statearr_41177_41193[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41176 === (6)))
{var inst_41161 = (state_41175[(7)]);var inst_41164 = (state_41175[(8)]);var inst_41168 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41161,inst_41164) : f.call(null,inst_41161,inst_41164));var inst_41161__$1 = inst_41168;var state_41175__$1 = (function (){var statearr_41178 = state_41175;(statearr_41178[(7)] = inst_41161__$1);
return statearr_41178;
})();var statearr_41179_41194 = state_41175__$1;(statearr_41179_41194[(2)] = null);
(statearr_41179_41194[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41176 === (5)))
{var inst_41161 = (state_41175[(7)]);var state_41175__$1 = state_41175;var statearr_41180_41195 = state_41175__$1;(statearr_41180_41195[(2)] = inst_41161);
(statearr_41180_41195[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41176 === (4)))
{var inst_41164 = (state_41175[(8)]);var inst_41164__$1 = (state_41175[(2)]);var inst_41165 = (inst_41164__$1 == null);var state_41175__$1 = (function (){var statearr_41181 = state_41175;(statearr_41181[(8)] = inst_41164__$1);
return statearr_41181;
})();if(cljs.core.truth_(inst_41165))
{var statearr_41182_41196 = state_41175__$1;(statearr_41182_41196[(1)] = (5));
} else
{var statearr_41183_41197 = state_41175__$1;(statearr_41183_41197[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41176 === (3)))
{var inst_41173 = (state_41175[(2)]);var state_41175__$1 = state_41175;return cljs.core.async.impl.ioc_helpers.return_chan(state_41175__$1,inst_41173);
} else
{if((state_val_41176 === (2)))
{var state_41175__$1 = state_41175;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41175__$1,(4),ch);
} else
{if((state_val_41176 === (1)))
{var inst_41161 = init;var state_41175__$1 = (function (){var statearr_41184 = state_41175;(statearr_41184[(7)] = inst_41161);
return statearr_41184;
})();var statearr_41185_41198 = state_41175__$1;(statearr_41185_41198[(2)] = null);
(statearr_41185_41198[(1)] = (2));
return cljs.core.constant$keyword$836;
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
var state_machine__5694__auto____0 = (function (){var statearr_41189 = [null,null,null,null,null,null,null,null,null];(statearr_41189[(0)] = state_machine__5694__auto__);
(statearr_41189[(1)] = (1));
return statearr_41189;
});
var state_machine__5694__auto____1 = (function (state_41175){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41175);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41190){if((e41190 instanceof Object))
{var ex__5697__auto__ = e41190;var statearr_41191_41199 = state_41175;(statearr_41191_41199[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41175);
return cljs.core.constant$keyword$836;
} else
{throw e41190;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__41200 = state_41175;
state_41175 = G__41200;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41175){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_41192 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_41192;
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
return (function (state_41262){var state_val_41263 = (state_41262[(1)]);if((state_val_41263 === (7)))
{var inst_41243 = (state_41262[(7)]);var inst_41248 = (state_41262[(2)]);var inst_41249 = cljs.core.next(inst_41243);var inst_41243__$1 = inst_41249;var state_41262__$1 = (function (){var statearr_41264 = state_41262;(statearr_41264[(8)] = inst_41248);
(statearr_41264[(7)] = inst_41243__$1);
return statearr_41264;
})();var statearr_41265_41283 = state_41262__$1;(statearr_41265_41283[(2)] = null);
(statearr_41265_41283[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41263 === (1)))
{var inst_41242 = cljs.core.seq(coll);var inst_41243 = inst_41242;var state_41262__$1 = (function (){var statearr_41266 = state_41262;(statearr_41266[(7)] = inst_41243);
return statearr_41266;
})();var statearr_41267_41284 = state_41262__$1;(statearr_41267_41284[(2)] = null);
(statearr_41267_41284[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41263 === (4)))
{var inst_41243 = (state_41262[(7)]);var inst_41246 = cljs.core.first(inst_41243);var state_41262__$1 = state_41262;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41262__$1,(7),ch,inst_41246);
} else
{if((state_val_41263 === (6)))
{var inst_41258 = (state_41262[(2)]);var state_41262__$1 = state_41262;var statearr_41268_41285 = state_41262__$1;(statearr_41268_41285[(2)] = inst_41258);
(statearr_41268_41285[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41263 === (3)))
{var inst_41260 = (state_41262[(2)]);var state_41262__$1 = state_41262;return cljs.core.async.impl.ioc_helpers.return_chan(state_41262__$1,inst_41260);
} else
{if((state_val_41263 === (2)))
{var inst_41243 = (state_41262[(7)]);var state_41262__$1 = state_41262;if(cljs.core.truth_(inst_41243))
{var statearr_41269_41286 = state_41262__$1;(statearr_41269_41286[(1)] = (4));
} else
{var statearr_41270_41287 = state_41262__$1;(statearr_41270_41287[(1)] = (5));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41263 === (9)))
{var state_41262__$1 = state_41262;var statearr_41271_41288 = state_41262__$1;(statearr_41271_41288[(2)] = null);
(statearr_41271_41288[(1)] = (10));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41263 === (5)))
{var state_41262__$1 = state_41262;if(cljs.core.truth_(close_QMARK_))
{var statearr_41272_41289 = state_41262__$1;(statearr_41272_41289[(1)] = (8));
} else
{var statearr_41273_41290 = state_41262__$1;(statearr_41273_41290[(1)] = (9));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41263 === (10)))
{var inst_41256 = (state_41262[(2)]);var state_41262__$1 = state_41262;var statearr_41274_41291 = state_41262__$1;(statearr_41274_41291[(2)] = inst_41256);
(statearr_41274_41291[(1)] = (6));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41263 === (8)))
{var inst_41253 = cljs.core.async.close_BANG_(ch);var state_41262__$1 = state_41262;var statearr_41275_41292 = state_41262__$1;(statearr_41275_41292[(2)] = inst_41253);
(statearr_41275_41292[(1)] = (10));
return cljs.core.constant$keyword$836;
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
var state_machine__5694__auto____0 = (function (){var statearr_41279 = [null,null,null,null,null,null,null,null,null];(statearr_41279[(0)] = state_machine__5694__auto__);
(statearr_41279[(1)] = (1));
return statearr_41279;
});
var state_machine__5694__auto____1 = (function (state_41262){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41262);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41280){if((e41280 instanceof Object))
{var ex__5697__auto__ = e41280;var statearr_41281_41293 = state_41262;(statearr_41281_41293[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41262);
return cljs.core.constant$keyword$836;
} else
{throw e41280;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__41294 = state_41262;
state_41262 = G__41294;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41262){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_41282 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_41282;
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
cljs.core.async.Mux = (function (){var obj41296 = {};return obj41296;
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
cljs.core.async.Mult = (function (){var obj41298 = {};return obj41298;
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
cljs.core.async.mult = (function mult(ch){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var m = (function (){if(typeof cljs.core.async.t41522 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41522 = (function (cs,ch,mult,meta41523){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta41523 = meta41523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41522.cljs$lang$type = true;
cljs.core.async.t41522.cljs$lang$ctorStr = "cljs.core.async/t41522";
cljs.core.async.t41522.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t41522");
});})(cs))
;
cljs.core.async.t41522.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t41522.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t41522.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t41522.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return null;
});})(cs))
;
cljs.core.async.t41522.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41522.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t41522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41524){var self__ = this;
var _41524__$1 = this;return self__.meta41523;
});})(cs))
;
cljs.core.async.t41522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41524,meta41523__$1){var self__ = this;
var _41524__$1 = this;return (new cljs.core.async.t41522(self__.cs,self__.ch,self__.mult,meta41523__$1));
});})(cs))
;
cljs.core.async.__GT_t41522 = ((function (cs){
return (function __GT_t41522(cs__$1,ch__$1,mult__$1,meta41523){return (new cljs.core.async.t41522(cs__$1,ch__$1,mult__$1,meta41523));
});})(cs))
;
}
return (new cljs.core.async.t41522(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___41745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___41745,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___41745,cs,m,dchan,dctr,done){
return (function (state_41659){var state_val_41660 = (state_41659[(1)]);if((state_val_41660 === (7)))
{var inst_41655 = (state_41659[(2)]);var state_41659__$1 = state_41659;var statearr_41661_41746 = state_41659__$1;(statearr_41661_41746[(2)] = inst_41655);
(statearr_41661_41746[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (20)))
{var inst_41556 = (state_41659[(7)]);var inst_41566 = cljs.core.first(inst_41556);var inst_41567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41566,(0),null);var inst_41568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41566,(1),null);var state_41659__$1 = (function (){var statearr_41662 = state_41659;(statearr_41662[(8)] = inst_41567);
return statearr_41662;
})();if(cljs.core.truth_(inst_41568))
{var statearr_41663_41747 = state_41659__$1;(statearr_41663_41747[(1)] = (22));
} else
{var statearr_41664_41748 = state_41659__$1;(statearr_41664_41748[(1)] = (23));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (27)))
{var inst_41596 = (state_41659[(9)]);var inst_41598 = (state_41659[(10)]);var inst_41603 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41596,inst_41598);var state_41659__$1 = (function (){var statearr_41665 = state_41659;(statearr_41665[(11)] = inst_41603);
return statearr_41665;
})();var statearr_41666_41749 = state_41659__$1;(statearr_41666_41749[(2)] = null);
(statearr_41666_41749[(1)] = (32));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (1)))
{var state_41659__$1 = state_41659;var statearr_41667_41750 = state_41659__$1;(statearr_41667_41750[(2)] = null);
(statearr_41667_41750[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (24)))
{var inst_41556 = (state_41659[(7)]);var inst_41573 = (state_41659[(2)]);var inst_41574 = cljs.core.next(inst_41556);var inst_41536 = inst_41574;var inst_41537 = null;var inst_41538 = (0);var inst_41539 = (0);var state_41659__$1 = (function (){var statearr_41668 = state_41659;(statearr_41668[(12)] = inst_41537);
(statearr_41668[(13)] = inst_41573);
(statearr_41668[(14)] = inst_41538);
(statearr_41668[(15)] = inst_41536);
(statearr_41668[(16)] = inst_41539);
return statearr_41668;
})();var statearr_41669_41751 = state_41659__$1;(statearr_41669_41751[(2)] = null);
(statearr_41669_41751[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (39)))
{var inst_41616 = (state_41659[(17)]);var inst_41634 = (state_41659[(2)]);var inst_41635 = cljs.core.next(inst_41616);var inst_41595 = inst_41635;var inst_41596 = null;var inst_41597 = (0);var inst_41598 = (0);var state_41659__$1 = (function (){var statearr_41673 = state_41659;(statearr_41673[(9)] = inst_41596);
(statearr_41673[(10)] = inst_41598);
(statearr_41673[(18)] = inst_41595);
(statearr_41673[(19)] = inst_41634);
(statearr_41673[(20)] = inst_41597);
return statearr_41673;
})();var statearr_41674_41752 = state_41659__$1;(statearr_41674_41752[(2)] = null);
(statearr_41674_41752[(1)] = (25));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (4)))
{var inst_41527 = (state_41659[(21)]);var inst_41527__$1 = (state_41659[(2)]);var inst_41528 = (inst_41527__$1 == null);var state_41659__$1 = (function (){var statearr_41675 = state_41659;(statearr_41675[(21)] = inst_41527__$1);
return statearr_41675;
})();if(cljs.core.truth_(inst_41528))
{var statearr_41676_41753 = state_41659__$1;(statearr_41676_41753[(1)] = (5));
} else
{var statearr_41677_41754 = state_41659__$1;(statearr_41677_41754[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (15)))
{var inst_41537 = (state_41659[(12)]);var inst_41538 = (state_41659[(14)]);var inst_41536 = (state_41659[(15)]);var inst_41539 = (state_41659[(16)]);var inst_41552 = (state_41659[(2)]);var inst_41553 = (inst_41539 + (1));var tmp41670 = inst_41537;var tmp41671 = inst_41538;var tmp41672 = inst_41536;var inst_41536__$1 = tmp41672;var inst_41537__$1 = tmp41670;var inst_41538__$1 = tmp41671;var inst_41539__$1 = inst_41553;var state_41659__$1 = (function (){var statearr_41678 = state_41659;(statearr_41678[(12)] = inst_41537__$1);
(statearr_41678[(14)] = inst_41538__$1);
(statearr_41678[(15)] = inst_41536__$1);
(statearr_41678[(16)] = inst_41539__$1);
(statearr_41678[(22)] = inst_41552);
return statearr_41678;
})();var statearr_41679_41755 = state_41659__$1;(statearr_41679_41755[(2)] = null);
(statearr_41679_41755[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (21)))
{var inst_41577 = (state_41659[(2)]);var state_41659__$1 = state_41659;var statearr_41680_41756 = state_41659__$1;(statearr_41680_41756[(2)] = inst_41577);
(statearr_41680_41756[(1)] = (18));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (31)))
{var inst_41603 = (state_41659[(11)]);var inst_41604 = (state_41659[(2)]);var inst_41605 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_41606 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41603);var state_41659__$1 = (function (){var statearr_41681 = state_41659;(statearr_41681[(23)] = inst_41605);
(statearr_41681[(24)] = inst_41604);
return statearr_41681;
})();var statearr_41682_41757 = state_41659__$1;(statearr_41682_41757[(2)] = inst_41606);
cljs.core.async.impl.ioc_helpers.process_exception(state_41659__$1);
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (32)))
{var inst_41527 = (state_41659[(21)]);var inst_41603 = (state_41659[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41659,(31),Object,null,(30));var inst_41610 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41603,inst_41527,done);var state_41659__$1 = state_41659;var statearr_41683_41758 = state_41659__$1;(statearr_41683_41758[(2)] = inst_41610);
cljs.core.async.impl.ioc_helpers.process_exception(state_41659__$1);
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (40)))
{var inst_41625 = (state_41659[(25)]);var inst_41626 = (state_41659[(2)]);var inst_41627 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_41628 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41625);var state_41659__$1 = (function (){var statearr_41684 = state_41659;(statearr_41684[(26)] = inst_41627);
(statearr_41684[(27)] = inst_41626);
return statearr_41684;
})();var statearr_41685_41759 = state_41659__$1;(statearr_41685_41759[(2)] = inst_41628);
cljs.core.async.impl.ioc_helpers.process_exception(state_41659__$1);
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (33)))
{var inst_41616 = (state_41659[(17)]);var inst_41618 = cljs.core.chunked_seq_QMARK_(inst_41616);var state_41659__$1 = state_41659;if(inst_41618)
{var statearr_41686_41760 = state_41659__$1;(statearr_41686_41760[(1)] = (36));
} else
{var statearr_41687_41761 = state_41659__$1;(statearr_41687_41761[(1)] = (37));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (13)))
{var inst_41546 = (state_41659[(28)]);var inst_41549 = cljs.core.async.close_BANG_(inst_41546);var state_41659__$1 = state_41659;var statearr_41688_41762 = state_41659__$1;(statearr_41688_41762[(2)] = inst_41549);
(statearr_41688_41762[(1)] = (15));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (22)))
{var inst_41567 = (state_41659[(8)]);var inst_41570 = cljs.core.async.close_BANG_(inst_41567);var state_41659__$1 = state_41659;var statearr_41689_41763 = state_41659__$1;(statearr_41689_41763[(2)] = inst_41570);
(statearr_41689_41763[(1)] = (24));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (36)))
{var inst_41616 = (state_41659[(17)]);var inst_41620 = cljs.core.chunk_first(inst_41616);var inst_41621 = cljs.core.chunk_rest(inst_41616);var inst_41622 = cljs.core.count(inst_41620);var inst_41595 = inst_41621;var inst_41596 = inst_41620;var inst_41597 = inst_41622;var inst_41598 = (0);var state_41659__$1 = (function (){var statearr_41690 = state_41659;(statearr_41690[(9)] = inst_41596);
(statearr_41690[(10)] = inst_41598);
(statearr_41690[(18)] = inst_41595);
(statearr_41690[(20)] = inst_41597);
return statearr_41690;
})();var statearr_41691_41764 = state_41659__$1;(statearr_41691_41764[(2)] = null);
(statearr_41691_41764[(1)] = (25));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (41)))
{var inst_41625 = (state_41659[(25)]);var inst_41527 = (state_41659[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41659,(40),Object,null,(39));var inst_41632 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41625,inst_41527,done);var state_41659__$1 = state_41659;var statearr_41692_41765 = state_41659__$1;(statearr_41692_41765[(2)] = inst_41632);
cljs.core.async.impl.ioc_helpers.process_exception(state_41659__$1);
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (43)))
{var state_41659__$1 = state_41659;var statearr_41693_41766 = state_41659__$1;(statearr_41693_41766[(2)] = null);
(statearr_41693_41766[(1)] = (44));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (29)))
{var inst_41643 = (state_41659[(2)]);var state_41659__$1 = state_41659;var statearr_41694_41767 = state_41659__$1;(statearr_41694_41767[(2)] = inst_41643);
(statearr_41694_41767[(1)] = (26));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (44)))
{var inst_41652 = (state_41659[(2)]);var state_41659__$1 = (function (){var statearr_41695 = state_41659;(statearr_41695[(29)] = inst_41652);
return statearr_41695;
})();var statearr_41696_41768 = state_41659__$1;(statearr_41696_41768[(2)] = null);
(statearr_41696_41768[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (6)))
{var inst_41587 = (state_41659[(30)]);var inst_41586 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_41587__$1 = cljs.core.keys(inst_41586);var inst_41588 = cljs.core.count(inst_41587__$1);var inst_41589 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_41588) : cljs.core.reset_BANG_.call(null,dctr,inst_41588));var inst_41594 = cljs.core.seq(inst_41587__$1);var inst_41595 = inst_41594;var inst_41596 = null;var inst_41597 = (0);var inst_41598 = (0);var state_41659__$1 = (function (){var statearr_41697 = state_41659;(statearr_41697[(9)] = inst_41596);
(statearr_41697[(31)] = inst_41589);
(statearr_41697[(10)] = inst_41598);
(statearr_41697[(18)] = inst_41595);
(statearr_41697[(30)] = inst_41587__$1);
(statearr_41697[(20)] = inst_41597);
return statearr_41697;
})();var statearr_41698_41769 = state_41659__$1;(statearr_41698_41769[(2)] = null);
(statearr_41698_41769[(1)] = (25));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (28)))
{var inst_41595 = (state_41659[(18)]);var inst_41616 = (state_41659[(17)]);var inst_41616__$1 = cljs.core.seq(inst_41595);var state_41659__$1 = (function (){var statearr_41699 = state_41659;(statearr_41699[(17)] = inst_41616__$1);
return statearr_41699;
})();if(inst_41616__$1)
{var statearr_41700_41770 = state_41659__$1;(statearr_41700_41770[(1)] = (33));
} else
{var statearr_41701_41771 = state_41659__$1;(statearr_41701_41771[(1)] = (34));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (25)))
{var inst_41598 = (state_41659[(10)]);var inst_41597 = (state_41659[(20)]);var inst_41600 = (inst_41598 < inst_41597);var inst_41601 = inst_41600;var state_41659__$1 = state_41659;if(cljs.core.truth_(inst_41601))
{var statearr_41702_41772 = state_41659__$1;(statearr_41702_41772[(1)] = (27));
} else
{var statearr_41703_41773 = state_41659__$1;(statearr_41703_41773[(1)] = (28));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (34)))
{var state_41659__$1 = state_41659;var statearr_41704_41774 = state_41659__$1;(statearr_41704_41774[(2)] = null);
(statearr_41704_41774[(1)] = (35));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (17)))
{var state_41659__$1 = state_41659;var statearr_41705_41775 = state_41659__$1;(statearr_41705_41775[(2)] = null);
(statearr_41705_41775[(1)] = (18));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (3)))
{var inst_41657 = (state_41659[(2)]);var state_41659__$1 = state_41659;return cljs.core.async.impl.ioc_helpers.return_chan(state_41659__$1,inst_41657);
} else
{if((state_val_41660 === (12)))
{var inst_41582 = (state_41659[(2)]);var state_41659__$1 = state_41659;var statearr_41706_41776 = state_41659__$1;(statearr_41706_41776[(2)] = inst_41582);
(statearr_41706_41776[(1)] = (9));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (2)))
{var state_41659__$1 = state_41659;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41659__$1,(4),ch);
} else
{if((state_val_41660 === (23)))
{var state_41659__$1 = state_41659;var statearr_41707_41777 = state_41659__$1;(statearr_41707_41777[(2)] = null);
(statearr_41707_41777[(1)] = (24));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (35)))
{var inst_41641 = (state_41659[(2)]);var state_41659__$1 = state_41659;var statearr_41708_41778 = state_41659__$1;(statearr_41708_41778[(2)] = inst_41641);
(statearr_41708_41778[(1)] = (29));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (19)))
{var inst_41556 = (state_41659[(7)]);var inst_41560 = cljs.core.chunk_first(inst_41556);var inst_41561 = cljs.core.chunk_rest(inst_41556);var inst_41562 = cljs.core.count(inst_41560);var inst_41536 = inst_41561;var inst_41537 = inst_41560;var inst_41538 = inst_41562;var inst_41539 = (0);var state_41659__$1 = (function (){var statearr_41709 = state_41659;(statearr_41709[(12)] = inst_41537);
(statearr_41709[(14)] = inst_41538);
(statearr_41709[(15)] = inst_41536);
(statearr_41709[(16)] = inst_41539);
return statearr_41709;
})();var statearr_41710_41779 = state_41659__$1;(statearr_41710_41779[(2)] = null);
(statearr_41710_41779[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (11)))
{var inst_41556 = (state_41659[(7)]);var inst_41536 = (state_41659[(15)]);var inst_41556__$1 = cljs.core.seq(inst_41536);var state_41659__$1 = (function (){var statearr_41711 = state_41659;(statearr_41711[(7)] = inst_41556__$1);
return statearr_41711;
})();if(inst_41556__$1)
{var statearr_41712_41780 = state_41659__$1;(statearr_41712_41780[(1)] = (16));
} else
{var statearr_41713_41781 = state_41659__$1;(statearr_41713_41781[(1)] = (17));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (9)))
{var inst_41584 = (state_41659[(2)]);var state_41659__$1 = state_41659;var statearr_41714_41782 = state_41659__$1;(statearr_41714_41782[(2)] = inst_41584);
(statearr_41714_41782[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (5)))
{var inst_41534 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_41535 = cljs.core.seq(inst_41534);var inst_41536 = inst_41535;var inst_41537 = null;var inst_41538 = (0);var inst_41539 = (0);var state_41659__$1 = (function (){var statearr_41715 = state_41659;(statearr_41715[(12)] = inst_41537);
(statearr_41715[(14)] = inst_41538);
(statearr_41715[(15)] = inst_41536);
(statearr_41715[(16)] = inst_41539);
return statearr_41715;
})();var statearr_41716_41783 = state_41659__$1;(statearr_41716_41783[(2)] = null);
(statearr_41716_41783[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (14)))
{var state_41659__$1 = state_41659;var statearr_41717_41784 = state_41659__$1;(statearr_41717_41784[(2)] = null);
(statearr_41717_41784[(1)] = (15));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (45)))
{var inst_41649 = (state_41659[(2)]);var state_41659__$1 = state_41659;var statearr_41718_41785 = state_41659__$1;(statearr_41718_41785[(2)] = inst_41649);
(statearr_41718_41785[(1)] = (44));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (26)))
{var inst_41587 = (state_41659[(30)]);var inst_41645 = (state_41659[(2)]);var inst_41646 = cljs.core.seq(inst_41587);var state_41659__$1 = (function (){var statearr_41719 = state_41659;(statearr_41719[(32)] = inst_41645);
return statearr_41719;
})();if(inst_41646)
{var statearr_41720_41786 = state_41659__$1;(statearr_41720_41786[(1)] = (42));
} else
{var statearr_41721_41787 = state_41659__$1;(statearr_41721_41787[(1)] = (43));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (16)))
{var inst_41556 = (state_41659[(7)]);var inst_41558 = cljs.core.chunked_seq_QMARK_(inst_41556);var state_41659__$1 = state_41659;if(inst_41558)
{var statearr_41725_41788 = state_41659__$1;(statearr_41725_41788[(1)] = (19));
} else
{var statearr_41726_41789 = state_41659__$1;(statearr_41726_41789[(1)] = (20));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (38)))
{var inst_41638 = (state_41659[(2)]);var state_41659__$1 = state_41659;var statearr_41727_41790 = state_41659__$1;(statearr_41727_41790[(2)] = inst_41638);
(statearr_41727_41790[(1)] = (35));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (30)))
{var inst_41596 = (state_41659[(9)]);var inst_41598 = (state_41659[(10)]);var inst_41595 = (state_41659[(18)]);var inst_41597 = (state_41659[(20)]);var inst_41612 = (state_41659[(2)]);var inst_41613 = (inst_41598 + (1));var tmp41722 = inst_41596;var tmp41723 = inst_41595;var tmp41724 = inst_41597;var inst_41595__$1 = tmp41723;var inst_41596__$1 = tmp41722;var inst_41597__$1 = tmp41724;var inst_41598__$1 = inst_41613;var state_41659__$1 = (function (){var statearr_41728 = state_41659;(statearr_41728[(9)] = inst_41596__$1);
(statearr_41728[(33)] = inst_41612);
(statearr_41728[(10)] = inst_41598__$1);
(statearr_41728[(18)] = inst_41595__$1);
(statearr_41728[(20)] = inst_41597__$1);
return statearr_41728;
})();var statearr_41729_41791 = state_41659__$1;(statearr_41729_41791[(2)] = null);
(statearr_41729_41791[(1)] = (25));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (10)))
{var inst_41537 = (state_41659[(12)]);var inst_41539 = (state_41659[(16)]);var inst_41545 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41537,inst_41539);var inst_41546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41545,(0),null);var inst_41547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41545,(1),null);var state_41659__$1 = (function (){var statearr_41730 = state_41659;(statearr_41730[(28)] = inst_41546);
return statearr_41730;
})();if(cljs.core.truth_(inst_41547))
{var statearr_41731_41792 = state_41659__$1;(statearr_41731_41792[(1)] = (13));
} else
{var statearr_41732_41793 = state_41659__$1;(statearr_41732_41793[(1)] = (14));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (18)))
{var inst_41580 = (state_41659[(2)]);var state_41659__$1 = state_41659;var statearr_41733_41794 = state_41659__$1;(statearr_41733_41794[(2)] = inst_41580);
(statearr_41733_41794[(1)] = (12));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (42)))
{var state_41659__$1 = state_41659;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41659__$1,(45),dchan);
} else
{if((state_val_41660 === (37)))
{var inst_41616 = (state_41659[(17)]);var inst_41625 = cljs.core.first(inst_41616);var state_41659__$1 = (function (){var statearr_41734 = state_41659;(statearr_41734[(25)] = inst_41625);
return statearr_41734;
})();var statearr_41735_41795 = state_41659__$1;(statearr_41735_41795[(2)] = null);
(statearr_41735_41795[(1)] = (41));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41660 === (8)))
{var inst_41538 = (state_41659[(14)]);var inst_41539 = (state_41659[(16)]);var inst_41541 = (inst_41539 < inst_41538);var inst_41542 = inst_41541;var state_41659__$1 = state_41659;if(cljs.core.truth_(inst_41542))
{var statearr_41736_41796 = state_41659__$1;(statearr_41736_41796[(1)] = (10));
} else
{var statearr_41737_41797 = state_41659__$1;(statearr_41737_41797[(1)] = (11));
}
return cljs.core.constant$keyword$836;
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
});})(c__5708__auto___41745,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___41745,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_41741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41741[(0)] = state_machine__5694__auto__);
(statearr_41741[(1)] = (1));
return statearr_41741;
});
var state_machine__5694__auto____1 = (function (state_41659){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41659);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41742){if((e41742 instanceof Object))
{var ex__5697__auto__ = e41742;var statearr_41743_41798 = state_41659;(statearr_41743_41798[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41659);
return cljs.core.constant$keyword$836;
} else
{throw e41742;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__41799 = state_41659;
state_41659 = G__41799;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41659){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___41745,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_41744 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___41745);
return statearr_41744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___41745,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj41801 = {};return obj41801;
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
cljs.core.async.mix = (function mix(out){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$843,null,cljs.core.constant$keyword$844,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$845);var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$844) : cljs.core.atom.call(null,cljs.core.constant$keyword$844));var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));var solos = pick(cljs.core.constant$keyword$845,chs);var pauses = pick(cljs.core.constant$keyword$843,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$846,solos,cljs.core.constant$keyword$847,pick(cljs.core.constant$keyword$844,chs),cljs.core.constant$keyword$848,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$843)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t41911 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41911 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41912){
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
this.meta41912 = meta41912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41911.cljs$lang$type = true;
cljs.core.async.t41911.cljs$lang$ctorStr = "cljs.core.async/t41911";
cljs.core.async.t41911.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t41911");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41911.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t41911.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41911.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41911.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41911.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41911.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41911.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41911.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41911.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41913){var self__ = this;
var _41913__$1 = this;return self__.meta41912;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41913,meta41912__$1){var self__ = this;
var _41913__$1 = this;return (new cljs.core.async.t41911(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41912__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t41911 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t41911(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41912){return (new cljs.core.async.t41911(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41912));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t41911(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___42020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41978){var state_val_41979 = (state_41978[(1)]);if((state_val_41979 === (7)))
{var inst_41927 = (state_41978[(7)]);var inst_41932 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41927);var state_41978__$1 = state_41978;var statearr_41980_42021 = state_41978__$1;(statearr_41980_42021[(2)] = inst_41932);
(statearr_41980_42021[(1)] = (9));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (20)))
{var inst_41942 = (state_41978[(8)]);var state_41978__$1 = state_41978;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41978__$1,(23),out,inst_41942);
} else
{if((state_val_41979 === (1)))
{var inst_41917 = (state_41978[(9)]);var inst_41917__$1 = calc_state();var inst_41918 = cljs.core.seq_QMARK_(inst_41917__$1);var state_41978__$1 = (function (){var statearr_41981 = state_41978;(statearr_41981[(9)] = inst_41917__$1);
return statearr_41981;
})();if(inst_41918)
{var statearr_41982_42022 = state_41978__$1;(statearr_41982_42022[(1)] = (2));
} else
{var statearr_41983_42023 = state_41978__$1;(statearr_41983_42023[(1)] = (3));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (4)))
{var inst_41917 = (state_41978[(9)]);var inst_41923 = (state_41978[(2)]);var inst_41924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41923,cljs.core.constant$keyword$848);var inst_41925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41923,cljs.core.constant$keyword$847);var inst_41926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41923,cljs.core.constant$keyword$846);var inst_41927 = inst_41917;var state_41978__$1 = (function (){var statearr_41984 = state_41978;(statearr_41984[(10)] = inst_41926);
(statearr_41984[(7)] = inst_41927);
(statearr_41984[(11)] = inst_41924);
(statearr_41984[(12)] = inst_41925);
return statearr_41984;
})();var statearr_41985_42024 = state_41978__$1;(statearr_41985_42024[(2)] = null);
(statearr_41985_42024[(1)] = (5));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (15)))
{var state_41978__$1 = state_41978;var statearr_41986_42025 = state_41978__$1;(statearr_41986_42025[(2)] = null);
(statearr_41986_42025[(1)] = (16));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (21)))
{var state_41978__$1 = state_41978;var statearr_41987_42026 = state_41978__$1;(statearr_41987_42026[(2)] = null);
(statearr_41987_42026[(1)] = (22));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (13)))
{var inst_41974 = (state_41978[(2)]);var state_41978__$1 = state_41978;var statearr_41988_42027 = state_41978__$1;(statearr_41988_42027[(2)] = inst_41974);
(statearr_41988_42027[(1)] = (6));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (22)))
{var inst_41935 = (state_41978[(13)]);var inst_41971 = (state_41978[(2)]);var inst_41927 = inst_41935;var state_41978__$1 = (function (){var statearr_41989 = state_41978;(statearr_41989[(14)] = inst_41971);
(statearr_41989[(7)] = inst_41927);
return statearr_41989;
})();var statearr_41990_42028 = state_41978__$1;(statearr_41990_42028[(2)] = null);
(statearr_41990_42028[(1)] = (5));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (6)))
{var inst_41976 = (state_41978[(2)]);var state_41978__$1 = state_41978;return cljs.core.async.impl.ioc_helpers.return_chan(state_41978__$1,inst_41976);
} else
{if((state_val_41979 === (17)))
{var inst_41957 = (state_41978[(15)]);var state_41978__$1 = state_41978;var statearr_41991_42029 = state_41978__$1;(statearr_41991_42029[(2)] = inst_41957);
(statearr_41991_42029[(1)] = (19));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (3)))
{var inst_41917 = (state_41978[(9)]);var state_41978__$1 = state_41978;var statearr_41992_42030 = state_41978__$1;(statearr_41992_42030[(2)] = inst_41917);
(statearr_41992_42030[(1)] = (4));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (12)))
{var inst_41943 = (state_41978[(16)]);var inst_41938 = (state_41978[(17)]);var inst_41957 = (state_41978[(15)]);var inst_41957__$1 = (inst_41938.cljs$core$IFn$_invoke$arity$1 ? inst_41938.cljs$core$IFn$_invoke$arity$1(inst_41943) : inst_41938.call(null,inst_41943));var state_41978__$1 = (function (){var statearr_41993 = state_41978;(statearr_41993[(15)] = inst_41957__$1);
return statearr_41993;
})();if(cljs.core.truth_(inst_41957__$1))
{var statearr_41994_42031 = state_41978__$1;(statearr_41994_42031[(1)] = (17));
} else
{var statearr_41995_42032 = state_41978__$1;(statearr_41995_42032[(1)] = (18));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (2)))
{var inst_41917 = (state_41978[(9)]);var inst_41920 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41917);var state_41978__$1 = state_41978;var statearr_41996_42033 = state_41978__$1;(statearr_41996_42033[(2)] = inst_41920);
(statearr_41996_42033[(1)] = (4));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (23)))
{var inst_41968 = (state_41978[(2)]);var state_41978__$1 = state_41978;var statearr_41997_42034 = state_41978__$1;(statearr_41997_42034[(2)] = inst_41968);
(statearr_41997_42034[(1)] = (22));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (19)))
{var inst_41965 = (state_41978[(2)]);var state_41978__$1 = state_41978;if(cljs.core.truth_(inst_41965))
{var statearr_41998_42035 = state_41978__$1;(statearr_41998_42035[(1)] = (20));
} else
{var statearr_41999_42036 = state_41978__$1;(statearr_41999_42036[(1)] = (21));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (11)))
{var inst_41942 = (state_41978[(8)]);var inst_41948 = (inst_41942 == null);var state_41978__$1 = state_41978;if(cljs.core.truth_(inst_41948))
{var statearr_42000_42037 = state_41978__$1;(statearr_42000_42037[(1)] = (14));
} else
{var statearr_42001_42038 = state_41978__$1;(statearr_42001_42038[(1)] = (15));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (9)))
{var inst_41935 = (state_41978[(13)]);var inst_41935__$1 = (state_41978[(2)]);var inst_41936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41935__$1,cljs.core.constant$keyword$848);var inst_41937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41935__$1,cljs.core.constant$keyword$847);var inst_41938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41935__$1,cljs.core.constant$keyword$846);var state_41978__$1 = (function (){var statearr_42002 = state_41978;(statearr_42002[(17)] = inst_41938);
(statearr_42002[(13)] = inst_41935__$1);
(statearr_42002[(18)] = inst_41937);
return statearr_42002;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_41978__$1,(10),inst_41936);
} else
{if((state_val_41979 === (5)))
{var inst_41927 = (state_41978[(7)]);var inst_41930 = cljs.core.seq_QMARK_(inst_41927);var state_41978__$1 = state_41978;if(inst_41930)
{var statearr_42003_42039 = state_41978__$1;(statearr_42003_42039[(1)] = (7));
} else
{var statearr_42004_42040 = state_41978__$1;(statearr_42004_42040[(1)] = (8));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (14)))
{var inst_41943 = (state_41978[(16)]);var inst_41950 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41943);var state_41978__$1 = state_41978;var statearr_42005_42041 = state_41978__$1;(statearr_42005_42041[(2)] = inst_41950);
(statearr_42005_42041[(1)] = (16));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (16)))
{var inst_41953 = (state_41978[(2)]);var inst_41954 = calc_state();var inst_41927 = inst_41954;var state_41978__$1 = (function (){var statearr_42006 = state_41978;(statearr_42006[(7)] = inst_41927);
(statearr_42006[(19)] = inst_41953);
return statearr_42006;
})();var statearr_42007_42042 = state_41978__$1;(statearr_42007_42042[(2)] = null);
(statearr_42007_42042[(1)] = (5));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (10)))
{var inst_41943 = (state_41978[(16)]);var inst_41942 = (state_41978[(8)]);var inst_41941 = (state_41978[(2)]);var inst_41942__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41941,(0),null);var inst_41943__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41941,(1),null);var inst_41944 = (inst_41942__$1 == null);var inst_41945 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41943__$1,change);var inst_41946 = (inst_41944) || (inst_41945);var state_41978__$1 = (function (){var statearr_42008 = state_41978;(statearr_42008[(16)] = inst_41943__$1);
(statearr_42008[(8)] = inst_41942__$1);
return statearr_42008;
})();if(cljs.core.truth_(inst_41946))
{var statearr_42009_42043 = state_41978__$1;(statearr_42009_42043[(1)] = (11));
} else
{var statearr_42010_42044 = state_41978__$1;(statearr_42010_42044[(1)] = (12));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (18)))
{var inst_41943 = (state_41978[(16)]);var inst_41938 = (state_41978[(17)]);var inst_41937 = (state_41978[(18)]);var inst_41960 = cljs.core.empty_QMARK_(inst_41938);var inst_41961 = (inst_41937.cljs$core$IFn$_invoke$arity$1 ? inst_41937.cljs$core$IFn$_invoke$arity$1(inst_41943) : inst_41937.call(null,inst_41943));var inst_41962 = cljs.core.not(inst_41961);var inst_41963 = (inst_41960) && (inst_41962);var state_41978__$1 = state_41978;var statearr_42011_42045 = state_41978__$1;(statearr_42011_42045[(2)] = inst_41963);
(statearr_42011_42045[(1)] = (19));
return cljs.core.constant$keyword$836;
} else
{if((state_val_41979 === (8)))
{var inst_41927 = (state_41978[(7)]);var state_41978__$1 = state_41978;var statearr_42012_42046 = state_41978__$1;(statearr_42012_42046[(2)] = inst_41927);
(statearr_42012_42046[(1)] = (9));
return cljs.core.constant$keyword$836;
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
});})(c__5708__auto___42020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___42020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42016[(0)] = state_machine__5694__auto__);
(statearr_42016[(1)] = (1));
return statearr_42016;
});
var state_machine__5694__auto____1 = (function (state_41978){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41978);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42017){if((e42017 instanceof Object))
{var ex__5697__auto__ = e42017;var statearr_42018_42047 = state_41978;(statearr_42018_42047[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41978);
return cljs.core.constant$keyword$836;
} else
{throw e42017;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__42048 = state_41978;
state_41978 = G__42048;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41978){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_42019 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42020);
return statearr_42019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42020,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj42050 = {};return obj42050;
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
return (function (p1__42051_SHARP_){if(cljs.core.truth_((p1__42051_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42051_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42051_SHARP_.call(null,topic))))
{return p1__42051_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42051_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t42176 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42176 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42177){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42177 = meta42177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42176.cljs$lang$type = true;
cljs.core.async.t42176.cljs$lang$ctorStr = "cljs.core.async/t42176";
cljs.core.async.t42176.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t42176");
});})(mults,ensure_mult))
;
cljs.core.async.t42176.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t42176.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t42176.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t42176.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.mults,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY));
});})(mults,ensure_mult))
;
cljs.core.async.t42176.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t42176.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42176.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t42176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42178){var self__ = this;
var _42178__$1 = this;return self__.meta42177;
});})(mults,ensure_mult))
;
cljs.core.async.t42176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42178,meta42177__$1){var self__ = this;
var _42178__$1 = this;return (new cljs.core.async.t42176(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42177__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t42176 = ((function (mults,ensure_mult){
return (function __GT_t42176(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42177){return (new cljs.core.async.t42176(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42177));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t42176(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___42300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42300,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42300,mults,ensure_mult,p){
return (function (state_42252){var state_val_42253 = (state_42252[(1)]);if((state_val_42253 === (7)))
{var inst_42248 = (state_42252[(2)]);var state_42252__$1 = state_42252;var statearr_42254_42301 = state_42252__$1;(statearr_42254_42301[(2)] = inst_42248);
(statearr_42254_42301[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (20)))
{var state_42252__$1 = state_42252;var statearr_42255_42302 = state_42252__$1;(statearr_42255_42302[(2)] = null);
(statearr_42255_42302[(1)] = (21));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (1)))
{var state_42252__$1 = state_42252;var statearr_42256_42303 = state_42252__$1;(statearr_42256_42303[(2)] = null);
(statearr_42256_42303[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (24)))
{var inst_42231 = (state_42252[(7)]);var inst_42181 = (state_42252[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42252,(23),Object,null,(22));var inst_42238 = cljs.core.async.muxch_STAR_(inst_42231);var state_42252__$1 = state_42252;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42252__$1,(25),inst_42238,inst_42181);
} else
{if((state_val_42253 === (4)))
{var inst_42181 = (state_42252[(8)]);var inst_42181__$1 = (state_42252[(2)]);var inst_42182 = (inst_42181__$1 == null);var state_42252__$1 = (function (){var statearr_42257 = state_42252;(statearr_42257[(8)] = inst_42181__$1);
return statearr_42257;
})();if(cljs.core.truth_(inst_42182))
{var statearr_42258_42304 = state_42252__$1;(statearr_42258_42304[(1)] = (5));
} else
{var statearr_42259_42305 = state_42252__$1;(statearr_42259_42305[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (15)))
{var inst_42223 = (state_42252[(2)]);var state_42252__$1 = state_42252;var statearr_42260_42306 = state_42252__$1;(statearr_42260_42306[(2)] = inst_42223);
(statearr_42260_42306[(1)] = (12));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (21)))
{var inst_42245 = (state_42252[(2)]);var state_42252__$1 = (function (){var statearr_42261 = state_42252;(statearr_42261[(9)] = inst_42245);
return statearr_42261;
})();var statearr_42262_42307 = state_42252__$1;(statearr_42262_42307[(2)] = null);
(statearr_42262_42307[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (13)))
{var inst_42205 = (state_42252[(10)]);var inst_42207 = cljs.core.chunked_seq_QMARK_(inst_42205);var state_42252__$1 = state_42252;if(inst_42207)
{var statearr_42263_42308 = state_42252__$1;(statearr_42263_42308[(1)] = (16));
} else
{var statearr_42264_42309 = state_42252__$1;(statearr_42264_42309[(1)] = (17));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (22)))
{var inst_42242 = (state_42252[(2)]);var state_42252__$1 = state_42252;var statearr_42265_42310 = state_42252__$1;(statearr_42265_42310[(2)] = inst_42242);
(statearr_42265_42310[(1)] = (21));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (6)))
{var inst_42231 = (state_42252[(7)]);var inst_42181 = (state_42252[(8)]);var inst_42229 = (state_42252[(11)]);var inst_42229__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42181) : topic_fn.call(null,inst_42181));var inst_42230 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_42231__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42230,inst_42229__$1);var state_42252__$1 = (function (){var statearr_42266 = state_42252;(statearr_42266[(7)] = inst_42231__$1);
(statearr_42266[(11)] = inst_42229__$1);
return statearr_42266;
})();if(cljs.core.truth_(inst_42231__$1))
{var statearr_42267_42311 = state_42252__$1;(statearr_42267_42311[(1)] = (19));
} else
{var statearr_42268_42312 = state_42252__$1;(statearr_42268_42312[(1)] = (20));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (25)))
{var inst_42240 = (state_42252[(2)]);var state_42252__$1 = state_42252;var statearr_42269_42313 = state_42252__$1;(statearr_42269_42313[(2)] = inst_42240);
cljs.core.async.impl.ioc_helpers.process_exception(state_42252__$1);
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (17)))
{var inst_42205 = (state_42252[(10)]);var inst_42214 = cljs.core.first(inst_42205);var inst_42215 = cljs.core.async.muxch_STAR_(inst_42214);var inst_42216 = cljs.core.async.close_BANG_(inst_42215);var inst_42217 = cljs.core.next(inst_42205);var inst_42191 = inst_42217;var inst_42192 = null;var inst_42193 = (0);var inst_42194 = (0);var state_42252__$1 = (function (){var statearr_42270 = state_42252;(statearr_42270[(12)] = inst_42193);
(statearr_42270[(13)] = inst_42216);
(statearr_42270[(14)] = inst_42191);
(statearr_42270[(15)] = inst_42194);
(statearr_42270[(16)] = inst_42192);
return statearr_42270;
})();var statearr_42271_42314 = state_42252__$1;(statearr_42271_42314[(2)] = null);
(statearr_42271_42314[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (3)))
{var inst_42250 = (state_42252[(2)]);var state_42252__$1 = state_42252;return cljs.core.async.impl.ioc_helpers.return_chan(state_42252__$1,inst_42250);
} else
{if((state_val_42253 === (12)))
{var inst_42225 = (state_42252[(2)]);var state_42252__$1 = state_42252;var statearr_42272_42315 = state_42252__$1;(statearr_42272_42315[(2)] = inst_42225);
(statearr_42272_42315[(1)] = (9));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (2)))
{var state_42252__$1 = state_42252;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42252__$1,(4),ch);
} else
{if((state_val_42253 === (23)))
{var inst_42229 = (state_42252[(11)]);var inst_42233 = (state_42252[(2)]);var inst_42234 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42229);var state_42252__$1 = (function (){var statearr_42273 = state_42252;(statearr_42273[(17)] = inst_42233);
return statearr_42273;
})();var statearr_42274_42316 = state_42252__$1;(statearr_42274_42316[(2)] = inst_42234);
cljs.core.async.impl.ioc_helpers.process_exception(state_42252__$1);
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (19)))
{var state_42252__$1 = state_42252;var statearr_42275_42317 = state_42252__$1;(statearr_42275_42317[(2)] = null);
(statearr_42275_42317[(1)] = (24));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (11)))
{var inst_42205 = (state_42252[(10)]);var inst_42191 = (state_42252[(14)]);var inst_42205__$1 = cljs.core.seq(inst_42191);var state_42252__$1 = (function (){var statearr_42276 = state_42252;(statearr_42276[(10)] = inst_42205__$1);
return statearr_42276;
})();if(inst_42205__$1)
{var statearr_42277_42318 = state_42252__$1;(statearr_42277_42318[(1)] = (13));
} else
{var statearr_42278_42319 = state_42252__$1;(statearr_42278_42319[(1)] = (14));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (9)))
{var inst_42227 = (state_42252[(2)]);var state_42252__$1 = state_42252;var statearr_42279_42320 = state_42252__$1;(statearr_42279_42320[(2)] = inst_42227);
(statearr_42279_42320[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (5)))
{var inst_42188 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_42189 = cljs.core.vals(inst_42188);var inst_42190 = cljs.core.seq(inst_42189);var inst_42191 = inst_42190;var inst_42192 = null;var inst_42193 = (0);var inst_42194 = (0);var state_42252__$1 = (function (){var statearr_42280 = state_42252;(statearr_42280[(12)] = inst_42193);
(statearr_42280[(14)] = inst_42191);
(statearr_42280[(15)] = inst_42194);
(statearr_42280[(16)] = inst_42192);
return statearr_42280;
})();var statearr_42281_42321 = state_42252__$1;(statearr_42281_42321[(2)] = null);
(statearr_42281_42321[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (14)))
{var state_42252__$1 = state_42252;var statearr_42285_42322 = state_42252__$1;(statearr_42285_42322[(2)] = null);
(statearr_42285_42322[(1)] = (15));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (16)))
{var inst_42205 = (state_42252[(10)]);var inst_42209 = cljs.core.chunk_first(inst_42205);var inst_42210 = cljs.core.chunk_rest(inst_42205);var inst_42211 = cljs.core.count(inst_42209);var inst_42191 = inst_42210;var inst_42192 = inst_42209;var inst_42193 = inst_42211;var inst_42194 = (0);var state_42252__$1 = (function (){var statearr_42286 = state_42252;(statearr_42286[(12)] = inst_42193);
(statearr_42286[(14)] = inst_42191);
(statearr_42286[(15)] = inst_42194);
(statearr_42286[(16)] = inst_42192);
return statearr_42286;
})();var statearr_42287_42323 = state_42252__$1;(statearr_42287_42323[(2)] = null);
(statearr_42287_42323[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (10)))
{var inst_42193 = (state_42252[(12)]);var inst_42191 = (state_42252[(14)]);var inst_42194 = (state_42252[(15)]);var inst_42192 = (state_42252[(16)]);var inst_42199 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42192,inst_42194);var inst_42200 = cljs.core.async.muxch_STAR_(inst_42199);var inst_42201 = cljs.core.async.close_BANG_(inst_42200);var inst_42202 = (inst_42194 + (1));var tmp42282 = inst_42193;var tmp42283 = inst_42191;var tmp42284 = inst_42192;var inst_42191__$1 = tmp42283;var inst_42192__$1 = tmp42284;var inst_42193__$1 = tmp42282;var inst_42194__$1 = inst_42202;var state_42252__$1 = (function (){var statearr_42288 = state_42252;(statearr_42288[(18)] = inst_42201);
(statearr_42288[(12)] = inst_42193__$1);
(statearr_42288[(14)] = inst_42191__$1);
(statearr_42288[(15)] = inst_42194__$1);
(statearr_42288[(16)] = inst_42192__$1);
return statearr_42288;
})();var statearr_42289_42324 = state_42252__$1;(statearr_42289_42324[(2)] = null);
(statearr_42289_42324[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (18)))
{var inst_42220 = (state_42252[(2)]);var state_42252__$1 = state_42252;var statearr_42290_42325 = state_42252__$1;(statearr_42290_42325[(2)] = inst_42220);
(statearr_42290_42325[(1)] = (15));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42253 === (8)))
{var inst_42193 = (state_42252[(12)]);var inst_42194 = (state_42252[(15)]);var inst_42196 = (inst_42194 < inst_42193);var inst_42197 = inst_42196;var state_42252__$1 = state_42252;if(cljs.core.truth_(inst_42197))
{var statearr_42291_42326 = state_42252__$1;(statearr_42291_42326[(1)] = (10));
} else
{var statearr_42292_42327 = state_42252__$1;(statearr_42292_42327[(1)] = (11));
}
return cljs.core.constant$keyword$836;
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
});})(c__5708__auto___42300,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___42300,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42296[(0)] = state_machine__5694__auto__);
(statearr_42296[(1)] = (1));
return statearr_42296;
});
var state_machine__5694__auto____1 = (function (state_42252){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42252);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42297){if((e42297 instanceof Object))
{var ex__5697__auto__ = e42297;var statearr_42298_42328 = state_42252;(statearr_42298_42328[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42252);
return cljs.core.constant$keyword$836;
} else
{throw e42297;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__42329 = state_42252;
state_42252 = G__42329;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42252){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42300,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_42299 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42300);
return statearr_42299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42300,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5708__auto___42466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42466,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42466,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42436){var state_val_42437 = (state_42436[(1)]);if((state_val_42437 === (7)))
{var state_42436__$1 = state_42436;var statearr_42438_42467 = state_42436__$1;(statearr_42438_42467[(2)] = null);
(statearr_42438_42467[(1)] = (8));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (1)))
{var state_42436__$1 = state_42436;var statearr_42439_42468 = state_42436__$1;(statearr_42439_42468[(2)] = null);
(statearr_42439_42468[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (4)))
{var inst_42400 = (state_42436[(7)]);var inst_42402 = (inst_42400 < cnt);var state_42436__$1 = state_42436;if(cljs.core.truth_(inst_42402))
{var statearr_42440_42469 = state_42436__$1;(statearr_42440_42469[(1)] = (6));
} else
{var statearr_42441_42470 = state_42436__$1;(statearr_42441_42470[(1)] = (7));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (15)))
{var inst_42432 = (state_42436[(2)]);var state_42436__$1 = state_42436;var statearr_42442_42471 = state_42436__$1;(statearr_42442_42471[(2)] = inst_42432);
(statearr_42442_42471[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (13)))
{var inst_42425 = cljs.core.async.close_BANG_(out);var state_42436__$1 = state_42436;var statearr_42443_42472 = state_42436__$1;(statearr_42443_42472[(2)] = inst_42425);
(statearr_42443_42472[(1)] = (15));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (6)))
{var state_42436__$1 = state_42436;var statearr_42444_42473 = state_42436__$1;(statearr_42444_42473[(2)] = null);
(statearr_42444_42473[(1)] = (11));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (3)))
{var inst_42434 = (state_42436[(2)]);var state_42436__$1 = state_42436;return cljs.core.async.impl.ioc_helpers.return_chan(state_42436__$1,inst_42434);
} else
{if((state_val_42437 === (12)))
{var inst_42422 = (state_42436[(8)]);var inst_42422__$1 = (state_42436[(2)]);var inst_42423 = cljs.core.some(cljs.core.nil_QMARK_,inst_42422__$1);var state_42436__$1 = (function (){var statearr_42445 = state_42436;(statearr_42445[(8)] = inst_42422__$1);
return statearr_42445;
})();if(cljs.core.truth_(inst_42423))
{var statearr_42446_42474 = state_42436__$1;(statearr_42446_42474[(1)] = (13));
} else
{var statearr_42447_42475 = state_42436__$1;(statearr_42447_42475[(1)] = (14));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (2)))
{var inst_42399 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));var inst_42400 = (0);var state_42436__$1 = (function (){var statearr_42448 = state_42436;(statearr_42448[(9)] = inst_42399);
(statearr_42448[(7)] = inst_42400);
return statearr_42448;
})();var statearr_42449_42476 = state_42436__$1;(statearr_42449_42476[(2)] = null);
(statearr_42449_42476[(1)] = (4));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (11)))
{var inst_42400 = (state_42436[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42436,(10),Object,null,(9));var inst_42409 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42400) : chs__$1.call(null,inst_42400));var inst_42410 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42400) : done.call(null,inst_42400));var inst_42411 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42409,inst_42410);var state_42436__$1 = state_42436;var statearr_42450_42477 = state_42436__$1;(statearr_42450_42477[(2)] = inst_42411);
cljs.core.async.impl.ioc_helpers.process_exception(state_42436__$1);
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (9)))
{var inst_42400 = (state_42436[(7)]);var inst_42413 = (state_42436[(2)]);var inst_42414 = (inst_42400 + (1));var inst_42400__$1 = inst_42414;var state_42436__$1 = (function (){var statearr_42451 = state_42436;(statearr_42451[(7)] = inst_42400__$1);
(statearr_42451[(10)] = inst_42413);
return statearr_42451;
})();var statearr_42452_42478 = state_42436__$1;(statearr_42452_42478[(2)] = null);
(statearr_42452_42478[(1)] = (4));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (5)))
{var inst_42420 = (state_42436[(2)]);var state_42436__$1 = (function (){var statearr_42453 = state_42436;(statearr_42453[(11)] = inst_42420);
return statearr_42453;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42436__$1,(12),dchan);
} else
{if((state_val_42437 === (14)))
{var inst_42422 = (state_42436[(8)]);var inst_42427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42422);var state_42436__$1 = state_42436;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42436__$1,(16),out,inst_42427);
} else
{if((state_val_42437 === (16)))
{var inst_42429 = (state_42436[(2)]);var state_42436__$1 = (function (){var statearr_42454 = state_42436;(statearr_42454[(12)] = inst_42429);
return statearr_42454;
})();var statearr_42455_42479 = state_42436__$1;(statearr_42455_42479[(2)] = null);
(statearr_42455_42479[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (10)))
{var inst_42404 = (state_42436[(2)]);var inst_42405 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_42436__$1 = (function (){var statearr_42456 = state_42436;(statearr_42456[(13)] = inst_42404);
return statearr_42456;
})();var statearr_42457_42480 = state_42436__$1;(statearr_42457_42480[(2)] = inst_42405);
cljs.core.async.impl.ioc_helpers.process_exception(state_42436__$1);
return cljs.core.constant$keyword$836;
} else
{if((state_val_42437 === (8)))
{var inst_42418 = (state_42436[(2)]);var state_42436__$1 = state_42436;var statearr_42458_42481 = state_42436__$1;(statearr_42458_42481[(2)] = inst_42418);
(statearr_42458_42481[(1)] = (5));
return cljs.core.constant$keyword$836;
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
});})(c__5708__auto___42466,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___42466,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42462[(0)] = state_machine__5694__auto__);
(statearr_42462[(1)] = (1));
return statearr_42462;
});
var state_machine__5694__auto____1 = (function (state_42436){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42436);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42463){if((e42463 instanceof Object))
{var ex__5697__auto__ = e42463;var statearr_42464_42482 = state_42436;(statearr_42464_42482[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42436);
return cljs.core.constant$keyword$836;
} else
{throw e42463;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__42483 = state_42436;
state_42436 = G__42483;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42436){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42466,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_42465 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42466);
return statearr_42465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42466,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___42591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42591,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42591,out){
return (function (state_42567){var state_val_42568 = (state_42567[(1)]);if((state_val_42568 === (7)))
{var inst_42547 = (state_42567[(7)]);var inst_42546 = (state_42567[(8)]);var inst_42546__$1 = (state_42567[(2)]);var inst_42547__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42546__$1,(0),null);var inst_42548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42546__$1,(1),null);var inst_42549 = (inst_42547__$1 == null);var state_42567__$1 = (function (){var statearr_42569 = state_42567;(statearr_42569[(7)] = inst_42547__$1);
(statearr_42569[(8)] = inst_42546__$1);
(statearr_42569[(9)] = inst_42548);
return statearr_42569;
})();if(cljs.core.truth_(inst_42549))
{var statearr_42570_42592 = state_42567__$1;(statearr_42570_42592[(1)] = (8));
} else
{var statearr_42571_42593 = state_42567__$1;(statearr_42571_42593[(1)] = (9));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42568 === (1)))
{var inst_42538 = cljs.core.vec(chs);var inst_42539 = inst_42538;var state_42567__$1 = (function (){var statearr_42572 = state_42567;(statearr_42572[(10)] = inst_42539);
return statearr_42572;
})();var statearr_42573_42594 = state_42567__$1;(statearr_42573_42594[(2)] = null);
(statearr_42573_42594[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42568 === (4)))
{var inst_42539 = (state_42567[(10)]);var state_42567__$1 = state_42567;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_42567__$1,(7),inst_42539);
} else
{if((state_val_42568 === (6)))
{var inst_42563 = (state_42567[(2)]);var state_42567__$1 = state_42567;var statearr_42574_42595 = state_42567__$1;(statearr_42574_42595[(2)] = inst_42563);
(statearr_42574_42595[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42568 === (3)))
{var inst_42565 = (state_42567[(2)]);var state_42567__$1 = state_42567;return cljs.core.async.impl.ioc_helpers.return_chan(state_42567__$1,inst_42565);
} else
{if((state_val_42568 === (2)))
{var inst_42539 = (state_42567[(10)]);var inst_42541 = cljs.core.count(inst_42539);var inst_42542 = (inst_42541 > (0));var state_42567__$1 = state_42567;if(cljs.core.truth_(inst_42542))
{var statearr_42576_42596 = state_42567__$1;(statearr_42576_42596[(1)] = (4));
} else
{var statearr_42577_42597 = state_42567__$1;(statearr_42577_42597[(1)] = (5));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42568 === (11)))
{var inst_42539 = (state_42567[(10)]);var inst_42556 = (state_42567[(2)]);var tmp42575 = inst_42539;var inst_42539__$1 = tmp42575;var state_42567__$1 = (function (){var statearr_42578 = state_42567;(statearr_42578[(10)] = inst_42539__$1);
(statearr_42578[(11)] = inst_42556);
return statearr_42578;
})();var statearr_42579_42598 = state_42567__$1;(statearr_42579_42598[(2)] = null);
(statearr_42579_42598[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42568 === (9)))
{var inst_42547 = (state_42567[(7)]);var state_42567__$1 = state_42567;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42567__$1,(11),out,inst_42547);
} else
{if((state_val_42568 === (5)))
{var inst_42561 = cljs.core.async.close_BANG_(out);var state_42567__$1 = state_42567;var statearr_42580_42599 = state_42567__$1;(statearr_42580_42599[(2)] = inst_42561);
(statearr_42580_42599[(1)] = (6));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42568 === (10)))
{var inst_42559 = (state_42567[(2)]);var state_42567__$1 = state_42567;var statearr_42581_42600 = state_42567__$1;(statearr_42581_42600[(2)] = inst_42559);
(statearr_42581_42600[(1)] = (6));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42568 === (8)))
{var inst_42539 = (state_42567[(10)]);var inst_42547 = (state_42567[(7)]);var inst_42546 = (state_42567[(8)]);var inst_42548 = (state_42567[(9)]);var inst_42551 = (function (){var c = inst_42548;var v = inst_42547;var vec__42544 = inst_42546;var cs = inst_42539;return ((function (c,v,vec__42544,cs,inst_42539,inst_42547,inst_42546,inst_42548,state_val_42568,c__5708__auto___42591,out){
return (function (p1__42484_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42484_SHARP_);
});
;})(c,v,vec__42544,cs,inst_42539,inst_42547,inst_42546,inst_42548,state_val_42568,c__5708__auto___42591,out))
})();var inst_42552 = cljs.core.filterv(inst_42551,inst_42539);var inst_42539__$1 = inst_42552;var state_42567__$1 = (function (){var statearr_42582 = state_42567;(statearr_42582[(10)] = inst_42539__$1);
return statearr_42582;
})();var statearr_42583_42601 = state_42567__$1;(statearr_42583_42601[(2)] = null);
(statearr_42583_42601[(1)] = (2));
return cljs.core.constant$keyword$836;
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
});})(c__5708__auto___42591,out))
;return ((function (switch__5693__auto__,c__5708__auto___42591,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42587 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42587[(0)] = state_machine__5694__auto__);
(statearr_42587[(1)] = (1));
return statearr_42587;
});
var state_machine__5694__auto____1 = (function (state_42567){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42567);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42588){if((e42588 instanceof Object))
{var ex__5697__auto__ = e42588;var statearr_42589_42602 = state_42567;(statearr_42589_42602[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42567);
return cljs.core.constant$keyword$836;
} else
{throw e42588;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__42603 = state_42567;
state_42567 = G__42603;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42567){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42591,out))
})();var state__5710__auto__ = (function (){var statearr_42590 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42591);
return statearr_42590;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42591,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___42696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42696,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42696,out){
return (function (state_42673){var state_val_42674 = (state_42673[(1)]);if((state_val_42674 === (7)))
{var inst_42655 = (state_42673[(7)]);var inst_42655__$1 = (state_42673[(2)]);var inst_42656 = (inst_42655__$1 == null);var inst_42657 = cljs.core.not(inst_42656);var state_42673__$1 = (function (){var statearr_42675 = state_42673;(statearr_42675[(7)] = inst_42655__$1);
return statearr_42675;
})();if(inst_42657)
{var statearr_42676_42697 = state_42673__$1;(statearr_42676_42697[(1)] = (8));
} else
{var statearr_42677_42698 = state_42673__$1;(statearr_42677_42698[(1)] = (9));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42674 === (1)))
{var inst_42650 = (0);var state_42673__$1 = (function (){var statearr_42678 = state_42673;(statearr_42678[(8)] = inst_42650);
return statearr_42678;
})();var statearr_42679_42699 = state_42673__$1;(statearr_42679_42699[(2)] = null);
(statearr_42679_42699[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42674 === (4)))
{var state_42673__$1 = state_42673;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42673__$1,(7),ch);
} else
{if((state_val_42674 === (6)))
{var inst_42668 = (state_42673[(2)]);var state_42673__$1 = state_42673;var statearr_42680_42700 = state_42673__$1;(statearr_42680_42700[(2)] = inst_42668);
(statearr_42680_42700[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42674 === (3)))
{var inst_42670 = (state_42673[(2)]);var inst_42671 = cljs.core.async.close_BANG_(out);var state_42673__$1 = (function (){var statearr_42681 = state_42673;(statearr_42681[(9)] = inst_42670);
return statearr_42681;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_42673__$1,inst_42671);
} else
{if((state_val_42674 === (2)))
{var inst_42650 = (state_42673[(8)]);var inst_42652 = (inst_42650 < n);var state_42673__$1 = state_42673;if(cljs.core.truth_(inst_42652))
{var statearr_42682_42701 = state_42673__$1;(statearr_42682_42701[(1)] = (4));
} else
{var statearr_42683_42702 = state_42673__$1;(statearr_42683_42702[(1)] = (5));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42674 === (11)))
{var inst_42650 = (state_42673[(8)]);var inst_42660 = (state_42673[(2)]);var inst_42661 = (inst_42650 + (1));var inst_42650__$1 = inst_42661;var state_42673__$1 = (function (){var statearr_42684 = state_42673;(statearr_42684[(10)] = inst_42660);
(statearr_42684[(8)] = inst_42650__$1);
return statearr_42684;
})();var statearr_42685_42703 = state_42673__$1;(statearr_42685_42703[(2)] = null);
(statearr_42685_42703[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42674 === (9)))
{var state_42673__$1 = state_42673;var statearr_42686_42704 = state_42673__$1;(statearr_42686_42704[(2)] = null);
(statearr_42686_42704[(1)] = (10));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42674 === (5)))
{var state_42673__$1 = state_42673;var statearr_42687_42705 = state_42673__$1;(statearr_42687_42705[(2)] = null);
(statearr_42687_42705[(1)] = (6));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42674 === (10)))
{var inst_42665 = (state_42673[(2)]);var state_42673__$1 = state_42673;var statearr_42688_42706 = state_42673__$1;(statearr_42688_42706[(2)] = inst_42665);
(statearr_42688_42706[(1)] = (6));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42674 === (8)))
{var inst_42655 = (state_42673[(7)]);var state_42673__$1 = state_42673;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42673__$1,(11),out,inst_42655);
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
});})(c__5708__auto___42696,out))
;return ((function (switch__5693__auto__,c__5708__auto___42696,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42692 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_42692[(0)] = state_machine__5694__auto__);
(statearr_42692[(1)] = (1));
return statearr_42692;
});
var state_machine__5694__auto____1 = (function (state_42673){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42673);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42693){if((e42693 instanceof Object))
{var ex__5697__auto__ = e42693;var statearr_42694_42707 = state_42673;(statearr_42694_42707[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42673);
return cljs.core.constant$keyword$836;
} else
{throw e42693;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__42708 = state_42673;
state_42673 = G__42708;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42673){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42696,out))
})();var state__5710__auto__ = (function (){var statearr_42695 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42696);
return statearr_42695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42696,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___42805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42805,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42805,out){
return (function (state_42780){var state_val_42781 = (state_42780[(1)]);if((state_val_42781 === (7)))
{var inst_42775 = (state_42780[(2)]);var state_42780__$1 = state_42780;var statearr_42782_42806 = state_42780__$1;(statearr_42782_42806[(2)] = inst_42775);
(statearr_42782_42806[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42781 === (1)))
{var inst_42757 = null;var state_42780__$1 = (function (){var statearr_42783 = state_42780;(statearr_42783[(7)] = inst_42757);
return statearr_42783;
})();var statearr_42784_42807 = state_42780__$1;(statearr_42784_42807[(2)] = null);
(statearr_42784_42807[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42781 === (4)))
{var inst_42760 = (state_42780[(8)]);var inst_42760__$1 = (state_42780[(2)]);var inst_42761 = (inst_42760__$1 == null);var inst_42762 = cljs.core.not(inst_42761);var state_42780__$1 = (function (){var statearr_42785 = state_42780;(statearr_42785[(8)] = inst_42760__$1);
return statearr_42785;
})();if(inst_42762)
{var statearr_42786_42808 = state_42780__$1;(statearr_42786_42808[(1)] = (5));
} else
{var statearr_42787_42809 = state_42780__$1;(statearr_42787_42809[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42781 === (6)))
{var state_42780__$1 = state_42780;var statearr_42788_42810 = state_42780__$1;(statearr_42788_42810[(2)] = null);
(statearr_42788_42810[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42781 === (3)))
{var inst_42777 = (state_42780[(2)]);var inst_42778 = cljs.core.async.close_BANG_(out);var state_42780__$1 = (function (){var statearr_42789 = state_42780;(statearr_42789[(9)] = inst_42777);
return statearr_42789;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_42780__$1,inst_42778);
} else
{if((state_val_42781 === (2)))
{var state_42780__$1 = state_42780;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42780__$1,(4),ch);
} else
{if((state_val_42781 === (11)))
{var inst_42760 = (state_42780[(8)]);var inst_42769 = (state_42780[(2)]);var inst_42757 = inst_42760;var state_42780__$1 = (function (){var statearr_42790 = state_42780;(statearr_42790[(7)] = inst_42757);
(statearr_42790[(10)] = inst_42769);
return statearr_42790;
})();var statearr_42791_42811 = state_42780__$1;(statearr_42791_42811[(2)] = null);
(statearr_42791_42811[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42781 === (9)))
{var inst_42760 = (state_42780[(8)]);var state_42780__$1 = state_42780;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42780__$1,(11),out,inst_42760);
} else
{if((state_val_42781 === (5)))
{var inst_42757 = (state_42780[(7)]);var inst_42760 = (state_42780[(8)]);var inst_42764 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42760,inst_42757);var state_42780__$1 = state_42780;if(inst_42764)
{var statearr_42793_42812 = state_42780__$1;(statearr_42793_42812[(1)] = (8));
} else
{var statearr_42794_42813 = state_42780__$1;(statearr_42794_42813[(1)] = (9));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42781 === (10)))
{var inst_42772 = (state_42780[(2)]);var state_42780__$1 = state_42780;var statearr_42795_42814 = state_42780__$1;(statearr_42795_42814[(2)] = inst_42772);
(statearr_42795_42814[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42781 === (8)))
{var inst_42757 = (state_42780[(7)]);var tmp42792 = inst_42757;var inst_42757__$1 = tmp42792;var state_42780__$1 = (function (){var statearr_42796 = state_42780;(statearr_42796[(7)] = inst_42757__$1);
return statearr_42796;
})();var statearr_42797_42815 = state_42780__$1;(statearr_42797_42815[(2)] = null);
(statearr_42797_42815[(1)] = (2));
return cljs.core.constant$keyword$836;
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
});})(c__5708__auto___42805,out))
;return ((function (switch__5693__auto__,c__5708__auto___42805,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42801 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_42801[(0)] = state_machine__5694__auto__);
(statearr_42801[(1)] = (1));
return statearr_42801;
});
var state_machine__5694__auto____1 = (function (state_42780){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42780);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42802){if((e42802 instanceof Object))
{var ex__5697__auto__ = e42802;var statearr_42803_42816 = state_42780;(statearr_42803_42816[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42780);
return cljs.core.constant$keyword$836;
} else
{throw e42802;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__42817 = state_42780;
state_42780 = G__42817;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42780){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42805,out))
})();var state__5710__auto__ = (function (){var statearr_42804 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42805);
return statearr_42804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42805,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___42952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42952,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42952,out){
return (function (state_42922){var state_val_42923 = (state_42922[(1)]);if((state_val_42923 === (7)))
{var inst_42918 = (state_42922[(2)]);var state_42922__$1 = state_42922;var statearr_42924_42953 = state_42922__$1;(statearr_42924_42953[(2)] = inst_42918);
(statearr_42924_42953[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42923 === (1)))
{var inst_42885 = (new Array(n));var inst_42886 = inst_42885;var inst_42887 = (0);var state_42922__$1 = (function (){var statearr_42925 = state_42922;(statearr_42925[(7)] = inst_42886);
(statearr_42925[(8)] = inst_42887);
return statearr_42925;
})();var statearr_42926_42954 = state_42922__$1;(statearr_42926_42954[(2)] = null);
(statearr_42926_42954[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42923 === (4)))
{var inst_42890 = (state_42922[(9)]);var inst_42890__$1 = (state_42922[(2)]);var inst_42891 = (inst_42890__$1 == null);var inst_42892 = cljs.core.not(inst_42891);var state_42922__$1 = (function (){var statearr_42927 = state_42922;(statearr_42927[(9)] = inst_42890__$1);
return statearr_42927;
})();if(inst_42892)
{var statearr_42928_42955 = state_42922__$1;(statearr_42928_42955[(1)] = (5));
} else
{var statearr_42929_42956 = state_42922__$1;(statearr_42929_42956[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42923 === (15)))
{var inst_42912 = (state_42922[(2)]);var state_42922__$1 = state_42922;var statearr_42930_42957 = state_42922__$1;(statearr_42930_42957[(2)] = inst_42912);
(statearr_42930_42957[(1)] = (14));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42923 === (13)))
{var state_42922__$1 = state_42922;var statearr_42931_42958 = state_42922__$1;(statearr_42931_42958[(2)] = null);
(statearr_42931_42958[(1)] = (14));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42923 === (6)))
{var inst_42887 = (state_42922[(8)]);var inst_42908 = (inst_42887 > (0));var state_42922__$1 = state_42922;if(cljs.core.truth_(inst_42908))
{var statearr_42932_42959 = state_42922__$1;(statearr_42932_42959[(1)] = (12));
} else
{var statearr_42933_42960 = state_42922__$1;(statearr_42933_42960[(1)] = (13));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42923 === (3)))
{var inst_42920 = (state_42922[(2)]);var state_42922__$1 = state_42922;return cljs.core.async.impl.ioc_helpers.return_chan(state_42922__$1,inst_42920);
} else
{if((state_val_42923 === (12)))
{var inst_42886 = (state_42922[(7)]);var inst_42910 = cljs.core.vec(inst_42886);var state_42922__$1 = state_42922;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42922__$1,(15),out,inst_42910);
} else
{if((state_val_42923 === (2)))
{var state_42922__$1 = state_42922;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42922__$1,(4),ch);
} else
{if((state_val_42923 === (11)))
{var inst_42902 = (state_42922[(2)]);var inst_42903 = (new Array(n));var inst_42886 = inst_42903;var inst_42887 = (0);var state_42922__$1 = (function (){var statearr_42934 = state_42922;(statearr_42934[(10)] = inst_42902);
(statearr_42934[(7)] = inst_42886);
(statearr_42934[(8)] = inst_42887);
return statearr_42934;
})();var statearr_42935_42961 = state_42922__$1;(statearr_42935_42961[(2)] = null);
(statearr_42935_42961[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42923 === (9)))
{var inst_42886 = (state_42922[(7)]);var inst_42900 = cljs.core.vec(inst_42886);var state_42922__$1 = state_42922;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42922__$1,(11),out,inst_42900);
} else
{if((state_val_42923 === (5)))
{var inst_42895 = (state_42922[(11)]);var inst_42890 = (state_42922[(9)]);var inst_42886 = (state_42922[(7)]);var inst_42887 = (state_42922[(8)]);var inst_42894 = (inst_42886[inst_42887] = inst_42890);var inst_42895__$1 = (inst_42887 + (1));var inst_42896 = (inst_42895__$1 < n);var state_42922__$1 = (function (){var statearr_42936 = state_42922;(statearr_42936[(11)] = inst_42895__$1);
(statearr_42936[(12)] = inst_42894);
return statearr_42936;
})();if(cljs.core.truth_(inst_42896))
{var statearr_42937_42962 = state_42922__$1;(statearr_42937_42962[(1)] = (8));
} else
{var statearr_42938_42963 = state_42922__$1;(statearr_42938_42963[(1)] = (9));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_42923 === (14)))
{var inst_42915 = (state_42922[(2)]);var inst_42916 = cljs.core.async.close_BANG_(out);var state_42922__$1 = (function (){var statearr_42940 = state_42922;(statearr_42940[(13)] = inst_42915);
return statearr_42940;
})();var statearr_42941_42964 = state_42922__$1;(statearr_42941_42964[(2)] = inst_42916);
(statearr_42941_42964[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42923 === (10)))
{var inst_42906 = (state_42922[(2)]);var state_42922__$1 = state_42922;var statearr_42942_42965 = state_42922__$1;(statearr_42942_42965[(2)] = inst_42906);
(statearr_42942_42965[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_42923 === (8)))
{var inst_42895 = (state_42922[(11)]);var inst_42886 = (state_42922[(7)]);var tmp42939 = inst_42886;var inst_42886__$1 = tmp42939;var inst_42887 = inst_42895;var state_42922__$1 = (function (){var statearr_42943 = state_42922;(statearr_42943[(7)] = inst_42886__$1);
(statearr_42943[(8)] = inst_42887);
return statearr_42943;
})();var statearr_42944_42966 = state_42922__$1;(statearr_42944_42966[(2)] = null);
(statearr_42944_42966[(1)] = (2));
return cljs.core.constant$keyword$836;
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
});})(c__5708__auto___42952,out))
;return ((function (switch__5693__auto__,c__5708__auto___42952,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42948[(0)] = state_machine__5694__auto__);
(statearr_42948[(1)] = (1));
return statearr_42948;
});
var state_machine__5694__auto____1 = (function (state_42922){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42922);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42949){if((e42949 instanceof Object))
{var ex__5697__auto__ = e42949;var statearr_42950_42967 = state_42922;(statearr_42950_42967[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42922);
return cljs.core.constant$keyword$836;
} else
{throw e42949;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__42968 = state_42922;
state_42922 = G__42968;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42922){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42952,out))
})();var state__5710__auto__ = (function (){var statearr_42951 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42952);
return statearr_42951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42952,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___43111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___43111,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___43111,out){
return (function (state_43081){var state_val_43082 = (state_43081[(1)]);if((state_val_43082 === (7)))
{var inst_43077 = (state_43081[(2)]);var state_43081__$1 = state_43081;var statearr_43083_43112 = state_43081__$1;(statearr_43083_43112[(2)] = inst_43077);
(statearr_43083_43112[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_43082 === (1)))
{var inst_43040 = [];var inst_43041 = inst_43040;var inst_43042 = cljs.core.constant$keyword$849;var state_43081__$1 = (function (){var statearr_43084 = state_43081;(statearr_43084[(7)] = inst_43041);
(statearr_43084[(8)] = inst_43042);
return statearr_43084;
})();var statearr_43085_43113 = state_43081__$1;(statearr_43085_43113[(2)] = null);
(statearr_43085_43113[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_43082 === (4)))
{var inst_43045 = (state_43081[(9)]);var inst_43045__$1 = (state_43081[(2)]);var inst_43046 = (inst_43045__$1 == null);var inst_43047 = cljs.core.not(inst_43046);var state_43081__$1 = (function (){var statearr_43086 = state_43081;(statearr_43086[(9)] = inst_43045__$1);
return statearr_43086;
})();if(inst_43047)
{var statearr_43087_43114 = state_43081__$1;(statearr_43087_43114[(1)] = (5));
} else
{var statearr_43088_43115 = state_43081__$1;(statearr_43088_43115[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_43082 === (15)))
{var inst_43071 = (state_43081[(2)]);var state_43081__$1 = state_43081;var statearr_43089_43116 = state_43081__$1;(statearr_43089_43116[(2)] = inst_43071);
(statearr_43089_43116[(1)] = (14));
return cljs.core.constant$keyword$836;
} else
{if((state_val_43082 === (13)))
{var state_43081__$1 = state_43081;var statearr_43090_43117 = state_43081__$1;(statearr_43090_43117[(2)] = null);
(statearr_43090_43117[(1)] = (14));
return cljs.core.constant$keyword$836;
} else
{if((state_val_43082 === (6)))
{var inst_43041 = (state_43081[(7)]);var inst_43066 = inst_43041.length;var inst_43067 = (inst_43066 > (0));var state_43081__$1 = state_43081;if(cljs.core.truth_(inst_43067))
{var statearr_43091_43118 = state_43081__$1;(statearr_43091_43118[(1)] = (12));
} else
{var statearr_43092_43119 = state_43081__$1;(statearr_43092_43119[(1)] = (13));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_43082 === (3)))
{var inst_43079 = (state_43081[(2)]);var state_43081__$1 = state_43081;return cljs.core.async.impl.ioc_helpers.return_chan(state_43081__$1,inst_43079);
} else
{if((state_val_43082 === (12)))
{var inst_43041 = (state_43081[(7)]);var inst_43069 = cljs.core.vec(inst_43041);var state_43081__$1 = state_43081;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43081__$1,(15),out,inst_43069);
} else
{if((state_val_43082 === (2)))
{var state_43081__$1 = state_43081;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43081__$1,(4),ch);
} else
{if((state_val_43082 === (11)))
{var inst_43049 = (state_43081[(10)]);var inst_43045 = (state_43081[(9)]);var inst_43059 = (state_43081[(2)]);var inst_43060 = [];var inst_43061 = inst_43060.push(inst_43045);var inst_43041 = inst_43060;var inst_43042 = inst_43049;var state_43081__$1 = (function (){var statearr_43093 = state_43081;(statearr_43093[(7)] = inst_43041);
(statearr_43093[(11)] = inst_43061);
(statearr_43093[(8)] = inst_43042);
(statearr_43093[(12)] = inst_43059);
return statearr_43093;
})();var statearr_43094_43120 = state_43081__$1;(statearr_43094_43120[(2)] = null);
(statearr_43094_43120[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_43082 === (9)))
{var inst_43041 = (state_43081[(7)]);var inst_43057 = cljs.core.vec(inst_43041);var state_43081__$1 = state_43081;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43081__$1,(11),out,inst_43057);
} else
{if((state_val_43082 === (5)))
{var inst_43049 = (state_43081[(10)]);var inst_43042 = (state_43081[(8)]);var inst_43045 = (state_43081[(9)]);var inst_43049__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43045) : f.call(null,inst_43045));var inst_43050 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43049__$1,inst_43042);var inst_43051 = cljs.core.keyword_identical_QMARK_(inst_43042,cljs.core.constant$keyword$849);var inst_43052 = (inst_43050) || (inst_43051);var state_43081__$1 = (function (){var statearr_43095 = state_43081;(statearr_43095[(10)] = inst_43049__$1);
return statearr_43095;
})();if(cljs.core.truth_(inst_43052))
{var statearr_43096_43121 = state_43081__$1;(statearr_43096_43121[(1)] = (8));
} else
{var statearr_43097_43122 = state_43081__$1;(statearr_43097_43122[(1)] = (9));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_43082 === (14)))
{var inst_43074 = (state_43081[(2)]);var inst_43075 = cljs.core.async.close_BANG_(out);var state_43081__$1 = (function (){var statearr_43099 = state_43081;(statearr_43099[(13)] = inst_43074);
return statearr_43099;
})();var statearr_43100_43123 = state_43081__$1;(statearr_43100_43123[(2)] = inst_43075);
(statearr_43100_43123[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_43082 === (10)))
{var inst_43064 = (state_43081[(2)]);var state_43081__$1 = state_43081;var statearr_43101_43124 = state_43081__$1;(statearr_43101_43124[(2)] = inst_43064);
(statearr_43101_43124[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_43082 === (8)))
{var inst_43041 = (state_43081[(7)]);var inst_43049 = (state_43081[(10)]);var inst_43045 = (state_43081[(9)]);var inst_43054 = inst_43041.push(inst_43045);var tmp43098 = inst_43041;var inst_43041__$1 = tmp43098;var inst_43042 = inst_43049;var state_43081__$1 = (function (){var statearr_43102 = state_43081;(statearr_43102[(7)] = inst_43041__$1);
(statearr_43102[(14)] = inst_43054);
(statearr_43102[(8)] = inst_43042);
return statearr_43102;
})();var statearr_43103_43125 = state_43081__$1;(statearr_43103_43125[(2)] = null);
(statearr_43103_43125[(1)] = (2));
return cljs.core.constant$keyword$836;
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
});})(c__5708__auto___43111,out))
;return ((function (switch__5693__auto__,c__5708__auto___43111,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_43107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43107[(0)] = state_machine__5694__auto__);
(statearr_43107[(1)] = (1));
return statearr_43107;
});
var state_machine__5694__auto____1 = (function (state_43081){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_43081);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e43108){if((e43108 instanceof Object))
{var ex__5697__auto__ = e43108;var statearr_43109_43126 = state_43081;(statearr_43109_43126[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43081);
return cljs.core.constant$keyword$836;
} else
{throw e43108;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__43127 = state_43081;
state_43081 = G__43127;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_43081){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_43081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___43111,out))
})();var state__5710__auto__ = (function (){var statearr_43110 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_43110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___43111);
return statearr_43110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___43111,out))
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
