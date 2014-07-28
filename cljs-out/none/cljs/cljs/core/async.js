// Compiled by ClojureScript 0.0-2268
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t53605 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53605 = (function (f,fn_handler,meta53606){
this.f = f;
this.fn_handler = fn_handler;
this.meta53606 = meta53606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53605.cljs$lang$type = true;
cljs.core.async.t53605.cljs$lang$ctorStr = "cljs.core.async/t53605";
cljs.core.async.t53605.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53605");
});
cljs.core.async.t53605.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t53605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t53605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53607){var self__ = this;
var _53607__$1 = this;return self__.meta53606;
});
cljs.core.async.t53605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53607,meta53606__$1){var self__ = this;
var _53607__$1 = this;return (new cljs.core.async.t53605(self__.f,self__.fn_handler,meta53606__$1));
});
cljs.core.async.__GT_t53605 = (function __GT_t53605(f__$1,fn_handler__$1,meta53606){return (new cljs.core.async.t53605(f__$1,fn_handler__$1,meta53606));
});
}
return (new cljs.core.async.t53605(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__53609 = buff;if(G__53609)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__53609.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__53609.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__53609);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__53609);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_53610 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_53610);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_53610,ret){
return (function (){return fn1.call(null,val_53610);
});})(val_53610,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___53611 = n;var x_53612 = (0);while(true){
if((x_53612 < n__4399__auto___53611))
{(a[x_53612] = (0));
{
var G__53613 = (x_53612 + (1));
x_53612 = G__53613;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__53614 = (i + (1));
i = G__53614;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t53618 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53618 = (function (flag,alt_flag,meta53619){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta53619 = meta53619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53618.cljs$lang$type = true;
cljs.core.async.t53618.cljs$lang$ctorStr = "cljs.core.async/t53618";
cljs.core.async.t53618.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53618");
});})(flag))
;
cljs.core.async.t53618.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t53618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t53618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_53620){var self__ = this;
var _53620__$1 = this;return self__.meta53619;
});})(flag))
;
cljs.core.async.t53618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_53620,meta53619__$1){var self__ = this;
var _53620__$1 = this;return (new cljs.core.async.t53618(self__.flag,self__.alt_flag,meta53619__$1));
});})(flag))
;
cljs.core.async.__GT_t53618 = ((function (flag){
return (function __GT_t53618(flag__$1,alt_flag__$1,meta53619){return (new cljs.core.async.t53618(flag__$1,alt_flag__$1,meta53619));
});})(flag))
;
}
return (new cljs.core.async.t53618(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t53624 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53624 = (function (cb,flag,alt_handler,meta53625){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta53625 = meta53625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53624.cljs$lang$type = true;
cljs.core.async.t53624.cljs$lang$ctorStr = "cljs.core.async/t53624";
cljs.core.async.t53624.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53624");
});
cljs.core.async.t53624.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53624.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t53624.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t53624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53626){var self__ = this;
var _53626__$1 = this;return self__.meta53625;
});
cljs.core.async.t53624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53626,meta53625__$1){var self__ = this;
var _53626__$1 = this;return (new cljs.core.async.t53624(self__.cb,self__.flag,self__.alt_handler,meta53625__$1));
});
cljs.core.async.__GT_t53624 = (function __GT_t53624(cb__$1,flag__$1,alt_handler__$1,meta53625){return (new cljs.core.async.t53624(cb__$1,flag__$1,alt_handler__$1,meta53625));
});
}
return (new cljs.core.async.t53624(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__53627_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53627_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__53628 = (i + (1));
i = G__53628;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__53629){var map__53631 = p__53629;var map__53631__$1 = ((cljs.core.seq_QMARK_.call(null,map__53631))?cljs.core.apply.call(null,cljs.core.hash_map,map__53631):map__53631);var opts = map__53631__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__53629 = null;if (arguments.length > 1) {
  p__53629 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__53629);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__53632){
var ports = cljs.core.first(arglist__53632);
var p__53629 = cljs.core.rest(arglist__53632);
return alts_BANG___delegate(ports,p__53629);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t53640 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53640 = (function (ch,f,map_LT_,meta53641){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta53641 = meta53641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53640.cljs$lang$type = true;
cljs.core.async.t53640.cljs$lang$ctorStr = "cljs.core.async/t53640";
cljs.core.async.t53640.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53640");
});
cljs.core.async.t53640.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53640.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t53640.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53640.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t53643 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53643 = (function (fn1,_,meta53641,ch,f,map_LT_,meta53644){
this.fn1 = fn1;
this._ = _;
this.meta53641 = meta53641;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta53644 = meta53644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53643.cljs$lang$type = true;
cljs.core.async.t53643.cljs$lang$ctorStr = "cljs.core.async/t53643";
cljs.core.async.t53643.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53643");
});})(___$1))
;
cljs.core.async.t53643.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t53643.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t53643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__53633_SHARP_){return f1.call(null,(((p1__53633_SHARP_ == null))?null:self__.f.call(null,p1__53633_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t53643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53645){var self__ = this;
var _53645__$1 = this;return self__.meta53644;
});})(___$1))
;
cljs.core.async.t53643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53645,meta53644__$1){var self__ = this;
var _53645__$1 = this;return (new cljs.core.async.t53643(self__.fn1,self__._,self__.meta53641,self__.ch,self__.f,self__.map_LT_,meta53644__$1));
});})(___$1))
;
cljs.core.async.__GT_t53643 = ((function (___$1){
return (function __GT_t53643(fn1__$1,___$2,meta53641__$1,ch__$2,f__$2,map_LT___$2,meta53644){return (new cljs.core.async.t53643(fn1__$1,___$2,meta53641__$1,ch__$2,f__$2,map_LT___$2,meta53644));
});})(___$1))
;
}
return (new cljs.core.async.t53643(fn1,___$1,self__.meta53641,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t53640.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53640.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53642){var self__ = this;
var _53642__$1 = this;return self__.meta53641;
});
cljs.core.async.t53640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53642,meta53641__$1){var self__ = this;
var _53642__$1 = this;return (new cljs.core.async.t53640(self__.ch,self__.f,self__.map_LT_,meta53641__$1));
});
cljs.core.async.__GT_t53640 = (function __GT_t53640(ch__$1,f__$1,map_LT___$1,meta53641){return (new cljs.core.async.t53640(ch__$1,f__$1,map_LT___$1,meta53641));
});
}
return (new cljs.core.async.t53640(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t53649 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53649 = (function (ch,f,map_GT_,meta53650){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta53650 = meta53650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53649.cljs$lang$type = true;
cljs.core.async.t53649.cljs$lang$ctorStr = "cljs.core.async/t53649";
cljs.core.async.t53649.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53649");
});
cljs.core.async.t53649.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53649.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t53649.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53649.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t53649.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53649.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53651){var self__ = this;
var _53651__$1 = this;return self__.meta53650;
});
cljs.core.async.t53649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53651,meta53650__$1){var self__ = this;
var _53651__$1 = this;return (new cljs.core.async.t53649(self__.ch,self__.f,self__.map_GT_,meta53650__$1));
});
cljs.core.async.__GT_t53649 = (function __GT_t53649(ch__$1,f__$1,map_GT___$1,meta53650){return (new cljs.core.async.t53649(ch__$1,f__$1,map_GT___$1,meta53650));
});
}
return (new cljs.core.async.t53649(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t53655 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53655 = (function (ch,p,filter_GT_,meta53656){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta53656 = meta53656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53655.cljs$lang$type = true;
cljs.core.async.t53655.cljs$lang$ctorStr = "cljs.core.async/t53655";
cljs.core.async.t53655.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53655");
});
cljs.core.async.t53655.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53655.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t53655.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53655.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t53655.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53655.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53657){var self__ = this;
var _53657__$1 = this;return self__.meta53656;
});
cljs.core.async.t53655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53657,meta53656__$1){var self__ = this;
var _53657__$1 = this;return (new cljs.core.async.t53655(self__.ch,self__.p,self__.filter_GT_,meta53656__$1));
});
cljs.core.async.__GT_t53655 = (function __GT_t53655(ch__$1,p__$1,filter_GT___$1,meta53656){return (new cljs.core.async.t53655(ch__$1,p__$1,filter_GT___$1,meta53656));
});
}
return (new cljs.core.async.t53655(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___53740 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53740,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53740,out){
return (function (state_53719){var state_val_53720 = (state_53719[(1)]);if((state_val_53720 === (7)))
{var inst_53715 = (state_53719[(2)]);var state_53719__$1 = state_53719;var statearr_53721_53741 = state_53719__$1;(statearr_53721_53741[(2)] = inst_53715);
(statearr_53721_53741[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53720 === (1)))
{var state_53719__$1 = state_53719;var statearr_53722_53742 = state_53719__$1;(statearr_53722_53742[(2)] = null);
(statearr_53722_53742[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53720 === (4)))
{var inst_53701 = (state_53719[(7)]);var inst_53701__$1 = (state_53719[(2)]);var inst_53702 = (inst_53701__$1 == null);var state_53719__$1 = (function (){var statearr_53723 = state_53719;(statearr_53723[(7)] = inst_53701__$1);
return statearr_53723;
})();if(cljs.core.truth_(inst_53702))
{var statearr_53724_53743 = state_53719__$1;(statearr_53724_53743[(1)] = (5));
} else
{var statearr_53725_53744 = state_53719__$1;(statearr_53725_53744[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53720 === (6)))
{var inst_53701 = (state_53719[(7)]);var inst_53706 = p.call(null,inst_53701);var state_53719__$1 = state_53719;if(cljs.core.truth_(inst_53706))
{var statearr_53726_53745 = state_53719__$1;(statearr_53726_53745[(1)] = (8));
} else
{var statearr_53727_53746 = state_53719__$1;(statearr_53727_53746[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53720 === (3)))
{var inst_53717 = (state_53719[(2)]);var state_53719__$1 = state_53719;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53719__$1,inst_53717);
} else
{if((state_val_53720 === (2)))
{var state_53719__$1 = state_53719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53719__$1,(4),ch);
} else
{if((state_val_53720 === (11)))
{var inst_53709 = (state_53719[(2)]);var state_53719__$1 = state_53719;var statearr_53728_53747 = state_53719__$1;(statearr_53728_53747[(2)] = inst_53709);
(statearr_53728_53747[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53720 === (9)))
{var state_53719__$1 = state_53719;var statearr_53729_53748 = state_53719__$1;(statearr_53729_53748[(2)] = null);
(statearr_53729_53748[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53720 === (5)))
{var inst_53704 = cljs.core.async.close_BANG_.call(null,out);var state_53719__$1 = state_53719;var statearr_53730_53749 = state_53719__$1;(statearr_53730_53749[(2)] = inst_53704);
(statearr_53730_53749[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53720 === (10)))
{var inst_53712 = (state_53719[(2)]);var state_53719__$1 = (function (){var statearr_53731 = state_53719;(statearr_53731[(8)] = inst_53712);
return statearr_53731;
})();var statearr_53732_53750 = state_53719__$1;(statearr_53732_53750[(2)] = null);
(statearr_53732_53750[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53720 === (8)))
{var inst_53701 = (state_53719[(7)]);var state_53719__$1 = state_53719;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53719__$1,(11),out,inst_53701);
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
});})(c__5693__auto___53740,out))
;return ((function (switch__5678__auto__,c__5693__auto___53740,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53736 = [null,null,null,null,null,null,null,null,null];(statearr_53736[(0)] = state_machine__5679__auto__);
(statearr_53736[(1)] = (1));
return statearr_53736;
});
var state_machine__5679__auto____1 = (function (state_53719){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53719);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53737){if((e53737 instanceof Object))
{var ex__5682__auto__ = e53737;var statearr_53738_53751 = state_53719;(statearr_53738_53751[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53719);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53752 = state_53719;
state_53719 = G__53752;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53719){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53740,out))
})();var state__5695__auto__ = (function (){var statearr_53739 = f__5694__auto__.call(null);(statearr_53739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53740);
return statearr_53739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53740,out))
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_53904){var state_val_53905 = (state_53904[(1)]);if((state_val_53905 === (7)))
{var inst_53900 = (state_53904[(2)]);var state_53904__$1 = state_53904;var statearr_53906_53943 = state_53904__$1;(statearr_53906_53943[(2)] = inst_53900);
(statearr_53906_53943[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (20)))
{var inst_53875 = (state_53904[(7)]);var inst_53886 = (state_53904[(2)]);var inst_53887 = cljs.core.next.call(null,inst_53875);var inst_53861 = inst_53887;var inst_53862 = null;var inst_53863 = (0);var inst_53864 = (0);var state_53904__$1 = (function (){var statearr_53907 = state_53904;(statearr_53907[(8)] = inst_53862);
(statearr_53907[(9)] = inst_53861);
(statearr_53907[(10)] = inst_53886);
(statearr_53907[(11)] = inst_53863);
(statearr_53907[(12)] = inst_53864);
return statearr_53907;
})();var statearr_53908_53944 = state_53904__$1;(statearr_53908_53944[(2)] = null);
(statearr_53908_53944[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (1)))
{var state_53904__$1 = state_53904;var statearr_53909_53945 = state_53904__$1;(statearr_53909_53945[(2)] = null);
(statearr_53909_53945[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (4)))
{var inst_53850 = (state_53904[(13)]);var inst_53850__$1 = (state_53904[(2)]);var inst_53851 = (inst_53850__$1 == null);var state_53904__$1 = (function (){var statearr_53913 = state_53904;(statearr_53913[(13)] = inst_53850__$1);
return statearr_53913;
})();if(cljs.core.truth_(inst_53851))
{var statearr_53914_53946 = state_53904__$1;(statearr_53914_53946[(1)] = (5));
} else
{var statearr_53915_53947 = state_53904__$1;(statearr_53915_53947[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (15)))
{var state_53904__$1 = state_53904;var statearr_53916_53948 = state_53904__$1;(statearr_53916_53948[(2)] = null);
(statearr_53916_53948[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (13)))
{var inst_53862 = (state_53904[(8)]);var inst_53861 = (state_53904[(9)]);var inst_53863 = (state_53904[(11)]);var inst_53864 = (state_53904[(12)]);var inst_53871 = (state_53904[(2)]);var inst_53872 = (inst_53864 + (1));var tmp53910 = inst_53862;var tmp53911 = inst_53861;var tmp53912 = inst_53863;var inst_53861__$1 = tmp53911;var inst_53862__$1 = tmp53910;var inst_53863__$1 = tmp53912;var inst_53864__$1 = inst_53872;var state_53904__$1 = (function (){var statearr_53917 = state_53904;(statearr_53917[(8)] = inst_53862__$1);
(statearr_53917[(9)] = inst_53861__$1);
(statearr_53917[(14)] = inst_53871);
(statearr_53917[(11)] = inst_53863__$1);
(statearr_53917[(12)] = inst_53864__$1);
return statearr_53917;
})();var statearr_53918_53949 = state_53904__$1;(statearr_53918_53949[(2)] = null);
(statearr_53918_53949[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (6)))
{var inst_53850 = (state_53904[(13)]);var inst_53855 = f.call(null,inst_53850);var inst_53860 = cljs.core.seq.call(null,inst_53855);var inst_53861 = inst_53860;var inst_53862 = null;var inst_53863 = (0);var inst_53864 = (0);var state_53904__$1 = (function (){var statearr_53919 = state_53904;(statearr_53919[(8)] = inst_53862);
(statearr_53919[(9)] = inst_53861);
(statearr_53919[(11)] = inst_53863);
(statearr_53919[(12)] = inst_53864);
return statearr_53919;
})();var statearr_53920_53950 = state_53904__$1;(statearr_53920_53950[(2)] = null);
(statearr_53920_53950[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (17)))
{var inst_53875 = (state_53904[(7)]);var inst_53879 = cljs.core.chunk_first.call(null,inst_53875);var inst_53880 = cljs.core.chunk_rest.call(null,inst_53875);var inst_53881 = cljs.core.count.call(null,inst_53879);var inst_53861 = inst_53880;var inst_53862 = inst_53879;var inst_53863 = inst_53881;var inst_53864 = (0);var state_53904__$1 = (function (){var statearr_53921 = state_53904;(statearr_53921[(8)] = inst_53862);
(statearr_53921[(9)] = inst_53861);
(statearr_53921[(11)] = inst_53863);
(statearr_53921[(12)] = inst_53864);
return statearr_53921;
})();var statearr_53922_53951 = state_53904__$1;(statearr_53922_53951[(2)] = null);
(statearr_53922_53951[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (3)))
{var inst_53902 = (state_53904[(2)]);var state_53904__$1 = state_53904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53904__$1,inst_53902);
} else
{if((state_val_53905 === (12)))
{var inst_53895 = (state_53904[(2)]);var state_53904__$1 = state_53904;var statearr_53923_53952 = state_53904__$1;(statearr_53923_53952[(2)] = inst_53895);
(statearr_53923_53952[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (2)))
{var state_53904__$1 = state_53904;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53904__$1,(4),in$);
} else
{if((state_val_53905 === (19)))
{var inst_53890 = (state_53904[(2)]);var state_53904__$1 = state_53904;var statearr_53924_53953 = state_53904__$1;(statearr_53924_53953[(2)] = inst_53890);
(statearr_53924_53953[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (11)))
{var inst_53875 = (state_53904[(7)]);var inst_53861 = (state_53904[(9)]);var inst_53875__$1 = cljs.core.seq.call(null,inst_53861);var state_53904__$1 = (function (){var statearr_53925 = state_53904;(statearr_53925[(7)] = inst_53875__$1);
return statearr_53925;
})();if(inst_53875__$1)
{var statearr_53926_53954 = state_53904__$1;(statearr_53926_53954[(1)] = (14));
} else
{var statearr_53927_53955 = state_53904__$1;(statearr_53927_53955[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (9)))
{var inst_53897 = (state_53904[(2)]);var state_53904__$1 = (function (){var statearr_53928 = state_53904;(statearr_53928[(15)] = inst_53897);
return statearr_53928;
})();var statearr_53929_53956 = state_53904__$1;(statearr_53929_53956[(2)] = null);
(statearr_53929_53956[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (5)))
{var inst_53853 = cljs.core.async.close_BANG_.call(null,out);var state_53904__$1 = state_53904;var statearr_53930_53957 = state_53904__$1;(statearr_53930_53957[(2)] = inst_53853);
(statearr_53930_53957[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (14)))
{var inst_53875 = (state_53904[(7)]);var inst_53877 = cljs.core.chunked_seq_QMARK_.call(null,inst_53875);var state_53904__$1 = state_53904;if(inst_53877)
{var statearr_53931_53958 = state_53904__$1;(statearr_53931_53958[(1)] = (17));
} else
{var statearr_53932_53959 = state_53904__$1;(statearr_53932_53959[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (16)))
{var inst_53893 = (state_53904[(2)]);var state_53904__$1 = state_53904;var statearr_53933_53960 = state_53904__$1;(statearr_53933_53960[(2)] = inst_53893);
(statearr_53933_53960[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53905 === (10)))
{var inst_53862 = (state_53904[(8)]);var inst_53864 = (state_53904[(12)]);var inst_53869 = cljs.core._nth.call(null,inst_53862,inst_53864);var state_53904__$1 = state_53904;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53904__$1,(13),out,inst_53869);
} else
{if((state_val_53905 === (18)))
{var inst_53875 = (state_53904[(7)]);var inst_53884 = cljs.core.first.call(null,inst_53875);var state_53904__$1 = state_53904;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53904__$1,(20),out,inst_53884);
} else
{if((state_val_53905 === (8)))
{var inst_53863 = (state_53904[(11)]);var inst_53864 = (state_53904[(12)]);var inst_53866 = (inst_53864 < inst_53863);var inst_53867 = inst_53866;var state_53904__$1 = state_53904;if(cljs.core.truth_(inst_53867))
{var statearr_53934_53961 = state_53904__$1;(statearr_53934_53961[(1)] = (10));
} else
{var statearr_53935_53962 = state_53904__$1;(statearr_53935_53962[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53939[(0)] = state_machine__5679__auto__);
(statearr_53939[(1)] = (1));
return statearr_53939;
});
var state_machine__5679__auto____1 = (function (state_53904){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53904);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53940){if((e53940 instanceof Object))
{var ex__5682__auto__ = e53940;var statearr_53941_53963 = state_53904;(statearr_53941_53963[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53904);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53964 = state_53904;
state_53904 = G__53964;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53904){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_53942 = f__5694__auto__.call(null);(statearr_53942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_53942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___54045 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54045){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54045){
return (function (state_54024){var state_val_54025 = (state_54024[(1)]);if((state_val_54025 === (7)))
{var inst_54020 = (state_54024[(2)]);var state_54024__$1 = state_54024;var statearr_54026_54046 = state_54024__$1;(statearr_54026_54046[(2)] = inst_54020);
(statearr_54026_54046[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54025 === (1)))
{var state_54024__$1 = state_54024;var statearr_54027_54047 = state_54024__$1;(statearr_54027_54047[(2)] = null);
(statearr_54027_54047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54025 === (4)))
{var inst_54007 = (state_54024[(7)]);var inst_54007__$1 = (state_54024[(2)]);var inst_54008 = (inst_54007__$1 == null);var state_54024__$1 = (function (){var statearr_54028 = state_54024;(statearr_54028[(7)] = inst_54007__$1);
return statearr_54028;
})();if(cljs.core.truth_(inst_54008))
{var statearr_54029_54048 = state_54024__$1;(statearr_54029_54048[(1)] = (5));
} else
{var statearr_54030_54049 = state_54024__$1;(statearr_54030_54049[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54025 === (6)))
{var inst_54007 = (state_54024[(7)]);var state_54024__$1 = state_54024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54024__$1,(11),to,inst_54007);
} else
{if((state_val_54025 === (3)))
{var inst_54022 = (state_54024[(2)]);var state_54024__$1 = state_54024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54024__$1,inst_54022);
} else
{if((state_val_54025 === (2)))
{var state_54024__$1 = state_54024;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54024__$1,(4),from);
} else
{if((state_val_54025 === (11)))
{var inst_54017 = (state_54024[(2)]);var state_54024__$1 = (function (){var statearr_54031 = state_54024;(statearr_54031[(8)] = inst_54017);
return statearr_54031;
})();var statearr_54032_54050 = state_54024__$1;(statearr_54032_54050[(2)] = null);
(statearr_54032_54050[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54025 === (9)))
{var state_54024__$1 = state_54024;var statearr_54033_54051 = state_54024__$1;(statearr_54033_54051[(2)] = null);
(statearr_54033_54051[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54025 === (5)))
{var state_54024__$1 = state_54024;if(cljs.core.truth_(close_QMARK_))
{var statearr_54034_54052 = state_54024__$1;(statearr_54034_54052[(1)] = (8));
} else
{var statearr_54035_54053 = state_54024__$1;(statearr_54035_54053[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54025 === (10)))
{var inst_54014 = (state_54024[(2)]);var state_54024__$1 = state_54024;var statearr_54036_54054 = state_54024__$1;(statearr_54036_54054[(2)] = inst_54014);
(statearr_54036_54054[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54025 === (8)))
{var inst_54011 = cljs.core.async.close_BANG_.call(null,to);var state_54024__$1 = state_54024;var statearr_54037_54055 = state_54024__$1;(statearr_54037_54055[(2)] = inst_54011);
(statearr_54037_54055[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___54045))
;return ((function (switch__5678__auto__,c__5693__auto___54045){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54041 = [null,null,null,null,null,null,null,null,null];(statearr_54041[(0)] = state_machine__5679__auto__);
(statearr_54041[(1)] = (1));
return statearr_54041;
});
var state_machine__5679__auto____1 = (function (state_54024){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54024);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54042){if((e54042 instanceof Object))
{var ex__5682__auto__ = e54042;var statearr_54043_54056 = state_54024;(statearr_54043_54056[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54024);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54057 = state_54024;
state_54024 = G__54057;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54024){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54045))
})();var state__5695__auto__ = (function (){var statearr_54044 = f__5694__auto__.call(null);(statearr_54044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54045);
return statearr_54044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54045))
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___54144 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54144,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54144,tc,fc){
return (function (state_54122){var state_val_54123 = (state_54122[(1)]);if((state_val_54123 === (7)))
{var inst_54118 = (state_54122[(2)]);var state_54122__$1 = state_54122;var statearr_54124_54145 = state_54122__$1;(statearr_54124_54145[(2)] = inst_54118);
(statearr_54124_54145[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54123 === (1)))
{var state_54122__$1 = state_54122;var statearr_54125_54146 = state_54122__$1;(statearr_54125_54146[(2)] = null);
(statearr_54125_54146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54123 === (4)))
{var inst_54103 = (state_54122[(7)]);var inst_54103__$1 = (state_54122[(2)]);var inst_54104 = (inst_54103__$1 == null);var state_54122__$1 = (function (){var statearr_54126 = state_54122;(statearr_54126[(7)] = inst_54103__$1);
return statearr_54126;
})();if(cljs.core.truth_(inst_54104))
{var statearr_54127_54147 = state_54122__$1;(statearr_54127_54147[(1)] = (5));
} else
{var statearr_54128_54148 = state_54122__$1;(statearr_54128_54148[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54123 === (6)))
{var inst_54103 = (state_54122[(7)]);var inst_54109 = p.call(null,inst_54103);var state_54122__$1 = state_54122;if(cljs.core.truth_(inst_54109))
{var statearr_54129_54149 = state_54122__$1;(statearr_54129_54149[(1)] = (9));
} else
{var statearr_54130_54150 = state_54122__$1;(statearr_54130_54150[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54123 === (3)))
{var inst_54120 = (state_54122[(2)]);var state_54122__$1 = state_54122;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54122__$1,inst_54120);
} else
{if((state_val_54123 === (2)))
{var state_54122__$1 = state_54122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54122__$1,(4),ch);
} else
{if((state_val_54123 === (11)))
{var inst_54103 = (state_54122[(7)]);var inst_54113 = (state_54122[(2)]);var state_54122__$1 = state_54122;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54122__$1,(8),inst_54113,inst_54103);
} else
{if((state_val_54123 === (9)))
{var state_54122__$1 = state_54122;var statearr_54131_54151 = state_54122__$1;(statearr_54131_54151[(2)] = tc);
(statearr_54131_54151[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54123 === (5)))
{var inst_54106 = cljs.core.async.close_BANG_.call(null,tc);var inst_54107 = cljs.core.async.close_BANG_.call(null,fc);var state_54122__$1 = (function (){var statearr_54132 = state_54122;(statearr_54132[(8)] = inst_54106);
return statearr_54132;
})();var statearr_54133_54152 = state_54122__$1;(statearr_54133_54152[(2)] = inst_54107);
(statearr_54133_54152[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54123 === (10)))
{var state_54122__$1 = state_54122;var statearr_54134_54153 = state_54122__$1;(statearr_54134_54153[(2)] = fc);
(statearr_54134_54153[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54123 === (8)))
{var inst_54115 = (state_54122[(2)]);var state_54122__$1 = (function (){var statearr_54135 = state_54122;(statearr_54135[(9)] = inst_54115);
return statearr_54135;
})();var statearr_54136_54154 = state_54122__$1;(statearr_54136_54154[(2)] = null);
(statearr_54136_54154[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___54144,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___54144,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54140 = [null,null,null,null,null,null,null,null,null,null];(statearr_54140[(0)] = state_machine__5679__auto__);
(statearr_54140[(1)] = (1));
return statearr_54140;
});
var state_machine__5679__auto____1 = (function (state_54122){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54122);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54141){if((e54141 instanceof Object))
{var ex__5682__auto__ = e54141;var statearr_54142_54155 = state_54122;(statearr_54142_54155[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54122);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54156 = state_54122;
state_54122 = G__54156;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54122){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54144,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_54143 = f__5694__auto__.call(null);(statearr_54143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54144);
return statearr_54143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54144,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_54203){var state_val_54204 = (state_54203[(1)]);if((state_val_54204 === (7)))
{var inst_54199 = (state_54203[(2)]);var state_54203__$1 = state_54203;var statearr_54205_54221 = state_54203__$1;(statearr_54205_54221[(2)] = inst_54199);
(statearr_54205_54221[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54204 === (6)))
{var inst_54192 = (state_54203[(7)]);var inst_54189 = (state_54203[(8)]);var inst_54196 = f.call(null,inst_54189,inst_54192);var inst_54189__$1 = inst_54196;var state_54203__$1 = (function (){var statearr_54206 = state_54203;(statearr_54206[(8)] = inst_54189__$1);
return statearr_54206;
})();var statearr_54207_54222 = state_54203__$1;(statearr_54207_54222[(2)] = null);
(statearr_54207_54222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54204 === (5)))
{var inst_54189 = (state_54203[(8)]);var state_54203__$1 = state_54203;var statearr_54208_54223 = state_54203__$1;(statearr_54208_54223[(2)] = inst_54189);
(statearr_54208_54223[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54204 === (4)))
{var inst_54192 = (state_54203[(7)]);var inst_54192__$1 = (state_54203[(2)]);var inst_54193 = (inst_54192__$1 == null);var state_54203__$1 = (function (){var statearr_54209 = state_54203;(statearr_54209[(7)] = inst_54192__$1);
return statearr_54209;
})();if(cljs.core.truth_(inst_54193))
{var statearr_54210_54224 = state_54203__$1;(statearr_54210_54224[(1)] = (5));
} else
{var statearr_54211_54225 = state_54203__$1;(statearr_54211_54225[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54204 === (3)))
{var inst_54201 = (state_54203[(2)]);var state_54203__$1 = state_54203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54203__$1,inst_54201);
} else
{if((state_val_54204 === (2)))
{var state_54203__$1 = state_54203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54203__$1,(4),ch);
} else
{if((state_val_54204 === (1)))
{var inst_54189 = init;var state_54203__$1 = (function (){var statearr_54212 = state_54203;(statearr_54212[(8)] = inst_54189);
return statearr_54212;
})();var statearr_54213_54226 = state_54203__$1;(statearr_54213_54226[(2)] = null);
(statearr_54213_54226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54217 = [null,null,null,null,null,null,null,null,null];(statearr_54217[(0)] = state_machine__5679__auto__);
(statearr_54217[(1)] = (1));
return statearr_54217;
});
var state_machine__5679__auto____1 = (function (state_54203){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54203);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54218){if((e54218 instanceof Object))
{var ex__5682__auto__ = e54218;var statearr_54219_54227 = state_54203;(statearr_54219_54227[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54203);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54228 = state_54203;
state_54203 = G__54228;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54203){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_54220 = f__5694__auto__.call(null);(statearr_54220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_54220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_54290){var state_val_54291 = (state_54290[(1)]);if((state_val_54291 === (7)))
{var inst_54271 = (state_54290[(7)]);var inst_54276 = (state_54290[(2)]);var inst_54277 = cljs.core.next.call(null,inst_54271);var inst_54271__$1 = inst_54277;var state_54290__$1 = (function (){var statearr_54292 = state_54290;(statearr_54292[(7)] = inst_54271__$1);
(statearr_54292[(8)] = inst_54276);
return statearr_54292;
})();var statearr_54293_54311 = state_54290__$1;(statearr_54293_54311[(2)] = null);
(statearr_54293_54311[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54291 === (1)))
{var inst_54270 = cljs.core.seq.call(null,coll);var inst_54271 = inst_54270;var state_54290__$1 = (function (){var statearr_54294 = state_54290;(statearr_54294[(7)] = inst_54271);
return statearr_54294;
})();var statearr_54295_54312 = state_54290__$1;(statearr_54295_54312[(2)] = null);
(statearr_54295_54312[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54291 === (4)))
{var inst_54271 = (state_54290[(7)]);var inst_54274 = cljs.core.first.call(null,inst_54271);var state_54290__$1 = state_54290;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54290__$1,(7),ch,inst_54274);
} else
{if((state_val_54291 === (6)))
{var inst_54286 = (state_54290[(2)]);var state_54290__$1 = state_54290;var statearr_54296_54313 = state_54290__$1;(statearr_54296_54313[(2)] = inst_54286);
(statearr_54296_54313[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54291 === (3)))
{var inst_54288 = (state_54290[(2)]);var state_54290__$1 = state_54290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54290__$1,inst_54288);
} else
{if((state_val_54291 === (2)))
{var inst_54271 = (state_54290[(7)]);var state_54290__$1 = state_54290;if(cljs.core.truth_(inst_54271))
{var statearr_54297_54314 = state_54290__$1;(statearr_54297_54314[(1)] = (4));
} else
{var statearr_54298_54315 = state_54290__$1;(statearr_54298_54315[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54291 === (9)))
{var state_54290__$1 = state_54290;var statearr_54299_54316 = state_54290__$1;(statearr_54299_54316[(2)] = null);
(statearr_54299_54316[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54291 === (5)))
{var state_54290__$1 = state_54290;if(cljs.core.truth_(close_QMARK_))
{var statearr_54300_54317 = state_54290__$1;(statearr_54300_54317[(1)] = (8));
} else
{var statearr_54301_54318 = state_54290__$1;(statearr_54301_54318[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54291 === (10)))
{var inst_54284 = (state_54290[(2)]);var state_54290__$1 = state_54290;var statearr_54302_54319 = state_54290__$1;(statearr_54302_54319[(2)] = inst_54284);
(statearr_54302_54319[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54291 === (8)))
{var inst_54281 = cljs.core.async.close_BANG_.call(null,ch);var state_54290__$1 = state_54290;var statearr_54303_54320 = state_54290__$1;(statearr_54303_54320[(2)] = inst_54281);
(statearr_54303_54320[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54307 = [null,null,null,null,null,null,null,null,null];(statearr_54307[(0)] = state_machine__5679__auto__);
(statearr_54307[(1)] = (1));
return statearr_54307;
});
var state_machine__5679__auto____1 = (function (state_54290){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54290);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54308){if((e54308 instanceof Object))
{var ex__5682__auto__ = e54308;var statearr_54309_54321 = state_54290;(statearr_54309_54321[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54290);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54322 = state_54290;
state_54290 = G__54322;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54290){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_54310 = f__5694__auto__.call(null);(statearr_54310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_54310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj54324 = {};return obj54324;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj54326 = {};return obj54326;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t54550 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54550 = (function (cs,ch,mult,meta54551){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta54551 = meta54551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54550.cljs$lang$type = true;
cljs.core.async.t54550.cljs$lang$ctorStr = "cljs.core.async/t54550";
cljs.core.async.t54550.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t54550");
});})(cs))
;
cljs.core.async.t54550.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t54550.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t54550.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t54550.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t54550.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54550.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t54550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_54552){var self__ = this;
var _54552__$1 = this;return self__.meta54551;
});})(cs))
;
cljs.core.async.t54550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_54552,meta54551__$1){var self__ = this;
var _54552__$1 = this;return (new cljs.core.async.t54550(self__.cs,self__.ch,self__.mult,meta54551__$1));
});})(cs))
;
cljs.core.async.__GT_t54550 = ((function (cs){
return (function __GT_t54550(cs__$1,ch__$1,mult__$1,meta54551){return (new cljs.core.async.t54550(cs__$1,ch__$1,mult__$1,meta54551));
});})(cs))
;
}
return (new cljs.core.async.t54550(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___54773 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54773,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54773,cs,m,dchan,dctr,done){
return (function (state_54687){var state_val_54688 = (state_54687[(1)]);if((state_val_54688 === (7)))
{var inst_54683 = (state_54687[(2)]);var state_54687__$1 = state_54687;var statearr_54689_54774 = state_54687__$1;(statearr_54689_54774[(2)] = inst_54683);
(statearr_54689_54774[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (20)))
{var inst_54584 = (state_54687[(7)]);var inst_54594 = cljs.core.first.call(null,inst_54584);var inst_54595 = cljs.core.nth.call(null,inst_54594,(0),null);var inst_54596 = cljs.core.nth.call(null,inst_54594,(1),null);var state_54687__$1 = (function (){var statearr_54690 = state_54687;(statearr_54690[(8)] = inst_54595);
return statearr_54690;
})();if(cljs.core.truth_(inst_54596))
{var statearr_54691_54775 = state_54687__$1;(statearr_54691_54775[(1)] = (22));
} else
{var statearr_54692_54776 = state_54687__$1;(statearr_54692_54776[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (27)))
{var inst_54624 = (state_54687[(9)]);var inst_54626 = (state_54687[(10)]);var inst_54631 = cljs.core._nth.call(null,inst_54624,inst_54626);var state_54687__$1 = (function (){var statearr_54693 = state_54687;(statearr_54693[(11)] = inst_54631);
return statearr_54693;
})();var statearr_54694_54777 = state_54687__$1;(statearr_54694_54777[(2)] = null);
(statearr_54694_54777[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (1)))
{var state_54687__$1 = state_54687;var statearr_54695_54778 = state_54687__$1;(statearr_54695_54778[(2)] = null);
(statearr_54695_54778[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (24)))
{var inst_54584 = (state_54687[(7)]);var inst_54601 = (state_54687[(2)]);var inst_54602 = cljs.core.next.call(null,inst_54584);var inst_54564 = inst_54602;var inst_54565 = null;var inst_54566 = (0);var inst_54567 = (0);var state_54687__$1 = (function (){var statearr_54696 = state_54687;(statearr_54696[(12)] = inst_54601);
(statearr_54696[(13)] = inst_54565);
(statearr_54696[(14)] = inst_54567);
(statearr_54696[(15)] = inst_54566);
(statearr_54696[(16)] = inst_54564);
return statearr_54696;
})();var statearr_54697_54779 = state_54687__$1;(statearr_54697_54779[(2)] = null);
(statearr_54697_54779[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (39)))
{var inst_54644 = (state_54687[(17)]);var inst_54662 = (state_54687[(2)]);var inst_54663 = cljs.core.next.call(null,inst_54644);var inst_54623 = inst_54663;var inst_54624 = null;var inst_54625 = (0);var inst_54626 = (0);var state_54687__$1 = (function (){var statearr_54701 = state_54687;(statearr_54701[(18)] = inst_54662);
(statearr_54701[(9)] = inst_54624);
(statearr_54701[(10)] = inst_54626);
(statearr_54701[(19)] = inst_54625);
(statearr_54701[(20)] = inst_54623);
return statearr_54701;
})();var statearr_54702_54780 = state_54687__$1;(statearr_54702_54780[(2)] = null);
(statearr_54702_54780[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (4)))
{var inst_54555 = (state_54687[(21)]);var inst_54555__$1 = (state_54687[(2)]);var inst_54556 = (inst_54555__$1 == null);var state_54687__$1 = (function (){var statearr_54703 = state_54687;(statearr_54703[(21)] = inst_54555__$1);
return statearr_54703;
})();if(cljs.core.truth_(inst_54556))
{var statearr_54704_54781 = state_54687__$1;(statearr_54704_54781[(1)] = (5));
} else
{var statearr_54705_54782 = state_54687__$1;(statearr_54705_54782[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (15)))
{var inst_54565 = (state_54687[(13)]);var inst_54567 = (state_54687[(14)]);var inst_54566 = (state_54687[(15)]);var inst_54564 = (state_54687[(16)]);var inst_54580 = (state_54687[(2)]);var inst_54581 = (inst_54567 + (1));var tmp54698 = inst_54565;var tmp54699 = inst_54566;var tmp54700 = inst_54564;var inst_54564__$1 = tmp54700;var inst_54565__$1 = tmp54698;var inst_54566__$1 = tmp54699;var inst_54567__$1 = inst_54581;var state_54687__$1 = (function (){var statearr_54706 = state_54687;(statearr_54706[(22)] = inst_54580);
(statearr_54706[(13)] = inst_54565__$1);
(statearr_54706[(14)] = inst_54567__$1);
(statearr_54706[(15)] = inst_54566__$1);
(statearr_54706[(16)] = inst_54564__$1);
return statearr_54706;
})();var statearr_54707_54783 = state_54687__$1;(statearr_54707_54783[(2)] = null);
(statearr_54707_54783[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (21)))
{var inst_54605 = (state_54687[(2)]);var state_54687__$1 = state_54687;var statearr_54708_54784 = state_54687__$1;(statearr_54708_54784[(2)] = inst_54605);
(statearr_54708_54784[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (31)))
{var inst_54631 = (state_54687[(11)]);var inst_54632 = (state_54687[(2)]);var inst_54633 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_54634 = cljs.core.async.untap_STAR_.call(null,m,inst_54631);var state_54687__$1 = (function (){var statearr_54709 = state_54687;(statearr_54709[(23)] = inst_54633);
(statearr_54709[(24)] = inst_54632);
return statearr_54709;
})();var statearr_54710_54785 = state_54687__$1;(statearr_54710_54785[(2)] = inst_54634);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54687__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (32)))
{var inst_54631 = (state_54687[(11)]);var inst_54555 = (state_54687[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54687,(31),Object,null,(30));var inst_54638 = cljs.core.async.put_BANG_.call(null,inst_54631,inst_54555,done);var state_54687__$1 = state_54687;var statearr_54711_54786 = state_54687__$1;(statearr_54711_54786[(2)] = inst_54638);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54687__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (40)))
{var inst_54653 = (state_54687[(25)]);var inst_54654 = (state_54687[(2)]);var inst_54655 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_54656 = cljs.core.async.untap_STAR_.call(null,m,inst_54653);var state_54687__$1 = (function (){var statearr_54712 = state_54687;(statearr_54712[(26)] = inst_54654);
(statearr_54712[(27)] = inst_54655);
return statearr_54712;
})();var statearr_54713_54787 = state_54687__$1;(statearr_54713_54787[(2)] = inst_54656);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54687__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (33)))
{var inst_54644 = (state_54687[(17)]);var inst_54646 = cljs.core.chunked_seq_QMARK_.call(null,inst_54644);var state_54687__$1 = state_54687;if(inst_54646)
{var statearr_54714_54788 = state_54687__$1;(statearr_54714_54788[(1)] = (36));
} else
{var statearr_54715_54789 = state_54687__$1;(statearr_54715_54789[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (13)))
{var inst_54574 = (state_54687[(28)]);var inst_54577 = cljs.core.async.close_BANG_.call(null,inst_54574);var state_54687__$1 = state_54687;var statearr_54716_54790 = state_54687__$1;(statearr_54716_54790[(2)] = inst_54577);
(statearr_54716_54790[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (22)))
{var inst_54595 = (state_54687[(8)]);var inst_54598 = cljs.core.async.close_BANG_.call(null,inst_54595);var state_54687__$1 = state_54687;var statearr_54717_54791 = state_54687__$1;(statearr_54717_54791[(2)] = inst_54598);
(statearr_54717_54791[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (36)))
{var inst_54644 = (state_54687[(17)]);var inst_54648 = cljs.core.chunk_first.call(null,inst_54644);var inst_54649 = cljs.core.chunk_rest.call(null,inst_54644);var inst_54650 = cljs.core.count.call(null,inst_54648);var inst_54623 = inst_54649;var inst_54624 = inst_54648;var inst_54625 = inst_54650;var inst_54626 = (0);var state_54687__$1 = (function (){var statearr_54718 = state_54687;(statearr_54718[(9)] = inst_54624);
(statearr_54718[(10)] = inst_54626);
(statearr_54718[(19)] = inst_54625);
(statearr_54718[(20)] = inst_54623);
return statearr_54718;
})();var statearr_54719_54792 = state_54687__$1;(statearr_54719_54792[(2)] = null);
(statearr_54719_54792[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (41)))
{var inst_54555 = (state_54687[(21)]);var inst_54653 = (state_54687[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54687,(40),Object,null,(39));var inst_54660 = cljs.core.async.put_BANG_.call(null,inst_54653,inst_54555,done);var state_54687__$1 = state_54687;var statearr_54720_54793 = state_54687__$1;(statearr_54720_54793[(2)] = inst_54660);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54687__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (43)))
{var state_54687__$1 = state_54687;var statearr_54721_54794 = state_54687__$1;(statearr_54721_54794[(2)] = null);
(statearr_54721_54794[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (29)))
{var inst_54671 = (state_54687[(2)]);var state_54687__$1 = state_54687;var statearr_54722_54795 = state_54687__$1;(statearr_54722_54795[(2)] = inst_54671);
(statearr_54722_54795[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (44)))
{var inst_54680 = (state_54687[(2)]);var state_54687__$1 = (function (){var statearr_54723 = state_54687;(statearr_54723[(29)] = inst_54680);
return statearr_54723;
})();var statearr_54724_54796 = state_54687__$1;(statearr_54724_54796[(2)] = null);
(statearr_54724_54796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (6)))
{var inst_54615 = (state_54687[(30)]);var inst_54614 = cljs.core.deref.call(null,cs);var inst_54615__$1 = cljs.core.keys.call(null,inst_54614);var inst_54616 = cljs.core.count.call(null,inst_54615__$1);var inst_54617 = cljs.core.reset_BANG_.call(null,dctr,inst_54616);var inst_54622 = cljs.core.seq.call(null,inst_54615__$1);var inst_54623 = inst_54622;var inst_54624 = null;var inst_54625 = (0);var inst_54626 = (0);var state_54687__$1 = (function (){var statearr_54725 = state_54687;(statearr_54725[(9)] = inst_54624);
(statearr_54725[(30)] = inst_54615__$1);
(statearr_54725[(10)] = inst_54626);
(statearr_54725[(19)] = inst_54625);
(statearr_54725[(20)] = inst_54623);
(statearr_54725[(31)] = inst_54617);
return statearr_54725;
})();var statearr_54726_54797 = state_54687__$1;(statearr_54726_54797[(2)] = null);
(statearr_54726_54797[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (28)))
{var inst_54644 = (state_54687[(17)]);var inst_54623 = (state_54687[(20)]);var inst_54644__$1 = cljs.core.seq.call(null,inst_54623);var state_54687__$1 = (function (){var statearr_54727 = state_54687;(statearr_54727[(17)] = inst_54644__$1);
return statearr_54727;
})();if(inst_54644__$1)
{var statearr_54728_54798 = state_54687__$1;(statearr_54728_54798[(1)] = (33));
} else
{var statearr_54729_54799 = state_54687__$1;(statearr_54729_54799[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (25)))
{var inst_54626 = (state_54687[(10)]);var inst_54625 = (state_54687[(19)]);var inst_54628 = (inst_54626 < inst_54625);var inst_54629 = inst_54628;var state_54687__$1 = state_54687;if(cljs.core.truth_(inst_54629))
{var statearr_54730_54800 = state_54687__$1;(statearr_54730_54800[(1)] = (27));
} else
{var statearr_54731_54801 = state_54687__$1;(statearr_54731_54801[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (34)))
{var state_54687__$1 = state_54687;var statearr_54732_54802 = state_54687__$1;(statearr_54732_54802[(2)] = null);
(statearr_54732_54802[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (17)))
{var state_54687__$1 = state_54687;var statearr_54733_54803 = state_54687__$1;(statearr_54733_54803[(2)] = null);
(statearr_54733_54803[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (3)))
{var inst_54685 = (state_54687[(2)]);var state_54687__$1 = state_54687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54687__$1,inst_54685);
} else
{if((state_val_54688 === (12)))
{var inst_54610 = (state_54687[(2)]);var state_54687__$1 = state_54687;var statearr_54734_54804 = state_54687__$1;(statearr_54734_54804[(2)] = inst_54610);
(statearr_54734_54804[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (2)))
{var state_54687__$1 = state_54687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54687__$1,(4),ch);
} else
{if((state_val_54688 === (23)))
{var state_54687__$1 = state_54687;var statearr_54735_54805 = state_54687__$1;(statearr_54735_54805[(2)] = null);
(statearr_54735_54805[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (35)))
{var inst_54669 = (state_54687[(2)]);var state_54687__$1 = state_54687;var statearr_54736_54806 = state_54687__$1;(statearr_54736_54806[(2)] = inst_54669);
(statearr_54736_54806[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (19)))
{var inst_54584 = (state_54687[(7)]);var inst_54588 = cljs.core.chunk_first.call(null,inst_54584);var inst_54589 = cljs.core.chunk_rest.call(null,inst_54584);var inst_54590 = cljs.core.count.call(null,inst_54588);var inst_54564 = inst_54589;var inst_54565 = inst_54588;var inst_54566 = inst_54590;var inst_54567 = (0);var state_54687__$1 = (function (){var statearr_54737 = state_54687;(statearr_54737[(13)] = inst_54565);
(statearr_54737[(14)] = inst_54567);
(statearr_54737[(15)] = inst_54566);
(statearr_54737[(16)] = inst_54564);
return statearr_54737;
})();var statearr_54738_54807 = state_54687__$1;(statearr_54738_54807[(2)] = null);
(statearr_54738_54807[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (11)))
{var inst_54584 = (state_54687[(7)]);var inst_54564 = (state_54687[(16)]);var inst_54584__$1 = cljs.core.seq.call(null,inst_54564);var state_54687__$1 = (function (){var statearr_54739 = state_54687;(statearr_54739[(7)] = inst_54584__$1);
return statearr_54739;
})();if(inst_54584__$1)
{var statearr_54740_54808 = state_54687__$1;(statearr_54740_54808[(1)] = (16));
} else
{var statearr_54741_54809 = state_54687__$1;(statearr_54741_54809[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (9)))
{var inst_54612 = (state_54687[(2)]);var state_54687__$1 = state_54687;var statearr_54742_54810 = state_54687__$1;(statearr_54742_54810[(2)] = inst_54612);
(statearr_54742_54810[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (5)))
{var inst_54562 = cljs.core.deref.call(null,cs);var inst_54563 = cljs.core.seq.call(null,inst_54562);var inst_54564 = inst_54563;var inst_54565 = null;var inst_54566 = (0);var inst_54567 = (0);var state_54687__$1 = (function (){var statearr_54743 = state_54687;(statearr_54743[(13)] = inst_54565);
(statearr_54743[(14)] = inst_54567);
(statearr_54743[(15)] = inst_54566);
(statearr_54743[(16)] = inst_54564);
return statearr_54743;
})();var statearr_54744_54811 = state_54687__$1;(statearr_54744_54811[(2)] = null);
(statearr_54744_54811[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (14)))
{var state_54687__$1 = state_54687;var statearr_54745_54812 = state_54687__$1;(statearr_54745_54812[(2)] = null);
(statearr_54745_54812[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (45)))
{var inst_54677 = (state_54687[(2)]);var state_54687__$1 = state_54687;var statearr_54746_54813 = state_54687__$1;(statearr_54746_54813[(2)] = inst_54677);
(statearr_54746_54813[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (26)))
{var inst_54615 = (state_54687[(30)]);var inst_54673 = (state_54687[(2)]);var inst_54674 = cljs.core.seq.call(null,inst_54615);var state_54687__$1 = (function (){var statearr_54747 = state_54687;(statearr_54747[(32)] = inst_54673);
return statearr_54747;
})();if(inst_54674)
{var statearr_54748_54814 = state_54687__$1;(statearr_54748_54814[(1)] = (42));
} else
{var statearr_54749_54815 = state_54687__$1;(statearr_54749_54815[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (16)))
{var inst_54584 = (state_54687[(7)]);var inst_54586 = cljs.core.chunked_seq_QMARK_.call(null,inst_54584);var state_54687__$1 = state_54687;if(inst_54586)
{var statearr_54753_54816 = state_54687__$1;(statearr_54753_54816[(1)] = (19));
} else
{var statearr_54754_54817 = state_54687__$1;(statearr_54754_54817[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (38)))
{var inst_54666 = (state_54687[(2)]);var state_54687__$1 = state_54687;var statearr_54755_54818 = state_54687__$1;(statearr_54755_54818[(2)] = inst_54666);
(statearr_54755_54818[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (30)))
{var inst_54624 = (state_54687[(9)]);var inst_54626 = (state_54687[(10)]);var inst_54625 = (state_54687[(19)]);var inst_54623 = (state_54687[(20)]);var inst_54640 = (state_54687[(2)]);var inst_54641 = (inst_54626 + (1));var tmp54750 = inst_54624;var tmp54751 = inst_54625;var tmp54752 = inst_54623;var inst_54623__$1 = tmp54752;var inst_54624__$1 = tmp54750;var inst_54625__$1 = tmp54751;var inst_54626__$1 = inst_54641;var state_54687__$1 = (function (){var statearr_54756 = state_54687;(statearr_54756[(9)] = inst_54624__$1);
(statearr_54756[(10)] = inst_54626__$1);
(statearr_54756[(19)] = inst_54625__$1);
(statearr_54756[(20)] = inst_54623__$1);
(statearr_54756[(33)] = inst_54640);
return statearr_54756;
})();var statearr_54757_54819 = state_54687__$1;(statearr_54757_54819[(2)] = null);
(statearr_54757_54819[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (10)))
{var inst_54565 = (state_54687[(13)]);var inst_54567 = (state_54687[(14)]);var inst_54573 = cljs.core._nth.call(null,inst_54565,inst_54567);var inst_54574 = cljs.core.nth.call(null,inst_54573,(0),null);var inst_54575 = cljs.core.nth.call(null,inst_54573,(1),null);var state_54687__$1 = (function (){var statearr_54758 = state_54687;(statearr_54758[(28)] = inst_54574);
return statearr_54758;
})();if(cljs.core.truth_(inst_54575))
{var statearr_54759_54820 = state_54687__$1;(statearr_54759_54820[(1)] = (13));
} else
{var statearr_54760_54821 = state_54687__$1;(statearr_54760_54821[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (18)))
{var inst_54608 = (state_54687[(2)]);var state_54687__$1 = state_54687;var statearr_54761_54822 = state_54687__$1;(statearr_54761_54822[(2)] = inst_54608);
(statearr_54761_54822[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (42)))
{var state_54687__$1 = state_54687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54687__$1,(45),dchan);
} else
{if((state_val_54688 === (37)))
{var inst_54644 = (state_54687[(17)]);var inst_54653 = cljs.core.first.call(null,inst_54644);var state_54687__$1 = (function (){var statearr_54762 = state_54687;(statearr_54762[(25)] = inst_54653);
return statearr_54762;
})();var statearr_54763_54823 = state_54687__$1;(statearr_54763_54823[(2)] = null);
(statearr_54763_54823[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54688 === (8)))
{var inst_54567 = (state_54687[(14)]);var inst_54566 = (state_54687[(15)]);var inst_54569 = (inst_54567 < inst_54566);var inst_54570 = inst_54569;var state_54687__$1 = state_54687;if(cljs.core.truth_(inst_54570))
{var statearr_54764_54824 = state_54687__$1;(statearr_54764_54824[(1)] = (10));
} else
{var statearr_54765_54825 = state_54687__$1;(statearr_54765_54825[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___54773,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___54773,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54769[(0)] = state_machine__5679__auto__);
(statearr_54769[(1)] = (1));
return statearr_54769;
});
var state_machine__5679__auto____1 = (function (state_54687){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54687);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54770){if((e54770 instanceof Object))
{var ex__5682__auto__ = e54770;var statearr_54771_54826 = state_54687;(statearr_54771_54826[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54827 = state_54687;
state_54687 = G__54827;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54687){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54773,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_54772 = f__5694__auto__.call(null);(statearr_54772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54773);
return statearr_54772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54773,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj54829 = {};return obj54829;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t54939 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54939 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54940){
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
this.meta54940 = meta54940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54939.cljs$lang$type = true;
cljs.core.async.t54939.cljs$lang$ctorStr = "cljs.core.async/t54939";
cljs.core.async.t54939.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t54939");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54939.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t54939.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54939.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54939.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54939.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54939.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54939.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54939.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54941){var self__ = this;
var _54941__$1 = this;return self__.meta54940;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54941,meta54940__$1){var self__ = this;
var _54941__$1 = this;return (new cljs.core.async.t54939(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta54940__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t54939 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t54939(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54940){return (new cljs.core.async.t54939(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54940));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t54939(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___55048 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_55006){var state_val_55007 = (state_55006[(1)]);if((state_val_55007 === (7)))
{var inst_54955 = (state_55006[(7)]);var inst_54960 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54955);var state_55006__$1 = state_55006;var statearr_55008_55049 = state_55006__$1;(statearr_55008_55049[(2)] = inst_54960);
(statearr_55008_55049[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (20)))
{var inst_54970 = (state_55006[(8)]);var state_55006__$1 = state_55006;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55006__$1,(23),out,inst_54970);
} else
{if((state_val_55007 === (1)))
{var inst_54945 = (state_55006[(9)]);var inst_54945__$1 = calc_state.call(null);var inst_54946 = cljs.core.seq_QMARK_.call(null,inst_54945__$1);var state_55006__$1 = (function (){var statearr_55009 = state_55006;(statearr_55009[(9)] = inst_54945__$1);
return statearr_55009;
})();if(inst_54946)
{var statearr_55010_55050 = state_55006__$1;(statearr_55010_55050[(1)] = (2));
} else
{var statearr_55011_55051 = state_55006__$1;(statearr_55011_55051[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (4)))
{var inst_54945 = (state_55006[(9)]);var inst_54951 = (state_55006[(2)]);var inst_54952 = cljs.core.get.call(null,inst_54951,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_54953 = cljs.core.get.call(null,inst_54951,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_54954 = cljs.core.get.call(null,inst_54951,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_54955 = inst_54945;var state_55006__$1 = (function (){var statearr_55012 = state_55006;(statearr_55012[(10)] = inst_54954);
(statearr_55012[(11)] = inst_54953);
(statearr_55012[(7)] = inst_54955);
(statearr_55012[(12)] = inst_54952);
return statearr_55012;
})();var statearr_55013_55052 = state_55006__$1;(statearr_55013_55052[(2)] = null);
(statearr_55013_55052[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (15)))
{var state_55006__$1 = state_55006;var statearr_55014_55053 = state_55006__$1;(statearr_55014_55053[(2)] = null);
(statearr_55014_55053[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (21)))
{var state_55006__$1 = state_55006;var statearr_55015_55054 = state_55006__$1;(statearr_55015_55054[(2)] = null);
(statearr_55015_55054[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (13)))
{var inst_55002 = (state_55006[(2)]);var state_55006__$1 = state_55006;var statearr_55016_55055 = state_55006__$1;(statearr_55016_55055[(2)] = inst_55002);
(statearr_55016_55055[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (22)))
{var inst_54963 = (state_55006[(13)]);var inst_54999 = (state_55006[(2)]);var inst_54955 = inst_54963;var state_55006__$1 = (function (){var statearr_55017 = state_55006;(statearr_55017[(14)] = inst_54999);
(statearr_55017[(7)] = inst_54955);
return statearr_55017;
})();var statearr_55018_55056 = state_55006__$1;(statearr_55018_55056[(2)] = null);
(statearr_55018_55056[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (6)))
{var inst_55004 = (state_55006[(2)]);var state_55006__$1 = state_55006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55006__$1,inst_55004);
} else
{if((state_val_55007 === (17)))
{var inst_54985 = (state_55006[(15)]);var state_55006__$1 = state_55006;var statearr_55019_55057 = state_55006__$1;(statearr_55019_55057[(2)] = inst_54985);
(statearr_55019_55057[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (3)))
{var inst_54945 = (state_55006[(9)]);var state_55006__$1 = state_55006;var statearr_55020_55058 = state_55006__$1;(statearr_55020_55058[(2)] = inst_54945);
(statearr_55020_55058[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (12)))
{var inst_54985 = (state_55006[(15)]);var inst_54966 = (state_55006[(16)]);var inst_54971 = (state_55006[(17)]);var inst_54985__$1 = inst_54966.call(null,inst_54971);var state_55006__$1 = (function (){var statearr_55021 = state_55006;(statearr_55021[(15)] = inst_54985__$1);
return statearr_55021;
})();if(cljs.core.truth_(inst_54985__$1))
{var statearr_55022_55059 = state_55006__$1;(statearr_55022_55059[(1)] = (17));
} else
{var statearr_55023_55060 = state_55006__$1;(statearr_55023_55060[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (2)))
{var inst_54945 = (state_55006[(9)]);var inst_54948 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54945);var state_55006__$1 = state_55006;var statearr_55024_55061 = state_55006__$1;(statearr_55024_55061[(2)] = inst_54948);
(statearr_55024_55061[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (23)))
{var inst_54996 = (state_55006[(2)]);var state_55006__$1 = state_55006;var statearr_55025_55062 = state_55006__$1;(statearr_55025_55062[(2)] = inst_54996);
(statearr_55025_55062[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (19)))
{var inst_54993 = (state_55006[(2)]);var state_55006__$1 = state_55006;if(cljs.core.truth_(inst_54993))
{var statearr_55026_55063 = state_55006__$1;(statearr_55026_55063[(1)] = (20));
} else
{var statearr_55027_55064 = state_55006__$1;(statearr_55027_55064[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (11)))
{var inst_54970 = (state_55006[(8)]);var inst_54976 = (inst_54970 == null);var state_55006__$1 = state_55006;if(cljs.core.truth_(inst_54976))
{var statearr_55028_55065 = state_55006__$1;(statearr_55028_55065[(1)] = (14));
} else
{var statearr_55029_55066 = state_55006__$1;(statearr_55029_55066[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (9)))
{var inst_54963 = (state_55006[(13)]);var inst_54963__$1 = (state_55006[(2)]);var inst_54964 = cljs.core.get.call(null,inst_54963__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_54965 = cljs.core.get.call(null,inst_54963__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_54966 = cljs.core.get.call(null,inst_54963__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_55006__$1 = (function (){var statearr_55030 = state_55006;(statearr_55030[(13)] = inst_54963__$1);
(statearr_55030[(16)] = inst_54966);
(statearr_55030[(18)] = inst_54965);
return statearr_55030;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_55006__$1,(10),inst_54964);
} else
{if((state_val_55007 === (5)))
{var inst_54955 = (state_55006[(7)]);var inst_54958 = cljs.core.seq_QMARK_.call(null,inst_54955);var state_55006__$1 = state_55006;if(inst_54958)
{var statearr_55031_55067 = state_55006__$1;(statearr_55031_55067[(1)] = (7));
} else
{var statearr_55032_55068 = state_55006__$1;(statearr_55032_55068[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (14)))
{var inst_54971 = (state_55006[(17)]);var inst_54978 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_54971);var state_55006__$1 = state_55006;var statearr_55033_55069 = state_55006__$1;(statearr_55033_55069[(2)] = inst_54978);
(statearr_55033_55069[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (16)))
{var inst_54981 = (state_55006[(2)]);var inst_54982 = calc_state.call(null);var inst_54955 = inst_54982;var state_55006__$1 = (function (){var statearr_55034 = state_55006;(statearr_55034[(7)] = inst_54955);
(statearr_55034[(19)] = inst_54981);
return statearr_55034;
})();var statearr_55035_55070 = state_55006__$1;(statearr_55035_55070[(2)] = null);
(statearr_55035_55070[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (10)))
{var inst_54970 = (state_55006[(8)]);var inst_54971 = (state_55006[(17)]);var inst_54969 = (state_55006[(2)]);var inst_54970__$1 = cljs.core.nth.call(null,inst_54969,(0),null);var inst_54971__$1 = cljs.core.nth.call(null,inst_54969,(1),null);var inst_54972 = (inst_54970__$1 == null);var inst_54973 = cljs.core._EQ_.call(null,inst_54971__$1,change);var inst_54974 = (inst_54972) || (inst_54973);var state_55006__$1 = (function (){var statearr_55036 = state_55006;(statearr_55036[(8)] = inst_54970__$1);
(statearr_55036[(17)] = inst_54971__$1);
return statearr_55036;
})();if(cljs.core.truth_(inst_54974))
{var statearr_55037_55071 = state_55006__$1;(statearr_55037_55071[(1)] = (11));
} else
{var statearr_55038_55072 = state_55006__$1;(statearr_55038_55072[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (18)))
{var inst_54966 = (state_55006[(16)]);var inst_54965 = (state_55006[(18)]);var inst_54971 = (state_55006[(17)]);var inst_54988 = cljs.core.empty_QMARK_.call(null,inst_54966);var inst_54989 = inst_54965.call(null,inst_54971);var inst_54990 = cljs.core.not.call(null,inst_54989);var inst_54991 = (inst_54988) && (inst_54990);var state_55006__$1 = state_55006;var statearr_55039_55073 = state_55006__$1;(statearr_55039_55073[(2)] = inst_54991);
(statearr_55039_55073[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55007 === (8)))
{var inst_54955 = (state_55006[(7)]);var state_55006__$1 = state_55006;var statearr_55040_55074 = state_55006__$1;(statearr_55040_55074[(2)] = inst_54955);
(statearr_55040_55074[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___55048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___55048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55044[(0)] = state_machine__5679__auto__);
(statearr_55044[(1)] = (1));
return statearr_55044;
});
var state_machine__5679__auto____1 = (function (state_55006){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55006);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55045){if((e55045 instanceof Object))
{var ex__5682__auto__ = e55045;var statearr_55046_55075 = state_55006;(statearr_55046_55075[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55076 = state_55006;
state_55006 = G__55076;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55006){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_55047 = f__5694__auto__.call(null);(statearr_55047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55048);
return statearr_55047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj55078 = {};return obj55078;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__55079_SHARP_){if(cljs.core.truth_(p1__55079_SHARP_.call(null,topic)))
{return p1__55079_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__55079_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t55204 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55204 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta55205){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta55205 = meta55205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55204.cljs$lang$type = true;
cljs.core.async.t55204.cljs$lang$ctorStr = "cljs.core.async/t55204";
cljs.core.async.t55204.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t55204");
});})(mults,ensure_mult))
;
cljs.core.async.t55204.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t55204.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t55204.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t55204.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t55204.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t55204.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t55204.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t55204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_55206){var self__ = this;
var _55206__$1 = this;return self__.meta55205;
});})(mults,ensure_mult))
;
cljs.core.async.t55204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_55206,meta55205__$1){var self__ = this;
var _55206__$1 = this;return (new cljs.core.async.t55204(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta55205__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t55204 = ((function (mults,ensure_mult){
return (function __GT_t55204(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta55205){return (new cljs.core.async.t55204(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta55205));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t55204(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___55328 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55328,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55328,mults,ensure_mult,p){
return (function (state_55280){var state_val_55281 = (state_55280[(1)]);if((state_val_55281 === (7)))
{var inst_55276 = (state_55280[(2)]);var state_55280__$1 = state_55280;var statearr_55282_55329 = state_55280__$1;(statearr_55282_55329[(2)] = inst_55276);
(statearr_55282_55329[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (20)))
{var state_55280__$1 = state_55280;var statearr_55283_55330 = state_55280__$1;(statearr_55283_55330[(2)] = null);
(statearr_55283_55330[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (1)))
{var state_55280__$1 = state_55280;var statearr_55284_55331 = state_55280__$1;(statearr_55284_55331[(2)] = null);
(statearr_55284_55331[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (24)))
{var inst_55259 = (state_55280[(7)]);var inst_55209 = (state_55280[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55280,(23),Object,null,(22));var inst_55266 = cljs.core.async.muxch_STAR_.call(null,inst_55259);var state_55280__$1 = state_55280;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55280__$1,(25),inst_55266,inst_55209);
} else
{if((state_val_55281 === (4)))
{var inst_55209 = (state_55280[(8)]);var inst_55209__$1 = (state_55280[(2)]);var inst_55210 = (inst_55209__$1 == null);var state_55280__$1 = (function (){var statearr_55285 = state_55280;(statearr_55285[(8)] = inst_55209__$1);
return statearr_55285;
})();if(cljs.core.truth_(inst_55210))
{var statearr_55286_55332 = state_55280__$1;(statearr_55286_55332[(1)] = (5));
} else
{var statearr_55287_55333 = state_55280__$1;(statearr_55287_55333[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (15)))
{var inst_55251 = (state_55280[(2)]);var state_55280__$1 = state_55280;var statearr_55288_55334 = state_55280__$1;(statearr_55288_55334[(2)] = inst_55251);
(statearr_55288_55334[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (21)))
{var inst_55273 = (state_55280[(2)]);var state_55280__$1 = (function (){var statearr_55289 = state_55280;(statearr_55289[(9)] = inst_55273);
return statearr_55289;
})();var statearr_55290_55335 = state_55280__$1;(statearr_55290_55335[(2)] = null);
(statearr_55290_55335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (13)))
{var inst_55233 = (state_55280[(10)]);var inst_55235 = cljs.core.chunked_seq_QMARK_.call(null,inst_55233);var state_55280__$1 = state_55280;if(inst_55235)
{var statearr_55291_55336 = state_55280__$1;(statearr_55291_55336[(1)] = (16));
} else
{var statearr_55292_55337 = state_55280__$1;(statearr_55292_55337[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (22)))
{var inst_55270 = (state_55280[(2)]);var state_55280__$1 = state_55280;var statearr_55293_55338 = state_55280__$1;(statearr_55293_55338[(2)] = inst_55270);
(statearr_55293_55338[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (6)))
{var inst_55259 = (state_55280[(7)]);var inst_55209 = (state_55280[(8)]);var inst_55257 = (state_55280[(11)]);var inst_55257__$1 = topic_fn.call(null,inst_55209);var inst_55258 = cljs.core.deref.call(null,mults);var inst_55259__$1 = cljs.core.get.call(null,inst_55258,inst_55257__$1);var state_55280__$1 = (function (){var statearr_55294 = state_55280;(statearr_55294[(7)] = inst_55259__$1);
(statearr_55294[(11)] = inst_55257__$1);
return statearr_55294;
})();if(cljs.core.truth_(inst_55259__$1))
{var statearr_55295_55339 = state_55280__$1;(statearr_55295_55339[(1)] = (19));
} else
{var statearr_55296_55340 = state_55280__$1;(statearr_55296_55340[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (25)))
{var inst_55268 = (state_55280[(2)]);var state_55280__$1 = state_55280;var statearr_55297_55341 = state_55280__$1;(statearr_55297_55341[(2)] = inst_55268);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55280__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (17)))
{var inst_55233 = (state_55280[(10)]);var inst_55242 = cljs.core.first.call(null,inst_55233);var inst_55243 = cljs.core.async.muxch_STAR_.call(null,inst_55242);var inst_55244 = cljs.core.async.close_BANG_.call(null,inst_55243);var inst_55245 = cljs.core.next.call(null,inst_55233);var inst_55219 = inst_55245;var inst_55220 = null;var inst_55221 = (0);var inst_55222 = (0);var state_55280__$1 = (function (){var statearr_55298 = state_55280;(statearr_55298[(12)] = inst_55221);
(statearr_55298[(13)] = inst_55220);
(statearr_55298[(14)] = inst_55222);
(statearr_55298[(15)] = inst_55219);
(statearr_55298[(16)] = inst_55244);
return statearr_55298;
})();var statearr_55299_55342 = state_55280__$1;(statearr_55299_55342[(2)] = null);
(statearr_55299_55342[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (3)))
{var inst_55278 = (state_55280[(2)]);var state_55280__$1 = state_55280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55280__$1,inst_55278);
} else
{if((state_val_55281 === (12)))
{var inst_55253 = (state_55280[(2)]);var state_55280__$1 = state_55280;var statearr_55300_55343 = state_55280__$1;(statearr_55300_55343[(2)] = inst_55253);
(statearr_55300_55343[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (2)))
{var state_55280__$1 = state_55280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55280__$1,(4),ch);
} else
{if((state_val_55281 === (23)))
{var inst_55257 = (state_55280[(11)]);var inst_55261 = (state_55280[(2)]);var inst_55262 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_55257);var state_55280__$1 = (function (){var statearr_55301 = state_55280;(statearr_55301[(17)] = inst_55261);
return statearr_55301;
})();var statearr_55302_55344 = state_55280__$1;(statearr_55302_55344[(2)] = inst_55262);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55280__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (19)))
{var state_55280__$1 = state_55280;var statearr_55303_55345 = state_55280__$1;(statearr_55303_55345[(2)] = null);
(statearr_55303_55345[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (11)))
{var inst_55219 = (state_55280[(15)]);var inst_55233 = (state_55280[(10)]);var inst_55233__$1 = cljs.core.seq.call(null,inst_55219);var state_55280__$1 = (function (){var statearr_55304 = state_55280;(statearr_55304[(10)] = inst_55233__$1);
return statearr_55304;
})();if(inst_55233__$1)
{var statearr_55305_55346 = state_55280__$1;(statearr_55305_55346[(1)] = (13));
} else
{var statearr_55306_55347 = state_55280__$1;(statearr_55306_55347[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (9)))
{var inst_55255 = (state_55280[(2)]);var state_55280__$1 = state_55280;var statearr_55307_55348 = state_55280__$1;(statearr_55307_55348[(2)] = inst_55255);
(statearr_55307_55348[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (5)))
{var inst_55216 = cljs.core.deref.call(null,mults);var inst_55217 = cljs.core.vals.call(null,inst_55216);var inst_55218 = cljs.core.seq.call(null,inst_55217);var inst_55219 = inst_55218;var inst_55220 = null;var inst_55221 = (0);var inst_55222 = (0);var state_55280__$1 = (function (){var statearr_55308 = state_55280;(statearr_55308[(12)] = inst_55221);
(statearr_55308[(13)] = inst_55220);
(statearr_55308[(14)] = inst_55222);
(statearr_55308[(15)] = inst_55219);
return statearr_55308;
})();var statearr_55309_55349 = state_55280__$1;(statearr_55309_55349[(2)] = null);
(statearr_55309_55349[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (14)))
{var state_55280__$1 = state_55280;var statearr_55313_55350 = state_55280__$1;(statearr_55313_55350[(2)] = null);
(statearr_55313_55350[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (16)))
{var inst_55233 = (state_55280[(10)]);var inst_55237 = cljs.core.chunk_first.call(null,inst_55233);var inst_55238 = cljs.core.chunk_rest.call(null,inst_55233);var inst_55239 = cljs.core.count.call(null,inst_55237);var inst_55219 = inst_55238;var inst_55220 = inst_55237;var inst_55221 = inst_55239;var inst_55222 = (0);var state_55280__$1 = (function (){var statearr_55314 = state_55280;(statearr_55314[(12)] = inst_55221);
(statearr_55314[(13)] = inst_55220);
(statearr_55314[(14)] = inst_55222);
(statearr_55314[(15)] = inst_55219);
return statearr_55314;
})();var statearr_55315_55351 = state_55280__$1;(statearr_55315_55351[(2)] = null);
(statearr_55315_55351[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (10)))
{var inst_55221 = (state_55280[(12)]);var inst_55220 = (state_55280[(13)]);var inst_55222 = (state_55280[(14)]);var inst_55219 = (state_55280[(15)]);var inst_55227 = cljs.core._nth.call(null,inst_55220,inst_55222);var inst_55228 = cljs.core.async.muxch_STAR_.call(null,inst_55227);var inst_55229 = cljs.core.async.close_BANG_.call(null,inst_55228);var inst_55230 = (inst_55222 + (1));var tmp55310 = inst_55221;var tmp55311 = inst_55220;var tmp55312 = inst_55219;var inst_55219__$1 = tmp55312;var inst_55220__$1 = tmp55311;var inst_55221__$1 = tmp55310;var inst_55222__$1 = inst_55230;var state_55280__$1 = (function (){var statearr_55316 = state_55280;(statearr_55316[(12)] = inst_55221__$1);
(statearr_55316[(18)] = inst_55229);
(statearr_55316[(13)] = inst_55220__$1);
(statearr_55316[(14)] = inst_55222__$1);
(statearr_55316[(15)] = inst_55219__$1);
return statearr_55316;
})();var statearr_55317_55352 = state_55280__$1;(statearr_55317_55352[(2)] = null);
(statearr_55317_55352[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (18)))
{var inst_55248 = (state_55280[(2)]);var state_55280__$1 = state_55280;var statearr_55318_55353 = state_55280__$1;(statearr_55318_55353[(2)] = inst_55248);
(statearr_55318_55353[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55281 === (8)))
{var inst_55221 = (state_55280[(12)]);var inst_55222 = (state_55280[(14)]);var inst_55224 = (inst_55222 < inst_55221);var inst_55225 = inst_55224;var state_55280__$1 = state_55280;if(cljs.core.truth_(inst_55225))
{var statearr_55319_55354 = state_55280__$1;(statearr_55319_55354[(1)] = (10));
} else
{var statearr_55320_55355 = state_55280__$1;(statearr_55320_55355[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___55328,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___55328,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55324[(0)] = state_machine__5679__auto__);
(statearr_55324[(1)] = (1));
return statearr_55324;
});
var state_machine__5679__auto____1 = (function (state_55280){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55280);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55325){if((e55325 instanceof Object))
{var ex__5682__auto__ = e55325;var statearr_55326_55356 = state_55280;(statearr_55326_55356[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55280);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55357 = state_55280;
state_55280 = G__55357;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55280){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55328,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_55327 = f__5694__auto__.call(null);(statearr_55327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55328);
return statearr_55327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55328,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5693__auto___55494 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55494,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55494,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_55464){var state_val_55465 = (state_55464[(1)]);if((state_val_55465 === (7)))
{var state_55464__$1 = state_55464;var statearr_55466_55495 = state_55464__$1;(statearr_55466_55495[(2)] = null);
(statearr_55466_55495[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (1)))
{var state_55464__$1 = state_55464;var statearr_55467_55496 = state_55464__$1;(statearr_55467_55496[(2)] = null);
(statearr_55467_55496[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (4)))
{var inst_55428 = (state_55464[(7)]);var inst_55430 = (inst_55428 < cnt);var state_55464__$1 = state_55464;if(cljs.core.truth_(inst_55430))
{var statearr_55468_55497 = state_55464__$1;(statearr_55468_55497[(1)] = (6));
} else
{var statearr_55469_55498 = state_55464__$1;(statearr_55469_55498[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (15)))
{var inst_55460 = (state_55464[(2)]);var state_55464__$1 = state_55464;var statearr_55470_55499 = state_55464__$1;(statearr_55470_55499[(2)] = inst_55460);
(statearr_55470_55499[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (13)))
{var inst_55453 = cljs.core.async.close_BANG_.call(null,out);var state_55464__$1 = state_55464;var statearr_55471_55500 = state_55464__$1;(statearr_55471_55500[(2)] = inst_55453);
(statearr_55471_55500[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (6)))
{var state_55464__$1 = state_55464;var statearr_55472_55501 = state_55464__$1;(statearr_55472_55501[(2)] = null);
(statearr_55472_55501[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (3)))
{var inst_55462 = (state_55464[(2)]);var state_55464__$1 = state_55464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55464__$1,inst_55462);
} else
{if((state_val_55465 === (12)))
{var inst_55450 = (state_55464[(8)]);var inst_55450__$1 = (state_55464[(2)]);var inst_55451 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_55450__$1);var state_55464__$1 = (function (){var statearr_55473 = state_55464;(statearr_55473[(8)] = inst_55450__$1);
return statearr_55473;
})();if(cljs.core.truth_(inst_55451))
{var statearr_55474_55502 = state_55464__$1;(statearr_55474_55502[(1)] = (13));
} else
{var statearr_55475_55503 = state_55464__$1;(statearr_55475_55503[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (2)))
{var inst_55427 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_55428 = (0);var state_55464__$1 = (function (){var statearr_55476 = state_55464;(statearr_55476[(9)] = inst_55427);
(statearr_55476[(7)] = inst_55428);
return statearr_55476;
})();var statearr_55477_55504 = state_55464__$1;(statearr_55477_55504[(2)] = null);
(statearr_55477_55504[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (11)))
{var inst_55428 = (state_55464[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55464,(10),Object,null,(9));var inst_55437 = chs__$1.call(null,inst_55428);var inst_55438 = done.call(null,inst_55428);var inst_55439 = cljs.core.async.take_BANG_.call(null,inst_55437,inst_55438);var state_55464__$1 = state_55464;var statearr_55478_55505 = state_55464__$1;(statearr_55478_55505[(2)] = inst_55439);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55464__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (9)))
{var inst_55428 = (state_55464[(7)]);var inst_55441 = (state_55464[(2)]);var inst_55442 = (inst_55428 + (1));var inst_55428__$1 = inst_55442;var state_55464__$1 = (function (){var statearr_55479 = state_55464;(statearr_55479[(10)] = inst_55441);
(statearr_55479[(7)] = inst_55428__$1);
return statearr_55479;
})();var statearr_55480_55506 = state_55464__$1;(statearr_55480_55506[(2)] = null);
(statearr_55480_55506[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (5)))
{var inst_55448 = (state_55464[(2)]);var state_55464__$1 = (function (){var statearr_55481 = state_55464;(statearr_55481[(11)] = inst_55448);
return statearr_55481;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55464__$1,(12),dchan);
} else
{if((state_val_55465 === (14)))
{var inst_55450 = (state_55464[(8)]);var inst_55455 = cljs.core.apply.call(null,f,inst_55450);var state_55464__$1 = state_55464;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55464__$1,(16),out,inst_55455);
} else
{if((state_val_55465 === (16)))
{var inst_55457 = (state_55464[(2)]);var state_55464__$1 = (function (){var statearr_55482 = state_55464;(statearr_55482[(12)] = inst_55457);
return statearr_55482;
})();var statearr_55483_55507 = state_55464__$1;(statearr_55483_55507[(2)] = null);
(statearr_55483_55507[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (10)))
{var inst_55432 = (state_55464[(2)]);var inst_55433 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_55464__$1 = (function (){var statearr_55484 = state_55464;(statearr_55484[(13)] = inst_55432);
return statearr_55484;
})();var statearr_55485_55508 = state_55464__$1;(statearr_55485_55508[(2)] = inst_55433);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55464__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55465 === (8)))
{var inst_55446 = (state_55464[(2)]);var state_55464__$1 = state_55464;var statearr_55486_55509 = state_55464__$1;(statearr_55486_55509[(2)] = inst_55446);
(statearr_55486_55509[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___55494,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___55494,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55490[(0)] = state_machine__5679__auto__);
(statearr_55490[(1)] = (1));
return statearr_55490;
});
var state_machine__5679__auto____1 = (function (state_55464){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55464);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55491){if((e55491 instanceof Object))
{var ex__5682__auto__ = e55491;var statearr_55492_55510 = state_55464;(statearr_55492_55510[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55464);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55491;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55511 = state_55464;
state_55464 = G__55511;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55464){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55494,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_55493 = f__5694__auto__.call(null);(statearr_55493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55494);
return statearr_55493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55494,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___55619 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55619,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55619,out){
return (function (state_55595){var state_val_55596 = (state_55595[(1)]);if((state_val_55596 === (7)))
{var inst_55574 = (state_55595[(7)]);var inst_55575 = (state_55595[(8)]);var inst_55574__$1 = (state_55595[(2)]);var inst_55575__$1 = cljs.core.nth.call(null,inst_55574__$1,(0),null);var inst_55576 = cljs.core.nth.call(null,inst_55574__$1,(1),null);var inst_55577 = (inst_55575__$1 == null);var state_55595__$1 = (function (){var statearr_55597 = state_55595;(statearr_55597[(9)] = inst_55576);
(statearr_55597[(7)] = inst_55574__$1);
(statearr_55597[(8)] = inst_55575__$1);
return statearr_55597;
})();if(cljs.core.truth_(inst_55577))
{var statearr_55598_55620 = state_55595__$1;(statearr_55598_55620[(1)] = (8));
} else
{var statearr_55599_55621 = state_55595__$1;(statearr_55599_55621[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55596 === (1)))
{var inst_55566 = cljs.core.vec.call(null,chs);var inst_55567 = inst_55566;var state_55595__$1 = (function (){var statearr_55600 = state_55595;(statearr_55600[(10)] = inst_55567);
return statearr_55600;
})();var statearr_55601_55622 = state_55595__$1;(statearr_55601_55622[(2)] = null);
(statearr_55601_55622[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55596 === (4)))
{var inst_55567 = (state_55595[(10)]);var state_55595__$1 = state_55595;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_55595__$1,(7),inst_55567);
} else
{if((state_val_55596 === (6)))
{var inst_55591 = (state_55595[(2)]);var state_55595__$1 = state_55595;var statearr_55602_55623 = state_55595__$1;(statearr_55602_55623[(2)] = inst_55591);
(statearr_55602_55623[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55596 === (3)))
{var inst_55593 = (state_55595[(2)]);var state_55595__$1 = state_55595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55595__$1,inst_55593);
} else
{if((state_val_55596 === (2)))
{var inst_55567 = (state_55595[(10)]);var inst_55569 = cljs.core.count.call(null,inst_55567);var inst_55570 = (inst_55569 > (0));var state_55595__$1 = state_55595;if(cljs.core.truth_(inst_55570))
{var statearr_55604_55624 = state_55595__$1;(statearr_55604_55624[(1)] = (4));
} else
{var statearr_55605_55625 = state_55595__$1;(statearr_55605_55625[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55596 === (11)))
{var inst_55567 = (state_55595[(10)]);var inst_55584 = (state_55595[(2)]);var tmp55603 = inst_55567;var inst_55567__$1 = tmp55603;var state_55595__$1 = (function (){var statearr_55606 = state_55595;(statearr_55606[(11)] = inst_55584);
(statearr_55606[(10)] = inst_55567__$1);
return statearr_55606;
})();var statearr_55607_55626 = state_55595__$1;(statearr_55607_55626[(2)] = null);
(statearr_55607_55626[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55596 === (9)))
{var inst_55575 = (state_55595[(8)]);var state_55595__$1 = state_55595;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55595__$1,(11),out,inst_55575);
} else
{if((state_val_55596 === (5)))
{var inst_55589 = cljs.core.async.close_BANG_.call(null,out);var state_55595__$1 = state_55595;var statearr_55608_55627 = state_55595__$1;(statearr_55608_55627[(2)] = inst_55589);
(statearr_55608_55627[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55596 === (10)))
{var inst_55587 = (state_55595[(2)]);var state_55595__$1 = state_55595;var statearr_55609_55628 = state_55595__$1;(statearr_55609_55628[(2)] = inst_55587);
(statearr_55609_55628[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55596 === (8)))
{var inst_55576 = (state_55595[(9)]);var inst_55574 = (state_55595[(7)]);var inst_55567 = (state_55595[(10)]);var inst_55575 = (state_55595[(8)]);var inst_55579 = (function (){var c = inst_55576;var v = inst_55575;var vec__55572 = inst_55574;var cs = inst_55567;return ((function (c,v,vec__55572,cs,inst_55576,inst_55574,inst_55567,inst_55575,state_val_55596,c__5693__auto___55619,out){
return (function (p1__55512_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__55512_SHARP_);
});
;})(c,v,vec__55572,cs,inst_55576,inst_55574,inst_55567,inst_55575,state_val_55596,c__5693__auto___55619,out))
})();var inst_55580 = cljs.core.filterv.call(null,inst_55579,inst_55567);var inst_55567__$1 = inst_55580;var state_55595__$1 = (function (){var statearr_55610 = state_55595;(statearr_55610[(10)] = inst_55567__$1);
return statearr_55610;
})();var statearr_55611_55629 = state_55595__$1;(statearr_55611_55629[(2)] = null);
(statearr_55611_55629[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___55619,out))
;return ((function (switch__5678__auto__,c__5693__auto___55619,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55615 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55615[(0)] = state_machine__5679__auto__);
(statearr_55615[(1)] = (1));
return statearr_55615;
});
var state_machine__5679__auto____1 = (function (state_55595){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55595);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55616){if((e55616 instanceof Object))
{var ex__5682__auto__ = e55616;var statearr_55617_55630 = state_55595;(statearr_55617_55630[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55595);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55631 = state_55595;
state_55595 = G__55631;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55595){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55619,out))
})();var state__5695__auto__ = (function (){var statearr_55618 = f__5694__auto__.call(null);(statearr_55618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55619);
return statearr_55618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55619,out))
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___55724 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55724,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55724,out){
return (function (state_55701){var state_val_55702 = (state_55701[(1)]);if((state_val_55702 === (7)))
{var inst_55683 = (state_55701[(7)]);var inst_55683__$1 = (state_55701[(2)]);var inst_55684 = (inst_55683__$1 == null);var inst_55685 = cljs.core.not.call(null,inst_55684);var state_55701__$1 = (function (){var statearr_55703 = state_55701;(statearr_55703[(7)] = inst_55683__$1);
return statearr_55703;
})();if(inst_55685)
{var statearr_55704_55725 = state_55701__$1;(statearr_55704_55725[(1)] = (8));
} else
{var statearr_55705_55726 = state_55701__$1;(statearr_55705_55726[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55702 === (1)))
{var inst_55678 = (0);var state_55701__$1 = (function (){var statearr_55706 = state_55701;(statearr_55706[(8)] = inst_55678);
return statearr_55706;
})();var statearr_55707_55727 = state_55701__$1;(statearr_55707_55727[(2)] = null);
(statearr_55707_55727[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55702 === (4)))
{var state_55701__$1 = state_55701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55701__$1,(7),ch);
} else
{if((state_val_55702 === (6)))
{var inst_55696 = (state_55701[(2)]);var state_55701__$1 = state_55701;var statearr_55708_55728 = state_55701__$1;(statearr_55708_55728[(2)] = inst_55696);
(statearr_55708_55728[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55702 === (3)))
{var inst_55698 = (state_55701[(2)]);var inst_55699 = cljs.core.async.close_BANG_.call(null,out);var state_55701__$1 = (function (){var statearr_55709 = state_55701;(statearr_55709[(9)] = inst_55698);
return statearr_55709;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55701__$1,inst_55699);
} else
{if((state_val_55702 === (2)))
{var inst_55678 = (state_55701[(8)]);var inst_55680 = (inst_55678 < n);var state_55701__$1 = state_55701;if(cljs.core.truth_(inst_55680))
{var statearr_55710_55729 = state_55701__$1;(statearr_55710_55729[(1)] = (4));
} else
{var statearr_55711_55730 = state_55701__$1;(statearr_55711_55730[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55702 === (11)))
{var inst_55678 = (state_55701[(8)]);var inst_55688 = (state_55701[(2)]);var inst_55689 = (inst_55678 + (1));var inst_55678__$1 = inst_55689;var state_55701__$1 = (function (){var statearr_55712 = state_55701;(statearr_55712[(10)] = inst_55688);
(statearr_55712[(8)] = inst_55678__$1);
return statearr_55712;
})();var statearr_55713_55731 = state_55701__$1;(statearr_55713_55731[(2)] = null);
(statearr_55713_55731[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55702 === (9)))
{var state_55701__$1 = state_55701;var statearr_55714_55732 = state_55701__$1;(statearr_55714_55732[(2)] = null);
(statearr_55714_55732[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55702 === (5)))
{var state_55701__$1 = state_55701;var statearr_55715_55733 = state_55701__$1;(statearr_55715_55733[(2)] = null);
(statearr_55715_55733[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55702 === (10)))
{var inst_55693 = (state_55701[(2)]);var state_55701__$1 = state_55701;var statearr_55716_55734 = state_55701__$1;(statearr_55716_55734[(2)] = inst_55693);
(statearr_55716_55734[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55702 === (8)))
{var inst_55683 = (state_55701[(7)]);var state_55701__$1 = state_55701;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55701__$1,(11),out,inst_55683);
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
});})(c__5693__auto___55724,out))
;return ((function (switch__5678__auto__,c__5693__auto___55724,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55720 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_55720[(0)] = state_machine__5679__auto__);
(statearr_55720[(1)] = (1));
return statearr_55720;
});
var state_machine__5679__auto____1 = (function (state_55701){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55701);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55721){if((e55721 instanceof Object))
{var ex__5682__auto__ = e55721;var statearr_55722_55735 = state_55701;(statearr_55722_55735[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55736 = state_55701;
state_55701 = G__55736;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55701){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55724,out))
})();var state__5695__auto__ = (function (){var statearr_55723 = f__5694__auto__.call(null);(statearr_55723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55724);
return statearr_55723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55724,out))
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___55833 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55833,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55833,out){
return (function (state_55808){var state_val_55809 = (state_55808[(1)]);if((state_val_55809 === (7)))
{var inst_55803 = (state_55808[(2)]);var state_55808__$1 = state_55808;var statearr_55810_55834 = state_55808__$1;(statearr_55810_55834[(2)] = inst_55803);
(statearr_55810_55834[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55809 === (1)))
{var inst_55785 = null;var state_55808__$1 = (function (){var statearr_55811 = state_55808;(statearr_55811[(7)] = inst_55785);
return statearr_55811;
})();var statearr_55812_55835 = state_55808__$1;(statearr_55812_55835[(2)] = null);
(statearr_55812_55835[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55809 === (4)))
{var inst_55788 = (state_55808[(8)]);var inst_55788__$1 = (state_55808[(2)]);var inst_55789 = (inst_55788__$1 == null);var inst_55790 = cljs.core.not.call(null,inst_55789);var state_55808__$1 = (function (){var statearr_55813 = state_55808;(statearr_55813[(8)] = inst_55788__$1);
return statearr_55813;
})();if(inst_55790)
{var statearr_55814_55836 = state_55808__$1;(statearr_55814_55836[(1)] = (5));
} else
{var statearr_55815_55837 = state_55808__$1;(statearr_55815_55837[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55809 === (6)))
{var state_55808__$1 = state_55808;var statearr_55816_55838 = state_55808__$1;(statearr_55816_55838[(2)] = null);
(statearr_55816_55838[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55809 === (3)))
{var inst_55805 = (state_55808[(2)]);var inst_55806 = cljs.core.async.close_BANG_.call(null,out);var state_55808__$1 = (function (){var statearr_55817 = state_55808;(statearr_55817[(9)] = inst_55805);
return statearr_55817;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55808__$1,inst_55806);
} else
{if((state_val_55809 === (2)))
{var state_55808__$1 = state_55808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55808__$1,(4),ch);
} else
{if((state_val_55809 === (11)))
{var inst_55788 = (state_55808[(8)]);var inst_55797 = (state_55808[(2)]);var inst_55785 = inst_55788;var state_55808__$1 = (function (){var statearr_55818 = state_55808;(statearr_55818[(7)] = inst_55785);
(statearr_55818[(10)] = inst_55797);
return statearr_55818;
})();var statearr_55819_55839 = state_55808__$1;(statearr_55819_55839[(2)] = null);
(statearr_55819_55839[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55809 === (9)))
{var inst_55788 = (state_55808[(8)]);var state_55808__$1 = state_55808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55808__$1,(11),out,inst_55788);
} else
{if((state_val_55809 === (5)))
{var inst_55785 = (state_55808[(7)]);var inst_55788 = (state_55808[(8)]);var inst_55792 = cljs.core._EQ_.call(null,inst_55788,inst_55785);var state_55808__$1 = state_55808;if(inst_55792)
{var statearr_55821_55840 = state_55808__$1;(statearr_55821_55840[(1)] = (8));
} else
{var statearr_55822_55841 = state_55808__$1;(statearr_55822_55841[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55809 === (10)))
{var inst_55800 = (state_55808[(2)]);var state_55808__$1 = state_55808;var statearr_55823_55842 = state_55808__$1;(statearr_55823_55842[(2)] = inst_55800);
(statearr_55823_55842[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55809 === (8)))
{var inst_55785 = (state_55808[(7)]);var tmp55820 = inst_55785;var inst_55785__$1 = tmp55820;var state_55808__$1 = (function (){var statearr_55824 = state_55808;(statearr_55824[(7)] = inst_55785__$1);
return statearr_55824;
})();var statearr_55825_55843 = state_55808__$1;(statearr_55825_55843[(2)] = null);
(statearr_55825_55843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___55833,out))
;return ((function (switch__5678__auto__,c__5693__auto___55833,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55829 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_55829[(0)] = state_machine__5679__auto__);
(statearr_55829[(1)] = (1));
return statearr_55829;
});
var state_machine__5679__auto____1 = (function (state_55808){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55808);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55830){if((e55830 instanceof Object))
{var ex__5682__auto__ = e55830;var statearr_55831_55844 = state_55808;(statearr_55831_55844[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55808);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55845 = state_55808;
state_55808 = G__55845;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55808){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55833,out))
})();var state__5695__auto__ = (function (){var statearr_55832 = f__5694__auto__.call(null);(statearr_55832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55833);
return statearr_55832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55833,out))
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___55980 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55980,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55980,out){
return (function (state_55950){var state_val_55951 = (state_55950[(1)]);if((state_val_55951 === (7)))
{var inst_55946 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_55952_55981 = state_55950__$1;(statearr_55952_55981[(2)] = inst_55946);
(statearr_55952_55981[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (1)))
{var inst_55913 = (new Array(n));var inst_55914 = inst_55913;var inst_55915 = (0);var state_55950__$1 = (function (){var statearr_55953 = state_55950;(statearr_55953[(7)] = inst_55915);
(statearr_55953[(8)] = inst_55914);
return statearr_55953;
})();var statearr_55954_55982 = state_55950__$1;(statearr_55954_55982[(2)] = null);
(statearr_55954_55982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (4)))
{var inst_55918 = (state_55950[(9)]);var inst_55918__$1 = (state_55950[(2)]);var inst_55919 = (inst_55918__$1 == null);var inst_55920 = cljs.core.not.call(null,inst_55919);var state_55950__$1 = (function (){var statearr_55955 = state_55950;(statearr_55955[(9)] = inst_55918__$1);
return statearr_55955;
})();if(inst_55920)
{var statearr_55956_55983 = state_55950__$1;(statearr_55956_55983[(1)] = (5));
} else
{var statearr_55957_55984 = state_55950__$1;(statearr_55957_55984[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (15)))
{var inst_55940 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_55958_55985 = state_55950__$1;(statearr_55958_55985[(2)] = inst_55940);
(statearr_55958_55985[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (13)))
{var state_55950__$1 = state_55950;var statearr_55959_55986 = state_55950__$1;(statearr_55959_55986[(2)] = null);
(statearr_55959_55986[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (6)))
{var inst_55915 = (state_55950[(7)]);var inst_55936 = (inst_55915 > (0));var state_55950__$1 = state_55950;if(cljs.core.truth_(inst_55936))
{var statearr_55960_55987 = state_55950__$1;(statearr_55960_55987[(1)] = (12));
} else
{var statearr_55961_55988 = state_55950__$1;(statearr_55961_55988[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (3)))
{var inst_55948 = (state_55950[(2)]);var state_55950__$1 = state_55950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55950__$1,inst_55948);
} else
{if((state_val_55951 === (12)))
{var inst_55914 = (state_55950[(8)]);var inst_55938 = cljs.core.vec.call(null,inst_55914);var state_55950__$1 = state_55950;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55950__$1,(15),out,inst_55938);
} else
{if((state_val_55951 === (2)))
{var state_55950__$1 = state_55950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55950__$1,(4),ch);
} else
{if((state_val_55951 === (11)))
{var inst_55930 = (state_55950[(2)]);var inst_55931 = (new Array(n));var inst_55914 = inst_55931;var inst_55915 = (0);var state_55950__$1 = (function (){var statearr_55962 = state_55950;(statearr_55962[(10)] = inst_55930);
(statearr_55962[(7)] = inst_55915);
(statearr_55962[(8)] = inst_55914);
return statearr_55962;
})();var statearr_55963_55989 = state_55950__$1;(statearr_55963_55989[(2)] = null);
(statearr_55963_55989[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (9)))
{var inst_55914 = (state_55950[(8)]);var inst_55928 = cljs.core.vec.call(null,inst_55914);var state_55950__$1 = state_55950;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55950__$1,(11),out,inst_55928);
} else
{if((state_val_55951 === (5)))
{var inst_55918 = (state_55950[(9)]);var inst_55923 = (state_55950[(11)]);var inst_55915 = (state_55950[(7)]);var inst_55914 = (state_55950[(8)]);var inst_55922 = (inst_55914[inst_55915] = inst_55918);var inst_55923__$1 = (inst_55915 + (1));var inst_55924 = (inst_55923__$1 < n);var state_55950__$1 = (function (){var statearr_55964 = state_55950;(statearr_55964[(11)] = inst_55923__$1);
(statearr_55964[(12)] = inst_55922);
return statearr_55964;
})();if(cljs.core.truth_(inst_55924))
{var statearr_55965_55990 = state_55950__$1;(statearr_55965_55990[(1)] = (8));
} else
{var statearr_55966_55991 = state_55950__$1;(statearr_55966_55991[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (14)))
{var inst_55943 = (state_55950[(2)]);var inst_55944 = cljs.core.async.close_BANG_.call(null,out);var state_55950__$1 = (function (){var statearr_55968 = state_55950;(statearr_55968[(13)] = inst_55943);
return statearr_55968;
})();var statearr_55969_55992 = state_55950__$1;(statearr_55969_55992[(2)] = inst_55944);
(statearr_55969_55992[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (10)))
{var inst_55934 = (state_55950[(2)]);var state_55950__$1 = state_55950;var statearr_55970_55993 = state_55950__$1;(statearr_55970_55993[(2)] = inst_55934);
(statearr_55970_55993[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55951 === (8)))
{var inst_55923 = (state_55950[(11)]);var inst_55914 = (state_55950[(8)]);var tmp55967 = inst_55914;var inst_55914__$1 = tmp55967;var inst_55915 = inst_55923;var state_55950__$1 = (function (){var statearr_55971 = state_55950;(statearr_55971[(7)] = inst_55915);
(statearr_55971[(8)] = inst_55914__$1);
return statearr_55971;
})();var statearr_55972_55994 = state_55950__$1;(statearr_55972_55994[(2)] = null);
(statearr_55972_55994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___55980,out))
;return ((function (switch__5678__auto__,c__5693__auto___55980,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55976[(0)] = state_machine__5679__auto__);
(statearr_55976[(1)] = (1));
return statearr_55976;
});
var state_machine__5679__auto____1 = (function (state_55950){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55950);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55977){if((e55977 instanceof Object))
{var ex__5682__auto__ = e55977;var statearr_55978_55995 = state_55950;(statearr_55978_55995[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55950);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55996 = state_55950;
state_55950 = G__55996;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55950){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55980,out))
})();var state__5695__auto__ = (function (){var statearr_55979 = f__5694__auto__.call(null);(statearr_55979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55980);
return statearr_55979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55980,out))
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___56139 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___56139,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___56139,out){
return (function (state_56109){var state_val_56110 = (state_56109[(1)]);if((state_val_56110 === (7)))
{var inst_56105 = (state_56109[(2)]);var state_56109__$1 = state_56109;var statearr_56111_56140 = state_56109__$1;(statearr_56111_56140[(2)] = inst_56105);
(statearr_56111_56140[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56110 === (1)))
{var inst_56068 = [];var inst_56069 = inst_56068;var inst_56070 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_56109__$1 = (function (){var statearr_56112 = state_56109;(statearr_56112[(7)] = inst_56069);
(statearr_56112[(8)] = inst_56070);
return statearr_56112;
})();var statearr_56113_56141 = state_56109__$1;(statearr_56113_56141[(2)] = null);
(statearr_56113_56141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56110 === (4)))
{var inst_56073 = (state_56109[(9)]);var inst_56073__$1 = (state_56109[(2)]);var inst_56074 = (inst_56073__$1 == null);var inst_56075 = cljs.core.not.call(null,inst_56074);var state_56109__$1 = (function (){var statearr_56114 = state_56109;(statearr_56114[(9)] = inst_56073__$1);
return statearr_56114;
})();if(inst_56075)
{var statearr_56115_56142 = state_56109__$1;(statearr_56115_56142[(1)] = (5));
} else
{var statearr_56116_56143 = state_56109__$1;(statearr_56116_56143[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56110 === (15)))
{var inst_56099 = (state_56109[(2)]);var state_56109__$1 = state_56109;var statearr_56117_56144 = state_56109__$1;(statearr_56117_56144[(2)] = inst_56099);
(statearr_56117_56144[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56110 === (13)))
{var state_56109__$1 = state_56109;var statearr_56118_56145 = state_56109__$1;(statearr_56118_56145[(2)] = null);
(statearr_56118_56145[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56110 === (6)))
{var inst_56069 = (state_56109[(7)]);var inst_56094 = inst_56069.length;var inst_56095 = (inst_56094 > (0));var state_56109__$1 = state_56109;if(cljs.core.truth_(inst_56095))
{var statearr_56119_56146 = state_56109__$1;(statearr_56119_56146[(1)] = (12));
} else
{var statearr_56120_56147 = state_56109__$1;(statearr_56120_56147[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56110 === (3)))
{var inst_56107 = (state_56109[(2)]);var state_56109__$1 = state_56109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56109__$1,inst_56107);
} else
{if((state_val_56110 === (12)))
{var inst_56069 = (state_56109[(7)]);var inst_56097 = cljs.core.vec.call(null,inst_56069);var state_56109__$1 = state_56109;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56109__$1,(15),out,inst_56097);
} else
{if((state_val_56110 === (2)))
{var state_56109__$1 = state_56109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56109__$1,(4),ch);
} else
{if((state_val_56110 === (11)))
{var inst_56077 = (state_56109[(10)]);var inst_56073 = (state_56109[(9)]);var inst_56087 = (state_56109[(2)]);var inst_56088 = [];var inst_56089 = inst_56088.push(inst_56073);var inst_56069 = inst_56088;var inst_56070 = inst_56077;var state_56109__$1 = (function (){var statearr_56121 = state_56109;(statearr_56121[(7)] = inst_56069);
(statearr_56121[(8)] = inst_56070);
(statearr_56121[(11)] = inst_56087);
(statearr_56121[(12)] = inst_56089);
return statearr_56121;
})();var statearr_56122_56148 = state_56109__$1;(statearr_56122_56148[(2)] = null);
(statearr_56122_56148[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56110 === (9)))
{var inst_56069 = (state_56109[(7)]);var inst_56085 = cljs.core.vec.call(null,inst_56069);var state_56109__$1 = state_56109;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56109__$1,(11),out,inst_56085);
} else
{if((state_val_56110 === (5)))
{var inst_56070 = (state_56109[(8)]);var inst_56077 = (state_56109[(10)]);var inst_56073 = (state_56109[(9)]);var inst_56077__$1 = f.call(null,inst_56073);var inst_56078 = cljs.core._EQ_.call(null,inst_56077__$1,inst_56070);var inst_56079 = cljs.core.keyword_identical_QMARK_.call(null,inst_56070,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_56080 = (inst_56078) || (inst_56079);var state_56109__$1 = (function (){var statearr_56123 = state_56109;(statearr_56123[(10)] = inst_56077__$1);
return statearr_56123;
})();if(cljs.core.truth_(inst_56080))
{var statearr_56124_56149 = state_56109__$1;(statearr_56124_56149[(1)] = (8));
} else
{var statearr_56125_56150 = state_56109__$1;(statearr_56125_56150[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56110 === (14)))
{var inst_56102 = (state_56109[(2)]);var inst_56103 = cljs.core.async.close_BANG_.call(null,out);var state_56109__$1 = (function (){var statearr_56127 = state_56109;(statearr_56127[(13)] = inst_56102);
return statearr_56127;
})();var statearr_56128_56151 = state_56109__$1;(statearr_56128_56151[(2)] = inst_56103);
(statearr_56128_56151[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56110 === (10)))
{var inst_56092 = (state_56109[(2)]);var state_56109__$1 = state_56109;var statearr_56129_56152 = state_56109__$1;(statearr_56129_56152[(2)] = inst_56092);
(statearr_56129_56152[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56110 === (8)))
{var inst_56069 = (state_56109[(7)]);var inst_56077 = (state_56109[(10)]);var inst_56073 = (state_56109[(9)]);var inst_56082 = inst_56069.push(inst_56073);var tmp56126 = inst_56069;var inst_56069__$1 = tmp56126;var inst_56070 = inst_56077;var state_56109__$1 = (function (){var statearr_56130 = state_56109;(statearr_56130[(7)] = inst_56069__$1);
(statearr_56130[(8)] = inst_56070);
(statearr_56130[(14)] = inst_56082);
return statearr_56130;
})();var statearr_56131_56153 = state_56109__$1;(statearr_56131_56153[(2)] = null);
(statearr_56131_56153[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___56139,out))
;return ((function (switch__5678__auto__,c__5693__auto___56139,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_56135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56135[(0)] = state_machine__5679__auto__);
(statearr_56135[(1)] = (1));
return statearr_56135;
});
var state_machine__5679__auto____1 = (function (state_56109){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_56109);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e56136){if((e56136 instanceof Object))
{var ex__5682__auto__ = e56136;var statearr_56137_56154 = state_56109;(statearr_56137_56154[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56109);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56155 = state_56109;
state_56109 = G__56155;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_56109){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_56109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___56139,out))
})();var state__5695__auto__ = (function (){var statearr_56138 = f__5694__auto__.call(null);(statearr_56138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___56139);
return statearr_56138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___56139,out))
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

//# sourceMappingURL=async.js.map