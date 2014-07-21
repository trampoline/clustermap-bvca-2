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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t53585 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53585 = (function (f,fn_handler,meta53586){
this.f = f;
this.fn_handler = fn_handler;
this.meta53586 = meta53586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53585.cljs$lang$type = true;
cljs.core.async.t53585.cljs$lang$ctorStr = "cljs.core.async/t53585";
cljs.core.async.t53585.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53585");
});
cljs.core.async.t53585.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t53585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t53585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53587){var self__ = this;
var _53587__$1 = this;return self__.meta53586;
});
cljs.core.async.t53585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53587,meta53586__$1){var self__ = this;
var _53587__$1 = this;return (new cljs.core.async.t53585(self__.f,self__.fn_handler,meta53586__$1));
});
cljs.core.async.__GT_t53585 = (function __GT_t53585(f__$1,fn_handler__$1,meta53586){return (new cljs.core.async.t53585(f__$1,fn_handler__$1,meta53586));
});
}
return (new cljs.core.async.t53585(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__53589 = buff;if(G__53589)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__53589.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__53589.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__53589);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__53589);
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
{var val_53590 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_53590);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_53590,ret){
return (function (){return fn1.call(null,val_53590);
});})(val_53590,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___53591 = n;var x_53592 = (0);while(true){
if((x_53592 < n__4399__auto___53591))
{(a[x_53592] = (0));
{
var G__53593 = (x_53592 + (1));
x_53592 = G__53593;
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
var G__53594 = (i + (1));
i = G__53594;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t53598 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53598 = (function (flag,alt_flag,meta53599){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta53599 = meta53599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53598.cljs$lang$type = true;
cljs.core.async.t53598.cljs$lang$ctorStr = "cljs.core.async/t53598";
cljs.core.async.t53598.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53598");
});})(flag))
;
cljs.core.async.t53598.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53598.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t53598.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t53598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_53600){var self__ = this;
var _53600__$1 = this;return self__.meta53599;
});})(flag))
;
cljs.core.async.t53598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_53600,meta53599__$1){var self__ = this;
var _53600__$1 = this;return (new cljs.core.async.t53598(self__.flag,self__.alt_flag,meta53599__$1));
});})(flag))
;
cljs.core.async.__GT_t53598 = ((function (flag){
return (function __GT_t53598(flag__$1,alt_flag__$1,meta53599){return (new cljs.core.async.t53598(flag__$1,alt_flag__$1,meta53599));
});})(flag))
;
}
return (new cljs.core.async.t53598(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t53604 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53604 = (function (cb,flag,alt_handler,meta53605){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta53605 = meta53605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53604.cljs$lang$type = true;
cljs.core.async.t53604.cljs$lang$ctorStr = "cljs.core.async/t53604";
cljs.core.async.t53604.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53604");
});
cljs.core.async.t53604.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t53604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t53604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53606){var self__ = this;
var _53606__$1 = this;return self__.meta53605;
});
cljs.core.async.t53604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53606,meta53605__$1){var self__ = this;
var _53606__$1 = this;return (new cljs.core.async.t53604(self__.cb,self__.flag,self__.alt_handler,meta53605__$1));
});
cljs.core.async.__GT_t53604 = (function __GT_t53604(cb__$1,flag__$1,alt_handler__$1,meta53605){return (new cljs.core.async.t53604(cb__$1,flag__$1,alt_handler__$1,meta53605));
});
}
return (new cljs.core.async.t53604(cb,flag,alt_handler,null));
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
return (function (p1__53607_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53607_SHARP_,port], null));
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
var G__53608 = (i + (1));
i = G__53608;
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
var alts_BANG___delegate = function (ports,p__53609){var map__53611 = p__53609;var map__53611__$1 = ((cljs.core.seq_QMARK_.call(null,map__53611))?cljs.core.apply.call(null,cljs.core.hash_map,map__53611):map__53611);var opts = map__53611__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__53609 = null;if (arguments.length > 1) {
  p__53609 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__53609);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__53612){
var ports = cljs.core.first(arglist__53612);
var p__53609 = cljs.core.rest(arglist__53612);
return alts_BANG___delegate(ports,p__53609);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t53620 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53620 = (function (ch,f,map_LT_,meta53621){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta53621 = meta53621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53620.cljs$lang$type = true;
cljs.core.async.t53620.cljs$lang$ctorStr = "cljs.core.async/t53620";
cljs.core.async.t53620.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53620");
});
cljs.core.async.t53620.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t53620.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t53623 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53623 = (function (fn1,_,meta53621,ch,f,map_LT_,meta53624){
this.fn1 = fn1;
this._ = _;
this.meta53621 = meta53621;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta53624 = meta53624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53623.cljs$lang$type = true;
cljs.core.async.t53623.cljs$lang$ctorStr = "cljs.core.async/t53623";
cljs.core.async.t53623.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53623");
});})(___$1))
;
cljs.core.async.t53623.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t53623.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t53623.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t53623.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__53613_SHARP_){return f1.call(null,(((p1__53613_SHARP_ == null))?null:self__.f.call(null,p1__53613_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t53623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53625){var self__ = this;
var _53625__$1 = this;return self__.meta53624;
});})(___$1))
;
cljs.core.async.t53623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53625,meta53624__$1){var self__ = this;
var _53625__$1 = this;return (new cljs.core.async.t53623(self__.fn1,self__._,self__.meta53621,self__.ch,self__.f,self__.map_LT_,meta53624__$1));
});})(___$1))
;
cljs.core.async.__GT_t53623 = ((function (___$1){
return (function __GT_t53623(fn1__$1,___$2,meta53621__$1,ch__$2,f__$2,map_LT___$2,meta53624){return (new cljs.core.async.t53623(fn1__$1,___$2,meta53621__$1,ch__$2,f__$2,map_LT___$2,meta53624));
});})(___$1))
;
}
return (new cljs.core.async.t53623(fn1,___$1,self__.meta53621,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t53620.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53622){var self__ = this;
var _53622__$1 = this;return self__.meta53621;
});
cljs.core.async.t53620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53622,meta53621__$1){var self__ = this;
var _53622__$1 = this;return (new cljs.core.async.t53620(self__.ch,self__.f,self__.map_LT_,meta53621__$1));
});
cljs.core.async.__GT_t53620 = (function __GT_t53620(ch__$1,f__$1,map_LT___$1,meta53621){return (new cljs.core.async.t53620(ch__$1,f__$1,map_LT___$1,meta53621));
});
}
return (new cljs.core.async.t53620(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t53629 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53629 = (function (ch,f,map_GT_,meta53630){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta53630 = meta53630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53629.cljs$lang$type = true;
cljs.core.async.t53629.cljs$lang$ctorStr = "cljs.core.async/t53629";
cljs.core.async.t53629.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53629");
});
cljs.core.async.t53629.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t53629.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t53629.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53631){var self__ = this;
var _53631__$1 = this;return self__.meta53630;
});
cljs.core.async.t53629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53631,meta53630__$1){var self__ = this;
var _53631__$1 = this;return (new cljs.core.async.t53629(self__.ch,self__.f,self__.map_GT_,meta53630__$1));
});
cljs.core.async.__GT_t53629 = (function __GT_t53629(ch__$1,f__$1,map_GT___$1,meta53630){return (new cljs.core.async.t53629(ch__$1,f__$1,map_GT___$1,meta53630));
});
}
return (new cljs.core.async.t53629(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t53635 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53635 = (function (ch,p,filter_GT_,meta53636){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta53636 = meta53636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53635.cljs$lang$type = true;
cljs.core.async.t53635.cljs$lang$ctorStr = "cljs.core.async/t53635";
cljs.core.async.t53635.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53635");
});
cljs.core.async.t53635.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t53635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t53635.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t53635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t53635.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t53635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t53635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53637){var self__ = this;
var _53637__$1 = this;return self__.meta53636;
});
cljs.core.async.t53635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53637,meta53636__$1){var self__ = this;
var _53637__$1 = this;return (new cljs.core.async.t53635(self__.ch,self__.p,self__.filter_GT_,meta53636__$1));
});
cljs.core.async.__GT_t53635 = (function __GT_t53635(ch__$1,p__$1,filter_GT___$1,meta53636){return (new cljs.core.async.t53635(ch__$1,p__$1,filter_GT___$1,meta53636));
});
}
return (new cljs.core.async.t53635(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___53720 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53720,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53720,out){
return (function (state_53699){var state_val_53700 = (state_53699[(1)]);if((state_val_53700 === (7)))
{var inst_53695 = (state_53699[(2)]);var state_53699__$1 = state_53699;var statearr_53701_53721 = state_53699__$1;(statearr_53701_53721[(2)] = inst_53695);
(statearr_53701_53721[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53700 === (1)))
{var state_53699__$1 = state_53699;var statearr_53702_53722 = state_53699__$1;(statearr_53702_53722[(2)] = null);
(statearr_53702_53722[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53700 === (4)))
{var inst_53681 = (state_53699[(7)]);var inst_53681__$1 = (state_53699[(2)]);var inst_53682 = (inst_53681__$1 == null);var state_53699__$1 = (function (){var statearr_53703 = state_53699;(statearr_53703[(7)] = inst_53681__$1);
return statearr_53703;
})();if(cljs.core.truth_(inst_53682))
{var statearr_53704_53723 = state_53699__$1;(statearr_53704_53723[(1)] = (5));
} else
{var statearr_53705_53724 = state_53699__$1;(statearr_53705_53724[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53700 === (6)))
{var inst_53681 = (state_53699[(7)]);var inst_53686 = p.call(null,inst_53681);var state_53699__$1 = state_53699;if(cljs.core.truth_(inst_53686))
{var statearr_53706_53725 = state_53699__$1;(statearr_53706_53725[(1)] = (8));
} else
{var statearr_53707_53726 = state_53699__$1;(statearr_53707_53726[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53700 === (3)))
{var inst_53697 = (state_53699[(2)]);var state_53699__$1 = state_53699;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53699__$1,inst_53697);
} else
{if((state_val_53700 === (2)))
{var state_53699__$1 = state_53699;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53699__$1,(4),ch);
} else
{if((state_val_53700 === (11)))
{var inst_53689 = (state_53699[(2)]);var state_53699__$1 = state_53699;var statearr_53708_53727 = state_53699__$1;(statearr_53708_53727[(2)] = inst_53689);
(statearr_53708_53727[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53700 === (9)))
{var state_53699__$1 = state_53699;var statearr_53709_53728 = state_53699__$1;(statearr_53709_53728[(2)] = null);
(statearr_53709_53728[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53700 === (5)))
{var inst_53684 = cljs.core.async.close_BANG_.call(null,out);var state_53699__$1 = state_53699;var statearr_53710_53729 = state_53699__$1;(statearr_53710_53729[(2)] = inst_53684);
(statearr_53710_53729[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53700 === (10)))
{var inst_53692 = (state_53699[(2)]);var state_53699__$1 = (function (){var statearr_53711 = state_53699;(statearr_53711[(8)] = inst_53692);
return statearr_53711;
})();var statearr_53712_53730 = state_53699__$1;(statearr_53712_53730[(2)] = null);
(statearr_53712_53730[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53700 === (8)))
{var inst_53681 = (state_53699[(7)]);var state_53699__$1 = state_53699;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53699__$1,(11),out,inst_53681);
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
});})(c__5693__auto___53720,out))
;return ((function (switch__5678__auto__,c__5693__auto___53720,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53716 = [null,null,null,null,null,null,null,null,null];(statearr_53716[(0)] = state_machine__5679__auto__);
(statearr_53716[(1)] = (1));
return statearr_53716;
});
var state_machine__5679__auto____1 = (function (state_53699){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53699);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53717){if((e53717 instanceof Object))
{var ex__5682__auto__ = e53717;var statearr_53718_53731 = state_53699;(statearr_53718_53731[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53699);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53732 = state_53699;
state_53699 = G__53732;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53699){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53720,out))
})();var state__5695__auto__ = (function (){var statearr_53719 = f__5694__auto__.call(null);(statearr_53719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53720);
return statearr_53719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53720,out))
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
return (function (state_53884){var state_val_53885 = (state_53884[(1)]);if((state_val_53885 === (7)))
{var inst_53880 = (state_53884[(2)]);var state_53884__$1 = state_53884;var statearr_53886_53923 = state_53884__$1;(statearr_53886_53923[(2)] = inst_53880);
(statearr_53886_53923[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (20)))
{var inst_53855 = (state_53884[(7)]);var inst_53866 = (state_53884[(2)]);var inst_53867 = cljs.core.next.call(null,inst_53855);var inst_53841 = inst_53867;var inst_53842 = null;var inst_53843 = (0);var inst_53844 = (0);var state_53884__$1 = (function (){var statearr_53887 = state_53884;(statearr_53887[(8)] = inst_53844);
(statearr_53887[(9)] = inst_53843);
(statearr_53887[(10)] = inst_53866);
(statearr_53887[(11)] = inst_53842);
(statearr_53887[(12)] = inst_53841);
return statearr_53887;
})();var statearr_53888_53924 = state_53884__$1;(statearr_53888_53924[(2)] = null);
(statearr_53888_53924[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (1)))
{var state_53884__$1 = state_53884;var statearr_53889_53925 = state_53884__$1;(statearr_53889_53925[(2)] = null);
(statearr_53889_53925[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (4)))
{var inst_53830 = (state_53884[(13)]);var inst_53830__$1 = (state_53884[(2)]);var inst_53831 = (inst_53830__$1 == null);var state_53884__$1 = (function (){var statearr_53893 = state_53884;(statearr_53893[(13)] = inst_53830__$1);
return statearr_53893;
})();if(cljs.core.truth_(inst_53831))
{var statearr_53894_53926 = state_53884__$1;(statearr_53894_53926[(1)] = (5));
} else
{var statearr_53895_53927 = state_53884__$1;(statearr_53895_53927[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (15)))
{var state_53884__$1 = state_53884;var statearr_53896_53928 = state_53884__$1;(statearr_53896_53928[(2)] = null);
(statearr_53896_53928[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (13)))
{var inst_53844 = (state_53884[(8)]);var inst_53843 = (state_53884[(9)]);var inst_53842 = (state_53884[(11)]);var inst_53841 = (state_53884[(12)]);var inst_53851 = (state_53884[(2)]);var inst_53852 = (inst_53844 + (1));var tmp53890 = inst_53843;var tmp53891 = inst_53842;var tmp53892 = inst_53841;var inst_53841__$1 = tmp53892;var inst_53842__$1 = tmp53891;var inst_53843__$1 = tmp53890;var inst_53844__$1 = inst_53852;var state_53884__$1 = (function (){var statearr_53897 = state_53884;(statearr_53897[(14)] = inst_53851);
(statearr_53897[(8)] = inst_53844__$1);
(statearr_53897[(9)] = inst_53843__$1);
(statearr_53897[(11)] = inst_53842__$1);
(statearr_53897[(12)] = inst_53841__$1);
return statearr_53897;
})();var statearr_53898_53929 = state_53884__$1;(statearr_53898_53929[(2)] = null);
(statearr_53898_53929[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (6)))
{var inst_53830 = (state_53884[(13)]);var inst_53835 = f.call(null,inst_53830);var inst_53840 = cljs.core.seq.call(null,inst_53835);var inst_53841 = inst_53840;var inst_53842 = null;var inst_53843 = (0);var inst_53844 = (0);var state_53884__$1 = (function (){var statearr_53899 = state_53884;(statearr_53899[(8)] = inst_53844);
(statearr_53899[(9)] = inst_53843);
(statearr_53899[(11)] = inst_53842);
(statearr_53899[(12)] = inst_53841);
return statearr_53899;
})();var statearr_53900_53930 = state_53884__$1;(statearr_53900_53930[(2)] = null);
(statearr_53900_53930[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (17)))
{var inst_53855 = (state_53884[(7)]);var inst_53859 = cljs.core.chunk_first.call(null,inst_53855);var inst_53860 = cljs.core.chunk_rest.call(null,inst_53855);var inst_53861 = cljs.core.count.call(null,inst_53859);var inst_53841 = inst_53860;var inst_53842 = inst_53859;var inst_53843 = inst_53861;var inst_53844 = (0);var state_53884__$1 = (function (){var statearr_53901 = state_53884;(statearr_53901[(8)] = inst_53844);
(statearr_53901[(9)] = inst_53843);
(statearr_53901[(11)] = inst_53842);
(statearr_53901[(12)] = inst_53841);
return statearr_53901;
})();var statearr_53902_53931 = state_53884__$1;(statearr_53902_53931[(2)] = null);
(statearr_53902_53931[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (3)))
{var inst_53882 = (state_53884[(2)]);var state_53884__$1 = state_53884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53884__$1,inst_53882);
} else
{if((state_val_53885 === (12)))
{var inst_53875 = (state_53884[(2)]);var state_53884__$1 = state_53884;var statearr_53903_53932 = state_53884__$1;(statearr_53903_53932[(2)] = inst_53875);
(statearr_53903_53932[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (2)))
{var state_53884__$1 = state_53884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53884__$1,(4),in$);
} else
{if((state_val_53885 === (19)))
{var inst_53870 = (state_53884[(2)]);var state_53884__$1 = state_53884;var statearr_53904_53933 = state_53884__$1;(statearr_53904_53933[(2)] = inst_53870);
(statearr_53904_53933[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (11)))
{var inst_53855 = (state_53884[(7)]);var inst_53841 = (state_53884[(12)]);var inst_53855__$1 = cljs.core.seq.call(null,inst_53841);var state_53884__$1 = (function (){var statearr_53905 = state_53884;(statearr_53905[(7)] = inst_53855__$1);
return statearr_53905;
})();if(inst_53855__$1)
{var statearr_53906_53934 = state_53884__$1;(statearr_53906_53934[(1)] = (14));
} else
{var statearr_53907_53935 = state_53884__$1;(statearr_53907_53935[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (9)))
{var inst_53877 = (state_53884[(2)]);var state_53884__$1 = (function (){var statearr_53908 = state_53884;(statearr_53908[(15)] = inst_53877);
return statearr_53908;
})();var statearr_53909_53936 = state_53884__$1;(statearr_53909_53936[(2)] = null);
(statearr_53909_53936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (5)))
{var inst_53833 = cljs.core.async.close_BANG_.call(null,out);var state_53884__$1 = state_53884;var statearr_53910_53937 = state_53884__$1;(statearr_53910_53937[(2)] = inst_53833);
(statearr_53910_53937[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (14)))
{var inst_53855 = (state_53884[(7)]);var inst_53857 = cljs.core.chunked_seq_QMARK_.call(null,inst_53855);var state_53884__$1 = state_53884;if(inst_53857)
{var statearr_53911_53938 = state_53884__$1;(statearr_53911_53938[(1)] = (17));
} else
{var statearr_53912_53939 = state_53884__$1;(statearr_53912_53939[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (16)))
{var inst_53873 = (state_53884[(2)]);var state_53884__$1 = state_53884;var statearr_53913_53940 = state_53884__$1;(statearr_53913_53940[(2)] = inst_53873);
(statearr_53913_53940[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53885 === (10)))
{var inst_53844 = (state_53884[(8)]);var inst_53842 = (state_53884[(11)]);var inst_53849 = cljs.core._nth.call(null,inst_53842,inst_53844);var state_53884__$1 = state_53884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53884__$1,(13),out,inst_53849);
} else
{if((state_val_53885 === (18)))
{var inst_53855 = (state_53884[(7)]);var inst_53864 = cljs.core.first.call(null,inst_53855);var state_53884__$1 = state_53884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53884__$1,(20),out,inst_53864);
} else
{if((state_val_53885 === (8)))
{var inst_53844 = (state_53884[(8)]);var inst_53843 = (state_53884[(9)]);var inst_53846 = (inst_53844 < inst_53843);var inst_53847 = inst_53846;var state_53884__$1 = state_53884;if(cljs.core.truth_(inst_53847))
{var statearr_53914_53941 = state_53884__$1;(statearr_53914_53941[(1)] = (10));
} else
{var statearr_53915_53942 = state_53884__$1;(statearr_53915_53942[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_53919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53919[(0)] = state_machine__5679__auto__);
(statearr_53919[(1)] = (1));
return statearr_53919;
});
var state_machine__5679__auto____1 = (function (state_53884){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53884);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53920){if((e53920 instanceof Object))
{var ex__5682__auto__ = e53920;var statearr_53921_53943 = state_53884;(statearr_53921_53943[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53944 = state_53884;
state_53884 = G__53944;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53884){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_53922 = f__5694__auto__.call(null);(statearr_53922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_53922;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___54025 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54025){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54025){
return (function (state_54004){var state_val_54005 = (state_54004[(1)]);if((state_val_54005 === (7)))
{var inst_54000 = (state_54004[(2)]);var state_54004__$1 = state_54004;var statearr_54006_54026 = state_54004__$1;(statearr_54006_54026[(2)] = inst_54000);
(statearr_54006_54026[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54005 === (1)))
{var state_54004__$1 = state_54004;var statearr_54007_54027 = state_54004__$1;(statearr_54007_54027[(2)] = null);
(statearr_54007_54027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54005 === (4)))
{var inst_53987 = (state_54004[(7)]);var inst_53987__$1 = (state_54004[(2)]);var inst_53988 = (inst_53987__$1 == null);var state_54004__$1 = (function (){var statearr_54008 = state_54004;(statearr_54008[(7)] = inst_53987__$1);
return statearr_54008;
})();if(cljs.core.truth_(inst_53988))
{var statearr_54009_54028 = state_54004__$1;(statearr_54009_54028[(1)] = (5));
} else
{var statearr_54010_54029 = state_54004__$1;(statearr_54010_54029[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54005 === (6)))
{var inst_53987 = (state_54004[(7)]);var state_54004__$1 = state_54004;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54004__$1,(11),to,inst_53987);
} else
{if((state_val_54005 === (3)))
{var inst_54002 = (state_54004[(2)]);var state_54004__$1 = state_54004;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54004__$1,inst_54002);
} else
{if((state_val_54005 === (2)))
{var state_54004__$1 = state_54004;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54004__$1,(4),from);
} else
{if((state_val_54005 === (11)))
{var inst_53997 = (state_54004[(2)]);var state_54004__$1 = (function (){var statearr_54011 = state_54004;(statearr_54011[(8)] = inst_53997);
return statearr_54011;
})();var statearr_54012_54030 = state_54004__$1;(statearr_54012_54030[(2)] = null);
(statearr_54012_54030[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54005 === (9)))
{var state_54004__$1 = state_54004;var statearr_54013_54031 = state_54004__$1;(statearr_54013_54031[(2)] = null);
(statearr_54013_54031[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54005 === (5)))
{var state_54004__$1 = state_54004;if(cljs.core.truth_(close_QMARK_))
{var statearr_54014_54032 = state_54004__$1;(statearr_54014_54032[(1)] = (8));
} else
{var statearr_54015_54033 = state_54004__$1;(statearr_54015_54033[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54005 === (10)))
{var inst_53994 = (state_54004[(2)]);var state_54004__$1 = state_54004;var statearr_54016_54034 = state_54004__$1;(statearr_54016_54034[(2)] = inst_53994);
(statearr_54016_54034[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54005 === (8)))
{var inst_53991 = cljs.core.async.close_BANG_.call(null,to);var state_54004__$1 = state_54004;var statearr_54017_54035 = state_54004__$1;(statearr_54017_54035[(2)] = inst_53991);
(statearr_54017_54035[(1)] = (10));
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
});})(c__5693__auto___54025))
;return ((function (switch__5678__auto__,c__5693__auto___54025){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54021 = [null,null,null,null,null,null,null,null,null];(statearr_54021[(0)] = state_machine__5679__auto__);
(statearr_54021[(1)] = (1));
return statearr_54021;
});
var state_machine__5679__auto____1 = (function (state_54004){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54004);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54022){if((e54022 instanceof Object))
{var ex__5682__auto__ = e54022;var statearr_54023_54036 = state_54004;(statearr_54023_54036[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54004);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54037 = state_54004;
state_54004 = G__54037;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54004){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54025))
})();var state__5695__auto__ = (function (){var statearr_54024 = f__5694__auto__.call(null);(statearr_54024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54025);
return statearr_54024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54025))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___54124 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54124,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54124,tc,fc){
return (function (state_54102){var state_val_54103 = (state_54102[(1)]);if((state_val_54103 === (7)))
{var inst_54098 = (state_54102[(2)]);var state_54102__$1 = state_54102;var statearr_54104_54125 = state_54102__$1;(statearr_54104_54125[(2)] = inst_54098);
(statearr_54104_54125[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54103 === (1)))
{var state_54102__$1 = state_54102;var statearr_54105_54126 = state_54102__$1;(statearr_54105_54126[(2)] = null);
(statearr_54105_54126[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54103 === (4)))
{var inst_54083 = (state_54102[(7)]);var inst_54083__$1 = (state_54102[(2)]);var inst_54084 = (inst_54083__$1 == null);var state_54102__$1 = (function (){var statearr_54106 = state_54102;(statearr_54106[(7)] = inst_54083__$1);
return statearr_54106;
})();if(cljs.core.truth_(inst_54084))
{var statearr_54107_54127 = state_54102__$1;(statearr_54107_54127[(1)] = (5));
} else
{var statearr_54108_54128 = state_54102__$1;(statearr_54108_54128[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54103 === (6)))
{var inst_54083 = (state_54102[(7)]);var inst_54089 = p.call(null,inst_54083);var state_54102__$1 = state_54102;if(cljs.core.truth_(inst_54089))
{var statearr_54109_54129 = state_54102__$1;(statearr_54109_54129[(1)] = (9));
} else
{var statearr_54110_54130 = state_54102__$1;(statearr_54110_54130[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54103 === (3)))
{var inst_54100 = (state_54102[(2)]);var state_54102__$1 = state_54102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54102__$1,inst_54100);
} else
{if((state_val_54103 === (2)))
{var state_54102__$1 = state_54102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54102__$1,(4),ch);
} else
{if((state_val_54103 === (11)))
{var inst_54083 = (state_54102[(7)]);var inst_54093 = (state_54102[(2)]);var state_54102__$1 = state_54102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54102__$1,(8),inst_54093,inst_54083);
} else
{if((state_val_54103 === (9)))
{var state_54102__$1 = state_54102;var statearr_54111_54131 = state_54102__$1;(statearr_54111_54131[(2)] = tc);
(statearr_54111_54131[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54103 === (5)))
{var inst_54086 = cljs.core.async.close_BANG_.call(null,tc);var inst_54087 = cljs.core.async.close_BANG_.call(null,fc);var state_54102__$1 = (function (){var statearr_54112 = state_54102;(statearr_54112[(8)] = inst_54086);
return statearr_54112;
})();var statearr_54113_54132 = state_54102__$1;(statearr_54113_54132[(2)] = inst_54087);
(statearr_54113_54132[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54103 === (10)))
{var state_54102__$1 = state_54102;var statearr_54114_54133 = state_54102__$1;(statearr_54114_54133[(2)] = fc);
(statearr_54114_54133[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54103 === (8)))
{var inst_54095 = (state_54102[(2)]);var state_54102__$1 = (function (){var statearr_54115 = state_54102;(statearr_54115[(9)] = inst_54095);
return statearr_54115;
})();var statearr_54116_54134 = state_54102__$1;(statearr_54116_54134[(2)] = null);
(statearr_54116_54134[(1)] = (2));
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
});})(c__5693__auto___54124,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___54124,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54120 = [null,null,null,null,null,null,null,null,null,null];(statearr_54120[(0)] = state_machine__5679__auto__);
(statearr_54120[(1)] = (1));
return statearr_54120;
});
var state_machine__5679__auto____1 = (function (state_54102){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54102);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54121){if((e54121 instanceof Object))
{var ex__5682__auto__ = e54121;var statearr_54122_54135 = state_54102;(statearr_54122_54135[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54136 = state_54102;
state_54102 = G__54136;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54102){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54124,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_54123 = f__5694__auto__.call(null);(statearr_54123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54124);
return statearr_54123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54124,tc,fc))
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
return (function (state_54183){var state_val_54184 = (state_54183[(1)]);if((state_val_54184 === (7)))
{var inst_54179 = (state_54183[(2)]);var state_54183__$1 = state_54183;var statearr_54185_54201 = state_54183__$1;(statearr_54185_54201[(2)] = inst_54179);
(statearr_54185_54201[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54184 === (6)))
{var inst_54172 = (state_54183[(7)]);var inst_54169 = (state_54183[(8)]);var inst_54176 = f.call(null,inst_54169,inst_54172);var inst_54169__$1 = inst_54176;var state_54183__$1 = (function (){var statearr_54186 = state_54183;(statearr_54186[(8)] = inst_54169__$1);
return statearr_54186;
})();var statearr_54187_54202 = state_54183__$1;(statearr_54187_54202[(2)] = null);
(statearr_54187_54202[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54184 === (5)))
{var inst_54169 = (state_54183[(8)]);var state_54183__$1 = state_54183;var statearr_54188_54203 = state_54183__$1;(statearr_54188_54203[(2)] = inst_54169);
(statearr_54188_54203[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54184 === (4)))
{var inst_54172 = (state_54183[(7)]);var inst_54172__$1 = (state_54183[(2)]);var inst_54173 = (inst_54172__$1 == null);var state_54183__$1 = (function (){var statearr_54189 = state_54183;(statearr_54189[(7)] = inst_54172__$1);
return statearr_54189;
})();if(cljs.core.truth_(inst_54173))
{var statearr_54190_54204 = state_54183__$1;(statearr_54190_54204[(1)] = (5));
} else
{var statearr_54191_54205 = state_54183__$1;(statearr_54191_54205[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54184 === (3)))
{var inst_54181 = (state_54183[(2)]);var state_54183__$1 = state_54183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54183__$1,inst_54181);
} else
{if((state_val_54184 === (2)))
{var state_54183__$1 = state_54183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54183__$1,(4),ch);
} else
{if((state_val_54184 === (1)))
{var inst_54169 = init;var state_54183__$1 = (function (){var statearr_54192 = state_54183;(statearr_54192[(8)] = inst_54169);
return statearr_54192;
})();var statearr_54193_54206 = state_54183__$1;(statearr_54193_54206[(2)] = null);
(statearr_54193_54206[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_54197 = [null,null,null,null,null,null,null,null,null];(statearr_54197[(0)] = state_machine__5679__auto__);
(statearr_54197[(1)] = (1));
return statearr_54197;
});
var state_machine__5679__auto____1 = (function (state_54183){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54183);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54198){if((e54198 instanceof Object))
{var ex__5682__auto__ = e54198;var statearr_54199_54207 = state_54183;(statearr_54199_54207[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54183);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54208 = state_54183;
state_54183 = G__54208;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54183){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_54200 = f__5694__auto__.call(null);(statearr_54200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_54200;
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
return (function (state_54270){var state_val_54271 = (state_54270[(1)]);if((state_val_54271 === (7)))
{var inst_54251 = (state_54270[(7)]);var inst_54256 = (state_54270[(2)]);var inst_54257 = cljs.core.next.call(null,inst_54251);var inst_54251__$1 = inst_54257;var state_54270__$1 = (function (){var statearr_54272 = state_54270;(statearr_54272[(7)] = inst_54251__$1);
(statearr_54272[(8)] = inst_54256);
return statearr_54272;
})();var statearr_54273_54291 = state_54270__$1;(statearr_54273_54291[(2)] = null);
(statearr_54273_54291[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54271 === (1)))
{var inst_54250 = cljs.core.seq.call(null,coll);var inst_54251 = inst_54250;var state_54270__$1 = (function (){var statearr_54274 = state_54270;(statearr_54274[(7)] = inst_54251);
return statearr_54274;
})();var statearr_54275_54292 = state_54270__$1;(statearr_54275_54292[(2)] = null);
(statearr_54275_54292[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54271 === (4)))
{var inst_54251 = (state_54270[(7)]);var inst_54254 = cljs.core.first.call(null,inst_54251);var state_54270__$1 = state_54270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54270__$1,(7),ch,inst_54254);
} else
{if((state_val_54271 === (6)))
{var inst_54266 = (state_54270[(2)]);var state_54270__$1 = state_54270;var statearr_54276_54293 = state_54270__$1;(statearr_54276_54293[(2)] = inst_54266);
(statearr_54276_54293[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54271 === (3)))
{var inst_54268 = (state_54270[(2)]);var state_54270__$1 = state_54270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54270__$1,inst_54268);
} else
{if((state_val_54271 === (2)))
{var inst_54251 = (state_54270[(7)]);var state_54270__$1 = state_54270;if(cljs.core.truth_(inst_54251))
{var statearr_54277_54294 = state_54270__$1;(statearr_54277_54294[(1)] = (4));
} else
{var statearr_54278_54295 = state_54270__$1;(statearr_54278_54295[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54271 === (9)))
{var state_54270__$1 = state_54270;var statearr_54279_54296 = state_54270__$1;(statearr_54279_54296[(2)] = null);
(statearr_54279_54296[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54271 === (5)))
{var state_54270__$1 = state_54270;if(cljs.core.truth_(close_QMARK_))
{var statearr_54280_54297 = state_54270__$1;(statearr_54280_54297[(1)] = (8));
} else
{var statearr_54281_54298 = state_54270__$1;(statearr_54281_54298[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54271 === (10)))
{var inst_54264 = (state_54270[(2)]);var state_54270__$1 = state_54270;var statearr_54282_54299 = state_54270__$1;(statearr_54282_54299[(2)] = inst_54264);
(statearr_54282_54299[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54271 === (8)))
{var inst_54261 = cljs.core.async.close_BANG_.call(null,ch);var state_54270__$1 = state_54270;var statearr_54283_54300 = state_54270__$1;(statearr_54283_54300[(2)] = inst_54261);
(statearr_54283_54300[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_54287 = [null,null,null,null,null,null,null,null,null];(statearr_54287[(0)] = state_machine__5679__auto__);
(statearr_54287[(1)] = (1));
return statearr_54287;
});
var state_machine__5679__auto____1 = (function (state_54270){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54270);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54288){if((e54288 instanceof Object))
{var ex__5682__auto__ = e54288;var statearr_54289_54301 = state_54270;(statearr_54289_54301[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54270);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54302 = state_54270;
state_54270 = G__54302;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54270){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_54290 = f__5694__auto__.call(null);(statearr_54290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_54290;
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
cljs.core.async.Mux = (function (){var obj54304 = {};return obj54304;
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
cljs.core.async.Mult = (function (){var obj54306 = {};return obj54306;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t54530 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54530 = (function (cs,ch,mult,meta54531){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta54531 = meta54531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54530.cljs$lang$type = true;
cljs.core.async.t54530.cljs$lang$ctorStr = "cljs.core.async/t54530";
cljs.core.async.t54530.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t54530");
});})(cs))
;
cljs.core.async.t54530.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t54530.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t54530.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t54530.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t54530.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54530.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t54530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_54532){var self__ = this;
var _54532__$1 = this;return self__.meta54531;
});})(cs))
;
cljs.core.async.t54530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_54532,meta54531__$1){var self__ = this;
var _54532__$1 = this;return (new cljs.core.async.t54530(self__.cs,self__.ch,self__.mult,meta54531__$1));
});})(cs))
;
cljs.core.async.__GT_t54530 = ((function (cs){
return (function __GT_t54530(cs__$1,ch__$1,mult__$1,meta54531){return (new cljs.core.async.t54530(cs__$1,ch__$1,mult__$1,meta54531));
});})(cs))
;
}
return (new cljs.core.async.t54530(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___54753 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54753,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54753,cs,m,dchan,dctr,done){
return (function (state_54667){var state_val_54668 = (state_54667[(1)]);if((state_val_54668 === (7)))
{var inst_54663 = (state_54667[(2)]);var state_54667__$1 = state_54667;var statearr_54669_54754 = state_54667__$1;(statearr_54669_54754[(2)] = inst_54663);
(statearr_54669_54754[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (20)))
{var inst_54564 = (state_54667[(7)]);var inst_54574 = cljs.core.first.call(null,inst_54564);var inst_54575 = cljs.core.nth.call(null,inst_54574,(0),null);var inst_54576 = cljs.core.nth.call(null,inst_54574,(1),null);var state_54667__$1 = (function (){var statearr_54670 = state_54667;(statearr_54670[(8)] = inst_54575);
return statearr_54670;
})();if(cljs.core.truth_(inst_54576))
{var statearr_54671_54755 = state_54667__$1;(statearr_54671_54755[(1)] = (22));
} else
{var statearr_54672_54756 = state_54667__$1;(statearr_54672_54756[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (27)))
{var inst_54606 = (state_54667[(9)]);var inst_54604 = (state_54667[(10)]);var inst_54611 = cljs.core._nth.call(null,inst_54604,inst_54606);var state_54667__$1 = (function (){var statearr_54673 = state_54667;(statearr_54673[(11)] = inst_54611);
return statearr_54673;
})();var statearr_54674_54757 = state_54667__$1;(statearr_54674_54757[(2)] = null);
(statearr_54674_54757[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (1)))
{var state_54667__$1 = state_54667;var statearr_54675_54758 = state_54667__$1;(statearr_54675_54758[(2)] = null);
(statearr_54675_54758[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (24)))
{var inst_54564 = (state_54667[(7)]);var inst_54581 = (state_54667[(2)]);var inst_54582 = cljs.core.next.call(null,inst_54564);var inst_54544 = inst_54582;var inst_54545 = null;var inst_54546 = (0);var inst_54547 = (0);var state_54667__$1 = (function (){var statearr_54676 = state_54667;(statearr_54676[(12)] = inst_54581);
(statearr_54676[(13)] = inst_54547);
(statearr_54676[(14)] = inst_54545);
(statearr_54676[(15)] = inst_54544);
(statearr_54676[(16)] = inst_54546);
return statearr_54676;
})();var statearr_54677_54759 = state_54667__$1;(statearr_54677_54759[(2)] = null);
(statearr_54677_54759[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (39)))
{var inst_54624 = (state_54667[(17)]);var inst_54642 = (state_54667[(2)]);var inst_54643 = cljs.core.next.call(null,inst_54624);var inst_54603 = inst_54643;var inst_54604 = null;var inst_54605 = (0);var inst_54606 = (0);var state_54667__$1 = (function (){var statearr_54681 = state_54667;(statearr_54681[(18)] = inst_54603);
(statearr_54681[(9)] = inst_54606);
(statearr_54681[(19)] = inst_54605);
(statearr_54681[(10)] = inst_54604);
(statearr_54681[(20)] = inst_54642);
return statearr_54681;
})();var statearr_54682_54760 = state_54667__$1;(statearr_54682_54760[(2)] = null);
(statearr_54682_54760[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (4)))
{var inst_54535 = (state_54667[(21)]);var inst_54535__$1 = (state_54667[(2)]);var inst_54536 = (inst_54535__$1 == null);var state_54667__$1 = (function (){var statearr_54683 = state_54667;(statearr_54683[(21)] = inst_54535__$1);
return statearr_54683;
})();if(cljs.core.truth_(inst_54536))
{var statearr_54684_54761 = state_54667__$1;(statearr_54684_54761[(1)] = (5));
} else
{var statearr_54685_54762 = state_54667__$1;(statearr_54685_54762[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (15)))
{var inst_54547 = (state_54667[(13)]);var inst_54545 = (state_54667[(14)]);var inst_54544 = (state_54667[(15)]);var inst_54546 = (state_54667[(16)]);var inst_54560 = (state_54667[(2)]);var inst_54561 = (inst_54547 + (1));var tmp54678 = inst_54545;var tmp54679 = inst_54544;var tmp54680 = inst_54546;var inst_54544__$1 = tmp54679;var inst_54545__$1 = tmp54678;var inst_54546__$1 = tmp54680;var inst_54547__$1 = inst_54561;var state_54667__$1 = (function (){var statearr_54686 = state_54667;(statearr_54686[(13)] = inst_54547__$1);
(statearr_54686[(14)] = inst_54545__$1);
(statearr_54686[(15)] = inst_54544__$1);
(statearr_54686[(16)] = inst_54546__$1);
(statearr_54686[(22)] = inst_54560);
return statearr_54686;
})();var statearr_54687_54763 = state_54667__$1;(statearr_54687_54763[(2)] = null);
(statearr_54687_54763[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (21)))
{var inst_54585 = (state_54667[(2)]);var state_54667__$1 = state_54667;var statearr_54688_54764 = state_54667__$1;(statearr_54688_54764[(2)] = inst_54585);
(statearr_54688_54764[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (31)))
{var inst_54611 = (state_54667[(11)]);var inst_54612 = (state_54667[(2)]);var inst_54613 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_54614 = cljs.core.async.untap_STAR_.call(null,m,inst_54611);var state_54667__$1 = (function (){var statearr_54689 = state_54667;(statearr_54689[(23)] = inst_54612);
(statearr_54689[(24)] = inst_54613);
return statearr_54689;
})();var statearr_54690_54765 = state_54667__$1;(statearr_54690_54765[(2)] = inst_54614);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54667__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (32)))
{var inst_54535 = (state_54667[(21)]);var inst_54611 = (state_54667[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54667,(31),Object,null,(30));var inst_54618 = cljs.core.async.put_BANG_.call(null,inst_54611,inst_54535,done);var state_54667__$1 = state_54667;var statearr_54691_54766 = state_54667__$1;(statearr_54691_54766[(2)] = inst_54618);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54667__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (40)))
{var inst_54633 = (state_54667[(25)]);var inst_54634 = (state_54667[(2)]);var inst_54635 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_54636 = cljs.core.async.untap_STAR_.call(null,m,inst_54633);var state_54667__$1 = (function (){var statearr_54692 = state_54667;(statearr_54692[(26)] = inst_54635);
(statearr_54692[(27)] = inst_54634);
return statearr_54692;
})();var statearr_54693_54767 = state_54667__$1;(statearr_54693_54767[(2)] = inst_54636);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54667__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (33)))
{var inst_54624 = (state_54667[(17)]);var inst_54626 = cljs.core.chunked_seq_QMARK_.call(null,inst_54624);var state_54667__$1 = state_54667;if(inst_54626)
{var statearr_54694_54768 = state_54667__$1;(statearr_54694_54768[(1)] = (36));
} else
{var statearr_54695_54769 = state_54667__$1;(statearr_54695_54769[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (13)))
{var inst_54554 = (state_54667[(28)]);var inst_54557 = cljs.core.async.close_BANG_.call(null,inst_54554);var state_54667__$1 = state_54667;var statearr_54696_54770 = state_54667__$1;(statearr_54696_54770[(2)] = inst_54557);
(statearr_54696_54770[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (22)))
{var inst_54575 = (state_54667[(8)]);var inst_54578 = cljs.core.async.close_BANG_.call(null,inst_54575);var state_54667__$1 = state_54667;var statearr_54697_54771 = state_54667__$1;(statearr_54697_54771[(2)] = inst_54578);
(statearr_54697_54771[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (36)))
{var inst_54624 = (state_54667[(17)]);var inst_54628 = cljs.core.chunk_first.call(null,inst_54624);var inst_54629 = cljs.core.chunk_rest.call(null,inst_54624);var inst_54630 = cljs.core.count.call(null,inst_54628);var inst_54603 = inst_54629;var inst_54604 = inst_54628;var inst_54605 = inst_54630;var inst_54606 = (0);var state_54667__$1 = (function (){var statearr_54698 = state_54667;(statearr_54698[(18)] = inst_54603);
(statearr_54698[(9)] = inst_54606);
(statearr_54698[(19)] = inst_54605);
(statearr_54698[(10)] = inst_54604);
return statearr_54698;
})();var statearr_54699_54772 = state_54667__$1;(statearr_54699_54772[(2)] = null);
(statearr_54699_54772[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (41)))
{var inst_54535 = (state_54667[(21)]);var inst_54633 = (state_54667[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54667,(40),Object,null,(39));var inst_54640 = cljs.core.async.put_BANG_.call(null,inst_54633,inst_54535,done);var state_54667__$1 = state_54667;var statearr_54700_54773 = state_54667__$1;(statearr_54700_54773[(2)] = inst_54640);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54667__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (43)))
{var state_54667__$1 = state_54667;var statearr_54701_54774 = state_54667__$1;(statearr_54701_54774[(2)] = null);
(statearr_54701_54774[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (29)))
{var inst_54651 = (state_54667[(2)]);var state_54667__$1 = state_54667;var statearr_54702_54775 = state_54667__$1;(statearr_54702_54775[(2)] = inst_54651);
(statearr_54702_54775[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (44)))
{var inst_54660 = (state_54667[(2)]);var state_54667__$1 = (function (){var statearr_54703 = state_54667;(statearr_54703[(29)] = inst_54660);
return statearr_54703;
})();var statearr_54704_54776 = state_54667__$1;(statearr_54704_54776[(2)] = null);
(statearr_54704_54776[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (6)))
{var inst_54595 = (state_54667[(30)]);var inst_54594 = cljs.core.deref.call(null,cs);var inst_54595__$1 = cljs.core.keys.call(null,inst_54594);var inst_54596 = cljs.core.count.call(null,inst_54595__$1);var inst_54597 = cljs.core.reset_BANG_.call(null,dctr,inst_54596);var inst_54602 = cljs.core.seq.call(null,inst_54595__$1);var inst_54603 = inst_54602;var inst_54604 = null;var inst_54605 = (0);var inst_54606 = (0);var state_54667__$1 = (function (){var statearr_54705 = state_54667;(statearr_54705[(18)] = inst_54603);
(statearr_54705[(31)] = inst_54597);
(statearr_54705[(9)] = inst_54606);
(statearr_54705[(19)] = inst_54605);
(statearr_54705[(10)] = inst_54604);
(statearr_54705[(30)] = inst_54595__$1);
return statearr_54705;
})();var statearr_54706_54777 = state_54667__$1;(statearr_54706_54777[(2)] = null);
(statearr_54706_54777[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (28)))
{var inst_54603 = (state_54667[(18)]);var inst_54624 = (state_54667[(17)]);var inst_54624__$1 = cljs.core.seq.call(null,inst_54603);var state_54667__$1 = (function (){var statearr_54707 = state_54667;(statearr_54707[(17)] = inst_54624__$1);
return statearr_54707;
})();if(inst_54624__$1)
{var statearr_54708_54778 = state_54667__$1;(statearr_54708_54778[(1)] = (33));
} else
{var statearr_54709_54779 = state_54667__$1;(statearr_54709_54779[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (25)))
{var inst_54606 = (state_54667[(9)]);var inst_54605 = (state_54667[(19)]);var inst_54608 = (inst_54606 < inst_54605);var inst_54609 = inst_54608;var state_54667__$1 = state_54667;if(cljs.core.truth_(inst_54609))
{var statearr_54710_54780 = state_54667__$1;(statearr_54710_54780[(1)] = (27));
} else
{var statearr_54711_54781 = state_54667__$1;(statearr_54711_54781[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (34)))
{var state_54667__$1 = state_54667;var statearr_54712_54782 = state_54667__$1;(statearr_54712_54782[(2)] = null);
(statearr_54712_54782[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (17)))
{var state_54667__$1 = state_54667;var statearr_54713_54783 = state_54667__$1;(statearr_54713_54783[(2)] = null);
(statearr_54713_54783[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (3)))
{var inst_54665 = (state_54667[(2)]);var state_54667__$1 = state_54667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54667__$1,inst_54665);
} else
{if((state_val_54668 === (12)))
{var inst_54590 = (state_54667[(2)]);var state_54667__$1 = state_54667;var statearr_54714_54784 = state_54667__$1;(statearr_54714_54784[(2)] = inst_54590);
(statearr_54714_54784[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (2)))
{var state_54667__$1 = state_54667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54667__$1,(4),ch);
} else
{if((state_val_54668 === (23)))
{var state_54667__$1 = state_54667;var statearr_54715_54785 = state_54667__$1;(statearr_54715_54785[(2)] = null);
(statearr_54715_54785[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (35)))
{var inst_54649 = (state_54667[(2)]);var state_54667__$1 = state_54667;var statearr_54716_54786 = state_54667__$1;(statearr_54716_54786[(2)] = inst_54649);
(statearr_54716_54786[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (19)))
{var inst_54564 = (state_54667[(7)]);var inst_54568 = cljs.core.chunk_first.call(null,inst_54564);var inst_54569 = cljs.core.chunk_rest.call(null,inst_54564);var inst_54570 = cljs.core.count.call(null,inst_54568);var inst_54544 = inst_54569;var inst_54545 = inst_54568;var inst_54546 = inst_54570;var inst_54547 = (0);var state_54667__$1 = (function (){var statearr_54717 = state_54667;(statearr_54717[(13)] = inst_54547);
(statearr_54717[(14)] = inst_54545);
(statearr_54717[(15)] = inst_54544);
(statearr_54717[(16)] = inst_54546);
return statearr_54717;
})();var statearr_54718_54787 = state_54667__$1;(statearr_54718_54787[(2)] = null);
(statearr_54718_54787[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (11)))
{var inst_54544 = (state_54667[(15)]);var inst_54564 = (state_54667[(7)]);var inst_54564__$1 = cljs.core.seq.call(null,inst_54544);var state_54667__$1 = (function (){var statearr_54719 = state_54667;(statearr_54719[(7)] = inst_54564__$1);
return statearr_54719;
})();if(inst_54564__$1)
{var statearr_54720_54788 = state_54667__$1;(statearr_54720_54788[(1)] = (16));
} else
{var statearr_54721_54789 = state_54667__$1;(statearr_54721_54789[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (9)))
{var inst_54592 = (state_54667[(2)]);var state_54667__$1 = state_54667;var statearr_54722_54790 = state_54667__$1;(statearr_54722_54790[(2)] = inst_54592);
(statearr_54722_54790[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (5)))
{var inst_54542 = cljs.core.deref.call(null,cs);var inst_54543 = cljs.core.seq.call(null,inst_54542);var inst_54544 = inst_54543;var inst_54545 = null;var inst_54546 = (0);var inst_54547 = (0);var state_54667__$1 = (function (){var statearr_54723 = state_54667;(statearr_54723[(13)] = inst_54547);
(statearr_54723[(14)] = inst_54545);
(statearr_54723[(15)] = inst_54544);
(statearr_54723[(16)] = inst_54546);
return statearr_54723;
})();var statearr_54724_54791 = state_54667__$1;(statearr_54724_54791[(2)] = null);
(statearr_54724_54791[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (14)))
{var state_54667__$1 = state_54667;var statearr_54725_54792 = state_54667__$1;(statearr_54725_54792[(2)] = null);
(statearr_54725_54792[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (45)))
{var inst_54657 = (state_54667[(2)]);var state_54667__$1 = state_54667;var statearr_54726_54793 = state_54667__$1;(statearr_54726_54793[(2)] = inst_54657);
(statearr_54726_54793[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (26)))
{var inst_54595 = (state_54667[(30)]);var inst_54653 = (state_54667[(2)]);var inst_54654 = cljs.core.seq.call(null,inst_54595);var state_54667__$1 = (function (){var statearr_54727 = state_54667;(statearr_54727[(32)] = inst_54653);
return statearr_54727;
})();if(inst_54654)
{var statearr_54728_54794 = state_54667__$1;(statearr_54728_54794[(1)] = (42));
} else
{var statearr_54729_54795 = state_54667__$1;(statearr_54729_54795[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (16)))
{var inst_54564 = (state_54667[(7)]);var inst_54566 = cljs.core.chunked_seq_QMARK_.call(null,inst_54564);var state_54667__$1 = state_54667;if(inst_54566)
{var statearr_54733_54796 = state_54667__$1;(statearr_54733_54796[(1)] = (19));
} else
{var statearr_54734_54797 = state_54667__$1;(statearr_54734_54797[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (38)))
{var inst_54646 = (state_54667[(2)]);var state_54667__$1 = state_54667;var statearr_54735_54798 = state_54667__$1;(statearr_54735_54798[(2)] = inst_54646);
(statearr_54735_54798[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (30)))
{var inst_54603 = (state_54667[(18)]);var inst_54606 = (state_54667[(9)]);var inst_54605 = (state_54667[(19)]);var inst_54604 = (state_54667[(10)]);var inst_54620 = (state_54667[(2)]);var inst_54621 = (inst_54606 + (1));var tmp54730 = inst_54603;var tmp54731 = inst_54605;var tmp54732 = inst_54604;var inst_54603__$1 = tmp54730;var inst_54604__$1 = tmp54732;var inst_54605__$1 = tmp54731;var inst_54606__$1 = inst_54621;var state_54667__$1 = (function (){var statearr_54736 = state_54667;(statearr_54736[(18)] = inst_54603__$1);
(statearr_54736[(33)] = inst_54620);
(statearr_54736[(9)] = inst_54606__$1);
(statearr_54736[(19)] = inst_54605__$1);
(statearr_54736[(10)] = inst_54604__$1);
return statearr_54736;
})();var statearr_54737_54799 = state_54667__$1;(statearr_54737_54799[(2)] = null);
(statearr_54737_54799[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (10)))
{var inst_54547 = (state_54667[(13)]);var inst_54545 = (state_54667[(14)]);var inst_54553 = cljs.core._nth.call(null,inst_54545,inst_54547);var inst_54554 = cljs.core.nth.call(null,inst_54553,(0),null);var inst_54555 = cljs.core.nth.call(null,inst_54553,(1),null);var state_54667__$1 = (function (){var statearr_54738 = state_54667;(statearr_54738[(28)] = inst_54554);
return statearr_54738;
})();if(cljs.core.truth_(inst_54555))
{var statearr_54739_54800 = state_54667__$1;(statearr_54739_54800[(1)] = (13));
} else
{var statearr_54740_54801 = state_54667__$1;(statearr_54740_54801[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (18)))
{var inst_54588 = (state_54667[(2)]);var state_54667__$1 = state_54667;var statearr_54741_54802 = state_54667__$1;(statearr_54741_54802[(2)] = inst_54588);
(statearr_54741_54802[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (42)))
{var state_54667__$1 = state_54667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54667__$1,(45),dchan);
} else
{if((state_val_54668 === (37)))
{var inst_54624 = (state_54667[(17)]);var inst_54633 = cljs.core.first.call(null,inst_54624);var state_54667__$1 = (function (){var statearr_54742 = state_54667;(statearr_54742[(25)] = inst_54633);
return statearr_54742;
})();var statearr_54743_54803 = state_54667__$1;(statearr_54743_54803[(2)] = null);
(statearr_54743_54803[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54668 === (8)))
{var inst_54547 = (state_54667[(13)]);var inst_54546 = (state_54667[(16)]);var inst_54549 = (inst_54547 < inst_54546);var inst_54550 = inst_54549;var state_54667__$1 = state_54667;if(cljs.core.truth_(inst_54550))
{var statearr_54744_54804 = state_54667__$1;(statearr_54744_54804[(1)] = (10));
} else
{var statearr_54745_54805 = state_54667__$1;(statearr_54745_54805[(1)] = (11));
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
});})(c__5693__auto___54753,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___54753,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54749[(0)] = state_machine__5679__auto__);
(statearr_54749[(1)] = (1));
return statearr_54749;
});
var state_machine__5679__auto____1 = (function (state_54667){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54667);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54750){if((e54750 instanceof Object))
{var ex__5682__auto__ = e54750;var statearr_54751_54806 = state_54667;(statearr_54751_54806[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54750;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54807 = state_54667;
state_54667 = G__54807;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54667){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54753,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_54752 = f__5694__auto__.call(null);(statearr_54752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54753);
return statearr_54752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54753,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj54809 = {};return obj54809;
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
;var m = (function (){if(typeof cljs.core.async.t54919 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54919 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54920){
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
this.meta54920 = meta54920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54919.cljs$lang$type = true;
cljs.core.async.t54919.cljs$lang$ctorStr = "cljs.core.async/t54919";
cljs.core.async.t54919.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t54919");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54919.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t54919.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54919.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54919.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54919.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54919.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54919.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54921){var self__ = this;
var _54921__$1 = this;return self__.meta54920;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t54919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54921,meta54920__$1){var self__ = this;
var _54921__$1 = this;return (new cljs.core.async.t54919(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta54920__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t54919 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t54919(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54920){return (new cljs.core.async.t54919(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54920));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t54919(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___55028 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55028,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55028,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_54986){var state_val_54987 = (state_54986[(1)]);if((state_val_54987 === (7)))
{var inst_54935 = (state_54986[(7)]);var inst_54940 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54935);var state_54986__$1 = state_54986;var statearr_54988_55029 = state_54986__$1;(statearr_54988_55029[(2)] = inst_54940);
(statearr_54988_55029[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (20)))
{var inst_54950 = (state_54986[(8)]);var state_54986__$1 = state_54986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54986__$1,(23),out,inst_54950);
} else
{if((state_val_54987 === (1)))
{var inst_54925 = (state_54986[(9)]);var inst_54925__$1 = calc_state.call(null);var inst_54926 = cljs.core.seq_QMARK_.call(null,inst_54925__$1);var state_54986__$1 = (function (){var statearr_54989 = state_54986;(statearr_54989[(9)] = inst_54925__$1);
return statearr_54989;
})();if(inst_54926)
{var statearr_54990_55030 = state_54986__$1;(statearr_54990_55030[(1)] = (2));
} else
{var statearr_54991_55031 = state_54986__$1;(statearr_54991_55031[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (4)))
{var inst_54925 = (state_54986[(9)]);var inst_54931 = (state_54986[(2)]);var inst_54932 = cljs.core.get.call(null,inst_54931,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_54933 = cljs.core.get.call(null,inst_54931,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_54934 = cljs.core.get.call(null,inst_54931,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_54935 = inst_54925;var state_54986__$1 = (function (){var statearr_54992 = state_54986;(statearr_54992[(10)] = inst_54934);
(statearr_54992[(11)] = inst_54933);
(statearr_54992[(12)] = inst_54932);
(statearr_54992[(7)] = inst_54935);
return statearr_54992;
})();var statearr_54993_55032 = state_54986__$1;(statearr_54993_55032[(2)] = null);
(statearr_54993_55032[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (15)))
{var state_54986__$1 = state_54986;var statearr_54994_55033 = state_54986__$1;(statearr_54994_55033[(2)] = null);
(statearr_54994_55033[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (21)))
{var state_54986__$1 = state_54986;var statearr_54995_55034 = state_54986__$1;(statearr_54995_55034[(2)] = null);
(statearr_54995_55034[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (13)))
{var inst_54982 = (state_54986[(2)]);var state_54986__$1 = state_54986;var statearr_54996_55035 = state_54986__$1;(statearr_54996_55035[(2)] = inst_54982);
(statearr_54996_55035[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (22)))
{var inst_54943 = (state_54986[(13)]);var inst_54979 = (state_54986[(2)]);var inst_54935 = inst_54943;var state_54986__$1 = (function (){var statearr_54997 = state_54986;(statearr_54997[(14)] = inst_54979);
(statearr_54997[(7)] = inst_54935);
return statearr_54997;
})();var statearr_54998_55036 = state_54986__$1;(statearr_54998_55036[(2)] = null);
(statearr_54998_55036[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (6)))
{var inst_54984 = (state_54986[(2)]);var state_54986__$1 = state_54986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54986__$1,inst_54984);
} else
{if((state_val_54987 === (17)))
{var inst_54965 = (state_54986[(15)]);var state_54986__$1 = state_54986;var statearr_54999_55037 = state_54986__$1;(statearr_54999_55037[(2)] = inst_54965);
(statearr_54999_55037[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (3)))
{var inst_54925 = (state_54986[(9)]);var state_54986__$1 = state_54986;var statearr_55000_55038 = state_54986__$1;(statearr_55000_55038[(2)] = inst_54925);
(statearr_55000_55038[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (12)))
{var inst_54951 = (state_54986[(16)]);var inst_54946 = (state_54986[(17)]);var inst_54965 = (state_54986[(15)]);var inst_54965__$1 = inst_54946.call(null,inst_54951);var state_54986__$1 = (function (){var statearr_55001 = state_54986;(statearr_55001[(15)] = inst_54965__$1);
return statearr_55001;
})();if(cljs.core.truth_(inst_54965__$1))
{var statearr_55002_55039 = state_54986__$1;(statearr_55002_55039[(1)] = (17));
} else
{var statearr_55003_55040 = state_54986__$1;(statearr_55003_55040[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (2)))
{var inst_54925 = (state_54986[(9)]);var inst_54928 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54925);var state_54986__$1 = state_54986;var statearr_55004_55041 = state_54986__$1;(statearr_55004_55041[(2)] = inst_54928);
(statearr_55004_55041[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (23)))
{var inst_54976 = (state_54986[(2)]);var state_54986__$1 = state_54986;var statearr_55005_55042 = state_54986__$1;(statearr_55005_55042[(2)] = inst_54976);
(statearr_55005_55042[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (19)))
{var inst_54973 = (state_54986[(2)]);var state_54986__$1 = state_54986;if(cljs.core.truth_(inst_54973))
{var statearr_55006_55043 = state_54986__$1;(statearr_55006_55043[(1)] = (20));
} else
{var statearr_55007_55044 = state_54986__$1;(statearr_55007_55044[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (11)))
{var inst_54950 = (state_54986[(8)]);var inst_54956 = (inst_54950 == null);var state_54986__$1 = state_54986;if(cljs.core.truth_(inst_54956))
{var statearr_55008_55045 = state_54986__$1;(statearr_55008_55045[(1)] = (14));
} else
{var statearr_55009_55046 = state_54986__$1;(statearr_55009_55046[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (9)))
{var inst_54943 = (state_54986[(13)]);var inst_54943__$1 = (state_54986[(2)]);var inst_54944 = cljs.core.get.call(null,inst_54943__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_54945 = cljs.core.get.call(null,inst_54943__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_54946 = cljs.core.get.call(null,inst_54943__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_54986__$1 = (function (){var statearr_55010 = state_54986;(statearr_55010[(18)] = inst_54945);
(statearr_55010[(13)] = inst_54943__$1);
(statearr_55010[(17)] = inst_54946);
return statearr_55010;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_54986__$1,(10),inst_54944);
} else
{if((state_val_54987 === (5)))
{var inst_54935 = (state_54986[(7)]);var inst_54938 = cljs.core.seq_QMARK_.call(null,inst_54935);var state_54986__$1 = state_54986;if(inst_54938)
{var statearr_55011_55047 = state_54986__$1;(statearr_55011_55047[(1)] = (7));
} else
{var statearr_55012_55048 = state_54986__$1;(statearr_55012_55048[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (14)))
{var inst_54951 = (state_54986[(16)]);var inst_54958 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_54951);var state_54986__$1 = state_54986;var statearr_55013_55049 = state_54986__$1;(statearr_55013_55049[(2)] = inst_54958);
(statearr_55013_55049[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (16)))
{var inst_54961 = (state_54986[(2)]);var inst_54962 = calc_state.call(null);var inst_54935 = inst_54962;var state_54986__$1 = (function (){var statearr_55014 = state_54986;(statearr_55014[(19)] = inst_54961);
(statearr_55014[(7)] = inst_54935);
return statearr_55014;
})();var statearr_55015_55050 = state_54986__$1;(statearr_55015_55050[(2)] = null);
(statearr_55015_55050[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (10)))
{var inst_54951 = (state_54986[(16)]);var inst_54950 = (state_54986[(8)]);var inst_54949 = (state_54986[(2)]);var inst_54950__$1 = cljs.core.nth.call(null,inst_54949,(0),null);var inst_54951__$1 = cljs.core.nth.call(null,inst_54949,(1),null);var inst_54952 = (inst_54950__$1 == null);var inst_54953 = cljs.core._EQ_.call(null,inst_54951__$1,change);var inst_54954 = (inst_54952) || (inst_54953);var state_54986__$1 = (function (){var statearr_55016 = state_54986;(statearr_55016[(16)] = inst_54951__$1);
(statearr_55016[(8)] = inst_54950__$1);
return statearr_55016;
})();if(cljs.core.truth_(inst_54954))
{var statearr_55017_55051 = state_54986__$1;(statearr_55017_55051[(1)] = (11));
} else
{var statearr_55018_55052 = state_54986__$1;(statearr_55018_55052[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (18)))
{var inst_54951 = (state_54986[(16)]);var inst_54945 = (state_54986[(18)]);var inst_54946 = (state_54986[(17)]);var inst_54968 = cljs.core.empty_QMARK_.call(null,inst_54946);var inst_54969 = inst_54945.call(null,inst_54951);var inst_54970 = cljs.core.not.call(null,inst_54969);var inst_54971 = (inst_54968) && (inst_54970);var state_54986__$1 = state_54986;var statearr_55019_55053 = state_54986__$1;(statearr_55019_55053[(2)] = inst_54971);
(statearr_55019_55053[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54987 === (8)))
{var inst_54935 = (state_54986[(7)]);var state_54986__$1 = state_54986;var statearr_55020_55054 = state_54986__$1;(statearr_55020_55054[(2)] = inst_54935);
(statearr_55020_55054[(1)] = (9));
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
});})(c__5693__auto___55028,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___55028,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55024[(0)] = state_machine__5679__auto__);
(statearr_55024[(1)] = (1));
return statearr_55024;
});
var state_machine__5679__auto____1 = (function (state_54986){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54986);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55025){if((e55025 instanceof Object))
{var ex__5682__auto__ = e55025;var statearr_55026_55055 = state_54986;(statearr_55026_55055[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55056 = state_54986;
state_54986 = G__55056;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54986){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55028,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_55027 = f__5694__auto__.call(null);(statearr_55027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55028);
return statearr_55027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55028,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj55058 = {};return obj55058;
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
return (function (p1__55059_SHARP_){if(cljs.core.truth_(p1__55059_SHARP_.call(null,topic)))
{return p1__55059_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__55059_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t55184 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t55184 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta55185){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta55185 = meta55185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t55184.cljs$lang$type = true;
cljs.core.async.t55184.cljs$lang$ctorStr = "cljs.core.async/t55184";
cljs.core.async.t55184.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t55184");
});})(mults,ensure_mult))
;
cljs.core.async.t55184.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t55184.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t55184.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t55184.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t55184.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t55184.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t55184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t55184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_55186){var self__ = this;
var _55186__$1 = this;return self__.meta55185;
});})(mults,ensure_mult))
;
cljs.core.async.t55184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_55186,meta55185__$1){var self__ = this;
var _55186__$1 = this;return (new cljs.core.async.t55184(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta55185__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t55184 = ((function (mults,ensure_mult){
return (function __GT_t55184(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta55185){return (new cljs.core.async.t55184(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta55185));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t55184(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___55308 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55308,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55308,mults,ensure_mult,p){
return (function (state_55260){var state_val_55261 = (state_55260[(1)]);if((state_val_55261 === (7)))
{var inst_55256 = (state_55260[(2)]);var state_55260__$1 = state_55260;var statearr_55262_55309 = state_55260__$1;(statearr_55262_55309[(2)] = inst_55256);
(statearr_55262_55309[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (20)))
{var state_55260__$1 = state_55260;var statearr_55263_55310 = state_55260__$1;(statearr_55263_55310[(2)] = null);
(statearr_55263_55310[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (1)))
{var state_55260__$1 = state_55260;var statearr_55264_55311 = state_55260__$1;(statearr_55264_55311[(2)] = null);
(statearr_55264_55311[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (24)))
{var inst_55239 = (state_55260[(7)]);var inst_55189 = (state_55260[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55260,(23),Object,null,(22));var inst_55246 = cljs.core.async.muxch_STAR_.call(null,inst_55239);var state_55260__$1 = state_55260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55260__$1,(25),inst_55246,inst_55189);
} else
{if((state_val_55261 === (4)))
{var inst_55189 = (state_55260[(8)]);var inst_55189__$1 = (state_55260[(2)]);var inst_55190 = (inst_55189__$1 == null);var state_55260__$1 = (function (){var statearr_55265 = state_55260;(statearr_55265[(8)] = inst_55189__$1);
return statearr_55265;
})();if(cljs.core.truth_(inst_55190))
{var statearr_55266_55312 = state_55260__$1;(statearr_55266_55312[(1)] = (5));
} else
{var statearr_55267_55313 = state_55260__$1;(statearr_55267_55313[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (15)))
{var inst_55231 = (state_55260[(2)]);var state_55260__$1 = state_55260;var statearr_55268_55314 = state_55260__$1;(statearr_55268_55314[(2)] = inst_55231);
(statearr_55268_55314[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (21)))
{var inst_55253 = (state_55260[(2)]);var state_55260__$1 = (function (){var statearr_55269 = state_55260;(statearr_55269[(9)] = inst_55253);
return statearr_55269;
})();var statearr_55270_55315 = state_55260__$1;(statearr_55270_55315[(2)] = null);
(statearr_55270_55315[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (13)))
{var inst_55213 = (state_55260[(10)]);var inst_55215 = cljs.core.chunked_seq_QMARK_.call(null,inst_55213);var state_55260__$1 = state_55260;if(inst_55215)
{var statearr_55271_55316 = state_55260__$1;(statearr_55271_55316[(1)] = (16));
} else
{var statearr_55272_55317 = state_55260__$1;(statearr_55272_55317[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (22)))
{var inst_55250 = (state_55260[(2)]);var state_55260__$1 = state_55260;var statearr_55273_55318 = state_55260__$1;(statearr_55273_55318[(2)] = inst_55250);
(statearr_55273_55318[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (6)))
{var inst_55237 = (state_55260[(11)]);var inst_55239 = (state_55260[(7)]);var inst_55189 = (state_55260[(8)]);var inst_55237__$1 = topic_fn.call(null,inst_55189);var inst_55238 = cljs.core.deref.call(null,mults);var inst_55239__$1 = cljs.core.get.call(null,inst_55238,inst_55237__$1);var state_55260__$1 = (function (){var statearr_55274 = state_55260;(statearr_55274[(11)] = inst_55237__$1);
(statearr_55274[(7)] = inst_55239__$1);
return statearr_55274;
})();if(cljs.core.truth_(inst_55239__$1))
{var statearr_55275_55319 = state_55260__$1;(statearr_55275_55319[(1)] = (19));
} else
{var statearr_55276_55320 = state_55260__$1;(statearr_55276_55320[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (25)))
{var inst_55248 = (state_55260[(2)]);var state_55260__$1 = state_55260;var statearr_55277_55321 = state_55260__$1;(statearr_55277_55321[(2)] = inst_55248);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55260__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (17)))
{var inst_55213 = (state_55260[(10)]);var inst_55222 = cljs.core.first.call(null,inst_55213);var inst_55223 = cljs.core.async.muxch_STAR_.call(null,inst_55222);var inst_55224 = cljs.core.async.close_BANG_.call(null,inst_55223);var inst_55225 = cljs.core.next.call(null,inst_55213);var inst_55199 = inst_55225;var inst_55200 = null;var inst_55201 = (0);var inst_55202 = (0);var state_55260__$1 = (function (){var statearr_55278 = state_55260;(statearr_55278[(12)] = inst_55202);
(statearr_55278[(13)] = inst_55224);
(statearr_55278[(14)] = inst_55201);
(statearr_55278[(15)] = inst_55200);
(statearr_55278[(16)] = inst_55199);
return statearr_55278;
})();var statearr_55279_55322 = state_55260__$1;(statearr_55279_55322[(2)] = null);
(statearr_55279_55322[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (3)))
{var inst_55258 = (state_55260[(2)]);var state_55260__$1 = state_55260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55260__$1,inst_55258);
} else
{if((state_val_55261 === (12)))
{var inst_55233 = (state_55260[(2)]);var state_55260__$1 = state_55260;var statearr_55280_55323 = state_55260__$1;(statearr_55280_55323[(2)] = inst_55233);
(statearr_55280_55323[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (2)))
{var state_55260__$1 = state_55260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55260__$1,(4),ch);
} else
{if((state_val_55261 === (23)))
{var inst_55237 = (state_55260[(11)]);var inst_55241 = (state_55260[(2)]);var inst_55242 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_55237);var state_55260__$1 = (function (){var statearr_55281 = state_55260;(statearr_55281[(17)] = inst_55241);
return statearr_55281;
})();var statearr_55282_55324 = state_55260__$1;(statearr_55282_55324[(2)] = inst_55242);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55260__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (19)))
{var state_55260__$1 = state_55260;var statearr_55283_55325 = state_55260__$1;(statearr_55283_55325[(2)] = null);
(statearr_55283_55325[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (11)))
{var inst_55213 = (state_55260[(10)]);var inst_55199 = (state_55260[(16)]);var inst_55213__$1 = cljs.core.seq.call(null,inst_55199);var state_55260__$1 = (function (){var statearr_55284 = state_55260;(statearr_55284[(10)] = inst_55213__$1);
return statearr_55284;
})();if(inst_55213__$1)
{var statearr_55285_55326 = state_55260__$1;(statearr_55285_55326[(1)] = (13));
} else
{var statearr_55286_55327 = state_55260__$1;(statearr_55286_55327[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (9)))
{var inst_55235 = (state_55260[(2)]);var state_55260__$1 = state_55260;var statearr_55287_55328 = state_55260__$1;(statearr_55287_55328[(2)] = inst_55235);
(statearr_55287_55328[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (5)))
{var inst_55196 = cljs.core.deref.call(null,mults);var inst_55197 = cljs.core.vals.call(null,inst_55196);var inst_55198 = cljs.core.seq.call(null,inst_55197);var inst_55199 = inst_55198;var inst_55200 = null;var inst_55201 = (0);var inst_55202 = (0);var state_55260__$1 = (function (){var statearr_55288 = state_55260;(statearr_55288[(12)] = inst_55202);
(statearr_55288[(14)] = inst_55201);
(statearr_55288[(15)] = inst_55200);
(statearr_55288[(16)] = inst_55199);
return statearr_55288;
})();var statearr_55289_55329 = state_55260__$1;(statearr_55289_55329[(2)] = null);
(statearr_55289_55329[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (14)))
{var state_55260__$1 = state_55260;var statearr_55293_55330 = state_55260__$1;(statearr_55293_55330[(2)] = null);
(statearr_55293_55330[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (16)))
{var inst_55213 = (state_55260[(10)]);var inst_55217 = cljs.core.chunk_first.call(null,inst_55213);var inst_55218 = cljs.core.chunk_rest.call(null,inst_55213);var inst_55219 = cljs.core.count.call(null,inst_55217);var inst_55199 = inst_55218;var inst_55200 = inst_55217;var inst_55201 = inst_55219;var inst_55202 = (0);var state_55260__$1 = (function (){var statearr_55294 = state_55260;(statearr_55294[(12)] = inst_55202);
(statearr_55294[(14)] = inst_55201);
(statearr_55294[(15)] = inst_55200);
(statearr_55294[(16)] = inst_55199);
return statearr_55294;
})();var statearr_55295_55331 = state_55260__$1;(statearr_55295_55331[(2)] = null);
(statearr_55295_55331[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (10)))
{var inst_55202 = (state_55260[(12)]);var inst_55201 = (state_55260[(14)]);var inst_55200 = (state_55260[(15)]);var inst_55199 = (state_55260[(16)]);var inst_55207 = cljs.core._nth.call(null,inst_55200,inst_55202);var inst_55208 = cljs.core.async.muxch_STAR_.call(null,inst_55207);var inst_55209 = cljs.core.async.close_BANG_.call(null,inst_55208);var inst_55210 = (inst_55202 + (1));var tmp55290 = inst_55201;var tmp55291 = inst_55200;var tmp55292 = inst_55199;var inst_55199__$1 = tmp55292;var inst_55200__$1 = tmp55291;var inst_55201__$1 = tmp55290;var inst_55202__$1 = inst_55210;var state_55260__$1 = (function (){var statearr_55296 = state_55260;(statearr_55296[(12)] = inst_55202__$1);
(statearr_55296[(18)] = inst_55209);
(statearr_55296[(14)] = inst_55201__$1);
(statearr_55296[(15)] = inst_55200__$1);
(statearr_55296[(16)] = inst_55199__$1);
return statearr_55296;
})();var statearr_55297_55332 = state_55260__$1;(statearr_55297_55332[(2)] = null);
(statearr_55297_55332[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (18)))
{var inst_55228 = (state_55260[(2)]);var state_55260__$1 = state_55260;var statearr_55298_55333 = state_55260__$1;(statearr_55298_55333[(2)] = inst_55228);
(statearr_55298_55333[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55261 === (8)))
{var inst_55202 = (state_55260[(12)]);var inst_55201 = (state_55260[(14)]);var inst_55204 = (inst_55202 < inst_55201);var inst_55205 = inst_55204;var state_55260__$1 = state_55260;if(cljs.core.truth_(inst_55205))
{var statearr_55299_55334 = state_55260__$1;(statearr_55299_55334[(1)] = (10));
} else
{var statearr_55300_55335 = state_55260__$1;(statearr_55300_55335[(1)] = (11));
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
});})(c__5693__auto___55308,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___55308,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55304[(0)] = state_machine__5679__auto__);
(statearr_55304[(1)] = (1));
return statearr_55304;
});
var state_machine__5679__auto____1 = (function (state_55260){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55260);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55305){if((e55305 instanceof Object))
{var ex__5682__auto__ = e55305;var statearr_55306_55336 = state_55260;(statearr_55306_55336[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55260);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55337 = state_55260;
state_55260 = G__55337;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55260){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55308,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_55307 = f__5694__auto__.call(null);(statearr_55307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55308);
return statearr_55307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55308,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___55474 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55474,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55474,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_55444){var state_val_55445 = (state_55444[(1)]);if((state_val_55445 === (7)))
{var state_55444__$1 = state_55444;var statearr_55446_55475 = state_55444__$1;(statearr_55446_55475[(2)] = null);
(statearr_55446_55475[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (1)))
{var state_55444__$1 = state_55444;var statearr_55447_55476 = state_55444__$1;(statearr_55447_55476[(2)] = null);
(statearr_55447_55476[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (4)))
{var inst_55408 = (state_55444[(7)]);var inst_55410 = (inst_55408 < cnt);var state_55444__$1 = state_55444;if(cljs.core.truth_(inst_55410))
{var statearr_55448_55477 = state_55444__$1;(statearr_55448_55477[(1)] = (6));
} else
{var statearr_55449_55478 = state_55444__$1;(statearr_55449_55478[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (15)))
{var inst_55440 = (state_55444[(2)]);var state_55444__$1 = state_55444;var statearr_55450_55479 = state_55444__$1;(statearr_55450_55479[(2)] = inst_55440);
(statearr_55450_55479[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (13)))
{var inst_55433 = cljs.core.async.close_BANG_.call(null,out);var state_55444__$1 = state_55444;var statearr_55451_55480 = state_55444__$1;(statearr_55451_55480[(2)] = inst_55433);
(statearr_55451_55480[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (6)))
{var state_55444__$1 = state_55444;var statearr_55452_55481 = state_55444__$1;(statearr_55452_55481[(2)] = null);
(statearr_55452_55481[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (3)))
{var inst_55442 = (state_55444[(2)]);var state_55444__$1 = state_55444;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55444__$1,inst_55442);
} else
{if((state_val_55445 === (12)))
{var inst_55430 = (state_55444[(8)]);var inst_55430__$1 = (state_55444[(2)]);var inst_55431 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_55430__$1);var state_55444__$1 = (function (){var statearr_55453 = state_55444;(statearr_55453[(8)] = inst_55430__$1);
return statearr_55453;
})();if(cljs.core.truth_(inst_55431))
{var statearr_55454_55482 = state_55444__$1;(statearr_55454_55482[(1)] = (13));
} else
{var statearr_55455_55483 = state_55444__$1;(statearr_55455_55483[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (2)))
{var inst_55407 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_55408 = (0);var state_55444__$1 = (function (){var statearr_55456 = state_55444;(statearr_55456[(9)] = inst_55407);
(statearr_55456[(7)] = inst_55408);
return statearr_55456;
})();var statearr_55457_55484 = state_55444__$1;(statearr_55457_55484[(2)] = null);
(statearr_55457_55484[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (11)))
{var inst_55408 = (state_55444[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55444,(10),Object,null,(9));var inst_55417 = chs__$1.call(null,inst_55408);var inst_55418 = done.call(null,inst_55408);var inst_55419 = cljs.core.async.take_BANG_.call(null,inst_55417,inst_55418);var state_55444__$1 = state_55444;var statearr_55458_55485 = state_55444__$1;(statearr_55458_55485[(2)] = inst_55419);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55444__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (9)))
{var inst_55408 = (state_55444[(7)]);var inst_55421 = (state_55444[(2)]);var inst_55422 = (inst_55408 + (1));var inst_55408__$1 = inst_55422;var state_55444__$1 = (function (){var statearr_55459 = state_55444;(statearr_55459[(7)] = inst_55408__$1);
(statearr_55459[(10)] = inst_55421);
return statearr_55459;
})();var statearr_55460_55486 = state_55444__$1;(statearr_55460_55486[(2)] = null);
(statearr_55460_55486[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (5)))
{var inst_55428 = (state_55444[(2)]);var state_55444__$1 = (function (){var statearr_55461 = state_55444;(statearr_55461[(11)] = inst_55428);
return statearr_55461;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55444__$1,(12),dchan);
} else
{if((state_val_55445 === (14)))
{var inst_55430 = (state_55444[(8)]);var inst_55435 = cljs.core.apply.call(null,f,inst_55430);var state_55444__$1 = state_55444;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55444__$1,(16),out,inst_55435);
} else
{if((state_val_55445 === (16)))
{var inst_55437 = (state_55444[(2)]);var state_55444__$1 = (function (){var statearr_55462 = state_55444;(statearr_55462[(12)] = inst_55437);
return statearr_55462;
})();var statearr_55463_55487 = state_55444__$1;(statearr_55463_55487[(2)] = null);
(statearr_55463_55487[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (10)))
{var inst_55412 = (state_55444[(2)]);var inst_55413 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_55444__$1 = (function (){var statearr_55464 = state_55444;(statearr_55464[(13)] = inst_55412);
return statearr_55464;
})();var statearr_55465_55488 = state_55444__$1;(statearr_55465_55488[(2)] = inst_55413);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55444__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55445 === (8)))
{var inst_55426 = (state_55444[(2)]);var state_55444__$1 = state_55444;var statearr_55466_55489 = state_55444__$1;(statearr_55466_55489[(2)] = inst_55426);
(statearr_55466_55489[(1)] = (5));
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
});})(c__5693__auto___55474,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___55474,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55470[(0)] = state_machine__5679__auto__);
(statearr_55470[(1)] = (1));
return statearr_55470;
});
var state_machine__5679__auto____1 = (function (state_55444){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55444);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55471){if((e55471 instanceof Object))
{var ex__5682__auto__ = e55471;var statearr_55472_55490 = state_55444;(statearr_55472_55490[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55444);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55491 = state_55444;
state_55444 = G__55491;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55444){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55474,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_55473 = f__5694__auto__.call(null);(statearr_55473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55474);
return statearr_55473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55474,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___55599 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55599,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55599,out){
return (function (state_55575){var state_val_55576 = (state_55575[(1)]);if((state_val_55576 === (7)))
{var inst_55554 = (state_55575[(7)]);var inst_55555 = (state_55575[(8)]);var inst_55554__$1 = (state_55575[(2)]);var inst_55555__$1 = cljs.core.nth.call(null,inst_55554__$1,(0),null);var inst_55556 = cljs.core.nth.call(null,inst_55554__$1,(1),null);var inst_55557 = (inst_55555__$1 == null);var state_55575__$1 = (function (){var statearr_55577 = state_55575;(statearr_55577[(7)] = inst_55554__$1);
(statearr_55577[(9)] = inst_55556);
(statearr_55577[(8)] = inst_55555__$1);
return statearr_55577;
})();if(cljs.core.truth_(inst_55557))
{var statearr_55578_55600 = state_55575__$1;(statearr_55578_55600[(1)] = (8));
} else
{var statearr_55579_55601 = state_55575__$1;(statearr_55579_55601[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55576 === (1)))
{var inst_55546 = cljs.core.vec.call(null,chs);var inst_55547 = inst_55546;var state_55575__$1 = (function (){var statearr_55580 = state_55575;(statearr_55580[(10)] = inst_55547);
return statearr_55580;
})();var statearr_55581_55602 = state_55575__$1;(statearr_55581_55602[(2)] = null);
(statearr_55581_55602[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55576 === (4)))
{var inst_55547 = (state_55575[(10)]);var state_55575__$1 = state_55575;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_55575__$1,(7),inst_55547);
} else
{if((state_val_55576 === (6)))
{var inst_55571 = (state_55575[(2)]);var state_55575__$1 = state_55575;var statearr_55582_55603 = state_55575__$1;(statearr_55582_55603[(2)] = inst_55571);
(statearr_55582_55603[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55576 === (3)))
{var inst_55573 = (state_55575[(2)]);var state_55575__$1 = state_55575;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55575__$1,inst_55573);
} else
{if((state_val_55576 === (2)))
{var inst_55547 = (state_55575[(10)]);var inst_55549 = cljs.core.count.call(null,inst_55547);var inst_55550 = (inst_55549 > (0));var state_55575__$1 = state_55575;if(cljs.core.truth_(inst_55550))
{var statearr_55584_55604 = state_55575__$1;(statearr_55584_55604[(1)] = (4));
} else
{var statearr_55585_55605 = state_55575__$1;(statearr_55585_55605[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55576 === (11)))
{var inst_55547 = (state_55575[(10)]);var inst_55564 = (state_55575[(2)]);var tmp55583 = inst_55547;var inst_55547__$1 = tmp55583;var state_55575__$1 = (function (){var statearr_55586 = state_55575;(statearr_55586[(11)] = inst_55564);
(statearr_55586[(10)] = inst_55547__$1);
return statearr_55586;
})();var statearr_55587_55606 = state_55575__$1;(statearr_55587_55606[(2)] = null);
(statearr_55587_55606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55576 === (9)))
{var inst_55555 = (state_55575[(8)]);var state_55575__$1 = state_55575;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55575__$1,(11),out,inst_55555);
} else
{if((state_val_55576 === (5)))
{var inst_55569 = cljs.core.async.close_BANG_.call(null,out);var state_55575__$1 = state_55575;var statearr_55588_55607 = state_55575__$1;(statearr_55588_55607[(2)] = inst_55569);
(statearr_55588_55607[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55576 === (10)))
{var inst_55567 = (state_55575[(2)]);var state_55575__$1 = state_55575;var statearr_55589_55608 = state_55575__$1;(statearr_55589_55608[(2)] = inst_55567);
(statearr_55589_55608[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55576 === (8)))
{var inst_55547 = (state_55575[(10)]);var inst_55554 = (state_55575[(7)]);var inst_55556 = (state_55575[(9)]);var inst_55555 = (state_55575[(8)]);var inst_55559 = (function (){var c = inst_55556;var v = inst_55555;var vec__55552 = inst_55554;var cs = inst_55547;return ((function (c,v,vec__55552,cs,inst_55547,inst_55554,inst_55556,inst_55555,state_val_55576,c__5693__auto___55599,out){
return (function (p1__55492_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__55492_SHARP_);
});
;})(c,v,vec__55552,cs,inst_55547,inst_55554,inst_55556,inst_55555,state_val_55576,c__5693__auto___55599,out))
})();var inst_55560 = cljs.core.filterv.call(null,inst_55559,inst_55547);var inst_55547__$1 = inst_55560;var state_55575__$1 = (function (){var statearr_55590 = state_55575;(statearr_55590[(10)] = inst_55547__$1);
return statearr_55590;
})();var statearr_55591_55609 = state_55575__$1;(statearr_55591_55609[(2)] = null);
(statearr_55591_55609[(1)] = (2));
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
});})(c__5693__auto___55599,out))
;return ((function (switch__5678__auto__,c__5693__auto___55599,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55595 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55595[(0)] = state_machine__5679__auto__);
(statearr_55595[(1)] = (1));
return statearr_55595;
});
var state_machine__5679__auto____1 = (function (state_55575){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55575);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55596){if((e55596 instanceof Object))
{var ex__5682__auto__ = e55596;var statearr_55597_55610 = state_55575;(statearr_55597_55610[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55575);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55611 = state_55575;
state_55575 = G__55611;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55575){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55599,out))
})();var state__5695__auto__ = (function (){var statearr_55598 = f__5694__auto__.call(null);(statearr_55598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55599);
return statearr_55598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55599,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___55704 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55704,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55704,out){
return (function (state_55681){var state_val_55682 = (state_55681[(1)]);if((state_val_55682 === (7)))
{var inst_55663 = (state_55681[(7)]);var inst_55663__$1 = (state_55681[(2)]);var inst_55664 = (inst_55663__$1 == null);var inst_55665 = cljs.core.not.call(null,inst_55664);var state_55681__$1 = (function (){var statearr_55683 = state_55681;(statearr_55683[(7)] = inst_55663__$1);
return statearr_55683;
})();if(inst_55665)
{var statearr_55684_55705 = state_55681__$1;(statearr_55684_55705[(1)] = (8));
} else
{var statearr_55685_55706 = state_55681__$1;(statearr_55685_55706[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55682 === (1)))
{var inst_55658 = (0);var state_55681__$1 = (function (){var statearr_55686 = state_55681;(statearr_55686[(8)] = inst_55658);
return statearr_55686;
})();var statearr_55687_55707 = state_55681__$1;(statearr_55687_55707[(2)] = null);
(statearr_55687_55707[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55682 === (4)))
{var state_55681__$1 = state_55681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55681__$1,(7),ch);
} else
{if((state_val_55682 === (6)))
{var inst_55676 = (state_55681[(2)]);var state_55681__$1 = state_55681;var statearr_55688_55708 = state_55681__$1;(statearr_55688_55708[(2)] = inst_55676);
(statearr_55688_55708[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55682 === (3)))
{var inst_55678 = (state_55681[(2)]);var inst_55679 = cljs.core.async.close_BANG_.call(null,out);var state_55681__$1 = (function (){var statearr_55689 = state_55681;(statearr_55689[(9)] = inst_55678);
return statearr_55689;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55681__$1,inst_55679);
} else
{if((state_val_55682 === (2)))
{var inst_55658 = (state_55681[(8)]);var inst_55660 = (inst_55658 < n);var state_55681__$1 = state_55681;if(cljs.core.truth_(inst_55660))
{var statearr_55690_55709 = state_55681__$1;(statearr_55690_55709[(1)] = (4));
} else
{var statearr_55691_55710 = state_55681__$1;(statearr_55691_55710[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55682 === (11)))
{var inst_55658 = (state_55681[(8)]);var inst_55668 = (state_55681[(2)]);var inst_55669 = (inst_55658 + (1));var inst_55658__$1 = inst_55669;var state_55681__$1 = (function (){var statearr_55692 = state_55681;(statearr_55692[(8)] = inst_55658__$1);
(statearr_55692[(10)] = inst_55668);
return statearr_55692;
})();var statearr_55693_55711 = state_55681__$1;(statearr_55693_55711[(2)] = null);
(statearr_55693_55711[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55682 === (9)))
{var state_55681__$1 = state_55681;var statearr_55694_55712 = state_55681__$1;(statearr_55694_55712[(2)] = null);
(statearr_55694_55712[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55682 === (5)))
{var state_55681__$1 = state_55681;var statearr_55695_55713 = state_55681__$1;(statearr_55695_55713[(2)] = null);
(statearr_55695_55713[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55682 === (10)))
{var inst_55673 = (state_55681[(2)]);var state_55681__$1 = state_55681;var statearr_55696_55714 = state_55681__$1;(statearr_55696_55714[(2)] = inst_55673);
(statearr_55696_55714[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55682 === (8)))
{var inst_55663 = (state_55681[(7)]);var state_55681__$1 = state_55681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55681__$1,(11),out,inst_55663);
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
});})(c__5693__auto___55704,out))
;return ((function (switch__5678__auto__,c__5693__auto___55704,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55700 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_55700[(0)] = state_machine__5679__auto__);
(statearr_55700[(1)] = (1));
return statearr_55700;
});
var state_machine__5679__auto____1 = (function (state_55681){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55681);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55701){if((e55701 instanceof Object))
{var ex__5682__auto__ = e55701;var statearr_55702_55715 = state_55681;(statearr_55702_55715[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55716 = state_55681;
state_55681 = G__55716;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55681){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55704,out))
})();var state__5695__auto__ = (function (){var statearr_55703 = f__5694__auto__.call(null);(statearr_55703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55704);
return statearr_55703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55704,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___55813 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55813,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55813,out){
return (function (state_55788){var state_val_55789 = (state_55788[(1)]);if((state_val_55789 === (7)))
{var inst_55783 = (state_55788[(2)]);var state_55788__$1 = state_55788;var statearr_55790_55814 = state_55788__$1;(statearr_55790_55814[(2)] = inst_55783);
(statearr_55790_55814[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55789 === (1)))
{var inst_55765 = null;var state_55788__$1 = (function (){var statearr_55791 = state_55788;(statearr_55791[(7)] = inst_55765);
return statearr_55791;
})();var statearr_55792_55815 = state_55788__$1;(statearr_55792_55815[(2)] = null);
(statearr_55792_55815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55789 === (4)))
{var inst_55768 = (state_55788[(8)]);var inst_55768__$1 = (state_55788[(2)]);var inst_55769 = (inst_55768__$1 == null);var inst_55770 = cljs.core.not.call(null,inst_55769);var state_55788__$1 = (function (){var statearr_55793 = state_55788;(statearr_55793[(8)] = inst_55768__$1);
return statearr_55793;
})();if(inst_55770)
{var statearr_55794_55816 = state_55788__$1;(statearr_55794_55816[(1)] = (5));
} else
{var statearr_55795_55817 = state_55788__$1;(statearr_55795_55817[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55789 === (6)))
{var state_55788__$1 = state_55788;var statearr_55796_55818 = state_55788__$1;(statearr_55796_55818[(2)] = null);
(statearr_55796_55818[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55789 === (3)))
{var inst_55785 = (state_55788[(2)]);var inst_55786 = cljs.core.async.close_BANG_.call(null,out);var state_55788__$1 = (function (){var statearr_55797 = state_55788;(statearr_55797[(9)] = inst_55785);
return statearr_55797;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55788__$1,inst_55786);
} else
{if((state_val_55789 === (2)))
{var state_55788__$1 = state_55788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55788__$1,(4),ch);
} else
{if((state_val_55789 === (11)))
{var inst_55768 = (state_55788[(8)]);var inst_55777 = (state_55788[(2)]);var inst_55765 = inst_55768;var state_55788__$1 = (function (){var statearr_55798 = state_55788;(statearr_55798[(10)] = inst_55777);
(statearr_55798[(7)] = inst_55765);
return statearr_55798;
})();var statearr_55799_55819 = state_55788__$1;(statearr_55799_55819[(2)] = null);
(statearr_55799_55819[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55789 === (9)))
{var inst_55768 = (state_55788[(8)]);var state_55788__$1 = state_55788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55788__$1,(11),out,inst_55768);
} else
{if((state_val_55789 === (5)))
{var inst_55768 = (state_55788[(8)]);var inst_55765 = (state_55788[(7)]);var inst_55772 = cljs.core._EQ_.call(null,inst_55768,inst_55765);var state_55788__$1 = state_55788;if(inst_55772)
{var statearr_55801_55820 = state_55788__$1;(statearr_55801_55820[(1)] = (8));
} else
{var statearr_55802_55821 = state_55788__$1;(statearr_55802_55821[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55789 === (10)))
{var inst_55780 = (state_55788[(2)]);var state_55788__$1 = state_55788;var statearr_55803_55822 = state_55788__$1;(statearr_55803_55822[(2)] = inst_55780);
(statearr_55803_55822[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55789 === (8)))
{var inst_55765 = (state_55788[(7)]);var tmp55800 = inst_55765;var inst_55765__$1 = tmp55800;var state_55788__$1 = (function (){var statearr_55804 = state_55788;(statearr_55804[(7)] = inst_55765__$1);
return statearr_55804;
})();var statearr_55805_55823 = state_55788__$1;(statearr_55805_55823[(2)] = null);
(statearr_55805_55823[(1)] = (2));
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
});})(c__5693__auto___55813,out))
;return ((function (switch__5678__auto__,c__5693__auto___55813,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55809 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_55809[(0)] = state_machine__5679__auto__);
(statearr_55809[(1)] = (1));
return statearr_55809;
});
var state_machine__5679__auto____1 = (function (state_55788){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55788);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55810){if((e55810 instanceof Object))
{var ex__5682__auto__ = e55810;var statearr_55811_55824 = state_55788;(statearr_55811_55824[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55788);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55825 = state_55788;
state_55788 = G__55825;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55788){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55813,out))
})();var state__5695__auto__ = (function (){var statearr_55812 = f__5694__auto__.call(null);(statearr_55812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55813);
return statearr_55812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55813,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___55960 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___55960,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___55960,out){
return (function (state_55930){var state_val_55931 = (state_55930[(1)]);if((state_val_55931 === (7)))
{var inst_55926 = (state_55930[(2)]);var state_55930__$1 = state_55930;var statearr_55932_55961 = state_55930__$1;(statearr_55932_55961[(2)] = inst_55926);
(statearr_55932_55961[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55931 === (1)))
{var inst_55893 = (new Array(n));var inst_55894 = inst_55893;var inst_55895 = (0);var state_55930__$1 = (function (){var statearr_55933 = state_55930;(statearr_55933[(7)] = inst_55895);
(statearr_55933[(8)] = inst_55894);
return statearr_55933;
})();var statearr_55934_55962 = state_55930__$1;(statearr_55934_55962[(2)] = null);
(statearr_55934_55962[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55931 === (4)))
{var inst_55898 = (state_55930[(9)]);var inst_55898__$1 = (state_55930[(2)]);var inst_55899 = (inst_55898__$1 == null);var inst_55900 = cljs.core.not.call(null,inst_55899);var state_55930__$1 = (function (){var statearr_55935 = state_55930;(statearr_55935[(9)] = inst_55898__$1);
return statearr_55935;
})();if(inst_55900)
{var statearr_55936_55963 = state_55930__$1;(statearr_55936_55963[(1)] = (5));
} else
{var statearr_55937_55964 = state_55930__$1;(statearr_55937_55964[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55931 === (15)))
{var inst_55920 = (state_55930[(2)]);var state_55930__$1 = state_55930;var statearr_55938_55965 = state_55930__$1;(statearr_55938_55965[(2)] = inst_55920);
(statearr_55938_55965[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55931 === (13)))
{var state_55930__$1 = state_55930;var statearr_55939_55966 = state_55930__$1;(statearr_55939_55966[(2)] = null);
(statearr_55939_55966[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55931 === (6)))
{var inst_55895 = (state_55930[(7)]);var inst_55916 = (inst_55895 > (0));var state_55930__$1 = state_55930;if(cljs.core.truth_(inst_55916))
{var statearr_55940_55967 = state_55930__$1;(statearr_55940_55967[(1)] = (12));
} else
{var statearr_55941_55968 = state_55930__$1;(statearr_55941_55968[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55931 === (3)))
{var inst_55928 = (state_55930[(2)]);var state_55930__$1 = state_55930;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55930__$1,inst_55928);
} else
{if((state_val_55931 === (12)))
{var inst_55894 = (state_55930[(8)]);var inst_55918 = cljs.core.vec.call(null,inst_55894);var state_55930__$1 = state_55930;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55930__$1,(15),out,inst_55918);
} else
{if((state_val_55931 === (2)))
{var state_55930__$1 = state_55930;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55930__$1,(4),ch);
} else
{if((state_val_55931 === (11)))
{var inst_55910 = (state_55930[(2)]);var inst_55911 = (new Array(n));var inst_55894 = inst_55911;var inst_55895 = (0);var state_55930__$1 = (function (){var statearr_55942 = state_55930;(statearr_55942[(10)] = inst_55910);
(statearr_55942[(7)] = inst_55895);
(statearr_55942[(8)] = inst_55894);
return statearr_55942;
})();var statearr_55943_55969 = state_55930__$1;(statearr_55943_55969[(2)] = null);
(statearr_55943_55969[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55931 === (9)))
{var inst_55894 = (state_55930[(8)]);var inst_55908 = cljs.core.vec.call(null,inst_55894);var state_55930__$1 = state_55930;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55930__$1,(11),out,inst_55908);
} else
{if((state_val_55931 === (5)))
{var inst_55898 = (state_55930[(9)]);var inst_55903 = (state_55930[(11)]);var inst_55895 = (state_55930[(7)]);var inst_55894 = (state_55930[(8)]);var inst_55902 = (inst_55894[inst_55895] = inst_55898);var inst_55903__$1 = (inst_55895 + (1));var inst_55904 = (inst_55903__$1 < n);var state_55930__$1 = (function (){var statearr_55944 = state_55930;(statearr_55944[(11)] = inst_55903__$1);
(statearr_55944[(12)] = inst_55902);
return statearr_55944;
})();if(cljs.core.truth_(inst_55904))
{var statearr_55945_55970 = state_55930__$1;(statearr_55945_55970[(1)] = (8));
} else
{var statearr_55946_55971 = state_55930__$1;(statearr_55946_55971[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55931 === (14)))
{var inst_55923 = (state_55930[(2)]);var inst_55924 = cljs.core.async.close_BANG_.call(null,out);var state_55930__$1 = (function (){var statearr_55948 = state_55930;(statearr_55948[(13)] = inst_55923);
return statearr_55948;
})();var statearr_55949_55972 = state_55930__$1;(statearr_55949_55972[(2)] = inst_55924);
(statearr_55949_55972[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55931 === (10)))
{var inst_55914 = (state_55930[(2)]);var state_55930__$1 = state_55930;var statearr_55950_55973 = state_55930__$1;(statearr_55950_55973[(2)] = inst_55914);
(statearr_55950_55973[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55931 === (8)))
{var inst_55903 = (state_55930[(11)]);var inst_55894 = (state_55930[(8)]);var tmp55947 = inst_55894;var inst_55894__$1 = tmp55947;var inst_55895 = inst_55903;var state_55930__$1 = (function (){var statearr_55951 = state_55930;(statearr_55951[(7)] = inst_55895);
(statearr_55951[(8)] = inst_55894__$1);
return statearr_55951;
})();var statearr_55952_55974 = state_55930__$1;(statearr_55952_55974[(2)] = null);
(statearr_55952_55974[(1)] = (2));
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
});})(c__5693__auto___55960,out))
;return ((function (switch__5678__auto__,c__5693__auto___55960,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_55956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55956[(0)] = state_machine__5679__auto__);
(statearr_55956[(1)] = (1));
return statearr_55956;
});
var state_machine__5679__auto____1 = (function (state_55930){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_55930);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e55957){if((e55957 instanceof Object))
{var ex__5682__auto__ = e55957;var statearr_55958_55975 = state_55930;(statearr_55958_55975[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55930);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55957;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55976 = state_55930;
state_55930 = G__55976;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_55930){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_55930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___55960,out))
})();var state__5695__auto__ = (function (){var statearr_55959 = f__5694__auto__.call(null);(statearr_55959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___55960);
return statearr_55959;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___55960,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___56119 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___56119,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___56119,out){
return (function (state_56089){var state_val_56090 = (state_56089[(1)]);if((state_val_56090 === (7)))
{var inst_56085 = (state_56089[(2)]);var state_56089__$1 = state_56089;var statearr_56091_56120 = state_56089__$1;(statearr_56091_56120[(2)] = inst_56085);
(statearr_56091_56120[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56090 === (1)))
{var inst_56048 = [];var inst_56049 = inst_56048;var inst_56050 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_56089__$1 = (function (){var statearr_56092 = state_56089;(statearr_56092[(7)] = inst_56049);
(statearr_56092[(8)] = inst_56050);
return statearr_56092;
})();var statearr_56093_56121 = state_56089__$1;(statearr_56093_56121[(2)] = null);
(statearr_56093_56121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56090 === (4)))
{var inst_56053 = (state_56089[(9)]);var inst_56053__$1 = (state_56089[(2)]);var inst_56054 = (inst_56053__$1 == null);var inst_56055 = cljs.core.not.call(null,inst_56054);var state_56089__$1 = (function (){var statearr_56094 = state_56089;(statearr_56094[(9)] = inst_56053__$1);
return statearr_56094;
})();if(inst_56055)
{var statearr_56095_56122 = state_56089__$1;(statearr_56095_56122[(1)] = (5));
} else
{var statearr_56096_56123 = state_56089__$1;(statearr_56096_56123[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56090 === (15)))
{var inst_56079 = (state_56089[(2)]);var state_56089__$1 = state_56089;var statearr_56097_56124 = state_56089__$1;(statearr_56097_56124[(2)] = inst_56079);
(statearr_56097_56124[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56090 === (13)))
{var state_56089__$1 = state_56089;var statearr_56098_56125 = state_56089__$1;(statearr_56098_56125[(2)] = null);
(statearr_56098_56125[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56090 === (6)))
{var inst_56049 = (state_56089[(7)]);var inst_56074 = inst_56049.length;var inst_56075 = (inst_56074 > (0));var state_56089__$1 = state_56089;if(cljs.core.truth_(inst_56075))
{var statearr_56099_56126 = state_56089__$1;(statearr_56099_56126[(1)] = (12));
} else
{var statearr_56100_56127 = state_56089__$1;(statearr_56100_56127[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56090 === (3)))
{var inst_56087 = (state_56089[(2)]);var state_56089__$1 = state_56089;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56089__$1,inst_56087);
} else
{if((state_val_56090 === (12)))
{var inst_56049 = (state_56089[(7)]);var inst_56077 = cljs.core.vec.call(null,inst_56049);var state_56089__$1 = state_56089;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56089__$1,(15),out,inst_56077);
} else
{if((state_val_56090 === (2)))
{var state_56089__$1 = state_56089;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56089__$1,(4),ch);
} else
{if((state_val_56090 === (11)))
{var inst_56053 = (state_56089[(9)]);var inst_56057 = (state_56089[(10)]);var inst_56067 = (state_56089[(2)]);var inst_56068 = [];var inst_56069 = inst_56068.push(inst_56053);var inst_56049 = inst_56068;var inst_56050 = inst_56057;var state_56089__$1 = (function (){var statearr_56101 = state_56089;(statearr_56101[(11)] = inst_56067);
(statearr_56101[(12)] = inst_56069);
(statearr_56101[(7)] = inst_56049);
(statearr_56101[(8)] = inst_56050);
return statearr_56101;
})();var statearr_56102_56128 = state_56089__$1;(statearr_56102_56128[(2)] = null);
(statearr_56102_56128[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56090 === (9)))
{var inst_56049 = (state_56089[(7)]);var inst_56065 = cljs.core.vec.call(null,inst_56049);var state_56089__$1 = state_56089;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56089__$1,(11),out,inst_56065);
} else
{if((state_val_56090 === (5)))
{var inst_56053 = (state_56089[(9)]);var inst_56057 = (state_56089[(10)]);var inst_56050 = (state_56089[(8)]);var inst_56057__$1 = f.call(null,inst_56053);var inst_56058 = cljs.core._EQ_.call(null,inst_56057__$1,inst_56050);var inst_56059 = cljs.core.keyword_identical_QMARK_.call(null,inst_56050,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_56060 = (inst_56058) || (inst_56059);var state_56089__$1 = (function (){var statearr_56103 = state_56089;(statearr_56103[(10)] = inst_56057__$1);
return statearr_56103;
})();if(cljs.core.truth_(inst_56060))
{var statearr_56104_56129 = state_56089__$1;(statearr_56104_56129[(1)] = (8));
} else
{var statearr_56105_56130 = state_56089__$1;(statearr_56105_56130[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56090 === (14)))
{var inst_56082 = (state_56089[(2)]);var inst_56083 = cljs.core.async.close_BANG_.call(null,out);var state_56089__$1 = (function (){var statearr_56107 = state_56089;(statearr_56107[(13)] = inst_56082);
return statearr_56107;
})();var statearr_56108_56131 = state_56089__$1;(statearr_56108_56131[(2)] = inst_56083);
(statearr_56108_56131[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56090 === (10)))
{var inst_56072 = (state_56089[(2)]);var state_56089__$1 = state_56089;var statearr_56109_56132 = state_56089__$1;(statearr_56109_56132[(2)] = inst_56072);
(statearr_56109_56132[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56090 === (8)))
{var inst_56049 = (state_56089[(7)]);var inst_56053 = (state_56089[(9)]);var inst_56057 = (state_56089[(10)]);var inst_56062 = inst_56049.push(inst_56053);var tmp56106 = inst_56049;var inst_56049__$1 = tmp56106;var inst_56050 = inst_56057;var state_56089__$1 = (function (){var statearr_56110 = state_56089;(statearr_56110[(7)] = inst_56049__$1);
(statearr_56110[(14)] = inst_56062);
(statearr_56110[(8)] = inst_56050);
return statearr_56110;
})();var statearr_56111_56133 = state_56089__$1;(statearr_56111_56133[(2)] = null);
(statearr_56111_56133[(1)] = (2));
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
});})(c__5693__auto___56119,out))
;return ((function (switch__5678__auto__,c__5693__auto___56119,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_56115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56115[(0)] = state_machine__5679__auto__);
(statearr_56115[(1)] = (1));
return statearr_56115;
});
var state_machine__5679__auto____1 = (function (state_56089){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_56089);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e56116){if((e56116 instanceof Object))
{var ex__5682__auto__ = e56116;var statearr_56117_56134 = state_56089;(statearr_56117_56134[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56089);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56135 = state_56089;
state_56089 = G__56135;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_56089){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_56089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___56119,out))
})();var state__5695__auto__ = (function (){var statearr_56118 = f__5694__auto__.call(null);(statearr_56118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___56119);
return statearr_56118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___56119,out))
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