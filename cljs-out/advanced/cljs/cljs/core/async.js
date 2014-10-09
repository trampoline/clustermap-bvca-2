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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t48771 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48771 = (function (f,fn_handler,meta48772){
this.f = f;
this.fn_handler = fn_handler;
this.meta48772 = meta48772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48771.cljs$lang$type = true;
cljs.core.async.t48771.cljs$lang$ctorStr = "cljs.core.async/t48771";
cljs.core.async.t48771.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t48771");
});
cljs.core.async.t48771.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t48771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t48771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48773){var self__ = this;
var _48773__$1 = this;return self__.meta48772;
});
cljs.core.async.t48771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48773,meta48772__$1){var self__ = this;
var _48773__$1 = this;return (new cljs.core.async.t48771(self__.f,self__.fn_handler,meta48772__$1));
});
cljs.core.async.__GT_t48771 = (function __GT_t48771(f__$1,fn_handler__$1,meta48772){return (new cljs.core.async.t48771(f__$1,fn_handler__$1,meta48772));
});
}
return (new cljs.core.async.t48771(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__48775 = buff;if(G__48775)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__48775.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__48775.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__48775);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__48775);
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
{var val_48776 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48776) : fn1.call(null,val_48776));
} else
{cljs.core.async.impl.dispatch.run(((function (val_48776,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48776) : fn1.call(null,val_48776));
});})(val_48776,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___48777 = n;var x_48778 = (0);while(true){
if((x_48778 < n__4414__auto___48777))
{(a[x_48778] = (0));
{
var G__48779 = (x_48778 + (1));
x_48778 = G__48779;
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
var G__48780 = (i + (1));
i = G__48780;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));if(typeof cljs.core.async.t48784 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48784 = (function (flag,alt_flag,meta48785){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta48785 = meta48785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48784.cljs$lang$type = true;
cljs.core.async.t48784.cljs$lang$ctorStr = "cljs.core.async/t48784";
cljs.core.async.t48784.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t48784");
});})(flag))
;
cljs.core.async.t48784.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;
cljs.core.async.t48784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));
return true;
});})(flag))
;
cljs.core.async.t48784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48786){var self__ = this;
var _48786__$1 = this;return self__.meta48785;
});})(flag))
;
cljs.core.async.t48784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48786,meta48785__$1){var self__ = this;
var _48786__$1 = this;return (new cljs.core.async.t48784(self__.flag,self__.alt_flag,meta48785__$1));
});})(flag))
;
cljs.core.async.__GT_t48784 = ((function (flag){
return (function __GT_t48784(flag__$1,alt_flag__$1,meta48785){return (new cljs.core.async.t48784(flag__$1,alt_flag__$1,meta48785));
});})(flag))
;
}
return (new cljs.core.async.t48784(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t48790 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48790 = (function (cb,flag,alt_handler,meta48791){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta48791 = meta48791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48790.cljs$lang$type = true;
cljs.core.async.t48790.cljs$lang$ctorStr = "cljs.core.async/t48790";
cljs.core.async.t48790.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t48790");
});
cljs.core.async.t48790.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t48790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t48790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48792){var self__ = this;
var _48792__$1 = this;return self__.meta48791;
});
cljs.core.async.t48790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48792,meta48791__$1){var self__ = this;
var _48792__$1 = this;return (new cljs.core.async.t48790(self__.cb,self__.flag,self__.alt_handler,meta48791__$1));
});
cljs.core.async.__GT_t48790 = (function __GT_t48790(cb__$1,flag__$1,alt_handler__$1,meta48791){return (new cljs.core.async.t48790(cb__$1,flag__$1,alt_handler__$1,meta48791));
});
}
return (new cljs.core.async.t48790(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$942.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48793_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48793_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48793_SHARP_,port], null)));
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
var G__48794 = (i + (1));
i = G__48794;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$927))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3546__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$927.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$927], null));
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
var alts_BANG___delegate = function (ports,p__48795){var map__48797 = p__48795;var map__48797__$1 = ((cljs.core.seq_QMARK_(map__48797))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48797):map__48797);var opts = map__48797__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__48795 = null;if (arguments.length > 1) {
  p__48795 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__48795);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__48798){
var ports = cljs.core.first(arglist__48798);
var p__48795 = cljs.core.rest(arglist__48798);
return alts_BANG___delegate(ports,p__48795);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t48806 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48806 = (function (ch,f,map_LT_,meta48807){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta48807 = meta48807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48806.cljs$lang$type = true;
cljs.core.async.t48806.cljs$lang$ctorStr = "cljs.core.async/t48806";
cljs.core.async.t48806.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t48806");
});
cljs.core.async.t48806.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48806.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t48806.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48806.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t48809 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48809 = (function (fn1,_,meta48807,ch,f,map_LT_,meta48810){
this.fn1 = fn1;
this._ = _;
this.meta48807 = meta48807;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta48810 = meta48810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48809.cljs$lang$type = true;
cljs.core.async.t48809.cljs$lang$ctorStr = "cljs.core.async/t48809";
cljs.core.async.t48809.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t48809");
});})(___$1))
;
cljs.core.async.t48809.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t48809.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t48809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__48799_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__48799_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48799_SHARP_) : self__.f.call(null,p1__48799_SHARP_)))) : f1.call(null,(((p1__48799_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48799_SHARP_) : self__.f.call(null,p1__48799_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t48809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48811){var self__ = this;
var _48811__$1 = this;return self__.meta48810;
});})(___$1))
;
cljs.core.async.t48809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48811,meta48810__$1){var self__ = this;
var _48811__$1 = this;return (new cljs.core.async.t48809(self__.fn1,self__._,self__.meta48807,self__.ch,self__.f,self__.map_LT_,meta48810__$1));
});})(___$1))
;
cljs.core.async.__GT_t48809 = ((function (___$1){
return (function __GT_t48809(fn1__$1,___$2,meta48807__$1,ch__$2,f__$2,map_LT___$2,meta48810){return (new cljs.core.async.t48809(fn1__$1,___$2,meta48807__$1,ch__$2,f__$2,map_LT___$2,meta48810));
});})(___$1))
;
}
return (new cljs.core.async.t48809(fn1,___$1,self__.meta48807,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t48806.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48806.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t48806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48808){var self__ = this;
var _48808__$1 = this;return self__.meta48807;
});
cljs.core.async.t48806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48808,meta48807__$1){var self__ = this;
var _48808__$1 = this;return (new cljs.core.async.t48806(self__.ch,self__.f,self__.map_LT_,meta48807__$1));
});
cljs.core.async.__GT_t48806 = (function __GT_t48806(ch__$1,f__$1,map_LT___$1,meta48807){return (new cljs.core.async.t48806(ch__$1,f__$1,map_LT___$1,meta48807));
});
}
return (new cljs.core.async.t48806(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t48815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48815 = (function (ch,f,map_GT_,meta48816){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta48816 = meta48816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48815.cljs$lang$type = true;
cljs.core.async.t48815.cljs$lang$ctorStr = "cljs.core.async/t48815";
cljs.core.async.t48815.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t48815");
});
cljs.core.async.t48815.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t48815.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t48815.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t48815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48817){var self__ = this;
var _48817__$1 = this;return self__.meta48816;
});
cljs.core.async.t48815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48817,meta48816__$1){var self__ = this;
var _48817__$1 = this;return (new cljs.core.async.t48815(self__.ch,self__.f,self__.map_GT_,meta48816__$1));
});
cljs.core.async.__GT_t48815 = (function __GT_t48815(ch__$1,f__$1,map_GT___$1,meta48816){return (new cljs.core.async.t48815(ch__$1,f__$1,map_GT___$1,meta48816));
});
}
return (new cljs.core.async.t48815(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t48821 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48821 = (function (ch,p,filter_GT_,meta48822){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta48822 = meta48822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48821.cljs$lang$type = true;
cljs.core.async.t48821.cljs$lang$ctorStr = "cljs.core.async/t48821";
cljs.core.async.t48821.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t48821");
});
cljs.core.async.t48821.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t48821.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t48821.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t48821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48823){var self__ = this;
var _48823__$1 = this;return self__.meta48822;
});
cljs.core.async.t48821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48823,meta48822__$1){var self__ = this;
var _48823__$1 = this;return (new cljs.core.async.t48821(self__.ch,self__.p,self__.filter_GT_,meta48822__$1));
});
cljs.core.async.__GT_t48821 = (function __GT_t48821(ch__$1,p__$1,filter_GT___$1,meta48822){return (new cljs.core.async.t48821(ch__$1,p__$1,filter_GT___$1,meta48822));
});
}
return (new cljs.core.async.t48821(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___48906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___48906,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___48906,out){
return (function (state_48885){var state_val_48886 = (state_48885[(1)]);if((state_val_48886 === (7)))
{var inst_48881 = (state_48885[(2)]);var state_48885__$1 = state_48885;var statearr_48887_48907 = state_48885__$1;(statearr_48887_48907[(2)] = inst_48881);
(statearr_48887_48907[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_48886 === (1)))
{var state_48885__$1 = state_48885;var statearr_48888_48908 = state_48885__$1;(statearr_48888_48908[(2)] = null);
(statearr_48888_48908[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_48886 === (4)))
{var inst_48867 = (state_48885[(7)]);var inst_48867__$1 = (state_48885[(2)]);var inst_48868 = (inst_48867__$1 == null);var state_48885__$1 = (function (){var statearr_48889 = state_48885;(statearr_48889[(7)] = inst_48867__$1);
return statearr_48889;
})();if(cljs.core.truth_(inst_48868))
{var statearr_48890_48909 = state_48885__$1;(statearr_48890_48909[(1)] = (5));
} else
{var statearr_48891_48910 = state_48885__$1;(statearr_48891_48910[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_48886 === (6)))
{var inst_48867 = (state_48885[(7)]);var inst_48872 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48867) : p.call(null,inst_48867));var state_48885__$1 = state_48885;if(cljs.core.truth_(inst_48872))
{var statearr_48892_48911 = state_48885__$1;(statearr_48892_48911[(1)] = (8));
} else
{var statearr_48893_48912 = state_48885__$1;(statearr_48893_48912[(1)] = (9));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_48886 === (3)))
{var inst_48883 = (state_48885[(2)]);var state_48885__$1 = state_48885;return cljs.core.async.impl.ioc_helpers.return_chan(state_48885__$1,inst_48883);
} else
{if((state_val_48886 === (2)))
{var state_48885__$1 = state_48885;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48885__$1,(4),ch);
} else
{if((state_val_48886 === (11)))
{var inst_48875 = (state_48885[(2)]);var state_48885__$1 = state_48885;var statearr_48894_48913 = state_48885__$1;(statearr_48894_48913[(2)] = inst_48875);
(statearr_48894_48913[(1)] = (10));
return cljs.core.constant$keyword$936;
} else
{if((state_val_48886 === (9)))
{var state_48885__$1 = state_48885;var statearr_48895_48914 = state_48885__$1;(statearr_48895_48914[(2)] = null);
(statearr_48895_48914[(1)] = (10));
return cljs.core.constant$keyword$936;
} else
{if((state_val_48886 === (5)))
{var inst_48870 = cljs.core.async.close_BANG_(out);var state_48885__$1 = state_48885;var statearr_48896_48915 = state_48885__$1;(statearr_48896_48915[(2)] = inst_48870);
(statearr_48896_48915[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_48886 === (10)))
{var inst_48878 = (state_48885[(2)]);var state_48885__$1 = (function (){var statearr_48897 = state_48885;(statearr_48897[(8)] = inst_48878);
return statearr_48897;
})();var statearr_48898_48916 = state_48885__$1;(statearr_48898_48916[(2)] = null);
(statearr_48898_48916[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_48886 === (8)))
{var inst_48867 = (state_48885[(7)]);var state_48885__$1 = state_48885;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48885__$1,(11),out,inst_48867);
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
});})(c__5708__auto___48906,out))
;return ((function (switch__5693__auto__,c__5708__auto___48906,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_48902 = [null,null,null,null,null,null,null,null,null];(statearr_48902[(0)] = state_machine__5694__auto__);
(statearr_48902[(1)] = (1));
return statearr_48902;
});
var state_machine__5694__auto____1 = (function (state_48885){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_48885);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e48903){if((e48903 instanceof Object))
{var ex__5697__auto__ = e48903;var statearr_48904_48917 = state_48885;(statearr_48904_48917[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_48885);
return cljs.core.constant$keyword$936;
} else
{throw e48903;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__48918 = state_48885;
state_48885 = G__48918;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_48885){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_48885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___48906,out))
})();var state__5710__auto__ = (function (){var statearr_48905 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_48905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___48906);
return statearr_48905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___48906,out))
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
return (function (state_49070){var state_val_49071 = (state_49070[(1)]);if((state_val_49071 === (7)))
{var inst_49066 = (state_49070[(2)]);var state_49070__$1 = state_49070;var statearr_49072_49109 = state_49070__$1;(statearr_49072_49109[(2)] = inst_49066);
(statearr_49072_49109[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (20)))
{var inst_49041 = (state_49070[(7)]);var inst_49052 = (state_49070[(2)]);var inst_49053 = cljs.core.next(inst_49041);var inst_49027 = inst_49053;var inst_49028 = null;var inst_49029 = (0);var inst_49030 = (0);var state_49070__$1 = (function (){var statearr_49073 = state_49070;(statearr_49073[(8)] = inst_49052);
(statearr_49073[(9)] = inst_49029);
(statearr_49073[(10)] = inst_49027);
(statearr_49073[(11)] = inst_49028);
(statearr_49073[(12)] = inst_49030);
return statearr_49073;
})();var statearr_49074_49110 = state_49070__$1;(statearr_49074_49110[(2)] = null);
(statearr_49074_49110[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (1)))
{var state_49070__$1 = state_49070;var statearr_49075_49111 = state_49070__$1;(statearr_49075_49111[(2)] = null);
(statearr_49075_49111[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (4)))
{var inst_49016 = (state_49070[(13)]);var inst_49016__$1 = (state_49070[(2)]);var inst_49017 = (inst_49016__$1 == null);var state_49070__$1 = (function (){var statearr_49079 = state_49070;(statearr_49079[(13)] = inst_49016__$1);
return statearr_49079;
})();if(cljs.core.truth_(inst_49017))
{var statearr_49080_49112 = state_49070__$1;(statearr_49080_49112[(1)] = (5));
} else
{var statearr_49081_49113 = state_49070__$1;(statearr_49081_49113[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (15)))
{var state_49070__$1 = state_49070;var statearr_49082_49114 = state_49070__$1;(statearr_49082_49114[(2)] = null);
(statearr_49082_49114[(1)] = (16));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (13)))
{var inst_49029 = (state_49070[(9)]);var inst_49027 = (state_49070[(10)]);var inst_49028 = (state_49070[(11)]);var inst_49030 = (state_49070[(12)]);var inst_49037 = (state_49070[(2)]);var inst_49038 = (inst_49030 + (1));var tmp49076 = inst_49029;var tmp49077 = inst_49027;var tmp49078 = inst_49028;var inst_49027__$1 = tmp49077;var inst_49028__$1 = tmp49078;var inst_49029__$1 = tmp49076;var inst_49030__$1 = inst_49038;var state_49070__$1 = (function (){var statearr_49083 = state_49070;(statearr_49083[(9)] = inst_49029__$1);
(statearr_49083[(10)] = inst_49027__$1);
(statearr_49083[(14)] = inst_49037);
(statearr_49083[(11)] = inst_49028__$1);
(statearr_49083[(12)] = inst_49030__$1);
return statearr_49083;
})();var statearr_49084_49115 = state_49070__$1;(statearr_49084_49115[(2)] = null);
(statearr_49084_49115[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (6)))
{var inst_49016 = (state_49070[(13)]);var inst_49021 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49016) : f.call(null,inst_49016));var inst_49026 = cljs.core.seq(inst_49021);var inst_49027 = inst_49026;var inst_49028 = null;var inst_49029 = (0);var inst_49030 = (0);var state_49070__$1 = (function (){var statearr_49085 = state_49070;(statearr_49085[(9)] = inst_49029);
(statearr_49085[(10)] = inst_49027);
(statearr_49085[(11)] = inst_49028);
(statearr_49085[(12)] = inst_49030);
return statearr_49085;
})();var statearr_49086_49116 = state_49070__$1;(statearr_49086_49116[(2)] = null);
(statearr_49086_49116[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (17)))
{var inst_49041 = (state_49070[(7)]);var inst_49045 = cljs.core.chunk_first(inst_49041);var inst_49046 = cljs.core.chunk_rest(inst_49041);var inst_49047 = cljs.core.count(inst_49045);var inst_49027 = inst_49046;var inst_49028 = inst_49045;var inst_49029 = inst_49047;var inst_49030 = (0);var state_49070__$1 = (function (){var statearr_49087 = state_49070;(statearr_49087[(9)] = inst_49029);
(statearr_49087[(10)] = inst_49027);
(statearr_49087[(11)] = inst_49028);
(statearr_49087[(12)] = inst_49030);
return statearr_49087;
})();var statearr_49088_49117 = state_49070__$1;(statearr_49088_49117[(2)] = null);
(statearr_49088_49117[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (3)))
{var inst_49068 = (state_49070[(2)]);var state_49070__$1 = state_49070;return cljs.core.async.impl.ioc_helpers.return_chan(state_49070__$1,inst_49068);
} else
{if((state_val_49071 === (12)))
{var inst_49061 = (state_49070[(2)]);var state_49070__$1 = state_49070;var statearr_49089_49118 = state_49070__$1;(statearr_49089_49118[(2)] = inst_49061);
(statearr_49089_49118[(1)] = (9));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (2)))
{var state_49070__$1 = state_49070;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49070__$1,(4),in$);
} else
{if((state_val_49071 === (19)))
{var inst_49056 = (state_49070[(2)]);var state_49070__$1 = state_49070;var statearr_49090_49119 = state_49070__$1;(statearr_49090_49119[(2)] = inst_49056);
(statearr_49090_49119[(1)] = (16));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (11)))
{var inst_49027 = (state_49070[(10)]);var inst_49041 = (state_49070[(7)]);var inst_49041__$1 = cljs.core.seq(inst_49027);var state_49070__$1 = (function (){var statearr_49091 = state_49070;(statearr_49091[(7)] = inst_49041__$1);
return statearr_49091;
})();if(inst_49041__$1)
{var statearr_49092_49120 = state_49070__$1;(statearr_49092_49120[(1)] = (14));
} else
{var statearr_49093_49121 = state_49070__$1;(statearr_49093_49121[(1)] = (15));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (9)))
{var inst_49063 = (state_49070[(2)]);var state_49070__$1 = (function (){var statearr_49094 = state_49070;(statearr_49094[(15)] = inst_49063);
return statearr_49094;
})();var statearr_49095_49122 = state_49070__$1;(statearr_49095_49122[(2)] = null);
(statearr_49095_49122[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (5)))
{var inst_49019 = cljs.core.async.close_BANG_(out);var state_49070__$1 = state_49070;var statearr_49096_49123 = state_49070__$1;(statearr_49096_49123[(2)] = inst_49019);
(statearr_49096_49123[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (14)))
{var inst_49041 = (state_49070[(7)]);var inst_49043 = cljs.core.chunked_seq_QMARK_(inst_49041);var state_49070__$1 = state_49070;if(inst_49043)
{var statearr_49097_49124 = state_49070__$1;(statearr_49097_49124[(1)] = (17));
} else
{var statearr_49098_49125 = state_49070__$1;(statearr_49098_49125[(1)] = (18));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (16)))
{var inst_49059 = (state_49070[(2)]);var state_49070__$1 = state_49070;var statearr_49099_49126 = state_49070__$1;(statearr_49099_49126[(2)] = inst_49059);
(statearr_49099_49126[(1)] = (12));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49071 === (10)))
{var inst_49028 = (state_49070[(11)]);var inst_49030 = (state_49070[(12)]);var inst_49035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49028,inst_49030);var state_49070__$1 = state_49070;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49070__$1,(13),out,inst_49035);
} else
{if((state_val_49071 === (18)))
{var inst_49041 = (state_49070[(7)]);var inst_49050 = cljs.core.first(inst_49041);var state_49070__$1 = state_49070;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49070__$1,(20),out,inst_49050);
} else
{if((state_val_49071 === (8)))
{var inst_49029 = (state_49070[(9)]);var inst_49030 = (state_49070[(12)]);var inst_49032 = (inst_49030 < inst_49029);var inst_49033 = inst_49032;var state_49070__$1 = state_49070;if(cljs.core.truth_(inst_49033))
{var statearr_49100_49127 = state_49070__$1;(statearr_49100_49127[(1)] = (10));
} else
{var statearr_49101_49128 = state_49070__$1;(statearr_49101_49128[(1)] = (11));
}
return cljs.core.constant$keyword$936;
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
var state_machine__5694__auto____0 = (function (){var statearr_49105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49105[(0)] = state_machine__5694__auto__);
(statearr_49105[(1)] = (1));
return statearr_49105;
});
var state_machine__5694__auto____1 = (function (state_49070){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49070);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49106){if((e49106 instanceof Object))
{var ex__5697__auto__ = e49106;var statearr_49107_49129 = state_49070;(statearr_49107_49129[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49070);
return cljs.core.constant$keyword$936;
} else
{throw e49106;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__49130 = state_49070;
state_49070 = G__49130;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49070){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_49108 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49108;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___49211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___49211){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49211){
return (function (state_49190){var state_val_49191 = (state_49190[(1)]);if((state_val_49191 === (7)))
{var inst_49186 = (state_49190[(2)]);var state_49190__$1 = state_49190;var statearr_49192_49212 = state_49190__$1;(statearr_49192_49212[(2)] = inst_49186);
(statearr_49192_49212[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49191 === (1)))
{var state_49190__$1 = state_49190;var statearr_49193_49213 = state_49190__$1;(statearr_49193_49213[(2)] = null);
(statearr_49193_49213[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49191 === (4)))
{var inst_49173 = (state_49190[(7)]);var inst_49173__$1 = (state_49190[(2)]);var inst_49174 = (inst_49173__$1 == null);var state_49190__$1 = (function (){var statearr_49194 = state_49190;(statearr_49194[(7)] = inst_49173__$1);
return statearr_49194;
})();if(cljs.core.truth_(inst_49174))
{var statearr_49195_49214 = state_49190__$1;(statearr_49195_49214[(1)] = (5));
} else
{var statearr_49196_49215 = state_49190__$1;(statearr_49196_49215[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49191 === (6)))
{var inst_49173 = (state_49190[(7)]);var state_49190__$1 = state_49190;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49190__$1,(11),to,inst_49173);
} else
{if((state_val_49191 === (3)))
{var inst_49188 = (state_49190[(2)]);var state_49190__$1 = state_49190;return cljs.core.async.impl.ioc_helpers.return_chan(state_49190__$1,inst_49188);
} else
{if((state_val_49191 === (2)))
{var state_49190__$1 = state_49190;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49190__$1,(4),from);
} else
{if((state_val_49191 === (11)))
{var inst_49183 = (state_49190[(2)]);var state_49190__$1 = (function (){var statearr_49197 = state_49190;(statearr_49197[(8)] = inst_49183);
return statearr_49197;
})();var statearr_49198_49216 = state_49190__$1;(statearr_49198_49216[(2)] = null);
(statearr_49198_49216[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49191 === (9)))
{var state_49190__$1 = state_49190;var statearr_49199_49217 = state_49190__$1;(statearr_49199_49217[(2)] = null);
(statearr_49199_49217[(1)] = (10));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49191 === (5)))
{var state_49190__$1 = state_49190;if(cljs.core.truth_(close_QMARK_))
{var statearr_49200_49218 = state_49190__$1;(statearr_49200_49218[(1)] = (8));
} else
{var statearr_49201_49219 = state_49190__$1;(statearr_49201_49219[(1)] = (9));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49191 === (10)))
{var inst_49180 = (state_49190[(2)]);var state_49190__$1 = state_49190;var statearr_49202_49220 = state_49190__$1;(statearr_49202_49220[(2)] = inst_49180);
(statearr_49202_49220[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49191 === (8)))
{var inst_49177 = cljs.core.async.close_BANG_(to);var state_49190__$1 = state_49190;var statearr_49203_49221 = state_49190__$1;(statearr_49203_49221[(2)] = inst_49177);
(statearr_49203_49221[(1)] = (10));
return cljs.core.constant$keyword$936;
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
});})(c__5708__auto___49211))
;return ((function (switch__5693__auto__,c__5708__auto___49211){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49207 = [null,null,null,null,null,null,null,null,null];(statearr_49207[(0)] = state_machine__5694__auto__);
(statearr_49207[(1)] = (1));
return statearr_49207;
});
var state_machine__5694__auto____1 = (function (state_49190){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49190);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49208){if((e49208 instanceof Object))
{var ex__5697__auto__ = e49208;var statearr_49209_49222 = state_49190;(statearr_49209_49222[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49190);
return cljs.core.constant$keyword$936;
} else
{throw e49208;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__49223 = state_49190;
state_49190 = G__49223;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49190){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49211))
})();var state__5710__auto__ = (function (){var statearr_49210 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49211);
return statearr_49210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___49211))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5708__auto___49310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___49310,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49310,tc,fc){
return (function (state_49288){var state_val_49289 = (state_49288[(1)]);if((state_val_49289 === (7)))
{var inst_49284 = (state_49288[(2)]);var state_49288__$1 = state_49288;var statearr_49290_49311 = state_49288__$1;(statearr_49290_49311[(2)] = inst_49284);
(statearr_49290_49311[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49289 === (1)))
{var state_49288__$1 = state_49288;var statearr_49291_49312 = state_49288__$1;(statearr_49291_49312[(2)] = null);
(statearr_49291_49312[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49289 === (4)))
{var inst_49269 = (state_49288[(7)]);var inst_49269__$1 = (state_49288[(2)]);var inst_49270 = (inst_49269__$1 == null);var state_49288__$1 = (function (){var statearr_49292 = state_49288;(statearr_49292[(7)] = inst_49269__$1);
return statearr_49292;
})();if(cljs.core.truth_(inst_49270))
{var statearr_49293_49313 = state_49288__$1;(statearr_49293_49313[(1)] = (5));
} else
{var statearr_49294_49314 = state_49288__$1;(statearr_49294_49314[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49289 === (6)))
{var inst_49269 = (state_49288[(7)]);var inst_49275 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49269) : p.call(null,inst_49269));var state_49288__$1 = state_49288;if(cljs.core.truth_(inst_49275))
{var statearr_49295_49315 = state_49288__$1;(statearr_49295_49315[(1)] = (9));
} else
{var statearr_49296_49316 = state_49288__$1;(statearr_49296_49316[(1)] = (10));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49289 === (3)))
{var inst_49286 = (state_49288[(2)]);var state_49288__$1 = state_49288;return cljs.core.async.impl.ioc_helpers.return_chan(state_49288__$1,inst_49286);
} else
{if((state_val_49289 === (2)))
{var state_49288__$1 = state_49288;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49288__$1,(4),ch);
} else
{if((state_val_49289 === (11)))
{var inst_49269 = (state_49288[(7)]);var inst_49279 = (state_49288[(2)]);var state_49288__$1 = state_49288;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49288__$1,(8),inst_49279,inst_49269);
} else
{if((state_val_49289 === (9)))
{var state_49288__$1 = state_49288;var statearr_49297_49317 = state_49288__$1;(statearr_49297_49317[(2)] = tc);
(statearr_49297_49317[(1)] = (11));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49289 === (5)))
{var inst_49272 = cljs.core.async.close_BANG_(tc);var inst_49273 = cljs.core.async.close_BANG_(fc);var state_49288__$1 = (function (){var statearr_49298 = state_49288;(statearr_49298[(8)] = inst_49272);
return statearr_49298;
})();var statearr_49299_49318 = state_49288__$1;(statearr_49299_49318[(2)] = inst_49273);
(statearr_49299_49318[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49289 === (10)))
{var state_49288__$1 = state_49288;var statearr_49300_49319 = state_49288__$1;(statearr_49300_49319[(2)] = fc);
(statearr_49300_49319[(1)] = (11));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49289 === (8)))
{var inst_49281 = (state_49288[(2)]);var state_49288__$1 = (function (){var statearr_49301 = state_49288;(statearr_49301[(9)] = inst_49281);
return statearr_49301;
})();var statearr_49302_49320 = state_49288__$1;(statearr_49302_49320[(2)] = null);
(statearr_49302_49320[(1)] = (2));
return cljs.core.constant$keyword$936;
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
});})(c__5708__auto___49310,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___49310,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49306 = [null,null,null,null,null,null,null,null,null,null];(statearr_49306[(0)] = state_machine__5694__auto__);
(statearr_49306[(1)] = (1));
return statearr_49306;
});
var state_machine__5694__auto____1 = (function (state_49288){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49288);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49307){if((e49307 instanceof Object))
{var ex__5697__auto__ = e49307;var statearr_49308_49321 = state_49288;(statearr_49308_49321[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49288);
return cljs.core.constant$keyword$936;
} else
{throw e49307;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__49322 = state_49288;
state_49288 = G__49322;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49288){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49310,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_49309 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49310);
return statearr_49309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___49310,tc,fc))
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
return (function (state_49369){var state_val_49370 = (state_49369[(1)]);if((state_val_49370 === (7)))
{var inst_49365 = (state_49369[(2)]);var state_49369__$1 = state_49369;var statearr_49371_49387 = state_49369__$1;(statearr_49371_49387[(2)] = inst_49365);
(statearr_49371_49387[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49370 === (6)))
{var inst_49358 = (state_49369[(7)]);var inst_49355 = (state_49369[(8)]);var inst_49362 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49355,inst_49358) : f.call(null,inst_49355,inst_49358));var inst_49355__$1 = inst_49362;var state_49369__$1 = (function (){var statearr_49372 = state_49369;(statearr_49372[(8)] = inst_49355__$1);
return statearr_49372;
})();var statearr_49373_49388 = state_49369__$1;(statearr_49373_49388[(2)] = null);
(statearr_49373_49388[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49370 === (5)))
{var inst_49355 = (state_49369[(8)]);var state_49369__$1 = state_49369;var statearr_49374_49389 = state_49369__$1;(statearr_49374_49389[(2)] = inst_49355);
(statearr_49374_49389[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49370 === (4)))
{var inst_49358 = (state_49369[(7)]);var inst_49358__$1 = (state_49369[(2)]);var inst_49359 = (inst_49358__$1 == null);var state_49369__$1 = (function (){var statearr_49375 = state_49369;(statearr_49375[(7)] = inst_49358__$1);
return statearr_49375;
})();if(cljs.core.truth_(inst_49359))
{var statearr_49376_49390 = state_49369__$1;(statearr_49376_49390[(1)] = (5));
} else
{var statearr_49377_49391 = state_49369__$1;(statearr_49377_49391[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49370 === (3)))
{var inst_49367 = (state_49369[(2)]);var state_49369__$1 = state_49369;return cljs.core.async.impl.ioc_helpers.return_chan(state_49369__$1,inst_49367);
} else
{if((state_val_49370 === (2)))
{var state_49369__$1 = state_49369;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49369__$1,(4),ch);
} else
{if((state_val_49370 === (1)))
{var inst_49355 = init;var state_49369__$1 = (function (){var statearr_49378 = state_49369;(statearr_49378[(8)] = inst_49355);
return statearr_49378;
})();var statearr_49379_49392 = state_49369__$1;(statearr_49379_49392[(2)] = null);
(statearr_49379_49392[(1)] = (2));
return cljs.core.constant$keyword$936;
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
var state_machine__5694__auto____0 = (function (){var statearr_49383 = [null,null,null,null,null,null,null,null,null];(statearr_49383[(0)] = state_machine__5694__auto__);
(statearr_49383[(1)] = (1));
return statearr_49383;
});
var state_machine__5694__auto____1 = (function (state_49369){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49369);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49384){if((e49384 instanceof Object))
{var ex__5697__auto__ = e49384;var statearr_49385_49393 = state_49369;(statearr_49385_49393[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49369);
return cljs.core.constant$keyword$936;
} else
{throw e49384;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__49394 = state_49369;
state_49369 = G__49394;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49369){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_49386 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49386;
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
return (function (state_49456){var state_val_49457 = (state_49456[(1)]);if((state_val_49457 === (7)))
{var inst_49437 = (state_49456[(7)]);var inst_49442 = (state_49456[(2)]);var inst_49443 = cljs.core.next(inst_49437);var inst_49437__$1 = inst_49443;var state_49456__$1 = (function (){var statearr_49458 = state_49456;(statearr_49458[(7)] = inst_49437__$1);
(statearr_49458[(8)] = inst_49442);
return statearr_49458;
})();var statearr_49459_49477 = state_49456__$1;(statearr_49459_49477[(2)] = null);
(statearr_49459_49477[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49457 === (1)))
{var inst_49436 = cljs.core.seq(coll);var inst_49437 = inst_49436;var state_49456__$1 = (function (){var statearr_49460 = state_49456;(statearr_49460[(7)] = inst_49437);
return statearr_49460;
})();var statearr_49461_49478 = state_49456__$1;(statearr_49461_49478[(2)] = null);
(statearr_49461_49478[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49457 === (4)))
{var inst_49437 = (state_49456[(7)]);var inst_49440 = cljs.core.first(inst_49437);var state_49456__$1 = state_49456;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49456__$1,(7),ch,inst_49440);
} else
{if((state_val_49457 === (6)))
{var inst_49452 = (state_49456[(2)]);var state_49456__$1 = state_49456;var statearr_49462_49479 = state_49456__$1;(statearr_49462_49479[(2)] = inst_49452);
(statearr_49462_49479[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49457 === (3)))
{var inst_49454 = (state_49456[(2)]);var state_49456__$1 = state_49456;return cljs.core.async.impl.ioc_helpers.return_chan(state_49456__$1,inst_49454);
} else
{if((state_val_49457 === (2)))
{var inst_49437 = (state_49456[(7)]);var state_49456__$1 = state_49456;if(cljs.core.truth_(inst_49437))
{var statearr_49463_49480 = state_49456__$1;(statearr_49463_49480[(1)] = (4));
} else
{var statearr_49464_49481 = state_49456__$1;(statearr_49464_49481[(1)] = (5));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49457 === (9)))
{var state_49456__$1 = state_49456;var statearr_49465_49482 = state_49456__$1;(statearr_49465_49482[(2)] = null);
(statearr_49465_49482[(1)] = (10));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49457 === (5)))
{var state_49456__$1 = state_49456;if(cljs.core.truth_(close_QMARK_))
{var statearr_49466_49483 = state_49456__$1;(statearr_49466_49483[(1)] = (8));
} else
{var statearr_49467_49484 = state_49456__$1;(statearr_49467_49484[(1)] = (9));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49457 === (10)))
{var inst_49450 = (state_49456[(2)]);var state_49456__$1 = state_49456;var statearr_49468_49485 = state_49456__$1;(statearr_49468_49485[(2)] = inst_49450);
(statearr_49468_49485[(1)] = (6));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49457 === (8)))
{var inst_49447 = cljs.core.async.close_BANG_(ch);var state_49456__$1 = state_49456;var statearr_49469_49486 = state_49456__$1;(statearr_49469_49486[(2)] = inst_49447);
(statearr_49469_49486[(1)] = (10));
return cljs.core.constant$keyword$936;
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
var state_machine__5694__auto____0 = (function (){var statearr_49473 = [null,null,null,null,null,null,null,null,null];(statearr_49473[(0)] = state_machine__5694__auto__);
(statearr_49473[(1)] = (1));
return statearr_49473;
});
var state_machine__5694__auto____1 = (function (state_49456){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49456);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49474){if((e49474 instanceof Object))
{var ex__5697__auto__ = e49474;var statearr_49475_49487 = state_49456;(statearr_49475_49487[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49456);
return cljs.core.constant$keyword$936;
} else
{throw e49474;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__49488 = state_49456;
state_49456 = G__49488;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49456){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_49476 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49476;
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
cljs.core.async.Mux = (function (){var obj49490 = {};return obj49490;
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
cljs.core.async.Mult = (function (){var obj49492 = {};return obj49492;
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
cljs.core.async.mult = (function mult(ch){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var m = (function (){if(typeof cljs.core.async.t49716 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49716 = (function (cs,ch,mult,meta49717){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta49717 = meta49717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49716.cljs$lang$type = true;
cljs.core.async.t49716.cljs$lang$ctorStr = "cljs.core.async/t49716";
cljs.core.async.t49716.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t49716");
});})(cs))
;
cljs.core.async.t49716.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t49716.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t49716.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t49716.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return null;
});})(cs))
;
cljs.core.async.t49716.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t49716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49718){var self__ = this;
var _49718__$1 = this;return self__.meta49717;
});})(cs))
;
cljs.core.async.t49716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49718,meta49717__$1){var self__ = this;
var _49718__$1 = this;return (new cljs.core.async.t49716(self__.cs,self__.ch,self__.mult,meta49717__$1));
});})(cs))
;
cljs.core.async.__GT_t49716 = ((function (cs){
return (function __GT_t49716(cs__$1,ch__$1,mult__$1,meta49717){return (new cljs.core.async.t49716(cs__$1,ch__$1,mult__$1,meta49717));
});})(cs))
;
}
return (new cljs.core.async.t49716(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___49939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___49939,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49939,cs,m,dchan,dctr,done){
return (function (state_49853){var state_val_49854 = (state_49853[(1)]);if((state_val_49854 === (7)))
{var inst_49849 = (state_49853[(2)]);var state_49853__$1 = state_49853;var statearr_49855_49940 = state_49853__$1;(statearr_49855_49940[(2)] = inst_49849);
(statearr_49855_49940[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (20)))
{var inst_49750 = (state_49853[(7)]);var inst_49760 = cljs.core.first(inst_49750);var inst_49761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49760,(0),null);var inst_49762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49760,(1),null);var state_49853__$1 = (function (){var statearr_49856 = state_49853;(statearr_49856[(8)] = inst_49761);
return statearr_49856;
})();if(cljs.core.truth_(inst_49762))
{var statearr_49857_49941 = state_49853__$1;(statearr_49857_49941[(1)] = (22));
} else
{var statearr_49858_49942 = state_49853__$1;(statearr_49858_49942[(1)] = (23));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (27)))
{var inst_49792 = (state_49853[(9)]);var inst_49790 = (state_49853[(10)]);var inst_49797 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49790,inst_49792);var state_49853__$1 = (function (){var statearr_49859 = state_49853;(statearr_49859[(11)] = inst_49797);
return statearr_49859;
})();var statearr_49860_49943 = state_49853__$1;(statearr_49860_49943[(2)] = null);
(statearr_49860_49943[(1)] = (32));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (1)))
{var state_49853__$1 = state_49853;var statearr_49861_49944 = state_49853__$1;(statearr_49861_49944[(2)] = null);
(statearr_49861_49944[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (24)))
{var inst_49750 = (state_49853[(7)]);var inst_49767 = (state_49853[(2)]);var inst_49768 = cljs.core.next(inst_49750);var inst_49730 = inst_49768;var inst_49731 = null;var inst_49732 = (0);var inst_49733 = (0);var state_49853__$1 = (function (){var statearr_49862 = state_49853;(statearr_49862[(12)] = inst_49731);
(statearr_49862[(13)] = inst_49767);
(statearr_49862[(14)] = inst_49730);
(statearr_49862[(15)] = inst_49732);
(statearr_49862[(16)] = inst_49733);
return statearr_49862;
})();var statearr_49863_49945 = state_49853__$1;(statearr_49863_49945[(2)] = null);
(statearr_49863_49945[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (39)))
{var inst_49810 = (state_49853[(17)]);var inst_49828 = (state_49853[(2)]);var inst_49829 = cljs.core.next(inst_49810);var inst_49789 = inst_49829;var inst_49790 = null;var inst_49791 = (0);var inst_49792 = (0);var state_49853__$1 = (function (){var statearr_49867 = state_49853;(statearr_49867[(9)] = inst_49792);
(statearr_49867[(18)] = inst_49791);
(statearr_49867[(19)] = inst_49789);
(statearr_49867[(10)] = inst_49790);
(statearr_49867[(20)] = inst_49828);
return statearr_49867;
})();var statearr_49868_49946 = state_49853__$1;(statearr_49868_49946[(2)] = null);
(statearr_49868_49946[(1)] = (25));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (4)))
{var inst_49721 = (state_49853[(21)]);var inst_49721__$1 = (state_49853[(2)]);var inst_49722 = (inst_49721__$1 == null);var state_49853__$1 = (function (){var statearr_49869 = state_49853;(statearr_49869[(21)] = inst_49721__$1);
return statearr_49869;
})();if(cljs.core.truth_(inst_49722))
{var statearr_49870_49947 = state_49853__$1;(statearr_49870_49947[(1)] = (5));
} else
{var statearr_49871_49948 = state_49853__$1;(statearr_49871_49948[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (15)))
{var inst_49731 = (state_49853[(12)]);var inst_49730 = (state_49853[(14)]);var inst_49732 = (state_49853[(15)]);var inst_49733 = (state_49853[(16)]);var inst_49746 = (state_49853[(2)]);var inst_49747 = (inst_49733 + (1));var tmp49864 = inst_49731;var tmp49865 = inst_49730;var tmp49866 = inst_49732;var inst_49730__$1 = tmp49865;var inst_49731__$1 = tmp49864;var inst_49732__$1 = tmp49866;var inst_49733__$1 = inst_49747;var state_49853__$1 = (function (){var statearr_49872 = state_49853;(statearr_49872[(12)] = inst_49731__$1);
(statearr_49872[(22)] = inst_49746);
(statearr_49872[(14)] = inst_49730__$1);
(statearr_49872[(15)] = inst_49732__$1);
(statearr_49872[(16)] = inst_49733__$1);
return statearr_49872;
})();var statearr_49873_49949 = state_49853__$1;(statearr_49873_49949[(2)] = null);
(statearr_49873_49949[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (21)))
{var inst_49771 = (state_49853[(2)]);var state_49853__$1 = state_49853;var statearr_49874_49950 = state_49853__$1;(statearr_49874_49950[(2)] = inst_49771);
(statearr_49874_49950[(1)] = (18));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (31)))
{var inst_49797 = (state_49853[(11)]);var inst_49798 = (state_49853[(2)]);var inst_49799 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_49800 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49797);var state_49853__$1 = (function (){var statearr_49875 = state_49853;(statearr_49875[(23)] = inst_49799);
(statearr_49875[(24)] = inst_49798);
return statearr_49875;
})();var statearr_49876_49951 = state_49853__$1;(statearr_49876_49951[(2)] = inst_49800);
cljs.core.async.impl.ioc_helpers.process_exception(state_49853__$1);
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (32)))
{var inst_49797 = (state_49853[(11)]);var inst_49721 = (state_49853[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49853,(31),Object,null,(30));var inst_49804 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49797,inst_49721,done);var state_49853__$1 = state_49853;var statearr_49877_49952 = state_49853__$1;(statearr_49877_49952[(2)] = inst_49804);
cljs.core.async.impl.ioc_helpers.process_exception(state_49853__$1);
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (40)))
{var inst_49819 = (state_49853[(25)]);var inst_49820 = (state_49853[(2)]);var inst_49821 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_49822 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49819);var state_49853__$1 = (function (){var statearr_49878 = state_49853;(statearr_49878[(26)] = inst_49821);
(statearr_49878[(27)] = inst_49820);
return statearr_49878;
})();var statearr_49879_49953 = state_49853__$1;(statearr_49879_49953[(2)] = inst_49822);
cljs.core.async.impl.ioc_helpers.process_exception(state_49853__$1);
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (33)))
{var inst_49810 = (state_49853[(17)]);var inst_49812 = cljs.core.chunked_seq_QMARK_(inst_49810);var state_49853__$1 = state_49853;if(inst_49812)
{var statearr_49880_49954 = state_49853__$1;(statearr_49880_49954[(1)] = (36));
} else
{var statearr_49881_49955 = state_49853__$1;(statearr_49881_49955[(1)] = (37));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (13)))
{var inst_49740 = (state_49853[(28)]);var inst_49743 = cljs.core.async.close_BANG_(inst_49740);var state_49853__$1 = state_49853;var statearr_49882_49956 = state_49853__$1;(statearr_49882_49956[(2)] = inst_49743);
(statearr_49882_49956[(1)] = (15));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (22)))
{var inst_49761 = (state_49853[(8)]);var inst_49764 = cljs.core.async.close_BANG_(inst_49761);var state_49853__$1 = state_49853;var statearr_49883_49957 = state_49853__$1;(statearr_49883_49957[(2)] = inst_49764);
(statearr_49883_49957[(1)] = (24));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (36)))
{var inst_49810 = (state_49853[(17)]);var inst_49814 = cljs.core.chunk_first(inst_49810);var inst_49815 = cljs.core.chunk_rest(inst_49810);var inst_49816 = cljs.core.count(inst_49814);var inst_49789 = inst_49815;var inst_49790 = inst_49814;var inst_49791 = inst_49816;var inst_49792 = (0);var state_49853__$1 = (function (){var statearr_49884 = state_49853;(statearr_49884[(9)] = inst_49792);
(statearr_49884[(18)] = inst_49791);
(statearr_49884[(19)] = inst_49789);
(statearr_49884[(10)] = inst_49790);
return statearr_49884;
})();var statearr_49885_49958 = state_49853__$1;(statearr_49885_49958[(2)] = null);
(statearr_49885_49958[(1)] = (25));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (41)))
{var inst_49819 = (state_49853[(25)]);var inst_49721 = (state_49853[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49853,(40),Object,null,(39));var inst_49826 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49819,inst_49721,done);var state_49853__$1 = state_49853;var statearr_49886_49959 = state_49853__$1;(statearr_49886_49959[(2)] = inst_49826);
cljs.core.async.impl.ioc_helpers.process_exception(state_49853__$1);
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (43)))
{var state_49853__$1 = state_49853;var statearr_49887_49960 = state_49853__$1;(statearr_49887_49960[(2)] = null);
(statearr_49887_49960[(1)] = (44));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (29)))
{var inst_49837 = (state_49853[(2)]);var state_49853__$1 = state_49853;var statearr_49888_49961 = state_49853__$1;(statearr_49888_49961[(2)] = inst_49837);
(statearr_49888_49961[(1)] = (26));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (44)))
{var inst_49846 = (state_49853[(2)]);var state_49853__$1 = (function (){var statearr_49889 = state_49853;(statearr_49889[(29)] = inst_49846);
return statearr_49889;
})();var statearr_49890_49962 = state_49853__$1;(statearr_49890_49962[(2)] = null);
(statearr_49890_49962[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (6)))
{var inst_49781 = (state_49853[(30)]);var inst_49780 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_49781__$1 = cljs.core.keys(inst_49780);var inst_49782 = cljs.core.count(inst_49781__$1);var inst_49783 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_49782) : cljs.core.reset_BANG_.call(null,dctr,inst_49782));var inst_49788 = cljs.core.seq(inst_49781__$1);var inst_49789 = inst_49788;var inst_49790 = null;var inst_49791 = (0);var inst_49792 = (0);var state_49853__$1 = (function (){var statearr_49891 = state_49853;(statearr_49891[(9)] = inst_49792);
(statearr_49891[(18)] = inst_49791);
(statearr_49891[(30)] = inst_49781__$1);
(statearr_49891[(19)] = inst_49789);
(statearr_49891[(31)] = inst_49783);
(statearr_49891[(10)] = inst_49790);
return statearr_49891;
})();var statearr_49892_49963 = state_49853__$1;(statearr_49892_49963[(2)] = null);
(statearr_49892_49963[(1)] = (25));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (28)))
{var inst_49810 = (state_49853[(17)]);var inst_49789 = (state_49853[(19)]);var inst_49810__$1 = cljs.core.seq(inst_49789);var state_49853__$1 = (function (){var statearr_49893 = state_49853;(statearr_49893[(17)] = inst_49810__$1);
return statearr_49893;
})();if(inst_49810__$1)
{var statearr_49894_49964 = state_49853__$1;(statearr_49894_49964[(1)] = (33));
} else
{var statearr_49895_49965 = state_49853__$1;(statearr_49895_49965[(1)] = (34));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (25)))
{var inst_49792 = (state_49853[(9)]);var inst_49791 = (state_49853[(18)]);var inst_49794 = (inst_49792 < inst_49791);var inst_49795 = inst_49794;var state_49853__$1 = state_49853;if(cljs.core.truth_(inst_49795))
{var statearr_49896_49966 = state_49853__$1;(statearr_49896_49966[(1)] = (27));
} else
{var statearr_49897_49967 = state_49853__$1;(statearr_49897_49967[(1)] = (28));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (34)))
{var state_49853__$1 = state_49853;var statearr_49898_49968 = state_49853__$1;(statearr_49898_49968[(2)] = null);
(statearr_49898_49968[(1)] = (35));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (17)))
{var state_49853__$1 = state_49853;var statearr_49899_49969 = state_49853__$1;(statearr_49899_49969[(2)] = null);
(statearr_49899_49969[(1)] = (18));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (3)))
{var inst_49851 = (state_49853[(2)]);var state_49853__$1 = state_49853;return cljs.core.async.impl.ioc_helpers.return_chan(state_49853__$1,inst_49851);
} else
{if((state_val_49854 === (12)))
{var inst_49776 = (state_49853[(2)]);var state_49853__$1 = state_49853;var statearr_49900_49970 = state_49853__$1;(statearr_49900_49970[(2)] = inst_49776);
(statearr_49900_49970[(1)] = (9));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (2)))
{var state_49853__$1 = state_49853;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49853__$1,(4),ch);
} else
{if((state_val_49854 === (23)))
{var state_49853__$1 = state_49853;var statearr_49901_49971 = state_49853__$1;(statearr_49901_49971[(2)] = null);
(statearr_49901_49971[(1)] = (24));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (35)))
{var inst_49835 = (state_49853[(2)]);var state_49853__$1 = state_49853;var statearr_49902_49972 = state_49853__$1;(statearr_49902_49972[(2)] = inst_49835);
(statearr_49902_49972[(1)] = (29));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (19)))
{var inst_49750 = (state_49853[(7)]);var inst_49754 = cljs.core.chunk_first(inst_49750);var inst_49755 = cljs.core.chunk_rest(inst_49750);var inst_49756 = cljs.core.count(inst_49754);var inst_49730 = inst_49755;var inst_49731 = inst_49754;var inst_49732 = inst_49756;var inst_49733 = (0);var state_49853__$1 = (function (){var statearr_49903 = state_49853;(statearr_49903[(12)] = inst_49731);
(statearr_49903[(14)] = inst_49730);
(statearr_49903[(15)] = inst_49732);
(statearr_49903[(16)] = inst_49733);
return statearr_49903;
})();var statearr_49904_49973 = state_49853__$1;(statearr_49904_49973[(2)] = null);
(statearr_49904_49973[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (11)))
{var inst_49730 = (state_49853[(14)]);var inst_49750 = (state_49853[(7)]);var inst_49750__$1 = cljs.core.seq(inst_49730);var state_49853__$1 = (function (){var statearr_49905 = state_49853;(statearr_49905[(7)] = inst_49750__$1);
return statearr_49905;
})();if(inst_49750__$1)
{var statearr_49906_49974 = state_49853__$1;(statearr_49906_49974[(1)] = (16));
} else
{var statearr_49907_49975 = state_49853__$1;(statearr_49907_49975[(1)] = (17));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (9)))
{var inst_49778 = (state_49853[(2)]);var state_49853__$1 = state_49853;var statearr_49908_49976 = state_49853__$1;(statearr_49908_49976[(2)] = inst_49778);
(statearr_49908_49976[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (5)))
{var inst_49728 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var inst_49729 = cljs.core.seq(inst_49728);var inst_49730 = inst_49729;var inst_49731 = null;var inst_49732 = (0);var inst_49733 = (0);var state_49853__$1 = (function (){var statearr_49909 = state_49853;(statearr_49909[(12)] = inst_49731);
(statearr_49909[(14)] = inst_49730);
(statearr_49909[(15)] = inst_49732);
(statearr_49909[(16)] = inst_49733);
return statearr_49909;
})();var statearr_49910_49977 = state_49853__$1;(statearr_49910_49977[(2)] = null);
(statearr_49910_49977[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (14)))
{var state_49853__$1 = state_49853;var statearr_49911_49978 = state_49853__$1;(statearr_49911_49978[(2)] = null);
(statearr_49911_49978[(1)] = (15));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (45)))
{var inst_49843 = (state_49853[(2)]);var state_49853__$1 = state_49853;var statearr_49912_49979 = state_49853__$1;(statearr_49912_49979[(2)] = inst_49843);
(statearr_49912_49979[(1)] = (44));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (26)))
{var inst_49781 = (state_49853[(30)]);var inst_49839 = (state_49853[(2)]);var inst_49840 = cljs.core.seq(inst_49781);var state_49853__$1 = (function (){var statearr_49913 = state_49853;(statearr_49913[(32)] = inst_49839);
return statearr_49913;
})();if(inst_49840)
{var statearr_49914_49980 = state_49853__$1;(statearr_49914_49980[(1)] = (42));
} else
{var statearr_49915_49981 = state_49853__$1;(statearr_49915_49981[(1)] = (43));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (16)))
{var inst_49750 = (state_49853[(7)]);var inst_49752 = cljs.core.chunked_seq_QMARK_(inst_49750);var state_49853__$1 = state_49853;if(inst_49752)
{var statearr_49919_49982 = state_49853__$1;(statearr_49919_49982[(1)] = (19));
} else
{var statearr_49920_49983 = state_49853__$1;(statearr_49920_49983[(1)] = (20));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (38)))
{var inst_49832 = (state_49853[(2)]);var state_49853__$1 = state_49853;var statearr_49921_49984 = state_49853__$1;(statearr_49921_49984[(2)] = inst_49832);
(statearr_49921_49984[(1)] = (35));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (30)))
{var inst_49792 = (state_49853[(9)]);var inst_49791 = (state_49853[(18)]);var inst_49789 = (state_49853[(19)]);var inst_49790 = (state_49853[(10)]);var inst_49806 = (state_49853[(2)]);var inst_49807 = (inst_49792 + (1));var tmp49916 = inst_49791;var tmp49917 = inst_49789;var tmp49918 = inst_49790;var inst_49789__$1 = tmp49917;var inst_49790__$1 = tmp49918;var inst_49791__$1 = tmp49916;var inst_49792__$1 = inst_49807;var state_49853__$1 = (function (){var statearr_49922 = state_49853;(statearr_49922[(33)] = inst_49806);
(statearr_49922[(9)] = inst_49792__$1);
(statearr_49922[(18)] = inst_49791__$1);
(statearr_49922[(19)] = inst_49789__$1);
(statearr_49922[(10)] = inst_49790__$1);
return statearr_49922;
})();var statearr_49923_49985 = state_49853__$1;(statearr_49923_49985[(2)] = null);
(statearr_49923_49985[(1)] = (25));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (10)))
{var inst_49731 = (state_49853[(12)]);var inst_49733 = (state_49853[(16)]);var inst_49739 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49731,inst_49733);var inst_49740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49739,(0),null);var inst_49741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49739,(1),null);var state_49853__$1 = (function (){var statearr_49924 = state_49853;(statearr_49924[(28)] = inst_49740);
return statearr_49924;
})();if(cljs.core.truth_(inst_49741))
{var statearr_49925_49986 = state_49853__$1;(statearr_49925_49986[(1)] = (13));
} else
{var statearr_49926_49987 = state_49853__$1;(statearr_49926_49987[(1)] = (14));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (18)))
{var inst_49774 = (state_49853[(2)]);var state_49853__$1 = state_49853;var statearr_49927_49988 = state_49853__$1;(statearr_49927_49988[(2)] = inst_49774);
(statearr_49927_49988[(1)] = (12));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (42)))
{var state_49853__$1 = state_49853;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49853__$1,(45),dchan);
} else
{if((state_val_49854 === (37)))
{var inst_49810 = (state_49853[(17)]);var inst_49819 = cljs.core.first(inst_49810);var state_49853__$1 = (function (){var statearr_49928 = state_49853;(statearr_49928[(25)] = inst_49819);
return statearr_49928;
})();var statearr_49929_49989 = state_49853__$1;(statearr_49929_49989[(2)] = null);
(statearr_49929_49989[(1)] = (41));
return cljs.core.constant$keyword$936;
} else
{if((state_val_49854 === (8)))
{var inst_49732 = (state_49853[(15)]);var inst_49733 = (state_49853[(16)]);var inst_49735 = (inst_49733 < inst_49732);var inst_49736 = inst_49735;var state_49853__$1 = state_49853;if(cljs.core.truth_(inst_49736))
{var statearr_49930_49990 = state_49853__$1;(statearr_49930_49990[(1)] = (10));
} else
{var statearr_49931_49991 = state_49853__$1;(statearr_49931_49991[(1)] = (11));
}
return cljs.core.constant$keyword$936;
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
});})(c__5708__auto___49939,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___49939,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49935[(0)] = state_machine__5694__auto__);
(statearr_49935[(1)] = (1));
return statearr_49935;
});
var state_machine__5694__auto____1 = (function (state_49853){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_49853);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49936){if((e49936 instanceof Object))
{var ex__5697__auto__ = e49936;var statearr_49937_49992 = state_49853;(statearr_49937_49992[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49853);
return cljs.core.constant$keyword$936;
} else
{throw e49936;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__49993 = state_49853;
state_49853 = G__49993;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49853){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49939,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_49938 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_49938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49939);
return statearr_49938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___49939,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj49995 = {};return obj49995;
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
cljs.core.async.mix = (function mix(out){var cs = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$943,null,cljs.core.constant$keyword$944,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$945);var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$944) : cljs.core.atom.call(null,cljs.core.constant$keyword$944));var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));var solos = pick(cljs.core.constant$keyword$945,chs);var pauses = pick(cljs.core.constant$keyword$943,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$946,solos,cljs.core.constant$keyword$947,pick(cljs.core.constant$keyword$944,chs),cljs.core.constant$keyword$948,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$943)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t50105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50105 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50106){
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
this.meta50106 = meta50106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50105.cljs$lang$type = true;
cljs.core.async.t50105.cljs$lang$ctorStr = "cljs.core.async/t50105";
cljs.core.async.t50105.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t50105");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50105.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t50105.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50105.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50105.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cs,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50105.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50105.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50105.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50107){var self__ = this;
var _50107__$1 = this;return self__.meta50106;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50107,meta50106__$1){var self__ = this;
var _50107__$1 = this;return (new cljs.core.async.t50105(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50106__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t50105 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t50105(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50106){return (new cljs.core.async.t50105(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50106));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t50105(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___50214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50172){var state_val_50173 = (state_50172[(1)]);if((state_val_50173 === (7)))
{var inst_50121 = (state_50172[(7)]);var inst_50126 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50121);var state_50172__$1 = state_50172;var statearr_50174_50215 = state_50172__$1;(statearr_50174_50215[(2)] = inst_50126);
(statearr_50174_50215[(1)] = (9));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (20)))
{var inst_50136 = (state_50172[(8)]);var state_50172__$1 = state_50172;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50172__$1,(23),out,inst_50136);
} else
{if((state_val_50173 === (1)))
{var inst_50111 = (state_50172[(9)]);var inst_50111__$1 = calc_state();var inst_50112 = cljs.core.seq_QMARK_(inst_50111__$1);var state_50172__$1 = (function (){var statearr_50175 = state_50172;(statearr_50175[(9)] = inst_50111__$1);
return statearr_50175;
})();if(inst_50112)
{var statearr_50176_50216 = state_50172__$1;(statearr_50176_50216[(1)] = (2));
} else
{var statearr_50177_50217 = state_50172__$1;(statearr_50177_50217[(1)] = (3));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (4)))
{var inst_50111 = (state_50172[(9)]);var inst_50117 = (state_50172[(2)]);var inst_50118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50117,cljs.core.constant$keyword$948);var inst_50119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50117,cljs.core.constant$keyword$947);var inst_50120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50117,cljs.core.constant$keyword$946);var inst_50121 = inst_50111;var state_50172__$1 = (function (){var statearr_50178 = state_50172;(statearr_50178[(7)] = inst_50121);
(statearr_50178[(10)] = inst_50120);
(statearr_50178[(11)] = inst_50118);
(statearr_50178[(12)] = inst_50119);
return statearr_50178;
})();var statearr_50179_50218 = state_50172__$1;(statearr_50179_50218[(2)] = null);
(statearr_50179_50218[(1)] = (5));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (15)))
{var state_50172__$1 = state_50172;var statearr_50180_50219 = state_50172__$1;(statearr_50180_50219[(2)] = null);
(statearr_50180_50219[(1)] = (16));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (21)))
{var state_50172__$1 = state_50172;var statearr_50181_50220 = state_50172__$1;(statearr_50181_50220[(2)] = null);
(statearr_50181_50220[(1)] = (22));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (13)))
{var inst_50168 = (state_50172[(2)]);var state_50172__$1 = state_50172;var statearr_50182_50221 = state_50172__$1;(statearr_50182_50221[(2)] = inst_50168);
(statearr_50182_50221[(1)] = (6));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (22)))
{var inst_50129 = (state_50172[(13)]);var inst_50165 = (state_50172[(2)]);var inst_50121 = inst_50129;var state_50172__$1 = (function (){var statearr_50183 = state_50172;(statearr_50183[(7)] = inst_50121);
(statearr_50183[(14)] = inst_50165);
return statearr_50183;
})();var statearr_50184_50222 = state_50172__$1;(statearr_50184_50222[(2)] = null);
(statearr_50184_50222[(1)] = (5));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (6)))
{var inst_50170 = (state_50172[(2)]);var state_50172__$1 = state_50172;return cljs.core.async.impl.ioc_helpers.return_chan(state_50172__$1,inst_50170);
} else
{if((state_val_50173 === (17)))
{var inst_50151 = (state_50172[(15)]);var state_50172__$1 = state_50172;var statearr_50185_50223 = state_50172__$1;(statearr_50185_50223[(2)] = inst_50151);
(statearr_50185_50223[(1)] = (19));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (3)))
{var inst_50111 = (state_50172[(9)]);var state_50172__$1 = state_50172;var statearr_50186_50224 = state_50172__$1;(statearr_50186_50224[(2)] = inst_50111);
(statearr_50186_50224[(1)] = (4));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (12)))
{var inst_50151 = (state_50172[(15)]);var inst_50132 = (state_50172[(16)]);var inst_50137 = (state_50172[(17)]);var inst_50151__$1 = (inst_50132.cljs$core$IFn$_invoke$arity$1 ? inst_50132.cljs$core$IFn$_invoke$arity$1(inst_50137) : inst_50132.call(null,inst_50137));var state_50172__$1 = (function (){var statearr_50187 = state_50172;(statearr_50187[(15)] = inst_50151__$1);
return statearr_50187;
})();if(cljs.core.truth_(inst_50151__$1))
{var statearr_50188_50225 = state_50172__$1;(statearr_50188_50225[(1)] = (17));
} else
{var statearr_50189_50226 = state_50172__$1;(statearr_50189_50226[(1)] = (18));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (2)))
{var inst_50111 = (state_50172[(9)]);var inst_50114 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50111);var state_50172__$1 = state_50172;var statearr_50190_50227 = state_50172__$1;(statearr_50190_50227[(2)] = inst_50114);
(statearr_50190_50227[(1)] = (4));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (23)))
{var inst_50162 = (state_50172[(2)]);var state_50172__$1 = state_50172;var statearr_50191_50228 = state_50172__$1;(statearr_50191_50228[(2)] = inst_50162);
(statearr_50191_50228[(1)] = (22));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (19)))
{var inst_50159 = (state_50172[(2)]);var state_50172__$1 = state_50172;if(cljs.core.truth_(inst_50159))
{var statearr_50192_50229 = state_50172__$1;(statearr_50192_50229[(1)] = (20));
} else
{var statearr_50193_50230 = state_50172__$1;(statearr_50193_50230[(1)] = (21));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (11)))
{var inst_50136 = (state_50172[(8)]);var inst_50142 = (inst_50136 == null);var state_50172__$1 = state_50172;if(cljs.core.truth_(inst_50142))
{var statearr_50194_50231 = state_50172__$1;(statearr_50194_50231[(1)] = (14));
} else
{var statearr_50195_50232 = state_50172__$1;(statearr_50195_50232[(1)] = (15));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (9)))
{var inst_50129 = (state_50172[(13)]);var inst_50129__$1 = (state_50172[(2)]);var inst_50130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50129__$1,cljs.core.constant$keyword$948);var inst_50131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50129__$1,cljs.core.constant$keyword$947);var inst_50132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50129__$1,cljs.core.constant$keyword$946);var state_50172__$1 = (function (){var statearr_50196 = state_50172;(statearr_50196[(13)] = inst_50129__$1);
(statearr_50196[(18)] = inst_50131);
(statearr_50196[(16)] = inst_50132);
return statearr_50196;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_50172__$1,(10),inst_50130);
} else
{if((state_val_50173 === (5)))
{var inst_50121 = (state_50172[(7)]);var inst_50124 = cljs.core.seq_QMARK_(inst_50121);var state_50172__$1 = state_50172;if(inst_50124)
{var statearr_50197_50233 = state_50172__$1;(statearr_50197_50233[(1)] = (7));
} else
{var statearr_50198_50234 = state_50172__$1;(statearr_50198_50234[(1)] = (8));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (14)))
{var inst_50137 = (state_50172[(17)]);var inst_50144 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50137);var state_50172__$1 = state_50172;var statearr_50199_50235 = state_50172__$1;(statearr_50199_50235[(2)] = inst_50144);
(statearr_50199_50235[(1)] = (16));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (16)))
{var inst_50147 = (state_50172[(2)]);var inst_50148 = calc_state();var inst_50121 = inst_50148;var state_50172__$1 = (function (){var statearr_50200 = state_50172;(statearr_50200[(7)] = inst_50121);
(statearr_50200[(19)] = inst_50147);
return statearr_50200;
})();var statearr_50201_50236 = state_50172__$1;(statearr_50201_50236[(2)] = null);
(statearr_50201_50236[(1)] = (5));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (10)))
{var inst_50136 = (state_50172[(8)]);var inst_50137 = (state_50172[(17)]);var inst_50135 = (state_50172[(2)]);var inst_50136__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50135,(0),null);var inst_50137__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50135,(1),null);var inst_50138 = (inst_50136__$1 == null);var inst_50139 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50137__$1,change);var inst_50140 = (inst_50138) || (inst_50139);var state_50172__$1 = (function (){var statearr_50202 = state_50172;(statearr_50202[(8)] = inst_50136__$1);
(statearr_50202[(17)] = inst_50137__$1);
return statearr_50202;
})();if(cljs.core.truth_(inst_50140))
{var statearr_50203_50237 = state_50172__$1;(statearr_50203_50237[(1)] = (11));
} else
{var statearr_50204_50238 = state_50172__$1;(statearr_50204_50238[(1)] = (12));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (18)))
{var inst_50131 = (state_50172[(18)]);var inst_50132 = (state_50172[(16)]);var inst_50137 = (state_50172[(17)]);var inst_50154 = cljs.core.empty_QMARK_(inst_50132);var inst_50155 = (inst_50131.cljs$core$IFn$_invoke$arity$1 ? inst_50131.cljs$core$IFn$_invoke$arity$1(inst_50137) : inst_50131.call(null,inst_50137));var inst_50156 = cljs.core.not(inst_50155);var inst_50157 = (inst_50154) && (inst_50156);var state_50172__$1 = state_50172;var statearr_50205_50239 = state_50172__$1;(statearr_50205_50239[(2)] = inst_50157);
(statearr_50205_50239[(1)] = (19));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50173 === (8)))
{var inst_50121 = (state_50172[(7)]);var state_50172__$1 = state_50172;var statearr_50206_50240 = state_50172__$1;(statearr_50206_50240[(2)] = inst_50121);
(statearr_50206_50240[(1)] = (9));
return cljs.core.constant$keyword$936;
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
});})(c__5708__auto___50214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___50214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50210[(0)] = state_machine__5694__auto__);
(statearr_50210[(1)] = (1));
return statearr_50210;
});
var state_machine__5694__auto____1 = (function (state_50172){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50172);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50211){if((e50211 instanceof Object))
{var ex__5697__auto__ = e50211;var statearr_50212_50241 = state_50172;(statearr_50212_50241[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50172);
return cljs.core.constant$keyword$936;
} else
{throw e50211;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__50242 = state_50172;
state_50172 = G__50242;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50172){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_50213 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50214);
return statearr_50213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj50244 = {};return obj50244;
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
return (function (p1__50245_SHARP_){if(cljs.core.truth_((p1__50245_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50245_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__50245_SHARP_.call(null,topic))))
{return p1__50245_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50245_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t50370 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50370 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta50371){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta50371 = meta50371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50370.cljs$lang$type = true;
cljs.core.async.t50370.cljs$lang$ctorStr = "cljs.core.async/t50370";
cljs.core.async.t50370.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async/t50370");
});})(mults,ensure_mult))
;
cljs.core.async.t50370.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t50370.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t50370.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t50370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.mults,cljs.core.PersistentArrayMap.EMPTY) : cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY));
});})(mults,ensure_mult))
;
cljs.core.async.t50370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t50370.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t50370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50372){var self__ = this;
var _50372__$1 = this;return self__.meta50371;
});})(mults,ensure_mult))
;
cljs.core.async.t50370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50372,meta50371__$1){var self__ = this;
var _50372__$1 = this;return (new cljs.core.async.t50370(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta50371__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t50370 = ((function (mults,ensure_mult){
return (function __GT_t50370(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50371){return (new cljs.core.async.t50370(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50371));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t50370(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___50494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50494,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50494,mults,ensure_mult,p){
return (function (state_50446){var state_val_50447 = (state_50446[(1)]);if((state_val_50447 === (7)))
{var inst_50442 = (state_50446[(2)]);var state_50446__$1 = state_50446;var statearr_50448_50495 = state_50446__$1;(statearr_50448_50495[(2)] = inst_50442);
(statearr_50448_50495[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (20)))
{var state_50446__$1 = state_50446;var statearr_50449_50496 = state_50446__$1;(statearr_50449_50496[(2)] = null);
(statearr_50449_50496[(1)] = (21));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (1)))
{var state_50446__$1 = state_50446;var statearr_50450_50497 = state_50446__$1;(statearr_50450_50497[(2)] = null);
(statearr_50450_50497[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (24)))
{var inst_50425 = (state_50446[(7)]);var inst_50375 = (state_50446[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50446,(23),Object,null,(22));var inst_50432 = cljs.core.async.muxch_STAR_(inst_50425);var state_50446__$1 = state_50446;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50446__$1,(25),inst_50432,inst_50375);
} else
{if((state_val_50447 === (4)))
{var inst_50375 = (state_50446[(8)]);var inst_50375__$1 = (state_50446[(2)]);var inst_50376 = (inst_50375__$1 == null);var state_50446__$1 = (function (){var statearr_50451 = state_50446;(statearr_50451[(8)] = inst_50375__$1);
return statearr_50451;
})();if(cljs.core.truth_(inst_50376))
{var statearr_50452_50498 = state_50446__$1;(statearr_50452_50498[(1)] = (5));
} else
{var statearr_50453_50499 = state_50446__$1;(statearr_50453_50499[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (15)))
{var inst_50417 = (state_50446[(2)]);var state_50446__$1 = state_50446;var statearr_50454_50500 = state_50446__$1;(statearr_50454_50500[(2)] = inst_50417);
(statearr_50454_50500[(1)] = (12));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (21)))
{var inst_50439 = (state_50446[(2)]);var state_50446__$1 = (function (){var statearr_50455 = state_50446;(statearr_50455[(9)] = inst_50439);
return statearr_50455;
})();var statearr_50456_50501 = state_50446__$1;(statearr_50456_50501[(2)] = null);
(statearr_50456_50501[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (13)))
{var inst_50399 = (state_50446[(10)]);var inst_50401 = cljs.core.chunked_seq_QMARK_(inst_50399);var state_50446__$1 = state_50446;if(inst_50401)
{var statearr_50457_50502 = state_50446__$1;(statearr_50457_50502[(1)] = (16));
} else
{var statearr_50458_50503 = state_50446__$1;(statearr_50458_50503[(1)] = (17));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (22)))
{var inst_50436 = (state_50446[(2)]);var state_50446__$1 = state_50446;var statearr_50459_50504 = state_50446__$1;(statearr_50459_50504[(2)] = inst_50436);
(statearr_50459_50504[(1)] = (21));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (6)))
{var inst_50425 = (state_50446[(7)]);var inst_50423 = (state_50446[(11)]);var inst_50375 = (state_50446[(8)]);var inst_50423__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_50375) : topic_fn.call(null,inst_50375));var inst_50424 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_50425__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50424,inst_50423__$1);var state_50446__$1 = (function (){var statearr_50460 = state_50446;(statearr_50460[(7)] = inst_50425__$1);
(statearr_50460[(11)] = inst_50423__$1);
return statearr_50460;
})();if(cljs.core.truth_(inst_50425__$1))
{var statearr_50461_50505 = state_50446__$1;(statearr_50461_50505[(1)] = (19));
} else
{var statearr_50462_50506 = state_50446__$1;(statearr_50462_50506[(1)] = (20));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (25)))
{var inst_50434 = (state_50446[(2)]);var state_50446__$1 = state_50446;var statearr_50463_50507 = state_50446__$1;(statearr_50463_50507[(2)] = inst_50434);
cljs.core.async.impl.ioc_helpers.process_exception(state_50446__$1);
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (17)))
{var inst_50399 = (state_50446[(10)]);var inst_50408 = cljs.core.first(inst_50399);var inst_50409 = cljs.core.async.muxch_STAR_(inst_50408);var inst_50410 = cljs.core.async.close_BANG_(inst_50409);var inst_50411 = cljs.core.next(inst_50399);var inst_50385 = inst_50411;var inst_50386 = null;var inst_50387 = (0);var inst_50388 = (0);var state_50446__$1 = (function (){var statearr_50464 = state_50446;(statearr_50464[(12)] = inst_50410);
(statearr_50464[(13)] = inst_50388);
(statearr_50464[(14)] = inst_50386);
(statearr_50464[(15)] = inst_50387);
(statearr_50464[(16)] = inst_50385);
return statearr_50464;
})();var statearr_50465_50508 = state_50446__$1;(statearr_50465_50508[(2)] = null);
(statearr_50465_50508[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (3)))
{var inst_50444 = (state_50446[(2)]);var state_50446__$1 = state_50446;return cljs.core.async.impl.ioc_helpers.return_chan(state_50446__$1,inst_50444);
} else
{if((state_val_50447 === (12)))
{var inst_50419 = (state_50446[(2)]);var state_50446__$1 = state_50446;var statearr_50466_50509 = state_50446__$1;(statearr_50466_50509[(2)] = inst_50419);
(statearr_50466_50509[(1)] = (9));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (2)))
{var state_50446__$1 = state_50446;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50446__$1,(4),ch);
} else
{if((state_val_50447 === (23)))
{var inst_50423 = (state_50446[(11)]);var inst_50427 = (state_50446[(2)]);var inst_50428 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50423);var state_50446__$1 = (function (){var statearr_50467 = state_50446;(statearr_50467[(17)] = inst_50427);
return statearr_50467;
})();var statearr_50468_50510 = state_50446__$1;(statearr_50468_50510[(2)] = inst_50428);
cljs.core.async.impl.ioc_helpers.process_exception(state_50446__$1);
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (19)))
{var state_50446__$1 = state_50446;var statearr_50469_50511 = state_50446__$1;(statearr_50469_50511[(2)] = null);
(statearr_50469_50511[(1)] = (24));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (11)))
{var inst_50399 = (state_50446[(10)]);var inst_50385 = (state_50446[(16)]);var inst_50399__$1 = cljs.core.seq(inst_50385);var state_50446__$1 = (function (){var statearr_50470 = state_50446;(statearr_50470[(10)] = inst_50399__$1);
return statearr_50470;
})();if(inst_50399__$1)
{var statearr_50471_50512 = state_50446__$1;(statearr_50471_50512[(1)] = (13));
} else
{var statearr_50472_50513 = state_50446__$1;(statearr_50472_50513[(1)] = (14));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (9)))
{var inst_50421 = (state_50446[(2)]);var state_50446__$1 = state_50446;var statearr_50473_50514 = state_50446__$1;(statearr_50473_50514[(2)] = inst_50421);
(statearr_50473_50514[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (5)))
{var inst_50382 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));var inst_50383 = cljs.core.vals(inst_50382);var inst_50384 = cljs.core.seq(inst_50383);var inst_50385 = inst_50384;var inst_50386 = null;var inst_50387 = (0);var inst_50388 = (0);var state_50446__$1 = (function (){var statearr_50474 = state_50446;(statearr_50474[(13)] = inst_50388);
(statearr_50474[(14)] = inst_50386);
(statearr_50474[(15)] = inst_50387);
(statearr_50474[(16)] = inst_50385);
return statearr_50474;
})();var statearr_50475_50515 = state_50446__$1;(statearr_50475_50515[(2)] = null);
(statearr_50475_50515[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (14)))
{var state_50446__$1 = state_50446;var statearr_50479_50516 = state_50446__$1;(statearr_50479_50516[(2)] = null);
(statearr_50479_50516[(1)] = (15));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (16)))
{var inst_50399 = (state_50446[(10)]);var inst_50403 = cljs.core.chunk_first(inst_50399);var inst_50404 = cljs.core.chunk_rest(inst_50399);var inst_50405 = cljs.core.count(inst_50403);var inst_50385 = inst_50404;var inst_50386 = inst_50403;var inst_50387 = inst_50405;var inst_50388 = (0);var state_50446__$1 = (function (){var statearr_50480 = state_50446;(statearr_50480[(13)] = inst_50388);
(statearr_50480[(14)] = inst_50386);
(statearr_50480[(15)] = inst_50387);
(statearr_50480[(16)] = inst_50385);
return statearr_50480;
})();var statearr_50481_50517 = state_50446__$1;(statearr_50481_50517[(2)] = null);
(statearr_50481_50517[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (10)))
{var inst_50388 = (state_50446[(13)]);var inst_50386 = (state_50446[(14)]);var inst_50387 = (state_50446[(15)]);var inst_50385 = (state_50446[(16)]);var inst_50393 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50386,inst_50388);var inst_50394 = cljs.core.async.muxch_STAR_(inst_50393);var inst_50395 = cljs.core.async.close_BANG_(inst_50394);var inst_50396 = (inst_50388 + (1));var tmp50476 = inst_50386;var tmp50477 = inst_50387;var tmp50478 = inst_50385;var inst_50385__$1 = tmp50478;var inst_50386__$1 = tmp50476;var inst_50387__$1 = tmp50477;var inst_50388__$1 = inst_50396;var state_50446__$1 = (function (){var statearr_50482 = state_50446;(statearr_50482[(18)] = inst_50395);
(statearr_50482[(13)] = inst_50388__$1);
(statearr_50482[(14)] = inst_50386__$1);
(statearr_50482[(15)] = inst_50387__$1);
(statearr_50482[(16)] = inst_50385__$1);
return statearr_50482;
})();var statearr_50483_50518 = state_50446__$1;(statearr_50483_50518[(2)] = null);
(statearr_50483_50518[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (18)))
{var inst_50414 = (state_50446[(2)]);var state_50446__$1 = state_50446;var statearr_50484_50519 = state_50446__$1;(statearr_50484_50519[(2)] = inst_50414);
(statearr_50484_50519[(1)] = (15));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50447 === (8)))
{var inst_50388 = (state_50446[(13)]);var inst_50387 = (state_50446[(15)]);var inst_50390 = (inst_50388 < inst_50387);var inst_50391 = inst_50390;var state_50446__$1 = state_50446;if(cljs.core.truth_(inst_50391))
{var statearr_50485_50520 = state_50446__$1;(statearr_50485_50520[(1)] = (10));
} else
{var statearr_50486_50521 = state_50446__$1;(statearr_50486_50521[(1)] = (11));
}
return cljs.core.constant$keyword$936;
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
});})(c__5708__auto___50494,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___50494,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50490[(0)] = state_machine__5694__auto__);
(statearr_50490[(1)] = (1));
return statearr_50490;
});
var state_machine__5694__auto____1 = (function (state_50446){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50446);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50491){if((e50491 instanceof Object))
{var ex__5697__auto__ = e50491;var statearr_50492_50522 = state_50446;(statearr_50492_50522[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50446);
return cljs.core.constant$keyword$936;
} else
{throw e50491;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__50523 = state_50446;
state_50446 = G__50523;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50446){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50494,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_50493 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50494);
return statearr_50493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50494,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5708__auto___50660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50660,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50660,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50630){var state_val_50631 = (state_50630[(1)]);if((state_val_50631 === (7)))
{var state_50630__$1 = state_50630;var statearr_50632_50661 = state_50630__$1;(statearr_50632_50661[(2)] = null);
(statearr_50632_50661[(1)] = (8));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (1)))
{var state_50630__$1 = state_50630;var statearr_50633_50662 = state_50630__$1;(statearr_50633_50662[(2)] = null);
(statearr_50633_50662[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (4)))
{var inst_50594 = (state_50630[(7)]);var inst_50596 = (inst_50594 < cnt);var state_50630__$1 = state_50630;if(cljs.core.truth_(inst_50596))
{var statearr_50634_50663 = state_50630__$1;(statearr_50634_50663[(1)] = (6));
} else
{var statearr_50635_50664 = state_50630__$1;(statearr_50635_50664[(1)] = (7));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (15)))
{var inst_50626 = (state_50630[(2)]);var state_50630__$1 = state_50630;var statearr_50636_50665 = state_50630__$1;(statearr_50636_50665[(2)] = inst_50626);
(statearr_50636_50665[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (13)))
{var inst_50619 = cljs.core.async.close_BANG_(out);var state_50630__$1 = state_50630;var statearr_50637_50666 = state_50630__$1;(statearr_50637_50666[(2)] = inst_50619);
(statearr_50637_50666[(1)] = (15));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (6)))
{var state_50630__$1 = state_50630;var statearr_50638_50667 = state_50630__$1;(statearr_50638_50667[(2)] = null);
(statearr_50638_50667[(1)] = (11));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (3)))
{var inst_50628 = (state_50630[(2)]);var state_50630__$1 = state_50630;return cljs.core.async.impl.ioc_helpers.return_chan(state_50630__$1,inst_50628);
} else
{if((state_val_50631 === (12)))
{var inst_50616 = (state_50630[(8)]);var inst_50616__$1 = (state_50630[(2)]);var inst_50617 = cljs.core.some(cljs.core.nil_QMARK_,inst_50616__$1);var state_50630__$1 = (function (){var statearr_50639 = state_50630;(statearr_50639[(8)] = inst_50616__$1);
return statearr_50639;
})();if(cljs.core.truth_(inst_50617))
{var statearr_50640_50668 = state_50630__$1;(statearr_50640_50668[(1)] = (13));
} else
{var statearr_50641_50669 = state_50630__$1;(statearr_50641_50669[(1)] = (14));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (2)))
{var inst_50593 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));var inst_50594 = (0);var state_50630__$1 = (function (){var statearr_50642 = state_50630;(statearr_50642[(9)] = inst_50593);
(statearr_50642[(7)] = inst_50594);
return statearr_50642;
})();var statearr_50643_50670 = state_50630__$1;(statearr_50643_50670[(2)] = null);
(statearr_50643_50670[(1)] = (4));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (11)))
{var inst_50594 = (state_50630[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50630,(10),Object,null,(9));var inst_50603 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_50594) : chs__$1.call(null,inst_50594));var inst_50604 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_50594) : done.call(null,inst_50594));var inst_50605 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_50603,inst_50604);var state_50630__$1 = state_50630;var statearr_50644_50671 = state_50630__$1;(statearr_50644_50671[(2)] = inst_50605);
cljs.core.async.impl.ioc_helpers.process_exception(state_50630__$1);
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (9)))
{var inst_50594 = (state_50630[(7)]);var inst_50607 = (state_50630[(2)]);var inst_50608 = (inst_50594 + (1));var inst_50594__$1 = inst_50608;var state_50630__$1 = (function (){var statearr_50645 = state_50630;(statearr_50645[(10)] = inst_50607);
(statearr_50645[(7)] = inst_50594__$1);
return statearr_50645;
})();var statearr_50646_50672 = state_50630__$1;(statearr_50646_50672[(2)] = null);
(statearr_50646_50672[(1)] = (4));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (5)))
{var inst_50614 = (state_50630[(2)]);var state_50630__$1 = (function (){var statearr_50647 = state_50630;(statearr_50647[(11)] = inst_50614);
return statearr_50647;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50630__$1,(12),dchan);
} else
{if((state_val_50631 === (14)))
{var inst_50616 = (state_50630[(8)]);var inst_50621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_50616);var state_50630__$1 = state_50630;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50630__$1,(16),out,inst_50621);
} else
{if((state_val_50631 === (16)))
{var inst_50623 = (state_50630[(2)]);var state_50630__$1 = (function (){var statearr_50648 = state_50630;(statearr_50648[(12)] = inst_50623);
return statearr_50648;
})();var statearr_50649_50673 = state_50630__$1;(statearr_50649_50673[(2)] = null);
(statearr_50649_50673[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (10)))
{var inst_50598 = (state_50630[(2)]);var inst_50599 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_50630__$1 = (function (){var statearr_50650 = state_50630;(statearr_50650[(13)] = inst_50598);
return statearr_50650;
})();var statearr_50651_50674 = state_50630__$1;(statearr_50651_50674[(2)] = inst_50599);
cljs.core.async.impl.ioc_helpers.process_exception(state_50630__$1);
return cljs.core.constant$keyword$936;
} else
{if((state_val_50631 === (8)))
{var inst_50612 = (state_50630[(2)]);var state_50630__$1 = state_50630;var statearr_50652_50675 = state_50630__$1;(statearr_50652_50675[(2)] = inst_50612);
(statearr_50652_50675[(1)] = (5));
return cljs.core.constant$keyword$936;
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
});})(c__5708__auto___50660,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___50660,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50656[(0)] = state_machine__5694__auto__);
(statearr_50656[(1)] = (1));
return statearr_50656;
});
var state_machine__5694__auto____1 = (function (state_50630){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50630);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50657){if((e50657 instanceof Object))
{var ex__5697__auto__ = e50657;var statearr_50658_50676 = state_50630;(statearr_50658_50676[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50630);
return cljs.core.constant$keyword$936;
} else
{throw e50657;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__50677 = state_50630;
state_50630 = G__50677;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50630){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50660,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_50659 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50660);
return statearr_50659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50660,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___50785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50785,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50785,out){
return (function (state_50761){var state_val_50762 = (state_50761[(1)]);if((state_val_50762 === (7)))
{var inst_50740 = (state_50761[(7)]);var inst_50741 = (state_50761[(8)]);var inst_50740__$1 = (state_50761[(2)]);var inst_50741__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50740__$1,(0),null);var inst_50742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50740__$1,(1),null);var inst_50743 = (inst_50741__$1 == null);var state_50761__$1 = (function (){var statearr_50763 = state_50761;(statearr_50763[(7)] = inst_50740__$1);
(statearr_50763[(9)] = inst_50742);
(statearr_50763[(8)] = inst_50741__$1);
return statearr_50763;
})();if(cljs.core.truth_(inst_50743))
{var statearr_50764_50786 = state_50761__$1;(statearr_50764_50786[(1)] = (8));
} else
{var statearr_50765_50787 = state_50761__$1;(statearr_50765_50787[(1)] = (9));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50762 === (1)))
{var inst_50732 = cljs.core.vec(chs);var inst_50733 = inst_50732;var state_50761__$1 = (function (){var statearr_50766 = state_50761;(statearr_50766[(10)] = inst_50733);
return statearr_50766;
})();var statearr_50767_50788 = state_50761__$1;(statearr_50767_50788[(2)] = null);
(statearr_50767_50788[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50762 === (4)))
{var inst_50733 = (state_50761[(10)]);var state_50761__$1 = state_50761;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_50761__$1,(7),inst_50733);
} else
{if((state_val_50762 === (6)))
{var inst_50757 = (state_50761[(2)]);var state_50761__$1 = state_50761;var statearr_50768_50789 = state_50761__$1;(statearr_50768_50789[(2)] = inst_50757);
(statearr_50768_50789[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50762 === (3)))
{var inst_50759 = (state_50761[(2)]);var state_50761__$1 = state_50761;return cljs.core.async.impl.ioc_helpers.return_chan(state_50761__$1,inst_50759);
} else
{if((state_val_50762 === (2)))
{var inst_50733 = (state_50761[(10)]);var inst_50735 = cljs.core.count(inst_50733);var inst_50736 = (inst_50735 > (0));var state_50761__$1 = state_50761;if(cljs.core.truth_(inst_50736))
{var statearr_50770_50790 = state_50761__$1;(statearr_50770_50790[(1)] = (4));
} else
{var statearr_50771_50791 = state_50761__$1;(statearr_50771_50791[(1)] = (5));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50762 === (11)))
{var inst_50733 = (state_50761[(10)]);var inst_50750 = (state_50761[(2)]);var tmp50769 = inst_50733;var inst_50733__$1 = tmp50769;var state_50761__$1 = (function (){var statearr_50772 = state_50761;(statearr_50772[(11)] = inst_50750);
(statearr_50772[(10)] = inst_50733__$1);
return statearr_50772;
})();var statearr_50773_50792 = state_50761__$1;(statearr_50773_50792[(2)] = null);
(statearr_50773_50792[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50762 === (9)))
{var inst_50741 = (state_50761[(8)]);var state_50761__$1 = state_50761;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50761__$1,(11),out,inst_50741);
} else
{if((state_val_50762 === (5)))
{var inst_50755 = cljs.core.async.close_BANG_(out);var state_50761__$1 = state_50761;var statearr_50774_50793 = state_50761__$1;(statearr_50774_50793[(2)] = inst_50755);
(statearr_50774_50793[(1)] = (6));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50762 === (10)))
{var inst_50753 = (state_50761[(2)]);var state_50761__$1 = state_50761;var statearr_50775_50794 = state_50761__$1;(statearr_50775_50794[(2)] = inst_50753);
(statearr_50775_50794[(1)] = (6));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50762 === (8)))
{var inst_50740 = (state_50761[(7)]);var inst_50742 = (state_50761[(9)]);var inst_50741 = (state_50761[(8)]);var inst_50733 = (state_50761[(10)]);var inst_50745 = (function (){var c = inst_50742;var v = inst_50741;var vec__50738 = inst_50740;var cs = inst_50733;return ((function (c,v,vec__50738,cs,inst_50740,inst_50742,inst_50741,inst_50733,state_val_50762,c__5708__auto___50785,out){
return (function (p1__50678_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__50678_SHARP_);
});
;})(c,v,vec__50738,cs,inst_50740,inst_50742,inst_50741,inst_50733,state_val_50762,c__5708__auto___50785,out))
})();var inst_50746 = cljs.core.filterv(inst_50745,inst_50733);var inst_50733__$1 = inst_50746;var state_50761__$1 = (function (){var statearr_50776 = state_50761;(statearr_50776[(10)] = inst_50733__$1);
return statearr_50776;
})();var statearr_50777_50795 = state_50761__$1;(statearr_50777_50795[(2)] = null);
(statearr_50777_50795[(1)] = (2));
return cljs.core.constant$keyword$936;
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
});})(c__5708__auto___50785,out))
;return ((function (switch__5693__auto__,c__5708__auto___50785,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50781 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50781[(0)] = state_machine__5694__auto__);
(statearr_50781[(1)] = (1));
return statearr_50781;
});
var state_machine__5694__auto____1 = (function (state_50761){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50761);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50782){if((e50782 instanceof Object))
{var ex__5697__auto__ = e50782;var statearr_50783_50796 = state_50761;(statearr_50783_50796[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50761);
return cljs.core.constant$keyword$936;
} else
{throw e50782;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__50797 = state_50761;
state_50761 = G__50797;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50761){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50785,out))
})();var state__5710__auto__ = (function (){var statearr_50784 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50785);
return statearr_50784;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50785,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___50890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50890,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50890,out){
return (function (state_50867){var state_val_50868 = (state_50867[(1)]);if((state_val_50868 === (7)))
{var inst_50849 = (state_50867[(7)]);var inst_50849__$1 = (state_50867[(2)]);var inst_50850 = (inst_50849__$1 == null);var inst_50851 = cljs.core.not(inst_50850);var state_50867__$1 = (function (){var statearr_50869 = state_50867;(statearr_50869[(7)] = inst_50849__$1);
return statearr_50869;
})();if(inst_50851)
{var statearr_50870_50891 = state_50867__$1;(statearr_50870_50891[(1)] = (8));
} else
{var statearr_50871_50892 = state_50867__$1;(statearr_50871_50892[(1)] = (9));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50868 === (1)))
{var inst_50844 = (0);var state_50867__$1 = (function (){var statearr_50872 = state_50867;(statearr_50872[(8)] = inst_50844);
return statearr_50872;
})();var statearr_50873_50893 = state_50867__$1;(statearr_50873_50893[(2)] = null);
(statearr_50873_50893[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50868 === (4)))
{var state_50867__$1 = state_50867;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50867__$1,(7),ch);
} else
{if((state_val_50868 === (6)))
{var inst_50862 = (state_50867[(2)]);var state_50867__$1 = state_50867;var statearr_50874_50894 = state_50867__$1;(statearr_50874_50894[(2)] = inst_50862);
(statearr_50874_50894[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50868 === (3)))
{var inst_50864 = (state_50867[(2)]);var inst_50865 = cljs.core.async.close_BANG_(out);var state_50867__$1 = (function (){var statearr_50875 = state_50867;(statearr_50875[(9)] = inst_50864);
return statearr_50875;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_50867__$1,inst_50865);
} else
{if((state_val_50868 === (2)))
{var inst_50844 = (state_50867[(8)]);var inst_50846 = (inst_50844 < n);var state_50867__$1 = state_50867;if(cljs.core.truth_(inst_50846))
{var statearr_50876_50895 = state_50867__$1;(statearr_50876_50895[(1)] = (4));
} else
{var statearr_50877_50896 = state_50867__$1;(statearr_50877_50896[(1)] = (5));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50868 === (11)))
{var inst_50844 = (state_50867[(8)]);var inst_50854 = (state_50867[(2)]);var inst_50855 = (inst_50844 + (1));var inst_50844__$1 = inst_50855;var state_50867__$1 = (function (){var statearr_50878 = state_50867;(statearr_50878[(10)] = inst_50854);
(statearr_50878[(8)] = inst_50844__$1);
return statearr_50878;
})();var statearr_50879_50897 = state_50867__$1;(statearr_50879_50897[(2)] = null);
(statearr_50879_50897[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50868 === (9)))
{var state_50867__$1 = state_50867;var statearr_50880_50898 = state_50867__$1;(statearr_50880_50898[(2)] = null);
(statearr_50880_50898[(1)] = (10));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50868 === (5)))
{var state_50867__$1 = state_50867;var statearr_50881_50899 = state_50867__$1;(statearr_50881_50899[(2)] = null);
(statearr_50881_50899[(1)] = (6));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50868 === (10)))
{var inst_50859 = (state_50867[(2)]);var state_50867__$1 = state_50867;var statearr_50882_50900 = state_50867__$1;(statearr_50882_50900[(2)] = inst_50859);
(statearr_50882_50900[(1)] = (6));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50868 === (8)))
{var inst_50849 = (state_50867[(7)]);var state_50867__$1 = state_50867;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50867__$1,(11),out,inst_50849);
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
});})(c__5708__auto___50890,out))
;return ((function (switch__5693__auto__,c__5708__auto___50890,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50886 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_50886[(0)] = state_machine__5694__auto__);
(statearr_50886[(1)] = (1));
return statearr_50886;
});
var state_machine__5694__auto____1 = (function (state_50867){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50867);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50887){if((e50887 instanceof Object))
{var ex__5697__auto__ = e50887;var statearr_50888_50901 = state_50867;(statearr_50888_50901[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50867);
return cljs.core.constant$keyword$936;
} else
{throw e50887;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__50902 = state_50867;
state_50867 = G__50902;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50867){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50890,out))
})();var state__5710__auto__ = (function (){var statearr_50889 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50890);
return statearr_50889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50890,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___50999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___50999,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50999,out){
return (function (state_50974){var state_val_50975 = (state_50974[(1)]);if((state_val_50975 === (7)))
{var inst_50969 = (state_50974[(2)]);var state_50974__$1 = state_50974;var statearr_50976_51000 = state_50974__$1;(statearr_50976_51000[(2)] = inst_50969);
(statearr_50976_51000[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50975 === (1)))
{var inst_50951 = null;var state_50974__$1 = (function (){var statearr_50977 = state_50974;(statearr_50977[(7)] = inst_50951);
return statearr_50977;
})();var statearr_50978_51001 = state_50974__$1;(statearr_50978_51001[(2)] = null);
(statearr_50978_51001[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50975 === (4)))
{var inst_50954 = (state_50974[(8)]);var inst_50954__$1 = (state_50974[(2)]);var inst_50955 = (inst_50954__$1 == null);var inst_50956 = cljs.core.not(inst_50955);var state_50974__$1 = (function (){var statearr_50979 = state_50974;(statearr_50979[(8)] = inst_50954__$1);
return statearr_50979;
})();if(inst_50956)
{var statearr_50980_51002 = state_50974__$1;(statearr_50980_51002[(1)] = (5));
} else
{var statearr_50981_51003 = state_50974__$1;(statearr_50981_51003[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50975 === (6)))
{var state_50974__$1 = state_50974;var statearr_50982_51004 = state_50974__$1;(statearr_50982_51004[(2)] = null);
(statearr_50982_51004[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50975 === (3)))
{var inst_50971 = (state_50974[(2)]);var inst_50972 = cljs.core.async.close_BANG_(out);var state_50974__$1 = (function (){var statearr_50983 = state_50974;(statearr_50983[(9)] = inst_50971);
return statearr_50983;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_50974__$1,inst_50972);
} else
{if((state_val_50975 === (2)))
{var state_50974__$1 = state_50974;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50974__$1,(4),ch);
} else
{if((state_val_50975 === (11)))
{var inst_50954 = (state_50974[(8)]);var inst_50963 = (state_50974[(2)]);var inst_50951 = inst_50954;var state_50974__$1 = (function (){var statearr_50984 = state_50974;(statearr_50984[(7)] = inst_50951);
(statearr_50984[(10)] = inst_50963);
return statearr_50984;
})();var statearr_50985_51005 = state_50974__$1;(statearr_50985_51005[(2)] = null);
(statearr_50985_51005[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50975 === (9)))
{var inst_50954 = (state_50974[(8)]);var state_50974__$1 = state_50974;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50974__$1,(11),out,inst_50954);
} else
{if((state_val_50975 === (5)))
{var inst_50951 = (state_50974[(7)]);var inst_50954 = (state_50974[(8)]);var inst_50958 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50954,inst_50951);var state_50974__$1 = state_50974;if(inst_50958)
{var statearr_50987_51006 = state_50974__$1;(statearr_50987_51006[(1)] = (8));
} else
{var statearr_50988_51007 = state_50974__$1;(statearr_50988_51007[(1)] = (9));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_50975 === (10)))
{var inst_50966 = (state_50974[(2)]);var state_50974__$1 = state_50974;var statearr_50989_51008 = state_50974__$1;(statearr_50989_51008[(2)] = inst_50966);
(statearr_50989_51008[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_50975 === (8)))
{var inst_50951 = (state_50974[(7)]);var tmp50986 = inst_50951;var inst_50951__$1 = tmp50986;var state_50974__$1 = (function (){var statearr_50990 = state_50974;(statearr_50990[(7)] = inst_50951__$1);
return statearr_50990;
})();var statearr_50991_51009 = state_50974__$1;(statearr_50991_51009[(2)] = null);
(statearr_50991_51009[(1)] = (2));
return cljs.core.constant$keyword$936;
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
});})(c__5708__auto___50999,out))
;return ((function (switch__5693__auto__,c__5708__auto___50999,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50995 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_50995[(0)] = state_machine__5694__auto__);
(statearr_50995[(1)] = (1));
return statearr_50995;
});
var state_machine__5694__auto____1 = (function (state_50974){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_50974);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50996){if((e50996 instanceof Object))
{var ex__5697__auto__ = e50996;var statearr_50997_51010 = state_50974;(statearr_50997_51010[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50974);
return cljs.core.constant$keyword$936;
} else
{throw e50996;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__51011 = state_50974;
state_50974 = G__51011;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50974){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50999,out))
})();var state__5710__auto__ = (function (){var statearr_50998 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_50998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50999);
return statearr_50998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___50999,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51146,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51146,out){
return (function (state_51116){var state_val_51117 = (state_51116[(1)]);if((state_val_51117 === (7)))
{var inst_51112 = (state_51116[(2)]);var state_51116__$1 = state_51116;var statearr_51118_51147 = state_51116__$1;(statearr_51118_51147[(2)] = inst_51112);
(statearr_51118_51147[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51117 === (1)))
{var inst_51079 = (new Array(n));var inst_51080 = inst_51079;var inst_51081 = (0);var state_51116__$1 = (function (){var statearr_51119 = state_51116;(statearr_51119[(7)] = inst_51081);
(statearr_51119[(8)] = inst_51080);
return statearr_51119;
})();var statearr_51120_51148 = state_51116__$1;(statearr_51120_51148[(2)] = null);
(statearr_51120_51148[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51117 === (4)))
{var inst_51084 = (state_51116[(9)]);var inst_51084__$1 = (state_51116[(2)]);var inst_51085 = (inst_51084__$1 == null);var inst_51086 = cljs.core.not(inst_51085);var state_51116__$1 = (function (){var statearr_51121 = state_51116;(statearr_51121[(9)] = inst_51084__$1);
return statearr_51121;
})();if(inst_51086)
{var statearr_51122_51149 = state_51116__$1;(statearr_51122_51149[(1)] = (5));
} else
{var statearr_51123_51150 = state_51116__$1;(statearr_51123_51150[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_51117 === (15)))
{var inst_51106 = (state_51116[(2)]);var state_51116__$1 = state_51116;var statearr_51124_51151 = state_51116__$1;(statearr_51124_51151[(2)] = inst_51106);
(statearr_51124_51151[(1)] = (14));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51117 === (13)))
{var state_51116__$1 = state_51116;var statearr_51125_51152 = state_51116__$1;(statearr_51125_51152[(2)] = null);
(statearr_51125_51152[(1)] = (14));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51117 === (6)))
{var inst_51081 = (state_51116[(7)]);var inst_51102 = (inst_51081 > (0));var state_51116__$1 = state_51116;if(cljs.core.truth_(inst_51102))
{var statearr_51126_51153 = state_51116__$1;(statearr_51126_51153[(1)] = (12));
} else
{var statearr_51127_51154 = state_51116__$1;(statearr_51127_51154[(1)] = (13));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_51117 === (3)))
{var inst_51114 = (state_51116[(2)]);var state_51116__$1 = state_51116;return cljs.core.async.impl.ioc_helpers.return_chan(state_51116__$1,inst_51114);
} else
{if((state_val_51117 === (12)))
{var inst_51080 = (state_51116[(8)]);var inst_51104 = cljs.core.vec(inst_51080);var state_51116__$1 = state_51116;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51116__$1,(15),out,inst_51104);
} else
{if((state_val_51117 === (2)))
{var state_51116__$1 = state_51116;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51116__$1,(4),ch);
} else
{if((state_val_51117 === (11)))
{var inst_51096 = (state_51116[(2)]);var inst_51097 = (new Array(n));var inst_51080 = inst_51097;var inst_51081 = (0);var state_51116__$1 = (function (){var statearr_51128 = state_51116;(statearr_51128[(7)] = inst_51081);
(statearr_51128[(10)] = inst_51096);
(statearr_51128[(8)] = inst_51080);
return statearr_51128;
})();var statearr_51129_51155 = state_51116__$1;(statearr_51129_51155[(2)] = null);
(statearr_51129_51155[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51117 === (9)))
{var inst_51080 = (state_51116[(8)]);var inst_51094 = cljs.core.vec(inst_51080);var state_51116__$1 = state_51116;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51116__$1,(11),out,inst_51094);
} else
{if((state_val_51117 === (5)))
{var inst_51084 = (state_51116[(9)]);var inst_51081 = (state_51116[(7)]);var inst_51080 = (state_51116[(8)]);var inst_51089 = (state_51116[(11)]);var inst_51088 = (inst_51080[inst_51081] = inst_51084);var inst_51089__$1 = (inst_51081 + (1));var inst_51090 = (inst_51089__$1 < n);var state_51116__$1 = (function (){var statearr_51130 = state_51116;(statearr_51130[(12)] = inst_51088);
(statearr_51130[(11)] = inst_51089__$1);
return statearr_51130;
})();if(cljs.core.truth_(inst_51090))
{var statearr_51131_51156 = state_51116__$1;(statearr_51131_51156[(1)] = (8));
} else
{var statearr_51132_51157 = state_51116__$1;(statearr_51132_51157[(1)] = (9));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_51117 === (14)))
{var inst_51109 = (state_51116[(2)]);var inst_51110 = cljs.core.async.close_BANG_(out);var state_51116__$1 = (function (){var statearr_51134 = state_51116;(statearr_51134[(13)] = inst_51109);
return statearr_51134;
})();var statearr_51135_51158 = state_51116__$1;(statearr_51135_51158[(2)] = inst_51110);
(statearr_51135_51158[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51117 === (10)))
{var inst_51100 = (state_51116[(2)]);var state_51116__$1 = state_51116;var statearr_51136_51159 = state_51116__$1;(statearr_51136_51159[(2)] = inst_51100);
(statearr_51136_51159[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51117 === (8)))
{var inst_51080 = (state_51116[(8)]);var inst_51089 = (state_51116[(11)]);var tmp51133 = inst_51080;var inst_51080__$1 = tmp51133;var inst_51081 = inst_51089;var state_51116__$1 = (function (){var statearr_51137 = state_51116;(statearr_51137[(7)] = inst_51081);
(statearr_51137[(8)] = inst_51080__$1);
return statearr_51137;
})();var statearr_51138_51160 = state_51116__$1;(statearr_51138_51160[(2)] = null);
(statearr_51138_51160[(1)] = (2));
return cljs.core.constant$keyword$936;
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
});})(c__5708__auto___51146,out))
;return ((function (switch__5693__auto__,c__5708__auto___51146,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51142[(0)] = state_machine__5694__auto__);
(statearr_51142[(1)] = (1));
return statearr_51142;
});
var state_machine__5694__auto____1 = (function (state_51116){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51116);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51143){if((e51143 instanceof Object))
{var ex__5697__auto__ = e51143;var statearr_51144_51161 = state_51116;(statearr_51144_51161[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51116);
return cljs.core.constant$keyword$936;
} else
{throw e51143;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__51162 = state_51116;
state_51116 = G__51162;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51116){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51146,out))
})();var state__5710__auto__ = (function (){var statearr_51145 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51146);
return statearr_51145;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___51146,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5708__auto___51305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___51305,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51305,out){
return (function (state_51275){var state_val_51276 = (state_51275[(1)]);if((state_val_51276 === (7)))
{var inst_51271 = (state_51275[(2)]);var state_51275__$1 = state_51275;var statearr_51277_51306 = state_51275__$1;(statearr_51277_51306[(2)] = inst_51271);
(statearr_51277_51306[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51276 === (1)))
{var inst_51234 = [];var inst_51235 = inst_51234;var inst_51236 = cljs.core.constant$keyword$949;var state_51275__$1 = (function (){var statearr_51278 = state_51275;(statearr_51278[(7)] = inst_51235);
(statearr_51278[(8)] = inst_51236);
return statearr_51278;
})();var statearr_51279_51307 = state_51275__$1;(statearr_51279_51307[(2)] = null);
(statearr_51279_51307[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51276 === (4)))
{var inst_51239 = (state_51275[(9)]);var inst_51239__$1 = (state_51275[(2)]);var inst_51240 = (inst_51239__$1 == null);var inst_51241 = cljs.core.not(inst_51240);var state_51275__$1 = (function (){var statearr_51280 = state_51275;(statearr_51280[(9)] = inst_51239__$1);
return statearr_51280;
})();if(inst_51241)
{var statearr_51281_51308 = state_51275__$1;(statearr_51281_51308[(1)] = (5));
} else
{var statearr_51282_51309 = state_51275__$1;(statearr_51282_51309[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_51276 === (15)))
{var inst_51265 = (state_51275[(2)]);var state_51275__$1 = state_51275;var statearr_51283_51310 = state_51275__$1;(statearr_51283_51310[(2)] = inst_51265);
(statearr_51283_51310[(1)] = (14));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51276 === (13)))
{var state_51275__$1 = state_51275;var statearr_51284_51311 = state_51275__$1;(statearr_51284_51311[(2)] = null);
(statearr_51284_51311[(1)] = (14));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51276 === (6)))
{var inst_51235 = (state_51275[(7)]);var inst_51260 = inst_51235.length;var inst_51261 = (inst_51260 > (0));var state_51275__$1 = state_51275;if(cljs.core.truth_(inst_51261))
{var statearr_51285_51312 = state_51275__$1;(statearr_51285_51312[(1)] = (12));
} else
{var statearr_51286_51313 = state_51275__$1;(statearr_51286_51313[(1)] = (13));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_51276 === (3)))
{var inst_51273 = (state_51275[(2)]);var state_51275__$1 = state_51275;return cljs.core.async.impl.ioc_helpers.return_chan(state_51275__$1,inst_51273);
} else
{if((state_val_51276 === (12)))
{var inst_51235 = (state_51275[(7)]);var inst_51263 = cljs.core.vec(inst_51235);var state_51275__$1 = state_51275;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51275__$1,(15),out,inst_51263);
} else
{if((state_val_51276 === (2)))
{var state_51275__$1 = state_51275;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51275__$1,(4),ch);
} else
{if((state_val_51276 === (11)))
{var inst_51243 = (state_51275[(10)]);var inst_51239 = (state_51275[(9)]);var inst_51253 = (state_51275[(2)]);var inst_51254 = [];var inst_51255 = inst_51254.push(inst_51239);var inst_51235 = inst_51254;var inst_51236 = inst_51243;var state_51275__$1 = (function (){var statearr_51287 = state_51275;(statearr_51287[(7)] = inst_51235);
(statearr_51287[(8)] = inst_51236);
(statearr_51287[(11)] = inst_51253);
(statearr_51287[(12)] = inst_51255);
return statearr_51287;
})();var statearr_51288_51314 = state_51275__$1;(statearr_51288_51314[(2)] = null);
(statearr_51288_51314[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51276 === (9)))
{var inst_51235 = (state_51275[(7)]);var inst_51251 = cljs.core.vec(inst_51235);var state_51275__$1 = state_51275;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51275__$1,(11),out,inst_51251);
} else
{if((state_val_51276 === (5)))
{var inst_51236 = (state_51275[(8)]);var inst_51243 = (state_51275[(10)]);var inst_51239 = (state_51275[(9)]);var inst_51243__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51239) : f.call(null,inst_51239));var inst_51244 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51243__$1,inst_51236);var inst_51245 = cljs.core.keyword_identical_QMARK_(inst_51236,cljs.core.constant$keyword$949);var inst_51246 = (inst_51244) || (inst_51245);var state_51275__$1 = (function (){var statearr_51289 = state_51275;(statearr_51289[(10)] = inst_51243__$1);
return statearr_51289;
})();if(cljs.core.truth_(inst_51246))
{var statearr_51290_51315 = state_51275__$1;(statearr_51290_51315[(1)] = (8));
} else
{var statearr_51291_51316 = state_51275__$1;(statearr_51291_51316[(1)] = (9));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_51276 === (14)))
{var inst_51268 = (state_51275[(2)]);var inst_51269 = cljs.core.async.close_BANG_(out);var state_51275__$1 = (function (){var statearr_51293 = state_51275;(statearr_51293[(13)] = inst_51268);
return statearr_51293;
})();var statearr_51294_51317 = state_51275__$1;(statearr_51294_51317[(2)] = inst_51269);
(statearr_51294_51317[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51276 === (10)))
{var inst_51258 = (state_51275[(2)]);var state_51275__$1 = state_51275;var statearr_51295_51318 = state_51275__$1;(statearr_51295_51318[(2)] = inst_51258);
(statearr_51295_51318[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_51276 === (8)))
{var inst_51235 = (state_51275[(7)]);var inst_51243 = (state_51275[(10)]);var inst_51239 = (state_51275[(9)]);var inst_51248 = inst_51235.push(inst_51239);var tmp51292 = inst_51235;var inst_51235__$1 = tmp51292;var inst_51236 = inst_51243;var state_51275__$1 = (function (){var statearr_51296 = state_51275;(statearr_51296[(7)] = inst_51235__$1);
(statearr_51296[(8)] = inst_51236);
(statearr_51296[(14)] = inst_51248);
return statearr_51296;
})();var statearr_51297_51319 = state_51275__$1;(statearr_51297_51319[(2)] = null);
(statearr_51297_51319[(1)] = (2));
return cljs.core.constant$keyword$936;
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
});})(c__5708__auto___51305,out))
;return ((function (switch__5693__auto__,c__5708__auto___51305,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51301[(0)] = state_machine__5694__auto__);
(statearr_51301[(1)] = (1));
return statearr_51301;
});
var state_machine__5694__auto____1 = (function (state_51275){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51275);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51302){if((e51302 instanceof Object))
{var ex__5697__auto__ = e51302;var statearr_51303_51320 = state_51275;(statearr_51303_51320[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51275);
return cljs.core.constant$keyword$936;
} else
{throw e51302;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__51321 = state_51275;
state_51275 = G__51321;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51275){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51275);
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
